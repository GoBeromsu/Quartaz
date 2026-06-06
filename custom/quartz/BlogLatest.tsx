import { GlobalConfiguration } from "../../quartz/cfg"
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"
import { getDate, formatDate } from "../../quartz/components/Date"
import { byDateAndAlphabetical } from "../../quartz/components/PageList"
import { classNames } from "../../quartz/util/lang"
import { resolveRelative } from "../../quartz/util/path"

interface Options {
  title: string
  limit: number
}

const defaultOptions = (_cfg: GlobalConfiguration): Options => ({
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
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles
      .filter((file) => Boolean(file.filePath) && file.slug !== "index")
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
