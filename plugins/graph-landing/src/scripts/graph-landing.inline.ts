interface ContentEntry {
  slug: string
  title: string
  links: string[]
  tags: string[]
  multilingual?: {
    translationKey?: string
    locale?: string
  }
}

interface GraphNode {
  id: string
  name: string
  type: "note" | "tag"
  val: number
  degree: number
  isHub: boolean
  tag: string
  slug: string
  folder: string
  tags: string[]
  dominantTag: string
  x?: number
  y?: number
  z?: number
  vx?: number
  vy?: number
  vz?: number
}

interface GraphLink {
  source: string | GraphNode
  target: string | GraphNode
  kind: "wikilink" | "tag"
}

interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

interface ThemeTokens {
  bg: string
  ink: string
  accent: string
  tertiary: string
  gray: string
  font: string
}

interface LocaleContext {
  localeId: string
  sourceLocale: string
  prefixes: string[]
}

type Lens = "all" | "tag" | "folder" | "hub"
type Spacing = "tight" | "normal" | "wide"

interface ViewState {
  lens: Lens
  spacing: Spacing
  allLabels: boolean
  focusTag: string | null
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

interface ForceGraphInstance {
  graphData: (data: GraphData) => unknown
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
  d3Force: (name: string, force?: unknown) =>
    | {
        strength?: (value: number | ((link: GraphLink) => number)) => unknown
        distance?: (value: number | ((link: GraphLink) => number)) => unknown
      }
    | undefined
  d3ReheatSimulation: () => unknown
  showNavInfo?: (show: boolean) => unknown
  enableNodeDrag: (enable: boolean) => unknown
  enableNavigationControls?: (enable: boolean) => unknown
  controls?: () => { autoRotate: boolean; autoRotateSpeed: number }
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
  warmupTicks: (ticks: number) => unknown
  cameraPosition?: (pos: Vec3, lookAt?: Vec3, ms?: number) => unknown
  centerAt?: (x: number, y: number, ms?: number) => unknown
  zoom?: (k: number, ms?: number) => unknown
  graph2ScreenCoords?: (x: number, y: number, z?: number) => { x: number; y: number }
  zoomToFit?: (ms: number, padding: number) => unknown
  postProcessingComposer?: () => { addPass: (pass: unknown) => void }
  linkDirectionalParticles?: (n: number | ((link: GraphLink) => number)) => unknown
  linkDirectionalParticleWidth?: (n: number) => unknown
  linkDirectionalParticleSpeed?: (n: number) => unknown
  linkDirectionalParticleColor?: (fn: (link: GraphLink) => string) => unknown
  _destructor: () => void
}

interface ForceGraphFactory {
  default?: (options?: { controlType?: string }) => (el: HTMLElement) => ForceGraphInstance
}

interface SpriteTextInstance {
  color: string
  textHeight: number
  position: { y: number }
}

type SpriteTextCtor = new (text: string) => SpriteTextInstance

// Pinned esm.sh URLs. Keep THREE_VERSION identical across 3D imports
// (`?deps=three@…`) so 3d-force-graph, SpriteText, and UnrealBloomPass
// share one Three instance. CDN-pinned (not self-hosted) to keep the
// visual upgrade unblocked; self-hosting would add a tsup client entry
// and a static/ copy step without changing the UX.
const THREE_VERSION = "0.179.1"
const FORCE_GRAPH_2D = "https://esm.sh/force-graph@1.51.4"
const FORCE_GRAPH_3D = `https://esm.sh/3d-force-graph@1.80.0?deps=three@${THREE_VERSION}`
const SPRITE_TEXT = `https://esm.sh/three-spritetext@1.9.2?deps=three@${THREE_VERSION}`
const UNREAL_BLOOM = `https://esm.sh/three@${THREE_VERSION}/examples/jsm/postprocessing/UnrealBloomPass.js`

const HUB_COUNT = 8
const LABEL_HUB_COUNT = 5
const HUB_EGO_N = 6
const MIN_NODE_VAL = 1
const MAX_NODE_VAL = 3.5
const CENTER_STRENGTH = 0.065
const NODE_REL_SIZE = 1.8
const NODE_OPACITY = 1
const LINK_OPACITY = 1
const DIM_ALPHA = 0.15
const LENS_STORAGE_KEY = "graph-landing:lens"
const AUTO_ROTATE_SPEED = 0.18
const ZOOM_FIT_PADDING = 100
const HUB_VAL_SCALE = 1.18
const TAG_LENS_VAL_SCALE = 1.35
const FOCUS_TAG_VAL_SCALE = 1.15

const SPACING_PRESETS: Record<Spacing, { charge: number; distance: number }> = {
  tight: { charge: -80, distance: 52 },
  normal: { charge: -130, distance: 70 },
  wide: { charge: -180, distance: 98 },
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
      multilingual,
    })
  }
  return entries
}

