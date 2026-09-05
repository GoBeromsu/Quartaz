# Changelog

All notable changes to this plugin are documented here.

## 0.10.0

### Changed

- Daylight nodes use opaque white centers, thin navy outlines, slightly larger
  sizing, and semantic outer rings in both 3D and 2D.
- Daylight labels receive white halos; links use navy with existing hover emphasis.
- Daylight fog is disabled so it preserves label and edge contrast over the photograph.
- Cached bead textures preserve white centers across focus/lens changes and
  restore full opacity when focus clears. Night stars and the cloud photo remain unchanged.

## 0.9.2

### Changed

- Daylight now looks steeply down onto scattered sunlit white clouds above
  the Atlantic Ocean. Wide water gaps replace the overcast cloud blanket.
- Bundled 0x010C's CC BY-SA 4.0 photograph with crop/color-balance disclosure
  and a daylight-only on-page source/license credit. Night remains unchanged.

## 0.9.1

### Changed

- Daytime framing looks down and forward across close cloud tops, with the
  distant cloud line in the upper third. Mobile preserves the descending viewpoint.
- Replaced the photograph with Gary Rockett's CC0 cloudscape, color-balanced
  toward white clouds and blue sky, and removed the translucent haze overlay.
- Night rendering and straight graph connections remain unchanged.

## 0.9.0

### Changed

- Daylight uses clear blue sky and detailed photographic white clouds, keeping
  open space around the graph. The night background remains unchanged.
- Connections use straight cylinders at every graph size. Removed curved tubes,
  per-frame curve geometry allocation, and the curvature size threshold.

## 0.8.0

### Added

- Daytime sky: the light theme clears the WebGL canvas to transparent over a
  CSS sky gradient (zenith blue to bright horizon, soft sun glow, faint
  cirrus). Notes read as ink points against the sky; the dust field and bloom
  are night-only, so the day scene renders straight to the alpha canvas.
- Curved links: real connections bow along the renderer's bezier curves as
  per-link tubes (up to 2,500 links; larger graphs keep straight shared
  cylinders), so constellations read as arcs rather than struts. Focus
  particles follow the same curve.

## 0.7.1

### Added

- A record-sleeve label slides out of the turntable dock while music is
  audible, showing the current title and artist.

### Changed

- Links inherit the blended stellar color of their endpoints in the night
  sky, and their brightness follows the log of the weaker endpoint's degree,
  so hub-to-hub filaments glow while leaf threads stay faint.
- The hover preview is anchored bottom-right so it never overlaps the
  bottom-left controls.

## 0.7.0

### Added

- Night-sky rendering: stars are camera-facing additive light sprites with
  degree-driven luminance and color temperature (cool blue-white leaves, warm
  ivory hubs, amber external links), a far dust field for parallax, and
  additive hairline links. The light theme renders a star chart of ink points.
- Automatic slow orbit and twinkle that continue during inspection, pausing
  only while dragging, in background tabs, or under reduced-motion preferences.
- Note search is delegated to Quartz's native `@quartz-community/search`
  component, hosted in the graph's top navigation via the `footer` layout slot.
- Full-index rendering by default; `maxRenderedNodes` remains optional.
  Bounded 90-tick settling after expansion and force changes; responsive
  camera fit and canvas resizing; entering/leaving focus dims and restores
  every node, including isolates.

### Changed

- Wider spacing (stronger repulsion, longer links, collision padding) so
  constellations separate with dark gaps.
- Chrome follows the host theme tokens (`--light`, `--darkgray`, `--gray`,
  `--secondary`, `--tertiary`); the night sky deepens the dark surface toward
  neutral black.
- Hub gravity default is `150`.

### Removed

- `lod.dotDistance` and `lod.nodeResolution` (sphere-only options).
- Custom in-graph search, motion toggle, and reset-view controls.

## 0.6.0

### Changed

- Added degree-weighted many-body repulsion and a 3D sphere-collision force,
  weakened dense-link attraction, and tightened node bloom/size bounds so
  highly connected hubs remain prominent without collapsing into a light blob.

## 0.5.3

### Fixed

- Move the record collection outside the backdrop-filtered music dock so
  its mobile fixed-position bottom sheet uses the viewport instead of the
  dock as its containing block. The collection now fills the intended
  safe-area-bounded width instead of collapsing into a narrow column.

## 0.5.2

### Fixed

