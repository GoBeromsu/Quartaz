import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.TagList(),

    // NOTE: limit=9999 is intentional. Static HTML means no runtime cost.
    // ~500 articles ≈ 200KB, acceptable for personal blog. Pagination not worth the complexity.
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Articles",
        limit: 9999,
        showTags: false,
        filter: (f) => f.slug !== "index",
      }),
      condition: (page) => page.fileData.slug === "index",
    }),

    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "Goberomsu/Quartz-CV",
        // from data-repo-id
        repoId: "R_kgDOMzvCAQ",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOMzvCAc4Civ7w",
      },
    }),
    Component.Graph(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
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
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],

  right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
