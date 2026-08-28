import fs from 'fs/promises';
import path from 'path';

// src/emitter.ts

// node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}
"function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/@quartz-community/utils/dist/index.js
function simplifySlug(fp) {
  const res = stripSlashes(trimSuffix(fp, "index"));
  return res.length === 0 ? "/" : res;
}
function endsWith(s2, suffix) {
  return s2 === suffix || s2.endsWith("/" + suffix);
}
function trimSuffix(s2, suffix) {
  if (endsWith(s2, suffix)) {
    s2 = s2.slice(0, -suffix.length);
  }
  return s2;
}
function stripSlashes(s2, onlyStripPrefix) {
  if (s2.startsWith("/")) {
    s2 = s2.substring(1);
  }
  return s2;
}
function escapeHTML(unsafe) {
  return unsafe.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

// node_modules/@quartz-community/utils/dist/sort.js
function getDate(data) {
  const defaultDateType = data.defaultDateType;
  if (!defaultDateType) {
    return void 0;
  }
  const dates = data.dates;
  return dates?.[defaultDateType];
}

// src/emitter.ts
var defaults = {
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
  rssSlug: "index",
  includeEmptyFiles: true,
  contentMaxChars: 120,
  emitGraphIndex: true,
  graphIndexMaxNodes: 1e3,
  graphIndexMaxLinksPerNode: 8
};
function truncateText(text, maxChars) {
  if (text.length <= maxChars) return text;
  let cut = Math.max(0, maxChars);
  if (cut > 0) {
    const current = text.charCodeAt(cut);
    const previous = text.charCodeAt(cut - 1);
    if (current >= 56320 && current <= 57343 && previous >= 55296 && previous <= 56319) {
      cut -= 1;
    }
  }
  return text.slice(0, cut);
}
function selectGraphEntries(index, maxNodes, maxLinksPerNode = Number.POSITIVE_INFINITY) {
  const degree = new Map(Array.from(index.keys(), (slug2) => [slug2, 0]));
  for (const entry of index.values()) {
    for (const target of entry.links) {
      if (!degree.has(target)) continue;
      degree.set(entry.slug, (degree.get(entry.slug) ?? 0) + 1);
      degree.set(target, (degree.get(target) ?? 0) + 1);
    }
  }
  const selected = new Set(
    [...index.keys()].sort((left, right) => {
      const degreeDelta = (degree.get(right) ?? 0) - (degree.get(left) ?? 0);
      return degreeDelta || left.localeCompare(right);
    }).slice(0, Math.max(0, maxNodes))
  );
  return new Map(
    [...index].filter(([slug2]) => selected.has(slug2)).map(([slug2, entry]) => [
      slug2,
      {
        ...entry,
        links: entry.links.filter((target) => selected.has(target)).sort((left, right) => {
          const degreeDelta = (degree.get(right) ?? 0) - (degree.get(left) ?? 0);
          return degreeDelta || left.localeCompare(right);
        }).slice(0, Math.max(0, maxLinksPerNode))
      }
    ])
  );
}
function absoluteUrl(baseUrl, slug2) {
  return `https://${joinSegments(baseUrl ?? "", encodeURI(slug2))}`;
}
function sitemap(baseUrl, index) {
  const entries = Array.from(index, ([slug2, entry]) => {
    const location = absoluteUrl(baseUrl, simplifySlug(slug2));
    const lastModified = entry.date ? `<lastmod>${entry.date.toISOString()}</lastmod>` : "";
    return `<url><loc>${escapeHTML(location)}</loc>${lastModified}</url>`;
  }).join("");
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
}
function rss(baseUrl, title, index, limit) {
  const entries = [...index.values()].sort((left, right) => {
    const dateDelta = (right.date?.getTime() ?? 0) - (left.date?.getTime() ?? 0);
    return dateDelta || left.title.localeCompare(right.title);
  }).slice(0, limit).map((entry) => {
    const link = absoluteUrl(baseUrl, simplifySlug(entry.slug));
    return `<item><title>${escapeHTML(entry.title)}</title><link>${escapeHTML(link)}</link><guid>${escapeHTML(link)}</guid><description>${escapeHTML(entry.description ?? "")}</description><pubDate>${entry.date?.toUTCString() ?? ""}</pubDate></item>`;
  }).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeHTML(title)}</title><link>https://${baseUrl ?? ""}</link><description>Recent notes on ${escapeHTML(title)}</description>${entries}</channel></rss>`;
}
async function writeOutput(ctx, slug2, extension, content) {
  const output = joinSegments(ctx.argv.output, `${slug2}${extension}`);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, content);
  return output;
}
var ContentIndex = (userOptions) => {
  const options = { ...defaults, ...userOptions };
  const entriesByPath = /* @__PURE__ */ new Map();
  const outputCache = /* @__PURE__ */ new Map();
  let initialized = false;
  const entryFor = ([, file]) => {
    const data = file.data;
    if (data.unlisted === true || !data.slug || !data.relativePath) return void 0;
    const text = data.text ?? "";
    if (!options.includeEmptyFiles && text.length === 0) return void 0;
    return {
      slug: data.slug,
      filePath: data.relativePath,
      title: data.frontmatter?.title ?? "",
      links: data.links ?? [],
      tags: data.frontmatter?.tags ?? [],
      content: truncateText(text, options.contentMaxChars),
      date: getDate(data) ?? /* @__PURE__ */ new Date(),
      description: data.description ?? ""
    };
  };
  const emitOutputs = async (ctx) => {
    const index = new Map(
      Array.from(entriesByPath.values(), (entry) => [entry.slug, entry])
    );
    const outputs = [];
    if (options.enableSiteMap)
      outputs.push(["sitemap", ".xml", sitemap(ctx.cfg.configuration.baseUrl, index)]);
    if (options.enableRSS)
      outputs.push([
        options.rssSlug,
        ".xml",
        rss(
          ctx.cfg.configuration.baseUrl,
          ctx.cfg.configuration.pageTitle ?? "",
          index,
          options.rssLimit
        )
      ]);
    const browserIndex = Object.fromEntries(
      Array.from(index, ([slug2, entry]) => {
        const { date: _date, description: _description, links: _links, ...browserEntry } = entry;
        return [slug2, browserEntry];
      })
    );
    outputs.push([
      joinSegments("static", "contentIndex"),
      ".json",
      JSON.stringify(browserIndex)
    ]);
    if (options.emitGraphIndex) {
      const graphCandidates = new Map(
        [...index].filter(
          ([slug2, entry]) => entry.filePath.toLowerCase().endsWith(".md") && !slug2.endsWith(".base") && !slug2.endsWith(".canvas") && !slug2.startsWith("tags/")
        )
      );
      const selectedEntries = selectGraphEntries(
        graphCandidates,
        options.graphIndexMaxNodes,
        options.graphIndexMaxLinksPerNode
      );
      const graphIndex = Object.fromEntries(
        Array.from(selectedEntries, ([slug2, entry]) => [
          slug2,
          {
            slug: entry.slug,
            filePath: entry.filePath,
            title: entry.title,
            links: entry.links,
            tags: entry.tags,
            excerpt: truncateText(entry.content, 220)
          }
        ])
      );
      outputs.push([
        joinSegments("static", "graphIndex"),
        ".json",
        JSON.stringify(graphIndex)
      ]);
    }
    const written = [];
    for (const [slug2, extension, content] of outputs) {
      const key = `${slug2}${extension}`;
      if (outputCache.get(key) === content) continue;
      written.push(await writeOutput(ctx, slug2, extension, content));
      outputCache.set(key, content);
    }
    return written;
  };
  const emitAll = async (ctx, content) => {
    entriesByPath.clear();
    outputCache.clear();
    for (const processed of content) {
      const entry = entryFor(processed);
      if (entry) entriesByPath.set(entry.filePath, entry);
    }
    initialized = true;
    return emitOutputs(ctx);
  };
  const emitChanged = async (ctx, content, changes) => {
    if (!initialized) return emitAll(ctx, content);
    const changedPaths = new Set(changes.map((change) => change.path));
    const current = /* @__PURE__ */ new Map();
    for (const processed of content) {
      const relativePath = processed[1].data.relativePath;
      if (relativePath && changedPaths.has(relativePath)) current.set(relativePath, processed);
    }
    for (const change of changes) {
      entriesByPath.delete(change.path);
      if (change.type === "delete") continue;
      const processed = current.get(change.path);
      if (!processed) continue;
      const entry = entryFor(processed);
      if (entry) entriesByPath.set(change.path, entry);
    }
    return emitOutputs(ctx);
  };
  return {
    name: "ContentIndex",
    emit: (ctx, content) => emitAll(ctx, content),
    partialEmit: (ctx, content, _resources, changes) => emitChanged(ctx, content, changes)
  };
};

export { ContentIndex, ContentIndex as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map