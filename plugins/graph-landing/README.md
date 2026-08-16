# graph-landing

Full-viewport knowledge-graph constellation page type. All options are
optional and default to the plugin's original behavior — setting none of
them reproduces the exact output of a plugin instance with no `options`
block at all.

## Options

```yaml
- source: ./plugins/graph-landing
  enabled: true
  options:
    indexSource: contentIndex # or "graphIndex"
    tagCooccurrence:
      maxTagsPerNote: 5
      maxEdges: 200
    maxRenderedNodes: 20
    expandHops: 1
```

### `indexSource`

`"contentIndex"` (default) or `"graphIndex"`. Controls which JSON file the
client script fetches to build the graph. `"graphIndex"` requires the
`multilingual-content-index` emitter's `emitGraphIndex: true` option, and
fetches the lighter `static/graphIndex.json` instead of the full
`static/contentIndex.json`.

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
  simulation with a gentle reheat — no full graph rebuild. If the existing
  focus/search mechanism ever targets a node outside the rendered set, that
  node (and its hop neighborhood) is added first, then focused.

### `expandHops`

Number of hops to pull in from the full index when a rendered node is
clicked and `maxRenderedNodes` is set.

- Default: `1`. Has no effect unless `maxRenderedNodes` is also set.
