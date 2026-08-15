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

const translationKeyOf = (file: FileLike): string | undefined => {
  const value = file.frontmatter?.translationKey
  return typeof value === "string" ? value : undefined
}

// Locale homes are ko/index & en/index (translationKey: home), so a bare
// slug === "index" check never fires on the multilingual home pages.
const isHomePage = (file: FileLike) => file.slug === "index" || translationKeyOf(file) === "home"

// Utility pages (home, dedicated graph page, language chooser) must not
// appear in article listings.
const isUtilityPage = (file: FileLike) =>
  file.slug === "index" || translationKeyOf(file) === "home" || translationKeyOf(file) === "graph"

const sharedHeader = [
  Component.Flex({
    components: [
      { Component: Component.External("page-title") },
      { Component: Component.Spacer() },
      {
        Component: Component.External("BlogLinksHeader", {
          links: {
            Graph: "/graph",
            About: "/about",
          },
        }),
      },
      { Component: Component.External("BlogLanguageSwitcher") },
      { Component: Component.External("search") },
      { Component: Component.External("darkmode") },
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
    condition: (props) => isHomePage(props.fileData),
  }),
  Component.ConditionalRender({
    component: Component.External("BlogAllTags", { title: "Topics" }),
    condition: (props) => isHomePage(props.fileData),
  }),
  Component.ConditionalRender({
    component: Component.External("BlogArticleList", {
      title: "Writing",
      limit: 0,
      filter: (file: FileLike) => !isUtilityPage(file),
    }),
    condition: (props) => isHomePage(props.fileData),
  }),
  Component.ConditionalRender({
    component: Component.External("tag-list"),
    condition: (props) => !isHomePage(props.fileData),
  }),
  Component.External("comments", {
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
      // Floating TOC on wide viewports; BlogStyles positions and hides it.
      right: [Component.External("TableOfContents")],
      beforeBody: [
        Component.ConditionalRender({
          component: Component.External("breadcrumbs"),
          condition: (props) => !isHomePage(props.fileData),
        }),
        Component.ConditionalRender({
          component: Component.External("article-title"),
          condition: (props) =>
            props.fileData.frontmatter?.hidetitle !== true &&
            props.fileData.frontmatter?.hidetitle !== "true",
        }),
        Component.ConditionalRender({
          component: Component.External("content-meta"),
          condition: (props) => !isHomePage(props.fileData),
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
        // Locale homes (ko/index, en/index) render through the folder page
        // type; keep them chrome-free like the original blog home.
        Component.ConditionalRender({
          component: Component.External("breadcrumbs"),
          condition: (props) => !isHomePage(props.fileData),
        }),
        Component.ConditionalRender({
          component: Component.External("article-title"),
          condition: (props) =>
            props.fileData.frontmatter?.hidetitle !== true &&
            props.fileData.frontmatter?.hidetitle !== "true",
        }),
        Component.ConditionalRender({
          component: Component.External("content-meta"),
          condition: (props) => !isHomePage(props.fileData),
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
        Component.External("breadcrumbs"),
        Component.External("article-title"),
        Component.External("content-meta"),
      ],
    },
    graph: {
      // MinimalFrame does not render header/afterBody. The dedicated graph
      // page (/ko/graph, /en/graph) carries its own rail (글/About, locale
      // switcher, theme) so the canvas can stay exactly 100dvh.
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
