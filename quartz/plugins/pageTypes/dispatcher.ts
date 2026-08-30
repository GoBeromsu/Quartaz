import {
  ChangeEvent,
  QuartzEmitterPlugin,
  QuartzPageTypePluginInstance,
  TreeTransform,
} from "../types"
import { QuartzComponent, QuartzComponentProps } from "../../components/types"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { FilePath, FullSlug, pathToRoot } from "../../util/path"
import { ProcessedContent, defaultProcessedContent } from "../vfile"
import { write } from "../emitters/helpers"
import { BuildCtx, trieFromAllFiles } from "../../util/ctx"
import { StaticResources } from "../../util/resources"
import { render } from "preact-render-to-string"
import { fromHtml } from "hast-util-from-html"
import { Root as HtmlRoot } from "hast"
import {
  buildLocaleEntryRedirectScript,
  isTranslationMetadata,
  localeEntryRedirectPayload,
} from "../../util/multilingual"

export type IncrementalPageState = {
  slug: string
  tags: string[]
  translationKey?: string
  listingFingerprint: string
}

export function snapshotPageState(
  content: ProcessedContent[],
): Map<FilePath, IncrementalPageState> {
  const snapshot = new Map<FilePath, IncrementalPageState>()
  for (const [, file] of content) {
    const relativePath = file.data.relativePath
    const slug = file.data.slug
    if (!relativePath || !slug) continue
    const tags = file.data.frontmatter?.tags
    const multilingual = file.data.multilingual
    const frontmatter = file.data.frontmatter as Record<string, unknown> | undefined
    snapshot.set(relativePath, {
      slug,
      tags: Array.isArray(tags) ? tags.filter((tag): tag is string => typeof tag === "string") : [],
      translationKey: isTranslationMetadata(multilingual) ? multilingual.translationKey : undefined,
      listingFingerprint: JSON.stringify([
        slug,
        tags,
        frontmatter?.title,
        frontmatter?.description,
        frontmatter?.date,
        frontmatter?.created,
        frontmatter?.modified,
        file.data.description,
        file.data.dates,
        file.data.unlisted,
      ]),
    })
  }
  return snapshot
}

function folderIndexSlugs(slug: string): string[] {
  const parts = slug.split("/").filter(Boolean)
  const result: string[] = []
  for (let length = 1; length < parts.length; length += 1) {
    result.push(`${parts.slice(0, length).join("/")}/index`)
  }
  return result
}

function tagPageSlugs(tags: string[]): string[] {
  const result = new Set<string>(["tags/index"])
  for (const tag of tags) {
    const segments = tag.split("/").filter(Boolean)
    for (let length = 1; length <= segments.length; length += 1) {
      result.add(`tags/${segments.slice(0, length).join("/")}`)
    }
  }
  return [...result]
}

export function affectedPageSlugs(
  changeEvents: ChangeEvent[],
  current: Map<FilePath, IncrementalPageState>,
  previous: Map<FilePath, IncrementalPageState>,
  localeIds: string[],
): Set<string> {
  const affected = new Set<string>()
  const translationsByKey = new Map<string, Set<string>>()
  for (const state of [...previous.values(), ...current.values()]) {
    if (!state.translationKey) continue
    const slugs = translationsByKey.get(state.translationKey) ?? new Set<string>()
    slugs.add(state.slug)
    translationsByKey.set(state.translationKey, slugs)
  }
  for (const event of changeEvents) {
    const before = previous.get(event.path)
    const after = current.get(event.path)
    const dependenciesChanged =
      event.type !== "change" ||
      !before ||
      !after ||
      before.slug !== after.slug ||
      before.listingFingerprint !== after.listingFingerprint
    const translationChanged =
      event.type !== "change" || before?.translationKey !== after?.translationKey

    for (const state of [before, after]) {
      if (!state) continue
      affected.add(state.slug)
      if (translationChanged && state.translationKey) {
        for (const slug of translationsByKey.get(state.translationKey) ?? []) affected.add(slug)
      }
      if (!dependenciesChanged) continue
      for (const slug of folderIndexSlugs(state.slug)) affected.add(slug)
      for (const slug of tagPageSlugs(state.tags)) affected.add(slug)
    }
    if (dependenciesChanged) {
      affected.add("index")
      for (const localeId of localeIds) {
        affected.add(`${localeId}/index`)
        affected.add(`${localeId}/writing`)
      }
    }
  }
  return affected
}

function escapeHtmlAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function absoluteSiteUrl(baseUrl: string | undefined, pathname: string): string {
  const origin = /^https?:\/\//.test(baseUrl ?? "")
    ? new URL(baseUrl!).origin
    : `https://${baseUrl ?? "example.com"}`

  return new URL(pathname, origin).toString()
}

export async function writeMultilingualXDefaultPage(ctx: BuildCtx): Promise<number> {
  let count = 0
  for await (const _ of emitMultilingualXDefaultPage(ctx)) {
    count += 1
  }
  return count
}

async function* emitMultilingualXDefaultPage(ctx: BuildCtx) {
  const cfg = ctx.cfg.configuration
  const multilingual = cfg.multilingual

  if (!multilingual?.enabled) {
    return
  }

  const canonicalUrl = absoluteSiteUrl(cfg.baseUrl, multilingual.xDefaultRoute)
  const alternateLinks = multilingual.locales
    .map((locale) => {
      const href = absoluteSiteUrl(cfg.baseUrl, locale.routePrefix)
      return `<link rel="alternate" hreflang="${escapeHtmlAttribute(locale.locale)}" href="${escapeHtmlAttribute(href)}">`
    })
    .join("\n")
  const languageLinks = multilingual.locales
    .map((locale) => {
      const label = escapeHtmlAttribute(locale.nativeName)
      const href = escapeHtmlAttribute(locale.routePrefix)
      const lang = escapeHtmlAttribute(locale.locale)
      return `<li><a href="${href}" lang="${lang}" hreflang="${lang}">${label}</a></li>`
    })
    .join("\n")
  const redirectScript = buildLocaleEntryRedirectScript(localeEntryRedirectPayload(multilingual))

  yield write({
    ctx,
    slug: "index" as FullSlug,
    ext: ".html",
    content: `<!DOCTYPE html>
<html lang="${escapeHtmlAttribute(multilingual.sourceLocale)}">
<head>
<title>Choose language</title>
<link rel="canonical" href="${escapeHtmlAttribute(canonicalUrl)}">
<link rel="alternate" hreflang="x-default" href="${escapeHtmlAttribute(canonicalUrl)}">
${alternateLinks}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>${redirectScript}</script>
</head>
<body>
<main>
<h1>Choose language</h1>
<ul>
${languageLinks}
</ul>
</main>
</body>
</html>`,
  })
}

function getPageTypes(ctx: BuildCtx): QuartzPageTypePluginInstance[] {
  return (ctx.cfg.plugins.pageTypes ?? []) as unknown as QuartzPageTypePluginInstance[]
}

/** @internal Exported for testing only. */
export function resolveLayout(
  pageType: QuartzPageTypePluginInstance,
  sharedDefaults: Partial<FullPageLayout>,
  byPageType: Record<string, Partial<FullPageLayout>>,
): FullPageLayout {
  const overrides = byPageType[pageType.layout] ?? {}
  // Frame priority: config override > page type declaration > default
  const frame = overrides.frame ?? pageType.frame ?? "default"
  // Same priority order as frame; defaults to false (unconditional fetch, current behavior).
  const skipContentIndexFetch =
    overrides.skipContentIndexFetch ?? pageType.skipContentIndexFetch ?? false
  return {
    head: overrides.head ?? sharedDefaults.head!,
    header: overrides.header ?? sharedDefaults.header ?? [],
    beforeBody: overrides.beforeBody ?? sharedDefaults.beforeBody ?? [],
    pageBody: pageType.body(undefined),
    afterBody: overrides.afterBody ?? sharedDefaults.afterBody ?? [],
    left: overrides.left ?? sharedDefaults.left ?? [],
    right: overrides.right ?? sharedDefaults.right ?? [],
    footer: overrides.footer ?? sharedDefaults.footer ?? [],
    frame,
    skipContentIndexFetch,
  }
}

/** @internal Exported for testing only. */
export function collectComponents(
  pageTypes: QuartzPageTypePluginInstance[],
  sharedDefaults: Partial<FullPageLayout>,
  byPageType: Record<string, Partial<FullPageLayout>>,
): QuartzComponent[] {
  const seen = new Set<QuartzComponent>()
  for (const pt of pageTypes) {
    const layout = resolveLayout(pt, sharedDefaults, byPageType)
    const all = [
      layout.head,
      ...layout.header,
      ...layout.beforeBody,
      layout.pageBody,
      ...layout.afterBody,
      ...layout.left,
      ...layout.right,
      ...layout.footer,
    ]
    for (const c of all) {
      if (c) seen.add(c)
    }
  }
  return [...seen]
}

