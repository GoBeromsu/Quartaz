import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"
import { classNames } from "../../quartz/util/lang"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const BlogLinksHeader: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <nav class={classNames(displayClass, "blog-links-header")}>
        {Object.entries(links).map(([label, href]) => (
          <a href={href}>{label}</a>
        ))}
      </nav>
    )
  }

  BlogLinksHeader.css = `
.blog-links-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.blog-links-header a {
  color: var(--darkgray);
  font-weight: 400;
  text-decoration: none;
}

.blog-links-header a:hover {
  color: var(--dark);
}
`

  return BlogLinksHeader
}) satisfies QuartzComponentConstructor<Options | undefined>
