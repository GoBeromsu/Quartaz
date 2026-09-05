// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Kt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function ot(e,r,o){let t=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(r)?Math.max(0,r):0,l=Number.isFinite(o)?Math.max(i,o):i;if(l===i)return i>0?.5:0;let p=Math.min(l,Math.max(i,t));return(Math.sqrt(p)-Math.sqrt(i))/(Math.sqrt(l)-Math.sqrt(i))}function jt(e,r,o){return ot(Math.max(e,r),0,o)}function Oe(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function Xt(e){return 1+Oe(e,0,1)*1.2}function Zt(e,r){let o=Oe(e,0,1),t=Oe(r,0,2);return Math.max(.5,1-o*.24*t)}function Jt(e,r){let o=Oe(e,0,1),t=Oe(r,0,2);return Math.min(1.6,1+o*.3*t)}var $n=/^[A-Za-z0-9_-]{6,20}$/,qn=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Wn=new Set(["youtu.be","www.youtu.be"]);function rt(e){return e&&$n.test(e)?e:void 0}function Un(e){if(!e)return;let r=e.trim(),o=rt(r);if(o)return o;let t;try{t=new URL(r)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:"||t.username||t.password||t.port)){if(qn.has(t.hostname)){if(t.pathname==="/watch")return rt(t.searchParams.get("v"));let i=t.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return rt(i[1])}if(Wn.has(t.hostname)){let i=t.pathname.split("/").filter(Boolean);if(i.length===1)return rt(i[0])}}}function Qt(e){let r=[],o=new Set;for(let t of e){let i=t.title.trim(),l=Un(t.url);if(!i||!l||o.has(l))continue;o.add(l);let p=t.artist?.trim();p?r.push({title:i,artist:p,videoId:l}):r.push({title:i,videoId:l})}return r}function F(e){return typeof e=="string"?e:e.id}function kt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function en(e,r,o,t){return r||e&&kt(o,t)==="full"}function tn(e,r){let o=r.normalize("NFC").trim().toLowerCase().split(/\\s+/).filter(Boolean);return o.length===0?[]:e.filter(t=>{if(t.type!=="note")return!1;let i=`${t.name} ${t.slug} ${t.tags.join(" ")}`.normalize("NFC").toLowerCase();return o.every(l=>i.includes(l))}).sort((t,i)=>i.degree-t.degree||t.id.localeCompare(i.id)).slice(0,8)}function at(e,r,o){let t=e.get(r);if(t)return t;let i=o();return e.set(r,i),i}function ue(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function nn(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let t=[...e.nodes].sort((p,E)=>E.degree!==p.degree?E.degree-p.degree:p.id<E.id?-1:p.id>E.id?1:0).slice(0,Math.max(0,r)),i=new Set(t.map(p=>p.id)),l=e.links.filter(p=>{let E=F(p.source),C=F(p.target);return i.has(E)&&i.has(C)});return{nodes:t,links:l}}function rn(e,r,o,t){let i=new Set,l=Math.max(0,Math.floor(t));if(l<=0)return i;let p=new Set([o]),E=new Set([o]);for(let C=0;C<l;C+=1){let V=new Set;for(let Z of E)for(let b of e.get(Z)??[])p.has(b)||(p.add(b),V.add(b),r.has(b)||i.add(b));E=V}return i}var Yn=2.399963229728653,wt=20;function on(e,r,o){let t=e.x??0,i=e.y??0,l=e.z??0,p=r*Yn;return{x:t+wt*Math.cos(p),y:i+wt*Math.sin(p),z:o?l+wt*Math.sin(p*.5):l}}function an(e,r,o,t){if(r===o)return new Set;if(r===null||o===null)return new Set(t);let i=new Set([r,o]);for(let l of e.get(r)??[])i.add(l);for(let l of e.get(o)??[])i.add(l);return i}var ut="0.179.1",Kn="https://esm.sh/force-graph@1.51.4",jn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${ut}`,Xn="https://esm.sh/d3-force-3d@3.0.6",Zn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${ut}`,Jn=`https://esm.sh/three@${ut}`,Qn=`https://esm.sh/three@${ut}/examples/jsm/postprocessing/UnrealBloomPass.js`,er=8,tr=6;var $e=1,Pt=4,nr=.05,rr=2.6,or=1,sn=1,ze=.18,Sn="graph-landing:lens",Mn="graph-landing:tune",At="graph-landing:ambient-audio",ln="UDVtMYqUAyw",Be=12,ar=28e3,ir="https://www.youtube.com/iframe_api",sr=.18,cn=1.25,lr=1.25,cr=1.15,ur=.55,ke={x:330,y:235,z:565},vt={x:0,y:0,z:0},qe=Math.hypot(ke.x,ke.y,ke.z),dr=300/qe,fr=1600/qe,un=1.3,gr=4.8,dn=.62,fn=.16,gn=1,mr=2.4,pr={wikilink:.16,tag:.1,external:.12,cooc:.08,folder:.08},hr="#a8b0c2",br="#2a3348",mn={min:80,max:200},pn={min:40,max:110},hn={min:160,max:280},bn={min:90,max:170},yn=220,wn=2,yr=.06,wr=.8,kr=350,Tt={min:-100,max:-190},Lt={min:72,max:116},Et={min:130,max:260};function vr(e){return lt(e-.5,0,1)}function st(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function xt(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Tr(e){let r=[];for(let o of Object.values(e)){let t=st(o);if(!Kt(t.filePath))continue;let i=typeof t.slug=="string"?t.slug:"";if(i.length===0)continue;let l=t.multilingual,p=l&&typeof l=="object"?l:void 0;r.push({slug:i,title:typeof t.title=="string"?t.title:i,links:xt(t.links),tags:xt(t.tags),externalLinks:xt(t.externalLinks),content:typeof t.excerpt=="string"?t.excerpt:typeof t.content=="string"?t.content:"",multilingual:p})}return r}function Lr(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=yn?r:`${r.slice(0,yn).trimEnd()}\\u2026`}function We(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function kn(e){return We(e)/(2*Math.PI)}function it(e,r,o){let t=We(e),i=Math.acos(2*kn(`${e}:phi`)-1),l=r+(o-r)*kn(`${e}:r`);return{x:l*Math.sin(i)*Math.cos(t),y:l*Math.sin(i)*Math.sin(t),z:l*Math.cos(i)}}function Cn(e){return e==="index"||e.endsWith("/index")}function Nn(e){return e==="tags"||e.startsWith("tags/")}function Er(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function In(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function St(e,r){return e.multilingual?.locale?e.multilingual.locale:In(e.slug,r).locale}function xr(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${In(e.slug,r).permalink}`}function Sr(e,r){let o=e.find(t=>St(t,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(t=>St(t,r.prefixes)===r.sourceLocale)??e.find(t=>St(t,r.prefixes)===void 0)}function lt(e,r,o){return Math.min(o,Math.max(r,e))}function vn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Mr(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function _t(e){return Mr(e).trim().toLowerCase()}function Cr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Nr(e){let r=e.trim();return r.length===0||Cr(r)||Nn(r)||Cn(r)?!0:_t(r).length===0}function Ir(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function Pn(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function Pr(e,r){let o=Pn(e);return o===null?!1:!r.includes(new URL(o).hostname)}function Tn(e){return`external:${e}`}function Ar(e,r){let o=new URL(e),t=o.hostname.replace(/^www\\./,""),i=o.pathname;return(r.get(t)??0)>1&&i.length>1?`${t}${i}`:t}function Dr(e){let r=new Map,o=new Map;for(let t of e){let i=_t(t.slug);i.length>0&&!r.has(i)&&r.set(i,t.slug);let l=t.title.trim().toLowerCase();l.length>0&&!o.has(l)&&o.set(l,t.slug);let p=l.replace(/\\s+/g,"-");p.length>0&&!o.has(p)&&o.set(p,t.slug)}return{byBasename:r,byTitle:o}}function _r(e,r,o){if(r.has(e))return e;let t=_t(e),i=o.byBasename.get(t);if(i)return i;let l=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(t);return l||null}function Gr(e,r){return e.length===0?"":[...e].sort((t,i)=>(r.get(i)??0)-(r.get(t)??0))[0]??""}function Hr(e,r,o=void 0){let t=e.filter(u=>!Cn(u.slug)&&!Nn(u.slug)&&!Er(u)),i=new Map;for(let u of t){let m=xr(u,r.prefixes),v=i.get(m)??[];v.push(u),i.set(m,v)}let l=[];for(let u of i.values()){let m=Sr(u,r);m&&l.push(m)}let p=new Set(l.map(u=>u.slug)),E=Dr(l),C=new Map,V=[],Z=new Set,b=new Map,re=u=>{C.set(u,(C.get(u)??0)+1)},O=(u,m,v)=>u<m?`${u}|${m}|${v}`:`${m}|${u}|${v}`,L=(u,m,v,_)=>{let A=O(u,m,v);return Z.has(A)?!1:(Z.add(A),V.push({source:u,target:m,kind:v}),_&&(re(u),re(m)),!0)};for(let u of l)for(let m of u.links){if(Nr(m))continue;let v=_r(m,p,E);v!==null&&v!==u.slug&&L(u.slug,v,"wikilink",!0)}let M=Ir(),U=new Set;for(let u of l)for(let m of u.externalLinks){let v=Pn(m);v===null||!Pr(v,M)||(U.add(v),L(u.slug,Tn(v),"external",!0))}let D=new Map;for(let u of U){let m=new URL(u).hostname.replace(/^www\\./,"");D.set(m,(D.get(m)??0)+1)}let $=new Set,B=new Map;for(let u of l)for(let m of u.tags){b.set(m,(b.get(m)??0)+1);let v=`tag:${m}`;$.add(v),L(u.slug,v,"tag",!0);let _=B.get(m)??[];_.push(u.slug),B.set(m,_)}if(o!==!1){let u=o?.maxTagsPerNote,m=o?.maxEdges,v=0;e:for(let _ of l)if(!(_.tags.length<2)&&!(u!==void 0&&_.tags.length>u))for(let A=0;A<_.tags.length;A+=1)for(let z=A+1;z<_.tags.length;z+=1){if(m!==void 0&&v>=m)break e;L(`tag:${_.tags[A]}`,`tag:${_.tags[z]}`,"cooc",!1)&&(v+=1)}}let R=new Map;for(let u of l){let m=vn(u.slug);if(m==="root")continue;let v=R.get(m)??[];v.push(u.slug),R.set(m,v)}for(let u of R.values()){if(u.length<2)continue;let m=[...u].sort();for(let v=0;v<m.length;v+=1){let _=m[(v+1)%m.length],A=m[(v+wn)%m.length],z=m[v];z===void 0||_===void 0||(z!==_&&!Z.has(O(z,_,"wikilink"))&&L(z,_,"folder",!1),m.length>wn+1&&A!==void 0&&z!==A&&!Z.has(O(z,A,"wikilink"))&&L(z,A,"folder",!1))}}let te=[...C.values()],le=te.length>0?Math.min(...te):0,J=te.length>0?Math.max(...te):0,Y=u=>{let m=ot(C.get(u)??0,le,J);return $e+m*(Pt-$e)},q=[...l].sort((u,m)=>(C.get(m.slug)??0)-(C.get(u.slug)??0)),fe=new Set(q.filter(u=>(C.get(u.slug)??0)>0).slice(0,er).map(u=>u.slug)),W=l.map(u=>{let m=fe.has(u.slug),v=m?it(u.slug,pn.min,pn.max):it(u.slug,mn.min,mn.max);return{id:u.slug,name:u.title,type:"note",val:Y(u.slug),degree:C.get(u.slug)??0,isHub:m,tag:"",slug:u.slug,url:"",folder:vn(u.slug),tags:u.tags,dominantTag:Gr(u.tags,b),excerpt:Lr(u.content),phase:We(u.slug),x:v.x,y:v.y,z:v.z}});for(let u of U){let m=Tn(u),v=it(m,hn.min,hn.max);W.push({id:m,name:Ar(u,D),type:"external",val:Y(m)*ur,degree:C.get(m)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:We(m),x:v.x,y:v.y,z:v.z})}for(let u of $){let m=u.slice(4),v=it(u,bn.min,bn.max);W.push({id:u,name:m,type:"tag",val:lt(Y(u)*.7,$e,Pt),degree:C.get(u)??0,isHub:!1,tag:m,slug:`tags/${m}`,url:"",folder:"tag",tags:[m],dominantTag:m,excerpt:"",phase:We(u),x:v.x,y:v.y,z:v.z})}return{nodes:W,links:V}}function Mt(e){let r=new Map,o=(t,i)=>{let l=r.get(t)??new Set;l.add(i),r.set(t,l)};for(let t of e){if(t.kind!=="wikilink"&&t.kind!=="tag"&&t.kind!=="external")continue;let i=F(t.source),l=F(t.target);o(i,l),o(l,i)}return r}function Ne(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let t=getComputedStyle(o).color;return o.remove(),t||r}function An(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Ne("--graph-backdrop","#ffffff"),ink:Ne("--graph-text","#0f0f0f"),accent:Ne("--graph-accent","#27798c"),tertiary:Ne("--graph-external","#3f6f8c"),gray:Ne("--graph-muted","#737373"),external:Ne("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Ie(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Rr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Fr(){return Rr()}function ee(){return document.documentElement.getAttribute("saved-theme")==="dark"}function ct(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}return null}function Ve(e,r){let o=ct(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function de(e,r,o){let t=ct(e),i=ct(r);if(!t||!i)return e;let l=(p,E)=>Math.round(p+(E-p)*o);return`rgb(${l(t.r,i.r)}, ${l(t.g,i.g)}, ${l(t.b,i.b)})`}function Dt(e){return ee()?de(e.bg,"#05070f",.88):e.bg}function Or(e){let r=ct(e);if(!r)return e;let o=t=>{let i=t/255,l=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.ceil(l*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function zr(e){return Or(Dt(e))}function Dn(e,r){let o=0;for(let t of e)o=o*31+t.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function Ln(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:Dn(e,[r.accent,r.tertiary,r.ink,r.gray])}function Br(e,r){return e.length===0?r.ink:Dn(e,[r.accent,r.tertiary])}function Vr(e){let r=e.split("/").map(l=>encodeURIComponent(l)).join("/"),o=document.querySelector("base")?.getAttribute("href"),t="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(t=o.endsWith("/")?o:`${o}/`);let i=`${t}${r}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function $r(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function Ct(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function qr(e){let o=await import(e?jn:Kn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):$r(o)}function Wr(){try{let e=sessionStorage.getItem(Sn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Ur(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Mn);if(!r)return e;let o=st(JSON.parse(r)),t=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,l=typeof o.zoom=="number"?o.zoom:e.zoom,p=typeof o.spread=="number"?o.spread:e.spread,E=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:t,edgeScale:i,zoom:l,spread:p,hubGravity:E}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function Pe(e){try{sessionStorage.setItem(Mn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function Nt(e){try{sessionStorage.setItem(Sn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function Yr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Kr(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function jr(e,r){return e.type==="note"&&e.folder===r}function En(e,r){let o=F(r),t=e.find(i=>i.id===o);return!t||t.type!=="note"?null:t.folder}function Xr(e,r,o){let t=new Map;if(r==="folder"){let i=[...new Set(e.nodes.filter(l=>l.type==="note").map(l=>l.folder))];return i.forEach((l,p)=>{let E=Math.PI*2*p/Math.max(i.length,1),C={x:Math.cos(E)*o,y:Math.sin(E)*o,z:0};for(let V of e.nodes)V.type==="note"&&V.folder===l&&t.set(V.id,C)}),t}if(r==="tag"){let i=e.nodes.filter(p=>p.type==="tag"),l=new Map;i.forEach((p,E)=>{let C=Math.PI*2*E/Math.max(i.length,1);l.set(p.tag,{x:Math.cos(C)*o,y:Math.sin(C)*o,z:0})});for(let p of e.nodes)if(p.type==="tag"){let E=l.get(p.tag);E&&t.set(p.id,E)}else if(p.dominantTag.length>0){let E=l.get(p.dominantTag);E&&t.set(p.id,E)}}return t}function Zr(e,r){let o=[],t=i=>{let l=r*i;for(let p of o){let E=e(p);E&&(p.vx=(p.vx??0)+(E.x-(p.x??0))*l,p.vy=(p.vy??0)+(E.y-(p.y??0))*l,p.vz=(p.vz??0)+(E.z-(p.z??0))*l)}};return t.initialize=i=>{o=i},t}function xn(e,r,o,t){for(let i of e.querySelectorAll(r)){if(!(i instanceof HTMLElement))continue;let l=i.getAttribute(t);i.setAttribute("aria-pressed",l===o?"true":"false")}}function Jr(e,r,o,t){let i=Mt(r.links),l=(n,a,s)=>n<a?`${n}|${a}|${s}`:`${a}|${n}|${s}`,p=new Map(t.fullData.nodes.map(n=>[n.id,n])),E=new Map,C=new Set,V=new Set;t.fullData!==r&&(E=Mt(t.fullData.links),C=new Set(r.nodes.map(n=>n.id)),V=new Set(r.links.map(n=>l(F(n.source),F(n.target),n.kind))));let Z=n=>{if(t.fullData===r)return!1;let a=rn(E,C,n,t.expandHops);if(!C.has(n)&&p.has(n)&&a.add(n),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let s=t.layout.incrementalWarmup?p.get(n):void 0,d=0;for(let g of a){let f=p.get(g);if(f){if(s&&f.id!==s.id){let y=on(s,d,t.use3d);f.x=y.x,f.y=y.y,f.z=y.z,f.vx=f.vy=f.vz=0,d+=1}r.nodes.push(f),C.add(g)}}for(let g of t.fullData.links){let f=F(g.source),y=F(g.target);if(!C.has(f)||!C.has(y))continue;let c=l(f,y,g.kind);V.has(c)||(V.add(c),r.links.push(g))}return i=Mt(r.links),!0},b={lens:Wr(),allLabels:!1,focusTag:null,focusFolder:null},re=null,O=null,L=Ur(),M=!1,U=!1,D=vt,$=qe,B=()=>{e.cooldownTicks(t.layout.freezeAfterWarmup?90:t.layout.cooldownTicks??200),e.d3ReheatSimulation()},R=()=>O??re,te=new Set(r.nodes.filter(n=>n.type==="note").sort((n,a)=>a.degree-n.degree).slice(0,tr).map(n=>n.id)),le=n=>{let a=n.val;return n.isHub&&(a*=cn),b.lens==="tag"&&n.type==="tag"&&(a*=lr),b.focusTag&&n.id===`tag:${b.focusTag}`&&(a*=cr),a},J=n=>{let a=R();return a===n.id?!0:a!==null?i.get(a)?.has(n.id)??!1:b.allLabels||te.has(n.id)},Y=n=>{let a=Pt*cn,s=lt((le(n)-$e)/(a-$e),0,1);return(un+s*(gr-un))*L.nodeScale},q=n=>{let a=R();if(a!==null)return a===n||(i.get(a)?.has(n)??!1);if(b.focusTag===null&&b.focusFolder===null)return!0;let s=r.nodes.find(d=>d.id===n);return s?b.focusFolder!==null?jr(s,b.focusFolder):b.focusTag!==null&&Kr(s,b.focusTag):!1},fe=n=>n.type==="external"?o.current.external:b.lens==="tag"?n.type==="tag"?o.current.tertiary:Br(n.dominantTag,o.current):b.lens==="folder"?n.type==="tag"?o.current.tertiary:Ln(n.folder,o.current):b.lens==="hub"?n.type==="tag"?o.current.tertiary:n.isHub?o.current.accent:o.current.ink:n.type==="tag"?o.current.tertiary:o.current.ink,W=n=>{let a=R();if(a!==null&&(a===n.id||(i.get(a)?.has(n.id)??!1)))return o.current.accent;let s=fe(n);return q(n.id)?ee()?n.type==="external"?de(o.current.external,"#ffffff",.18):n.type==="tag"?de(o.current.tertiary,"#ffffff",.22):n.isHub?de("#fff3e4",o.current.accent,.1):de("#ffffff",o.current.accent,.12):n.type==="external"?de(o.current.external,"#08343a",.12):n.type==="tag"?de(o.current.tertiary,o.current.accent,.55):n.isHub?de(o.current.ink,o.current.accent,.22):s:de(s,Dt(o.current),1-ze)},u=n=>{let a=ee();return n==="wikilink"?a?.16:.36:n==="external"?a?.12:.3:n==="tag"?a?.1:.24:0},m=n=>{if(n.kind==="cooc"||n.kind==="folder")return n.kind==="cooc"&&b.lens==="tag"||n.kind==="folder"&&b.lens==="folder"?.06:0;let a=F(n.source),s=F(n.target),d=R();return d!==null&&(a===d||s===d)?ee()?.72:.78:(d!==null||b.focusTag!==null||b.focusFolder!==null)&&(!q(a)||!q(s))?u(n.kind)*ze:u(n.kind)},v=n=>{let a=F(n.source),s=F(n.target),d=R(),g=ee()?hr:br;return d!==null&&(a===d||s===d)?de(o.current.accent,g,.45):g},_=n=>Ve(v(n),m(n)),A=()=>({nodes:r.nodes,links:r.links}),z=n=>{let a=ee()?"rgba(255, 255, 255, 1)":Ve(o.current.ink,.88);return q(n.id)?a:Ve(a,ze)},ve=n=>ee()?q(n.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",pe=()=>{let n=e.controls?.().target;if(n&&(D={x:n.x,y:n.y,z:n.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let s={x:a.x-D.x,y:a.y-D.y,z:a.z-D.z},d=Math.hypot(s.x,s.y,s.z);if(d>1)return{dir:s,len:d}}}return{dir:ke,len:qe}},he=n=>{if(t.use3d){if(typeof e.cameraPosition!="function")return;let a=$/lt(L.zoom,.4,2.5),{dir:s,len:d}=pe(),g=a/d;e.cameraPosition({x:D.x+s.x*g,y:D.y+s.y*g,z:D.z+s.z*g},D,Ie()?0:n),De();return}typeof e.zoom=="function"&&e.zoom(L.zoom,Ie()?0:n)},ce=()=>{let n=vr(L.spread),a=Tt.min+n*(Tt.max-Tt.min),s=Lt.min+n*(Lt.max-Lt.min),d=new Map(r.nodes.map(S=>[S.id,S.degree])),g=Math.max(0,...d.values()),f=S=>ot(S.degree,0,g),y=S=>jt(d.get(F(S.source))??0,d.get(F(S.target))??0,g),c=e.d3Force("charge");c?.strength&&c.strength(S=>a*Xt(f(S))),c?.theta&&t.layout.chargeTheta!==void 0&&c.theta(t.layout.chargeTheta);let w=e.d3Force("link");w?.distance&&w.distance(S=>{let H=Zt(y(S),L.hubGravity);return b.lens==="tag"&&S.kind==="tag"?s*.72*H:S.kind==="cooc"||S.kind==="folder"?s:s*H}),w?.strength&&w.strength(S=>{if(S.kind==="cooc"||S.kind==="folder")return .015;let H=Jt(y(S),L.hubGravity);if(b.lens==="tag"&&S.kind==="tag")return .3*H;if(b.lens==="folder"){let X=En(r.nodes,S.source),me=En(r.nodes,S.target);if(X!==null&&X===me)return .16*H}return S.kind==="tag"?.14*H:(S.kind==="external"?.16:.24)*H}),t.forceCollide&&e.d3Force("collision",t.forceCollide(S=>Y(S)+mr).strength(.85).iterations(1));let h=e.d3Force("center");h?.strength&&h.strength(nr);let T=Et.min+n*(Et.max-Et.min),G=Xr(r,b.lens,T),P=b.lens==="folder"||b.lens==="tag"?.08:0;e.d3Force("cluster",Zr(S=>G.get(S.id)??null,P)),t.use3d&&e.d3Force("flattenZ",null)},oe=new Map,ne=new Map,k=new Map,I=new Map,N=new Map,K=new Map,ae=new Map,be=new Map,ye=(n,a,s)=>{let d=`${Math.round(a*4)}|${s}`;return at(be,d,()=>{let g=new n.MeshBasicMaterial({color:s});return ee()&&g.color.multiplyScalar(2),{geometry:new n.SphereGeometry(a,6,6),material:g}})},x=new Map,Gt=new Map,_n=(n,a,s)=>{let d=`${a}|${s}`;return at(x,d,()=>new n.CylinderGeometry(a,a,1,s))},Ht=(n,a,s)=>{let d=`${a}|${s}`;return at(Gt,d,()=>new n.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1}))},Ee=()=>{if(!t.use3d||typeof e.nodeThreeObject!="function")return;let n=t.spriteText,a=t.three,s=t.lod.dotDistance,d=t.lod.nodeResolution??14,g=t.interaction.incrementalRepaint;if(oe.clear(),ne.clear(),be.clear(),I.clear(),N.clear(),K.clear(),g)for(let f of r.nodes)K.set(f.id,f);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(f=>{let y=Y(f),c=W(f),w=!1;if(a){if(ee()){let H=f.isHub?1.35:1.1,X=new a.MeshLambertMaterial({color:c,emissive:c,emissiveIntensity:H});oe.set(f.id,{material:X,base:H,phase:f.phase}),g&&I.set(f.id,X),w=new a.Mesh(new a.SphereGeometry(y,d,d),X)}else{let H=new a.MeshBasicMaterial({color:c});g&&I.set(f.id,H),w=new a.Mesh(new a.SphereGeometry(y,d,d),H)}if(s!==void 0&&w!==!1){let H=ye(a,y,c),X=new a.Mesh(H.geometry,H.material);N.set(f.id,X);let me=new a.LOD;me.addLevel(w,0),me.addLevel(X,s),w=me}}let h=J(f);if(!n||!g&&!h)return w;let T=Array.from(f.name),G=window.innerWidth<700?24:48,P=new n(T.length>G?`${T.slice(0,G).join("")}\\u2026`:f.name);if(P.color=z(f),P.backgroundColor=!1,P.fontWeight="400",P.strokeWidth=ee()?.35:0,P.strokeColor=ve(f),P.material.transparent=!0,P.material.depthWrite=!1,P.material.alphaTest=.01,P.material.toneMapped=!1,P.textHeight=te.has(f.id)?6.5:5.5,P.center.set(0,.5),P.position.x=y+2,P.position.y=0,g?(P.visible=h,ne.set(f.id,{sprite:P,node:f})):t.lod.labelDistance!==void 0&&ne.set(f.id,{sprite:P,node:f}),!a||w===!1)return P;let S=new a.Group;return S.add(w),S.add(P),S})},Gn=()=>{let n=t.three;if(!t.use3d||!n||typeof e.linkThreeObject!="function")return;let a=new n.Vector3(0,1,0),s=t.lod.linkResolution??5,d=t.lod.cullDistance,g=t.interaction.incrementalRepaint,f=t.lod.shareLinkResources;if(k.clear(),ae.clear(),x.clear(),Gt.clear(),g)for(let y of r.links){let c=F(y.source),w=F(y.target);for(let h of[c,w]){let T=ae.get(h);T?T.push(y):ae.set(h,[y])}}e.linkThreeObject(y=>{let c=pr[y.kind]*L.edgeScale,w=f?Ht(n,v(y),m(y)):new n.MeshBasicMaterial({color:v(y),transparent:!0,opacity:m(y),depthWrite:!1}),h=f?_n(n,c,s):new n.CylinderGeometry(c,c,1,s),T=new n.Mesh(h,w);return(d!==void 0||g)&&k.set(y,T),T}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((y,c)=>{let w=c.end.x-c.start.x,h=c.end.y-c.start.y,T=c.end.z-c.start.z,G=Math.sqrt(w*w+h*h+T*T);return y.position.x=(c.start.x+c.end.x)/2,y.position.y=(c.start.y+c.end.y)/2,y.position.z=(c.start.z+c.end.z)/2,y.scale.x=1,y.scale.y=Math.max(G,.01),y.scale.z=1,y.quaternion.setFromUnitVectors(a,new n.Vector3(w,h,T).normalize()),!0})},dt=()=>{!t.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(n=>{let a=R();if(a===null||!M||Ie()||document.hidden)return 0;let s=F(n.source),d=F(n.target);return s===a||d===a?2:0})},xe=()=>{e.nodeVal(le),e.nodeColor(W),e.linkColor(_),e.linkWidth(n=>{let a=F(n.source),s=F(n.target),d=R(),g=L.edgeScale;return d!==null&&(a===d||s===d)?.7*g:n.kind==="wikilink"||n.kind==="external"?.5*g:(n.kind==="tag"?.35:.25)*g}),typeof e.linkOpacity=="function"&&e.linkOpacity(sn),dt(),Gn(),t.use3d||e.nodeCanvasObjectMode(()=>"replace")},Hn=(n,a)=>{let s=an(i,n,a,K.keys()),d=new Set;for(let g of s){let f=K.get(g);if(!f)continue;let y=W(f);I.get(g)?.color.set(y);let c=N.get(g);c&&t.three&&(c.material=ye(t.three,Y(f),y).material);let w=oe.get(g);w&&w.material.emissive.set(y);let h=ne.get(g);h&&(h.sprite.color=z(f),h.sprite.strokeColor=ve(f),h.sprite.strokeWidth=ee()?.35:0,h.sprite.visible=J(f));for(let T of ae.get(g)??[]){if(d.has(T))continue;d.add(T);let G=k.get(T);G&&(t.lod.shareLinkResources&&t.three?G.material=Ht(t.three,v(T),m(T)):(G.material.color.set(v(T)),G.material.opacity=m(T)))}}},ft=n=>{if(t.interaction.incrementalRepaint&&t.use3d){dt(),Hn(n,R());return}xe(),t.use3d&&Ee()},gt=()=>{let n=t.root.querySelector("[data-graph-legend]");if(!(n instanceof HTMLElement))return;let a=(f,y)=>{let c=document.createElement("span");c.className="graph-landing__legend-item";let w=document.createElement("span");w.className="graph-landing__dot",w.setAttribute("aria-hidden","true"),w.style.background=f;let h=document.createElement("span");return h.textContent=y,c.append(w,h),c},s=t.root.dataset.legendNotes??"Notes",d=t.root.dataset.legendTags??"Tags",g=t.root.dataset.legendLinks??"Links";n.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,d),a(o.current.external,g))},Rt=n=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[n.dataset.key]=n.dataset.value,s.setAttribute("aria-pressed",n.pressed?"true":"false");let d=document.createElement("span");if(d.className="graph-landing__facet-name",n.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=n.dotColor,d.append(f)}d.append(document.createTextNode(n.label));let g=document.createElement("span");return g.className="graph-landing__tag-count",g.textContent=String(n.count),s.append(d,g),a.append(s),a},Ft=()=>{let n=t.root.querySelector("[data-graph-tags]");if(!(n instanceof HTMLElement))return;let a=t.root.querySelector("[data-graph-facet-label]"),s=t.root.querySelector(".graph-landing__tags");if(b.lens==="folder"){let g=t.root.dataset.folderRootLabel??"root",f=new Map;for(let c of r.nodes)c.type==="note"&&f.set(c.folder,(f.get(c.folder)??0)+1);let y=[...f.entries()].sort((c,w)=>w[1]-c[1]);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=y.length===0),n.replaceChildren(...y.map(([c,w])=>Rt({dataset:{key:"graphFolder",value:c},pressed:b.focusFolder===c,dotColor:Ln(c,o.current),label:c==="root"?g:c,count:w})));return}let d=r.nodes.filter(g=>g.type==="tag").sort((g,f)=>f.degree-g.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=d.length===0),n.replaceChildren(...d.map(g=>Rt({dataset:{key:"graphTag",value:g.tag},pressed:b.focusTag===g.tag,dotColor:null,label:g.tag,count:g.degree})))},mt=!0,pt=()=>{r.nodes.length>0&&e.zoomToFit?.(0,80),$=pe().len,he(0),De()},Ot=0;e.onEngineStop(()=>{mt&&(Ot=window.requestAnimationFrame(()=>{mt=!1,pt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Ot));let Ae=(n=!1)=>{e.warmupTicks(n&&t.layout.incrementalWarmup?0:t.layout.warmupTicks??(t.use3d?50:60)),e.graphData(A()),ce(),xe(),Ee(),gt(),Ft(),xn(t.root,"[data-graph-lens]",b.lens,"data-graph-lens"),B()},zt=n=>{b.lens=n,n!=="tag"&&(b.focusTag=null),n!=="folder"&&(b.focusFolder=null),Nt(n),Ae()},Rn=n=>{b.focusTag=b.focusTag===n?null:n,b.focusFolder=null,b.focusTag&&(b.lens="tag",Nt("tag")),Ae()},Fn=n=>{b.focusFolder=b.focusFolder===n?null:n,b.focusTag=null,b.focusFolder&&(b.lens="folder",Nt("folder")),Ae()},ht=()=>t.use3d?zr(o.current):Dt(o.current),De=()=>{if(!t.use3d||!t.lod.fog||!t.three||typeof e.scene!="function")return;let n=pe().len;e.scene().fog=new t.three.Fog(ht(),n*dr,n*fr)};e.graphData(A()),e.backgroundColor(ht()),e.nodeLabel(n=>n.name),e.nodeRelSize(rr),typeof e.nodeOpacity=="function"&&e.nodeOpacity(or),typeof e.linkOpacity=="function"&&e.linkOpacity(sn),ce(),xe();let Se=t.root.querySelector("[data-graph-preview]"),Ue=t.root.querySelector("[data-graph-preview-chip]"),Ye=t.root.querySelector("[data-graph-preview-title]"),Ke=t.root.querySelector("[data-graph-preview-excerpt]"),je=0;window.addCleanup(()=>window.clearTimeout(je));let On=n=>{if(!(Se instanceof HTMLElement)||!(Ue instanceof HTMLElement)||!(Ye instanceof HTMLElement)||!(Ke instanceof HTMLElement))return;window.clearTimeout(je);let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",d=t.root.dataset.legendLinks??"Links";if(n.type==="tag"){let g=t.root.dataset.previewTagTemplate??"{n} notes";Ue.textContent=s,Ye.textContent=`#${n.tag}`,Ke.textContent=g.replace("{n}",String(n.degree))}else n.type==="external"?(Ue.textContent=d,Ye.textContent=n.name,Ke.textContent=n.url):(Ue.textContent=a,Ye.textContent=n.name,Ke.textContent=n.excerpt);Se.hidden=!1,Se.dataset.visible="true"},Bt=()=>{Se instanceof HTMLElement&&(window.clearTimeout(je),je=window.setTimeout(()=>{Se.dataset.visible="false",Se.hidden=!0},kr))};if(e.onNodeHover(n=>{let a=R();re=n?n.id:null,O===null&&(n?On(n):Bt()),ft(a)}),t.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let s=e.controls();s.autoRotate=!1,s.autoRotateSpeed=sr}e.warmupTicks(t.layout.warmupTicks??50),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),t.bloomPass&&typeof e.postProcessingComposer=="function"&&(t.bloomPass.strength=ee()?dn:0,t.bloomPass.radius=fn,t.bloomPass.threshold=gn,e.postProcessingComposer().addPass(t.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ke,vt),L.zoom!==1&&he(0)),Ee(),De();{let s=0,d=()=>{if(M&&!Ie()&&!document.hidden&&O===null&&!U){let g=performance.now()/1e3*wr;for(let f of oe.values())f.material.emissiveIntensity=f.base*(1+yr*Math.sin(g+f.phase))}s=window.requestAnimationFrame(d)};s=window.requestAnimationFrame(d),window.addCleanup(()=>window.cancelAnimationFrame(s))}let n=t.lod.labelDistance,a=t.lod.cullDistance;if((n!==void 0||a!==void 0||t.lod.dotDistance!==void 0)&&typeof e.cameraPosition=="function"){let s=e.cameraPosition.bind(e),d=0,g=()=>{let f=s();if(f&&typeof f.x=="number"&&typeof f.y=="number"&&typeof f.z=="number"){let y=Math.max(1,t.root.clientHeight||window.innerHeight);for(let[c,w]of N){let h=p.get(c);if(!h)continue;let T=Math.hypot(f.x-(h.x??0),f.y-(h.y??0),f.z-(h.z??0)),G=Math.max(1,T/y);w.scale.x=w.scale.y=w.scale.z=G}if(n!==void 0)for(let c of ne.values()){let w=c.node.x??0,h=c.node.y??0,T=c.node.z??0,G=Math.hypot(f.x-w,f.y-h,f.z-T);if(c.sprite.visible=en(J(c.node),R()===c.node.id||R()===null&&te.has(c.node.id),G,n),c.sprite.visible){let P=Array.from(c.node.name),S=window.innerWidth<700?24:48,H=P.length>S?`${P.slice(0,S).join("")}\\u2026`:c.node.name;c.sprite.text!==H&&(c.sprite.text=H);let X=e.graph2ScreenCoords?.(w,h,T);c.sprite.center.set(X&&X.x>window.innerWidth*.6?1:0,.5);let me=Math.max(5.5,G/y*11);Math.abs(c.sprite.textHeight-me)>.5&&(c.sprite.textHeight=me)}}if(a!==void 0){let c=R();for(let[w,h]of k){let T=F(w.source),G=F(w.target);if(c!==null&&(T===c||G===c)){h.visible=!0;continue}let P=Math.hypot(f.x-h.position.x,f.y-h.position.y,f.z-h.position.z);h.visible=kt(P,a)!=="dot"}}}d=window.requestAnimationFrame(g)};d=window.requestAnimationFrame(g),window.addCleanup(()=>window.cancelAnimationFrame(d))}}else e.warmupTicks(t.layout.warmupTicks??60),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??180),e.nodeCanvasObject((n,a,s)=>{let d=Y(n),g=n.x??0,f=n.y??0;if(a.save(),a.beginPath(),a.arc(g,f,d,0,Math.PI*2),a.fillStyle=W(n),a.fill(),n.isHub&&(a.strokeStyle=q(n.id)?o.current.accent:Ve(o.current.accent,ze),a.lineWidth=1.2/s,a.stroke()),J(n)){let y=11.5/s;a.font=`${y}px ${o.current.font}`,a.fillStyle=q(n.id)?o.current.ink:Ve(o.current.ink,ze),a.textAlign="center",a.textBaseline="bottom",a.fillText(n.name,g,f-d-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((n,a,s)=>{let d=Y(n)+8;s.beginPath(),s.arc(n.x??0,n.y??0,d,0,Math.PI*2),s.fillStyle=a,s.fill()});let _e=t.root.querySelector("[data-graph-inspect]"),Xe=t.root.querySelector("[data-graph-inspect-chip]"),Ze=t.root.querySelector("[data-graph-inspect-title]"),Je=t.root.querySelector("[data-graph-inspect-excerpt]"),bt=t.root.querySelector("[data-graph-inspect-tags]"),yt=t.root.querySelector("[data-graph-inspect-connected]"),j=t.root.querySelector("[data-graph-inspect-open]"),Me=n=>{t.root.dataset.railOpen=n?"true":"false";let a=t.root.querySelector("[data-graph-rail-toggle]"),s=t.root.querySelector("[data-graph-rail-scrim]"),d=t.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",n?"true":"false"),d instanceof HTMLElement&&d.setAttribute("aria-hidden",n?"false":"true"),s instanceof HTMLElement&&(s.hidden=!n)},we=t.root.querySelector("[data-graph-motion]"),ie=()=>{let n=Ie(),a=M&&!n&&!document.hidden&&O===null&&!U;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),we instanceof HTMLButtonElement&&(we.disabled=n||!t.use3d,we.setAttribute("aria-pressed",String(M&&!n)),we.textContent=M&&!n?we.dataset.motionStop??"Pause motion":we.dataset.motionStart??"Enable motion",we.title=n?t.root.dataset.motionReduced??"Reduced motion enabled":we.textContent),!a)for(let s of oe.values())s.material.emissiveIntensity=s.base;dt()},Vt=window.matchMedia("(prefers-reduced-motion: reduce)");Vt.addEventListener("change",ie),document.addEventListener("visibilitychange",ie),window.addCleanup(()=>{Vt.removeEventListener("change",ie),document.removeEventListener("visibilitychange",ie)}),ie();let zn=n=>{let a=i.get(n.id)??new Set,s=[];for(let d of a){let g=r.nodes.find(f=>f.id===d);g&&s.push(g)}return s.sort((d,g)=>g.degree-d.degree)},Bn=n=>{if(!(_e instanceof HTMLElement)||!(Xe instanceof HTMLElement)||!(Ze instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(bt instanceof HTMLElement)||!(yt instanceof HTMLElement))return;let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",d=t.root.dataset.legendLinks??"Links",g=t.root.dataset.inspectEmpty??"No direct connections";n.type==="tag"?(Xe.textContent=s,Ze.textContent=`#${n.tag}`,Je.textContent=(t.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(n.degree))):n.type==="external"?(Xe.textContent=d,Ze.textContent=n.name,Je.textContent=n.url):(Xe.textContent=a,Ze.textContent=n.name,Je.textContent=n.excerpt);let f=n.tags.map(c=>{let w=document.createElement("li");return w.textContent=c,w});bt.replaceChildren(...f),bt.hidden=f.length===0;let y=zn(n).slice(0,12);if(y.length===0){let c=document.createElement("li");c.className="graph-landing__inspect-empty",c.textContent=g,yt.replaceChildren(c)}else yt.replaceChildren(...y.map(c=>{let w=document.createElement("li"),h=document.createElement("button");h.type="button",h.className="graph-landing__inspect-link",h.dataset.graphInspectId=c.id;let T=c.type==="tag"?s:c.type==="external"?d:a,G=document.createElement("span");G.textContent=T;let P=document.createElement("strong");return P.textContent=c.type==="tag"?`#${c.tag}`:c.name,h.append(G,P),w.append(h),w}));j instanceof HTMLAnchorElement&&(n.type==="note"&&n.slug.length>0?(j.hidden=!1,j.href=Vr(n.slug).toString(),j.textContent=t.root.dataset.inspectRead??"Read note",j.removeAttribute("target"),j.removeAttribute("rel")):n.type==="external"&&n.url.length>0?(j.hidden=!1,j.href=n.url,j.textContent=t.root.dataset.inspectOpenExternal??"Open",j.target="_blank",j.rel="noopener noreferrer"):(j.hidden=!0,j.removeAttribute("href"),j.removeAttribute("target"),j.removeAttribute("rel"))),_e.hidden=!1,t.root.dataset.inspecting="true",Me(!1),Bt()},Ce=()=>{let n=R();if(O=null,_e instanceof HTMLElement){let a=_e.contains(document.activeElement);_e.hidden=!0,a&&(Q?.focus({preventScroll:!0}),Te())}t.root.dataset.inspecting="false",re=null,ie(),ft(n)},Vn=n=>{let a=R();O=n.id,ie(),Bn(n),ft(a)},Qe=(n,a=!1)=>{if(Z(n.id)&&Ae(!0),Vn(n),a){D={x:n.x??0,y:n.y??0,z:n.z??0};let s=Ie()?0:450;t.use3d&&e.cameraPosition?($=qe,e.cameraPosition({x:D.x+ke.x/L.zoom,y:D.y+ke.y/L.zoom,z:D.z+ke.z/L.zoom},D,s)):e.centerAt?.(D.x,D.y,s)}},Q=t.root.querySelector("[data-graph-search]"),ge=t.root.querySelector("[data-graph-search-results]"),et=t.root.querySelector("[data-graph-search-status]"),Te=()=>{ge&&(ge.hidden=!0),et&&(et.textContent="")},tt=()=>{if(!Q||!ge)return;let n=tn(t.fullData.nodes,Q.value);ge.replaceChildren(...n.map(a=>{let s=document.createElement("li"),d=document.createElement("button");return d.type="button",d.className="graph-landing__search-result",d.dataset.graphSearchId=a.id,d.textContent=a.name,s.append(d),s})),ge.hidden=n.length===0,et&&(et.textContent=Q.value.trim()?n.length?(t.root.dataset.searchCount??"{n} results").replace("{n}",String(n.length)):t.root.dataset.searchEmpty??"No matching notes":"")},$t=n=>{n.isComposing||(n.key==="ArrowDown"&&(n.preventDefault(),ge?.querySelector("button")?.focus()),n.key==="Enter"&&(n.preventDefault(),ge?.querySelector("button")?.click()),n.key==="Escape"&&(n.stopPropagation(),Te()))};Q?.addEventListener("input",tt),Q?.addEventListener("focus",tt),Q?.addEventListener("keydown",$t),window.addCleanup(()=>{Q?.removeEventListener("input",tt),Q?.removeEventListener("focus",tt),Q?.removeEventListener("keydown",$t)});let nt=!1;e.onNodeClick((n,a)=>{n&&(nt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Qe(n))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ce(),Me(!1)});let se=t.root.querySelector("#graph-landing-mount");if(se instanceof HTMLElement){let n=new ResizeObserver(()=>{e.width(se.clientWidth),e.height(se.clientHeight),O===null&&!mt&&pt()});n.observe(se),window.addCleanup(()=>n.disconnect());let a=null,s=0,d=c=>{a={x:c.clientX,y:c.clientY},nt=!1,U=!0,ie(),Te()},g=(c,w)=>{if(typeof e.graph2ScreenCoords!="function")return null;let h=se.getBoundingClientRect(),T=c-h.left,G=w-h.top,P=null,S=484;for(let H of A().nodes){if(H.x===void 0||H.y===void 0)continue;let X=e.graph2ScreenCoords(H.x,H.y,H.z??0),Yt=(X.x-T)**2+(X.y-G)**2;Yt<S&&(S=Yt,P=H)}return P},f=c=>{let w=a;a=null,U=!1,ie(),!(!w||(c.clientX-w.x)**2+(c.clientY-w.y)**2>25)&&(window.clearTimeout(s),s=window.setTimeout(()=>{if(nt){nt=!1;return}let T=g(c.clientX,c.clientY);T?Qe(T):Ce()},0))},y=()=>{a=null,U=!1,ie()};se.addEventListener("pointerdown",d,!0),se.addEventListener("pointerup",f,!0),se.addEventListener("pointercancel",y,!0),window.addCleanup(()=>{window.clearTimeout(s),se.removeEventListener("pointerdown",d,!0),se.removeEventListener("pointerup",f,!0),se.removeEventListener("pointercancel",y,!0)})}xn(t.root,"[data-graph-lens]",b.lens,"data-graph-lens"),gt(),Ft(),b.lens!=="all"&&Ae(),t.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let qt=()=>{o.current=An(),e.backgroundColor(ht()),De(),t.bloomPass&&(t.bloomPass.strength=ee()?dn:0,t.bloomPass.radius=fn,t.bloomPass.threshold=gn),xe(),Ee(),gt()};document.addEventListener("themechange",qt),window.addCleanup(()=>document.removeEventListener("themechange",qt));let Wt=n=>{let a=n.target;if(!(a instanceof Element))return;if(a.closest(".graph-landing__search")||Te(),a.closest("[data-graph-motion]")){M=!M,ie();return}if(a.closest("[data-graph-reset]")){Ce(),Q&&(Q.value=""),Te(),D=vt,L.zoom=1,Pe(L),Le instanceof HTMLInputElement&&(Le.value="100"),b.focusTag=b.focusFolder=null,zt("all"),t.use3d?pt():(e.centerAt?.(0,0,0),e.zoom?.(1,0)),De();return}let s=a.closest("[data-graph-search-id]");if(s?.dataset.graphSearchId){let h=p.get(s.dataset.graphSearchId);if(h){Qe(h,!0),Te();let T=t.root.querySelector("[data-graph-inspect-title]");T?.setAttribute("tabindex","-1"),T?.focus({preventScroll:!0})}return}if(a.closest("[data-graph-inspect-close]")){Ce();return}if(a.closest("[data-graph-rail-toggle]")){let h=t.root.dataset.railOpen!=="true";h&&Ce(),Me(h);return}if(a.closest("[data-graph-rail-scrim]")){Me(!1);return}let d=a.closest("[data-graph-inspect-id]");if(d instanceof HTMLElement&&d.dataset.graphInspectId){let h=t.fullData.nodes.find(T=>T.id===d.dataset.graphInspectId);h&&Qe(h,!0);return}let g=a.closest("[data-graph-lens]");if(g instanceof HTMLElement&&g.dataset.graphLens&&Yr(g.dataset.graphLens)){zt(g.dataset.graphLens);return}let f=a.closest("[data-graph-tag]");if(f instanceof HTMLElement&&f.dataset.graphTag){Rn(f.dataset.graphTag);return}let y=a.closest("[data-graph-folder]");if(y instanceof HTMLElement&&y.dataset.graphFolder){Fn(y.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){B();return}let c=a.closest("[data-graph-labels]");if(c instanceof HTMLButtonElement){b.allLabels=!b.allLabels,c.setAttribute("aria-pressed",b.allLabels?"true":"false");let h=c.dataset.labelShow??"Labels",T=c.dataset.labelHide??"Labels",G=b.allLabels?T:h;c.title=G,c.setAttribute("aria-label",G),Ee();return}if(a.closest("[data-graph-theme]")){let h=ee()?"light":"dark";document.documentElement.setAttribute("saved-theme",h),localStorage.setItem("theme",h),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${h}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:h}}));return}let w=a.closest("[data-graph-tags-toggle]");if(w instanceof HTMLButtonElement){let h=t.root.querySelector(".graph-landing__tags");if(h instanceof HTMLElement){let T=h.dataset.open==="true";h.dataset.open=T?"false":"true",w.setAttribute("aria-expanded",T?"false":"true")}}},Ge=t.root.querySelector("[data-graph-node-scale]"),He=t.root.querySelector("[data-graph-edge-scale]");if(Ge instanceof HTMLInputElement){Ge.value=String(Math.round(L.nodeScale*100));let n=()=>{L.nodeScale=Number(Ge.value)/100,Pe(L),ce(),B(),xe(),t.use3d&&Ee()};Ge.addEventListener("input",n),window.addCleanup(()=>Ge.removeEventListener("input",n))}if(He instanceof HTMLInputElement){He.value=String(Math.round(L.edgeScale*100));let n=()=>{L.edgeScale=Number(He.value)/100,Pe(L),xe()};He.addEventListener("input",n),window.addCleanup(()=>He.removeEventListener("input",n))}let Re=t.root.querySelector("[data-graph-hub-gravity]");if(Re instanceof HTMLInputElement){Re.value=String(Math.round(L.hubGravity*100));let n=()=>{let a=Number(Re.value)/100;L.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Pe(L),ce(),B()};Re.addEventListener("input",n),window.addCleanup(()=>Re.removeEventListener("input",n))}let Le=t.root.querySelector("[data-graph-zoom]");if(Le instanceof HTMLInputElement){Le.value=String(Math.round(L.zoom*100));let n=()=>{L.zoom=Number(Le.value)/100,Pe(L),he(200)};Le.addEventListener("input",n),window.addCleanup(()=>Le.removeEventListener("input",n))}let Fe=t.root.querySelector("[data-graph-spread]");if(Fe instanceof HTMLInputElement){Fe.value=String(Math.round(L.spread*100));let n=()=>{L.spread=Number(Fe.value)/100,Pe(L),ce(),B()};Fe.addEventListener("input",n),window.addCleanup(()=>Fe.removeEventListener("input",n))}Me(!1),t.root.addEventListener("click",Wt),window.addCleanup(()=>t.root.removeEventListener("click",Wt));let Ut=n=>{if((n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k"&&(n.preventDefault(),Q?.focus()),n.key==="Escape"){if(ge&&!ge.hidden){Q?.focus(),Te();return}if(t.root.dataset.railOpen==="true"){Me(!1);return}Ce()}};window.addEventListener("keydown",Ut),window.addCleanup(()=>window.removeEventListener("keydown",Ut))}function Qr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function eo(){try{return window.localStorage.getItem(At)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function It(e){try{if(e){window.localStorage.setItem(At,"stopped");return}window.localStorage.removeItem(At)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function to(e){let r=performance.now(),o=0,t=i=>{let l=Math.min(1,(i-r)/e.durationMs),p=l*l;e.apply(e.from+(e.to-e.from)*p),l<1&&(o=window.requestAnimationFrame(t))};return o=window.requestAnimationFrame(t),()=>{window.cancelAnimationFrame(o)}}function no(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let t=window,i=t.onYouTubeIframeAPIReady;if(t.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let l=t.YT;if(!l||typeof l.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(l)},!document.querySelector("script[data-graph-youtube-api]")){let l=document.createElement("script");l.src=ir,l.async=!0,l.dataset.graphYoutubeApi="1",l.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(l)}})}function ro(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function oo(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),t=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),l=e.querySelector("[data-graph-music-track-list]"),p=e.querySelector("[data-graph-music-status]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(l instanceof HTMLElement)||!(p instanceof HTMLElement))return;let E=e.dataset.audioStop??"Stop music",C=e.dataset.audioPlay??"Play music",V=e.dataset.musicLibraryOpen??"Open record collection",Z=e.dataset.musicLibraryClose??"Close record collection",b=e.dataset.musicCurrentTrack??"Current track",re=[];try{let k=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(k))for(let I of k){if(!I||typeof I!="object")continue;let N=I;typeof N.title!="string"||typeof N.url!="string"||N.artist!==void 0&&typeof N.artist!="string"||re.push({title:N.title,...typeof N.artist=="string"?{artist:N.artist}:{},url:N.url})}}catch{}let O=Qt(re);O.length===0&&O.push({title:"Ambient track",videoId:ln});let L=0,M=null,U=!1,D=null,$=!eo(),B=!1,R=!1,te=()=>O[L]??O[0]??{title:"Ambient track",videoId:ln},le=k=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${k}/hqdefault.jpg")`)},J=()=>te().videoId,Y=()=>{l.replaceChildren(),O.forEach((k,I)=>{let N=document.createElement("button");N.type="button",N.className="graph-landing__music-track",N.dataset.graphMusicTrackIndex=String(I),N.setAttribute("aria-current",I===L?"true":"false");let K=document.createElement("img");K.className="graph-landing__music-track-cover",K.src=`https://i.ytimg.com/vi/${k.videoId}/hqdefault.jpg`,K.alt="",K.loading="lazy";let ae=document.createElement("span");ae.className="graph-landing__music-track-copy";let be=document.createElement("span");if(be.className="graph-landing__music-track-title",be.textContent=k.title,ae.appendChild(be),k.artist){let ye=document.createElement("span");ye.className="graph-landing__music-track-artist",ye.textContent=k.artist,ae.appendChild(ye)}N.append(K,ae),l.appendChild(N)}),p.textContent=`${b}: ${te().title}`},q=k=>{e.dataset.musicLibraryOpen=k?"true":"false",i.hidden=!k,i.setAttribute("aria-hidden",k?"false":"true"),t.setAttribute("aria-expanded",k?"true":"false"),t.setAttribute("aria-label",k?Z:V),t.title=k?Z:V},fe=k=>{r.setAttribute("aria-pressed",k?"true":"false"),r.setAttribute("aria-label",k?E:C),r.title=k?E:C,r.dataset.playing=k?"true":"false"},W=()=>{D&&(D(),D=null)},u=k=>{M&&M.setVolume(Math.max(0,Math.min(Be,k)))},m=k=>{!$||B||(B=!0,fe(!0),k.unMute(),u(0),k.playVideo(),W(),D=to({from:0,to:Be,durationMs:ar,apply:u}))},v=()=>{$=!1,B=!1,W(),It(!0),M&&(M.mute(),M.pauseVideo(),u(0)),fe(!1)},_=async()=>{if(!M)try{let k=await no();if(M)return;M=ro({api:k,host:o,videoId:J(),onReady:I=>{U=!0,I.mute(),u(0),I.playVideo(),$&&R&&m(I)},onEnded:I=>{if(!$)return;L=(L+1)%O.length;let N=J();le(N),Y(),I.loadVideoById(N),u(B?Be:0)}})}catch(k){console.error("[graph-landing] ambient audio unavailable",k)}},A=k=>{let I=k.target;if(!(I instanceof Element&&I.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!$||B||Qr())){if(R=!0,U&&M){m(M);return}_()}},z=()=>{if($&&B){v();return}if(R=!0,$=!0,It(!1),U&&M){m(M);return}_()},ve=k=>{if(!(!Number.isInteger(k)||k<0||k>=O.length)){if(L=k,le(J()),Y(),q(!1),$=!0,R=!0,It(!1),U&&M){M.loadVideoById(J()),B?(M.unMute(),M.playVideo(),u(Be)):m(M);return}_()}},pe=()=>{let k=e.dataset.musicLibraryOpen!=="true";if(k){e.dataset.railOpen="false";let I=e.querySelector("[data-graph-rail-toggle]"),N=e.querySelector("#graph-landing-rail"),K=e.querySelector("[data-graph-rail-scrim]");I instanceof HTMLButtonElement&&I.setAttribute("aria-expanded","false"),N instanceof HTMLElement&&N.setAttribute("aria-hidden","true"),K instanceof HTMLElement&&(K.hidden=!0)}q(k)},he=k=>{let I=k.target;if(!(I instanceof Element))return;let N=I.closest("[data-graph-music-track-index]");N instanceof HTMLButtonElement&&ve(Number(N.dataset.graphMusicTrackIndex))},ce=k=>{if(e.dataset.musicLibraryOpen!=="true")return;let I=k.target;(!(I instanceof Element)||!I.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&q(!1)},oe=k=>{k.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(q(!1),k.stopImmediatePropagation())},ne=()=>{if(M){if(document.hidden){W(),M.pauseVideo();return}$&&B&&(M.playVideo(),u(Be))}};le(J()),fe(!1),Y(),q(!1),_(),r.addEventListener("click",z),t.addEventListener("click",pe),l.addEventListener("click",he),e.addEventListener("click",ce),e.addEventListener("pointerdown",A,!0),e.addEventListener("touchstart",A,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",ne),window.addEventListener("keydown",oe),window.addCleanup(()=>{r.removeEventListener("click",z),t.removeEventListener("click",pe),l.removeEventListener("click",he),e.removeEventListener("click",ce),e.removeEventListener("pointerdown",A,!0),e.removeEventListener("touchstart",A,!0),document.removeEventListener("visibilitychange",ne),window.removeEventListener("keydown",oe),W(),M&&(M.pauseVideo(),M.destroy(),M=null)})}async function ao(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",oo(e);let r=e.querySelector("#graph-landing-mount");if(!(r instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),t=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",i=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",l=(e.dataset.localePrefixes??"").split(",").map(x=>x.trim()).filter(x=>x.length>0),p=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",E=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",C=e.dataset.graphIndexPath??"",V=ue(e.dataset.maxRenderedNodes,x=>Number.parseInt(x,10)),Z=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,b=Number.isFinite(Z)?Z:1,re=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,O=e.dataset.graphRenderMode==="3d"?"3d":"auto",L=e.dataset.graphLayoutFreezeAfterWarmup==="true",M=ue(e.dataset.graphLayoutWarmupTicks,x=>Number.parseInt(x,10)),U=ue(e.dataset.graphLayoutCooldownTicks,x=>Number.parseInt(x,10)),D=ue(e.dataset.graphLayoutChargeTheta,Number.parseFloat),$=e.dataset.graphLayoutIncrementalWarmup==="true",B=ue(e.dataset.graphLodLabelDistance,Number.parseFloat),R=ue(e.dataset.graphLodDotDistance,Number.parseFloat),te=ue(e.dataset.graphLodCullDistance,Number.parseFloat),le=e.dataset.graphLodFog==="true",J=ue(e.dataset.graphLodNodeResolution,x=>Number.parseInt(x,10)),Y=ue(e.dataset.graphLodLinkResolution,x=>Number.parseInt(x,10)),q=e.dataset.graphInteractionIncrementalRepaint==="true",fe=e.dataset.graphLodShareLinkResources==="true",W=!1,u=null,m={current:An()},v=()=>{W=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(v);let _=Fr();if(O==="3d"&&!_){Ct(r,"3D graph unavailable: WebGL is required.");return}let A=O==="3d"||_,z=qr(A),ve=A?import(Zn).then(x=>x.default??null).catch(x=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",x),null)):Promise.resolve(null),pe=A?import(Jn).catch(x=>(console.error("[graph-landing] three unavailable; using default node spheres",x),null)):Promise.resolve(null),he=A?import(Qn).then(x=>x.UnrealBloomPass?new x.UnrealBloomPass:null).catch(x=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",x),null)):Promise.resolve(null),ce=A?import(Xn).then(x=>x.forceCollide??null).catch(x=>(console.error("[graph-landing] d3-force-3d collision force unavailable",x),null)):Promise.resolve(null);z.catch(()=>{});let oe;try{oe=st(E==="graphIndex"?await fetch(C).then(x=>x.json()):await fetchData)}catch(x){throw Ct(r,"Graph could not load its index."),x}if(W)return;let ne=Hr(Tr(oe),{localeId:t,sourceLocale:i,prefixes:l},re),k=nn(ne,V),I=p.replace("{n}",String(ne.nodes.length)).replace("{m}",String(ne.links.length));for(let x of o)x.textContent=I;let N;try{N=await z}catch(x){throw Ct(r,"Graph could not load. Check your network connection."),x}let[K,ae,be,ye]=await Promise.all([ve,pe,he,ce]);W||(r.replaceChildren(),u=N(r),u.width(r.clientWidth),u.height(r.clientHeight),r.__graphLanding=u,r.__graphData=k,Jr(u,k,m,{use3d:A,root:e,spriteText:K,bloomPass:be,three:ae,forceCollide:ye,fullData:ne,expandHops:b,layout:{freezeAfterWarmup:L,warmupTicks:M,cooldownTicks:U,chargeTheta:D,incrementalWarmup:$},lod:{labelDistance:B,dotDistance:R,cullDistance:te,fog:le,nodeResolution:J,linkResolution:Y,shareLinkResources:fe},interaction:{incrementalRepaint:q}}))}var io="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let t=o.dataset.preferredLocale;if(t)try{localStorage.setItem(io,t)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{ao()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  --graph-external: #3f6f8c;\n  height: 100dvh;\n  overflow: hidden;\n}\n\nhtml[saved-theme=dark]:has(.graph-landing),\nhtml[saved-theme=dark] body:has(.graph-landing) {\n  --graph-external: #8fb6c8;\n}\n\nhtml:not([saved-theme=dark]):has(.graph-landing),\nhtml:not([saved-theme=dark]) body:has(.graph-landing) {\n  --graph-external: #0f6a72;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: #06101d;\n  --graph-surface: rgba(10, 24, 40, 0.82);\n  --graph-surface-strong: rgba(8, 20, 35, 0.94);\n  --graph-border: rgba(203, 220, 235, 0.2);\n  --graph-text: #f1f6fa;\n  --graph-muted: #aab9c6;\n  --graph-accent: #68d4e8;\n  --graph-accent-soft: rgba(104, 212, 232, 0.13);\n  --graph-external: #8abbd0;\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n:root:not([saved-theme=dark]) .graph-landing {\n  --graph-backdrop: #f5f8fc;\n  --graph-surface: rgba(250, 252, 255, 0.88);\n  --graph-surface-strong: rgba(250, 252, 255, 0.97);\n  --graph-border: rgba(32, 61, 83, 0.2);\n  --graph-text: #172c3d;\n  --graph-muted: #506777;\n  --graph-accent: #236779;\n  --graph-accent-soft: rgba(35, 103, 121, 0.1);\n  --graph-external: #356f85;\n}\n\n.graph-landing__hero {\n  background: radial-gradient(circle at 50% 36%, rgba(25, 69, 102, 0.2), transparent 52%), var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.graph-landing__search {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  box-shadow: 0 12px 36px rgba(0, 5, 12, 0.3);\n  left: 50%;\n  pointer-events: auto;\n  position: absolute;\n  top: 4.75rem;\n  transform: translateX(-50%);\n  width: min(24rem, 100vw - 2rem);\n  z-index: 5;\n}\n\n.graph-landing__search input[type=search] {\n  appearance: none;\n  background: transparent;\n  border: 0;\n  border-radius: inherit;\n  box-sizing: border-box;\n  color: var(--graph-text);\n  font: inherit;\n  font-size: 0.875rem;\n  height: 44px;\n  outline: 0;\n  padding: 0 0.9rem;\n  width: 100%;\n}\n\n.graph-landing__search input[type=search]::placeholder {\n  color: var(--graph-muted);\n  opacity: 0.9;\n}\n\n.graph-landing__search input[type=search]:focus-visible {\n  box-shadow: 0 0 0 2px var(--graph-accent);\n}\n\n.graph-landing__search-results {\n  border-top: 1px solid var(--graph-border);\n  list-style: none;\n  margin: 0;\n  max-height: min(22rem, 100dvh - 15rem);\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 0.35rem;\n}\n\n.graph-landing__search-results[hidden] {\n  display: none;\n}\n\n.graph-landing__search-result {\n  background: transparent;\n  border: 0;\n  border-radius: 9px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: block;\n  font: inherit;\n  font-size: 0.82rem;\n  min-height: 44px;\n  padding: 0.65rem 0.7rem;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__search-result:hover,\n.graph-landing__search-result:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__search-result:focus-visible {\n  box-shadow: inset 0 0 0 2px var(--graph-accent);\n}\n\n.graph-landing__search-status {\n  color: var(--graph-muted);\n  display: block;\n  font-size: 0.7rem;\n  min-height: 1px;\n  padding: 0 0.9rem;\n}\n\n.graph-landing__search-status:not(:empty) {\n  padding-bottom: 0.55rem;\n}\n\n.graph-landing__navigation {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  gap: 6px;\n  padding: 0.35rem;\n}\n\n.graph-landing__navigation button {\n  background: transparent;\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-text);\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.75rem;\n  flex: 1 1 0;\n  min-height: 44px;\n  padding: 0 0.9rem;\n}\n\n.graph-landing__navigation button:hover,\n.graph-landing__navigation button:focus-visible,\n.graph-landing__navigation button[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  border-color: color-mix(in srgb, var(--graph-accent) 60%, transparent);\n  color: var(--graph-accent);\n}\n\n.graph-landing__navigation button:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0.02;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: #d5dee6;\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__search {\n    top: calc(max(8px, env(safe-area-inset-top)) + 3.75rem);\n    width: calc(100vw - 1.5rem);\n  }\n  .graph-landing__search-results {\n    max-height: min(38dvh, 100dvh - 15rem);\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';
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
      hubGravity: "\uD5C8\uBE0C \uC778\uB825",
      searchLabel: "\uC804\uCCB4 \uB178\uD2B8 \uAC80\uC0C9",
      searchPlaceholder: "\uB178\uD2B8 \uAC80\uC0C9",
      searchEmpty: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
      searchCount: "{n}\uAC1C \uACB0\uACFC",
      motion: "\uC6C0\uC9C1\uC784",
      motionStart: "\uC6C0\uC9C1\uC784 \uC2DC\uC791",
      motionStop: "\uC6C0\uC9C1\uC784 \uBA48\uCDA4",
      motionReduced: "\uC6C0\uC9C1\uC784\uC740 \uAE30\uAE30\uC758 \uBAA8\uC158 \uC904\uC774\uAE30 \uC124\uC815\uC744 \uB530\uB985\uB2C8\uB2E4",
      reset: "\uBCF4\uAE30 \uCD08\uAE30\uD654"
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
    hubGravity: "Hub gravity",
    searchLabel: "Search all notes",
    searchPlaceholder: "Search notes",
    searchEmpty: "No results found",
    searchCount: "{n} results",
    motion: "Motion",
    motionStart: "Start motion",
    motionStop: "Stop motion",
    motionReduced: "Motion follows your reduced-motion preference",
    reset: "Reset view"
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
          "data-graph-lod-dot-distance": options.lod?.dotDistance,
          "data-graph-lod-cull-distance": options.lod?.cullDistance,
          "data-graph-lod-fog": options.lod?.fog ? "true" : void 0,
          "data-graph-lod-node-resolution": options.lod?.nodeResolution,
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
          "data-search-empty": copy.searchEmpty,
          "data-search-count": copy.searchCount,
          "data-motion-reduced": copy.motionReduced,
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
                /* @__PURE__ */ u2("div", { class: "graph-landing__search", children: [
                  /* @__PURE__ */ u2("label", { class: "graph-landing__visually-hidden", for: "graph-landing-search", children: copy.searchLabel }),
                  /* @__PURE__ */ u2(
                    "input",
                    {
                      id: "graph-landing-search",
                      type: "search",
                      "data-graph-search": true,
                      placeholder: copy.searchPlaceholder,
                      "aria-label": copy.searchLabel,
                      "aria-controls": "graph-search-results",
                      autoComplete: "off"
                    }
                  ),
                  /* @__PURE__ */ u2(
                    "ul",
                    {
                      class: "graph-landing__search-results",
                      id: "graph-search-results",
                      "data-graph-search-results": true,
                      hidden: true
                    }
                  ),
                  /* @__PURE__ */ u2(
                    "span",
                    {
                      class: "graph-landing__search-status",
                      "data-graph-search-status": true,
                      "aria-live": "polite"
                    }
                  ),
                  /* @__PURE__ */ u2("div", { class: "graph-landing__navigation", role: "group", "aria-label": copy.controls, children: [
                    /* @__PURE__ */ u2(
                      "button",
                      {
                        type: "button",
                        "data-graph-motion": true,
                        "data-motion-start": copy.motionStart,
                        "data-motion-stop": copy.motionStop,
                        "aria-pressed": "false",
                        children: copy.motion
                      }
                    ),
                    /* @__PURE__ */ u2("button", { type: "button", "data-graph-reset": true, "aria-label": copy.reset, children: copy.reset })
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