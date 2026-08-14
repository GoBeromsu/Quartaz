// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var pe="0.179.1",ht="https://esm.sh/force-graph@1.51.4",bt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${pe}`,yt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${pe}`,wt=`https://esm.sh/three@${pe}`,kt=`https://esm.sh/three@${pe}/examples/jsm/postprocessing/UnrealBloomPass.js`,Tt=8,Et=14,Lt=6,Z=1,Te=3.5,vt=.05,St=2.6,Ct=1,Ae=1,Y=.18,Le="graph-landing:lens",Qe="graph-landing:tune",Mt=.18,xt=1.4,Nt=1.25,Gt=1.15,It=.55,_t={x:420,y:300,z:720},Pt={x:0,y:0,z:0},Oe=1.3,At=3.2,De=1.05,He=.32,Re=.28,Ot={wikilink:.3,tag:.22,cooc:.16,folder:.16},Be="#a8b0c2",Fe={min:80,max:200},ze={min:40,max:110},$e={min:160,max:280},Ue={min:90,max:170},Ve=220,qe=2,Dt=.15,Ht=.8,Rt=350,Bt={tight:{charge:-100,distance:72},normal:{charge:-150,distance:96},wide:{charge:-190,distance:116}};function ve(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Ke(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Ft(e){let n=[];for(let o of Object.values(e)){let r=ve(o),l=typeof r.slug=="string"?r.slug:"";if(l.length===0)continue;let a=r.multilingual,m=a&&typeof a=="object"?a:void 0;n.push({slug:l,title:typeof r.title=="string"?r.title:l,links:Ke(r.links),tags:Ke(r.tags),content:typeof r.content=="string"?r.content:"",multilingual:m})}return n}function zt(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Ve?n:`${n.slice(0,Ve).trimEnd()}\\u2026`}function ee(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function We(e){return ee(e)/(2*Math.PI)}function ge(e,n,o){let r=ee(e),l=Math.acos(2*We(`${e}:phi`)-1),a=n+(o-n)*We(`${e}:r`);return{x:a*Math.sin(l)*Math.cos(r),y:a*Math.sin(l)*Math.sin(r),z:a*Math.cos(l)}}function et(e){return e==="index"||e.endsWith("/index")}function tt(e){return e==="tags"||e.startsWith("tags/")}function $t(e){let n=e.multilingual?.translationKey;return n==="home"||n==="graph"}function Ut(e,n){return e.multilingual?.locale?e.multilingual.locale===n.localeId:e.slug.startsWith(`${n.localeId}/`)?!0:!n.prefixes.some(r=>e.slug.startsWith(`${r}/`))&&n.localeId===n.sourceLocale}function nt(e,n,o){return Math.min(o,Math.max(n,e))}function je(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function rt(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function he(e){return rt(e).trim().toLowerCase()}function Vt(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function qt(e){let n=e.trim();return n.length===0||Vt(n)||tt(n)||et(n)?!0:he(n).length===0}function Kt(e){return rt(e).replace(/-/g," ")}function Wt(e){let n=new Map,o=new Map;for(let r of e){let l=he(r.slug);l.length>0&&!n.has(l)&&n.set(l,r.slug);let a=r.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,r.slug);let m=a.replace(/\\s+/g,"-");m.length>0&&!o.has(m)&&o.set(m,r.slug)}return{byBasename:n,byTitle:o}}function jt(e,n,o){if(n.has(e))return e;let r=he(e),l=o.byBasename.get(r);if(l)return l;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return a||null}function Yt(e,n){return e.length===0?"":[...e].sort((r,l)=>(n.get(l)??0)-(n.get(r)??0))[0]??""}function Xt(e,n){let o=e.filter(i=>et(i.slug)||tt(i.slug)||$t(i)?!1:Ut(i,n)),r=new Set(o.map(i=>i.slug)),l=Wt(o),a=new Map,m=new Map,k=[],w=new Set,v=new Map,R=i=>{m.set(i,(m.get(i)??0)+1)},A=(i,d,p)=>i<d?`${i}|${d}|${p}`:`${d}|${i}|${p}`,C=(i,d,p,L)=>{let S=A(i,d,p);w.has(S)||(w.add(S),k.push({source:i,target:d,kind:p}),L&&(R(i),R(d)))};for(let i of o)for(let d of i.links){if(qt(d))continue;let p=jt(d,r,l);if(p!==null){p!==i.slug&&C(i.slug,p,"wikilink",!0);continue}let L=`mention:${he(d)}`;a.has(L)||a.set(L,Kt(d)),C(i.slug,L,"wikilink",!0)}let I=new Set,N=new Map;for(let i of o)for(let d of i.tags){v.set(d,(v.get(d)??0)+1);let p=`tag:${d}`;I.add(p),C(i.slug,p,"tag",!0);let L=N.get(d)??[];L.push(i.slug),N.set(d,L)}for(let i of o)if(!(i.tags.length<2))for(let d=0;d<i.tags.length;d+=1)for(let p=d+1;p<i.tags.length;p+=1)C(`tag:${i.tags[d]}`,`tag:${i.tags[p]}`,"cooc",!1);let O=new Map;for(let i of o){let d=je(i.slug);if(d==="root")continue;let p=O.get(d)??[];p.push(i.slug),O.set(d,p)}for(let i of O.values()){if(i.length<2)continue;let d=[...i].sort();for(let p=0;p<d.length;p+=1){let L=d[(p+1)%d.length],S=d[(p+qe)%d.length],M=d[p];M===void 0||L===void 0||(M!==L&&!w.has(A(M,L,"wikilink"))&&C(M,L,"folder",!1),d.length>qe+1&&S!==void 0&&M!==S&&!w.has(A(M,S,"wikilink"))&&C(M,S,"folder",!1))}}let G=[...m.values()],H=G.length>0?Math.min(...G):0,T=G.length>0?Math.max(...G):0,z=i=>{let d=m.get(i)??0,p=Math.sqrt(d),L=Math.sqrt(H),M=Math.sqrt(T)-L;return M===0?(Z+Te)/2:Z+(p-L)/M*(Te-Z)},be=[...o].sort((i,d)=>(m.get(d.slug)??0)-(m.get(i.slug)??0)),V=new Set(be.filter(i=>(m.get(i.slug)??0)>0).slice(0,Tt).map(i=>i.slug)),B=o.map(i=>{let d=V.has(i.slug),p=d?ge(i.slug,ze.min,ze.max):ge(i.slug,Fe.min,Fe.max);return{id:i.slug,name:i.title,type:"note",val:z(i.slug),degree:m.get(i.slug)??0,isHub:d,tag:"",slug:i.slug,folder:je(i.slug),tags:i.tags,dominantTag:Yt(i.tags,v),excerpt:zt(i.content),phase:ee(i.slug),x:p.x,y:p.y,z:p.z}});for(let[i,d]of a){let p=ge(i,$e.min,$e.max);B.push({id:i,name:d,type:"mention",val:z(i)*It,degree:m.get(i)??0,isHub:!1,tag:"",slug:"",folder:"",tags:[],dominantTag:"",excerpt:"",phase:ee(i),x:p.x,y:p.y,z:p.z})}for(let i of I){let d=i.slice(4),p=ge(i,Ue.min,Ue.max);B.push({id:i,name:d,type:"tag",val:nt(z(i)*.7,Z,Te),degree:m.get(i)??0,isHub:!1,tag:d,slug:`tags/${d}`,folder:"tag",tags:[d],dominantTag:d,excerpt:"",phase:ee(i),x:p.x,y:p.y,z:p.z})}return{nodes:B,links:k}}function Jt(e){let n=new Map,o=(r,l)=>{let a=n.get(r)??new Set;a.add(l),n.set(r,a)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag")continue;let l=x(r.source),a=x(r.target);o(l,a),o(a,l)}return n}function x(e){return typeof e=="string"?e:e.id}function X(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function ot(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:X("--light","#ffffff"),ink:X("--darkgray","#0f0f0f"),accent:X("--secondary","#a52142"),tertiary:X("--tertiary","#c75b75"),gray:X("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function te(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zt(){return window.matchMedia("(pointer: fine)").matches}function Qt(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function en(){return Zt()&&Qt()&&window.innerWidth>700&&!te()}function P(){return document.documentElement.getAttribute("saved-theme")==="dark"}function me(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function J(e,n){let o=me(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Q(e,n,o){let r=me(e),l=me(n);if(!r||!l)return e;let a=(m,k)=>Math.round(m+(k-m)*o);return`rgb(${a(r.r,l.r)}, ${a(r.g,l.g)}, ${a(r.b,l.b)})`}function st(e){return P()?Q(e.bg,"#05070f",.88):e.bg}function tn(e){let n=me(e);if(!n)return e;let o=r=>{let l=r/255,a=l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function nn(e){return tn(st(e))}function at(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function Ye(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:at(e,[n.accent,n.tertiary,n.ink,n.gray])}function rn(e,n){return e.length===0?n.ink:at(e,[n.accent,n.tertiary])}function it(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let l=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(l,window.location.origin)}function on(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=it(e);window.location.assign(n.toString())}function sn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function Xe(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function an(e){let o=await import(e?bt:ht);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):sn(o)}function cn(){try{let e=sessionStorage.getItem(Le);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function ln(){let e={nodeScale:.7,edgeScale:1,coresOnly:!1};try{sessionStorage.getItem(Le)==="hub"&&(e.coresOnly=!0);let n=sessionStorage.getItem(Qe);if(!n)return e;let o=ve(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,l=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.coresOnly=="boolean"?o.coresOnly:e.coresOnly;return{nodeScale:r,edgeScale:l,coresOnly:a}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Ee(e){try{sessionStorage.setItem(Qe,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Je(e){try{sessionStorage.setItem(Le,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function un(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function dn(e){return e==="tight"||e==="normal"||e==="wide"}function gn(e,n){let o=e.nodes.filter(l=>l.type==="note").sort((l,a)=>a.degree-l.degree).slice(0,Lt),r=new Set;for(let l of o){r.add(l.id);for(let a of n.get(l.id)??[])r.add(a)}return r}function fn(e,n){return{nodes:e.nodes.filter(o=>n.has(o.id)),links:e.links.filter(o=>n.has(x(o.source))&&n.has(x(o.target)))}}function mn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Ze(e,n){let o=x(n),r=e.find(l=>l.id===o);return!r||r.type!=="note"?null:r.folder}function pn(e,n,o){let r=new Map;if(n==="folder"){let l=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return l.forEach((a,m)=>{let k=Math.PI*2*m/Math.max(l.length,1),w={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let v of e.nodes)v.type==="note"&&v.folder===a&&r.set(v.id,w)}),r}if(n==="tag"){let l=e.nodes.filter(m=>m.type==="tag"),a=new Map;l.forEach((m,k)=>{let w=Math.PI*2*k/Math.max(l.length,1);a.set(m.tag,{x:Math.cos(w)*o,y:Math.sin(w)*o,z:0})});for(let m of e.nodes)if(m.type==="tag"){let k=a.get(m.tag);k&&r.set(m.id,k)}else if(m.dominantTag.length>0){let k=a.get(m.dominantTag);k&&r.set(m.id,k)}}return r}function hn(e,n){let o=[],r=l=>{let a=n*l;for(let m of o){let k=e(m);k&&(m.vx=(m.vx??0)+(k.x-(m.x??0))*a,m.vy=(m.vy??0)+(k.y-(m.y??0))*a,m.vz=(m.vz??0)+(k.z-(m.z??0))*a)}};return r.initialize=l=>{o=l},r}function fe(e,n,o,r){for(let l of e.querySelectorAll(n)){if(!(l instanceof HTMLElement))continue;let a=l.getAttribute(r);l.setAttribute("aria-pressed",a===o?"true":"false")}}function bn(e,n,o,r){let l=Jt(n.links),a={lens:cn(),spacing:"normal",allLabels:!1,focusTag:null},m=null,k=null,w=ln(),v=()=>k??m,R=new Set(n.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,Et).map(t=>t.id)),A=t=>{let s=t.val;return t.isHub&&(s*=xt),a.lens==="tag"&&t.type==="tag"&&(s*=Nt),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Gt),s},C=t=>{let s=v();return a.allLabels||s===t.id||s!==null&&(l.get(s)?.has(t.id)??!1)?!0:R.has(t.id)},I=t=>{let s=nt((A(t)-Z)/5,0,1);return(Oe+s*(At-Oe))*w.nodeScale},N=t=>{let s=v();if(s!==null)return s===t||(l.get(s)?.has(t)??!1);if(a.focusTag===null)return!0;let c=n.nodes.find(u=>u.id===t);return c?mn(c,a.focusTag):!1},O=t=>t.type==="mention"?o.current.gray:a.lens==="tag"?t.type==="tag"?o.current.tertiary:rn(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:Ye(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,G=t=>{let s=v();if(s!==null&&(s===t.id||(l.get(s)?.has(t.id)??!1)))return o.current.accent;let c=O(t);return N(t.id)?P()?t.type==="mention"?c:t.type==="tag"?Q(o.current.tertiary,"#ffffff",.22):t.isHub?Q("#fff3e4",o.current.accent,.1):Q("#ffffff",o.current.accent,.12):c:J(c,Y)},H=t=>{let s=P();return t==="wikilink"?.34:t==="tag"?s?.22:.2:s?.12:.11},T=t=>{let s=x(t.source),c=x(t.target),u=v();return u!==null&&(s===u||c===u)?P()?.72:.62:(u!==null||a.focusTag!==null)&&(!N(s)||!N(c))?H(t.kind)*Y:H(t.kind)},z=t=>{let s=x(t.source),c=x(t.target),u=v();return u!==null&&(s===u||c===u)?Q(o.current.accent,Be,.45):P()?Be:o.current.gray},be=t=>J(z(t),T(t)),V=()=>w.coresOnly?fn(n,gn(n,l)):n,B=()=>{let t=Bt[a.spacing],s=e.d3Force("charge");s?.strength&&s.strength(t.charge);let c=e.d3Force("link");c?.distance&&c.distance(f=>a.lens==="tag"&&f.kind==="tag"?t.distance*.72:t.distance),c?.strength&&c.strength(f=>{if(f.kind==="cooc"||f.kind==="folder")return .04;if(a.lens==="tag"&&f.kind==="tag")return .95;if(a.lens==="folder"){let y=Ze(n.nodes,f.source),E=Ze(n.nodes,f.target);if(y!==null&&y===E)return .72}return f.kind==="tag"?.65:.8});let u=e.d3Force("center");u?.strength&&u.strength(vt);let g=a.spacing==="wide"?260:a.spacing==="tight"?130:190,b=pn(n,a.lens,g),h=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",hn(f=>b.get(f.id)??null,h)),r.use3d&&e.d3Force("flattenZ",null)},i=new Map,d=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,s=r.three;i.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(c=>{let u=I(c),g=G(c),b=!1;if(s)if(P()){let E=c.isHub?1.35:1.1,_=new s.MeshLambertMaterial({color:g,emissive:g,emissiveIntensity:E});i.set(c.id,{material:_,base:E,phase:c.phase}),b=new s.Mesh(new s.SphereGeometry(u,14,14),_)}else b=new s.Mesh(new s.SphereGeometry(u,14,14),new s.MeshBasicMaterial({color:g}));if(!C(c)||!t)return b;let h=new t(c.name),f=P()?"rgba(255, 255, 255, 0.85)":o.current.ink;if(h.color=N(c.id)?f:J(f,Y),h.fontWeight="400",h.strokeWidth=0,h.textHeight=R.has(c.id)?6.5:5.5,h.center.set(0,.5),h.position.x=u+2,h.position.y=0,!s||b===!1)return h;let y=new s.Group;return y.add(b),y.add(h),y})},p=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(c=>{let u=Ot[c.kind]*w.edgeScale,g=new t.MeshBasicMaterial({color:z(c),transparent:!0,opacity:T(c),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(u,u,1,5),g)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((c,u)=>{let g=u.end.x-u.start.x,b=u.end.y-u.start.y,h=u.end.z-u.start.z,f=Math.sqrt(g*g+b*b+h*h);return c.position.x=(u.start.x+u.end.x)/2,c.position.y=(u.start.y+u.end.y)/2,c.position.z=(u.start.z+u.end.z)/2,c.scale.x=1,c.scale.y=Math.max(f,.01),c.scale.z=1,c.quaternion.setFromUnitVectors(s,new t.Vector3(g,b,h).normalize()),!0})},L=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=v();if(s===null)return 0;let c=x(t.source),u=x(t.target);return c===s||u===s?2:0})},S=()=>{e.nodeVal(A),e.nodeColor(G),e.linkColor(be),e.linkWidth(t=>{let s=x(t.source),c=x(t.target),u=v(),g=w.edgeScale;return u!==null&&(s===u||c===u)?.7*g:t.kind==="wikilink"?.5*g:(t.kind==="tag"?.35:.25)*g}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ae),L(),p(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},M=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(b,h)=>{let f=document.createElement("span");f.className="graph-landing__legend-item";let y=document.createElement("span");y.className="graph-landing__dot",y.setAttribute("aria-hidden","true"),y.style.background=b;let E=document.createElement("span");return E.textContent=h,f.append(y,E),f};if(a.lens==="folder"){let b=[...new Set(n.nodes.filter(f=>f.type==="note").map(f=>f.folder))],h=r.root.dataset.folderRootLabel??"root";t.replaceChildren(...b.map(f=>s(Ye(f,o.current),f==="root"?h:f)));return}let c=r.root.dataset.legendNotes??"Notes",u=r.root.dataset.legendTags??"Tags",g=r.root.dataset.legendMentions??"Mentions";t.replaceChildren(s(o.current.ink,c),s(o.current.tertiary,u),s(o.current.gray,g))},ct=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=n.nodes.filter(g=>g.type==="tag").sort((g,b)=>b.degree-g.degree).slice(0,16),c=r.root.querySelector(".graph-landing__tags");c instanceof HTMLElement&&(c.hidden=s.length===0);let u=s.map(g=>{let b=document.createElement("li"),h=document.createElement("button");h.type="button",h.className="graph-landing__tag-item",h.dataset.graphTag=g.tag,h.setAttribute("aria-pressed",a.focusTag===g.tag?"true":"false");let f=document.createElement("span");f.textContent=g.tag;let y=document.createElement("span");return y.className="graph-landing__tag-count",y.textContent=String(g.degree),h.append(f,y),b.append(h),b});t.replaceChildren(...u)},ne=()=>{e.graphData(V()),B(),S(),d(),M(),fe(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),fe(r.root,"[data-graph-spacing]",a.spacing,"data-graph-spacing");for(let t of r.root.querySelectorAll("[data-graph-tag]"))t instanceof HTMLElement&&t.setAttribute("aria-pressed",t.dataset.graphTag===a.focusTag?"true":"false");e.d3ReheatSimulation()},lt=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),Je(t),ne()},ut=t=>{a.focusTag=a.focusTag===t?null:t,a.focusTag&&(a.lens="tag",Je("tag")),ne()},Se=()=>r.use3d?nn(o.current):st(o.current);e.graphData(V()),e.backgroundColor(Se()),e.nodeLabel(t=>t.name),e.nodeRelSize(St),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Ct),typeof e.linkOpacity=="function"&&e.linkOpacity(Ae),B(),S();let $=r.root.querySelector("[data-graph-preview]"),re=r.root.querySelector("[data-graph-preview-chip]"),oe=r.root.querySelector("[data-graph-preview-title]"),se=r.root.querySelector("[data-graph-preview-excerpt]"),ae=0;window.addCleanup(()=>window.clearTimeout(ae));let dt=t=>{if(!($ instanceof HTMLElement)||!(re instanceof HTMLElement)||!(oe instanceof HTMLElement)||!(se instanceof HTMLElement))return;window.clearTimeout(ae);let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",u=r.root.dataset.legendMentions??"Mentions";if(t.type==="tag"){let g=r.root.dataset.previewTagTemplate??"{n} notes";re.textContent=c,oe.textContent=`#${t.tag}`,se.textContent=g.replace("{n}",String(t.degree))}else t.type==="mention"?(re.textContent=u,oe.textContent=t.name,se.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(re.textContent=s,oe.textContent=t.name,se.textContent=t.excerpt);$.hidden=!1,$.dataset.visible="true"},Ce=()=>{$ instanceof HTMLElement&&(window.clearTimeout(ae),ae=window.setTimeout(()=>{$.dataset.visible="false",$.hidden=!0},Rt))};if(e.onNodeHover(t=>{m=t?t.id:null,k===null&&(t?dt(t):Ce()),S(),r.use3d&&d()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!te()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=Mt;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=P()?De:0,r.bloomPass.radius=He,r.bloomPass.threshold=Re,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&e.cameraPosition(_t,Pt),d(),!te()){let t=0,s=()=>{let c=performance.now()/1e3*Ht;for(let u of i.values())u.material.emissiveIntensity=u.base*(1+Dt*Math.sin(c+u.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,c)=>{let u=I(t),g=t.x??0,b=t.y??0;if(s.save(),s.beginPath(),s.arc(g,b,u,0,Math.PI*2),s.fillStyle=G(t),s.fill(),t.isHub&&(s.strokeStyle=N(t.id)?o.current.accent:J(o.current.accent,Y),s.lineWidth=1.2/c,s.stroke()),C(t)){let h=11.5/c;s.font=`${h}px ${o.current.font}`,s.fillStyle=N(t.id)?o.current.ink:J(o.current.ink,Y),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,g,b-u-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,c)=>{let u=I(t)+8;c.beginPath(),c.arc(t.x??0,t.y??0,u,0,Math.PI*2),c.fillStyle=s,c.fill()});let ie=r.root.querySelector("[data-graph-inspect]"),ce=r.root.querySelector("[data-graph-inspect-chip]"),le=r.root.querySelector("[data-graph-inspect-title]"),ue=r.root.querySelector("[data-graph-inspect-excerpt]"),ye=r.root.querySelector("[data-graph-inspect-tags]"),we=r.root.querySelector("[data-graph-inspect-connected]"),q=r.root.querySelector("[data-graph-inspect-open]"),Me=t=>{te()||typeof e.controls!="function"||(e.controls().autoRotate=t)},gt=t=>{let s=l.get(t.id)??new Set,c=[];for(let u of s){let g=n.nodes.find(b=>b.id===u);g&&c.push(g)}return c.sort((u,g)=>g.degree-u.degree)},ft=t=>{if(!(ie instanceof HTMLElement)||!(ce instanceof HTMLElement)||!(le instanceof HTMLElement)||!(ue instanceof HTMLElement)||!(ye instanceof HTMLElement)||!(we instanceof HTMLElement))return;let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",u=r.root.dataset.legendMentions??"Mentions",g=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(ce.textContent=c,le.textContent=`#${t.tag}`,ue.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="mention"?(ce.textContent=u,le.textContent=t.name,ue.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(ce.textContent=s,le.textContent=t.name,ue.textContent=t.excerpt);let b=t.tags.map(f=>{let y=document.createElement("li");return y.textContent=f,y});ye.replaceChildren(...b),ye.hidden=b.length===0;let h=gt(t).slice(0,12);if(h.length===0){let f=document.createElement("li");f.className="graph-landing__inspect-empty",f.textContent=g,we.replaceChildren(f)}else we.replaceChildren(...h.map(f=>{let y=document.createElement("li"),E=document.createElement("button");E.type="button",E.className="graph-landing__inspect-link",E.dataset.graphInspectId=f.id;let _=f.type==="tag"?c:f.type==="mention"?u:s,D=document.createElement("span");D.textContent=_;let F=document.createElement("strong");return F.textContent=f.type==="tag"?`#${f.tag}`:f.name,E.append(D,F),y.append(E),y}));q instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(q.hidden=!1,q.href=it(t.slug).toString()):(q.hidden=!0,q.removeAttribute("href"))),ie.hidden=!1,r.root.dataset.inspecting="true",Ce()},de=()=>{k=null,ie instanceof HTMLElement&&(ie.hidden=!0),r.root.dataset.inspecting="false",Me(!0),S(),r.use3d&&d()},xe=t=>{if(k===t.id&&t.type==="note"&&t.slug.length>0){on(t.slug);return}k=t.id,Me(!1),ft(t),S(),r.use3d&&d()},Ne=t=>{xe(t)},ke=!1;e.onNodeClick((t,s)=>{t&&(ke=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Ne(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{de()});let U=r.root.querySelector("#graph-landing-mount");if(U instanceof HTMLElement){let t=null,s=g=>{t={x:g.clientX,y:g.clientY}},c=(g,b)=>{if(typeof e.graph2ScreenCoords!="function")return null;let h=U.getBoundingClientRect(),f=g-h.left,y=b-h.top,E=null,_=4096;for(let D of V().nodes){if(D.x===void 0||D.y===void 0)continue;let F=e.graph2ScreenCoords(D.x,D.y,D.z??0),mt=(F.x-f)**2+(F.y-y)**2,pt=(F.x-g)**2+(F.y-b)**2,Pe=Math.min(mt,pt);Pe<_&&(_=Pe,E=D)}return E},u=g=>{let b=t;t=null,!(!b||(g.clientX-b.x)**2+(g.clientY-b.y)**2>25)&&window.setTimeout(()=>{if(ke){ke=!1;return}let f=c(g.clientX,g.clientY);f?Ne(f):de()},0)};U.addEventListener("pointerdown",s,!0),U.addEventListener("pointerup",u,!0),window.addCleanup(()=>{U.removeEventListener("pointerdown",s,!0),U.removeEventListener("pointerup",u,!0)})}fe(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),M(),ct(),a.lens!=="all"&&ne(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ge=()=>{o.current=ot(),e.backgroundColor(Se()),r.bloomPass&&(r.bloomPass.strength=P()?De:0,r.bloomPass.radius=He,r.bloomPass.threshold=Re),S(),d(),M()};document.addEventListener("themechange",Ge),window.addCleanup(()=>document.removeEventListener("themechange",Ge));let Ie=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){de();return}let c=s.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let y=n.nodes.find(E=>E.id===c.dataset.graphInspectId);y&&xe(y);return}let u=s.closest("[data-graph-lens]");if(u instanceof HTMLElement&&u.dataset.graphLens&&un(u.dataset.graphLens)){lt(u.dataset.graphLens);return}let g=s.closest("[data-graph-spacing]");if(g instanceof HTMLElement&&g.dataset.graphSpacing&&dn(g.dataset.graphSpacing)){a.spacing=g.dataset.graphSpacing,B(),e.d3ReheatSimulation(),fe(r.root,"[data-graph-spacing]",a.spacing,"data-graph-spacing");return}let b=s.closest("[data-graph-tag]");if(b instanceof HTMLElement&&b.dataset.graphTag){ut(b.dataset.graphTag);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let h=s.closest("[data-graph-labels]");if(h instanceof HTMLButtonElement){a.allLabels=!a.allLabels,h.setAttribute("aria-pressed",a.allLabels?"true":"false");let y=h.dataset.labelShow??"Labels",E=h.dataset.labelHide??"Labels",_=h.querySelector("[data-graph-labels-text]");_&&(_.textContent=a.allLabels?E:y),d();return}if(s.closest("[data-graph-theme]")){let y=P()?"light":"dark";document.documentElement.setAttribute("saved-theme",y),localStorage.setItem("theme",y),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${y}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:y}}));return}let f=s.closest("[data-graph-tags-toggle]");if(f instanceof HTMLButtonElement){let y=r.root.querySelector(".graph-landing__tags");if(y instanceof HTMLElement){let E=y.dataset.open==="true";y.dataset.open=E?"false":"true",f.setAttribute("aria-expanded",E?"false":"true")}}},K=r.root.querySelector("[data-graph-node-scale]"),W=r.root.querySelector("[data-graph-edge-scale]"),j=r.root.querySelector("[data-graph-cores]");if(K instanceof HTMLInputElement){K.value=String(Math.round(w.nodeScale*100));let t=()=>{w.nodeScale=Number(K.value)/100,Ee(w),S(),r.use3d&&d()};K.addEventListener("input",t),window.addCleanup(()=>K.removeEventListener("input",t))}if(W instanceof HTMLInputElement){W.value=String(Math.round(w.edgeScale*100));let t=()=>{w.edgeScale=Number(W.value)/100,Ee(w),S()};W.addEventListener("input",t),window.addCleanup(()=>W.removeEventListener("input",t))}if(j instanceof HTMLInputElement){j.checked=w.coresOnly;let t=()=>{w.coresOnly=j.checked,Ee(w),ne()};j.addEventListener("change",t),window.addCleanup(()=>j.removeEventListener("change",t))}r.root.addEventListener("click",Ie),window.addCleanup(()=>r.root.removeEventListener("click",Ie));let _e=t=>{t.key==="Escape"&&de()};window.addEventListener("keydown",_e),window.addCleanup(()=>window.removeEventListener("keydown",_e))}async function yn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelector("[data-graph-counts]"),r=e.dataset.locale??"ko",l=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(T=>T.trim()).filter(T=>T.length>0),m=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=!1,w=null,v={current:ot()},R=()=>{k=!0,w&&(w._destructor(),w=null),delete e.dataset.graphReady};window.addCleanup(R);let A;try{A=ve(await fetchData)}catch(T){throw Xe(n,"Graph could not load content index."),T}if(k)return;let C=Xt(Ft(A),{localeId:r,sourceLocale:l,prefixes:a});o&&(o.textContent=m.replace("{n}",String(C.nodes.length)).replace("{m}",String(C.links.length)));let I=en(),N;try{N=await an(I)}catch(T){throw Xe(n,"Graph could not load. Check your network connection."),T}if(k)return;let O=null,G=null,H=null;if(I){try{O=(await import(yt)).default??null}catch(T){console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",T),O=null}try{H=await import(wt)}catch(T){console.error("[graph-landing] three unavailable; using default node spheres",T),H=null}try{let T=await import(kt);G=T.UnrealBloomPass?new T.UnrealBloomPass:null}catch(T){console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",T),G=null}}if(!k&&(n.replaceChildren(),w=N(n),n.__graphLanding=w,n.__graphData=C,bn(w,C,v,{use3d:I,root:e,spriteText:O,bloomPass:G,three:H}),I&&!te())){let T=()=>{!w||typeof w.controls!="function"||(w.controls().autoRotate=!1)};n.addEventListener("pointerdown",T,{once:!0}),window.addCleanup(()=>n.removeEventListener("pointerdown",T))}}var wn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(wn,r)}catch(l){console.error("[graph-landing] failed to persist preferred-locale",l)}});document.addEventListener("nav",()=>{yn()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.graph-landing__hero {\n  background: var(--light);\n  height: 100dvh;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 32px);\n  max-width: 248px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: auto;\n  touch-action: pan-y;\n  position: absolute;\n  top: 16px;\n  width: 248px;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  max-width: min(28rem, 100% - 16rem);\n  padding: 1.25rem 1.5rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__check {\n  align-items: center;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-size: 12px;\n  gap: 8px;\n  min-height: 32px;\n}\n\n.graph-landing__check input {\n  accent-color: var(--secondary);\n}\n\n.graph-landing__spacing {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__pills {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  display: inline-flex;\n  overflow: hidden;\n  width: fit-content;\n}\n\n.graph-landing__pill {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.2;\n  min-height: 32px;\n  padding: 6px 10px;\n}\n\n.graph-landing__pill:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__pill:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: -2px;\n  z-index: 1;\n}\n\n.graph-landing__pill[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, transparent);\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__ghosts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.graph-landing__ghost {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  gap: 6px;\n  line-height: 1.2;\n  min-height: 32px;\n  padding: 6px 8px;\n}\n\n.graph-landing__ghost svg {\n  flex-shrink: 0;\n}\n\n.graph-landing__ghost:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__ghost:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__ghost[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--mention {\n  background: var(--gray);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-top: 1px solid var(--lightgray);\n    max-height: 48dvh;\n    top: auto;\n    width: 100%;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__rail {\n    border-radius: 12px;\n    left: 8px;\n    max-height: calc(100dvh - 16px);\n    max-width: none;\n    padding: 10px 12px;\n    right: 8px;\n    top: 8px;\n    width: auto;\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__section-label--tags {\n    display: none;\n  }\n  .graph-landing__filters-toggle {\n    display: inline-flex;\n    min-height: 44px;\n    padding: 8px;\n  }\n  .graph-landing__tag-list {\n    display: none;\n  }\n  .graph-landing__tags[data-open=true] .graph-landing__tag-list {\n    display: flex;\n  }\n  .graph-landing__utils {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .graph-landing__top-right {\n    max-width: calc(100% - 1.5rem);\n    padding: 0.75rem 1rem;\n  }\n}';
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
      previewHint: "\uD074\uB9AD\uD558\uBA74 \uC5F0\uACB0\uC774 \uC5F4\uB9BD\uB2C8\uB2E4",
      previewTagTemplate: "{n}\uAC1C \uB178\uD2B8",
      inspectOpen: "\uBCF8\uBB38 \uC77D\uAE30",
      inspectConnected: "\uC5F0\uACB0",
      inspectClose: "\uB2EB\uAE30",
      inspectEmpty: "\uC9C1\uC811 \uC5F0\uACB0\uB41C \uBCC4\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
      tune: "\uC870\uC728",
      nodeSize: "\uBCC4 \uD06C\uAE30",
      edgeWidth: "\uC120 \uAD75\uAE30",
      coresOnly: "\uD575\uC2EC\uB9CC"
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
    previewHint: "Click to inspect connections",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    tune: "Tune",
    nodeSize: "Star size",
    edgeWidth: "Line weight",
    coresOnly: "Cores only"
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
        "data-preview-tag-template": copy.previewTagTemplate,
        "data-preview-mention": copy.previewMention,
        "data-inspect-read": copy.inspectOpen,
        "data-inspect-connected": copy.inspectConnected,
        "data-inspect-empty": copy.inspectEmpty,
        children: /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
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
                /* @__PURE__ */ u2("div", { class: "graph-landing__tune", children: [
                  /* @__PURE__ */ u2("p", { class: "graph-landing__section-label", children: copy.tune }),
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
                  ] })
                ] }),
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
                /* @__PURE__ */ u2("label", { class: "graph-landing__check", children: [
                  /* @__PURE__ */ u2("input", { type: "checkbox", "data-graph-cores": true }),
                  /* @__PURE__ */ u2("span", { children: copy.coresOnly })
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