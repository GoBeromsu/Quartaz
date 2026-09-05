// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Wt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function et(e,n,o){let t=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(n)?Math.max(0,n):0,l=Number.isFinite(o)?Math.max(i,o):i;if(l===i)return i>0?.5:0;let h=Math.min(l,Math.max(i,t));return(Math.sqrt(h)-Math.sqrt(i))/(Math.sqrt(l)-Math.sqrt(i))}function $t(e,n,o){return et(Math.max(e,n),0,o)}function _e(e,n,o){return Number.isFinite(e)?Math.min(o,Math.max(n,e)):n}function qt(e){return 1+_e(e,0,1)*1.2}function Ut(e,n){let o=_e(e,0,1),t=_e(n,0,2);return Math.max(.5,1-o*.24*t)}function Yt(e,n){let o=_e(e,0,1),t=_e(n,0,2);return Math.min(1.6,1+o*.3*t)}var On=/^[A-Za-z0-9_-]{6,20}$/,zn=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Bn=new Set(["youtu.be","www.youtu.be"]);function Qe(e){return e&&On.test(e)?e:void 0}function Vn(e){if(!e)return;let n=e.trim(),o=Qe(n);if(o)return o;let t;try{t=new URL(n)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:"||t.username||t.password||t.port)){if(zn.has(t.hostname)){if(t.pathname==="/watch")return Qe(t.searchParams.get("v"));let i=t.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return Qe(i[1])}if(Bn.has(t.hostname)){let i=t.pathname.split("/").filter(Boolean);if(i.length===1)return Qe(i[0])}}}function Kt(e){let n=[],o=new Set;for(let t of e){let i=t.title.trim(),l=Vn(t.url);if(!i||!l||o.has(l))continue;o.add(l);let h=t.artist?.trim();h?n.push({title:i,artist:h,videoId:l}):n.push({title:i,videoId:l})}return n}function H(e){return typeof e=="string"?e:e.id}function wt(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function jt(e,n,o,t){return n||e&&wt(o,t)==="full"}function tt(e,n,o){let t=e.get(n);if(t)return t;let i=o();return e.set(n,i),i}function fe(e,n){let o=e?n(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function Xt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let t=[...e.nodes].sort((h,E)=>E.degree!==h.degree?E.degree-h.degree:h.id<E.id?-1:h.id>E.id?1:0).slice(0,Math.max(0,n)),i=new Set(t.map(h=>h.id)),l=e.links.filter(h=>{let E=H(h.source),N=H(h.target);return i.has(E)&&i.has(N)});return{nodes:t,links:l}}function Zt(e,n,o,t){let i=new Set,l=Math.max(0,Math.floor(t));if(l<=0)return i;let h=new Set([o]),E=new Set([o]);for(let N=0;N<l;N+=1){let V=new Set;for(let Z of E)for(let y of e.get(Z)??[])h.has(y)||(h.add(y),V.add(y),n.has(y)||i.add(y));E=V}return i}var Wn=2.399963229728653,yt=20;function Jt(e,n,o){let t=e.x??0,i=e.y??0,l=e.z??0,h=n*Wn;return{x:t+yt*Math.cos(h),y:i+yt*Math.sin(h),z:o?l+yt*Math.sin(h*.5):l}}function Qt(e,n,o,t){if(n===o)return new Set;if(n===null||o===null)return new Set(t);let i=new Set([n,o]);for(let l of e.get(n)??[])i.add(l);for(let l of e.get(o)??[])i.add(l);return i}var it="0.179.1",$n="https://esm.sh/force-graph@1.51.4",qn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${it}`,Un="https://esm.sh/d3-force-3d@3.0.6",Yn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${it}`,Kn=`https://esm.sh/three@${it}`,jn=`https://esm.sh/three@${it}/examples/jsm/postprocessing/UnrealBloomPass.js`,Xn=8,Zn=6;var Oe=1,Nt=4,Jn=.05,Qn=2.6,er=1,en=1,Ge=.18,vn="graph-landing:lens",Tn="graph-landing:tune",It="graph-landing:ambient-audio",tn="UDVtMYqUAyw",He=12,tr=28e3,nr="https://www.youtube.com/iframe_api",rr=.18,nn=1.25,or=1.25,ar=1.15,ir=.55,ye={x:330,y:235,z:565},rn={x:0,y:0,z:0},ze=Math.hypot(ye.x,ye.y,ye.z),sr=300/ze,lr=1600/ze,on=2.6,cr=7,an=.8,sn=.16,ln=1,ur=2.4,dr={wikilink:.65,tag:.45,external:.55,cooc:.08,folder:.08},fr="#a8b0c2",cn={min:80,max:200},un={min:40,max:110},dn={min:160,max:280},fn={min:90,max:170},gn=220,mn=2,gr=.06,mr=.8,pr=350,kt={min:-100,max:-190},vt={min:72,max:116},Tt={min:130,max:260};function hr(e){return ot(e-.5,0,1)}function rt(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function Lt(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function br(e){let n=[];for(let o of Object.values(e)){let t=rt(o);if(!Wt(t.filePath))continue;let i=typeof t.slug=="string"?t.slug:"";if(i.length===0)continue;let l=t.multilingual,h=l&&typeof l=="object"?l:void 0;n.push({slug:i,title:typeof t.title=="string"?t.title:i,links:Lt(t.links),tags:Lt(t.tags),externalLinks:Lt(t.externalLinks),content:typeof t.excerpt=="string"?t.excerpt:typeof t.content=="string"?t.content:"",multilingual:h})}return n}function yr(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=gn?n:`${n.slice(0,gn).trimEnd()}\\u2026`}function Be(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function pn(e){return Be(e)/(2*Math.PI)}function nt(e,n,o){let t=Be(e),i=Math.acos(2*pn(`${e}:phi`)-1),l=n+(o-n)*pn(`${e}:r`);return{x:l*Math.sin(i)*Math.cos(t),y:l*Math.sin(i)*Math.sin(t),z:l*Math.cos(i)}}function Ln(e){return e==="index"||e.endsWith("/index")}function En(e){return e==="tags"||e.startsWith("tags/")}function wr(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function xn(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Et(e,n){return e.multilingual?.locale?e.multilingual.locale:xn(e.slug,n).locale}function kr(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${xn(e.slug,n).permalink}`}function vr(e,n){let o=e.find(t=>Et(t,n.prefixes)===n.localeId);if(o)return o;if(n.localeId===n.sourceLocale)return e.find(t=>Et(t,n.prefixes)===n.sourceLocale)??e.find(t=>Et(t,n.prefixes)===void 0)}function ot(e,n,o){return Math.min(o,Math.max(n,e))}function hn(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function Tr(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function At(e){return Tr(e).trim().toLowerCase()}function Lr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Er(e){let n=e.trim();return n.length===0||Lr(n)||En(n)||Ln(n)?!0:At(n).length===0}function xr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Mn(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Mr(e,n){let o=Mn(e);return o===null?!1:!n.includes(new URL(o).hostname)}function bn(e){return`external:${e}`}function Sr(e,n){let o=new URL(e),t=o.hostname.replace(/^www\\./,""),i=o.pathname;return(n.get(t)??0)>1&&i.length>1?`${t}${i}`:t}function Cr(e){let n=new Map,o=new Map;for(let t of e){let i=At(t.slug);i.length>0&&!n.has(i)&&n.set(i,t.slug);let l=t.title.trim().toLowerCase();l.length>0&&!o.has(l)&&o.set(l,t.slug);let h=l.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,t.slug)}return{byBasename:n,byTitle:o}}function Nr(e,n,o){if(n.has(e))return e;let t=At(e),i=o.byBasename.get(t);if(i)return i;let l=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(t);return l||null}function Ir(e,n){return e.length===0?"":[...e].sort((t,i)=>(n.get(i)??0)-(n.get(t)??0))[0]??""}function Pr(e,n,o=void 0){let t=e.filter(c=>!Ln(c.slug)&&!En(c.slug)&&!wr(c)),i=new Map;for(let c of t){let p=kr(c,n.prefixes),w=i.get(p)??[];w.push(c),i.set(p,w)}let l=[];for(let c of i.values()){let p=vr(c,n);p&&l.push(p)}let h=new Set(l.map(c=>c.slug)),E=Cr(l),N=new Map,V=[],Z=new Set,y=new Map,te=c=>{N.set(c,(N.get(c)??0)+1)},B=(c,p,w)=>c<p?`${c}|${p}|${w}`:`${p}|${c}|${w}`,L=(c,p,w,D)=>{let F=B(c,p,w);return Z.has(F)?!1:(Z.add(F),V.push({source:c,target:p,kind:w}),D&&(te(c),te(p)),!0)};for(let c of l)for(let p of c.links){if(Er(p))continue;let w=Nr(p,h,E);w!==null&&w!==c.slug&&L(c.slug,w,"wikilink",!0)}let S=xr(),_=new Set;for(let c of l)for(let p of c.externalLinks){let w=Mn(p);w===null||!Mr(w,S)||(_.add(w),L(c.slug,bn(w),"external",!0))}let j=new Map;for(let c of _){let p=new URL(c).hostname.replace(/^www\\./,"");j.set(p,(j.get(p)??0)+1)}let O=new Set,A=new Map;for(let c of l)for(let p of c.tags){y.set(p,(y.get(p)??0)+1);let w=`tag:${p}`;O.add(w),L(c.slug,w,"tag",!0);let D=A.get(p)??[];D.push(c.slug),A.set(p,D)}if(o!==!1){let c=o?.maxTagsPerNote,p=o?.maxEdges,w=0;e:for(let D of l)if(!(D.tags.length<2)&&!(c!==void 0&&D.tags.length>c))for(let F=0;F<D.tags.length;F+=1)for(let z=F+1;z<D.tags.length;z+=1){if(p!==void 0&&w>=p)break e;L(`tag:${D.tags[F]}`,`tag:${D.tags[z]}`,"cooc",!1)&&(w+=1)}}let X=new Map;for(let c of l){let p=hn(c.slug);if(p==="root")continue;let w=X.get(p)??[];w.push(c.slug),X.set(p,w)}for(let c of X.values()){if(c.length<2)continue;let p=[...c].sort();for(let w=0;w<p.length;w+=1){let D=p[(w+1)%p.length],F=p[(w+mn)%p.length],z=p[w];z===void 0||D===void 0||(z!==D&&!Z.has(B(z,D,"wikilink"))&&L(z,D,"folder",!1),p.length>mn+1&&F!==void 0&&z!==F&&!Z.has(B(z,F,"wikilink"))&&L(z,F,"folder",!1))}}let ne=[...N.values()],re=ne.length>0?Math.min(...ne):0,q=ne.length>0?Math.max(...ne):0,W=c=>{let p=et(N.get(c)??0,re,q);return Oe+p*(Nt-Oe)},ae=[...l].sort((c,p)=>(N.get(p.slug)??0)-(N.get(c.slug)??0)),oe=new Set(ae.filter(c=>(N.get(c.slug)??0)>0).slice(0,Xn).map(c=>c.slug)),J=l.map(c=>{let p=oe.has(c.slug),w=p?nt(c.slug,un.min,un.max):nt(c.slug,cn.min,cn.max);return{id:c.slug,name:c.title,type:"note",val:W(c.slug),degree:N.get(c.slug)??0,isHub:p,tag:"",slug:c.slug,url:"",folder:hn(c.slug),tags:c.tags,dominantTag:Ir(c.tags,y),excerpt:yr(c.content),phase:Be(c.slug),x:w.x,y:w.y,z:w.z}});for(let c of _){let p=bn(c),w=nt(p,dn.min,dn.max);J.push({id:p,name:Sr(c,j),type:"external",val:W(p)*ir,degree:N.get(p)??0,isHub:!1,tag:"",slug:"",url:c,folder:"",tags:[],dominantTag:"",excerpt:c,phase:Be(p),x:w.x,y:w.y,z:w.z})}for(let c of O){let p=c.slice(4),w=nt(c,fn.min,fn.max);J.push({id:c,name:p,type:"tag",val:ot(W(c)*.7,Oe,Nt),degree:N.get(c)??0,isHub:!1,tag:p,slug:`tags/${p}`,url:"",folder:"tag",tags:[p],dominantTag:p,excerpt:"",phase:Be(c),x:w.x,y:w.y,z:w.z})}return{nodes:J,links:V}}function xt(e){let n=new Map,o=(t,i)=>{let l=n.get(t)??new Set;l.add(i),n.set(t,l)};for(let t of e){if(t.kind!=="wikilink"&&t.kind!=="tag"&&t.kind!=="external")continue;let i=H(t.source),l=H(t.target);o(i,l),o(l,i)}return n}function Le(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let t=getComputedStyle(o).color;return o.remove(),t||n}function Sn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Le("--graph-backdrop","#ffffff"),ink:Le("--graph-text","#0f0f0f"),accent:Le("--graph-accent","#a52142"),tertiary:Le("--graph-external","#c75b75"),gray:Le("--graph-muted","#737373"),external:Le("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Ee(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ar(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Dr(){return Ar()}function ee(){return document.documentElement.getAttribute("saved-theme")==="dark"}function at(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}return null}function Re(e,n){let o=at(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function we(e,n,o){let t=at(e),i=at(n);if(!t||!i)return e;let l=(h,E)=>Math.round(h+(E-h)*o);return`rgb(${l(t.r,i.r)}, ${l(t.g,i.g)}, ${l(t.b,i.b)})`}function Pt(e){return e.bg}function _r(e){let n=at(e);if(!n)return e;let o=t=>{let i=t/255,l=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.ceil(l*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Gr(e){return _r(Pt(e))}function Cn(e,n){let o=0;for(let t of e)o=o*31+t.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function yn(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Cn(e,[n.accent,n.tertiary,n.ink,n.gray])}function Hr(e,n){return e.length===0?n.ink:Cn(e,[n.accent,n.tertiary])}function Rr(e){let n=e.split("/").map(l=>encodeURIComponent(l)).join("/"),o=document.querySelector("base")?.getAttribute("href"),t="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(t=o.endsWith("/")?o:`${o}/`);let i=`${t}${n}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function Fr(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function Mt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Or(e){let o=await import(e?qn:$n);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Fr(o)}function zr(){try{let e=sessionStorage.getItem(vn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Br(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let n=sessionStorage.getItem(Tn);if(!n)return e;let o=rt(JSON.parse(n)),t=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,l=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread,E=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:t,edgeScale:i,zoom:l,spread:h,hubGravity:E}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Fe(e){try{sessionStorage.setItem(Tn,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function St(e){try{sessionStorage.setItem(vn,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function Vr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Wr(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function $r(e,n){return e.type==="note"&&e.folder===n}function wn(e,n){let o=H(n),t=e.find(i=>i.id===o);return!t||t.type!=="note"?null:t.folder}function qr(e,n,o){let t=new Map;if(n==="folder"){let i=[...new Set(e.nodes.filter(l=>l.type==="note").map(l=>l.folder))];return i.forEach((l,h)=>{let E=Math.PI*2*h/Math.max(i.length,1),N={x:Math.cos(E)*o,y:Math.sin(E)*o,z:0};for(let V of e.nodes)V.type==="note"&&V.folder===l&&t.set(V.id,N)}),t}if(n==="tag"){let i=e.nodes.filter(h=>h.type==="tag"),l=new Map;i.forEach((h,E)=>{let N=Math.PI*2*E/Math.max(i.length,1);l.set(h.tag,{x:Math.cos(N)*o,y:Math.sin(N)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let E=l.get(h.tag);E&&t.set(h.id,E)}else if(h.dominantTag.length>0){let E=l.get(h.dominantTag);E&&t.set(h.id,E)}}return t}function Ur(e,n){let o=[],t=i=>{let l=n*i;for(let h of o){let E=e(h);E&&(h.vx=(h.vx??0)+(E.x-(h.x??0))*l,h.vy=(h.vy??0)+(E.y-(h.y??0))*l,h.vz=(h.vz??0)+(E.z-(h.z??0))*l)}};return t.initialize=i=>{o=i},t}function kn(e,n,o,t){for(let i of e.querySelectorAll(n)){if(!(i instanceof HTMLElement))continue;let l=i.getAttribute(t);i.setAttribute("aria-pressed",l===o?"true":"false")}}function Yr(e,n,o,t){let i=xt(n.links),l=(r,a,s)=>r<a?`${r}|${a}|${s}`:`${a}|${r}|${s}`,h=new Map(t.fullData.nodes.map(r=>[r.id,r])),E=new Map,N=new Set,V=new Set;t.fullData!==n&&(E=xt(t.fullData.links),N=new Set(n.nodes.map(r=>r.id)),V=new Set(n.links.map(r=>l(H(r.source),H(r.target),r.kind))));let Z=r=>{if(t.fullData===n)return!1;let a=Zt(E,N,r,t.expandHops);if(!N.has(r)&&h.has(r)&&a.add(r),a.size===0)return!1;n.nodes=[...n.nodes],n.links=[...n.links];let s=t.layout.incrementalWarmup?h.get(r):void 0,f=0;for(let m of a){let u=h.get(m);if(u){if(s&&u.id!==s.id){let b=Jt(s,f,t.use3d);u.x=b.x,u.y=b.y,u.z=b.z,u.vx=u.vy=u.vz=0,f+=1}n.nodes.push(u),N.add(m)}}for(let m of t.fullData.links){let u=H(m.source),b=H(m.target);if(!N.has(u)||!N.has(b))continue;let g=l(u,b,m.kind);V.has(g)||(V.add(g),n.links.push(m))}return i=xt(n.links),!0},y={lens:zr(),allLabels:!1,focusTag:null,focusFolder:null},te=null,B=null,L=Br(),S=!1,_=rn,j=ze,O=()=>{e.cooldownTicks(t.layout.freezeAfterWarmup?90:t.layout.cooldownTicks??200),e.d3ReheatSimulation()},A=()=>B??te,X=new Set(n.nodes.filter(r=>r.type==="note").sort((r,a)=>a.degree-r.degree).slice(0,Zn).map(r=>r.id)),ne=r=>{let a=r.val;return r.isHub&&(a*=nn),y.lens==="tag"&&r.type==="tag"&&(a*=or),y.focusTag&&r.id===`tag:${y.focusTag}`&&(a*=ar),a},re=r=>{let a=A();return a===r.id?!0:a!==null?i.get(a)?.has(r.id)??!1:y.allLabels||X.has(r.id)},q=r=>{let a=Nt*nn,s=ot((ne(r)-Oe)/(a-Oe),0,1);return(on+s*(cr-on))*L.nodeScale},W=r=>{let a=A();if(a!==null)return a===r||(i.get(a)?.has(r)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let s=n.nodes.find(f=>f.id===r);return s?y.focusFolder!==null?$r(s,y.focusFolder):y.focusTag!==null&&Wr(s,y.focusTag):!1},ae=r=>r.type==="external"?o.current.external:y.lens==="tag"?r.type==="tag"?o.current.tertiary:Hr(r.dominantTag,o.current):y.lens==="folder"?r.type==="tag"?o.current.tertiary:yn(r.folder,o.current):y.lens==="hub"?r.type==="tag"?o.current.tertiary:r.isHub?o.current.accent:o.current.ink:r.type==="tag"?o.current.tertiary:o.current.ink,oe=r=>{let a=A();if(a!==null&&(a===r.id||(i.get(a)?.has(r.id)??!1)))return o.current.accent;let s=ae(r);return W(r.id)?ee()?r.type==="external"?we(o.current.external,"#ffffff",.18):r.type==="tag"?we(o.current.tertiary,"#ffffff",.22):r.isHub?we("#fff3e4",o.current.accent,.1):we("#ffffff",o.current.accent,.12):r.isHub?we(o.current.ink,o.current.accent,.22):s:we(s,Pt(o.current),1-Ge)},J=r=>{let a=ee();return r==="wikilink"?a?.52:.64:r==="external"?a?.42:.56:r==="tag"?a?.38:.5:0},c=r=>{if(r.kind==="cooc"||r.kind==="folder")return r.kind==="cooc"&&y.lens==="tag"||r.kind==="folder"&&y.lens==="folder"?.06:0;let a=H(r.source),s=H(r.target),f=A();return f!==null&&(a===f||s===f)?ee()?.72:.78:(f!==null||y.focusTag!==null||y.focusFolder!==null)&&(!W(a)||!W(s))?J(r.kind)*Ge:J(r.kind)},p=r=>{let a=H(r.source),s=H(r.target),f=A(),m=ee()?fr:o.current.ink;return f!==null&&(a===f||s===f)?we(o.current.accent,m,.45):m},w=r=>Re(p(r),c(r)),D=()=>({nodes:n.nodes,links:n.links}),F=r=>{let a=ee()?"rgba(255, 255, 255, 1)":Re(o.current.ink,.88);return W(r.id)?a:Re(a,Ge)},z=r=>ee()?W(r.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",Q=()=>{let r=e.controls?.().target;if(r&&(_={x:r.x,y:r.y,z:r.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let s={x:a.x-_.x,y:a.y-_.y,z:a.z-_.z},f=Math.hypot(s.x,s.y,s.z);if(f>1)return{dir:s,len:f}}}return{dir:ye,len:ze}},ge=r=>{if(t.use3d){if(typeof e.cameraPosition!="function")return;let a=j/ot(L.zoom,.4,2.5),{dir:s,len:f}=Q(),m=a/f;e.cameraPosition({x:_.x+s.x*m,y:_.y+s.y*m,z:_.z+s.z*m},_,Ee()?0:r),We();return}typeof e.zoom=="function"&&e.zoom(L.zoom,Ee()?0:r)},se=()=>{let r=hr(L.spread),a=kt.min+r*(kt.max-kt.min),s=vt.min+r*(vt.max-vt.min),f=new Map(n.nodes.map(M=>[M.id,M.degree])),m=Math.max(0,...f.values()),u=M=>et(M.degree,0,m),b=M=>$t(f.get(H(M.source))??0,f.get(H(M.target))??0,m),g=e.d3Force("charge");g?.strength&&g.strength(M=>a*qt(u(M))),g?.theta&&t.layout.chargeTheta!==void 0&&g.theta(t.layout.chargeTheta);let d=e.d3Force("link");d?.distance&&d.distance(M=>{let G=Ut(b(M),L.hubGravity);return y.lens==="tag"&&M.kind==="tag"?s*.72*G:M.kind==="cooc"||M.kind==="folder"?s:s*G}),d?.strength&&d.strength(M=>{if(M.kind==="cooc"||M.kind==="folder")return .015;let G=Yt(b(M),L.hubGravity);if(y.lens==="tag"&&M.kind==="tag")return .3*G;if(y.lens==="folder"){let $=wn(n.nodes,M.source),K=wn(n.nodes,M.target);if($!==null&&$===K)return .16*G}return M.kind==="tag"?.14*G:(M.kind==="external"?.16:.24)*G}),t.forceCollide&&e.d3Force("collision",t.forceCollide(M=>q(M)+ur).strength(.85).iterations(1));let v=e.d3Force("center");v?.strength&&v.strength(Jn);let x=Tt.min+r*(Tt.max-Tt.min),R=qr(n,y.lens,x),P=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",Ur(M=>R.get(M.id)??null,P)),t.use3d&&e.d3Force("flattenZ",null)},le=new Map,ce=new Map,me=new Map,k=new Map,C=new Map,I=new Map,U=new Map,ue=new Map,he=(r,a,s)=>{let f=`${Math.round(a*4)}|${s}`;return tt(ue,f,()=>{let m=new r.MeshBasicMaterial({color:s});return ee()&&m.color.multiplyScalar(2),{geometry:new r.SphereGeometry(a,6,6),material:m}})},be=new Map,Ve=new Map,st=(r,a,s)=>{let f=`${a}|${s}`;return tt(be,f,()=>new r.CylinderGeometry(a,a,1,s))},T=(r,a,s)=>{let f=`${a}|${s}`;return tt(Ve,f,()=>new r.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1}))},pe=()=>{if(!t.use3d||typeof e.nodeThreeObject!="function")return;let r=t.spriteText,a=t.three,s=t.lod.dotDistance,f=t.lod.nodeResolution??14,m=t.interaction.incrementalRepaint;if(le.clear(),ce.clear(),ue.clear(),k.clear(),C.clear(),I.clear(),m)for(let u of n.nodes)I.set(u.id,u);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(u=>{let b=q(u),g=oe(u),d=!1;if(a){if(ee()){let G=u.isHub?1.35:1.1,$=new a.MeshLambertMaterial({color:g,emissive:g,emissiveIntensity:G});le.set(u.id,{material:$,base:G,phase:u.phase}),m&&k.set(u.id,$),d=new a.Mesh(new a.SphereGeometry(b,f,f),$)}else{let G=new a.MeshBasicMaterial({color:g});m&&k.set(u.id,G),d=new a.Mesh(new a.SphereGeometry(b,f,f),G)}if(s!==void 0&&d!==!1){let G=he(a,b,g),$=new a.Mesh(G.geometry,G.material);C.set(u.id,$);let K=new a.LOD;K.addLevel(d,0),K.addLevel($,s),d=K}}let v=re(u);if(!r||!m&&!v)return d;let x=Array.from(u.name),R=window.innerWidth<700?24:48,P=new r(x.length>R?`${x.slice(0,R).join("")}\\u2026`:u.name);if(P.color=F(u),P.backgroundColor=!1,P.fontWeight="400",P.strokeWidth=ee()?.35:0,P.strokeColor=z(u),P.material.transparent=!0,P.material.depthWrite=!1,P.material.alphaTest=.01,P.material.toneMapped=!1,P.textHeight=X.has(u.id)?6.5:5.5,P.center.set(0,.5),P.position.x=b+2,P.position.y=0,m?(P.visible=v,ce.set(u.id,{sprite:P,node:u})):t.lod.labelDistance!==void 0&&ce.set(u.id,{sprite:P,node:u}),!a||d===!1)return P;let M=new a.Group;return M.add(d),M.add(P),M})},Nn=()=>{let r=t.three;if(!t.use3d||!r||typeof e.linkThreeObject!="function")return;let a=new r.Vector3(0,1,0),s=t.lod.linkResolution??5,f=t.lod.cullDistance,m=t.interaction.incrementalRepaint,u=t.lod.shareLinkResources;if(me.clear(),U.clear(),be.clear(),Ve.clear(),m)for(let b of n.links){let g=H(b.source),d=H(b.target);for(let v of[g,d]){let x=U.get(v);x?x.push(b):U.set(v,[b])}}e.linkThreeObject(b=>{let g=dr[b.kind]*L.edgeScale,d=u?T(r,p(b),c(b)):new r.MeshBasicMaterial({color:p(b),transparent:!0,opacity:c(b),depthWrite:!1}),v=u?st(r,g,s):new r.CylinderGeometry(g,g,1,s),x=new r.Mesh(v,d);return(f!==void 0||m)&&me.set(b,x),x}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((b,g)=>{let d=g.end.x-g.start.x,v=g.end.y-g.start.y,x=g.end.z-g.start.z,R=Math.sqrt(d*d+v*v+x*x);return b.position.x=(g.start.x+g.end.x)/2,b.position.y=(g.start.y+g.end.y)/2,b.position.z=(g.start.z+g.end.z)/2,b.scale.x=1,b.scale.y=Math.max(R,.01),b.scale.z=1,b.quaternion.setFromUnitVectors(a,new r.Vector3(d,v,x).normalize()),!0})},lt=()=>{!t.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(r=>{let a=A();if(a===null||Ee()||document.hidden)return 0;let s=H(r.source),f=H(r.target);return s===a||f===a?2:0})},ke=()=>{e.nodeVal(ne),e.nodeColor(oe),e.linkColor(w),e.linkWidth(r=>{let a=H(r.source),s=H(r.target),f=A(),m=L.edgeScale;return f!==null&&(a===f||s===f)?.7*m:r.kind==="wikilink"||r.kind==="external"?.5*m:(r.kind==="tag"?.35:.25)*m}),typeof e.linkOpacity=="function"&&e.linkOpacity(en),lt(),Nn(),t.use3d||e.nodeCanvasObjectMode(()=>"replace")},In=(r,a)=>{let s=Qt(i,r,a,I.keys()),f=new Set;for(let m of s){let u=I.get(m);if(!u)continue;let b=oe(u);k.get(m)?.color.set(b);let g=C.get(m);g&&t.three&&(g.material=he(t.three,q(u),b).material);let d=le.get(m);d&&d.material.emissive.set(b);let v=ce.get(m);v&&(v.sprite.color=F(u),v.sprite.strokeColor=z(u),v.sprite.strokeWidth=ee()?.35:0,v.sprite.visible=re(u));for(let x of U.get(m)??[]){if(f.has(x))continue;f.add(x);let R=me.get(x);R&&(t.lod.shareLinkResources&&t.three?R.material=T(t.three,p(x),c(x)):(R.material.color.set(p(x)),R.material.opacity=c(x)))}}},ct=r=>{if(t.interaction.incrementalRepaint&&t.use3d){lt(),In(r,A());return}ke(),t.use3d&&pe()},ut=()=>{let r=t.root.querySelector("[data-graph-legend]");if(!(r instanceof HTMLElement))return;let a=(u,b)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let d=document.createElement("span");d.className="graph-landing__dot",d.setAttribute("aria-hidden","true"),d.style.background=u;let v=document.createElement("span");return v.textContent=b,g.append(d,v),g},s=t.root.dataset.legendNotes??"Notes",f=t.root.dataset.legendTags??"Tags",m=t.root.dataset.legendLinks??"Links";r.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,f),a(o.current.external,m))},Dt=r=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[r.dataset.key]=r.dataset.value,s.setAttribute("aria-pressed",r.pressed?"true":"false");let f=document.createElement("span");if(f.className="graph-landing__facet-name",r.dotColor!==null){let u=document.createElement("span");u.className="graph-landing__dot",u.style.background=r.dotColor,f.append(u)}f.append(document.createTextNode(r.label));let m=document.createElement("span");return m.className="graph-landing__tag-count",m.textContent=String(r.count),s.append(f,m),a.append(s),a},_t=()=>{let r=t.root.querySelector("[data-graph-tags]");if(!(r instanceof HTMLElement))return;let a=t.root.querySelector("[data-graph-facet-label]"),s=t.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let m=t.root.dataset.folderRootLabel??"root",u=new Map;for(let g of n.nodes)g.type==="note"&&u.set(g.folder,(u.get(g.folder)??0)+1);let b=[...u.entries()].sort((g,d)=>d[1]-g[1]);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=b.length===0),r.replaceChildren(...b.map(([g,d])=>Dt({dataset:{key:"graphFolder",value:g},pressed:y.focusFolder===g,dotColor:yn(g,o.current),label:g==="root"?m:g,count:d})));return}let f=n.nodes.filter(m=>m.type==="tag").sort((m,u)=>u.degree-m.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=f.length===0),r.replaceChildren(...f.map(m=>Dt({dataset:{key:"graphTag",value:m.tag},pressed:y.focusTag===m.tag,dotColor:null,label:m.tag,count:m.degree})))},dt=!0,Gt=()=>{n.nodes.length>0&&e.zoomToFit?.(0,80),j=Q().len,ge(0),We()},Ht=0;e.onEngineStop(()=>{dt&&(Ht=window.requestAnimationFrame(()=>{dt=!1,Gt()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Ht));let xe=(r=!1)=>{e.warmupTicks(r&&t.layout.incrementalWarmup?0:t.layout.warmupTicks??(t.use3d?50:60)),e.graphData(D()),se(),ke(),pe(),ut(),_t(),kn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),O()},Pn=r=>{y.lens=r,r!=="tag"&&(y.focusTag=null),r!=="folder"&&(y.focusFolder=null),St(r),xe()},An=r=>{y.focusTag=y.focusTag===r?null:r,y.focusFolder=null,y.focusTag&&(y.lens="tag",St("tag")),xe()},Dn=r=>{y.focusFolder=y.focusFolder===r?null:r,y.focusTag=null,y.focusFolder&&(y.lens="folder",St("folder")),xe()},ft=()=>t.use3d?Gr(o.current):Pt(o.current),We=()=>{if(!t.use3d||!t.lod.fog||!t.three||typeof e.scene!="function")return;let r=Q().len;e.scene().fog=new t.three.Fog(ft(),r*sr,r*lr)};e.graphData(D()),e.backgroundColor(ft()),e.nodeLabel(r=>r.name),e.nodeRelSize(Qn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(er),typeof e.linkOpacity=="function"&&e.linkOpacity(en),se(),ke();let ve=t.root.querySelector("[data-graph-preview]"),$e=t.root.querySelector("[data-graph-preview-chip]"),qe=t.root.querySelector("[data-graph-preview-title]"),Ue=t.root.querySelector("[data-graph-preview-excerpt]"),Ye=0;window.addCleanup(()=>window.clearTimeout(Ye));let _n=r=>{if(!(ve instanceof HTMLElement)||!($e instanceof HTMLElement)||!(qe instanceof HTMLElement)||!(Ue instanceof HTMLElement))return;window.clearTimeout(Ye);let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",f=t.root.dataset.legendLinks??"Links";if(r.type==="tag"){let m=t.root.dataset.previewTagTemplate??"{n} notes";$e.textContent=s,qe.textContent=`#${r.tag}`,Ue.textContent=m.replace("{n}",String(r.degree))}else r.type==="external"?($e.textContent=f,qe.textContent=r.name,Ue.textContent=r.url):($e.textContent=a,qe.textContent=r.name,Ue.textContent=r.excerpt);ve.hidden=!1,ve.dataset.visible="true"},Rt=()=>{ve instanceof HTMLElement&&(window.clearTimeout(Ye),Ye=window.setTimeout(()=>{ve.dataset.visible="false",ve.hidden=!0},pr))};if(e.onNodeHover(r=>{let a=A();te=r?r.id:null,B===null&&(r?_n(r):Rt()),ct(a)}),t.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let s=e.controls();s.autoRotate=!1,s.autoRotateSpeed=rr}e.warmupTicks(t.layout.warmupTicks??50),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),t.bloomPass&&typeof e.postProcessingComposer=="function"&&(t.bloomPass.strength=ee()?an:0,t.bloomPass.radius=sn,t.bloomPass.threshold=ln,e.postProcessingComposer().addPass(t.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(ye,rn),L.zoom!==1&&ge(0)),pe(),We();{let s=0,f=()=>{if(!Ee()&&!document.hidden&&!S){let m=performance.now()/1e3*mr;for(let u of le.values())u.material.emissiveIntensity=u.base*(1+gr*Math.sin(m+u.phase))}s=window.requestAnimationFrame(f)};s=window.requestAnimationFrame(f),window.addCleanup(()=>window.cancelAnimationFrame(s))}let r=t.lod.labelDistance,a=t.lod.cullDistance;if((r!==void 0||a!==void 0||t.lod.dotDistance!==void 0)&&typeof e.cameraPosition=="function"){let s=e.cameraPosition.bind(e),f=0,m=()=>{let u=s();if(u&&typeof u.x=="number"&&typeof u.y=="number"&&typeof u.z=="number"){let b=Math.max(1,t.root.clientHeight||window.innerHeight);for(let[g,d]of C){let v=h.get(g);if(!v)continue;let x=Math.hypot(u.x-(v.x??0),u.y-(v.y??0),u.z-(v.z??0)),R=Math.max(1,x/b);d.scale.x=d.scale.y=d.scale.z=R}if(r!==void 0){let g=[];for(let d of ce.values()){let v=d.node.x??0,x=d.node.y??0,R=d.node.z??0,P=Math.hypot(u.x-v,u.y-x,u.z-R);if(d.sprite.visible=jt(re(d.node),A()===d.node.id||A()===null&&X.has(d.node.id),P,r),d.sprite.visible){let M=Array.from(d.node.name),G=window.innerWidth<700?24:48,$=M.length>G?`${M.slice(0,G).join("")}\\u2026`:d.node.name;d.sprite.text!==$&&(d.sprite.text=$);let K=e.graph2ScreenCoords?.(v,x,R);if(K&&A()===null){let Vt=Array.from($).length*9+12,Je=K.x>window.innerWidth*.6?K.x-Vt:K.x,ht=Je+Vt,Fn=g.some(bt=>Math.abs(bt.y-K.y)<22&&Je<bt.right&&ht>bt.left);d.sprite.visible=!Fn&&Je>=8&&ht<=window.innerWidth-8,d.sprite.visible&&g.push({left:Je,right:ht,y:K.y})}d.sprite.center.set(K&&K.x>window.innerWidth*.6?1:0,.5);let De=Math.max(5.5,P/b*11);Math.abs(d.sprite.textHeight-De)>.5&&(d.sprite.textHeight=De)}}}if(a!==void 0){let g=A();for(let[d,v]of me){let x=H(d.source),R=H(d.target);if(g!==null&&(x===g||R===g)){v.visible=!0;continue}let P=Math.hypot(u.x-v.position.x,u.y-v.position.y,u.z-v.position.z);v.visible=wt(P,a)!=="dot"}}}f=window.requestAnimationFrame(m)};f=window.requestAnimationFrame(m),window.addCleanup(()=>window.cancelAnimationFrame(f))}}else e.warmupTicks(t.layout.warmupTicks??60),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??180),e.nodeCanvasObject((r,a,s)=>{let f=q(r),m=r.x??0,u=r.y??0;if(a.save(),a.beginPath(),a.arc(m,u,f,0,Math.PI*2),a.fillStyle=oe(r),a.fill(),r.isHub&&(a.strokeStyle=W(r.id)?o.current.accent:Re(o.current.accent,Ge),a.lineWidth=1.2/s,a.stroke()),re(r)){let b=11.5/s;a.font=`${b}px ${o.current.font}`,a.fillStyle=W(r.id)?o.current.ink:Re(o.current.ink,Ge),a.textAlign="center",a.textBaseline="bottom",a.fillText(r.name,m,u-f-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((r,a,s)=>{let f=q(r)+8;s.beginPath(),s.arc(r.x??0,r.y??0,f,0,Math.PI*2),s.fillStyle=a,s.fill()});let Me=t.root.querySelector("[data-graph-inspect]"),Ke=t.root.querySelector("[data-graph-inspect-chip]"),je=t.root.querySelector("[data-graph-inspect-title]"),Xe=t.root.querySelector("[data-graph-inspect-excerpt]"),gt=t.root.querySelector("[data-graph-inspect-tags]"),mt=t.root.querySelector("[data-graph-inspect-connected]"),Y=t.root.querySelector("[data-graph-inspect-open]"),Te=r=>{t.root.dataset.railOpen=r?"true":"false";let a=t.root.querySelector("[data-graph-rail-toggle]"),s=t.root.querySelector("[data-graph-rail-scrim]"),f=t.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",r?"true":"false"),f instanceof HTMLElement&&f.setAttribute("aria-hidden",r?"false":"true"),s instanceof HTMLElement&&(s.hidden=!r)},de=()=>{let a=!Ee()&&!document.hidden&&!S;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),!a)for(let s of le.values())s.material.emissiveIntensity=s.base;lt()},Ft=window.matchMedia("(prefers-reduced-motion: reduce)");Ft.addEventListener("change",de),document.addEventListener("visibilitychange",de),window.addCleanup(()=>{Ft.removeEventListener("change",de),document.removeEventListener("visibilitychange",de)}),de();let Gn=r=>{let a=i.get(r.id)??new Set,s=[];for(let f of a){let m=n.nodes.find(u=>u.id===f);m&&s.push(m)}return s.sort((f,m)=>m.degree-f.degree)},Hn=r=>{if(!(Me instanceof HTMLElement)||!(Ke instanceof HTMLElement)||!(je instanceof HTMLElement)||!(Xe instanceof HTMLElement)||!(gt instanceof HTMLElement)||!(mt instanceof HTMLElement))return;let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",f=t.root.dataset.legendLinks??"Links",m=t.root.dataset.inspectEmpty??"No direct connections";r.type==="tag"?(Ke.textContent=s,je.textContent=`#${r.tag}`,Xe.textContent=(t.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(r.degree))):r.type==="external"?(Ke.textContent=f,je.textContent=r.name,Xe.textContent=r.url):(Ke.textContent=a,je.textContent=r.name,Xe.textContent=r.excerpt);let u=r.tags.map(g=>{let d=document.createElement("li");return d.textContent=g,d});gt.replaceChildren(...u),gt.hidden=u.length===0;let b=Gn(r).slice(0,12);if(b.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=m,mt.replaceChildren(g)}else mt.replaceChildren(...b.map(g=>{let d=document.createElement("li"),v=document.createElement("button");v.type="button",v.className="graph-landing__inspect-link",v.dataset.graphInspectId=g.id;let x=g.type==="tag"?s:g.type==="external"?f:a,R=document.createElement("span");R.textContent=x;let P=document.createElement("strong");return P.textContent=g.type==="tag"?`#${g.tag}`:g.name,v.append(R,P),d.append(v),d}));Y instanceof HTMLAnchorElement&&(r.type==="note"&&r.slug.length>0?(Y.hidden=!1,Y.href=Rr(r.slug).toString(),Y.textContent=t.root.dataset.inspectRead??"Read note",Y.removeAttribute("target"),Y.removeAttribute("rel")):r.type==="external"&&r.url.length>0?(Y.hidden=!1,Y.href=r.url,Y.textContent=t.root.dataset.inspectOpenExternal??"Open",Y.target="_blank",Y.rel="noopener noreferrer"):(Y.hidden=!0,Y.removeAttribute("href"),Y.removeAttribute("target"),Y.removeAttribute("rel"))),Me.hidden=!1,t.root.dataset.inspecting="true",Te(!1),Rt()},Se=()=>{let r=A();if(B=null,Me instanceof HTMLElement){let a=Me.contains(document.activeElement);Me.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}t.root.dataset.inspecting="false",te=null,de(),ct(r)},Rn=r=>{let a=A();B=r.id,de(),Hn(r),ct(a)},pt=(r,a=!1)=>{if(Z(r.id)&&xe(!0),Rn(r),a){_={x:r.x??0,y:r.y??0,z:r.z??0};let s=Ee()?0:450;t.use3d&&e.cameraPosition?(j=ze,e.cameraPosition({x:_.x+ye.x/L.zoom,y:_.y+ye.y/L.zoom,z:_.z+ye.z/L.zoom},_,s)):e.centerAt?.(_.x,_.y,s)}},Ze=!1;e.onNodeClick((r,a)=>{r&&(Ze=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),pt(r))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Se(),Te(!1)});let ie=t.root.querySelector("#graph-landing-mount");if(ie instanceof HTMLElement){let r=new ResizeObserver(()=>{e.width(ie.clientWidth),e.height(ie.clientHeight),B===null&&!dt&&Gt()});r.observe(ie),window.addCleanup(()=>r.disconnect());let a=null,s=0,f=g=>{a={x:g.clientX,y:g.clientY},Ze=!1,S=!0,de()},m=(g,d)=>{if(typeof e.graph2ScreenCoords!="function")return null;let v=ie.getBoundingClientRect(),x=g-v.left,R=d-v.top,P=null,M=484;for(let G of D().nodes){if(G.x===void 0||G.y===void 0)continue;let $=e.graph2ScreenCoords(G.x,G.y,G.z??0),De=($.x-x)**2+($.y-R)**2;De<M&&(M=De,P=G)}return P},u=g=>{let d=a;a=null,S=!1,de(),!(!d||(g.clientX-d.x)**2+(g.clientY-d.y)**2>25)&&(window.clearTimeout(s),s=window.setTimeout(()=>{if(Ze){Ze=!1;return}let x=m(g.clientX,g.clientY);x?pt(x):Se()},0))},b=()=>{a=null,S=!1,de()};ie.addEventListener("pointerdown",f,!0),ie.addEventListener("pointerup",u,!0),ie.addEventListener("pointercancel",b,!0),window.addCleanup(()=>{window.clearTimeout(s),ie.removeEventListener("pointerdown",f,!0),ie.removeEventListener("pointerup",u,!0),ie.removeEventListener("pointercancel",b,!0)})}kn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),ut(),_t(),y.lens!=="all"&&xe(),t.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ot=()=>{o.current=Sn(),e.backgroundColor(ft()),We(),t.bloomPass&&(t.bloomPass.strength=ee()?an:0,t.bloomPass.radius=sn,t.bloomPass.threshold=ln),ke(),pe(),ut()};document.addEventListener("themechange",Ot),window.addCleanup(()=>document.removeEventListener("themechange",Ot));let zt=r=>{let a=r.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Se();return}if(a.closest("[data-graph-rail-toggle]")){let d=t.root.dataset.railOpen!=="true";d&&Se(),Te(d);return}if(a.closest("[data-graph-rail-scrim]")){Te(!1);return}let s=a.closest("[data-graph-inspect-id]");if(s instanceof HTMLElement&&s.dataset.graphInspectId){let d=t.fullData.nodes.find(v=>v.id===s.dataset.graphInspectId);d&&pt(d,!0);return}let f=a.closest("[data-graph-lens]");if(f instanceof HTMLElement&&f.dataset.graphLens&&Vr(f.dataset.graphLens)){Pn(f.dataset.graphLens);return}let m=a.closest("[data-graph-tag]");if(m instanceof HTMLElement&&m.dataset.graphTag){An(m.dataset.graphTag);return}let u=a.closest("[data-graph-folder]");if(u instanceof HTMLElement&&u.dataset.graphFolder){Dn(u.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){O();return}let b=a.closest("[data-graph-labels]");if(b instanceof HTMLButtonElement){y.allLabels=!y.allLabels,b.setAttribute("aria-pressed",y.allLabels?"true":"false");let d=b.dataset.labelShow??"Labels",v=b.dataset.labelHide??"Labels",x=y.allLabels?v:d;b.title=x,b.setAttribute("aria-label",x),pe();return}if(a.closest("[data-graph-theme]")){let d=ee()?"light":"dark";document.documentElement.setAttribute("saved-theme",d),localStorage.setItem("theme",d),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${d}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:d}}));return}let g=a.closest("[data-graph-tags-toggle]");if(g instanceof HTMLButtonElement){let d=t.root.querySelector(".graph-landing__tags");if(d instanceof HTMLElement){let v=d.dataset.open==="true";d.dataset.open=v?"false":"true",g.setAttribute("aria-expanded",v?"false":"true")}}},Ce=t.root.querySelector("[data-graph-node-scale]"),Ne=t.root.querySelector("[data-graph-edge-scale]");if(Ce instanceof HTMLInputElement){Ce.value=String(Math.round(L.nodeScale*100));let r=()=>{L.nodeScale=Number(Ce.value)/100,Fe(L),se(),O(),ke(),t.use3d&&pe()};Ce.addEventListener("input",r),window.addCleanup(()=>Ce.removeEventListener("input",r))}if(Ne instanceof HTMLInputElement){Ne.value=String(Math.round(L.edgeScale*100));let r=()=>{L.edgeScale=Number(Ne.value)/100,Fe(L),ke()};Ne.addEventListener("input",r),window.addCleanup(()=>Ne.removeEventListener("input",r))}let Ie=t.root.querySelector("[data-graph-hub-gravity]");if(Ie instanceof HTMLInputElement){Ie.value=String(Math.round(L.hubGravity*100));let r=()=>{let a=Number(Ie.value)/100;L.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Fe(L),se(),O()};Ie.addEventListener("input",r),window.addCleanup(()=>Ie.removeEventListener("input",r))}let Pe=t.root.querySelector("[data-graph-zoom]");if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(L.zoom*100));let r=()=>{L.zoom=Number(Pe.value)/100,Fe(L),ge(200)};Pe.addEventListener("input",r),window.addCleanup(()=>Pe.removeEventListener("input",r))}let Ae=t.root.querySelector("[data-graph-spread]");if(Ae instanceof HTMLInputElement){Ae.value=String(Math.round(L.spread*100));let r=()=>{L.spread=Number(Ae.value)/100,Fe(L),se(),O()};Ae.addEventListener("input",r),window.addCleanup(()=>Ae.removeEventListener("input",r))}Te(!1),t.root.addEventListener("click",zt),window.addCleanup(()=>t.root.removeEventListener("click",zt));let Bt=r=>{if(r.key==="Escape"){if(t.root.dataset.railOpen==="true"){Te(!1);return}Se()}};window.addEventListener("keydown",Bt),window.addCleanup(()=>window.removeEventListener("keydown",Bt))}function Kr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function jr(){try{return window.localStorage.getItem(It)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Ct(e){try{if(e){window.localStorage.setItem(It,"stopped");return}window.localStorage.removeItem(It)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function Xr(e){let n=performance.now(),o=0,t=i=>{let l=Math.min(1,(i-n)/e.durationMs),h=l*l;e.apply(e.from+(e.to-e.from)*h),l<1&&(o=window.requestAnimationFrame(t))};return o=window.requestAnimationFrame(t),()=>{window.cancelAnimationFrame(o)}}function Zr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let t=window,i=t.onYouTubeIframeAPIReady;if(t.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let l=t.YT;if(!l||typeof l.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(l)},!document.querySelector("script[data-graph-youtube-api]")){let l=document.createElement("script");l.src=nr,l.async=!0,l.dataset.graphYoutubeApi="1",l.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(l)}})}function Jr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Qr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),t=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),l=e.querySelector("[data-graph-music-track-list]"),h=e.querySelector("[data-graph-music-status]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(l instanceof HTMLElement)||!(h instanceof HTMLElement))return;let E=e.dataset.audioStop??"Stop music",N=e.dataset.audioPlay??"Play music",V=e.dataset.musicLibraryOpen??"Open record collection",Z=e.dataset.musicLibraryClose??"Close record collection",y=e.dataset.musicCurrentTrack??"Current track",te=[];try{let k=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(k))for(let C of k){if(!C||typeof C!="object")continue;let I=C;typeof I.title!="string"||typeof I.url!="string"||I.artist!==void 0&&typeof I.artist!="string"||te.push({title:I.title,...typeof I.artist=="string"?{artist:I.artist}:{},url:I.url})}}catch{}let B=Kt(te);B.length===0&&B.push({title:"Ambient track",videoId:tn});let L=0,S=null,_=!1,j=null,O=!jr(),A=!1,X=!1,ne=()=>B[L]??B[0]??{title:"Ambient track",videoId:tn},re=k=>{n.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${k}/hqdefault.jpg")`)},q=()=>ne().videoId,W=()=>{l.replaceChildren(),B.forEach((k,C)=>{let I=document.createElement("button");I.type="button",I.className="graph-landing__music-track",I.dataset.graphMusicTrackIndex=String(C),I.setAttribute("aria-current",C===L?"true":"false");let U=document.createElement("img");U.className="graph-landing__music-track-cover",U.src=`https://i.ytimg.com/vi/${k.videoId}/hqdefault.jpg`,U.alt="",U.loading="lazy";let ue=document.createElement("span");ue.className="graph-landing__music-track-copy";let he=document.createElement("span");if(he.className="graph-landing__music-track-title",he.textContent=k.title,ue.appendChild(he),k.artist){let be=document.createElement("span");be.className="graph-landing__music-track-artist",be.textContent=k.artist,ue.appendChild(be)}I.append(U,ue),l.appendChild(I)}),h.textContent=`${y}: ${ne().title}`},ae=k=>{e.dataset.musicLibraryOpen=k?"true":"false",i.hidden=!k,i.setAttribute("aria-hidden",k?"false":"true"),t.setAttribute("aria-expanded",k?"true":"false"),t.setAttribute("aria-label",k?Z:V),t.title=k?Z:V},oe=k=>{n.setAttribute("aria-pressed",k?"true":"false"),n.setAttribute("aria-label",k?E:N),n.title=k?E:N,n.dataset.playing=k?"true":"false"},J=()=>{j&&(j(),j=null)},c=k=>{S&&S.setVolume(Math.max(0,Math.min(He,k)))},p=k=>{!O||A||(A=!0,oe(!0),k.unMute(),c(0),k.playVideo(),J(),j=Xr({from:0,to:He,durationMs:tr,apply:c}))},w=()=>{O=!1,A=!1,J(),Ct(!0),S&&(S.mute(),S.pauseVideo(),c(0)),oe(!1)},D=async()=>{if(!S)try{let k=await Zr();if(S)return;S=Jr({api:k,host:o,videoId:q(),onReady:C=>{_=!0,C.mute(),c(0),C.playVideo(),O&&X&&p(C)},onEnded:C=>{if(!O)return;L=(L+1)%B.length;let I=q();re(I),W(),C.loadVideoById(I),c(A?He:0)}})}catch(k){console.error("[graph-landing] ambient audio unavailable",k)}},F=k=>{let C=k.target;if(!(C instanceof Element&&C.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!O||A||Kr())){if(X=!0,_&&S){p(S);return}D()}},z=()=>{if(O&&A){w();return}if(X=!0,O=!0,Ct(!1),_&&S){p(S);return}D()},Q=k=>{if(!(!Number.isInteger(k)||k<0||k>=B.length)){if(L=k,re(q()),W(),ae(!1),O=!0,X=!0,Ct(!1),_&&S){S.loadVideoById(q()),A?(S.unMute(),S.playVideo(),c(He)):p(S);return}D()}},ge=()=>{let k=e.dataset.musicLibraryOpen!=="true";if(k){e.dataset.railOpen="false";let C=e.querySelector("[data-graph-rail-toggle]"),I=e.querySelector("#graph-landing-rail"),U=e.querySelector("[data-graph-rail-scrim]");C instanceof HTMLButtonElement&&C.setAttribute("aria-expanded","false"),I instanceof HTMLElement&&I.setAttribute("aria-hidden","true"),U instanceof HTMLElement&&(U.hidden=!0)}ae(k)},se=k=>{let C=k.target;if(!(C instanceof Element))return;let I=C.closest("[data-graph-music-track-index]");I instanceof HTMLButtonElement&&Q(Number(I.dataset.graphMusicTrackIndex))},le=k=>{if(e.dataset.musicLibraryOpen!=="true")return;let C=k.target;(!(C instanceof Element)||!C.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&ae(!1)},ce=k=>{k.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(ae(!1),k.stopImmediatePropagation())},me=()=>{if(S){if(document.hidden){J(),S.pauseVideo();return}O&&A&&(S.playVideo(),c(He))}};re(q()),oe(!1),W(),ae(!1),D(),n.addEventListener("click",z),t.addEventListener("click",ge),l.addEventListener("click",se),e.addEventListener("click",le),e.addEventListener("pointerdown",F,!0),e.addEventListener("touchstart",F,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",me),window.addEventListener("keydown",ce),window.addCleanup(()=>{n.removeEventListener("click",z),t.removeEventListener("click",ge),l.removeEventListener("click",se),e.removeEventListener("click",le),e.removeEventListener("pointerdown",F,!0),e.removeEventListener("touchstart",F,!0),document.removeEventListener("visibilitychange",me),window.removeEventListener("keydown",ce),J(),S&&(S.pauseVideo(),S.destroy(),S=null)})}async function eo(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1";let n=document.querySelector("#quartz-body > .search"),o=e.querySelector(".graph-landing__top-right");if(n instanceof HTMLElement&&o instanceof HTMLElement){let T=n.parentElement,pe=n.nextSibling;o.insertBefore(n,o.querySelector("[data-graph-theme]")),window.addCleanup(()=>{T?.isConnected&&n.isConnected&&T.insertBefore(n,pe?.parentNode===T?pe:null)})}Qr(e);let t=e.querySelector("#graph-landing-mount");if(!(t instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let i=e.querySelectorAll("[data-graph-counts]"),l=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",h=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",E=(e.dataset.localePrefixes??"").split(",").map(T=>T.trim()).filter(T=>T.length>0),N=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",V=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",Z=e.dataset.graphIndexPath??"",y=fe(e.dataset.maxRenderedNodes,T=>Number.parseInt(T,10)),te=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,B=Number.isFinite(te)?te:1,L=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,S=e.dataset.graphRenderMode==="3d"?"3d":"auto",_=e.dataset.graphLayoutFreezeAfterWarmup==="true",j=fe(e.dataset.graphLayoutWarmupTicks,T=>Number.parseInt(T,10)),O=fe(e.dataset.graphLayoutCooldownTicks,T=>Number.parseInt(T,10)),A=fe(e.dataset.graphLayoutChargeTheta,Number.parseFloat),X=e.dataset.graphLayoutIncrementalWarmup==="true",ne=fe(e.dataset.graphLodLabelDistance,Number.parseFloat),re=fe(e.dataset.graphLodDotDistance,Number.parseFloat),q=fe(e.dataset.graphLodCullDistance,Number.parseFloat),W=e.dataset.graphLodFog==="true",ae=fe(e.dataset.graphLodNodeResolution,T=>Number.parseInt(T,10)),oe=fe(e.dataset.graphLodLinkResolution,T=>Number.parseInt(T,10)),J=e.dataset.graphInteractionIncrementalRepaint==="true",c=e.dataset.graphLodShareLinkResources==="true",p=!1,w=null,D={current:Sn()},F=()=>{p=!0,w&&(w._destructor(),w=null),delete e.dataset.graphReady};window.addCleanup(F);let z=Dr();if(S==="3d"&&!z){Mt(t,"3D graph unavailable: WebGL is required.");return}let Q=S==="3d"||z,ge=Or(Q),se=Q?import(Yn).then(T=>T.default??null).catch(T=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",T),null)):Promise.resolve(null),le=Q?import(Kn).catch(T=>(console.error("[graph-landing] three unavailable; using default node spheres",T),null)):Promise.resolve(null),ce=Q?import(jn).then(T=>T.UnrealBloomPass?new T.UnrealBloomPass:null).catch(T=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",T),null)):Promise.resolve(null),me=Q?import(Un).then(T=>T.forceCollide??null).catch(T=>(console.error("[graph-landing] d3-force-3d collision force unavailable",T),null)):Promise.resolve(null);ge.catch(()=>{});let k;try{k=rt(V==="graphIndex"?await fetch(Z).then(T=>T.json()):await fetchData)}catch(T){throw Mt(t,"Graph could not load its index."),T}if(p)return;let C=Pr(br(k),{localeId:l,sourceLocale:h,prefixes:E},L),I=Xt(C,y),U=N.replace("{n}",String(C.nodes.length)).replace("{m}",String(C.links.length));for(let T of i)T.textContent=U;let ue;try{ue=await ge}catch(T){throw Mt(t,"Graph could not load. Check your network connection."),T}let[he,be,Ve,st]=await Promise.all([se,le,ce,me]);p||(t.replaceChildren(),w=ue(t),w.width(t.clientWidth),w.height(t.clientHeight),t.__graphLanding=w,t.__graphData=I,Yr(w,I,D,{use3d:Q,root:e,spriteText:he,bloomPass:Ve,three:be,forceCollide:st,fullData:C,expandHops:B,layout:{freezeAfterWarmup:_,warmupTicks:j,cooldownTicks:O,chargeTheta:A,incrementalWarmup:X},lod:{labelDistance:ne,dotDistance:re,cullDistance:q,fog:W,nodeResolution:ae,linkResolution:oe,shareLinkResources:c},interaction:{incrementalRepaint:J}}))}var to="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let t=o.dataset.preferredLocale;if(t)try{localStorage.setItem(to,t)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{eo()});\n';

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