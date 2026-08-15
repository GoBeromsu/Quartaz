import { QuartzComponent } from '@quartz-community/types';

interface Options$2 {
    title: string;
    limit: number;
}
declare const _default$3: (userOpts?: Partial<Options$2>) => QuartzComponent;

interface DatedFile {
    readonly defaultDateType?: string;
    readonly dates?: Record<string, Date>;
    readonly frontmatter?: {
        readonly title?: string;
    };
}

interface LocaleFileData {
    readonly slug?: string;
    readonly frontmatter?: Record<string, unknown>;
    readonly multilingual?: unknown;
}

interface ListFile extends DatedFile, LocaleFileData {
    readonly filePath?: string;
    readonly slug?: string;
    readonly frontmatter?: {
        readonly title?: string;
    };
}
interface Options$1 {
    title?: string;
    limit: number;
    filter: (file: ListFile) => boolean;
    sort: (left: ListFile, right: ListFile) => number;
}
declare const _default$2: (userOpts?: Partial<Options$1>) => QuartzComponent;

interface Options {
    title: string;
}
declare const _default$1: (userOpts?: Partial<Options>) => QuartzComponent;

declare const _default: () => QuartzComponent;

export { _default$1 as BlogAllTags, _default$2 as BlogArticleList, _default$3 as BlogLatest, _default as BlogStyles };
