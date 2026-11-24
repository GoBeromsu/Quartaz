// src/heroLanguage.ts
function pickHeroLanguage(available, preferred, fallback) {
  for (var h2 = 0; h2 < preferred.length; h2++) {
    var own = String(preferred[h2] || "").toLowerCase().split("-")[0];
    if (own && own === available[0]) return own;
  }
  for (var i2 = 0; i2 < preferred.length; i2++) {
    var primary = String(preferred[i2] || "").toLowerCase().split("-")[0];
    if (!primary) continue;
    for (var j2 = 0; j2 < available.length; j2++) {
      if (available[j2] === primary) return primary;
    }
  }
  for (var k = 0; k < available.length; k++) {
    if (fallback && available[k] === fallback) return fallback;
  }
  return null;
}
var HERO_LANGUAGE_STORAGE_KEY = "graph-landing-hero-lang";
function nextHeroLanguage(available, current) {
  if (available.length < 2) return null;
  var index = -1;
  for (var i2 = 0; i2 < available.length; i2++) {
    if (available[i2] === current) index = i2;
  }
  return available[(index + 1) % available.length] || null;
}
function applyHeroLanguage(root, pick, next) {
  var blocks = root.querySelectorAll("[data-hero-lang]");
  for (var i2 = 0; i2 < blocks.length; i2++) {
    var block = blocks[i2];
    block.hidden = block.getAttribute("data-hero-lang") !== pick;
  }
  if (!next) return;
  var toggles = root.querySelectorAll("[data-hero-lang-toggle]");
  for (var j2 = 0; j2 < toggles.length; j2++) {
    var toggle = toggles[j2];
    toggle.textContent = next.toUpperCase();
    toggle.setAttribute("lang", next);
  }
}