interface DispatcherOptions {
  defaults: Partial<FullPageLayout>
  byPageType: Record<string, Partial<FullPageLayout>>
}

// Per-page emit failures (e.g. malformed pasted HTML that trips up the
// hast-util-to-html renderer) must not abort the whole emit phase. State is
// module-level since emitPage() is a shared helper invoked from multiple
// loops within a single emit()/partialEmit() call; each of those resets it.
let emitSkipCount = 0
const emitSkippedSlugs: string[] = []

async function emitPage(
  ctx: BuildCtx,
  slug: FullSlug,
  tree: ProcessedContent[0],
  fileData: ProcessedContent[1]["data"],
  allFiles: ProcessedContent[1]["data"][],
  layout: FullPageLayout,
  resources: StaticResources,
  treeTransforms?: TreeTransform[],
): Promise<FilePath | undefined> {
  const cfg = ctx.cfg.configuration
  try {
    // For the 404 page, use an absolute base path so assets resolve correctly
    // when the hosting provider serves 404.html from any URL depth.
    // During local dev (--serve), the dev server strips baseDir itself and
    // serves files from root, so the 404 page must use "/" to avoid requesting
    // assets under a path prefix that the dev server doesn't serve.
    const baseDir =
      slug === "404"
        ? ((ctx.argv.serve
            ? "/"
            : new URL(`https://${cfg.baseUrl ?? "example.com"}`).pathname) as FullSlug)
        : pathToRoot(slug)
    const externalResources = pageResources(baseDir, resources, ctx, layout.skipContentIndexFetch)
    const componentData: QuartzComponentProps = {
      ctx,
      fileData,
      externalResources,
      cfg,
      children: [],
      tree,
      allFiles,
    }

    return await write({
      ctx,
      content: renderPage(cfg, slug, componentData, layout, externalResources, treeTransforms),
      slug,
      ext: ".html",
    })
  } catch (err) {
    emitSkipCount++
    emitSkippedSlugs.push(slug)
    console.warn(`[emit] Skipping ${slug}: ${(err as Error).message}`)
    return undefined
  }
}

async function* emitMultilingualLegacyRedirects(
  ctx: BuildCtx,
  allFiles: ProcessedContent[1]["data"][],
  emittedRedirects: Set<string>,
) {
  const multilingual = ctx.cfg.configuration.multilingual
  if (!multilingual?.enabled || !multilingual.legacyRedirects.flatPermalinks) {
    return
  }

  for (const fileData of allFiles) {
    const metadata = fileData.multilingual
    if (!isTranslationMetadata(metadata) || metadata.locale !== multilingual.sourceLocale) {
      continue
    }

    if (metadata.permalink === "index") {
      continue
    }

    if (emittedRedirects.has(metadata.permalink)) {
      continue
    }
    emittedRedirects.add(metadata.permalink)

    const target = metadata.localizedPath
    yield write({
      ctx,
      slug: metadata.permalink as FullSlug,
      ext: ".html",
      content: `<!DOCTYPE html>
<html lang="${metadata.sourceLocale}">
<head>
<title>${metadata.permalink}</title>
<link rel="canonical" href="${target}">
<meta name="robots" content="noindex">
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=${target}">
</head>
</html>`,
    })
  }
}

/**
 * Render each virtual page's Body component to HTML and parse it to a hast tree,
 * populating both the ProcessedContent tree and vfile.data.htmlAst so that
 * transclusion (e.g. ![[file.canvas]]) can inline the virtual page's content.
 */
function populateVirtualPageHtmlAst(
  virtualEntries: Array<{
    tree: ProcessedContent[0]
    vfile: ProcessedContent[1]
    layout: FullPageLayout
    vpSlug: FullSlug
  }>,
  ctx: BuildCtx,
  allFiles: ProcessedContent[1]["data"][],
  resources: StaticResources,
) {
  const cfg = ctx.cfg.configuration
  for (const ve of virtualEntries) {
    const BodyComponent = ve.layout.pageBody
    const externalResources = pageResources(
      pathToRoot(ve.vpSlug),
      resources,
      ctx,
      ve.layout.skipContentIndexFetch,
    )
    const componentData: QuartzComponentProps = {
      ctx,
      fileData: ve.vfile.data,
      externalResources,
      cfg,
      children: [],
      tree: ve.tree,
      allFiles,
    }
    try {
      const htmlString = render(BodyComponent(componentData))
      const htmlAst = fromHtml(htmlString, { fragment: true }) as HtmlRoot
      ve.vfile.data.htmlAst = htmlAst
    } catch {
      // Body rendering failed — leave htmlAst empty so transclusion falls
      // back to the default title-only display.
    }
  }
}

