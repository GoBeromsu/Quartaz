// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function jt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function ot(e,r,o){let t=Number.isFinite(e)?Math.max(0,e):0,s=Number.isFinite(r)?Math.max(0,r):0,c=Number.isFinite(o)?Math.max(s,o):s;if(c===s)return s>0?.5:0;let p=Math.min(c,Math.max(s,t));return(Math.sqrt(p)-Math.sqrt(s))/(Math.sqrt(c)-Math.sqrt(s))}function Xt(e,r,o){return ot(Math.max(e,r),0,o)}function Fe(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function Zt(e){return 1+Fe(e,0,1)*1.2}function Jt(e,r){let o=Fe(e,0,1),t=Fe(r,0,2);return Math.max(.5,1-o*.24*t)}function Qt(e,r){let o=Fe(e,0,1),t=Fe(r,0,2);return Math.min(1.6,1+o*.3*t)}var Yn=/^[A-Za-z0-9_-]{6,20}$/,Kn=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),jn=new Set(["youtu.be","www.youtu.be"]);function rt(e){return e&&Yn.test(e)?e:void 0}function Xn(e){if(!e)return;let r=e.trim(),o=rt(r);if(o)return o;let t;try{t=new URL(r)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:"||t.username||t.password||t.port)){if(Kn.has(t.hostname)){if(t.pathname==="/watch")return rt(t.searchParams.get("v"));let s=t.pathname.split("/").filter(Boolean);if(s.length===2&&(s[0]==="shorts"||s[0]==="embed"))return rt(s[1])}if(jn.has(t.hostname)){let s=t.pathname.split("/").filter(Boolean);if(s.length===1)return rt(s[0])}}}function en(e){let r=[],o=new Set;for(let t of e){let s=t.title.trim(),c=Xn(t.url);if(!s||!c||o.has(c))continue;o.add(c);let p=t.artist?.trim();p?r.push({title:s,artist:p,videoId:c}):r.push({title:s,videoId:c})}return r}function G(e){return typeof e=="string"?e:e.id}function vt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function tn(e,r,o,t){return r||e&&vt(o,t)==="full"}function at(e,r,o){let t=e.get(r);if(t)return t;let s=o();return e.set(r,s),s}function we(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function nn(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let t=[...e.nodes].sort((p,E)=>E.degree!==p.degree?E.degree-p.degree:p.id<E.id?-1:p.id>E.id?1:0).slice(0,Math.max(0,r)),s=new Set(t.map(p=>p.id)),c=e.links.filter(p=>{let E=G(p.source),N=G(p.target);return s.has(E)&&s.has(N)});return{nodes:t,links:c}}function rn(e,r,o,t){let s=new Set,c=Math.max(0,Math.floor(t));if(c<=0)return s;let p=new Set([o]),E=new Set([o]);for(let N=0;N<c;N+=1){let O=new Set;for(let $ of E)for(let w of e.get($)??[])p.has(w)||(p.add(w),O.add(w),r.has(w)||s.add(w));E=O}return s}var Zn=2.399963229728653,kt=20;function on(e,r,o){let t=e.x??0,s=e.y??0,c=e.z??0,p=r*Zn;return{x:t+kt*Math.cos(p),y:s+kt*Math.sin(p),z:o?c+kt*Math.sin(p*.5):c}}function an(e,r,o,t){if(r===o)return new Set;if(r===null||o===null)return new Set(t);let s=new Set([r,o]);for(let c of e.get(r)??[])s.add(c);for(let c of e.get(o)??[])s.add(c);return s}var ct="0.179.1",Jn="https://esm.sh/force-graph@1.51.4",Qn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${ct}`,er="https://esm.sh/d3-force-3d@3.0.6",tr=`https://esm.sh/three-spritetext@1.9.2?deps=three@${ct}`,nr=`https://esm.sh/three@${ct}`,rr=`https://esm.sh/three@${ct}/examples/jsm/postprocessing/UnrealBloomPass.js`,or=8,ar=6;var Ve=1,Pt=4,ir=.05,sr=2.6,lr=1,sn=1,ze=.18,Cn="graph-landing:lens",Nn="graph-landing:tune",_t="graph-landing:ambient-audio",ln="UDVtMYqUAyw",Oe=12,cr=28e3,ur="https://www.youtube.com/iframe_api",dr=.18,cn=1.25,fr=1.25,gr=1.15,mr=.55,ve={x:330,y:235,z:565},un={x:0,y:0,z:0},Ue=Math.hypot(ve.x,ve.y,ve.z),pr=300/Ue,hr=1600/Ue,dn=2.2,br=6.4,yr=1.6,wr=6.2,kr=2.1,vr="#c9dcff",Tr="#ffe6bf",Lr="#fff1d4",Er="#f0c48a",fn=1400,Tt={min:1300,max:2800},gn=.55,mn=.16,pn=1,xr=6,Sr={wikilink:.65,tag:.45,external:.55,cooc:.08,folder:.08},Mr="#a8b0c2",hn={min:80,max:200},bn={min:40,max:110},yn={min:160,max:280},wn={min:90,max:170},kn=220,vn=2,Cr=.06,Nr=.8,Ar=350,Lt={min:-170,max:-320},Et={min:96,max:156},xt={min:170,max:340};function Ir(e){return $e(e-.5,0,1)}function st(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function St(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Pr(e){let r=[];for(let o of Object.values(e)){let t=st(o);if(!jt(t.filePath))continue;let s=typeof t.slug=="string"?t.slug:"";if(s.length===0)continue;let c=t.multilingual,p=c&&typeof c=="object"?c:void 0;r.push({slug:s,title:typeof t.title=="string"?t.title:s,links:St(t.links),tags:St(t.tags),externalLinks:St(t.externalLinks),content:typeof t.excerpt=="string"?t.excerpt:typeof t.content=="string"?t.content:"",multilingual:p})}return r}function _r(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=kn?r:`${r.slice(0,kn).trimEnd()}\\u2026`}function qe(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function Tn(e){return qe(e)/(2*Math.PI)}function it(e,r,o){let t=qe(e),s=Math.acos(2*Tn(`${e}:phi`)-1),c=r+(o-r)*Tn(`${e}:r`);return{x:c*Math.sin(s)*Math.cos(t),y:c*Math.sin(s)*Math.sin(t),z:c*Math.cos(s)}}function An(e){return e==="index"||e.endsWith("/index")}function In(e){return e==="tags"||e.startsWith("tags/")}function Dr(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Pn(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Mt(e,r){return e.multilingual?.locale?e.multilingual.locale:Pn(e.slug,r).locale}function Gr(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Pn(e.slug,r).permalink}`}function Hr(e,r){let o=e.find(t=>Mt(t,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(t=>Mt(t,r.prefixes)===r.sourceLocale)??e.find(t=>Mt(t,r.prefixes)===void 0)}function $e(e,r,o){return Math.min(o,Math.max(r,e))}function Ln(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Rr(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Gt(e){return Rr(e).trim().toLowerCase()}function Fr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function zr(e){let r=e.trim();return r.length===0||Fr(r)||In(r)||An(r)?!0:Gt(r).length===0}function Or(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function _n(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function Br(e,r){let o=_n(e);return o===null?!1:!r.includes(new URL(o).hostname)}function En(e){return`external:${e}`}function Wr(e,r){let o=new URL(e),t=o.hostname.replace(/^www\\./,""),s=o.pathname;return(r.get(t)??0)>1&&s.length>1?`${t}${s}`:t}function Vr(e){let r=new Map,o=new Map;for(let t of e){let s=Gt(t.slug);s.length>0&&!r.has(s)&&r.set(s,t.slug);let c=t.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,t.slug);let p=c.replace(/\\s+/g,"-");p.length>0&&!o.has(p)&&o.set(p,t.slug)}return{byBasename:r,byTitle:o}}function Ur(e,r,o){if(r.has(e))return e;let t=Gt(e),s=o.byBasename.get(t);if(s)return s;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(t);return c||null}function qr(e,r){return e.length===0?"":[...e].sort((t,s)=>(r.get(s)??0)-(r.get(t)??0))[0]??""}function $r(e,r,o=void 0){let t=e.filter(u=>!An(u.slug)&&!In(u.slug)&&!Dr(u)),s=new Map;for(let u of t){let h=Gr(u,r.prefixes),T=s.get(h)??[];T.push(u),s.set(h,T)}let c=[];for(let u of s.values()){let h=Hr(u,r);h&&c.push(h)}let p=new Set(c.map(u=>u.slug)),E=Vr(c),N=new Map,O=[],$=new Set,w=new Map,te=u=>{N.set(u,(N.get(u)??0)+1)},Y=(u,h,T)=>u<h?`${u}|${h}|${T}`:`${h}|${u}|${T}`,x=(u,h,T,P)=>{let A=Y(u,h,T);return $.has(A)?!1:($.add(A),O.push({source:u,target:h,kind:T}),P&&(te(u),te(h)),!0)};for(let u of c)for(let h of u.links){if(zr(h))continue;let T=Ur(h,p,E);T!==null&&T!==u.slug&&x(u.slug,T,"wikilink",!0)}let ne=Or(),_=new Set;for(let u of c)for(let h of u.externalLinks){let T=_n(h);T===null||!Br(T,ne)||(_.add(T),x(u.slug,En(T),"external",!0))}let V=new Map;for(let u of _){let h=new URL(u).hostname.replace(/^www\\./,"");V.set(h,(V.get(h)??0)+1)}let K=new Set,M=new Map;for(let u of c)for(let h of u.tags){w.set(h,(w.get(h)??0)+1);let T=`tag:${h}`;K.add(T),x(u.slug,T,"tag",!0);let P=M.get(h)??[];P.push(u.slug),M.set(h,P)}if(o!==!1){let u=o?.maxTagsPerNote,h=o?.maxEdges,T=0;e:for(let P of c)if(!(P.tags.length<2)&&!(u!==void 0&&P.tags.length>u))for(let A=0;A<P.tags.length;A+=1)for(let D=A+1;D<P.tags.length;D+=1){if(h!==void 0&&T>=h)break e;x(`tag:${P.tags[A]}`,`tag:${P.tags[D]}`,"cooc",!1)&&(T+=1)}}let j=new Map;for(let u of c){let h=Ln(u.slug);if(h==="root")continue;let T=j.get(h)??[];T.push(u.slug),j.set(h,T)}for(let u of j.values()){if(u.length<2)continue;let h=[...u].sort();for(let T=0;T<h.length;T+=1){let P=h[(T+1)%h.length],A=h[(T+vn)%h.length],D=h[T];D===void 0||P===void 0||(D!==P&&!$.has(Y(D,P,"wikilink"))&&x(D,P,"folder",!1),h.length>vn+1&&A!==void 0&&D!==A&&!$.has(Y(D,A,"wikilink"))&&x(D,A,"folder",!1))}}let Q=[...N.values()],z=Q.length>0?Math.min(...Q):0,I=Q.length>0?Math.max(...Q):0,X=u=>{let h=ot(N.get(u)??0,z,I);return Ve+h*(Pt-Ve)},ie=[...c].sort((u,h)=>(N.get(h.slug)??0)-(N.get(u.slug)??0)),re=new Set(ie.filter(u=>(N.get(u.slug)??0)>0).slice(0,or).map(u=>u.slug)),B=c.map(u=>{let h=re.has(u.slug),T=h?it(u.slug,bn.min,bn.max):it(u.slug,hn.min,hn.max);return{id:u.slug,name:u.title,type:"note",val:X(u.slug),degree:N.get(u.slug)??0,isHub:h,tag:"",slug:u.slug,url:"",folder:Ln(u.slug),tags:u.tags,dominantTag:qr(u.tags,w),excerpt:_r(u.content),phase:qe(u.slug),x:T.x,y:T.y,z:T.z}});for(let u of _){let h=En(u),T=it(h,yn.min,yn.max);B.push({id:h,name:Wr(u,V),type:"external",val:X(h)*mr,degree:N.get(h)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:qe(h),x:T.x,y:T.y,z:T.z})}for(let u of K){let h=u.slice(4),T=it(u,wn.min,wn.max);B.push({id:u,name:h,type:"tag",val:$e(X(u)*.7,Ve,Pt),degree:N.get(u)??0,isHub:!1,tag:h,slug:`tags/${h}`,url:"",folder:"tag",tags:[h],dominantTag:h,excerpt:"",phase:qe(u),x:T.x,y:T.y,z:T.z})}return{nodes:B,links:O}}function Ct(e){let r=new Map,o=(t,s)=>{let c=r.get(t)??new Set;c.add(s),r.set(t,c)};for(let t of e){if(t.kind!=="wikilink"&&t.kind!=="tag"&&t.kind!=="external")continue;let s=G(t.source),c=G(t.target);o(s,c),o(c,s)}return r}function Me(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let t=getComputedStyle(o).color;return o.remove(),t||r}function Dn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Me("--graph-backdrop","#ffffff"),ink:Me("--graph-text","#0f0f0f"),accent:Me("--graph-accent","#a52142"),tertiary:Me("--graph-external","#c75b75"),gray:Me("--graph-muted","#737373"),external:Me("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Ce(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Yr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Kr(){return Yr()}function W(){return document.documentElement.getAttribute("saved-theme")==="dark"}function lt(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}return null}function Be(e,r){let o=lt(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function ke(e,r,o){let t=lt(e),s=lt(r);if(!t||!s)return e;let c=(p,E)=>Math.round(p+(E-p)*o);return`rgb(${c(t.r,s.r)}, ${c(t.g,s.g)}, ${c(t.b,s.b)})`}function Dt(e){return W()?ke(e.bg,"#000000",.82):e.bg}function jr(e){let r=lt(e);if(!r)return e;let o=t=>{let s=t/255,c=s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);return Math.ceil(c*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function Xr(e){return jr(Dt(e))}function Gn(e,r){let o=0;for(let t of e)o=o*31+t.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function xn(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:Gn(e,[r.accent,r.tertiary,r.ink,r.gray])}function Zr(e,r){return e.length===0?r.ink:Gn(e,[r.accent,r.tertiary])}function Jr(e){let r=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),t="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(t=o.endsWith("/")?o:`${o}/`);let s=`${t}${r}`.replace(/\\/{2,}/g,"/");return new URL(s,window.location.origin)}function Qr(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function Nt(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function eo(e){let o=await import(e?Qn:Jn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Qr(o)}function to(){try{let e=sessionStorage.getItem(Cn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function no(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Nn);if(!r)return e;let o=st(JSON.parse(r)),t=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,s=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,p=typeof o.spread=="number"?o.spread:e.spread,E=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:t,edgeScale:s,zoom:c,spread:p,hubGravity:E}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function We(e){try{sessionStorage.setItem(Nn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function At(e){try{sessionStorage.setItem(Cn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function ro(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function oo(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function ao(e,r){return e.type==="note"&&e.folder===r}function Sn(e,r){let o=G(r),t=e.find(s=>s.id===o);return!t||t.type!=="note"?null:t.folder}function io(e,r,o){let t=new Map;if(r==="folder"){let s=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return s.forEach((c,p)=>{let E=Math.PI*2*p/Math.max(s.length,1),N={x:Math.cos(E)*o,y:Math.sin(E)*o,z:0};for(let O of e.nodes)O.type==="note"&&O.folder===c&&t.set(O.id,N)}),t}if(r==="tag"){let s=e.nodes.filter(p=>p.type==="tag"),c=new Map;s.forEach((p,E)=>{let N=Math.PI*2*E/Math.max(s.length,1);c.set(p.tag,{x:Math.cos(N)*o,y:Math.sin(N)*o,z:0})});for(let p of e.nodes)if(p.type==="tag"){let E=c.get(p.tag);E&&t.set(p.id,E)}else if(p.dominantTag.length>0){let E=c.get(p.dominantTag);E&&t.set(p.id,E)}}return t}function so(e,r){let o=[],t=s=>{let c=r*s;for(let p of o){let E=e(p);E&&(p.vx=(p.vx??0)+(E.x-(p.x??0))*c,p.vy=(p.vy??0)+(E.y-(p.y??0))*c,p.vz=(p.vz??0)+(E.z-(p.z??0))*c)}};return t.initialize=s=>{o=s},t}function Mn(e,r,o,t){for(let s of e.querySelectorAll(r)){if(!(s instanceof HTMLElement))continue;let c=s.getAttribute(t);s.setAttribute("aria-pressed",c===o?"true":"false")}}function lo(e,r,o,t){let s=Ct(r.links),c=(n,a,i)=>n<a?`${n}|${a}|${i}`:`${a}|${n}|${i}`,p=new Map(t.fullData.nodes.map(n=>[n.id,n])),E=new Map,N=new Set,O=new Set;t.fullData!==r&&(E=Ct(t.fullData.links),N=new Set(r.nodes.map(n=>n.id)),O=new Set(r.links.map(n=>c(G(n.source),G(n.target),n.kind))));let $=n=>{if(t.fullData===r)return!1;let a=rn(E,N,n,t.expandHops);if(!N.has(n)&&p.has(n)&&a.add(n),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let i=t.layout.incrementalWarmup?p.get(n):void 0,l=0;for(let m of a){let f=p.get(m);if(f){if(i&&f.id!==i.id){let y=on(i,l,t.use3d);f.x=y.x,f.y=y.y,f.z=y.z,f.vx=f.vy=f.vz=0,l+=1}r.nodes.push(f),N.add(m)}}for(let m of t.fullData.links){let f=G(m.source),y=G(m.target);if(!N.has(f)||!N.has(y))continue;let d=c(f,y,m.kind);O.has(d)||(O.add(d),r.links.push(m))}return s=Ct(r.links),!0},w={lens:to(),allLabels:!1,focusTag:null,focusFolder:null},te=null,Y=null,x=no(),ne=!1,_=un,V=Ue,K=0,M=()=>{},j=n=>ot(n.degree,0,K),Q=n=>{let a=.1*Math.sin(n.phase*3.7);return n.type==="tag"?.7:n.type==="external"?.45+a:$e(.58+.42*Math.pow(j(n),.6)+a,.48,1)},z=()=>{e.cooldownTicks(t.layout.freezeAfterWarmup?90:t.layout.cooldownTicks??200),e.d3ReheatSimulation()},I=()=>Y??te,X=new Set(r.nodes.filter(n=>n.type==="note").sort((n,a)=>a.degree-n.degree).slice(0,ar).map(n=>n.id)),ie=n=>{let a=n.val;return n.isHub&&(a*=cn),w.lens==="tag"&&n.type==="tag"&&(a*=fr),w.focusTag&&n.id===`tag:${w.focusTag}`&&(a*=gr),a},re=n=>{let a=I();return a===n.id?!0:a!==null?s.get(a)?.has(n.id)??!1:w.allLabels||X.has(n.id)},B=n=>{let a=Pt*cn,i=$e((ie(n)-Ve)/(a-Ve),0,1);return(dn+i*(br-dn))*x.nodeScale},u=n=>{let a=I();if(a!==null)return a===n||(s.get(a)?.has(n)??!1);if(w.focusTag===null&&w.focusFolder===null)return!0;let i=r.nodes.find(l=>l.id===n);return i?w.focusFolder!==null?ao(i,w.focusFolder):w.focusTag!==null&&oo(i,w.focusTag):!1},h=n=>n.type==="external"?o.current.external:w.lens==="tag"?n.type==="tag"?o.current.tertiary:Zr(n.dominantTag,o.current):w.lens==="folder"?n.type==="tag"?o.current.tertiary:xn(n.folder,o.current):w.lens==="hub"?n.type==="tag"?o.current.tertiary:n.isHub?o.current.accent:o.current.ink:n.type==="tag"?o.current.tertiary:o.current.ink,T=(n,a)=>n.type==="external"?Er:n.type==="tag"?ke(o.current.tertiary,"#ffffff",.22):w.lens!=="all"?ke(a,"#ffffff",.3):n.isHub?Lr:ke(vr,Tr,Math.pow(j(n),.7)),P=(n,a)=>{let i=p.get(n)?.degree??0,l=p.get(a)?.degree??0;return Math.log1p(Math.min(i,l))/Math.log1p(Math.max(1,K))},A=n=>{let a=I();if(a!==null&&(a===n.id||(s.get(a)?.has(n.id)??!1)))return o.current.accent;let i=h(n);return u(n.id)?W()?T(n,i):n.isHub?ke(o.current.ink,o.current.accent,.22):i:ke(i,Dt(o.current),1-ze)},D=n=>{let a=W();return n==="wikilink"?a?.52:.64:n==="external"?a?.42:.56:n==="tag"?a?.38:.5:0},ee=n=>{if(n.kind==="cooc"||n.kind==="folder")return n.kind==="cooc"&&w.lens==="tag"||n.kind==="folder"&&w.lens==="folder"?.06:0;let a=G(n.source),i=G(n.target),l=I();if(l!==null&&(a===l||i===l))return W()?.72:.78;let m=D(n.kind)*(.45+.55*P(a,i));return(l!==null||w.focusTag!==null||w.focusFolder!==null)&&(!u(a)||!u(i))?m*ze:m},ce=n=>{let a=G(n.source),i=G(n.target),l=I(),m=W()?Mr:o.current.ink;if(l!==null&&(a===l||i===l))return ke(o.current.accent,m,.45);if(W()){let f=p.get(a),y=p.get(i);if(f&&y)return ke(T(f,h(f)),T(y,h(y)),.5)}return m},ge=n=>Be(ce(n),ee(n)),se=()=>({nodes:r.nodes,links:r.links}),me=n=>{let a=W()?"rgba(255, 255, 255, 1)":Be(o.current.ink,.88);return u(n.id)?a:Be(a,ze)},ue=n=>W()?u(n.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",de=()=>{let n=e.controls?.().target;if(n&&(_={x:n.x,y:n.y,z:n.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let i={x:a.x-_.x,y:a.y-_.y,z:a.z-_.z},l=Math.hypot(i.x,i.y,i.z);if(l>1)return{dir:i,len:l}}}return{dir:ve,len:Ue}},pe=n=>{if(t.use3d){if(typeof e.cameraPosition!="function")return;let a=V/$e(x.zoom,.4,2.5),{dir:i,len:l}=de(),m=a/l;e.cameraPosition({x:_.x+i.x*m,y:_.y+i.y*m,z:_.z+i.z*m},_,Ce()?0:n),Ye();return}typeof e.zoom=="function"&&e.zoom(x.zoom,Ce()?0:n)},oe=()=>{let n=Ir(x.spread),a=Lt.min+n*(Lt.max-Lt.min),i=Et.min+n*(Et.max-Et.min),l=new Map(r.nodes.map(S=>[S.id,S.degree])),m=Math.max(0,...l.values());K=m;let f=j,y=S=>Xt(l.get(G(S.source))??0,l.get(G(S.target))??0,m),d=e.d3Force("charge");d?.strength&&d.strength(S=>a*Zt(f(S))),d?.theta&&t.layout.chargeTheta!==void 0&&d.theta(t.layout.chargeTheta);let g=e.d3Force("link");g?.distance&&g.distance(S=>{let H=Jt(y(S),x.hubGravity);return w.lens==="tag"&&S.kind==="tag"?i*.72*H:S.kind==="cooc"||S.kind==="folder"?i:i*H}),g?.strength&&g.strength(S=>{if(S.kind==="cooc"||S.kind==="folder")return .015;let H=Qt(y(S),x.hubGravity);if(w.lens==="tag"&&S.kind==="tag")return .3*H;if(w.lens==="folder"){let Z=Sn(r.nodes,S.source),J=Sn(r.nodes,S.target);if(Z!==null&&Z===J)return .16*H}return S.kind==="tag"?.14*H:(S.kind==="external"?.16:.24)*H}),t.forceCollide&&e.d3Force("collision",t.forceCollide(S=>B(S)+xr).strength(.85).iterations(1));let k=e.d3Force("center");k?.strength&&k.strength(ir);let L=xt.min+n*(xt.max-xt.min),F=io(r,w.lens,L),R=w.lens==="folder"||w.lens==="tag"?.08:0;e.d3Force("cluster",so(S=>F.get(S.id)??null,R)),t.use3d&&e.d3Force("flattenZ",null)},fe=new Map,Te=new Map,v=(n,a)=>at(Te,a?"dark":"light",()=>{let l=document.createElement("canvas");l.width=l.height=64;let m=l.getContext("2d");if(m){let f=m.createRadialGradient(32,32,0,32,32,32);a?(f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.22,"rgba(255,255,255,0.96)"),f.addColorStop(.36,"rgba(255,255,255,0.42)"),f.addColorStop(.62,"rgba(255,255,255,0.1)"),f.addColorStop(1,"rgba(255,255,255,0)")):(f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.86,"rgba(255,255,255,1)"),f.addColorStop(1,"rgba(255,255,255,0)")),m.fillStyle=f,m.fillRect(0,0,64,64)}return new n.CanvasTexture(l)}),C=(n,a)=>{n.color.set(a),W()&&n.color.multiplyScalar(yr)},b=new Map,U=new Map,he=new Map,be=new Map,ye=new Map,Ht=new Map,Rt=new Map,Hn=(n,a,i)=>{let l=`${a}|${i}`;return at(Ht,l,()=>new n.CylinderGeometry(a,a,1,i))},Ft=(n,a,i)=>{let l=`${a}|${i}`;return at(Rt,l,()=>new n.MeshBasicMaterial({color:a,transparent:!0,opacity:i,depthWrite:!1,blending:W()?n.AdditiveBlending:n.NormalBlending}))},Le=()=>{if(!t.use3d||typeof e.nodeThreeObject!="function")return;let n=t.spriteText,a=t.three,i=t.interaction.incrementalRepaint;if(fe.clear(),b.clear(),he.clear(),be.clear(),i)for(let l of r.nodes)be.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let m=B(l),f=A(l),y=!1;if(a){let R=W(),S=R?Q(l):1,H=new a.SpriteMaterial({map:v(a,R),color:"#ffffff",transparent:!0,depthWrite:!1,blending:R?a.AdditiveBlending:a.NormalBlending,opacity:S});C(H,f),R&&fe.set(l.id,{material:H,base:S,phase:l.phase}),i&&he.set(l.id,H);let Z=new a.Sprite(H),J=m*(R?wr:kr);Z.scale.x=J,Z.scale.y=J,Z.scale.z=1,y=Z}let d=re(l);if(!n||!i&&!d)return y;let g=Array.from(l.name),k=window.innerWidth<700?24:48,L=new n(g.length>k?`${g.slice(0,k).join("")}\\u2026`:l.name);if(L.color=me(l),L.backgroundColor=!1,L.fontWeight="400",L.strokeWidth=W()?.35:0,L.strokeColor=ue(l),L.material.transparent=!0,L.material.depthWrite=!1,L.material.alphaTest=.01,L.material.toneMapped=!1,L.textHeight=X.has(l.id)?6.5:5.5,L.center.set(0,.5),L.position.x=m+2,L.position.y=0,i?(L.visible=d,b.set(l.id,{sprite:L,node:l})):t.lod.labelDistance!==void 0&&b.set(l.id,{sprite:L,node:l}),!a||y===!1)return L;let F=new a.Group;return F.add(y),F.add(L),F})},Rn=()=>{let n=t.three;if(!t.use3d||!n||typeof e.linkThreeObject!="function")return;let a=new n.Vector3(0,1,0),i=t.lod.linkResolution??5,l=t.lod.cullDistance,m=t.interaction.incrementalRepaint,f=t.lod.shareLinkResources;if(U.clear(),ye.clear(),Ht.clear(),Rt.clear(),m)for(let y of r.links){let d=G(y.source),g=G(y.target);for(let k of[d,g]){let L=ye.get(k);L?L.push(y):ye.set(k,[y])}}e.linkThreeObject(y=>{let d=Sr[y.kind]*x.edgeScale,g=f?Ft(n,ce(y),ee(y)):new n.MeshBasicMaterial({color:ce(y),transparent:!0,opacity:ee(y),depthWrite:!1,blending:W()?n.AdditiveBlending:n.NormalBlending}),k=f?Hn(n,d,i):new n.CylinderGeometry(d,d,1,i),L=new n.Mesh(k,g);return(l!==void 0||m)&&U.set(y,L),L}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((y,d)=>{let g=d.end.x-d.start.x,k=d.end.y-d.start.y,L=d.end.z-d.start.z,F=Math.sqrt(g*g+k*k+L*L);return y.position.x=(d.start.x+d.end.x)/2,y.position.y=(d.start.y+d.end.y)/2,y.position.z=(d.start.z+d.end.z)/2,y.scale.x=1,y.scale.y=Math.max(F,.01),y.scale.z=1,y.quaternion.setFromUnitVectors(a,new n.Vector3(g,k,L).normalize()),!0})},ut=()=>{!t.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(n=>{let a=I();if(a===null||Ce()||document.hidden)return 0;let i=G(n.source),l=G(n.target);return i===a||l===a?2:0})},Ee=()=>{e.nodeVal(ie),e.nodeColor(A),e.linkColor(ge),e.linkWidth(n=>{let a=G(n.source),i=G(n.target),l=I(),m=x.edgeScale;return l!==null&&(a===l||i===l)?.7*m:n.kind==="wikilink"||n.kind==="external"?.5*m:(n.kind==="tag"?.35:.25)*m}),typeof e.linkOpacity=="function"&&e.linkOpacity(sn),ut(),Rn(),t.use3d||e.nodeCanvasObjectMode(()=>"replace")},Fn=(n,a)=>{let i=an(s,n,a,be.keys()),l=new Set;for(let m of i){let f=be.get(m);if(!f)continue;let y=he.get(m);y&&C(y,A(f));let d=b.get(m);d&&(d.sprite.color=me(f),d.sprite.strokeColor=ue(f),d.sprite.strokeWidth=W()?.35:0,d.sprite.visible=re(f));for(let g of ye.get(m)??[]){if(l.has(g))continue;l.add(g);let k=U.get(g);k&&(t.lod.shareLinkResources&&t.three?k.material=Ft(t.three,ce(g),ee(g)):(k.material.color.set(ce(g)),k.material.opacity=ee(g)))}}},dt=n=>{if(t.interaction.incrementalRepaint&&t.use3d){ut(),Fn(n,I());return}Ee(),t.use3d&&Le()},ft=()=>{let n=t.root.querySelector("[data-graph-legend]");if(!(n instanceof HTMLElement))return;let a=(f,y)=>{let d=document.createElement("span");d.className="graph-landing__legend-item";let g=document.createElement("span");g.className="graph-landing__dot",g.setAttribute("aria-hidden","true"),g.style.background=f;let k=document.createElement("span");return k.textContent=y,d.append(g,k),d},i=t.root.dataset.legendNotes??"Notes",l=t.root.dataset.legendTags??"Tags",m=t.root.dataset.legendLinks??"Links";n.replaceChildren(a(o.current.ink,i),a(o.current.tertiary,l),a(o.current.external,m))},zt=n=>{let a=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="graph-landing__tag-item",i.dataset[n.dataset.key]=n.dataset.value,i.setAttribute("aria-pressed",n.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",n.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=n.dotColor,l.append(f)}l.append(document.createTextNode(n.label));let m=document.createElement("span");return m.className="graph-landing__tag-count",m.textContent=String(n.count),i.append(l,m),a.append(i),a},Ot=()=>{let n=t.root.querySelector("[data-graph-tags]");if(!(n instanceof HTMLElement))return;let a=t.root.querySelector("[data-graph-facet-label]"),i=t.root.querySelector(".graph-landing__tags");if(w.lens==="folder"){let m=t.root.dataset.folderRootLabel??"root",f=new Map;for(let d of r.nodes)d.type==="note"&&f.set(d.folder,(f.get(d.folder)??0)+1);let y=[...f.entries()].sort((d,g)=>g[1]-d[1]);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendFolders??"Folders"),i instanceof HTMLElement&&(i.hidden=y.length===0),n.replaceChildren(...y.map(([d,g])=>zt({dataset:{key:"graphFolder",value:d},pressed:w.focusFolder===d,dotColor:xn(d,o.current),label:d==="root"?m:d,count:g})));return}let l=r.nodes.filter(m=>m.type==="tag").sort((m,f)=>f.degree-m.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendTags??"Tags"),i instanceof HTMLElement&&(i.hidden=l.length===0),n.replaceChildren(...l.map(m=>zt({dataset:{key:"graphTag",value:m.tag},pressed:w.focusTag===m.tag,dotColor:null,label:m.tag,count:m.degree})))},gt=!0,Bt=()=>{r.nodes.length>0&&e.zoomToFit?.(0,80),V=de().len,pe(0),Ye()},Wt=0;e.onEngineStop(()=>{gt&&(Wt=window.requestAnimationFrame(()=>{gt=!1,Bt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Wt));let Ne=(n=!1)=>{e.warmupTicks(n&&t.layout.incrementalWarmup?0:t.layout.warmupTicks??(t.use3d?50:60)),e.graphData(se()),oe(),Ee(),Le(),ft(),Ot(),Mn(t.root,"[data-graph-lens]",w.lens,"data-graph-lens"),z()},zn=n=>{w.lens=n,n!=="tag"&&(w.focusTag=null),n!=="folder"&&(w.focusFolder=null),At(n),Ne()},On=n=>{w.focusTag=w.focusTag===n?null:n,w.focusFolder=null,w.focusTag&&(w.lens="tag",At("tag")),Ne()},Bn=n=>{w.focusFolder=w.focusFolder===n?null:n,w.focusTag=null,w.focusFolder&&(w.lens="folder",At("folder")),Ne()},mt=()=>t.use3d?Xr(o.current):Dt(o.current),Ye=()=>{if(!t.use3d||!t.lod.fog||!t.three||typeof e.scene!="function")return;let n=de().len;e.scene().fog=new t.three.Fog(mt(),n*pr,n*hr)};e.graphData(se()),e.backgroundColor(mt()),e.nodeLabel(n=>n.name),e.nodeRelSize(sr),typeof e.nodeOpacity=="function"&&e.nodeOpacity(lr),typeof e.linkOpacity=="function"&&e.linkOpacity(sn),oe(),Ee();let xe=t.root.querySelector("[data-graph-preview]"),Ke=t.root.querySelector("[data-graph-preview-chip]"),je=t.root.querySelector("[data-graph-preview-title]"),Xe=t.root.querySelector("[data-graph-preview-excerpt]"),Ze=0;window.addCleanup(()=>window.clearTimeout(Ze));let Wn=n=>{if(!(xe instanceof HTMLElement)||!(Ke instanceof HTMLElement)||!(je instanceof HTMLElement)||!(Xe instanceof HTMLElement))return;window.clearTimeout(Ze);let a=t.root.dataset.legendNotes??"Notes",i=t.root.dataset.legendTags??"Tags",l=t.root.dataset.legendLinks??"Links";if(n.type==="tag"){let m=t.root.dataset.previewTagTemplate??"{n} notes";Ke.textContent=i,je.textContent=`#${n.tag}`,Xe.textContent=m.replace("{n}",String(n.degree))}else n.type==="external"?(Ke.textContent=l,je.textContent=n.name,Xe.textContent=n.url):(Ke.textContent=a,je.textContent=n.name,Xe.textContent=n.excerpt);xe.hidden=!1,xe.dataset.visible="true"},Vt=()=>{xe instanceof HTMLElement&&(window.clearTimeout(Ze),Ze=window.setTimeout(()=>{xe.dataset.visible="false",xe.hidden=!0},Ar))};if(e.onNodeHover(n=>{let a=I();te=n?n.id:null,Y===null&&(n?Wn(n):Vt()),dt(a)}),t.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let i=e.controls();i.autoRotate=!1,i.autoRotateSpeed=dr}if(t.three&&typeof e.scene=="function"){let i=t.three,l=new Float32Array(fn*3),m=2654435769,f=()=>(m=Math.imul(m,1664525)+1013904223>>>0,m/4294967296);for(let k=0;k<fn;k+=1){let L=f()*2-1,F=f()*Math.PI*2,R=Math.sqrt(1-L*L),S=Tt.min+Math.pow(f(),.6)*(Tt.max-Tt.min);l[k*3]=R*Math.cos(F)*S,l[k*3+1]=L*S,l[k*3+2]=R*Math.sin(F)*S}let y=new i.BufferGeometry;y.setAttribute("position",new i.Float32BufferAttribute(l,3));let d=new i.PointsMaterial({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,depthWrite:!1,opacity:.6,blending:i.NormalBlending,fog:!1}),g=new i.Points(y,d);e.scene().add(g),window.addCleanup(()=>e.scene?.().remove(g)),M=()=>{let k=W();d.color.set(k?"#dfe7ff":"#8f8f8f"),d.opacity=k?.42:.22,d.size=k?1.4:1.3,d.blending=k?i.AdditiveBlending:i.NormalBlending,d.needsUpdate=!0},M()}e.warmupTicks(t.layout.warmupTicks??50),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),t.bloomPass&&typeof e.postProcessingComposer=="function"&&(t.bloomPass.strength=W()?gn:0,t.bloomPass.radius=mn,t.bloomPass.threshold=pn,e.postProcessingComposer().addPass(t.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ve,un),x.zoom!==1&&pe(0)),Le(),Ye();{let i=0,l=()=>{if(!Ce()&&!document.hidden&&!ne){let m=performance.now()/1e3*Nr;for(let f of fe.values())f.material.opacity=f.base*(1+Cr*Math.sin(m+f.phase))}i=window.requestAnimationFrame(l)};i=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(i))}let n=t.lod.labelDistance,a=t.lod.cullDistance;if((n!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let i=e.cameraPosition.bind(e),l=0,m=()=>{let f=i();if(f&&typeof f.x=="number"&&typeof f.y=="number"&&typeof f.z=="number"){let y=Math.max(1,t.root.clientHeight||window.innerHeight);if(n!==void 0){let d=[];for(let g of b.values()){let k=g.node.x??0,L=g.node.y??0,F=g.node.z??0,R=Math.hypot(f.x-k,f.y-L,f.z-F);if(g.sprite.visible=tn(re(g.node),I()===g.node.id||I()===null&&X.has(g.node.id),R,n),g.sprite.visible){let S=Array.from(g.node.name),H=window.innerWidth<700?24:48,Z=S.length>H?`${S.slice(0,H).join("")}\\u2026`:g.node.name;g.sprite.text!==Z&&(g.sprite.text=Z);let J=e.graph2ScreenCoords?.(k,L,F);if(J&&I()===null){let Kt=Array.from(Z).length*9+12,nt=J.x>window.innerWidth*.6?J.x-Kt:J.x,yt=nt+Kt,$n=d.some(wt=>Math.abs(wt.y-J.y)<22&&nt<wt.right&&yt>wt.left);g.sprite.visible=!$n&&nt>=8&&yt<=window.innerWidth-8,g.sprite.visible&&d.push({left:nt,right:yt,y:J.y})}g.sprite.center.set(J&&J.x>window.innerWidth*.6?1:0,.5);let Re=Math.max(5.5,R/y*11);Math.abs(g.sprite.textHeight-Re)>.5&&(g.sprite.textHeight=Re)}}}if(a!==void 0){let d=I();for(let[g,k]of U){let L=G(g.source),F=G(g.target);if(d!==null&&(L===d||F===d)){k.visible=!0;continue}let R=Math.hypot(f.x-k.position.x,f.y-k.position.y,f.z-k.position.z);k.visible=vt(R,a)!=="dot"}}}l=window.requestAnimationFrame(m)};l=window.requestAnimationFrame(m),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(t.layout.warmupTicks??60),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??180),e.nodeCanvasObject((n,a,i)=>{let l=B(n),m=n.x??0,f=n.y??0;if(a.save(),a.beginPath(),a.arc(m,f,l,0,Math.PI*2),a.fillStyle=A(n),a.fill(),n.isHub&&(a.strokeStyle=u(n.id)?o.current.accent:Be(o.current.accent,ze),a.lineWidth=1.2/i,a.stroke()),re(n)){let y=11.5/i;a.font=`${y}px ${o.current.font}`,a.fillStyle=u(n.id)?o.current.ink:Be(o.current.ink,ze),a.textAlign="center",a.textBaseline="bottom",a.fillText(n.name,m,f-l-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((n,a,i)=>{let l=B(n)+8;i.beginPath(),i.arc(n.x??0,n.y??0,l,0,Math.PI*2),i.fillStyle=a,i.fill()});let Ae=t.root.querySelector("[data-graph-inspect]"),Je=t.root.querySelector("[data-graph-inspect-chip]"),Qe=t.root.querySelector("[data-graph-inspect-title]"),et=t.root.querySelector("[data-graph-inspect-excerpt]"),pt=t.root.querySelector("[data-graph-inspect-tags]"),ht=t.root.querySelector("[data-graph-inspect-connected]"),q=t.root.querySelector("[data-graph-inspect-open]"),Se=n=>{t.root.dataset.railOpen=n?"true":"false";let a=t.root.querySelector("[data-graph-rail-toggle]"),i=t.root.querySelector("[data-graph-rail-scrim]"),l=t.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",n?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",n?"false":"true"),i instanceof HTMLElement&&(i.hidden=!n)},le=()=>{let a=!Ce()&&!document.hidden&&!ne;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),!a)for(let i of fe.values())i.material.opacity=i.base;ut()},Ut=window.matchMedia("(prefers-reduced-motion: reduce)");Ut.addEventListener("change",le),document.addEventListener("visibilitychange",le),window.addCleanup(()=>{Ut.removeEventListener("change",le),document.removeEventListener("visibilitychange",le)}),le();let Vn=n=>{let a=s.get(n.id)??new Set,i=[];for(let l of a){let m=r.nodes.find(f=>f.id===l);m&&i.push(m)}return i.sort((l,m)=>m.degree-l.degree)},Un=n=>{if(!(Ae instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(Qe instanceof HTMLElement)||!(et instanceof HTMLElement)||!(pt instanceof HTMLElement)||!(ht instanceof HTMLElement))return;let a=t.root.dataset.legendNotes??"Notes",i=t.root.dataset.legendTags??"Tags",l=t.root.dataset.legendLinks??"Links",m=t.root.dataset.inspectEmpty??"No direct connections";n.type==="tag"?(Je.textContent=i,Qe.textContent=`#${n.tag}`,et.textContent=(t.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(n.degree))):n.type==="external"?(Je.textContent=l,Qe.textContent=n.name,et.textContent=n.url):(Je.textContent=a,Qe.textContent=n.name,et.textContent=n.excerpt);let f=n.tags.map(d=>{let g=document.createElement("li");return g.textContent=d,g});pt.replaceChildren(...f),pt.hidden=f.length===0;let y=Vn(n).slice(0,12);if(y.length===0){let d=document.createElement("li");d.className="graph-landing__inspect-empty",d.textContent=m,ht.replaceChildren(d)}else ht.replaceChildren(...y.map(d=>{let g=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=d.id;let L=d.type==="tag"?i:d.type==="external"?l:a,F=document.createElement("span");F.textContent=L;let R=document.createElement("strong");return R.textContent=d.type==="tag"?`#${d.tag}`:d.name,k.append(F,R),g.append(k),g}));q instanceof HTMLAnchorElement&&(n.type==="note"&&n.slug.length>0?(q.hidden=!1,q.href=Jr(n.slug).toString(),q.textContent=t.root.dataset.inspectRead??"Read note",q.removeAttribute("target"),q.removeAttribute("rel")):n.type==="external"&&n.url.length>0?(q.hidden=!1,q.href=n.url,q.textContent=t.root.dataset.inspectOpenExternal??"Open",q.target="_blank",q.rel="noopener noreferrer"):(q.hidden=!0,q.removeAttribute("href"),q.removeAttribute("target"),q.removeAttribute("rel"))),Ae.hidden=!1,t.root.dataset.inspecting="true",Se(!1),Vt()},Ie=()=>{let n=I();if(Y=null,Ae instanceof HTMLElement){let a=Ae.contains(document.activeElement);Ae.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}t.root.dataset.inspecting="false",te=null,le(),dt(n)},qn=n=>{let a=I();Y=n.id,le(),Un(n),dt(a)},bt=(n,a=!1)=>{if($(n.id)&&Ne(!0),qn(n),a){_={x:n.x??0,y:n.y??0,z:n.z??0};let i=Ce()?0:450;t.use3d&&e.cameraPosition?(V=Ue,e.cameraPosition({x:_.x+ve.x/x.zoom,y:_.y+ve.y/x.zoom,z:_.z+ve.z/x.zoom},_,i)):e.centerAt?.(_.x,_.y,i)}},tt=!1;e.onNodeClick((n,a)=>{n&&(tt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),bt(n))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ie(),Se(!1)});let ae=t.root.querySelector("#graph-landing-mount");if(ae instanceof HTMLElement){let n=new ResizeObserver(()=>{e.width(ae.clientWidth),e.height(ae.clientHeight),Y===null&&!gt&&Bt()});n.observe(ae),window.addCleanup(()=>n.disconnect());let a=null,i=0,l=d=>{a={x:d.clientX,y:d.clientY},tt=!1,ne=!0,le()},m=(d,g)=>{if(typeof e.graph2ScreenCoords!="function")return null;let k=ae.getBoundingClientRect(),L=d-k.left,F=g-k.top,R=null,S=484;for(let H of se().nodes){if(H.x===void 0||H.y===void 0)continue;let Z=e.graph2ScreenCoords(H.x,H.y,H.z??0),Re=(Z.x-L)**2+(Z.y-F)**2;Re<S&&(S=Re,R=H)}return R},f=d=>{let g=a;a=null,ne=!1,le(),!(!g||(d.clientX-g.x)**2+(d.clientY-g.y)**2>25)&&(window.clearTimeout(i),i=window.setTimeout(()=>{if(tt){tt=!1;return}let L=m(d.clientX,d.clientY);L?bt(L):Ie()},0))},y=()=>{a=null,ne=!1,le()};ae.addEventListener("pointerdown",l,!0),ae.addEventListener("pointerup",f,!0),ae.addEventListener("pointercancel",y,!0),window.addCleanup(()=>{window.clearTimeout(i),ae.removeEventListener("pointerdown",l,!0),ae.removeEventListener("pointerup",f,!0),ae.removeEventListener("pointercancel",y,!0)})}Mn(t.root,"[data-graph-lens]",w.lens,"data-graph-lens"),ft(),Ot(),w.lens!=="all"&&Ne(),t.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let qt=()=>{o.current=Dn(),e.backgroundColor(mt()),Ye(),M(),t.bloomPass&&(t.bloomPass.strength=W()?gn:0,t.bloomPass.radius=mn,t.bloomPass.threshold=pn),Ee(),Le(),ft()};document.addEventListener("themechange",qt),window.addCleanup(()=>document.removeEventListener("themechange",qt));let $t=n=>{let a=n.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Ie();return}if(a.closest("[data-graph-rail-toggle]")){let g=t.root.dataset.railOpen!=="true";g&&Ie(),Se(g);return}if(a.closest("[data-graph-rail-scrim]")){Se(!1);return}let i=a.closest("[data-graph-inspect-id]");if(i instanceof HTMLElement&&i.dataset.graphInspectId){let g=t.fullData.nodes.find(k=>k.id===i.dataset.graphInspectId);g&&bt(g,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&ro(l.dataset.graphLens)){zn(l.dataset.graphLens);return}let m=a.closest("[data-graph-tag]");if(m instanceof HTMLElement&&m.dataset.graphTag){On(m.dataset.graphTag);return}let f=a.closest("[data-graph-folder]");if(f instanceof HTMLElement&&f.dataset.graphFolder){Bn(f.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){z();return}let y=a.closest("[data-graph-labels]");if(y instanceof HTMLButtonElement){w.allLabels=!w.allLabels,y.setAttribute("aria-pressed",w.allLabels?"true":"false");let g=y.dataset.labelShow??"Labels",k=y.dataset.labelHide??"Labels",L=w.allLabels?k:g;y.title=L,y.setAttribute("aria-label",L),Le();return}if(a.closest("[data-graph-theme]")){let g=W()?"light":"dark";document.documentElement.setAttribute("saved-theme",g),localStorage.setItem("theme",g),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${g}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:g}}));return}let d=a.closest("[data-graph-tags-toggle]");if(d instanceof HTMLButtonElement){let g=t.root.querySelector(".graph-landing__tags");if(g instanceof HTMLElement){let k=g.dataset.open==="true";g.dataset.open=k?"false":"true",d.setAttribute("aria-expanded",k?"false":"true")}}},Pe=t.root.querySelector("[data-graph-node-scale]"),_e=t.root.querySelector("[data-graph-edge-scale]");if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(x.nodeScale*100));let n=()=>{x.nodeScale=Number(Pe.value)/100,We(x),oe(),z(),Ee(),t.use3d&&Le()};Pe.addEventListener("input",n),window.addCleanup(()=>Pe.removeEventListener("input",n))}if(_e instanceof HTMLInputElement){_e.value=String(Math.round(x.edgeScale*100));let n=()=>{x.edgeScale=Number(_e.value)/100,We(x),Ee()};_e.addEventListener("input",n),window.addCleanup(()=>_e.removeEventListener("input",n))}let De=t.root.querySelector("[data-graph-hub-gravity]");if(De instanceof HTMLInputElement){De.value=String(Math.round(x.hubGravity*100));let n=()=>{let a=Number(De.value)/100;x.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,We(x),oe(),z()};De.addEventListener("input",n),window.addCleanup(()=>De.removeEventListener("input",n))}let Ge=t.root.querySelector("[data-graph-zoom]");if(Ge instanceof HTMLInputElement){Ge.value=String(Math.round(x.zoom*100));let n=()=>{x.zoom=Number(Ge.value)/100,We(x),pe(200)};Ge.addEventListener("input",n),window.addCleanup(()=>Ge.removeEventListener("input",n))}let He=t.root.querySelector("[data-graph-spread]");if(He instanceof HTMLInputElement){He.value=String(Math.round(x.spread*100));let n=()=>{x.spread=Number(He.value)/100,We(x),oe(),z()};He.addEventListener("input",n),window.addCleanup(()=>He.removeEventListener("input",n))}Se(!1),t.root.addEventListener("click",$t),window.addCleanup(()=>t.root.removeEventListener("click",$t));let Yt=n=>{if(n.key==="Escape"){if(t.root.dataset.railOpen==="true"){Se(!1);return}Ie()}};window.addEventListener("keydown",Yt),window.addCleanup(()=>window.removeEventListener("keydown",Yt))}function co(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function uo(){try{return window.localStorage.getItem(_t)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function It(e){try{if(e){window.localStorage.setItem(_t,"stopped");return}window.localStorage.removeItem(_t)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function fo(e){let r=performance.now(),o=0,t=s=>{let c=Math.min(1,(s-r)/e.durationMs),p=c*c;e.apply(e.from+(e.to-e.from)*p),c<1&&(o=window.requestAnimationFrame(t))};return o=window.requestAnimationFrame(t),()=>{window.cancelAnimationFrame(o)}}function go(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let t=window,s=t.onYouTubeIframeAPIReady;if(t.onYouTubeIframeAPIReady=()=>{typeof s=="function"&&s();let c=t.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=ur,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function mo(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function po(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),t=e.querySelector("[data-graph-music-library-toggle]"),s=e.querySelector("[data-graph-music-library]"),c=e.querySelector("[data-graph-music-track-list]"),p=e.querySelector("[data-graph-music-status]"),E=e.querySelector("[data-graph-music-dock]"),N=e.querySelector("[data-graph-music-now]"),O=e.querySelector("[data-graph-music-now-title]"),$=e.querySelector("[data-graph-music-now-artist]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||!(s instanceof HTMLElement)||!(c instanceof HTMLElement)||!(p instanceof HTMLElement))return;let w=e.dataset.audioStop??"Stop music",te=e.dataset.audioPlay??"Play music",Y=e.dataset.musicLibraryOpen??"Open record collection",x=e.dataset.musicLibraryClose??"Close record collection",ne=e.dataset.musicCurrentTrack??"Current track",_=[];try{let v=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(v))for(let C of v){if(!C||typeof C!="object")continue;let b=C;typeof b.title!="string"||typeof b.url!="string"||b.artist!==void 0&&typeof b.artist!="string"||_.push({title:b.title,...typeof b.artist=="string"?{artist:b.artist}:{},url:b.url})}}catch{}let V=en(_);V.length===0&&V.push({title:"Ambient track",videoId:ln});let K=0,M=null,j=!1,Q=null,z=!uo(),I=!1,X=!1,ie=()=>V[K]??V[0]??{title:"Ambient track",videoId:ln},re=v=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${v}/hqdefault.jpg")`)},B=()=>ie().videoId,u=()=>{c.replaceChildren(),V.forEach((v,C)=>{let b=document.createElement("button");b.type="button",b.className="graph-landing__music-track",b.dataset.graphMusicTrackIndex=String(C),b.setAttribute("aria-current",C===K?"true":"false");let U=document.createElement("img");U.className="graph-landing__music-track-cover",U.src=`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,U.alt="",U.loading="lazy";let he=document.createElement("span");he.className="graph-landing__music-track-copy";let be=document.createElement("span");if(be.className="graph-landing__music-track-title",be.textContent=v.title,he.appendChild(be),v.artist){let ye=document.createElement("span");ye.className="graph-landing__music-track-artist",ye.textContent=v.artist,he.appendChild(ye)}b.append(U,he),c.appendChild(b)}),p.textContent=`${ne}: ${ie().title}`,T()},h=v=>{e.dataset.musicLibraryOpen=v?"true":"false",s.hidden=!v,s.setAttribute("aria-hidden",v?"false":"true"),t.setAttribute("aria-expanded",v?"true":"false"),t.setAttribute("aria-label",v?x:Y),t.title=v?x:Y},T=()=>{let v=r.dataset.playing==="true";E&&(E.dataset.playing=v?"true":"false"),N&&(N.hidden=!v);let C=ie();O&&(O.textContent=C.title),$&&($.textContent=C.artist??"",$.hidden=!C.artist)},P=v=>{r.setAttribute("aria-pressed",v?"true":"false"),r.setAttribute("aria-label",v?w:te),r.title=v?w:te,r.dataset.playing=v?"true":"false",T()},A=()=>{Q&&(Q(),Q=null)},D=v=>{M&&M.setVolume(Math.max(0,Math.min(Oe,v)))},ee=v=>{!z||I||(I=!0,P(!0),v.unMute(),D(0),v.playVideo(),A(),Q=fo({from:0,to:Oe,durationMs:cr,apply:D}))},ce=()=>{z=!1,I=!1,A(),It(!0),M&&(M.mute(),M.pauseVideo(),D(0)),P(!1)},ge=async()=>{if(!M)try{let v=await go();if(M)return;M=mo({api:v,host:o,videoId:B(),onReady:C=>{j=!0,C.mute(),D(0),C.playVideo(),z&&X&&ee(C)},onEnded:C=>{if(!z)return;K=(K+1)%V.length;let b=B();re(b),u(),C.loadVideoById(b),D(I?Oe:0)}})}catch(v){console.error("[graph-landing] ambient audio unavailable",v)}},se=v=>{let C=v.target;if(!(C instanceof Element&&C.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!z||I||co())){if(X=!0,j&&M){ee(M);return}ge()}},me=()=>{if(z&&I){ce();return}if(X=!0,z=!0,It(!1),j&&M){ee(M);return}ge()},ue=v=>{if(!(!Number.isInteger(v)||v<0||v>=V.length)){if(K=v,re(B()),u(),h(!1),z=!0,X=!0,It(!1),j&&M){M.loadVideoById(B()),I?(M.unMute(),M.playVideo(),D(Oe)):ee(M);return}ge()}},de=()=>{let v=e.dataset.musicLibraryOpen!=="true";if(v){e.dataset.railOpen="false";let C=e.querySelector("[data-graph-rail-toggle]"),b=e.querySelector("#graph-landing-rail"),U=e.querySelector("[data-graph-rail-scrim]");C instanceof HTMLButtonElement&&C.setAttribute("aria-expanded","false"),b instanceof HTMLElement&&b.setAttribute("aria-hidden","true"),U instanceof HTMLElement&&(U.hidden=!0)}h(v)},pe=v=>{let C=v.target;if(!(C instanceof Element))return;let b=C.closest("[data-graph-music-track-index]");b instanceof HTMLButtonElement&&ue(Number(b.dataset.graphMusicTrackIndex))},oe=v=>{if(e.dataset.musicLibraryOpen!=="true")return;let C=v.target;(!(C instanceof Element)||!C.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&h(!1)},fe=v=>{v.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(h(!1),v.stopImmediatePropagation())},Te=()=>{if(M){if(document.hidden){A(),M.pauseVideo();return}z&&I&&(M.playVideo(),D(Oe))}};re(B()),P(!1),u(),h(!1),ge(),r.addEventListener("click",me),t.addEventListener("click",de),c.addEventListener("click",pe),e.addEventListener("click",oe),e.addEventListener("pointerdown",se,!0),e.addEventListener("touchstart",se,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",Te),window.addEventListener("keydown",fe),window.addCleanup(()=>{r.removeEventListener("click",me),t.removeEventListener("click",de),c.removeEventListener("click",pe),e.removeEventListener("click",oe),e.removeEventListener("pointerdown",se,!0),e.removeEventListener("touchstart",se,!0),document.removeEventListener("visibilitychange",Te),window.removeEventListener("keydown",fe),A(),M&&(M.pauseVideo(),M.destroy(),M=null)})}async function ho(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(r instanceof HTMLElement&&o instanceof HTMLElement){let b=r.parentElement,U=r.nextSibling;o.insertBefore(r,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{b?.isConnected&&r.isConnected&&b.insertBefore(r,U?.parentNode===b?U:null)})}po(e);let t=e.querySelector("#graph-landing-mount");if(!(t instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let s=e.querySelectorAll("[data-graph-counts]"),c=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",p=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",E=(e.dataset.localePrefixes??"").split(",").map(b=>b.trim()).filter(b=>b.length>0),N=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",O=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",$=e.dataset.graphIndexPath??"",w=we(e.dataset.maxRenderedNodes,b=>Number.parseInt(b,10)),te=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,Y=Number.isFinite(te)?te:1,x=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,ne=e.dataset.graphRenderMode==="3d"?"3d":"auto",_=e.dataset.graphLayoutFreezeAfterWarmup==="true",V=we(e.dataset.graphLayoutWarmupTicks,b=>Number.parseInt(b,10)),K=we(e.dataset.graphLayoutCooldownTicks,b=>Number.parseInt(b,10)),M=we(e.dataset.graphLayoutChargeTheta,Number.parseFloat),j=e.dataset.graphLayoutIncrementalWarmup==="true",Q=we(e.dataset.graphLodLabelDistance,Number.parseFloat),z=we(e.dataset.graphLodCullDistance,Number.parseFloat),I=e.dataset.graphLodFog==="true",X=we(e.dataset.graphLodLinkResolution,b=>Number.parseInt(b,10)),ie=e.dataset.graphInteractionIncrementalRepaint==="true",re=e.dataset.graphLodShareLinkResources==="true",B=!1,u=null,h={current:Dn()},T=()=>{B=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(T);let P=Kr();if(ne==="3d"&&!P){Nt(t,"3D graph unavailable: WebGL is required.");return}let A=ne==="3d"||P,D=eo(A),ee=A?import(tr).then(b=>b.default??null).catch(b=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",b),null)):Promise.resolve(null),ce=A?import(nr).catch(b=>(console.error("[graph-landing] three unavailable; using default node rendering",b),null)):Promise.resolve(null),ge=A?import(rr).then(b=>b.UnrealBloomPass?new b.UnrealBloomPass:null).catch(b=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",b),null)):Promise.resolve(null),se=A?import(er).then(b=>b.forceCollide??null).catch(b=>(console.error("[graph-landing] d3-force-3d collision force unavailable",b),null)):Promise.resolve(null);D.catch(()=>{});let me;try{me=st(O==="graphIndex"?await fetch($).then(b=>b.json()):await fetchData)}catch(b){throw Nt(t,"Graph could not load its index."),b}if(B)return;let ue=$r(Pr(me),{localeId:c,sourceLocale:p,prefixes:E},x),de=nn(ue,w),pe=N.replace("{n}",String(ue.nodes.length)).replace("{m}",String(ue.links.length));for(let b of s)b.textContent=pe;let oe;try{oe=await D}catch(b){throw Nt(t,"Graph could not load. Check your network connection."),b}let[fe,Te,v,C]=await Promise.all([ee,ce,ge,se]);B||(t.replaceChildren(),u=oe(t),u.width(t.clientWidth),u.height(t.clientHeight),t.__graphLanding=u,t.__graphData=de,lo(u,de,h,{use3d:A,root:e,spriteText:fe,bloomPass:v,three:Te,forceCollide:C,fullData:ue,expandHops:Y,layout:{freezeAfterWarmup:_,warmupTicks:V,cooldownTicks:K,chargeTheta:M,incrementalWarmup:j},lod:{labelDistance:Q,cullDistance:z,fog:I,linkResolution:X,shareLinkResources:re},interaction:{incrementalRepaint:ie}}))}var bo="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let t=o.dataset.preferredLocale;if(t)try{localStorage.setItem(bo,t)}catch(s){console.error("[graph-landing] failed to persist preferred-locale",s)}});document.addEventListener("nav",()=>{ho()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: var(--light);\n  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);\n  --graph-surface-strong: var(--light);\n  --graph-border: var(--lightgray);\n  --graph-text: var(--darkgray);\n  --graph-muted: var(--gray);\n  --graph-accent: var(--secondary);\n  --graph-accent-soft: var(--highlight);\n  --graph-external: var(--tertiary);\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.page:has(.graph-landing) .search {\n  position: static;\n  flex: 0 0 44px;\n  width: auto;\n}\n\n.graph-landing__chrome:has(.search-container.active) {\n  z-index: 30;\n}\n\n.page:has(.graph-landing) .search > .search-button {\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.page:has(.graph-landing) .search > .search-button p {\n  display: none;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__music-now {\n  background: linear-gradient(90deg, var(--graph-surface), color-mix(in srgb, var(--graph-surface) 92%, transparent));\n  border: 1px solid var(--graph-border);\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: block;\n  flex: 0 1 auto;\n  max-width: 180px;\n  min-width: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 5px 10px 5px 12px;\n  position: relative;\n  transform: translateX(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease, width 0.25s ease;\n  white-space: nowrap;\n  width: 0;\n}\n\n.graph-landing__music-now::before {\n  background: repeating-radial-gradient(circle at left center, color-mix(in srgb, var(--graph-text) 10%, transparent) 0 1px, transparent 1px 3px);\n  content: "";\n  inset: 0;\n  mask-image: linear-gradient(90deg, #000, transparent 56px);\n  pointer-events: none;\n  position: absolute;\n  -webkit-mask-image: linear-gradient(90deg, #000, transparent 56px);\n}\n\n.graph-landing__music-now[hidden] {\n  display: none;\n}\n\n.graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n  opacity: 1;\n  transform: translateX(0);\n  width: 180px;\n}\n\n.graph-landing__music-now-title,\n.graph-landing__music-now-artist {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-now-title {\n  color: var(--graph-text);\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n\n.graph-landing__music-now-artist {\n  color: var(--graph-muted);\n  font-size: 10px;\n  line-height: 1.3;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--graph-text);\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 1.5rem;\n  left: auto;\n  margin: 0;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  right: 1.5rem;\n  transform: translateY(6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(400px, 100% - 3rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-now {\n    max-width: 120px;\n  }\n  .graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n    width: min(120px, max(0px, 100vw - 180px));\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';
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