// src/profile.ts
function profileBlocks(profile, defaultLang, heroLangs) {
  if (!profile) return [];
  const { translations, ...base } = profile;
  if (!base.sections || base.sections.length === 0) return [];
  const langs = [defaultLang];
  for (const lang of [...heroLangs, ...Object.keys(translations ?? {})]) {
    if (!langs.includes(lang)) langs.push(lang);
  }
  return langs.map((lang) => {
    const translated = lang === defaultLang ? void 0 : translations?.[lang];
    return {
      lang,
      copy: translated ? { ...base, ...translated } : base,
      hidden: lang !== defaultLang
    };
  });
}
function sectionIndexLabel(index) {
  return String(index + 1).padStart(2, "0");
}
function isExternalHref(href) {
  return /^(https?:)?\/\//i.test(href) || /^mailto:/i.test(href);
}
function profileImageAttrs(image) {
  const src = image?.src?.trim();
  if (!image || !src) return null;
  const sized = Number.isFinite(image.width) && Number.isFinite(image.height) && image.width > 0 && image.height > 0;
  return {
    src,
    alt: image.alt ?? "",
    ...sized ? { width: image.width, height: image.height } : {}
  };
}
var l;
function S(n2) {
  return n2.children;
}
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/ProfileSections.tsx
function linkProps(href) {
  return isExternalHref(href) ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
}
function Section({ section, index }) {
  const portrait = profileImageAttrs(section.image);
  const heading = /* @__PURE__ */ u2(S, { children: [
    section.kicker ? /* @__PURE__ */ u2("p", { class: "graph-landing__kicker", children: section.kicker }) : null,
    section.title ? /* @__PURE__ */ u2("h2", { class: "graph-landing__section-title", children: section.title }) : null,
    section.lede ? /* @__PURE__ */ u2("p", { class: "graph-landing__section-lede", children: section.lede }) : null
  ] });
  return /* @__PURE__ */ u2("section", { class: "graph-landing__section", id: section.id, children: /* @__PURE__ */ u2("div", { class: "graph-landing__panel", "data-profile-reveal": true, children: [
    /* @__PURE__ */ u2("span", { class: "graph-landing__section-index", "aria-hidden": "true", children: sectionIndexLabel(index) }),
    portrait ? /* @__PURE__ */ u2("div", { class: "graph-landing__intro", children: [
      /* @__PURE__ */ u2("figure", { class: "graph-landing__portrait", children: [
        /* @__PURE__ */ u2("img", { ...portrait, decoding: "async" }),
        section.image?.caption ? /* @__PURE__ */ u2("figcaption", { children: section.image.caption }) : null
      ] }),
      /* @__PURE__ */ u2("div", { class: "graph-landing__intro-text", children: heading })
    ] }) : heading,
    section.stats && section.stats.length > 0 ? /* @__PURE__ */ u2("dl", { class: "graph-landing__stats", children: section.stats.map((stat) => /* @__PURE__ */ u2("div", { class: "graph-landing__stat", children: [
      /* @__PURE__ */ u2("dt", { children: stat.label }),
      /* @__PURE__ */ u2("dd", { children: stat.value }),
      stat.note ? /* @__PURE__ */ u2("p", { children: stat.note }) : null
    ] })) }) : null,
    section.timeline && section.timeline.length > 0 ? /* @__PURE__ */ u2("ol", { class: "graph-landing__timeline", children: section.timeline.map((item) => {
      const image = profileImageAttrs(item.image);
      return /* @__PURE__ */ u2("li", { class: "graph-landing__timeline-item", children: [
        /* @__PURE__ */ u2("p", { class: "graph-landing__timeline-period", children: item.period }),
        /* @__PURE__ */ u2("div", { class: "graph-landing__timeline-body", children: [
          /* @__PURE__ */ u2("h3", { children: item.href ? /* @__PURE__ */ u2("a", { ...linkProps(item.href), children: item.title }) : item.title }),
          item.org ? /* @__PURE__ */ u2("p", { class: "graph-landing__timeline-org", children: item.org }) : null,
          item.body ? /* @__PURE__ */ u2("p", { children: item.body }) : null,
          image ? /* @__PURE__ */ u2("figure", { class: "graph-landing__timeline-figure", children: [
            /* @__PURE__ */ u2("img", { ...image, loading: "lazy", decoding: "async" }),
            item.image?.caption ? /* @__PURE__ */ u2("figcaption", { children: item.image.caption }) : null
          ] }) : null
        ] })
      ] });
    }) }) : null,
    section.groups?.map((group) => /* @__PURE__ */ u2("div", { class: "graph-landing__group", children: [
      group.label ? /* @__PURE__ */ u2("p", { class: "graph-landing__group-label", children: group.label }) : null,
      /* @__PURE__ */ u2("div", { class: "graph-landing__cards", children: group.cards.map((card) => {
        const body = /* @__PURE__ */ u2(S, { children: [
          /* @__PURE__ */ u2("h3", { children: card.title }),
          card.body ? /* @__PURE__ */ u2("p", { children: card.body }) : null,
          card.meta ? /* @__PURE__ */ u2("p", { class: "graph-landing__card-meta", children: card.meta }) : null
        ] });
        return card.href ? /* @__PURE__ */ u2("a", { class: "graph-landing__card", ...linkProps(card.href), children: body }) : /* @__PURE__ */ u2("div", { class: "graph-landing__card", children: body });
      }) })
    ] })),
    section.facts && section.facts.length > 0 ? /* @__PURE__ */ u2("dl", { class: "graph-landing__facts", children: section.facts.map((fact) => /* @__PURE__ */ u2("div", { children: [
      /* @__PURE__ */ u2("dt", { children: fact.term }),
      /* @__PURE__ */ u2("dd", { children: fact.href ? /* @__PURE__ */ u2("a", { ...linkProps(fact.href), children: fact.detail }) : fact.detail })
    ] })) }) : null,
    section.quote ? /* @__PURE__ */ u2("blockquote", { class: "graph-landing__quote", children: [
      /* @__PURE__ */ u2("p", { children: section.quote.text }),
      section.quote.cite ? /* @__PURE__ */ u2("cite", { children: section.quote.cite }) : null
    ] }) : null,
    section.quotes?.length ? /* @__PURE__ */ u2("div", { class: "graph-landing__quotes", children: section.quotes.map((quote) => /* @__PURE__ */ u2("blockquote", { class: "graph-landing__quote", children: [
      /* @__PURE__ */ u2("p", { children: quote.text }),
      quote.cite ? /* @__PURE__ */ u2("cite", { children: quote.cite }) : null
    ] })) }) : null
  ] }) });
}
function ProfileSections({
  blocks,
  siteTitle,
  homeHref,
  blogHref,
  navLabel,
  languageLabel,
  scrollLabel
}) {
  if (blocks.length === 0) return null;
  const languages = blocks.map((block) => block.lang);
  return /* @__PURE__ */ u2(S, { children: [
    /* @__PURE__ */ u2("a", { class: "graph-landing__scroll-cue", href: "#graph-landing-profile", "data-profile-cue": true, children: scrollLabel }),
    /* @__PURE__ */ u2("main", { class: "graph-landing__page", id: "graph-landing-profile", children: blocks.map(({ lang, copy, hidden }) => {
      const sections = copy.sections ?? [];
      const navSections = sections.filter((section) => section.id && section.nav);
      const toggleLang = nextHeroLanguage(languages, lang);
      return /* @__PURE__ */ u2("div", { class: "graph-landing__profile", "data-hero-lang": lang, lang, hidden, children: [
        /* @__PURE__ */ u2("nav", { class: "graph-landing__topbar", "aria-label": navLabel, children: [
          /* @__PURE__ */ u2("a", { class: "graph-landing__topbar-title", href: homeHref, "data-profile-top": true, children: siteTitle }),
          /* @__PURE__ */ u2("div", { class: "graph-landing__topbar-links", children: [
            navSections.map((section) => /* @__PURE__ */ u2("a", { href: `#${section.id}`, children: section.nav })),
            blogHref ? /* @__PURE__ */ u2("a", { class: "graph-landing__topbar-blog", href: blogHref, children: lang === "ko" ? "\uBE14\uB85C\uADF8" : "Blog" }) : null
          ] }),
          toggleLang ? /* @__PURE__ */ u2(
            "button",
            {
              type: "button",
              class: "graph-landing__topbar-lang",
              "data-hero-lang-toggle": true,
              lang: toggleLang,
              "aria-label": languageLabel,
              children: toggleLang.toUpperCase()
            }
          ) : null
        ] }),
        sections.map((section, index) => /* @__PURE__ */ u2(Section, { section, index })),
        copy.footer ? /* @__PURE__ */ u2("footer", { class: "graph-landing__profile-footer", children: [
          copy.footer.links && copy.footer.links.length > 0 ? /* @__PURE__ */ u2("ul", { children: copy.footer.links.map((link) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { ...linkProps(link.href), children: link.label }) })) }) : null,
          copy.footer.note ? /* @__PURE__ */ u2("p", { children: copy.footer.note }) : null
        ] }) : null
      ] });
    }) })
  ] });
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var zr=Object.defineProperty;var Fr=(e,n,o)=>n in e?zr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var Ie=(e,n,o)=>Fr(e,typeof n!="symbol"?n+"":n,o);function xn(e,n,o,t){if(![e.x,e.y,e.z,n.x,n.y,n.z,o,t].every(Number.isFinite))return null;let c=n.x-e.x,d=n.y-e.y,v=n.z-e.z,k=Math.hypot(c,d,v),S={x:(e.x+n.x)/2,y:(e.y+n.y)/2,z:(e.z+n.z)/2},C=k-Math.max(0,o)-Math.max(0,t);if(k===0||C<=0)return{start:S,end:S,length:0};let m=c/k,D=d/k,B=v/k,L=Math.max(0,o),X=Math.max(0,t);return{start:{x:e.x+m*L,y:e.y+D*L,z:e.z+B*L},end:{x:n.x-m*X,y:n.y-D*X,z:n.z-B*X},length:C}}function En(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function At(e,n,o){let t=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(n)?Math.max(0,n):0,c=Number.isFinite(o)?Math.max(i,o):i;if(c===i)return i>0?.5:0;let d=Math.min(c,Math.max(i,t));return(Math.sqrt(d)-Math.sqrt(i))/(Math.sqrt(c)-Math.sqrt(i))}function Ln(e,n,o){return At(Math.max(e,n),0,o)}function it(e,n,o){return Number.isFinite(e)?Math.min(o,Math.max(n,e)):n}function Sn(e){return 1+it(e,0,1)*1.2}function Mn(e,n){let o=it(e,0,1),t=it(n,0,2);return Math.max(.5,1-o*.24*t)}function Cn(e,n){let o=it(e,0,1),t=it(n,0,2);return Math.min(1.6,1+o*.3*t)}var Dr=/^[A-Za-z0-9_-]{6,20}$/,Or=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),qr=new Set(["youtu.be","www.youtu.be"]);function Ct(e){return e&&Dr.test(e)?e:void 0}function Br(e){if(!e)return;let n=e.trim(),o=Ct(n);if(o)return o;let t;try{t=new URL(n)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:"||t.username||t.password||t.port)){if(Or.has(t.hostname)){if(t.pathname==="/watch")return Ct(t.searchParams.get("v"));let i=t.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return Ct(i[1])}if(qr.has(t.hostname)){let i=t.pathname.split("/").filter(Boolean);if(i.length===1)return Ct(i[0])}}}function An(e){let n=[],o=new Set;for(let t of e){let i=t.title.trim(),c=Br(t.url);if(!i||!c||o.has(c))continue;o.add(c);let d=t.artist?.trim();d?n.push({title:i,artist:d,videoId:c}):n.push({title:i,videoId:c})}return n}function O(e){return typeof e=="string"?e:e.id}function Bt(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function Nn(e,n,o,t){return n||e&&Bt(o,t)==="full"}function ct(e,n,o){let t=e.get(n);if(t)return t;let i=o();return e.set(n,i),i}function Me(e,n){let o=e?n(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function _n(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let t=[...e.nodes].sort((d,v)=>v.degree!==d.degree?v.degree-d.degree:d.id<v.id?-1:d.id>v.id?1:0).slice(0,Math.max(0,n)),i=new Set(t.map(d=>d.id)),c=e.links.filter(d=>{let v=O(d.source),k=O(d.target);return i.has(v)&&i.has(k)});return{nodes:t,links:c}}function In(e,n,o,t){let i=new Set,c=Math.max(0,Math.floor(t));if(c<=0)return i;let d=new Set([o]),v=new Set([o]);for(let k=0;k<c;k+=1){let S=new Set;for(let C of v)for(let m of e.get(C)??[])d.has(m)||(d.add(m),S.add(m),n.has(m)||i.add(m));v=S}return i}var Vr=2.399963229728653,qt=20;function Rn(e,n,o){let t=e.x??0,i=e.y??0,c=e.z??0,d=n*Vr;return{x:t+qt*Math.cos(d),y:i+qt*Math.sin(d),z:o?c+qt*Math.sin(d*.5):c}}function Hn(e,n,o,t){if(n===o)return new Set;if(n===null||o===null)return new Set(t);let i=new Set([n,o]);for(let c of e.get(n)??[])i.add(c);for(let c of e.get(o)??[])i.add(c);return i}var Vt=100/3;function Pn(e){return Number.isFinite(e)?e*360/6e4:0}function Gn(e,n,o,t){if(!Number.isFinite(e)||!Number.isFinite(n))return 0;if(!(o>0)||!(t>0))return n;let i=n+(e-n)*Math.exp(-o/t);return Math.abs(i-n)<.01?n:i}function zn(e,n=4,o=17){let t=Number.isFinite(e)?Math.min(1,Math.max(0,e)):0;return n+(o-n)*t}function Fn(e,n=Math.random){let o=new Float32Array(Math.max(0,Math.floor(Number.isFinite(e)?e:0))),t=0;for(let i=0;i<o.length;i++){let c=(n()*2-1)*.08;t>0?(c+=(n()*2-1)*t,t=t<.02?0:t*.72):n()<15e-5&&(t=.4+n()*.6),o[i]=Math.max(-1,Math.min(1,c))}return o}function Dn(e){return!e.scrolled&&e.modifier}var Wr=.2,st=1.5;function On(e){if(!(!Number.isFinite(e)||e<=0))return{min:e*Wr,max:e}}function qn(e,n,o){let t=n==="in"?e/st:e*st;return Math.min(o.max,Math.max(o.min,t))}var Wt=2500;function Bn(e){return!(e.reducedMotion||e.hidden||e.dragging||e.resting||e.selected)}function Vn(e,n,o,t=4.5){return Math.max(t,e/Math.max(1,n)*(o?14:10))}var Ur=.8;function Wn(e,n,o,t,i=Ur){if(o<=0||t<=0)return;let c=S=>{let C=[...S].sort((m,D)=>m-D);return C[Math.floor((C.length-1)*i)]??0},d=c(e),v=c(n);if(d<1||v<1)return;let k=Math.min(o/2/d,t/2/v);return Math.min(1,Math.max(.3,1/k))}var Un="graph-landing-hero-lang";function Ut(e,n){if(e.length<2)return null;for(var o=-1,t=0;t<e.length;t++)e[t]===n&&(o=t);return e[(o+1)%e.length]||null}function Yn(e,n,o){for(var t=e.querySelectorAll("[data-hero-lang]"),i=0;i<t.length;i++){var c=t[i];c.hidden=c.getAttribute("data-hero-lang")!==n}if(o)for(var d=e.querySelectorAll("[data-hero-lang-toggle]"),v=0;v<d.length;v++){var k=d[v];k.textContent=o.toUpperCase(),k.setAttribute("lang",o)}}var cn="0.179.1",Yr="https://esm.sh/force-graph@1.51.4",$r=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${cn}`,Kr="https://esm.sh/d3-force-3d@3.0.6",Zr=`https://esm.sh/three-spritetext@1.9.2?deps=three@${cn}`,Xr=`https://esm.sh/three@${cn}`,jr=8,Jr=10;var dt=1,rn=4,Qr=.05,eo=.09,to=.8,no=12,ro=2.6,oo=1,$n=1,lt=.18,wr="graph-landing:lens",vr="graph-landing:tune",Kn="graph-landing:hint",on="graph-landing:ambient-audio",Zn="UDVtMYqUAyw",Yt=12,ao=1800,Xn=480,jn=260,io=450,so=1400,co=1e3,lo=.3,uo="https://www.youtube.com/iframe_api",fo=.22,Jn=1.25,mo=1.25,go=1.15,po=.55,Ce={x:330,y:235,z:565},Qn={x:0,y:0,z:0},ft=Math.hypot(Ce.x,Ce.y,Ce.z),er=.52,ho=300/ft,bo=1600/ft,tr=2.6,yo=5.6,nr=3.2,$t=64,rr=24,or=3,wo=.34,vo=.16,ar="#f2f3f4",ir="#f4c3d0",To=6,ko={wikilink:.5,tag:.4,external:.45,cooc:.3,folder:.3},xo="#a8b0c2",sr={min:80,max:200},cr={min:40,max:110},lr={min:160,max:280},ur={min:90,max:170},dr=220,fr=2,Eo=350,Kt={min:-170,max:-320},Zt={min:96,max:156},Xt={min:170,max:340};function Lo(e){return Re(e-.5,0,1)}function It(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function jt(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function So(e){let n=[];for(let o of Object.values(e)){let t=It(o);if(!En(t.filePath))continue;let i=typeof t.slug=="string"?t.slug:"";if(i.length===0)continue;let c=t.multilingual,d=c&&typeof c=="object"?c:void 0;n.push({slug:i,title:typeof t.title=="string"?t.title:i,links:jt(t.links),tags:jt(t.tags),externalLinks:jt(t.externalLinks),content:typeof t.excerpt=="string"?t.excerpt:typeof t.content=="string"?t.content:"",multilingual:d})}return n}function Mo(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=dr?n:`${n.slice(0,dr).trimEnd()}\\u2026`}function mt(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function mr(e){return mt(e)/(2*Math.PI)}function Nt(e,n,o){let t=mt(e),i=Math.acos(2*mr(`${e}:phi`)-1),c=n+(o-n)*mr(`${e}:r`);return{x:c*Math.sin(i)*Math.cos(t),y:c*Math.sin(i)*Math.sin(t),z:c*Math.cos(i)}}function Tr(e){return e==="index"||e.endsWith("/index")}function kr(e){return e==="tags"||e.startsWith("tags/")}function Co(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function xr(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Jt(e,n){return e.multilingual?.locale?e.multilingual.locale:xr(e.slug,n).locale}function Ao(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${xr(e.slug,n).permalink}`}function No(e,n){let o=e.find(t=>Jt(t,n.prefixes)===n.localeId);if(o)return o;if(n.localeId===n.sourceLocale)return e.find(t=>Jt(t,n.prefixes)===n.sourceLocale)??e.find(t=>Jt(t,n.prefixes)===void 0)}function Re(e,n,o){return Math.min(o,Math.max(n,e))}function gr(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function _o(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function ln(e){return _o(e).trim().toLowerCase()}function Io(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Ro(e){let n=e.trim();return n.length===0||Io(n)||kr(n)||Tr(n)?!0:ln(n).length===0}function Ho(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Er(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Po(e,n){let o=Er(e);return o===null?!1:!n.includes(new URL(o).hostname)}function pr(e){return`external:${e}`}function Go(e,n){let o=new URL(e),t=o.hostname.replace(/^www\\./,""),i=o.pathname;return(n.get(t)??0)>1&&i.length>1?`${t}${i}`:t}function zo(e){let n=new Map,o=new Map;for(let t of e){let i=ln(t.slug);i.length>0&&!n.has(i)&&n.set(i,t.slug);let c=t.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,t.slug);let d=c.replace(/\\s+/g,"-");d.length>0&&!o.has(d)&&o.set(d,t.slug)}return{byBasename:n,byTitle:o}}function Fo(e,n,o){if(n.has(e))return e;let t=ln(e),i=o.byBasename.get(t);if(i)return i;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(t);return c||null}function Do(e,n){return e.length===0?"":[...e].sort((t,i)=>(n.get(i)??0)-(n.get(t)??0))[0]??""}function Oo(e,n,o=void 0){let t=e.filter(u=>!Tr(u.slug)&&!kr(u.slug)&&!Co(u)),i=new Map;for(let u of t){let g=Ao(u,n.prefixes),x=i.get(g)??[];x.push(u),i.set(g,x)}let c=[];for(let u of i.values()){let g=No(u,n);g&&c.push(g)}let d=new Set(c.map(u=>u.slug)),v=zo(c),k=new Map,S=[],C=new Set,m=new Map,D=u=>{k.set(u,(k.get(u)??0)+1)},B=(u,g,x)=>u<g?`${u}|${g}|${x}`:`${g}|${u}|${x}`,L=(u,g,x,z)=>{let q=B(u,g,x);return C.has(q)?!1:(C.add(q),S.push({source:u,target:g,kind:x}),z&&(D(u),D(g)),!0)};for(let u of c)for(let g of u.links){if(Ro(g))continue;let x=Fo(g,d,v);x!==null&&x!==u.slug&&L(u.slug,x,"wikilink",!0)}let X=Ho(),ne=new Set;for(let u of c)for(let g of u.externalLinks){let x=Er(g);x===null||!Po(x,X)||(ne.add(x),L(u.slug,pr(x),"external",!0))}let ee=new Map;for(let u of ne){let g=new URL(u).hostname.replace(/^www\\./,"");ee.set(g,(ee.get(g)??0)+1)}let R=new Set,re=new Map;for(let u of c)for(let g of u.tags){m.set(g,(m.get(g)??0)+1);let x=`tag:${g}`;R.add(x),L(u.slug,x,"tag",!0);let z=re.get(g)??[];z.push(u.slug),re.set(g,z)}if(o!==!1)for(let u of re.values())u.length>no||u.forEach((g,x)=>{for(let z of u.slice(x+1))L(g,z,"cooc",!1)});if(o!==!1){let u=o?.maxTagsPerNote,g=o?.maxEdges,x=0;e:for(let z of c)if(!(z.tags.length<2)&&!(u!==void 0&&z.tags.length>u))for(let q=0;q<z.tags.length;q+=1)for(let H=q+1;H<z.tags.length;H+=1){if(g!==void 0&&x>=g)break e;L(`tag:${z.tags[q]}`,`tag:${z.tags[H]}`,"cooc",!1)&&(x+=1)}}let V=new Map;for(let u of c){let g=gr(u.slug);if(g==="root")continue;let x=V.get(g)??[];x.push(u.slug),V.set(g,x)}for(let u of V.values()){if(u.length<2)continue;let g=[...u].sort();for(let x=0;x<g.length;x+=1){let z=g[(x+1)%g.length],q=g[(x+fr)%g.length],H=g[x];H===void 0||z===void 0||(H!==z&&!C.has(B(H,z,"wikilink"))&&L(H,z,"folder",!1),g.length>fr+1&&q!==void 0&&H!==q&&!C.has(B(H,q,"wikilink"))&&L(H,q,"folder",!1))}}let j=[...k.values()],I=j.length>0?Math.min(...j):0,oe=j.length>0?Math.max(...j):0,G=u=>{let g=At(k.get(u)??0,I,oe);return dt+g*(rn-dt)},W=[...c].sort((u,g)=>(k.get(g.slug)??0)-(k.get(u.slug)??0)),J=new Set(W.filter(u=>(k.get(u.slug)??0)>0).slice(0,jr).map(u=>u.slug)),K=c.map(u=>{let g=J.has(u.slug),x=g?Nt(u.slug,cr.min,cr.max):Nt(u.slug,sr.min,sr.max);return{id:u.slug,name:u.title,type:"note",val:G(u.slug),degree:k.get(u.slug)??0,isHub:g,tag:"",slug:u.slug,url:"",folder:gr(u.slug),tags:u.tags,dominantTag:Do(u.tags,m),excerpt:Mo(u.content),phase:mt(u.slug),x:x.x,y:x.y,z:x.z}});for(let u of ne){let g=pr(u),x=Nt(g,lr.min,lr.max);K.push({id:g,name:Go(u,ee),type:"external",val:G(g)*po,degree:k.get(g)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:mt(g),x:x.x,y:x.y,z:x.z})}for(let u of R){let g=u.slice(4),x=Nt(u,ur.min,ur.max);K.push({id:u,name:g,type:"tag",val:Re(G(u)*.7,dt,rn),degree:k.get(u)??0,isHub:!1,tag:g,slug:`tags/${g}`,url:"",folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:mt(u),x:x.x,y:x.y,z:x.z})}return{nodes:K,links:S}}function Qt(e){let n=new Map,o=(t,i)=>{let c=n.get(t)??new Set;c.add(i),n.set(t,c)};for(let t of e){if(t.kind!=="wikilink"&&t.kind!=="tag"&&t.kind!=="external")continue;let i=O(t.source),c=O(t.target);o(i,c),o(c,i)}return n}function We(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let t=getComputedStyle(o).color;return o.remove(),t||n}function Lr(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:We("--graph-backdrop","#ffffff"),ink:We("--graph-text","#0f0f0f"),accent:We("--graph-accent","#a52142"),tertiary:We("--graph-external","#c75b75"),gray:We("--graph-muted","#737373"),external:We("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Te(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qo(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Bo(){return qo()}function $(){return document.documentElement.getAttribute("saved-theme")==="dark"}function an(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}return null}function Ue(e,n){let o=an(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Vo(e,n,o){let t=an(e),i=an(n);if(!t||!i)return e;let c=(d,v)=>Math.round(d+(v-d)*o);return`rgb(${c(t.r,i.r)}, ${c(t.g,i.g)}, ${c(t.b,i.b)})`}function _t(e){return e.bg}function Wo(e){return $()?_t(e):"rgba(0, 0, 0, 0)"}function Sr(e,n){let o=0;for(let t of e)o=o*31+t.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function hr(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Sr(e,[n.accent,n.tertiary,n.ink,n.gray])}function Uo(e,n){return e.length===0?n.ink:Sr(e,[n.accent,n.tertiary])}function Yo(e){let n=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),t="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(t=o.endsWith("/")?o:`${o}/`);let i=`${t}${n}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function $o(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function en(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Ko(e){let o=await import(e?$r:Yr);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):$o(o)}function Zo(){try{let e=sessionStorage.getItem(wr);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Xo(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let n=sessionStorage.getItem(vr);if(!n)return e;let o=It(JSON.parse(n)),t=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,d=typeof o.spread=="number"?o.spread:e.spread,v=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:t,edgeScale:i,zoom:c,spread:d,hubGravity:v}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function ut(e){try{sessionStorage.setItem(vr,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function tn(e){try{sessionStorage.setItem(wr,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function jo(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Jo(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Qo(e,n){return e.type==="note"&&e.folder===n}function br(e,n){let o=O(n),t=e.find(i=>i.id===o);return!t||t.type!=="note"?null:t.folder}function ea(e,n,o){let t=new Map;if(n==="folder"){let i=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return i.forEach((c,d)=>{let v=Math.PI*2*d/Math.max(i.length,1),k={x:Math.cos(v)*o,y:Math.sin(v)*o,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===c&&t.set(S.id,k)}),t}if(n==="tag"){let i=e.nodes.filter(d=>d.type==="tag"),c=new Map;i.forEach((d,v)=>{let k=Math.PI*2*v/Math.max(i.length,1);c.set(d.tag,{x:Math.cos(k)*o,y:Math.sin(k)*o,z:0})});for(let d of e.nodes)if(d.type==="tag"){let v=c.get(d.tag);v&&t.set(d.id,v)}else if(d.dominantTag.length>0){let v=c.get(d.dominantTag);v&&t.set(d.id,v)}}return t}function ta(e,n){let o=[],t=i=>{let c=n*i;for(let d of o){let v=e(d);v&&(d.vx=(d.vx??0)+(v.x-(d.x??0))*c,d.vy=(d.vy??0)+(v.y-(d.y??0))*c,d.vz=(d.vz??0)+(v.z-(d.z??0))*c)}};return t.initialize=i=>{o=i},t}function na(e){let n=[],o=t=>{let i=e*t;for(let c of n)c.vy=(c.vy??0)-(c.y??0)*i};return o.initialize=t=>{n=t},o}function yr(e,n,o,t){for(let i of e.querySelectorAll(n)){if(!(i instanceof HTMLElement))continue;let c=i.getAttribute(t);i.setAttribute("aria-pressed",c===o?"true":"false")}}function ra(e,n,o,t){let i=Qt(n.links),c=(r,a,s)=>r<a?`${r}|${a}|${s}`:`${a}|${r}|${s}`,d=new Map(t.fullData.nodes.map(r=>[r.id,r])),v=new Map,k=new Set,S=new Set;t.fullData!==n&&(v=Qt(t.fullData.links),k=new Set(n.nodes.map(r=>r.id)),S=new Set(n.links.map(r=>c(O(r.source),O(r.target),r.kind))));let C=r=>{if(t.fullData===n)return!1;let a=In(v,k,r,t.expandHops);if(!k.has(r)&&d.has(r)&&a.add(r),a.size===0)return!1;n.nodes=[...n.nodes],n.links=[...n.links];let s=t.layout.incrementalWarmup?d.get(r):void 0,l=0;for(let f of a){let y=d.get(f);if(y){if(s&&y.id!==s.id){let w=Rn(s,l,t.use3d);y.x=w.x,y.y=w.y,y.z=w.z,y.vx=y.vy=y.vz=0,l+=1}n.nodes.push(y),k.add(f)}}for(let f of t.fullData.links){let y=O(f.source),w=O(f.target);if(!k.has(y)||!k.has(w))continue;let p=c(y,w,f.kind);S.has(p)||(S.add(p),n.links.push(f))}return i=Qt(n.links),!0},m={lens:Zo(),allLabels:!0,focusTag:null,focusFolder:null},D=null,B=null,L=Xo(),X=!1,ne=!1,ee=0,R=Qn,re=ft,V=null,j=0,I=r=>At(r.degree,0,j),oe=()=>{e.cooldownTicks(t.layout.freezeAfterWarmup?90:t.layout.cooldownTicks??200),e.d3ReheatSimulation()},G=()=>B??D,W=new Set(n.nodes.filter(r=>r.type==="note").sort((r,a)=>a.degree-r.degree).slice(0,Jr).map(r=>r.id)),J=r=>{let a=r.val;return r.isHub&&(a*=Jn),m.lens==="tag"&&r.type==="tag"&&(a*=mo),m.focusTag&&r.id===`tag:${m.focusTag}`&&(a*=go),a},K=r=>{let a=G();return a===r.id?!0:a!==null?i.get(a)?.has(r.id)??!1:m.allLabels||W.has(r.id)},u=r=>{let a=rn*Jn,s=Re((J(r)-dt)/(a-dt),0,1);return(tr+s*(yo-tr))*L.nodeScale},g=r=>{let a=G();if(a!==null)return a===r||(i.get(a)?.has(r)??!1);if(m.focusTag===null&&m.focusFolder===null)return!0;let s=n.nodes.find(l=>l.id===r);return s?m.focusFolder!==null?Qo(s,m.focusFolder):m.focusTag!==null&&Jo(s,m.focusTag):!1},x=r=>r.type==="external"?o.current.gray:m.lens==="tag"?r.type==="tag"?o.current.tertiary:Uo(r.dominantTag,o.current):m.lens==="folder"?r.type==="tag"?o.current.tertiary:hr(r.folder,o.current):m.lens==="hub"?r.type==="tag"?o.current.tertiary:r.isHub?o.current.accent:o.current.ink:r.type==="tag"?o.current.gray:o.current.ink,z=r=>r.isHub?o.current.accent:r.type==="tag"?o.current.gray:o.current.ink,q=(r,a)=>{let s=d.get(r)?.degree??0,l=d.get(a)?.degree??0;return Math.log1p(Math.min(s,l))/Math.log1p(Math.max(1,j))},H=r=>{let a=G();if(a!==null&&(a===r.id||(i.get(a)?.has(r.id)??!1)))return $()?"#ffffff":o.current.accent;let s=$()?z(r):x(r);return g(r.id)?$()?s:r.isHub?o.current.accent:s:Vo(s,_t(o.current),1-lt)},he=r=>u(r)*nr*(rr/$t),ke=r=>r==="wikilink"?.8:r==="external"?.7:r==="tag"?.62:0,le=r=>{let a=O(r.source),s=O(r.target),l=G(),f;if(r.kind==="cooc"||r.kind==="folder"){if(!(r.kind==="cooc"?m.lens!=="folder":m.lens==="folder"))return 0;f=$()?.24:.26}else{if(l!==null&&(a===l||s===l))return $()?.72:.95;let y=q(a,s);f=ke(r.kind)*(.6+.4*y)}return(l!==null||m.focusTag!==null||m.focusFolder!==null)&&(!g(a)||!g(s))?f*lt:f},ae=r=>{let a=O(r.source),s=O(r.target),l=G(),f=$()?xo:o.current.gray;return l!==null&&(a===l||s===l)?$()?ar:o.current.accent:f},be=r=>Ue(ae(r),le(r)),ie=()=>({nodes:n.nodes,links:n.links}),xe=r=>{let a=W.has(r.id)||G()===r.id?o.current.ink:o.current.gray;return g(r.id)?a:Ue(a,lt)},Ee=r=>{if(!$()){let a=o.current.bg;return g(r.id)?Ue(a,.9):Ue(a,.28)}return g(r.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)"},Z=()=>{let r=e.controls?.().target;if(r&&(R={x:r.x,y:r.y,z:r.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let s={x:a.x-R.x,y:a.y-R.y,z:a.z-R.z},l=Math.hypot(s.x,s.y,s.z);if(l>1)return{dir:s,len:l}}}return{dir:Ce,len:ft}},pe=r=>{if(t.use3d){if(typeof e.cameraPosition!="function")return;let a=re/Re(L.zoom,.4,2.5),{dir:s,len:l}=Z(),f=a/l;e.cameraPosition({x:R.x+s.x*f,y:R.y+s.y*f,z:R.z+s.z*f},R,Te()?0:r),Qe();return}typeof e.zoom=="function"&&e.zoom(L.zoom,Te()?0:r)},Ye=()=>{let r=e.controls?.();r&&(r.minDistance=0,r.maxDistance=1/0)},de=()=>{let r=Lo(L.spread),a=Kt.min+r*(Kt.max-Kt.min),s=Zt.min+r*(Zt.max-Zt.min),l=new Map(n.nodes.map(M=>[M.id,M.degree])),f=Math.max(0,...l.values());j=f;let y=I,w=M=>Ln(l.get(O(M.source))??0,l.get(O(M.target))??0,f),p=e.d3Force("charge");p?.strength&&p.strength(M=>a*Sn(y(M))),p?.theta&&t.layout.chargeTheta!==void 0&&p.theta(t.layout.chargeTheta);let T=e.d3Force("link");T?.distance&&T.distance(M=>{let F=Mn(w(M),L.hubGravity);return m.lens==="tag"&&M.kind==="tag"?s*.72*F:M.kind==="cooc"||M.kind==="folder"?s:s*F}),T?.strength&&T.strength(M=>{if(M.kind==="cooc"||M.kind==="folder")return .015;let F=Cn(w(M),L.hubGravity);if(m.lens==="tag"&&M.kind==="tag")return .3*F;if(m.lens==="folder"){let P=br(n.nodes,M.source),ce=br(n.nodes,M.target);if(P!==null&&P===ce)return .16*F}return M.kind==="tag"?.14*F:(M.kind==="external"?.16:.24)*F}),t.forceCollide&&e.d3Force("collision",t.forceCollide(M=>u(M)+To).strength(.85).iterations(1));let b=e.d3Force("center");b?.strength&&b.strength(Qr);let _=Xt.min+r*(Xt.max-Xt.min),Y=ea(n,m.lens,_),U=m.lens==="folder"||m.lens==="tag"?.08:0;if(e.d3Force("cluster",ta(M=>Y.get(M.id)??null,U)),t.use3d){e.d3Force("flattenZ",null);let M=t.root.querySelector("#graph-landing-mount"),F=M instanceof HTMLElement?M.clientWidth>=M.clientHeight*to:!0;e.d3Force("squash",F?na(eo):null)}},A=new Map,fe=r=>ct(A,"dot",()=>{let a=$t,s=document.createElement("canvas");s.width=s.height=a;let l=s.getContext("2d");if(l){let f=rr,y=l.createRadialGradient(32,32,0,32,32,f);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.94,"rgba(255,255,255,1)"),y.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=y,l.fillRect(0,0,a,a)}return new r.CanvasTexture(s)}),$e=r=>ct(A,"glow",()=>{let a=$t,s=document.createElement("canvas");s.width=s.height=a;let l=s.getContext("2d");if(l){let f=a/2,y=l.createRadialGradient(f,f,0,f,f,f);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.25,"rgba(255,255,255,0.9)"),y.addColorStop(.45,"rgba(255,255,255,0.38)"),y.addColorStop(.7,"rgba(255,255,255,0.1)"),y.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=y,l.fillRect(0,0,a,a)}return new r.CanvasTexture(s)}),Ae=(r,a,s)=>{r.color.set(H(a));let l=we.get(r);l&&l.color.set(H(a))},Le=new Map,Se=new Map,ye=new Map,we=new WeakMap,Ne=new Map,He=new Map,gt=new Map,Ke=new Map,Pe=(r,a,s)=>{let l=`${a}|${s}`;return ct(gt,l,()=>new r.CylinderGeometry(a,a,1,s))},pt=(r,a,s)=>{let l=`${a}|${s}`;return ct(Ke,l,()=>new r.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1,blending:$()?r.AdditiveBlending:r.NormalBlending}))},Ge=getComputedStyle(t.root).getPropertyValue("--bodyFont").trim()||"Inter, system-ui, sans-serif",me=()=>{if(!t.use3d||typeof e.nodeThreeObject!="function")return;let r=t.spriteText,a=t.three,s=t.interaction.incrementalRepaint;if(Le.clear(),ye.clear(),Ne.clear(),s)for(let l of n.nodes)Ne.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let f=u(l),y=!1;if(a){let Y=new a.SpriteMaterial({map:fe(a),color:"#ffffff",transparent:!0,depthWrite:!1,blending:a.NormalBlending,opacity:1});Y.color.set(H(l)),s&&ye.set(l.id,Y);let U=new a.Sprite(Y);U.renderOrder=11;let M=f*nr;U.scale.x=M,U.scale.y=M,U.scale.z=1;let F=$(),P=new a.SpriteMaterial({map:$e(a),color:"#ffffff",transparent:!0,depthWrite:!1,blending:F?a.AdditiveBlending:a.NormalBlending,opacity:F?wo:vo});P.color.set(H(l)),we.set(Y,P);let ce=new a.Sprite(P);ce.renderOrder=10.5,ce.scale.x=or,ce.scale.y=or,ce.scale.z=1,ce.raycast=()=>{},U.add(ce),y=U}let w=K(l);if(!r||!s&&!w)return y;let p=Array.from(l.name),T=window.innerWidth<700?24:40,b=new r(p.length>T?`${p.slice(0,T).join("")}\\u2026`:l.name);if(b.color=xe(l),b.fontFace=Ge,b.backgroundColor=!1,b.fontWeight=W.has(l.id)?"500":"400",b.renderOrder=12,b.material.transparent=!0,b.material.depthWrite=!1,b.material.alphaTest=.01,b.material.toneMapped=!1,b.textHeight=W.has(l.id)?5.5:4.5,b.center.set(0,.5),b.position.x=f+3,b.position.y=0,s?(b.visible=w,Le.set(l.id,{sprite:b,node:l})):t.lod.labelDistance!==void 0&&Le.set(l.id,{sprite:b,node:l}),!a||y===!1)return b;let _=new a.Group;return _.add(y),_.add(b),_})},ht=()=>{let r=t.three;if(!t.use3d||!r||typeof e.linkThreeObject!="function")return;let a=new r.Vector3(0,1,0),s=t.lod.linkResolution??5,l=t.lod.cullDistance,f=t.interaction.incrementalRepaint,y=t.lod.shareLinkResources;if(Se.clear(),He.clear(),gt.clear(),Ke.clear(),f)for(let w of n.links){let p=O(w.source),T=O(w.target);for(let b of[p,T]){let _=He.get(b);_?_.push(w):He.set(b,[w])}}e.linkThreeObject(w=>{let p=ko[w.kind]*L.edgeScale,T=y?pt(r,ae(w),le(w)):new r.MeshBasicMaterial({color:ae(w),transparent:!0,opacity:le(w),depthWrite:!1,blending:$()?r.AdditiveBlending:r.NormalBlending}),b=y?Pe(r,p,s):new r.CylinderGeometry(p,p,1,s),_=new r.Mesh(b,T);return(l!==void 0||f)&&Se.set(w,_),_}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((w,p,T)=>{let b=p.end.x-p.start.x,_=p.end.y-p.start.y,Y=p.end.z-p.start.z,U=Math.sqrt(b*b+_*_+Y*Y);if(!$()){let M=typeof T.source=="string"?d.get(T.source):T.source,F=typeof T.target=="string"?d.get(T.target):T.target,P=M&&F?xn(p.start,p.end,he(M),he(F)):null;return P?(w.position.x=(P.start.x+P.end.x)/2,w.position.y=(P.start.y+P.end.y)/2,w.position.z=(P.start.z+P.end.z)/2,w.scale.x=1,w.scale.y=P.length,w.scale.z=1,P.length>0&&w.quaternion.setFromUnitVectors(a,new r.Vector3(P.end.x-P.start.x,P.end.y-P.start.y,P.end.z-P.start.z).normalize()),!0):(w.scale.y=0,!0)}return w.position.x=(p.start.x+p.end.x)/2,w.position.y=(p.start.y+p.end.y)/2,w.position.z=(p.start.z+p.end.z)/2,w.scale.x=1,w.scale.y=Math.max(U,.01),w.scale.z=1,w.quaternion.setFromUnitVectors(a,new r.Vector3(b,_,Y).normalize()),!0})},Ze=()=>{!t.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(r=>{let a=G();if(a===null||Te()||document.hidden)return 0;let s=O(r.source),l=O(r.target);return s===a||l===a?2:0})},ve=()=>{e.nodeVal(J),e.nodeColor(H),e.linkColor(be),e.linkWidth(r=>{let a=O(r.source),s=O(r.target),l=G(),f=L.edgeScale*($()?1:1.8);return l!==null&&(a===l||s===l)?.7*f:r.kind==="wikilink"||r.kind==="external"?.5*f:(r.kind==="tag"?.35:.25)*f}),typeof e.linkOpacity=="function"&&e.linkOpacity($n),Ze(),ht(),t.use3d||e.nodeCanvasObjectMode(()=>"replace")},bt=(r,a)=>{let s=Hn(i,r,a,Ne.keys()),l=new Set;for(let f of s){let y=Ne.get(f);if(!y)continue;let w=ye.get(f);w&&t.three&&Ae(w,y,t.three);let p=Le.get(f);p&&(p.sprite.color=xe(y),p.sprite.visible=K(y));for(let T of He.get(f)??[]){if(l.has(T))continue;l.add(T);let b=Se.get(T);b&&(t.lod.shareLinkResources&&t.three?b.material=pt(t.three,ae(T),le(T)):(b.material.color.set(ae(T)),b.material.opacity=le(T)))}}},ze=r=>{if(t.interaction.incrementalRepaint&&t.use3d){Ze(),bt(r,G());return}ve(),t.use3d&&me()},Fe=()=>{let r=t.root.querySelector("[data-graph-legend]");if(!(r instanceof HTMLElement))return;let a=(y,w)=>{let p=document.createElement("span");p.className="graph-landing__legend-item";let T=document.createElement("span");T.className="graph-landing__dot",T.setAttribute("aria-hidden","true"),T.style.background=y;let b=document.createElement("span");return b.textContent=w,p.append(T,b),p},s=t.root.dataset.legendNotes??"Notes",l=t.root.dataset.legendTags??"Tags",f=t.root.dataset.legendLinks??"Links";r.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,l),a(o.current.external,f))},Xe=r=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[r.dataset.key]=r.dataset.value,s.setAttribute("aria-pressed",r.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",r.dotColor!==null){let y=document.createElement("span");y.className="graph-landing__dot",y.style.background=r.dotColor,l.append(y)}l.append(document.createTextNode(r.label));let f=document.createElement("span");return f.className="graph-landing__tag-count",f.textContent=String(r.count),s.append(l,f),a.append(s),a},h=()=>{let r=t.root.querySelector("[data-graph-tags]");if(!(r instanceof HTMLElement))return;let a=t.root.querySelector("[data-graph-facet-label]"),s=t.root.querySelector(".graph-landing__tags");if(m.lens==="folder"){let f=t.root.dataset.folderRootLabel??"root",y=new Map;for(let p of n.nodes)p.type==="note"&&y.set(p.folder,(y.get(p.folder)??0)+1);let w=[...y.entries()].sort((p,T)=>T[1]-p[1]);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=w.length===0),r.replaceChildren(...w.map(([p,T])=>Xe({dataset:{key:"graphFolder",value:p},pressed:m.focusFolder===p,dotColor:hr(p,o.current),label:p==="root"?f:p,count:T})));return}let l=n.nodes.filter(f=>f.type==="tag").sort((f,y)=>y.degree-f.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=l.length===0),r.replaceChildren(...l.map(f=>Xe({dataset:{key:"graphTag",value:f.tag},pressed:m.focusTag===f.tag,dotColor:null,label:f.tag,count:f.degree})))},E=t.root.querySelector("[data-graph-hint]"),N=0,Q=()=>{if(!(!(E instanceof HTMLElement)||E.hidden)){E.hidden=!0,window.clearTimeout(N);try{sessionStorage.setItem(Kn,"1")}catch{}}},De=()=>{if(E instanceof HTMLElement){try{if(sessionStorage.getItem(Kn))return}catch{}E.hidden=!1,N=window.setTimeout(Q,9e3)}};window.addCleanup(()=>window.clearTimeout(N));let _e=!0,je=(r,a)=>{if(typeof e.graph2ScreenCoords!="function")return er;e.camera?.()?.updateMatrixWorld?.();let s=[],l=[];for(let f of ie().nodes){if(f.x===void 0||f.y===void 0)continue;let y=e.graph2ScreenCoords(f.x,f.y,f.z??0);s.push(Math.abs(y.x-r/2)),l.push(Math.abs(y.y-a/2))}return Wn(s,l,r,a)??er},Oe=0,yt=()=>{let r=t.root.querySelector("#graph-landing-mount"),a=r instanceof HTMLElement?r.clientWidth:0,s=r instanceof HTMLElement?r.clientHeight:0;if(n.nodes.length>0&&e.zoomToFit?.(0,40),n.nodes.length>1&&Z().len<10&&Oe++<120){Rt=window.requestAnimationFrame(yt);return}Oe=0,re=Z().len*je(a,s),pe(0),Qe(),Mr()},Mr=()=>{if(!t.use3d)return;let{dir:r,len:a}=Z();if(a<=1)return;let s={...R};V={position:{x:s.x+r.x,y:s.y+r.y,z:s.z+r.z},target:s,base:re}},Rt=0;e.onEngineStop(()=>{_e&&(Rt=window.requestAnimationFrame(()=>{_e=!1,yt(),t.root.dataset.graphFramed="true",De()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Rt));let Je=(r=!1)=>{e.warmupTicks(r&&t.layout.incrementalWarmup?0:t.layout.warmupTicks??(t.use3d?50:60)),e.graphData(ie()),de(),ve(),me(),Fe(),h(),yr(t.root,"[data-graph-lens]",m.lens,"data-graph-lens"),oe()},Cr=r=>{m.lens=r,r!=="tag"&&(m.focusTag=null),r!=="folder"&&(m.focusFolder=null),tn(r),Je()},Ar=r=>{m.focusTag=m.focusTag===r?null:r,m.focusFolder=null,m.focusTag&&(m.lens="tag",tn("tag")),Je()},Nr=r=>{m.focusFolder=m.focusFolder===r?null:r,m.focusTag=null,m.focusFolder&&(m.lens="folder",tn("folder")),Je()},un=()=>t.use3d?Wo(o.current):_t(o.current),Qe=()=>{if(!t.use3d||!t.lod.fog||!t.three||typeof e.scene!="function")return;let r=Z().len;e.scene().fog=new t.three.Fog(_t(o.current),r*ho,r*bo)};e.graphData(ie()),e.backgroundColor(un()),e.nodeLabel(()=>""),e.nodeRelSize(ro),typeof e.nodeOpacity=="function"&&e.nodeOpacity(oo),typeof e.linkOpacity=="function"&&e.linkOpacity($n),de(),ve();let qe=t.root.querySelector("[data-graph-preview]"),wt=t.root.querySelector("[data-graph-preview-chip]"),vt=t.root.querySelector("[data-graph-preview-title]"),Tt=t.root.querySelector("[data-graph-preview-excerpt]"),kt=0;window.addCleanup(()=>window.clearTimeout(kt));let _r=r=>{if(!(qe instanceof HTMLElement)||!(wt instanceof HTMLElement)||!(vt instanceof HTMLElement)||!(Tt instanceof HTMLElement))return;window.clearTimeout(kt);let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",l=t.root.dataset.legendLinks??"Links";if(r.type==="tag"){let f=t.root.dataset.previewTagTemplate??"{n} notes";wt.textContent=s,vt.textContent=`#${r.tag}`,Tt.textContent=f.replace("{n}",String(r.degree))}else r.type==="external"?(wt.textContent=l,vt.textContent=r.name,Tt.textContent=r.url):(wt.textContent=a,vt.textContent=r.name,Tt.textContent=r.excerpt);qe.hidden=!1,qe.dataset.visible="true"},dn=()=>{qe instanceof HTMLElement&&(window.clearTimeout(kt),kt=window.setTimeout(()=>{qe.dataset.visible="false",qe.hidden=!0},Eo))};if(e.onNodeHover(r=>{let a=G();D=r?r.id:null,B===null&&(r?_r(r):dn()),ze(a)}),t.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let s=e.controls();s.autoRotate=!1,s.autoRotateSpeed=fo}e.warmupTicks(t.layout.warmupTicks??50),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>$()?ar:o.current.accent),typeof e.cameraPosition=="function"&&(e.cameraPosition(Ce,Qn),L.zoom!==1&&pe(0)),me(),Qe();let r=t.lod.labelDistance,a=t.lod.cullDistance;if((r!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let s=e.cameraPosition.bind(e),l=t.root.querySelector("#graph-landing-mount"),f=0,y=()=>{let w=s();if(w&&typeof w.x=="number"&&typeof w.y=="number"&&typeof w.z=="number"){let p=Math.max(1,(l?.clientHeight??0)||window.innerHeight);if(r!==void 0){let T=[];for(let b of Le.values()){let _=b.node.x??0,Y=b.node.y??0,U=b.node.z??0,M=Math.hypot(w.x-_,w.y-Y,w.z-U);if(b.sprite.visible=Nn(K(b.node),G()===b.node.id||G()===null&&(m.allLabels||W.has(b.node.id)),M,r),b.sprite.visible){let F=Array.from(b.node.name),P=window.innerWidth<700?24:40,ce=F.length>P?`${F.slice(0,P).join("")}\\u2026`:b.node.name;b.sprite.text!==ce&&(b.sprite.text=ce);let ge=e.graph2ScreenCoords?.(_,Y,U);if(ge&&G()===null){let Pr=W.has(b.node.id),kn=Array.from(ce).length*(Pr?11:8)+12,Mt=ge.x>window.innerWidth*.6?ge.x-kn:ge.x,Dt=Mt+kn,Gr=T.some(Ot=>Math.abs(Ot.y-ge.y)<22&&Mt<Ot.right&&Dt>Ot.left);b.sprite.visible=!Gr&&Mt>=8&&Dt<=window.innerWidth-8,b.sprite.visible&&T.push({left:Mt,right:Dt,y:ge.y})}let vn=ge!==void 0&&ge.x>window.innerWidth*.6;b.sprite.center.set(vn?1:0,.5),b.sprite.position.x=(vn?-1:1)*(u(b.node)+3);let Tn=Vn(M,p,W.has(b.node.id));Math.abs(b.sprite.textHeight-Tn)>.5&&(b.sprite.textHeight=Tn)}}}if(a!==void 0){let T=G();for(let[b,_]of Se){let Y=O(b.source),U=O(b.target);if(T!==null&&(Y===T||U===T)){_.visible=!0;continue}let M=Math.hypot(w.x-_.position.x,w.y-_.position.y,w.z-_.position.z);_.visible=Bt(M,a)!=="dot"}}}f=window.requestAnimationFrame(y)};f=window.requestAnimationFrame(y),window.addCleanup(()=>window.cancelAnimationFrame(f))}}else e.warmupTicks(t.layout.warmupTicks??60),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??180),e.nodeCanvasObject((r,a,s)=>{let l=u(r),f=r.x??0,y=r.y??0;if(a.save(),a.beginPath(),a.arc(f,y,l,0,Math.PI*2),a.fillStyle=H(r),a.fill(),$()&&r.isHub&&(a.strokeStyle=g(r.id)?ir:Ue(ir,lt),a.lineWidth=1.2/s,a.stroke()),K(r)){a.globalAlpha=1;let w=11.5/s;a.font=`${w}px ${o.current.font}`,a.fillStyle=$()?g(r.id)?o.current.ink:Ue(o.current.ink,lt):xe(r),a.textAlign="center",a.textBaseline="bottom";let p=y-l-6;$()||(a.strokeStyle=Ee(r),a.lineWidth=2.5/s,a.lineJoin="round",a.strokeText(r.name,f,p)),a.fillText(r.name,f,p)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((r,a,s)=>{let l=u(r)+8;s.beginPath(),s.arc(r.x??0,r.y??0,l,0,Math.PI*2),s.fillStyle=a,s.fill()});let et=t.root.querySelector("[data-graph-inspect]"),xt=t.root.querySelector("[data-graph-inspect-chip]"),Et=t.root.querySelector("[data-graph-inspect-title]"),Lt=t.root.querySelector("[data-graph-inspect-excerpt]"),Ht=t.root.querySelector("[data-graph-inspect-tags]"),Pt=t.root.querySelector("[data-graph-inspect-connected]"),te=t.root.querySelector("[data-graph-inspect-open]"),Be=r=>{t.root.dataset.railOpen=r?"true":"false";let a=t.root.querySelector("[data-graph-rail-toggle]"),s=t.root.querySelector("[data-graph-rail-scrim]"),l=t.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",r?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",r?"false":"true"),s instanceof HTMLElement&&(s.hidden=!r)},ue=()=>{let r=Te(),a=Bn({reducedMotion:r,hidden:document.hidden,dragging:X,resting:ne,selected:B!==null});typeof e.controls=="function"&&(e.controls().autoRotate=a),Ze()},fn=window.matchMedia("(prefers-reduced-motion: reduce)");fn.addEventListener("change",ue),document.addEventListener("visibilitychange",ue),window.addCleanup(()=>{window.clearTimeout(ee),fn.removeEventListener("change",ue),document.removeEventListener("visibilitychange",ue)}),ue();let Ir=r=>{let a=i.get(r.id)??new Set,s=[];for(let l of a){let f=n.nodes.find(y=>y.id===l);f&&s.push(f)}return s.sort((l,f)=>f.degree-l.degree)},Rr=r=>{if(!(et instanceof HTMLElement)||!(xt instanceof HTMLElement)||!(Et instanceof HTMLElement)||!(Lt instanceof HTMLElement)||!(Ht instanceof HTMLElement)||!(Pt instanceof HTMLElement))return;let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",l=t.root.dataset.legendLinks??"Links",f=t.root.dataset.inspectEmpty??"No direct connections";r.type==="tag"?(xt.textContent=s,Et.textContent=`#${r.tag}`,Lt.textContent=(t.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(r.degree))):r.type==="external"?(xt.textContent=l,Et.textContent=r.name,Lt.textContent=r.url):(xt.textContent=a,Et.textContent=r.name,Lt.textContent=r.excerpt);let y=r.tags.map(p=>{let T=document.createElement("li");return T.textContent=p,T});Ht.replaceChildren(...y),Ht.hidden=y.length===0;let w=Ir(r).slice(0,12);if(w.length===0){let p=document.createElement("li");p.className="graph-landing__inspect-empty",p.textContent=f,Pt.replaceChildren(p)}else Pt.replaceChildren(...w.map(p=>{let T=document.createElement("li"),b=document.createElement("button");b.type="button",b.className="graph-landing__inspect-link",b.dataset.graphInspectId=p.id;let _=p.type==="tag"?s:p.type==="external"?l:a,Y=document.createElement("span");Y.textContent=_;let U=document.createElement("strong");return U.textContent=p.type==="tag"?`#${p.tag}`:p.name,b.append(Y,U),T.append(b),T}));te instanceof HTMLAnchorElement&&(r.type==="note"&&r.slug.length>0?(te.hidden=!1,te.href=Yo(r.slug).toString(),te.textContent=t.root.dataset.inspectRead??"Read note",te.removeAttribute("target"),te.removeAttribute("rel")):r.type==="external"&&r.url.length>0?(te.hidden=!1,te.href=r.url,te.textContent=t.root.dataset.inspectOpenExternal??"Open",te.target="_blank",te.rel="noopener noreferrer"):(te.hidden=!0,te.removeAttribute("href"),te.removeAttribute("target"),te.removeAttribute("rel"))),et.hidden=!1,t.root.dataset.inspecting="true",Be(!1),dn()},Ve=()=>{let r=G();if(B=null,et instanceof HTMLElement){let a=et.contains(document.activeElement);et.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}t.root.dataset.inspecting="false",D=null,ue(),ze(r)},Hr=r=>{let a=G();B=r.id,ue(),Rr(r),ze(a)},Gt=(r,a=!1)=>{if(Q(),C(r.id)&&Je(!0),Hr(r),a){R={x:r.x??0,y:r.y??0,z:r.z??0};let s=Te()?0:450;t.use3d&&e.cameraPosition?(re=ft,Ye(),e.cameraPosition({x:R.x+Ce.x/L.zoom,y:R.y+Ce.y/L.zoom,z:R.z+Ce.z/L.zoom},R,s)):e.centerAt?.(R.x,R.y,s)}},St=!1;e.onNodeClick((r,a)=>{r&&(St=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Gt(r,!0))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ve(),Be(!1)});let se=t.root.querySelector("#graph-landing-mount");if(se instanceof HTMLElement){let r=new ResizeObserver(()=>{e.width(se.clientWidth),e.height(se.clientHeight),B===null&&!_e&&yt()});r.observe(se),window.addCleanup(()=>r.disconnect());let a=null,s=0,l=p=>{Q(),a={x:p.clientX,y:p.clientY},St=!1,X=!0,window.clearTimeout(ee),ue()},f=(p,T)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=se.getBoundingClientRect(),_=p-b.left,Y=T-b.top,U=null,M=484;for(let F of ie().nodes){if(F.x===void 0||F.y===void 0)continue;let P=e.graph2ScreenCoords(F.x,F.y,F.z??0),ge=(P.x-_)**2+(P.y-Y)**2;ge<M&&(M=ge,U=F)}return U},y=p=>{let T=a;a=null,X=!1,ne=!0,window.clearTimeout(ee),ee=window.setTimeout(()=>{ne=!1,ue()},Wt),ue(),!(!T||(p.clientX-T.x)**2+(p.clientY-T.y)**2>25)&&(window.clearTimeout(s),s=window.setTimeout(()=>{if(St){St=!1;return}let _=f(p.clientX,p.clientY);_?Gt(_,!0):Ve()},0))},w=()=>{a=null,X=!1,ne=!0,window.clearTimeout(ee),ee=window.setTimeout(()=>{ne=!1,ue()},Wt),ue()};se.addEventListener("pointerdown",l,!0),se.addEventListener("pointerup",y,!0),se.addEventListener("pointercancel",w,!0),window.addCleanup(()=>{window.clearTimeout(s),se.removeEventListener("pointerdown",l,!0),se.removeEventListener("pointerup",y,!0),se.removeEventListener("pointercancel",w,!0)})}let zt=0;window.addCleanup(()=>window.clearTimeout(zt));let mn=()=>{if(!V)return;let r=On(V.base/Re(L.zoom,.4,2.5));if(!r)return;let a=Z().len;return{min:Math.min(r.min,a),max:Math.max(r.max,a)}},gn=(r,a,s)=>{let l=Te()?0:s;e.cameraPosition?.(r,a,l),window.clearTimeout(zt),zt=window.setTimeout(Qe,l)},Ft={distance:()=>t.use3d?Z().len:0,range:mn,zoomBy:r=>{if(!t.use3d){let y=typeof e.zoom=="function"?Number(e.zoom()):Number.NaN;if(!Number.isFinite(y))return;let w=r==="in"?y*st:y/st;e.zoom?.(Re(w,.2,8),Te()?0:400);return}let a=mn();if(!a)return;let{dir:s,len:l}=Z(),f=qn(l,r,a)/l;gn({x:R.x+s.x*f,y:R.y+s.y*f,z:R.z+s.z*f},R,400)},reset:()=>{if(B!==null&&Ve(),!t.use3d||!V){yt();return}let{dir:r,len:a}=Z();re=V.base,R={...V.target};let s=V.base/Re(L.zoom,.4,2.5)/a;gn({x:R.x+r.x*s,y:R.y+r.y*s,z:R.z+r.z*s},R,600)}};se instanceof HTMLElement&&(se.__graphZoom=Ft,window.addCleanup(()=>{delete se.__graphZoom}));let pn=t.root.querySelectorAll("[data-graph-zoom-step]"),hn=r=>{let a=r.currentTarget.dataset.graphZoomStep;Q(),a==="in"||a==="out"?Ft.zoomBy(a):a==="reset"&&Ft.reset()};for(let r of pn)r.addEventListener("click",hn);window.addCleanup(()=>{for(let r of pn)r.removeEventListener("click",hn)}),yr(t.root,"[data-graph-lens]",m.lens,"data-graph-lens"),Fe(),h(),m.lens!=="all"&&Je(),t.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let bn=()=>{o.current=Lr(),e.backgroundColor(un()),Qe(),ve(),me(),Fe()};document.addEventListener("themechange",bn),window.addCleanup(()=>document.removeEventListener("themechange",bn));let yn=r=>{let a=r.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Ve();return}if(a.closest("[data-graph-rail-toggle]")){let T=t.root.dataset.railOpen!=="true";T&&Ve(),Be(T);return}if(a.closest("[data-graph-rail-scrim]")){Be(!1);return}let s=a.closest("[data-graph-inspect-id]");if(s instanceof HTMLElement&&s.dataset.graphInspectId){let T=t.fullData.nodes.find(b=>b.id===s.dataset.graphInspectId);T&&Gt(T,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&jo(l.dataset.graphLens)){Cr(l.dataset.graphLens);return}let f=a.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){Ar(f.dataset.graphTag);return}let y=a.closest("[data-graph-folder]");if(y instanceof HTMLElement&&y.dataset.graphFolder){Nr(y.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){oe();return}let w=a.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){m.allLabels=!m.allLabels,w.setAttribute("aria-pressed",m.allLabels?"true":"false");let T=w.dataset.labelShow??"Labels",b=w.dataset.labelHide??"Labels",_=m.allLabels?b:T;w.title=_,w.setAttribute("aria-label",_),me();return}if(a.closest("[data-graph-theme]")){let T=$()?"light":"dark";document.documentElement.setAttribute("saved-theme",T),localStorage.setItem("theme",T),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${T}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:T}}));return}let p=a.closest("[data-graph-tags-toggle]");if(p instanceof HTMLButtonElement){let T=t.root.querySelector(".graph-landing__tags");if(T instanceof HTMLElement){let b=T.dataset.open==="true";T.dataset.open=b?"false":"true",p.setAttribute("aria-expanded",b?"false":"true")}}},tt=t.root.querySelector("[data-graph-node-scale]"),nt=t.root.querySelector("[data-graph-edge-scale]");if(tt instanceof HTMLInputElement){tt.value=String(Math.round(L.nodeScale*100));let r=()=>{L.nodeScale=Number(tt.value)/100,ut(L),de(),oe(),ve(),t.use3d&&me()};tt.addEventListener("input",r),window.addCleanup(()=>tt.removeEventListener("input",r))}if(nt instanceof HTMLInputElement){nt.value=String(Math.round(L.edgeScale*100));let r=()=>{L.edgeScale=Number(nt.value)/100,ut(L),ve()};nt.addEventListener("input",r),window.addCleanup(()=>nt.removeEventListener("input",r))}let rt=t.root.querySelector("[data-graph-hub-gravity]");if(rt instanceof HTMLInputElement){rt.value=String(Math.round(L.hubGravity*100));let r=()=>{let a=Number(rt.value)/100;L.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,ut(L),de(),oe()};rt.addEventListener("input",r),window.addCleanup(()=>rt.removeEventListener("input",r))}let ot=t.root.querySelector("[data-graph-zoom]");if(ot instanceof HTMLInputElement){ot.value=String(Math.round(L.zoom*100));let r=()=>{L.zoom=Number(ot.value)/100,ut(L),pe(200)};ot.addEventListener("input",r),window.addCleanup(()=>ot.removeEventListener("input",r))}let at=t.root.querySelector("[data-graph-spread]");if(at instanceof HTMLInputElement){at.value=String(Math.round(L.spread*100));let r=()=>{L.spread=Number(at.value)/100,ut(L),de(),oe()};at.addEventListener("input",r),window.addCleanup(()=>at.removeEventListener("input",r))}Be(!1),t.root.addEventListener("click",yn),window.addCleanup(()=>t.root.removeEventListener("click",yn));let wn=r=>{if(r.key==="Escape"){if(t.root.dataset.railOpen==="true"){Be(!1);return}Ve()}};window.addEventListener("keydown",wn),window.addCleanup(()=>window.removeEventListener("keydown",wn))}function oa(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function aa(){try{return window.localStorage.getItem(on)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function nn(e){try{if(e){window.localStorage.setItem(on,"stopped");return}window.localStorage.removeItem(on)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function ia(e){let n=performance.now(),o=0,t=i=>{let c=Math.min(1,(i-n)/e.durationMs),d=c*c;e.apply(e.from+(e.to-e.from)*d),c<1&&(o=window.requestAnimationFrame(t))};return o=window.requestAnimationFrame(t),()=>{window.cancelAnimationFrame(o)}}function sa(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let t=window,i=t.onYouTubeIframeAPIReady;if(t.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let c=t.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=uo,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function ca(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}var sn=class{constructor(n){Ie(this,"level",n);Ie(this,"context",null);Ie(this,"master",null);Ie(this,"crackleGain",null);Ie(this,"crackleSource",null);Ie(this,"crackleBuffer",null)}ensureContext(){if(this.context)return this.context.state==="suspended"&&this.context.resume(),this.context;let n=window.AudioContext??window.webkitAudioContext;if(!n)return null;try{this.context=new n}catch(o){return console.error("[graph-landing] vinyl effects unavailable",o),null}return this.master=this.context.createGain(),this.master.gain.value=this.level,this.master.connect(this.context.destination),this.context}burst(n){let o=this.ensureContext();if(!o||!this.master)return;let t=Math.max(1,Math.round(o.sampleRate*n.durationS)),i=o.createBuffer(1,t,o.sampleRate),c=i.getChannelData(0);for(let S=0;S<t;S++)c[S]=(Math.random()*2-1)*Math.exp(-6*S/t);let d=o.createBufferSource();d.buffer=i;let v=o.createBiquadFilter();v.type=n.filter,v.frequency.value=n.frequency;let k=o.createGain();k.gain.value=n.peak,d.connect(v),v.connect(k),k.connect(this.master),d.start(),d.onended=()=>{d.disconnect(),v.disconnect(),k.disconnect()}}needleDrop(){this.burst({durationS:.22,filter:"lowpass",frequency:160,peak:.9}),this.burst({durationS:.035,filter:"bandpass",frequency:2200,peak:.45})}needleLift(){this.burst({durationS:.025,filter:"bandpass",frequency:3e3,peak:.3}),this.burst({durationS:.12,filter:"lowpass",frequency:200,peak:.35})}setCrackle(n){let o=this.ensureContext();if(!o||!this.master)return;if(!n){if(this.crackleGain&&this.crackleSource){let d=this.crackleGain,v=this.crackleSource;d.gain.cancelScheduledValues(o.currentTime),d.gain.setValueAtTime(d.gain.value,o.currentTime),d.gain.linearRampToValueAtTime(0,o.currentTime+.4),v.stop(o.currentTime+.45),v.onended=()=>{v.disconnect(),d.disconnect()}}this.crackleSource=null,this.crackleGain=null;return}if(this.crackleSource)return;if(!this.crackleBuffer){let v=Fn(o.sampleRate*4);this.crackleBuffer=o.createBuffer(1,v.length,o.sampleRate),this.crackleBuffer.getChannelData(0).set(v)}let t=o.createBufferSource();t.buffer=this.crackleBuffer,t.loop=!0;let i=o.createBiquadFilter();i.type="bandpass",i.frequency.value=1800,i.Q.value=.7;let c=o.createGain();c.gain.value=0,c.gain.linearRampToValueAtTime(.25,o.currentTime+.8),t.connect(i),i.connect(c),c.connect(this.master),t.start(),this.crackleSource=t,this.crackleGain=c}close(){this.setCrackle(!1),this.context&&(this.context.close(),this.context=null,this.master=null)}};function la(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),t=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),c=e.querySelector("[data-graph-music-track-list]"),d=e.querySelector("[data-graph-music-status]"),v=e.querySelector("[data-graph-music-dock]"),k=e.querySelector("[data-graph-music-now]"),S=e.querySelector("[data-graph-music-now-title]"),C=e.querySelector("[data-graph-music-now-artist]"),m=e.querySelector("[data-graph-deck-title]"),D=e.querySelector("[data-graph-deck-artist]"),B=Array.from(e.querySelectorAll("[data-graph-record]"));if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(c instanceof HTMLElement)||!(d instanceof HTMLElement))return;let L=e.dataset.audioStop??"Stop music",X=e.dataset.audioPlay??"Play music",ne=e.dataset.musicLibraryOpen??"Open record collection",ee=e.dataset.musicLibraryClose??"Close record collection",R=e.dataset.musicCurrentTrack??"Current track",re=[];try{let h=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(h))for(let E of h){if(!E||typeof E!="object")continue;let N=E;typeof N.title!="string"||typeof N.url!="string"||N.artist!==void 0&&typeof N.artist!="string"||re.push({title:N.title,...typeof N.artist=="string"?{artist:N.artist}:{},url:N.url})}}catch{}let V=An(re);V.length===0&&V.push({title:"Ambient track",videoId:Zn});let j=0,I=null,oe=!1,G=null,W=!aa(),J=!1,K=!1,u=e.dataset.graphMusicVinylFx==="false"?null:new sn(lo),g=0,x=0,z=0,q=0,H=0,he=h=>{let E=x?Math.min(100,h-x):16;x=h,q=Gn(q,H,E,H>0?io:so),z=(z+Pn(q)*E)%360;for(let N of B)N.style.transform=`rotate(${z.toFixed(2)}deg)`;if(q>0||H>0){g=window.requestAnimationFrame(he);return}g=0,x=0},ke=h=>{if(H=h,e.dataset.graphPlatter=h>0?"on":"off",Te()){q=0;return}g||(g=window.requestAnimationFrame(he))},le=0,ae=h=>{e.dataset.graphArm=h},be=h=>{e.style.setProperty("--graph-arm-angle",`${zn(h).toFixed(2)}deg`)},ie=()=>{le&&(window.clearInterval(le),le=0)},xe=()=>{ie(),be(0),le=window.setInterval(()=>{if(!I||!J)return;let h=I.getDuration?.()??0,E=I.getCurrentTime?.()??0;h>0&&be(E/h)},co)},Ee=0,Z=new Set,pe=(h,E)=>new Promise(N=>{let Q=window.setTimeout(()=>{Z.delete(Q),N(E===Ee)},Te()?0:h);Z.add(Q)}),Ye=()=>{for(let h of Z)window.clearTimeout(h);Z.clear()},de=()=>V[j]??V[0]??{title:"Ambient track",videoId:Zn},A=h=>{e.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${h}/hqdefault.jpg")`)},fe=()=>de().videoId,$e=()=>{c.replaceChildren(),V.forEach((h,E)=>{let N=document.createElement("button");N.type="button",N.className="graph-landing__music-track",N.dataset.graphMusicTrackIndex=String(E),N.setAttribute("aria-current",E===j?"true":"false");let Q=document.createElement("img");Q.className="graph-landing__music-track-cover",Q.src=`https://i.ytimg.com/vi/${h.videoId}/hqdefault.jpg`,Q.alt="",Q.loading="lazy";let De=document.createElement("span");De.className="graph-landing__music-track-copy";let _e=document.createElement("span");if(_e.className="graph-landing__music-track-title",_e.textContent=h.title,De.appendChild(_e),h.artist){let Oe=document.createElement("span");Oe.className="graph-landing__music-track-artist",Oe.textContent=h.artist,De.appendChild(Oe)}let je=document.createElement("span");je.className="graph-landing__music-track-sleeve",je.appendChild(Q),N.append(je,De),c.appendChild(N)}),d.textContent=`${R}: ${de().title}`,Le()},Ae=h=>{e.dataset.musicLibraryOpen=h?"true":"false",i.hidden=!h,i.setAttribute("aria-hidden",h?"false":"true"),t.setAttribute("aria-expanded",h?"true":"false"),t.setAttribute("aria-label",h?ee:ne),t.title=h?ee:ne},Le=()=>{let h=n.dataset.playing==="true";v&&(v.dataset.playing=h?"true":"false"),k&&(k.hidden=!h);let E=de();S&&(S.textContent=E.title),C&&(C.textContent=E.artist??"",C.hidden=!E.artist),m&&(m.textContent=E.title),D&&(D.textContent=E.artist??"",D.hidden=!E.artist)},Se=h=>{n.setAttribute("aria-pressed",h?"true":"false"),n.setAttribute("aria-label",h?L:X),n.title=h?L:X,n.dataset.playing=h?"true":"false",Le()},ye=()=>{G&&(G(),G=null)},we=h=>{I&&I.setVolume(Math.max(0,Math.min(Yt,h)))},Ne=async(h,E)=>{ae("play"),u?.needleDrop(),await pe(jn,E)&&(h.unMute(),we(0),h.playVideo(),u?.setCrackle(!0),xe(),ye(),G=ia({from:0,to:Yt,durationMs:ao,apply:we}))},He=async h=>{let E=++Ee;ke(Vt),ae("cue"),be(0),await pe(Xn,E)&&await Ne(h,E)},gt=async()=>{let h=++Ee;ye(),ie(),u?.setCrackle(!1),e.dataset.graphArm==="play"&&u?.needleLift(),ae("cue"),ke(0),await pe(jn,h)&&ae("rest")},Ke=async(h,E)=>{let N=++Ee;ye(),ie(),u?.setCrackle(!1),u?.needleLift(),h.mute(),ae("cue"),ke(Vt),await pe(Xn,N)&&(h.loadVideoById(E),h.mute(),await Ne(h,N))},Pe=h=>{!W||J||(J=!0,Se(!0),He(h))},pt=()=>{W=!1,J=!1,nn(!0),gt(),I&&(I.mute(),I.pauseVideo(),we(0)),Se(!1)},Ge=async()=>{if(!I)try{let h=await sa();if(I)return;I=ca({api:h,host:o,videoId:fe(),onReady:E=>{oe=!0,E.mute(),we(0),E.playVideo(),W&&K&&Pe(E)},onEnded:E=>{if(!W)return;j=(j+1)%V.length;let N=fe();if(A(N),$e(),J){Ke(E,N);return}E.loadVideoById(N),E.mute(),we(0)}})}catch(h){console.error("[graph-landing] ambient audio unavailable",h)}},me=h=>{let E=h.target;if(!(E instanceof Element&&E.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!W||J||oa())){if(K=!0,oe&&I){Pe(I);return}Ge()}},ht=()=>{if(W&&J){pt();return}if(K=!0,W=!0,nn(!1),oe&&I){Pe(I);return}Ge()},Ze=h=>{if(!(!Number.isInteger(h)||h<0||h>=V.length)){if(j=h,A(fe()),$e(),Ae(!1),W=!0,K=!0,nn(!1),oe&&I){J?Ke(I,fe()):(I.loadVideoById(fe()),I.mute(),Pe(I));return}Ge()}},ve=()=>{let h=e.dataset.musicLibraryOpen!=="true";if(h){e.dataset.railOpen="false";let E=e.querySelector("[data-graph-rail-toggle]"),N=e.querySelector("#graph-landing-rail"),Q=e.querySelector("[data-graph-rail-scrim]");E instanceof HTMLButtonElement&&E.setAttribute("aria-expanded","false"),N instanceof HTMLElement&&N.setAttribute("aria-hidden","true"),Q instanceof HTMLElement&&(Q.hidden=!0)}Ae(h)},bt=h=>{let E=h.target;if(!(E instanceof Element))return;let N=E.closest("[data-graph-music-track-index]");N instanceof HTMLButtonElement&&Ze(Number(N.dataset.graphMusicTrackIndex))},ze=h=>{if(e.dataset.musicLibraryOpen!=="true")return;let E=h.target;(!(E instanceof Element)||!E.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&Ae(!1)},Fe=h=>{h.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(Ae(!1),h.stopImmediatePropagation())},Xe=()=>{if(I){if(document.hidden){ye(),I.pauseVideo();return}W&&J&&(I.playVideo(),we(Yt))}};A(fe()),ae("rest"),be(0),ke(0),Se(!1),$e(),Ae(!1),Ge(),n.addEventListener("click",ht),t.addEventListener("click",ve),c.addEventListener("click",bt),e.addEventListener("click",ze),e.addEventListener("pointerdown",me,!0),e.addEventListener("touchstart",me,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",Xe),window.addEventListener("keydown",Fe),window.addCleanup(()=>{n.removeEventListener("click",ht),t.removeEventListener("click",ve),c.removeEventListener("click",bt),e.removeEventListener("click",ze),e.removeEventListener("pointerdown",me,!0),e.removeEventListener("touchstart",me,!0),document.removeEventListener("visibilitychange",Xe),window.removeEventListener("keydown",Fe),ye(),ie(),Ye(),g&&(window.cancelAnimationFrame(g),g=0),u?.close(),I&&(I.pauseVideo(),I.destroy(),I=null)})}async function ua(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(n instanceof HTMLElement&&o instanceof HTMLElement){let A=n.parentElement,fe=n.nextSibling;o.insertBefore(n,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{A?.isConnected&&n.isConnected&&A.insertBefore(n,fe?.parentNode===A?fe:null)})}la(e);let t=e.querySelector("#graph-landing-mount");if(!(t instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let i=e.querySelectorAll("[data-graph-counts]"),c=e.dataset.locale??e.dataset.graphDefaultLocale??"en",d=e.dataset.sourceLocale??c,v=(e.dataset.localePrefixes??"").split(",").map(A=>A.trim()).filter(A=>A.length>0),k=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",S=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",C=e.dataset.graphIndexPath??"",m=Me(e.dataset.maxRenderedNodes,A=>Number.parseInt(A,10)),D=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,B=Number.isFinite(D)?D:1,L=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,X=e.dataset.graphRenderMode==="3d"?"3d":"auto",ne=e.dataset.graphLayoutFreezeAfterWarmup==="true",ee=Me(e.dataset.graphLayoutWarmupTicks,A=>Number.parseInt(A,10)),R=Me(e.dataset.graphLayoutCooldownTicks,A=>Number.parseInt(A,10)),re=Me(e.dataset.graphLayoutChargeTheta,Number.parseFloat),V=e.dataset.graphLayoutIncrementalWarmup==="true",j=Me(e.dataset.graphLodLabelDistance,Number.parseFloat),I=Me(e.dataset.graphLodCullDistance,Number.parseFloat),oe=e.dataset.graphLodFog==="true",G=Me(e.dataset.graphLodLinkResolution,A=>Number.parseInt(A,10)),W=e.dataset.graphInteractionIncrementalRepaint==="true",J=e.dataset.graphLodShareLinkResources==="true",K=!1,u=null,g={current:Lr()},x=()=>{K=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady,delete e.dataset.graphFramed};window.addCleanup(x);let z=window.setTimeout(()=>{e.dataset.graphFramed="true"},8e3);window.addCleanup(()=>window.clearTimeout(z));let q=Bo();if(X==="3d"&&!q){en(t,"3D graph unavailable: WebGL is required.");return}let H=X==="3d"||q,he=Ko(H),ke=H?import(Zr).then(A=>A.default??null).catch(A=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",A),null)):Promise.resolve(null),le=H?import(Xr).catch(A=>(console.error("[graph-landing] three unavailable; using default node rendering",A),null)):Promise.resolve(null),ae=H?import(Kr).then(A=>A.forceCollide??null).catch(A=>(console.error("[graph-landing] d3-force-3d collision force unavailable",A),null)):Promise.resolve(null);he.catch(()=>{});let be;try{be=It(S==="graphIndex"?await fetch(C).then(A=>A.json()):await fetchData)}catch(A){throw en(t,"Graph could not load its index."),A}if(K)return;let ie=Oo(So(be),{localeId:c,sourceLocale:d,prefixes:v},L),xe=_n(ie,m),Ee=k.replace("{n}",String(ie.nodes.length)).replace("{m}",String(ie.links.length));for(let A of i)A.textContent=Ee;let Z;try{Z=await he}catch(A){throw en(t,"Graph could not load. Check your network connection."),A}let[pe,Ye,de]=await Promise.all([ke,le,ae]);K||(t.replaceChildren(),u=Z(t),u.width(t.clientWidth),u.height(t.clientHeight),t.__graphLanding=u,t.__graphData=xe,ra(u,xe,g,{use3d:H,root:e,spriteText:pe,three:Ye,forceCollide:de,fullData:ie,expandHops:B,layout:{freezeAfterWarmup:ne,warmupTicks:ee,cooldownTicks:R,chargeTheta:re,incrementalWarmup:V},lod:{labelDistance:j,cullDistance:I,fog:oe,linkResolution:G,shareLinkResources:J},interaction:{incrementalRepaint:W}}))}var da="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let t=o.dataset.preferredLocale;if(t)try{localStorage.setItem(da,t)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let t=n.closest("[data-hero-lang-toggle]")?.closest(".graph-landing");if(!(t instanceof HTMLElement))return;let i=[...t.querySelectorAll("[data-hero-lang]")],c=[...new Set(i.map(C=>C.dataset.heroLang??""))],d=i.find(C=>!C.hidden)?.dataset.heroLang,v=Ut(c,d);if(!v||v===d)return;let k=()=>[...t.querySelectorAll(".graph-landing__section[id]")].filter(C=>!C.closest("[hidden]")),S=null;if(window.scrollY>80)for(let C of k()){let m=C.getBoundingClientRect().top;(!S||Math.abs(m)<Math.abs(S.top))&&(S={id:C.id,top:m})}if(Yn(t,v,Ut(c,v)),S){let C=k().find(m=>m.id===S.id);C&&window.scrollBy({top:C.getBoundingClientRect().top-S.top,behavior:"instant"})}try{localStorage.setItem(Un,v)}catch(C){console.error("[graph-landing] failed to persist the chosen language",C)}});function fa(){let e=document.querySelector(".graph-landing[data-profile]");if(!(e instanceof HTMLElement)||e.dataset.profileReady==="1")return;e.dataset.profileReady="1",window.addCleanup(()=>{delete e.dataset.profileReady});let n=()=>window.scrollY>24,o=()=>{n()?(e.dataset.scrolled="true",e.dataset.railOpen="false"):delete e.dataset.scrolled};o(),window.addEventListener("scroll",o,{passive:!0}),window.addCleanup(()=>window.removeEventListener("scroll",o));let t=e.querySelector("#graph-landing-mount");if(t instanceof HTMLElement){let k=C=>{if(C.pointerType!=="touch")return;let m=t.__graphLanding?.controls?.();m&&(m.noZoom=!1,m.enableZoom=!0)},S=C=>{let m=t,D=typeof m.__graphLanding?.controls=="function"?m.__graphLanding.controls():void 0;if(!D)return;let B=m.__graphZoom?.range();B&&(D.minDistance=B.min,D.maxDistance=B.max);let L=Dn({scrolled:n(),modifier:C.ctrlKey||C.metaKey});D.noZoom=!L,D.enableZoom=L};t.addEventListener("wheel",S,{capture:!0,passive:!0}),t.addEventListener("pointerdown",k,!0),window.addCleanup(()=>{t.removeEventListener("wheel",S,{capture:!0}),t.removeEventListener("pointerdown",k,!0)})}let i=e.querySelectorAll("[data-profile-reveal]"),c=e.querySelectorAll(".graph-landing__section[id]");if(typeof IntersectionObserver!="function")return;let d=new IntersectionObserver(k=>{for(let S of k)S.isIntersecting&&S.target instanceof HTMLElement&&(S.target.dataset.profileReveal="shown",d.unobserve(S.target))},{rootMargin:"0px 0px -8% 0px",threshold:.04});for(let k of i)k.dataset.profileReveal="pending",d.observe(k);let v=new IntersectionObserver(k=>{for(let S of k){if(!S.isIntersecting)continue;let C=e.querySelectorAll(".graph-landing__topbar-links a");for(let m of C)m.getAttribute("href")===`#${S.target.id}`?m.setAttribute("aria-current","true"):m.removeAttribute("aria-current")}},{rootMargin:"-30% 0px -60% 0px"});for(let k of c)v.observe(k);window.addCleanup(()=>{d.disconnect(),v.disconnect();for(let k of i)k.dataset.profileReveal=""})}document.addEventListener("nav",()=>{fa(),ua()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = `/* The bare landing is one locked viewport; with profile sections the page scrolls. */
html:has(.graph-landing:not([data-profile])),
body:has(.graph-landing:not([data-profile])) {
  height: 100dvh;
  overflow: hidden;
}

html:has(.graph-landing[data-profile]) {
  scroll-behavior: smooth;
  scroll-padding-top: 72px;
}
@media (prefers-reduced-motion: reduce) {
  html:has(.graph-landing[data-profile]) {
    scroll-behavior: auto;
  }
}

.page:has(.graph-landing) > #quartz-body {
  /* The host pads the body below desktop width; the landing sets its own
     gutters, and that padding would clip the panel shadows into a hard edge. */
  padding-inline: 0;
  row-gap: 0;
}

.page:has(.graph-landing) footer,
.page:has(.graph-landing) header,
.page:has(.graph-landing) .left,
.page:has(.graph-landing) .right,
.page:has(.graph-landing) .sidebar {
  display: none;
}

.center.minimal:has(.graph-landing) {
  max-width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
}

.graph-landing {
  --graph-backdrop: var(--light);
  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);
  --graph-surface-strong: var(--light);
  --graph-border: var(--lightgray);
  --graph-text: var(--darkgray);
  --graph-muted: var(--gray);
  --graph-accent: var(--secondary);
  --graph-accent-soft: var(--highlight);
  --graph-external: var(--tertiary);
  background: var(--graph-backdrop);
  color: var(--graph-text);
  font-family: var(--bodyFont);
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
}

