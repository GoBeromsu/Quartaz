interface ContentEntry {
  slug: string
  title: string
  links: string[]
  tags: string[]
  externalLinks: string[]
  content: string
  multilingual?: {
    translationKey?: string
    locale?: string
  }
}

// GraphNode/LinkKind/GraphLink/GraphData and the pure selectRenderedSubset/
// expandHopIds/linkEndpointId helpers live in ./graph-landing-pure (a file
// with no top-level DOM side effects) so Node-based unit tests can import
// them directly. esbuild's `bundle: true` nested build (see
// tsup.config.ts's inlineScriptPlugin) inlines that module's code into the
// final minified bundle exactly as before this split, so dist output is
// unchanged.
import {
  affectedFocusNodeIds,
  expandHopIds,
  getOrCreate,
  graphLabelVisible,
  hubGravityDistanceScale,
  hubGravityStrengthScale,
  isMarkdownFilePath,
  linkDegreeWeight,
  linkEndpointId,
  lodLevelForDistance,
  nodeRepulsionScale,
  normalizedDegreeWeight,
  parseNonNegativeNumber,
  seedExpandedNodePosition,
  searchGraphNodes,
  selectRenderedSubset,
  youtubeTracks,
  type GraphData,
  type GraphLink,
  type GraphNode,
  type LinkKind,
  type MusicTrackInput,
  type YoutubeTrack,
} from "./graph-landing-pure"

interface ThemeTokens {
  bg: string
  ink: string
  accent: string
  tertiary: string
  gray: string
  external: string
  font: string
}

interface LocaleContext {
  localeId: string
  sourceLocale: string
  prefixes: string[]
}

type Lens = "all" | "tag" | "folder" | "hub"

interface ViewState {
  lens: Lens
  allLabels: boolean
  focusTag: string | null
  focusFolder: string | null
}

interface Vec3 {
  x: number
  y: number
  z: number
}

interface BloomPass {
  strength: number
  radius: number
  threshold: number
}

interface CollisionForce {
  strength: (value: number) => CollisionForce
  iterations: (value: number) => CollisionForce
}

type ForceCollideFactory = (radius: number | ((node: GraphNode) => number)) => CollisionForce

interface ForceGraphInstance {
  graphData: (data: GraphData) => unknown
  width: (width: number) => unknown
  height: (height: number) => unknown
  backgroundColor: (color: string) => unknown
  nodeLabel: (accessor: string | ((node: GraphNode) => string)) => unknown
  nodeVal: (accessor: string | ((node: GraphNode) => number)) => unknown
  nodeColor: (fn: (node: GraphNode) => string) => unknown
  nodeRelSize: (size: number) => unknown
  nodeOpacity?: (opacity: number) => unknown
  linkColor: (fn: (link: GraphLink) => string) => unknown
  linkOpacity?: (opacity: number) => unknown
  linkWidth: (width: number | ((link: GraphLink) => number)) => unknown
  onNodeHover: (fn: (node: GraphNode | null) => void) => unknown
  onNodeClick: (fn: (node: GraphNode | null, event?: Event) => void) => unknown
  onBackgroundClick?: (fn: (event?: Event) => void) => unknown
  d3Force: (
    name: string,
    force?: unknown,
  ) =>
    | {
        strength?: (
          value: number | ((node: GraphNode) => number) | ((link: GraphLink) => number),
        ) => unknown
        distance?: (value: number | ((link: GraphLink) => number)) => unknown
        theta?: (value: number) => unknown
      }
    | undefined
  d3ReheatSimulation: () => unknown
  showNavInfo?: (show: boolean) => unknown
  enableNodeDrag: (enable: boolean) => unknown
  enableNavigationControls?: (enable: boolean) => unknown
  controls?: () => { autoRotate: boolean; autoRotateSpeed: number; target?: Vec3 }
  nodeCanvasObjectMode: (fn: (node: GraphNode) => string | undefined) => unknown
  nodeCanvasObject: (
    fn: (node: GraphNode, ctx: CanvasRenderingContext2D, globalScale: number) => void,
  ) => unknown
  nodePointerAreaPaint?: (
    fn: (
      node: GraphNode,
      color: string,
      ctx: CanvasRenderingContext2D,
      globalScale: number,
    ) => void,
  ) => unknown
  nodeThreeObjectExtend?: (extend: boolean) => unknown
  nodeThreeObject?: (fn: (node: GraphNode) => unknown) => unknown
  cooldownTicks: (ticks: number) => unknown
  // Optional trailing arg supports the getter form (called with no
  // arguments, returns the currently-set value) used by the
  // layout.incrementalWarmup path to snapshot/restore the configured
  // warmupTicks around an expand-triggered graphData() call.
  warmupTicks: (ticks?: number) => unknown
  cameraPosition?: (pos?: Vec3, lookAt?: Vec3, ms?: number) => unknown
  centerAt?: (x: number, y: number, ms?: number) => unknown
  zoom?: (k: number, ms?: number) => unknown
  graph2ScreenCoords?: (x: number, y: number, z?: number) => { x: number; y: number }
  zoomToFit?: (ms: number, padding: number) => unknown
  linkThreeObject?: (fn: (link: GraphLink) => unknown) => unknown
  linkPositionUpdate?: (
    fn: (
      obj: {
        position: Vec3
        scale: Vec3
        quaternion: { setFromUnitVectors: (a: unknown, b: unknown) => void }
      },
      coords: { start: Vec3; end: Vec3 },
    ) => boolean | void,
  ) => unknown
  postProcessingComposer?: () => { addPass: (pass: unknown) => void }
  scene?: () => { fog: unknown }
  linkDirectionalParticles?: (n: number | ((link: GraphLink) => number)) => unknown
  linkDirectionalParticleWidth?: (n: number) => unknown
  linkDirectionalParticleSpeed?: (n: number) => unknown
  linkDirectionalParticleColor?: (fn: (link: GraphLink) => string) => unknown
  onEngineStop: (fn: () => void) => unknown
  _destructor: () => void
}

interface ForceGraphFactory {
  default?: (options?: { controlType?: string }) => (el: HTMLElement) => ForceGraphInstance
}

interface SpriteTextInstance {
  color: string
  backgroundColor: string | false
  textHeight: number
  text: string
  fontWeight: string
  strokeWidth: number
  strokeColor: string
  material: {
    transparent: boolean
    depthWrite: boolean
    alphaTest: number
    toneMapped: boolean
  }
  position: { x: number; y: number }
  center: { set: (x: number, y: number) => void }
  visible: boolean
}

// Settable color handle shared by node/link materials, used by the
// incremental-repaint path (options.interaction.incrementalRepaint) to
// mutate a material's color in place without re-setting a three-forcegraph
// accessor (which would trigger a full mesh-recreation digest — see
// applyFocusChange).
interface ThreeColorHandle {
  set: (value: string) => void
  multiplyScalar: (value: number) => unknown
}

// Return type for `new three.MeshBasicMaterial(...)` and the base shape of
// `new three.MeshLambertMaterial(...)` (see EmissiveMaterial below), used by
// the incremental-repaint path to mutate a link/node material's color and
// opacity directly.
interface ThreeMaterialHandle {
  color: ThreeColorHandle
  opacity: number
}

interface EmissiveMaterial extends ThreeMaterialHandle {
  emissive: ThreeColorHandle
  emissiveIntensity: number
}

type SpriteTextCtor = new (text: string) => SpriteTextInstance

interface ThreeObject {
  add: (obj: unknown) => void
}

interface ThreeLOD extends ThreeObject {
  addLevel: (object: unknown, distance?: number) => unknown
}

// Return type for `new three.Mesh(...)`, used by the link-distance-cull rAF
// loop to read a link's current world position and toggle visibility without
// an unsafe cast. Every existing Mesh call site (node star, node dot,
// link cylinder) already treats the constructor's return value as
// unknown-compatible, so widening from `unknown` to this shape is safe.
interface ThreeMeshHandle {
  visible: boolean
  position: Vec3
  scale: Vec3
  material: ThreeMaterialHandle
}

interface ThreeApi {
  Group: new () => ThreeObject
  LOD: new () => ThreeLOD
  Mesh: new (geo: unknown, mat: unknown) => ThreeMeshHandle
  SphereGeometry: new (radius: number, width: number, height: number) => unknown
  CylinderGeometry: new (
    radiusTop: number,
    radiusBottom: number,
    height: number,
    radialSegments: number,
  ) => unknown
  Vector3: new (x: number, y: number, z: number) => { normalize: () => unknown }
  MeshBasicMaterial: new (params: {
    color: string
    transparent?: boolean
    opacity?: number
    depthWrite?: boolean
  }) => ThreeMaterialHandle
  MeshLambertMaterial: new (params: {
    color: string
    emissive: string
    emissiveIntensity: number
  }) => EmissiveMaterial
  Fog: new (color: string, near: number, far: number) => unknown
}

// Pinned esm.sh URLs. Keep THREE_VERSION identical across 3D imports
// (`?deps=three@…`) so 3d-force-graph, SpriteText, and UnrealBloomPass
// share one Three instance. CDN-pinned (not self-hosted) to keep the
// visual upgrade unblocked; self-hosting would add a tsup client entry
// and a static/ copy step without changing the UX.
const THREE_VERSION = "0.179.1"
const FORCE_GRAPH_2D = "https://esm.sh/force-graph@1.51.4"
const FORCE_GRAPH_3D = `https://esm.sh/3d-force-graph@1.80.0?deps=three@${THREE_VERSION}`
const D3_FORCE_3D = "https://esm.sh/d3-force-3d@3.0.6"
const SPRITE_TEXT = `https://esm.sh/three-spritetext@1.9.2?deps=three@${THREE_VERSION}`
const THREE_CDN = `https://esm.sh/three@${THREE_VERSION}`
const UNREAL_BLOOM = `https://esm.sh/three@${THREE_VERSION}/examples/jsm/postprocessing/UnrealBloomPass.js`

const HUB_COUNT = 8
// Landmark titles leave space for the stars at overview scale.
const LABEL_HUB_COUNT = 6
const HUB_EGO_N = 6
const MIN_NODE_VAL = 1
const MAX_NODE_VAL = 4
const CENTER_STRENGTH = 0.05
const NODE_REL_SIZE = 2.6
const NODE_OPACITY = 1
const LINK_OPACITY = 1
const DIM_ALPHA = 0.18
const LENS_STORAGE_KEY = "graph-landing:lens"
const TUNE_STORAGE_KEY = "graph-landing:tune"
const AUDIO_STORAGE_KEY = "graph-landing:ambient-audio"
const AMBIENT_VIDEO_ID = "UDVtMYqUAyw"
const AMBIENT_MAX_VOLUME = 12
const AMBIENT_FADE_MS = 28000
const YOUTUBE_IFRAME_API = "https://www.youtube.com/iframe_api"
const AUTO_ROTATE_SPEED = 0.18
const HUB_VAL_SCALE = 1.25
const TAG_LENS_VAL_SCALE = 1.25
const FOCUS_TAG_VAL_SCALE = 1.15
const EXTERNAL_VAL_SCALE = 0.55
const INITIAL_CAMERA: Vec3 = { x: 330, y: 235, z: 565 }
const INITIAL_LOOK_AT: Vec3 = { x: 0, y: 0, z: 0 }
const INITIAL_CAMERA_DISTANCE = Math.hypot(INITIAL_CAMERA.x, INITIAL_CAMERA.y, INITIAL_CAMERA.z)
// Fog range for `lod.fog`, expressed as multipliers of the *current* camera
// distance (recomputed on every applyZoom/updateFog call) rather than fixed
// world units. applyZoom clamps zoom to [0.4, 2.5], i.e. camera distance
// ~0.4x-2.5x INITIAL_CAMERA_DISTANCE — fixed FOG_NEAR/FOG_FAR sized for the
// default distance would sit entirely behind the camera at max zoom-in, or
// entirely in front of it (washing out the whole graph) at max zoom-out.
// Scaling with distance keeps the same relative depth-cue framing at every
// zoom level: near sits inside the current view, far sits past the current
// view's far edge.
const FOG_NEAR_FACTOR = 300 / INITIAL_CAMERA_DISTANCE
const FOG_FAR_FACTOR = 1600 / INITIAL_CAMERA_DISTANCE
// Alex grammar: small bright cores with tight bloom halos, hairline edges.
// Bloom stays tight (low radius, mid threshold) so the night-sky background
// keeps its near-black depth instead of washing into gray fog.
const NODE_RADIUS_MIN = 1.3
const NODE_RADIUS_MAX = 4.8
// Threshold sits below the emissive star cores (>1 HDR) but above label
// pixels, so text stays crisp while stars glow. Tight halo: the star reads
// as a bright point, not a blob.
const BLOOM_STRENGTH = 0.62
const BLOOM_RADIUS = 0.16
const BLOOM_THRESHOLD = 1
const COLLISION_PADDING = 2.4
// Screen-space hairlines: closer camera makes the same world radius read
// as a tube. Keep these just above the composer aliasing floor.
const LINK_RADIUS: Record<LinkKind, number> = {
  wikilink: 0.16,
  tag: 0.1,
  external: 0.12,
  cooc: 0.08,
  folder: 0.08,
}
const EDGE_INK_DARK = "#a8b0c2"
const EDGE_INK_LIGHT = "#2a3348"
const CLOUD_NOTE = { min: 80, max: 200 }
const CLOUD_HUB = { min: 40, max: 110 }
const CLOUD_EXTERNAL = { min: 160, max: 280 }
const CLOUD_TAG = { min: 90, max: 170 }
const EXCERPT_LENGTH = 220
const FOLDER_RING_SKIP = 2
const TWINKLE_AMPLITUDE = 0.06
const TWINKLE_SPEED = 0.8
const PREVIEW_HIDE_DELAY_MS = 350

// Continuous spread: tune.spread 0.5..1.5 interpolates from the old
// tight preset to the old wide preset.
const SPREAD_CHARGE = { min: -100, max: -190 }
const SPREAD_DISTANCE = { min: 72, max: 116 }
const SPREAD_CLUSTER_RADIUS = { min: 130, max: 260 }

function spreadT(spread: number): number {
  return clamp(spread - 0.5, 0, 1)
}

function asRecord(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object") {
    return value as Record<string, unknown>
  }
  throw new Error("graph-landing: expected an object in content index")
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return []
  }
  return value.filter((item): item is string => typeof item === "string")
}

function parseContentIndex(raw: Record<string, unknown>): ContentEntry[] {
  const entries: ContentEntry[] = []
  for (const value of Object.values(raw)) {
    const record = asRecord(value)
    if (!isMarkdownFilePath(record.filePath)) {
      continue
    }
    const slug = typeof record.slug === "string" ? record.slug : ""
    if (slug.length === 0) {
      continue
    }
    const multilingualRaw = record.multilingual
    const multilingual =
      multilingualRaw && typeof multilingualRaw === "object"
        ? (multilingualRaw as ContentEntry["multilingual"])
        : undefined
    entries.push({
      slug,
      title: typeof record.title === "string" ? record.title : slug,
      links: asStringArray(record.links),
      tags: asStringArray(record.tags),
      externalLinks: asStringArray(record.externalLinks),
      content:
        typeof record.excerpt === "string"
          ? record.excerpt
          : typeof record.content === "string"
            ? record.content
            : "",
      multilingual,
    })
  }
  return entries
}

function excerptOf(content: string): string {
  const flattened = content.replace(/\s+/g, " ").trim()
  if (flattened.length <= EXCERPT_LENGTH) {
    return flattened
  }
  return `${flattened.slice(0, EXCERPT_LENGTH).trimEnd()}…`
}

function hashPhase(seed: string): number {
  let hash = 0
  for (const char of seed) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  }
  return (hash % 628) / 100
}

function hashUnit(seed: string): number {
  return hashPhase(seed) / (2 * Math.PI)
}

function cloudPoint(seed: string, minRadius: number, maxRadius: number): Vec3 {
  const theta = hashPhase(seed)
  const phi = Math.acos(2 * hashUnit(`${seed}:phi`) - 1)
  const radius = minRadius + (maxRadius - minRadius) * hashUnit(`${seed}:r`)
  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.sin(phi) * Math.sin(theta),
    z: radius * Math.cos(phi),
  }
}

function isFolderIndex(slug: string): boolean {
  return slug === "index" || slug.endsWith("/index")
}

function isTagPage(slug: string): boolean {
  return slug === "tags" || slug.startsWith("tags/")
}

function isUtilityNote(entry: ContentEntry): boolean {
  const key = entry.multilingual?.translationKey
  if (key === "home" || key === "graph" || key === "about" || key === "writing") {
    return true
  }
  const slug = entry.slug
  return slug === "about" || slug.endsWith("/about") || slug.startsWith("inbox/")
}

function stripKnownPrefix(
  slug: string,
  prefixes: readonly string[],
): { locale: string | undefined; permalink: string } {
  for (const prefix of prefixes) {
    if (slug === prefix) {
      return { locale: prefix, permalink: "" }
    }
    if (slug.startsWith(`${prefix}/`)) {
      return { locale: prefix, permalink: slug.slice(prefix.length + 1) }
    }
  }
  return { locale: undefined, permalink: slug }
}

function entryLocale(entry: ContentEntry, prefixes: readonly string[]): string | undefined {
  if (entry.multilingual?.locale) {
    return entry.multilingual.locale
  }
  return stripKnownPrefix(entry.slug, prefixes).locale
}

function noteIdentity(entry: ContentEntry, prefixes: readonly string[]): string {
  if (entry.multilingual?.translationKey) {
    return `key:${entry.multilingual.translationKey}`
  }
  return `slug:${stripKnownPrefix(entry.slug, prefixes).permalink}`
}

