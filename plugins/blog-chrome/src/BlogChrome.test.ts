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
import BlogFooter from "./components/BlogFooter"
import BlogLanguageSwitcher from "./components/BlogLanguageSwitcher"
import BlogLinksHeader from "./components/BlogLinksHeader"

type TestGlobal = typeof globalThis & {
  React?: {
    readonly createElement: typeof h
  }
}

type Frontmatter = {
  readonly title: string
  readonly tags?: readonly string[]
}
;(globalThis as TestGlobal).React = { createElement: h }

type CssCarrier = {
  readonly css?: string
  readonly afterDOMLoaded?: string
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

function componentProps(cfg: GlobalConfiguration, slug: FullSlug): QuartzComponentProps {
  const multilingual = cfg.multilingual
  if (!multilingual) {
    assert.fail("test config should include multilingual settings")
  }

  const allFiles = [
    article(multilingual, "ko", "젊음이 아름답다", ["essay", "korean-only"]),
    article(multilingual, "en", "Youth Is Beautiful", ["essay", "english-only"]),
  ]

  return {
    ctx: {
      buildId: "blog-chrome-test",
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

describe("Blog chrome locale-aware UI", () => {
  test("localizes header links for locale-prefixed pages", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "ko/index" as FullSlug)
    const header = renderToString(BlogLinksHeader({ links: { About: "/about" } })(props))

    assert.match(header, /href="\/ko\/about"/)
    assert.doesNotMatch(header, /href="\/about"/)
  })

  test("toggles to the Korean endonym and sibling page from English", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "en/beauty-of-youth" as FullSlug)
    props.fileData =
      props.allFiles.find((file) => file.slug === "en/beauty-of-youth") ?? props.fileData
    const switcher = renderToString(BlogLanguageSwitcher()(props))

    assert.match(switcher, /aria-label="한국어로 전환"/)
    assert.match(switcher, /href="\.\.\/ko\/beauty-of-youth"/)
    assert.match(switcher, /data-preferred-locale="ko"/)
    assert.match(switcher, />(한국어|Korean)</)
    assert.doesNotMatch(switcher, /data-preferred-locale="en"/)
    assert.doesNotMatch(switcher, /<details/)
    assert.doesNotMatch(switcher, /zh-Hans/)
  })

  test("falls back to the English locale home when a sibling translation is missing", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "ko/index" as FullSlug)
    props.fileData = {
      slug: "ko/about" as FullSlug,
      frontmatter: { title: "About" },
    }
    const switcher = renderToString(BlogLanguageSwitcher()(props))

    assert.match(switcher, /aria-label="Switch to English"/)
    assert.match(switcher, /href="\/en\/"/)
    assert.match(switcher, /data-preferred-locale="en"/)
    assert.match(switcher, />English</)
    assert.doesNotMatch(switcher, /href="\/ko\/"/)
  })

  test("persists preferred-locale in the client script", () => {
    const script = BlogLanguageSwitcher().afterDOMLoaded
    if (typeof script !== "string") {
      assert.fail("language switcher should expose afterDOMLoaded")
    }

    assert.match(script, /preferred-locale/)
    assert.match(script, /localStorage\.setItem/)
  })
})

describe("Blog chrome Ataraxia contract", () => {
  test("keeps header and footer chrome observable", () => {
    const css = [BlogLinksHeader({ links: {} }), BlogFooter({ links: {} })]
      .map(componentCss)
      .join("\n")

    assert.ok(css.includes(".blog-links-header"))
    assert.ok(css.includes("#quartz-body > footer"))
    assert.ok(css.includes("border-radius: 0;"))
    assert.ok(css.includes("box-shadow: none;"))
    assert.ok(css.includes("@media (max-width: 430px)"))
  })

  test("keeps the language toggle at least 44px", () => {
    const css = componentCss(BlogLanguageSwitcher())
    assert.ok(css.includes("min-height: 44px;"))
    assert.ok(css.includes("min-width: 44px;"))
  })
})
