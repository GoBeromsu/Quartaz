import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { nextHeroLanguage, pickHeroLanguage } from "./heroLanguage"

describe("pickHeroLanguage", () => {
  it("matches on the primary subtag in visitor preference order", () => {
    assert.equal(pickHeroLanguage(["ko", "en", "ja"], ["ja-JP", "en-US"]), "ja")
    assert.equal(pickHeroLanguage(["ko", "en"], ["ko-KR", "en-US"]), "ko")
    assert.equal(pickHeroLanguage(["ko", "en"], ["EN"]), "en")
  })

  it("prefers the site's own language wherever it sits in the list", () => {
    assert.equal(pickHeroLanguage(["ko", "en"], ["en-US", "ko-KR"]), "ko")
    assert.equal(pickHeroLanguage(["ko", "en"], ["en-US", "en", "ko"]), "ko")
    assert.equal(pickHeroLanguage(["en", "ko"], ["ko-KR", "en-US"]), "en")
  })

  it("uses the fallback only when nothing matches and it is available", () => {
    assert.equal(pickHeroLanguage(["ko", "en"], ["ja-JP"], "en"), "en")
    assert.equal(pickHeroLanguage(["ko", "en"], ["ko-KR"], "en"), "ko")
    assert.equal(pickHeroLanguage(["ko", "en"], ["ja-JP"], "fr"), null)
  })

  it("keeps the default when nothing matches or the list is empty", () => {
    assert.equal(pickHeroLanguage(["ko", "en"], ["ja-JP", "fr"]), null)
    assert.equal(pickHeroLanguage(["ko", "en"], []), null)
    assert.equal(pickHeroLanguage(["ko", "en"], [""]), null)
  })

  it("survives toString() round-trip for the inline script", () => {
    const fn = new Function(`return (${pickHeroLanguage.toString()})`)() as typeof pickHeroLanguage
    assert.equal(fn(["ko", "en"], ["en-GB"]), "en")
  })
})

describe("nextHeroLanguage", () => {
  it("switches to the other language and wraps around", () => {
    assert.equal(nextHeroLanguage(["ko", "en"], "ko"), "en")
    assert.equal(nextHeroLanguage(["ko", "en"], "en"), "ko")
    assert.equal(nextHeroLanguage(["ko", "en", "ja"], "ja"), "ko")
  })

  it("starts from the first language when the current one is unknown", () => {
    assert.equal(nextHeroLanguage(["ko", "en"], "fr"), "ko")
    assert.equal(nextHeroLanguage(["ko", "en"], null), "ko")
  })

  it("offers nothing when there is only one language", () => {
    assert.equal(nextHeroLanguage(["ko"], "ko"), null)
    assert.equal(nextHeroLanguage([], "ko"), null)
  })
})
