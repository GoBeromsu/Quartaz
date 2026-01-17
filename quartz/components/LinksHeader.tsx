import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const LinksHeader: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <nav class={classNames(displayClass, "links-header")}>
        {Object.entries(links).map(([text, link]) => (
          <a href={link}>{text}</a>
        ))}
      </nav>
    )
  }

  LinksHeader.css = `
.links-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.links-header a {
  color: var(--darkgray);
  font-weight: 400;
  text-decoration: none;
}

.links-header a:hover {
  color: var(--dark);
}
`

  return LinksHeader
}) satisfies QuartzComponentConstructor
