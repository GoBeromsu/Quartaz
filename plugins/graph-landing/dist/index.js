// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Xt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function ot(e,r,o){let n=Number.isFinite(e)?Math.max(0,e):0,s=Number.isFinite(r)?Math.max(0,r):0,u=Number.isFinite(o)?Math.max(s,o):s;if(u===s)return s>0?.5:0;let p=Math.min(u,Math.max(s,n));return(Math.sqrt(p)-Math.sqrt(s))/(Math.sqrt(u)-Math.sqrt(s))}function Zt(e,r,o){return ot(Math.max(e,r),0,o)}function Fe(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function Jt(e){return 1+Fe(e,0,1)*1.2}function Qt(e,r){let o=Fe(e,0,1),n=Fe(r,0,2);return Math.max(.5,1-o*.24*n)}function en(e,r){let o=Fe(e,0,1),n=Fe(r,0,2);return Math.min(1.6,1+o*.3*n)}var qn=/^[A-Za-z0-9_-]{6,20}$/,$n=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Yn=new Set(["youtu.be","www.youtu.be"]);function rt(e){return e&&qn.test(e)?e:void 0}function Kn(e){if(!e)return;let r=e.trim(),o=rt(r);if(o)return o;let n;try{n=new URL(r)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if($n.has(n.hostname)){if(n.pathname==="/watch")return rt(n.searchParams.get("v"));let s=n.pathname.split("/").filter(Boolean);if(s.length===2&&(s[0]==="shorts"||s[0]==="embed"))return rt(s[1])}if(Yn.has(n.hostname)){let s=n.pathname.split("/").filter(Boolean);if(s.length===1)return rt(s[0])}}}function tn(e){let r=[],o=new Set;for(let n of e){let s=n.title.trim(),u=Kn(n.url);if(!s||!u||o.has(u))continue;o.add(u);let p=n.artist?.trim();p?r.push({title:s,artist:p,videoId:u}):r.push({title:s,videoId:u})}return r}function R(e){return typeof e=="string"?e:e.id}function vt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function nn(e,r,o,n){return r||e&&vt(o,n)==="full"}function at(e,r,o){let n=e.get(r);if(n)return n;let s=o();return e.set(r,s),s}function we(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function rn(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let n=[...e.nodes].sort((p,x)=>x.degree!==p.degree?x.degree-p.degree:p.id<x.id?-1:p.id>x.id?1:0).slice(0,Math.max(0,r)),s=new Set(n.map(p=>p.id)),u=e.links.filter(p=>{let x=R(p.source),A=R(p.target);return s.has(x)&&s.has(A)});return{nodes:n,links:u}}function on(e,r,o,n){let s=new Set,u=Math.max(0,Math.floor(n));if(u<=0)return s;let p=new Set([o]),x=new Set([o]);for(let A=0;A<u;A+=1){let B=new Set;for(let K of x)for(let w of e.get(K)??[])p.has(w)||(p.add(w),B.add(w),r.has(w)||s.add(w));x=B}return s}var jn=2.399963229728653,kt=20;function an(e,r,o){let n=e.x??0,s=e.y??0,u=e.z??0,p=r*jn;return{x:n+kt*Math.cos(p),y:s+kt*Math.sin(p),z:o?u+kt*Math.sin(p*.5):u}}function sn(e,r,o,n){if(r===o)return new Set;if(r===null||o===null)return new Set(n);let s=new Set([r,o]);for(let u of e.get(r)??[])s.add(u);for(let u of e.get(o)??[])s.add(u);return s}var ct="0.179.1",Xn="https://esm.sh/force-graph@1.51.4",Zn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${ct}`,Jn="https://esm.sh/d3-force-3d@3.0.6",Qn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${ct}`,er=`https://esm.sh/three@${ct}`,tr=`https://esm.sh/three@${ct}/examples/jsm/postprocessing/UnrealBloomPass.js`,nr=8,rr=6;var Ve=1,Pt=4,or=.05,ar=2.6,ir=1,ln=1,ze=.18,Sn="graph-landing:lens",Mn="graph-landing:tune",_t="graph-landing:ambient-audio",cn="UDVtMYqUAyw",Oe=12,sr=28e3,lr="https://www.youtube.com/iframe_api",cr=.18,un=1.25,ur=1.25,dr=1.15,fr=.55,ve={x:330,y:235,z:565},dn={x:0,y:0,z:0},We=Math.hypot(ve.x,ve.y,ve.z),gr=300/We,mr=1600/We,fn=2.2,pr=6.4,hr=1.6,br=6.2,yr=2.1,wr="#c9dcff",kr="#ffe6bf",vr="#fff1d4",Tr="#f0c48a",Lr=.16,Er=2500,xr=12,gn=1400,Tt={min:1300,max:2800},Sr=.55,Mr=.16,Cr=1,Nr=6,Ar={wikilink:.65,tag:.45,external:.55,cooc:.08,folder:.08},Ir="#a8b0c2",mn={min:80,max:200},pn={min:40,max:110},hn={min:160,max:280},bn={min:90,max:170},yn=220,wn=2,Pr=.06,_r=.8,Gr=350,Lt={min:-170,max:-320},Et={min:96,max:156},xt={min:170,max:340};function Rr(e){return $e(e-.5,0,1)}function st(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function St(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Dr(e){let r=[];for(let o of Object.values(e)){let n=st(o);if(!Xt(n.filePath))continue;let s=typeof n.slug=="string"?n.slug:"";if(s.length===0)continue;let u=n.multilingual,p=u&&typeof u=="object"?u:void 0;r.push({slug:s,title:typeof n.title=="string"?n.title:s,links:St(n.links),tags:St(n.tags),externalLinks:St(n.externalLinks),content:typeof n.excerpt=="string"?n.excerpt:typeof n.content=="string"?n.content:"",multilingual:p})}return r}function Hr(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=yn?r:`${r.slice(0,yn).trimEnd()}\\u2026`}function qe(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function kn(e){return qe(e)/(2*Math.PI)}function it(e,r,o){let n=qe(e),s=Math.acos(2*kn(`${e}:phi`)-1),u=r+(o-r)*kn(`${e}:r`);return{x:u*Math.sin(s)*Math.cos(n),y:u*Math.sin(s)*Math.sin(n),z:u*Math.cos(s)}}function Cn(e){return e==="index"||e.endsWith("/index")}function Nn(e){return e==="tags"||e.startsWith("tags/")}function Fr(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function An(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Mt(e,r){return e.multilingual?.locale?e.multilingual.locale:An(e.slug,r).locale}function zr(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${An(e.slug,r).permalink}`}function Or(e,r){let o=e.find(n=>Mt(n,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(n=>Mt(n,r.prefixes)===r.sourceLocale)??e.find(n=>Mt(n,r.prefixes)===void 0)}function $e(e,r,o){return Math.min(o,Math.max(r,e))}function vn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Br(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Rt(e){return Br(e).trim().toLowerCase()}function Ur(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Vr(e){let r=e.trim();return r.length===0||Ur(r)||Nn(r)||Cn(r)?!0:Rt(r).length===0}function Wr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function In(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function qr(e,r){let o=In(e);return o===null?!1:!r.includes(new URL(o).hostname)}function Tn(e){return`external:${e}`}function $r(e,r){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),s=o.pathname;return(r.get(n)??0)>1&&s.length>1?`${n}${s}`:n}function Yr(e){let r=new Map,o=new Map;for(let n of e){let s=Rt(n.slug);s.length>0&&!r.has(s)&&r.set(s,n.slug);let u=n.title.trim().toLowerCase();u.length>0&&!o.has(u)&&o.set(u,n.slug);let p=u.replace(/\\s+/g,"-");p.length>0&&!o.has(p)&&o.set(p,n.slug)}return{byBasename:r,byTitle:o}}function Kr(e,r,o){if(r.has(e))return e;let n=Rt(e),s=o.byBasename.get(n);if(s)return s;let u=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return u||null}function jr(e,r){return e.length===0?"":[...e].sort((n,s)=>(r.get(s)??0)-(r.get(n)??0))[0]??""}function Xr(e,r,o=void 0){let n=e.filter(d=>!Cn(d.slug)&&!Nn(d.slug)&&!Fr(d)),s=new Map;for(let d of n){let h=zr(d,r.prefixes),v=s.get(h)??[];v.push(d),s.set(h,v)}let u=[];for(let d of s.values()){let h=Or(d,r);h&&u.push(h)}let p=new Set(u.map(d=>d.slug)),x=Yr(u),A=new Map,B=[],K=new Set,w=new Map,te=d=>{A.set(d,(A.get(d)??0)+1)},j=(d,h,v)=>d<h?`${d}|${h}|${v}`:`${h}|${d}|${v}`,S=(d,h,v,D)=>{let _=j(d,h,v);return K.has(_)?!1:(K.add(_),B.push({source:d,target:h,kind:v}),D&&(te(d),te(h)),!0)};for(let d of u)for(let h of d.links){if(Vr(h))continue;let v=Kr(h,p,x);v!==null&&v!==d.slug&&S(d.slug,v,"wikilink",!0)}let ne=Wr(),H=new Set;for(let d of u)for(let h of d.externalLinks){let v=In(h);v===null||!qr(v,ne)||(H.add(v),S(d.slug,Tn(v),"external",!0))}let W=new Map;for(let d of H){let h=new URL(d).hostname.replace(/^www\\./,"");W.set(h,(W.get(h)??0)+1)}let X=new Set,C=new Map;for(let d of u)for(let h of d.tags){w.set(h,(w.get(h)??0)+1);let v=`tag:${h}`;X.add(v),S(d.slug,v,"tag",!0);let D=C.get(h)??[];D.push(d.slug),C.set(h,D)}if(o!==!1){let d=o?.maxTagsPerNote,h=o?.maxEdges,v=0;e:for(let D of u)if(!(D.tags.length<2)&&!(d!==void 0&&D.tags.length>d))for(let _=0;_<D.tags.length;_+=1)for(let F=_+1;F<D.tags.length;F+=1){if(h!==void 0&&v>=h)break e;S(`tag:${D.tags[_]}`,`tag:${D.tags[F]}`,"cooc",!1)&&(v+=1)}}let Z=new Map;for(let d of u){let h=vn(d.slug);if(h==="root")continue;let v=Z.get(h)??[];v.push(d.slug),Z.set(h,v)}for(let d of Z.values()){if(d.length<2)continue;let h=[...d].sort();for(let v=0;v<h.length;v+=1){let D=h[(v+1)%h.length],_=h[(v+wn)%h.length],F=h[v];F===void 0||D===void 0||(F!==D&&!K.has(j(F,D,"wikilink"))&&S(F,D,"folder",!1),h.length>wn+1&&_!==void 0&&F!==_&&!K.has(j(F,_,"wikilink"))&&S(F,_,"folder",!1))}}let Q=[...A.values()],z=Q.length>0?Math.min(...Q):0,G=Q.length>0?Math.max(...Q):0,J=d=>{let h=ot(A.get(d)??0,z,G);return Ve+h*(Pt-Ve)},ie=[...u].sort((d,h)=>(A.get(h.slug)??0)-(A.get(d.slug)??0)),re=new Set(ie.filter(d=>(A.get(d.slug)??0)>0).slice(0,nr).map(d=>d.slug)),U=u.map(d=>{let h=re.has(d.slug),v=h?it(d.slug,pn.min,pn.max):it(d.slug,mn.min,mn.max);return{id:d.slug,name:d.title,type:"note",val:J(d.slug),degree:A.get(d.slug)??0,isHub:h,tag:"",slug:d.slug,url:"",folder:vn(d.slug),tags:d.tags,dominantTag:jr(d.tags,w),excerpt:Hr(d.content),phase:qe(d.slug),x:v.x,y:v.y,z:v.z}});for(let d of H){let h=Tn(d),v=it(h,hn.min,hn.max);U.push({id:h,name:$r(d,W),type:"external",val:J(h)*fr,degree:A.get(h)??0,isHub:!1,tag:"",slug:"",url:d,folder:"",tags:[],dominantTag:"",excerpt:d,phase:qe(h),x:v.x,y:v.y,z:v.z})}for(let d of X){let h=d.slice(4),v=it(d,bn.min,bn.max);U.push({id:d,name:h,type:"tag",val:$e(J(d)*.7,Ve,Pt),degree:A.get(d)??0,isHub:!1,tag:h,slug:`tags/${h}`,url:"",folder:"tag",tags:[h],dominantTag:h,excerpt:"",phase:qe(d),x:v.x,y:v.y,z:v.z})}return{nodes:U,links:B}}function Ct(e){let r=new Map,o=(n,s)=>{let u=r.get(n)??new Set;u.add(s),r.set(n,u)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let s=R(n.source),u=R(n.target);o(s,u),o(u,s)}return r}function Ce(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function Pn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Ce("--graph-backdrop","#ffffff"),ink:Ce("--graph-text","#0f0f0f"),accent:Ce("--graph-accent","#a52142"),tertiary:Ce("--graph-external","#c75b75"),gray:Ce("--graph-muted","#737373"),external:Ce("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Ne(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Jr(){return Zr()}function O(){return document.documentElement.getAttribute("saved-theme")==="dark"}function lt(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function Be(e,r){let o=lt(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function ke(e,r,o){let n=lt(e),s=lt(r);if(!n||!s)return e;let u=(p,x)=>Math.round(p+(x-p)*o);return`rgb(${u(n.r,s.r)}, ${u(n.g,s.g)}, ${u(n.b,s.b)})`}function Gt(e){return O()?ke(e.bg,"#000000",.82):e.bg}function Qr(e){let r=lt(e);if(!r)return e;let o=n=>{let s=n/255,u=s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);return Math.ceil(u*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}var eo="#e4ecf6";function to(e){return O()?Qr(Gt(e)):"rgba(0, 0, 0, 0)"}function _n(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function Ln(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:_n(e,[r.accent,r.tertiary,r.ink,r.gray])}function no(e,r){return e.length===0?r.ink:_n(e,[r.accent,r.tertiary])}function ro(e){let r=e.split("/").map(u=>encodeURIComponent(u)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let s=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(s,window.location.origin)}function oo(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function Nt(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function ao(e){let o=await import(e?Zn:Xn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):oo(o)}function io(){try{let e=sessionStorage.getItem(Sn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function so(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Mn);if(!r)return e;let o=st(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,s=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,u=typeof o.zoom=="number"?o.zoom:e.zoom,p=typeof o.spread=="number"?o.spread:e.spread,x=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:s,zoom:u,spread:p,hubGravity:x}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function Ue(e){try{sessionStorage.setItem(Mn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function At(e){try{sessionStorage.setItem(Sn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function lo(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function co(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function uo(e,r){return e.type==="note"&&e.folder===r}function En(e,r){let o=R(r),n=e.find(s=>s.id===o);return!n||n.type!=="note"?null:n.folder}function fo(e,r,o){let n=new Map;if(r==="folder"){let s=[...new Set(e.nodes.filter(u=>u.type==="note").map(u=>u.folder))];return s.forEach((u,p)=>{let x=Math.PI*2*p/Math.max(s.length,1),A={x:Math.cos(x)*o,y:Math.sin(x)*o,z:0};for(let B of e.nodes)B.type==="note"&&B.folder===u&&n.set(B.id,A)}),n}if(r==="tag"){let s=e.nodes.filter(p=>p.type==="tag"),u=new Map;s.forEach((p,x)=>{let A=Math.PI*2*x/Math.max(s.length,1);u.set(p.tag,{x:Math.cos(A)*o,y:Math.sin(A)*o,z:0})});for(let p of e.nodes)if(p.type==="tag"){let x=u.get(p.tag);x&&n.set(p.id,x)}else if(p.dominantTag.length>0){let x=u.get(p.dominantTag);x&&n.set(p.id,x)}}return n}function go(e,r){let o=[],n=s=>{let u=r*s;for(let p of o){let x=e(p);x&&(p.vx=(p.vx??0)+(x.x-(p.x??0))*u,p.vy=(p.vy??0)+(x.y-(p.y??0))*u,p.vz=(p.vz??0)+(x.z-(p.z??0))*u)}};return n.initialize=s=>{o=s},n}function xn(e,r,o,n){for(let s of e.querySelectorAll(r)){if(!(s instanceof HTMLElement))continue;let u=s.getAttribute(n);s.setAttribute("aria-pressed",u===o?"true":"false")}}function mo(e,r,o,n){let s=Ct(r.links),u=(t,a,i)=>t<a?`${t}|${a}|${i}`:`${a}|${t}|${i}`,p=new Map(n.fullData.nodes.map(t=>[t.id,t])),x=new Map,A=new Set,B=new Set;n.fullData!==r&&(x=Ct(n.fullData.links),A=new Set(r.nodes.map(t=>t.id)),B=new Set(r.links.map(t=>u(R(t.source),R(t.target),t.kind))));let K=t=>{if(n.fullData===r)return!1;let a=on(x,A,t,n.expandHops);if(!A.has(t)&&p.has(t)&&a.add(t),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let i=n.layout.incrementalWarmup?p.get(t):void 0,c=0;for(let g of a){let f=p.get(g);if(f){if(i&&f.id!==i.id){let L=an(i,c,n.use3d);f.x=L.x,f.y=L.y,f.z=L.z,f.vx=f.vy=f.vz=0,c+=1}r.nodes.push(f),A.add(g)}}for(let g of n.fullData.links){let f=R(g.source),L=R(g.target);if(!A.has(f)||!A.has(L))continue;let m=u(f,L,g.kind);B.has(m)||(B.add(m),r.links.push(g))}return s=Ct(r.links),!0},w={lens:io(),allLabels:!1,focusTag:null,focusFolder:null},te=null,j=null,S=so(),ne=!1,H=dn,W=We,X=0,C=()=>{},Z=t=>ot(t.degree,0,X),Q=t=>{let a=.1*Math.sin(t.phase*3.7);return t.type==="tag"?.7:t.type==="external"?.45+a:$e(.58+.42*Math.pow(Z(t),.6)+a,.48,1)},z=()=>{e.cooldownTicks(n.layout.freezeAfterWarmup?90:n.layout.cooldownTicks??200),e.d3ReheatSimulation()},G=()=>j??te,J=new Set(r.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,rr).map(t=>t.id)),ie=t=>{let a=t.val;return t.isHub&&(a*=un),w.lens==="tag"&&t.type==="tag"&&(a*=ur),w.focusTag&&t.id===`tag:${w.focusTag}`&&(a*=dr),a},re=t=>{let a=G();return a===t.id?!0:a!==null?s.get(a)?.has(t.id)??!1:w.allLabels||J.has(t.id)},U=t=>{let a=Pt*un,i=$e((ie(t)-Ve)/(a-Ve),0,1);return(fn+i*(pr-fn))*S.nodeScale},d=t=>{let a=G();if(a!==null)return a===t||(s.get(a)?.has(t)??!1);if(w.focusTag===null&&w.focusFolder===null)return!0;let i=r.nodes.find(c=>c.id===t);return i?w.focusFolder!==null?uo(i,w.focusFolder):w.focusTag!==null&&co(i,w.focusTag):!1},h=t=>t.type==="external"?o.current.external:w.lens==="tag"?t.type==="tag"?o.current.tertiary:no(t.dominantTag,o.current):w.lens==="folder"?t.type==="tag"?o.current.tertiary:Ln(t.folder,o.current):w.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,v=(t,a)=>t.type==="external"?Tr:t.type==="tag"?ke(o.current.tertiary,"#ffffff",.22):w.lens!=="all"?ke(a,"#ffffff",.3):t.isHub?vr:ke(wr,kr,Math.pow(Z(t),.7)),D=(t,a)=>{let i=p.get(t)?.degree??0,c=p.get(a)?.degree??0;return Math.log1p(Math.min(i,c))/Math.log1p(Math.max(1,X))},_=t=>{let a=G();if(a!==null&&(a===t.id||(s.get(a)?.has(t.id)??!1)))return o.current.accent;let i=h(t);return d(t.id)?O()?v(t,i):t.isHub?ke(o.current.ink,o.current.accent,.22):i:ke(i,Gt(o.current),1-ze)},F=t=>{let a=O();return t==="wikilink"?a?.52:.64:t==="external"?a?.42:.56:t==="tag"?a?.38:.5:0},ee=t=>{if(t.kind==="cooc"||t.kind==="folder")return t.kind==="cooc"&&w.lens==="tag"||t.kind==="folder"&&w.lens==="folder"?.06:0;let a=R(t.source),i=R(t.target),c=G();if(c!==null&&(a===c||i===c))return O()?.72:.78;let g=F(t.kind)*(.45+.55*D(a,i));return(c!==null||w.focusTag!==null||w.focusFolder!==null)&&(!d(a)||!d(i))?g*ze:g},ce=t=>{let a=R(t.source),i=R(t.target),c=G(),g=O()?Ir:o.current.ink;if(c!==null&&(a===c||i===c))return ke(o.current.accent,g,.45);if(O()){let f=p.get(a),L=p.get(i);if(f&&L)return ke(v(f,h(f)),v(L,h(L)),.5)}return g},ge=t=>Be(ce(t),ee(t)),se=()=>({nodes:r.nodes,links:r.links}),me=t=>{let a=O()?"rgba(255, 255, 255, 1)":Be(o.current.ink,.88);return d(t.id)?a:Be(a,ze)},ue=t=>O()?d(t.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",de=()=>{let t=e.controls?.().target;if(t&&(H={x:t.x,y:t.y,z:t.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let i={x:a.x-H.x,y:a.y-H.y,z:a.z-H.z},c=Math.hypot(i.x,i.y,i.z);if(c>1)return{dir:i,len:c}}}return{dir:ve,len:We}},pe=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=W/$e(S.zoom,.4,2.5),{dir:i,len:c}=de(),g=a/c;e.cameraPosition({x:H.x+i.x*g,y:H.y+i.y*g,z:H.z+i.z*g},H,Ne()?0:t),Ye();return}typeof e.zoom=="function"&&e.zoom(S.zoom,Ne()?0:t)},oe=()=>{let t=Rr(S.spread),a=Lt.min+t*(Lt.max-Lt.min),i=Et.min+t*(Et.max-Et.min),c=new Map(r.nodes.map(E=>[E.id,E.degree])),g=Math.max(0,...c.values());X=g;let f=Z,L=E=>Zt(c.get(R(E.source))??0,c.get(R(E.target))??0,g),m=e.d3Force("charge");m?.strength&&m.strength(E=>a*Jt(f(E))),m?.theta&&n.layout.chargeTheta!==void 0&&m.theta(n.layout.chargeTheta);let l=e.d3Force("link");l?.distance&&l.distance(E=>{let P=Qt(L(E),S.hubGravity);return w.lens==="tag"&&E.kind==="tag"?i*.72*P:E.kind==="cooc"||E.kind==="folder"?i:i*P}),l?.strength&&l.strength(E=>{if(E.kind==="cooc"||E.kind==="folder")return .015;let P=en(L(E),S.hubGravity);if(w.lens==="tag"&&E.kind==="tag")return .3*P;if(w.lens==="folder"){let V=En(r.nodes,E.source),q=En(r.nodes,E.target);if(V!==null&&V===q)return .16*P}return E.kind==="tag"?.14*P:(E.kind==="external"?.16:.24)*P}),n.forceCollide&&e.d3Force("collision",n.forceCollide(E=>U(E)+Nr).strength(.85).iterations(1));let b=e.d3Force("center");b?.strength&&b.strength(or);let T=xt.min+t*(xt.max-xt.min),I=fo(r,w.lens,T),M=w.lens==="folder"||w.lens==="tag"?.08:0;e.d3Force("cluster",go(E=>I.get(E.id)??null,M)),n.use3d&&e.d3Force("flattenZ",null)},fe=new Map,Le=new Map,k=(t,a)=>at(Le,a?"dark":"light",()=>{let c=document.createElement("canvas");c.width=c.height=64;let g=c.getContext("2d");if(g){let f=g.createRadialGradient(32,32,0,32,32,32);a?(f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.22,"rgba(255,255,255,0.96)"),f.addColorStop(.36,"rgba(255,255,255,0.42)"),f.addColorStop(.62,"rgba(255,255,255,0.1)"),f.addColorStop(1,"rgba(255,255,255,0)")):(f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.86,"rgba(255,255,255,1)"),f.addColorStop(1,"rgba(255,255,255,0)")),g.fillStyle=f,g.fillRect(0,0,64,64)}return new t.CanvasTexture(c)}),N=(t,a)=>{t.color.set(a),O()&&t.color.multiplyScalar(hr)},y=new Map,$=new Map,he=new Map,be=new Map,ye=new Map,Dt=new Map,Ht=new Map,Gn=(t,a,i)=>{let c=`${a}|${i}`;return at(Dt,c,()=>new t.CylinderGeometry(a,a,1,i))},Ft=(t,a,i)=>{let c=`${a}|${i}`;return at(Ht,c,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:i,depthWrite:!1,blending:O()?t.AdditiveBlending:t.NormalBlending}))},Ee=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,a=n.three,i=n.interaction.incrementalRepaint;if(fe.clear(),y.clear(),he.clear(),be.clear(),i)for(let c of r.nodes)be.set(c.id,c);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(c=>{let g=U(c),f=_(c),L=!1;if(a){let M=O(),E=M?Q(c):1,P=new a.SpriteMaterial({map:k(a,M),color:"#ffffff",transparent:!0,depthWrite:!1,blending:M?a.AdditiveBlending:a.NormalBlending,opacity:E});N(P,f),M&&fe.set(c.id,{material:P,base:E,phase:c.phase}),i&&he.set(c.id,P);let V=new a.Sprite(P),q=g*(M?br:yr);V.scale.x=q,V.scale.y=q,V.scale.z=1,L=V}let m=re(c);if(!t||!i&&!m)return L;let l=Array.from(c.name),b=window.innerWidth<700?24:48,T=new t(l.length>b?`${l.slice(0,b).join("")}\\u2026`:c.name);if(T.color=me(c),T.backgroundColor=!1,T.fontWeight="400",T.strokeWidth=O()?.35:0,T.strokeColor=ue(c),T.material.transparent=!0,T.material.depthWrite=!1,T.material.alphaTest=.01,T.material.toneMapped=!1,T.textHeight=J.has(c.id)?6.5:5.5,T.center.set(0,.5),T.position.x=g+2,T.position.y=0,i?(T.visible=m,y.set(c.id,{sprite:T,node:c})):n.lod.labelDistance!==void 0&&y.set(c.id,{sprite:T,node:c}),!a||L===!1)return T;let I=new a.Group;return I.add(L),I.add(T),I})},Rn=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),i=n.lod.linkResolution??5,c=n.lod.cullDistance,g=n.interaction.incrementalRepaint,f=n.lod.shareLinkResources,L=r.links.length<=Er,m=new WeakMap;if(e.linkCurvature?.(L?Lr:0),e.linkCurveRotation?.(l=>{let b=`${R(l.source)}|${R(l.target)}`,T=0;for(let I of b)T=T*31+I.charCodeAt(0)>>>0;return T%360*(Math.PI/180)}),$.clear(),ye.clear(),Dt.clear(),Ht.clear(),g)for(let l of r.links){let b=R(l.source),T=R(l.target);for(let I of[b,T]){let M=ye.get(I);M?M.push(l):ye.set(I,[l])}}e.linkThreeObject(l=>{let b=Ar[l.kind]*S.edgeScale,T=f?Ft(t,ce(l),ee(l)):new t.MeshBasicMaterial({color:ce(l),transparent:!0,opacity:ee(l),depthWrite:!1,blending:O()?t.AdditiveBlending:t.NormalBlending}),I=f?Gn(t,b,i):new t.CylinderGeometry(b,b,1,i),M=new t.Mesh(I,T);return L&&m.set(M,{radius:b,key:"",owned:!1}),(c!==void 0||g)&&$.set(l,M),M}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((l,b,T)=>{let I=m.get(l);if(I&&T.__curve){let q=[b.start.x,b.start.y,b.start.z,b.end.x,b.end.y,b.end.z].map(Te=>Math.round(Te*2)).join(",");return q!==I.key&&(I.owned&&l.geometry.dispose(),l.geometry=new t.TubeGeometry(T.__curve,xr,I.radius,i,!1),I.key=q,I.owned=!0),l.position.x=0,l.position.y=0,l.position.z=0,l.scale.x=l.scale.y=l.scale.z=1,l.quaternion.setFromUnitVectors(a,a),!0}let M=b.end.x-b.start.x,E=b.end.y-b.start.y,P=b.end.z-b.start.z,V=Math.sqrt(M*M+E*E+P*P);return l.position.x=(b.start.x+b.end.x)/2,l.position.y=(b.start.y+b.end.y)/2,l.position.z=(b.start.z+b.end.z)/2,l.scale.x=1,l.scale.y=Math.max(V,.01),l.scale.z=1,l.quaternion.setFromUnitVectors(a,new t.Vector3(M,E,P).normalize()),!0})},ut=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=G();if(a===null||Ne()||document.hidden)return 0;let i=R(t.source),c=R(t.target);return i===a||c===a?2:0})},xe=()=>{e.nodeVal(ie),e.nodeColor(_),e.linkColor(ge),e.linkWidth(t=>{let a=R(t.source),i=R(t.target),c=G(),g=S.edgeScale;return c!==null&&(a===c||i===c)?.7*g:t.kind==="wikilink"||t.kind==="external"?.5*g:(t.kind==="tag"?.35:.25)*g}),typeof e.linkOpacity=="function"&&e.linkOpacity(ln),ut(),Rn(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},Dn=(t,a)=>{let i=sn(s,t,a,be.keys()),c=new Set;for(let g of i){let f=be.get(g);if(!f)continue;let L=he.get(g);L&&N(L,_(f));let m=y.get(g);m&&(m.sprite.color=me(f),m.sprite.strokeColor=ue(f),m.sprite.strokeWidth=O()?.35:0,m.sprite.visible=re(f));for(let l of ye.get(g)??[]){if(c.has(l))continue;c.add(l);let b=$.get(l);b&&(n.lod.shareLinkResources&&n.three?b.material=Ft(n.three,ce(l),ee(l)):(b.material.color.set(ce(l)),b.material.opacity=ee(l)))}}},dt=t=>{if(n.interaction.incrementalRepaint&&n.use3d){ut(),Dn(t,G());return}xe(),n.use3d&&Ee()},ft=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(f,L)=>{let m=document.createElement("span");m.className="graph-landing__legend-item";let l=document.createElement("span");l.className="graph-landing__dot",l.setAttribute("aria-hidden","true"),l.style.background=f;let b=document.createElement("span");return b.textContent=L,m.append(l,b),m},i=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",g=n.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,i),a(o.current.tertiary,c),a(o.current.external,g))},zt=t=>{let a=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="graph-landing__tag-item",i.dataset[t.dataset.key]=t.dataset.value,i.setAttribute("aria-pressed",t.pressed?"true":"false");let c=document.createElement("span");if(c.className="graph-landing__facet-name",t.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=t.dotColor,c.append(f)}c.append(document.createTextNode(t.label));let g=document.createElement("span");return g.className="graph-landing__tag-count",g.textContent=String(t.count),i.append(c,g),a.append(i),a},Ot=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),i=n.root.querySelector(".graph-landing__tags");if(w.lens==="folder"){let g=n.root.dataset.folderRootLabel??"root",f=new Map;for(let m of r.nodes)m.type==="note"&&f.set(m.folder,(f.get(m.folder)??0)+1);let L=[...f.entries()].sort((m,l)=>l[1]-m[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),i instanceof HTMLElement&&(i.hidden=L.length===0),t.replaceChildren(...L.map(([m,l])=>zt({dataset:{key:"graphFolder",value:m},pressed:w.focusFolder===m,dotColor:Ln(m,o.current),label:m==="root"?g:m,count:l})));return}let c=r.nodes.filter(g=>g.type==="tag").sort((g,f)=>f.degree-g.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),i instanceof HTMLElement&&(i.hidden=c.length===0),t.replaceChildren(...c.map(g=>zt({dataset:{key:"graphTag",value:g.tag},pressed:w.focusTag===g.tag,dotColor:null,label:g.tag,count:g.degree})))},gt=!0,Bt=()=>{r.nodes.length>0&&e.zoomToFit?.(0,80),W=de().len,pe(0),Ye()},Ut=0;e.onEngineStop(()=>{gt&&(Ut=window.requestAnimationFrame(()=>{gt=!1,Bt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Ut));let Ae=(t=!1)=>{e.warmupTicks(t&&n.layout.incrementalWarmup?0:n.layout.warmupTicks??(n.use3d?50:60)),e.graphData(se()),oe(),xe(),Ee(),ft(),Ot(),xn(n.root,"[data-graph-lens]",w.lens,"data-graph-lens"),z()},Hn=t=>{w.lens=t,t!=="tag"&&(w.focusTag=null),t!=="folder"&&(w.focusFolder=null),At(t),Ae()},Fn=t=>{w.focusTag=w.focusTag===t?null:t,w.focusFolder=null,w.focusTag&&(w.lens="tag",At("tag")),Ae()},zn=t=>{w.focusFolder=w.focusFolder===t?null:t,w.focusTag=null,w.focusFolder&&(w.lens="folder",At("folder")),Ae()},Vt=()=>{if(!n.bloomPass||typeof e.postProcessingComposer!="function")return;let t=e.postProcessingComposer(),a=t.passes.includes(n.bloomPass);O()?(n.bloomPass.strength=Sr,n.bloomPass.radius=Mr,n.bloomPass.threshold=Cr,a||t.addPass(n.bloomPass)):a&&t.removePass(n.bloomPass)},mt=()=>n.use3d?to(o.current):Gt(o.current),Ye=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let t=de().len;e.scene().fog=new n.three.Fog(O()?mt():eo,t*gr,t*mr)};e.graphData(se()),e.backgroundColor(mt()),e.nodeLabel(t=>t.name),e.nodeRelSize(ar),typeof e.nodeOpacity=="function"&&e.nodeOpacity(ir),typeof e.linkOpacity=="function"&&e.linkOpacity(ln),oe(),xe();let Se=n.root.querySelector("[data-graph-preview]"),Ke=n.root.querySelector("[data-graph-preview-chip]"),je=n.root.querySelector("[data-graph-preview-title]"),Xe=n.root.querySelector("[data-graph-preview-excerpt]"),Ze=0;window.addCleanup(()=>window.clearTimeout(Ze));let On=t=>{if(!(Se instanceof HTMLElement)||!(Ke instanceof HTMLElement)||!(je instanceof HTMLElement)||!(Xe instanceof HTMLElement))return;window.clearTimeout(Ze);let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",c=n.root.dataset.legendLinks??"Links";if(t.type==="tag"){let g=n.root.dataset.previewTagTemplate??"{n} notes";Ke.textContent=i,je.textContent=`#${t.tag}`,Xe.textContent=g.replace("{n}",String(t.degree))}else t.type==="external"?(Ke.textContent=c,je.textContent=t.name,Xe.textContent=t.url):(Ke.textContent=a,je.textContent=t.name,Xe.textContent=t.excerpt);Se.hidden=!1,Se.dataset.visible="true"},Wt=()=>{Se instanceof HTMLElement&&(window.clearTimeout(Ze),Ze=window.setTimeout(()=>{Se.dataset.visible="false",Se.hidden=!0},Gr))};if(e.onNodeHover(t=>{let a=G();te=t?t.id:null,j===null&&(t?On(t):Wt()),dt(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let i=e.controls();i.autoRotate=!1,i.autoRotateSpeed=cr}if(n.three&&typeof e.scene=="function"){let i=n.three,c=new Float32Array(gn*3),g=2654435769,f=()=>(g=Math.imul(g,1664525)+1013904223>>>0,g/4294967296);for(let b=0;b<gn;b+=1){let T=f()*2-1,I=f()*Math.PI*2,M=Math.sqrt(1-T*T),E=Tt.min+Math.pow(f(),.6)*(Tt.max-Tt.min);c[b*3]=M*Math.cos(I)*E,c[b*3+1]=T*E,c[b*3+2]=M*Math.sin(I)*E}let L=new i.BufferGeometry;L.setAttribute("position",new i.Float32BufferAttribute(c,3));let m=new i.PointsMaterial({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,depthWrite:!1,opacity:.6,blending:i.NormalBlending,fog:!1}),l=new i.Points(L,m);e.scene().add(l),window.addCleanup(()=>e.scene?.().remove(l)),C=()=>{let b=O();l.visible=b,m.color.set("#dfe7ff"),m.opacity=.42,m.size=1.4,m.blending=i.AdditiveBlending,m.needsUpdate=!0},C()}e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),Vt(),typeof e.cameraPosition=="function"&&(e.cameraPosition(ve,dn),S.zoom!==1&&pe(0)),Ee(),Ye();{let i=0,c=()=>{if(!Ne()&&!document.hidden&&!ne){let g=performance.now()/1e3*_r;for(let f of fe.values())f.material.opacity=f.base*(1+Pr*Math.sin(g+f.phase))}i=window.requestAnimationFrame(c)};i=window.requestAnimationFrame(c),window.addCleanup(()=>window.cancelAnimationFrame(i))}let t=n.lod.labelDistance,a=n.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let i=e.cameraPosition.bind(e),c=0,g=()=>{let f=i();if(f&&typeof f.x=="number"&&typeof f.y=="number"&&typeof f.z=="number"){let L=Math.max(1,n.root.clientHeight||window.innerHeight);if(t!==void 0){let m=[];for(let l of y.values()){let b=l.node.x??0,T=l.node.y??0,I=l.node.z??0,M=Math.hypot(f.x-b,f.y-T,f.z-I);if(l.sprite.visible=nn(re(l.node),G()===l.node.id||G()===null&&J.has(l.node.id),M,t),l.sprite.visible){let E=Array.from(l.node.name),P=window.innerWidth<700?24:48,V=E.length>P?`${E.slice(0,P).join("")}\\u2026`:l.node.name;l.sprite.text!==V&&(l.sprite.text=V);let q=e.graph2ScreenCoords?.(b,T,I);if(q&&G()===null){let jt=Array.from(V).length*9+12,nt=q.x>window.innerWidth*.6?q.x-jt:q.x,yt=nt+jt,Wn=m.some(wt=>Math.abs(wt.y-q.y)<22&&nt<wt.right&&yt>wt.left);l.sprite.visible=!Wn&&nt>=8&&yt<=window.innerWidth-8,l.sprite.visible&&m.push({left:nt,right:yt,y:q.y})}l.sprite.center.set(q&&q.x>window.innerWidth*.6?1:0,.5);let Te=Math.max(5.5,M/L*11);Math.abs(l.sprite.textHeight-Te)>.5&&(l.sprite.textHeight=Te)}}}if(a!==void 0){let m=G();for(let[l,b]of $){let T=R(l.source),I=R(l.target);if(m!==null&&(T===m||I===m)){b.visible=!0;continue}let M=l.source,E=l.target,P=typeof M=="object"&&typeof E=="object"?{x:((M.x??0)+(E.x??0))/2,y:((M.y??0)+(E.y??0))/2,z:((M.z??0)+(E.z??0))/2}:b.position,V=Math.hypot(f.x-P.x,f.y-P.y,f.z-P.z);b.visible=vt(V,a)!=="dot"}}}c=window.requestAnimationFrame(g)};c=window.requestAnimationFrame(g),window.addCleanup(()=>window.cancelAnimationFrame(c))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,i)=>{let c=U(t),g=t.x??0,f=t.y??0;if(a.save(),a.beginPath(),a.arc(g,f,c,0,Math.PI*2),a.fillStyle=_(t),a.fill(),t.isHub&&(a.strokeStyle=d(t.id)?o.current.accent:Be(o.current.accent,ze),a.lineWidth=1.2/i,a.stroke()),re(t)){let L=11.5/i;a.font=`${L}px ${o.current.font}`,a.fillStyle=d(t.id)?o.current.ink:Be(o.current.ink,ze),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,g,f-c-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,i)=>{let c=U(t)+8;i.beginPath(),i.arc(t.x??0,t.y??0,c,0,Math.PI*2),i.fillStyle=a,i.fill()});let Ie=n.root.querySelector("[data-graph-inspect]"),Je=n.root.querySelector("[data-graph-inspect-chip]"),Qe=n.root.querySelector("[data-graph-inspect-title]"),et=n.root.querySelector("[data-graph-inspect-excerpt]"),pt=n.root.querySelector("[data-graph-inspect-tags]"),ht=n.root.querySelector("[data-graph-inspect-connected]"),Y=n.root.querySelector("[data-graph-inspect-open]"),Me=t=>{n.root.dataset.railOpen=t?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),i=n.root.querySelector("[data-graph-rail-scrim]"),c=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),c instanceof HTMLElement&&c.setAttribute("aria-hidden",t?"false":"true"),i instanceof HTMLElement&&(i.hidden=!t)},le=()=>{let a=!Ne()&&!document.hidden&&!ne;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),!a)for(let i of fe.values())i.material.opacity=i.base;ut()},qt=window.matchMedia("(prefers-reduced-motion: reduce)");qt.addEventListener("change",le),document.addEventListener("visibilitychange",le),window.addCleanup(()=>{qt.removeEventListener("change",le),document.removeEventListener("visibilitychange",le)}),le();let Bn=t=>{let a=s.get(t.id)??new Set,i=[];for(let c of a){let g=r.nodes.find(f=>f.id===c);g&&i.push(g)}return i.sort((c,g)=>g.degree-c.degree)},Un=t=>{if(!(Ie instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(Qe instanceof HTMLElement)||!(et instanceof HTMLElement)||!(pt instanceof HTMLElement)||!(ht instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",c=n.root.dataset.legendLinks??"Links",g=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Je.textContent=i,Qe.textContent=`#${t.tag}`,et.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Je.textContent=c,Qe.textContent=t.name,et.textContent=t.url):(Je.textContent=a,Qe.textContent=t.name,et.textContent=t.excerpt);let f=t.tags.map(m=>{let l=document.createElement("li");return l.textContent=m,l});pt.replaceChildren(...f),pt.hidden=f.length===0;let L=Bn(t).slice(0,12);if(L.length===0){let m=document.createElement("li");m.className="graph-landing__inspect-empty",m.textContent=g,ht.replaceChildren(m)}else ht.replaceChildren(...L.map(m=>{let l=document.createElement("li"),b=document.createElement("button");b.type="button",b.className="graph-landing__inspect-link",b.dataset.graphInspectId=m.id;let T=m.type==="tag"?i:m.type==="external"?c:a,I=document.createElement("span");I.textContent=T;let M=document.createElement("strong");return M.textContent=m.type==="tag"?`#${m.tag}`:m.name,b.append(I,M),l.append(b),l}));Y instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(Y.hidden=!1,Y.href=ro(t.slug).toString(),Y.textContent=n.root.dataset.inspectRead??"Read note",Y.removeAttribute("target"),Y.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(Y.hidden=!1,Y.href=t.url,Y.textContent=n.root.dataset.inspectOpenExternal??"Open",Y.target="_blank",Y.rel="noopener noreferrer"):(Y.hidden=!0,Y.removeAttribute("href"),Y.removeAttribute("target"),Y.removeAttribute("rel"))),Ie.hidden=!1,n.root.dataset.inspecting="true",Me(!1),Wt()},Pe=()=>{let t=G();if(j=null,Ie instanceof HTMLElement){let a=Ie.contains(document.activeElement);Ie.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}n.root.dataset.inspecting="false",te=null,le(),dt(t)},Vn=t=>{let a=G();j=t.id,le(),Un(t),dt(a)},bt=(t,a=!1)=>{if(K(t.id)&&Ae(!0),Vn(t),a){H={x:t.x??0,y:t.y??0,z:t.z??0};let i=Ne()?0:450;n.use3d&&e.cameraPosition?(W=We,e.cameraPosition({x:H.x+ve.x/S.zoom,y:H.y+ve.y/S.zoom,z:H.z+ve.z/S.zoom},H,i)):e.centerAt?.(H.x,H.y,i)}},tt=!1;e.onNodeClick((t,a)=>{t&&(tt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),bt(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Pe(),Me(!1)});let ae=n.root.querySelector("#graph-landing-mount");if(ae instanceof HTMLElement){let t=new ResizeObserver(()=>{e.width(ae.clientWidth),e.height(ae.clientHeight),j===null&&!gt&&Bt()});t.observe(ae),window.addCleanup(()=>t.disconnect());let a=null,i=0,c=m=>{a={x:m.clientX,y:m.clientY},tt=!1,ne=!0,le()},g=(m,l)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=ae.getBoundingClientRect(),T=m-b.left,I=l-b.top,M=null,E=484;for(let P of se().nodes){if(P.x===void 0||P.y===void 0)continue;let V=e.graph2ScreenCoords(P.x,P.y,P.z??0),Te=(V.x-T)**2+(V.y-I)**2;Te<E&&(E=Te,M=P)}return M},f=m=>{let l=a;a=null,ne=!1,le(),!(!l||(m.clientX-l.x)**2+(m.clientY-l.y)**2>25)&&(window.clearTimeout(i),i=window.setTimeout(()=>{if(tt){tt=!1;return}let T=g(m.clientX,m.clientY);T?bt(T):Pe()},0))},L=()=>{a=null,ne=!1,le()};ae.addEventListener("pointerdown",c,!0),ae.addEventListener("pointerup",f,!0),ae.addEventListener("pointercancel",L,!0),window.addCleanup(()=>{window.clearTimeout(i),ae.removeEventListener("pointerdown",c,!0),ae.removeEventListener("pointerup",f,!0),ae.removeEventListener("pointercancel",L,!0)})}xn(n.root,"[data-graph-lens]",w.lens,"data-graph-lens"),ft(),Ot(),w.lens!=="all"&&Ae(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let $t=()=>{o.current=Pn(),e.backgroundColor(mt()),Ye(),C(),Vt(),xe(),Ee(),ft()};document.addEventListener("themechange",$t),window.addCleanup(()=>document.removeEventListener("themechange",$t));let Yt=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Pe();return}if(a.closest("[data-graph-rail-toggle]")){let l=n.root.dataset.railOpen!=="true";l&&Pe(),Me(l);return}if(a.closest("[data-graph-rail-scrim]")){Me(!1);return}let i=a.closest("[data-graph-inspect-id]");if(i instanceof HTMLElement&&i.dataset.graphInspectId){let l=n.fullData.nodes.find(b=>b.id===i.dataset.graphInspectId);l&&bt(l,!0);return}let c=a.closest("[data-graph-lens]");if(c instanceof HTMLElement&&c.dataset.graphLens&&lo(c.dataset.graphLens)){Hn(c.dataset.graphLens);return}let g=a.closest("[data-graph-tag]");if(g instanceof HTMLElement&&g.dataset.graphTag){Fn(g.dataset.graphTag);return}let f=a.closest("[data-graph-folder]");if(f instanceof HTMLElement&&f.dataset.graphFolder){zn(f.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){z();return}let L=a.closest("[data-graph-labels]");if(L instanceof HTMLButtonElement){w.allLabels=!w.allLabels,L.setAttribute("aria-pressed",w.allLabels?"true":"false");let l=L.dataset.labelShow??"Labels",b=L.dataset.labelHide??"Labels",T=w.allLabels?b:l;L.title=T,L.setAttribute("aria-label",T),Ee();return}if(a.closest("[data-graph-theme]")){let l=O()?"light":"dark";document.documentElement.setAttribute("saved-theme",l),localStorage.setItem("theme",l),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${l}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:l}}));return}let m=a.closest("[data-graph-tags-toggle]");if(m instanceof HTMLButtonElement){let l=n.root.querySelector(".graph-landing__tags");if(l instanceof HTMLElement){let b=l.dataset.open==="true";l.dataset.open=b?"false":"true",m.setAttribute("aria-expanded",b?"false":"true")}}},_e=n.root.querySelector("[data-graph-node-scale]"),Ge=n.root.querySelector("[data-graph-edge-scale]");if(_e instanceof HTMLInputElement){_e.value=String(Math.round(S.nodeScale*100));let t=()=>{S.nodeScale=Number(_e.value)/100,Ue(S),oe(),z(),xe(),n.use3d&&Ee()};_e.addEventListener("input",t),window.addCleanup(()=>_e.removeEventListener("input",t))}if(Ge instanceof HTMLInputElement){Ge.value=String(Math.round(S.edgeScale*100));let t=()=>{S.edgeScale=Number(Ge.value)/100,Ue(S),xe()};Ge.addEventListener("input",t),window.addCleanup(()=>Ge.removeEventListener("input",t))}let Re=n.root.querySelector("[data-graph-hub-gravity]");if(Re instanceof HTMLInputElement){Re.value=String(Math.round(S.hubGravity*100));let t=()=>{let a=Number(Re.value)/100;S.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Ue(S),oe(),z()};Re.addEventListener("input",t),window.addCleanup(()=>Re.removeEventListener("input",t))}let De=n.root.querySelector("[data-graph-zoom]");if(De instanceof HTMLInputElement){De.value=String(Math.round(S.zoom*100));let t=()=>{S.zoom=Number(De.value)/100,Ue(S),pe(200)};De.addEventListener("input",t),window.addCleanup(()=>De.removeEventListener("input",t))}let He=n.root.querySelector("[data-graph-spread]");if(He instanceof HTMLInputElement){He.value=String(Math.round(S.spread*100));let t=()=>{S.spread=Number(He.value)/100,Ue(S),oe(),z()};He.addEventListener("input",t),window.addCleanup(()=>He.removeEventListener("input",t))}Me(!1),n.root.addEventListener("click",Yt),window.addCleanup(()=>n.root.removeEventListener("click",Yt));let Kt=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){Me(!1);return}Pe()}};window.addEventListener("keydown",Kt),window.addCleanup(()=>window.removeEventListener("keydown",Kt))}function po(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function ho(){try{return window.localStorage.getItem(_t)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function It(e){try{if(e){window.localStorage.setItem(_t,"stopped");return}window.localStorage.removeItem(_t)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function bo(e){let r=performance.now(),o=0,n=s=>{let u=Math.min(1,(s-r)/e.durationMs),p=u*u;e.apply(e.from+(e.to-e.from)*p),u<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function yo(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let n=window,s=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof s=="function"&&s();let u=n.YT;if(!u||typeof u.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(u)},!document.querySelector("script[data-graph-youtube-api]")){let u=document.createElement("script");u.src=lr,u.async=!0,u.dataset.graphYoutubeApi="1",u.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(u)}})}function wo(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function ko(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),s=e.querySelector("[data-graph-music-library]"),u=e.querySelector("[data-graph-music-track-list]"),p=e.querySelector("[data-graph-music-status]"),x=e.querySelector("[data-graph-music-dock]"),A=e.querySelector("[data-graph-music-now]"),B=e.querySelector("[data-graph-music-now-title]"),K=e.querySelector("[data-graph-music-now-artist]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(s instanceof HTMLElement)||!(u instanceof HTMLElement)||!(p instanceof HTMLElement))return;let w=e.dataset.audioStop??"Stop music",te=e.dataset.audioPlay??"Play music",j=e.dataset.musicLibraryOpen??"Open record collection",S=e.dataset.musicLibraryClose??"Close record collection",ne=e.dataset.musicCurrentTrack??"Current track",H=[];try{let k=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(k))for(let N of k){if(!N||typeof N!="object")continue;let y=N;typeof y.title!="string"||typeof y.url!="string"||y.artist!==void 0&&typeof y.artist!="string"||H.push({title:y.title,...typeof y.artist=="string"?{artist:y.artist}:{},url:y.url})}}catch{}let W=tn(H);W.length===0&&W.push({title:"Ambient track",videoId:cn});let X=0,C=null,Z=!1,Q=null,z=!ho(),G=!1,J=!1,ie=()=>W[X]??W[0]??{title:"Ambient track",videoId:cn},re=k=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${k}/hqdefault.jpg")`)},U=()=>ie().videoId,d=()=>{u.replaceChildren(),W.forEach((k,N)=>{let y=document.createElement("button");y.type="button",y.className="graph-landing__music-track",y.dataset.graphMusicTrackIndex=String(N),y.setAttribute("aria-current",N===X?"true":"false");let $=document.createElement("img");$.className="graph-landing__music-track-cover",$.src=`https://i.ytimg.com/vi/${k.videoId}/hqdefault.jpg`,$.alt="",$.loading="lazy";let he=document.createElement("span");he.className="graph-landing__music-track-copy";let be=document.createElement("span");if(be.className="graph-landing__music-track-title",be.textContent=k.title,he.appendChild(be),k.artist){let ye=document.createElement("span");ye.className="graph-landing__music-track-artist",ye.textContent=k.artist,he.appendChild(ye)}y.append($,he),u.appendChild(y)}),p.textContent=`${ne}: ${ie().title}`,v()},h=k=>{e.dataset.musicLibraryOpen=k?"true":"false",s.hidden=!k,s.setAttribute("aria-hidden",k?"false":"true"),n.setAttribute("aria-expanded",k?"true":"false"),n.setAttribute("aria-label",k?S:j),n.title=k?S:j},v=()=>{let k=r.dataset.playing==="true";x&&(x.dataset.playing=k?"true":"false"),A&&(A.hidden=!k);let N=ie();B&&(B.textContent=N.title),K&&(K.textContent=N.artist??"",K.hidden=!N.artist)},D=k=>{r.setAttribute("aria-pressed",k?"true":"false"),r.setAttribute("aria-label",k?w:te),r.title=k?w:te,r.dataset.playing=k?"true":"false",v()},_=()=>{Q&&(Q(),Q=null)},F=k=>{C&&C.setVolume(Math.max(0,Math.min(Oe,k)))},ee=k=>{!z||G||(G=!0,D(!0),k.unMute(),F(0),k.playVideo(),_(),Q=bo({from:0,to:Oe,durationMs:sr,apply:F}))},ce=()=>{z=!1,G=!1,_(),It(!0),C&&(C.mute(),C.pauseVideo(),F(0)),D(!1)},ge=async()=>{if(!C)try{let k=await yo();if(C)return;C=wo({api:k,host:o,videoId:U(),onReady:N=>{Z=!0,N.mute(),F(0),N.playVideo(),z&&J&&ee(N)},onEnded:N=>{if(!z)return;X=(X+1)%W.length;let y=U();re(y),d(),N.loadVideoById(y),F(G?Oe:0)}})}catch(k){console.error("[graph-landing] ambient audio unavailable",k)}},se=k=>{let N=k.target;if(!(N instanceof Element&&N.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!z||G||po())){if(J=!0,Z&&C){ee(C);return}ge()}},me=()=>{if(z&&G){ce();return}if(J=!0,z=!0,It(!1),Z&&C){ee(C);return}ge()},ue=k=>{if(!(!Number.isInteger(k)||k<0||k>=W.length)){if(X=k,re(U()),d(),h(!1),z=!0,J=!0,It(!1),Z&&C){C.loadVideoById(U()),G?(C.unMute(),C.playVideo(),F(Oe)):ee(C);return}ge()}},de=()=>{let k=e.dataset.musicLibraryOpen!=="true";if(k){e.dataset.railOpen="false";let N=e.querySelector("[data-graph-rail-toggle]"),y=e.querySelector("#graph-landing-rail"),$=e.querySelector("[data-graph-rail-scrim]");N instanceof HTMLButtonElement&&N.setAttribute("aria-expanded","false"),y instanceof HTMLElement&&y.setAttribute("aria-hidden","true"),$ instanceof HTMLElement&&($.hidden=!0)}h(k)},pe=k=>{let N=k.target;if(!(N instanceof Element))return;let y=N.closest("[data-graph-music-track-index]");y instanceof HTMLButtonElement&&ue(Number(y.dataset.graphMusicTrackIndex))},oe=k=>{if(e.dataset.musicLibraryOpen!=="true")return;let N=k.target;(!(N instanceof Element)||!N.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&h(!1)},fe=k=>{k.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(h(!1),k.stopImmediatePropagation())},Le=()=>{if(C){if(document.hidden){_(),C.pauseVideo();return}z&&G&&(C.playVideo(),F(Oe))}};re(U()),D(!1),d(),h(!1),ge(),r.addEventListener("click",me),n.addEventListener("click",de),u.addEventListener("click",pe),e.addEventListener("click",oe),e.addEventListener("pointerdown",se,!0),e.addEventListener("touchstart",se,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",Le),window.addEventListener("keydown",fe),window.addCleanup(()=>{r.removeEventListener("click",me),n.removeEventListener("click",de),u.removeEventListener("click",pe),e.removeEventListener("click",oe),e.removeEventListener("pointerdown",se,!0),e.removeEventListener("touchstart",se,!0),document.removeEventListener("visibilitychange",Le),window.removeEventListener("keydown",fe),_(),C&&(C.pauseVideo(),C.destroy(),C=null)})}async function vo(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(r instanceof HTMLElement&&o instanceof HTMLElement){let y=r.parentElement,$=r.nextSibling;o.insertBefore(r,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{y?.isConnected&&r.isConnected&&y.insertBefore(r,$?.parentNode===y?$:null)})}ko(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let s=e.querySelectorAll("[data-graph-counts]"),u=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",p=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",x=(e.dataset.localePrefixes??"").split(",").map(y=>y.trim()).filter(y=>y.length>0),A=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",B=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",K=e.dataset.graphIndexPath??"",w=we(e.dataset.maxRenderedNodes,y=>Number.parseInt(y,10)),te=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,j=Number.isFinite(te)?te:1,S=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,ne=e.dataset.graphRenderMode==="3d"?"3d":"auto",H=e.dataset.graphLayoutFreezeAfterWarmup==="true",W=we(e.dataset.graphLayoutWarmupTicks,y=>Number.parseInt(y,10)),X=we(e.dataset.graphLayoutCooldownTicks,y=>Number.parseInt(y,10)),C=we(e.dataset.graphLayoutChargeTheta,Number.parseFloat),Z=e.dataset.graphLayoutIncrementalWarmup==="true",Q=we(e.dataset.graphLodLabelDistance,Number.parseFloat),z=we(e.dataset.graphLodCullDistance,Number.parseFloat),G=e.dataset.graphLodFog==="true",J=we(e.dataset.graphLodLinkResolution,y=>Number.parseInt(y,10)),ie=e.dataset.graphInteractionIncrementalRepaint==="true",re=e.dataset.graphLodShareLinkResources==="true",U=!1,d=null,h={current:Pn()},v=()=>{U=!0,d&&(d._destructor(),d=null),delete e.dataset.graphReady};window.addCleanup(v);let D=Jr();if(ne==="3d"&&!D){Nt(n,"3D graph unavailable: WebGL is required.");return}let _=ne==="3d"||D,F=ao(_),ee=_?import(Qn).then(y=>y.default??null).catch(y=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",y),null)):Promise.resolve(null),ce=_?import(er).catch(y=>(console.error("[graph-landing] three unavailable; using default node rendering",y),null)):Promise.resolve(null),ge=_?import(tr).then(y=>y.UnrealBloomPass?new y.UnrealBloomPass:null).catch(y=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",y),null)):Promise.resolve(null),se=_?import(Jn).then(y=>y.forceCollide??null).catch(y=>(console.error("[graph-landing] d3-force-3d collision force unavailable",y),null)):Promise.resolve(null);F.catch(()=>{});let me;try{me=st(B==="graphIndex"?await fetch(K).then(y=>y.json()):await fetchData)}catch(y){throw Nt(n,"Graph could not load its index."),y}if(U)return;let ue=Xr(Dr(me),{localeId:u,sourceLocale:p,prefixes:x},S),de=rn(ue,w),pe=A.replace("{n}",String(ue.nodes.length)).replace("{m}",String(ue.links.length));for(let y of s)y.textContent=pe;let oe;try{oe=await F}catch(y){throw Nt(n,"Graph could not load. Check your network connection."),y}let[fe,Le,k,N]=await Promise.all([ee,ce,ge,se]);U||(n.replaceChildren(),d=oe(n),d.width(n.clientWidth),d.height(n.clientHeight),n.__graphLanding=d,n.__graphData=de,mo(d,de,h,{use3d:_,root:e,spriteText:fe,bloomPass:k,three:Le,forceCollide:N,fullData:ue,expandHops:j,layout:{freezeAfterWarmup:H,warmupTicks:W,cooldownTicks:X,chargeTheta:C,incrementalWarmup:Z},lod:{labelDistance:Q,cullDistance:z,fog:G,linkResolution:J,shareLinkResources:re},interaction:{incrementalRepaint:ie}}))}var To="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(To,n)}catch(s){console.error("[graph-landing] failed to persist preferred-locale",s)}});document.addEventListener("nav",()=>{vo()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: var(--light);\n  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);\n  --graph-surface-strong: var(--light);\n  --graph-border: var(--lightgray);\n  --graph-text: var(--darkgray);\n  --graph-muted: var(--gray);\n  --graph-accent: var(--secondary);\n  --graph-accent-soft: var(--highlight);\n  --graph-external: var(--tertiary);\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n/* Daytime sky: zenith at the top, brighter haze toward the horizon, a soft\n   sun glow upper-left, and faint high cirrus. The WebGL canvas clears to\n   transparent in light mode so this shows through. */\n:root:not([saved-theme=dark]) .graph-landing__hero {\n  background: radial-gradient(ellipse 60% 40% at 18% 8%, rgba(255, 255, 255, 0.85), transparent 70%), radial-gradient(ellipse 90% 26% at 70% 34%, rgba(255, 255, 255, 0.35), transparent 75%), radial-gradient(ellipse 70% 20% at 30% 58%, rgba(255, 255, 255, 0.28), transparent 75%), linear-gradient(180deg, #bcd3ee 0%, #d6e4f4 42%, #eaf1f8 78%, #f7fafd 100%);\n}\n\n.graph-landing__hero {\n  background: var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.page:has(.graph-landing) .search {\n  position: static;\n  flex: 0 0 44px;\n  width: auto;\n}\n\n.graph-landing__chrome:has(.search-container.active) {\n  z-index: 30;\n}\n\n.page:has(.graph-landing) .search > .search-button {\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.page:has(.graph-landing) .search > .search-button p {\n  display: none;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__music-now {\n  background: linear-gradient(90deg, var(--graph-surface), color-mix(in srgb, var(--graph-surface) 92%, transparent));\n  border: 1px solid var(--graph-border);\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: block;\n  flex: 0 1 auto;\n  max-width: 180px;\n  min-width: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 5px 10px 5px 12px;\n  position: relative;\n  transform: translateX(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease, width 0.25s ease;\n  white-space: nowrap;\n  width: 0;\n}\n\n.graph-landing__music-now::before {\n  background: repeating-radial-gradient(circle at left center, color-mix(in srgb, var(--graph-text) 10%, transparent) 0 1px, transparent 1px 3px);\n  content: "";\n  inset: 0;\n  mask-image: linear-gradient(90deg, #000, transparent 56px);\n  pointer-events: none;\n  position: absolute;\n  -webkit-mask-image: linear-gradient(90deg, #000, transparent 56px);\n}\n\n.graph-landing__music-now[hidden] {\n  display: none;\n}\n\n.graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n  opacity: 1;\n  transform: translateX(0);\n  width: 180px;\n}\n\n.graph-landing__music-now-title,\n.graph-landing__music-now-artist {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-now-title {\n  color: var(--graph-text);\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n\n.graph-landing__music-now-artist {\n  color: var(--graph-muted);\n  font-size: 10px;\n  line-height: 1.3;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--graph-text);\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 1.5rem;\n  left: auto;\n  margin: 0;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  right: 1.5rem;\n  transform: translateY(6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(400px, 100% - 3rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-now {\n    max-width: 120px;\n  }\n  .graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n    width: min(120px, max(0px, 100vw - 180px));\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';
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
  const root = slug.split("/").filter(Boolean).slice(0, -1).map(() => "..").join("/");
  return root || ".";
}
var GraphLanding_default = ((pageOptions) => {
  const options = pageOptions ?? {};
  const GraphLandingConstructor = () => {
    const GraphLanding = ({ fileData, cfg, allFiles }) => {
      const multilingual = fileData.multilingual;
      const slug = typeof fileData.slug === "string" ? fileData.slug : "";
      const localeId = multilingual?.locale ?? slug.split("/")[0] ?? options.defaultLocale ?? "ko";
      const multilingualCfg = cfg.multilingual;
      const sourceLocale = multilingualCfg?.sourceLocale ?? options.defaultLocale ?? "ko";
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
                        /* @__PURE__ */ u2("p", { class: "graph-landing__title", children: "Beomsu Koh" }),
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
  const translationKey = frontmatter?.translationKey;
  return translationKey === "graph" || translationKey === "home";
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