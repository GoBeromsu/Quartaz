// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var un=/^[A-Za-z0-9_-]{6,20}$/;function kt(e){if(!e)return;let n=e.trim();return un.test(n)?n:void 0}function I(e){return typeof e=="string"?e:e.id}function rt(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function Lt(e,n){return rt(e,n)==="dot"}function Tt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((g,L)=>L.degree!==g.degree?L.degree-g.degree:g.id<L.id?-1:g.id>L.id?1:0).slice(0,Math.max(0,n)),c=new Set(r.map(g=>g.id)),u=e.links.filter(g=>{let L=I(g.source),v=I(g.target);return c.has(L)&&c.has(v)});return{nodes:r,links:u}}function vt(e,n,o,r){let c=new Set,u=Math.max(0,Math.floor(r));if(u<=0)return c;let g=new Set([o]),L=new Set([o]);for(let v=0;v<u;v+=1){let C=new Set;for(let _ of L)for(let b of e.get(_)??[])g.has(b)||(g.add(b),C.add(b),n.has(b)||c.add(b));L=C}return c}function Et(e,n,o){let r=new Set;if(n!==null){r.add(n);for(let c of e.get(n)??[])r.add(c)}if(o!==null){r.add(o);for(let c of e.get(o)??[])r.add(c)}return r}function xt(e,n){return`${e}|${n}`}function St(e,n){return`${e}|${n}`}var je="0.179.1",dn="https://esm.sh/force-graph@1.51.4",fn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${je}`,gn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${je}`,mn=`https://esm.sh/three@${je}`,pn=`https://esm.sh/three@${je}/examples/jsm/postprocessing/UnrealBloomPass.js`,hn=8,bn=14;var Ee=1,ot=3.5,yn=.05,wn=2.6,kn=1,Ct=1,ve=.18,Wt="graph-landing:lens",Yt="graph-landing:tune",gt="graph-landing:ambient-audio",Ln="UDVtMYqUAyw",Ve=12,Tn=28e3,vn="https://www.youtube.com/iframe_api",En=.18,xn=1.4,Sn=1.25,Cn=1.15,Mn=.55,xe={x:330,y:235,z:565},Mt={x:0,y:0,z:0},qe=Math.hypot(xe.x,xe.y,xe.z),Nn=300/qe,In=1600/qe,Nt=1.3,Pn=3.2,It=1.05,Pt=.32,At=.28,An={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Dn="#a8b0c2",Rn="#2a3348",Dt={min:80,max:200},Rt={min:40,max:110},_t={min:160,max:280},Gt={min:90,max:170},Ft=220,Ht=2,_n=.15,Gn=.8,Fn=350,at={min:-100,max:-190},st={min:72,max:116},it={min:130,max:260};function Hn(e){return Ye(e-.5,0,1)}function We(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function lt(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function On(e){let n=[];for(let o of Object.values(e)){let r=We(o),c=typeof r.slug=="string"?r.slug:"";if(c.length===0)continue;let u=r.multilingual,g=u&&typeof u=="object"?u:void 0;n.push({slug:c,title:typeof r.title=="string"?r.title:c,links:lt(r.links),tags:lt(r.tags),externalLinks:lt(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:g})}return n}function zn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Ft?n:`${n.slice(0,Ft).trimEnd()}\\u2026`}function Se(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function Ot(e){return Se(e)/(2*Math.PI)}function Be(e,n,o){let r=Se(e),c=Math.acos(2*Ot(`${e}:phi`)-1),u=n+(o-n)*Ot(`${e}:r`);return{x:u*Math.sin(c)*Math.cos(r),y:u*Math.sin(c)*Math.sin(r),z:u*Math.cos(c)}}function Kt(e){return e==="index"||e.endsWith("/index")}function jt(e){return e==="tags"||e.startsWith("tags/")}function Vn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Xt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function ct(e,n){return e.multilingual?.locale?e.multilingual.locale:Xt(e.slug,n).locale}function Bn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Xt(e.slug,n).permalink}`}function $n(e,n){let o=e.find(r=>ct(r,n.prefixes)===n.localeId)??e.find(r=>ct(r,n.prefixes)===n.sourceLocale)??e.find(r=>ct(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Ye(e,n,o){return Math.min(o,Math.max(n,e))}function zt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function Un(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function mt(e){return Un(e).trim().toLowerCase()}function qn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Wn(e){let n=e.trim();return n.length===0||qn(n)||jt(n)||Kt(n)?!0:mt(n).length===0}function Yn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Zt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Kn(e,n){let o=Zt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function Vt(e){return`external:${e}`}function jn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),c=o.pathname;return(n.get(r)??0)>1&&c.length>1?`${r}${c}`:r}function Xn(e){let n=new Map,o=new Map;for(let r of e){let c=mt(r.slug);c.length>0&&!n.has(c)&&n.set(c,r.slug);let u=r.title.trim().toLowerCase();u.length>0&&!o.has(u)&&o.set(u,r.slug);let g=u.replace(/\\s+/g,"-");g.length>0&&!o.has(g)&&o.set(g,r.slug)}return{byBasename:n,byTitle:o}}function Zn(e,n,o){if(n.has(e))return e;let r=mt(e),c=o.byBasename.get(r);if(c)return c;let u=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return u||null}function Jn(e,n){return e.length===0?"":[...e].sort((r,c)=>(n.get(c)??0)-(n.get(r)??0))[0]??""}function Qn(e,n,o=void 0){let r=e.filter(f=>!Kt(f.slug)&&!jt(f.slug)&&!Vn(f)),c=new Map;for(let f of r){let p=Bn(f,n.prefixes),w=c.get(p)??[];w.push(f),c.set(p,w)}let u=[];for(let f of c.values())u.push($n(f,n));let g=new Set(u.map(f=>f.slug)),L=Xn(u),v=new Map,C=[],_=new Set,b=new Map,U=f=>{v.set(f,(v.get(f)??0)+1)},D=(f,p,w)=>f<p?`${f}|${p}|${w}`:`${p}|${f}|${w}`,E=(f,p,w,S)=>{let A=D(f,p,w);return _.has(A)?!1:(_.add(A),C.push({source:f,target:p,kind:w}),S&&(U(f),U(p)),!0)};for(let f of u)for(let p of f.links){if(Wn(p))continue;let w=Zn(p,g,L);w!==null&&w!==f.slug&&E(f.slug,w,"wikilink",!0)}let P=Yn(),F=new Set;for(let f of u)for(let p of f.externalLinks){let w=Zt(p);w===null||!Kn(w,P)||(F.add(w),E(f.slug,Vt(w),"external",!0))}let V=new Map;for(let f of F){let p=new URL(f).hostname.replace(/^www\\./,"");V.set(p,(V.get(p)??0)+1)}let O=new Set,q=new Map;for(let f of u)for(let p of f.tags){b.set(p,(b.get(p)??0)+1);let w=`tag:${p}`;O.add(w),E(f.slug,w,"tag",!0);let S=q.get(p)??[];S.push(f.slug),q.set(p,S)}if(o!==!1){let f=o?.maxTagsPerNote,p=o?.maxEdges,w=0;e:for(let S of u)if(!(S.tags.length<2)&&!(f!==void 0&&S.tags.length>f))for(let A=0;A<S.tags.length;A+=1)for(let N=A+1;N<S.tags.length;N+=1){if(p!==void 0&&w>=p)break e;E(`tag:${S.tags[A]}`,`tag:${S.tags[N]}`,"cooc",!1)&&(w+=1)}}let x=new Map;for(let f of u){let p=zt(f.slug);if(p==="root")continue;let w=x.get(p)??[];w.push(f.slug),x.set(p,w)}for(let f of x.values()){if(f.length<2)continue;let p=[...f].sort();for(let w=0;w<p.length;w+=1){let S=p[(w+1)%p.length],A=p[(w+Ht)%p.length],N=p[w];N===void 0||S===void 0||(N!==S&&!_.has(D(N,S,"wikilink"))&&E(N,S,"folder",!1),p.length>Ht+1&&A!==void 0&&N!==A&&!_.has(D(N,A,"wikilink"))&&E(N,A,"folder",!1))}}let G=[...v.values()],W=G.length>0?Math.min(...G):0,ie=G.length>0?Math.max(...G):0,z=f=>{let p=v.get(f)??0,w=Math.sqrt(p),S=Math.sqrt(W),N=Math.sqrt(ie)-S;return N===0?(Ee+ot)/2:Ee+(w-S)/N*(ot-Ee)},Z=[...u].sort((f,p)=>(v.get(p.slug)??0)-(v.get(f.slug)??0)),te=new Set(Z.filter(f=>(v.get(f.slug)??0)>0).slice(0,hn).map(f=>f.slug)),J=u.map(f=>{let p=te.has(f.slug),w=p?Be(f.slug,Rt.min,Rt.max):Be(f.slug,Dt.min,Dt.max);return{id:f.slug,name:f.title,type:"note",val:z(f.slug),degree:v.get(f.slug)??0,isHub:p,tag:"",slug:f.slug,url:"",folder:zt(f.slug),tags:f.tags,dominantTag:Jn(f.tags,b),excerpt:zn(f.content),phase:Se(f.slug),x:w.x,y:w.y,z:w.z}});for(let f of F){let p=Vt(f),w=Be(p,_t.min,_t.max);J.push({id:p,name:jn(f,V),type:"external",val:z(p)*Mn,degree:v.get(p)??0,isHub:!1,tag:"",slug:"",url:f,folder:"",tags:[],dominantTag:"",excerpt:f,phase:Se(p),x:w.x,y:w.y,z:w.z})}for(let f of O){let p=f.slice(4),w=Be(f,Gt.min,Gt.max);J.push({id:f,name:p,type:"tag",val:Ye(z(f)*.7,Ee,ot),degree:v.get(f)??0,isHub:!1,tag:p,slug:`tags/${p}`,url:"",folder:"tag",tags:[p],dominantTag:p,excerpt:"",phase:Se(f),x:w.x,y:w.y,z:w.z})}return{nodes:J,links:C}}function ut(e){let n=new Map,o=(r,c)=>{let u=n.get(r)??new Set;u.add(c),n.set(r,u)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let c=I(r.source),u=I(r.target);o(c,u),o(u,c)}return n}function ge(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Jt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ge("--light","#ffffff"),ink:ge("--darkgray","#0f0f0f"),accent:ge("--secondary","#a52142"),tertiary:ge("--tertiary","#c75b75"),gray:ge("--gray","#737373"),external:ge("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Ue(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function er(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function tr(){return er()&&!Ue()}function X(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ke(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function me(e,n){let o=Ke(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function ee(e,n,o){let r=Ke(e),c=Ke(n);if(!r||!c)return e;let u=(g,L)=>Math.round(g+(L-g)*o);return`rgb(${u(r.r,c.r)}, ${u(r.g,c.g)}, ${u(r.b,c.b)})`}function Qt(e){return X()?ee(e.bg,"#05070f",.88):e.bg}function nr(e){let n=Ke(e);if(!n)return e;let o=r=>{let c=r/255,u=c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4);return Math.round(u*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function rr(e){return nr(Qt(e))}function en(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function Bt(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:en(e,[n.accent,n.tertiary,n.ink,n.gray])}function or(e,n){return e.length===0?n.ink:en(e,[n.accent,n.tertiary])}function tn(e){let n=e.split("/").map(u=>encodeURIComponent(u)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let c=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(c,window.location.origin)}function ar(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=tn(e);window.location.assign(n.toString())}function sr(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function ir(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function dt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function lr(e){let o=await import(e?fn:dn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):ir(o)}function cr(){try{let e=sessionStorage.getItem(Wt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function ur(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(Yt);if(!n)return e;let o=We(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,c=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,u=typeof o.zoom=="number"?o.zoom:e.zoom,g=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:c,zoom:u,spread:g}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function $e(e){try{sessionStorage.setItem(Yt,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function ft(e){try{sessionStorage.setItem(Wt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function dr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function fr(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function gr(e,n){return e.type==="note"&&e.folder===n}function $t(e,n){let o=I(n),r=e.find(c=>c.id===o);return!r||r.type!=="note"?null:r.folder}function mr(e,n,o){let r=new Map;if(n==="folder"){let c=[...new Set(e.nodes.filter(u=>u.type==="note").map(u=>u.folder))];return c.forEach((u,g)=>{let L=Math.PI*2*g/Math.max(c.length,1),v={x:Math.cos(L)*o,y:Math.sin(L)*o,z:0};for(let C of e.nodes)C.type==="note"&&C.folder===u&&r.set(C.id,v)}),r}if(n==="tag"){let c=e.nodes.filter(g=>g.type==="tag"),u=new Map;c.forEach((g,L)=>{let v=Math.PI*2*L/Math.max(c.length,1);u.set(g.tag,{x:Math.cos(v)*o,y:Math.sin(v)*o,z:0})});for(let g of e.nodes)if(g.type==="tag"){let L=u.get(g.tag);L&&r.set(g.id,L)}else if(g.dominantTag.length>0){let L=u.get(g.dominantTag);L&&r.set(g.id,L)}}return r}function pr(e,n){let o=[],r=c=>{let u=n*c;for(let g of o){let L=e(g);L&&(g.vx=(g.vx??0)+(L.x-(g.x??0))*u,g.vy=(g.vy??0)+(L.y-(g.y??0))*u,g.vz=(g.vz??0)+(L.z-(g.z??0))*u)}};return r.initialize=c=>{o=c},r}function Ut(e,n,o,r){for(let c of e.querySelectorAll(n)){if(!(c instanceof HTMLElement))continue;let u=c.getAttribute(r);c.setAttribute("aria-pressed",u===o?"true":"false")}}function hr(e,n,o,r){let c=ut(n.links),u=(t,a,s)=>t<a?`${t}|${a}|${s}`:`${a}|${t}|${s}`,g=new Map,L=new Map,v=new Set,C=new Set;r.fullData!==n&&(g=new Map(r.fullData.nodes.map(t=>[t.id,t])),L=ut(r.fullData.links),v=new Set(n.nodes.map(t=>t.id)),C=new Set(n.links.map(t=>u(I(t.source),I(t.target),t.kind))));let _=t=>{if(r.fullData===n)return!1;let a=vt(L,v,t,r.expandHops);if(a.size===0)return!1;for(let s of a){let i=g.get(s);i&&(n.nodes.push(i),v.add(s))}for(let s of r.fullData.links){let i=I(s.source),l=I(s.target);if(!v.has(i)||!v.has(l))continue;let d=u(i,l,s.kind);C.has(d)||(C.add(d),n.links.push(s))}return c=ut(n.links),!0},b={lens:cr(),allLabels:!1,focusTag:null,focusFolder:null},U=null,D=null,E=ur(),P=()=>D??U,F=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,bn).map(t=>t.id)),V=t=>{let a=t.val;return t.isHub&&(a*=xn),b.lens==="tag"&&t.type==="tag"&&(a*=Sn),b.focusTag&&t.id===`tag:${b.focusTag}`&&(a*=Cn),a},O=t=>{let a=P();return b.allLabels||a===t.id||a!==null&&(c.get(a)?.has(t.id)??!1)?!0:F.has(t.id)},q=t=>{let a=Ye((V(t)-Ee)/5,0,1);return(Nt+a*(Pn-Nt))*E.nodeScale},x=t=>{let a=P();if(a!==null)return a===t||(c.get(a)?.has(t)??!1);if(b.focusTag===null&&b.focusFolder===null)return!0;let s=n.nodes.find(i=>i.id===t);return s?b.focusFolder!==null?gr(s,b.focusFolder):b.focusTag!==null&&fr(s,b.focusTag):!1},G=t=>t.type==="external"?o.current.external:b.lens==="tag"?t.type==="tag"?o.current.tertiary:or(t.dominantTag,o.current):b.lens==="folder"?t.type==="tag"?o.current.tertiary:Bt(t.folder,o.current):b.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,W=t=>{let a=P();if(a!==null&&(a===t.id||(c.get(a)?.has(t.id)??!1)))return o.current.accent;let s=G(t);return x(t.id)?X()?t.type==="external"?ee(o.current.external,"#ffffff",.18):t.type==="tag"?ee(o.current.tertiary,"#ffffff",.22):t.isHub?ee("#fff3e4",o.current.accent,.1):ee("#ffffff",o.current.accent,.12):t.type==="external"?ee(o.current.external,"#08343a",.12):t.type==="tag"?ee(o.current.tertiary,o.current.accent,.55):t.isHub?ee(o.current.ink,o.current.accent,.22):s:me(s,ve)},ie=t=>{let a=X();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},z=t=>{let a=I(t.source),s=I(t.target),i=P();return i!==null&&(a===i||s===i)?X()?.72:.78:(i!==null||b.focusTag!==null||b.focusFolder!==null)&&(!x(a)||!x(s))?ie(t.kind)*ve:ie(t.kind)},Z=t=>{let a=I(t.source),s=I(t.target),i=P(),l=X()?Dn:Rn;return i!==null&&(a===i||s===i)?ee(o.current.accent,l,.45):l},te=t=>me(Z(t),z(t)),J=()=>n,f=t=>{let a=X()?"rgba(255, 255, 255, 0.85)":me(o.current.ink,.88);return x(t.id)?a:me(a,ve)},p=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:xe,len:qe}},w=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=qe/Ye(E.zoom,.4,2.5),{dir:s,len:i}=p(),l=a/i;e.cameraPosition({x:s.x*l,y:s.y*l,z:s.z*l},Mt,t),Je();return}typeof e.zoom=="function"&&e.zoom(E.zoom,t)},S=()=>{let t=Hn(E.spread),a=at.min+t*(at.max-at.min),s=st.min+t*(st.max-st.min),i=e.d3Force("charge");i?.strength&&i.strength(a),i?.theta&&r.layout.chargeTheta!==void 0&&i.theta(r.layout.chargeTheta);let l=e.d3Force("link");l?.distance&&l.distance(k=>b.lens==="tag"&&k.kind==="tag"?s*.72:s),l?.strength&&l.strength(k=>{if(k.kind==="cooc"||k.kind==="folder")return .04;if(b.lens==="tag"&&k.kind==="tag")return .95;if(b.lens==="folder"){let T=$t(n.nodes,k.source),$=$t(n.nodes,k.target);if(T!==null&&T===$)return .72}return k.kind==="tag"?.65:.8});let d=e.d3Force("center");d?.strength&&d.strength(yn);let y=it.min+t*(it.max-it.min),m=mr(n,b.lens,y),h=b.lens==="folder"||b.lens==="tag"?.08:0;e.d3Force("cluster",pr(k=>m.get(k.id)??null,h)),r.use3d&&e.d3Force("flattenZ",null)},A=new Map,N=new Map,oe=new Map,ne=new Map,Y=new Map,le=new Map,pe=new Map,Ce=(t,a,s)=>{let i=`${Math.round(a*4)}|${s}`,l=pe.get(i);if(l)return l;let d={geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:s})};return pe.set(i,d),d},Q=new Map,ce=new Map,Xe=(t,a,s)=>{let i=St(a,s),l=Q.get(i);if(l)return l;let d=new t.CylinderGeometry(a,a,1,s);return Q.set(i,d),d},Me=(t,a,s)=>{let i=xt(a,s),l=ce.get(i);if(l)return l;let d=new t.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1});return ce.set(i,d),d},K=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,s=r.lod.dotDistance,i=r.lod.nodeResolution??14,l=r.interaction.incrementalRepaint;if(A.clear(),N.clear(),pe.clear(),ne.clear(),Y.clear(),l)for(let d of n.nodes)Y.set(d.id,d);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(d=>{let y=q(d),m=W(d),h=!1;if(a){if(X()){let R=d.isHub?1.35:1.1,j=new a.MeshLambertMaterial({color:m,emissive:m,emissiveIntensity:R});A.set(d.id,{material:j,base:R,phase:d.phase}),l&&ne.set(d.id,j),h=new a.Mesh(new a.SphereGeometry(y,i,i),j)}else{let R=new a.MeshBasicMaterial({color:m});l&&ne.set(d.id,R),h=new a.Mesh(new a.SphereGeometry(y,i,i),R)}if(s!==void 0&&h!==!1){let R=Ce(a,y,m),j=new a.Mesh(R.geometry,R.material),Te=new a.LOD;Te.addLevel(h,0),Te.addLevel(j,s),h=Te}}let k=O(d);if(!t||!l&&!k)return h;let T=new t(d.name);if(T.color=f(d),T.fontWeight="400",T.strokeWidth=0,T.textHeight=F.has(d.id)?6.5:5.5,T.center.set(0,.5),T.position.x=y+2,T.position.y=0,l?(T.visible=k,N.set(d.id,{sprite:T,node:d})):r.lod.labelDistance!==void 0&&N.set(d.id,{sprite:T,node:d}),!a||h===!1)return T;let $=new a.Group;return $.add(h),$.add(T),$})},Ne=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),s=r.lod.linkResolution??5,i=r.lod.cullDistance,l=r.interaction.incrementalRepaint,d=r.lod.shareLinkResources;if(oe.clear(),le.clear(),Q.clear(),ce.clear(),l)for(let y of n.links){let m=I(y.source),h=I(y.target);for(let k of[m,h]){let T=le.get(k);T?T.push(y):le.set(k,[y])}}e.linkThreeObject(y=>{let m=An[y.kind]*E.edgeScale,h=d?Me(t,Z(y),z(y)):new t.MeshBasicMaterial({color:Z(y),transparent:!0,opacity:z(y),depthWrite:!1}),k=d?Xe(t,m,s):new t.CylinderGeometry(m,m,1,s),T=new t.Mesh(k,h);return(i!==void 0||l)&&oe.set(y,T),T}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((y,m)=>{let h=m.end.x-m.start.x,k=m.end.y-m.start.y,T=m.end.z-m.start.z,$=Math.sqrt(h*h+k*k+T*T);return y.position.x=(m.start.x+m.end.x)/2,y.position.y=(m.start.y+m.end.y)/2,y.position.z=(m.start.z+m.end.z)/2,y.scale.x=1,y.scale.y=Math.max($,.01),y.scale.z=1,y.quaternion.setFromUnitVectors(a,new t.Vector3(h,k,T).normalize()),!0})},ae=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=P();if(a===null)return 0;let s=I(t.source),i=I(t.target);return s===a||i===a?2:0})},B=()=>{e.nodeVal(V),e.nodeColor(W),e.linkColor(te),e.linkWidth(t=>{let a=I(t.source),s=I(t.target),i=P(),l=E.edgeScale;return i!==null&&(a===i||s===i)?.7*l:t.kind==="wikilink"||t.kind==="external"?.5*l:(t.kind==="tag"?.35:.25)*l}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ct),ae(),Ne(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},he=(t,a)=>{let s=Et(c,t,a);for(let i of s){let l=Y.get(i);if(!l)continue;let d=W(l);ne.get(i)?.color.set(d);let y=A.get(i);y&&y.material.emissive.set(d);let m=N.get(i);m&&(m.sprite.color=f(l),m.sprite.visible=O(l));for(let h of le.get(i)??[]){let k=oe.get(h);k&&(r.lod.shareLinkResources&&r.three?k.material=Me(r.three,Z(h),z(h)):(k.material.color.set(Z(h)),k.material.opacity=z(h)))}}},ue=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(d,y)=>{let m=document.createElement("span");m.className="graph-landing__legend-item";let h=document.createElement("span");h.className="graph-landing__dot",h.setAttribute("aria-hidden","true"),h.style.background=d;let k=document.createElement("span");return k.textContent=y,m.append(h,k),m},s=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,i),a(o.current.external,l))},Ie=t=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[t.dataset.key]=t.dataset.value,s.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let d=document.createElement("span");d.className="graph-landing__dot",d.style.background=t.dotColor,i.append(d)}i.append(document.createTextNode(t.label));let l=document.createElement("span");return l.className="graph-landing__tag-count",l.textContent=String(t.count),s.append(i,l),a.append(s),a},Pe=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),s=r.root.querySelector(".graph-landing__tags");if(b.lens==="folder"){let l=r.root.dataset.folderRootLabel??"root",d=new Map;for(let m of n.nodes)m.type==="note"&&d.set(m.folder,(d.get(m.folder)??0)+1);let y=[...d.entries()].sort((m,h)=>h[1]-m[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=y.length===0),t.replaceChildren(...y.map(([m,h])=>Ie({dataset:{key:"graphFolder",value:m},pressed:b.focusFolder===m,dotColor:Bt(m,o.current),label:m==="root"?l:m,count:h})));return}let i=n.nodes.filter(l=>l.type==="tag").sort((l,d)=>d.degree-l.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=i.length===0),t.replaceChildren(...i.map(l=>Ie({dataset:{key:"graphTag",value:l.tag},pressed:b.focusTag===l.tag,dotColor:null,label:l.tag,count:l.degree})))},se=()=>{e.graphData(J()),S(),B(),K(),ue(),Pe(),Ut(r.root,"[data-graph-lens]",b.lens,"data-graph-lens"),e.d3ReheatSimulation()},M=t=>{b.lens=t,t!=="tag"&&(b.focusTag=null),t!=="folder"&&(b.focusFolder=null),ft(t),se()},nn=t=>{b.focusTag=b.focusTag===t?null:t,b.focusFolder=null,b.focusTag&&(b.lens="tag",ft("tag")),se()},rn=t=>{b.focusFolder=b.focusFolder===t?null:t,b.focusTag=null,b.focusFolder&&(b.lens="folder",ft("folder")),se()},Ze=()=>r.use3d?rr(o.current):Qt(o.current),Je=()=>{if(!r.use3d||!r.lod.fog||!r.three||typeof e.scene!="function")return;let t=p().len;e.scene().fog=new r.three.Fog(Ze(),t*Nn,t*In)};e.graphData(J()),e.backgroundColor(Ze()),e.nodeLabel(t=>t.name),e.nodeRelSize(wn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(kn),typeof e.linkOpacity=="function"&&e.linkOpacity(Ct),S(),B();let de=r.root.querySelector("[data-graph-preview]"),Ae=r.root.querySelector("[data-graph-preview-chip]"),De=r.root.querySelector("[data-graph-preview-title]"),Re=r.root.querySelector("[data-graph-preview-excerpt]"),_e=0;window.addCleanup(()=>window.clearTimeout(_e));let on=t=>{if(!(de instanceof HTMLElement)||!(Ae instanceof HTMLElement)||!(De instanceof HTMLElement)||!(Re instanceof HTMLElement))return;window.clearTimeout(_e);let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let l=r.root.dataset.previewTagTemplate??"{n} notes";Ae.textContent=s,De.textContent=`#${t.tag}`,Re.textContent=l.replace("{n}",String(t.degree))}else t.type==="external"?(Ae.textContent=i,De.textContent=t.name,Re.textContent=t.url):(Ae.textContent=a,De.textContent=t.name,Re.textContent=t.excerpt);de.hidden=!1,de.dataset.visible="true"},pt=()=>{de instanceof HTMLElement&&(window.clearTimeout(_e),_e=window.setTimeout(()=>{de.dataset.visible="false",de.hidden=!0},Fn))};if(e.onNodeHover(t=>{let a=P();if(U=t?t.id:null,D===null&&(t?on(t):pt()),r.interaction.incrementalRepaint&&r.use3d){ae(),he(a,P());return}B(),r.use3d&&K()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Ue()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=En;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=X()?It:0,r.bloomPass.radius=Pt,r.bloomPass.threshold=At,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(xe,Mt),E.zoom!==1&&w(0)),K(),Je(),!Ue()){let t=0,a=()=>{let s=performance.now()/1e3*Gn;for(let i of A.values())i.material.emissiveIntensity=i.base*(1+_n*Math.sin(s+i.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}if(r.lod.labelDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.labelDistance,a=e.cameraPosition.bind(e),s=0,i=()=>{let l=a();if(l&&typeof l.x=="number"&&typeof l.y=="number"&&typeof l.z=="number")for(let d of N.values()){let y=d.node.x??0,m=d.node.y??0,h=d.node.z??0,k=Math.hypot(l.x-y,l.y-m,l.z-h);d.sprite.visible=rt(k,t)==="full"}s=window.requestAnimationFrame(i)};s=window.requestAnimationFrame(i),window.addCleanup(()=>window.cancelAnimationFrame(s))}if(r.lod.cullDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.cullDistance,a=e.cameraPosition.bind(e),s=0,i=()=>{let l=a();if(l&&typeof l.x=="number"&&typeof l.y=="number"&&typeof l.z=="number"){let d=P();for(let[y,m]of oe){let h=I(y.source),k=I(y.target);if(d!==null&&(h===d||k===d)){m.visible=!0;continue}let T=Math.hypot(l.x-m.position.x,l.y-m.position.y,l.z-m.position.z);m.visible=!Lt(T,t)}}s=window.requestAnimationFrame(i)};s=window.requestAnimationFrame(i),window.addCleanup(()=>window.cancelAnimationFrame(s))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,s)=>{let i=q(t),l=t.x??0,d=t.y??0;if(a.save(),a.beginPath(),a.arc(l,d,i,0,Math.PI*2),a.fillStyle=W(t),a.fill(),t.isHub&&(a.strokeStyle=x(t.id)?o.current.accent:me(o.current.accent,ve),a.lineWidth=1.2/s,a.stroke()),O(t)){let y=11.5/s;a.font=`${y}px ${o.current.font}`,a.fillStyle=x(t.id)?o.current.ink:me(o.current.ink,ve),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,l,d-i-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,s)=>{let i=q(t)+8;s.beginPath(),s.arc(t.x??0,t.y??0,i,0,Math.PI*2),s.fillStyle=a,s.fill()});let Ge=r.root.querySelector("[data-graph-inspect]"),Fe=r.root.querySelector("[data-graph-inspect-chip]"),He=r.root.querySelector("[data-graph-inspect-title]"),Oe=r.root.querySelector("[data-graph-inspect-excerpt]"),Qe=r.root.querySelector("[data-graph-inspect-tags]"),et=r.root.querySelector("[data-graph-inspect-connected]"),H=r.root.querySelector("[data-graph-inspect-open]"),fe=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),s=r.root.querySelector("[data-graph-rail-scrim]"),i=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),i instanceof HTMLElement&&i.setAttribute("aria-hidden",t?"false":"true"),s instanceof HTMLElement&&(s.hidden=!t)},ze=t=>{Ue()||typeof e.controls!="function"||(e.controls().autoRotate=t)},an=t=>{let a=c.get(t.id)??new Set,s=[];for(let i of a){let l=n.nodes.find(d=>d.id===i);l&&s.push(l)}return s.sort((i,l)=>l.degree-i.degree)},sn=t=>{if(!(Ge instanceof HTMLElement)||!(Fe instanceof HTMLElement)||!(He instanceof HTMLElement)||!(Oe instanceof HTMLElement)||!(Qe instanceof HTMLElement)||!(et instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links",l=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Fe.textContent=s,He.textContent=`#${t.tag}`,Oe.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Fe.textContent=i,He.textContent=t.name,Oe.textContent=t.url):(Fe.textContent=a,He.textContent=t.name,Oe.textContent=t.excerpt);let d=t.tags.map(m=>{let h=document.createElement("li");return h.textContent=m,h});Qe.replaceChildren(...d),Qe.hidden=d.length===0;let y=an(t).slice(0,12);if(y.length===0){let m=document.createElement("li");m.className="graph-landing__inspect-empty",m.textContent=l,et.replaceChildren(m)}else et.replaceChildren(...y.map(m=>{let h=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=m.id;let T=m.type==="tag"?s:m.type==="external"?i:a,$=document.createElement("span");$.textContent=T;let R=document.createElement("strong");return R.textContent=m.type==="tag"?`#${m.tag}`:m.name,k.append($,R),h.append(k),h}));H instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(H.hidden=!1,H.href=tn(t.slug).toString(),H.textContent=r.root.dataset.inspectRead??"Read note",H.removeAttribute("target"),H.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(H.hidden=!1,H.href=t.url,H.textContent=r.root.dataset.inspectOpenExternal??"Open",H.target="_blank",H.rel="noopener noreferrer"):(H.hidden=!0,H.removeAttribute("href"),H.removeAttribute("target"),H.removeAttribute("rel"))),Ge.hidden=!1,r.root.dataset.inspecting="true",fe(!1),pt()},be=()=>{let t=P();if(D=null,Ge instanceof HTMLElement&&(Ge.hidden=!0),r.root.dataset.inspecting="false",ze(!0),r.interaction.incrementalRepaint&&r.use3d){ae(),he(t,P());return}B(),r.use3d&&K()},ln=t=>{if(D===t.id&&t.type==="note"&&t.slug.length>0){ar(t.slug);return}if(D===t.id&&t.type==="external"&&t.url.length>0){sr(t.url);return}let a=P();if(D=t.id,sn(t),r.interaction.incrementalRepaint&&r.use3d){ae(),he(a,P());return}B(),r.use3d&&K()},tt=t=>{_(t.id)&&se(),ln(t)},nt=!1;e.onNodeClick((t,a)=>{t&&(nt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),tt(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{be(),fe(!1)});let re=r.root.querySelector("#graph-landing-mount");if(re instanceof HTMLElement){let t=null,a=d=>{t={x:d.clientX,y:d.clientY},ze(!1)},s=(d,y)=>{if(typeof e.graph2ScreenCoords!="function")return null;let m=re.getBoundingClientRect(),h=d-m.left,k=y-m.top,T=null,$=4096;for(let R of J().nodes){if(R.x===void 0||R.y===void 0)continue;let j=e.graph2ScreenCoords(R.x,R.y,R.z??0),Te=(j.x-h)**2+(j.y-k)**2,cn=(j.x-d)**2+(j.y-y)**2,wt=Math.min(Te,cn);wt<$&&($=wt,T=R)}return T},i=d=>{let y=t;t=null,ze(!0),!(!y||(d.clientX-y.x)**2+(d.clientY-y.y)**2>25)&&window.setTimeout(()=>{if(nt){nt=!1;return}let h=s(d.clientX,d.clientY);h?tt(h):be()},0)},l=()=>{t=null,ze(!0)};re.addEventListener("pointerdown",a,!0),re.addEventListener("pointerup",i,!0),re.addEventListener("pointercancel",l,!0),window.addCleanup(()=>{re.removeEventListener("pointerdown",a,!0),re.removeEventListener("pointerup",i,!0),re.removeEventListener("pointercancel",l,!0)})}Ut(r.root,"[data-graph-lens]",b.lens,"data-graph-lens"),ue(),Pe(),b.lens!=="all"&&se(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let ht=()=>{o.current=Jt(),e.backgroundColor(Ze()),Je(),r.bloomPass&&(r.bloomPass.strength=X()?It:0,r.bloomPass.radius=Pt,r.bloomPass.threshold=At),B(),K(),ue()};document.addEventListener("themechange",ht),window.addCleanup(()=>document.removeEventListener("themechange",ht));let bt=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){be();return}if(a.closest("[data-graph-rail-toggle]")){let h=r.root.dataset.railOpen!=="true";h&&be(),fe(h);return}if(a.closest("[data-graph-rail-scrim]")){fe(!1);return}let s=a.closest("[data-graph-inspect-id]");if(s instanceof HTMLElement&&s.dataset.graphInspectId){let h=r.fullData.nodes.find(k=>k.id===s.dataset.graphInspectId);h&&tt(h);return}let i=a.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&dr(i.dataset.graphLens)){M(i.dataset.graphLens);return}let l=a.closest("[data-graph-tag]");if(l instanceof HTMLElement&&l.dataset.graphTag){nn(l.dataset.graphTag);return}let d=a.closest("[data-graph-folder]");if(d instanceof HTMLElement&&d.dataset.graphFolder){rn(d.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let y=a.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){b.allLabels=!b.allLabels,y.setAttribute("aria-pressed",b.allLabels?"true":"false");let h=y.dataset.labelShow??"Labels",k=y.dataset.labelHide??"Labels",T=b.allLabels?k:h;y.title=T,y.setAttribute("aria-label",T),K();return}if(a.closest("[data-graph-theme]")){let h=X()?"light":"dark";document.documentElement.setAttribute("saved-theme",h),localStorage.setItem("theme",h),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${h}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:h}}));return}let m=a.closest("[data-graph-tags-toggle]");if(m instanceof HTMLButtonElement){let h=r.root.querySelector(".graph-landing__tags");if(h instanceof HTMLElement){let k=h.dataset.open==="true";h.dataset.open=k?"false":"true",m.setAttribute("aria-expanded",k?"false":"true")}}},ye=r.root.querySelector("[data-graph-node-scale]"),we=r.root.querySelector("[data-graph-edge-scale]");if(ye instanceof HTMLInputElement){ye.value=String(Math.round(E.nodeScale*100));let t=()=>{E.nodeScale=Number(ye.value)/100,$e(E),B(),r.use3d&&K()};ye.addEventListener("input",t),window.addCleanup(()=>ye.removeEventListener("input",t))}if(we instanceof HTMLInputElement){we.value=String(Math.round(E.edgeScale*100));let t=()=>{E.edgeScale=Number(we.value)/100,$e(E),B()};we.addEventListener("input",t),window.addCleanup(()=>we.removeEventListener("input",t))}let ke=r.root.querySelector("[data-graph-zoom]");if(ke instanceof HTMLInputElement){ke.value=String(Math.round(E.zoom*100));let t=()=>{E.zoom=Number(ke.value)/100,$e(E),w(200)};ke.addEventListener("input",t),window.addCleanup(()=>ke.removeEventListener("input",t))}let Le=r.root.querySelector("[data-graph-spread]");if(Le instanceof HTMLInputElement){Le.value=String(Math.round(E.spread*100));let t=()=>{E.spread=Number(Le.value)/100,$e(E),S(),e.d3ReheatSimulation()};Le.addEventListener("input",t),window.addCleanup(()=>Le.removeEventListener("input",t))}fe(!1),r.root.addEventListener("click",bt),window.addCleanup(()=>r.root.removeEventListener("click",bt));let yt=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){fe(!1);return}be()}};window.addEventListener("keydown",yt),window.addCleanup(()=>window.removeEventListener("keydown",yt))}function br(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function yr(){try{return window.localStorage.getItem(gt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function qt(e){try{if(e){window.localStorage.setItem(gt,"stopped");return}window.localStorage.removeItem(gt)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function wr(e){let n=performance.now(),o=0,r=c=>{let u=Math.min(1,(c-n)/e.durationMs),g=u*u;e.apply(e.from+(e.to-e.from)*g),u<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function kr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,c=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof c=="function"&&c();let u=r.YT;if(!u||typeof u.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(u)},!document.querySelector("script[data-graph-youtube-api]")){let u=document.createElement("script");u.src=vn,u.async=!0,u.dataset.graphYoutubeApi="1",u.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(u)}})}function Lr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:e.videoId,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Tr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",c=e.dataset.audioPlay??"Play music",u=kt(e.dataset.graphAmbientVideoId)??Ln,g=null,L=!1,v=null,C=!yr(),_=!1,b=x=>{n.setAttribute("aria-pressed",x?"true":"false"),n.setAttribute("aria-label",x?r:c),n.title=x?r:c,n.dataset.playing=x?"true":"false"},U=()=>{v&&(v(),v=null)},D=x=>{g&&g.setVolume(Math.max(0,Math.min(Ve,x)))},E=x=>{!C||_||(_=!0,b(!0),x.unMute(),D(0),x.playVideo(),U(),v=wr({from:0,to:Ve,durationMs:Tn,apply:D}))},P=()=>{C=!1,_=!1,U(),qt(!0),g&&(g.mute(),g.pauseVideo(),D(0)),b(!1)},F=async()=>{if(!g)try{let x=await kr();if(g)return;g=Lr({api:x,host:o,videoId:u,onReady:G=>{L=!0,G.mute(),D(0),G.playVideo()},onEnded:G=>{C&&(G.playVideo(),D(Ve))}})}catch(x){console.error("[graph-landing] ambient audio unavailable",x)}},V=x=>{let G=x.target;if(!(G instanceof Element&&G.closest("[data-graph-audio-toggle]"))&&!(!C||_||br())){if(L&&g){E(g);return}F()}},O=()=>{if(C&&_){P();return}if(C=!0,qt(!1),L&&g){E(g);return}F()},q=()=>{if(g){if(document.hidden){U(),g.pauseVideo();return}C&&_&&(g.playVideo(),D(Ve))}};b(C),F(),n.addEventListener("click",O),e.addEventListener("pointerdown",V,!0),e.addEventListener("touchstart",V,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",q),window.addCleanup(()=>{n.removeEventListener("click",O),e.removeEventListener("pointerdown",V,!0),e.removeEventListener("touchstart",V,!0),document.removeEventListener("visibilitychange",q),U(),g&&(g.pauseVideo(),g.destroy(),g=null)})}async function vr(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Tr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",c=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",u=(e.dataset.localePrefixes??"").split(",").map(M=>M.trim()).filter(M=>M.length>0),g=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",L=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",v=e.dataset.graphIndexPath??"",C=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,_=C!==void 0&&Number.isFinite(C)&&C>=0?C:void 0,b=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,U=Number.isFinite(b)?b:1,D=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,E=e.dataset.graphRenderMode==="3d"?"3d":"auto",P=e.dataset.graphLayoutFreezeAfterWarmup==="true",F=e.dataset.graphLayoutWarmupTicks?Number.parseInt(e.dataset.graphLayoutWarmupTicks,10):void 0,V=F!==void 0&&Number.isFinite(F)&&F>=0?F:void 0,O=e.dataset.graphLayoutCooldownTicks?Number.parseInt(e.dataset.graphLayoutCooldownTicks,10):void 0,q=O!==void 0&&Number.isFinite(O)&&O>=0?O:void 0,x=e.dataset.graphLayoutChargeTheta?Number.parseFloat(e.dataset.graphLayoutChargeTheta):void 0,G=x!==void 0&&Number.isFinite(x)&&x>=0?x:void 0,W=e.dataset.graphLodLabelDistance?Number.parseFloat(e.dataset.graphLodLabelDistance):void 0,ie=W!==void 0&&Number.isFinite(W)&&W>=0?W:void 0,z=e.dataset.graphLodDotDistance?Number.parseFloat(e.dataset.graphLodDotDistance):void 0,Z=z!==void 0&&Number.isFinite(z)&&z>=0?z:void 0,te=e.dataset.graphLodCullDistance?Number.parseFloat(e.dataset.graphLodCullDistance):void 0,J=te!==void 0&&Number.isFinite(te)&&te>=0?te:void 0,f=e.dataset.graphLodFog==="true",p=e.dataset.graphLodNodeResolution?Number.parseInt(e.dataset.graphLodNodeResolution,10):void 0,w=p!==void 0&&Number.isFinite(p)&&p>=0?p:void 0,S=e.dataset.graphLodLinkResolution?Number.parseInt(e.dataset.graphLodLinkResolution,10):void 0,A=S!==void 0&&Number.isFinite(S)&&S>=0?S:void 0,N=e.dataset.graphInteractionIncrementalRepaint==="true",oe=e.dataset.graphLodShareLinkResources==="true",ne=!1,Y=null,le={current:Jt()},pe=()=>{ne=!0,Y&&(Y._destructor(),Y=null),delete e.dataset.graphReady};window.addCleanup(pe);let Ce=tr();if(E==="3d"&&!Ce){dt(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let Q=E==="3d"||Ce,ce=lr(Q),Xe=Q?import(gn).then(M=>M.default??null).catch(M=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",M),null)):Promise.resolve(null),Me=Q?import(mn).catch(M=>(console.error("[graph-landing] three unavailable; using default node spheres",M),null)):Promise.resolve(null),K=Q?import(pn).then(M=>M.UnrealBloomPass?new M.UnrealBloomPass:null).catch(M=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",M),null)):Promise.resolve(null);ce.catch(()=>{});let Ne;try{Ne=We(L==="graphIndex"?await fetch(v).then(M=>M.json()):await fetchData)}catch(M){throw dt(n,"Graph could not load content index."),M}if(ne)return;let ae=Qn(On(Ne),{localeId:r,sourceLocale:c,prefixes:u},D),B=Tt(ae,_),he=g.replace("{n}",String(B.nodes.length)).replace("{m}",String(B.links.length));for(let M of o)M.textContent=he;let ue;try{ue=await ce}catch(M){throw dt(n,"Graph could not load. Check your network connection."),M}let[Ie,Pe,se]=await Promise.all([Xe,Me,K]);ne||(n.replaceChildren(),Y=ue(n),n.__graphLanding=Y,n.__graphData=B,hr(Y,B,le,{use3d:Q,root:e,spriteText:Ie,bloomPass:se,three:Pe,fullData:ae,expandHops:U,layout:{freezeAfterWarmup:P,warmupTicks:V,cooldownTicks:q,chargeTheta:G},lod:{labelDistance:ie,dotDistance:Z,cullDistance:J,fog:f,nodeResolution:w,linkResolution:A,shareLinkResources:oe},interaction:{incrementalRepaint:N}}))}var Er="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Er,r)}catch(c){console.error("[graph-landing] failed to persist preferred-locale",c)}});document.addEventListener("nav",()=>{vr()});\n';

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
          "data-graph-lod-share-link-resources": options.lod?.shareLinkResources ? "true" : void 0,
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