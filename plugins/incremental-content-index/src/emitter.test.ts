import assert from "node:assert/strict"
import { describe, it } from "node:test"
import type { FilePath, FullSlug, SimpleSlug } from "@quartz-community/types"
import {
  selectGraphEntries,
  truncateText,
  type ContentDetails,
  type ContentIndexMap,
} from "./emitter.js"

describe("truncateText", () => {
  it("preserves text within the configured cap", () => {
    assert.equal(truncateText("hello", 5), "hello")
    assert.equal(truncateText("hello", 10), "hello")
  })

  it("truncates at the cap without splitting surrogate pairs", () => {
    assert.equal(truncateText("abcdef", 3), "abc")
    assert.equal(truncateText("a😀b", 2), "a")
    assert.equal(truncateText("a😀b", 3), "a😀")
  })

  it("clamps negative caps to an empty string", () => {
    assert.equal(truncateText("hello", -1), "")
  })
})

describe("selectGraphEntries", () => {
  const entry = (slug: string, links: string[]): ContentDetails => ({
    slug: slug as FullSlug,
    filePath: `${slug}.md` as FilePath,
    title: slug,
    links: links as SimpleSlug[],
    tags: [],
    content: "",
  })

  it("keeps the highest-degree nodes and filters edges to the selected subgraph", () => {
    const index: ContentIndexMap = new Map([
      ["hub" as FullSlug, entry("hub", ["a", "b", "c"])],
      ["a" as FullSlug, entry("a", ["hub"])],
      ["b" as FullSlug, entry("b", ["hub"])],
      ["c" as FullSlug, entry("c", ["hub"])],
    ])

    const selected = selectGraphEntries(index, 2)

    assert.deepEqual([...selected.keys()], ["hub", "a"])
    assert.deepEqual(selected.get("hub" as FullSlug)?.links, ["a"])
    assert.deepEqual(selected.get("a" as FullSlug)?.links, ["hub"])
  })

  it("uses slug ordering to break equal-degree ties deterministically", () => {
    const index: ContentIndexMap = new Map([
      ["b" as FullSlug, entry("b", [])],
      ["a" as FullSlug, entry("a", [])],
    ])

    assert.deepEqual([...selectGraphEntries(index, 1).keys()], ["a"])
  })

  it("keeps only the strongest in-subgraph links per node", () => {
    const index: ContentIndexMap = new Map([
      ["hub" as FullSlug, entry("hub", ["a", "b", "c"])],
      ["a" as FullSlug, entry("a", ["hub", "b"])],
      ["b" as FullSlug, entry("b", ["hub"])],
      ["c" as FullSlug, entry("c", [])],
    ])

    const selected = selectGraphEntries(index, 4, 2)

    assert.deepEqual(selected.get("hub" as FullSlug)?.links, ["a", "b"])
  })
})
