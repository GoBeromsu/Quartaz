<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# quartz/processors

## Purpose
The three-stage build pipeline that transforms markdown into published HTML. **Parse** converts markdown to AST, **Filter** decides what to publish, **Emit** generates output files. This is the core of the Quartz build system.

## Key Files
| File | Description |
|------|-------------|
| `parse.ts` | Markdown → AST transformation using unified/remark/rehype; parallel parsing via workerpool |
| `filter.ts` | Filter content based on plugin rules (e.g., draft status) |
| `emit.ts` | Generate output files via emitter plugins |

## Subdirectories
None.

## For AI Agents

### Working In This Directory
- **Parse**: reads markdown files, applies transformers, outputs ProcessedContent (AST + VFile)
- **Filter**: removes content based on filter plugins; logs filtered items if verbose
- **Emit**: calls emitter plugins sequentially or in parallel; supports partial emit for incremental builds
- All three stages receive BuildCtx with configuration and file metadata
- Processors run in order: parse → filter → emit

### Testing Requirements
- Test parse with various markdown syntax (frontmatter, code blocks, links, etc.)
- Verify filter removes/keeps content based on plugin rules
- Test emit generates expected file structure and content
- Integration test: full pipeline with sample markdown
- Test with verbose flag enabled/disabled
- Performance test: measure parse time with large file sets

### Common Patterns
- **ProcessedContent**: tuple of [MDRoot AST, VFile with metadata]
- **Parallel parsing**: workerpool distributes files across CPU cores
- **Plugin execution**: transformers applied in order, filters independent, emitters may be parallel
- **Incremental builds**: track file changes, re-parse only changed, use partialEmit when available
- **Error handling**: trace() for fatal errors, continue on plugin errors if configured

## Dependencies

### Internal
- `../plugins/` - transformers, filters, emitters
- `../util/` - paths, logging, performance, context
- `../components/` - used by emitters for rendering

### External
- `unified`, `remark-parse`, `remark-rehype` - markdown processing
- `workerpool` - parallel worker threads
- `vfile` - virtual file system
- Transformer/filter/emitter plugins loaded from config

<!-- MANUAL: -->
