---
aliases: []
date_created: 2026-03-04
date_modified: 2026-11-25
permalink: gemini-cli-npm-start-silent-exit
tags:
  - nodejs
  - troubleshooting
title: "Gemini CLI 개발 중 겪은 npm start Silent Exit 해결"
---

## Why `npm start` Silently Dies: A Node.js Version Mismatch Horror Story (and the Bug It Revealed)

I spent hours reading Gemini CLI source code to debug a silent exit bug. The fix was three commands. But along the way, I found a real bug in the code that made the silence worse than it needed to be — and submitted a fix.

## The Symptom

I cloned Google's Gemini CLI repository, ran `npm install`, `npm run build`, and then `npm start`. The output:

```text
Build is up-to-date.
```

Then nothing. No error message. No stack trace. The process just quit. The release binary (`gemini`) worked fine — OAuth login, interactive mode, everything. But the dev build died silently every time.

I tried every environment variable combination I could find: `GEMINI_CLI_NO_RELAUNCH=true`, `GEMINI_SANDBOX=false`. Same result. Silent death.

## The Rabbit Hole

I didn't even know what `npm start` was supposed to do in this project. I assumed it would launch the CLI interactively — and it should have. When it didn't, I searched the repository's GitHub issues and found two candidates:

- **#14943**: OAuth silent exit — the CLI exits silently when authentication fails in certain conditions
- **#13924**: TTY loss — the CLI loses terminal context and exits

Both matched my symptom: "process exits without error." I spent hours tracing code paths through the sandbox module, the authentication flow, and the relaunch mechanism. I read `scripts/start.js`, followed the child process spawning logic, and mapped out how the CLI bootstraps itself.

None of it explained the problem. Every code path I traced had proper error handling. The logic was sound.

The problem was never in the code.

## The Misconception: "Rebuild Equals Clean Slate"

Here is the part I find hardest to admit. When I suspected a build issue, I did run `npm run build` again. I even switched Node versions with `nvm use 20.19.0` in a new shell. It still failed.

Why? Because `npm run build` only recompiles TypeScript and JavaScript. It does not touch native addons.

I had originally run `npm install` with Node 22 (v22.16.0). Native addons — compiled C/C++ bindings in `node_modules` — were built against Node 22's ABI. When I switched to Node 20 in a new shell and ran `npm run build`, those binary artifacts stayed exactly where they were. The JavaScript was fresh, but the native code was still linked against the wrong Node version.

This was my core misconception: **I treated `npm run build` as a full rebuild. It is not.** It is a partial rebuild. Native addons survive across builds unless you explicitly purge `node_modules`.

## The Exit Code That Told the Whole Story

The turning point came when I stopped running `npm start` and ran the CLI entry point directly:

```bash
DEV=true node packages/cli; echo "EXIT CODE: $?"
```

The output:

```text
EXIT CODE: 139
```

Exit code 139. That is 128 + 11. Signal 11 is SIGSEGV — a segmentation fault. The process was not exiting gracefully. It was crashing.

This single number changed everything. Exit codes 0, 1, 41, 42 indicate normal control flow in Gemini CLI. Exit code 139 means the binary crashed at the operating system level. That immediately ruled out every code-level bug I had been investigating.

## How Process Signals Propagate (And Why I Didn't Know)

To understand why this was silent, you need to understand how Node.js parent and child processes communicate exit status. This is the knowledge I was missing entirely.

When you use `child_process.spawn()` to launch a subprocess, the parent receives a `close` event with two arguments: `(code, signal)`. These two are **mutually exclusive**. If the child exits normally, `code` is the exit code and `signal` is null. If the child is killed by a signal, `code` is null and `signal` is the signal name (e.g., `'SIGSEGV'`).

On Unix systems, when a process dies from a signal, the shell reports the exit code as **128 + signal number**. SIGSEGV is signal 11, so the exit code becomes 139. SIGKILL is signal 9, so you get 137. This is not a Node.js convention — it is a POSIX convention that every Unix developer encounters eventually.

The critical design choice is what the **parent process does** with this information. It has three options:

1. **Interpret it**: detect signal-based exits and print a diagnostic message
2. **Forward it silently**: call `process.exit(code)` and pass the number through
3. **Ignore it**: swallow the exit code entirely

Gemini CLI's `scripts/start.js` had this close handler:

```js
child.on('close', (code) => {
  process.exit(code);
});
```

This looks like option 2 — forwarding the exit code. But because of the mutual exclusivity of `code` and `signal`, it is actually worse. When the child is killed by a signal, `code` is `null`. And `process.exit(null)` in Node.js is equivalent to `process.exit(0)` — **success**.

The handler was not forwarding the crash. It was **erasing** it.

## The Fix: Three Commands

The CONTRIBUTING.md file specified Node `~20.19.0` as the required version. I had read it, noted it, and thought I had followed it. But "following it" means more than switching `nvm` — it means rebuilding everything from scratch with the correct version active.

```bash
nvm use 20.19.0
npm run clean && npm install && npm run build
npm start  # works
```

