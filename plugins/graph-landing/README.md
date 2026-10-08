# graph-landing

Full-viewport knowledge-graph constellation with luminous stars, degree-weighted
hub attraction, and a slow automatic orbit. All configuration options are optional.

## Exploring the constellation

- Search is provided by Quartz's native `@quartz-community/search` component.
  Its button sits in the top navigation beside the theme toggle. Use it or
  `Cmd/Ctrl+K`, then type a title, content term, or tag.
- Click or tap a star to inspect it. The explicit **Read note** action opens it.
- Slow orbit and subtle twinkle start automatically and continue during inspection.
  Dragging holds the camera; release resumes orbit. Background tabs and the system's
  reduced-motion preference pause decorative animation.
- Up to six non-overlapping landmark titles appear at overview; focus reveals the connected neighborhood.
  Distance LOD retains label relevance and always keeps the focused title.
- Two skies. Dark: small white additive stars with crimson-tinted hubs over a
  deep night backdrop; a neutral dust field gives parallax and fog fades distant
  threads. Light: paper and ink. Notes are soft ink dots, hubs and focus take
  the crimson accent, tags and external links keep their softer tint, and
  connections are thin gray hairlines. Both skies share the same geometry;
  only color, size, and fog change with the theme.
  Base node radii span 2.6–7.2 world units before the size control multiplier.
  The overview camera pulls in past fit-to-view so the constellation fills the hero.
  Night links blend their endpoints' star colors and
  brighten with the log of the weaker endpoint's degree, so hub filaments glow
  while leaf threads stay faint; folder/co-occurrence texture appears in its lens.
- While music plays, a record-sleeve label beside the turntable shows the
  current title and artist. Hover previews sit bottom-right, clear of the dock.

## Install or update

Install the plugin from the Quartaz monorepo subdirectory and pin it to a
release tag:

Visual defaults are bundled in the plugin. Page URLs require no `?v=` parameter;
the `ref` below selects the installed plugin release.

```yaml
- source:
    repo: github:GoBeromsu/Quartaz
    subdir: plugins/graph-landing
    ref: graph-landing-v0.18.0
    name: graph-landing
  enabled: true
```

After changing `ref` to a newer `graph-landing-v<version>` release tag, run:

```sh
npx quartz plugin install --from-config
```

### Quick start: your own landing

Three steps turn the site root into a graph landing with hero copy:

