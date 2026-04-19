import * as Component from "./quartz/components"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"

import BlogAllTags from "./custom/quartz/BlogAllTags"
import BlogArticleList from "./custom/quartz/BlogArticleList"
import BlogFooter from "./custom/quartz/BlogFooter"
import BlogLatest from "./custom/quartz/BlogLatest"
import BlogLinksHeader from "./custom/quartz/BlogLinksHeader"
import BlogStyles from "./custom/quartz/BlogStyles"

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

const isIndexPage = (slug?: string) => slug === "index"

const sharedHeader = [
  Component.Flex({
    components: [
      { Component: Component.External("page-title") },
      { Component: Component.Spacer() },
      { Component: BlogLinksHeader({ links: { About: "/about" } }) },
      { Component: Component.External("search") },
      { Component: Component.External("darkmode") },
    ],
    gap: "1.5rem",
  }),
]

const sharedAfterBody = [
  BlogStyles(),
  Component.ConditionalRender({
    component: BlogLatest({ title: "Latest", limit: 3 }),
    condition: (props) => isIndexPage(props.fileData.slug),
  }),
  Component.ConditionalRender({
    component: BlogAllTags({ title: "Topics" }),
    condition: (props) => isIndexPage(props.fileData.slug),
  }),
  Component.ConditionalRender({
    component: BlogArticleList({
      title: "Writing",
      limit: 0,
      filter: (file) => file.slug !== "index",
    }),
    condition: (props) => isIndexPage(props.fileData.slug),
  }),
  Component.ConditionalRender({
    component: Component.External("tag-list"),
    condition: (props) => !isIndexPage(props.fileData.slug),
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

const sharedFooter = BlogFooter({ links: footerLinks })

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
      right: [],
      beforeBody: [
        Component.ConditionalRender({
          component: Component.External("breadcrumbs"),
          condition: (props) => !isIndexPage(props.fileData.slug),
        }),
        Component.ConditionalRender({
          component: Component.External("article-title"),
          condition: (props) =>
            props.fileData.frontmatter?.hidetitle !== true &&
            props.fileData.frontmatter?.hidetitle !== "true",
        }),
        Component.ConditionalRender({
          component: Component.External("content-meta"),
          condition: (props) => !isIndexPage(props.fileData.slug),
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
        Component.External("breadcrumbs"),
        Component.External("article-title"),
        Component.External("content-meta"),
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
