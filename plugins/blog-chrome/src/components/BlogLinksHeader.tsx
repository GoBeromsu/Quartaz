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
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
}

.blog-links-header a {
  align-items: center;
  color: var(--blog-ink);
  display: inline-flex;
  font-weight: 400;
  min-height: 44px;
  text-decoration: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.blog-links-header a:hover {
  color: var(--blog-accent);
}

.blog-links-header a:focus-visible {
  outline: 2px solid var(--blog-accent);
  outline-offset: 2px;
}

@media (max-width: 800px) {
  .blog-links-header {
    gap: 0.65rem;
  }

  .blog-links-header a {
    font-size: 12px;
    height: 40px;
    min-height: 40px;
  }
}

@media (max-width: 430px) {
  .blog-links-header {
    gap: 0.5rem;
  }
}
`

  return BlogLinksHeader
}) satisfies QuartzComponentConstructor<Options | undefined>
