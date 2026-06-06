import { GlobalConfiguration } from "../../quartz/cfg"
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"
import { getDate, formatDate } from "../../quartz/components/Date"
import { byDateAndAlphabetical } from "../../quartz/components/PageList"
import { QuartzPluginData } from "../../quartz/plugins/vfile"
import { classNames } from "../../quartz/util/lang"
import { resolveRelative } from "../../quartz/util/path"

interface Options {
  title?: string
  limit: number
  filter: (file: QuartzPluginData) => boolean
  sort: (left: QuartzPluginData, right: QuartzPluginData) => number
}

const defaultOptions = (_cfg: GlobalConfiguration): Options => ({
  limit: 10,
  filter: () => true,
  sort: byDateAndAlphabetical(),
})

export default ((userOpts?: Partial<Options>) => {
  const BlogArticleList: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles
      .filter((file) => Boolean(file.filePath) && opts.filter(file))
      .sort(opts.sort)
    const limitedPages = opts.limit > 0 ? pages.slice(0, opts.limit) : pages

    if (limitedPages.length === 0) {
      return null
    }

    return (
      <section class={classNames(displayClass, "blog-article-list-section")}>
        {opts.title && <h3>{opts.title}</h3>}
        <ul class="blog-article-list">
          {limitedPages.map((page) => {
            const date = page.dates ? getDate(page) : undefined
            const dateText = date ? formatDate(date, cfg.locale) : ""

            return (
              <li>
                <span class="date">{dateText}</span>
                <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                  {page.frontmatter?.title ?? "Untitled"}
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  BlogArticleList.css = `
.blog-article-list-section {
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 2rem;
}

.blog-article-list-section h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
}

.blog-article-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.blog-article-list li {
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  padding: 0.25em 0;
}

.blog-article-list .date {
  color: var(--gray);
  font-variant-numeric: tabular-nums;
  min-width: 11em;
}

.blog-article-list a.internal {
  background-color: transparent;
  color: var(--text-accent);
  padding: 0;
  text-decoration: none;
}

.blog-article-list a:hover {
  color: var(--text-accent-hover);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

@media (max-width: 430px) {
  .blog-article-list li {
    align-items: start;
    display: grid;
    gap: 0.35rem;
    grid-template-columns: minmax(6.5rem, auto) 1fr;
  }

  .blog-article-list .date {
    min-width: 0;
  }
}
`

  return BlogArticleList
}) satisfies QuartzComponentConstructor<Partial<Options> | undefined>
