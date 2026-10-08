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
var graph_landing_inline_default = 'var dr=Object.defineProperty;var fr=(e,t,o)=>t in e?dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var Ie=(e,t,o)=>fr(e,typeof t!="symbol"?t+"":t,o);function ln(e,t,o,n){if(![e.x,e.y,e.z,t.x,t.y,t.z,o,n].every(Number.isFinite))return null;let s=t.x-e.x,d=t.y-e.y,T=t.z-e.z,L=Math.hypot(s,d,T),P={x:(e.x+t.x)/2,y:(e.y+t.y)/2,z:(e.z+t.z)/2},$=L-Math.max(0,o)-Math.max(0,n);if(L===0||$<=0)return{start:P,end:P,length:0};let k=s/L,Y=d/L,K=T/L,E=Math.max(0,o),j=Math.max(0,n);return{start:{x:e.x+k*E,y:e.y+Y*E,z:e.z+K*E},end:{x:t.x-k*j,y:t.y-Y*j,z:t.z-K*j},length:$}}function un(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function xt(e,t,o){let n=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(t)?Math.max(0,t):0,s=Number.isFinite(o)?Math.max(i,o):i;if(s===i)return i>0?.5:0;let d=Math.min(s,Math.max(i,n));return(Math.sqrt(d)-Math.sqrt(i))/(Math.sqrt(s)-Math.sqrt(i))}function dn(e,t,o){return xt(Math.max(e,t),0,o)}function nt(e,t,o){return Number.isFinite(e)?Math.min(o,Math.max(t,e)):t}function fn(e){return 1+nt(e,0,1)*1.2}function gn(e,t){let o=nt(e,0,1),n=nt(t,0,2);return Math.max(.5,1-o*.24*n)}function mn(e,t){let o=nt(e,0,1),n=nt(t,0,2);return Math.min(1.6,1+o*.3*n)}var gr=/^[A-Za-z0-9_-]{6,20}$/,mr=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),pr=new Set(["youtu.be","www.youtu.be"]);function Tt(e){return e&&gr.test(e)?e:void 0}function hr(e){if(!e)return;let t=e.trim(),o=Tt(t);if(o)return o;let n;try{n=new URL(t)}catch{return}if(!(n.protocol!=="https:"&&n.protocol!=="http:"||n.username||n.password||n.port)){if(mr.has(n.hostname)){if(n.pathname==="/watch")return Tt(n.searchParams.get("v"));let i=n.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return Tt(i[1])}if(pr.has(n.hostname)){let i=n.pathname.split("/").filter(Boolean);if(i.length===1)return Tt(i[0])}}}function pn(e){let t=[],o=new Set;for(let n of e){let i=n.title.trim(),s=hr(n.url);if(!i||!s||o.has(s))continue;o.add(s);let d=n.artist?.trim();d?t.push({title:i,artist:d,videoId:s}):t.push({title:i,videoId:s})}return t}function D(e){return typeof e=="string"?e:e.id}function Rt(e,t){return t===void 0||!Number.isFinite(t)||t<0?"full":e>=t?"dot":"full"}function hn(e,t,o,n){return t||e&&Rt(o,n)==="full"}function Et(e,t,o){let n=e.get(t);if(n)return n;let i=o();return e.set(t,i),i}function Me(e,t){let o=e?t(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function bn(e,t){if(t===void 0||!Number.isFinite(t)||t<0||t>=e.nodes.length)return e;let n=[...e.nodes].sort((d,T)=>T.degree!==d.degree?T.degree-d.degree:d.id<T.id?-1:d.id>T.id?1:0).slice(0,Math.max(0,t)),i=new Set(n.map(d=>d.id)),s=e.links.filter(d=>{let T=D(d.source),L=D(d.target);return i.has(T)&&i.has(L)});return{nodes:n,links:s}}function yn(e,t,o,n){let i=new Set,s=Math.max(0,Math.floor(n));if(s<=0)return i;let d=new Set([o]),T=new Set([o]);for(let L=0;L<s;L+=1){let P=new Set;for(let $ of T)for(let k of e.get($)??[])d.has(k)||(d.add(k),P.add(k),t.has(k)||i.add(k));T=P}return i}var br=2.399963229728653,Ft=20;function wn(e,t,o){let n=e.x??0,i=e.y??0,s=e.z??0,d=t*br;return{x:n+Ft*Math.cos(d),y:i+Ft*Math.sin(d),z:o?s+Ft*Math.sin(d*.5):s}}function kn(e,t,o,n){if(t===o)return new Set;if(t===null||o===null)return new Set(n);let i=new Set([t,o]);for(let s of e.get(t)??[])i.add(s);for(let s of e.get(o)??[])i.add(s);return i}var Ht=100/3;function vn(e){return Number.isFinite(e)?e*360/6e4:0}function Tn(e,t,o,n){if(!Number.isFinite(e)||!Number.isFinite(t))return 0;if(!(o>0)||!(n>0))return t;let i=t+(e-t)*Math.exp(-o/n);return Math.abs(i-t)<.01?t:i}function xn(e,t=4,o=17){let n=Number.isFinite(e)?Math.min(1,Math.max(0,e)):0;return t+(o-t)*n}function En(e,t=Math.random){let o=new Float32Array(Math.max(0,Math.floor(Number.isFinite(e)?e:0))),n=0;for(let i=0;i<o.length;i++){let s=(t()*2-1)*.08;n>0?(s+=(t()*2-1)*n,n=n<.02?0:n*.72):t()<15e-5&&(n=.4+t()*.6),o[i]=Math.max(-1,Math.min(1,s))}return o}var Jt="0.179.1",yr="https://esm.sh/force-graph@1.51.4",wr=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Jt}`,kr="https://esm.sh/d3-force-3d@3.0.6",vr=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Jt}`,Tr=`https://esm.sh/three@${Jt}`,xr=8,Er=10;var at=1,Kt=4,Lr=.05,Sr=.09,Mr=12,Cr=2.6,Nr=1,Ln=1,rt=.18,Zn="graph-landing:lens",Jn="graph-landing:tune",Sn="graph-landing:hint",jt="graph-landing:ambient-audio",Mn="UDVtMYqUAyw",Dt=12,Ar=1800,Cn=480,Nn=260,Ir=450,_r=1400,Pr=1e3,Gr=.3,Fr="https://www.youtube.com/iframe_api",Rr=.18,An=1.25,Hr=1.25,Dr=1.15,zr=.55,Ce={x:330,y:235,z:565},In={x:0,y:0,z:0},it=Math.hypot(Ce.x,Ce.y,Ce.z),_n=.52,Or=300/it,qr=1600/it,Pn=2.6,Vr=5.6,Gn=3.2,Fn=64,Rn=24,Hn="#f2f3f4",Dn="#f4c3d0",Br=6,Wr={wikilink:.5,tag:.4,external:.45,cooc:.3,folder:.3},Ur="#a8b0c2",zn={min:80,max:200},On={min:40,max:110},qn={min:160,max:280},Vn={min:90,max:170},Bn=220,Wn=2,$r=350,zt={min:-170,max:-320},Ot={min:96,max:156},qt={min:170,max:340};function Yr(e){return ct(e-.5,0,1)}function Mt(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Vt(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}function Kr(e){let t=[];for(let o of Object.values(e)){let n=Mt(o);if(!un(n.filePath))continue;let i=typeof n.slug=="string"?n.slug:"";if(i.length===0)continue;let s=n.multilingual,d=s&&typeof s=="object"?s:void 0;t.push({slug:i,title:typeof n.title=="string"?n.title:i,links:Vt(n.links),tags:Vt(n.tags),externalLinks:Vt(n.externalLinks),content:typeof n.excerpt=="string"?n.excerpt:typeof n.content=="string"?n.content:"",multilingual:d})}return t}function jr(e){let t=e.replace(/\\s+/g," ").trim();return t.length<=Bn?t:`${t.slice(0,Bn).trimEnd()}\\u2026`}function st(e){let t=0;for(let o of e)t=t*31+o.charCodeAt(0)>>>0;return t%628/100}function Un(e){return st(e)/(2*Math.PI)}function Lt(e,t,o){let n=st(e),i=Math.acos(2*Un(`${e}:phi`)-1),s=t+(o-t)*Un(`${e}:r`);return{x:s*Math.sin(i)*Math.cos(n),y:s*Math.sin(i)*Math.sin(n),z:s*Math.cos(i)}}function Qn(e){return e==="index"||e.endsWith("/index")}function er(e){return e==="tags"||e.startsWith("tags/")}function Xr(e){let t=e.multilingual?.translationKey;if(t==="home"||t==="graph"||t==="about"||t==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function tr(e,t){for(let o of t){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Bt(e,t){return e.multilingual?.locale?e.multilingual.locale:tr(e.slug,t).locale}function Zr(e,t){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${tr(e.slug,t).permalink}`}function Jr(e,t){let o=e.find(n=>Bt(n,t.prefixes)===t.localeId);if(o)return o;if(t.localeId===t.sourceLocale)return e.find(n=>Bt(n,t.prefixes)===t.sourceLocale)??e.find(n=>Bt(n,t.prefixes)===void 0)}function ct(e,t,o){return Math.min(o,Math.max(t,e))}function $n(e){let t=e.split("/").filter(o=>o.length>0);return t.length<2?"root":t[0]??"root"}function Qr(e){let t=e.split("/").filter(o=>o.length>0);return t[t.length-1]??""}function Qt(e){return Qr(e).trim().toLowerCase()}function eo(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function to(e){let t=e.trim();return t.length===0||eo(t)||er(t)||Qn(t)?!0:Qt(t).length===0}function no(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),t=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(t.filter(o=>o.length>0))]}function nr(e){try{let t=new URL(e,window.location.origin);return t.protocol!=="http:"&&t.protocol!=="https:"?null:(t.hash="",t.hostname=t.hostname.toLowerCase(),t.pathname!=="/"&&t.pathname.endsWith("/")&&(t.pathname=t.pathname.replace(/\\/+$/,"")),t.toString())}catch{return null}}function ro(e,t){let o=nr(e);return o===null?!1:!t.includes(new URL(o).hostname)}function Yn(e){return`external:${e}`}function oo(e,t){let o=new URL(e),n=o.hostname.replace(/^www\\./,""),i=o.pathname;return(t.get(n)??0)>1&&i.length>1?`${n}${i}`:n}function ao(e){let t=new Map,o=new Map;for(let n of e){let i=Qt(n.slug);i.length>0&&!t.has(i)&&t.set(i,n.slug);let s=n.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,n.slug);let d=s.replace(/\\s+/g,"-");d.length>0&&!o.has(d)&&o.set(d,n.slug)}return{byBasename:t,byTitle:o}}function io(e,t,o){if(t.has(e))return e;let n=Qt(e),i=o.byBasename.get(n);if(i)return i;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(n);return s||null}function so(e,t){return e.length===0?"":[...e].sort((n,i)=>(t.get(i)??0)-(t.get(n)??0))[0]??""}function co(e,t,o=void 0){let n=e.filter(u=>!Qn(u.slug)&&!er(u.slug)&&!Xr(u)),i=new Map;for(let u of n){let b=Zr(u,t.prefixes),v=i.get(b)??[];v.push(u),i.set(b,v)}let s=[];for(let u of i.values()){let b=Jr(u,t);b&&s.push(b)}let d=new Set(s.map(u=>u.slug)),T=ao(s),L=new Map,P=[],$=new Set,k=new Map,Y=u=>{L.set(u,(L.get(u)??0)+1)},K=(u,b,v)=>u<b?`${u}|${b}|${v}`:`${b}|${u}|${v}`,E=(u,b,v,_)=>{let G=K(u,b,v);return $.has(G)?!1:($.add(G),P.push({source:u,target:b,kind:v}),_&&(Y(u),Y(b)),!0)};for(let u of s)for(let b of u.links){if(to(b))continue;let v=io(b,d,T);v!==null&&v!==u.slug&&E(u.slug,v,"wikilink",!0)}let j=no(),H=new Set;for(let u of s)for(let b of u.externalLinks){let v=nr(b);v===null||!ro(v,j)||(H.add(v),E(u.slug,Yn(v),"external",!0))}let ne=new Map;for(let u of H){let b=new URL(u).hostname.replace(/^www\\./,"");ne.set(b,(ne.get(b)??0)+1)}let fe=new Set,ge=new Map;for(let u of s)for(let b of u.tags){k.set(b,(k.get(b)??0)+1);let v=`tag:${b}`;fe.add(v),E(u.slug,v,"tag",!0);let _=ge.get(b)??[];_.push(u.slug),ge.set(b,_)}if(o!==!1)for(let u of ge.values())u.length>Mr||u.forEach((b,v)=>{for(let _ of u.slice(v+1))E(b,_,"cooc",!1)});if(o!==!1){let u=o?.maxTagsPerNote,b=o?.maxEdges,v=0;e:for(let _ of s)if(!(_.tags.length<2)&&!(u!==void 0&&_.tags.length>u))for(let G=0;G<_.tags.length;G+=1)for(let F=G+1;F<_.tags.length;F+=1){if(b!==void 0&&v>=b)break e;E(`tag:${_.tags[G]}`,`tag:${_.tags[F]}`,"cooc",!1)&&(v+=1)}}let W=new Map;for(let u of s){let b=$n(u.slug);if(b==="root")continue;let v=W.get(b)??[];v.push(u.slug),W.set(b,v)}for(let u of W.values()){if(u.length<2)continue;let b=[...u].sort();for(let v=0;v<b.length;v+=1){let _=b[(v+1)%b.length],G=b[(v+Wn)%b.length],F=b[v];F===void 0||_===void 0||(F!==_&&!$.has(K(F,_,"wikilink"))&&E(F,_,"folder",!1),b.length>Wn+1&&G!==void 0&&F!==G&&!$.has(K(F,G,"wikilink"))&&E(F,G,"folder",!1))}}let I=[...L.values()],C=I.length>0?Math.min(...I):0,oe=I.length>0?Math.max(...I):0,X=u=>{let b=xt(L.get(u)??0,C,oe);return at+b*(Kt-at)},V=[...s].sort((u,b)=>(L.get(b.slug)??0)-(L.get(u.slug)??0)),z=new Set(V.filter(u=>(L.get(u.slug)??0)>0).slice(0,xr).map(u=>u.slug)),Q=s.map(u=>{let b=z.has(u.slug),v=b?Lt(u.slug,On.min,On.max):Lt(u.slug,zn.min,zn.max);return{id:u.slug,name:u.title,type:"note",val:X(u.slug),degree:L.get(u.slug)??0,isHub:b,tag:"",slug:u.slug,url:"",folder:$n(u.slug),tags:u.tags,dominantTag:so(u.tags,k),excerpt:jr(u.content),phase:st(u.slug),x:v.x,y:v.y,z:v.z}});for(let u of H){let b=Yn(u),v=Lt(b,qn.min,qn.max);Q.push({id:b,name:oo(u,ne),type:"external",val:X(b)*zr,degree:L.get(b)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:st(b),x:v.x,y:v.y,z:v.z})}for(let u of fe){let b=u.slice(4),v=Lt(u,Vn.min,Vn.max);Q.push({id:u,name:b,type:"tag",val:ct(X(u)*.7,at,Kt),degree:L.get(u)??0,isHub:!1,tag:b,slug:`tags/${b}`,url:"",folder:"tag",tags:[b],dominantTag:b,excerpt:"",phase:st(u),x:v.x,y:v.y,z:v.z})}return{nodes:Q,links:P}}function Wt(e){let t=new Map,o=(n,i)=>{let s=t.get(n)??new Set;s.add(i),t.set(n,s)};for(let n of e){if(n.kind!=="wikilink"&&n.kind!=="tag"&&n.kind!=="external")continue;let i=D(n.source),s=D(n.target);o(i,s),o(s,i)}return t}function Oe(e,t){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let n=getComputedStyle(o).color;return o.remove(),n||t}function rr(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Oe("--graph-backdrop","#ffffff"),ink:Oe("--graph-text","#0f0f0f"),accent:Oe("--graph-accent","#a52142"),tertiary:Oe("--graph-external","#c75b75"),gray:Oe("--graph-muted","#737373"),external:Oe("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function _e(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function lo(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function uo(){return lo()}function U(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Xt(e){let t=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(t&&t[1]&&t[2]&&t[3])return{r:Number(t[1]),g:Number(t[2]),b:Number(t[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let n=parseInt(o[1],16);return{r:n>>16&255,g:n>>8&255,b:n&255}}return null}function qe(e,t){let o=Xt(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${t})`:e}function fo(e,t,o){let n=Xt(e),i=Xt(t);if(!n||!i)return e;let s=(d,T)=>Math.round(d+(T-d)*o);return`rgb(${s(n.r,i.r)}, ${s(n.g,i.g)}, ${s(n.b,i.b)})`}function St(e){return e.bg}function go(e){return U()?St(e):"rgba(0, 0, 0, 0)"}function or(e,t){let o=0;for(let n of e)o=o*31+n.charCodeAt(0)>>>0;return t[o%t.length]??t[0]??e}function Kn(e,t){return e==="articles"?t.accent:e==="inbox"?t.tertiary:e==="root"?t.ink:or(e,[t.accent,t.tertiary,t.ink,t.gray])}function mo(e,t){return e.length===0?t.ink:or(e,[t.accent,t.tertiary])}function po(e){let t=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),n="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(n=o.endsWith("/")?o:`${o}/`);let i=`${n}${t}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function ho(e){let t=e.default;if(typeof t!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return t()}function Ut(e,t){e.textContent=t,e.classList.add("graph-landing__error")}async function bo(e){let o=await import(e?wr:yr);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):ho(o)}function yo(){try{let e=sessionStorage.getItem(Zn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function wo(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let t=sessionStorage.getItem(Jn);if(!t)return e;let o=Mt(JSON.parse(t)),n=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,d=typeof o.spread=="number"?o.spread:e.spread,T=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:n,edgeScale:i,zoom:s,spread:d,hubGravity:T}}catch(t){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",t),e}}function ot(e){try{sessionStorage.setItem(Jn,JSON.stringify(e))}catch(t){console.error("[graph-landing] could not persist tune",t)}}function $t(e){try{sessionStorage.setItem(Zn,e)}catch(t){console.error("[graph-landing] could not persist lens",t)}}function ko(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function vo(e,t){return e.type==="tag"?e.tag===t:e.tags.includes(t)}function To(e,t){return e.type==="note"&&e.folder===t}function jn(e,t){let o=D(t),n=e.find(i=>i.id===o);return!n||n.type!=="note"?null:n.folder}function xo(e,t,o){let n=new Map;if(t==="folder"){let i=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return i.forEach((s,d)=>{let T=Math.PI*2*d/Math.max(i.length,1),L={x:Math.cos(T)*o,y:Math.sin(T)*o,z:0};for(let P of e.nodes)P.type==="note"&&P.folder===s&&n.set(P.id,L)}),n}if(t==="tag"){let i=e.nodes.filter(d=>d.type==="tag"),s=new Map;i.forEach((d,T)=>{let L=Math.PI*2*T/Math.max(i.length,1);s.set(d.tag,{x:Math.cos(L)*o,y:Math.sin(L)*o,z:0})});for(let d of e.nodes)if(d.type==="tag"){let T=s.get(d.tag);T&&n.set(d.id,T)}else if(d.dominantTag.length>0){let T=s.get(d.dominantTag);T&&n.set(d.id,T)}}return n}function Eo(e,t){let o=[],n=i=>{let s=t*i;for(let d of o){let T=e(d);T&&(d.vx=(d.vx??0)+(T.x-(d.x??0))*s,d.vy=(d.vy??0)+(T.y-(d.y??0))*s,d.vz=(d.vz??0)+(T.z-(d.z??0))*s)}};return n.initialize=i=>{o=i},n}function Lo(e,t){let o=[],n=i=>{let s=t*i;for(let d of o)e==="y"?d.vy=(d.vy??0)-(d.y??0)*s:d.vx=(d.vx??0)-(d.x??0)*s};return n.initialize=i=>{o=i},n}function Xn(e,t,o,n){for(let i of e.querySelectorAll(t)){if(!(i instanceof HTMLElement))continue;let s=i.getAttribute(n);i.setAttribute("aria-pressed",s===o?"true":"false")}}function So(e,t,o,n){let i=Wt(t.links),s=(r,a,c)=>r<a?`${r}|${a}|${c}`:`${a}|${r}|${c}`,d=new Map(n.fullData.nodes.map(r=>[r.id,r])),T=new Map,L=new Set,P=new Set;n.fullData!==t&&(T=Wt(n.fullData.links),L=new Set(t.nodes.map(r=>r.id)),P=new Set(t.links.map(r=>s(D(r.source),D(r.target),r.kind))));let $=r=>{if(n.fullData===t)return!1;let a=yn(T,L,r,n.expandHops);if(!L.has(r)&&d.has(r)&&a.add(r),a.size===0)return!1;t.nodes=[...t.nodes],t.links=[...t.links];let c=n.layout.incrementalWarmup?d.get(r):void 0,l=0;for(let p of a){let h=d.get(p);if(h){if(c&&h.id!==c.id){let w=wn(c,l,n.use3d);h.x=w.x,h.y=w.y,h.z=w.z,h.vx=h.vy=h.vz=0,l+=1}t.nodes.push(h),L.add(p)}}for(let p of n.fullData.links){let h=D(p.source),w=D(p.target);if(!L.has(h)||!L.has(w))continue;let g=s(h,w,p.kind);P.has(g)||(P.add(g),t.links.push(p))}return i=Wt(t.links),!0},k={lens:yo(),allLabels:!0,focusTag:null,focusFolder:null},Y=null,K=null,E=wo(),j=!1,H=In,ne=it,fe=0,ge=r=>xt(r.degree,0,fe),W=()=>{e.cooldownTicks(n.layout.freezeAfterWarmup?90:n.layout.cooldownTicks??200),e.d3ReheatSimulation()},I=()=>K??Y,C=new Set(t.nodes.filter(r=>r.type==="note").sort((r,a)=>a.degree-r.degree).slice(0,Er).map(r=>r.id)),oe=r=>{let a=r.val;return r.isHub&&(a*=An),k.lens==="tag"&&r.type==="tag"&&(a*=Hr),k.focusTag&&r.id===`tag:${k.focusTag}`&&(a*=Dr),a},X=r=>{let a=I();return a===r.id?!0:a!==null?i.get(a)?.has(r.id)??!1:k.allLabels||C.has(r.id)},V=r=>{let a=Kt*An,c=ct((oe(r)-at)/(a-at),0,1);return(Pn+c*(Vr-Pn))*E.nodeScale},z=r=>{let a=I();if(a!==null)return a===r||(i.get(a)?.has(r)??!1);if(k.focusTag===null&&k.focusFolder===null)return!0;let c=t.nodes.find(l=>l.id===r);return c?k.focusFolder!==null?To(c,k.focusFolder):k.focusTag!==null&&vo(c,k.focusTag):!1},Q=r=>r.type==="external"?o.current.gray:k.lens==="tag"?r.type==="tag"?o.current.tertiary:mo(r.dominantTag,o.current):k.lens==="folder"?r.type==="tag"?o.current.tertiary:Kn(r.folder,o.current):k.lens==="hub"?r.type==="tag"?o.current.tertiary:r.isHub?o.current.accent:o.current.ink:r.type==="tag"?o.current.gray:o.current.ink,u=r=>r.isHub?o.current.accent:r.type==="tag"?o.current.gray:o.current.ink,b=(r,a)=>{let c=d.get(r)?.degree??0,l=d.get(a)?.degree??0;return Math.log1p(Math.min(c,l))/Math.log1p(Math.max(1,fe))},v=r=>{let a=I();if(a!==null&&(a===r.id||(i.get(a)?.has(r.id)??!1)))return U()?"#ffffff":o.current.accent;let c=U()?u(r):Q(r);return z(r.id)?U()?c:r.isHub?o.current.accent:c:fo(c,St(o.current),1-rt)},_=r=>V(r)*Gn*(Rn/Fn),G=r=>r==="wikilink"?.8:r==="external"?.7:r==="tag"?.62:0,F=r=>{let a=D(r.source),c=D(r.target),l=I(),p;if(r.kind==="cooc"||r.kind==="folder"){if(!(r.kind==="cooc"?k.lens!=="folder":k.lens==="folder"))return 0;p=U()?.24:.26}else{if(l!==null&&(a===l||c===l))return U()?.72:.95;let h=b(a,c);p=G(r.kind)*(.6+.4*h)}return(l!==null||k.focusTag!==null||k.focusFolder!==null)&&(!z(a)||!z(c))?p*rt:p},ae=r=>{let a=D(r.source),c=D(r.target),l=I(),p=U()?Ur:o.current.gray;return l!==null&&(a===l||c===l)?U()?Hn:o.current.accent:p},we=r=>qe(ae(r),F(r)),ie=()=>({nodes:t.nodes,links:t.links}),ee=r=>{let a=C.has(r.id)||I()===r.id?o.current.ink:o.current.gray;return z(r.id)?a:qe(a,rt)},se=r=>{if(!U()){let a=o.current.bg;return z(r.id)?qe(a,.9):qe(a,.28)}return z(r.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)"},re=()=>{let r=e.controls?.().target;if(r&&(H={x:r.x,y:r.y,z:r.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let c={x:a.x-H.x,y:a.y-H.y,z:a.z-H.z},l=Math.hypot(c.x,c.y,c.z);if(l>1)return{dir:c,len:l}}}return{dir:Ce,len:it}},Ne=r=>{if(n.use3d){if(typeof e.cameraPosition!="function")return;let a=ne/ct(E.zoom,.4,2.5),{dir:c,len:l}=re(),p=a/l;e.cameraPosition({x:H.x+c.x*p,y:H.y+c.y*p,z:H.z+c.z*p},H,_e()?0:r),ft();return}typeof e.zoom=="function"&&e.zoom(E.zoom,_e()?0:r)},te=()=>{let r=Yr(E.spread),a=zt.min+r*(zt.max-zt.min),c=Ot.min+r*(Ot.max-Ot.min),l=new Map(t.nodes.map(M=>[M.id,M.degree])),p=Math.max(0,...l.values());fe=p;let h=ge,w=M=>dn(l.get(D(M.source))??0,l.get(D(M.target))??0,p),g=e.d3Force("charge");g?.strength&&g.strength(M=>a*fn(h(M))),g?.theta&&n.layout.chargeTheta!==void 0&&g.theta(n.layout.chargeTheta);let f=e.d3Force("link");f?.distance&&f.distance(M=>{let O=gn(w(M),E.hubGravity);return k.lens==="tag"&&M.kind==="tag"?c*.72*O:M.kind==="cooc"||M.kind==="folder"?c:c*O}),f?.strength&&f.strength(M=>{if(M.kind==="cooc"||M.kind==="folder")return .015;let O=mn(w(M),E.hubGravity);if(k.lens==="tag"&&M.kind==="tag")return .3*O;if(k.lens==="folder"){let R=jn(t.nodes,M.source),de=jn(t.nodes,M.target);if(R!==null&&R===de)return .16*O}return M.kind==="tag"?.14*O:(M.kind==="external"?.16:.24)*O}),n.forceCollide&&e.d3Force("collision",n.forceCollide(M=>V(M)+Br).strength(.85).iterations(1));let y=e.d3Force("center");y?.strength&&y.strength(Lr);let A=qt.min+r*(qt.max-qt.min),q=xo(t,k.lens,A),B=k.lens==="folder"||k.lens==="tag"?.08:0;if(e.d3Force("cluster",Eo(M=>q.get(M.id)??null,B)),n.use3d){e.d3Force("flattenZ",null);let M=n.root.querySelector("#graph-landing-mount"),O=M instanceof HTMLElement?M.clientWidth>=M.clientHeight:!0;e.d3Force("squash",Lo(O?"y":"x",Sr))}},ke=new Map,ve=r=>Et(ke,"dot",()=>{let a=Fn,c=document.createElement("canvas");c.width=c.height=a;let l=c.getContext("2d");if(l){let p=Rn,h=l.createRadialGradient(32,32,0,32,32,p);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.94,"rgba(255,255,255,1)"),h.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=h,l.fillRect(0,0,a,a)}return new r.CanvasTexture(c)}),Ve=(r,a,c)=>{r.color.set(v(a))},S=new Map,ce=new Map,me=new Map,Te=new Map,pe=new Map,Be=new Map,Pe=new Map,Ae=(r,a,c)=>{let l=`${a}|${c}`;return Et(Be,l,()=>new r.CylinderGeometry(a,a,1,c))},ye=(r,a,c)=>{let l=`${a}|${c}`;return Et(Pe,l,()=>new r.MeshBasicMaterial({color:a,transparent:!0,opacity:c,depthWrite:!1,blending:U()?r.AdditiveBlending:r.NormalBlending}))},lt=getComputedStyle(n.root).getPropertyValue("--bodyFont").trim()||"Inter, system-ui, sans-serif",xe=()=>{if(!n.use3d||typeof e.nodeThreeObject!="function")return;let r=n.spriteText,a=n.three,c=n.interaction.incrementalRepaint;if(S.clear(),me.clear(),Te.clear(),c)for(let l of t.nodes)Te.set(l.id,l);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(l=>{let p=V(l),h=!1;if(a){let q=new a.SpriteMaterial({map:ve(a),color:"#ffffff",transparent:!0,depthWrite:!1,blending:a.NormalBlending,opacity:1});q.color.set(v(l)),c&&me.set(l.id,q);let B=new a.Sprite(q);B.renderOrder=11;let M=p*Gn;B.scale.x=M,B.scale.y=M,B.scale.z=1,h=B}let w=X(l);if(!r||!c&&!w)return h;let g=Array.from(l.name),f=window.innerWidth<700?24:40,y=new r(g.length>f?`${g.slice(0,f).join("")}\\u2026`:l.name);if(y.color=ee(l),y.fontFace=lt,y.backgroundColor=!1,y.fontWeight=C.has(l.id)?"500":"400",y.renderOrder=12,y.material.transparent=!0,y.material.depthWrite=!1,y.material.alphaTest=.01,y.material.toneMapped=!1,y.textHeight=C.has(l.id)?5.5:4.5,y.center.set(0,.5),y.position.x=p+3,y.position.y=0,c?(y.visible=w,S.set(l.id,{sprite:y,node:l})):n.lod.labelDistance!==void 0&&S.set(l.id,{sprite:y,node:l}),!a||h===!1)return y;let A=new a.Group;return A.add(h),A.add(y),A})},Ct=()=>{let r=n.three;if(!n.use3d||!r||typeof e.linkThreeObject!="function")return;let a=new r.Vector3(0,1,0),c=n.lod.linkResolution??5,l=n.lod.cullDistance,p=n.interaction.incrementalRepaint,h=n.lod.shareLinkResources;if(ce.clear(),pe.clear(),Be.clear(),Pe.clear(),p)for(let w of t.links){let g=D(w.source),f=D(w.target);for(let y of[g,f]){let A=pe.get(y);A?A.push(w):pe.set(y,[w])}}e.linkThreeObject(w=>{let g=Wr[w.kind]*E.edgeScale,f=h?ye(r,ae(w),F(w)):new r.MeshBasicMaterial({color:ae(w),transparent:!0,opacity:F(w),depthWrite:!1,blending:U()?r.AdditiveBlending:r.NormalBlending}),y=h?Ae(r,g,c):new r.CylinderGeometry(g,g,1,c),A=new r.Mesh(y,f);return(l!==void 0||p)&&ce.set(w,A),A}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((w,g,f)=>{let y=g.end.x-g.start.x,A=g.end.y-g.start.y,q=g.end.z-g.start.z,B=Math.sqrt(y*y+A*A+q*q);if(!U()){let M=typeof f.source=="string"?d.get(f.source):f.source,O=typeof f.target=="string"?d.get(f.target):f.target,R=M&&O?ln(g.start,g.end,_(M),_(O)):null;return R?(w.position.x=(R.start.x+R.end.x)/2,w.position.y=(R.start.y+R.end.y)/2,w.position.z=(R.start.z+R.end.z)/2,w.scale.x=1,w.scale.y=R.length,w.scale.z=1,R.length>0&&w.quaternion.setFromUnitVectors(a,new r.Vector3(R.end.x-R.start.x,R.end.y-R.start.y,R.end.z-R.start.z).normalize()),!0):(w.scale.y=0,!0)}return w.position.x=(g.start.x+g.end.x)/2,w.position.y=(g.start.y+g.end.y)/2,w.position.z=(g.start.z+g.end.z)/2,w.scale.x=1,w.scale.y=Math.max(B,.01),w.scale.z=1,w.quaternion.setFromUnitVectors(a,new r.Vector3(y,A,q).normalize()),!0})},Ge=()=>{!n.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(r=>{let a=I();if(a===null||_e()||document.hidden)return 0;let c=D(r.source),l=D(r.target);return c===a||l===a?2:0})},le=()=>{e.nodeVal(oe),e.nodeColor(v),e.linkColor(we),e.linkWidth(r=>{let a=D(r.source),c=D(r.target),l=I(),p=E.edgeScale*(U()?1:1.8);return l!==null&&(a===l||c===l)?.7*p:r.kind==="wikilink"||r.kind==="external"?.5*p:(r.kind==="tag"?.35:.25)*p}),typeof e.linkOpacity=="function"&&e.linkOpacity(Ln),Ge(),Ct(),n.use3d||e.nodeCanvasObjectMode(()=>"replace")},Nt=(r,a)=>{let c=kn(i,r,a,Te.keys()),l=new Set;for(let p of c){let h=Te.get(p);if(!h)continue;let w=me.get(p);w&&n.three&&Ve(w,h,n.three);let g=S.get(p);g&&(g.sprite.color=ee(h),g.sprite.visible=X(h));for(let f of pe.get(p)??[]){if(l.has(f))continue;l.add(f);let y=ce.get(f);y&&(n.lod.shareLinkResources&&n.three?y.material=ye(n.three,ae(f),F(f)):(y.material.color.set(ae(f)),y.material.opacity=F(f)))}}},Ee=r=>{if(n.interaction.incrementalRepaint&&n.use3d){Ge(),Nt(r,I());return}le(),n.use3d&&xe()},Le=()=>{let r=n.root.querySelector("[data-graph-legend]");if(!(r instanceof HTMLElement))return;let a=(h,w)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let f=document.createElement("span");f.className="graph-landing__dot",f.setAttribute("aria-hidden","true"),f.style.background=h;let y=document.createElement("span");return y.textContent=w,g.append(f,y),g},c=n.root.dataset.legendNotes??"Notes",l=n.root.dataset.legendTags??"Tags",p=n.root.dataset.legendLinks??"Links";r.replaceChildren(a(o.current.ink,c),a(o.current.tertiary,l),a(o.current.external,p))},We=r=>{let a=document.createElement("li"),c=document.createElement("button");c.type="button",c.className="graph-landing__tag-item",c.dataset[r.dataset.key]=r.dataset.value,c.setAttribute("aria-pressed",r.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",r.dotColor!==null){let h=document.createElement("span");h.className="graph-landing__dot",h.style.background=r.dotColor,l.append(h)}l.append(document.createTextNode(r.label));let p=document.createElement("span");return p.className="graph-landing__tag-count",p.textContent=String(r.count),c.append(l,p),a.append(c),a},ut=()=>{let r=n.root.querySelector("[data-graph-tags]");if(!(r instanceof HTMLElement))return;let a=n.root.querySelector("[data-graph-facet-label]"),c=n.root.querySelector(".graph-landing__tags");if(k.lens==="folder"){let p=n.root.dataset.folderRootLabel??"root",h=new Map;for(let g of t.nodes)g.type==="note"&&h.set(g.folder,(h.get(g.folder)??0)+1);let w=[...h.entries()].sort((g,f)=>f[1]-g[1]);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendFolders??"Folders"),c instanceof HTMLElement&&(c.hidden=w.length===0),r.replaceChildren(...w.map(([g,f])=>We({dataset:{key:"graphFolder",value:g},pressed:k.focusFolder===g,dotColor:Kn(g,o.current),label:g==="root"?p:g,count:f})));return}let l=t.nodes.filter(p=>p.type==="tag").sort((p,h)=>h.degree-p.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=n.root.dataset.legendTags??"Tags"),c instanceof HTMLElement&&(c.hidden=l.length===0),r.replaceChildren(...l.map(p=>We({dataset:{key:"graphTag",value:p.tag},pressed:k.focusTag===p.tag,dotColor:null,label:p.tag,count:p.degree})))},Se=n.root.querySelector("[data-graph-hint]"),Fe=0,Re=()=>{if(!(!(Se instanceof HTMLElement)||Se.hidden)){Se.hidden=!0,window.clearTimeout(Fe);try{sessionStorage.setItem(Sn,"1")}catch{}}},dt=()=>{if(Se instanceof HTMLElement){try{if(sessionStorage.getItem(Sn))return}catch{}Se.hidden=!1,Fe=window.setTimeout(Re,9e3)}};window.addCleanup(()=>window.clearTimeout(Fe));let He=!0,m=(r,a)=>{if(typeof e.graph2ScreenCoords!="function"||r<=0||a<=0)return _n;e.camera?.()?.updateMatrixWorld?.();let c=[],l=[];for(let y of ie().nodes){if(y.x===void 0||y.y===void 0)continue;let A=e.graph2ScreenCoords(y.x,y.y,y.z??0);c.push(Math.abs(A.x-r/2)),l.push(Math.abs(A.y-a/2))}let p=y=>y.sort((A,q)=>A-q)[Math.floor((y.length-1)*.98)]??0,h=p(c),w=p(l);if(h<1||w<1)return _n;let g=.08,f=Math.min(r*(.5-g)/h,a*(.5-g)/w);return ct(1/f,.3,1)},x=0,N=()=>{let r=n.root.querySelector("#graph-landing-mount"),a=r instanceof HTMLElement?r.clientWidth:0,c=r instanceof HTMLElement?r.clientHeight:0;if(t.nodes.length>0&&e.zoomToFit?.(0,40),t.nodes.length>1&&re().len<10&&x++<120){Z=window.requestAnimationFrame(N);return}x=0,ne=re().len*m(a,c),Ne(0),ft()},Z=0;e.onEngineStop(()=>{He&&(Z=window.requestAnimationFrame(()=>{He=!1,N(),dt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Z));let he=(r=!1)=>{e.warmupTicks(r&&n.layout.incrementalWarmup?0:n.layout.warmupTicks??(n.use3d?50:60)),e.graphData(ie()),te(),le(),xe(),Le(),ut(),Xn(n.root,"[data-graph-lens]",k.lens,"data-graph-lens"),W()},Ue=r=>{k.lens=r,r!=="tag"&&(k.focusTag=null),r!=="folder"&&(k.focusFolder=null),$t(r),he()},$e=r=>{k.focusTag=k.focusTag===r?null:r,k.focusFolder=null,k.focusTag&&(k.lens="tag",$t("tag")),he()},Ye=r=>{k.focusFolder=k.focusFolder===r?null:r,k.focusTag=null,k.focusFolder&&(k.lens="folder",$t("folder")),he()},en=()=>n.use3d?go(o.current):St(o.current),ft=()=>{if(!n.use3d||!n.lod.fog||!n.three||typeof e.scene!="function")return;let r=re().len;e.scene().fog=new n.three.Fog(St(o.current),r*Or,r*qr)};e.graphData(ie()),e.backgroundColor(en()),e.nodeLabel(()=>""),e.nodeRelSize(Cr),typeof e.nodeOpacity=="function"&&e.nodeOpacity(Nr),typeof e.linkOpacity=="function"&&e.linkOpacity(Ln),te(),le();let De=n.root.querySelector("[data-graph-preview]"),gt=n.root.querySelector("[data-graph-preview-chip]"),mt=n.root.querySelector("[data-graph-preview-title]"),pt=n.root.querySelector("[data-graph-preview-excerpt]"),ht=0;window.addCleanup(()=>window.clearTimeout(ht));let ar=r=>{if(!(De instanceof HTMLElement)||!(gt instanceof HTMLElement)||!(mt instanceof HTMLElement)||!(pt instanceof HTMLElement))return;window.clearTimeout(ht);let a=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links";if(r.type==="tag"){let p=n.root.dataset.previewTagTemplate??"{n} notes";gt.textContent=c,mt.textContent=`#${r.tag}`,pt.textContent=p.replace("{n}",String(r.degree))}else r.type==="external"?(gt.textContent=l,mt.textContent=r.name,pt.textContent=r.url):(gt.textContent=a,mt.textContent=r.name,pt.textContent=r.excerpt);De.hidden=!1,De.dataset.visible="true"},tn=()=>{De instanceof HTMLElement&&(window.clearTimeout(ht),ht=window.setTimeout(()=>{De.dataset.visible="false",De.hidden=!0},$r))};if(e.onNodeHover(r=>{let a=I();Y=r?r.id:null,K===null&&(r?ar(r):tn()),Ee(a)}),n.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let c=e.controls();c.autoRotate=!1,c.autoRotateSpeed=Rr}e.warmupTicks(n.layout.warmupTicks??50),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>U()?Hn:o.current.accent),typeof e.cameraPosition=="function"&&(e.cameraPosition(Ce,In),E.zoom!==1&&Ne(0)),xe(),ft();let r=n.lod.labelDistance,a=n.lod.cullDistance;if((r!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let c=e.cameraPosition.bind(e),l=0,p=()=>{let h=c();if(h&&typeof h.x=="number"&&typeof h.y=="number"&&typeof h.z=="number"){let w=Math.max(1,n.root.clientHeight||window.innerHeight);if(r!==void 0){let g=[];for(let f of S.values()){let y=f.node.x??0,A=f.node.y??0,q=f.node.z??0,B=Math.hypot(h.x-y,h.y-A,h.z-q);if(f.sprite.visible=hn(X(f.node),I()===f.node.id||I()===null&&(k.allLabels||C.has(f.node.id)),B,r),f.sprite.visible){let M=Array.from(f.node.name),O=window.innerWidth<700?24:40,R=M.length>O?`${M.slice(0,O).join("")}\\u2026`:f.node.name;f.sprite.text!==R&&(f.sprite.text=R);let de=e.graph2ScreenCoords?.(y,A,q);if(de&&I()===null){let lr=C.has(f.node.id),cn=Array.from(R).length*(lr?8:6)+12,vt=de.x>window.innerWidth*.6?de.x-cn:de.x,Pt=vt+cn,ur=g.some(Gt=>Math.abs(Gt.y-de.y)<22&&vt<Gt.right&&Pt>Gt.left);f.sprite.visible=!ur&&vt>=8&&Pt<=window.innerWidth-8,f.sprite.visible&&g.push({left:vt,right:Pt,y:de.y})}let tt=de!==void 0&&de.x>window.innerWidth*.6;f.sprite.center.set(tt?1:0,.5),f.sprite.position.x=(tt?-1:1)*(V(f.node)+3);let sn=Math.max(4.5,B/w*(C.has(f.node.id)?10:7.5));Math.abs(f.sprite.textHeight-sn)>.5&&(f.sprite.textHeight=sn)}}}if(a!==void 0){let g=I();for(let[f,y]of ce){let A=D(f.source),q=D(f.target);if(g!==null&&(A===g||q===g)){y.visible=!0;continue}let B=Math.hypot(h.x-y.position.x,h.y-y.position.y,h.z-y.position.z);y.visible=Rt(B,a)!=="dot"}}}l=window.requestAnimationFrame(p)};l=window.requestAnimationFrame(p),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(n.layout.warmupTicks??60),e.cooldownTicks(n.layout.freezeAfterWarmup?0:n.layout.cooldownTicks??180),e.nodeCanvasObject((r,a,c)=>{let l=V(r),p=r.x??0,h=r.y??0;if(a.save(),a.beginPath(),a.arc(p,h,l,0,Math.PI*2),a.fillStyle=v(r),a.fill(),U()&&r.isHub&&(a.strokeStyle=z(r.id)?Dn:qe(Dn,rt),a.lineWidth=1.2/c,a.stroke()),X(r)){a.globalAlpha=1;let w=11.5/c;a.font=`${w}px ${o.current.font}`,a.fillStyle=U()?z(r.id)?o.current.ink:qe(o.current.ink,rt):ee(r),a.textAlign="center",a.textBaseline="bottom";let g=h-l-6;U()||(a.strokeStyle=se(r),a.lineWidth=2.5/c,a.lineJoin="round",a.strokeText(r.name,p,g)),a.fillText(r.name,p,g)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((r,a,c)=>{let l=V(r)+8;c.beginPath(),c.arc(r.x??0,r.y??0,l,0,Math.PI*2),c.fillStyle=a,c.fill()});let Ke=n.root.querySelector("[data-graph-inspect]"),bt=n.root.querySelector("[data-graph-inspect-chip]"),yt=n.root.querySelector("[data-graph-inspect-title]"),wt=n.root.querySelector("[data-graph-inspect-excerpt]"),At=n.root.querySelector("[data-graph-inspect-tags]"),It=n.root.querySelector("[data-graph-inspect-connected]"),J=n.root.querySelector("[data-graph-inspect-open]"),ze=r=>{n.root.dataset.railOpen=r?"true":"false";let a=n.root.querySelector("[data-graph-rail-toggle]"),c=n.root.querySelector("[data-graph-rail-scrim]"),l=n.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",r?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",r?"false":"true"),c instanceof HTMLElement&&(c.hidden=!r)},be=()=>{let a=!_e()&&!document.hidden&&!j;typeof e.controls=="function"&&(e.controls().autoRotate=a),Ge()},nn=window.matchMedia("(prefers-reduced-motion: reduce)");nn.addEventListener("change",be),document.addEventListener("visibilitychange",be),window.addCleanup(()=>{nn.removeEventListener("change",be),document.removeEventListener("visibilitychange",be)}),be();let ir=r=>{let a=i.get(r.id)??new Set,c=[];for(let l of a){let p=t.nodes.find(h=>h.id===l);p&&c.push(p)}return c.sort((l,p)=>p.degree-l.degree)},sr=r=>{if(!(Ke instanceof HTMLElement)||!(bt instanceof HTMLElement)||!(yt instanceof HTMLElement)||!(wt instanceof HTMLElement)||!(At instanceof HTMLElement)||!(It instanceof HTMLElement))return;let a=n.root.dataset.legendNotes??"Notes",c=n.root.dataset.legendTags??"Tags",l=n.root.dataset.legendLinks??"Links",p=n.root.dataset.inspectEmpty??"No direct connections";r.type==="tag"?(bt.textContent=c,yt.textContent=`#${r.tag}`,wt.textContent=(n.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(r.degree))):r.type==="external"?(bt.textContent=l,yt.textContent=r.name,wt.textContent=r.url):(bt.textContent=a,yt.textContent=r.name,wt.textContent=r.excerpt);let h=r.tags.map(g=>{let f=document.createElement("li");return f.textContent=g,f});At.replaceChildren(...h),At.hidden=h.length===0;let w=ir(r).slice(0,12);if(w.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=p,It.replaceChildren(g)}else It.replaceChildren(...w.map(g=>{let f=document.createElement("li"),y=document.createElement("button");y.type="button",y.className="graph-landing__inspect-link",y.dataset.graphInspectId=g.id;let A=g.type==="tag"?c:g.type==="external"?l:a,q=document.createElement("span");q.textContent=A;let B=document.createElement("strong");return B.textContent=g.type==="tag"?`#${g.tag}`:g.name,y.append(q,B),f.append(y),f}));J instanceof HTMLAnchorElement&&(r.type==="note"&&r.slug.length>0?(J.hidden=!1,J.href=po(r.slug).toString(),J.textContent=n.root.dataset.inspectRead??"Read note",J.removeAttribute("target"),J.removeAttribute("rel")):r.type==="external"&&r.url.length>0?(J.hidden=!1,J.href=r.url,J.textContent=n.root.dataset.inspectOpenExternal??"Open",J.target="_blank",J.rel="noopener noreferrer"):(J.hidden=!0,J.removeAttribute("href"),J.removeAttribute("target"),J.removeAttribute("rel"))),Ke.hidden=!1,n.root.dataset.inspecting="true",ze(!1),tn()},je=()=>{let r=I();if(K=null,Ke instanceof HTMLElement){let a=Ke.contains(document.activeElement);Ke.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}n.root.dataset.inspecting="false",Y=null,be(),Ee(r)},cr=r=>{let a=I();K=r.id,be(),sr(r),Ee(a)},_t=(r,a=!1)=>{if(Re(),$(r.id)&&he(!0),cr(r),a){H={x:r.x??0,y:r.y??0,z:r.z??0};let c=_e()?0:450;n.use3d&&e.cameraPosition?(ne=it,e.cameraPosition({x:H.x+Ce.x/E.zoom,y:H.y+Ce.y/E.zoom,z:H.z+Ce.z/E.zoom},H,c)):e.centerAt?.(H.x,H.y,c)}},kt=!1;e.onNodeClick((r,a)=>{r&&(kt=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),_t(r))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{je(),ze(!1)});let ue=n.root.querySelector("#graph-landing-mount");if(ue instanceof HTMLElement){let r=new ResizeObserver(()=>{e.width(ue.clientWidth),e.height(ue.clientHeight),K===null&&!He&&N()});r.observe(ue),window.addCleanup(()=>r.disconnect());let a=null,c=0,l=g=>{Re(),a={x:g.clientX,y:g.clientY},kt=!1,j=!0,be()},p=(g,f)=>{if(typeof e.graph2ScreenCoords!="function")return null;let y=ue.getBoundingClientRect(),A=g-y.left,q=f-y.top,B=null,M=484;for(let O of ie().nodes){if(O.x===void 0||O.y===void 0)continue;let R=e.graph2ScreenCoords(O.x,O.y,O.z??0),tt=(R.x-A)**2+(R.y-q)**2;tt<M&&(M=tt,B=O)}return B},h=g=>{let f=a;a=null,j=!1,be(),!(!f||(g.clientX-f.x)**2+(g.clientY-f.y)**2>25)&&(window.clearTimeout(c),c=window.setTimeout(()=>{if(kt){kt=!1;return}let A=p(g.clientX,g.clientY);A?_t(A):je()},0))},w=()=>{a=null,j=!1,be()};ue.addEventListener("pointerdown",l,!0),ue.addEventListener("pointerup",h,!0),ue.addEventListener("pointercancel",w,!0),window.addCleanup(()=>{window.clearTimeout(c),ue.removeEventListener("pointerdown",l,!0),ue.removeEventListener("pointerup",h,!0),ue.removeEventListener("pointercancel",w,!0)})}Xn(n.root,"[data-graph-lens]",k.lens,"data-graph-lens"),Le(),ut(),k.lens!=="all"&&he(),n.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let rn=()=>{o.current=rr(),e.backgroundColor(en()),ft(),le(),xe(),Le()};document.addEventListener("themechange",rn),window.addCleanup(()=>document.removeEventListener("themechange",rn));let on=r=>{let a=r.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){je();return}if(a.closest("[data-graph-rail-toggle]")){let f=n.root.dataset.railOpen!=="true";f&&je(),ze(f);return}if(a.closest("[data-graph-rail-scrim]")){ze(!1);return}let c=a.closest("[data-graph-inspect-id]");if(c instanceof HTMLElement&&c.dataset.graphInspectId){let f=n.fullData.nodes.find(y=>y.id===c.dataset.graphInspectId);f&&_t(f,!0);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&ko(l.dataset.graphLens)){Ue(l.dataset.graphLens);return}let p=a.closest("[data-graph-tag]");if(p instanceof HTMLElement&&p.dataset.graphTag){$e(p.dataset.graphTag);return}let h=a.closest("[data-graph-folder]");if(h instanceof HTMLElement&&h.dataset.graphFolder){Ye(h.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){W();return}let w=a.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){k.allLabels=!k.allLabels,w.setAttribute("aria-pressed",k.allLabels?"true":"false");let f=w.dataset.labelShow??"Labels",y=w.dataset.labelHide??"Labels",A=k.allLabels?y:f;w.title=A,w.setAttribute("aria-label",A),xe();return}if(a.closest("[data-graph-theme]")){let f=U()?"light":"dark";document.documentElement.setAttribute("saved-theme",f),localStorage.setItem("theme",f),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${f}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:f}}));return}let g=a.closest("[data-graph-tags-toggle]");if(g instanceof HTMLButtonElement){let f=n.root.querySelector(".graph-landing__tags");if(f instanceof HTMLElement){let y=f.dataset.open==="true";f.dataset.open=y?"false":"true",g.setAttribute("aria-expanded",y?"false":"true")}}},Xe=n.root.querySelector("[data-graph-node-scale]"),Ze=n.root.querySelector("[data-graph-edge-scale]");if(Xe instanceof HTMLInputElement){Xe.value=String(Math.round(E.nodeScale*100));let r=()=>{E.nodeScale=Number(Xe.value)/100,ot(E),te(),W(),le(),n.use3d&&xe()};Xe.addEventListener("input",r),window.addCleanup(()=>Xe.removeEventListener("input",r))}if(Ze instanceof HTMLInputElement){Ze.value=String(Math.round(E.edgeScale*100));let r=()=>{E.edgeScale=Number(Ze.value)/100,ot(E),le()};Ze.addEventListener("input",r),window.addCleanup(()=>Ze.removeEventListener("input",r))}let Je=n.root.querySelector("[data-graph-hub-gravity]");if(Je instanceof HTMLInputElement){Je.value=String(Math.round(E.hubGravity*100));let r=()=>{let a=Number(Je.value)/100;E.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,ot(E),te(),W()};Je.addEventListener("input",r),window.addCleanup(()=>Je.removeEventListener("input",r))}let Qe=n.root.querySelector("[data-graph-zoom]");if(Qe instanceof HTMLInputElement){Qe.value=String(Math.round(E.zoom*100));let r=()=>{E.zoom=Number(Qe.value)/100,ot(E),Ne(200)};Qe.addEventListener("input",r),window.addCleanup(()=>Qe.removeEventListener("input",r))}let et=n.root.querySelector("[data-graph-spread]");if(et instanceof HTMLInputElement){et.value=String(Math.round(E.spread*100));let r=()=>{E.spread=Number(et.value)/100,ot(E),te(),W()};et.addEventListener("input",r),window.addCleanup(()=>et.removeEventListener("input",r))}ze(!1),n.root.addEventListener("click",on),window.addCleanup(()=>n.root.removeEventListener("click",on));let an=r=>{if(r.key==="Escape"){if(n.root.dataset.railOpen==="true"){ze(!1);return}je()}};window.addEventListener("keydown",an),window.addCleanup(()=>window.removeEventListener("keydown",an))}function Mo(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function Co(){try{return window.localStorage.getItem(jt)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Yt(e){try{if(e){window.localStorage.setItem(jt,"stopped");return}window.localStorage.removeItem(jt)}catch(t){console.error("[graph-landing] could not persist ambient audio preference",t)}}function No(e){let t=performance.now(),o=0,n=i=>{let s=Math.min(1,(i-t)/e.durationMs),d=s*s;e.apply(e.from+(e.to-e.from)*d),s<1&&(o=window.requestAnimationFrame(n))};return o=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(o)}}function Ao(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((t,o)=>{let n=window,i=n.onYouTubeIframeAPIReady;if(n.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let s=n.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}t(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=Fr,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function Io(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:t=>{e.onReady(t.target)},onStateChange:t=>{t.data===e.api.PlayerState.ENDED&&e.onEnded(t.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}var Zt=class{constructor(t){Ie(this,"level",t);Ie(this,"context",null);Ie(this,"master",null);Ie(this,"crackleGain",null);Ie(this,"crackleSource",null);Ie(this,"crackleBuffer",null)}ensureContext(){if(this.context)return this.context.state==="suspended"&&this.context.resume(),this.context;let t=window.AudioContext??window.webkitAudioContext;if(!t)return null;try{this.context=new t}catch(o){return console.error("[graph-landing] vinyl effects unavailable",o),null}return this.master=this.context.createGain(),this.master.gain.value=this.level,this.master.connect(this.context.destination),this.context}burst(t){let o=this.ensureContext();if(!o||!this.master)return;let n=Math.max(1,Math.round(o.sampleRate*t.durationS)),i=o.createBuffer(1,n,o.sampleRate),s=i.getChannelData(0);for(let P=0;P<n;P++)s[P]=(Math.random()*2-1)*Math.exp(-6*P/n);let d=o.createBufferSource();d.buffer=i;let T=o.createBiquadFilter();T.type=t.filter,T.frequency.value=t.frequency;let L=o.createGain();L.gain.value=t.peak,d.connect(T),T.connect(L),L.connect(this.master),d.start(),d.onended=()=>{d.disconnect(),T.disconnect(),L.disconnect()}}needleDrop(){this.burst({durationS:.22,filter:"lowpass",frequency:160,peak:.9}),this.burst({durationS:.035,filter:"bandpass",frequency:2200,peak:.45})}needleLift(){this.burst({durationS:.025,filter:"bandpass",frequency:3e3,peak:.3}),this.burst({durationS:.12,filter:"lowpass",frequency:200,peak:.35})}setCrackle(t){let o=this.ensureContext();if(!o||!this.master)return;if(!t){if(this.crackleGain&&this.crackleSource){let d=this.crackleGain,T=this.crackleSource;d.gain.cancelScheduledValues(o.currentTime),d.gain.setValueAtTime(d.gain.value,o.currentTime),d.gain.linearRampToValueAtTime(0,o.currentTime+.4),T.stop(o.currentTime+.45),T.onended=()=>{T.disconnect(),d.disconnect()}}this.crackleSource=null,this.crackleGain=null;return}if(this.crackleSource)return;if(!this.crackleBuffer){let T=En(o.sampleRate*4);this.crackleBuffer=o.createBuffer(1,T.length,o.sampleRate),this.crackleBuffer.getChannelData(0).set(T)}let n=o.createBufferSource();n.buffer=this.crackleBuffer,n.loop=!0;let i=o.createBiquadFilter();i.type="bandpass",i.frequency.value=1800,i.Q.value=.7;let s=o.createGain();s.gain.value=0,s.gain.linearRampToValueAtTime(.25,o.currentTime+.8),n.connect(i),i.connect(s),s.connect(this.master),n.start(),this.crackleSource=n,this.crackleGain=s}close(){this.setCrackle(!1),this.context&&(this.context.close(),this.context=null,this.master=null)}};function _o(e){let t=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),n=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),s=e.querySelector("[data-graph-music-track-list]"),d=e.querySelector("[data-graph-music-status]"),T=e.querySelector("[data-graph-music-dock]"),L=e.querySelector("[data-graph-music-now]"),P=e.querySelector("[data-graph-music-now-title]"),$=e.querySelector("[data-graph-music-now-artist]"),k=e.querySelector("[data-graph-deck-title]"),Y=e.querySelector("[data-graph-deck-artist]"),K=Array.from(e.querySelectorAll("[data-graph-record]"));if(!(t instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(s instanceof HTMLElement)||!(d instanceof HTMLElement))return;let E=e.dataset.audioStop??"Stop music",j=e.dataset.audioPlay??"Play music",H=e.dataset.musicLibraryOpen??"Open record collection",ne=e.dataset.musicLibraryClose??"Close record collection",fe=e.dataset.musicCurrentTrack??"Current track",ge=[];try{let m=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(m))for(let x of m){if(!x||typeof x!="object")continue;let N=x;typeof N.title!="string"||typeof N.url!="string"||N.artist!==void 0&&typeof N.artist!="string"||ge.push({title:N.title,...typeof N.artist=="string"?{artist:N.artist}:{},url:N.url})}}catch{}let W=pn(ge);W.length===0&&W.push({title:"Ambient track",videoId:Mn});let I=0,C=null,oe=!1,X=null,V=!Co(),z=!1,Q=!1,u=e.dataset.graphMusicVinylFx==="false"?null:new Zt(Gr),b=0,v=0,_=0,G=0,F=0,ae=m=>{let x=v?Math.min(100,m-v):16;v=m,G=Tn(G,F,x,F>0?Ir:_r),_=(_+vn(G)*x)%360;for(let N of K)N.style.transform=`rotate(${_.toFixed(2)}deg)`;if(G>0||F>0){b=window.requestAnimationFrame(ae);return}b=0,v=0},we=m=>{if(F=m,e.dataset.graphPlatter=m>0?"on":"off",_e()){G=0;return}b||(b=window.requestAnimationFrame(ae))},ie=0,ee=m=>{e.dataset.graphArm=m},se=m=>{e.style.setProperty("--graph-arm-angle",`${xn(m).toFixed(2)}deg`)},re=()=>{ie&&(window.clearInterval(ie),ie=0)},Ne=()=>{re(),se(0),ie=window.setInterval(()=>{if(!C||!z)return;let m=C.getDuration?.()??0,x=C.getCurrentTime?.()??0;m>0&&se(x/m)},Pr)},te=0,ke=new Set,ve=(m,x)=>new Promise(N=>{let Z=window.setTimeout(()=>{ke.delete(Z),N(x===te)},_e()?0:m);ke.add(Z)}),Ve=()=>{for(let m of ke)window.clearTimeout(m);ke.clear()},S=()=>W[I]??W[0]??{title:"Ambient track",videoId:Mn},ce=m=>{e.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${m}/hqdefault.jpg")`)},me=()=>S().videoId,Te=()=>{s.replaceChildren(),W.forEach((m,x)=>{let N=document.createElement("button");N.type="button",N.className="graph-landing__music-track",N.dataset.graphMusicTrackIndex=String(x),N.setAttribute("aria-current",x===I?"true":"false");let Z=document.createElement("img");Z.className="graph-landing__music-track-cover",Z.src=`https://i.ytimg.com/vi/${m.videoId}/hqdefault.jpg`,Z.alt="",Z.loading="lazy";let he=document.createElement("span");he.className="graph-landing__music-track-copy";let Ue=document.createElement("span");if(Ue.className="graph-landing__music-track-title",Ue.textContent=m.title,he.appendChild(Ue),m.artist){let Ye=document.createElement("span");Ye.className="graph-landing__music-track-artist",Ye.textContent=m.artist,he.appendChild(Ye)}let $e=document.createElement("span");$e.className="graph-landing__music-track-sleeve",$e.appendChild(Z),N.append($e,he),s.appendChild(N)}),d.textContent=`${fe}: ${S().title}`,Be()},pe=m=>{e.dataset.musicLibraryOpen=m?"true":"false",i.hidden=!m,i.setAttribute("aria-hidden",m?"false":"true"),n.setAttribute("aria-expanded",m?"true":"false"),n.setAttribute("aria-label",m?ne:H),n.title=m?ne:H},Be=()=>{let m=t.dataset.playing==="true";T&&(T.dataset.playing=m?"true":"false"),L&&(L.hidden=!m);let x=S();P&&(P.textContent=x.title),$&&($.textContent=x.artist??"",$.hidden=!x.artist),k&&(k.textContent=x.title),Y&&(Y.textContent=x.artist??"",Y.hidden=!x.artist)},Pe=m=>{t.setAttribute("aria-pressed",m?"true":"false"),t.setAttribute("aria-label",m?E:j),t.title=m?E:j,t.dataset.playing=m?"true":"false",Be()},Ae=()=>{X&&(X(),X=null)},ye=m=>{C&&C.setVolume(Math.max(0,Math.min(Dt,m)))},lt=async(m,x)=>{ee("play"),u?.needleDrop(),await ve(Nn,x)&&(m.unMute(),ye(0),m.playVideo(),u?.setCrackle(!0),Ne(),Ae(),X=No({from:0,to:Dt,durationMs:Ar,apply:ye}))},xe=async m=>{let x=++te;we(Ht),ee("cue"),se(0),await ve(Cn,x)&&await lt(m,x)},Ct=async()=>{let m=++te;Ae(),re(),u?.setCrackle(!1),e.dataset.graphArm==="play"&&u?.needleLift(),ee("cue"),we(0),await ve(Nn,m)&&ee("rest")},Ge=async(m,x)=>{let N=++te;Ae(),re(),u?.setCrackle(!1),u?.needleLift(),m.mute(),ee("cue"),we(Ht),await ve(Cn,N)&&(m.loadVideoById(x),m.mute(),await lt(m,N))},le=m=>{!V||z||(z=!0,Pe(!0),xe(m))},Nt=()=>{V=!1,z=!1,Yt(!0),Ct(),C&&(C.mute(),C.pauseVideo(),ye(0)),Pe(!1)},Ee=async()=>{if(!C)try{let m=await Ao();if(C)return;C=Io({api:m,host:o,videoId:me(),onReady:x=>{oe=!0,x.mute(),ye(0),x.playVideo(),V&&Q&&le(x)},onEnded:x=>{if(!V)return;I=(I+1)%W.length;let N=me();if(ce(N),Te(),z){Ge(x,N);return}x.loadVideoById(N),x.mute(),ye(0)}})}catch(m){console.error("[graph-landing] ambient audio unavailable",m)}},Le=m=>{let x=m.target;if(!(x instanceof Element&&x.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!V||z||Mo())){if(Q=!0,oe&&C){le(C);return}Ee()}},We=()=>{if(V&&z){Nt();return}if(Q=!0,V=!0,Yt(!1),oe&&C){le(C);return}Ee()},ut=m=>{if(!(!Number.isInteger(m)||m<0||m>=W.length)){if(I=m,ce(me()),Te(),pe(!1),V=!0,Q=!0,Yt(!1),oe&&C){z?Ge(C,me()):(C.loadVideoById(me()),C.mute(),le(C));return}Ee()}},Se=()=>{let m=e.dataset.musicLibraryOpen!=="true";if(m){e.dataset.railOpen="false";let x=e.querySelector("[data-graph-rail-toggle]"),N=e.querySelector("#graph-landing-rail"),Z=e.querySelector("[data-graph-rail-scrim]");x instanceof HTMLButtonElement&&x.setAttribute("aria-expanded","false"),N instanceof HTMLElement&&N.setAttribute("aria-hidden","true"),Z instanceof HTMLElement&&(Z.hidden=!0)}pe(m)},Fe=m=>{let x=m.target;if(!(x instanceof Element))return;let N=x.closest("[data-graph-music-track-index]");N instanceof HTMLButtonElement&&ut(Number(N.dataset.graphMusicTrackIndex))},Re=m=>{if(e.dataset.musicLibraryOpen!=="true")return;let x=m.target;(!(x instanceof Element)||!x.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&pe(!1)},dt=m=>{m.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(pe(!1),m.stopImmediatePropagation())},He=()=>{if(C){if(document.hidden){Ae(),C.pauseVideo();return}V&&z&&(C.playVideo(),ye(Dt))}};ce(me()),ee("rest"),se(0),we(0),Pe(!1),Te(),pe(!1),Ee(),t.addEventListener("click",We),n.addEventListener("click",Se),s.addEventListener("click",Fe),e.addEventListener("click",Re),e.addEventListener("pointerdown",Le,!0),e.addEventListener("touchstart",Le,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",He),window.addEventListener("keydown",dt),window.addCleanup(()=>{t.removeEventListener("click",We),n.removeEventListener("click",Se),s.removeEventListener("click",Fe),e.removeEventListener("click",Re),e.removeEventListener("pointerdown",Le,!0),e.removeEventListener("touchstart",Le,!0),document.removeEventListener("visibilitychange",He),window.removeEventListener("keydown",dt),Ae(),re(),Ve(),b&&(window.cancelAnimationFrame(b),b=0),u?.close(),C&&(C.pauseVideo(),C.destroy(),C=null)})}async function Po(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let t=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(t instanceof HTMLElement&&o instanceof HTMLElement){let S=t.parentElement,ce=t.nextSibling;o.insertBefore(t,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{S?.isConnected&&t.isConnected&&S.insertBefore(t,ce?.parentNode===S?ce:null)})}_o(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let i=e.querySelectorAll("[data-graph-counts]"),s=e.dataset.locale??e.dataset.graphDefaultLocale??"en",d=e.dataset.sourceLocale??s,T=(e.dataset.localePrefixes??"").split(",").map(S=>S.trim()).filter(S=>S.length>0),L=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",P=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",$=e.dataset.graphIndexPath??"",k=Me(e.dataset.maxRenderedNodes,S=>Number.parseInt(S,10)),Y=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,K=Number.isFinite(Y)?Y:1,E=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,j=e.dataset.graphRenderMode==="3d"?"3d":"auto",H=e.dataset.graphLayoutFreezeAfterWarmup==="true",ne=Me(e.dataset.graphLayoutWarmupTicks,S=>Number.parseInt(S,10)),fe=Me(e.dataset.graphLayoutCooldownTicks,S=>Number.parseInt(S,10)),ge=Me(e.dataset.graphLayoutChargeTheta,Number.parseFloat),W=e.dataset.graphLayoutIncrementalWarmup==="true",I=Me(e.dataset.graphLodLabelDistance,Number.parseFloat),C=Me(e.dataset.graphLodCullDistance,Number.parseFloat),oe=e.dataset.graphLodFog==="true",X=Me(e.dataset.graphLodLinkResolution,S=>Number.parseInt(S,10)),V=e.dataset.graphInteractionIncrementalRepaint==="true",z=e.dataset.graphLodShareLinkResources==="true",Q=!1,u=null,b={current:rr()},v=()=>{Q=!0,u&&(u._destructor(),u=null),delete e.dataset.graphReady};window.addCleanup(v);let _=uo();if(j==="3d"&&!_){Ut(n,"3D graph unavailable: WebGL is required.");return}let G=j==="3d"||_,F=bo(G),ae=G?import(vr).then(S=>S.default??null).catch(S=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",S),null)):Promise.resolve(null),we=G?import(Tr).catch(S=>(console.error("[graph-landing] three unavailable; using default node rendering",S),null)):Promise.resolve(null),ie=G?import(kr).then(S=>S.forceCollide??null).catch(S=>(console.error("[graph-landing] d3-force-3d collision force unavailable",S),null)):Promise.resolve(null);F.catch(()=>{});let ee;try{ee=Mt(P==="graphIndex"?await fetch($).then(S=>S.json()):await fetchData)}catch(S){throw Ut(n,"Graph could not load its index."),S}if(Q)return;let se=co(Kr(ee),{localeId:s,sourceLocale:d,prefixes:T},E),re=bn(se,k),Ne=L.replace("{n}",String(se.nodes.length)).replace("{m}",String(se.links.length));for(let S of i)S.textContent=Ne;let te;try{te=await F}catch(S){throw Ut(n,"Graph could not load. Check your network connection."),S}let[ke,ve,Ve]=await Promise.all([ae,we,ie]);Q||(n.replaceChildren(),u=te(n),u.width(n.clientWidth),u.height(n.clientHeight),n.__graphLanding=u,n.__graphData=re,So(u,re,b,{use3d:G,root:e,spriteText:ke,three:ve,forceCollide:Ve,fullData:se,expandHops:K,layout:{freezeAfterWarmup:H,warmupTicks:ne,cooldownTicks:fe,chargeTheta:ge,incrementalWarmup:W},lod:{labelDistance:I,cullDistance:C,fog:oe,linkResolution:X,shareLinkResources:z},interaction:{incrementalRepaint:V}}))}var Go="preferred-locale";document.addEventListener("click",e=>{let t=e.target;if(!(t instanceof Element))return;let o=t.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let n=o.dataset.preferredLocale;if(n)try{localStorage.setItem(Go,n)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{Po()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = `html:has(.graph-landing),
body:has(.graph-landing) {
  height: 100dvh;
  overflow: hidden;
}

