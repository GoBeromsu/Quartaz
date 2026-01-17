import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Flex({
      components: [
        { Component: Component.PageTitle() },
        { Component: Component.Spacer() },
        { Component: Component.Search() },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  afterBody: [
    Component.TagList(),

    // Topics section - shows all tags on homepage
    Component.ConditionalRender({
      component: Component.AllTags(),
      condition: (page) => page.fileData.slug === "index",
    }),

    // NOTE: limit=9999 is intentional. Static HTML means no runtime cost.
    // ~500 articles ≈ 200KB, acceptable for personal blog. Pagination not worth the complexity.
    Component.ConditionalRender({
      component: Component.ArticleList({
        title: "Writing",
        limit: 9999,
        filter: (f) => f.slug !== "index",
      }),
      condition: (page) => page.fileData.slug === "index",
    }),

    Component.Comments({
      provider: "giscus",
      options: {
        repo: "Goberomsu/Quartz-CV",
        repoId: "R_kgDOMzvCAQ",
        category: "Announcements",
        categoryId: "DIC_kwDOMzvCAc4Civ7w",
        reactionsEnabled: false,
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/GoBeromsu",
      LinkedIn: "https://www.linkedin.com/in/beomsu-koh-b45146266/",
      X: "https://x.com/BeromArtDev",
      Medium: "https://medium.com/@beromkoh",
      Tistory: "https://berom.tistory.com/",
      Email: "mailto:gobeumsu@gmail.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}
