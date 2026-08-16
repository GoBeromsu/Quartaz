// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function P(e){return typeof e=="string"?e:e.id}function et(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((m,E)=>E.degree!==m.degree?E.degree-m.degree:m.id<E.id?-1:m.id>E.id?1:0).slice(0,Math.max(0,n)),c=new Set(r.map(m=>m.id)),s=e.links.filter(m=>{let E=P(m.source),v=P(m.target);return c.has(E)&&c.has(v)});return{nodes:r,links:s}}function tt(e,n,o,r){let c=new Set,s=Math.max(0,Math.floor(r));if(s<=0)return c;let m=new Set([o]),E=new Set([o]);for(let v=0;v<s;v+=1){let L=new Set;for(let G of E)for(let g of e.get(G)??[])m.has(g)||(m.add(g),L.add(g),n.has(g)||c.add(g));E=L}return c}var Ne="0.179.1",Ut="https://esm.sh/force-graph@1.51.4",Bt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ne}`,$t=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ne}`,qt=`https://esm.sh/three@${Ne}`,Yt=`https://esm.sh/three@${Ne}/examples/jsm/postprocessing/UnrealBloomPass.js`,Kt=8,Wt=14;var de=1,He=3.5,jt=.05,Xt=2.6,Zt=1,nt=1,ce=.18,Tt="graph-landing:lens",xt="graph-landing:tune",$e="graph-landing:ambient-audio",rt="UDVtMYqUAyw",Te=12,Jt=28e3,Qt="https://www.youtube.com/iframe_api",en=.18,tn=1.4,nn=1.25,rn=1.15,on=.55,ue={x:330,y:235,z:565},ot={x:0,y:0,z:0},at=1.3,an=3.2,st=1.05,it=.32,lt=.28,sn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},ln="#a8b0c2",cn="#2a3348",ct={min:80,max:200},ut={min:40,max:110},dt={min:160,max:280},ft={min:90,max:170},gt=220,mt=2,un=.15,dn=.8,fn=350,Re={min:-100,max:-190},Oe={min:72,max:116},Fe={min:130,max:260};function gn(e){return Me(e-.5,0,1)}function Ce(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function ze(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function mn(e){let n=[];for(let o of Object.values(e)){let r=Ce(o),c=typeof r.slug=="string"?r.slug:"";if(c.length===0)continue;let s=r.multilingual,m=s&&typeof s=="object"?s:void 0;n.push({slug:c,title:typeof r.title=="string"?r.title:c,links:ze(r.links),tags:ze(r.tags),externalLinks:ze(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:m})}return n}function pn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=gt?n:`${n.slice(0,gt).trimEnd()}\\u2026`}function fe(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function pt(e){return fe(e)/(2*Math.PI)}function xe(e,n,o){let r=fe(e),c=Math.acos(2*pt(`${e}:phi`)-1),s=n+(o-n)*pt(`${e}:r`);return{x:s*Math.sin(c)*Math.cos(r),y:s*Math.sin(c)*Math.sin(r),z:s*Math.cos(c)}}function Lt(e){return e==="index"||e.endsWith("/index")}function St(e){return e==="tags"||e.startsWith("tags/")}function hn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Ct(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Ve(e,n){return e.multilingual?.locale?e.multilingual.locale:Ct(e.slug,n).locale}function bn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Ct(e.slug,n).permalink}`}function yn(e,n){let o=e.find(r=>Ve(r,n.prefixes)===n.localeId)??e.find(r=>Ve(r,n.prefixes)===n.sourceLocale)??e.find(r=>Ve(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Me(e,n,o){return Math.min(o,Math.max(n,e))}function ht(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function wn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function qe(e){return wn(e).trim().toLowerCase()}function kn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function En(e){let n=e.trim();return n.length===0||kn(n)||St(n)||Lt(n)?!0:qe(n).length===0}function vn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Mt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Tn(e,n){let o=Mt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function bt(e){return`external:${e}`}function xn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),c=o.pathname;return(n.get(r)??0)>1&&c.length>1?`${r}${c}`:r}function Ln(e){let n=new Map,o=new Map;for(let r of e){let c=qe(r.slug);c.length>0&&!n.has(c)&&n.set(c,r.slug);let s=r.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,r.slug);let m=s.replace(/\\s+/g,"-");m.length>0&&!o.has(m)&&o.set(m,r.slug)}return{byBasename:n,byTitle:o}}function Sn(e,n,o){if(n.has(e))return e;let r=qe(e),c=o.byBasename.get(r);if(c)return c;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return s||null}function Cn(e,n){return e.length===0?"":[...e].sort((r,c)=>(n.get(c)??0)-(n.get(r)??0))[0]??""}function Mn(e,n,o=void 0){let r=e.filter(u=>!Lt(u.slug)&&!St(u.slug)&&!hn(u)),c=new Map;for(let u of r){let f=bn(u,n.prefixes),h=c.get(f)??[];h.push(u),c.set(f,h)}let s=[];for(let u of c.values())s.push(yn(u,n));let m=new Set(s.map(u=>u.slug)),E=Ln(s),v=new Map,L=[],G=new Set,g=new Map,D=u=>{v.set(u,(v.get(u)??0)+1)},I=(u,f,h)=>u<f?`${u}|${f}|${h}`:`${f}|${u}|${h}`,T=(u,f,h,b)=>{let A=I(u,f,h);return G.has(A)?!1:(G.add(A),L.push({source:u,target:f,kind:h}),b&&(D(u),D(f)),!0)};for(let u of s)for(let f of u.links){if(En(f))continue;let h=Sn(f,m,E);h!==null&&h!==u.slug&&T(u.slug,h,"wikilink",!0)}let C=vn(),R=new Set;for(let u of s)for(let f of u.externalLinks){let h=Mt(f);h===null||!Tn(h,C)||(R.add(h),T(u.slug,bt(h),"external",!0))}let F=new Map;for(let u of R){let f=new URL(u).hostname.replace(/^www\\./,"");F.set(f,(F.get(f)??0)+1)}let H=new Set,S=new Map;for(let u of s)for(let f of u.tags){g.set(f,(g.get(f)??0)+1);let h=`tag:${f}`;H.add(h),T(u.slug,h,"tag",!0);let b=S.get(f)??[];b.push(u.slug),S.set(f,b)}if(o!==!1){let u=o?.maxTagsPerNote,f=o?.maxEdges,h=0;e:for(let b of s)if(!(b.tags.length<2)&&!(u!==void 0&&b.tags.length>u))for(let A=0;A<b.tags.length;A+=1)for(let N=A+1;N<b.tags.length;N+=1){if(f!==void 0&&h>=f)break e;T(`tag:${b.tags[A]}`,`tag:${b.tags[N]}`,"cooc",!1)&&(h+=1)}}let M=new Map;for(let u of s){let f=ht(u.slug);if(f==="root")continue;let h=M.get(f)??[];h.push(u.slug),M.set(f,h)}for(let u of M.values()){if(u.length<2)continue;let f=[...u].sort();for(let h=0;h<f.length;h+=1){let b=f[(h+1)%f.length],A=f[(h+mt)%f.length],N=f[h];N===void 0||b===void 0||(N!==b&&!G.has(I(N,b,"wikilink"))&&T(N,b,"folder",!1),f.length>mt+1&&A!==void 0&&N!==A&&!G.has(I(N,A,"wikilink"))&&T(N,A,"folder",!1))}}let K=[...v.values()],j=K.length>0?Math.min(...K):0,X=K.length>0?Math.max(...K):0,U=u=>{let f=v.get(u)??0,h=Math.sqrt(f),b=Math.sqrt(j),N=Math.sqrt(X)-b;return N===0?(de+He)/2:de+(h-b)/N*(He-de)},B=[...s].sort((u,f)=>(v.get(f.slug)??0)-(v.get(u.slug)??0)),ne=new Set(B.filter(u=>(v.get(u.slug)??0)>0).slice(0,Kt).map(u=>u.slug)),z=s.map(u=>{let f=ne.has(u.slug),h=f?xe(u.slug,ut.min,ut.max):xe(u.slug,ct.min,ct.max);return{id:u.slug,name:u.title,type:"note",val:U(u.slug),degree:v.get(u.slug)??0,isHub:f,tag:"",slug:u.slug,url:"",folder:ht(u.slug),tags:u.tags,dominantTag:Cn(u.tags,g),excerpt:pn(u.content),phase:fe(u.slug),x:h.x,y:h.y,z:h.z}});for(let u of R){let f=bt(u),h=xe(f,dt.min,dt.max);z.push({id:f,name:xn(u,F),type:"external",val:U(f)*on,degree:v.get(f)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:fe(f),x:h.x,y:h.y,z:h.z})}for(let u of H){let f=u.slice(4),h=xe(u,ft.min,ft.max);z.push({id:u,name:f,type:"tag",val:Me(U(u)*.7,de,He),degree:v.get(u)??0,isHub:!1,tag:f,slug:`tags/${f}`,url:"",folder:"tag",tags:[f],dominantTag:f,excerpt:"",phase:fe(u),x:h.x,y:h.y,z:h.z})}return{nodes:z,links:L}}function Ue(e){let n=new Map,o=(r,c)=>{let s=n.get(r)??new Set;s.add(c),n.set(r,s)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let c=P(r.source),s=P(r.target);o(c,s),o(s,c)}return n}function ee(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Pt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ee("--light","#ffffff"),ink:ee("--darkgray","#0f0f0f"),accent:ee("--secondary","#a52142"),tertiary:ee("--tertiary","#c75b75"),gray:ee("--gray","#737373"),external:ee("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Se(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Nn(){return Pn()&&!Se()}function V(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Pe(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function te(e,n){let o=Pe(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Y(e,n,o){let r=Pe(e),c=Pe(n);if(!r||!c)return e;let s=(m,E)=>Math.round(m+(E-m)*o);return`rgb(${s(r.r,c.r)}, ${s(r.g,c.g)}, ${s(r.b,c.b)})`}function Nt(e){return V()?Y(e.bg,"#05070f",.88):e.bg}function In(e){let n=Pe(e);if(!n)return e;let o=r=>{let c=r/255,s=c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4);return Math.round(s*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function An(e){return In(Nt(e))}function It(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function yt(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:It(e,[n.accent,n.tertiary,n.ink,n.gray])}function _n(e,n){return e.length===0?n.ink:It(e,[n.accent,n.tertiary])}function At(e){let n=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let c=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(c,window.location.origin)}function Gn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=At(e);window.location.assign(n.toString())}function Dn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Hn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function wt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Rn(e){let o=await import(e?Bt:Ut);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Hn(o)}function On(){try{let e=sessionStorage.getItem(Tt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Fn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(xt);if(!n)return e;let o=Ce(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,c=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,m=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:c,zoom:s,spread:m}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Le(e){try{sessionStorage.setItem(xt,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Be(e){try{sessionStorage.setItem(Tt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function zn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Vn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Un(e,n){return e.type==="note"&&e.folder===n}function kt(e,n){let o=P(n),r=e.find(c=>c.id===o);return!r||r.type!=="note"?null:r.folder}function Bn(e,n,o){let r=new Map;if(n==="folder"){let c=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return c.forEach((s,m)=>{let E=Math.PI*2*m/Math.max(c.length,1),v={x:Math.cos(E)*o,y:Math.sin(E)*o,z:0};for(let L of e.nodes)L.type==="note"&&L.folder===s&&r.set(L.id,v)}),r}if(n==="tag"){let c=e.nodes.filter(m=>m.type==="tag"),s=new Map;c.forEach((m,E)=>{let v=Math.PI*2*E/Math.max(c.length,1);s.set(m.tag,{x:Math.cos(v)*o,y:Math.sin(v)*o,z:0})});for(let m of e.nodes)if(m.type==="tag"){let E=s.get(m.tag);E&&r.set(m.id,E)}else if(m.dominantTag.length>0){let E=s.get(m.dominantTag);E&&r.set(m.id,E)}}return r}function $n(e,n){let o=[],r=c=>{let s=n*c;for(let m of o){let E=e(m);E&&(m.vx=(m.vx??0)+(E.x-(m.x??0))*s,m.vy=(m.vy??0)+(E.y-(m.y??0))*s,m.vz=(m.vz??0)+(E.z-(m.z??0))*s)}};return r.initialize=c=>{o=c},r}function Et(e,n,o,r){for(let c of e.querySelectorAll(n)){if(!(c instanceof HTMLElement))continue;let s=c.getAttribute(r);c.setAttribute("aria-pressed",s===o?"true":"false")}}function qn(e,n,o,r){let c=Ue(n.links),s=(t,a,l)=>t<a?`${t}|${a}|${l}`:`${a}|${t}|${l}`,m=new Map,E=new Map,v=new Set,L=new Set;r.fullData!==n&&(m=new Map(r.fullData.nodes.map(t=>[t.id,t])),E=Ue(r.fullData.links),v=new Set(n.nodes.map(t=>t.id)),L=new Set(n.links.map(t=>s(P(t.source),P(t.target),t.kind))));let G=t=>{if(r.fullData===n)return!1;let a=tt(E,v,t,r.expandHops);if(a.size===0)return!1;for(let l of a){let i=m.get(l);i&&(n.nodes.push(i),v.add(l))}for(let l of r.fullData.links){let i=P(l.source),d=P(l.target);if(!v.has(i)||!v.has(d))continue;let p=s(i,d,l.kind);L.has(p)||(L.add(p),n.links.push(l))}return c=Ue(n.links),!0},g={lens:On(),allLabels:!1,focusTag:null,focusFolder:null},D=null,I=null,T=Fn(),C=()=>I??D,R=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,Wt).map(t=>t.id)),F=t=>{let a=t.val;return t.isHub&&(a*=tn),g.lens==="tag"&&t.type==="tag"&&(a*=nn),g.focusTag&&t.id===`tag:${g.focusTag}`&&(a*=rn),a},H=t=>{let a=C();return g.allLabels||a===t.id||a!==null&&(c.get(a)?.has(t.id)??!1)?!0:R.has(t.id)},S=t=>{let a=Me((F(t)-de)/5,0,1);return(at+a*(an-at))*T.nodeScale},M=t=>{let a=C();if(a!==null)return a===t||(c.get(a)?.has(t)??!1);if(g.focusTag===null&&g.focusFolder===null)return!0;let l=n.nodes.find(i=>i.id===t);return l?g.focusFolder!==null?Un(l,g.focusFolder):g.focusTag!==null&&Vn(l,g.focusTag):!1},K=t=>t.type==="external"?o.current.external:g.lens==="tag"?t.type==="tag"?o.current.tertiary:_n(t.dominantTag,o.current):g.lens==="folder"?t.type==="tag"?o.current.tertiary:yt(t.folder,o.current):g.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,j=t=>{let a=C();if(a!==null&&(a===t.id||(c.get(a)?.has(t.id)??!1)))return o.current.accent;let l=K(t);return M(t.id)?V()?t.type==="external"?Y(o.current.external,"#ffffff",.18):t.type==="tag"?Y(o.current.tertiary,"#ffffff",.22):t.isHub?Y("#fff3e4",o.current.accent,.1):Y("#ffffff",o.current.accent,.12):t.type==="external"?Y(o.current.external,"#08343a",.12):t.type==="tag"?Y(o.current.tertiary,o.current.accent,.55):t.isHub?Y(o.current.ink,o.current.accent,.22):l:te(l,ce)},X=t=>{let a=V();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},U=t=>{let a=P(t.source),l=P(t.target),i=C();return i!==null&&(a===i||l===i)?V()?.72:.78:(i!==null||g.focusTag!==null||g.focusFolder!==null)&&(!M(a)||!M(l))?X(t.kind)*ce:X(t.kind)},B=t=>{let a=P(t.source),l=P(t.target),i=C(),d=V()?ln:cn;return i!==null&&(a===i||l===i)?Y(o.current.accent,d,.45):d},ne=t=>te(B(t),U(t)),z=()=>n,u=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Math.hypot(ue.x,ue.y,ue.z),l=a/Me(T.zoom,.4,2.5),i=e.cameraPosition(),d=ue,p=a;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let y=Math.hypot(i.x,i.y,i.z);y>1&&(d={x:i.x,y:i.y,z:i.z},p=y)}let w=l/p;e.cameraPosition({x:d.x*w,y:d.y*w,z:d.z*w},ot,t);return}typeof e.zoom=="function"&&e.zoom(T.zoom,t)},f=()=>{let t=gn(T.spread),a=Re.min+t*(Re.max-Re.min),l=Oe.min+t*(Oe.max-Oe.min),i=e.d3Force("charge");i?.strength&&i.strength(a);let d=e.d3Force("link");d?.distance&&d.distance(x=>g.lens==="tag"&&x.kind==="tag"?l*.72:l),d?.strength&&d.strength(x=>{if(x.kind==="cooc"||x.kind==="folder")return .04;if(g.lens==="tag"&&x.kind==="tag")return .95;if(g.lens==="folder"){let O=kt(n.nodes,x.source),Z=kt(n.nodes,x.target);if(O!==null&&O===Z)return .72}return x.kind==="tag"?.65:.8});let p=e.d3Force("center");p?.strength&&p.strength(jt);let w=Fe.min+t*(Fe.max-Fe.min),y=Bn(n,g.lens,w),k=g.lens==="folder"||g.lens==="tag"?.08:0;e.d3Force("cluster",$n(x=>y.get(x.id)??null,k)),r.use3d&&e.d3Force("flattenZ",null)},h=new Map,b=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three;h.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let i=S(l),d=j(l),p=!1;if(a)if(V()){let x=l.isHub?1.35:1.1,O=new a.MeshLambertMaterial({color:d,emissive:d,emissiveIntensity:x});h.set(l.id,{material:O,base:x,phase:l.phase}),p=new a.Mesh(new a.SphereGeometry(i,14,14),O)}else p=new a.Mesh(new a.SphereGeometry(i,14,14),new a.MeshBasicMaterial({color:d}));if(!H(l)||!t)return p;let w=new t(l.name),y=V()?"rgba(255, 255, 255, 0.85)":te(o.current.ink,.88);if(w.color=M(l.id)?y:te(y,ce),w.fontWeight="400",w.strokeWidth=0,w.textHeight=R.has(l.id)?6.5:5.5,w.center.set(0,.5),w.position.x=i+2,w.position.y=0,!a||p===!1)return w;let k=new a.Group;return k.add(p),k.add(w),k})},A=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0);e.linkThreeObject(l=>{let i=sn[l.kind]*T.edgeScale,d=new t.MeshBasicMaterial({color:B(l),transparent:!0,opacity:U(l),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),d)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,i)=>{let d=i.end.x-i.start.x,p=i.end.y-i.start.y,w=i.end.z-i.start.z,y=Math.sqrt(d*d+p*p+w*w);return l.position.x=(i.start.x+i.end.x)/2,l.position.y=(i.start.y+i.end.y)/2,l.position.z=(i.start.z+i.end.z)/2,l.scale.x=1,l.scale.y=Math.max(y,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(a,new t.Vector3(d,p,w).normalize()),!0})},N=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=C();if(a===null)return 0;let l=P(t.source),i=P(t.target);return l===a||i===a?2:0})},$=()=>{e.nodeVal(F),e.nodeColor(j),e.linkColor(ne),e.linkWidth(t=>{let a=P(t.source),l=P(t.target),i=C(),d=T.edgeScale;return i!==null&&(a===i||l===i)?.7*d:t.kind==="wikilink"||t.kind==="external"?.5*d:(t.kind==="tag"?.35:.25)*d}),typeof e.linkOpacity=="function"&&e.linkOpacity(nt),N(),A(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},Ie=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(p,w)=>{let y=document.createElement("span");y.className="graph-landing__legend-item";let k=document.createElement("span");k.className="graph-landing__dot",k.setAttribute("aria-hidden","true"),k.style.background=p;let x=document.createElement("span");return x.textContent=w,y.append(k,x),y},l=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",d=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,l),a(o.current.tertiary,i),a(o.current.external,d))},Ye=t=>{let a=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let p=document.createElement("span");p.className="graph-landing__dot",p.style.background=t.dotColor,i.append(p)}i.append(document.createTextNode(t.label));let d=document.createElement("span");return d.className="graph-landing__tag-count",d.textContent=String(t.count),l.append(i,d),a.append(l),a},Ke=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),l=r.root.querySelector(".graph-landing__tags");if(g.lens==="folder"){let d=r.root.dataset.folderRootLabel??"root",p=new Map;for(let y of n.nodes)y.type==="note"&&p.set(y.folder,(p.get(y.folder)??0)+1);let w=[...p.entries()].sort((y,k)=>k[1]-y[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=w.length===0),t.replaceChildren(...w.map(([y,k])=>Ye({dataset:{key:"graphFolder",value:y},pressed:g.focusFolder===y,dotColor:yt(y,o.current),label:y==="root"?d:y,count:k})));return}let i=n.nodes.filter(d=>d.type==="tag").sort((d,p)=>p.degree-d.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=i.length===0),t.replaceChildren(...i.map(d=>Ye({dataset:{key:"graphTag",value:d.tag},pressed:g.focusTag===d.tag,dotColor:null,label:d.tag,count:d.degree})))},re=()=>{e.graphData(z()),f(),$(),b(),Ie(),Ke(),Et(r.root,"[data-graph-lens]",g.lens,"data-graph-lens"),e.d3ReheatSimulation()},_t=t=>{g.lens=t,t!=="tag"&&(g.focusTag=null),t!=="folder"&&(g.focusFolder=null),Be(t),re()},Gt=t=>{g.focusTag=g.focusTag===t?null:t,g.focusFolder=null,g.focusTag&&(g.lens="tag",Be("tag")),re()},Dt=t=>{g.focusFolder=g.focusFolder===t?null:t,g.focusTag=null,g.focusFolder&&(g.lens="folder",Be("folder")),re()},We=()=>r.use3d?An(o.current):Nt(o.current);e.graphData(z()),e.backgroundColor(We()),e.nodeLabel(t=>t.name),e.nodeRelSize(Xt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Zt),typeof e.linkOpacity=="function"&&e.linkOpacity(nt),f(),$();let J=r.root.querySelector("[data-graph-preview]"),ge=r.root.querySelector("[data-graph-preview-chip]"),me=r.root.querySelector("[data-graph-preview-title]"),pe=r.root.querySelector("[data-graph-preview-excerpt]"),he=0;window.addCleanup(()=>window.clearTimeout(he));let Ht=t=>{if(!(J instanceof HTMLElement)||!(ge instanceof HTMLElement)||!(me instanceof HTMLElement)||!(pe instanceof HTMLElement))return;window.clearTimeout(he);let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let d=r.root.dataset.previewTagTemplate??"{n} notes";ge.textContent=l,me.textContent=`#${t.tag}`,pe.textContent=d.replace("{n}",String(t.degree))}else t.type==="external"?(ge.textContent=i,me.textContent=t.name,pe.textContent=t.url):(ge.textContent=a,me.textContent=t.name,pe.textContent=t.excerpt);J.hidden=!1,J.dataset.visible="true"},je=()=>{J instanceof HTMLElement&&(window.clearTimeout(he),he=window.setTimeout(()=>{J.dataset.visible="false",J.hidden=!0},fn))};if(e.onNodeHover(t=>{D=t?t.id:null,I===null&&(t?Ht(t):je()),$(),r.use3d&&b()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Se()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=en;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(50),e.cooldownTicks(200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=V()?st:0,r.bloomPass.radius=it,r.bloomPass.threshold=lt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ue,ot),T.zoom!==1&&u(0)),b(),!Se()){let t=0,a=()=>{let l=performance.now()/1e3*dn;for(let i of h.values())i.material.emissiveIntensity=i.base*(1+un*Math.sin(l+i.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(60),e.cooldownTicks(180),e.nodeCanvasObject((t,a,l)=>{let i=S(t),d=t.x??0,p=t.y??0;if(a.save(),a.beginPath(),a.arc(d,p,i,0,Math.PI*2),a.fillStyle=j(t),a.fill(),t.isHub&&(a.strokeStyle=M(t.id)?o.current.accent:te(o.current.accent,ce),a.lineWidth=1.2/l,a.stroke()),H(t)){let w=11.5/l;a.font=`${w}px ${o.current.font}`,a.fillStyle=M(t.id)?o.current.ink:te(o.current.ink,ce),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,d,p-i-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,l)=>{let i=S(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,i,0,Math.PI*2),l.fillStyle=a,l.fill()});let be=r.root.querySelector("[data-graph-inspect]"),ye=r.root.querySelector("[data-graph-inspect-chip]"),we=r.root.querySelector("[data-graph-inspect-title]"),ke=r.root.querySelector("[data-graph-inspect-excerpt]"),Ae=r.root.querySelector("[data-graph-inspect-tags]"),_e=r.root.querySelector("[data-graph-inspect-connected]"),_=r.root.querySelector("[data-graph-inspect-open]"),Q=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),l=r.root.querySelector("[data-graph-rail-scrim]"),i=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),i instanceof HTMLElement&&i.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},Ee=t=>{Se()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Rt=t=>{let a=c.get(t.id)??new Set,l=[];for(let i of a){let d=n.nodes.find(p=>p.id===i);d&&l.push(d)}return l.sort((i,d)=>d.degree-i.degree)},Ot=t=>{if(!(be instanceof HTMLElement)||!(ye instanceof HTMLElement)||!(we instanceof HTMLElement)||!(ke instanceof HTMLElement)||!(Ae instanceof HTMLElement)||!(_e instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links",d=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(ye.textContent=l,we.textContent=`#${t.tag}`,ke.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(ye.textContent=i,we.textContent=t.name,ke.textContent=t.url):(ye.textContent=a,we.textContent=t.name,ke.textContent=t.excerpt);let p=t.tags.map(y=>{let k=document.createElement("li");return k.textContent=y,k});Ae.replaceChildren(...p),Ae.hidden=p.length===0;let w=Rt(t).slice(0,12);if(w.length===0){let y=document.createElement("li");y.className="graph-landing__inspect-empty",y.textContent=d,_e.replaceChildren(y)}else _e.replaceChildren(...w.map(y=>{let k=document.createElement("li"),x=document.createElement("button");x.type="button",x.className="graph-landing__inspect-link",x.dataset.graphInspectId=y.id;let O=y.type==="tag"?l:y.type==="external"?i:a,Z=document.createElement("span");Z.textContent=O;let q=document.createElement("strong");return q.textContent=y.type==="tag"?`#${y.tag}`:y.name,x.append(Z,q),k.append(x),k}));_ instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(_.hidden=!1,_.href=At(t.slug).toString(),_.textContent=r.root.dataset.inspectRead??"Read note",_.removeAttribute("target"),_.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(_.hidden=!1,_.href=t.url,_.textContent=r.root.dataset.inspectOpenExternal??"Open",_.target="_blank",_.rel="noopener noreferrer"):(_.hidden=!0,_.removeAttribute("href"),_.removeAttribute("target"),_.removeAttribute("rel"))),be.hidden=!1,r.root.dataset.inspecting="true",Q(!1),je()},oe=()=>{I=null,be instanceof HTMLElement&&(be.hidden=!0),r.root.dataset.inspecting="false",Ee(!0),$(),r.use3d&&b()},Ft=t=>{if(I===t.id&&t.type==="note"&&t.slug.length>0){Gn(t.slug);return}if(I===t.id&&t.type==="external"&&t.url.length>0){Dn(t.url);return}I=t.id,Ot(t),$(),r.use3d&&b()},Ge=t=>{G(t.id)&&re(),Ft(t)},De=!1;e.onNodeClick((t,a)=>{t&&(De=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Ge(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{oe(),Q(!1)});let W=r.root.querySelector("#graph-landing-mount");if(W instanceof HTMLElement){let t=null,a=p=>{t={x:p.clientX,y:p.clientY},Ee(!1)},l=(p,w)=>{if(typeof e.graph2ScreenCoords!="function")return null;let y=W.getBoundingClientRect(),k=p-y.left,x=w-y.top,O=null,Z=4096;for(let q of z().nodes){if(q.x===void 0||q.y===void 0)continue;let ve=e.graph2ScreenCoords(q.x,q.y,q.z??0),zt=(ve.x-k)**2+(ve.y-x)**2,Vt=(ve.x-p)**2+(ve.y-w)**2,Qe=Math.min(zt,Vt);Qe<Z&&(Z=Qe,O=q)}return O},i=p=>{let w=t;t=null,Ee(!0),!(!w||(p.clientX-w.x)**2+(p.clientY-w.y)**2>25)&&window.setTimeout(()=>{if(De){De=!1;return}let k=l(p.clientX,p.clientY);k?Ge(k):oe()},0)},d=()=>{t=null,Ee(!0)};W.addEventListener("pointerdown",a,!0),W.addEventListener("pointerup",i,!0),W.addEventListener("pointercancel",d,!0),window.addCleanup(()=>{W.removeEventListener("pointerdown",a,!0),W.removeEventListener("pointerup",i,!0),W.removeEventListener("pointercancel",d,!0)})}Et(r.root,"[data-graph-lens]",g.lens,"data-graph-lens"),Ie(),Ke(),g.lens!=="all"&&re(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Xe=()=>{o.current=Pt(),e.backgroundColor(We()),r.bloomPass&&(r.bloomPass.strength=V()?st:0,r.bloomPass.radius=it,r.bloomPass.threshold=lt),$(),b(),Ie()};document.addEventListener("themechange",Xe),window.addCleanup(()=>document.removeEventListener("themechange",Xe));let Ze=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){oe();return}if(a.closest("[data-graph-rail-toggle]")){let k=r.root.dataset.railOpen!=="true";k&&oe(),Q(k);return}if(a.closest("[data-graph-rail-scrim]")){Q(!1);return}let l=a.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let k=r.fullData.nodes.find(x=>x.id===l.dataset.graphInspectId);k&&Ge(k);return}let i=a.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&zn(i.dataset.graphLens)){_t(i.dataset.graphLens);return}let d=a.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){Gt(d.dataset.graphTag);return}let p=a.closest("[data-graph-folder]");if(p instanceof HTMLElement&&p.dataset.graphFolder){Dt(p.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let w=a.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){g.allLabels=!g.allLabels,w.setAttribute("aria-pressed",g.allLabels?"true":"false");let k=w.dataset.labelShow??"Labels",x=w.dataset.labelHide??"Labels",O=g.allLabels?x:k;w.title=O,w.setAttribute("aria-label",O),b();return}if(a.closest("[data-graph-theme]")){let k=V()?"light":"dark";document.documentElement.setAttribute("saved-theme",k),localStorage.setItem("theme",k),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${k}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:k}}));return}let y=a.closest("[data-graph-tags-toggle]");if(y instanceof HTMLButtonElement){let k=r.root.querySelector(".graph-landing__tags");if(k instanceof HTMLElement){let x=k.dataset.open==="true";k.dataset.open=x?"false":"true",y.setAttribute("aria-expanded",x?"false":"true")}}},ae=r.root.querySelector("[data-graph-node-scale]"),se=r.root.querySelector("[data-graph-edge-scale]");if(ae instanceof HTMLInputElement){ae.value=String(Math.round(T.nodeScale*100));let t=()=>{T.nodeScale=Number(ae.value)/100,Le(T),$(),r.use3d&&b()};ae.addEventListener("input",t),window.addCleanup(()=>ae.removeEventListener("input",t))}if(se instanceof HTMLInputElement){se.value=String(Math.round(T.edgeScale*100));let t=()=>{T.edgeScale=Number(se.value)/100,Le(T),$()};se.addEventListener("input",t),window.addCleanup(()=>se.removeEventListener("input",t))}let ie=r.root.querySelector("[data-graph-zoom]");if(ie instanceof HTMLInputElement){ie.value=String(Math.round(T.zoom*100));let t=()=>{T.zoom=Number(ie.value)/100,Le(T),u(200)};ie.addEventListener("input",t),window.addCleanup(()=>ie.removeEventListener("input",t))}let le=r.root.querySelector("[data-graph-spread]");if(le instanceof HTMLInputElement){le.value=String(Math.round(T.spread*100));let t=()=>{T.spread=Number(le.value)/100,Le(T),f(),e.d3ReheatSimulation()};le.addEventListener("input",t),window.addCleanup(()=>le.removeEventListener("input",t))}Q(!1),r.root.addEventListener("click",Ze),window.addCleanup(()=>r.root.removeEventListener("click",Ze));let Je=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){Q(!1);return}oe()}};window.addEventListener("keydown",Je),window.addCleanup(()=>window.removeEventListener("keydown",Je))}function Yn(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Kn(){try{return window.localStorage.getItem($e)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function vt(e){try{if(e){window.localStorage.setItem($e,"stopped");return}window.localStorage.removeItem($e)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function Wn(e){let n=performance.now(),o=0,r=c=>{let s=Math.min(1,(c-n)/e.durationMs),m=s*s;e.apply(e.from+(e.to-e.from)*m),s<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function jn(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,c=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof c=="function"&&c();let s=r.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=Qt,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function Xn(e){return new e.api.Player(e.host,{videoId:rt,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:rt,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Zn(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",c=e.dataset.audioPlay??"Play music",s=null,m=!1,E=null,v=!Kn(),L=!1,G=S=>{n.setAttribute("aria-pressed",S?"true":"false"),n.setAttribute("aria-label",S?r:c),n.title=S?r:c,n.dataset.playing=S?"true":"false"},g=()=>{E&&(E(),E=null)},D=S=>{s&&s.setVolume(Math.max(0,Math.min(Te,S)))},I=S=>{!v||L||(L=!0,G(!0),S.unMute(),D(0),S.playVideo(),g(),E=Wn({from:0,to:Te,durationMs:Jt,apply:D}))},T=()=>{v=!1,L=!1,g(),vt(!0),s&&(s.mute(),s.pauseVideo(),D(0)),G(!1)},C=async()=>{if(!s)try{let S=await jn();if(s)return;s=Xn({api:S,host:o,onReady:M=>{m=!0,M.mute(),D(0),M.playVideo()},onEnded:M=>{v&&(M.playVideo(),D(Te))}})}catch(S){console.error("[graph-landing] ambient audio unavailable",S)}},R=S=>{let M=S.target;if(!(M instanceof Element&&M.closest("[data-graph-audio-toggle]"))&&!(!v||L||Yn())){if(m&&s){I(s);return}C()}},F=()=>{if(v&&L){T();return}if(v=!0,vt(!1),m&&s){I(s);return}C()},H=()=>{if(s){if(document.hidden){g(),s.pauseVideo();return}v&&L&&(s.playVideo(),D(Te))}};G(v),C(),n.addEventListener("click",F),e.addEventListener("pointerdown",R,!0),e.addEventListener("touchstart",R,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",H),window.addCleanup(()=>{n.removeEventListener("click",F),e.removeEventListener("pointerdown",R,!0),e.removeEventListener("touchstart",R,!0),document.removeEventListener("visibilitychange",H),g(),s&&(s.pauseVideo(),s.destroy(),s=null)})}async function Jn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Zn(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",c=e.dataset.sourceLocale??"ko",s=(e.dataset.localePrefixes??"").split(",").map(b=>b.trim()).filter(b=>b.length>0),m=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",E=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",v=e.dataset.graphIndexPath??"",L=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,G=L!==void 0&&Number.isFinite(L)&&L>=0?L:void 0,g=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,D=Number.isFinite(g)?g:1,I=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,T=!1,C=null,R={current:Pt()},F=()=>{T=!0,C&&(C._destructor(),C=null),delete e.dataset.graphReady};window.addCleanup(F);let H=Nn(),S=Rn(H),M=H?import($t).then(b=>b.default??null).catch(b=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",b),null)):Promise.resolve(null),K=H?import(qt).catch(b=>(console.error("[graph-landing] three unavailable; using default node spheres",b),null)):Promise.resolve(null),j=H?import(Yt).then(b=>b.UnrealBloomPass?new b.UnrealBloomPass:null).catch(b=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",b),null)):Promise.resolve(null);S.catch(()=>{});let X;try{X=Ce(E==="graphIndex"?await fetch(v).then(b=>b.json()):await fetchData)}catch(b){throw wt(n,"Graph could not load content index."),b}if(T)return;let U=Mn(mn(X),{localeId:r,sourceLocale:c,prefixes:s},I),B=et(U,G),ne=m.replace("{n}",String(B.nodes.length)).replace("{m}",String(B.links.length));for(let b of o)b.textContent=ne;let z;try{z=await S}catch(b){throw wt(n,"Graph could not load. Check your network connection."),b}let[u,f,h]=await Promise.all([M,K,j]);T||(n.replaceChildren(),C=z(n),n.__graphLanding=C,n.__graphData=B,qn(C,B,R,{use3d:H,root:e,spriteText:u,bloomPass:h,three:f,fullData:U,expandHops:D}))}var Qn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Qn,r)}catch(c){console.error("[graph-landing] failed to persist preferred-locale",c)}});document.addEventListener("nav",()=>{Jn()});\n';

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
          "data-max-rendered-nodes": options.maxRenderedNodes,
          "data-expand-hops": options.maxRenderedNodes !== void 0 ? options.expandHops : void 0,
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
  const instance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
    layout: "graph",
    frame: "minimal",
    body: GraphLanding_default(options),
    skipContentIndexFetch: options.indexSource === "graphIndex"
  };
  return instance;
};
var pageType_default = GraphLandingPage;

export { pageType_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map