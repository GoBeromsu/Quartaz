<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# quartz/plugins

## Purpose
The plugin system for Quartz. Three types of plugins handle the entire transformation pipeline: **Transformers** modify markdown/HTML (14 files), **Filters** decide what content to publish (3 files), and **Emitters** generate output files (14 files). Plugins are loaded in `cfg` and executed in defined order during build.

## Key Files
| File | Description |
|------|-------------|
| `types.ts` | Plugin interfaces: QuartzTransformerPlugin, QuartzFilterPlugin, QuartzEmitterPlugin |
| `vfile.ts` | VFile extension with Quartz-specific metadata |
| `index.ts` | Plugin registry and loader |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `transformers/` | Markdown and HTML transformations (14 files) (see `transformers/AGENTS.md`) |
| `filters/` | Content filtering and publishing logic (3 files) (see `filters/AGENTS.md`) |
| `emitters/` | Output generation: HTML pages, indices, feeds (14 files) (see `emitters/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Plugins are configured in `../quartz.config.ts` in order of execution
- Plugin factory functions return instances with name and one or more operations
- **Transformers**: operate on Markdown AST or HTML AST via unified plugins
- **Filters**: examine ProcessedContent and return true/false for publish decision
- **Emitters**: receive all ProcessedContent and static resources, write files
- Context (BuildCtx) passed to all plugins for access to config, args, and metadata

### Testing Requirements
- Unit test plugins with mock BuildCtx and sample ProcessedContent
- Transformers: test with various markdown inputs, verify AST output
- Filters: test edge cases (draft=true, explicit=true, etc.)
- Emitters: test file output paths and content structure
- Plugin load order matters—test plugin interactions

### Common Patterns
- **Plugin factory**: `(options?: T) => PluginInstance`
- **Transformers**: markdownPlugins() and/or htmlPlugins() return unified plugins
- **Filters**: shouldPublish(ctx, content) returns boolean
- **Emitters**: emit(ctx, content, resources) returns async iterator or array
- **Partial emit**: partialEmit(ctx, content, resources, changeEvents) for incremental builds

## Dependencies

### Internal
- `./transformers/` - markdown/HTML processing
- `./filters/` - content filtering
- `./emitters/` - file generation
- `../util/` - shared utilities
- `../components/` - component rendering (used by emitters)

### External
- `unified`, `remark-*`, `rehype-*` - AST processing
- `vfile` - virtual file system
- `hast` - HTML AST types
- Custom plugins like rehype-citation, rehype-katex, shiki

<!-- MANUAL: -->
