// Pure, side-effect-free types and helper functions extracted from
// graph-landing.inline.ts. This file has no top-level DOM-dependent
// statements, so it can be imported directly by Node-based unit tests
// (unlike graph-landing.inline.ts, which runs `document.addEventListener(...)`
// at module load time and therefore throws in a DOM-less environment).
//
// graph-landing.inline.ts imports these back via a relative import. The
// inline-script esbuild loader (see tsup.config.ts's inlineScriptPlugin) runs
// a nested `esbuild.build({ bundle: true, ... })` over graph-landing.inline.ts,
// which resolves and inlines this module's code into the final minified
// bundle exactly as before the extraction — dist output is unchanged.

export interface GraphNode {
  id: string
  name: string
  type: "note" | "tag" | "external"
  val: number
  degree: number
  isHub: boolean
  tag: string
  slug: string
  url: string
  folder: string
  tags: string[]
  dominantTag: string
  excerpt: string
  phase: number
  x?: number
  y?: number
  z?: number
  vx?: number
  vy?: number
  vz?: number
}

export type LinkKind = "wikilink" | "tag" | "cooc" | "folder" | "external"

export interface GraphLink {
  source: string | GraphNode
  target: string | GraphNode
  kind: LinkKind
}

export interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

export function isMarkdownFilePath(value: unknown): boolean {
  return typeof value === "string" && value.trim().toLowerCase().endsWith(".md")
}

/**
 * Maps a node degree into a bounded 0..1 visual mass. Square-root scaling
 * preserves visible differences between ordinary notes without letting a
 * single extreme hub dominate the graph.
 */
export function normalizedDegreeWeight(
  degree: number,
  minDegree: number,
  maxDegree: number,
): number {
  const current = Number.isFinite(degree) ? Math.max(0, degree) : 0
  const min = Number.isFinite(minDegree) ? Math.max(0, minDegree) : 0
  const max = Number.isFinite(maxDegree) ? Math.max(min, maxDegree) : min
  if (max === min) {
    return min > 0 ? 0.5 : 0
  }
  const clamped = Math.min(max, Math.max(min, current))
  return (Math.sqrt(clamped) - Math.sqrt(min)) / (Math.sqrt(max) - Math.sqrt(min))
}

/**
 * Uses the heavier endpoint as a link's gravitational mass. The result is
 * bounded so force tuning cannot collapse around an unusually large hub.
 */
export function linkDegreeWeight(
  sourceDegree: number,
  targetDegree: number,
  maxDegree: number,
): number {
  return normalizedDegreeWeight(Math.max(sourceDegree, targetDegree), 0, maxDegree)
}

function boundedFinite(value: number, min: number, max: number): number {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : min
}

/**
 * Gives highly connected nodes proportionally more repulsive mass. This
 * counterbalances their larger number of attractive links without allowing
 * a single hub to fling the rest of the graph out of view.
 */
export function nodeRepulsionScale(degreeWeight: number): number {
  return 1 + boundedFinite(degreeWeight, 0, 1) * 1.2
}

/**
 * Scales real-link distance by the heavier endpoint's normalized degree.
 * Gravity 1 preserves the original degree-weighted shortening.
 */
export function hubGravityDistanceScale(degreeWeight: number, gravity: number): number {
  const weight = boundedFinite(degreeWeight, 0, 1)
  const boundedGravity = boundedFinite(gravity, 0, 2)
  return Math.max(0.5, 1 - weight * 0.24 * boundedGravity)
}

/**
 * Scales real-link strength by the heavier endpoint's normalized degree.
 * Gravity 1 preserves the original degree-weighted strengthening.
 */
export function hubGravityStrengthScale(degreeWeight: number, gravity: number): number {
  const weight = boundedFinite(degreeWeight, 0, 1)
  const boundedGravity = boundedFinite(gravity, 0, 2)
  return Math.min(1.6, 1 + weight * 0.3 * boundedGravity)
}

