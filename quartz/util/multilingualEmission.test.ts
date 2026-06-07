import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import test, { describe } from "node:test"

const repoRoot = new URL("../..", import.meta.url).pathname
const fixtureContent = "quartz/test/fixtures/multilingual-build-content"

function runFixtureBuild(): string {
  const output = mkdtempSync(join(tmpdir(), "quartz-multilingual-emission-"))

  execFileSync("npx", ["quartz", "build", "-d", fixtureContent, "-o", output], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "pipe",
  })

  return output
}

describe("locale page emission", () => {
  test(
    "build emits locale-prefixed pages and a noindex legacy redirect",
    { timeout: 60000 },
    () => {
      const output = runFixtureBuild()

      try {
        const koPage = join(output, "ko/beauty-of-youth.html")
        const enPage = join(output, "en/beauty-of-youth.html")
        const legacyPage = join(output, "beauty-of-youth.html")

        assert.ok(existsSync(koPage), "expected Korean locale-prefixed page")
        assert.ok(existsSync(enPage), "expected English locale-prefixed page")
        assert.match(readFileSync(koPage, "utf8"), /젊음이 아름답다/)
        assert.match(readFileSync(enPage, "utf8"), /Youth Is Beautiful/)

        const legacyHtml = readFileSync(legacyPage, "utf8")

        assert.match(legacyHtml, /noindex/)
        assert.match(legacyHtml, /\/ko\/beauty-of-youth/)
      } finally {
        rmSync(output, { recursive: true, force: true })
      }
    },
  )
})
