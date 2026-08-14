import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import { mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import test, { describe } from "node:test"

const repoRoot = new URL("../..", import.meta.url).pathname
const fixtureContent = "quartz/test/fixtures/multilingual-build-content"
const expectedHreflangs = ["ko-KR", "en-US"]

type ContentIndexEntry = {
  readonly title: string
  readonly multilingual?: {
    readonly locale: string
    readonly translationKey: string
    readonly canonicalUrl: string
  }
}

function runFixtureBuild(): string {
  const output = mkdtempSync(join(tmpdir(), "quartz-multilingual-index-"))

  execFileSync(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", fixtureContent, "-o", output], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "pipe",
  })

  return output
}

describe("localized indexes", () => {
  test(
    "sitemap includes reciprocal alternate links for each localized URL",
    { timeout: 60000 },
    () => {
      const output = runFixtureBuild()

      try {
        const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8")

        assert.match(sitemap, /<loc>https:\/\/beomsukoh\.com\/en\/beauty-of-youth<\/loc>/)
        for (const hreflang of expectedHreflangs) {
          assert.match(sitemap, new RegExp(`xhtml:link rel="alternate" hreflang="${hreflang}"`))
        }
        assert.doesNotMatch(sitemap, /hreflang="zh-CN"/)
        assert.doesNotMatch(sitemap, /hreflang="ar-SA"/)
        assert.doesNotMatch(sitemap, /<loc>https:\/\/beomsukoh\.com\/beauty-of-youth<\/loc>/)
      } finally {
        rmSync(output, { recursive: true, force: true })
      }
    },
  )

  test(
    "sitemap fallback URLs do not double-encode existing legacy slugs",
    { timeout: 60000 },
    () => {
      const output = runFixtureBuild()

      try {
        const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8")

        assert.match(
          sitemap,
          /<loc>https:\/\/beomsukoh\.com\/%EB%A0%88%EA%B1%B0%EC%8B%9C-%EB%AC%B8%EC%84%9C<\/loc>/,
        )
        assert.doesNotMatch(sitemap, /%25EB%25A0%2588/)
      } finally {
        rmSync(output, { recursive: true, force: true })
      }
    },
  )

  test("RSS defaults to Korean source entries", { timeout: 60000 }, () => {
    const output = runFixtureBuild()

    try {
      const rss = readFileSync(join(output, "index.xml"), "utf8")

      assert.match(rss, /젊음이 아름답다/)
      assert.doesNotMatch(rss, /Youth Is Beautiful/)
      assert.doesNotMatch(rss, /الشباب جميل/)
    } finally {
      rmSync(output, { recursive: true, force: true })
    }
  })

  test(
    "content index carries locale metadata for active-locale search filtering",
    {
      timeout: 60000,
    },
    () => {
      const output = runFixtureBuild()

      try {
        const index = JSON.parse(
          readFileSync(join(output, "static/contentIndex.json"), "utf8"),
        ) as Record<string, ContentIndexEntry>

        assert.equal(index["ko/beauty-of-youth"]?.multilingual?.locale, "ko")
        assert.equal(index["en/beauty-of-youth"]?.multilingual?.locale, "en")
        assert.equal(
          index["ko/beauty-of-youth"]?.multilingual?.canonicalUrl,
          "https://beomsukoh.com/ko/beauty-of-youth",
        )

        const koEntries = Object.values(index).filter(
          (entry) => entry.multilingual?.locale === "ko",
        )
        assert.deepEqual(
          koEntries.map((entry) => entry.title),
          ["젊음이 아름답다"],
        )
      } finally {
        rmSync(output, { recursive: true, force: true })
      }
    },
  )
})
