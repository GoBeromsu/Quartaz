// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'function P(e){return typeof e=="string"?e:e.id}function je(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function ft(e,n){return je(e,n)==="dot"}function gt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((h,k)=>k.degree!==h.degree?k.degree-h.degree:h.id<k.id?-1:h.id>k.id?1:0).slice(0,Math.max(0,n)),u=new Set(r.map(h=>h.id)),s=e.links.filter(h=>{let k=P(h.source),L=P(h.target);return u.has(k)&&u.has(L)});return{nodes:r,links:s}}function mt(e,n,o,r){let u=new Set,s=Math.max(0,Math.floor(r));if(s<=0)return u;let h=new Set([o]),k=new Set([o]);for(let L=0;L<s;L+=1){let S=new Set;for(let G of k)for(let m of e.get(G)??[])h.has(m)||(h.add(m),S.add(m),n.has(m)||u.add(m));k=S}return u}var Be="0.179.1",Zt="https://esm.sh/force-graph@1.51.4",Jt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Be}`,Qt=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Be}`,en=`https://esm.sh/three@${Be}`,tn=`https://esm.sh/three@${Be}/examples/jsm/postprocessing/UnrealBloomPass.js`,nn=8,rn=14;var ke=1,Xe=3.5,on=.05,an=2.6,sn=1,pt=1,we=.18,Rt="graph-landing:lens",Ft="graph-landing:tune",at="graph-landing:ambient-audio",ht="UDVtMYqUAyw",_e=12,ln=28e3,cn="https://www.youtube.com/iframe_api",un=.18,dn=1.4,fn=1.25,gn=1.15,mn=.55,Le={x:330,y:235,z:565},bt={x:0,y:0,z:0},He=Math.hypot(Le.x,Le.y,Le.z),pn=300/He,hn=1600/He,yt=1.3,bn=3.2,wt=1.05,kt=.32,Lt=.28,yn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},wn="#a8b0c2",kn="#2a3348",Tt={min:80,max:200},vt={min:40,max:110},Et={min:160,max:280},xt={min:90,max:170},St=220,Ct=2,Ln=.15,Tn=.8,vn=350,Ze={min:-100,max:-190},Je={min:72,max:116},Qe={min:130,max:260};function En(e){return ze(e-.5,0,1)}function Oe(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function et(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function xn(e){let n=[];for(let o of Object.values(e)){let r=Oe(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let s=r.multilingual,h=s&&typeof s=="object"?s:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:et(r.links),tags:et(r.tags),externalLinks:et(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:h})}return n}function Sn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=St?n:`${n.slice(0,St).trimEnd()}\\u2026`}function Te(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function Mt(e){return Te(e)/(2*Math.PI)}function Re(e,n,o){let r=Te(e),u=Math.acos(2*Mt(`${e}:phi`)-1),s=n+(o-n)*Mt(`${e}:r`);return{x:s*Math.sin(u)*Math.cos(r),y:s*Math.sin(u)*Math.sin(r),z:s*Math.cos(u)}}function Gt(e){return e==="index"||e.endsWith("/index")}function Ht(e){return e==="tags"||e.startsWith("tags/")}function Cn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Ot(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function tt(e,n){return e.multilingual?.locale?e.multilingual.locale:Ot(e.slug,n).locale}function Mn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Ot(e.slug,n).permalink}`}function Nn(e,n){let o=e.find(r=>tt(r,n.prefixes)===n.localeId)??e.find(r=>tt(r,n.prefixes)===n.sourceLocale)??e.find(r=>tt(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function ze(e,n,o){return Math.min(o,Math.max(n,e))}function Nt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function Pn(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function st(e){return Pn(e).trim().toLowerCase()}function Dn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function An(e){let n=e.trim();return n.length===0||Dn(n)||Ht(n)||Gt(n)?!0:st(n).length===0}function In(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function zt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function _n(e,n){let o=zt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function Pt(e){return`external:${e}`}function Rn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),u=o.pathname;return(n.get(r)??0)>1&&u.length>1?`${r}${u}`:r}function Fn(e){let n=new Map,o=new Map;for(let r of e){let u=st(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let s=r.title.trim().toLowerCase();s.length>0&&!o.has(s)&&o.set(s,r.slug);let h=s.replace(/\\s+/g,"-");h.length>0&&!o.has(h)&&o.set(h,r.slug)}return{byBasename:n,byTitle:o}}function Gn(e,n,o){if(n.has(e))return e;let r=st(e),u=o.byBasename.get(r);if(u)return u;let s=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return s||null}function Hn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function On(e,n,o=void 0){let r=e.filter(d=>!Gt(d.slug)&&!Ht(d.slug)&&!Cn(d)),u=new Map;for(let d of r){let g=Mn(d,n.prefixes),y=u.get(g)??[];y.push(d),u.set(g,y)}let s=[];for(let d of u.values())s.push(Nn(d,n));let h=new Set(s.map(d=>d.slug)),k=Fn(s),L=new Map,S=[],G=new Set,m=new Map,H=d=>{L.set(d,(L.get(d)??0)+1)},R=(d,g,y)=>d<g?`${d}|${g}|${y}`:`${g}|${d}|${y}`,v=(d,g,y,E)=>{let D=R(d,g,y);return G.has(D)?!1:(G.add(D),S.push({source:d,target:g,kind:y}),E&&(H(d),H(g)),!0)};for(let d of s)for(let g of d.links){if(An(g))continue;let y=Gn(g,h,k);y!==null&&y!==d.slug&&v(d.slug,y,"wikilink",!0)}let A=In(),I=new Set;for(let d of s)for(let g of d.externalLinks){let y=zt(g);y===null||!_n(y,A)||(I.add(y),v(d.slug,Pt(y),"external",!0))}let B=new Map;for(let d of I){let g=new URL(d).hostname.replace(/^www\\./,"");B.set(g,(B.get(g)??0)+1)}let z=new Set,C=new Map;for(let d of s)for(let g of d.tags){m.set(g,(m.get(g)??0)+1);let y=`tag:${g}`;z.add(y),v(d.slug,y,"tag",!0);let E=C.get(g)??[];E.push(d.slug),C.set(g,E)}if(o!==!1){let d=o?.maxTagsPerNote,g=o?.maxEdges,y=0;e:for(let E of s)if(!(E.tags.length<2)&&!(d!==void 0&&E.tags.length>d))for(let D=0;D<E.tags.length;D+=1)for(let N=D+1;N<E.tags.length;N+=1){if(g!==void 0&&y>=g)break e;v(`tag:${E.tags[D]}`,`tag:${E.tags[N]}`,"cooc",!1)&&(y+=1)}}let M=new Map;for(let d of s){let g=Nt(d.slug);if(g==="root")continue;let y=M.get(g)??[];y.push(d.slug),M.set(g,y)}for(let d of M.values()){if(d.length<2)continue;let g=[...d].sort();for(let y=0;y<g.length;y+=1){let E=g[(y+1)%g.length],D=g[(y+Ct)%g.length],N=g[y];N===void 0||E===void 0||(N!==E&&!G.has(R(N,E,"wikilink"))&&v(N,E,"folder",!1),g.length>Ct+1&&D!==void 0&&N!==D&&!G.has(R(N,D,"wikilink"))&&v(N,D,"folder",!1))}}let Z=[...L.values()],W=Z.length>0?Math.min(...Z):0,oe=Z.length>0?Math.max(...Z):0,U=d=>{let g=L.get(d)??0,y=Math.sqrt(g),E=Math.sqrt(W),N=Math.sqrt(oe)-E;return N===0?(ke+Xe)/2:ke+(y-E)/N*(Xe-ke)},ae=[...s].sort((d,g)=>(L.get(g.slug)??0)-(L.get(d.slug)??0)),J=new Set(ae.filter(d=>(L.get(d.slug)??0)>0).slice(0,nn).map(d=>d.slug)),j=s.map(d=>{let g=J.has(d.slug),y=g?Re(d.slug,vt.min,vt.max):Re(d.slug,Tt.min,Tt.max);return{id:d.slug,name:d.title,type:"note",val:U(d.slug),degree:L.get(d.slug)??0,isHub:g,tag:"",slug:d.slug,url:"",folder:Nt(d.slug),tags:d.tags,dominantTag:Hn(d.tags,m),excerpt:Sn(d.content),phase:Te(d.slug),x:y.x,y:y.y,z:y.z}});for(let d of I){let g=Pt(d),y=Re(g,Et.min,Et.max);j.push({id:g,name:Rn(d,B),type:"external",val:U(g)*mn,degree:L.get(g)??0,isHub:!1,tag:"",slug:"",url:d,folder:"",tags:[],dominantTag:"",excerpt:d,phase:Te(g),x:y.x,y:y.y,z:y.z})}for(let d of z){let g=d.slice(4),y=Re(d,xt.min,xt.max);j.push({id:d,name:g,type:"tag",val:ze(U(d)*.7,ke,Xe),degree:L.get(d)??0,isHub:!1,tag:g,slug:`tags/${g}`,url:"",folder:"tag",tags:[g],dominantTag:g,excerpt:"",phase:Te(d),x:y.x,y:y.y,z:y.z})}return{nodes:j,links:S}}function nt(e){let n=new Map,o=(r,u)=>{let s=n.get(r)??new Set;s.add(u),n.set(r,s)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let u=P(r.source),s=P(r.target);o(u,s),o(s,u)}return n}function ue(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Vt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ue("--light","#ffffff"),ink:ue("--darkgray","#0f0f0f"),accent:ue("--secondary","#a52142"),tertiary:ue("--tertiary","#c75b75"),gray:ue("--gray","#737373"),external:ue("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Ge(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function Vn(){return zn()&&!Ge()}function K(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ve(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function de(e,n){let o=Ve(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function X(e,n,o){let r=Ve(e),u=Ve(n);if(!r||!u)return e;let s=(h,k)=>Math.round(h+(k-h)*o);return`rgb(${s(r.r,u.r)}, ${s(r.g,u.g)}, ${s(r.b,u.b)})`}function Bt(e){return K()?X(e.bg,"#05070f",.88):e.bg}function Bn(e){let n=Ve(e);if(!n)return e;let o=r=>{let u=r/255,s=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(s*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function Un(e){return Bn(Bt(e))}function Ut(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function Dt(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Ut(e,[n.accent,n.tertiary,n.ink,n.gray])}function $n(e,n){return e.length===0?n.ink:Ut(e,[n.accent,n.tertiary])}function $t(e){let n=e.split("/").map(s=>encodeURIComponent(s)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function qn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=$t(e);window.location.assign(n.toString())}function Wn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function Yn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function rt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Kn(e){let o=await import(e?Jt:Zt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):Yn(o)}function jn(){try{let e=sessionStorage.getItem(Rt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Xn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(Ft);if(!n)return e;let o=Oe(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,s=typeof o.zoom=="number"?o.zoom:e.zoom,h=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:s,spread:h}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Fe(e){try{sessionStorage.setItem(Ft,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function ot(e){try{sessionStorage.setItem(Rt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function Zn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function Jn(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function Qn(e,n){return e.type==="note"&&e.folder===n}function At(e,n){let o=P(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function er(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(s=>s.type==="note").map(s=>s.folder))];return u.forEach((s,h)=>{let k=Math.PI*2*h/Math.max(u.length,1),L={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===s&&r.set(S.id,L)}),r}if(n==="tag"){let u=e.nodes.filter(h=>h.type==="tag"),s=new Map;u.forEach((h,k)=>{let L=Math.PI*2*k/Math.max(u.length,1);s.set(h.tag,{x:Math.cos(L)*o,y:Math.sin(L)*o,z:0})});for(let h of e.nodes)if(h.type==="tag"){let k=s.get(h.tag);k&&r.set(h.id,k)}else if(h.dominantTag.length>0){let k=s.get(h.dominantTag);k&&r.set(h.id,k)}}return r}function tr(e,n){let o=[],r=u=>{let s=n*u;for(let h of o){let k=e(h);k&&(h.vx=(h.vx??0)+(k.x-(h.x??0))*s,h.vy=(h.vy??0)+(k.y-(h.y??0))*s,h.vz=(h.vz??0)+(k.z-(h.z??0))*s)}};return r.initialize=u=>{o=u},r}function It(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let s=u.getAttribute(r);u.setAttribute("aria-pressed",s===o?"true":"false")}}function nr(e,n,o,r){let u=nt(n.links),s=(t,a,l)=>t<a?`${t}|${a}|${l}`:`${a}|${t}|${l}`,h=new Map,k=new Map,L=new Set,S=new Set;r.fullData!==n&&(h=new Map(r.fullData.nodes.map(t=>[t.id,t])),k=nt(r.fullData.links),L=new Set(n.nodes.map(t=>t.id)),S=new Set(n.links.map(t=>s(P(t.source),P(t.target),t.kind))));let G=t=>{if(r.fullData===n)return!1;let a=mt(k,L,t,r.expandHops);if(a.size===0)return!1;for(let l of a){let c=h.get(l);c&&(n.nodes.push(c),L.add(l))}for(let l of r.fullData.links){let c=P(l.source),i=P(l.target);if(!L.has(c)||!L.has(i))continue;let f=s(c,i,l.kind);S.has(f)||(S.add(f),n.links.push(l))}return u=nt(n.links),!0},m={lens:jn(),allLabels:!1,focusTag:null,focusFolder:null},H=null,R=null,v=Xn(),A=()=>R??H,I=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,rn).map(t=>t.id)),B=t=>{let a=t.val;return t.isHub&&(a*=dn),m.lens==="tag"&&t.type==="tag"&&(a*=fn),m.focusTag&&t.id===`tag:${m.focusTag}`&&(a*=gn),a},z=t=>{let a=A();return m.allLabels||a===t.id||a!==null&&(u.get(a)?.has(t.id)??!1)?!0:I.has(t.id)},C=t=>{let a=ze((B(t)-ke)/5,0,1);return(yt+a*(bn-yt))*v.nodeScale},M=t=>{let a=A();if(a!==null)return a===t||(u.get(a)?.has(t)??!1);if(m.focusTag===null&&m.focusFolder===null)return!0;let l=n.nodes.find(c=>c.id===t);return l?m.focusFolder!==null?Qn(l,m.focusFolder):m.focusTag!==null&&Jn(l,m.focusTag):!1},Z=t=>t.type==="external"?o.current.external:m.lens==="tag"?t.type==="tag"?o.current.tertiary:$n(t.dominantTag,o.current):m.lens==="folder"?t.type==="tag"?o.current.tertiary:Dt(t.folder,o.current):m.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,W=t=>{let a=A();if(a!==null&&(a===t.id||(u.get(a)?.has(t.id)??!1)))return o.current.accent;let l=Z(t);return M(t.id)?K()?t.type==="external"?X(o.current.external,"#ffffff",.18):t.type==="tag"?X(o.current.tertiary,"#ffffff",.22):t.isHub?X("#fff3e4",o.current.accent,.1):X("#ffffff",o.current.accent,.12):t.type==="external"?X(o.current.external,"#08343a",.12):t.type==="tag"?X(o.current.tertiary,o.current.accent,.55):t.isHub?X(o.current.ink,o.current.accent,.22):l:de(l,we)},oe=t=>{let a=K();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},U=t=>{let a=P(t.source),l=P(t.target),c=A();return c!==null&&(a===c||l===c)?K()?.72:.78:(c!==null||m.focusTag!==null||m.focusFolder!==null)&&(!M(a)||!M(l))?oe(t.kind)*we:oe(t.kind)},ae=t=>{let a=P(t.source),l=P(t.target),c=A(),i=K()?wn:kn;return c!==null&&(a===c||l===c)?X(o.current.accent,i,.45):i},J=t=>de(ae(t),U(t)),j=()=>n,d=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:Le,len:He}},g=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=He/ze(v.zoom,.4,2.5),{dir:l,len:c}=d(),i=a/c;e.cameraPosition({x:l.x*i,y:l.y*i,z:l.z*i},bt,t),ge();return}typeof e.zoom=="function"&&e.zoom(v.zoom,t)},y=()=>{let t=En(v.spread),a=Ze.min+t*(Ze.max-Ze.min),l=Je.min+t*(Je.max-Je.min),c=e.d3Force("charge");c?.strength&&c.strength(a),c?.theta&&r.layout.chargeTheta!==void 0&&c.theta(r.layout.chargeTheta);let i=e.d3Force("link");i?.distance&&i.distance(T=>m.lens==="tag"&&T.kind==="tag"?l*.72:l),i?.strength&&i.strength(T=>{if(T.kind==="cooc"||T.kind==="folder")return .04;if(m.lens==="tag"&&T.kind==="tag")return .95;if(m.lens==="folder"){let _=At(n.nodes,T.source),V=At(n.nodes,T.target);if(_!==null&&_===V)return .72}return T.kind==="tag"?.65:.8});let f=e.d3Force("center");f?.strength&&f.strength(on);let w=Qe.min+t*(Qe.max-Qe.min),p=er(n,m.lens,w),b=m.lens==="folder"||m.lens==="tag"?.08:0;e.d3Force("cluster",tr(T=>p.get(T.id)??null,b)),r.use3d&&e.d3Force("flattenZ",null)},E=new Map,D=new Map,N=new Map,$=new Map,Ue=(t,a,l)=>{let c=`${Math.round(a*4)}|${l}`,i=$.get(c);if(i)return i;let f={geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:l})};return $.set(c,f),f},Y=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,l=r.lod.dotDistance,c=r.lod.nodeResolution??14;E.clear(),D.clear(),$.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(i=>{let f=C(i),w=W(i),p=!1;if(a){if(K()){let V=i.isHub?1.35:1.1,O=new a.MeshLambertMaterial({color:w,emissive:w,emissiveIntensity:V});E.set(i.id,{material:O,base:V,phase:i.phase}),p=new a.Mesh(new a.SphereGeometry(f,c,c),O)}else p=new a.Mesh(new a.SphereGeometry(f,c,c),new a.MeshBasicMaterial({color:w}));if(l!==void 0&&p!==!1){let V=Ue(a,f,w),O=new a.Mesh(V.geometry,V.material),ne=new a.LOD;ne.addLevel(p,0),ne.addLevel(O,l),p=ne}}if(!z(i)||!t)return p;let b=new t(i.name),T=K()?"rgba(255, 255, 255, 0.85)":de(o.current.ink,.88);if(b.color=M(i.id)?T:de(T,we),b.fontWeight="400",b.strokeWidth=0,b.textHeight=I.has(i.id)?6.5:5.5,b.center.set(0,.5),b.position.x=f+2,b.position.y=0,r.lod.labelDistance!==void 0&&D.set(i.id,{sprite:b,node:i}),!a||p===!1)return b;let _=new a.Group;return _.add(p),_.add(b),_})},ve=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),l=r.lod.linkResolution??5,c=r.lod.cullDistance;N.clear(),e.linkThreeObject(i=>{let f=yn[i.kind]*v.edgeScale,w=new t.MeshBasicMaterial({color:ae(i),transparent:!0,opacity:U(i),depthWrite:!1}),p=new t.Mesh(new t.CylinderGeometry(f,f,1,l),w);return c!==void 0&&N.set(i,p),p}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((i,f)=>{let w=f.end.x-f.start.x,p=f.end.y-f.start.y,b=f.end.z-f.start.z,T=Math.sqrt(w*w+p*p+b*b);return i.position.x=(f.start.x+f.end.x)/2,i.position.y=(f.start.y+f.end.y)/2,i.position.z=(f.start.z+f.end.z)/2,i.scale.x=1,i.scale.y=Math.max(T,.01),i.scale.z=1,i.quaternion.setFromUnitVectors(a,new t.Vector3(w,p,b).normalize()),!0})},re=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=A();if(a===null)return 0;let l=P(t.source),c=P(t.target);return l===a||c===a?2:0})},q=()=>{e.nodeVal(B),e.nodeColor(W),e.linkColor(J),e.linkWidth(t=>{let a=P(t.source),l=P(t.target),c=A(),i=v.edgeScale;return c!==null&&(a===c||l===c)?.7*i:t.kind==="wikilink"||t.kind==="external"?.5*i:(t.kind==="tag"?.35:.25)*i}),typeof e.linkOpacity=="function"&&e.linkOpacity(pt),re(),ve(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},fe=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(f,w)=>{let p=document.createElement("span");p.className="graph-landing__legend-item";let b=document.createElement("span");b.className="graph-landing__dot",b.setAttribute("aria-hidden","true"),b.style.background=f;let T=document.createElement("span");return T.textContent=w,p.append(b,T),p},l=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",i=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,l),a(o.current.tertiary,c),a(o.current.external,i))},Ee=t=>{let a=document.createElement("li"),l=document.createElement("button");l.type="button",l.className="graph-landing__tag-item",l.dataset[t.dataset.key]=t.dataset.value,l.setAttribute("aria-pressed",t.pressed?"true":"false");let c=document.createElement("span");if(c.className="graph-landing__facet-name",t.dotColor!==null){let f=document.createElement("span");f.className="graph-landing__dot",f.style.background=t.dotColor,c.append(f)}c.append(document.createTextNode(t.label));let i=document.createElement("span");return i.className="graph-landing__tag-count",i.textContent=String(t.count),l.append(c,i),a.append(l),a},xe=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),l=r.root.querySelector(".graph-landing__tags");if(m.lens==="folder"){let i=r.root.dataset.folderRootLabel??"root",f=new Map;for(let p of n.nodes)p.type==="note"&&f.set(p.folder,(f.get(p.folder)??0)+1);let w=[...f.entries()].sort((p,b)=>b[1]-p[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),l instanceof HTMLElement&&(l.hidden=w.length===0),t.replaceChildren(...w.map(([p,b])=>Ee({dataset:{key:"graphFolder",value:p},pressed:m.focusFolder===p,dotColor:Dt(p,o.current),label:p==="root"?i:p,count:b})));return}let c=n.nodes.filter(i=>i.type==="tag").sort((i,f)=>f.degree-i.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),l instanceof HTMLElement&&(l.hidden=c.length===0),t.replaceChildren(...c.map(i=>Ee({dataset:{key:"graphTag",value:i.tag},pressed:m.focusTag===i.tag,dotColor:null,label:i.tag,count:i.degree})))},Q=()=>{e.graphData(j()),y(),q(),Y(),fe(),xe(),It(r.root,"[data-graph-lens]",m.lens,"data-graph-lens"),e.d3ReheatSimulation()},Se=t=>{m.lens=t,t!=="tag"&&(m.focusTag=null),t!=="folder"&&(m.focusFolder=null),ot(t),Q()},se=t=>{m.focusTag=m.focusTag===t?null:t,m.focusFolder=null,m.focusTag&&(m.lens="tag",ot("tag")),Q()},$e=t=>{m.focusFolder=m.focusFolder===t?null:t,m.focusTag=null,m.focusFolder&&(m.lens="folder",ot("folder")),Q()},ie=()=>r.use3d?Un(o.current):Bt(o.current),ge=()=>{if(!r.use3d||!r.lod.fog||!r.three||typeof e.scene!="function")return;let t=d().len;e.scene().fog=new r.three.Fog(ie(),t*pn,t*hn)};e.graphData(j()),e.backgroundColor(ie()),e.nodeLabel(t=>t.name),e.nodeRelSize(an),typeof e.nodeOpacity=="function"&&e.nodeOpacity(sn),typeof e.linkOpacity=="function"&&e.linkOpacity(pt),y(),q();let ee=r.root.querySelector("[data-graph-preview]"),le=r.root.querySelector("[data-graph-preview-chip]"),x=r.root.querySelector("[data-graph-preview-title]"),Ce=r.root.querySelector("[data-graph-preview-excerpt]"),Me=0;window.addCleanup(()=>window.clearTimeout(Me));let qt=t=>{if(!(ee instanceof HTMLElement)||!(le instanceof HTMLElement)||!(x instanceof HTMLElement)||!(Ce instanceof HTMLElement))return;window.clearTimeout(Me);let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",c=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let i=r.root.dataset.previewTagTemplate??"{n} notes";le.textContent=l,x.textContent=`#${t.tag}`,Ce.textContent=i.replace("{n}",String(t.degree))}else t.type==="external"?(le.textContent=c,x.textContent=t.name,Ce.textContent=t.url):(le.textContent=a,x.textContent=t.name,Ce.textContent=t.excerpt);ee.hidden=!1,ee.dataset.visible="true"},it=()=>{ee instanceof HTMLElement&&(window.clearTimeout(Me),Me=window.setTimeout(()=>{ee.dataset.visible="false",ee.hidden=!0},vn))};if(e.onNodeHover(t=>{H=t?t.id:null,R===null&&(t?qt(t):it()),q(),r.use3d&&Y()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Ge()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=un;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=K()?wt:0,r.bloomPass.radius=kt,r.bloomPass.threshold=Lt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(Le,bt),v.zoom!==1&&g(0)),Y(),ge(),!Ge()){let t=0,a=()=>{let l=performance.now()/1e3*Tn;for(let c of E.values())c.material.emissiveIntensity=c.base*(1+Ln*Math.sin(l+c.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}if(r.lod.labelDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.labelDistance,a=e.cameraPosition.bind(e),l=0,c=()=>{let i=a();if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number")for(let f of D.values()){let w=f.node.x??0,p=f.node.y??0,b=f.node.z??0,T=Math.hypot(i.x-w,i.y-p,i.z-b);f.sprite.visible=je(T,t)==="full"}l=window.requestAnimationFrame(c)};l=window.requestAnimationFrame(c),window.addCleanup(()=>window.cancelAnimationFrame(l))}if(r.lod.cullDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.cullDistance,a=e.cameraPosition.bind(e),l=0,c=()=>{let i=a();if(i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.z=="number"){let f=A();for(let[w,p]of N){let b=P(w.source),T=P(w.target);if(f!==null&&(b===f||T===f)){p.visible=!0;continue}let _=Math.hypot(i.x-p.position.x,i.y-p.position.y,i.z-p.position.z);p.visible=!ft(_,t)}}l=window.requestAnimationFrame(c)};l=window.requestAnimationFrame(c),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,l)=>{let c=C(t),i=t.x??0,f=t.y??0;if(a.save(),a.beginPath(),a.arc(i,f,c,0,Math.PI*2),a.fillStyle=W(t),a.fill(),t.isHub&&(a.strokeStyle=M(t.id)?o.current.accent:de(o.current.accent,we),a.lineWidth=1.2/l,a.stroke()),z(t)){let w=11.5/l;a.font=`${w}px ${o.current.font}`,a.fillStyle=M(t.id)?o.current.ink:de(o.current.ink,we),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,i,f-c-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,l)=>{let c=C(t)+8;l.beginPath(),l.arc(t.x??0,t.y??0,c,0,Math.PI*2),l.fillStyle=a,l.fill()});let Ne=r.root.querySelector("[data-graph-inspect]"),Pe=r.root.querySelector("[data-graph-inspect-chip]"),De=r.root.querySelector("[data-graph-inspect-title]"),Ae=r.root.querySelector("[data-graph-inspect-excerpt]"),qe=r.root.querySelector("[data-graph-inspect-tags]"),We=r.root.querySelector("[data-graph-inspect-connected]"),F=r.root.querySelector("[data-graph-inspect-open]"),ce=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),l=r.root.querySelector("[data-graph-rail-scrim]"),c=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),c instanceof HTMLElement&&c.setAttribute("aria-hidden",t?"false":"true"),l instanceof HTMLElement&&(l.hidden=!t)},Ie=t=>{Ge()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Wt=t=>{let a=u.get(t.id)??new Set,l=[];for(let c of a){let i=n.nodes.find(f=>f.id===c);i&&l.push(i)}return l.sort((c,i)=>i.degree-c.degree)},Yt=t=>{if(!(Ne instanceof HTMLElement)||!(Pe instanceof HTMLElement)||!(De instanceof HTMLElement)||!(Ae instanceof HTMLElement)||!(qe instanceof HTMLElement)||!(We instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",c=r.root.dataset.legendLinks??"Links",i=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Pe.textContent=l,De.textContent=`#${t.tag}`,Ae.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Pe.textContent=c,De.textContent=t.name,Ae.textContent=t.url):(Pe.textContent=a,De.textContent=t.name,Ae.textContent=t.excerpt);let f=t.tags.map(p=>{let b=document.createElement("li");return b.textContent=p,b});qe.replaceChildren(...f),qe.hidden=f.length===0;let w=Wt(t).slice(0,12);if(w.length===0){let p=document.createElement("li");p.className="graph-landing__inspect-empty",p.textContent=i,We.replaceChildren(p)}else We.replaceChildren(...w.map(p=>{let b=document.createElement("li"),T=document.createElement("button");T.type="button",T.className="graph-landing__inspect-link",T.dataset.graphInspectId=p.id;let _=p.type==="tag"?l:p.type==="external"?c:a,V=document.createElement("span");V.textContent=_;let O=document.createElement("strong");return O.textContent=p.type==="tag"?`#${p.tag}`:p.name,T.append(V,O),b.append(T),b}));F instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(F.hidden=!1,F.href=$t(t.slug).toString(),F.textContent=r.root.dataset.inspectRead??"Read note",F.removeAttribute("target"),F.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(F.hidden=!1,F.href=t.url,F.textContent=r.root.dataset.inspectOpenExternal??"Open",F.target="_blank",F.rel="noopener noreferrer"):(F.hidden=!0,F.removeAttribute("href"),F.removeAttribute("target"),F.removeAttribute("rel"))),Ne.hidden=!1,r.root.dataset.inspecting="true",ce(!1),it()},me=()=>{R=null,Ne instanceof HTMLElement&&(Ne.hidden=!0),r.root.dataset.inspecting="false",Ie(!0),q(),r.use3d&&Y()},Kt=t=>{if(R===t.id&&t.type==="note"&&t.slug.length>0){qn(t.slug);return}if(R===t.id&&t.type==="external"&&t.url.length>0){Wn(t.url);return}R=t.id,Yt(t),q(),r.use3d&&Y()},Ye=t=>{G(t.id)&&Q(),Kt(t)},Ke=!1;e.onNodeClick((t,a)=>{t&&(Ke=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Ye(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{me(),ce(!1)});let te=r.root.querySelector("#graph-landing-mount");if(te instanceof HTMLElement){let t=null,a=f=>{t={x:f.clientX,y:f.clientY},Ie(!1)},l=(f,w)=>{if(typeof e.graph2ScreenCoords!="function")return null;let p=te.getBoundingClientRect(),b=f-p.left,T=w-p.top,_=null,V=4096;for(let O of j().nodes){if(O.x===void 0||O.y===void 0)continue;let ne=e.graph2ScreenCoords(O.x,O.y,O.z??0),jt=(ne.x-b)**2+(ne.y-T)**2,Xt=(ne.x-f)**2+(ne.y-w)**2,dt=Math.min(jt,Xt);dt<V&&(V=dt,_=O)}return _},c=f=>{let w=t;t=null,Ie(!0),!(!w||(f.clientX-w.x)**2+(f.clientY-w.y)**2>25)&&window.setTimeout(()=>{if(Ke){Ke=!1;return}let b=l(f.clientX,f.clientY);b?Ye(b):me()},0)},i=()=>{t=null,Ie(!0)};te.addEventListener("pointerdown",a,!0),te.addEventListener("pointerup",c,!0),te.addEventListener("pointercancel",i,!0),window.addCleanup(()=>{te.removeEventListener("pointerdown",a,!0),te.removeEventListener("pointerup",c,!0),te.removeEventListener("pointercancel",i,!0)})}It(r.root,"[data-graph-lens]",m.lens,"data-graph-lens"),fe(),xe(),m.lens!=="all"&&Q(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let lt=()=>{o.current=Vt(),e.backgroundColor(ie()),ge(),r.bloomPass&&(r.bloomPass.strength=K()?wt:0,r.bloomPass.radius=kt,r.bloomPass.threshold=Lt),q(),Y(),fe()};document.addEventListener("themechange",lt),window.addCleanup(()=>document.removeEventListener("themechange",lt));let ct=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){me();return}if(a.closest("[data-graph-rail-toggle]")){let b=r.root.dataset.railOpen!=="true";b&&me(),ce(b);return}if(a.closest("[data-graph-rail-scrim]")){ce(!1);return}let l=a.closest("[data-graph-inspect-id]");if(l instanceof HTMLElement&&l.dataset.graphInspectId){let b=r.fullData.nodes.find(T=>T.id===l.dataset.graphInspectId);b&&Ye(b);return}let c=a.closest("[data-graph-lens]");if(c instanceof HTMLElement&&c.dataset.graphLens&&Zn(c.dataset.graphLens)){Se(c.dataset.graphLens);return}let i=a.closest("[data-graph-tag]");if(i instanceof HTMLElement&&i.dataset.graphTag){se(i.dataset.graphTag);return}let f=a.closest("[data-graph-folder]");if(f instanceof HTMLElement&&f.dataset.graphFolder){$e(f.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let w=a.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){m.allLabels=!m.allLabels,w.setAttribute("aria-pressed",m.allLabels?"true":"false");let b=w.dataset.labelShow??"Labels",T=w.dataset.labelHide??"Labels",_=m.allLabels?T:b;w.title=_,w.setAttribute("aria-label",_),Y();return}if(a.closest("[data-graph-theme]")){let b=K()?"light":"dark";document.documentElement.setAttribute("saved-theme",b),localStorage.setItem("theme",b),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${b}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:b}}));return}let p=a.closest("[data-graph-tags-toggle]");if(p instanceof HTMLButtonElement){let b=r.root.querySelector(".graph-landing__tags");if(b instanceof HTMLElement){let T=b.dataset.open==="true";b.dataset.open=T?"false":"true",p.setAttribute("aria-expanded",T?"false":"true")}}},pe=r.root.querySelector("[data-graph-node-scale]"),he=r.root.querySelector("[data-graph-edge-scale]");if(pe instanceof HTMLInputElement){pe.value=String(Math.round(v.nodeScale*100));let t=()=>{v.nodeScale=Number(pe.value)/100,Fe(v),q(),r.use3d&&Y()};pe.addEventListener("input",t),window.addCleanup(()=>pe.removeEventListener("input",t))}if(he instanceof HTMLInputElement){he.value=String(Math.round(v.edgeScale*100));let t=()=>{v.edgeScale=Number(he.value)/100,Fe(v),q()};he.addEventListener("input",t),window.addCleanup(()=>he.removeEventListener("input",t))}let be=r.root.querySelector("[data-graph-zoom]");if(be instanceof HTMLInputElement){be.value=String(Math.round(v.zoom*100));let t=()=>{v.zoom=Number(be.value)/100,Fe(v),g(200)};be.addEventListener("input",t),window.addCleanup(()=>be.removeEventListener("input",t))}let ye=r.root.querySelector("[data-graph-spread]");if(ye instanceof HTMLInputElement){ye.value=String(Math.round(v.spread*100));let t=()=>{v.spread=Number(ye.value)/100,Fe(v),y(),e.d3ReheatSimulation()};ye.addEventListener("input",t),window.addCleanup(()=>ye.removeEventListener("input",t))}ce(!1),r.root.addEventListener("click",ct),window.addCleanup(()=>r.root.removeEventListener("click",ct));let ut=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){ce(!1);return}me()}};window.addEventListener("keydown",ut),window.addCleanup(()=>window.removeEventListener("keydown",ut))}function rr(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function or(){try{return window.localStorage.getItem(at)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function _t(e){try{if(e){window.localStorage.setItem(at,"stopped");return}window.localStorage.removeItem(at)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function ar(e){let n=performance.now(),o=0,r=u=>{let s=Math.min(1,(u-n)/e.durationMs),h=s*s;e.apply(e.from+(e.to-e.from)*h),s<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function sr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,u=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof u=="function"&&u();let s=r.YT;if(!s||typeof s.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(s)},!document.querySelector("script[data-graph-youtube-api]")){let s=document.createElement("script");s.src=cn,s.async=!0,s.dataset.graphYoutubeApi="1",s.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(s)}})}function ir(e){return new e.api.Player(e.host,{videoId:ht,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:ht,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function lr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",u=e.dataset.audioPlay??"Play music",s=null,h=!1,k=null,L=!or(),S=!1,G=C=>{n.setAttribute("aria-pressed",C?"true":"false"),n.setAttribute("aria-label",C?r:u),n.title=C?r:u,n.dataset.playing=C?"true":"false"},m=()=>{k&&(k(),k=null)},H=C=>{s&&s.setVolume(Math.max(0,Math.min(_e,C)))},R=C=>{!L||S||(S=!0,G(!0),C.unMute(),H(0),C.playVideo(),m(),k=ar({from:0,to:_e,durationMs:ln,apply:H}))},v=()=>{L=!1,S=!1,m(),_t(!0),s&&(s.mute(),s.pauseVideo(),H(0)),G(!1)},A=async()=>{if(!s)try{let C=await sr();if(s)return;s=ir({api:C,host:o,onReady:M=>{h=!0,M.mute(),H(0),M.playVideo()},onEnded:M=>{L&&(M.playVideo(),H(_e))}})}catch(C){console.error("[graph-landing] ambient audio unavailable",C)}},I=C=>{let M=C.target;if(!(M instanceof Element&&M.closest("[data-graph-audio-toggle]"))&&!(!L||S||rr())){if(h&&s){R(s);return}A()}},B=()=>{if(L&&S){v();return}if(L=!0,_t(!1),h&&s){R(s);return}A()},z=()=>{if(s){if(document.hidden){m(),s.pauseVideo();return}L&&S&&(s.playVideo(),H(_e))}};G(L),A(),n.addEventListener("click",B),e.addEventListener("pointerdown",I,!0),e.addEventListener("touchstart",I,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",z),window.addCleanup(()=>{n.removeEventListener("click",B),e.removeEventListener("pointerdown",I,!0),e.removeEventListener("touchstart",I,!0),document.removeEventListener("visibilitychange",z),m(),s&&(s.pauseVideo(),s.destroy(),s=null)})}async function cr(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",lr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??"ko",u=e.dataset.sourceLocale??"ko",s=(e.dataset.localePrefixes??"").split(",").map(x=>x.trim()).filter(x=>x.length>0),h=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",L=e.dataset.graphIndexPath??"",S=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,G=S!==void 0&&Number.isFinite(S)&&S>=0?S:void 0,m=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,H=Number.isFinite(m)?m:1,R=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,v=e.dataset.graphRenderMode==="3d"?"3d":"auto",A=e.dataset.graphLayoutFreezeAfterWarmup==="true",I=e.dataset.graphLayoutWarmupTicks?Number.parseInt(e.dataset.graphLayoutWarmupTicks,10):void 0,B=I!==void 0&&Number.isFinite(I)&&I>=0?I:void 0,z=e.dataset.graphLayoutCooldownTicks?Number.parseInt(e.dataset.graphLayoutCooldownTicks,10):void 0,C=z!==void 0&&Number.isFinite(z)&&z>=0?z:void 0,M=e.dataset.graphLayoutChargeTheta?Number.parseFloat(e.dataset.graphLayoutChargeTheta):void 0,Z=M!==void 0&&Number.isFinite(M)&&M>=0?M:void 0,W=e.dataset.graphLodLabelDistance?Number.parseFloat(e.dataset.graphLodLabelDistance):void 0,oe=W!==void 0&&Number.isFinite(W)&&W>=0?W:void 0,U=e.dataset.graphLodDotDistance?Number.parseFloat(e.dataset.graphLodDotDistance):void 0,ae=U!==void 0&&Number.isFinite(U)&&U>=0?U:void 0,J=e.dataset.graphLodCullDistance?Number.parseFloat(e.dataset.graphLodCullDistance):void 0,j=J!==void 0&&Number.isFinite(J)&&J>=0?J:void 0,d=e.dataset.graphLodFog==="true",g=e.dataset.graphLodNodeResolution?Number.parseInt(e.dataset.graphLodNodeResolution,10):void 0,y=g!==void 0&&Number.isFinite(g)&&g>=0?g:void 0,E=e.dataset.graphLodLinkResolution?Number.parseInt(e.dataset.graphLodLinkResolution,10):void 0,D=E!==void 0&&Number.isFinite(E)&&E>=0?E:void 0,N=!1,$=null,Ue={current:Vt()},Y=()=>{N=!0,$&&($._destructor(),$=null),delete e.dataset.graphReady};window.addCleanup(Y);let ve=Vn();if(v==="3d"&&!ve){rt(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let re=v==="3d"||ve,q=Kn(re),fe=re?import(Qt).then(x=>x.default??null).catch(x=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",x),null)):Promise.resolve(null),Ee=re?import(en).catch(x=>(console.error("[graph-landing] three unavailable; using default node spheres",x),null)):Promise.resolve(null),xe=re?import(tn).then(x=>x.UnrealBloomPass?new x.UnrealBloomPass:null).catch(x=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",x),null)):Promise.resolve(null);q.catch(()=>{});let Q;try{Q=Oe(k==="graphIndex"?await fetch(L).then(x=>x.json()):await fetchData)}catch(x){throw rt(n,"Graph could not load content index."),x}if(N)return;let Se=On(xn(Q),{localeId:r,sourceLocale:u,prefixes:s},R),se=gt(Se,G),$e=h.replace("{n}",String(se.nodes.length)).replace("{m}",String(se.links.length));for(let x of o)x.textContent=$e;let ie;try{ie=await q}catch(x){throw rt(n,"Graph could not load. Check your network connection."),x}let[ge,ee,le]=await Promise.all([fe,Ee,xe]);N||(n.replaceChildren(),$=ie(n),n.__graphLanding=$,n.__graphData=se,nr($,se,Ue,{use3d:re,root:e,spriteText:ge,bloomPass:le,three:ee,fullData:Se,expandHops:H,layout:{freezeAfterWarmup:A,warmupTicks:B,cooldownTicks:C,chargeTheta:Z},lod:{labelDistance:oe,dotDistance:ae,cullDistance:j,fog:d,nodeResolution:y,linkResolution:D}}))}var ur="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(ur,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{cr()});\n';

