import { readdirSync, readFileSync, statSync } from "node:fs"
import { basename, join, relative, resolve } from "node:path"

import {
  parseLocaleList,
  resolveOutDir,
  sourceHash,
  splitFrontmatter,
  translateSource,
  validateLocales,
  WorkflowError,
} from "./translation-core.mjs"

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

  walk(root)
  return files.sort((left, right) => left.localeCompare(right))
}

function countHangul(markdown) {
  return (markdown.match(/[가-힣]/g) ?? []).length
}

function permalinkFor(file, frontmatter) {
  if (typeof frontmatter.permalink === "string" && frontmatter.permalink.length > 0) {
    return frontmatter.permalink
  }

  return basename(file, ".md")
}

function classifyFile(contentRoot, file) {
  const rel = relative(contentRoot, file)
  const source = readFileSync(file, "utf8")
  const parsed = splitFrontmatter(source, rel)
  const permalink = permalinkFor(file, parsed.frontmatter)
  const base = basename(file)

  if (rel === "index.md" || rel === "About.md") {
    return { rel, source, parsed, permalink, status: "utility", reason: "site utility page" }
  }

  if (rel.startsWith("InBox/")) {
    return { rel, source, parsed, permalink, status: "exclude", reason: "inbox/private page" }
  }

  if (base.includes(".external.") || base.includes(".externel.")) {
    return { rel, source, parsed, permalink, status: "blocked", reason: "external/imported page" }
  }

  if (!rel.startsWith("Articles/")) {
    return { rel, source, parsed, permalink, status: "utility", reason: "non-article page" }
  }

  if (countHangul(source) < 30) {
    return { rel, source, parsed, permalink, status: "blocked", reason: "not a Korean source" }
  }

  return {
    rel,
    source,
    parsed,
    permalink,
    status: "translate",
    reason: "publishable Korean article",
  }
}

function parseBackfillArgs(argv) {
  const args = {
    dryRun: false,
    provider: "mock",
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === "--dry-run") {
      args.dryRun = true
      continue
    }

    const value = argv[index + 1]
    if (!value || value.startsWith("--")) {
      throw new WorkflowError(`missing value for ${arg}`)
    }
    index += 1

    if (arg === "--content") args.content = value
    else if (arg === "--locales") args.locales = value
    else if (arg === "--out-dir") args.outDir = value
    else if (arg === "--provider") args.provider = value
    else throw new WorkflowError(`unknown option: ${arg}`)
  }

  if (!args.content) throw new WorkflowError("missing --content")
  if (!args.locales) throw new WorkflowError("missing --locales")
  if (!args.outDir) throw new WorkflowError("missing --out-dir")
  if (args.provider !== "mock" && args.provider !== "solar") {
    throw new WorkflowError("--provider must be mock or solar")
  }

  return {
    ...args,
    contentRoot: resolve(args.content),
    outDir: resolveOutDir(args.outDir),
    locales: parseLocaleList(args.locales),
  }
}

function blockedTranslations(locales, reason) {
  return locales.map((locale) => ({
    locale,
    status: "blocked",
    reason,
  }))
}

async function translatedEntry(args, file) {
  const missingSolarKey = args.provider === "solar" && !process.env.UPSTAGE_API_KEY
  const baseEntry = {
    path: file.rel,
    status: file.status,
    reason: file.reason,
    permalink: file.permalink,
    sourceUrl: `/ko/${file.permalink}`,
    sourceHash: sourceHash(file.source),
  }

  if (missingSolarKey) {
    return {
      ...baseEntry,
      translations: blockedTranslations(
        args.locales,
        "UPSTAGE_API_KEY is required for --provider solar",
      ),
    }
  }

  const translation = await translateSource({
    sourcePath: join(args.contentRoot, file.rel),
    locales: args.locales,
    outDir: args.outDir,
    provider: args.provider,
    dryRun: args.dryRun,
  })

  return {
    ...baseEntry,
    translations: translation.translations,
  }
}

function nonTranslatedEntry(file) {
  return {
    path: file.rel,
    status: file.status,
    reason: file.reason,
    permalink: file.permalink,
    sourceUrl: `/ko/${file.permalink}`,
    translations: [],
  }
}

export async function runBackfill(argv) {
  const args = parseBackfillArgs(argv)
  validateLocales(args.locales)

  const classified = markdownFiles(args.contentRoot).map((file) =>
    classifyFile(args.contentRoot, file),
  )
  const files = []

  for (const file of classified) {
    if (file.status === "translate") {
      files.push(await translatedEntry(args, file))
    } else {
      files.push(nonTranslatedEntry(file))
    }
  }

  return {
    mode: "backfill",
    dryRun: args.dryRun,
    provider: args.provider,
    contentRoot: args.contentRoot,
    outputRoot: args.outDir,
    inputCount: files.length,
    files,
  }
}