1. Pick the home page. Set `landingSlugs: [index]` in the plugin options
   (or add `graphLanding: true` to the page, or name it `graph.md`; see
   [Which page becomes the landing](#which-page-becomes-the-landing)).
2. Register the plugin in `quartz.config.yaml` as shown above, then run
   `npx quartz plugin install --from-config`.
3. Add `hero` copy under the plugin `options`. The default block is written in
   your site locale; `translations` adds other languages and the browser picks
   one by `navigator.languages` before first paint (see [`hero`](#hero)).

```yaml
options:
  landingSlugs: [index]
  hero:
    eyebrow: "Your name · Your lab"
    title: "Technology\namplifies intent."
    titleEmphasis: "intent"
    lede: "One or two sentences about what you build and why."
    actions:
      - { label: About, href: /about, accent: true }
      - { label: Writing, href: /writing }
    fallbackLanguage: en
    translations:
      ko:
        title: "기술은 의도를\n증폭한다."
        titleEmphasis: "의도"
        lede: "무엇을 만들고 왜 만드는지 한두 문장으로 적습니다."
```

Everything else (graph layout, labels, search, music) works with the bundled
defaults; the options below are for tuning.

### Native search integration

Enable Quartz's search plugin and place it in `footer`:

```yaml
- source: github:quartz-community/search
  enabled: true
  layout:
    position: footer
    priority: 20
```

The graph page uses Quartz's `minimal` frame, which renders only the page body
and footer; it does not emit `beforeBody` or sidebar slots. The footer placement
therefore renders one native `.search` host immediately after
`.center.minimal` at
`#quartz-root.page[data-frame="minimal"] > #quartz-body > .search`, outside
`.graph-landing`, while still registering the component's stylesheet, browser
script, keyboard shortcuts, modal, and content index access. Sites that hide
the graph footer should keep `.search` visible while leaving other footer
content hidden.

Native search requires Quartz's content index. Keep `indexSource` unset or set
it to `contentIndex` when native search is available on graph pages.

## Data contract

`indexSource: contentIndex` uses Quartz's generic `fetchData` object.
`indexSource: graphIndex` fetches `static/graphIndex.json` directly and asks
the engine to skip the unused global content-index fetch on graph pages.
Both shapes read `filePath`, `slug`, `title`, `links`, and `tags`; graph
indexes may supply a pre-truncated `excerpt` instead of `content`.

## Options

```yaml
- source: ./plugins/graph-landing
  enabled: true
  options:
    indexSource: graphIndex
    tagCooccurrence:
      maxTagsPerNote: 5
      maxEdges: 200
    maxRenderedNodes: 20
    expandHops: 1
    renderMode: auto # or "3d"
    layout:
      freezeAfterWarmup: true
      warmupTicks: 50
      cooldownTicks: 200
      chargeTheta: 0.9
      incrementalWarmup: true
    lod:
      labelDistance: 800
      cullDistance: 1600
      fog: true
      linkResolution: 3
      shareLinkResources: true
    interaction:
      incrementalRepaint: true
    music:
      tracks:
        - title: EVERYTHING
          artist: Paikon's Piano Cover
          url: "https://www.youtube.com/watch?v=erKAm7HRw3c&list=RDerKAm7HRw3c&start_radio=1"
        - title: Ambient Constellation
          url: "https://www.youtube.com/watch?v=o6HpCFhNcnQ"
    defaultLocale: en
```

### `tagCooccurrence`

Caps the O(k²) tag co-occurrence edge generation in the client graph
builder (every pair of tags on a note otherwise gets a faint co-occurrence
edge).

- Default: `undefined` — unlimited, original behavior.
- `false` — skip tag co-occurrence edges entirely.
- An object to cap generation:
  - `maxTagsPerNote` — skip co-occurrence pairs for any note with more tags
    than this threshold.
  - `maxEdges` — stop adding co-occurrence edges globally once this many
    have been added. Generation order is deterministic: notes are processed
    in their existing array order, tag pairs within a note in `i, j`
    nested-loop order, so the same cap always produces the same edge set.

### `maxRenderedNodes`

Caps how many nodes the graph renders initially to the top-N nodes by
degree, computed over the full parsed index (ties broken by slug for
determinism). Edges are included only between nodes that are both in the
rendered set, across all edge kinds (wikilink, tag co-occurrence, folder,
external).

- Default: `undefined` — render every node, original behavior.
- The full parsed index stays in memory client-side. Clicking a rendered
  node lazily expands its neighborhood (see `expandHops`) into the live
  simulation with a gentle reheat — no full graph rebuild. The inspect
  panel's neighbor links behave the same way: clicking a neighbor that
  isn't in the rendered set yet expands it (and its hop neighborhood) into
  the simulation first, then focuses it.

### `expandHops`

Number of hops to pull in from the full index when a rendered node is
clicked and `maxRenderedNodes` is set.

- Default: `1`. Has no effect unless `maxRenderedNodes` is also set.

### `renderMode`

Which client renderer to use.

- Default: `undefined` (`"auto"`) — 3D loads when WebGL is available;
  otherwise the 2D canvas renderer loads.
- `"3d"` — requires WebGL and shows a notice when it is unavailable.
- Reduced motion disables decorative animation while retaining the renderer,
  selection, and note navigation. Native search remains independently available.

### `layout`

Tunes the force-simulation warmup/settle behavior. Default: `undefined` —
original behavior unchanged (3D: `warmupTicks` 50 / `cooldownTicks` 200;
2D: `warmupTicks` 60 / `cooldownTicks` 180; charge force `theta` uses
d3-force's built-in default).

- `freezeAfterWarmup` — when `true`, forces `cooldownTicks` to 0 after the
  warmup pass runs so the simulation freezes immediately instead of
  continuing to settle (the 3d-force-graph maintainer-recommended pattern
  for a one-shot layout). Overrides any `cooldownTicks` value set
  alongside it. Explicit expansion, re-layout and force adjustments receive
  90 settling ticks before stopping again. Default: `false`.
- `warmupTicks` — overrides the renderer's default warmup tick count.
- `cooldownTicks` — overrides the renderer's default cooldown tick count.
  Ignored when `freezeAfterWarmup` is `true`.
- `chargeTheta` — sets the d3-force charge force's Barnes-Hut
  approximation `theta`. Higher values trade layout accuracy for speed.
  Default: d3-force's built-in default (`0.9`).
- `incrementalWarmup` — when `true`, clicking a node to lazily expand its
  neighbors (see `expandHops`) skips the full synchronous warmup re-tick
  that three-forcegraph otherwise runs over the _entire_ current graph on
  every `graphData()` call — on large graphs (1000+ nodes) that
  unconditional re-warmup is a multi-second main-thread stall even though
  only a handful of new nodes were added. Newly expanded nodes are seeded
  near the node that was clicked (instead of d3-force's unrelated default
  spiral placement) so they still appear in a sensible spot. Has no effect
  on `setLens`/tag/folder focus changes, which genuinely restructure the
  visible graph and still get a full warmup. Default: `false` — current
  behavior unchanged (every expand re-warms the whole graph).

### `lod`

Camera-distance level-of-detail tuning for the 3D renderer. Default:
`undefined` — original behavior unchanged (labels and links remain visible
regardless of camera distance, with no distance-driven label hiding, link
culling, or fog). Has no effect when the 2D renderer is active.

- `labelDistance` — camera distance (world units) beyond which a node's
  label sprite is hidden, with exceptions for the focused title and six
  overview landmarks. Default: `undefined` (labels never hide based
  on distance).
- `cullDistance` — camera distance beyond which a link's cylinder mesh is
  hidden (`mesh.visible = false`), except links touching the currently
  focused (hovered/selected) node, which always stay visible regardless
  of distance. Default: `undefined` (no link is ever hidden by distance).
- `fog` — when `true`, sets the 3D scene's `THREE.Fog` to match the
  active theme background, giving distant geometry a depth cue instead of
  a hard edge. Purely visual — it does not cull or skip rendering
  anything itself (pairs naturally with `cullDistance`, which does).
  Default: `undefined`/`false` (no fog).
- `linkResolution` — overrides the radial segment count used for each
  link's cylinder geometry. Default: `undefined` (`5`, original
  behavior). Lower values trade visual smoothness for fewer triangles per
  link.
- `shareLinkResources` — when `true`, links with the same computed color
  and opacity share one `MeshBasicMaterial` (keyed by color+opacity), and
  links with the same radius and resolution share one `CylinderGeometry`
  (keyed by radius+resolution), instead of every link cylinder allocating
  its own geometry/material. Default: `undefined`/`false` (every link gets
  its own geometry/material instance; original behavior unchanged). Safe to
  share regardless of on-screen length: this plugin's own
  `linkPositionUpdate` callback scales link length via the mesh's
  `scale.y`, never the geometry itself, so every link's `CylinderGeometry`
  is always built with unit height (1) whether shared or not. Shared
  resources are cached across `paintLinks3d` calls and dropped (not
  disposed) from the cache on each repaint, so a resize/theme/tune change
  simply repopulates the cache from scratch. See `interaction` below for
  how this interacts with `incrementalRepaint`.

### `interaction`

Interaction-driven repaint tuning for the 3D renderer. Default: `undefined`
— original behavior unchanged (every hover/click triggers a full accessor
repaint of every node/link/label). Has no effect when the 2D renderer is
active.

- `incrementalRepaint` — when `true`, switching between focused nodes updates
  their neighborhoods in place. Entering/leaving focus updates all retained
  materials so unrelated nodes and isolates dim/restore correctly. This avoids
  re-running the full node/link/label
  repaint on every hover/click. Visually identical to the full-repaint
  path; avoids the three-forcegraph/kapsule accessor system's destructive
  mesh recreation that a plain click/hover otherwise triggers (re-setting
  `nodeThreeObject`/`linkThreeObject`/`linkWidth` on every hover/click
  causes those libraries to discard and rebuild every node and link mesh,
  even though nothing about most of them changed). Default: `undefined`/
  `false` (original behavior unchanged). Full repaints (lens/tag/folder/
  theme/tune/expand/view changes) are unaffected either way.

**Interplay with `lod.shareLinkResources`**: a shared link material is
reused across every link with the same color+opacity, so mutating it in
place on focus change would repaint every other link sharing that
instance, not just the focused one. When both options are on, a focus
change instead swaps the affected link's `mesh.material` to whichever
cached shared material matches its new color/opacity (creating one on
first use) rather than mutating the current material's properties —
leaving every other link sharing the old material untouched. When
`shareLinkResources` is off, each link privately owns its material, so
`incrementalRepaint` mutates it in place as before.

### Live tune controls

The controls rail applies visual and force parameters immediately and keeps
them in `sessionStorage` for the current browser session.

- `Hub gravity` / `허브 인력`: `0` disables the additional degree-weighted
  pull, `150` is the initial setting, and `200` applies the maximum
  bounded pull. Increasing it shortens and strengthens real links touching
  highly connected nodes, then settles the existing simulation without
  rebuilding graph data. At `150`, a maximum-degree endpoint scales the
  link's target distance to `0.64` and strength to `1.45` of its base value.
- Degree-weighted many-body repulsion counterbalances the extra links carried
  by hubs, while a 3D sphere-collision force keeps rendered stars physically
  separated. Link attraction stays deliberately weaker than both forces so
  dense neighborhoods form readable constellations instead of a single glow.
- Co-occurrence and folder texture links are intentionally unaffected.

### `music.tracks`

Locally curated records for the turntable's album selector. Every track has
a `title`, an optional `artist`, and a YouTube `url`.

- URLs may be full `youtube.com`/`youtu.be` links or bare video ids.
- The selector presents two-column cover cards and marks the current record;
  narrow screens use a bounded single-column bottom sheet.
- Selecting a card loads and plays it immediately. Tracks retain configured
  order and advance cyclically when one ends.
- Duplicate video ids are removed with the first track metadata winning.
- Playlist/radio query parameters are ignored; the selected video's `v` id
  is played.
- Invalid or empty collections fall back to the built-in ambient track.
- The record spins only during audible playback and uses the current YouTube
  thumbnail as its center label.

### `defaultLocale`

Locale id for the built-in overlay copy (`ko` is Korean, anything else is
English). No multilingual plugin is needed; resolution order is a plugin's
frontmatter locale, a configured locale slug prefix, this option, the language
part of Quartz `configuration.locale`, then `en`.

### `hero`

Optional manifesto copy over the canvas, bottom-left:

```yaml
hero:
  eyebrow: "Beomsu Koh · Senior AI Lab"
  title: "기술은 의도를\n증폭한다." # "\n" forces a line break
  titleEmphasis: "의도" # wrapped in <em>, accent colour
  lede: "…"
  actions:
    - { label: "About", href: "/about", accent: true }
    - { label: "Writing", href: "/writing" }
```

Every field is optional. With `hero` set the canvas shifts right on screens
wider than 860px and fades at its left edge; on phones the lede clamps to three
lines (four for Latin copy). The copy hides while the rail is open.

To show the copy in the visitor's language, add `translations` keyed by primary
language subtag. The top-level copy is the default (and is tagged with the
site's language); a tiny inline script swaps in the first translation that
matches `navigator.languages`, before first paint and with no layout shift.
Fields missing from a translation inherit the default copy, so shared pieces
such as `eyebrow` and `actions` need writing once. `fallbackLanguage` names the
copy for visitors whose languages match nothing, so a Korean site can greet
everyone else in English:

```yaml
hero:
  eyebrow: "Beomsu Koh · Senior AI Lab"
  title: "기술은 의도를\n증폭한다."
  titleEmphasis: "의도"
  lede: "…"
  actions: [{ label: "About", href: "/about", accent: true }]
  fallbackLanguage: en
  translations:
    en:
      title: "Technology\namplifies intent."
      titleEmphasis: "intent"
      lede: "…"
```

Korean copy keeps words whole (`word-break: keep-all`), so lines break only at
spaces or at a `"\n"` you place in `title`; the lede uses `text-wrap: pretty`
to avoid a lone word on the last line.

### Which page becomes the landing

Any of these, no plugin required:

- a page whose slug is listed in the `landingSlugs` option (e.g. `[index]`
  turns the site root into the landing with no frontmatter change)
- a page with `graphLanding: true` in its frontmatter
- a page whose slug is `graph` or ends in `/graph` (e.g. `content/graph.md`)
- a page a multilingual plugin tags with `translationKey: graph` or `home`

The nav title is Quartz `configuration.pageTitle`. Writing / About links appear
only when a `writing` or `about` page exists (plain slug, or the current
locale's translation when a multilingual plugin provides one).

## 3D performance

Node-side rendering uses lightweight camera-facing sprites. For larger
graphs, `layout.freezeAfterWarmup` keeps the force simulation from becoming
the dominant ongoing cost, while `lod.labelDistance` removes distant label
sprites without hiding focused or overview labels.

Links remain the main geometry and draw-call cost as graphs become dense,
especially when tag, folder, and co-occurrence edges are included.
`lod.cullDistance` hides distant link cylinders while preserving links
connected to the focused node. `lod.fog` provides a matching-theme depth cue
but does not cull geometry. `lod.linkResolution` lowers the radial segments
per link cylinder, and `lod.shareLinkResources` reuses matching link
geometries and materials to reduce allocation and resource overhead. These
options are independent and do not change rendering unless set.
