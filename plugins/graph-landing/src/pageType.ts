import type { PageMatcher, QuartzPageTypePlugin } from "@quartz-community/types"
import GraphLanding from "./components/GraphLanding"

export interface GraphLandingPageOptions {}

const graphPageMatcher: PageMatcher = ({ slug, fileData }) => {
  if (slug === "index") {
    return false
  }

  const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
  return frontmatter?.translationKey === "graph"
}

const GraphLandingPage: QuartzPageTypePlugin<GraphLandingPageOptions> = () => ({
  name: "GraphLanding",
  priority: 20,
  match: graphPageMatcher,
  layout: "graph",
  frame: "minimal",
  body: GraphLanding,
})

export default GraphLandingPage
