import path from "node:path"
import fs from "node:fs/promises"
import type { Root } from "hast"
import type {
  GlobalConfiguration,
  QuartzEmitterPlugin,
  BuildCtx,
  FilePath,
  FullSlug,
  QuartzPluginData,
  ProcessedContent,
  SimpleSlug,
} from "@quartz-community/types"
import { joinSegments } from "@quartz-community/types"
import { simplifySlug, escapeHTML } from "@quartz-community/utils"
import { getDate } from "@quartz-community/utils/sort"
import { toHtml } from "hast-util-to-html"
import {
  orderedAlternateLinks,
  readMultilingualConfig,
  readTranslationDetails,
  sourceLocaleEntries,
} from "./multilingual"
import type { ContentTranslationDetails, MultilingualIndexConfiguration } from "./multilingual"
import { collectExternalLinks, siteHostsForBlog } from "./externalLinks"

export type ContentIndexMap = Map<FullSlug, ContentDetails>
export type ContentDetails = {
  slug: FullSlug
  filePath: FilePath
  title: string
  links: SimpleSlug[]
  tags: string[]
  externalLinks: string[]
  content: string
  richContent?: string
  date?: Date
  description?: string
  multilingual?: ContentTranslationDetails
}

interface Options {
  enableSiteMap: boolean
  enableRSS: boolean
  rssLimit?: number
  rssFullHtml: boolean
  rssSlug: string
  includeEmptyFiles: boolean
  rssRecentNotesText?: string
  rssLastFewNotesText?: (count: number) => string
  /**
   * When set, truncate `content` in the emitted contentIndex.json to at most
   * this many characters. Does not affect RSS/sitemap. Default: undefined
   * (full content).
   *
   * Caution: `content` is also the field the search plugin's FlexSearch
   * index is built from and that its result snippets are drawn from. Any
   * text past this cap is dropped before it reaches the index, so it becomes
   * unsearchable — a search for a term that only occurs beyond the cap will
   * not find that page. Choose a value generous enough to cover the terms
   * readers are expected to search for, or leave unset if full-document
   * search matters more than payload size.
   */
  contentMaxChars?: number
}

const defaultOptions: Options = {
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
  rssFullHtml: false,
  rssSlug: "index",
  includeEmptyFiles: true,
  rssRecentNotesText: "Recent notes",
  rssLastFewNotesText: (count) => `Last ${count} notes`,
}

/** Exported for direct unit testing of the surrogate-pair-safe cut behavior. */
export function truncateText(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text
  let cut = maxChars
  // Don't split a UTF-16 surrogate pair (e.g. many emoji, some CJK
  // extension characters): if the code unit at the cut index is a low
  // surrogate and the one before it is a high surrogate, they're one
  // character split across two code units — back the cut up by one so the
  // pair stays intact instead of leaving a dangling half-character.
  if (cut > 0) {
    const code = text.charCodeAt(cut)
    const prevCode = text.charCodeAt(cut - 1)
    const isLowSurrogate = code >= 0xdc00 && code <= 0xdfff
    const prevIsHighSurrogate = prevCode >= 0xd800 && prevCode <= 0xdbff
    if (isLowSurrogate && prevIsHighSurrogate) {
      cut -= 1
    }
  }
  return text.slice(0, cut)
}

const write = async (args: {
  ctx: BuildCtx
  content: string
  slug: FullSlug
  ext: string
}): Promise<FilePath> => {
  const pathToPage = joinSegments(args.ctx.argv.output, args.slug + args.ext) as FilePath
  const dir = path.dirname(pathToPage)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(pathToPage, args.content)
  return pathToPage
}

function createAbsoluteUrl(base: string, slug: string): string {
  return `https://${joinSegments(base, encodeURI(slug))}`
}

