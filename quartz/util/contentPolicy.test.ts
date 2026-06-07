import assert from "node:assert/strict"
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { spawnSync } from "node:child_process"
import test, { describe } from "node:test"

const policyScript = new URL("../../scripts/check-content-policy.mjs", import.meta.url)
const translationScript = new URL(
  "../../.codex/skills/korean-blog-translator/scripts/translate_blog_post.mjs",
  import.meta.url,
)
const watchScript = new URL("../../scripts/watch-content.mjs", import.meta.url)

type CommandResult = {
  readonly status: number | null
  readonly stdout: string
  readonly stderr: string
}

function tempContentRoot(): string {
  return mkdtempSync(join(tmpdir(), "blog-content-policy-"))
}

function runNode(script: URL, args: readonly string[]): CommandResult {
  const result = spawnSync(process.execPath, [script.pathname, ...args], {
    encoding: "utf8",
  })

  return {
    status: result.status,
    stdout: result.stdout,
    stderr: result.stderr,
  }
}

function sourceMarkdown(): string {
  return `---
title: 젊음이 아름답다
permalink: beauty-of-youth
---

본문입니다.
`
}

describe("content sync and attachment policy", () => {
  test("rejects file URL markdown before publish", () => {
    const root = tempContentRoot()
    writeFileSync(join(root, "bad.md"), "![local](file:///Users/beomsu/image.png)\n")
    const result = runNode(policyScript, [root, "--json"])

    assert.notEqual(result.status, 0)
    const report = JSON.parse(result.stdout)

    assert.equal(report.ok, false)
    assert.equal(report.violations[0].type, "file-url")
    assert.match(report.violations[0].file, /bad\.md/)
  })

  test("reports missing attachment references deterministically", () => {
    const root = tempContentRoot()
    writeFileSync(join(root, "missing.md"), "![cover](/_attachments/missing.png)\n")
    const result = runNode(policyScript, [root, "--json"])

    assert.notEqual(result.status, 0)
    const report = JSON.parse(result.stdout)

    assert.equal(report.violations[0].type, "missing-attachment")
    assert.equal(report.violations[0].reference, "/_attachments/missing.png")
  })

  test("allows root-relative attachments that exist", () => {
    const root = tempContentRoot()
    mkdirSync(join(root, "_attachments"), { recursive: true })
    writeFileSync(join(root, "_attachments", "cover.png"), "image")
    writeFileSync(join(root, "ok.md"), "![cover](/_attachments/cover.png)\n")
    const result = runNode(policyScript, [root, "--json"])

    assert.equal(result.status, 0, result.stderr)
    const report = JSON.parse(result.stdout)

    assert.equal(report.ok, true)
    assert.deepEqual(report.violations, [])
  })

  test("allows source markdown to reference attachments preserved in content", () => {
    const sourceRoot = tempContentRoot()
    const contentRoot = tempContentRoot()
    mkdirSync(join(contentRoot, "_attachments"), { recursive: true })
    writeFileSync(join(contentRoot, "_attachments", "cover.png"), "image")
    writeFileSync(join(sourceRoot, "ok.md"), "![cover](/_attachments/cover.png)\n")
    const result = runNode(policyScript, [sourceRoot, "--attachment-root", contentRoot, "--json"])

    assert.equal(result.status, 0, result.stderr)
    const report = JSON.parse(result.stdout)

    assert.equal(report.ok, true)
    assert.deepEqual(report.violations, [])
  })

  test("translation staging shorthand targets deploy-staging before sync", () => {
    const root = tempContentRoot()
    const sourcePath = join(root, "ko-source.md")
    writeFileSync(sourcePath, sourceMarkdown())
    const result = runNode(translationScript, [
      "--source",
      sourcePath,
      "--locales",
      "en",
      "--out-dir",
      "@staging",
      "--provider",
      "mock",
      "--dry-run",
    ])

    assert.equal(result.status, 0, result.stderr)
    const manifest = JSON.parse(result.stdout)

    assert.match(manifest.outputRoot, /Ataraxia\/40\. Digital Garden\/\.deploy-staging$/)
    assert.match(
      manifest.translations[0].targetPath,
      /Ataraxia\/40\. Digital Garden\/\.deploy-staging\/en\/ko-source\.md$/,
    )
  })

  test("watch-content exposes the translation staging source used by sync", () => {
    const result = runNode(watchScript, ["--print-translation-output-dir"])

    assert.equal(result.status, 0, result.stderr)
    assert.match(result.stdout, /Ataraxia\/40\. Digital Garden\/\.deploy-staging/)
  })
})