.page:has(.graph-landing) > #quartz-body {
  row-gap: 0;
}

.page:has(.graph-landing) footer,
.page:has(.graph-landing) header,
.page:has(.graph-landing) .left,
.page:has(.graph-landing) .right,
.page:has(.graph-landing) .sidebar {
  display: none;
}

.center.minimal:has(.graph-landing) {
  max-width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
}

.graph-landing {
  --graph-backdrop: var(--light);
  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);
  --graph-surface-strong: var(--light);
  --graph-border: var(--lightgray);
  --graph-text: var(--darkgray);
  --graph-muted: var(--gray);
  --graph-accent: var(--secondary);
  --graph-accent-soft: var(--highlight);
  --graph-external: var(--tertiary);
  background: var(--graph-backdrop);
  color: var(--graph-text);
  font-family: var(--bodyFont);
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
}

/* Pinned to the viewport so host wrappers (page padding, header rows)
   can never crop the canvas. */
.graph-landing__hero {
  background: var(--graph-backdrop);
  height: 100svh;
  height: 100dvh;
  inset: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.graph-landing__canvas {
  height: 100%;
  inset: 0;
  position: absolute;
  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */
  touch-action: none;
  width: 100%;
  z-index: 1;
}

.graph-landing__canvas canvas {
  display: block;
  height: 100% !important;
  width: 100% !important;
}

.graph-landing__overlay {
  height: 100%;
  inset: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.graph-landing__rail {
  backdrop-filter: blur(16px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 14px;
  bottom: 74px;
  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 16px;
  max-height: calc(100dvh - 140px);
  max-width: 248px;
  opacity: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 14px 14px 12px;
  pointer-events: none;
  position: absolute;
  top: auto;
  touch-action: pan-y;
  transform: translateY(10px);
  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
  visibility: hidden;
  width: 248px;
  z-index: 4;
}

.graph-landing[data-rail-open=true] .graph-landing__rail {
  opacity: 1;
  pointer-events: auto;
  transform: none;
  visibility: visible;
}

.graph-landing__rail > * {
  flex-shrink: 0;
}

.graph-landing__chrome {
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  left: 0;
  padding: 1.25rem 1.5rem;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
}

.page:has(.graph-landing) .search {
  position: static;
  flex: 0 0 44px;
  width: auto;
}

.graph-landing__chrome:has(.search-container.active) {
  z-index: 30;
}

.page:has(.graph-landing) .search > .search-button {
  width: 44px;
  height: 44px;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: 0;
}

.page:has(.graph-landing) .search > .search-button p {
  display: none;
}

.graph-landing__title-block--chrome {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  pointer-events: auto;
}

.graph-landing__scrim {
  display: none;
}

.graph-landing__rail-toggle {
  align-items: center;
  backdrop-filter: blur(10px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 10px;
  bottom: 16px;
  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);
  color: var(--graph-text);
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  left: 16px;
  pointer-events: auto;
  position: absolute;
  width: 48px;
  z-index: 5;
}

.graph-landing__rail-toggle:focus-visible,
.graph-landing__audio-toggle:focus-visible,
.graph-landing__music-library-toggle:focus-visible,
.graph-landing__music-track:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__music-dock {
  align-items: center;
  backdrop-filter: blur(10px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 10px;
  bottom: 16px;
  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);
  box-sizing: border-box;
  display: flex;
  gap: 2px;
  height: 48px;
  left: 72px;
  padding: 3px;
  pointer-events: auto;
  position: absolute;
  z-index: 5;
}

.graph-landing__music-now {
  background: color-mix(in srgb, var(--graph-text) 5%, transparent);
  border: 0;
  border-radius: 7px;
  box-sizing: border-box;
  display: block;
  flex: 0 1 auto;
  max-width: 180px;
  min-width: 0;
  opacity: 0;
  overflow: hidden;
  padding: 5px 10px 5px 12px;
  position: relative;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease, width 0.25s ease;
  white-space: nowrap;
  width: 0;
}

.graph-landing__music-now::before {
  background: repeating-radial-gradient(circle at left center, color-mix(in srgb, var(--graph-text) 10%, transparent) 0 1px, transparent 1px 3px);
  content: "";
  inset: 0;
  mask-image: linear-gradient(90deg, #000, transparent 56px);
  pointer-events: none;
  position: absolute;
  -webkit-mask-image: linear-gradient(90deg, #000, transparent 56px);
}

.graph-landing__music-now[hidden] {
  display: none;
}

.graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {
  opacity: 1;
  transform: translateX(0);
  width: 180px;
}

.graph-landing__music-now-title,
.graph-landing__music-now-artist {
  display: block;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.graph-landing__music-now-title {
  color: var(--graph-text);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.graph-landing__music-now-artist {
  color: var(--graph-muted);
  font-size: 10px;
  line-height: 1.3;
}

.graph-landing__audio-toggle {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  padding: 0;
  transition: background 160ms ease;
  width: 40px;
}

.graph-landing__audio-toggle:hover {
  background: color-mix(in srgb, var(--graph-text) 7%, transparent);
}

.graph-landing__audio-toggle:hover .graph-landing__turntable {
  transform: translateY(-1px);
}

.graph-landing__audio-toggle:active .graph-landing__turntable {
  transform: scale(0.96);
}

.graph-landing__turntable {
  display: block;
  height: 38px;
  position: relative;
  transition: transform 160ms ease;
  width: 38px;
}

.graph-landing__turntable-plinth {
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
}

/* A flat vinyl disc: black with hairline grooves, an accent label, no plinth. */
.graph-landing__turntable-record {
  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.055) 2px 2.5px), radial-gradient(circle at 38% 36%, #2a2d35, #15171d 62%);
  border: 1px solid color-mix(in srgb, var(--graph-text) 22%, transparent);
  border-radius: 50%;
  box-sizing: border-box;
  height: 30px;
  left: 3px;
  position: absolute;
  top: 4px;
  width: 30px;
}

.graph-landing__turntable-label {
  background-color: var(--graph-accent);
  background-image: var(--graph-music-artwork);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  inset: 9px;
  position: absolute;
}

.graph-landing__turntable-spindle {
  background: #e9e9ec;
  border-radius: 50%;
  height: 3px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3px;
}

/* Both tonearms share one state machine driven from the root:
   rest (parked beside the platter), cue (swung over, lifted), play (down in
   the groove, creeping toward the label as the track progresses). */
.graph-landing__turntable-tonearm,
.graph-landing__deck-tonearm {
  fill: var(--graph-surface-strong);
  filter: drop-shadow(0 0.5px 0.5px rgba(0, 0, 0, 0.25));
  position: absolute;
  stroke: var(--graph-muted);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
  transform: rotate(-24deg);
  transform-box: fill-box;
  transform-origin: 78% 18%;
  translate: 0 0;
  transition: transform 480ms cubic-bezier(0.25, 0.8, 0.25, 1), translate 260ms cubic-bezier(0.4, 0, 0.6, 1), filter 260ms ease;
}

.graph-landing__turntable-tonearm {
  height: 24px;
  right: 0;
  top: 0;
  width: 24px;
}

.graph-landing[data-graph-arm=cue] .graph-landing__turntable-tonearm,
.graph-landing[data-graph-arm=cue] .graph-landing__deck-tonearm {
  filter: drop-shadow(0 2.5px 2px rgba(0, 0, 0, 0.35));
  transform: rotate(var(--graph-arm-angle, 4deg));
  translate: 0 -2px;
}

.graph-landing[data-graph-arm=play] .graph-landing__turntable-tonearm,
.graph-landing[data-graph-arm=play] .graph-landing__deck-tonearm {
  transform: rotate(var(--graph-arm-angle, 4deg));
}

/* The dock disc idles as a flat vinyl; while the motor runs the label picks
   up a faint reflection sweep so the spin reads even at 30px. */
.graph-landing__turntable-record {
  transition: box-shadow 400ms ease;
  will-change: transform;
}

.graph-landing[data-graph-platter=on] .graph-landing__turntable-record {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--graph-accent) 40%, transparent);
}

.graph-landing__music-library-toggle {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 7px;
  color: var(--graph-muted);
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  padding: 0;
  transition: background 160ms ease, color 160ms ease;
  width: 40px;
}

.graph-landing__music-library-toggle:hover,
.graph-landing__music-library-toggle[aria-expanded=true] {
  background: color-mix(in srgb, var(--graph-text) 7%, transparent);
  color: var(--graph-text);
}

.graph-landing__music-library {
  backdrop-filter: blur(16px);
  background: var(--graph-surface);
  border: 1px solid var(--graph-border);
  border-radius: 14px;
  bottom: 74px;
  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);
  box-sizing: border-box;
  left: 72px;
  max-height: min(58dvh, 440px);
  overflow: auto;
  overscroll-behavior: contain;
  padding: 12px;
  pointer-events: auto;
  position: absolute;
  width: min(420px, 100vw - 32px);
  z-index: 5;
}

.graph-landing__music-library[hidden] {
  display: none;
}

/* The library opens on a deck: a 96px platter with the current record and a
   full-size tonearm, so putting a record on is something you can watch. */
.graph-landing__deck {
  align-items: center;
  background: color-mix(in srgb, var(--graph-text) 4%, transparent);
  border-radius: 12px;
  display: grid;
  gap: 14px;
  grid-template-columns: 116px minmax(0, 1fr);
  margin-bottom: 12px;
  padding: 10px 12px 10px 8px;
}

.graph-landing__deck-platter {
  display: block;
  height: 112px;
  position: relative;
  width: 116px;
}

.graph-landing__deck-platter::before {
  background: radial-gradient(circle, color-mix(in srgb, var(--graph-text) 14%, transparent) 0 46%, color-mix(in srgb, var(--graph-text) 6%, transparent) 47% 50%, transparent 51%);
  border-radius: 50%;
  content: "";
  height: 108px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 108px;
}

.graph-landing__deck-record {
  background: repeating-radial-gradient(circle, transparent 0 2.4px, rgba(255, 255, 255, 0.05) 2.4px 3px), radial-gradient(circle at 36% 34%, #2b2e36, #121419 64%);
  border: 1px solid color-mix(in srgb, var(--graph-text) 24%, transparent);
  border-radius: 50%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
  box-sizing: border-box;
  height: 100px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 100px;
  will-change: transform;
}

/* Static light sweep over the spinning grooves. */
.graph-landing__deck-platter::after {
  background: conic-gradient(from 210deg, transparent 0 18%, rgba(255, 255, 255, 0.1) 29%, transparent 40%, transparent 58%, rgba(255, 255, 255, 0.06) 70%, transparent 82%);
  border-radius: 50%;
  content: "";
  height: 100px;
  left: 4px;
  pointer-events: none;
  position: absolute;
  top: 6px;
  width: 100px;
}

.graph-landing__deck-label {
  background-color: var(--graph-accent);
  background-image: var(--graph-music-artwork);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
  inset: 31px;
  position: absolute;
}

.graph-landing__deck-spindle {
  background: #e9e9ec;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  height: 6px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
}

.graph-landing__deck-tonearm {
  height: 72px;
  right: -8px;
  stroke-width: 1.5;
  top: -10px;
  width: 72px;
}

.graph-landing__deck-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.graph-landing__deck-title,
.graph-landing__deck-artist {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.graph-landing__deck-title {
  color: var(--graph-text);
  font-size: 0.92rem;
  font-weight: 650;
}

.graph-landing__deck-artist {
  color: var(--graph-muted);
  font-size: 0.74rem;
}

.graph-landing__deck-meta {
  align-items: center;
  color: var(--graph-muted);
  display: flex;
  font-size: 0.66rem;
  font-variant-numeric: tabular-nums;
  gap: 6px;
  letter-spacing: 0.08em;
  margin-top: 4px;
  text-transform: uppercase;
}

.graph-landing__deck-lamp {
  background: color-mix(in srgb, var(--graph-text) 18%, transparent);
  border-radius: 50%;
  height: 6px;
  transition: background 300ms ease, box-shadow 300ms ease;
  width: 6px;
}

.graph-landing[data-graph-platter=on] .graph-landing__deck-lamp {
  background: var(--graph-accent);
  box-shadow: 0 0 6px color-mix(in srgb, var(--graph-accent) 70%, transparent);
}

.graph-landing__music-library-heading {
  align-items: baseline;
  color: var(--graph-text);
  display: flex;
  font-size: 0.78rem;
  font-weight: 700;
  gap: 8px;
  justify-content: space-between;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.graph-landing__music-library-heading [data-graph-music-status] {
  color: var(--graph-muted);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: normal;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
}

.graph-landing__music-track-list {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.graph-landing__music-track {
  align-items: center;
  background: color-mix(in srgb, var(--graph-text) 4%, transparent);
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--graph-text);
  cursor: pointer;
  display: grid;
  gap: 8px;
  grid-template-columns: 48px minmax(0, 1fr);
  min-height: 62px;
  padding: 6px;
  text-align: left;
}

.graph-landing__music-track:hover,
.graph-landing__music-track[aria-current=true] {
  background: color-mix(in srgb, var(--graph-accent) 12%, transparent);
  border-color: color-mix(in srgb, var(--graph-accent) 45%, var(--graph-border));
}

.graph-landing__music-track-sleeve {
  display: block;
  height: 48px;
  position: relative;
  width: 48px;
}

/* A disc edge peeks out of the sleeve on hover, like pulling a record. */
.graph-landing__music-track-sleeve::before {
  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.05) 2px 2.5px), radial-gradient(circle at 40% 36%, #2b2e36, #121419 64%);
  border-radius: 50%;
  content: "";
  height: 44px;
  left: 2px;
  position: absolute;
  top: 2px;
  transform: translateX(0);
  transition: transform 260ms cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 44px;
}

.graph-landing__music-track:hover .graph-landing__music-track-sleeve::before,
.graph-landing__music-track:focus-visible .graph-landing__music-track-sleeve::before {
  transform: translateX(12px);
}

.graph-landing__music-track-cover {
  border-radius: 6px;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.25);
  display: block;
  height: 48px;
  /* Quartz's base styles give every img a 1rem vertical margin. */
  margin: 0;
  object-fit: cover;
  position: relative;
  width: 48px;
}

.graph-landing__music-track-copy {
  min-width: 0;
  /* Painted above the sleeve's disc so the pull never covers the title. */
  position: relative;
}

.graph-landing__music-track-title,
.graph-landing__music-track-artist {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.graph-landing__music-track-title {
  font-size: 0.78rem;
  font-weight: 650;
}

.graph-landing__music-track-artist {
  color: var(--graph-muted);
  font-size: 0.7rem;
  margin-top: 2px;
}

.graph-landing__audio,
.graph-landing__audio iframe {
  height: 113px;
  width: 200px;
}

.graph-landing__audio {
  bottom: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
}

.graph-landing__top-right {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 1.25rem;
  justify-content: flex-end;
  pointer-events: auto;
}

.graph-landing__title-block {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
}

.graph-landing__title {
  color: var(--graph-text);
  font-family: var(--bodyFont);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
  text-decoration: none;
}

a.graph-landing__title:hover,
a.graph-landing__title:focus-visible {
  color: var(--graph-accent);
}

.graph-landing__counts {
  color: var(--graph-muted);
  cursor: default;
  font-family: var(--bodyFont);
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
}

.graph-landing__lenses {
  display: flex;
  flex-wrap: wrap;
  gap: 0 4px;
}

.graph-landing__chip {
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--graph-muted);
  cursor: pointer;
  font-family: var(--bodyFont);
  font-size: 13px;
  line-height: 1.2;
  min-height: 44px;
  padding: 12px 8px;
  position: relative;
}

.graph-landing__chip:hover {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__chip:focus-visible {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__chip[aria-pressed=true] {
  color: var(--graph-accent);
  font-weight: 500;
}

.graph-landing__chip[aria-pressed=true]::after {
  background: currentColor;
  bottom: 11px;
  content: "";
  height: 1px;
  left: 8px;
  pointer-events: none;
  position: absolute;
  right: 8px;
}

.graph-landing__section-label {
  color: var(--graph-muted);
  cursor: default;
  font-family: var(--bodyFont);
  font-size: 11px;
  letter-spacing: 0.04em;
  line-height: 1.3;
  margin: 0 0 4px;
  pointer-events: none;
}

.graph-landing__nav-link,
.graph-landing__locale-toggle,
.graph-landing__icon-btn,
.graph-landing__filters-toggle {
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--graph-muted);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--bodyFont);
  font-size: 13px;
  font-weight: 400;
  height: 44px;
  justify-content: center;
  line-height: 1;
  min-height: 44px;
  padding: 0;
  text-decoration: none;
}

.graph-landing__nav-link:hover,
.graph-landing__nav-link:focus-visible,
.graph-landing__locale-toggle:hover,
.graph-landing__locale-toggle:focus-visible,
.graph-landing__icon-btn:hover,
.graph-landing__icon-btn:focus-visible,
.graph-landing__filters-toggle:hover,
.graph-landing__filters-toggle:focus-visible {
  color: var(--graph-accent);
  outline: none;
}

.graph-landing__nav-link:focus-visible,
.graph-landing__locale-toggle:focus-visible,
.graph-landing__icon-btn:focus-visible,
.graph-landing__filters-toggle:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__nav-link,
.graph-landing__locale-toggle {
  color: var(--graph-text);
}

.graph-landing__icon-btn {
  min-width: 44px;
}

/* Sun shows in dark mode (click -> light), moon in light mode. */
.graph-landing__icon--sun {
  display: none;
}

:root[saved-theme=dark] .graph-landing__icon--sun {
  display: block;
}

:root[saved-theme=dark] .graph-landing__icon--moon {
  display: none;
}

.graph-landing__tags {
  min-width: 0;
}

.graph-landing__filters-toggle {
  display: none;
}

.graph-landing__tag-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.graph-landing__tag-item {
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--graph-muted);
  cursor: pointer;
  display: flex;
  font-family: var(--bodyFont);
  font-size: 13px;
  gap: 8px;
  justify-content: space-between;
  line-height: 1.4;
  min-height: 32px;
  padding: 6px 8px;
  text-align: left;
  width: 100%;
}

.graph-landing__tag-item:hover {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__tag-item:focus-visible {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__tag-item[aria-pressed=true] {
  color: var(--graph-accent);
  font-weight: 500;
}

.graph-landing__facet-name {
  align-items: center;
  display: inline-flex;
  gap: 7px;
}

.graph-landing__tag-count {
  color: var(--graph-muted);
  font-variant-numeric: tabular-nums;
}

.graph-landing__utils {
  border-top: 1px solid var(--graph-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
}

.graph-landing__tune {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.graph-landing__tune-head {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.graph-landing__tools {
  display: inline-flex;
  gap: 2px;
}

.graph-landing__tool {
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 6px;
  color: var(--graph-muted);
  cursor: pointer;
  display: inline-flex;
  height: 44px;
  justify-content: center;
  width: 44px;
}

.graph-landing__tool:hover {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__tool:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__tool[aria-pressed=true] {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__slider {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.graph-landing__slider span {
  color: var(--graph-muted);
  font-size: 11px;
}

.graph-landing__slider input[type=range] {
  accent-color: var(--graph-accent);
  cursor: pointer;
  width: 100%;
}

.graph-landing__legend {
  align-items: center;
  color: var(--graph-muted);
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  gap: 8px 12px;
  line-height: 1.3;
}

.graph-landing__legend-item {
  align-items: center;
  display: inline-flex;
  gap: 6px;
}

.graph-landing__dot {
  border-radius: 50%;
  display: inline-block;
  height: 7px;
  width: 7px;
}

.graph-landing__dot--note {
  background: var(--graph-text);
}

.graph-landing__dot--tag {
  background: var(--graph-muted);
}

.graph-landing__dot--external {
  background: var(--graph-muted);
}

.graph-landing__preview {
  background: var(--graph-surface);
  backdrop-filter: blur(14px);
  border: 1px solid var(--graph-border);
  border-radius: 14px;
  bottom: 1.5rem;
  left: auto;
  margin: 0;
  opacity: 0;
  padding: 1rem 1.3rem 0.9rem;
  pointer-events: none;
  position: absolute;
  right: 1.5rem;
  transform: translateY(6px);
  transition: opacity 0.22s ease, transform 0.22s ease;
  width: min(400px, 100% - 3rem);
}

.graph-landing__preview[data-visible=true] {
  opacity: 1;
  transform: translateY(0);
}

.graph-landing__hint {
  animation: graph-landing-hint-in 0.5s ease both;
  bottom: 24px;
  color: var(--graph-muted);
  font-size: 12px;
  letter-spacing: 0.01em;
  line-height: 1.4;
  margin: 0;
  max-width: calc(100% - 2rem);
  padding: 0;
  pointer-events: none;
  position: absolute;
  right: 24px;
  text-align: right;
  white-space: nowrap;
  z-index: 3;
}

.graph-landing__preview[data-visible=true] ~ .graph-landing__hint {
  opacity: 0;
}

.graph-landing__hint[hidden] {
  display: none;
}

@keyframes graph-landing-hint-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.graph-landing__preview-chip {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  margin: 0 0 0.35rem;
  text-transform: uppercase;
}

.graph-landing__preview-title {
  color: var(--graph-text);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 0.4rem;
}

.graph-landing__preview-excerpt {
  color: var(--graph-muted);
  display: -webkit-box;
  font-size: 13px;
  line-height: 1.5;
  margin: 0 0 0.55rem;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.graph-landing__preview-hint {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.12em;
  margin: 0;
  text-transform: uppercase;
}

:root[saved-theme=dark] .graph-landing__preview-title {
  color: rgba(255, 255, 255, 0.92);
}

:root[saved-theme=dark] .graph-landing__preview-excerpt {
  color: rgba(219, 226, 242, 0.72);
}

.graph-landing__inspect {
  background: var(--graph-surface-strong);
  backdrop-filter: blur(16px);
  border-left: 1px solid var(--graph-border);
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100dvh - 4.5rem);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 1.1rem 1.2rem 1.3rem;
  pointer-events: auto;
  position: absolute;
  right: 0;
  top: 4.5rem;
  width: min(22rem, 100% - 15rem);
  z-index: 6;
}

.graph-landing__inspect[hidden] {
  display: none;
}

.graph-landing__inspect-bar {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.graph-landing__inspect-chip {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  margin: 0;
  text-transform: uppercase;
}

.graph-landing__inspect-close {
  background: transparent;
  border: 0;
  border-radius: 8px;
  color: var(--graph-muted);
  cursor: pointer;
  font-family: var(--bodyFont);
  font-size: 12px;
  min-height: 44px;
  padding: 0 10px;
}

.graph-landing__inspect-close:hover,
.graph-landing__inspect-close:focus-visible {
  background: var(--graph-accent-soft);
  color: var(--graph-accent);
}

.graph-landing__inspect-close:focus-visible {
  outline: 2px solid var(--graph-accent);
  outline-offset: 2px;
}

.graph-landing__inspect-title {
  color: var(--graph-text);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.35;
  margin: 0;
}

.graph-landing__inspect-excerpt {
  color: var(--graph-muted);
  font-size: 13px;
  line-height: 1.55;
  margin: 0;
}

.graph-landing__inspect-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.graph-landing__inspect-tags li {
  border: 1px solid var(--graph-border);
  border-radius: 999px;
  color: var(--graph-muted);
  font-size: 11px;
  padding: 2px 8px;
}

.graph-landing__inspect-section {
  color: var(--graph-muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  margin: 6px 0 0;
  text-transform: uppercase;
}

.graph-landing__inspect-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.graph-landing__inspect-link {
  align-items: baseline;
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--graph-text);
  cursor: pointer;
  display: flex;
  font-family: var(--bodyFont);
  gap: 8px;
  min-height: 32px;
  padding: 4px 2px;
  text-align: left;
  width: 100%;
}

.graph-landing__inspect-link span {
  color: var(--graph-muted);
  flex: 0 0 3.2rem;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.graph-landing__inspect-link strong {
  font-size: 13px;
  font-weight: 500;
}

.graph-landing__inspect-empty {
  color: var(--graph-muted);
  font-size: 12px;
  padding: 4px 0;
}

.graph-landing__inspect-open {
  align-self: flex-start;
  color: var(--graph-accent);
  font-size: 13px;
  font-weight: 500;
  margin-top: 8px;
  min-height: 44px;
  padding: 10px 0;
  text-decoration: none;
}

.graph-landing__inspect-open[hidden] {
  display: none;
}

:root[saved-theme=dark] .graph-landing__inspect-title,
:root[saved-theme=dark] .graph-landing__inspect-link {
  color: rgba(255, 255, 255, 0.92);
}

:root[saved-theme=dark] .graph-landing__inspect-excerpt {
  color: rgba(219, 226, 242, 0.72);
}

@media (max-width: 700px) {
  :root:not([saved-theme=dark]) .graph-landing__hero::before {
    background-position: 60% center;
  }
  .graph-landing__preview {
    display: none;
  }
  .graph-landing__hint {
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 14px);
    left: 16px;
    right: 16px;
    text-align: center;
    white-space: normal;
  }
  .graph-landing__inspect {
    border-left: 0;
    border-radius: 16px 16px 0 0;
    border-top: 1px solid var(--graph-border);
    bottom: 0;
    left: 0;
    max-height: min(52dvh, 100dvh - 4.5rem);
    padding-bottom: max(12px, env(safe-area-inset-bottom));
    right: 0;
    top: auto;
    width: 100%;
    z-index: 5;
  }
}
.graph-landing__error {
  align-items: center;
  color: var(--graph-muted);
  display: flex;
  font-size: 0.9rem;
  height: 100%;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
}

/* Hero copy (options.hero): bottom-left manifesto over the canvas. */
.graph-landing__copy {
  bottom: 88px;
  left: clamp(16px, 4vw, 48px);
  max-width: 640px;
  pointer-events: none;
  position: absolute;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 3;
}

.graph-landing__copy > * {
  pointer-events: auto;
}

.graph-landing[data-rail-open=true] .graph-landing__copy {
  opacity: 0;
  visibility: hidden;
}

.graph-landing__eyebrow {
  color: var(--graph-accent);
  font-family: var(--codeFont);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  margin: 0 0 0.9rem;
  text-transform: uppercase;
}

.graph-landing__headline {
  color: var(--graph-text);
  font-family: "Newsreader", "Noto Serif KR", Georgia, serif;
  font-size: clamp(2.4rem, 6.2vw, 4.6rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.02;
  margin: 0 0 1.1rem;
  overflow-wrap: break-word;
  text-wrap: balance;
  word-break: keep-all;
}

.graph-landing__headline em {
  color: var(--graph-accent);
  font-style: italic;
}

.graph-landing__lede {
  color: var(--graph-muted);
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.6;
  margin: 0 0 1.4rem;
  max-width: 48ch;
  overflow-wrap: break-word;
  text-wrap: pretty;
  word-break: keep-all;
}

.graph-landing__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.graph-landing__btn {
  border: 1px solid var(--graph-border);
  border-radius: 999px;
  color: var(--graph-text);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.7rem 1.15rem;
  text-decoration: none;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.graph-landing__btn:hover {
  border-color: var(--graph-accent);
  color: var(--graph-accent);
}

.graph-landing__btn--accent {
  background: var(--graph-accent);
  border-color: var(--graph-accent);
  color: var(--light);
}

.graph-landing__btn--accent:hover {
  background: color-mix(in srgb, var(--graph-accent) 85%, #000);
  color: var(--light);
}

/* Push the constellation right of the copy on wide screens; fade its left edge. */
@media (min-width: 861px) {
  .graph-landing[data-hero] .graph-landing__canvas {
    left: clamp(0px, 18vw, 280px);
    -webkit-mask-image: linear-gradient(to right, transparent 0, #000 clamp(240px, 34vw, 560px));
    mask-image: linear-gradient(to right, transparent 0, #000 clamp(240px, 34vw, 560px));
    width: auto;
  }
}
@media (max-width: 700px) {
  .graph-landing__copy {
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 16px);
    left: 16px;
    max-width: none;
    right: 16px;
  }
  /* Fade the constellation behind the copy so labels do not collide with it. */
  .graph-landing__copy::before {
    background: linear-gradient(to top, var(--graph-surface-strong) 0, var(--graph-surface-strong) 70%, transparent 100%);
    bottom: -24px;
    content: "";
    left: -16px;
    position: absolute;
    right: -16px;
    top: -56px;
    z-index: -1;
  }
  .graph-landing__headline {
    font-size: clamp(1.8rem, 8vw, 2.4rem);
  }
  .graph-landing__lede {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    font-size: 0.95rem;
    overflow: hidden;
  }
  .graph-landing[data-hero] .graph-landing__hint {
    display: none;
  }
}
:root[saved-theme=dark] .graph-landing {
  --graph-backdrop: #090b12;
  --graph-surface: color-mix(in srgb, #11141c 92%, transparent);
  --graph-surface-strong: #11141c;
  background: var(--graph-backdrop);
}

:root[saved-theme=dark] .graph-landing__hero,
:root[saved-theme=dark] .graph-landing__canvas {
  background-color: var(--graph-backdrop);
}

:root[saved-theme=dark] .graph-landing__rail {
  background: var(--graph-surface);
  border-color: var(--graph-border);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);
}

:root[saved-theme=dark] .graph-landing__music-dock,
:root[saved-theme=dark] .graph-landing__music-library {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);
}

@media (max-width: 700px) {
  .graph-landing__chrome {
    background: var(--graph-surface);
    border-bottom: 1px solid var(--graph-border);
    gap: 6px;
    justify-content: flex-start;
    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;
    pointer-events: auto;
  }
  .graph-landing__title-block--rail {
    display: none;
  }
  .graph-landing__title {
    font-size: 14px;
  }
  .graph-landing__top-right {
    flex: 1 1 auto;
    gap: 0.25rem;
    justify-content: flex-end;
    min-width: 0;
  }
  .graph-landing__nav-link,
  .graph-landing__locale-toggle {
    font-size: 12px;
    height: 44px;
    min-height: 44px;
  }
  .graph-landing__rail-toggle,
  .graph-landing__music-dock {
    bottom: max(16px, env(safe-area-inset-bottom));
  }
  .graph-landing__rail-toggle {
    height: 48px;
    left: max(16px, env(safe-area-inset-left));
    width: 48px;
  }
  .graph-landing__music-dock {
    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);
  }
  .graph-landing__music-now {
    max-width: 120px;
  }
  .graph-landing__music-dock[data-playing=true] .graph-landing__music-now:not([hidden]) {
    width: min(120px, max(0px, 100vw - 180px));
  }
  .graph-landing__music-library {
    border-radius: 16px;
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);
    left: max(16px, env(safe-area-inset-left));
    max-height: min(52dvh, 100dvh - 8rem);
    padding-bottom: max(12px, env(safe-area-inset-bottom));
    position: fixed;
    right: max(16px, env(safe-area-inset-right));
    width: auto;
  }
  .graph-landing__music-track-list {
    grid-template-columns: 1fr;
  }
  .graph-landing__scrim {
    background: rgba(8, 10, 16, 0.42);
    border: 0;
    display: block;
    inset: 0;
    pointer-events: auto;
    position: absolute;
    z-index: 3;
  }
  .graph-landing__scrim[hidden] {
    display: none;
  }
  .graph-landing__rail {
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);
    left: max(16px, env(safe-area-inset-left));
    max-height: min(58dvh, 100dvh - 8rem);
    max-width: min(248px, 100vw - 32px);
    width: min(248px, 100vw - 32px);
  }
  .graph-landing__lenses {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .graph-landing__chip {
    flex: 0 0 auto;
    min-height: 44px;
  }
  .graph-landing__tag-list {
    max-height: 16dvh;
    overflow-y: auto;
  }
  :root[saved-theme=dark] .graph-landing__chrome {
    background: var(--graph-surface);
    border-bottom-color: var(--graph-border);
  }
}
@media (prefers-reduced-motion: reduce) {
  .graph-landing *,
  .graph-landing *::before,
  .graph-landing *::after {
    animation: none !important;
    scroll-behavior: auto !important;
    transition: none !important;
  }
}`;

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
          "data-graph-music-vinyl-fx": options.music?.vinylFx === false ? "false" : void 0,
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
                        /* @__PURE__ */ u2("span", { class: "graph-landing__turntable-record", "data-graph-record": true, children: [
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
                      /* @__PURE__ */ u2("div", { class: "graph-landing__deck", "aria-hidden": "true", children: [
                        /* @__PURE__ */ u2("span", { class: "graph-landing__deck-platter", children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-record", "data-graph-record": true, children: [
                            /* @__PURE__ */ u2("span", { class: "graph-landing__deck-label" }),
                            /* @__PURE__ */ u2("span", { class: "graph-landing__deck-spindle" })
                          ] }),
                          /* @__PURE__ */ u2("svg", { class: "graph-landing__deck-tonearm", viewBox: "0 0 32 32", focusable: "false", children: [
                            /* @__PURE__ */ u2("circle", { cx: "25", cy: "7", r: "2.5" }),
                            /* @__PURE__ */ u2("path", { d: "M24.2 8.8 17.6 19.6 12.5 22.2" }),
                            /* @__PURE__ */ u2("path", { d: "m10.3 21.6 3.9 1.8-1.4 2.7-3.9-1.8Z" })
                          ] })
                        ] }),
                        /* @__PURE__ */ u2("span", { class: "graph-landing__deck-copy", children: [
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-title", "data-graph-deck-title": true }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-artist", "data-graph-deck-artist": true }),
                          /* @__PURE__ */ u2("span", { class: "graph-landing__deck-meta", children: [
                            /* @__PURE__ */ u2("span", { class: "graph-landing__deck-lamp" }),
                            "33\u2153 RPM"
                          ] })
                        ] })
                      ] }),
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