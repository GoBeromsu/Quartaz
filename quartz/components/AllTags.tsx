import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  title: string
}

const defaultOptions: Options = {
  title: "Topics:",
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
      <div class={classNames(displayClass, "all-tags")}>
        <span class="label">{opts.title}</span>
        {allTags.map((tag, index) => {
          const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
              {index < allTags.length - 1 && ", "}
            </>
          )
        })}
      </div>
    )
  }

  AllTags.css = `
.all-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem;
  margin: 2rem 0 1rem;
}

.all-tags .label {
  color: var(--gray);
  margin-right: 0.5rem;
}

.all-tags a.internal.tag-link {
  color: var(--dark);
  text-decoration: none;
}

.all-tags a.internal.tag-link::before {
  content: none;
}

.all-tags a.internal.tag-link:hover {
  text-decoration: underline;
}
`

  return AllTags
}) satisfies QuartzComponentConstructor
