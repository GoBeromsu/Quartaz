import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import test, { describe } from "node:test"

const repoRoot = new URL("../..", import.meta.url).pathname
const fixtureContent = "quartz/test/fixtures/multilingual-build-content"
const expectedHreflangs = ["ko-KR", "en-US"]

function runFixtureBuild(): string {
  const output = mkdtempSync(join(tmpdir(), "quartz-multilingual-head-"))

  execFileSync(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", fixtureContent, "-o", output], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "pipe",
  })

  return output
}

describe("localized head metadata", () => {
  test("English page includes self canonical and reciprocal alternates", { timeout: 60000 }, () => {
    const output = runFixtureBuild()

    try {
      const html = readFileSync(join(output, "en/beauty-of-youth.html"), "utf8")

      assert.match(html, /<link rel="canonical" href="https:\/\/beomsukoh\.com\/en\/beauty-of-youth"/)
      assert.match(
        html,
        /<meta property="og:url" content="https:\/\/beomsukoh\.com\/en\/beauty-of-youth"/,
      )
      assert.match(
        html,
        /<meta property="twitter:url" content="https:\/\/beomsukoh\.com\/en\/beauty-of-youth"/,
      )
      for (const hreflang of expectedHreflangs) {
        assert.match(html, new RegExp(`hreflang="${hreflang}"`))
      }
      assert.match(html, /hreflang="x-default"/)
      assert.doesNotMatch(html, /hreflang="zh-CN"/)
      assert.doesNotMatch(html, /hreflang="ar-SA"/)
    } finally {
      rmSync(output, { recursive: true, force: true })
    }
  })

  test("unpublished locale pages are not emitted", { timeout: 60000 }, () => {
    const output = runFixtureBuild()

    try {
      const html = readFileSync(join(output, "en/beauty-of-youth.html"), "utf8")

      assert.match(html, /<html lang="en-US" dir="ltr"/)
      assert.equal(existsSync(join(output, "ar/beauty-of-youth.html")), false)
      assert.equal(existsSync(join(output, "zh-Hans/beauty-of-youth.html")), false)
    } finally {
      rmSync(output, { recursive: true, force: true })
    }
  })
})
