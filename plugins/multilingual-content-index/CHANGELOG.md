# Changelog

All notable changes to this plugin are documented here.

## Unreleased

### Added

- `README.md`, `CHANGELOG.md`, and an MIT `LICENSE` file, documenting the
  full option reference and the `contentIndex.json` output shape. This
  plugin stays `private: true` and unpublished — it is consumed by local
  path (`./plugins/multilingual-content-index`) from within this monorepo,
  not installed from a separate GitHub repo. `keywords`/`license` are kept
  for consistency even though the package isn't published.

### Changed

- `partialEmit` now keeps an in-memory path-keyed cache and recomputes only
  changed source entries plus virtual pages before rewriting the global
  sitemap, RSS, and content index artifacts.

## 0.1.0

Initial local version: `enableSiteMap`, `enableRSS`, `rssLimit`,
`rssFullHtml`, `rssSlug`, `includeEmptyFiles`, `rssRecentNotesText`,
`rssLastFewNotesText`, and `contentMaxChars` options, with multilingual
sitemap/RSS/hreflang support.
