import * as Component from "./quartz/components"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"

const config = await loadQuartzConfig()

const footerLinks = {
  GitHub: "https://github.com/GoBeromsu",
  YouTube: "https://www.youtube.com/@beomsuKoh",
  LinkedIn: "https://www.linkedin.com/in/beomsu-koh-b45146266/",
  X: "https://x.com/BeromArtDev",
  Medium: "https://medium.com/@beromkoh",
  Tistory: "https://berom.tistory.com/",
  Email: "mailto:gobeumsu@gmail.com",
}

interface FileLike {
  slug?: string
  frontmatter?: Record<string, unknown>
}

// The article listing lives at /writing; the root is the graph landing.
const isWritingPage = (file: FileLike) => file.slug === "writing"

// Utility pages must not appear in article listings.
const isUtilityPage = (file: FileLike) =>
  file.slug === "index" || file.slug === "graph" || file.slug === "writing" || file.slug === "about"

const sharedHeader = [
  Component.Flex({
    components: [
      { Component: Component.External("PageTitle") },
      { Component: Component.Spacer() },
      {
        Component: Component.External("BlogLinksHeader", {
          links: {
            Writing: "/writing",
            Graph: "/graph",
            About: "/about",
          },
        }),
      },
      { Component: Component.External("Search") },
      { Component: Component.External("Darkmode") },
    ],
    gap: "1.5rem",
    wrap: "wrap",
  }),
]

const sharedAfterBody = [
  Component.External("BlogStyles"),
  Component.ConditionalRender({
    component: Component.External("BlogLatest", {
      title: "Latest",
      limit: 3,
      filter: (file: FileLike) => !isUtilityPage(file),
    }),
    condition: (props) => isWritingPage(props.fileData),
  }),
  Component.ConditionalRender({
    component: Component.External("BlogAllTags", { title: "Topics" }),
    condition: (props) => isWritingPage(props.fileData),
  }),
  Component.ConditionalRender({
    component: Component.External("BlogArticleList", {
      title: "Writing",
      limit: 0,
      filter: (file: FileLike) => !isUtilityPage(file),
    }),
    condition: (props) => isWritingPage(props.fileData),
  }),
  Component.ConditionalRender({
    component: Component.External("TagList"),
    condition: (props) => !isWritingPage(props.fileData),
  }),
  Component.External("Comments", {
    provider: "giscus",
    options: {
      repo: "GoBeromsu/Quartaz",
      repoId: "R_kgDOMzvCAQ",
      category: "Announcements",
      categoryId: "DIC_kwDOMzvCAc4Civ7w",
      reactionsEnabled: false,
    },
  }),
]

const sharedFooter = [Component.External("BlogFooter", { links: footerLinks })]

const layout = await loadQuartzLayout({
  defaults: {
    header: sharedHeader,
    afterBody: sharedAfterBody,
    footer: sharedFooter,
  },
  byPageType: {
    content: {
      frame: "full-width",
      header: sharedHeader,
      afterBody: sharedAfterBody,
      left: [],
      beforeBody: [
        Component.ConditionalRender({
          component: Component.External("Breadcrumbs"),
          condition: (props) => !isWritingPage(props.fileData),
        }),
        Component.ConditionalRender({
          component: Component.External("ArticleTitle"),
          condition: (props) =>
            props.fileData.frontmatter?.hidetitle !== true &&
            props.fileData.frontmatter?.hidetitle !== "true",
        }),
        Component.ConditionalRender({
          component: Component.External("ContentMeta"),
          condition: (props) => !isWritingPage(props.fileData),
        }),
      ],
    },
    folder: {
      frame: "full-width",
      header: sharedHeader,
      afterBody: sharedAfterBody,
      left: [],
      right: [],
      beforeBody: [
        // /writing keeps the old home listing chrome.
        Component.ConditionalRender({
          component: Component.External("Breadcrumbs"),
          condition: (props) => !isWritingPage(props.fileData),
        }),
        Component.ConditionalRender({
          component: Component.External("ArticleTitle"),
          condition: (props) =>
            props.fileData.frontmatter?.hidetitle !== true &&
            props.fileData.frontmatter?.hidetitle !== "true",
        }),
        Component.ConditionalRender({
          component: Component.External("ContentMeta"),
          condition: (props) => !isWritingPage(props.fileData),
        }),
      ],
    },
    tag: {
      frame: "full-width",
      header: sharedHeader,
      afterBody: sharedAfterBody,
      left: [],
      right: [],
      beforeBody: [
        Component.External("Breadcrumbs"),
        Component.External("ArticleTitle"),
        Component.External("ContentMeta"),
      ],
    },
    graph: {
      // MinimalFrame does not render header/afterBody. The landing and
      // /graph carry their own chrome (Writing/About, theme) so the canvas
      // can stay exactly 100dvh.
      frame: "minimal",
      header: [],
      afterBody: [],
      left: [],
      right: [],
      beforeBody: [],
    },
  },
})

config.plugins.emitters = config.plugins.emitters.filter(
  (emitter) => emitter.name !== "PageTypeDispatcher",
)
config.plugins.emitters.push(
  PageTypeDispatcher({
    defaults: layout.defaults,
    byPageType: layout.byPageType,
  }),
)

export default config
export { layout }
