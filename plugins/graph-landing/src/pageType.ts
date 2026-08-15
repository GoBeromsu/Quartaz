import type { PageMatcher, QuartzPageTypePlugin } from "@quartz-community/types"
import GraphLanding from "./components/GraphLanding"

export interface GraphLandingPageOptions {}

const graphPageMatcher: PageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
  const translationKey = frontmatter?.translationKey
  // Locale roots (/ko/, /en/) keep translationKey home; /graph stays as a
  // dedicated alias so existing links do not break.
  return translationKey === "graph" || translationKey === "home"
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
