import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { isExternalHref, profileBlocks, sectionIndexLabel } from "./profile"

const sections = [{ id: "work", title: "일" }]

describe("profileBlocks", () => {
  it("returns nothing without sections", () => {
    assert.deepEqual(profileBlocks(undefined, "ko", ["ko"]), [])
    assert.deepEqual(profileBlocks({ sections: [] }, "ko", ["ko"]), [])
  })

  it("shows the default language and hides translations", () => {
    const blocks = profileBlocks(
      { sections, footer: { note: "n" }, translations: { en: { sections: [{ title: "Work" }] } } },
      "ko",
      ["ko", "en"],
    )
    assert.deepEqual(
      blocks.map((block) => [block.lang, block.hidden]),
      [
        ["ko", false],
        ["en", true],
      ],
    )
    assert.equal(blocks[1]?.copy.sections?.[0]?.title, "Work")
    assert.equal(blocks[1]?.copy.footer?.note, "n")
  })

  it("reuses the default sections for a hero language without a translation", () => {
    const blocks = profileBlocks({ sections }, "ko", ["ko", "en"])
    assert.equal(blocks.length, 2)
    assert.equal(blocks[1]?.copy.sections, sections)
  })
})

describe("profile helpers", () => {
  it("pads the panel numeral", () => {
    assert.equal(sectionIndexLabel(0), "01")
    assert.equal(sectionIndexLabel(11), "12")
  })

  it("detects external links", () => {
    assert.equal(isExternalHref("https://example.com"), true)
    assert.equal(isExternalHref("mailto:a@b.c"), true)
    assert.equal(isExternalHref("/about"), false)
    assert.equal(isExternalHref("#work"), false)
  })
})
