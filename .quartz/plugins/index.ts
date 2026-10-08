import { componentRegistry } from "../../quartz/components/registry"

export type { GraphLandingPageOptions } from "./graph-landing"
export { BlogFooter, BlogLinksHeader } from "./blog-chrome"
export { BlogAllTags, BlogArticleList, BlogLatest, BlogStyles } from "./blog-home"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
}

