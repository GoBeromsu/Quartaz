import { QuartzPageTypePlugin } from '@quartz-community/types';

interface GraphLandingPageOptions {
    /**
     * Where the graph page's client script loads its content data from.
     * "contentIndex" (default) fetches static/contentIndex.json, same as before.
     * "graphIndex" fetches the lighter static/graphIndex.json instead (requires
     * the multilingual-content-index emitter's `emitGraphIndex: true` option).
     */
    indexSource?: "contentIndex" | "graphIndex";
}
declare const GraphLandingPage: QuartzPageTypePlugin<GraphLandingPageOptions>;

export { type GraphLandingPageOptions, GraphLandingPage as default };