function pickPreferredNote(
  members: readonly ContentEntry[],
  context: LocaleContext,
): ContentEntry | undefined {
  const current = members.find((entry) => entryLocale(entry, context.prefixes) === context.localeId)
  if (current) {
    return current
  }
  // Target locale graphs omit unpaired source notes instead of showing Korean titles on /en/,
  // matching how blog-home and blog-chrome scope their listings.
  if (context.localeId !== context.sourceLocale) {
    return undefined
  }
  // A group can legitimately hold only target-locale members (an en-only note whose
  // Korean sibling was never written), so having nothing to pick is not an invariant
  // violation — skip the group instead of throwing and killing the whole graph.
  return (
    members.find((entry) => entryLocale(entry, context.prefixes) === context.sourceLocale) ??
    members.find((entry) => entryLocale(entry, context.prefixes) === undefined)
  )
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function folderOf(slug: string): string {
  const parts = slug.split("/").filter((part) => part.length > 0)
  if (parts.length < 2) {
    return "root"
  }
  return parts[0] ?? "root"
}

function lastPathSegment(target: string): string {
  const parts = target.split("/").filter((part) => part.length > 0)
  return parts[parts.length - 1] ?? ""
}

function normalizeLinkKey(target: string): string {
  return lastPathSegment(target).trim().toLowerCase()
}

function isUrlTarget(target: string): boolean {
  return /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("//")
}

function shouldSkipLinkTarget(target: string): boolean {
  const trimmed = target.trim()
  if (trimmed.length === 0) {
    return true
  }
  if (isUrlTarget(trimmed)) {
    return true
  }
  if (isTagPage(trimmed)) {
    return true
  }
  if (isFolderIndex(trimmed)) {
    return true
  }
  return normalizeLinkKey(trimmed).length === 0
}

function siteHostsFromLocation(): string[] {
  const host = window.location.hostname.toLowerCase().replace(/^www\./, "")
  const hosts = [host, `www.${host}`, "beomsukoh.com", "www.beomsukoh.com"]
  return [...new Set(hosts.filter((item) => item.length > 0))]
}

function normalizeExternalUrl(href: string): string | null {
  try {
    const parsed = new URL(href, window.location.origin)
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return null
    }
    parsed.hash = ""
    parsed.hostname = parsed.hostname.toLowerCase()
    if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, "")
    }
    return parsed.toString()
  } catch {
    return null
  }
}

function isOutsideSiteUrl(href: string, siteHosts: readonly string[]): boolean {
  const normalized = normalizeExternalUrl(href)
  if (normalized === null) {
    return false
  }
  return !siteHosts.includes(new URL(normalized).hostname)
}

function externalNodeId(url: string): string {
  return `external:${url}`
}

function externalDisplayName(url: string, hostCounts: Map<string, number>): string {
  const parsed = new URL(url)
  const host = parsed.hostname.replace(/^www\./, "")
  const path = parsed.pathname
  if ((hostCounts.get(host) ?? 0) > 1 && path.length > 1) {
    return `${host}${path}`
  }
  return host
}

function buildNoteResolvers(notes: ContentEntry[]): {
  byBasename: Map<string, string>
  byTitle: Map<string, string>
} {
  const byBasename = new Map<string, string>()
  const byTitle = new Map<string, string>()
  for (const note of notes) {
    const base = normalizeLinkKey(note.slug)
    if (base.length > 0 && !byBasename.has(base)) {
      byBasename.set(base, note.slug)
    }
    const titleKey = note.title.trim().toLowerCase()
    if (titleKey.length > 0 && !byTitle.has(titleKey)) {
      byTitle.set(titleKey, note.slug)
    }
    const titleSlug = titleKey.replace(/\s+/g, "-")
    if (titleSlug.length > 0 && !byTitle.has(titleSlug)) {
      byTitle.set(titleSlug, note.slug)
    }
  }
  return { byBasename, byTitle }
}

function resolvePublishedNote(
  target: string,
  noteIds: Set<string>,
  resolvers: { byBasename: Map<string, string>; byTitle: Map<string, string> },
): string | null {
  if (noteIds.has(target)) {
    return target
  }
  const key = normalizeLinkKey(target)
  const byBase = resolvers.byBasename.get(key)
  if (byBase) {
    return byBase
  }
  const byTitle = resolvers.byTitle.get(target.trim().toLowerCase()) ?? resolvers.byTitle.get(key)
  if (byTitle) {
    return byTitle
  }
  return null
}

function dominantTagOf(noteTags: string[], tagCounts: Map<string, number>): string {
  if (noteTags.length === 0) {
    return ""
  }
  const ranked = [...noteTags].sort((a, b) => (tagCounts.get(b) ?? 0) - (tagCounts.get(a) ?? 0))
  return ranked[0] ?? ""
}

type TagCooccurrenceOption = { maxTagsPerNote?: number; maxEdges?: number } | false | undefined

function buildGraphData(
  entries: ContentEntry[],
  context: LocaleContext,
  tagCooccurrence: TagCooccurrenceOption = undefined,
): GraphData {
  const candidates = entries.filter((entry) => {
    return !isFolderIndex(entry.slug) && !isTagPage(entry.slug) && !isUtilityNote(entry)
  })
  const groups = new Map<string, ContentEntry[]>()
  for (const entry of candidates) {
    const identity = noteIdentity(entry, context.prefixes)
    const members = groups.get(identity) ?? []
    members.push(entry)
    groups.set(identity, members)
  }
  const notes: ContentEntry[] = []
  for (const members of groups.values()) {
    const picked = pickPreferredNote(members, context)
    if (picked) {
      notes.push(picked)
    }
  }

  const noteIds = new Set(notes.map((note) => note.slug))
  const resolvers = buildNoteResolvers(notes)
  const degree = new Map<string, number>()
  const links: GraphLink[] = []
  const seenEdges = new Set<string>()
  const tagCounts = new Map<string, number>()

  const bumpDegree = (id: string): void => {
    degree.set(id, (degree.get(id) ?? 0) + 1)
  }

  const edgeKey = (source: string, target: string, kind: LinkKind): string => {
    return source < target ? `${source}|${target}|${kind}` : `${target}|${source}|${kind}`
  }

  // Faint layers (cooc/folder) render as web texture but must not inflate
  // node degrees, hub ranking, or sizes: those stay driven by real
  // wikilinks, external sites, and tag membership.
  const addEdge = (
    source: string,
    target: string,
    kind: LinkKind,
    countsDegree: boolean,
  ): boolean => {
    const key = edgeKey(source, target, kind)
    if (seenEdges.has(key)) {
      return false
    }
    seenEdges.add(key)
    links.push({ source, target, kind })
    if (countsDegree) {
      bumpDegree(source)
      bumpDegree(target)
    }
    return true
  }

  for (const note of notes) {
    for (const target of note.links) {
      if (shouldSkipLinkTarget(target)) {
        continue
      }
      const resolved = resolvePublishedNote(target, noteIds, resolvers)
      if (resolved !== null && resolved !== note.slug) {
        addEdge(note.slug, resolved, "wikilink", true)
      }
    }
  }

  const siteHosts = siteHostsFromLocation()
  const externalUrls = new Set<string>()
  for (const note of notes) {
    for (const href of note.externalLinks) {
      const normalized = normalizeExternalUrl(href)
      if (normalized === null || !isOutsideSiteUrl(normalized, siteHosts)) {
        continue
      }
      externalUrls.add(normalized)
      addEdge(note.slug, externalNodeId(normalized), "external", true)
    }
  }
  const hostCounts = new Map<string, number>()
  for (const url of externalUrls) {
    const host = new URL(url).hostname.replace(/^www\./, "")
    hostCounts.set(host, (hostCounts.get(host) ?? 0) + 1)
  }

  const tagIds = new Set<string>()
  const notesByTag = new Map<string, string[]>()
  for (const note of notes) {
    for (const tag of note.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1)
      const tagId = `tag:${tag}`
      tagIds.add(tagId)
      addEdge(note.slug, tagId, "tag", true)
      const members = notesByTag.get(tag) ?? []
      members.push(note.slug)
      notesByTag.set(tag, members)
    }
  }

  // Tag co-occurrence: tags sharing at least one note get a faint tag-tag edge.
  // `tagCooccurrence` caps this O(k^2)-per-note generation: `false` disables it
  // entirely, `maxTagsPerNote` skips notes with too many tags (their pair count
  // grows quadratically), and `maxEdges` stops once that many edges exist.
  // Default (undefined) preserves the original unlimited behavior.
  if (tagCooccurrence !== false) {
    const maxTagsPerNote = tagCooccurrence?.maxTagsPerNote
    const maxEdges = tagCooccurrence?.maxEdges
    let coocEdgeCount = 0
    noteLoop: for (const note of notes) {
      if (note.tags.length < 2) {
        continue
      }
      if (maxTagsPerNote !== undefined && note.tags.length > maxTagsPerNote) {
        continue
      }
      for (let i = 0; i < note.tags.length; i += 1) {
        for (let j = i + 1; j < note.tags.length; j += 1) {
          if (maxEdges !== undefined && coocEdgeCount >= maxEdges) {
            break noteLoop
          }
          const added = addEdge(`tag:${note.tags[i]}`, `tag:${note.tags[j]}`, "cooc", false)
          if (added) {
            coocEdgeCount += 1
          }
        }
      }
    }
  }

  // Same-folder note-note texture: alphabetical ring with a skip link, so
  // density stays bounded (~2 edges per note) instead of a full clique.
  const notesByFolder = new Map<string, string[]>()
  for (const note of notes) {
    const folder = folderOf(note.slug)
    if (folder === "root") {
      continue
    }
    const members = notesByFolder.get(folder) ?? []
    members.push(note.slug)
    notesByFolder.set(folder, members)
  }
  for (const members of notesByFolder.values()) {
    if (members.length < 2) {
      continue
    }
    const ring = [...members].sort()
    for (let i = 0; i < ring.length; i += 1) {
      const next = ring[(i + 1) % ring.length]
      const skip = ring[(i + FOLDER_RING_SKIP) % ring.length]
      const current = ring[i]
      if (current === undefined || next === undefined) {
        continue
      }
      if (current !== next && !seenEdges.has(edgeKey(current, next, "wikilink"))) {
        addEdge(current, next, "folder", false)
      }
      if (
        ring.length > FOLDER_RING_SKIP + 1 &&
        skip !== undefined &&
        current !== skip &&
        !seenEdges.has(edgeKey(current, skip, "wikilink"))
      ) {
        addEdge(current, skip, "folder", false)
      }
    }
  }

  const rawDegrees = [...degree.values()]
  const minDegree = rawDegrees.length > 0 ? Math.min(...rawDegrees) : 0
  const maxDegree = rawDegrees.length > 0 ? Math.max(...rawDegrees) : 0

  const nodeVal = (id: string): number => {
    const weight = normalizedDegreeWeight(degree.get(id) ?? 0, minDegree, maxDegree)
    return MIN_NODE_VAL + weight * (MAX_NODE_VAL - MIN_NODE_VAL)
  }

  const rankedNotes = [...notes].sort(
    (a, b) => (degree.get(b.slug) ?? 0) - (degree.get(a.slug) ?? 0),
  )
  const hubIds = new Set(
    rankedNotes
      .filter((note) => (degree.get(note.slug) ?? 0) > 0)
      .slice(0, HUB_COUNT)
      .map((note) => note.slug),
  )

  const nodes: GraphNode[] = notes.map((note) => {
    const isHub = hubIds.has(note.slug)
    const cloud = isHub
      ? cloudPoint(note.slug, CLOUD_HUB.min, CLOUD_HUB.max)
      : cloudPoint(note.slug, CLOUD_NOTE.min, CLOUD_NOTE.max)
    return {
      id: note.slug,
      name: note.title,
      type: "note",
      val: nodeVal(note.slug),
      degree: degree.get(note.slug) ?? 0,
      isHub,
      tag: "",
      slug: note.slug,
      url: "",
      folder: folderOf(note.slug),
      tags: note.tags,
      dominantTag: dominantTagOf(note.tags, tagCounts),
      excerpt: excerptOf(note.content),
      phase: hashPhase(note.slug),
      x: cloud.x,
      y: cloud.y,
      z: cloud.z,
    }
  })

  for (const url of externalUrls) {
    const id = externalNodeId(url)
    const cloud = cloudPoint(id, CLOUD_EXTERNAL.min, CLOUD_EXTERNAL.max)
    nodes.push({
      id,
      name: externalDisplayName(url, hostCounts),
      type: "external",
      val: nodeVal(id) * EXTERNAL_VAL_SCALE,
      degree: degree.get(id) ?? 0,
      isHub: false,
      tag: "",
      slug: "",
      url,
      folder: "",
      tags: [],
      dominantTag: "",
      excerpt: url,
      phase: hashPhase(id),
      x: cloud.x,
      y: cloud.y,
      z: cloud.z,
    })
  }

  for (const tagId of tagIds) {
    const tag = tagId.slice("tag:".length)
    const cloud = cloudPoint(tagId, CLOUD_TAG.min, CLOUD_TAG.max)
    nodes.push({
      id: tagId,
      name: tag,
      type: "tag",
      val: clamp(nodeVal(tagId) * 0.7, MIN_NODE_VAL, MAX_NODE_VAL),
      degree: degree.get(tagId) ?? 0,
      isHub: false,
      tag,
      slug: `tags/${tag}`,
      url: "",
      folder: "tag",
      tags: [tag],
      dominantTag: tag,
      excerpt: "",
      phase: hashPhase(tagId),
      x: cloud.x,
      y: cloud.y,
      z: cloud.z,
    })
  }

  return { nodes, links }
}

function neighborMap(links: GraphLink[]): Map<string, Set<string>> {
  const neighbors = new Map<string, Set<string>>()
  const add = (from: string, to: string): void => {
    const existing = neighbors.get(from) ?? new Set<string>()
    existing.add(to)
    neighbors.set(from, existing)
  }
  for (const link of links) {
    // Hover highlighting follows real relationships only; faint texture
    // layers (cooc/folder) do not make two nodes "neighbors".
    if (link.kind !== "wikilink" && link.kind !== "tag" && link.kind !== "external") {
      continue
    }
    const source = linkEndpointId(link.source)
    const target = linkEndpointId(link.target)
    add(source, target)
    add(target, source)
  }
  return neighbors
}

function resolveCssColor(variableName: string, fallback: string): string {
  const probe = document.createElement("span")
  probe.style.color = `var(${variableName})`
  probe.style.position = "absolute"
  probe.style.visibility = "hidden"
  ;(document.querySelector(".graph-landing") ?? document.body).appendChild(probe)
  const resolved = getComputedStyle(probe).color
  probe.remove()
  return resolved || fallback
}

function readTheme(): ThemeTokens {
  const font = getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim()
  return {
    bg: resolveCssColor("--graph-backdrop", "#ffffff"),
    ink: resolveCssColor("--graph-text", "#0f0f0f"),
    accent: resolveCssColor("--graph-accent", "#27798c"),
    tertiary: resolveCssColor("--graph-external", "#3f6f8c"),
    gray: resolveCssColor("--graph-muted", "#737373"),
    external: resolveCssColor("--graph-external", "#3f6f8c"),
    font: font.length > 0 ? font : "Inter, sans-serif",
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function hasWebGL(): boolean {
  const canvas = document.createElement("canvas")
  const gl = canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl")
  return gl !== null
}

// Reduced motion controls animation independently of rendering capability.
function shouldUse3D(): boolean {
  return hasWebGL()
}

function isDarkTheme(): boolean {
  return document.documentElement.getAttribute("saved-theme") === "dark"
}

function parseRgb(color: string): { r: number; g: number; b: number } | null {
  const rgb = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/)
  if (rgb && rgb[1] && rgb[2] && rgb[3]) {
    return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]) }
  }
  const hex = color.match(/^#([0-9a-f]{6})$/i)
  if (hex && hex[1]) {
    const n = parseInt(hex[1], 16)
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
  }
  return null
}

function withAlpha(color: string, alpha: number): string {
  const rgb = parseRgb(color)
  if (!rgb) {
    return color
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}

function mixRgb(from: string, to: string, amount: number): string {
  const a = parseRgb(from)
  const b = parseRgb(to)
  if (!a || !b) {
    return from
  }
  const mix = (left: number, right: number): number => Math.round(left + (right - left) * amount)
  return `rgb(${mix(a.r, b.r)}, ${mix(a.g, b.g)}, ${mix(a.b, b.b)})`
}

function canvasBackground(theme: ThemeTokens): string {
  if (!isDarkTheme()) {
    return theme.bg
  }
  // Near-black with a hint of blue-black (Alex-style night sky), still
  // derived from the theme token so custom themes shift with it.
  return mixRgb(theme.bg, "#05070f", 0.88)
}

// The 3D pipeline treats the clear color as linear and sRGB-encodes it on
// output, which lifts near-blacks to washed gray. Pre-compensating with the
// inverse transfer keeps the rendered background at the intended hex.
function srgbCompensate(color: string): string {
  const rgb = parseRgb(color)
  if (!rgb) {
    return color
  }
  const invert = (channel: number): number => {
    const c = channel / 255
    const linear = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    return Math.ceil(linear * 255)
  }
  // The renderer's color parser requires integer RGB. Round upwards so
  // the near-black red channel survives and the sky retains its blue hue.
  return `rgb(${invert(rgb.r)}, ${invert(rgb.g)}, ${invert(rgb.b)})`
}

function canvasBackground3d(theme: ThemeTokens): string {
  return srgbCompensate(canvasBackground(theme))
}

function hashPick(seed: string, palette: string[]): string {
  let hash = 0
  for (const char of seed) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  }
  return palette[hash % palette.length] ?? palette[0] ?? seed
}

