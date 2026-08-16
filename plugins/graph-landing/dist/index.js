// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Me="0.179.1",_t="https://esm.sh/force-graph@1.51.4",Gt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Me}`,Rt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Me}`,Ht=`https://esm.sh/three@${Me}`,Dt=`https://esm.sh/three@${Me}/examples/jsm/postprocessing/UnrealBloomPass.js`,Ot=8,Ft=14;var ce=1,Ae=3.5,zt=.05,Vt=2.6,Ut=1,Xe=1,ie=.18,bt="graph-landing:lens",yt="graph-landing:tune",Fe="graph-landing:ambient-audio",Ze="UDVtMYqUAyw",Ee=12,Bt=28e3,$t="https://www.youtube.com/iframe_api",qt=.18,Yt=1.4,Wt=1.25,Kt=1.15,jt=.55,le={x:330,y:235,z:565},Je={x:0,y:0,z:0},Qe=1.3,Xt=3.2,et=1.05,tt=.32,nt=.28,Zt={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Jt="#a8b0c2",Qt="#2a3348",rt={min:80,max:200},ot={min:40,max:110},at={min:160,max:280},st={min:90,max:170},it=220,lt=2,en=.15,tn=.8,nn=350,_e={min:-100,max:-190},Ge={min:72,max:116},Re={min:130,max:260};function rn(e){return Se(e-.5,0,1)}function xe(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function He(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function on(e){let n=[];for(let o of Object.values(e)){let r=xe(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let a=r.multilingual,p=a&&typeof a=="object"?a:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:He(r.links),tags:He(r.tags),externalLinks:He(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:p})}return n}function an(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=it?n:`${n.slice(0,it).trimEnd()}\\u2026`}function ue(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function ct(e){return ue(e)/(2*Math.PI)}function ve(e,n,o){let r=ue(e),u=Math.acos(2*ct(`${e}:phi`)-1),a=n+(o-n)*ct(`${e}:r`);return{x:a*Math.sin(u)*Math.cos(r),y:a*Math.sin(u)*Math.sin(r),z:a*Math.cos(u)}}function wt(e){return e==="index"||e.endsWith("/index")}function kt(e){return e==="tags"||e.startsWith("tags/")}function sn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Et(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function De(e,n){return e.multilingual?.locale?e.multilingual.locale:Et(e.slug,n).locale}function ln(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Et(e.slug,n).permalink}`}function cn(e,n){let o=e.find(r=>De(r,n.prefixes)===n.localeId)??e.find(r=>De(r,n.prefixes)===n.sourceLocale)??e.find(r=>De(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Se(e,n,o){return Math.min(o,Math.max(n,e))}function ut(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function un(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function ze(e){return un(e).trim().toLowerCase()}function dn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function fn(e){let n=e.trim();return n.length===0||dn(n)||kt(n)||wt(n)?!0:ze(n).length===0}function gn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function vt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function mn(e,n){let o=vt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function dt(e){return`external:${e}`}function pn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),u=o.pathname;return(n.get(r)??0)>1&&u.length>1?`${r}${u}`:r}function hn(e){let n=new Map,o=new Map;for(let r of e){let u=ze(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let a=r.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,r.slug);let p=a.replace(/\\s+/g,"-");p.length>0&&!o.has(p)&&o.set(p,r.slug)}return{byBasename:n,byTitle:o}}function bn(e,n,o){if(n.has(e))return e;let r=ze(e),u=o.byBasename.get(r);if(u)return u;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return a||null}function yn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function wn(e,n,o=void 0){let r=e.filter(l=>!wt(l.slug)&&!kt(l.slug)&&!sn(l)),u=new Map;for(let l of r){let d=ln(l,n.prefixes),m=u.get(d)??[];m.push(l),u.set(d,m)}let a=[];for(let l of u.values())a.push(cn(l,n));let p=new Set(a.map(l=>l.slug)),k=hn(a),h=new Map,L=[],I=new Set,C=new Map,_=l=>{h.set(l,(h.get(l)??0)+1)},H=(l,d,m)=>l<d?`${l}|${d}|${m}`:`${d}|${l}|${m}`,S=(l,d,m,x)=>{let P=H(l,d,m);return I.has(P)?!1:(I.add(P),L.push({source:l,target:d,kind:m}),x&&(_(l),_(d)),!0)};for(let l of a)for(let d of l.links){if(fn(d))continue;let m=bn(d,p,k);m!==null&&m!==l.slug&&S(l.slug,m,"wikilink",!0)}let z=gn(),G=new Set;for(let l of a)for(let d of l.externalLinks){let m=vt(d);m===null||!mn(m,z)||(G.add(m),S(l.slug,dt(m),"external",!0))}let O=new Map;for(let l of G){let d=new URL(l).hostname.replace(/^www\\./,"");O.set(d,(O.get(d)??0)+1)}let V=new Set,T=new Map;for(let l of a)for(let d of l.tags){C.set(d,(C.get(d)??0)+1);let m=`tag:${d}`;V.add(m),S(l.slug,m,"tag",!0);let x=T.get(d)??[];x.push(l.slug),T.set(d,x)}if(o!==!1){let l=o?.maxTagsPerNote,d=o?.maxEdges,m=0;e:for(let x of a)if(!(x.tags.length<2)&&!(l!==void 0&&x.tags.length>l))for(let P=0;P<x.tags.length;P+=1)for(let N=P+1;N<x.tags.length;N+=1){if(d!==void 0&&m>=d)break e;S(`tag:${x.tags[P]}`,`tag:${x.tags[N]}`,"cooc",!1)&&(m+=1)}}let M=new Map;for(let l of a){let d=ut(l.slug);if(d==="root")continue;let m=M.get(d)??[];m.push(l.slug),M.set(d,m)}for(let l of M.values()){if(l.length<2)continue;let d=[...l].sort();for(let m=0;m<d.length;m+=1){let x=d[(m+1)%d.length],P=d[(m+lt)%d.length],N=d[m];N===void 0||x===void 0||(N!==x&&!I.has(H(N,x,"wikilink"))&&S(N,x,"folder",!1),d.length>lt+1&&P!==void 0&&N!==P&&!I.has(H(N,P,"wikilink"))&&S(N,P,"folder",!1))}}let U=[...h.values()],K=U.length>0?Math.min(...U):0,j=U.length>0?Math.max(...U):0,$=l=>{let d=h.get(l)??0,m=Math.sqrt(d),x=Math.sqrt(K),N=Math.sqrt(j)-x;return N===0?(ce+Ae)/2:ce+(m-x)/N*(Ae-ce)},D=[...a].sort((l,d)=>(h.get(d.slug)??0)-(h.get(l.slug)??0)),v=new Set(D.filter(l=>(h.get(l.slug)??0)>0).slice(0,Ot).map(l=>l.slug)),te=a.map(l=>{let d=v.has(l.slug),m=d?ve(l.slug,ot.min,ot.max):ve(l.slug,rt.min,rt.max);return{id:l.slug,name:l.title,type:"note",val:$(l.slug),degree:h.get(l.slug)??0,isHub:d,tag:"",slug:l.slug,url:"",folder:ut(l.slug),tags:l.tags,dominantTag:yn(l.tags,C),excerpt:an(l.content),phase:ue(l.slug),x:m.x,y:m.y,z:m.z}});for(let l of G){let d=dt(l),m=ve(d,at.min,at.max);te.push({id:d,name:pn(l,O),type:"external",val:$(d)*jt,degree:h.get(d)??0,isHub:!1,tag:"",slug:"",url:l,folder:"",tags:[],dominantTag:"",excerpt:l,phase:ue(d),x:m.x,y:m.y,z:m.z})}for(let l of V){let d=l.slice(4),m=ve(l,st.min,st.max);te.push({id:l,name:d,type:"tag",val:Se($(l)*.7,ce,Ae),degree:h.get(l)??0,isHub:!1,tag:d,slug:`tags/${d}`,url:"",folder:"tag",tags:[d],dominantTag:d,excerpt:"",phase:ue(l),x:m.x,y:m.y,z:m.z})}return{nodes:te,links:L}}function kn(e){let n=new Map,o=(r,u)=>{let a=n.get(r)??new Set;a.add(u),n.set(r,a)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let u=F(r.source),a=F(r.target);o(u,a),o(a,u)}return n}function F(e){return typeof e=="string"?e:e.id}function Q(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Tt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Q("--light","#ffffff"),ink:Q("--darkgray","#0f0f0f"),accent:Q("--secondary","#a52142"),tertiary:Q("--tertiary","#c75b75"),gray:Q("--gray","#737373"),external:Q("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Le(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function En(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function vn(){return En()&&!Le()}function B(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ce(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function ee(e,n){let o=Ce(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Y(e,n,o){let r=Ce(e),u=Ce(n);if(!r||!u)return e;let a=(p,k)=>Math.round(p+(k-p)*o);return`rgb(${a(r.r,u.r)}, ${a(r.g,u.g)}, ${a(r.b,u.b)})`}function Lt(e){return B()?Y(e.bg,"#05070f",.88):e.bg}function Tn(e){let n=Ce(e);if(!n)return e;let o=r=>{let u=r/255,a=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Ln(e){return Tn(Lt(e))}function xt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function ft(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:xt(e,[n.accent,n.tertiary,n.ink,n.gray])}function xn(e,n){return e.length===0?n.ink:xt(e,[n.accent,n.tertiary])}function St(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function Sn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=St(e);window.location.assign(n.toString())}function Cn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Mn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function gt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Pn(e){let o=await import(e?Gt:_t);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Mn(o)}function Nn(){try{let e=sessionStorage.getItem(bt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function In(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(yt);if(!n)return e;let o=xe(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.zoom=="number"?o.zoom:e.zoom,p=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:a,spread:p}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Te(e){try{sessionStorage.setItem(yt,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Oe(e){try{sessionStorage.setItem(bt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function An(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function _n(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Gn(e,n){return e.type==="note"&&e.folder===n}function mt(e,n){let o=F(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function Rn(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return u.forEach((a,p)=>{let k=Math.PI*2*p/Math.max(u.length,1),h={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let L of e.nodes)L.type==="note"&&L.folder===a&&r.set(L.id,h)}),r}if(n==="tag"){let u=e.nodes.filter(p=>p.type==="tag"),a=new Map;u.forEach((p,k)=>{let h=Math.PI*2*k/Math.max(u.length,1);a.set(p.tag,{x:Math.cos(h)*o,y:Math.sin(h)*o,z:0})});for(let p of e.nodes)if(p.type==="tag"){let k=a.get(p.tag);k&&r.set(p.id,k)}else if(p.dominantTag.length>0){let k=a.get(p.dominantTag);k&&r.set(p.id,k)}}return r}function Hn(e,n){let o=[],r=u=>{let a=n*u;for(let p of o){let k=e(p);k&&(p.vx=(p.vx??0)+(k.x-(p.x??0))*a,p.vy=(p.vy??0)+(k.y-(p.y??0))*a,p.vz=(p.vz??0)+(k.z-(p.z??0))*a)}};return r.initialize=u=>{o=u},r}function pt(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let a=u.getAttribute(r);u.setAttribute("aria-pressed",a===o?"true":"false")}}function Dn(e,n,o,r){let u=kn(n.links),a={lens:Nn(),allLabels:!1,focusTag:null,focusFolder:null},p=null,k=null,h=In(),L=()=>k??p,I=new Set(n.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,Ft).map(t=>t.id)),C=t=>{let s=t.val;return t.isHub&&(s*=Yt),a.lens==="tag"&&t.type==="tag"&&(s*=Wt),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Kt),s},_=t=>{let s=L();return a.allLabels||s===t.id||s!==null&&(u.get(s)?.has(t.id)??!1)?!0:I.has(t.id)},H=t=>{let s=Se((C(t)-ce)/5,0,1);return(Qe+s*(Xt-Qe))*h.nodeScale},S=t=>{let s=L();if(s!==null)return s===t||(u.get(s)?.has(t)??!1);if(a.focusTag===null&&a.focusFolder===null)return!0;let c=n.nodes.find(i=>i.id===t);return c?a.focusFolder!==null?Gn(c,a.focusFolder):a.focusTag!==null&&_n(c,a.focusTag):!1},z=t=>t.type==="external"?o.current.external:a.lens==="tag"?t.type==="tag"?o.current.tertiary:xn(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:ft(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,G=t=>{let s=L();if(s!==null&&(s===t.id||(u.get(s)?.has(t.id)??!1)))return o.current.accent;let c=z(t);return S(t.id)?B()?t.type==="external"?Y(o.current.external,"#ffffff",.18):t.type==="tag"?Y(o.current.tertiary,"#ffffff",.22):t.isHub?Y("#fff3e4",o.current.accent,.1):Y("#ffffff",o.current.accent,.12):t.type==="external"?Y(o.current.external,"#08343a",.12):t.type==="tag"?Y(o.current.tertiary,o.current.accent,.55):t.isHub?Y(o.current.ink,o.current.accent,.22):c:ee(c,ie)},O=t=>{let s=B();return t==="wikilink"?s?.34:.52:t==="external"?s?.3:.44:t==="tag"?s?.22:.32:s?.12:.2},V=t=>{let s=F(t.source),c=F(t.target),i=L();return i!==null&&(s===i||c===i)?B()?.72:.78:(i!==null||a.focusTag!==null||a.focusFolder!==null)&&(!S(s)||!S(c))?O(t.kind)*ie:O(t.kind)},T=t=>{let s=F(t.source),c=F(t.target),i=L(),f=B()?Jt:Qt;return i!==null&&(s===i||c===i)?Y(o.current.accent,f,.45):f},M=t=>ee(T(t),V(t)),U=()=>n,K=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(le.x,le.y,le.z),c=s/Se(h.zoom,.4,2.5),i=e.cameraPosition(),f=le,g=s;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let b=Math.hypot(i.x,i.y,i.z);b>1&&(f={x:i.x,y:i.y,z:i.z},g=b)}let y=c/g;e.cameraPosition({x:f.x*y,y:f.y*y,z:f.z*y},Je,t);return}typeof e.zoom=="function"&&e.zoom(h.zoom,t)},j=()=>{let t=rn(h.spread),s=_e.min+t*(_e.max-_e.min),c=Ge.min+t*(Ge.max-Ge.min),i=e.d3Force("charge");i?.strength&&i.strength(s);let f=e.d3Force("link");f?.distance&&f.distance(E=>a.lens==="tag"&&E.kind==="tag"?c*.72:c),f?.strength&&f.strength(E=>{if(E.kind==="cooc"||E.kind==="folder")return .04;if(a.lens==="tag"&&E.kind==="tag")return .95;if(a.lens==="folder"){let R=mt(n.nodes,E.source),X=mt(n.nodes,E.target);if(R!==null&&R===X)return .72}return E.kind==="tag"?.65:.8});let g=e.d3Force("center");g?.strength&&g.strength(zt);let y=Re.min+t*(Re.max-Re.min),b=Rn(n,a.lens,y),w=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",Hn(E=>b.get(E.id)??null,w)),r.use3d&&e.d3Force("flattenZ",null)},$=new Map,D=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,s=r.three;$.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(c=>{let i=H(c),f=G(c),g=!1;if(s)if(B()){let E=c.isHub?1.35:1.1,R=new s.MeshLambertMaterial({color:f,emissive:f,emissiveIntensity:E});$.set(c.id,{material:R,base:E,phase:c.phase}),g=new s.Mesh(new s.SphereGeometry(i,14,14),R)}else g=new s.Mesh(new s.SphereGeometry(i,14,14),new s.MeshBasicMaterial({color:f}));if(!_(c)||!t)return g;let y=new t(c.name),b=B()?"rgba(255, 255, 255, 0.85)":ee(o.current.ink,.88);if(y.color=S(c.id)?b:ee(b,ie),y.fontWeight="400",y.strokeWidth=0,y.textHeight=I.has(c.id)?6.5:5.5,y.center.set(0,.5),y.position.x=i+2,y.position.y=0,!s||g===!1)return y;let w=new s.Group;return w.add(g),w.add(y),w})},v=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(c=>{let i=Zt[c.kind]*h.edgeScale,f=new t.MeshBasicMaterial({color:T(c),transparent:!0,opacity:V(c),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),f)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((c,i)=>{let f=i.end.x-i.start.x,g=i.end.y-i.start.y,y=i.end.z-i.start.z,b=Math.sqrt(f*f+g*g+y*y);return c.position.x=(i.start.x+i.end.x)/2,c.position.y=(i.start.y+i.end.y)/2,c.position.z=(i.start.z+i.end.z)/2,c.scale.x=1,c.scale.y=Math.max(b,.01),c.scale.z=1,c.quaternion.setFromUnitVectors(s,new t.Vector3(f,g,y).normalize()),!0})},te=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=L();if(s===null)return 0;let c=F(t.source),i=F(t.target);return c===s||i===s?2:0})},l=()=>{e.nodeVal(C),e.nodeColor(G),e.linkColor(M),e.linkWidth(t=>{let s=F(t.source),c=F(t.target),i=L(),f=h.edgeScale;return i!==null&&(s===i||c===i)?.7*f:t.kind==="wikilink"||t.kind==="external"?.5*f:(t.kind==="tag"?.35:.25)*f}),typeof e.linkOpacity=="function"&&e.linkOpacity(Xe),te(),v(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},d=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(g,y)=>{let b=document.createElement("span");b.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=g;let E=document.createElement("span");return E.textContent=y,b.append(w,E),b},c=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",f=r.root.dataset.legendLinks??"Links";t.replaceChildren(s(o.current.ink,c),s(o.current.tertiary,i),s(o.current.external,f))},m=t=>{let s=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[t.dataset.key]=t.dataset.value,c.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let g=document.createElement("span");g.className="graph-landing__dot",g.style.background=t.dotColor,i.append(g)}i.append(document.createTextNode(t.label));let f=document.createElement("span");return f.className="graph-landing__tag-count",f.textContent=String(t.count),c.append(i,f),s.append(c),s},x=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=r.root.querySelector("[data-graph-facet-label]"),c=r.root.querySelector(".graph-landing__tags");if(a.lens==="folder"){let f=r.root.dataset.folderRootLabel??"root",g=new Map;for(let b of n.nodes)b.type==="note"&&g.set(b.folder,(g.get(b.folder)??0)+1);let y=[...g.entries()].sort((b,w)=>w[1]-b[1]);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=y.length===0),t.replaceChildren(...y.map(([b,w])=>m({dataset:{key:"graphFolder",value:b},pressed:a.focusFolder===b,dotColor:ft(b,o.current),label:b==="root"?f:b,count:w})));return}let i=n.nodes.filter(f=>f.type==="tag").sort((f,g)=>g.degree-f.degree).slice(0,16);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=i.length===0),t.replaceChildren(...i.map(f=>m({dataset:{key:"graphTag",value:f.tag},pressed:a.focusTag===f.tag,dotColor:null,label:f.tag,count:f.degree})))},P=()=>{e.graphData(U()),j(),l(),D(),d(),x(),pt(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),e.d3ReheatSimulation()},N=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),t!=="folder"&&(a.focusFolder=null),Oe(t),P()},Ve=t=>{a.focusTag=a.focusTag===t?null:t,a.focusFolder=null,a.focusTag&&(a.lens="tag",Oe("tag")),P()},Ct=t=>{a.focusFolder=a.focusFolder===t?null:t,a.focusTag=null,a.focusFolder&&(a.lens="folder",Oe("folder")),P()},Ue=()=>r.use3d?Ln(o.current):Lt(o.current);e.graphData(U()),e.backgroundColor(Ue()),e.nodeLabel(t=>t.name),e.nodeRelSize(Vt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Ut),typeof e.linkOpacity=="function"&&e.linkOpacity(Xe),j(),l();let Z=r.root.querySelector("[data-graph-preview]"),de=r.root.querySelector("[data-graph-preview-chip]"),fe=r.root.querySelector("[data-graph-preview-title]"),ge=r.root.querySelector("[data-graph-preview-excerpt]"),me=0;window.addCleanup(()=>window.clearTimeout(me));let Mt=t=>{if(!(Z instanceof HTMLElement)||!(de instanceof HTMLElement)||!(fe instanceof HTMLElement)||!(ge instanceof HTMLElement))return;window.clearTimeout(me);let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let f=r.root.dataset.previewTagTemplate??"{n} notes";de.textContent=c,fe.textContent=`#${t.tag}`,ge.textContent=f.replace("{n}",String(t.degree))}else t.type==="external"?(de.textContent=i,fe.textContent=t.name,ge.textContent=t.url):(de.textContent=s,fe.textContent=t.name,ge.textContent=t.excerpt);Z.hidden=!1,Z.dataset.visible="true"},Be=()=>{Z instanceof HTMLElement&&(window.clearTimeout(me),me=window.setTimeout(()=>{Z.dataset.visible="false",Z.hidden=!0},nn))};if(e.onNodeHover(t=>{p=t?t.id:null,k===null&&(t?Mt(t):Be()),l(),r.use3d&&D()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Le()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=qt;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=B()?et:0,r.bloomPass.radius=tt,r.bloomPass.threshold=nt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(le,Je),h.zoom!==1&&K(0)),D(),!Le()){let t=0,s=()=>{let c=performance.now()/1e3*tn;for(let i of $.values())i.material.emissiveIntensity=i.base*(1+en*Math.sin(c+i.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,c)=>{let i=H(t),f=t.x??0,g=t.y??0;if(s.save(),s.beginPath(),s.arc(f,g,i,0,Math.PI*2),s.fillStyle=G(t),s.fill(),t.isHub&&(s.strokeStyle=S(t.id)?o.current.accent:ee(o.current.accent,ie),s.lineWidth=1.2/c,s.stroke()),_(t)){let y=11.5/c;s.font=`${y}px ${o.current.font}`,s.fillStyle=S(t.id)?o.current.ink:ee(o.current.ink,ie),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,f,g-i-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,c)=>{let i=H(t)+8;c.beginPath(),c.arc(t.x??0,t.y??0,i,0,Math.PI*2),c.fillStyle=s,c.fill()});let pe=r.root.querySelector("[data-graph-inspect]"),he=r.root.querySelector("[data-graph-inspect-chip]"),be=r.root.querySelector("[data-graph-inspect-title]"),ye=r.root.querySelector("[data-graph-inspect-excerpt]"),Pe=r.root.querySelector("[data-graph-inspect-tags]"),Ne=r.root.querySelector("[data-graph-inspect-connected]"),A=r.root.querySelector("[data-graph-inspect-open]"),J=t=>{r.root.dataset.railOpen=t?"true":"false";let s=r.root.querySelector("[data-graph-rail-toggle]"),c=r.root.querySelector("[data-graph-rail-scrim]"),i=r.root.querySelector("#graph-landing-rail");s instanceof HTMLButtonElement&&s.setAttribute("aria-expanded",t?"true":"false"),i instanceof HTMLElement&&i.setAttribute("aria-hidden",t?"false":"true"),c instanceof HTMLElement&&(c.hidden=!t)},we=t=>{Le()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Pt=t=>{let s=u.get(t.id)??new Set,c=[];for(let i of s){let f=n.nodes.find(g=>g.id===i);f&&c.push(f)}return c.sort((i,f)=>f.degree-i.degree)},Nt=t=>{if(!(pe instanceof HTMLElement)||!(he instanceof HTMLElement)||!(be instanceof HTMLElement)||!(ye instanceof HTMLElement)||!(Pe instanceof HTMLElement)||!(Ne instanceof HTMLElement))return;let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links",f=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(he.textContent=c,be.textContent=`#${t.tag}`,ye.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(he.textContent=i,be.textContent=t.name,ye.textContent=t.url):(he.textContent=s,be.textContent=t.name,ye.textContent=t.excerpt);let g=t.tags.map(b=>{let w=document.createElement("li");return w.textContent=b,w});Pe.replaceChildren(...g),Pe.hidden=g.length===0;let y=Pt(t).slice(0,12);if(y.length===0){let b=document.createElement("li");b.className="graph-landing__inspect-empty",b.textContent=f,Ne.replaceChildren(b)}else Ne.replaceChildren(...y.map(b=>{let w=document.createElement("li"),E=document.createElement("button");E.type="button",E.className="graph-landing__inspect-link",E.dataset.graphInspectId=b.id;let R=b.type==="tag"?c:b.type==="external"?i:s,X=document.createElement("span");X.textContent=R;let q=document.createElement("strong");return q.textContent=b.type==="tag"?`#${b.tag}`:b.name,E.append(X,q),w.append(E),w}));A instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(A.hidden=!1,A.href=St(t.slug).toString(),A.textContent=r.root.dataset.inspectRead??"Read note",A.removeAttribute("target"),A.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(A.hidden=!1,A.href=t.url,A.textContent=r.root.dataset.inspectOpenExternal??"Open",A.target="_blank",A.rel="noopener noreferrer"):(A.hidden=!0,A.removeAttribute("href"),A.removeAttribute("target"),A.removeAttribute("rel"))),pe.hidden=!1,r.root.dataset.inspecting="true",J(!1),Be()},ne=()=>{k=null,pe instanceof HTMLElement&&(pe.hidden=!0),r.root.dataset.inspecting="false",we(!0),l(),r.use3d&&D()},$e=t=>{if(k===t.id&&t.type==="note"&&t.slug.length>0){Sn(t.slug);return}if(k===t.id&&t.type==="external"&&t.url.length>0){Cn(t.url);return}k=t.id,Nt(t),l(),r.use3d&&D()},qe=t=>{$e(t)},Ie=!1;e.onNodeClick((t,s)=>{t&&(Ie=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),qe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{ne(),J(!1)});let W=r.root.querySelector("#graph-landing-mount");if(W instanceof HTMLElement){let t=null,s=g=>{t={x:g.clientX,y:g.clientY},we(!1)},c=(g,y)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=W.getBoundingClientRect(),w=g-b.left,E=y-b.top,R=null,X=4096;for(let q of U().nodes){if(q.x===void 0||q.y===void 0)continue;let ke=e.graph2ScreenCoords(q.x,q.y,q.z??0),It=(ke.x-w)**2+(ke.y-E)**2,At=(ke.x-g)**2+(ke.y-y)**2,je=Math.min(It,At);je<X&&(X=je,R=q)}return R},i=g=>{let y=t;t=null,we(!0),!(!y||(g.clientX-y.x)**2+(g.clientY-y.y)**2>25)&&window.setTimeout(()=>{if(Ie){Ie=!1;return}let w=c(g.clientX,g.clientY);w?qe(w):ne()},0)},f=()=>{t=null,we(!0)};W.addEventListener("pointerdown",s,!0),W.addEventListener("pointerup",i,!0),W.addEventListener("pointercancel",f,!0),window.addCleanup(()=>{W.removeEventListener("pointerdown",s,!0),W.removeEventListener("pointerup",i,!0),W.removeEventListener("pointercancel",f,!0)})}pt(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),d(),x(),a.lens!=="all"&&P(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ye=()=>{o.current=Tt(),e.backgroundColor(Ue()),r.bloomPass&&(r.bloomPass.strength=B()?et:0,r.bloomPass.radius=tt,r.bloomPass.threshold=nt),l(),D(),d()};document.addEventListener("themechange",Ye),window.addCleanup(()=>document.removeEventListener("themechange",Ye));let We=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){ne();return}if(s.closest("[data-graph-rail-toggle]")){let w=r.root.dataset.railOpen!=="true";w&&ne(),J(w);return}if(s.closest("[data-graph-rail-scrim]")){J(!1);return}let c=s.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let w=n.nodes.find(E=>E.id===c.dataset.graphInspectId);w&&$e(w);return}let i=s.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&An(i.dataset.graphLens)){N(i.dataset.graphLens);return}let f=s.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){Ve(f.dataset.graphTag);return}let g=s.closest("[data-graph-folder]");if(g instanceof HTMLElement&&g.dataset.graphFolder){Ct(g.dataset.graphFolder);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let y=s.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){a.allLabels=!a.allLabels,y.setAttribute("aria-pressed",a.allLabels?"true":"false");let w=y.dataset.labelShow??"Labels",E=y.dataset.labelHide??"Labels",R=a.allLabels?E:w;y.title=R,y.setAttribute("aria-label",R),D();return}if(s.closest("[data-graph-theme]")){let w=B()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let b=s.closest("[data-graph-tags-toggle]");if(b instanceof HTMLButtonElement){let w=r.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let E=w.dataset.open==="true";w.dataset.open=E?"false":"true",b.setAttribute("aria-expanded",E?"false":"true")}}},re=r.root.querySelector("[data-graph-node-scale]"),oe=r.root.querySelector("[data-graph-edge-scale]");if(re instanceof HTMLInputElement){re.value=String(Math.round(h.nodeScale*100));let t=()=>{h.nodeScale=Number(re.value)/100,Te(h),l(),r.use3d&&D()};re.addEventListener("input",t),window.addCleanup(()=>re.removeEventListener("input",t))}if(oe instanceof HTMLInputElement){oe.value=String(Math.round(h.edgeScale*100));let t=()=>{h.edgeScale=Number(oe.value)/100,Te(h),l()};oe.addEventListener("input",t),window.addCleanup(()=>oe.removeEventListener("input",t))}let ae=r.root.querySelector("[data-graph-zoom]");if(ae instanceof HTMLInputElement){ae.value=String(Math.round(h.zoom*100));let t=()=>{h.zoom=Number(ae.value)/100,Te(h),K(200)};ae.addEventListener("input",t),window.addCleanup(()=>ae.removeEventListener("input",t))}let se=r.root.querySelector("[data-graph-spread]");if(se instanceof HTMLInputElement){se.value=String(Math.round(h.spread*100));let t=()=>{h.spread=Number(se.value)/100,Te(h),j(),e.d3ReheatSimulation()};se.addEventListener("input",t),window.addCleanup(()=>se.removeEventListener("input",t))}J(!1),r.root.addEventListener("click",We),window.addCleanup(()=>r.root.removeEventListener("click",We));let Ke=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){J(!1);return}ne()}};window.addEventListener("keydown",Ke),window.addCleanup(()=>window.removeEventListener("keydown",Ke))}function On(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Fn(){try{return window.localStorage.getItem(Fe)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function ht(e){try{if(e){window.localStorage.setItem(Fe,"stopped");return}window.localStorage.removeItem(Fe)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function zn(e){let n=performance.now(),o=0,r=u=>{let a=Math.min(1,(u-n)/e.durationMs),p=a*a;e.apply(e.from+(e.to-e.from)*p),a<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function Vn(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,u=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof u=="function"&&u();let a=r.YT;if(!a||typeof a.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(a)},!document.querySelector("script[data-graph-youtube-api]")){let a=document.createElement("script");a.src=$t,a.async=!0,a.dataset.graphYoutubeApi="1",a.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(a)}})}function Un(e){return new e.api.Player(e.host,{videoId:Ze,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:Ze,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Bn(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",u=e.dataset.audioPlay??"Play music",a=null,p=!1,k=null,h=!Fn(),L=!1,I=T=>{n.setAttribute("aria-pressed",T?"true":"false"),n.setAttribute("aria-label",T?r:u),n.title=T?r:u,n.dataset.playing=T?"true":"false"},C=()=>{k&&(k(),k=null)},_=T=>{a&&a.setVolume(Math.max(0,Math.min(Ee,T)))},H=T=>{!h||L||(L=!0,I(!0),T.unMute(),_(0),T.playVideo(),C(),k=zn({from:0,to:Ee,durationMs:Bt,apply:_}))},S=()=>{h=!1,L=!1,C(),ht(!0),a&&(a.mute(),a.pauseVideo(),_(0)),I(!1)},z=async()=>{if(!a)try{let T=await Vn();if(a)return;a=Un({api:T,host:o,onReady:M=>{p=!0,M.mute(),_(0),M.playVideo()},onEnded:M=>{h&&(M.playVideo(),_(Ee))}})}catch(T){console.error("[graph-landing] ambient audio unavailable",T)}},G=T=>{let M=T.target;if(!(M instanceof Element&&M.closest("[data-graph-audio-toggle]"))&&!(!h||L||On())){if(p&&a){H(a);return}z()}},O=()=>{if(h&&L){S();return}if(h=!0,ht(!1),p&&a){H(a);return}z()},V=()=>{if(a){if(document.hidden){C(),a.pauseVideo();return}h&&L&&(a.playVideo(),_(Ee))}};I(h),z(),n.addEventListener("click",O),e.addEventListener("pointerdown",G,!0),e.addEventListener("touchstart",G,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",V),window.addCleanup(()=>{n.removeEventListener("click",O),e.removeEventListener("pointerdown",G,!0),e.removeEventListener("touchstart",G,!0),document.removeEventListener("visibilitychange",V),C(),a&&(a.pauseVideo(),a.destroy(),a=null)})}async function $n(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Bn(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(v=>v.trim()).filter(v=>v.length>0),p=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",h=e.dataset.graphIndexPath??"",L=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,I=!1,C=null,_={current:Tt()},H=()=>{I=!0,C&&(C._destructor(),C=null),delete e.dataset.graphReady};window.addCleanup(H);let S=vn(),z=Pn(S),G=S?import(Rt).then(v=>v.default??null).catch(v=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",v),null)):Promise.resolve(null),O=S?import(Ht).catch(v=>(console.error("[graph-landing] three unavailable; using default node spheres",v),null)):Promise.resolve(null),V=S?import(Dt).then(v=>v.UnrealBloomPass?new v.UnrealBloomPass:null).catch(v=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",v),null)):Promise.resolve(null);z.catch(()=>{});let T;try{T=xe(k==="graphIndex"?await fetch(h).then(v=>v.json()):await fetchData)}catch(v){throw gt(n,"Graph could not load content index."),v}if(I)return;let M=wn(on(T),{localeId:r,sourceLocale:u,prefixes:a},L),U=p.replace("{n}",String(M.nodes.length)).replace("{m}",String(M.links.length));for(let v of o)v.textContent=U;let K;try{K=await z}catch(v){throw gt(n,"Graph could not load. Check your network connection."),v}let[j,$,D]=await Promise.all([G,O,V]);I||(n.replaceChildren(),C=K(n),n.__graphLanding=C,n.__graphData=M,Dn(C,M,_,{use3d:S,root:e,spriteText:j,bloomPass:D,three:$}))}var qn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(qn,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{$n()});\n';

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