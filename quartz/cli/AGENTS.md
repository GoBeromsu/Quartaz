<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# quartz/cli

## Purpose
CLI (Command-Line Interface) for Quartz. Handles argument parsing, command routing, and execution. Provides build, serve, create, and sync commands for site generation and maintenance.

## Key Files
| File | Description |
|------|-------------|
| `args.js` | Yargs argument definitions: CommonArgv, CreateArgv, SyncArgv, BuildArgv |
| `handlers.js` | Command handlers (~19KB): build, create, sync, publish logic |
| `constants.js` | CLI constants and configuration defaults |
| `helpers.js` | CLI helper utilities: prompts, validation, file operations |

## Subdirectories
None.

## For AI Agents

### Working In This Directory
- All CLI files are CommonJS (`*.js`), not TypeScript—entry point is `bootstrap-cli.mjs`
- Commands are synchronous (handlers may be async)
- Use yargs for argument parsing and validation
- Handlers receive parsed Argv and execute corresponding logic
- Error messages should be clear and actionable

### Testing Requirements
- Test each command with various argument combinations
- Verify error handling for invalid inputs
- Test file creation/symlink strategies
- Verify git operations (commit, push, pull)
- Test with missing required arguments

### Common Patterns
- **Argv types**: CommonArgv shared by all commands, specialized by CreateArgv, SyncArgv, BuildArgv
- **Handlers**: async functions receiving (Argv) and returning result
- **Error handling**: early validation with clear messages
- **Verbosity**: argv.verbose flag enables detailed logging

## Dependencies

### Internal
- `../build.ts` - build orchestration (called by handlers)
- `../util/` - utilities for logging, paths, etc.

### External
- `yargs` - CLI argument parsing and routing
- `@clack/prompts` - interactive prompts
- Node.js `fs`, `path`, `child_process`, `os` builtins

<!-- MANUAL: -->
