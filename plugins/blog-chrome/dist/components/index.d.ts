import { QuartzComponent } from '@quartz-community/types';

interface Options$2 {
    links: Record<string, string>;
}
declare const _default$2: (opts?: Options$2) => QuartzComponent;

interface Options$1 {
    links: Record<string, string>;
}
declare const _default$1: (opts?: Options$1) => QuartzComponent;

interface Options {
    /** Retired URL prefixes such as `ko` or `en`; `/ko/foo` redirects to `/foo`. */
    prefixes: string[];
}
/**
 * Inline redirect for the 404 page: strips a retired locale prefix from the
 * path so links published before the locale split was removed keep working.
 */
declare const _default: (opts?: Options) => QuartzComponent;

export { _default$1 as BlogFooter, _default$2 as BlogLinksHeader, _default as LocaleRedirect };
