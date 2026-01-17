import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import { getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import { classNames } from "../util/lang"

interface Options {
  title?: string
  limit: number
  filter: (f: QuartzPluginData) => boolean
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  limit: 10,
  filter: () => true,
  sort: byDateAndAlphabetical(cfg),
})

export default ((userOpts?: Partial<Options>) => {
  const ArticleList: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles.filter(opts.filter).sort(opts.sort)
    const limitedPages = opts.limit > 0 ? pages.slice(0, opts.limit) : pages

    if (limitedPages.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "article-list-container")}>
        {opts.title && <h3 class="article-list-title">{opts.title}</h3>}
        <ul class="article-list">
          {limitedPages.map((page) => {
            const title = page.frontmatter?.title ?? "Untitled"
            const date = getDate(cfg, page)
            const year = date ? date.getFullYear().toString() : ""

            return (
              <li>
                <span class="year">{year}</span>
                <span class="separator">&middot;</span>
                <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  ArticleList.css = `
.article-list-container {
  margin: 1rem 0;
}

.article-list-title {
  margin-bottom: 0.5rem;
}

.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-list li {
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  padding: 0.25em 0;
}

.article-list .year {
  color: var(--gray);
  font-variant-numeric: tabular-nums;
  min-width: 3.5em;
}

.article-list .separator {
  color: var(--gray);
}

.article-list a {
  text-decoration: none;
}

.article-list a:hover {
  text-decoration: underline;
}
`

  return ArticleList
}) satisfies QuartzComponentConstructor
