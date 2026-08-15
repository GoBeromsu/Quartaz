import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { classNames } from "@quartz-community/utils/lang"
import { resolveRelative, type FullSlug } from "@quartz-community/utils/path"
import { byDateAndAlphabetical, formatDate, getDate } from "../dates"
import {
  currentLocaleTag,
  isLocaleHomeFile,
  localeScopedFiles,
  type GlobalConfig,
} from "../locale"

interface Options {
  title: string
  limit: number
}

const defaultOptions = (): Options => ({
  title: "Latest",
  limit: 3,
})

export default ((userOpts?: Partial<Options>) => {
  const BlogLatest: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(), ...userOpts }
    const pages = localeScopedFiles(cfg as GlobalConfig, fileData, allFiles)
      .filter((file) => Boolean(file.filePath) && !isLocaleHomeFile(file))
      .sort(byDateAndAlphabetical())
      .slice(0, opts.limit)

    if (pages.length === 0) {
      return null
    }

    return (
      <section class={classNames(displayClass, "blog-latest")}>
        <h3>{opts.title}</h3>
        <ul class="blog-article-list">
          {pages.map((page) => {
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

  BlogLatest.css = `
.blog-latest {
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 2rem;
}

.blog-latest h3 {
  color: var(--blog-ink);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
}
`

  return BlogLatest
}) satisfies QuartzComponentConstructor<Partial<Options> | undefined>
