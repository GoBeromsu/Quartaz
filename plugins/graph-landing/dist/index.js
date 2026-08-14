// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var ke="0.179.1",Ct="https://esm.sh/force-graph@1.51.4",xt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${ke}`,Mt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${ke}`,Nt=`https://esm.sh/three@${ke}`,Pt=`https://esm.sh/three@${ke}/examples/jsm/postprocessing/UnrealBloomPass.js`,_t=8,It=14;var te=1,Ce=3.5,Gt=.05,At=2.6,Ht=1,Ue=1,Z=.18,ct="graph-landing:lens",ut="graph-landing:tune",Dt=.18,Rt=1.4,Ot=1.25,Ft=1.15,zt=.55,J={x:330,y:235,z:565},Ve={x:0,y:0,z:0},qe=1.3,Bt=3.2,Ke=1.05,We=.32,je=.28,$t={wikilink:.3,tag:.22,cooc:.16,folder:.16},Ye="#a8b0c2",Xe={min:80,max:200},Ze={min:40,max:110},Je={min:160,max:280},Qe={min:90,max:170},et=220,tt=2,Ut=.15,Vt=.8,qt=350,xe={min:-100,max:-190},Me={min:72,max:116},Ne={min:130,max:260};function Kt(e){return ye(e-.5,0,1)}function _e(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function nt(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Wt(e){let r=[];for(let o of Object.values(e)){let n=_e(o),d=typeof n.slug=="string"?n.slug:"";if(d.length===0)continue;let i=n.multilingual,f=i&&typeof i=="object"?i:void 0;r.push({slug:d,title:typeof n.title=="string"?n.title:d,links:nt(n.links),tags:nt(n.tags),content:typeof n.content=="string"?n.content:"",multilingual:f})}return r}function jt(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=et?r:`${r.slice(0,et).trimEnd()}\\u2026`}function re(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function rt(e){return re(e)/(2*Math.PI)}function he(e,r,o){let n=re(e),d=Math.acos(2*rt(`${e}:phi`)-1),i=r+(o-r)*rt(`${e}:r`);return{x:i*Math.sin(d)*Math.cos(n),y:i*Math.sin(d)*Math.sin(n),z:i*Math.cos(d)}}function dt(e){return e==="index"||e.endsWith("/index")}function gt(e){return e==="tags"||e.startsWith("tags/")}function Yt(e){let r=e.multilingual?.translationKey;return r==="home"||r==="graph"}function Xt(e,r){return e.multilingual?.locale?e.multilingual.locale===r.localeId:e.slug.startsWith(`${r.localeId}/`)?!0:!r.prefixes.some(n=>e.slug.startsWith(`${n}/`))&&r.localeId===r.sourceLocale}function ye(e,r,o){return Math.min(o,Math.max(r,e))}function ot(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function ft(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Te(e){return ft(e).trim().toLowerCase()}function Zt(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Jt(e){let r=e.trim();return r.length===0||Zt(r)||gt(r)||dt(r)?!0:Te(r).length===0}function Qt(e){return ft(e).replace(/-/g," ")}function en(e){let r=new Map,o=new Map;for(let n of e){let d=Te(n.slug);d.length>0&&!r.has(d)&&r.set(d,n.slug);let i=n.title.trim().toLowerCase();i.length>0&&!o.has(i)&&o.set(i,n.slug);let f=i.replace(/\\s+/g,"-");f.length>0&&!o.has(f)&&o.set(f,n.slug)}return{byBasename:r,byTitle:o}}function tn(e,r,o){if(r.has(e))return e;let n=Te(e),d=o.byBasename.get(n);if(d)return d;let i=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return i||null}function nn(e,r){return e.length===0?"":[...e].sort((n,d)=>(r.get(d)??0)-(r.get(n)??0))[0]??""}function rn(e,r){let o=e.filter(a=>dt(a.slug)||gt(a.slug)||Yt(a)?!1:Xt(a,r)),n=new Set(o.map(a=>a.slug)),d=en(o),i=new Map,f=new Map,T=[],y=new Set,v=new Map,O=a=>{f.set(a,(f.get(a)??0)+1)},S=(a,g,m)=>a<g?`${a}|${g}|${m}`:`${g}|${a}|${m}`,x=(a,g,m,L)=>{let I=S(a,g,m);y.has(I)||(y.add(I),T.push({source:a,target:g,kind:m}),L&&(O(a),O(g)))};for(let a of o)for(let g of a.links){if(Jt(g))continue;let m=tn(g,n,d);if(m!==null){m!==a.slug&&x(a.slug,m,"wikilink",!0);continue}let L=`mention:${Te(g)}`;i.has(L)||i.set(L,Qt(g)),x(a.slug,L,"wikilink",!0)}let D=new Set,M=new Map;for(let a of o)for(let g of a.tags){v.set(g,(v.get(g)??0)+1);let m=`tag:${g}`;D.add(m),x(a.slug,m,"tag",!0);let L=M.get(g)??[];L.push(a.slug),M.set(g,L)}for(let a of o)if(!(a.tags.length<2))for(let g=0;g<a.tags.length;g+=1)for(let m=g+1;m<a.tags.length;m+=1)x(`tag:${a.tags[g]}`,`tag:${a.tags[m]}`,"cooc",!1);let F=new Map;for(let a of o){let g=ot(a.slug);if(g==="root")continue;let m=F.get(g)??[];m.push(a.slug),F.set(g,m)}for(let a of F.values()){if(a.length<2)continue;let g=[...a].sort();for(let m=0;m<g.length;m+=1){let L=g[(m+1)%g.length],I=g[(m+tt)%g.length],E=g[m];E===void 0||L===void 0||(E!==L&&!y.has(S(E,L,"wikilink"))&&x(E,L,"folder",!1),g.length>tt+1&&I!==void 0&&E!==I&&!y.has(S(E,I,"wikilink"))&&x(E,I,"folder",!1))}}let N=[...f.values()],A=N.length>0?Math.min(...N):0,$=N.length>0?Math.max(...N):0,H=a=>{let g=f.get(a)??0,m=Math.sqrt(g),L=Math.sqrt(A),E=Math.sqrt($)-L;return E===0?(te+Ce)/2:te+(m-L)/E*(Ce-te)},q=[...o].sort((a,g)=>(f.get(g.slug)??0)-(f.get(a.slug)??0)),z=new Set(q.filter(a=>(f.get(a.slug)??0)>0).slice(0,_t).map(a=>a.slug)),R=o.map(a=>{let g=z.has(a.slug),m=g?he(a.slug,Ze.min,Ze.max):he(a.slug,Xe.min,Xe.max);return{id:a.slug,name:a.title,type:"note",val:H(a.slug),degree:f.get(a.slug)??0,isHub:g,tag:"",slug:a.slug,folder:ot(a.slug),tags:a.tags,dominantTag:nn(a.tags,v),excerpt:jt(a.content),phase:re(a.slug),x:m.x,y:m.y,z:m.z}});for(let[a,g]of i){let m=he(a,Je.min,Je.max);R.push({id:a,name:g,type:"mention",val:H(a)*zt,degree:f.get(a)??0,isHub:!1,tag:"",slug:"",folder:"",tags:[],dominantTag:"",excerpt:"",phase:re(a),x:m.x,y:m.y,z:m.z})}for(let a of D){let g=a.slice(4),m=he(a,Qe.min,Qe.max);R.push({id:a,name:g,type:"tag",val:ye(H(a)*.7,te,Ce),degree:f.get(a)??0,isHub:!1,tag:g,slug:`tags/${g}`,folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:re(a),x:m.x,y:m.y,z:m.z})}return{nodes:R,links:T}}function on(e){let r=new Map,o=(n,d)=>{let i=r.get(n)??new Set;i.add(d),r.set(n,i)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag")continue;let d=_(n.source),i=_(n.target);o(d,i),o(i,d)}return r}function _(e){return typeof e=="string"?e:e.id}function Q(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function mt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Q("--light","#ffffff"),ink:Q("--darkgray","#0f0f0f"),accent:Q("--secondary","#a52142"),tertiary:Q("--tertiary","#c75b75"),gray:Q("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function oe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function sn(){return window.matchMedia("(pointer: fine)").matches}function an(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function ln(){return sn()&&an()&&window.innerWidth>700&&!oe()}function G(){return document.documentElement.getAttribute("saved-theme")==="dark"}function we(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function ee(e,r){let o=we(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function ne(e,r,o){let n=we(e),d=we(r);if(!n||!d)return e;let i=(f,T)=>Math.round(f+(T-f)*o);return`rgb(${i(n.r,d.r)}, ${i(n.g,d.g)}, ${i(n.b,d.b)})`}function pt(e){return G()?ne(e.bg,"#05070f",.88):e.bg}function cn(e){let r=we(e);if(!r)return e;let o=n=>{let d=n/255,i=d<=.04045?d/12.92:Math.pow((d+.055)/1.055,2.4);return Math.round(i*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function un(e){return cn(pt(e))}function ht(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function st(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:ht(e,[r.accent,r.tertiary,r.ink,r.gray])}function dn(e,r){return e.length===0?r.ink:ht(e,[r.accent,r.tertiary])}function bt(e){let r=e.split("/").map(i=>encodeURIComponent(i)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let d=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(d,window.location.origin)}function gn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let r=bt(e);window.location.assign(r.toString())}function fn(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function at(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function mn(e){let o=await import(e?xt:Ct);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):fn(o)}function pn(){try{let e=sessionStorage.getItem(ct);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function hn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let r=sessionStorage.getItem(ut);if(!r)return e;let o=_e(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,d=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,i=typeof o.zoom=="number"?o.zoom:e.zoom,f=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:n,edgeScale:d,zoom:i,spread:f}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function be(e){try{sessionStorage.setItem(ut,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function Pe(e){try{sessionStorage.setItem(ct,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function bn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function yn(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function wn(e,r){return e.type==="note"&&e.folder===r}function it(e,r){let o=_(r),n=e.find(d=>d.id===o);return!n||n.type!=="note"?null:n.folder}function kn(e,r,o){let n=new Map;if(r==="folder"){let d=[...new Set(e.nodes.filter(i=>i.type==="note").map(i=>i.folder))];return d.forEach((i,f)=>{let T=Math.PI*2*f/Math.max(d.length,1),y={x:Math.cos(T)*o,y:Math.sin(T)*o,z:0};for(let v of e.nodes)v.type==="note"&&v.folder===i&&n.set(v.id,y)}),n}if(r==="tag"){let d=e.nodes.filter(f=>f.type==="tag"),i=new Map;d.forEach((f,T)=>{let y=Math.PI*2*T/Math.max(d.length,1);i.set(f.tag,{x:Math.cos(y)*o,y:Math.sin(y)*o,z:0})});for(let f of e.nodes)if(f.type==="tag"){let T=i.get(f.tag);T&&n.set(f.id,T)}else if(f.dominantTag.length>0){let T=i.get(f.dominantTag);T&&n.set(f.id,T)}}return n}function Tn(e,r){let o=[],n=d=>{let i=r*d;for(let f of o){let T=e(f);T&&(f.vx=(f.vx??0)+(T.x-(f.x??0))*i,f.vy=(f.vy??0)+(T.y-(f.y??0))*i,f.vz=(f.vz??0)+(T.z-(f.z??0))*i)}};return n.initialize=d=>{o=d},n}function lt(e,r,o,n){for(let d of e.querySelectorAll(r)){if(!(d instanceof HTMLElement))continue;let i=d.getAttribute(n);d.setAttribute("aria-pressed",i===o?"true":"false")}}function En(e,r,o,n){let d=on(r.links),i={lens:pn(),allLabels:!1,focusTag:null,focusFolder:null},f=null,T=null,y=hn(),v=()=>T??f,O=new Set(r.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,It).map(t=>t.id)),S=t=>{let s=t.val;return t.isHub&&(s*=Rt),i.lens==="tag"&&t.type==="tag"&&(s*=Ot),i.focusTag&&t.id===`tag:${i.focusTag}`&&(s*=Ft),s},x=t=>{let s=v();return i.allLabels||s===t.id||s!==null&&(d.get(s)?.has(t.id)??!1)?!0:O.has(t.id)},D=t=>{let s=ye((S(t)-te)/5,0,1);return(qe+s*(Bt-qe))*y.nodeScale},M=t=>{let s=v();if(s!==null)return s===t||(d.get(s)?.has(t)??!1);if(i.focusTag===null&&i.focusFolder===null)return!0;let c=r.nodes.find(l=>l.id===t);return c?i.focusFolder!==null?wn(c,i.focusFolder):i.focusTag!==null&&yn(c,i.focusTag):!1},F=t=>t.type==="mention"?o.current.gray:i.lens==="tag"?t.type==="tag"?o.current.tertiary:dn(t.dominantTag,o.current):i.lens==="folder"?t.type==="tag"?o.current.tertiary:st(t.folder,o.current):i.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,N=t=>{let s=v();if(s!==null&&(s===t.id||(d.get(s)?.has(t.id)??!1)))return o.current.accent;let c=F(t);return M(t.id)?G()?t.type==="mention"?c:t.type==="tag"?ne(o.current.tertiary,"#ffffff",.22):t.isHub?ne("#fff3e4",o.current.accent,.1):ne("#ffffff",o.current.accent,.12):c:ee(c,Z)},A=t=>{let s=G();return t==="wikilink"?.34:t==="tag"?s?.22:.2:s?.12:.11},$=t=>{let s=_(t.source),c=_(t.target),l=v();return l!==null&&(s===l||c===l)?G()?.72:.62:(l!==null||i.focusTag!==null||i.focusFolder!==null)&&(!M(s)||!M(c))?A(t.kind)*Z:A(t.kind)},H=t=>{let s=_(t.source),c=_(t.target),l=v();return l!==null&&(s===l||c===l)?ne(o.current.accent,Ye,.45):G()?Ye:o.current.gray},q=t=>ee(H(t),$(t)),z=()=>r,R=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(J.x,J.y,J.z),c=s/ye(y.zoom,.4,2.5),l=e.cameraPosition(),u=J,p=s;if(l&&typeof l.x=="number"&&typeof l.y=="number"&&typeof l.z=="number"){let h=Math.hypot(l.x,l.y,l.z);h>1&&(u={x:l.x,y:l.y,z:l.z},p=h)}let b=c/p;e.cameraPosition({x:u.x*b,y:u.y*b,z:u.z*b},Ve,t);return}typeof e.zoom=="function"&&e.zoom(y.zoom,t)},a=()=>{let t=Kt(y.spread),s=xe.min+t*(xe.max-xe.min),c=Me.min+t*(Me.max-Me.min),l=e.d3Force("charge");l?.strength&&l.strength(s);let u=e.d3Force("link");u?.distance&&u.distance(k=>i.lens==="tag"&&k.kind==="tag"?c*.72:c),u?.strength&&u.strength(k=>{if(k.kind==="cooc"||k.kind==="folder")return .04;if(i.lens==="tag"&&k.kind==="tag")return .95;if(i.lens==="folder"){let C=it(r.nodes,k.source),P=it(r.nodes,k.target);if(C!==null&&C===P)return .72}return k.kind==="tag"?.65:.8});let p=e.d3Force("center");p?.strength&&p.strength(Gt);let b=Ne.min+t*(Ne.max-Ne.min),h=kn(r,i.lens,b),w=i.lens==="folder"||i.lens==="tag"?.08:0;e.d3Force("cluster",Tn(k=>h.get(k.id)??null,w)),n.use3d&&e.d3Force("flattenZ",null)},g=new Map,m=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,s=n.three;g.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(c=>{let l=D(c),u=N(c),p=!1;if(s)if(G()){let k=c.isHub?1.35:1.1,C=new s.MeshLambertMaterial({color:u,emissive:u,emissiveIntensity:k});g.set(c.id,{material:C,base:k,phase:c.phase}),p=new s.Mesh(new s.SphereGeometry(l,14,14),C)}else p=new s.Mesh(new s.SphereGeometry(l,14,14),new s.MeshBasicMaterial({color:u}));if(!x(c)||!t)return p;let b=new t(c.name),h=G()?"rgba(255, 255, 255, 0.85)":o.current.ink;if(b.color=M(c.id)?h:ee(h,Z),b.fontWeight="400",b.strokeWidth=0,b.textHeight=O.has(c.id)?6.5:5.5,b.center.set(0,.5),b.position.x=l+2,b.position.y=0,!s||p===!1)return b;let w=new s.Group;return w.add(p),w.add(b),w})},L=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(c=>{let l=$t[c.kind]*y.edgeScale,u=new t.MeshBasicMaterial({color:H(c),transparent:!0,opacity:$(c),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(l,l,1,5),u)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((c,l)=>{let u=l.end.x-l.start.x,p=l.end.y-l.start.y,b=l.end.z-l.start.z,h=Math.sqrt(u*u+p*p+b*b);return c.position.x=(l.start.x+l.end.x)/2,c.position.y=(l.start.y+l.end.y)/2,c.position.z=(l.start.z+l.end.z)/2,c.scale.x=1,c.scale.y=Math.max(h,.01),c.scale.z=1,c.quaternion.setFromUnitVectors(s,new t.Vector3(u,p,b).normalize()),!0})},I=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=v();if(s===null)return 0;let c=_(t.source),l=_(t.target);return c===s||l===s?2:0})},E=()=>{e.nodeVal(S),e.nodeColor(N),e.linkColor(q),e.linkWidth(t=>{let s=_(t.source),c=_(t.target),l=v(),u=y.edgeScale;return l!==null&&(s===l||c===l)?.7*u:t.kind==="wikilink"?.5*u:(t.kind==="tag"?.35:.25)*u}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ue),I(),L(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},Ee=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(p,b)=>{let h=document.createElement("span");h.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=p;let k=document.createElement("span");return k.textContent=b,h.append(w,k),h},c=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",u=n.root.dataset.legendMentions??"Mentions";t.replaceChildren(s(o.current.ink,c),s(o.current.tertiary,l),s(o.current.gray,u))},Ie=t=>{let s=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[t.dataset.key]=t.dataset.value,c.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let p=document.createElement("span");p.className="graph-landing__dot",p.style.background=t.dotColor,l.append(p)}l.append(document.createTextNode(t.label));let u=document.createElement("span");return u.className="graph-landing__tag-count",u.textContent=String(t.count),c.append(l,u),s.append(c),s},Ge=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=n.root.querySelector("[data-graph-facet-label]"),c=n.root.querySelector(".graph-landing__tags");if(i.lens==="folder"){let u=n.root.dataset.folderRootLabel??"root",p=new Map;for(let h of r.nodes)h.type==="note"&&p.set(h.folder,(p.get(h.folder)??0)+1);let b=[...p.entries()].sort((h,w)=>w[1]-h[1]);s instanceof HTMLElement&&(s.textContent=n.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=b.length===0),t.replaceChildren(...b.map(([h,w])=>Ie({dataset:{key:"graphFolder",value:h},pressed:i.focusFolder===h,dotColor:st(h,o.current),label:h==="root"?u:h,count:w})));return}let l=r.nodes.filter(u=>u.type==="tag").sort((u,p)=>p.degree-u.degree).slice(0,16);s instanceof HTMLElement&&(s.textContent=n.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=l.length===0),t.replaceChildren(...l.map(u=>Ie({dataset:{key:"graphTag",value:u.tag},pressed:i.focusTag===u.tag,dotColor:null,label:u.tag,count:u.degree})))},se=()=>{e.graphData(z()),a(),E(),m(),Ee(),Ge(),lt(n.root,"[data-graph-lens]",i.lens,"data-graph-lens"),e.d3ReheatSimulation()},yt=t=>{i.lens=t,t!=="tag"&&(i.focusTag=null),t!=="folder"&&(i.focusFolder=null),Pe(t),se()},wt=t=>{i.focusTag=i.focusTag===t?null:t,i.focusFolder=null,i.focusTag&&(i.lens="tag",Pe("tag")),se()},kt=t=>{i.focusFolder=i.focusFolder===t?null:t,i.focusTag=null,i.focusFolder&&(i.lens="folder",Pe("folder")),se()},Ae=()=>n.use3d?un(o.current):pt(o.current);e.graphData(z()),e.backgroundColor(Ae()),e.nodeLabel(t=>t.name),e.nodeRelSize(At),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Ht),typeof e.linkOpacity=="function"&&e.linkOpacity(Ue),a(),E();let U=n.root.querySelector("[data-graph-preview]"),ae=n.root.querySelector("[data-graph-preview-chip]"),ie=n.root.querySelector("[data-graph-preview-title]"),le=n.root.querySelector("[data-graph-preview-excerpt]"),ce=0;window.addCleanup(()=>window.clearTimeout(ce));let Tt=t=>{if(!(U instanceof HTMLElement)||!(ae instanceof HTMLElement)||!(ie instanceof HTMLElement)||!(le instanceof HTMLElement))return;window.clearTimeout(ce);let s=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendMentions??"Mentions";if(t.type==="tag"){let u=n.root.dataset.previewTagTemplate??"{n} notes";ae.textContent=c,ie.textContent=`#${t.tag}`,le.textContent=u.replace("{n}",String(t.degree))}else t.type==="mention"?(ae.textContent=l,ie.textContent=t.name,le.textContent=n.root.dataset.previewMention??"Mentioned, not published yet"):(ae.textContent=s,ie.textContent=t.name,le.textContent=t.excerpt);U.hidden=!1,U.dataset.visible="true"},He=()=>{U instanceof HTMLElement&&(window.clearTimeout(ce),ce=window.setTimeout(()=>{U.dataset.visible="false",U.hidden=!0},qt))};if(e.onNodeHover(t=>{f=t?t.id:null,T===null&&(t?Tt(t):He()),E(),n.use3d&&m()}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!oe()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=Dt;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),n.bloomPass&&typeof e.postProcessingComposer=="function"&&(n.bloomPass.strength=G()?Ke:0,n.bloomPass.radius=We,n.bloomPass.threshold=je,e.postProcessingComposer().addPass(n.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(J,Ve),y.zoom!==1&&R(0)),m(),!oe()){let t=0,s=()=>{let c=performance.now()/1e3*Vt;for(let l of g.values())l.material.emissiveIntensity=l.base*(1+Ut*Math.sin(c+l.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,c)=>{let l=D(t),u=t.x??0,p=t.y??0;if(s.save(),s.beginPath(),s.arc(u,p,l,0,Math.PI*2),s.fillStyle=N(t),s.fill(),t.isHub&&(s.strokeStyle=M(t.id)?o.current.accent:ee(o.current.accent,Z),s.lineWidth=1.2/c,s.stroke()),x(t)){let b=11.5/c;s.font=`${b}px ${o.current.font}`,s.fillStyle=M(t.id)?o.current.ink:ee(o.current.ink,Z),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,u,p-l-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,c)=>{let l=D(t)+8;c.beginPath(),c.arc(t.x??0,t.y??0,l,0,Math.PI*2),c.fillStyle=s,c.fill()});let ue=n.root.querySelector("[data-graph-inspect]"),de=n.root.querySelector("[data-graph-inspect-chip]"),ge=n.root.querySelector("[data-graph-inspect-title]"),fe=n.root.querySelector("[data-graph-inspect-excerpt]"),Le=n.root.querySelector("[data-graph-inspect-tags]"),ve=n.root.querySelector("[data-graph-inspect-connected]"),K=n.root.querySelector("[data-graph-inspect-open]"),me=t=>{n.root.dataset.railOpen=t?"true":"false";let s=n.root.querySelector("[data-graph-rail-toggle]"),c=n.root.querySelector("[data-graph-rail-scrim]");s instanceof HTMLButtonElement&&s.setAttribute("aria-expanded",t?"true":"false"),c instanceof HTMLElement&&(c.hidden=!t)},De=t=>{oe()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Et=t=>{let s=d.get(t.id)??new Set,c=[];for(let l of s){let u=r.nodes.find(p=>p.id===l);u&&c.push(u)}return c.sort((l,u)=>u.degree-l.degree)},Lt=t=>{if(!(ue instanceof HTMLElement)||!(de instanceof HTMLElement)||!(ge instanceof HTMLElement)||!(fe instanceof HTMLElement)||!(Le instanceof HTMLElement)||!(ve instanceof HTMLElement))return;let s=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendMentions??"Mentions",u=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(de.textContent=c,ge.textContent=`#${t.tag}`,fe.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="mention"?(de.textContent=l,ge.textContent=t.name,fe.textContent=n.root.dataset.previewMention??"Mentioned, not published yet"):(de.textContent=s,ge.textContent=t.name,fe.textContent=t.excerpt);let p=t.tags.map(h=>{let w=document.createElement("li");return w.textContent=h,w});Le.replaceChildren(...p),Le.hidden=p.length===0;let b=Et(t).slice(0,12);if(b.length===0){let h=document.createElement("li");h.className="graph-landing__inspect-empty",h.textContent=u,ve.replaceChildren(h)}else ve.replaceChildren(...b.map(h=>{let w=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=h.id;let C=h.type==="tag"?c:h.type==="mention"?l:s,P=document.createElement("span");P.textContent=C;let B=document.createElement("strong");return B.textContent=h.type==="tag"?`#${h.tag}`:h.name,k.append(P,B),w.append(k),w}));K instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(K.hidden=!1,K.href=bt(t.slug).toString()):(K.hidden=!0,K.removeAttribute("href"))),ue.hidden=!1,n.root.dataset.inspecting="true",me(!1),He()},pe=()=>{T=null,ue instanceof HTMLElement&&(ue.hidden=!0),n.root.dataset.inspecting="false",De(!0),E(),n.use3d&&m()},Re=t=>{if(T===t.id&&t.type==="note"&&t.slug.length>0){gn(t.slug);return}T=t.id,De(!1),Lt(t),E(),n.use3d&&m()},Oe=t=>{Re(t)},Se=!1;e.onNodeClick((t,s)=>{t&&(Se=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Oe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{pe()});let V=n.root.querySelector("#graph-landing-mount");if(V instanceof HTMLElement){let t=null,s=u=>{t={x:u.clientX,y:u.clientY}},c=(u,p)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=V.getBoundingClientRect(),h=u-b.left,w=p-b.top,k=null,C=4096;for(let P of z().nodes){if(P.x===void 0||P.y===void 0)continue;let B=e.graph2ScreenCoords(P.x,P.y,P.z??0),vt=(B.x-h)**2+(B.y-w)**2,St=(B.x-u)**2+(B.y-p)**2,$e=Math.min(vt,St);$e<C&&(C=$e,k=P)}return k},l=u=>{let p=t;t=null,!(!p||(u.clientX-p.x)**2+(u.clientY-p.y)**2>25)&&window.setTimeout(()=>{if(Se){Se=!1;return}let h=c(u.clientX,u.clientY);h?Oe(h):pe()},0)};V.addEventListener("pointerdown",s,!0),V.addEventListener("pointerup",l,!0),window.addCleanup(()=>{V.removeEventListener("pointerdown",s,!0),V.removeEventListener("pointerup",l,!0)})}lt(n.root,"[data-graph-lens]",i.lens,"data-graph-lens"),Ee(),Ge(),i.lens!=="all"&&se(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Fe=()=>{o.current=mt(),e.backgroundColor(Ae()),n.bloomPass&&(n.bloomPass.strength=G()?Ke:0,n.bloomPass.radius=We,n.bloomPass.threshold=je),E(),m(),Ee()};document.addEventListener("themechange",Fe),window.addCleanup(()=>document.removeEventListener("themechange",Fe));let ze=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){pe();return}if(s.closest("[data-graph-rail-toggle]")){me(n.root.dataset.railOpen!=="true");return}if(s.closest("[data-graph-rail-scrim]")){me(!1);return}let c=s.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let w=r.nodes.find(k=>k.id===c.dataset.graphInspectId);w&&Re(w);return}let l=s.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&bn(l.dataset.graphLens)){yt(l.dataset.graphLens);return}let u=s.closest("[data-graph-tag]");if(u instanceof HTMLElement&&u.dataset.graphTag){wt(u.dataset.graphTag);return}let p=s.closest("[data-graph-folder]");if(p instanceof HTMLElement&&p.dataset.graphFolder){kt(p.dataset.graphFolder);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let b=s.closest("[data-graph-labels]");if(b instanceof HTMLButtonElement){i.allLabels=!i.allLabels,b.setAttribute("aria-pressed",i.allLabels?"true":"false");let w=b.dataset.labelShow??"Labels",k=b.dataset.labelHide??"Labels",C=i.allLabels?k:w;b.title=C,b.setAttribute("aria-label",C),m();return}if(s.closest("[data-graph-theme]")){let w=G()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let h=s.closest("[data-graph-tags-toggle]");if(h instanceof HTMLButtonElement){let w=n.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let k=w.dataset.open==="true";w.dataset.open=k?"false":"true",h.setAttribute("aria-expanded",k?"false":"true")}}},W=n.root.querySelector("[data-graph-node-scale]"),j=n.root.querySelector("[data-graph-edge-scale]");if(W instanceof HTMLInputElement){W.value=String(Math.round(y.nodeScale*100));let t=()=>{y.nodeScale=Number(W.value)/100,be(y),E(),n.use3d&&m()};W.addEventListener("input",t),window.addCleanup(()=>W.removeEventListener("input",t))}if(j instanceof HTMLInputElement){j.value=String(Math.round(y.edgeScale*100));let t=()=>{y.edgeScale=Number(j.value)/100,be(y),E()};j.addEventListener("input",t),window.addCleanup(()=>j.removeEventListener("input",t))}let Y=n.root.querySelector("[data-graph-zoom]");if(Y instanceof HTMLInputElement){Y.value=String(Math.round(y.zoom*100));let t=()=>{y.zoom=Number(Y.value)/100,be(y),R(200)};Y.addEventListener("input",t),window.addCleanup(()=>Y.removeEventListener("input",t))}let X=n.root.querySelector("[data-graph-spread]");if(X instanceof HTMLInputElement){X.value=String(Math.round(y.spread*100));let t=()=>{y.spread=Number(X.value)/100,be(y),a(),e.d3ReheatSimulation()};X.addEventListener("input",t),window.addCleanup(()=>X.removeEventListener("input",t))}n.root.addEventListener("click",ze),window.addCleanup(()=>n.root.removeEventListener("click",ze));let Be=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){me(!1);return}pe()}};window.addEventListener("keydown",Be),window.addCleanup(()=>window.removeEventListener("keydown",Be))}async function Ln(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=e.querySelector("#graph-landing-mount");if(!(r instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),n=e.dataset.locale??"ko",d=e.dataset.sourceLocale??"ko",i=(e.dataset.localePrefixes??"").split(",").map(a=>a.trim()).filter(a=>a.length>0),f=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",T=!1,y=null,v={current:mt()},O=()=>{T=!0,y&&(y._destructor(),y=null),delete e.dataset.graphReady};window.addCleanup(O);let S=ln(),x=mn(S),D=S?import(Mt).then(a=>a.default??null).catch(a=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",a),null)):Promise.resolve(null),M=S?import(Nt).catch(a=>(console.error("[graph-landing] three unavailable; using default node spheres",a),null)):Promise.resolve(null),F=S?import(Pt).then(a=>a.UnrealBloomPass?new a.UnrealBloomPass:null).catch(a=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",a),null)):Promise.resolve(null);x.catch(()=>{});let N;try{N=_e(await fetchData)}catch(a){throw at(r,"Graph could not load content index."),a}if(T)return;let A=rn(Wt(N),{localeId:n,sourceLocale:d,prefixes:i}),$=f.replace("{n}",String(A.nodes.length)).replace("{m}",String(A.links.length));for(let a of o)a.textContent=$;let H;try{H=await x}catch(a){throw at(r,"Graph could not load. Check your network connection."),a}let[q,z,R]=await Promise.all([D,M,F]);if(!T&&(r.replaceChildren(),y=H(r),r.__graphLanding=y,r.__graphData=A,En(y,A,v,{use3d:S,root:e,spriteText:q,bloomPass:R,three:z}),S&&!oe())){let a=()=>{!y||typeof y.controls!="function"||(y.controls().autoRotate=!1)};r.addEventListener("pointerdown",a,{once:!0}),window.addCleanup(()=>r.removeEventListener("pointerdown",a))}}var vn="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(vn,n)}catch(d){console.error("[graph-landing] failed to persist preferred-locale",d)}});document.addEventListener("nav",()=>{Ln()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 32px);\n  max-width: 248px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: auto;\n  touch-action: pan-y;\n  position: absolute;\n  top: 16px;\n  width: 248px;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__title-block--chrome {\n  display: none;\n}\n\n.graph-landing__rail-toggle,\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--mention {\n  background: var(--gray);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--lightgray);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: color-mix(in srgb, var(--light) 78%, transparent);\n    border-bottom: 1px solid var(--lightgray);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--chrome {\n    display: flex;\n    flex: 1 1 auto;\n    min-width: 0;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 0 0 auto;\n    gap: 0.7rem;\n  }\n  .graph-landing__nav-link {\n    display: none;\n  }\n  .graph-landing__rail-toggle {\n    align-items: center;\n    background: transparent;\n    border: 0;\n    border-radius: 8px;\n    color: var(--dark);\n    cursor: pointer;\n    display: inline-flex;\n    flex: 0 0 auto;\n    height: 44px;\n    justify-content: center;\n    pointer-events: auto;\n    width: 44px;\n  }\n  .graph-landing__rail-toggle:focus-visible {\n    outline: 2px solid var(--secondary);\n    outline-offset: 2px;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    border-radius: 16px 16px 0 0;\n    bottom: 0;\n    box-shadow: 0 -12px 40px rgba(8, 10, 16, 0.22);\n    left: 0;\n    max-height: min(58dvh, 100dvh - 4.5rem);\n    max-width: none;\n    padding: 18px 14px max(14px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    transform: translateY(110%);\n    transition: transform 0.22s ease;\n    width: auto;\n    z-index: 4;\n  }\n  .graph-landing__rail::before {\n    background: var(--lightgray);\n    border-radius: 999px;\n    content: "";\n    height: 4px;\n    left: 50%;\n    position: absolute;\n    top: 8px;\n    transform: translateX(-50%);\n    width: 36px;\n  }\n  .graph-landing[data-rail-open=true] .graph-landing__rail {\n    transform: translateY(0);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: color-mix(in srgb, var(--light) 72%, transparent);\n    border-bottom-color: var(--lightgray);\n  }\n}';
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
      mentions: "\uC5B8\uAE09",
      previewMention: "\uC544\uC9C1 \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC740 \uC5B8\uAE09",
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
      folderRoot: "\uB8E8\uD2B8",
      previewHint: "\uD074\uB9AD\uD558\uBA74 \uC5F0\uACB0\uC774 \uC5F4\uB9BD\uB2C8\uB2E4",
      previewTagTemplate: "{n}\uAC1C \uB178\uD2B8",
      inspectOpen: "\uBCF8\uBB38 \uC77D\uAE30",
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
    mentions: "Mentions",
    previewMention: "Mentioned, not published yet",
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
    folderRoot: "Root",
    previewHint: "Click to inspect connections",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    folders: "Folders",
    tune: "Tune",
    nodeSize: "Node size",
    edgeWidth: "Edge width"
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
        "data-legend-mentions": copy.mentions,
        "data-legend-folders": copy.folders,
        "data-preview-tag-template": copy.previewTagTemplate,
        "data-preview-mention": copy.previewMention,
        "data-inspect-read": copy.inspectOpen,
        "data-inspect-connected": copy.inspectConnected,
        "data-inspect-empty": copy.inspectEmpty,
        children: [
          /* @__PURE__ */ u2("link", { rel: "preconnect", href: "https://esm.sh", crossOrigin: "anonymous" }),
          /* @__PURE__ */ u2("link", { rel: "dns-prefetch", href: "https://esm.sh" }),
          /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
            /* @__PURE__ */ u2("div", { class: "graph-landing__canvas", id: "graph-landing-mount" }),
            /* @__PURE__ */ u2("div", { class: "graph-landing__overlay", children: [
              /* @__PURE__ */ u2("div", { class: "graph-landing__chrome", children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__title-block graph-landing__title-block--chrome", children: [
                  /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: "Beomsu Koh" }),
                  /* @__PURE__ */ u2("p", { class: "graph-landing__counts", "data-graph-counts": true, children: copy.countsTemplate.replace("{n}", "\u2013").replace("{m}", "\u2013") })
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
                )
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
                "div",
                {
                  class: "graph-landing__rail",
                  id: "graph-landing-rail",
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
                          /* @__PURE__ */ u2("span", { class: "graph-landing__dot graph-landing__dot--mention", "aria-hidden": "true" }),
                          copy.mentions
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