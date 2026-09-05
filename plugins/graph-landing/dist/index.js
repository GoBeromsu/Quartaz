// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function Vt(e){return typeof e=="string"&&e.trim().toLowerCase().endsWith(".md")}function Qe(e,n,o){let t=Number.isFinite(e)?Math.max(0,e):0,i=Number.isFinite(n)?Math.max(0,n):0,l=Number.isFinite(o)?Math.max(i,o):i;if(l===i)return i>0?.5:0;let h=Math.min(l,Math.max(i,t));return(Math.sqrt(h)-Math.sqrt(i))/(Math.sqrt(l)-Math.sqrt(i))}function Wt(e,n,o){return Qe(Math.max(e,n),0,o)}function _e(e,n,o){return Number.isFinite(e)?Math.min(o,Math.max(n,e)):n}function $t(e){return 1+_e(e,0,1)*1.2}function Ut(e,n){let o=_e(e,0,1),t=_e(n,0,2);return Math.max(.5,1-o*.24*t)}function qt(e,n){let o=_e(e,0,1),t=_e(n,0,2);return Math.min(1.6,1+o*.3*t)}var On=/^[A-Za-z0-9_-]{6,20}$/,zn=new Set(["youtube.com","www.youtube.com","music.youtube.com","m.youtube.com"]),Bn=new Set(["youtu.be","www.youtu.be"]);function Je(e){return e&&On.test(e)?e:void 0}function Vn(e){if(!e)return;let n=e.trim(),o=Je(n);if(o)return o;let t;try{t=new URL(n)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:"||t.username||t.password||t.port)){if(zn.has(t.hostname)){if(t.pathname==="/watch")return Je(t.searchParams.get("v"));let i=t.pathname.split("/").filter(Boolean);if(i.length===2&&(i[0]==="shorts"||i[0]==="embed"))return Je(i[1])}if(Bn.has(t.hostname)){let i=t.pathname.split("/").filter(Boolean);if(i.length===1)return Je(i[0])}}}function Yt(e){let n=[],o=new Set;for(let t of e){let i=t.title.trim(),l=Vn(t.url);if(!i||!l||o.has(l))continue;o.add(l);let h=t.artist?.trim();h?n.push({title:i,artist:h,videoId:l}):n.push({title:i,videoId:l})}return n}function R(e){return typeof e=="string"?e:e.id}function bt(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function Kt(e,n,o,t){return n||e&&bt(o,t)==="full"}function et(e,n,o){let t=e.get(n);if(t)return t;let i=o();return e.set(n,i),i}function de(e,n){let o=e?n(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function jt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let t=[...e.nodes].sort((h,L)=>L.degree!==h.degree?L.degree-h.degree:h.id<L.id?-1:h.id>L.id?1:0).slice(0,Math.max(0,n)),i=new Set(t.map(h=>h.id)),l=e.links.filter(h=>{let L=R(h.source),C=R(h.target);return i.has(L)&&i.has(C)});return{nodes:t,links:l}}function Xt(e,n,o,t){let i=new Set,l=Math.max(0,Math.floor(t));if(l<=0)return i;let h=new Set([o]),L=new Set([o]);for(let C=0;C<l;C+=1){let V=new Set;for(let X of L)for(let y of e.get(X)??[])h.has(y)||(h.add(y),V.add(y),n.has(y)||i.add(y));L=V}return i}var Wn=2.399963229728653,ht=20;function Zt(e,n,o){let t=e.x??0,i=e.y??0,l=e.z??0,h=n*Wn;return{x:t+ht*Math.cos(h),y:i+ht*Math.sin(h),z:o?l+ht*Math.sin(h*.5):l}}function Jt(e,n,o,t){if(n===o)return new Set;if(n===null||o===null)return new Set(t);let i=new Set([n,o]);for(let l of e.get(n)??[])i.add(l);for(let l of e.get(o)??[])i.add(l);return i}var at="0.179.1",$n="https://esm.sh/force-graph@1.51.4",Un=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${at}`,qn="https://esm.sh/d3-force-3d@3.0.6",Yn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${at}`,Kn=`https://esm.sh/three@${at}`,jn=`https://esm.sh/three@${at}/examples/jsm/postprocessing/UnrealBloomPass.js`,Xn=8,Zn=6;var Oe=1,St=4,Jn=.05,Qn=2.6,er=1,Qt=1,Ge=.18,kn="graph-landing:lens",vn="graph-landing:tune",Ct="graph-landing:ambient-audio",en="UDVtMYqUAyw",He=12,tr=28e3,nr="https://www.youtube.com/iframe_api",rr=.18,tn=1.25,or=1.25,ar=1.15,ir=.55,be={x:330,y:235,z:565},nn={x:0,y:0,z:0},ze=Math.hypot(be.x,be.y,be.z),sr=300/ze,lr=1600/ze,rn=2.6,cr=7,on=.8,an=.16,sn=1,ur=2.4,dr={wikilink:.65,tag:.45,external:.55,cooc:.08,folder:.08},fr="#a8b0c2",ln={min:80,max:200},cn={min:40,max:110},un={min:160,max:280},dn={min:90,max:170},fn=220,gn=2,gr=.06,mr=.8,pr=350,yt={min:-100,max:-190},wt={min:72,max:116},kt={min:130,max:260};function hr(e){return rt(e-.5,0,1)}function nt(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function vt(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function br(e){let n=[];for(let o of Object.values(e)){let t=nt(o);if(!Vt(t.filePath))continue;let i=typeof t.slug=="string"?t.slug:"";if(i.length===0)continue;let l=t.multilingual,h=l&&typeof l=="object"?l:void 0;n.push({slug:i,title:typeof t.title=="string"?t.title:i,links:vt(t.links),tags:vt(t.tags),externalLinks:vt(t.externalLinks),content:typeof t.excerpt=="string"?t.excerpt:typeof t.content=="string"?t.content:"",multilingual:h})}return n}function yr(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=fn?n:`${n.slice(0,fn).trimEnd()}\\u2026`}function Be(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function mn(e){return Be(e)/(2*Math.PI)}function tt(e,n,o){let t=Be(e),i=Math.acos(2*mn(`${e}:phi`)-1),l=n+(o-n)*mn(`${e}:r`);return{x:l*Math.sin(i)*Math.cos(t),y:l*Math.sin(i)*Math.sin(t),z:l*Math.cos(i)}}function Tn(e){return e==="index"||e.endsWith("/index")}function Ln(e){return e==="tags"||e.startsWith("tags/")}function wr(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function En(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function Tt(e,n){return e.multilingual?.locale?e.multilingual.locale:En(e.slug,n).locale}function kr(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${En(e.slug,n).permalink}`}function vr(e,n){let o=e.find(t=>Tt(t,n.prefixes)===n.localeId);if(o)return o;if(n.localeId===n.sourceLocale)return e.find(t=>Tt(t,n.prefixes)===n.sourceLocale)??e.find(t=>Tt(t,n.prefixes)===void 0)}function rt(e,n,o){return Math.min(o,Math.max(n,e))}function pn(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function Tr(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function It(e){return Tr(e).trim().toLowerCase()}function Lr(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Er(e){let n=e.trim();return n.length===0||Lr(n)||Ln(n)||Tn(n)?!0:It(n).length===0}function xr(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function xn(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Mr(e,n){let o=xn(e);return o===null?!1:!n.includes(new URL(o).hostname)}function hn(e){return`external:${e}`}function Sr(e,n){let o=new URL(e),t=o.hostname.replace(/^www\\./,""),i=o.pathname;return(n.get(t)??0)>1&&i.length>1?`${t}${i}`:t}function Cr(e){let n=new Map,o=new Map;for(let t of e){let i=It(t.slug);i.length>0&&!n.has(i)&&n.set(i,t.slug);let l=t.title.trim().toLowerCase();l.length>0&&!o.has(l)&&o.set(l,t.slug);let h=l.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,t.slug)}return{byBasename:n,byTitle:o}}function Nr(e,n,o){if(n.has(e))return e;let t=It(e),i=o.byBasename.get(t);if(i)return i;let l=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(t);return l||null}function Ir(e,n){return e.length===0?"":[...e].sort((t,i)=>(n.get(i)??0)-(n.get(t)??0))[0]??""}function Pr(e,n,o=void 0){let t=e.filter(c=>!Tn(c.slug)&&!Ln(c.slug)&&!wr(c)),i=new Map;for(let c of t){let p=kr(c,n.prefixes),v=i.get(p)??[];v.push(c),i.set(p,v)}let l=[];for(let c of i.values()){let p=vr(c,n);p&&l.push(p)}let h=new Set(l.map(c=>c.slug)),L=Cr(l),C=new Map,V=[],X=new Set,y=new Map,oe=c=>{C.set(c,(C.get(c)??0)+1)},O=(c,p,v)=>c<p?`${c}|${p}|${v}`:`${p}|${c}|${v}`,T=(c,p,v,D)=>{let _=O(c,p,v);return X.has(_)?!1:(X.add(_),V.push({source:c,target:p,kind:v}),D&&(oe(c),oe(p)),!0)};for(let c of l)for(let p of c.links){if(Er(p))continue;let v=Nr(p,h,L);v!==null&&v!==c.slug&&T(c.slug,v,"wikilink",!0)}let S=xr(),G=new Set;for(let c of l)for(let p of c.externalLinks){let v=xn(p);v===null||!Mr(v,S)||(G.add(v),T(c.slug,hn(v),"external",!0))}let Z=new Map;for(let c of G){let p=new URL(c).hostname.replace(/^www\\./,"");Z.set(p,(Z.get(p)??0)+1)}let z=new Set,A=new Map;for(let c of l)for(let p of c.tags){y.set(p,(y.get(p)??0)+1);let v=`tag:${p}`;z.add(v),T(c.slug,v,"tag",!0);let D=A.get(p)??[];D.push(c.slug),A.set(p,D)}if(o!==!1){let c=o?.maxTagsPerNote,p=o?.maxEdges,v=0;e:for(let D of l)if(!(D.tags.length<2)&&!(c!==void 0&&D.tags.length>c))for(let _=0;_<D.tags.length;_+=1)for(let B=_+1;B<D.tags.length;B+=1){if(p!==void 0&&v>=p)break e;T(`tag:${D.tags[_]}`,`tag:${D.tags[B]}`,"cooc",!1)&&(v+=1)}}let J=new Map;for(let c of l){let p=pn(c.slug);if(p==="root")continue;let v=J.get(p)??[];v.push(c.slug),J.set(p,v)}for(let c of J.values()){if(c.length<2)continue;let p=[...c].sort();for(let v=0;v<p.length;v+=1){let D=p[(v+1)%p.length],_=p[(v+gn)%p.length],B=p[v];B===void 0||D===void 0||(B!==D&&!X.has(O(B,D,"wikilink"))&&T(B,D,"folder",!1),p.length>gn+1&&_!==void 0&&B!==_&&!X.has(O(B,_,"wikilink"))&&T(B,_,"folder",!1))}}let ee=[...C.values()],te=ee.length>0?Math.min(...ee):0,U=ee.length>0?Math.max(...ee):0,W=c=>{let p=Qe(C.get(c)??0,te,U);return Oe+p*(St-Oe)},ae=[...l].sort((c,p)=>(C.get(p.slug)??0)-(C.get(c.slug)??0)),ne=new Set(ae.filter(c=>(C.get(c.slug)??0)>0).slice(0,Xn).map(c=>c.slug)),q=l.map(c=>{let p=ne.has(c.slug),v=p?tt(c.slug,cn.min,cn.max):tt(c.slug,ln.min,ln.max);return{id:c.slug,name:c.title,type:"note",val:W(c.slug),degree:C.get(c.slug)??0,isHub:p,tag:"",slug:c.slug,url:"",folder:pn(c.slug),tags:c.tags,dominantTag:Ir(c.tags,y),excerpt:yr(c.content),phase:Be(c.slug),x:v.x,y:v.y,z:v.z}});for(let c of G){let p=hn(c),v=tt(p,un.min,un.max);q.push({id:p,name:Sr(c,Z),type:"external",val:W(p)*ir,degree:C.get(p)??0,isHub:!1,tag:"",slug:"",url:c,folder:"",tags:[],dominantTag:"",excerpt:c,phase:Be(p),x:v.x,y:v.y,z:v.z})}for(let c of z){let p=c.slice(4),v=tt(c,dn.min,dn.max);q.push({id:c,name:p,type:"tag",val:rt(W(c)*.7,Oe,St),degree:C.get(c)??0,isHub:!1,tag:p,slug:`tags/${p}`,url:"",folder:"tag",tags:[p],dominantTag:p,excerpt:"",phase:Be(c),x:v.x,y:v.y,z:v.z})}return{nodes:q,links:V}}function Lt(e){let n=new Map,o=(t,i)=>{let l=n.get(t)??new Set;l.add(i),n.set(t,l)};for(let t of e){if(t.kind!=="wikilink"&&t.kind!=="tag"&&t.kind!=="external")continue;let i=R(t.source),l=R(t.target);o(i,l),o(l,i)}return n}function Le(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",(document.querySelector(".graph-landing")??document.body).appendChild(o);let t=getComputedStyle(o).color;return o.remove(),t||n}function Mn(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:Le("--graph-backdrop","#ffffff"),ink:Le("--graph-text","#0f0f0f"),accent:Le("--graph-accent","#a52142"),tertiary:Le("--graph-external","#c75b75"),gray:Le("--graph-muted","#737373"),external:Le("--graph-external","#c75b75"),font:e.length>0?e:"Inter, sans-serif"}}function Ee(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ar(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Dr(){return Ar()}function Q(){return document.documentElement.getAttribute("saved-theme")==="dark"}function ot(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}return null}function Re(e,n){let o=ot(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function ye(e,n,o){let t=ot(e),i=ot(n);if(!t||!i)return e;let l=(h,L)=>Math.round(h+(L-h)*o);return`rgb(${l(t.r,i.r)}, ${l(t.g,i.g)}, ${l(t.b,i.b)})`}function Nt(e){return e.bg}function _r(e){let n=ot(e);if(!n)return e;let o=t=>{let i=t/255,l=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.ceil(l*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Gr(e){return _r(Nt(e))}function Sn(e,n){let o=0;for(let t of e)o=o*31+t.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function bn(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Sn(e,[n.accent,n.tertiary,n.ink,n.gray])}function Hr(e,n){return e.length===0?n.ink:Sn(e,[n.accent,n.tertiary])}function Rr(e){let n=e.split("/").map(l=>encodeURIComponent(l)).join("/"),o=document.querySelector("base")?.getAttribute("href"),t="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(t=o.endsWith("/")?o:`${o}/`);let i=`${t}${n}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function Fr(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function Et(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Or(e){let o=await import(e?Un:$n);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Fr(o)}function zr(){try{let e=sessionStorage.getItem(kn);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Br(){let e={nodeScale:1,edgeScale:1,zoom:1,spread:1,hubGravity:1.5};try{let n=sessionStorage.getItem(vn);if(!n)return e;let o=nt(JSON.parse(n)),t=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,l=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread,L=typeof o.hubGravity=="number"&&Number.isFinite(o.hubGravity)?Math.min(2,Math.max(0,o.hubGravity)):e.hubGravity;return{nodeScale:t,edgeScale:i,zoom:l,spread:h,hubGravity:L}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Fe(e){try{sessionStorage.setItem(vn,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function xt(e){try{sessionStorage.setItem(kn,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function Vr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Wr(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function $r(e,n){return e.type==="note"&&e.folder===n}function yn(e,n){let o=R(n),t=e.find(i=>i.id===o);return!t||t.type!=="note"?null:t.folder}function Ur(e,n,o){let t=new Map;if(n==="folder"){let i=[...new Set(e.nodes.filter(l=>l.type==="note").map(l=>l.folder))];return i.forEach((l,h)=>{let L=Math.PI*2*h/Math.max(i.length,1),C={x:Math.cos(L)*o,y:Math.sin(L)*o,z:0};for(let V of e.nodes)V.type==="note"&&V.folder===l&&t.set(V.id,C)}),t}if(n==="tag"){let i=e.nodes.filter(h=>h.type==="tag"),l=new Map;i.forEach((h,L)=>{let C=Math.PI*2*L/Math.max(i.length,1);l.set(h.tag,{x:Math.cos(C)*o,y:Math.sin(C)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let L=l.get(h.tag);L&&t.set(h.id,L)}else if(h.dominantTag.length>0){let L=l.get(h.dominantTag);L&&t.set(h.id,L)}}return t}function qr(e,n){let o=[],t=i=>{let l=n*i;for(let h of o){let L=e(h);L&&(h.vx=(h.vx??0)+(L.x-(h.x??0))*l,h.vy=(h.vy??0)+(L.y-(h.y??0))*l,h.vz=(h.vz??0)+(L.z-(h.z??0))*l)}};return t.initialize=i=>{o=i},t}function wn(e,n,o,t){for(let i of e.querySelectorAll(n)){if(!(i instanceof HTMLElement))continue;let l=i.getAttribute(t);i.setAttribute("aria-pressed",l===o?"true":"false")}}function Yr(e,n,o,t){let i=Lt(n.links),l=(r,a,s)=>r<a?`${r}|${a}|${s}`:`${a}|${r}|${s}`,h=new Map(t.fullData.nodes.map(r=>[r.id,r])),L=new Map,C=new Set,V=new Set;t.fullData!==n&&(L=Lt(t.fullData.links),C=new Set(n.nodes.map(r=>r.id)),V=new Set(n.links.map(r=>l(R(r.source),R(r.target),r.kind))));let X=r=>{if(t.fullData===n)return!1;let a=Xt(L,C,r,t.expandHops);if(!C.has(r)&&h.has(r)&&a.add(r),a.size===0)return!1;n.nodes=[...n.nodes],n.links=[...n.links];let s=t.layout.incrementalWarmup?h.get(r):void 0,f=0;for(let m of a){let u=h.get(m);if(u){if(s&&u.id!==s.id){let b=Zt(s,f,t.use3d);u.x=b.x,u.y=b.y,u.z=b.z,u.vx=u.vy=u.vz=0,f+=1}n.nodes.push(u),C.add(m)}}for(let m of t.fullData.links){let u=R(m.source),b=R(m.target);if(!C.has(u)||!C.has(b))continue;let g=l(u,b,m.kind);V.has(g)||(V.add(g),n.links.push(m))}return i=Lt(n.links),!0},y={lens:zr(),allLabels:!1,focusTag:null,focusFolder:null},oe=null,O=null,T=Br(),S=!1,G=nn,Z=ze,z=()=>{e.cooldownTicks(t.layout.freezeAfterWarmup?90:t.layout.cooldownTicks??200),e.d3ReheatSimulation()},A=()=>O??oe,J=new Set(n.nodes.filter(r=>r.type==="note").sort((r,a)=>a.degree-r.degree).slice(0,Zn).map(r=>r.id)),ee=r=>{let a=r.val;return r.isHub&&(a*=tn),y.lens==="tag"&&r.type==="tag"&&(a*=or),y.focusTag&&r.id===`tag:${y.focusTag}`&&(a*=ar),a},te=r=>{let a=A();return a===r.id?!0:a!==null?i.get(a)?.has(r.id)??!1:y.allLabels||J.has(r.id)},U=r=>{let a=St*tn,s=rt((ee(r)-Oe)/(a-Oe),0,1);return(rn+s*(cr-rn))*T.nodeScale},W=r=>{let a=A();if(a!==null)return a===r||(i.get(a)?.has(r)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let s=n.nodes.find(f=>f.id===r);return s?y.focusFolder!==null?$r(s,y.focusFolder):y.focusTag!==null&&Wr(s,y.focusTag):!1},ae=r=>r.type==="external"?o.current.external:y.lens==="tag"?r.type==="tag"?o.current.tertiary:Hr(r.dominantTag,o.current):y.lens==="folder"?r.type==="tag"?o.current.tertiary:bn(r.folder,o.current):y.lens==="hub"?r.type==="tag"?o.current.tertiary:r.isHub?o.current.accent:o.current.ink:r.type==="tag"?o.current.tertiary:o.current.ink,ne=r=>{let a=A();if(a!==null&&(a===r.id||(i.get(a)?.has(r.id)??!1)))return o.current.accent;let s=ae(r);return W(r.id)?Q()?r.type==="external"?ye(o.current.external,"#ffffff",.18):r.type==="tag"?ye(o.current.tertiary,"#ffffff",.22):r.isHub?ye("#fff3e4",o.current.accent,.1):ye("#ffffff",o.current.accent,.12):r.isHub?ye(o.current.ink,o.current.accent,.22):s:ye(s,Nt(o.current),1-Ge)},q=r=>{let a=Q();return r==="wikilink"?a?.52:.64:r==="external"?a?.42:.56:r==="tag"?a?.38:.5:0},c=r=>{if(r.kind==="cooc"||r.kind==="folder")return r.kind==="cooc"&&y.lens==="tag"||r.kind==="folder"&&y.lens==="folder"?.06:0;let a=R(r.source),s=R(r.target),f=A();return f!==null&&(a===f||s===f)?Q()?.72:.78:(f!==null||y.focusTag!==null||y.focusFolder!==null)&&(!W(a)||!W(s))?q(r.kind)*Ge:q(r.kind)},p=r=>{let a=R(r.source),s=R(r.target),f=A(),m=Q()?fr:o.current.ink;return f!==null&&(a===f||s===f)?ye(o.current.accent,m,.45):m},v=r=>Re(p(r),c(r)),D=()=>({nodes:n.nodes,links:n.links}),_=r=>{let a=Q()?"rgba(255, 255, 255, 1)":Re(o.current.ink,.88);return W(r.id)?a:Re(a,Ge)},B=r=>Q()?W(r.id)?"rgba(0, 0, 0, 0.95)":"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",ge=()=>{let r=e.controls?.().target;if(r&&(G={x:r.x,y:r.y,z:r.z}),typeof e.cameraPosition=="function"){let a=e.cameraPosition();if(a&&typeof a.x=="number"&&typeof a.y=="number"&&typeof a.z=="number"){let s={x:a.x-G.x,y:a.y-G.y,z:a.z-G.z},f=Math.hypot(s.x,s.y,s.z);if(f>1)return{dir:s,len:f}}}return{dir:be,len:ze}},me=r=>{if(t.use3d){if(typeof e.cameraPosition!="function")return;let a=Z/rt(T.zoom,.4,2.5),{dir:s,len:f}=ge(),m=a/f;e.cameraPosition({x:G.x+s.x*m,y:G.y+s.y*m,z:G.z+s.z*m},G,Ee()?0:r),Ve();return}typeof e.zoom=="function"&&e.zoom(T.zoom,Ee()?0:r)},le=()=>{let r=hr(T.spread),a=yt.min+r*(yt.max-yt.min),s=wt.min+r*(wt.max-wt.min),f=new Map(n.nodes.map(M=>[M.id,M.degree])),m=Math.max(0,...f.values()),u=M=>Qe(M.degree,0,m),b=M=>Wt(f.get(R(M.source))??0,f.get(R(M.target))??0,m),g=e.d3Force("charge");g?.strength&&g.strength(M=>a*$t(u(M))),g?.theta&&t.layout.chargeTheta!==void 0&&g.theta(t.layout.chargeTheta);let d=e.d3Force("link");d?.distance&&d.distance(M=>{let H=Ut(b(M),T.hubGravity);return y.lens==="tag"&&M.kind==="tag"?s*.72*H:M.kind==="cooc"||M.kind==="folder"?s:s*H}),d?.strength&&d.strength(M=>{if(M.kind==="cooc"||M.kind==="folder")return .015;let H=qt(b(M),T.hubGravity);if(y.lens==="tag"&&M.kind==="tag")return .3*H;if(y.lens==="folder"){let $=yn(n.nodes,M.source),j=yn(n.nodes,M.target);if($!==null&&$===j)return .16*H}return M.kind==="tag"?.14*H:(M.kind==="external"?.16:.24)*H}),t.forceCollide&&e.d3Force("collision",t.forceCollide(M=>U(M)+ur).strength(.85).iterations(1));let k=e.d3Force("center");k?.strength&&k.strength(Jn);let x=kt.min+r*(kt.max-kt.min),F=Ur(n,y.lens,x),P=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",qr(M=>F.get(M.id)??null,P)),t.use3d&&e.d3Force("flattenZ",null)},ce=new Map,ie=new Map,re=new Map,w=new Map,I=new Map,N=new Map,Y=new Map,fe=new Map,pe=(r,a,s)=>{let f=`${Math.round(a*4)}|${s}`;return et(fe,f,()=>{let m=new r.MeshBasicMaterial({color:s});return Q()&&m.color.multiplyScalar(2),{geometry:new r.SphereGeometry(a,6,6),material:m}})},he=new Map,E=new Map,Cn=(r,a,s)=>{let f=`${a}|${s}`;return et(he,f,()=>new r.CylinderGeometry(a,a,1,s))},Pt=(r,a,s)=>{let f=`${a}|${s}`;return et(E,f,()=>new r.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1}))},we=()=>{if(!t.use3d||typeof e.nodeThreeObject!="function")return;let r=t.spriteText,a=t.three,s=t.lod.dotDistance,f=t.lod.nodeResolution??14,m=t.interaction.incrementalRepaint;if(ce.clear(),ie.clear(),fe.clear(),w.clear(),I.clear(),N.clear(),m)for(let u of n.nodes)N.set(u.id,u);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(u=>{let b=U(u),g=ne(u),d=!1;if(a){if(Q()){let H=u.isHub?1.35:1.1,$=new a.MeshLambertMaterial({color:g,emissive:g,emissiveIntensity:H});ce.set(u.id,{material:$,base:H,phase:u.phase}),m&&w.set(u.id,$),d=new a.Mesh(new a.SphereGeometry(b,f,f),$)}else{let H=new a.MeshBasicMaterial({color:g});m&&w.set(u.id,H),d=new a.Mesh(new a.SphereGeometry(b,f,f),H)}if(s!==void 0&&d!==!1){let H=pe(a,b,g),$=new a.Mesh(H.geometry,H.material);I.set(u.id,$);let j=new a.LOD;j.addLevel(d,0),j.addLevel($,s),d=j}}let k=te(u);if(!r||!m&&!k)return d;let x=Array.from(u.name),F=window.innerWidth<700?24:48,P=new r(x.length>F?`${x.slice(0,F).join("")}\\u2026`:u.name);if(P.color=_(u),P.backgroundColor=!1,P.fontWeight="400",P.strokeWidth=Q()?.35:0,P.strokeColor=B(u),P.material.transparent=!0,P.material.depthWrite=!1,P.material.alphaTest=.01,P.material.toneMapped=!1,P.textHeight=J.has(u.id)?6.5:5.5,P.center.set(0,.5),P.position.x=b+2,P.position.y=0,m?(P.visible=k,ie.set(u.id,{sprite:P,node:u})):t.lod.labelDistance!==void 0&&ie.set(u.id,{sprite:P,node:u}),!a||d===!1)return P;let M=new a.Group;return M.add(d),M.add(P),M})},Nn=()=>{let r=t.three;if(!t.use3d||!r||typeof e.linkThreeObject!="function")return;let a=new r.Vector3(0,1,0),s=t.lod.linkResolution??5,f=t.lod.cullDistance,m=t.interaction.incrementalRepaint,u=t.lod.shareLinkResources;if(re.clear(),Y.clear(),he.clear(),E.clear(),m)for(let b of n.links){let g=R(b.source),d=R(b.target);for(let k of[g,d]){let x=Y.get(k);x?x.push(b):Y.set(k,[b])}}e.linkThreeObject(b=>{let g=dr[b.kind]*T.edgeScale,d=u?Pt(r,p(b),c(b)):new r.MeshBasicMaterial({color:p(b),transparent:!0,opacity:c(b),depthWrite:!1}),k=u?Cn(r,g,s):new r.CylinderGeometry(g,g,1,s),x=new r.Mesh(k,d);return(f!==void 0||m)&&re.set(b,x),x}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((b,g)=>{let d=g.end.x-g.start.x,k=g.end.y-g.start.y,x=g.end.z-g.start.z,F=Math.sqrt(d*d+k*k+x*x);return b.position.x=(g.start.x+g.end.x)/2,b.position.y=(g.start.y+g.end.y)/2,b.position.z=(g.start.z+g.end.z)/2,b.scale.x=1,b.scale.y=Math.max(F,.01),b.scale.z=1,b.quaternion.setFromUnitVectors(a,new r.Vector3(d,k,x).normalize()),!0})},it=()=>{!t.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(r=>{let a=A();if(a===null||Ee()||document.hidden)return 0;let s=R(r.source),f=R(r.target);return s===a||f===a?2:0})},ke=()=>{e.nodeVal(ee),e.nodeColor(ne),e.linkColor(v),e.linkWidth(r=>{let a=R(r.source),s=R(r.target),f=A(),m=T.edgeScale;return f!==null&&(a===f||s===f)?.7*m:r.kind==="wikilink"||r.kind==="external"?.5*m:(r.kind==="tag"?.35:.25)*m}),typeof e.linkOpacity=="function"&&e.linkOpacity(Qt),it(),Nn(),t.use3d||e.nodeCanvasObjectMode(()=>"replace")},In=(r,a)=>{let s=Jt(i,r,a,N.keys()),f=new Set;for(let m of s){let u=N.get(m);if(!u)continue;let b=ne(u);w.get(m)?.color.set(b);let g=I.get(m);g&&t.three&&(g.material=pe(t.three,U(u),b).material);let d=ce.get(m);d&&d.material.emissive.set(b);let k=ie.get(m);k&&(k.sprite.color=_(u),k.sprite.strokeColor=B(u),k.sprite.strokeWidth=Q()?.35:0,k.sprite.visible=te(u));for(let x of Y.get(m)??[]){if(f.has(x))continue;f.add(x);let F=re.get(x);F&&(t.lod.shareLinkResources&&t.three?F.material=Pt(t.three,p(x),c(x)):(F.material.color.set(p(x)),F.material.opacity=c(x)))}}},st=r=>{if(t.interaction.incrementalRepaint&&t.use3d){it(),In(r,A());return}ke(),t.use3d&&we()},lt=()=>{let r=t.root.querySelector("[data-graph-legend]");if(!(r instanceof HTMLElement))return;let a=(u,b)=>{let g=document.createElement("span");g.className="graph-landing__legend-item";let d=document.createElement("span");d.className="graph-landing__dot",d.setAttribute("aria-hidden","true"),d.style.background=u;let k=document.createElement("span");return k.textContent=b,g.append(d,k),g},s=t.root.dataset.legendNotes??"Notes",f=t.root.dataset.legendTags??"Tags",m=t.root.dataset.legendLinks??"Links";r.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,f),a(o.current.external,m))},At=r=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[r.dataset.key]=r.dataset.value,s.setAttribute("aria-pressed",r.pressed?"true":"false");let f=document.createElement("span");if(f.className="graph-landing__facet-name",r.dotColor!==null){let u=document.createElement("span");u.className="graph-landing__dot",u.style.background=r.dotColor,f.append(u)}f.append(document.createTextNode(r.label));let m=document.createElement("span");return m.className="graph-landing__tag-count",m.textContent=String(r.count),s.append(f,m),a.append(s),a},Dt=()=>{let r=t.root.querySelector("[data-graph-tags]");if(!(r instanceof HTMLElement))return;let a=t.root.querySelector("[data-graph-facet-label]"),s=t.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let m=t.root.dataset.folderRootLabel??"root",u=new Map;for(let g of n.nodes)g.type==="note"&&u.set(g.folder,(u.get(g.folder)??0)+1);let b=[...u.entries()].sort((g,d)=>d[1]-g[1]);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=b.length===0),r.replaceChildren(...b.map(([g,d])=>At({dataset:{key:"graphFolder",value:g},pressed:y.focusFolder===g,dotColor:bn(g,o.current),label:g==="root"?m:g,count:d})));return}let f=n.nodes.filter(m=>m.type==="tag").sort((m,u)=>u.degree-m.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=t.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=f.length===0),r.replaceChildren(...f.map(m=>At({dataset:{key:"graphTag",value:m.tag},pressed:y.focusTag===m.tag,dotColor:null,label:m.tag,count:m.degree})))},ct=!0,_t=()=>{n.nodes.length>0&&e.zoomToFit?.(0,80),Z=ge().len,me(0),Ve()},Gt=0;e.onEngineStop(()=>{ct&&(Gt=window.requestAnimationFrame(()=>{ct=!1,_t()}))}),window.addCleanup(()=>window.cancelAnimationFrame(Gt));let xe=(r=!1)=>{e.warmupTicks(r&&t.layout.incrementalWarmup?0:t.layout.warmupTicks??(t.use3d?50:60)),e.graphData(D()),le(),ke(),we(),lt(),Dt(),wn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),z()},Pn=r=>{y.lens=r,r!=="tag"&&(y.focusTag=null),r!=="folder"&&(y.focusFolder=null),xt(r),xe()},An=r=>{y.focusTag=y.focusTag===r?null:r,y.focusFolder=null,y.focusTag&&(y.lens="tag",xt("tag")),xe()},Dn=r=>{y.focusFolder=y.focusFolder===r?null:r,y.focusTag=null,y.focusFolder&&(y.lens="folder",xt("folder")),xe()},ut=()=>t.use3d?Gr(o.current):Nt(o.current),Ve=()=>{if(!t.use3d||!t.lod.fog||!t.three||typeof e.scene!="function")return;let r=ge().len;e.scene().fog=new t.three.Fog(ut(),r*sr,r*lr)};e.graphData(D()),e.backgroundColor(ut()),e.nodeLabel(r=>r.name),e.nodeRelSize(Qn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(er),typeof e.linkOpacity=="function"&&e.linkOpacity(Qt),le(),ke();let ve=t.root.querySelector("[data-graph-preview]"),We=t.root.querySelector("[data-graph-preview-chip]"),$e=t.root.querySelector("[data-graph-preview-title]"),Ue=t.root.querySelector("[data-graph-preview-excerpt]"),qe=0;window.addCleanup(()=>window.clearTimeout(qe));let _n=r=>{if(!(ve instanceof HTMLElement)||!(We instanceof HTMLElement)||!($e instanceof HTMLElement)||!(Ue instanceof HTMLElement))return;window.clearTimeout(qe);let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",f=t.root.dataset.legendLinks??"Links";if(r.type==="tag"){let m=t.root.dataset.previewTagTemplate??"{n} notes";We.textContent=s,$e.textContent=`#${r.tag}`,Ue.textContent=m.replace("{n}",String(r.degree))}else r.type==="external"?(We.textContent=f,$e.textContent=r.name,Ue.textContent=r.url):(We.textContent=a,$e.textContent=r.name,Ue.textContent=r.excerpt);ve.hidden=!1,ve.dataset.visible="true"},Ht=()=>{ve instanceof HTMLElement&&(window.clearTimeout(qe),qe=window.setTimeout(()=>{ve.dataset.visible="false",ve.hidden=!0},pr))};if(e.onNodeHover(r=>{let a=A();oe=r?r.id:null,O===null&&(r?_n(r):Ht()),st(a)}),t.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),typeof e.controls=="function"){let s=e.controls();s.autoRotate=!1,s.autoRotateSpeed=rr}e.warmupTicks(t.layout.warmupTicks??50),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),t.bloomPass&&typeof e.postProcessingComposer=="function"&&(t.bloomPass.strength=Q()?on:0,t.bloomPass.radius=an,t.bloomPass.threshold=sn,e.postProcessingComposer().addPass(t.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(be,nn),T.zoom!==1&&me(0)),we(),Ve();{let s=0,f=()=>{if(!Ee()&&!document.hidden&&!S){let m=performance.now()/1e3*mr;for(let u of ce.values())u.material.emissiveIntensity=u.base*(1+gr*Math.sin(m+u.phase))}s=window.requestAnimationFrame(f)};s=window.requestAnimationFrame(f),window.addCleanup(()=>window.cancelAnimationFrame(s))}let r=t.lod.labelDistance,a=t.lod.cullDistance;if((r!==void 0||a!==void 0||t.lod.dotDistance!==void 0)&&typeof e.cameraPosition=="function"){let s=e.cameraPosition.bind(e),f=0,m=()=>{let u=s();if(u&&typeof u.x=="number"&&typeof u.y=="number"&&typeof u.z=="number"){let b=Math.max(1,t.root.clientHeight||window.innerHeight);for(let[g,d]of I){let k=h.get(g);if(!k)continue;let x=Math.hypot(u.x-(k.x??0),u.y-(k.y??0),u.z-(k.z??0)),F=Math.max(1,x/b);d.scale.x=d.scale.y=d.scale.z=F}if(r!==void 0){let g=[];for(let d of ie.values()){let k=d.node.x??0,x=d.node.y??0,F=d.node.z??0,P=Math.hypot(u.x-k,u.y-x,u.z-F);if(d.sprite.visible=Kt(te(d.node),A()===d.node.id||A()===null&&J.has(d.node.id),P,r),d.sprite.visible){let M=Array.from(d.node.name),H=window.innerWidth<700?24:48,$=M.length>H?`${M.slice(0,H).join("")}\\u2026`:d.node.name;d.sprite.text!==$&&(d.sprite.text=$);let j=e.graph2ScreenCoords?.(k,x,F);if(j&&A()===null){let Bt=Array.from($).length*9+12,Ze=j.x>window.innerWidth*.6?j.x-Bt:j.x,mt=Ze+Bt,Fn=g.some(pt=>Math.abs(pt.y-j.y)<22&&Ze<pt.right&&mt>pt.left);d.sprite.visible=!Fn&&Ze>=8&&mt<=window.innerWidth-8,d.sprite.visible&&g.push({left:Ze,right:mt,y:j.y})}d.sprite.center.set(j&&j.x>window.innerWidth*.6?1:0,.5);let De=Math.max(5.5,P/b*11);Math.abs(d.sprite.textHeight-De)>.5&&(d.sprite.textHeight=De)}}}if(a!==void 0){let g=A();for(let[d,k]of re){let x=R(d.source),F=R(d.target);if(g!==null&&(x===g||F===g)){k.visible=!0;continue}let P=Math.hypot(u.x-k.position.x,u.y-k.position.y,u.z-k.position.z);k.visible=bt(P,a)!=="dot"}}}f=window.requestAnimationFrame(m)};f=window.requestAnimationFrame(m),window.addCleanup(()=>window.cancelAnimationFrame(f))}}else e.warmupTicks(t.layout.warmupTicks??60),e.cooldownTicks(t.layout.freezeAfterWarmup?0:t.layout.cooldownTicks??180),e.nodeCanvasObject((r,a,s)=>{let f=U(r),m=r.x??0,u=r.y??0;if(a.save(),a.beginPath(),a.arc(m,u,f,0,Math.PI*2),a.fillStyle=ne(r),a.fill(),r.isHub&&(a.strokeStyle=W(r.id)?o.current.accent:Re(o.current.accent,Ge),a.lineWidth=1.2/s,a.stroke()),te(r)){let b=11.5/s;a.font=`${b}px ${o.current.font}`,a.fillStyle=W(r.id)?o.current.ink:Re(o.current.ink,Ge),a.textAlign="center",a.textBaseline="bottom",a.fillText(r.name,m,u-f-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((r,a,s)=>{let f=U(r)+8;s.beginPath(),s.arc(r.x??0,r.y??0,f,0,Math.PI*2),s.fillStyle=a,s.fill()});let Me=t.root.querySelector("[data-graph-inspect]"),Ye=t.root.querySelector("[data-graph-inspect-chip]"),Ke=t.root.querySelector("[data-graph-inspect-title]"),je=t.root.querySelector("[data-graph-inspect-excerpt]"),dt=t.root.querySelector("[data-graph-inspect-tags]"),ft=t.root.querySelector("[data-graph-inspect-connected]"),K=t.root.querySelector("[data-graph-inspect-open]"),Te=r=>{t.root.dataset.railOpen=r?"true":"false";let a=t.root.querySelector("[data-graph-rail-toggle]"),s=t.root.querySelector("[data-graph-rail-scrim]"),f=t.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",r?"true":"false"),f instanceof HTMLElement&&f.setAttribute("aria-hidden",r?"false":"true"),s instanceof HTMLElement&&(s.hidden=!r)},ue=()=>{let a=!Ee()&&!document.hidden&&!S;if(typeof e.controls=="function"&&(e.controls().autoRotate=a),!a)for(let s of ce.values())s.material.emissiveIntensity=s.base;it()},Rt=window.matchMedia("(prefers-reduced-motion: reduce)");Rt.addEventListener("change",ue),document.addEventListener("visibilitychange",ue),window.addCleanup(()=>{Rt.removeEventListener("change",ue),document.removeEventListener("visibilitychange",ue)}),ue();let Gn=r=>{let a=i.get(r.id)??new Set,s=[];for(let f of a){let m=n.nodes.find(u=>u.id===f);m&&s.push(m)}return s.sort((f,m)=>m.degree-f.degree)},Hn=r=>{if(!(Me instanceof HTMLElement)||!(Ye instanceof HTMLElement)||!(Ke instanceof HTMLElement)||!(je instanceof HTMLElement)||!(dt instanceof HTMLElement)||!(ft instanceof HTMLElement))return;let a=t.root.dataset.legendNotes??"Notes",s=t.root.dataset.legendTags??"Tags",f=t.root.dataset.legendLinks??"Links",m=t.root.dataset.inspectEmpty??"No direct connections";r.type==="tag"?(Ye.textContent=s,Ke.textContent=`#${r.tag}`,je.textContent=(t.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(r.degree))):r.type==="external"?(Ye.textContent=f,Ke.textContent=r.name,je.textContent=r.url):(Ye.textContent=a,Ke.textContent=r.name,je.textContent=r.excerpt);let u=r.tags.map(g=>{let d=document.createElement("li");return d.textContent=g,d});dt.replaceChildren(...u),dt.hidden=u.length===0;let b=Gn(r).slice(0,12);if(b.length===0){let g=document.createElement("li");g.className="graph-landing__inspect-empty",g.textContent=m,ft.replaceChildren(g)}else ft.replaceChildren(...b.map(g=>{let d=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=g.id;let x=g.type==="tag"?s:g.type==="external"?f:a,F=document.createElement("span");F.textContent=x;let P=document.createElement("strong");return P.textContent=g.type==="tag"?`#${g.tag}`:g.name,k.append(F,P),d.append(k),d}));K instanceof HTMLAnchorElement&&(r.type==="note"&&r.slug.length>0?(K.hidden=!1,K.href=Rr(r.slug).toString(),K.textContent=t.root.dataset.inspectRead??"Read note",K.removeAttribute("target"),K.removeAttribute("rel")):r.type==="external"&&r.url.length>0?(K.hidden=!1,K.href=r.url,K.textContent=t.root.dataset.inspectOpenExternal??"Open",K.target="_blank",K.rel="noopener noreferrer"):(K.hidden=!0,K.removeAttribute("href"),K.removeAttribute("target"),K.removeAttribute("rel"))),Me.hidden=!1,t.root.dataset.inspecting="true",Te(!1),Ht()},Se=()=>{let r=A();if(O=null,Me instanceof HTMLElement){let a=Me.contains(document.activeElement);Me.hidden=!0,a&&document.querySelector(".search-button")?.focus({preventScroll:!0})}t.root.dataset.inspecting="false",oe=null,ue(),st(r)},Rn=r=>{let a=A();O=r.id,ue(),Hn(r),st(a)},gt=(r,a=!1)=>{if(X(r.id)&&xe(!0),Rn(r),a){G={x:r.x??0,y:r.y??0,z:r.z??0};let s=Ee()?0:450;t.use3d&&e.cameraPosition?(Z=ze,e.cameraPosition({x:G.x+be.x/T.zoom,y:G.y+be.y/T.zoom,z:G.z+be.z/T.zoom},G,s)):e.centerAt?.(G.x,G.y,s)}},Xe=!1;e.onNodeClick((r,a)=>{r&&(Xe=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),gt(r))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{Se(),Te(!1)});let se=t.root.querySelector("#graph-landing-mount");if(se instanceof HTMLElement){let r=new ResizeObserver(()=>{e.width(se.clientWidth),e.height(se.clientHeight),O===null&&!ct&&_t()});r.observe(se),window.addCleanup(()=>r.disconnect());let a=null,s=0,f=g=>{a={x:g.clientX,y:g.clientY},Xe=!1,S=!0,ue()},m=(g,d)=>{if(typeof e.graph2ScreenCoords!="function")return null;let k=se.getBoundingClientRect(),x=g-k.left,F=d-k.top,P=null,M=484;for(let H of D().nodes){if(H.x===void 0||H.y===void 0)continue;let $=e.graph2ScreenCoords(H.x,H.y,H.z??0),De=($.x-x)**2+($.y-F)**2;De<M&&(M=De,P=H)}return P},u=g=>{let d=a;a=null,S=!1,ue(),!(!d||(g.clientX-d.x)**2+(g.clientY-d.y)**2>25)&&(window.clearTimeout(s),s=window.setTimeout(()=>{if(Xe){Xe=!1;return}let x=m(g.clientX,g.clientY);x?gt(x):Se()},0))},b=()=>{a=null,S=!1,ue()};se.addEventListener("pointerdown",f,!0),se.addEventListener("pointerup",u,!0),se.addEventListener("pointercancel",b,!0),window.addCleanup(()=>{window.clearTimeout(s),se.removeEventListener("pointerdown",f,!0),se.removeEventListener("pointerup",u,!0),se.removeEventListener("pointercancel",b,!0)})}wn(t.root,"[data-graph-lens]",y.lens,"data-graph-lens"),lt(),Dt(),y.lens!=="all"&&xe(),t.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let Ft=()=>{o.current=Mn(),e.backgroundColor(ut()),Ve(),t.bloomPass&&(t.bloomPass.strength=Q()?on:0,t.bloomPass.radius=an,t.bloomPass.threshold=sn),ke(),we(),lt()};document.addEventListener("themechange",Ft),window.addCleanup(()=>document.removeEventListener("themechange",Ft));let Ot=r=>{let a=r.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){Se();return}if(a.closest("[data-graph-rail-toggle]")){let d=t.root.dataset.railOpen!=="true";d&&Se(),Te(d);return}if(a.closest("[data-graph-rail-scrim]")){Te(!1);return}let s=a.closest("[data-graph-inspect-id]");if(s instanceof HTMLElement&&s.dataset.graphInspectId){let d=t.fullData.nodes.find(k=>k.id===s.dataset.graphInspectId);d&&gt(d,!0);return}let f=a.closest("[data-graph-lens]");if(f instanceof HTMLElement&&f.dataset.graphLens&&Vr(f.dataset.graphLens)){Pn(f.dataset.graphLens);return}let m=a.closest("[data-graph-tag]");if(m instanceof HTMLElement&&m.dataset.graphTag){An(m.dataset.graphTag);return}let u=a.closest("[data-graph-folder]");if(u instanceof HTMLElement&&u.dataset.graphFolder){Dn(u.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){z();return}let b=a.closest("[data-graph-labels]");if(b instanceof HTMLButtonElement){y.allLabels=!y.allLabels,b.setAttribute("aria-pressed",y.allLabels?"true":"false");let d=b.dataset.labelShow??"Labels",k=b.dataset.labelHide??"Labels",x=y.allLabels?k:d;b.title=x,b.setAttribute("aria-label",x),we();return}if(a.closest("[data-graph-theme]")){let d=Q()?"light":"dark";document.documentElement.setAttribute("saved-theme",d),localStorage.setItem("theme",d),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${d}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:d}}));return}let g=a.closest("[data-graph-tags-toggle]");if(g instanceof HTMLButtonElement){let d=t.root.querySelector(".graph-landing__tags");if(d instanceof HTMLElement){let k=d.dataset.open==="true";d.dataset.open=k?"false":"true",g.setAttribute("aria-expanded",k?"false":"true")}}},Ce=t.root.querySelector("[data-graph-node-scale]"),Ne=t.root.querySelector("[data-graph-edge-scale]");if(Ce instanceof HTMLInputElement){Ce.value=String(Math.round(T.nodeScale*100));let r=()=>{T.nodeScale=Number(Ce.value)/100,Fe(T),le(),z(),ke(),t.use3d&&we()};Ce.addEventListener("input",r),window.addCleanup(()=>Ce.removeEventListener("input",r))}if(Ne instanceof HTMLInputElement){Ne.value=String(Math.round(T.edgeScale*100));let r=()=>{T.edgeScale=Number(Ne.value)/100,Fe(T),ke()};Ne.addEventListener("input",r),window.addCleanup(()=>Ne.removeEventListener("input",r))}let Ie=t.root.querySelector("[data-graph-hub-gravity]");if(Ie instanceof HTMLInputElement){Ie.value=String(Math.round(T.hubGravity*100));let r=()=>{let a=Number(Ie.value)/100;T.hubGravity=Number.isFinite(a)?Math.min(2,Math.max(0,a)):1,Fe(T),le(),z()};Ie.addEventListener("input",r),window.addCleanup(()=>Ie.removeEventListener("input",r))}let Pe=t.root.querySelector("[data-graph-zoom]");if(Pe instanceof HTMLInputElement){Pe.value=String(Math.round(T.zoom*100));let r=()=>{T.zoom=Number(Pe.value)/100,Fe(T),me(200)};Pe.addEventListener("input",r),window.addCleanup(()=>Pe.removeEventListener("input",r))}let Ae=t.root.querySelector("[data-graph-spread]");if(Ae instanceof HTMLInputElement){Ae.value=String(Math.round(T.spread*100));let r=()=>{T.spread=Number(Ae.value)/100,Fe(T),le(),z()};Ae.addEventListener("input",r),window.addCleanup(()=>Ae.removeEventListener("input",r))}Te(!1),t.root.addEventListener("click",Ot),window.addCleanup(()=>t.root.removeEventListener("click",Ot));let zt=r=>{if(r.key==="Escape"){if(t.root.dataset.railOpen==="true"){Te(!1);return}Se()}};window.addEventListener("keydown",zt),window.addCleanup(()=>window.removeEventListener("keydown",zt))}function Kr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function jr(){try{return window.localStorage.getItem(Ct)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function Mt(e){try{if(e){window.localStorage.setItem(Ct,"stopped");return}window.localStorage.removeItem(Ct)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function Xr(e){let n=performance.now(),o=0,t=i=>{let l=Math.min(1,(i-n)/e.durationMs),h=l*l;e.apply(e.from+(e.to-e.from)*h),l<1&&(o=window.requestAnimationFrame(t))};return o=window.requestAnimationFrame(t),()=>{window.cancelAnimationFrame(o)}}function Zr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let t=window,i=t.onYouTubeIframeAPIReady;if(t.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let l=t.YT;if(!l||typeof l.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(l)},!document.querySelector("script[data-graph-youtube-api]")){let l=document.createElement("script");l.src=nr,l.async=!0,l.dataset.graphYoutubeApi="1",l.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(l)}})}function Jr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function Qr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]"),t=e.querySelector("[data-graph-music-library-toggle]"),i=e.querySelector("[data-graph-music-library]"),l=e.querySelector("[data-graph-music-track-list]"),h=e.querySelector("[data-graph-music-status]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||!(i instanceof HTMLElement)||!(l instanceof HTMLElement)||!(h instanceof HTMLElement))return;let L=e.dataset.audioStop??"Stop music",C=e.dataset.audioPlay??"Play music",V=e.dataset.musicLibraryOpen??"Open record collection",X=e.dataset.musicLibraryClose??"Close record collection",y=e.dataset.musicCurrentTrack??"Current track",oe=[];try{let w=JSON.parse(e.dataset.graphMusicTracks??"[]");if(Array.isArray(w))for(let I of w){if(!I||typeof I!="object")continue;let N=I;typeof N.title!="string"||typeof N.url!="string"||N.artist!==void 0&&typeof N.artist!="string"||oe.push({title:N.title,...typeof N.artist=="string"?{artist:N.artist}:{},url:N.url})}}catch{}let O=Yt(oe);O.length===0&&O.push({title:"Ambient track",videoId:en});let T=0,S=null,G=!1,Z=null,z=!jr(),A=!1,J=!1,ee=()=>O[T]??O[0]??{title:"Ambient track",videoId:en},te=w=>{n.style.setProperty("--graph-music-artwork",`url("https://i.ytimg.com/vi/${w}/hqdefault.jpg")`)},U=()=>ee().videoId,W=()=>{l.replaceChildren(),O.forEach((w,I)=>{let N=document.createElement("button");N.type="button",N.className="graph-landing__music-track",N.dataset.graphMusicTrackIndex=String(I),N.setAttribute("aria-current",I===T?"true":"false");let Y=document.createElement("img");Y.className="graph-landing__music-track-cover",Y.src=`https://i.ytimg.com/vi/${w.videoId}/hqdefault.jpg`,Y.alt="",Y.loading="lazy";let fe=document.createElement("span");fe.className="graph-landing__music-track-copy";let pe=document.createElement("span");if(pe.className="graph-landing__music-track-title",pe.textContent=w.title,fe.appendChild(pe),w.artist){let he=document.createElement("span");he.className="graph-landing__music-track-artist",he.textContent=w.artist,fe.appendChild(he)}N.append(Y,fe),l.appendChild(N)}),h.textContent=`${y}: ${ee().title}`},ae=w=>{e.dataset.musicLibraryOpen=w?"true":"false",i.hidden=!w,i.setAttribute("aria-hidden",w?"false":"true"),t.setAttribute("aria-expanded",w?"true":"false"),t.setAttribute("aria-label",w?X:V),t.title=w?X:V},ne=w=>{n.setAttribute("aria-pressed",w?"true":"false"),n.setAttribute("aria-label",w?L:C),n.title=w?L:C,n.dataset.playing=w?"true":"false"},q=()=>{Z&&(Z(),Z=null)},c=w=>{S&&S.setVolume(Math.max(0,Math.min(He,w)))},p=w=>{!z||A||(A=!0,ne(!0),w.unMute(),c(0),w.playVideo(),q(),Z=Xr({from:0,to:He,durationMs:tr,apply:c}))},v=()=>{z=!1,A=!1,q(),Mt(!0),S&&(S.mute(),S.pauseVideo(),c(0)),ne(!1)},D=async()=>{if(!S)try{let w=await Zr();if(S)return;S=Jr({api:w,host:o,videoId:U(),onReady:I=>{G=!0,I.mute(),c(0),I.playVideo(),z&&J&&p(I)},onEnded:I=>{if(!z)return;T=(T+1)%O.length;let N=U();te(N),W(),I.loadVideoById(N),c(A?He:0)}})}catch(w){console.error("[graph-landing] ambient audio unavailable",w)}},_=w=>{let I=w.target;if(!(I instanceof Element&&I.closest("[data-graph-audio-toggle], [data-graph-music-library-toggle], [data-graph-music-track-index]"))&&!(!z||A||Kr())){if(J=!0,G&&S){p(S);return}D()}},B=()=>{if(z&&A){v();return}if(J=!0,z=!0,Mt(!1),G&&S){p(S);return}D()},ge=w=>{if(!(!Number.isInteger(w)||w<0||w>=O.length)){if(T=w,te(U()),W(),ae(!1),z=!0,J=!0,Mt(!1),G&&S){S.loadVideoById(U()),A?(S.unMute(),S.playVideo(),c(He)):p(S);return}D()}},me=()=>{let w=e.dataset.musicLibraryOpen!=="true";if(w){e.dataset.railOpen="false";let I=e.querySelector("[data-graph-rail-toggle]"),N=e.querySelector("#graph-landing-rail"),Y=e.querySelector("[data-graph-rail-scrim]");I instanceof HTMLButtonElement&&I.setAttribute("aria-expanded","false"),N instanceof HTMLElement&&N.setAttribute("aria-hidden","true"),Y instanceof HTMLElement&&(Y.hidden=!0)}ae(w)},le=w=>{let I=w.target;if(!(I instanceof Element))return;let N=I.closest("[data-graph-music-track-index]");N instanceof HTMLButtonElement&&ge(Number(N.dataset.graphMusicTrackIndex))},ce=w=>{if(e.dataset.musicLibraryOpen!=="true")return;let I=w.target;(!(I instanceof Element)||!I.closest(".graph-landing__music-dock, .graph-landing__music-library"))&&ae(!1)},ie=w=>{w.key==="Escape"&&e.dataset.musicLibraryOpen==="true"&&(ae(!1),w.stopImmediatePropagation())},re=()=>{if(S){if(document.hidden){q(),S.pauseVideo();return}z&&A&&(S.playVideo(),c(He))}};te(U()),ne(!1),W(),ae(!1),D(),n.addEventListener("click",B),t.addEventListener("click",me),l.addEventListener("click",le),e.addEventListener("click",ce),e.addEventListener("pointerdown",_,!0),e.addEventListener("touchstart",_,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",re),window.addEventListener("keydown",ie),window.addCleanup(()=>{n.removeEventListener("click",B),t.removeEventListener("click",me),l.removeEventListener("click",le),e.removeEventListener("click",ce),e.removeEventListener("pointerdown",_,!0),e.removeEventListener("touchstart",_,!0),document.removeEventListener("visibilitychange",re),window.removeEventListener("keydown",ie),q(),S&&(S.pauseVideo(),S.destroy(),S=null)})}async function eo(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",Qr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),t=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",i=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",l=(e.dataset.localePrefixes??"").split(",").map(E=>E.trim()).filter(E=>E.length>0),h=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",L=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",C=e.dataset.graphIndexPath??"",V=de(e.dataset.maxRenderedNodes,E=>Number.parseInt(E,10)),X=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,y=Number.isFinite(X)?X:1,oe=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,O=e.dataset.graphRenderMode==="3d"?"3d":"auto",T=e.dataset.graphLayoutFreezeAfterWarmup==="true",S=de(e.dataset.graphLayoutWarmupTicks,E=>Number.parseInt(E,10)),G=de(e.dataset.graphLayoutCooldownTicks,E=>Number.parseInt(E,10)),Z=de(e.dataset.graphLayoutChargeTheta,Number.parseFloat),z=e.dataset.graphLayoutIncrementalWarmup==="true",A=de(e.dataset.graphLodLabelDistance,Number.parseFloat),J=de(e.dataset.graphLodDotDistance,Number.parseFloat),ee=de(e.dataset.graphLodCullDistance,Number.parseFloat),te=e.dataset.graphLodFog==="true",U=de(e.dataset.graphLodNodeResolution,E=>Number.parseInt(E,10)),W=de(e.dataset.graphLodLinkResolution,E=>Number.parseInt(E,10)),ae=e.dataset.graphInteractionIncrementalRepaint==="true",ne=e.dataset.graphLodShareLinkResources==="true",q=!1,c=null,p={current:Mn()},v=()=>{q=!0,c&&(c._destructor(),c=null),delete e.dataset.graphReady};window.addCleanup(v);let D=Dr();if(O==="3d"&&!D){Et(n,"3D graph unavailable: WebGL is required.");return}let _=O==="3d"||D,B=Or(_),ge=_?import(Yn).then(E=>E.default??null).catch(E=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",E),null)):Promise.resolve(null),me=_?import(Kn).catch(E=>(console.error("[graph-landing] three unavailable; using default node spheres",E),null)):Promise.resolve(null),le=_?import(jn).then(E=>E.UnrealBloomPass?new E.UnrealBloomPass:null).catch(E=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",E),null)):Promise.resolve(null),ce=_?import(qn).then(E=>E.forceCollide??null).catch(E=>(console.error("[graph-landing] d3-force-3d collision force unavailable",E),null)):Promise.resolve(null);B.catch(()=>{});let ie;try{ie=nt(L==="graphIndex"?await fetch(C).then(E=>E.json()):await fetchData)}catch(E){throw Et(n,"Graph could not load its index."),E}if(q)return;let re=Pr(br(ie),{localeId:t,sourceLocale:i,prefixes:l},oe),w=jt(re,V),I=h.replace("{n}",String(re.nodes.length)).replace("{m}",String(re.links.length));for(let E of o)E.textContent=I;let N;try{N=await B}catch(E){throw Et(n,"Graph could not load. Check your network connection."),E}let[Y,fe,pe,he]=await Promise.all([ge,me,le,ce]);q||(n.replaceChildren(),c=N(n),c.width(n.clientWidth),c.height(n.clientHeight),n.__graphLanding=c,n.__graphData=w,Yr(c,w,p,{use3d:_,root:e,spriteText:Y,bloomPass:pe,three:fe,forceCollide:he,fullData:re,expandHops:y,layout:{freezeAfterWarmup:T,warmupTicks:S,cooldownTicks:G,chargeTheta:Z,incrementalWarmup:z},lod:{labelDistance:A,dotDistance:J,cullDistance:ee,fog:te,nodeResolution:U,linkResolution:W,shareLinkResources:ne},interaction:{incrementalRepaint:ae}}))}var to="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let t=o.dataset.preferredLocale;if(t)try{localStorage.setItem(to,t)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{eo()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  --graph-backdrop: var(--light);\n  --graph-surface: color-mix(in srgb, var(--light) 92%, transparent);\n  --graph-surface-strong: var(--light);\n  --graph-border: var(--lightgray);\n  --graph-text: var(--darkgray);\n  --graph-muted: var(--gray);\n  --graph-accent: var(--secondary);\n  --graph-accent-soft: var(--highlight);\n  --graph-external: var(--tertiary);\n  background: var(--graph-backdrop);\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--graph-backdrop);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.page:has(.graph-landing) .search {\n  position: fixed;\n  left: 24px;\n  top: 76px;\n  width: auto;\n  z-index: 20;\n}\n\n.page:has(.graph-landing) .search > .search-button {\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.page:has(.graph-landing) .search > .search-button p {\n  display: none;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: var(--graph-surface);\n  border: 1px solid var(--graph-border);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--graph-text);\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 48px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible,\n.graph-landing__music-library-toggle:focus-visible,\n.graph-landing__music-track:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__music-dock {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 12px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  display: flex;\n  gap: 4px;\n  left: 72px;\n  padding: 3px;\n  pointer-events: auto;\n  position: absolute;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  padding: 0;\n  width: 40px;\n}\n\n.graph-landing__audio-toggle:hover .graph-landing__turntable {\n  transform: translateY(-1px);\n}\n\n.graph-landing__audio-toggle:active .graph-landing__turntable {\n  transform: scale(0.96);\n}\n\n.graph-landing__turntable {\n  display: block;\n  height: 38px;\n  position: relative;\n  transition: transform 160ms ease;\n  width: 38px;\n}\n\n.graph-landing__turntable-plinth {\n  background: linear-gradient(135deg, #d7c0a4, #8a6f54);\n  border: 1px solid color-mix(in srgb, var(--dark) 35%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 6px 14px rgba(8, 10, 16, 0.25), inset 0 1px rgba(255, 255, 255, 0.38);\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.graph-landing__turntable-record {\n  background: repeating-radial-gradient(circle, transparent 0 2px, rgba(255, 255, 255, 0.09) 2.5px 3px), radial-gradient(circle at 45% 42%, #3d4148, #101217 66%);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 50%;\n  height: 30px;\n  left: 3px;\n  position: absolute;\n  top: 4px;\n  width: 30px;\n}\n\n.graph-landing__turntable-label {\n  background-color: #c78152;\n  background-image: var(--graph-music-artwork);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  inset: 9px;\n  position: absolute;\n}\n\n.graph-landing__turntable-spindle {\n  background: #e9e1d5;\n  border: 1px solid #695846;\n  border-radius: 50%;\n  height: 4px;\n  left: 13px;\n  position: absolute;\n  top: 13px;\n  width: 4px;\n}\n\n.graph-landing__turntable-tonearm {\n  fill: #d7d8d6;\n  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.45));\n  height: 26px;\n  position: absolute;\n  right: -1px;\n  stroke: #34363a;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2.2;\n  top: 1px;\n  transform: rotate(-24deg);\n  transform-box: fill-box;\n  transform-origin: 78% 18%;\n  transition: transform 260ms ease;\n  width: 26px;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-record {\n  animation: graph-landing-record-spin 2.8s linear infinite;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__turntable-tonearm {\n  transform: rotate(4deg);\n}\n\n.graph-landing__music-library-toggle {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 66%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 38px;\n  justify-content: center;\n  padding: 0;\n  width: 38px;\n}\n\n.graph-landing__music-library-toggle:hover {\n  background: color-mix(in srgb, var(--secondary) 18%, var(--light));\n}\n\n.graph-landing__music-library {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 74px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.2);\n  box-sizing: border-box;\n  left: 72px;\n  max-height: min(58dvh, 440px);\n  overflow: auto;\n  overscroll-behavior: contain;\n  padding: 12px;\n  pointer-events: auto;\n  position: absolute;\n  width: min(420px, 100vw - 32px);\n  z-index: 5;\n}\n\n.graph-landing__music-library[hidden] {\n  display: none;\n}\n\n.graph-landing__music-library-heading {\n  align-items: baseline;\n  color: var(--dark);\n  display: flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 8px;\n  justify-content: space-between;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.graph-landing__music-library-heading [data-graph-music-status] {\n  color: var(--gray);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: normal;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-list {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.graph-landing__music-track {\n  align-items: center;\n  background: color-mix(in srgb, var(--light) 62%, transparent);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: var(--dark);\n  cursor: pointer;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 48px minmax(0, 1fr);\n  min-height: 62px;\n  padding: 6px;\n  text-align: left;\n}\n\n.graph-landing__music-track:hover,\n.graph-landing__music-track[aria-current=true] {\n  background: color-mix(in srgb, var(--secondary) 14%, var(--light));\n  border-color: color-mix(in srgb, var(--secondary) 55%, var(--lightgray));\n}\n\n.graph-landing__music-track-cover {\n  border-radius: 6px;\n  display: block;\n  height: 48px;\n  object-fit: cover;\n  width: 48px;\n}\n\n.graph-landing__music-track-copy {\n  min-width: 0;\n}\n\n.graph-landing__music-track-title,\n.graph-landing__music-track-artist {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graph-landing__music-track-title {\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n\n.graph-landing__music-track-artist {\n  color: var(--gray);\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n@keyframes graph-landing-record-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--graph-text);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--graph-accent);\n}\n\n.graph-landing__counts {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__chip:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--graph-muted);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--graph-accent);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--graph-text);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--graph-accent);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--graph-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--graph-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  display: inline-flex;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n}\n\n.graph-landing__tool:hover {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--graph-muted);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--graph-accent);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--graph-muted);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--graph-text);\n}\n\n.graph-landing__dot--tag {\n  background: var(--graph-accent);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: var(--graph-surface);\n  backdrop-filter: blur(14px);\n  border: 1px solid var(--graph-border);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--graph-text);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--graph-muted);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: var(--graph-surface-strong);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--graph-border);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n  z-index: 6;\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  color: var(--graph-muted);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 44px;\n  padding: 0 10px;\n}\n\n.graph-landing__inspect-close:hover,\n.graph-landing__inspect-close:focus-visible {\n  background: var(--graph-accent-soft);\n  color: var(--graph-accent);\n}\n\n.graph-landing__inspect-close:focus-visible {\n  outline: 2px solid var(--graph-accent);\n  outline-offset: 2px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--graph-text);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--graph-muted);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--graph-border);\n  border-radius: 999px;\n  color: var(--graph-muted);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--graph-muted);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--graph-text);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--graph-muted);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--graph-muted);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--graph-accent);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--graph-border);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--graph-muted);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background-color: var(--graph-backdrop);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: var(--graph-surface);\n  border-color: var(--graph-border);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n:root[saved-theme=dark] .graph-landing__music-dock,\n:root[saved-theme=dark] .graph-landing__music-library {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: var(--graph-surface);\n    border-bottom: 1px solid var(--graph-border);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .page:has(.graph-landing) .search {\n    left: 16px;\n    top: 68px;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 44px;\n    min-height: 44px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__music-dock {\n    bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .graph-landing__rail-toggle {\n    height: 48px;\n    left: max(16px, env(safe-area-inset-left));\n    width: 48px;\n  }\n  .graph-landing__music-dock {\n    left: calc(max(16px, env(safe-area-inset-left)) + 48px + 8px);\n  }\n  .graph-landing__music-library {\n    border-radius: 16px;\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 12px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(52dvh, 100dvh - 8rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    position: fixed;\n    right: max(16px, env(safe-area-inset-right));\n    width: auto;\n  }\n  .graph-landing__music-track-list {\n    grid-template-columns: 1fr;\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 48px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: var(--graph-surface);\n    border-bottom-color: var(--graph-border);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .graph-landing *,\n  .graph-landing *::before,\n  .graph-landing *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}';
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