// Bare YouTube video ids are 11 characters in practice, but YouTube does not
// formally lock their length. Keep this permissive enough for valid IDs while
// rejecting arbitrary URL fragments and malformed values.
const YOUTUBE_VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{6,20}$/
const YOUTUBE_WATCH_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "music.youtube.com",
  "m.youtube.com",
])
const YOUTUBE_SHORT_HOSTS = new Set(["youtu.be", "www.youtu.be"])

function validYoutubeVideoId(value: string | null | undefined): string | undefined {
  return value && YOUTUBE_VIDEO_ID_PATTERN.test(value) ? value : undefined
}

/**
 * Extracts a YouTube video ID from a bare ID or a trusted YouTube URL. URL
 * inputs must use HTTP(S), have no credentials or custom port, and match one
 * of the documented watch, short, embed, or shorts URL forms.
 */
export function youtubeVideoId(value: string | undefined | null): string | undefined {
  if (!value) {
    return undefined
  }

  const trimmed = value.trim()
  const bareId = validYoutubeVideoId(trimmed)
  if (bareId) {
    return bareId
  }

  let url: URL
  try {
    url = new URL(trimmed)
  } catch {
    return undefined
  }

  if (
    (url.protocol !== "https:" && url.protocol !== "http:") ||
    url.username ||
    url.password ||
    url.port
  ) {
    return undefined
  }

  if (YOUTUBE_WATCH_HOSTS.has(url.hostname)) {
    if (url.pathname === "/watch") {
      return validYoutubeVideoId(url.searchParams.get("v"))
    }

    const pathSegments = url.pathname.split("/").filter(Boolean)
    if (
      pathSegments.length === 2 &&
      (pathSegments[0] === "shorts" || pathSegments[0] === "embed")
    ) {
      return validYoutubeVideoId(pathSegments[1])
    }
  }

  if (YOUTUBE_SHORT_HOSTS.has(url.hostname)) {
    const pathSegments = url.pathname.split("/").filter(Boolean)
    if (pathSegments.length === 1) {
      return validYoutubeVideoId(pathSegments[0])
    }
  }

  return undefined
}

export type MusicTrackInput = { title: string; artist?: string; url: string }

export type YoutubeTrack = { title: string; artist?: string; videoId: string }

/**
 * Returns valid, titled YouTube tracks in configured order, omitting invalid
 * and duplicate videos. The first configured metadata wins for a video ID.
 */
export function youtubeTracks(values: readonly MusicTrackInput[]): YoutubeTrack[] {
  const tracks: YoutubeTrack[] = []
  const seen = new Set<string>()

  for (const value of values) {
    const title = value.title.trim()
    const videoId = youtubeVideoId(value.url)
    if (!title || !videoId || seen.has(videoId)) {
      continue
    }

    seen.add(videoId)
    const artist = value.artist?.trim()
    if (artist) {
      tracks.push({ title, artist, videoId })
    } else {
      tracks.push({ title, videoId })
    }
  }

  return tracks
}

export function linkEndpointId(endpoint: string | GraphNode): string {
  if (typeof endpoint === "string") {
    return endpoint
  }
  return endpoint.id
}

export type LodLevel = "full" | "dot"

/**
 * Pure camera-distance -> LOD-level decision used by the 3D renderer's
 * THREE.LOD node objects and its label-distance-fade loop. `threshold`
 * undefined (or non-finite/negative) always returns "full" — current
 * behavior unchanged, no distance-based swap at all. Otherwise any
 * `distance >= threshold` is "dot" (render the shared low-detail
 * geometry/material, or hide the label), matching THREE.LOD.addLevel's own
 * "switch once you are at least this far away" semantics so the level
 * actually shown by three.js and the level this function reports for the
 * same distance never disagree.
 */
export function lodLevelForDistance(distance: number, threshold: number | undefined): LodLevel {
  if (threshold === undefined || !Number.isFinite(threshold) || threshold < 0) {
    return "full"
  }
  return distance >= threshold ? "dot" : "full"
}

