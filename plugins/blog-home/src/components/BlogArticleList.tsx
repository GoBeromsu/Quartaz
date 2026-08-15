import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { classNames } from "@quartz-community/utils/lang"
import { resolveRelative, type FullSlug } from "@quartz-community/utils/path"
import { byDateAndAlphabetical, formatDate, getDate, type DatedFile } from "../dates"
import {
  currentLocaleTag,
  isLocaleHomeFile,
  localeScopedFiles,
  type GlobalConfig,
  type LocaleFileData,
} from "../locale"

interface ListFile extends DatedFile, LocaleFileData {
  readonly filePath?: string
  readonly slug?: string
  readonly frontmatter?: {
    readonly title?: string
  }
}

interface Options {
  title?: string
  limit: number
  filter: (file: ListFile) => boolean
  sort: (left: ListFile, right: ListFile) => number
}

const defaultOptions = (): Options => ({
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
    const opts = { ...defaultOptions(), ...userOpts }
    const pages = localeScopedFiles(cfg as GlobalConfig, fileData, allFiles as ListFile[])
      .filter((file) => Boolean(file.filePath) && !isLocaleHomeFile(file) && opts.filter(file))
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
            const dateText = date ? formatDate(date, currentLocaleTag(cfg as GlobalConfig, fileData)) : ""

            return (
              <li>
                <span class="date">{dateText}</span>
                <a href={resolveRelative(fileData.slug as FullSlug, page.slug as FullSlug)} class="internal">
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
  color: var(--blog-ink);
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
  color: var(--blog-faint);
  font-variant-numeric: tabular-nums;
  min-width: 11em;
}

.blog-article-list a.internal {
  background-color: transparent;
  color: var(--blog-ink);
  font-weight: 400;
  padding: 0;
  text-decoration: none;
}

.blog-article-list a:hover {
  color: var(--blog-accent);
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
