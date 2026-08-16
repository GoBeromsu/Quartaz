// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function I(e){return typeof e=="string"?e:e.id}function it(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function lt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((m,k)=>k.degree!==m.degree?k.degree-m.degree:m.id<k.id?-1:m.id>k.id?1:0).slice(0,Math.max(0,n)),c=new Set(r.map(m=>m.id)),i=e.links.filter(m=>{let k=I(m.source),L=I(m.target);return c.has(k)&&c.has(L)});return{nodes:r,links:i}}function ct(e,n,o,r){let c=new Set,i=Math.max(0,Math.floor(r));if(i<=0)return c;let m=new Set([o]),k=new Set([o]);for(let L=0;L<i;L+=1){let x=new Set;for(let H of k)for(let g of e.get(H)??[])m.has(g)||(m.add(g),x.add(g),n.has(g)||c.add(g));k=x}return c}var Re="0.179.1",Wt="https://esm.sh/force-graph@1.51.4",Yt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Re}`,Kt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Re}`,jt=`https://esm.sh/three@${Re}`,Xt=`https://esm.sh/three@${Re}/examples/jsm/postprocessing/UnrealBloomPass.js`,Zt=8,Jt=14;var pe=1,$e=3.5,Qt=.05,en=2.6,tn=1,ut=1,ge=.18,Pt="graph-landing:lens",It="graph-landing:tune",Qe="graph-landing:ambient-audio",dt="UDVtMYqUAyw",Ne=12,nn=28e3,rn="https://www.youtube.com/iframe_api",on=.18,an=1.4,sn=1.25,ln=1.15,cn=.55,me={x:330,y:235,z:565},ft={x:0,y:0,z:0},gt=1.3,un=3.2,mt=1.05,pt=.32,ht=.28,dn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},fn="#a8b0c2",gn="#2a3348",bt={min:80,max:200},yt={min:40,max:110},wt={min:160,max:280},kt={min:90,max:170},Lt=220,Tt=2,mn=.15,pn=.8,hn=350,qe={min:-100,max:-190},We={min:72,max:116},Ye={min:130,max:260};function bn(e){return _e(e-.5,0,1)}function De(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Ke(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function yn(e){let n=[];for(let o of Object.values(e)){let r=De(o),c=typeof r.slug=="string"?r.slug:"";if(c.length===0)continue;let i=r.multilingual,m=i&&typeof i=="object"?i:void 0;n.push({slug:c,title:typeof r.title=="string"?r.title:c,links:Ke(r.links),tags:Ke(r.tags),externalLinks:Ke(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:m})}return n}function wn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Lt?n:`${n.slice(0,Lt).trimEnd()}\\u2026`}function he(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function vt(e){return he(e)/(2*Math.PI)}function Pe(e,n,o){let r=he(e),c=Math.acos(2*vt(`${e}:phi`)-1),i=n+(o-n)*vt(`${e}:r`);return{x:i*Math.sin(c)*Math.cos(r),y:i*Math.sin(c)*Math.sin(r),z:i*Math.cos(c)}}function At(e){return e==="index"||e.endsWith("/index")}function Dt(e){return e==="tags"||e.startsWith("tags/")}function kn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function _t(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function je(e,n){return e.multilingual?.locale?e.multilingual.locale:_t(e.slug,n).locale}function Ln(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${_t(e.slug,n).permalink}`}function Tn(e,n){let o=e.find(r=>je(r,n.prefixes)===n.localeId)??e.find(r=>je(r,n.prefixes)===n.sourceLocale)??e.find(r=>je(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function _e(e,n,o){return Math.min(o,Math.max(n,e))}function Et(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function vn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function et(e){return vn(e).trim().toLowerCase()}function En(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function xn(e){let n=e.trim();return n.length===0||En(n)||Dt(n)||At(n)?!0:et(n).length===0}function Sn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Gt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Cn(e,n){let o=Gt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function xt(e){return`external:${e}`}function Mn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),c=o.pathname;return(n.get(r)??0)>1&&c.length>1?`${r}${c}`:r}function Nn(e){let n=new Map,o=new Map;for(let r of e){let c=et(r.slug);c.length>0&&!n.has(c)&&n.set(c,r.slug);let i=r.title.trim().toLowerCase();i.length>0&&!o.has(i)&&o.set(i,r.slug);let m=i.replace(/\\s+/g,"-");m.length>0&&!o.has(m)&&o.set(m,r.slug)}return{byBasename:n,byTitle:o}}function Pn(e,n,o){if(n.has(e))return e;let r=et(e),c=o.byBasename.get(r);if(c)return c;let i=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return i||null}function In(e,n){return e.length===0?"":[...e].sort((r,c)=>(n.get(c)??0)-(n.get(r)??0))[0]??""}function An(e,n,o=void 0){let r=e.filter(u=>!At(u.slug)&&!Dt(u.slug)&&!kn(u)),c=new Map;for(let u of r){let f=Ln(u,n.prefixes),b=c.get(f)??[];b.push(u),c.set(f,b)}let i=[];for(let u of c.values())i.push(Tn(u,n));let m=new Set(i.map(u=>u.slug)),k=Nn(i),L=new Map,x=[],H=new Set,g=new Map,F=u=>{L.set(u,(L.get(u)??0)+1)},_=(u,f,b)=>u<f?`${u}|${f}|${b}`:`${f}|${u}|${b}`,v=(u,f,b,E)=>{let N=_(u,f,b);return H.has(N)?!1:(H.add(N),x.push({source:u,target:f,kind:b}),E&&(F(u),F(f)),!0)};for(let u of i)for(let f of u.links){if(xn(f))continue;let b=Pn(f,m,k);b!==null&&b!==u.slug&&v(u.slug,b,"wikilink",!0)}let G=Sn(),A=new Set;for(let u of i)for(let f of u.externalLinks){let b=Gt(f);b===null||!Cn(b,G)||(A.add(b),v(u.slug,xt(b),"external",!0))}let U=new Map;for(let u of A){let f=new URL(u).hostname.replace(/^www\\./,"");U.set(f,(U.get(f)??0)+1)}let z=new Set,S=new Map;for(let u of i)for(let f of u.tags){g.set(f,(g.get(f)??0)+1);let b=`tag:${f}`;z.add(b),v(u.slug,b,"tag",!0);let E=S.get(f)??[];E.push(u.slug),S.set(f,E)}if(o!==!1){let u=o?.maxTagsPerNote,f=o?.maxEdges,b=0;e:for(let E of i)if(!(E.tags.length<2)&&!(u!==void 0&&E.tags.length>u))for(let N=0;N<E.tags.length;N+=1)for(let P=N+1;P<E.tags.length;P+=1){if(f!==void 0&&b>=f)break e;v(`tag:${E.tags[N]}`,`tag:${E.tags[P]}`,"cooc",!1)&&(b+=1)}}let M=new Map;for(let u of i){let f=Et(u.slug);if(f==="root")continue;let b=M.get(f)??[];b.push(u.slug),M.set(f,b)}for(let u of M.values()){if(u.length<2)continue;let f=[...u].sort();for(let b=0;b<f.length;b+=1){let E=f[(b+1)%f.length],N=f[(b+Tt)%f.length],P=f[b];P===void 0||E===void 0||(P!==E&&!H.has(_(P,E,"wikilink"))&&v(P,E,"folder",!1),f.length>Tt+1&&N!==void 0&&P!==N&&!H.has(_(P,N,"wikilink"))&&v(P,N,"folder",!1))}}let X=[...L.values()],Y=X.length>0?Math.min(...X):0,te=X.length>0?Math.max(...X):0,$=u=>{let f=L.get(u)??0,b=Math.sqrt(f),E=Math.sqrt(Y),P=Math.sqrt(te)-E;return P===0?(pe+$e)/2:pe+(b-E)/P*($e-pe)},ne=[...i].sort((u,f)=>(L.get(f.slug)??0)-(L.get(u.slug)??0)),Q=new Set(ne.filter(u=>(L.get(u.slug)??0)>0).slice(0,Zt).map(u=>u.slug)),O=i.map(u=>{let f=Q.has(u.slug),b=f?Pe(u.slug,yt.min,yt.max):Pe(u.slug,bt.min,bt.max);return{id:u.slug,name:u.title,type:"note",val:$(u.slug),degree:L.get(u.slug)??0,isHub:f,tag:"",slug:u.slug,url:"",folder:Et(u.slug),tags:u.tags,dominantTag:In(u.tags,g),excerpt:wn(u.content),phase:he(u.slug),x:b.x,y:b.y,z:b.z}});for(let u of A){let f=xt(u),b=Pe(f,wt.min,wt.max);O.push({id:f,name:Mn(u,U),type:"external",val:$(f)*cn,degree:L.get(f)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:he(f),x:b.x,y:b.y,z:b.z})}for(let u of z){let f=u.slice(4),b=Pe(u,kt.min,kt.max);O.push({id:u,name:f,type:"tag",val:_e($(u)*.7,pe,$e),degree:L.get(u)??0,isHub:!1,tag:f,slug:`tags/${f}`,url:"",folder:"tag",tags:[f],dominantTag:f,excerpt:"",phase:he(u),x:b.x,y:b.y,z:b.z})}return{nodes:O,links:x}}function Xe(e){let n=new Map,o=(r,c)=>{let i=n.get(r)??new Set;i.add(c),n.set(r,i)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let c=I(r.source),i=I(r.target);o(c,i),o(i,c)}return n}function ae(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Rt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ae("--light","#ffffff"),ink:ae("--darkgray","#0f0f0f"),accent:ae("--secondary","#a52142"),tertiary:ae("--tertiary","#c75b75"),gray:ae("--gray","#737373"),external:ae("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Ae(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Dn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function _n(){return Dn()&&!Ae()}function K(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ge(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function se(e,n){let o=Ge(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function j(e,n,o){let r=Ge(e),c=Ge(n);if(!r||!c)return e;let i=(m,k)=>Math.round(m+(k-m)*o);return`rgb(${i(r.r,c.r)}, ${i(r.g,c.g)}, ${i(r.b,c.b)})`}function Ht(e){return K()?j(e.bg,"#05070f",.88):e.bg}function Gn(e){let n=Ge(e);if(!n)return e;let o=r=>{let c=r/255,i=c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4);return Math.round(i*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Rn(e){return Gn(Ht(e))}function Ft(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function St(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Ft(e,[n.accent,n.tertiary,n.ink,n.gray])}function Hn(e,n){return e.length===0?n.ink:Ft(e,[n.accent,n.tertiary])}function Ot(e){let n=e.split("/").map(i=>encodeURIComponent(i)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let c=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(c,window.location.origin)}function Fn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Ot(e);window.location.assign(n.toString())}function On(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function zn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function Ze(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Vn(e){let o=await import(e?Yt:Wt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):zn(o)}function Bn(){try{let e=sessionStorage.getItem(Pt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Un(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(It);if(!n)return e;let o=De(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,c=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,i=typeof o.zoom=="number"?o.zoom:e.zoom,m=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:c,zoom:i,spread:m}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Ie(e){try{sessionStorage.setItem(It,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function Je(e){try{sessionStorage.setItem(Pt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function $n(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function qn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Wn(e,n){return e.type==="note"&&e.folder===n}function Ct(e,n){let o=I(n),r=e.find(c=>c.id===o);return!r||r.type!=="note"?null:r.folder}function Yn(e,n,o){let r=new Map;if(n==="folder"){let c=[...new Set(e.nodes.filter(i=>i.type==="note").map(i=>i.folder))];return c.forEach((i,m)=>{let k=Math.PI*2*m/Math.max(c.length,1),L={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let x of e.nodes)x.type==="note"&&x.folder===i&&r.set(x.id,L)}),r}if(n==="tag"){let c=e.nodes.filter(m=>m.type==="tag"),i=new Map;c.forEach((m,k)=>{let L=Math.PI*2*k/Math.max(c.length,1);i.set(m.tag,{x:Math.cos(L)*o,y:Math.sin(L)*o,z:0})});for(let m of e.nodes)if(m.type==="tag"){let k=i.get(m.tag);k&&r.set(m.id,k)}else if(m.dominantTag.length>0){let k=i.get(m.dominantTag);k&&r.set(m.id,k)}}return r}function Kn(e,n){let o=[],r=c=>{let i=n*c;for(let m of o){let k=e(m);k&&(m.vx=(m.vx??0)+(k.x-(m.x??0))*i,m.vy=(m.vy??0)+(k.y-(m.y??0))*i,m.vz=(m.vz??0)+(k.z-(m.z??0))*i)}};return r.initialize=c=>{o=c},r}function Mt(e,n,o,r){for(let c of e.querySelectorAll(n)){if(!(c instanceof HTMLElement))continue;let i=c.getAttribute(r);c.setAttribute("aria-pressed",i===o?"true":"false")}}function jn(e,n,o,r){let c=Xe(n.links),i=(t,a,l)=>t<a?`${t}|${a}|${l}`:`${a}|${t}|${l}`,m=new Map,k=new Map,L=new Set,x=new Set;r.fullData!==n&&(m=new Map(r.fullData.nodes.map(t=>[t.id,t])),k=Xe(r.fullData.links),L=new Set(n.nodes.map(t=>t.id)),x=new Set(n.links.map(t=>i(I(t.source),I(t.target),t.kind))));let H=t=>{if(r.fullData===n)return!1;let a=ct(k,L,t,r.expandHops);if(a.size===0)return!1;for(let l of a){let s=m.get(l);s&&(n.nodes.push(s),L.add(l))}for(let l of r.fullData.links){let s=I(l.source),d=I(l.target);if(!L.has(s)||!L.has(d))continue;let p=i(s,d,l.kind);x.has(p)||(x.add(p),n.links.push(l))}return c=Xe(n.links),!0},g={lens:Bn(),allLabels:!1,focusTag:null,focusFolder:null},F=null,_=null,v=Un(),G=()=>_??F,A=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,Jt).map(t=>t.id)),U=t=>{let a=t.val;return t.isHub&&(a*=an),g.lens==="tag"&&t.type==="tag"&&(a*=sn),g.focusTag&&t.id===`tag:${g.focusTag}`&&(a*=ln),a},z=t=>{let a=G();return g.allLabels||a===t.id||a!==null&&(c.get(a)?.has(t.id)??!1)?!0:A.has(t.id)},S=t=>{let a=_e((U(t)-pe)/5,0,1);return(gt+a*(un-gt))*v.nodeScale},M=t=>{let a=G();if(a!==null)return a===t||(c.get(a)?.has(t)??!1);if(g.focusTag===null&&g.focusFolder===null)return!0;let l=n.nodes.find(s=>s.id===t);return l?g.focusFolder!==null?Wn(l,g.focusFolder):g.focusTag!==null&&qn(l,g.focusTag):!1},X=t=>t.type==="external"?o.current.external:g.lens==="tag"?t.type==="tag"?o.current.tertiary:Hn(t.dominantTag,o.current):g.lens==="folder"?t.type==="tag"?o.current.tertiary:St(t.folder,o.current):g.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,Y=t=>{let a=G();if(a!==null&&(a===t.id||(c.get(a)?.has(t.id)??!1)))return o.current.accent;let l=X(t);return M(t.id)?K()?t.type==="external"?j(o.current.external,"#ffffff",.18):t.type==="tag"?j(o.current.tertiary,"#ffffff",.22):t.isHub?j("#fff3e4",o.current.accent,.1):j("#ffffff",o.current.accent,.12):t.type==="external"?j(o.current.external,"#08343a",.12):t.type==="tag"?j(o.current.tertiary,o.current.accent,.55):t.isHub?j(o.current.ink,o.current.accent,.22):l:se(l,ge)},te=t=>{let a=K();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},$=t=>{let a=I(t.source),l=I(t.target),s=G();return s!==null&&(a===s||l===s)?K()?.72:.78:(s!==null||g.focusTag!==null||g.focusFolder!==null)&&(!M(a)||!M(l))?te(t.kind)*ge:te(t.kind)},ne=t=>{let a=I(t.source),l=I(t.target),s=G(),d=K()?fn:gn;return s!==null&&(a===s||l===s)?j(o.current.accent,d,.45):d},Q=t=>se(ne(t),$(t)),O=()=>n,u=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Math.hypot(me.x,me.y,me.z),l=a/_e(v.zoom,.4,2.5),s=e.cameraPosition(),d=me,p=a;if(s&&typeof s.x=="number"&&typeof s.y=="number"&&typeof s.z=="number"){let h=Math.hypot(s.x,s.y,s.z);h>1&&(d={x:s.x,y:s.y,z:s.z},p=h)}let y=l/p;e.cameraPosition({x:d.x*y,y:d.y*y,z:d.z*y},ft,t);return}typeof e.zoom=="function"&&e.zoom(v.zoom,t)},f=()=>{let t=bn(v.spread),a=qe.min+t*(qe.max-qe.min),l=We.min+t*(We.max-We.min),s=e.d3Force("charge");s?.strength&&s.strength(a),s?.theta&&r.layout.chargeTheta!==void 0&&s.theta(r.layout.chargeTheta);let d=e.d3Force("link");d?.distance&&d.distance(T=>g.lens==="tag"&&T.kind==="tag"?l*.72:l),d?.strength&&d.strength(T=>{if(T.kind==="cooc"||T.kind==="folder")return .04;if(g.lens==="tag"&&T.kind==="tag")return .95;if(g.lens==="folder"){let D=Ct(n.nodes,T.source),B=Ct(n.nodes,T.target);if(D!==null&&D===B)return .72}return T.kind==="tag"?.65:.8});let p=e.d3Force("center");p?.strength&&p.strength(Qt);let y=Ye.min+t*(Ye.max-Ye.min),h=Yn(n,g.lens,y),w=g.lens==="folder"||g.lens==="tag"?.08:0;e.d3Force("cluster",Kn(T=>h.get(T.id)??null,w)),r.use3d&&e.d3Force("flattenZ",null)},b=new Map,E=new Map,N=new Map,P=(t,a,l)=>{let s=`${Math.round(a*4)}|${l}`,d=N.get(s);if(d)return d;let p={geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:l})};return N.set(s,p),p},q=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,l=r.lod.dotDistance;b.clear(),E.clear(),N.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(s=>{let d=S(s),p=Y(s),y=!1;if(a){if(K()){let D=s.isHub?1.35:1.1,B=new a.MeshLambertMaterial({color:p,emissive:p,emissiveIntensity:D});b.set(s.id,{material:B,base:D,phase:s.phase}),y=new a.Mesh(new a.SphereGeometry(d,14,14),B)}else y=new a.Mesh(new a.SphereGeometry(d,14,14),new a.MeshBasicMaterial({color:p}));if(l!==void 0&&y!==!1){let D=P(a,d,p),B=new a.Mesh(D.geometry,D.material),V=new a.LOD;V.addLevel(y,0),V.addLevel(B,l),y=V}}if(!z(s)||!t)return y;let h=new t(s.name),w=K()?"rgba(255, 255, 255, 0.85)":se(o.current.ink,.88);if(h.color=M(s.id)?w:se(w,ge),h.fontWeight="400",h.strokeWidth=0,h.textHeight=A.has(s.id)?6.5:5.5,h.center.set(0,.5),h.position.x=d+2,h.position.y=0,r.lod.labelDistance!==void 0&&E.set(s.id,{sprite:h,node:s}),!a||y===!1)return h;let T=new a.Group;return T.add(y),T.add(h),T})},He=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0);e.linkThreeObject(l=>{let s=dn[l.kind]*v.edgeScale,d=new t.MeshBasicMaterial({color:ne(l),transparent:!0,opacity:$(l),depthWrite:!1});return new t.Mesh(new t.CylinderGeometry(s,s,1,5),d)}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,s)=>{let d=s.end.x-s.start.x,p=s.end.y-s.start.y,y=s.end.z-s.start.z,h=Math.sqrt(d*d+p*p+y*y);return l.position.x=(s.start.x+s.end.x)/2,l.position.y=(s.start.y+s.end.y)/2,l.position.z=(s.start.z+s.end.z)/2,l.scale.x=1,l.scale.y=Math.max(h,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(a,new t.Vector3(d,p,y).normalize()),!0})},be=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=G();if(a===null)return 0;let l=I(t.source),s=I(t.target);return l===a||s===a?2:0})},W=()=>{e.nodeVal(U),e.nodeColor(Y),e.linkColor(Q),e.linkWidth(t=>{let a=I(t.source),l=I(t.target),s=G(),d=v.edgeScale;return s!==null&&(a===s||l===s)?.7*d:t.kind==="wikilink"||t.kind==="external"?.5*d:(t.kind==="tag"?.35:.25)*d}),typeof e.linkOpacity=="function"&&e.linkOpacity(ut),be(),He(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},Z=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(p,y)=>{let h=document.createElement("span");h.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=p;let T=document.createElement("span");return T.textContent=y,h.append(w,T),h},l=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",d=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,l),a(o.current.tertiary,s),a(o.current.external,d))},ye=t=>{let a=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let s=document.createElement("span");if(s.className="graph-landing__facet-name",t.dotColor!==null){let p=document.createElement("span");p.className="graph-landing__dot",p.style.background=t.dotColor,s.append(p)}s.append(document.createTextNode(t.label));let d=document.createElement("span");return d.className="graph-landing__tag-count",d.textContent=String(t.count),l.append(s,d),a.append(l),a},ie=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),l=r.root.querySelector(".graph-landing__tags");if(g.lens==="folder"){let d=r.root.dataset.folderRootLabel??"root",p=new Map;for(let h of n.nodes)h.type==="note"&&p.set(h.folder,(p.get(h.folder)??0)+1);let y=[...p.entries()].sort((h,w)=>w[1]-h[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=y.length===0),t.replaceChildren(...y.map(([h,w])=>ye({dataset:{key:"graphFolder",value:h},pressed:g.focusFolder===h,dotColor:St(h,o.current),label:h==="root"?d:h,count:w})));return}let s=n.nodes.filter(d=>d.type==="tag").sort((d,p)=>p.degree-d.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=s.length===0),t.replaceChildren(...s.map(d=>ye({dataset:{key:"graphTag",value:d.tag},pressed:g.focusTag===d.tag,dotColor:null,label:d.tag,count:d.degree})))},ee=()=>{e.graphData(O()),f(),W(),q(),Z(),ie(),Mt(r.root,"[data-graph-lens]",g.lens,"data-graph-lens"),e.d3ReheatSimulation()},Fe=t=>{g.lens=t,t!=="tag"&&(g.focusTag=null),t!=="folder"&&(g.focusFolder=null),Je(t),ee()},Oe=t=>{g.focusTag=g.focusTag===t?null:t,g.focusFolder=null,g.focusTag&&(g.lens="tag",Je("tag")),ee()},C=t=>{g.focusFolder=g.focusFolder===t?null:t,g.focusTag=null,g.focusFolder&&(g.lens="folder",Je("folder")),ee()},tt=()=>r.use3d?Rn(o.current):Ht(o.current);e.graphData(O()),e.backgroundColor(tt()),e.nodeLabel(t=>t.name),e.nodeRelSize(en),typeof e.nodeOpacity=="function"&&e.nodeOpacity(tn),typeof e.linkOpacity=="function"&&e.linkOpacity(ut),f(),W();let re=r.root.querySelector("[data-graph-preview]"),we=r.root.querySelector("[data-graph-preview-chip]"),ke=r.root.querySelector("[data-graph-preview-title]"),Le=r.root.querySelector("[data-graph-preview-excerpt]"),Te=0;window.addCleanup(()=>window.clearTimeout(Te));let zt=t=>{if(!(re instanceof HTMLElement)||!(we instanceof HTMLElement)||!(ke instanceof HTMLElement)||!(Le instanceof HTMLElement))return;window.clearTimeout(Te);let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",s=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let d=r.root.dataset.previewTagTemplate??"{n} notes";we.textContent=l,ke.textContent=`#${t.tag}`,Le.textContent=d.replace("{n}",String(t.degree))}else t.type==="external"?(we.textContent=s,ke.textContent=t.name,Le.textContent=t.url):(we.textContent=a,ke.textContent=t.name,Le.textContent=t.excerpt);re.hidden=!1,re.dataset.visible="true"},nt=()=>{re instanceof HTMLElement&&(window.clearTimeout(Te),Te=window.setTimeout(()=>{re.dataset.visible="false",re.hidden=!0},hn))};if(e.onNodeHover(t=>{F=t?t.id:null,_===null&&(t?zt(t):nt()),W(),r.use3d&&q()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Ae()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=on;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=K()?mt:0,r.bloomPass.radius=pt,r.bloomPass.threshold=ht,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(me,ft),v.zoom!==1&&u(0)),q(),!Ae()){let t=0,a=()=>{let l=performance.now()/1e3*pn;for(let s of b.values())s.material.emissiveIntensity=s.base*(1+mn*Math.sin(l+s.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}if(r.lod.labelDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.labelDistance,a=e.cameraPosition.bind(e),l=0,s=()=>{let d=a();if(d&&typeof d.x=="number"&&typeof d.y=="number"&&typeof d.z=="number")for(let p of E.values()){let y=p.node.x??0,h=p.node.y??0,w=p.node.z??0,T=Math.hypot(d.x-y,d.y-h,d.z-w);p.sprite.visible=it(T,t)==="full"}l=window.requestAnimationFrame(s)};l=window.requestAnimationFrame(s),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,l)=>{let s=S(t),d=t.x??0,p=t.y??0;if(a.save(),a.beginPath(),a.arc(d,p,s,0,Math.PI*2),a.fillStyle=Y(t),a.fill(),t.isHub&&(a.strokeStyle=M(t.id)?o.current.accent:se(o.current.accent,ge),a.lineWidth=1.2/l,a.stroke()),z(t)){let y=11.5/l;a.font=`${y}px ${o.current.font}`,a.fillStyle=M(t.id)?o.current.ink:se(o.current.ink,ge),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,d,p-s-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,l)=>{let s=S(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,s,0,Math.PI*2),l.fillStyle=a,l.fill()});let ve=r.root.querySelector("[data-graph-inspect]"),Ee=r.root.querySelector("[data-graph-inspect-chip]"),xe=r.root.querySelector("[data-graph-inspect-title]"),Se=r.root.querySelector("[data-graph-inspect-excerpt]"),ze=r.root.querySelector("[data-graph-inspect-tags]"),Ve=r.root.querySelector("[data-graph-inspect-connected]"),R=r.root.querySelector("[data-graph-inspect-open]"),oe=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),l=r.root.querySelector("[data-graph-rail-scrim]"),s=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),s instanceof HTMLElement&&s.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},Ce=t=>{Ae()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Vt=t=>{let a=c.get(t.id)??new Set,l=[];for(let s of a){let d=n.nodes.find(p=>p.id===s);d&&l.push(d)}return l.sort((s,d)=>d.degree-s.degree)},Bt=t=>{if(!(ve instanceof HTMLElement)||!(Ee instanceof HTMLElement)||!(xe instanceof HTMLElement)||!(Se instanceof HTMLElement)||!(ze instanceof HTMLElement)||!(Ve instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",s=r.root.dataset.legendLinks??"Links",d=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Ee.textContent=l,xe.textContent=`#${t.tag}`,Se.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Ee.textContent=s,xe.textContent=t.name,Se.textContent=t.url):(Ee.textContent=a,xe.textContent=t.name,Se.textContent=t.excerpt);let p=t.tags.map(h=>{let w=document.createElement("li");return w.textContent=h,w});ze.replaceChildren(...p),ze.hidden=p.length===0;let y=Vt(t).slice(0,12);if(y.length===0){let h=document.createElement("li");h.className="graph-landing__inspect-empty",h.textContent=d,Ve.replaceChildren(h)}else Ve.replaceChildren(...y.map(h=>{let w=document.createElement("li"),T=document.createElement("button");T.type="button",T.className="graph-landing__inspect-link",T.dataset.graphInspectId=h.id;let D=h.type==="tag"?l:h.type==="external"?s:a,B=document.createElement("span");B.textContent=D;let V=document.createElement("strong");return V.textContent=h.type==="tag"?`#${h.tag}`:h.name,T.append(B,V),w.append(T),w}));R instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(R.hidden=!1,R.href=Ot(t.slug).toString(),R.textContent=r.root.dataset.inspectRead??"Read note",R.removeAttribute("target"),R.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(R.hidden=!1,R.href=t.url,R.textContent=r.root.dataset.inspectOpenExternal??"Open",R.target="_blank",R.rel="noopener noreferrer"):(R.hidden=!0,R.removeAttribute("href"),R.removeAttribute("target"),R.removeAttribute("rel"))),ve.hidden=!1,r.root.dataset.inspecting="true",oe(!1),nt()},le=()=>{_=null,ve instanceof HTMLElement&&(ve.hidden=!0),r.root.dataset.inspecting="false",Ce(!0),W(),r.use3d&&q()},Ut=t=>{if(_===t.id&&t.type==="note"&&t.slug.length>0){Fn(t.slug);return}if(_===t.id&&t.type==="external"&&t.url.length>0){On(t.url);return}_=t.id,Bt(t),W(),r.use3d&&q()},Be=t=>{H(t.id)&&ee(),Ut(t)},Ue=!1;e.onNodeClick((t,a)=>{t&&(Ue=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Be(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{le(),oe(!1)});let J=r.root.querySelector("#graph-landing-mount");if(J instanceof HTMLElement){let t=null,a=p=>{t={x:p.clientX,y:p.clientY},Ce(!1)},l=(p,y)=>{if(typeof e.graph2ScreenCoords!="function")return null;let h=J.getBoundingClientRect(),w=p-h.left,T=y-h.top,D=null,B=4096;for(let V of O().nodes){if(V.x===void 0||V.y===void 0)continue;let Me=e.graph2ScreenCoords(V.x,V.y,V.z??0),$t=(Me.x-w)**2+(Me.y-T)**2,qt=(Me.x-p)**2+(Me.y-y)**2,st=Math.min($t,qt);st<B&&(B=st,D=V)}return D},s=p=>{let y=t;t=null,Ce(!0),!(!y||(p.clientX-y.x)**2+(p.clientY-y.y)**2>25)&&window.setTimeout(()=>{if(Ue){Ue=!1;return}let w=l(p.clientX,p.clientY);w?Be(w):le()},0)},d=()=>{t=null,Ce(!0)};J.addEventListener("pointerdown",a,!0),J.addEventListener("pointerup",s,!0),J.addEventListener("pointercancel",d,!0),window.addCleanup(()=>{J.removeEventListener("pointerdown",a,!0),J.removeEventListener("pointerup",s,!0),J.removeEventListener("pointercancel",d,!0)})}Mt(r.root,"[data-graph-lens]",g.lens,"data-graph-lens"),Z(),ie(),g.lens!=="all"&&ee(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let rt=()=>{o.current=Rt(),e.backgroundColor(tt()),r.bloomPass&&(r.bloomPass.strength=K()?mt:0,r.bloomPass.radius=pt,r.bloomPass.threshold=ht),W(),q(),Z()};document.addEventListener("themechange",rt),window.addCleanup(()=>document.removeEventListener("themechange",rt));let ot=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){le();return}if(a.closest("[data-graph-rail-toggle]")){let w=r.root.dataset.railOpen!=="true";w&&le(),oe(w);return}if(a.closest("[data-graph-rail-scrim]")){oe(!1);return}let l=a.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let w=r.fullData.nodes.find(T=>T.id===l.dataset.graphInspectId);w&&Be(w);return}let s=a.closest("[data-graph-lens]");if(s instanceof HTMLElement&&s.dataset.graphLens&&$n(s.dataset.graphLens)){Fe(s.dataset.graphLens);return}let d=a.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){Oe(d.dataset.graphTag);return}let p=a.closest("[data-graph-folder]");if(p instanceof HTMLElement&&p.dataset.graphFolder){C(p.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let y=a.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){g.allLabels=!g.allLabels,y.setAttribute("aria-pressed",g.allLabels?"true":"false");let w=y.dataset.labelShow??"Labels",T=y.dataset.labelHide??"Labels",D=g.allLabels?T:w;y.title=D,y.setAttribute("aria-label",D),q();return}if(a.closest("[data-graph-theme]")){let w=K()?"light":"dark";document.documentElement.setAttribute("saved-theme",w),localStorage.setItem("theme",w),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${w}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:w}}));return}let h=a.closest("[data-graph-tags-toggle]");if(h instanceof HTMLButtonElement){let w=r.root.querySelector(".graph-landing__tags");if(w instanceof HTMLElement){let T=w.dataset.open==="true";w.dataset.open=T?"false":"true",h.setAttribute("aria-expanded",T?"false":"true")}}},ce=r.root.querySelector("[data-graph-node-scale]"),ue=r.root.querySelector("[data-graph-edge-scale]");if(ce instanceof HTMLInputElement){ce.value=String(Math.round(v.nodeScale*100));let t=()=>{v.nodeScale=Number(ce.value)/100,Ie(v),W(),r.use3d&&q()};ce.addEventListener("input",t),window.addCleanup(()=>ce.removeEventListener("input",t))}if(ue instanceof HTMLInputElement){ue.value=String(Math.round(v.edgeScale*100));let t=()=>{v.edgeScale=Number(ue.value)/100,Ie(v),W()};ue.addEventListener("input",t),window.addCleanup(()=>ue.removeEventListener("input",t))}let de=r.root.querySelector("[data-graph-zoom]");if(de instanceof HTMLInputElement){de.value=String(Math.round(v.zoom*100));let t=()=>{v.zoom=Number(de.value)/100,Ie(v),u(200)};de.addEventListener("input",t),window.addCleanup(()=>de.removeEventListener("input",t))}let fe=r.root.querySelector("[data-graph-spread]");if(fe instanceof HTMLInputElement){fe.value=String(Math.round(v.spread*100));let t=()=>{v.spread=Number(fe.value)/100,Ie(v),f(),e.d3ReheatSimulation()};fe.addEventListener("input",t),window.addCleanup(()=>fe.removeEventListener("input",t))}oe(!1),r.root.addEventListener("click",ot),window.addCleanup(()=>r.root.removeEventListener("click",ot));let at=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){oe(!1);return}le()}};window.addEventListener("keydown",at),window.addCleanup(()=>window.removeEventListener("keydown",at))}function Xn(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Zn(){try{return window.localStorage.getItem(Qe)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Nt(e){try{if(e){window.localStorage.setItem(Qe,"stopped");return}window.localStorage.removeItem(Qe)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function Jn(e){let n=performance.now(),o=0,r=c=>{let i=Math.min(1,(c-n)/e.durationMs),m=i*i;e.apply(e.from+(e.to-e.from)*m),i<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function Qn(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,c=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof c=="function"&&c();let i=r.YT;if(!i||typeof i.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(i)},!document.querySelector("script[data-graph-youtube-api]")){let i=document.createElement("script");i.src=rn,i.async=!0,i.dataset.graphYoutubeApi="1",i.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(i)}})}function er(e){return new e.api.Player(e.host,{videoId:dt,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:dt,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function tr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",c=e.dataset.audioPlay??"Play music",i=null,m=!1,k=null,L=!Zn(),x=!1,H=S=>{n.setAttribute("aria-pressed",S?"true":"false"),n.setAttribute("aria-label",S?r:c),n.title=S?r:c,n.dataset.playing=S?"true":"false"},g=()=>{k&&(k(),k=null)},F=S=>{i&&i.setVolume(Math.max(0,Math.min(Ne,S)))},_=S=>{!L||x||(x=!0,H(!0),S.unMute(),F(0),S.playVideo(),g(),k=Jn({from:0,to:Ne,durationMs:nn,apply:F}))},v=()=>{L=!1,x=!1,g(),Nt(!0),i&&(i.mute(),i.pauseVideo(),F(0)),H(!1)},G=async()=>{if(!i)try{let S=await Qn();if(i)return;i=er({api:S,host:o,onReady:M=>{m=!0,M.mute(),F(0),M.playVideo()},onEnded:M=>{L&&(M.playVideo(),F(Ne))}})}catch(S){console.error("[graph-landing] ambient audio unavailable",S)}},A=S=>{let M=S.target;if(!(M instanceof Element&&M.closest("[data-graph-audio-toggle]"))&&!(!L||x||Xn())){if(m&&i){_(i);return}G()}},U=()=>{if(L&&x){v();return}if(L=!0,Nt(!1),m&&i){_(i);return}G()},z=()=>{if(i){if(document.hidden){g(),i.pauseVideo();return}L&&x&&(i.playVideo(),F(Ne))}};H(L),G(),n.addEventListener("click",U),e.addEventListener("pointerdown",A,!0),e.addEventListener("touchstart",A,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",z),window.addCleanup(()=>{n.removeEventListener("click",U),e.removeEventListener("pointerdown",A,!0),e.removeEventListener("touchstart",A,!0),document.removeEventListener("visibilitychange",z),g(),i&&(i.pauseVideo(),i.destroy(),i=null)})}async function nr(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",tr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",c=e.dataset.sourceLocale??"ko",i=(e.dataset.localePrefixes??"").split(",").map(C=>C.trim()).filter(C=>C.length>0),m=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",L=e.dataset.graphIndexPath??"",x=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,H=x!==void 0&&Number.isFinite(x)&&x>=0?x:void 0,g=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,F=Number.isFinite(g)?g:1,_=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,v=e.dataset.graphRenderMode==="3d"?"3d":"auto",G=e.dataset.graphLayoutFreezeAfterWarmup==="true",A=e.dataset.graphLayoutWarmupTicks?Number.parseInt(e.dataset.graphLayoutWarmupTicks,10):void 0,U=A!==void 0&&Number.isFinite(A)&&A>=0?A:void 0,z=e.dataset.graphLayoutCooldownTicks?Number.parseInt(e.dataset.graphLayoutCooldownTicks,10):void 0,S=z!==void 0&&Number.isFinite(z)&&z>=0?z:void 0,M=e.dataset.graphLayoutChargeTheta?Number.parseFloat(e.dataset.graphLayoutChargeTheta):void 0,X=M!==void 0&&Number.isFinite(M)&&M>=0?M:void 0,Y=e.dataset.graphLodLabelDistance?Number.parseFloat(e.dataset.graphLodLabelDistance):void 0,te=Y!==void 0&&Number.isFinite(Y)&&Y>=0?Y:void 0,$=e.dataset.graphLodDotDistance?Number.parseFloat(e.dataset.graphLodDotDistance):void 0,ne=$!==void 0&&Number.isFinite($)&&$>=0?$:void 0,Q=!1,O=null,u={current:Rt()},f=()=>{Q=!0,O&&(O._destructor(),O=null),delete e.dataset.graphReady};window.addCleanup(f);let b=_n();if(v==="3d"&&!b){Ze(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let E=v==="3d"||b,N=Vn(E),P=E?import(Kt).then(C=>C.default??null).catch(C=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",C),null)):Promise.resolve(null),q=E?import(jt).catch(C=>(console.error("[graph-landing] three unavailable; using default node spheres",C),null)):Promise.resolve(null),He=E?import(Xt).then(C=>C.UnrealBloomPass?new C.UnrealBloomPass:null).catch(C=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",C),null)):Promise.resolve(null);N.catch(()=>{});let be;try{be=De(k==="graphIndex"?await fetch(L).then(C=>C.json()):await fetchData)}catch(C){throw Ze(n,"Graph could not load content index."),C}if(Q)return;let W=An(yn(be),{localeId:r,sourceLocale:c,prefixes:i},_),Z=lt(W,H),ye=m.replace("{n}",String(Z.nodes.length)).replace("{m}",String(Z.links.length));for(let C of o)C.textContent=ye;let ie;try{ie=await N}catch(C){throw Ze(n,"Graph could not load. Check your network connection."),C}let[ee,Fe,Oe]=await Promise.all([P,q,He]);Q||(n.replaceChildren(),O=ie(n),n.__graphLanding=O,n.__graphData=Z,jn(O,Z,u,{use3d:E,root:e,spriteText:ee,bloomPass:Oe,three:Fe,fullData:W,expandHops:F,layout:{freezeAfterWarmup:G,warmupTicks:U,cooldownTicks:S,chargeTheta:X},lod:{labelDistance:te,dotDistance:ne}}))}var rr="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(rr,r)}catch(c){console.error("[graph-landing] failed to persist preferred-locale",c)}});document.addEventListener("nav",()=>{nr()});\n';

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
          "data-graph-lod-label-distance": options.lod?.labelDistance,
          "data-graph-lod-dot-distance": options.lod?.dotDistance,
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