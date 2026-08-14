import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
// @ts-expect-error - inline script import handled by tsup inline-script-loader
import graphLandingScript from "../scripts/graph-landing.inline.ts"
import styles from "./styles/graph-landing.scss"

interface MultilingualFields {
  locale?: string
  translationKey?: string
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
  mentions: string
  previewMention: string
  countsTemplate: string
  lensAll: string
  lensTag: string
  lensFolder: string
  lensHub: string
  spacing: string
  zoom: string
  articles: string
  about: string
  themeToggle: string
  filtersToggle: string
  folderRoot: string
  previewHint: string
  previewTagTemplate: string
  inspectOpen: string
  inspectConnected: string
  inspectClose: string
  inspectEmpty: string
  tune: string
  nodeSize: string
  edgeWidth: string
  coresOnly: string
}

interface LocaleToggleLink {
  id: string
  href: string
  label: string
  ariaLabel: string
}

function overlayCopyForLocale(localeId: string): OverlayCopy {
  if (localeId === "ko") {
    return {
      labelsShow: "라벨 보이기",
      labelsHide: "라벨 숨기기",
      relayout: "다시 정렬",
      notes: "노트",
      tags: "태그",
      mentions: "언급",
      previewMention: "아직 공개되지 않은 언급",
      countsTemplate: "{n} 노드 · {m} 엣지",
      lensAll: "전체",
      lensTag: "태그별",
      lensFolder: "폴더별",
      lensHub: "허브",
      spacing: "노드 간격",
      zoom: "줌",
      articles: "Writing",
      about: "About",
      themeToggle: "라이트/다크 모드 전환",
      filtersToggle: "필터",
      folderRoot: "루트",
      previewHint: "클릭하면 연결이 열립니다",
      previewTagTemplate: "{n}개 노트",
      inspectOpen: "본문 읽기",
      inspectConnected: "연결",
      inspectClose: "닫기",
      inspectEmpty: "직접 연결된 별이 없습니다",
      tune: "조율",
      nodeSize: "별 크기",
      edgeWidth: "선 굵기",
      coresOnly: "핵심만",
    }
  }

  return {
    labelsShow: "Show labels",
    labelsHide: "Hide labels",
    relayout: "Re-layout",
    notes: "Notes",
    tags: "Tags",
    mentions: "Mentions",
    previewMention: "Mentioned, not published yet",
    countsTemplate: "{n} nodes · {m} edges",
    lensAll: "All",
    lensTag: "Tags",
    lensFolder: "Folders",
    lensHub: "Hubs",
    spacing: "Spacing",
    zoom: "Zoom",
    articles: "Writing",
    about: "About",
    themeToggle: "Toggle light / dark mode",
    filtersToggle: "Filters",
    folderRoot: "Root",
    previewHint: "Click to inspect connections",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    tune: "Tune",
    nodeSize: "Star size",
    edgeWidth: "Line weight",
    coresOnly: "Cores only",
  }
}

function slugToAbsHref(slug: string): string {
  const isIndex = slug === "index" || slug.endsWith("/index")
  const withoutIndex = isIndex ? slug.replace(/\/?index$/, "") : slug
  if (withoutIndex.length === 0) {
    return "/"
  }
  const encoded = withoutIndex
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  // Flat pages (ko/graph.html) are served extensionless without a trailing
  // slash on GitHub Pages; only folder indexes keep the trailing slash.
  return isIndex ? `/${encoded}/` : `/${encoded}`
}

function switchAriaLabel(targetLocaleId: string, targetName: string): string {
  if (targetLocaleId === "en") {
    return "Switch to English"
  }
  if (targetLocaleId === "ko") {
    return "한국어로 전환"
  }
  return `Switch to ${targetName}`
}

function findLocaleSlug(
  allFiles: QuartzComponentProps["allFiles"],
  translationKey: string,
  localeId: string,
): string | null {
  const match = allFiles.find((file) => {
    const multilingual = file.multilingual as MultilingualFields | undefined
    return (
      multilingual?.translationKey === translationKey &&
      multilingual?.locale === localeId &&
      typeof file.slug === "string" &&
      file.slug !== "index"
    )
  })
  return typeof match?.slug === "string" ? match.slug : null
}

