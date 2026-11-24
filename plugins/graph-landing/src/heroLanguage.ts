/**
 * Pick which hero copy block to show from the visitor's language list.
 * The site's own language (`available[0]`) wins when it appears anywhere in
 * the list: a Korean reader whose browser lists English first still reads
 * Korean. Otherwise returns the first matching primary language subtag, else
 * `fallback` when it is one of the available languages, else `null` to keep
 * the default.
 *
 * Kept dependency-free and ES5-shaped: it is serialised with `toString()` into
 * an inline <script> so the swap happens before first paint.
 */
export function pickHeroLanguage(
  available: ReadonlyArray<string>,
  preferred: ReadonlyArray<string>,
  fallback?: string | null,
): string | null {
  for (var h = 0; h < preferred.length; h++) {
    var own = String(preferred[h] || "")
      .toLowerCase()
      .split("-")[0]
    if (own && own === available[0]) return own
  }
  for (var i = 0; i < preferred.length; i++) {
    var primary = String(preferred[i] || "")
      .toLowerCase()
      .split("-")[0]
    if (!primary) continue
    for (var j = 0; j < available.length; j++) {
      if (available[j] === primary) return primary
    }
  }
  for (var k = 0; k < available.length; k++) {
    if (fallback && available[k] === fallback) return fallback
  }
  return null
}

/** localStorage key holding the language the visitor chose with the toggle. */
export const HERO_LANGUAGE_STORAGE_KEY = "graph-landing-hero-lang"

/**
 * The language the toggle switches to: the one after `current` in
 * `available`, wrapping around. `null` when there is nothing to switch to.
 * ES5-shaped for the same reason as `pickHeroLanguage`.
 */
export function nextHeroLanguage(
  available: ReadonlyArray<string>,
  current: string | null | undefined,
): string | null {
  if (available.length < 2) return null
  var index = -1
  for (var i = 0; i < available.length; i++) {
    if (available[i] === current) index = i
  }
  return available[(index + 1) % available.length] || null
}

/**
 * Show the `[data-hero-lang]` blocks of `pick` under `root`, hide the others,
 * and point every `[data-hero-lang-toggle]` at `next`. ES5-shaped: serialised
 * into the inline script as well as bundled into the client script.
 */
export function applyHeroLanguage(root: ParentNode, pick: string, next: string | null): void {
  var blocks = root.querySelectorAll("[data-hero-lang]")
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i] as HTMLElement
    block.hidden = block.getAttribute("data-hero-lang") !== pick
  }
  if (!next) return
  var toggles = root.querySelectorAll("[data-hero-lang-toggle]")
  for (var j = 0; j < toggles.length; j++) {
    var toggle = toggles[j] as HTMLElement
    toggle.textContent = next.toUpperCase()
    toggle.setAttribute("lang", next)
  }
}
