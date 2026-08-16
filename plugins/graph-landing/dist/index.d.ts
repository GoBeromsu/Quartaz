import { QuartzPageTypePlugin } from '@quartz-community/types';

interface GraphLandingPageOptions {
    /**
     * Where the graph page's client script loads its content data from.
     * "contentIndex" (default) fetches static/contentIndex.json, same as before.
     * "graphIndex" fetches the lighter static/graphIndex.json instead (requires
     * the multilingual-content-index emitter's `emitGraphIndex: true` option).
     */
    indexSource?: "contentIndex" | "graphIndex";
    /**
     * Caps the O(k^2) tag co-occurrence edge generation in the client graph
     * builder. Default: undefined (unlimited, current behavior — every pair of
     * tags on a note gets a faint co-occurrence edge). Set to `false` to skip
     * tag co-occurrence edges entirely. Set to an object to cap generation:
     * `maxTagsPerNote` skips co-occurrence pairs for notes with more tags than
     * the threshold; `maxEdges` stops adding co-occurrence edges once that many
     * have been added (deterministic order, same as today's note iteration).
     */
    tagCooccurrence?: {
        maxTagsPerNote?: number;
        maxEdges?: number;
    } | false;
    /**
     * Caps how many nodes the graph renders initially, keeping only the top-N
     * nodes by degree (computed over the full parsed index, deterministic
     * tie-break by slug). Default: undefined (render every node, current
     * behavior). The full index stays available client-side so that clicking a
     * node lazily expands its neighbors (see `expandHops`) into the live
     * simulation instead of doing a full re-layout.
     */
    maxRenderedNodes?: number;
    /**
     * Number of hops to pull in from the full index when a rendered node is
     * clicked and `maxRenderedNodes` is set. Default: 1. Has no effect unless
     * `maxRenderedNodes` is also set.
     */
    expandHops?: number;
    /**
     * Which client renderer to use. Default: undefined ("auto") — current
     * behavior unchanged: 3D loads when WebGL is available and the user has
     * not requested reduced motion, otherwise the 2D canvas renderer loads
     * instead. Set to "3d" to require the 3D renderer: it never falls back to
     * 2D — if WebGL is unavailable or reduced-motion is requested, the graph
     * shows a short notice via the existing canvas-message path instead of
     * silently loading 2D.
     */
    renderMode?: "auto" | "3d";
    /**
     * Tunes the force-simulation warmup/settle behavior. Default: undefined —
     * current behavior unchanged (3D: warmupTicks 50 / cooldownTicks 200; 2D:
     * warmupTicks 60 / cooldownTicks 180; charge force theta uses d3-force's
     * built-in default).
     */
    layout?: {
        /**
         * When true, forces cooldownTicks to 0 after the warmup pass runs so
         * the simulation freezes immediately instead of continuing to settle —
         * the maintainer-recommended pattern for a one-shot layout. Overrides
         * any `cooldownTicks` value set alongside it. Default: false.
         */
        freezeAfterWarmup?: boolean;
        /** Overrides the renderer's default warmupTicks (3D: 50, 2D: 60). */
        warmupTicks?: number;
        /**
         * Overrides the renderer's default cooldownTicks (3D: 200, 2D: 180).
         * Ignored when `freezeAfterWarmup` is true.
         */
        cooldownTicks?: number;
        /**
         * Sets the d3-force charge force's Barnes-Hut approximation `theta`.
         * Higher values trade layout accuracy for speed. Default: d3-force's
         * built-in default (0.9).
         */
        chargeTheta?: number;
    };
}
declare const GraphLandingPage: QuartzPageTypePlugin<GraphLandingPageOptions>;

export { type GraphLandingPageOptions, GraphLandingPage as default };
