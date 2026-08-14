// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var we="0.179.1",St="https://esm.sh/force-graph@1.51.4",Ct=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${we}`,xt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${we}`,Mt=`https://esm.sh/three@${we}`,Nt=`https://esm.sh/three@${we}/examples/jsm/postprocessing/UnrealBloomPass.js`,Pt=8,_t=14;var te=1,Se=3.5,It=.05,Gt=2.6,At=1,$e=1,Z=.18,ct="graph-landing:lens",lt="graph-landing:tune",Ht=.18,Dt=1.4,Rt=1.25,Ot=1.15,Ft=.55,J={x:330,y:235,z:565},Ue={x:0,y:0,z:0},Ve=1.3,zt=3.2,qe=1.05,Ke=.32,We=.28,Bt={wikilink:.3,tag:.22,cooc:.16,folder:.16},je="#a8b0c2",Ye={min:80,max:200},Xe={min:40,max:110},Ze={min:160,max:280},Je={min:90,max:170},Qe=220,et=2,$t=.15,Ut=.8,Vt=350,Ce={min:-100,max:-190},xe={min:72,max:116},Me={min:130,max:260};function qt(e){return be(e-.5,0,1)}function Pe(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function tt(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Kt(e){let n=[];for(let o of Object.values(e)){let r=Pe(o),d=typeof r.slug=="string"?r.slug:"";if(d.length===0)continue;let a=r.multilingual,f=a&&typeof a=="object"?a:void 0;n.push({slug:d,title:typeof r.title=="string"?r.title:d,links:tt(r.links),tags:tt(r.tags),content:typeof r.content=="string"?r.content:"",multilingual:f})}return n}function Wt(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Qe?n:`${n.slice(0,Qe).trimEnd()}\\u2026`}function re(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function nt(e){return re(e)/(2*Math.PI)}function pe(e,n,o){let r=re(e),d=Math.acos(2*nt(`${e}:phi`)-1),a=n+(o-n)*nt(`${e}:r`);return{x:a*Math.sin(d)*Math.cos(r),y:a*Math.sin(d)*Math.sin(r),z:a*Math.cos(d)}}function ut(e){return e==="index"||e.endsWith("/index")}function dt(e){return e==="tags"||e.startsWith("tags/")}function jt(e){let n=e.multilingual?.translationKey;return n==="home"||n==="graph"}function Yt(e,n){return e.multilingual?.locale?e.multilingual.locale===n.localeId:e.slug.startsWith(`${n.localeId}/`)?!0:!n.prefixes.some(r=>e.slug.startsWith(`${r}/`))&&n.localeId===n.sourceLocale}function be(e,n,o){return Math.min(o,Math.max(n,e))}function rt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function gt(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function ke(e){return gt(e).trim().toLowerCase()}function Xt(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Zt(e){let n=e.trim();return n.length===0||Xt(n)||dt(n)||ut(n)?!0:ke(n).length===0}function Jt(e){return gt(e).replace(/-/g," ")}function Qt(e){let n=new Map,o=new Map;for(let r of e){let d=ke(r.slug);d.length>0&&!n.has(d)&&n.set(d,r.slug);let a=r.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,r.slug);let f=a.replace(/\\s+/g,"-");f.length>0&&!o.has(f)&&o.set(f,r.slug)}return{byBasename:n,byTitle:o}}function en(e,n,o){if(n.has(e))return e;let r=ke(e),d=o.byBasename.get(r);if(d)return d;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return a||null}function tn(e,n){return e.length===0?"":[...e].sort((r,d)=>(n.get(d)??0)-(n.get(r)??0))[0]??""}function nn(e,n){let o=e.filter(l=>ut(l.slug)||dt(l.slug)||jt(l)?!1:Yt(l,n)),r=new Set(o.map(l=>l.slug)),d=Qt(o),a=new Map,f=new Map,T=[],y=new Set,S=new Map,O=l=>{f.set(l,(f.get(l)??0)+1)},C=(l,g,m)=>l<g?`${l}|${g}|${m}`:`${g}|${l}|${m}`,M=(l,g,m,v)=>{let G=C(l,g,m);y.has(G)||(y.add(G),T.push({source:l,target:g,kind:m}),v&&(O(l),O(g)))};for(let l of o)for(let g of l.links){if(Zt(g))continue;let m=en(g,r,d);if(m!==null){m!==l.slug&&M(l.slug,m,"wikilink",!0);continue}let v=`mention:${ke(g)}`;a.has(v)||a.set(v,Jt(g)),M(l.slug,v,"wikilink",!0)}let D=new Set,N=new Map;for(let l of o)for(let g of l.tags){S.set(g,(S.get(g)??0)+1);let m=`tag:${g}`;D.add(m),M(l.slug,m,"tag",!0);let v=N.get(g)??[];v.push(l.slug),N.set(g,v)}for(let l of o)if(!(l.tags.length<2))for(let g=0;g<l.tags.length;g+=1)for(let m=g+1;m<l.tags.length;m+=1)M(`tag:${l.tags[g]}`,`tag:${l.tags[m]}`,"cooc",!1);let F=new Map;for(let l of o){let g=rt(l.slug);if(g==="root")continue;let m=F.get(g)??[];m.push(l.slug),F.set(g,m)}for(let l of F.values()){if(l.length<2)continue;let g=[...l].sort();for(let m=0;m<g.length;m+=1){let v=g[(m+1)%g.length],G=g[(m+et)%g.length],L=g[m];L===void 0||v===void 0||(L!==v&&!y.has(C(L,v,"wikilink"))&&M(L,v,"folder",!1),g.length>et+1&&G!==void 0&&L!==G&&!y.has(C(L,G,"wikilink"))&&M(L,G,"folder",!1))}}let P=[...f.values()],H=P.length>0?Math.min(...P):0,z=P.length>0?Math.max(...P):0,R=l=>{let g=f.get(l)??0,m=Math.sqrt(g),v=Math.sqrt(H),L=Math.sqrt(z)-v;return L===0?(te+Se)/2:te+(m-v)/L*(Se-te)},q=[...o].sort((l,g)=>(f.get(g.slug)??0)-(f.get(l.slug)??0)),B=new Set(q.filter(l=>(f.get(l.slug)??0)>0).slice(0,Pt).map(l=>l.slug)),E=o.map(l=>{let g=B.has(l.slug),m=g?pe(l.slug,Xe.min,Xe.max):pe(l.slug,Ye.min,Ye.max);return{id:l.slug,name:l.title,type:"note",val:R(l.slug),degree:f.get(l.slug)??0,isHub:g,tag:"",slug:l.slug,folder:rt(l.slug),tags:l.tags,dominantTag:tn(l.tags,S),excerpt:Wt(l.content),phase:re(l.slug),x:m.x,y:m.y,z:m.z}});for(let[l,g]of a){let m=pe(l,Ze.min,Ze.max);E.push({id:l,name:g,type:"mention",val:R(l)*Ft,degree:f.get(l)??0,isHub:!1,tag:"",slug:"",folder:"",tags:[],dominantTag:"",excerpt:"",phase:re(l),x:m.x,y:m.y,z:m.z})}for(let l of D){let g=l.slice(4),m=pe(l,Je.min,Je.max);E.push({id:l,name:g,type:"tag",val:be(R(l)*.7,te,Se),degree:f.get(l)??0,isHub:!1,tag:g,slug:`tags/${g}`,folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:re(l),x:m.x,y:m.y,z:m.z})}return{nodes:E,links:T}}function rn(e){let n=new Map,o=(r,d)=>{let a=n.get(r)??new Set;a.add(d),n.set(r,a)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag")continue;let d=I(r.source),a=I(r.target);o(d,a),o(a,d)}return n}function I(e){return typeof e=="string"?e:e.id}function Q(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function ft(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Q("--light","#ffffff"),ink:Q("--darkgray","#0f0f0f"),accent:Q("--secondary","#a52142"),tertiary:Q("--tertiary","#c75b75"),gray:Q("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function oe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function on(){return window.matchMedia("(pointer: fine)").matches}function sn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function an(){return on()&&sn()&&window.innerWidth>700&&!oe()}function A(){return document.documentElement.getAttribute("saved-theme")==="dark"}function ye(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function ee(e,n){let o=ye(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function ne(e,n,o){let r=ye(e),d=ye(n);if(!r||!d)return e;let a=(f,T)=>Math.round(f+(T-f)*o);return`rgb(${a(r.r,d.r)}, ${a(r.g,d.g)}, ${a(r.b,d.b)})`}function mt(e){return A()?ne(e.bg,"#05070f",.88):e.bg}function cn(e){let n=ye(e);if(!n)return e;let o=r=>{let d=r/255,a=d<=.04045?d/12.92:Math.pow((d+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function ln(e){return cn(mt(e))}function pt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function ot(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:pt(e,[n.accent,n.tertiary,n.ink,n.gray])}function un(e,n){return e.length===0?n.ink:pt(e,[n.accent,n.tertiary])}function ht(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let d=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(d,window.location.origin)}function dn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=ht(e);window.location.assign(n.toString())}function gn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function st(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function fn(e){let o=await import(e?Ct:St);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):gn(o)}function mn(){try{let e=sessionStorage.getItem(ct);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function pn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(lt);if(!n)return e;let o=Pe(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,d=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.zoom=="number"?o.zoom:e.zoom,f=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:d,zoom:a,spread:f}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function he(e){try{sessionStorage.setItem(lt,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Ne(e){try{sessionStorage.setItem(ct,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function hn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function bn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function yn(e,n){return e.type==="note"&&e.folder===n}function at(e,n){let o=I(n),r=e.find(d=>d.id===o);return!r||r.type!=="note"?null:r.folder}function wn(e,n,o){let r=new Map;if(n==="folder"){let d=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return d.forEach((a,f)=>{let T=Math.PI*2*f/Math.max(d.length,1),y={x:Math.cos(T)*o,y:Math.sin(T)*o,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===a&&r.set(S.id,y)}),r}if(n==="tag"){let d=e.nodes.filter(f=>f.type==="tag"),a=new Map;d.forEach((f,T)=>{let y=Math.PI*2*T/Math.max(d.length,1);a.set(f.tag,{x:Math.cos(y)*o,y:Math.sin(y)*o,z:0})});for(let f of e.nodes)if(f.type==="tag"){let T=a.get(f.tag);T&&r.set(f.id,T)}else if(f.dominantTag.length>0){let T=a.get(f.dominantTag);T&&r.set(f.id,T)}}return r}function kn(e,n){let o=[],r=d=>{let a=n*d;for(let f of o){let T=e(f);T&&(f.vx=(f.vx??0)+(T.x-(f.x??0))*a,f.vy=(f.vy??0)+(T.y-(f.y??0))*a,f.vz=(f.vz??0)+(T.z-(f.z??0))*a)}};return r.initialize=d=>{o=d},r}function it(e,n,o,r){for(let d of e.querySelectorAll(n)){if(!(d instanceof HTMLElement))continue;let a=d.getAttribute(r);d.setAttribute("aria-pressed",a===o?"true":"false")}}function Tn(e,n,o,r){let d=rn(n.links),a={lens:mn(),allLabels:!1,focusTag:null,focusFolder:null},f=null,T=null,y=pn(),S=()=>T??f,O=new Set(n.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,_t).map(t=>t.id)),C=t=>{let s=t.val;return t.isHub&&(s*=Dt),a.lens==="tag"&&t.type==="tag"&&(s*=Rt),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Ot),s},M=t=>{let s=S();return a.allLabels||s===t.id||s!==null&&(d.get(s)?.has(t.id)??!1)?!0:O.has(t.id)},D=t=>{let s=be((C(t)-te)/5,0,1);return(Ve+s*(zt-Ve))*y.nodeScale},N=t=>{let s=S();if(s!==null)return s===t||(d.get(s)?.has(t)??!1);if(a.focusTag===null&&a.focusFolder===null)return!0;let c=n.nodes.find(i=>i.id===t);return c?a.focusFolder!==null?yn(c,a.focusFolder):a.focusTag!==null&&bn(c,a.focusTag):!1},F=t=>t.type==="mention"?o.current.gray:a.lens==="tag"?t.type==="tag"?o.current.tertiary:un(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:ot(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,P=t=>{let s=S();if(s!==null&&(s===t.id||(d.get(s)?.has(t.id)??!1)))return o.current.accent;let c=F(t);return N(t.id)?A()?t.type==="mention"?c:t.type==="tag"?ne(o.current.tertiary,"#ffffff",.22):t.isHub?ne("#fff3e4",o.current.accent,.1):ne("#ffffff",o.current.accent,.12):c:ee(c,Z)},H=t=>{let s=A();return t==="wikilink"?.34:t==="tag"?s?.22:.2:s?.12:.11},z=t=>{let s=I(t.source),c=I(t.target),i=S();return i!==null&&(s===i||c===i)?A()?.72:.62:(i!==null||a.focusTag!==null||a.focusFolder!==null)&&(!N(s)||!N(c))?H(t.kind)*Z:H(t.kind)},R=t=>{let s=I(t.source),c=I(t.target),i=S();return i!==null&&(s===i||c===i)?ne(o.current.accent,je,.45):A()?je:o.current.gray},q=t=>ee(R(t),z(t)),B=()=>n,E=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(J.x,J.y,J.z),c=s/be(y.zoom,.4,2.5),i=e.cameraPosition(),u=J,p=s;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let h=Math.hypot(i.x,i.y,i.z);h>1&&(u={x:i.x,y:i.y,z:i.z},p=h)}let b=c/p;e.cameraPosition({x:u.x*b,y:u.y*b,z:u.z*b},Ue,t);return}typeof e.zoom=="function"&&e.zoom(y.zoom,t)},l=()=>{let t=qt(y.spread),s=Ce.min+t*(Ce.max-Ce.min),c=xe.min+t*(xe.max-xe.min),i=e.d3Force("charge");i?.strength&&i.strength(s);let u=e.d3Force("link");u?.distance&&u.distance(k=>a.lens==="tag"&&k.kind==="tag"?c*.72:c),u?.strength&&u.strength(k=>{if(k.kind==="cooc"||k.kind==="folder")return .04;if(a.lens==="tag"&&k.kind==="tag")return .95;if(a.lens==="folder"){let x=at(n.nodes,k.source),_=at(n.nodes,k.target);if(x!==null&&x===_)return .72}return k.kind==="tag"?.65:.8});let p=e.d3Force("center");p?.strength&&p.strength(It);let b=Me.min+t*(Me.max-Me.min),h=wn(n,a.lens,b),w=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",kn(k=>h.get(k.id)??null,w)),r.use3d&&e.d3Force("flattenZ",null)},g=new Map,m=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,s=r.three;g.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(c=>{let i=D(c),u=P(c),p=!1;if(s)if(A()){let k=c.isHub?1.35:1.1,x=new s.MeshLambertMaterial({color:u,emissive:u,emissiveIntensity:k});g.set(c.id,{material:x,base:k,phase:c.phase}),p=new s.Mesh(new s.SphereGeometry(i,14,14),x)}else p=new s.Mesh(new s.SphereGeometry(i,14,14),new s.MeshBasicMaterial({color:u}));if(!M(c)||!t)return p;let b=new t(c.name),h=A()?"rgba(255, 255, 255, 0.85)":o.current.ink;if(b.color=N(c.id)?h:ee(h,Z),b.fontWeight="400",b.strokeWidth=0,b.textHeight=O.has(c.id)?6.5:5.5,b.center.set(0,.5),b.position.x=i+2,b.position.y=0,!s||p===!1)return b;let w=new s.Group;return w.add(p),w.add(b),w})},v=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(c=>{let i=Bt[c.kind]*y.edgeScale,u=new t.MeshBasicMaterial({color:R(c),transparent:!0,opacity:z(c),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),u)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((c,i)=>{let u=i.end.x-i.start.x,p=i.end.y-i.start.y,b=i.end.z-i.start.z,h=Math.sqrt(u*u+p*p+b*b);return c.position.x=(i.start.x+i.end.x)/2,c.position.y=(i.start.y+i.end.y)/2,c.position.z=(i.start.z+i.end.z)/2,c.scale.x=1,c.scale.y=Math.max(h,.01),c.scale.z=1,c.quaternion.setFromUnitVectors(s,new t.Vector3(u,p,b).normalize()),!0})},G=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=S();if(s===null)return 0;let c=I(t.source),i=I(t.target);return c===s||i===s?2:0})},L=()=>{e.nodeVal(C),e.nodeColor(P),e.linkColor(q),e.linkWidth(t=>{let s=I(t.source),c=I(t.target),i=S(),u=y.edgeScale;return i!==null&&(s===i||c===i)?.7*u:t.kind==="wikilink"?.5*u:(t.kind==="tag"?.35:.25)*u}),typeof e.linkOpacity=="function"&&e.linkOpacity($e),G(),v(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},Te=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(p,b)=>{let h=document.createElement("span");h.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=p;let k=document.createElement("span");return k.textContent=b,h.append(w,k),h},c=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",u=r.root.dataset.legendMentions??"Mentions";t.replaceChildren(s(o.current.ink,c),s(o.current.tertiary,i),s(o.current.gray,u))},_e=t=>{let s=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[t.dataset.key]=t.dataset.value,c.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let p=document.createElement("span");p.className="graph-landing__dot",p.style.background=t.dotColor,i.append(p)}i.append(document.createTextNode(t.label));let u=document.createElement("span");return u.className="graph-landing__tag-count",u.textContent=String(t.count),c.append(i,u),s.append(c),s},Ie=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=r.root.querySelector("[data-graph-facet-label]"),c=r.root.querySelector(".graph-landing__tags");if(a.lens==="folder"){let u=r.root.dataset.folderRootLabel??"root",p=new Map;for(let h of n.nodes)h.type==="note"&&p.set(h.folder,(p.get(h.folder)??0)+1);let b=[...p.entries()].sort((h,w)=>w[1]-h[1]);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=b.length===0),t.replaceChildren(...b.map(([h,w])=>_e({dataset:{key:"graphFolder",value:h},pressed:a.focusFolder===h,dotColor:ot(h,o.current),label:h==="root"?u:h,count:w})));return}let i=n.nodes.filter(u=>u.type==="tag").sort((u,p)=>p.degree-u.degree).slice(0,16);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=i.length===0),t.replaceChildren(...i.map(u=>_e({dataset:{key:"graphTag",value:u.tag},pressed:a.focusTag===u.tag,dotColor:null,label:u.tag,count:u.degree})))},se=()=>{e.graphData(B()),l(),L(),m(),Te(),Ie(),it(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),e.d3ReheatSimulation()},bt=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),t!=="folder"&&(a.focusFolder=null),Ne(t),se()},yt=t=>{a.focusTag=a.focusTag===t?null:t,a.focusFolder=null,a.focusTag&&(a.lens="tag",Ne("tag")),se()},wt=t=>{a.focusFolder=a.focusFolder===t?null:t,a.focusTag=null,a.focusFolder&&(a.lens="folder",Ne("folder")),se()},Ge=()=>r.use3d?ln(o.current):mt(o.current);e.graphData(B()),e.backgroundColor(Ge()),e.nodeLabel(t=>t.name),e.nodeRelSize(Gt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(At),typeof e.linkOpacity=="function"&&e.linkOpacity($e),l(),L();let U=r.root.querySelector("[data-graph-preview]"),ae=r.root.querySelector("[data-graph-preview-chip]"),ie=r.root.querySelector("[data-graph-preview-title]"),ce=r.root.querySelector("[data-graph-preview-excerpt]"),le=0;window.addCleanup(()=>window.clearTimeout(le));let kt=t=>{if(!(U instanceof HTMLElement)||!(ae instanceof HTMLElement)||!(ie instanceof HTMLElement)||!(ce instanceof HTMLElement))return;window.clearTimeout(le);let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendMentions??"Mentions";if(t.type==="tag"){let u=r.root.dataset.previewTagTemplate??"{n} notes";ae.textContent=c,ie.textContent=`#${t.tag}`,ce.textContent=u.replace("{n}",String(t.degree))}else t.type==="mention"?(ae.textContent=i,ie.textContent=t.name,ce.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(ae.textContent=s,ie.textContent=t.name,ce.textContent=t.excerpt);U.hidden=!1,U.dataset.visible="true"},Ae=()=>{U instanceof HTMLElement&&(window.clearTimeout(le),le=window.setTimeout(()=>{U.dataset.visible="false",U.hidden=!0},Vt))};if(e.onNodeHover(t=>{f=t?t.id:null,T===null&&(t?kt(t):Ae()),L(),r.use3d&&m()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!oe()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=Ht;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=A()?qe:0,r.bloomPass.radius=Ke,r.bloomPass.threshold=We,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(J,Ue),y.zoom!==1&&E(0)),m(),!oe()){let t=0,s=()=>{let c=performance.now()/1e3*Ut;for(let i of g.values())i.material.emissiveIntensity=i.base*(1+$t*Math.sin(c+i.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,c)=>{let i=D(t),u=t.x??0,p=t.y??0;if(s.save(),s.beginPath(),s.arc(u,p,i,0,Math.PI*2),s.fillStyle=P(t),s.fill(),t.isHub&&(s.strokeStyle=N(t.id)?o.current.accent:ee(o.current.accent,Z),s.lineWidth=1.2/c,s.stroke()),M(t)){let b=11.5/c;s.font=`${b}px ${o.current.font}`,s.fillStyle=N(t.id)?o.current.ink:ee(o.current.ink,Z),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,u,p-i-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,c)=>{let i=D(t)+8;c.beginPath(),c.arc(t.x??0,t.y??0,i,0,Math.PI*2),c.fillStyle=s,c.fill()});let ue=r.root.querySelector("[data-graph-inspect]"),de=r.root.querySelector("[data-graph-inspect-chip]"),ge=r.root.querySelector("[data-graph-inspect-title]"),fe=r.root.querySelector("[data-graph-inspect-excerpt]"),Ee=r.root.querySelector("[data-graph-inspect-tags]"),Le=r.root.querySelector("[data-graph-inspect-connected]"),K=r.root.querySelector("[data-graph-inspect-open]"),He=t=>{oe()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Tt=t=>{let s=d.get(t.id)??new Set,c=[];for(let i of s){let u=n.nodes.find(p=>p.id===i);u&&c.push(u)}return c.sort((i,u)=>u.degree-i.degree)},Et=t=>{if(!(ue instanceof HTMLElement)||!(de instanceof HTMLElement)||!(ge instanceof HTMLElement)||!(fe instanceof HTMLElement)||!(Ee instanceof HTMLElement)||!(Le instanceof HTMLElement))return;let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendMentions??"Mentions",u=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(de.textContent=c,ge.textContent=`#${t.tag}`,fe.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="mention"?(de.textContent=i,ge.textContent=t.name,fe.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(de.textContent=s,ge.textContent=t.name,fe.textContent=t.excerpt);let p=t.tags.map(h=>{let w=document.createElement("li");return w.textContent=h,w});Ee.replaceChildren(...p),Ee.hidden=p.length===0;let b=Tt(t).slice(0,12);if(b.length===0){let h=document.createElement("li");h.className="graph-landing__inspect-empty",h.textContent=u,Le.replaceChildren(h)}else Le.replaceChildren(...b.map(h=>{let w=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=h.id;let x=h.type==="tag"?c:h.type==="mention"?i:s,_=document.createElement("span");_.textContent=x;let $=document.createElement("strong");return $.textContent=h.type==="tag"?`#${h.tag}`:h.name,k.append(_,$),w.append(k),w}));K instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(K.hidden=!1,K.href=ht(t.slug).toString()):(K.hidden=!0,K.removeAttribute("href"))),ue.hidden=!1,r.root.dataset.inspecting="true",Ae()},me=()=>{T=null,ue instanceof HTMLElement&&(ue.hidden=!0),r.root.dataset.inspecting="false",He(!0),L(),r.use3d&&m()},De=t=>{if(T===t.id&&t.type==="note"&&t.slug.length>0){dn(t.slug);return}T=t.id,He(!1),Et(t),L(),r.use3d&&m()},Re=t=>{De(t)},ve=!1;e.onNodeClick((t,s)=>{t&&(ve=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Re(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{me()});let V=r.root.querySelector("#graph-landing-mount");if(V instanceof HTMLElement){let t=null,s=u=>{t={x:u.clientX,y:u.clientY}},c=(u,p)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=V.getBoundingClientRect(),h=u-b.left,w=p-b.top,k=null,x=4096;for(let _ of B().nodes){if(_.x===void 0||_.y===void 0)continue;let $=e.graph2ScreenCoords(_.x,_.y,_.z??0),Lt=($.x-h)**2+($.y-w)**2,vt=($.x-u)**2+($.y-p)**2,Be=Math.min(Lt,vt);Be<x&&(x=Be,k=_)}return k},i=u=>{let p=t;t=null,!(!p||(u.clientX-p.x)**2+(u.clientY-p.y)**2>25)&&window.setTimeout(()=>{if(ve){ve=!1;return}let h=c(u.clientX,u.clientY);h?Re(h):me()},0)};V.addEventListener("pointerdown",s,!0),V.addEventListener("pointerup",i,!0),window.addCleanup(()=>{V.removeEventListener("pointerdown",s,!0),V.removeEventListener("pointerup",i,!0)})}it(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),Te(),Ie(),a.lens!=="all"&&se(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Oe=()=>{o.current=ft(),e.backgroundColor(Ge()),r.bloomPass&&(r.bloomPass.strength=A()?qe:0,r.bloomPass.radius=Ke,r.bloomPass.threshold=We),L(),m(),Te()};document.addEventListener("themechange",Oe),window.addCleanup(()=>document.removeEventListener("themechange",Oe));let Fe=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){me();return}let c=s.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let w=n.nodes.find(k=>k.id===c.dataset.graphInspectId);w&&De(w);return}let i=s.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&hn(i.dataset.graphLens)){bt(i.dataset.graphLens);return}let u=s.closest("[data-graph-tag]");if(u instanceof HTMLElement&&u.dataset.graphTag){yt(u.dataset.graphTag);return}let p=s.closest("[data-graph-folder]");if(p instanceof HTMLElement&&p.dataset.graphFolder){wt(p.dataset.graphFolder);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let b=s.closest("[data-graph-labels]");if(b instanceof HTMLButtonElement){a.allLabels=!a.allLabels,b.setAttribute("aria-pressed",a.allLabels?"true":"false");let w=b.dataset.labelShow??"Labels",k=b.dataset.labelHide??"Labels",x=a.allLabels?k:w;b.title=x,b.setAttribute("aria-label",x),m();return}if(s.closest("[data-graph-theme]")){let w=A()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let h=s.closest("[data-graph-tags-toggle]");if(h instanceof HTMLButtonElement){let w=r.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let k=w.dataset.open==="true";w.dataset.open=k?"false":"true",h.setAttribute("aria-expanded",k?"false":"true")}}},W=r.root.querySelector("[data-graph-node-scale]"),j=r.root.querySelector("[data-graph-edge-scale]");if(W instanceof HTMLInputElement){W.value=String(Math.round(y.nodeScale*100));let t=()=>{y.nodeScale=Number(W.value)/100,he(y),L(),r.use3d&&m()};W.addEventListener("input",t),window.addCleanup(()=>W.removeEventListener("input",t))}if(j instanceof HTMLInputElement){j.value=String(Math.round(y.edgeScale*100));let t=()=>{y.edgeScale=Number(j.value)/100,he(y),L()};j.addEventListener("input",t),window.addCleanup(()=>j.removeEventListener("input",t))}let Y=r.root.querySelector("[data-graph-zoom]");if(Y instanceof HTMLInputElement){Y.value=String(Math.round(y.zoom*100));let t=()=>{y.zoom=Number(Y.value)/100,he(y),E(200)};Y.addEventListener("input",t),window.addCleanup(()=>Y.removeEventListener("input",t))}let X=r.root.querySelector("[data-graph-spread]");if(X instanceof HTMLInputElement){X.value=String(Math.round(y.spread*100));let t=()=>{y.spread=Number(X.value)/100,he(y),l(),e.d3ReheatSimulation()};X.addEventListener("input",t),window.addCleanup(()=>X.removeEventListener("input",t))}r.root.addEventListener("click",Fe),window.addCleanup(()=>r.root.removeEventListener("click",Fe));let ze=t=>{t.key==="Escape"&&me()};window.addEventListener("keydown",ze),window.addCleanup(()=>window.removeEventListener("keydown",ze))}async function En(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelector("[data-graph-counts]"),r=e.dataset.locale??"ko",d=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),f=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",T=!1,y=null,S={current:ft()},O=()=>{T=!0,y&&(y._destructor(),y=null),delete e.dataset.graphReady};window.addCleanup(O);let C=an(),M=fn(C),D=C?import(xt).then(E=>E.default??null).catch(E=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),null)):Promise.resolve(null),N=C?import(Mt).catch(E=>(console.error("[graph-landing] three unavailable; using default node spheres",E),null)):Promise.resolve(null),F=C?import(Nt).then(E=>E.UnrealBloomPass?new E.UnrealBloomPass:null).catch(E=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),null)):Promise.resolve(null);M.catch(()=>{});let P;try{P=Pe(await fetchData)}catch(E){throw st(n,"Graph could not load content index."),E}if(T)return;let H=nn(Kt(P),{localeId:r,sourceLocale:d,prefixes:a});o&&(o.textContent=f.replace("{n}",String(H.nodes.length)).replace("{m}",String(H.links.length)));let z;try{z=await M}catch(E){throw st(n,"Graph could not load. Check your network connection."),E}let[R,q,B]=await Promise.all([D,N,F]);if(!T&&(n.replaceChildren(),y=z(n),n.__graphLanding=y,n.__graphData=H,Tn(y,H,S,{use3d:C,root:e,spriteText:R,bloomPass:B,three:q}),C&&!oe())){let E=()=>{!y||typeof y.controls!="function"||(y.controls().autoRotate=!1)};n.addEventListener("pointerdown",E,{once:!0}),window.addCleanup(()=>n.removeEventListener("pointerdown",E))}}var Ln="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Ln,r)}catch(d){console.error("[graph-landing] failed to persist preferred-locale",d)}});document.addEventListener("nav",()=>{En()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100vw;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 32px);\n  max-width: 248px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: auto;\n  touch-action: pan-y;\n  position: absolute;\n  top: 16px;\n  width: 248px;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  max-width: min(28rem, 100% - 16rem);\n  padding: 1.25rem 1.5rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--mention {\n  background: var(--gray);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-top: 1px solid var(--lightgray);\n    max-height: 48dvh;\n    top: auto;\n    width: 100%;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__rail {\n    border-radius: 12px;\n    left: 8px;\n    max-height: calc(100dvh - 16px);\n    max-width: none;\n    padding: 10px 12px;\n    right: 8px;\n    top: 8px;\n    width: auto;\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__section-label--tags {\n    display: none;\n  }\n  .graph-landing__filters-toggle {\n    display: inline-flex;\n    min-height: 44px;\n    padding: 8px;\n  }\n  .graph-landing__tag-list {\n    display: none;\n  }\n  .graph-landing__tags[data-open=true] .graph-landing__tag-list {\n    display: flex;\n  }\n  .graph-landing__utils {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .graph-landing__top-right {\n    max-width: calc(100% - 1.5rem);\n    padding: 0.75rem 1rem;\n  }\n}';
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
              /* @__PURE__ */ u2("div", { class: "graph-landing__rail", ...{ onwheel: "event.stopPropagation()" }, children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__title-block", children: [
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