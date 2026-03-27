<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# scripts

## Purpose
Build and development helper scripts. Currently contains `watch-content.mjs` for monitoring content changes and triggering syncs.

## Key Files
| File | Description |
|------|-------------|
| `watch-content.mjs` | File watcher using chokidar; watches for changes and manages file operations |

## Subdirectories
None.

## For AI Agents

### Working In This Directory
- Scripts are written in ESM (`.mjs`) syntax, not CommonJS
- Use async/await for file operations
- Integrate with chokidar for efficient watching
- Exit gracefully on SIGINT (Ctrl+C)
- Log meaningful status messages to console

### Testing Requirements
- Test file watching with `npm run watch`
- Verify ignores `.git/`, node_modules, and other patterns
- Check that file changes trigger appropriate actions
- Confirm graceful shutdown on signal

### Common Patterns
- **Chokidar watcher**: persistent: true, awaitWriteFinish for stability
- **Callbacks**: on('add'), on('change'), on('unlink') events
- **Error handling**: catch and log errors without crashing

## Dependencies

### Internal
- (none currently)

### External
- `chokidar` - file watching library
- Node.js `fs`, `path`, `process` builtins

<!-- MANUAL: -->
