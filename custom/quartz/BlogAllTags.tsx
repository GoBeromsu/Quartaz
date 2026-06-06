import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"
import { classNames } from "../../quartz/util/lang"
import { FullSlug, resolveRelative } from "../../quartz/util/path"

interface Options {
  title: string
}

const defaultOptions: Options = {
  title: "Topics",
}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const BlogAllTags: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const allTags = [
      ...new Set(
        allFiles.flatMap((file) => {
          const tags = file.frontmatter?.tags
          return Array.isArray(tags) ? tags.map((tag) => String(tag)) : []
        }),
      ),
    ].sort((left, right) => left.localeCompare(right))

    if (allTags.length === 0) {
      return null
    }

    return (
      <section class={classNames(displayClass, "blog-all-tags")}>
        <h3>{opts.title}</h3>
        <div class="blog-all-tags-list">
          {allTags.map((tag) => (
            <a
              href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
              class="internal tag-link"
            >
              #{tag}
            </a>
          ))}
        </div>
      </section>
    )
  }

  BlogAllTags.css = `
.blog-all-tags {
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 2rem;
}

.blog-all-tags h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
}

.blog-all-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.blog-all-tags a.internal.tag-link {
  background-color: transparent;
  color: var(--secondary);
  padding: 0;
  text-decoration: none;
}

.blog-all-tags a.internal.tag-link::before {
  content: none;
}

.blog-all-tags a.internal.tag-link:hover {
  color: var(--text-accent-hover);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}
`

  return BlogAllTags
}) satisfies QuartzComponentConstructor<Partial<Options> | undefined>
