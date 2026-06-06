# Ataraxia Quartz Visual Contract

## Brand

The Quartz site should feel like the public reading surface of the Ataraxia
Obsidian vault. The reference experience is Obsidian Minimal with the Ataraxia
accent, restrained chrome, readable long-form text, and quiet supporting UI.

Source anchors:

- Ataraxia appearance: Minimal theme, system light/dark, accent `#a52142`,
  base font size `16`.
- Minimal settings: line height `1.5`, readable line width `40`, wide width
  `50`, max width `88`, normal text `16`, small text `13`, full-width media,
  no internal or external link underline by default.
- Style Settings: large h1/h2 enabled, list indent `1.8`, list spacing
  `0.075`, normal callout blend, `callouts-outlined`.

## Visual Language

- Color uses Quartz-native theme tokens, anchored by Ataraxia accent `#a52142`.
- Typography uses a system-first sans stack close to Minimal:
  `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu,
sans-serif`.
- Code uses a system monospace stack:
  `ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace`.
- The public reading page is not card-heavy and does not use decorative
  gradients, orbs, marketing heroes, or Obsidian workspace chrome.

## Components

- Article body: `16px` text, `1.5` line height, `40rem` readable column.
- Wide elements: images, tables, code blocks, and Mermaid diagrams use
  `min(88vw, 50rem)` or a narrower equivalent that never creates page-level
  horizontal overflow.
- Callouts: outlined callouts with Minimal-like subtle background and visible
  border; not filled cards.
- Links: readable accent treatment, no default underline for internal or
  external links.
- Lists: Minimal-like rhythm with `1.8em` indentation and small vertical
  spacing.
- Blog chrome: header, search, dark mode, article lists, tags, and footer stay
  quiet and aligned with the reading column.

## Accessibility

- Preserve readable contrast in light and dark modes.
- Keep search and dark mode toggle keyboard/click accessible.
- Prevent mobile overlap and horizontal page overflow at `390x844`.
- Do not reduce text below the Ataraxia `16px` reading baseline.

## Responsive Behavior

- Desktop QA viewport: `1440x1000`.
- Mobile QA viewport: `390x844`.
- Reading width should resolve to about `40rem` on desktop and fluidly fit
  mobile screens.
- Wide media may exceed the reading column up to `min(88vw, 50rem)` while
  remaining scroll-safe.

## Implementation Constraints

- Prefer `quartz.config.yaml` for theme token mapping.
- Prefer `custom/quartz/BlogStyles.tsx` and existing custom Quartz components
  for repo-specific CSS.
- Do not copy the full Obsidian Minimal `theme.css`.
- Do not add styling dependencies.
- Do not modify analytics, Giscus, permalink behavior, deploy workflows,
  content sync behavior, or Markdown content for this visual task.
- Treat Supercharged Links and Obsidian Bases-only snippets as out of public
  Quartz scope unless published HTML exposes matching metadata/selectors.

## Open Questions

- The configured content sync source
  `../Ataraxia/40. Digital Garden/.deploy-staging` is currently missing. Visual
  work should use the current `content/` fixtures unless the deploy workflow
  prepares staging before release.
- Dark-mode accent should remain recognizably related to `#a52142` while
  meeting contrast on the Quartz background.