function folderColor(folder: string, theme: ThemeTokens): string {
  if (folder === "articles") {
    return theme.accent
  }
  if (folder === "inbox") {
    return theme.tertiary
  }
  if (folder === "root") {
    return theme.ink
  }
  return hashPick(folder, [theme.accent, theme.tertiary, theme.ink, theme.gray])
}

function tagFamilyColor(tag: string, theme: ThemeTokens): string {
  if (tag.length === 0) {
    return theme.ink
  }
  return hashPick(tag, [theme.accent, theme.tertiary])
}

function resolveNoteUrl(slug: string): URL {
  const encoded = slug
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  const baseAttr = document.querySelector("base")?.getAttribute("href")
  let prefix = "/"
  if (baseAttr && baseAttr.startsWith("/") && !baseAttr.startsWith("//")) {
    prefix = baseAttr.endsWith("/") ? baseAttr : `${baseAttr}/`
  }
  const path = `${prefix}${encoded}`.replace(/\/{2,}/g, "/")
  return new URL(path, window.location.origin)
}

function factoryFromModule(mod: ForceGraphFactory): (el: HTMLElement) => ForceGraphInstance {
  const factory = mod.default
  if (typeof factory !== "function") {
    throw new Error("graph-landing: CDN module did not export a graph factory")
  }
  return factory()
}

function showLoadError(canvas: HTMLElement, message: string): void {
  canvas.textContent = message
  canvas.classList.add("graph-landing__error")
}

async function loadRenderer(use3d: boolean): Promise<(el: HTMLElement) => ForceGraphInstance> {
  const url = use3d ? FORCE_GRAPH_3D : FORCE_GRAPH_2D
  const mod = (await import(url)) as ForceGraphFactory
  if (use3d && typeof mod.default === "function") {
    return mod.default({ controlType: "orbit" })
  }
  return factoryFromModule(mod)
}

interface TuneState {
  nodeScale: number
  edgeScale: number
  zoom: number
  spread: number
  hubGravity: number
}

function readStoredLens(): Lens {
  try {
    const raw = sessionStorage.getItem(LENS_STORAGE_KEY)
    if (raw === "hub") {
      return "all"
    }
    if (raw === "all" || raw === "tag" || raw === "folder") {
      return raw
    }
  } catch (error) {
    console.error("[graph-landing] sessionStorage unavailable for lens persistence", error)
  }
  return "all"
}

function readStoredTune(): TuneState {
  const fallback: TuneState = { nodeScale: 0.7, edgeScale: 1, zoom: 1, spread: 1, hubGravity: 1.5 }
  try {
    const raw = sessionStorage.getItem(TUNE_STORAGE_KEY)
    if (!raw) {
      return fallback
    }
    const parsed = asRecord(JSON.parse(raw))
    const nodeScale = typeof parsed.nodeScale === "number" ? parsed.nodeScale : fallback.nodeScale
    const edgeScale = typeof parsed.edgeScale === "number" ? parsed.edgeScale : fallback.edgeScale
    const zoom = typeof parsed.zoom === "number" ? parsed.zoom : fallback.zoom
    const spread = typeof parsed.spread === "number" ? parsed.spread : fallback.spread
    const hubGravity =
      typeof parsed.hubGravity === "number" && Number.isFinite(parsed.hubGravity)
        ? Math.min(2, Math.max(0, parsed.hubGravity))
        : fallback.hubGravity
    return { nodeScale, edgeScale, zoom, spread, hubGravity }
  } catch (error) {
    console.error("[graph-landing] sessionStorage unavailable for tune persistence", error)
    return fallback
  }
}

function persistTune(tune: TuneState): void {
  try {
    sessionStorage.setItem(TUNE_STORAGE_KEY, JSON.stringify(tune))
  } catch (error) {
    console.error("[graph-landing] could not persist tune", error)
  }
}

function persistLens(lens: Lens): void {
  try {
    sessionStorage.setItem(LENS_STORAGE_KEY, lens)
  } catch (error) {
    console.error("[graph-landing] could not persist lens", error)
  }
}

function isLens(value: string): value is Lens {
  return value === "all" || value === "tag" || value === "folder" || value === "hub"
}

function inTagCluster(node: GraphNode, tag: string): boolean {
  if (node.type === "tag") {
    return node.tag === tag
  }
  return node.tags.includes(tag)
}

function inFolderCluster(node: GraphNode, folder: string): boolean {
  return node.type === "note" && node.folder === folder
}

function noteFolderById(nodes: GraphNode[], endpoint: string | GraphNode): string | null {
  const id = linkEndpointId(endpoint)
  const node = nodes.find((entry) => entry.id === id)
  if (!node || node.type !== "note") {
    return null
  }
  return node.folder
}

function clusterTargets(data: GraphData, lens: Lens, radius: number): Map<string, Vec3> {
  const targets = new Map<string, Vec3>()
  if (lens === "folder") {
    const folders = [
      ...new Set(data.nodes.filter((node) => node.type === "note").map((node) => node.folder)),
    ]
    folders.forEach((folder, index) => {
      const angle = (Math.PI * 2 * index) / Math.max(folders.length, 1)
      const point = { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, z: 0 }
      for (const node of data.nodes) {
        if (node.type === "note" && node.folder === folder) {
          targets.set(node.id, point)
        }
      }
    })
    return targets
  }
  if (lens === "tag") {
    const tags = data.nodes.filter((node) => node.type === "tag")
    const tagPoints = new Map<string, Vec3>()
    tags.forEach((tagNode, index) => {
      const angle = (Math.PI * 2 * index) / Math.max(tags.length, 1)
      tagPoints.set(tagNode.tag, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: 0,
      })
    })
    for (const node of data.nodes) {
      if (node.type === "tag") {
        const point = tagPoints.get(node.tag)
        if (point) {
          targets.set(node.id, point)
        }
      } else if (node.dominantTag.length > 0) {
        const point = tagPoints.get(node.dominantTag)
        if (point) {
          targets.set(node.id, point)
        }
      }
    }
  }
  return targets
}

function createClusterForce(
  targetOf: (node: GraphNode) => Vec3 | null,
  strength: number,
): (alpha: number) => void {
  let nodes: GraphNode[] = []
  const force = (alpha: number): void => {
    const k = strength * alpha
    for (const node of nodes) {
      const target = targetOf(node)
      if (!target) {
        continue
      }
      node.vx = (node.vx ?? 0) + (target.x - (node.x ?? 0)) * k
      node.vy = (node.vy ?? 0) + (target.y - (node.y ?? 0)) * k
      node.vz = (node.vz ?? 0) + (target.z - (node.z ?? 0)) * k
    }
  }
  ;(force as { initialize?: (input: GraphNode[]) => void }).initialize = (input: GraphNode[]) => {
    nodes = input
  }
  return force
}

function setPressed(root: HTMLElement, selector: string, value: string, attr: string): void {
  for (const el of root.querySelectorAll(selector)) {
    if (!(el instanceof HTMLElement)) {
      continue
    }
    const current = el.getAttribute(attr)
    el.setAttribute("aria-pressed", current === value ? "true" : "false")
  }
}

