# graph-landing

Full-viewport knowledge-graph constellation page type. All options are
optional and default to the plugin's original behavior — setting none of
them reproduces the exact output of a plugin instance with no `options`
block at all.

## Install or update

Install the plugin from the Quartaz monorepo subdirectory and pin it to a
release tag:

```yaml
- source:
    repo: github:GoBeromsu/Quartaz
    subdir: plugins/graph-landing
    ref: graph-landing-v0.5.3
    name: graph-landing
  enabled: true
```

After changing `ref` to a newer `graph-landing-v<version>` release tag, run:

```sh
npx quartz plugin install --from-config
```

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
      dotDistance: 1200
      cullDistance: 1600
      fog: true
      nodeResolution: 8
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

- Default: `undefined` (`"auto"`) — original behavior: 3D loads when WebGL
  is available and the user has not requested reduced motion, otherwise
  the 2D canvas renderer loads instead.
- `"3d"` — always use the 3D renderer, never fall back to 2D. If WebGL is
  unavailable or reduced-motion is requested, the graph shows a short
  notice via the existing canvas-message path instead of silently
  loading 2D.

### `layout`

Tunes the force-simulation warmup/settle behavior. Default: `undefined` —
original behavior unchanged (3D: `warmupTicks` 50 / `cooldownTicks` 200;
2D: `warmupTicks` 60 / `cooldownTicks` 180; charge force `theta` uses
d3-force's built-in default).

- `freezeAfterWarmup` — when `true`, forces `cooldownTicks` to 0 after the
  warmup pass runs so the simulation freezes immediately instead of
  continuing to settle (the 3d-force-graph maintainer-recommended pattern
  for a one-shot layout). Overrides any `cooldownTicks` value set
  alongside it. Default: `false`.
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
`undefined` — original behavior unchanged (every node/link renders at
full detail regardless of camera distance, no THREE.LOD wrapping, no
fog). Has no effect when the 2D renderer is active.

- `labelDistance` — camera distance (world units) beyond which a node's
  label sprite is hidden. Default: `undefined` (labels never hide based
  on distance). Applies independently of `dotDistance`.
- `dotDistance` — camera distance beyond which a node's full-detail
  sphere mesh is swapped for a cheap, shared low-poly "dot" mesh via
  `THREE.LOD`. Default: `undefined` (every node always renders full
  detail; no `THREE.LOD` wrapping at all).
- `cullDistance` — camera distance beyond which a link's cylinder mesh is
  hidden (`mesh.visible = false`), except links touching the currently
  focused (hovered/selected) node, which always stay visible regardless
  of distance. Default: `undefined` (no link is ever hidden by distance).
- `fog` — when `true`, sets the 3D scene's `THREE.Fog` to match the
  active theme background, giving distant geometry a depth cue instead of
  a hard edge. Purely visual — it does not cull or skip rendering
  anything itself (pairs naturally with `cullDistance`, which does).
  Default: `undefined`/`false` (no fog).
- `nodeResolution` — overrides the segment count (width/height segments)
  used for each node's full-detail sphere geometry. Default: `undefined`
  (`14`, original behavior). Lower values trade visual smoothness for
  fewer triangles per node.
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

- `incrementalRepaint` — when `true`, hovering or selecting a node mutates
  only the previous and next focus nodes/links/labels (and their direct
  neighbors) in place, instead of re-running the full node/link/label
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
  pull, `100` preserves the default behavior, and `200` applies the maximum
  bounded pull. Increasing it shortens and strengthens real links touching
  highly connected nodes, then reheats the existing simulation without
  rebuilding graph data.
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

Fallback locale id used when a page's locale can't be determined from its
frontmatter/slug prefix, and when the site has no `sourceLocale` set.

- Default: `undefined` — original behavior unchanged, falls back to `"ko"`.
- Set this when publishing a site whose primary locale is not Korean (e.g.
  `defaultLocale: en`).

## 3D performance

The 3D renderer instantiates one `THREE.Mesh` per node and one per link,
each with its own `Geometry`/`Material` (no sharing/caching by default) —
so frame cost scales directly with node + link count, and is bound by
draw-call count and fill rate rather than force-simulation cost. Measured
on a live 1,500-node / 11,786-edge graph (13,287 meshes total, no
LOD/culling options set): ~15 fps at rest, with camera movement adding
negligible extra cost on top of that draw-call-bound ceiling — the "lag
when zooming in" some large graphs exhibit is this steady-state ceiling
becoming visible during continuous re-render, not a new cost introduced
by interaction.

For graphs in that range, `layout.freezeAfterWarmup` (near-zero cost) and
`lod.dotDistance` / `lod.labelDistance` (collapse the node-side cost at
distance via shared low-poly geometry/material and label hiding) are the
first two options to reach for. `lod.cullDistance` and `lod.fog` address
the link side, which is typically the larger contributor by mesh count
(link cylinders usually outnumber node spheres several-fold once tag/
folder/co-occurrence edges are included). `lod.nodeResolution` /
`lod.linkResolution` trade visual smoothness for fewer triangles per mesh
on top of either. All of these are independent and additive; none change
rendered behavior unless explicitly set.
