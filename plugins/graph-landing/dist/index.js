// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function It(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function Ye(e,r,o){let n=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(r)?Math.max(0,r):0,s=Number.isFinite(o)?Math.max(i,o):i;if(s===i)return i>0?.5:0;let h=Math.min(s,Math.max(i,n));return(Math.sqrt(h)-Math.sqrt(i))/(Math.sqrt(s)-Math.sqrt(i))}function Pt(e,r,o){return Ye(Math.max(e,r),0,o)}function Ce(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function At(e){return 1+Ce(e,0,1)*1.2}function Dt(e,r){let o=Ce(e,0,1),n=Ce(r,0,2);return Math.max(.5,1-o*.24*n)}function _t(e,r){let o=Ce(e,0,1),n=Ce(r,0,2);return Math.min(1.6,1+o*.3*n)}var Sn=/^[A-Za-z0-9_-]{6,20}$/,Mn=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Cn=new Set(["youtu.be","www.youtu.be"]);function qe(e){return e&&Sn.test(e)?e:void 0}function Nn(e){if(!e)return;let r=e.trim(),o=qe(r);if(o)return o;let n;try{n=new URL(r)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if(Mn.has(n.hostname)){if(n.pathname==="/watch")return qe(n.searchParams.get("v"));let i=n.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return qe(i[1])}if(Cn.has(n.hostname)){let i=n.pathname.split("/").filter(Boolean);if(i.length===1)return qe(i[0])}}}function Gt(e){let r=[],o=new Set;for(let n of e){let i=n.title.trim(),s=Nn(n.url);if(!i||!s||o.has(s))continue;o.add(s);let h=n.artist?.trim();h?r.push({title:i,artist:h,videoId:s}):r.push({title:i,videoId:s})}return r}function D(e){return typeof e=="string"?e:e.id}function dt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function Ke(e,r,o){let n=e.get(r);if(n)return n;let i=o();return e.set(r,i),i}function ae(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function Rt(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let n=[...e.nodes].sort((h,E)=>E.degree!==h.degree?E.degree-h.degree:h.id<E.id?-1:h.id>E.id?1:0).slice(0,Math.max(0,r)),i=new Set(n.map(h=>h.id)),s=e.links.filter(h=>{let E=D(h.source),C=D(h.target);return i.has(E)&&i.has(C)});return{nodes:n,links:s}}function Ft(e,r,o,n){let i=new Set,s=Math.max(0,Math.floor(n));if(s<=0)return i;let h=new Set([o]),E=new Set([o]);for(let C=0;C<s;C+=1){let F=new Set;for(let q of E)for(let y of e.get(q)??[])h.has(y)||(h.add(y),F.add(y),r.has(y)||i.add(y));E=F}return i}var In=2.399963229728653,ut=20;function Ht(e,r,o){let n=e.x??0,i=e.y??0,s=e.z??0,h=r*In;return{x:n+ut*Math.cos(h),y:i+ut*Math.sin(h),z:o?s+ut*Math.sin(h*.5):s}}function Ot(e,r,o){let n=new Set;if(r!==null){n.add(r);for(let i of e.get(r)??[])n.add(i)}if(o!==null){n.add(o);for(let i of e.get(o)??[])n.add(i)}return n}var tt="0.179.1",Pn="https://esm.sh/force-graph@1.51.4",An=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${tt}`,Dn="https://esm.sh/d3-force-3d@3.0.6",_n=`https://esm.sh/three-spritetext@1.9.2?deps=three@${tt}`,Gn=`https://esm.sh/three@${tt}`,Rn=`https://esm.sh/three@${tt}/examples/jsm/postprocessing/UnrealBloomPass.js`,Fn=8,Hn=14;var Ae=1,vt=4,On=.05,zn=2.6,Bn=1,zt=1,Ne=.18,sn="graph-landing:lens",ln="graph-landing:tune",Tt="graph-landing:ambient-audio",Bt="UDVtMYqUAyw",Ie=12,Vn=28e3,Un="https://www.youtube.com/iframe_api",$n=.18,Vt=1.25,Wn=1.25,qn=1.15,Yn=.55,De={x:330,y:235,z:565},Ut={x:0,y:0,z:0},Ze=Math.hypot(De.x,De.y,De.z),Kn=300/Ze,jn=1600/Ze,$t=1.3,Xn=4.8,Wt=.78,qt=.2,Yt=.48,Zn=2.4,Jn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Qn="#a8b0c2",er="#2a3348",Kt={min:80,max:200},jt={min:40,max:110},Xt={min:160,max:280},Zt={min:90,max:170},Jt=220,Qt=2,tr=.15,nr=.8,rr=350,ft={min:-100,max:-190},gt={min:72,max:116},mt={min:130,max:260};function or(e){return Qe(e-.5,0,1)}function Je(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function pt(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function ar(e){let r=[];for(let o of Object.values(e)){let n=Je(o);if(!It(n.filePath))continue;let i=typeof n.slug=="string"?n.slug:"";if(i.length===0)continue;let s=n.multilingual,h=s&&typeof s=="object"?s:void 0;r.push({slug:i,title:typeof n.title=="string"?n.title:i,links:pt(n.links),tags:pt(n.tags),externalLinks:pt(n.externalLinks),content:typeof n.excerpt=="string"?n.excerpt:typeof n.content=="string"?n.content:"",multilingual:h})}return r}function ir(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=Jt?r:`${r.slice(0,Jt).trimEnd()}\\u2026`}function _e(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function en(e){return _e(e)/(2*Math.PI)}function je(e,r,o){let n=_e(e),i=Math.acos(2*en(`${e}:phi`)-1),s=r+(o-r)*en(`${e}:r`);return{x:s*Math.sin(i)*Math.cos(n),y:s*Math.sin(i)*Math.sin(n),z:s*Math.cos(i)}}function cn(e){return e==="index"||e.endsWith("/index")}function un(e){return e==="tags"||e.startsWith("tags/")}function sr(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function dn(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function ht(e,r){return e.multilingual?.locale?e.multilingual.locale:dn(e.slug,r).locale}function lr(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${dn(e.slug,r).permalink}`}function cr(e,r){let o=e.find(n=>ht(n,r.prefixes)===r.localeId)??e.find(n=>ht(n,r.prefixes)===r.sourceLocale)??e.find(n=>ht(n,r.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Qe(e,r,o){return Math.min(o,Math.max(r,e))}function tn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function ur(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Lt(e){return ur(e).trim().toLowerCase()}function dr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function fr(e){let r=e.trim();return r.length===0||dr(r)||un(r)||cn(r)?!0:Lt(r).length===0}function gr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function fn(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function mr(e,r){let o=fn(e);return o===null?!1:!r.includes(new URL(o).hostname)}function nn(e){return`external:${e}`}function pr(e,r){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),i=o.pathname;return(r.get(n)??0)>1&&i.length>1?`${n}${i}`:n}function hr(e){let r=new Map,o=new Map;for(let n of e){let i=Lt(n.slug);i.length>0&&!r.has(i)&&r.set(i,n.slug);let s=n.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,n.slug);let h=s.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,n.slug)}return{byBasename:r,byTitle:o}}function br(e,r,o){if(r.has(e))return e;let n=Lt(e),i=o.byBasename.get(n);if(i)return i;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return s||null}function yr(e,r){return e.length===0?"":[...e].sort((n,i)=>(r.get(i)??0)-(r.get(n)??0))[0]??""}function wr(e,r,o=void 0){let n=e.filter(c=>!cn(c.slug)&&!un(c.slug)&&!sr(c)),i=new Map;for(let c of n){let b=lr(c,r.prefixes),k=i.get(b)??[];k.push(c),i.set(b,k)}let s=[];for(let c of i.values())s.push(cr(c,r));let h=new Set(s.map(c=>c.slug)),E=hr(s),C=new Map,F=[],q=new Set,y=new Map,ne=c=>{C.set(c,(C.get(c)??0)+1)},G=(c,b,k)=>c<b?`${c}|${b}|${k}`:`${b}|${c}|${k}`,x=(c,b,k,A)=>{let I=G(c,b,k);return q.has(I)?!1:(q.add(I),F.push({source:c,target:b,kind:k}),A&&(ne(c),ne(b)),!0)};for(let c of s)for(let b of c.links){if(fr(b))continue;let k=br(b,h,E);k!==null&&k!==c.slug&&x(c.slug,k,"wikilink",!0)}let L=gr(),Y=new Set;for(let c of s)for(let b of c.externalLinks){let k=fn(b);k===null||!mr(k,L)||(Y.add(k),x(c.slug,nn(k),"external",!0))}let K=new Map;for(let c of Y){let b=new URL(c).hostname.replace(/^www\\./,"");K.set(b,(K.get(b)??0)+1)}let H=new Set,O=new Map;for(let c of s)for(let b of c.tags){y.set(b,(y.get(b)??0)+1);let k=`tag:${b}`;H.add(k),x(c.slug,k,"tag",!0);let A=O.get(b)??[];A.push(c.slug),O.set(b,A)}if(o!==!1){let c=o?.maxTagsPerNote,b=o?.maxEdges,k=0;e:for(let A of s)if(!(A.tags.length<2)&&!(c!==void 0&&A.tags.length>c))for(let I=0;I<A.tags.length;I+=1)for(let _=I+1;_<A.tags.length;_+=1){if(b!==void 0&&k>=b)break e;x(`tag:${A.tags[I]}`,`tag:${A.tags[_]}`,"cooc",!1)&&(k+=1)}}let z=new Map;for(let c of s){let b=tn(c.slug);if(b==="root")continue;let k=z.get(b)??[];k.push(c.slug),z.set(b,k)}for(let c of z.values()){if(c.length<2)continue;let b=[...c].sort();for(let k=0;k<b.length;k+=1){let A=b[(k+1)%b.length],I=b[(k+Qt)%b.length],_=b[k];_===void 0||A===void 0||(_!==A&&!q.has(G(_,A,"wikilink"))&&x(_,A,"folder",!1),b.length>Qt+1&&I!==void 0&&_!==I&&!q.has(G(_,I,"wikilink"))&&x(_,I,"folder",!1))}}let te=[...C.values()],Z=te.length>0?Math.min(...te):0,J=te.length>0?Math.max(...te):0,V=c=>{let b=Ye(C.get(c)??0,Z,J);return Ae+b*(vt-Ae)},U=[...s].sort((c,b)=>(C.get(b.slug)??0)-(C.get(c.slug)??0)),ie=new Set(U.filter(c=>(C.get(c.slug)??0)>0).slice(0,Fn).map(c=>c.slug)),B=s.map(c=>{let b=ie.has(c.slug),k=b?je(c.slug,jt.min,jt.max):je(c.slug,Kt.min,Kt.max);return{id:c.slug,name:c.title,type:"note",val:V(c.slug),degree:C.get(c.slug)??0,isHub:b,tag:"",slug:c.slug,url:"",folder:tn(c.slug),tags:c.tags,dominantTag:yr(c.tags,y),excerpt:ir(c.content),phase:_e(c.slug),x:k.x,y:k.y,z:k.z}});for(let c of Y){let b=nn(c),k=je(b,Xt.min,Xt.max);B.push({id:b,name:pr(c,K),type:"external",val:V(b)*Yn,degree:C.get(b)??0,isHub:!1,tag:"",slug:"",url:c,folder:"",tags:[],dominantTag:"",excerpt:c,phase:_e(b),x:k.x,y:k.y,z:k.z})}for(let c of H){let b=c.slice(4),k=je(c,Zt.min,Zt.max);B.push({id:c,name:b,type:"tag",val:Qe(V(c)*.7,Ae,vt),degree:C.get(c)??0,isHub:!1,tag:b,slug:`tags/${b}`,url:"",folder:"tag",tags:[b],dominantTag:b,excerpt:"",phase:_e(c),x:k.x,y:k.y,z:k.z})}return{nodes:B,links:F}}function bt(e){let r=new Map,o=(n,i)=>{let s=r.get(n)??new Set;s.add(i),r.set(n,s)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let i=D(n.source),s=D(n.target);o(i,s),o(s,i)}return r}function ye(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function gn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ye("--light","#ffffff"),ink:ye("--darkgray","#0f0f0f"),accent:ye("--secondary","#a52142"),tertiary:ye("--tertiary","#c75b75"),gray:ye("--gray","#737373"),external:ye("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Xe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function vr(){return kr()&&!Xe()}function X(){return document.documentElement.getAttribute("saved-theme")==="dark"}function et(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function we(e,r){let o=et(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function ue(e,r,o){let n=et(e),i=et(r);if(!n||!i)return e;let s=(h,E)=>Math.round(h+(E-h)*o);return`rgb(${s(n.r,i.r)}, ${s(n.g,i.g)}, ${s(n.b,i.b)})`}function mn(e){return X()?ue(e.bg,"#05070f",.88):e.bg}function Tr(e){let r=et(e);if(!r)return e;let o=n=>{let i=n/255,s=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.round(s*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function Lr(e){return Tr(mn(e))}function pn(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function rn(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:pn(e,[r.accent,r.tertiary,r.ink,r.gray])}function Er(e,r){return e.length===0?r.ink:pn(e,[r.accent,r.tertiary])}function hn(e){let r=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let i=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function xr(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let r=hn(e);window.location.assign(r.toString())}function Sr(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Mr(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function yt(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function Cr(e){let o=await import(e?An:Pn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Mr(o)}function Nr(){try{let e=sessionStorage.getItem(sn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Ir(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1,hubGravity:1};try{let r=sessionStorage.getItem(ln);if(!r)return e;let o=Je(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread,E=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:i,zoom:s,spread:h,hubGravity:E}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function Pe(e){try{sessionStorage.setItem(ln,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function wt(e){try{sessionStorage.setItem(sn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function Pr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Ar(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function Dr(e,r){return e.type==="note"&&e.folder===r}function on(e,r){let o=D(r),n=e.find(i=>i.id===o);return!n||n.type!=="note"?null:n.folder}function _r(e,r,o){let n=new Map;if(r==="folder"){let i=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return i.forEach((s,h)=>{let E=Math.PI*2*h/Math.max(i.length,1),C={x:Math.cos(E)*o,y:Math.sin(E)*o,z:0};for(let F of e.nodes)F.type==="note"&&F.folder===s&&n.set(F.id,C)}),n}if(r==="tag"){let i=e.nodes.filter(h=>h.type==="tag"),s=new Map;i.forEach((h,E)=>{let C=Math.PI*2*E/Math.max(i.length,1);s.set(h.tag,{x:Math.cos(C)*o,y:Math.sin(C)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let E=s.get(h.tag);E&&n.set(h.id,E)}else if(h.dominantTag.length>0){let E=s.get(h.dominantTag);E&&n.set(h.id,E)}}return n}function Gr(e,r){let o=[],n=i=>{let s=r*i;for(let h of o){let E=e(h);E&&(h.vx=(h.vx??0)+(E.x-(h.x??0))*s,h.vy=(h.vy??0)+(E.y-(h.y??0))*s,h.vz=(h.vz??0)+(E.z-(h.z??0))*s)}};return n.initialize=i=>{o=i},n}function an(e,r,o,n){for(let i of e.querySelectorAll(r)){if(!(i instanceof HTMLElement))continue;let s=i.getAttribute(n);i.setAttribute("aria-pressed",s===o?"true":"false")}}function Rr(e,r,o,n){let i=bt(r.links),s=(t,a,l)=>t<a?`${t}|${a}|${l}`:`${a}|${t}|${l}`,h=new Map,E=new Map,C=new Set,F=new Set;n.fullData!==r&&(h=new Map(n.fullData.nodes.map(t=>[t.id,t])),E=bt(n.fullData.links),C=new Set(r.nodes.map(t=>t.id)),F=new Set(r.links.map(t=>s(D(t.source),D(t.target),t.kind))));let q=t=>{if(n.fullData===r)return!1;let a=Ft(E,C,t,n.expandHops);if(a.size===0)return!1;let l=n.layout.incrementalWarmup?h.get(t):void 0,d=0;for(let f of a){let u=h.get(f);if(u){if(l&&u.x===void 0){let p=Ht(l,d,n.use3d);u.x=p.x,u.y=p.y,u.z=p.z,d+=1}r.nodes.push(u),C.add(f)}}for(let f of n.fullData.links){let u=D(f.source),p=D(f.target);if(!C.has(u)||!C.has(p))continue;let g=s(u,p,f.kind);F.has(g)||(F.add(g),r.links.push(f))}return i=bt(r.links),!0},y={lens:Nr(),allLabels:!1,focusTag:null,focusFolder:null},ne=null,G=null,x=Ir(),L=()=>G??ne,Y=new Set(r.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,Hn).map(t=>t.id)),K=t=>{let a=t.val;return t.isHub&&(a*=Vt),y.lens==="tag"&&t.type==="tag"&&(a*=Wn),y.focusTag&&t.id===`tag:${y.focusTag}`&&(a*=qn),a},H=t=>{let a=L();return y.allLabels||a===t.id||a!==null&&(i.get(a)?.has(t.id)??!1)?!0:Y.has(t.id)},O=t=>{let a=vt*Vt,l=Qe((K(t)-Ae)/(a-Ae),0,1);return($t+l*(Xn-$t))*x.nodeScale},z=t=>{let a=L();if(a!==null)return a===t||(i.get(a)?.has(t)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let l=r.nodes.find(d=>d.id===t);return l?y.focusFolder!==null?Dr(l,y.focusFolder):y.focusTag!==null&&Ar(l,y.focusTag):!1},te=t=>t.type==="external"?o.current.external:y.lens==="tag"?t.type==="tag"?o.current.tertiary:Er(t.dominantTag,o.current):y.lens==="folder"?t.type==="tag"?o.current.tertiary:rn(t.folder,o.current):y.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,Z=t=>{let a=L();if(a!==null&&(a===t.id||(i.get(a)?.has(t.id)??!1)))return o.current.accent;let l=te(t);return z(t.id)?X()?t.type==="external"?ue(o.current.external,"#ffffff",.18):t.type==="tag"?ue(o.current.tertiary,"#ffffff",.22):t.isHub?ue("#fff3e4",o.current.accent,.1):ue("#ffffff",o.current.accent,.12):t.type==="external"?ue(o.current.external,"#08343a",.12):t.type==="tag"?ue(o.current.tertiary,o.current.accent,.55):t.isHub?ue(o.current.ink,o.current.accent,.22):l:we(l,Ne)},J=t=>{let a=X();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},V=t=>{let a=D(t.source),l=D(t.target),d=L();return d!==null&&(a===d||l===d)?X()?.72:.78:(d!==null||y.focusTag!==null||y.focusFolder!==null)&&(!z(a)||!z(l))?J(t.kind)*Ne:J(t.kind)},U=t=>{let a=D(t.source),l=D(t.target),d=L(),f=X()?Qn:er;return d!==null&&(a===d||l===d)?ue(o.current.accent,f,.45):f},ie=t=>we(U(t),V(t)),B=()=>r,c=t=>{let a=X()?"rgba(255, 255, 255, 1)":we(o.current.ink,.88);return z(t.id)?a:we(a,Ne)},b=t=>X()?z(t.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",k=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:De,len:Ze}},A=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=Ze/Qe(x.zoom,.4,2.5),{dir:l,len:d}=k(),f=a/d;e.cameraPosition({x:l.x*f,y:l.y*f,z:l.z*f},Ut,t),at();return}typeof e.zoom=="function"&&e.zoom(x.zoom,t)},I=()=>{let t=or(x.spread),a=ft.min+t*(ft.max-ft.min),l=gt.min+t*(gt.max-gt.min),d=new Map(r.nodes.map(M=>[M.id,M.degree])),f=Math.max(0,...d.values()),u=M=>Ye(M.degree,0,f),p=M=>Pt(d.get(D(M.source))??0,d.get(D(M.target))??0,f),g=e.d3Force("charge");g?.strength&&g.strength(M=>a*At(u(M))),g?.theta&&n.layout.chargeTheta!==void 0&&g.theta(n.layout.chargeTheta);let m=e.d3Force("link");m?.distance&&m.distance(M=>{let j=Dt(p(M),x.hubGravity);return y.lens==="tag"&&M.kind==="tag"?l*.72*j:M.kind==="cooc"||M.kind==="folder"?l:l*j}),m?.strength&&m.strength(M=>{if(M.kind==="cooc"||M.kind==="folder")return .015;let j=_t(p(M),x.hubGravity);if(y.lens==="tag"&&M.kind==="tag")return .3*j;if(y.lens==="folder"){let $e=on(r.nodes,M.source),We=on(r.nodes,M.target);if($e!==null&&$e===We)return .16*j}return M.kind==="tag"?.14*j:(M.kind==="external"?.16:.24)*j}),n.forceCollide&&e.d3Force("collision",n.forceCollide(M=>O(M)+Zn).strength(.85).iterations(1));let T=e.d3Force("center");T?.strength&&T.strength(On);let v=mt.min+t*(mt.max-mt.min),W=_r(r,y.lens,v),R=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",Gr(M=>W.get(M.id)??null,R)),n.use3d&&e.d3Force("flattenZ",null)},_=new Map,re=new Map,se=new Map,le=new Map,de=new Map,oe=new Map,fe=new Map,w=(t,a,l)=>{let d=`${Math.round(a*4)}|${l}`;return Ke(fe,d,()=>({geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:l})}))},P=new Map,N=new Map,Q=(t,a,l)=>{let d=`${a}|${l}`;return Ke(P,d,()=>new t.CylinderGeometry(a,a,1,l))},ce=(t,a,l)=>{let d=`${a}|${l}`;return Ke(N,d,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:l,depthWrite:!1}))},ee=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,a=n.three,l=n.lod.dotDistance,d=n.lod.nodeResolution??14,f=n.interaction.incrementalRepaint;if(_.clear(),re.clear(),fe.clear(),le.clear(),de.clear(),f)for(let u of r.nodes)de.set(u.id,u);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(u=>{let p=O(u),g=Z(u),m=!1;if(a){if(X()){let R=u.isHub?1.35:1.1,M=new a.MeshLambertMaterial({color:g,emissive:g,emissiveIntensity:R});_.set(u.id,{material:M,base:R,phase:u.phase}),f&&le.set(u.id,M),m=new a.Mesh(new a.SphereGeometry(p,d,d),M)}else{let R=new a.MeshBasicMaterial({color:g});f&&le.set(u.id,R),m=new a.Mesh(new a.SphereGeometry(p,d,d),R)}if(l!==void 0&&m!==!1){let R=w(a,p,g),M=new a.Mesh(R.geometry,R.material),j=new a.LOD;j.addLevel(m,0),j.addLevel(M,l),m=j}}let T=H(u);if(!t||!f&&!T)return m;let v=new t(u.name);if(v.color=c(u),v.backgroundColor=!1,v.fontWeight="400",v.strokeWidth=X()?.35:0,v.strokeColor=b(u),v.material.transparent=!0,v.material.depthWrite=!1,v.material.alphaTest=.01,v.material.toneMapped=!1,v.textHeight=Y.has(u.id)?6.5:5.5,v.center.set(0,.5),v.position.x=p+2,v.position.y=0,f?(v.visible=T,re.set(u.id,{sprite:v,node:u})):n.lod.labelDistance!==void 0&&re.set(u.id,{sprite:v,node:u}),!a||m===!1)return v;let W=new a.Group;return W.add(m),W.add(v),W})},me=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),l=n.lod.linkResolution??5,d=n.lod.cullDistance,f=n.interaction.incrementalRepaint,u=n.lod.shareLinkResources;if(se.clear(),oe.clear(),P.clear(),N.clear(),f)for(let p of r.links){let g=D(p.source),m=D(p.target);for(let T of[g,m]){let v=oe.get(T);v?v.push(p):oe.set(T,[p])}}e.linkThreeObject(p=>{let g=Jn[p.kind]*x.edgeScale,m=u?ce(t,U(p),V(p)):new t.MeshBasicMaterial({color:U(p),transparent:!0,opacity:V(p),depthWrite:!1}),T=u?Q(t,g,l):new t.CylinderGeometry(g,g,1,l),v=new t.Mesh(T,m);return(d!==void 0||f)&&se.set(p,v),v}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((p,g)=>{let m=g.end.x-g.start.x,T=g.end.y-g.start.y,v=g.end.z-g.start.z,W=Math.sqrt(m*m+T*T+v*v);return p.position.x=(g.start.x+g.end.x)/2,p.position.y=(g.start.y+g.end.y)/2,p.position.z=(g.start.z+g.end.z)/2,p.scale.x=1,p.scale.y=Math.max(W,.01),p.scale.z=1,p.quaternion.setFromUnitVectors(a,new t.Vector3(m,T,v).normalize()),!0})},S=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=L();if(a===null)return 0;let l=D(t.source),d=D(t.target);return l===a||d===a?2:0})},pe=()=>{e.nodeVal(K),e.nodeColor(Z),e.linkColor(ie),e.linkWidth(t=>{let a=D(t.source),l=D(t.target),d=L(),f=x.edgeScale;return d!==null&&(a===d||l===d)?.7*f:t.kind==="wikilink"||t.kind==="external"?.5*f:(t.kind==="tag"?.35:.25)*f}),typeof e.linkOpacity=="function"&&e.linkOpacity(zt),S(),me(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},bn=(t,a)=>{let l=Ot(i,t,a),d=new Set;for(let f of l){let u=de.get(f);if(!u)continue;let p=Z(u);le.get(f)?.color.set(p);let g=_.get(f);g&&g.material.emissive.set(p);let m=re.get(f);m&&(m.sprite.color=c(u),m.sprite.strokeColor=b(u),m.sprite.strokeWidth=X()?.35:0,m.sprite.visible=H(u));for(let T of oe.get(f)??[]){if(d.has(T))continue;d.add(T);let v=se.get(T);v&&(n.lod.shareLinkResources&&n.three?v.material=ce(n.three,U(T),V(T)):(v.material.color.set(U(T)),v.material.opacity=V(T)))}}},nt=t=>{if(n.interaction.incrementalRepaint&&n.use3d){S(),bn(t,L());return}pe(),n.use3d&&ee()},rt=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(u,p)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let m=document.createElement("span");m.className="graph-landing__dot",m.setAttribute("aria-hidden","true"),m.style.background=u;let T=document.createElement("span");return T.textContent=p,g.append(m,T),g},l=n.root.dataset.legendNotes??"Notes",d=n.root.dataset.legendTags??"Tags",f=n.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,l),a(o.current.tertiary,d),a(o.current.external,f))},Et=t=>{let a=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let d=document.createElement("span");if(d.className="graph-landing__facet-name",t.dotColor!==null){let u=document.createElement("span");u.className="graph-landing__dot",u.style.background=t.dotColor,d.append(u)}d.append(document.createTextNode(t.label));let f=document.createElement("span");return f.className="graph-landing__tag-count",f.textContent=String(t.count),l.append(d,f),a.append(l),a},xt=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),l=n.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let f=n.root.dataset.folderRootLabel??"root",u=new Map;for(let g of r.nodes)g.type==="note"&&u.set(g.folder,(u.get(g.folder)??0)+1);let p=[...u.entries()].sort((g,m)=>m[1]-g[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=p.length===0),t.replaceChildren(...p.map(([g,m])=>Et({dataset:{key:"graphFolder",value:g},pressed:y.focusFolder===g,dotColor:rn(g,o.current),label:g==="root"?f:g,count:m})));return}let d=r.nodes.filter(f=>f.type==="tag").sort((f,u)=>u.degree-f.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=d.length===0),t.replaceChildren(...d.map(f=>Et({dataset:{key:"graphTag",value:f.tag},pressed:y.focusTag===f.tag,dotColor:null,label:f.tag,count:f.degree})))},ke=null;n.layout.incrementalWarmup&&typeof e.onFinishUpdate=="function"&&e.onFinishUpdate(()=>{ke!==null&&(e.warmupTicks(ke),ke=null)});let yn=()=>{!n.layout.incrementalWarmup||typeof e.onFinishUpdate!="function"||(ke===null&&(ke=e.warmupTicks()),e.warmupTicks(0))},ve=()=>{e.graphData(B()),I(),pe(),ee(),rt(),xt(),an(n.root,"[data-graph-lens]",y.lens,"data-graph-lens"),e.d3ReheatSimulation()},wn=t=>{y.lens=t,t!=="tag"&&(y.focusTag=null),t!=="folder"&&(y.focusFolder=null),wt(t),ve()},kn=t=>{y.focusTag=y.focusTag===t?null:t,y.focusFolder=null,y.focusTag&&(y.lens="tag",wt("tag")),ve()},vn=t=>{y.focusFolder=y.focusFolder===t?null:t,y.focusTag=null,y.focusFolder&&(y.lens="folder",wt("folder")),ve()},ot=()=>n.use3d?Lr(o.current):mn(o.current),at=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let t=k().len;e.scene().fog=new n.three.Fog(ot(),t*Kn,t*jn)};e.graphData(B()),e.backgroundColor(ot()),e.nodeLabel(t=>t.name),e.nodeRelSize(zn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Bn),typeof e.linkOpacity=="function"&&e.linkOpacity(zt),I(),pe();let he=n.root.querySelector("[data-graph-preview]"),Ge=n.root.querySelector("[data-graph-preview-chip]"),Re=n.root.querySelector("[data-graph-preview-title]"),Fe=n.root.querySelector("[data-graph-preview-excerpt]"),He=0;window.addCleanup(()=>window.clearTimeout(He));let Tn=t=>{if(!(he instanceof HTMLElement)||!(Ge instanceof HTMLElement)||!(Re instanceof HTMLElement)||!(Fe instanceof HTMLElement))return;window.clearTimeout(He);let a=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",d=n.root.dataset.legendLinks??"Links";if(t.type==="tag"){let f=n.root.dataset.previewTagTemplate??"{n} notes";Ge.textContent=l,Re.textContent=`#${t.tag}`,Fe.textContent=f.replace("{n}",String(t.degree))}else t.type==="external"?(Ge.textContent=d,Re.textContent=t.name,Fe.textContent=t.url):(Ge.textContent=a,Re.textContent=t.name,Fe.textContent=t.excerpt);he.hidden=!1,he.dataset.visible="true"},St=()=>{he instanceof HTMLElement&&(window.clearTimeout(He),He=window.setTimeout(()=>{he.dataset.visible="false",he.hidden=!0},rr))};if(e.onNodeHover(t=>{let a=L();ne=t?t.id:null,G===null&&(t?Tn(t):St()),nt(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Xe()&&typeof e.controls=="function"){let l=e.controls();l.autoRotate=!1,l.autoRotateSpeed=$n;let d=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(d))}if(e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),n.bloomPass&&typeof e.postProcessingComposer=="function"&&(n.bloomPass.strength=X()?Wt:0,n.bloomPass.radius=qt,n.bloomPass.threshold=Yt,e.postProcessingComposer().addPass(n.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(De,Ut),x.zoom!==1&&A(0)),ee(),at(),!Xe()){let l=0,d=()=>{let f=performance.now()/1e3*nr;for(let u of _.values())u.material.emissiveIntensity=u.base*(1+tr*Math.sin(f+u.phase));l=window.requestAnimationFrame(d)};l=window.requestAnimationFrame(d),window.addCleanup(()=>window.cancelAnimationFrame(l))}let t=n.lod.labelDistance,a=n.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let l=e.cameraPosition.bind(e),d=0,f=()=>{let u=l();if(u&&typeof u.x=="number"&&typeof u.y=="number"&&typeof u.z=="number"){if(t!==void 0)for(let p of re.values()){let g=p.node.x??0,m=p.node.y??0,T=p.node.z??0,v=Math.hypot(u.x-g,u.y-m,u.z-T);p.sprite.visible=dt(v,t)==="full"}if(a!==void 0){let p=L();for(let[g,m]of se){let T=D(g.source),v=D(g.target);if(p!==null&&(T===p||v===p)){m.visible=!0;continue}let W=Math.hypot(u.x-m.position.x,u.y-m.position.y,u.z-m.position.z);m.visible=dt(W,a)!=="dot"}}}d=window.requestAnimationFrame(f)};d=window.requestAnimationFrame(f),window.addCleanup(()=>window.cancelAnimationFrame(d))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,l)=>{let d=O(t),f=t.x??0,u=t.y??0;if(a.save(),a.beginPath(),a.arc(f,u,d,0,Math.PI*2),a.fillStyle=Z(t),a.fill(),t.isHub&&(a.strokeStyle=z(t.id)?o.current.accent:we(o.current.accent,Ne),a.lineWidth=1.2/l,a.stroke()),H(t)){let p=11.5/l;a.font=`${p}px ${o.current.font}`,a.fillStyle=z(t.id)?o.current.ink:we(o.current.ink,Ne),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,f,u-d-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,l)=>{let d=O(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,d,0,Math.PI*2),l.fillStyle=a,l.fill()});let Oe=n.root.querySelector("[data-graph-inspect]"),ze=n.root.querySelector("[data-graph-inspect-chip]"),Be=n.root.querySelector("[data-graph-inspect-title]"),Ve=n.root.querySelector("[data-graph-inspect-excerpt]"),it=n.root.querySelector("[data-graph-inspect-tags]"),st=n.root.querySelector("[data-graph-inspect-connected]"),$=n.root.querySelector("[data-graph-inspect-open]"),be=t=>{n.root.dataset.railOpen=t?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),l=n.root.querySelector("[data-graph-rail-scrim]"),d=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),d instanceof HTMLElement&&d.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},Ue=t=>{Xe()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Ln=t=>{let a=i.get(t.id)??new Set,l=[];for(let d of a){let f=r.nodes.find(u=>u.id===d);f&&l.push(f)}return l.sort((d,f)=>f.degree-d.degree)},En=t=>{if(!(Oe instanceof HTMLElement)||!(ze instanceof HTMLElement)||!(Be instanceof HTMLElement)||!(Ve instanceof HTMLElement)||!(it instanceof HTMLElement)||!(st instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",d=n.root.dataset.legendLinks??"Links",f=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(ze.textContent=l,Be.textContent=`#${t.tag}`,Ve.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(ze.textContent=d,Be.textContent=t.name,Ve.textContent=t.url):(ze.textContent=a,Be.textContent=t.name,Ve.textContent=t.excerpt);let u=t.tags.map(g=>{let m=document.createElement("li");return m.textContent=g,m});it.replaceChildren(...u),it.hidden=u.length===0;let p=Ln(t).slice(0,12);if(p.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=f,st.replaceChildren(g)}else st.replaceChildren(...p.map(g=>{let m=document.createElement("li"),T=document.createElement("button");T.type="button",T.className="graph-landing__inspect-link",T.dataset.graphInspectId=g.id;let v=g.type==="tag"?l:g.type==="external"?d:a,W=document.createElement("span");W.textContent=v;let R=document.createElement("strong");return R.textContent=g.type==="tag"?`#${g.tag}`:g.name,T.append(W,R),m.append(T),m}));$ instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?($.hidden=!1,$.href=hn(t.slug).toString(),$.textContent=n.root.dataset.inspectRead??"Read note",$.removeAttribute("target"),$.removeAttribute("rel")):t.type==="external"&&t.url.length>0?($.hidden=!1,$.href=t.url,$.textContent=n.root.dataset.inspectOpenExternal??"Open",$.target="_blank",$.rel="noopener noreferrer"):($.hidden=!0,$.removeAttribute("href"),$.removeAttribute("target"),$.removeAttribute("rel"))),Oe.hidden=!1,n.root.dataset.inspecting="true",be(!1),St()},Te=()=>{let t=L();G=null,Oe instanceof HTMLElement&&(Oe.hidden=!0),n.root.dataset.inspecting="false",Ue(!0),nt(t)},xn=t=>{if(G===t.id&&t.type==="note"&&t.slug.length>0){xr(t.slug);return}if(G===t.id&&t.type==="external"&&t.url.length>0){Sr(t.url);return}let a=L();G=t.id,En(t),nt(a)},lt=t=>{q(t.id)&&(yn(),ve()),xn(t)},ct=!1;e.onNodeClick((t,a)=>{t&&(ct=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),lt(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Te(),be(!1)});let ge=n.root.querySelector("#graph-landing-mount");if(ge instanceof HTMLElement){let t=null,a=u=>{t={x:u.clientX,y:u.clientY},Ue(!1)},l=(u,p)=>{if(typeof e.graph2ScreenCoords!="function")return null;let g=ge.getBoundingClientRect(),m=u-g.left,T=p-g.top,v=null,W=4096;for(let R of B().nodes){if(R.x===void 0||R.y===void 0)continue;let M=e.graph2ScreenCoords(R.x,R.y,R.z??0),j=(M.x-m)**2+(M.y-T)**2,$e=(M.x-u)**2+(M.y-p)**2,We=Math.min(j,$e);We<W&&(W=We,v=R)}return v},d=u=>{let p=t;t=null,Ue(!0),!(!p||(u.clientX-p.x)**2+(u.clientY-p.y)**2>25)&&window.setTimeout(()=>{if(ct){ct=!1;return}let m=l(u.clientX,u.clientY);m?lt(m):Te()},0)},f=()=>{t=null,Ue(!0)};ge.addEventListener("pointerdown",a,!0),ge.addEventListener("pointerup",d,!0),ge.addEventListener("pointercancel",f,!0),window.addCleanup(()=>{ge.removeEventListener("pointerdown",a,!0),ge.removeEventListener("pointerup",d,!0),ge.removeEventListener("pointercancel",f,!0)})}an(n.root,"[data-graph-lens]",y.lens,"data-graph-lens"),rt(),xt(),y.lens!=="all"&&ve(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Mt=()=>{o.current=gn(),e.backgroundColor(ot()),at(),n.bloomPass&&(n.bloomPass.strength=X()?Wt:0,n.bloomPass.radius=qt,n.bloomPass.threshold=Yt),pe(),ee(),rt()};document.addEventListener("themechange",Mt),window.addCleanup(()=>document.removeEventListener("themechange",Mt));let Ct=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Te();return}if(a.closest("[data-graph-rail-toggle]")){let m=n.root.dataset.railOpen!=="true";m&&Te(),be(m);return}if(a.closest("[data-graph-rail-scrim]")){be(!1);return}let l=a.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let m=n.fullData.nodes.find(T=>T.id===l.dataset.graphInspectId);m&&lt(m);return}let d=a.closest("[data-graph-lens]");if(d instanceof HTMLElement&&d.dataset.graphLens&&Pr(d.dataset.graphLens)){wn(d.dataset.graphLens);return}let f=a.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){kn(f.dataset.graphTag);return}let u=a.closest("[data-graph-folder]");if(u instanceof HTMLElement&&u.dataset.graphFolder){vn(u.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let p=a.closest("[data-graph-labels]");if(p instanceof HTMLButtonElement){y.allLabels=!y.allLabels,p.setAttribute("aria-pressed",y.allLabels?"true":"false");let m=p.dataset.labelShow??"Labels",T=p.dataset.labelHide??"Labels",v=y.allLabels?T:m;p.title=v,p.setAttribute("aria-label",v),ee();return}if(a.closest("[data-graph-theme]")){let m=X()?"light":"dark";document.documentElement.setAttribute("saved-theme",m),localStorage.setItem("theme",m),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${m}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:m}}));return}let g=a.closest("[data-graph-tags-toggle]");if(g instanceof HTMLButtonElement){let m=n.root.querySelector(".graph-landing__tags");if(m instanceof HTMLElement){let T=m.dataset.open==="true";m.dataset.open=T?"false":"true",g.setAttribute("aria-expanded",T?"false":"true")}}},Le=n.root.querySelector("[data-graph-node-scale]"),Ee=n.root.querySelector("[data-graph-edge-scale]");if(Le instanceof HTMLInputElement){Le.value=String(Math.round(x.nodeScale*100));let t=()=>{x.nodeScale=Number(Le.value)/100,Pe(x),pe(),n.use3d&&ee()};Le.addEventListener("input",t),window.addCleanup(()=>Le.removeEventListener("input",t))}if(Ee instanceof HTMLInputElement){Ee.value=String(Math.round(x.edgeScale*100));let t=()=>{x.edgeScale=Number(Ee.value)/100,Pe(x),pe()};Ee.addEventListener("input",t),window.addCleanup(()=>Ee.removeEventListener("input",t))}let xe=n.root.querySelector("[data-graph-hub-gravity]");if(xe instanceof HTMLInputElement){xe.value=String(Math.round(x.hubGravity*100));let t=()=>{let a=Number(xe.value)/100;x.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Pe(x),I(),e.d3ReheatSimulation()};xe.addEventListener("input",t),window.addCleanup(()=>xe.removeEventListener("input",t))}let Se=n.root.querySelector("[data-graph-zoom]");if(Se instanceof HTMLInputElement){Se.value=String(Math.round(x.zoom*100));let t=()=>{x.zoom=Number(Se.value)/100,Pe(x),A(200)};Se.addEventListener("input",t),window.addCleanup(()=>Se.removeEventListener("input",t))}let Me=n.root.querySelector("[data-graph-spread]");if(Me instanceof HTMLInputElement){Me.value=String(Math.round(x.spread*100));let t=()=>{x.spread=Number(Me.value)/100,Pe(x),I(),e.d3ReheatSimulation()};Me.addEventListener("input",t),window.addCleanup(()=>Me.removeEventListener("input",t))}be(!1),n.root.addEventListener("click",Ct),window.addCleanup(()=>n.root.removeEventListener("click",Ct));let Nt=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){be(!1);return}Te()}};window.addEventListener("keydown",Nt),window.addCleanup(()=>window.removeEventListener("keydown",Nt))}function Fr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Hr(){try{return window.localStorage.getItem(Tt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function kt(e){try{if(e){window.localStorage.setItem(Tt,"stopped");return}window.localStorage.removeItem(Tt)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function Or(e){let r=performance.now(),o=0,n=i=>{let s=Math.min(1,(i-r)/e.durationMs),h=s*s;e.apply(e.from+(e.to-e.from)*h),s<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function zr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let n=window,i=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let s=n.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=Un,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function Br(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Vr(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),s=e.querySelector("[data-graph-music-track-list]"),h=e.querySelector("[data-graph-music-status]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(s instanceof HTMLElement)||!(h instanceof HTMLElement))return;let E=e.dataset.audioStop??"Stop music",C=e.dataset.audioPlay??"Play music",F=e.dataset.musicLibraryOpen??"Open record collection",q=e.dataset.musicLibraryClose??"Close record collection",y=e.dataset.musicCurrentTrack??"Current track",ne=[];try{let w=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(w))for(let P of w){if(!P||typeof P!="object")continue;let N=P;typeof N.title!="string"||typeof N.url!="string"||N.artist!==void 0&&typeof N.artist!="string"||ne.push({title:N.title,...typeof N.artist=="string"?{artist:N.artist}:{},url:N.url})}}catch{}let G=Gt(ne);G.length===0&&G.push({title:"Ambient track",videoId:Bt});let x=0,L=null,Y=!1,K=null,H=!Hr(),O=!1,z=!1,te=()=>G[x]??G[0]??{title:"Ambient track",videoId:Bt},Z=w=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${w}/hqdefault.jpg")`)},J=()=>te().videoId,V=()=>{s.replaceChildren(),G.forEach((w,P)=>{let N=document.createElement("button");N.type="button",N.className="graph-landing__music-track",N.dataset.graphMusicTrackIndex=String(P),N.setAttribute("aria-current",P===x?"true":"false");let Q=document.createElement("img");Q.className="graph-landing__music-track-cover",Q.src=`https://i.ytimg.com/vi/${w.videoId}/hqdefault.jpg`,Q.alt="",Q.loading="lazy";let ce=document.createElement("span");ce.className="graph-landing__music-track-copy";let ee=document.createElement("span");if(ee.className="graph-landing__music-track-title",ee.textContent=w.title,ce.appendChild(ee),w.artist){let me=document.createElement("span");me.className="graph-landing__music-track-artist",me.textContent=w.artist,ce.appendChild(me)}N.append(Q,ce),s.appendChild(N)}),h.textContent=`${y}: ${te().title}`},U=w=>{e.dataset.musicLibraryOpen=w?"true":"false",i.hidden=!w,i.setAttribute("aria-hidden",w?"false":"true"),n.setAttribute("aria-expanded",w?"true":"false"),n.setAttribute("aria-label",w?q:F),n.title=w?q:F},ie=w=>{r.setAttribute("aria-pressed",w?"true":"false"),r.setAttribute("aria-label",w?E:C),r.title=w?E:C,r.dataset.playing=w?"true":"false"},B=()=>{K&&(K(),K=null)},c=w=>{L&&L.setVolume(Math.max(0,Math.min(Ie,w)))},b=w=>{!H||O||(O=!0,ie(!0),w.unMute(),c(0),w.playVideo(),B(),K=Or({from:0,to:Ie,durationMs:Vn,apply:c}))},k=()=>{H=!1,O=!1,B(),kt(!0),L&&(L.mute(),L.pauseVideo(),c(0)),ie(!1)},A=async()=>{if(!L)try{let w=await zr();if(L)return;L=Br({api:w,host:o,videoId:J(),onReady:P=>{Y=!0,P.mute(),c(0),P.playVideo(),H&&z&&b(P)},onEnded:P=>{if(!H)return;x=(x+1)%G.length;let N=J();Z(N),V(),P.loadVideoById(N),c(O?Ie:0)}})}catch(w){console.error("[graph-landing] ambient audio unavailable",w)}},I=w=>{let P=w.target;if(!(P instanceof Element&&P.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!H||O||Fr())){if(z=!0,Y&&L){b(L);return}A()}},_=()=>{if(H&&O){k();return}if(z=!0,H=!0,kt(!1),Y&&L){b(L);return}A()},re=w=>{if(!(!Number.isInteger(w)||w<0||w>=G.length)){if(x=w,Z(J()),V(),U(!1),H=!0,z=!0,kt(!1),Y&&L){L.loadVideoById(J()),O?(L.unMute(),L.playVideo(),c(Ie)):b(L);return}A()}},se=()=>{let w=e.dataset.musicLibraryOpen!=="true";if(w){e.dataset.railOpen="false";let P=e.querySelector("[data-graph-rail-toggle]"),N=e.querySelector("#graph-landing-rail"),Q=e.querySelector("[data-graph-rail-scrim]");P instanceof HTMLButtonElement&&P.setAttribute("aria-expanded","false"),N instanceof HTMLElement&&N.setAttribute("aria-hidden","true"),Q instanceof HTMLElement&&(Q.hidden=!0)}U(w)},le=w=>{let P=w.target;if(!(P instanceof Element))return;let N=P.closest("[data-graph-music-track-index]");N instanceof HTMLButtonElement&&re(Number(N.dataset.graphMusicTrackIndex))},de=w=>{if(e.dataset.musicLibraryOpen!=="true")return;let P=w.target;(!(P instanceof Element)||!P.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&U(!1)},oe=w=>{w.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(U(!1),w.stopImmediatePropagation())},fe=()=>{if(L){if(document.hidden){B(),L.pauseVideo();return}H&&O&&(L.playVideo(),c(Ie))}};Z(J()),ie(!1),V(),U(!1),A(),r.addEventListener("click",_),n.addEventListener("click",se),s.addEventListener("click",le),e.addEventListener("click",de),e.addEventListener("pointerdown",I,!0),e.addEventListener("touchstart",I,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",fe),window.addEventListener("keydown",oe),window.addCleanup(()=>{r.removeEventListener("click",_),n.removeEventListener("click",se),s.removeEventListener("click",le),e.removeEventListener("click",de),e.removeEventListener("pointerdown",I,!0),e.removeEventListener("touchstart",I,!0),document.removeEventListener("visibilitychange",fe),window.removeEventListener("keydown",oe),B(),L&&(L.pauseVideo(),L.destroy(),L=null)})}async function Ur(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Vr(e);let r=e.querySelector("#graph-landing-mount");if(!(r instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),n=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",i=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",s=(e.dataset.localePrefixes??"").split(",").map(S=>S.trim()).filter(S=>S.length>0),h=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",E=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",C=e.dataset.graphIndexPath??"",F=ae(e.dataset.maxRenderedNodes,S=>Number.parseInt(S,10)),q=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,y=Number.isFinite(q)?q:1,ne=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,G=e.dataset.graphRenderMode==="3d"?"3d":"auto",x=e.dataset.graphLayoutFreezeAfterWarmup==="true",L=ae(e.dataset.graphLayoutWarmupTicks,S=>Number.parseInt(S,10)),Y=ae(e.dataset.graphLayoutCooldownTicks,S=>Number.parseInt(S,10)),K=ae(e.dataset.graphLayoutChargeTheta,Number.parseFloat),H=e.dataset.graphLayoutIncrementalWarmup==="true",O=ae(e.dataset.graphLodLabelDistance,Number.parseFloat),z=ae(e.dataset.graphLodDotDistance,Number.parseFloat),te=ae(e.dataset.graphLodCullDistance,Number.parseFloat),Z=e.dataset.graphLodFog==="true",J=ae(e.dataset.graphLodNodeResolution,S=>Number.parseInt(S,10)),V=ae(e.dataset.graphLodLinkResolution,S=>Number.parseInt(S,10)),U=e.dataset.graphInteractionIncrementalRepaint==="true",ie=e.dataset.graphLodShareLinkResources==="true",B=!1,c=null,b={current:gn()},k=()=>{B=!0,c&&(c._destructor(),c=null),delete e.dataset.graphReady};window.addCleanup(k);let A=vr();if(G==="3d"&&!A){yt(r,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let I=G==="3d"||A,_=Cr(I),re=I?import(_n).then(S=>S.default??null).catch(S=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",S),null)):Promise.resolve(null),se=I?import(Gn).catch(S=>(console.error("[graph-landing] three unavailable; using default node spheres",S),null)):Promise.resolve(null),le=I?import(Rn).then(S=>S.UnrealBloomPass?new S.UnrealBloomPass:null).catch(S=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",S),null)):Promise.resolve(null),de=I?import(Dn).then(S=>S.forceCollide??null).catch(S=>(console.error("[graph-landing] d3-force-3d collision force unavailable",S),null)):Promise.resolve(null);_.catch(()=>{});let oe;try{oe=Je(E==="graphIndex"?await fetch(C).then(S=>S.json()):await fetchData)}catch(S){throw yt(r,"Graph could not load its index."),S}if(B)return;let fe=wr(ar(oe),{localeId:n,sourceLocale:i,prefixes:s},ne),w=Rt(fe,F),P=h.replace("{n}",String(w.nodes.length)).replace("{m}",String(w.links.length));for(let S of o)S.textContent=P;let N;try{N=await _}catch(S){throw yt(r,"Graph could not load. Check your network connection."),S}let[Q,ce,ee,me]=await Promise.all([re,se,le,de]);B||(r.replaceChildren(),c=N(r),r.__graphLanding=c,r.__graphData=w,Rr(c,w,b,{use3d:I,root:e,spriteText:Q,bloomPass:ee,three:ce,forceCollide:me,fullData:fe,expandHops:y,layout:{freezeAfterWarmup:x,warmupTicks:L,cooldownTicks:Y,chargeTheta:K,incrementalWarmup:H},lod:{labelDistance:O,dotDistance:z,cullDistance:te,fog:Z,nodeResolution:J,linkResolution:V,shareLinkResources:ie},interaction:{incrementalRepaint:U}}))}var $r="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem($r,n)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{Ur()});\n';

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
function pathToRoot(slug) {
  const root = slug.split("/").filter(Boolean).slice(0, -1).map(() => "..").join("/");
  return root || ".";
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
      const graphIndexPath = `${pathToRoot(slug)}/static/graphIndex.json`;
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
    body: GraphLanding_default(options),
    skipContentIndexFetch: options.indexSource === "graphIndex"
  };
  return instance;
};
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map