// src/components/styles/graph-landing.scss
var graph_landing_default = 'html:has(.graph-landing),\nbody:has(.graph-landing) {\n  --graph-external: #3f6f8c;\n  height: 100dvh;\n  overflow: hidden;\n}\n\nhtml[saved-theme=dark]:has(.graph-landing),\nhtml[saved-theme=dark] body:has(.graph-landing) {\n  --graph-external: #8fb6c8;\n}\n\nhtml:not([saved-theme=dark]):has(.graph-landing),\nhtml:not([saved-theme=dark]) body:has(.graph-landing) {\n  --graph-external: #0f6a72;\n}\n\n.page:has(.graph-landing) > #quartz-body {\n  row-gap: 0;\n}\n\n.page:has(.graph-landing) footer,\n.page:has(.graph-landing) header,\n.page:has(.graph-landing) .left,\n.page:has(.graph-landing) .right,\n.page:has(.graph-landing) .sidebar {\n  display: none;\n}\n\n.center.minimal:has(.graph-landing) {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing {\n  background: var(--light);\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  max-width: 100%;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n/* Pinned to the viewport so host wrappers (page padding, header rows)\n   can never crop the canvas. */\n.graph-landing__hero {\n  background: var(--light);\n  height: 100svh;\n  height: 100dvh;\n  inset: 0;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n.graph-landing__canvas {\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  /* Touch drags rotate the constellation instead of scrolling/zooming the page. */\n  touch-action: none;\n  width: 100%;\n}\n\n.graph-landing__canvas canvas {\n  display: block;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.graph-landing__overlay {\n  height: 100%;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n\n.graph-landing__rail {\n  backdrop-filter: blur(16px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 14px;\n  bottom: 66px;\n  box-shadow: 0 12px 40px rgba(8, 10, 16, 0.18);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  left: 16px;\n  max-height: calc(100dvh - 140px);\n  max-width: 248px;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 14px 14px 12px;\n  pointer-events: none;\n  position: absolute;\n  top: auto;\n  touch-action: pan-y;\n  transform: translateY(10px);\n  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;\n  visibility: hidden;\n  width: 248px;\n  z-index: 4;\n}\n\n.graph-landing[data-rail-open=true] .graph-landing__rail {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n  visibility: visible;\n}\n\n.graph-landing__rail > * {\n  flex-shrink: 0;\n}\n\n.graph-landing__chrome {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  left: 0;\n  padding: 1.25rem 1.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.graph-landing__title-block--chrome {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  pointer-events: auto;\n}\n\n.graph-landing__scrim {\n  display: none;\n}\n\n.graph-landing__rail-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  left: 16px;\n  pointer-events: auto;\n  position: absolute;\n  width: 40px;\n  z-index: 5;\n}\n\n.graph-landing__rail-toggle:focus-visible,\n.graph-landing__audio-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__audio-toggle {\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--light) 78%, transparent);\n  border: 1px solid var(--lightgray);\n  border-radius: 10px;\n  bottom: 16px;\n  box-shadow: 0 8px 24px rgba(8, 10, 16, 0.16);\n  color: var(--dark);\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  justify-content: center;\n  left: 64px;\n  pointer-events: auto;\n  position: absolute;\n  width: 40px;\n  z-index: 5;\n}\n\n.graph-landing__audio-toggle .graph-landing__icon--audio-on {\n  display: none;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__icon--audio-on {\n  display: block;\n}\n\n.graph-landing__audio-toggle[data-playing=true] .graph-landing__icon--audio-off {\n  display: none;\n}\n\n.graph-landing__audio,\n.graph-landing__audio iframe {\n  height: 113px;\n  width: 200px;\n}\n\n.graph-landing__audio {\n  bottom: 0;\n  left: 0;\n  opacity: 0.02;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  z-index: 0;\n}\n\n.graph-landing__top-right {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1.25rem;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n.graph-landing__title-block {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 8px;\n}\n\n.graph-landing__title {\n  color: var(--dark);\n  font-family: var(--bodyFont);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.2;\n  margin: 0;\n  text-decoration: none;\n}\n\na.graph-landing__title:hover,\na.graph-landing__title:focus-visible {\n  color: var(--secondary);\n}\n\n.graph-landing__counts {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.graph-landing__lenses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 4px;\n}\n\n.graph-landing__chip {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  line-height: 1.2;\n  min-height: 44px;\n  padding: 12px 8px;\n  position: relative;\n}\n\n.graph-landing__chip:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__chip:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__chip[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__chip[aria-pressed=true]::after {\n  background: currentColor;\n  bottom: 11px;\n  content: "";\n  height: 1px;\n  left: 8px;\n  pointer-events: none;\n  position: absolute;\n  right: 8px;\n}\n\n.graph-landing__section-label {\n  color: var(--gray);\n  cursor: default;\n  font-family: var(--bodyFont);\n  font-size: 11px;\n  letter-spacing: 0.04em;\n  line-height: 1.3;\n  margin: 0 0 4px;\n  pointer-events: none;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle,\n.graph-landing__icon-btn,\n.graph-landing__filters-toggle {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  font-weight: 400;\n  height: 44px;\n  justify-content: center;\n  line-height: 1;\n  min-height: 44px;\n  padding: 0;\n  text-decoration: none;\n}\n\n.graph-landing__nav-link:hover,\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:hover,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:hover,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:hover,\n.graph-landing__filters-toggle:focus-visible {\n  color: var(--secondary);\n  outline: none;\n}\n\n.graph-landing__nav-link:focus-visible,\n.graph-landing__locale-toggle:focus-visible,\n.graph-landing__icon-btn:focus-visible,\n.graph-landing__filters-toggle:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__nav-link,\n.graph-landing__locale-toggle {\n  color: var(--dark);\n}\n\n.graph-landing__icon-btn {\n  min-width: 44px;\n}\n\n/* Sun shows in dark mode (click -> light), moon in light mode. */\n.graph-landing__icon--sun {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--sun {\n  display: block;\n}\n\n:root[saved-theme=dark] .graph-landing__icon--moon {\n  display: none;\n}\n\n.graph-landing__tags {\n  min-width: 0;\n}\n\n.graph-landing__filters-toggle {\n  display: none;\n}\n\n.graph-landing__tag-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__tag-item {\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--gray);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  font-size: 13px;\n  gap: 8px;\n  justify-content: space-between;\n  line-height: 1.4;\n  min-height: 32px;\n  padding: 6px 8px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__tag-item:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tag-item:focus-visible {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tag-item[aria-pressed=true] {\n  color: var(--secondary);\n  font-weight: 500;\n}\n\n.graph-landing__facet-name {\n  align-items: center;\n  display: inline-flex;\n  gap: 7px;\n}\n\n.graph-landing__tag-count {\n  color: var(--gray);\n  font-variant-numeric: tabular-nums;\n}\n\n.graph-landing__utils {\n  border-top: 1px solid var(--lightgray);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n}\n\n.graph-landing__tune {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.graph-landing__tune-head {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__tools {\n  display: inline-flex;\n  gap: 2px;\n}\n\n.graph-landing__tool {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  color: var(--gray);\n  cursor: pointer;\n  display: inline-flex;\n  height: 28px;\n  justify-content: center;\n  width: 28px;\n}\n\n.graph-landing__tool:hover {\n  background: color-mix(in srgb, var(--secondary) 8%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__tool:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n\n.graph-landing__tool[aria-pressed=true] {\n  background: color-mix(in srgb, var(--secondary) 12%, transparent);\n  color: var(--secondary);\n}\n\n.graph-landing__slider {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.graph-landing__slider span {\n  color: var(--gray);\n  font-size: 11px;\n}\n\n.graph-landing__slider input[type=range] {\n  accent-color: var(--secondary);\n  cursor: pointer;\n  width: 100%;\n}\n\n.graph-landing__legend {\n  align-items: center;\n  color: var(--gray);\n  cursor: default;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  gap: 8px 12px;\n  line-height: 1.3;\n}\n\n.graph-landing__legend-item {\n  align-items: center;\n  display: inline-flex;\n  gap: 6px;\n}\n\n.graph-landing__dot {\n  border-radius: 50%;\n  display: inline-block;\n  height: 7px;\n  width: 7px;\n}\n\n.graph-landing__dot--note {\n  background: var(--darkgray);\n}\n\n.graph-landing__dot--tag {\n  background: var(--tertiary);\n}\n\n.graph-landing__dot--external {\n  background: var(--graph-external);\n}\n\n.graph-landing__preview {\n  background: color-mix(in srgb, var(--light) 88%, transparent);\n  backdrop-filter: blur(14px);\n  border: 1px solid color-mix(in srgb, var(--lightgray) 70%, transparent);\n  border-radius: 14px;\n  bottom: 2rem;\n  left: 50%;\n  margin: 0;\n  max-width: 560px;\n  opacity: 0;\n  padding: 1rem 1.3rem 0.9rem;\n  pointer-events: none;\n  position: absolute;\n  transform: translate(-58%, 6px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  width: min(560px, 100% - 2.5rem);\n}\n\n.graph-landing__preview[data-visible=true] {\n  opacity: 1;\n  transform: translate(-58%, 0);\n}\n\n.graph-landing__preview-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0 0 0.35rem;\n  text-transform: uppercase;\n}\n\n.graph-landing__preview-title {\n  color: var(--dark);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0 0 0.4rem;\n}\n\n.graph-landing__preview-excerpt {\n  color: var(--darkgray);\n  display: -webkit-box;\n  font-size: 13px;\n  line-height: 1.5;\n  margin: 0 0 0.55rem;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.graph-landing__preview-hint {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n:root[saved-theme=dark] .graph-landing__preview {\n  background: rgba(15, 17, 25, 0.78);\n  border-color: rgba(219, 226, 242, 0.14);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-title {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__preview-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n.graph-landing__inspect {\n  background: color-mix(in srgb, var(--light) 90%, transparent);\n  backdrop-filter: blur(16px);\n  border-left: 1px solid var(--lightgray);\n  bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: calc(100dvh - 4.5rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 1.1rem 1.2rem 1.3rem;\n  pointer-events: auto;\n  position: absolute;\n  right: 0;\n  top: 4.5rem;\n  width: min(22rem, 100% - 15rem);\n}\n\n.graph-landing__inspect[hidden] {\n  display: none;\n}\n\n.graph-landing__inspect-bar {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.graph-landing__inspect-chip {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-close {\n  background: transparent;\n  border: 0;\n  color: var(--gray);\n  cursor: pointer;\n  font-family: var(--bodyFont);\n  font-size: 12px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.graph-landing__inspect-title {\n  color: var(--dark);\n  font-size: 1.05rem;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.graph-landing__inspect-excerpt {\n  color: var(--darkgray);\n  font-size: 13px;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.graph-landing__inspect-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-tags li {\n  border: 1px solid var(--lightgray);\n  border-radius: 999px;\n  color: var(--gray);\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.graph-landing__inspect-section {\n  color: var(--gray);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  margin: 6px 0 0;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.graph-landing__inspect-link {\n  align-items: baseline;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  color: var(--dark);\n  cursor: pointer;\n  display: flex;\n  font-family: var(--bodyFont);\n  gap: 8px;\n  min-height: 32px;\n  padding: 4px 2px;\n  text-align: left;\n  width: 100%;\n}\n\n.graph-landing__inspect-link span {\n  color: var(--gray);\n  flex: 0 0 3.2rem;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.graph-landing__inspect-link strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.graph-landing__inspect-empty {\n  color: var(--gray);\n  font-size: 12px;\n  padding: 4px 0;\n}\n\n.graph-landing__inspect-open {\n  align-self: flex-start;\n  color: var(--secondary);\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 8px;\n  min-height: 44px;\n  padding: 10px 0;\n  text-decoration: none;\n}\n\n.graph-landing__inspect-open[hidden] {\n  display: none;\n}\n\n:root[saved-theme=dark] .graph-landing__inspect {\n  background: rgba(12, 14, 20, 0.86);\n  border-left-color: rgba(219, 226, 242, 0.12);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-title,\n:root[saved-theme=dark] .graph-landing__inspect-link {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n:root[saved-theme=dark] .graph-landing__inspect-excerpt {\n  color: rgba(219, 226, 242, 0.72);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__preview {\n    display: none;\n  }\n  .graph-landing__inspect {\n    border-left: 0;\n    border-radius: 16px 16px 0 0;\n    border-top: 1px solid var(--lightgray);\n    bottom: 0;\n    left: 0;\n    max-height: min(52dvh, 100dvh - 4.5rem);\n    padding-bottom: max(12px, env(safe-area-inset-bottom));\n    right: 0;\n    top: auto;\n    width: 100%;\n    z-index: 5;\n  }\n}\n.graph-landing__error {\n  align-items: center;\n  color: var(--gray);\n  display: flex;\n  font-size: 0.9rem;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n:root[saved-theme=dark] .graph-landing {\n  background: var(--light);\n}\n\n:root[saved-theme=dark] .graph-landing__hero,\n:root[saved-theme=dark] .graph-landing__canvas {\n  background: color-mix(in srgb, var(--light) 12%, #05070f);\n}\n\n:root[saved-theme=dark] .graph-landing__rail {\n  background: color-mix(in srgb, var(--light) 72%, transparent);\n  border-color: var(--lightgray);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.38);\n}\n\n@media (max-width: 700px) {\n  .graph-landing__chrome {\n    backdrop-filter: blur(10px);\n    background: color-mix(in srgb, var(--light) 78%, transparent);\n    border-bottom: 1px solid var(--lightgray);\n    gap: 6px;\n    justify-content: flex-start;\n    padding: max(8px, env(safe-area-inset-top)) 10px 8px 12px;\n    pointer-events: auto;\n  }\n  .graph-landing__title-block--rail {\n    display: none;\n  }\n  .graph-landing__title {\n    font-size: 14px;\n  }\n  .graph-landing__top-right {\n    flex: 1 1 auto;\n    gap: 0.65rem;\n    justify-content: flex-end;\n    min-width: 0;\n  }\n  .graph-landing__nav-link,\n  .graph-landing__locale-toggle {\n    font-size: 12px;\n    height: 40px;\n    min-height: 40px;\n  }\n  .graph-landing__rail-toggle,\n  .graph-landing__audio-toggle {\n    bottom: max(16px, env(safe-area-inset-bottom));\n    height: 44px;\n    width: 44px;\n  }\n  .graph-landing__rail-toggle {\n    left: max(16px, env(safe-area-inset-left));\n  }\n  .graph-landing__audio-toggle {\n    left: calc(max(16px, env(safe-area-inset-left)) + 44px + 8px);\n  }\n  .graph-landing__scrim {\n    background: rgba(8, 10, 16, 0.42);\n    border: 0;\n    display: block;\n    inset: 0;\n    pointer-events: auto;\n    position: absolute;\n    z-index: 3;\n  }\n  .graph-landing__scrim[hidden] {\n    display: none;\n  }\n  .graph-landing__rail {\n    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 44px + 10px);\n    left: max(16px, env(safe-area-inset-left));\n    max-height: min(58dvh, 100dvh - 8rem);\n    max-width: min(248px, 100vw - 32px);\n    width: min(248px, 100vw - 32px);\n  }\n  .graph-landing__lenses {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .graph-landing__chip {\n    flex: 0 0 auto;\n    min-height: 44px;\n  }\n  .graph-landing__tag-list {\n    max-height: 16dvh;\n    overflow-y: auto;\n  }\n  :root[saved-theme=dark] .graph-landing__chrome {\n    background: color-mix(in srgb, var(--light) 72%, transparent);\n    border-bottom-color: var(--lightgray);\n  }\n}';
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
      edgeWidth: "Edge width"
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
    edgeWidth: "Edge width"
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
  let rootPath = slug.split("/").filter((segment) => segment !== "").slice(0, -1).map(() => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
var defaultComponentOptions = {
  indexSource: "contentIndex"
};
var GraphLanding_default = ((pageOptions) => {
  const options = { ...defaultComponentOptions, ...pageOptions };
  const GraphLandingConstructor = () => {
    const GraphLanding = ({ fileData, cfg, allFiles }) => {
      const multilingual = fileData.multilingual;
      const slug = typeof fileData.slug === "string" ? fileData.slug : "";
      const localeId = multilingual?.locale ?? slug.split("/")[0] ?? "ko";
      const multilingualCfg = cfg.multilingual;
      const sourceLocale = multilingualCfg?.sourceLocale ?? "ko";
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
      const graphIndexPath = joinSegments(pathToRoot(slug), "static/graphIndex.json");
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
          "data-graph-lod-label-distance": options.lod?.labelDistance,
          "data-graph-lod-dot-distance": options.lod?.dotDistance,
          "data-graph-lod-cull-distance": options.lod?.cullDistance,
          "data-graph-lod-fog": options.lod?.fog ? "true" : void 0,
          "data-graph-lod-node-resolution": options.lod?.nodeResolution,
          "data-graph-lod-link-resolution": options.lod?.linkResolution,
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
                /* @__PURE__ */ u2(
                  "button",
                  {
                    type: "button",
                    class: "graph-landing__audio-toggle",
                    "data-graph-audio-toggle": true,
                    "data-playing": "true",
                    "aria-pressed": "true",
                    "aria-label": copy.audioStop,
                    title: copy.audioStop,
                    children: [
                      /* @__PURE__ */ u2(
                        "svg",
                        {
                          class: "graph-landing__icon graph-landing__icon--audio-on",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: [
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M4.5 10v4h3.2L12 18.2V5.8L7.7 10H4.5Z"
                              }
                            ),
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                d: "M15.2 9.2a3.4 3.4 0 0 1 0 5.6M17.6 7a6.2 6.2 0 0 1 0 10"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ u2(
                        "svg",
                        {
                          class: "graph-landing__icon graph-landing__icon--audio-off",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: [
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M4.5 10v4h3.2L12 18.2V5.8L7.7 10H4.5Z"
                              }
                            ),
                            /* @__PURE__ */ u2(
                              "path",
                              {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                d: "M16 9.5 20 14.5M20 9.5 16 14.5"
                              }
                            )
                          ]
                        }
                      )
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
                      /* @__PURE__ */ u2("div", { class: "graph-landing__lenses", role: "tablist", "aria-label": "Graph lens", children: [
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
                      /* @__PURE__ */ u2("h2", { class: "graph-landing__inspect-title", "data-graph-inspect-title": true }),
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
var defaultOptions = {
  indexSource: "contentIndex"
};
var graphPageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter;
  const translationKey = frontmatter?.translationKey;
  return translationKey === "graph" || translationKey === "home";
};
var GraphLandingPage = (userOpts) => {
  const options = { ...defaultOptions, ...userOpts };
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