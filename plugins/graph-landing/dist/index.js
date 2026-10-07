// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function jt(e,r,o,n){if(![e.x,e.y,e.z,r.x,r.y,r.z,o,n].every(Number.isFinite))return null;let c=r.x-e.x,p=r.y-e.y,x=r.z-e.z,E=Math.hypot(c,p,x),z={x:(e.x+r.x)/2,y:(e.y+r.y)/2,z:(e.z+r.z)/2},W=E-Math.max(0,o)-Math.max(0,n);if(E===0||W<=0)return{start:z,end:z,length:0};let w=c/E,K=p/E,B=x/E,T=Math.max(0,o),j=Math.max(0,n);return{start:{x:e.x+w*T,y:e.y+K*T,z:e.z+B*T},end:{x:r.x-w*j,y:r.y-K*j,z:r.z-B*j},length:W}}function Xt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function ot(e,r,o){let n=Number.isFinite(e)?Math.max(0,e):0,s=Number.isFinite(r)?Math.max(0,r):0,c=Number.isFinite(o)?Math.max(s,o):s;if(c===s)return s>0?.5:0;let p=Math.min(c,Math.max(s,n));return(Math.sqrt(p)-Math.sqrt(s))/(Math.sqrt(c)-Math.sqrt(s))}function Zt(e,r,o){return ot(Math.max(e,r),0,o)}function Re(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function Jt(e){return 1+Re(e,0,1)*1.2}function Qt(e,r){let o=Re(e,0,1),n=Re(r,0,2);return Math.max(.5,1-o*.24*n)}function en(e,r){let o=Re(e,0,1),n=Re(r,0,2);return Math.min(1.6,1+o*.3*n)}var Qn=/^[A-Za-z0-9_-]{6,20}$/,er=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),tr=new Set(["youtu.be","www.youtu.be"]);function rt(e){return e&&Qn.test(e)?e:void 0}function nr(e){if(!e)return;let r=e.trim(),o=rt(r);if(o)return o;let n;try{n=new URL(r)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if(er.has(n.hostname)){if(n.pathname==="/watch")return rt(n.searchParams.get("v"));let s=n.pathname.split("/").filter(Boolean);if(s.length===2&&(s[0]==="shorts"||s[0]==="embed"))return rt(s[1])}if(tr.has(n.hostname)){let s=n.pathname.split("/").filter(Boolean);if(s.length===1)return rt(s[0])}}}function tn(e){let r=[],o=new Set;for(let n of e){let s=n.title.trim(),c=nr(n.url);if(!s||!c||o.has(c))continue;o.add(c);let p=n.artist?.trim();p?r.push({title:s,artist:p,videoId:c}):r.push({title:s,videoId:c})}return r}function D(e){return typeof e=="string"?e:e.id}function xt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function nn(e,r,o,n){return r||e&&xt(o,n)==="full"}function at(e,r,o){let n=e.get(r);if(n)return n;let s=o();return e.set(r,s),s}function me(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function rn(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let n=[...e.nodes].sort((p,x)=>x.degree!==p.degree?x.degree-p.degree:p.id<x.id?-1:p.id>x.id?1:0).slice(0,Math.max(0,r)),s=new Set(n.map(p=>p.id)),c=e.links.filter(p=>{let x=D(p.source),E=D(p.target);return s.has(x)&&s.has(E)});return{nodes:n,links:c}}function on(e,r,o,n){let s=new Set,c=Math.max(0,Math.floor(n));if(c<=0)return s;let p=new Set([o]),x=new Set([o]);for(let E=0;E<c;E+=1){let z=new Set;for(let W of x)for(let w of e.get(W)??[])p.has(w)||(p.add(w),z.add(w),r.has(w)||s.add(w));x=z}return s}var rr=2.399963229728653,Tt=20;function an(e,r,o){let n=e.x??0,s=e.y??0,c=e.z??0,p=r*rr;return{x:n+Tt*Math.cos(p),y:s+Tt*Math.sin(p),z:o?c+Tt*Math.sin(p*.5):c}}function sn(e,r,o,n){if(r===o)return new Set;if(r===null||o===null)return new Set(n);let s=new Set([r,o]);for(let c of e.get(r)??[])s.add(c);for(let c of e.get(o)??[])s.add(c);return s}var Dt="0.179.1",or="https://esm.sh/force-graph@1.51.4",ar=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Dt}`,ir="https://esm.sh/d3-force-3d@3.0.6",sr=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Dt}`,cr=`https://esm.sh/three@${Dt}`,lr=8,ur=10;var Be=1,Pt=4,dr=.05,fr=2.6,gr=1,cn=1,Fe=.18,_n="graph-landing:lens",Pn="graph-landing:tune",ln="graph-landing:hint",Gt="graph-landing:ambient-audio",un="UDVtMYqUAyw",Oe=12,mr=28e3,pr="https://www.youtube.com/iframe_api",hr=.18,dn=1.25,br=1.25,yr=1.15,wr=.55,pe={x:330,y:235,z:565},fn={x:0,y:0,z:0},qe=Math.hypot(pe.x,pe.y,pe.z),gn=.52,kr=300/qe,vr=1600/qe,mn=3.6,Tr=10.5,pn=3.2,hn=64,bn=24,yn="#f2f3f4",wn="#f4c3d0",xr=6,Er={wikilink:.9,tag:.6,external:.75,cooc:.08,folder:.08},Lr="#a8b0c2",kn={min:80,max:200},vn={min:40,max:110},Tn={min:160,max:280},xn={min:90,max:170},En=220,Ln=2,Sr=350,Et={min:-170,max:-320},Lt={min:96,max:156},St={min:170,max:340};function Mr(e){return $e(e-.5,0,1)}function ct(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Mt(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Cr(e){let r=[];for(let o of Object.values(e)){let n=ct(o);if(!Xt(n.filePath))continue;let s=typeof n.slug=="string"?n.slug:"";if(s.length===0)continue;let c=n.multilingual,p=c&&typeof c=="object"?c:void 0;r.push({slug:s,title:typeof n.title=="string"?n.title:s,links:Mt(n.links),tags:Mt(n.tags),externalLinks:Mt(n.externalLinks),content:typeof n.excerpt=="string"?n.excerpt:typeof n.content=="string"?n.content:"",multilingual:p})}return r}function Nr(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=En?r:`${r.slice(0,En).trimEnd()}\\u2026`}function Ue(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function Sn(e){return Ue(e)/(2*Math.PI)}function it(e,r,o){let n=Ue(e),s=Math.acos(2*Sn(`${e}:phi`)-1),c=r+(o-r)*Sn(`${e}:r`);return{x:c*Math.sin(s)*Math.cos(n),y:c*Math.sin(s)*Math.sin(n),z:c*Math.cos(s)}}function Gn(e){return e==="index"||e.endsWith("/index")}function Hn(e){return e==="tags"||e.startsWith("tags/")}function Ir(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Dn(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Ct(e,r){return e.multilingual?.locale?e.multilingual.locale:Dn(e.slug,r).locale}function Ar(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Dn(e.slug,r).permalink}`}function _r(e,r){let o=e.find(n=>Ct(n,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(n=>Ct(n,r.prefixes)===r.sourceLocale)??e.find(n=>Ct(n,r.prefixes)===void 0)}function $e(e,r,o){return Math.min(o,Math.max(r,e))}function Mn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Pr(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function zt(e){return Pr(e).trim().toLowerCase()}function Gr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Hr(e){let r=e.trim();return r.length===0||Gr(r)||Hn(r)||Gn(r)?!0:zt(r).length===0}function Dr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function zn(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function zr(e,r){let o=zn(e);return o===null?!1:!r.includes(new URL(o).hostname)}function Cn(e){return`external:${e}`}function Rr(e,r){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),s=o.pathname;return(r.get(n)??0)>1&&s.length>1?`${n}${s}`:n}function Fr(e){let r=new Map,o=new Map;for(let n of e){let s=zt(n.slug);s.length>0&&!r.has(s)&&r.set(s,n.slug);let c=n.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,n.slug);let p=c.replace(/\\s+/g,"-");p.length>0&&!o.has(p)&&o.set(p,n.slug)}return{byBasename:r,byTitle:o}}function Or(e,r,o){if(r.has(e))return e;let n=zt(e),s=o.byBasename.get(n);if(s)return s;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return c||null}function Vr(e,r){return e.length===0?"":[...e].sort((n,s)=>(r.get(s)??0)-(r.get(n)??0))[0]??""}function Wr(e,r,o=void 0){let n=e.filter(u=>!Gn(u.slug)&&!Hn(u.slug)&&!Ir(u)),s=new Map;for(let u of n){let b=Ar(u,r.prefixes),v=s.get(b)??[];v.push(u),s.set(b,v)}let c=[];for(let u of s.values()){let b=_r(u,r);b&&c.push(b)}let p=new Set(c.map(u=>u.slug)),x=Fr(c),E=new Map,z=[],W=new Set,w=new Map,K=u=>{E.set(u,(E.get(u)??0)+1)},B=(u,b,v)=>u<b?`${u}|${b}|${v}`:`${b}|${u}|${v}`,T=(u,b,v,_)=>{let P=B(u,b,v);return W.has(P)?!1:(W.add(P),z.push({source:u,target:b,kind:v}),_&&(K(u),K(b)),!0)};for(let u of c)for(let b of u.links){if(Hr(b))continue;let v=Or(b,p,x);v!==null&&v!==u.slug&&T(u.slug,v,"wikilink",!0)}let j=Dr(),H=new Set;for(let u of c)for(let b of u.externalLinks){let v=zn(b);v===null||!zr(v,j)||(H.add(v),T(u.slug,Cn(v),"external",!0))}let q=new Map;for(let u of H){let b=new URL(u).hostname.replace(/^www\\./,"");q.set(b,(q.get(b)??0)+1)}let ee=new Set,M=new Map;for(let u of c)for(let b of u.tags){w.set(b,(w.get(b)??0)+1);let v=`tag:${b}`;ee.add(v),T(u.slug,v,"tag",!0);let _=M.get(b)??[];_.push(u.slug),M.set(b,_)}if(o!==!1){let u=o?.maxTagsPerNote,b=o?.maxEdges,v=0;e:for(let _ of c)if(!(_.tags.length<2)&&!(u!==void 0&&_.tags.length>u))for(let P=0;P<_.tags.length;P+=1)for(let N=P+1;N<_.tags.length;N+=1){if(b!==void 0&&v>=b)break e;T(`tag:${_.tags[P]}`,`tag:${_.tags[N]}`,"cooc",!1)&&(v+=1)}}let $=new Map;for(let u of c){let b=Mn(u.slug);if(b==="root")continue;let v=$.get(b)??[];v.push(u.slug),$.set(b,v)}for(let u of $.values()){if(u.length<2)continue;let b=[...u].sort();for(let v=0;v<b.length;v+=1){let _=b[(v+1)%b.length],P=b[(v+Ln)%b.length],N=b[v];N===void 0||_===void 0||(N!==_&&!W.has(B(N,_,"wikilink"))&&T(N,_,"folder",!1),b.length>Ln+1&&P!==void 0&&N!==P&&!W.has(B(N,P,"wikilink"))&&T(N,P,"folder",!1))}}let A=[...E.values()],U=A.length>0?Math.min(...A):0,X=A.length>0?Math.max(...A):0,Z=u=>{let b=ot(E.get(u)??0,U,X);return Be+b*(Pt-Be)},te=[...c].sort((u,b)=>(E.get(b.slug)??0)-(E.get(u.slug)??0)),Y=new Set(te.filter(u=>(E.get(u.slug)??0)>0).slice(0,lr).map(u=>u.slug)),J=c.map(u=>{let b=Y.has(u.slug),v=b?it(u.slug,vn.min,vn.max):it(u.slug,kn.min,kn.max);return{id:u.slug,name:u.title,type:"note",val:Z(u.slug),degree:E.get(u.slug)??0,isHub:b,tag:"",slug:u.slug,url:"",folder:Mn(u.slug),tags:u.tags,dominantTag:Vr(u.tags,w),excerpt:Nr(u.content),phase:Ue(u.slug),x:v.x,y:v.y,z:v.z}});for(let u of H){let b=Cn(u),v=it(b,Tn.min,Tn.max);J.push({id:b,name:Rr(u,q),type:"external",val:Z(b)*wr,degree:E.get(b)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:Ue(b),x:v.x,y:v.y,z:v.z})}for(let u of ee){let b=u.slice(4),v=it(u,xn.min,xn.max);J.push({id:u,name:b,type:"tag",val:$e(Z(u)*.7,Be,Pt),degree:E.get(u)??0,isHub:!1,tag:b,slug:`tags/${b}`,url:"",folder:"tag",tags:[b],dominantTag:b,excerpt:"",phase:Ue(u),x:v.x,y:v.y,z:v.z})}return{nodes:J,links:z}}function Nt(e){let r=new Map,o=(n,s)=>{let c=r.get(n)??new Set;c.add(s),r.set(n,c)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let s=D(n.source),c=D(n.target);o(s,c),o(c,s)}return r}function Le(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function Rn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Le("--graph-backdrop","#ffffff"),ink:Le("--graph-text","#0f0f0f"),accent:Le("--graph-accent","#a52142"),tertiary:Le("--graph-external","#c75b75"),gray:Le("--graph-muted","#737373"),external:Le("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Ve(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Br(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function qr(){return Br()}function O(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ht(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function Se(e,r){let o=Ht(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function Ur(e,r,o){let n=Ht(e),s=Ht(r);if(!n||!s)return e;let c=(p,x)=>Math.round(p+(x-p)*o);return`rgb(${c(n.r,s.r)}, ${c(n.g,s.g)}, ${c(n.b,s.b)})`}function st(e){return e.bg}function $r(e){return O()?st(e):"rgba(0, 0, 0, 0)"}function Fn(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function Nn(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:Fn(e,[r.accent,r.tertiary,r.ink,r.gray])}function Yr(e,r){return e.length===0?r.ink:Fn(e,[r.accent,r.tertiary])}function Kr(e){let r=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let s=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(s,window.location.origin)}function jr(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function It(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function Xr(e){let o=await import(e?ar:or);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):jr(o)}function Zr(){try{let e=sessionStorage.getItem(_n);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Jr(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Pn);if(!r)return e;let o=ct(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,s=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,p=typeof o.spread=="number"?o.spread:e.spread,x=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:s,zoom:c,spread:p,hubGravity:x}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function We(e){try{sessionStorage.setItem(Pn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function At(e){try{sessionStorage.setItem(_n,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function Qr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function eo(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function to(e,r){return e.type==="note"&&e.folder===r}function In(e,r){let o=D(r),n=e.find(s=>s.id===o);return!n||n.type!=="note"?null:n.folder}function no(e,r,o){let n=new Map;if(r==="folder"){let s=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return s.forEach((c,p)=>{let x=Math.PI*2*p/Math.max(s.length,1),E={x:Math.cos(x)*o,y:Math.sin(x)*o,z:0};for(let z of e.nodes)z.type==="note"&&z.folder===c&&n.set(z.id,E)}),n}if(r==="tag"){let s=e.nodes.filter(p=>p.type==="tag"),c=new Map;s.forEach((p,x)=>{let E=Math.PI*2*x/Math.max(s.length,1);c.set(p.tag,{x:Math.cos(E)*o,y:Math.sin(E)*o,z:0})});for(let p of e.nodes)if(p.type==="tag"){let x=c.get(p.tag);x&&n.set(p.id,x)}else if(p.dominantTag.length>0){let x=c.get(p.dominantTag);x&&n.set(p.id,x)}}return n}function ro(e,r){let o=[],n=s=>{let c=r*s;for(let p of o){let x=e(p);x&&(p.vx=(p.vx??0)+(x.x-(p.x??0))*c,p.vy=(p.vy??0)+(x.y-(p.y??0))*c,p.vz=(p.vz??0)+(x.z-(p.z??0))*c)}};return n.initialize=s=>{o=s},n}function An(e,r,o,n){for(let s of e.querySelectorAll(r)){if(!(s instanceof HTMLElement))continue;let c=s.getAttribute(n);s.setAttribute("aria-pressed",c===o?"true":"false")}}function oo(e,r,o,n){let s=Nt(r.links),c=(t,a,i)=>t<a?`${t}|${a}|${i}`:`${a}|${t}|${i}`,p=new Map(n.fullData.nodes.map(t=>[t.id,t])),x=new Map,E=new Set,z=new Set;n.fullData!==r&&(x=Nt(n.fullData.links),E=new Set(r.nodes.map(t=>t.id)),z=new Set(r.links.map(t=>c(D(t.source),D(t.target),t.kind))));let W=t=>{if(n.fullData===r)return!1;let a=on(x,E,t,n.expandHops);if(!E.has(t)&&p.has(t)&&a.add(t),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let i=n.layout.incrementalWarmup?p.get(t):void 0,l=0;for(let m of a){let h=p.get(m);if(h){if(i&&h.id!==i.id){let y=an(i,l,n.use3d);h.x=y.x,h.y=y.y,h.z=y.z,h.vx=h.vy=h.vz=0,l+=1}r.nodes.push(h),E.add(m)}}for(let m of n.fullData.links){let h=D(m.source),y=D(m.target);if(!E.has(h)||!E.has(y))continue;let d=c(h,y,m.kind);z.has(d)||(z.add(d),r.links.push(m))}return s=Nt(r.links),!0},w={lens:Zr(),allLabels:!1,focusTag:null,focusFolder:null},K=null,B=null,T=Jr(),j=!1,H=fn,q=qe,ee=0,M=t=>ot(t.degree,0,ee),$=()=>{e.cooldownTicks(n.layout.freezeAfterWarmup?90:n.layout.cooldownTicks??200),e.d3ReheatSimulation()},A=()=>B??K,U=new Set(r.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,ur).map(t=>t.id)),X=t=>{let a=t.val;return t.isHub&&(a*=dn),w.lens==="tag"&&t.type==="tag"&&(a*=br),w.focusTag&&t.id===`tag:${w.focusTag}`&&(a*=yr),a},Z=t=>{let a=A();return a===t.id?!0:a!==null?s.get(a)?.has(t.id)??!1:w.allLabels||U.has(t.id)},te=t=>{let a=Pt*dn,i=$e((X(t)-Be)/(a-Be),0,1);return(mn+i*(Tr-mn))*T.nodeScale},Y=t=>{let a=A();if(a!==null)return a===t||(s.get(a)?.has(t)??!1);if(w.focusTag===null&&w.focusFolder===null)return!0;let i=r.nodes.find(l=>l.id===t);return i?w.focusFolder!==null?to(i,w.focusFolder):w.focusTag!==null&&eo(i,w.focusTag):!1},J=t=>t.type==="external"?o.current.external:w.lens==="tag"?t.type==="tag"?o.current.tertiary:Yr(t.dominantTag,o.current):w.lens==="folder"?t.type==="tag"?o.current.tertiary:Nn(t.folder,o.current):w.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,u=t=>t.isHub?o.current.accent:o.current.ink,b=(t,a)=>{let i=p.get(t)?.degree??0,l=p.get(a)?.degree??0;return Math.log1p(Math.min(i,l))/Math.log1p(Math.max(1,ee))},v=t=>{let a=A();if(a!==null&&(a===t.id||(s.get(a)?.has(t.id)??!1)))return O()?"#ffffff":o.current.accent;let i=O()?u(t):J(t);return Y(t.id)?O()?i:t.isHub?o.current.accent:i:Ur(i,st(o.current),1-Fe)},_=t=>te(t)*pn*(bn/hn),P=t=>t==="wikilink"?.8:t==="external"?.7:t==="tag"?.62:0,N=t=>{if(t.kind==="cooc"||t.kind==="folder")return t.kind==="cooc"&&w.lens==="tag"||t.kind==="folder"&&w.lens==="folder"?.06:0;let a=D(t.source),i=D(t.target),l=A();if(l!==null&&(a===l||i===l))return O()?.72:.95;let m=b(a,i),h=P(t.kind)*(.6+.4*m);return(l!==null||w.focusTag!==null||w.focusFolder!==null)&&(!Y(a)||!Y(i))?h*Fe:h},ne=t=>{let a=D(t.source),i=D(t.target),l=A(),m=O()?Lr:o.current.gray;return l!==null&&(a===l||i===l)?O()?yn:o.current.accent:m},Me=t=>Se(ne(t),N(t)),oe=()=>({nodes:r.nodes,links:r.links}),ae=t=>{let a=o.current.ink;return Y(t.id)?a:Se(a,Fe)},ie=t=>{if(!O()){let a=o.current.bg;return Y(t.id)?Se(a,.9):Se(a,.28)}return Y(t.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)"},de=()=>{let t=e.controls?.().target;if(t&&(H={x:t.x,y:t.y,z:t.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let i={x:a.x-H.x,y:a.y-H.y,z:a.z-H.z},l=Math.hypot(i.x,i.y,i.z);if(l>1)return{dir:i,len:l}}}return{dir:pe,len:qe}},ge=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=q/$e(T.zoom,.4,2.5),{dir:i,len:l}=de(),m=a/l;e.cameraPosition({x:H.x+i.x*m,y:H.y+i.y*m,z:H.z+i.z*m},H,Ve()?0:t),Ye();return}typeof e.zoom=="function"&&e.zoom(T.zoom,Ve()?0:t)},se=()=>{let t=Mr(T.spread),a=Et.min+t*(Et.max-Et.min),i=Lt.min+t*(Lt.max-Lt.min),l=new Map(r.nodes.map(L=>[L.id,L.degree])),m=Math.max(0,...l.values());ee=m;let h=M,y=L=>Zt(l.get(D(L.source))??0,l.get(D(L.target))??0,m),d=e.d3Force("charge");d?.strength&&d.strength(L=>a*Jt(h(L))),d?.theta&&n.layout.chargeTheta!==void 0&&d.theta(n.layout.chargeTheta);let g=e.d3Force("link");g?.distance&&g.distance(L=>{let F=Qt(y(L),T.hubGravity);return w.lens==="tag"&&L.kind==="tag"?i*.72*F:L.kind==="cooc"||L.kind==="folder"?i:i*F}),g?.strength&&g.strength(L=>{if(L.kind==="cooc"||L.kind==="folder")return .015;let F=en(y(L),T.hubGravity);if(w.lens==="tag"&&L.kind==="tag")return .3*F;if(w.lens==="folder"){let G=In(r.nodes,L.source),le=In(r.nodes,L.target);if(G!==null&&G===le)return .16*F}return L.kind==="tag"?.14*F:(L.kind==="external"?.16:.24)*F}),n.forceCollide&&e.d3Force("collision",n.forceCollide(L=>te(L)+xr).strength(.85).iterations(1));let k=e.d3Force("center");k?.strength&&k.strength(dr);let C=St.min+t*(St.max-St.min),V=no(r,w.lens,C),R=w.lens==="folder"||w.lens==="tag"?.08:0;e.d3Force("cluster",ro(L=>V.get(L.id)??null,R)),n.use3d&&e.d3Force("flattenZ",null)},he=new Map,be=t=>at(he,"dot",()=>{let a=hn,i=document.createElement("canvas");i.width=i.height=a;let l=i.getContext("2d");if(l){let m=bn,h=l.createRadialGradient(32,32,0,32,32,m);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.9,"rgba(255,255,255,1)"),h.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=h,l.fillRect(0,0,a,a)}return new t.CanvasTexture(i)}),ye=(t,a,i)=>{t.color.set(v(a))},f=new Map,S=new Map,I=new Map,re=new Map,fe=new Map,we=new Map,ke=new Map,On=(t,a,i)=>{let l=`${a}|${i}`;return at(we,l,()=>new t.CylinderGeometry(a,a,1,i))},Rt=(t,a,i)=>{let l=`${a}|${i}`;return at(ke,l,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:i,depthWrite:!1,blending:O()?t.AdditiveBlending:t.NormalBlending}))},ve=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,a=n.three,i=n.interaction.incrementalRepaint;if(f.clear(),I.clear(),re.clear(),i)for(let l of r.nodes)re.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let m=te(l),h=!1;if(a){let V=new a.SpriteMaterial({map:be(a),color:"#ffffff",transparent:!0,depthWrite:!1,blending:a.NormalBlending,opacity:1});V.color.set(v(l)),i&&I.set(l.id,V);let R=new a.Sprite(V);R.renderOrder=1;let L=m*pn;R.scale.x=L,R.scale.y=L,R.scale.z=1,h=R}let y=Z(l);if(!t||!i&&!y)return h;let d=Array.from(l.name),g=window.innerWidth<700?24:48,k=new t(d.length>g?`${d.slice(0,g).join("")}\\u2026`:l.name);if(k.color=ae(l),k.backgroundColor=!1,k.fontWeight=O()?"400":"500",k.strokeWidth=O()?.35:.22,k.strokeColor=ie(l),k.material.transparent=!0,k.material.depthWrite=!1,k.material.alphaTest=.01,k.material.toneMapped=!1,k.textHeight=U.has(l.id)?6.5:5.5,k.center.set(0,.5),k.position.x=m+2,k.position.y=0,i?(k.visible=y,f.set(l.id,{sprite:k,node:l})):n.lod.labelDistance!==void 0&&f.set(l.id,{sprite:k,node:l}),!a||h===!1)return k;let C=new a.Group;return C.add(h),C.add(k),C})},Vn=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),i=n.lod.linkResolution??5,l=n.lod.cullDistance,m=n.interaction.incrementalRepaint,h=n.lod.shareLinkResources;if(S.clear(),fe.clear(),we.clear(),ke.clear(),m)for(let y of r.links){let d=D(y.source),g=D(y.target);for(let k of[d,g]){let C=fe.get(k);C?C.push(y):fe.set(k,[y])}}e.linkThreeObject(y=>{let d=Er[y.kind]*T.edgeScale,g=h?Rt(t,ne(y),N(y)):new t.MeshBasicMaterial({color:ne(y),transparent:!0,opacity:N(y),depthWrite:!1,blending:O()?t.AdditiveBlending:t.NormalBlending}),k=h?On(t,d,i):new t.CylinderGeometry(d,d,1,i),C=new t.Mesh(k,g);return(l!==void 0||m)&&S.set(y,C),C}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((y,d,g)=>{let k=d.end.x-d.start.x,C=d.end.y-d.start.y,V=d.end.z-d.start.z,R=Math.sqrt(k*k+C*C+V*V);if(!O()){let L=typeof g.source=="string"?p.get(g.source):g.source,F=typeof g.target=="string"?p.get(g.target):g.target,G=L&&F?jt(d.start,d.end,_(L),_(F)):null;return G?(y.position.x=(G.start.x+G.end.x)/2,y.position.y=(G.start.y+G.end.y)/2,y.position.z=(G.start.z+G.end.z)/2,y.scale.x=1,y.scale.y=G.length,y.scale.z=1,G.length>0&&y.quaternion.setFromUnitVectors(a,new t.Vector3(G.end.x-G.start.x,G.end.y-G.start.y,G.end.z-G.start.z).normalize()),!0):(y.scale.y=0,!0)}return y.position.x=(d.start.x+d.end.x)/2,y.position.y=(d.start.y+d.end.y)/2,y.position.z=(d.start.z+d.end.z)/2,y.scale.x=1,y.scale.y=Math.max(R,.01),y.scale.z=1,y.quaternion.setFromUnitVectors(a,new t.Vector3(k,C,V).normalize()),!0})},lt=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=A();if(a===null||Ve()||document.hidden)return 0;let i=D(t.source),l=D(t.target);return i===a||l===a?2:0})},Te=()=>{e.nodeVal(X),e.nodeColor(v),e.linkColor(Me),e.linkWidth(t=>{let a=D(t.source),i=D(t.target),l=A(),m=T.edgeScale*(O()?1:1.8);return l!==null&&(a===l||i===l)?.7*m:t.kind==="wikilink"||t.kind==="external"?.5*m:(t.kind==="tag"?.35:.25)*m}),typeof e.linkOpacity=="function"&&e.linkOpacity(cn),lt(),Vn(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},Wn=(t,a)=>{let i=sn(s,t,a,re.keys()),l=new Set;for(let m of i){let h=re.get(m);if(!h)continue;let y=I.get(m);y&&n.three&&ye(y,h,n.three);let d=f.get(m);d&&(d.sprite.color=ae(h),d.sprite.strokeColor=ie(h),d.sprite.strokeWidth=O()?.35:.22,d.sprite.visible=Z(h));for(let g of fe.get(m)??[]){if(l.has(g))continue;l.add(g);let k=S.get(g);k&&(n.lod.shareLinkResources&&n.three?k.material=Rt(n.three,ne(g),N(g)):(k.material.color.set(ne(g)),k.material.opacity=N(g)))}}},ut=t=>{if(n.interaction.incrementalRepaint&&n.use3d){lt(),Wn(t,A());return}Te(),n.use3d&&ve()},dt=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(h,y)=>{let d=document.createElement("span");d.className="graph-landing__legend-item";let g=document.createElement("span");g.className="graph-landing__dot",g.setAttribute("aria-hidden","true"),g.style.background=h;let k=document.createElement("span");return k.textContent=y,d.append(g,k),d},i=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",m=n.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,i),a(o.current.tertiary,l),a(o.current.external,m))},Ft=t=>{let a=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="graph-landing__tag-item",i.dataset[t.dataset.key]=t.dataset.value,i.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let h=document.createElement("span");h.className="graph-landing__dot",h.style.background=t.dotColor,l.append(h)}l.append(document.createTextNode(t.label));let m=document.createElement("span");return m.className="graph-landing__tag-count",m.textContent=String(t.count),i.append(l,m),a.append(i),a},Ot=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),i=n.root.querySelector(".graph-landing__tags");if(w.lens==="folder"){let m=n.root.dataset.folderRootLabel??"root",h=new Map;for(let d of r.nodes)d.type==="note"&&h.set(d.folder,(h.get(d.folder)??0)+1);let y=[...h.entries()].sort((d,g)=>g[1]-d[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),i instanceof HTMLElement&&(i.hidden=y.length===0),t.replaceChildren(...y.map(([d,g])=>Ft({dataset:{key:"graphFolder",value:d},pressed:w.focusFolder===d,dotColor:Nn(d,o.current),label:d==="root"?m:d,count:g})));return}let l=r.nodes.filter(m=>m.type==="tag").sort((m,h)=>h.degree-m.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),i instanceof HTMLElement&&(i.hidden=l.length===0),t.replaceChildren(...l.map(m=>Ft({dataset:{key:"graphTag",value:m.tag},pressed:w.focusTag===m.tag,dotColor:null,label:m.tag,count:m.degree})))},Ce=n.root.querySelector("[data-graph-hint]"),ft=0,gt=()=>{if(!(!(Ce instanceof HTMLElement)||Ce.hidden)){Ce.hidden=!0,window.clearTimeout(ft);try{sessionStorage.setItem(ln,"1")}catch{}}},Bn=()=>{if(Ce instanceof HTMLElement){try{if(sessionStorage.getItem(ln))return}catch{}Ce.hidden=!1,ft=window.setTimeout(gt,9e3)}};window.addCleanup(()=>window.clearTimeout(ft));let mt=!0,qn=(t,a)=>{if(typeof e.graph2ScreenCoords!="function"||t<=0||a<=0)return gn;e.camera?.()?.updateMatrixWorld?.();let i=0,l=0;for(let y of oe().nodes){if(y.x===void 0||y.y===void 0)continue;let d=e.graph2ScreenCoords(y.x,y.y,y.z??0);i=Math.max(i,Math.abs(d.x-t/2)),l=Math.max(l,Math.abs(d.y-a/2))}if(i<1||l<1)return gn;let m=.12,h=Math.min(t*(.5-m)/i,a*(.5-m)/l);return $e(1/h,.3,1)},Vt=0,pt=()=>{let t=n.root.querySelector("#graph-landing-mount"),a=t instanceof HTMLElement?t.clientWidth:0,i=t instanceof HTMLElement?t.clientHeight:0;if(r.nodes.length>0&&e.zoomToFit?.(0,40),r.nodes.length>1&&de().len<10&&Vt++<120){ht=window.requestAnimationFrame(pt);return}Vt=0,q=de().len*qn(a,i),ge(0),Ye()},ht=0;e.onEngineStop(()=>{mt&&(ht=window.requestAnimationFrame(()=>{mt=!1,pt(),Bn()}))}),window.addCleanup(()=>window.cancelAnimationFrame(ht));let Ne=(t=!1)=>{e.warmupTicks(t&&n.layout.incrementalWarmup?0:n.layout.warmupTicks??(n.use3d?50:60)),e.graphData(oe()),se(),Te(),ve(),dt(),Ot(),An(n.root,"[data-graph-lens]",w.lens,"data-graph-lens"),$()},Un=t=>{w.lens=t,t!=="tag"&&(w.focusTag=null),t!=="folder"&&(w.focusFolder=null),At(t),Ne()},$n=t=>{w.focusTag=w.focusTag===t?null:t,w.focusFolder=null,w.focusTag&&(w.lens="tag",At("tag")),Ne()},Yn=t=>{w.focusFolder=w.focusFolder===t?null:t,w.focusTag=null,w.focusFolder&&(w.lens="folder",At("folder")),Ne()},Wt=()=>n.use3d?$r(o.current):st(o.current),Ye=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let t=de().len;e.scene().fog=new n.three.Fog(st(o.current),t*kr,t*vr)};e.graphData(oe()),e.backgroundColor(Wt()),e.nodeLabel(()=>""),e.nodeRelSize(fr),typeof e.nodeOpacity=="function"&&e.nodeOpacity(gr),typeof e.linkOpacity=="function"&&e.linkOpacity(cn),se(),Te();let xe=n.root.querySelector("[data-graph-preview]"),Ke=n.root.querySelector("[data-graph-preview-chip]"),je=n.root.querySelector("[data-graph-preview-title]"),Xe=n.root.querySelector("[data-graph-preview-excerpt]"),Ze=0;window.addCleanup(()=>window.clearTimeout(Ze));let Kn=t=>{if(!(xe instanceof HTMLElement)||!(Ke instanceof HTMLElement)||!(je instanceof HTMLElement)||!(Xe instanceof HTMLElement))return;window.clearTimeout(Ze);let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links";if(t.type==="tag"){let m=n.root.dataset.previewTagTemplate??"{n} notes";Ke.textContent=i,je.textContent=`#${t.tag}`,Xe.textContent=m.replace("{n}",String(t.degree))}else t.type==="external"?(Ke.textContent=l,je.textContent=t.name,Xe.textContent=t.url):(Ke.textContent=a,je.textContent=t.name,Xe.textContent=t.excerpt);xe.hidden=!1,xe.dataset.visible="true"},Bt=()=>{xe instanceof HTMLElement&&(window.clearTimeout(Ze),Ze=window.setTimeout(()=>{xe.dataset.visible="false",xe.hidden=!0},Sr))};if(e.onNodeHover(t=>{let a=A();K=t?t.id:null,B===null&&(t?Kn(t):Bt()),ut(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let i=e.controls();i.autoRotate=!1,i.autoRotateSpeed=hr}e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>O()?yn:o.current.accent),typeof e.cameraPosition=="function"&&(e.cameraPosition(pe,fn),T.zoom!==1&&ge(0)),ve(),Ye();let t=n.lod.labelDistance,a=n.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let i=e.cameraPosition.bind(e),l=0,m=()=>{let h=i();if(h&&typeof h.x=="number"&&typeof h.y=="number"&&typeof h.z=="number"){let y=Math.max(1,n.root.clientHeight||window.innerHeight);if(t!==void 0){let d=[];for(let g of f.values()){let k=g.node.x??0,C=g.node.y??0,V=g.node.z??0,R=Math.hypot(h.x-k,h.y-C,h.z-V);if(g.sprite.visible=nn(Z(g.node),A()===g.node.id||A()===null&&U.has(g.node.id),R,t),g.sprite.visible){let L=Array.from(g.node.name),F=window.innerWidth<700?24:48,G=L.length>F?`${L.slice(0,F).join("")}\\u2026`:g.node.name;g.sprite.text!==G&&(g.sprite.text=G);let le=e.graph2ScreenCoords?.(k,C,V);if(le&&A()===null){let Kt=Array.from(G).length*9+12,nt=le.x>window.innerWidth*.6?le.x-Kt:le.x,kt=nt+Kt,Jn=d.some(vt=>Math.abs(vt.y-le.y)<22&&nt<vt.right&&kt>vt.left);g.sprite.visible=!Jn&&nt>=8&&kt<=window.innerWidth-8,g.sprite.visible&&d.push({left:nt,right:kt,y:le.y})}g.sprite.center.set(le&&le.x>window.innerWidth*.6?1:0,.5);let ze=Math.max(5.5,R/y*11);Math.abs(g.sprite.textHeight-ze)>.5&&(g.sprite.textHeight=ze)}}}if(a!==void 0){let d=A();for(let[g,k]of S){let C=D(g.source),V=D(g.target);if(d!==null&&(C===d||V===d)){k.visible=!0;continue}let R=Math.hypot(h.x-k.position.x,h.y-k.position.y,h.z-k.position.z);k.visible=xt(R,a)!=="dot"}}}l=window.requestAnimationFrame(m)};l=window.requestAnimationFrame(m),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,i)=>{let l=te(t),m=t.x??0,h=t.y??0;if(a.save(),a.beginPath(),a.arc(m,h,l,0,Math.PI*2),a.fillStyle=v(t),a.fill(),O()&&t.isHub&&(a.strokeStyle=Y(t.id)?wn:Se(wn,Fe),a.lineWidth=1.2/i,a.stroke()),Z(t)){a.globalAlpha=1;let y=11.5/i;a.font=`${y}px ${o.current.font}`,a.fillStyle=O()?Y(t.id)?o.current.ink:Se(o.current.ink,Fe):ae(t),a.textAlign="center",a.textBaseline="bottom";let d=h-l-6;O()||(a.strokeStyle=ie(t),a.lineWidth=2.5/i,a.lineJoin="round",a.strokeText(t.name,m,d)),a.fillText(t.name,m,d)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,i)=>{let l=te(t)+8;i.beginPath(),i.arc(t.x??0,t.y??0,l,0,Math.PI*2),i.fillStyle=a,i.fill()});let Ie=n.root.querySelector("[data-graph-inspect]"),Je=n.root.querySelector("[data-graph-inspect-chip]"),Qe=n.root.querySelector("[data-graph-inspect-title]"),et=n.root.querySelector("[data-graph-inspect-excerpt]"),bt=n.root.querySelector("[data-graph-inspect-tags]"),yt=n.root.querySelector("[data-graph-inspect-connected]"),Q=n.root.querySelector("[data-graph-inspect-open]"),Ee=t=>{n.root.dataset.railOpen=t?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),i=n.root.querySelector("[data-graph-rail-scrim]"),l=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",t?"false":"true"),i instanceof HTMLElement&&(i.hidden=!t)},ue=()=>{let a=!Ve()&&!document.hidden&&!j;typeof e.controls=="function"&&(e.controls().autoRotate=a),lt()},qt=window.matchMedia("(prefers-reduced-motion: reduce)");qt.addEventListener("change",ue),document.addEventListener("visibilitychange",ue),window.addCleanup(()=>{qt.removeEventListener("change",ue),document.removeEventListener("visibilitychange",ue)}),ue();let jn=t=>{let a=s.get(t.id)??new Set,i=[];for(let l of a){let m=r.nodes.find(h=>h.id===l);m&&i.push(m)}return i.sort((l,m)=>m.degree-l.degree)},Xn=t=>{if(!(Ie instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(Qe instanceof HTMLElement)||!(et instanceof HTMLElement)||!(bt instanceof HTMLElement)||!(yt instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links",m=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Je.textContent=i,Qe.textContent=`#${t.tag}`,et.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Je.textContent=l,Qe.textContent=t.name,et.textContent=t.url):(Je.textContent=a,Qe.textContent=t.name,et.textContent=t.excerpt);let h=t.tags.map(d=>{let g=document.createElement("li");return g.textContent=d,g});bt.replaceChildren(...h),bt.hidden=h.length===0;let y=jn(t).slice(0,12);if(y.length===0){let d=document.createElement("li");d.className="graph-landing__inspect-empty",d.textContent=m,yt.replaceChildren(d)}else yt.replaceChildren(...y.map(d=>{let g=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=d.id;let C=d.type==="tag"?i:d.type==="external"?l:a,V=document.createElement("span");V.textContent=C;let R=document.createElement("strong");return R.textContent=d.type==="tag"?`#${d.tag}`:d.name,k.append(V,R),g.append(k),g}));Q instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(Q.hidden=!1,Q.href=Kr(t.slug).toString(),Q.textContent=n.root.dataset.inspectRead??"Read note",Q.removeAttribute("target"),Q.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(Q.hidden=!1,Q.href=t.url,Q.textContent=n.root.dataset.inspectOpenExternal??"Open",Q.target="_blank",Q.rel="noopener noreferrer"):(Q.hidden=!0,Q.removeAttribute("href"),Q.removeAttribute("target"),Q.removeAttribute("rel"))),Ie.hidden=!1,n.root.dataset.inspecting="true",Ee(!1),Bt()},Ae=()=>{let t=A();if(B=null,Ie instanceof HTMLElement){let a=Ie.contains(document.activeElement);Ie.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}n.root.dataset.inspecting="false",K=null,ue(),ut(t)},Zn=t=>{let a=A();B=t.id,ue(),Xn(t),ut(a)},wt=(t,a=!1)=>{if(gt(),W(t.id)&&Ne(!0),Zn(t),a){H={x:t.x??0,y:t.y??0,z:t.z??0};let i=Ve()?0:450;n.use3d&&e.cameraPosition?(q=qe,e.cameraPosition({x:H.x+pe.x/T.zoom,y:H.y+pe.y/T.zoom,z:H.z+pe.z/T.zoom},H,i)):e.centerAt?.(H.x,H.y,i)}},tt=!1;e.onNodeClick((t,a)=>{t&&(tt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),wt(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ae(),Ee(!1)});let ce=n.root.querySelector("#graph-landing-mount");if(ce instanceof HTMLElement){let t=new ResizeObserver(()=>{e.width(ce.clientWidth),e.height(ce.clientHeight),B===null&&!mt&&pt()});t.observe(ce),window.addCleanup(()=>t.disconnect());let a=null,i=0,l=d=>{gt(),a={x:d.clientX,y:d.clientY},tt=!1,j=!0,ue()},m=(d,g)=>{if(typeof e.graph2ScreenCoords!="function")return null;let k=ce.getBoundingClientRect(),C=d-k.left,V=g-k.top,R=null,L=484;for(let F of oe().nodes){if(F.x===void 0||F.y===void 0)continue;let G=e.graph2ScreenCoords(F.x,F.y,F.z??0),ze=(G.x-C)**2+(G.y-V)**2;ze<L&&(L=ze,R=F)}return R},h=d=>{let g=a;a=null,j=!1,ue(),!(!g||(d.clientX-g.x)**2+(d.clientY-g.y)**2>25)&&(window.clearTimeout(i),i=window.setTimeout(()=>{if(tt){tt=!1;return}let C=m(d.clientX,d.clientY);C?wt(C):Ae()},0))},y=()=>{a=null,j=!1,ue()};ce.addEventListener("pointerdown",l,!0),ce.addEventListener("pointerup",h,!0),ce.addEventListener("pointercancel",y,!0),window.addCleanup(()=>{window.clearTimeout(i),ce.removeEventListener("pointerdown",l,!0),ce.removeEventListener("pointerup",h,!0),ce.removeEventListener("pointercancel",y,!0)})}An(n.root,"[data-graph-lens]",w.lens,"data-graph-lens"),dt(),Ot(),w.lens!=="all"&&Ne(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ut=()=>{o.current=Rn(),e.backgroundColor(Wt()),Ye(),Te(),ve(),dt()};document.addEventListener("themechange",Ut),window.addCleanup(()=>document.removeEventListener("themechange",Ut));let $t=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Ae();return}if(a.closest("[data-graph-rail-toggle]")){let g=n.root.dataset.railOpen!=="true";g&&Ae(),Ee(g);return}if(a.closest("[data-graph-rail-scrim]")){Ee(!1);return}let i=a.closest("[data-graph-inspect-id]");if(i instanceof HTMLElement&&i.dataset.graphInspectId){let g=n.fullData.nodes.find(k=>k.id===i.dataset.graphInspectId);g&&wt(g,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&Qr(l.dataset.graphLens)){Un(l.dataset.graphLens);return}let m=a.closest("[data-graph-tag]");if(m instanceof HTMLElement&&m.dataset.graphTag){$n(m.dataset.graphTag);return}let h=a.closest("[data-graph-folder]");if(h instanceof HTMLElement&&h.dataset.graphFolder){Yn(h.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){$();return}let y=a.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){w.allLabels=!w.allLabels,y.setAttribute("aria-pressed",w.allLabels?"true":"false");let g=y.dataset.labelShow??"Labels",k=y.dataset.labelHide??"Labels",C=w.allLabels?k:g;y.title=C,y.setAttribute("aria-label",C),ve();return}if(a.closest("[data-graph-theme]")){let g=O()?"light":"dark";document.documentElement.setAttribute("saved-theme",g),localStorage.setItem("theme",g),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${g}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:g}}));return}let d=a.closest("[data-graph-tags-toggle]");if(d instanceof HTMLButtonElement){let g=n.root.querySelector(".graph-landing__tags");if(g instanceof HTMLElement){let k=g.dataset.open==="true";g.dataset.open=k?"false":"true",d.setAttribute("aria-expanded",k?"false":"true")}}},_e=n.root.querySelector("[data-graph-node-scale]"),Pe=n.root.querySelector("[data-graph-edge-scale]");if(_e instanceof HTMLInputElement){_e.value=String(Math.round(T.nodeScale*100));let t=()=>{T.nodeScale=Number(_e.value)/100,We(T),se(),$(),Te(),n.use3d&&ve()};_e.addEventListener("input",t),window.addCleanup(()=>_e.removeEventListener("input",t))}if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(T.edgeScale*100));let t=()=>{T.edgeScale=Number(Pe.value)/100,We(T),Te()};Pe.addEventListener("input",t),window.addCleanup(()=>Pe.removeEventListener("input",t))}let Ge=n.root.querySelector("[data-graph-hub-gravity]");if(Ge instanceof HTMLInputElement){Ge.value=String(Math.round(T.hubGravity*100));let t=()=>{let a=Number(Ge.value)/100;T.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,We(T),se(),$()};Ge.addEventListener("input",t),window.addCleanup(()=>Ge.removeEventListener("input",t))}let He=n.root.querySelector("[data-graph-zoom]");if(He instanceof HTMLInputElement){He.value=String(Math.round(T.zoom*100));let t=()=>{T.zoom=Number(He.value)/100,We(T),ge(200)};He.addEventListener("input",t),window.addCleanup(()=>He.removeEventListener("input",t))}let De=n.root.querySelector("[data-graph-spread]");if(De instanceof HTMLInputElement){De.value=String(Math.round(T.spread*100));let t=()=>{T.spread=Number(De.value)/100,We(T),se(),$()};De.addEventListener("input",t),window.addCleanup(()=>De.removeEventListener("input",t))}Ee(!1),n.root.addEventListener("click",$t),window.addCleanup(()=>n.root.removeEventListener("click",$t));let Yt=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){Ee(!1);return}Ae()}};window.addEventListener("keydown",Yt),window.addCleanup(()=>window.removeEventListener("keydown",Yt))}function ao(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function io(){try{return window.localStorage.getItem(Gt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function _t(e){try{if(e){window.localStorage.setItem(Gt,"stopped");return}window.localStorage.removeItem(Gt)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function so(e){let r=performance.now(),o=0,n=s=>{let c=Math.min(1,(s-r)/e.durationMs),p=c*c;e.apply(e.from+(e.to-e.from)*p),c<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function co(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let n=window,s=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof s=="function"&&s();let c=n.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=pr,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function lo(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function uo(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),s=e.querySelector("[data-graph-music-library]"),c=e.querySelector("[data-graph-music-track-list]"),p=e.querySelector("[data-graph-music-status]"),x=e.querySelector("[data-graph-music-dock]"),E=e.querySelector("[data-graph-music-now]"),z=e.querySelector("[data-graph-music-now-title]"),W=e.querySelector("[data-graph-music-now-artist]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(s instanceof HTMLElement)||!(c instanceof HTMLElement)||!(p instanceof HTMLElement))return;let w=e.dataset.audioStop??"Stop music",K=e.dataset.audioPlay??"Play music",B=e.dataset.musicLibraryOpen??"Open record collection",T=e.dataset.musicLibraryClose??"Close record collection",j=e.dataset.musicCurrentTrack??"Current track",H=[];try{let f=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(f))for(let S of f){if(!S||typeof S!="object")continue;let I=S;typeof I.title!="string"||typeof I.url!="string"||I.artist!==void 0&&typeof I.artist!="string"||H.push({title:I.title,...typeof I.artist=="string"?{artist:I.artist}:{},url:I.url})}}catch{}let q=tn(H);q.length===0&&q.push({title:"Ambient track",videoId:un});let ee=0,M=null,$=!1,A=null,U=!io(),X=!1,Z=!1,te=()=>q[ee]??q[0]??{title:"Ambient track",videoId:un},Y=f=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${f}/hqdefault.jpg")`)},J=()=>te().videoId,u=()=>{c.replaceChildren(),q.forEach((f,S)=>{let I=document.createElement("button");I.type="button",I.className="graph-landing__music-track",I.dataset.graphMusicTrackIndex=String(S),I.setAttribute("aria-current",S===ee?"true":"false");let re=document.createElement("img");re.className="graph-landing__music-track-cover",re.src=`https://i.ytimg.com/vi/${f.videoId}/hqdefault.jpg`,re.alt="",re.loading="lazy";let fe=document.createElement("span");fe.className="graph-landing__music-track-copy";let we=document.createElement("span");if(we.className="graph-landing__music-track-title",we.textContent=f.title,fe.appendChild(we),f.artist){let ke=document.createElement("span");ke.className="graph-landing__music-track-artist",ke.textContent=f.artist,fe.appendChild(ke)}I.append(re,fe),c.appendChild(I)}),p.textContent=`${j}: ${te().title}`,v()},b=f=>{e.dataset.musicLibraryOpen=f?"true":"false",s.hidden=!f,s.setAttribute("aria-hidden",f?"false":"true"),n.setAttribute("aria-expanded",f?"true":"false"),n.setAttribute("aria-label",f?T:B),n.title=f?T:B},v=()=>{let f=r.dataset.playing==="true";x&&(x.dataset.playing=f?"true":"false"),E&&(E.hidden=!f);let S=te();z&&(z.textContent=S.title),W&&(W.textContent=S.artist??"",W.hidden=!S.artist)},_=f=>{r.setAttribute("aria-pressed",f?"true":"false"),r.setAttribute("aria-label",f?w:K),r.title=f?w:K,r.dataset.playing=f?"true":"false",v()},P=()=>{A&&(A(),A=null)},N=f=>{M&&M.setVolume(Math.max(0,Math.min(Oe,f)))},ne=f=>{!U||X||(X=!0,_(!0),f.unMute(),N(0),f.playVideo(),P(),A=so({from:0,to:Oe,durationMs:mr,apply:N}))},Me=()=>{U=!1,X=!1,P(),_t(!0),M&&(M.mute(),M.pauseVideo(),N(0)),_(!1)},oe=async()=>{if(!M)try{let f=await co();if(M)return;M=lo({api:f,host:o,videoId:J(),onReady:S=>{$=!0,S.mute(),N(0),S.playVideo(),U&&Z&&ne(S)},onEnded:S=>{if(!U)return;ee=(ee+1)%q.length;let I=J();Y(I),u(),S.loadVideoById(I),N(X?Oe:0)}})}catch(f){console.error("[graph-landing] ambient audio unavailable",f)}},ae=f=>{let S=f.target;if(!(S instanceof Element&&S.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!U||X||ao())){if(Z=!0,$&&M){ne(M);return}oe()}},ie=()=>{if(U&&X){Me();return}if(Z=!0,U=!0,_t(!1),$&&M){ne(M);return}oe()},de=f=>{if(!(!Number.isInteger(f)||f<0||f>=q.length)){if(ee=f,Y(J()),u(),b(!1),U=!0,Z=!0,_t(!1),$&&M){M.loadVideoById(J()),X?(M.unMute(),M.playVideo(),N(Oe)):ne(M);return}oe()}},ge=()=>{let f=e.dataset.musicLibraryOpen!=="true";if(f){e.dataset.railOpen="false";let S=e.querySelector("[data-graph-rail-toggle]"),I=e.querySelector("#graph-landing-rail"),re=e.querySelector("[data-graph-rail-scrim]");S instanceof HTMLButtonElement&&S.setAttribute("aria-expanded","false"),I instanceof HTMLElement&&I.setAttribute("aria-hidden","true"),re instanceof HTMLElement&&(re.hidden=!0)}b(f)},se=f=>{let S=f.target;if(!(S instanceof Element))return;let I=S.closest("[data-graph-music-track-index]");I instanceof HTMLButtonElement&&de(Number(I.dataset.graphMusicTrackIndex))},he=f=>{if(e.dataset.musicLibraryOpen!=="true")return;let S=f.target;(!(S instanceof Element)||!S.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&b(!1)},be=f=>{f.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(b(!1),f.stopImmediatePropagation())},ye=()=>{if(M){if(document.hidden){P(),M.pauseVideo();return}U&&X&&(M.playVideo(),N(Oe))}};Y(J()),_(!1),u(),b(!1),oe(),r.addEventListener("click",ie),n.addEventListener("click",ge),c.addEventListener("click",se),e.addEventListener("click",he),e.addEventListener("pointerdown",ae,!0),e.addEventListener("touchstart",ae,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",ye),window.addEventListener("keydown",be),window.addCleanup(()=>{r.removeEventListener("click",ie),n.removeEventListener("click",ge),c.removeEventListener("click",se),e.removeEventListener("click",he),e.removeEventListener("pointerdown",ae,!0),e.removeEventListener("touchstart",ae,!0),document.removeEventListener("visibilitychange",ye),window.removeEventListener("keydown",be),P(),M&&(M.pauseVideo(),M.destroy(),M=null)})}async function fo(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(r instanceof HTMLElement&&o instanceof HTMLElement){let f=r.parentElement,S=r.nextSibling;o.insertBefore(r,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{f?.isConnected&&r.isConnected&&f.insertBefore(r,S?.parentNode===f?S:null)})}uo(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let s=e.querySelectorAll("[data-graph-counts]"),c=e.dataset.locale??e.dataset.graphDefaultLocale??"en",p=e.dataset.sourceLocale??c,x=(e.dataset.localePrefixes??"").split(",").map(f=>f.trim()).filter(f=>f.length>0),E=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",z=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",W=e.dataset.graphIndexPath??"",w=me(e.dataset.maxRenderedNodes,f=>Number.parseInt(f,10)),K=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,B=Number.isFinite(K)?K:1,T=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,j=e.dataset.graphRenderMode==="3d"?"3d":"auto",H=e.dataset.graphLayoutFreezeAfterWarmup==="true",q=me(e.dataset.graphLayoutWarmupTicks,f=>Number.parseInt(f,10)),ee=me(e.dataset.graphLayoutCooldownTicks,f=>Number.parseInt(f,10)),M=me(e.dataset.graphLayoutChargeTheta,Number.parseFloat),$=e.dataset.graphLayoutIncrementalWarmup==="true",A=me(e.dataset.graphLodLabelDistance,Number.parseFloat),U=me(e.dataset.graphLodCullDistance,Number.parseFloat),X=e.dataset.graphLodFog==="true",Z=me(e.dataset.graphLodLinkResolution,f=>Number.parseInt(f,10)),te=e.dataset.graphInteractionIncrementalRepaint==="true",Y=e.dataset.graphLodShareLinkResources==="true",J=!1,u=null,b={current:Rn()},v=()=>{J=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(v);let _=qr();if(j==="3d"&&!_){It(n,"3D graph unavailable: WebGL is required.");return}let P=j==="3d"||_,N=Xr(P),ne=P?import(sr).then(f=>f.default??null).catch(f=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",f),null)):Promise.resolve(null),Me=P?import(cr).catch(f=>(console.error("[graph-landing] three unavailable; using default node rendering",f),null)):Promise.resolve(null),oe=P?import(ir).then(f=>f.forceCollide??null).catch(f=>(console.error("[graph-landing] d3-force-3d collision force unavailable",f),null)):Promise.resolve(null);N.catch(()=>{});let ae;try{ae=ct(z==="graphIndex"?await fetch(W).then(f=>f.json()):await fetchData)}catch(f){throw It(n,"Graph could not load its index."),f}if(J)return;let ie=Wr(Cr(ae),{localeId:c,sourceLocale:p,prefixes:x},T),de=rn(ie,w),ge=E.replace("{n}",String(ie.nodes.length)).replace("{m}",String(ie.links.length));for(let f of s)f.textContent=ge;let se;try{se=await N}catch(f){throw It(n,"Graph could not load. Check your network connection."),f}let[he,be,ye]=await Promise.all([ne,Me,oe]);J||(n.replaceChildren(),u=se(n),u.width(n.clientWidth),u.height(n.clientHeight),n.__graphLanding=u,n.__graphData=de,oo(u,de,b,{use3d:P,root:e,spriteText:he,three:be,forceCollide:ye,fullData:ie,expandHops:B,layout:{freezeAfterWarmup:H,warmupTicks:q,cooldownTicks:ee,chargeTheta:M,incrementalWarmup:$},lod:{labelDistance:A,cullDistance:U,fog:X,linkResolution:Z,shareLinkResources:Y},interaction:{incrementalRepaint:te}}))}var go="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(go,n)}catch(s){console.error("[graph-landing] failed to persist preferred-locale",s)}});document.addEventListener("nav",()=>{fo()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: var(--light);\n  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);\n  --graph-surface-strong: var(--light);\n  --graph-border: var(--lightgray);\n  --graph-text: var(--darkgray);\n  --graph-muted: var(--gray);\n  --graph-accent: var(--secondary);\n  --graph-accent-soft: var(--highlight);\n  --graph-external: var(--tertiary);\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.page:has(.graph-landing) .search {\n  position: static;\n  flex: 0 0 44px;\n  width: auto;\n}\n\n.graph-landing__chrome:has(.search-container.active) {\n  z-index: 30;\n}\n\n.page:has(.graph-landing) .search > .search-button {\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.page:has(.graph-landing) .search > .search-button p {\n  display: none;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__music-now {\n  background: linear-gradient(90deg, var(--graph-surface), color-mix(in srgb, var(--graph-surface) 92%, transparent));\n  border: 1px solid var(--graph-border);\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: block;\n  flex: 0 1 auto;\n  max-width: 180px;\n  min-width: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 5px 10px 5px 12px;\n  position: relative;\n  transform: translateX(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease, width 0.25s ease;\n  white-space: nowrap;\n  width: 0;\n}\n\n.graph-landing__music-now::before {\n  background: repeating-radial-gradient(circle at left center, color-mix(in srgb, var(--graph-text) 10%, transparent) 0 1px, transparent 1px 3px);\n  content: "";\n  inset: 0;\n  mask-image: linear-gradient(90deg, #000, transparent 56px);\n  pointer-events: none;\n  position: absolute;\n  -webkit-mask-image: linear-gradient(90deg, #000, transparent 56px);\n}\n\n.graph-landing__music-now[hidden] {\n  display: none;\n}\n\n.graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n  opacity: 1;\n  transform: translateX(0);\n  width: 180px;\n}\n\n.graph-landing__music-now-title,\n.graph-landing__music-now-artist {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-now-title {\n  color: var(--graph-text);\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n\n.graph-landing__music-now-artist {\n  color: var(--graph-muted);\n  font-size: 10px;\n  line-height: 1.3;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--graph-text);\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 1.5rem;\n  left: auto;\n  margin: 0;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  right: 1.5rem;\n  transform: translateY(6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(400px, 100% - 3rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.graph-landing__hint {\n  animation: graph-landing-hint-in 0.5s ease both;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  bottom: 78px;\n  color: var(--graph-muted);\n  font-size: 12px;\n  left: 50%;\n  letter-spacing: 0.01em;\n  line-height: 1.4;\n  margin: 0;\n  max-width: calc(100% - 2rem);\n  padding: 0.45rem 0.95rem;\n  pointer-events: none;\n  position: absolute;\n  text-align: center;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 3;\n}\n\n.graph-landing__hint[hidden] {\n  display: none;\n}\n\n@keyframes graph-landing-hint-in {\n  from {\n    opacity: 0;\n    transform: translate(-50%, 6px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  :root:not([saved-theme=dark]) .graph-landing__hero::before {\n    background-position: 60% center;\n  }\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__hint {\n    white-space: normal;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  --graph-backdrop: #090b12;\n  --graph-surface: color-mix(in srgb, #11141c 92%, transparent);\n  --graph-surface-strong: #11141c;\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__hint {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-now {\n    max-width: 120px;\n  }\n  .graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n    width: min(120px, max(0px, 100vw - 180px));\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';