// Single toggle to the other published language: same page's translation
// via translationKey, falling back to the target locale home.
function localeToggleLink(
  allFiles: QuartzComponentProps["allFiles"],
  locales: LocaleEntry[],
  currentLocale: string,
  translationKey: string,
): LocaleToggleLink | null {
  const other = locales.find((locale) => locale.id !== currentLocale)
  if (!other) {
    return null
  }
  const slug =
    findLocaleSlug(allFiles, translationKey, other.id) ?? findLocaleSlug(allFiles, "home", other.id)
  if (!slug) {
    return null
  }
  const label = other.id === "en" ? "English" : other.id === "ko" ? "Korean" : (other.nativeName ?? other.id)
  return {
    id: other.id,
    href: slugToAbsHref(slug),
    label,
    ariaLabel: switchAriaLabel(other.id, label),
  }
}

export default (() => {
  const GraphLanding: QuartzComponent = ({ fileData, cfg, allFiles }: QuartzComponentProps) => {
    const multilingual = fileData.multilingual as MultilingualFields | undefined
    const slug = typeof fileData.slug === "string" ? fileData.slug : ""
    const localeId = multilingual?.locale ?? slug.split("/")[0] ?? "ko"
    const multilingualCfg = (cfg as QuartzComponentProps["cfg"] & { multilingual?: MultilingualCfg })
      .multilingual
    const sourceLocale = multilingualCfg?.sourceLocale ?? "ko"
    const locales = multilingualCfg?.locales ?? []
    const localePrefixes = locales.map((locale) => locale.id).join(",")
    const copy = overlayCopyForLocale(localeId)
    const translationKey = multilingual?.translationKey ?? "graph"
    const localeToggle = localeToggleLink(allFiles, locales, localeId, translationKey)

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
        data-legend-mentions={copy.mentions}
        data-preview-tag-template={copy.previewTagTemplate}
        data-preview-mention={copy.previewMention}
        data-inspect-read={copy.inspectOpen}
        data-inspect-connected={copy.inspectConnected}
        data-inspect-empty={copy.inspectEmpty}
      >
        <section class="graph-landing__hero" aria-label="Knowledge graph">
          <div class="graph-landing__canvas" id="graph-landing-mount"></div>
          <div class="graph-landing__overlay">
            <div class="graph-landing__rail" {...{ onwheel: "event.stopPropagation()" }}>
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
              </div>
              <div class="graph-landing__tags">
                <p class="graph-landing__section-label graph-landing__section-label--tags">{copy.tags}</p>
                <button
                  type="button"
                  class="graph-landing__filters-toggle"
                  data-graph-tags-toggle
                  aria-expanded="false"
                >
                  {copy.filtersToggle}
                </button>
                <ul class="graph-landing__tag-list" data-graph-tags></ul>
              </div>
              <div class="graph-landing__utils">
                <div class="graph-landing__tune">
                  <div class="graph-landing__tune-head">
                    <p class="graph-landing__section-label">{copy.tune}</p>
                    <div class="graph-landing__tools">
                      <button
                        type="button"
                        class="graph-landing__tool"
                        data-graph-relayout
                        aria-label={copy.relayout}
                        title={copy.relayout}
                      >
                        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            d="M13 8A5 5 0 1 1 11.6 4.4"
                          />
                          <path fill="currentColor" d="M13.2 2.2v3.1h-3.1z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="graph-landing__tool"
                        data-graph-labels
                        data-label-show={copy.labelsShow}
                        data-label-hide={copy.labelsHide}
                        aria-label={copy.labelsShow}
                        title={copy.labelsShow}
                        aria-pressed="false"
                      >
                        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            d="M3 12.5 6.6 3.5h2.8L13 12.5M4.6 9.2h6.8"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <label class="graph-landing__slider">
                    <span>{copy.nodeSize}</span>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value="70"
                      data-graph-node-scale
                      aria-label={copy.nodeSize}
                    />
                  </label>
                  <label class="graph-landing__slider">
                    <span>{copy.edgeWidth}</span>
                    <input
                      type="range"
                      min="50"
                      max="180"
                      value="100"
                      data-graph-edge-scale
                      aria-label={copy.edgeWidth}
                    />
                  </label>
                  <label class="graph-landing__slider">
                    <span>{copy.zoom}</span>
                    <input
                      type="range"
                      min="60"
                      max="170"
                      value="100"
                      data-graph-zoom
                      aria-label={copy.zoom}
                    />
                  </label>
                  <label class="graph-landing__slider">
                    <span>{copy.spacing}</span>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value="100"
                      data-graph-spread
                      aria-label={copy.spacing}
                    />
                  </label>
                </div>
                <label class="graph-landing__check">
                  <input type="checkbox" data-graph-cores />
                  <span>{copy.coresOnly}</span>
                </label>
                <div class="graph-landing__legend" data-graph-legend>
                  <span class="graph-landing__legend-item">
                    <span class="graph-landing__dot graph-landing__dot--note" aria-hidden="true"></span>
                    {copy.notes}
                  </span>
                  <span class="graph-landing__legend-item">
                    <span class="graph-landing__dot graph-landing__dot--tag" aria-hidden="true"></span>
                    {copy.tags}
                  </span>
                  <span class="graph-landing__legend-item">
                    <span class="graph-landing__dot graph-landing__dot--mention" aria-hidden="true"></span>
                    {copy.mentions}
                  </span>
                </div>
              </div>
            </div>
            <nav class="graph-landing__top-right" aria-label="Site">
              <a class="graph-landing__nav-link" href="/articles/">
                {copy.articles}
              </a>
              <a class="graph-landing__nav-link" href="/about">
                {copy.about}
              </a>
              {localeToggle ? (
                <a
                  class="graph-landing__locale-toggle"
                  href={localeToggle.href}
                  lang={localeToggle.id}
                  hreflang={localeToggle.id}
                  aria-label={localeToggle.ariaLabel}
                  data-preferred-locale={localeToggle.id}
                >
                  {localeToggle.label}
                </a>
              ) : null}
              <button
                type="button"
                class="graph-landing__icon-btn"
                data-graph-theme
                aria-label={copy.themeToggle}
              >
                <svg
                  class="graph-landing__icon graph-landing__icon--sun"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" stroke-width="1.6" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"
                  />
                </svg>
                <svg
                  class="graph-landing__icon graph-landing__icon--moon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                    d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
                  />
                </svg>
              </button>
            </nav>
            <aside class="graph-landing__preview" data-graph-preview hidden aria-live="polite">
              <p class="graph-landing__preview-chip" data-graph-preview-chip></p>
              <p class="graph-landing__preview-title" data-graph-preview-title></p>
              <p class="graph-landing__preview-excerpt" data-graph-preview-excerpt></p>
              <p class="graph-landing__preview-hint">{copy.previewHint}</p>
            </aside>
            <aside
              class="graph-landing__inspect"
              data-graph-inspect
              hidden
              {...{ onwheel: "event.stopPropagation()" }}
            >
              <div class="graph-landing__inspect-bar">
                <p class="graph-landing__inspect-chip" data-graph-inspect-chip></p>
                <button
                  type="button"
                  class="graph-landing__inspect-close"
                  data-graph-inspect-close
                  aria-label={copy.inspectClose}
                >
                  {copy.inspectClose}
                </button>
              </div>
              <h2 class="graph-landing__inspect-title" data-graph-inspect-title></h2>
              <p class="graph-landing__inspect-excerpt" data-graph-inspect-excerpt></p>
              <ul class="graph-landing__inspect-tags" data-graph-inspect-tags></ul>
              <p class="graph-landing__inspect-section" data-graph-inspect-connected-label>
                {copy.inspectConnected}
              </p>
              <ul class="graph-landing__inspect-links" data-graph-inspect-connected></ul>
              <a class="graph-landing__inspect-open" data-graph-inspect-open hidden>
                {copy.inspectOpen}
              </a>
            </aside>
          </div>
        </section>
      </div>
    )
  }

  GraphLanding.css = styles
  GraphLanding.afterDOMLoaded = graphLandingScript

  return GraphLanding
}) satisfies QuartzComponentConstructor
