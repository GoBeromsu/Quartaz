import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  title: string
}

const defaultOptions: Options = {
  title: "Topics",
}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const AllTags: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    // Collect all unique tags from all files
    const allTags = [
      ...new Set(allFiles.flatMap((file) => file.frontmatter?.tags ?? [])),
    ].sort((a, b) => a.localeCompare(b))

    if (allTags.length === 0) {
      return null
    }

    return (
      <section class={classNames(displayClass, "all-tags-section")}>
        <h3>{opts.title}</h3>
        <div class="all-tags-list">
          {allTags.map((tag) => {
            const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
            return (
              <a href={linkDest} class="internal tag-link">
                #{tag}
              </a>
            )
          })}
        </div>
      </section>
    )
  }

  AllTags.css = `
.all-tags-section {
  margin-bottom: 2rem;
}

.all-tags-section h3 {
  margin-bottom: 0.5rem;
}

.all-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.all-tags-section a.internal.tag-link {
  color: var(--secondary);
  text-decoration: none;
  background-color: transparent;
  padding: 0;
}

.all-tags-section a.internal.tag-link::before {
  content: none;
}

.all-tags-section a.internal.tag-link:hover {
  text-decoration: underline;
}
`

  return AllTags
}) satisfies QuartzComponentConstructor
