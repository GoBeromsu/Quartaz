import assert from "node:assert/strict"
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { basename, join } from "node:path"
import { spawnSync } from "node:child_process"
import test, { describe } from "node:test"

const workflowScript = new URL(
  "../../.codex/skills/korean-blog-translator/scripts/translate_blog_post.mjs",
  import.meta.url,
)

type CommandResult = {
  readonly status: number | null
  readonly stdout: string
  readonly stderr: string
}

function tempWorkspace(): string {
  return mkdtempSync(join(tmpdir(), "blog-translation-workflow-"))
}

function sourceMarkdown(): string {
  return `---
title: 젊음이 아름답다
permalink: beauty-of-youth
tags:
  - essay
---

> [!note]
> 원문 콜아웃입니다.

본문 첫 문장입니다.

![Cover](/_attachments/youth.png)

[[Related Note|관련 노트]]

\`\`\`ts
const stable = "do not translate"
\`\`\`
`
}

function runWorkflow(args: readonly string[], env?: NodeJS.ProcessEnv): CommandResult {
  const result = spawnSync(process.execPath, [workflowScript.pathname, ...args], {
    encoding: "utf8",
    env: { ...process.env, ...env },
  })

  return {
    status: result.status,
    stdout: result.stdout,
    stderr: result.stderr,
  }
}

function writeSource(dir: string, content = sourceMarkdown()): string {
  const sourcePath = join(dir, "ko-source.md")
  writeFileSync(sourcePath, content)

  return sourcePath
}

describe("translation workflow", () => {
  test("dry-run reports target translations without writing markdown", () => {
    const workspace = tempWorkspace()
    const sourcePath = writeSource(workspace)
    const outDir = join(workspace, "translated")
    const result = runWorkflow([
      "--source",
      sourcePath,
      "--locales",
      "en,es",
      "--out-dir",
      outDir,
      "--provider",
      "mock",
      "--dry-run",
    ])

    assert.equal(result.status, 0, result.stderr)
    const manifest = JSON.parse(result.stdout)

    assert.equal(manifest.dryRun, true)
    assert.deepEqual(
      manifest.translations.map((entry: { readonly locale: string }) => entry.locale),
      ["en", "es"],
    )
    assert.deepEqual(
      manifest.translations.map((entry: { readonly status: string }) => entry.status),
      ["would-write", "would-write"],
    )
    assert.throws(() => readFileSync(join(outDir, "en", basename(sourcePath)), "utf8"))
  })

  test("mock provider preserves protected markdown regions when writing", () => {
    const workspace = tempWorkspace()
    const sourcePath = writeSource(workspace)
    const outDir = join(workspace, "translated")
    const result = runWorkflow([
      "--source",
      sourcePath,
      "--locales",
      "en",
      "--out-dir",
      outDir,
      "--provider",
      "mock",
    ])

    assert.equal(result.status, 0, result.stderr)
    const manifest = JSON.parse(result.stdout)
    const targetPath = manifest.translations[0].targetPath
    const output = readFileSync(targetPath, "utf8")

    assert.match(output, /locale: en/)
    assert.match(output, /sourceLocale: ko/)
    assert.match(output, /sourceHash: sha256:/)
    assert.match(output, /translationStatus: translated/)
    assert.match(output, /permalink: beauty-of-youth/)
    assert.match(output, /> \[!note\]/)
    assert.match(output, /!\[Cover\]\(\/_attachments\/youth\.png\)/)
    assert.match(output, /\[\[Related Note\|관련 노트\]\]/)
    assert.match(output, /const stable = "do not translate"/)
  })

  test("stale existing translations are reported without overwrite", () => {
    const workspace = tempWorkspace()
    const sourcePath = writeSource(workspace)
    const outDir = join(workspace, "translated")
    const targetDir = join(outDir, "en")
    const targetPath = join(targetDir, basename(sourcePath))
    mkdirSync(targetDir, { recursive: true })
    writeFileSync(
      targetPath,
      `---
title: Hand Edited
locale: en
sourceLocale: ko
sourceHash: sha256:old
translationStatus: translated
permalink: beauty-of-youth
---

Hand edited translation.
`,
      { flag: "wx" },
    )

    const result = runWorkflow([
      "--source",
      sourcePath,
      "--locales",
      "en",
      "--out-dir",
      outDir,
      "--provider",
      "mock",
    ])

    assert.equal(result.status, 0, result.stderr)
    const manifest = JSON.parse(result.stdout)

    assert.equal(manifest.translations[0].status, "stale")
    assert.match(readFileSync(targetPath, "utf8"), /Hand edited translation/)
  })

  test("solar provider fails before network calls when credentials are missing", () => {
    const workspace = tempWorkspace()
    const sourcePath = writeSource(workspace)
    const result = runWorkflow(
      [
        "--source",
        sourcePath,
        "--locales",
        "en",
        "--out-dir",
        join(workspace, "translated"),
        "--provider",
        "solar",
      ],
      { UPSTAGE_API_KEY: "" },
    )

    assert.notEqual(result.status, 0)
    assert.match(result.stderr, /UPSTAGE_API_KEY/)
  })
})
