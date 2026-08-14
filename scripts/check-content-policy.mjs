#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative, resolve } from "node:path"

function parseArgs(argv) {
  const root = argv.find((arg) => !arg.startsWith("--"))
  const attachmentRoots = []

  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--attachment-root" && argv[index + 1]) {
      attachmentRoots.push(resolve(argv[index + 1]))
      index += 1
    }
  }

  return {
    root: root ? resolve(root) : resolve("content"),
    attachmentRoots,
    json: argv.includes("--json"),
  }
}

function markdownFiles(root) {
  const files = []

  function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const path = join(dir, entry)
      const stat = statSync(path)
      if (stat.isDirectory()) {
        walk(path)
      } else if (entry.endsWith(".md")) {
        files.push(path)
      }
    }
  }

  if (existsSync(root)) {
    walk(root)
  }

  return files
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length
}

function decodeReference(reference) {
  try {
    return decodeURIComponent(reference)
  } catch {
    return reference
  }
}

function attachmentReferences(source) {
  const references = []
  const regex = /\/_attachments\/[^)\]\s]+/g

  for (const match of source.matchAll(regex)) {
    const raw = match[0]
    references.push({
      reference: decodeReference(raw),
      index: match.index ?? 0,
    })
  }

  return references
}

function rootAttachmentExists(root, attachmentRoots, reference) {
  const attachmentPath = reference.replace(/^\//, "")
  return [root, ...attachmentRoots].some((attachmentRoot) =>
    existsSync(join(attachmentRoot, attachmentPath)),
  )
}

function scanFile(root, attachmentRoots, file) {
  const source = readFileSync(file, "utf8")
  const rel = relative(root, file)
  const violations = []

  for (const match of source.matchAll(/file:\/\/[^\s)]+/g)) {
    violations.push({
      type: "file-url",
      file: rel,
      line: lineNumber(source, match.index ?? 0),
      reference: match[0],
    })
  }

  for (const attachment of attachmentReferences(source)) {
    if (!rootAttachmentExists(root, attachmentRoots, attachment.reference)) {
      violations.push({
        type: "missing-attachment",
        file: rel,
        line: lineNumber(source, attachment.index),
        reference: attachment.reference,
      })
    }
  }

  return violations
}

function scan(root, attachmentRoots) {
  const violations = markdownFiles(root).flatMap((file) => scanFile(root, attachmentRoots, file))

  return {
    ok: violations.length === 0,
    root,
    attachmentRoots,
    violations,
  }
}

const args = parseArgs(process.argv.slice(2))
const report = scan(args.root, args.attachmentRoots)

if (args.json) {
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
} else if (report.ok) {
  process.stdout.write(`[content-policy] OK: ${args.root}\n`)
} else {
  for (const violation of report.violations) {
    process.stderr.write(
      `[content-policy] ${violation.type}: ${violation.file}:${violation.line} ${violation.reference}\n`,
    )
  }
}

process.exit(report.ok ? 0 : 1)
