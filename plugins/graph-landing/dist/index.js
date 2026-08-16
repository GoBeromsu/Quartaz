// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function P(e){return typeof e=="string"?e:e.id}function Ye(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function ut(e,n){return Ye(e,n)==="dot"}function dt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((h,k)=>k.degree!==h.degree?k.degree-h.degree:h.id<k.id?-1:h.id>k.id?1:0).slice(0,Math.max(0,n)),u=new Set(r.map(h=>h.id)),s=e.links.filter(h=>{let k=P(h.source),L=P(h.target);return u.has(k)&&u.has(L)});return{nodes:r,links:s}}function ft(e,n,o,r){let u=new Set,s=Math.max(0,Math.floor(r));if(s<=0)return u;let h=new Set([o]),k=new Set([o]);for(let L=0;L<s;L+=1){let S=new Set;for(let G of k)for(let p of e.get(G)??[])h.has(p)||(h.add(p),S.add(p),n.has(p)||u.add(p));k=S}return u}var Ve="0.179.1",jt="https://esm.sh/force-graph@1.51.4",Xt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ve}`,Zt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ve}`,Jt=`https://esm.sh/three@${Ve}`,Qt=`https://esm.sh/three@${Ve}/examples/jsm/postprocessing/UnrealBloomPass.js`,en=8,tn=14;var Le=1,Ke=3.5,nn=.05,rn=2.6,on=1,gt=1,we=.18,At="graph-landing:lens",_t="graph-landing:tune",rt="graph-landing:ambient-audio",mt="UDVtMYqUAyw",_e=12,an=28e3,sn="https://www.youtube.com/iframe_api",ln=.18,cn=1.4,un=1.25,dn=1.15,fn=.55,ke={x:330,y:235,z:565},pt={x:0,y:0,z:0},gn=300,mn=1600,ht=1.3,pn=3.2,bt=1.05,yt=.32,wt=.28,hn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},bn="#a8b0c2",yn="#2a3348",kt={min:80,max:200},Lt={min:40,max:110},vt={min:160,max:280},Tt={min:90,max:170},Et=220,xt=2,wn=.15,kn=.8,Ln=350,je={min:-100,max:-190},Xe={min:72,max:116},Ze={min:130,max:260};function vn(e){return Oe(e-.5,0,1)}function He(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Je(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Tn(e){let n=[];for(let o of Object.values(e)){let r=He(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let s=r.multilingual,h=s&&typeof s=="object"?s:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:Je(r.links),tags:Je(r.tags),externalLinks:Je(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:h})}return n}function En(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Et?n:`${n.slice(0,Et).trimEnd()}\\u2026`}function ve(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function St(e){return ve(e)/(2*Math.PI)}function Re(e,n,o){let r=ve(e),u=Math.acos(2*St(`${e}:phi`)-1),s=n+(o-n)*St(`${e}:r`);return{x:s*Math.sin(u)*Math.cos(r),y:s*Math.sin(u)*Math.sin(r),z:s*Math.cos(u)}}function Rt(e){return e==="index"||e.endsWith("/index")}function Ft(e){return e==="tags"||e.startsWith("tags/")}function xn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Gt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Qe(e,n){return e.multilingual?.locale?e.multilingual.locale:Gt(e.slug,n).locale}function Sn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Gt(e.slug,n).permalink}`}function Cn(e,n){let o=e.find(r=>Qe(r,n.prefixes)===n.localeId)??e.find(r=>Qe(r,n.prefixes)===n.sourceLocale)??e.find(r=>Qe(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Oe(e,n,o){return Math.min(o,Math.max(n,e))}function Ct(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function Mn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function ot(e){return Mn(e).trim().toLowerCase()}function Nn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Pn(e){let n=e.trim();return n.length===0||Nn(n)||Ft(n)||Rt(n)?!0:ot(n).length===0}function Dn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Ht(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function In(e,n){let o=Ht(e);return o===null?!1:!n.includes(new URL(o).hostname)}function Mt(e){return`external:${e}`}function An(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),u=o.pathname;return(n.get(r)??0)>1&&u.length>1?`${r}${u}`:r}function _n(e){let n=new Map,o=new Map;for(let r of e){let u=ot(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let s=r.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,r.slug);let h=s.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,r.slug)}return{byBasename:n,byTitle:o}}function Rn(e,n,o){if(n.has(e))return e;let r=ot(e),u=o.byBasename.get(r);if(u)return u;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return s||null}function Fn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function Gn(e,n,o=void 0){let r=e.filter(d=>!Rt(d.slug)&&!Ft(d.slug)&&!xn(d)),u=new Map;for(let d of r){let g=Sn(d,n.prefixes),y=u.get(g)??[];y.push(d),u.set(g,y)}let s=[];for(let d of u.values())s.push(Cn(d,n));let h=new Set(s.map(d=>d.slug)),k=_n(s),L=new Map,S=[],G=new Set,p=new Map,H=d=>{L.set(d,(L.get(d)??0)+1)},R=(d,g,y)=>d<g?`${d}|${g}|${y}`:`${g}|${d}|${y}`,T=(d,g,y,E)=>{let D=R(d,g,y);return G.has(D)?!1:(G.add(D),S.push({source:d,target:g,kind:y}),E&&(H(d),H(g)),!0)};for(let d of s)for(let g of d.links){if(Pn(g))continue;let y=Rn(g,h,k);y!==null&&y!==d.slug&&T(d.slug,y,"wikilink",!0)}let I=Dn(),A=new Set;for(let d of s)for(let g of d.externalLinks){let y=Ht(g);y===null||!In(y,I)||(A.add(y),T(d.slug,Mt(y),"external",!0))}let U=new Map;for(let d of A){let g=new URL(d).hostname.replace(/^www\\./,"");U.set(g,(U.get(g)??0)+1)}let V=new Set,C=new Map;for(let d of s)for(let g of d.tags){p.set(g,(p.get(g)??0)+1);let y=`tag:${g}`;V.add(y),T(d.slug,y,"tag",!0);let E=C.get(g)??[];E.push(d.slug),C.set(g,E)}if(o!==!1){let d=o?.maxTagsPerNote,g=o?.maxEdges,y=0;e:for(let E of s)if(!(E.tags.length<2)&&!(d!==void 0&&E.tags.length>d))for(let D=0;D<E.tags.length;D+=1)for(let N=D+1;N<E.tags.length;N+=1){if(g!==void 0&&y>=g)break e;T(`tag:${E.tags[D]}`,`tag:${E.tags[N]}`,"cooc",!1)&&(y+=1)}}let M=new Map;for(let d of s){let g=Ct(d.slug);if(g==="root")continue;let y=M.get(g)??[];y.push(d.slug),M.set(g,y)}for(let d of M.values()){if(d.length<2)continue;let g=[...d].sort();for(let y=0;y<g.length;y+=1){let E=g[(y+1)%g.length],D=g[(y+xt)%g.length],N=g[y];N===void 0||E===void 0||(N!==E&&!G.has(R(N,E,"wikilink"))&&T(N,E,"folder",!1),g.length>xt+1&&D!==void 0&&N!==D&&!G.has(R(N,D,"wikilink"))&&T(N,D,"folder",!1))}}let Z=[...L.values()],q=Z.length>0?Math.min(...Z):0,re=Z.length>0?Math.max(...Z):0,$=d=>{let g=L.get(d)??0,y=Math.sqrt(g),E=Math.sqrt(q),N=Math.sqrt(re)-E;return N===0?(Le+Ke)/2:Le+(y-E)/N*(Ke-Le)},oe=[...s].sort((d,g)=>(L.get(g.slug)??0)-(L.get(d.slug)??0)),J=new Set(oe.filter(d=>(L.get(d.slug)??0)>0).slice(0,en).map(d=>d.slug)),K=s.map(d=>{let g=J.has(d.slug),y=g?Re(d.slug,Lt.min,Lt.max):Re(d.slug,kt.min,kt.max);return{id:d.slug,name:d.title,type:"note",val:$(d.slug),degree:L.get(d.slug)??0,isHub:g,tag:"",slug:d.slug,url:"",folder:Ct(d.slug),tags:d.tags,dominantTag:Fn(d.tags,p),excerpt:En(d.content),phase:ve(d.slug),x:y.x,y:y.y,z:y.z}});for(let d of A){let g=Mt(d),y=Re(g,vt.min,vt.max);K.push({id:g,name:An(d,U),type:"external",val:$(g)*fn,degree:L.get(g)??0,isHub:!1,tag:"",slug:"",url:d,folder:"",tags:[],dominantTag:"",excerpt:d,phase:ve(g),x:y.x,y:y.y,z:y.z})}for(let d of V){let g=d.slice(4),y=Re(d,Tt.min,Tt.max);K.push({id:d,name:g,type:"tag",val:Oe($(d)*.7,Le,Ke),degree:L.get(d)??0,isHub:!1,tag:g,slug:`tags/${g}`,url:"",folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:ve(d),x:y.x,y:y.y,z:y.z})}return{nodes:K,links:S}}function et(e){let n=new Map,o=(r,u)=>{let s=n.get(r)??new Set;s.add(u),n.set(r,s)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let u=P(r.source),s=P(r.target);o(u,s),o(s,u)}return n}function ue(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Ot(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ue("--light","#ffffff"),ink:ue("--darkgray","#0f0f0f"),accent:ue("--secondary","#a52142"),tertiary:ue("--tertiary","#c75b75"),gray:ue("--gray","#737373"),external:ue("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Ge(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Hn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function On(){return Hn()&&!Ge()}function Y(){return document.documentElement.getAttribute("saved-theme")==="dark"}function ze(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function de(e,n){let o=ze(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function X(e,n,o){let r=ze(e),u=ze(n);if(!r||!u)return e;let s=(h,k)=>Math.round(h+(k-h)*o);return`rgb(${s(r.r,u.r)}, ${s(r.g,u.g)}, ${s(r.b,u.b)})`}function zt(e){return Y()?X(e.bg,"#05070f",.88):e.bg}function zn(e){let n=ze(e);if(!n)return e;let o=r=>{let u=r/255,s=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(s*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Vn(e){return zn(zt(e))}function Vt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function Nt(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Vt(e,[n.accent,n.tertiary,n.ink,n.gray])}function Bn(e,n){return e.length===0?n.ink:Vt(e,[n.accent,n.tertiary])}function Bt(e){let n=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function Un(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Bt(e);window.location.assign(n.toString())}function $n(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function qn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function tt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Wn(e){let o=await import(e?Xt:jt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):qn(o)}function Yn(){try{let e=sessionStorage.getItem(At);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Kn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(_t);if(!n)return e;let o=He(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:s,spread:h}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Fe(e){try{sessionStorage.setItem(_t,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function nt(e){try{sessionStorage.setItem(At,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function jn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Xn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Zn(e,n){return e.type==="note"&&e.folder===n}function Pt(e,n){let o=P(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function Jn(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return u.forEach((s,h)=>{let k=Math.PI*2*h/Math.max(u.length,1),L={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===s&&r.set(S.id,L)}),r}if(n==="tag"){let u=e.nodes.filter(h=>h.type==="tag"),s=new Map;u.forEach((h,k)=>{let L=Math.PI*2*k/Math.max(u.length,1);s.set(h.tag,{x:Math.cos(L)*o,y:Math.sin(L)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let k=s.get(h.tag);k&&r.set(h.id,k)}else if(h.dominantTag.length>0){let k=s.get(h.dominantTag);k&&r.set(h.id,k)}}return r}function Qn(e,n){let o=[],r=u=>{let s=n*u;for(let h of o){let k=e(h);k&&(h.vx=(h.vx??0)+(k.x-(h.x??0))*s,h.vy=(h.vy??0)+(k.y-(h.y??0))*s,h.vz=(h.vz??0)+(k.z-(h.z??0))*s)}};return r.initialize=u=>{o=u},r}function Dt(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let s=u.getAttribute(r);u.setAttribute("aria-pressed",s===o?"true":"false")}}function er(e,n,o,r){let u=et(n.links),s=(t,a,c)=>t<a?`${t}|${a}|${c}`:`${a}|${t}|${c}`,h=new Map,k=new Map,L=new Set,S=new Set;r.fullData!==n&&(h=new Map(r.fullData.nodes.map(t=>[t.id,t])),k=et(r.fullData.links),L=new Set(n.nodes.map(t=>t.id)),S=new Set(n.links.map(t=>s(P(t.source),P(t.target),t.kind))));let G=t=>{if(r.fullData===n)return!1;let a=ft(k,L,t,r.expandHops);if(a.size===0)return!1;for(let c of a){let l=h.get(c);l&&(n.nodes.push(l),L.add(c))}for(let c of r.fullData.links){let l=P(c.source),i=P(c.target);if(!L.has(l)||!L.has(i))continue;let f=s(l,i,c.kind);S.has(f)||(S.add(f),n.links.push(c))}return u=et(n.links),!0},p={lens:Yn(),allLabels:!1,focusTag:null,focusFolder:null},H=null,R=null,T=Kn(),I=()=>R??H,A=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,tn).map(t=>t.id)),U=t=>{let a=t.val;return t.isHub&&(a*=cn),p.lens==="tag"&&t.type==="tag"&&(a*=un),p.focusTag&&t.id===`tag:${p.focusTag}`&&(a*=dn),a},V=t=>{let a=I();return p.allLabels||a===t.id||a!==null&&(u.get(a)?.has(t.id)??!1)?!0:A.has(t.id)},C=t=>{let a=Oe((U(t)-Le)/5,0,1);return(ht+a*(pn-ht))*T.nodeScale},M=t=>{let a=I();if(a!==null)return a===t||(u.get(a)?.has(t)??!1);if(p.focusTag===null&&p.focusFolder===null)return!0;let c=n.nodes.find(l=>l.id===t);return c?p.focusFolder!==null?Zn(c,p.focusFolder):p.focusTag!==null&&Xn(c,p.focusTag):!1},Z=t=>t.type==="external"?o.current.external:p.lens==="tag"?t.type==="tag"?o.current.tertiary:Bn(t.dominantTag,o.current):p.lens==="folder"?t.type==="tag"?o.current.tertiary:Nt(t.folder,o.current):p.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,q=t=>{let a=I();if(a!==null&&(a===t.id||(u.get(a)?.has(t.id)??!1)))return o.current.accent;let c=Z(t);return M(t.id)?Y()?t.type==="external"?X(o.current.external,"#ffffff",.18):t.type==="tag"?X(o.current.tertiary,"#ffffff",.22):t.isHub?X("#fff3e4",o.current.accent,.1):X("#ffffff",o.current.accent,.12):t.type==="external"?X(o.current.external,"#08343a",.12):t.type==="tag"?X(o.current.tertiary,o.current.accent,.55):t.isHub?X(o.current.ink,o.current.accent,.22):c:de(c,we)},re=t=>{let a=Y();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},$=t=>{let a=P(t.source),c=P(t.target),l=I();return l!==null&&(a===l||c===l)?Y()?.72:.78:(l!==null||p.focusTag!==null||p.focusFolder!==null)&&(!M(a)||!M(c))?re(t.kind)*we:re(t.kind)},oe=t=>{let a=P(t.source),c=P(t.target),l=I(),i=Y()?bn:yn;return l!==null&&(a===l||c===l)?X(o.current.accent,i,.45):i},J=t=>de(oe(t),$(t)),K=()=>n,d=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Math.hypot(ke.x,ke.y,ke.z),c=a/Oe(T.zoom,.4,2.5),l=e.cameraPosition(),i=ke,f=a;if(l&&typeof l.x=="number"&&typeof l.y=="number"&&typeof l.z=="number"){let m=Math.hypot(l.x,l.y,l.z);m>1&&(i={x:l.x,y:l.y,z:l.z},f=m)}let w=c/f;e.cameraPosition({x:i.x*w,y:i.y*w,z:i.z*w},pt,t);return}typeof e.zoom=="function"&&e.zoom(T.zoom,t)},g=()=>{let t=vn(T.spread),a=je.min+t*(je.max-je.min),c=Xe.min+t*(Xe.max-Xe.min),l=e.d3Force("charge");l?.strength&&l.strength(a),l?.theta&&r.layout.chargeTheta!==void 0&&l.theta(r.layout.chargeTheta);let i=e.d3Force("link");i?.distance&&i.distance(v=>p.lens==="tag"&&v.kind==="tag"?c*.72:c),i?.strength&&i.strength(v=>{if(v.kind==="cooc"||v.kind==="folder")return .04;if(p.lens==="tag"&&v.kind==="tag")return .95;if(p.lens==="folder"){let _=Pt(n.nodes,v.source),B=Pt(n.nodes,v.target);if(_!==null&&_===B)return .72}return v.kind==="tag"?.65:.8});let f=e.d3Force("center");f?.strength&&f.strength(nn);let w=Ze.min+t*(Ze.max-Ze.min),m=Jn(n,p.lens,w),b=p.lens==="folder"||p.lens==="tag"?.08:0;e.d3Force("cluster",Qn(v=>m.get(v.id)??null,b)),r.use3d&&e.d3Force("flattenZ",null)},y=new Map,E=new Map,D=new Map,N=new Map,j=(t,a,c)=>{let l=`${Math.round(a*4)}|${c}`,i=N.get(l);if(i)return i;let f={geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:c})};return N.set(l,f),f},W=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,c=r.lod.dotDistance,l=r.lod.nodeResolution??14;y.clear(),E.clear(),N.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(i=>{let f=C(i),w=q(i),m=!1;if(a){if(Y()){let B=i.isHub?1.35:1.1,z=new a.MeshLambertMaterial({color:w,emissive:w,emissiveIntensity:B});y.set(i.id,{material:z,base:B,phase:i.phase}),m=new a.Mesh(new a.SphereGeometry(f,l,l),z)}else m=new a.Mesh(new a.SphereGeometry(f,l,l),new a.MeshBasicMaterial({color:w}));if(c!==void 0&&m!==!1){let B=j(a,f,w),z=new a.Mesh(B.geometry,B.material),te=new a.LOD;te.addLevel(m,0),te.addLevel(z,c),m=te}}if(!V(i)||!t)return m;let b=new t(i.name),v=Y()?"rgba(255, 255, 255, 0.85)":de(o.current.ink,.88);if(b.color=M(i.id)?v:de(v,we),b.fontWeight="400",b.strokeWidth=0,b.textHeight=A.has(i.id)?6.5:5.5,b.center.set(0,.5),b.position.x=f+2,b.position.y=0,r.lod.labelDistance!==void 0&&E.set(i.id,{sprite:b,node:i}),!a||m===!1)return b;let _=new a.Group;return _.add(m),_.add(b),_})},Be=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),c=r.lod.linkResolution??5,l=r.lod.cullDistance;D.clear(),e.linkThreeObject(i=>{let f=hn[i.kind]*T.edgeScale,w=new t.MeshBasicMaterial({color:oe(i),transparent:!0,opacity:$(i),depthWrite:!1}),m=new t.Mesh(new t.CylinderGeometry(f,f,1,c),w);return l!==void 0&&D.set(i,m),m}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((i,f)=>{let w=f.end.x-f.start.x,m=f.end.y-f.start.y,b=f.end.z-f.start.z,v=Math.sqrt(w*w+m*m+b*b);return i.position.x=(f.start.x+f.end.x)/2,i.position.y=(f.start.y+f.end.y)/2,i.position.z=(f.start.z+f.end.z)/2,i.scale.x=1,i.scale.y=Math.max(v,.01),i.scale.z=1,i.quaternion.setFromUnitVectors(a,new t.Vector3(w,m,b).normalize()),!0})},Te=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=I();if(a===null)return 0;let c=P(t.source),l=P(t.target);return c===a||l===a?2:0})},O=()=>{e.nodeVal(U),e.nodeColor(q),e.linkColor(J),e.linkWidth(t=>{let a=P(t.source),c=P(t.target),l=I(),i=T.edgeScale;return l!==null&&(a===l||c===l)?.7*i:t.kind==="wikilink"||t.kind==="external"?.5*i:(t.kind==="tag"?.35:.25)*i}),typeof e.linkOpacity=="function"&&e.linkOpacity(gt),Te(),Be(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},ae=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(f,w)=>{let m=document.createElement("span");m.className="graph-landing__legend-item";let b=document.createElement("span");b.className="graph-landing__dot",b.setAttribute("aria-hidden","true"),b.style.background=f;let v=document.createElement("span");return v.textContent=w,m.append(b,v),m},c=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,c),a(o.current.tertiary,l),a(o.current.external,i))},Ee=t=>{let a=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[t.dataset.key]=t.dataset.value,c.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=t.dotColor,l.append(f)}l.append(document.createTextNode(t.label));let i=document.createElement("span");return i.className="graph-landing__tag-count",i.textContent=String(t.count),c.append(l,i),a.append(c),a},xe=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),c=r.root.querySelector(".graph-landing__tags");if(p.lens==="folder"){let i=r.root.dataset.folderRootLabel??"root",f=new Map;for(let m of n.nodes)m.type==="note"&&f.set(m.folder,(f.get(m.folder)??0)+1);let w=[...f.entries()].sort((m,b)=>b[1]-m[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=w.length===0),t.replaceChildren(...w.map(([m,b])=>Ee({dataset:{key:"graphFolder",value:m},pressed:p.focusFolder===m,dotColor:Nt(m,o.current),label:m==="root"?i:m,count:b})));return}let l=n.nodes.filter(i=>i.type==="tag").sort((i,f)=>f.degree-i.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=l.length===0),t.replaceChildren(...l.map(i=>Ee({dataset:{key:"graphTag",value:i.tag},pressed:p.focusTag===i.tag,dotColor:null,label:i.tag,count:i.degree})))},ne=()=>{e.graphData(K()),g(),O(),W(),ae(),xe(),Dt(r.root,"[data-graph-lens]",p.lens,"data-graph-lens"),e.d3ReheatSimulation()},Se=t=>{p.lens=t,t!=="tag"&&(p.focusTag=null),t!=="folder"&&(p.focusFolder=null),nt(t),ne()},Ce=t=>{p.focusTag=p.focusTag===t?null:t,p.focusFolder=null,p.focusTag&&(p.lens="tag",nt("tag")),ne()},se=t=>{p.focusFolder=p.focusFolder===t?null:t,p.focusTag=null,p.focusFolder&&(p.lens="folder",nt("folder")),ne()},fe=()=>r.use3d?Vn(o.current):zt(o.current),ge=()=>{!r.use3d||!r.lod.fog||!r.three||typeof e.scene!="function"||(e.scene().fog=new r.three.Fog(fe(),gn,mn))};e.graphData(K()),e.backgroundColor(fe()),e.nodeLabel(t=>t.name),e.nodeRelSize(rn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(on),typeof e.linkOpacity=="function"&&e.linkOpacity(gt),g(),O();let Q=r.root.querySelector("[data-graph-preview]"),ie=r.root.querySelector("[data-graph-preview-chip]"),le=r.root.querySelector("[data-graph-preview-title]"),x=r.root.querySelector("[data-graph-preview-excerpt]"),Me=0;window.addCleanup(()=>window.clearTimeout(Me));let Ut=t=>{if(!(Q instanceof HTMLElement)||!(ie instanceof HTMLElement)||!(le instanceof HTMLElement)||!(x instanceof HTMLElement))return;window.clearTimeout(Me);let a=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let i=r.root.dataset.previewTagTemplate??"{n} notes";ie.textContent=c,le.textContent=`#${t.tag}`,x.textContent=i.replace("{n}",String(t.degree))}else t.type==="external"?(ie.textContent=l,le.textContent=t.name,x.textContent=t.url):(ie.textContent=a,le.textContent=t.name,x.textContent=t.excerpt);Q.hidden=!1,Q.dataset.visible="true"},at=()=>{Q instanceof HTMLElement&&(window.clearTimeout(Me),Me=window.setTimeout(()=>{Q.dataset.visible="false",Q.hidden=!0},Ln))};if(e.onNodeHover(t=>{H=t?t.id:null,R===null&&(t?Ut(t):at()),O(),r.use3d&&W()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Ge()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=ln;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=Y()?bt:0,r.bloomPass.radius=yt,r.bloomPass.threshold=wt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ke,pt),T.zoom!==1&&d(0)),W(),ge(),!Ge()){let t=0,a=()=>{let c=performance.now()/1e3*kn;for(let l of y.values())l.material.emissiveIntensity=l.base*(1+wn*Math.sin(c+l.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}if(r.lod.labelDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.labelDistance,a=e.cameraPosition.bind(e),c=0,l=()=>{let i=a();if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number")for(let f of E.values()){let w=f.node.x??0,m=f.node.y??0,b=f.node.z??0,v=Math.hypot(i.x-w,i.y-m,i.z-b);f.sprite.visible=Ye(v,t)==="full"}c=window.requestAnimationFrame(l)};c=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(c))}if(r.lod.cullDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.cullDistance,a=e.cameraPosition.bind(e),c=0,l=()=>{let i=a();if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let f=I();for(let[w,m]of D){let b=P(w.source),v=P(w.target);if(f!==null&&(b===f||v===f)){m.visible=!0;continue}let _=Math.hypot(i.x-m.position.x,i.y-m.position.y,i.z-m.position.z);m.visible=!ut(_,t)}}c=window.requestAnimationFrame(l)};c=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(c))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,c)=>{let l=C(t),i=t.x??0,f=t.y??0;if(a.save(),a.beginPath(),a.arc(i,f,l,0,Math.PI*2),a.fillStyle=q(t),a.fill(),t.isHub&&(a.strokeStyle=M(t.id)?o.current.accent:de(o.current.accent,we),a.lineWidth=1.2/c,a.stroke()),V(t)){let w=11.5/c;a.font=`${w}px ${o.current.font}`,a.fillStyle=M(t.id)?o.current.ink:de(o.current.ink,we),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,i,f-l-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,c)=>{let l=C(t)+8;c.beginPath(),c.arc(t.x??0,t.y??0,l,0,Math.PI*2),c.fillStyle=a,c.fill()});let Ne=r.root.querySelector("[data-graph-inspect]"),Pe=r.root.querySelector("[data-graph-inspect-chip]"),De=r.root.querySelector("[data-graph-inspect-title]"),Ie=r.root.querySelector("[data-graph-inspect-excerpt]"),Ue=r.root.querySelector("[data-graph-inspect-tags]"),$e=r.root.querySelector("[data-graph-inspect-connected]"),F=r.root.querySelector("[data-graph-inspect-open]"),ce=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),c=r.root.querySelector("[data-graph-rail-scrim]"),l=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",t?"false":"true"),c instanceof HTMLElement&&(c.hidden=!t)},Ae=t=>{Ge()||typeof e.controls!="function"||(e.controls().autoRotate=t)},$t=t=>{let a=u.get(t.id)??new Set,c=[];for(let l of a){let i=n.nodes.find(f=>f.id===l);i&&c.push(i)}return c.sort((l,i)=>i.degree-l.degree)},qt=t=>{if(!(Ne instanceof HTMLElement)||!(Pe instanceof HTMLElement)||!(De instanceof HTMLElement)||!(Ie instanceof HTMLElement)||!(Ue instanceof HTMLElement)||!($e instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendLinks??"Links",i=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Pe.textContent=c,De.textContent=`#${t.tag}`,Ie.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Pe.textContent=l,De.textContent=t.name,Ie.textContent=t.url):(Pe.textContent=a,De.textContent=t.name,Ie.textContent=t.excerpt);let f=t.tags.map(m=>{let b=document.createElement("li");return b.textContent=m,b});Ue.replaceChildren(...f),Ue.hidden=f.length===0;let w=$t(t).slice(0,12);if(w.length===0){let m=document.createElement("li");m.className="graph-landing__inspect-empty",m.textContent=i,$e.replaceChildren(m)}else $e.replaceChildren(...w.map(m=>{let b=document.createElement("li"),v=document.createElement("button");v.type="button",v.className="graph-landing__inspect-link",v.dataset.graphInspectId=m.id;let _=m.type==="tag"?c:m.type==="external"?l:a,B=document.createElement("span");B.textContent=_;let z=document.createElement("strong");return z.textContent=m.type==="tag"?`#${m.tag}`:m.name,v.append(B,z),b.append(v),b}));F instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(F.hidden=!1,F.href=Bt(t.slug).toString(),F.textContent=r.root.dataset.inspectRead??"Read note",F.removeAttribute("target"),F.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(F.hidden=!1,F.href=t.url,F.textContent=r.root.dataset.inspectOpenExternal??"Open",F.target="_blank",F.rel="noopener noreferrer"):(F.hidden=!0,F.removeAttribute("href"),F.removeAttribute("target"),F.removeAttribute("rel"))),Ne.hidden=!1,r.root.dataset.inspecting="true",ce(!1),at()},me=()=>{R=null,Ne instanceof HTMLElement&&(Ne.hidden=!0),r.root.dataset.inspecting="false",Ae(!0),O(),r.use3d&&W()},Wt=t=>{if(R===t.id&&t.type==="note"&&t.slug.length>0){Un(t.slug);return}if(R===t.id&&t.type==="external"&&t.url.length>0){$n(t.url);return}R=t.id,qt(t),O(),r.use3d&&W()},qe=t=>{G(t.id)&&ne(),Wt(t)},We=!1;e.onNodeClick((t,a)=>{t&&(We=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),qe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{me(),ce(!1)});let ee=r.root.querySelector("#graph-landing-mount");if(ee instanceof HTMLElement){let t=null,a=f=>{t={x:f.clientX,y:f.clientY},Ae(!1)},c=(f,w)=>{if(typeof e.graph2ScreenCoords!="function")return null;let m=ee.getBoundingClientRect(),b=f-m.left,v=w-m.top,_=null,B=4096;for(let z of K().nodes){if(z.x===void 0||z.y===void 0)continue;let te=e.graph2ScreenCoords(z.x,z.y,z.z??0),Yt=(te.x-b)**2+(te.y-v)**2,Kt=(te.x-f)**2+(te.y-w)**2,ct=Math.min(Yt,Kt);ct<B&&(B=ct,_=z)}return _},l=f=>{let w=t;t=null,Ae(!0),!(!w||(f.clientX-w.x)**2+(f.clientY-w.y)**2>25)&&window.setTimeout(()=>{if(We){We=!1;return}let b=c(f.clientX,f.clientY);b?qe(b):me()},0)},i=()=>{t=null,Ae(!0)};ee.addEventListener("pointerdown",a,!0),ee.addEventListener("pointerup",l,!0),ee.addEventListener("pointercancel",i,!0),window.addCleanup(()=>{ee.removeEventListener("pointerdown",a,!0),ee.removeEventListener("pointerup",l,!0),ee.removeEventListener("pointercancel",i,!0)})}Dt(r.root,"[data-graph-lens]",p.lens,"data-graph-lens"),ae(),xe(),p.lens!=="all"&&ne(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let st=()=>{o.current=Ot(),e.backgroundColor(fe()),ge(),r.bloomPass&&(r.bloomPass.strength=Y()?bt:0,r.bloomPass.radius=yt,r.bloomPass.threshold=wt),O(),W(),ae()};document.addEventListener("themechange",st),window.addCleanup(()=>document.removeEventListener("themechange",st));let it=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){me();return}if(a.closest("[data-graph-rail-toggle]")){let b=r.root.dataset.railOpen!=="true";b&&me(),ce(b);return}if(a.closest("[data-graph-rail-scrim]")){ce(!1);return}let c=a.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let b=r.fullData.nodes.find(v=>v.id===c.dataset.graphInspectId);b&&qe(b);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&jn(l.dataset.graphLens)){Se(l.dataset.graphLens);return}let i=a.closest("[data-graph-tag]");if(i instanceof HTMLElement&&i.dataset.graphTag){Ce(i.dataset.graphTag);return}let f=a.closest("[data-graph-folder]");if(f instanceof HTMLElement&&f.dataset.graphFolder){se(f.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let w=a.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){p.allLabels=!p.allLabels,w.setAttribute("aria-pressed",p.allLabels?"true":"false");let b=w.dataset.labelShow??"Labels",v=w.dataset.labelHide??"Labels",_=p.allLabels?v:b;w.title=_,w.setAttribute("aria-label",_),W();return}if(a.closest("[data-graph-theme]")){let b=Y()?"light":"dark";document.documentElement.setAttribute("saved-theme",b),localStorage.setItem("theme",b),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${b}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:b}}));return}let m=a.closest("[data-graph-tags-toggle]");if(m instanceof HTMLButtonElement){let b=r.root.querySelector(".graph-landing__tags");if(b instanceof HTMLElement){let v=b.dataset.open==="true";b.dataset.open=v?"false":"true",m.setAttribute("aria-expanded",v?"false":"true")}}},pe=r.root.querySelector("[data-graph-node-scale]"),he=r.root.querySelector("[data-graph-edge-scale]");if(pe instanceof HTMLInputElement){pe.value=String(Math.round(T.nodeScale*100));let t=()=>{T.nodeScale=Number(pe.value)/100,Fe(T),O(),r.use3d&&W()};pe.addEventListener("input",t),window.addCleanup(()=>pe.removeEventListener("input",t))}if(he instanceof HTMLInputElement){he.value=String(Math.round(T.edgeScale*100));let t=()=>{T.edgeScale=Number(he.value)/100,Fe(T),O()};he.addEventListener("input",t),window.addCleanup(()=>he.removeEventListener("input",t))}let be=r.root.querySelector("[data-graph-zoom]");if(be instanceof HTMLInputElement){be.value=String(Math.round(T.zoom*100));let t=()=>{T.zoom=Number(be.value)/100,Fe(T),d(200)};be.addEventListener("input",t),window.addCleanup(()=>be.removeEventListener("input",t))}let ye=r.root.querySelector("[data-graph-spread]");if(ye instanceof HTMLInputElement){ye.value=String(Math.round(T.spread*100));let t=()=>{T.spread=Number(ye.value)/100,Fe(T),g(),e.d3ReheatSimulation()};ye.addEventListener("input",t),window.addCleanup(()=>ye.removeEventListener("input",t))}ce(!1),r.root.addEventListener("click",it),window.addCleanup(()=>r.root.removeEventListener("click",it));let lt=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){ce(!1);return}me()}};window.addEventListener("keydown",lt),window.addCleanup(()=>window.removeEventListener("keydown",lt))}function tr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function nr(){try{return window.localStorage.getItem(rt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function It(e){try{if(e){window.localStorage.setItem(rt,"stopped");return}window.localStorage.removeItem(rt)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function rr(e){let n=performance.now(),o=0,r=u=>{let s=Math.min(1,(u-n)/e.durationMs),h=s*s;e.apply(e.from+(e.to-e.from)*h),s<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function or(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,u=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof u=="function"&&u();let s=r.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=sn,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function ar(e){return new e.api.Player(e.host,{videoId:mt,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:mt,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function sr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",u=e.dataset.audioPlay??"Play music",s=null,h=!1,k=null,L=!nr(),S=!1,G=C=>{n.setAttribute("aria-pressed",C?"true":"false"),n.setAttribute("aria-label",C?r:u),n.title=C?r:u,n.dataset.playing=C?"true":"false"},p=()=>{k&&(k(),k=null)},H=C=>{s&&s.setVolume(Math.max(0,Math.min(_e,C)))},R=C=>{!L||S||(S=!0,G(!0),C.unMute(),H(0),C.playVideo(),p(),k=rr({from:0,to:_e,durationMs:an,apply:H}))},T=()=>{L=!1,S=!1,p(),It(!0),s&&(s.mute(),s.pauseVideo(),H(0)),G(!1)},I=async()=>{if(!s)try{let C=await or();if(s)return;s=ar({api:C,host:o,onReady:M=>{h=!0,M.mute(),H(0),M.playVideo()},onEnded:M=>{L&&(M.playVideo(),H(_e))}})}catch(C){console.error("[graph-landing] ambient audio unavailable",C)}},A=C=>{let M=C.target;if(!(M instanceof Element&&M.closest("[data-graph-audio-toggle]"))&&!(!L||S||tr())){if(h&&s){R(s);return}I()}},U=()=>{if(L&&S){T();return}if(L=!0,It(!1),h&&s){R(s);return}I()},V=()=>{if(s){if(document.hidden){p(),s.pauseVideo();return}L&&S&&(s.playVideo(),H(_e))}};G(L),I(),n.addEventListener("click",U),e.addEventListener("pointerdown",A,!0),e.addEventListener("touchstart",A,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",V),window.addCleanup(()=>{n.removeEventListener("click",U),e.removeEventListener("pointerdown",A,!0),e.removeEventListener("touchstart",A,!0),document.removeEventListener("visibilitychange",V),p(),s&&(s.pauseVideo(),s.destroy(),s=null)})}async function ir(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",sr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",s=(e.dataset.localePrefixes??"").split(",").map(x=>x.trim()).filter(x=>x.length>0),h=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",L=e.dataset.graphIndexPath??"",S=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,G=S!==void 0&&Number.isFinite(S)&&S>=0?S:void 0,p=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,H=Number.isFinite(p)?p:1,R=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,T=e.dataset.graphRenderMode==="3d"?"3d":"auto",I=e.dataset.graphLayoutFreezeAfterWarmup==="true",A=e.dataset.graphLayoutWarmupTicks?Number.parseInt(e.dataset.graphLayoutWarmupTicks,10):void 0,U=A!==void 0&&Number.isFinite(A)&&A>=0?A:void 0,V=e.dataset.graphLayoutCooldownTicks?Number.parseInt(e.dataset.graphLayoutCooldownTicks,10):void 0,C=V!==void 0&&Number.isFinite(V)&&V>=0?V:void 0,M=e.dataset.graphLayoutChargeTheta?Number.parseFloat(e.dataset.graphLayoutChargeTheta):void 0,Z=M!==void 0&&Number.isFinite(M)&&M>=0?M:void 0,q=e.dataset.graphLodLabelDistance?Number.parseFloat(e.dataset.graphLodLabelDistance):void 0,re=q!==void 0&&Number.isFinite(q)&&q>=0?q:void 0,$=e.dataset.graphLodDotDistance?Number.parseFloat(e.dataset.graphLodDotDistance):void 0,oe=$!==void 0&&Number.isFinite($)&&$>=0?$:void 0,J=e.dataset.graphLodCullDistance?Number.parseFloat(e.dataset.graphLodCullDistance):void 0,K=J!==void 0&&Number.isFinite(J)&&J>=0?J:void 0,d=e.dataset.graphLodFog==="true",g=e.dataset.graphLodNodeResolution?Number.parseInt(e.dataset.graphLodNodeResolution,10):void 0,y=g!==void 0&&Number.isFinite(g)&&g>=0?g:void 0,E=e.dataset.graphLodLinkResolution?Number.parseInt(e.dataset.graphLodLinkResolution,10):void 0,D=E!==void 0&&Number.isFinite(E)&&E>=0?E:void 0,N=!1,j=null,W={current:Ot()},Be=()=>{N=!0,j&&(j._destructor(),j=null),delete e.dataset.graphReady};window.addCleanup(Be);let Te=On();if(T==="3d"&&!Te){tt(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let O=T==="3d"||Te,ae=Wn(O),Ee=O?import(Zt).then(x=>x.default??null).catch(x=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",x),null)):Promise.resolve(null),xe=O?import(Jt).catch(x=>(console.error("[graph-landing] three unavailable; using default node spheres",x),null)):Promise.resolve(null),ne=O?import(Qt).then(x=>x.UnrealBloomPass?new x.UnrealBloomPass:null).catch(x=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",x),null)):Promise.resolve(null);ae.catch(()=>{});let Se;try{Se=He(k==="graphIndex"?await fetch(L).then(x=>x.json()):await fetchData)}catch(x){throw tt(n,"Graph could not load content index."),x}if(N)return;let Ce=Gn(Tn(Se),{localeId:r,sourceLocale:u,prefixes:s},R),se=dt(Ce,G),fe=h.replace("{n}",String(se.nodes.length)).replace("{m}",String(se.links.length));for(let x of o)x.textContent=fe;let ge;try{ge=await ae}catch(x){throw tt(n,"Graph could not load. Check your network connection."),x}let[Q,ie,le]=await Promise.all([Ee,xe,ne]);N||(n.replaceChildren(),j=ge(n),n.__graphLanding=j,n.__graphData=se,er(j,se,W,{use3d:O,root:e,spriteText:Q,bloomPass:le,three:ie,fullData:Ce,expandHops:H,layout:{freezeAfterWarmup:I,warmupTicks:U,cooldownTicks:C,chargeTheta:Z},lod:{labelDistance:re,dotDistance:oe,cullDistance:K,fog:d,nodeResolution:y,linkResolution:D}}))}var lr="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(lr,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{ir()});\n';

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
      const localeId = multilingual?.locale ?? slug.split("/")[0] ?? "ko";
      const multilingualCfg = cfg.multilingual;
      const sourceLocale = multilingualCfg?.sourceLocale ?? "ko";
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