import { QuartzComponent } from '@quartz-community/types';

interface Options$1 {
    links: Record<string, string>;
}
declare const _default$2: (opts?: Options$1) => QuartzComponent;

declare const _default$1: () => QuartzComponent;

interface Options {
    links: Record<string, string>;
}
declare const _default: (opts?: Options) => QuartzComponent;

export { _default as BlogFooter, _default$1 as BlogLanguageSwitcher, _default$2 as BlogLinksHeader };
