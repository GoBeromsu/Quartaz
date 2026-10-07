// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Qt(e,r,o,n){if(![e.x,e.y,e.z,r.x,r.y,r.z,o,n].every(Number.isFinite))return null;let c=r.x-e.x,p=r.y-e.y,L=r.z-e.z,S=Math.hypot(c,p,L),O={x:(e.x+r.x)/2,y:(e.y+r.y)/2,z:(e.z+r.z)/2},U=S-Math.max(0,o)-Math.max(0,n);if(S===0||U<=0)return{start:O,end:O,length:0};let k=c/S,j=p/S,q=L/S,E=Math.max(0,o),K=Math.max(0,n);return{start:{x:e.x+k*E,y:e.y+j*E,z:e.z+q*E},end:{x:r.x-k*K,y:r.y-j*K,z:r.z-q*K},length:U}}function en(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function ot(e,r,o){let n=Number.isFinite(e)?Math.max(0,e):0,s=Number.isFinite(r)?Math.max(0,r):0,c=Number.isFinite(o)?Math.max(s,o):s;if(c===s)return s>0?.5:0;let p=Math.min(c,Math.max(s,n));return(Math.sqrt(p)-Math.sqrt(s))/(Math.sqrt(c)-Math.sqrt(s))}function tn(e,r,o){return ot(Math.max(e,r),0,o)}function ze(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function nn(e){return 1+ze(e,0,1)*1.2}function rn(e,r){let o=ze(e,0,1),n=ze(r,0,2);return Math.max(.5,1-o*.24*n)}function on(e,r){let o=ze(e,0,1),n=ze(r,0,2);return Math.min(1.6,1+o*.3*n)}var er=/^[A-Za-z0-9_-]{6,20}$/,tr=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),nr=new Set(["youtu.be","www.youtu.be"]);function rt(e){return e&&er.test(e)?e:void 0}function rr(e){if(!e)return;let r=e.trim(),o=rt(r);if(o)return o;let n;try{n=new URL(r)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if(tr.has(n.hostname)){if(n.pathname==="/watch")return rt(n.searchParams.get("v"));let s=n.pathname.split("/").filter(Boolean);if(s.length===2&&(s[0]==="shorts"||s[0]==="embed"))return rt(s[1])}if(nr.has(n.hostname)){let s=n.pathname.split("/").filter(Boolean);if(s.length===1)return rt(s[0])}}}function an(e){let r=[],o=new Set;for(let n of e){let s=n.title.trim(),c=rr(n.url);if(!s||!c||o.has(c))continue;o.add(c);let p=n.artist?.trim();p?r.push({title:s,artist:p,videoId:c}):r.push({title:s,videoId:c})}return r}function F(e){return typeof e=="string"?e:e.id}function Tt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function sn(e,r,o,n){return r||e&&Tt(o,n)==="full"}function at(e,r,o){let n=e.get(r);if(n)return n;let s=o();return e.set(r,s),s}function we(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function ln(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let n=[...e.nodes].sort((p,L)=>L.degree!==p.degree?L.degree-p.degree:p.id<L.id?-1:p.id>L.id?1:0).slice(0,Math.max(0,r)),s=new Set(n.map(p=>p.id)),c=e.links.filter(p=>{let L=F(p.source),S=F(p.target);return s.has(L)&&s.has(S)});return{nodes:n,links:c}}function cn(e,r,o,n){let s=new Set,c=Math.max(0,Math.floor(n));if(c<=0)return s;let p=new Set([o]),L=new Set([o]);for(let S=0;S<c;S+=1){let O=new Set;for(let U of L)for(let k of e.get(U)??[])p.has(k)||(p.add(k),O.add(k),r.has(k)||s.add(k));L=O}return s}var or=2.399963229728653,vt=20;function un(e,r,o){let n=e.x??0,s=e.y??0,c=e.z??0,p=r*or;return{x:n+vt*Math.cos(p),y:s+vt*Math.sin(p),z:o?c+vt*Math.sin(p*.5):c}}function dn(e,r,o,n){if(r===o)return new Set;if(r===null||o===null)return new Set(n);let s=new Set([r,o]);for(let c of e.get(r)??[])s.add(c);for(let c of e.get(o)??[])s.add(c);return s}var dt="0.179.1",ar="https://esm.sh/force-graph@1.51.4",ir=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${dt}`,sr="https://esm.sh/d3-force-3d@3.0.6",lr=`https://esm.sh/three-spritetext@1.9.2?deps=three@${dt}`,cr=`https://esm.sh/three@${dt}`,ur=`https://esm.sh/three@${dt}/examples/jsm/postprocessing/UnrealBloomPass.js`,dr=8,fr=10;var Ve=1,Dt=4,gr=.05,mr=2.6,pr=1,fn=1,Fe=.18,Dn="graph-landing:lens",Gn="graph-landing:tune",Gt="graph-landing:ambient-audio",gn="UDVtMYqUAyw",Oe=12,hr=28e3,br="https://www.youtube.com/iframe_api",yr=.18,mn=1.25,wr=1.25,kr=1.15,vr=.55,ke={x:330,y:235,z:565},pn={x:0,y:0,z:0},We=Math.hypot(ke.x,ke.y,ke.z),Tr=.52,xr=300/We,Er=1600/We,hn=3.6,Lr=10.5,bn=1.6,Sr=4.6,yn=2.6,wn=64,kn=24,it="#f2f3f4",xt="#f4c3d0",vn=1400,Et={min:1300,max:2800},Mr=.55,Cr=.16,Nr=1,Ar=6,Ir={wikilink:.9,tag:.6,external:.75,cooc:.08,folder:.08},Pr="#a8b0c2",Tn={min:80,max:200},xn={min:40,max:110},En={min:160,max:280},Ln={min:90,max:170},Sn=220,Mn=2,_r=.06,Dr=.8,Gr=350,Lt={min:-170,max:-320},St={min:96,max:156},Mt={min:170,max:340};function Rr(e){return qe(e-.5,0,1)}function ct(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Ct(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Hr(e){let r=[];for(let o of Object.values(e)){let n=ct(o);if(!en(n.filePath))continue;let s=typeof n.slug=="string"?n.slug:"";if(s.length===0)continue;let c=n.multilingual,p=c&&typeof c=="object"?c:void 0;r.push({slug:s,title:typeof n.title=="string"?n.title:s,links:Ct(n.links),tags:Ct(n.tags),externalLinks:Ct(n.externalLinks),content:typeof n.excerpt=="string"?n.excerpt:typeof n.content=="string"?n.content:"",multilingual:p})}return r}function zr(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=Sn?r:`${r.slice(0,Sn).trimEnd()}\\u2026`}function Ue(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function Cn(e){return Ue(e)/(2*Math.PI)}function st(e,r,o){let n=Ue(e),s=Math.acos(2*Cn(`${e}:phi`)-1),c=r+(o-r)*Cn(`${e}:r`);return{x:c*Math.sin(s)*Math.cos(n),y:c*Math.sin(s)*Math.sin(n),z:c*Math.cos(s)}}function Rn(e){return e==="index"||e.endsWith("/index")}function Hn(e){return e==="tags"||e.startsWith("tags/")}function Fr(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function zn(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Nt(e,r){return e.multilingual?.locale?e.multilingual.locale:zn(e.slug,r).locale}function Or(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${zn(e.slug,r).permalink}`}function Br(e,r){let o=e.find(n=>Nt(n,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(n=>Nt(n,r.prefixes)===r.sourceLocale)??e.find(n=>Nt(n,r.prefixes)===void 0)}function qe(e,r,o){return Math.min(o,Math.max(r,e))}function Nn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Vr(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Ht(e){return Vr(e).trim().toLowerCase()}function Wr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Ur(e){let r=e.trim();return r.length===0||Wr(r)||Hn(r)||Rn(r)?!0:Ht(r).length===0}function qr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function Fn(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function $r(e,r){let o=Fn(e);return o===null?!1:!r.includes(new URL(o).hostname)}function An(e){return`external:${e}`}function Yr(e,r){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),s=o.pathname;return(r.get(n)??0)>1&&s.length>1?`${n}${s}`:n}function Kr(e){let r=new Map,o=new Map;for(let n of e){let s=Ht(n.slug);s.length>0&&!r.has(s)&&r.set(s,n.slug);let c=n.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,n.slug);let p=c.replace(/\\s+/g,"-");p.length>0&&!o.has(p)&&o.set(p,n.slug)}return{byBasename:r,byTitle:o}}function jr(e,r,o){if(r.has(e))return e;let n=Ht(e),s=o.byBasename.get(n);if(s)return s;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return c||null}function Xr(e,r){return e.length===0?"":[...e].sort((n,s)=>(r.get(s)??0)-(r.get(n)??0))[0]??""}function Zr(e,r,o=void 0){let n=e.filter(u=>!Rn(u.slug)&&!Hn(u.slug)&&!Fr(u)),s=new Map;for(let u of n){let y=Or(u,r.prefixes),T=s.get(y)??[];T.push(u),s.set(y,T)}let c=[];for(let u of s.values()){let y=Br(u,r);y&&c.push(y)}let p=new Set(c.map(u=>u.slug)),L=Kr(c),S=new Map,O=[],U=new Set,k=new Map,j=u=>{S.set(u,(S.get(u)??0)+1)},q=(u,y,T)=>u<y?`${u}|${y}|${T}`:`${y}|${u}|${T}`,E=(u,y,T,R)=>{let A=q(u,y,T);return U.has(A)?!1:(U.add(A),O.push({source:u,target:y,kind:T}),R&&(j(u),j(y)),!0)};for(let u of c)for(let y of u.links){if(Ur(y))continue;let T=jr(y,p,L);T!==null&&T!==u.slug&&E(u.slug,T,"wikilink",!0)}let K=qr(),z=new Set;for(let u of c)for(let y of u.externalLinks){let T=Fn(y);T===null||!$r(T,K)||(z.add(T),E(u.slug,An(T),"external",!0))}let $=new Map;for(let u of z){let y=new URL(u).hostname.replace(/^www\\./,"");$.set(y,($.get(y)??0)+1)}let Z=new Set,C=new Map;for(let u of c)for(let y of u.tags){k.set(y,(k.get(y)??0)+1);let T=`tag:${y}`;Z.add(T),E(u.slug,T,"tag",!0);let R=C.get(y)??[];R.push(u.slug),C.set(y,R)}if(o!==!1){let u=o?.maxTagsPerNote,y=o?.maxEdges,T=0;e:for(let R of c)if(!(R.tags.length<2)&&!(u!==void 0&&R.tags.length>u))for(let A=0;A<R.tags.length;A+=1)for(let H=A+1;H<R.tags.length;H+=1){if(y!==void 0&&T>=y)break e;E(`tag:${R.tags[A]}`,`tag:${R.tags[H]}`,"cooc",!1)&&(T+=1)}}let Q=new Map;for(let u of c){let y=Nn(u.slug);if(y==="root")continue;let T=Q.get(y)??[];T.push(u.slug),Q.set(y,T)}for(let u of Q.values()){if(u.length<2)continue;let y=[...u].sort();for(let T=0;T<y.length;T+=1){let R=y[(T+1)%y.length],A=y[(T+Mn)%y.length],H=y[T];H===void 0||R===void 0||(H!==R&&!U.has(q(H,R,"wikilink"))&&E(H,R,"folder",!1),y.length>Mn+1&&A!==void 0&&H!==A&&!U.has(q(H,A,"wikilink"))&&E(H,A,"folder",!1))}}let ee=[...S.values()],V=ee.length>0?Math.min(...ee):0,P=ee.length>0?Math.max(...ee):0,J=u=>{let y=ot(S.get(u)??0,V,P);return Ve+y*(Dt-Ve)},ae=[...c].sort((u,y)=>(S.get(y.slug)??0)-(S.get(u.slug)??0)),te=new Set(ae.filter(u=>(S.get(u.slug)??0)>0).slice(0,dr).map(u=>u.slug)),W=c.map(u=>{let y=te.has(u.slug),T=y?st(u.slug,xn.min,xn.max):st(u.slug,Tn.min,Tn.max);return{id:u.slug,name:u.title,type:"note",val:J(u.slug),degree:S.get(u.slug)??0,isHub:y,tag:"",slug:u.slug,url:"",folder:Nn(u.slug),tags:u.tags,dominantTag:Xr(u.tags,k),excerpt:zr(u.content),phase:Ue(u.slug),x:T.x,y:T.y,z:T.z}});for(let u of z){let y=An(u),T=st(y,En.min,En.max);W.push({id:y,name:Yr(u,$),type:"external",val:J(y)*vr,degree:S.get(y)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:Ue(y),x:T.x,y:T.y,z:T.z})}for(let u of Z){let y=u.slice(4),T=st(u,Ln.min,Ln.max);W.push({id:u,name:y,type:"tag",val:qe(J(u)*.7,Ve,Dt),degree:S.get(u)??0,isHub:!1,tag:y,slug:`tags/${y}`,url:"",folder:"tag",tags:[y],dominantTag:y,excerpt:"",phase:Ue(u),x:T.x,y:T.y,z:T.z})}return{nodes:W,links:O}}function At(e){let r=new Map,o=(n,s)=>{let c=r.get(n)??new Set;c.add(s),r.set(n,c)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let s=F(n.source),c=F(n.target);o(s,c),o(c,s)}return r}function Se(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function On(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Se("--graph-backdrop","#ffffff"),ink:Se("--graph-text","#0f0f0f"),accent:Se("--graph-accent","#a52142"),tertiary:Se("--graph-external","#c75b75"),gray:Se("--graph-muted","#737373"),external:Se("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Me(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Jr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Qr(){return Jr()}function I(){return document.documentElement.getAttribute("saved-theme")==="dark"}function ut(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function Ce(e,r){let o=ut(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function Rt(e,r,o){let n=ut(e),s=ut(r);if(!n||!s)return e;let c=(p,L)=>Math.round(p+(L-p)*o);return`rgb(${c(n.r,s.r)}, ${c(n.g,s.g)}, ${c(n.b,s.b)})`}function lt(e){return I()?Rt(e.bg,"#000000",.82):e.bg}function Bn(e){let r=ut(e);if(!r)return e;let o=n=>{let s=n/255,c=s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);return Math.ceil(c*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function eo(e){return I()?Bn(lt(e)):"rgba(0, 0, 0, 0)"}function Vn(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function In(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:Vn(e,[r.accent,r.tertiary,r.ink,r.gray])}function to(e,r){return e.length===0?r.ink:Vn(e,[r.accent,r.tertiary])}function no(e){let r=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let s=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(s,window.location.origin)}function ro(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function It(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function oo(e){let o=await import(e?ir:ar);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):ro(o)}function ao(){try{let e=sessionStorage.getItem(Dn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function io(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Gn);if(!r)return e;let o=ct(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,s=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,p=typeof o.spread=="number"?o.spread:e.spread,L=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:s,zoom:c,spread:p,hubGravity:L}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function Be(e){try{sessionStorage.setItem(Gn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function Pt(e){try{sessionStorage.setItem(Dn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function so(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function lo(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function co(e,r){return e.type==="note"&&e.folder===r}function Pn(e,r){let o=F(r),n=e.find(s=>s.id===o);return!n||n.type!=="note"?null:n.folder}function uo(e,r,o){let n=new Map;if(r==="folder"){let s=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return s.forEach((c,p)=>{let L=Math.PI*2*p/Math.max(s.length,1),S={x:Math.cos(L)*o,y:Math.sin(L)*o,z:0};for(let O of e.nodes)O.type==="note"&&O.folder===c&&n.set(O.id,S)}),n}if(r==="tag"){let s=e.nodes.filter(p=>p.type==="tag"),c=new Map;s.forEach((p,L)=>{let S=Math.PI*2*L/Math.max(s.length,1);c.set(p.tag,{x:Math.cos(S)*o,y:Math.sin(S)*o,z:0})});for(let p of e.nodes)if(p.type==="tag"){let L=c.get(p.tag);L&&n.set(p.id,L)}else if(p.dominantTag.length>0){let L=c.get(p.dominantTag);L&&n.set(p.id,L)}}return n}function fo(e,r){let o=[],n=s=>{let c=r*s;for(let p of o){let L=e(p);L&&(p.vx=(p.vx??0)+(L.x-(p.x??0))*c,p.vy=(p.vy??0)+(L.y-(p.y??0))*c,p.vz=(p.vz??0)+(L.z-(p.z??0))*c)}};return n.initialize=s=>{o=s},n}function _n(e,r,o,n){for(let s of e.querySelectorAll(r)){if(!(s instanceof HTMLElement))continue;let c=s.getAttribute(n);s.setAttribute("aria-pressed",c===o?"true":"false")}}function go(e,r,o,n){let s=At(r.links),c=(t,a,i)=>t<a?`${t}|${a}|${i}`:`${a}|${t}|${i}`,p=new Map(n.fullData.nodes.map(t=>[t.id,t])),L=new Map,S=new Set,O=new Set;n.fullData!==r&&(L=At(n.fullData.links),S=new Set(r.nodes.map(t=>t.id)),O=new Set(r.links.map(t=>c(F(t.source),F(t.target),t.kind))));let U=t=>{if(n.fullData===r)return!1;let a=cn(L,S,t,n.expandHops);if(!S.has(t)&&p.has(t)&&a.add(t),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let i=n.layout.incrementalWarmup?p.get(t):void 0,l=0;for(let m of a){let f=p.get(m);if(f){if(i&&f.id!==i.id){let h=un(i,l,n.use3d);f.x=h.x,f.y=h.y,f.z=h.z,f.vx=f.vy=f.vz=0,l+=1}r.nodes.push(f),S.add(m)}}for(let m of n.fullData.links){let f=F(m.source),h=F(m.target);if(!S.has(f)||!S.has(h))continue;let d=c(f,h,m.kind);O.has(d)||(O.add(d),r.links.push(m))}return s=At(r.links),!0},k={lens:ao(),allLabels:!1,focusTag:null,focusFolder:null},j=null,q=null,E=io(),K=!1,z=pn,$=We,Z=0,C=()=>{},Q=t=>ot(t.degree,0,Z),ee=t=>{let a=.1*Math.sin(t.phase*3.7);return t.type==="tag"?.7:t.type==="external"?.45+a:qe(.58+.42*Math.pow(Q(t),.6)+a,.48,1)},V=()=>{e.cooldownTicks(n.layout.freezeAfterWarmup?90:n.layout.cooldownTicks??200),e.d3ReheatSimulation()},P=()=>q??j,J=new Set(r.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,fr).map(t=>t.id)),ae=t=>{let a=t.val;return t.isHub&&(a*=mn),k.lens==="tag"&&t.type==="tag"&&(a*=wr),k.focusTag&&t.id===`tag:${k.focusTag}`&&(a*=kr),a},te=t=>{let a=P();return a===t.id?!0:a!==null?s.get(a)?.has(t.id)??!1:k.allLabels||J.has(t.id)},W=t=>{let a=Dt*mn,i=qe((ae(t)-Ve)/(a-Ve),0,1);return(hn+i*(Lr-hn))*E.nodeScale},u=t=>{let a=P();if(a!==null)return a===t||(s.get(a)?.has(t)??!1);if(k.focusTag===null&&k.focusFolder===null)return!0;let i=r.nodes.find(l=>l.id===t);return i?k.focusFolder!==null?co(i,k.focusFolder):k.focusTag!==null&&lo(i,k.focusTag):!1},y=t=>t.type==="external"?o.current.external:k.lens==="tag"?t.type==="tag"?o.current.tertiary:to(t.dominantTag,o.current):k.lens==="folder"?t.type==="tag"?o.current.tertiary:In(t.folder,o.current):k.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,T=t=>t.isHub?xt:it,R=(t,a)=>{let i=p.get(t)?.degree??0,l=p.get(a)?.degree??0;return Math.log1p(Math.min(i,l))/Math.log1p(Math.max(1,Z))},A=t=>{let a=P();if(a!==null&&(a===t.id||(s.get(a)?.has(t.id)??!1)))return I()?"#ffffff":o.current.accent;let i=I()?T(t):y(t);return u(t.id)?I()?i:t.isHub?o.current.accent:i:Rt(i,lt(o.current),1-Fe)},H=t=>W(t)*yn*(kn/wn),ce=t=>{let a=I();return t==="wikilink"?a?.52:.72:t==="external"?a?.42:.62:t==="tag"?a?.38:.55:0},ue=t=>{if(t.kind==="cooc"||t.kind==="folder")return t.kind==="cooc"&&k.lens==="tag"||t.kind==="folder"&&k.lens==="folder"?.06:0;let a=F(t.source),i=F(t.target),l=P();if(l!==null&&(a===l||i===l))return I()?.72:.95;let m=R(a,i),f=ce(t.kind)*(I()?.45+.55*m:.6+.4*m);return(l!==null||k.focusTag!==null||k.focusFolder!==null)&&(!u(a)||!u(i))?f*Fe:f},ne=t=>{let a=F(t.source),i=F(t.target),l=P(),m=I()?Pr:o.current.gray;if(l!==null&&(a===l||i===l))return I()?it:o.current.accent;if(I()){let f=p.get(a),h=p.get(i);if(f&&h)return Rt(T(f),T(h),.5)}return m},he=t=>Ce(ne(t),ue(t)),de=()=>({nodes:r.nodes,links:r.links}),ie=t=>{let a=I()?"rgba(255, 255, 255, 1)":o.current.ink;return u(t.id)?a:Ce(a,Fe)},fe=t=>{if(!I()){let a=o.current.bg;return u(t.id)?Ce(a,.9):Ce(a,.28)}return u(t.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)"},be=()=>{let t=e.controls?.().target;if(t&&(z={x:t.x,y:t.y,z:t.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let i={x:a.x-z.x,y:a.y-z.y,z:a.z-z.z},l=Math.hypot(i.x,i.y,i.z);if(l>1)return{dir:i,len:l}}}return{dir:ke,len:We}},ge=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=$/qe(E.zoom,.4,2.5),{dir:i,len:l}=be(),m=a/l;e.cameraPosition({x:z.x+i.x*m,y:z.y+i.y*m,z:z.z+i.z*m},z,Me()?0:t),Ye();return}typeof e.zoom=="function"&&e.zoom(E.zoom,Me()?0:t)},se=()=>{let t=Rr(E.spread),a=Lt.min+t*(Lt.max-Lt.min),i=St.min+t*(St.max-St.min),l=new Map(r.nodes.map(x=>[x.id,x.degree])),m=Math.max(0,...l.values());Z=m;let f=Q,h=x=>tn(l.get(F(x.source))??0,l.get(F(x.target))??0,m),d=e.d3Force("charge");d?.strength&&d.strength(x=>a*nn(f(x))),d?.theta&&n.layout.chargeTheta!==void 0&&d.theta(n.layout.chargeTheta);let g=e.d3Force("link");g?.distance&&g.distance(x=>{let G=rn(h(x),E.hubGravity);return k.lens==="tag"&&x.kind==="tag"?i*.72*G:x.kind==="cooc"||x.kind==="folder"?i:i*G}),g?.strength&&g.strength(x=>{if(x.kind==="cooc"||x.kind==="folder")return .015;let G=on(h(x),E.hubGravity);if(k.lens==="tag"&&x.kind==="tag")return .3*G;if(k.lens==="folder"){let _=Pn(r.nodes,x.source),oe=Pn(r.nodes,x.target);if(_!==null&&_===oe)return .16*G}return x.kind==="tag"?.14*G:(x.kind==="external"?.16:.24)*G}),n.forceCollide&&e.d3Force("collision",n.forceCollide(x=>W(x)+Ar).strength(.85).iterations(1));let b=e.d3Force("center");b?.strength&&b.strength(gr);let M=Mt.min+t*(Mt.max-Mt.min),D=uo(r,k.lens,M),B=k.lens==="folder"||k.lens==="tag"?.08:0;e.d3Force("cluster",fo(x=>D.get(x.id)??null,B)),n.use3d&&e.d3Force("flattenZ",null)},me=new Map,v=new Map,N=(t,a)=>at(v,a?"dark":"light",()=>{let i=wn,l=document.createElement("canvas");l.width=l.height=i;let m=l.getContext("2d");if(m)if(a){let f=m.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.22,"rgba(255,255,255,0.96)"),f.addColorStop(.36,"rgba(255,255,255,0.42)"),f.addColorStop(.62,"rgba(255,255,255,0.1)"),f.addColorStop(1,"rgba(255,255,255,0)"),m.fillStyle=f,m.fillRect(0,0,i,i)}else{let f=kn,h=m.createRadialGradient(32,32,0,32,32,f);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.9,"rgba(255,255,255,1)"),h.addColorStop(1,"rgba(255,255,255,0)"),m.fillStyle=h,m.fillRect(0,0,i,i)}return new t.CanvasTexture(l)}),w=(t,a,i)=>{t.color.set(A(a)),I()&&t.color.multiplyScalar(bn)},Y=new Map,pe=new Map,ve=new Map,ye=new Map,$e=new Map,zt=new Map,Ft=new Map,Wn=(t,a,i)=>{let l=`${a}|${i}`;return at(zt,l,()=>new t.CylinderGeometry(a,a,1,i))},Ot=(t,a,i)=>{let l=`${a}|${i}`;return at(Ft,l,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:i,depthWrite:!1,blending:I()?t.AdditiveBlending:t.NormalBlending}))},Te=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,a=n.three,i=n.interaction.incrementalRepaint;if(me.clear(),Y.clear(),ve.clear(),ye.clear(),i)for(let l of r.nodes)ye.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let m=W(l),f=!1;if(a){let D=I(),B=D?ee(l):1,x=new a.SpriteMaterial({map:N(a,D),color:"#ffffff",transparent:!0,depthWrite:!1,blending:D?a.AdditiveBlending:a.NormalBlending,opacity:B});x.color.set(A(l)),D&&x.color.multiplyScalar(bn),D&&me.set(l.id,{material:x,base:B,phase:l.phase}),i&&ve.set(l.id,x);let G=new a.Sprite(x);D||(G.renderOrder=1);let _=m*(D?Sr:yn);G.scale.x=_,G.scale.y=_,G.scale.z=1,f=G}let h=te(l);if(!t||!i&&!h)return f;let d=Array.from(l.name),g=window.innerWidth<700?24:48,b=new t(d.length>g?`${d.slice(0,g).join("")}\\u2026`:l.name);if(b.color=ie(l),b.backgroundColor=!1,b.fontWeight=I()?"400":"500",b.strokeWidth=I()?.35:.22,b.strokeColor=fe(l),b.material.transparent=!0,b.material.depthWrite=!1,b.material.alphaTest=.01,b.material.toneMapped=!1,b.textHeight=J.has(l.id)?6.5:5.5,b.center.set(0,.5),b.position.x=m+2,b.position.y=0,i?(b.visible=h,Y.set(l.id,{sprite:b,node:l})):n.lod.labelDistance!==void 0&&Y.set(l.id,{sprite:b,node:l}),!a||f===!1)return b;let M=new a.Group;return M.add(f),M.add(b),M})},Un=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),i=n.lod.linkResolution??5,l=n.lod.cullDistance,m=n.interaction.incrementalRepaint,f=n.lod.shareLinkResources;if(pe.clear(),$e.clear(),zt.clear(),Ft.clear(),m)for(let h of r.links){let d=F(h.source),g=F(h.target);for(let b of[d,g]){let M=$e.get(b);M?M.push(h):$e.set(b,[h])}}e.linkThreeObject(h=>{let d=Ir[h.kind]*E.edgeScale,g=f?Ot(t,ne(h),ue(h)):new t.MeshBasicMaterial({color:ne(h),transparent:!0,opacity:ue(h),depthWrite:!1,blending:I()?t.AdditiveBlending:t.NormalBlending}),b=f?Wn(t,d,i):new t.CylinderGeometry(d,d,1,i),M=new t.Mesh(b,g);return(l!==void 0||m)&&pe.set(h,M),M}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((h,d,g)=>{let b=d.end.x-d.start.x,M=d.end.y-d.start.y,D=d.end.z-d.start.z,B=Math.sqrt(b*b+M*M+D*D);if(!I()){let x=typeof g.source=="string"?p.get(g.source):g.source,G=typeof g.target=="string"?p.get(g.target):g.target,_=x&&G?Qt(d.start,d.end,H(x),H(G)):null;return _?(h.position.x=(_.start.x+_.end.x)/2,h.position.y=(_.start.y+_.end.y)/2,h.position.z=(_.start.z+_.end.z)/2,h.scale.x=1,h.scale.y=_.length,h.scale.z=1,_.length>0&&h.quaternion.setFromUnitVectors(a,new t.Vector3(_.end.x-_.start.x,_.end.y-_.start.y,_.end.z-_.start.z).normalize()),!0):(h.scale.y=0,!0)}return h.position.x=(d.start.x+d.end.x)/2,h.position.y=(d.start.y+d.end.y)/2,h.position.z=(d.start.z+d.end.z)/2,h.scale.x=1,h.scale.y=Math.max(B,.01),h.scale.z=1,h.quaternion.setFromUnitVectors(a,new t.Vector3(b,M,D).normalize()),!0})},ft=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=P();if(a===null||Me()||document.hidden)return 0;let i=F(t.source),l=F(t.target);return i===a||l===a?2:0})},xe=()=>{e.nodeVal(ae),e.nodeColor(A),e.linkColor(he),e.linkWidth(t=>{let a=F(t.source),i=F(t.target),l=P(),m=E.edgeScale*(I()?1:1.8);return l!==null&&(a===l||i===l)?.7*m:t.kind==="wikilink"||t.kind==="external"?.5*m:(t.kind==="tag"?.35:.25)*m}),typeof e.linkOpacity=="function"&&e.linkOpacity(fn),ft(),Un(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},qn=(t,a)=>{let i=dn(s,t,a,ye.keys()),l=new Set;for(let m of i){let f=ye.get(m);if(!f)continue;let h=ve.get(m);h&&n.three&&w(h,f,n.three);let d=Y.get(m);d&&(d.sprite.color=ie(f),d.sprite.strokeColor=fe(f),d.sprite.strokeWidth=I()?.35:.22,d.sprite.visible=te(f));for(let g of $e.get(m)??[]){if(l.has(g))continue;l.add(g);let b=pe.get(g);b&&(n.lod.shareLinkResources&&n.three?b.material=Ot(n.three,ne(g),ue(g)):(b.material.color.set(ne(g)),b.material.opacity=ue(g)))}}},gt=t=>{if(n.interaction.incrementalRepaint&&n.use3d){ft(),qn(t,P());return}xe(),n.use3d&&Te()},mt=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(f,h)=>{let d=document.createElement("span");d.className="graph-landing__legend-item";let g=document.createElement("span");g.className="graph-landing__dot",g.setAttribute("aria-hidden","true"),g.style.background=f;let b=document.createElement("span");return b.textContent=h,d.append(g,b),d},i=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",m=n.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,i),a(o.current.tertiary,l),a(o.current.external,m))},Bt=t=>{let a=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="graph-landing__tag-item",i.dataset[t.dataset.key]=t.dataset.value,i.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=t.dotColor,l.append(f)}l.append(document.createTextNode(t.label));let m=document.createElement("span");return m.className="graph-landing__tag-count",m.textContent=String(t.count),i.append(l,m),a.append(i),a},Vt=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),i=n.root.querySelector(".graph-landing__tags");if(k.lens==="folder"){let m=n.root.dataset.folderRootLabel??"root",f=new Map;for(let d of r.nodes)d.type==="note"&&f.set(d.folder,(f.get(d.folder)??0)+1);let h=[...f.entries()].sort((d,g)=>g[1]-d[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),i instanceof HTMLElement&&(i.hidden=h.length===0),t.replaceChildren(...h.map(([d,g])=>Bt({dataset:{key:"graphFolder",value:d},pressed:k.focusFolder===d,dotColor:In(d,o.current),label:d==="root"?m:d,count:g})));return}let l=r.nodes.filter(m=>m.type==="tag").sort((m,f)=>f.degree-m.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),i instanceof HTMLElement&&(i.hidden=l.length===0),t.replaceChildren(...l.map(m=>Bt({dataset:{key:"graphTag",value:m.tag},pressed:k.focusTag===m.tag,dotColor:null,label:m.tag,count:m.degree})))},pt=!0,Wt=()=>{r.nodes.length>0&&e.zoomToFit?.(0,80),$=be().len*Tr,ge(0),Ye()},Ut=0;e.onEngineStop(()=>{pt&&(Ut=window.requestAnimationFrame(()=>{pt=!1,Wt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Ut));let Ne=(t=!1)=>{e.warmupTicks(t&&n.layout.incrementalWarmup?0:n.layout.warmupTicks??(n.use3d?50:60)),e.graphData(de()),se(),xe(),Te(),mt(),Vt(),_n(n.root,"[data-graph-lens]",k.lens,"data-graph-lens"),V()},$n=t=>{k.lens=t,t!=="tag"&&(k.focusTag=null),t!=="folder"&&(k.focusFolder=null),Pt(t),Ne()},Yn=t=>{k.focusTag=k.focusTag===t?null:t,k.focusFolder=null,k.focusTag&&(k.lens="tag",Pt("tag")),Ne()},Kn=t=>{k.focusFolder=k.focusFolder===t?null:t,k.focusTag=null,k.focusFolder&&(k.lens="folder",Pt("folder")),Ne()},qt=()=>{if(!n.bloomPass||typeof e.postProcessingComposer!="function")return;let t=e.postProcessingComposer(),a=t.passes.includes(n.bloomPass);I()?(n.bloomPass.strength=Mr,n.bloomPass.radius=Cr,n.bloomPass.threshold=Nr,a||t.addPass(n.bloomPass)):a&&t.removePass(n.bloomPass)},$t=()=>n.use3d?eo(o.current):lt(o.current),Ye=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let t=be().len;e.scene().fog=new n.three.Fog(Bn(lt(o.current)),t*xr,t*Er)};e.graphData(de()),e.backgroundColor($t()),e.nodeLabel(()=>""),e.nodeRelSize(mr),typeof e.nodeOpacity=="function"&&e.nodeOpacity(pr),typeof e.linkOpacity=="function"&&e.linkOpacity(fn),se(),xe();let Ee=n.root.querySelector("[data-graph-preview]"),Ke=n.root.querySelector("[data-graph-preview-chip]"),je=n.root.querySelector("[data-graph-preview-title]"),Xe=n.root.querySelector("[data-graph-preview-excerpt]"),Ze=0;window.addCleanup(()=>window.clearTimeout(Ze));let jn=t=>{if(!(Ee instanceof HTMLElement)||!(Ke instanceof HTMLElement)||!(je instanceof HTMLElement)||!(Xe instanceof HTMLElement))return;window.clearTimeout(Ze);let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links";if(t.type==="tag"){let m=n.root.dataset.previewTagTemplate??"{n} notes";Ke.textContent=i,je.textContent=`#${t.tag}`,Xe.textContent=m.replace("{n}",String(t.degree))}else t.type==="external"?(Ke.textContent=l,je.textContent=t.name,Xe.textContent=t.url):(Ke.textContent=a,je.textContent=t.name,Xe.textContent=t.excerpt);Ee.hidden=!1,Ee.dataset.visible="true"},Yt=()=>{Ee instanceof HTMLElement&&(window.clearTimeout(Ze),Ze=window.setTimeout(()=>{Ee.dataset.visible="false",Ee.hidden=!0},Gr))};if(e.onNodeHover(t=>{let a=P();j=t?t.id:null,q===null&&(t?jn(t):Yt()),gt(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let i=e.controls();i.autoRotate=!1,i.autoRotateSpeed=yr}if(n.three&&typeof e.scene=="function"){let i=n.three,l=new Float32Array(vn*3),m=2654435769,f=()=>(m=Math.imul(m,1664525)+1013904223>>>0,m/4294967296);for(let b=0;b<vn;b+=1){let M=f()*2-1,D=f()*Math.PI*2,B=Math.sqrt(1-M*M),x=Et.min+Math.pow(f(),.6)*(Et.max-Et.min);l[b*3]=B*Math.cos(D)*x,l[b*3+1]=M*x,l[b*3+2]=B*Math.sin(D)*x}let h=new i.BufferGeometry;h.setAttribute("position",new i.Float32BufferAttribute(l,3));let d=new i.PointsMaterial({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,depthWrite:!1,opacity:.6,blending:i.NormalBlending,fog:!1}),g=new i.Points(h,d);e.scene().add(g),window.addCleanup(()=>e.scene?.().remove(g)),C=()=>{let b=I();g.visible=b,d.color.set(it),d.opacity=.42,d.size=1.4,d.blending=i.AdditiveBlending,d.needsUpdate=!0},C()}e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>I()?it:o.current.accent),qt(),typeof e.cameraPosition=="function"&&(e.cameraPosition(ke,pn),E.zoom!==1&&ge(0)),Te(),Ye();{let i=0,l=()=>{if(!Me()&&!document.hidden&&!K){let m=performance.now()/1e3*Dr;for(let f of me.values())f.material.opacity=f.base*(1+_r*Math.sin(m+f.phase))}i=window.requestAnimationFrame(l)};i=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(i))}let t=n.lod.labelDistance,a=n.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let i=e.cameraPosition.bind(e),l=0,m=()=>{let f=i();if(f&&typeof f.x=="number"&&typeof f.y=="number"&&typeof f.z=="number"){let h=Math.max(1,n.root.clientHeight||window.innerHeight);if(t!==void 0){let d=[];for(let g of Y.values()){let b=g.node.x??0,M=g.node.y??0,D=g.node.z??0,B=Math.hypot(f.x-b,f.y-M,f.z-D);if(g.sprite.visible=sn(te(g.node),P()===g.node.id||P()===null&&J.has(g.node.id),B,t),g.sprite.visible){let x=Array.from(g.node.name),G=window.innerWidth<700?24:48,_=x.length>G?`${x.slice(0,G).join("")}\\u2026`:g.node.name;g.sprite.text!==_&&(g.sprite.text=_);let oe=e.graph2ScreenCoords?.(b,M,D);if(oe&&P()===null){let Jt=Array.from(_).length*9+12,nt=oe.x>window.innerWidth*.6?oe.x-Jt:oe.x,wt=nt+Jt,Qn=d.some(kt=>Math.abs(kt.y-oe.y)<22&&nt<kt.right&&wt>kt.left);g.sprite.visible=!Qn&&nt>=8&&wt<=window.innerWidth-8,g.sprite.visible&&d.push({left:nt,right:wt,y:oe.y})}g.sprite.center.set(oe&&oe.x>window.innerWidth*.6?1:0,.5);let He=Math.max(5.5,B/h*11);Math.abs(g.sprite.textHeight-He)>.5&&(g.sprite.textHeight=He)}}}if(a!==void 0){let d=P();for(let[g,b]of pe){let M=F(g.source),D=F(g.target);if(d!==null&&(M===d||D===d)){b.visible=!0;continue}let B=Math.hypot(f.x-b.position.x,f.y-b.position.y,f.z-b.position.z);b.visible=Tt(B,a)!=="dot"}}}l=window.requestAnimationFrame(m)};l=window.requestAnimationFrame(m),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,i)=>{let l=W(t),m=t.x??0,f=t.y??0;if(a.save(),a.beginPath(),a.arc(m,f,l,0,Math.PI*2),a.fillStyle=A(t),a.fill(),I()&&t.isHub&&(a.strokeStyle=u(t.id)?xt:Ce(xt,Fe),a.lineWidth=1.2/i,a.stroke()),te(t)){a.globalAlpha=1;let h=11.5/i;a.font=`${h}px ${o.current.font}`,a.fillStyle=I()?u(t.id)?o.current.ink:Ce(o.current.ink,Fe):ie(t),a.textAlign="center",a.textBaseline="bottom";let d=f-l-6;I()||(a.strokeStyle=fe(t),a.lineWidth=2.5/i,a.lineJoin="round",a.strokeText(t.name,m,d)),a.fillText(t.name,m,d)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,i)=>{let l=W(t)+8;i.beginPath(),i.arc(t.x??0,t.y??0,l,0,Math.PI*2),i.fillStyle=a,i.fill()});let Ae=n.root.querySelector("[data-graph-inspect]"),Je=n.root.querySelector("[data-graph-inspect-chip]"),Qe=n.root.querySelector("[data-graph-inspect-title]"),et=n.root.querySelector("[data-graph-inspect-excerpt]"),ht=n.root.querySelector("[data-graph-inspect-tags]"),bt=n.root.querySelector("[data-graph-inspect-connected]"),X=n.root.querySelector("[data-graph-inspect-open]"),Le=t=>{n.root.dataset.railOpen=t?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),i=n.root.querySelector("[data-graph-rail-scrim]"),l=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",t?"false":"true"),i instanceof HTMLElement&&(i.hidden=!t)},le=()=>{let a=!Me()&&!document.hidden&&!K;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),!a)for(let i of me.values())i.material.opacity=i.base;ft()},Kt=window.matchMedia("(prefers-reduced-motion: reduce)");Kt.addEventListener("change",le),document.addEventListener("visibilitychange",le),window.addCleanup(()=>{Kt.removeEventListener("change",le),document.removeEventListener("visibilitychange",le)}),le();let Xn=t=>{let a=s.get(t.id)??new Set,i=[];for(let l of a){let m=r.nodes.find(f=>f.id===l);m&&i.push(m)}return i.sort((l,m)=>m.degree-l.degree)},Zn=t=>{if(!(Ae instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(Qe instanceof HTMLElement)||!(et instanceof HTMLElement)||!(ht instanceof HTMLElement)||!(bt instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links",m=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Je.textContent=i,Qe.textContent=`#${t.tag}`,et.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Je.textContent=l,Qe.textContent=t.name,et.textContent=t.url):(Je.textContent=a,Qe.textContent=t.name,et.textContent=t.excerpt);let f=t.tags.map(d=>{let g=document.createElement("li");return g.textContent=d,g});ht.replaceChildren(...f),ht.hidden=f.length===0;let h=Xn(t).slice(0,12);if(h.length===0){let d=document.createElement("li");d.className="graph-landing__inspect-empty",d.textContent=m,bt.replaceChildren(d)}else bt.replaceChildren(...h.map(d=>{let g=document.createElement("li"),b=document.createElement("button");b.type="button",b.className="graph-landing__inspect-link",b.dataset.graphInspectId=d.id;let M=d.type==="tag"?i:d.type==="external"?l:a,D=document.createElement("span");D.textContent=M;let B=document.createElement("strong");return B.textContent=d.type==="tag"?`#${d.tag}`:d.name,b.append(D,B),g.append(b),g}));X instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(X.hidden=!1,X.href=no(t.slug).toString(),X.textContent=n.root.dataset.inspectRead??"Read note",X.removeAttribute("target"),X.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(X.hidden=!1,X.href=t.url,X.textContent=n.root.dataset.inspectOpenExternal??"Open",X.target="_blank",X.rel="noopener noreferrer"):(X.hidden=!0,X.removeAttribute("href"),X.removeAttribute("target"),X.removeAttribute("rel"))),Ae.hidden=!1,n.root.dataset.inspecting="true",Le(!1),Yt()},Ie=()=>{let t=P();if(q=null,Ae instanceof HTMLElement){let a=Ae.contains(document.activeElement);Ae.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}n.root.dataset.inspecting="false",j=null,le(),gt(t)},Jn=t=>{let a=P();q=t.id,le(),Zn(t),gt(a)},yt=(t,a=!1)=>{if(U(t.id)&&Ne(!0),Jn(t),a){z={x:t.x??0,y:t.y??0,z:t.z??0};let i=Me()?0:450;n.use3d&&e.cameraPosition?($=We,e.cameraPosition({x:z.x+ke.x/E.zoom,y:z.y+ke.y/E.zoom,z:z.z+ke.z/E.zoom},z,i)):e.centerAt?.(z.x,z.y,i)}},tt=!1;e.onNodeClick((t,a)=>{t&&(tt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),yt(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ie(),Le(!1)});let re=n.root.querySelector("#graph-landing-mount");if(re instanceof HTMLElement){let t=new ResizeObserver(()=>{e.width(re.clientWidth),e.height(re.clientHeight),q===null&&!pt&&Wt()});t.observe(re),window.addCleanup(()=>t.disconnect());let a=null,i=0,l=d=>{a={x:d.clientX,y:d.clientY},tt=!1,K=!0,le()},m=(d,g)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=re.getBoundingClientRect(),M=d-b.left,D=g-b.top,B=null,x=484;for(let G of de().nodes){if(G.x===void 0||G.y===void 0)continue;let _=e.graph2ScreenCoords(G.x,G.y,G.z??0),He=(_.x-M)**2+(_.y-D)**2;He<x&&(x=He,B=G)}return B},f=d=>{let g=a;a=null,K=!1,le(),!(!g||(d.clientX-g.x)**2+(d.clientY-g.y)**2>25)&&(window.clearTimeout(i),i=window.setTimeout(()=>{if(tt){tt=!1;return}let M=m(d.clientX,d.clientY);M?yt(M):Ie()},0))},h=()=>{a=null,K=!1,le()};re.addEventListener("pointerdown",l,!0),re.addEventListener("pointerup",f,!0),re.addEventListener("pointercancel",h,!0),window.addCleanup(()=>{window.clearTimeout(i),re.removeEventListener("pointerdown",l,!0),re.removeEventListener("pointerup",f,!0),re.removeEventListener("pointercancel",h,!0)})}_n(n.root,"[data-graph-lens]",k.lens,"data-graph-lens"),mt(),Vt(),k.lens!=="all"&&Ne(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let jt=()=>{o.current=On(),e.backgroundColor($t()),Ye(),C(),qt(),xe(),Te(),mt()};document.addEventListener("themechange",jt),window.addCleanup(()=>document.removeEventListener("themechange",jt));let Xt=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Ie();return}if(a.closest("[data-graph-rail-toggle]")){let g=n.root.dataset.railOpen!=="true";g&&Ie(),Le(g);return}if(a.closest("[data-graph-rail-scrim]")){Le(!1);return}let i=a.closest("[data-graph-inspect-id]");if(i instanceof HTMLElement&&i.dataset.graphInspectId){let g=n.fullData.nodes.find(b=>b.id===i.dataset.graphInspectId);g&&yt(g,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&so(l.dataset.graphLens)){$n(l.dataset.graphLens);return}let m=a.closest("[data-graph-tag]");if(m instanceof HTMLElement&&m.dataset.graphTag){Yn(m.dataset.graphTag);return}let f=a.closest("[data-graph-folder]");if(f instanceof HTMLElement&&f.dataset.graphFolder){Kn(f.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){V();return}let h=a.closest("[data-graph-labels]");if(h instanceof HTMLButtonElement){k.allLabels=!k.allLabels,h.setAttribute("aria-pressed",k.allLabels?"true":"false");let g=h.dataset.labelShow??"Labels",b=h.dataset.labelHide??"Labels",M=k.allLabels?b:g;h.title=M,h.setAttribute("aria-label",M),Te();return}if(a.closest("[data-graph-theme]")){let g=I()?"light":"dark";document.documentElement.setAttribute("saved-theme",g),localStorage.setItem("theme",g),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${g}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:g}}));return}let d=a.closest("[data-graph-tags-toggle]");if(d instanceof HTMLButtonElement){let g=n.root.querySelector(".graph-landing__tags");if(g instanceof HTMLElement){let b=g.dataset.open==="true";g.dataset.open=b?"false":"true",d.setAttribute("aria-expanded",b?"false":"true")}}},Pe=n.root.querySelector("[data-graph-node-scale]"),_e=n.root.querySelector("[data-graph-edge-scale]");if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(E.nodeScale*100));let t=()=>{E.nodeScale=Number(Pe.value)/100,Be(E),se(),V(),xe(),n.use3d&&Te()};Pe.addEventListener("input",t),window.addCleanup(()=>Pe.removeEventListener("input",t))}if(_e instanceof HTMLInputElement){_e.value=String(Math.round(E.edgeScale*100));let t=()=>{E.edgeScale=Number(_e.value)/100,Be(E),xe()};_e.addEventListener("input",t),window.addCleanup(()=>_e.removeEventListener("input",t))}let De=n.root.querySelector("[data-graph-hub-gravity]");if(De instanceof HTMLInputElement){De.value=String(Math.round(E.hubGravity*100));let t=()=>{let a=Number(De.value)/100;E.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Be(E),se(),V()};De.addEventListener("input",t),window.addCleanup(()=>De.removeEventListener("input",t))}let Ge=n.root.querySelector("[data-graph-zoom]");if(Ge instanceof HTMLInputElement){Ge.value=String(Math.round(E.zoom*100));let t=()=>{E.zoom=Number(Ge.value)/100,Be(E),ge(200)};Ge.addEventListener("input",t),window.addCleanup(()=>Ge.removeEventListener("input",t))}let Re=n.root.querySelector("[data-graph-spread]");if(Re instanceof HTMLInputElement){Re.value=String(Math.round(E.spread*100));let t=()=>{E.spread=Number(Re.value)/100,Be(E),se(),V()};Re.addEventListener("input",t),window.addCleanup(()=>Re.removeEventListener("input",t))}Le(!1),n.root.addEventListener("click",Xt),window.addCleanup(()=>n.root.removeEventListener("click",Xt));let Zt=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){Le(!1);return}Ie()}};window.addEventListener("keydown",Zt),window.addCleanup(()=>window.removeEventListener("keydown",Zt))}function mo(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function po(){try{return window.localStorage.getItem(Gt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function _t(e){try{if(e){window.localStorage.setItem(Gt,"stopped");return}window.localStorage.removeItem(Gt)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function ho(e){let r=performance.now(),o=0,n=s=>{let c=Math.min(1,(s-r)/e.durationMs),p=c*c;e.apply(e.from+(e.to-e.from)*p),c<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function bo(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let n=window,s=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof s=="function"&&s();let c=n.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=br,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function yo(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function wo(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),s=e.querySelector("[data-graph-music-library]"),c=e.querySelector("[data-graph-music-track-list]"),p=e.querySelector("[data-graph-music-status]"),L=e.querySelector("[data-graph-music-dock]"),S=e.querySelector("[data-graph-music-now]"),O=e.querySelector("[data-graph-music-now-title]"),U=e.querySelector("[data-graph-music-now-artist]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(s instanceof HTMLElement)||!(c instanceof HTMLElement)||!(p instanceof HTMLElement))return;let k=e.dataset.audioStop??"Stop music",j=e.dataset.audioPlay??"Play music",q=e.dataset.musicLibraryOpen??"Open record collection",E=e.dataset.musicLibraryClose??"Close record collection",K=e.dataset.musicCurrentTrack??"Current track",z=[];try{let v=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(v))for(let N of v){if(!N||typeof N!="object")continue;let w=N;typeof w.title!="string"||typeof w.url!="string"||w.artist!==void 0&&typeof w.artist!="string"||z.push({title:w.title,...typeof w.artist=="string"?{artist:w.artist}:{},url:w.url})}}catch{}let $=an(z);$.length===0&&$.push({title:"Ambient track",videoId:gn});let Z=0,C=null,Q=!1,ee=null,V=!po(),P=!1,J=!1,ae=()=>$[Z]??$[0]??{title:"Ambient track",videoId:gn},te=v=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${v}/hqdefault.jpg")`)},W=()=>ae().videoId,u=()=>{c.replaceChildren(),$.forEach((v,N)=>{let w=document.createElement("button");w.type="button",w.className="graph-landing__music-track",w.dataset.graphMusicTrackIndex=String(N),w.setAttribute("aria-current",N===Z?"true":"false");let Y=document.createElement("img");Y.className="graph-landing__music-track-cover",Y.src=`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,Y.alt="",Y.loading="lazy";let pe=document.createElement("span");pe.className="graph-landing__music-track-copy";let ve=document.createElement("span");if(ve.className="graph-landing__music-track-title",ve.textContent=v.title,pe.appendChild(ve),v.artist){let ye=document.createElement("span");ye.className="graph-landing__music-track-artist",ye.textContent=v.artist,pe.appendChild(ye)}w.append(Y,pe),c.appendChild(w)}),p.textContent=`${K}: ${ae().title}`,T()},y=v=>{e.dataset.musicLibraryOpen=v?"true":"false",s.hidden=!v,s.setAttribute("aria-hidden",v?"false":"true"),n.setAttribute("aria-expanded",v?"true":"false"),n.setAttribute("aria-label",v?E:q),n.title=v?E:q},T=()=>{let v=r.dataset.playing==="true";L&&(L.dataset.playing=v?"true":"false"),S&&(S.hidden=!v);let N=ae();O&&(O.textContent=N.title),U&&(U.textContent=N.artist??"",U.hidden=!N.artist)},R=v=>{r.setAttribute("aria-pressed",v?"true":"false"),r.setAttribute("aria-label",v?k:j),r.title=v?k:j,r.dataset.playing=v?"true":"false",T()},A=()=>{ee&&(ee(),ee=null)},H=v=>{C&&C.setVolume(Math.max(0,Math.min(Oe,v)))},ce=v=>{!V||P||(P=!0,R(!0),v.unMute(),H(0),v.playVideo(),A(),ee=ho({from:0,to:Oe,durationMs:hr,apply:H}))},ue=()=>{V=!1,P=!1,A(),_t(!0),C&&(C.mute(),C.pauseVideo(),H(0)),R(!1)},ne=async()=>{if(!C)try{let v=await bo();if(C)return;C=yo({api:v,host:o,videoId:W(),onReady:N=>{Q=!0,N.mute(),H(0),N.playVideo(),V&&J&&ce(N)},onEnded:N=>{if(!V)return;Z=(Z+1)%$.length;let w=W();te(w),u(),N.loadVideoById(w),H(P?Oe:0)}})}catch(v){console.error("[graph-landing] ambient audio unavailable",v)}},he=v=>{let N=v.target;if(!(N instanceof Element&&N.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!V||P||mo())){if(J=!0,Q&&C){ce(C);return}ne()}},de=()=>{if(V&&P){ue();return}if(J=!0,V=!0,_t(!1),Q&&C){ce(C);return}ne()},ie=v=>{if(!(!Number.isInteger(v)||v<0||v>=$.length)){if(Z=v,te(W()),u(),y(!1),V=!0,J=!0,_t(!1),Q&&C){C.loadVideoById(W()),P?(C.unMute(),C.playVideo(),H(Oe)):ce(C);return}ne()}},fe=()=>{let v=e.dataset.musicLibraryOpen!=="true";if(v){e.dataset.railOpen="false";let N=e.querySelector("[data-graph-rail-toggle]"),w=e.querySelector("#graph-landing-rail"),Y=e.querySelector("[data-graph-rail-scrim]");N instanceof HTMLButtonElement&&N.setAttribute("aria-expanded","false"),w instanceof HTMLElement&&w.setAttribute("aria-hidden","true"),Y instanceof HTMLElement&&(Y.hidden=!0)}y(v)},be=v=>{let N=v.target;if(!(N instanceof Element))return;let w=N.closest("[data-graph-music-track-index]");w instanceof HTMLButtonElement&&ie(Number(w.dataset.graphMusicTrackIndex))},ge=v=>{if(e.dataset.musicLibraryOpen!=="true")return;let N=v.target;(!(N instanceof Element)||!N.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&y(!1)},se=v=>{v.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(y(!1),v.stopImmediatePropagation())},me=()=>{if(C){if(document.hidden){A(),C.pauseVideo();return}V&&P&&(C.playVideo(),H(Oe))}};te(W()),R(!1),u(),y(!1),ne(),r.addEventListener("click",de),n.addEventListener("click",fe),c.addEventListener("click",be),e.addEventListener("click",ge),e.addEventListener("pointerdown",he,!0),e.addEventListener("touchstart",he,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",me),window.addEventListener("keydown",se),window.addCleanup(()=>{r.removeEventListener("click",de),n.removeEventListener("click",fe),c.removeEventListener("click",be),e.removeEventListener("click",ge),e.removeEventListener("pointerdown",he,!0),e.removeEventListener("touchstart",he,!0),document.removeEventListener("visibilitychange",me),window.removeEventListener("keydown",se),A(),C&&(C.pauseVideo(),C.destroy(),C=null)})}async function ko(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(r instanceof HTMLElement&&o instanceof HTMLElement){let w=r.parentElement,Y=r.nextSibling;o.insertBefore(r,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{w?.isConnected&&r.isConnected&&w.insertBefore(r,Y?.parentNode===w?Y:null)})}wo(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let s=e.querySelectorAll("[data-graph-counts]"),c=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",p=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",L=(e.dataset.localePrefixes??"").split(",").map(w=>w.trim()).filter(w=>w.length>0),S=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",O=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",U=e.dataset.graphIndexPath??"",k=we(e.dataset.maxRenderedNodes,w=>Number.parseInt(w,10)),j=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,q=Number.isFinite(j)?j:1,E=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,K=e.dataset.graphRenderMode==="3d"?"3d":"auto",z=e.dataset.graphLayoutFreezeAfterWarmup==="true",$=we(e.dataset.graphLayoutWarmupTicks,w=>Number.parseInt(w,10)),Z=we(e.dataset.graphLayoutCooldownTicks,w=>Number.parseInt(w,10)),C=we(e.dataset.graphLayoutChargeTheta,Number.parseFloat),Q=e.dataset.graphLayoutIncrementalWarmup==="true",ee=we(e.dataset.graphLodLabelDistance,Number.parseFloat),V=we(e.dataset.graphLodCullDistance,Number.parseFloat),P=e.dataset.graphLodFog==="true",J=we(e.dataset.graphLodLinkResolution,w=>Number.parseInt(w,10)),ae=e.dataset.graphInteractionIncrementalRepaint==="true",te=e.dataset.graphLodShareLinkResources==="true",W=!1,u=null,y={current:On()},T=()=>{W=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(T);let R=Qr();if(K==="3d"&&!R){It(n,"3D graph unavailable: WebGL is required.");return}let A=K==="3d"||R,H=oo(A),ce=A?import(lr).then(w=>w.default??null).catch(w=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",w),null)):Promise.resolve(null),ue=A?import(cr).catch(w=>(console.error("[graph-landing] three unavailable; using default node rendering",w),null)):Promise.resolve(null),ne=A?import(ur).then(w=>w.UnrealBloomPass?new w.UnrealBloomPass:null).catch(w=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",w),null)):Promise.resolve(null),he=A?import(sr).then(w=>w.forceCollide??null).catch(w=>(console.error("[graph-landing] d3-force-3d collision force unavailable",w),null)):Promise.resolve(null);H.catch(()=>{});let de;try{de=ct(O==="graphIndex"?await fetch(U).then(w=>w.json()):await fetchData)}catch(w){throw It(n,"Graph could not load its index."),w}if(W)return;let ie=Zr(Hr(de),{localeId:c,sourceLocale:p,prefixes:L},E),fe=ln(ie,k),be=S.replace("{n}",String(ie.nodes.length)).replace("{m}",String(ie.links.length));for(let w of s)w.textContent=be;let ge;try{ge=await H}catch(w){throw It(n,"Graph could not load. Check your network connection."),w}let[se,me,v,N]=await Promise.all([ce,ue,ne,he]);W||(n.replaceChildren(),u=ge(n),u.width(n.clientWidth),u.height(n.clientHeight),n.__graphLanding=u,n.__graphData=fe,go(u,fe,y,{use3d:A,root:e,spriteText:se,bloomPass:v,three:me,forceCollide:N,fullData:ie,expandHops:q,layout:{freezeAfterWarmup:z,warmupTicks:$,cooldownTicks:Z,chargeTheta:C,incrementalWarmup:Q},lod:{labelDistance:ee,cullDistance:V,fog:P,linkResolution:J,shareLinkResources:te},interaction:{incrementalRepaint:ae}}))}var vo="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(vo,n)}catch(s){console.error("[graph-landing] failed to persist preferred-locale",s)}});document.addEventListener("nav",()=>{ko()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: var(--light);\n  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);\n  --graph-surface-strong: var(--light);\n  --graph-border: var(--lightgray);\n  --graph-text: var(--darkgray);\n  --graph-muted: var(--gray);\n  --graph-accent: var(--secondary);\n  --graph-accent-soft: var(--highlight);\n  --graph-external: var(--tertiary);\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.page:has(.graph-landing) .search {\n  position: static;\n  flex: 0 0 44px;\n  width: auto;\n}\n\n.graph-landing__chrome:has(.search-container.active) {\n  z-index: 30;\n}\n\n.page:has(.graph-landing) .search > .search-button {\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.page:has(.graph-landing) .search > .search-button p {\n  display: none;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__music-now {\n  background: linear-gradient(90deg, var(--graph-surface), color-mix(in srgb, var(--graph-surface) 92%, transparent));\n  border: 1px solid var(--graph-border);\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: block;\n  flex: 0 1 auto;\n  max-width: 180px;\n  min-width: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 5px 10px 5px 12px;\n  position: relative;\n  transform: translateX(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease, width 0.25s ease;\n  white-space: nowrap;\n  width: 0;\n}\n\n.graph-landing__music-now::before {\n  background: repeating-radial-gradient(circle at left center, color-mix(in srgb, var(--graph-text) 10%, transparent) 0 1px, transparent 1px 3px);\n  content: "";\n  inset: 0;\n  mask-image: linear-gradient(90deg, #000, transparent 56px);\n  pointer-events: none;\n  position: absolute;\n  -webkit-mask-image: linear-gradient(90deg, #000, transparent 56px);\n}\n\n.graph-landing__music-now[hidden] {\n  display: none;\n}\n\n.graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n  opacity: 1;\n  transform: translateX(0);\n  width: 180px;\n}\n\n.graph-landing__music-now-title,\n.graph-landing__music-now-artist {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-now-title {\n  color: var(--graph-text);\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n\n.graph-landing__music-now-artist {\n  color: var(--graph-muted);\n  font-size: 10px;\n  line-height: 1.3;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--graph-text);\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 1.5rem;\n  left: auto;\n  margin: 0;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  right: 1.5rem;\n  transform: translateY(6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(400px, 100% - 3rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  :root:not([saved-theme=dark]) .graph-landing__hero::before {\n    background-position: 60% center;\n  }\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-now {\n    max-width: 120px;\n  }\n  .graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n    width: min(120px, max(0px, 100vw - 180px));\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';
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