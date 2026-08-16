import assert from "node:assert/strict"
import { describe, it } from "node:test"
import {
  expandHopIds,
  isBeyondCullDistance,
  lodLevelForDistance,
  selectRenderedSubset,
  type GraphData,
  type GraphLink,
  type GraphNode,
} from "./graph-landing-pure"

function makeNode(id: string, degree: number): GraphNode {
  return {
    id,
    name: id,
    type: "note",
    val: 1,
    degree,
    isHub: false,
    tag: "",
    slug: id,
    url: `/${id}`,
    folder: "",
    tags: [],
    dominantTag: "",
    excerpt: "",
    phase: 0,
  }
}

function makeLink(source: string, target: string, kind: GraphLink["kind"] = "wikilink"): GraphLink {
  return { source, target, kind }
}

describe("selectRenderedSubset", () => {
  it("returns the exact same object reference when maxRenderedNodes is undefined", () => {
    const full: GraphData = { nodes: [makeNode("a", 1)], links: [] }
    assert.equal(selectRenderedSubset(full, undefined), full)
  })

  it("returns the exact same object reference for a NaN maxRenderedNodes", () => {
    const full: GraphData = { nodes: [makeNode("a", 1), makeNode("b", 2)], links: [] }
    assert.equal(selectRenderedSubset(full, Number.NaN), full)
  })

  it("returns the exact same object reference for a negative maxRenderedNodes", () => {
    const full: GraphData = { nodes: [makeNode("a", 1), makeNode("b", 2)], links: [] }
    assert.equal(selectRenderedSubset(full, -5), full)
  })

  it("returns the exact same object reference when maxRenderedNodes >= node count", () => {
    const full: GraphData = { nodes: [makeNode("a", 1), makeNode("b", 2)], links: [] }
    assert.equal(selectRenderedSubset(full, 2), full)
    assert.equal(selectRenderedSubset(full, 5), full)
  })

  it("picks the top-N nodes by degree, highest first", () => {
    const full: GraphData = {
      nodes: [makeNode("low", 1), makeNode("high", 10), makeNode("mid", 5)],
      links: [],
    }
    const subset = selectRenderedSubset(full, 2)
    assert.notEqual(subset, full)
    assert.deepEqual(
      subset.nodes.map((n) => n.id),
      ["high", "mid"],
    )
  })

  it("breaks degree ties by ascending id", () => {
    const full: GraphData = {
      nodes: [makeNode("charlie", 3), makeNode("alpha", 3), makeNode("bravo", 3)],
      links: [],
    }
    const subset = selectRenderedSubset(full, 1)
    assert.deepEqual(
      subset.nodes.map((n) => n.id),
      ["alpha"],
    )
  })

  it("keeps only links whose endpoints are both in the rendered subset", () => {
    const full: GraphData = {
      nodes: [makeNode("high", 10), makeNode("mid", 5), makeNode("low", 1)],
      links: [makeLink("high", "mid"), makeLink("mid", "low"), makeLink("high", "low")],
    }
    const subset = selectRenderedSubset(full, 2)
    assert.deepEqual(
      subset.nodes.map((n) => n.id),
      ["high", "mid"],
    )
    // Only the high<->mid link survives: low is dropped from the subset, so
    // both links touching it (mid-low, high-low) must be filtered out too.
    assert.equal(subset.links.length, 1)
    assert.equal(subset.links[0]?.source, "high")
    assert.equal(subset.links[0]?.target, "mid")
  })
})

