import { ComponentChildren } from "preact"
import { htmlToJsx } from "../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { byDateAndAlphabetical } from "./PageList"
import { getDate } from "./Date"

/**
 * HomepageContent replaces the default Content component.
 * - On index page: renders Latest, Topics, Writing sections
 * - On other pages: renders the regular article content
 */
const HomepageContent: QuartzComponent = ({
  fileData,
  allFiles,
  tree,
  cfg,
}: QuartzComponentProps) => {
  const isHomepage = fileData.slug === "index"

  if (!isHomepage) {
    // Regular content for non-homepage
    const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
    const classes: string[] = fileData.frontmatter?.cssclasses ?? []
    const classString = ["popover-hint", ...classes].join(" ")
    return <article class={classString}>{content}</article>
  }

  // Homepage: render Latest, Topics, Writing
  const sortFn = byDateAndAlphabetical(cfg)
  const pages = allFiles.filter((f) => f.slug !== "index").sort(sortFn)

  // Collect all tags
  const allTags = [...new Set(allFiles.flatMap((file) => file.frontmatter?.tags ?? []))].sort(
    (a, b) => a.localeCompare(b),
  )

  // Latest: 1 most recent post
  const latestPage = pages[0]

  return (
    <div class="homepage-content">
      {/* Latest Section */}
      {latestPage && (
        <section class="homepage-section">
          <h3>Latest</h3>
          <ul class="article-list">
            <li>
              <span class="date">
                {(() => {
                  const date = getDate(cfg, latestPage)
                  return date
                    ? `${date.getFullYear()} · ${String(date.getMonth() + 1).padStart(2, "0")}`
                    : ""
                })()}
              </span>
              <a href={resolveRelative(fileData.slug!, latestPage.slug!)} class="internal">
                {latestPage.frontmatter?.title ?? "Untitled"}
              </a>
            </li>
          </ul>
        </section>
      )}

      {/* Topics Section */}
      {allTags.length > 0 && (
        <section class="homepage-section">
          <h3>Topics</h3>
          <div class="all-tags-list">
            {allTags.map((tag) => (
              <a href={resolveRelative(fileData.slug!, `tags/${tag}`)} class="internal tag-link">
                #{tag}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Writing Section */}
      {pages.length > 0 && (
        <section class="homepage-section">
          <h3>Writing</h3>
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
      )}
    </div>
  )
}

HomepageContent.css = `
.homepage-content {
  margin: 0;
}

.homepage-section {
  margin-bottom: 2rem;
}

.homepage-section h3 {
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

.article-list .date {
  color: var(--gray);
  font-variant-numeric: tabular-nums;
  min-width: 5.5em;
}

.article-list a.internal {
  text-decoration: none;
  background-color: transparent;
  padding: 0;
}

.article-list a:hover {
  text-decoration: underline;
}

.all-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.all-tags-list a.internal.tag-link {
  color: var(--secondary);
  text-decoration: none;
  background-color: transparent;
  padding: 0;
}

.all-tags-list a.internal.tag-link::before {
  content: none;
}

.all-tags-list a.internal.tag-link:hover {
  text-decoration: underline;
}
`

export default (() => HomepageContent) satisfies QuartzComponentConstructor