export const PageTypeDispatcher: QuartzEmitterPlugin<Partial<DispatcherOptions>> = (userOpts) => {
  const defaults = userOpts?.defaults ?? {}
  const byPageType = userOpts?.byPageType ?? {}
  let previousFileState = new Map<FilePath, IncrementalPageState>()

  return {
    name: "PageTypeDispatcher",
    getQuartzComponents(ctx) {
      const pageTypes = getPageTypes(ctx)
      return collectComponents(pageTypes, defaults, byPageType)
    },
    async *emit(ctx, content, resources) {
      emitSkipCount = 0
      emitSkippedSlugs.length = 0
      const pageTypes = [...getPageTypes(ctx)].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      const cfg = ctx.cfg.configuration
      const allFiles = content.map((c) => c[1].data)
      const contentSlugs = new Set(allFiles.map((file) => file.slug).filter(Boolean))

      // Collect tree transforms from all page type plugins
      const treeTransforms: TreeTransform[] = pageTypes.flatMap(
        (pt) => pt.treeTransforms?.(ctx) ?? [],
      )

      // Ensure trie is available for components that need folder hierarchy (e.g. FolderContent)
      ctx.trie ??= trieFromAllFiles(allFiles)

      // Phase 1: Generate all virtual pages first so their data is available in allFiles
      // for transclude resolution in renderPage (e.g. ![[file.canvas]], ![[file.base]])
      const virtualEntries: Array<{
        tree: ProcessedContent[0]
        vfile: ProcessedContent[1]
        layout: FullPageLayout
        vpSlug: FullSlug
      }> = []
      for (const pt of pageTypes) {
        if (!pt.generate) continue
        const virtualPages = pt.generate({ content, cfg, ctx })
        const layout = resolveLayout(pt, defaults, byPageType)
        for (const vp of virtualPages) {
          const vpSlug = vp.slug as FullSlug
          const vpRelativePath = (vpSlug + ".md") as FilePath
          const [tree, vfile] = defaultProcessedContent({
            slug: vpSlug,
            relativePath: vpRelativePath,
            frontmatter: { title: vp.title, tags: [] },
            ...vp.data,
          })
          if (vpSlug !== "404") {
            ctx.virtualPages.push([tree, vfile])
          }
          virtualEntries.push({ tree, vfile, layout, vpSlug })
        }
      }

      // Merge virtual page data into allFiles before populating htmlAst so that
      // Body components rendered during populateVirtualPageHtmlAst can resolve
      // cross-virtual-page embeds (e.g. a .base file embedded in a .canvas file).
      // The vfile.data objects are shared by reference, so htmlAst set on earlier
      // entries becomes visible to later entries in the same pass.
      const allFilesWithVirtual = [...allFiles, ...virtualEntries.map((ve) => ve.vfile.data)]

      // Render Body components to populate htmlAst for transclusion
      populateVirtualPageHtmlAst(virtualEntries, ctx, allFilesWithVirtual, resources)

      // Phase 2: Emit regular pages (with virtual page data available for transclusion)
      const emittedLegacyRedirects = new Set<string>()
      for (const [tree, file] of content) {
        const slug = file.data.slug!
        const fileData = file.data
        for (const pt of pageTypes) {
          if (pt.match({ slug, fileData, cfg })) {
            const layout = resolveLayout(pt, defaults, byPageType)
            const written = await emitPage(
              ctx,
              slug,
              tree,
              fileData,
              allFilesWithVirtual,
              layout,
              resources,
              treeTransforms,
            )
            if (written) yield written
            break
          }
        }
      }

      yield* emitMultilingualXDefaultPage(ctx)
      yield* emitMultilingualLegacyRedirects(ctx, allFilesWithVirtual, emittedLegacyRedirects)

      // Phase 3: Emit virtual pages
      for (const ve of virtualEntries) {
        if (contentSlugs.has(ve.vpSlug)) continue
        const written = await emitPage(
          ctx,
          ve.vpSlug,
          ve.tree,
          ve.vfile.data,
          allFilesWithVirtual,
          ve.layout,
          resources,
          treeTransforms,
        )
        if (written) yield written
      }

      if (emitSkipCount > 0) {
        console.warn(
          `[emit] Skipped ${emitSkipCount} page(s) during emit due to per-page errors: ${emitSkippedSlugs.join(", ")}`,
        )
      }
      previousFileState = snapshotPageState(content)
    },
    async *partialEmit(ctx, content, resources, changeEvents) {
      emitSkipCount = 0
      emitSkippedSlugs.length = 0
      const pageTypes = [...getPageTypes(ctx)].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      const cfg = ctx.cfg.configuration
      const allFiles = content.map((c) => c[1].data)
      const contentSlugs = new Set(allFiles.map((file) => file.slug).filter(Boolean))
      const currentFileState = snapshotPageState(content)
      const affectedSlugs = affectedPageSlugs(
        changeEvents,
        currentFileState,
        previousFileState,
        cfg.multilingual?.locales.map((locale) => locale.id) ?? [],
      )
      const emitAllVirtualPages = previousFileState.size === 0

      // Collect tree transforms from all page type plugins
      const treeTransforms: TreeTransform[] = pageTypes.flatMap(
        (pt) => pt.treeTransforms?.(ctx) ?? [],
      )

      // Rebuild trie on partial emit to reflect file changes
      ctx.trie = trieFromAllFiles(allFiles)

      const changedSlugs = new Set<string>()
      for (const changeEvent of changeEvents) {
        if (!changeEvent.file) continue
        if (changeEvent.type === "add" || changeEvent.type === "change") {
          changedSlugs.add(changeEvent.file.data.slug!)
        }
      }
      for (const slug of affectedSlugs) {
        if (contentSlugs.has(slug as FullSlug)) {
          changedSlugs.add(slug)
        }
      }

      // Phase 1: Generate all virtual pages first so their data is available in allFiles
      const virtualEntries: Array<{
        tree: ProcessedContent[0]
        vfile: ProcessedContent[1]
        layout: FullPageLayout
        vpSlug: FullSlug
      }> = []
      for (const pt of pageTypes) {
        if (!pt.generate) continue
        const virtualPages = pt.generate({ content, cfg, ctx })
        const layout = resolveLayout(pt, defaults, byPageType)
        for (const vp of virtualPages) {
          const vpSlug = vp.slug as FullSlug
          const vpRelativePath = (vpSlug + ".md") as FilePath
          const [tree, vfile] = defaultProcessedContent({
            slug: vpSlug,
            relativePath: vpRelativePath,
            frontmatter: { title: vp.title, tags: [] },
            ...vp.data,
          })
          if (vpSlug !== "404") {
            ctx.virtualPages.push([tree, vfile])
          }
          virtualEntries.push({ tree, vfile, layout, vpSlug })
        }
      }

      const allFilesWithVirtual = [...allFiles, ...virtualEntries.map((ve) => ve.vfile.data)]
      const affectedVirtualEntries = emitAllVirtualPages
        ? virtualEntries
        : virtualEntries.filter((entry) => affectedSlugs.has(entry.vpSlug))

      // Render only invalidated virtual bodies. Rendering every folder and
      // tag page dominates large-vault rebuilds even when one note changed.
      populateVirtualPageHtmlAst(affectedVirtualEntries, ctx, allFilesWithVirtual, resources)

      // Phase 2: Emit changed regular pages
      const emittedLegacyRedirects = new Set<string>()
      for (const [tree, file] of content) {
        const slug = file.data.slug!
        if (!changedSlugs.has(slug)) continue

        const fileData = file.data
        for (const pt of pageTypes) {
          if (pt.match({ slug, fileData, cfg })) {
            const layout = resolveLayout(pt, defaults, byPageType)
            const written = await emitPage(
              ctx,
              slug,
              tree,
              fileData,
              allFilesWithVirtual,
              layout,
              resources,
              treeTransforms,
            )
            if (written) yield written
            break
          }
        }
      }

      yield* emitMultilingualXDefaultPage(ctx)
      yield* emitMultilingualLegacyRedirects(ctx, allFilesWithVirtual, emittedLegacyRedirects)

      // Phase 3: Emit virtual pages
      for (const ve of affectedVirtualEntries) {
        if (contentSlugs.has(ve.vpSlug)) continue
        const written = await emitPage(
          ctx,
          ve.vpSlug,
          ve.tree,
          ve.vfile.data,
          allFilesWithVirtual,
          ve.layout,
          resources,
          treeTransforms,
        )
        if (written) yield written
      }

      if (emitSkipCount > 0) {
        console.warn(
          `[emit] Skipped ${emitSkipCount} page(s) during emit due to per-page errors: ${emitSkippedSlugs.join(", ")}`,
        )
      }
      previousFileState = currentFileState
    },
  }
}
