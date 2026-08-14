import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import type { Node } from "hast"
import { htmlToJsx } from "../htmlToJsx"
// @ts-expect-error - inline script import handled by tsup inline-script-loader
import graphLandingScript from "../scripts/graph-landing.inline.ts"
import styles from "./styles/graph-landing.scss"

interface MultilingualFields {
  locale?: string
}

interface LocaleEntry {
  id: string
  nativeName?: string
}

interface MultilingualCfg {
  sourceLocale?: string
  locales?: LocaleEntry[]
}

interface OverlayCopy {
  labelsShow: string
  labelsHide: string
  relayout: string
  notes: string
  tags: string
  countsTemplate: string
  lensAll: string
  lensTag: string
  lensFolder: string
  lensHub: string
  colorBy: string
  colorType: string
  colorFolder: string
  spacing: string
  spacingTight: string
  spacingNormal: string
  spacingWide: string
  articles: string
  about: string
  theme: string
  tagsToggle: string
  scrollHint: string
  folderRoot: string
}

interface HomeLocaleLink {
  id: string
  href: string
  label: string
  current: boolean
}

function collectText(node: Node): string {
  if (node.type === "text" && "value" in node && typeof node.value === "string") {
    return node.value
  }

  if ("children" in node && Array.isArray(node.children)) {
    return node.children.map((child) => collectText(child as Node)).join("")
  }

  return ""
}

function hasMeaningfulBody(tree: Node): boolean {
  return collectText(tree).trim().length > 0
}

function overlayCopyForLocale(localeId: string): OverlayCopy {
  if (localeId === "ko") {
    return {
      labelsShow: "라벨 보이기",
      labelsHide: "라벨 숨기기",
      relayout: "다시 정렬",
      notes: "노트",
      tags: "태그",
      countsTemplate: "{n} 노드 · {m} 엣지",
      lensAll: "전체",
      lensTag: "태그별",
      lensFolder: "폴더별",
      lensHub: "허브",
      colorBy: "색상 기준",
      colorType: "유형",
      colorFolder: "폴더",
      spacing: "노드 간격",
      spacingTight: "좁게",
      spacingNormal: "보통",
      spacingWide: "넓게",
      articles: "글",
      about: "About",
      theme: "테마",
      tagsToggle: "태그",
      scrollHint: "아래로",
      folderRoot: "루트",
    }
  }

  return {
    labelsShow: "Show labels",
    labelsHide: "Hide labels",
    relayout: "Re-layout",
    notes: "Notes",
    tags: "Tags",
    countsTemplate: "{n} nodes · {m} edges",
    lensAll: "All",
    lensTag: "Tags",
    lensFolder: "Folders",
    lensHub: "Hubs",
    colorBy: "Color",
    colorType: "Type",
    colorFolder: "Folder",
    spacing: "Spacing",
    spacingTight: "Tight",
    spacingNormal: "Mid",
    spacingWide: "Wide",
    articles: "Writing",
    about: "About",
    theme: "Theme",
    tagsToggle: "Tags",
    scrollHint: "Scroll",
    folderRoot: "Root",
  }
}

function slugToAbsHref(slug: string): string {
  const withoutIndex =
    slug === "index" || slug.endsWith("/index") ? slug.replace(/\/?index$/, "") : slug
  if (withoutIndex.length === 0) {
    return "/"
  }
  const encoded = withoutIndex
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  return `/${encoded}/`
}

function homeLocaleLinks(
  allFiles: QuartzComponentProps["allFiles"],
  locales: LocaleEntry[],
  currentLocale: string,
): HomeLocaleLink[] {
  const homes = allFiles.filter((file) => {
    const frontmatter = file.frontmatter as Record<string, unknown> | undefined
    return (
      frontmatter?.translationKey === "home" &&
      typeof file.slug === "string" &&
      file.slug !== "index"
    )
  })

  const links: HomeLocaleLink[] = []
  for (const locale of locales) {
    const home = homes.find((file) => {
      const multilingual = file.multilingual as MultilingualFields | undefined
      return multilingual?.locale === locale.id
    })
    if (!home || typeof home.slug !== "string") {
      continue
    }
    links.push({
      id: locale.id,
      href: slugToAbsHref(home.slug),
      label: locale.id,
      current: locale.id === currentLocale,
    })
  }
  return links
}

