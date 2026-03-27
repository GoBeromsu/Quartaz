<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# quartz

## Purpose
Quartz v4.5.2 SSG framework — transforms markdown content into a static HTML website. Uses a multi-stage build pipeline (parse → process HTML → filter → emit) with worker threads for parallel processing and chokidar + Mutex for incremental rebuilds.

## Key Files

| File | Description |
|------|-------------|
| `build.ts` | Main build orchestrator — initial build, file watching, incremental rebuilds with `Mutex` coordination. Defines `BuildData`, `ContentMap`, and the `buildQuartz()` entry point |
| `cfg.ts` | Configuration types — `GlobalConfiguration`, `QuartzConfig`, `Analytics` (supports plausible, google, umami, goatcounter, posthog, tinylytics, cabin, clarity, matomo) |
| `worker.ts` | Worker thread functions — `parseMarkdown()` (file → MD AST) and `processHtml()` (MD AST → HTML). Called via workerpool, not directly |
| `bootstrap-cli.mjs` | CLI entry point (executable) |
| `bootstrap-worker.mjs` | Worker bootstrapping logic |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `cli/` | CLI argument parsing and command handlers (see `cli/AGENTS.md`) |
| `components/` | Preact UI components (30+ files) for page rendering (see `components/AGENTS.md`) |
| `plugins/` | Plugin system: transformers, filters, emitters (see `plugins/AGENTS.md`) |
| `processors/` | Build pipeline stages: parse, filter, emit (see `processors/AGENTS.md`) |
| `util/` | Shared utilities: paths, themes, logging, tracing, glob (see `util/AGENTS.md`) |
| `i18n/` | Internationalization — `index.ts` config + `locales/` with 33+ language files |
| `styles/` | SCSS stylesheets — `base.scss`, `callouts.scss`, `custom.scss`, `syntax.scss`, `variables.scss` |
| `static/` | Static assets — `icon.png`, `og-image.png`, `giscus/` comment widget |

## For AI Agents

### Working In This Directory
- Build pipeline: `parseMarkdown` (files → MD AST via workers) → `processHtml` (MD AST → HTML via workers) → `filterContent` → `emitContent`
- `BuildCtx` carries `buildId`, `argv`, `cfg`, `allSlugs` — shared across all pipeline stages
- `ContentMap` tracks each file as `markdown` (with `ProcessedContent`) or `other`
- Config loads from `../quartz.config.ts` — plugins, theme, analytics, locale
- Incremental rebuilds: `changesSinceLastBuild` tracks file changes, `Mutex` prevents concurrent builds

### Testing Requirements
- `tsx --test` runs unit tests (see `package.json` scripts)
- Verify full pipeline: changed markdown → correct HTML output
- Component rendering: Preact → HTML string comparison
- Plugin testing: mock `BuildCtx`, verify transform/filter/emit behavior

### Common Patterns
- **ProcessedContent**: `[MDXContent, VFile]` tuple from parse step
- **Plugin factories**: `() => QuartzTransformerPlugin | QuartzFilterPlugin | QuartzEmitterPlugin`
- **Static resources**: collected via `getStaticResourcesFromPlugins()` for CSS/JS injection
- **Slugs**: all paths normalized through `slugifyFilePath()` from `util/path`
- **Error handling**: `trace()` for fatal errors with stack traces, `log()` for warnings

## Dependencies

### Internal
- `../quartz.config.ts` — user configuration
- `./processors/` — parse, filter, emit pipeline
- `./plugins/` — content transformation and output
- `./components/` — UI rendering
- `./util/` — paths, logging, tracing, context

### External
- `chokidar` — file watching for incremental builds
- `async-mutex` — `Mutex` for concurrent build prevention
- `workerpool` — parallel worker threads for markdown parsing
- `unified`, `remark-*`, `rehype-*` — markdown/HTML AST processing
- `preact`, `preact-render-to-string` — UI component rendering
- `esbuild` — code bundling and minification
- `globby` — file glob matching with gitignore support
- `yargs` — CLI argument parsing
- `minimatch` — glob pattern matching for change detection

<!-- MANUAL: -->
