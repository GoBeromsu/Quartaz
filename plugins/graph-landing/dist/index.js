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
  return /* @__PURE__ */ u2("section", { class: "graph-landing__section", id: section.id, children: /* @__PURE__ */ u2("div", { class: "graph-landing__panel", "data-profile-reveal": true, children: [
    /* @__PURE__ */ u2("span", { class: "graph-landing__section-index", "aria-hidden": "true", children: sectionIndexLabel(index) }),
    section.kicker ? /* @__PURE__ */ u2("p", { class: "graph-landing__kicker", children: section.kicker }) : null,
    section.title ? /* @__PURE__ */ u2("h2", { class: "graph-landing__section-title", children: section.title }) : null,
    section.lede ? /* @__PURE__ */ u2("p", { class: "graph-landing__section-lede", children: section.lede }) : null,
    section.stats && section.stats.length > 0 ? /* @__PURE__ */ u2("dl", { class: "graph-landing__stats", children: section.stats.map((stat) => /* @__PURE__ */ u2("div", { class: "graph-landing__stat", children: [
      /* @__PURE__ */ u2("dt", { children: stat.label }),
      /* @__PURE__ */ u2("dd", { children: stat.value }),
      stat.note ? /* @__PURE__ */ u2("p", { children: stat.note }) : null
    ] })) }) : null,
    section.timeline && section.timeline.length > 0 ? /* @__PURE__ */ u2("ol", { class: "graph-landing__timeline", children: section.timeline.map((item) => /* @__PURE__ */ u2("li", { class: "graph-landing__timeline-item", children: [
      /* @__PURE__ */ u2("p", { class: "graph-landing__timeline-period", children: item.period }),
      /* @__PURE__ */ u2("div", { class: "graph-landing__timeline-body", children: [
        /* @__PURE__ */ u2("h3", { children: item.href ? /* @__PURE__ */ u2("a", { ...linkProps(item.href), children: item.title }) : item.title }),
        item.org ? /* @__PURE__ */ u2("p", { class: "graph-landing__timeline-org", children: item.org }) : null,
        item.body ? /* @__PURE__ */ u2("p", { children: item.body }) : null
      ] })
    ] })) }) : null,
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
    ] }) : null
  ] }) });
}
function ProfileSections({
  blocks,
  siteTitle,
  homeHref,
  blogHref,
  navLabel,
  scrollLabel
}) {
  if (blocks.length === 0) return null;
  return /* @__PURE__ */ u2(S, { children: [
    /* @__PURE__ */ u2("a", { class: "graph-landing__scroll-cue", href: "#graph-landing-profile", "data-profile-cue": true, children: scrollLabel }),
    /* @__PURE__ */ u2("main", { class: "graph-landing__page", id: "graph-landing-profile", children: blocks.map(({ lang, copy, hidden }) => {
      const sections = copy.sections ?? [];
      const navSections = sections.filter((section) => section.id && section.nav);
      return /* @__PURE__ */ u2("div", { class: "graph-landing__profile", "data-hero-lang": lang, lang, hidden, children: [
        /* @__PURE__ */ u2("nav", { class: "graph-landing__topbar", "aria-label": navLabel, children: [
          /* @__PURE__ */ u2("a", { class: "graph-landing__topbar-title", href: homeHref, "data-profile-top": true, children: siteTitle }),
          /* @__PURE__ */ u2("div", { class: "graph-landing__topbar-links", children: [
            navSections.map((section) => /* @__PURE__ */ u2("a", { href: `#${section.id}`, children: section.nav })),
            blogHref ? /* @__PURE__ */ u2("a", { class: "graph-landing__topbar-blog", href: blogHref, children: lang === "ko" ? "\uBE14\uB85C\uADF8" : "Blog" }) : null
          ] })
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
var graph_landing_inline_default = 'var dr=Object.defineProperty;var fr=(e,t,o)=>t in e?dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var Ie=(e,t,o)=>fr(e,typeof t!="symbol"?t+"":t,o);function ln(e,t,o,n){if(![e.x,e.y,e.z,t.x,t.y,t.z,o,n].every(Number.isFinite))return null;let s=t.x-e.x,d=t.y-e.y,w=t.z-e.z,x=Math.hypot(s,d,w),I={x:(e.x+t.x)/2,y:(e.y+t.y)/2,z:(e.z+t.z)/2},G=x-Math.max(0,o)-Math.max(0,n);if(x===0||G<=0)return{start:I,end:I,length:0};let v=s/x,Y=d/x,K=w/x,L=Math.max(0,o),j=Math.max(0,n);return{start:{x:e.x+v*L,y:e.y+Y*L,z:e.z+K*L},end:{x:t.x-v*j,y:t.y-Y*j,z:t.z-K*j},length:G}}function un(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function xt(e,t,o){let n=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(t)?Math.max(0,t):0,s=Number.isFinite(o)?Math.max(i,o):i;if(s===i)return i>0?.5:0;let d=Math.min(s,Math.max(i,n));return(Math.sqrt(d)-Math.sqrt(i))/(Math.sqrt(s)-Math.sqrt(i))}function dn(e,t,o){return xt(Math.max(e,t),0,o)}function nt(e,t,o){return Number.isFinite(e)?Math.min(o,Math.max(t,e)):t}function fn(e){return 1+nt(e,0,1)*1.2}function gn(e,t){let o=nt(e,0,1),n=nt(t,0,2);return Math.max(.5,1-o*.24*n)}function mn(e,t){let o=nt(e,0,1),n=nt(t,0,2);return Math.min(1.6,1+o*.3*n)}var gr=/^[A-Za-z0-9_-]{6,20}$/,mr=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),pr=new Set(["youtu.be","www.youtu.be"]);function Tt(e){return e&&gr.test(e)?e:void 0}function hr(e){if(!e)return;let t=e.trim(),o=Tt(t);if(o)return o;let n;try{n=new URL(t)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if(mr.has(n.hostname)){if(n.pathname==="/watch")return Tt(n.searchParams.get("v"));let i=n.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return Tt(i[1])}if(pr.has(n.hostname)){let i=n.pathname.split("/").filter(Boolean);if(i.length===1)return Tt(i[0])}}}function pn(e){let t=[],o=new Set;for(let n of e){let i=n.title.trim(),s=hr(n.url);if(!i||!s||o.has(s))continue;o.add(s);let d=n.artist?.trim();d?t.push({title:i,artist:d,videoId:s}):t.push({title:i,videoId:s})}return t}function z(e){return typeof e=="string"?e:e.id}function Ht(e,t){return t===void 0||!Number.isFinite(t)||t<0?"full":e>=t?"dot":"full"}function hn(e,t,o,n){return t||e&&Ht(o,n)==="full"}function Et(e,t,o){let n=e.get(t);if(n)return n;let i=o();return e.set(t,i),i}function Me(e,t){let o=e?t(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function bn(e,t){if(t===void 0||!Number.isFinite(t)||t<0||t>=e.nodes.length)return e;let n=[...e.nodes].sort((d,w)=>w.degree!==d.degree?w.degree-d.degree:d.id<w.id?-1:d.id>w.id?1:0).slice(0,Math.max(0,t)),i=new Set(n.map(d=>d.id)),s=e.links.filter(d=>{let w=z(d.source),x=z(d.target);return i.has(w)&&i.has(x)});return{nodes:n,links:s}}function yn(e,t,o,n){let i=new Set,s=Math.max(0,Math.floor(n));if(s<=0)return i;let d=new Set([o]),w=new Set([o]);for(let x=0;x<s;x+=1){let I=new Set;for(let G of w)for(let v of e.get(G)??[])d.has(v)||(d.add(v),I.add(v),t.has(v)||i.add(v));w=I}return i}var br=2.399963229728653,Gt=20;function wn(e,t,o){let n=e.x??0,i=e.y??0,s=e.z??0,d=t*br;return{x:n+Gt*Math.cos(d),y:i+Gt*Math.sin(d),z:o?s+Gt*Math.sin(d*.5):s}}function vn(e,t,o,n){if(t===o)return new Set;if(t===null||o===null)return new Set(n);let i=new Set([t,o]);for(let s of e.get(t)??[])i.add(s);for(let s of e.get(o)??[])i.add(s);return i}var Ft=100/3;function kn(e){return Number.isFinite(e)?e*360/6e4:0}function Tn(e,t,o,n){if(!Number.isFinite(e)||!Number.isFinite(t))return 0;if(!(o>0)||!(n>0))return t;let i=t+(e-t)*Math.exp(-o/n);return Math.abs(i-t)<.01?t:i}function xn(e,t=4,o=17){let n=Number.isFinite(e)?Math.min(1,Math.max(0,e)):0;return t+(o-t)*n}function En(e,t=Math.random){let o=new Float32Array(Math.max(0,Math.floor(Number.isFinite(e)?e:0))),n=0;for(let i=0;i<o.length;i++){let s=(t()*2-1)*.08;n>0?(s+=(t()*2-1)*n,n=n<.02?0:n*.72):t()<15e-5&&(n=.4+t()*.6),o[i]=Math.max(-1,Math.min(1,s))}return o}var Jt="0.179.1",yr="https://esm.sh/force-graph@1.51.4",wr=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Jt}`,vr="https://esm.sh/d3-force-3d@3.0.6",kr=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Jt}`,Tr=`https://esm.sh/three@${Jt}`,xr=8,Er=10;var at=1,Kt=4,Lr=.05,Sr=.09,Mr=.8,Cr=12,Ar=2.6,Nr=1,Ln=1,rt=.18,Zn="graph-landing:lens",Jn="graph-landing:tune",Sn="graph-landing:hint",jt="graph-landing:ambient-audio",Mn="UDVtMYqUAyw",Dt=12,Ir=1800,Cn=480,An=260,_r=450,Pr=1400,Rr=1e3,Gr=.3,Hr="https://www.youtube.com/iframe_api",Fr=.18,Nn=1.25,Dr=1.25,zr=1.15,Or=.55,Ce={x:330,y:235,z:565},In={x:0,y:0,z:0},it=Math.hypot(Ce.x,Ce.y,Ce.z),_n=.52,qr=300/it,Vr=1600/it,Pn=2.6,Br=5.6,Rn=3.2,Gn=64,Hn=24,Fn="#f2f3f4",Dn="#f4c3d0",Wr=6,Ur={wikilink:.5,tag:.4,external:.45,cooc:.3,folder:.3},$r="#a8b0c2",zn={min:80,max:200},On={min:40,max:110},qn={min:160,max:280},Vn={min:90,max:170},Bn=220,Wn=2,Yr=350,zt={min:-170,max:-320},Ot={min:96,max:156},qt={min:170,max:340};function Kr(e){return ct(e-.5,0,1)}function Mt(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Vt(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}function jr(e){let t=[];for(let o of Object.values(e)){let n=Mt(o);if(!un(n.filePath))continue;let i=typeof n.slug=="string"?n.slug:"";if(i.length===0)continue;let s=n.multilingual,d=s&&typeof s=="object"?s:void 0;t.push({slug:i,title:typeof n.title=="string"?n.title:i,links:Vt(n.links),tags:Vt(n.tags),externalLinks:Vt(n.externalLinks),content:typeof n.excerpt=="string"?n.excerpt:typeof n.content=="string"?n.content:"",multilingual:d})}return t}function Xr(e){let t=e.replace(/\\s+/g," ").trim();return t.length<=Bn?t:`${t.slice(0,Bn).trimEnd()}\\u2026`}function st(e){let t=0;for(let o of e)t=t*31+o.charCodeAt(0)>>>0;return t%628/100}function Un(e){return st(e)/(2*Math.PI)}function Lt(e,t,o){let n=st(e),i=Math.acos(2*Un(`${e}:phi`)-1),s=t+(o-t)*Un(`${e}:r`);return{x:s*Math.sin(i)*Math.cos(n),y:s*Math.sin(i)*Math.sin(n),z:s*Math.cos(i)}}function Qn(e){return e==="index"||e.endsWith("/index")}function er(e){return e==="tags"||e.startsWith("tags/")}function Zr(e){let t=e.multilingual?.translationKey;if(t==="home"||t==="graph"||t==="about"||t==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function tr(e,t){for(let o of t){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Bt(e,t){return e.multilingual?.locale?e.multilingual.locale:tr(e.slug,t).locale}function Jr(e,t){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${tr(e.slug,t).permalink}`}function Qr(e,t){let o=e.find(n=>Bt(n,t.prefixes)===t.localeId);if(o)return o;if(t.localeId===t.sourceLocale)return e.find(n=>Bt(n,t.prefixes)===t.sourceLocale)??e.find(n=>Bt(n,t.prefixes)===void 0)}function ct(e,t,o){return Math.min(o,Math.max(t,e))}function $n(e){let t=e.split("/").filter(o=>o.length>0);return t.length<2?"root":t[0]??"root"}function eo(e){let t=e.split("/").filter(o=>o.length>0);return t[t.length-1]??""}function Qt(e){return eo(e).trim().toLowerCase()}function to(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function no(e){let t=e.trim();return t.length===0||to(t)||er(t)||Qn(t)?!0:Qt(t).length===0}function ro(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),t=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(t.filter(o=>o.length>0))]}function nr(e){try{let t=new URL(e,window.location.origin);return t.protocol!=="http:"&&t.protocol!=="https:"?null:(t.hash="",t.hostname=t.hostname.toLowerCase(),t.pathname!=="/"&&t.pathname.endsWith("/")&&(t.pathname=t.pathname.replace(/\\/+$/,"")),t.toString())}catch{return null}}function oo(e,t){let o=nr(e);return o===null?!1:!t.includes(new URL(o).hostname)}function Yn(e){return`external:${e}`}function ao(e,t){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),i=o.pathname;return(t.get(n)??0)>1&&i.length>1?`${n}${i}`:n}function io(e){let t=new Map,o=new Map;for(let n of e){let i=Qt(n.slug);i.length>0&&!t.has(i)&&t.set(i,n.slug);let s=n.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,n.slug);let d=s.replace(/\\s+/g,"-");d.length>0&&!o.has(d)&&o.set(d,n.slug)}return{byBasename:t,byTitle:o}}function so(e,t,o){if(t.has(e))return e;let n=Qt(e),i=o.byBasename.get(n);if(i)return i;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return s||null}function co(e,t){return e.length===0?"":[...e].sort((n,i)=>(t.get(i)??0)-(t.get(n)??0))[0]??""}function lo(e,t,o=void 0){let n=e.filter(u=>!Qn(u.slug)&&!er(u.slug)&&!Zr(u)),i=new Map;for(let u of n){let b=Jr(u,t.prefixes),T=i.get(b)??[];T.push(u),i.set(b,T)}let s=[];for(let u of i.values()){let b=Qr(u,t);b&&s.push(b)}let d=new Set(s.map(u=>u.slug)),w=io(s),x=new Map,I=[],G=new Set,v=new Map,Y=u=>{x.set(u,(x.get(u)??0)+1)},K=(u,b,T)=>u<b?`${u}|${b}|${T}`:`${b}|${u}|${T}`,L=(u,b,T,P)=>{let R=K(u,b,T);return G.has(R)?!1:(G.add(R),I.push({source:u,target:b,kind:T}),P&&(Y(u),Y(b)),!0)};for(let u of s)for(let b of u.links){if(no(b))continue;let T=so(b,d,w);T!==null&&T!==u.slug&&L(u.slug,T,"wikilink",!0)}let j=ro(),D=new Set;for(let u of s)for(let b of u.externalLinks){let T=nr(b);T===null||!oo(T,j)||(D.add(T),L(u.slug,Yn(T),"external",!0))}let ne=new Map;for(let u of D){let b=new URL(u).hostname.replace(/^www\\./,"");ne.set(b,(ne.get(b)??0)+1)}let fe=new Set,ge=new Map;for(let u of s)for(let b of u.tags){v.set(b,(v.get(b)??0)+1);let T=`tag:${b}`;fe.add(T),L(u.slug,T,"tag",!0);let P=ge.get(b)??[];P.push(u.slug),ge.set(b,P)}if(o!==!1)for(let u of ge.values())u.length>Cr||u.forEach((b,T)=>{for(let P of u.slice(T+1))L(b,P,"cooc",!1)});if(o!==!1){let u=o?.maxTagsPerNote,b=o?.maxEdges,T=0;e:for(let P of s)if(!(P.tags.length<2)&&!(u!==void 0&&P.tags.length>u))for(let R=0;R<P.tags.length;R+=1)for(let H=R+1;H<P.tags.length;H+=1){if(b!==void 0&&T>=b)break e;L(`tag:${P.tags[R]}`,`tag:${P.tags[H]}`,"cooc",!1)&&(T+=1)}}let U=new Map;for(let u of s){let b=$n(u.slug);if(b==="root")continue;let T=U.get(b)??[];T.push(u.slug),U.set(b,T)}for(let u of U.values()){if(u.length<2)continue;let b=[...u].sort();for(let T=0;T<b.length;T+=1){let P=b[(T+1)%b.length],R=b[(T+Wn)%b.length],H=b[T];H===void 0||P===void 0||(H!==P&&!G.has(K(H,P,"wikilink"))&&L(H,P,"folder",!1),b.length>Wn+1&&R!==void 0&&H!==R&&!G.has(K(H,R,"wikilink"))&&L(H,R,"folder",!1))}}let _=[...x.values()],C=_.length>0?Math.min(..._):0,oe=_.length>0?Math.max(..._):0,X=u=>{let b=xt(x.get(u)??0,C,oe);return at+b*(Kt-at)},B=[...s].sort((u,b)=>(x.get(b.slug)??0)-(x.get(u.slug)??0)),O=new Set(B.filter(u=>(x.get(u.slug)??0)>0).slice(0,xr).map(u=>u.slug)),Q=s.map(u=>{let b=O.has(u.slug),T=b?Lt(u.slug,On.min,On.max):Lt(u.slug,zn.min,zn.max);return{id:u.slug,name:u.title,type:"note",val:X(u.slug),degree:x.get(u.slug)??0,isHub:b,tag:"",slug:u.slug,url:"",folder:$n(u.slug),tags:u.tags,dominantTag:co(u.tags,v),excerpt:Xr(u.content),phase:st(u.slug),x:T.x,y:T.y,z:T.z}});for(let u of D){let b=Yn(u),T=Lt(b,qn.min,qn.max);Q.push({id:b,name:ao(u,ne),type:"external",val:X(b)*Or,degree:x.get(b)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:st(b),x:T.x,y:T.y,z:T.z})}for(let u of fe){let b=u.slice(4),T=Lt(u,Vn.min,Vn.max);Q.push({id:u,name:b,type:"tag",val:ct(X(u)*.7,at,Kt),degree:x.get(u)??0,isHub:!1,tag:b,slug:`tags/${b}`,url:"",folder:"tag",tags:[b],dominantTag:b,excerpt:"",phase:st(u),x:T.x,y:T.y,z:T.z})}return{nodes:Q,links:I}}function Wt(e){let t=new Map,o=(n,i)=>{let s=t.get(n)??new Set;s.add(i),t.set(n,s)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let i=z(n.source),s=z(n.target);o(i,s),o(s,i)}return t}function Oe(e,t){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||t}function rr(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Oe("--graph-backdrop","#ffffff"),ink:Oe("--graph-text","#0f0f0f"),accent:Oe("--graph-accent","#a52142"),tertiary:Oe("--graph-external","#c75b75"),gray:Oe("--graph-muted","#737373"),external:Oe("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function _e(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function uo(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function fo(){return uo()}function $(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Xt(e){let t=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(t&&t[1]&&t[2]&&t[3])return{r:Number(t[1]),g:Number(t[2]),b:Number(t[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function qe(e,t){let o=Xt(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${t})`:e}function go(e,t,o){let n=Xt(e),i=Xt(t);if(!n||!i)return e;let s=(d,w)=>Math.round(d+(w-d)*o);return`rgb(${s(n.r,i.r)}, ${s(n.g,i.g)}, ${s(n.b,i.b)})`}function St(e){return e.bg}function mo(e){return $()?St(e):"rgba(0, 0, 0, 0)"}function or(e,t){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return t[o%t.length]??t[0]??e}function Kn(e,t){return e==="articles"?t.accent:e==="inbox"?t.tertiary:e==="root"?t.ink:or(e,[t.accent,t.tertiary,t.ink,t.gray])}function po(e,t){return e.length===0?t.ink:or(e,[t.accent,t.tertiary])}function ho(e){let t=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let i=`${n}${t}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function bo(e){let t=e.default;if(typeof t!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return t()}function Ut(e,t){e.textContent=t,e.classList.add("graph-landing__error")}async function yo(e){let o=await import(e?wr:yr);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):bo(o)}function wo(){try{let e=sessionStorage.getItem(Zn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function vo(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let t=sessionStorage.getItem(Jn);if(!t)return e;let o=Mt(JSON.parse(t)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,d=typeof o.spread=="number"?o.spread:e.spread,w=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:i,zoom:s,spread:d,hubGravity:w}}catch(t){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",t),e}}function ot(e){try{sessionStorage.setItem(Jn,JSON.stringify(e))}catch(t){console.error("[graph-landing] could not persist tune",t)}}function $t(e){try{sessionStorage.setItem(Zn,e)}catch(t){console.error("[graph-landing] could not persist lens",t)}}function ko(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function To(e,t){return e.type==="tag"?e.tag===t:e.tags.includes(t)}function xo(e,t){return e.type==="note"&&e.folder===t}function jn(e,t){let o=z(t),n=e.find(i=>i.id===o);return!n||n.type!=="note"?null:n.folder}function Eo(e,t,o){let n=new Map;if(t==="folder"){let i=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return i.forEach((s,d)=>{let w=Math.PI*2*d/Math.max(i.length,1),x={x:Math.cos(w)*o,y:Math.sin(w)*o,z:0};for(let I of e.nodes)I.type==="note"&&I.folder===s&&n.set(I.id,x)}),n}if(t==="tag"){let i=e.nodes.filter(d=>d.type==="tag"),s=new Map;i.forEach((d,w)=>{let x=Math.PI*2*w/Math.max(i.length,1);s.set(d.tag,{x:Math.cos(x)*o,y:Math.sin(x)*o,z:0})});for(let d of e.nodes)if(d.type==="tag"){let w=s.get(d.tag);w&&n.set(d.id,w)}else if(d.dominantTag.length>0){let w=s.get(d.dominantTag);w&&n.set(d.id,w)}}return n}function Lo(e,t){let o=[],n=i=>{let s=t*i;for(let d of o){let w=e(d);w&&(d.vx=(d.vx??0)+(w.x-(d.x??0))*s,d.vy=(d.vy??0)+(w.y-(d.y??0))*s,d.vz=(d.vz??0)+(w.z-(d.z??0))*s)}};return n.initialize=i=>{o=i},n}function So(e){let t=[],o=n=>{let i=e*n;for(let s of t)s.vy=(s.vy??0)-(s.y??0)*i};return o.initialize=n=>{t=n},o}function Xn(e,t,o,n){for(let i of e.querySelectorAll(t)){if(!(i instanceof HTMLElement))continue;let s=i.getAttribute(n);i.setAttribute("aria-pressed",s===o?"true":"false")}}function Mo(e,t,o,n){let i=Wt(t.links),s=(r,a,c)=>r<a?`${r}|${a}|${c}`:`${a}|${r}|${c}`,d=new Map(n.fullData.nodes.map(r=>[r.id,r])),w=new Map,x=new Set,I=new Set;n.fullData!==t&&(w=Wt(n.fullData.links),x=new Set(t.nodes.map(r=>r.id)),I=new Set(t.links.map(r=>s(z(r.source),z(r.target),r.kind))));let G=r=>{if(n.fullData===t)return!1;let a=yn(w,x,r,n.expandHops);if(!x.has(r)&&d.has(r)&&a.add(r),a.size===0)return!1;t.nodes=[...t.nodes],t.links=[...t.links];let c=n.layout.incrementalWarmup?d.get(r):void 0,l=0;for(let p of a){let h=d.get(p);if(h){if(c&&h.id!==c.id){let k=wn(c,l,n.use3d);h.x=k.x,h.y=k.y,h.z=k.z,h.vx=h.vy=h.vz=0,l+=1}t.nodes.push(h),x.add(p)}}for(let p of n.fullData.links){let h=z(p.source),k=z(p.target);if(!x.has(h)||!x.has(k))continue;let g=s(h,k,p.kind);I.has(g)||(I.add(g),t.links.push(p))}return i=Wt(t.links),!0},v={lens:wo(),allLabels:!0,focusTag:null,focusFolder:null},Y=null,K=null,L=vo(),j=!1,D=In,ne=it,fe=0,ge=r=>xt(r.degree,0,fe),U=()=>{e.cooldownTicks(n.layout.freezeAfterWarmup?90:n.layout.cooldownTicks??200),e.d3ReheatSimulation()},_=()=>K??Y,C=new Set(t.nodes.filter(r=>r.type==="note").sort((r,a)=>a.degree-r.degree).slice(0,Er).map(r=>r.id)),oe=r=>{let a=r.val;return r.isHub&&(a*=Nn),v.lens==="tag"&&r.type==="tag"&&(a*=Dr),v.focusTag&&r.id===`tag:${v.focusTag}`&&(a*=zr),a},X=r=>{let a=_();return a===r.id?!0:a!==null?i.get(a)?.has(r.id)??!1:v.allLabels||C.has(r.id)},B=r=>{let a=Kt*Nn,c=ct((oe(r)-at)/(a-at),0,1);return(Pn+c*(Br-Pn))*L.nodeScale},O=r=>{let a=_();if(a!==null)return a===r||(i.get(a)?.has(r)??!1);if(v.focusTag===null&&v.focusFolder===null)return!0;let c=t.nodes.find(l=>l.id===r);return c?v.focusFolder!==null?xo(c,v.focusFolder):v.focusTag!==null&&To(c,v.focusTag):!1},Q=r=>r.type==="external"?o.current.gray:v.lens==="tag"?r.type==="tag"?o.current.tertiary:po(r.dominantTag,o.current):v.lens==="folder"?r.type==="tag"?o.current.tertiary:Kn(r.folder,o.current):v.lens==="hub"?r.type==="tag"?o.current.tertiary:r.isHub?o.current.accent:o.current.ink:r.type==="tag"?o.current.gray:o.current.ink,u=r=>r.isHub?o.current.accent:r.type==="tag"?o.current.gray:o.current.ink,b=(r,a)=>{let c=d.get(r)?.degree??0,l=d.get(a)?.degree??0;return Math.log1p(Math.min(c,l))/Math.log1p(Math.max(1,fe))},T=r=>{let a=_();if(a!==null&&(a===r.id||(i.get(a)?.has(r.id)??!1)))return $()?"#ffffff":o.current.accent;let c=$()?u(r):Q(r);return O(r.id)?$()?c:r.isHub?o.current.accent:c:go(c,St(o.current),1-rt)},P=r=>B(r)*Rn*(Hn/Gn),R=r=>r==="wikilink"?.8:r==="external"?.7:r==="tag"?.62:0,H=r=>{let a=z(r.source),c=z(r.target),l=_(),p;if(r.kind==="cooc"||r.kind==="folder"){if(!(r.kind==="cooc"?v.lens!=="folder":v.lens==="folder"))return 0;p=$()?.24:.26}else{if(l!==null&&(a===l||c===l))return $()?.72:.95;let h=b(a,c);p=R(r.kind)*(.6+.4*h)}return(l!==null||v.focusTag!==null||v.focusFolder!==null)&&(!O(a)||!O(c))?p*rt:p},ae=r=>{let a=z(r.source),c=z(r.target),l=_(),p=$()?$r:o.current.gray;return l!==null&&(a===l||c===l)?$()?Fn:o.current.accent:p},we=r=>qe(ae(r),H(r)),ie=()=>({nodes:t.nodes,links:t.links}),ee=r=>{let a=C.has(r.id)||_()===r.id?o.current.ink:o.current.gray;return O(r.id)?a:qe(a,rt)},se=r=>{if(!$()){let a=o.current.bg;return O(r.id)?qe(a,.9):qe(a,.28)}return O(r.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)"},re=()=>{let r=e.controls?.().target;if(r&&(D={x:r.x,y:r.y,z:r.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let c={x:a.x-D.x,y:a.y-D.y,z:a.z-D.z},l=Math.hypot(c.x,c.y,c.z);if(l>1)return{dir:c,len:l}}}return{dir:Ce,len:it}},Ae=r=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=ne/ct(L.zoom,.4,2.5),{dir:c,len:l}=re(),p=a/l;e.cameraPosition({x:D.x+c.x*p,y:D.y+c.y*p,z:D.z+c.z*p},D,_e()?0:r),ft();return}typeof e.zoom=="function"&&e.zoom(L.zoom,_e()?0:r)},te=()=>{let r=Kr(L.spread),a=zt.min+r*(zt.max-zt.min),c=Ot.min+r*(Ot.max-Ot.min),l=new Map(t.nodes.map(M=>[M.id,M.degree])),p=Math.max(0,...l.values());fe=p;let h=ge,k=M=>dn(l.get(z(M.source))??0,l.get(z(M.target))??0,p),g=e.d3Force("charge");g?.strength&&g.strength(M=>a*fn(h(M))),g?.theta&&n.layout.chargeTheta!==void 0&&g.theta(n.layout.chargeTheta);let f=e.d3Force("link");f?.distance&&f.distance(M=>{let q=gn(k(M),L.hubGravity);return v.lens==="tag"&&M.kind==="tag"?c*.72*q:M.kind==="cooc"||M.kind==="folder"?c:c*q}),f?.strength&&f.strength(M=>{if(M.kind==="cooc"||M.kind==="folder")return .015;let q=mn(k(M),L.hubGravity);if(v.lens==="tag"&&M.kind==="tag")return .3*q;if(v.lens==="folder"){let F=jn(t.nodes,M.source),de=jn(t.nodes,M.target);if(F!==null&&F===de)return .16*q}return M.kind==="tag"?.14*q:(M.kind==="external"?.16:.24)*q}),n.forceCollide&&e.d3Force("collision",n.forceCollide(M=>B(M)+Wr).strength(.85).iterations(1));let y=e.d3Force("center");y?.strength&&y.strength(Lr);let N=qt.min+r*(qt.max-qt.min),V=Eo(t,v.lens,N),W=v.lens==="folder"||v.lens==="tag"?.08:0;if(e.d3Force("cluster",Lo(M=>V.get(M.id)??null,W)),n.use3d){e.d3Force("flattenZ",null);let M=n.root.querySelector("#graph-landing-mount"),q=M instanceof HTMLElement?M.clientWidth>=M.clientHeight*Mr:!0;e.d3Force("squash",q?So(Sr):null)}},ve=new Map,ke=r=>Et(ve,"dot",()=>{let a=Gn,c=document.createElement("canvas");c.width=c.height=a;let l=c.getContext("2d");if(l){let p=Hn,h=l.createRadialGradient(32,32,0,32,32,p);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.94,"rgba(255,255,255,1)"),h.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=h,l.fillRect(0,0,a,a)}return new r.CanvasTexture(c)}),Ve=(r,a,c)=>{r.color.set(T(a))},S=new Map,ce=new Map,me=new Map,Te=new Map,pe=new Map,Be=new Map,Pe=new Map,Ne=(r,a,c)=>{let l=`${a}|${c}`;return Et(Be,l,()=>new r.CylinderGeometry(a,a,1,c))},ye=(r,a,c)=>{let l=`${a}|${c}`;return Et(Pe,l,()=>new r.MeshBasicMaterial({color:a,transparent:!0,opacity:c,depthWrite:!1,blending:$()?r.AdditiveBlending:r.NormalBlending}))},lt=getComputedStyle(n.root).getPropertyValue("--bodyFont").trim()||"Inter, system-ui, sans-serif",xe=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let r=n.spriteText,a=n.three,c=n.interaction.incrementalRepaint;if(S.clear(),me.clear(),Te.clear(),c)for(let l of t.nodes)Te.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let p=B(l),h=!1;if(a){let V=new a.SpriteMaterial({map:ke(a),color:"#ffffff",transparent:!0,depthWrite:!1,blending:a.NormalBlending,opacity:1});V.color.set(T(l)),c&&me.set(l.id,V);let W=new a.Sprite(V);W.renderOrder=11;let M=p*Rn;W.scale.x=M,W.scale.y=M,W.scale.z=1,h=W}let k=X(l);if(!r||!c&&!k)return h;let g=Array.from(l.name),f=window.innerWidth<700?24:40,y=new r(g.length>f?`${g.slice(0,f).join("")}\\u2026`:l.name);if(y.color=ee(l),y.fontFace=lt,y.backgroundColor=!1,y.fontWeight=C.has(l.id)?"500":"400",y.renderOrder=12,y.material.transparent=!0,y.material.depthWrite=!1,y.material.alphaTest=.01,y.material.toneMapped=!1,y.textHeight=C.has(l.id)?5.5:4.5,y.center.set(0,.5),y.position.x=p+3,y.position.y=0,c?(y.visible=k,S.set(l.id,{sprite:y,node:l})):n.lod.labelDistance!==void 0&&S.set(l.id,{sprite:y,node:l}),!a||h===!1)return y;let N=new a.Group;return N.add(h),N.add(y),N})},Ct=()=>{let r=n.three;if(!n.use3d||!r||typeof e.linkThreeObject!="function")return;let a=new r.Vector3(0,1,0),c=n.lod.linkResolution??5,l=n.lod.cullDistance,p=n.interaction.incrementalRepaint,h=n.lod.shareLinkResources;if(ce.clear(),pe.clear(),Be.clear(),Pe.clear(),p)for(let k of t.links){let g=z(k.source),f=z(k.target);for(let y of[g,f]){let N=pe.get(y);N?N.push(k):pe.set(y,[k])}}e.linkThreeObject(k=>{let g=Ur[k.kind]*L.edgeScale,f=h?ye(r,ae(k),H(k)):new r.MeshBasicMaterial({color:ae(k),transparent:!0,opacity:H(k),depthWrite:!1,blending:$()?r.AdditiveBlending:r.NormalBlending}),y=h?Ne(r,g,c):new r.CylinderGeometry(g,g,1,c),N=new r.Mesh(y,f);return(l!==void 0||p)&&ce.set(k,N),N}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((k,g,f)=>{let y=g.end.x-g.start.x,N=g.end.y-g.start.y,V=g.end.z-g.start.z,W=Math.sqrt(y*y+N*N+V*V);if(!$()){let M=typeof f.source=="string"?d.get(f.source):f.source,q=typeof f.target=="string"?d.get(f.target):f.target,F=M&&q?ln(g.start,g.end,P(M),P(q)):null;return F?(k.position.x=(F.start.x+F.end.x)/2,k.position.y=(F.start.y+F.end.y)/2,k.position.z=(F.start.z+F.end.z)/2,k.scale.x=1,k.scale.y=F.length,k.scale.z=1,F.length>0&&k.quaternion.setFromUnitVectors(a,new r.Vector3(F.end.x-F.start.x,F.end.y-F.start.y,F.end.z-F.start.z).normalize()),!0):(k.scale.y=0,!0)}return k.position.x=(g.start.x+g.end.x)/2,k.position.y=(g.start.y+g.end.y)/2,k.position.z=(g.start.z+g.end.z)/2,k.scale.x=1,k.scale.y=Math.max(W,.01),k.scale.z=1,k.quaternion.setFromUnitVectors(a,new r.Vector3(y,N,V).normalize()),!0})},Re=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(r=>{let a=_();if(a===null||_e()||document.hidden)return 0;let c=z(r.source),l=z(r.target);return c===a||l===a?2:0})},le=()=>{e.nodeVal(oe),e.nodeColor(T),e.linkColor(we),e.linkWidth(r=>{let a=z(r.source),c=z(r.target),l=_(),p=L.edgeScale*($()?1:1.8);return l!==null&&(a===l||c===l)?.7*p:r.kind==="wikilink"||r.kind==="external"?.5*p:(r.kind==="tag"?.35:.25)*p}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ln),Re(),Ct(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},At=(r,a)=>{let c=vn(i,r,a,Te.keys()),l=new Set;for(let p of c){let h=Te.get(p);if(!h)continue;let k=me.get(p);k&&n.three&&Ve(k,h,n.three);let g=S.get(p);g&&(g.sprite.color=ee(h),g.sprite.visible=X(h));for(let f of pe.get(p)??[]){if(l.has(f))continue;l.add(f);let y=ce.get(f);y&&(n.lod.shareLinkResources&&n.three?y.material=ye(n.three,ae(f),H(f)):(y.material.color.set(ae(f)),y.material.opacity=H(f)))}}},Ee=r=>{if(n.interaction.incrementalRepaint&&n.use3d){Re(),At(r,_());return}le(),n.use3d&&xe()},Le=()=>{let r=n.root.querySelector("[data-graph-legend]");if(!(r instanceof HTMLElement))return;let a=(h,k)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let f=document.createElement("span");f.className="graph-landing__dot",f.setAttribute("aria-hidden","true"),f.style.background=h;let y=document.createElement("span");return y.textContent=k,g.append(f,y),g},c=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",p=n.root.dataset.legendLinks??"Links";r.replaceChildren(a(o.current.ink,c),a(o.current.tertiary,l),a(o.current.external,p))},We=r=>{let a=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[r.dataset.key]=r.dataset.value,c.setAttribute("aria-pressed",r.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",r.dotColor!==null){let h=document.createElement("span");h.className="graph-landing__dot",h.style.background=r.dotColor,l.append(h)}l.append(document.createTextNode(r.label));let p=document.createElement("span");return p.className="graph-landing__tag-count",p.textContent=String(r.count),c.append(l,p),a.append(c),a},ut=()=>{let r=n.root.querySelector("[data-graph-tags]");if(!(r instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),c=n.root.querySelector(".graph-landing__tags");if(v.lens==="folder"){let p=n.root.dataset.folderRootLabel??"root",h=new Map;for(let g of t.nodes)g.type==="note"&&h.set(g.folder,(h.get(g.folder)??0)+1);let k=[...h.entries()].sort((g,f)=>f[1]-g[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=k.length===0),r.replaceChildren(...k.map(([g,f])=>We({dataset:{key:"graphFolder",value:g},pressed:v.focusFolder===g,dotColor:Kn(g,o.current),label:g==="root"?p:g,count:f})));return}let l=t.nodes.filter(p=>p.type==="tag").sort((p,h)=>h.degree-p.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=l.length===0),r.replaceChildren(...l.map(p=>We({dataset:{key:"graphTag",value:p.tag},pressed:v.focusTag===p.tag,dotColor:null,label:p.tag,count:p.degree})))},Se=n.root.querySelector("[data-graph-hint]"),Ge=0,He=()=>{if(!(!(Se instanceof HTMLElement)||Se.hidden)){Se.hidden=!0,window.clearTimeout(Ge);try{sessionStorage.setItem(Sn,"1")}catch{}}},dt=()=>{if(Se instanceof HTMLElement){try{if(sessionStorage.getItem(Sn))return}catch{}Se.hidden=!1,Ge=window.setTimeout(He,9e3)}};window.addCleanup(()=>window.clearTimeout(Ge));let Fe=!0,m=(r,a)=>{if(typeof e.graph2ScreenCoords!="function"||r<=0||a<=0)return _n;e.camera?.()?.updateMatrixWorld?.();let c=[],l=[];for(let y of ie().nodes){if(y.x===void 0||y.y===void 0)continue;let N=e.graph2ScreenCoords(y.x,y.y,y.z??0);c.push(Math.abs(N.x-r/2)),l.push(Math.abs(N.y-a/2))}let p=y=>y.sort((N,V)=>N-V)[Math.floor((y.length-1)*.98)]??0,h=p(c),k=p(l);if(h<1||k<1)return _n;let g=.08,f=Math.min(r*(.5-g)/h,a*(.5-g)/k);return ct(1/f,.3,1)},E=0,A=()=>{let r=n.root.querySelector("#graph-landing-mount"),a=r instanceof HTMLElement?r.clientWidth:0,c=r instanceof HTMLElement?r.clientHeight:0;if(t.nodes.length>0&&e.zoomToFit?.(0,40),t.nodes.length>1&&re().len<10&&E++<120){Z=window.requestAnimationFrame(A);return}E=0,ne=re().len*m(a,c),Ae(0),ft()},Z=0;e.onEngineStop(()=>{Fe&&(Z=window.requestAnimationFrame(()=>{Fe=!1,A(),dt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Z));let he=(r=!1)=>{e.warmupTicks(r&&n.layout.incrementalWarmup?0:n.layout.warmupTicks??(n.use3d?50:60)),e.graphData(ie()),te(),le(),xe(),Le(),ut(),Xn(n.root,"[data-graph-lens]",v.lens,"data-graph-lens"),U()},Ue=r=>{v.lens=r,r!=="tag"&&(v.focusTag=null),r!=="folder"&&(v.focusFolder=null),$t(r),he()},$e=r=>{v.focusTag=v.focusTag===r?null:r,v.focusFolder=null,v.focusTag&&(v.lens="tag",$t("tag")),he()},Ye=r=>{v.focusFolder=v.focusFolder===r?null:r,v.focusTag=null,v.focusFolder&&(v.lens="folder",$t("folder")),he()},en=()=>n.use3d?mo(o.current):St(o.current),ft=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let r=re().len;e.scene().fog=new n.three.Fog(St(o.current),r*qr,r*Vr)};e.graphData(ie()),e.backgroundColor(en()),e.nodeLabel(()=>""),e.nodeRelSize(Ar),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Nr),typeof e.linkOpacity=="function"&&e.linkOpacity(Ln),te(),le();let De=n.root.querySelector("[data-graph-preview]"),gt=n.root.querySelector("[data-graph-preview-chip]"),mt=n.root.querySelector("[data-graph-preview-title]"),pt=n.root.querySelector("[data-graph-preview-excerpt]"),ht=0;window.addCleanup(()=>window.clearTimeout(ht));let ar=r=>{if(!(De instanceof HTMLElement)||!(gt instanceof HTMLElement)||!(mt instanceof HTMLElement)||!(pt instanceof HTMLElement))return;window.clearTimeout(ht);let a=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links";if(r.type==="tag"){let p=n.root.dataset.previewTagTemplate??"{n} notes";gt.textContent=c,mt.textContent=`#${r.tag}`,pt.textContent=p.replace("{n}",String(r.degree))}else r.type==="external"?(gt.textContent=l,mt.textContent=r.name,pt.textContent=r.url):(gt.textContent=a,mt.textContent=r.name,pt.textContent=r.excerpt);De.hidden=!1,De.dataset.visible="true"},tn=()=>{De instanceof HTMLElement&&(window.clearTimeout(ht),ht=window.setTimeout(()=>{De.dataset.visible="false",De.hidden=!0},Yr))};if(e.onNodeHover(r=>{let a=_();Y=r?r.id:null,K===null&&(r?ar(r):tn()),Ee(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let c=e.controls();c.autoRotate=!1,c.autoRotateSpeed=Fr}e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>$()?Fn:o.current.accent),typeof e.cameraPosition=="function"&&(e.cameraPosition(Ce,In),L.zoom!==1&&Ae(0)),xe(),ft();let r=n.lod.labelDistance,a=n.lod.cullDistance;if((r!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let c=e.cameraPosition.bind(e),l=0,p=()=>{let h=c();if(h&&typeof h.x=="number"&&typeof h.y=="number"&&typeof h.z=="number"){let k=Math.max(1,n.root.clientHeight||window.innerHeight);if(r!==void 0){let g=[];for(let f of S.values()){let y=f.node.x??0,N=f.node.y??0,V=f.node.z??0,W=Math.hypot(h.x-y,h.y-N,h.z-V);if(f.sprite.visible=hn(X(f.node),_()===f.node.id||_()===null&&(v.allLabels||C.has(f.node.id)),W,r),f.sprite.visible){let M=Array.from(f.node.name),q=window.innerWidth<700?24:40,F=M.length>q?`${M.slice(0,q).join("")}\\u2026`:f.node.name;f.sprite.text!==F&&(f.sprite.text=F);let de=e.graph2ScreenCoords?.(y,N,V);if(de&&_()===null){let lr=C.has(f.node.id),cn=Array.from(F).length*(lr?8:6)+12,kt=de.x>window.innerWidth*.6?de.x-cn:de.x,Pt=kt+cn,ur=g.some(Rt=>Math.abs(Rt.y-de.y)<22&&kt<Rt.right&&Pt>Rt.left);f.sprite.visible=!ur&&kt>=8&&Pt<=window.innerWidth-8,f.sprite.visible&&g.push({left:kt,right:Pt,y:de.y})}let tt=de!==void 0&&de.x>window.innerWidth*.6;f.sprite.center.set(tt?1:0,.5),f.sprite.position.x=(tt?-1:1)*(B(f.node)+3);let sn=Math.max(4.5,W/k*(C.has(f.node.id)?10:7.5));Math.abs(f.sprite.textHeight-sn)>.5&&(f.sprite.textHeight=sn)}}}if(a!==void 0){let g=_();for(let[f,y]of ce){let N=z(f.source),V=z(f.target);if(g!==null&&(N===g||V===g)){y.visible=!0;continue}let W=Math.hypot(h.x-y.position.x,h.y-y.position.y,h.z-y.position.z);y.visible=Ht(W,a)!=="dot"}}}l=window.requestAnimationFrame(p)};l=window.requestAnimationFrame(p),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((r,a,c)=>{let l=B(r),p=r.x??0,h=r.y??0;if(a.save(),a.beginPath(),a.arc(p,h,l,0,Math.PI*2),a.fillStyle=T(r),a.fill(),$()&&r.isHub&&(a.strokeStyle=O(r.id)?Dn:qe(Dn,rt),a.lineWidth=1.2/c,a.stroke()),X(r)){a.globalAlpha=1;let k=11.5/c;a.font=`${k}px ${o.current.font}`,a.fillStyle=$()?O(r.id)?o.current.ink:qe(o.current.ink,rt):ee(r),a.textAlign="center",a.textBaseline="bottom";let g=h-l-6;$()||(a.strokeStyle=se(r),a.lineWidth=2.5/c,a.lineJoin="round",a.strokeText(r.name,p,g)),a.fillText(r.name,p,g)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((r,a,c)=>{let l=B(r)+8;c.beginPath(),c.arc(r.x??0,r.y??0,l,0,Math.PI*2),c.fillStyle=a,c.fill()});let Ke=n.root.querySelector("[data-graph-inspect]"),bt=n.root.querySelector("[data-graph-inspect-chip]"),yt=n.root.querySelector("[data-graph-inspect-title]"),wt=n.root.querySelector("[data-graph-inspect-excerpt]"),Nt=n.root.querySelector("[data-graph-inspect-tags]"),It=n.root.querySelector("[data-graph-inspect-connected]"),J=n.root.querySelector("[data-graph-inspect-open]"),ze=r=>{n.root.dataset.railOpen=r?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),c=n.root.querySelector("[data-graph-rail-scrim]"),l=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",r?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",r?"false":"true"),c instanceof HTMLElement&&(c.hidden=!r)},be=()=>{let a=!_e()&&!document.hidden&&!j;typeof e.controls=="function"&&(e.controls().autoRotate=a),Re()},nn=window.matchMedia("(prefers-reduced-motion: reduce)");nn.addEventListener("change",be),document.addEventListener("visibilitychange",be),window.addCleanup(()=>{nn.removeEventListener("change",be),document.removeEventListener("visibilitychange",be)}),be();let ir=r=>{let a=i.get(r.id)??new Set,c=[];for(let l of a){let p=t.nodes.find(h=>h.id===l);p&&c.push(p)}return c.sort((l,p)=>p.degree-l.degree)},sr=r=>{if(!(Ke instanceof HTMLElement)||!(bt instanceof HTMLElement)||!(yt instanceof HTMLElement)||!(wt instanceof HTMLElement)||!(Nt instanceof HTMLElement)||!(It instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links",p=n.root.dataset.inspectEmpty??"No direct connections";r.type==="tag"?(bt.textContent=c,yt.textContent=`#${r.tag}`,wt.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(r.degree))):r.type==="external"?(bt.textContent=l,yt.textContent=r.name,wt.textContent=r.url):(bt.textContent=a,yt.textContent=r.name,wt.textContent=r.excerpt);let h=r.tags.map(g=>{let f=document.createElement("li");return f.textContent=g,f});Nt.replaceChildren(...h),Nt.hidden=h.length===0;let k=ir(r).slice(0,12);if(k.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=p,It.replaceChildren(g)}else It.replaceChildren(...k.map(g=>{let f=document.createElement("li"),y=document.createElement("button");y.type="button",y.className="graph-landing__inspect-link",y.dataset.graphInspectId=g.id;let N=g.type==="tag"?c:g.type==="external"?l:a,V=document.createElement("span");V.textContent=N;let W=document.createElement("strong");return W.textContent=g.type==="tag"?`#${g.tag}`:g.name,y.append(V,W),f.append(y),f}));J instanceof HTMLAnchorElement&&(r.type==="note"&&r.slug.length>0?(J.hidden=!1,J.href=ho(r.slug).toString(),J.textContent=n.root.dataset.inspectRead??"Read note",J.removeAttribute("target"),J.removeAttribute("rel")):r.type==="external"&&r.url.length>0?(J.hidden=!1,J.href=r.url,J.textContent=n.root.dataset.inspectOpenExternal??"Open",J.target="_blank",J.rel="noopener noreferrer"):(J.hidden=!0,J.removeAttribute("href"),J.removeAttribute("target"),J.removeAttribute("rel"))),Ke.hidden=!1,n.root.dataset.inspecting="true",ze(!1),tn()},je=()=>{let r=_();if(K=null,Ke instanceof HTMLElement){let a=Ke.contains(document.activeElement);Ke.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}n.root.dataset.inspecting="false",Y=null,be(),Ee(r)},cr=r=>{let a=_();K=r.id,be(),sr(r),Ee(a)},_t=(r,a=!1)=>{if(He(),G(r.id)&&he(!0),cr(r),a){D={x:r.x??0,y:r.y??0,z:r.z??0};let c=_e()?0:450;n.use3d&&e.cameraPosition?(ne=it,e.cameraPosition({x:D.x+Ce.x/L.zoom,y:D.y+Ce.y/L.zoom,z:D.z+Ce.z/L.zoom},D,c)):e.centerAt?.(D.x,D.y,c)}},vt=!1;e.onNodeClick((r,a)=>{r&&(vt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),_t(r))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{je(),ze(!1)});let ue=n.root.querySelector("#graph-landing-mount");if(ue instanceof HTMLElement){let r=new ResizeObserver(()=>{e.width(ue.clientWidth),e.height(ue.clientHeight),K===null&&!Fe&&A()});r.observe(ue),window.addCleanup(()=>r.disconnect());let a=null,c=0,l=g=>{He(),a={x:g.clientX,y:g.clientY},vt=!1,j=!0,be()},p=(g,f)=>{if(typeof e.graph2ScreenCoords!="function")return null;let y=ue.getBoundingClientRect(),N=g-y.left,V=f-y.top,W=null,M=484;for(let q of ie().nodes){if(q.x===void 0||q.y===void 0)continue;let F=e.graph2ScreenCoords(q.x,q.y,q.z??0),tt=(F.x-N)**2+(F.y-V)**2;tt<M&&(M=tt,W=q)}return W},h=g=>{let f=a;a=null,j=!1,be(),!(!f||(g.clientX-f.x)**2+(g.clientY-f.y)**2>25)&&(window.clearTimeout(c),c=window.setTimeout(()=>{if(vt){vt=!1;return}let N=p(g.clientX,g.clientY);N?_t(N):je()},0))},k=()=>{a=null,j=!1,be()};ue.addEventListener("pointerdown",l,!0),ue.addEventListener("pointerup",h,!0),ue.addEventListener("pointercancel",k,!0),window.addCleanup(()=>{window.clearTimeout(c),ue.removeEventListener("pointerdown",l,!0),ue.removeEventListener("pointerup",h,!0),ue.removeEventListener("pointercancel",k,!0)})}Xn(n.root,"[data-graph-lens]",v.lens,"data-graph-lens"),Le(),ut(),v.lens!=="all"&&he(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let rn=()=>{o.current=rr(),e.backgroundColor(en()),ft(),le(),xe(),Le()};document.addEventListener("themechange",rn),window.addCleanup(()=>document.removeEventListener("themechange",rn));let on=r=>{let a=r.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){je();return}if(a.closest("[data-graph-rail-toggle]")){let f=n.root.dataset.railOpen!=="true";f&&je(),ze(f);return}if(a.closest("[data-graph-rail-scrim]")){ze(!1);return}let c=a.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let f=n.fullData.nodes.find(y=>y.id===c.dataset.graphInspectId);f&&_t(f,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&ko(l.dataset.graphLens)){Ue(l.dataset.graphLens);return}let p=a.closest("[data-graph-tag]");if(p instanceof HTMLElement&&p.dataset.graphTag){$e(p.dataset.graphTag);return}let h=a.closest("[data-graph-folder]");if(h instanceof HTMLElement&&h.dataset.graphFolder){Ye(h.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){U();return}let k=a.closest("[data-graph-labels]");if(k instanceof HTMLButtonElement){v.allLabels=!v.allLabels,k.setAttribute("aria-pressed",v.allLabels?"true":"false");let f=k.dataset.labelShow??"Labels",y=k.dataset.labelHide??"Labels",N=v.allLabels?y:f;k.title=N,k.setAttribute("aria-label",N),xe();return}if(a.closest("[data-graph-theme]")){let f=$()?"light":"dark";document.documentElement.setAttribute("saved-theme",f),localStorage.setItem("theme",f),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${f}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:f}}));return}let g=a.closest("[data-graph-tags-toggle]");if(g instanceof HTMLButtonElement){let f=n.root.querySelector(".graph-landing__tags");if(f instanceof HTMLElement){let y=f.dataset.open==="true";f.dataset.open=y?"false":"true",g.setAttribute("aria-expanded",y?"false":"true")}}},Xe=n.root.querySelector("[data-graph-node-scale]"),Ze=n.root.querySelector("[data-graph-edge-scale]");if(Xe instanceof HTMLInputElement){Xe.value=String(Math.round(L.nodeScale*100));let r=()=>{L.nodeScale=Number(Xe.value)/100,ot(L),te(),U(),le(),n.use3d&&xe()};Xe.addEventListener("input",r),window.addCleanup(()=>Xe.removeEventListener("input",r))}if(Ze instanceof HTMLInputElement){Ze.value=String(Math.round(L.edgeScale*100));let r=()=>{L.edgeScale=Number(Ze.value)/100,ot(L),le()};Ze.addEventListener("input",r),window.addCleanup(()=>Ze.removeEventListener("input",r))}let Je=n.root.querySelector("[data-graph-hub-gravity]");if(Je instanceof HTMLInputElement){Je.value=String(Math.round(L.hubGravity*100));let r=()=>{let a=Number(Je.value)/100;L.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,ot(L),te(),U()};Je.addEventListener("input",r),window.addCleanup(()=>Je.removeEventListener("input",r))}let Qe=n.root.querySelector("[data-graph-zoom]");if(Qe instanceof HTMLInputElement){Qe.value=String(Math.round(L.zoom*100));let r=()=>{L.zoom=Number(Qe.value)/100,ot(L),Ae(200)};Qe.addEventListener("input",r),window.addCleanup(()=>Qe.removeEventListener("input",r))}let et=n.root.querySelector("[data-graph-spread]");if(et instanceof HTMLInputElement){et.value=String(Math.round(L.spread*100));let r=()=>{L.spread=Number(et.value)/100,ot(L),te(),U()};et.addEventListener("input",r),window.addCleanup(()=>et.removeEventListener("input",r))}ze(!1),n.root.addEventListener("click",on),window.addCleanup(()=>n.root.removeEventListener("click",on));let an=r=>{if(r.key==="Escape"){if(n.root.dataset.railOpen==="true"){ze(!1);return}je()}};window.addEventListener("keydown",an),window.addCleanup(()=>window.removeEventListener("keydown",an))}function Co(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Ao(){try{return window.localStorage.getItem(jt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Yt(e){try{if(e){window.localStorage.setItem(jt,"stopped");return}window.localStorage.removeItem(jt)}catch(t){console.error("[graph-landing] could not persist ambient audio preference",t)}}function No(e){let t=performance.now(),o=0,n=i=>{let s=Math.min(1,(i-t)/e.durationMs),d=s*s;e.apply(e.from+(e.to-e.from)*d),s<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function Io(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((t,o)=>{let n=window,i=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let s=n.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}t(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=Hr,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function _o(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:t=>{e.onReady(t.target)},onStateChange:t=>{t.data===e.api.PlayerState.ENDED&&e.onEnded(t.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}var Zt=class{constructor(t){Ie(this,"level",t);Ie(this,"context",null);Ie(this,"master",null);Ie(this,"crackleGain",null);Ie(this,"crackleSource",null);Ie(this,"crackleBuffer",null)}ensureContext(){if(this.context)return this.context.state==="suspended"&&this.context.resume(),this.context;let t=window.AudioContext??window.webkitAudioContext;if(!t)return null;try{this.context=new t}catch(o){return console.error("[graph-landing] vinyl effects unavailable",o),null}return this.master=this.context.createGain(),this.master.gain.value=this.level,this.master.connect(this.context.destination),this.context}burst(t){let o=this.ensureContext();if(!o||!this.master)return;let n=Math.max(1,Math.round(o.sampleRate*t.durationS)),i=o.createBuffer(1,n,o.sampleRate),s=i.getChannelData(0);for(let I=0;I<n;I++)s[I]=(Math.random()*2-1)*Math.exp(-6*I/n);let d=o.createBufferSource();d.buffer=i;let w=o.createBiquadFilter();w.type=t.filter,w.frequency.value=t.frequency;let x=o.createGain();x.gain.value=t.peak,d.connect(w),w.connect(x),x.connect(this.master),d.start(),d.onended=()=>{d.disconnect(),w.disconnect(),x.disconnect()}}needleDrop(){this.burst({durationS:.22,filter:"lowpass",frequency:160,peak:.9}),this.burst({durationS:.035,filter:"bandpass",frequency:2200,peak:.45})}needleLift(){this.burst({durationS:.025,filter:"bandpass",frequency:3e3,peak:.3}),this.burst({durationS:.12,filter:"lowpass",frequency:200,peak:.35})}setCrackle(t){let o=this.ensureContext();if(!o||!this.master)return;if(!t){if(this.crackleGain&&this.crackleSource){let d=this.crackleGain,w=this.crackleSource;d.gain.cancelScheduledValues(o.currentTime),d.gain.setValueAtTime(d.gain.value,o.currentTime),d.gain.linearRampToValueAtTime(0,o.currentTime+.4),w.stop(o.currentTime+.45),w.onended=()=>{w.disconnect(),d.disconnect()}}this.crackleSource=null,this.crackleGain=null;return}if(this.crackleSource)return;if(!this.crackleBuffer){let w=En(o.sampleRate*4);this.crackleBuffer=o.createBuffer(1,w.length,o.sampleRate),this.crackleBuffer.getChannelData(0).set(w)}let n=o.createBufferSource();n.buffer=this.crackleBuffer,n.loop=!0;let i=o.createBiquadFilter();i.type="bandpass",i.frequency.value=1800,i.Q.value=.7;let s=o.createGain();s.gain.value=0,s.gain.linearRampToValueAtTime(.25,o.currentTime+.8),n.connect(i),i.connect(s),s.connect(this.master),n.start(),this.crackleSource=n,this.crackleGain=s}close(){this.setCrackle(!1),this.context&&(this.context.close(),this.context=null,this.master=null)}};function Po(e){let t=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),s=e.querySelector("[data-graph-music-track-list]"),d=e.querySelector("[data-graph-music-status]"),w=e.querySelector("[data-graph-music-dock]"),x=e.querySelector("[data-graph-music-now]"),I=e.querySelector("[data-graph-music-now-title]"),G=e.querySelector("[data-graph-music-now-artist]"),v=e.querySelector("[data-graph-deck-title]"),Y=e.querySelector("[data-graph-deck-artist]"),K=Array.from(e.querySelectorAll("[data-graph-record]"));if(!(t instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(s instanceof HTMLElement)||!(d instanceof HTMLElement))return;let L=e.dataset.audioStop??"Stop music",j=e.dataset.audioPlay??"Play music",D=e.dataset.musicLibraryOpen??"Open record collection",ne=e.dataset.musicLibraryClose??"Close record collection",fe=e.dataset.musicCurrentTrack??"Current track",ge=[];try{let m=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(m))for(let E of m){if(!E||typeof E!="object")continue;let A=E;typeof A.title!="string"||typeof A.url!="string"||A.artist!==void 0&&typeof A.artist!="string"||ge.push({title:A.title,...typeof A.artist=="string"?{artist:A.artist}:{},url:A.url})}}catch{}let U=pn(ge);U.length===0&&U.push({title:"Ambient track",videoId:Mn});let _=0,C=null,oe=!1,X=null,B=!Ao(),O=!1,Q=!1,u=e.dataset.graphMusicVinylFx==="false"?null:new Zt(Gr),b=0,T=0,P=0,R=0,H=0,ae=m=>{let E=T?Math.min(100,m-T):16;T=m,R=Tn(R,H,E,H>0?_r:Pr),P=(P+kn(R)*E)%360;for(let A of K)A.style.transform=`rotate(${P.toFixed(2)}deg)`;if(R>0||H>0){b=window.requestAnimationFrame(ae);return}b=0,T=0},we=m=>{if(H=m,e.dataset.graphPlatter=m>0?"on":"off",_e()){R=0;return}b||(b=window.requestAnimationFrame(ae))},ie=0,ee=m=>{e.dataset.graphArm=m},se=m=>{e.style.setProperty("--graph-arm-angle",`${xn(m).toFixed(2)}deg`)},re=()=>{ie&&(window.clearInterval(ie),ie=0)},Ae=()=>{re(),se(0),ie=window.setInterval(()=>{if(!C||!O)return;let m=C.getDuration?.()??0,E=C.getCurrentTime?.()??0;m>0&&se(E/m)},Rr)},te=0,ve=new Set,ke=(m,E)=>new Promise(A=>{let Z=window.setTimeout(()=>{ve.delete(Z),A(E===te)},_e()?0:m);ve.add(Z)}),Ve=()=>{for(let m of ve)window.clearTimeout(m);ve.clear()},S=()=>U[_]??U[0]??{title:"Ambient track",videoId:Mn},ce=m=>{e.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${m}/hqdefault.jpg")`)},me=()=>S().videoId,Te=()=>{s.replaceChildren(),U.forEach((m,E)=>{let A=document.createElement("button");A.type="button",A.className="graph-landing__music-track",A.dataset.graphMusicTrackIndex=String(E),A.setAttribute("aria-current",E===_?"true":"false");let Z=document.createElement("img");Z.className="graph-landing__music-track-cover",Z.src=`https://i.ytimg.com/vi/${m.videoId}/hqdefault.jpg`,Z.alt="",Z.loading="lazy";let he=document.createElement("span");he.className="graph-landing__music-track-copy";let Ue=document.createElement("span");if(Ue.className="graph-landing__music-track-title",Ue.textContent=m.title,he.appendChild(Ue),m.artist){let Ye=document.createElement("span");Ye.className="graph-landing__music-track-artist",Ye.textContent=m.artist,he.appendChild(Ye)}let $e=document.createElement("span");$e.className="graph-landing__music-track-sleeve",$e.appendChild(Z),A.append($e,he),s.appendChild(A)}),d.textContent=`${fe}: ${S().title}`,Be()},pe=m=>{e.dataset.musicLibraryOpen=m?"true":"false",i.hidden=!m,i.setAttribute("aria-hidden",m?"false":"true"),n.setAttribute("aria-expanded",m?"true":"false"),n.setAttribute("aria-label",m?ne:D),n.title=m?ne:D},Be=()=>{let m=t.dataset.playing==="true";w&&(w.dataset.playing=m?"true":"false"),x&&(x.hidden=!m);let E=S();I&&(I.textContent=E.title),G&&(G.textContent=E.artist??"",G.hidden=!E.artist),v&&(v.textContent=E.title),Y&&(Y.textContent=E.artist??"",Y.hidden=!E.artist)},Pe=m=>{t.setAttribute("aria-pressed",m?"true":"false"),t.setAttribute("aria-label",m?L:j),t.title=m?L:j,t.dataset.playing=m?"true":"false",Be()},Ne=()=>{X&&(X(),X=null)},ye=m=>{C&&C.setVolume(Math.max(0,Math.min(Dt,m)))},lt=async(m,E)=>{ee("play"),u?.needleDrop(),await ke(An,E)&&(m.unMute(),ye(0),m.playVideo(),u?.setCrackle(!0),Ae(),Ne(),X=No({from:0,to:Dt,durationMs:Ir,apply:ye}))},xe=async m=>{let E=++te;we(Ft),ee("cue"),se(0),await ke(Cn,E)&&await lt(m,E)},Ct=async()=>{let m=++te;Ne(),re(),u?.setCrackle(!1),e.dataset.graphArm==="play"&&u?.needleLift(),ee("cue"),we(0),await ke(An,m)&&ee("rest")},Re=async(m,E)=>{let A=++te;Ne(),re(),u?.setCrackle(!1),u?.needleLift(),m.mute(),ee("cue"),we(Ft),await ke(Cn,A)&&(m.loadVideoById(E),m.mute(),await lt(m,A))},le=m=>{!B||O||(O=!0,Pe(!0),xe(m))},At=()=>{B=!1,O=!1,Yt(!0),Ct(),C&&(C.mute(),C.pauseVideo(),ye(0)),Pe(!1)},Ee=async()=>{if(!C)try{let m=await Io();if(C)return;C=_o({api:m,host:o,videoId:me(),onReady:E=>{oe=!0,E.mute(),ye(0),E.playVideo(),B&&Q&&le(E)},onEnded:E=>{if(!B)return;_=(_+1)%U.length;let A=me();if(ce(A),Te(),O){Re(E,A);return}E.loadVideoById(A),E.mute(),ye(0)}})}catch(m){console.error("[graph-landing] ambient audio unavailable",m)}},Le=m=>{let E=m.target;if(!(E instanceof Element&&E.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!B||O||Co())){if(Q=!0,oe&&C){le(C);return}Ee()}},We=()=>{if(B&&O){At();return}if(Q=!0,B=!0,Yt(!1),oe&&C){le(C);return}Ee()},ut=m=>{if(!(!Number.isInteger(m)||m<0||m>=U.length)){if(_=m,ce(me()),Te(),pe(!1),B=!0,Q=!0,Yt(!1),oe&&C){O?Re(C,me()):(C.loadVideoById(me()),C.mute(),le(C));return}Ee()}},Se=()=>{let m=e.dataset.musicLibraryOpen!=="true";if(m){e.dataset.railOpen="false";let E=e.querySelector("[data-graph-rail-toggle]"),A=e.querySelector("#graph-landing-rail"),Z=e.querySelector("[data-graph-rail-scrim]");E instanceof HTMLButtonElement&&E.setAttribute("aria-expanded","false"),A instanceof HTMLElement&&A.setAttribute("aria-hidden","true"),Z instanceof HTMLElement&&(Z.hidden=!0)}pe(m)},Ge=m=>{let E=m.target;if(!(E instanceof Element))return;let A=E.closest("[data-graph-music-track-index]");A instanceof HTMLButtonElement&&ut(Number(A.dataset.graphMusicTrackIndex))},He=m=>{if(e.dataset.musicLibraryOpen!=="true")return;let E=m.target;(!(E instanceof Element)||!E.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&pe(!1)},dt=m=>{m.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(pe(!1),m.stopImmediatePropagation())},Fe=()=>{if(C){if(document.hidden){Ne(),C.pauseVideo();return}B&&O&&(C.playVideo(),ye(Dt))}};ce(me()),ee("rest"),se(0),we(0),Pe(!1),Te(),pe(!1),Ee(),t.addEventListener("click",We),n.addEventListener("click",Se),s.addEventListener("click",Ge),e.addEventListener("click",He),e.addEventListener("pointerdown",Le,!0),e.addEventListener("touchstart",Le,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",Fe),window.addEventListener("keydown",dt),window.addCleanup(()=>{t.removeEventListener("click",We),n.removeEventListener("click",Se),s.removeEventListener("click",Ge),e.removeEventListener("click",He),e.removeEventListener("pointerdown",Le,!0),e.removeEventListener("touchstart",Le,!0),document.removeEventListener("visibilitychange",Fe),window.removeEventListener("keydown",dt),Ne(),re(),Ve(),b&&(window.cancelAnimationFrame(b),b=0),u?.close(),C&&(C.pauseVideo(),C.destroy(),C=null)})}async function Ro(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let t=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(t instanceof HTMLElement&&o instanceof HTMLElement){let S=t.parentElement,ce=t.nextSibling;o.insertBefore(t,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{S?.isConnected&&t.isConnected&&S.insertBefore(t,ce?.parentNode===S?ce:null)})}Po(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let i=e.querySelectorAll("[data-graph-counts]"),s=e.dataset.locale??e.dataset.graphDefaultLocale??"en",d=e.dataset.sourceLocale??s,w=(e.dataset.localePrefixes??"").split(",").map(S=>S.trim()).filter(S=>S.length>0),x=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",I=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",G=e.dataset.graphIndexPath??"",v=Me(e.dataset.maxRenderedNodes,S=>Number.parseInt(S,10)),Y=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,K=Number.isFinite(Y)?Y:1,L=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,j=e.dataset.graphRenderMode==="3d"?"3d":"auto",D=e.dataset.graphLayoutFreezeAfterWarmup==="true",ne=Me(e.dataset.graphLayoutWarmupTicks,S=>Number.parseInt(S,10)),fe=Me(e.dataset.graphLayoutCooldownTicks,S=>Number.parseInt(S,10)),ge=Me(e.dataset.graphLayoutChargeTheta,Number.parseFloat),U=e.dataset.graphLayoutIncrementalWarmup==="true",_=Me(e.dataset.graphLodLabelDistance,Number.parseFloat),C=Me(e.dataset.graphLodCullDistance,Number.parseFloat),oe=e.dataset.graphLodFog==="true",X=Me(e.dataset.graphLodLinkResolution,S=>Number.parseInt(S,10)),B=e.dataset.graphInteractionIncrementalRepaint==="true",O=e.dataset.graphLodShareLinkResources==="true",Q=!1,u=null,b={current:rr()},T=()=>{Q=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(T);let P=fo();if(j==="3d"&&!P){Ut(n,"3D graph unavailable: WebGL is required.");return}let R=j==="3d"||P,H=yo(R),ae=R?import(kr).then(S=>S.default??null).catch(S=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",S),null)):Promise.resolve(null),we=R?import(Tr).catch(S=>(console.error("[graph-landing] three unavailable; using default node rendering",S),null)):Promise.resolve(null),ie=R?import(vr).then(S=>S.forceCollide??null).catch(S=>(console.error("[graph-landing] d3-force-3d collision force unavailable",S),null)):Promise.resolve(null);H.catch(()=>{});let ee;try{ee=Mt(I==="graphIndex"?await fetch(G).then(S=>S.json()):await fetchData)}catch(S){throw Ut(n,"Graph could not load its index."),S}if(Q)return;let se=lo(jr(ee),{localeId:s,sourceLocale:d,prefixes:w},L),re=bn(se,v),Ae=x.replace("{n}",String(se.nodes.length)).replace("{m}",String(se.links.length));for(let S of i)S.textContent=Ae;let te;try{te=await H}catch(S){throw Ut(n,"Graph could not load. Check your network connection."),S}let[ve,ke,Ve]=await Promise.all([ae,we,ie]);Q||(n.replaceChildren(),u=te(n),u.width(n.clientWidth),u.height(n.clientHeight),n.__graphLanding=u,n.__graphData=re,Mo(u,re,b,{use3d:R,root:e,spriteText:ve,three:ke,forceCollide:Ve,fullData:se,expandHops:K,layout:{freezeAfterWarmup:D,warmupTicks:ne,cooldownTicks:fe,chargeTheta:ge,incrementalWarmup:U},lod:{labelDistance:_,cullDistance:C,fog:oe,linkResolution:X,shareLinkResources:O},interaction:{incrementalRepaint:B}}))}var Go="preferred-locale";document.addEventListener("click",e=>{let t=e.target;if(!(t instanceof Element))return;let o=t.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(Go,n)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});function Ho(){let e=document.querySelector(".graph-landing[data-profile]");if(!(e instanceof HTMLElement)||e.dataset.profileReady==="1")return;e.dataset.profileReady="1",window.addCleanup(()=>{delete e.dataset.profileReady});let t=()=>{window.scrollY>80?(e.dataset.scrolled="true",e.dataset.railOpen="false"):delete e.dataset.scrolled};t(),window.addEventListener("scroll",t,{passive:!0}),window.addCleanup(()=>window.removeEventListener("scroll",t));let o=e.querySelector("#graph-landing-mount");if(o instanceof HTMLElement){let w=x=>{let I=o.__graphLanding,G=typeof I?.controls=="function"?I.controls():void 0;if(!G)return;let v=x.ctrlKey||x.metaKey;G.noZoom=!v,G.enableZoom=v};o.addEventListener("wheel",w,{capture:!0,passive:!0}),window.addCleanup(()=>o.removeEventListener("wheel",w,{capture:!0}))}let n=e.querySelectorAll("[data-profile-reveal]"),i=e.querySelectorAll(".graph-landing__section[id]");if(typeof IntersectionObserver!="function")return;let s=new IntersectionObserver(w=>{for(let x of w)x.isIntersecting&&x.target instanceof HTMLElement&&(x.target.dataset.profileReveal="shown",s.unobserve(x.target))},{rootMargin:"0px 0px -8% 0px",threshold:.04});for(let w of n)w.dataset.profileReveal="pending",s.observe(w);let d=new IntersectionObserver(w=>{for(let x of w){if(!x.isIntersecting)continue;let I=e.querySelectorAll(".graph-landing__topbar-links a");for(let G of I)G.getAttribute("href")===`#${x.target.id}`?G.setAttribute("aria-current","true"):G.removeAttribute("aria-current")}},{rootMargin:"-30% 0px -60% 0px"});for(let w of i)d.observe(w);window.addCleanup(()=>{s.disconnect(),d.disconnect();for(let w of n)w.dataset.profileReveal=""})}document.addEventListener("nav",()=>{Ho(),Ro()});\n';

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

.page:has(.graph-landing) > #quartz-body {
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
  color: rgba(219, 226, 242, 0.72);
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
  color: rgba(219, 226, 242, 0.72);
}

@media (max-width: 700px) {
  :root:not([saved-theme=dark]) .graph-landing__hero::before {
    background-position: 60% center;
  }
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
  text-wrap: pretty;
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

/* Push the constellation right of the copy on wide screens; fade its left edge. */
@media (min-width: 861px) {
  .graph-landing[data-hero] .graph-landing__canvas {
    left: clamp(0px, 18vw, 280px);
    -webkit-mask-image: linear-gradient(to right, transparent 0, #000 clamp(240px, 34vw, 560px));
    mask-image: linear-gradient(to right, transparent 0, #000 clamp(240px, 34vw, 560px));
    width: auto;
  }
}
@media (max-width: 700px) {
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
}
:root[saved-theme=dark] .graph-landing {
  --graph-backdrop: #090b12;
  --graph-surface: color-mix(in srgb, #11141c 92%, transparent);
  --graph-surface-strong: #11141c;
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

/* Vertical swipes scroll the page; horizontal drags still rotate the graph. */
.graph-landing[data-profile] .graph-landing__canvas {
  touch-action: pan-y;
}

.graph-landing[data-profile] .graph-landing__copy,
.graph-landing[data-profile] .graph-landing__chrome,
.graph-landing[data-profile] .graph-landing__hint,
.graph-landing[data-profile] .graph-landing__rail-toggle,
.graph-landing[data-profile] .graph-landing__music-dock {
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
}

.graph-landing[data-profile][data-scrolled] .graph-landing__copy,
.graph-landing[data-profile][data-scrolled] .graph-landing__chrome,
.graph-landing[data-profile][data-scrolled] .graph-landing__hint,
.graph-landing[data-profile][data-scrolled] .graph-landing__rail-toggle,
.graph-landing[data-profile][data-scrolled] .graph-landing__music-dock,
.graph-landing[data-profile][data-scrolled] .graph-landing__music-library,
.graph-landing[data-profile][data-scrolled] .graph-landing__preview,
.graph-landing[data-profile][data-scrolled] .graph-landing__scroll-cue {
  opacity: 0;
  pointer-events: none;
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
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 6;
}

.graph-landing[data-scrolled] .graph-landing__topbar {
  opacity: 1;
  pointer-events: auto;
  transform: none;
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
  overflow-x: auto;
  scrollbar-width: none;
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
  text-wrap: pretty;
  word-break: keep-all;
}

.graph-landing__stats {
  display: grid;
  gap: 0 clamp(20px, 3vw, 40px);
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
      hint: "\uB04C\uC5B4\uC11C \uB3CC\uB9AC\uACE0, \uD655\uB300\uD574\uC11C \uB4E4\uC5EC\uB2E4\uBCF4\uACE0, \uC810\uC744 \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4",
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
    hint: "Drag to orbit, zoom to look closer, tap a dot to open",
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
  const heroLanguageScript = `(function(){var s=document.currentScript;if(!s)return;var b=(s.closest(".graph-landing")||s.parentNode).querySelectorAll("[data-hero-lang]");var a=[];for(var i=0;i<b.length;i++)a.push(b[i].getAttribute("data-hero-lang"));var p=navigator.languages||[navigator.language||""];var pick=(${pickHeroLanguage.toString()})(a,p,s.getAttribute("data-hero-fallback"));if(!pick)return;for(var k=0;k<b.length;k++)b[k].hidden=b[k].getAttribute("data-hero-lang")!==pick;})();`;
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
                /* @__PURE__ */ u2("p", { class: "graph-landing__hint", "data-graph-hint": true, hidden: true, children: copy.hint }),
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
                scrollLabel: copy.profileScroll
              }
            ),
            profile.length > 1 ? /* @__PURE__ */ u2(
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