import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test, { describe } from "node:test"

import { h } from "preact"
import renderToString from "preact-render-to-string"
import { parse } from "yaml"

import type { QuartzComponentProps } from "@quartz-community/types"

import { validateMultilingualConfig } from "../../../quartz/util/multilingual"
import type { GlobalConfiguration, MultilingualConfiguration } from "../../../quartz/cfg"
import type { BuildCtx } from "../../../quartz/util/ctx"
import type { FullSlug } from "../../../quartz/util/path"
import { isLocaleHomeFile, isLocaleHomeSlug } from "./locale"
import BlogAllTags from "./components/BlogAllTags"
import BlogArticleList from "./components/BlogArticleList"
import BlogLatest from "./components/BlogLatest"
import BlogStyles from "./components/BlogStyles"

type TestGlobal = typeof globalThis & {
  React?: {
    readonly createElement: typeof h
  }
}

type Frontmatter = {
  readonly title: string
  readonly tags?: readonly string[]
  readonly translationKey?: string
}
;(globalThis as TestGlobal).React = { createElement: h }

type CssCarrier = {
  readonly css?: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function requiredRecord(value: unknown, label: string): Record<string, unknown> {
  if (!isRecord(value)) {
    assert.fail(`${label} should be an object`)
  }

  return value
}

function readBlogConfiguration(): GlobalConfiguration {
  const parsed = requiredRecord(
    parse(readFileSync(new URL("../../../quartz.config.yaml", import.meta.url), "utf8")),
    "quartz.config.yaml",
  )
  const configuration = requiredRecord(parsed.configuration, "configuration")

  return {
    ...configuration,
    multilingual: validateMultilingualConfig(configuration.multilingual),
  } as GlobalConfiguration
}

function metadata(
  config: MultilingualConfiguration,
  locale: string,
  permalink: string,
) {
  const localeConfig = config.locales.find((entry) => entry.id === locale)
  if (!localeConfig) {
    assert.fail(`missing locale config for ${locale}`)
  }

  return {
    translationKey: permalink,
    locale,
    sourceLocale: "ko",
    sourcePath: "quartz/test/fixtures/multilingual-build-content/ko-source.md",
    sourceHash: "sha256:fixture",
    translationStatus: locale === "ko" ? "source" : "translated",
    permalink,
    localizedPath: `${localeConfig.routePrefix}${permalink}`,
    canonicalUrl: `https://beomsukoh.com${localeConfig.routePrefix}${permalink}`,
    direction: localeConfig.direction,
  }
}

function article(
  config: MultilingualConfiguration,
  locale: string,
  title: string,
  tags: readonly string[],
) {
  const translation = metadata(config, locale, "beauty-of-youth")

  return {
    slug: translation.localizedPath.replace(/^\//, "") as FullSlug,
    filePath: `${locale}-beauty-of-youth.md`,
    frontmatter: { title, tags } satisfies Frontmatter,
    dates: { created: new Date("2024-01-01T00:00:00.000Z") },
    defaultDateType: "created",
    multilingual: translation,
  }
}

function homePage(config: MultilingualConfiguration, locale: string) {
  const translation = metadata(config, locale, "index")
  translation.translationKey = "home"

  return {
    slug: `${locale}/index` as FullSlug,
    filePath: `${locale}-index.md`,
    frontmatter: { title: "Beomsu", translationKey: "home" } satisfies Frontmatter,
    multilingual: translation,
  }
}

function componentProps(cfg: GlobalConfiguration, slug: FullSlug): QuartzComponentProps {
  const multilingual = cfg.multilingual
  if (!multilingual) {
    assert.fail("test config should include multilingual settings")
  }

  const allFiles = [
    homePage(multilingual, "ko"),
    homePage(multilingual, "en"),
    article(multilingual, "ko", "젊음이 아름답다", ["essay", "korean-only"]),
    article(multilingual, "en", "Youth Is Beautiful", ["essay", "english-only"]),
  ]

  return {
    ctx: {
      buildId: "blog-home-test",
      argv: {
        directory: "quartz/test/fixtures/multilingual-build-content",
        verbose: false,
        output: "public",
        serve: false,
        watch: false,
        port: 8080,
        wsPort: 3001,
      },
      cfg: { configuration: cfg, plugins: {} },
      allSlugs: [],
      allFiles: [],
      incremental: false,
      virtualPages: [],
    } satisfies BuildCtx,
    externalResources: { css: [], js: [] },
    fileData: { slug },
    cfg,
    children: [],
    tree: { type: "root", children: [] },
    allFiles,
  }
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

describe("Blog home locale-aware listings", () => {
  test("treats locale-prefixed index slugs as homes", () => {
    assert.equal(isLocaleHomeSlug("index"), true)
    assert.equal(isLocaleHomeSlug("ko/index"), true)
    assert.equal(isLocaleHomeSlug("en/index"), true)
    assert.equal(isLocaleHomeSlug("en/beauty-of-youth"), false)
  })

  test("treats writing and graph utility notes as listing exclusions", () => {
    assert.equal(isLocaleHomeFile({ frontmatter: { translationKey: "writing" } }), true)
    assert.equal(isLocaleHomeFile({ frontmatter: { translationKey: "graph" } }), true)
    assert.equal(isLocaleHomeFile({ frontmatter: { translationKey: "about" } }), false)
  })

  test("scopes article lists and tags to the current Korean locale home", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "ko/index" as FullSlug)
    const articleList = renderToString(BlogArticleList({ title: "Writing", limit: 0 })(props))
    const latest = renderToString(BlogLatest({ title: "Latest", limit: 5 })(props))
    const tags = renderToString(BlogAllTags({ title: "Topics" })(props))

    assert.match(articleList, /젊음이 아름답다/)
    assert.doesNotMatch(articleList, /Youth Is Beautiful/)
    assert.doesNotMatch(articleList, />Beomsu</)
    assert.match(latest, /젊음이 아름답다/)
    assert.doesNotMatch(latest, /Youth Is Beautiful/)
    assert.match(tags, /korean-only/)
    assert.doesNotMatch(tags, /english-only/)
  })

  test("scopes article lists to the current English locale home", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "en/index" as FullSlug)
    const articleList = renderToString(BlogArticleList({ title: "Writing", limit: 0 })(props))

    assert.match(articleList, /Youth Is Beautiful/)
    assert.doesNotMatch(articleList, /젊음이 아름답다/)
  })

  test("falls back to the Obsidian source post when the other locale has no translation", () => {
    const cfg = readBlogConfiguration()
    const multilingual = cfg.multilingual
    if (!multilingual) {
      assert.fail("test config should include multilingual settings")
    }
    const sourceOnly = metadata(multilingual, "ko", "after-korea")
    const props = componentProps(cfg, "en/index" as FullSlug)
    props.allFiles = [
      ...props.allFiles,
      {
        slug: "articles/after-returning-to-korea" as FullSlug,
        filePath: "Articles/한국에 돌아온 후 근황.md",
        frontmatter: { title: "한국에 돌아온 후 근황", tags: ["life"] },
        dates: { created: new Date("2026-03-01T00:00:00.000Z") },
        defaultDateType: "created",
      },
      {
        slug: sourceOnly.localizedPath.replace(/^\//, "") as FullSlug,
        filePath: "ko-after-korea.md",
        frontmatter: { title: "번역 없는 원문", tags: ["life"] },
        dates: { created: new Date("2026-04-01T00:00:00.000Z") },
        defaultDateType: "created",
        multilingual: sourceOnly,
      },
    ]
    const articleList = renderToString(BlogArticleList({ title: "Writing", limit: 0 })(props))

    assert.match(articleList, /Youth Is Beautiful/)
    assert.match(articleList, /한국에 돌아온 후 근황/)
    assert.match(articleList, /번역 없는 원문/)
    assert.doesNotMatch(articleList, /젊음이 아름답다/)
  })
})

describe("Blog home Ataraxia contract", () => {
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

  test("floats the TOC panel beside the article on wide viewports", () => {
    const css = componentCss(BlogStyles())
    const tocMarkers = [
      '.page[data-frame="full-width"] > #quartz-body .sidebar.right',
      "position: fixed;",
      "@media (min-width: 1280px)",
    ] as const

    assertIncludesAll(css, tocMarkers)
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

  test("prevents duplicate homepage dividers on locale homes", () => {
    const css = componentCss(BlogStyles())
    assert.ok(css.includes('body[data-slug="index"]'))
    assert.ok(css.includes('body[data-slug$="/index"]'))
    assert.ok(css.includes(".center.full-width > hr"))
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
      "width: max-content;",
    ] as const

    assertIncludesAll(css, overflowMarkers)
  })
})
