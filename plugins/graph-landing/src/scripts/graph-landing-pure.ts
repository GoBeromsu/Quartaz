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
 * Pure link-distance-cull decision for the 3D renderer's link-cull rAF loop,
 * built on lodLevelForDistance's identical "distance >= threshold" boundary
 * semantics (kept in one place so a link and a node LOD swap at the exact
 * same distance never disagree). `cullDistance` undefined (or
 * non-finite/negative) always returns false — no link is ever culled, current
 * behavior unchanged. Named separately from lodLevelForDistance because
 * "full"/"dot" reads oddly for links; call sites just want a boolean.
 */
export function isBeyondCullDistance(distance: number, cullDistance: number | undefined): boolean {
  return lodLevelForDistance(distance, cullDistance) === "dot"
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
