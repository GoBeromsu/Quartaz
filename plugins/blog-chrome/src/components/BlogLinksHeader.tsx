import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { classNames } from "@quartz-community/utils/lang"
import { localizeInternalHref, type GlobalConfig } from "../locale"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const BlogLinksHeader: QuartzComponent = ({
    cfg,
    fileData,
    displayClass,
  }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <nav class={classNames(displayClass, "blog-links-header")}>
        {Object.entries(links).map(([label, href]) => (
          <a href={localizeInternalHref(cfg as GlobalConfig, fileData, href)}>{label}</a>
        ))}
      </nav>
    )
  }

  BlogLinksHeader.css = `
.blog-links-header {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}

.blog-links-header a {
  color: var(--blog-ink);
  font-weight: 400;
  text-decoration: none;
}

.blog-links-header a:hover {
  color: var(--blog-accent);
}

@media (max-width: 430px) {
  .blog-links-header {
    gap: 0.85rem;
  }
}
`

  return BlogLinksHeader
}) satisfies QuartzComponentConstructor<Options | undefined>
