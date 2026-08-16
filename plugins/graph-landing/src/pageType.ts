import type {
  PageMatcher,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
} from "@quartz-community/types"
import GraphLanding from "./components/GraphLanding"

// Extends the published QuartzPageTypePluginInstance with an engine flag not
// yet part of that package's types: when true, the engine's pageResources()
// omits the global contentIndex.json fetch for pages using this page type.
// Widening the return type via intersection (instead of adding the field to
// the object literal typed as QuartzPageTypePluginInstance directly) avoids
// an excess-property error against the external package's stricter type.
type EngineAwarePageTypeInstance = QuartzPageTypePluginInstance & {
  skipContentIndexFetch?: boolean
}

export interface GraphLandingPageOptions {
  /**
   * Where the graph page's client script loads its content data from.
   * "contentIndex" (default) fetches static/contentIndex.json, same as before.
   * "graphIndex" fetches the lighter static/graphIndex.json instead (requires
   * the multilingual-content-index emitter's `emitGraphIndex: true` option).
   */
  indexSource?: "contentIndex" | "graphIndex"
  /**
   * Caps the O(k^2) tag co-occurrence edge generation in the client graph
   * builder. Default: undefined (unlimited, current behavior — every pair of
   * tags on a note gets a faint co-occurrence edge). Set to `false` to skip
   * tag co-occurrence edges entirely. Set to an object to cap generation:
   * `maxTagsPerNote` skips co-occurrence pairs for notes with more tags than
   * the threshold; `maxEdges` stops adding co-occurrence edges once that many
   * have been added (deterministic order, same as today's note iteration).
   */
  tagCooccurrence?: { maxTagsPerNote?: number; maxEdges?: number } | false
  /**
   * Caps how many nodes the graph renders initially, keeping only the top-N
   * nodes by degree (computed over the full parsed index, deterministic
   * tie-break by slug). Default: undefined (render every node, current
   * behavior). The full index stays available client-side so that clicking a
   * node lazily expands its neighbors (see `expandHops`) into the live
   * simulation instead of doing a full re-layout.
   */
  maxRenderedNodes?: number
  /**
   * Number of hops to pull in from the full index when a rendered node is
   * clicked and `maxRenderedNodes` is set. Default: 1. Has no effect unless
   * `maxRenderedNodes` is also set.
   */
  expandHops?: number
}

const defaultOptions: GraphLandingPageOptions = {
  indexSource: "contentIndex",
}

const graphPageMatcher: PageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
  const translationKey = frontmatter?.translationKey
  // Locale roots (/ko/, /en/) keep translationKey home; /graph stays as a
  // dedicated alias so existing links do not break.
  return translationKey === "graph" || translationKey === "home"
}

const GraphLandingPage: QuartzPageTypePlugin<GraphLandingPageOptions> = (userOpts) => {
  const options = { ...defaultOptions, ...userOpts }
  // Only skip the engine's global contentIndex.json fetch when this page
  // fetches its own lighter graphIndex.json directly (see
  // graph-landing.inline.ts); the default indexSource ("contentIndex")
  // still relies on the global fetch, unchanged.
  const instance: EngineAwarePageTypeInstance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
    layout: "graph",
    frame: "minimal",
    body: GraphLanding(options),
    skipContentIndexFetch: options.indexSource === "graphIndex",
  }
  return instance
}

export default GraphLandingPage