function createXDefaultUrl(base: string, config: MultilingualIndexConfiguration): string {
  return config.xDefaultRoute === "/"
    ? `https://${base}/`
    : createAbsoluteUrl(base, config.xDefaultRoute.replace(/^\//, ""))
}

function generateSiteMap(cfg: GlobalConfiguration, idx: ContentIndexMap): string {
  const base = cfg.baseUrl ?? ""
  const multilingualConfig = readMultilingualConfig(cfg)
  const allContent = Array.from(idx.values())
  const createAlternateEntries = (content: ContentDetails): string => {
    if (!multilingualConfig || !content.multilingual) {
      return ""
    }

    const alternates = orderedAlternateLinks(
      multilingualConfig,
      allContent,
      content.multilingual.translationKey,
    )
    const xDefault = createXDefaultUrl(base, multilingualConfig)
    return [
      ...alternates.map(
        (alternate) =>
          `<xhtml:link rel="alternate" hreflang="${escapeHTML(alternate.hreflang)}" href="${escapeHTML(alternate.url)}" />`,
      ),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeHTML(xDefault)}" />`,
    ].join("\n    ")
  }
  const createURLEntry = (slug: SimpleSlug, content: ContentDetails): string => `<url>
    <loc>${content.multilingual?.canonicalUrl ?? createAbsoluteUrl(base, slug)}</loc>
    ${content.date && `<lastmod>${content.date.toISOString()}</lastmod>`}
    ${createAlternateEntries(content)}
  </url>`
  const urls = Array.from(idx)
    .map(([slug, content]) => createURLEntry(simplifySlug(slug) as SimpleSlug, content))
    .join("")
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`
}

function generateRSSFeed(
  cfg: GlobalConfiguration,
  idx: ContentIndexMap,
  options: Options,
  limit?: number,
): string {
  const base = cfg.baseUrl ?? ""
  const multilingualConfig = readMultilingualConfig(cfg)
  const rssEntries =
    multilingualConfig?.contentIndex.rss === "source"
      ? sourceLocaleEntries(multilingualConfig, idx)
      : Array.from(idx)
  const pageTitle = cfg.pageTitle ?? ""
  const recentNotesText = options.rssRecentNotesText ?? "Recent notes"
  const lastFewNotesText = options.rssLastFewNotesText ?? ((count: number) => `Last ${count} notes`)

  const createURLEntry = (slug: SimpleSlug, content: ContentDetails): string => `<item>
    <title>${escapeHTML(content.title)}</title>
    <link>${content.multilingual?.canonicalUrl ?? createAbsoluteUrl(base, slug)}</link>
    <guid>${content.multilingual?.canonicalUrl ?? createAbsoluteUrl(base, slug)}</guid>
    <description><![CDATA[ ${content.richContent ?? content.description} ]]></description>
    <pubDate>${content.date?.toUTCString()}</pubDate>
  </item>`

  const items = rssEntries
    .sort(([_, f1], [__, f2]) => {
      if (f1.date && f2.date) {
        return f2.date.getTime() - f1.date.getTime()
      } else if (f1.date && !f2.date) {
        return -1
      } else if (!f1.date && f2.date) {
        return 1
      }

      return f1.title.localeCompare(f2.title)
    })
    .map(([slug, content]) => createURLEntry(simplifySlug(slug) as SimpleSlug, content))
    .slice(0, limit ?? idx.size)
    .join("")

  const description = `${
    limit ? lastFewNotesText(limit) : recentNotesText
  } on ${escapeHTML(pageTitle)}`

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
      <title>${escapeHTML(pageTitle)}</title>
      <link>https://${base}</link>
      <description>${description}</description>
      <generator>Quartz -- quartz.jzhao.xyz</generator>
      ${items}
    </channel>
  </rss>`
}

export const ContentIndex: QuartzEmitterPlugin<Partial<Options>> = (opts) => {
  const options = { ...defaultOptions, ...opts }
  const emitAll = async (ctx: BuildCtx, content: ProcessedContent[]): Promise<FilePath[]> => {
    const cfg = ctx.cfg.configuration
    const siteHosts = siteHostsForBlog(cfg.baseUrl ?? "")
    const linkIndex: ContentIndexMap = new Map()
    for (const [tree, file] of content) {
      const data = (file.data as Record<string, unknown>) ?? {}
      if (data.unlisted === true) continue
      const slug = data.slug as FullSlug
      const date = getDate(data as QuartzPluginData) ?? new Date()
      const text = data.text as string | undefined
      if (options.includeEmptyFiles || (text && text !== "")) {
        const frontmatter = (data.frontmatter as Record<string, unknown> | undefined) ?? {}
        const isEncrypted = data.encrypted === true
        linkIndex.set(slug, {
          slug,
          filePath: data.relativePath as FilePath,
          title: (frontmatter.title as string) ?? "",
          links: (data.links as SimpleSlug[] | undefined) ?? [],
          tags: (frontmatter.tags as string[] | undefined) ?? [],
          externalLinks: collectExternalLinks({ tree: tree as Root, siteHosts }),
          content: text ?? "",
          richContent:
            options.rssFullHtml && !isEncrypted
              ? escapeHTML(toHtml(tree as Root, { allowDangerousHtml: true }))
              : undefined,
          date: date,
          description: (data.description as string | undefined) ?? "",
          multilingual: readTranslationDetails(data),
        })
      }
    }

    const outputs: FilePath[] = []
    if (options.enableSiteMap) {
      outputs.push(
        await write({
          ctx,
          content: generateSiteMap(cfg, linkIndex),
          slug: "sitemap" as FullSlug,
          ext: ".xml",
        }),
      )
    }

    if (options.enableRSS) {
      outputs.push(
        await write({
          ctx,
          content: generateRSSFeed(cfg, linkIndex, options, options.rssLimit),
          slug: (options.rssSlug ?? "index") as FullSlug,
          ext: ".xml",
        }),
      )
    }

    const fp = joinSegments("static", "contentIndex") as unknown as FullSlug

    const simplifiedIndex = Object.fromEntries(
      Array.from(linkIndex).map(([slug, content]) => {
        delete content.description
        delete content.date

        if (options.contentMaxChars !== undefined) {
          // Clamp negative caps to 0 rather than passing them straight to
          // truncateText/slice, where a negative index counts from the end
          // of the string and would silently keep a surprising tail of
          // content instead of truncating it.
          const cap = Math.max(0, options.contentMaxChars)
          if (content.content.length > cap) {
            content.content = truncateText(content.content, cap)
          }
        }

        return [slug, content]
      }),
    )

    outputs.push(
      await write({
        ctx,
        content: JSON.stringify(simplifiedIndex),
        slug: fp,
        ext: ".json",
      }),
    )

    return outputs
  }

  return {
    name: "ContentIndex",
    emit: (ctx, content) => emitAll(ctx, content),
    // RSS auto-discovery link tag should be added via a component plugin or manually in the layout.
    partialEmit: (ctx, content) => emitAll(ctx, content),
  }
}