// src/locale.ts
function resolveLocale(input) {
  const ids = input.locales.map((locale) => locale.id);
  const head = input.slug.split("/")[0] ?? "";
  const slugLocale = ids.includes(head) ? head : void 0;
  const siteLanguage = input.siteLocale?.split("-")[0];
  const localeId = input.frontmatterLocale ?? slugLocale ?? input.defaultLocale ?? siteLanguage ?? "en";
  const sourceLocale = input.sourceLocale ?? input.defaultLocale ?? localeId;
  return {
    localeId,
    sourceLocale,
    prefixed: slugLocale !== void 0 || Boolean(input.frontmatterLocale && ids.length > 0)
  };
}
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
      musicLibraryOpen: "\uB808\uCF54\uB4DC \uCEEC\uB809\uC158 \uC5F4\uAE30",
      musicLibraryClose: "\uB808\uCF54\uB4DC \uCEEC\uB809\uC158 \uB2EB\uAE30",
      musicLibraryTitle: "\uB808\uCF54\uB4DC",
      musicCurrentTrack: "\uD604\uC7AC \uD2B8\uB799",
      folderRoot: "\uB8E8\uD2B8",
      previewHint: "\uD074\uB9AD\uD558\uBA74 \uC5F0\uACB0\uC774 \uC5F4\uB9BD\uB2C8\uB2E4",
      hint: "\uB04C\uC5B4\uC11C \uB3CC\uB9AC\uACE0, \uD655\uB300\uD574\uC11C \uB4E4\uC5EC\uB2E4\uBCF4\uACE0, \uC810\uC744 \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4",
      previewTagTemplate: "{n}\uAC1C \uB178\uD2B8",
      inspectOpen: "\uBCF8\uBB38 \uC77D\uAE30",
      inspectOpenExternal: "\uC5F4\uAE30",
      inspectConnected: "\uC5F0\uACB0",
      inspectClose: "\uB2EB\uAE30",
      inspectEmpty: "\uC9C1\uC811 \uC5F0\uACB0\uB41C \uBCC4\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
      folders: "\uD3F4\uB354",
      tune: "Tune",
      nodeSize: "Node size",
      edgeWidth: "Edge width",
      hubGravity: "\uD5C8\uBE0C \uC778\uB825"
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
    musicLibraryOpen: "Open record collection",
    musicLibraryClose: "Close record collection",
    musicLibraryTitle: "Records",
    musicCurrentTrack: "Current track",
    folderRoot: "Root",
    previewHint: "Click to inspect connections",
    hint: "Drag to orbit, zoom to look closer, tap a dot to open",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectOpenExternal: "Open",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    folders: "Folders",
    tune: "Tune",
    nodeSize: "Node size",
    edgeWidth: "Edge width",
    hubGravity: "Hub gravity"
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
function findLocaleSlug(allFiles, translationKey, localeId, prefixed) {
  const plainSlug = prefixed ? `${localeId}/${translationKey}` : translationKey;
  const match = allFiles.find((file) => {
    if (typeof file.slug !== "string" || file.slug === "index") {
      return false;
    }
    const multilingual = file.multilingual;
    if (multilingual?.translationKey) {
      return multilingual.translationKey === translationKey && multilingual.locale === localeId;
    }
    return file.slug === plainSlug || file.slug === `${plainSlug}/index`;
  });
  return typeof match?.slug === "string" ? match.slug : null;
}
function localeToggleLink(allFiles, locales, currentLocale, translationKey) {
  const other = locales.find((locale) => locale.id !== currentLocale);
  if (!other) {
    return null;
  }
  const slug = findLocaleSlug(allFiles, translationKey, other.id, true) ?? findLocaleSlug(allFiles, "home", other.id, true);
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
  const root = slug.split("/").filter(Boolean).slice(0, -1).map(() => "..").join("/");
  return root || ".";
}
var GraphLanding_default = ((pageOptions) => {
  const options = pageOptions ?? {};
  const GraphLandingConstructor = () => {
    const GraphLanding = ({ fileData, cfg, allFiles }) => {
      const multilingual = fileData.multilingual;
      const slug = typeof fileData.slug === "string" ? fileData.slug : "";
      const multilingualCfg = cfg.multilingual;
      const locales = multilingualCfg?.locales ?? [];
      const { localeId, sourceLocale, prefixed } = resolveLocale({
        frontmatterLocale: multilingual?.locale,
        slug,
        locales,
        sourceLocale: multilingualCfg?.sourceLocale,
        defaultLocale: options.defaultLocale,
        siteLocale: cfg.locale
      });
      const localePrefixes = locales.map((locale) => locale.id).join(",");
      const copy = overlayCopyForLocale(localeId);
      const translationKey = multilingual?.translationKey ?? "graph";
      const localeToggle = locales.length > 1 ? localeToggleLink(allFiles, locales, localeId, translationKey) : null;
      const homeSlug = findLocaleSlug(allFiles, "home", localeId, prefixed);
      const writingSlug = findLocaleSlug(allFiles, "writing", localeId, prefixed);
      const aboutSlug = findLocaleSlug(allFiles, "about", localeId, prefixed);
      const homeHref = homeSlug ? slugToAbsHref(homeSlug) : prefixed ? `/${localeId}/` : "/";
      const aboutHref = aboutSlug ? slugToAbsHref(aboutSlug) : null;
      const writingHref = writingSlug ? slugToAbsHref(writingSlug) : null;
      const siteTitle = cfg.pageTitle ?? "Graph";
      const graphIndexPath = `${pathToRoot(slug)}/static/graphIndex.json`;
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
          "data-graph-layout-incremental-warmup": options.layout?.incrementalWarmup ? "true" : void 0,
          "data-graph-lod-label-distance": options.lod?.labelDistance,
          "data-graph-lod-cull-distance": options.lod?.cullDistance,
          "data-graph-lod-fog": options.lod?.fog ? "true" : void 0,
          "data-graph-lod-link-resolution": options.lod?.linkResolution,
          "data-graph-lod-share-link-resources": options.lod?.shareLinkResources ? "true" : void 0,
          "data-graph-interaction-incremental-repaint": options.interaction?.incrementalRepaint ? "true" : void 0,
          "data-graph-music-tracks": JSON.stringify(options.music?.tracks ?? []),
          "data-graph-default-locale": options.defaultLocale,
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
          "data-music-library-open": copy.musicLibraryOpen,
          "data-music-library-close": copy.musicLibraryClose,
          "data-music-library-title": copy.musicLibraryTitle,
          "data-music-current-track": copy.musicCurrentTrack,
          "data-inspect-connected": copy.inspectConnected,
          "data-inspect-empty": copy.inspectEmpty,
          children: [
            /* @__PURE__ */ u2("link", { rel: "preconnect", href: "https://esm.sh", crossOrigin: "anonymous" }),
            /* @__PURE__ */ u2("link", { rel: "dns-prefetch", href: "https://esm.sh" }),
            /* @__PURE__ */ u2("section", { class: "graph-landing__hero", "aria-label": "Knowledge graph", children: [
              /* @__PURE__ */ u2("div", { class: "graph-landing__canvas", id: "graph-landing-mount" }),
              /* @__PURE__ */ u2("div", { class: "graph-landing__overlay", children: [
                /* @__PURE__ */ u2("div", { class: "graph-landing__chrome", children: [
                  /* @__PURE__ */ u2("div", { class: "graph-landing__title-block graph-landing__title-block--chrome", children: /* @__PURE__ */ u2("a", { class: "graph-landing__title", href: homeHref, children: siteTitle }) }),
                  /* @__PURE__ */ u2("nav", { class: "graph-landing__top-right", "aria-label": "Site", children: [
                    writingHref ? /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: writingHref, children: copy.articles }) : null,
                    aboutHref ? /* @__PURE__ */ u2("a", { class: "graph-landing__nav-link", href: aboutHref, children: copy.about }) : null,
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
                /* @__PURE__ */ u2("div", { class: "graph-landing__music-dock", "data-graph-music-dock": true, children: [
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__audio-toggle",
                      "data-graph-audio-toggle": true,
                      "data-playing": "false",
                      "aria-pressed": "false",
                      "aria-label": copy.audioPlay,
                      title: copy.audioPlay,
                      children: /* @__PURE__ */ u2("span", { class: "graph-landing__turntable", "aria-hidden": "true", children: /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-plinth", children: [
                        /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-record", children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-label" }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-spindle" })
                        ] }),
                        /* @__PURE__ */ u2(
                          "svg",
                          {
                            class: "graph-landing__turntable-tonearm",
                            viewBox: "0 0 32 32",
                            focusable: "false",
                            children: [
                              /* @__PURE__ */ u2("circle", { cx: "25", cy: "7", r: "2.5" }),
                              /* @__PURE__ */ u2("path", { d: "M24.2 8.8 17.6 19.6 12.5 22.2" }),
                              /* @__PURE__ */ u2("path", { d: "m10.3 21.6 3.9 1.8-1.4 2.7-3.9-1.8Z" })
                            ]
                          }
                        )
                      ] }) })
                    }
                  ),
                  /* @__PURE__ */ u2(
                    "span",
                    {
                      class: "graph-landing__music-now",
                      "data-graph-music-now": true,
                      hidden: true,
                      "aria-live": "polite",
                      children: [
                        /* @__PURE__ */ u2("span", { class: "graph-landing__music-now-title", "data-graph-music-now-title": true }),
                        /* @__PURE__ */ u2("span", { class: "graph-landing__music-now-artist", "data-graph-music-now-artist": true })
                      ]
                    }
                  ),
                  /* @__PURE__ */ u2(
                    "button",
                    {
                      type: "button",
                      class: "graph-landing__music-library-toggle",
                      "data-graph-music-library-toggle": true,
                      "aria-controls": "graph-landing-music-library",
                      "aria-expanded": "false",
                      "aria-label": copy.musicLibraryOpen,
                      title: copy.musicLibraryOpen,
                      children: /* @__PURE__ */ u2(
                        "svg",
                        {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ u2(
                            "path",
                            {
                              d: "M5 5.5h14v13H5zM8 9h8M8 12h8M8 15h5",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-width": "1.7"
                            }
                          )
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ u2(
                  "section",
                  {
                    class: "graph-landing__music-library",
                    id: "graph-landing-music-library",
                    "data-graph-music-library": true,
                    "aria-label": copy.musicLibraryTitle,
                    "aria-hidden": "true",
                    hidden: true,
                    children: [
                      /* @__PURE__ */ u2("div", { class: "graph-landing__music-library-heading", children: [
                        /* @__PURE__ */ u2("span", { children: copy.musicLibraryTitle }),
                        /* @__PURE__ */ u2("span", { "data-graph-music-status": true, "aria-live": "polite" })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__music-track-list", "data-graph-music-track-list": true })
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
                        /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: siteTitle }),
                        /* @__PURE__ */ u2("p", { class: "graph-landing__counts", "data-graph-counts": true, children: copy.countsTemplate.replace("{n}", "\u2013").replace("{m}", "\u2013") })
                      ] }),
                      /* @__PURE__ */ u2("div", { class: "graph-landing__lenses", role: "group", "aria-label": "Graph lens", children: [
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
                                value: "100",
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
                            /* @__PURE__ */ u2("span", { children: copy.hubGravity }),
                            /* @__PURE__ */ u2(
                              "input",
                              {
                                type: "range",
                                min: "0",
                                max: "200",
                                value: "150",
                                "data-graph-hub-gravity": true,
                                "aria-label": copy.hubGravity
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
                /* @__PURE__ */ u2("p", { class: "graph-landing__hint", "data-graph-hint": true, hidden: true, children: copy.hint }),
                /* @__PURE__ */ u2(
                  "aside",
                  {
                    class: "graph-landing__inspect",
                    "data-graph-inspect": true,
                    "aria-labelledby": "graph-inspect-title",
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
                      /* @__PURE__ */ u2(
                        "h2",
                        {
                          class: "graph-landing__inspect-title",
                          id: "graph-inspect-title",
                          "data-graph-inspect-title": true
                        }
                      ),
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
var graphPageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  if (frontmatter?.graphLanding === true) {
    return true;
  }
  const translationKey = frontmatter?.translationKey;
  if (translationKey === "graph" || translationKey === "home") {
    return true;
  }
  const slug = typeof fileData.slug === "string" ? fileData.slug : "";
  return slug === "graph" || slug.endsWith("/graph");
};
var GraphLandingPage = (userOpts) => {
  const options = userOpts ?? {};
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