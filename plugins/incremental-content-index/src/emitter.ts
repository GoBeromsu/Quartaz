import fs from "node:fs/promises"
import path from "node:path"
import type {
  BuildCtx,
  ChangeEvent,
  FilePath,
  FullSlug,
  ProcessedContent,
  QuartzEmitterPlugin,
  QuartzPluginData,
  SimpleSlug,
} from "@quartz-community/types"
import { joinSegments } from "@quartz-community/types"
import { escapeHTML, simplifySlug } from "@quartz-community/utils"
import { getDate } from "@quartz-community/utils/sort"

export type ContentIndexMap = Map<FullSlug, ContentDetails>

export type ContentDetails = {
  slug: FullSlug
  filePath: FilePath
  title: string
  links: SimpleSlug[]
  tags: string[]
  content: string
  date?: Date
  description?: string
}

type Options = {
  enableSiteMap: boolean
  enableRSS: boolean
  rssLimit: number
  rssSlug: string
  includeEmptyFiles: boolean
  contentMaxChars: number
  emitGraphIndex: boolean
  graphIndexMaxNodes: number
  graphIndexMaxLinksPerNode: number
}

const defaults: Options = {
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
  rssSlug: "index",
  includeEmptyFiles: true,
  contentMaxChars: 120,
  emitGraphIndex: true,
  graphIndexMaxNodes: 1000,
  graphIndexMaxLinksPerNode: 8,
}

export function truncateText(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text
  let cut = Math.max(0, maxChars)
  if (cut > 0) {
    const current = text.charCodeAt(cut)
    const previous = text.charCodeAt(cut - 1)
    if (current >= 0xdc00 && current <= 0xdfff && previous >= 0xd800 && previous <= 0xdbff) {
      cut -= 1
    }
  }
  return text.slice(0, cut)
}

export function selectGraphEntries(
  index: ContentIndexMap,
  maxNodes: number,
  maxLinksPerNode = Number.POSITIVE_INFINITY,
): ContentIndexMap {
  const degree = new Map<string, number>(Array.from(index.keys(), (slug) => [slug as string, 0]))
  for (const entry of index.values()) {
    for (const target of entry.links) {
      if (!degree.has(target)) continue
      degree.set(entry.slug, (degree.get(entry.slug) ?? 0) + 1)
      degree.set(target, (degree.get(target) ?? 0) + 1)
    }
  }
  const selected = new Set<string>(
    [...index.keys()]
      .sort((left, right) => {
        const degreeDelta = (degree.get(right) ?? 0) - (degree.get(left) ?? 0)
        return degreeDelta || left.localeCompare(right)
      })
      .slice(0, Math.max(0, maxNodes)),
  )
  return new Map(
    [...index]
      .filter(([slug]) => selected.has(slug))
      .map(([slug, entry]) => [
        slug,
        {
          ...entry,
          links: entry.links
            .filter((target) => selected.has(target))
            .sort((left, right) => {
              const degreeDelta = (degree.get(right) ?? 0) - (degree.get(left) ?? 0)
              return degreeDelta || left.localeCompare(right)
            })
            .slice(0, Math.max(0, maxLinksPerNode)),
        },
      ]),
  )
}

function absoluteUrl(baseUrl: string | undefined, slug: string): string {
  return `https://${joinSegments(baseUrl ?? "", encodeURI(slug))}`
}

function sitemap(baseUrl: string | undefined, index: ContentIndexMap): string {
  const entries = Array.from(index, ([slug, entry]) => {
    const location = absoluteUrl(baseUrl, simplifySlug(slug))
    const lastModified = entry.date ? `<lastmod>${entry.date.toISOString()}</lastmod>` : ""
    return `<url><loc>${escapeHTML(location)}</loc>${lastModified}</url>`
  }).join("")
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`
}

function rss(
  baseUrl: string | undefined,
  title: string,
  index: ContentIndexMap,
  limit: number,
): string {
  const entries = [...index.values()]
    .sort((left, right) => {
      const dateDelta = (right.date?.getTime() ?? 0) - (left.date?.getTime() ?? 0)
      return dateDelta || left.title.localeCompare(right.title)
    })
    .slice(0, limit)
    .map((entry) => {
      const link = absoluteUrl(baseUrl, simplifySlug(entry.slug))
      return `<item><title>${escapeHTML(entry.title)}</title><link>${escapeHTML(link)}</link><guid>${escapeHTML(link)}</guid><description>${escapeHTML(entry.description ?? "")}</description><pubDate>${entry.date?.toUTCString() ?? ""}</pubDate></item>`
    })
    .join("")
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeHTML(title)}</title><link>https://${baseUrl ?? ""}</link><description>Recent notes on ${escapeHTML(title)}</description>${entries}</channel></rss>`
}

async function writeOutput(
  ctx: BuildCtx,
  slug: FullSlug,
  extension: string,
  content: string,
): Promise<FilePath> {
  const output = joinSegments(ctx.argv.output, `${slug}${extension}`) as FilePath
  await fs.mkdir(path.dirname(output), { recursive: true })
  await fs.writeFile(output, content)
  return output
}