That was it. Clean rebuild with the correct Node version. The segfault disappeared because native addons were now compiled against the Node ABI they were actually running on.

## The Bug in the Wrapper

My problem was solved. But the process model knowledge I gained during those hours of debugging revealed something: `scripts/start.js` had a real bug.

Remember the close handler:

```js
child.on('close', (code) => {
  process.exit(code);
});
```

There are two problems here:

**Problem 1: Signal death becomes success.** When the child process is killed by a signal (SIGSEGV, SIGTERM, SIGKILL, etc.), the `close` event delivers `(null, 'SIGSEGV')`. The handler only captures `code`, which is `null`. `process.exit(null)` coerces to `process.exit(0)`. The parent exits with code 0 — "success" — even though the child just segfaulted.

**Problem 2: No diagnostic output.** Even if the exit code were forwarded correctly, there is no message. A developer running `npm start` during development has no way to know that the child was killed by a signal unless they manually inspect the exit code. This is exactly what happened to me — I had to bypass `scripts/start.js` entirely to discover the SIGSEGV.

The fix needed to handle both: detect signal-based deaths and exit with the correct code.

```js
import { constants } from 'node:os';

child.on('close', (code, signal) => {
  if (signal) {
    console.error(`\nGemini CLI was terminated by signal: ${signal}`);
    const signalNumber = constants.signals[signal];
    process.exit(signalNumber ? 128 + signalNumber : 1);
  }
  process.exit(code ?? 1);
});
```

Three changes from the original:

1. **Capture the `signal` parameter.** The close event always provides it — the original handler just ignored it.
2. **Signal branch.** If `signal` is truthy, print a diagnostic message and exit with `128 + signal number`, following the POSIX convention. `os.constants.signals` maps signal names to their numbers (`'SIGSEGV'` → 11), so the exit code becomes 139 — exactly what a Unix developer would expect.
3. **Null guard on `code`.** `code ?? 1` ensures that a null exit code (which should not happen if the signal branch catches it, but defensive programming) falls back to error, not success.

One subtlety worth noting: I initially considered using `process.kill(process.pid, signal)` to re-raise the signal on the parent process. This is what shells like Bash do — they kill themselves with the same signal so their parent sees the correct signal death. But in a Node.js wrapper script that writes to stderr immediately before, this is risky. `process.kill` terminates the process before pending I/O operations (like `console.error`) can flush. `process.exit(128 + N)` achieves the same exit code semantics while guaranteeing the diagnostic message is delivered.

I submitted this as [PR #21087](https://github.com/google-gemini/gemini-cli/pull/21087) with [issue #21086](https://github.com/google-gemini/gemini-cli/issues/21086).

## What I Learned

**CONTRIBUTING.md is a structural safeguard, not a suggestion.** I skimmed it, noted the Node version requirement, and assumed I was close enough. "Close enough" does not exist with native addons. The version specified in CONTRIBUTING.md exists precisely because someone already hit this exact problem. I ignored the safeguard and paid the price in hours.

**Procedural debugging beats exploratory debugging.** I jumped into code reading because the symptom (silent exit) felt like a code bug. If I had followed a systematic procedure — capture exit code first, classify the failure, then investigate — I would have reached the answer in minutes. The exit code was always there. I just never asked for it.

**"Build" and "clean build" are fundamentally different operations.** In a project with native addons, `npm run build` recompiles JavaScript. `npm run clean && npm install && npm run build` recompiles everything, including platform-specific binaries. After any Node version change, only the second option is safe.

**Know your process model.** I realized I had never deeply worked with Node.js `child_process` module. I didn't know the `close` event signature, the 128+N exit code convention, or the fact that `code` and `signal` are mutually exclusive in the `close` callback. These are Unix fundamentals, not Node.js trivia. Without this knowledge, even seeing exit code 139 would not have told me much — and I would never have recognized the bug in `start.js`.

**Debugging failures can produce something valuable.** I spent hours going down the wrong path. But the knowledge I built during those hours — about process signals, exit codes, and parent-child process communication — let me see a bug that had been sitting in plain sight. The wasted time was not actually wasted.

## A Debugging Checklist for Silent Exits

For anyone who encounters a silent exit in a Node.js CLI tool:

1. **Capture the exit code.** Run the entry point directly with `; echo "EXIT CODE: $?"` appended. Do this before reading any source code.
2. **Classify the exit code.** 0 = success. 1 = generic error. 2 = misuse. 128+N = killed by signal N. 139 (128+11) = SIGSEGV. 137 (128+9) = SIGKILL.
3. **If the exit code is above 128, stop reading code.** This is a crash, not a logic error. Check the environment: Node version, native addon compatibility, memory limits, binary architecture (arm64 vs x86_64).
4. **Verify CONTRIBUTING.md requirements.** Match the exact Node version. Use `nvm` or `volta` to pin it. Do a clean install — not a rebuild.
5. **Compare working vs. broken.** If the release binary works but the dev build does not, the difference is the build environment. Diff the environments, not the code.

The next time `npm start` gives you nothing, ask for the exit code first. The silence has a number, and that number tells you where to look.
