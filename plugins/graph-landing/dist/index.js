// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Se="0.179.1",It="https://esm.sh/force-graph@1.51.4",Gt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Se}`,Rt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Se}`,Ht=`https://esm.sh/three@${Se}`,Dt=`https://esm.sh/three@${Se}/examples/jsm/postprocessing/UnrealBloomPass.js`,Ot=8,Ft=14;var le=1,Ne=3.5,zt=.05,Vt=2.6,Ut=1,Ke=1,se=.18,pt="graph-landing:lens",ht="graph-landing:tune",De="graph-landing:ambient-audio",je="UDVtMYqUAyw",ke=12,Bt=28e3,$t="https://www.youtube.com/iframe_api",qt=.18,Yt=1.4,Wt=1.25,Kt=1.15,jt=.55,ie={x:330,y:235,z:565},Xe={x:0,y:0,z:0},Ze=1.3,Xt=3.2,Je=1.05,Qe=.32,et=.28,Zt={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Jt="#a8b0c2",Qt="#2a3348",tt={min:80,max:200},nt={min:40,max:110},rt={min:160,max:280},ot={min:90,max:170},at=220,st=2,en=.15,tn=.8,nn=350,Ae={min:-100,max:-190},_e={min:72,max:116},Ie={min:130,max:260};function rn(e){return Te(e-.5,0,1)}function Oe(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Ge(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function on(e){let n=[];for(let o of Object.values(e)){let r=Oe(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let a=r.multilingual,p=a&&typeof a=="object"?a:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:Ge(r.links),tags:Ge(r.tags),externalLinks:Ge(r.externalLinks),content:typeof r.content=="string"?r.content:"",multilingual:p})}return n}function an(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=at?n:`${n.slice(0,at).trimEnd()}\\u2026`}function ce(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function it(e){return ce(e)/(2*Math.PI)}function ve(e,n,o){let r=ce(e),u=Math.acos(2*it(`${e}:phi`)-1),a=n+(o-n)*it(`${e}:r`);return{x:a*Math.sin(u)*Math.cos(r),y:a*Math.sin(u)*Math.sin(r),z:a*Math.cos(u)}}function bt(e){return e==="index"||e.endsWith("/index")}function yt(e){return e==="tags"||e.startsWith("tags/")}function sn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function wt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Re(e,n){return e.multilingual?.locale?e.multilingual.locale:wt(e.slug,n).locale}function ln(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${wt(e.slug,n).permalink}`}function cn(e,n){let o=e.find(r=>Re(r,n.prefixes)===n.localeId)??e.find(r=>Re(r,n.prefixes)===n.sourceLocale)??e.find(r=>Re(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Te(e,n,o){return Math.min(o,Math.max(n,e))}function lt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function un(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function Fe(e){return un(e).trim().toLowerCase()}function dn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function fn(e){let n=e.trim();return n.length===0||dn(n)||yt(n)||bt(n)?!0:Fe(n).length===0}function gn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function kt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function mn(e,n){let o=kt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function ct(e){return`external:${e}`}function pn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),u=o.pathname;return(n.get(r)??0)>1&&u.length>1?`${r}${u}`:r}function hn(e){let n=new Map,o=new Map;for(let r of e){let u=Fe(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let a=r.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,r.slug);let p=a.replace(/\\s+/g,"-");p.length>0&&!o.has(p)&&o.set(p,r.slug)}return{byBasename:n,byTitle:o}}function bn(e,n,o){if(n.has(e))return e;let r=Fe(e),u=o.byBasename.get(r);if(u)return u;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return a||null}function yn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function wn(e,n){let o=e.filter(c=>!bt(c.slug)&&!yt(c.slug)&&!sn(c)),r=new Map;for(let c of o){let d=ln(c,n.prefixes),g=r.get(d)??[];g.push(c),r.set(d,g)}let u=[];for(let c of r.values())u.push(cn(c,n));let a=new Set(u.map(c=>c.slug)),p=hn(u),b=new Map,y=[],L=new Set,R=new Map,x=c=>{b.set(c,(b.get(c)??0)+1)},S=(c,d,g)=>c<d?`${c}|${d}|${g}`:`${d}|${c}|${g}`,M=(c,d,g,N)=>{let O=S(c,d,g);L.has(O)||(L.add(O),y.push({source:c,target:d,kind:g}),N&&(x(c),x(d)))};for(let c of u)for(let d of c.links){if(fn(d))continue;let g=bn(d,a,p);g!==null&&g!==c.slug&&M(c.slug,g,"wikilink",!0)}let H=gn(),D=new Set;for(let c of u)for(let d of c.externalLinks){let g=kt(d);g===null||!mn(g,H)||(D.add(g),M(c.slug,ct(g),"external",!0))}let P=new Map;for(let c of D){let d=new URL(c).hostname.replace(/^www\\./,"");P.set(d,(P.get(d)??0)+1)}let I=new Set,z=new Map;for(let c of u)for(let d of c.tags){R.set(d,(R.get(d)??0)+1);let g=`tag:${d}`;I.add(g),M(c.slug,g,"tag",!0);let N=z.get(d)??[];N.push(c.slug),z.set(d,N)}for(let c of u)if(!(c.tags.length<2))for(let d=0;d<c.tags.length;d+=1)for(let g=d+1;g<c.tags.length;g+=1)M(`tag:${c.tags[d]}`,`tag:${c.tags[g]}`,"cooc",!1);let T=new Map;for(let c of u){let d=lt(c.slug);if(d==="root")continue;let g=T.get(d)??[];g.push(c.slug),T.set(d,g)}for(let c of T.values()){if(c.length<2)continue;let d=[...c].sort();for(let g=0;g<d.length;g+=1){let N=d[(g+1)%d.length],O=d[(g+st)%d.length],A=d[g];A===void 0||N===void 0||(A!==N&&!L.has(S(A,N,"wikilink"))&&M(A,N,"folder",!1),d.length>st+1&&O!==void 0&&A!==O&&!L.has(S(A,O,"wikilink"))&&M(A,O,"folder",!1))}}let C=[...b.values()],Y=C.length>0?Math.min(...C):0,K=C.length>0?Math.max(...C):0,E=c=>{let d=b.get(c)??0,g=Math.sqrt(d),N=Math.sqrt(Y),A=Math.sqrt(K)-N;return A===0?(le+Ne)/2:le+(g-N)/A*(Ne-le)},Q=[...u].sort((c,d)=>(b.get(d.slug)??0)-(b.get(c.slug)??0)),V=new Set(Q.filter(c=>(b.get(c.slug)??0)>0).slice(0,Ot).map(c=>c.slug)),ee=u.map(c=>{let d=V.has(c.slug),g=d?ve(c.slug,nt.min,nt.max):ve(c.slug,tt.min,tt.max);return{id:c.slug,name:c.title,type:"note",val:E(c.slug),degree:b.get(c.slug)??0,isHub:d,tag:"",slug:c.slug,url:"",folder:lt(c.slug),tags:c.tags,dominantTag:yn(c.tags,R),excerpt:an(c.content),phase:ce(c.slug),x:g.x,y:g.y,z:g.z}});for(let c of D){let d=ct(c),g=ve(d,rt.min,rt.max);ee.push({id:d,name:pn(c,P),type:"external",val:E(d)*jt,degree:b.get(d)??0,isHub:!1,tag:"",slug:"",url:c,folder:"",tags:[],dominantTag:"",excerpt:c,phase:ce(d),x:g.x,y:g.y,z:g.z})}for(let c of I){let d=c.slice(4),g=ve(c,ot.min,ot.max);ee.push({id:c,name:d,type:"tag",val:Te(E(c)*.7,le,Ne),degree:b.get(c)??0,isHub:!1,tag:d,slug:`tags/${d}`,url:"",folder:"tag",tags:[d],dominantTag:d,excerpt:"",phase:ce(c),x:g.x,y:g.y,z:g.z})}return{nodes:ee,links:y}}function kn(e){let n=new Map,o=(r,u)=>{let a=n.get(r)??new Set;a.add(u),n.set(r,a)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let u=F(r.source),a=F(r.target);o(u,a),o(a,u)}return n}function F(e){return typeof e=="string"?e:e.id}function Z(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function vt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Z("--light","#ffffff"),ink:Z("--darkgray","#0f0f0f"),accent:Z("--secondary","#a52142"),tertiary:Z("--tertiary","#c75b75"),gray:Z("--gray","#737373"),external:Z("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Le(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function vn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function En(){return vn()&&!Le()}function U(){return document.documentElement.getAttribute("saved-theme")==="dark"}function xe(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function J(e,n){let o=xe(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function $(e,n,o){let r=xe(e),u=xe(n);if(!r||!u)return e;let a=(p,b)=>Math.round(p+(b-p)*o);return`rgb(${a(r.r,u.r)}, ${a(r.g,u.g)}, ${a(r.b,u.b)})`}function Et(e){return U()?$(e.bg,"#05070f",.88):e.bg}function Ln(e){let n=xe(e);if(!n)return e;let o=r=>{let u=r/255,a=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Tn(e){return Ln(Et(e))}function Lt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function ut(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Lt(e,[n.accent,n.tertiary,n.ink,n.gray])}function xn(e,n){return e.length===0?n.ink:Lt(e,[n.accent,n.tertiary])}function Tt(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function Sn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Tt(e);window.location.assign(n.toString())}function Cn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Mn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function dt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Pn(e){let o=await import(e?Gt:It);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Mn(o)}function Nn(){try{let e=sessionStorage.getItem(pt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function An(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(ht);if(!n)return e;let o=Oe(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.zoom=="number"?o.zoom:e.zoom,p=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:a,spread:p}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Ee(e){try{sessionStorage.setItem(ht,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function He(e){try{sessionStorage.setItem(pt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function _n(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function In(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Gn(e,n){return e.type==="note"&&e.folder===n}function ft(e,n){let o=F(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function Rn(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return u.forEach((a,p)=>{let b=Math.PI*2*p/Math.max(u.length,1),y={x:Math.cos(b)*o,y:Math.sin(b)*o,z:0};for(let L of e.nodes)L.type==="note"&&L.folder===a&&r.set(L.id,y)}),r}if(n==="tag"){let u=e.nodes.filter(p=>p.type==="tag"),a=new Map;u.forEach((p,b)=>{let y=Math.PI*2*b/Math.max(u.length,1);a.set(p.tag,{x:Math.cos(y)*o,y:Math.sin(y)*o,z:0})});for(let p of e.nodes)if(p.type==="tag"){let b=a.get(p.tag);b&&r.set(p.id,b)}else if(p.dominantTag.length>0){let b=a.get(p.dominantTag);b&&r.set(p.id,b)}}return r}function Hn(e,n){let o=[],r=u=>{let a=n*u;for(let p of o){let b=e(p);b&&(p.vx=(p.vx??0)+(b.x-(p.x??0))*a,p.vy=(p.vy??0)+(b.y-(p.y??0))*a,p.vz=(p.vz??0)+(b.z-(p.z??0))*a)}};return r.initialize=u=>{o=u},r}function gt(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let a=u.getAttribute(r);u.setAttribute("aria-pressed",a===o?"true":"false")}}function Dn(e,n,o,r){let u=kn(n.links),a={lens:Nn(),allLabels:!1,focusTag:null,focusFolder:null},p=null,b=null,y=An(),L=()=>b??p,R=new Set(n.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,Ft).map(t=>t.id)),x=t=>{let s=t.val;return t.isHub&&(s*=Yt),a.lens==="tag"&&t.type==="tag"&&(s*=Wt),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Kt),s},S=t=>{let s=L();return a.allLabels||s===t.id||s!==null&&(u.get(s)?.has(t.id)??!1)?!0:R.has(t.id)},M=t=>{let s=Te((x(t)-le)/5,0,1);return(Ze+s*(Xt-Ze))*y.nodeScale},H=t=>{let s=L();if(s!==null)return s===t||(u.get(s)?.has(t)??!1);if(a.focusTag===null&&a.focusFolder===null)return!0;let l=n.nodes.find(i=>i.id===t);return l?a.focusFolder!==null?Gn(l,a.focusFolder):a.focusTag!==null&&In(l,a.focusTag):!1},D=t=>t.type==="external"?o.current.external:a.lens==="tag"?t.type==="tag"?o.current.tertiary:xn(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:ut(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,P=t=>{let s=L();if(s!==null&&(s===t.id||(u.get(s)?.has(t.id)??!1)))return o.current.accent;let l=D(t);return H(t.id)?U()?t.type==="external"?$(o.current.external,"#ffffff",.18):t.type==="tag"?$(o.current.tertiary,"#ffffff",.22):t.isHub?$("#fff3e4",o.current.accent,.1):$("#ffffff",o.current.accent,.12):t.type==="external"?$(o.current.external,"#08343a",.12):t.type==="tag"?$(o.current.tertiary,o.current.accent,.55):t.isHub?$(o.current.ink,o.current.accent,.22):l:J(l,se)},I=t=>{let s=U();return t==="wikilink"?s?.34:.52:t==="external"?s?.3:.44:t==="tag"?s?.22:.32:s?.12:.2},z=t=>{let s=F(t.source),l=F(t.target),i=L();return i!==null&&(s===i||l===i)?U()?.72:.78:(i!==null||a.focusTag!==null||a.focusFolder!==null)&&(!H(s)||!H(l))?I(t.kind)*se:I(t.kind)},T=t=>{let s=F(t.source),l=F(t.target),i=L(),f=U()?Jt:Qt;return i!==null&&(s===i||l===i)?$(o.current.accent,f,.45):f},C=t=>J(T(t),z(t)),Y=()=>n,K=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(ie.x,ie.y,ie.z),l=s/Te(y.zoom,.4,2.5),i=e.cameraPosition(),f=ie,m=s;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let h=Math.hypot(i.x,i.y,i.z);h>1&&(f={x:i.x,y:i.y,z:i.z},m=h)}let w=l/m;e.cameraPosition({x:f.x*w,y:f.y*w,z:f.z*w},Xe,t);return}typeof e.zoom=="function"&&e.zoom(y.zoom,t)},E=()=>{let t=rn(y.spread),s=Ae.min+t*(Ae.max-Ae.min),l=_e.min+t*(_e.max-_e.min),i=e.d3Force("charge");i?.strength&&i.strength(s);let f=e.d3Force("link");f?.distance&&f.distance(v=>a.lens==="tag"&&v.kind==="tag"?l*.72:l),f?.strength&&f.strength(v=>{if(v.kind==="cooc"||v.kind==="folder")return .04;if(a.lens==="tag"&&v.kind==="tag")return .95;if(a.lens==="folder"){let G=ft(n.nodes,v.source),W=ft(n.nodes,v.target);if(G!==null&&G===W)return .72}return v.kind==="tag"?.65:.8});let m=e.d3Force("center");m?.strength&&m.strength(zt);let w=Ie.min+t*(Ie.max-Ie.min),h=Rn(n,a.lens,w),k=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",Hn(v=>h.get(v.id)??null,k)),r.use3d&&e.d3Force("flattenZ",null)},Q=new Map,V=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,s=r.three;Q.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(l=>{let i=M(l),f=P(l),m=!1;if(s)if(U()){let v=l.isHub?1.35:1.1,G=new s.MeshLambertMaterial({color:f,emissive:f,emissiveIntensity:v});Q.set(l.id,{material:G,base:v,phase:l.phase}),m=new s.Mesh(new s.SphereGeometry(i,14,14),G)}else m=new s.Mesh(new s.SphereGeometry(i,14,14),new s.MeshBasicMaterial({color:f}));if(!S(l)||!t)return m;let w=new t(l.name),h=U()?"rgba(255, 255, 255, 0.85)":J(o.current.ink,.88);if(w.color=H(l.id)?h:J(h,se),w.fontWeight="400",w.strokeWidth=0,w.textHeight=R.has(l.id)?6.5:5.5,w.center.set(0,.5),w.position.x=i+2,w.position.y=0,!s||m===!1)return w;let k=new s.Group;return k.add(m),k.add(w),k})},ee=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(l=>{let i=Zt[l.kind]*y.edgeScale,f=new t.MeshBasicMaterial({color:T(l),transparent:!0,opacity:z(l),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),f)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,i)=>{let f=i.end.x-i.start.x,m=i.end.y-i.start.y,w=i.end.z-i.start.z,h=Math.sqrt(f*f+m*m+w*w);return l.position.x=(i.start.x+i.end.x)/2,l.position.y=(i.start.y+i.end.y)/2,l.position.z=(i.start.z+i.end.z)/2,l.scale.x=1,l.scale.y=Math.max(h,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(s,new t.Vector3(f,m,w).normalize()),!0})},c=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=L();if(s===null)return 0;let l=F(t.source),i=F(t.target);return l===s||i===s?2:0})},d=()=>{e.nodeVal(x),e.nodeColor(P),e.linkColor(C),e.linkWidth(t=>{let s=F(t.source),l=F(t.target),i=L(),f=y.edgeScale;return i!==null&&(s===i||l===i)?.7*f:t.kind==="wikilink"||t.kind==="external"?.5*f:(t.kind==="tag"?.35:.25)*f}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ke),c(),ee(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},g=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(m,w)=>{let h=document.createElement("span");h.className="graph-landing__legend-item";let k=document.createElement("span");k.className="graph-landing__dot",k.setAttribute("aria-hidden","true"),k.style.background=m;let v=document.createElement("span");return v.textContent=w,h.append(k,v),h},l=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",f=r.root.dataset.legendLinks??"Links";t.replaceChildren(s(o.current.ink,l),s(o.current.tertiary,i),s(o.current.external,f))},N=t=>{let s=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let m=document.createElement("span");m.className="graph-landing__dot",m.style.background=t.dotColor,i.append(m)}i.append(document.createTextNode(t.label));let f=document.createElement("span");return f.className="graph-landing__tag-count",f.textContent=String(t.count),l.append(i,f),s.append(l),s},O=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=r.root.querySelector("[data-graph-facet-label]"),l=r.root.querySelector(".graph-landing__tags");if(a.lens==="folder"){let f=r.root.dataset.folderRootLabel??"root",m=new Map;for(let h of n.nodes)h.type==="note"&&m.set(h.folder,(m.get(h.folder)??0)+1);let w=[...m.entries()].sort((h,k)=>k[1]-h[1]);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=w.length===0),t.replaceChildren(...w.map(([h,k])=>N({dataset:{key:"graphFolder",value:h},pressed:a.focusFolder===h,dotColor:ut(h,o.current),label:h==="root"?f:h,count:k})));return}let i=n.nodes.filter(f=>f.type==="tag").sort((f,m)=>m.degree-f.degree).slice(0,16);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=i.length===0),t.replaceChildren(...i.map(f=>N({dataset:{key:"graphTag",value:f.tag},pressed:a.focusTag===f.tag,dotColor:null,label:f.tag,count:f.degree})))},A=()=>{e.graphData(Y()),E(),d(),V(),g(),O(),gt(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),e.d3ReheatSimulation()},xt=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),t!=="folder"&&(a.focusFolder=null),He(t),A()},St=t=>{a.focusTag=a.focusTag===t?null:t,a.focusFolder=null,a.focusTag&&(a.lens="tag",He("tag")),A()},Ct=t=>{a.focusFolder=a.focusFolder===t?null:t,a.focusTag=null,a.focusFolder&&(a.lens="folder",He("folder")),A()},ze=()=>r.use3d?Tn(o.current):Et(o.current);e.graphData(Y()),e.backgroundColor(ze()),e.nodeLabel(t=>t.name),e.nodeRelSize(Vt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Ut),typeof e.linkOpacity=="function"&&e.linkOpacity(Ke),E(),d();let j=r.root.querySelector("[data-graph-preview]"),ue=r.root.querySelector("[data-graph-preview-chip]"),de=r.root.querySelector("[data-graph-preview-title]"),fe=r.root.querySelector("[data-graph-preview-excerpt]"),ge=0;window.addCleanup(()=>window.clearTimeout(ge));let Mt=t=>{if(!(j instanceof HTMLElement)||!(ue instanceof HTMLElement)||!(de instanceof HTMLElement)||!(fe instanceof HTMLElement))return;window.clearTimeout(ge);let s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let f=r.root.dataset.previewTagTemplate??"{n} notes";ue.textContent=l,de.textContent=`#${t.tag}`,fe.textContent=f.replace("{n}",String(t.degree))}else t.type==="external"?(ue.textContent=i,de.textContent=t.name,fe.textContent=t.url):(ue.textContent=s,de.textContent=t.name,fe.textContent=t.excerpt);j.hidden=!1,j.dataset.visible="true"},Ve=()=>{j instanceof HTMLElement&&(window.clearTimeout(ge),ge=window.setTimeout(()=>{j.dataset.visible="false",j.hidden=!0},nn))};if(e.onNodeHover(t=>{p=t?t.id:null,b===null&&(t?Mt(t):Ve()),d(),r.use3d&&V()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Le()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=qt;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=U()?Je:0,r.bloomPass.radius=Qe,r.bloomPass.threshold=et,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ie,Xe),y.zoom!==1&&K(0)),V(),!Le()){let t=0,s=()=>{let l=performance.now()/1e3*tn;for(let i of Q.values())i.material.emissiveIntensity=i.base*(1+en*Math.sin(l+i.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,l)=>{let i=M(t),f=t.x??0,m=t.y??0;if(s.save(),s.beginPath(),s.arc(f,m,i,0,Math.PI*2),s.fillStyle=P(t),s.fill(),t.isHub&&(s.strokeStyle=H(t.id)?o.current.accent:J(o.current.accent,se),s.lineWidth=1.2/l,s.stroke()),S(t)){let w=11.5/l;s.font=`${w}px ${o.current.font}`,s.fillStyle=H(t.id)?o.current.ink:J(o.current.ink,se),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,f,m-i-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,l)=>{let i=M(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,i,0,Math.PI*2),l.fillStyle=s,l.fill()});let me=r.root.querySelector("[data-graph-inspect]"),pe=r.root.querySelector("[data-graph-inspect-chip]"),he=r.root.querySelector("[data-graph-inspect-title]"),be=r.root.querySelector("[data-graph-inspect-excerpt]"),Ce=r.root.querySelector("[data-graph-inspect-tags]"),Me=r.root.querySelector("[data-graph-inspect-connected]"),_=r.root.querySelector("[data-graph-inspect-open]"),X=t=>{r.root.dataset.railOpen=t?"true":"false";let s=r.root.querySelector("[data-graph-rail-toggle]"),l=r.root.querySelector("[data-graph-rail-scrim]"),i=r.root.querySelector("#graph-landing-rail");s instanceof HTMLButtonElement&&s.setAttribute("aria-expanded",t?"true":"false"),i instanceof HTMLElement&&i.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},ye=t=>{Le()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Pt=t=>{let s=u.get(t.id)??new Set,l=[];for(let i of s){let f=n.nodes.find(m=>m.id===i);f&&l.push(f)}return l.sort((i,f)=>f.degree-i.degree)},Nt=t=>{if(!(me instanceof HTMLElement)||!(pe instanceof HTMLElement)||!(he instanceof HTMLElement)||!(be instanceof HTMLElement)||!(Ce instanceof HTMLElement)||!(Me instanceof HTMLElement))return;let s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links",f=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(pe.textContent=l,he.textContent=`#${t.tag}`,be.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(pe.textContent=i,he.textContent=t.name,be.textContent=t.url):(pe.textContent=s,he.textContent=t.name,be.textContent=t.excerpt);let m=t.tags.map(h=>{let k=document.createElement("li");return k.textContent=h,k});Ce.replaceChildren(...m),Ce.hidden=m.length===0;let w=Pt(t).slice(0,12);if(w.length===0){let h=document.createElement("li");h.className="graph-landing__inspect-empty",h.textContent=f,Me.replaceChildren(h)}else Me.replaceChildren(...w.map(h=>{let k=document.createElement("li"),v=document.createElement("button");v.type="button",v.className="graph-landing__inspect-link",v.dataset.graphInspectId=h.id;let G=h.type==="tag"?l:h.type==="external"?i:s,W=document.createElement("span");W.textContent=G;let B=document.createElement("strong");return B.textContent=h.type==="tag"?`#${h.tag}`:h.name,v.append(W,B),k.append(v),k}));_ instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(_.hidden=!1,_.href=Tt(t.slug).toString(),_.textContent=r.root.dataset.inspectRead??"Read note",_.removeAttribute("target"),_.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(_.hidden=!1,_.href=t.url,_.textContent=r.root.dataset.inspectOpenExternal??"Open",_.target="_blank",_.rel="noopener noreferrer"):(_.hidden=!0,_.removeAttribute("href"),_.removeAttribute("target"),_.removeAttribute("rel"))),me.hidden=!1,r.root.dataset.inspecting="true",X(!1),Ve()},te=()=>{b=null,me instanceof HTMLElement&&(me.hidden=!0),r.root.dataset.inspecting="false",ye(!0),d(),r.use3d&&V()},Ue=t=>{if(b===t.id&&t.type==="note"&&t.slug.length>0){Sn(t.slug);return}if(b===t.id&&t.type==="external"&&t.url.length>0){Cn(t.url);return}b=t.id,Nt(t),d(),r.use3d&&V()},Be=t=>{Ue(t)},Pe=!1;e.onNodeClick((t,s)=>{t&&(Pe=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Be(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{te(),X(!1)});let q=r.root.querySelector("#graph-landing-mount");if(q instanceof HTMLElement){let t=null,s=m=>{t={x:m.clientX,y:m.clientY},ye(!1)},l=(m,w)=>{if(typeof e.graph2ScreenCoords!="function")return null;let h=q.getBoundingClientRect(),k=m-h.left,v=w-h.top,G=null,W=4096;for(let B of Y().nodes){if(B.x===void 0||B.y===void 0)continue;let we=e.graph2ScreenCoords(B.x,B.y,B.z??0),At=(we.x-k)**2+(we.y-v)**2,_t=(we.x-m)**2+(we.y-w)**2,We=Math.min(At,_t);We<W&&(W=We,G=B)}return G},i=m=>{let w=t;t=null,ye(!0),!(!w||(m.clientX-w.x)**2+(m.clientY-w.y)**2>25)&&window.setTimeout(()=>{if(Pe){Pe=!1;return}let k=l(m.clientX,m.clientY);k?Be(k):te()},0)},f=()=>{t=null,ye(!0)};q.addEventListener("pointerdown",s,!0),q.addEventListener("pointerup",i,!0),q.addEventListener("pointercancel",f,!0),window.addCleanup(()=>{q.removeEventListener("pointerdown",s,!0),q.removeEventListener("pointerup",i,!0),q.removeEventListener("pointercancel",f,!0)})}gt(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),g(),O(),a.lens!=="all"&&A(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let $e=()=>{o.current=vt(),e.backgroundColor(ze()),r.bloomPass&&(r.bloomPass.strength=U()?Je:0,r.bloomPass.radius=Qe,r.bloomPass.threshold=et),d(),V(),g()};document.addEventListener("themechange",$e),window.addCleanup(()=>document.removeEventListener("themechange",$e));let qe=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){te();return}if(s.closest("[data-graph-rail-toggle]")){let k=r.root.dataset.railOpen!=="true";k&&te(),X(k);return}if(s.closest("[data-graph-rail-scrim]")){X(!1);return}let l=s.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let k=n.nodes.find(v=>v.id===l.dataset.graphInspectId);k&&Ue(k);return}let i=s.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&_n(i.dataset.graphLens)){xt(i.dataset.graphLens);return}let f=s.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){St(f.dataset.graphTag);return}let m=s.closest("[data-graph-folder]");if(m instanceof HTMLElement&&m.dataset.graphFolder){Ct(m.dataset.graphFolder);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let w=s.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){a.allLabels=!a.allLabels,w.setAttribute("aria-pressed",a.allLabels?"true":"false");let k=w.dataset.labelShow??"Labels",v=w.dataset.labelHide??"Labels",G=a.allLabels?v:k;w.title=G,w.setAttribute("aria-label",G),V();return}if(s.closest("[data-graph-theme]")){let k=U()?"light":"dark";document.documentElement.setAttribute("saved-theme",k),localStorage.setItem("theme",k),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${k}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:k}}));return}let h=s.closest("[data-graph-tags-toggle]");if(h instanceof HTMLButtonElement){let k=r.root.querySelector(".graph-landing__tags");if(k instanceof HTMLElement){let v=k.dataset.open==="true";k.dataset.open=v?"false":"true",h.setAttribute("aria-expanded",v?"false":"true")}}},ne=r.root.querySelector("[data-graph-node-scale]"),re=r.root.querySelector("[data-graph-edge-scale]");if(ne instanceof HTMLInputElement){ne.value=String(Math.round(y.nodeScale*100));let t=()=>{y.nodeScale=Number(ne.value)/100,Ee(y),d(),r.use3d&&V()};ne.addEventListener("input",t),window.addCleanup(()=>ne.removeEventListener("input",t))}if(re instanceof HTMLInputElement){re.value=String(Math.round(y.edgeScale*100));let t=()=>{y.edgeScale=Number(re.value)/100,Ee(y),d()};re.addEventListener("input",t),window.addCleanup(()=>re.removeEventListener("input",t))}let oe=r.root.querySelector("[data-graph-zoom]");if(oe instanceof HTMLInputElement){oe.value=String(Math.round(y.zoom*100));let t=()=>{y.zoom=Number(oe.value)/100,Ee(y),K(200)};oe.addEventListener("input",t),window.addCleanup(()=>oe.removeEventListener("input",t))}let ae=r.root.querySelector("[data-graph-spread]");if(ae instanceof HTMLInputElement){ae.value=String(Math.round(y.spread*100));let t=()=>{y.spread=Number(ae.value)/100,Ee(y),E(),e.d3ReheatSimulation()};ae.addEventListener("input",t),window.addCleanup(()=>ae.removeEventListener("input",t))}X(!1),r.root.addEventListener("click",qe),window.addCleanup(()=>r.root.removeEventListener("click",qe));let Ye=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){X(!1);return}te()}};window.addEventListener("keydown",Ye),window.addCleanup(()=>window.removeEventListener("keydown",Ye))}function On(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Fn(){try{return window.localStorage.getItem(De)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function mt(e){try{if(e){window.localStorage.setItem(De,"stopped");return}window.localStorage.removeItem(De)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function zn(e){let n=performance.now(),o=0,r=u=>{let a=Math.min(1,(u-n)/e.durationMs),p=a*a;e.apply(e.from+(e.to-e.from)*p),a<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function Vn(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,u=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof u=="function"&&u();let a=r.YT;if(!a||typeof a.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(a)},!document.querySelector("script[data-graph-youtube-api]")){let a=document.createElement("script");a.src=$t,a.async=!0,a.dataset.graphYoutubeApi="1",a.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(a)}})}function Un(e){return new e.api.Player(e.host,{videoId:je,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:je,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Bn(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",u=e.dataset.audioPlay??"Play music",a=null,p=!1,b=null,y=!Fn(),L=!1,R=T=>{n.setAttribute("aria-pressed",T?"true":"false"),n.setAttribute("aria-label",T?r:u),n.title=T?r:u,n.dataset.playing=T?"true":"false"},x=()=>{b&&(b(),b=null)},S=T=>{a&&a.setVolume(Math.max(0,Math.min(ke,T)))},M=T=>{!y||L||(L=!0,R(!0),T.unMute(),S(0),T.playVideo(),x(),b=zn({from:0,to:ke,durationMs:Bt,apply:S}))},H=()=>{y=!1,L=!1,x(),mt(!0),a&&(a.mute(),a.pauseVideo(),S(0)),R(!1)},D=async()=>{if(!a)try{let T=await Vn();if(a)return;a=Un({api:T,host:o,onReady:C=>{p=!0,C.mute(),S(0),C.playVideo()},onEnded:C=>{y&&(C.playVideo(),S(ke))}})}catch(T){console.error("[graph-landing] ambient audio unavailable",T)}},P=T=>{let C=T.target;if(!(C instanceof Element&&C.closest("[data-graph-audio-toggle]"))&&!(!y||L||On())){if(p&&a){M(a);return}D()}},I=()=>{if(y&&L){H();return}if(y=!0,mt(!1),p&&a){M(a);return}D()},z=()=>{if(a){if(document.hidden){x(),a.pauseVideo();return}y&&L&&(a.playVideo(),S(ke))}};R(y),D(),n.addEventListener("click",I),e.addEventListener("pointerdown",P,!0),e.addEventListener("touchstart",P,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",z),window.addCleanup(()=>{n.removeEventListener("click",I),e.removeEventListener("pointerdown",P,!0),e.removeEventListener("touchstart",P,!0),document.removeEventListener("visibilitychange",z),x(),a&&(a.pauseVideo(),a.destroy(),a=null)})}async function $n(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Bn(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),p=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",b=!1,y=null,L={current:vt()},R=()=>{b=!0,y&&(y._destructor(),y=null),delete e.dataset.graphReady};window.addCleanup(R);let x=En(),S=Pn(x),M=x?import(Rt).then(E=>E.default??null).catch(E=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),null)):Promise.resolve(null),H=x?import(Ht).catch(E=>(console.error("[graph-landing] three unavailable; using default node spheres",E),null)):Promise.resolve(null),D=x?import(Dt).then(E=>E.UnrealBloomPass?new E.UnrealBloomPass:null).catch(E=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),null)):Promise.resolve(null);S.catch(()=>{});let P;try{P=Oe(await fetchData)}catch(E){throw dt(n,"Graph could not load content index."),E}if(b)return;let I=wn(on(P),{localeId:r,sourceLocale:u,prefixes:a}),z=p.replace("{n}",String(I.nodes.length)).replace("{m}",String(I.links.length));for(let E of o)E.textContent=z;let T;try{T=await S}catch(E){throw dt(n,"Graph could not load. Check your network connection."),E}let[C,Y,K]=await Promise.all([M,H,D]);b||(n.replaceChildren(),y=T(n),n.__graphLanding=y,n.__graphData=I,Dn(y,I,L,{use3d:x,root:e,spriteText:C,bloomPass:K,three:Y}))}var qn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(qn,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{$n()});\n';

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
var GraphLanding_default = (() => {
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
    return /* @__PURE__ */ u2(
      "div",
      {
        class: "graph-landing",
        "data-rail-open": "false",
        "data-locale": localeId,
        "data-source-locale": sourceLocale,
        "data-locale-prefixes": localePrefixes,
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
                              /* @__PURE__ */ u2("circle", { cx: "12", cy: "12", r: "4.4", fill: "none", stroke: "currentColor", "stroke-width": "1.6" }),
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
                  children: /* @__PURE__ */ u2("svg", { width: "18", height: "18", viewBox: "0 0 18 18", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ u2(
                    "path",
                    {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "1.6",
                      "stroke-linecap": "round",
                      d: "M3 5h12M3 9h12M3 13h12"
                    }
                  ) })
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
                      /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "all", "aria-pressed": "true", children: copy.lensAll }),
                      /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "tag", "aria-pressed": "false", children: copy.lensTag }),
                      /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "folder", "aria-pressed": "false", children: copy.lensFolder })
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
                                children: /* @__PURE__ */ u2("svg", { width: "15", height: "15", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: [
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
                                ] })
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
                                children: /* @__PURE__ */ u2("svg", { width: "15", height: "15", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ u2(
                                  "path",
                                  {
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "1.4",
                                    "stroke-linecap": "round",
                                    d: "M3 12.5 6.6 3.5h2.8L13 12.5M4.6 9.2h6.8"
                                  }
                                ) })
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
                          /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--note", "aria-hidden": "true" }),
                          copy.notes
                        ] }),
                        /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--tag", "aria-hidden": "true" }),
                          copy.tags
                        ] }),
                        /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--external", "aria-hidden": "true" }),
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
});

// src/pageType.ts
var graphPageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  const translationKey = frontmatter?.translationKey;
  return translationKey === "graph" || translationKey === "home";
};
var GraphLandingPage = () => ({
  name: "GraphLanding",
  priority: 20,
  match: graphPageMatcher,
  layout: "graph",
  frame: "minimal",
  body: GraphLanding_default
});
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map