function bindGraph(
  graph: ForceGraphInstance,
  data: GraphData,
  theme: { current: ThemeTokens },
  options: {
    use3d: boolean
    root: HTMLElement
    spriteText: SpriteTextCtor | null
    bloomPass: BloomPass | null
    three: ThreeApi | null
    forceCollide: ForceCollideFactory | null
    fullData: GraphData
    expandHops: number
    layout: {
      freezeAfterWarmup: boolean
      warmupTicks: number | undefined
      cooldownTicks: number | undefined
      chargeTheta: number | undefined
      incrementalWarmup: boolean
    }
    lod: {
      labelDistance: number | undefined
      dotDistance: number | undefined
      cullDistance: number | undefined
      fog: boolean
      nodeResolution: number | undefined
      linkResolution: number | undefined
      shareLinkResources: boolean
    }
    interaction: {
      incrementalRepaint: boolean
    }
  },
): void {
  let neighbors = neighborMap(data.links)

  // --- Lazy k-hop expansion (maxRenderedNodes) --------------------------
  // `data` starts out as either the full index (maxRenderedNodes unset, in
  // which case `options.fullData === data` and expansion is a no-op) or a
  // top-N-by-degree subset. New arrays leave the running simulation's
  // resolved endpoints intact until the renderer's asynchronous digest.
  //
  // Search resolves every node. Expansion-only adjacency and edge sets
  // are allocated only when the initial render is capped.
  const expandEdgeKey = (source: string, target: string, kind: LinkKind): string =>
    source < target ? `${source}|${target}|${kind}` : `${target}|${source}|${kind}`
  const fullNodeById = new Map(options.fullData.nodes.map((node) => [node.id, node]))
  // Same "real relationships only" definition used for hover highlighting
  // (wikilink/tag/external) — cooc/folder texture edges do not drive expansion.
  let fullAdjacency: Map<string, Set<string>> = new Map()
  let renderedIds: Set<string> = new Set()
  let renderedEdgeKeys: Set<string> = new Set()
  if (options.fullData !== data) {
    fullAdjacency = neighborMap(options.fullData.links)
    renderedIds = new Set(data.nodes.map((node) => node.id))
    renderedEdgeKeys = new Set(
      data.links.map((link) =>
        expandEdgeKey(linkEndpointId(link.source), linkEndpointId(link.target), link.kind),
      ),
    )
  }

  /**
   * BFS out from `nodeId` through the full index up to `options.expandHops`
   * hops, pulling any not-yet-rendered nodes (and the edges that connect them
   * to the rendered set) into `data`. Returns true when it actually added
   * anything, so the caller only needs to refresh the view on a real change.
   */
  const expandFromNode = (nodeId: string): boolean => {
    if (options.fullData === data) {
      return false
    }
    const toAdd = expandHopIds(fullAdjacency, renderedIds, nodeId, options.expandHops)
    if (!renderedIds.has(nodeId) && fullNodeById.has(nodeId)) toAdd.add(nodeId)
    if (toAdd.size === 0) {
      return false
    }
    data.nodes = [...data.nodes]
    data.links = [...data.links]
    // Full-index nodes have cloud coordinates already. Replace those for
    // newly revealed neighbors so they settle beside the selected star.
    const seedSource = options.layout.incrementalWarmup ? fullNodeById.get(nodeId) : undefined
    let seedIndex = 0
    for (const id of toAdd) {
      const node = fullNodeById.get(id)
      if (!node) {
        continue
      }
      if (seedSource && node.id !== seedSource.id) {
        const seeded = seedExpandedNodePosition(seedSource, seedIndex, options.use3d)
        node.x = seeded.x
        node.y = seeded.y
        node.z = seeded.z
        node.vx = node.vy = node.vz = 0
        seedIndex += 1
      }
      data.nodes.push(node)
      renderedIds.add(id)
    }
    for (const link of options.fullData.links) {
      const source = linkEndpointId(link.source)
      const target = linkEndpointId(link.target)
      if (!renderedIds.has(source) || !renderedIds.has(target)) {
        continue
      }
      const key = expandEdgeKey(source, target, link.kind)
      if (renderedEdgeKeys.has(key)) {
        continue
      }
      renderedEdgeKeys.add(key)
      data.links.push(link)
    }
    neighbors = neighborMap(data.links)
    return true
  }
  const state: ViewState = {
    lens: readStoredLens(),
    allLabels: false,
    focusTag: null,
    focusFolder: null,
  }
  let hoveredId: string | null = null
  let selectedId: string | null = null
  const tune = readStoredTune()
  let motionEnabled = false
  let dragging = false
  let cameraTarget = INITIAL_LOOK_AT
  let zoomBaseDistance = INITIAL_CAMERA_DISTANCE

  const settleLayout = (): void => {
    // Reheating with cooldownTicks=0 never advances the simulation.
    graph.cooldownTicks(
      options.layout.freezeAfterWarmup ? 90 : (options.layout.cooldownTicks ?? 200),
    )
    graph.d3ReheatSimulation()
  }

  const litId = (): string | null => selectedId ?? hoveredId

  const labeledHubIds = new Set(
    data.nodes
      .filter((node) => node.type === "note")
      .sort((a, b) => b.degree - a.degree)
      .slice(0, LABEL_HUB_COUNT)
      .map((node) => node.id),
  )

  const nodeValue = (node: GraphNode): number => {
    let value = node.val
    if (node.isHub) {
      value *= HUB_VAL_SCALE
    }
    if (state.lens === "tag" && node.type === "tag") {
      value *= TAG_LENS_VAL_SCALE
    }
    if (state.focusTag && node.id === `tag:${state.focusTag}`) {
      value *= FOCUS_TAG_VAL_SCALE
    }
    return value
  }

  const showNodeLabel = (node: GraphNode): boolean => {
    const focus = litId()
    if (focus === node.id) {
      return true
    }
    if (focus !== null) {
      return neighbors.get(focus)?.has(node.id) ?? false
    }
    return state.allLabels || labeledHubIds.has(node.id)
  }

  const nodeWorldRadius = (node: GraphNode): number => {
    const maxValue = MAX_NODE_VAL * HUB_VAL_SCALE
    const t = clamp((nodeValue(node) - MIN_NODE_VAL) / (maxValue - MIN_NODE_VAL), 0, 1)
    return (NODE_RADIUS_MIN + t * (NODE_RADIUS_MAX - NODE_RADIUS_MIN)) * tune.nodeScale
  }

  const isActive = (nodeId: string): boolean => {
    const focus = litId()
    if (focus !== null) {
      return focus === nodeId || (neighbors.get(focus)?.has(nodeId) ?? false)
    }
    if (state.focusTag === null && state.focusFolder === null) {
      return true
    }
    const node = data.nodes.find((entry) => entry.id === nodeId)
    if (!node) {
      return false
    }
    if (state.focusFolder !== null) {
      return inFolderCluster(node, state.focusFolder)
    }
    return state.focusTag !== null && inTagCluster(node, state.focusTag)
  }

  const baseNodeColor = (node: GraphNode): string => {
    if (node.type === "external") {
      return theme.current.external
    }
    if (state.lens === "tag") {
      if (node.type === "tag") {
        return theme.current.tertiary
      }
      return tagFamilyColor(node.dominantTag, theme.current)
    }
    if (state.lens === "folder") {
      if (node.type === "tag") {
        return theme.current.tertiary
      }
      return folderColor(node.folder, theme.current)
    }
    if (state.lens === "hub") {
      if (node.type === "tag") {
        return theme.current.tertiary
      }
      return node.isHub ? theme.current.accent : theme.current.ink
    }
    return node.type === "tag" ? theme.current.tertiary : theme.current.ink
  }

  const nodeFill = (node: GraphNode): string => {
    const focus = litId()
    if (focus !== null && (focus === node.id || (neighbors.get(focus)?.has(node.id) ?? false))) {
      return theme.current.accent
    }
    const color = baseNodeColor(node)
    if (!isActive(node.id)) {
      // THREE.Color ignores rgba alpha; dim the star's actual color.
      return mixRgb(color, canvasBackground(theme.current), 1 - DIM_ALPHA)
    }
    if (isDarkTheme()) {
      if (node.type === "external") {
        return mixRgb(theme.current.external, "#ffffff", 0.18)
      }
      // Alex grammar: near-white star cores, accent-family tags, warmer hubs.
      if (node.type === "tag") {
        return mixRgb(theme.current.tertiary, "#ffffff", 0.22)
      }
      if (node.isHub) {
        return mixRgb("#fff3e4", theme.current.accent, 0.1)
      }
      return mixRgb("#ffffff", theme.current.accent, 0.12)
    }
    // Light is ink on white: deepen wine / teal so they keep chroma
    // against the white ground. Dark fills stay on the night-sky path.
    if (node.type === "external") {
      return mixRgb(theme.current.external, "#08343a", 0.12)
    }
    if (node.type === "tag") {
      return mixRgb(theme.current.tertiary, theme.current.accent, 0.55)
    }
    if (node.isHub) {
      return mixRgb(theme.current.ink, theme.current.accent, 0.22)
    }
    return color
  }

  // Layered opacities: wikilinks strongest > tag membership > faint texture.
  const edgeBaseOpacity = (kind: LinkKind): number => {
    const dark = isDarkTheme()
    if (kind === "wikilink") {
      return dark ? 0.16 : 0.36
    }
    if (kind === "external") {
      return dark ? 0.12 : 0.3
    }
    if (kind === "tag") {
      return dark ? 0.1 : 0.24
    }
    return 0
  }

  const edgeOpacity = (link: GraphLink): number => {
    if (link.kind === "cooc" || link.kind === "folder") {
      return (link.kind === "cooc" && state.lens === "tag") ||
        (link.kind === "folder" && state.lens === "folder")
        ? 0.06
        : 0
    }
    const source = linkEndpointId(link.source)
    const target = linkEndpointId(link.target)
    const focus = litId()
    if (focus !== null && (source === focus || target === focus)) {
      return isDarkTheme() ? 0.72 : 0.78
    }
    if (focus !== null || state.focusTag !== null || state.focusFolder !== null) {
      if (!isActive(source) || !isActive(target)) {
        return edgeBaseOpacity(link.kind) * DIM_ALPHA
      }
    }
    return edgeBaseOpacity(link.kind)
  }

  const edgeColor = (link: GraphLink): string => {
    const source = linkEndpointId(link.source)
    const target = linkEndpointId(link.target)
    const focus = litId()
    const ink = isDarkTheme() ? EDGE_INK_DARK : EDGE_INK_LIGHT
    if (focus !== null && (source === focus || target === focus)) {
      return mixRgb(theme.current.accent, ink, 0.45)
    }
    return ink
  }

  const edgeStroke = (link: GraphLink): string => {
    return withAlpha(edgeColor(link), edgeOpacity(link))
  }

  const currentData = (): GraphData => ({ nodes: data.nodes, links: data.links })

  // Extracted from paintLabels3d's inline sprite-color computation so
  // applyFocusChange (the incremental-repaint path) can recompute a single
  // node's label color without re-running the full label repaint.
  const labelColorFor = (node: GraphNode): string => {
    const labelInk = isDarkTheme() ? "rgba(255, 255, 255, 1)" : withAlpha(theme.current.ink, 0.88)
    return isActive(node.id) ? labelInk : withAlpha(labelInk, DIM_ALPHA)
  }

  const labelStrokeColorFor = (node: GraphNode): string => {
    if (!isDarkTheme()) {
      return "rgba(0, 0, 0, 0)"
    }
    return isActive(node.id) ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.3)"
  }

  // Shared by applyZoom (needs direction + length) and updateFog (needs only
  // length, to scale FOG_NEAR_FACTOR/FOG_FAR_FACTOR to the live camera
  // distance). Falls back to INITIAL_CAMERA/INITIAL_CAMERA_DISTANCE before
  // the graph has a real camera position (or in 2D, where callers ignore
  // dir/len anyway).
  const currentCameraVector = (): { dir: Vec3; len: number } => {
    const target = graph.controls?.().target
    if (target) cameraTarget = { x: target.x, y: target.y, z: target.z }
    if (typeof graph.cameraPosition === "function") {
      const current = graph.cameraPosition() as Partial<Vec3> | undefined
      if (
        current &&
        typeof current.x === "number" &&
        typeof current.y === "number" &&
        typeof current.z === "number"
      ) {
        const dir = {
          x: current.x - cameraTarget.x,
          y: current.y - cameraTarget.y,
          z: current.z - cameraTarget.z,
        }
        const len = Math.hypot(dir.x, dir.y, dir.z)
        if (len > 1) {
          return { dir, len }
        }
      }
    }
    return { dir: INITIAL_CAMERA, len: INITIAL_CAMERA_DISTANCE }
  }

  // Zoom keeps the current orbit direction and only changes the camera's
  // distance to the origin, so slider moves never snap the rotation back.
  const applyZoom = (ms: number): void => {
    if (options.use3d) {
      if (typeof graph.cameraPosition !== "function") {
        return
      }
      const targetLen = zoomBaseDistance / clamp(tune.zoom, 0.4, 2.5)
      const { dir, len: dirLen } = currentCameraVector()
      const k = targetLen / dirLen
      graph.cameraPosition(
        {
          x: cameraTarget.x + dir.x * k,
          y: cameraTarget.y + dir.y * k,
          z: cameraTarget.z + dir.z * k,
        },
        cameraTarget,
        prefersReducedMotion() ? 0 : ms,
      )
      // Fog range is distance-relative (see FOG_NEAR_FACTOR/FOG_FAR_FACTOR),
      // so a zoom change must refresh it too. No-op when lod.fog is unset.
      updateFog()
      return
    }
    if (typeof graph.zoom === "function") {
      graph.zoom(tune.zoom, prefersReducedMotion() ? 0 : ms)
    }
  }

  const applyForces = (): void => {
    const t = spreadT(tune.spread)
    const chargeStrength = SPREAD_CHARGE.min + t * (SPREAD_CHARGE.max - SPREAD_CHARGE.min)
    const linkDistance = SPREAD_DISTANCE.min + t * (SPREAD_DISTANCE.max - SPREAD_DISTANCE.min)
    const degreeById = new Map(data.nodes.map((node) => [node.id, node.degree]))
    const maxDegree = Math.max(0, ...degreeById.values())
    const nodeDegreeWeight = (node: GraphNode): number =>
      normalizedDegreeWeight(node.degree, 0, maxDegree)
    const edgeWeight = (edge: GraphLink): number =>
      linkDegreeWeight(
        degreeById.get(linkEndpointId(edge.source)) ?? 0,
        degreeById.get(linkEndpointId(edge.target)) ?? 0,
        maxDegree,
      )
    const charge = graph.d3Force("charge")
    if (charge?.strength) {
      charge.strength(
        (node: GraphNode) => chargeStrength * nodeRepulsionScale(nodeDegreeWeight(node)),
      )
    }
    if (charge?.theta && options.layout.chargeTheta !== undefined) {
      charge.theta(options.layout.chargeTheta)
    }
    const link = graph.d3Force("link")
    if (link?.distance) {
      link.distance((edge) => {
        const gravityScale = hubGravityDistanceScale(edgeWeight(edge), tune.hubGravity)
        if (state.lens === "tag" && edge.kind === "tag") {
          return linkDistance * 0.72 * gravityScale
        }
        if (edge.kind === "cooc" || edge.kind === "folder") {
          return linkDistance
        }
        return linkDistance * gravityScale
      })
    }
    if (link?.strength) {
      link.strength((edge: GraphLink) => {
        // Faint texture layers barely pull: they draw web lines without
        // distorting the wikilink/tag layout.
        if (edge.kind === "cooc" || edge.kind === "folder") {
          return 0.015
        }
        const gravityScale = hubGravityStrengthScale(edgeWeight(edge), tune.hubGravity)
        if (state.lens === "tag" && edge.kind === "tag") {
          return 0.3 * gravityScale
        }
        if (state.lens === "folder") {
          const sourceFolder = noteFolderById(data.nodes, edge.source)
          const targetFolder = noteFolderById(data.nodes, edge.target)
          if (sourceFolder !== null && sourceFolder === targetFolder) {
            return 0.16 * gravityScale
          }
        }
        if (edge.kind === "tag") {
          return 0.14 * gravityScale
        }
        return (edge.kind === "external" ? 0.16 : 0.24) * gravityScale
      })
    }
    if (options.forceCollide) {
      graph.d3Force(
        "collision",
        options
          .forceCollide((node) => nodeWorldRadius(node) + COLLISION_PADDING)
          .strength(0.85)
          .iterations(1),
      )
    }
    const center = graph.d3Force("center")
    if (center?.strength) {
      center.strength(CENTER_STRENGTH)
    }
    const radius =
      SPREAD_CLUSTER_RADIUS.min + t * (SPREAD_CLUSTER_RADIUS.max - SPREAD_CLUSTER_RADIUS.min)
    const targets = clusterTargets(data, state.lens, radius)
    const clusterStrength = state.lens === "folder" || state.lens === "tag" ? 0.08 : 0
    graph.d3Force(
      "cluster",
      createClusterForce((node) => targets.get(node.id) ?? null, clusterStrength),
    )
    if (options.use3d) {
      graph.d3Force("flattenZ", null)
    }
  }

  const twinkleMaterials = new Map<
    string,
    { material: EmissiveMaterial; base: number; phase: number }
  >()

  // Populated by paintLabels3d() whenever options.lod.labelDistance is set
  // (consumed by the label-distance-fade rAF loop below) OR whenever
  // options.interaction.incrementalRepaint is set (consumed by
  // applyFocusChange, which needs a handle to every node's label sprite to
  // mutate color/visibility in place on a focus change). Cleared/repopulated
  // alongside twinkleMaterials on every repaint (theme change, tune change,
  // etc.) so it never holds stale sprite references.
  const labelSprites = new Map<string, { sprite: SpriteTextInstance; node: GraphNode }>()

  // Populated by paintLinks3d() whenever options.lod.cullDistance is set
  // (consumed by the link-distance-cull rAF loop below) OR whenever
  // options.interaction.incrementalRepaint is set (consumed by
  // applyFocusChange, which needs a handle to every link's mesh to mutate
  // its material color/opacity in place on a focus change). Keyed by the
  // link object itself (stable identity across repaints for a given data
  // set) rather than a derived string key, avoiding an extra id-construction
  // step per link on every animation frame.
  const linkMeshes = new Map<GraphLink, ThreeMeshHandle>()

  // The following three maps are populated only when
  // options.interaction.incrementalRepaint is set; they back
  // applyFocusChange's per-node/per-link mutation path and are otherwise
  // left empty, costing nothing when the option is unset.

  // Stars mutate private materials; LOD dots swap shared materials by color.
  const nodeMaterials = new Map<string, ThreeMaterialHandle>()
  const nodeDots = new Map<string, ThreeMeshHandle>()

  // Rendered GraphNode by id, rebuilt from `data.nodes` at the top of
  // paintLabels3d — lets applyFocusChange resolve an affected node id back
  // to the GraphNode the color/label accessors need, without a linear scan.
  const renderedNodeById = new Map<string, GraphNode>()

  // Links touching each rendered node id, rebuilt from `data.links` at the
  // top of paintLinks3d — lets applyFocusChange find the links whose
  // color/opacity depend on a given focus node without scanning every link.
  const linksByNode = new Map<string, GraphLink[]>()

  // Shared geometry/material cache for the low-detail "dot" LOD tier, keyed
  // by a coarse radius bucket + fill color. Only ever populated when
  // options.lod.dotDistance is set; a fresh Mesh instance is still created
  // per node (cheap JS object), but many nodes share the same underlying
  // Geometry/Material GL resources instead of each allocating its own —
  // directly addressing the zero-sharing baseline (13,287 unique
  // geometries/materials) measured before this option existed.
  const dotResourceCache = new Map<string, { geometry: unknown; material: ThreeMaterialHandle }>()

  const dotResourceFor = (
    three: ThreeApi,
    radius: number,
    fill: string,
  ): { geometry: unknown; material: ThreeMaterialHandle } => {
    const key = `${Math.round(radius * 4)}|${fill}`
    return getOrCreate(dotResourceCache, key, () => {
      const material = new three.MeshBasicMaterial({ color: fill })
      if (isDarkTheme()) material.color.multiplyScalar(2)
      return { geometry: new three.SphereGeometry(radius, 6, 6), material }
    })
  }

  // Shared link geometry/material caches for `lod.shareLinkResources`,
  // following the dotResourceCache pattern above. Only populated/consumed
  // when shareLinkResources is on; paintLinks3d clears both maps at the top
  // of every call (mirroring dotResourceCache.clear()) WITHOUT disposing
  // prior entries — per spec, shared resources are never disposed on
  // repaint, only dropped from the cache so a fresh paint repopulates them
  // from scratch. Geometry is safe to share across links regardless of
  // on-screen length because paintLinks3d's own linkPositionUpdate callback
  // (below) scales link length via the mesh's scale.y, never the geometry
  // itself — every CylinderGeometry here is always built with unit height
  // (see `new three.CylinderGeometry(radius, radius, 1, resolution)` below,
  // matching the non-shared branch's `1` height argument).
  const linkGeometryCache = new Map<string, unknown>()
  const linkMaterialCache = new Map<string, ThreeMaterialHandle>()

  const linkGeometryFor = (three: ThreeApi, radius: number, resolution: number): unknown => {
    const key = `${radius}|${resolution}`
    return getOrCreate(
      linkGeometryCache,
      key,
      () => new three.CylinderGeometry(radius, radius, 1, resolution),
    )
  }

  const linkMaterialFor = (
    three: ThreeApi,
    color: string,
    opacity: number,
  ): ThreeMaterialHandle => {
    const key = `${color}|${opacity}`
    return getOrCreate(
      linkMaterialCache,
      key,
      () =>
        new three.MeshBasicMaterial({
          color,
          transparent: true,
          opacity,
          depthWrite: false,
        }),
    )
  }

  const paintLabels3d = (): void => {
    if (!options.use3d || typeof graph.nodeThreeObject !== "function") {
      return
    }
    const SpriteText = options.spriteText
    const three = options.three
    const dotDistance = options.lod.dotDistance
    const nodeSegments = options.lod.nodeResolution ?? 14
    const incremental = options.interaction.incrementalRepaint
    twinkleMaterials.clear()
    labelSprites.clear()
    dotResourceCache.clear()
    nodeMaterials.clear()
    nodeDots.clear()
    renderedNodeById.clear()
    if (incremental) {
      for (const node of data.nodes) {
        renderedNodeById.set(node.id, node)
      }
    }
    if (typeof graph.nodeThreeObjectExtend === "function") {
      graph.nodeThreeObjectExtend(three === null)
    }
    graph.nodeThreeObject((node) => {
      const radius = nodeWorldRadius(node)
      const fill = nodeFill(node)
      let star: unknown = false
      if (three) {
        if (isDarkTheme()) {
          // Smaller cores need hotter emissive to stay above the bloom
          // threshold and read as glowing points.
          const base = node.isHub ? 1.35 : 1.1
          const material = new three.MeshLambertMaterial({
            color: fill,
            emissive: fill,
            emissiveIntensity: base,
          })
          twinkleMaterials.set(node.id, { material, base, phase: node.phase })
          if (incremental) {
            nodeMaterials.set(node.id, material)
          }
          star = new three.Mesh(
            new three.SphereGeometry(radius, nodeSegments, nodeSegments),
            material,
          )
        } else {
          const material = new three.MeshBasicMaterial({ color: fill })
          if (incremental) {
            nodeMaterials.set(node.id, material)
          }
          star = new three.Mesh(
            new three.SphereGeometry(radius, nodeSegments, nodeSegments),
            material,
          )
        }
        // Only wraps in THREE.LOD when dotDistance is explicitly set; with
        // it unset `star` stays the plain full-detail Mesh built above,
        // preserving current behavior byte for byte.
        if (dotDistance !== undefined && star !== false) {
          const dot = dotResourceFor(three, radius, fill)
          const dotMesh = new three.Mesh(dot.geometry, dot.material)
          nodeDots.set(node.id, dotMesh)
          const lod = new three.LOD()
          lod.addLevel(star, 0)
          lod.addLevel(dotMesh, dotDistance)
          star = lod
        }
      }
      const showLabel = showNodeLabel(node)
      // With incremental unset this is exactly the original
      // `!showNodeLabel(node) || !SpriteText` gate; with it set, every node
      // always gets a sprite (needed so applyFocusChange can toggle
      // visibility on a focus change without recreating anything), and
      // `sprite.visible` below carries the show/hide decision instead.
      if (!SpriteText || (!incremental && !showLabel)) {
        return star
      }
      // Alex-style label: small, no stroke bubble, floating beside the star.
      const characters = Array.from(node.name)
      const limit = window.innerWidth < 700 ? 24 : 48
      const sprite = new SpriteText(
        characters.length > limit ? `${characters.slice(0, limit).join("")}…` : node.name,
      )
      sprite.color = labelColorFor(node)
      sprite.backgroundColor = false
      sprite.fontWeight = "400"
      sprite.strokeWidth = isDarkTheme() ? 0.35 : 0
      sprite.strokeColor = labelStrokeColorFor(node)
      // UnrealBloomPass does not preserve transparent sprite pixels cleanly
      // unless the empty texels are discarded. Without alphaTest, the label
      // quad can appear as a tinted rectangle even with backgroundColor=false.
      sprite.material.transparent = true
      sprite.material.depthWrite = false
      sprite.material.alphaTest = 0.01
      sprite.material.toneMapped = false
      sprite.textHeight = labeledHubIds.has(node.id) ? 6.5 : 5.5
      sprite.center.set(0, 0.5)
      sprite.position.x = radius + 2
      sprite.position.y = 0
      if (incremental) {
        sprite.visible = showLabel
        labelSprites.set(node.id, { sprite, node })
      } else if (options.lod.labelDistance !== undefined) {
        labelSprites.set(node.id, { sprite, node })
      }
      if (!three || star === false) {
        return sprite
      }
      const group = new three.Group()
      group.add(star)
      group.add(sprite)
      return group
    })
  }

  const paintLinks3d = (): void => {
    const three = options.three
    if (!options.use3d || !three || typeof graph.linkThreeObject !== "function") {
      return
    }
    const up = new three.Vector3(0, 1, 0)
    const linkSegments = options.lod.linkResolution ?? 5
    const cullDistance = options.lod.cullDistance
    const incremental = options.interaction.incrementalRepaint
    const shareLinkResources = options.lod.shareLinkResources
    linkMeshes.clear()
    linksByNode.clear()
    linkGeometryCache.clear()
    linkMaterialCache.clear()
    if (incremental) {
      for (const link of data.links) {
        const source = linkEndpointId(link.source)
        const target = linkEndpointId(link.target)
        for (const id of [source, target]) {
          const existing = linksByNode.get(id)
          if (existing) {
            existing.push(link)
          } else {
            linksByNode.set(id, [link])
          }
        }
      }
    }
    graph.linkThreeObject((link) => {
      const radius = LINK_RADIUS[link.kind] * tune.edgeScale
      const material = shareLinkResources
        ? linkMaterialFor(three, edgeColor(link), edgeOpacity(link))
        : new three.MeshBasicMaterial({
            color: edgeColor(link),
            transparent: true,
            opacity: edgeOpacity(link),
            depthWrite: false,
          })
      const geometry = shareLinkResources
        ? linkGeometryFor(three, radius, linkSegments)
        : new three.CylinderGeometry(radius, radius, 1, linkSegments)
      const mesh = new three.Mesh(geometry, material)
      // Tracked when cullDistance is set (consumed by the link-cull rAF loop
      // below) or when incrementalRepaint is set (consumed by
      // applyFocusChange). With both unset, linkMeshes stays empty and the
      // link-cull rAF loop below never registers at all, preserving current
      // behavior byte for byte.
      if (cullDistance !== undefined || incremental) {
        linkMeshes.set(link, mesh)
      }
      return mesh
    })
    if (typeof graph.linkPositionUpdate !== "function") {
      return
    }
    graph.linkPositionUpdate((obj, coords) => {
      const dx = coords.end.x - coords.start.x
      const dy = coords.end.y - coords.start.y
      const dz = coords.end.z - coords.start.z
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
      obj.position.x = (coords.start.x + coords.end.x) / 2
      obj.position.y = (coords.start.y + coords.end.y) / 2
      obj.position.z = (coords.start.z + coords.end.z) / 2
      obj.scale.x = 1
      obj.scale.y = Math.max(dist, 0.01)
      obj.scale.z = 1
      obj.quaternion.setFromUnitVectors(up, new three.Vector3(dx, dy, dz).normalize())
      return true
    })
  }

  const refreshParticles = (): void => {
    if (!options.use3d || typeof graph.linkDirectionalParticles !== "function") {
      return
    }
    graph.linkDirectionalParticles((link) => {
      const focus = litId()
      if (focus === null || !motionEnabled || prefersReducedMotion() || document.hidden) {
        return 0
      }
      const source = linkEndpointId(link.source)
      const target = linkEndpointId(link.target)
      return source === focus || target === focus ? 2 : 0
    })
  }

  const refreshAccessors = (): void => {
    graph.nodeVal(nodeValue)
    graph.nodeColor(nodeFill)
    graph.linkColor(edgeStroke)
    graph.linkWidth((link) => {
      const source = linkEndpointId(link.source)
      const target = linkEndpointId(link.target)
      const focus = litId()
      const scale = tune.edgeScale
      if (focus !== null && (source === focus || target === focus)) {
        return 0.7 * scale
      }
      if (link.kind === "wikilink" || link.kind === "external") {
        return 0.5 * scale
      }
      return (link.kind === "tag" ? 0.35 : 0.25) * scale
    })
    if (typeof graph.linkOpacity === "function") {
      graph.linkOpacity(LINK_OPACITY)
    }
    refreshParticles()
    paintLinks3d()
    if (!options.use3d) {
      graph.nodeCanvasObjectMode(() => "replace")
    }
  }

  // Incremental counterpart to refreshAccessors() + paintLabels3d() for a
  // focus (hover/select) change only. Used when
  // options.interaction.incrementalRepaint is set, in place of the full
  // repaint, to avoid re-setting graph.nodeThreeObject/linkThreeObject/
  // linkWidth — which three-forcegraph/kapsule treat as a signal to
  // destructively recreate every node/link mesh (see the tracer report this
  // change is based on). Mutates only the previous and next focus nodes,
  // their direct neighbors, and the links touching any of them, in place on
  // the retained material/sprite/mesh handles populated by paintLabels3d()/
  // paintLinks3d() when incrementalRepaint is on. Visually identical to the
  // full-repaint path for the same focus state; node/link geometry (radius,
  // width) never depends on focus, so no scale mutation is needed here.
  const applyFocusChange = (previousFocus: string | null, nextFocus: string | null): void => {
    const affected = affectedFocusNodeIds(
      neighbors,
      previousFocus,
      nextFocus,
      renderedNodeById.keys(),
    )
    const visitedLinks = new Set<GraphLink>()
    for (const id of affected) {
      const node = renderedNodeById.get(id)
      if (!node) {
        continue
      }
      const fill = nodeFill(node)
      nodeMaterials.get(id)?.color.set(fill)
      const dot = nodeDots.get(id)
      if (dot && options.three) {
        dot.material = dotResourceFor(options.three, nodeWorldRadius(node), fill).material
      }
      const twinkle = twinkleMaterials.get(id)
      if (twinkle) {
        twinkle.material.emissive.set(fill)
      }
      const label = labelSprites.get(id)
      if (label) {
        label.sprite.color = labelColorFor(node)
        label.sprite.strokeColor = labelStrokeColorFor(node)
        label.sprite.strokeWidth = isDarkTheme() ? 0.35 : 0
        label.sprite.visible = showNodeLabel(node)
      }
      for (const link of linksByNode.get(id) ?? []) {
        // `affected` contains the focus node + its neighbors, so a link
        // between two affected nodes (e.g. the focus and one of its
        // neighbors) is reachable via linksByNode from both endpoints.
        // Track already-processed links so each is mutated exactly once.
        if (visitedLinks.has(link)) {
          continue
        }
        visitedLinks.add(link)
        const mesh = linkMeshes.get(link)
        if (!mesh) {
          continue
        }
        // Shared materials (lod.shareLinkResources) are keyed by
        // color+opacity and reused across many links, so mutating
        // mesh.material in place here would repaint every other link
        // sharing that same material instance. Swap the mesh's material
        // reference to whichever cached shared material matches the new
        // color/opacity instead (creating one on first use); unshared mode
        // keeps the original in-place mutation, which is safe there because
        // each link privately owns its material.
        if (options.lod.shareLinkResources && options.three) {
          mesh.material = linkMaterialFor(options.three, edgeColor(link), edgeOpacity(link))
        } else {
          mesh.material.color.set(edgeColor(link))
          mesh.material.opacity = edgeOpacity(link)
        }
      }
    }
  }

  // Shared focus-change repaint path used by onNodeHover/clearSelection/
  // selectNode: incremental repaint (particles + affected-node/link colors)
  // when incrementalRepaint+use3d are both on, otherwise a full accessor
  // refresh (+ label repaint in 3d mode). Callers just invoke this and
  // fall through to whatever they do next, exactly as the inlined block
  // used to.
  const repaintFocusChange = (previousFocus: string | null): void => {
    if (options.interaction.incrementalRepaint && options.use3d) {
      refreshParticles()
      applyFocusChange(previousFocus, litId())
      return
    }
    refreshAccessors()
    if (options.use3d) {
      paintLabels3d()
    }
  }

  const renderLegend = (): void => {
    const legend = options.root.querySelector("[data-graph-legend]")
    if (!(legend instanceof HTMLElement)) {
      return
    }
    const makeItem = (color: string, label: string): HTMLSpanElement => {
      const item = document.createElement("span")
      item.className = "graph-landing__legend-item"
      const dot = document.createElement("span")
      dot.className = "graph-landing__dot"
      dot.setAttribute("aria-hidden", "true")
      dot.style.background = color
      const text = document.createElement("span")
      text.textContent = label
      item.append(dot, text)
      return item
    }
    const notesLabel = options.root.dataset.legendNotes ?? "Notes"
    const tagsLabel = options.root.dataset.legendTags ?? "Tags"
    const linksLabel = options.root.dataset.legendLinks ?? "Links"
    legend.replaceChildren(
      makeItem(theme.current.ink, notesLabel),
      makeItem(theme.current.tertiary, tagsLabel),
      makeItem(theme.current.external, linksLabel),
    )
  }

  const facetRow = (options2: {
    dataset: { key: "graphTag" | "graphFolder"; value: string }
    pressed: boolean
    dotColor: string | null
    label: string
    count: number
  }): HTMLLIElement => {
    const item = document.createElement("li")
    const button = document.createElement("button")
    button.type = "button"
    button.className = "graph-landing__tag-item"
    button.dataset[options2.dataset.key] = options2.dataset.value
    button.setAttribute("aria-pressed", options2.pressed ? "true" : "false")
    const name = document.createElement("span")
    name.className = "graph-landing__facet-name"
    if (options2.dotColor !== null) {
      const dot = document.createElement("span")
      dot.className = "graph-landing__dot"
      dot.style.background = options2.dotColor
      name.append(dot)
    }
    name.append(document.createTextNode(options2.label))
    const count = document.createElement("span")
    count.className = "graph-landing__tag-count"
    count.textContent = String(options2.count)
    button.append(name, count)
    item.append(button)
    return item
  }

  // The facet list mirrors the active lens: the tag axis lists tags, the
  // folder axis lists folders. Both focus their cluster on click.
  const renderFacets = (): void => {
    const list = options.root.querySelector("[data-graph-tags]")
    if (!(list instanceof HTMLElement)) {
      return
    }
    const label = options.root.querySelector("[data-graph-facet-label]")
    const wrap = options.root.querySelector(".graph-landing__tags")
    if (state.lens === "folder") {
      const rootLabel = options.root.dataset.folderRootLabel ?? "root"
      const counts = new Map<string, number>()
      for (const node of data.nodes) {
        if (node.type === "note") {
          counts.set(node.folder, (counts.get(node.folder) ?? 0) + 1)
        }
      }
      const folders = [...counts.entries()].sort((a, b) => b[1] - a[1])
      if (label instanceof HTMLElement) {
        label.textContent = options.root.dataset.legendFolders ?? "Folders"
      }
      if (wrap instanceof HTMLElement) {
        wrap.hidden = folders.length === 0
      }
      list.replaceChildren(
        ...folders.map(([folder, count]) =>
          facetRow({
            dataset: { key: "graphFolder", value: folder },
            pressed: state.focusFolder === folder,
            dotColor: folderColor(folder, theme.current),
            label: folder === "root" ? rootLabel : folder,
            count,
          }),
        ),
      )
      return
    }
    const ranked = data.nodes
      .filter((node) => node.type === "tag")
      .sort((a, b) => b.degree - a.degree)
      .slice(0, 16)
    if (label instanceof HTMLElement) {
      label.textContent = options.root.dataset.legendTags ?? "Tags"
    }
    if (wrap instanceof HTMLElement) {
      wrap.hidden = ranked.length === 0
    }
    list.replaceChildren(
      ...ranked.map((tagNode) =>
        facetRow({
          dataset: { key: "graphTag", value: tagNode.tag },
          pressed: state.focusTag === tagNode.tag,
          dotColor: null,
          label: tagNode.tag,
          count: tagNode.degree,
        }),
      ),
    )
  }

  let initialFit = true
  const fitOverview = (): void => {
    if (data.nodes.length > 0) graph.zoomToFit?.(0, 80)
    zoomBaseDistance = currentCameraVector().len
    applyZoom(0)
    updateFog()
  }
  let fitFrame = 0
  graph.onEngineStop(() => {
    if (initialFit) {
      // onEngineStop fires before this frame copies simulation positions
      // into meshes. Fit against the completed frame's bounds.
      fitFrame = window.requestAnimationFrame(() => {
        initialFit = false
        fitOverview()
      })
    }
  })
  window.addCleanup(() => window.cancelAnimationFrame(fitFrame))

  const applyView = (expanding = false): void => {
    // Each data update owns its warmup policy. Leave it set through the
    // asynchronous digest; the next full update explicitly restores it.
    graph.warmupTicks(
      expanding && options.layout.incrementalWarmup
        ? 0
        : (options.layout.warmupTicks ?? (options.use3d ? 50 : 60)),
    )
    graph.graphData(currentData())
    applyForces()
    refreshAccessors()
    paintLabels3d()
    renderLegend()
    renderFacets()
    setPressed(options.root, "[data-graph-lens]", state.lens, "data-graph-lens")
    settleLayout()
  }

  const setLens = (lens: Lens): void => {
    state.lens = lens
    if (lens !== "tag") {
      state.focusTag = null
    }
    if (lens !== "folder") {
      state.focusFolder = null
    }
    persistLens(lens)
    applyView()
  }

  const setFocusTag = (tag: string): void => {
    state.focusTag = state.focusTag === tag ? null : tag
    state.focusFolder = null
    if (state.focusTag) {
      state.lens = "tag"
      persistLens("tag")
    }
    applyView()
  }

  const setFocusFolder = (folder: string): void => {
    state.focusFolder = state.focusFolder === folder ? null : folder
    state.focusTag = null
    if (state.focusFolder) {
      state.lens = "folder"
      persistLens("folder")
    }
    applyView()
  }

  const activeBackground = (): string =>
    options.use3d ? canvasBackground3d(theme.current) : canvasBackground(theme.current)

  // Sets/refreshes the 3D scene's THREE.Fog to match the active theme
  // background, giving distant geometry a depth cue instead of a hard
  // edge. No-op (graph.scene() is never even called) unless both use3d
  // and options.lod.fog are true, preserving current behavior byte for
  // byte when the option is unset. near/far scale with the *current*
  // camera distance (FOG_NEAR_FACTOR/FOG_FAR_FACTOR) rather than fixed
  // world units, so the fog stays correctly framed across the full
  // applyZoom range instead of washing out the graph at max zoom-out.
  const updateFog = (): void => {
    if (!options.use3d || !options.lod.fog || !options.three || typeof graph.scene !== "function") {
      return
    }
    const cameraDistance = currentCameraVector().len
    graph.scene().fog = new options.three.Fog(
      activeBackground(),
      cameraDistance * FOG_NEAR_FACTOR,
      cameraDistance * FOG_FAR_FACTOR,
    )
  }

  graph.graphData(currentData())
  graph.backgroundColor(activeBackground())
  graph.nodeLabel((node) => node.name)
  graph.nodeRelSize(NODE_REL_SIZE)
  if (typeof graph.nodeOpacity === "function") {
    graph.nodeOpacity(NODE_OPACITY)
  }
  if (typeof graph.linkOpacity === "function") {
    graph.linkOpacity(LINK_OPACITY)
  }
  applyForces()
  refreshAccessors()

  // Alex signature: bottom preview card with type chip, title, excerpt.
  const previewEl = options.root.querySelector("[data-graph-preview]")
  const previewChip = options.root.querySelector("[data-graph-preview-chip]")
  const previewTitle = options.root.querySelector("[data-graph-preview-title]")
  const previewExcerpt = options.root.querySelector("[data-graph-preview-excerpt]")
  let previewHideTimer = 0
  window.addCleanup(() => window.clearTimeout(previewHideTimer))

  const showPreview = (node: GraphNode): void => {
    if (
      !(previewEl instanceof HTMLElement) ||
      !(previewChip instanceof HTMLElement) ||
      !(previewTitle instanceof HTMLElement) ||
      !(previewExcerpt instanceof HTMLElement)
    ) {
      return
    }
    window.clearTimeout(previewHideTimer)
    const notesLabel = options.root.dataset.legendNotes ?? "Notes"
    const tagsLabel = options.root.dataset.legendTags ?? "Tags"
    const linksLabel = options.root.dataset.legendLinks ?? "Links"
    if (node.type === "tag") {
      const template = options.root.dataset.previewTagTemplate ?? "{n} notes"
      previewChip.textContent = tagsLabel
      previewTitle.textContent = `#${node.tag}`
      previewExcerpt.textContent = template.replace("{n}", String(node.degree))
    } else if (node.type === "external") {
      previewChip.textContent = linksLabel
      previewTitle.textContent = node.name
      previewExcerpt.textContent = node.url
    } else {
      previewChip.textContent = notesLabel
      previewTitle.textContent = node.name
      previewExcerpt.textContent = node.excerpt
    }
    previewEl.hidden = false
    previewEl.dataset.visible = "true"
  }

  const hidePreview = (): void => {
    if (!(previewEl instanceof HTMLElement)) {
      return
    }
    window.clearTimeout(previewHideTimer)
    previewHideTimer = window.setTimeout(() => {
      previewEl.dataset.visible = "false"
      previewEl.hidden = true
    }, PREVIEW_HIDE_DELAY_MS)
  }

  graph.onNodeHover((node) => {
    const previousFocus = litId()
    hoveredId = node ? node.id : null
    if (selectedId === null) {
      if (node) {
        showPreview(node)
      } else {
        hidePreview()
      }
    }
    repaintFocusChange(previousFocus)
  })

  if (options.use3d) {
    if (typeof graph.showNavInfo === "function") {
      graph.showNavInfo(false)
    }
    if (typeof graph.enableNavigationControls === "function") {
      graph.enableNavigationControls(true)
    }
    if (typeof graph.controls === "function") {
      const controls = graph.controls()
      controls.autoRotate = false
      controls.autoRotateSpeed = AUTO_ROTATE_SPEED
    }
    graph.warmupTicks(options.layout.warmupTicks ?? 50)
    graph.cooldownTicks(
      options.layout.freezeAfterWarmup ? 0 : (options.layout.cooldownTicks ?? 200),
    )
    if (typeof graph.linkDirectionalParticleWidth === "function") {
      graph.linkDirectionalParticleWidth(1.1)
    }
    if (typeof graph.linkDirectionalParticleSpeed === "function") {
      graph.linkDirectionalParticleSpeed(0.004)
    }
    if (typeof graph.linkDirectionalParticleColor === "function") {
      graph.linkDirectionalParticleColor(() => theme.current.accent)
    }
    if (options.bloomPass && typeof graph.postProcessingComposer === "function") {
      options.bloomPass.strength = isDarkTheme() ? BLOOM_STRENGTH : 0
      options.bloomPass.radius = BLOOM_RADIUS
      options.bloomPass.threshold = BLOOM_THRESHOLD
      graph.postProcessingComposer().addPass(options.bloomPass)
    }
    if (typeof graph.cameraPosition === "function") {
      graph.cameraPosition(INITIAL_CAMERA, INITIAL_LOOK_AT)
      if (tune.zoom !== 1) {
        applyZoom(0)
      }
    }
    paintLabels3d()
    updateFog()
    // Decorative motion is opt-in and pauses with the inspector or tab.
    {
      let twinkleFrame = 0
      const twinkle = (): void => {
        if (
          motionEnabled &&
          !prefersReducedMotion() &&
          !document.hidden &&
          selectedId === null &&
          !dragging
        ) {
          const t = (performance.now() / 1000) * TWINKLE_SPEED
          for (const entry of twinkleMaterials.values()) {
            entry.material.emissiveIntensity =
              entry.base * (1 + TWINKLE_AMPLITUDE * Math.sin(t + entry.phase))
          }
        }
        twinkleFrame = window.requestAnimationFrame(twinkle)
      }
      twinkleFrame = window.requestAnimationFrame(twinkle)
      window.addCleanup(() => window.cancelAnimationFrame(twinkleFrame))
    }
    // Label-distance fade + link-distance culling: merged into a single rAF
    // loop that reads graph.cameraPosition() once per frame instead of
    // twice, running the label-fade pass when options.lod.labelDistance is
    // set and the link-cull pass when options.lod.cullDistance is set.
    // Unlike twinkle above, these are functional/perf thresholds rather
    // than decorative motion, so the loop runs regardless of
    // prefersReducedMotion() — and it is entirely absent (no rAF loop
    // registered at all) unless at least one of labelDistance/cullDistance
    // is explicitly set, preserving current behavior when both are unset.
    // Links touching the currently focused (hovered or selected) node
    // always stay visible regardless of distance, same as before.
    const labelDistance = options.lod.labelDistance
    const cullDistance = options.lod.cullDistance
    if (
      (labelDistance !== undefined ||
        cullDistance !== undefined ||
        options.lod.dotDistance !== undefined) &&
      typeof graph.cameraPosition === "function"
    ) {
      const getCameraPosition = graph.cameraPosition.bind(graph)
      let lodFrame = 0
      const updateLod = (): void => {
        const cam = getCameraPosition() as Partial<Vec3> | undefined
        if (
          cam &&
          typeof cam.x === "number" &&
          typeof cam.y === "number" &&
          typeof cam.z === "number"
        ) {
          // Keep distant LOD stars visible at approximately one screen pixel.
          // Their degree-based size ratio remains intact on narrow viewports.
          const viewportHeight = Math.max(1, options.root.clientHeight || window.innerHeight)
          for (const [id, dot] of nodeDots) {
            const node = fullNodeById.get(id)
            if (!node) continue
            const distance = Math.hypot(
              cam.x - (node.x ?? 0),
              cam.y - (node.y ?? 0),
              cam.z - (node.z ?? 0),
            )
            const scale = Math.max(1, distance / viewportHeight)
            dot.scale.x = dot.scale.y = dot.scale.z = scale
          }
          if (labelDistance !== undefined) {
            for (const entry of labelSprites.values()) {
              const nx = entry.node.x ?? 0
              const ny = entry.node.y ?? 0
              const nz = entry.node.z ?? 0
              const distance = Math.hypot(cam.x - nx, cam.y - ny, cam.z - nz)
              entry.sprite.visible = graphLabelVisible(
                showNodeLabel(entry.node),
                litId() === entry.node.id || (litId() === null && labeledHubIds.has(entry.node.id)),
                distance,
                labelDistance,
              )
              if (entry.sprite.visible) {
                const characters = Array.from(entry.node.name)
                const limit = window.innerWidth < 700 ? 24 : 48
                const text =
                  characters.length > limit
                    ? `${characters.slice(0, limit).join("")}…`
                    : entry.node.name
                if (entry.sprite.text !== text) entry.sprite.text = text
                const projected = graph.graph2ScreenCoords?.(nx, ny, nz)
                entry.sprite.center.set(
                  projected && projected.x > window.innerWidth * 0.6 ? 1 : 0,
                  0.5,
                )
                const textHeight = Math.max(5.5, (distance / viewportHeight) * 11)
                if (Math.abs(entry.sprite.textHeight - textHeight) > 0.5) {
                  entry.sprite.textHeight = textHeight
                }
              }
            }
          }
          if (cullDistance !== undefined) {
            const focus = litId()
            for (const [link, mesh] of linkMeshes) {
              const sourceId = linkEndpointId(link.source)
              const targetId = linkEndpointId(link.target)
              if (focus !== null && (sourceId === focus || targetId === focus)) {
                mesh.visible = true
                continue
              }
              const distance = Math.hypot(
                cam.x - mesh.position.x,
                cam.y - mesh.position.y,
                cam.z - mesh.position.z,
              )
              mesh.visible = !(lodLevelForDistance(distance, cullDistance) === "dot")
            }
          }
        }
        lodFrame = window.requestAnimationFrame(updateLod)
      }
      lodFrame = window.requestAnimationFrame(updateLod)
      window.addCleanup(() => window.cancelAnimationFrame(lodFrame))
    }
  } else {
    graph.warmupTicks(options.layout.warmupTicks ?? 60)
    graph.cooldownTicks(
      options.layout.freezeAfterWarmup ? 0 : (options.layout.cooldownTicks ?? 180),
    )
    graph.nodeCanvasObject((node, ctx, globalScale) => {
      const radius = nodeWorldRadius(node)
      const x = node.x ?? 0
      const y = node.y ?? 0
      ctx.save()
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = nodeFill(node)
      ctx.fill()
      if (node.isHub) {
        ctx.strokeStyle = isActive(node.id)
          ? theme.current.accent
          : withAlpha(theme.current.accent, DIM_ALPHA)
        ctx.lineWidth = 1.2 / globalScale
        ctx.stroke()
      }
      if (showNodeLabel(node)) {
        const fontSize = 11.5 / globalScale
        ctx.font = `${fontSize}px ${theme.current.font}`
        ctx.fillStyle = isActive(node.id)
          ? theme.current.ink
          : withAlpha(theme.current.ink, DIM_ALPHA)
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"
        ctx.fillText(node.name, x, y - radius - 6)
      }
      ctx.restore()
    })
    if (typeof graph.nodePointerAreaPaint === "function") {
      graph.nodePointerAreaPaint((node, color, ctx) => {
        const radius = nodeWorldRadius(node) + 8
        ctx.beginPath()
        ctx.arc(node.x ?? 0, node.y ?? 0, radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })
    }
  }

  const inspectEl = options.root.querySelector("[data-graph-inspect]")
  const inspectChip = options.root.querySelector("[data-graph-inspect-chip]")
  const inspectTitle = options.root.querySelector("[data-graph-inspect-title]")
  const inspectExcerpt = options.root.querySelector("[data-graph-inspect-excerpt]")
  const inspectTags = options.root.querySelector("[data-graph-inspect-tags]")
  const inspectConnected = options.root.querySelector("[data-graph-inspect-connected]")
  const inspectOpen = options.root.querySelector("[data-graph-inspect-open]")

  const setRailOpen = (open: boolean): void => {
    options.root.dataset.railOpen = open ? "true" : "false"
    const toggle = options.root.querySelector("[data-graph-rail-toggle]")
    const scrim = options.root.querySelector("[data-graph-rail-scrim]")
    const rail = options.root.querySelector("#graph-landing-rail")
    if (toggle instanceof HTMLButtonElement) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false")
    }
    if (rail instanceof HTMLElement) {
      rail.setAttribute("aria-hidden", open ? "false" : "true")
    }
    if (scrim instanceof HTMLElement) {
      scrim.hidden = !open
    }
  }

  const motionButton = options.root.querySelector("[data-graph-motion]")
  const updateMotion = (): void => {
    const reduced = prefersReducedMotion()
    const active = motionEnabled && !reduced && !document.hidden && selectedId === null && !dragging
    if (typeof graph.controls === "function") {
      graph.controls().autoRotate = active
    }
    if (motionButton instanceof HTMLButtonElement) {
      motionButton.disabled = reduced || !options.use3d
      motionButton.setAttribute("aria-pressed", String(motionEnabled && !reduced))
      motionButton.textContent =
        motionEnabled && !reduced
          ? (motionButton.dataset.motionStop ?? "Pause motion")
          : (motionButton.dataset.motionStart ?? "Enable motion")
      motionButton.title = reduced
        ? (options.root.dataset.motionReduced ?? "Reduced motion enabled")
        : motionButton.textContent
    }
    if (!active) {
      for (const entry of twinkleMaterials.values()) entry.material.emissiveIntensity = entry.base
    }
    refreshParticles()
  }
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
  motionPreference.addEventListener("change", updateMotion)
  document.addEventListener("visibilitychange", updateMotion)
  window.addCleanup(() => {
    motionPreference.removeEventListener("change", updateMotion)
    document.removeEventListener("visibilitychange", updateMotion)
  })
  updateMotion()

  const connectedNeighbors = (node: GraphNode): GraphNode[] => {
    const ids = neighbors.get(node.id) ?? new Set<string>()
    const found: GraphNode[] = []
    for (const id of ids) {
      const neighbor = data.nodes.find((entry) => entry.id === id)
      if (neighbor) {
        found.push(neighbor)
      }
    }
    return found.sort((a, b) => b.degree - a.degree)
  }

  const fillInspect = (node: GraphNode): void => {
    if (
      !(inspectEl instanceof HTMLElement) ||
      !(inspectChip instanceof HTMLElement) ||
      !(inspectTitle instanceof HTMLElement) ||
      !(inspectExcerpt instanceof HTMLElement) ||
      !(inspectTags instanceof HTMLElement) ||
      !(inspectConnected instanceof HTMLElement)
    ) {
      return
    }
    const notesLabel = options.root.dataset.legendNotes ?? "Notes"
    const tagsLabel = options.root.dataset.legendTags ?? "Tags"
    const linksLabel = options.root.dataset.legendLinks ?? "Links"
    const emptyLabel = options.root.dataset.inspectEmpty ?? "No direct connections"
    if (node.type === "tag") {
      inspectChip.textContent = tagsLabel
      inspectTitle.textContent = `#${node.tag}`
      inspectExcerpt.textContent = (options.root.dataset.previewTagTemplate ?? "{n} notes").replace(
        "{n}",
        String(node.degree),
      )
    } else if (node.type === "external") {
      inspectChip.textContent = linksLabel
      inspectTitle.textContent = node.name
      inspectExcerpt.textContent = node.url
    } else {
      inspectChip.textContent = notesLabel
      inspectTitle.textContent = node.name
      inspectExcerpt.textContent = node.excerpt
    }
    const tagItems = node.tags.map((tag) => {
      const item = document.createElement("li")
      item.textContent = tag
      return item
    })
    inspectTags.replaceChildren(...tagItems)
    inspectTags.hidden = tagItems.length === 0
    const related = connectedNeighbors(node).slice(0, 12)
    if (related.length === 0) {
      const empty = document.createElement("li")
      empty.className = "graph-landing__inspect-empty"
      empty.textContent = emptyLabel
      inspectConnected.replaceChildren(empty)
    } else {
      inspectConnected.replaceChildren(
        ...related.map((neighbor) => {
          const item = document.createElement("li")
          const button = document.createElement("button")
          button.type = "button"
          button.className = "graph-landing__inspect-link"
          button.dataset.graphInspectId = neighbor.id
          const kind =
            neighbor.type === "tag"
              ? tagsLabel
              : neighbor.type === "external"
                ? linksLabel
                : notesLabel
          const kindEl = document.createElement("span")
          kindEl.textContent = kind
          const nameEl = document.createElement("strong")
          nameEl.textContent = neighbor.type === "tag" ? `#${neighbor.tag}` : neighbor.name
          button.append(kindEl, nameEl)
          item.append(button)
          return item
        }),
      )
    }
    if (inspectOpen instanceof HTMLAnchorElement) {
      if (node.type === "note" && node.slug.length > 0) {
        inspectOpen.hidden = false
        inspectOpen.href = resolveNoteUrl(node.slug).toString()
        inspectOpen.textContent = options.root.dataset.inspectRead ?? "Read note"
        inspectOpen.removeAttribute("target")
        inspectOpen.removeAttribute("rel")
      } else if (node.type === "external" && node.url.length > 0) {
        inspectOpen.hidden = false
        inspectOpen.href = node.url
        inspectOpen.textContent = options.root.dataset.inspectOpenExternal ?? "Open"
        inspectOpen.target = "_blank"
        inspectOpen.rel = "noopener noreferrer"
      } else {
        inspectOpen.hidden = true
        inspectOpen.removeAttribute("href")
        inspectOpen.removeAttribute("target")
        inspectOpen.removeAttribute("rel")
      }
    }
    inspectEl.hidden = false
    options.root.dataset.inspecting = "true"
    setRailOpen(false)
    hidePreview()
  }

  const clearSelection = (): void => {
    const previousFocus = litId()
    selectedId = null
    if (inspectEl instanceof HTMLElement) {
      const restoreFocus = inspectEl.contains(document.activeElement)
      inspectEl.hidden = true
      if (restoreFocus) {
        searchInput?.focus({ preventScroll: true })
        closeSearch()
      }
    }
    options.root.dataset.inspecting = "false"
    hoveredId = null
    updateMotion()
    repaintFocusChange(previousFocus)
  }

  const selectNode = (node: GraphNode): void => {
    const previousFocus = litId()
    selectedId = node.id
    updateMotion()
    fillInspect(node)
    repaintFocusChange(previousFocus)
  }

  const activateNode = (node: GraphNode, center = false): void => {
    // Lazily pull the clicked node's neighbors into the live simulation
    // before selecting it, so `fillInspect`'s connectedNeighbors reflects the
    // freshly-expanded set immediately. No-op when maxRenderedNodes is unset.
    if (expandFromNode(node.id)) {
      applyView(true)
    }
    selectNode(node)
    if (center) {
      cameraTarget = { x: node.x ?? 0, y: node.y ?? 0, z: node.z ?? 0 }
      const ms = prefersReducedMotion() ? 0 : 450
      if (options.use3d && graph.cameraPosition) {
        zoomBaseDistance = INITIAL_CAMERA_DISTANCE
        graph.cameraPosition(
          {
            x: cameraTarget.x + INITIAL_CAMERA.x / tune.zoom,
            y: cameraTarget.y + INITIAL_CAMERA.y / tune.zoom,
            z: cameraTarget.z + INITIAL_CAMERA.z / tune.zoom,
          },
          cameraTarget,
          ms,
        )
      } else {
        graph.centerAt?.(cameraTarget.x, cameraTarget.y, ms)
      }
    }
  }

  const searchInput = options.root.querySelector<HTMLInputElement>("[data-graph-search]")
  const searchResults = options.root.querySelector<HTMLElement>("[data-graph-search-results]")
  const searchStatus = options.root.querySelector<HTMLElement>("[data-graph-search-status]")
  const closeSearch = (): void => {
    if (searchResults) searchResults.hidden = true
    if (searchStatus) searchStatus.textContent = ""
  }
  const renderSearch = (): void => {
    if (!searchInput || !searchResults) return
    const matches = searchGraphNodes(options.fullData.nodes, searchInput.value)
    searchResults.replaceChildren(
      ...matches.map((node) => {
        const item = document.createElement("li")
        const button = document.createElement("button")
        button.type = "button"
        button.className = "graph-landing__search-result"
        button.dataset.graphSearchId = node.id
        button.textContent = node.name
        item.append(button)
        return item
      }),
    )
    searchResults.hidden = matches.length === 0
    if (searchStatus)
      searchStatus.textContent = !searchInput.value.trim()
        ? ""
        : matches.length
          ? (options.root.dataset.searchCount ?? "{n} results").replace(
              "{n}",
              String(matches.length),
            )
          : (options.root.dataset.searchEmpty ?? "No matching notes")
  }
  const searchKey = (event: KeyboardEvent): void => {
    if (event.isComposing) return
    if (event.key === "ArrowDown") {
      event.preventDefault()
      searchResults?.querySelector<HTMLButtonElement>("button")?.focus()
    }
    if (event.key === "Enter") {
      event.preventDefault()
      searchResults?.querySelector<HTMLButtonElement>("button")?.click()
    }
    if (event.key === "Escape") {
      event.stopPropagation()
      closeSearch()
    }
  }
  searchInput?.addEventListener("input", renderSearch)
  searchInput?.addEventListener("focus", renderSearch)
  searchInput?.addEventListener("keydown", searchKey)
  window.addCleanup(() => {
    searchInput?.removeEventListener("input", renderSearch)
    searchInput?.removeEventListener("focus", renderSearch)
    searchInput?.removeEventListener("keydown", searchKey)
  })

  let libraryHandledClick = false
  graph.onNodeClick((node, event) => {
    if (!node) {
      return
    }
    libraryHandledClick = true
    if (event && typeof event.stopPropagation === "function") {
      event.stopPropagation()
    }
    activateNode(node)
  })
  if (typeof graph.onBackgroundClick === "function") {
    graph.onBackgroundClick(() => {
      clearSelection()
      setRailOpen(false)
    })
  }

  const mount = options.root.querySelector("#graph-landing-mount")
  if (mount instanceof HTMLElement) {
    const resize = new ResizeObserver(() => {
      graph.width(mount.clientWidth)
      graph.height(mount.clientHeight)
      if (selectedId === null && !initialFit) fitOverview()
    })
    resize.observe(mount)
    window.addCleanup(() => resize.disconnect())
    let pointerDown: { x: number; y: number } | null = null
    let pointerClickTimer = 0
    const onPointerDown = (event: PointerEvent): void => {
      pointerDown = { x: event.clientX, y: event.clientY }
      libraryHandledClick = false
      dragging = true
      updateMotion()
      closeSearch()
    }
    const nearestNode = (clientX: number, clientY: number): GraphNode | null => {
      if (typeof graph.graph2ScreenCoords !== "function") {
        return null
      }
      const rect = mount.getBoundingClientRect()
      const localX = clientX - rect.left
      const localY = clientY - rect.top
      let best: GraphNode | null = null
      let bestDist = 22 * 22
      for (const node of currentData().nodes) {
        if (node.x === undefined || node.y === undefined) {
          continue
        }
        const screen = graph.graph2ScreenCoords(node.x, node.y, node.z ?? 0)
        const localDist = (screen.x - localX) ** 2 + (screen.y - localY) ** 2
        const dist = localDist
        if (dist < bestDist) {
          bestDist = dist
          best = node
        }
      }
      return best
    }
    const onPointerUp = (event: PointerEvent): void => {
      const start = pointerDown
      pointerDown = null
      dragging = false
      updateMotion()
      if (!start) {
        return
      }
      const moved = (event.clientX - start.x) ** 2 + (event.clientY - start.y) ** 2
      if (moved > 25) {
        return
      }
      window.clearTimeout(pointerClickTimer)
      pointerClickTimer = window.setTimeout(() => {
        if (libraryHandledClick) {
          libraryHandledClick = false
          return
        }
        const hit = nearestNode(event.clientX, event.clientY)
        if (hit) {
          activateNode(hit)
        } else {
          clearSelection()
        }
      }, 0)
    }
    const onPointerCancel = (): void => {
      pointerDown = null
      dragging = false
      updateMotion()
    }
    mount.addEventListener("pointerdown", onPointerDown, true)
    mount.addEventListener("pointerup", onPointerUp, true)
    mount.addEventListener("pointercancel", onPointerCancel, true)
    window.addCleanup(() => {
      window.clearTimeout(pointerClickTimer)
      mount.removeEventListener("pointerdown", onPointerDown, true)
      mount.removeEventListener("pointerup", onPointerUp, true)
      mount.removeEventListener("pointercancel", onPointerCancel, true)
    })
  }

  setPressed(options.root, "[data-graph-lens]", state.lens, "data-graph-lens")
  renderLegend()
  renderFacets()
  if (state.lens !== "all") {
    applyView()
  }
  if (!options.use3d) {
    if (typeof graph.centerAt === "function") {
      graph.centerAt(0, 0, 0)
    }
    if (typeof graph.zoom === "function") {
      graph.zoom(1, 0)
    }
  }

  const onThemeChange = (): void => {
    theme.current = readTheme()
    graph.backgroundColor(activeBackground())
    updateFog()
    if (options.bloomPass) {
      options.bloomPass.strength = isDarkTheme() ? BLOOM_STRENGTH : 0
      options.bloomPass.radius = BLOOM_RADIUS
      options.bloomPass.threshold = BLOOM_THRESHOLD
    }
    refreshAccessors()
    paintLabels3d()
    renderLegend()
  }
  document.addEventListener("themechange", onThemeChange)
  window.addCleanup(() => document.removeEventListener("themechange", onThemeChange))

  const onRootClick = (event: Event): void => {
    const target = event.target
    if (!(target instanceof Element)) {
      return
    }
    if (!target.closest(".graph-landing__search")) closeSearch()
    if (target.closest("[data-graph-motion]")) {
      motionEnabled = !motionEnabled
      updateMotion()
      return
    }
    if (target.closest("[data-graph-reset]")) {
      clearSelection()
      if (searchInput) searchInput.value = ""
      closeSearch()
      cameraTarget = INITIAL_LOOK_AT
      tune.zoom = 1
      persistTune(tune)
      if (zoomInput instanceof HTMLInputElement) zoomInput.value = "100"
      state.focusTag = state.focusFolder = null
      setLens("all")
      if (options.use3d) fitOverview()
      else {
        graph.centerAt?.(0, 0, 0)
        graph.zoom?.(1, 0)
      }
      updateFog()
      return
    }
    const result = target.closest<HTMLElement>("[data-graph-search-id]")
    if (result?.dataset.graphSearchId) {
      const node = fullNodeById.get(result.dataset.graphSearchId)
      if (node) {
        activateNode(node, true)
        closeSearch()
        const title = options.root.querySelector<HTMLElement>("[data-graph-inspect-title]")
        title?.setAttribute("tabindex", "-1")
        title?.focus({ preventScroll: true })
      }
      return
    }
    if (target.closest("[data-graph-inspect-close]")) {
      clearSelection()
      return
    }
    if (target.closest("[data-graph-rail-toggle]")) {
      const nextOpen = options.root.dataset.railOpen !== "true"
      if (nextOpen) {
        clearSelection()
      }
      setRailOpen(nextOpen)
      return
    }
    if (target.closest("[data-graph-rail-scrim]")) {
      setRailOpen(false)
      return
    }
    const inspectLink = target.closest("[data-graph-inspect-id]")
    if (inspectLink instanceof HTMLElement && inspectLink.dataset.graphInspectId) {
      // Look up in the full index, not just the currently-rendered subset —
      // an inspect-panel neighbor link can point at a node that hasn't been
      // pulled into `data` yet when maxRenderedNodes is set. Route through
      // activateNode (same as a direct graph click) so that node is expanded
      // into the live simulation before it's selected.
      const next = options.fullData.nodes.find(
        (entry) => entry.id === inspectLink.dataset.graphInspectId,
      )
      if (next) {
        activateNode(next, true)
      }
      return
    }
    const lensBtn = target.closest("[data-graph-lens]")
    if (
      lensBtn instanceof HTMLElement &&
      lensBtn.dataset.graphLens &&
      isLens(lensBtn.dataset.graphLens)
    ) {
      setLens(lensBtn.dataset.graphLens)
      return
    }
    const tagBtn = target.closest("[data-graph-tag]")
    if (tagBtn instanceof HTMLElement && tagBtn.dataset.graphTag) {
      setFocusTag(tagBtn.dataset.graphTag)
      return
    }
    const folderBtn = target.closest("[data-graph-folder]")
    if (folderBtn instanceof HTMLElement && folderBtn.dataset.graphFolder) {
      setFocusFolder(folderBtn.dataset.graphFolder)
      return
    }
    if (target.closest("[data-graph-relayout]")) {
      settleLayout()
      return
    }
    const labelsBtn = target.closest("[data-graph-labels]")
    if (labelsBtn instanceof HTMLButtonElement) {
      state.allLabels = !state.allLabels
      labelsBtn.setAttribute("aria-pressed", state.allLabels ? "true" : "false")
      const show = labelsBtn.dataset.labelShow ?? "Labels"
      const hide = labelsBtn.dataset.labelHide ?? "Labels"
      const tooltip = state.allLabels ? hide : show
      labelsBtn.title = tooltip
      labelsBtn.setAttribute("aria-label", tooltip)
      paintLabels3d()
      return
    }
    if (target.closest("[data-graph-theme]")) {
      const next = isDarkTheme() ? "light" : "dark"
      document.documentElement.setAttribute("saved-theme", next)
      localStorage.setItem("theme", next)
      document.body.classList.remove("theme-dark", "theme-light")
      document.body.classList.add(`theme-${next}`)
      document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }))
      return
    }
    const tagsToggle = target.closest("[data-graph-tags-toggle]")
    if (tagsToggle instanceof HTMLButtonElement) {
      const panel = options.root.querySelector(".graph-landing__tags")
      if (panel instanceof HTMLElement) {
        const open = panel.dataset.open === "true"
        panel.dataset.open = open ? "false" : "true"
        tagsToggle.setAttribute("aria-expanded", open ? "false" : "true")
      }
    }
  }
  const nodeScaleInput = options.root.querySelector("[data-graph-node-scale]")
  const edgeScaleInput = options.root.querySelector("[data-graph-edge-scale]")
  if (nodeScaleInput instanceof HTMLInputElement) {
    nodeScaleInput.value = String(Math.round(tune.nodeScale * 100))
    const onNodeScale = (): void => {
      tune.nodeScale = Number(nodeScaleInput.value) / 100
      persistTune(tune)
      applyForces()
      settleLayout()
      refreshAccessors()
      if (options.use3d) {
        paintLabels3d()
      }
    }
    nodeScaleInput.addEventListener("input", onNodeScale)
    window.addCleanup(() => nodeScaleInput.removeEventListener("input", onNodeScale))
  }
  if (edgeScaleInput instanceof HTMLInputElement) {
    edgeScaleInput.value = String(Math.round(tune.edgeScale * 100))
    const onEdgeScale = (): void => {
      tune.edgeScale = Number(edgeScaleInput.value) / 100
      persistTune(tune)
      refreshAccessors()
    }
    edgeScaleInput.addEventListener("input", onEdgeScale)
    window.addCleanup(() => edgeScaleInput.removeEventListener("input", onEdgeScale))
  }
  const hubGravityInput = options.root.querySelector("[data-graph-hub-gravity]")
  if (hubGravityInput instanceof HTMLInputElement) {
    hubGravityInput.value = String(Math.round(tune.hubGravity * 100))
    const onHubGravity = (): void => {
      const value = Number(hubGravityInput.value) / 100
      tune.hubGravity = Number.isFinite(value) ? Math.min(2, Math.max(0, value)) : 1
      persistTune(tune)
      applyForces()
      settleLayout()
    }
    hubGravityInput.addEventListener("input", onHubGravity)
    window.addCleanup(() => hubGravityInput.removeEventListener("input", onHubGravity))
  }
  const zoomInput = options.root.querySelector("[data-graph-zoom]")
  if (zoomInput instanceof HTMLInputElement) {
    zoomInput.value = String(Math.round(tune.zoom * 100))
    const onZoom = (): void => {
      tune.zoom = Number(zoomInput.value) / 100
      persistTune(tune)
      applyZoom(200)
    }
    zoomInput.addEventListener("input", onZoom)
    window.addCleanup(() => zoomInput.removeEventListener("input", onZoom))
  }
  const spreadInput = options.root.querySelector("[data-graph-spread]")
  if (spreadInput instanceof HTMLInputElement) {
    spreadInput.value = String(Math.round(tune.spread * 100))
    const onSpread = (): void => {
      tune.spread = Number(spreadInput.value) / 100
      persistTune(tune)
      applyForces()
      settleLayout()
    }
    spreadInput.addEventListener("input", onSpread)
    window.addCleanup(() => spreadInput.removeEventListener("input", onSpread))
  }

  setRailOpen(false)
  options.root.addEventListener("click", onRootClick)
  window.addCleanup(() => options.root.removeEventListener("click", onRootClick))

  const onKeyDown = (event: KeyboardEvent): void => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault()
      searchInput?.focus()
    }
    if (event.key === "Escape") {
      if (searchResults && !searchResults.hidden) {
        searchInput?.focus()
        closeSearch()
        return
      }
      if (options.root.dataset.railOpen === "true") {
        setRailOpen(false)
        return
      }
      clearSelection()
    }
  }
  window.addEventListener("keydown", onKeyDown)
  window.addCleanup(() => window.removeEventListener("keydown", onKeyDown))
}

