// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Ee="0.179.1",Mt="https://esm.sh/force-graph@1.51.4",Nt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ee}`,Pt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ee}`,_t=`https://esm.sh/three@${Ee}`,It=`https://esm.sh/three@${Ee}/examples/jsm/postprocessing/UnrealBloomPass.js`,Gt=8,At=14;var re=1,xe=3.5,Ht=.05,Dt=2.6,Rt=1,Ve=1,Q=.18,ut="graph-landing:lens",dt="graph-landing:tune",Ot=.18,Ft=1.4,zt=1.25,Bt=1.15,$t=.55,ee={x:330,y:235,z:565},qe={x:0,y:0,z:0},Ke=1.3,Ut=3.2,We=1.05,je=.32,Ye=.28,Vt={wikilink:.3,tag:.22,cooc:.16,folder:.16},Xe="#a8b0c2",Ze={min:80,max:200},Je={min:40,max:110},Qe={min:160,max:280},et={min:90,max:170},tt=220,nt=2,qt=.15,Kt=.8,Wt=350,Me={min:-100,max:-190},Ne={min:72,max:116},Pe={min:130,max:260};function jt(e){return ke(e-.5,0,1)}function Ge(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function rt(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Yt(e){let n=[];for(let o of Object.values(e)){let r=Ge(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let a=r.multilingual,b=a&&typeof a=="object"?a:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:rt(r.links),tags:rt(r.tags),content:typeof r.content=="string"?r.content:"",multilingual:b})}return n}function Xt(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=tt?n:`${n.slice(0,tt).trimEnd()}\\u2026`}function se(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function ot(e){return se(e)/(2*Math.PI)}function ye(e,n,o){let r=se(e),u=Math.acos(2*ot(`${e}:phi`)-1),a=n+(o-n)*ot(`${e}:r`);return{x:a*Math.sin(u)*Math.cos(r),y:a*Math.sin(u)*Math.sin(r),z:a*Math.cos(u)}}function gt(e){return e==="index"||e.endsWith("/index")}function ft(e){return e==="tags"||e.startsWith("tags/")}function Zt(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function mt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function _e(e,n){return e.multilingual?.locale?e.multilingual.locale:mt(e.slug,n).locale}function Jt(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${mt(e.slug,n).permalink}`}function Qt(e,n){let o=e.find(r=>_e(r,n.prefixes)===n.localeId)??e.find(r=>_e(r,n.prefixes)===n.sourceLocale)??e.find(r=>_e(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function ke(e,n,o){return Math.min(o,Math.max(n,e))}function st(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function pt(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function Le(e){return pt(e).trim().toLowerCase()}function en(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function tn(e){let n=e.trim();return n.length===0||en(n)||ft(n)||gt(n)?!0:Le(n).length===0}function nn(e){return pt(e).replace(/-/g," ")}function rn(e){let n=new Map,o=new Map;for(let r of e){let u=Le(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let a=r.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,r.slug);let b=a.replace(/\\s+/g,"-");b.length>0&&!o.has(b)&&o.set(b,r.slug)}return{byBasename:n,byTitle:o}}function on(e,n,o){if(n.has(e))return e;let r=Le(e),u=o.byBasename.get(r);if(u)return u;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return a||null}function sn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function an(e,n){let o=e.filter(i=>!gt(i.slug)&&!ft(i.slug)&&!Zt(i)),r=new Map;for(let i of o){let g=Jt(i,n.prefixes),h=r.get(g)??[];h.push(i),r.set(g,h)}let u=[];for(let i of r.values())u.push(Qt(i,n));let a=new Set(u.map(i=>i.slug)),b=rn(u),T=new Map,p=new Map,v=[],A=new Set,C=new Map,F=i=>{p.set(i,(p.get(i)??0)+1)},H=(i,g,h)=>i<g?`${i}|${g}|${h}`:`${g}|${i}|${h}`,S=(i,g,h,L)=>{let N=H(i,g,h);A.has(N)||(A.add(N),v.push({source:i,target:g,kind:h}),L&&(F(i),F(g)))};for(let i of u)for(let g of i.links){if(tn(g))continue;let h=on(g,a,b);if(h!==null){h!==i.slug&&S(i.slug,h,"wikilink",!0);continue}let L=`mention:${Le(g)}`;T.has(L)||T.set(L,nn(g)),S(i.slug,L,"wikilink",!0)}let U=new Set,D=new Map;for(let i of u)for(let g of i.tags){C.set(g,(C.get(g)??0)+1);let h=`tag:${g}`;U.add(h),S(i.slug,h,"tag",!0);let L=D.get(g)??[];L.push(i.slug),D.set(g,L)}for(let i of u)if(!(i.tags.length<2))for(let g=0;g<i.tags.length;g+=1)for(let h=g+1;h<i.tags.length;h+=1)S(`tag:${i.tags[g]}`,`tag:${i.tags[h]}`,"cooc",!1);let P=new Map;for(let i of u){let g=st(i.slug);if(g==="root")continue;let h=P.get(g)??[];h.push(i.slug),P.set(g,h)}for(let i of P.values()){if(i.length<2)continue;let g=[...i].sort();for(let h=0;h<g.length;h+=1){let L=g[(h+1)%g.length],N=g[(h+nt)%g.length],x=g[h];x===void 0||L===void 0||(x!==L&&!A.has(H(x,L,"wikilink"))&&S(x,L,"folder",!1),g.length>nt+1&&N!==void 0&&x!==N&&!A.has(H(x,N,"wikilink"))&&S(x,N,"folder",!1))}}let R=[...p.values()],z=R.length>0?Math.min(...R):0,W=R.length>0?Math.max(...R):0,O=i=>{let g=p.get(i)??0,h=Math.sqrt(g),L=Math.sqrt(z),x=Math.sqrt(W)-L;return x===0?(re+xe)/2:re+(h-L)/x*(xe-re)},V=[...u].sort((i,g)=>(p.get(g.slug)??0)-(p.get(i.slug)??0)),E=new Set(V.filter(i=>(p.get(i.slug)??0)>0).slice(0,Gt).map(i=>i.slug)),B=u.map(i=>{let g=E.has(i.slug),h=g?ye(i.slug,Je.min,Je.max):ye(i.slug,Ze.min,Ze.max);return{id:i.slug,name:i.title,type:"note",val:O(i.slug),degree:p.get(i.slug)??0,isHub:g,tag:"",slug:i.slug,folder:st(i.slug),tags:i.tags,dominantTag:sn(i.tags,C),excerpt:Xt(i.content),phase:se(i.slug),x:h.x,y:h.y,z:h.z}});for(let[i,g]of T){let h=ye(i,Qe.min,Qe.max);B.push({id:i,name:g,type:"mention",val:O(i)*$t,degree:p.get(i)??0,isHub:!1,tag:"",slug:"",folder:"",tags:[],dominantTag:"",excerpt:"",phase:se(i),x:h.x,y:h.y,z:h.z})}for(let i of U){let g=i.slice(4),h=ye(i,et.min,et.max);B.push({id:i,name:g,type:"tag",val:ke(O(i)*.7,re,xe),degree:p.get(i)??0,isHub:!1,tag:g,slug:`tags/${g}`,folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:se(i),x:h.x,y:h.y,z:h.z})}return{nodes:B,links:v}}function ln(e){let n=new Map,o=(r,u)=>{let a=n.get(r)??new Set;a.add(u),n.set(r,a)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag")continue;let u=I(r.source),a=I(r.target);o(u,a),o(a,u)}return n}function I(e){return typeof e=="string"?e:e.id}function te(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function ht(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:te("--light","#ffffff"),ink:te("--darkgray","#0f0f0f"),accent:te("--secondary","#a52142"),tertiary:te("--tertiary","#c75b75"),gray:te("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function ae(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function cn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function un(){return cn()&&!ae()}function G(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Te(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function ne(e,n){let o=Te(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function oe(e,n,o){let r=Te(e),u=Te(n);if(!r||!u)return e;let a=(b,T)=>Math.round(b+(T-b)*o);return`rgb(${a(r.r,u.r)}, ${a(r.g,u.g)}, ${a(r.b,u.b)})`}function bt(e){return G()?oe(e.bg,"#05070f",.88):e.bg}function dn(e){let n=Te(e);if(!n)return e;let o=r=>{let u=r/255,a=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function gn(e){return dn(bt(e))}function yt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function at(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:yt(e,[n.accent,n.tertiary,n.ink,n.gray])}function fn(e,n){return e.length===0?n.ink:yt(e,[n.accent,n.tertiary])}function wt(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function mn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=wt(e);window.location.assign(n.toString())}function pn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function it(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function hn(e){let o=await import(e?Nt:Mt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):pn(o)}function bn(){try{let e=sessionStorage.getItem(ut);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function yn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(dt);if(!n)return e;let o=Ge(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.zoom=="number"?o.zoom:e.zoom,b=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:a,spread:b}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function we(e){try{sessionStorage.setItem(dt,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Ie(e){try{sessionStorage.setItem(ut,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function wn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function kn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Tn(e,n){return e.type==="note"&&e.folder===n}function lt(e,n){let o=I(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function En(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return u.forEach((a,b)=>{let T=Math.PI*2*b/Math.max(u.length,1),p={x:Math.cos(T)*o,y:Math.sin(T)*o,z:0};for(let v of e.nodes)v.type==="note"&&v.folder===a&&r.set(v.id,p)}),r}if(n==="tag"){let u=e.nodes.filter(b=>b.type==="tag"),a=new Map;u.forEach((b,T)=>{let p=Math.PI*2*T/Math.max(u.length,1);a.set(b.tag,{x:Math.cos(p)*o,y:Math.sin(p)*o,z:0})});for(let b of e.nodes)if(b.type==="tag"){let T=a.get(b.tag);T&&r.set(b.id,T)}else if(b.dominantTag.length>0){let T=a.get(b.dominantTag);T&&r.set(b.id,T)}}return r}function Ln(e,n){let o=[],r=u=>{let a=n*u;for(let b of o){let T=e(b);T&&(b.vx=(b.vx??0)+(T.x-(b.x??0))*a,b.vy=(b.vy??0)+(T.y-(b.y??0))*a,b.vz=(b.vz??0)+(T.z-(b.z??0))*a)}};return r.initialize=u=>{o=u},r}function ct(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let a=u.getAttribute(r);u.setAttribute("aria-pressed",a===o?"true":"false")}}function vn(e,n,o,r){let u=ln(n.links),a={lens:bn(),allLabels:!1,focusTag:null,focusFolder:null},b=null,T=null,p=yn(),v=()=>T??b,A=new Set(n.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,At).map(t=>t.id)),C=t=>{let s=t.val;return t.isHub&&(s*=Ft),a.lens==="tag"&&t.type==="tag"&&(s*=zt),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Bt),s},F=t=>{let s=v();return a.allLabels||s===t.id||s!==null&&(u.get(s)?.has(t.id)??!1)?!0:A.has(t.id)},H=t=>{let s=ke((C(t)-re)/5,0,1);return(Ke+s*(Ut-Ke))*p.nodeScale},S=t=>{let s=v();if(s!==null)return s===t||(u.get(s)?.has(t)??!1);if(a.focusTag===null&&a.focusFolder===null)return!0;let c=n.nodes.find(l=>l.id===t);return c?a.focusFolder!==null?Tn(c,a.focusFolder):a.focusTag!==null&&kn(c,a.focusTag):!1},U=t=>t.type==="mention"?o.current.gray:a.lens==="tag"?t.type==="tag"?o.current.tertiary:fn(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:at(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,D=t=>{let s=v();if(s!==null&&(s===t.id||(u.get(s)?.has(t.id)??!1)))return o.current.accent;let c=U(t);return S(t.id)?G()?t.type==="mention"?c:t.type==="tag"?oe(o.current.tertiary,"#ffffff",.22):t.isHub?oe("#fff3e4",o.current.accent,.1):oe("#ffffff",o.current.accent,.12):c:ne(c,Q)},P=t=>{let s=G();return t==="wikilink"?.34:t==="tag"?s?.22:.2:s?.12:.11},R=t=>{let s=I(t.source),c=I(t.target),l=v();return l!==null&&(s===l||c===l)?G()?.72:.62:(l!==null||a.focusTag!==null||a.focusFolder!==null)&&(!S(s)||!S(c))?P(t.kind)*Q:P(t.kind)},z=t=>{let s=I(t.source),c=I(t.target),l=v();return l!==null&&(s===l||c===l)?oe(o.current.accent,Xe,.45):G()?Xe:o.current.gray},W=t=>ne(z(t),R(t)),O=()=>n,V=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(ee.x,ee.y,ee.z),c=s/ke(p.zoom,.4,2.5),l=e.cameraPosition(),d=ee,f=s;if(l&&typeof l.x=="number"&&typeof l.y=="number"&&typeof l.z=="number"){let m=Math.hypot(l.x,l.y,l.z);m>1&&(d={x:l.x,y:l.y,z:l.z},f=m)}let y=c/f;e.cameraPosition({x:d.x*y,y:d.y*y,z:d.z*y},qe,t);return}typeof e.zoom=="function"&&e.zoom(p.zoom,t)},E=()=>{let t=jt(p.spread),s=Me.min+t*(Me.max-Me.min),c=Ne.min+t*(Ne.max-Ne.min),l=e.d3Force("charge");l?.strength&&l.strength(s);let d=e.d3Force("link");d?.distance&&d.distance(k=>a.lens==="tag"&&k.kind==="tag"?c*.72:c),d?.strength&&d.strength(k=>{if(k.kind==="cooc"||k.kind==="folder")return .04;if(a.lens==="tag"&&k.kind==="tag")return .95;if(a.lens==="folder"){let M=lt(n.nodes,k.source),_=lt(n.nodes,k.target);if(M!==null&&M===_)return .72}return k.kind==="tag"?.65:.8});let f=e.d3Force("center");f?.strength&&f.strength(Ht);let y=Pe.min+t*(Pe.max-Pe.min),m=En(n,a.lens,y),w=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",Ln(k=>m.get(k.id)??null,w)),r.use3d&&e.d3Force("flattenZ",null)},B=new Map,i=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,s=r.three;B.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(c=>{let l=H(c),d=D(c),f=!1;if(s)if(G()){let k=c.isHub?1.35:1.1,M=new s.MeshLambertMaterial({color:d,emissive:d,emissiveIntensity:k});B.set(c.id,{material:M,base:k,phase:c.phase}),f=new s.Mesh(new s.SphereGeometry(l,14,14),M)}else f=new s.Mesh(new s.SphereGeometry(l,14,14),new s.MeshBasicMaterial({color:d}));if(!F(c)||!t)return f;let y=new t(c.name),m=G()?"rgba(255, 255, 255, 0.85)":o.current.ink;if(y.color=S(c.id)?m:ne(m,Q),y.fontWeight="400",y.strokeWidth=0,y.textHeight=A.has(c.id)?6.5:5.5,y.center.set(0,.5),y.position.x=l+2,y.position.y=0,!s||f===!1)return y;let w=new s.Group;return w.add(f),w.add(y),w})},g=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(c=>{let l=Vt[c.kind]*p.edgeScale,d=new t.MeshBasicMaterial({color:z(c),transparent:!0,opacity:R(c),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(l,l,1,5),d)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((c,l)=>{let d=l.end.x-l.start.x,f=l.end.y-l.start.y,y=l.end.z-l.start.z,m=Math.sqrt(d*d+f*f+y*y);return c.position.x=(l.start.x+l.end.x)/2,c.position.y=(l.start.y+l.end.y)/2,c.position.z=(l.start.z+l.end.z)/2,c.scale.x=1,c.scale.y=Math.max(m,.01),c.scale.z=1,c.quaternion.setFromUnitVectors(s,new t.Vector3(d,f,y).normalize()),!0})},h=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=v();if(s===null)return 0;let c=I(t.source),l=I(t.target);return c===s||l===s?2:0})},L=()=>{e.nodeVal(C),e.nodeColor(D),e.linkColor(W),e.linkWidth(t=>{let s=I(t.source),c=I(t.target),l=v(),d=p.edgeScale;return l!==null&&(s===l||c===l)?.7*d:t.kind==="wikilink"?.5*d:(t.kind==="tag"?.35:.25)*d}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ve),h(),g(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},N=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(f,y)=>{let m=document.createElement("span");m.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=f;let k=document.createElement("span");return k.textContent=y,m.append(w,k),m},c=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",d=r.root.dataset.legendMentions??"Mentions";t.replaceChildren(s(o.current.ink,c),s(o.current.tertiary,l),s(o.current.gray,d))},x=t=>{let s=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[t.dataset.key]=t.dataset.value,c.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=t.dotColor,l.append(f)}l.append(document.createTextNode(t.label));let d=document.createElement("span");return d.className="graph-landing__tag-count",d.textContent=String(t.count),c.append(l,d),s.append(c),s},Ae=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=r.root.querySelector("[data-graph-facet-label]"),c=r.root.querySelector(".graph-landing__tags");if(a.lens==="folder"){let d=r.root.dataset.folderRootLabel??"root",f=new Map;for(let m of n.nodes)m.type==="note"&&f.set(m.folder,(f.get(m.folder)??0)+1);let y=[...f.entries()].sort((m,w)=>w[1]-m[1]);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=y.length===0),t.replaceChildren(...y.map(([m,w])=>x({dataset:{key:"graphFolder",value:m},pressed:a.focusFolder===m,dotColor:at(m,o.current),label:m==="root"?d:m,count:w})));return}let l=n.nodes.filter(d=>d.type==="tag").sort((d,f)=>f.degree-d.degree).slice(0,16);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=l.length===0),t.replaceChildren(...l.map(d=>x({dataset:{key:"graphTag",value:d.tag},pressed:a.focusTag===d.tag,dotColor:null,label:d.tag,count:d.degree})))},ie=()=>{e.graphData(O()),E(),L(),i(),N(),Ae(),ct(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),e.d3ReheatSimulation()},kt=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),t!=="folder"&&(a.focusFolder=null),Ie(t),ie()},Tt=t=>{a.focusTag=a.focusTag===t?null:t,a.focusFolder=null,a.focusTag&&(a.lens="tag",Ie("tag")),ie()},Et=t=>{a.focusFolder=a.focusFolder===t?null:t,a.focusTag=null,a.focusFolder&&(a.lens="folder",Ie("folder")),ie()},He=()=>r.use3d?gn(o.current):bt(o.current);e.graphData(O()),e.backgroundColor(He()),e.nodeLabel(t=>t.name),e.nodeRelSize(Dt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Rt),typeof e.linkOpacity=="function"&&e.linkOpacity(Ve),E(),L();let q=r.root.querySelector("[data-graph-preview]"),le=r.root.querySelector("[data-graph-preview-chip]"),ce=r.root.querySelector("[data-graph-preview-title]"),ue=r.root.querySelector("[data-graph-preview-excerpt]"),de=0;window.addCleanup(()=>window.clearTimeout(de));let Lt=t=>{if(!(q instanceof HTMLElement)||!(le instanceof HTMLElement)||!(ce instanceof HTMLElement)||!(ue instanceof HTMLElement))return;window.clearTimeout(de);let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendMentions??"Mentions";if(t.type==="tag"){let d=r.root.dataset.previewTagTemplate??"{n} notes";le.textContent=c,ce.textContent=`#${t.tag}`,ue.textContent=d.replace("{n}",String(t.degree))}else t.type==="mention"?(le.textContent=l,ce.textContent=t.name,ue.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(le.textContent=s,ce.textContent=t.name,ue.textContent=t.excerpt);q.hidden=!1,q.dataset.visible="true"},De=()=>{q instanceof HTMLElement&&(window.clearTimeout(de),de=window.setTimeout(()=>{q.dataset.visible="false",q.hidden=!0},Wt))};if(e.onNodeHover(t=>{b=t?t.id:null,T===null&&(t?Lt(t):De()),L(),r.use3d&&i()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!ae()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=Ot;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=G()?We:0,r.bloomPass.radius=je,r.bloomPass.threshold=Ye,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ee,qe),p.zoom!==1&&V(0)),i(),!ae()){let t=0,s=()=>{let c=performance.now()/1e3*Kt;for(let l of B.values())l.material.emissiveIntensity=l.base*(1+qt*Math.sin(c+l.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,c)=>{let l=H(t),d=t.x??0,f=t.y??0;if(s.save(),s.beginPath(),s.arc(d,f,l,0,Math.PI*2),s.fillStyle=D(t),s.fill(),t.isHub&&(s.strokeStyle=S(t.id)?o.current.accent:ne(o.current.accent,Q),s.lineWidth=1.2/c,s.stroke()),F(t)){let y=11.5/c;s.font=`${y}px ${o.current.font}`,s.fillStyle=S(t.id)?o.current.ink:ne(o.current.ink,Q),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,d,f-l-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,c)=>{let l=H(t)+8;c.beginPath(),c.arc(t.x??0,t.y??0,l,0,Math.PI*2),c.fillStyle=s,c.fill()});let ge=r.root.querySelector("[data-graph-inspect]"),fe=r.root.querySelector("[data-graph-inspect-chip]"),me=r.root.querySelector("[data-graph-inspect-title]"),pe=r.root.querySelector("[data-graph-inspect-excerpt]"),ve=r.root.querySelector("[data-graph-inspect-tags]"),Se=r.root.querySelector("[data-graph-inspect-connected]"),j=r.root.querySelector("[data-graph-inspect-open]"),he=t=>{r.root.dataset.railOpen=t?"true":"false";let s=r.root.querySelector("[data-graph-rail-toggle]"),c=r.root.querySelector("[data-graph-rail-scrim]");s instanceof HTMLButtonElement&&s.setAttribute("aria-expanded",t?"true":"false"),c instanceof HTMLElement&&(c.hidden=!t)},Re=t=>{ae()||typeof e.controls!="function"||(e.controls().autoRotate=t)},vt=t=>{let s=u.get(t.id)??new Set,c=[];for(let l of s){let d=n.nodes.find(f=>f.id===l);d&&c.push(d)}return c.sort((l,d)=>d.degree-l.degree)},St=t=>{if(!(ge instanceof HTMLElement)||!(fe instanceof HTMLElement)||!(me instanceof HTMLElement)||!(pe instanceof HTMLElement)||!(ve instanceof HTMLElement)||!(Se instanceof HTMLElement))return;let s=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendMentions??"Mentions",d=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(fe.textContent=c,me.textContent=`#${t.tag}`,pe.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="mention"?(fe.textContent=l,me.textContent=t.name,pe.textContent=r.root.dataset.previewMention??"Mentioned, not published yet"):(fe.textContent=s,me.textContent=t.name,pe.textContent=t.excerpt);let f=t.tags.map(m=>{let w=document.createElement("li");return w.textContent=m,w});ve.replaceChildren(...f),ve.hidden=f.length===0;let y=vt(t).slice(0,12);if(y.length===0){let m=document.createElement("li");m.className="graph-landing__inspect-empty",m.textContent=d,Se.replaceChildren(m)}else Se.replaceChildren(...y.map(m=>{let w=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=m.id;let M=m.type==="tag"?c:m.type==="mention"?l:s,_=document.createElement("span");_.textContent=M;let $=document.createElement("strong");return $.textContent=m.type==="tag"?`#${m.tag}`:m.name,k.append(_,$),w.append(k),w}));j instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(j.hidden=!1,j.href=wt(t.slug).toString()):(j.hidden=!0,j.removeAttribute("href"))),ge.hidden=!1,r.root.dataset.inspecting="true",he(!1),De()},be=()=>{T=null,ge instanceof HTMLElement&&(ge.hidden=!0),r.root.dataset.inspecting="false",Re(!0),L(),r.use3d&&i()},Oe=t=>{if(T===t.id&&t.type==="note"&&t.slug.length>0){mn(t.slug);return}T=t.id,Re(!1),St(t),L(),r.use3d&&i()},Fe=t=>{Oe(t)},Ce=!1;e.onNodeClick((t,s)=>{t&&(Ce=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Fe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{be()});let K=r.root.querySelector("#graph-landing-mount");if(K instanceof HTMLElement){let t=null,s=d=>{t={x:d.clientX,y:d.clientY}},c=(d,f)=>{if(typeof e.graph2ScreenCoords!="function")return null;let y=K.getBoundingClientRect(),m=d-y.left,w=f-y.top,k=null,M=4096;for(let _ of O().nodes){if(_.x===void 0||_.y===void 0)continue;let $=e.graph2ScreenCoords(_.x,_.y,_.z??0),Ct=($.x-m)**2+($.y-w)**2,xt=($.x-d)**2+($.y-f)**2,Ue=Math.min(Ct,xt);Ue<M&&(M=Ue,k=_)}return k},l=d=>{let f=t;t=null,!(!f||(d.clientX-f.x)**2+(d.clientY-f.y)**2>25)&&window.setTimeout(()=>{if(Ce){Ce=!1;return}let m=c(d.clientX,d.clientY);m?Fe(m):be()},0)};K.addEventListener("pointerdown",s,!0),K.addEventListener("pointerup",l,!0),window.addCleanup(()=>{K.removeEventListener("pointerdown",s,!0),K.removeEventListener("pointerup",l,!0)})}ct(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),N(),Ae(),a.lens!=="all"&&ie(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let ze=()=>{o.current=ht(),e.backgroundColor(He()),r.bloomPass&&(r.bloomPass.strength=G()?We:0,r.bloomPass.radius=je,r.bloomPass.threshold=Ye),L(),i(),N()};document.addEventListener("themechange",ze),window.addCleanup(()=>document.removeEventListener("themechange",ze));let Be=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){be();return}if(s.closest("[data-graph-rail-toggle]")){he(r.root.dataset.railOpen!=="true");return}if(s.closest("[data-graph-rail-scrim]")){he(!1);return}let c=s.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let w=n.nodes.find(k=>k.id===c.dataset.graphInspectId);w&&Oe(w);return}let l=s.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&wn(l.dataset.graphLens)){kt(l.dataset.graphLens);return}let d=s.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){Tt(d.dataset.graphTag);return}let f=s.closest("[data-graph-folder]");if(f instanceof HTMLElement&&f.dataset.graphFolder){Et(f.dataset.graphFolder);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let y=s.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){a.allLabels=!a.allLabels,y.setAttribute("aria-pressed",a.allLabels?"true":"false");let w=y.dataset.labelShow??"Labels",k=y.dataset.labelHide??"Labels",M=a.allLabels?k:w;y.title=M,y.setAttribute("aria-label",M),i();return}if(s.closest("[data-graph-theme]")){let w=G()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let m=s.closest("[data-graph-tags-toggle]");if(m instanceof HTMLButtonElement){let w=r.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let k=w.dataset.open==="true";w.dataset.open=k?"false":"true",m.setAttribute("aria-expanded",k?"false":"true")}}},Y=r.root.querySelector("[data-graph-node-scale]"),X=r.root.querySelector("[data-graph-edge-scale]");if(Y instanceof HTMLInputElement){Y.value=String(Math.round(p.nodeScale*100));let t=()=>{p.nodeScale=Number(Y.value)/100,we(p),L(),r.use3d&&i()};Y.addEventListener("input",t),window.addCleanup(()=>Y.removeEventListener("input",t))}if(X instanceof HTMLInputElement){X.value=String(Math.round(p.edgeScale*100));let t=()=>{p.edgeScale=Number(X.value)/100,we(p),L()};X.addEventListener("input",t),window.addCleanup(()=>X.removeEventListener("input",t))}let Z=r.root.querySelector("[data-graph-zoom]");if(Z instanceof HTMLInputElement){Z.value=String(Math.round(p.zoom*100));let t=()=>{p.zoom=Number(Z.value)/100,we(p),V(200)};Z.addEventListener("input",t),window.addCleanup(()=>Z.removeEventListener("input",t))}let J=r.root.querySelector("[data-graph-spread]");if(J instanceof HTMLInputElement){J.value=String(Math.round(p.spread*100));let t=()=>{p.spread=Number(J.value)/100,we(p),E(),e.d3ReheatSimulation()};J.addEventListener("input",t),window.addCleanup(()=>J.removeEventListener("input",t))}r.root.addEventListener("click",Be),window.addCleanup(()=>r.root.removeEventListener("click",Be));let $e=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){he(!1);return}be()}};window.addEventListener("keydown",$e),window.addCleanup(()=>window.removeEventListener("keydown",$e))}async function Sn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),b=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",T=!1,p=null,v={current:ht()},A=()=>{T=!0,p&&(p._destructor(),p=null),delete e.dataset.graphReady};window.addCleanup(A);let C=un(),F=hn(C),H=C?import(Pt).then(E=>E.default??null).catch(E=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),null)):Promise.resolve(null),S=C?import(_t).catch(E=>(console.error("[graph-landing] three unavailable; using default node spheres",E),null)):Promise.resolve(null),U=C?import(It).then(E=>E.UnrealBloomPass?new E.UnrealBloomPass:null).catch(E=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),null)):Promise.resolve(null);F.catch(()=>{});let D;try{D=Ge(await fetchData)}catch(E){throw it(n,"Graph could not load content index."),E}if(T)return;let P=an(Yt(D),{localeId:r,sourceLocale:u,prefixes:a}),R=b.replace("{n}",String(P.nodes.length)).replace("{m}",String(P.links.length));for(let E of o)E.textContent=R;let z;try{z=await F}catch(E){throw it(n,"Graph could not load. Check your network connection."),E}let[W,O,V]=await Promise.all([H,S,U]);if(!T&&(n.replaceChildren(),p=z(n),n.__graphLanding=p,n.__graphData=P,vn(p,P,v,{use3d:C,root:e,spriteText:W,bloomPass:V,three:O}),C&&!ae())){let E=()=>{!p||typeof p.controls!="function"||(p.controls().autoRotate=!1)};n.addEventListener("pointerdown",E,{once:!0}),window.addCleanup(()=>n.removeEventListener("pointerdown",E))}}var Cn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Cn,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{Sn()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 32px);\n  max-width: 248px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: auto;\n  touch-action: pan-y;\n  position: absolute;\n  top: 16px;\n  width: 248px;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__title-block--chrome {\n  display: none;\n}\n\n.graph-landing__rail-toggle,\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--secondary);\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--mention {\n  background: var(--gray);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--lightgray);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: color-mix(in srgb, var(--light) 78%, transparent);\n    border-bottom: 1px solid var(--lightgray);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--chrome {\n    display: flex;\n    flex: 1 1 auto;\n    min-width: 0;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 40px;\n    min-height: 40px;\n  }\n  .graph-landing__rail-toggle {\n    align-items: center;\n    background: transparent;\n    border: 0;\n    border-radius: 8px;\n    color: var(--dark);\n    cursor: pointer;\n    display: inline-flex;\n    flex: 0 0 auto;\n    height: 44px;\n    justify-content: center;\n    pointer-events: auto;\n    width: 44px;\n  }\n  .graph-landing__rail-toggle:focus-visible {\n    outline: 2px solid var(--secondary);\n    outline-offset: 2px;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    border-radius: 16px 16px 0 0;\n    bottom: 0;\n    box-shadow: 0 -12px 40px rgba(8, 10, 16, 0.22);\n    left: 0;\n    max-height: min(58dvh, 100dvh - 4.5rem);\n    max-width: none;\n    padding: 18px 14px max(14px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    transform: translateY(110%);\n    transition: transform 0.22s ease;\n    width: auto;\n    z-index: 4;\n  }\n  .graph-landing__rail::before {\n    background: var(--lightgray);\n    border-radius: 999px;\n    content: "";\n    height: 4px;\n    left: 50%;\n    position: absolute;\n    top: 8px;\n    transform: translateX(-50%);\n    width: 36px;\n  }\n  .graph-landing[data-rail-open=true] .graph-landing__rail {\n    transform: translateY(0);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: color-mix(in srgb, var(--light) 72%, transparent);\n    border-bottom-color: var(--lightgray);\n  }\n}';
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// ../../../../plugins/graph-landing/node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
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