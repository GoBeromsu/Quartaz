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
        {
          Component: Component.LinksHeader({
            links: {
              About: "/about",
            },
          }),
        },
        { Component: Component.Search() },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  afterBody: [
    // Homepage sections
    Component.ConditionalRender({
      component: Component.Latest({ title: "Latest", limit: 3 }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.AllTags({ title: "Topics" }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleList({
        title: "Writing",
        limit: 0,
        filter: (f) => f.slug !== "index",
      }),
      condition: (page) => page.fileData.slug === "index",
    }),

    // TagList for non-homepage
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index",
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
  pageBody: Component.Content(),
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.frontmatter?.hidetitle !== "true",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
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