interface YoutubePlayer {
  playVideo: () => void
  loadVideoById: (videoId: string) => void
  pauseVideo: () => void
  mute: () => void
  unMute: () => void
  setVolume: (volume: number) => void
  getPlayerState: () => number
  destroy: () => void
}

interface YoutubeNamespace {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string
      width: string
      height: string
      playerVars: Record<string, number | string>
      events: {
        onReady: (event: { target: YoutubePlayer }) => void
        onStateChange: (event: { data: number; target: YoutubePlayer }) => void
        onError: () => void
      }
    },
  ) => YoutubePlayer
  PlayerState: {
    ENDED: number
  }
}

interface YoutubeWindow extends Window {
  YT?: YoutubeNamespace
  onYouTubeIframeAPIReady?: () => void
}

function prefersReducedData(): boolean {
  return window.matchMedia("(prefers-reduced-data: reduce)").matches
}

function readAmbientStopped(): boolean {
  try {
    return window.localStorage.getItem(AUDIO_STORAGE_KEY) === "stopped"
  } catch (error) {
    console.error("[graph-landing] could not read ambient audio preference", error)
    return false
  }
}

function writeAmbientStopped(stopped: boolean): void {
  try {
    if (stopped) {
      window.localStorage.setItem(AUDIO_STORAGE_KEY, "stopped")
      return
    }
    window.localStorage.removeItem(AUDIO_STORAGE_KEY)
  } catch (error) {
    console.error("[graph-landing] could not persist ambient audio preference", error)
  }
}

