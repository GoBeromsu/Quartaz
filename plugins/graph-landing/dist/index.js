// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Ee="0.179.1",Mt="https://esm.sh/force-graph@1.51.4",Nt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ee}`,Pt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ee}`,_t=`https://esm.sh/three@${Ee}`,It=`https://esm.sh/three@${Ee}/examples/jsm/postprocessing/UnrealBloomPass.js`,Gt=8,At=14;var re=1,xe=3.5,Ht=.05,Dt=2.6,Rt=1,Ve=1,Q=.18,ut="graph-landing:lens",dt="graph-landing:tune",Ot=.18,Ft=1.4,zt=1.25,Bt=1.15,$t=.55,ee={x:330,y:235,z:565},qe={x:0,y:0,z:0},Ke=1.3,Ut=3.2,We=1.05,je=.32,Ye=.28,Vt={wikilink:.3,tag:.22,cooc:.16,folder:.16},Xe="#a8b0c2",Ze={min:80,max:200},Je={min:40,max:110},Qe={min:160,max:280},et={min:90,max:170},tt=220,nt=2,qt=.15,Kt=.8,Wt=350,Me={min:-100,max:-190},Ne={min:72,max:116},Pe={min:130,max:260};function jt(e){return we(e-.5,0,1)}function Ge(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function rt(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Yt(e){let r=[];for(let o of Object.values(e)){let n=Ge(o),u=typeof n.slug=="string"?n.slug:"";if(u.length===0)continue;let a=n.multilingual,b=a&&typeof a=="object"?a:void 0;r.push({slug:u,title:typeof n.title=="string"?n.title:u,links:rt(n.links),tags:rt(n.tags),content:typeof n.content=="string"?n.content:"",multilingual:b})}return r}function Xt(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=tt?r:`${r.slice(0,tt).trimEnd()}\\u2026`}function se(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function ot(e){return se(e)/(2*Math.PI)}function ye(e,r,o){let n=se(e),u=Math.acos(2*ot(`${e}:phi`)-1),a=r+(o-r)*ot(`${e}:r`);return{x:a*Math.sin(u)*Math.cos(n),y:a*Math.sin(u)*Math.sin(n),z:a*Math.cos(u)}}function gt(e){return e==="index"||e.endsWith("/index")}function ft(e){return e==="tags"||e.startsWith("tags/")}function Zt(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function mt(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function _e(e,r){return e.multilingual?.locale?e.multilingual.locale:mt(e.slug,r).locale}function Jt(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${mt(e.slug,r).permalink}`}function Qt(e,r){let o=e.find(n=>_e(n,r.prefixes)===r.localeId)??e.find(n=>_e(n,r.prefixes)===r.sourceLocale)??e.find(n=>_e(n,r.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function we(e,r,o){return Math.min(o,Math.max(r,e))}function st(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function pt(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Le(e){return pt(e).trim().toLowerCase()}function en(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function tn(e){let r=e.trim();return r.length===0||en(r)||ft(r)||gt(r)?!0:Le(r).length===0}function nn(e){return pt(e).replace(/-/g," ")}function rn(e){let r=new Map,o=new Map;for(let n of e){let u=Le(n.slug);u.length>0&&!r.has(u)&&r.set(u,n.slug);let a=n.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,n.slug);let b=a.replace(/\\s+/g,"-");b.length>0&&!o.has(b)&&o.set(b,n.slug)}return{byBasename:r,byTitle:o}}function on(e,r,o){if(r.has(e))return e;let n=Le(e),u=o.byBasename.get(n);if(u)return u;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return a||null}function sn(e,r){return e.length===0?"":[...e].sort((n,u)=>(r.get(u)??0)-(r.get(n)??0))[0]??""}function an(e,r){let o=e.filter(i=>!gt(i.slug)&&!ft(i.slug)&&!Zt(i)),n=new Map;for(let i of o){let g=Jt(i,r.prefixes),h=n.get(g)??[];h.push(i),n.set(g,h)}let u=[];for(let i of n.values())u.push(Qt(i,r));let a=new Set(u.map(i=>i.slug)),b=rn(u),T=new Map,p=new Map,v=[],A=new Set,C=new Map,F=i=>{p.set(i,(p.get(i)??0)+1)},H=(i,g,h)=>i<g?`${i}|${g}|${h}`:`${g}|${i}|${h}`,S=(i,g,h,L)=>{let N=H(i,g,h);A.has(N)||(A.add(N),v.push({source:i,target:g,kind:h}),L&&(F(i),F(g)))};for(let i of u)for(let g of i.links){if(tn(g))continue;let h=on(g,a,b);if(h!==null){h!==i.slug&&S(i.slug,h,"wikilink",!0);continue}let L=`mention:${Le(g)}`;T.has(L)||T.set(L,nn(g)),S(i.slug,L,"wikilink",!0)}let U=new Set,D=new Map;for(let i of u)for(let g of i.tags){C.set(g,(C.get(g)??0)+1);let h=`tag:${g}`;U.add(h),S(i.slug,h,"tag",!0);let L=D.get(g)??[];L.push(i.slug),D.set(g,L)}for(let i of u)if(!(i.tags.length<2))for(let g=0;g<i.tags.length;g+=1)for(let h=g+1;h<i.tags.length;h+=1)S(`tag:${i.tags[g]}`,`tag:${i.tags[h]}`,"cooc",!1);let P=new Map;for(let i of u){let g=st(i.slug);if(g==="root")continue;let h=P.get(g)??[];h.push(i.slug),P.set(g,h)}for(let i of P.values()){if(i.length<2)continue;let g=[...i].sort();for(let h=0;h<g.length;h+=1){let L=g[(h+1)%g.length],N=g[(h+nt)%g.length],x=g[h];x===void 0||L===void 0||(x!==L&&!A.has(H(x,L,"wikilink"))&&S(x,L,"folder",!1),g.length>nt+1&&N!==void 0&&x!==N&&!A.has(H(x,N,"wikilink"))&&S(x,N,"folder",!1))}}let R=[...p.values()],z=R.length>0?Math.min(...R):0,W=R.length>0?Math.max(...R):0,O=i=>{let g=p.get(i)??0,h=Math.sqrt(g),L=Math.sqrt(z),x=Math.sqrt(W)-L;return x===0?(re+xe)/2:re+(h-L)/x*(xe-re)},V=[...u].sort((i,g)=>(p.get(g.slug)??0)-(p.get(i.slug)??0)),E=new Set(V.filter(i=>(p.get(i.slug)??0)>0).slice(0,Gt).map(i=>i.slug)),B=u.map(i=>{let g=E.has(i.slug),h=g?ye(i.slug,Je.min,Je.max):ye(i.slug,Ze.min,Ze.max);return{id:i.slug,name:i.title,type:"note",val:O(i.slug),degree:p.get(i.slug)??0,isHub:g,tag:"",slug:i.slug,folder:st(i.slug),tags:i.tags,dominantTag:sn(i.tags,C),excerpt:Xt(i.content),phase:se(i.slug),x:h.x,y:h.y,z:h.z}});for(let[i,g]of T){let h=ye(i,Qe.min,Qe.max);B.push({id:i,name:g,type:"mention",val:O(i)*$t,degree:p.get(i)??0,isHub:!1,tag:"",slug:"",folder:"",tags:[],dominantTag:"",excerpt:"",phase:se(i),x:h.x,y:h.y,z:h.z})}for(let i of U){let g=i.slice(4),h=ye(i,et.min,et.max);B.push({id:i,name:g,type:"tag",val:we(O(i)*.7,re,xe),degree:p.get(i)??0,isHub:!1,tag:g,slug:`tags/${g}`,folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:se(i),x:h.x,y:h.y,z:h.z})}return{nodes:B,links:v}}function ln(e){let r=new Map,o=(n,u)=>{let a=r.get(n)??new Set;a.add(u),r.set(n,a)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag")continue;let u=I(n.source),a=I(n.target);o(u,a),o(a,u)}return r}function I(e){return typeof e=="string"?e:e.id}function te(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function ht(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:te("--light","#ffffff"),ink:te("--darkgray","#0f0f0f"),accent:te("--secondary","#a52142"),tertiary:te("--tertiary","#c75b75"),gray:te("--gray","#737373"),font:e.length>0?e:"Inter, sans-serif"}}function ae(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function cn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function un(){return cn()&&!ae()}function G(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Te(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function ne(e,r){let o=Te(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function oe(e,r,o){let n=Te(e),u=Te(r);if(!n||!u)return e;let a=(b,T)=>Math.round(b+(T-b)*o);return`rgb(${a(n.r,u.r)}, ${a(n.g,u.g)}, ${a(n.b,u.b)})`}function bt(e){return G()?oe(e.bg,"#05070f",.88):e.bg}function dn(e){let r=Te(e);if(!r)return e;let o=n=>{let u=n/255,a=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function gn(e){return dn(bt(e))}function yt(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function at(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:yt(e,[r.accent,r.tertiary,r.ink,r.gray])}function fn(e,r){return e.length===0?r.ink:yt(e,[r.accent,r.tertiary])}function kt(e){let r=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let u=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function mn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let r=kt(e);window.location.assign(r.toString())}function pn(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function it(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function hn(e){let o=await import(e?Nt:Mt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):pn(o)}function bn(){try{let e=sessionStorage.getItem(ut);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function yn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let r=sessionStorage.getItem(dt);if(!r)return e;let o=Ge(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.zoom=="number"?o.zoom:e.zoom,b=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:n,edgeScale:u,zoom:a,spread:b}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function ke(e){try{sessionStorage.setItem(dt,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function Ie(e){try{sessionStorage.setItem(ut,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function kn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function wn(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function Tn(e,r){return e.type==="note"&&e.folder===r}function lt(e,r){let o=I(r),n=e.find(u=>u.id===o);return!n||n.type!=="note"?null:n.folder}function En(e,r,o){let n=new Map;if(r==="folder"){let u=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return u.forEach((a,b)=>{let T=Math.PI*2*b/Math.max(u.length,1),p={x:Math.cos(T)*o,y:Math.sin(T)*o,z:0};for(let v of e.nodes)v.type==="note"&&v.folder===a&&n.set(v.id,p)}),n}if(r==="tag"){let u=e.nodes.filter(b=>b.type==="tag"),a=new Map;u.forEach((b,T)=>{let p=Math.PI*2*T/Math.max(u.length,1);a.set(b.tag,{x:Math.cos(p)*o,y:Math.sin(p)*o,z:0})});for(let b of e.nodes)if(b.type==="tag"){let T=a.get(b.tag);T&&n.set(b.id,T)}else if(b.dominantTag.length>0){let T=a.get(b.dominantTag);T&&n.set(b.id,T)}}return n}function Ln(e,r){let o=[],n=u=>{let a=r*u;for(let b of o){let T=e(b);T&&(b.vx=(b.vx??0)+(T.x-(b.x??0))*a,b.vy=(b.vy??0)+(T.y-(b.y??0))*a,b.vz=(b.vz??0)+(T.z-(b.z??0))*a)}};return n.initialize=u=>{o=u},n}function ct(e,r,o,n){for(let u of e.querySelectorAll(r)){if(!(u instanceof HTMLElement))continue;let a=u.getAttribute(n);u.setAttribute("aria-pressed",a===o?"true":"false")}}function vn(e,r,o,n){let u=ln(r.links),a={lens:bn(),allLabels:!1,focusTag:null,focusFolder:null},b=null,T=null,p=yn(),v=()=>T??b,A=new Set(r.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,At).map(t=>t.id)),C=t=>{let s=t.val;return t.isHub&&(s*=Ft),a.lens==="tag"&&t.type==="tag"&&(s*=zt),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Bt),s},F=t=>{let s=v();return a.allLabels||s===t.id||s!==null&&(u.get(s)?.has(t.id)??!1)?!0:A.has(t.id)},H=t=>{let s=we((C(t)-re)/5,0,1);return(Ke+s*(Ut-Ke))*p.nodeScale},S=t=>{let s=v();if(s!==null)return s===t||(u.get(s)?.has(t)??!1);if(a.focusTag===null&&a.focusFolder===null)return!0;let c=r.nodes.find(l=>l.id===t);return c?a.focusFolder!==null?Tn(c,a.focusFolder):a.focusTag!==null&&wn(c,a.focusTag):!1},U=t=>t.type==="mention"?o.current.gray:a.lens==="tag"?t.type==="tag"?o.current.tertiary:fn(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:at(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,D=t=>{let s=v();if(s!==null&&(s===t.id||(u.get(s)?.has(t.id)??!1)))return o.current.accent;let c=U(t);return S(t.id)?G()?t.type==="mention"?c:t.type==="tag"?oe(o.current.tertiary,"#ffffff",.22):t.isHub?oe("#fff3e4",o.current.accent,.1):oe("#ffffff",o.current.accent,.12):c:ne(c,Q)},P=t=>{let s=G();return t==="wikilink"?.34:t==="tag"?s?.22:.2:s?.12:.11},R=t=>{let s=I(t.source),c=I(t.target),l=v();return l!==null&&(s===l||c===l)?G()?.72:.62:(l!==null||a.focusTag!==null||a.focusFolder!==null)&&(!S(s)||!S(c))?P(t.kind)*Q:P(t.kind)},z=t=>{let s=I(t.source),c=I(t.target),l=v();return l!==null&&(s===l||c===l)?oe(o.current.accent,Xe,.45):G()?Xe:o.current.gray},W=t=>ne(z(t),R(t)),O=()=>r,V=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(ee.x,ee.y,ee.z),c=s/we(p.zoom,.4,2.5),l=e.cameraPosition(),d=ee,f=s;if(l&&typeof l.x=="number"&&typeof l.y=="number"&&typeof l.z=="number"){let m=Math.hypot(l.x,l.y,l.z);m>1&&(d={x:l.x,y:l.y,z:l.z},f=m)}let y=c/f;e.cameraPosition({x:d.x*y,y:d.y*y,z:d.z*y},qe,t);return}typeof e.zoom=="function"&&e.zoom(p.zoom,t)},E=()=>{let t=jt(p.spread),s=Me.min+t*(Me.max-Me.min),c=Ne.min+t*(Ne.max-Ne.min),l=e.d3Force("charge");l?.strength&&l.strength(s);let d=e.d3Force("link");d?.distance&&d.distance(w=>a.lens==="tag"&&w.kind==="tag"?c*.72:c),d?.strength&&d.strength(w=>{if(w.kind==="cooc"||w.kind==="folder")return .04;if(a.lens==="tag"&&w.kind==="tag")return .95;if(a.lens==="folder"){let M=lt(r.nodes,w.source),_=lt(r.nodes,w.target);if(M!==null&&M===_)return .72}return w.kind==="tag"?.65:.8});let f=e.d3Force("center");f?.strength&&f.strength(Ht);let y=Pe.min+t*(Pe.max-Pe.min),m=En(r,a.lens,y),k=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",Ln(w=>m.get(w.id)??null,k)),n.use3d&&e.d3Force("flattenZ",null)},B=new Map,i=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,s=n.three;B.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(c=>{let l=H(c),d=D(c),f=!1;if(s)if(G()){let w=c.isHub?1.35:1.1,M=new s.MeshLambertMaterial({color:d,emissive:d,emissiveIntensity:w});B.set(c.id,{material:M,base:w,phase:c.phase}),f=new s.Mesh(new s.SphereGeometry(l,14,14),M)}else f=new s.Mesh(new s.SphereGeometry(l,14,14),new s.MeshBasicMaterial({color:d}));if(!F(c)||!t)return f;let y=new t(c.name),m=G()?"rgba(255, 255, 255, 0.85)":o.current.ink;if(y.color=S(c.id)?m:ne(m,Q),y.fontWeight="400",y.strokeWidth=0,y.textHeight=A.has(c.id)?6.5:5.5,y.center.set(0,.5),y.position.x=l+2,y.position.y=0,!s||f===!1)return y;let k=new s.Group;return k.add(f),k.add(y),k})},g=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(c=>{let l=Vt[c.kind]*p.edgeScale,d=new t.MeshBasicMaterial({color:z(c),transparent:!0,opacity:R(c),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(l,l,1,5),d)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((c,l)=>{let d=l.end.x-l.start.x,f=l.end.y-l.start.y,y=l.end.z-l.start.z,m=Math.sqrt(d*d+f*f+y*y);return c.position.x=(l.start.x+l.end.x)/2,c.position.y=(l.start.y+l.end.y)/2,c.position.z=(l.start.z+l.end.z)/2,c.scale.x=1,c.scale.y=Math.max(m,.01),c.scale.z=1,c.quaternion.setFromUnitVectors(s,new t.Vector3(d,f,y).normalize()),!0})},h=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=v();if(s===null)return 0;let c=I(t.source),l=I(t.target);return c===s||l===s?2:0})},L=()=>{e.nodeVal(C),e.nodeColor(D),e.linkColor(W),e.linkWidth(t=>{let s=I(t.source),c=I(t.target),l=v(),d=p.edgeScale;return l!==null&&(s===l||c===l)?.7*d:t.kind==="wikilink"?.5*d:(t.kind==="tag"?.35:.25)*d}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ve),h(),g(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},N=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(f,y)=>{let m=document.createElement("span");m.className="graph-landing__legend-item";let k=document.createElement("span");k.className="graph-landing__dot",k.setAttribute("aria-hidden","true"),k.style.background=f;let w=document.createElement("span");return w.textContent=y,m.append(k,w),m},c=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",d=n.root.dataset.legendMentions??"Mentions";t.replaceChildren(s(o.current.ink,c),s(o.current.tertiary,l),s(o.current.gray,d))},x=t=>{let s=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[t.dataset.key]=t.dataset.value,c.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=t.dotColor,l.append(f)}l.append(document.createTextNode(t.label));let d=document.createElement("span");return d.className="graph-landing__tag-count",d.textContent=String(t.count),c.append(l,d),s.append(c),s},Ae=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=n.root.querySelector("[data-graph-facet-label]"),c=n.root.querySelector(".graph-landing__tags");if(a.lens==="folder"){let d=n.root.dataset.folderRootLabel??"root",f=new Map;for(let m of r.nodes)m.type==="note"&&f.set(m.folder,(f.get(m.folder)??0)+1);let y=[...f.entries()].sort((m,k)=>k[1]-m[1]);s instanceof HTMLElement&&(s.textContent=n.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=y.length===0),t.replaceChildren(...y.map(([m,k])=>x({dataset:{key:"graphFolder",value:m},pressed:a.focusFolder===m,dotColor:at(m,o.current),label:m==="root"?d:m,count:k})));return}let l=r.nodes.filter(d=>d.type==="tag").sort((d,f)=>f.degree-d.degree).slice(0,16);s instanceof HTMLElement&&(s.textContent=n.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=l.length===0),t.replaceChildren(...l.map(d=>x({dataset:{key:"graphTag",value:d.tag},pressed:a.focusTag===d.tag,dotColor:null,label:d.tag,count:d.degree})))},ie=()=>{e.graphData(O()),E(),L(),i(),N(),Ae(),ct(n.root,"[data-graph-lens]",a.lens,"data-graph-lens"),e.d3ReheatSimulation()},wt=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),t!=="folder"&&(a.focusFolder=null),Ie(t),ie()},Tt=t=>{a.focusTag=a.focusTag===t?null:t,a.focusFolder=null,a.focusTag&&(a.lens="tag",Ie("tag")),ie()},Et=t=>{a.focusFolder=a.focusFolder===t?null:t,a.focusTag=null,a.focusFolder&&(a.lens="folder",Ie("folder")),ie()},He=()=>n.use3d?gn(o.current):bt(o.current);e.graphData(O()),e.backgroundColor(He()),e.nodeLabel(t=>t.name),e.nodeRelSize(Dt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Rt),typeof e.linkOpacity=="function"&&e.linkOpacity(Ve),E(),L();let q=n.root.querySelector("[data-graph-preview]"),le=n.root.querySelector("[data-graph-preview-chip]"),ce=n.root.querySelector("[data-graph-preview-title]"),ue=n.root.querySelector("[data-graph-preview-excerpt]"),de=0;window.addCleanup(()=>window.clearTimeout(de));let Lt=t=>{if(!(q instanceof HTMLElement)||!(le instanceof HTMLElement)||!(ce instanceof HTMLElement)||!(ue instanceof HTMLElement))return;window.clearTimeout(de);let s=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendMentions??"Mentions";if(t.type==="tag"){let d=n.root.dataset.previewTagTemplate??"{n} notes";le.textContent=c,ce.textContent=`#${t.tag}`,ue.textContent=d.replace("{n}",String(t.degree))}else t.type==="mention"?(le.textContent=l,ce.textContent=t.name,ue.textContent=n.root.dataset.previewMention??"Mentioned, not published yet"):(le.textContent=s,ce.textContent=t.name,ue.textContent=t.excerpt);q.hidden=!1,q.dataset.visible="true"},De=()=>{q instanceof HTMLElement&&(window.clearTimeout(de),de=window.setTimeout(()=>{q.dataset.visible="false",q.hidden=!0},Wt))};if(e.onNodeHover(t=>{b=t?t.id:null,T===null&&(t?Lt(t):De()),L(),n.use3d&&i()}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!ae()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=Ot;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),n.bloomPass&&typeof e.postProcessingComposer=="function"&&(n.bloomPass.strength=G()?We:0,n.bloomPass.radius=je,n.bloomPass.threshold=Ye,e.postProcessingComposer().addPass(n.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ee,qe),p.zoom!==1&&V(0)),i(),!ae()){let t=0,s=()=>{let c=performance.now()/1e3*Kt;for(let l of B.values())l.material.emissiveIntensity=l.base*(1+qt*Math.sin(c+l.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,c)=>{let l=H(t),d=t.x??0,f=t.y??0;if(s.save(),s.beginPath(),s.arc(d,f,l,0,Math.PI*2),s.fillStyle=D(t),s.fill(),t.isHub&&(s.strokeStyle=S(t.id)?o.current.accent:ne(o.current.accent,Q),s.lineWidth=1.2/c,s.stroke()),F(t)){let y=11.5/c;s.font=`${y}px ${o.current.font}`,s.fillStyle=S(t.id)?o.current.ink:ne(o.current.ink,Q),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,d,f-l-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,c)=>{let l=H(t)+8;c.beginPath(),c.arc(t.x??0,t.y??0,l,0,Math.PI*2),c.fillStyle=s,c.fill()});let ge=n.root.querySelector("[data-graph-inspect]"),fe=n.root.querySelector("[data-graph-inspect-chip]"),me=n.root.querySelector("[data-graph-inspect-title]"),pe=n.root.querySelector("[data-graph-inspect-excerpt]"),ve=n.root.querySelector("[data-graph-inspect-tags]"),Se=n.root.querySelector("[data-graph-inspect-connected]"),j=n.root.querySelector("[data-graph-inspect-open]"),he=t=>{n.root.dataset.railOpen=t?"true":"false";let s=n.root.querySelector("[data-graph-rail-toggle]"),c=n.root.querySelector("[data-graph-rail-scrim]");s instanceof HTMLButtonElement&&s.setAttribute("aria-expanded",t?"true":"false"),c instanceof HTMLElement&&(c.hidden=!t)},Re=t=>{ae()||typeof e.controls!="function"||(e.controls().autoRotate=t)},vt=t=>{let s=u.get(t.id)??new Set,c=[];for(let l of s){let d=r.nodes.find(f=>f.id===l);d&&c.push(d)}return c.sort((l,d)=>d.degree-l.degree)},St=t=>{if(!(ge instanceof HTMLElement)||!(fe instanceof HTMLElement)||!(me instanceof HTMLElement)||!(pe instanceof HTMLElement)||!(ve instanceof HTMLElement)||!(Se instanceof HTMLElement))return;let s=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendMentions??"Mentions",d=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(fe.textContent=c,me.textContent=`#${t.tag}`,pe.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="mention"?(fe.textContent=l,me.textContent=t.name,pe.textContent=n.root.dataset.previewMention??"Mentioned, not published yet"):(fe.textContent=s,me.textContent=t.name,pe.textContent=t.excerpt);let f=t.tags.map(m=>{let k=document.createElement("li");return k.textContent=m,k});ve.replaceChildren(...f),ve.hidden=f.length===0;let y=vt(t).slice(0,12);if(y.length===0){let m=document.createElement("li");m.className="graph-landing__inspect-empty",m.textContent=d,Se.replaceChildren(m)}else Se.replaceChildren(...y.map(m=>{let k=document.createElement("li"),w=document.createElement("button");w.type="button",w.className="graph-landing__inspect-link",w.dataset.graphInspectId=m.id;let M=m.type==="tag"?c:m.type==="mention"?l:s,_=document.createElement("span");_.textContent=M;let $=document.createElement("strong");return $.textContent=m.type==="tag"?`#${m.tag}`:m.name,w.append(_,$),k.append(w),k}));j instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(j.hidden=!1,j.href=kt(t.slug).toString()):(j.hidden=!0,j.removeAttribute("href"))),ge.hidden=!1,n.root.dataset.inspecting="true",he(!1),De()},be=()=>{T=null,ge instanceof HTMLElement&&(ge.hidden=!0),n.root.dataset.inspecting="false",Re(!0),L(),n.use3d&&i()},Oe=t=>{if(T===t.id&&t.type==="note"&&t.slug.length>0){mn(t.slug);return}T=t.id,Re(!1),St(t),L(),n.use3d&&i()},Fe=t=>{Oe(t)},Ce=!1;e.onNodeClick((t,s)=>{t&&(Ce=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Fe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{be()});let K=n.root.querySelector("#graph-landing-mount");if(K instanceof HTMLElement){let t=null,s=d=>{t={x:d.clientX,y:d.clientY}},c=(d,f)=>{if(typeof e.graph2ScreenCoords!="function")return null;let y=K.getBoundingClientRect(),m=d-y.left,k=f-y.top,w=null,M=4096;for(let _ of O().nodes){if(_.x===void 0||_.y===void 0)continue;let $=e.graph2ScreenCoords(_.x,_.y,_.z??0),Ct=($.x-m)**2+($.y-k)**2,xt=($.x-d)**2+($.y-f)**2,Ue=Math.min(Ct,xt);Ue<M&&(M=Ue,w=_)}return w},l=d=>{let f=t;t=null,!(!f||(d.clientX-f.x)**2+(d.clientY-f.y)**2>25)&&window.setTimeout(()=>{if(Ce){Ce=!1;return}let m=c(d.clientX,d.clientY);m?Fe(m):be()},0)};K.addEventListener("pointerdown",s,!0),K.addEventListener("pointerup",l,!0),window.addCleanup(()=>{K.removeEventListener("pointerdown",s,!0),K.removeEventListener("pointerup",l,!0)})}ct(n.root,"[data-graph-lens]",a.lens,"data-graph-lens"),N(),Ae(),a.lens!=="all"&&ie(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let ze=()=>{o.current=ht(),e.backgroundColor(He()),n.bloomPass&&(n.bloomPass.strength=G()?We:0,n.bloomPass.radius=je,n.bloomPass.threshold=Ye),L(),i(),N()};document.addEventListener("themechange",ze),window.addCleanup(()=>document.removeEventListener("themechange",ze));let Be=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){be();return}if(s.closest("[data-graph-rail-toggle]")){he(n.root.dataset.railOpen!=="true");return}if(s.closest("[data-graph-rail-scrim]")){he(!1);return}let c=s.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let k=r.nodes.find(w=>w.id===c.dataset.graphInspectId);k&&Oe(k);return}let l=s.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&kn(l.dataset.graphLens)){wt(l.dataset.graphLens);return}let d=s.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){Tt(d.dataset.graphTag);return}let f=s.closest("[data-graph-folder]");if(f instanceof HTMLElement&&f.dataset.graphFolder){Et(f.dataset.graphFolder);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let y=s.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){a.allLabels=!a.allLabels,y.setAttribute("aria-pressed",a.allLabels?"true":"false");let k=y.dataset.labelShow??"Labels",w=y.dataset.labelHide??"Labels",M=a.allLabels?w:k;y.title=M,y.setAttribute("aria-label",M),i();return}if(s.closest("[data-graph-theme]")){let k=G()?"light":"dark";document.documentElement.setAttribute("saved-theme",k),localStorage.setItem("theme",k),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${k}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:k}}));return}let m=s.closest("[data-graph-tags-toggle]");if(m instanceof HTMLButtonElement){let k=n.root.querySelector(".graph-landing__tags");if(k instanceof HTMLElement){let w=k.dataset.open==="true";k.dataset.open=w?"false":"true",m.setAttribute("aria-expanded",w?"false":"true")}}},Y=n.root.querySelector("[data-graph-node-scale]"),X=n.root.querySelector("[data-graph-edge-scale]");if(Y instanceof HTMLInputElement){Y.value=String(Math.round(p.nodeScale*100));let t=()=>{p.nodeScale=Number(Y.value)/100,ke(p),L(),n.use3d&&i()};Y.addEventListener("input",t),window.addCleanup(()=>Y.removeEventListener("input",t))}if(X instanceof HTMLInputElement){X.value=String(Math.round(p.edgeScale*100));let t=()=>{p.edgeScale=Number(X.value)/100,ke(p),L()};X.addEventListener("input",t),window.addCleanup(()=>X.removeEventListener("input",t))}let Z=n.root.querySelector("[data-graph-zoom]");if(Z instanceof HTMLInputElement){Z.value=String(Math.round(p.zoom*100));let t=()=>{p.zoom=Number(Z.value)/100,ke(p),V(200)};Z.addEventListener("input",t),window.addCleanup(()=>Z.removeEventListener("input",t))}let J=n.root.querySelector("[data-graph-spread]");if(J instanceof HTMLInputElement){J.value=String(Math.round(p.spread*100));let t=()=>{p.spread=Number(J.value)/100,ke(p),E(),e.d3ReheatSimulation()};J.addEventListener("input",t),window.addCleanup(()=>J.removeEventListener("input",t))}n.root.addEventListener("click",Be),window.addCleanup(()=>n.root.removeEventListener("click",Be));let $e=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){he(!1);return}be()}};window.addEventListener("keydown",$e),window.addCleanup(()=>window.removeEventListener("keydown",$e))}async function Sn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=e.querySelector("#graph-landing-mount");if(!(r instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),n=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),b=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",T=!1,p=null,v={current:ht()},A=()=>{T=!0,p&&(p._destructor(),p=null),delete e.dataset.graphReady};window.addCleanup(A);let C=un(),F=hn(C),H=C?import(Pt).then(E=>E.default??null).catch(E=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),null)):Promise.resolve(null),S=C?import(_t).catch(E=>(console.error("[graph-landing] three unavailable; using default node spheres",E),null)):Promise.resolve(null),U=C?import(It).then(E=>E.UnrealBloomPass?new E.UnrealBloomPass:null).catch(E=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),null)):Promise.resolve(null);F.catch(()=>{});let D;try{D=Ge(await fetchData)}catch(E){throw it(r,"Graph could not load content index."),E}if(T)return;let P=an(Yt(D),{localeId:n,sourceLocale:u,prefixes:a}),R=b.replace("{n}",String(P.nodes.length)).replace("{m}",String(P.links.length));for(let E of o)E.textContent=R;let z;try{z=await F}catch(E){throw it(r,"Graph could not load. Check your network connection."),E}let[W,O,V]=await Promise.all([H,S,U]);if(!T&&(r.replaceChildren(),p=z(r),r.__graphLanding=p,r.__graphData=P,vn(p,P,v,{use3d:C,root:e,spriteText:W,bloomPass:V,three:O}),C&&!ae())){let E=()=>{!p||typeof p.controls!="function"||(p.controls().autoRotate=!1)};r.addEventListener("pointerdown",E,{once:!0}),window.addCleanup(()=>r.removeEventListener("pointerdown",E))}}var Cn="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(Cn,n)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{Sn()});\n';

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
    const aboutSlug = findLocaleSlug(allFiles, "about", localeId);
    const homeHref = homeSlug ? slugToAbsHref(homeSlug) : localeHomeHref(localeId);
    const aboutHref = aboutSlug ? slugToAbsHref(aboutSlug) : localePageHref(localeId, "about");
    const writingHref = homeHref;
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