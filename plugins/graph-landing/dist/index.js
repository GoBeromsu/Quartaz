// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var rn=/^[A-Za-z0-9_-]{6,20}$/;function yt(e){if(!e)return;let n=e.trim();return rn.test(n)?n:void 0}function I(e){return typeof e=="string"?e:e.id}function tt(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function wt(e,n){return tt(e,n)==="dot"}function kt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((g,L)=>L.degree!==g.degree?L.degree-g.degree:g.id<L.id?-1:g.id>L.id?1:0).slice(0,Math.max(0,n)),c=new Set(r.map(g=>g.id)),d=e.links.filter(g=>{let L=I(g.source),T=I(g.target);return c.has(L)&&c.has(T)});return{nodes:r,links:d}}function Lt(e,n,o,r){let c=new Set,d=Math.max(0,Math.floor(r));if(d<=0)return c;let g=new Set([o]),L=new Set([o]);for(let T=0;T<d;T+=1){let S=new Set;for(let _ of L)for(let b of e.get(_)??[])g.has(b)||(g.add(b),S.add(b),n.has(b)||c.add(b));L=S}return c}function Tt(e,n,o){let r=new Set;if(n!==null){r.add(n);for(let c of e.get(n)??[])r.add(c)}if(o!==null){r.add(o);for(let c of e.get(o)??[])r.add(c)}return r}var qe="0.179.1",on="https://esm.sh/force-graph@1.51.4",an=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${qe}`,sn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${qe}`,ln=`https://esm.sh/three@${qe}`,cn=`https://esm.sh/three@${qe}/examples/jsm/postprocessing/UnrealBloomPass.js`,un=8,dn=14;var Ee=1,nt=3.5,fn=.05,gn=2.6,mn=1,vt=1,ve=.18,Bt="graph-landing:lens",$t="graph-landing:tune",dt="graph-landing:ambient-audio",pn="UDVtMYqUAyw",Ge=12,hn=28e3,bn="https://www.youtube.com/iframe_api",yn=.18,wn=1.4,kn=1.25,Ln=1.15,Tn=.55,xe={x:330,y:235,z:565},Et={x:0,y:0,z:0},Ve=Math.hypot(xe.x,xe.y,xe.z),vn=300/Ve,En=1600/Ve,xt=1.3,xn=3.2,St=1.05,Ct=.32,Mt=.28,Sn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Cn="#a8b0c2",Mn="#2a3348",Nt={min:80,max:200},It={min:40,max:110},Pt={min:160,max:280},At={min:90,max:170},Dt=220,Rt=2,Nn=.15,In=.8,Pn=350,rt={min:-100,max:-190},ot={min:72,max:116},at={min:130,max:260};function An(e){return $e(e-.5,0,1)}function Be(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function st(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Dn(e){let n=[];for(let o of Object.values(e)){let r=Be(o),c=typeof r.slug=="string"?r.slug:"";if(c.length===0)continue;let d=r.multilingual,g=d&&typeof d=="object"?d:void 0;n.push({slug:c,title:typeof r.title=="string"?r.title:c,links:st(r.links),tags:st(r.tags),externalLinks:st(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:g})}return n}function Rn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Dt?n:`${n.slice(0,Dt).trimEnd()}\\u2026`}function Se(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function _t(e){return Se(e)/(2*Math.PI)}function He(e,n,o){let r=Se(e),c=Math.acos(2*_t(`${e}:phi`)-1),d=n+(o-n)*_t(`${e}:r`);return{x:d*Math.sin(c)*Math.cos(r),y:d*Math.sin(c)*Math.sin(r),z:d*Math.cos(c)}}function Ut(e){return e==="index"||e.endsWith("/index")}function qt(e){return e==="tags"||e.startsWith("tags/")}function _n(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Wt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function it(e,n){return e.multilingual?.locale?e.multilingual.locale:Wt(e.slug,n).locale}function Fn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Wt(e.slug,n).permalink}`}function Gn(e,n){let o=e.find(r=>it(r,n.prefixes)===n.localeId)??e.find(r=>it(r,n.prefixes)===n.sourceLocale)??e.find(r=>it(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function $e(e,n,o){return Math.min(o,Math.max(n,e))}function Ft(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function Hn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function ft(e){return Hn(e).trim().toLowerCase()}function On(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function zn(e){let n=e.trim();return n.length===0||On(n)||qt(n)||Ut(n)?!0:ft(n).length===0}function Vn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Yt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Bn(e,n){let o=Yt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function Gt(e){return`external:${e}`}function $n(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),c=o.pathname;return(n.get(r)??0)>1&&c.length>1?`${r}${c}`:r}function Un(e){let n=new Map,o=new Map;for(let r of e){let c=ft(r.slug);c.length>0&&!n.has(c)&&n.set(c,r.slug);let d=r.title.trim().toLowerCase();d.length>0&&!o.has(d)&&o.set(d,r.slug);let g=d.replace(/\\s+/g,"-");g.length>0&&!o.has(g)&&o.set(g,r.slug)}return{byBasename:n,byTitle:o}}function qn(e,n,o){if(n.has(e))return e;let r=ft(e),c=o.byBasename.get(r);if(c)return c;let d=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return d||null}function Wn(e,n){return e.length===0?"":[...e].sort((r,c)=>(n.get(c)??0)-(n.get(r)??0))[0]??""}function Yn(e,n,o=void 0){let r=e.filter(f=>!Ut(f.slug)&&!qt(f.slug)&&!_n(f)),c=new Map;for(let f of r){let m=Fn(f,n.prefixes),w=c.get(m)??[];w.push(f),c.set(m,w)}let d=[];for(let f of c.values())d.push(Gn(f,n));let g=new Set(d.map(f=>f.slug)),L=Un(d),T=new Map,S=[],_=new Set,b=new Map,V=f=>{T.set(f,(T.get(f)??0)+1)},D=(f,m,w)=>f<m?`${f}|${m}|${w}`:`${m}|${f}|${w}`,v=(f,m,w,x)=>{let A=D(f,m,w);return _.has(A)?!1:(_.add(A),S.push({source:f,target:m,kind:w}),x&&(V(f),V(m)),!0)};for(let f of d)for(let m of f.links){if(zn(m))continue;let w=qn(m,g,L);w!==null&&w!==f.slug&&v(f.slug,w,"wikilink",!0)}let P=Vn(),G=new Set;for(let f of d)for(let m of f.externalLinks){let w=Yt(m);w===null||!Bn(w,P)||(G.add(w),v(f.slug,Gt(w),"external",!0))}let z=new Map;for(let f of G){let m=new URL(f).hostname.replace(/^www\\./,"");z.set(m,(z.get(m)??0)+1)}let O=new Set,$=new Map;for(let f of d)for(let m of f.tags){b.set(m,(b.get(m)??0)+1);let w=`tag:${m}`;O.add(w),v(f.slug,w,"tag",!0);let x=$.get(m)??[];x.push(f.slug),$.set(m,x)}if(o!==!1){let f=o?.maxTagsPerNote,m=o?.maxEdges,w=0;e:for(let x of d)if(!(x.tags.length<2)&&!(f!==void 0&&x.tags.length>f))for(let A=0;A<x.tags.length;A+=1)for(let N=A+1;N<x.tags.length;N+=1){if(m!==void 0&&w>=m)break e;v(`tag:${x.tags[A]}`,`tag:${x.tags[N]}`,"cooc",!1)&&(w+=1)}}let E=new Map;for(let f of d){let m=Ft(f.slug);if(m==="root")continue;let w=E.get(m)??[];w.push(f.slug),E.set(m,w)}for(let f of E.values()){if(f.length<2)continue;let m=[...f].sort();for(let w=0;w<m.length;w+=1){let x=m[(w+1)%m.length],A=m[(w+Rt)%m.length],N=m[w];N===void 0||x===void 0||(N!==x&&!_.has(D(N,x,"wikilink"))&&v(N,x,"folder",!1),m.length>Rt+1&&A!==void 0&&N!==A&&!_.has(D(N,A,"wikilink"))&&v(N,A,"folder",!1))}}let F=[...T.values()],U=F.length>0?Math.min(...F):0,se=F.length>0?Math.max(...F):0,B=f=>{let m=T.get(f)??0,w=Math.sqrt(m),x=Math.sqrt(U),N=Math.sqrt(se)-x;return N===0?(Ee+nt)/2:Ee+(w-x)/N*(nt-Ee)},re=[...d].sort((f,m)=>(T.get(m.slug)??0)-(T.get(f.slug)??0)),ee=new Set(re.filter(f=>(T.get(f.slug)??0)>0).slice(0,un).map(f=>f.slug)),Z=d.map(f=>{let m=ee.has(f.slug),w=m?He(f.slug,It.min,It.max):He(f.slug,Nt.min,Nt.max);return{id:f.slug,name:f.title,type:"note",val:B(f.slug),degree:T.get(f.slug)??0,isHub:m,tag:"",slug:f.slug,url:"",folder:Ft(f.slug),tags:f.tags,dominantTag:Wn(f.tags,b),excerpt:Rn(f.content),phase:Se(f.slug),x:w.x,y:w.y,z:w.z}});for(let f of G){let m=Gt(f),w=He(m,Pt.min,Pt.max);Z.push({id:m,name:$n(f,z),type:"external",val:B(m)*Tn,degree:T.get(m)??0,isHub:!1,tag:"",slug:"",url:f,folder:"",tags:[],dominantTag:"",excerpt:f,phase:Se(m),x:w.x,y:w.y,z:w.z})}for(let f of O){let m=f.slice(4),w=He(f,At.min,At.max);Z.push({id:f,name:m,type:"tag",val:$e(B(f)*.7,Ee,nt),degree:T.get(f)??0,isHub:!1,tag:m,slug:`tags/${m}`,url:"",folder:"tag",tags:[m],dominantTag:m,excerpt:"",phase:Se(f),x:w.x,y:w.y,z:w.z})}return{nodes:Z,links:S}}function lt(e){let n=new Map,o=(r,c)=>{let d=n.get(r)??new Set;d.add(c),n.set(r,d)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let c=I(r.source),d=I(r.target);o(c,d),o(d,c)}return n}function me(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Kt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:me("--light","#ffffff"),ink:me("--darkgray","#0f0f0f"),accent:me("--secondary","#a52142"),tertiary:me("--tertiary","#c75b75"),gray:me("--gray","#737373"),external:me("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function ze(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Kn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function jn(){return Kn()&&!ze()}function X(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ue(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function pe(e,n){let o=Ue(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Q(e,n,o){let r=Ue(e),c=Ue(n);if(!r||!c)return e;let d=(g,L)=>Math.round(g+(L-g)*o);return`rgb(${d(r.r,c.r)}, ${d(r.g,c.g)}, ${d(r.b,c.b)})`}function jt(e){return X()?Q(e.bg,"#05070f",.88):e.bg}function Xn(e){let n=Ue(e);if(!n)return e;let o=r=>{let c=r/255,d=c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4);return Math.round(d*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Zn(e){return Xn(jt(e))}function Xt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function Ht(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Xt(e,[n.accent,n.tertiary,n.ink,n.gray])}function Jn(e,n){return e.length===0?n.ink:Xt(e,[n.accent,n.tertiary])}function Zt(e){let n=e.split("/").map(d=>encodeURIComponent(d)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let c=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(c,window.location.origin)}function Qn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Zt(e);window.location.assign(n.toString())}function er(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function tr(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function ct(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function nr(e){let o=await import(e?an:on);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):tr(o)}function rr(){try{let e=sessionStorage.getItem(Bt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function or(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem($t);if(!n)return e;let o=Be(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,c=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,d=typeof o.zoom=="number"?o.zoom:e.zoom,g=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:c,zoom:d,spread:g}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Oe(e){try{sessionStorage.setItem($t,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function ut(e){try{sessionStorage.setItem(Bt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function ar(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function sr(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function ir(e,n){return e.type==="note"&&e.folder===n}function Ot(e,n){let o=I(n),r=e.find(c=>c.id===o);return!r||r.type!=="note"?null:r.folder}function lr(e,n,o){let r=new Map;if(n==="folder"){let c=[...new Set(e.nodes.filter(d=>d.type==="note").map(d=>d.folder))];return c.forEach((d,g)=>{let L=Math.PI*2*g/Math.max(c.length,1),T={x:Math.cos(L)*o,y:Math.sin(L)*o,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===d&&r.set(S.id,T)}),r}if(n==="tag"){let c=e.nodes.filter(g=>g.type==="tag"),d=new Map;c.forEach((g,L)=>{let T=Math.PI*2*L/Math.max(c.length,1);d.set(g.tag,{x:Math.cos(T)*o,y:Math.sin(T)*o,z:0})});for(let g of e.nodes)if(g.type==="tag"){let L=d.get(g.tag);L&&r.set(g.id,L)}else if(g.dominantTag.length>0){let L=d.get(g.dominantTag);L&&r.set(g.id,L)}}return r}function cr(e,n){let o=[],r=c=>{let d=n*c;for(let g of o){let L=e(g);L&&(g.vx=(g.vx??0)+(L.x-(g.x??0))*d,g.vy=(g.vy??0)+(L.y-(g.y??0))*d,g.vz=(g.vz??0)+(L.z-(g.z??0))*d)}};return r.initialize=c=>{o=c},r}function zt(e,n,o,r){for(let c of e.querySelectorAll(n)){if(!(c instanceof HTMLElement))continue;let d=c.getAttribute(r);c.setAttribute("aria-pressed",d===o?"true":"false")}}function ur(e,n,o,r){let c=lt(n.links),d=(t,a,s)=>t<a?`${t}|${a}|${s}`:`${a}|${t}|${s}`,g=new Map,L=new Map,T=new Set,S=new Set;r.fullData!==n&&(g=new Map(r.fullData.nodes.map(t=>[t.id,t])),L=lt(r.fullData.links),T=new Set(n.nodes.map(t=>t.id)),S=new Set(n.links.map(t=>d(I(t.source),I(t.target),t.kind))));let _=t=>{if(r.fullData===n)return!1;let a=Lt(L,T,t,r.expandHops);if(a.size===0)return!1;for(let s of a){let l=g.get(s);l&&(n.nodes.push(l),T.add(s))}for(let s of r.fullData.links){let l=I(s.source),u=I(s.target);if(!T.has(l)||!T.has(u))continue;let i=d(l,u,s.kind);S.has(i)||(S.add(i),n.links.push(s))}return c=lt(n.links),!0},b={lens:rr(),allLabels:!1,focusTag:null,focusFolder:null},V=null,D=null,v=or(),P=()=>D??V,G=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,dn).map(t=>t.id)),z=t=>{let a=t.val;return t.isHub&&(a*=wn),b.lens==="tag"&&t.type==="tag"&&(a*=kn),b.focusTag&&t.id===`tag:${b.focusTag}`&&(a*=Ln),a},O=t=>{let a=P();return b.allLabels||a===t.id||a!==null&&(c.get(a)?.has(t.id)??!1)?!0:G.has(t.id)},$=t=>{let a=$e((z(t)-Ee)/5,0,1);return(xt+a*(xn-xt))*v.nodeScale},E=t=>{let a=P();if(a!==null)return a===t||(c.get(a)?.has(t)??!1);if(b.focusTag===null&&b.focusFolder===null)return!0;let s=n.nodes.find(l=>l.id===t);return s?b.focusFolder!==null?ir(s,b.focusFolder):b.focusTag!==null&&sr(s,b.focusTag):!1},F=t=>t.type==="external"?o.current.external:b.lens==="tag"?t.type==="tag"?o.current.tertiary:Jn(t.dominantTag,o.current):b.lens==="folder"?t.type==="tag"?o.current.tertiary:Ht(t.folder,o.current):b.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,U=t=>{let a=P();if(a!==null&&(a===t.id||(c.get(a)?.has(t.id)??!1)))return o.current.accent;let s=F(t);return E(t.id)?X()?t.type==="external"?Q(o.current.external,"#ffffff",.18):t.type==="tag"?Q(o.current.tertiary,"#ffffff",.22):t.isHub?Q("#fff3e4",o.current.accent,.1):Q("#ffffff",o.current.accent,.12):t.type==="external"?Q(o.current.external,"#08343a",.12):t.type==="tag"?Q(o.current.tertiary,o.current.accent,.55):t.isHub?Q(o.current.ink,o.current.accent,.22):s:pe(s,ve)},se=t=>{let a=X();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},B=t=>{let a=I(t.source),s=I(t.target),l=P();return l!==null&&(a===l||s===l)?X()?.72:.78:(l!==null||b.focusTag!==null||b.focusFolder!==null)&&(!E(a)||!E(s))?se(t.kind)*ve:se(t.kind)},re=t=>{let a=I(t.source),s=I(t.target),l=P(),u=X()?Cn:Mn;return l!==null&&(a===l||s===l)?Q(o.current.accent,u,.45):u},ee=t=>pe(re(t),B(t)),Z=()=>n,f=t=>{let a=X()?"rgba(255, 255, 255, 0.85)":pe(o.current.ink,.88);return E(t.id)?a:pe(a,ve)},m=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:xe,len:Ve}},w=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Ve/$e(v.zoom,.4,2.5),{dir:s,len:l}=m(),u=a/l;e.cameraPosition({x:s.x*u,y:s.y*u,z:s.z*u},Et,t),Xe();return}typeof e.zoom=="function"&&e.zoom(v.zoom,t)},x=()=>{let t=An(v.spread),a=rt.min+t*(rt.max-rt.min),s=ot.min+t*(ot.max-ot.min),l=e.d3Force("charge");l?.strength&&l.strength(a),l?.theta&&r.layout.chargeTheta!==void 0&&l.theta(r.layout.chargeTheta);let u=e.d3Force("link");u?.distance&&u.distance(k=>b.lens==="tag"&&k.kind==="tag"?s*.72:s),u?.strength&&u.strength(k=>{if(k.kind==="cooc"||k.kind==="folder")return .04;if(b.lens==="tag"&&k.kind==="tag")return .95;if(b.lens==="folder"){let C=Ot(n.nodes,k.source),Y=Ot(n.nodes,k.target);if(C!==null&&C===Y)return .72}return k.kind==="tag"?.65:.8});let i=e.d3Force("center");i?.strength&&i.strength(fn);let y=at.min+t*(at.max-at.min),h=lr(n,b.lens,y),p=b.lens==="folder"||b.lens==="tag"?.08:0;e.d3Force("cluster",cr(k=>h.get(k.id)??null,p)),r.use3d&&e.d3Force("flattenZ",null)},A=new Map,N=new Map,J=new Map,q=new Map,he=new Map,ie=new Map,le=new Map,oe=(t,a,s)=>{let l=`${Math.round(a*4)}|${s}`,u=le.get(l);if(u)return u;let i={geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:s})};return le.set(l,i),i},W=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,s=r.lod.dotDistance,l=r.lod.nodeResolution??14,u=r.interaction.incrementalRepaint;if(A.clear(),N.clear(),le.clear(),q.clear(),he.clear(),u)for(let i of n.nodes)he.set(i.id,i);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(i=>{let y=$(i),h=U(i),p=!1;if(a){if(X()){let R=i.isHub?1.35:1.1,j=new a.MeshLambertMaterial({color:h,emissive:h,emissiveIntensity:R});A.set(i.id,{material:j,base:R,phase:i.phase}),u&&q.set(i.id,j),p=new a.Mesh(new a.SphereGeometry(y,l,l),j)}else{let R=new a.MeshBasicMaterial({color:h});u&&q.set(i.id,R),p=new a.Mesh(new a.SphereGeometry(y,l,l),R)}if(s!==void 0&&p!==!1){let R=oe(a,y,h),j=new a.Mesh(R.geometry,R.material),Te=new a.LOD;Te.addLevel(p,0),Te.addLevel(j,s),p=Te}}let k=O(i);if(!t||!u&&!k)return p;let C=new t(i.name);if(C.color=f(i),C.fontWeight="400",C.strokeWidth=0,C.textHeight=G.has(i.id)?6.5:5.5,C.center.set(0,.5),C.position.x=y+2,C.position.y=0,u?(C.visible=k,N.set(i.id,{sprite:C,node:i})):r.lod.labelDistance!==void 0&&N.set(i.id,{sprite:C,node:i}),!a||p===!1)return C;let Y=new a.Group;return Y.add(p),Y.add(C),Y})},We=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),s=r.lod.linkResolution??5,l=r.lod.cullDistance,u=r.interaction.incrementalRepaint;if(J.clear(),ie.clear(),u)for(let i of n.links){let y=I(i.source),h=I(i.target);for(let p of[y,h]){let k=ie.get(p);k?k.push(i):ie.set(p,[i])}}e.linkThreeObject(i=>{let y=Sn[i.kind]*v.edgeScale,h=new t.MeshBasicMaterial({color:re(i),transparent:!0,opacity:B(i),depthWrite:!1}),p=new t.Mesh(new t.CylinderGeometry(y,y,1,s),h);return(l!==void 0||u)&&J.set(i,p),p}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((i,y)=>{let h=y.end.x-y.start.x,p=y.end.y-y.start.y,k=y.end.z-y.start.z,C=Math.sqrt(h*h+p*p+k*k);return i.position.x=(y.start.x+y.end.x)/2,i.position.y=(y.start.y+y.end.y)/2,i.position.z=(y.start.z+y.end.z)/2,i.scale.x=1,i.scale.y=Math.max(C,.01),i.scale.z=1,i.quaternion.setFromUnitVectors(a,new t.Vector3(h,p,k).normalize()),!0})},ce=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=P();if(a===null)return 0;let s=I(t.source),l=I(t.target);return s===a||l===a?2:0})},K=()=>{e.nodeVal(z),e.nodeColor(U),e.linkColor(ee),e.linkWidth(t=>{let a=I(t.source),s=I(t.target),l=P(),u=v.edgeScale;return l!==null&&(a===l||s===l)?.7*u:t.kind==="wikilink"||t.kind==="external"?.5*u:(t.kind==="tag"?.35:.25)*u}),typeof e.linkOpacity=="function"&&e.linkOpacity(vt),ce(),We(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},ue=(t,a)=>{let s=Tt(c,t,a);for(let l of s){let u=he.get(l);if(!u)continue;let i=U(u);q.get(l)?.color.set(i);let y=A.get(l);y&&y.material.emissive.set(i);let h=N.get(l);h&&(h.sprite.color=f(u),h.sprite.visible=O(u));for(let p of ie.get(l)??[]){let k=J.get(p);k&&(k.material.color.set(re(p)),k.material.opacity=B(p))}}},de=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(i,y)=>{let h=document.createElement("span");h.className="graph-landing__legend-item";let p=document.createElement("span");p.className="graph-landing__dot",p.setAttribute("aria-hidden","true"),p.style.background=i;let k=document.createElement("span");return k.textContent=y,h.append(p,k),h},s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",u=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,l),a(o.current.external,u))},ae=t=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[t.dataset.key]=t.dataset.value,s.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let i=document.createElement("span");i.className="graph-landing__dot",i.style.background=t.dotColor,l.append(i)}l.append(document.createTextNode(t.label));let u=document.createElement("span");return u.className="graph-landing__tag-count",u.textContent=String(t.count),s.append(l,u),a.append(s),a},Ce=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),s=r.root.querySelector(".graph-landing__tags");if(b.lens==="folder"){let u=r.root.dataset.folderRootLabel??"root",i=new Map;for(let h of n.nodes)h.type==="note"&&i.set(h.folder,(i.get(h.folder)??0)+1);let y=[...i.entries()].sort((h,p)=>p[1]-h[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=y.length===0),t.replaceChildren(...y.map(([h,p])=>ae({dataset:{key:"graphFolder",value:h},pressed:b.focusFolder===h,dotColor:Ht(h,o.current),label:h==="root"?u:h,count:p})));return}let l=n.nodes.filter(u=>u.type==="tag").sort((u,i)=>i.degree-u.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=l.length===0),t.replaceChildren(...l.map(u=>ae({dataset:{key:"graphTag",value:u.tag},pressed:b.focusTag===u.tag,dotColor:null,label:u.tag,count:u.degree})))},te=()=>{e.graphData(Z()),x(),K(),W(),de(),Ce(),zt(r.root,"[data-graph-lens]",b.lens,"data-graph-lens"),e.d3ReheatSimulation()},Ye=t=>{b.lens=t,t!=="tag"&&(b.focusTag=null),t!=="folder"&&(b.focusFolder=null),ut(t),te()},Ke=t=>{b.focusTag=b.focusTag===t?null:t,b.focusFolder=null,b.focusTag&&(b.lens="tag",ut("tag")),te()},je=t=>{b.focusFolder=b.focusFolder===t?null:t,b.focusTag=null,b.focusFolder&&(b.lens="folder",ut("folder")),te()},M=()=>r.use3d?Zn(o.current):jt(o.current),Xe=()=>{if(!r.use3d||!r.lod.fog||!r.three||typeof e.scene!="function")return;let t=m().len;e.scene().fog=new r.three.Fog(M(),t*vn,t*En)};e.graphData(Z()),e.backgroundColor(M()),e.nodeLabel(t=>t.name),e.nodeRelSize(gn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(mn),typeof e.linkOpacity=="function"&&e.linkOpacity(vt),x(),K();let fe=r.root.querySelector("[data-graph-preview]"),Me=r.root.querySelector("[data-graph-preview-chip]"),Ne=r.root.querySelector("[data-graph-preview-title]"),Ie=r.root.querySelector("[data-graph-preview-excerpt]"),Pe=0;window.addCleanup(()=>window.clearTimeout(Pe));let Jt=t=>{if(!(fe instanceof HTMLElement)||!(Me instanceof HTMLElement)||!(Ne instanceof HTMLElement)||!(Ie instanceof HTMLElement))return;window.clearTimeout(Pe);let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let u=r.root.dataset.previewTagTemplate??"{n} notes";Me.textContent=s,Ne.textContent=`#${t.tag}`,Ie.textContent=u.replace("{n}",String(t.degree))}else t.type==="external"?(Me.textContent=l,Ne.textContent=t.name,Ie.textContent=t.url):(Me.textContent=a,Ne.textContent=t.name,Ie.textContent=t.excerpt);fe.hidden=!1,fe.dataset.visible="true"},gt=()=>{fe instanceof HTMLElement&&(window.clearTimeout(Pe),Pe=window.setTimeout(()=>{fe.dataset.visible="false",fe.hidden=!0},Pn))};if(e.onNodeHover(t=>{let a=P();if(V=t?t.id:null,D===null&&(t?Jt(t):gt()),r.interaction.incrementalRepaint&&r.use3d){ce(),ue(a,P());return}K(),r.use3d&&W()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!ze()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=yn;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=X()?St:0,r.bloomPass.radius=Ct,r.bloomPass.threshold=Mt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(xe,Et),v.zoom!==1&&w(0)),W(),Xe(),!ze()){let t=0,a=()=>{let s=performance.now()/1e3*In;for(let l of A.values())l.material.emissiveIntensity=l.base*(1+Nn*Math.sin(s+l.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}if(r.lod.labelDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.labelDistance,a=e.cameraPosition.bind(e),s=0,l=()=>{let u=a();if(u&&typeof u.x=="number"&&typeof u.y=="number"&&typeof u.z=="number")for(let i of N.values()){let y=i.node.x??0,h=i.node.y??0,p=i.node.z??0,k=Math.hypot(u.x-y,u.y-h,u.z-p);i.sprite.visible=tt(k,t)==="full"}s=window.requestAnimationFrame(l)};s=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(s))}if(r.lod.cullDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.cullDistance,a=e.cameraPosition.bind(e),s=0,l=()=>{let u=a();if(u&&typeof u.x=="number"&&typeof u.y=="number"&&typeof u.z=="number"){let i=P();for(let[y,h]of J){let p=I(y.source),k=I(y.target);if(i!==null&&(p===i||k===i)){h.visible=!0;continue}let C=Math.hypot(u.x-h.position.x,u.y-h.position.y,u.z-h.position.z);h.visible=!wt(C,t)}}s=window.requestAnimationFrame(l)};s=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(s))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,s)=>{let l=$(t),u=t.x??0,i=t.y??0;if(a.save(),a.beginPath(),a.arc(u,i,l,0,Math.PI*2),a.fillStyle=U(t),a.fill(),t.isHub&&(a.strokeStyle=E(t.id)?o.current.accent:pe(o.current.accent,ve),a.lineWidth=1.2/s,a.stroke()),O(t)){let y=11.5/s;a.font=`${y}px ${o.current.font}`,a.fillStyle=E(t.id)?o.current.ink:pe(o.current.ink,ve),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,u,i-l-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,s)=>{let l=$(t)+8;s.beginPath(),s.arc(t.x??0,t.y??0,l,0,Math.PI*2),s.fillStyle=a,s.fill()});let Ae=r.root.querySelector("[data-graph-inspect]"),De=r.root.querySelector("[data-graph-inspect-chip]"),Re=r.root.querySelector("[data-graph-inspect-title]"),_e=r.root.querySelector("[data-graph-inspect-excerpt]"),Ze=r.root.querySelector("[data-graph-inspect-tags]"),Je=r.root.querySelector("[data-graph-inspect-connected]"),H=r.root.querySelector("[data-graph-inspect-open]"),ge=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),s=r.root.querySelector("[data-graph-rail-scrim]"),l=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",t?"false":"true"),s instanceof HTMLElement&&(s.hidden=!t)},Fe=t=>{ze()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Qt=t=>{let a=c.get(t.id)??new Set,s=[];for(let l of a){let u=n.nodes.find(i=>i.id===l);u&&s.push(u)}return s.sort((l,u)=>u.degree-l.degree)},en=t=>{if(!(Ae instanceof HTMLElement)||!(De instanceof HTMLElement)||!(Re instanceof HTMLElement)||!(_e instanceof HTMLElement)||!(Ze instanceof HTMLElement)||!(Je instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendLinks??"Links",u=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(De.textContent=s,Re.textContent=`#${t.tag}`,_e.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(De.textContent=l,Re.textContent=t.name,_e.textContent=t.url):(De.textContent=a,Re.textContent=t.name,_e.textContent=t.excerpt);let i=t.tags.map(h=>{let p=document.createElement("li");return p.textContent=h,p});Ze.replaceChildren(...i),Ze.hidden=i.length===0;let y=Qt(t).slice(0,12);if(y.length===0){let h=document.createElement("li");h.className="graph-landing__inspect-empty",h.textContent=u,Je.replaceChildren(h)}else Je.replaceChildren(...y.map(h=>{let p=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=h.id;let C=h.type==="tag"?s:h.type==="external"?l:a,Y=document.createElement("span");Y.textContent=C;let R=document.createElement("strong");return R.textContent=h.type==="tag"?`#${h.tag}`:h.name,k.append(Y,R),p.append(k),p}));H instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(H.hidden=!1,H.href=Zt(t.slug).toString(),H.textContent=r.root.dataset.inspectRead??"Read note",H.removeAttribute("target"),H.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(H.hidden=!1,H.href=t.url,H.textContent=r.root.dataset.inspectOpenExternal??"Open",H.target="_blank",H.rel="noopener noreferrer"):(H.hidden=!0,H.removeAttribute("href"),H.removeAttribute("target"),H.removeAttribute("rel"))),Ae.hidden=!1,r.root.dataset.inspecting="true",ge(!1),gt()},be=()=>{let t=P();if(D=null,Ae instanceof HTMLElement&&(Ae.hidden=!0),r.root.dataset.inspecting="false",Fe(!0),r.interaction.incrementalRepaint&&r.use3d){ce(),ue(t,P());return}K(),r.use3d&&W()},tn=t=>{if(D===t.id&&t.type==="note"&&t.slug.length>0){Qn(t.slug);return}if(D===t.id&&t.type==="external"&&t.url.length>0){er(t.url);return}let a=P();if(D=t.id,en(t),r.interaction.incrementalRepaint&&r.use3d){ce(),ue(a,P());return}K(),r.use3d&&W()},Qe=t=>{_(t.id)&&te(),tn(t)},et=!1;e.onNodeClick((t,a)=>{t&&(et=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Qe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{be(),ge(!1)});let ne=r.root.querySelector("#graph-landing-mount");if(ne instanceof HTMLElement){let t=null,a=i=>{t={x:i.clientX,y:i.clientY},Fe(!1)},s=(i,y)=>{if(typeof e.graph2ScreenCoords!="function")return null;let h=ne.getBoundingClientRect(),p=i-h.left,k=y-h.top,C=null,Y=4096;for(let R of Z().nodes){if(R.x===void 0||R.y===void 0)continue;let j=e.graph2ScreenCoords(R.x,R.y,R.z??0),Te=(j.x-p)**2+(j.y-k)**2,nn=(j.x-i)**2+(j.y-y)**2,bt=Math.min(Te,nn);bt<Y&&(Y=bt,C=R)}return C},l=i=>{let y=t;t=null,Fe(!0),!(!y||(i.clientX-y.x)**2+(i.clientY-y.y)**2>25)&&window.setTimeout(()=>{if(et){et=!1;return}let p=s(i.clientX,i.clientY);p?Qe(p):be()},0)},u=()=>{t=null,Fe(!0)};ne.addEventListener("pointerdown",a,!0),ne.addEventListener("pointerup",l,!0),ne.addEventListener("pointercancel",u,!0),window.addCleanup(()=>{ne.removeEventListener("pointerdown",a,!0),ne.removeEventListener("pointerup",l,!0),ne.removeEventListener("pointercancel",u,!0)})}zt(r.root,"[data-graph-lens]",b.lens,"data-graph-lens"),de(),Ce(),b.lens!=="all"&&te(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let mt=()=>{o.current=Kt(),e.backgroundColor(M()),Xe(),r.bloomPass&&(r.bloomPass.strength=X()?St:0,r.bloomPass.radius=Ct,r.bloomPass.threshold=Mt),K(),W(),de()};document.addEventListener("themechange",mt),window.addCleanup(()=>document.removeEventListener("themechange",mt));let pt=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){be();return}if(a.closest("[data-graph-rail-toggle]")){let p=r.root.dataset.railOpen!=="true";p&&be(),ge(p);return}if(a.closest("[data-graph-rail-scrim]")){ge(!1);return}let s=a.closest("[data-graph-inspect-id]");if(s instanceof HTMLElement&&s.dataset.graphInspectId){let p=r.fullData.nodes.find(k=>k.id===s.dataset.graphInspectId);p&&Qe(p);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&ar(l.dataset.graphLens)){Ye(l.dataset.graphLens);return}let u=a.closest("[data-graph-tag]");if(u instanceof HTMLElement&&u.dataset.graphTag){Ke(u.dataset.graphTag);return}let i=a.closest("[data-graph-folder]");if(i instanceof HTMLElement&&i.dataset.graphFolder){je(i.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let y=a.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){b.allLabels=!b.allLabels,y.setAttribute("aria-pressed",b.allLabels?"true":"false");let p=y.dataset.labelShow??"Labels",k=y.dataset.labelHide??"Labels",C=b.allLabels?k:p;y.title=C,y.setAttribute("aria-label",C),W();return}if(a.closest("[data-graph-theme]")){let p=X()?"light":"dark";document.documentElement.setAttribute("saved-theme",p),localStorage.setItem("theme",p),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${p}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:p}}));return}let h=a.closest("[data-graph-tags-toggle]");if(h instanceof HTMLButtonElement){let p=r.root.querySelector(".graph-landing__tags");if(p instanceof HTMLElement){let k=p.dataset.open==="true";p.dataset.open=k?"false":"true",h.setAttribute("aria-expanded",k?"false":"true")}}},ye=r.root.querySelector("[data-graph-node-scale]"),we=r.root.querySelector("[data-graph-edge-scale]");if(ye instanceof HTMLInputElement){ye.value=String(Math.round(v.nodeScale*100));let t=()=>{v.nodeScale=Number(ye.value)/100,Oe(v),K(),r.use3d&&W()};ye.addEventListener("input",t),window.addCleanup(()=>ye.removeEventListener("input",t))}if(we instanceof HTMLInputElement){we.value=String(Math.round(v.edgeScale*100));let t=()=>{v.edgeScale=Number(we.value)/100,Oe(v),K()};we.addEventListener("input",t),window.addCleanup(()=>we.removeEventListener("input",t))}let ke=r.root.querySelector("[data-graph-zoom]");if(ke instanceof HTMLInputElement){ke.value=String(Math.round(v.zoom*100));let t=()=>{v.zoom=Number(ke.value)/100,Oe(v),w(200)};ke.addEventListener("input",t),window.addCleanup(()=>ke.removeEventListener("input",t))}let Le=r.root.querySelector("[data-graph-spread]");if(Le instanceof HTMLInputElement){Le.value=String(Math.round(v.spread*100));let t=()=>{v.spread=Number(Le.value)/100,Oe(v),x(),e.d3ReheatSimulation()};Le.addEventListener("input",t),window.addCleanup(()=>Le.removeEventListener("input",t))}ge(!1),r.root.addEventListener("click",pt),window.addCleanup(()=>r.root.removeEventListener("click",pt));let ht=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){ge(!1);return}be()}};window.addEventListener("keydown",ht),window.addCleanup(()=>window.removeEventListener("keydown",ht))}function dr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function fr(){try{return window.localStorage.getItem(dt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Vt(e){try{if(e){window.localStorage.setItem(dt,"stopped");return}window.localStorage.removeItem(dt)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function gr(e){let n=performance.now(),o=0,r=c=>{let d=Math.min(1,(c-n)/e.durationMs),g=d*d;e.apply(e.from+(e.to-e.from)*g),d<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function mr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,c=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof c=="function"&&c();let d=r.YT;if(!d||typeof d.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(d)},!document.querySelector("script[data-graph-youtube-api]")){let d=document.createElement("script");d.src=bn,d.async=!0,d.dataset.graphYoutubeApi="1",d.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(d)}})}function pr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:e.videoId,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function hr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",c=e.dataset.audioPlay??"Play music",d=yt(e.dataset.graphAmbientVideoId)??pn,g=null,L=!1,T=null,S=!fr(),_=!1,b=E=>{n.setAttribute("aria-pressed",E?"true":"false"),n.setAttribute("aria-label",E?r:c),n.title=E?r:c,n.dataset.playing=E?"true":"false"},V=()=>{T&&(T(),T=null)},D=E=>{g&&g.setVolume(Math.max(0,Math.min(Ge,E)))},v=E=>{!S||_||(_=!0,b(!0),E.unMute(),D(0),E.playVideo(),V(),T=gr({from:0,to:Ge,durationMs:hn,apply:D}))},P=()=>{S=!1,_=!1,V(),Vt(!0),g&&(g.mute(),g.pauseVideo(),D(0)),b(!1)},G=async()=>{if(!g)try{let E=await mr();if(g)return;g=pr({api:E,host:o,videoId:d,onReady:F=>{L=!0,F.mute(),D(0),F.playVideo()},onEnded:F=>{S&&(F.playVideo(),D(Ge))}})}catch(E){console.error("[graph-landing] ambient audio unavailable",E)}},z=E=>{let F=E.target;if(!(F instanceof Element&&F.closest("[data-graph-audio-toggle]"))&&!(!S||_||dr())){if(L&&g){v(g);return}G()}},O=()=>{if(S&&_){P();return}if(S=!0,Vt(!1),L&&g){v(g);return}G()},$=()=>{if(g){if(document.hidden){V(),g.pauseVideo();return}S&&_&&(g.playVideo(),D(Ge))}};b(S),G(),n.addEventListener("click",O),e.addEventListener("pointerdown",z,!0),e.addEventListener("touchstart",z,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",$),window.addCleanup(()=>{n.removeEventListener("click",O),e.removeEventListener("pointerdown",z,!0),e.removeEventListener("touchstart",z,!0),document.removeEventListener("visibilitychange",$),V(),g&&(g.pauseVideo(),g.destroy(),g=null)})}async function br(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",hr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",c=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",d=(e.dataset.localePrefixes??"").split(",").map(M=>M.trim()).filter(M=>M.length>0),g=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",L=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",T=e.dataset.graphIndexPath??"",S=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,_=S!==void 0&&Number.isFinite(S)&&S>=0?S:void 0,b=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,V=Number.isFinite(b)?b:1,D=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,v=e.dataset.graphRenderMode==="3d"?"3d":"auto",P=e.dataset.graphLayoutFreezeAfterWarmup==="true",G=e.dataset.graphLayoutWarmupTicks?Number.parseInt(e.dataset.graphLayoutWarmupTicks,10):void 0,z=G!==void 0&&Number.isFinite(G)&&G>=0?G:void 0,O=e.dataset.graphLayoutCooldownTicks?Number.parseInt(e.dataset.graphLayoutCooldownTicks,10):void 0,$=O!==void 0&&Number.isFinite(O)&&O>=0?O:void 0,E=e.dataset.graphLayoutChargeTheta?Number.parseFloat(e.dataset.graphLayoutChargeTheta):void 0,F=E!==void 0&&Number.isFinite(E)&&E>=0?E:void 0,U=e.dataset.graphLodLabelDistance?Number.parseFloat(e.dataset.graphLodLabelDistance):void 0,se=U!==void 0&&Number.isFinite(U)&&U>=0?U:void 0,B=e.dataset.graphLodDotDistance?Number.parseFloat(e.dataset.graphLodDotDistance):void 0,re=B!==void 0&&Number.isFinite(B)&&B>=0?B:void 0,ee=e.dataset.graphLodCullDistance?Number.parseFloat(e.dataset.graphLodCullDistance):void 0,Z=ee!==void 0&&Number.isFinite(ee)&&ee>=0?ee:void 0,f=e.dataset.graphLodFog==="true",m=e.dataset.graphLodNodeResolution?Number.parseInt(e.dataset.graphLodNodeResolution,10):void 0,w=m!==void 0&&Number.isFinite(m)&&m>=0?m:void 0,x=e.dataset.graphLodLinkResolution?Number.parseInt(e.dataset.graphLodLinkResolution,10):void 0,A=x!==void 0&&Number.isFinite(x)&&x>=0?x:void 0,N=e.dataset.graphInteractionIncrementalRepaint==="true",J=!1,q=null,he={current:Kt()},ie=()=>{J=!0,q&&(q._destructor(),q=null),delete e.dataset.graphReady};window.addCleanup(ie);let le=jn();if(v==="3d"&&!le){ct(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let oe=v==="3d"||le,W=nr(oe),We=oe?import(sn).then(M=>M.default??null).catch(M=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",M),null)):Promise.resolve(null),ce=oe?import(ln).catch(M=>(console.error("[graph-landing] three unavailable; using default node spheres",M),null)):Promise.resolve(null),K=oe?import(cn).then(M=>M.UnrealBloomPass?new M.UnrealBloomPass:null).catch(M=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",M),null)):Promise.resolve(null);W.catch(()=>{});let ue;try{ue=Be(L==="graphIndex"?await fetch(T).then(M=>M.json()):await fetchData)}catch(M){throw ct(n,"Graph could not load content index."),M}if(J)return;let de=Yn(Dn(ue),{localeId:r,sourceLocale:c,prefixes:d},D),ae=kt(de,_),Ce=g.replace("{n}",String(ae.nodes.length)).replace("{m}",String(ae.links.length));for(let M of o)M.textContent=Ce;let te;try{te=await W}catch(M){throw ct(n,"Graph could not load. Check your network connection."),M}let[Ye,Ke,je]=await Promise.all([We,ce,K]);J||(n.replaceChildren(),q=te(n),n.__graphLanding=q,n.__graphData=ae,ur(q,ae,he,{use3d:oe,root:e,spriteText:Ye,bloomPass:je,three:Ke,fullData:de,expandHops:V,layout:{freezeAfterWarmup:P,warmupTicks:z,cooldownTicks:$,chargeTheta:F},lod:{labelDistance:se,dotDistance:re,cullDistance:Z,fog:f,nodeResolution:w,linkResolution:A},interaction:{incrementalRepaint:N}}))}var yr="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(yr,r)}catch(c){console.error("[graph-landing] failed to persist preferred-locale",c)}});document.addEventListener("nav",()=>{br()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  --graph-external: #3f6f8c;\n  height: 100dvh;\n  overflow: hidden;\n}\n\nhtml[saved-theme=dark]:has(.graph-landing),\nhtml[saved-theme=dark] body:has(.graph-landing) {\n  --graph-external: #8fb6c8;\n}\n\nhtml:not([saved-theme=dark]):has(.graph-landing),\nhtml:not([saved-theme=dark]) body:has(.graph-landing) {\n  --graph-external: #0f6a72;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 66px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 40px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  left: 64px;\n  pointer-events: auto;\n  position: absolute;\n  width: 40px;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle .graph-landing__icon--audio-on {\n  display: none;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__icon--audio-on {\n  display: block;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__icon--audio-off {\n  display: none;\n}\n\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0.02;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--secondary);\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--lightgray);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: color-mix(in srgb, var(--light) 78%, transparent);\n    border-bottom: 1px solid var(--lightgray);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 40px;\n    min-height: 40px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__audio-toggle {\n    bottom: max(16px, env(safe-area-inset-bottom));\n    height: 44px;\n    width: 44px;\n  }\n  .graph-landing__rail-toggle {\n    left: max(16px, env(safe-area-inset-left));\n  }\n  .graph-landing__audio-toggle {\n    left: calc(max(16px, env(safe-area-inset-left)) + 44px + 8px);\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 44px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: color-mix(in srgb, var(--light) 72%, transparent);\n    border-bottom-color: var(--lightgray);\n  }\n}';
var l;
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
      articles: "Writing",
      about: "About",
      themeToggle: "\uB77C\uC774\uD2B8/\uB2E4\uD06C \uBAA8\uB4DC \uC804\uD658",
      filtersToggle: "\uD544\uD130",
      controls: "Controls",
      audioStop: "\uB178\uB798 \uB044\uAE30",
      audioPlay: "\uB178\uB798 \uCF1C\uAE30",
      folderRoot: "\uB8E8\uD2B8",
      previewHint: "\uD074\uB9AD\uD558\uBA74 \uC5F0\uACB0\uC774 \uC5F4\uB9BD\uB2C8\uB2E4",
      previewTagTemplate: "{n}\uAC1C \uB178\uD2B8",
      inspectOpen: "\uBCF8\uBB38 \uC77D\uAE30",
      inspectOpenExternal: "\uC5F4\uAE30",
      inspectConnected: "\uC5F0\uACB0",
      inspectClose: "\uB2EB\uAE30",
      inspectEmpty: "\uC9C1\uC811 \uC5F0\uACB0\uB41C \uBCC4\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
      folders: "\uD3F4\uB354",
      tune: "Tune",
      nodeSize: "Node size",
      edgeWidth: "Edge width"
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
    articles: "Writing",
    about: "About",
    themeToggle: "Toggle light / dark mode",
    filtersToggle: "Filters",
    controls: "Controls",
    audioStop: "Stop music",
    audioPlay: "Play music",
    folderRoot: "Root",
    previewHint: "Click to inspect connections",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectOpenExternal: "Open",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    folders: "Folders",
    tune: "Tune",
    nodeSize: "Node size",
    edgeWidth: "Edge width"
  };
}
function localeHomeHref(localeId) {
  return `/${localeId}/`;
}
function localePageHref(localeId, permalink) {
  return `/${localeId}/${permalink}`;
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
function findLocaleSlug(allFiles, translationKey, localeId) {
  const match = allFiles.find((file) => {
    const multilingual = file.multilingual;
    return multilingual?.translationKey === translationKey && multilingual?.locale === localeId && typeof file.slug === "string" && file.slug !== "index";
  });
  return typeof match?.slug === "string" ? match.slug : null;
}
function localeToggleLink(allFiles, locales, currentLocale, translationKey) {
  const other = locales.find((locale) => locale.id !== currentLocale);
  if (!other) {
    return null;
  }
  const slug = findLocaleSlug(allFiles, translationKey, other.id) ?? findLocaleSlug(allFiles, "home", other.id);
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
  let rootPath = slug.split("/").filter((segment) => segment !== "").slice(0, -1).map(() => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
var defaultComponentOptions = {
  indexSource: "contentIndex"
};
var GraphLanding_default = ((pageOptions) => {
  const options = { ...defaultComponentOptions, ...pageOptions };
  const GraphLandingConstructor = () => {
    const GraphLanding = ({ fileData, cfg, allFiles }) => {
      const multilingual = fileData.multilingual;
      const slug = typeof fileData.slug === "string" ? fileData.slug : "";
      const localeId = multilingual?.locale ?? slug.split("/")[0] ?? options.defaultLocale ?? "ko";
      const multilingualCfg = cfg.multilingual;
      const sourceLocale = multilingualCfg?.sourceLocale ?? options.defaultLocale ?? "ko";
      const locales = multilingualCfg?.locales ?? [];
      const localePrefixes = locales.map((locale) => locale.id).join(",");
      const copy = overlayCopyForLocale(localeId);
      const translationKey = multilingual?.translationKey ?? "graph";
      const localeToggle = localeToggleLink(allFiles, locales, localeId, translationKey);
      const homeSlug = findLocaleSlug(allFiles, "home", localeId);
      const writingSlug = findLocaleSlug(allFiles, "writing", localeId);
      const aboutSlug = findLocaleSlug(allFiles, "about", localeId);
      const homeHref = homeSlug ? slugToAbsHref(homeSlug) : localeHomeHref(localeId);
      const aboutHref = aboutSlug ? slugToAbsHref(aboutSlug) : localePageHref(localeId, "about");
      const writingHref = writingSlug ? slugToAbsHref(writingSlug) : localePageHref(localeId, "writing");
      const graphIndexPath = joinSegments(pathToRoot(slug), "static/graphIndex.json");
      return /* @__PURE__ */ u2(
        "div",
        {
          class: "graph-landing",
          "data-rail-open": "false",
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
          "data-graph-lod-label-distance": options.lod?.labelDistance,
          "data-graph-lod-dot-distance": options.lod?.dotDistance,
          "data-graph-lod-cull-distance": options.lod?.cullDistance,
          "data-graph-lod-fog": options.lod?.fog ? "true" : void 0,
          "data-graph-lod-node-resolution": options.lod?.nodeResolution,
          "data-graph-lod-link-resolution": options.lod?.linkResolution,
          "data-graph-interaction-incremental-repaint": options.interaction?.incrementalRepaint ? "true" : void 0,
          "data-graph-ambient-video-id": options.ambientVideoId,
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
          "data-inspect-connected": copy.inspectConnected,
          "data-inspect-empty": copy.inspectEmpty,
          children: [
            /* @__PURE__ */ u2("link", { rel: "preconnect", href: "https://esm.sh", crossOrigin: "anonymous" }),
            /* @__PURE__ */ u2("link", { rel: "dns-prefetch", href: "https://esm.sh" }),
            /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
              /* @__PURE__ */ u2("div", { class: "graph-landing__canvas", id: "graph-landing-mount" }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__overlay", children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__chrome", children: [
                  /* @__PURE__ */ u2("div", { class: "graph-landing__title-block graph-landing__title-block--chrome", children: /* @__PURE__ */ u2("a", { class: "graph-landing__title", href: homeHref, children: "Beomsu Koh" }) }),
                  /* @__PURE__ */ u2("nav", { class: "graph-landing__top-right", "aria-label": "Site", children: [
                    /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: writingHref, children: copy.articles }),
                    /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: aboutHref, children: copy.about }),
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
                /* @__PURE__ */ u2(
                  "button",
                  {
                    type: "button",
                    class: "graph-landing__audio-toggle",
                    "data-graph-audio-toggle": true,
                    "data-playing": "true",
                    "aria-pressed": "true",
                    "aria-label": copy.audioStop,
                    title: copy.audioStop,
                    children: [
                      /* @__PURE__ */ u2(
                        "svg",
                        {
                          class: "graph-landing__icon graph-landing__icon--audio-on",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: [
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M4.5 10v4h3.2L12 18.2V5.8L7.7 10H4.5Z"
                              }
                            ),
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                d: "M15.2 9.2a3.4 3.4 0 0 1 0 5.6M17.6 7a6.2 6.2 0 0 1 0 10"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ u2(
                        "svg",
                        {
                          class: "graph-landing__icon graph-landing__icon--audio-off",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: [
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M4.5 10v4h3.2L12 18.2V5.8L7.7 10H4.5Z"
                              }
                            ),
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                d: "M16 9.5 20 14.5M20 9.5 16 14.5"
                              }
                            )
                          ]
                        }
                      )
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
                        /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: "Beomsu Koh" }),
                        /* @__PURE__ */ u2("p", { class: "graph-landing__counts", "data-graph-counts": true, children: copy.countsTemplate.replace("{n}", "\u2013").replace("{m}", "\u2013") })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__lenses", role: "tablist", "aria-label": "Graph lens", children: [
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
                                  "aria-label": copy.labelsShow,
                                  title: copy.labelsShow,
                                  "aria-pressed": "false",
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
                                value: "70",
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
                /* @__PURE__ */ u2(
                  "aside",
                  {
                    class: "graph-landing__inspect",
                    "data-graph-inspect": true,
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
                      /* @__PURE__ */ u2("h2", { class: "graph-landing__inspect-title", "data-graph-inspect-title": true }),
                      /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-excerpt", "data-graph-inspect-excerpt": true }),
                      /* @__PURE__ */ u2("ul", { class: "graph-landing__inspect-tags", "data-graph-inspect-tags": true }),
                      /* @__PURE__ */ u2("p", { class: "graph-landing__inspect-section", "data-graph-inspect-connected-label": true, children: copy.inspectConnected }),
                      /* @__PURE__ */ u2("ul", { class: "graph-landing__inspect-links", "data-graph-inspect-connected": true }),
                      /* @__PURE__ */ u2("a", { class: "graph-landing__inspect-open", "data-graph-inspect-open": true, hidden: true, children: copy.inspectOpen })
                    ]
                  }
                )
              ] })
            ] })
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
var defaultOptions = {
  indexSource: "contentIndex"
};
var graphPageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  const translationKey = frontmatter?.translationKey;
  return translationKey === "graph" || translationKey === "home";
};
var GraphLandingPage = (userOpts) => {
  const options = { ...defaultOptions, ...userOpts };
  const instance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
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