export default (() => {
  const GraphLanding: QuartzComponent = ({ fileData, tree, cfg, allFiles }: QuartzComponentProps) => {
    const multilingual = fileData.multilingual as MultilingualFields | undefined
    const slug = typeof fileData.slug === "string" ? fileData.slug : ""
    const localeId = multilingual?.locale ?? slug.split("/")[0] ?? "ko"
    const multilingualCfg = (cfg as QuartzComponentProps["cfg"] & { multilingual?: MultilingualCfg })
      .multilingual
    const sourceLocale = multilingualCfg?.sourceLocale ?? "ko"
    const locales = multilingualCfg?.locales ?? []
    const localePrefixes = locales.map((locale) => locale.id).join(",")
    const copy = overlayCopyForLocale(localeId)
    const localeLinks = homeLocaleLinks(allFiles, locales, localeId)
    const showBody = hasMeaningfulBody(tree as Node)
    const body = showBody ? htmlToJsx(tree as Node) : null

    return (
      <div
        class="graph-landing"
        data-locale={localeId}
        data-source-locale={sourceLocale}
        data-locale-prefixes={localePrefixes}
        data-counts-template={copy.countsTemplate}
        data-folder-root-label={copy.folderRoot}
        data-legend-notes={copy.notes}
        data-legend-tags={copy.tags}
      >
        <section class="graph-landing__hero" aria-label="Knowledge graph">
          <div class="graph-landing__canvas" id="graph-landing-mount"></div>
          <div class="graph-landing__overlay">
            <div class="graph-landing__top-left">
              <div class="graph-landing__title-block">
                <p class="graph-landing__title">Beomsu Koh</p>
                <p class="graph-landing__counts" data-graph-counts>
                  {copy.countsTemplate.replace("{n}", "–").replace("{m}", "–")}
                </p>
              </div>
              <div class="graph-landing__lenses" role="tablist" aria-label="Graph lens">
                <button type="button" class="graph-landing__chip" data-graph-lens="all" aria-pressed="true">
                  {copy.lensAll}
                </button>
                <button type="button" class="graph-landing__chip" data-graph-lens="tag" aria-pressed="false">
                  {copy.lensTag}
                </button>
                <button type="button" class="graph-landing__chip" data-graph-lens="folder" aria-pressed="false">
                  {copy.lensFolder}
                </button>
                <button type="button" class="graph-landing__chip" data-graph-lens="hub" aria-pressed="false">
                  {copy.lensHub}
                </button>
              </div>
              <div class="graph-landing__controls">
                <span class="graph-landing__seg" data-graph-color-group>
                  <span class="graph-landing__seg-label">{copy.colorBy}</span>
                  <button type="button" class="graph-landing__text-btn" data-graph-color="type" aria-pressed="true">
                    {copy.colorType}
                  </button>
                  <button
                    type="button"
                    class="graph-landing__text-btn"
                    data-graph-color="folder"
                    aria-pressed="false"
                  >
                    {copy.colorFolder}
                  </button>
                </span>
                <span class="graph-landing__seg" data-graph-spacing-group>
                  <span class="graph-landing__seg-label">{copy.spacing}</span>
                  <button
                    type="button"
                    class="graph-landing__text-btn"
                    data-graph-spacing="tight"
                    aria-pressed="false"
                  >
                    {copy.spacingTight}
                  </button>
                  <button
                    type="button"
                    class="graph-landing__text-btn"
                    data-graph-spacing="normal"
                    aria-pressed="true"
                  >
                    {copy.spacingNormal}
                  </button>
                  <button
                    type="button"
                    class="graph-landing__text-btn"
                    data-graph-spacing="wide"
                    aria-pressed="false"
                  >
                    {copy.spacingWide}
                  </button>
                </span>
                <button type="button" class="graph-landing__text-btn" data-graph-relayout>
                  {copy.relayout}
                </button>
                <button
                  type="button"
                  class="graph-landing__text-btn"
                  data-graph-labels
                  data-label-show={copy.labelsShow}
                  data-label-hide={copy.labelsHide}
                  aria-pressed="false"
                >
                  {copy.labelsShow}
                </button>
              </div>
              <div class="graph-landing__tags">
                <button
                  type="button"
                  class="graph-landing__tags-toggle"
                  data-graph-tags-toggle
                  aria-expanded="false"
                >
                  {copy.tagsToggle}
                </button>
                <ul class="graph-landing__tag-list" data-graph-tags></ul>
              </div>
            </div>
            <nav class="graph-landing__top-right" aria-label="Site">
              <a class="graph-landing__nav-link" href="/articles/">
                {copy.articles}
              </a>
              <a class="graph-landing__nav-link" href="/about">
                {copy.about}
              </a>
              <span class="graph-landing__locales">
                {localeLinks.map((link) =>
                  link.current ? (
                    <span class="graph-landing__locale graph-landing__locale--current" aria-current="page">
                      {link.label}
                    </span>
                  ) : (
                    <a class="graph-landing__locale" href={link.href} lang={link.id}>
                      {link.label}
                    </a>
                  ),
                )}
              </span>
              <button type="button" class="graph-landing__text-btn" data-graph-theme>
                {copy.theme}
              </button>
            </nav>
            <div class="graph-landing__bottom-left">
              <span class="graph-landing__legend" data-graph-legend>
                <span class="graph-landing__legend-item">
                  <span class="graph-landing__dot graph-landing__dot--note" aria-hidden="true"></span>
                  {copy.notes}
                </span>
                <span class="graph-landing__legend-item">
                  <span class="graph-landing__dot graph-landing__dot--tag" aria-hidden="true"></span>
                  {copy.tags}
                </span>
              </span>
            </div>
            {showBody ? (
              <a class="graph-landing__scroll" href="#graph-landing-body">
                <span class="graph-landing__scroll-label">{copy.scrollHint}</span>
                <span class="graph-landing__chevron" aria-hidden="true"></span>
              </a>
            ) : null}
          </div>
        </section>
        {body ? (
          <article class="graph-landing__body popover-hint" id="graph-landing-body">
            <div class="markdown-preview-view markdown-rendered">{body}</div>
          </article>
        ) : null}
      </div>
    )
  }

  GraphLanding.css = styles
  GraphLanding.afterDOMLoaded = graphLandingScript

  return GraphLanding
}) satisfies QuartzComponentConstructor