function fadeVolume(args: {
  from: number
  to: number
  durationMs: number
  apply: (volume: number) => void
}): () => void {
  const started = performance.now()
  let frame = 0
  const tick = (now: number): void => {
    const t = Math.min(1, (now - started) / args.durationMs)
    const eased = t * t
    args.apply(args.from + (args.to - args.from) * eased)
    if (t < 1) {
      frame = window.requestAnimationFrame(tick)
    }
  }
  frame = window.requestAnimationFrame(tick)
  return (): void => {
    window.cancelAnimationFrame(frame)
  }
}

function loadYoutubeApi(): Promise<YoutubeNamespace> {
  const existing = (window as YoutubeWindow).YT
  if (existing && typeof existing.Player === "function") {
    return Promise.resolve(existing)
  }
  return new Promise((resolve, reject) => {
    const youtubeWindow = window as YoutubeWindow
    const previous = youtubeWindow.onYouTubeIframeAPIReady
    youtubeWindow.onYouTubeIframeAPIReady = () => {
      if (typeof previous === "function") {
        previous()
      }
      const api = youtubeWindow.YT
      if (!api || typeof api.Player !== "function") {
        reject(new Error("graph-landing: YouTube API missing Player"))
        return
      }
      resolve(api)
    }
    if (!document.querySelector("script[data-graph-youtube-api]")) {
      const script = document.createElement("script")
      script.src = YOUTUBE_IFRAME_API
      script.async = true
      script.dataset.graphYoutubeApi = "1"
      script.addEventListener("error", () => {
        reject(new Error("graph-landing: YouTube API failed to load"))
      })
      document.head.appendChild(script)
    }
  })
}

