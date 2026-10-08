// src/heroLanguage.ts
function pickHeroLanguage(available, preferred, fallback) {
  for (var i2 = 0; i2 < preferred.length; i2++) {
    var primary = String(preferred[i2] || "").toLowerCase().split("-")[0];
    if (!primary) continue;
    for (var j2 = 0; j2 < available.length; j2++) {
      if (available[j2] === primary) return primary;
    }
  }
  for (var k = 0; k < available.length; k++) {
    if (fallback && available[k] === fallback) return fallback;
  }
  return null;
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Xt(e,r,o,n){if(![e.x,e.y,e.z,r.x,r.y,r.z,o,n].every(Number.isFinite))return null;let c=r.x-e.x,m=r.y-e.y,x=r.z-e.z,L=Math.hypot(c,m,x),R={x:(e.x+r.x)/2,y:(e.y+r.y)/2,z:(e.z+r.z)/2},q=L-Math.max(0,o)-Math.max(0,n);if(L===0||q<=0)return{start:R,end:R,length:0};let k=c/L,K=m/L,B=x/L,T=Math.max(0,o),j=Math.max(0,n);return{start:{x:e.x+k*T,y:e.y+K*T,z:e.z+B*T},end:{x:r.x-k*j,y:r.y-K*j,z:r.z-B*j},length:q}}function Zt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function ot(e,r,o){let n=Number.isFinite(e)?Math.max(0,e):0,s=Number.isFinite(r)?Math.max(0,r):0,c=Number.isFinite(o)?Math.max(s,o):s;if(c===s)return s>0?.5:0;let m=Math.min(c,Math.max(s,n));return(Math.sqrt(m)-Math.sqrt(s))/(Math.sqrt(c)-Math.sqrt(s))}function Jt(e,r,o){return ot(Math.max(e,r),0,o)}function Re(e,r,o){return Number.isFinite(e)?Math.min(o,Math.max(r,e)):r}function Qt(e){return 1+Re(e,0,1)*1.2}function en(e,r){let o=Re(e,0,1),n=Re(r,0,2);return Math.max(.5,1-o*.24*n)}function tn(e,r){let o=Re(e,0,1),n=Re(r,0,2);return Math.min(1.6,1+o*.3*n)}var nr=/^[A-Za-z0-9_-]{6,20}$/,rr=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),or=new Set(["youtu.be","www.youtu.be"]);function rt(e){return e&&nr.test(e)?e:void 0}function ar(e){if(!e)return;let r=e.trim(),o=rt(r);if(o)return o;let n;try{n=new URL(r)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if(rr.has(n.hostname)){if(n.pathname==="/watch")return rt(n.searchParams.get("v"));let s=n.pathname.split("/").filter(Boolean);if(s.length===2&&(s[0]==="shorts"||s[0]==="embed"))return rt(s[1])}if(or.has(n.hostname)){let s=n.pathname.split("/").filter(Boolean);if(s.length===1)return rt(s[0])}}}function nn(e){let r=[],o=new Set;for(let n of e){let s=n.title.trim(),c=ar(n.url);if(!s||!c||o.has(c))continue;o.add(c);let m=n.artist?.trim();m?r.push({title:s,artist:m,videoId:c}):r.push({title:s,videoId:c})}return r}function F(e){return typeof e=="string"?e:e.id}function xt(e,r){return r===void 0||!Number.isFinite(r)||r<0?"full":e>=r?"dot":"full"}function rn(e,r,o,n){return r||e&&xt(o,n)==="full"}function at(e,r,o){let n=e.get(r);if(n)return n;let s=o();return e.set(r,s),s}function me(e,r){let o=e?r(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function on(e,r){if(r===void 0||!Number.isFinite(r)||r<0||r>=e.nodes.length)return e;let n=[...e.nodes].sort((m,x)=>x.degree!==m.degree?x.degree-m.degree:m.id<x.id?-1:m.id>x.id?1:0).slice(0,Math.max(0,r)),s=new Set(n.map(m=>m.id)),c=e.links.filter(m=>{let x=F(m.source),L=F(m.target);return s.has(x)&&s.has(L)});return{nodes:n,links:c}}function an(e,r,o,n){let s=new Set,c=Math.max(0,Math.floor(n));if(c<=0)return s;let m=new Set([o]),x=new Set([o]);for(let L=0;L<c;L+=1){let R=new Set;for(let q of x)for(let k of e.get(q)??[])m.has(k)||(m.add(k),R.add(k),r.has(k)||s.add(k));x=R}return s}var ir=2.399963229728653,Tt=20;function sn(e,r,o){let n=e.x??0,s=e.y??0,c=e.z??0,m=r*ir;return{x:n+Tt*Math.cos(m),y:s+Tt*Math.sin(m),z:o?c+Tt*Math.sin(m*.5):c}}function cn(e,r,o,n){if(r===o)return new Set;if(r===null||o===null)return new Set(n);let s=new Set([r,o]);for(let c of e.get(r)??[])s.add(c);for(let c of e.get(o)??[])s.add(c);return s}var Ft="0.179.1",sr="https://esm.sh/force-graph@1.51.4",cr=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Ft}`,lr="https://esm.sh/d3-force-3d@3.0.6",ur=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Ft}`,dr=`https://esm.sh/three@${Ft}`,fr=8,gr=10;var qe=1,Pt=4,mr=.05,pr=.09,hr=12,br=2.6,yr=1,ln=1,ze=.18,Pn="graph-landing:lens",Gn="graph-landing:tune",un="graph-landing:hint",Gt="graph-landing:ambient-audio",dn="UDVtMYqUAyw",Oe=12,wr=28e3,kr="https://www.youtube.com/iframe_api",vr=.18,fn=1.25,Tr=1.25,xr=1.15,Er=.55,pe={x:330,y:235,z:565},gn={x:0,y:0,z:0},Be=Math.hypot(pe.x,pe.y,pe.z),mn=.52,Lr=300/Be,Sr=1600/Be,pn=2.6,Mr=5.6,hn=3.2,bn=64,yn=24,wn="#f2f3f4",kn="#f4c3d0",Cr=6,Nr={wikilink:.5,tag:.4,external:.45,cooc:.3,folder:.3},Ir="#a8b0c2",vn={min:80,max:200},Tn={min:40,max:110},xn={min:160,max:280},En={min:90,max:170},Ln=220,Sn=2,Ar=350,Et={min:-170,max:-320},Lt={min:96,max:156},St={min:170,max:340};function _r(e){return $e(e-.5,0,1)}function ct(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Mt(e){return Array.isArray(e)?e.filter(r=>typeof r=="string"):[]}function Pr(e){let r=[];for(let o of Object.values(e)){let n=ct(o);if(!Zt(n.filePath))continue;let s=typeof n.slug=="string"?n.slug:"";if(s.length===0)continue;let c=n.multilingual,m=c&&typeof c=="object"?c:void 0;r.push({slug:s,title:typeof n.title=="string"?n.title:s,links:Mt(n.links),tags:Mt(n.tags),externalLinks:Mt(n.externalLinks),content:typeof n.excerpt=="string"?n.excerpt:typeof n.content=="string"?n.content:"",multilingual:m})}return r}function Gr(e){let r=e.replace(/\\s+/g," ").trim();return r.length<=Ln?r:`${r.slice(0,Ln).trimEnd()}\\u2026`}function Ue(e){let r=0;for(let o of e)r=r*31+o.charCodeAt(0)>>>0;return r%628/100}function Mn(e){return Ue(e)/(2*Math.PI)}function it(e,r,o){let n=Ue(e),s=Math.acos(2*Mn(`${e}:phi`)-1),c=r+(o-r)*Mn(`${e}:r`);return{x:c*Math.sin(s)*Math.cos(n),y:c*Math.sin(s)*Math.sin(n),z:c*Math.cos(s)}}function Hn(e){return e==="index"||e.endsWith("/index")}function Fn(e){return e==="tags"||e.startsWith("tags/")}function Hr(e){let r=e.multilingual?.translationKey;if(r==="home"||r==="graph"||r==="about"||r==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Dn(e,r){for(let o of r){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Ct(e,r){return e.multilingual?.locale?e.multilingual.locale:Dn(e.slug,r).locale}function Fr(e,r){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Dn(e.slug,r).permalink}`}function Dr(e,r){let o=e.find(n=>Ct(n,r.prefixes)===r.localeId);if(o)return o;if(r.localeId===r.sourceLocale)return e.find(n=>Ct(n,r.prefixes)===r.sourceLocale)??e.find(n=>Ct(n,r.prefixes)===void 0)}function $e(e,r,o){return Math.min(o,Math.max(r,e))}function Cn(e){let r=e.split("/").filter(o=>o.length>0);return r.length<2?"root":r[0]??"root"}function Rr(e){let r=e.split("/").filter(o=>o.length>0);return r[r.length-1]??""}function Dt(e){return Rr(e).trim().toLowerCase()}function zr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Or(e){let r=e.trim();return r.length===0||zr(r)||Fn(r)||Hn(r)?!0:Dt(r).length===0}function Vr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),r=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(r.filter(o=>o.length>0))]}function Rn(e){try{let r=new URL(e,window.location.origin);return r.protocol!=="http:"&&r.protocol!=="https:"?null:(r.hash="",r.hostname=r.hostname.toLowerCase(),r.pathname!=="/"&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.replace(/\\/+$/,"")),r.toString())}catch{return null}}function Wr(e,r){let o=Rn(e);return o===null?!1:!r.includes(new URL(o).hostname)}function Nn(e){return`external:${e}`}function qr(e,r){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),s=o.pathname;return(r.get(n)??0)>1&&s.length>1?`${n}${s}`:n}function Br(e){let r=new Map,o=new Map;for(let n of e){let s=Dt(n.slug);s.length>0&&!r.has(s)&&r.set(s,n.slug);let c=n.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,n.slug);let m=c.replace(/\\s+/g,"-");m.length>0&&!o.has(m)&&o.set(m,n.slug)}return{byBasename:r,byTitle:o}}function Ur(e,r,o){if(r.has(e))return e;let n=Dt(e),s=o.byBasename.get(n);if(s)return s;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return c||null}function $r(e,r){return e.length===0?"":[...e].sort((n,s)=>(r.get(s)??0)-(r.get(n)??0))[0]??""}function Yr(e,r,o=void 0){let n=e.filter(u=>!Hn(u.slug)&&!Fn(u.slug)&&!Hr(u)),s=new Map;for(let u of n){let b=Fr(u,r.prefixes),v=s.get(b)??[];v.push(u),s.set(b,v)}let c=[];for(let u of s.values()){let b=Dr(u,r);b&&c.push(b)}let m=new Set(c.map(u=>u.slug)),x=Br(c),L=new Map,R=[],q=new Set,k=new Map,K=u=>{L.set(u,(L.get(u)??0)+1)},B=(u,b,v)=>u<b?`${u}|${b}|${v}`:`${b}|${u}|${v}`,T=(u,b,v,I)=>{let P=B(u,b,v);return q.has(P)?!1:(q.add(P),R.push({source:u,target:b,kind:v}),I&&(K(u),K(b)),!0)};for(let u of c)for(let b of u.links){if(Or(b))continue;let v=Ur(b,m,x);v!==null&&v!==u.slug&&T(u.slug,v,"wikilink",!0)}let j=Vr(),H=new Set;for(let u of c)for(let b of u.externalLinks){let v=Rn(b);v===null||!Wr(v,j)||(H.add(v),T(u.slug,Nn(v),"external",!0))}let U=new Map;for(let u of H){let b=new URL(u).hostname.replace(/^www\\./,"");U.set(b,(U.get(b)??0)+1)}let ee=new Set,C=new Map;for(let u of c)for(let b of u.tags){k.set(b,(k.get(b)??0)+1);let v=`tag:${b}`;ee.add(v),T(u.slug,v,"tag",!0);let I=C.get(b)??[];I.push(u.slug),C.set(b,I)}if(o!==!1)for(let u of C.values())u.length>hr||u.forEach((b,v)=>{for(let I of u.slice(v+1))T(b,I,"cooc",!1)});if(o!==!1){let u=o?.maxTagsPerNote,b=o?.maxEdges,v=0;e:for(let I of c)if(!(I.tags.length<2)&&!(u!==void 0&&I.tags.length>u))for(let P=0;P<I.tags.length;P+=1)for(let A=P+1;A<I.tags.length;A+=1){if(b!==void 0&&v>=b)break e;T(`tag:${I.tags[P]}`,`tag:${I.tags[A]}`,"cooc",!1)&&(v+=1)}}let $=new Map;for(let u of c){let b=Cn(u.slug);if(b==="root")continue;let v=$.get(b)??[];v.push(u.slug),$.set(b,v)}for(let u of $.values()){if(u.length<2)continue;let b=[...u].sort();for(let v=0;v<b.length;v+=1){let I=b[(v+1)%b.length],P=b[(v+Sn)%b.length],A=b[v];A===void 0||I===void 0||(A!==I&&!q.has(B(A,I,"wikilink"))&&T(A,I,"folder",!1),b.length>Sn+1&&P!==void 0&&A!==P&&!q.has(B(A,P,"wikilink"))&&T(A,P,"folder",!1))}}let N=[...L.values()],z=N.length>0?Math.min(...N):0,X=N.length>0?Math.max(...N):0,Z=u=>{let b=ot(L.get(u)??0,z,X);return qe+b*(Pt-qe)},te=[...c].sort((u,b)=>(L.get(b.slug)??0)-(L.get(u.slug)??0)),Y=new Set(te.filter(u=>(L.get(u.slug)??0)>0).slice(0,fr).map(u=>u.slug)),J=c.map(u=>{let b=Y.has(u.slug),v=b?it(u.slug,Tn.min,Tn.max):it(u.slug,vn.min,vn.max);return{id:u.slug,name:u.title,type:"note",val:Z(u.slug),degree:L.get(u.slug)??0,isHub:b,tag:"",slug:u.slug,url:"",folder:Cn(u.slug),tags:u.tags,dominantTag:$r(u.tags,k),excerpt:Gr(u.content),phase:Ue(u.slug),x:v.x,y:v.y,z:v.z}});for(let u of H){let b=Nn(u),v=it(b,xn.min,xn.max);J.push({id:b,name:qr(u,U),type:"external",val:Z(b)*Er,degree:L.get(b)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:Ue(b),x:v.x,y:v.y,z:v.z})}for(let u of ee){let b=u.slice(4),v=it(u,En.min,En.max);J.push({id:u,name:b,type:"tag",val:$e(Z(u)*.7,qe,Pt),degree:L.get(u)??0,isHub:!1,tag:b,slug:`tags/${b}`,url:"",folder:"tag",tags:[b],dominantTag:b,excerpt:"",phase:Ue(u),x:v.x,y:v.y,z:v.z})}return{nodes:J,links:R}}function Nt(e){let r=new Map,o=(n,s)=>{let c=r.get(n)??new Set;c.add(s),r.set(n,c)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let s=F(n.source),c=F(n.target);o(s,c),o(c,s)}return r}function Le(e,r){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||r}function zn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Le("--graph-backdrop","#ffffff"),ink:Le("--graph-text","#0f0f0f"),accent:Le("--graph-accent","#a52142"),tertiary:Le("--graph-external","#c75b75"),gray:Le("--graph-muted","#737373"),external:Le("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Ve(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Kr(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function jr(){return Kr()}function W(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ht(e){let r=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(r&&r[1]&&r[2]&&r[3])return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function Se(e,r){let o=Ht(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${r})`:e}function Xr(e,r,o){let n=Ht(e),s=Ht(r);if(!n||!s)return e;let c=(m,x)=>Math.round(m+(x-m)*o);return`rgb(${c(n.r,s.r)}, ${c(n.g,s.g)}, ${c(n.b,s.b)})`}function st(e){return e.bg}function Zr(e){return W()?st(e):"rgba(0, 0, 0, 0)"}function On(e,r){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return r[o%r.length]??r[0]??e}function In(e,r){return e==="articles"?r.accent:e==="inbox"?r.tertiary:e==="root"?r.ink:On(e,[r.accent,r.tertiary,r.ink,r.gray])}function Jr(e,r){return e.length===0?r.ink:On(e,[r.accent,r.tertiary])}function Qr(e){let r=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let s=`${n}${r}`.replace(/\\/{2,}/g,"/");return new URL(s,window.location.origin)}function eo(e){let r=e.default;if(typeof r!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return r()}function It(e,r){e.textContent=r,e.classList.add("graph-landing__error")}async function to(e){let o=await import(e?cr:sr);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):eo(o)}function no(){try{let e=sessionStorage.getItem(Pn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function ro(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let r=sessionStorage.getItem(Gn);if(!r)return e;let o=ct(JSON.parse(r)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,s=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,m=typeof o.spread=="number"?o.spread:e.spread,x=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:s,zoom:c,spread:m,hubGravity:x}}catch(r){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",r),e}}function We(e){try{sessionStorage.setItem(Gn,JSON.stringify(e))}catch(r){console.error("[graph-landing] could not persist tune",r)}}function At(e){try{sessionStorage.setItem(Pn,e)}catch(r){console.error("[graph-landing] could not persist lens",r)}}function oo(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function ao(e,r){return e.type==="tag"?e.tag===r:e.tags.includes(r)}function io(e,r){return e.type==="note"&&e.folder===r}function An(e,r){let o=F(r),n=e.find(s=>s.id===o);return!n||n.type!=="note"?null:n.folder}function so(e,r,o){let n=new Map;if(r==="folder"){let s=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return s.forEach((c,m)=>{let x=Math.PI*2*m/Math.max(s.length,1),L={x:Math.cos(x)*o,y:Math.sin(x)*o,z:0};for(let R of e.nodes)R.type==="note"&&R.folder===c&&n.set(R.id,L)}),n}if(r==="tag"){let s=e.nodes.filter(m=>m.type==="tag"),c=new Map;s.forEach((m,x)=>{let L=Math.PI*2*x/Math.max(s.length,1);c.set(m.tag,{x:Math.cos(L)*o,y:Math.sin(L)*o,z:0})});for(let m of e.nodes)if(m.type==="tag"){let x=c.get(m.tag);x&&n.set(m.id,x)}else if(m.dominantTag.length>0){let x=c.get(m.dominantTag);x&&n.set(m.id,x)}}return n}function co(e,r){let o=[],n=s=>{let c=r*s;for(let m of o){let x=e(m);x&&(m.vx=(m.vx??0)+(x.x-(m.x??0))*c,m.vy=(m.vy??0)+(x.y-(m.y??0))*c,m.vz=(m.vz??0)+(x.z-(m.z??0))*c)}};return n.initialize=s=>{o=s},n}function lo(e,r){let o=[],n=s=>{let c=r*s;for(let m of o)e==="y"?m.vy=(m.vy??0)-(m.y??0)*c:m.vx=(m.vx??0)-(m.x??0)*c};return n.initialize=s=>{o=s},n}function _n(e,r,o,n){for(let s of e.querySelectorAll(r)){if(!(s instanceof HTMLElement))continue;let c=s.getAttribute(n);s.setAttribute("aria-pressed",c===o?"true":"false")}}function uo(e,r,o,n){let s=Nt(r.links),c=(t,a,i)=>t<a?`${t}|${a}|${i}`:`${a}|${t}|${i}`,m=new Map(n.fullData.nodes.map(t=>[t.id,t])),x=new Map,L=new Set,R=new Set;n.fullData!==r&&(x=Nt(n.fullData.links),L=new Set(r.nodes.map(t=>t.id)),R=new Set(r.links.map(t=>c(F(t.source),F(t.target),t.kind))));let q=t=>{if(n.fullData===r)return!1;let a=an(x,L,t,n.expandHops);if(!L.has(t)&&m.has(t)&&a.add(t),a.size===0)return!1;r.nodes=[...r.nodes],r.links=[...r.links];let i=n.layout.incrementalWarmup?m.get(t):void 0,l=0;for(let p of a){let h=m.get(p);if(h){if(i&&h.id!==i.id){let w=sn(i,l,n.use3d);h.x=w.x,h.y=w.y,h.z=w.z,h.vx=h.vy=h.vz=0,l+=1}r.nodes.push(h),L.add(p)}}for(let p of n.fullData.links){let h=F(p.source),w=F(p.target);if(!L.has(h)||!L.has(w))continue;let g=c(h,w,p.kind);R.has(g)||(R.add(g),r.links.push(p))}return s=Nt(r.links),!0},k={lens:no(),allLabels:!0,focusTag:null,focusFolder:null},K=null,B=null,T=ro(),j=!1,H=gn,U=Be,ee=0,C=t=>ot(t.degree,0,ee),$=()=>{e.cooldownTicks(n.layout.freezeAfterWarmup?90:n.layout.cooldownTicks??200),e.d3ReheatSimulation()},N=()=>B??K,z=new Set(r.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,gr).map(t=>t.id)),X=t=>{let a=t.val;return t.isHub&&(a*=fn),k.lens==="tag"&&t.type==="tag"&&(a*=Tr),k.focusTag&&t.id===`tag:${k.focusTag}`&&(a*=xr),a},Z=t=>{let a=N();return a===t.id?!0:a!==null?s.get(a)?.has(t.id)??!1:k.allLabels||z.has(t.id)},te=t=>{let a=Pt*fn,i=$e((X(t)-qe)/(a-qe),0,1);return(pn+i*(Mr-pn))*T.nodeScale},Y=t=>{let a=N();if(a!==null)return a===t||(s.get(a)?.has(t)??!1);if(k.focusTag===null&&k.focusFolder===null)return!0;let i=r.nodes.find(l=>l.id===t);return i?k.focusFolder!==null?io(i,k.focusFolder):k.focusTag!==null&&ao(i,k.focusTag):!1},J=t=>t.type==="external"?o.current.gray:k.lens==="tag"?t.type==="tag"?o.current.tertiary:Jr(t.dominantTag,o.current):k.lens==="folder"?t.type==="tag"?o.current.tertiary:In(t.folder,o.current):k.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.gray:o.current.ink,u=t=>t.isHub?o.current.accent:t.type==="tag"?o.current.gray:o.current.ink,b=(t,a)=>{let i=m.get(t)?.degree??0,l=m.get(a)?.degree??0;return Math.log1p(Math.min(i,l))/Math.log1p(Math.max(1,ee))},v=t=>{let a=N();if(a!==null&&(a===t.id||(s.get(a)?.has(t.id)??!1)))return W()?"#ffffff":o.current.accent;let i=W()?u(t):J(t);return Y(t.id)?W()?i:t.isHub?o.current.accent:i:Xr(i,st(o.current),1-ze)},I=t=>te(t)*hn*(yn/bn),P=t=>t==="wikilink"?.8:t==="external"?.7:t==="tag"?.62:0,A=t=>{let a=F(t.source),i=F(t.target),l=N(),p;if(t.kind==="cooc"||t.kind==="folder"){if(!(t.kind==="cooc"?k.lens!=="folder":k.lens==="folder"))return 0;p=W()?.24:.26}else{if(l!==null&&(a===l||i===l))return W()?.72:.95;let h=b(a,i);p=P(t.kind)*(.6+.4*h)}return(l!==null||k.focusTag!==null||k.focusFolder!==null)&&(!Y(a)||!Y(i))?p*ze:p},ne=t=>{let a=F(t.source),i=F(t.target),l=N(),p=W()?Ir:o.current.gray;return l!==null&&(a===l||i===l)?W()?wn:o.current.accent:p},Me=t=>Se(ne(t),A(t)),oe=()=>({nodes:r.nodes,links:r.links}),ae=t=>{let a=z.has(t.id)||N()===t.id?o.current.ink:o.current.gray;return Y(t.id)?a:Se(a,ze)},ue=t=>{if(!W()){let a=o.current.bg;return Y(t.id)?Se(a,.9):Se(a,.28)}return Y(t.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)"},de=()=>{let t=e.controls?.().target;if(t&&(H={x:t.x,y:t.y,z:t.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let i={x:a.x-H.x,y:a.y-H.y,z:a.z-H.z},l=Math.hypot(i.x,i.y,i.z);if(l>1)return{dir:i,len:l}}}return{dir:pe,len:Be}},ge=t=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=U/$e(T.zoom,.4,2.5),{dir:i,len:l}=de(),p=a/l;e.cameraPosition({x:H.x+i.x*p,y:H.y+i.y*p,z:H.z+i.z*p},H,Ve()?0:t),Ye();return}typeof e.zoom=="function"&&e.zoom(T.zoom,Ve()?0:t)},ie=()=>{let t=_r(T.spread),a=Et.min+t*(Et.max-Et.min),i=Lt.min+t*(Lt.max-Lt.min),l=new Map(r.nodes.map(E=>[E.id,E.degree])),p=Math.max(0,...l.values());ee=p;let h=C,w=E=>Jt(l.get(F(E.source))??0,l.get(F(E.target))??0,p),g=e.d3Force("charge");g?.strength&&g.strength(E=>a*Qt(h(E))),g?.theta&&n.layout.chargeTheta!==void 0&&g.theta(n.layout.chargeTheta);let d=e.d3Force("link");d?.distance&&d.distance(E=>{let D=en(w(E),T.hubGravity);return k.lens==="tag"&&E.kind==="tag"?i*.72*D:E.kind==="cooc"||E.kind==="folder"?i:i*D}),d?.strength&&d.strength(E=>{if(E.kind==="cooc"||E.kind==="folder")return .015;let D=tn(w(E),T.hubGravity);if(k.lens==="tag"&&E.kind==="tag")return .3*D;if(k.lens==="folder"){let G=An(r.nodes,E.source),ce=An(r.nodes,E.target);if(G!==null&&G===ce)return .16*D}return E.kind==="tag"?.14*D:(E.kind==="external"?.16:.24)*D}),n.forceCollide&&e.d3Force("collision",n.forceCollide(E=>te(E)+Cr).strength(.85).iterations(1));let y=e.d3Force("center");y?.strength&&y.strength(mr);let M=St.min+t*(St.max-St.min),O=so(r,k.lens,M),V=k.lens==="folder"||k.lens==="tag"?.08:0;if(e.d3Force("cluster",co(E=>O.get(E.id)??null,V)),n.use3d){e.d3Force("flattenZ",null);let E=n.root.querySelector("#graph-landing-mount"),D=E instanceof HTMLElement?E.clientWidth>=E.clientHeight:!0;e.d3Force("squash",lo(D?"y":"x",pr))}},he=new Map,be=t=>at(he,"dot",()=>{let a=bn,i=document.createElement("canvas");i.width=i.height=a;let l=i.getContext("2d");if(l){let p=yn,h=l.createRadialGradient(32,32,0,32,32,p);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.94,"rgba(255,255,255,1)"),h.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=h,l.fillRect(0,0,a,a)}return new t.CanvasTexture(i)}),ye=(t,a,i)=>{t.color.set(v(a))},f=new Map,S=new Map,_=new Map,re=new Map,fe=new Map,we=new Map,ke=new Map,Vn=(t,a,i)=>{let l=`${a}|${i}`;return at(we,l,()=>new t.CylinderGeometry(a,a,1,i))},Rt=(t,a,i)=>{let l=`${a}|${i}`;return at(ke,l,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:i,depthWrite:!1,blending:W()?t.AdditiveBlending:t.NormalBlending}))},Wn=getComputedStyle(n.root).getPropertyValue("--bodyFont").trim()||"Inter, system-ui, sans-serif",ve=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let t=n.spriteText,a=n.three,i=n.interaction.incrementalRepaint;if(f.clear(),_.clear(),re.clear(),i)for(let l of r.nodes)re.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let p=te(l),h=!1;if(a){let O=new a.SpriteMaterial({map:be(a),color:"#ffffff",transparent:!0,depthWrite:!1,blending:a.NormalBlending,opacity:1});O.color.set(v(l)),i&&_.set(l.id,O);let V=new a.Sprite(O);V.renderOrder=11;let E=p*hn;V.scale.x=E,V.scale.y=E,V.scale.z=1,h=V}let w=Z(l);if(!t||!i&&!w)return h;let g=Array.from(l.name),d=window.innerWidth<700?24:40,y=new t(g.length>d?`${g.slice(0,d).join("")}\\u2026`:l.name);if(y.color=ae(l),y.fontFace=Wn,y.backgroundColor=!1,y.fontWeight=z.has(l.id)?"500":"400",y.renderOrder=12,y.material.transparent=!0,y.material.depthWrite=!1,y.material.alphaTest=.01,y.material.toneMapped=!1,y.textHeight=z.has(l.id)?5.5:4.5,y.center.set(0,.5),y.position.x=p+3,y.position.y=0,i?(y.visible=w,f.set(l.id,{sprite:y,node:l})):n.lod.labelDistance!==void 0&&f.set(l.id,{sprite:y,node:l}),!a||h===!1)return y;let M=new a.Group;return M.add(h),M.add(y),M})},qn=()=>{let t=n.three;if(!n.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),i=n.lod.linkResolution??5,l=n.lod.cullDistance,p=n.interaction.incrementalRepaint,h=n.lod.shareLinkResources;if(S.clear(),fe.clear(),we.clear(),ke.clear(),p)for(let w of r.links){let g=F(w.source),d=F(w.target);for(let y of[g,d]){let M=fe.get(y);M?M.push(w):fe.set(y,[w])}}e.linkThreeObject(w=>{let g=Nr[w.kind]*T.edgeScale,d=h?Rt(t,ne(w),A(w)):new t.MeshBasicMaterial({color:ne(w),transparent:!0,opacity:A(w),depthWrite:!1,blending:W()?t.AdditiveBlending:t.NormalBlending}),y=h?Vn(t,g,i):new t.CylinderGeometry(g,g,1,i),M=new t.Mesh(y,d);return(l!==void 0||p)&&S.set(w,M),M}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((w,g,d)=>{let y=g.end.x-g.start.x,M=g.end.y-g.start.y,O=g.end.z-g.start.z,V=Math.sqrt(y*y+M*M+O*O);if(!W()){let E=typeof d.source=="string"?m.get(d.source):d.source,D=typeof d.target=="string"?m.get(d.target):d.target,G=E&&D?Xt(g.start,g.end,I(E),I(D)):null;return G?(w.position.x=(G.start.x+G.end.x)/2,w.position.y=(G.start.y+G.end.y)/2,w.position.z=(G.start.z+G.end.z)/2,w.scale.x=1,w.scale.y=G.length,w.scale.z=1,G.length>0&&w.quaternion.setFromUnitVectors(a,new t.Vector3(G.end.x-G.start.x,G.end.y-G.start.y,G.end.z-G.start.z).normalize()),!0):(w.scale.y=0,!0)}return w.position.x=(g.start.x+g.end.x)/2,w.position.y=(g.start.y+g.end.y)/2,w.position.z=(g.start.z+g.end.z)/2,w.scale.x=1,w.scale.y=Math.max(V,.01),w.scale.z=1,w.quaternion.setFromUnitVectors(a,new t.Vector3(y,M,O).normalize()),!0})},lt=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=N();if(a===null||Ve()||document.hidden)return 0;let i=F(t.source),l=F(t.target);return i===a||l===a?2:0})},Te=()=>{e.nodeVal(X),e.nodeColor(v),e.linkColor(Me),e.linkWidth(t=>{let a=F(t.source),i=F(t.target),l=N(),p=T.edgeScale*(W()?1:1.8);return l!==null&&(a===l||i===l)?.7*p:t.kind==="wikilink"||t.kind==="external"?.5*p:(t.kind==="tag"?.35:.25)*p}),typeof e.linkOpacity=="function"&&e.linkOpacity(ln),lt(),qn(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},Bn=(t,a)=>{let i=cn(s,t,a,re.keys()),l=new Set;for(let p of i){let h=re.get(p);if(!h)continue;let w=_.get(p);w&&n.three&&ye(w,h,n.three);let g=f.get(p);g&&(g.sprite.color=ae(h),g.sprite.visible=Z(h));for(let d of fe.get(p)??[]){if(l.has(d))continue;l.add(d);let y=S.get(d);y&&(n.lod.shareLinkResources&&n.three?y.material=Rt(n.three,ne(d),A(d)):(y.material.color.set(ne(d)),y.material.opacity=A(d)))}}},ut=t=>{if(n.interaction.incrementalRepaint&&n.use3d){lt(),Bn(t,N());return}Te(),n.use3d&&ve()},dt=()=>{let t=n.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(h,w)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let d=document.createElement("span");d.className="graph-landing__dot",d.setAttribute("aria-hidden","true"),d.style.background=h;let y=document.createElement("span");return y.textContent=w,g.append(d,y),g},i=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",p=n.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,i),a(o.current.tertiary,l),a(o.current.external,p))},zt=t=>{let a=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="graph-landing__tag-item",i.dataset[t.dataset.key]=t.dataset.value,i.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let h=document.createElement("span");h.className="graph-landing__dot",h.style.background=t.dotColor,l.append(h)}l.append(document.createTextNode(t.label));let p=document.createElement("span");return p.className="graph-landing__tag-count",p.textContent=String(t.count),i.append(l,p),a.append(i),a},Ot=()=>{let t=n.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),i=n.root.querySelector(".graph-landing__tags");if(k.lens==="folder"){let p=n.root.dataset.folderRootLabel??"root",h=new Map;for(let g of r.nodes)g.type==="note"&&h.set(g.folder,(h.get(g.folder)??0)+1);let w=[...h.entries()].sort((g,d)=>d[1]-g[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),i instanceof HTMLElement&&(i.hidden=w.length===0),t.replaceChildren(...w.map(([g,d])=>zt({dataset:{key:"graphFolder",value:g},pressed:k.focusFolder===g,dotColor:In(g,o.current),label:g==="root"?p:g,count:d})));return}let l=r.nodes.filter(p=>p.type==="tag").sort((p,h)=>h.degree-p.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),i instanceof HTMLElement&&(i.hidden=l.length===0),t.replaceChildren(...l.map(p=>zt({dataset:{key:"graphTag",value:p.tag},pressed:k.focusTag===p.tag,dotColor:null,label:p.tag,count:p.degree})))},Ce=n.root.querySelector("[data-graph-hint]"),ft=0,gt=()=>{if(!(!(Ce instanceof HTMLElement)||Ce.hidden)){Ce.hidden=!0,window.clearTimeout(ft);try{sessionStorage.setItem(un,"1")}catch{}}},Un=()=>{if(Ce instanceof HTMLElement){try{if(sessionStorage.getItem(un))return}catch{}Ce.hidden=!1,ft=window.setTimeout(gt,9e3)}};window.addCleanup(()=>window.clearTimeout(ft));let mt=!0,$n=(t,a)=>{if(typeof e.graph2ScreenCoords!="function"||t<=0||a<=0)return mn;e.camera?.()?.updateMatrixWorld?.();let i=[],l=[];for(let y of oe().nodes){if(y.x===void 0||y.y===void 0)continue;let M=e.graph2ScreenCoords(y.x,y.y,y.z??0);i.push(Math.abs(M.x-t/2)),l.push(Math.abs(M.y-a/2))}let p=y=>y.sort((M,O)=>M-O)[Math.floor((y.length-1)*.98)]??0,h=p(i),w=p(l);if(h<1||w<1)return mn;let g=.08,d=Math.min(t*(.5-g)/h,a*(.5-g)/w);return $e(1/d,.3,1)},Vt=0,pt=()=>{let t=n.root.querySelector("#graph-landing-mount"),a=t instanceof HTMLElement?t.clientWidth:0,i=t instanceof HTMLElement?t.clientHeight:0;if(r.nodes.length>0&&e.zoomToFit?.(0,40),r.nodes.length>1&&de().len<10&&Vt++<120){ht=window.requestAnimationFrame(pt);return}Vt=0,U=de().len*$n(a,i),ge(0),Ye()},ht=0;e.onEngineStop(()=>{mt&&(ht=window.requestAnimationFrame(()=>{mt=!1,pt(),Un()}))}),window.addCleanup(()=>window.cancelAnimationFrame(ht));let Ne=(t=!1)=>{e.warmupTicks(t&&n.layout.incrementalWarmup?0:n.layout.warmupTicks??(n.use3d?50:60)),e.graphData(oe()),ie(),Te(),ve(),dt(),Ot(),_n(n.root,"[data-graph-lens]",k.lens,"data-graph-lens"),$()},Yn=t=>{k.lens=t,t!=="tag"&&(k.focusTag=null),t!=="folder"&&(k.focusFolder=null),At(t),Ne()},Kn=t=>{k.focusTag=k.focusTag===t?null:t,k.focusFolder=null,k.focusTag&&(k.lens="tag",At("tag")),Ne()},jn=t=>{k.focusFolder=k.focusFolder===t?null:t,k.focusTag=null,k.focusFolder&&(k.lens="folder",At("folder")),Ne()},Wt=()=>n.use3d?Zr(o.current):st(o.current),Ye=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let t=de().len;e.scene().fog=new n.three.Fog(st(o.current),t*Lr,t*Sr)};e.graphData(oe()),e.backgroundColor(Wt()),e.nodeLabel(()=>""),e.nodeRelSize(br),typeof e.nodeOpacity=="function"&&e.nodeOpacity(yr),typeof e.linkOpacity=="function"&&e.linkOpacity(ln),ie(),Te();let xe=n.root.querySelector("[data-graph-preview]"),Ke=n.root.querySelector("[data-graph-preview-chip]"),je=n.root.querySelector("[data-graph-preview-title]"),Xe=n.root.querySelector("[data-graph-preview-excerpt]"),Ze=0;window.addCleanup(()=>window.clearTimeout(Ze));let Xn=t=>{if(!(xe instanceof HTMLElement)||!(Ke instanceof HTMLElement)||!(je instanceof HTMLElement)||!(Xe instanceof HTMLElement))return;window.clearTimeout(Ze);let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links";if(t.type==="tag"){let p=n.root.dataset.previewTagTemplate??"{n} notes";Ke.textContent=i,je.textContent=`#${t.tag}`,Xe.textContent=p.replace("{n}",String(t.degree))}else t.type==="external"?(Ke.textContent=l,je.textContent=t.name,Xe.textContent=t.url):(Ke.textContent=a,je.textContent=t.name,Xe.textContent=t.excerpt);xe.hidden=!1,xe.dataset.visible="true"},qt=()=>{xe instanceof HTMLElement&&(window.clearTimeout(Ze),Ze=window.setTimeout(()=>{xe.dataset.visible="false",xe.hidden=!0},Ar))};if(e.onNodeHover(t=>{let a=N();K=t?t.id:null,B===null&&(t?Xn(t):qt()),ut(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let i=e.controls();i.autoRotate=!1,i.autoRotateSpeed=vr}e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>W()?wn:o.current.accent),typeof e.cameraPosition=="function"&&(e.cameraPosition(pe,gn),T.zoom!==1&&ge(0)),ve(),Ye();let t=n.lod.labelDistance,a=n.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let i=e.cameraPosition.bind(e),l=0,p=()=>{let h=i();if(h&&typeof h.x=="number"&&typeof h.y=="number"&&typeof h.z=="number"){let w=Math.max(1,n.root.clientHeight||window.innerHeight);if(t!==void 0){let g=[];for(let d of f.values()){let y=d.node.x??0,M=d.node.y??0,O=d.node.z??0,V=Math.hypot(h.x-y,h.y-M,h.z-O);if(d.sprite.visible=rn(Z(d.node),N()===d.node.id||N()===null&&(k.allLabels||z.has(d.node.id)),V,t),d.sprite.visible){let E=Array.from(d.node.name),D=window.innerWidth<700?24:40,G=E.length>D?`${E.slice(0,D).join("")}\\u2026`:d.node.name;d.sprite.text!==G&&(d.sprite.text=G);let ce=e.graph2ScreenCoords?.(y,M,O);if(ce&&N()===null){let er=z.has(d.node.id),jt=Array.from(G).length*(er?8:6)+12,nt=ce.x>window.innerWidth*.6?ce.x-jt:ce.x,kt=nt+jt,tr=g.some(vt=>Math.abs(vt.y-ce.y)<22&&nt<vt.right&&kt>vt.left);d.sprite.visible=!tr&&nt>=8&&kt<=window.innerWidth-8,d.sprite.visible&&g.push({left:nt,right:kt,y:ce.y})}let De=ce!==void 0&&ce.x>window.innerWidth*.6;d.sprite.center.set(De?1:0,.5),d.sprite.position.x=(De?-1:1)*(te(d.node)+3);let Kt=Math.max(4.5,V/w*(z.has(d.node.id)?10:7.5));Math.abs(d.sprite.textHeight-Kt)>.5&&(d.sprite.textHeight=Kt)}}}if(a!==void 0){let g=N();for(let[d,y]of S){let M=F(d.source),O=F(d.target);if(g!==null&&(M===g||O===g)){y.visible=!0;continue}let V=Math.hypot(h.x-y.position.x,h.y-y.position.y,h.z-y.position.z);y.visible=xt(V,a)!=="dot"}}}l=window.requestAnimationFrame(p)};l=window.requestAnimationFrame(p),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,i)=>{let l=te(t),p=t.x??0,h=t.y??0;if(a.save(),a.beginPath(),a.arc(p,h,l,0,Math.PI*2),a.fillStyle=v(t),a.fill(),W()&&t.isHub&&(a.strokeStyle=Y(t.id)?kn:Se(kn,ze),a.lineWidth=1.2/i,a.stroke()),Z(t)){a.globalAlpha=1;let w=11.5/i;a.font=`${w}px ${o.current.font}`,a.fillStyle=W()?Y(t.id)?o.current.ink:Se(o.current.ink,ze):ae(t),a.textAlign="center",a.textBaseline="bottom";let g=h-l-6;W()||(a.strokeStyle=ue(t),a.lineWidth=2.5/i,a.lineJoin="round",a.strokeText(t.name,p,g)),a.fillText(t.name,p,g)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,i)=>{let l=te(t)+8;i.beginPath(),i.arc(t.x??0,t.y??0,l,0,Math.PI*2),i.fillStyle=a,i.fill()});let Ie=n.root.querySelector("[data-graph-inspect]"),Je=n.root.querySelector("[data-graph-inspect-chip]"),Qe=n.root.querySelector("[data-graph-inspect-title]"),et=n.root.querySelector("[data-graph-inspect-excerpt]"),bt=n.root.querySelector("[data-graph-inspect-tags]"),yt=n.root.querySelector("[data-graph-inspect-connected]"),Q=n.root.querySelector("[data-graph-inspect-open]"),Ee=t=>{n.root.dataset.railOpen=t?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),i=n.root.querySelector("[data-graph-rail-scrim]"),l=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",t?"false":"true"),i instanceof HTMLElement&&(i.hidden=!t)},le=()=>{let a=!Ve()&&!document.hidden&&!j;typeof e.controls=="function"&&(e.controls().autoRotate=a),lt()},Bt=window.matchMedia("(prefers-reduced-motion: reduce)");Bt.addEventListener("change",le),document.addEventListener("visibilitychange",le),window.addCleanup(()=>{Bt.removeEventListener("change",le),document.removeEventListener("visibilitychange",le)}),le();let Zn=t=>{let a=s.get(t.id)??new Set,i=[];for(let l of a){let p=r.nodes.find(h=>h.id===l);p&&i.push(p)}return i.sort((l,p)=>p.degree-l.degree)},Jn=t=>{if(!(Ie instanceof HTMLElement)||!(Je instanceof HTMLElement)||!(Qe instanceof HTMLElement)||!(et instanceof HTMLElement)||!(bt instanceof HTMLElement)||!(yt instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",i=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links",p=n.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Je.textContent=i,Qe.textContent=`#${t.tag}`,et.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Je.textContent=l,Qe.textContent=t.name,et.textContent=t.url):(Je.textContent=a,Qe.textContent=t.name,et.textContent=t.excerpt);let h=t.tags.map(g=>{let d=document.createElement("li");return d.textContent=g,d});bt.replaceChildren(...h),bt.hidden=h.length===0;let w=Zn(t).slice(0,12);if(w.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=p,yt.replaceChildren(g)}else yt.replaceChildren(...w.map(g=>{let d=document.createElement("li"),y=document.createElement("button");y.type="button",y.className="graph-landing__inspect-link",y.dataset.graphInspectId=g.id;let M=g.type==="tag"?i:g.type==="external"?l:a,O=document.createElement("span");O.textContent=M;let V=document.createElement("strong");return V.textContent=g.type==="tag"?`#${g.tag}`:g.name,y.append(O,V),d.append(y),d}));Q instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(Q.hidden=!1,Q.href=Qr(t.slug).toString(),Q.textContent=n.root.dataset.inspectRead??"Read note",Q.removeAttribute("target"),Q.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(Q.hidden=!1,Q.href=t.url,Q.textContent=n.root.dataset.inspectOpenExternal??"Open",Q.target="_blank",Q.rel="noopener noreferrer"):(Q.hidden=!0,Q.removeAttribute("href"),Q.removeAttribute("target"),Q.removeAttribute("rel"))),Ie.hidden=!1,n.root.dataset.inspecting="true",Ee(!1),qt()},Ae=()=>{let t=N();if(B=null,Ie instanceof HTMLElement){let a=Ie.contains(document.activeElement);Ie.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}n.root.dataset.inspecting="false",K=null,le(),ut(t)},Qn=t=>{let a=N();B=t.id,le(),Jn(t),ut(a)},wt=(t,a=!1)=>{if(gt(),q(t.id)&&Ne(!0),Qn(t),a){H={x:t.x??0,y:t.y??0,z:t.z??0};let i=Ve()?0:450;n.use3d&&e.cameraPosition?(U=Be,e.cameraPosition({x:H.x+pe.x/T.zoom,y:H.y+pe.y/T.zoom,z:H.z+pe.z/T.zoom},H,i)):e.centerAt?.(H.x,H.y,i)}},tt=!1;e.onNodeClick((t,a)=>{t&&(tt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),wt(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Ae(),Ee(!1)});let se=n.root.querySelector("#graph-landing-mount");if(se instanceof HTMLElement){let t=new ResizeObserver(()=>{e.width(se.clientWidth),e.height(se.clientHeight),B===null&&!mt&&pt()});t.observe(se),window.addCleanup(()=>t.disconnect());let a=null,i=0,l=g=>{gt(),a={x:g.clientX,y:g.clientY},tt=!1,j=!0,le()},p=(g,d)=>{if(typeof e.graph2ScreenCoords!="function")return null;let y=se.getBoundingClientRect(),M=g-y.left,O=d-y.top,V=null,E=484;for(let D of oe().nodes){if(D.x===void 0||D.y===void 0)continue;let G=e.graph2ScreenCoords(D.x,D.y,D.z??0),De=(G.x-M)**2+(G.y-O)**2;De<E&&(E=De,V=D)}return V},h=g=>{let d=a;a=null,j=!1,le(),!(!d||(g.clientX-d.x)**2+(g.clientY-d.y)**2>25)&&(window.clearTimeout(i),i=window.setTimeout(()=>{if(tt){tt=!1;return}let M=p(g.clientX,g.clientY);M?wt(M):Ae()},0))},w=()=>{a=null,j=!1,le()};se.addEventListener("pointerdown",l,!0),se.addEventListener("pointerup",h,!0),se.addEventListener("pointercancel",w,!0),window.addCleanup(()=>{window.clearTimeout(i),se.removeEventListener("pointerdown",l,!0),se.removeEventListener("pointerup",h,!0),se.removeEventListener("pointercancel",w,!0)})}_n(n.root,"[data-graph-lens]",k.lens,"data-graph-lens"),dt(),Ot(),k.lens!=="all"&&Ne(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ut=()=>{o.current=zn(),e.backgroundColor(Wt()),Ye(),Te(),ve(),dt()};document.addEventListener("themechange",Ut),window.addCleanup(()=>document.removeEventListener("themechange",Ut));let $t=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Ae();return}if(a.closest("[data-graph-rail-toggle]")){let d=n.root.dataset.railOpen!=="true";d&&Ae(),Ee(d);return}if(a.closest("[data-graph-rail-scrim]")){Ee(!1);return}let i=a.closest("[data-graph-inspect-id]");if(i instanceof HTMLElement&&i.dataset.graphInspectId){let d=n.fullData.nodes.find(y=>y.id===i.dataset.graphInspectId);d&&wt(d,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&oo(l.dataset.graphLens)){Yn(l.dataset.graphLens);return}let p=a.closest("[data-graph-tag]");if(p instanceof HTMLElement&&p.dataset.graphTag){Kn(p.dataset.graphTag);return}let h=a.closest("[data-graph-folder]");if(h instanceof HTMLElement&&h.dataset.graphFolder){jn(h.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){$();return}let w=a.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){k.allLabels=!k.allLabels,w.setAttribute("aria-pressed",k.allLabels?"true":"false");let d=w.dataset.labelShow??"Labels",y=w.dataset.labelHide??"Labels",M=k.allLabels?y:d;w.title=M,w.setAttribute("aria-label",M),ve();return}if(a.closest("[data-graph-theme]")){let d=W()?"light":"dark";document.documentElement.setAttribute("saved-theme",d),localStorage.setItem("theme",d),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${d}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:d}}));return}let g=a.closest("[data-graph-tags-toggle]");if(g instanceof HTMLButtonElement){let d=n.root.querySelector(".graph-landing__tags");if(d instanceof HTMLElement){let y=d.dataset.open==="true";d.dataset.open=y?"false":"true",g.setAttribute("aria-expanded",y?"false":"true")}}},_e=n.root.querySelector("[data-graph-node-scale]"),Pe=n.root.querySelector("[data-graph-edge-scale]");if(_e instanceof HTMLInputElement){_e.value=String(Math.round(T.nodeScale*100));let t=()=>{T.nodeScale=Number(_e.value)/100,We(T),ie(),$(),Te(),n.use3d&&ve()};_e.addEventListener("input",t),window.addCleanup(()=>_e.removeEventListener("input",t))}if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(T.edgeScale*100));let t=()=>{T.edgeScale=Number(Pe.value)/100,We(T),Te()};Pe.addEventListener("input",t),window.addCleanup(()=>Pe.removeEventListener("input",t))}let Ge=n.root.querySelector("[data-graph-hub-gravity]");if(Ge instanceof HTMLInputElement){Ge.value=String(Math.round(T.hubGravity*100));let t=()=>{let a=Number(Ge.value)/100;T.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,We(T),ie(),$()};Ge.addEventListener("input",t),window.addCleanup(()=>Ge.removeEventListener("input",t))}let He=n.root.querySelector("[data-graph-zoom]");if(He instanceof HTMLInputElement){He.value=String(Math.round(T.zoom*100));let t=()=>{T.zoom=Number(He.value)/100,We(T),ge(200)};He.addEventListener("input",t),window.addCleanup(()=>He.removeEventListener("input",t))}let Fe=n.root.querySelector("[data-graph-spread]");if(Fe instanceof HTMLInputElement){Fe.value=String(Math.round(T.spread*100));let t=()=>{T.spread=Number(Fe.value)/100,We(T),ie(),$()};Fe.addEventListener("input",t),window.addCleanup(()=>Fe.removeEventListener("input",t))}Ee(!1),n.root.addEventListener("click",$t),window.addCleanup(()=>n.root.removeEventListener("click",$t));let Yt=t=>{if(t.key==="Escape"){if(n.root.dataset.railOpen==="true"){Ee(!1);return}Ae()}};window.addEventListener("keydown",Yt),window.addCleanup(()=>window.removeEventListener("keydown",Yt))}function fo(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function go(){try{return window.localStorage.getItem(Gt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function _t(e){try{if(e){window.localStorage.setItem(Gt,"stopped");return}window.localStorage.removeItem(Gt)}catch(r){console.error("[graph-landing] could not persist ambient audio preference",r)}}function mo(e){let r=performance.now(),o=0,n=s=>{let c=Math.min(1,(s-r)/e.durationMs),m=c*c;e.apply(e.from+(e.to-e.from)*m),c<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function po(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((r,o)=>{let n=window,s=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof s=="function"&&s();let c=n.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}r(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=kr,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function ho(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:r=>{e.onReady(r.target)},onStateChange:r=>{r.data===e.api.PlayerState.ENDED&&e.onEnded(r.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function bo(e){let r=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),s=e.querySelector("[data-graph-music-library]"),c=e.querySelector("[data-graph-music-track-list]"),m=e.querySelector("[data-graph-music-status]"),x=e.querySelector("[data-graph-music-dock]"),L=e.querySelector("[data-graph-music-now]"),R=e.querySelector("[data-graph-music-now-title]"),q=e.querySelector("[data-graph-music-now-artist]");if(!(r instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(s instanceof HTMLElement)||!(c instanceof HTMLElement)||!(m instanceof HTMLElement))return;let k=e.dataset.audioStop??"Stop music",K=e.dataset.audioPlay??"Play music",B=e.dataset.musicLibraryOpen??"Open record collection",T=e.dataset.musicLibraryClose??"Close record collection",j=e.dataset.musicCurrentTrack??"Current track",H=[];try{let f=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(f))for(let S of f){if(!S||typeof S!="object")continue;let _=S;typeof _.title!="string"||typeof _.url!="string"||_.artist!==void 0&&typeof _.artist!="string"||H.push({title:_.title,...typeof _.artist=="string"?{artist:_.artist}:{},url:_.url})}}catch{}let U=nn(H);U.length===0&&U.push({title:"Ambient track",videoId:dn});let ee=0,C=null,$=!1,N=null,z=!go(),X=!1,Z=!1,te=()=>U[ee]??U[0]??{title:"Ambient track",videoId:dn},Y=f=>{r.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${f}/hqdefault.jpg")`)},J=()=>te().videoId,u=()=>{c.replaceChildren(),U.forEach((f,S)=>{let _=document.createElement("button");_.type="button",_.className="graph-landing__music-track",_.dataset.graphMusicTrackIndex=String(S),_.setAttribute("aria-current",S===ee?"true":"false");let re=document.createElement("img");re.className="graph-landing__music-track-cover",re.src=`https://i.ytimg.com/vi/${f.videoId}/hqdefault.jpg`,re.alt="",re.loading="lazy";let fe=document.createElement("span");fe.className="graph-landing__music-track-copy";let we=document.createElement("span");if(we.className="graph-landing__music-track-title",we.textContent=f.title,fe.appendChild(we),f.artist){let ke=document.createElement("span");ke.className="graph-landing__music-track-artist",ke.textContent=f.artist,fe.appendChild(ke)}_.append(re,fe),c.appendChild(_)}),m.textContent=`${j}: ${te().title}`,v()},b=f=>{e.dataset.musicLibraryOpen=f?"true":"false",s.hidden=!f,s.setAttribute("aria-hidden",f?"false":"true"),n.setAttribute("aria-expanded",f?"true":"false"),n.setAttribute("aria-label",f?T:B),n.title=f?T:B},v=()=>{let f=r.dataset.playing==="true";x&&(x.dataset.playing=f?"true":"false"),L&&(L.hidden=!f);let S=te();R&&(R.textContent=S.title),q&&(q.textContent=S.artist??"",q.hidden=!S.artist)},I=f=>{r.setAttribute("aria-pressed",f?"true":"false"),r.setAttribute("aria-label",f?k:K),r.title=f?k:K,r.dataset.playing=f?"true":"false",v()},P=()=>{N&&(N(),N=null)},A=f=>{C&&C.setVolume(Math.max(0,Math.min(Oe,f)))},ne=f=>{!z||X||(X=!0,I(!0),f.unMute(),A(0),f.playVideo(),P(),N=mo({from:0,to:Oe,durationMs:wr,apply:A}))},Me=()=>{z=!1,X=!1,P(),_t(!0),C&&(C.mute(),C.pauseVideo(),A(0)),I(!1)},oe=async()=>{if(!C)try{let f=await po();if(C)return;C=ho({api:f,host:o,videoId:J(),onReady:S=>{$=!0,S.mute(),A(0),S.playVideo(),z&&Z&&ne(S)},onEnded:S=>{if(!z)return;ee=(ee+1)%U.length;let _=J();Y(_),u(),S.loadVideoById(_),A(X?Oe:0)}})}catch(f){console.error("[graph-landing] ambient audio unavailable",f)}},ae=f=>{let S=f.target;if(!(S instanceof Element&&S.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!z||X||fo())){if(Z=!0,$&&C){ne(C);return}oe()}},ue=()=>{if(z&&X){Me();return}if(Z=!0,z=!0,_t(!1),$&&C){ne(C);return}oe()},de=f=>{if(!(!Number.isInteger(f)||f<0||f>=U.length)){if(ee=f,Y(J()),u(),b(!1),z=!0,Z=!0,_t(!1),$&&C){C.loadVideoById(J()),X?(C.unMute(),C.playVideo(),A(Oe)):ne(C);return}oe()}},ge=()=>{let f=e.dataset.musicLibraryOpen!=="true";if(f){e.dataset.railOpen="false";let S=e.querySelector("[data-graph-rail-toggle]"),_=e.querySelector("#graph-landing-rail"),re=e.querySelector("[data-graph-rail-scrim]");S instanceof HTMLButtonElement&&S.setAttribute("aria-expanded","false"),_ instanceof HTMLElement&&_.setAttribute("aria-hidden","true"),re instanceof HTMLElement&&(re.hidden=!0)}b(f)},ie=f=>{let S=f.target;if(!(S instanceof Element))return;let _=S.closest("[data-graph-music-track-index]");_ instanceof HTMLButtonElement&&de(Number(_.dataset.graphMusicTrackIndex))},he=f=>{if(e.dataset.musicLibraryOpen!=="true")return;let S=f.target;(!(S instanceof Element)||!S.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&b(!1)},be=f=>{f.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(b(!1),f.stopImmediatePropagation())},ye=()=>{if(C){if(document.hidden){P(),C.pauseVideo();return}z&&X&&(C.playVideo(),A(Oe))}};Y(J()),I(!1),u(),b(!1),oe(),r.addEventListener("click",ue),n.addEventListener("click",ge),c.addEventListener("click",ie),e.addEventListener("click",he),e.addEventListener("pointerdown",ae,!0),e.addEventListener("touchstart",ae,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",ye),window.addEventListener("keydown",be),window.addCleanup(()=>{r.removeEventListener("click",ue),n.removeEventListener("click",ge),c.removeEventListener("click",ie),e.removeEventListener("click",he),e.removeEventListener("pointerdown",ae,!0),e.removeEventListener("touchstart",ae,!0),document.removeEventListener("visibilitychange",ye),window.removeEventListener("keydown",be),P(),C&&(C.pauseVideo(),C.destroy(),C=null)})}async function yo(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let r=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(r instanceof HTMLElement&&o instanceof HTMLElement){let f=r.parentElement,S=r.nextSibling;o.insertBefore(r,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{f?.isConnected&&r.isConnected&&f.insertBefore(r,S?.parentNode===f?S:null)})}bo(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let s=e.querySelectorAll("[data-graph-counts]"),c=e.dataset.locale??e.dataset.graphDefaultLocale??"en",m=e.dataset.sourceLocale??c,x=(e.dataset.localePrefixes??"").split(",").map(f=>f.trim()).filter(f=>f.length>0),L=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",R=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",q=e.dataset.graphIndexPath??"",k=me(e.dataset.maxRenderedNodes,f=>Number.parseInt(f,10)),K=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,B=Number.isFinite(K)?K:1,T=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,j=e.dataset.graphRenderMode==="3d"?"3d":"auto",H=e.dataset.graphLayoutFreezeAfterWarmup==="true",U=me(e.dataset.graphLayoutWarmupTicks,f=>Number.parseInt(f,10)),ee=me(e.dataset.graphLayoutCooldownTicks,f=>Number.parseInt(f,10)),C=me(e.dataset.graphLayoutChargeTheta,Number.parseFloat),$=e.dataset.graphLayoutIncrementalWarmup==="true",N=me(e.dataset.graphLodLabelDistance,Number.parseFloat),z=me(e.dataset.graphLodCullDistance,Number.parseFloat),X=e.dataset.graphLodFog==="true",Z=me(e.dataset.graphLodLinkResolution,f=>Number.parseInt(f,10)),te=e.dataset.graphInteractionIncrementalRepaint==="true",Y=e.dataset.graphLodShareLinkResources==="true",J=!1,u=null,b={current:zn()},v=()=>{J=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(v);let I=jr();if(j==="3d"&&!I){It(n,"3D graph unavailable: WebGL is required.");return}let P=j==="3d"||I,A=to(P),ne=P?import(ur).then(f=>f.default??null).catch(f=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",f),null)):Promise.resolve(null),Me=P?import(dr).catch(f=>(console.error("[graph-landing] three unavailable; using default node rendering",f),null)):Promise.resolve(null),oe=P?import(lr).then(f=>f.forceCollide??null).catch(f=>(console.error("[graph-landing] d3-force-3d collision force unavailable",f),null)):Promise.resolve(null);A.catch(()=>{});let ae;try{ae=ct(R==="graphIndex"?await fetch(q).then(f=>f.json()):await fetchData)}catch(f){throw It(n,"Graph could not load its index."),f}if(J)return;let ue=Yr(Pr(ae),{localeId:c,sourceLocale:m,prefixes:x},T),de=on(ue,k),ge=L.replace("{n}",String(ue.nodes.length)).replace("{m}",String(ue.links.length));for(let f of s)f.textContent=ge;let ie;try{ie=await A}catch(f){throw It(n,"Graph could not load. Check your network connection."),f}let[he,be,ye]=await Promise.all([ne,Me,oe]);J||(n.replaceChildren(),u=ie(n),u.width(n.clientWidth),u.height(n.clientHeight),n.__graphLanding=u,n.__graphData=de,uo(u,de,b,{use3d:P,root:e,spriteText:he,three:be,forceCollide:ye,fullData:ue,expandHops:B,layout:{freezeAfterWarmup:H,warmupTicks:U,cooldownTicks:ee,chargeTheta:C,incrementalWarmup:$},lod:{labelDistance:N,cullDistance:z,fog:X,linkResolution:Z,shareLinkResources:Y},interaction:{incrementalRepaint:te}}))}var wo="preferred-locale";document.addEventListener("click",e=>{let r=e.target;if(!(r instanceof Element))return;let o=r.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(wo,n)}catch(s){console.error("[graph-landing] failed to persist preferred-locale",s)}});document.addEventListener("nav",()=>{yo()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: var(--light);\n  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);\n  --graph-surface-strong: var(--light);\n  --graph-border: var(--lightgray);\n  --graph-text: var(--darkgray);\n  --graph-muted: var(--gray);\n  --graph-accent: var(--secondary);\n  --graph-accent-soft: var(--highlight);\n  --graph-external: var(--tertiary);\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.page:has(.graph-landing) .search {\n  position: static;\n  flex: 0 0 44px;\n  width: auto;\n}\n\n.graph-landing__chrome:has(.search-container.active) {\n  z-index: 30;\n}\n\n.page:has(.graph-landing) .search > .search-button {\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.page:has(.graph-landing) .search > .search-button p {\n  display: none;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  box-sizing: border-box;\n  display: flex;\n  gap: 2px;\n  height: 48px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__music-now {\n  background: color-mix(in srgb, var(--graph-text) 5%, transparent);\n  border: 0;\n  border-radius: 7px;\n  box-sizing: border-box;\n  display: block;\n  flex: 0 1 auto;\n  max-width: 180px;\n  min-width: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 5px 10px 5px 12px;\n  position: relative;\n  transform: translateX(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease, width 0.25s ease;\n  white-space: nowrap;\n  width: 0;\n}\n\n.graph-landing__music-now::before {\n  background: repeating-radial-gradient(circle at left center, color-mix(in srgb, var(--graph-text) 10%, transparent) 0 1px, transparent 1px 3px);\n  content: "";\n  inset: 0;\n  mask-image: linear-gradient(90deg, #000, transparent 56px);\n  pointer-events: none;\n  position: absolute;\n  -webkit-mask-image: linear-gradient(90deg, #000, transparent 56px);\n}\n\n.graph-landing__music-now[hidden] {\n  display: none;\n}\n\n.graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n  opacity: 1;\n  transform: translateX(0);\n  width: 180px;\n}\n\n.graph-landing__music-now-title,\n.graph-landing__music-now-artist {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-now-title {\n  color: var(--graph-text);\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n\n.graph-landing__music-now-artist {\n  color: var(--graph-muted);\n  font-size: 10px;\n  line-height: 1.3;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  transition: background 160ms ease;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover {\n  background: color-mix(in srgb, var(--graph-text) 7%, transparent);\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n/* A flat vinyl disc: black with hairline grooves, an accent label, no plinth. */\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.055) 2px 2.5px), radial-gradient(circle at 38% 36%, #2a2d35, #15171d 62%);\n  border: 1px solid color-mix(in srgb, var(--graph-text) 22%, transparent);\n  border-radius: 50%;\n  box-sizing: border-box;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: var(--graph-accent);\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e9ec;\n  border-radius: 50%;\n  height: 3px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 3px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: var(--graph-surface-strong);\n  height: 24px;\n  position: absolute;\n  right: 0;\n  stroke: var(--graph-muted);\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n  top: 0;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 24px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 7px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  transition: background 160ms ease, color 160ms ease;\n  width: 40px;\n}\n\n.graph-landing__music-library-toggle:hover,\n.graph-landing__music-library-toggle[aria-expanded=true] {\n  background: color-mix(in srgb, var(--graph-text) 7%, transparent);\n  color: var(--graph-text);\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--graph-text);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--graph-muted);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--graph-text) 4%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--graph-accent) 12%, transparent);\n  border-color: color-mix(in srgb, var(--graph-accent) 45%, var(--graph-border));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--graph-muted);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--graph-text);\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-muted);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-muted);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 1.5rem;\n  left: auto;\n  margin: 0;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  right: 1.5rem;\n  transform: translateY(6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(400px, 100% - 3rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.graph-landing__hint {\n  animation: graph-landing-hint-in 0.5s ease both;\n  bottom: 24px;\n  color: var(--graph-muted);\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  line-height: 1.4;\n  margin: 0;\n  max-width: calc(100% - 2rem);\n  padding: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 24px;\n  text-align: right;\n  white-space: nowrap;\n  z-index: 3;\n}\n\n.graph-landing__preview[data-visible=true] ~ .graph-landing__hint {\n  opacity: 0;\n}\n\n.graph-landing__hint[hidden] {\n  display: none;\n}\n\n@keyframes graph-landing-hint-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  :root:not([saved-theme=dark]) .graph-landing__hero::before {\n    background-position: 60% center;\n  }\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__hint {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 14px);\n    left: 16px;\n    right: 16px;\n    text-align: center;\n    white-space: normal;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n/* Hero copy (options.hero): bottom-left manifesto over the canvas. */\n.graph-landing__copy {\n  bottom: 88px;\n  left: clamp(16px, 4vw, 48px);\n  max-width: 640px;\n  pointer-events: none;\n  position: absolute;\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n  z-index: 3;\n}\n\n.graph-landing__copy > * {\n  pointer-events: auto;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__copy {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.graph-landing__eyebrow {\n  color: var(--graph-accent);\n  font-family: var(--codeFont);\n  font-size: 0.75rem;\n  letter-spacing: 0.12em;\n  margin: 0 0 0.9rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__headline {\n  color: var(--graph-text);\n  font-family: "Newsreader", "Noto Serif KR", Georgia, serif;\n  font-size: clamp(2.4rem, 6.2vw, 4.6rem);\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  line-height: 1.02;\n  margin: 0 0 1.1rem;\n  overflow-wrap: break-word;\n  text-wrap: balance;\n  word-break: keep-all;\n}\n\n.graph-landing__headline em {\n  color: var(--graph-accent);\n  font-style: italic;\n}\n\n.graph-landing__lede {\n  color: var(--graph-muted);\n  font-size: clamp(1rem, 1.5vw, 1.15rem);\n  line-height: 1.6;\n  margin: 0 0 1.4rem;\n  max-width: 48ch;\n  overflow-wrap: break-word;\n  text-wrap: pretty;\n  word-break: keep-all;\n}\n\n.graph-landing__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n\n.graph-landing__btn {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-text);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.7rem 1.15rem;\n  text-decoration: none;\n  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;\n}\n\n.graph-landing__btn:hover {\n  border-color: var(--graph-accent);\n  color: var(--graph-accent);\n}\n\n.graph-landing__btn--accent {\n  background: var(--graph-accent);\n  border-color: var(--graph-accent);\n  color: var(--light);\n}\n\n.graph-landing__btn--accent:hover {\n  background: color-mix(in srgb, var(--graph-accent) 85%, #000);\n  color: var(--light);\n}\n\n/* Push the constellation right of the copy on wide screens; fade its left edge. */\n@media (min-width: 861px) {\n  .graph-landing[data-hero] .graph-landing__canvas {\n    left: clamp(0px, 18vw, 280px);\n    -webkit-mask-image: linear-gradient(to right, transparent 0, #000 clamp(240px, 34vw, 560px));\n    mask-image: linear-gradient(to right, transparent 0, #000 clamp(240px, 34vw, 560px));\n    width: auto;\n  }\n}\n@media (max-width: 700px) {\n  .graph-landing__copy {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 16px);\n    left: 16px;\n    max-width: none;\n    right: 16px;\n  }\n  /* Fade the constellation behind the copy so labels do not collide with it. */\n  .graph-landing__copy::before {\n    background: linear-gradient(to top, var(--graph-surface-strong) 0, var(--graph-surface-strong) 70%, transparent 100%);\n    bottom: -24px;\n    content: "";\n    left: -16px;\n    position: absolute;\n    right: -16px;\n    top: -56px;\n    z-index: -1;\n  }\n  .graph-landing__headline {\n    font-size: clamp(1.8rem, 8vw, 2.4rem);\n  }\n  .graph-landing__lede {\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n    display: -webkit-box;\n    font-size: 0.95rem;\n    overflow: hidden;\n  }\n  .graph-landing[data-hero] .graph-landing__hint {\n    display: none;\n  }\n}\n:root[saved-theme=dark] .graph-landing {\n  --graph-backdrop: #090b12;\n  --graph-surface: color-mix(in srgb, #11141c 92%, transparent);\n  --graph-surface-strong: #11141c;\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-now {\n    max-width: 120px;\n  }\n  .graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {\n    width: min(120px, max(0px, 100vw - 180px));\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';

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
  function renderHeadline(title, emphasis) {
    const lines = title.split("\n");
    return lines.flatMap((line, lineIndex) => {
      const parts = [];
      if (emphasis && line.includes(emphasis)) {
        const at = line.indexOf(emphasis);
        parts.push(line.slice(0, at), /* @__PURE__ */ u2("em", { children: emphasis }), line.slice(at + emphasis.length));
      } else {
        parts.push(line);
      }
      return lineIndex < lines.length - 1 ? [...parts, /* @__PURE__ */ u2("br", {})] : parts;
    });
  }
  function heroCopyBlocks(hero, defaultLang) {
    if (!hero) return [];
    const { translations, fallbackLanguage: _fallback, ...base } = hero;
    const blocks = [{ lang: defaultLang, copy: base, hidden: false }];
    for (const [lang, copy] of Object.entries(translations ?? {})) {
      if (lang === defaultLang) continue;
      blocks.push({ lang, copy: { ...base, ...copy }, hidden: true });
    }
    return blocks;
  }
  const heroLanguageScript = `(function(){var s=document.currentScript;if(!s)return;var b=s.parentNode.querySelectorAll("[data-hero-lang]");var a=[];for(var i=0;i<b.length;i++)a.push(b[i].getAttribute("data-hero-lang"));var p=navigator.languages||[navigator.language||""];var pick=(${pickHeroLanguage.toString()})(a,p,s.getAttribute("data-hero-fallback"));if(!pick)return;for(var k=0;k<b.length;k++)b[k].hidden=b[k].getAttribute("data-hero-lang")!==pick;})();`;
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
      const heroBlocks = heroCopyBlocks(options.hero, localeId);
      return /* @__PURE__ */ u2(
        "div",
        {
          class: "graph-landing",
          "data-rail-open": "false",
          "data-hero": options.hero ? "true" : void 0,
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
                heroBlocks.map(({ lang, copy: copy2, hidden }) => /* @__PURE__ */ u2("div", { class: "graph-landing__copy", "data-hero-lang": lang, lang, hidden, children: [
                  copy2.eyebrow ? /* @__PURE__ */ u2("p", { class: "graph-landing__eyebrow", children: copy2.eyebrow }) : null,
                  copy2.title ? /* @__PURE__ */ u2("h1", { class: "graph-landing__headline", children: renderHeadline(copy2.title, copy2.titleEmphasis) }) : null,
                  copy2.lede ? /* @__PURE__ */ u2("p", { class: "graph-landing__lede", children: copy2.lede }) : null,
                  copy2.actions && copy2.actions.length > 0 ? /* @__PURE__ */ u2("div", { class: "graph-landing__actions", children: copy2.actions.map((action) => /* @__PURE__ */ u2(
                    "a",
                    {
                      class: action.accent ? "graph-landing__btn graph-landing__btn--accent" : "graph-landing__btn",
                      href: action.href,
                      children: action.label
                    }
                  )) }) : null
                ] })),
                heroBlocks.length > 1 ? /* @__PURE__ */ u2(
                  "script",
                  {
                    "data-hero-fallback": options.hero?.fallbackLanguage,
                    dangerouslySetInnerHTML: { __html: heroLanguageScript }
                  }
                ) : null,
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
                                  "aria-label": copy.labelsHide,
                                  title: copy.labelsHide,
                                  "aria-pressed": "true",
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
var graphPageMatcher = (landingSlugs) => ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  if (frontmatter?.graphLanding === true) {
    return true;
  }
  const slug = typeof fileData.slug === "string" ? fileData.slug : "";
  if (landingSlugs.includes(slug)) {
    return true;
  }
  const translationKey = frontmatter?.translationKey;
  if (translationKey === "graph" || translationKey === "home") {
    return true;
  }
  return slug === "graph" || slug.endsWith("/graph");
};
var GraphLandingPage = (userOpts) => {
  const options = userOpts ?? {};
  const instance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher(options.landingSlugs ?? []),
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