describe("expandHopIds", () => {
  it("returns an empty set for zero hops", () => {
    const adjacency = new Map([["a", new Set(["b"])]])
    assert.deepEqual(expandHopIds(adjacency, new Set(["a"]), "a", 0), new Set())
  })

  it("returns an empty set for negative hops", () => {
    const adjacency = new Map([["a", new Set(["b"])]])
    assert.deepEqual(expandHopIds(adjacency, new Set(["a"]), "a", -1), new Set())
  })

  it("returns an empty set for non-finite (NaN) hops", () => {
    const adjacency = new Map([["a", new Set(["b"])]])
    assert.deepEqual(expandHopIds(adjacency, new Set(["a"]), "a", Number.NaN), new Set())
  })

  it("collects direct neighbors at 1 hop, excluding already-rendered ones", () => {
    const adjacency = new Map([["a", new Set(["b", "c", "d"])]])
    // "d" is already rendered, so it must not appear in the result even
    // though it's a direct neighbor.
    const renderedIds = new Set(["a", "d"])
    const result = expandHopIds(adjacency, renderedIds, "a", 1)
    assert.deepEqual(result, new Set(["b", "c"]))
  })

  it("walks multiple hops through a chain", () => {
    const adjacency = new Map([
      ["a", new Set(["b"])],
      ["b", new Set(["a", "c"])],
      ["c", new Set(["b", "d"])],
    ])
    const result = expandHopIds(adjacency, new Set(["a"]), "a", 2)
    assert.deepEqual(result, new Set(["b", "c"]))
  })

  it("does not revisit nodes across a cycle", () => {
    const adjacency = new Map([
      ["a", new Set(["b"])],
      ["b", new Set(["a", "c"])],
      ["c", new Set(["b", "a"])],
    ])
    // With a<->b<->c<->a all connected, 3 hops from "a" must still terminate
    // and only ever report "b" and "c" once each (via the `visited` guard),
    // never re-adding "a" itself.
    const result = expandHopIds(adjacency, new Set(["a"]), "a", 3)
    assert.deepEqual(result, new Set(["b", "c"]))
  })

  it("stops at the requested hop count and does not over-expand", () => {
    const adjacency = new Map([
      ["a", new Set(["b"])],
      ["b", new Set(["a", "c"])],
      ["c", new Set(["b", "d"])],
    ])
    const result = expandHopIds(adjacency, new Set(["a"]), "a", 1)
    assert.deepEqual(result, new Set(["b"]))
  })

  it("returns an empty set when the start node has no adjacency entry", () => {
    const adjacency = new Map<string, Set<string>>()
    const result = expandHopIds(adjacency, new Set(["a"]), "a", 2)
    assert.deepEqual(result, new Set())
  })
})

describe("lodLevelForDistance", () => {
  it("returns full when threshold is undefined, regardless of distance", () => {
    assert.equal(lodLevelForDistance(0, undefined), "full")
    assert.equal(lodLevelForDistance(1000, undefined), "full")
  })

  it("returns full when threshold is NaN", () => {
    assert.equal(lodLevelForDistance(1000, NaN), "full")
  })

  it("returns full when threshold is negative", () => {
    assert.equal(lodLevelForDistance(1000, -5), "full")
  })

  it("returns full when distance is strictly below threshold", () => {
    assert.equal(lodLevelForDistance(99, 100), "full")
  })

  it("returns dot when distance equals threshold", () => {
    assert.equal(lodLevelForDistance(100, 100), "dot")
  })

  it("returns dot when distance exceeds threshold", () => {
    assert.equal(lodLevelForDistance(150, 100), "dot")
  })

  it("returns dot for a zero threshold at zero distance (boundary is inclusive)", () => {
    assert.equal(lodLevelForDistance(0, 0), "dot")
  })
})

describe("isBeyondCullDistance", () => {
  it("returns false when cullDistance is undefined, regardless of distance", () => {
    assert.equal(isBeyondCullDistance(0, undefined), false)
    assert.equal(isBeyondCullDistance(1000, undefined), false)
  })

  it("returns false when cullDistance is NaN", () => {
    assert.equal(isBeyondCullDistance(1000, NaN), false)
  })

  it("returns false when cullDistance is negative", () => {
    assert.equal(isBeyondCullDistance(1000, -5), false)
  })

  it("returns false when distance is strictly below cullDistance", () => {
    assert.equal(isBeyondCullDistance(99, 100), false)
  })

  it("returns true when distance equals cullDistance", () => {
    assert.equal(isBeyondCullDistance(100, 100), true)
  })

  it("returns true when distance exceeds cullDistance", () => {
    assert.equal(isBeyondCullDistance(150, 100), true)
  })
})
