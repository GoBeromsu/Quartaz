import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"
import { classNames } from "../../quartz/util/lang"
import { FullSlug, resolveRelative } from "../../quartz/util/path"
import { isTranslationMetadata, type TranslationMetadata } from "../../quartz/util/multilingual"

function siblingTranslations(
  allFiles: QuartzComponentProps["allFiles"],
  current: TranslationMetadata,
): Map<string, QuartzComponentProps["fileData"]> {
  const siblings = new Map<string, QuartzComponentProps["fileData"]>()

  for (const file of allFiles) {
    if (
      isTranslationMetadata(file.multilingual) &&
      file.multilingual.translationKey === current.translationKey
    ) {
      siblings.set(file.multilingual.locale, file)
    }
  }

  return siblings
}

export default (() => {
  const BlogLanguageSwitcher: QuartzComponent = ({
    cfg,
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    if (!cfg.multilingual?.enabled || !isTranslationMetadata(fileData.multilingual)) {
      return null
    }

    const currentMetadata = fileData.multilingual
    const siblings = siblingTranslations(allFiles, currentMetadata)

    return (
      <nav
        class={classNames(displayClass, "blog-language-switcher")}
        aria-label="Article translations"
      >
        {cfg.multilingual.locales.map((locale) => {
          const sibling = siblings.get(locale.id)

          if (!sibling?.slug) {
            return (
              <span class="blog-language-switcher-disabled" aria-disabled="true">
                {locale.nativeName}
              </span>
            )
          }

          return (
            <a
              href={resolveRelative(fileData.slug as FullSlug, sibling.slug as FullSlug)}
              lang={locale.locale}
              aria-current={locale.id === currentMetadata.locale ? "page" : undefined}
            >
              {locale.nativeName}
            </a>
          )
        })}
      </nav>
    )
  }

  BlogLanguageSwitcher.css = `
.blog-language-switcher {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.blog-language-switcher a,
.blog-language-switcher-disabled {
  color: var(--blog-muted);
  font-size: 0.9rem;
  line-height: 1.2;
  text-decoration: none;
}

.blog-language-switcher a[aria-current="page"] {
  color: var(--blog-ink);
  font-weight: 600;
}

.blog-language-switcher a:hover {
  color: var(--blog-accent);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.blog-language-switcher-disabled {
  opacity: 0.45;
}

@media (max-width: 640px) {
  .blog-language-switcher {
    flex-basis: 100%;
    order: 5;
  }
}
`

  return BlogLanguageSwitcher
}) satisfies QuartzComponentConstructor<undefined>
