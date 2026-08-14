import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"
import { classNames } from "../../quartz/util/lang"
import { currentLocaleId, localizeInternalHref } from "./locale"

interface LocalizedLink {
  href: string
  labels: Record<string, string>
}

interface Options {
  links: Record<string, string | LocalizedLink>
}

export default ((opts?: Options) => {
  const BlogLinksHeader: QuartzComponent = ({
    cfg,
    fileData,
    displayClass,
  }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    const localeId = currentLocaleId(cfg, fileData)
    return (
      <nav class={classNames(displayClass, "blog-links-header")}>
        {Object.entries(links).map(([name, entry]) => {
          const href = typeof entry === "string" ? entry : entry.href
          const label =
            typeof entry === "string" ? name : ((localeId && entry.labels[localeId]) ?? name)
          return <a href={localizeInternalHref(cfg, fileData, href)}>{label}</a>
        })}
      </nav>
    )
  }

  BlogLinksHeader.css = `
.blog-links-header {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 1.25rem;
}

.blog-links-header a {
  align-items: center;
  color: var(--blog-ink);
  display: inline-flex;
  font-weight: 400;
  height: 44px;
  line-height: 1;
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