function createYoutubePlayer(args: {
  api: YoutubeNamespace
  host: HTMLElement
  videoId: string
  onReady: (player: YoutubePlayer) => void
  onEnded: (player: YoutubePlayer) => void
}): YoutubePlayer {
  return new args.api.Player(args.host, {
    videoId: args.videoId,
    width: "200",
    height: "113",
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      mute: 1,
      origin: window.location.origin,
      playsinline: 1,
      rel: 0,
    },
    events: {
      onReady: (event) => {
        args.onReady(event.target)
      },
      onStateChange: (event) => {
        if (event.data === args.api.PlayerState.ENDED) {
          args.onEnded(event.target)
        }
      },
      onError: () => {
        console.error("[graph-landing] ambient YouTube player failed")
      },
    },
  })
}

function bindAmbientAudio(root: HTMLElement): void {
  const button = root.querySelector("[data-graph-audio-toggle]")
  const host = root.querySelector("[data-graph-audio-host]")
  const libraryToggle = root.querySelector("[data-graph-music-library-toggle]")
  const library = root.querySelector("[data-graph-music-library]")
  const trackList = root.querySelector("[data-graph-music-track-list]")
  const status = root.querySelector("[data-graph-music-status]")
  if (
    !(button instanceof HTMLButtonElement) ||
    !(host instanceof HTMLElement) ||
    !(libraryToggle instanceof HTMLButtonElement) ||
    !(library instanceof HTMLElement) ||
    !(trackList instanceof HTMLElement) ||
    !(status instanceof HTMLElement)
  ) {
    return
  }

  const stopLabel = root.dataset.audioStop ?? "Stop music"
  const playLabel = root.dataset.audioPlay ?? "Play music"
  const libraryOpenLabel = root.dataset.musicLibraryOpen ?? "Open record collection"
  const libraryCloseLabel = root.dataset.musicLibraryClose ?? "Close record collection"
  const currentTrackLabel = root.dataset.musicCurrentTrack ?? "Current track"
  const configuredTracks: MusicTrackInput[] = []
  try {
    const parsed = JSON.parse(root.dataset.graphMusicTracks ?? "[]")
    if (Array.isArray(parsed)) {
      for (const value of parsed) {
        if (!value || typeof value !== "object") {
          continue
        }
        const candidate = value as Record<string, unknown>
        if (typeof candidate.title !== "string" || typeof candidate.url !== "string") {
          continue
        }
        if (candidate.artist !== undefined && typeof candidate.artist !== "string") {
          continue
        }
        configuredTracks.push({
          title: candidate.title,
          ...(typeof candidate.artist === "string" ? { artist: candidate.artist } : {}),
          url: candidate.url,
        })
      }
    }
  } catch {
    // Invalid markup must retain the built-in ambient track.
  }
  const tracks: YoutubeTrack[] = youtubeTracks(configuredTracks)
  if (tracks.length === 0) {
    tracks.push({ title: "Ambient track", videoId: AMBIENT_VIDEO_ID })
  }
  let currentVideoIndex = 0
  let player: YoutubePlayer | null = null
  let playerReady = false
  let cancelFade: (() => void) | null = null
  let wanted = !readAmbientStopped()
  let started = false
  let userActivated = false

  const currentTrack = (): YoutubeTrack =>
    tracks[currentVideoIndex] ?? tracks[0] ?? { title: "Ambient track", videoId: AMBIENT_VIDEO_ID }

  const setRecordArtwork = (videoId: string): void => {
    button.style.setProperty(
      "--graph-music-artwork",
      `url("https://i.ytimg.com/vi/${videoId}/hqdefault.jpg")`,
    )
  }

  const currentVideoId = (): string => currentTrack().videoId

  const renderTracks = (): void => {
    trackList.replaceChildren()
    tracks.forEach((track, index) => {
      const trackButton = document.createElement("button")
      trackButton.type = "button"
      trackButton.className = "graph-landing__music-track"
      trackButton.dataset.graphMusicTrackIndex = String(index)
      trackButton.setAttribute("aria-current", index === currentVideoIndex ? "true" : "false")

      const cover = document.createElement("img")
      cover.className = "graph-landing__music-track-cover"
      cover.src = `https://i.ytimg.com/vi/${track.videoId}/hqdefault.jpg`
      cover.alt = ""
      cover.loading = "lazy"

      const copy = document.createElement("span")
      copy.className = "graph-landing__music-track-copy"
      const title = document.createElement("span")
      title.className = "graph-landing__music-track-title"
      title.textContent = track.title
      copy.appendChild(title)
      if (track.artist) {
        const artist = document.createElement("span")
        artist.className = "graph-landing__music-track-artist"
        artist.textContent = track.artist
        copy.appendChild(artist)
      }
      trackButton.append(cover, copy)
      trackList.appendChild(trackButton)
    })
    status.textContent = `${currentTrackLabel}: ${currentTrack().title}`
  }

  const setLibraryOpen = (open: boolean): void => {
    root.dataset.musicLibraryOpen = open ? "true" : "false"
    library.hidden = !open
    library.setAttribute("aria-hidden", open ? "false" : "true")
    libraryToggle.setAttribute("aria-expanded", open ? "true" : "false")
    libraryToggle.setAttribute("aria-label", open ? libraryCloseLabel : libraryOpenLabel)
    libraryToggle.title = open ? libraryCloseLabel : libraryOpenLabel
  }

  const setButton = (playing: boolean): void => {
    button.setAttribute("aria-pressed", playing ? "true" : "false")
    button.setAttribute("aria-label", playing ? stopLabel : playLabel)
    button.title = playing ? stopLabel : playLabel
    button.dataset.playing = playing ? "true" : "false"
  }

  const stopFade = (): void => {
    if (cancelFade) {
      cancelFade()
      cancelFade = null
    }
  }

  const applyVolume = (volume: number): void => {
    if (!player) {
      return
    }
    player.setVolume(Math.max(0, Math.min(AMBIENT_MAX_VOLUME, volume)))
  }

  const beginPlayback = (readyPlayer: YoutubePlayer): void => {
    if (!wanted || started) {
      return
    }
    started = true
    setButton(true)
    readyPlayer.unMute()
    applyVolume(0)
    readyPlayer.playVideo()
    stopFade()
    cancelFade = fadeVolume({
      from: 0,
      to: AMBIENT_MAX_VOLUME,
      durationMs: AMBIENT_FADE_MS,
      apply: applyVolume,
    })
  }

  const pauseAmbient = (): void => {
    wanted = false
    started = false
    stopFade()
    writeAmbientStopped(true)
    if (player) {
      player.mute()
      player.pauseVideo()
      applyVolume(0)
    }
    setButton(false)
  }

  const primePlayer = async (): Promise<void> => {
    if (player) {
      return
    }
    try {
      const api = await loadYoutubeApi()
      if (player) {
        return
      }
      player = createYoutubePlayer({
        api,
        host,
        videoId: currentVideoId(),
        onReady: (readyPlayer) => {
          playerReady = true
          readyPlayer.mute()
          applyVolume(0)
          // Muted start is allowed without a gesture; unmute waits for a tap.
          readyPlayer.playVideo()
          if (wanted && userActivated) {
            beginPlayback(readyPlayer)
          }
        },
        onEnded: (endedPlayer) => {
          if (!wanted) {
            return
          }
          currentVideoIndex = (currentVideoIndex + 1) % tracks.length
          const nextVideoId = currentVideoId()
          setRecordArtwork(nextVideoId)
          renderTracks()
          endedPlayer.loadVideoById(nextVideoId)
          applyVolume(started ? AMBIENT_MAX_VOLUME : 0)
        },
      })
    } catch (error) {
      console.error("[graph-landing] ambient audio unavailable", error)
    }
  }

  const unlock = (event: Event): void => {
    const target = event.target
    if (
      target instanceof Element &&
      target.closest(
        "[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]",
      )
    ) {
      return
    }
    if (!wanted || started || prefersReducedData()) {
      return
    }
    userActivated = true
    if (playerReady && player) {
      beginPlayback(player)
      return
    }
    void primePlayer()
  }

  const onToggle = (): void => {
    if (wanted && started) {
      pauseAmbient()
      return
    }
    userActivated = true
    wanted = true
    writeAmbientStopped(false)
    if (playerReady && player) {
      beginPlayback(player)
      return
    }
    void primePlayer()
  }

  const selectTrack = (index: number): void => {
    if (!Number.isInteger(index) || index < 0 || index >= tracks.length) {
      return
    }
    currentVideoIndex = index
    setRecordArtwork(currentVideoId())
    renderTracks()
    setLibraryOpen(false)
    wanted = true
    userActivated = true
    writeAmbientStopped(false)
    if (playerReady && player) {
      player.loadVideoById(currentVideoId())
      if (started) {
        player.unMute()
        player.playVideo()
        applyVolume(AMBIENT_MAX_VOLUME)
      } else {
        beginPlayback(player)
      }
      return
    }
    void primePlayer()
  }

  const onLibraryToggle = (): void => {
    const open = root.dataset.musicLibraryOpen !== "true"
    if (open) {
      root.dataset.railOpen = "false"
      const railToggle = root.querySelector("[data-graph-rail-toggle]")
      const rail = root.querySelector("#graph-landing-rail")
      const railScrim = root.querySelector("[data-graph-rail-scrim]")
      if (railToggle instanceof HTMLButtonElement) {
        railToggle.setAttribute("aria-expanded", "false")
      }
      if (rail instanceof HTMLElement) {
        rail.setAttribute("aria-hidden", "true")
      }
      if (railScrim instanceof HTMLElement) {
        railScrim.hidden = true
      }
    }
    setLibraryOpen(open)
  }

  const onTrackClick = (event: Event): void => {
    const target = event.target
    if (!(target instanceof Element)) {
      return
    }
    const trackButton = target.closest("[data-graph-music-track-index]")
    if (!(trackButton instanceof HTMLButtonElement)) {
      return
    }
    selectTrack(Number(trackButton.dataset.graphMusicTrackIndex))
  }

  const onRootClick = (event: Event): void => {
    if (root.dataset.musicLibraryOpen !== "true") {
      return
    }
    const target = event.target
    if (
      !(target instanceof Element) ||
      !target.closest(".graph-landing__music-dock, .graph-landing__music-library")
    ) {
      setLibraryOpen(false)
    }
  }

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === "Escape" && root.dataset.musicLibraryOpen === "true") {
      setLibraryOpen(false)
      event.stopImmediatePropagation()
    }
  }

  const onVisibility = (): void => {
    if (!player) {
      return
    }
    if (document.hidden) {
      stopFade()
      player.pauseVideo()
      return
    }
    if (wanted && started) {
      player.playVideo()
      applyVolume(AMBIENT_MAX_VOLUME)
    }
  }

  setRecordArtwork(currentVideoId())
  setButton(false)
  renderTracks()
  setLibraryOpen(false)
  void primePlayer()
  button.addEventListener("click", onToggle)
  libraryToggle.addEventListener("click", onLibraryToggle)
  trackList.addEventListener("click", onTrackClick)
  root.addEventListener("click", onRootClick)
  root.addEventListener("pointerdown", unlock, true)
  root.addEventListener("touchstart", unlock, { capture: true, passive: true })
  document.addEventListener("visibilitychange", onVisibility)
  window.addEventListener("keydown", onKeyDown)
  window.addCleanup(() => {
    button.removeEventListener("click", onToggle)
    libraryToggle.removeEventListener("click", onLibraryToggle)
    trackList.removeEventListener("click", onTrackClick)
    root.removeEventListener("click", onRootClick)
    root.removeEventListener("pointerdown", unlock, true)
    root.removeEventListener("touchstart", unlock, true)
    document.removeEventListener("visibilitychange", onVisibility)
    window.removeEventListener("keydown", onKeyDown)
    stopFade()
    if (player) {
      player.pauseVideo()
      player.destroy()
      player = null
    }
  })
}