- Restrict source-file-backed note nodes to content-index entries with a
  `.md` `filePath`. Python, TypeScript, MDX, and other non-Markdown files
  are excluded while virtual tag, external, folder, and co-occurrence
  layers remain intact.

## 0.5.1

### Fixed

- Use the published `@quartz-community/types` package so clean release-CI
  installs can typecheck without relying on an unbuilt mutable Git source.

## 0.5.0

### Added

- Added a persisted, real-time `Hub gravity` / `허브 인력` slider. Values
  from 0–200 disable, preserve, or strengthen bounded degree-weighted
  attraction while reheating the existing simulation immediately.

### Changed

- Hub-link distance and strength now share tested bounded scaling helpers;
  co-occurrence and folder texture links remain unaffected.

## 0.4.0

### Added

- Added a responsive album-like record collection with local title/artist
  metadata, cover cards, current-track state, direct selection, and cyclic
  playback.

### Changed

- Replaced `music.youtubeUrls` with structured `music.tracks`.
- Consolidated the graph menu, compact turntable, and record-library button
  onto one 48 px bottom baseline. The graph controls and record collection
  now close each other instead of overlapping.

## 0.3.0

### Added

- Replaced the speaker toggle with a compact, accessible CSS turntable
  inspired by the MIT-licensed `Liotou/obsidian-vinyle` interaction.
- Added `music.youtubeUrls` for locally configured YouTube URLs or video
  ids, stable de-duplication, automatic track cycling, and current-track
  artwork on the record label.

### Changed

- The record now spins and the tonearm lowers only during active playback;
  reduced-motion preferences disable turntable animation.
- Removed the single-track `ambientVideoId` option.

## 0.2.0

### Changed

- Graph labels are transparent and outlined, nodes scale by degree, and hub
  nodes exert stronger gravity in the layout.
- Removed the `graphIndex` input and the `multilingual-content-index`
  coupling. Graph landing now consumes only Quartz's generic
  `fetchData`/`contentIndex` object.

## 0.1.1

### Added

- `layout.incrementalWarmup` option: skips the synchronous force-simulation
  warmup when click-expansion adds nodes (removes ~1.4 s main-thread stall
  on hub nodes); expanded nodes are seeded near the clicked node. Default
  off — behavior unchanged unless enabled.

## 0.1.0

Initial local version: `tagCooccurrence`, `maxRenderedNodes`, `expandHops`,
`renderMode`, `layout`, and `lod` options.

### Added

- `lod.shareLinkResources` option — when `true`, links with the same
  computed color/opacity share one material and links with the same
  radius/resolution share one geometry, instead of every link cylinder
  allocating its own. Unset behavior is unchanged (every link gets its own
  geometry/material instance). When combined with
  `interaction.incrementalRepaint`, a focus change swaps a link's material
  reference to the matching cached shared material instead of mutating it
  in place, avoiding cross-link repaint corruption.
- `interaction.incrementalRepaint` option — when `true`, hovering or
  selecting a node mutates only the affected nodes/links/labels in place
  instead of running a full repaint, avoiding destructive mesh recreation
  in the 3D renderer on every hover/click. Unset behavior is unchanged
  (every hover/click still triggers a full accessor repaint).
- `defaultLocale` option — sets the fallback locale used when a page's
  locale can't be determined from its multilingual frontmatter/slug prefix
  and the site's multilingual config has no `sourceLocale` set. Unset
  behavior is unchanged (falls back to `"ko"`).
- `ambientVideoId` option — sets a custom YouTube video id for the ambient
  audio track played behind the graph. Unset behavior is unchanged (the
  plugin's built-in ambient track plays).
- Package metadata for standalone publishing: `keywords`, `repository`,
  `homepage`, `bugs`, `author`, `license`, `LICENSE` file, expanded `files`.
- Completed the `quartz.configSchema` manifest field (previously named
  `optionSchema`, which the Quartz plugin loader never reads) with the full
  current option surface: `renderMode`, `layout`, `lod`, `ambientVideoId`,
  `defaultLocale`.
- `README.md` — Install and Requirements sections.

### Fixed

- `lod.fog` scaling: fog near/far distances were fixed world-unit constants
  sized for the initial camera distance, so zooming out fully washed the
  graph out in fog and zooming in fully put the fog range outside the
  visible frame. Fog range now scales with the live camera distance on
  every zoom.
