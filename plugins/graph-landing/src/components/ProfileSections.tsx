import type { GraphLandingProfileSection } from "../pageType"
import { nextHeroLanguage } from "../heroLanguage"
import { isExternalHref, profileImageAttrs, sectionIndexLabel, type ProfileBlock } from "../profile"

function linkProps(href: string) {
  return isExternalHref(href) ? { href, target: "_blank", rel: "noopener noreferrer" } : { href }
}

function Section({ section, index }: { section: GraphLandingProfileSection; index: number }) {
  const portrait = profileImageAttrs(section.image)
  const heading = (
    <>
      {section.kicker ? <p class="graph-landing__kicker">{section.kicker}</p> : null}
      {section.title ? <h2 class="graph-landing__section-title">{section.title}</h2> : null}
      {section.lede ? <p class="graph-landing__section-lede">{section.lede}</p> : null}
    </>
  )
  return (
    <section class="graph-landing__section" id={section.id}>
      <div class="graph-landing__panel" data-profile-reveal>
        <span class="graph-landing__section-index" aria-hidden="true">
          {sectionIndexLabel(index)}
        </span>
        {portrait ? (
          <div class="graph-landing__intro">
            <figure class="graph-landing__portrait">
              <img {...portrait} decoding="async" />
              {section.image?.caption ? <figcaption>{section.image.caption}</figcaption> : null}
            </figure>
            <div class="graph-landing__intro-text">{heading}</div>
          </div>
        ) : (
          heading
        )}
        {section.stats && section.stats.length > 0 ? (
          <dl class="graph-landing__stats">
            {section.stats.map((stat) => (
              <div class="graph-landing__stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
                {stat.note ? <p>{stat.note}</p> : null}
              </div>
            ))}
          </dl>
        ) : null}
        {section.timeline && section.timeline.length > 0 ? (
          <ol class="graph-landing__timeline">
            {section.timeline.map((item) => {
              const image = profileImageAttrs(item.image)
              return (
                <li class="graph-landing__timeline-item">
                  <p class="graph-landing__timeline-period">{item.period}</p>
                  <div class="graph-landing__timeline-body">
                    <h3>
                      {item.href ? <a {...linkProps(item.href)}>{item.title}</a> : item.title}
                    </h3>
                    {item.org ? <p class="graph-landing__timeline-org">{item.org}</p> : null}
                    {item.body ? <p>{item.body}</p> : null}
                    {image ? (
                      <figure class="graph-landing__timeline-figure">
                        <img {...image} loading="lazy" decoding="async" />
                        {item.image?.caption ? <figcaption>{item.image.caption}</figcaption> : null}
                      </figure>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ol>
        ) : null}
        {section.groups?.map((group) => (
          <div class="graph-landing__group">
            {group.label ? <p class="graph-landing__group-label">{group.label}</p> : null}
            <div class="graph-landing__cards">
              {group.cards.map((card) => {
                const body = (
                  <>
                    <h3>{card.title}</h3>
                    {card.body ? <p>{card.body}</p> : null}
                    {card.meta ? <p class="graph-landing__card-meta">{card.meta}</p> : null}
                  </>
                )
                return card.href ? (
                  <a class="graph-landing__card" {...linkProps(card.href)}>
                    {body}
                  </a>
                ) : (
                  <div class="graph-landing__card">{body}</div>
                )
              })}
            </div>
          </div>
        ))}
        {section.facts && section.facts.length > 0 ? (
          <dl class="graph-landing__facts">
            {section.facts.map((fact) => (
              <div>
                <dt>{fact.term}</dt>
                <dd>{fact.href ? <a {...linkProps(fact.href)}>{fact.detail}</a> : fact.detail}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {section.quote ? (
          <blockquote class="graph-landing__quote">
            <p>{section.quote.text}</p>
            {section.quote.cite ? <cite>{section.quote.cite}</cite> : null}
          </blockquote>
        ) : null}
        {section.quotes?.length ? (
          <div class="graph-landing__quotes">
            {section.quotes.map((quote) => (
              <blockquote class="graph-landing__quote">
                <p>{quote.text}</p>
                {quote.cite ? <cite>{quote.cite}</cite> : null}
              </blockquote>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function ProfileSections({
  blocks,
  siteTitle,
  homeHref,
  blogHref,
  navLabel,
  languageLabel,
  scrollLabel,
}: {
  blocks: ProfileBlock[]
  siteTitle: string
  homeHref: string
  /** Blog index; shown as the last top bar link when set. */
  blogHref?: string | null
  navLabel: string
  /** Accessible name of the language toggle (shown with two or more languages). */
  languageLabel: string
  scrollLabel: string
}) {
  if (blocks.length === 0) return null
  const languages = blocks.map((block) => block.lang)
  return (
    <>
      <a class="graph-landing__scroll-cue" href="#graph-landing-profile" data-profile-cue>
        {scrollLabel}
      </a>
      <main class="graph-landing__page" id="graph-landing-profile">
        {blocks.map(({ lang, copy, hidden }) => {
          const sections = copy.sections ?? []
          const navSections = sections.filter((section) => section.id && section.nav)
          const toggleLang = nextHeroLanguage(languages, lang)
          return (
            <div class="graph-landing__profile" data-hero-lang={lang} lang={lang} hidden={hidden}>
              <nav class="graph-landing__topbar" aria-label={navLabel}>
                <a class="graph-landing__topbar-title" href={homeHref} data-profile-top>
                  {siteTitle}
                </a>
                <div class="graph-landing__topbar-links">
                  {navSections.map((section) => (
                    <a href={`#${section.id}`}>{section.nav}</a>
                  ))}
                  {blogHref ? (
                    <a class="graph-landing__topbar-blog" href={blogHref}>
                      {lang === "ko" ? "블로그" : "Blog"}
                    </a>
                  ) : null}
                </div>
                {toggleLang ? (
                  <button
                    type="button"
                    class="graph-landing__topbar-lang"
                    data-hero-lang-toggle
                    lang={toggleLang}
                    aria-label={languageLabel}
                  >
                    {toggleLang.toUpperCase()}
                  </button>
                ) : null}
              </nav>
              {sections.map((section, index) => (
                <Section section={section} index={index} />
              ))}
              {copy.footer ? (
                <footer class="graph-landing__profile-footer">
                  {copy.footer.links && copy.footer.links.length > 0 ? (
                    <ul>
                      {copy.footer.links.map((link) => (
                        <li>
                          <a {...linkProps(link.href)}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {copy.footer.note ? <p>{copy.footer.note}</p> : null}
                </footer>
              ) : null}
            </div>
          )
        })}
      </main>
    </>
  )
}