/**
 * Generic memoizing lookup: returns the cached value for `key` if present,
 * otherwise builds it with `factory`, stores it, and returns it. Matches the
 * `if (cached) return cached` truthy-check semantics every call site here
 * previously inlined by hand (all cached values are objects, never a falsy
 * value), so behavior is unchanged. Used by dotResourceFor/linkGeometryFor/
 * linkMaterialFor to share this shared-resource-cache pattern instead of
 * three near-identical copies.
 */
export function getOrCreate<T>(cache: Map<string, T>, key: string, factory: () => T): T {
  const cached = cache.get(key)
  if (cached) {
    return cached
  }
  const value = factory()
  cache.set(key, value)
  return value
}

/**
 * Shared "parse an optional non-negative numeric dataset attribute" pattern
 * used by graph-landing.inline.ts's option parsing: `raw` unset (falsy)
 * yields `undefined` directly; otherwise `raw` is run through `parser`
 * (`Number.parseInt`/`Number.parseFloat`, both `(s: string) => number`
 * compatible) and the result is returned only if it is finite and `>= 0` —
 * a malformed value (NaN) or a negative value both fall back to
 * `undefined` (renderer default / "unset"), never reaching a caller as
 * NaN or a negative number. Matches the guarded parse blocks each of
 * maxRenderedNodes/layoutWarmupTicks/layoutCooldownTicks/layoutChargeTheta/
 * lodLabelDistance/lodDotDistance/lodCullDistance/lodNodeResolution/
 * lodLinkResolution used to inline by hand.
 */
export function parseNonNegativeNumber(
  raw: string | undefined,
  parser: (value: string) => number,
): number | undefined {
  const parsed = raw ? parser(raw) : undefined
  return parsed !== undefined && Number.isFinite(parsed) && parsed >= 0 ? parsed : undefined
}

/**
 * Picks the top-`maxRenderedNodes` nodes by degree (descending, ties broken
 * by ascending id) out of `full`, then filters `full.links` down to only the
 * links whose endpoints both survived the cut. Used to cap the initial
 * force-graph render for very large graphs, with lazy k-hop expansion (see
 * expandHopIds) filling in more nodes on demand as the user explores instead
 * of paying the full layout/render cost for every node up front on page load.
 *
 * When `maxRenderedNodes` is undefined, or is large enough to include every
 * node anyway, this returns the exact same `full` object reference (not a
 * copy) — callers use that identity to detect "nothing to expand" and skip
 * the lazy-expansion machinery entirely, preserving current behavior byte
 * for byte when the option is unset.
 */
export function selectRenderedSubset(
  full: GraphData,
  maxRenderedNodes: number | undefined,
): GraphData {
  // Defense in depth: a non-finite or negative value (e.g. a bad NaN from
  // an upstream parse) must render everything, not fall through to
  // `ranked.slice(0, NaN)` — which silently produces an EMPTY graph.
  if (
    maxRenderedNodes === undefined ||
    !Number.isFinite(maxRenderedNodes) ||
    maxRenderedNodes < 0 ||
    maxRenderedNodes >= full.nodes.length
  ) {
    return full
  }
  const ranked = [...full.nodes].sort((a, b) => {
    if (b.degree !== a.degree) {
      return b.degree - a.degree
    }
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
  })
  const picked = ranked.slice(0, Math.max(0, maxRenderedNodes))
  const renderedIds = new Set(picked.map((node) => node.id))
  const links = full.links.filter((link) => {
    const source = linkEndpointId(link.source)
    const target = linkEndpointId(link.target)
    return renderedIds.has(source) && renderedIds.has(target)
  })
  return { nodes: picked, links }
}

/**
 * Pure BFS helper for expandFromNode: walks `fullAdjacency` out from
 * `nodeId` up to `hops` steps, returning the full-index node ids that are
 * reachable but not yet in `renderedIds`. Extracted from expandFromNode's
 * closure so the k-hop traversal logic can be unit tested without a
 * DOM/ForceGraphInstance. Behavior-identical to the inline version it
 * replaces: a non-finite/zero/negative `hops` yields an empty set.
 */
