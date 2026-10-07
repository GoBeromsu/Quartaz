import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { resolveLocale } from "./locale"

describe("resolveLocale", () => {
  it("works on a plain site with no multilingual plugin", () => {
    assert.deepEqual(resolveLocale({ slug: "graph", locales: [], siteLocale: "en-US" }), {
      localeId: "en",
      sourceLocale: "en",
      prefixed: false,
    })
    // "index" must never be mistaken for a locale.
    assert.equal(resolveLocale({ slug: "index", locales: [] }).localeId, "en")
    assert.equal(resolveLocale({ slug: "index", locales: [], siteLocale: "ko-KR" }).localeId, "ko")
  })

  it("honours slug prefixes only when they are configured locales", () => {
    const locales = [{ id: "ko" }, { id: "en" }]
    assert.deepEqual(resolveLocale({ slug: "en/graph", locales, sourceLocale: "ko" }), {
      localeId: "en",
      sourceLocale: "ko",
      prefixed: true,
    })
    assert.equal(resolveLocale({ slug: "docs/graph", locales, defaultLocale: "ko" }).localeId, "ko")
  })

  it("lets frontmatter locale win", () => {
    assert.equal(
      resolveLocale({ frontmatterLocale: "ko", slug: "en/x", locales: [{ id: "en" }] }).localeId,
      "ko",
    )
  })
})
