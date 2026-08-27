// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function It(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function st(e,r,o){let n=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(r)?Math.max(0,r):0,s=Number.isFinite(o)?Math.max(i,o):i;if(s===i)return i>0?.5:0;let h=Math.min(s,Math.max(i,n));return(Math.sqrt(h)-Math.sqrt(i))/(Math.sqrt(s)-Math.sqrt(i))}function Pt(e,r,o){return st(Math.max(e,r),0,o)}function Ue(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function At(e,r){let o=Ue(e,0,1),n=Ue(r,0,2);return Math.max(.5,1-o*.24*n)}function _t(e,r){let o=Ue(e,0,1),n=Ue(r,0,2);return Math.min(1.6,1+o*.3*n)}var xn=/^[A-Za-z0-9_-]{6,20}$/,Mn=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Sn=new Set(["youtu.be","www.youtu.be"]);function Ve(e){return e&&xn.test(e)?e:void 0}function Cn(e){if(!e)return;let r=e.trim(),o=Ve(r);if(o)return o;let n;try{n=new URL(r)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if(Mn.has(n.hostname)){if(n.pathname==="/watch")return Ve(n.searchParams.get("v"));let i=n.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return Ve(i[1])}if(Sn.has(n.hostname)){let i=n.pathname.split("/").filter(Boolean);if(i.length===1)return Ve(i[0])}}}function Dt(e){let r=[],o=new Set;for(let n of e){let i=n.title.trim(),s=Cn(n.url);if(!i||!s||o.has(s))continue;o.add(s);let h=n.artist?.trim();h?r.push({title:i,artist:h,videoId:s}):r.push({title:i,videoId:s})}return r}function _(e){return typeof e=="string"?e:e.id}function lt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function $e(e,r,o){let n=e.get(r);if(n)return n;let i=o();return e.set(r,i),i}function ie(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function Gt(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let n=[...e.nodes].sort((h,x)=>x.degree!==h.degree?x.degree-h.degree:h.id<x.id?-1:h.id>x.id?1:0).slice(0,Math.max(0,r)),i=new Set(n.map(h=>h.id)),s=e.links.filter(h=>{let x=_(h.source),C=_(h.target);return i.has(x)&&i.has(C)});return{nodes:n,links:s}}function Rt(e,r,o,n){let i=new Set,s=Math.max(0,Math.floor(n));if(s<=0)return i;let h=new Set([o]),x=new Set([o]);for(let C=0;C<s;C+=1){let R=new Set;for(let Y of x)for(let y of e.get(Y)??[])h.has(y)||(h.add(y),R.add(y),r.has(y)||i.add(y));x=R}return i}var Nn=2.399963229728653,it=20;function Ht(e,r,o){let n=e.x??0,i=e.y??0,s=e.z??0,h=r*Nn;return{x:n+it*Math.cos(h),y:i+it*Math.sin(h),z:o?s+it*Math.sin(h*.5):s}}function Ft(e,r,o){let n=new Set;if(r!==null){n.add(r);for(let i of e.get(r)??[])n.add(i)}if(o!==null){n.add(o);for(let i of e.get(o)??[])n.add(i)}return n}var Xe="0.179.1",In="https://esm.sh/force-graph@1.51.4",Pn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Xe}`,An=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Xe}`,_n=`https://esm.sh/three@${Xe}`,Dn=`https://esm.sh/three@${Xe}/examples/jsm/postprocessing/UnrealBloomPass.js`,Gn=8,Rn=14;var Ie=1,yt=6,Hn=.05,Fn=2.6,On=1,Ot=1,Se=.18,an="graph-landing:lens",sn="graph-landing:tune",wt="graph-landing:ambient-audio",zt="UDVtMYqUAyw",Ce=12,zn=28e3,Bn="https://www.youtube.com/iframe_api",Vn=.18,Bt=1.4,Un=1.25,$n=1.15,Wn=.55,Pe={x:330,y:235,z:565},Vt={x:0,y:0,z:0},Ye=Math.hypot(Pe.x,Pe.y,Pe.z),qn=300/Ye,Yn=1600/Ye,Ut=1.3,Kn=7.5,$t=1.05,Wt=.32,qt=.28,jn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Xn="#a8b0c2",Zn="#2a3348",Yt={min:80,max:200},Kt={min:40,max:110},jt={min:160,max:280},Xt={min:90,max:170},Zt=220,Jt=2,Jn=.15,Qn=.8,er=350,ct={min:-100,max:-190},ut={min:72,max:116},dt={min:130,max:260};function tr(e){return Ke(e-.5,0,1)}function kt(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function ft(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function nr(e){let r=[];for(let o of Object.values(e)){let n=kt(o);if(!It(n.filePath))continue;let i=typeof n.slug=="string"?n.slug:"";if(i.length===0)continue;let s=n.multilingual,h=s&&typeof s=="object"?s:void 0;r.push({slug:i,title:typeof n.title=="string"?n.title:i,links:ft(n.links),tags:ft(n.tags),externalLinks:ft(n.externalLinks),content:typeof n.content=="string"?n.content:"",multilingual:h})}return r}function rr(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=Zt?r:`${r.slice(0,Zt).trimEnd()}\\u2026`}function Ae(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function Qt(e){return Ae(e)/(2*Math.PI)}function We(e,r,o){let n=Ae(e),i=Math.acos(2*Qt(`${e}:phi`)-1),s=r+(o-r)*Qt(`${e}:r`);return{x:s*Math.sin(i)*Math.cos(n),y:s*Math.sin(i)*Math.sin(n),z:s*Math.cos(i)}}function ln(e){return e==="index"||e.endsWith("/index")}function cn(e){return e==="tags"||e.startsWith("tags/")}function or(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function un(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function gt(e,r){return e.multilingual?.locale?e.multilingual.locale:un(e.slug,r).locale}function ar(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${un(e.slug,r).permalink}`}function ir(e,r){let o=e.find(n=>gt(n,r.prefixes)===r.localeId)??e.find(n=>gt(n,r.prefixes)===r.sourceLocale)??e.find(n=>gt(n,r.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Ke(e,r,o){return Math.min(o,Math.max(r,e))}function en(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function sr(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function vt(e){return sr(e).trim().toLowerCase()}function lr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function cr(e){let r=e.trim();return r.length===0||lr(r)||cn(r)||ln(r)?!0:vt(r).length===0}function ur(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function dn(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function dr(e,r){let o=dn(e);return o===null?!1:!r.includes(new URL(o).hostname)}function tn(e){return`external:${e}`}function fr(e,r){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),i=o.pathname;return(r.get(n)??0)>1&&i.length>1?`${n}${i}`:n}function gr(e){let r=new Map,o=new Map;for(let n of e){let i=vt(n.slug);i.length>0&&!r.has(i)&&r.set(i,n.slug);let s=n.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,n.slug);let h=s.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,n.slug)}return{byBasename:r,byTitle:o}}function mr(e,r,o){if(r.has(e))return e;let n=vt(e),i=o.byBasename.get(n);if(i)return i;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return s||null}function pr(e,r){return e.length===0?"":[...e].sort((n,i)=>(r.get(i)??0)-(r.get(n)??0))[0]??""}function hr(e,r,o=void 0){let n=e.filter(u=>!ln(u.slug)&&!cn(u.slug)&&!or(u)),i=new Map;for(let u of n){let b=ar(u,r.prefixes),w=i.get(b)??[];w.push(u),i.set(b,w)}let s=[];for(let u of i.values())s.push(ir(u,r));let h=new Set(s.map(u=>u.slug)),x=gr(s),C=new Map,R=[],Y=new Set,y=new Map,te=u=>{C.set(u,(C.get(u)??0)+1)},G=(u,b,w)=>u<b?`${u}|${b}|${w}`:`${b}|${u}|${w}`,M=(u,b,w,P)=>{let A=G(u,b,w);return Y.has(A)?!1:(Y.add(A),R.push({source:u,target:b,kind:w}),P&&(te(u),te(b)),!0)};for(let u of s)for(let b of u.links){if(cr(b))continue;let w=mr(b,h,x);w!==null&&w!==u.slug&&M(u.slug,w,"wikilink",!0)}let L=ur(),K=new Set;for(let u of s)for(let b of u.externalLinks){let w=dn(b);w===null||!dr(w,L)||(K.add(w),M(u.slug,tn(w),"external",!0))}let j=new Map;for(let u of K){let b=new URL(u).hostname.replace(/^www\\./,"");j.set(b,(j.get(b)??0)+1)}let H=new Set,z=new Map;for(let u of s)for(let b of u.tags){y.set(b,(y.get(b)??0)+1);let w=`tag:${b}`;H.add(w),M(u.slug,w,"tag",!0);let P=z.get(b)??[];P.push(u.slug),z.set(b,P)}if(o!==!1){let u=o?.maxTagsPerNote,b=o?.maxEdges,w=0;e:for(let P of s)if(!(P.tags.length<2)&&!(u!==void 0&&P.tags.length>u))for(let A=0;A<P.tags.length;A+=1)for(let D=A+1;D<P.tags.length;D+=1){if(b!==void 0&&w>=b)break e;M(`tag:${P.tags[A]}`,`tag:${P.tags[D]}`,"cooc",!1)&&(w+=1)}}let F=new Map;for(let u of s){let b=en(u.slug);if(b==="root")continue;let w=F.get(b)??[];w.push(u.slug),F.set(b,w)}for(let u of F.values()){if(u.length<2)continue;let b=[...u].sort();for(let w=0;w<b.length;w+=1){let P=b[(w+1)%b.length],A=b[(w+Jt)%b.length],D=b[w];D===void 0||P===void 0||(D!==P&&!Y.has(G(D,P,"wikilink"))&&M(D,P,"folder",!1),b.length>Jt+1&&A!==void 0&&D!==A&&!Y.has(G(D,A,"wikilink"))&&M(D,A,"folder",!1))}}let Q=[...C.values()],Z=Q.length>0?Math.min(...Q):0,J=Q.length>0?Math.max(...Q):0,V=u=>{let b=st(C.get(u)??0,Z,J);return Ie+b*(yt-Ie)},B=[...s].sort((u,b)=>(C.get(b.slug)??0)-(C.get(u.slug)??0)),W=new Set(B.filter(u=>(C.get(u.slug)??0)>0).slice(0,Gn).map(u=>u.slug)),q=s.map(u=>{let b=W.has(u.slug),w=b?We(u.slug,Kt.min,Kt.max):We(u.slug,Yt.min,Yt.max);return{id:u.slug,name:u.title,type:"note",val:V(u.slug),degree:C.get(u.slug)??0,isHub:b,tag:"",slug:u.slug,url:"",folder:en(u.slug),tags:u.tags,dominantTag:pr(u.tags,y),excerpt:rr(u.content),phase:Ae(u.slug),x:w.x,y:w.y,z:w.z}});for(let u of K){let b=tn(u),w=We(b,jt.min,jt.max);q.push({id:b,name:fr(u,j),type:"external",val:V(b)*Wn,degree:C.get(b)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:Ae(b),x:w.x,y:w.y,z:w.z})}for(let u of H){let b=u.slice(4),w=We(u,Xt.min,Xt.max);q.push({id:u,name:b,type:"tag",val:Ke(V(u)*.7,Ie,yt),degree:C.get(u)??0,isHub:!1,tag:b,slug:`tags/${b}`,url:"",folder:"tag",tags:[b],dominantTag:b,excerpt:"",phase:Ae(u),x:w.x,y:w.y,z:w.z})}return{nodes:q,links:R}}function mt(e){let r=new Map,o=(n,i)=>{let s=r.get(n)??new Set;s.add(i),r.set(n,s)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let i=_(n.source),s=_(n.target);o(i,s),o(s,i)}return r}function he(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function fn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:he("--light","#ffffff"),ink:he("--darkgray","#0f0f0f"),accent:he("--secondary","#a52142"),tertiary:he("--tertiary","#c75b75"),gray:he("--gray","#737373"),external:he("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function qe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function br(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function yr(){return br()&&!qe()}function X(){return document.documentElement.getAttribute("saved-theme")==="dark"}function je(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function be(e,r){let o=je(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function le(e,r,o){let n=je(e),i=je(r);if(!n||!i)return e;let s=(h,x)=>Math.round(h+(x-h)*o);return`rgb(${s(n.r,i.r)}, ${s(n.g,i.g)}, ${s(n.b,i.b)})`}function gn(e){return X()?le(e.bg,"#05070f",.88):e.bg}function wr(e){let r=je(e);if(!r)return e;let o=n=>{let i=n/255,s=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.round(s*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function kr(e){return wr(gn(e))}function mn(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function nn(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:mn(e,[r.accent,r.tertiary,r.ink,r.gray])}function vr(e,r){return e.length===0?r.ink:mn(e,[r.accent,r.tertiary])}function pn(e){let r=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let i=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function Tr(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let r=pn(e);window.location.assign(r.toString())}function Lr(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Er(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function pt(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function xr(e){let o=await import(e?Pn:In);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Er(o)}function Mr(){try{let e=sessionStorage.getItem(an);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Sr(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1,hubGravity:1};try{let r=sessionStorage.getItem(sn);if(!r)return e;let o=kt(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread,x=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:i,zoom:s,spread:h,hubGravity:x}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function Ne(e){try{sessionStorage.setItem(sn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function ht(e){try{sessionStorage.setItem(an,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function Cr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Nr(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function Ir(e,r){return e.type==="note"&&e.folder===r}function rn(e,r){let o=_(r),n=e.find(i=>i.id===o);return!n||n.type!=="note"?null:n.folder}function Pr(e,r,o){let n=new Map;if(r==="folder"){let i=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return i.forEach((s,h)=>{let x=Math.PI*2*h/Math.max(i.length,1),C={x:Math.cos(x)*o,y:Math.sin(x)*o,z:0};for(let R of e.nodes)R.type==="note"&&R.folder===s&&n.set(R.id,C)}),n}if(r==="tag"){let i=e.nodes.filter(h=>h.type==="tag"),s=new Map;i.forEach((h,x)=>{let C=Math.PI*2*x/Math.max(i.length,1);s.set(h.tag,{x:Math.cos(C)*o,y:Math.sin(C)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let x=s.get(h.tag);x&&n.set(h.id,x)}else if(h.dominantTag.length>0){let x=s.get(h.dominantTag);x&&n.set(h.id,x)}}return n}function Ar(e,r){let o=[],n=i=>{let s=r*i;for(let h of o){let x=e(h);x&&(h.vx=(h.vx??0)+(x.x-(h.x??0))*s,h.vy=(h.vy??0)+(x.y-(h.y??0))*s,h.vz=(h.vz??0)+(x.z-(h.z??0))*s)}};return n.initialize=i=>{o=i},n}function on(e,r,o,n){for(let i of e.querySelectorAll(r)){if(!(i instanceof HTMLElement))continue;let s=i.getAttribute(n);i.setAttribute("aria-pressed",s===o?"true":"false")}}function _r(e,r,o,n){let i=mt(r.links),s=(t,a,l)=>t<a?`${t}|${a}|${l}`:`${a}|${t}|${l}`,h=new Map,x=new Map,C=new Set,R=new Set;n.fullData!==r&&(h=new Map(n.fullData.nodes.map(t=>[t.id,t])),x=mt(n.fullData.links),C=new Set(r.nodes.map(t=>t.id)),R=new Set(r.links.map(t=>s(_(t.source),_(t.target),t.kind))));let Y=t=>{if(n.fullData===r)return!1;let a=Rt(x,C,t,n.expandHops);if(a.size===0)return!1;let l=n.layout.incrementalWarmup?h.get(t):void 0,d=0;for(let f of a){let c=h.get(f);if(c){if(l&&c.x===void 0){let m=Ht(l,d,n.use3d);c.x=m.x,c.y=m.y,c.z=m.z,d+=1}r.nodes.push(c),C.add(f)}}for(let f of n.fullData.links){let c=_(f.source),m=_(f.target);if(!C.has(c)||!C.has(m))continue;let g=s(c,m,f.kind);R.has(g)||(R.add(g),r.links.push(f))}return i=mt(r.links),!0},y={lens:Mr(),allLabels:!1,focusTag:null,focusFolder:null},te=null,G=null,M=Sr(),L=()=>G??te,K=new Set(r.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,Rn).map(t=>t.id)),j=t=>{let a=t.val;return t.isHub&&(a*=Bt),y.lens==="tag"&&t.type==="tag"&&(a*=Un),y.focusTag&&t.id===`tag:${y.focusTag}`&&(a*=$n),a},H=t=>{let a=L();return y.allLabels||a===t.id||a!==null&&(i.get(a)?.has(t.id)??!1)?!0:K.has(t.id)},z=t=>{let a=yt*Bt,l=Ke((j(t)-Ie)/(a-Ie),0,1);return(Ut+l*(Kn-Ut))*M.nodeScale},F=t=>{let a=L();if(a!==null)return a===t||(i.get(a)?.has(t)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let l=r.nodes.find(d=>d.id===t);return l?y.focusFolder!==null?Ir(l,y.focusFolder):y.focusTag!==null&&Nr(l,y.focusTag):!1},Q=t=>t.type==="external"?o.current.external:y.lens==="tag"?t.type==="tag"?o.current.tertiary:vr(t.dominantTag,o.current):y.lens==="folder"?t.type==="tag"?o.current.tertiary:nn(t.folder,o.current):y.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,Z=t=>{let a=L();if(a!==null&&(a===t.id||(i.get(a)?.has(t.id)??!1)))return o.current.accent;let l=Q(t);return F(t.id)?X()?t.type==="external"?le(o.current.external,"#ffffff",.18):t.type==="tag"?le(o.current.tertiary,"#ffffff",.22):t.isHub?le("#fff3e4",o.current.accent,.1):le("#ffffff",o.current.accent,.12):t.type==="external"?le(o.current.external,"#08343a",.12):t.type==="tag"?le(o.current.tertiary,o.current.accent,.55):t.isHub?le(o.current.ink,o.current.accent,.22):l:be(l,Se)},J=t=>{let a=X();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},V=t=>{let a=_(t.source),l=_(t.target),d=L();return d!==null&&(a===d||l===d)?X()?.72:.78:(d!==null||y.focusTag!==null||y.focusFolder!==null)&&(!F(a)||!F(l))?J(t.kind)*Se:J(t.kind)},B=t=>{let a=_(t.source),l=_(t.target),d=L(),f=X()?Xn:Zn;return d!==null&&(a===d||l===d)?le(o.current.accent,f,.45):f},W=t=>be(B(t),V(t)),q=()=>r,u=t=>{let a=X()?"rgba(255, 255, 255, 1)":be(o.current.ink,.88);return F(t.id)?a:be(a,Se)},b=t=>X()?F(t.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",w=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:Pe,len:Ye}},P=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=Ye/Ke(M.zoom,.4,2.5),{dir:l,len:d}=w(),f=a/d;e.cameraPosition({x:l.x*f,y:l.y*f,z:l.z*f},Vt,t),et();return}typeof e.zoom=="function"&&e.zoom(M.zoom,t)},A=()=>{let t=tr(M.spread),a=ct.min+t*(ct.max-ct.min),l=ut.min+t*(ut.max-ut.min),d=new Map(r.nodes.map(S=>[S.id,S.degree])),f=Math.max(0,...d.values()),c=S=>Pt(d.get(_(S.source))??0,d.get(_(S.target))??0,f),m=e.d3Force("charge");m?.strength&&m.strength(a),m?.theta&&n.layout.chargeTheta!==void 0&&m.theta(n.layout.chargeTheta);let g=e.d3Force("link");g?.distance&&g.distance(S=>{let O=At(c(S),M.hubGravity);return y.lens==="tag"&&S.kind==="tag"?l*.72*O:S.kind==="cooc"||S.kind==="folder"?l:l*O}),g?.strength&&g.strength(S=>{if(S.kind==="cooc"||S.kind==="folder")return .04;let O=_t(c(S),M.hubGravity);if(y.lens==="tag"&&S.kind==="tag")return Math.min(1,.95*O);if(y.lens==="folder"){let de=rn(r.nodes,S.source),at=rn(r.nodes,S.target);if(de!==null&&de===at)return Math.min(1,.72*O)}return S.kind==="tag"?Math.min(1,.65*O):Math.min(1,.8*O)});let p=e.d3Force("center");p?.strength&&p.strength(Hn);let T=dt.min+t*(dt.max-dt.min),v=Pr(r,y.lens,T),$=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",Ar(S=>v.get(S.id)??null,$)),n.use3d&&e.d3Force("flattenZ",null)},D=new Map,ne=new Map,re=new Map,oe=new Map,ee=new Map,se=new Map,ce=new Map,k=(t,a,l)=>{let d=`${Math.round(a*4)}|${l}`;return $e(ce,d,()=>({geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:l})}))},N=new Map,I=new Map,E=(t,a,l)=>{let d=`${a}|${l}`;return $e(N,d,()=>new t.CylinderGeometry(a,a,1,l))},fe=(t,a,l)=>{let d=`${a}|${l}`;return $e(I,d,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:l,depthWrite:!1}))},ae=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,a=n.three,l=n.lod.dotDistance,d=n.lod.nodeResolution??14,f=n.interaction.incrementalRepaint;if(D.clear(),ne.clear(),ce.clear(),oe.clear(),ee.clear(),f)for(let c of r.nodes)ee.set(c.id,c);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(c=>{let m=z(c),g=Z(c),p=!1;if(a){if(X()){let S=c.isHub?1.35:1.1,O=new a.MeshLambertMaterial({color:g,emissive:g,emissiveIntensity:S});D.set(c.id,{material:O,base:S,phase:c.phase}),f&&oe.set(c.id,O),p=new a.Mesh(new a.SphereGeometry(m,d,d),O)}else{let S=new a.MeshBasicMaterial({color:g});f&&oe.set(c.id,S),p=new a.Mesh(new a.SphereGeometry(m,d,d),S)}if(l!==void 0&&p!==!1){let S=k(a,m,g),O=new a.Mesh(S.geometry,S.material),de=new a.LOD;de.addLevel(p,0),de.addLevel(O,l),p=de}}let T=H(c);if(!t||!f&&!T)return p;let v=new t(c.name);if(v.color=u(c),v.backgroundColor=!1,v.fontWeight="400",v.strokeWidth=X()?.35:0,v.strokeColor=b(c),v.material.transparent=!0,v.material.depthWrite=!1,v.material.alphaTest=.01,v.material.toneMapped=!1,v.textHeight=K.has(c.id)?6.5:5.5,v.center.set(0,.5),v.position.x=m+2,v.position.y=0,f?(v.visible=T,ne.set(c.id,{sprite:v,node:c})):n.lod.labelDistance!==void 0&&ne.set(c.id,{sprite:v,node:c}),!a||p===!1)return v;let $=new a.Group;return $.add(p),$.add(v),$})},ye=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),l=n.lod.linkResolution??5,d=n.lod.cullDistance,f=n.interaction.incrementalRepaint,c=n.lod.shareLinkResources;if(re.clear(),se.clear(),N.clear(),I.clear(),f)for(let m of r.links){let g=_(m.source),p=_(m.target);for(let T of[g,p]){let v=se.get(T);v?v.push(m):se.set(T,[m])}}e.linkThreeObject(m=>{let g=jn[m.kind]*M.edgeScale,p=c?fe(t,B(m),V(m)):new t.MeshBasicMaterial({color:B(m),transparent:!0,opacity:V(m),depthWrite:!1}),T=c?E(t,g,l):new t.CylinderGeometry(g,g,1,l),v=new t.Mesh(T,p);return(d!==void 0||f)&&re.set(m,v),v}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((m,g)=>{let p=g.end.x-g.start.x,T=g.end.y-g.start.y,v=g.end.z-g.start.z,$=Math.sqrt(p*p+T*T+v*v);return m.position.x=(g.start.x+g.end.x)/2,m.position.y=(g.start.y+g.end.y)/2,m.position.z=(g.start.z+g.end.z)/2,m.scale.x=1,m.scale.y=Math.max($,.01),m.scale.z=1,m.quaternion.setFromUnitVectors(a,new t.Vector3(p,T,v).normalize()),!0})},Tt=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=L();if(a===null)return 0;let l=_(t.source),d=_(t.target);return l===a||d===a?2:0})},ge=()=>{e.nodeVal(j),e.nodeColor(Z),e.linkColor(W),e.linkWidth(t=>{let a=_(t.source),l=_(t.target),d=L(),f=M.edgeScale;return d!==null&&(a===d||l===d)?.7*f:t.kind==="wikilink"||t.kind==="external"?.5*f:(t.kind==="tag"?.35:.25)*f}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ot),Tt(),ye(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},hn=(t,a)=>{let l=Ft(i,t,a),d=new Set;for(let f of l){let c=ee.get(f);if(!c)continue;let m=Z(c);oe.get(f)?.color.set(m);let g=D.get(f);g&&g.material.emissive.set(m);let p=ne.get(f);p&&(p.sprite.color=u(c),p.sprite.strokeColor=b(c),p.sprite.strokeWidth=X()?.35:0,p.sprite.visible=H(c));for(let T of se.get(f)??[]){if(d.has(T))continue;d.add(T);let v=re.get(T);v&&(n.lod.shareLinkResources&&n.three?v.material=fe(n.three,B(T),V(T)):(v.material.color.set(B(T)),v.material.opacity=V(T)))}}},Ze=t=>{if(n.interaction.incrementalRepaint&&n.use3d){Tt(),hn(t,L());return}ge(),n.use3d&&ae()},Je=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(c,m)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let p=document.createElement("span");p.className="graph-landing__dot",p.setAttribute("aria-hidden","true"),p.style.background=c;let T=document.createElement("span");return T.textContent=m,g.append(p,T),g},l=n.root.dataset.legendNotes??"Notes",d=n.root.dataset.legendTags??"Tags",f=n.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,l),a(o.current.tertiary,d),a(o.current.external,f))},Lt=t=>{let a=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let d=document.createElement("span");if(d.className="graph-landing__facet-name",t.dotColor!==null){let c=document.createElement("span");c.className="graph-landing__dot",c.style.background=t.dotColor,d.append(c)}d.append(document.createTextNode(t.label));let f=document.createElement("span");return f.className="graph-landing__tag-count",f.textContent=String(t.count),l.append(d,f),a.append(l),a},Et=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),l=n.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let f=n.root.dataset.folderRootLabel??"root",c=new Map;for(let g of r.nodes)g.type==="note"&&c.set(g.folder,(c.get(g.folder)??0)+1);let m=[...c.entries()].sort((g,p)=>p[1]-g[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=m.length===0),t.replaceChildren(...m.map(([g,p])=>Lt({dataset:{key:"graphFolder",value:g},pressed:y.focusFolder===g,dotColor:nn(g,o.current),label:g==="root"?f:g,count:p})));return}let d=r.nodes.filter(f=>f.type==="tag").sort((f,c)=>c.degree-f.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=d.length===0),t.replaceChildren(...d.map(f=>Lt({dataset:{key:"graphTag",value:f.tag},pressed:y.focusTag===f.tag,dotColor:null,label:f.tag,count:f.degree})))},we=null;n.layout.incrementalWarmup&&typeof e.onFinishUpdate=="function"&&e.onFinishUpdate(()=>{we!==null&&(e.warmupTicks(we),we=null)});let bn=()=>{!n.layout.incrementalWarmup||typeof e.onFinishUpdate!="function"||(we===null&&(we=e.warmupTicks()),e.warmupTicks(0))},ke=()=>{e.graphData(q()),A(),ge(),ae(),Je(),Et(),on(n.root,"[data-graph-lens]",y.lens,"data-graph-lens"),e.d3ReheatSimulation()},yn=t=>{y.lens=t,t!=="tag"&&(y.focusTag=null),t!=="folder"&&(y.focusFolder=null),ht(t),ke()},wn=t=>{y.focusTag=y.focusTag===t?null:t,y.focusFolder=null,y.focusTag&&(y.lens="tag",ht("tag")),ke()},kn=t=>{y.focusFolder=y.focusFolder===t?null:t,y.focusTag=null,y.focusFolder&&(y.lens="folder",ht("folder")),ke()},Qe=()=>n.use3d?kr(o.current):gn(o.current),et=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let t=w().len;e.scene().fog=new n.three.Fog(Qe(),t*qn,t*Yn)};e.graphData(q()),e.backgroundColor(Qe()),e.nodeLabel(t=>t.name),e.nodeRelSize(Fn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(On),typeof e.linkOpacity=="function"&&e.linkOpacity(Ot),A(),ge();let me=n.root.querySelector("[data-graph-preview]"),_e=n.root.querySelector("[data-graph-preview-chip]"),De=n.root.querySelector("[data-graph-preview-title]"),Ge=n.root.querySelector("[data-graph-preview-excerpt]"),Re=0;window.addCleanup(()=>window.clearTimeout(Re));let vn=t=>{if(!(me instanceof HTMLElement)||!(_e instanceof HTMLElement)||!(De instanceof HTMLElement)||!(Ge instanceof HTMLElement))return;window.clearTimeout(Re);let a=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",d=n.root.dataset.legendLinks??"Links";if(t.type==="tag"){let f=n.root.dataset.previewTagTemplate??"{n} notes";_e.textContent=l,De.textContent=`#${t.tag}`,Ge.textContent=f.replace("{n}",String(t.degree))}else t.type==="external"?(_e.textContent=d,De.textContent=t.name,Ge.textContent=t.url):(_e.textContent=a,De.textContent=t.name,Ge.textContent=t.excerpt);me.hidden=!1,me.dataset.visible="true"},xt=()=>{me instanceof HTMLElement&&(window.clearTimeout(Re),Re=window.setTimeout(()=>{me.dataset.visible="false",me.hidden=!0},er))};if(e.onNodeHover(t=>{let a=L();te=t?t.id:null,G===null&&(t?vn(t):xt()),Ze(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!qe()&&typeof e.controls=="function"){let l=e.controls();l.autoRotate=!1,l.autoRotateSpeed=Vn;let d=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(d))}if(e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),n.bloomPass&&typeof e.postProcessingComposer=="function"&&(n.bloomPass.strength=X()?$t:0,n.bloomPass.radius=Wt,n.bloomPass.threshold=qt,e.postProcessingComposer().addPass(n.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(Pe,Vt),M.zoom!==1&&P(0)),ae(),et(),!qe()){let l=0,d=()=>{let f=performance.now()/1e3*Qn;for(let c of D.values())c.material.emissiveIntensity=c.base*(1+Jn*Math.sin(f+c.phase));l=window.requestAnimationFrame(d)};l=window.requestAnimationFrame(d),window.addCleanup(()=>window.cancelAnimationFrame(l))}let t=n.lod.labelDistance,a=n.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let l=e.cameraPosition.bind(e),d=0,f=()=>{let c=l();if(c&&typeof c.x=="number"&&typeof c.y=="number"&&typeof c.z=="number"){if(t!==void 0)for(let m of ne.values()){let g=m.node.x??0,p=m.node.y??0,T=m.node.z??0,v=Math.hypot(c.x-g,c.y-p,c.z-T);m.sprite.visible=lt(v,t)==="full"}if(a!==void 0){let m=L();for(let[g,p]of re){let T=_(g.source),v=_(g.target);if(m!==null&&(T===m||v===m)){p.visible=!0;continue}let $=Math.hypot(c.x-p.position.x,c.y-p.position.y,c.z-p.position.z);p.visible=lt($,a)!=="dot"}}}d=window.requestAnimationFrame(f)};d=window.requestAnimationFrame(f),window.addCleanup(()=>window.cancelAnimationFrame(d))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,l)=>{let d=z(t),f=t.x??0,c=t.y??0;if(a.save(),a.beginPath(),a.arc(f,c,d,0,Math.PI*2),a.fillStyle=Z(t),a.fill(),t.isHub&&(a.strokeStyle=F(t.id)?o.current.accent:be(o.current.accent,Se),a.lineWidth=1.2/l,a.stroke()),H(t)){let m=11.5/l;a.font=`${m}px ${o.current.font}`,a.fillStyle=F(t.id)?o.current.ink:be(o.current.ink,Se),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,f,c-d-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,l)=>{let d=z(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,d,0,Math.PI*2),l.fillStyle=a,l.fill()});let He=n.root.querySelector("[data-graph-inspect]"),Fe=n.root.querySelector("[data-graph-inspect-chip]"),Oe=n.root.querySelector("[data-graph-inspect-title]"),ze=n.root.querySelector("[data-graph-inspect-excerpt]"),tt=n.root.querySelector("[data-graph-inspect-tags]"),nt=n.root.querySelector("[data-graph-inspect-connected]"),U=n.root.querySelector("[data-graph-inspect-open]"),pe=t=>{n.root.dataset.railOpen=t?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),l=n.root.querySelector("[data-graph-rail-scrim]"),d=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),d instanceof HTMLElement&&d.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},Be=t=>{qe()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Tn=t=>{let a=i.get(t.id)??new Set,l=[];for(let d of a){let f=r.nodes.find(c=>c.id===d);f&&l.push(f)}return l.sort((d,f)=>f.degree-d.degree)},Ln=t=>{if(!(He instanceof HTMLElement)||!(Fe instanceof HTMLElement)||!(Oe instanceof HTMLElement)||!(ze instanceof HTMLElement)||!(tt instanceof HTMLElement)||!(nt instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",d=n.root.dataset.legendLinks??"Links",f=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Fe.textContent=l,Oe.textContent=`#${t.tag}`,ze.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Fe.textContent=d,Oe.textContent=t.name,ze.textContent=t.url):(Fe.textContent=a,Oe.textContent=t.name,ze.textContent=t.excerpt);let c=t.tags.map(g=>{let p=document.createElement("li");return p.textContent=g,p});tt.replaceChildren(...c),tt.hidden=c.length===0;let m=Tn(t).slice(0,12);if(m.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=f,nt.replaceChildren(g)}else nt.replaceChildren(...m.map(g=>{let p=document.createElement("li"),T=document.createElement("button");T.type="button",T.className="graph-landing__inspect-link",T.dataset.graphInspectId=g.id;let v=g.type==="tag"?l:g.type==="external"?d:a,$=document.createElement("span");$.textContent=v;let S=document.createElement("strong");return S.textContent=g.type==="tag"?`#${g.tag}`:g.name,T.append($,S),p.append(T),p}));U instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(U.hidden=!1,U.href=pn(t.slug).toString(),U.textContent=n.root.dataset.inspectRead??"Read note",U.removeAttribute("target"),U.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(U.hidden=!1,U.href=t.url,U.textContent=n.root.dataset.inspectOpenExternal??"Open",U.target="_blank",U.rel="noopener noreferrer"):(U.hidden=!0,U.removeAttribute("href"),U.removeAttribute("target"),U.removeAttribute("rel"))),He.hidden=!1,n.root.dataset.inspecting="true",pe(!1),xt()},ve=()=>{let t=L();G=null,He instanceof HTMLElement&&(He.hidden=!0),n.root.dataset.inspecting="false",Be(!0),Ze(t)},En=t=>{if(G===t.id&&t.type==="note"&&t.slug.length>0){Tr(t.slug);return}if(G===t.id&&t.type==="external"&&t.url.length>0){Lr(t.url);return}let a=L();G=t.id,Ln(t),Ze(a)},rt=t=>{Y(t.id)&&(bn(),ke()),En(t)},ot=!1;e.onNodeClick((t,a)=>{t&&(ot=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),rt(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{ve(),pe(!1)});let ue=n.root.querySelector("#graph-landing-mount");if(ue instanceof HTMLElement){let t=null,a=c=>{t={x:c.clientX,y:c.clientY},Be(!1)},l=(c,m)=>{if(typeof e.graph2ScreenCoords!="function")return null;let g=ue.getBoundingClientRect(),p=c-g.left,T=m-g.top,v=null,$=4096;for(let S of q().nodes){if(S.x===void 0||S.y===void 0)continue;let O=e.graph2ScreenCoords(S.x,S.y,S.z??0),de=(O.x-p)**2+(O.y-T)**2,at=(O.x-c)**2+(O.y-m)**2,Nt=Math.min(de,at);Nt<$&&($=Nt,v=S)}return v},d=c=>{let m=t;t=null,Be(!0),!(!m||(c.clientX-m.x)**2+(c.clientY-m.y)**2>25)&&window.setTimeout(()=>{if(ot){ot=!1;return}let p=l(c.clientX,c.clientY);p?rt(p):ve()},0)},f=()=>{t=null,Be(!0)};ue.addEventListener("pointerdown",a,!0),ue.addEventListener("pointerup",d,!0),ue.addEventListener("pointercancel",f,!0),window.addCleanup(()=>{ue.removeEventListener("pointerdown",a,!0),ue.removeEventListener("pointerup",d,!0),ue.removeEventListener("pointercancel",f,!0)})}on(n.root,"[data-graph-lens]",y.lens,"data-graph-lens"),Je(),Et(),y.lens!=="all"&&ke(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Mt=()=>{o.current=fn(),e.backgroundColor(Qe()),et(),n.bloomPass&&(n.bloomPass.strength=X()?$t:0,n.bloomPass.radius=Wt,n.bloomPass.threshold=qt),ge(),ae(),Je()};document.addEventListener("themechange",Mt),window.addCleanup(()=>document.removeEventListener("themechange",Mt));let St=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){ve();return}if(a.closest("[data-graph-rail-toggle]")){let p=n.root.dataset.railOpen!=="true";p&&ve(),pe(p);return}if(a.closest("[data-graph-rail-scrim]")){pe(!1);return}let l=a.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let p=n.fullData.nodes.find(T=>T.id===l.dataset.graphInspectId);p&&rt(p);return}let d=a.closest("[data-graph-lens]");if(d instanceof HTMLElement&&d.dataset.graphLens&&Cr(d.dataset.graphLens)){yn(d.dataset.graphLens);return}let f=a.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){wn(f.dataset.graphTag);return}let c=a.closest("[data-graph-folder]");if(c instanceof HTMLElement&&c.dataset.graphFolder){kn(c.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let m=a.closest("[data-graph-labels]");if(m instanceof HTMLButtonElement){y.allLabels=!y.allLabels,m.setAttribute("aria-pressed",y.allLabels?"true":"false");let p=m.dataset.labelShow??"Labels",T=m.dataset.labelHide??"Labels",v=y.allLabels?T:p;m.title=v,m.setAttribute("aria-label",v),ae();return}if(a.closest("[data-graph-theme]")){let p=X()?"light":"dark";document.documentElement.setAttribute("saved-theme",p),localStorage.setItem("theme",p),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${p}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:p}}));return}let g=a.closest("[data-graph-tags-toggle]");if(g instanceof HTMLButtonElement){let p=n.root.querySelector(".graph-landing__tags");if(p instanceof HTMLElement){let T=p.dataset.open==="true";p.dataset.open=T?"false":"true",g.setAttribute("aria-expanded",T?"false":"true")}}},Te=n.root.querySelector("[data-graph-node-scale]"),Le=n.root.querySelector("[data-graph-edge-scale]");if(Te instanceof HTMLInputElement){Te.value=String(Math.round(M.nodeScale*100));let t=()=>{M.nodeScale=Number(Te.value)/100,Ne(M),ge(),n.use3d&&ae()};Te.addEventListener("input",t),window.addCleanup(()=>Te.removeEventListener("input",t))}if(Le instanceof HTMLInputElement){Le.value=String(Math.round(M.edgeScale*100));let t=()=>{M.edgeScale=Number(Le.value)/100,Ne(M),ge()};Le.addEventListener("input",t),window.addCleanup(()=>Le.removeEventListener("input",t))}let Ee=n.root.querySelector("[data-graph-hub-gravity]");if(Ee instanceof HTMLInputElement){Ee.value=String(Math.round(M.hubGravity*100));let t=()=>{let a=Number(Ee.value)/100;M.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Ne(M),A(),e.d3ReheatSimulation()};Ee.addEventListener("input",t),window.addCleanup(()=>Ee.removeEventListener("input",t))}let xe=n.root.querySelector("[data-graph-zoom]");if(xe instanceof HTMLInputElement){xe.value=String(Math.round(M.zoom*100));let t=()=>{M.zoom=Number(xe.value)/100,Ne(M),P(200)};xe.addEventListener("input",t),window.addCleanup(()=>xe.removeEventListener("input",t))}let Me=n.root.querySelector("[data-graph-spread]");if(Me instanceof HTMLInputElement){Me.value=String(Math.round(M.spread*100));let t=()=>{M.spread=Number(Me.value)/100,Ne(M),A(),e.d3ReheatSimulation()};Me.addEventListener("input",t),window.addCleanup(()=>Me.removeEventListener("input",t))}pe(!1),n.root.addEventListener("click",St),window.addCleanup(()=>n.root.removeEventListener("click",St));let Ct=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){pe(!1);return}ve()}};window.addEventListener("keydown",Ct),window.addCleanup(()=>window.removeEventListener("keydown",Ct))}function Dr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Gr(){try{return window.localStorage.getItem(wt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function bt(e){try{if(e){window.localStorage.setItem(wt,"stopped");return}window.localStorage.removeItem(wt)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function Rr(e){let r=performance.now(),o=0,n=i=>{let s=Math.min(1,(i-r)/e.durationMs),h=s*s;e.apply(e.from+(e.to-e.from)*h),s<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function Hr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let n=window,i=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let s=n.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=Bn,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function Fr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Or(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),s=e.querySelector("[data-graph-music-track-list]"),h=e.querySelector("[data-graph-music-status]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(s instanceof HTMLElement)||!(h instanceof HTMLElement))return;let x=e.dataset.audioStop??"Stop music",C=e.dataset.audioPlay??"Play music",R=e.dataset.musicLibraryOpen??"Open record collection",Y=e.dataset.musicLibraryClose??"Close record collection",y=e.dataset.musicCurrentTrack??"Current track",te=[];try{let k=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(k))for(let N of k){if(!N||typeof N!="object")continue;let I=N;typeof I.title!="string"||typeof I.url!="string"||I.artist!==void 0&&typeof I.artist!="string"||te.push({title:I.title,...typeof I.artist=="string"?{artist:I.artist}:{},url:I.url})}}catch{}let G=Dt(te);G.length===0&&G.push({title:"Ambient track",videoId:zt});let M=0,L=null,K=!1,j=null,H=!Gr(),z=!1,F=!1,Q=()=>G[M]??G[0]??{title:"Ambient track",videoId:zt},Z=k=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${k}/hqdefault.jpg")`)},J=()=>Q().videoId,V=()=>{s.replaceChildren(),G.forEach((k,N)=>{let I=document.createElement("button");I.type="button",I.className="graph-landing__music-track",I.dataset.graphMusicTrackIndex=String(N),I.setAttribute("aria-current",N===M?"true":"false");let E=document.createElement("img");E.className="graph-landing__music-track-cover",E.src=`https://i.ytimg.com/vi/${k.videoId}/hqdefault.jpg`,E.alt="",E.loading="lazy";let fe=document.createElement("span");fe.className="graph-landing__music-track-copy";let ae=document.createElement("span");if(ae.className="graph-landing__music-track-title",ae.textContent=k.title,fe.appendChild(ae),k.artist){let ye=document.createElement("span");ye.className="graph-landing__music-track-artist",ye.textContent=k.artist,fe.appendChild(ye)}I.append(E,fe),s.appendChild(I)}),h.textContent=`${y}: ${Q().title}`},B=k=>{e.dataset.musicLibraryOpen=k?"true":"false",i.hidden=!k,i.setAttribute("aria-hidden",k?"false":"true"),n.setAttribute("aria-expanded",k?"true":"false"),n.setAttribute("aria-label",k?Y:R),n.title=k?Y:R},W=k=>{r.setAttribute("aria-pressed",k?"true":"false"),r.setAttribute("aria-label",k?x:C),r.title=k?x:C,r.dataset.playing=k?"true":"false"},q=()=>{j&&(j(),j=null)},u=k=>{L&&L.setVolume(Math.max(0,Math.min(Ce,k)))},b=k=>{!H||z||(z=!0,W(!0),k.unMute(),u(0),k.playVideo(),q(),j=Rr({from:0,to:Ce,durationMs:zn,apply:u}))},w=()=>{H=!1,z=!1,q(),bt(!0),L&&(L.mute(),L.pauseVideo(),u(0)),W(!1)},P=async()=>{if(!L)try{let k=await Hr();if(L)return;L=Fr({api:k,host:o,videoId:J(),onReady:N=>{K=!0,N.mute(),u(0),N.playVideo(),H&&F&&b(N)},onEnded:N=>{if(!H)return;M=(M+1)%G.length;let I=J();Z(I),V(),N.loadVideoById(I),u(z?Ce:0)}})}catch(k){console.error("[graph-landing] ambient audio unavailable",k)}},A=k=>{let N=k.target;if(!(N instanceof Element&&N.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!H||z||Dr())){if(F=!0,K&&L){b(L);return}P()}},D=()=>{if(H&&z){w();return}if(F=!0,H=!0,bt(!1),K&&L){b(L);return}P()},ne=k=>{if(!(!Number.isInteger(k)||k<0||k>=G.length)){if(M=k,Z(J()),V(),B(!1),H=!0,F=!0,bt(!1),K&&L){L.loadVideoById(J()),z?(L.unMute(),L.playVideo(),u(Ce)):b(L);return}P()}},re=()=>{let k=e.dataset.musicLibraryOpen!=="true";if(k){e.dataset.railOpen="false";let N=e.querySelector("[data-graph-rail-toggle]"),I=e.querySelector("#graph-landing-rail"),E=e.querySelector("[data-graph-rail-scrim]");N instanceof HTMLButtonElement&&N.setAttribute("aria-expanded","false"),I instanceof HTMLElement&&I.setAttribute("aria-hidden","true"),E instanceof HTMLElement&&(E.hidden=!0)}B(k)},oe=k=>{let N=k.target;if(!(N instanceof Element))return;let I=N.closest("[data-graph-music-track-index]");I instanceof HTMLButtonElement&&ne(Number(I.dataset.graphMusicTrackIndex))},ee=k=>{if(e.dataset.musicLibraryOpen!=="true")return;let N=k.target;(!(N instanceof Element)||!N.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&B(!1)},se=k=>{k.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(B(!1),k.stopImmediatePropagation())},ce=()=>{if(L){if(document.hidden){q(),L.pauseVideo();return}H&&z&&(L.playVideo(),u(Ce))}};Z(J()),W(!1),V(),B(!1),P(),r.addEventListener("click",D),n.addEventListener("click",re),s.addEventListener("click",oe),e.addEventListener("click",ee),e.addEventListener("pointerdown",A,!0),e.addEventListener("touchstart",A,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",ce),window.addEventListener("keydown",se),window.addCleanup(()=>{r.removeEventListener("click",D),n.removeEventListener("click",re),s.removeEventListener("click",oe),e.removeEventListener("click",ee),e.removeEventListener("pointerdown",A,!0),e.removeEventListener("touchstart",A,!0),document.removeEventListener("visibilitychange",ce),window.removeEventListener("keydown",se),q(),L&&(L.pauseVideo(),L.destroy(),L=null)})}async function zr(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Or(e);let r=e.querySelector("#graph-landing-mount");if(!(r instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),n=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",i=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",s=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),h=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",x=ie(e.dataset.maxRenderedNodes,E=>Number.parseInt(E,10)),C=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,R=Number.isFinite(C)?C:1,Y=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,y=e.dataset.graphRenderMode==="3d"?"3d":"auto",te=e.dataset.graphLayoutFreezeAfterWarmup==="true",G=ie(e.dataset.graphLayoutWarmupTicks,E=>Number.parseInt(E,10)),M=ie(e.dataset.graphLayoutCooldownTicks,E=>Number.parseInt(E,10)),L=ie(e.dataset.graphLayoutChargeTheta,Number.parseFloat),K=e.dataset.graphLayoutIncrementalWarmup==="true",j=ie(e.dataset.graphLodLabelDistance,Number.parseFloat),H=ie(e.dataset.graphLodDotDistance,Number.parseFloat),z=ie(e.dataset.graphLodCullDistance,Number.parseFloat),F=e.dataset.graphLodFog==="true",Q=ie(e.dataset.graphLodNodeResolution,E=>Number.parseInt(E,10)),Z=ie(e.dataset.graphLodLinkResolution,E=>Number.parseInt(E,10)),J=e.dataset.graphInteractionIncrementalRepaint==="true",V=e.dataset.graphLodShareLinkResources==="true",B=!1,W=null,q={current:fn()},u=()=>{B=!0,W&&(W._destructor(),W=null),delete e.dataset.graphReady};window.addCleanup(u);let b=yr();if(y==="3d"&&!b){pt(r,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let w=y==="3d"||b,P=xr(w),A=w?import(An).then(E=>E.default??null).catch(E=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),null)):Promise.resolve(null),D=w?import(_n).catch(E=>(console.error("[graph-landing] three unavailable; using default node spheres",E),null)):Promise.resolve(null),ne=w?import(Dn).then(E=>E.UnrealBloomPass?new E.UnrealBloomPass:null).catch(E=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),null)):Promise.resolve(null);P.catch(()=>{});let re;try{re=kt(await fetchData)}catch(E){throw pt(r,"Graph could not load content index."),E}if(B)return;let oe=hr(nr(re),{localeId:n,sourceLocale:i,prefixes:s},Y),ee=Gt(oe,x),se=h.replace("{n}",String(ee.nodes.length)).replace("{m}",String(ee.links.length));for(let E of o)E.textContent=se;let ce;try{ce=await P}catch(E){throw pt(r,"Graph could not load. Check your network connection."),E}let[k,N,I]=await Promise.all([A,D,ne]);B||(r.replaceChildren(),W=ce(r),r.__graphLanding=W,r.__graphData=ee,_r(W,ee,q,{use3d:w,root:e,spriteText:k,bloomPass:I,three:N,fullData:oe,expandHops:R,layout:{freezeAfterWarmup:te,warmupTicks:G,cooldownTicks:M,chargeTheta:L,incrementalWarmup:K},lod:{labelDistance:j,dotDistance:H,cullDistance:z,fog:F,nodeResolution:Q,linkResolution:Z,shareLinkResources:V},interaction:{incrementalRepaint:J}}))}var Br="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(Br,n)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{zr()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  --graph-external: #3f6f8c;\n  height: 100dvh;\n  overflow: hidden;\n}\n\nhtml[saved-theme=dark]:has(.graph-landing),\nhtml[saved-theme=dark] body:has(.graph-landing) {\n  --graph-external: #8fb6c8;\n}\n\nhtml:not([saved-theme=dark]):has(.graph-landing),\nhtml:not([saved-theme=dark]) body:has(.graph-landing) {\n  --graph-external: #0f6a72;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0.02;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--secondary);\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--lightgray);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: color-mix(in srgb, var(--light) 78%, transparent);\n    border-bottom: 1px solid var(--lightgray);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 40px;\n    min-height: 40px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: color-mix(in srgb, var(--light) 72%, transparent);\n    border-bottom-color: var(--lightgray);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing__turntable-record,\n  .graph-landing__turntable-tonearm,\n  .graph-landing__turntable,\n  .graph-landing__music-library {\n    animation: none;\n    transition: none;\n  }\n}';
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
      musicLibraryOpen: "\uB808\uCF54\uB4DC \uCEEC\uB809\uC158 \uC5F4\uAE30",
      musicLibraryClose: "\uB808\uCF54\uB4DC \uCEEC\uB809\uC158 \uB2EB\uAE30",
      musicLibraryTitle: "\uB808\uCF54\uB4DC",
      musicCurrentTrack: "\uD604\uC7AC \uD2B8\uB799",
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
    articles: "Writing",
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
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectOpenExternal: "Open",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    folders: "Folders",
    tune: "Tune",
    nodeSize: "Node size",
    edgeWidth: "Edge width",
    hubGravity: "Hub gravity"
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
var GraphLanding_default = ((pageOptions) => {
  const options = pageOptions ?? {};
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
      return /* @__PURE__ */ u2(
        "div",
        {
          class: "graph-landing",
          "data-rail-open": "false",
          "data-locale": localeId,
          "data-source-locale": sourceLocale,
          "data-locale-prefixes": localePrefixes,
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
          "data-graph-lod-dot-distance": options.lod?.dotDistance,
          "data-graph-lod-cull-distance": options.lod?.cullDistance,
          "data-graph-lod-fog": options.lod?.fog ? "true" : void 0,
          "data-graph-lod-node-resolution": options.lod?.nodeResolution,
          "data-graph-lod-link-resolution": options.lod?.linkResolution,
          "data-graph-lod-share-link-resources": options.lod?.shareLinkResources ? "true" : void 0,
          "data-graph-interaction-incremental-repaint": options.interaction?.incrementalRepaint ? "true" : void 0,
          "data-graph-music-tracks": JSON.stringify(options.music?.tracks ?? []),
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
                /* @__PURE__ */ u2("div", { class: "graph-landing__music-dock", children: [
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
                        /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-record", children: [
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
                            /* @__PURE__ */ u2("span", { children: copy.hubGravity }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "0",
                                max: "200",
                                value: "100",
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
var graphPageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  const translationKey = frontmatter?.translationKey;
  return translationKey === "graph" || translationKey === "home";
};
var GraphLandingPage = (userOpts) => {
  const options = userOpts ?? {};
  const instance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
    layout: "graph",
    frame: "minimal",
    body: GraphLanding_default(options)
  };
  return instance;
};
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map