export function expandHopIds(
  fullAdjacency: Map<string, Set<string>>,
  renderedIds: Set<string>,
  nodeId: string,
  hops: number,
): Set<string> {
  const toAdd = new Set<string>()
  const normalizedHops = Math.max(0, Math.floor(hops))
  if (normalizedHops <= 0) {
    return toAdd
  }
  const visited = new Set<string>([nodeId])
  let frontier = new Set<string>([nodeId])
  for (let hop = 0; hop < normalizedHops; hop += 1) {
    const next = new Set<string>()
    for (const id of frontier) {
      for (const neighborId of fullAdjacency.get(id) ?? []) {
        if (visited.has(neighborId)) {
          continue
        }
        visited.add(neighborId)
        next.add(neighborId)
        if (!renderedIds.has(neighborId)) {
          toAdd.add(neighborId)
        }
      }
    }
    frontier = next
  }
  return toAdd
}

/**
 * Computes the set of node ids affected by a focus change from
 * `previousFocus` to `nextFocus`: the previous focus node + its direct
 * neighbors, unioned with the next focus node + its direct neighbors.
 * Either focus may be null (e.g. hover-out, no selection). Returns an empty
 * set when both are null. Used by the incremental-repaint path
 * (`interaction.incrementalRepaint`) to scope a focus-change repaint to only
 * the nodes/links/labels whose visual state depends on the focused node.
 */
// Golden-angle spiral increment (radians, ~137.5deg) — the standard
// "no two points ever line up" constant used for evenly-fanning-out points
// around a center without needing randomness.
const GOLDEN_ANGLE = 2.399963229728653

// World-unit offset from the source node for seeded siblings. Deliberately
// smaller than SPREAD_DISTANCE (72-116, the resting link length the force
// simulation settles newly-warmed nodes to) so seeded nodes visibly start
// bunched near the node that was clicked rather than already at their
// eventual resting distance.
const EXPANDED_NODE_SEED_RADIUS = 20

/**
 * Deterministically places a newly-expanded node near `source` (the node
 * that was clicked to reveal it), instead of leaving it unseeded — d3-force
 * assigns unseeded nodes a default spiral position centered on the graph
 * origin, not on the node the user just clicked. `index` (0, 1, 2, ...,
 * incrementing once per node added by the same expand call) fans siblings
 * out around `source` at GOLDEN_ANGLE increments so they don't all start
 * stacked on the exact same point. Used by the `layout.incrementalWarmup`
 * option's expand path, which also skips the simulation's post-graphData
 * warmup pass — without seeding, those nodes would never move off their
 * unrelated default position. `source.x`/`y`/`z` missing (not yet
 * positioned) fall back to the graph origin (0,0,0). `use3d` false keeps
 * `z` pinned to `source.z` unchanged (2D renderer never reads node.z).
 */
export function seedExpandedNodePosition(
  source: { x?: number; y?: number; z?: number },
  index: number,
  use3d: boolean,
): { x: number; y: number; z: number } {
  const sx = source.x ?? 0
  const sy = source.y ?? 0
  const sz = source.z ?? 0
  const angle = index * GOLDEN_ANGLE
  return {
    x: sx + EXPANDED_NODE_SEED_RADIUS * Math.cos(angle),
    y: sy + EXPANDED_NODE_SEED_RADIUS * Math.sin(angle),
    z: use3d ? sz + EXPANDED_NODE_SEED_RADIUS * Math.sin(angle * 0.5) : sz,
  }
}

export function affectedFocusNodeIds(
  neighbors: Map<string, Set<string>>,
  previousFocus: string | null,
  nextFocus: string | null,
): Set<string> {
  const result = new Set<string>()
  if (previousFocus !== null) {
    result.add(previousFocus)
    for (const id of neighbors.get(previousFocus) ?? []) {
      result.add(id)
    }
  }
  if (nextFocus !== null) {
    result.add(nextFocus)
    for (const id of neighbors.get(nextFocus) ?? []) {
      result.add(id)
    }
  }
  return result
}
