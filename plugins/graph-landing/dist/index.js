// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Ee="0.179.1",Nt="https://esm.sh/force-graph@1.51.4",Pt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ee}`,_t=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ee}`,Gt=`https://esm.sh/three@${Ee}`,It=`https://esm.sh/three@${Ee}/examples/jsm/postprocessing/UnrealBloomPass.js`,At=8,Ht=14;var le=1,Ce=3.5,Rt=.05,Dt=2.6,Ot=1,Ve=1,se=.18,dt="graph-landing:lens",ft="graph-landing:tune",zt=.18,Ft=1.4,Ut=1.25,Bt=1.15,$t=.55,ae={x:330,y:235,z:565},Ke={x:0,y:0,z:0},We=1.3,qt=3.2,je=1.05,Xe=.32,Ye=.28,Vt={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Ze="#a8b0c2",Je={min:80,max:200},Qe={min:40,max:110},et={min:160,max:280},tt={min:90,max:170},nt=220,rt=2,Kt=.15,Wt=.8,jt=350,Me={min:-100,max:-190},Ne={min:72,max:116},Pe={min:130,max:260};function Xt(e){return Le(e-.5,0,1)}function Ae(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function _e(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Yt(e){let n=[];for(let o of Object.values(e)){let r=Ae(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let a=r.multilingual,h=a&&typeof a=="object"?a:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:_e(r.links),tags:_e(r.tags),externalLinks:_e(r.externalLinks),content:typeof r.content=="string"?r.content:"",multilingual:h})}return n}function Zt(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=nt?n:`${n.slice(0,nt).trimEnd()}\\u2026`}function ce(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function ot(e){return ce(e)/(2*Math.PI)}function ye(e,n,o){let r=ce(e),u=Math.acos(2*ot(`${e}:phi`)-1),a=n+(o-n)*ot(`${e}:r`);return{x:a*Math.sin(u)*Math.cos(r),y:a*Math.sin(u)*Math.sin(r),z:a*Math.cos(u)}}function gt(e){return e==="index"||e.endsWith("/index")}function mt(e){return e==="tags"||e.startsWith("tags/")}function Jt(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function pt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Ge(e,n){return e.multilingual?.locale?e.multilingual.locale:pt(e.slug,n).locale}function Qt(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${pt(e.slug,n).permalink}`}function en(e,n){let o=e.find(r=>Ge(r,n.prefixes)===n.localeId)??e.find(r=>Ge(r,n.prefixes)===n.sourceLocale)??e.find(r=>Ge(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Le(e,n,o){return Math.min(o,Math.max(n,e))}function st(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function tn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function He(e){return tn(e).trim().toLowerCase()}function nn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function rn(e){let n=e.trim();return n.length===0||nn(n)||mt(n)||gt(n)?!0:He(n).length===0}function on(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function ht(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function sn(e,n){let o=ht(e);return o===null?!1:!n.includes(new URL(o).hostname)}function at(e){return`external:${e}`}function an(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),u=o.pathname;return(n.get(r)??0)>1&&u.length>1?`${r}${u}`:r}function ln(e){let n=new Map,o=new Map;for(let r of e){let u=He(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let a=r.title.trim().toLowerCase();a.length>0&&!o.has(a)&&o.set(a,r.slug);let h=a.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,r.slug)}return{byBasename:n,byTitle:o}}function cn(e,n,o){if(n.has(e))return e;let r=He(e),u=o.byBasename.get(r);if(u)return u;let a=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return a||null}function un(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function dn(e,n){let o=e.filter(c=>!gt(c.slug)&&!mt(c.slug)&&!Jt(c)),r=new Map;for(let c of o){let d=Qt(c,n.prefixes),g=r.get(d)??[];g.push(c),r.set(d,g)}let u=[];for(let c of r.values())u.push(en(c,n));let a=new Set(u.map(c=>c.slug)),h=ln(u),y=new Map,k=[],E=new Set,F=new Map,N=c=>{y.set(c,(y.get(c)??0)+1)},O=(c,d,g)=>c<d?`${c}|${d}|${g}`:`${d}|${c}|${g}`,M=(c,d,g,v)=>{let P=O(c,d,g);E.has(P)||(E.add(P),k.push({source:c,target:d,kind:g}),v&&(N(c),N(d)))};for(let c of u)for(let d of c.links){if(rn(d))continue;let g=cn(d,a,h);g!==null&&g!==c.slug&&M(c.slug,g,"wikilink",!0)}let I=on(),B=new Set;for(let c of u)for(let d of c.externalLinks){let g=ht(d);g===null||!sn(g,I)||(B.add(g),M(c.slug,at(g),"external",!0))}let A=new Map;for(let c of B){let d=new URL(c).hostname.replace(/^www\\./,"");A.set(d,(A.get(d)??0)+1)}let H=new Set,$=new Map;for(let c of u)for(let d of c.tags){F.set(d,(F.get(d)??0)+1);let g=`tag:${d}`;H.add(g),M(c.slug,g,"tag",!0);let v=$.get(d)??[];v.push(c.slug),$.set(d,v)}for(let c of u)if(!(c.tags.length<2))for(let d=0;d<c.tags.length;d+=1)for(let g=d+1;g<c.tags.length;g+=1)M(`tag:${c.tags[d]}`,`tag:${c.tags[g]}`,"cooc",!1);let z=new Map;for(let c of u){let d=st(c.slug);if(d==="root")continue;let g=z.get(d)??[];g.push(c.slug),z.set(d,g)}for(let c of z.values()){if(c.length<2)continue;let d=[...c].sort();for(let g=0;g<d.length;g+=1){let v=d[(g+1)%d.length],P=d[(g+rt)%d.length],x=d[g];x===void 0||v===void 0||(x!==v&&!E.has(O(x,v,"wikilink"))&&M(x,v,"folder",!1),d.length>rt+1&&P!==void 0&&x!==P&&!E.has(O(x,P,"wikilink"))&&M(x,P,"folder",!1))}}let U=[...y.values()],q=U.length>0?Math.min(...U):0,K=U.length>0?Math.max(...U):0,T=c=>{let d=y.get(c)??0,g=Math.sqrt(d),v=Math.sqrt(q),x=Math.sqrt(K)-v;return x===0?(le+Ce)/2:le+(g-v)/x*(Ce-le)},J=[...u].sort((c,d)=>(y.get(d.slug)??0)-(y.get(c.slug)??0)),R=new Set(J.filter(c=>(y.get(c.slug)??0)>0).slice(0,At).map(c=>c.slug)),Q=u.map(c=>{let d=R.has(c.slug),g=d?ye(c.slug,Qe.min,Qe.max):ye(c.slug,Je.min,Je.max);return{id:c.slug,name:c.title,type:"note",val:T(c.slug),degree:y.get(c.slug)??0,isHub:d,tag:"",slug:c.slug,url:"",folder:st(c.slug),tags:c.tags,dominantTag:un(c.tags,F),excerpt:Zt(c.content),phase:ce(c.slug),x:g.x,y:g.y,z:g.z}});for(let c of B){let d=at(c),g=ye(d,et.min,et.max);Q.push({id:d,name:an(c,A),type:"external",val:T(d)*$t,degree:y.get(d)??0,isHub:!1,tag:"",slug:"",url:c,folder:"",tags:[],dominantTag:"",excerpt:c,phase:ce(d),x:g.x,y:g.y,z:g.z})}for(let c of H){let d=c.slice(4),g=ye(c,tt.min,tt.max);Q.push({id:c,name:d,type:"tag",val:Le(T(c)*.7,le,Ce),degree:y.get(c)??0,isHub:!1,tag:d,slug:`tags/${d}`,url:"",folder:"tag",tags:[d],dominantTag:d,excerpt:"",phase:ce(c),x:g.x,y:g.y,z:g.z})}return{nodes:Q,links:k}}function fn(e){let n=new Map,o=(r,u)=>{let a=n.get(r)??new Set;a.add(u),n.set(r,a)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let u=G(r.source),a=G(r.target);o(u,a),o(a,u)}return n}function G(e){return typeof e=="string"?e:e.id}function Y(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function bt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Y("--light","#ffffff"),ink:Y("--darkgray","#0f0f0f"),accent:Y("--secondary","#a52142"),tertiary:Y("--tertiary","#c75b75"),gray:Y("--gray","#737373"),external:Y("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function ke(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function gn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function mn(){return gn()&&!ke()}function D(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Te(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function ie(e,n){let o=Te(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Z(e,n,o){let r=Te(e),u=Te(n);if(!r||!u)return e;let a=(h,y)=>Math.round(h+(y-h)*o);return`rgb(${a(r.r,u.r)}, ${a(r.g,u.g)}, ${a(r.b,u.b)})`}function yt(e){return D()?Z(e.bg,"#05070f",.88):e.bg}function pn(e){let n=Te(e);if(!n)return e;let o=r=>{let u=r/255,a=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(a*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function hn(e){return pn(yt(e))}function wt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function it(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:wt(e,[n.accent,n.tertiary,n.ink,n.gray])}function bn(e,n){return e.length===0?n.ink:wt(e,[n.accent,n.tertiary])}function kt(e){let n=e.split("/").map(a=>encodeURIComponent(a)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function yn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=kt(e);window.location.assign(n.toString())}function wn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function kn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function lt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Ln(e){let o=await import(e?Pt:Nt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):kn(o)}function Tn(){try{let e=sessionStorage.getItem(dt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function En(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(ft);if(!n)return e;let o=Ae(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,a=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:a,spread:h}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function we(e){try{sessionStorage.setItem(ft,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Ie(e){try{sessionStorage.setItem(dt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function vn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function xn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Sn(e,n){return e.type==="note"&&e.folder===n}function ct(e,n){let o=G(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function Cn(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(a=>a.type==="note").map(a=>a.folder))];return u.forEach((a,h)=>{let y=Math.PI*2*h/Math.max(u.length,1),k={x:Math.cos(y)*o,y:Math.sin(y)*o,z:0};for(let E of e.nodes)E.type==="note"&&E.folder===a&&r.set(E.id,k)}),r}if(n==="tag"){let u=e.nodes.filter(h=>h.type==="tag"),a=new Map;u.forEach((h,y)=>{let k=Math.PI*2*y/Math.max(u.length,1);a.set(h.tag,{x:Math.cos(k)*o,y:Math.sin(k)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let y=a.get(h.tag);y&&r.set(h.id,y)}else if(h.dominantTag.length>0){let y=a.get(h.dominantTag);y&&r.set(h.id,y)}}return r}function Mn(e,n){let o=[],r=u=>{let a=n*u;for(let h of o){let y=e(h);y&&(h.vx=(h.vx??0)+(y.x-(h.x??0))*a,h.vy=(h.vy??0)+(y.y-(h.y??0))*a,h.vz=(h.vz??0)+(y.z-(h.z??0))*a)}};return r.initialize=u=>{o=u},r}function ut(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let a=u.getAttribute(r);u.setAttribute("aria-pressed",a===o?"true":"false")}}function Nn(e,n,o,r){let u=fn(n.links),a={lens:Tn(),allLabels:!1,focusTag:null,focusFolder:null},h=null,y=null,k=En(),E=()=>y??h,F=new Set(n.nodes.filter(t=>t.type==="note").sort((t,s)=>s.degree-t.degree).slice(0,Ht).map(t=>t.id)),N=t=>{let s=t.val;return t.isHub&&(s*=Ft),a.lens==="tag"&&t.type==="tag"&&(s*=Ut),a.focusTag&&t.id===`tag:${a.focusTag}`&&(s*=Bt),s},O=t=>{let s=E();return a.allLabels||s===t.id||s!==null&&(u.get(s)?.has(t.id)??!1)?!0:F.has(t.id)},M=t=>{let s=Le((N(t)-le)/5,0,1);return(We+s*(qt-We))*k.nodeScale},I=t=>{let s=E();if(s!==null)return s===t||(u.get(s)?.has(t)??!1);if(a.focusTag===null&&a.focusFolder===null)return!0;let l=n.nodes.find(i=>i.id===t);return l?a.focusFolder!==null?Sn(l,a.focusFolder):a.focusTag!==null&&xn(l,a.focusTag):!1},B=t=>t.type==="external"?o.current.external:a.lens==="tag"?t.type==="tag"?o.current.tertiary:bn(t.dominantTag,o.current):a.lens==="folder"?t.type==="tag"?o.current.tertiary:it(t.folder,o.current):a.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,A=t=>{let s=E();if(s!==null&&(s===t.id||(u.get(s)?.has(t.id)??!1)))return o.current.accent;let l=B(t);return I(t.id)?D()?t.type==="external"?Z(o.current.external,"#ffffff",.18):t.type==="tag"?Z(o.current.tertiary,"#ffffff",.22):t.isHub?Z("#fff3e4",o.current.accent,.1):Z("#ffffff",o.current.accent,.12):l:ie(l,se)},H=t=>{let s=D();return t==="wikilink"?.34:t==="external"?.3:t==="tag"?s?.22:.2:s?.12:.11},$=t=>{let s=G(t.source),l=G(t.target),i=E();return i!==null&&(s===i||l===i)?D()?.72:.62:(i!==null||a.focusTag!==null||a.focusFolder!==null)&&(!I(s)||!I(l))?H(t.kind)*se:H(t.kind)},z=t=>{let s=G(t.source),l=G(t.target),i=E();return i!==null&&(s===i||l===i)?Z(o.current.accent,Ze,.45):D()?Ze:o.current.gray},U=t=>ie(z(t),$(t)),q=()=>n,K=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let s=Math.hypot(ae.x,ae.y,ae.z),l=s/Le(k.zoom,.4,2.5),i=e.cameraPosition(),f=ae,m=s;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let p=Math.hypot(i.x,i.y,i.z);p>1&&(f={x:i.x,y:i.y,z:i.z},m=p)}let b=l/m;e.cameraPosition({x:f.x*b,y:f.y*b,z:f.z*b},Ke,t);return}typeof e.zoom=="function"&&e.zoom(k.zoom,t)},T=()=>{let t=Xt(k.spread),s=Me.min+t*(Me.max-Me.min),l=Ne.min+t*(Ne.max-Ne.min),i=e.d3Force("charge");i?.strength&&i.strength(s);let f=e.d3Force("link");f?.distance&&f.distance(L=>a.lens==="tag"&&L.kind==="tag"?l*.72:l),f?.strength&&f.strength(L=>{if(L.kind==="cooc"||L.kind==="folder")return .04;if(a.lens==="tag"&&L.kind==="tag")return .95;if(a.lens==="folder"){let C=ct(n.nodes,L.source),_=ct(n.nodes,L.target);if(C!==null&&C===_)return .72}return L.kind==="tag"?.65:.8});let m=e.d3Force("center");m?.strength&&m.strength(Rt);let b=Pe.min+t*(Pe.max-Pe.min),p=Cn(n,a.lens,b),w=a.lens==="folder"||a.lens==="tag"?.08:0;e.d3Force("cluster",Mn(L=>p.get(L.id)??null,w)),r.use3d&&e.d3Force("flattenZ",null)},J=new Map,R=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,s=r.three;J.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(s===null),e.nodeThreeObject(l=>{let i=M(l),f=A(l),m=!1;if(s)if(D()){let L=l.isHub?1.35:1.1,C=new s.MeshLambertMaterial({color:f,emissive:f,emissiveIntensity:L});J.set(l.id,{material:C,base:L,phase:l.phase}),m=new s.Mesh(new s.SphereGeometry(i,14,14),C)}else m=new s.Mesh(new s.SphereGeometry(i,14,14),new s.MeshBasicMaterial({color:f}));if(!O(l)||!t)return m;let b=new t(l.name),p=D()?"rgba(255, 255, 255, 0.85)":o.current.ink;if(b.color=I(l.id)?p:ie(p,se),b.fontWeight="400",b.strokeWidth=0,b.textHeight=F.has(l.id)?6.5:5.5,b.center.set(0,.5),b.position.x=i+2,b.position.y=0,!s||m===!1)return b;let w=new s.Group;return w.add(m),w.add(b),w})},Q=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let s=new t.Vector3(0,1,0);e.linkThreeObject(l=>{let i=Vt[l.kind]*k.edgeScale,f=new t.MeshBasicMaterial({color:z(l),transparent:!0,opacity:$(l),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),f)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,i)=>{let f=i.end.x-i.start.x,m=i.end.y-i.start.y,b=i.end.z-i.start.z,p=Math.sqrt(f*f+m*m+b*b);return l.position.x=(i.start.x+i.end.x)/2,l.position.y=(i.start.y+i.end.y)/2,l.position.z=(i.start.z+i.end.z)/2,l.scale.x=1,l.scale.y=Math.max(p,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(s,new t.Vector3(f,m,b).normalize()),!0})},c=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let s=E();if(s===null)return 0;let l=G(t.source),i=G(t.target);return l===s||i===s?2:0})},d=()=>{e.nodeVal(N),e.nodeColor(A),e.linkColor(U),e.linkWidth(t=>{let s=G(t.source),l=G(t.target),i=E(),f=k.edgeScale;return i!==null&&(s===i||l===i)?.7*f:t.kind==="wikilink"||t.kind==="external"?.5*f:(t.kind==="tag"?.35:.25)*f}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ve),c(),Q(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},g=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let s=(m,b)=>{let p=document.createElement("span");p.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=m;let L=document.createElement("span");return L.textContent=b,p.append(w,L),p},l=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",f=r.root.dataset.legendLinks??"Links";t.replaceChildren(s(o.current.ink,l),s(o.current.tertiary,i),s(o.current.external,f))},v=t=>{let s=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let m=document.createElement("span");m.className="graph-landing__dot",m.style.background=t.dotColor,i.append(m)}i.append(document.createTextNode(t.label));let f=document.createElement("span");return f.className="graph-landing__tag-count",f.textContent=String(t.count),l.append(i,f),s.append(l),s},P=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let s=r.root.querySelector("[data-graph-facet-label]"),l=r.root.querySelector(".graph-landing__tags");if(a.lens==="folder"){let f=r.root.dataset.folderRootLabel??"root",m=new Map;for(let p of n.nodes)p.type==="note"&&m.set(p.folder,(m.get(p.folder)??0)+1);let b=[...m.entries()].sort((p,w)=>w[1]-p[1]);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=b.length===0),t.replaceChildren(...b.map(([p,w])=>v({dataset:{key:"graphFolder",value:p},pressed:a.focusFolder===p,dotColor:it(p,o.current),label:p==="root"?f:p,count:w})));return}let i=n.nodes.filter(f=>f.type==="tag").sort((f,m)=>m.degree-f.degree).slice(0,16);s instanceof HTMLElement&&(s.textContent=r.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=i.length===0),t.replaceChildren(...i.map(f=>v({dataset:{key:"graphTag",value:f.tag},pressed:a.focusTag===f.tag,dotColor:null,label:f.tag,count:f.degree})))},x=()=>{e.graphData(q()),T(),d(),R(),g(),P(),ut(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),e.d3ReheatSimulation()},Lt=t=>{a.lens=t,t!=="tag"&&(a.focusTag=null),t!=="folder"&&(a.focusFolder=null),Ie(t),x()},Tt=t=>{a.focusTag=a.focusTag===t?null:t,a.focusFolder=null,a.focusTag&&(a.lens="tag",Ie("tag")),x()},Et=t=>{a.focusFolder=a.focusFolder===t?null:t,a.focusTag=null,a.focusFolder&&(a.lens="folder",Ie("folder")),x()},Re=()=>r.use3d?hn(o.current):yt(o.current);e.graphData(q()),e.backgroundColor(Re()),e.nodeLabel(t=>t.name),e.nodeRelSize(Dt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Ot),typeof e.linkOpacity=="function"&&e.linkOpacity(Ve),T(),d();let W=r.root.querySelector("[data-graph-preview]"),ue=r.root.querySelector("[data-graph-preview-chip]"),de=r.root.querySelector("[data-graph-preview-title]"),fe=r.root.querySelector("[data-graph-preview-excerpt]"),ge=0;window.addCleanup(()=>window.clearTimeout(ge));let vt=t=>{if(!(W instanceof HTMLElement)||!(ue instanceof HTMLElement)||!(de instanceof HTMLElement)||!(fe instanceof HTMLElement))return;window.clearTimeout(ge);let s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let f=r.root.dataset.previewTagTemplate??"{n} notes";ue.textContent=l,de.textContent=`#${t.tag}`,fe.textContent=f.replace("{n}",String(t.degree))}else t.type==="external"?(ue.textContent=i,de.textContent=t.name,fe.textContent=t.url):(ue.textContent=s,de.textContent=t.name,fe.textContent=t.excerpt);W.hidden=!1,W.dataset.visible="true"},De=()=>{W instanceof HTMLElement&&(window.clearTimeout(ge),ge=window.setTimeout(()=>{W.dataset.visible="false",W.hidden=!0},jt))};if(e.onNodeHover(t=>{h=t?t.id:null,y===null&&(t?vt(t):De()),d(),r.use3d&&R()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!ke()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=zt;let s=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(s))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=D()?je:0,r.bloomPass.radius=Xe,r.bloomPass.threshold=Ye,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ae,Ke),k.zoom!==1&&K(0)),R(),!ke()){let t=0,s=()=>{let l=performance.now()/1e3*Wt;for(let i of J.values())i.material.emissiveIntensity=i.base*(1+Kt*Math.sin(l+i.phase));t=window.requestAnimationFrame(s)};t=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,s,l)=>{let i=M(t),f=t.x??0,m=t.y??0;if(s.save(),s.beginPath(),s.arc(f,m,i,0,Math.PI*2),s.fillStyle=A(t),s.fill(),t.isHub&&(s.strokeStyle=I(t.id)?o.current.accent:ie(o.current.accent,se),s.lineWidth=1.2/l,s.stroke()),O(t)){let b=11.5/l;s.font=`${b}px ${o.current.font}`,s.fillStyle=I(t.id)?o.current.ink:ie(o.current.ink,se),s.textAlign="center",s.textBaseline="bottom",s.fillText(t.name,f,m-i-6)}s.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,s,l)=>{let i=M(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,i,0,Math.PI*2),l.fillStyle=s,l.fill()});let me=r.root.querySelector("[data-graph-inspect]"),pe=r.root.querySelector("[data-graph-inspect-chip]"),he=r.root.querySelector("[data-graph-inspect-title]"),be=r.root.querySelector("[data-graph-inspect-excerpt]"),ve=r.root.querySelector("[data-graph-inspect-tags]"),xe=r.root.querySelector("[data-graph-inspect-connected]"),S=r.root.querySelector("[data-graph-inspect-open]"),j=t=>{r.root.dataset.railOpen=t?"true":"false";let s=r.root.querySelector("[data-graph-rail-toggle]"),l=r.root.querySelector("[data-graph-rail-scrim]"),i=r.root.querySelector("#graph-landing-rail");s instanceof HTMLButtonElement&&s.setAttribute("aria-expanded",t?"true":"false"),i instanceof HTMLElement&&i.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},Oe=t=>{ke()||typeof e.controls!="function"||(e.controls().autoRotate=t)},xt=t=>{let s=u.get(t.id)??new Set,l=[];for(let i of s){let f=n.nodes.find(m=>m.id===i);f&&l.push(f)}return l.sort((i,f)=>f.degree-i.degree)},St=t=>{if(!(me instanceof HTMLElement)||!(pe instanceof HTMLElement)||!(he instanceof HTMLElement)||!(be instanceof HTMLElement)||!(ve instanceof HTMLElement)||!(xe instanceof HTMLElement))return;let s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links",f=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(pe.textContent=l,he.textContent=`#${t.tag}`,be.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(pe.textContent=i,he.textContent=t.name,be.textContent=t.url):(pe.textContent=s,he.textContent=t.name,be.textContent=t.excerpt);let m=t.tags.map(p=>{let w=document.createElement("li");return w.textContent=p,w});ve.replaceChildren(...m),ve.hidden=m.length===0;let b=xt(t).slice(0,12);if(b.length===0){let p=document.createElement("li");p.className="graph-landing__inspect-empty",p.textContent=f,xe.replaceChildren(p)}else xe.replaceChildren(...b.map(p=>{let w=document.createElement("li"),L=document.createElement("button");L.type="button",L.className="graph-landing__inspect-link",L.dataset.graphInspectId=p.id;let C=p.type==="tag"?l:p.type==="external"?i:s,_=document.createElement("span");_.textContent=C;let V=document.createElement("strong");return V.textContent=p.type==="tag"?`#${p.tag}`:p.name,L.append(_,V),w.append(L),w}));S instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(S.hidden=!1,S.href=kt(t.slug).toString(),S.textContent=r.root.dataset.inspectRead??"Read note",S.removeAttribute("target"),S.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(S.hidden=!1,S.href=t.url,S.textContent=r.root.dataset.inspectOpenExternal??"Open",S.target="_blank",S.rel="noopener noreferrer"):(S.hidden=!0,S.removeAttribute("href"),S.removeAttribute("target"),S.removeAttribute("rel"))),me.hidden=!1,r.root.dataset.inspecting="true",j(!1),De()},ee=()=>{y=null,me instanceof HTMLElement&&(me.hidden=!0),r.root.dataset.inspecting="false",Oe(!0),d(),r.use3d&&R()},ze=t=>{if(y===t.id&&t.type==="note"&&t.slug.length>0){yn(t.slug);return}if(y===t.id&&t.type==="external"&&t.url.length>0){wn(t.url);return}y=t.id,St(t),d(),r.use3d&&R()},Fe=t=>{ze(t)},Se=!1;e.onNodeClick((t,s)=>{t&&(Se=!0,s&&typeof s.stopPropagation=="function"&&s.stopPropagation(),Fe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{ee(),j(!1)});let X=r.root.querySelector("#graph-landing-mount");if(X instanceof HTMLElement){let t=null,s=f=>{t={x:f.clientX,y:f.clientY}},l=(f,m)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=X.getBoundingClientRect(),p=f-b.left,w=m-b.top,L=null,C=4096;for(let _ of q().nodes){if(_.x===void 0||_.y===void 0)continue;let V=e.graph2ScreenCoords(_.x,_.y,_.z??0),Ct=(V.x-p)**2+(V.y-w)**2,Mt=(V.x-f)**2+(V.y-m)**2,qe=Math.min(Ct,Mt);qe<C&&(C=qe,L=_)}return L},i=f=>{let m=t;if(t=null,!m)return;if((f.clientX-m.x)**2+(f.clientY-m.y)**2>25){Oe(!1);return}window.setTimeout(()=>{if(Se){Se=!1;return}let p=l(f.clientX,f.clientY);p?Fe(p):ee()},0)};X.addEventListener("pointerdown",s,!0),X.addEventListener("pointerup",i,!0),window.addCleanup(()=>{X.removeEventListener("pointerdown",s,!0),X.removeEventListener("pointerup",i,!0)})}ut(r.root,"[data-graph-lens]",a.lens,"data-graph-lens"),g(),P(),a.lens!=="all"&&x(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ue=()=>{o.current=bt(),e.backgroundColor(Re()),r.bloomPass&&(r.bloomPass.strength=D()?je:0,r.bloomPass.radius=Xe,r.bloomPass.threshold=Ye),d(),R(),g()};document.addEventListener("themechange",Ue),window.addCleanup(()=>document.removeEventListener("themechange",Ue));let Be=t=>{let s=t.target;if(!(s instanceof Element))return;if(s.closest("[data-graph-inspect-close]")){ee();return}if(s.closest("[data-graph-rail-toggle]")){let w=r.root.dataset.railOpen!=="true";w&&ee(),j(w);return}if(s.closest("[data-graph-rail-scrim]")){j(!1);return}let l=s.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let w=n.nodes.find(L=>L.id===l.dataset.graphInspectId);w&&ze(w);return}let i=s.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&vn(i.dataset.graphLens)){Lt(i.dataset.graphLens);return}let f=s.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){Tt(f.dataset.graphTag);return}let m=s.closest("[data-graph-folder]");if(m instanceof HTMLElement&&m.dataset.graphFolder){Et(m.dataset.graphFolder);return}if(s.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let b=s.closest("[data-graph-labels]");if(b instanceof HTMLButtonElement){a.allLabels=!a.allLabels,b.setAttribute("aria-pressed",a.allLabels?"true":"false");let w=b.dataset.labelShow??"Labels",L=b.dataset.labelHide??"Labels",C=a.allLabels?L:w;b.title=C,b.setAttribute("aria-label",C),R();return}if(s.closest("[data-graph-theme]")){let w=D()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let p=s.closest("[data-graph-tags-toggle]");if(p instanceof HTMLButtonElement){let w=r.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let L=w.dataset.open==="true";w.dataset.open=L?"false":"true",p.setAttribute("aria-expanded",L?"false":"true")}}},te=r.root.querySelector("[data-graph-node-scale]"),ne=r.root.querySelector("[data-graph-edge-scale]");if(te instanceof HTMLInputElement){te.value=String(Math.round(k.nodeScale*100));let t=()=>{k.nodeScale=Number(te.value)/100,we(k),d(),r.use3d&&R()};te.addEventListener("input",t),window.addCleanup(()=>te.removeEventListener("input",t))}if(ne instanceof HTMLInputElement){ne.value=String(Math.round(k.edgeScale*100));let t=()=>{k.edgeScale=Number(ne.value)/100,we(k),d()};ne.addEventListener("input",t),window.addCleanup(()=>ne.removeEventListener("input",t))}let re=r.root.querySelector("[data-graph-zoom]");if(re instanceof HTMLInputElement){re.value=String(Math.round(k.zoom*100));let t=()=>{k.zoom=Number(re.value)/100,we(k),K(200)};re.addEventListener("input",t),window.addCleanup(()=>re.removeEventListener("input",t))}let oe=r.root.querySelector("[data-graph-spread]");if(oe instanceof HTMLInputElement){oe.value=String(Math.round(k.spread*100));let t=()=>{k.spread=Number(oe.value)/100,we(k),T(),e.d3ReheatSimulation()};oe.addEventListener("input",t),window.addCleanup(()=>oe.removeEventListener("input",t))}j(!1),r.root.addEventListener("click",Be),window.addCleanup(()=>r.root.removeEventListener("click",Be));let $e=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){j(!1);return}ee()}};window.addEventListener("keydown",$e),window.addCleanup(()=>window.removeEventListener("keydown",$e))}async function Pn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",a=(e.dataset.localePrefixes??"").split(",").map(T=>T.trim()).filter(T=>T.length>0),h=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",y=!1,k=null,E={current:bt()},F=()=>{y=!0,k&&(k._destructor(),k=null),delete e.dataset.graphReady};window.addCleanup(F);let N=mn(),O=Ln(N),M=N?import(_t).then(T=>T.default??null).catch(T=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",T),null)):Promise.resolve(null),I=N?import(Gt).catch(T=>(console.error("[graph-landing] three unavailable; using default node spheres",T),null)):Promise.resolve(null),B=N?import(It).then(T=>T.UnrealBloomPass?new T.UnrealBloomPass:null).catch(T=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",T),null)):Promise.resolve(null);O.catch(()=>{});let A;try{A=Ae(await fetchData)}catch(T){throw lt(n,"Graph could not load content index."),T}if(y)return;let H=dn(Yt(A),{localeId:r,sourceLocale:u,prefixes:a}),$=h.replace("{n}",String(H.nodes.length)).replace("{m}",String(H.links.length));for(let T of o)T.textContent=$;let z;try{z=await O}catch(T){throw lt(n,"Graph could not load. Check your network connection."),T}let[U,q,K]=await Promise.all([M,I,B]);y||(n.replaceChildren(),k=z(n),n.__graphLanding=k,n.__graphData=H,Nn(k,H,E,{use3d:N,root:e,spriteText:U,bloomPass:K,three:q}))}var _n="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(_n,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{Pn()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  --graph-external: #3f6f8c;\n  height: 100dvh;\n  overflow: hidden;\n}\n\nhtml[saved-theme=dark]:has(.graph-landing) {\n  --graph-external: #8fb6c8;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 88px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: 64px;\n  touch-action: pan-y;\n  transform: translateX(calc(-100% - 20px));\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-start;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  backdrop-filter: blur(10px);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  flex: 0 0 auto;\n  height: 40px;\n  justify-content: center;\n  order: -1;\n  pointer-events: auto;\n  width: 40px;\n}\n\n.graph-landing__rail-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--secondary);\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--lightgray);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: color-mix(in srgb, var(--light) 78%, transparent);\n    border-bottom: 1px solid var(--lightgray);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 40px;\n    min-height: 40px;\n  }\n  .graph-landing__rail-toggle {\n    background: transparent;\n    border: 0;\n    height: 44px;\n    width: 44px;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    border-radius: 16px 16px 0 0;\n    bottom: 0;\n    box-shadow: 0 -12px 40px rgba(8, 10, 16, 0.22);\n    left: 0;\n    max-height: min(58dvh, 100dvh - 4.5rem);\n    max-width: none;\n    opacity: 1;\n    padding: 18px 14px max(14px, env(safe-area-inset-bottom));\n    pointer-events: none;\n    right: 0;\n    top: auto;\n    transform: translateY(110%);\n    visibility: visible;\n    width: auto;\n    z-index: 4;\n  }\n  .graph-landing__rail::before {\n    background: var(--lightgray);\n    border-radius: 999px;\n    content: "";\n    height: 4px;\n    left: 50%;\n    position: absolute;\n    top: 8px;\n    transform: translateX(-50%);\n    width: 36px;\n  }\n  .graph-landing[data-rail-open=true] .graph-landing__rail {\n    transform: translateY(0);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: color-mix(in srgb, var(--light) 72%, transparent);\n    border-bottom-color: var(--lightgray);\n  }\n}';
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