// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Yt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function nt(e,r,o){let t=Number.isFinite(e)?Math.max(0,e):0,s=Number.isFinite(r)?Math.max(0,r):0,c=Number.isFinite(o)?Math.max(s,o):s;if(c===s)return s>0?.5:0;let h=Math.min(c,Math.max(s,t));return(Math.sqrt(h)-Math.sqrt(s))/(Math.sqrt(c)-Math.sqrt(s))}function Kt(e,r,o){return nt(Math.max(e,r),0,o)}function Ge(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function jt(e){return 1+Ge(e,0,1)*1.2}function Xt(e,r){let o=Ge(e,0,1),t=Ge(r,0,2);return Math.max(.5,1-o*.24*t)}function Zt(e,r){let o=Ge(e,0,1),t=Ge(r,0,2);return Math.min(1.6,1+o*.3*t)}var qn=/^[A-Za-z0-9_-]{6,20}$/,$n=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Yn=new Set(["youtu.be","www.youtu.be"]);function tt(e){return e&&qn.test(e)?e:void 0}function Kn(e){if(!e)return;let r=e.trim(),o=tt(r);if(o)return o;let t;try{t=new URL(r)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:"||t.username||t.password||t.port)){if($n.has(t.hostname)){if(t.pathname==="/watch")return tt(t.searchParams.get("v"));let s=t.pathname.split("/").filter(Boolean);if(s.length===2&&(s[0]==="shorts"||s[0]==="embed"))return tt(s[1])}if(Yn.has(t.hostname)){let s=t.pathname.split("/").filter(Boolean);if(s.length===1)return tt(s[0])}}}function Jt(e){let r=[],o=new Set;for(let t of e){let s=t.title.trim(),c=Kn(t.url);if(!s||!c||o.has(c))continue;o.add(c);let h=t.artist?.trim();h?r.push({title:s,artist:h,videoId:c}):r.push({title:s,videoId:c})}return r}function G(e){return typeof e=="string"?e:e.id}function wt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function Qt(e,r,o,t){return r||e&&wt(o,t)==="full"}function rt(e,r,o){let t=e.get(r);if(t)return t;let s=o();return e.set(r,s),s}function ge(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function en(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let t=[...e.nodes].sort((h,x)=>x.degree!==h.degree?x.degree-h.degree:h.id<x.id?-1:h.id>x.id?1:0).slice(0,Math.max(0,r)),s=new Set(t.map(h=>h.id)),c=e.links.filter(h=>{let x=G(h.source),C=G(h.target);return s.has(x)&&s.has(C)});return{nodes:t,links:c}}function tn(e,r,o,t){let s=new Set,c=Math.max(0,Math.floor(t));if(c<=0)return s;let h=new Set([o]),x=new Set([o]);for(let C=0;C<c;C+=1){let B=new Set;for(let Z of x)for(let y of e.get(Z)??[])h.has(y)||(h.add(y),B.add(y),r.has(y)||s.add(y));x=B}return s}var jn=2.399963229728653,yt=20;function nn(e,r,o){let t=e.x??0,s=e.y??0,c=e.z??0,h=r*jn;return{x:t+yt*Math.cos(h),y:s+yt*Math.sin(h),z:o?c+yt*Math.sin(h*.5):c}}function rn(e,r,o,t){if(r===o)return new Set;if(r===null||o===null)return new Set(t);let s=new Set([r,o]);for(let c of e.get(r)??[])s.add(c);for(let c of e.get(o)??[])s.add(c);return s}var st="0.179.1",Xn="https://esm.sh/force-graph@1.51.4",Zn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${st}`,Jn="https://esm.sh/d3-force-3d@3.0.6",Qn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${st}`,er=`https://esm.sh/three@${st}`,tr=`https://esm.sh/three@${st}/examples/jsm/postprocessing/UnrealBloomPass.js`,nr=8,rr=6;var Oe=1,At=4,or=.05,ar=2.6,ir=1,on=1,Re=.18,Sn="graph-landing:lens",Mn="graph-landing:tune",It="graph-landing:ambient-audio",an="UDVtMYqUAyw",He=12,sr=28e3,lr="https://www.youtube.com/iframe_api",cr=.18,sn=1.25,ur=1.25,dr=1.15,fr=.55,me={x:330,y:235,z:565},ln={x:0,y:0,z:0},Be=Math.hypot(me.x,me.y,me.z),gr=300/Be,mr=1600/Be,cn=2.2,pr=6.4,hr=1.6,br=6.2,yr=2.1,wr="#c9dcff",kr="#ffe6bf",vr="#fff1d4",Tr="#f0c48a",un=1400,kt={min:1300,max:2800},dn=.55,fn=.16,gn=1,Lr=6,Er={wikilink:.65,tag:.45,external:.55,cooc:.08,folder:.08},xr="#a8b0c2",mn={min:80,max:200},pn={min:40,max:110},hn={min:160,max:280},bn={min:90,max:170},yn=220,wn=2,Sr=.06,Mr=.8,Cr=350,vt={min:-170,max:-320},Tt={min:96,max:156},Lt={min:170,max:340};function Nr(e){return We(e-.5,0,1)}function at(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Et(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Ar(e){let r=[];for(let o of Object.values(e)){let t=at(o);if(!Yt(t.filePath))continue;let s=typeof t.slug=="string"?t.slug:"";if(s.length===0)continue;let c=t.multilingual,h=c&&typeof c=="object"?c:void 0;r.push({slug:s,title:typeof t.title=="string"?t.title:s,links:Et(t.links),tags:Et(t.tags),externalLinks:Et(t.externalLinks),content:typeof t.excerpt=="string"?t.excerpt:typeof t.content=="string"?t.content:"",multilingual:h})}return r}function Ir(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=yn?r:`${r.slice(0,yn).trimEnd()}\\u2026`}function Ve(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function kn(e){return Ve(e)/(2*Math.PI)}function ot(e,r,o){let t=Ve(e),s=Math.acos(2*kn(`${e}:phi`)-1),c=r+(o-r)*kn(`${e}:r`);return{x:c*Math.sin(s)*Math.cos(t),y:c*Math.sin(s)*Math.sin(t),z:c*Math.cos(s)}}function Cn(e){return e==="index"||e.endsWith("/index")}function Nn(e){return e==="tags"||e.startsWith("tags/")}function Pr(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function An(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function xt(e,r){return e.multilingual?.locale?e.multilingual.locale:An(e.slug,r).locale}function _r(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${An(e.slug,r).permalink}`}function Dr(e,r){let o=e.find(t=>xt(t,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(t=>xt(t,r.prefixes)===r.sourceLocale)??e.find(t=>xt(t,r.prefixes)===void 0)}function We(e,r,o){return Math.min(o,Math.max(r,e))}function vn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Gr(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function _t(e){return Gr(e).trim().toLowerCase()}function Rr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Hr(e){let r=e.trim();return r.length===0||Rr(r)||Nn(r)||Cn(r)?!0:_t(r).length===0}function Fr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function In(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function zr(e,r){let o=In(e);return o===null?!1:!r.includes(new URL(o).hostname)}function Tn(e){return`external:${e}`}function Or(e,r){let o=new URL(e),t=o.hostname.replace(/^www\\./,""),s=o.pathname;return(r.get(t)??0)>1&&s.length>1?`${t}${s}`:t}function Br(e){let r=new Map,o=new Map;for(let t of e){let s=_t(t.slug);s.length>0&&!r.has(s)&&r.set(s,t.slug);let c=t.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,t.slug);let h=c.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,t.slug)}return{byBasename:r,byTitle:o}}function Vr(e,r,o){if(r.has(e))return e;let t=_t(e),s=o.byBasename.get(t);if(s)return s;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(t);return c||null}function Wr(e,r){return e.length===0?"":[...e].sort((t,s)=>(r.get(s)??0)-(r.get(t)??0))[0]??""}function Ur(e,r,o=void 0){let t=e.filter(u=>!Cn(u.slug)&&!Nn(u.slug)&&!Pr(u)),s=new Map;for(let u of t){let p=_r(u,r.prefixes),v=s.get(p)??[];v.push(u),s.set(p,v)}let c=[];for(let u of s.values()){let p=Dr(u,r);p&&c.push(p)}let h=new Set(c.map(u=>u.slug)),x=Br(c),C=new Map,B=[],Z=new Set,y=new Map,ee=u=>{C.set(u,(C.get(u)??0)+1)},O=(u,p,v)=>u<p?`${u}|${p}|${v}`:`${p}|${u}|${v}`,L=(u,p,v,P)=>{let A=O(u,p,v);return Z.has(A)?!1:(Z.add(A),B.push({source:u,target:p,kind:v}),P&&(ee(u),ee(p)),!0)};for(let u of c)for(let p of u.links){if(Hr(p))continue;let v=Vr(p,h,x);v!==null&&v!==u.slug&&L(u.slug,v,"wikilink",!0)}let M=Fr(),_=new Set;for(let u of c)for(let p of u.externalLinks){let v=In(p);v===null||!zr(v,M)||(_.add(v),L(u.slug,Tn(v),"external",!0))}let Y=new Map;for(let u of _){let p=new URL(u).hostname.replace(/^www\\./,"");Y.set(p,(Y.get(p)??0)+1)}let V=new Set,W=new Map;for(let u of c)for(let p of u.tags){y.set(p,(y.get(p)??0)+1);let v=`tag:${p}`;V.add(v),L(u.slug,v,"tag",!0);let P=W.get(p)??[];P.push(u.slug),W.set(p,P)}if(o!==!1){let u=o?.maxTagsPerNote,p=o?.maxEdges,v=0;e:for(let P of c)if(!(P.tags.length<2)&&!(u!==void 0&&P.tags.length>u))for(let A=0;A<P.tags.length;A+=1)for(let R=A+1;R<P.tags.length;R+=1){if(p!==void 0&&v>=p)break e;L(`tag:${P.tags[A]}`,`tag:${P.tags[R]}`,"cooc",!1)&&(v+=1)}}let K=new Map;for(let u of c){let p=vn(u.slug);if(p==="root")continue;let v=K.get(p)??[];v.push(u.slug),K.set(p,v)}for(let u of K.values()){if(u.length<2)continue;let p=[...u].sort();for(let v=0;v<p.length;v+=1){let P=p[(v+1)%p.length],A=p[(v+wn)%p.length],R=p[v];R===void 0||P===void 0||(R!==P&&!Z.has(O(R,P,"wikilink"))&&L(R,P,"folder",!1),p.length>wn+1&&A!==void 0&&R!==A&&!Z.has(O(R,A,"wikilink"))&&L(R,A,"folder",!1))}}let oe=[...C.values()],J=oe.length>0?Math.min(...oe):0,D=oe.length>0?Math.max(...oe):0,Q=u=>{let p=nt(C.get(u)??0,J,D);return Oe+p*(At-Oe)},te=[...c].sort((u,p)=>(C.get(p.slug)??0)-(C.get(u.slug)??0)),ne=new Set(te.filter(u=>(C.get(u.slug)??0)>0).slice(0,nr).map(u=>u.slug)),U=c.map(u=>{let p=ne.has(u.slug),v=p?ot(u.slug,pn.min,pn.max):ot(u.slug,mn.min,mn.max);return{id:u.slug,name:u.title,type:"note",val:Q(u.slug),degree:C.get(u.slug)??0,isHub:p,tag:"",slug:u.slug,url:"",folder:vn(u.slug),tags:u.tags,dominantTag:Wr(u.tags,y),excerpt:Ir(u.content),phase:Ve(u.slug),x:v.x,y:v.y,z:v.z}});for(let u of _){let p=Tn(u),v=ot(p,hn.min,hn.max);U.push({id:p,name:Or(u,Y),type:"external",val:Q(p)*fr,degree:C.get(p)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:Ve(p),x:v.x,y:v.y,z:v.z})}for(let u of V){let p=u.slice(4),v=ot(u,bn.min,bn.max);U.push({id:u,name:p,type:"tag",val:We(Q(u)*.7,Oe,At),degree:C.get(u)??0,isHub:!1,tag:p,slug:`tags/${p}`,url:"",folder:"tag",tags:[p],dominantTag:p,excerpt:"",phase:Ve(u),x:v.x,y:v.y,z:v.z})}return{nodes:U,links:B}}function St(e){let r=new Map,o=(t,s)=>{let c=r.get(t)??new Set;c.add(s),r.set(t,c)};for(let t of e){if(t.kind!=="wikilink"&&t.kind!=="tag"&&t.kind!=="external")continue;let s=G(t.source),c=G(t.target);o(s,c),o(c,s)}return r}function Ee(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let t=getComputedStyle(o).color;return o.remove(),t||r}function Pn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Ee("--graph-backdrop","#ffffff"),ink:Ee("--graph-text","#0f0f0f"),accent:Ee("--graph-accent","#a52142"),tertiary:Ee("--graph-external","#c75b75"),gray:Ee("--graph-muted","#737373"),external:Ee("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function xe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function $r(){return qr()}function q(){return document.documentElement.getAttribute("saved-theme")==="dark"}function it(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}return null}function Fe(e,r){let o=it(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function ye(e,r,o){let t=it(e),s=it(r);if(!t||!s)return e;let c=(h,x)=>Math.round(h+(x-h)*o);return`rgb(${c(t.r,s.r)}, ${c(t.g,s.g)}, ${c(t.b,s.b)})`}function Pt(e){return q()?ye(e.bg,"#000000",.82):e.bg}function Yr(e){let r=it(e);if(!r)return e;let o=t=>{let s=t/255,c=s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);return Math.ceil(c*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function Kr(e){return Yr(Pt(e))}function _n(e,r){let o=0;for(let t of e)o=o*31+t.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function Ln(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:_n(e,[r.accent,r.tertiary,r.ink,r.gray])}function jr(e,r){return e.length===0?r.ink:_n(e,[r.accent,r.tertiary])}function Xr(e){let r=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),t="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(t=o.endsWith("/")?o:`${o}/`);let s=`${t}${r}`.replace(/\\/{2,}/g,"/");return new URL(s,window.location.origin)}function Zr(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function Mt(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function Jr(e){let o=await import(e?Zn:Xn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Zr(o)}function Qr(){try{let e=sessionStorage.getItem(Sn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function eo(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Mn);if(!r)return e;let o=at(JSON.parse(r)),t=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,s=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread,x=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:t,edgeScale:s,zoom:c,spread:h,hubGravity:x}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function ze(e){try{sessionStorage.setItem(Mn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function Ct(e){try{sessionStorage.setItem(Sn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function to(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function no(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function ro(e,r){return e.type==="note"&&e.folder===r}function En(e,r){let o=G(r),t=e.find(s=>s.id===o);return!t||t.type!=="note"?null:t.folder}function oo(e,r,o){let t=new Map;if(r==="folder"){let s=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return s.forEach((c,h)=>{let x=Math.PI*2*h/Math.max(s.length,1),C={x:Math.cos(x)*o,y:Math.sin(x)*o,z:0};for(let B of e.nodes)B.type==="note"&&B.folder===c&&t.set(B.id,C)}),t}if(r==="tag"){let s=e.nodes.filter(h=>h.type==="tag"),c=new Map;s.forEach((h,x)=>{let C=Math.PI*2*x/Math.max(s.length,1);c.set(h.tag,{x:Math.cos(C)*o,y:Math.sin(C)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let x=c.get(h.tag);x&&t.set(h.id,x)}else if(h.dominantTag.length>0){let x=c.get(h.dominantTag);x&&t.set(h.id,x)}}return t}function ao(e,r){let o=[],t=s=>{let c=r*s;for(let h of o){let x=e(h);x&&(h.vx=(h.vx??0)+(x.x-(h.x??0))*c,h.vy=(h.vy??0)+(x.y-(h.y??0))*c,h.vz=(h.vz??0)+(x.z-(h.z??0))*c)}};return t.initialize=s=>{o=s},t}function xn(e,r,o,t){for(let s of e.querySelectorAll(r)){if(!(s instanceof HTMLElement))continue;let c=s.getAttribute(t);s.setAttribute("aria-pressed",c===o?"true":"false")}}function io(e,r,o,t){let s=St(r.links),c=(n,a,i)=>n<a?`${n}|${a}|${i}`:`${a}|${n}|${i}`,h=new Map(t.fullData.nodes.map(n=>[n.id,n])),x=new Map,C=new Set,B=new Set;t.fullData!==r&&(x=St(t.fullData.links),C=new Set(r.nodes.map(n=>n.id)),B=new Set(r.links.map(n=>c(G(n.source),G(n.target),n.kind))));let Z=n=>{if(t.fullData===r)return!1;let a=tn(x,C,n,t.expandHops);if(!C.has(n)&&h.has(n)&&a.add(n),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let i=t.layout.incrementalWarmup?h.get(n):void 0,l=0;for(let g of a){let m=h.get(g);if(m){if(i&&m.id!==i.id){let b=nn(i,l,t.use3d);m.x=b.x,m.y=b.y,m.z=b.z,m.vx=m.vy=m.vz=0,l+=1}r.nodes.push(m),C.add(g)}}for(let g of t.fullData.links){let m=G(g.source),b=G(g.target);if(!C.has(m)||!C.has(b))continue;let d=c(m,b,g.kind);B.has(d)||(B.add(d),r.links.push(g))}return s=St(r.links),!0},y={lens:Qr(),allLabels:!1,focusTag:null,focusFolder:null},ee=null,O=null,L=eo(),M=!1,_=ln,Y=Be,V=0,W=()=>{},K=n=>nt(n.degree,0,V),oe=n=>{let a=.1*Math.sin(n.phase*3.7);return n.type==="tag"?.7:n.type==="external"?.45+a:We(.58+.42*Math.pow(K(n),.6)+a,.48,1)},J=()=>{e.cooldownTicks(t.layout.freezeAfterWarmup?90:t.layout.cooldownTicks??200),e.d3ReheatSimulation()},D=()=>O??ee,Q=new Set(r.nodes.filter(n=>n.type==="note").sort((n,a)=>a.degree-n.degree).slice(0,rr).map(n=>n.id)),te=n=>{let a=n.val;return n.isHub&&(a*=sn),y.lens==="tag"&&n.type==="tag"&&(a*=ur),y.focusTag&&n.id===`tag:${y.focusTag}`&&(a*=dr),a},ne=n=>{let a=D();return a===n.id?!0:a!==null?s.get(a)?.has(n.id)??!1:y.allLabels||Q.has(n.id)},U=n=>{let a=At*sn,i=We((te(n)-Oe)/(a-Oe),0,1);return(cn+i*(pr-cn))*L.nodeScale},u=n=>{let a=D();if(a!==null)return a===n||(s.get(a)?.has(n)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let i=r.nodes.find(l=>l.id===n);return i?y.focusFolder!==null?ro(i,y.focusFolder):y.focusTag!==null&&no(i,y.focusTag):!1},p=n=>n.type==="external"?o.current.external:y.lens==="tag"?n.type==="tag"?o.current.tertiary:jr(n.dominantTag,o.current):y.lens==="folder"?n.type==="tag"?o.current.tertiary:Ln(n.folder,o.current):y.lens==="hub"?n.type==="tag"?o.current.tertiary:n.isHub?o.current.accent:o.current.ink:n.type==="tag"?o.current.tertiary:o.current.ink,v=n=>{let a=D();if(a!==null&&(a===n.id||(s.get(a)?.has(n.id)??!1)))return o.current.accent;let i=p(n);return u(n.id)?q()?n.type==="external"?Tr:n.type==="tag"?ye(o.current.tertiary,"#ffffff",.22):y.lens!=="all"?ye(i,"#ffffff",.3):n.isHub?vr:ye(wr,kr,Math.pow(K(n),.7)):n.isHub?ye(o.current.ink,o.current.accent,.22):i:ye(i,Pt(o.current),1-Re)},P=n=>{let a=q();return n==="wikilink"?a?.52:.64:n==="external"?a?.42:.56:n==="tag"?a?.38:.5:0},A=n=>{if(n.kind==="cooc"||n.kind==="folder")return n.kind==="cooc"&&y.lens==="tag"||n.kind==="folder"&&y.lens==="folder"?.06:0;let a=G(n.source),i=G(n.target),l=D();return l!==null&&(a===l||i===l)?q()?.72:.78:(l!==null||y.focusTag!==null||y.focusFolder!==null)&&(!u(a)||!u(i))?P(n.kind)*Re:P(n.kind)},R=n=>{let a=G(n.source),i=G(n.target),l=D(),g=q()?xr:o.current.ink;return l!==null&&(a===l||i===l)?ye(o.current.accent,g,.45):g},we=n=>Fe(R(n),A(n)),fe=()=>({nodes:r.nodes,links:r.links}),pe=n=>{let a=q()?"rgba(255, 255, 255, 1)":Fe(o.current.ink,.88);return u(n.id)?a:Fe(a,Re)},he=n=>q()?u(n.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",ue=()=>{let n=e.controls?.().target;if(n&&(_={x:n.x,y:n.y,z:n.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let i={x:a.x-_.x,y:a.y-_.y,z:a.z-_.z},l=Math.hypot(i.x,i.y,i.z);if(l>1)return{dir:i,len:l}}}return{dir:me,len:Be}},ae=n=>{if(t.use3d){if(typeof e.cameraPosition!="function")return;let a=Y/We(L.zoom,.4,2.5),{dir:i,len:l}=ue(),g=a/l;e.cameraPosition({x:_.x+i.x*g,y:_.y+i.y*g,z:_.z+i.z*g},_,xe()?0:n),qe();return}typeof e.zoom=="function"&&e.zoom(L.zoom,xe()?0:n)},k=()=>{let n=Nr(L.spread),a=vt.min+n*(vt.max-vt.min),i=Tt.min+n*(Tt.max-Tt.min),l=new Map(r.nodes.map(S=>[S.id,S.degree])),g=Math.max(0,...l.values());V=g;let m=K,b=S=>Kt(l.get(G(S.source))??0,l.get(G(S.target))??0,g),d=e.d3Force("charge");d?.strength&&d.strength(S=>a*jt(m(S))),d?.theta&&t.layout.chargeTheta!==void 0&&d.theta(t.layout.chargeTheta);let f=e.d3Force("link");f?.distance&&f.distance(S=>{let H=Xt(b(S),L.hubGravity);return y.lens==="tag"&&S.kind==="tag"?i*.72*H:S.kind==="cooc"||S.kind==="folder"?i:i*H}),f?.strength&&f.strength(S=>{if(S.kind==="cooc"||S.kind==="folder")return .015;let H=Zt(b(S),L.hubGravity);if(y.lens==="tag"&&S.kind==="tag")return .3*H;if(y.lens==="folder"){let j=En(r.nodes,S.source),X=En(r.nodes,S.target);if(j!==null&&j===X)return .16*H}return S.kind==="tag"?.14*H:(S.kind==="external"?.16:.24)*H}),t.forceCollide&&e.d3Force("collision",t.forceCollide(S=>U(S)+Lr).strength(.85).iterations(1));let w=e.d3Force("center");w?.strength&&w.strength(or);let T=Lt.min+n*(Lt.max-Lt.min),z=oo(r,y.lens,T),F=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",ao(S=>z.get(S.id)??null,F)),t.use3d&&e.d3Force("flattenZ",null)},N=new Map,I=new Map,re=(n,a)=>rt(I,a?"dark":"light",()=>{let l=document.createElement("canvas");l.width=l.height=64;let g=l.getContext("2d");if(g){let m=g.createRadialGradient(32,32,0,32,32,32);a?(m.addColorStop(0,"rgba(255,255,255,1)"),m.addColorStop(.22,"rgba(255,255,255,0.96)"),m.addColorStop(.36,"rgba(255,255,255,0.42)"),m.addColorStop(.62,"rgba(255,255,255,0.1)"),m.addColorStop(1,"rgba(255,255,255,0)")):(m.addColorStop(0,"rgba(255,255,255,1)"),m.addColorStop(.86,"rgba(255,255,255,1)"),m.addColorStop(1,"rgba(255,255,255,0)")),g.fillStyle=m,g.fillRect(0,0,64,64)}return new n.CanvasTexture(l)}),de=(n,a)=>{n.color.set(a),q()&&n.color.multiplyScalar(hr)},ie=new Map,le=new Map,E=new Map,be=new Map,Ue=new Map,Dt=new Map,Gt=new Map,Dn=(n,a,i)=>{let l=`${a}|${i}`;return rt(Dt,l,()=>new n.CylinderGeometry(a,a,1,i))},Rt=(n,a,i)=>{let l=`${a}|${i}`;return rt(Gt,l,()=>new n.MeshBasicMaterial({color:a,transparent:!0,opacity:i,depthWrite:!1,blending:q()?n.AdditiveBlending:n.NormalBlending}))},ke=()=>{if(!t.use3d||typeof e.nodeThreeObject!="function")return;let n=t.spriteText,a=t.three,i=t.interaction.incrementalRepaint;if(N.clear(),ie.clear(),E.clear(),be.clear(),i)for(let l of r.nodes)be.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let g=U(l),m=v(l),b=!1;if(a){let F=q(),S=F?oe(l):1,H=new a.SpriteMaterial({map:re(a,F),color:"#ffffff",transparent:!0,depthWrite:!1,blending:F?a.AdditiveBlending:a.NormalBlending,opacity:S});de(H,m),F&&N.set(l.id,{material:H,base:S,phase:l.phase}),i&&E.set(l.id,H);let j=new a.Sprite(H),X=g*(F?br:yr);j.scale.x=X,j.scale.y=X,j.scale.z=1,b=j}let d=ne(l);if(!n||!i&&!d)return b;let f=Array.from(l.name),w=window.innerWidth<700?24:48,T=new n(f.length>w?`${f.slice(0,w).join("")}\\u2026`:l.name);if(T.color=pe(l),T.backgroundColor=!1,T.fontWeight="400",T.strokeWidth=q()?.35:0,T.strokeColor=he(l),T.material.transparent=!0,T.material.depthWrite=!1,T.material.alphaTest=.01,T.material.toneMapped=!1,T.textHeight=Q.has(l.id)?6.5:5.5,T.center.set(0,.5),T.position.x=g+2,T.position.y=0,i?(T.visible=d,ie.set(l.id,{sprite:T,node:l})):t.lod.labelDistance!==void 0&&ie.set(l.id,{sprite:T,node:l}),!a||b===!1)return T;let z=new a.Group;return z.add(b),z.add(T),z})},Gn=()=>{let n=t.three;if(!t.use3d||!n||typeof e.linkThreeObject!="function")return;let a=new n.Vector3(0,1,0),i=t.lod.linkResolution??5,l=t.lod.cullDistance,g=t.interaction.incrementalRepaint,m=t.lod.shareLinkResources;if(le.clear(),Ue.clear(),Dt.clear(),Gt.clear(),g)for(let b of r.links){let d=G(b.source),f=G(b.target);for(let w of[d,f]){let T=Ue.get(w);T?T.push(b):Ue.set(w,[b])}}e.linkThreeObject(b=>{let d=Er[b.kind]*L.edgeScale,f=m?Rt(n,R(b),A(b)):new n.MeshBasicMaterial({color:R(b),transparent:!0,opacity:A(b),depthWrite:!1,blending:q()?n.AdditiveBlending:n.NormalBlending}),w=m?Dn(n,d,i):new n.CylinderGeometry(d,d,1,i),T=new n.Mesh(w,f);return(l!==void 0||g)&&le.set(b,T),T}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((b,d)=>{let f=d.end.x-d.start.x,w=d.end.y-d.start.y,T=d.end.z-d.start.z,z=Math.sqrt(f*f+w*w+T*T);return b.position.x=(d.start.x+d.end.x)/2,b.position.y=(d.start.y+d.end.y)/2,b.position.z=(d.start.z+d.end.z)/2,b.scale.x=1,b.scale.y=Math.max(z,.01),b.scale.z=1,b.quaternion.setFromUnitVectors(a,new n.Vector3(f,w,T).normalize()),!0})},lt=()=>{!t.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(n=>{let a=D();if(a===null||xe()||document.hidden)return 0;let i=G(n.source),l=G(n.target);return i===a||l===a?2:0})},ve=()=>{e.nodeVal(te),e.nodeColor(v),e.linkColor(we),e.linkWidth(n=>{let a=G(n.source),i=G(n.target),l=D(),g=L.edgeScale;return l!==null&&(a===l||i===l)?.7*g:n.kind==="wikilink"||n.kind==="external"?.5*g:(n.kind==="tag"?.35:.25)*g}),typeof e.linkOpacity=="function"&&e.linkOpacity(on),lt(),Gn(),t.use3d||e.nodeCanvasObjectMode(()=>"replace")},Rn=(n,a)=>{let i=rn(s,n,a,be.keys()),l=new Set;for(let g of i){let m=be.get(g);if(!m)continue;let b=E.get(g);b&&de(b,v(m));let d=ie.get(g);d&&(d.sprite.color=pe(m),d.sprite.strokeColor=he(m),d.sprite.strokeWidth=q()?.35:0,d.sprite.visible=ne(m));for(let f of Ue.get(g)??[]){if(l.has(f))continue;l.add(f);let w=le.get(f);w&&(t.lod.shareLinkResources&&t.three?w.material=Rt(t.three,R(f),A(f)):(w.material.color.set(R(f)),w.material.opacity=A(f)))}}},ct=n=>{if(t.interaction.incrementalRepaint&&t.use3d){lt(),Rn(n,D());return}ve(),t.use3d&&ke()},ut=()=>{let n=t.root.querySelector("[data-graph-legend]");if(!(n instanceof HTMLElement))return;let a=(m,b)=>{let d=document.createElement("span");d.className="graph-landing__legend-item";let f=document.createElement("span");f.className="graph-landing__dot",f.setAttribute("aria-hidden","true"),f.style.background=m;let w=document.createElement("span");return w.textContent=b,d.append(f,w),d},i=t.root.dataset.legendNotes??"Notes",l=t.root.dataset.legendTags??"Tags",g=t.root.dataset.legendLinks??"Links";n.replaceChildren(a(o.current.ink,i),a(o.current.tertiary,l),a(o.current.external,g))},Ht=n=>{let a=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="graph-landing__tag-item",i.dataset[n.dataset.key]=n.dataset.value,i.setAttribute("aria-pressed",n.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",n.dotColor!==null){let m=document.createElement("span");m.className="graph-landing__dot",m.style.background=n.dotColor,l.append(m)}l.append(document.createTextNode(n.label));let g=document.createElement("span");return g.className="graph-landing__tag-count",g.textContent=String(n.count),i.append(l,g),a.append(i),a},Ft=()=>{let n=t.root.querySelector("[data-graph-tags]");if(!(n instanceof HTMLElement))return;let a=t.root.querySelector("[data-graph-facet-label]"),i=t.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let g=t.root.dataset.folderRootLabel??"root",m=new Map;for(let d of r.nodes)d.type==="note"&&m.set(d.folder,(m.get(d.folder)??0)+1);let b=[...m.entries()].sort((d,f)=>f[1]-d[1]);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendFolders??"Folders"),i instanceof HTMLElement&&(i.hidden=b.length===0),n.replaceChildren(...b.map(([d,f])=>Ht({dataset:{key:"graphFolder",value:d},pressed:y.focusFolder===d,dotColor:Ln(d,o.current),label:d==="root"?g:d,count:f})));return}let l=r.nodes.filter(g=>g.type==="tag").sort((g,m)=>m.degree-g.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendTags??"Tags"),i instanceof HTMLElement&&(i.hidden=l.length===0),n.replaceChildren(...l.map(g=>Ht({dataset:{key:"graphTag",value:g.tag},pressed:y.focusTag===g.tag,dotColor:null,label:g.tag,count:g.degree})))},dt=!0,zt=()=>{r.nodes.length>0&&e.zoomToFit?.(0,80),Y=ue().len,ae(0),qe()},Ot=0;e.onEngineStop(()=>{dt&&(Ot=window.requestAnimationFrame(()=>{dt=!1,zt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Ot));let Se=(n=!1)=>{e.warmupTicks(n&&t.layout.incrementalWarmup?0:t.layout.warmupTicks??(t.use3d?50:60)),e.graphData(fe()),k(),ve(),ke(),ut(),Ft(),xn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),J()},Hn=n=>{y.lens=n,n!=="tag"&&(y.focusTag=null),n!=="folder"&&(y.focusFolder=null),Ct(n),Se()},Fn=n=>{y.focusTag=y.focusTag===n?null:n,y.focusFolder=null,y.focusTag&&(y.lens="tag",Ct("tag")),Se()},zn=n=>{y.focusFolder=y.focusFolder===n?null:n,y.focusTag=null,y.focusFolder&&(y.lens="folder",Ct("folder")),Se()},ft=()=>t.use3d?Kr(o.current):Pt(o.current),qe=()=>{if(!t.use3d||!t.lod.fog||!t.three||typeof e.scene!="function")return;let n=ue().len;e.scene().fog=new t.three.Fog(ft(),n*gr,n*mr)};e.graphData(fe()),e.backgroundColor(ft()),e.nodeLabel(n=>n.name),e.nodeRelSize(ar),typeof e.nodeOpacity=="function"&&e.nodeOpacity(ir),typeof e.linkOpacity=="function"&&e.linkOpacity(on),k(),ve();let Te=t.root.querySelector("[data-graph-preview]"),$e=t.root.querySelector("[data-graph-preview-chip]"),Ye=t.root.querySelector("[data-graph-preview-title]"),Ke=t.root.querySelector("[data-graph-preview-excerpt]"),je=0;window.addCleanup(()=>window.clearTimeout(je));let On=n=>{if(!(Te instanceof HTMLElement)||!($e instanceof HTMLElement)||!(Ye instanceof HTMLElement)||!(Ke instanceof HTMLElement))return;window.clearTimeout(je);let a=t.root.dataset.legendNotes??"Notes",i=t.root.dataset.legendTags??"Tags",l=t.root.dataset.legendLinks??"Links";if(n.type==="tag"){let g=t.root.dataset.previewTagTemplate??"{n} notes";$e.textContent=i,Ye.textContent=`#${n.tag}`,Ke.textContent=g.replace("{n}",String(n.degree))}else n.type==="external"?($e.textContent=l,Ye.textContent=n.name,Ke.textContent=n.url):($e.textContent=a,Ye.textContent=n.name,Ke.textContent=n.excerpt);Te.hidden=!1,Te.dataset.visible="true"},Bt=()=>{Te instanceof HTMLElement&&(window.clearTimeout(je),je=window.setTimeout(()=>{Te.dataset.visible="false",Te.hidden=!0},Cr))};if(e.onNodeHover(n=>{let a=D();ee=n?n.id:null,O===null&&(n?On(n):Bt()),ct(a)}),t.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let i=e.controls();i.autoRotate=!1,i.autoRotateSpeed=cr}if(t.three&&typeof e.scene=="function"){let i=t.three,l=new Float32Array(un*3),g=2654435769,m=()=>(g=Math.imul(g,1664525)+1013904223>>>0,g/4294967296);for(let w=0;w<un;w+=1){let T=m()*2-1,z=m()*Math.PI*2,F=Math.sqrt(1-T*T),S=kt.min+Math.pow(m(),.6)*(kt.max-kt.min);l[w*3]=F*Math.cos(z)*S,l[w*3+1]=T*S,l[w*3+2]=F*Math.sin(z)*S}let b=new i.BufferGeometry;b.setAttribute("position",new i.Float32BufferAttribute(l,3));let d=new i.PointsMaterial({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,depthWrite:!1,opacity:.6,blending:i.NormalBlending,fog:!1}),f=new i.Points(b,d);e.scene().add(f),window.addCleanup(()=>e.scene?.().remove(f)),W=()=>{let w=q();d.color.set(w?"#dfe7ff":"#8f8f8f"),d.opacity=w?.42:.22,d.size=w?1.4:1.3,d.blending=w?i.AdditiveBlending:i.NormalBlending,d.needsUpdate=!0},W()}e.warmupTicks(t.layout.warmupTicks??50),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),t.bloomPass&&typeof e.postProcessingComposer=="function"&&(t.bloomPass.strength=q()?dn:0,t.bloomPass.radius=fn,t.bloomPass.threshold=gn,e.postProcessingComposer().addPass(t.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(me,ln),L.zoom!==1&&ae(0)),ke(),qe();{let i=0,l=()=>{if(!xe()&&!document.hidden&&!M){let g=performance.now()/1e3*Mr;for(let m of N.values())m.material.opacity=m.base*(1+Sr*Math.sin(g+m.phase))}i=window.requestAnimationFrame(l)};i=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(i))}let n=t.lod.labelDistance,a=t.lod.cullDistance;if((n!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let i=e.cameraPosition.bind(e),l=0,g=()=>{let m=i();if(m&&typeof m.x=="number"&&typeof m.y=="number"&&typeof m.z=="number"){let b=Math.max(1,t.root.clientHeight||window.innerHeight);if(n!==void 0){let d=[];for(let f of ie.values()){let w=f.node.x??0,T=f.node.y??0,z=f.node.z??0,F=Math.hypot(m.x-w,m.y-T,m.z-z);if(f.sprite.visible=Qt(ne(f.node),D()===f.node.id||D()===null&&Q.has(f.node.id),F,n),f.sprite.visible){let S=Array.from(f.node.name),H=window.innerWidth<700?24:48,j=S.length>H?`${S.slice(0,H).join("")}\\u2026`:f.node.name;f.sprite.text!==j&&(f.sprite.text=j);let X=e.graph2ScreenCoords?.(w,T,z);if(X&&D()===null){let $t=Array.from(j).length*9+12,et=X.x>window.innerWidth*.6?X.x-$t:X.x,ht=et+$t,Un=d.some(bt=>Math.abs(bt.y-X.y)<22&&et<bt.right&&ht>bt.left);f.sprite.visible=!Un&&et>=8&&ht<=window.innerWidth-8,f.sprite.visible&&d.push({left:et,right:ht,y:X.y})}f.sprite.center.set(X&&X.x>window.innerWidth*.6?1:0,.5);let De=Math.max(5.5,F/b*11);Math.abs(f.sprite.textHeight-De)>.5&&(f.sprite.textHeight=De)}}}if(a!==void 0){let d=D();for(let[f,w]of le){let T=G(f.source),z=G(f.target);if(d!==null&&(T===d||z===d)){w.visible=!0;continue}let F=Math.hypot(m.x-w.position.x,m.y-w.position.y,m.z-w.position.z);w.visible=wt(F,a)!=="dot"}}}l=window.requestAnimationFrame(g)};l=window.requestAnimationFrame(g),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(t.layout.warmupTicks??60),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??180),e.nodeCanvasObject((n,a,i)=>{let l=U(n),g=n.x??0,m=n.y??0;if(a.save(),a.beginPath(),a.arc(g,m,l,0,Math.PI*2),a.fillStyle=v(n),a.fill(),n.isHub&&(a.strokeStyle=u(n.id)?o.current.accent:Fe(o.current.accent,Re),a.lineWidth=1.2/i,a.stroke()),ne(n)){let b=11.5/i;a.font=`${b}px ${o.current.font}`,a.fillStyle=u(n.id)?o.current.ink:Fe(o.current.ink,Re),a.textAlign="center",a.textBaseline="bottom",a.fillText(n.name,g,m-l-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((n,a,i)=>{let l=U(n)+8;i.beginPath(),i.arc(n.x??0,n.y??0,l,0,Math.PI*2),i.fillStyle=a,i.fill()});let Me=t.root.querySelector("[data-graph-inspect]"),Xe=t.root.querySelector("[data-graph-inspect-chip]"),Ze=t.root.querySelector("[data-graph-inspect-title]"),Je=t.root.querySelector("[data-graph-inspect-excerpt]"),gt=t.root.querySelector("[data-graph-inspect-tags]"),mt=t.root.querySelector("[data-graph-inspect-connected]"),$=t.root.querySelector("[data-graph-inspect-open]"),Le=n=>{t.root.dataset.railOpen=n?"true":"false";let a=t.root.querySelector("[data-graph-rail-toggle]"),i=t.root.querySelector("[data-graph-rail-scrim]"),l=t.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",n?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",n?"false":"true"),i instanceof HTMLElement&&(i.hidden=!n)},ce=()=>{let a=!xe()&&!document.hidden&&!M;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),!a)for(let i of N.values())i.material.opacity=i.base;lt()},Vt=window.matchMedia("(prefers-reduced-motion: reduce)");Vt.addEventListener("change",ce),document.addEventListener("visibilitychange",ce),window.addCleanup(()=>{Vt.removeEventListener("change",ce),document.removeEventListener("visibilitychange",ce)}),ce();let Bn=n=>{let a=s.get(n.id)??new Set,i=[];for(let l of a){let g=r.nodes.find(m=>m.id===l);g&&i.push(g)}return i.sort((l,g)=>g.degree-l.degree)},Vn=n=>{if(!(Me instanceof HTMLElement)||!(Xe instanceof HTMLElement)||!(Ze instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(gt instanceof HTMLElement)||!(mt instanceof HTMLElement))return;let a=t.root.dataset.legendNotes??"Notes",i=t.root.dataset.legendTags??"Tags",l=t.root.dataset.legendLinks??"Links",g=t.root.dataset.inspectEmpty??"No direct connections";n.type==="tag"?(Xe.textContent=i,Ze.textContent=`#${n.tag}`,Je.textContent=(t.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(n.degree))):n.type==="external"?(Xe.textContent=l,Ze.textContent=n.name,Je.textContent=n.url):(Xe.textContent=a,Ze.textContent=n.name,Je.textContent=n.excerpt);let m=n.tags.map(d=>{let f=document.createElement("li");return f.textContent=d,f});gt.replaceChildren(...m),gt.hidden=m.length===0;let b=Bn(n).slice(0,12);if(b.length===0){let d=document.createElement("li");d.className="graph-landing__inspect-empty",d.textContent=g,mt.replaceChildren(d)}else mt.replaceChildren(...b.map(d=>{let f=document.createElement("li"),w=document.createElement("button");w.type="button",w.className="graph-landing__inspect-link",w.dataset.graphInspectId=d.id;let T=d.type==="tag"?i:d.type==="external"?l:a,z=document.createElement("span");z.textContent=T;let F=document.createElement("strong");return F.textContent=d.type==="tag"?`#${d.tag}`:d.name,w.append(z,F),f.append(w),f}));$ instanceof HTMLAnchorElement&&(n.type==="note"&&n.slug.length>0?($.hidden=!1,$.href=Xr(n.slug).toString(),$.textContent=t.root.dataset.inspectRead??"Read note",$.removeAttribute("target"),$.removeAttribute("rel")):n.type==="external"&&n.url.length>0?($.hidden=!1,$.href=n.url,$.textContent=t.root.dataset.inspectOpenExternal??"Open",$.target="_blank",$.rel="noopener noreferrer"):($.hidden=!0,$.removeAttribute("href"),$.removeAttribute("target"),$.removeAttribute("rel"))),Me.hidden=!1,t.root.dataset.inspecting="true",Le(!1),Bt()},Ce=()=>{let n=D();if(O=null,Me instanceof HTMLElement){let a=Me.contains(document.activeElement);Me.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}t.root.dataset.inspecting="false",ee=null,ce(),ct(n)},Wn=n=>{let a=D();O=n.id,ce(),Vn(n),ct(a)},pt=(n,a=!1)=>{if(Z(n.id)&&Se(!0),Wn(n),a){_={x:n.x??0,y:n.y??0,z:n.z??0};let i=xe()?0:450;t.use3d&&e.cameraPosition?(Y=Be,e.cameraPosition({x:_.x+me.x/L.zoom,y:_.y+me.y/L.zoom,z:_.z+me.z/L.zoom},_,i)):e.centerAt?.(_.x,_.y,i)}},Qe=!1;e.onNodeClick((n,a)=>{n&&(Qe=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),pt(n))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ce(),Le(!1)});let se=t.root.querySelector("#graph-landing-mount");if(se instanceof HTMLElement){let n=new ResizeObserver(()=>{e.width(se.clientWidth),e.height(se.clientHeight),O===null&&!dt&&zt()});n.observe(se),window.addCleanup(()=>n.disconnect());let a=null,i=0,l=d=>{a={x:d.clientX,y:d.clientY},Qe=!1,M=!0,ce()},g=(d,f)=>{if(typeof e.graph2ScreenCoords!="function")return null;let w=se.getBoundingClientRect(),T=d-w.left,z=f-w.top,F=null,S=484;for(let H of fe().nodes){if(H.x===void 0||H.y===void 0)continue;let j=e.graph2ScreenCoords(H.x,H.y,H.z??0),De=(j.x-T)**2+(j.y-z)**2;De<S&&(S=De,F=H)}return F},m=d=>{let f=a;a=null,M=!1,ce(),!(!f||(d.clientX-f.x)**2+(d.clientY-f.y)**2>25)&&(window.clearTimeout(i),i=window.setTimeout(()=>{if(Qe){Qe=!1;return}let T=g(d.clientX,d.clientY);T?pt(T):Ce()},0))},b=()=>{a=null,M=!1,ce()};se.addEventListener("pointerdown",l,!0),se.addEventListener("pointerup",m,!0),se.addEventListener("pointercancel",b,!0),window.addCleanup(()=>{window.clearTimeout(i),se.removeEventListener("pointerdown",l,!0),se.removeEventListener("pointerup",m,!0),se.removeEventListener("pointercancel",b,!0)})}xn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),ut(),Ft(),y.lens!=="all"&&Se(),t.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Wt=()=>{o.current=Pn(),e.backgroundColor(ft()),qe(),W(),t.bloomPass&&(t.bloomPass.strength=q()?dn:0,t.bloomPass.radius=fn,t.bloomPass.threshold=gn),ve(),ke(),ut()};document.addEventListener("themechange",Wt),window.addCleanup(()=>document.removeEventListener("themechange",Wt));let Ut=n=>{let a=n.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Ce();return}if(a.closest("[data-graph-rail-toggle]")){let f=t.root.dataset.railOpen!=="true";f&&Ce(),Le(f);return}if(a.closest("[data-graph-rail-scrim]")){Le(!1);return}let i=a.closest("[data-graph-inspect-id]");if(i instanceof HTMLElement&&i.dataset.graphInspectId){let f=t.fullData.nodes.find(w=>w.id===i.dataset.graphInspectId);f&&pt(f,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&to(l.dataset.graphLens)){Hn(l.dataset.graphLens);return}let g=a.closest("[data-graph-tag]");if(g instanceof HTMLElement&&g.dataset.graphTag){Fn(g.dataset.graphTag);return}let m=a.closest("[data-graph-folder]");if(m instanceof HTMLElement&&m.dataset.graphFolder){zn(m.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){J();return}let b=a.closest("[data-graph-labels]");if(b instanceof HTMLButtonElement){y.allLabels=!y.allLabels,b.setAttribute("aria-pressed",y.allLabels?"true":"false");let f=b.dataset.labelShow??"Labels",w=b.dataset.labelHide??"Labels",T=y.allLabels?w:f;b.title=T,b.setAttribute("aria-label",T),ke();return}if(a.closest("[data-graph-theme]")){let f=q()?"light":"dark";document.documentElement.setAttribute("saved-theme",f),localStorage.setItem("theme",f),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${f}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:f}}));return}let d=a.closest("[data-graph-tags-toggle]");if(d instanceof HTMLButtonElement){let f=t.root.querySelector(".graph-landing__tags");if(f instanceof HTMLElement){let w=f.dataset.open==="true";f.dataset.open=w?"false":"true",d.setAttribute("aria-expanded",w?"false":"true")}}},Ne=t.root.querySelector("[data-graph-node-scale]"),Ae=t.root.querySelector("[data-graph-edge-scale]");if(Ne instanceof HTMLInputElement){Ne.value=String(Math.round(L.nodeScale*100));let n=()=>{L.nodeScale=Number(Ne.value)/100,ze(L),k(),J(),ve(),t.use3d&&ke()};Ne.addEventListener("input",n),window.addCleanup(()=>Ne.removeEventListener("input",n))}if(Ae instanceof HTMLInputElement){Ae.value=String(Math.round(L.edgeScale*100));let n=()=>{L.edgeScale=Number(Ae.value)/100,ze(L),ve()};Ae.addEventListener("input",n),window.addCleanup(()=>Ae.removeEventListener("input",n))}let Ie=t.root.querySelector("[data-graph-hub-gravity]");if(Ie instanceof HTMLInputElement){Ie.value=String(Math.round(L.hubGravity*100));let n=()=>{let a=Number(Ie.value)/100;L.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,ze(L),k(),J()};Ie.addEventListener("input",n),window.addCleanup(()=>Ie.removeEventListener("input",n))}let Pe=t.root.querySelector("[data-graph-zoom]");if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(L.zoom*100));let n=()=>{L.zoom=Number(Pe.value)/100,ze(L),ae(200)};Pe.addEventListener("input",n),window.addCleanup(()=>Pe.removeEventListener("input",n))}let _e=t.root.querySelector("[data-graph-spread]");if(_e instanceof HTMLInputElement){_e.value=String(Math.round(L.spread*100));let n=()=>{L.spread=Number(_e.value)/100,ze(L),k(),J()};_e.addEventListener("input",n),window.addCleanup(()=>_e.removeEventListener("input",n))}Le(!1),t.root.addEventListener("click",Ut),window.addCleanup(()=>t.root.removeEventListener("click",Ut));let qt=n=>{if(n.key==="Escape"){if(t.root.dataset.railOpen==="true"){Le(!1);return}Ce()}};window.addEventListener("keydown",qt),window.addCleanup(()=>window.removeEventListener("keydown",qt))}function so(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function lo(){try{return window.localStorage.getItem(It)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Nt(e){try{if(e){window.localStorage.setItem(It,"stopped");return}window.localStorage.removeItem(It)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function co(e){let r=performance.now(),o=0,t=s=>{let c=Math.min(1,(s-r)/e.durationMs),h=c*c;e.apply(e.from+(e.to-e.from)*h),c<1&&(o=window.requestAnimationFrame(t))};return o=window.requestAnimationFrame(t),()=>{window.cancelAnimationFrame(o)}}function uo(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let t=window,s=t.onYouTubeIframeAPIReady;if(t.onYouTubeIframeAPIReady=()=>{typeof s=="function"&&s();let c=t.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=lr,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function fo(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function go(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),t=e.querySelector("[data-graph-music-library-toggle]"),s=e.querySelector("[data-graph-music-library]"),c=e.querySelector("[data-graph-music-track-list]"),h=e.querySelector("[data-graph-music-status]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||!(s instanceof HTMLElement)||!(c instanceof HTMLElement)||!(h instanceof HTMLElement))return;let x=e.dataset.audioStop??"Stop music",C=e.dataset.audioPlay??"Play music",B=e.dataset.musicLibraryOpen??"Open record collection",Z=e.dataset.musicLibraryClose??"Close record collection",y=e.dataset.musicCurrentTrack??"Current track",ee=[];try{let k=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(k))for(let N of k){if(!N||typeof N!="object")continue;let I=N;typeof I.title!="string"||typeof I.url!="string"||I.artist!==void 0&&typeof I.artist!="string"||ee.push({title:I.title,...typeof I.artist=="string"?{artist:I.artist}:{},url:I.url})}}catch{}let O=Jt(ee);O.length===0&&O.push({title:"Ambient track",videoId:an});let L=0,M=null,_=!1,Y=null,V=!lo(),W=!1,K=!1,oe=()=>O[L]??O[0]??{title:"Ambient track",videoId:an},J=k=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${k}/hqdefault.jpg")`)},D=()=>oe().videoId,Q=()=>{c.replaceChildren(),O.forEach((k,N)=>{let I=document.createElement("button");I.type="button",I.className="graph-landing__music-track",I.dataset.graphMusicTrackIndex=String(N),I.setAttribute("aria-current",N===L?"true":"false");let re=document.createElement("img");re.className="graph-landing__music-track-cover",re.src=`https://i.ytimg.com/vi/${k.videoId}/hqdefault.jpg`,re.alt="",re.loading="lazy";let de=document.createElement("span");de.className="graph-landing__music-track-copy";let ie=document.createElement("span");if(ie.className="graph-landing__music-track-title",ie.textContent=k.title,de.appendChild(ie),k.artist){let le=document.createElement("span");le.className="graph-landing__music-track-artist",le.textContent=k.artist,de.appendChild(le)}I.append(re,de),c.appendChild(I)}),h.textContent=`${y}: ${oe().title}`},te=k=>{e.dataset.musicLibraryOpen=k?"true":"false",s.hidden=!k,s.setAttribute("aria-hidden",k?"false":"true"),t.setAttribute("aria-expanded",k?"true":"false"),t.setAttribute("aria-label",k?Z:B),t.title=k?Z:B},ne=k=>{r.setAttribute("aria-pressed",k?"true":"false"),r.setAttribute("aria-label",k?x:C),r.title=k?x:C,r.dataset.playing=k?"true":"false"},U=()=>{Y&&(Y(),Y=null)},u=k=>{M&&M.setVolume(Math.max(0,Math.min(He,k)))},p=k=>{!V||W||(W=!0,ne(!0),k.unMute(),u(0),k.playVideo(),U(),Y=co({from:0,to:He,durationMs:sr,apply:u}))},v=()=>{V=!1,W=!1,U(),Nt(!0),M&&(M.mute(),M.pauseVideo(),u(0)),ne(!1)},P=async()=>{if(!M)try{let k=await uo();if(M)return;M=fo({api:k,host:o,videoId:D(),onReady:N=>{_=!0,N.mute(),u(0),N.playVideo(),V&&K&&p(N)},onEnded:N=>{if(!V)return;L=(L+1)%O.length;let I=D();J(I),Q(),N.loadVideoById(I),u(W?He:0)}})}catch(k){console.error("[graph-landing] ambient audio unavailable",k)}},A=k=>{let N=k.target;if(!(N instanceof Element&&N.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!V||W||so())){if(K=!0,_&&M){p(M);return}P()}},R=()=>{if(V&&W){v();return}if(K=!0,V=!0,Nt(!1),_&&M){p(M);return}P()},we=k=>{if(!(!Number.isInteger(k)||k<0||k>=O.length)){if(L=k,J(D()),Q(),te(!1),V=!0,K=!0,Nt(!1),_&&M){M.loadVideoById(D()),W?(M.unMute(),M.playVideo(),u(He)):p(M);return}P()}},fe=()=>{let k=e.dataset.musicLibraryOpen!=="true";if(k){e.dataset.railOpen="false";let N=e.querySelector("[data-graph-rail-toggle]"),I=e.querySelector("#graph-landing-rail"),re=e.querySelector("[data-graph-rail-scrim]");N instanceof HTMLButtonElement&&N.setAttribute("aria-expanded","false"),I instanceof HTMLElement&&I.setAttribute("aria-hidden","true"),re instanceof HTMLElement&&(re.hidden=!0)}te(k)},pe=k=>{let N=k.target;if(!(N instanceof Element))return;let I=N.closest("[data-graph-music-track-index]");I instanceof HTMLButtonElement&&we(Number(I.dataset.graphMusicTrackIndex))},he=k=>{if(e.dataset.musicLibraryOpen!=="true")return;let N=k.target;(!(N instanceof Element)||!N.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&te(!1)},ue=k=>{k.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(te(!1),k.stopImmediatePropagation())},ae=()=>{if(M){if(document.hidden){U(),M.pauseVideo();return}V&&W&&(M.playVideo(),u(He))}};J(D()),ne(!1),Q(),te(!1),P(),r.addEventListener("click",R),t.addEventListener("click",fe),c.addEventListener("click",pe),e.addEventListener("click",he),e.addEventListener("pointerdown",A,!0),e.addEventListener("touchstart",A,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",ae),window.addEventListener("keydown",ue),window.addCleanup(()=>{r.removeEventListener("click",R),t.removeEventListener("click",fe),c.removeEventListener("click",pe),e.removeEventListener("click",he),e.removeEventListener("pointerdown",A,!0),e.removeEventListener("touchstart",A,!0),document.removeEventListener("visibilitychange",ae),window.removeEventListener("keydown",ue),U(),M&&(M.pauseVideo(),M.destroy(),M=null)})}async function mo(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(r instanceof HTMLElement&&o instanceof HTMLElement){let E=r.parentElement,be=r.nextSibling;o.insertBefore(r,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{E?.isConnected&&r.isConnected&&E.insertBefore(r,be?.parentNode===E?be:null)})}go(e);let t=e.querySelector("#graph-landing-mount");if(!(t instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let s=e.querySelectorAll("[data-graph-counts]"),c=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",h=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",x=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),C=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",B=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",Z=e.dataset.graphIndexPath??"",y=ge(e.dataset.maxRenderedNodes,E=>Number.parseInt(E,10)),ee=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,O=Number.isFinite(ee)?ee:1,L=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,M=e.dataset.graphRenderMode==="3d"?"3d":"auto",_=e.dataset.graphLayoutFreezeAfterWarmup==="true",Y=ge(e.dataset.graphLayoutWarmupTicks,E=>Number.parseInt(E,10)),V=ge(e.dataset.graphLayoutCooldownTicks,E=>Number.parseInt(E,10)),W=ge(e.dataset.graphLayoutChargeTheta,Number.parseFloat),K=e.dataset.graphLayoutIncrementalWarmup==="true",oe=ge(e.dataset.graphLodLabelDistance,Number.parseFloat),J=ge(e.dataset.graphLodCullDistance,Number.parseFloat),D=e.dataset.graphLodFog==="true",Q=ge(e.dataset.graphLodLinkResolution,E=>Number.parseInt(E,10)),te=e.dataset.graphInteractionIncrementalRepaint==="true",ne=e.dataset.graphLodShareLinkResources==="true",U=!1,u=null,p={current:Pn()},v=()=>{U=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(v);let P=$r();if(M==="3d"&&!P){Mt(t,"3D graph unavailable: WebGL is required.");return}let A=M==="3d"||P,R=Jr(A),we=A?import(Qn).then(E=>E.default??null).catch(E=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),null)):Promise.resolve(null),fe=A?import(er).catch(E=>(console.error("[graph-landing] three unavailable; using default node rendering",E),null)):Promise.resolve(null),pe=A?import(tr).then(E=>E.UnrealBloomPass?new E.UnrealBloomPass:null).catch(E=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),null)):Promise.resolve(null),he=A?import(Jn).then(E=>E.forceCollide??null).catch(E=>(console.error("[graph-landing] d3-force-3d collision force unavailable",E),null)):Promise.resolve(null);R.catch(()=>{});let ue;try{ue=at(B==="graphIndex"?await fetch(Z).then(E=>E.json()):await fetchData)}catch(E){throw Mt(t,"Graph could not load its index."),E}if(U)return;let ae=Ur(Ar(ue),{localeId:c,sourceLocale:h,prefixes:x},L),k=en(ae,y),N=C.replace("{n}",String(ae.nodes.length)).replace("{m}",String(ae.links.length));for(let E of s)E.textContent=N;let I;try{I=await R}catch(E){throw Mt(t,"Graph could not load. Check your network connection."),E}let[re,de,ie,le]=await Promise.all([we,fe,pe,he]);U||(t.replaceChildren(),u=I(t),u.width(t.clientWidth),u.height(t.clientHeight),t.__graphLanding=u,t.__graphData=k,io(u,k,p,{use3d:A,root:e,spriteText:re,bloomPass:ie,three:de,forceCollide:le,fullData:ae,expandHops:O,layout:{freezeAfterWarmup:_,warmupTicks:Y,cooldownTicks:V,chargeTheta:W,incrementalWarmup:K},lod:{labelDistance:oe,cullDistance:J,fog:D,linkResolution:Q,shareLinkResources:ne},interaction:{incrementalRepaint:te}}))}var po="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let t=o.dataset.preferredLocale;if(t)try{localStorage.setItem(po,t)}catch(s){console.error("[graph-landing] failed to persist preferred-locale",s)}});document.addEventListener("nav",()=>{mo()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: var(--light);\n  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);\n  --graph-surface-strong: var(--light);\n  --graph-border: var(--lightgray);\n  --graph-text: var(--darkgray);\n  --graph-muted: var(--gray);\n  --graph-accent: var(--secondary);\n  --graph-accent-soft: var(--highlight);\n  --graph-external: var(--tertiary);\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.page:has(.graph-landing) .search {\n  position: static;\n  flex: 0 0 44px;\n  width: auto;\n}\n\n.graph-landing__chrome:has(.search-container.active) {\n  z-index: 30;\n}\n\n.page:has(.graph-landing) .search > .search-button {\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.page:has(.graph-landing) .search > .search-button p {\n  display: none;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--graph-text);\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';
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
                /* @__PURE__ */ u2("div", { class: "graph-landing__music-dock", children: [
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