async function initGraphLanding(): Promise<void> {
  const root = document.querySelector(".graph-landing")
  if (!(root instanceof HTMLElement)) {
    return
  }
  if (root.dataset.graphReady === "1") {
    return
  }
  root.dataset.graphReady = "1"
  bindAmbientAudio(root)

  const canvas = root.querySelector("#graph-landing-mount")
  if (!(canvas instanceof HTMLElement)) {
    throw new Error("graph-landing: mount element #graph-landing-mount is missing")
  }

  const countEls = root.querySelectorAll("[data-graph-counts]")
  // data-locale/data-source-locale are always emitted by GraphLanding.tsx,
  // so these fallbacks are defense-in-depth only (e.g. DOM built outside
  // the real component). They still honor a configured defaultLocale
  // before falling back to "ko", for consistency with the server-side
  // resolution in GraphLanding.tsx.
  const localeId = root.dataset.locale ?? root.dataset.graphDefaultLocale ?? "ko"
  const sourceLocale = root.dataset.sourceLocale ?? root.dataset.graphDefaultLocale ?? "ko"
  const prefixes = (root.dataset.localePrefixes ?? "")
    .split(",")
    .map((prefix) => prefix.trim())
    .filter((prefix) => prefix.length > 0)
  const countsTemplate = root.dataset.countsTemplate ?? "{n} nodes · {m} edges"
  const indexSource = root.dataset.indexSource === "graphIndex" ? "graphIndex" : "contentIndex"
  const graphIndexPath = root.dataset.graphIndexPath ?? ""
  // A malformed/negative dataset value (or a non-finite Number.parseInt
  // result, e.g. "abc" → NaN) must fall back to "render all" / "1 hop"
  // rather than reaching selectRenderedSubset/expandFromNode as NaN, which
  // would otherwise produce an EMPTY rendered graph (ranked.slice(0, NaN)).
  const maxRenderedNodes = parseNonNegativeNumber(root.dataset.maxRenderedNodes, (s) =>
    Number.parseInt(s, 10),
  )
  const parsedExpandHops = root.dataset.expandHops
    ? Number.parseInt(root.dataset.expandHops, 10)
    : 1
  const expandHops = Number.isFinite(parsedExpandHops) ? parsedExpandHops : 1
  const tagCooccurrence: TagCooccurrenceOption =
    root.dataset.tagCoocDisabled === "true"
      ? false
      : root.dataset.tagCoocMaxTagsPerNote || root.dataset.tagCoocMaxEdges
        ? {
            maxTagsPerNote: root.dataset.tagCoocMaxTagsPerNote
              ? Number.parseInt(root.dataset.tagCoocMaxTagsPerNote, 10)
              : undefined,
            maxEdges: root.dataset.tagCoocMaxEdges
              ? Number.parseInt(root.dataset.tagCoocMaxEdges, 10)
              : undefined,
          }
        : undefined
  const graphRenderMode: "auto" | "3d" = root.dataset.graphRenderMode === "3d" ? "3d" : "auto"
  const layoutFreezeAfterWarmup = root.dataset.graphLayoutFreezeAfterWarmup === "true"
  // Same NaN/negative-guarded parse pattern as maxRenderedNodes/expandHops
  // above: a malformed dataset value falls back to "unset" (renderer
  // default) rather than reaching warmupTicks/cooldownTicks/theta as NaN.
  const layoutWarmupTicks = parseNonNegativeNumber(root.dataset.graphLayoutWarmupTicks, (s) =>
    Number.parseInt(s, 10),
  )
  const layoutCooldownTicks = parseNonNegativeNumber(root.dataset.graphLayoutCooldownTicks, (s) =>
    Number.parseInt(s, 10),
  )
  const layoutChargeTheta = parseNonNegativeNumber(
    root.dataset.graphLayoutChargeTheta,
    Number.parseFloat,
  )
  const layoutIncrementalWarmup = root.dataset.graphLayoutIncrementalWarmup === "true"
  // Same NaN/negative-guarded parse pattern as the layout.* fields above: a
  // malformed or absent dataset value falls back to "unset" (LOD entirely
  // disabled — no THREE.LOD wrapping, no label-fade rAF loop), preserving
  // current behavior byte for byte when the lod option is not configured.
  const lodLabelDistance = parseNonNegativeNumber(
    root.dataset.graphLodLabelDistance,
    Number.parseFloat,
  )
  const lodDotDistance = parseNonNegativeNumber(root.dataset.graphLodDotDistance, Number.parseFloat)
  const lodCullDistance = parseNonNegativeNumber(
    root.dataset.graphLodCullDistance,
    Number.parseFloat,
  )
  const lodFog = root.dataset.graphLodFog === "true"
  const lodNodeResolution = parseNonNegativeNumber(root.dataset.graphLodNodeResolution, (s) =>
    Number.parseInt(s, 10),
  )
  const lodLinkResolution = parseNonNegativeNumber(root.dataset.graphLodLinkResolution, (s) =>
    Number.parseInt(s, 10),
  )
  const interactionIncrementalRepaint = root.dataset.graphInteractionIncrementalRepaint === "true"
  const lodShareLinkResources = root.dataset.graphLodShareLinkResources === "true"

  let cancelled = false
  let graph: ForceGraphInstance | null = null
  const theme = { current: readTheme() }

  const cleanup = (): void => {
    cancelled = true
    if (graph) {
      graph._destructor()
      graph = null
    }
    delete root.dataset.graphReady
  }
  window.addCleanup(cleanup)

  // Kick off every network dependency at once: content index, renderer,
  // and the three.js extras all race in parallel instead of a CDN waterfall.
  // "auto" selects by WebGL capability; reduced motion controls animation.
  // "3d" requires WebGL and shows a notice when that capability is absent.
  const canRender3d = shouldUse3D()
  if (graphRenderMode === "3d" && !canRender3d) {
    showLoadError(canvas, "3D graph unavailable: WebGL is required.")
    return
  }
  const use3d = graphRenderMode === "3d" || canRender3d
  const rendererPromise = loadRenderer(use3d)
  const spritePromise: Promise<SpriteTextCtor | null> = use3d
    ? (import(SPRITE_TEXT) as Promise<{ default?: SpriteTextCtor }>)
        .then((mod) => mod.default ?? null)
        .catch((error: unknown) => {
          console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled", error)
          return null
        })
    : Promise.resolve(null)
  const threePromise: Promise<ThreeApi | null> = use3d
    ? (import(THREE_CDN) as Promise<ThreeApi>).catch((error: unknown) => {
        console.error("[graph-landing] three unavailable; using default node spheres", error)
        return null
      })
    : Promise.resolve(null)
  const bloomPromise: Promise<BloomPass | null> = use3d
    ? (import(UNREAL_BLOOM) as Promise<{ UnrealBloomPass?: new () => BloomPass }>)
        .then((mod) => (mod.UnrealBloomPass ? new mod.UnrealBloomPass() : null))
        .catch((error: unknown) => {
          console.error(
            "[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",
            error,
          )
          return null
        })
    : Promise.resolve(null)
  const collisionPromise: Promise<ForceCollideFactory | null> = use3d
    ? (import(D3_FORCE_3D) as Promise<{ forceCollide?: ForceCollideFactory }>)
        .then((mod) => mod.forceCollide ?? null)
        .catch((error: unknown) => {
          console.error("[graph-landing] d3-force-3d collision force unavailable", error)
          return null
        })
    : Promise.resolve(null)
  // Surface renderer failures via the canvas message; avoid unhandled
  // rejections while the index is still loading.
  rendererPromise.catch(() => undefined)

  let indexRaw: Record<string, unknown>
  try {
    indexRaw =
      indexSource === "graphIndex"
        ? asRecord(await fetch(graphIndexPath).then((response) => response.json()))
        : asRecord(await fetchData)
  } catch (error) {
    showLoadError(canvas, "Graph could not load its index.")
    throw error
  }

  if (cancelled) {
    return
  }

  const fullData = buildGraphData(
    parseContentIndex(indexRaw),
    {
      localeId,
      sourceLocale,
      prefixes,
    },
    tagCooccurrence,
  )
  // When maxRenderedNodes is unset (or >= total nodes), selectRenderedSubset
  // returns `fullData` itself (same reference) — the render/count/debug-handle
  // path below is then byte-for-byte the same as before this option existed.
  const data = selectRenderedSubset(fullData, maxRenderedNodes)

  const countText = countsTemplate
    .replace("{n}", String(fullData.nodes.length))
    .replace("{m}", String(fullData.links.length))
  for (const el of countEls) {
    el.textContent = countText
  }

  let createGraph: (el: HTMLElement) => ForceGraphInstance
  try {
    createGraph = await rendererPromise
  } catch (error) {
    showLoadError(canvas, "Graph could not load. Check your network connection.")
    throw error
  }

  const [spriteText, three, bloomPass, forceCollide] = await Promise.all([
    spritePromise,
    threePromise,
    bloomPromise,
    collisionPromise,
  ])

  if (cancelled) {
    return
  }

  canvas.replaceChildren()
  graph = createGraph(canvas)
  graph.width(canvas.clientWidth)
  graph.height(canvas.clientHeight)
  // Debug handle for browser QA (edge/kind breakdown, hover simulation).
  ;(canvas as HTMLElement & { __graphLanding?: ForceGraphInstance }).__graphLanding = graph
  ;(canvas as HTMLElement & { __graphData?: GraphData }).__graphData = data
  bindGraph(graph, data, theme, {
    use3d,
    root,
    spriteText,
    bloomPass,
    three,
    forceCollide,
    fullData,
    expandHops,
    layout: {
      freezeAfterWarmup: layoutFreezeAfterWarmup,
      warmupTicks: layoutWarmupTicks,
      cooldownTicks: layoutCooldownTicks,
      chargeTheta: layoutChargeTheta,
      incrementalWarmup: layoutIncrementalWarmup,
    },
    lod: {
      labelDistance: lodLabelDistance,
      dotDistance: lodDotDistance,
      cullDistance: lodCullDistance,
      fog: lodFog,
      nodeResolution: lodNodeResolution,
      linkResolution: lodLinkResolution,
      shareLinkResources: lodShareLinkResources,
    },
    interaction: {
      incrementalRepaint: interactionIncrementalRepaint,
    },
  })
}

const PREFERRED_LOCALE_STORAGE_KEY = "preferred-locale"

document.addEventListener("click", (event) => {
  const target = event.target
  if (!(target instanceof Element)) {
    return
  }

  const link = target.closest("a[data-preferred-locale]")
  if (!(link instanceof HTMLAnchorElement)) {
    return
  }

  const locale = link.dataset.preferredLocale
  if (!locale) {
    return
  }

  try {
    localStorage.setItem(PREFERRED_LOCALE_STORAGE_KEY, locale)
  } catch (error) {
    console.error("[graph-landing] failed to persist preferred-locale", error)
  }
})

document.addEventListener("nav", () => {
  void initGraphLanding()
})
