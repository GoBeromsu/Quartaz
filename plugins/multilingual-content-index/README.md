# multilingual-content-index

Content index emitter for Quartz sites. Always writes
`static/contentIndex.json` (the search/preview data source), and optionally
writes `static/sitemap.xml` and an RSS feed. All options are optional and
default to the plugin's original behavior — setting none of them reproduces
the exact output of a plugin instance with no `options` block at all.

## Install

This plugin is `private` and not published as a standalone repo — it lives
in this monorepo and is referenced by local path:

```yaml
- source: ./plugins/multilingual-content-index
  enabled: true
  options:
    enableSiteMap: true
    enableRSS: true
    rssLimit: 10
    rssFullHtml: false
    rssSlug: index
    includeEmptyFiles: true
    rssRecentNotesText: Recent notes
    contentMaxChars: 20000
```

## Options

### `enableSiteMap`

Emit `static/sitemap.xml`.

- Default: `true`.

### `enableRSS`

Emit an RSS feed at `static/<rssSlug>.xml`.

- Default: `true`.

### `rssLimit`

Maximum number of entries included in the RSS feed. `undefined` includes
every eligible entry.

- Default: `10`.

### `rssFullHtml`

Include each note's full rendered HTML in its RSS `<description>` instead of
just a summary/excerpt.

- Default: `false`.

### `rssSlug`

Filename (without extension) used for the emitted RSS feed, e.g. `index`
emits `static/index.xml`.

- Default: `"index"`.

### `includeEmptyFiles`

Include notes with no body content in the index/sitemap/RSS output. Notes
marked `unlisted: true` in frontmatter are always excluded regardless of
this setting.

- Default: `true`.

### `rssRecentNotesText`

Title text used for the RSS feed itself (e.g. `<title>`).

- Default: `"Recent notes"`.

### `rssLastFewNotesText`

Function `(count: number) => string` used to generate the RSS feed's
description/subtitle text from the number of included entries (e.g. `(n) =>
\`Last ${n} notes\``). This is a function value, so it can only be set from a
`quartz.config.ts`/`quartz.config.js`-style plugin instantiation, not from a
plain YAML options block.

- Default: `(count) => \`Last ${count} notes\``.

### `contentMaxChars`

Caps the number of characters of a note's rendered content stored in
`content.content` in `static/contentIndex.json`.

- Default: `undefined` — no cap, full content stored (original behavior).
- Caution: `content.content` is also what client-side search
  (FlexSearch-based) indexes against. Any text past the cap becomes
  unsearchable, so set this only as a deliberate payload-size/perf
  trade-off, not casually.

## Output: `static/contentIndex.json`

A map from slug to per-note details:

```ts
{
  slug: string
  filePath: string
  title: string
  links: string[] // outgoing wikilink slugs
  tags: string[]
  externalLinks: string[]
  content: string // rendered content, capped by contentMaxChars
  richContent?: string // present only when rssFullHtml is true
  multilingual?: {
    translationKey: string
    locale: string
    sourceLocale: string
    translationStatus: string
    permalink: string
    localizedPath: string
    canonicalUrl: string
  }
}
```

Note: although the underlying type also declares `date` and `description`
fields, both are stripped before the file is written — they never actually
appear in the emitted JSON.
