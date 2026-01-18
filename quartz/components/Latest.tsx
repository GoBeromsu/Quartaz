import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { byDateAndAlphabetical } from "./PageList"
import { getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import { classNames } from "../util/lang"

interface Options {
  title: string
  limit: number
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  title: "Latest",
  limit: 3,
})

export default ((userOpts?: Partial<Options>) => {
  const Latest: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles
      .filter((f) => f.slug !== "index")
      .sort(byDateAndAlphabetical(cfg))
      .slice(0, opts.limit)

    if (pages.length === 0) {
      return null
    }

    return (
      <section class={classNames(displayClass, "latest-section")}>
        <h3>{opts.title}</h3>
        <ul class="article-list">
          {pages.map((page) => {
            const date = getDate(cfg, page)
            const dateStr = date
              ? `${date.getFullYear()} · ${String(date.getMonth() + 1).padStart(2, "0")}`
              : ""
            return (
              <li>
                <span class="date">{dateStr}</span>
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

  Latest.css = `
.latest-section {
  margin-bottom: 2rem;
}

.latest-section h3 {
  margin-bottom: 0.5rem;
}
`

  return Latest
}) satisfies QuartzComponentConstructor
