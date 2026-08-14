// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var we="0.179.1",vt="https://esm.sh/force-graph@1.51.4",St=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${we}`,Ct=`https://esm.sh/three-spritetext@1.9.2?deps=three@${we}`,Mt=`https://esm.sh/three@${we}`,xt=`https://esm.sh/three@${we}/examples/jsm/postprocessing/UnrealBloomPass.js`,Nt=8,Gt=14,It=6,ne=1,Ce=3.5,Pt=.05,_t=2.6,At=1,Fe=1,Z=.18,Ge="graph-landing:lens",ct="graph-landing:tune",Dt=.18,Ot=1.4,Ht=1.25,Rt=1.15,zt=.55,J={x:330,y:235,z:565},$e={x:0,y:0,z:0},Ue=1.3,Bt=3.2,Ve=1.05,qe=.32,Ke=.28,Ft={wikilink:.3,tag:.22,cooc:.16,folder:.16},We="#a8b0c2",je={min:80,max:200},Ye={min:40,max:110},Xe={min:160,max:280},Ze={min:90,max:170},Je=220,Qe=2,$t=.15,Ut=.8,Vt=350,Me={min:-100,max:-190},xe={min:72,max:116},Ne={min:130,max:260};function qt(e){return be(e-.5,0,1)}function Ie(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function et(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Kt(e){let n=[];for(let o of Object.values(e)){let r=Ie(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let a=r.multilingual,m=a&&typeof a=="object"?a:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:et(r.links),tags:et(r.tags),content:typeof r.content=="string"?r.content:"",multilingual:m})}return n}function Wt(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Je?n:`${n.slice(0,Je).trimEnd()}\\u2026`}function oe(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function tt(e){return oe(e)/(2*Math.PI)}function he(e,n,o){let r=oe(e),u=Math.acos(2*tt(`${e}:phi`)-1),a=n+(o-n)*tt(`${e}:r`);return{x:a*Math.sin(u)*Math.cos(r),y:a*Math.sin(u)*Math.sin(r),z:a*Math.cos(u)}}function lt(e){return e==="index"||e.endsWith("/index")}function ut(e){return e==="tags"||e.startsWith("tags/")}function jt(e){let n=e.multilingual?.translationKey;return n==="home"||n==="graph"}function Yt(e,n){return e.multilingual?.locale?e.multilingual.locale===n.localeId:e.slug.startsWith(`${n.localeId}/`)?!0:!n.prefixes.some(r=>e.slug.startsWith(`${r}/`))&&n.localeId===n.sourceLocale}function be(e,n,o){return Math.min(o,Math.max(n,e))}function nt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function dt(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function ke(e){return dt(e).trim().toLowerCase()}function Xt(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Zt(e){let n=e.trim();return n.length===0||Xt(n)||ut(n)||lt(n)?!0:ke(n).length===0}function Jt(e){return dt(e).replace(/-/g," ")}function Qt(e){let n=new Map,o=new Map;for(let r of e){let u=ke(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let a=r.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,r.slug);let m=a.replace(/\\s+/g,"-");m.length>0&&!o.has(m)&&o.set(m,r.slug)}return{byBasename:n,byTitle:o}}function en(e,n,o){if(n.has(e))return e;let r=ke(e),u=o.byBasename.get(r);if(u)return u;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return a||null}function tn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function nn(e,n){let o=e.filter(c=>lt(c.slug)||ut(c.slug)||jt(c)?!1:Yt(c,n)),r=new Set(o.map(c=>c.slug)),u=Qt(o),a=new Map,m=new Map,w=[],b=new Set,S=new Map,R=c=>{m.set(c,(m.get(c)??0)+1)},D=(c,f,p)=>c<f?`${c}|${f}|${p}`:`${f}|${c}|${p}`,C=(c,f,p,v)=>{let P=D(c,f,p);b.has(P)||(b.add(P),w.push({source:c,target:f,kind:p}),v&&(R(c),R(f)))};for(let c of o)for(let f of c.links){if(Zt(f))continue;let p=en(f,r,u);if(p!==null){p!==c.slug&&C(c.slug,p,"wikilink",!0);continue}let v=`mention:${ke(f)}`;a.has(v)||a.set(v,Jt(f)),C(c.slug,v,"wikilink",!0)}let G=new Set,x=new Map;for(let c of o)for(let f of c.tags){S.set(f,(S.get(f)??0)+1);let p=`tag:${f}`;G.add(p),C(c.slug,p,"tag",!0);let v=x.get(f)??[];v.push(c.slug),x.set(f,v)}for(let c of o)if(!(c.tags.length<2))for(let f=0;f<c.tags.length;f+=1)for(let p=f+1;p<c.tags.length;p+=1)C(`tag:${c.tags[f]}`,`tag:${c.tags[p]}`,"cooc",!1);let O=new Map;for(let c of o){let f=nt(c.slug);if(f==="root")continue;let p=O.get(f)??[];p.push(c.slug),O.set(f,p)}for(let c of O.values()){if(c.length<2)continue;let f=[...c].sort();for(let p=0;p<f.length;p+=1){let v=f[(p+1)%f.length],P=f[(p+Qe)%f.length],L=f[p];L===void 0||v===void 0||(L!==v&&!b.has(D(L,v,"wikilink"))&&C(L,v,"folder",!1),f.length>Qe+1&&P!==void 0&&L!==P&&!b.has(D(L,P,"wikilink"))&&C(L,P,"folder",!1))}}let N=[...m.values()],H=N.length>0?Math.min(...N):0,E=N.length>0?Math.max(...N):0,B=c=>{let f=m.get(c)??0,p=Math.sqrt(f),v=Math.sqrt(H),L=Math.sqrt(E)-v;return L===0?(ne+Ce)/2:ne+(p-v)/L*(Ce-ne)},Te=[...o].sort((c,f)=>(m.get(f.slug)??0)-(m.get(c.slug)??0)),V=new Set(Te.filter(c=>(m.get(c.slug)??0)>0).slice(0,Nt).map(c=>c.slug)),F=o.map(c=>{let f=V.has(c.slug),p=f?he(c.slug,Ye.min,Ye.max):he(c.slug,je.min,je.max);return{id:c.slug,name:c.title,type:"note",val:B(c.slug),degree:m.get(c.slug)??0,isHub:f,tag:"",slug:c.slug,folder:nt(c.slug),tags:c.tags,dominantTag:tn(c.tags,S),excerpt:Wt(c.content),phase:oe(c.slug),x:p.x,y:p.y,z:p.z}});for(let[c,f]of a){let p=he(c,Xe.min,Xe.max);F.push({id:c,name:f,type:"mention",val:B(c)*zt,degree:m.get(c)??0,isHub:!1,tag:"",slug:"",folder:"",tags:[],dominantTag:"",excerpt:"",phase:oe(c),x:p.x,y:p.y,z:p.z})}for(let c of G){let f=c.slice(4),p=he(c,Ze.min,Ze.max);F.push({id:c,name:f,type:"tag",val:be(B(c)*.7,ne,Ce),degree:m.get(c)??0,isHub:!1,tag:f,slug:`tags/${f}`,folder:"tag",tags:[f],dominantTag:f,excerpt:"",phase:oe(c),x:p.x,y:p.y,z:p.z})}return{nodes:F,links:w}}function rn(e){let n=new Map,o=(r,u)=>{let a=n.get(r)??new Set;a.add(u),n.set(r,a)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag")continue;let u=M(r.source),a=M(r.target);o(u,a),o(a,u)}return n}function M(e){return typeof e=="string"?e:e.id}function Q(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function gt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Q("--light","#ffffff"),ink:Q("--darkgray","#0f0f0f"),accent:Q("--secondary","#a52142"),tertiary:Q("--tertiary","#c75b75"),gray:Q("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function se(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function on(){return window.matchMedia("(pointer: fine)").matches}function sn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function an(){return on()&&sn()&&window.innerWidth>700&&!se()}function A(){return document.documentElement.getAttribute("saved-theme")==="dark"}function ye(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function ee(e,n){let o=ye(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function re(e,n,o){let r=ye(e),u=ye(n);if(!r||!u)return e;let a=(m,w)=>Math.round(m+(w-m)*o);return`rgb(${a(r.r,u.r)}, ${a(r.g,u.g)}, ${a(r.b,u.b)})`}function ft(e){return A()?re(e.bg,"#05070f",.88):e.bg}function cn(e){let n=ye(e);if(!n)return e;let o=r=>{let u=r/255,a=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function ln(e){return cn(ft(e))}function mt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function rt(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:mt(e,[n.accent,n.tertiary,n.ink,n.gray])}function un(e,n){return e.length===0?n.ink:mt(e,[n.accent,n.tertiary])}function pt(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function dn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=pt(e);window.location.assign(n.toString())}function gn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function ot(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function fn(e){let o=await import(e?St:vt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):gn(o)}function mn(){try{let e=sessionStorage.getItem(Ge);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function pn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1,coresOnly:!1};try{sessionStorage.getItem(Ge)==="hub"&&(e.coresOnly=!0);let n=sessionStorage.getItem(ct);if(!n)return e;let o=Ie(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.zoom=="number"?o.zoom:e.zoom,m=typeof o.spread=="number"?o.spread:e.spread,w=typeof o.coresOnly=="boolean"?o.coresOnly:e.coresOnly;return{nodeScale:r,edgeScale:u,zoom:a,spread:m,coresOnly:w}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function te(e){try{sessionStorage.setItem(ct,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function st(e){try{sessionStorage.setItem(Ge,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function hn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function bn(e,n){let o=e.nodes.filter(u=>u.type==="note").sort((u,a)=>a.degree-u.degree).slice(0,It),r=new Set;for(let u of o){r.add(u.id);for(let a of n.get(u.id)??[])r.add(a)}return r}function yn(e,n){return{nodes:e.nodes.filter(o=>n.has(o.id)),links:e.links.filter(o=>n.has(M(o.source))&&n.has(M(o.target)))}}function wn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function at(e,n){let o=M(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function kn(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return u.forEach((a,m)=>{let w=Math.PI*2*m/Math.max(u.length,1),b={x:Math.cos(w)*o,y:Math.sin(w)*o,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===a&&r.set(S.id,b)}),r}if(n==="tag"){let u=e.nodes.filter(m=>m.type==="tag"),a=new Map;u.forEach((m,w)=>{let b=Math.PI*2*w/Math.max(u.length,1);a.set(m.tag,{x:Math.cos(b)*o,y:Math.sin(b)*o,z:0})});for(let m of e.nodes)if(m.type==="tag"){let w=a.get(m.tag);w&&r.set(m.id,w)}else if(m.dominantTag.length>0){let w=a.get(m.dominantTag);w&&r.set(m.id,w)}}return r}function Tn(e,n){let o=[],r=u=>{let a=n*u;for(let m of o){let w=e(m);w&&(m.vx=(m.vx??0)+(w.x-(m.x??0))*a,m.vy=(m.vy??0)+(w.y-(m.y??0))*a,m.vz=(m.vz??0)+(w.z-(m.z??0))*a)}};return r.initialize=u=>{o=u},r}function it(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let a=u.getAttribute(r);u.setAttribute("aria-pressed",a===o?"true":"false")}}function En(e,n,o,r){let u=rn(n.links),a={lens:mn(),allLabels:!1,focusTag:null},m=null,w=null,b=pn(),S=()=>w??m,R=new Set(n.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,Gt).map(t=>t.id)),D=t=>{let s=t.val;return t.isHub&&(s*=Ot),a.lens==="tag"&&t.type==="tag"&&(s*=Ht),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Rt),s},C=t=>{let s=S();return a.allLabels||s===t.id||s!==null&&(u.get(s)?.has(t.id)??!1)?!0:R.has(t.id)},G=t=>{let s=be((D(t)-ne)/5,0,1);return(Ue+s*(Bt-Ue))*b.nodeScale},x=t=>{let s=S();if(s!==null)return s===t||(u.get(s)?.has(t)??!1);if(a.focusTag===null)return!0;let l=n.nodes.find(i=>i.id===t);return l?wn(l,a.focusTag):!1},O=t=>t.type==="mention"?o.current.gray:a.lens==="tag"?t.type==="tag"?o.current.tertiary:un(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:rt(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,N=t=>{let s=S();if(s!==null&&(s===t.id||(u.get(s)?.has(t.id)??!1)))return o.current.accent;let l=O(t);return x(t.id)?A()?t.type==="mention"?l:t.type==="tag"?re(o.current.tertiary,"#ffffff",.22):t.isHub?re("#fff3e4",o.current.accent,.1):re("#ffffff",o.current.accent,.12):l:ee(l,Z)},H=t=>{let s=A();return t==="wikilink"?.34:t==="tag"?s?.22:.2:s?.12:.11},E=t=>{let s=M(t.source),l=M(t.target),i=S();return i!==null&&(s===i||l===i)?A()?.72:.62:(i!==null||a.focusTag!==null)&&(!x(s)||!x(l))?H(t.kind)*Z:H(t.kind)},B=t=>{let s=M(t.source),l=M(t.target),i=S();return i!==null&&(s===i||l===i)?re(o.current.accent,We,.45):A()?We:o.current.gray},Te=t=>ee(B(t),E(t)),V=()=>b.coresOnly?yn(n,bn(n,u)):n,F=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(J.x,J.y,J.z),l=s/be(b.zoom,.4,2.5),i=e.cameraPosition(),d=J,h=s;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let g=Math.hypot(i.x,i.y,i.z);g>1&&(d={x:i.x,y:i.y,z:i.z},h=g)}let y=l/h;e.cameraPosition({x:d.x*y,y:d.y*y,z:d.z*y},$e,t);return}typeof e.zoom=="function"&&e.zoom(b.zoom,t)},c=()=>{let t=qt(b.spread),s=Me.min+t*(Me.max-Me.min),l=xe.min+t*(xe.max-xe.min),i=e.d3Force("charge");i?.strength&&i.strength(s);let d=e.d3Force("link");d?.distance&&d.distance(T=>a.lens==="tag"&&T.kind==="tag"?l*.72:l),d?.strength&&d.strength(T=>{if(T.kind==="cooc"||T.kind==="folder")return .04;if(a.lens==="tag"&&T.kind==="tag")return .95;if(a.lens==="folder"){let _=at(n.nodes,T.source),I=at(n.nodes,T.target);if(_!==null&&_===I)return .72}return T.kind==="tag"?.65:.8});let h=e.d3Force("center");h?.strength&&h.strength(Pt);let y=Ne.min+t*(Ne.max-Ne.min),g=kn(n,a.lens,y),k=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",Tn(T=>g.get(T.id)??null,k)),r.use3d&&e.d3Force("flattenZ",null)},f=new Map,p=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,s=r.three;f.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(l=>{let i=G(l),d=N(l),h=!1;if(s)if(A()){let T=l.isHub?1.35:1.1,_=new s.MeshLambertMaterial({color:d,emissive:d,emissiveIntensity:T});f.set(l.id,{material:_,base:T,phase:l.phase}),h=new s.Mesh(new s.SphereGeometry(i,14,14),_)}else h=new s.Mesh(new s.SphereGeometry(i,14,14),new s.MeshBasicMaterial({color:d}));if(!C(l)||!t)return h;let y=new t(l.name),g=A()?"rgba(255, 255, 255, 0.85)":o.current.ink;if(y.color=x(l.id)?g:ee(g,Z),y.fontWeight="400",y.strokeWidth=0,y.textHeight=R.has(l.id)?6.5:5.5,y.center.set(0,.5),y.position.x=i+2,y.position.y=0,!s||h===!1)return y;let k=new s.Group;return k.add(h),k.add(y),k})},v=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(l=>{let i=Ft[l.kind]*b.edgeScale,d=new t.MeshBasicMaterial({color:B(l),transparent:!0,opacity:E(l),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),d)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,i)=>{let d=i.end.x-i.start.x,h=i.end.y-i.start.y,y=i.end.z-i.start.z,g=Math.sqrt(d*d+h*h+y*y);return l.position.x=(i.start.x+i.end.x)/2,l.position.y=(i.start.y+i.end.y)/2,l.position.z=(i.start.z+i.end.z)/2,l.scale.x=1,l.scale.y=Math.max(g,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(s,new t.Vector3(d,h,y).normalize()),!0})},P=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=S();if(s===null)return 0;let l=M(t.source),i=M(t.target);return l===s||i===s?2:0})},L=()=>{e.nodeVal(D),e.nodeColor(N),e.linkColor(Te),e.linkWidth(t=>{let s=M(t.source),l=M(t.target),i=S(),d=b.edgeScale;return i!==null&&(s===i||l===i)?.7*d:t.kind==="wikilink"?.5*d:(t.kind==="tag"?.35:.25)*d}),typeof e.linkOpacity=="function"&&e.linkOpacity(Fe),P(),v(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},Ee=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(h,y)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let k=document.createElement("span");k.className="graph-landing__dot",k.setAttribute("aria-hidden","true"),k.style.background=h;let T=document.createElement("span");return T.textContent=y,g.append(k,T),g};if(a.lens==="folder"){let h=[...new Set(n.nodes.filter(g=>g.type==="note").map(g=>g.folder))],y=r.root.dataset.folderRootLabel??"root";t.replaceChildren(...h.map(g=>s(rt(g,o.current),g==="root"?y:g)));return}let l=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",d=r.root.dataset.legendMentions??"Mentions";t.replaceChildren(s(o.current.ink,l),s(o.current.tertiary,i),s(o.current.gray,d))},ht=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=n.nodes.filter(d=>d.type==="tag").sort((d,h)=>h.degree-d.degree).slice(0,16),l=r.root.querySelector(".graph-landing__tags");l instanceof HTMLElement&&(l.hidden=s.length===0);let i=s.map(d=>{let h=document.createElement("li"),y=document.createElement("button");y.type="button",y.className="graph-landing__tag-item",y.dataset.graphTag=d.tag,y.setAttribute("aria-pressed",a.focusTag===d.tag?"true":"false");let g=document.createElement("span");g.textContent=d.tag;let k=document.createElement("span");return k.className="graph-landing__tag-count",k.textContent=String(d.degree),y.append(g,k),h.append(y),h});t.replaceChildren(...i)},ae=()=>{e.graphData(V()),c(),L(),p(),Ee(),it(r.root,"[data-graph-lens]",a.lens,"data-graph-lens");for(let t of r.root.querySelectorAll("[data-graph-tag]"))t instanceof HTMLElement&&t.setAttribute("aria-pressed",t.dataset.graphTag===a.focusTag?"true":"false");e.d3ReheatSimulation()},bt=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),st(t),ae()},yt=t=>{a.focusTag=a.focusTag===t?null:t,a.focusTag&&(a.lens="tag",st("tag")),ae()},Pe=()=>r.use3d?ln(o.current):ft(o.current);e.graphData(V()),e.backgroundColor(Pe()),e.nodeLabel(t=>t.name),e.nodeRelSize(_t),typeof e.nodeOpacity=="function"&&e.nodeOpacity(At),typeof e.linkOpacity=="function"&&e.linkOpacity(Fe),c(),L();let $=r.root.querySelector("[data-graph-preview]"),ie=r.root.querySelector("[data-graph-preview-chip]"),ce=r.root.querySelector("[data-graph-preview-title]"),le=r.root.querySelector("[data-graph-preview-excerpt]"),ue=0;window.addCleanup(()=>window.clearTimeout(ue));let wt=t=>{if(!($ instanceof HTMLElement)||!(ie instanceof HTMLElement)||!(ce instanceof HTMLElement)||!(le instanceof HTMLElement))return;window.clearTimeout(ue);let s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendMentions??"Mentions";if(t.type==="tag"){let d=r.root.dataset.previewTagTemplate??"{n} notes";ie.textContent=l,ce.textContent=`#${t.tag}`,le.textContent=d.replace("{n}",String(t.degree))}else t.type==="mention"?(ie.textContent=i,ce.textContent=t.name,le.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(ie.textContent=s,ce.textContent=t.name,le.textContent=t.excerpt);$.hidden=!1,$.dataset.visible="true"},_e=()=>{$ instanceof HTMLElement&&(window.clearTimeout(ue),ue=window.setTimeout(()=>{$.dataset.visible="false",$.hidden=!0},Vt))};if(e.onNodeHover(t=>{m=t?t.id:null,w===null&&(t?wt(t):_e()),L(),r.use3d&&p()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!se()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=Dt;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=A()?Ve:0,r.bloomPass.radius=qe,r.bloomPass.threshold=Ke,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(J,$e),b.zoom!==1&&F(0)),p(),!se()){let t=0,s=()=>{let l=performance.now()/1e3*Ut;for(let i of f.values())i.material.emissiveIntensity=i.base*(1+$t*Math.sin(l+i.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,l)=>{let i=G(t),d=t.x??0,h=t.y??0;if(s.save(),s.beginPath(),s.arc(d,h,i,0,Math.PI*2),s.fillStyle=N(t),s.fill(),t.isHub&&(s.strokeStyle=x(t.id)?o.current.accent:ee(o.current.accent,Z),s.lineWidth=1.2/l,s.stroke()),C(t)){let y=11.5/l;s.font=`${y}px ${o.current.font}`,s.fillStyle=x(t.id)?o.current.ink:ee(o.current.ink,Z),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,d,h-i-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,l)=>{let i=G(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,i,0,Math.PI*2),l.fillStyle=s,l.fill()});let de=r.root.querySelector("[data-graph-inspect]"),ge=r.root.querySelector("[data-graph-inspect-chip]"),fe=r.root.querySelector("[data-graph-inspect-title]"),me=r.root.querySelector("[data-graph-inspect-excerpt]"),Le=r.root.querySelector("[data-graph-inspect-tags]"),ve=r.root.querySelector("[data-graph-inspect-connected]"),q=r.root.querySelector("[data-graph-inspect-open]"),Ae=t=>{se()||typeof e.controls!="function"||(e.controls().autoRotate=t)},kt=t=>{let s=u.get(t.id)??new Set,l=[];for(let i of s){let d=n.nodes.find(h=>h.id===i);d&&l.push(d)}return l.sort((i,d)=>d.degree-i.degree)},Tt=t=>{if(!(de instanceof HTMLElement)||!(ge instanceof HTMLElement)||!(fe instanceof HTMLElement)||!(me instanceof HTMLElement)||!(Le instanceof HTMLElement)||!(ve instanceof HTMLElement))return;let s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendMentions??"Mentions",d=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(ge.textContent=l,fe.textContent=`#${t.tag}`,me.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="mention"?(ge.textContent=i,fe.textContent=t.name,me.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(ge.textContent=s,fe.textContent=t.name,me.textContent=t.excerpt);let h=t.tags.map(g=>{let k=document.createElement("li");return k.textContent=g,k});Le.replaceChildren(...h),Le.hidden=h.length===0;let y=kt(t).slice(0,12);if(y.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=d,ve.replaceChildren(g)}else ve.replaceChildren(...y.map(g=>{let k=document.createElement("li"),T=document.createElement("button");T.type="button",T.className="graph-landing__inspect-link",T.dataset.graphInspectId=g.id;let _=g.type==="tag"?l:g.type==="mention"?i:s,I=document.createElement("span");I.textContent=_;let z=document.createElement("strong");return z.textContent=g.type==="tag"?`#${g.tag}`:g.name,T.append(I,z),k.append(T),k}));q instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(q.hidden=!1,q.href=pt(t.slug).toString()):(q.hidden=!0,q.removeAttribute("href"))),de.hidden=!1,r.root.dataset.inspecting="true",_e()},pe=()=>{w=null,de instanceof HTMLElement&&(de.hidden=!0),r.root.dataset.inspecting="false",Ae(!0),L(),r.use3d&&p()},De=t=>{if(w===t.id&&t.type==="note"&&t.slug.length>0){dn(t.slug);return}w=t.id,Ae(!1),Tt(t),L(),r.use3d&&p()},Oe=t=>{De(t)},Se=!1;e.onNodeClick((t,s)=>{t&&(Se=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Oe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{pe()});let U=r.root.querySelector("#graph-landing-mount");if(U instanceof HTMLElement){let t=null,s=d=>{t={x:d.clientX,y:d.clientY}},l=(d,h)=>{if(typeof e.graph2ScreenCoords!="function")return null;let y=U.getBoundingClientRect(),g=d-y.left,k=h-y.top,T=null,_=4096;for(let I of V().nodes){if(I.x===void 0||I.y===void 0)continue;let z=e.graph2ScreenCoords(I.x,I.y,I.z??0),Et=(z.x-g)**2+(z.y-k)**2,Lt=(z.x-d)**2+(z.y-h)**2,Be=Math.min(Et,Lt);Be<_&&(_=Be,T=I)}return T},i=d=>{let h=t;t=null,!(!h||(d.clientX-h.x)**2+(d.clientY-h.y)**2>25)&&window.setTimeout(()=>{if(Se){Se=!1;return}let g=l(d.clientX,d.clientY);g?Oe(g):pe()},0)};U.addEventListener("pointerdown",s,!0),U.addEventListener("pointerup",i,!0),window.addCleanup(()=>{U.removeEventListener("pointerdown",s,!0),U.removeEventListener("pointerup",i,!0)})}it(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),Ee(),ht(),a.lens!=="all"&&ae(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let He=()=>{o.current=gt(),e.backgroundColor(Pe()),r.bloomPass&&(r.bloomPass.strength=A()?Ve:0,r.bloomPass.radius=qe,r.bloomPass.threshold=Ke),L(),p(),Ee()};document.addEventListener("themechange",He),window.addCleanup(()=>document.removeEventListener("themechange",He));let Re=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){pe();return}let l=s.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let g=n.nodes.find(k=>k.id===l.dataset.graphInspectId);g&&De(g);return}let i=s.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&hn(i.dataset.graphLens)){bt(i.dataset.graphLens);return}let d=s.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){yt(d.dataset.graphTag);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let h=s.closest("[data-graph-labels]");if(h instanceof HTMLButtonElement){a.allLabels=!a.allLabels,h.setAttribute("aria-pressed",a.allLabels?"true":"false");let g=h.dataset.labelShow??"Labels",k=h.dataset.labelHide??"Labels",T=a.allLabels?k:g;h.title=T,h.setAttribute("aria-label",T),p();return}if(s.closest("[data-graph-theme]")){let g=A()?"light":"dark";document.documentElement.setAttribute("saved-theme",g),localStorage.setItem("theme",g),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${g}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:g}}));return}let y=s.closest("[data-graph-tags-toggle]");if(y instanceof HTMLButtonElement){let g=r.root.querySelector(".graph-landing__tags");if(g instanceof HTMLElement){let k=g.dataset.open==="true";g.dataset.open=k?"false":"true",y.setAttribute("aria-expanded",k?"false":"true")}}},K=r.root.querySelector("[data-graph-node-scale]"),W=r.root.querySelector("[data-graph-edge-scale]"),j=r.root.querySelector("[data-graph-cores]");if(K instanceof HTMLInputElement){K.value=String(Math.round(b.nodeScale*100));let t=()=>{b.nodeScale=Number(K.value)/100,te(b),L(),r.use3d&&p()};K.addEventListener("input",t),window.addCleanup(()=>K.removeEventListener("input",t))}if(W instanceof HTMLInputElement){W.value=String(Math.round(b.edgeScale*100));let t=()=>{b.edgeScale=Number(W.value)/100,te(b),L()};W.addEventListener("input",t),window.addCleanup(()=>W.removeEventListener("input",t))}if(j instanceof HTMLInputElement){j.checked=b.coresOnly;let t=()=>{b.coresOnly=j.checked,te(b),ae()};j.addEventListener("change",t),window.addCleanup(()=>j.removeEventListener("change",t))}let Y=r.root.querySelector("[data-graph-zoom]");if(Y instanceof HTMLInputElement){Y.value=String(Math.round(b.zoom*100));let t=()=>{b.zoom=Number(Y.value)/100,te(b),F(200)};Y.addEventListener("input",t),window.addCleanup(()=>Y.removeEventListener("input",t))}let X=r.root.querySelector("[data-graph-spread]");if(X instanceof HTMLInputElement){X.value=String(Math.round(b.spread*100));let t=()=>{b.spread=Number(X.value)/100,te(b),c(),e.d3ReheatSimulation()};X.addEventListener("input",t),window.addCleanup(()=>X.removeEventListener("input",t))}r.root.addEventListener("click",Re),window.addCleanup(()=>r.root.removeEventListener("click",Re));let ze=t=>{t.key==="Escape"&&pe()};window.addEventListener("keydown",ze),window.addCleanup(()=>window.removeEventListener("keydown",ze))}async function Ln(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelector("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),m=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",w=!1,b=null,S={current:gt()},R=()=>{w=!0,b&&(b._destructor(),b=null),delete e.dataset.graphReady};window.addCleanup(R);let D;try{D=Ie(await fetchData)}catch(E){throw ot(n,"Graph could not load content index."),E}if(w)return;let C=nn(Kt(D),{localeId:r,sourceLocale:u,prefixes:a});o&&(o.textContent=m.replace("{n}",String(C.nodes.length)).replace("{m}",String(C.links.length)));let G=an(),x;try{x=await fn(G)}catch(E){throw ot(n,"Graph could not load. Check your network connection."),E}if(w)return;let O=null,N=null,H=null;if(G){try{O=(await import(Ct)).default??null}catch(E){console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),O=null}try{H=await import(Mt)}catch(E){console.error("[graph-landing] three unavailable; using default node spheres",E),H=null}try{let E=await import(xt);N=E.UnrealBloomPass?new E.UnrealBloomPass:null}catch(E){console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),N=null}}if(!w&&(n.replaceChildren(),b=x(n),n.__graphLanding=b,n.__graphData=C,En(b,C,S,{use3d:G,root:e,spriteText:O,bloomPass:N,three:H}),G&&!se())){let E=()=>{!b||typeof b.controls!="function"||(b.controls().autoRotate=!1)};n.addEventListener("pointerdown",E,{once:!0}),window.addCleanup(()=>n.removeEventListener("pointerdown",E))}}var vn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(vn,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{Ln()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.graph-landing__hero {\n  background: var(--light);\n  height: 100dvh;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 32px);\n  max-width: 248px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: auto;\n  touch-action: pan-y;\n  position: absolute;\n  top: 16px;\n  width: 248px;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  max-width: min(28rem, 100% - 16rem);\n  padding: 1.25rem 1.5rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__check {\n  align-items: center;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-size: 12px;\n  gap: 8px;\n  min-height: 32px;\n}\n\n.graph-landing__check input {\n  accent-color: var(--secondary);\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--mention {\n  background: var(--gray);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-top: 1px solid var(--lightgray);\n    max-height: 48dvh;\n    top: auto;\n    width: 100%;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__rail {\n    border-radius: 12px;\n    left: 8px;\n    max-height: calc(100dvh - 16px);\n    max-width: none;\n    padding: 10px 12px;\n    right: 8px;\n    top: 8px;\n    width: auto;\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__section-label--tags {\n    display: none;\n  }\n  .graph-landing__filters-toggle {\n    display: inline-flex;\n    min-height: 44px;\n    padding: 8px;\n  }\n  .graph-landing__tag-list {\n    display: none;\n  }\n  .graph-landing__tags[data-open=true] .graph-landing__tag-list {\n    display: flex;\n  }\n  .graph-landing__utils {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .graph-landing__top-right {\n    max-width: calc(100% - 1.5rem);\n    padding: 0.75rem 1rem;\n  }\n}';
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
      zoom: "\uC90C",
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
                  ] })
                ] }),
                /* @__PURE__ */ u2("label", { class: "graph-landing__check", children: [
                  /* @__PURE__ */ u2("input", { type: "checkbox", "data-graph-cores": true }),
                  /* @__PURE__ */ u2("span", { children: copy.coresOnly })
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