<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# quartz/util

## Purpose
Shared utilities used throughout Quartz: path manipulation, theme configuration, logging, performance metrics, file globbing, JSX helpers, and emoji mapping.

## Key Files
| File | Description |
|------|-------------|
| `path.ts` | FilePath type, path normalization, slug generation (with tests) |
| `ctx.ts` | BuildCtx and Argv type definitions |
| `log.ts` | QuartzLogger for console output and progress indication |
| `trace.ts` | Error tracing and crash reporting |
| `theme.ts` | Theme configuration and color palette management |
| `glob.ts` | File globbing using globby |
| `perf.ts` | PerfTimer for build performance measurement |
| `og.tsx` | Open Graph image generation |
| `jsx.tsx` | JSX helpers and utilities |
| `resources.tsx` | Static resources bundling |
| `emojimap.json` | Emoji mapping data (15MB) |
| `emoji.ts` | Emoji replacement logic |
| `escape.ts` | HTML escaping utilities |
| `lang.ts` | Language/locale utilities |
| `clone.ts` | Deep cloning utilities |
| `random.ts` | Random ID generation |

## Subdirectories
None.

## For AI Agents

### Working In This Directory
- **FilePath**: branded string type for type safety; use joinSegments() for concatenation
- **BuildCtx**: immutable during build; shared to all plugins
- **Logging**: use QuartzLogger for consistent output formatting
- **Globbing**: use glob() with ignorePatterns from config
- **Theming**: resolved at build time from configuration
- **Performance**: track events with PerfTimer for build profiling

### Testing Requirements
- Unit tests for path utilities (path.test.ts, fileTrie.test.ts)
- Test slug generation edge cases (special chars, unicode, case)
- Verify logger output with mocked console
- Test theme merging and fallbacks
- Glob with .gitignore patterns

### Common Patterns
- **FilePath safety**: all file paths typed as FilePath, use type assertions only when necessary
- **Path operations**: joinSegments() for safe concatenation, toPosixPath() for normalization
- **Context passing**: BuildCtx contains argv, cfg, allFiles, allSlugs, buildId
- **Error handling**: trace() for fatal errors with full stack capture
- **Performance timing**: perf.addEvent("name"), perf.timeSince("name")

## Dependencies

### Internal
- (none—utilities only)

### External
- `globby` - file globbing
- `github-slugger` - GitHub-style slug generation
- `is-absolute-url` - URL validation
- Node.js `path`, `fs`, `crypto` builtins

<!-- MANUAL: -->