export const ContentIndex: QuartzEmitterPlugin<Partial<Options>> = (userOptions) => {
  const options = { ...defaults, ...userOptions }
  const entriesByPath = new Map<FilePath, ContentDetails>()
  const outputCache = new Map<string, string>()
  let initialized = false

  const entryFor = ([, file]: ProcessedContent): ContentDetails | undefined => {
    const data = file.data as QuartzPluginData & { unlisted?: boolean; text?: string }
    if (data.unlisted === true || !data.slug || !data.relativePath) return undefined
    const text = data.text ?? ""
    if (!options.includeEmptyFiles && text.length === 0) return undefined
    return {
      slug: data.slug,
      filePath: data.relativePath,
      title: data.frontmatter?.title ?? "",
      links: data.links ?? [],
      tags: data.frontmatter?.tags ?? [],
      content: truncateText(text, options.contentMaxChars),
      date: getDate(data) ?? new Date(),
      description: data.description ?? "",
    }
  }

  const emitOutputs = async (ctx: BuildCtx): Promise<FilePath[]> => {
    const index: ContentIndexMap = new Map(
      Array.from(entriesByPath.values(), (entry) => [entry.slug, entry]),
    )
    const outputs: Array<[FullSlug, string, string]> = []
    if (options.enableSiteMap)
      outputs.push(["sitemap" as FullSlug, ".xml", sitemap(ctx.cfg.configuration.baseUrl, index)])
    if (options.enableRSS)
      outputs.push([
        options.rssSlug as FullSlug,
        ".xml",
        rss(
          ctx.cfg.configuration.baseUrl,
          ctx.cfg.configuration.pageTitle ?? "",
          index,
          options.rssLimit,
        ),
      ])

    const browserIndex = Object.fromEntries(
      Array.from(index, ([slug, entry]) => {
        const { date: _date, description: _description, links: _links, ...browserEntry } = entry
        return [slug, browserEntry]
      }),
    )
    outputs.push([
      joinSegments("static", "contentIndex") as unknown as FullSlug,
      ".json",
      JSON.stringify(browserIndex),
    ])
    if (options.emitGraphIndex) {
      const graphCandidates = new Map(
        [...index].filter(
          ([slug, entry]) =>
            entry.filePath.toLowerCase().endsWith(".md") &&
            !slug.endsWith(".base") &&
            !slug.endsWith(".canvas") &&
            !slug.startsWith("tags/"),
        ),
      )
      const selectedEntries = selectGraphEntries(
        graphCandidates,
        options.graphIndexMaxNodes,
        options.graphIndexMaxLinksPerNode,
      )
      const graphIndex = Object.fromEntries(
        Array.from(selectedEntries, ([slug, entry]) => [
          slug,
          {
            slug: entry.slug,
            filePath: entry.filePath,
            title: entry.title,
            links: entry.links,
            tags: entry.tags,
            excerpt: truncateText(entry.content, 220),
          },
        ]),
      )
      outputs.push([
        joinSegments("static", "graphIndex") as unknown as FullSlug,
        ".json",
        JSON.stringify(graphIndex),
      ])
    }

    const written: FilePath[] = []
    for (const [slug, extension, content] of outputs) {
      const key = `${slug}${extension}`
      if (outputCache.get(key) === content) continue
      written.push(await writeOutput(ctx, slug, extension, content))
      outputCache.set(key, content)
    }
    return written
  }

  const emitAll = async (ctx: BuildCtx, content: ProcessedContent[]): Promise<FilePath[]> => {
    entriesByPath.clear()
    outputCache.clear()
    for (const processed of content) {
      const entry = entryFor(processed)
      if (entry) entriesByPath.set(entry.filePath, entry)
    }
    initialized = true
    return emitOutputs(ctx)
  }

  const emitChanged = async (
    ctx: BuildCtx,
    content: ProcessedContent[],
    changes: ChangeEvent[],
  ): Promise<FilePath[]> => {
    if (!initialized) return emitAll(ctx, content)
    const changedPaths = new Set(changes.map((change) => change.path))
    const current = new Map<FilePath, ProcessedContent>()
    for (const processed of content) {
      const relativePath = processed[1].data.relativePath
      if (relativePath && changedPaths.has(relativePath)) current.set(relativePath, processed)
    }
    for (const change of changes) {
      entriesByPath.delete(change.path)
      if (change.type === "delete") continue
      const processed = current.get(change.path)
      if (!processed) continue
      const entry = entryFor(processed)
      if (entry) entriesByPath.set(change.path, entry)
    }
    return emitOutputs(ctx)
  }

  return {
    name: "ContentIndex",
    emit: (ctx, content) => emitAll(ctx, content),
    partialEmit: (ctx, content, _resources, changes) => emitChanged(ctx, content, changes),
  }
}
