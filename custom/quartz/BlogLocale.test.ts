import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test, { describe } from "node:test"

import { h } from "preact"
import renderToString from "preact-render-to-string"
import { parse } from "yaml"

import type { GlobalConfiguration, MultilingualConfiguration } from "../../quartz/cfg"
import type { QuartzComponentProps } from "../../quartz/components/types"
import type { BuildCtx } from "../../quartz/util/ctx"
import type { FullSlug } from "../../quartz/util/path"
import {
  validateMultilingualConfig,
  type TranslationMetadata,
} from "../../quartz/util/multilingual"
import BlogAllTags from "./BlogAllTags"
import BlogArticleList from "./BlogArticleList"
import BlogLanguageSwitcher from "./BlogLanguageSwitcher"
import BlogLatest from "./BlogLatest"
import BlogLinksHeader from "./BlogLinksHeader"

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
    parse(readFileSync(new URL("../../quartz.config.yaml", import.meta.url), "utf8")),
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
): TranslationMetadata {
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
    canonicalUrl: `https://berom.net${localeConfig.routePrefix}${permalink}`,
    direction: localeConfig.direction,
  } as TranslationMetadata
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
      buildId: "blog-locale-test",
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

describe("Blog locale-aware UI", () => {
  test("scopes article lists and tags to the current Korean locale", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "ko/index" as FullSlug)
    const articleList = renderToString(BlogArticleList({ title: "Writing", limit: 0 })(props))
    const latest = renderToString(BlogLatest({ title: "Latest", limit: 5 })(props))
    const tags = renderToString(BlogAllTags({ title: "Topics" })(props))

    assert.match(articleList, /젊음이 아름답다/)
    assert.doesNotMatch(articleList, /Youth Is Beautiful/)
    assert.match(latest, /젊음이 아름답다/)
    assert.doesNotMatch(latest, /Youth Is Beautiful/)
    assert.match(tags, /korean-only/)
    assert.doesNotMatch(tags, /english-only/)
  })

  test("scopes article lists to the current English locale", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "en/index" as FullSlug)
    const articleList = renderToString(BlogArticleList({ title: "Writing", limit: 0 })(props))

    assert.match(articleList, /Youth Is Beautiful/)
    assert.doesNotMatch(articleList, /젊음이 아름답다/)
  })

  test("localizes header links for locale-prefixed pages", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "ko/index" as FullSlug)
    const header = renderToString(BlogLinksHeader({ links: { About: "/about" } })(props))

    assert.match(header, /href="\/ko\/about"/)
    assert.doesNotMatch(header, /href="\/about"/)
  })

  test("lists sibling translation links as endonyms and preserves page context", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "en/beauty-of-youth" as FullSlug)
    props.fileData =
      props.allFiles.find((file) => file.slug === "en/beauty-of-youth") ?? props.fileData
    const switcher = renderToString(BlogLanguageSwitcher()(props))

    assert.match(switcher, /aria-label="Language"/)
    assert.match(switcher, /<span class="blog-language-switcher-current">English<\/span>/)
    assert.match(switcher, /href="\.\.\/ko\/beauty-of-youth"/)
    assert.match(switcher, /href="\.\.\/en\/beauty-of-youth"/)
    assert.match(switcher, /data-preferred-locale="ko"/)
    assert.match(switcher, /data-preferred-locale="en"/)
    assert.match(switcher, />한국어</)
    assert.match(switcher, />English</)
    assert.doesNotMatch(switcher, /zh-Hans/)
    assert.doesNotMatch(switcher, /aria-disabled="true"/)
  })

  test("falls back to the locale home when a sibling translation is missing", () => {
    const cfg = readBlogConfiguration()
    const props = componentProps(cfg, "ko/index" as FullSlug)
    props.fileData = {
      slug: "ko/about" as FullSlug,
      frontmatter: { title: "About" },
    }
    const switcher = renderToString(BlogLanguageSwitcher()(props))

    assert.match(switcher, /aria-label="언어 선택"/)
    assert.match(switcher, /href="\/ko\/"/)
    assert.match(switcher, /href="\/en\/"/)
    assert.match(switcher, />한국어</)
    assert.match(switcher, />English</)
  })
})
