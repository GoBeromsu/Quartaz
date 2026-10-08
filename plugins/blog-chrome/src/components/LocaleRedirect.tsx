import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types"

interface Options {
  /** Retired URL prefixes such as `ko` or `en`; `/ko/foo` redirects to `/foo`. */
  prefixes: string[]
}

/**
 * Inline redirect for the 404 page: strips a retired locale prefix from the
 * path so links published before the locale split was removed keep working.
 */
export default ((opts?: Options) => {
  const prefixes = (opts?.prefixes ?? []).filter((prefix) => /^[A-Za-z][A-Za-z-]*$/.test(prefix))
  const script =
    prefixes.length === 0
      ? ""
      : `(function(){var m=location.pathname.match(/^\\/(${prefixes.join("|")})(\\/.*)?$/);if(m)location.replace((m[2]||"/")+location.search+location.hash)})()`

  const LocaleRedirect: QuartzComponent = () =>
    script ? <script dangerouslySetInnerHTML={{ __html: script }} /> : null

  return LocaleRedirect
}) satisfies QuartzComponentConstructor<Options | undefined>