/* Pinned to the viewport so host wrappers (page padding, header rows)
   can never crop the canvas. */
.graph-landing__hero {
  background: var(--graph-backdrop);
  height: 100svh;
  height: 100dvh;
  inset: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.graph-landing__canvas {
  height: 100%;
  inset: 0;
  position: absolute;
  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */
  touch-action: none;
  width: 100%;
  z-index: 1;
}

.graph-landing__canvas canvas {
  display: block;
  height: 100% !important;
  width: 100% !important;
}

.graph-landing__overlay {
  height: 100%;
  inset: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.graph-landing__rail {
  backdrop-filter: blur(16px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 14px;
  bottom: 74px;
  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 16px;
  max-height: calc(100dvh - 140px);
  max-width: 248px;
  opacity: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 14px 14px 12px;
  pointer-events: none;
  position: absolute;
  top: auto;
  touch-action: pan-y;
  transform: translateY(10px);
  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
  visibility: hidden;
  width: 248px;
  z-index: 4;
}

.graph-landing[data-rail-open=true] .graph-landing__rail {
  opacity: 1;
  pointer-events: auto;
  transform: none;
  visibility: visible;
}

.graph-landing__rail > * {
  flex-shrink: 0;
}

.graph-landing__chrome {
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  left: 0;
  padding: 1.25rem 1.5rem;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
}

.page:has(.graph-landing) .search {
  position: static;
  flex: 0 0 44px;
  width: auto;
}

.graph-landing__chrome:has(.search-container.active) {
  z-index: 30;
}

.page:has(.graph-landing) .search > .search-button {
  width: 44px;
  height: 44px;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: 0;
}

.page:has(.graph-landing) .search > .search-button p {
  display: none;
}

.graph-landing__title-block--chrome {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  pointer-events: auto;
}

.graph-landing__scrim {
  display: none;
}

.graph-landing__rail-toggle {
  align-items: center;
  backdrop-filter: blur(10px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 10px;
  bottom: 16px;
  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);
  color: var(--graph-text);
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  left: 16px;
  pointer-events: auto;
  position: absolute;
  width: 48px;
  z-index: 5;
}

.graph-landing__rail-toggle:focus-visible,
.graph-landing__audio-toggle:focus-visible,
.graph-landing__music-library-toggle:focus-visible,
.graph-landing__music-track:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__music-dock {
  align-items: center;
  backdrop-filter: blur(10px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 10px;
  bottom: 16px;
  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);
  box-sizing: border-box;
  display: flex;
  gap: 2px;
  height: 48px;
  left: 72px;
  padding: 3px;
  pointer-events: auto;
  position: absolute;
  z-index: 5;
}

.graph-landing__music-now {
  background: color-mix(in srgb, var(--graph-text) 5%, transparent);
  border: 0;
  border-radius: 7px;
  box-sizing: border-box;
  display: block;
  flex: 0 1 auto;
  max-width: 180px;
  min-width: 0;
  opacity: 0;
  overflow: hidden;
  padding: 5px 10px 5px 12px;
  position: relative;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease, width 0.25s ease;
  white-space: nowrap;
  width: 0;
}

.graph-landing__music-now::before {
  background: repeating-radial-gradient(circle at left center, color-mix(in srgb, var(--graph-text) 10%, transparent) 0 1px, transparent 1px 3px);
  content: "";
  inset: 0;
  mask-image: linear-gradient(90deg, #000, transparent 56px);
  pointer-events: none;
  position: absolute;
  -webkit-mask-image: linear-gradient(90deg, #000, transparent 56px);
}

.graph-landing__music-now[hidden] {
  display: none;
}

.graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {
  opacity: 1;
  transform: translateX(0);
  width: 180px;
}

.graph-landing__music-now-title,
.graph-landing__music-now-artist {
  display: block;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.graph-landing__music-now-title {
  color: var(--graph-text);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.graph-landing__music-now-artist {
  color: var(--graph-muted);
  font-size: 10px;
  line-height: 1.3;
}

.graph-landing__audio-toggle {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  padding: 0;
  transition: background 160ms ease;
  width: 40px;
}

.graph-landing__audio-toggle:hover {
  background: color-mix(in srgb, var(--graph-text) 7%, transparent);
}

.graph-landing__audio-toggle:hover .graph-landing__turntable {
  transform: translateY(-1px);
}

.graph-landing__audio-toggle:active .graph-landing__turntable {
  transform: scale(0.96);
}

.graph-landing__turntable {
  display: block;
  height: 38px;
  position: relative;
  transition: transform 160ms ease;
  width: 38px;
}

.graph-landing__turntable-plinth {
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
}

/* A flat vinyl disc: black with hairline grooves, an accent label, no plinth. */
.graph-landing__turntable-record {
  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.055) 2px 2.5px), radial-gradient(circle at 38% 36%, #2a2d35, #15171d 62%);
  border: 1px solid color-mix(in srgb, var(--graph-text) 22%, transparent);
  border-radius: 50%;
  box-sizing: border-box;
  height: 30px;
  left: 3px;
  position: absolute;
  top: 4px;
  width: 30px;
}

.graph-landing__turntable-label {
  background-color: var(--graph-accent);
  background-image: var(--graph-music-artwork);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  inset: 9px;
  position: absolute;
}

.graph-landing__turntable-spindle {
  background: #e9e9ec;
  border-radius: 50%;
  height: 3px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3px;
}

/* Both tonearms share one state machine driven from the root:
   rest (parked beside the platter), cue (swung over, lifted), play (down in
   the groove, creeping toward the label as the track progresses). */
.graph-landing__turntable-tonearm,
.graph-landing__deck-tonearm {
  fill: var(--graph-surface-strong);
  filter: drop-shadow(0 0.5px 0.5px rgba(0, 0, 0, 0.25));
  position: absolute;
  stroke: var(--graph-muted);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
  transform: rotate(-24deg);
  transform-box: fill-box;
  transform-origin: 78% 18%;
  translate: 0 0;
  transition: transform 480ms cubic-bezier(0.25, 0.8, 0.25, 1), translate 260ms cubic-bezier(0.4, 0, 0.6, 1), filter 260ms ease;
}

.graph-landing__turntable-tonearm {
  height: 24px;
  right: 0;
  top: 0;
  width: 24px;
}

.graph-landing[data-graph-arm=cue] .graph-landing__turntable-tonearm,
.graph-landing[data-graph-arm=cue] .graph-landing__deck-tonearm {
  filter: drop-shadow(0 2.5px 2px rgba(0, 0, 0, 0.35));
  transform: rotate(var(--graph-arm-angle, 4deg));
  translate: 0 -2px;
}

.graph-landing[data-graph-arm=play] .graph-landing__turntable-tonearm,
.graph-landing[data-graph-arm=play] .graph-landing__deck-tonearm {
  transform: rotate(var(--graph-arm-angle, 4deg));
}

/* The dock disc idles as a flat vinyl; while the motor runs the label picks
   up a faint reflection sweep so the spin reads even at 30px. */
.graph-landing__turntable-record {
  transition: box-shadow 400ms ease;
  will-change: transform;
}

.graph-landing[data-graph-platter=on] .graph-landing__turntable-record {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--graph-accent) 40%, transparent);
}

.graph-landing__music-library-toggle {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 7px;
  color: var(--graph-muted);
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  padding: 0;
  transition: background 160ms ease, color 160ms ease;
  width: 40px;
}

.graph-landing__music-library-toggle:hover,
.graph-landing__music-library-toggle[aria-expanded=true] {
  background: color-mix(in srgb, var(--graph-text) 7%, transparent);
  color: var(--graph-text);
}

.graph-landing__music-library {
  backdrop-filter: blur(16px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 14px;
  bottom: 74px;
  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);
  box-sizing: border-box;
  left: 72px;
  max-height: min(58dvh, 440px);
  overflow: auto;
  overscroll-behavior: contain;
  padding: 12px;
  pointer-events: auto;
  position: absolute;
  width: min(420px, 100vw - 32px);
  z-index: 5;
}

.graph-landing__music-library[hidden] {
  display: none;
}

/* The library opens on a deck: a 96px platter with the current record and a
   full-size tonearm, so putting a record on is something you can watch. */
.graph-landing__deck {
  align-items: center;
  background: color-mix(in srgb, var(--graph-text) 4%, transparent);
  border-radius: 12px;
  display: grid;
  gap: 14px;
  grid-template-columns: 116px minmax(0, 1fr);
  margin-bottom: 12px;
  padding: 10px 12px 10px 8px;
}

.graph-landing__deck-platter {
  display: block;
  height: 112px;
  position: relative;
  width: 116px;
}

.graph-landing__deck-platter::before {
  background: radial-gradient(circle, color-mix(in srgb, var(--graph-text) 14%, transparent) 0 46%, color-mix(in srgb, var(--graph-text) 6%, transparent) 47% 50%, transparent 51%);
  border-radius: 50%;
  content: "";
  height: 108px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 108px;
}

.graph-landing__deck-record {
  background: repeating-radial-gradient(circle, transparent 0 2.4px, rgba(255, 255, 255, 0.05) 2.4px 3px), radial-gradient(circle at 36% 34%, #2b2e36, #121419 64%);
  border: 1px solid color-mix(in srgb, var(--graph-text) 24%, transparent);
  border-radius: 50%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
  box-sizing: border-box;
  height: 100px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 100px;
  will-change: transform;
}

/* Static light sweep over the spinning grooves. */
.graph-landing__deck-platter::after {
  background: conic-gradient(from 210deg, transparent 0 18%, rgba(255, 255, 255, 0.1) 29%, transparent 40%, transparent 58%, rgba(255, 255, 255, 0.06) 70%, transparent 82%);
  border-radius: 50%;
  content: "";
  height: 100px;
  left: 4px;
  pointer-events: none;
  position: absolute;
  top: 6px;
  width: 100px;
}

.graph-landing__deck-label {
  background-color: var(--graph-accent);
  background-image: var(--graph-music-artwork);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
  inset: 31px;
  position: absolute;
}

.graph-landing__deck-spindle {
  background: #e9e9ec;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  height: 6px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
}

.graph-landing__deck-tonearm {
  height: 72px;
  right: -8px;
  stroke-width: 1.5;
  top: -10px;
  width: 72px;
}

.graph-landing__deck-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.graph-landing__deck-title,
.graph-landing__deck-artist {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.graph-landing__deck-title {
  color: var(--graph-text);
  font-size: 0.92rem;
  font-weight: 650;
}

.graph-landing__deck-artist {
  color: var(--graph-muted);
  font-size: 0.74rem;
}

.graph-landing__deck-meta {
  align-items: center;
  color: var(--graph-muted);
  display: flex;
  font-size: 0.66rem;
  font-variant-numeric: tabular-nums;
  gap: 6px;
  letter-spacing: 0.08em;
  margin-top: 4px;
  text-transform: uppercase;
}

.graph-landing__deck-lamp {
  background: color-mix(in srgb, var(--graph-text) 18%, transparent);
  border-radius: 50%;
  height: 6px;
  transition: background 300ms ease, box-shadow 300ms ease;
  width: 6px;
}

.graph-landing[data-graph-platter=on] .graph-landing__deck-lamp {
  background: var(--graph-accent);
  box-shadow: 0 0 6px color-mix(in srgb, var(--graph-accent) 70%, transparent);
}

.graph-landing__music-library-heading {
  align-items: baseline;
  color: var(--graph-text);
  display: flex;
  font-size: 0.78rem;
  font-weight: 700;
  gap: 8px;
  justify-content: space-between;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.graph-landing__music-library-heading [data-graph-music-status] {
  color: var(--graph-muted);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: normal;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
}

.graph-landing__music-track-list {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.graph-landing__music-track {
  align-items: center;
  background: color-mix(in srgb, var(--graph-text) 4%, transparent);
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--graph-text);
  cursor: pointer;
  display: grid;
  gap: 8px;
  grid-template-columns: 48px minmax(0, 1fr);
  min-height: 62px;
  padding: 6px;
  text-align: left;
}

.graph-landing__music-track:hover,
.graph-landing__music-track[aria-current=true] {
  background: color-mix(in srgb, var(--graph-accent) 12%, transparent);
  border-color: color-mix(in srgb, var(--graph-accent) 45%, var(--graph-border));
}

.graph-landing__music-track-sleeve {
  display: block;
  height: 48px;
  position: relative;
  width: 48px;
}

/* A disc edge peeks out of the sleeve on hover, like pulling a record. */
.graph-landing__music-track-sleeve::before {
  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.05) 2px 2.5px), radial-gradient(circle at 40% 36%, #2b2e36, #121419 64%);
  border-radius: 50%;
  content: "";
  height: 44px;
  left: 2px;
  position: absolute;
  top: 2px;
  transform: translateX(0);
  transition: transform 260ms cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 44px;
}

.graph-landing__music-track:hover .graph-landing__music-track-sleeve::before,
.graph-landing__music-track:focus-visible .graph-landing__music-track-sleeve::before {
  transform: translateX(12px);
}

.graph-landing__music-track-cover {
  border-radius: 6px;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.25);
  display: block;
  height: 48px;
  /* Quartz's base styles give every img a 1rem vertical margin. */
  margin: 0;
  object-fit: cover;
  position: relative;
  width: 48px;
}

.graph-landing__music-track-copy {
  min-width: 0;
  /* Painted above the sleeve's disc so the pull never covers the title. */
  position: relative;
}

.graph-landing__music-track-title,
.graph-landing__music-track-artist {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.graph-landing__music-track-title {
  font-size: 0.78rem;
  font-weight: 650;
}

.graph-landing__music-track-artist {
  color: var(--graph-muted);
  font-size: 0.7rem;
  margin-top: 2px;
}

.graph-landing__audio,
.graph-landing__audio iframe {
  height: 113px;
  width: 200px;
}

.graph-landing__audio {
  bottom: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
}

.graph-landing__top-right {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 1.25rem;
  justify-content: flex-end;
  pointer-events: auto;
}

.graph-landing__title-block {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
}

.graph-landing__title {
  color: var(--graph-text);
  font-family: var(--bodyFont);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
  text-decoration: none;
}

a.graph-landing__title:hover,
a.graph-landing__title:focus-visible {
  color: var(--graph-accent);
}

.graph-landing__counts {
  color: var(--graph-muted);
  cursor: default;
  font-family: var(--bodyFont);
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
}

.graph-landing__lenses {
  display: flex;
  flex-wrap: wrap;
  gap: 0 4px;
}

.graph-landing__chip {
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--graph-muted);
  cursor: pointer;
  font-family: var(--bodyFont);
  font-size: 13px;
  line-height: 1.2;
  min-height: 44px;
  padding: 12px 8px;
  position: relative;
}

.graph-landing__chip:hover {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__chip:focus-visible {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__chip[aria-pressed=true] {
  color: var(--graph-accent);
  font-weight: 500;
}

.graph-landing__chip[aria-pressed=true]::after {
  background: currentColor;
  bottom: 11px;
  content: "";
  height: 1px;
  left: 8px;
  pointer-events: none;
  position: absolute;
  right: 8px;
}

.graph-landing__section-label {
  color: var(--graph-muted);
  cursor: default;
  font-family: var(--bodyFont);
  font-size: 11px;
  letter-spacing: 0.04em;
  line-height: 1.3;
  margin: 0 0 4px;
  pointer-events: none;
}

.graph-landing__nav-link,
.graph-landing__locale-toggle,
.graph-landing__icon-btn,
.graph-landing__filters-toggle {
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--graph-muted);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--bodyFont);
  font-size: 13px;
  font-weight: 400;
  height: 44px;
  justify-content: center;
  line-height: 1;
  min-height: 44px;
  padding: 0;
  text-decoration: none;
}

.graph-landing__nav-link:hover,
.graph-landing__nav-link:focus-visible,
.graph-landing__locale-toggle:hover,
.graph-landing__locale-toggle:focus-visible,
.graph-landing__icon-btn:hover,
.graph-landing__icon-btn:focus-visible,
.graph-landing__filters-toggle:hover,
.graph-landing__filters-toggle:focus-visible {
  color: var(--graph-accent);
  outline: none;
}

.graph-landing__nav-link:focus-visible,
.graph-landing__locale-toggle:focus-visible,
.graph-landing__icon-btn:focus-visible,
.graph-landing__filters-toggle:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__nav-link,
.graph-landing__locale-toggle {
  color: var(--graph-text);
}

.graph-landing__icon-btn {
  min-width: 44px;
}

/* Sun shows in dark mode (click -> light), moon in light mode. */
.graph-landing__icon--sun {
  display: none;
}

:root[saved-theme=dark] .graph-landing__icon--sun {
  display: block;
}

:root[saved-theme=dark] .graph-landing__icon--moon {
  display: none;
}

.graph-landing__tags {
  min-width: 0;
}

.graph-landing__filters-toggle {
  display: none;
}

.graph-landing__tag-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.graph-landing__tag-item {
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--graph-muted);
  cursor: pointer;
  display: flex;
  font-family: var(--bodyFont);
  font-size: 13px;
  gap: 8px;
  justify-content: space-between;
  line-height: 1.4;
  min-height: 32px;
  padding: 6px 8px;
  text-align: left;
  width: 100%;
}

.graph-landing__tag-item:hover {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__tag-item:focus-visible {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__tag-item[aria-pressed=true] {
  color: var(--graph-accent);
  font-weight: 500;
}

.graph-landing__facet-name {
  align-items: center;
  display: inline-flex;
  gap: 7px;
}

.graph-landing__tag-count {
  color: var(--graph-muted);
  font-variant-numeric: tabular-nums;
}

.graph-landing__utils {
  border-top: 1px solid var(--graph-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
}

.graph-landing__tune {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.graph-landing__tune-head {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.graph-landing__tools {
  display: inline-flex;
  gap: 2px;
}

.graph-landing__tool {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 6px;
  color: var(--graph-muted);
  cursor: pointer;
  display: inline-flex;
  height: 44px;
  justify-content: center;
  width: 44px;
}

.graph-landing__tool:hover {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__tool:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__tool[aria-pressed=true] {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__slider {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.graph-landing__slider span {
  color: var(--graph-muted);
  font-size: 11px;
}

.graph-landing__slider input[type=range] {
  accent-color: var(--graph-accent);
  cursor: pointer;
  width: 100%;
}

.graph-landing__legend {
  align-items: center;
  color: var(--graph-muted);
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  gap: 8px 12px;
  line-height: 1.3;
}

.graph-landing__legend-item {
  align-items: center;
  display: inline-flex;
  gap: 6px;
}

.graph-landing__dot {
  border-radius: 50%;
  display: inline-block;
  height: 7px;
  width: 7px;
}

.graph-landing__dot--note {
  background: var(--graph-text);
}

.graph-landing__dot--tag {
  background: var(--graph-muted);
}

.graph-landing__dot--external {
  background: var(--graph-muted);
}

.graph-landing__preview {
  background: var(--graph-surface);
  backdrop-filter: blur(14px);
  border: 1px solid var(--graph-border);
  border-radius: 14px;
  bottom: 1.5rem;
  left: auto;
  margin: 0;
  opacity: 0;
  padding: 1rem 1.3rem 0.9rem;
  pointer-events: none;
  position: absolute;
  right: 1.5rem;
  transform: translateY(6px);
  transition: opacity 0.22s ease, transform 0.22s ease;
  width: min(400px, 100% - 3rem);
}

.graph-landing__preview[data-visible=true] {
  opacity: 1;
  transform: translateY(0);
}

.graph-landing__hint {
  animation: graph-landing-hint-in 0.5s ease both;
  bottom: 24px;
  color: var(--graph-muted);
  font-size: 12px;
  letter-spacing: 0.01em;
  line-height: 1.4;
  margin: 0;
  max-width: calc(100% - 2rem);
  padding: 0;
  pointer-events: none;
  position: absolute;
  right: 24px;
  text-align: right;
  white-space: nowrap;
  z-index: 3;
}

.graph-landing__preview[data-visible=true] ~ .graph-landing__hint {
  opacity: 0;
}

.graph-landing__hint[hidden] {
  display: none;
}

.graph-landing__zoom {
  bottom: calc(24px + 1.4em + 14px);
  display: flex;
  gap: 6px;
  pointer-events: auto;
  position: absolute;
  right: 24px;
  z-index: 3;
}

.graph-landing__zoom-button {
  align-items: center;
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 8px;
  color: var(--graph-muted);
  cursor: pointer;
  display: inline-flex;
  height: 36px;
  justify-content: center;
  padding: 0;
  transition: border-color 0.15s ease, color 0.15s ease;
  width: 36px;
}

.graph-landing__zoom-button svg {
  fill: none;
  height: 14px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
  width: 14px;
}

.graph-landing__zoom-button:hover {
  border-color: color-mix(in srgb, var(--graph-accent) 45%, var(--graph-border));
  color: var(--graph-accent);
}

.graph-landing__zoom-button:focus-visible {
  color: var(--graph-accent);
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

@keyframes graph-landing-hint-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.graph-landing__preview-chip {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  margin: 0 0 0.35rem;
  text-transform: uppercase;
}

.graph-landing__preview-title {
  color: var(--graph-text);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 0.4rem;
}

.graph-landing__preview-excerpt {
  color: var(--graph-muted);
  display: -webkit-box;
  font-size: 13px;
  line-height: 1.5;
  margin: 0 0 0.55rem;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.graph-landing__preview-hint {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.12em;
  margin: 0;
  text-transform: uppercase;
}

:root[saved-theme=dark] .graph-landing__preview-title {
  color: rgba(255, 255, 255, 0.92);
}

:root[saved-theme=dark] .graph-landing__preview-excerpt {
  color: rgba(251, 251, 251, 0.72);
}

.graph-landing__inspect {
  background: var(--graph-surface-strong);
  backdrop-filter: blur(16px);
  border-left: 1px solid var(--graph-border);
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100dvh - 4.5rem);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 1.1rem 1.2rem 1.3rem;
  pointer-events: auto;
  position: absolute;
  right: 0;
  top: 4.5rem;
  width: min(22rem, 100% - 15rem);
  z-index: 6;
}

.graph-landing__inspect[hidden] {
  display: none;
}

.graph-landing__inspect-bar {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.graph-landing__inspect-chip {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  margin: 0;
  text-transform: uppercase;
}

.graph-landing__inspect-close {
  background: transparent;
  border: 0;
  border-radius: 8px;
  color: var(--graph-muted);
  cursor: pointer;
  font-family: var(--bodyFont);
  font-size: 12px;
  min-height: 44px;
  padding: 0 10px;
}

.graph-landing__inspect-close:hover,
.graph-landing__inspect-close:focus-visible {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__inspect-close:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__inspect-title {
  color: var(--graph-text);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.35;
  margin: 0;
}

.graph-landing__inspect-excerpt {
  color: var(--graph-muted);
  font-size: 13px;
  line-height: 1.55;
  margin: 0;
}

.graph-landing__inspect-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.graph-landing__inspect-tags li {
  border: 1px solid var(--graph-border);
  border-radius: 999px;
  color: var(--graph-muted);
  font-size: 11px;
  padding: 2px 8px;
}

.graph-landing__inspect-section {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  margin: 6px 0 0;
  text-transform: uppercase;
}

.graph-landing__inspect-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.graph-landing__inspect-link {
  align-items: baseline;
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--graph-text);
  cursor: pointer;
  display: flex;
  font-family: var(--bodyFont);
  gap: 8px;
  min-height: 32px;
  padding: 4px 2px;
  text-align: left;
  width: 100%;
}

.graph-landing__inspect-link span {
  color: var(--graph-muted);
  flex: 0 0 3.2rem;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.graph-landing__inspect-link strong {
  font-size: 13px;
  font-weight: 500;
}

.graph-landing__inspect-empty {
  color: var(--graph-muted);
  font-size: 12px;
  padding: 4px 0;
}

.graph-landing__inspect-open {
  align-self: flex-start;
  color: var(--graph-accent);
  font-size: 13px;
  font-weight: 500;
  margin-top: 8px;
  min-height: 44px;
  padding: 10px 0;
  text-decoration: none;
}

.graph-landing__inspect-open[hidden] {
  display: none;
}

:root[saved-theme=dark] .graph-landing__inspect-title,
:root[saved-theme=dark] .graph-landing__inspect-link {
  color: rgba(255, 255, 255, 0.92);
}

:root[saved-theme=dark] .graph-landing__inspect-excerpt {
  color: rgba(251, 251, 251, 0.72);
}

@media (max-width: 700px) {
  .graph-landing__preview {
    display: none;
  }
  .graph-landing__hint {
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 14px);
    left: 16px;
    right: 16px;
    text-align: center;
    white-space: normal;
  }
  .graph-landing__inspect {
    border-left: 0;
    border-radius: 16px 16px 0 0;
    border-top: 1px solid var(--graph-border);
    bottom: 0;
    left: 0;
    max-height: min(52dvh, 100dvh - 4.5rem);
    padding-bottom: max(12px, env(safe-area-inset-bottom));
    right: 0;
    top: auto;
    width: 100%;
    z-index: 5;
  }
}
.graph-landing__error {
  align-items: center;
  color: var(--graph-muted);
  display: flex;
  font-size: 0.9rem;
  height: 100%;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
}

/* While the first layout settles: three quiet dots, then the framed graph
   fades in. The renderer sets data-graph-framed after the first overview fit
   (or after 8s at the latest). */
.graph-landing__loading {
  display: flex;
  gap: 8px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.6s ease;
  z-index: 1;
}

.graph-landing__loading span {
  animation: graph-landing-pulse 1.4s ease-in-out infinite;
  background: var(--graph-muted);
  border-radius: 50%;
  height: 6px;
  opacity: 0.25;
  width: 6px;
}

.graph-landing__loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.graph-landing__loading span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes graph-landing-pulse {
  0%, 100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.8;
  }
}
.graph-landing[data-graph-framed] .graph-landing__loading,
.graph-landing__hero:has(.graph-landing__error) .graph-landing__loading {
  opacity: 0;
}

.graph-landing__canvas canvas {
  transition: opacity 0.6s ease;
}

.graph-landing[data-graph-ready]:not([data-graph-framed]) .graph-landing__canvas canvas {
  opacity: 0;
}

@media (min-width: 861px) {
  .graph-landing[data-hero] .graph-landing__loading {
    left: calc(50% + clamp(0px, 18vw, 280px) / 2);
  }
}
/* Hero copy (options.hero): bottom-left manifesto over the canvas. */
.graph-landing__copy {
  bottom: 88px;
  left: clamp(16px, 4vw, 48px);
  max-width: 640px;
  pointer-events: none;
  position: absolute;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 3;
}

.graph-landing__copy > * {
  pointer-events: auto;
}

/* The overview runs off the screen edges, so labels can drift behind the
   copy. A tight backdrop-coloured outline on the glyphs keeps the text
   readable without darkening the graph around it. */
@media (min-width: 701px) {
  .graph-landing__eyebrow,
  .graph-landing__headline,
  .graph-landing__lede {
    text-shadow: 0 0 1px var(--graph-backdrop), 0 0 2px var(--graph-backdrop), 0 0 3px var(--graph-backdrop), 0 0 5px var(--graph-backdrop), 0 0 8px var(--graph-backdrop), 0 0 12px var(--graph-backdrop), 0 0 18px var(--graph-backdrop);
  }
}
.graph-landing[data-rail-open=true] .graph-landing__copy {
  opacity: 0;
  visibility: hidden;
}

.graph-landing__eyebrow {
  color: var(--graph-accent);
  font-family: var(--codeFont);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  margin: 0 0 0.9rem;
  text-transform: uppercase;
}

.graph-landing__headline {
  color: var(--graph-text);
  font-family: "Newsreader", "Noto Serif KR", Georgia, serif;
  font-size: clamp(2.4rem, 6.2vw, 4.6rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.02;
  margin: 0 0 1.1rem;
  overflow-wrap: break-word;
  text-wrap: balance;
  word-break: keep-all;
}

.graph-landing__headline em {
  color: var(--graph-accent);
  font-style: italic;
}

.graph-landing__lede {
  color: var(--graph-muted);
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.6;
  margin: 0 0 1.4rem;
  max-width: 48ch;
  overflow-wrap: break-word;
  text-wrap: balance;
  word-break: keep-all;
}

.graph-landing__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.graph-landing__btn {
  border: 1px solid var(--graph-border);
  border-radius: 999px;
  color: var(--graph-text);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.7rem 1.15rem;
  text-decoration: none;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.graph-landing__btn:hover {
  border-color: var(--graph-accent);
  color: var(--graph-accent);
}

.graph-landing__btn--accent {
  background: var(--graph-accent);
  border-color: var(--graph-accent);
  color: var(--light);
}

.graph-landing__btn--accent:hover {
  background: color-mix(in srgb, var(--graph-accent) 85%, #000);
  color: var(--light);
}

@media (max-width: 700px) {
  /* Phones: the graph owns the upper part of the screen and the copy the lower,
     so labels never run through the headline. */
  .graph-landing[data-hero] .graph-landing__canvas {
    bottom: 48%;
    height: auto;
    -webkit-mask-image: linear-gradient(to bottom, #000 78%, transparent);
    mask-image: linear-gradient(to bottom, #000 78%, transparent);
  }
  .graph-landing[data-hero] .graph-landing__loading {
    top: 26%;
  }
  .graph-landing__copy {
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 16px);
    left: 16px;
    max-width: none;
    right: 16px;
  }
  /* Fade the constellation behind the copy so labels do not collide with it. */
  .graph-landing__copy::before {
    background: linear-gradient(to top, var(--graph-surface-strong) 0, var(--graph-surface-strong) 70%, transparent 100%);
    bottom: -24px;
    content: "";
    left: -16px;
    position: absolute;
    right: -16px;
    top: -56px;
    z-index: -1;
  }
  .graph-landing__headline {
    font-size: clamp(1.8rem, 8vw, 2.4rem);
  }
  .graph-landing__lede {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    font-size: 0.95rem;
    overflow: hidden;
  }
  .graph-landing[data-hero] .graph-landing__hint {
    display: none;
  }
  /* Touch targets: 44px, stacked at the graph's right edge. */
  .graph-landing__zoom {
    bottom: auto;
    flex-direction: column;
    right: max(12px, env(safe-area-inset-right));
    top: calc(var(--graph-landing-zoom-top, 50%) - 72px);
  }
  .graph-landing__zoom-button {
    height: 44px;
    width: 44px;
  }
}
:root[saved-theme=dark] .graph-landing {
  --graph-backdrop: var(--light);
  --graph-surface: color-mix(in srgb, #121212 92%, transparent);
  --graph-surface-strong: #121212;
  background: var(--graph-backdrop);
}

:root[saved-theme=dark] .graph-landing__hero,
:root[saved-theme=dark] .graph-landing__canvas {
  background-color: var(--graph-backdrop);
}

:root[saved-theme=dark] .graph-landing__rail {
  background: var(--graph-surface);
  border-color: var(--graph-border);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);
}

:root[saved-theme=dark] .graph-landing__music-dock,
:root[saved-theme=dark] .graph-landing__music-library {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);
}

@media (max-width: 700px) {
  .graph-landing__chrome {
    background: var(--graph-surface);
    border-bottom: 1px solid var(--graph-border);
    gap: 6px;
    justify-content: flex-start;
    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;
    pointer-events: auto;
  }
  .graph-landing__title-block--rail {
    display: none;
  }
  .graph-landing__title {
    font-size: 14px;
  }
  .graph-landing__top-right {
    flex: 1 1 auto;
    gap: 0.25rem;
    justify-content: flex-end;
    min-width: 0;
  }
  .graph-landing__nav-link,
  .graph-landing__locale-toggle {
    font-size: 12px;
    height: 44px;
    min-height: 44px;
  }
  .graph-landing__rail-toggle,
  .graph-landing__music-dock {
    bottom: max(16px, env(safe-area-inset-bottom));
  }
  .graph-landing__rail-toggle {
    height: 48px;
    left: max(16px, env(safe-area-inset-left));
    width: 48px;
  }
  .graph-landing__music-dock {
    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);
  }
  .graph-landing__music-now {
    max-width: 120px;
  }
  .graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {
    width: min(120px, max(0px, 100vw - 180px));
  }
  .graph-landing__music-library {
    border-radius: 16px;
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);
    left: max(16px, env(safe-area-inset-left));
    max-height: min(52dvh, 100dvh - 8rem);
    padding-bottom: max(12px, env(safe-area-inset-bottom));
    position: fixed;
    right: max(16px, env(safe-area-inset-right));
    width: auto;
  }
  .graph-landing__music-track-list {
    grid-template-columns: 1fr;
  }
  .graph-landing__scrim {
    background: rgba(8, 10, 16, 0.42);
    border: 0;
    display: block;
    inset: 0;
    pointer-events: auto;
    position: absolute;
    z-index: 3;
  }
  .graph-landing__scrim[hidden] {
    display: none;
  }
  .graph-landing__rail {
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);
    left: max(16px, env(safe-area-inset-left));
    max-height: min(58dvh, 100dvh - 8rem);
    max-width: min(248px, 100vw - 32px);
    width: min(248px, 100vw - 32px);
  }
  .graph-landing__lenses {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .graph-landing__chip {
    flex: 0 0 auto;
    min-height: 44px;
  }
  .graph-landing__tag-list {
    max-height: 16dvh;
    overflow-y: auto;
  }
  :root[saved-theme=dark] .graph-landing__chrome {
    background: var(--graph-surface);
    border-bottom-color: var(--graph-border);
  }
}
/* Profile sections (options.profile): numbered panels scrolling over the pinned graph. */
.graph-landing[data-profile] {
  --profile-max: 1120px;
  --profile-gutter: clamp(16px, 4vw, 48px);
  --profile-panel: color-mix(in srgb, var(--graph-surface-strong) 84%, transparent);
  --profile-display: "Newsreader", "Noto Serif KR", Georgia, serif;
  overflow-x: clip;
}

/* Vertical swipes scroll the page; horizontal drags still rotate the graph.
   The camera controls set touch-action: none inline on their canvas, which
   would cancel the container's pan-y, so the canvas is overridden too. */
.graph-landing[data-profile] .graph-landing__canvas,
.graph-landing[data-profile] .graph-landing__canvas canvas {
  touch-action: pan-y !important;
}

.graph-landing[data-profile] .graph-landing__copy,
.graph-landing[data-profile] .graph-landing__chrome,
.graph-landing[data-profile] .graph-landing__hint,
.graph-landing[data-profile] .graph-landing__zoom,
.graph-landing[data-profile] .graph-landing__rail-toggle,
.graph-landing[data-profile] .graph-landing__music-dock {
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
}

.graph-landing[data-profile][data-scrolled] .graph-landing__copy,
.graph-landing[data-profile][data-scrolled] .graph-landing__chrome,
.graph-landing[data-profile][data-scrolled] .graph-landing__hint,
.graph-landing[data-profile][data-scrolled] .graph-landing__zoom,
.graph-landing[data-profile][data-scrolled] .graph-landing__rail-toggle,
.graph-landing[data-profile][data-scrolled] .graph-landing__music-dock,
.graph-landing[data-profile][data-scrolled] .graph-landing__music-library,
.graph-landing[data-profile][data-scrolled] .graph-landing__preview,
.graph-landing[data-profile][data-scrolled] .graph-landing__scroll-cue {
  opacity: 0;
  pointer-events: none;
  /* Leave at once: a fade-out here overlaps the incoming top bar and panel. */
  transition: none;
  visibility: hidden;
}

.graph-landing[data-profile][data-scrolled] .graph-landing__copy > * {
  pointer-events: none;
}

.graph-landing__scroll-cue {
  align-items: center;
  bottom: 18px;
  color: var(--graph-muted);
  display: flex;
  flex-direction: column;
  font-family: var(--codeFont);
  font-size: 0.68rem;
  gap: 8px;
  left: 50%;
  letter-spacing: 0.18em;
  position: fixed;
  text-decoration: none;
  text-transform: uppercase;
  transform: translateX(-50%);
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 3;
}

.graph-landing__scroll-cue {
  isolation: isolate;
}

/* A halo of the backdrop keeps graph edges from crossing the label. */
.graph-landing__scroll-cue::before {
  background: radial-gradient(closest-side, var(--graph-backdrop) 55%, color-mix(in srgb, var(--graph-backdrop) 70%, transparent) 75%, transparent);
  content: "";
  inset: -18px -40px;
  pointer-events: none;
  position: absolute;
  z-index: -1;
}

.graph-landing__scroll-cue::after {
  animation: graph-landing-drop 2s ease-in-out infinite;
  background: currentColor;
  content: "";
  height: 28px;
  opacity: 0.5;
  width: 1px;
}

@keyframes graph-landing-drop {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}
.graph-landing__page {
  margin-top: 100svh;
  margin-top: 100dvh;
  pointer-events: none;
  position: relative;
  z-index: 2;
}

.graph-landing__page > * {
  pointer-events: auto;
}

.graph-landing__profile[hidden] {
  display: none;
}

.graph-landing__topbar {
  align-items: center;
  backdrop-filter: blur(16px);
  background: color-mix(in srgb, var(--graph-surface-strong) 82%, transparent);
  border-bottom: 1px solid var(--graph-border);
  box-sizing: border-box;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  left: 0;
  opacity: 0;
  padding: 0.85rem var(--profile-gutter);
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateY(-100%);
  /* No fade-out: the hero header fades in underneath on the way back up. */
  transition: none;
  z-index: 6;
}

.graph-landing[data-scrolled] .graph-landing__topbar {
  opacity: 1;
  pointer-events: auto;
  transform: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.graph-landing__topbar a {
  color: var(--graph-muted);
  font-size: 0.86rem;
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.graph-landing__topbar a:hover,
.graph-landing__topbar a[aria-current=true] {
  color: var(--graph-accent);
}

.graph-landing__topbar a.graph-landing__topbar-title {
  color: var(--graph-text);
  font-family: var(--profile-display);
  font-size: 1.1rem;
  font-weight: 500;
}

.graph-landing__topbar a.graph-landing__topbar-blog {
  border-left: 1px solid var(--graph-border);
  color: var(--graph-text);
  font-weight: 500;
  padding-left: 1.4rem;
}

.graph-landing__topbar a.graph-landing__topbar-blog:hover {
  color: var(--graph-accent);
}

.graph-landing__topbar-links {
  display: flex;
  gap: 1.4rem;
  margin-left: auto;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.graph-landing__topbar-lang {
  background: transparent;
  border: 1px solid var(--graph-border);
  border-radius: 999px;
  color: var(--graph-text);
  cursor: pointer;
  flex: none;
  font-family: var(--bodyFont);
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  line-height: 1;
  min-height: 32px;
  min-width: 40px;
  padding: 0 0.7rem;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.graph-landing__topbar-lang:hover,
.graph-landing__topbar-lang:focus-visible {
  border-color: var(--graph-accent);
  color: var(--graph-accent);
}

.graph-landing__topbar-lang:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

button.graph-landing__locale-toggle {
  letter-spacing: 0.06em;
  min-width: 32px;
}

.graph-landing__topbar-links::-webkit-scrollbar {
  display: none;
}

.graph-landing__section {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--profile-max) + var(--profile-gutter) * 2);
  padding: clamp(20px, 4vw, 44px) var(--profile-gutter);
}

.graph-landing__panel {
  backdrop-filter: blur(16px);
  background: var(--profile-panel);
  border: 1px solid var(--graph-border);
  border-radius: 18px;
  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.08);
  box-sizing: border-box;
  padding: clamp(28px, 4vw, 56px);
  position: relative;
}

.graph-landing__panel[data-profile-reveal=pending] {
  opacity: 0;
  transform: translateY(14px);
}

.graph-landing__panel[data-profile-reveal] {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.graph-landing__section-index {
  color: var(--graph-border);
  font-family: var(--profile-display);
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  font-weight: 300;
  line-height: 1;
  position: absolute;
  right: clamp(20px, 4vw, 48px);
  top: clamp(18px, 3vw, 40px);
  user-select: none;
}

.graph-landing__kicker {
  color: var(--graph-accent);
  font-family: var(--codeFont);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

.graph-landing__section-title {
  color: var(--graph-text);
  font-family: var(--profile-display);
  font-size: clamp(1.9rem, 3.6vw, 2.8rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.12;
  margin: 0 0 1rem;
  max-width: 20ch;
  padding-right: clamp(3rem, 8vw, 6rem);
  text-wrap: balance;
  word-break: keep-all;
}

.graph-landing__section-lede {
  color: var(--graph-muted);
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.7;
  margin: 0;
  max-width: 62ch;
  text-wrap: balance;
  word-break: keep-all;
}

.graph-landing__intro {
  align-items: center;
  display: grid;
  gap: clamp(20px, 3.5vw, 44px);
  grid-template-columns: clamp(9rem, 20vw, 15rem) minmax(0, 1fr);
}

.graph-landing__portrait {
  margin: 0;
}

.graph-landing__portrait img {
  border: 1px solid var(--graph-border);
  border-radius: 12px;
  display: block;
  height: auto;
  width: 100%;
}

.graph-landing__portrait figcaption {
  color: var(--graph-muted);
  font-family: var(--codeFont);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  margin-top: 0.45rem;
}

@media (max-width: 640px) {
  .graph-landing__intro {
    grid-template-columns: minmax(0, 1fr);
  }
  .graph-landing__portrait {
    max-width: 11rem;
  }
}
.graph-landing__stats {
  display: grid;
  gap: 0 clamp(20px, 3vw, 40px);
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  margin: clamp(28px, 4vw, 44px) 0 0;
}

.graph-landing__stat {
  border-top: 1px solid var(--graph-border);
  display: flex;
  flex-direction: column;
  padding-top: 1.1rem;
}

.graph-landing__stat dt {
  color: var(--graph-muted);
  font-family: var(--codeFont);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  order: 2;
  text-transform: uppercase;
}

.graph-landing__stat dd {
  color: var(--graph-text);
  font-family: var(--profile-display);
  font-size: clamp(2.2rem, 4.4vw, 3.4rem);
  font-weight: 500;
  line-height: 1;
  margin: 0 0 0.6rem;
  order: 1;
}

.graph-landing__stat p {
  color: var(--graph-muted);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0.6rem 0 0;
  order: 3;
  word-break: keep-all;
}

.graph-landing__timeline {
  list-style: none;
  margin: clamp(28px, 4vw, 44px) 0 0;
  padding: 0;
}

.graph-landing__timeline-item {
  border-top: 1px solid var(--graph-border);
  display: grid;
  gap: 0.4rem clamp(16px, 3vw, 40px);
  grid-template-columns: minmax(9.5rem, 0.28fr) 1fr;
  padding: 1.15rem 0;
  position: relative;
}

.graph-landing__timeline-item::before {
  background: var(--graph-accent);
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  top: -1px;
  transition: width 0.3s ease;
  width: 28px;
}

.graph-landing__timeline-item:hover::before {
  width: 72px;
}

.graph-landing__timeline-period {
  color: var(--graph-accent);
  font-family: var(--codeFont);
  font-size: 0.76rem;
  letter-spacing: 0.04em;
  margin: 0.3rem 0 0;
}

.graph-landing__timeline-body h3 {
  color: var(--graph-text);
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
}

.graph-landing__timeline-body h3 a {
  color: inherit;
  text-decoration: none;
}

.graph-landing__timeline-body h3 a:hover {
  color: var(--graph-accent);
}

.graph-landing__timeline-body p {
  color: var(--graph-muted);
  font-size: 0.94rem;
  line-height: 1.65;
  margin: 0.35rem 0 0;
  max-width: 68ch;
  word-break: keep-all;
}

.graph-landing__timeline-body p.graph-landing__timeline-org {
  color: var(--graph-text);
  font-size: 0.88rem;
  margin-top: 0.15rem;
  opacity: 0.8;
}

.graph-landing__timeline-body h3,
.graph-landing__timeline-body p,
.graph-landing__card h3,
.graph-landing__facts dd {
  text-wrap: balance;
}

.graph-landing__card p {
  text-wrap: pretty;
}

.graph-landing__timeline-figure {
  margin: 0.9rem 0 0.2rem;
  max-width: min(100%, 22rem);
}

.graph-landing__timeline-figure img {
  border: 1px solid var(--graph-border);
  border-radius: 6px;
  display: block;
  height: auto;
  max-width: 100%;
}

.graph-landing__timeline-figure figcaption {
  color: var(--graph-muted);
  font-family: var(--codeFont);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  margin-top: 0.45rem;
}

.graph-landing__group {
  margin-top: clamp(26px, 3.5vw, 40px);
}

.graph-landing__group-label {
  align-items: center;
  color: var(--graph-muted);
  display: flex;
  font-family: var(--codeFont);
  font-size: 0.72rem;
  gap: 1rem;
  letter-spacing: 0.12em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

.graph-landing__group-label::after {
  background: var(--graph-border);
  content: "";
  flex: 1;
  height: 1px;
}

.graph-landing__cards {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 232px), 1fr));
}

.graph-landing__card {
  background: color-mix(in srgb, var(--graph-surface-strong) 60%, transparent);
  border: 1px solid var(--graph-border);
  border-radius: 14px;
  box-sizing: border-box;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.1rem 1.15rem 1rem;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

a.graph-landing__card:hover {
  border-color: var(--graph-accent);
  box-shadow: 0 10px 28px rgba(8, 10, 16, 0.1);
  transform: translateY(-2px);
}

.graph-landing__card h3 {
  color: var(--graph-text);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 0.45rem;
  overflow-wrap: anywhere;
}

.graph-landing__card p {
  font-weight: 400;
  color: var(--graph-muted);
  font-size: 0.88rem;
  line-height: 1.6;
  margin: 0;
  word-break: keep-all;
}

.graph-landing__card p.graph-landing__card-meta {
  color: var(--graph-accent);
  font-family: var(--codeFont);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  margin-top: auto;
  padding-top: 0.9rem;
}

.graph-landing__facts {
  display: grid;
  gap: 0 clamp(20px, 4vw, 56px);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: clamp(26px, 3.5vw, 40px) 0 0;
}

.graph-landing__facts > div {
  border-top: 1px solid var(--graph-border);
  display: grid;
  gap: 1rem;
  grid-template-columns: 6.5rem 1fr;
  padding: 0.85rem 0;
}

.graph-landing__facts dt {
  color: var(--graph-muted);
  font-family: var(--codeFont);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  min-width: 0;
  overflow-wrap: anywhere;
  padding-top: 0.2rem;
  text-transform: uppercase;
}

.graph-landing__facts dd {
  color: var(--graph-text);
  font-size: 0.95rem;
  line-height: 1.55;
  margin: 0;
  overflow-wrap: anywhere;
  word-break: keep-all;
}

.graph-landing__facts dd a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--graph-border);
  text-underline-offset: 3px;
}

.graph-landing__facts dd a:hover {
  color: var(--graph-accent);
  text-decoration-color: currentColor;
}

.graph-landing__quote {
  border-left: 2px solid var(--graph-accent);
  margin: clamp(28px, 4vw, 44px) 0 0;
  padding: 0.2rem 0 0.2rem clamp(18px, 2.5vw, 28px);
}

.graph-landing__quotes {
  align-items: start;
  display: grid;
  gap: 0 clamp(24px, 4vw, 56px);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
}

.graph-landing__quote p {
  color: var(--graph-text);
  font-family: var(--profile-display);
  font-size: clamp(1.25rem, 2.3vw, 1.7rem);
  line-height: 1.5;
  margin: 0;
  max-width: 34ch;
  text-wrap: balance;
  word-break: keep-all;
}

.graph-landing__quote cite {
  color: var(--graph-muted);
  display: block;
  font-family: var(--codeFont);
  font-size: 0.74rem;
  font-style: normal;
  letter-spacing: 0.06em;
  margin-top: 0.9rem;
}

.graph-landing__profile-footer {
  align-items: center;
  box-sizing: border-box;
  color: var(--graph-muted);
  display: flex;
  flex-wrap: wrap;
  font-size: 0.84rem;
  gap: 0.8rem 2rem;
  justify-content: space-between;
  margin: 0 auto;
  max-width: calc(var(--profile-max) + var(--profile-gutter) * 2);
  padding: clamp(28px, 4vw, 48px) var(--profile-gutter) clamp(36px, 5vw, 64px);
}

.graph-landing__profile-footer ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.graph-landing__profile-footer a {
  color: var(--graph-text);
  text-decoration: none;
}

.graph-landing__profile-footer a:hover {
  color: var(--graph-accent);
}

.graph-landing__profile-footer p {
  font-family: var(--codeFont);
  font-size: 0.72rem;
  margin: 0;
}

:root[saved-theme=dark] .graph-landing__panel {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.32);
}

@media (max-width: 860px) {
  .graph-landing__stats {
    grid-auto-flow: row;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1.6rem;
  }
  .graph-landing__facts {
    grid-template-columns: 1fr;
  }
  .graph-landing__scroll-cue {
    display: none;
  }
}
@media (max-width: 700px) {
  .graph-landing__timeline-item {
    grid-template-columns: 1fr;
  }
  .graph-landing__timeline-period {
    margin-top: 0;
  }
  .graph-landing__topbar {
    gap: 1rem;
    padding: max(10px, env(safe-area-inset-top)) 14px 10px;
  }
  .graph-landing__topbar-links {
    gap: 1rem;
  }
  .graph-landing__topbar-lang {
    min-height: 40px;
    min-width: 44px;
  }
  .graph-landing__topbar a {
    padding-block: 0.7rem;
  }
  .graph-landing__topbar a.graph-landing__topbar-blog {
    background: var(--graph-surface-strong);
    padding-left: 1rem;
    position: sticky;
    right: 0;
  }
  .graph-landing__facts > div {
    gap: 0.2rem;
    grid-template-columns: 1fr;
  }
  .graph-landing__section-title {
    max-width: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .graph-landing *,
  .graph-landing *::before,
  .graph-landing *::after {
    animation: none !important;
    scroll-behavior: auto !important;
    transition: none !important;
  }
}`;

// src/locale.ts
function resolveLocale(input) {
  const ids = input.locales.map((locale) => locale.id);
  const head = input.slug.split("/")[0] ?? "";
  const slugLocale = ids.includes(head) ? head : void 0;
  const siteLanguage = input.siteLocale?.split("-")[0];
  const localeId = input.frontmatterLocale ?? slugLocale ?? input.defaultLocale ?? siteLanguage ?? "en";
  const sourceLocale = input.sourceLocale ?? input.defaultLocale ?? localeId;
  return {
    localeId,
    sourceLocale,
    prefixed: slugLocale !== void 0 || Boolean(input.frontmatterLocale && ids.length > 0)
  };
}

// src/components/GraphLanding.tsx
function overlayCopyForLocale(localeId) {
  if (localeId === "ko") {
    return {
      labelsShow: "\uB77C\uBCA8 \uBCF4\uC774\uAE30",
      labelsHide: "\uB77C\uBCA8 \uC228\uAE30\uAE30",
      relayout: "\uB2E4\uC2DC \uC815\uB82C",
      notes: "\uB178\uD2B8",
      tags: "\uD0DC\uADF8",
      links: "\uB9C1\uD06C",
      countsTemplate: "{n} \uB178\uB4DC \xB7 {m} \uC5E3\uC9C0",
      lensAll: "\uC804\uCCB4",
      lensTag: "\uD0DC\uADF8",
      lensFolder: "\uD3F4\uB354",
      spacing: "Spacing",
      zoom: "Zoom",
      articles: "Blog",
      about: "About",
      themeToggle: "\uB77C\uC774\uD2B8/\uB2E4\uD06C \uBAA8\uB4DC \uC804\uD658",
      languageToggle: "\uC5B8\uC5B4 \uC804\uD658",
      filtersToggle: "\uD544\uD130",
      controls: "Controls",
      audioStop: "\uB178\uB798 \uB044\uAE30",
      audioPlay: "\uB178\uB798 \uCF1C\uAE30",
      musicLibraryOpen: "\uB808\uCF54\uB4DC \uCEEC\uB809\uC158 \uC5F4\uAE30",
      musicLibraryClose: "\uB808\uCF54\uB4DC \uCEEC\uB809\uC158 \uB2EB\uAE30",
      musicLibraryTitle: "\uB808\uCF54\uB4DC",
      musicCurrentTrack: "\uD604\uC7AC \uD2B8\uB799",
      folderRoot: "\uB8E8\uD2B8",
      previewHint: "\uD074\uB9AD\uD558\uBA74 \uC5F0\uACB0\uC774 \uC5F4\uB9BD\uB2C8\uB2E4",
      hint: "\uB04C\uC5B4\uC11C \uB3CC\uB9AC\uACE0, \uD540\uCE58\uB098 Ctrl/\u2318+\uC2A4\uD06C\uB864\uB85C \uD655\uB300\uD558\uBA70, \uC810\uC744 \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4",
      zoomIn: "\uD655\uB300",
      zoomOut: "\uCD95\uC18C",
      zoomReset: "\uC804\uCCB4 \uBCF4\uAE30",
      zoomControls: "\uADF8\uB798\uD504 \uD655\uB300",
      previewTagTemplate: "{n}\uAC1C \uB178\uD2B8",
      inspectOpen: "\uBCF8\uBB38 \uC77D\uAE30",
      inspectOpenExternal: "\uC5F4\uAE30",
      inspectConnected: "\uC5F0\uACB0",
      inspectClose: "\uB2EB\uAE30",
      inspectEmpty: "\uC9C1\uC811 \uC5F0\uACB0\uB41C \uBCC4\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
      profileNav: "\uC18C\uAC1C \uC139\uC158",
      profileScroll: "Scroll",
      folders: "\uD3F4\uB354",
      tune: "Tune",
      nodeSize: "Node size",
      edgeWidth: "Edge width",
      hubGravity: "\uD5C8\uBE0C \uC778\uB825"
    };
  }
  return {
    labelsShow: "Show labels",
    labelsHide: "Hide labels",
    relayout: "Re-layout",
    notes: "Notes",
    tags: "Tags",
    links: "Links",
    countsTemplate: "{n} nodes \xB7 {m} edges",
    lensAll: "All",
    lensTag: "Tags",
    lensFolder: "Folders",
    spacing: "Spacing",
    zoom: "Zoom",
    articles: "Blog",
    about: "About",
    themeToggle: "Toggle light / dark mode",
    languageToggle: "Switch language",
    filtersToggle: "Filters",
    controls: "Controls",
    audioStop: "Stop music",
    audioPlay: "Play music",
    musicLibraryOpen: "Open record collection",
    musicLibraryClose: "Close record collection",
    musicLibraryTitle: "Records",
    musicCurrentTrack: "Current track",
    folderRoot: "Root",
    previewHint: "Click to inspect connections",
    hint: "Drag to orbit, pinch or Ctrl/\u2318 + scroll to zoom, tap a dot to open",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    zoomReset: "Reset view",
    zoomControls: "Graph zoom",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectOpenExternal: "Open",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    profileNav: "Profile sections",
    profileScroll: "Scroll",
    folders: "Folders",
    tune: "Tune",
    nodeSize: "Node size",
    edgeWidth: "Edge width",
    hubGravity: "Hub gravity"
  };
}
function slugToAbsHref(slug) {
  const isIndex = slug === "index" || slug.endsWith("/index");
  const withoutIndex = isIndex ? slug.replace(/\/?index$/, "") : slug;
  if (withoutIndex.length === 0) {
    return "/";
  }
  const encoded = withoutIndex.split("/").map((segment) => encodeURIComponent(segment)).join("/");
  return isIndex ? `/${encoded}/` : `/${encoded}`;
}
function switchAriaLabel(targetLocaleId, targetName) {
  if (targetLocaleId === "en") {
    return "Switch to English";
  }
  if (targetLocaleId === "ko") {
    return "\uD55C\uAD6D\uC5B4\uB85C \uC804\uD658";
  }
  return `Switch to ${targetName}`;
}
function findLocaleSlug(allFiles, translationKey, localeId, prefixed) {
  const plainSlug = prefixed ? `${localeId}/${translationKey}` : translationKey;
  const match = allFiles.find((file) => {
    if (typeof file.slug !== "string" || file.slug === "index") {
      return false;
    }
    const multilingual = file.multilingual;
    if (multilingual?.translationKey) {
      return multilingual.translationKey === translationKey && multilingual.locale === localeId;
    }
    return file.slug === plainSlug || file.slug === `${plainSlug}/index`;
  });
  return typeof match?.slug === "string" ? match.slug : null;
}
function localeToggleLink(allFiles, locales, currentLocale, translationKey) {
  const other = locales.find((locale) => locale.id !== currentLocale);
  if (!other) {
    return null;
  }
  const slug = findLocaleSlug(allFiles, translationKey, other.id, true) ?? findLocaleSlug(allFiles, "home", other.id, true);
  if (!slug) {
    return null;
  }
  const label = other.id === "en" ? "English" : other.id === "ko" ? "Korean" : other.nativeName ?? other.id;
  return {
    id: other.id,
    href: slugToAbsHref(slug),
    label,
    ariaLabel: switchAriaLabel(other.id, label)
  };
}
function pathToRoot(slug) {
  const root = slug.split("/").filter(Boolean).slice(0, -1).map(() => "..").join("/");
  return root || ".";
}
var GraphLanding_default = ((pageOptions) => {
  const options = pageOptions ?? {};
  function renderHeadline(title, emphasis) {
    const lines = title.split("\n");
    return lines.flatMap((line, lineIndex) => {
      const parts = [];
      if (emphasis && line.includes(emphasis)) {
        const at = line.indexOf(emphasis);
        parts.push(line.slice(0, at), /* @__PURE__ */ u2("em", { children: emphasis }), line.slice(at + emphasis.length));
      } else {
        parts.push(line);
      }
      return lineIndex < lines.length - 1 ? [...parts, /* @__PURE__ */ u2("br", {})] : parts;
    });
  }
  function heroCopyBlocks(hero, defaultLang) {
    if (!hero) return [];
    const { translations, fallbackLanguage: _fallback, ...base } = hero;
    const blocks = [{ lang: defaultLang, copy: base, hidden: false }];
    for (const [lang, copy] of Object.entries(translations ?? {})) {
      if (lang === defaultLang) continue;
      blocks.push({ lang, copy: { ...base, ...copy }, hidden: true });
    }
    return blocks;
  }
  const heroLanguageScript = `(function(){var s=document.currentScript;if(!s)return;var r=s.closest(".graph-landing")||s.parentNode;var b=r.querySelectorAll("[data-hero-lang]");var a=[];for(var i=0;i<b.length;i++){var l=b[i].getAttribute("data-hero-lang");if(a.indexOf(l)<0)a.push(l);}var st=null;try{st=localStorage.getItem(${JSON.stringify(HERO_LANGUAGE_STORAGE_KEY)});}catch(e){}var p=navigator.languages||[navigator.language||""];var pick=st&&a.indexOf(st)>=0?st:(${pickHeroLanguage.toString()})(a,p,s.getAttribute("data-hero-fallback"));if(!pick)return;(${applyHeroLanguage.toString()})(r,pick,(${nextHeroLanguage.toString()})(a,pick));})();`;
  const GraphLandingConstructor = () => {
    const GraphLanding = ({ fileData, cfg, allFiles }) => {
      const multilingual = fileData.multilingual;
      const slug = typeof fileData.slug === "string" ? fileData.slug : "";
      const multilingualCfg = cfg.multilingual;
      const locales = multilingualCfg?.locales ?? [];
      const { localeId, sourceLocale, prefixed } = resolveLocale({
        frontmatterLocale: multilingual?.locale,
        slug,
        locales,
        sourceLocale: multilingualCfg?.sourceLocale,
        defaultLocale: options.defaultLocale,
        siteLocale: cfg.locale
      });
      const localePrefixes = locales.map((locale) => locale.id).join(",");
      const copy = overlayCopyForLocale(localeId);
      const translationKey = multilingual?.translationKey ?? "graph";
      const localeToggle = locales.length > 1 ? localeToggleLink(allFiles, locales, localeId, translationKey) : null;
      const homeSlug = findLocaleSlug(allFiles, "home", localeId, prefixed);
      const writingSlug = findLocaleSlug(allFiles, "writing", localeId, prefixed);
      const aboutSlug = findLocaleSlug(allFiles, "about", localeId, prefixed);
      const homeHref = homeSlug ? slugToAbsHref(homeSlug) : prefixed ? `/${localeId}/` : "/";
      const aboutHref = aboutSlug ? slugToAbsHref(aboutSlug) : null;
      const writingHref = writingSlug ? slugToAbsHref(writingSlug) : null;
      const siteTitle = cfg.pageTitle ?? "Graph";
      const graphIndexPath = `${pathToRoot(slug)}/static/graphIndex.json`;
      const heroBlocks = heroCopyBlocks(options.hero, localeId);
      const localized = (pick) => heroBlocks.length > 1 ? heroBlocks.map((block) => /* @__PURE__ */ u2("span", { "data-hero-lang": block.lang, lang: block.lang, hidden: block.hidden, children: pick(overlayCopyForLocale(block.lang)) })) : pick(copy);
      const heroToggleLang = nextHeroLanguage(
        heroBlocks.map((block) => block.lang),
        localeId
      );
      const profile = profileBlocks(
        options.profile,
        localeId,
        heroBlocks.map((block) => block.lang)
      );
      return /* @__PURE__ */ u2(
        "div",
        {
          class: "graph-landing",
          "data-rail-open": "false",
          "data-hero": options.hero ? "true" : void 0,
          "data-profile": profile.length > 0 ? "true" : void 0,
          "data-locale": localeId,
          "data-source-locale": sourceLocale,
          "data-locale-prefixes": localePrefixes,
          "data-index-source": options.indexSource,
          "data-graph-index-path": graphIndexPath,
          "data-max-rendered-nodes": options.maxRenderedNodes,
          "data-expand-hops": options.maxRenderedNodes !== void 0 ? options.expandHops : void 0,
          "data-tag-cooc-disabled": options.tagCooccurrence === false ? "true" : void 0,
          "data-tag-cooc-max-tags-per-note": options.tagCooccurrence ? options.tagCooccurrence.maxTagsPerNote : void 0,
          "data-tag-cooc-max-edges": options.tagCooccurrence ? options.tagCooccurrence.maxEdges : void 0,
          "data-graph-render-mode": options.renderMode === "3d" ? "3d" : void 0,
          "data-graph-layout-freeze-after-warmup": options.layout?.freezeAfterWarmup ? "true" : void 0,
          "data-graph-layout-warmup-ticks": options.layout?.warmupTicks,
          "data-graph-layout-cooldown-ticks": options.layout?.cooldownTicks,
          "data-graph-layout-charge-theta": options.layout?.chargeTheta,
          "data-graph-layout-incremental-warmup": options.layout?.incrementalWarmup ? "true" : void 0,
          "data-graph-lod-label-distance": options.lod?.labelDistance,
          "data-graph-lod-cull-distance": options.lod?.cullDistance,
          "data-graph-lod-fog": options.lod?.fog ? "true" : void 0,
          "data-graph-lod-link-resolution": options.lod?.linkResolution,
          "data-graph-lod-share-link-resources": options.lod?.shareLinkResources ? "true" : void 0,
          "data-graph-interaction-incremental-repaint": options.interaction?.incrementalRepaint ? "true" : void 0,
          "data-graph-music-tracks": JSON.stringify(options.music?.tracks ?? []),
          "data-graph-music-vinyl-fx": options.music?.vinylFx === false ? "false" : void 0,
          "data-graph-default-locale": options.defaultLocale,
          "data-counts-template": copy.countsTemplate,
          "data-folder-root-label": copy.folderRoot,
          "data-legend-notes": copy.notes,
          "data-legend-tags": copy.tags,
          "data-legend-links": copy.links,
          "data-legend-folders": copy.folders,
          "data-preview-tag-template": copy.previewTagTemplate,
          "data-inspect-read": copy.inspectOpen,
          "data-inspect-open-external": copy.inspectOpenExternal,
          "data-audio-stop": copy.audioStop,
          "data-audio-play": copy.audioPlay,
          "data-music-library-open": copy.musicLibraryOpen,
          "data-music-library-close": copy.musicLibraryClose,
          "data-music-library-title": copy.musicLibraryTitle,
          "data-music-current-track": copy.musicCurrentTrack,
          "data-inspect-connected": copy.inspectConnected,
          "data-inspect-empty": copy.inspectEmpty,
          children: [
            /* @__PURE__ */ u2("link", { rel: "preconnect", href: "https://esm.sh", crossOrigin: "anonymous" }),
            /* @__PURE__ */ u2("link", { rel: "dns-prefetch", href: "https://esm.sh" }),
            /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
              /* @__PURE__ */ u2("div", { class: "graph-landing__canvas", id: "graph-landing-mount" }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__loading", "aria-hidden": "true", children: [
                /* @__PURE__ */ u2("span", {}),
                /* @__PURE__ */ u2("span", {}),
                /* @__PURE__ */ u2("span", {})
              ] }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__overlay", children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__chrome", children: [
                  /* @__PURE__ */ u2("div", { class: "graph-landing__title-block graph-landing__title-block--chrome", children: /* @__PURE__ */ u2("a", { class: "graph-landing__title", href: homeHref, children: siteTitle }) }),
                  /* @__PURE__ */ u2("nav", { class: "graph-landing__top-right", "aria-label": "Site", children: [
                    writingHref ? /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: writingHref, children: copy.articles }) : null,
                    aboutHref ? /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: aboutHref, children: copy.about }) : null,
                    localeToggle ? /* @__PURE__ */ u2(
                      "a",
                      {
                        class: "graph-landing__locale-toggle",
                        href: localeToggle.href,
                        lang: localeToggle.id,
                        hreflang: localeToggle.id,
                        "aria-label": localeToggle.ariaLabel,
                        "data-preferred-locale": localeToggle.id,
                        children: localeToggle.label
                      }
                    ) : null,
                    heroToggleLang ? /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__locale-toggle",
                        "data-hero-lang-toggle": true,
                        lang: heroToggleLang,
                        "aria-label": copy.languageToggle,
                        children: heroToggleLang.toUpperCase()
                      }
                    ) : null,
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__icon-btn",
                        "data-graph-theme": true,
                        "aria-label": copy.themeToggle,
                        children: [
                          /* @__PURE__ */ u2(
                            "svg",
                            {
                              class: "graph-landing__icon graph-landing__icon--sun",
                              width: "18",
                              height: "18",
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              focusable: "false",
                              children: [
                                /* @__PURE__ */ u2(
                                  "circle",
                                  {
                                    cx: "12",
                                    cy: "12",
                                    r: "4.4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "1.6"
                                  }
                                ),
                                /* @__PURE__ */ u2(
                                  "path",
                                  {
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "1.6",
                                    "stroke-linecap": "round",
                                    d: "M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ u2(
                            "svg",
                            {
                              class: "graph-landing__icon graph-landing__icon--moon",
                              width: "18",
                              height: "18",
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              focusable: "false",
                              children: /* @__PURE__ */ u2(
                                "path",
                                {
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "1.6",
                                  "stroke-linejoin": "round",
                                  d: "M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
                                }
                              )
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] }),
                heroBlocks.map(({ lang, copy: copy2, hidden }) => /* @__PURE__ */ u2("div", { class: "graph-landing__copy", "data-hero-lang": lang, lang, hidden, children: [
                  copy2.eyebrow ? /* @__PURE__ */ u2("p", { class: "graph-landing__eyebrow", children: copy2.eyebrow }) : null,
                  copy2.title ? /* @__PURE__ */ u2("h1", { class: "graph-landing__headline", children: renderHeadline(copy2.title, copy2.titleEmphasis) }) : null,
                  copy2.lede ? /* @__PURE__ */ u2("p", { class: "graph-landing__lede", children: copy2.lede }) : null,
                  copy2.actions && copy2.actions.length > 0 ? /* @__PURE__ */ u2("div", { class: "graph-landing__actions", children: copy2.actions.map((action) => /* @__PURE__ */ u2(
                    "a",
                    {
                      class: action.accent ? "graph-landing__btn graph-landing__btn--accent" : "graph-landing__btn",
                      href: action.href,
                      children: action.label
                    }
                  )) }) : null
                ] })),
                heroBlocks.length > 1 ? /* @__PURE__ */ u2(
                  "script",
                  {
                    "data-hero-fallback": options.hero?.fallbackLanguage,
                    dangerouslySetInnerHTML: { __html: heroLanguageScript }
                  }
                ) : null,
                /* @__PURE__ */ u2(
                  "button",
                  {
                    type: "button",
                    class: "graph-landing__scrim",
                    "data-graph-rail-scrim": true,
                    "aria-label": copy.inspectClose,
                    hidden: true
                  }
                ),
                /* @__PURE__ */ u2(
                  "button",
                  {
                    type: "button",
                    class: "graph-landing__rail-toggle",
                    "data-graph-rail-toggle": true,
                    "aria-expanded": "false",
                    "aria-controls": "graph-landing-rail",
                    "aria-label": copy.controls,
                    title: copy.controls,
                    children: /* @__PURE__ */ u2(
                      "svg",
                      {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: /* @__PURE__ */ u2(
                          "path",
                          {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.6",
                            "stroke-linecap": "round",
                            d: "M3 5h12M3 9h12M3 13h12"
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ u2("div", { class: "graph-landing__music-dock", "data-graph-music-dock": true, children: [
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__audio-toggle",
                      "data-graph-audio-toggle": true,
                      "data-playing": "false",
                      "aria-pressed": "false",
                      "aria-label": copy.audioPlay,
                      title: copy.audioPlay,
                      children: /* @__PURE__ */ u2("span", { class: "graph-landing__turntable", "aria-hidden": "true", children: /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-plinth", children: [
                        /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-record", "data-graph-record": true, children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-label" }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-spindle" })
                        ] }),
                        /* @__PURE__ */ u2(
                          "svg",
                          {
                            class: "graph-landing__turntable-tonearm",
                            viewBox: "0 0 32 32",
                            focusable: "false",
                            children: [
                              /* @__PURE__ */ u2("circle", { cx: "25", cy: "7", r: "2.5" }),
                              /* @__PURE__ */ u2("path", { d: "M24.2 8.8 17.6 19.6 12.5 22.2" }),
                              /* @__PURE__ */ u2("path", { d: "m10.3 21.6 3.9 1.8-1.4 2.7-3.9-1.8Z" })
                            ]
                          }
                        )
                      ] }) })
                    }
                  ),
                  /* @__PURE__ */ u2(
                    "span",
                    {
                      class: "graph-landing__music-now",
                      "data-graph-music-now": true,
                      hidden: true,
                      "aria-live": "polite",
                      children: [
                        /* @__PURE__ */ u2("span", { class: "graph-landing__music-now-title", "data-graph-music-now-title": true }),
                        /* @__PURE__ */ u2("span", { class: "graph-landing__music-now-artist", "data-graph-music-now-artist": true })
                      ]
                    }
                  ),
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__music-library-toggle",
                      "data-graph-music-library-toggle": true,
                      "aria-controls": "graph-landing-music-library",
                      "aria-expanded": "false",
                      "aria-label": copy.musicLibraryOpen,
                      title: copy.musicLibraryOpen,
                      children: /* @__PURE__ */ u2(
                        "svg",
                        {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ u2(
                            "path",
                            {
                              d: "M5 5.5h14v13H5zM8 9h8M8 12h8M8 15h5",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-width": "1.7"
                            }
                          )
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ u2(
                  "section",
                  {
                    class: "graph-landing__music-library",
                    id: "graph-landing-music-library",
                    "data-graph-music-library": true,
                    "aria-label": copy.musicLibraryTitle,
                    "aria-hidden": "true",
                    hidden: true,
                    children: [
                      /* @__PURE__ */ u2("div", { class: "graph-landing__deck", "aria-hidden": "true", children: [
                        /* @__PURE__ */ u2("span", { class: "graph-landing__deck-platter", children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-record", "data-graph-record": true, children: [
                            /* @__PURE__ */ u2("span", { class: "graph-landing__deck-label" }),
                            /* @__PURE__ */ u2("span", { class: "graph-landing__deck-spindle" })
                          ] }),
                          /* @__PURE__ */ u2("svg", { class: "graph-landing__deck-tonearm", viewBox: "0 0 32 32", focusable: "false", children: [
                            /* @__PURE__ */ u2("circle", { cx: "25", cy: "7", r: "2.5" }),
                            /* @__PURE__ */ u2("path", { d: "M24.2 8.8 17.6 19.6 12.5 22.2" }),
                            /* @__PURE__ */ u2("path", { d: "m10.3 21.6 3.9 1.8-1.4 2.7-3.9-1.8Z" })
                          ] })
                        ] }),
                        /* @__PURE__ */ u2("span", { class: "graph-landing__deck-copy", children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-title", "data-graph-deck-title": true }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-artist", "data-graph-deck-artist": true }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-meta", children: [
                            /* @__PURE__ */ u2("span", { class: "graph-landing__deck-lamp" }),
                            "33\u2153 RPM"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__music-library-heading", children: [
                        /* @__PURE__ */ u2("span", { children: copy.musicLibraryTitle }),
                        /* @__PURE__ */ u2("span", { "data-graph-music-status": true, "aria-live": "polite" })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__music-track-list", "data-graph-music-track-list": true })
                    ]
                  }
                ),
                /* @__PURE__ */ u2("div", { class: "graph-landing__audio", "data-graph-audio-host": true, "aria-hidden": "true" }),
                /* @__PURE__ */ u2(
                  "div",
                  {
                    class: "graph-landing__rail",
                    id: "graph-landing-rail",
                    "aria-hidden": "true",
                    ...{ onwheel: "event.stopPropagation()" },
                    children: [
                      /* @__PURE__ */ u2("div", { class: "graph-landing__title-block graph-landing__title-block--rail", children: [
                        /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: siteTitle }),
                        /* @__PURE__ */ u2("p", { class: "graph-landing__counts", "data-graph-counts": true, children: copy.countsTemplate.replace("{n}", "\u2013").replace("{m}", "\u2013") })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__lenses", role: "group", "aria-label": "Graph lens", children: [
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__chip",
                            "data-graph-lens": "all",
                            "aria-pressed": "true",
                            children: copy.lensAll
                          }
                        ),
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__chip",
                            "data-graph-lens": "tag",
                            "aria-pressed": "false",
                            children: copy.lensTag
                          }
                        ),
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__chip",
                            "data-graph-lens": "folder",
                            "aria-pressed": "false",
                            children: copy.lensFolder
                          }
                        )
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__tags", children: [
                        /* @__PURE__ */ u2(
                          "p",
                          {
                            class: "graph-landing__section-label graph-landing__section-label--tags",
                            "data-graph-facet-label": true,
                            children: copy.tags
                          }
                        ),
                        /* @__PURE__ */ u2("ul", { class: "graph-landing__tag-list", "data-graph-tags": true })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__utils", children: [
                        /* @__PURE__ */ u2("div", { class: "graph-landing__tune", children: [
                          /* @__PURE__ */ u2("div", { class: "graph-landing__tune-head", children: [
                            /* @__PURE__ */ u2("p", { class: "graph-landing__section-label", children: copy.tune }),
                            /* @__PURE__ */ u2("div", { class: "graph-landing__tools", children: [
                              /* @__PURE__ */ u2(
                                "button",
                                {
                                  type: "button",
                                  class: "graph-landing__tool",
                                  "data-graph-relayout": true,
                                  "aria-label": copy.relayout,
                                  title: copy.relayout,
                                  children: /* @__PURE__ */ u2(
                                    "svg",
                                    {
                                      width: "15",
                                      height: "15",
                                      viewBox: "0 0 16 16",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: [
                                        /* @__PURE__ */ u2(
                                          "path",
                                          {
                                            fill: "none",
                                            stroke: "currentColor",
                                            "stroke-width": "1.4",
                                            "stroke-linecap": "round",
                                            d: "M13 8A5 5 0 1 1 11.6 4.4"
                                          }
                                        ),
                                        /* @__PURE__ */ u2("path", { fill: "currentColor", d: "M13.2 2.2v3.1h-3.1z" })
                                      ]
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ u2(
                                "button",
                                {
                                  type: "button",
                                  class: "graph-landing__tool",
                                  "data-graph-labels": true,
                                  "data-label-show": copy.labelsShow,
                                  "data-label-hide": copy.labelsHide,
                                  "aria-label": copy.labelsHide,
                                  title: copy.labelsHide,
                                  "aria-pressed": "true",
                                  children: /* @__PURE__ */ u2(
                                    "svg",
                                    {
                                      width: "15",
                                      height: "15",
                                      viewBox: "0 0 16 16",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: /* @__PURE__ */ u2(
                                        "path",
                                        {
                                          fill: "none",
                                          stroke: "currentColor",
                                          "stroke-width": "1.4",
                                          "stroke-linecap": "round",
                                          d: "M3 12.5 6.6 3.5h2.8L13 12.5M4.6 9.2h6.8"
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.edgeWidth }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "50",
                                max: "180",
                                value: "100",
                                "data-graph-edge-scale": true,
                                "aria-label": copy.edgeWidth
                              }
                            )
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.nodeSize }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "50",
                                max: "150",
                                value: "100",
                                "data-graph-node-scale": true,
                                "aria-label": copy.nodeSize
                              }
                            )
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.spacing }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "50",
                                max: "150",
                                value: "100",
                                "data-graph-spread": true,
                                "aria-label": copy.spacing
                              }
                            )
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.hubGravity }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "0",
                                max: "200",
                                value: "150",
                                "data-graph-hub-gravity": true,
                                "aria-label": copy.hubGravity
                              }
                            )
                          ] }),
                          /* @__PURE__ */ u2("label", { class: "graph-landing__slider", children: [
                            /* @__PURE__ */ u2("span", { children: copy.zoom }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "60",
                                max: "170",
                                value: "100",
                                "data-graph-zoom": true,
                                "aria-label": copy.zoom
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ u2("div", { class: "graph-landing__legend", "data-graph-legend": true, children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                            /* @__PURE__ */ u2(
                              "span",
                              {
                                class: "graph-landing__dot graph-landing__dot--note",
                                "aria-hidden": "true"
                              }
                            ),
                            copy.notes
                          ] }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                            /* @__PURE__ */ u2(
                              "span",
                              {
                                class: "graph-landing__dot graph-landing__dot--tag",
                                "aria-hidden": "true"
                              }
                            ),
                            copy.tags
                          ] }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                            /* @__PURE__ */ u2(
                              "span",
                              {
                                class: "graph-landing__dot graph-landing__dot--external",
                                "aria-hidden": "true"
                              }
                            ),
                            copy.links
                          ] })
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ u2("aside", { class: "graph-landing__preview", "data-graph-preview": true, hidden: true, "aria-live": "polite", children: [
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-chip", "data-graph-preview-chip": true }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-title", "data-graph-preview-title": true }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-excerpt", "data-graph-preview-excerpt": true }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__preview-hint", children: copy.previewHint })
                ] }),
                /* @__PURE__ */ u2("p", { class: "graph-landing__hint", "data-graph-hint": true, hidden: true, children: localized((c2) => c2.hint) }),
                options.hero ? /* @__PURE__ */ u2(S, { children: /* @__PURE__ */ u2(
                  "div",
                  {
                    class: "graph-landing__zoom",
                    role: "group",
                    "aria-label": copy.zoomControls,
                    "data-graph-zoom-controls": true,
                    children: [
                      /* @__PURE__ */ u2(
                        "button",
                        {
                          type: "button",
                          class: "graph-landing__zoom-button",
                          "data-graph-zoom-step": "in",
                          children: [
                            /* @__PURE__ */ u2("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ u2("path", { d: "M8 3v10M3 8h10" }) }),
                            /* @__PURE__ */ u2("span", { class: "graph-landing__sr-only", children: localized((c2) => c2.zoomIn) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ u2(
                        "button",
                        {
                          type: "button",
                          class: "graph-landing__zoom-button",
                          "data-graph-zoom-step": "out",
                          children: [
                            /* @__PURE__ */ u2("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ u2("path", { d: "M3 8h10" }) }),
                            /* @__PURE__ */ u2("span", { class: "graph-landing__sr-only", children: localized((c2) => c2.zoomOut) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ u2(
                        "button",
                        {
                          type: "button",
                          class: "graph-landing__zoom-button",
                          "data-graph-zoom-step": "reset",
                          children: [
                            /* @__PURE__ */ u2("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ u2("path", { d: "M3 6V3h3M10 3h3v3M13 10v3h-3M6 13H3v-3" }) }),
                            /* @__PURE__ */ u2("span", { class: "graph-landing__sr-only", children: localized((c2) => c2.zoomReset) })
                          ]
                        }
                      )
                    ]
                  }
                ) }) : null,
                /* @__PURE__ */ u2(
                  "aside",
                  {
                    class: "graph-landing__inspect",
                    "data-graph-inspect": true,
                    "aria-labelledby": "graph-inspect-title",
                    hidden: true,
                    ...{ onwheel: "event.stopPropagation()" },
                    children: [
                      /* @__PURE__ */ u2("div", { class: "graph-landing__inspect-bar", children: [
                        /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-chip", "data-graph-inspect-chip": true }),
                        /* @__PURE__ */ u2(
                          "button",
                          {
                            type: "button",
                            class: "graph-landing__inspect-close",
                            "data-graph-inspect-close": true,
                            "aria-label": copy.inspectClose,
                            children: copy.inspectClose
                          }
                        )
                      ] }),
                      /* @__PURE__ */ u2(
                        "h2",
                        {
                          class: "graph-landing__inspect-title",
                          id: "graph-inspect-title",
                          "data-graph-inspect-title": true
                        }
                      ),
                      /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-excerpt", "data-graph-inspect-excerpt": true }),
                      /* @__PURE__ */ u2("ul", { class: "graph-landing__inspect-tags", "data-graph-inspect-tags": true }),
                      /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-section", "data-graph-inspect-connected-label": true, children: copy.inspectConnected }),
                      /* @__PURE__ */ u2("ul", { class: "graph-landing__inspect-links", "data-graph-inspect-connected": true }),
                      /* @__PURE__ */ u2("a", { class: "graph-landing__inspect-open", "data-graph-inspect-open": true, hidden: true, children: copy.inspectOpen })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ u2(
              ProfileSections,
              {
                blocks: profile,
                siteTitle,
                homeHref,
                blogHref: writingHref,
                navLabel: copy.profileNav,
                languageLabel: copy.languageToggle,
                scrollLabel: copy.profileScroll
              }
            ),
            profile.length > 1 || heroBlocks.length > 1 ? /* @__PURE__ */ u2(
              "script",
              {
                "data-hero-fallback": options.hero?.fallbackLanguage,
                dangerouslySetInnerHTML: { __html: heroLanguageScript }
              }
            ) : null
          ]
        }
      );
    };
    GraphLanding.css = graph_landing_default;
    GraphLanding.afterDOMLoaded = graph_landing_inline_default;
    return GraphLanding;
  };
  return GraphLandingConstructor;
});

// src/pageType.ts
var graphPageMatcher = (landingSlugs) => ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  if (frontmatter?.graphLanding === true) {
    return true;
  }
  const slug = typeof fileData.slug === "string" ? fileData.slug : "";
  if (landingSlugs.includes(slug)) {
    return true;
  }
  const translationKey = frontmatter?.translationKey;
  if (translationKey === "graph" || translationKey === "home") {
    return true;
  }
  return slug === "graph" || slug.endsWith("/graph");
};
var GraphLandingPage = (userOpts) => {
  const options = userOpts ?? {};
  const instance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher(options.landingSlugs ?? []),
    layout: "graph",
    frame: "minimal",
    body: GraphLanding_default(options),
    skipContentIndexFetch: options.indexSource === "graphIndex"
  };
  return instance;
};
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map