// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Kt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function at(e,r,o){let t=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(r)?Math.max(0,r):0,c=Number.isFinite(o)?Math.max(i,o):i;if(c===i)return i>0?.5:0;let h=Math.min(c,Math.max(i,t));return(Math.sqrt(h)-Math.sqrt(i))/(Math.sqrt(c)-Math.sqrt(i))}function jt(e,r,o){return at(Math.max(e,r),0,o)}function Re(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function Xt(e){return 1+Re(e,0,1)*1.2}function Zt(e,r){let o=Re(e,0,1),t=Re(r,0,2);return Math.max(.5,1-o*.24*t)}function Jt(e,r){let o=Re(e,0,1),t=Re(r,0,2);return Math.min(1.6,1+o*.3*t)}var Un=/^[A-Za-z0-9_-]{6,20}$/,Yn=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Kn=new Set(["youtu.be","www.youtu.be"]);function ot(e){return e&&Un.test(e)?e:void 0}function jn(e){if(!e)return;let r=e.trim(),o=ot(r);if(o)return o;let t;try{t=new URL(r)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:"||t.username||t.password||t.port)){if(Yn.has(t.hostname)){if(t.pathname==="/watch")return ot(t.searchParams.get("v"));let i=t.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return ot(i[1])}if(Kn.has(t.hostname)){let i=t.pathname.split("/").filter(Boolean);if(i.length===1)return ot(i[0])}}}function Qt(e){let r=[],o=new Set;for(let t of e){let i=t.title.trim(),c=jn(t.url);if(!i||!c||o.has(c))continue;o.add(c);let h=t.artist?.trim();h?r.push({title:i,artist:h,videoId:c}):r.push({title:i,videoId:c})}return r}function F(e){return typeof e=="string"?e:e.id}function Tt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function en(e,r,o,t){return r||e&&Tt(o,t)==="full"}function tn(e,r){let o=r.normalize("NFC").trim().toLowerCase().split(/\\s+/).filter(Boolean);return o.length===0?[]:e.filter(t=>{if(t.type!=="note")return!1;let i=`${t.name} ${t.slug} ${t.tags.join(" ")}`.normalize("NFC").toLowerCase();return o.every(c=>i.includes(c))}).sort((t,i)=>i.degree-t.degree||t.id.localeCompare(i.id)).slice(0,8)}function it(e,r,o){let t=e.get(r);if(t)return t;let i=o();return e.set(r,i),i}function fe(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function nn(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let t=[...e.nodes].sort((h,E)=>E.degree!==h.degree?E.degree-h.degree:h.id<E.id?-1:h.id>E.id?1:0).slice(0,Math.max(0,r)),i=new Set(t.map(h=>h.id)),c=e.links.filter(h=>{let E=F(h.source),C=F(h.target);return i.has(E)&&i.has(C)});return{nodes:t,links:c}}function rn(e,r,o,t){let i=new Set,c=Math.max(0,Math.floor(t));if(c<=0)return i;let h=new Set([o]),E=new Set([o]);for(let C=0;C<c;C+=1){let V=new Set;for(let X of E)for(let y of e.get(X)??[])h.has(y)||(h.add(y),V.add(y),r.has(y)||i.add(y));E=V}return i}var Xn=2.399963229728653,vt=20;function on(e,r,o){let t=e.x??0,i=e.y??0,c=e.z??0,h=r*Xn;return{x:t+vt*Math.cos(h),y:i+vt*Math.sin(h),z:o?c+vt*Math.sin(h*.5):c}}function an(e,r,o,t){if(r===o)return new Set;if(r===null||o===null)return new Set(t);let i=new Set([r,o]);for(let c of e.get(r)??[])i.add(c);for(let c of e.get(o)??[])i.add(c);return i}var dt="0.179.1",Zn="https://esm.sh/force-graph@1.51.4",Jn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${dt}`,Qn="https://esm.sh/d3-force-3d@3.0.6",er=`https://esm.sh/three-spritetext@1.9.2?deps=three@${dt}`,tr=`https://esm.sh/three@${dt}`,nr=`https://esm.sh/three@${dt}/examples/jsm/postprocessing/UnrealBloomPass.js`,rr=8,or=6;var Ve=1,At=4,ar=.05,ir=2.6,sr=1,sn=1,Fe=.18,Mn="graph-landing:lens",Cn="graph-landing:tune",Dt="graph-landing:ambient-audio",cn="UDVtMYqUAyw",Oe=12,cr=28e3,lr="https://www.youtube.com/iframe_api",ur=.18,ln=1.25,dr=1.25,fr=1.15,gr=.55,ke={x:330,y:235,z:565},un={x:0,y:0,z:0},$e=Math.hypot(ke.x,ke.y,ke.z),mr=300/$e,pr=1600/$e,dn=2.6,hr=7,fn=.8,gn=.16,mn=1,br=2.4,yr={wikilink:.65,tag:.45,external:.55,cooc:.08,folder:.08},wr="#a8b0c2",kr="#2a3348",pn={min:80,max:200},hn={min:40,max:110},bn={min:160,max:280},yn={min:90,max:170},wn=220,kn=2,vr=.06,Tr=.8,Lr=350,Lt={min:-100,max:-190},Et={min:72,max:116},xt={min:130,max:260};function Er(e){return lt(e-.5,0,1)}function ct(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function St(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function xr(e){let r=[];for(let o of Object.values(e)){let t=ct(o);if(!Kt(t.filePath))continue;let i=typeof t.slug=="string"?t.slug:"";if(i.length===0)continue;let c=t.multilingual,h=c&&typeof c=="object"?c:void 0;r.push({slug:i,title:typeof t.title=="string"?t.title:i,links:St(t.links),tags:St(t.tags),externalLinks:St(t.externalLinks),content:typeof t.excerpt=="string"?t.excerpt:typeof t.content=="string"?t.content:"",multilingual:h})}return r}function Sr(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=wn?r:`${r.slice(0,wn).trimEnd()}\\u2026`}function We(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function vn(e){return We(e)/(2*Math.PI)}function st(e,r,o){let t=We(e),i=Math.acos(2*vn(`${e}:phi`)-1),c=r+(o-r)*vn(`${e}:r`);return{x:c*Math.sin(i)*Math.cos(t),y:c*Math.sin(i)*Math.sin(t),z:c*Math.cos(i)}}function Nn(e){return e==="index"||e.endsWith("/index")}function In(e){return e==="tags"||e.startsWith("tags/")}function Mr(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Pn(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Mt(e,r){return e.multilingual?.locale?e.multilingual.locale:Pn(e.slug,r).locale}function Cr(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Pn(e.slug,r).permalink}`}function Nr(e,r){let o=e.find(t=>Mt(t,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(t=>Mt(t,r.prefixes)===r.sourceLocale)??e.find(t=>Mt(t,r.prefixes)===void 0)}function lt(e,r,o){return Math.min(o,Math.max(r,e))}function Tn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Ir(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Gt(e){return Ir(e).trim().toLowerCase()}function Pr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Ar(e){let r=e.trim();return r.length===0||Pr(r)||In(r)||Nn(r)?!0:Gt(r).length===0}function Dr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function An(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function _r(e,r){let o=An(e);return o===null?!1:!r.includes(new URL(o).hostname)}function Ln(e){return`external:${e}`}function Gr(e,r){let o=new URL(e),t=o.hostname.replace(/^www\\./,""),i=o.pathname;return(r.get(t)??0)>1&&i.length>1?`${t}${i}`:t}function Hr(e){let r=new Map,o=new Map;for(let t of e){let i=Gt(t.slug);i.length>0&&!r.has(i)&&r.set(i,t.slug);let c=t.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,t.slug);let h=c.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,t.slug)}return{byBasename:r,byTitle:o}}function Rr(e,r,o){if(r.has(e))return e;let t=Gt(e),i=o.byBasename.get(t);if(i)return i;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(t);return c||null}function Fr(e,r){return e.length===0?"":[...e].sort((t,i)=>(r.get(i)??0)-(r.get(t)??0))[0]??""}function Or(e,r,o=void 0){let t=e.filter(l=>!Nn(l.slug)&&!In(l.slug)&&!Mr(l)),i=new Map;for(let l of t){let m=Cr(l,r.prefixes),v=i.get(m)??[];v.push(l),i.set(m,v)}let c=[];for(let l of i.values()){let m=Nr(l,r);m&&c.push(m)}let h=new Set(c.map(l=>l.slug)),E=Hr(c),C=new Map,V=[],X=new Set,y=new Map,ae=l=>{C.set(l,(C.get(l)??0)+1)},O=(l,m,v)=>l<m?`${l}|${m}|${v}`:`${m}|${l}|${v}`,L=(l,m,v,D)=>{let _=O(l,m,v);return X.has(_)?!1:(X.add(_),V.push({source:l,target:m,kind:v}),D&&(ae(l),ae(m)),!0)};for(let l of c)for(let m of l.links){if(Ar(m))continue;let v=Rr(m,h,E);v!==null&&v!==l.slug&&L(l.slug,v,"wikilink",!0)}let M=Dr(),G=new Set;for(let l of c)for(let m of l.externalLinks){let v=An(m);v===null||!_r(v,M)||(G.add(v),L(l.slug,Ln(v),"external",!0))}let Z=new Map;for(let l of G){let m=new URL(l).hostname.replace(/^www\\./,"");Z.set(m,(Z.get(m)??0)+1)}let z=new Set,A=new Map;for(let l of c)for(let m of l.tags){y.set(m,(y.get(m)??0)+1);let v=`tag:${m}`;z.add(v),L(l.slug,v,"tag",!0);let D=A.get(m)??[];D.push(l.slug),A.set(m,D)}if(o!==!1){let l=o?.maxTagsPerNote,m=o?.maxEdges,v=0;e:for(let D of c)if(!(D.tags.length<2)&&!(l!==void 0&&D.tags.length>l))for(let _=0;_<D.tags.length;_+=1)for(let B=_+1;B<D.tags.length;B+=1){if(m!==void 0&&v>=m)break e;L(`tag:${D.tags[_]}`,`tag:${D.tags[B]}`,"cooc",!1)&&(v+=1)}}let J=new Map;for(let l of c){let m=Tn(l.slug);if(m==="root")continue;let v=J.get(m)??[];v.push(l.slug),J.set(m,v)}for(let l of J.values()){if(l.length<2)continue;let m=[...l].sort();for(let v=0;v<m.length;v+=1){let D=m[(v+1)%m.length],_=m[(v+kn)%m.length],B=m[v];B===void 0||D===void 0||(B!==D&&!X.has(O(B,D,"wikilink"))&&L(B,D,"folder",!1),m.length>kn+1&&_!==void 0&&B!==_&&!X.has(O(B,_,"wikilink"))&&L(B,_,"folder",!1))}}let ee=[...C.values()],te=ee.length>0?Math.min(...ee):0,q=ee.length>0?Math.max(...ee):0,$=l=>{let m=at(C.get(l)??0,te,q);return Ve+m*(At-Ve)},ie=[...c].sort((l,m)=>(C.get(m.slug)??0)-(C.get(l.slug)??0)),ne=new Set(ie.filter(l=>(C.get(l.slug)??0)>0).slice(0,rr).map(l=>l.slug)),U=c.map(l=>{let m=ne.has(l.slug),v=m?st(l.slug,hn.min,hn.max):st(l.slug,pn.min,pn.max);return{id:l.slug,name:l.title,type:"note",val:$(l.slug),degree:C.get(l.slug)??0,isHub:m,tag:"",slug:l.slug,url:"",folder:Tn(l.slug),tags:l.tags,dominantTag:Fr(l.tags,y),excerpt:Sr(l.content),phase:We(l.slug),x:v.x,y:v.y,z:v.z}});for(let l of G){let m=Ln(l),v=st(m,bn.min,bn.max);U.push({id:m,name:Gr(l,Z),type:"external",val:$(m)*gr,degree:C.get(m)??0,isHub:!1,tag:"",slug:"",url:l,folder:"",tags:[],dominantTag:"",excerpt:l,phase:We(m),x:v.x,y:v.y,z:v.z})}for(let l of z){let m=l.slice(4),v=st(l,yn.min,yn.max);U.push({id:l,name:m,type:"tag",val:lt($(l)*.7,Ve,At),degree:C.get(l)??0,isHub:!1,tag:m,slug:`tags/${m}`,url:"",folder:"tag",tags:[m],dominantTag:m,excerpt:"",phase:We(l),x:v.x,y:v.y,z:v.z})}return{nodes:U,links:V}}function Ct(e){let r=new Map,o=(t,i)=>{let c=r.get(t)??new Set;c.add(i),r.set(t,c)};for(let t of e){if(t.kind!=="wikilink"&&t.kind!=="tag"&&t.kind!=="external")continue;let i=F(t.source),c=F(t.target);o(i,c),o(c,i)}return r}function Se(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let t=getComputedStyle(o).color;return o.remove(),t||r}function Dn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Se("--graph-backdrop","#ffffff"),ink:Se("--graph-text","#0f0f0f"),accent:Se("--graph-accent","#27798c"),tertiary:Se("--graph-external","#3f6f8c"),gray:Se("--graph-muted","#737373"),external:Se("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Me(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Br(){return zr()}function Q(){return document.documentElement.getAttribute("saved-theme")==="dark"}function ut(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}return null}function ze(e,r){let o=ut(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function ge(e,r,o){let t=ut(e),i=ut(r);if(!t||!i)return e;let c=(h,E)=>Math.round(h+(E-h)*o);return`rgb(${c(t.r,i.r)}, ${c(t.g,i.g)}, ${c(t.b,i.b)})`}function _t(e){return Q()?ge(e.bg,"#05070f",.88):e.bg}function Vr(e){let r=ut(e);if(!r)return e;let o=t=>{let i=t/255,c=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.ceil(c*255)};return`rgb(${o(r.r)}, ${o(r.g)}, ${o(r.b)})`}function $r(e){return Vr(_t(e))}function _n(e,r){let o=0;for(let t of e)o=o*31+t.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function En(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:_n(e,[r.accent,r.tertiary,r.ink,r.gray])}function Wr(e,r){return e.length===0?r.ink:_n(e,[r.accent,r.tertiary])}function qr(e){let r=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),t="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(t=o.endsWith("/")?o:`${o}/`);let i=`${t}${r}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function Ur(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function Nt(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function Yr(e){let o=await import(e?Jn:Zn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Ur(o)}function Kr(){try{let e=sessionStorage.getItem(Mn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function jr(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Cn);if(!r)return e;let o=ct(JSON.parse(r)),t=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread,E=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:t,edgeScale:i,zoom:c,spread:h,hubGravity:E}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function Be(e){try{sessionStorage.setItem(Cn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function It(e){try{sessionStorage.setItem(Mn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function Xr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Zr(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function Jr(e,r){return e.type==="note"&&e.folder===r}function xn(e,r){let o=F(r),t=e.find(i=>i.id===o);return!t||t.type!=="note"?null:t.folder}function Qr(e,r,o){let t=new Map;if(r==="folder"){let i=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return i.forEach((c,h)=>{let E=Math.PI*2*h/Math.max(i.length,1),C={x:Math.cos(E)*o,y:Math.sin(E)*o,z:0};for(let V of e.nodes)V.type==="note"&&V.folder===c&&t.set(V.id,C)}),t}if(r==="tag"){let i=e.nodes.filter(h=>h.type==="tag"),c=new Map;i.forEach((h,E)=>{let C=Math.PI*2*E/Math.max(i.length,1);c.set(h.tag,{x:Math.cos(C)*o,y:Math.sin(C)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let E=c.get(h.tag);E&&t.set(h.id,E)}else if(h.dominantTag.length>0){let E=c.get(h.dominantTag);E&&t.set(h.id,E)}}return t}function eo(e,r){let o=[],t=i=>{let c=r*i;for(let h of o){let E=e(h);E&&(h.vx=(h.vx??0)+(E.x-(h.x??0))*c,h.vy=(h.vy??0)+(E.y-(h.y??0))*c,h.vz=(h.vz??0)+(E.z-(h.z??0))*c)}};return t.initialize=i=>{o=i},t}function Sn(e,r,o,t){for(let i of e.querySelectorAll(r)){if(!(i instanceof HTMLElement))continue;let c=i.getAttribute(t);i.setAttribute("aria-pressed",c===o?"true":"false")}}function to(e,r,o,t){let i=Ct(r.links),c=(n,a,s)=>n<a?`${n}|${a}|${s}`:`${a}|${n}|${s}`,h=new Map(t.fullData.nodes.map(n=>[n.id,n])),E=new Map,C=new Set,V=new Set;t.fullData!==r&&(E=Ct(t.fullData.links),C=new Set(r.nodes.map(n=>n.id)),V=new Set(r.links.map(n=>c(F(n.source),F(n.target),n.kind))));let X=n=>{if(t.fullData===r)return!1;let a=rn(E,C,n,t.expandHops);if(!C.has(n)&&h.has(n)&&a.add(n),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let s=t.layout.incrementalWarmup?h.get(n):void 0,u=0;for(let g of a){let d=h.get(g);if(d){if(s&&d.id!==s.id){let w=on(s,u,t.use3d);d.x=w.x,d.y=w.y,d.z=w.z,d.vx=d.vy=d.vz=0,u+=1}r.nodes.push(d),C.add(g)}}for(let g of t.fullData.links){let d=F(g.source),w=F(g.target);if(!C.has(d)||!C.has(w))continue;let f=c(d,w,g.kind);V.has(f)||(V.add(f),r.links.push(g))}return i=Ct(r.links),!0},y={lens:Kr(),allLabels:!1,focusTag:null,focusFolder:null},ae=null,O=null,L=jr(),M=!1,G=un,Z=$e,z=()=>{e.cooldownTicks(t.layout.freezeAfterWarmup?90:t.layout.cooldownTicks??200),e.d3ReheatSimulation()},A=()=>O??ae,J=new Set(r.nodes.filter(n=>n.type==="note").sort((n,a)=>a.degree-n.degree).slice(0,or).map(n=>n.id)),ee=n=>{let a=n.val;return n.isHub&&(a*=ln),y.lens==="tag"&&n.type==="tag"&&(a*=dr),y.focusTag&&n.id===`tag:${y.focusTag}`&&(a*=fr),a},te=n=>{let a=A();return a===n.id?!0:a!==null?i.get(a)?.has(n.id)??!1:y.allLabels||J.has(n.id)},q=n=>{let a=At*ln,s=lt((ee(n)-Ve)/(a-Ve),0,1);return(dn+s*(hr-dn))*L.nodeScale},$=n=>{let a=A();if(a!==null)return a===n||(i.get(a)?.has(n)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let s=r.nodes.find(u=>u.id===n);return s?y.focusFolder!==null?Jr(s,y.focusFolder):y.focusTag!==null&&Zr(s,y.focusTag):!1},ie=n=>n.type==="external"?o.current.external:y.lens==="tag"?n.type==="tag"?o.current.tertiary:Wr(n.dominantTag,o.current):y.lens==="folder"?n.type==="tag"?o.current.tertiary:En(n.folder,o.current):y.lens==="hub"?n.type==="tag"?o.current.tertiary:n.isHub?o.current.accent:o.current.ink:n.type==="tag"?o.current.tertiary:o.current.ink,ne=n=>{let a=A();if(a!==null&&(a===n.id||(i.get(a)?.has(n.id)??!1)))return o.current.accent;let s=ie(n);return $(n.id)?Q()?n.type==="external"?ge(o.current.external,"#ffffff",.18):n.type==="tag"?ge(o.current.tertiary,"#ffffff",.22):n.isHub?ge("#fff3e4",o.current.accent,.1):ge("#ffffff",o.current.accent,.12):n.type==="external"?ge(o.current.external,"#08343a",.12):n.type==="tag"?ge(o.current.tertiary,o.current.accent,.55):n.isHub?ge(o.current.ink,o.current.accent,.22):s:ge(s,_t(o.current),1-Fe)},U=n=>{let a=Q();return n==="wikilink"?a?.52:.64:n==="external"?a?.42:.56:n==="tag"?a?.38:.5:0},l=n=>{if(n.kind==="cooc"||n.kind==="folder")return n.kind==="cooc"&&y.lens==="tag"||n.kind==="folder"&&y.lens==="folder"?.06:0;let a=F(n.source),s=F(n.target),u=A();return u!==null&&(a===u||s===u)?Q()?.72:.78:(u!==null||y.focusTag!==null||y.focusFolder!==null)&&(!$(a)||!$(s))?U(n.kind)*Fe:U(n.kind)},m=n=>{let a=F(n.source),s=F(n.target),u=A(),g=Q()?wr:kr;return u!==null&&(a===u||s===u)?ge(o.current.accent,g,.45):g},v=n=>ze(m(n),l(n)),D=()=>({nodes:r.nodes,links:r.links}),_=n=>{let a=Q()?"rgba(255, 255, 255, 1)":ze(o.current.ink,.88);return $(n.id)?a:ze(a,Fe)},B=n=>Q()?$(n.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",he=()=>{let n=e.controls?.().target;if(n&&(G={x:n.x,y:n.y,z:n.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let s={x:a.x-G.x,y:a.y-G.y,z:a.z-G.z},u=Math.hypot(s.x,s.y,s.z);if(u>1)return{dir:s,len:u}}}return{dir:ke,len:$e}},be=n=>{if(t.use3d){if(typeof e.cameraPosition!="function")return;let a=Z/lt(L.zoom,.4,2.5),{dir:s,len:u}=he(),g=a/u;e.cameraPosition({x:G.x+s.x*g,y:G.y+s.y*g,z:G.z+s.z*g},G,Me()?0:n),qe();return}typeof e.zoom=="function"&&e.zoom(L.zoom,Me()?0:n)},le=()=>{let n=Er(L.spread),a=Lt.min+n*(Lt.max-Lt.min),s=Et.min+n*(Et.max-Et.min),u=new Map(r.nodes.map(S=>[S.id,S.degree])),g=Math.max(0,...u.values()),d=S=>at(S.degree,0,g),w=S=>jt(u.get(F(S.source))??0,u.get(F(S.target))??0,g),f=e.d3Force("charge");f?.strength&&f.strength(S=>a*Xt(d(S))),f?.theta&&t.layout.chargeTheta!==void 0&&f.theta(t.layout.chargeTheta);let p=e.d3Force("link");p?.distance&&p.distance(S=>{let R=Zt(w(S),L.hubGravity);return y.lens==="tag"&&S.kind==="tag"?s*.72*R:S.kind==="cooc"||S.kind==="folder"?s:s*R}),p?.strength&&p.strength(S=>{if(S.kind==="cooc"||S.kind==="folder")return .015;let R=Jt(w(S),L.hubGravity);if(y.lens==="tag"&&S.kind==="tag")return .3*R;if(y.lens==="folder"){let W=xn(r.nodes,S.source),j=xn(r.nodes,S.target);if(W!==null&&W===j)return .16*R}return S.kind==="tag"?.14*R:(S.kind==="external"?.16:.24)*R}),t.forceCollide&&e.d3Force("collision",t.forceCollide(S=>q(S)+br).strength(.85).iterations(1));let b=e.d3Force("center");b?.strength&&b.strength(ar);let T=xt.min+n*(xt.max-xt.min),H=Qr(r,y.lens,T),P=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",eo(S=>H.get(S.id)??null,P)),t.use3d&&e.d3Force("flattenZ",null)},ue=new Map,se=new Map,re=new Map,k=new Map,I=new Map,N=new Map,Y=new Map,me=new Map,ye=(n,a,s)=>{let u=`${Math.round(a*4)}|${s}`;return it(me,u,()=>{let g=new n.MeshBasicMaterial({color:s});return Q()&&g.color.multiplyScalar(2),{geometry:new n.SphereGeometry(a,6,6),material:g}})},we=new Map,x=new Map,Gn=(n,a,s)=>{let u=`${a}|${s}`;return it(we,u,()=>new n.CylinderGeometry(a,a,1,s))},Ht=(n,a,s)=>{let u=`${a}|${s}`;return it(x,u,()=>new n.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1}))},ve=()=>{if(!t.use3d||typeof e.nodeThreeObject!="function")return;let n=t.spriteText,a=t.three,s=t.lod.dotDistance,u=t.lod.nodeResolution??14,g=t.interaction.incrementalRepaint;if(ue.clear(),se.clear(),me.clear(),k.clear(),I.clear(),N.clear(),g)for(let d of r.nodes)N.set(d.id,d);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(d=>{let w=q(d),f=ne(d),p=!1;if(a){if(Q()){let R=d.isHub?1.35:1.1,W=new a.MeshLambertMaterial({color:f,emissive:f,emissiveIntensity:R});ue.set(d.id,{material:W,base:R,phase:d.phase}),g&&k.set(d.id,W),p=new a.Mesh(new a.SphereGeometry(w,u,u),W)}else{let R=new a.MeshBasicMaterial({color:f});g&&k.set(d.id,R),p=new a.Mesh(new a.SphereGeometry(w,u,u),R)}if(s!==void 0&&p!==!1){let R=ye(a,w,f),W=new a.Mesh(R.geometry,R.material);I.set(d.id,W);let j=new a.LOD;j.addLevel(p,0),j.addLevel(W,s),p=j}}let b=te(d);if(!n||!g&&!b)return p;let T=Array.from(d.name),H=window.innerWidth<700?24:48,P=new n(T.length>H?`${T.slice(0,H).join("")}\\u2026`:d.name);if(P.color=_(d),P.backgroundColor=!1,P.fontWeight="400",P.strokeWidth=Q()?.35:0,P.strokeColor=B(d),P.material.transparent=!0,P.material.depthWrite=!1,P.material.alphaTest=.01,P.material.toneMapped=!1,P.textHeight=J.has(d.id)?6.5:5.5,P.center.set(0,.5),P.position.x=w+2,P.position.y=0,g?(P.visible=b,se.set(d.id,{sprite:P,node:d})):t.lod.labelDistance!==void 0&&se.set(d.id,{sprite:P,node:d}),!a||p===!1)return P;let S=new a.Group;return S.add(p),S.add(P),S})},Hn=()=>{let n=t.three;if(!t.use3d||!n||typeof e.linkThreeObject!="function")return;let a=new n.Vector3(0,1,0),s=t.lod.linkResolution??5,u=t.lod.cullDistance,g=t.interaction.incrementalRepaint,d=t.lod.shareLinkResources;if(re.clear(),Y.clear(),we.clear(),x.clear(),g)for(let w of r.links){let f=F(w.source),p=F(w.target);for(let b of[f,p]){let T=Y.get(b);T?T.push(w):Y.set(b,[w])}}e.linkThreeObject(w=>{let f=yr[w.kind]*L.edgeScale,p=d?Ht(n,m(w),l(w)):new n.MeshBasicMaterial({color:m(w),transparent:!0,opacity:l(w),depthWrite:!1}),b=d?Gn(n,f,s):new n.CylinderGeometry(f,f,1,s),T=new n.Mesh(b,p);return(u!==void 0||g)&&re.set(w,T),T}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((w,f)=>{let p=f.end.x-f.start.x,b=f.end.y-f.start.y,T=f.end.z-f.start.z,H=Math.sqrt(p*p+b*b+T*T);return w.position.x=(f.start.x+f.end.x)/2,w.position.y=(f.start.y+f.end.y)/2,w.position.z=(f.start.z+f.end.z)/2,w.scale.x=1,w.scale.y=Math.max(H,.01),w.scale.z=1,w.quaternion.setFromUnitVectors(a,new n.Vector3(p,b,T).normalize()),!0})},ft=()=>{!t.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(n=>{let a=A();if(a===null||Me()||document.hidden)return 0;let s=F(n.source),u=F(n.target);return s===a||u===a?2:0})},Te=()=>{e.nodeVal(ee),e.nodeColor(ne),e.linkColor(v),e.linkWidth(n=>{let a=F(n.source),s=F(n.target),u=A(),g=L.edgeScale;return u!==null&&(a===u||s===u)?.7*g:n.kind==="wikilink"||n.kind==="external"?.5*g:(n.kind==="tag"?.35:.25)*g}),typeof e.linkOpacity=="function"&&e.linkOpacity(sn),ft(),Hn(),t.use3d||e.nodeCanvasObjectMode(()=>"replace")},Rn=(n,a)=>{let s=an(i,n,a,N.keys()),u=new Set;for(let g of s){let d=N.get(g);if(!d)continue;let w=ne(d);k.get(g)?.color.set(w);let f=I.get(g);f&&t.three&&(f.material=ye(t.three,q(d),w).material);let p=ue.get(g);p&&p.material.emissive.set(w);let b=se.get(g);b&&(b.sprite.color=_(d),b.sprite.strokeColor=B(d),b.sprite.strokeWidth=Q()?.35:0,b.sprite.visible=te(d));for(let T of Y.get(g)??[]){if(u.has(T))continue;u.add(T);let H=re.get(T);H&&(t.lod.shareLinkResources&&t.three?H.material=Ht(t.three,m(T),l(T)):(H.material.color.set(m(T)),H.material.opacity=l(T)))}}},gt=n=>{if(t.interaction.incrementalRepaint&&t.use3d){ft(),Rn(n,A());return}Te(),t.use3d&&ve()},mt=()=>{let n=t.root.querySelector("[data-graph-legend]");if(!(n instanceof HTMLElement))return;let a=(d,w)=>{let f=document.createElement("span");f.className="graph-landing__legend-item";let p=document.createElement("span");p.className="graph-landing__dot",p.setAttribute("aria-hidden","true"),p.style.background=d;let b=document.createElement("span");return b.textContent=w,f.append(p,b),f},s=t.root.dataset.legendNotes??"Notes",u=t.root.dataset.legendTags??"Tags",g=t.root.dataset.legendLinks??"Links";n.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,u),a(o.current.external,g))},Rt=n=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[n.dataset.key]=n.dataset.value,s.setAttribute("aria-pressed",n.pressed?"true":"false");let u=document.createElement("span");if(u.className="graph-landing__facet-name",n.dotColor!==null){let d=document.createElement("span");d.className="graph-landing__dot",d.style.background=n.dotColor,u.append(d)}u.append(document.createTextNode(n.label));let g=document.createElement("span");return g.className="graph-landing__tag-count",g.textContent=String(n.count),s.append(u,g),a.append(s),a},Ft=()=>{let n=t.root.querySelector("[data-graph-tags]");if(!(n instanceof HTMLElement))return;let a=t.root.querySelector("[data-graph-facet-label]"),s=t.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let g=t.root.dataset.folderRootLabel??"root",d=new Map;for(let f of r.nodes)f.type==="note"&&d.set(f.folder,(d.get(f.folder)??0)+1);let w=[...d.entries()].sort((f,p)=>p[1]-f[1]);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=w.length===0),n.replaceChildren(...w.map(([f,p])=>Rt({dataset:{key:"graphFolder",value:f},pressed:y.focusFolder===f,dotColor:En(f,o.current),label:f==="root"?g:f,count:p})));return}let u=r.nodes.filter(g=>g.type==="tag").sort((g,d)=>d.degree-g.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=u.length===0),n.replaceChildren(...u.map(g=>Rt({dataset:{key:"graphTag",value:g.tag},pressed:y.focusTag===g.tag,dotColor:null,label:g.tag,count:g.degree})))},pt=!0,Ot=()=>{r.nodes.length>0&&e.zoomToFit?.(0,80),Z=he().len,be(0),qe()},zt=0;e.onEngineStop(()=>{pt&&(zt=window.requestAnimationFrame(()=>{pt=!1,Ot()}))}),window.addCleanup(()=>window.cancelAnimationFrame(zt));let Ce=(n=!1)=>{e.warmupTicks(n&&t.layout.incrementalWarmup?0:t.layout.warmupTicks??(t.use3d?50:60)),e.graphData(D()),le(),Te(),ve(),mt(),Ft(),Sn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),z()},Fn=n=>{y.lens=n,n!=="tag"&&(y.focusTag=null),n!=="folder"&&(y.focusFolder=null),It(n),Ce()},On=n=>{y.focusTag=y.focusTag===n?null:n,y.focusFolder=null,y.focusTag&&(y.lens="tag",It("tag")),Ce()},zn=n=>{y.focusFolder=y.focusFolder===n?null:n,y.focusTag=null,y.focusFolder&&(y.lens="folder",It("folder")),Ce()},ht=()=>t.use3d?$r(o.current):_t(o.current),qe=()=>{if(!t.use3d||!t.lod.fog||!t.three||typeof e.scene!="function")return;let n=he().len;e.scene().fog=new t.three.Fog(ht(),n*mr,n*pr)};e.graphData(D()),e.backgroundColor(ht()),e.nodeLabel(n=>n.name),e.nodeRelSize(ir),typeof e.nodeOpacity=="function"&&e.nodeOpacity(sr),typeof e.linkOpacity=="function"&&e.linkOpacity(sn),le(),Te();let Le=t.root.querySelector("[data-graph-preview]"),Ue=t.root.querySelector("[data-graph-preview-chip]"),Ye=t.root.querySelector("[data-graph-preview-title]"),Ke=t.root.querySelector("[data-graph-preview-excerpt]"),je=0;window.addCleanup(()=>window.clearTimeout(je));let Bn=n=>{if(!(Le instanceof HTMLElement)||!(Ue instanceof HTMLElement)||!(Ye instanceof HTMLElement)||!(Ke instanceof HTMLElement))return;window.clearTimeout(je);let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",u=t.root.dataset.legendLinks??"Links";if(n.type==="tag"){let g=t.root.dataset.previewTagTemplate??"{n} notes";Ue.textContent=s,Ye.textContent=`#${n.tag}`,Ke.textContent=g.replace("{n}",String(n.degree))}else n.type==="external"?(Ue.textContent=u,Ye.textContent=n.name,Ke.textContent=n.url):(Ue.textContent=a,Ye.textContent=n.name,Ke.textContent=n.excerpt);Le.hidden=!1,Le.dataset.visible="true"},Bt=()=>{Le instanceof HTMLElement&&(window.clearTimeout(je),je=window.setTimeout(()=>{Le.dataset.visible="false",Le.hidden=!0},Lr))};if(e.onNodeHover(n=>{let a=A();ae=n?n.id:null,O===null&&(n?Bn(n):Bt()),gt(a)}),t.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let s=e.controls();s.autoRotate=!1,s.autoRotateSpeed=ur}e.warmupTicks(t.layout.warmupTicks??50),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),t.bloomPass&&typeof e.postProcessingComposer=="function"&&(t.bloomPass.strength=Q()?fn:0,t.bloomPass.radius=gn,t.bloomPass.threshold=mn,e.postProcessingComposer().addPass(t.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ke,un),L.zoom!==1&&be(0)),ve(),qe();{let s=0,u=()=>{if(!Me()&&!document.hidden&&!M){let g=performance.now()/1e3*Tr;for(let d of ue.values())d.material.emissiveIntensity=d.base*(1+vr*Math.sin(g+d.phase))}s=window.requestAnimationFrame(u)};s=window.requestAnimationFrame(u),window.addCleanup(()=>window.cancelAnimationFrame(s))}let n=t.lod.labelDistance,a=t.lod.cullDistance;if((n!==void 0||a!==void 0||t.lod.dotDistance!==void 0)&&typeof e.cameraPosition=="function"){let s=e.cameraPosition.bind(e),u=0,g=()=>{let d=s();if(d&&typeof d.x=="number"&&typeof d.y=="number"&&typeof d.z=="number"){let w=Math.max(1,t.root.clientHeight||window.innerHeight);for(let[f,p]of I){let b=h.get(f);if(!b)continue;let T=Math.hypot(d.x-(b.x??0),d.y-(b.y??0),d.z-(b.z??0)),H=Math.max(1,T/w);p.scale.x=p.scale.y=p.scale.z=H}if(n!==void 0){let f=[];for(let p of se.values()){let b=p.node.x??0,T=p.node.y??0,H=p.node.z??0,P=Math.hypot(d.x-b,d.y-T,d.z-H);if(p.sprite.visible=en(te(p.node),A()===p.node.id||A()===null&&J.has(p.node.id),P,n),p.sprite.visible){let S=Array.from(p.node.name),R=window.innerWidth<700?24:48,W=S.length>R?`${S.slice(0,R).join("")}\\u2026`:p.node.name;p.sprite.text!==W&&(p.sprite.text=W);let j=e.graph2ScreenCoords?.(b,T,H);if(j&&A()===null){let Yt=Array.from(W).length*9+12,rt=j.x>window.innerWidth*.6?j.x-Yt:j.x,wt=rt+Yt,qn=f.some(kt=>Math.abs(kt.y-j.y)<22&&rt<kt.right&&wt>kt.left);p.sprite.visible=!qn&&rt>=8&&wt<=window.innerWidth-8,p.sprite.visible&&f.push({left:rt,right:wt,y:j.y})}p.sprite.center.set(j&&j.x>window.innerWidth*.6?1:0,.5);let He=Math.max(5.5,P/w*11);Math.abs(p.sprite.textHeight-He)>.5&&(p.sprite.textHeight=He)}}}if(a!==void 0){let f=A();for(let[p,b]of re){let T=F(p.source),H=F(p.target);if(f!==null&&(T===f||H===f)){b.visible=!0;continue}let P=Math.hypot(d.x-b.position.x,d.y-b.position.y,d.z-b.position.z);b.visible=Tt(P,a)!=="dot"}}}u=window.requestAnimationFrame(g)};u=window.requestAnimationFrame(g),window.addCleanup(()=>window.cancelAnimationFrame(u))}}else e.warmupTicks(t.layout.warmupTicks??60),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??180),e.nodeCanvasObject((n,a,s)=>{let u=q(n),g=n.x??0,d=n.y??0;if(a.save(),a.beginPath(),a.arc(g,d,u,0,Math.PI*2),a.fillStyle=ne(n),a.fill(),n.isHub&&(a.strokeStyle=$(n.id)?o.current.accent:ze(o.current.accent,Fe),a.lineWidth=1.2/s,a.stroke()),te(n)){let w=11.5/s;a.font=`${w}px ${o.current.font}`,a.fillStyle=$(n.id)?o.current.ink:ze(o.current.ink,Fe),a.textAlign="center",a.textBaseline="bottom",a.fillText(n.name,g,d-u-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((n,a,s)=>{let u=q(n)+8;s.beginPath(),s.arc(n.x??0,n.y??0,u,0,Math.PI*2),s.fillStyle=a,s.fill()});let Ne=t.root.querySelector("[data-graph-inspect]"),Xe=t.root.querySelector("[data-graph-inspect-chip]"),Ze=t.root.querySelector("[data-graph-inspect-title]"),Je=t.root.querySelector("[data-graph-inspect-excerpt]"),bt=t.root.querySelector("[data-graph-inspect-tags]"),yt=t.root.querySelector("[data-graph-inspect-connected]"),K=t.root.querySelector("[data-graph-inspect-open]"),Ee=n=>{t.root.dataset.railOpen=n?"true":"false";let a=t.root.querySelector("[data-graph-rail-toggle]"),s=t.root.querySelector("[data-graph-rail-scrim]"),u=t.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",n?"true":"false"),u instanceof HTMLElement&&u.setAttribute("aria-hidden",n?"false":"true"),s instanceof HTMLElement&&(s.hidden=!n)},de=()=>{let a=!Me()&&!document.hidden&&!M;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),!a)for(let s of ue.values())s.material.emissiveIntensity=s.base;ft()},Vt=window.matchMedia("(prefers-reduced-motion: reduce)");Vt.addEventListener("change",de),document.addEventListener("visibilitychange",de),window.addCleanup(()=>{Vt.removeEventListener("change",de),document.removeEventListener("visibilitychange",de)}),de();let Vn=n=>{let a=i.get(n.id)??new Set,s=[];for(let u of a){let g=r.nodes.find(d=>d.id===u);g&&s.push(g)}return s.sort((u,g)=>g.degree-u.degree)},$n=n=>{if(!(Ne instanceof HTMLElement)||!(Xe instanceof HTMLElement)||!(Ze instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(bt instanceof HTMLElement)||!(yt instanceof HTMLElement))return;let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",u=t.root.dataset.legendLinks??"Links",g=t.root.dataset.inspectEmpty??"No direct connections";n.type==="tag"?(Xe.textContent=s,Ze.textContent=`#${n.tag}`,Je.textContent=(t.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(n.degree))):n.type==="external"?(Xe.textContent=u,Ze.textContent=n.name,Je.textContent=n.url):(Xe.textContent=a,Ze.textContent=n.name,Je.textContent=n.excerpt);let d=n.tags.map(f=>{let p=document.createElement("li");return p.textContent=f,p});bt.replaceChildren(...d),bt.hidden=d.length===0;let w=Vn(n).slice(0,12);if(w.length===0){let f=document.createElement("li");f.className="graph-landing__inspect-empty",f.textContent=g,yt.replaceChildren(f)}else yt.replaceChildren(...w.map(f=>{let p=document.createElement("li"),b=document.createElement("button");b.type="button",b.className="graph-landing__inspect-link",b.dataset.graphInspectId=f.id;let T=f.type==="tag"?s:f.type==="external"?u:a,H=document.createElement("span");H.textContent=T;let P=document.createElement("strong");return P.textContent=f.type==="tag"?`#${f.tag}`:f.name,b.append(H,P),p.append(b),p}));K instanceof HTMLAnchorElement&&(n.type==="note"&&n.slug.length>0?(K.hidden=!1,K.href=qr(n.slug).toString(),K.textContent=t.root.dataset.inspectRead??"Read note",K.removeAttribute("target"),K.removeAttribute("rel")):n.type==="external"&&n.url.length>0?(K.hidden=!1,K.href=n.url,K.textContent=t.root.dataset.inspectOpenExternal??"Open",K.target="_blank",K.rel="noopener noreferrer"):(K.hidden=!0,K.removeAttribute("href"),K.removeAttribute("target"),K.removeAttribute("rel"))),Ne.hidden=!1,t.root.dataset.inspecting="true",Ee(!1),Bt()},Ie=()=>{let n=A();if(O=null,Ne instanceof HTMLElement){let a=Ne.contains(document.activeElement);Ne.hidden=!0,a&&(oe?.focus({preventScroll:!0}),xe())}t.root.dataset.inspecting="false",ae=null,de(),gt(n)},Wn=n=>{let a=A();O=n.id,de(),$n(n),gt(a)},Qe=(n,a=!1)=>{if(X(n.id)&&Ce(!0),Wn(n),a){G={x:n.x??0,y:n.y??0,z:n.z??0};let s=Me()?0:450;t.use3d&&e.cameraPosition?(Z=$e,e.cameraPosition({x:G.x+ke.x/L.zoom,y:G.y+ke.y/L.zoom,z:G.z+ke.z/L.zoom},G,s)):e.centerAt?.(G.x,G.y,s)}},oe=t.root.querySelector("[data-graph-search]"),pe=t.root.querySelector("[data-graph-search-results]"),et=t.root.querySelector("[data-graph-search-status]"),xe=()=>{pe&&(pe.hidden=!0),et&&(et.textContent="")},tt=()=>{if(!oe||!pe)return;let n=tn(t.fullData.nodes,oe.value);pe.replaceChildren(...n.map(a=>{let s=document.createElement("li"),u=document.createElement("button");return u.type="button",u.className="graph-landing__search-result",u.dataset.graphSearchId=a.id,u.textContent=a.name,s.append(u),s})),pe.hidden=n.length===0,et&&(et.textContent=oe.value.trim()?n.length?(t.root.dataset.searchCount??"{n} results").replace("{n}",String(n.length)):t.root.dataset.searchEmpty??"No matching notes":"")},$t=n=>{n.isComposing||(n.key==="ArrowDown"&&(n.preventDefault(),pe?.querySelector("button")?.focus()),n.key==="Enter"&&(n.preventDefault(),pe?.querySelector("button")?.click()),n.key==="Escape"&&(n.stopPropagation(),xe()))};oe?.addEventListener("input",tt),oe?.addEventListener("focus",tt),oe?.addEventListener("keydown",$t),window.addCleanup(()=>{oe?.removeEventListener("input",tt),oe?.removeEventListener("focus",tt),oe?.removeEventListener("keydown",$t)});let nt=!1;e.onNodeClick((n,a)=>{n&&(nt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Qe(n))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ie(),Ee(!1)});let ce=t.root.querySelector("#graph-landing-mount");if(ce instanceof HTMLElement){let n=new ResizeObserver(()=>{e.width(ce.clientWidth),e.height(ce.clientHeight),O===null&&!pt&&Ot()});n.observe(ce),window.addCleanup(()=>n.disconnect());let a=null,s=0,u=f=>{a={x:f.clientX,y:f.clientY},nt=!1,M=!0,de(),xe()},g=(f,p)=>{if(typeof e.graph2ScreenCoords!="function")return null;let b=ce.getBoundingClientRect(),T=f-b.left,H=p-b.top,P=null,S=484;for(let R of D().nodes){if(R.x===void 0||R.y===void 0)continue;let W=e.graph2ScreenCoords(R.x,R.y,R.z??0),He=(W.x-T)**2+(W.y-H)**2;He<S&&(S=He,P=R)}return P},d=f=>{let p=a;a=null,M=!1,de(),!(!p||(f.clientX-p.x)**2+(f.clientY-p.y)**2>25)&&(window.clearTimeout(s),s=window.setTimeout(()=>{if(nt){nt=!1;return}let T=g(f.clientX,f.clientY);T?Qe(T):Ie()},0))},w=()=>{a=null,M=!1,de()};ce.addEventListener("pointerdown",u,!0),ce.addEventListener("pointerup",d,!0),ce.addEventListener("pointercancel",w,!0),window.addCleanup(()=>{window.clearTimeout(s),ce.removeEventListener("pointerdown",u,!0),ce.removeEventListener("pointerup",d,!0),ce.removeEventListener("pointercancel",w,!0)})}Sn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),mt(),Ft(),y.lens!=="all"&&Ce(),t.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Wt=()=>{o.current=Dn(),e.backgroundColor(ht()),qe(),t.bloomPass&&(t.bloomPass.strength=Q()?fn:0,t.bloomPass.radius=gn,t.bloomPass.threshold=mn),Te(),ve(),mt()};document.addEventListener("themechange",Wt),window.addCleanup(()=>document.removeEventListener("themechange",Wt));let qt=n=>{let a=n.target;if(!(a instanceof Element))return;a.closest(".graph-landing__search")||xe();let s=a.closest("[data-graph-search-id]");if(s?.dataset.graphSearchId){let b=h.get(s.dataset.graphSearchId);if(b){Qe(b,!0),xe();let T=t.root.querySelector("[data-graph-inspect-title]");T?.setAttribute("tabindex","-1"),T?.focus({preventScroll:!0})}return}if(a.closest("[data-graph-inspect-close]")){Ie();return}if(a.closest("[data-graph-rail-toggle]")){let b=t.root.dataset.railOpen!=="true";b&&Ie(),Ee(b);return}if(a.closest("[data-graph-rail-scrim]")){Ee(!1);return}let u=a.closest("[data-graph-inspect-id]");if(u instanceof HTMLElement&&u.dataset.graphInspectId){let b=t.fullData.nodes.find(T=>T.id===u.dataset.graphInspectId);b&&Qe(b,!0);return}let g=a.closest("[data-graph-lens]");if(g instanceof HTMLElement&&g.dataset.graphLens&&Xr(g.dataset.graphLens)){Fn(g.dataset.graphLens);return}let d=a.closest("[data-graph-tag]");if(d instanceof HTMLElement&&d.dataset.graphTag){On(d.dataset.graphTag);return}let w=a.closest("[data-graph-folder]");if(w instanceof HTMLElement&&w.dataset.graphFolder){zn(w.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){z();return}let f=a.closest("[data-graph-labels]");if(f instanceof HTMLButtonElement){y.allLabels=!y.allLabels,f.setAttribute("aria-pressed",y.allLabels?"true":"false");let b=f.dataset.labelShow??"Labels",T=f.dataset.labelHide??"Labels",H=y.allLabels?T:b;f.title=H,f.setAttribute("aria-label",H),ve();return}if(a.closest("[data-graph-theme]")){let b=Q()?"light":"dark";document.documentElement.setAttribute("saved-theme",b),localStorage.setItem("theme",b),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${b}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:b}}));return}let p=a.closest("[data-graph-tags-toggle]");if(p instanceof HTMLButtonElement){let b=t.root.querySelector(".graph-landing__tags");if(b instanceof HTMLElement){let T=b.dataset.open==="true";b.dataset.open=T?"false":"true",p.setAttribute("aria-expanded",T?"false":"true")}}},Pe=t.root.querySelector("[data-graph-node-scale]"),Ae=t.root.querySelector("[data-graph-edge-scale]");if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(L.nodeScale*100));let n=()=>{L.nodeScale=Number(Pe.value)/100,Be(L),le(),z(),Te(),t.use3d&&ve()};Pe.addEventListener("input",n),window.addCleanup(()=>Pe.removeEventListener("input",n))}if(Ae instanceof HTMLInputElement){Ae.value=String(Math.round(L.edgeScale*100));let n=()=>{L.edgeScale=Number(Ae.value)/100,Be(L),Te()};Ae.addEventListener("input",n),window.addCleanup(()=>Ae.removeEventListener("input",n))}let De=t.root.querySelector("[data-graph-hub-gravity]");if(De instanceof HTMLInputElement){De.value=String(Math.round(L.hubGravity*100));let n=()=>{let a=Number(De.value)/100;L.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Be(L),le(),z()};De.addEventListener("input",n),window.addCleanup(()=>De.removeEventListener("input",n))}let _e=t.root.querySelector("[data-graph-zoom]");if(_e instanceof HTMLInputElement){_e.value=String(Math.round(L.zoom*100));let n=()=>{L.zoom=Number(_e.value)/100,Be(L),be(200)};_e.addEventListener("input",n),window.addCleanup(()=>_e.removeEventListener("input",n))}let Ge=t.root.querySelector("[data-graph-spread]");if(Ge instanceof HTMLInputElement){Ge.value=String(Math.round(L.spread*100));let n=()=>{L.spread=Number(Ge.value)/100,Be(L),le(),z()};Ge.addEventListener("input",n),window.addCleanup(()=>Ge.removeEventListener("input",n))}Ee(!1),t.root.addEventListener("click",qt),window.addCleanup(()=>t.root.removeEventListener("click",qt));let Ut=n=>{if((n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k"&&(n.preventDefault(),oe?.focus()),n.key==="Escape"){if(pe&&!pe.hidden){oe?.focus(),xe();return}if(t.root.dataset.railOpen==="true"){Ee(!1);return}Ie()}};window.addEventListener("keydown",Ut),window.addCleanup(()=>window.removeEventListener("keydown",Ut))}function no(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function ro(){try{return window.localStorage.getItem(Dt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Pt(e){try{if(e){window.localStorage.setItem(Dt,"stopped");return}window.localStorage.removeItem(Dt)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function oo(e){let r=performance.now(),o=0,t=i=>{let c=Math.min(1,(i-r)/e.durationMs),h=c*c;e.apply(e.from+(e.to-e.from)*h),c<1&&(o=window.requestAnimationFrame(t))};return o=window.requestAnimationFrame(t),()=>{window.cancelAnimationFrame(o)}}function ao(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let t=window,i=t.onYouTubeIframeAPIReady;if(t.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let c=t.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=lr,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function io(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function so(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),t=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),c=e.querySelector("[data-graph-music-track-list]"),h=e.querySelector("[data-graph-music-status]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(c instanceof HTMLElement)||!(h instanceof HTMLElement))return;let E=e.dataset.audioStop??"Stop music",C=e.dataset.audioPlay??"Play music",V=e.dataset.musicLibraryOpen??"Open record collection",X=e.dataset.musicLibraryClose??"Close record collection",y=e.dataset.musicCurrentTrack??"Current track",ae=[];try{let k=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(k))for(let I of k){if(!I||typeof I!="object")continue;let N=I;typeof N.title!="string"||typeof N.url!="string"||N.artist!==void 0&&typeof N.artist!="string"||ae.push({title:N.title,...typeof N.artist=="string"?{artist:N.artist}:{},url:N.url})}}catch{}let O=Qt(ae);O.length===0&&O.push({title:"Ambient track",videoId:cn});let L=0,M=null,G=!1,Z=null,z=!ro(),A=!1,J=!1,ee=()=>O[L]??O[0]??{title:"Ambient track",videoId:cn},te=k=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${k}/hqdefault.jpg")`)},q=()=>ee().videoId,$=()=>{c.replaceChildren(),O.forEach((k,I)=>{let N=document.createElement("button");N.type="button",N.className="graph-landing__music-track",N.dataset.graphMusicTrackIndex=String(I),N.setAttribute("aria-current",I===L?"true":"false");let Y=document.createElement("img");Y.className="graph-landing__music-track-cover",Y.src=`https://i.ytimg.com/vi/${k.videoId}/hqdefault.jpg`,Y.alt="",Y.loading="lazy";let me=document.createElement("span");me.className="graph-landing__music-track-copy";let ye=document.createElement("span");if(ye.className="graph-landing__music-track-title",ye.textContent=k.title,me.appendChild(ye),k.artist){let we=document.createElement("span");we.className="graph-landing__music-track-artist",we.textContent=k.artist,me.appendChild(we)}N.append(Y,me),c.appendChild(N)}),h.textContent=`${y}: ${ee().title}`},ie=k=>{e.dataset.musicLibraryOpen=k?"true":"false",i.hidden=!k,i.setAttribute("aria-hidden",k?"false":"true"),t.setAttribute("aria-expanded",k?"true":"false"),t.setAttribute("aria-label",k?X:V),t.title=k?X:V},ne=k=>{r.setAttribute("aria-pressed",k?"true":"false"),r.setAttribute("aria-label",k?E:C),r.title=k?E:C,r.dataset.playing=k?"true":"false"},U=()=>{Z&&(Z(),Z=null)},l=k=>{M&&M.setVolume(Math.max(0,Math.min(Oe,k)))},m=k=>{!z||A||(A=!0,ne(!0),k.unMute(),l(0),k.playVideo(),U(),Z=oo({from:0,to:Oe,durationMs:cr,apply:l}))},v=()=>{z=!1,A=!1,U(),Pt(!0),M&&(M.mute(),M.pauseVideo(),l(0)),ne(!1)},D=async()=>{if(!M)try{let k=await ao();if(M)return;M=io({api:k,host:o,videoId:q(),onReady:I=>{G=!0,I.mute(),l(0),I.playVideo(),z&&J&&m(I)},onEnded:I=>{if(!z)return;L=(L+1)%O.length;let N=q();te(N),$(),I.loadVideoById(N),l(A?Oe:0)}})}catch(k){console.error("[graph-landing] ambient audio unavailable",k)}},_=k=>{let I=k.target;if(!(I instanceof Element&&I.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!z||A||no())){if(J=!0,G&&M){m(M);return}D()}},B=()=>{if(z&&A){v();return}if(J=!0,z=!0,Pt(!1),G&&M){m(M);return}D()},he=k=>{if(!(!Number.isInteger(k)||k<0||k>=O.length)){if(L=k,te(q()),$(),ie(!1),z=!0,J=!0,Pt(!1),G&&M){M.loadVideoById(q()),A?(M.unMute(),M.playVideo(),l(Oe)):m(M);return}D()}},be=()=>{let k=e.dataset.musicLibraryOpen!=="true";if(k){e.dataset.railOpen="false";let I=e.querySelector("[data-graph-rail-toggle]"),N=e.querySelector("#graph-landing-rail"),Y=e.querySelector("[data-graph-rail-scrim]");I instanceof HTMLButtonElement&&I.setAttribute("aria-expanded","false"),N instanceof HTMLElement&&N.setAttribute("aria-hidden","true"),Y instanceof HTMLElement&&(Y.hidden=!0)}ie(k)},le=k=>{let I=k.target;if(!(I instanceof Element))return;let N=I.closest("[data-graph-music-track-index]");N instanceof HTMLButtonElement&&he(Number(N.dataset.graphMusicTrackIndex))},ue=k=>{if(e.dataset.musicLibraryOpen!=="true")return;let I=k.target;(!(I instanceof Element)||!I.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&ie(!1)},se=k=>{k.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(ie(!1),k.stopImmediatePropagation())},re=()=>{if(M){if(document.hidden){U(),M.pauseVideo();return}z&&A&&(M.playVideo(),l(Oe))}};te(q()),ne(!1),$(),ie(!1),D(),r.addEventListener("click",B),t.addEventListener("click",be),c.addEventListener("click",le),e.addEventListener("click",ue),e.addEventListener("pointerdown",_,!0),e.addEventListener("touchstart",_,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",re),window.addEventListener("keydown",se),window.addCleanup(()=>{r.removeEventListener("click",B),t.removeEventListener("click",be),c.removeEventListener("click",le),e.removeEventListener("click",ue),e.removeEventListener("pointerdown",_,!0),e.removeEventListener("touchstart",_,!0),document.removeEventListener("visibilitychange",re),window.removeEventListener("keydown",se),U(),M&&(M.pauseVideo(),M.destroy(),M=null)})}async function co(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",so(e);let r=e.querySelector("#graph-landing-mount");if(!(r instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),t=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",i=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",c=(e.dataset.localePrefixes??"").split(",").map(x=>x.trim()).filter(x=>x.length>0),h=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",E=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",C=e.dataset.graphIndexPath??"",V=fe(e.dataset.maxRenderedNodes,x=>Number.parseInt(x,10)),X=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,y=Number.isFinite(X)?X:1,ae=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,O=e.dataset.graphRenderMode==="3d"?"3d":"auto",L=e.dataset.graphLayoutFreezeAfterWarmup==="true",M=fe(e.dataset.graphLayoutWarmupTicks,x=>Number.parseInt(x,10)),G=fe(e.dataset.graphLayoutCooldownTicks,x=>Number.parseInt(x,10)),Z=fe(e.dataset.graphLayoutChargeTheta,Number.parseFloat),z=e.dataset.graphLayoutIncrementalWarmup==="true",A=fe(e.dataset.graphLodLabelDistance,Number.parseFloat),J=fe(e.dataset.graphLodDotDistance,Number.parseFloat),ee=fe(e.dataset.graphLodCullDistance,Number.parseFloat),te=e.dataset.graphLodFog==="true",q=fe(e.dataset.graphLodNodeResolution,x=>Number.parseInt(x,10)),$=fe(e.dataset.graphLodLinkResolution,x=>Number.parseInt(x,10)),ie=e.dataset.graphInteractionIncrementalRepaint==="true",ne=e.dataset.graphLodShareLinkResources==="true",U=!1,l=null,m={current:Dn()},v=()=>{U=!0,l&&(l._destructor(),l=null),delete e.dataset.graphReady};window.addCleanup(v);let D=Br();if(O==="3d"&&!D){Nt(r,"3D graph unavailable: WebGL is required.");return}let _=O==="3d"||D,B=Yr(_),he=_?import(er).then(x=>x.default??null).catch(x=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",x),null)):Promise.resolve(null),be=_?import(tr).catch(x=>(console.error("[graph-landing] three unavailable; using default node spheres",x),null)):Promise.resolve(null),le=_?import(nr).then(x=>x.UnrealBloomPass?new x.UnrealBloomPass:null).catch(x=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",x),null)):Promise.resolve(null),ue=_?import(Qn).then(x=>x.forceCollide??null).catch(x=>(console.error("[graph-landing] d3-force-3d collision force unavailable",x),null)):Promise.resolve(null);B.catch(()=>{});let se;try{se=ct(E==="graphIndex"?await fetch(C).then(x=>x.json()):await fetchData)}catch(x){throw Nt(r,"Graph could not load its index."),x}if(U)return;let re=Or(xr(se),{localeId:t,sourceLocale:i,prefixes:c},ae),k=nn(re,V),I=h.replace("{n}",String(re.nodes.length)).replace("{m}",String(re.links.length));for(let x of o)x.textContent=I;let N;try{N=await B}catch(x){throw Nt(r,"Graph could not load. Check your network connection."),x}let[Y,me,ye,we]=await Promise.all([he,be,le,ue]);U||(r.replaceChildren(),l=N(r),l.width(r.clientWidth),l.height(r.clientHeight),r.__graphLanding=l,r.__graphData=k,to(l,k,m,{use3d:_,root:e,spriteText:Y,bloomPass:ye,three:me,forceCollide:we,fullData:re,expandHops:y,layout:{freezeAfterWarmup:L,warmupTicks:M,cooldownTicks:G,chargeTheta:Z,incrementalWarmup:z},lod:{labelDistance:A,dotDistance:J,cullDistance:ee,fog:te,nodeResolution:q,linkResolution:$,shareLinkResources:ne},interaction:{incrementalRepaint:ie}}))}var lo="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let t=o.dataset.preferredLocale;if(t)try{localStorage.setItem(lo,t)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{co()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  --graph-external: #3f6f8c;\n  height: 100dvh;\n  overflow: hidden;\n}\n\nhtml[saved-theme=dark]:has(.graph-landing),\nhtml[saved-theme=dark] body:has(.graph-landing) {\n  --graph-external: #8fb6c8;\n}\n\nhtml:not([saved-theme=dark]):has(.graph-landing),\nhtml:not([saved-theme=dark]) body:has(.graph-landing) {\n  --graph-external: #0f6a72;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: #06101d;\n  --graph-surface: rgba(10, 24, 40, 0.82);\n  --graph-surface-strong: rgba(8, 20, 35, 0.94);\n  --graph-border: rgba(203, 220, 235, 0.2);\n  --graph-text: #f1f6fa;\n  --graph-muted: #aab9c6;\n  --graph-accent: #68d4e8;\n  --graph-accent-soft: rgba(104, 212, 232, 0.13);\n  --graph-external: #8abbd0;\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n:root:not([saved-theme=dark]) .graph-landing {\n  --graph-backdrop: #f5f8fc;\n  --graph-surface: rgba(250, 252, 255, 0.88);\n  --graph-surface-strong: rgba(250, 252, 255, 0.97);\n  --graph-border: rgba(32, 61, 83, 0.2);\n  --graph-text: #172c3d;\n  --graph-muted: #506777;\n  --graph-accent: #236779;\n  --graph-accent-soft: rgba(35, 103, 121, 0.1);\n  --graph-external: #356f85;\n}\n\n.graph-landing__hero {\n  background: radial-gradient(circle at 50% 36%, rgba(25, 69, 102, 0.2), transparent 52%), var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.graph-landing__search {\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  box-shadow: 0 2px 10px rgba(0, 5, 12, 0.12);\n  left: 24px;\n  pointer-events: auto;\n  position: absolute;\n  top: 76px;\n  width: min(250px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__search:has(.graph-landing__search-results:not([hidden])) {\n  background: var(--graph-surface-strong);\n  border-radius: 14px;\n  box-shadow: 0 10px 28px rgba(0, 5, 12, 0.22);\n}\n\n.graph-landing__search-icon {\n  color: var(--graph-muted);\n  left: 14px;\n  pointer-events: none;\n  position: absolute;\n  top: 14px;\n}\n\n.graph-landing__search input[type=search] {\n  appearance: none;\n  background: transparent;\n  border: 0;\n  border-radius: inherit;\n  box-sizing: border-box;\n  color: var(--graph-text);\n  font: inherit;\n  font-size: 0.875rem;\n  height: 44px;\n  outline: 0;\n  padding: 0 0.9rem 0 2.45rem;\n  width: 100%;\n}\n\n.graph-landing__search input[type=search]::placeholder {\n  color: var(--graph-muted);\n  opacity: 0.9;\n}\n\n.graph-landing__search input[type=search]:focus-visible {\n  box-shadow: 0 0 0 2px var(--graph-accent);\n}\n\n.graph-landing__search-results {\n  border-top: 1px solid var(--graph-border);\n  list-style: none;\n  margin: 0;\n  max-height: min(22rem, 100dvh - 15rem);\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 0.35rem;\n}\n\n.graph-landing__search-results[hidden] {\n  display: none;\n}\n\n.graph-landing__search-result {\n  background: transparent;\n  border: 0;\n  border-radius: 9px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: block;\n  font: inherit;\n  font-size: 0.82rem;\n  min-height: 44px;\n  padding: 0.65rem 0.7rem;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__search-result:hover,\n.graph-landing__search-result:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__search-result:focus-visible {\n  box-shadow: inset 0 0 0 2px var(--graph-accent);\n}\n\n.graph-landing__search-status {\n  color: var(--graph-muted);\n  display: none;\n  font-size: 0.7rem;\n  padding: 0 0.9rem;\n}\n\n.graph-landing__search-status:not(:empty) {\n  display: block;\n  padding-bottom: 0.55rem;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0.02;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: #d5dee6;\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__search {\n    left: 16px;\n    top: 68px;\n    width: min(250px, 100vw - 32px);\n  }\n  .graph-landing__search-results {\n    max-height: min(38dvh, 100dvh - 15rem);\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';
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
      searchCount: "{n}\uAC1C \uACB0\uACFC"
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
    searchCount: "{n} results"
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
                    "svg",
                    {
                      class: "graph-landing__search-icon",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      focusable: "false",
                      children: [
                        /* @__PURE__ */ u2(
                          "circle",
                          {
                            cx: "11",
                            cy: "11",
                            r: "6.5",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.8"
                          }
                        ),
                        /* @__PURE__ */ u2(
                          "path",
                          {
                            d: "m16 16 4 4",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-width": "1.8"
                          }
                        )
                      ]
                    }
                  ),
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