import type { PageMatcher, QuartzPageTypePlugin } from "@quartz-community/types"
import GraphLanding from "./components/GraphLanding"

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
  return {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
    layout: "graph",
    frame: "minimal",
    body: GraphLanding(options),
  }
}

export default GraphLandingPage
