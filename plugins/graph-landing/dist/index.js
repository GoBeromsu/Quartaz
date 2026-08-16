// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var Zt=/^[A-Za-z0-9_-]{6,20}$/;function ft(e){if(!e)return;let n=e.trim();return Zt.test(n)?n:void 0}function N(e){return typeof e=="string"?e:e.id}function je(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function gt(e,n){return je(e,n)==="dot"}function mt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((f,k)=>k.degree!==f.degree?k.degree-f.degree:f.id<k.id?-1:f.id>k.id?1:0).slice(0,Math.max(0,n)),u=new Set(r.map(f=>f.id)),l=e.links.filter(f=>{let k=N(f.source),T=N(f.target);return u.has(k)&&u.has(T)});return{nodes:r,links:l}}function pt(e,n,o,r){let u=new Set,l=Math.max(0,Math.floor(r));if(l<=0)return u;let f=new Set([o]),k=new Set([o]);for(let T=0;T<l;T+=1){let S=new Set;for(let A of k)for(let p of e.get(A)??[])f.has(p)||(f.add(p),S.add(p),n.has(p)||u.add(p));k=S}return u}var Be="0.179.1",Jt="https://esm.sh/force-graph@1.51.4",Qt=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Be}`,en=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Be}`,tn=`https://esm.sh/three@${Be}`,nn=`https://esm.sh/three@${Be}/examples/jsm/postprocessing/UnrealBloomPass.js`,rn=8,on=14;var ke=1,Xe=3.5,an=.05,sn=2.6,ln=1,ht=1,we=.18,Rt="graph-landing:lens",Ft="graph-landing:tune",at="graph-landing:ambient-audio",cn="UDVtMYqUAyw",_e=12,un=28e3,dn="https://www.youtube.com/iframe_api",fn=.18,gn=1.4,mn=1.25,pn=1.15,hn=.55,Le={x:330,y:235,z:565},bt={x:0,y:0,z:0},He=Math.hypot(Le.x,Le.y,Le.z),bn=300/He,yn=1600/He,yt=1.3,wn=3.2,wt=1.05,kt=.32,Lt=.28,kn={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Ln="#a8b0c2",Tn="#2a3348",Tt={min:80,max:200},vt={min:40,max:110},Et={min:160,max:280},xt={min:90,max:170},St=220,Ct=2,vn=.15,En=.8,xn=350,Ze={min:-100,max:-190},Je={min:72,max:116},Qe={min:130,max:260};function Sn(e){return ze(e-.5,0,1)}function Oe(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function et(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function Cn(e){let n=[];for(let o of Object.values(e)){let r=Oe(o),u=typeof r.slug=="string"?r.slug:"";if(u.length===0)continue;let l=r.multilingual,f=l&&typeof l=="object"?l:void 0;n.push({slug:u,title:typeof r.title=="string"?r.title:u,links:et(r.links),tags:et(r.tags),externalLinks:et(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:f})}return n}function Mn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=St?n:`${n.slice(0,St).trimEnd()}\\u2026`}function Te(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function Mt(e){return Te(e)/(2*Math.PI)}function Re(e,n,o){let r=Te(e),u=Math.acos(2*Mt(`${e}:phi`)-1),l=n+(o-n)*Mt(`${e}:r`);return{x:l*Math.sin(u)*Math.cos(r),y:l*Math.sin(u)*Math.sin(r),z:l*Math.cos(u)}}function Gt(e){return e==="index"||e.endsWith("/index")}function Ht(e){return e==="tags"||e.startsWith("tags/")}function Nn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Ot(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function tt(e,n){return e.multilingual?.locale?e.multilingual.locale:Ot(e.slug,n).locale}function Pn(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Ot(e.slug,n).permalink}`}function In(e,n){let o=e.find(r=>tt(r,n.prefixes)===n.localeId)??e.find(r=>tt(r,n.prefixes)===n.sourceLocale)??e.find(r=>tt(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function ze(e,n,o){return Math.min(o,Math.max(n,e))}function Nt(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function An(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function st(e){return An(e).trim().toLowerCase()}function Dn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function _n(e){let n=e.trim();return n.length===0||Dn(n)||Ht(n)||Gt(n)?!0:st(n).length===0}function Rn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function zt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Fn(e,n){let o=zt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function Pt(e){return`external:${e}`}function Gn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),u=o.pathname;return(n.get(r)??0)>1&&u.length>1?`${r}${u}`:r}function Hn(e){let n=new Map,o=new Map;for(let r of e){let u=st(r.slug);u.length>0&&!n.has(u)&&n.set(u,r.slug);let l=r.title.trim().toLowerCase();l.length>0&&!o.has(l)&&o.set(l,r.slug);let f=l.replace(/\\s+/g,"-");f.length>0&&!o.has(f)&&o.set(f,r.slug)}return{byBasename:n,byTitle:o}}function On(e,n,o){if(n.has(e))return e;let r=st(e),u=o.byBasename.get(r);if(u)return u;let l=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return l||null}function zn(e,n){return e.length===0?"":[...e].sort((r,u)=>(n.get(u)??0)-(n.get(r)??0))[0]??""}function Vn(e,n,o=void 0){let r=e.filter(d=>!Gt(d.slug)&&!Ht(d.slug)&&!Nn(d)),u=new Map;for(let d of r){let m=Pn(d,n.prefixes),y=u.get(m)??[];y.push(d),u.set(m,y)}let l=[];for(let d of u.values())l.push(In(d,n));let f=new Set(l.map(d=>d.slug)),k=Hn(l),T=new Map,S=[],A=new Set,p=new Map,B=d=>{T.set(d,(T.get(d)??0)+1)},P=(d,m,y)=>d<m?`${d}|${m}|${y}`:`${m}|${d}|${y}`,v=(d,m,y,x)=>{let I=P(d,m,y);return A.has(I)?!1:(A.add(I),S.push({source:d,target:m,kind:y}),x&&(B(d),B(m)),!0)};for(let d of l)for(let m of d.links){if(_n(m))continue;let y=On(m,f,k);y!==null&&y!==d.slug&&v(d.slug,y,"wikilink",!0)}let G=Rn(),R=new Set;for(let d of l)for(let m of d.externalLinks){let y=zt(m);y===null||!Fn(y,G)||(R.add(y),v(d.slug,Pt(y),"external",!0))}let O=new Map;for(let d of R){let m=new URL(d).hostname.replace(/^www\\./,"");O.set(m,(O.get(m)??0)+1)}let z=new Set,$=new Map;for(let d of l)for(let m of d.tags){p.set(m,(p.get(m)??0)+1);let y=`tag:${m}`;z.add(y),v(d.slug,y,"tag",!0);let x=$.get(m)??[];x.push(d.slug),$.set(m,x)}if(o!==!1){let d=o?.maxTagsPerNote,m=o?.maxEdges,y=0;e:for(let x of l)if(!(x.tags.length<2)&&!(d!==void 0&&x.tags.length>d))for(let I=0;I<x.tags.length;I+=1)for(let M=I+1;M<x.tags.length;M+=1){if(m!==void 0&&y>=m)break e;v(`tag:${x.tags[I]}`,`tag:${x.tags[M]}`,"cooc",!1)&&(y+=1)}}let E=new Map;for(let d of l){let m=Nt(d.slug);if(m==="root")continue;let y=E.get(m)??[];y.push(d.slug),E.set(m,y)}for(let d of E.values()){if(d.length<2)continue;let m=[...d].sort();for(let y=0;y<m.length;y+=1){let x=m[(y+1)%m.length],I=m[(y+Ct)%m.length],M=m[y];M===void 0||x===void 0||(M!==x&&!A.has(P(M,x,"wikilink"))&&v(M,x,"folder",!1),m.length>Ct+1&&I!==void 0&&M!==I&&!A.has(P(M,I,"wikilink"))&&v(M,I,"folder",!1))}}let D=[...T.values()],Y=D.length>0?Math.min(...D):0,oe=D.length>0?Math.max(...D):0,U=d=>{let m=T.get(d)??0,y=Math.sqrt(m),x=Math.sqrt(Y),M=Math.sqrt(oe)-x;return M===0?(ke+Xe)/2:ke+(y-x)/M*(Xe-ke)},ae=[...l].sort((d,m)=>(T.get(m.slug)??0)-(T.get(d.slug)??0)),J=new Set(ae.filter(d=>(T.get(d.slug)??0)>0).slice(0,rn).map(d=>d.slug)),X=l.map(d=>{let m=J.has(d.slug),y=m?Re(d.slug,vt.min,vt.max):Re(d.slug,Tt.min,Tt.max);return{id:d.slug,name:d.title,type:"note",val:U(d.slug),degree:T.get(d.slug)??0,isHub:m,tag:"",slug:d.slug,url:"",folder:Nt(d.slug),tags:d.tags,dominantTag:zn(d.tags,p),excerpt:Mn(d.content),phase:Te(d.slug),x:y.x,y:y.y,z:y.z}});for(let d of R){let m=Pt(d),y=Re(m,Et.min,Et.max);X.push({id:m,name:Gn(d,O),type:"external",val:U(m)*hn,degree:T.get(m)??0,isHub:!1,tag:"",slug:"",url:d,folder:"",tags:[],dominantTag:"",excerpt:d,phase:Te(m),x:y.x,y:y.y,z:y.z})}for(let d of z){let m=d.slice(4),y=Re(d,xt.min,xt.max);X.push({id:d,name:m,type:"tag",val:ze(U(d)*.7,ke,Xe),degree:T.get(d)??0,isHub:!1,tag:m,slug:`tags/${m}`,url:"",folder:"tag",tags:[m],dominantTag:m,excerpt:"",phase:Te(d),x:y.x,y:y.y,z:y.z})}return{nodes:X,links:S}}function nt(e){let n=new Map,o=(r,u)=>{let l=n.get(r)??new Set;l.add(u),n.set(r,l)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let u=N(r.source),l=N(r.target);o(u,l),o(l,u)}return n}function ue(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function Vt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ue("--light","#ffffff"),ink:ue("--darkgray","#0f0f0f"),accent:ue("--secondary","#a52142"),tertiary:ue("--tertiary","#c75b75"),gray:ue("--gray","#737373"),external:ue("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Ge(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Bn(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function $n(){return Bn()&&!Ge()}function j(){return document.documentElement.getAttribute("saved-theme")==="dark"}function Ve(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function de(e,n){let o=Ve(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function Z(e,n,o){let r=Ve(e),u=Ve(n);if(!r||!u)return e;let l=(f,k)=>Math.round(f+(k-f)*o);return`rgb(${l(r.r,u.r)}, ${l(r.g,u.g)}, ${l(r.b,u.b)})`}function Bt(e){return j()?Z(e.bg,"#05070f",.88):e.bg}function Un(e){let n=Ve(e);if(!n)return e;let o=r=>{let u=r/255,l=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);return Math.round(l*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function qn(e){return Un(Bt(e))}function $t(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function It(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:$t(e,[n.accent,n.tertiary,n.ink,n.gray])}function Wn(e,n){return e.length===0?n.ink:$t(e,[n.accent,n.tertiary])}function Ut(e){let n=e.split("/").map(l=>encodeURIComponent(l)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let u=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(u,window.location.origin)}function Yn(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Ut(e);window.location.assign(n.toString())}function Kn(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function jn(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function rt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function Xn(e){let o=await import(e?Qt:Jt);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):jn(o)}function Zn(){try{let e=sessionStorage.getItem(Rt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function Jn(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(Ft);if(!n)return e;let o=Oe(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,u=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,l=typeof o.zoom=="number"?o.zoom:e.zoom,f=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:u,zoom:l,spread:f}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function Fe(e){try{sessionStorage.setItem(Ft,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function ot(e){try{sessionStorage.setItem(Rt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function Qn(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function er(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function tr(e,n){return e.type==="note"&&e.folder===n}function At(e,n){let o=N(n),r=e.find(u=>u.id===o);return!r||r.type!=="note"?null:r.folder}function nr(e,n,o){let r=new Map;if(n==="folder"){let u=[...new Set(e.nodes.filter(l=>l.type==="note").map(l=>l.folder))];return u.forEach((l,f)=>{let k=Math.PI*2*f/Math.max(u.length,1),T={x:Math.cos(k)*o,y:Math.sin(k)*o,z:0};for(let S of e.nodes)S.type==="note"&&S.folder===l&&r.set(S.id,T)}),r}if(n==="tag"){let u=e.nodes.filter(f=>f.type==="tag"),l=new Map;u.forEach((f,k)=>{let T=Math.PI*2*k/Math.max(u.length,1);l.set(f.tag,{x:Math.cos(T)*o,y:Math.sin(T)*o,z:0})});for(let f of e.nodes)if(f.type==="tag"){let k=l.get(f.tag);k&&r.set(f.id,k)}else if(f.dominantTag.length>0){let k=l.get(f.dominantTag);k&&r.set(f.id,k)}}return r}function rr(e,n){let o=[],r=u=>{let l=n*u;for(let f of o){let k=e(f);k&&(f.vx=(f.vx??0)+(k.x-(f.x??0))*l,f.vy=(f.vy??0)+(k.y-(f.y??0))*l,f.vz=(f.vz??0)+(k.z-(f.z??0))*l)}};return r.initialize=u=>{o=u},r}function Dt(e,n,o,r){for(let u of e.querySelectorAll(n)){if(!(u instanceof HTMLElement))continue;let l=u.getAttribute(r);u.setAttribute("aria-pressed",l===o?"true":"false")}}function or(e,n,o,r){let u=nt(n.links),l=(t,a,i)=>t<a?`${t}|${a}|${i}`:`${a}|${t}|${i}`,f=new Map,k=new Map,T=new Set,S=new Set;r.fullData!==n&&(f=new Map(r.fullData.nodes.map(t=>[t.id,t])),k=nt(r.fullData.links),T=new Set(n.nodes.map(t=>t.id)),S=new Set(n.links.map(t=>l(N(t.source),N(t.target),t.kind))));let A=t=>{if(r.fullData===n)return!1;let a=pt(k,T,t,r.expandHops);if(a.size===0)return!1;for(let i of a){let c=f.get(i);c&&(n.nodes.push(c),T.add(i))}for(let i of r.fullData.links){let c=N(i.source),s=N(i.target);if(!T.has(c)||!T.has(s))continue;let g=l(c,s,i.kind);S.has(g)||(S.add(g),n.links.push(i))}return u=nt(n.links),!0},p={lens:Zn(),allLabels:!1,focusTag:null,focusFolder:null},B=null,P=null,v=Jn(),G=()=>P??B,R=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,on).map(t=>t.id)),O=t=>{let a=t.val;return t.isHub&&(a*=gn),p.lens==="tag"&&t.type==="tag"&&(a*=mn),p.focusTag&&t.id===`tag:${p.focusTag}`&&(a*=pn),a},z=t=>{let a=G();return p.allLabels||a===t.id||a!==null&&(u.get(a)?.has(t.id)??!1)?!0:R.has(t.id)},$=t=>{let a=ze((O(t)-ke)/5,0,1);return(yt+a*(wn-yt))*v.nodeScale},E=t=>{let a=G();if(a!==null)return a===t||(u.get(a)?.has(t)??!1);if(p.focusTag===null&&p.focusFolder===null)return!0;let i=n.nodes.find(c=>c.id===t);return i?p.focusFolder!==null?tr(i,p.focusFolder):p.focusTag!==null&&er(i,p.focusTag):!1},D=t=>t.type==="external"?o.current.external:p.lens==="tag"?t.type==="tag"?o.current.tertiary:Wn(t.dominantTag,o.current):p.lens==="folder"?t.type==="tag"?o.current.tertiary:It(t.folder,o.current):p.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,Y=t=>{let a=G();if(a!==null&&(a===t.id||(u.get(a)?.has(t.id)??!1)))return o.current.accent;let i=D(t);return E(t.id)?j()?t.type==="external"?Z(o.current.external,"#ffffff",.18):t.type==="tag"?Z(o.current.tertiary,"#ffffff",.22):t.isHub?Z("#fff3e4",o.current.accent,.1):Z("#ffffff",o.current.accent,.12):t.type==="external"?Z(o.current.external,"#08343a",.12):t.type==="tag"?Z(o.current.tertiary,o.current.accent,.55):t.isHub?Z(o.current.ink,o.current.accent,.22):i:de(i,we)},oe=t=>{let a=j();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},U=t=>{let a=N(t.source),i=N(t.target),c=G();return c!==null&&(a===c||i===c)?j()?.72:.78:(c!==null||p.focusTag!==null||p.focusFolder!==null)&&(!E(a)||!E(i))?oe(t.kind)*we:oe(t.kind)},ae=t=>{let a=N(t.source),i=N(t.target),c=G(),s=j()?Ln:Tn;return c!==null&&(a===c||i===c)?Z(o.current.accent,s,.45):s},J=t=>de(ae(t),U(t)),X=()=>n,d=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:Le,len:He}},m=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=He/ze(v.zoom,.4,2.5),{dir:i,len:c}=d(),s=a/c;e.cameraPosition({x:i.x*s,y:i.y*s,z:i.z*s},bt,t),ge();return}typeof e.zoom=="function"&&e.zoom(v.zoom,t)},y=()=>{let t=Sn(v.spread),a=Ze.min+t*(Ze.max-Ze.min),i=Je.min+t*(Je.max-Je.min),c=e.d3Force("charge");c?.strength&&c.strength(a),c?.theta&&r.layout.chargeTheta!==void 0&&c.theta(r.layout.chargeTheta);let s=e.d3Force("link");s?.distance&&s.distance(L=>p.lens==="tag"&&L.kind==="tag"?i*.72:i),s?.strength&&s.strength(L=>{if(L.kind==="cooc"||L.kind==="folder")return .04;if(p.lens==="tag"&&L.kind==="tag")return .95;if(p.lens==="folder"){let _=At(n.nodes,L.source),V=At(n.nodes,L.target);if(_!==null&&_===V)return .72}return L.kind==="tag"?.65:.8});let g=e.d3Force("center");g?.strength&&g.strength(an);let w=Qe.min+t*(Qe.max-Qe.min),h=nr(n,p.lens,w),b=p.lens==="folder"||p.lens==="tag"?.08:0;e.d3Force("cluster",rr(L=>h.get(L.id)??null,b)),r.use3d&&e.d3Force("flattenZ",null)},x=new Map,I=new Map,M=new Map,q=new Map,$e=(t,a,i)=>{let c=`${Math.round(a*4)}|${i}`,s=q.get(c);if(s)return s;let g={geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:i})};return q.set(c,g),g},K=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,i=r.lod.dotDistance,c=r.lod.nodeResolution??14;x.clear(),I.clear(),q.clear(),typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(s=>{let g=$(s),w=Y(s),h=!1;if(a){if(j()){let V=s.isHub?1.35:1.1,H=new a.MeshLambertMaterial({color:w,emissive:w,emissiveIntensity:V});x.set(s.id,{material:H,base:V,phase:s.phase}),h=new a.Mesh(new a.SphereGeometry(g,c,c),H)}else h=new a.Mesh(new a.SphereGeometry(g,c,c),new a.MeshBasicMaterial({color:w}));if(i!==void 0&&h!==!1){let V=$e(a,g,w),H=new a.Mesh(V.geometry,V.material),ne=new a.LOD;ne.addLevel(h,0),ne.addLevel(H,i),h=ne}}if(!z(s)||!t)return h;let b=new t(s.name),L=j()?"rgba(255, 255, 255, 0.85)":de(o.current.ink,.88);if(b.color=E(s.id)?L:de(L,we),b.fontWeight="400",b.strokeWidth=0,b.textHeight=R.has(s.id)?6.5:5.5,b.center.set(0,.5),b.position.x=g+2,b.position.y=0,r.lod.labelDistance!==void 0&&I.set(s.id,{sprite:b,node:s}),!a||h===!1)return b;let _=new a.Group;return _.add(h),_.add(b),_})},ve=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),i=r.lod.linkResolution??5,c=r.lod.cullDistance;M.clear(),e.linkThreeObject(s=>{let g=kn[s.kind]*v.edgeScale,w=new t.MeshBasicMaterial({color:ae(s),transparent:!0,opacity:U(s),depthWrite:!1}),h=new t.Mesh(new t.CylinderGeometry(g,g,1,i),w);return c!==void 0&&M.set(s,h),h}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((s,g)=>{let w=g.end.x-g.start.x,h=g.end.y-g.start.y,b=g.end.z-g.start.z,L=Math.sqrt(w*w+h*h+b*b);return s.position.x=(g.start.x+g.end.x)/2,s.position.y=(g.start.y+g.end.y)/2,s.position.z=(g.start.z+g.end.z)/2,s.scale.x=1,s.scale.y=Math.max(L,.01),s.scale.z=1,s.quaternion.setFromUnitVectors(a,new t.Vector3(w,h,b).normalize()),!0})},re=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=G();if(a===null)return 0;let i=N(t.source),c=N(t.target);return i===a||c===a?2:0})},W=()=>{e.nodeVal(O),e.nodeColor(Y),e.linkColor(J),e.linkWidth(t=>{let a=N(t.source),i=N(t.target),c=G(),s=v.edgeScale;return c!==null&&(a===c||i===c)?.7*s:t.kind==="wikilink"||t.kind==="external"?.5*s:(t.kind==="tag"?.35:.25)*s}),typeof e.linkOpacity=="function"&&e.linkOpacity(ht),re(),ve(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},fe=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(g,w)=>{let h=document.createElement("span");h.className="graph-landing__legend-item";let b=document.createElement("span");b.className="graph-landing__dot",b.setAttribute("aria-hidden","true"),b.style.background=g;let L=document.createElement("span");return L.textContent=w,h.append(b,L),h},i=r.root.dataset.legendNotes??"Notes",c=r.root.dataset.legendTags??"Tags",s=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,i),a(o.current.tertiary,c),a(o.current.external,s))},Ee=t=>{let a=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="graph-landing__tag-item",i.dataset[t.dataset.key]=t.dataset.value,i.setAttribute("aria-pressed",t.pressed?"true":"false");let c=document.createElement("span");if(c.className="graph-landing__facet-name",t.dotColor!==null){let g=document.createElement("span");g.className="graph-landing__dot",g.style.background=t.dotColor,c.append(g)}c.append(document.createTextNode(t.label));let s=document.createElement("span");return s.className="graph-landing__tag-count",s.textContent=String(t.count),i.append(c,s),a.append(i),a},xe=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),i=r.root.querySelector(".graph-landing__tags");if(p.lens==="folder"){let s=r.root.dataset.folderRootLabel??"root",g=new Map;for(let h of n.nodes)h.type==="note"&&g.set(h.folder,(g.get(h.folder)??0)+1);let w=[...g.entries()].sort((h,b)=>b[1]-h[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),i instanceof HTMLElement&&(i.hidden=w.length===0),t.replaceChildren(...w.map(([h,b])=>Ee({dataset:{key:"graphFolder",value:h},pressed:p.focusFolder===h,dotColor:It(h,o.current),label:h==="root"?s:h,count:b})));return}let c=n.nodes.filter(s=>s.type==="tag").sort((s,g)=>g.degree-s.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),i instanceof HTMLElement&&(i.hidden=c.length===0),t.replaceChildren(...c.map(s=>Ee({dataset:{key:"graphTag",value:s.tag},pressed:p.focusTag===s.tag,dotColor:null,label:s.tag,count:s.degree})))},Q=()=>{e.graphData(X()),y(),W(),K(),fe(),xe(),Dt(r.root,"[data-graph-lens]",p.lens,"data-graph-lens"),e.d3ReheatSimulation()},Se=t=>{p.lens=t,t!=="tag"&&(p.focusTag=null),t!=="folder"&&(p.focusFolder=null),ot(t),Q()},se=t=>{p.focusTag=p.focusTag===t?null:t,p.focusFolder=null,p.focusTag&&(p.lens="tag",ot("tag")),Q()},Ue=t=>{p.focusFolder=p.focusFolder===t?null:t,p.focusTag=null,p.focusFolder&&(p.lens="folder",ot("folder")),Q()},ie=()=>r.use3d?qn(o.current):Bt(o.current),ge=()=>{if(!r.use3d||!r.lod.fog||!r.three||typeof e.scene!="function")return;let t=d().len;e.scene().fog=new r.three.Fog(ie(),t*bn,t*yn)};e.graphData(X()),e.backgroundColor(ie()),e.nodeLabel(t=>t.name),e.nodeRelSize(sn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(ln),typeof e.linkOpacity=="function"&&e.linkOpacity(ht),y(),W();let ee=r.root.querySelector("[data-graph-preview]"),le=r.root.querySelector("[data-graph-preview-chip]"),C=r.root.querySelector("[data-graph-preview-title]"),Ce=r.root.querySelector("[data-graph-preview-excerpt]"),Me=0;window.addCleanup(()=>window.clearTimeout(Me));let qt=t=>{if(!(ee instanceof HTMLElement)||!(le instanceof HTMLElement)||!(C instanceof HTMLElement)||!(Ce instanceof HTMLElement))return;window.clearTimeout(Me);let a=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",c=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let s=r.root.dataset.previewTagTemplate??"{n} notes";le.textContent=i,C.textContent=`#${t.tag}`,Ce.textContent=s.replace("{n}",String(t.degree))}else t.type==="external"?(le.textContent=c,C.textContent=t.name,Ce.textContent=t.url):(le.textContent=a,C.textContent=t.name,Ce.textContent=t.excerpt);ee.hidden=!1,ee.dataset.visible="true"},it=()=>{ee instanceof HTMLElement&&(window.clearTimeout(Me),Me=window.setTimeout(()=>{ee.dataset.visible="false",ee.hidden=!0},xn))};if(e.onNodeHover(t=>{B=t?t.id:null,P===null&&(t?qt(t):it()),W(),r.use3d&&K()}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Ge()&&typeof e.controls=="function"){let t=e.controls();t.autoRotate=!1,t.autoRotateSpeed=fn;let a=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(a))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=j()?wt:0,r.bloomPass.radius=kt,r.bloomPass.threshold=Lt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(Le,bt),v.zoom!==1&&m(0)),K(),ge(),!Ge()){let t=0,a=()=>{let i=performance.now()/1e3*En;for(let c of x.values())c.material.emissiveIntensity=c.base*(1+vn*Math.sin(i+c.phase));t=window.requestAnimationFrame(a)};t=window.requestAnimationFrame(a),window.addCleanup(()=>window.cancelAnimationFrame(t))}if(r.lod.labelDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.labelDistance,a=e.cameraPosition.bind(e),i=0,c=()=>{let s=a();if(s&&typeof s.x=="number"&&typeof s.y=="number"&&typeof s.z=="number")for(let g of I.values()){let w=g.node.x??0,h=g.node.y??0,b=g.node.z??0,L=Math.hypot(s.x-w,s.y-h,s.z-b);g.sprite.visible=je(L,t)==="full"}i=window.requestAnimationFrame(c)};i=window.requestAnimationFrame(c),window.addCleanup(()=>window.cancelAnimationFrame(i))}if(r.lod.cullDistance!==void 0&&typeof e.cameraPosition=="function"){let t=r.lod.cullDistance,a=e.cameraPosition.bind(e),i=0,c=()=>{let s=a();if(s&&typeof s.x=="number"&&typeof s.y=="number"&&typeof s.z=="number"){let g=G();for(let[w,h]of M){let b=N(w.source),L=N(w.target);if(g!==null&&(b===g||L===g)){h.visible=!0;continue}let _=Math.hypot(s.x-h.position.x,s.y-h.position.y,s.z-h.position.z);h.visible=!gt(_,t)}}i=window.requestAnimationFrame(c)};i=window.requestAnimationFrame(c),window.addCleanup(()=>window.cancelAnimationFrame(i))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,i)=>{let c=$(t),s=t.x??0,g=t.y??0;if(a.save(),a.beginPath(),a.arc(s,g,c,0,Math.PI*2),a.fillStyle=Y(t),a.fill(),t.isHub&&(a.strokeStyle=E(t.id)?o.current.accent:de(o.current.accent,we),a.lineWidth=1.2/i,a.stroke()),z(t)){let w=11.5/i;a.font=`${w}px ${o.current.font}`,a.fillStyle=E(t.id)?o.current.ink:de(o.current.ink,we),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,s,g-c-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,i)=>{let c=$(t)+8;i.beginPath(),i.arc(t.x??0,t.y??0,c,0,Math.PI*2),i.fillStyle=a,i.fill()});let Ne=r.root.querySelector("[data-graph-inspect]"),Pe=r.root.querySelector("[data-graph-inspect-chip]"),Ie=r.root.querySelector("[data-graph-inspect-title]"),Ae=r.root.querySelector("[data-graph-inspect-excerpt]"),qe=r.root.querySelector("[data-graph-inspect-tags]"),We=r.root.querySelector("[data-graph-inspect-connected]"),F=r.root.querySelector("[data-graph-inspect-open]"),ce=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),i=r.root.querySelector("[data-graph-rail-scrim]"),c=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),c instanceof HTMLElement&&c.setAttribute("aria-hidden",t?"false":"true"),i instanceof HTMLElement&&(i.hidden=!t)},De=t=>{Ge()||typeof e.controls!="function"||(e.controls().autoRotate=t)},Wt=t=>{let a=u.get(t.id)??new Set,i=[];for(let c of a){let s=n.nodes.find(g=>g.id===c);s&&i.push(s)}return i.sort((c,s)=>s.degree-c.degree)},Yt=t=>{if(!(Ne instanceof HTMLElement)||!(Pe instanceof HTMLElement)||!(Ie instanceof HTMLElement)||!(Ae instanceof HTMLElement)||!(qe instanceof HTMLElement)||!(We instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",i=r.root.dataset.legendTags??"Tags",c=r.root.dataset.legendLinks??"Links",s=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Pe.textContent=i,Ie.textContent=`#${t.tag}`,Ae.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Pe.textContent=c,Ie.textContent=t.name,Ae.textContent=t.url):(Pe.textContent=a,Ie.textContent=t.name,Ae.textContent=t.excerpt);let g=t.tags.map(h=>{let b=document.createElement("li");return b.textContent=h,b});qe.replaceChildren(...g),qe.hidden=g.length===0;let w=Wt(t).slice(0,12);if(w.length===0){let h=document.createElement("li");h.className="graph-landing__inspect-empty",h.textContent=s,We.replaceChildren(h)}else We.replaceChildren(...w.map(h=>{let b=document.createElement("li"),L=document.createElement("button");L.type="button",L.className="graph-landing__inspect-link",L.dataset.graphInspectId=h.id;let _=h.type==="tag"?i:h.type==="external"?c:a,V=document.createElement("span");V.textContent=_;let H=document.createElement("strong");return H.textContent=h.type==="tag"?`#${h.tag}`:h.name,L.append(V,H),b.append(L),b}));F instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(F.hidden=!1,F.href=Ut(t.slug).toString(),F.textContent=r.root.dataset.inspectRead??"Read note",F.removeAttribute("target"),F.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(F.hidden=!1,F.href=t.url,F.textContent=r.root.dataset.inspectOpenExternal??"Open",F.target="_blank",F.rel="noopener noreferrer"):(F.hidden=!0,F.removeAttribute("href"),F.removeAttribute("target"),F.removeAttribute("rel"))),Ne.hidden=!1,r.root.dataset.inspecting="true",ce(!1),it()},me=()=>{P=null,Ne instanceof HTMLElement&&(Ne.hidden=!0),r.root.dataset.inspecting="false",De(!0),W(),r.use3d&&K()},Kt=t=>{if(P===t.id&&t.type==="note"&&t.slug.length>0){Yn(t.slug);return}if(P===t.id&&t.type==="external"&&t.url.length>0){Kn(t.url);return}P=t.id,Yt(t),W(),r.use3d&&K()},Ye=t=>{A(t.id)&&Q(),Kt(t)},Ke=!1;e.onNodeClick((t,a)=>{t&&(Ke=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Ye(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{me(),ce(!1)});let te=r.root.querySelector("#graph-landing-mount");if(te instanceof HTMLElement){let t=null,a=g=>{t={x:g.clientX,y:g.clientY},De(!1)},i=(g,w)=>{if(typeof e.graph2ScreenCoords!="function")return null;let h=te.getBoundingClientRect(),b=g-h.left,L=w-h.top,_=null,V=4096;for(let H of X().nodes){if(H.x===void 0||H.y===void 0)continue;let ne=e.graph2ScreenCoords(H.x,H.y,H.z??0),jt=(ne.x-b)**2+(ne.y-L)**2,Xt=(ne.x-g)**2+(ne.y-w)**2,dt=Math.min(jt,Xt);dt<V&&(V=dt,_=H)}return _},c=g=>{let w=t;t=null,De(!0),!(!w||(g.clientX-w.x)**2+(g.clientY-w.y)**2>25)&&window.setTimeout(()=>{if(Ke){Ke=!1;return}let b=i(g.clientX,g.clientY);b?Ye(b):me()},0)},s=()=>{t=null,De(!0)};te.addEventListener("pointerdown",a,!0),te.addEventListener("pointerup",c,!0),te.addEventListener("pointercancel",s,!0),window.addCleanup(()=>{te.removeEventListener("pointerdown",a,!0),te.removeEventListener("pointerup",c,!0),te.removeEventListener("pointercancel",s,!0)})}Dt(r.root,"[data-graph-lens]",p.lens,"data-graph-lens"),fe(),xe(),p.lens!=="all"&&Q(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let lt=()=>{o.current=Vt(),e.backgroundColor(ie()),ge(),r.bloomPass&&(r.bloomPass.strength=j()?wt:0,r.bloomPass.radius=kt,r.bloomPass.threshold=Lt),W(),K(),fe()};document.addEventListener("themechange",lt),window.addCleanup(()=>document.removeEventListener("themechange",lt));let ct=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){me();return}if(a.closest("[data-graph-rail-toggle]")){let b=r.root.dataset.railOpen!=="true";b&&me(),ce(b);return}if(a.closest("[data-graph-rail-scrim]")){ce(!1);return}let i=a.closest("[data-graph-inspect-id]");if(i instanceof HTMLElement&&i.dataset.graphInspectId){let b=r.fullData.nodes.find(L=>L.id===i.dataset.graphInspectId);b&&Ye(b);return}let c=a.closest("[data-graph-lens]");if(c instanceof HTMLElement&&c.dataset.graphLens&&Qn(c.dataset.graphLens)){Se(c.dataset.graphLens);return}let s=a.closest("[data-graph-tag]");if(s instanceof HTMLElement&&s.dataset.graphTag){se(s.dataset.graphTag);return}let g=a.closest("[data-graph-folder]");if(g instanceof HTMLElement&&g.dataset.graphFolder){Ue(g.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let w=a.closest("[data-graph-labels]");if(w instanceof HTMLButtonElement){p.allLabels=!p.allLabels,w.setAttribute("aria-pressed",p.allLabels?"true":"false");let b=w.dataset.labelShow??"Labels",L=w.dataset.labelHide??"Labels",_=p.allLabels?L:b;w.title=_,w.setAttribute("aria-label",_),K();return}if(a.closest("[data-graph-theme]")){let b=j()?"light":"dark";document.documentElement.setAttribute("saved-theme",b),localStorage.setItem("theme",b),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${b}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:b}}));return}let h=a.closest("[data-graph-tags-toggle]");if(h instanceof HTMLButtonElement){let b=r.root.querySelector(".graph-landing__tags");if(b instanceof HTMLElement){let L=b.dataset.open==="true";b.dataset.open=L?"false":"true",h.setAttribute("aria-expanded",L?"false":"true")}}},pe=r.root.querySelector("[data-graph-node-scale]"),he=r.root.querySelector("[data-graph-edge-scale]");if(pe instanceof HTMLInputElement){pe.value=String(Math.round(v.nodeScale*100));let t=()=>{v.nodeScale=Number(pe.value)/100,Fe(v),W(),r.use3d&&K()};pe.addEventListener("input",t),window.addCleanup(()=>pe.removeEventListener("input",t))}if(he instanceof HTMLInputElement){he.value=String(Math.round(v.edgeScale*100));let t=()=>{v.edgeScale=Number(he.value)/100,Fe(v),W()};he.addEventListener("input",t),window.addCleanup(()=>he.removeEventListener("input",t))}let be=r.root.querySelector("[data-graph-zoom]");if(be instanceof HTMLInputElement){be.value=String(Math.round(v.zoom*100));let t=()=>{v.zoom=Number(be.value)/100,Fe(v),m(200)};be.addEventListener("input",t),window.addCleanup(()=>be.removeEventListener("input",t))}let ye=r.root.querySelector("[data-graph-spread]");if(ye instanceof HTMLInputElement){ye.value=String(Math.round(v.spread*100));let t=()=>{v.spread=Number(ye.value)/100,Fe(v),y(),e.d3ReheatSimulation()};ye.addEventListener("input",t),window.addCleanup(()=>ye.removeEventListener("input",t))}ce(!1),r.root.addEventListener("click",ct),window.addCleanup(()=>r.root.removeEventListener("click",ct));let ut=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){ce(!1);return}me()}};window.addEventListener("keydown",ut),window.addCleanup(()=>window.removeEventListener("keydown",ut))}function ar(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function sr(){try{return window.localStorage.getItem(at)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function _t(e){try{if(e){window.localStorage.setItem(at,"stopped");return}window.localStorage.removeItem(at)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function ir(e){let n=performance.now(),o=0,r=u=>{let l=Math.min(1,(u-n)/e.durationMs),f=l*l;e.apply(e.from+(e.to-e.from)*f),l<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function lr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,u=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof u=="function"&&u();let l=r.YT;if(!l||typeof l.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(l)},!document.querySelector("script[data-graph-youtube-api]")){let l=document.createElement("script");l.src=dn,l.async=!0,l.dataset.graphYoutubeApi="1",l.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(l)}})}function cr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:e.videoId,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function ur(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",u=e.dataset.audioPlay??"Play music",l=ft(e.dataset.graphAmbientVideoId)??cn,f=null,k=!1,T=null,S=!sr(),A=!1,p=E=>{n.setAttribute("aria-pressed",E?"true":"false"),n.setAttribute("aria-label",E?r:u),n.title=E?r:u,n.dataset.playing=E?"true":"false"},B=()=>{T&&(T(),T=null)},P=E=>{f&&f.setVolume(Math.max(0,Math.min(_e,E)))},v=E=>{!S||A||(A=!0,p(!0),E.unMute(),P(0),E.playVideo(),B(),T=ir({from:0,to:_e,durationMs:un,apply:P}))},G=()=>{S=!1,A=!1,B(),_t(!0),f&&(f.mute(),f.pauseVideo(),P(0)),p(!1)},R=async()=>{if(!f)try{let E=await lr();if(f)return;f=cr({api:E,host:o,videoId:l,onReady:D=>{k=!0,D.mute(),P(0),D.playVideo()},onEnded:D=>{S&&(D.playVideo(),P(_e))}})}catch(E){console.error("[graph-landing] ambient audio unavailable",E)}},O=E=>{let D=E.target;if(!(D instanceof Element&&D.closest("[data-graph-audio-toggle]"))&&!(!S||A||ar())){if(k&&f){v(f);return}R()}},z=()=>{if(S&&A){G();return}if(S=!0,_t(!1),k&&f){v(f);return}R()},$=()=>{if(f){if(document.hidden){B(),f.pauseVideo();return}S&&A&&(f.playVideo(),P(_e))}};p(S),R(),n.addEventListener("click",z),e.addEventListener("pointerdown",O,!0),e.addEventListener("touchstart",O,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",$),window.addCleanup(()=>{n.removeEventListener("click",z),e.removeEventListener("pointerdown",O,!0),e.removeEventListener("touchstart",O,!0),document.removeEventListener("visibilitychange",$),B(),f&&(f.pauseVideo(),f.destroy(),f=null)})}async function dr(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",ur(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",u=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",l=(e.dataset.localePrefixes??"").split(",").map(C=>C.trim()).filter(C=>C.length>0),f=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",k=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",T=e.dataset.graphIndexPath??"",S=e.dataset.maxRenderedNodes?Number.parseInt(e.dataset.maxRenderedNodes,10):void 0,A=S!==void 0&&Number.isFinite(S)&&S>=0?S:void 0,p=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,B=Number.isFinite(p)?p:1,P=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,v=e.dataset.graphRenderMode==="3d"?"3d":"auto",G=e.dataset.graphLayoutFreezeAfterWarmup==="true",R=e.dataset.graphLayoutWarmupTicks?Number.parseInt(e.dataset.graphLayoutWarmupTicks,10):void 0,O=R!==void 0&&Number.isFinite(R)&&R>=0?R:void 0,z=e.dataset.graphLayoutCooldownTicks?Number.parseInt(e.dataset.graphLayoutCooldownTicks,10):void 0,$=z!==void 0&&Number.isFinite(z)&&z>=0?z:void 0,E=e.dataset.graphLayoutChargeTheta?Number.parseFloat(e.dataset.graphLayoutChargeTheta):void 0,D=E!==void 0&&Number.isFinite(E)&&E>=0?E:void 0,Y=e.dataset.graphLodLabelDistance?Number.parseFloat(e.dataset.graphLodLabelDistance):void 0,oe=Y!==void 0&&Number.isFinite(Y)&&Y>=0?Y:void 0,U=e.dataset.graphLodDotDistance?Number.parseFloat(e.dataset.graphLodDotDistance):void 0,ae=U!==void 0&&Number.isFinite(U)&&U>=0?U:void 0,J=e.dataset.graphLodCullDistance?Number.parseFloat(e.dataset.graphLodCullDistance):void 0,X=J!==void 0&&Number.isFinite(J)&&J>=0?J:void 0,d=e.dataset.graphLodFog==="true",m=e.dataset.graphLodNodeResolution?Number.parseInt(e.dataset.graphLodNodeResolution,10):void 0,y=m!==void 0&&Number.isFinite(m)&&m>=0?m:void 0,x=e.dataset.graphLodLinkResolution?Number.parseInt(e.dataset.graphLodLinkResolution,10):void 0,I=x!==void 0&&Number.isFinite(x)&&x>=0?x:void 0,M=!1,q=null,$e={current:Vt()},K=()=>{M=!0,q&&(q._destructor(),q=null),delete e.dataset.graphReady};window.addCleanup(K);let ve=$n();if(v==="3d"&&!ve){rt(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let re=v==="3d"||ve,W=Xn(re),fe=re?import(en).then(C=>C.default??null).catch(C=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",C),null)):Promise.resolve(null),Ee=re?import(tn).catch(C=>(console.error("[graph-landing] three unavailable; using default node spheres",C),null)):Promise.resolve(null),xe=re?import(nn).then(C=>C.UnrealBloomPass?new C.UnrealBloomPass:null).catch(C=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",C),null)):Promise.resolve(null);W.catch(()=>{});let Q;try{Q=Oe(k==="graphIndex"?await fetch(T).then(C=>C.json()):await fetchData)}catch(C){throw rt(n,"Graph could not load content index."),C}if(M)return;let Se=Vn(Cn(Q),{localeId:r,sourceLocale:u,prefixes:l},P),se=mt(Se,A),Ue=f.replace("{n}",String(se.nodes.length)).replace("{m}",String(se.links.length));for(let C of o)C.textContent=Ue;let ie;try{ie=await W}catch(C){throw rt(n,"Graph could not load. Check your network connection."),C}let[ge,ee,le]=await Promise.all([fe,Ee,xe]);M||(n.replaceChildren(),q=ie(n),n.__graphLanding=q,n.__graphData=se,or(q,se,$e,{use3d:re,root:e,spriteText:ge,bloomPass:le,three:ee,fullData:Se,expandHops:B,layout:{freezeAfterWarmup:G,warmupTicks:O,cooldownTicks:$,chargeTheta:D},lod:{labelDistance:oe,dotDistance:ae,cullDistance:X,fog:d,nodeResolution:y,linkResolution:I}}))}var fr="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(fr,r)}catch(u){console.error("[graph-landing] failed to persist preferred-locale",u)}});document.addEventListener("nav",()=>{dr()});\n';

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
          "data-graph-ambient-video-id": options.ambientVideoId,
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