function isFolderIndex(slug: string): boolean {
  return slug === "index" || slug.endsWith("/index")
}

function isTagPage(slug: string): boolean {
  return slug === "tags" || slug.startsWith("tags/")
}

function isHomeNote(entry: ContentEntry): boolean {
  return entry.multilingual?.translationKey === "home"
}

function noteBelongsToLocale(entry: ContentEntry, context: LocaleContext): boolean {
  if (entry.multilingual?.locale) {
    return entry.multilingual.locale === context.localeId
  }
  if (entry.slug.startsWith(`${context.localeId}/`)) {
    return true
  }
  const hasKnownPrefix = context.prefixes.some((prefix) => entry.slug.startsWith(`${prefix}/`))
  return !hasKnownPrefix && context.localeId === context.sourceLocale
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

function dominantTagOf(noteTags: string[], tagCounts: Map<string, number>): string {
  if (noteTags.length === 0) {
    return ""
  }
  const ranked = [...noteTags].sort((a, b) => (tagCounts.get(b) ?? 0) - (tagCounts.get(a) ?? 0))
  return ranked[0] ?? ""
}

function buildGraphData(entries: ContentEntry[], context: LocaleContext): GraphData {
  const notes = entries.filter((entry) => {
    if (isFolderIndex(entry.slug) || isTagPage(entry.slug) || isHomeNote(entry)) {
      return false
    }
    return noteBelongsToLocale(entry, context)
  })

  const noteIds = new Set(notes.map((note) => note.slug))
  const degree = new Map<string, number>()
  const links: GraphLink[] = []
  const seenEdges = new Set<string>()
  const tagCounts = new Map<string, number>()

  const bumpDegree = (id: string): void => {
    degree.set(id, (degree.get(id) ?? 0) + 1)
  }

  const addEdge = (source: string, target: string, kind: GraphLink["kind"]): void => {
    const key = source < target ? `${source}|${target}|${kind}` : `${target}|${source}|${kind}`
    if (seenEdges.has(key)) {
      return
    }
    seenEdges.add(key)
    links.push({ source, target, kind })
    bumpDegree(source)
    bumpDegree(target)
  }

  for (const note of notes) {
    for (const target of note.links) {
      if (noteIds.has(target) && target !== note.slug) {
        addEdge(note.slug, target, "wikilink")
      }
    }
  }

  const tagIds = new Set<string>()
  for (const note of notes) {
    for (const tag of note.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1)
      const tagId = `tag:${tag}`
      tagIds.add(tagId)
      addEdge(note.slug, tagId, "tag")
    }
  }

  const rawDegrees = [...degree.values()]
  const minDegree = rawDegrees.length > 0 ? Math.min(...rawDegrees) : 0
  const maxDegree = rawDegrees.length > 0 ? Math.max(...rawDegrees) : 0

  const nodeVal = (id: string): number => {
    const current = degree.get(id) ?? 0
    const scaled = Math.sqrt(current)
    const minScaled = Math.sqrt(minDegree)
    const maxScaled = Math.sqrt(maxDegree)
    const scaledSpan = maxScaled - minScaled
    if (scaledSpan === 0) {
      return (MIN_NODE_VAL + MAX_NODE_VAL) / 2
    }
    return MIN_NODE_VAL + ((scaled - minScaled) / scaledSpan) * (MAX_NODE_VAL - MIN_NODE_VAL)
  }

  const rankedNotes = [...notes].sort((a, b) => (degree.get(b.slug) ?? 0) - (degree.get(a.slug) ?? 0))
  const hubIds = new Set(
    rankedNotes
      .filter((note) => (degree.get(note.slug) ?? 0) > 0)
      .slice(0, HUB_COUNT)
      .map((note) => note.slug),
  )

  const nodes: GraphNode[] = notes.map((note) => ({
    id: note.slug,
    name: note.title,
    type: "note",
    val: nodeVal(note.slug),
    degree: degree.get(note.slug) ?? 0,
    isHub: hubIds.has(note.slug),
    tag: "",
    slug: note.slug,
    folder: folderOf(note.slug),
    tags: note.tags,
    dominantTag: dominantTagOf(note.tags, tagCounts),
  }))

  for (const tagId of tagIds) {
    const tag = tagId.slice("tag:".length)
    nodes.push({
      id: tagId,
      name: tag,
      type: "tag",
      val: clamp(nodeVal(tagId) * 0.7, MIN_NODE_VAL, MAX_NODE_VAL),
      degree: degree.get(tagId) ?? 0,
      isHub: false,
      tag,
      slug: `tags/${tag}`,
      folder: "tag",
      tags: [tag],
      dominantTag: tag,
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
    const source = linkEndpointId(link.source)
    const target = linkEndpointId(link.target)
    add(source, target)
    add(target, source)
  }
  return neighbors
}

function linkEndpointId(endpoint: string | GraphNode): string {
  if (typeof endpoint === "string") {
    return endpoint
  }
  return endpoint.id
}

function resolveCssColor(variableName: string, fallback: string): string {
  const probe = document.createElement("span")
  probe.style.color = `var(${variableName})`
  probe.style.position = "absolute"
  probe.style.visibility = "hidden"
  document.body.appendChild(probe)
  const resolved = getComputedStyle(probe).color
  probe.remove()
  return resolved || fallback
}

function readTheme(): ThemeTokens {
  const font = getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim()
  return {
    bg: resolveCssColor("--light", "#ffffff"),
    ink: resolveCssColor("--darkgray", "#0f0f0f"),
    accent: resolveCssColor("--secondary", "#a52142"),
    tertiary: resolveCssColor("--tertiary", "#c75b75"),
    gray: resolveCssColor("--gray", "#737373"),
    font: font.length > 0 ? font : "Inter, sans-serif",
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function hasFinePointer(): boolean {
  return window.matchMedia("(pointer: fine)").matches
}

function hasWebGL(): boolean {
  const canvas = document.createElement("canvas")
  const gl = canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl")
  return gl !== null
}

function shouldUse3D(): boolean {
  return hasFinePointer() && hasWebGL() && window.innerWidth > 700 && !prefersReducedMotion()
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

function liftColor(color: string, amount: number): string {
  const rgb = parseRgb(color)
  if (!rgb) {
    return color
  }
  const lift = (channel: number): number => Math.min(255, Math.round(channel + (255 - channel) * amount))
  return `rgb(${lift(rgb.r)}, ${lift(rgb.g)}, ${lift(rgb.b)})`
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

function navigateToSlug(slug: string): void {
  if (slug.length === 0) {
    throw new Error("graph-landing: cannot navigate a node without a slug")
  }
  const url = resolveNoteUrl(slug)
  // Full assign is the reliable path: Quartz SPA only hijacks <a> clicks.
  window.location.assign(url.toString())
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

function readStoredLens(): Lens {
  try {
    const raw = sessionStorage.getItem(LENS_STORAGE_KEY)
    if (raw === "all" || raw === "tag" || raw === "folder" || raw === "hub") {
      return raw
    }
  } catch (error) {
    console.error("[graph-landing] sessionStorage unavailable for lens persistence", error)
  }
  return "all"
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

function isSpacing(value: string): value is Spacing {
  return value === "tight" || value === "normal" || value === "wide"
}

function hubVisibleIds(data: GraphData, neighbors: Map<string, Set<string>>): Set<string> {
  const notes = data.nodes
    .filter((node) => node.type === "note")
    .sort((a, b) => b.degree - a.degree)
    .slice(0, HUB_EGO_N)
  const ids = new Set<string>()
  for (const hub of notes) {
    ids.add(hub.id)
    for (const neighbor of neighbors.get(hub.id) ?? []) {
      ids.add(neighbor)
    }
  }
  return ids
}

function filterGraph(data: GraphData, visibleIds: Set<string>): GraphData {
  return {
    nodes: data.nodes.filter((node) => visibleIds.has(node.id)),
    links: data.links.filter((link) => {
      return visibleIds.has(linkEndpointId(link.source)) && visibleIds.has(linkEndpointId(link.target))
    }),
  }
}

function inTagCluster(node: GraphNode, tag: string): boolean {
  if (node.type === "tag") {
    return node.tag === tag
  }
  return node.tags.includes(tag)
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
    const folders = [...new Set(data.nodes.filter((node) => node.type === "note").map((node) => node.folder))]
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
  },
): void {
  const neighbors = neighborMap(data.links)
  const state: ViewState = {
    lens: readStoredLens(),
    spacing: "normal",
    allLabels: false,
    focusTag: null,
  }
  let hoveredId: string | null = null

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
    if (state.allLabels || hoveredId === node.id) {
      return true
    }
    return labeledHubIds.has(node.id)
  }

  const isActive = (nodeId: string): boolean => {
    if (hoveredId !== null) {
      return hoveredId === nodeId || (neighbors.get(hoveredId)?.has(nodeId) ?? false)
    }
    if (state.focusTag === null) {
      return true
    }
    const node = data.nodes.find((entry) => entry.id === nodeId)
    if (!node) {
      return false
    }
    return inTagCluster(node, state.focusTag)
  }

  const baseNodeColor = (node: GraphNode): string => {
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
    if (hoveredId !== null && (hoveredId === node.id || neighbors.get(hoveredId)?.has(node.id))) {
      return theme.current.accent
    }
    const color = baseNodeColor(node)
    if (!isActive(node.id)) {
      return withAlpha(color, DIM_ALPHA)
    }
    if (isDarkTheme()) {
      return liftColor(color, 0.16)
    }
    return color
  }

  const edgeStroke = (link: GraphLink): string => {
    const source = linkEndpointId(link.source)
    const target = linkEndpointId(link.target)
    if (hoveredId !== null && (source === hoveredId || target === hoveredId)) {
      return theme.current.accent
    }
    if (hoveredId !== null || state.focusTag !== null) {
      const sourceActive = isActive(source)
      const targetActive = isActive(target)
      if (!sourceActive || !targetActive) {
        return withAlpha(theme.current.gray, DIM_ALPHA)
      }
    }
    const dark = isDarkTheme()
    if (link.kind === "tag") {
      return withAlpha(theme.current.gray, dark ? 0.2 : 0.12)
    }
    return withAlpha(theme.current.gray, dark ? 0.34 : 0.2)
  }

  const currentData = (): GraphData => {
    if (state.lens !== "hub") {
      return data
    }
    return filterGraph(data, hubVisibleIds(data, neighbors))
  }

  const applyForces = (): void => {
    const preset = SPACING_PRESETS[state.spacing]
    const charge = graph.d3Force("charge")
    if (charge?.strength) {
      charge.strength(preset.charge)
    }
    const link = graph.d3Force("link")
    if (link?.distance) {
      link.distance((edge) => {
        if (state.lens === "tag" && edge.kind === "tag") {
          return preset.distance * 0.72
        }
        return preset.distance
      })
    }
    if (link?.strength) {
      link.strength((edge) => {
        if (state.lens === "tag" && edge.kind === "tag") {
          return 0.95
        }
        if (state.lens === "folder") {
          const sourceFolder = noteFolderById(data.nodes, edge.source)
          const targetFolder = noteFolderById(data.nodes, edge.target)
          if (sourceFolder !== null && sourceFolder === targetFolder) {
            return 0.72
          }
        }
        if (edge.kind === "tag") {
          return 0.5
        }
        return 0.6
      })
    }
    const center = graph.d3Force("center")
    if (center?.strength) {
      center.strength(CENTER_STRENGTH)
    }
    const radius = state.spacing === "wide" ? 260 : state.spacing === "tight" ? 130 : 190
    const targets = clusterTargets(data, state.lens, radius)
    const clusterStrength = state.lens === "folder" || state.lens === "tag" ? 0.08 : 0
    graph.d3Force(
      "cluster",
      createClusterForce((node) => targets.get(node.id) ?? null, clusterStrength),
    )
  }

  const paintLabels3d = (): void => {
    if (!options.use3d || !options.spriteText || typeof graph.nodeThreeObject !== "function") {
      return
    }
    const SpriteText = options.spriteText
    if (typeof graph.nodeThreeObjectExtend === "function") {
      graph.nodeThreeObjectExtend(true)
    }
    graph.nodeThreeObject((node) => {
      if (!showNodeLabel(node)) {
        return false
      }
      const sprite = new SpriteText(node.name)
      sprite.color = isActive(node.id) ? theme.current.ink : withAlpha(theme.current.ink, DIM_ALPHA)
      sprite.textHeight = labeledHubIds.has(node.id) ? 7.2 : 5.6
      sprite.position.y = 10
      return sprite
    })
  }

  const refreshParticles = (): void => {
    if (!options.use3d || typeof graph.linkDirectionalParticles !== "function") {
      return
    }
    graph.linkDirectionalParticles((link) => {
      if (hoveredId === null) {
        return 0
      }
      const source = linkEndpointId(link.source)
      const target = linkEndpointId(link.target)
      return source === hoveredId || target === hoveredId ? 2 : 0
    })
  }

  const refreshAccessors = (): void => {
    graph.nodeVal(nodeValue)
    graph.nodeColor(nodeFill)
    graph.linkColor(edgeStroke)
    graph.linkWidth((link) => {
      const source = linkEndpointId(link.source)
      const target = linkEndpointId(link.target)
      if (hoveredId !== null && (source === hoveredId || target === hoveredId)) {
        return 1.1
      }
      return link.kind === "tag" ? 0.45 : 0.7
    })
    if (typeof graph.linkOpacity === "function") {
      graph.linkOpacity(LINK_OPACITY)
    }
    refreshParticles()
    if (!options.use3d) {
      graph.nodeCanvasObjectMode(() => "replace")
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
    if (state.lens === "folder") {
      const folders = [...new Set(data.nodes.filter((node) => node.type === "note").map((node) => node.folder))]
      const rootLabel = options.root.dataset.folderRootLabel ?? "root"
      legend.replaceChildren(
        ...folders.map((folder) =>
          makeItem(folderColor(folder, theme.current), folder === "root" ? rootLabel : folder),
        ),
      )
      return
    }
    const notesLabel = options.root.dataset.legendNotes ?? "Notes"
    const tagsLabel = options.root.dataset.legendTags ?? "Tags"
    legend.replaceChildren(
      makeItem(theme.current.ink, notesLabel),
      makeItem(theme.current.tertiary, tagsLabel),
    )
  }

  const renderTags = (): void => {
    const list = options.root.querySelector("[data-graph-tags]")
    if (!(list instanceof HTMLElement)) {
      return
    }
    const ranked = data.nodes
      .filter((node) => node.type === "tag")
      .sort((a, b) => b.degree - a.degree)
      .slice(0, 16)
    const wrap = options.root.querySelector(".graph-landing__tags")
    if (wrap instanceof HTMLElement) {
      wrap.hidden = ranked.length === 0
    }
    const items = ranked.map((tagNode) => {
      const item = document.createElement("li")
      const button = document.createElement("button")
      button.type = "button"
      button.className = "graph-landing__tag-item"
      button.dataset.graphTag = tagNode.tag
      button.setAttribute("aria-pressed", state.focusTag === tagNode.tag ? "true" : "false")
      const name = document.createElement("span")
      name.textContent = tagNode.tag
      const count = document.createElement("span")
      count.className = "graph-landing__tag-count"
      count.textContent = String(tagNode.degree)
      button.append(name, count)
      item.append(button)
      return item
    })
    list.replaceChildren(...items)
  }

  const focusNode = (node: GraphNode): void => {
    if (options.use3d && typeof graph.cameraPosition === "function") {
      const x = node.x ?? 0
      const y = node.y ?? 0
      const z = node.z ?? 0
      graph.cameraPosition({ x: x + 36, y: y + 18, z: z + 150 }, { x, y, z }, 700)
      return
    }
    if (typeof graph.centerAt === "function" && typeof graph.zoom === "function") {
      graph.centerAt(node.x ?? 0, node.y ?? 0, 600)
      graph.zoom(2.3, 600)
    }
  }

  let fitTimer = 0
  window.addCleanup(() => window.clearTimeout(fitTimer))

  const fitPadding = (): number => {
    if (window.innerWidth <= 700) {
      return 72
    }
    return ZOOM_FIT_PADDING
  }

  const fitAllNodes = (duration: number): void => {
    if (typeof graph.zoomToFit !== "function") {
      return
    }
    graph.zoomToFit(duration, fitPadding())
  }

  const scheduleFit = (delay: number, duration: number): void => {
    window.clearTimeout(fitTimer)
    fitTimer = window.setTimeout(() => {
      fitAllNodes(duration)
    }, delay)
  }

  const applyView = (shouldFit: boolean): void => {
    graph.graphData(currentData())
    applyForces()
    refreshAccessors()
    paintLabels3d()
    renderLegend()
    setPressed(options.root, "[data-graph-lens]", state.lens, "data-graph-lens")
    setPressed(options.root, "[data-graph-spacing]", state.spacing, "data-graph-spacing")
    for (const el of options.root.querySelectorAll("[data-graph-tag]")) {
      if (el instanceof HTMLElement) {
        el.setAttribute("aria-pressed", el.dataset.graphTag === state.focusTag ? "true" : "false")
      }
    }
    graph.d3ReheatSimulation()
    if (shouldFit) {
      scheduleFit(280, prefersReducedMotion() ? 0 : 900)
    }
  }

  const setLens = (lens: Lens): void => {
    state.lens = lens
    if (lens !== "tag") {
      state.focusTag = null
    }
    persistLens(lens)
    applyView(true)
  }

  const setFocusTag = (tag: string): void => {
    state.focusTag = state.focusTag === tag ? null : tag
    if (state.focusTag) {
      state.lens = "tag"
      persistLens("tag")
    }
    applyView(false)
    const tagNode = data.nodes.find((node) => node.id === `tag:${tag}`)
    if (tagNode && state.focusTag) {
      focusNode(tagNode)
      return
    }
    scheduleFit(280, prefersReducedMotion() ? 0 : 900)
  }

  graph.graphData(currentData())
  graph.backgroundColor(theme.current.bg)
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

  graph.onNodeHover((node) => {
    hoveredId = node ? node.id : null
    refreshAccessors()
    if (options.use3d) {
      paintLabels3d()
    }
  })

  if (options.use3d) {
    if (typeof graph.showNavInfo === "function") {
      graph.showNavInfo(false)
    }
    if (typeof graph.enableNavigationControls === "function") {
      graph.enableNavigationControls(true)
    }
    if (!prefersReducedMotion() && typeof graph.controls === "function") {
      const controls = graph.controls()
      controls.autoRotate = false
      controls.autoRotateSpeed = AUTO_ROTATE_SPEED
      const rotateTimer = window.setTimeout(() => {
        if (typeof graph.controls === "function") {
          graph.controls().autoRotate = true
        }
      }, 1600)
      window.addCleanup(() => window.clearTimeout(rotateTimer))
    }
    graph.warmupTicks(50)
    graph.cooldownTicks(200)
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
      options.bloomPass.strength = isDarkTheme() ? 0.22 : 0
      options.bloomPass.radius = 0.4
      options.bloomPass.threshold = 0.42
      graph.postProcessingComposer().addPass(options.bloomPass)
    }
    if (typeof graph.cameraPosition === "function") {
      graph.cameraPosition({ x: 0, y: 80, z: 720 })
    }
    paintLabels3d()
  } else {
    graph.warmupTicks(60)
    graph.cooldownTicks(180)
    graph.nodeCanvasObject((node, ctx, globalScale) => {
      const radius = 1.6 + nodeValue(node) * 0.55
      const x = node.x ?? 0
      const y = node.y ?? 0
      ctx.save()
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = nodeFill(node)
      ctx.fill()
      if (node.isHub) {
        ctx.strokeStyle = isActive(node.id) ? theme.current.accent : withAlpha(theme.current.accent, DIM_ALPHA)
        ctx.lineWidth = 0.7 / globalScale
        ctx.stroke()
      }
      if (showNodeLabel(node)) {
        const fontSize = 13 / globalScale
        ctx.font = `${fontSize}px ${theme.current.font}`
        ctx.fillStyle = isActive(node.id) ? theme.current.ink : withAlpha(theme.current.ink, DIM_ALPHA)
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"
        ctx.fillText(node.name, x, y - radius - 4)
      }
      ctx.restore()
    })
    if (typeof graph.nodePointerAreaPaint === "function") {
      graph.nodePointerAreaPaint((node, color, ctx) => {
        const radius = 1.6 + nodeValue(node) * 0.55 + 8
        ctx.beginPath()
        ctx.arc(node.x ?? 0, node.y ?? 0, radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })
    }
  }

  const activateNode = (node: GraphNode): void => {
    if (node.type === "tag") {
      setFocusTag(node.tag)
      return
    }
    navigateToSlug(node.slug)
  }

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

  const mount = options.root.querySelector("#graph-landing-mount")
  if (mount instanceof HTMLElement) {
    let pointerDown: { x: number; y: number } | null = null
    const onPointerDown = (event: PointerEvent): void => {
      pointerDown = { x: event.clientX, y: event.clientY }
    }
    const nearestNode = (clientX: number, clientY: number): GraphNode | null => {
      if (typeof graph.graph2ScreenCoords !== "function") {
        return null
      }
      const rect = mount.getBoundingClientRect()
      const localX = clientX - rect.left
      const localY = clientY - rect.top
      let best: GraphNode | null = null
      let bestDist = 64 * 64
      for (const node of currentData().nodes) {
        if (node.x === undefined || node.y === undefined) {
          continue
        }
        const screen = graph.graph2ScreenCoords(node.x, node.y, node.z ?? 0)
        const localDist = (screen.x - localX) ** 2 + (screen.y - localY) ** 2
        const clientDist = (screen.x - clientX) ** 2 + (screen.y - clientY) ** 2
        const dist = Math.min(localDist, clientDist)
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
      if (!start) {
        return
      }
      const moved = (event.clientX - start.x) ** 2 + (event.clientY - start.y) ** 2
      if (moved > 25) {
        return
      }
      window.setTimeout(() => {
        if (libraryHandledClick) {
          libraryHandledClick = false
          return
        }
        const hit = nearestNode(event.clientX, event.clientY)
        if (hit) {
          activateNode(hit)
        }
      }, 0)
    }
    mount.addEventListener("pointerdown", onPointerDown, true)
    mount.addEventListener("pointerup", onPointerUp, true)
    window.addCleanup(() => {
      mount.removeEventListener("pointerdown", onPointerDown, true)
      mount.removeEventListener("pointerup", onPointerUp, true)
    })
  }

  setPressed(options.root, "[data-graph-lens]", state.lens, "data-graph-lens")
  renderLegend()
  renderTags()
  if (state.lens !== "all") {
    applyView(false)
  }
  const instantFit = prefersReducedMotion()
  scheduleFit(400, instantFit ? 0 : 800)
  const settleTimer = window.setTimeout(() => {
    fitAllNodes(instantFit ? 0 : 400)
  }, 1400)
  window.addCleanup(() => window.clearTimeout(settleTimer))

  const onThemeChange = (): void => {
    theme.current = readTheme()
    graph.backgroundColor(theme.current.bg)
    if (options.bloomPass) {
      options.bloomPass.strength = isDarkTheme() ? 0.22 : 0
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
    const lensBtn = target.closest("[data-graph-lens]")
    if (lensBtn instanceof HTMLElement && lensBtn.dataset.graphLens && isLens(lensBtn.dataset.graphLens)) {
      setLens(lensBtn.dataset.graphLens)
      return
    }
    const spacingBtn = target.closest("[data-graph-spacing]")
    if (
      spacingBtn instanceof HTMLElement &&
      spacingBtn.dataset.graphSpacing &&
      isSpacing(spacingBtn.dataset.graphSpacing)
    ) {
      state.spacing = spacingBtn.dataset.graphSpacing
      applyForces()
      graph.d3ReheatSimulation()
      setPressed(options.root, "[data-graph-spacing]", state.spacing, "data-graph-spacing")
      return
    }
    const tagBtn = target.closest("[data-graph-tag]")
    if (tagBtn instanceof HTMLElement && tagBtn.dataset.graphTag) {
      setFocusTag(tagBtn.dataset.graphTag)
      return
    }
    if (target.closest("[data-graph-relayout]")) {
      graph.d3ReheatSimulation()
      return
    }
    const labelsBtn = target.closest("[data-graph-labels]")
    if (labelsBtn instanceof HTMLButtonElement) {
      state.allLabels = !state.allLabels
      labelsBtn.setAttribute("aria-pressed", state.allLabels ? "true" : "false")
      const show = labelsBtn.dataset.labelShow ?? "Labels"
      const hide = labelsBtn.dataset.labelHide ?? "Labels"
      const labelText = labelsBtn.querySelector("[data-graph-labels-text]")
      if (labelText) {
        labelText.textContent = state.allLabels ? hide : show
      }
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
  options.root.addEventListener("click", onRootClick)
  window.addCleanup(() => options.root.removeEventListener("click", onRootClick))
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

  const canvas = root.querySelector("#graph-landing-mount")
  if (!(canvas instanceof HTMLElement)) {
    throw new Error("graph-landing: mount element #graph-landing-mount is missing")
  }

  const counts = root.querySelector("[data-graph-counts]")
  const localeId = root.dataset.locale ?? "ko"
  const sourceLocale = root.dataset.sourceLocale ?? "ko"
  const prefixes = (root.dataset.localePrefixes ?? "")
    .split(",")
    .map((prefix) => prefix.trim())
    .filter((prefix) => prefix.length > 0)
  const countsTemplate = root.dataset.countsTemplate ?? "{n} nodes · {m} edges"

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

  let indexRaw: Record<string, unknown>
  try {
    indexRaw = asRecord(await fetchData)
  } catch (error) {
    showLoadError(canvas, "Graph could not load content index.")
    throw error
  }

  if (cancelled) {
    return
  }

  const data = buildGraphData(parseContentIndex(indexRaw), {
    localeId,
    sourceLocale,
    prefixes,
  })

  if (counts) {
    counts.textContent = countsTemplate
      .replace("{n}", String(data.nodes.length))
      .replace("{m}", String(data.links.length))
  }

  const use3d = shouldUse3D()
  let createGraph: (el: HTMLElement) => ForceGraphInstance
  try {
    createGraph = await loadRenderer(use3d)
  } catch (error) {
    showLoadError(canvas, "Graph could not load. Check your network connection.")
    throw error
  }

  if (cancelled) {
    return
  }

  let spriteText: SpriteTextCtor | null = null
  let bloomPass: BloomPass | null = null
  if (use3d) {
    try {
      const spriteMod = (await import(SPRITE_TEXT)) as { default?: SpriteTextCtor }
      spriteText = spriteMod.default ?? null
    } catch (error) {
      console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled", error)
      spriteText = null
    }
    try {
      const bloomMod = (await import(UNREAL_BLOOM)) as { UnrealBloomPass?: new () => BloomPass }
      bloomPass = bloomMod.UnrealBloomPass ? new bloomMod.UnrealBloomPass() : null
    } catch (error) {
      console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled", error)
      bloomPass = null
    }
  }

  if (cancelled) {
    return
  }

  canvas.replaceChildren()
  graph = createGraph(canvas)
  bindGraph(graph, data, theme, { use3d, root, spriteText, bloomPass })

  if (use3d && !prefersReducedMotion()) {
    const stopRotate = (): void => {
      if (!graph || typeof graph.controls !== "function") {
        return
      }
      graph.controls().autoRotate = false
    }
    canvas.addEventListener("pointerdown", stopRotate, { once: true })
    window.addCleanup(() => canvas.removeEventListener("pointerdown", stopRotate))
  }
}

document.addEventListener("nav", () => {
  void initGraphLanding()
})
