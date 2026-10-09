import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test, { describe } from "node:test"

import { h } from "preact"
import renderToString from "preact-render-to-string"

import type { QuartzComponentProps } from "@quartz-community/types"

import type { FullSlug } from "@quartz-community/utils/path"
import { isUtilitySlug } from "./utility"
import BlogAllTags from "./components/BlogAllTags"
import BlogArticleList from "./components/BlogArticleList"
import BlogLatest from "./components/BlogLatest"
import BlogStyles from "./components/BlogStyles"

type TestGlobal = typeof globalThis & {
  React?: {
    readonly createElement: typeof h
  }
}
;(globalThis as TestGlobal).React = { createElement: h }

type CssCarrier = {
  readonly css?: string
}

function componentProps(slug: FullSlug): QuartzComponentProps {
  const allFiles = [
    { slug: "index" as FullSlug, filePath: "index.md", frontmatter: { title: "Beomsu" } },
    { slug: "writing" as FullSlug, filePath: "writing.md", frontmatter: { title: "Writing" } },
    { slug: "graph" as FullSlug, filePath: "graph.md", frontmatter: { title: "그래프" } },
    {
      slug: "beauty-of-youth" as FullSlug,
      filePath: "Articles/젊음이 아름답다.md",
      frontmatter: { title: "젊음이 아름답다", tags: ["essay"] },
      dates: { created: new Date("2024-01-01T00:00:00.000Z") },
      defaultDateType: "created",
    },
  ]

  return {
    fileData: { slug },
    cfg: { locale: "ko-KR" },
    children: [],
    allFiles,
  } as unknown as QuartzComponentProps
}

function componentCss(component: CssCarrier): string {
  const css = component.css
  if (typeof css !== "string") {
    assert.fail("component should expose a CSS string")
  }

  return css
}

function assertIncludesAll(haystack: string, markers: readonly string[]): void {
  for (const marker of markers) {
    assert.ok(haystack.includes(marker), `expected CSS to include ${marker}`)
  }
}

describe("Blog home listings", () => {
  test("treats index, writing, graph and about as utility pages", () => {
    assert.equal(isUtilitySlug("index"), true)
    assert.equal(isUtilitySlug("writing"), true)
    assert.equal(isUtilitySlug("graph"), true)
    assert.equal(isUtilitySlug("about"), true)
    assert.equal(isUtilitySlug("articles/beauty-of-youth"), false)
  })

  test("lists articles but never utility pages", () => {
    const props = componentProps("writing" as FullSlug)
    const articleList = renderToString(BlogArticleList({ title: "Writing", limit: 0 })(props))
    const latest = renderToString(BlogLatest({ title: "Latest", limit: 5 })(props))
    const tags = renderToString(BlogAllTags({ title: "Topics" })(props))

    assert.match(articleList, /젊음이 아름답다/)
    assert.doesNotMatch(articleList, />Beomsu</)
    assert.doesNotMatch(articleList, />그래프</)
    assert.match(latest, /젊음이 아름답다/)
    assert.match(tags, /essay/)
  })
})

