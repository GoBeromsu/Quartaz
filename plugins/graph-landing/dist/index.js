// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function I(e){return typeof e=="string"?e:e.id}function rt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((m,k)=>k.degree!==m.degree?k.degree-m.degree:m.id<k.id?-1:m.id>k.id?1:0).slice(0,Math.max(0,n)),u=new Set(r.map(m=>m.id)),s=e.links.filter(m=>{let k=I(m.source),T=I(m.target);return u.has(k)&&u.has(T)});return{nodes:r,links:s}}function ot(e,n,o,r){let u=new Set,s=Math.max(0,Math.floor(r));if(s<=0)return u;let m=new Set([o]),k=new Set([o]);for(let T=0;T<s;T+=1){let x=new Set;for(let R of k)for(let g of e.get(R)??[])m.has(g)||(m.add(g),x.add(g),n.has(g)||u.add(g));k=x}return u}var Ge="0.179.1",Ut="https://esm.sh/force-graph@1.51.4",Bt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ge}`,$t=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ge}`,qt=`https://esm.sh/three@${Ge}`,Wt=`https://esm.sh/three@${Ge}/examples/jsm/postprocessing/UnrealBloomPass.js`,Yt=8,Kt=14;var me=1,ze=3.5,jt=.05,Xt=2.6,Zt=1,at=1,fe=.18,xt="graph-landing:lens",St="graph-landing:tune",je="graph-landing:ambient-audio",st="UDVtMYqUAyw",Ce=12,Jt=28e3,Qt="https://www.youtube.com/iframe_api",en=.18,tn=1.4,nn=1.25,rn=1.15,on=.55,ge={x:330,y:235,z:565},it={x:0,y:0,z:0},lt=1.3,an=3.2,ct=1.05,ut=.32,dt=.28,sn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},ln="#a8b0c2",cn="#2a3348",ft={min:80,max:200},gt={min:40,max:110},mt={min:160,max:280},pt={min:90,max:170},ht=220,bt=2,un=.15,dn=.8,fn=350,Ve={min:-100,max:-190},Ue={min:72,max:116},Be={min:130,max:260};function gn(e){return Ae(e-.5,0,1)}function Ie(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function $e(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function mn(e){let n=[];for(let o of Object.values(e)){let r=Ie(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let s=r.multilingual,m=s&&typeof s=="object"?s:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:$e(r.links),tags:$e(r.tags),externalLinks:$e(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:m})}return n}function pn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=ht?n:`${n.slice(0,ht).trimEnd()}\\u2026`}function pe(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function yt(e){return pe(e)/(2*Math.PI)}function Me(e,n,o){let r=pe(e),u=Math.acos(2*yt(`${e}:phi`)-1),s=n+(o-n)*yt(`${e}:r`);return{x:s*Math.sin(u)*Math.cos(r),y:s*Math.sin(u)*Math.sin(r),z:s*Math.cos(u)}}function Ct(e){return e==="index"||e.endsWith("/index")}function Mt(e){return e==="tags"||e.startsWith("tags/")}function hn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Nt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function qe(e,n){return e.multilingual?.locale?e.multilingual.locale:Nt(e.slug,n).locale}function bn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Nt(e.slug,n).permalink}`}function yn(e,n){let o=e.find(r=>qe(r,n.prefixes)===n.localeId)??e.find(r=>qe(r,n.prefixes)===n.sourceLocale)??e.find(r=>qe(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Ae(e,n,o){return Math.min(o,Math.max(n,e))}function wt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function wn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function Xe(e){return wn(e).trim().toLowerCase()}function kn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Tn(e){let n=e.trim();return n.length===0||kn(n)||Mt(n)||Ct(n)?!0:Xe(n).length===0}function En(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Pt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function vn(e,n){let o=Pt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function kt(e){return`external:${e}`}function Ln(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),u=o.pathname;return(n.get(r)??0)>1&&u.length>1?`${r}${u}`:r}function xn(e){let n=new Map,o=new Map;for(let r of e){let u=Xe(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let s=r.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,r.slug);let m=s.replace(/\\s+/g,"-");m.length>0&&!o.has(m)&&o.set(m,r.slug)}return{byBasename:n,byTitle:o}}function Sn(e,n,o){if(n.has(e))return e;let r=Xe(e),u=o.byBasename.get(r);if(u)return u;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return s||null}function Cn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function Mn(e,n,o=void 0){let r=e.filter(c=>!Ct(c.slug)&&!Mt(c.slug)&&!hn(c)),u=new Map;for(let c of r){let f=bn(c,n.prefixes),h=u.get(f)??[];h.push(c),u.set(f,h)}let s=[];for(let c of u.values())s.push(yn(c,n));let m=new Set(s.map(c=>c.slug)),k=xn(s),T=new Map,x=[],R=new Set,g=new Map,H=c=>{T.set(c,(T.get(c)??0)+1)},_=(c,f,h)=>c<f?`${c}|${f}|${h}`:`${f}|${c}|${h}`,E=(c,f,h,L)=>{let P=_(c,f,h);return R.has(P)?!1:(R.add(P),x.push({source:c,target:f,kind:h}),L&&(H(c),H(f)),!0)};for(let c of s)for(let f of c.links){if(Tn(f))continue;let h=Sn(f,m,k);h!==null&&h!==c.slug&&E(c.slug,h,"wikilink",!0)}let G=En(),A=new Set;for(let c of s)for(let f of c.externalLinks){let h=Pt(f);h===null||!vn(h,G)||(A.add(h),E(c.slug,kt(h),"external",!0))}let U=new Map;for(let c of A){let f=new URL(c).hostname.replace(/^www\\./,"");U.set(f,(U.get(f)??0)+1)}let F=new Set,S=new Map;for(let c of s)for(let f of c.tags){g.set(f,(g.get(f)??0)+1);let h=`tag:${f}`;F.add(h),E(c.slug,h,"tag",!0);let L=S.get(f)??[];L.push(c.slug),S.set(f,L)}if(o!==!1){let c=o?.maxTagsPerNote,f=o?.maxEdges,h=0;e:for(let L of s)if(!(L.tags.length<2)&&!(c!==void 0&&L.tags.length>c))for(let P=0;P<L.tags.length;P+=1)for(let N=P+1;N<L.tags.length;N+=1){if(f!==void 0&&h>=f)break e;E(`tag:${L.tags[P]}`,`tag:${L.tags[N]}`,"cooc",!1)&&(h+=1)}}let M=new Map;for(let c of s){let f=wt(c.slug);if(f==="root")continue;let h=M.get(f)??[];h.push(c.slug),M.set(f,h)}for(let c of M.values()){if(c.length<2)continue;let f=[...c].sort();for(let h=0;h<f.length;h+=1){let L=f[(h+1)%f.length],P=f[(h+bt)%f.length],N=f[h];N===void 0||L===void 0||(N!==L&&!R.has(_(N,L,"wikilink"))&&E(N,L,"folder",!1),f.length>bt+1&&P!==void 0&&N!==P&&!R.has(_(N,P,"wikilink"))&&E(N,P,"folder",!1))}}let K=[...T.values()],q=K.length>0?Math.min(...K):0,B=K.length>0?Math.max(...K):0,j=c=>{let f=T.get(c)??0,h=Math.sqrt(f),L=Math.sqrt(q),N=Math.sqrt(B)-L;return N===0?(me+ze)/2:me+(h-L)/N*(ze-me)},Q=[...s].sort((c,f)=>(T.get(f.slug)??0)-(T.get(c.slug)??0)),ee=new Set(Q.filter(c=>(T.get(c.slug)??0)>0).slice(0,Yt).map(c=>c.slug)),z=s.map(c=>{let f=ee.has(c.slug),h=f?Me(c.slug,gt.min,gt.max):Me(c.slug,ft.min,ft.max);return{id:c.slug,name:c.title,type:"note",val:j(c.slug),degree:T.get(c.slug)??0,isHub:f,tag:"",slug:c.slug,url:"",folder:wt(c.slug),tags:c.tags,dominantTag:Cn(c.tags,g),excerpt:pn(c.content),phase:pe(c.slug),x:h.x,y:h.y,z:h.z}});for(let c of A){let f=kt(c),h=Me(f,mt.min,mt.max);z.push({id:f,name:Ln(c,U),type:"external",val:j(f)*on,degree:T.get(f)??0,isHub:!1,tag:"",slug:"",url:c,folder:"",tags:[],dominantTag:"",excerpt:c,phase:pe(f),x:h.x,y:h.y,z:h.z})}for(let c of F){let f=c.slice(4),h=Me(c,pt.min,pt.max);z.push({id:c,name:f,type:"tag",val:Ae(j(c)*.7,me,ze),degree:T.get(c)??0,isHub:!1,tag:f,slug:`tags/${f}`,url:"",folder:"tag",tags:[f],dominantTag:f,excerpt:"",phase:pe(c),x:h.x,y:h.y,z:h.z})}return{nodes:z,links:x}}function We(e){let n=new Map,o=(r,u)=>{let s=n.get(r)??new Set;s.add(u),n.set(r,s)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let u=I(r.source),s=I(r.target);o(u,s),o(s,u)}return n}function re(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function It(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:re("--light","#ffffff"),ink:re("--darkgray","#0f0f0f"),accent:re("--secondary","#a52142"),tertiary:re("--tertiary","#c75b75"),gray:re("--gray","#737373"),external:re("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Pe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Nn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Pn(){return Nn()&&!Pe()}function $(){return document.documentElement.getAttribute("saved-theme")==="dark"}function _e(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function oe(e,n){let o=_e(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Y(e,n,o){let r=_e(e),u=_e(n);if(!r||!u)return e;let s=(m,k)=>Math.round(m+(k-m)*o);return`rgb(${s(r.r,u.r)}, ${s(r.g,u.g)}, ${s(r.b,u.b)})`}function At(e){return $()?Y(e.bg,"#05070f",.88):e.bg}function In(e){let n=_e(e);if(!n)return e;let o=r=>{let u=r/255,s=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(s*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function An(e){return In(At(e))}function _t(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function Tt(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:_t(e,[n.accent,n.tertiary,n.ink,n.gray])}function _n(e,n){return e.length===0?n.ink:_t(e,[n.accent,n.tertiary])}function Gt(e){let n=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function Gn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Gt(e);window.location.assign(n.toString())}function Dn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Rn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function Ye(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Hn(e){let o=await import(e?Bt:Ut);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Rn(o)}function On(){try{let e=sessionStorage.getItem(xt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Fn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(St);if(!n)return e;let o=Ie(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,m=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:s,spread:m}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Ne(e){try{sessionStorage.setItem(St,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Ke(e){try{sessionStorage.setItem(xt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function zn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Vn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Un(e,n){return e.type==="note"&&e.folder===n}function Et(e,n){let o=I(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function Bn(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return u.forEach((s,m)=>{let k=Math.PI*2*m/Math.max(u.length,1),T={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let x of e.nodes)x.type==="note"&&x.folder===s&&r.set(x.id,T)}),r}if(n==="tag"){let u=e.nodes.filter(m=>m.type==="tag"),s=new Map;u.forEach((m,k)=>{let T=Math.PI*2*k/Math.max(u.length,1);s.set(m.tag,{x:Math.cos(T)*o,y:Math.sin(T)*o,z:0})});for(let m of e.nodes)if(m.type==="tag"){let k=s.get(m.tag);k&&r.set(m.id,k)}else if(m.dominantTag.length>0){let k=s.get(m.dominantTag);k&&r.set(m.id,k)}}return r}function $n(e,n){let o=[],r=u=>{let s=n*u;for(let m of o){let k=e(m);k&&(m.vx=(m.vx??0)+(k.x-(m.x??0))*s,m.vy=(m.vy??0)+(k.y-(m.y??0))*s,m.vz=(m.vz??0)+(k.z-(m.z??0))*s)}};return r.initialize=u=>{o=u},r}function vt(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let s=u.getAttribute(r);u.setAttribute("aria-pressed",s===o?"true":"false")}}function qn(e,n,o,r){let u=We(n.links),s=(t,a,l)=>t<a?`${t}|${a}|${l}`:`${a}|${t}|${l}`,m=new Map,k=new Map,T=new Set,x=new Set;r.fullData!==n&&(m=new Map(r.fullData.nodes.map(t=>[t.id,t])),k=We(r.fullData.links),T=new Set(n.nodes.map(t=>t.id)),x=new Set(n.links.map(t=>s(I(t.source),I(t.target),t.kind))));let R=t=>{if(r.fullData===n)return!1;let a=ot(k,T,t,r.expandHops);if(a.size===0)return!1;for(let l of a){let i=m.get(l);i&&(n.nodes.push(i),T.add(l))}for(let l of r.fullData.links){let i=I(l.source),d=I(l.target);if(!T.has(i)||!T.has(d))continue;let p=s(i,d,l.kind);x.has(p)||(x.add(p),n.links.push(l))}return u=We(n.links),!0},g={lens:On(),allLabels:!1,focusTag:null,focusFolder:null},H=null,_=null,E=Fn(),G=()=>_??H,A=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,Kt).map(t=>t.id)),U=t=>{let a=t.val;return t.isHub&&(a*=tn),g.lens==="tag"&&t.type==="tag"&&(a*=nn),g.focusTag&&t.id===`tag:${g.focusTag}`&&(a*=rn),a},F=t=>{let a=G();return g.allLabels||a===t.id||a!==null&&(u.get(a)?.has(t.id)??!1)?!0:A.has(t.id)},S=t=>{let a=Ae((U(t)-me)/5,0,1);return(lt+a*(an-lt))*E.nodeScale},M=t=>{let a=G();if(a!==null)return a===t||(u.get(a)?.has(t)??!1);if(g.focusTag===null&&g.focusFolder===null)return!0;let l=n.nodes.find(i=>i.id===t);return l?g.focusFolder!==null?Un(l,g.focusFolder):g.focusTag!==null&&Vn(l,g.focusTag):!1},K=t=>t.type==="external"?o.current.external:g.lens==="tag"?t.type==="tag"?o.current.tertiary:_n(t.dominantTag,o.current):g.lens==="folder"?t.type==="tag"?o.current.tertiary:Tt(t.folder,o.current):g.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,q=t=>{let a=G();if(a!==null&&(a===t.id||(u.get(a)?.has(t.id)??!1)))return o.current.accent;let l=K(t);return M(t.id)?$()?t.type==="external"?Y(o.current.external,"#ffffff",.18):t.type==="tag"?Y(o.current.tertiary,"#ffffff",.22):t.isHub?Y("#fff3e4",o.current.accent,.1):Y("#ffffff",o.current.accent,.12):t.type==="external"?Y(o.current.external,"#08343a",.12):t.type==="tag"?Y(o.current.tertiary,o.current.accent,.55):t.isHub?Y(o.current.ink,o.current.accent,.22):l:oe(l,fe)},B=t=>{let a=$();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},j=t=>{let a=I(t.source),l=I(t.target),i=G();return i!==null&&(a===i||l===i)?$()?.72:.78:(i!==null||g.focusTag!==null||g.focusFolder!==null)&&(!M(a)||!M(l))?B(t.kind)*fe:B(t.kind)},Q=t=>{let a=I(t.source),l=I(t.target),i=G(),d=$()?ln:cn;return i!==null&&(a===i||l===i)?Y(o.current.accent,d,.45):d},ee=t=>oe(Q(t),j(t)),z=()=>n,c=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Math.hypot(ge.x,ge.y,ge.z),l=a/Ae(E.zoom,.4,2.5),i=e.cameraPosition(),d=ge,p=a;if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let b=Math.hypot(i.x,i.y,i.z);b>1&&(d={x:i.x,y:i.y,z:i.z},p=b)}let y=l/p;e.cameraPosition({x:d.x*y,y:d.y*y,z:d.z*y},it,t);return}typeof e.zoom=="function"&&e.zoom(E.zoom,t)},f=()=>{let t=gn(E.spread),a=Ve.min+t*(Ve.max-Ve.min),l=Ue.min+t*(Ue.max-Ue.min),i=e.d3Force("charge");i?.strength&&i.strength(a),i?.theta&&r.layout.chargeTheta!==void 0&&i.theta(r.layout.chargeTheta);let d=e.d3Force("link");d?.distance&&d.distance(v=>g.lens==="tag"&&v.kind==="tag"?l*.72:l),d?.strength&&d.strength(v=>{if(v.kind==="cooc"||v.kind==="folder")return .04;if(g.lens==="tag"&&v.kind==="tag")return .95;if(g.lens==="folder"){let V=Et(n.nodes,v.source),J=Et(n.nodes,v.target);if(V!==null&&V===J)return .72}return v.kind==="tag"?.65:.8});let p=e.d3Force("center");p?.strength&&p.strength(jt);let y=Be.min+t*(Be.max-Be.min),b=Bn(n,g.lens,y),w=g.lens==="folder"||g.lens==="tag"?.08:0;e.d3Force("cluster",$n(v=>b.get(v.id)??null,w)),r.use3d&&e.d3Force("flattenZ",null)},h=new Map,L=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three;h.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let i=S(l),d=q(l),p=!1;if(a)if($()){let v=l.isHub?1.35:1.1,V=new a.MeshLambertMaterial({color:d,emissive:d,emissiveIntensity:v});h.set(l.id,{material:V,base:v,phase:l.phase}),p=new a.Mesh(new a.SphereGeometry(i,14,14),V)}else p=new a.Mesh(new a.SphereGeometry(i,14,14),new a.MeshBasicMaterial({color:d}));if(!F(l)||!t)return p;let y=new t(l.name),b=$()?"rgba(255, 255, 255, 0.85)":oe(o.current.ink,.88);if(y.color=M(l.id)?b:oe(b,fe),y.fontWeight="400",y.strokeWidth=0,y.textHeight=A.has(l.id)?6.5:5.5,y.center.set(0,.5),y.position.x=i+2,y.position.y=0,!a||p===!1)return y;let w=new a.Group;return w.add(p),w.add(y),w})},P=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0);e.linkThreeObject(l=>{let i=sn[l.kind]*E.edgeScale,d=new t.MeshBasicMaterial({color:Q(l),transparent:!0,opacity:j(l),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(i,i,1,5),d)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,i)=>{let d=i.end.x-i.start.x,p=i.end.y-i.start.y,y=i.end.z-i.start.z,b=Math.sqrt(d*d+p*p+y*y);return l.position.x=(i.start.x+i.end.x)/2,l.position.y=(i.start.y+i.end.y)/2,l.position.z=(i.start.z+i.end.z)/2,l.scale.x=1,l.scale.y=Math.max(b,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(a,new t.Vector3(d,p,y).normalize()),!0})},N=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=G();if(a===null)return 0;let l=I(t.source),i=I(t.target);return l===a||i===a?2:0})},O=()=>{e.nodeVal(U),e.nodeColor(q),e.linkColor(ee),e.linkWidth(t=>{let a=I(t.source),l=I(t.target),i=G(),d=E.edgeScale;return i!==null&&(a===i||l===i)?.7*d:t.kind==="wikilink"||t.kind==="external"?.5*d:(t.kind==="tag"?.35:.25)*d}),typeof e.linkOpacity=="function"&&e.linkOpacity(at),N(),P(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},ae=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(p,y)=>{let b=document.createElement("span");b.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=p;let v=document.createElement("span");return v.textContent=y,b.append(w,v),b},l=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",d=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,l),a(o.current.tertiary,i),a(o.current.external,d))},se=t=>{let a=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let i=document.createElement("span");if(i.className="graph-landing__facet-name",t.dotColor!==null){let p=document.createElement("span");p.className="graph-landing__dot",p.style.background=t.dotColor,i.append(p)}i.append(document.createTextNode(t.label));let d=document.createElement("span");return d.className="graph-landing__tag-count",d.textContent=String(t.count),l.append(i,d),a.append(l),a},he=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),l=r.root.querySelector(".graph-landing__tags");if(g.lens==="folder"){let d=r.root.dataset.folderRootLabel??"root",p=new Map;for(let b of n.nodes)b.type==="note"&&p.set(b.folder,(p.get(b.folder)??0)+1);let y=[...p.entries()].sort((b,w)=>w[1]-b[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=y.length===0),t.replaceChildren(...y.map(([b,w])=>se({dataset:{key:"graphFolder",value:b},pressed:g.focusFolder===b,dotColor:Tt(b,o.current),label:b==="root"?d:b,count:w})));return}let i=n.nodes.filter(d=>d.type==="tag").sort((d,p)=>p.degree-d.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=i.length===0),t.replaceChildren(...i.map(d=>se({dataset:{key:"graphTag",value:d.tag},pressed:g.focusTag===d.tag,dotColor:null,label:d.tag,count:d.degree})))},Z=()=>{e.graphData(z()),f(),O(),L(),ae(),he(),vt(r.root,"[data-graph-lens]",g.lens,"data-graph-lens"),e.d3ReheatSimulation()},De=t=>{g.lens=t,t!=="tag"&&(g.focusTag=null),t!=="folder"&&(g.focusFolder=null),Ke(t),Z()},C=t=>{g.focusTag=g.focusTag===t?null:t,g.focusFolder=null,g.focusTag&&(g.lens="tag",Ke("tag")),Z()},Dt=t=>{g.focusFolder=g.focusFolder===t?null:t,g.focusTag=null,g.focusFolder&&(g.lens="folder",Ke("folder")),Z()},Ze=()=>r.use3d?An(o.current):At(o.current);e.graphData(z()),e.backgroundColor(Ze()),e.nodeLabel(t=>t.name),e.nodeRelSize(Xt),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Zt),typeof e.linkOpacity=="function"&&e.linkOpacity(at),f(),O();let te=r.root.querySelector("[data-graph-preview]"),be=r.root.querySelector("[data-graph-preview-chip]"),ye=r.root.querySelector("[data-graph-preview-title]"),we=r.root.querySelector("[data-graph-preview-excerpt]"),ke=0;window.addCleanup(()=>window.clearTimeout(ke));let Rt=t=>{if(!(te instanceof HTMLElement)||!(be instanceof HTMLElement)||!(ye instanceof HTMLElement)||!(we instanceof HTMLElement))return;window.clearTimeout(ke);let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let d=r.root.dataset.previewTagTemplate??"{n} notes";be.textContent=l,ye.textContent=`#${t.tag}`,we.textContent=d.replace("{n}",String(t.degree))}else t.type==="external"?(be.textContent=i,ye.textContent=t.name,we.textContent=t.url):(be.textContent=a,ye.textContent=t.name,we.textContent=t.excerpt);te.hidden=!1,te.dataset.visible="true"},Je=()=>{te instanceof HTMLElement&&(window.clearTimeout(ke),ke=window.setTimeout(()=>{te.dataset.visible="false",te.hidden=!0},fn))};if(e.onNodeHover(t=>{H=t?t.id:null,_===null&&(t?Rt(t):Je()),O(),r.use3d&&L()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Pe()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=en;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=$()?ct:0,r.bloomPass.radius=ut,r.bloomPass.threshold=dt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ge,it),E.zoom!==1&&c(0)),L(),!Pe()){let t=0,a=()=>{let l=performance.now()/1e3*dn;for(let i of h.values())i.material.emissiveIntensity=i.base*(1+un*Math.sin(l+i.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,l)=>{let i=S(t),d=t.x??0,p=t.y??0;if(a.save(),a.beginPath(),a.arc(d,p,i,0,Math.PI*2),a.fillStyle=q(t),a.fill(),t.isHub&&(a.strokeStyle=M(t.id)?o.current.accent:oe(o.current.accent,fe),a.lineWidth=1.2/l,a.stroke()),F(t)){let y=11.5/l;a.font=`${y}px ${o.current.font}`,a.fillStyle=M(t.id)?o.current.ink:oe(o.current.ink,fe),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,d,p-i-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,l)=>{let i=S(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,i,0,Math.PI*2),l.fillStyle=a,l.fill()});let Te=r.root.querySelector("[data-graph-inspect]"),Ee=r.root.querySelector("[data-graph-inspect-chip]"),ve=r.root.querySelector("[data-graph-inspect-title]"),Le=r.root.querySelector("[data-graph-inspect-excerpt]"),Re=r.root.querySelector("[data-graph-inspect-tags]"),He=r.root.querySelector("[data-graph-inspect-connected]"),D=r.root.querySelector("[data-graph-inspect-open]"),ne=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),l=r.root.querySelector("[data-graph-rail-scrim]"),i=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),i instanceof HTMLElement&&i.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},xe=t=>{Pe()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Ht=t=>{let a=u.get(t.id)??new Set,l=[];for(let i of a){let d=n.nodes.find(p=>p.id===i);d&&l.push(d)}return l.sort((i,d)=>d.degree-i.degree)},Ot=t=>{if(!(Te instanceof HTMLElement)||!(Ee instanceof HTMLElement)||!(ve instanceof HTMLElement)||!(Le instanceof HTMLElement)||!(Re instanceof HTMLElement)||!(He instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links",d=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Ee.textContent=l,ve.textContent=`#${t.tag}`,Le.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Ee.textContent=i,ve.textContent=t.name,Le.textContent=t.url):(Ee.textContent=a,ve.textContent=t.name,Le.textContent=t.excerpt);let p=t.tags.map(b=>{let w=document.createElement("li");return w.textContent=b,w});Re.replaceChildren(...p),Re.hidden=p.length===0;let y=Ht(t).slice(0,12);if(y.length===0){let b=document.createElement("li");b.className="graph-landing__inspect-empty",b.textContent=d,He.replaceChildren(b)}else He.replaceChildren(...y.map(b=>{let w=document.createElement("li"),v=document.createElement("button");v.type="button",v.className="graph-landing__inspect-link",v.dataset.graphInspectId=b.id;let V=b.type==="tag"?l:b.type==="external"?i:a,J=document.createElement("span");J.textContent=V;let W=document.createElement("strong");return W.textContent=b.type==="tag"?`#${b.tag}`:b.name,v.append(J,W),w.append(v),w}));D instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(D.hidden=!1,D.href=Gt(t.slug).toString(),D.textContent=r.root.dataset.inspectRead??"Read note",D.removeAttribute("target"),D.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(D.hidden=!1,D.href=t.url,D.textContent=r.root.dataset.inspectOpenExternal??"Open",D.target="_blank",D.rel="noopener noreferrer"):(D.hidden=!0,D.removeAttribute("href"),D.removeAttribute("target"),D.removeAttribute("rel"))),Te.hidden=!1,r.root.dataset.inspecting="true",ne(!1),Je()},ie=()=>{_=null,Te instanceof HTMLElement&&(Te.hidden=!0),r.root.dataset.inspecting="false",xe(!0),O(),r.use3d&&L()},Ft=t=>{if(_===t.id&&t.type==="note"&&t.slug.length>0){Gn(t.slug);return}if(_===t.id&&t.type==="external"&&t.url.length>0){Dn(t.url);return}_=t.id,Ot(t),O(),r.use3d&&L()},Oe=t=>{R(t.id)&&Z(),Ft(t)},Fe=!1;e.onNodeClick((t,a)=>{t&&(Fe=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Oe(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{ie(),ne(!1)});let X=r.root.querySelector("#graph-landing-mount");if(X instanceof HTMLElement){let t=null,a=p=>{t={x:p.clientX,y:p.clientY},xe(!1)},l=(p,y)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=X.getBoundingClientRect(),w=p-b.left,v=y-b.top,V=null,J=4096;for(let W of z().nodes){if(W.x===void 0||W.y===void 0)continue;let Se=e.graph2ScreenCoords(W.x,W.y,W.z??0),zt=(Se.x-w)**2+(Se.y-v)**2,Vt=(Se.x-p)**2+(Se.y-y)**2,nt=Math.min(zt,Vt);nt<J&&(J=nt,V=W)}return V},i=p=>{let y=t;t=null,xe(!0),!(!y||(p.clientX-y.x)**2+(p.clientY-y.y)**2>25)&&window.setTimeout(()=>{if(Fe){Fe=!1;return}let w=l(p.clientX,p.clientY);w?Oe(w):ie()},0)},d=()=>{t=null,xe(!0)};X.addEventListener("pointerdown",a,!0),X.addEventListener("pointerup",i,!0),X.addEventListener("pointercancel",d,!0),window.addCleanup(()=>{X.removeEventListener("pointerdown",a,!0),X.removeEventListener("pointerup",i,!0),X.removeEventListener("pointercancel",d,!0)})}vt(r.root,"[data-graph-lens]",g.lens,"data-graph-lens"),ae(),he(),g.lens!=="all"&&Z(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Qe=()=>{o.current=It(),e.backgroundColor(Ze()),r.bloomPass&&(r.bloomPass.strength=$()?ct:0,r.bloomPass.radius=ut,r.bloomPass.threshold=dt),O(),L(),ae()};document.addEventListener("themechange",Qe),window.addCleanup(()=>document.removeEventListener("themechange",Qe));let et=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){ie();return}if(a.closest("[data-graph-rail-toggle]")){let w=r.root.dataset.railOpen!=="true";w&&ie(),ne(w);return}if(a.closest("[data-graph-rail-scrim]")){ne(!1);return}let l=a.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let w=r.fullData.nodes.find(v=>v.id===l.dataset.graphInspectId);w&&Oe(w);return}let i=a.closest("[data-graph-lens]");if(i instanceof HTMLElement&&i.dataset.graphLens&&zn(i.dataset.graphLens)){De(i.dataset.graphLens);return}let d=a.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){C(d.dataset.graphTag);return}let p=a.closest("[data-graph-folder]");if(p instanceof HTMLElement&&p.dataset.graphFolder){Dt(p.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let y=a.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){g.allLabels=!g.allLabels,y.setAttribute("aria-pressed",g.allLabels?"true":"false");let w=y.dataset.labelShow??"Labels",v=y.dataset.labelHide??"Labels",V=g.allLabels?v:w;y.title=V,y.setAttribute("aria-label",V),L();return}if(a.closest("[data-graph-theme]")){let w=$()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let b=a.closest("[data-graph-tags-toggle]");if(b instanceof HTMLButtonElement){let w=r.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let v=w.dataset.open==="true";w.dataset.open=v?"false":"true",b.setAttribute("aria-expanded",v?"false":"true")}}},le=r.root.querySelector("[data-graph-node-scale]"),ce=r.root.querySelector("[data-graph-edge-scale]");if(le instanceof HTMLInputElement){le.value=String(Math.round(E.nodeScale*100));let t=()=>{E.nodeScale=Number(le.value)/100,Ne(E),O(),r.use3d&&L()};le.addEventListener("input",t),window.addCleanup(()=>le.removeEventListener("input",t))}if(ce instanceof HTMLInputElement){ce.value=String(Math.round(E.edgeScale*100));let t=()=>{E.edgeScale=Number(ce.value)/100,Ne(E),O()};ce.addEventListener("input",t),window.addCleanup(()=>ce.removeEventListener("input",t))}let ue=r.root.querySelector("[data-graph-zoom]");if(ue instanceof HTMLInputElement){ue.value=String(Math.round(E.zoom*100));let t=()=>{E.zoom=Number(ue.value)/100,Ne(E),c(200)};ue.addEventListener("input",t),window.addCleanup(()=>ue.removeEventListener("input",t))}let de=r.root.querySelector("[data-graph-spread]");if(de instanceof HTMLInputElement){de.value=String(Math.round(E.spread*100));let t=()=>{E.spread=Number(de.value)/100,Ne(E),f(),e.d3ReheatSimulation()};de.addEventListener("input",t),window.addCleanup(()=>de.removeEventListener("input",t))}ne(!1),r.root.addEventListener("click",et),window.addCleanup(()=>r.root.removeEventListener("click",et));let tt=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){ne(!1);return}ie()}};window.addEventListener("keydown",tt),window.addCleanup(()=>window.removeEventListener("keydown",tt))}function Wn(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Yn(){try{return window.localStorage.getItem(je)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Lt(e){try{if(e){window.localStorage.setItem(je,"stopped");return}window.localStorage.removeItem(je)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function Kn(e){let n=performance.now(),o=0,r=u=>{let s=Math.min(1,(u-n)/e.durationMs),m=s*s;e.apply(e.from+(e.to-e.from)*m),s<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function jn(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,u=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof u=="function"&&u();let s=r.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=Qt,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function Xn(e){return new e.api.Player(e.host,{videoId:st,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:st,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Zn(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",u=e.dataset.audioPlay??"Play music",s=null,m=!1,k=null,T=!Yn(),x=!1,R=S=>{n.setAttribute("aria-pressed",S?"true":"false"),n.setAttribute("aria-label",S?r:u),n.title=S?r:u,n.dataset.playing=S?"true":"false"},g=()=>{k&&(k(),k=null)},H=S=>{s&&s.setVolume(Math.max(0,Math.min(Ce,S)))},_=S=>{!T||x||(x=!0,R(!0),S.unMute(),H(0),S.playVideo(),g(),k=Kn({from:0,to:Ce,durationMs:Jt,apply:H}))},E=()=>{T=!1,x=!1,g(),Lt(!0),s&&(s.mute(),s.pauseVideo(),H(0)),R(!1)},G=async()=>{if(!s)try{let S=await jn();if(s)return;s=Xn({api:S,host:o,onReady:M=>{m=!0,M.mute(),H(0),M.playVideo()},onEnded:M=>{T&&(M.playVideo(),H(Ce))}})}catch(S){console.error("[graph-landing] ambient audio unavailable",S)}},A=S=>{let M=S.target;if(!(M instanceof Element&&M.closest("[data-graph-audio-toggle]"))&&!(!T||x||Wn())){if(m&&s){_(s);return}G()}},U=()=>{if(T&&x){E();return}if(T=!0,Lt(!1),m&&s){_(s);return}G()},F=()=>{if(s){if(document.hidden){g(),s.pauseVideo();return}T&&x&&(s.playVideo(),H(Ce))}};R(T),G(),n.addEventListener("click",U),e.addEventListener("pointerdown",A,!0),e.addEventListener("touchstart",A,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",F),window.addCleanup(()=>{n.removeEventListener("click",U),e.removeEventListener("pointerdown",A,!0),e.removeEventListener("touchstart",A,!0),document.removeEventListener("visibilitychange",F),g(),s&&(s.pauseVideo(),s.destroy(),s=null)})}async function Jn(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Zn(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",s=(e.dataset.localePrefixes??"").split(",").map(C=>C.trim()).filter(C=>C.length>0),m=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",T=e.dataset.graphIndexPath??"",x=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,R=x!==void 0&&Number.isFinite(x)&&x>=0?x:void 0,g=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,H=Number.isFinite(g)?g:1,_=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,E=e.dataset.graphRenderMode==="3d"?"3d":"auto",G=e.dataset.graphLayoutFreezeAfterWarmup==="true",A=e.dataset.graphLayoutWarmupTicks?Number.parseInt(e.dataset.graphLayoutWarmupTicks,10):void 0,U=A!==void 0&&Number.isFinite(A)&&A>=0?A:void 0,F=e.dataset.graphLayoutCooldownTicks?Number.parseInt(e.dataset.graphLayoutCooldownTicks,10):void 0,S=F!==void 0&&Number.isFinite(F)&&F>=0?F:void 0,M=e.dataset.graphLayoutChargeTheta?Number.parseFloat(e.dataset.graphLayoutChargeTheta):void 0,K=M!==void 0&&Number.isFinite(M)&&M>=0?M:void 0,q=!1,B=null,j={current:It()},Q=()=>{q=!0,B&&(B._destructor(),B=null),delete e.dataset.graphReady};window.addCleanup(Q);let ee=Pn();if(E==="3d"&&!ee){Ye(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let z=E==="3d"||ee,c=Hn(z),f=z?import($t).then(C=>C.default??null).catch(C=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",C),null)):Promise.resolve(null),h=z?import(qt).catch(C=>(console.error("[graph-landing] three unavailable; using default node spheres",C),null)):Promise.resolve(null),L=z?import(Wt).then(C=>C.UnrealBloomPass?new C.UnrealBloomPass:null).catch(C=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",C),null)):Promise.resolve(null);c.catch(()=>{});let P;try{P=Ie(k==="graphIndex"?await fetch(T).then(C=>C.json()):await fetchData)}catch(C){throw Ye(n,"Graph could not load content index."),C}if(q)return;let N=Mn(mn(P),{localeId:r,sourceLocale:u,prefixes:s},_),O=rt(N,R),ae=m.replace("{n}",String(O.nodes.length)).replace("{m}",String(O.links.length));for(let C of o)C.textContent=ae;let se;try{se=await c}catch(C){throw Ye(n,"Graph could not load. Check your network connection."),C}let[he,Z,De]=await Promise.all([f,h,L]);q||(n.replaceChildren(),B=se(n),n.__graphLanding=B,n.__graphData=O,qn(B,O,j,{use3d:z,root:e,spriteText:he,bloomPass:De,three:Z,fullData:N,expandHops:H,layout:{freezeAfterWarmup:G,warmupTicks:U,cooldownTicks:S,chargeTheta:K}}))}var Qn="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Qn,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{Jn()});\n';

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
          "data-graph-render-mode": options.renderMode === "3d" ? "3d" : void 0,
          "data-graph-layout-freeze-after-warmup": options.layout?.freezeAfterWarmup ? "true" : void 0,
          "data-graph-layout-warmup-ticks": options.layout?.warmupTicks,
          "data-graph-layout-cooldown-ticks": options.layout?.cooldownTicks,
          "data-graph-layout-charge-theta": options.layout?.chargeTheta,
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