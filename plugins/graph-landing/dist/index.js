// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Q="0.179.1",qe="https://esm.sh/force-graph@1.51.4",We=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Q}`,je=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Q}`,Ke=`https://esm.sh/three@${Q}`,Ye=`https://esm.sh/three@${Q}/examples/jsm/postprocessing/UnrealBloomPass.js`,Xe=8,Ze=5,Je=6,j=1,le=3.5,Qe=.13,en=4.2,nn=1,he=1,U=.18,Ne="graph-landing:lens",tn=.18,rn=40,on=1.4,sn=1.25,an=1.15,be=4.5,cn=8.5,we=1.6,ye=.5,ke=.28,ln={wikilink:1,tag:.7,cooc:.5,folder:.5},un=.08,Te=220,Le=2,dn=.15,gn=.8,fn=350,mn={tight:{charge:-100,distance:72},normal:{charge:-150,distance:96},wide:{charge:-190,distance:116}};function Pe(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function ve(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}function pn(e){let t=[];for(let r of Object.values(e)){let o=Pe(r),l=typeof o.slug=="string"?o.slug:"";if(l.length===0)continue;let i=o.multilingual,u=i&&typeof i=="object"?i:void 0;t.push({slug:l,title:typeof o.title=="string"?o.title:l,links:ve(o.links),tags:ve(o.tags),content:typeof o.content=="string"?o.content:"",multilingual:u})}return t}function hn(e){let t=e.replace(/\\s+/g," ").trim();return t.length<=Te?t:`${t.slice(0,Te).trimEnd()}\\u2026`}function Ee(e){let t=0;for(let r of e)t=t*31+r.charCodeAt(0)>>>0;return t%628/100}function bn(e){return e==="index"||e.endsWith("/index")}function wn(e){return e==="tags"||e.startsWith("tags/")}function yn(e){let t=e.multilingual?.translationKey;return t==="home"||t==="graph"}function kn(e,t){return e.multilingual?.locale?e.multilingual.locale===t.localeId:e.slug.startsWith(`${t.localeId}/`)?!0:!t.prefixes.some(o=>e.slug.startsWith(`${o}/`))&&t.localeId===t.sourceLocale}function _e(e,t,r){return Math.min(r,Math.max(t,e))}function Se(e){let t=e.split("/").filter(r=>r.length>0);return t.length<2?"root":t[0]??"root"}function Tn(e,t){return e.length===0?"":[...e].sort((o,l)=>(t.get(l)??0)-(t.get(o)??0))[0]??""}function Ln(e,t){let r=e.filter(a=>bn(a.slug)||wn(a.slug)||yn(a)?!1:kn(a,t)),o=new Set(r.map(a=>a.slug)),l=new Map,i=[],u=new Set,b=new Map,T=a=>{l.set(a,(l.get(a)??0)+1)},S=(a,g,y)=>a<g?`${a}|${g}|${y}`:`${g}|${a}|${y}`,N=(a,g,y,L)=>{let M=S(a,g,y);u.has(M)||(u.add(M),i.push({source:a,target:g,kind:y}),L&&(T(a),T(g)))};for(let a of r)for(let g of a.links)o.has(g)&&g!==a.slug&&N(a.slug,g,"wikilink",!0);let C=new Set,A=new Map;for(let a of r)for(let g of a.tags){b.set(g,(b.get(g)??0)+1);let y=`tag:${g}`;C.add(y),N(a.slug,y,"tag",!0);let L=A.get(g)??[];L.push(a.slug),A.set(g,L)}for(let a of r)if(!(a.tags.length<2))for(let g=0;g<a.tags.length;g+=1)for(let y=g+1;y<a.tags.length;y+=1)N(`tag:${a.tags[g]}`,`tag:${a.tags[y]}`,"cooc",!1);let x=new Map;for(let a of r){let g=Se(a.slug);if(g==="root")continue;let y=x.get(g)??[];y.push(a.slug),x.set(g,y)}for(let a of x.values()){if(a.length<2)continue;let g=[...a].sort();for(let y=0;y<g.length;y+=1){let L=g[(y+1)%g.length],M=g[(y+Le)%g.length],G=g[y];G===void 0||L===void 0||(G!==L&&!u.has(S(G,L,"wikilink"))&&N(G,L,"folder",!1),g.length>Le+1&&M!==void 0&&G!==M&&!u.has(S(G,M,"wikilink"))&&N(G,M,"folder",!1))}}let _=[...l.values()],R=_.length>0?Math.min(..._):0,I=_.length>0?Math.max(..._):0,H=a=>{let g=l.get(a)??0,y=Math.sqrt(g),L=Math.sqrt(R),G=Math.sqrt(I)-L;return G===0?(j+le)/2:j+(y-L)/G*(le-j)},w=[...r].sort((a,g)=>(l.get(g.slug)??0)-(l.get(a.slug)??0)),V=new Set(w.filter(a=>(l.get(a.slug)??0)>0).slice(0,Xe).map(a=>a.slug)),z=r.map(a=>({id:a.slug,name:a.title,type:"note",val:H(a.slug),degree:l.get(a.slug)??0,isHub:V.has(a.slug),tag:"",slug:a.slug,folder:Se(a.slug),tags:a.tags,dominantTag:Tn(a.tags,b),excerpt:hn(a.content),phase:Ee(a.slug)}));for(let a of C){let g=a.slice(4);z.push({id:a,name:g,type:"tag",val:_e(H(a)*.7,j,le),degree:l.get(a)??0,isHub:!1,tag:g,slug:`tags/${g}`,folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:Ee(a)})}return{nodes:z,links:i}}function vn(e){let t=new Map,r=(o,l)=>{let i=t.get(o)??new Set;i.add(l),t.set(o,i)};for(let o of e){if(o.kind!=="wikilink"&&o.kind!=="tag")continue;let l=E(o.source),i=E(o.target);r(l,i),r(i,l)}return t}function E(e){return typeof e=="string"?e:e.id}function q(e,t){let r=document.createElement("span");r.style.color=`var(${e})`,r.style.position="absolute",r.style.visibility="hidden",document.body.appendChild(r);let o=getComputedStyle(r).color;return r.remove(),o||t}function Ae(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:q("--light","#ffffff"),ink:q("--darkgray","#0f0f0f"),accent:q("--secondary","#a52142"),tertiary:q("--tertiary","#c75b75"),gray:q("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function F(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function En(){return window.matchMedia("(pointer: fine)").matches}function Sn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Cn(){return En()&&Sn()&&window.innerWidth>700&&!F()}function D(){return document.documentElement.getAttribute("saved-theme")==="dark"}function J(e){let t=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(t&&t[1]&&t[2]&&t[3])return{r:Number(t[1]),g:Number(t[2]),b:Number(t[3])};let r=e.match(/^#([0-9a-f]{6})$/i);if(r&&r[1]){let o=parseInt(r[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}return null}function W(e,t){let r=J(e);return r?`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`:e}function Z(e,t,r){let o=J(e),l=J(t);if(!o||!l)return e;let i=(u,b)=>Math.round(u+(b-u)*r);return`rgb(${i(o.r,l.r)}, ${i(o.g,l.g)}, ${i(o.b,l.b)})`}function De(e){return D()?Z(e.bg,"#05070f",.88):e.bg}function xn(e){let t=J(e);if(!t)return e;let r=o=>{let l=o/255,i=l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4);return Math.round(i*255)};return`rgb(${r(t.r)}, ${r(t.g)}, ${r(t.b)})`}function Mn(e){return xn(De(e))}function Re(e,t){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return t[r%t.length]??t[0]??e}function Ce(e,t){return e==="articles"?t.accent:e==="inbox"?t.tertiary:e==="root"?t.ink:Re(e,[t.accent,t.tertiary,t.ink,t.gray])}function Gn(e,t){return e.length===0?t.ink:Re(e,[t.accent,t.tertiary])}function Nn(e){let t=e.split("/").map(i=>encodeURIComponent(i)).join("/"),r=document.querySelector("base")?.getAttribute("href"),o="/";r&&r.startsWith("/")&&!r.startsWith("//")&&(o=r.endsWith("/")?r:`${r}/`);let l=`${o}${t}`.replace(/\\/{2,}/g,"/");return new URL(l,window.location.origin)}function Pn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let t=Nn(e);window.location.assign(t.toString())}function _n(e){let t=e.default;if(typeof t!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return t()}function xe(e,t){e.textContent=t,e.classList.add("graph-landing__error")}async function An(e){let r=await import(e?We:qe);return e&&typeof r.default=="function"?r.default({controlType:"orbit"}):_n(r)}function Dn(){try{let e=sessionStorage.getItem(Ne);if(e==="all"||e==="tag"||e==="folder"||e==="hub")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Me(e){try{sessionStorage.setItem(Ne,e)}catch(t){console.error("[graph-landing] could not persist lens",t)}}function Rn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function In(e){return e==="tight"||e==="normal"||e==="wide"}function Hn(e,t){let r=e.nodes.filter(l=>l.type==="note").sort((l,i)=>i.degree-l.degree).slice(0,Je),o=new Set;for(let l of r){o.add(l.id);for(let i of t.get(l.id)??[])o.add(i)}return o}function On(e,t){return{nodes:e.nodes.filter(r=>t.has(r.id)),links:e.links.filter(r=>t.has(E(r.source))&&t.has(E(r.target)))}}function Fn(e,t){return e.type==="tag"?e.tag===t:e.tags.includes(t)}function Ge(e,t){let r=E(t),o=e.find(l=>l.id===r);return!o||o.type!=="note"?null:o.folder}function zn(e,t,r){let o=new Map;if(t==="folder"){let l=[...new Set(e.nodes.filter(i=>i.type==="note").map(i=>i.folder))];return l.forEach((i,u)=>{let b=Math.PI*2*u/Math.max(l.length,1),T={x:Math.cos(b)*r,y:Math.sin(b)*r,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===i&&o.set(S.id,T)}),o}if(t==="tag"){let l=e.nodes.filter(u=>u.type==="tag"),i=new Map;l.forEach((u,b)=>{let T=Math.PI*2*b/Math.max(l.length,1);i.set(u.tag,{x:Math.cos(T)*r,y:Math.sin(T)*r,z:0})});for(let u of e.nodes)if(u.type==="tag"){let b=i.get(u.tag);b&&o.set(u.id,b)}else if(u.dominantTag.length>0){let b=i.get(u.dominantTag);b&&o.set(u.id,b)}}return o}function Bn(e,t){let r=[],o=l=>{let i=t*l;for(let u of r){let b=e(u);b&&(u.vx=(u.vx??0)+(b.x-(u.x??0))*i,u.vy=(u.vy??0)+(b.y-(u.y??0))*i,u.vz=(u.vz??0)+(b.z-(u.z??0))*i)}};return o.initialize=l=>{r=l},o}function X(e,t,r,o){for(let l of e.querySelectorAll(t)){if(!(l instanceof HTMLElement))continue;let i=l.getAttribute(o);l.setAttribute("aria-pressed",i===r?"true":"false")}}function $n(e,t,r,o){let l=vn(t.links),i={lens:Dn(),spacing:"normal",allLabels:!1,focusTag:null},u=null,b=new Set(t.nodes.filter(n=>n.type==="note").sort((n,s)=>s.degree-n.degree).slice(0,Ze).map(n=>n.id)),T=n=>{let s=n.val;return n.isHub&&(s*=on),i.lens==="tag"&&n.type==="tag"&&(s*=sn),i.focusTag&&n.id===`tag:${i.focusTag}`&&(s*=an),s},S=n=>i.allLabels||u===n.id?!0:b.has(n.id),N=n=>{let s=_e((T(n)-j)/5,0,1);return be+s*(cn-be)},C=n=>{if(u!==null)return u===n||(l.get(u)?.has(n)??!1);if(i.focusTag===null)return!0;let s=t.nodes.find(c=>c.id===n);return s?Fn(s,i.focusTag):!1},A=n=>i.lens==="tag"?n.type==="tag"?r.current.tertiary:Gn(n.dominantTag,r.current):i.lens==="folder"?n.type==="tag"?r.current.tertiary:Ce(n.folder,r.current):i.lens==="hub"?n.type==="tag"?r.current.tertiary:n.isHub?r.current.accent:r.current.ink:n.type==="tag"?r.current.tertiary:r.current.ink,x=n=>{if(u!==null&&(u===n.id||l.get(u)?.has(n.id)))return r.current.accent;let s=A(n);return C(n.id)?D()?n.type==="tag"?Z(r.current.tertiary,"#ffffff",.22):n.isHub?Z("#fff3e4",r.current.accent,.1):Z("#ffffff",r.current.accent,.12):s:W(s,U)},_=n=>{let s=D();return n==="wikilink"?s?.65:.48:n==="tag"?s?.45:.28:s?.26:.12},R=n=>{let s=E(n.source),c=E(n.target);return u!==null&&(s===u||c===u)?.85:(u!==null||i.focusTag!==null)&&(!C(s)||!C(c))?_(n.kind)*U:_(n.kind)},I=n=>{let s=E(n.source),c=E(n.target);return u!==null&&(s===u||c===u)?r.current.accent:D()?"#dbe2f2":r.current.gray},H=n=>W(I(n),R(n)),w=()=>i.lens!=="hub"?t:On(t,Hn(t,l)),V=()=>{let n=mn[i.spacing],s=e.d3Force("charge");s?.strength&&s.strength(n.charge);let c=e.d3Force("link");c?.distance&&c.distance(p=>i.lens==="tag"&&p.kind==="tag"?n.distance*.72:n.distance),c?.strength&&c.strength(p=>{if(p.kind==="cooc"||p.kind==="folder")return .04;if(i.lens==="tag"&&p.kind==="tag")return .95;if(i.lens==="folder"){let k=Ge(t.nodes,p.source),v=Ge(t.nodes,p.target);if(k!==null&&k===v)return .72}return p.kind==="tag"?.65:.8});let d=e.d3Force("center");d?.strength&&d.strength(Qe);let m=i.spacing==="wide"?260:i.spacing==="tight"?130:190,h=zn(t,i.lens,m),f=i.lens==="folder"||i.lens==="tag"?.08:0;if(e.d3Force("cluster",Bn(p=>h.get(p.id)??null,f)),o.use3d){let p=[],k=(v=>{for(let O of p){let P=O;typeof P.z=="number"&&typeof P.vz=="number"&&(P.vz-=P.z*un*v)}});k.initialize=v=>{p=v},e.d3Force("flattenZ",k)}},z=new Map,a=()=>{if(!o.use3d||typeof e.nodeThreeObject!="function")return;let n=o.spriteText,s=o.three;z.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(c=>{let d=N(c),m=x(c),h=!1;if(s)if(D()){let v=c.isHub?1.05:.85,O=new s.MeshLambertMaterial({color:m,emissive:m,emissiveIntensity:v});z.set(c.id,{material:O,base:v,phase:c.phase}),h=new s.Mesh(new s.SphereGeometry(d,14,14),O)}else h=new s.Mesh(new s.SphereGeometry(d,14,14),new s.MeshBasicMaterial({color:m}));if(!S(c)||!n)return h;let f=new n(c.name),p=D()?"rgba(255, 255, 255, 0.85)":r.current.ink;if(f.color=C(c.id)?p:W(p,U),f.fontWeight="400",f.strokeWidth=0,f.textHeight=b.has(c.id)?8:6.5,f.center.set(0,.5),f.position.x=d+2.5,f.position.y=0,!s||h===!1)return f;let k=new s.Group;return k.add(h),k.add(f),k})},g=()=>{let n=o.three;if(!o.use3d||!n||typeof e.linkThreeObject!="function")return;let s=new n.Vector3(0,1,0);e.linkThreeObject(c=>{let d=ln[c.kind],m=new n.MeshBasicMaterial({color:I(c),transparent:!0,opacity:R(c)});return new n.Mesh(new n.CylinderGeometry(d,d,1,6),m)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((c,d)=>{let m=d.end.x-d.start.x,h=d.end.y-d.start.y,f=d.end.z-d.start.z,p=Math.sqrt(m*m+h*h+f*f);return c.position.x=(d.start.x+d.end.x)/2,c.position.y=(d.start.y+d.end.y)/2,c.position.z=(d.start.z+d.end.z)/2,c.scale.x=1,c.scale.y=Math.max(p,.01),c.scale.z=1,c.quaternion.setFromUnitVectors(s,new n.Vector3(m,h,f).normalize()),!0})},y=()=>{!o.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(n=>{if(u===null)return 0;let s=E(n.source),c=E(n.target);return s===u||c===u?2:0})},L=()=>{e.nodeVal(T),e.nodeColor(x),e.linkColor(H),e.linkWidth(n=>{let s=E(n.source),c=E(n.target);return u!==null&&(s===u||c===u)?1.6:n.kind==="wikilink"?1.1:n.kind==="tag"?.8:.5}),typeof e.linkOpacity=="function"&&e.linkOpacity(he),y(),g(),o.use3d||e.nodeCanvasObjectMode(()=>"replace")},M=()=>{let n=o.root.querySelector("[data-graph-legend]");if(!(n instanceof HTMLElement))return;let s=(m,h)=>{let f=document.createElement("span");f.className="graph-landing__legend-item";let p=document.createElement("span");p.className="graph-landing__dot",p.setAttribute("aria-hidden","true"),p.style.background=m;let k=document.createElement("span");return k.textContent=h,f.append(p,k),f};if(i.lens==="folder"){let m=[...new Set(t.nodes.filter(f=>f.type==="note").map(f=>f.folder))],h=o.root.dataset.folderRootLabel??"root";n.replaceChildren(...m.map(f=>s(Ce(f,r.current),f==="root"?h:f)));return}let c=o.root.dataset.legendNotes??"Notes",d=o.root.dataset.legendTags??"Tags";n.replaceChildren(s(r.current.ink,c),s(r.current.tertiary,d))},G=()=>{let n=o.root.querySelector("[data-graph-tags]");if(!(n instanceof HTMLElement))return;let s=t.nodes.filter(m=>m.type==="tag").sort((m,h)=>h.degree-m.degree).slice(0,16),c=o.root.querySelector(".graph-landing__tags");c instanceof HTMLElement&&(c.hidden=s.length===0);let d=s.map(m=>{let h=document.createElement("li"),f=document.createElement("button");f.type="button",f.className="graph-landing__tag-item",f.dataset.graphTag=m.tag,f.setAttribute("aria-pressed",i.focusTag===m.tag?"true":"false");let p=document.createElement("span");p.textContent=m.tag;let k=document.createElement("span");return k.className="graph-landing__tag-count",k.textContent=String(m.degree),f.append(p,k),h.append(f),h});n.replaceChildren(...d)},Ie=n=>{if(o.use3d&&typeof e.cameraPosition=="function"){let s=n.x??0,c=n.y??0,d=n.z??0;e.cameraPosition({x:s+36,y:c+18,z:d+150},{x:s,y:c,z:d},700);return}typeof e.centerAt=="function"&&typeof e.zoom=="function"&&(e.centerAt(n.x??0,n.y??0,600),e.zoom(2.3,600))},ee=0;window.addCleanup(()=>window.clearTimeout(ee));let He=()=>window.innerWidth<=700?72:rn,ne=n=>{typeof e.zoomToFit=="function"&&e.zoomToFit(n,He())},te=(n,s)=>{window.clearTimeout(ee),ee=window.setTimeout(()=>{ne(s)},n)},re=n=>{e.graphData(w()),V(),L(),a(),M(),X(o.root,"[data-graph-lens]",i.lens,"data-graph-lens"),X(o.root,"[data-graph-spacing]",i.spacing,"data-graph-spacing");for(let s of o.root.querySelectorAll("[data-graph-tag]"))s instanceof HTMLElement&&s.setAttribute("aria-pressed",s.dataset.graphTag===i.focusTag?"true":"false");e.d3ReheatSimulation(),n&&te(280,F()?0:900)},Oe=n=>{i.lens=n,n!=="tag"&&(i.focusTag=null),Me(n),re(!0)},ue=n=>{i.focusTag=i.focusTag===n?null:n,i.focusTag&&(i.lens="tag",Me("tag")),re(!1);let s=t.nodes.find(c=>c.id===`tag:${n}`);if(s&&i.focusTag){Ie(s);return}te(280,F()?0:900)},de=()=>o.use3d?Mn(r.current):De(r.current);e.graphData(w()),e.backgroundColor(de()),e.nodeLabel(n=>n.name),e.nodeRelSize(en),typeof e.nodeOpacity=="function"&&e.nodeOpacity(nn),typeof e.linkOpacity=="function"&&e.linkOpacity(he),V(),L();let B=o.root.querySelector("[data-graph-preview]"),oe=o.root.querySelector("[data-graph-preview-chip]"),se=o.root.querySelector("[data-graph-preview-title]"),ie=o.root.querySelector("[data-graph-preview-excerpt]"),K=0;window.addCleanup(()=>window.clearTimeout(K));let Fe=n=>{if(!(B instanceof HTMLElement)||!(oe instanceof HTMLElement)||!(se instanceof HTMLElement)||!(ie instanceof HTMLElement))return;window.clearTimeout(K);let s=o.root.dataset.legendNotes??"Notes",c=o.root.dataset.legendTags??"Tags";if(n.type==="tag"){let d=o.root.dataset.previewTagTemplate??"{n} notes";oe.textContent=c,se.textContent=`#${n.tag}`,ie.textContent=d.replace("{n}",String(n.degree))}else oe.textContent=s,se.textContent=n.name,ie.textContent=n.excerpt;B.hidden=!1,B.dataset.visible="true"},ze=()=>{B instanceof HTMLElement&&(window.clearTimeout(K),K=window.setTimeout(()=>{B.dataset.visible="false",B.hidden=!0},fn))};if(e.onNodeHover(n=>{u=n?n.id:null,n?Fe(n):ze(),L(),o.use3d&&a()}),o.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!F()&&typeof e.controls=="function"){let n=e.controls();n.autoRotate=!1,n.autoRotateSpeed=tn;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>r.current.accent),o.bloomPass&&typeof e.postProcessingComposer=="function"&&(o.bloomPass.strength=D()?we:0,o.bloomPass.radius=ye,o.bloomPass.threshold=ke,e.postProcessingComposer().addPass(o.bloomPass)),typeof e.cameraPosition=="function"&&e.cameraPosition({x:0,y:80,z:720}),a(),!F()){let n=0,s=()=>{let c=performance.now()/1e3*gn;for(let d of z.values())d.material.emissiveIntensity=d.base*(1+dn*Math.sin(c+d.phase));n=window.requestAnimationFrame(s)};n=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(n))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((n,s,c)=>{let d=N(n),m=n.x??0,h=n.y??0;if(s.save(),s.beginPath(),s.arc(m,h,d,0,Math.PI*2),s.fillStyle=x(n),s.fill(),n.isHub&&(s.strokeStyle=C(n.id)?r.current.accent:W(r.current.accent,U),s.lineWidth=1.2/c,s.stroke()),S(n)){let f=11.5/c;s.font=`${f}px ${r.current.font}`,s.fillStyle=C(n.id)?r.current.ink:W(r.current.ink,U),s.textAlign="center",s.textBaseline="bottom",s.fillText(n.name,m,h-d-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((n,s,c)=>{let d=N(n)+8;c.beginPath(),c.arc(n.x??0,n.y??0,d,0,Math.PI*2),c.fillStyle=s,c.fill()});let ge=n=>{if(n.type==="tag"){ue(n.tag);return}Pn(n.slug)},ae=!1;e.onNodeClick((n,s)=>{n&&(ae=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),ge(n))});let $=o.root.querySelector("#graph-landing-mount");if($ instanceof HTMLElement){let n=null,s=m=>{n={x:m.clientX,y:m.clientY}},c=(m,h)=>{if(typeof e.graph2ScreenCoords!="function")return null;let f=$.getBoundingClientRect(),p=m-f.left,k=h-f.top,v=null,O=4096;for(let P of w().nodes){if(P.x===void 0||P.y===void 0)continue;let Y=e.graph2ScreenCoords(P.x,P.y,P.z??0),Ve=(Y.x-p)**2+(Y.y-k)**2,Ue=(Y.x-m)**2+(Y.y-h)**2,pe=Math.min(Ve,Ue);pe<O&&(O=pe,v=P)}return v},d=m=>{let h=n;n=null,!(!h||(m.clientX-h.x)**2+(m.clientY-h.y)**2>25)&&window.setTimeout(()=>{if(ae){ae=!1;return}let p=c(m.clientX,m.clientY);p&&ge(p)},0)};$.addEventListener("pointerdown",s,!0),$.addEventListener("pointerup",d,!0),window.addCleanup(()=>{$.removeEventListener("pointerdown",s,!0),$.removeEventListener("pointerup",d,!0)})}X(o.root,"[data-graph-lens]",i.lens,"data-graph-lens"),M(),G(),i.lens!=="all"&&re(!1);let ce=F();te(400,ce?0:800);let Be=window.setTimeout(()=>{ne(ce?0:400)},1400);window.addCleanup(()=>window.clearTimeout(Be));let $e=window.setTimeout(()=>{ne(ce?0:600)},3400);window.addCleanup(()=>window.clearTimeout($e));let fe=()=>{r.current=Ae(),e.backgroundColor(de()),o.bloomPass&&(o.bloomPass.strength=D()?we:0,o.bloomPass.radius=ye,o.bloomPass.threshold=ke),L(),a(),M()};document.addEventListener("themechange",fe),window.addCleanup(()=>document.removeEventListener("themechange",fe));let me=n=>{let s=n.target;if(!(s instanceof Element))return;let c=s.closest("[data-graph-lens]");if(c instanceof HTMLElement&&c.dataset.graphLens&&Rn(c.dataset.graphLens)){Oe(c.dataset.graphLens);return}let d=s.closest("[data-graph-spacing]");if(d instanceof HTMLElement&&d.dataset.graphSpacing&&In(d.dataset.graphSpacing)){i.spacing=d.dataset.graphSpacing,V(),e.d3ReheatSimulation(),X(o.root,"[data-graph-spacing]",i.spacing,"data-graph-spacing");return}let m=s.closest("[data-graph-tag]");if(m instanceof HTMLElement&&m.dataset.graphTag){ue(m.dataset.graphTag);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let h=s.closest("[data-graph-labels]");if(h instanceof HTMLButtonElement){i.allLabels=!i.allLabels,h.setAttribute("aria-pressed",i.allLabels?"true":"false");let p=h.dataset.labelShow??"Labels",k=h.dataset.labelHide??"Labels",v=h.querySelector("[data-graph-labels-text]");v&&(v.textContent=i.allLabels?k:p),a();return}if(s.closest("[data-graph-theme]")){let p=D()?"light":"dark";document.documentElement.setAttribute("saved-theme",p),localStorage.setItem("theme",p),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${p}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:p}}));return}let f=s.closest("[data-graph-tags-toggle]");if(f instanceof HTMLButtonElement){let p=o.root.querySelector(".graph-landing__tags");if(p instanceof HTMLElement){let k=p.dataset.open==="true";p.dataset.open=k?"false":"true",f.setAttribute("aria-expanded",k?"false":"true")}}};o.root.addEventListener("click",me),window.addCleanup(()=>o.root.removeEventListener("click",me))}async function Vn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let t=e.querySelector("#graph-landing-mount");if(!(t instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let r=e.querySelector("[data-graph-counts]"),o=e.dataset.locale??"ko",l=e.dataset.sourceLocale??"ko",i=(e.dataset.localePrefixes??"").split(",").map(w=>w.trim()).filter(w=>w.length>0),u=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",b=!1,T=null,S={current:Ae()},N=()=>{b=!0,T&&(T._destructor(),T=null),delete e.dataset.graphReady};window.addCleanup(N);let C;try{C=Pe(await fetchData)}catch(w){throw xe(t,"Graph could not load content index."),w}if(b)return;let A=Ln(pn(C),{localeId:o,sourceLocale:l,prefixes:i});r&&(r.textContent=u.replace("{n}",String(A.nodes.length)).replace("{m}",String(A.links.length)));let x=Cn(),_;try{_=await An(x)}catch(w){throw xe(t,"Graph could not load. Check your network connection."),w}if(b)return;let R=null,I=null,H=null;if(x){try{R=(await import(je)).default??null}catch(w){console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",w),R=null}try{H=await import(Ke)}catch(w){console.error("[graph-landing] three unavailable; using default node spheres",w),H=null}try{let w=await import(Ye);I=w.UnrealBloomPass?new w.UnrealBloomPass:null}catch(w){console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",w),I=null}}if(!b&&(t.replaceChildren(),T=_(t),t.__graphLanding=T,t.__graphData=A,$n(T,A,S,{use3d:x,root:e,spriteText:R,bloomPass:I,three:H}),x&&!F())){let w=()=>{!T||typeof T.controls!="function"||(T.controls().autoRotate=!1)};t.addEventListener("pointerdown",w,{once:!0}),window.addCleanup(()=>t.removeEventListener("pointerdown",w))}}var Un="preferred-locale";document.addEventListener("click",e=>{let t=e.target;if(!(t instanceof Element))return;let r=t.closest("a[data-preferred-locale]");if(!(r instanceof HTMLAnchorElement))return;let o=r.dataset.preferredLocale;if(o)try{localStorage.setItem(Un,o)}catch(l){console.error("[graph-landing] failed to persist preferred-locale",l)}});document.addEventListener("nav",()=>{Vn()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = ".center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.graph-landing__hero {\n  background: var(--light);\n  height: 100dvh;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(6px);\n  background: color-mix(in srgb, var(--light) 82%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 0 0 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 0;\n  max-width: 240px;\n  padding: 16px;\n  pointer-events: auto;\n  position: absolute;\n  top: 0;\n  width: 240px;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  max-width: min(28rem, 100% - 16rem);\n  padding: 1.25rem 1.5rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  box-shadow: inset 0 -2px 0 0 var(--secondary);\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  max-height: 28vh;\n  overflow: auto;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__spacing {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__pills {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  display: inline-flex;\n  overflow: hidden;\n  width: fit-content;\n}\n\n.graph-landing__pill {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.2;\n  min-height: 32px;\n  padding: 6px 10px;\n}\n\n.graph-landing__pill:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__pill:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: -2px;\n  z-index: 1;\n}\n\n.graph-landing__pill[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, transparent);\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__ghosts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.graph-landing__ghost {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  gap: 6px;\n  line-height: 1.2;\n  min-height: 32px;\n  padding: 6px 8px;\n}\n\n.graph-landing__ghost svg {\n  flex-shrink: 0;\n}\n\n.graph-landing__ghost:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__ghost:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__ghost[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 82%, transparent);\n  border-color: var(--lightgray);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__rail {\n    border-radius: 0;\n    max-width: 100%;\n    padding: 8px 12px;\n    width: 100%;\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__section-label--tags {\n    display: none;\n  }\n  .graph-landing__filters-toggle {\n    display: inline-flex;\n    min-height: 44px;\n    padding: 8px;\n  }\n  .graph-landing__tag-list {\n    display: none;\n    max-height: 28vh;\n  }\n  .graph-landing__tags[data-open=true] .graph-landing__tag-list {\n    display: flex;\n  }\n  .graph-landing__utils {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .graph-landing__top-right {\n    max-width: calc(100% - 1.5rem);\n    padding: 0.75rem 1rem;\n  }\n}";
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
      countsTemplate: "{n} \uB178\uB4DC \xB7 {m} \uC5E3\uC9C0",
      lensAll: "\uC804\uCCB4",
      lensTag: "\uD0DC\uADF8\uBCC4",
      lensFolder: "\uD3F4\uB354\uBCC4",
      lensHub: "\uD5C8\uBE0C",
      spacing: "\uB178\uB4DC \uAC04\uACA9",
      spacingTight: "\uC881\uAC8C",
      spacingNormal: "\uBCF4\uD1B5",
      spacingWide: "\uB113\uAC8C",
      articles: "Writing",
      about: "About",
      themeToggle: "\uB77C\uC774\uD2B8/\uB2E4\uD06C \uBAA8\uB4DC \uC804\uD658",
      filtersToggle: "\uD544\uD130",
      folderRoot: "\uB8E8\uD2B8",
      previewHint: "\uD074\uB9AD\uD558\uBA74 \uBCF8\uBB38\uC774 \uC5F4\uB9BD\uB2C8\uB2E4",
      previewTagTemplate: "{n}\uAC1C \uB178\uD2B8"
    };
  }
  return {
    labelsShow: "Show labels",
    labelsHide: "Hide labels",
    relayout: "Re-layout",
    notes: "Notes",
    tags: "Tags",
    countsTemplate: "{n} nodes \xB7 {m} edges",
    lensAll: "All",
    lensTag: "Tags",
    lensFolder: "Folders",
    lensHub: "Hubs",
    spacing: "Spacing",
    spacingTight: "Tight",
    spacingNormal: "Mid",
    spacingWide: "Wide",
    articles: "Writing",
    about: "About",
    themeToggle: "Toggle light / dark mode",
    filtersToggle: "Filters",
    folderRoot: "Root",
    previewHint: "Click to open the note",
    previewTagTemplate: "{n} notes"
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
    return /* @__PURE__ */ u2(
      "div",
      {
        class: "graph-landing",
        "data-locale": localeId,
        "data-source-locale": sourceLocale,
        "data-locale-prefixes": localePrefixes,
        "data-counts-template": copy.countsTemplate,
        "data-folder-root-label": copy.folderRoot,
        "data-legend-notes": copy.notes,
        "data-legend-tags": copy.tags,
        "data-preview-tag-template": copy.previewTagTemplate,
        children: /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
          /* @__PURE__ */ u2("div", { class: "graph-landing__canvas", id: "graph-landing-mount" }),
          /* @__PURE__ */ u2("div", { class: "graph-landing__overlay", children: [
            /* @__PURE__ */ u2("div", { class: "graph-landing__rail", children: [
              /* @__PURE__ */ u2("div", { class: "graph-landing__title-block", children: [
                /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: "Beomsu Koh" }),
                /* @__PURE__ */ u2("p", { class: "graph-landing__counts", "data-graph-counts": true, children: copy.countsTemplate.replace("{n}", "\u2013").replace("{m}", "\u2013") })
              ] }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__lenses", role: "tablist", "aria-label": "Graph lens", children: [
                /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "all", "aria-pressed": "true", children: copy.lensAll }),
                /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "tag", "aria-pressed": "false", children: copy.lensTag }),
                /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "folder", "aria-pressed": "false", children: copy.lensFolder }),
                /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__chip", "data-graph-lens": "hub", "aria-pressed": "false", children: copy.lensHub })
              ] }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__tags", children: [
                /* @__PURE__ */ u2("p", { class: "graph-landing__section-label graph-landing__section-label--tags", children: copy.tags }),
                /* @__PURE__ */ u2(
                  "button",
                  {
                    type: "button",
                    class: "graph-landing__filters-toggle",
                    "data-graph-tags-toggle": true,
                    "aria-expanded": "false",
                    children: copy.filtersToggle
                  }
                ),
                /* @__PURE__ */ u2("ul", { class: "graph-landing__tag-list", "data-graph-tags": true })
              ] }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__utils", children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__spacing", "data-graph-spacing-group": true, children: [
                  /* @__PURE__ */ u2("p", { class: "graph-landing__section-label", children: copy.spacing }),
                  /* @__PURE__ */ u2("div", { class: "graph-landing__pills", children: [
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__pill",
                        "data-graph-spacing": "tight",
                        "aria-pressed": "false",
                        children: copy.spacingTight
                      }
                    ),
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__pill",
                        "data-graph-spacing": "normal",
                        "aria-pressed": "true",
                        children: copy.spacingNormal
                      }
                    ),
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        class: "graph-landing__pill",
                        "data-graph-spacing": "wide",
                        "aria-pressed": "false",
                        children: copy.spacingWide
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ u2("div", { class: "graph-landing__ghosts", children: [
                  /* @__PURE__ */ u2("button", { type: "button", class: "graph-landing__ghost", "data-graph-relayout": true, children: [
                    /* @__PURE__ */ u2("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: [
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
                    ] }),
                    /* @__PURE__ */ u2("span", { children: copy.relayout })
                  ] }),
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__ghost",
                      "data-graph-labels": true,
                      "data-label-show": copy.labelsShow,
                      "data-label-hide": copy.labelsHide,
                      "aria-pressed": "false",
                      children: [
                        /* @__PURE__ */ u2("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ u2(
                          "path",
                          {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.4",
                            "stroke-linecap": "round",
                            d: "M3 12.5 6.6 3.5h2.8L13 12.5M4.6 9.2h6.8"
                          }
                        ) }),
                        /* @__PURE__ */ u2("span", { "data-graph-labels-text": true, children: copy.labelsShow })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ u2("div", { class: "graph-landing__legend", "data-graph-legend": true, children: [
                  /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                    /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--note", "aria-hidden": "true" }),
                    copy.notes
                  ] }),
                  /* @__PURE__ */ u2("span", { class: "graph-landing__legend-item", children: [
                    /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--tag", "aria-hidden": "true" }),
                    copy.tags
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u2("nav", { class: "graph-landing__top-right", "aria-label": "Site", children: [
              /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: "/articles/", children: copy.articles }),
              /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: "/about", children: copy.about }),
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
            ] }),
            /* @__PURE__ */ u2("aside", { class: "graph-landing__preview", "data-graph-preview": true, hidden: true, "aria-live": "polite", children: [
              /* @__PURE__ */ u2("p", { class: "graph-landing__preview-chip", "data-graph-preview-chip": true }),
              /* @__PURE__ */ u2("p", { class: "graph-landing__preview-title", "data-graph-preview-title": true }),
              /* @__PURE__ */ u2("p", { class: "graph-landing__preview-excerpt", "data-graph-preview-excerpt": true }),
              /* @__PURE__ */ u2("p", { class: "graph-landing__preview-hint", children: copy.previewHint })
            ] })
          ] })
        ] })
      }
    );
  };
  GraphLanding.css = graph_landing_default;
  GraphLanding.afterDOMLoaded = graph_landing_inline_default;
  return GraphLanding;
});

// src/pageType.ts
var graphPageMatcher = ({ slug, fileData }) => {
  if (slug === "index") {
    return false;
  }
  const frontmatter = fileData.frontmatter;
  return frontmatter?.translationKey === "graph";
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