describe("Blog home Ataraxia contract", () => {
  test("stacks article rows on mobile instead of clamping titles", () => {
    const css = componentCss(BlogArticleList())
    const mobileListMarkers = [
      "@media (max-width: 800px)",
      "flex-direction: column",
      "min-height: 44px",
      "word-break: keep-all",
    ] as const

    assertIncludesAll(css, mobileListMarkers)
    assert.doesNotMatch(css, /line-clamp/)
    assert.doesNotMatch(css, /grid-template-columns: minmax\(6\.5rem/)
  })

  test("keeps homepage listing components observable", () => {
    const css = [BlogArticleList(), BlogLatest(), BlogAllTags()].map(componentCss).join("\n")
    const existingMarkers = [
      ".blog-article-list",
      ".blog-latest",
      ".blog-all-tags",
      ".blog-article-list-section h3",
      "font-size: 1rem;",
      "font-weight: 600;",
      "border-radius: 0;",
      "box-shadow: none;",
    ] as const

    assertIncludesAll(css, existingMarkers)
  })

  test("keeps homepage links from becoming accent blocks", () => {
    const css = [BlogArticleList(), BlogAllTags()].map(componentCss).join("\n")
    const quietLinkMarkers = [
      `.blog-article-list a.internal {
  background-color: transparent;
  color: var(--blog-ink);
  font-weight: 400;`,
      `.blog-all-tags a.internal.tag-link {
  background-color: transparent;
  color: var(--blog-muted);
  font-weight: 400;`,
    ] as const

    assertIncludesAll(css, quietLinkMarkers)
  })
})

describe("BlogStyles Ataraxia contract", () => {
  test("keeps current custom style hook observable", () => {
    const css = componentCss(BlogStyles())
    const existingMarkers = [
      "--blog-content-width",
      '.page[data-frame="full-width"]',
      ".page-header",
    ] as const

    assertIncludesAll(css, existingMarkers)
  })

  test("maps Minimal reading rhythm", () => {
    const css = componentCss(BlogStyles())
    const readingMarkers = [
      "--blog-content-width: 40rem;",
      "--blog-wide-width: min(88vw, 50rem);",
      "--blog-paragraph-spacing: 1.75rem;",
      "font-size: 16px;",
      "line-height: 1.7;",
    ] as const

    assertIncludesAll(css, readingMarkers)
  })

  test("does not float a custom TOC over the article column", () => {
    const css = componentCss(BlogStyles())
    assert.doesNotMatch(css, /position:\s*fixed/)
    assert.ok(!css.includes("sidebar.right"))
  })

  test("keeps Ataraxia accent tokens", () => {
    const config = readFileSync(new URL("../../../quartz.config.yaml", import.meta.url), "utf8")
    const css = componentCss(BlogStyles())
    const tokenMarkers = [
      'secondary: "#a52142"',
      "--blog-accent: #a52142;",
      "--background-primary",
    ] as const

    assert.ok(config.includes(tokenMarkers[0]), "light theme secondary should use #a52142")
    assertIncludesAll(css, tokenMarkers.slice(1))
  })

  test("maps Minimal light ink and border palette", () => {
    const config = readFileSync(new URL("../../../quartz.config.yaml", import.meta.url), "utf8")
    const css = componentCss(BlogStyles())
    const configMarkers = [
      'lightgray: "#e6e6e6"',
      'gray: "#737373"',
      'darkgray: "#0f0f0f"',
      'dark: "#0f0f0f"',
    ] as const
    const cssMarkers = [
      "--blog-ink: #0f0f0f;",
      "--blog-muted: #737373;",
      "--blog-faint: #b5b5b5;",
      "--blog-border: #e6e6e6;",
      "color: var(--blog-ink);",
      ".page-header .page-title a",
    ] as const

    assertIncludesAll(config, configMarkers)
    assertIncludesAll(css, cssMarkers)
  })

  test("prevents duplicate homepage dividers without hiding folder indexes", () => {
    const css = componentCss(BlogStyles())
    assert.ok(css.includes("body:has(.blog-latest)"))
    assert.doesNotMatch(css, /data-slug/)
    assert.ok(css.includes(".center.full-width > hr"))
    assert.ok(css.includes(".page-listing"))
    assert.doesNotMatch(
      css,
      /\\.page\\[data-frame="full-width"\\] \\.page-header \\{[^}]*border-bottom/s,
    )
  })

  test("styles outlined Minimal callouts", () => {
    const css = componentCss(BlogStyles())
    const calloutMarkers = [
      ".callout",
      "border: 1px solid var(--callout-color);",
      "background-color: color-mix(in srgb, var(--callout-color) 6%, transparent);",
      "box-shadow: none;",
    ] as const

    assertIncludesAll(css, calloutMarkers)
  })

  test("maps Minimal list and media rules", () => {
    const css = componentCss(BlogStyles())
    const markdownMarkers = [
      "--blog-list-indent: 1.8em;",
      "--blog-list-spacing: 0.075em;",
      "text-decoration: none;",
      ".block-language-mermaid",
      "overflow-x: auto;",
      "max-width: var(--blog-wide-width);",
    ] as const

    assertIncludesAll(css, markdownMarkers)
  })

  test("contains wide math and tables on mobile", () => {
    const css = componentCss(BlogStyles())
    const overflowMarkers = [
      "p:has(.katex)",
      "li:has(.katex)",
      ".table-container",
      "max-width: 100%;",
    ] as const

    assertIncludesAll(css, overflowMarkers)
  })

  test("wraps table cells inside the article column", () => {
    const css = componentCss(BlogStyles())
    const tableRule = css.match(/article \.table-container > table,[^{]*\{([^}]*)\}/)

    assert.ok(tableRule, "article table rule exists")
    assert.match(tableRule[1], /max-width: calc\(100% - 2rem\);/)
    assert.doesNotMatch(tableRule[1], /width: max-content;/)
    assert.match(css, /\.table-container :is\(th, td\)[^{]*\{\s*word-break: keep-all;/)
  })
})
