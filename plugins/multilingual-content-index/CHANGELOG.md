# Changelog

All notable changes to this plugin are documented here.

## Unreleased

### Added

- `README.md`, `CHANGELOG.md`, and an MIT `LICENSE` file, documenting the
  full option reference and the `contentIndex.json`/`graphIndex.json`
  output shapes. This plugin stays `private: true` and unpublished — it is
  consumed by local path (`./plugins/multilingual-content-index`) from
  within this monorepo, not installed from a separate GitHub repo; only
  `graph-landing` is being published standalone. `keywords`/`license` are
  kept for consistency even though the package isn't published.

## 0.1.0

Initial local version: `enableSiteMap`, `enableRSS`, `rssLimit`,
`rssFullHtml`, `rssSlug`, `includeEmptyFiles`, `rssRecentNotesText`,
`rssLastFewNotesText`, `contentMaxChars`, and `emitGraphIndex` options, with
multilingual sitemap/RSS/hreflang support.
