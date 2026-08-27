import assert from "node:assert/strict"
import { describe, it } from "node:test"
import {
  affectedFocusNodeIds,
  expandHopIds,
  getOrCreate,
  hubGravityDistanceScale,
  hubGravityStrengthScale,
  linkDegreeWeight,
  lodLevelForDistance,
  normalizedDegreeWeight,
  parseNonNegativeNumber,
  seedExpandedNodePosition,
  selectRenderedSubset,
  youtubeVideoId,
  youtubeTracks,
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

describe("normalizedDegreeWeight", () => {
  it("maps the degree range to bounded nonlinear weights", () => {
    assert.equal(normalizedDegreeWeight(1, 1, 100), 0)
    assert.equal(normalizedDegreeWeight(100, 1, 100), 1)
    assert.ok(normalizedDegreeWeight(25, 1, 100) > 0.4)
    assert.ok(normalizedDegreeWeight(25, 1, 100) < 0.5)
  })

  it("clamps out-of-range and invalid degrees", () => {
    assert.equal(normalizedDegreeWeight(-10, 1, 9), 0)
    assert.equal(normalizedDegreeWeight(100, 1, 9), 1)
    assert.equal(normalizedDegreeWeight(Number.NaN, 0, 9), 0)
  })

  it("returns deterministic weights for equal ranges", () => {
    assert.equal(normalizedDegreeWeight(0, 0, 0), 0)
    assert.equal(normalizedDegreeWeight(4, 4, 4), 0.5)
  })
})

describe("linkDegreeWeight", () => {
  it("uses the heavier endpoint and remains bounded", () => {
    assert.equal(linkDegreeWeight(0, 0, 16), 0)
    assert.equal(linkDegreeWeight(1, 16, 16), 1)
    assert.equal(linkDegreeWeight(64, 1, 16), 1)
  })
})

describe("hub gravity scales", () => {
  it("preserves the current degree-weighted behavior at default gravity", () => {
    assert.equal(hubGravityDistanceScale(0, 1), 1)
    assert.equal(hubGravityDistanceScale(1, 1), 0.76)
    assert.equal(hubGravityStrengthScale(0, 1), 1)
    assert.equal(hubGravityStrengthScale(1, 1), 1.3)
  })

  it("removes additional hub bias at zero gravity", () => {
    assert.equal(hubGravityDistanceScale(1, 0), 1)
    assert.equal(hubGravityStrengthScale(1, 0), 1)
  })

  it("applies the bounded maximum bias at maximum gravity", () => {
    assert.equal(hubGravityDistanceScale(1, 2), 0.52)
    assert.equal(hubGravityStrengthScale(1, 2), 1.6)
  })

  it("clamps invalid and out-of-range inputs", () => {
    assert.equal(hubGravityDistanceScale(Number.NaN, Number.NaN), 1)
    assert.equal(hubGravityStrengthScale(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), 1)
    assert.equal(hubGravityDistanceScale(2, 3), 0.52)
    assert.equal(hubGravityStrengthScale(-1, -1), 1)
  })

  it("keeps degree-weight boundaries bounded", () => {
    assert.equal(hubGravityDistanceScale(-1, 1), 1)
    assert.equal(hubGravityDistanceScale(1, 1), 0.76)
    assert.equal(hubGravityStrengthScale(-1, 1), 1)
    assert.equal(hubGravityStrengthScale(1, 1), 1.3)
  })
})

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

describe("youtubeVideoId", () => {
  it("returns undefined when unset", () => {
    assert.equal(youtubeVideoId(undefined), undefined)
    assert.equal(youtubeVideoId(null), undefined)
    assert.equal(youtubeVideoId(""), undefined)
    assert.equal(youtubeVideoId("   "), undefined)
  })

  it("accepts trimmed bare IDs", () => {
    assert.equal(youtubeVideoId("  o6HpCFhNcnQ  "), "o6HpCFhNcnQ")
    assert.equal(youtubeVideoId("abc-DEF_123"), "abc-DEF_123")
  })

  it("extracts IDs from trusted YouTube URL forms", () => {
    assert.equal(youtubeVideoId("https://youtube.com/watch?v=o6HpCFhNcnQ"), "o6HpCFhNcnQ")
    assert.equal(youtubeVideoId("https://music.youtube.com/watch?v=o6HpCFhNcnQ"), "o6HpCFhNcnQ")
    assert.equal(youtubeVideoId("https://m.youtube.com/watch?v=o6HpCFhNcnQ"), "o6HpCFhNcnQ")
    assert.equal(youtubeVideoId("https://youtu.be/o6HpCFhNcnQ"), "o6HpCFhNcnQ")
    assert.equal(youtubeVideoId("https://www.youtube.com/shorts/o6HpCFhNcnQ"), "o6HpCFhNcnQ")
    assert.equal(youtubeVideoId("https://www.youtube.com/embed/o6HpCFhNcnQ"), "o6HpCFhNcnQ")
  })

  it("ignores unrelated watch URL parameters", () => {
    assert.equal(
      youtubeVideoId(
        "https://www.youtube.com/watch?v=erKAm7HRw3c&list=RDerKAm7HRw3c&start_radio=1",
      ),
      "erKAm7HRw3c",
    )
  })

  it("rejects hostile hosts and protocols", () => {
    assert.equal(youtubeVideoId("https://youtube.com.evil.test/watch?v=o6HpCFhNcnQ"), undefined)
    assert.equal(youtubeVideoId("https://evil.test/youtu.be/o6HpCFhNcnQ"), undefined)
    assert.equal(youtubeVideoId("ftp://www.youtube.com/watch?v=o6HpCFhNcnQ"), undefined)
    assert.equal(youtubeVideoId("https://www.youtube.com@evil.test/watch?v=o6HpCFhNcnQ"), undefined)
  })

  it("rejects malformed IDs and URLs", () => {
    assert.equal(youtubeVideoId("abc12"), undefined)
    assert.equal(youtubeVideoId("a".repeat(21)), undefined)
    assert.equal(youtubeVideoId("abc.def123"), undefined)
    assert.equal(youtubeVideoId("youtu.be/o6HpCFhNcnQ"), undefined)
    assert.equal(youtubeVideoId("https://www.youtube.com/watch?list=RDerKAm7HRw3c"), undefined)
    assert.equal(youtubeVideoId("https://youtu.be/o6HpCFhNcnQ/extra"), undefined)
  })
})

describe("youtubeTracks", () => {
  it("returns multiple tracks for the exact requested YouTube URLs in configured order", () => {
    assert.deepEqual(
      youtubeTracks([
        {
          title: "First song",
          artist: "First artist",
          url: "https://www.youtube.com/watch?v=erKAm7HRw3c&list=RDerKAm7HRw3c",
        },
        {
          title: "Second song",
          url: "https://youtu.be/o6HpCFhNcnQ",
        },
        {
          title: "Third song",
          artist: "Third artist",
          url: "https://www.youtube.com/shorts/abc-DEF_123",
        },
      ]),
      [
        { title: "First song", artist: "First artist", videoId: "erKAm7HRw3c" },
        { title: "Second song", videoId: "o6HpCFhNcnQ" },
        { title: "Third song", artist: "Third artist", videoId: "abc-DEF_123" },
      ],
    )
  })

  it("omits invalid entries and duplicate video IDs while preserving the first track", () => {
    assert.deepEqual(
      youtubeTracks([
        { title: "", url: "o6HpCFhNcnQ" },
        { title: "Missing URL", url: "bad.id" },
        { title: "First", url: "o6HpCFhNcnQ" },
        { title: "Duplicate", url: "https://youtu.be/o6HpCFhNcnQ" },
        { title: "Hostile URL", url: "https://evil.test/watch?v=erKAm7HRw3c" },
        { title: "Last", url: "erKAm7HRw3c" },
      ]),
      [
        { title: "First", videoId: "o6HpCFhNcnQ" },
        { title: "Last", videoId: "erKAm7HRw3c" },
      ],
    )
  })

  it("trims metadata and omits blank artists", () => {
    assert.deepEqual(
      youtubeTracks([
        {
          title: "  Trimmed title  ",
          artist: "  Trimmed artist  ",
          url: "  o6HpCFhNcnQ  ",
        },
        { title: "No artist", artist: "   ", url: "erKAm7HRw3c" },
      ]),
      [
        { title: "Trimmed title", artist: "Trimmed artist", videoId: "o6HpCFhNcnQ" },
        { title: "No artist", videoId: "erKAm7HRw3c" },
      ],
    )
  })
})

describe("affectedFocusNodeIds", () => {
  const neighbors = new Map<string, Set<string>>([
    ["a", new Set(["b", "c"])],
    ["b", new Set(["a"])],
    ["c", new Set(["a"])],
    ["d", new Set(["e"])],
    ["e", new Set(["d"])],
  ])

  it("returns an empty set when both previous and next focus are null", () => {
    assert.deepEqual(affectedFocusNodeIds(neighbors, null, null), new Set())
  })

  it("includes only the next focus node and its neighbors when previous is null", () => {
    assert.deepEqual(affectedFocusNodeIds(neighbors, null, "a"), new Set(["a", "b", "c"]))
  })

  it("includes only the previous focus node and its neighbors when next is null", () => {
    assert.deepEqual(affectedFocusNodeIds(neighbors, "a", null), new Set(["a", "b", "c"]))
  })

  it("unions previous and next focus neighborhoods when both are set and disjoint", () => {
    assert.deepEqual(affectedFocusNodeIds(neighbors, "a", "d"), new Set(["a", "b", "c", "d", "e"]))
  })

  it("deduplicates overlapping previous and next focus neighborhoods", () => {
    // "a" and "b" are neighbors of each other, so their neighborhoods overlap.
    assert.deepEqual(affectedFocusNodeIds(neighbors, "a", "b"), new Set(["a", "b", "c"]))
  })

  it("falls back to just the focus id when it has no recorded neighbors", () => {
    assert.deepEqual(affectedFocusNodeIds(neighbors, "z", null), new Set(["z"]))
  })

  it("returns the same focus node once when previous and next focus are identical", () => {
    assert.deepEqual(affectedFocusNodeIds(neighbors, "a", "a"), new Set(["a", "b", "c"]))
  })
})

describe("getOrCreate", () => {
  it("creates and caches a value on first call for a key", () => {
    const cache = new Map<string, { n: number }>()
    let calls = 0
    const value = getOrCreate(cache, "a", () => {
      calls += 1
      return { n: 1 }
    })
    assert.deepEqual(value, { n: 1 })
    assert.equal(calls, 1)
    assert.equal(cache.get("a"), value)
  })

  it("returns the cached value on a repeated call for the same key without calling factory again", () => {
    const cache = new Map<string, { n: number }>()
    let calls = 0
    const factory = () => {
      calls += 1
      return { n: calls }
    }
    const first = getOrCreate(cache, "a", factory)
    const second = getOrCreate(cache, "a", factory)
    assert.equal(second, first)
    assert.equal(calls, 1)
  })

  it("creates independent values for different keys", () => {
    const cache = new Map<string, { n: number }>()
    let calls = 0
    const factory = () => {
      calls += 1
      return { n: calls }
    }
    const a = getOrCreate(cache, "a", factory)
    const b = getOrCreate(cache, "b", factory)
    assert.notEqual(a, b)
    assert.equal(calls, 2)
  })
})

describe("parseNonNegativeNumber", () => {
  it("returns undefined when raw is undefined", () => {
    assert.equal(
      parseNonNegativeNumber(undefined, (s) => Number.parseInt(s, 10)),
      undefined,
    )
  })

  it("returns undefined when raw is an empty string", () => {
    assert.equal(
      parseNonNegativeNumber("", (s) => Number.parseInt(s, 10)),
      undefined,
    )
  })

  it("returns undefined when the parsed value is NaN (malformed input)", () => {
    assert.equal(
      parseNonNegativeNumber("abc", (s) => Number.parseInt(s, 10)),
      undefined,
    )
  })

  it("returns undefined when the parsed value is negative", () => {
    assert.equal(
      parseNonNegativeNumber("-5", (s) => Number.parseInt(s, 10)),
      undefined,
    )
  })

  it("returns the parsed value for a valid non-negative integer string", () => {
    assert.equal(
      parseNonNegativeNumber("42", (s) => Number.parseInt(s, 10)),
      42,
    )
  })

  it("returns the parsed value for a valid non-negative float string", () => {
    assert.equal(parseNonNegativeNumber("1.5", Number.parseFloat), 1.5)
  })

  it("returns 0 at the zero boundary rather than treating it as falsy/undefined", () => {
    assert.equal(
      parseNonNegativeNumber("0", (s) => Number.parseInt(s, 10)),
      0,
    )
  })
})

describe("seedExpandedNodePosition", () => {
  it("places index 0 at radius 20 along angle 0 (directly +x) from a positioned source", () => {
    const result = seedExpandedNodePosition({ x: 100, y: 200, z: 300 }, 0, true)
    assert.equal(result.x, 100 + 20 * Math.cos(0))
    assert.equal(result.y, 200 + 20 * Math.sin(0))
    assert.equal(result.z, 300 + 20 * Math.sin(0))
  })

  it("falls back to the graph origin (0,0,0) when the source has no x/y/z yet", () => {
    const result = seedExpandedNodePosition({}, 0, true)
    assert.equal(result.x, 20 * Math.cos(0))
    assert.equal(result.y, 20 * Math.sin(0))
    assert.equal(result.z, 20 * Math.sin(0))
  })

  it("keeps z pinned to source.z unchanged when use3d is false", () => {
    const result = seedExpandedNodePosition({ x: 5, y: 5, z: 42 }, 3, false)
    assert.equal(result.z, 42)
  })

  it("defaults z to 0 when use3d is false and source.z is unset", () => {
    const result = seedExpandedNodePosition({ x: 5, y: 5 }, 3, false)
    assert.equal(result.z, 0)
  })

  it("fans different indices out to different (non-overlapping) angles around the source", () => {
    const source = { x: 0, y: 0, z: 0 }
    const first = seedExpandedNodePosition(source, 0, true)
    const second = seedExpandedNodePosition(source, 1, true)
    const third = seedExpandedNodePosition(source, 2, true)
    assert.notEqual(first.x, second.x)
    assert.notEqual(first.y, second.y)
    assert.notEqual(second.x, third.x)
    assert.notEqual(second.y, third.y)
  })

  it("stays within EXPANDED_NODE_SEED_RADIUS (20) of the source in the xy-plane", () => {
    const source = { x: 10, y: -10, z: 0 }
    for (let index = 0; index < 8; index += 1) {
      const result = seedExpandedNodePosition(source, index, true)
      const dx = result.x - source.x
      const dy = result.y - source.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      assert.ok(
        Math.abs(distance - 20) < 1e-9,
        `expected distance ~20 from source, got ${distance}`,
      )
    }
  })
})
