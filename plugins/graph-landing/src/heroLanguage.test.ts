import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { pickHeroLanguage } from "./heroLanguage"

describe("pickHeroLanguage", () => {
  it("matches on the primary subtag in visitor preference order", () => {
    assert.equal(pickHeroLanguage(["ko", "en"], ["en-US", "ko-KR"]), "en")
    assert.equal(pickHeroLanguage(["ko", "en"], ["ko-KR", "en-US"]), "ko")
    assert.equal(pickHeroLanguage(["ko", "en"], ["EN"]), "en")
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
