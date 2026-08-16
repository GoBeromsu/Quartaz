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
}

const defaultOptions: Required<GraphLandingPageOptions> = {
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
