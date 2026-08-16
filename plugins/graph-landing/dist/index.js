// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Ne="0.179.1",zt="https://esm.sh/force-graph@1.51.4",Vt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ne}`,Ut=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ne}`,Bt=`https://esm.sh/three@${Ne}`,$t=`https://esm.sh/three@${Ne}/examples/jsm/postprocessing/UnrealBloomPass.js`,qt=8,Yt=14;var de=1,De=3.5,Kt=.05,Wt=2.6,jt=1,tt=1,ce=.18,vt="graph-landing:lens",Tt="graph-landing:tune",Be="graph-landing:ambient-audio",nt="UDVtMYqUAyw",Te=12,Xt=28e3,Zt="https://www.youtube.com/iframe_api",Jt=.18,Qt=1.4,en=1.25,tn=1.15,nn=.55,ue={x:330,y:235,z:565},rt={x:0,y:0,z:0},ot=1.3,rn=3.2,at=1.05,st=.32,it=.28,on={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},an="#a8b0c2",sn="#2a3348",lt={min:80,max:200},ct={min:40,max:110},ut={min:160,max:280},dt={min:90,max:170},ft=220,gt=2,ln=.15,cn=.8,un=350,Re={min:-100,max:-190},He={min:72,max:116},Oe={min:130,max:260};function dn(e){return Me(e-.5,0,1)}function Ce(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Fe(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function fn(e){let n=[];for(let o of Object.values(e)){let r=Ce(o),d=typeof r.slug=="string"?r.slug:"";if(d.length===0)continue;let s=r.multilingual,m=s&&typeof s=="object"?s:void 0;n.push({slug:d,title:typeof r.title=="string"?r.title:d,links:Fe(r.links),tags:Fe(r.tags),externalLinks:Fe(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:m})}return n}function gn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=ft?n:`${n.slice(0,ft).trimEnd()}\\u2026`}function fe(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function mt(e){return fe(e)/(2*Math.PI)}function Le(e,n,o){let r=fe(e),d=Math.acos(2*mt(`${e}:phi`)-1),s=n+(o-n)*mt(`${e}:r`);return{x:s*Math.sin(d)*Math.cos(r),y:s*Math.sin(d)*Math.sin(r),z:s*Math.cos(d)}}function Lt(e){return e==="index"||e.endsWith("/index")}function xt(e){return e==="tags"||e.startsWith("tags/")}function mn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function St(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function ze(e,n){return e.multilingual?.locale?e.multilingual.locale:St(e.slug,n).locale}function pn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${St(e.slug,n).permalink}`}function hn(e,n){let o=e.find(r=>ze(r,n.prefixes)===n.localeId)??e.find(r=>ze(r,n.prefixes)===n.sourceLocale)??e.find(r=>ze(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Me(e,n,o){return Math.min(o,Math.max(n,e))}function pt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function bn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function $e(e){return bn(e).trim().toLowerCase()}function yn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function wn(e){let n=e.trim();return n.length===0||yn(n)||xt(n)||Lt(n)?!0:$e(n).length===0}function kn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Ct(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function En(e,n){let o=Ct(e);return o===null?!1:!n.includes(new URL(o).hostname)}function ht(e){return`external:${e}`}function vn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),d=o.pathname;return(n.get(r)??0)>1&&d.length>1?`${r}${d}`:r}function Tn(e){let n=new Map,o=new Map;for(let r of e){let d=$e(r.slug);d.length>0&&!n.has(d)&&n.set(d,r.slug);let s=r.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,r.slug);let m=s.replace(/\\s+/g,"-");m.length>0&&!o.has(m)&&o.set(m,r.slug)}return{byBasename:n,byTitle:o}}function Ln(e,n,o){if(n.has(e))return e;let r=$e(e),d=o.byBasename.get(r);if(d)return d;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return s||null}function xn(e,n){return e.length===0?"":[...e].sort((r,d)=>(n.get(d)??0)-(n.get(r)??0))[0]??""}function Sn(e,n,o=void 0){let r=e.filter(u=>!Lt(u.slug)&&!xt(u.slug)&&!mn(u)),d=new Map;for(let u of r){let c=pn(u,n.prefixes),y=d.get(c)??[];y.push(u),d.set(c,y)}let s=[];for(let u of d.values())s.push(hn(u,n));let m=new Set(s.map(u=>u.slug)),k=Tn(s),E=new Map,M=[],H=new Set,p=new Map,I=u=>{E.set(u,(E.get(u)??0)+1)},S=(u,c,y)=>u<c?`${u}|${c}|${y}`:`${c}|${u}|${y}`,T=(u,c,y,L)=>{let G=S(u,c,y);return H.has(G)?!1:(H.add(G),M.push({source:u,target:c,kind:y}),L&&(I(u),I(c)),!0)};for(let u of s)for(let c of u.links){if(wn(c))continue;let y=Ln(c,m,k);y!==null&&y!==u.slug&&T(u.slug,y,"wikilink",!0)}let _=kn(),P=new Set;for(let u of s)for(let c of u.externalLinks){let y=Ct(c);y===null||!En(y,_)||(P.add(y),T(u.slug,ht(y),"external",!0))}let O=new Map;for(let u of P){let c=new URL(u).hostname.replace(/^www\\./,"");O.set(c,(O.get(c)??0)+1)}let F=new Set,x=new Map;for(let u of s)for(let c of u.tags){p.set(c,(p.get(c)??0)+1);let y=`tag:${c}`;F.add(y),T(u.slug,y,"tag",!0);let L=x.get(c)??[];L.push(u.slug),x.set(c,L)}if(o!==!1){let u=o?.maxTagsPerNote,c=o?.maxEdges,y=0;e:for(let L of s)if(!(L.tags.length<2)&&!(u!==void 0&&L.tags.length>u))for(let G=0;G<L.tags.length;G+=1)for(let A=G+1;A<L.tags.length;A+=1){if(c!==void 0&&y>=c)break e;T(`tag:${L.tags[G]}`,`tag:${L.tags[A]}`,"cooc",!1)&&(y+=1)}}let C=new Map;for(let u of s){let c=pt(u.slug);if(c==="root")continue;let y=C.get(c)??[];y.push(u.slug),C.set(c,y)}for(let u of C.values()){if(u.length<2)continue;let c=[...u].sort();for(let y=0;y<c.length;y+=1){let L=c[(y+1)%c.length],G=c[(y+gt)%c.length],A=c[y];A===void 0||L===void 0||(A!==L&&!H.has(S(A,L,"wikilink"))&&T(A,L,"folder",!1),c.length>gt+1&&G!==void 0&&A!==G&&!H.has(S(A,G,"wikilink"))&&T(A,G,"folder",!1))}}let V=[...E.values()],K=V.length>0?Math.min(...V):0,U=V.length>0?Math.max(...V):0,W=u=>{let c=E.get(u)??0,y=Math.sqrt(c),L=Math.sqrt(K),A=Math.sqrt(U)-L;return A===0?(de+De)/2:de+(y-L)/A*(De-de)},X=[...s].sort((u,c)=>(E.get(c.slug)??0)-(E.get(u.slug)??0)),ne=new Set(X.filter(u=>(E.get(u.slug)??0)>0).slice(0,qt).map(u=>u.slug)),B=s.map(u=>{let c=ne.has(u.slug),y=c?Le(u.slug,ct.min,ct.max):Le(u.slug,lt.min,lt.max);return{id:u.slug,name:u.title,type:"note",val:W(u.slug),degree:E.get(u.slug)??0,isHub:c,tag:"",slug:u.slug,url:"",folder:pt(u.slug),tags:u.tags,dominantTag:xn(u.tags,p),excerpt:gn(u.content),phase:fe(u.slug),x:y.x,y:y.y,z:y.z}});for(let u of P){let c=ht(u),y=Le(c,ut.min,ut.max);B.push({id:c,name:vn(u,O),type:"external",val:W(c)*nn,degree:E.get(c)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:fe(c),x:y.x,y:y.y,z:y.z})}for(let u of F){let c=u.slice(4),y=Le(u,dt.min,dt.max);B.push({id:u,name:c,type:"tag",val:Me(W(u)*.7,de,De),degree:E.get(u)??0,isHub:!1,tag:c,slug:`tags/${c}`,url:"",folder:"tag",tags:[c],dominantTag:c,excerpt:"",phase:fe(u),x:y.x,y:y.y,z:y.z})}return{nodes:B,links:M}}function Cn(e,n){if(n===void 0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((m,k)=>k.degree!==m.degree?k.degree-m.degree:m.id<k.id?-1:m.id>k.id?1:0).slice(0,Math.max(0,n)),d=new Set(r.map(m=>m.id)),s=e.links.filter(m=>{let k=N(m.source),E=N(m.target);return d.has(k)&&d.has(E)});return{nodes:r,links:s}}function Ve(e){let n=new Map,o=(r,d)=>{let s=n.get(r)??new Set;s.add(d),n.set(r,s)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let d=N(r.source),s=N(r.target);o(d,s),o(s,d)}return n}function N(e){return typeof e=="string"?e:e.id}function ee(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Mt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ee("--light","#ffffff"),ink:ee("--darkgray","#0f0f0f"),accent:ee("--secondary","#a52142"),tertiary:ee("--tertiary","#c75b75"),gray:ee("--gray","#737373"),external:ee("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Se(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Mn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Pn(){return Mn()&&!Se()}function z(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Pe(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function te(e,n){let o=Pe(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Y(e,n,o){let r=Pe(e),d=Pe(n);if(!r||!d)return e;let s=(m,k)=>Math.round(m+(k-m)*o);return`rgb(${s(r.r,d.r)}, ${s(r.g,d.g)}, ${s(r.b,d.b)})`}function Pt(e){return z()?Y(e.bg,"#05070f",.88):e.bg}function Nn(e){let n=Pe(e);if(!n)return e;let o=r=>{let d=r/255,s=d<=.04045?d/12.92:Math.pow((d+.055)/1.055,2.4);return Math.round(s*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function In(e){return Nn(Pt(e))}function Nt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function bt(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Nt(e,[n.accent,n.tertiary,n.ink,n.gray])}function An(e,n){return e.length===0?n.ink:Nt(e,[n.accent,n.tertiary])}function It(e){let n=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let d=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(d,window.location.origin)}function _n(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=It(e);window.location.assign(n.toString())}function Gn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Dn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function yt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Rn(e){let o=await import(e?Vt:zt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Dn(o)}function Hn(){try{let e=sessionStorage.getItem(vt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function On(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(Tt);if(!n)return e;let o=Ce(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,d=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,m=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:d,zoom:s,spread:m}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function xe(e){try{sessionStorage.setItem(Tt,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Ue(e){try{sessionStorage.setItem(vt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function Fn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function zn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Vn(e,n){return e.type==="note"&&e.folder===n}function wt(e,n){let o=N(n),r=e.find(d=>d.id===o);return!r||r.type!=="note"?null:r.folder}function Un(e,n,o){let r=new Map;if(n==="folder"){let d=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return d.forEach((s,m)=>{let k=Math.PI*2*m/Math.max(d.length,1),E={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let M of e.nodes)M.type==="note"&&M.folder===s&&r.set(M.id,E)}),r}if(n==="tag"){let d=e.nodes.filter(m=>m.type==="tag"),s=new Map;d.forEach((m,k)=>{let E=Math.PI*2*k/Math.max(d.length,1);s.set(m.tag,{x:Math.cos(E)*o,y:Math.sin(E)*o,z:0})});for(let m of e.nodes)if(m.type==="tag"){let k=s.get(m.tag);k&&r.set(m.id,k)}else if(m.dominantTag.length>0){let k=s.get(m.dominantTag);k&&r.set(m.id,k)}}return r}function Bn(e,n){let o=[],r=d=>{let s=n*d;for(let m of o){let k=e(m);k&&(m.vx=(m.vx??0)+(k.x-(m.x??0))*s,m.vy=(m.vy??0)+(k.y-(m.y??0))*s,m.vz=(m.vz??0)+(k.z-(m.z??0))*s)}};return r.initialize=d=>{o=d},r}function kt(e,n,o,r){for(let d of e.querySelectorAll(n)){if(!(d instanceof HTMLElement))continue;let s=d.getAttribute(r);d.setAttribute("aria-pressed",s===o?"true":"false")}}function $n(e,n,o,r){let d=Ve(n.links),s=new Map(r.fullData.nodes.map(t=>[t.id,t])),m=Ve(r.fullData.links),k=new Set(n.nodes.map(t=>t.id)),E=(t,a,l)=>t<a?`${t}|${a}|${l}`:`${a}|${t}|${l}`,M=new Set(n.links.map(t=>E(N(t.source),N(t.target),t.kind))),H=t=>{if(r.fullData===n)return!1;let a=Math.max(0,Math.floor(r.expandHops));if(a<=0)return!1;let l=new Set,i=new Set([t]),f=new Set([t]);for(let g=0;g<a;g+=1){let h=new Set;for(let w of f)for(let b of m.get(w)??[])i.has(b)||(i.add(b),h.add(b),k.has(b)||l.add(b));f=h}if(l.size===0)return!1;for(let g of l){let h=s.get(g);h&&(n.nodes.push(h),k.add(g))}for(let g of r.fullData.links){let h=N(g.source),w=N(g.target);if(!k.has(h)||!k.has(w))continue;let b=E(h,w,g.kind);M.has(b)||(M.add(b),n.links.push(g))}return d=Ve(n.links),!0},p={lens:Hn(),allLabels:!1,focusTag:null,focusFolder:null},I=null,S=null,T=On(),_=()=>S??I,P=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,Yt).map(t=>t.id)),O=t=>{let a=t.val;return t.isHub&&(a*=Qt),p.lens==="tag"&&t.type==="tag"&&(a*=en),p.focusTag&&t.id===`tag:${p.focusTag}`&&(a*=tn),a},F=t=>{let a=_();return p.allLabels||a===t.id||a!==null&&(d.get(a)?.has(t.id)??!1)?!0:P.has(t.id)},x=t=>{let a=Me((O(t)-de)/5,0,1);return(ot+a*(rn-ot))*T.nodeScale},C=t=>{let a=_();if(a!==null)return a===t||(d.get(a)?.has(t)??!1);if(p.focusTag===null&&p.focusFolder===null)return!0;let l=n.nodes.find(i=>i.id===t);return l?p.focusFolder!==null?Vn(l,p.focusFolder):p.focusTag!==null&&zn(l,p.focusTag):!1},V=t=>t.type==="external"?o.current.external:p.lens==="tag"?t.type==="tag"?o.current.tertiary:An(t.dominantTag,o.current):p.lens==="folder"?t.type==="tag"?o.current.tertiary:bt(t.folder,o.current):p.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,K=t=>{let a=_();if(a!==null&&(a===t.id||(d.get(a)?.has(t.id)??!1)))return o.current.accent;let l=V(t);return C(t.id)?z()?t.type==="external"?Y(o.current.external,"#ffffff",.18):t.type==="tag"?Y(o.current.tertiary,"#ffffff",.22):t.isHub?Y("#fff3e4",o.current.accent,.1):Y("#ffffff",o.current.accent,.12):t.type==="external"?Y(o.current.external,"#08343a",.12):t.type==="tag"?Y(o.current.tertiary,o.current.accent,.55):t.isHub?Y(o.current.ink,o.current.accent,.22):l:te(l,ce)},U=t=>{let a=z();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},W=t=>{let a=N(t.source),l=N(t.target),i=_();return i!==null&&(a===i||l===i)?z()?.72:.78:(i!==null||p.focusTag!==null||p.focusFolder!==null)&&(!C(a)||!C(l))?U(t.kind)*ce:U(t.kind)},X=t=>{let a=N(t.source),l=N(t.target),i=_(),f=z()?an:sn;return i!==null&&(a===i||l===i)?Y(o.current.accent,f,.45):f},ne=t=>te(X(t),W(t)),B=()=>n,u=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Math.hypot(ue.x,ue.y,ue.z),l=a/Me(T.zoom,.4,2.5),i=e.cameraPosition(),f=ue,g=a;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let w=Math.hypot(i.x,i.y,i.z);w>1&&(f={x:i.x,y:i.y,z:i.z},g=w)}let h=l/g;e.cameraPosition({x:f.x*h,y:f.y*h,z:f.z*h},rt,t);return}typeof e.zoom=="function"&&e.zoom(T.zoom,t)},c=()=>{let t=dn(T.spread),a=Re.min+t*(Re.max-Re.min),l=He.min+t*(He.max-He.min),i=e.d3Force("charge");i?.strength&&i.strength(a);let f=e.d3Force("link");f?.distance&&f.distance(v=>p.lens==="tag"&&v.kind==="tag"?l*.72:l),f?.strength&&f.strength(v=>{if(v.kind==="cooc"||v.kind==="folder")return .04;if(p.lens==="tag"&&v.kind==="tag")return .95;if(p.lens==="folder"){let R=wt(n.nodes,v.source),Z=wt(n.nodes,v.target);if(R!==null&&R===Z)return .72}return v.kind==="tag"?.65:.8});let g=e.d3Force("center");g?.strength&&g.strength(Kt);let h=Oe.min+t*(Oe.max-Oe.min),w=Un(n,p.lens,h),b=p.lens==="folder"||p.lens==="tag"?.08:0;e.d3Force("cluster",Bn(v=>w.get(v.id)??null,b)),r.use3d&&e.d3Force("flattenZ",null)},y=new Map,L=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three;y.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let i=x(l),f=K(l),g=!1;if(a)if(z()){let v=l.isHub?1.35:1.1,R=new a.MeshLambertMaterial({color:f,emissive:f,emissiveIntensity:v});y.set(l.id,{material:R,base:v,phase:l.phase}),g=new a.Mesh(new a.SphereGeometry(i,14,14),R)}else g=new a.Mesh(new a.SphereGeometry(i,14,14),new a.MeshBasicMaterial({color:f}));if(!F(l)||!t)return g;let h=new t(l.name),w=z()?"rgba(255, 255, 255, 0.85)":te(o.current.ink,.88);if(h.color=C(l.id)?w:te(w,ce),h.fontWeight="400",h.strokeWidth=0,h.textHeight=P.has(l.id)?6.5:5.5,h.center.set(0,.5),h.position.x=i+2,h.position.y=0,!a||g===!1)return h;let b=new a.Group;return b.add(g),b.add(h),b})},G=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0);e.linkThreeObject(l=>{let i=on[l.kind]*T.edgeScale,f=new t.MeshBasicMaterial({color:X(l),transparent:!0,opacity:W(l),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),f)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,i)=>{let f=i.end.x-i.start.x,g=i.end.y-i.start.y,h=i.end.z-i.start.z,w=Math.sqrt(f*f+g*g+h*h);return l.position.x=(i.start.x+i.end.x)/2,l.position.y=(i.start.y+i.end.y)/2,l.position.z=(i.start.z+i.end.z)/2,l.scale.x=1,l.scale.y=Math.max(w,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(a,new t.Vector3(f,g,h).normalize()),!0})},A=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=_();if(a===null)return 0;let l=N(t.source),i=N(t.target);return l===a||i===a?2:0})},$=()=>{e.nodeVal(O),e.nodeColor(K),e.linkColor(ne),e.linkWidth(t=>{let a=N(t.source),l=N(t.target),i=_(),f=T.edgeScale;return i!==null&&(a===i||l===i)?.7*f:t.kind==="wikilink"||t.kind==="external"?.5*f:(t.kind==="tag"?.35:.25)*f}),typeof e.linkOpacity=="function"&&e.linkOpacity(tt),A(),G(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},Ie=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(g,h)=>{let w=document.createElement("span");w.className="graph-landing__legend-item";let b=document.createElement("span");b.className="graph-landing__dot",b.setAttribute("aria-hidden","true"),b.style.background=g;let v=document.createElement("span");return v.textContent=h,w.append(b,v),w},l=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",f=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,l),a(o.current.tertiary,i),a(o.current.external,f))},qe=t=>{let a=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let g=document.createElement("span");g.className="graph-landing__dot",g.style.background=t.dotColor,i.append(g)}i.append(document.createTextNode(t.label));let f=document.createElement("span");return f.className="graph-landing__tag-count",f.textContent=String(t.count),l.append(i,f),a.append(l),a},Ye=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),l=r.root.querySelector(".graph-landing__tags");if(p.lens==="folder"){let f=r.root.dataset.folderRootLabel??"root",g=new Map;for(let w of n.nodes)w.type==="note"&&g.set(w.folder,(g.get(w.folder)??0)+1);let h=[...g.entries()].sort((w,b)=>b[1]-w[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=h.length===0),t.replaceChildren(...h.map(([w,b])=>qe({dataset:{key:"graphFolder",value:w},pressed:p.focusFolder===w,dotColor:bt(w,o.current),label:w==="root"?f:w,count:b})));return}let i=n.nodes.filter(f=>f.type==="tag").sort((f,g)=>g.degree-f.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=i.length===0),t.replaceChildren(...i.map(f=>qe({dataset:{key:"graphTag",value:f.tag},pressed:p.focusTag===f.tag,dotColor:null,label:f.tag,count:f.degree})))},re=()=>{e.graphData(B()),c(),$(),L(),Ie(),Ye(),kt(r.root,"[data-graph-lens]",p.lens,"data-graph-lens"),e.d3ReheatSimulation()},At=t=>{p.lens=t,t!=="tag"&&(p.focusTag=null),t!=="folder"&&(p.focusFolder=null),Ue(t),re()},_t=t=>{p.focusTag=p.focusTag===t?null:t,p.focusFolder=null,p.focusTag&&(p.lens="tag",Ue("tag")),re()},Gt=t=>{p.focusFolder=p.focusFolder===t?null:t,p.focusTag=null,p.focusFolder&&(p.lens="folder",Ue("folder")),re()},Ke=()=>r.use3d?In(o.current):Pt(o.current);e.graphData(B()),e.backgroundColor(Ke()),e.nodeLabel(t=>t.name),e.nodeRelSize(Wt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(jt),typeof e.linkOpacity=="function"&&e.linkOpacity(tt),c(),$();let J=r.root.querySelector("[data-graph-preview]"),ge=r.root.querySelector("[data-graph-preview-chip]"),me=r.root.querySelector("[data-graph-preview-title]"),pe=r.root.querySelector("[data-graph-preview-excerpt]"),he=0;window.addCleanup(()=>window.clearTimeout(he));let Dt=t=>{if(!(J instanceof HTMLElement)||!(ge instanceof HTMLElement)||!(me instanceof HTMLElement)||!(pe instanceof HTMLElement))return;window.clearTimeout(he);let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let f=r.root.dataset.previewTagTemplate??"{n} notes";ge.textContent=l,me.textContent=`#${t.tag}`,pe.textContent=f.replace("{n}",String(t.degree))}else t.type==="external"?(ge.textContent=i,me.textContent=t.name,pe.textContent=t.url):(ge.textContent=a,me.textContent=t.name,pe.textContent=t.excerpt);J.hidden=!1,J.dataset.visible="true"},We=()=>{J instanceof HTMLElement&&(window.clearTimeout(he),he=window.setTimeout(()=>{J.dataset.visible="false",J.hidden=!0},un))};if(e.onNodeHover(t=>{I=t?t.id:null,S===null&&(t?Dt(t):We()),$(),r.use3d&&L()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Se()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=Jt;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=z()?at:0,r.bloomPass.radius=st,r.bloomPass.threshold=it,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ue,rt),T.zoom!==1&&u(0)),L(),!Se()){let t=0,a=()=>{let l=performance.now()/1e3*cn;for(let i of y.values())i.material.emissiveIntensity=i.base*(1+ln*Math.sin(l+i.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,a,l)=>{let i=x(t),f=t.x??0,g=t.y??0;if(a.save(),a.beginPath(),a.arc(f,g,i,0,Math.PI*2),a.fillStyle=K(t),a.fill(),t.isHub&&(a.strokeStyle=C(t.id)?o.current.accent:te(o.current.accent,ce),a.lineWidth=1.2/l,a.stroke()),F(t)){let h=11.5/l;a.font=`${h}px ${o.current.font}`,a.fillStyle=C(t.id)?o.current.ink:te(o.current.ink,ce),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,f,g-i-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,l)=>{let i=x(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,i,0,Math.PI*2),l.fillStyle=a,l.fill()});let be=r.root.querySelector("[data-graph-inspect]"),ye=r.root.querySelector("[data-graph-inspect-chip]"),we=r.root.querySelector("[data-graph-inspect-title]"),ke=r.root.querySelector("[data-graph-inspect-excerpt]"),Ae=r.root.querySelector("[data-graph-inspect-tags]"),_e=r.root.querySelector("[data-graph-inspect-connected]"),D=r.root.querySelector("[data-graph-inspect-open]"),Q=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),l=r.root.querySelector("[data-graph-rail-scrim]"),i=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),i instanceof HTMLElement&&i.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},Ee=t=>{Se()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Rt=t=>{let a=d.get(t.id)??new Set,l=[];for(let i of a){let f=n.nodes.find(g=>g.id===i);f&&l.push(f)}return l.sort((i,f)=>f.degree-i.degree)},Ht=t=>{if(!(be instanceof HTMLElement)||!(ye instanceof HTMLElement)||!(we instanceof HTMLElement)||!(ke instanceof HTMLElement)||!(Ae instanceof HTMLElement)||!(_e instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links",f=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(ye.textContent=l,we.textContent=`#${t.tag}`,ke.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(ye.textContent=i,we.textContent=t.name,ke.textContent=t.url):(ye.textContent=a,we.textContent=t.name,ke.textContent=t.excerpt);let g=t.tags.map(w=>{let b=document.createElement("li");return b.textContent=w,b});Ae.replaceChildren(...g),Ae.hidden=g.length===0;let h=Rt(t).slice(0,12);if(h.length===0){let w=document.createElement("li");w.className="graph-landing__inspect-empty",w.textContent=f,_e.replaceChildren(w)}else _e.replaceChildren(...h.map(w=>{let b=document.createElement("li"),v=document.createElement("button");v.type="button",v.className="graph-landing__inspect-link",v.dataset.graphInspectId=w.id;let R=w.type==="tag"?l:w.type==="external"?i:a,Z=document.createElement("span");Z.textContent=R;let q=document.createElement("strong");return q.textContent=w.type==="tag"?`#${w.tag}`:w.name,v.append(Z,q),b.append(v),b}));D instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(D.hidden=!1,D.href=It(t.slug).toString(),D.textContent=r.root.dataset.inspectRead??"Read note",D.removeAttribute("target"),D.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(D.hidden=!1,D.href=t.url,D.textContent=r.root.dataset.inspectOpenExternal??"Open",D.target="_blank",D.rel="noopener noreferrer"):(D.hidden=!0,D.removeAttribute("href"),D.removeAttribute("target"),D.removeAttribute("rel"))),be.hidden=!1,r.root.dataset.inspecting="true",Q(!1),We()},oe=()=>{S=null,be instanceof HTMLElement&&(be.hidden=!0),r.root.dataset.inspecting="false",Ee(!0),$(),r.use3d&&L()},je=t=>{if(S===t.id&&t.type==="note"&&t.slug.length>0){_n(t.slug);return}if(S===t.id&&t.type==="external"&&t.url.length>0){Gn(t.url);return}S=t.id,Ht(t),$(),r.use3d&&L()},Xe=t=>{H(t.id)&&re(),je(t)},Ge=!1;e.onNodeClick((t,a)=>{t&&(Ge=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Xe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{oe(),Q(!1)});let j=r.root.querySelector("#graph-landing-mount");if(j instanceof HTMLElement){let t=null,a=g=>{t={x:g.clientX,y:g.clientY},Ee(!1)},l=(g,h)=>{if(typeof e.graph2ScreenCoords!="function")return null;let w=j.getBoundingClientRect(),b=g-w.left,v=h-w.top,R=null,Z=4096;for(let q of B().nodes){if(q.x===void 0||q.y===void 0)continue;let ve=e.graph2ScreenCoords(q.x,q.y,q.z??0),Ot=(ve.x-b)**2+(ve.y-v)**2,Ft=(ve.x-g)**2+(ve.y-h)**2,et=Math.min(Ot,Ft);et<Z&&(Z=et,R=q)}return R},i=g=>{let h=t;t=null,Ee(!0),!(!h||(g.clientX-h.x)**2+(g.clientY-h.y)**2>25)&&window.setTimeout(()=>{if(Ge){Ge=!1;return}let b=l(g.clientX,g.clientY);b?Xe(b):oe()},0)},f=()=>{t=null,Ee(!0)};j.addEventListener("pointerdown",a,!0),j.addEventListener("pointerup",i,!0),j.addEventListener("pointercancel",f,!0),window.addCleanup(()=>{j.removeEventListener("pointerdown",a,!0),j.removeEventListener("pointerup",i,!0),j.removeEventListener("pointercancel",f,!0)})}kt(r.root,"[data-graph-lens]",p.lens,"data-graph-lens"),Ie(),Ye(),p.lens!=="all"&&re(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ze=()=>{o.current=Mt(),e.backgroundColor(Ke()),r.bloomPass&&(r.bloomPass.strength=z()?at:0,r.bloomPass.radius=st,r.bloomPass.threshold=it),$(),L(),Ie()};document.addEventListener("themechange",Ze),window.addCleanup(()=>document.removeEventListener("themechange",Ze));let Je=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){oe();return}if(a.closest("[data-graph-rail-toggle]")){let b=r.root.dataset.railOpen!=="true";b&&oe(),Q(b);return}if(a.closest("[data-graph-rail-scrim]")){Q(!1);return}let l=a.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let b=n.nodes.find(v=>v.id===l.dataset.graphInspectId);b&&je(b);return}let i=a.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&Fn(i.dataset.graphLens)){At(i.dataset.graphLens);return}let f=a.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){_t(f.dataset.graphTag);return}let g=a.closest("[data-graph-folder]");if(g instanceof HTMLElement&&g.dataset.graphFolder){Gt(g.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let h=a.closest("[data-graph-labels]");if(h instanceof HTMLButtonElement){p.allLabels=!p.allLabels,h.setAttribute("aria-pressed",p.allLabels?"true":"false");let b=h.dataset.labelShow??"Labels",v=h.dataset.labelHide??"Labels",R=p.allLabels?v:b;h.title=R,h.setAttribute("aria-label",R),L();return}if(a.closest("[data-graph-theme]")){let b=z()?"light":"dark";document.documentElement.setAttribute("saved-theme",b),localStorage.setItem("theme",b),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${b}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:b}}));return}let w=a.closest("[data-graph-tags-toggle]");if(w instanceof HTMLButtonElement){let b=r.root.querySelector(".graph-landing__tags");if(b instanceof HTMLElement){let v=b.dataset.open==="true";b.dataset.open=v?"false":"true",w.setAttribute("aria-expanded",v?"false":"true")}}},ae=r.root.querySelector("[data-graph-node-scale]"),se=r.root.querySelector("[data-graph-edge-scale]");if(ae instanceof HTMLInputElement){ae.value=String(Math.round(T.nodeScale*100));let t=()=>{T.nodeScale=Number(ae.value)/100,xe(T),$(),r.use3d&&L()};ae.addEventListener("input",t),window.addCleanup(()=>ae.removeEventListener("input",t))}if(se instanceof HTMLInputElement){se.value=String(Math.round(T.edgeScale*100));let t=()=>{T.edgeScale=Number(se.value)/100,xe(T),$()};se.addEventListener("input",t),window.addCleanup(()=>se.removeEventListener("input",t))}let ie=r.root.querySelector("[data-graph-zoom]");if(ie instanceof HTMLInputElement){ie.value=String(Math.round(T.zoom*100));let t=()=>{T.zoom=Number(ie.value)/100,xe(T),u(200)};ie.addEventListener("input",t),window.addCleanup(()=>ie.removeEventListener("input",t))}let le=r.root.querySelector("[data-graph-spread]");if(le instanceof HTMLInputElement){le.value=String(Math.round(T.spread*100));let t=()=>{T.spread=Number(le.value)/100,xe(T),c(),e.d3ReheatSimulation()};le.addEventListener("input",t),window.addCleanup(()=>le.removeEventListener("input",t))}Q(!1),r.root.addEventListener("click",Je),window.addCleanup(()=>r.root.removeEventListener("click",Je));let Qe=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){Q(!1);return}oe()}};window.addEventListener("keydown",Qe),window.addCleanup(()=>window.removeEventListener("keydown",Qe))}function qn(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Yn(){try{return window.localStorage.getItem(Be)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Et(e){try{if(e){window.localStorage.setItem(Be,"stopped");return}window.localStorage.removeItem(Be)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function Kn(e){let n=performance.now(),o=0,r=d=>{let s=Math.min(1,(d-n)/e.durationMs),m=s*s;e.apply(e.from+(e.to-e.from)*m),s<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function Wn(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,d=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof d=="function"&&d();let s=r.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=Zt,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function jn(e){return new e.api.Player(e.host,{videoId:nt,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:nt,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Xn(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",d=e.dataset.audioPlay??"Play music",s=null,m=!1,k=null,E=!Yn(),M=!1,H=x=>{n.setAttribute("aria-pressed",x?"true":"false"),n.setAttribute("aria-label",x?r:d),n.title=x?r:d,n.dataset.playing=x?"true":"false"},p=()=>{k&&(k(),k=null)},I=x=>{s&&s.setVolume(Math.max(0,Math.min(Te,x)))},S=x=>{!E||M||(M=!0,H(!0),x.unMute(),I(0),x.playVideo(),p(),k=Kn({from:0,to:Te,durationMs:Xt,apply:I}))},T=()=>{E=!1,M=!1,p(),Et(!0),s&&(s.mute(),s.pauseVideo(),I(0)),H(!1)},_=async()=>{if(!s)try{let x=await Wn();if(s)return;s=jn({api:x,host:o,onReady:C=>{m=!0,C.mute(),I(0),C.playVideo()},onEnded:C=>{E&&(C.playVideo(),I(Te))}})}catch(x){console.error("[graph-landing] ambient audio unavailable",x)}},P=x=>{let C=x.target;if(!(C instanceof Element&&C.closest("[data-graph-audio-toggle]"))&&!(!E||M||qn())){if(m&&s){S(s);return}_()}},O=()=>{if(E&&M){T();return}if(E=!0,Et(!1),m&&s){S(s);return}_()},F=()=>{if(s){if(document.hidden){p(),s.pauseVideo();return}E&&M&&(s.playVideo(),I(Te))}};H(E),_(),n.addEventListener("click",O),e.addEventListener("pointerdown",P,!0),e.addEventListener("touchstart",P,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",F),window.addCleanup(()=>{n.removeEventListener("click",O),e.removeEventListener("pointerdown",P,!0),e.removeEventListener("touchstart",P,!0),document.removeEventListener("visibilitychange",F),p(),s&&(s.pauseVideo(),s.destroy(),s=null)})}async function Zn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Xn(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",d=e.dataset.sourceLocale??"ko",s=(e.dataset.localePrefixes??"").split(",").map(c=>c.trim()).filter(c=>c.length>0),m=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",E=e.dataset.graphIndexPath??"",M=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,H=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,p=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,I=!1,S=null,T={current:Mt()},_=()=>{I=!0,S&&(S._destructor(),S=null),delete e.dataset.graphReady};window.addCleanup(_);let P=Pn(),O=Rn(P),F=P?import(Ut).then(c=>c.default??null).catch(c=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",c),null)):Promise.resolve(null),x=P?import(Bt).catch(c=>(console.error("[graph-landing] three unavailable; using default node spheres",c),null)):Promise.resolve(null),C=P?import($t).then(c=>c.UnrealBloomPass?new c.UnrealBloomPass:null).catch(c=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",c),null)):Promise.resolve(null);O.catch(()=>{});let V;try{V=Ce(k==="graphIndex"?await fetch(E).then(c=>c.json()):await fetchData)}catch(c){throw yt(n,"Graph could not load content index."),c}if(I)return;let K=Sn(fn(V),{localeId:r,sourceLocale:d,prefixes:s},p),U=Cn(K,M),W=m.replace("{n}",String(U.nodes.length)).replace("{m}",String(U.links.length));for(let c of o)c.textContent=W;let X;try{X=await O}catch(c){throw yt(n,"Graph could not load. Check your network connection."),c}let[ne,B,u]=await Promise.all([F,x,C]);I||(n.replaceChildren(),S=X(n),n.__graphLanding=S,n.__graphData=U,$n(S,U,T,{use3d:P,root:e,spriteText:ne,bloomPass:u,three:B,fullData:K,expandHops:H}))}var Jn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Jn,r)}catch(d){console.error("[graph-landing] failed to persist preferred-locale",d)}});document.addEventListener("nav",()=>{Zn()});\n';

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
  return {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
    layout: "graph",
    frame: "minimal",
    body: GraphLanding_default(options)
  };
};
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map