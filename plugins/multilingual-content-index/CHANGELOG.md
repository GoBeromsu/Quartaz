# Changelog

All notable changes to this plugin are documented here.

## Unreleased

### Added

- Package metadata for standalone publishing: `keywords`, `repository`,
  `homepage`, `bugs`, `author`, `license`, `LICENSE` file, expanded `files`.
- Completed the `quartz.configSchema` manifest field (previously named
  `optionSchema`, which the Quartz plugin loader never reads) with the
  full current option surface, including the previously-missing
  `rssRecentNotesText`.
- `README.md` — install instructions, full option reference, and the
  `contentIndex.json`/`graphIndex.json` output shapes.

## 0.1.0

Initial local version: `enableSiteMap`, `enableRSS`, `rssLimit`,
`rssFullHtml`, `rssSlug`, `includeEmptyFiles`, `rssRecentNotesText`,
`rssLastFewNotesText`, `contentMaxChars`, and `emitGraphIndex` options, with
multilingual sitemap/RSS/hreflang support.
