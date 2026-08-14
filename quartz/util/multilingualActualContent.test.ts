import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import test, { describe } from "node:test"

const repoRoot = new URL("../..", import.meta.url).pathname

function runContentBuild(): string {
  const output = mkdtempSync(join(tmpdir(), "quartz-task12-actual-content-"))

  execFileSync(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", "content", "-o", output], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "pipe",
  })

  return output
}

describe("actual multilingual content surface", () => {
  test("emits Task 12 locale QA pages from real content", { timeout: 60000 }, () => {
    const output = runContentBuild()

    try {
      const koHome = join(output, "ko/index.html")
      const enHome = join(output, "en/index.html")
      const enBeauty = join(output, "en/beauty-of-youth.html")
      const xDefaultHome = join(output, "index.html")
      const legacy = join(output, "beauty-of-youth.html")

      assert.ok(existsSync(xDefaultHome), "expected x-default language selector")
      assert.ok(existsSync(koHome), "expected /ko/ home page")
      assert.ok(existsSync(enHome), "expected /en/ home page")
      assert.ok(existsSync(enBeauty), "expected /en/beauty-of-youth page")
      assert.equal(existsSync(join(output, "ar")), false)
      assert.equal(existsSync(join(output, "zh-Hans")), false)
      assert.equal(existsSync(join(output, "hi")), false)
      assert.equal(existsSync(join(output, "es")), false)
      assert.equal(existsSync(join(output, "fr")), false)
      assert.equal(existsSync(join(output, "bn")), false)
      assert.equal(existsSync(join(output, "pt-BR")), false)
      const xDefaultHtml = readFileSync(xDefaultHome, "utf8")
      assert.match(xDefaultHtml, /<title>Choose language<\/title>/)
      assert.doesNotMatch(xDefaultHtml, /noindex/)
      assert.match(xDefaultHtml, /localStorage\.getItem\(storageKey\)/)
      assert.match(xDefaultHtml, /navigator\.languages/)
      assert.match(xDefaultHtml, /location\.replace\(chosen\.prefix\)/)
      assert.match(xDefaultHtml, /preferred-locale/)
      assert.match(xDefaultHtml, /<a href="\/ko\/" lang="ko-KR" hreflang="ko-KR">한국어<\/a>/)
      assert.match(xDefaultHtml, /<a href="\/en\/" lang="en-US" hreflang="en-US">English<\/a>/)
      assert.match(xDefaultHtml, /hreflang="x-default"/)
      assert.doesNotMatch(xDefaultHtml, />zh-Hans</)
      const koHomeHtml = readFileSync(koHome, "utf8")
      assert.match(koHomeHtml, /<title>Beomsu<\/title>/)
      assert.doesNotMatch(koHomeHtml, /<title>Articles<\/title>/)
      assert.match(readFileSync(enHome, "utf8"), /<title>Beomsu<\/title>/)
      assert.match(readFileSync(legacy, "utf8"), /noindex/)
      assert.match(readFileSync(legacy, "utf8"), /\/ko\/beauty-of-youth/)
    } finally {
      rmSync(output, { recursive: true, force: true })
    }
  })
})
