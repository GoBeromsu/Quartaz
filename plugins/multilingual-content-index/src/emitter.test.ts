import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { truncateText } from "./emitter"

describe("truncateText", () => {
  it("returns the text unchanged when it fits within maxChars", () => {
    assert.equal(truncateText("hello", 10), "hello")
    assert.equal(truncateText("hello", 5), "hello")
  })

  it("cuts plain (BMP) text at the exact character index", () => {
    assert.equal(truncateText("hello world", 5), "hello")
  })

  it("does not split a UTF-16 surrogate pair at the cut boundary", () => {
    // "\u{1F600}" (grinning face) is one Unicode code point encoded as a
    // high+low surrogate pair (2 UTF-16 code units). Cutting at length 1
    // would land exactly between the two units and produce a dangling,
    // unpaired surrogate; the safe cut backs up to 0 instead.
    const emoji = "\u{1F600}"
    assert.equal(emoji.length, 2, "sanity check: emoji is 2 UTF-16 code units")
    assert.equal(truncateText(emoji, 1), "")
  })

  it("keeps a full surrogate pair intact when maxChars covers it exactly", () => {
    const text = "a\u{1F600}b"
    // "a" (1) + emoji (2) + "b" (1) = length 4
    assert.equal(truncateText(text, 3), "a\u{1F600}")
  })

  it("only backs up the cut when the boundary actually splits a pair", () => {
    // Cutting right after a complete surrogate pair (index 3, between the
    // emoji and "b") should not be shifted further.
    const text = "a\u{1F600}b"
    assert.equal(truncateText(text, 3), "a\u{1F600}")
    // Cutting at a plain non-surrogate boundary is unaffected.
    assert.equal(truncateText("abcdef", 3), "abc")
  })

  it("returns an empty string when maxChars is clamped to 0", () => {
    // Mirrors the call site's `Math.max(0, options.contentMaxChars)` clamp
    // for a negative configured cap: after clamping, truncateText receives
    // 0 and must not fall back to slicing from the end of the string.
    assert.equal(truncateText("hello", Math.max(0, -5)), "")
  })
})
