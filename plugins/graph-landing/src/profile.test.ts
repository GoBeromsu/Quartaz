import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { isExternalHref, profileBlocks, profileImageAttrs, sectionIndexLabel } from "./profile"

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

describe("profileImageAttrs", () => {
  it("returns null without a source", () => {
    assert.equal(profileImageAttrs(undefined), null)
    assert.equal(profileImageAttrs({ src: "  ", alt: "x" }), null)
  })

  it("keeps the size only as a positive pair", () => {
    assert.deepEqual(profileImageAttrs({ src: "/a.jpg", alt: "A", width: 800, height: 600 }), {
      src: "/a.jpg",
      alt: "A",
      width: 800,
      height: 600,
    })
    assert.deepEqual(profileImageAttrs({ src: "/a.jpg", alt: "A", width: 800 }), {
      src: "/a.jpg",
      alt: "A",
    })
    assert.deepEqual(profileImageAttrs({ src: "/a.jpg", alt: "A", width: 0, height: 600 }), {
      src: "/a.jpg",
      alt: "A",
    })
  })
})
