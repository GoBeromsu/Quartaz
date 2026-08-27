# Repository Guidelines

## Project Overview

Quartaz is a Quartz v5 fork for publishing the Ataraxia knowledge base. The repository contains the Quartz engine, site configuration, and reusable plugins under `plugins/`. `plugins/graph-landing` provides the full-screen 2D/3D knowledge-graph page used for locale home and graph routes.

## Architecture & Data Flow

- `plugins/graph-landing/src/index.ts` is the public package entry.
- `src/pageType.ts` matches graph/home frontmatter and creates the Quartz page-type instance.
- `src/components/GraphLanding.tsx` renders the server-side shell. Root `data-*` attributes are the build-time-to-browser configuration and localization contract.
- `src/scripts/graph-landing.inline.ts` runs after Quartz's `nav` event, reads `fetchData`, builds graph data, loads pinned browser renderers, binds forces/interactions, and registers cleanup through `window.addCleanup`.
- `src/scripts/graph-landing-pure.ts` contains deterministic, DOM-free graph types and algorithms. Put reusable calculations here so they remain directly testable.
- Runtime state is closure-local. UI state is mirrored through datasets/ARIA; lens/tuning use `sessionStorage`, while theme, locale, and audio preferences use `localStorage`.
- Graph construction uses stable `Map`/`Set` operations and deterministic tie-breaks. Real links influence degree; co-occurrence/folder links are visual texture only.

## Key Directories

- `quartz/`: Quartz engine, CLI, plugin loader, and core emitters.
- `plugins/graph-landing/`: reusable graph page-type package.
- `plugins/multilingual-content-index/`: multilingual content/RSS/sitemap emitter; keep it independent from graph rendering.
- `.github/workflows/`: repository CI and release lanes.
- `scripts/`: site/content operations. `scripts/watch-content.mjs` is destructive site synchronization (`rsync --delete`), not a release command.
- `content/` and `public*/`: source and generated site data; do not hand-edit generated output.

## Development Commands

From the repository root:

```bash
npm run check                    # TypeScript + Prettier checks
npm test                         # root Node test suite
npx quartz build                 # build the site
npm run install-plugins          # refresh configured plugin links/installations
```

For graph-landing, run commands from `plugins/graph-landing`:

```bash
npm test
npm run typecheck
npm run build
npm run dev                      # tsup watch mode
npm pack --dry-run
```

## Code Conventions & Common Patterns

- TypeScript ESM, double quotes, two-space indentation, trailing commas, and no semicolons; let Prettier decide formatting.
- Prefer type-only imports and explicit interfaces/return types at browser, Quartz, and untyped-library boundaries.
- Keep browser side effects out of `graph-landing-pure.ts`. Guard DOM values with `instanceof` and optional library methods with `typeof fn === "function"`.
- Register every listener, timer, animation frame, graph instance, and external player with `window.addCleanup`; asynchronous initialization also needs cancellation guards.
- Catch storage and optional-enhancement failures narrowly. Required contract failures should show a useful UI error and throw.
- Keep CDN versions pinned. All Three.js-related imports must share the same `THREE_VERSION`.
- When changing an option, update its type, JSX dataset, client parser, manifest schema, README, and tests together. Remove obsolete paths rather than retaining compatibility aliases.

## Important Files

- `package.json`: root runtime and repository scripts.
- `quartz.config.yaml`: enabled plugins and site integration.
- `quartz/plugins/loader/`: local/Git/npm plugin resolution and category loading.
- `plugins/graph-landing/package.json`: package exports, Quartz manifest, engines, and release scripts.
- `plugins/graph-landing/tsup.config.ts`: Node ESM package build plus embedded browser/SCSS bundling.
- `plugins/graph-landing/src/scripts/graph-landing.inline.test.ts`: co-located pure-helper tests.
- `plugins/graph-landing/README.md` and `CHANGELOG.md`: consumer contract and release history.

## Runtime/Tooling Preferences

- Node.js `>=22` and npm `>=10.9.2`; do not substitute Bun for package or release commands.
- The package is ESM-only and targets ES2022; its embedded browser script targets ES2020.
- `tsup` produces `dist/index.js`, `dist/index.js.map`, and `dist/index.d.ts`. `dist` is generated but publish-critical.
- Preact and Quartz singleton modules remain external; audit emitted imports before changing dependencies.

## Testing & QA

- Tests use `node:test` with `node:assert/strict`, executed through `tsx` for TypeScript.
- Add one behavior-focused `describe` per pure helper. Cover empty/invalid values, boundaries, deterministic ordering, graph invariants, cycles, and object identity where relevant.
- No coverage threshold is currently enforced; do not claim coverage guarantees.
- Before release, run `npm test`, `npm run typecheck`, `npm run build`, and inspect `npm pack --dry-run` output.
- For renderer changes, verify observable behavior in the live graph, both themes, near/far camera distances, reduced-motion behavior, and a constrained viewport. Do not suppress warnings or replace browser QA with snapshot-only assertions.
