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
