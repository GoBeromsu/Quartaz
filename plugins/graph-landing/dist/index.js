// ../../node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}

// src/scripts/graph-landing.inline.ts
var graph_landing_inline_default = 'var un=/^[A-Za-z0-9_-]{6,20}$/;function kt(e){if(!e)return;let n=e.trim();return un.test(n)?n:void 0}function I(e){return typeof e=="string"?e:e.id}function et(e,n){return n===void 0||!Number.isFinite(n)||n<0?"full":e>=n?"dot":"full"}function Re(e,n,o){let r=e.get(n);if(r)return r;let i=o();return e.set(n,i),i}function Y(e,n){let o=e?n(e):void 0;return o!==void 0&&Number.isFinite(o)&&o>=0?o:void 0}function Tt(e,n){if(n===void 0||!Number.isFinite(n)||n<0||n>=e.nodes.length)return e;let r=[...e.nodes].sort((f,L)=>L.degree!==f.degree?L.degree-f.degree:f.id<L.id?-1:f.id>L.id?1:0).slice(0,Math.max(0,n)),i=new Set(r.map(f=>f.id)),c=e.links.filter(f=>{let L=I(f.source),E=I(f.target);return i.has(L)&&i.has(E)});return{nodes:r,links:c}}function vt(e,n,o,r){let i=new Set,c=Math.max(0,Math.floor(r));if(c<=0)return i;let f=new Set([o]),L=new Set([o]);for(let E=0;E<c;E+=1){let C=new Set;for(let D of L)for(let y of e.get(D)??[])f.has(y)||(f.add(y),C.add(y),n.has(y)||i.add(y));L=C}return i}function Lt(e,n,o){let r=new Set;if(n!==null){r.add(n);for(let i of e.get(n)??[])r.add(i)}if(o!==null){r.add(o);for(let i of e.get(o)??[])r.add(i)}return r}var Be="0.179.1",dn="https://esm.sh/force-graph@1.51.4",fn=`https://esm.sh/3d-force-graph@1.80.0?deps=three@${Be}`,gn=`https://esm.sh/three-spritetext@1.9.2?deps=three@${Be}`,mn=`https://esm.sh/three@${Be}`,pn=`https://esm.sh/three@${Be}/examples/jsm/postprocessing/UnrealBloomPass.js`,hn=8,bn=14;var ke=1,tt=3.5,yn=.05,wn=2.6,kn=1,Et=1,we=.18,Bt="graph-landing:lens",Ut="graph-landing:tune",ut="graph-landing:ambient-audio",Tn="UDVtMYqUAyw",_e=12,vn=28e3,Ln="https://www.youtube.com/iframe_api",En=.18,xn=1.4,Sn=1.25,Mn=1.15,Cn=.55,Te={x:330,y:235,z:565},xt={x:0,y:0,z:0},Oe=Math.hypot(Te.x,Te.y,Te.z),Nn=300/Oe,In=1600/Oe,St=1.3,Pn=3.2,Mt=1.05,Ct=.32,Nt=.28,An={wikilink:.3,tag:.22,external:.28,cooc:.16,folder:.16},Dn="#a8b0c2",Rn="#2a3348",It={min:80,max:200},Pt={min:40,max:110},At={min:160,max:280},Dt={min:90,max:170},Rt=220,_t=2,_n=.15,Gn=.8,Hn=350,nt={min:-100,max:-190},rt={min:72,max:116},ot={min:130,max:260};function Fn(e){return Ve(e-.5,0,1)}function ze(e){if(e&&typeof e=="object")return e;throw new Error("graph-landing: expected an object in content index")}function at(e){return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}function On(e){let n=[];for(let o of Object.values(e)){let r=ze(o),i=typeof r.slug=="string"?r.slug:"";if(i.length===0)continue;let c=r.multilingual,f=c&&typeof c=="object"?c:void 0;n.push({slug:i,title:typeof r.title=="string"?r.title:i,links:at(r.links),tags:at(r.tags),externalLinks:at(r.externalLinks),content:typeof r.excerpt=="string"?r.excerpt:typeof r.content=="string"?r.content:"",multilingual:f})}return n}function zn(e){let n=e.replace(/\\s+/g," ").trim();return n.length<=Rt?n:`${n.slice(0,Rt).trimEnd()}\\u2026`}function ve(e){let n=0;for(let o of e)n=n*31+o.charCodeAt(0)>>>0;return n%628/100}function Gt(e){return ve(e)/(2*Math.PI)}function Ge(e,n,o){let r=ve(e),i=Math.acos(2*Gt(`${e}:phi`)-1),c=n+(o-n)*Gt(`${e}:r`);return{x:c*Math.sin(i)*Math.cos(r),y:c*Math.sin(i)*Math.sin(r),z:c*Math.cos(i)}}function qt(e){return e==="index"||e.endsWith("/index")}function Wt(e){return e==="tags"||e.startsWith("tags/")}function Vn(e){let n=e.multilingual?.translationKey;if(n==="home"||n==="graph"||n==="about"||n==="writing")return!0;let o=e.slug;return o==="about"||o.endsWith("/about")||o.startsWith("inbox/")}function Yt(e,n){for(let o of n){if(e===o)return{locale:o,permalink:""};if(e.startsWith(`${o}/`))return{locale:o,permalink:e.slice(o.length+1)}}return{locale:void 0,permalink:e}}function st(e,n){return e.multilingual?.locale?e.multilingual.locale:Yt(e.slug,n).locale}function $n(e,n){return e.multilingual?.translationKey?`key:${e.multilingual.translationKey}`:`slug:${Yt(e.slug,n).permalink}`}function Bn(e,n){let o=e.find(r=>st(r,n.prefixes)===n.localeId)??e.find(r=>st(r,n.prefixes)===n.sourceLocale)??e.find(r=>st(r,n.prefixes)===void 0);if(!o)throw new Error("graph-landing: locale group had no notes to pick");return o}function Ve(e,n,o){return Math.min(o,Math.max(n,e))}function Ht(e){let n=e.split("/").filter(o=>o.length>0);return n.length<2?"root":n[0]??"root"}function Un(e){let n=e.split("/").filter(o=>o.length>0);return n[n.length-1]??""}function dt(e){return Un(e).trim().toLowerCase()}function qn(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("//")}function Wn(e){let n=e.trim();return n.length===0||qn(n)||Wt(n)||qt(n)?!0:dt(n).length===0}function Yn(){let e=window.location.hostname.toLowerCase().replace(/^www\\./,""),n=[e,`www.${e}`,"beomsukoh.com","www.beomsukoh.com"];return[...new Set(n.filter(o=>o.length>0))]}function Kt(e){try{let n=new URL(e,window.location.origin);return n.protocol!=="http:"&&n.protocol!=="https:"?null:(n.hash="",n.hostname=n.hostname.toLowerCase(),n.pathname!=="/"&&n.pathname.endsWith("/")&&(n.pathname=n.pathname.replace(/\\/+$/,"")),n.toString())}catch{return null}}function Kn(e,n){let o=Kt(e);return o===null?!1:!n.includes(new URL(o).hostname)}function Ft(e){return`external:${e}`}function jn(e,n){let o=new URL(e),r=o.hostname.replace(/^www\\./,""),i=o.pathname;return(n.get(r)??0)>1&&i.length>1?`${r}${i}`:r}function Xn(e){let n=new Map,o=new Map;for(let r of e){let i=dt(r.slug);i.length>0&&!n.has(i)&&n.set(i,r.slug);let c=r.title.trim().toLowerCase();c.length>0&&!o.has(c)&&o.set(c,r.slug);let f=c.replace(/\\s+/g,"-");f.length>0&&!o.has(f)&&o.set(f,r.slug)}return{byBasename:n,byTitle:o}}function Zn(e,n,o){if(n.has(e))return e;let r=dt(e),i=o.byBasename.get(r);if(i)return i;let c=o.byTitle.get(e.trim().toLowerCase())??o.byTitle.get(r);return c||null}function Jn(e,n){return e.length===0?"":[...e].sort((r,i)=>(n.get(i)??0)-(n.get(r)??0))[0]??""}function Qn(e,n,o=void 0){let r=e.filter(u=>!qt(u.slug)&&!Wt(u.slug)&&!Vn(u)),i=new Map;for(let u of r){let h=$n(u,n.prefixes),w=i.get(h)??[];w.push(u),i.set(h,w)}let c=[];for(let u of i.values())c.push(Bn(u,n));let f=new Set(c.map(u=>u.slug)),L=Xn(c),E=new Map,C=[],D=new Set,y=new Map,V=u=>{E.set(u,(E.get(u)??0)+1)},A=(u,h,w)=>u<h?`${u}|${h}|${w}`:`${h}|${u}|${w}`,x=(u,h,w,S)=>{let P=A(u,h,w);return D.has(P)?!1:(D.add(P),C.push({source:u,target:h,kind:w}),S&&(V(u),V(h)),!0)};for(let u of c)for(let h of u.links){if(Wn(h))continue;let w=Zn(h,f,L);w!==null&&w!==u.slug&&x(u.slug,w,"wikilink",!0)}let R=Yn(),$=new Set;for(let u of c)for(let h of u.externalLinks){let w=Kt(h);w===null||!Kn(w,R)||($.add(w),x(u.slug,Ft(w),"external",!0))}let z=new Map;for(let u of $){let h=new URL(u).hostname.replace(/^www\\./,"");z.set(h,(z.get(h)??0)+1)}let B=new Set,U=new Map;for(let u of c)for(let h of u.tags){y.set(h,(y.get(h)??0)+1);let w=`tag:${h}`;B.add(w),x(u.slug,w,"tag",!0);let S=U.get(h)??[];S.push(u.slug),U.set(h,S)}if(o!==!1){let u=o?.maxTagsPerNote,h=o?.maxEdges,w=0;e:for(let S of c)if(!(S.tags.length<2)&&!(u!==void 0&&S.tags.length>u))for(let P=0;P<S.tags.length;P+=1)for(let N=P+1;N<S.tags.length;N+=1){if(h!==void 0&&w>=h)break e;x(`tag:${S.tags[P]}`,`tag:${S.tags[N]}`,"cooc",!1)&&(w+=1)}}let M=new Map;for(let u of c){let h=Ht(u.slug);if(h==="root")continue;let w=M.get(h)??[];w.push(u.slug),M.set(h,w)}for(let u of M.values()){if(u.length<2)continue;let h=[...u].sort();for(let w=0;w<h.length;w+=1){let S=h[(w+1)%h.length],P=h[(w+_t)%h.length],N=h[w];N===void 0||S===void 0||(N!==S&&!D.has(A(N,S,"wikilink"))&&x(N,S,"folder",!1),h.length>_t+1&&P!==void 0&&N!==P&&!D.has(A(N,P,"wikilink"))&&x(N,P,"folder",!1))}}let G=[...E.values()],Z=G.length>0?Math.min(...G):0,re=G.length>0?Math.max(...G):0,q=u=>{let h=E.get(u)??0,w=Math.sqrt(h),S=Math.sqrt(Z),N=Math.sqrt(re)-S;return N===0?(ke+tt)/2:ke+(w-S)/N*(tt-ke)},j=[...c].sort((u,h)=>(E.get(h.slug)??0)-(E.get(u.slug)??0)),Q=new Set(j.filter(u=>(E.get(u.slug)??0)>0).slice(0,hn).map(u=>u.slug)),O=c.map(u=>{let h=Q.has(u.slug),w=h?Ge(u.slug,Pt.min,Pt.max):Ge(u.slug,It.min,It.max);return{id:u.slug,name:u.title,type:"note",val:q(u.slug),degree:E.get(u.slug)??0,isHub:h,tag:"",slug:u.slug,url:"",folder:Ht(u.slug),tags:u.tags,dominantTag:Jn(u.tags,y),excerpt:zn(u.content),phase:ve(u.slug),x:w.x,y:w.y,z:w.z}});for(let u of $){let h=Ft(u),w=Ge(h,At.min,At.max);O.push({id:h,name:jn(u,z),type:"external",val:q(h)*Cn,degree:E.get(h)??0,isHub:!1,tag:"",slug:"",url:u,folder:"",tags:[],dominantTag:"",excerpt:u,phase:ve(h),x:w.x,y:w.y,z:w.z})}for(let u of B){let h=u.slice(4),w=Ge(u,Dt.min,Dt.max);O.push({id:u,name:h,type:"tag",val:Ve(q(u)*.7,ke,tt),degree:E.get(u)??0,isHub:!1,tag:h,slug:`tags/${h}`,url:"",folder:"tag",tags:[h],dominantTag:h,excerpt:"",phase:ve(u),x:w.x,y:w.y,z:w.z})}return{nodes:O,links:C}}function it(e){let n=new Map,o=(r,i)=>{let c=n.get(r)??new Set;c.add(i),n.set(r,c)};for(let r of e){if(r.kind!=="wikilink"&&r.kind!=="tag"&&r.kind!=="external")continue;let i=I(r.source),c=I(r.target);o(i,c),o(c,i)}return n}function ce(e,n){let o=document.createElement("span");o.style.color=`var(${e})`,o.style.position="absolute",o.style.visibility="hidden",document.body.appendChild(o);let r=getComputedStyle(o).color;return o.remove(),r||n}function jt(){let e=getComputedStyle(document.documentElement).getPropertyValue("--bodyFont").trim();return{bg:ce("--light","#ffffff"),ink:ce("--darkgray","#0f0f0f"),accent:ce("--secondary","#a52142"),tertiary:ce("--tertiary","#c75b75"),gray:ce("--gray","#737373"),external:ce("--graph-external","#3f6f8c"),font:e.length>0?e:"Inter, sans-serif"}}function Fe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function er(){let e=document.createElement("canvas");return(e.getContext("webgl")??e.getContext("experimental-webgl"))!==null}function tr(){return er()&&!Fe()}function K(){return document.documentElement.getAttribute("saved-theme")==="dark"}function $e(e){let n=e.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);if(n&&n[1]&&n[2]&&n[3])return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])};let o=e.match(/^#([0-9a-f]{6})$/i);if(o&&o[1]){let r=parseInt(o[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}return null}function ue(e,n){let o=$e(e);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${n})`:e}function X(e,n,o){let r=$e(e),i=$e(n);if(!r||!i)return e;let c=(f,L)=>Math.round(f+(L-f)*o);return`rgb(${c(r.r,i.r)}, ${c(r.g,i.g)}, ${c(r.b,i.b)})`}function Xt(e){return K()?X(e.bg,"#05070f",.88):e.bg}function nr(e){let n=$e(e);if(!n)return e;let o=r=>{let i=r/255,c=i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);return Math.round(c*255)};return`rgb(${o(n.r)}, ${o(n.g)}, ${o(n.b)})`}function rr(e){return nr(Xt(e))}function Zt(e,n){let o=0;for(let r of e)o=o*31+r.charCodeAt(0)>>>0;return n[o%n.length]??n[0]??e}function Ot(e,n){return e==="articles"?n.accent:e==="inbox"?n.tertiary:e==="root"?n.ink:Zt(e,[n.accent,n.tertiary,n.ink,n.gray])}function or(e,n){return e.length===0?n.ink:Zt(e,[n.accent,n.tertiary])}function Jt(e){let n=e.split("/").map(c=>encodeURIComponent(c)).join("/"),o=document.querySelector("base")?.getAttribute("href"),r="/";o&&o.startsWith("/")&&!o.startsWith("//")&&(r=o.endsWith("/")?o:`${o}/`);let i=`${r}${n}`.replace(/\\/{2,}/g,"/");return new URL(i,window.location.origin)}function ar(e){if(e.length===0)throw new Error("graph-landing: cannot navigate a node without a slug");let n=Jt(e);window.location.assign(n.toString())}function sr(e){if(e.length===0)throw new Error("graph-landing: cannot open an empty external url");window.open(e,"_blank","noopener,noreferrer")}function ir(e){let n=e.default;if(typeof n!="function")throw new Error("graph-landing: CDN module did not export a graph factory");return n()}function lt(e,n){e.textContent=n,e.classList.add("graph-landing__error")}async function lr(e){let o=await import(e?fn:dn);return e&&typeof o.default=="function"?o.default({controlType:"orbit"}):ir(o)}function cr(){try{let e=sessionStorage.getItem(Bt);if(e==="hub")return"all";if(e==="all"||e==="tag"||e==="folder")return e}catch(e){console.error("[graph-landing] sessionStorage unavailable for lens persistence",e)}return"all"}function ur(){let e={nodeScale:.7,edgeScale:1,zoom:1,spread:1};try{let n=sessionStorage.getItem(Ut);if(!n)return e;let o=ze(JSON.parse(n)),r=typeof o.nodeScale=="number"?o.nodeScale:e.nodeScale,i=typeof o.edgeScale=="number"?o.edgeScale:e.edgeScale,c=typeof o.zoom=="number"?o.zoom:e.zoom,f=typeof o.spread=="number"?o.spread:e.spread;return{nodeScale:r,edgeScale:i,zoom:c,spread:f}}catch(n){return console.error("[graph-landing] sessionStorage unavailable for tune persistence",n),e}}function He(e){try{sessionStorage.setItem(Ut,JSON.stringify(e))}catch(n){console.error("[graph-landing] could not persist tune",n)}}function ct(e){try{sessionStorage.setItem(Bt,e)}catch(n){console.error("[graph-landing] could not persist lens",n)}}function dr(e){return e==="all"||e==="tag"||e==="folder"||e==="hub"}function fr(e,n){return e.type==="tag"?e.tag===n:e.tags.includes(n)}function gr(e,n){return e.type==="note"&&e.folder===n}function zt(e,n){let o=I(n),r=e.find(i=>i.id===o);return!r||r.type!=="note"?null:r.folder}function mr(e,n,o){let r=new Map;if(n==="folder"){let i=[...new Set(e.nodes.filter(c=>c.type==="note").map(c=>c.folder))];return i.forEach((c,f)=>{let L=Math.PI*2*f/Math.max(i.length,1),E={x:Math.cos(L)*o,y:Math.sin(L)*o,z:0};for(let C of e.nodes)C.type==="note"&&C.folder===c&&r.set(C.id,E)}),r}if(n==="tag"){let i=e.nodes.filter(f=>f.type==="tag"),c=new Map;i.forEach((f,L)=>{let E=Math.PI*2*L/Math.max(i.length,1);c.set(f.tag,{x:Math.cos(E)*o,y:Math.sin(E)*o,z:0})});for(let f of e.nodes)if(f.type==="tag"){let L=c.get(f.tag);L&&r.set(f.id,L)}else if(f.dominantTag.length>0){let L=c.get(f.dominantTag);L&&r.set(f.id,L)}}return r}function pr(e,n){let o=[],r=i=>{let c=n*i;for(let f of o){let L=e(f);L&&(f.vx=(f.vx??0)+(L.x-(f.x??0))*c,f.vy=(f.vy??0)+(L.y-(f.y??0))*c,f.vz=(f.vz??0)+(L.z-(f.z??0))*c)}};return r.initialize=i=>{o=i},r}function Vt(e,n,o,r){for(let i of e.querySelectorAll(n)){if(!(i instanceof HTMLElement))continue;let c=i.getAttribute(r);i.setAttribute("aria-pressed",c===o?"true":"false")}}function hr(e,n,o,r){let i=it(n.links),c=(t,a,s)=>t<a?`${t}|${a}|${s}`:`${a}|${t}|${s}`,f=new Map,L=new Map,E=new Set,C=new Set;r.fullData!==n&&(f=new Map(r.fullData.nodes.map(t=>[t.id,t])),L=it(r.fullData.links),E=new Set(n.nodes.map(t=>t.id)),C=new Set(n.links.map(t=>c(I(t.source),I(t.target),t.kind))));let D=t=>{if(r.fullData===n)return!1;let a=vt(L,E,t,r.expandHops);if(a.size===0)return!1;for(let s of a){let l=f.get(s);l&&(n.nodes.push(l),E.add(s))}for(let s of r.fullData.links){let l=I(s.source),g=I(s.target);if(!E.has(l)||!E.has(g))continue;let d=c(l,g,s.kind);C.has(d)||(C.add(d),n.links.push(s))}return i=it(n.links),!0},y={lens:cr(),allLabels:!1,focusTag:null,focusFolder:null},V=null,A=null,x=ur(),R=()=>A??V,$=new Set(n.nodes.filter(t=>t.type==="note").sort((t,a)=>a.degree-t.degree).slice(0,bn).map(t=>t.id)),z=t=>{let a=t.val;return t.isHub&&(a*=xn),y.lens==="tag"&&t.type==="tag"&&(a*=Sn),y.focusTag&&t.id===`tag:${y.focusTag}`&&(a*=Mn),a},B=t=>{let a=R();return y.allLabels||a===t.id||a!==null&&(i.get(a)?.has(t.id)??!1)?!0:$.has(t.id)},U=t=>{let a=Ve((z(t)-ke)/5,0,1);return(St+a*(Pn-St))*x.nodeScale},M=t=>{let a=R();if(a!==null)return a===t||(i.get(a)?.has(t)??!1);if(y.focusTag===null&&y.focusFolder===null)return!0;let s=n.nodes.find(l=>l.id===t);return s?y.focusFolder!==null?gr(s,y.focusFolder):y.focusTag!==null&&fr(s,y.focusTag):!1},G=t=>t.type==="external"?o.current.external:y.lens==="tag"?t.type==="tag"?o.current.tertiary:or(t.dominantTag,o.current):y.lens==="folder"?t.type==="tag"?o.current.tertiary:Ot(t.folder,o.current):y.lens==="hub"?t.type==="tag"?o.current.tertiary:t.isHub?o.current.accent:o.current.ink:t.type==="tag"?o.current.tertiary:o.current.ink,Z=t=>{let a=R();if(a!==null&&(a===t.id||(i.get(a)?.has(t.id)??!1)))return o.current.accent;let s=G(t);return M(t.id)?K()?t.type==="external"?X(o.current.external,"#ffffff",.18):t.type==="tag"?X(o.current.tertiary,"#ffffff",.22):t.isHub?X("#fff3e4",o.current.accent,.1):X("#ffffff",o.current.accent,.12):t.type==="external"?X(o.current.external,"#08343a",.12):t.type==="tag"?X(o.current.tertiary,o.current.accent,.55):t.isHub?X(o.current.ink,o.current.accent,.22):s:ue(s,we)},re=t=>{let a=K();return t==="wikilink"?a?.34:.52:t==="external"?a?.3:.44:t==="tag"?a?.22:.32:a?.12:.2},q=t=>{let a=I(t.source),s=I(t.target),l=R();return l!==null&&(a===l||s===l)?K()?.72:.78:(l!==null||y.focusTag!==null||y.focusFolder!==null)&&(!M(a)||!M(s))?re(t.kind)*we:re(t.kind)},j=t=>{let a=I(t.source),s=I(t.target),l=R(),g=K()?Dn:Rn;return l!==null&&(a===l||s===l)?X(o.current.accent,g,.45):g},Q=t=>ue(j(t),q(t)),O=()=>n,u=t=>{let a=K()?"rgba(255, 255, 255, 0.85)":ue(o.current.ink,.88);return M(t.id)?a:ue(a,we)},h=()=>{if(typeof e.cameraPosition=="function"){let t=e.cameraPosition();if(t&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"){let a=Math.hypot(t.x,t.y,t.z);if(a>1)return{dir:{x:t.x,y:t.y,z:t.z},len:a}}}return{dir:Te,len:Oe}},w=t=>{if(r.use3d){if(typeof e.cameraPosition!="function")return;let a=Oe/Ve(x.zoom,.4,2.5),{dir:s,len:l}=h(),g=a/l;e.cameraPosition({x:s.x*g,y:s.y*g,z:s.z*g},xt,t),je();return}typeof e.zoom=="function"&&e.zoom(x.zoom,t)},S=()=>{let t=Fn(x.spread),a=nt.min+t*(nt.max-nt.min),s=rt.min+t*(rt.max-rt.min),l=e.d3Force("charge");l?.strength&&l.strength(a),l?.theta&&r.layout.chargeTheta!==void 0&&l.theta(r.layout.chargeTheta);let g=e.d3Force("link");g?.distance&&g.distance(k=>y.lens==="tag"&&k.kind==="tag"?s*.72:s),g?.strength&&g.strength(k=>{if(k.kind==="cooc"||k.kind==="folder")return .04;if(y.lens==="tag"&&k.kind==="tag")return .95;if(y.lens==="folder"){let T=zt(n.nodes,k.source),F=zt(n.nodes,k.target);if(T!==null&&T===F)return .72}return k.kind==="tag"?.65:.8});let d=e.d3Force("center");d?.strength&&d.strength(yn);let b=ot.min+t*(ot.max-ot.min),m=mr(n,y.lens,b),p=y.lens==="folder"||y.lens==="tag"?.08:0;e.d3Force("cluster",pr(k=>m.get(k.id)??null,p)),r.use3d&&e.d3Force("flattenZ",null)},P=new Map,N=new Map,ee=new Map,oe=new Map,ae=new Map,te=new Map,ne=new Map,Ue=(t,a,s)=>{let l=`${Math.round(a*4)}|${s}`;return Re(ne,l,()=>({geometry:new t.SphereGeometry(a,6,6),material:new t.MeshBasicMaterial({color:s})}))},de=new Map,Le=new Map,qe=(t,a,s)=>{let l=`${a}|${s}`;return Re(de,l,()=>new t.CylinderGeometry(a,a,1,s))},Ee=(t,a,s)=>{let l=`${a}|${s}`;return Re(Le,l,()=>new t.MeshBasicMaterial({color:a,transparent:!0,opacity:s,depthWrite:!1}))},v=()=>{if(!r.use3d||typeof e.nodeThreeObject!="function")return;let t=r.spriteText,a=r.three,s=r.lod.dotDistance,l=r.lod.nodeResolution??14,g=r.interaction.incrementalRepaint;if(P.clear(),N.clear(),ne.clear(),oe.clear(),ae.clear(),g)for(let d of n.nodes)ae.set(d.id,d);typeof e.nodeThreeObjectExtend=="function"&&e.nodeThreeObjectExtend(a===null),e.nodeThreeObject(d=>{let b=U(d),m=Z(d),p=!1;if(a){if(K()){let _=d.isHub?1.35:1.1,W=new a.MeshLambertMaterial({color:m,emissive:m,emissiveIntensity:_});P.set(d.id,{material:W,base:_,phase:d.phase}),g&&oe.set(d.id,W),p=new a.Mesh(new a.SphereGeometry(b,l,l),W)}else{let _=new a.MeshBasicMaterial({color:m});g&&oe.set(d.id,_),p=new a.Mesh(new a.SphereGeometry(b,l,l),_)}if(s!==void 0&&p!==!1){let _=Ue(a,b,m),W=new a.Mesh(_.geometry,_.material),ye=new a.LOD;ye.addLevel(p,0),ye.addLevel(W,s),p=ye}}let k=B(d);if(!t||!g&&!k)return p;let T=new t(d.name);if(T.color=u(d),T.fontWeight="400",T.strokeWidth=0,T.textHeight=$.has(d.id)?6.5:5.5,T.center.set(0,.5),T.position.x=b+2,T.position.y=0,g?(T.visible=k,N.set(d.id,{sprite:T,node:d})):r.lod.labelDistance!==void 0&&N.set(d.id,{sprite:T,node:d}),!a||p===!1)return T;let F=new a.Group;return F.add(p),F.add(T),F})},Qt=()=>{let t=r.three;if(!r.use3d||!t||typeof e.linkThreeObject!="function")return;let a=new t.Vector3(0,1,0),s=r.lod.linkResolution??5,l=r.lod.cullDistance,g=r.interaction.incrementalRepaint,d=r.lod.shareLinkResources;if(ee.clear(),te.clear(),de.clear(),Le.clear(),g)for(let b of n.links){let m=I(b.source),p=I(b.target);for(let k of[m,p]){let T=te.get(k);T?T.push(b):te.set(k,[b])}}e.linkThreeObject(b=>{let m=An[b.kind]*x.edgeScale,p=d?Ee(t,j(b),q(b)):new t.MeshBasicMaterial({color:j(b),transparent:!0,opacity:q(b),depthWrite:!1}),k=d?qe(t,m,s):new t.CylinderGeometry(m,m,1,s),T=new t.Mesh(k,p);return(l!==void 0||g)&&ee.set(b,T),T}),typeof e.linkPositionUpdate=="function"&&e.linkPositionUpdate((b,m)=>{let p=m.end.x-m.start.x,k=m.end.y-m.start.y,T=m.end.z-m.start.z,F=Math.sqrt(p*p+k*k+T*T);return b.position.x=(m.start.x+m.end.x)/2,b.position.y=(m.start.y+m.end.y)/2,b.position.z=(m.start.z+m.end.z)/2,b.scale.x=1,b.scale.y=Math.max(F,.01),b.scale.z=1,b.quaternion.setFromUnitVectors(a,new t.Vector3(p,k,T).normalize()),!0})},ft=()=>{!r.use3d||typeof e.linkDirectionalParticles!="function"||e.linkDirectionalParticles(t=>{let a=R();if(a===null)return 0;let s=I(t.source),l=I(t.target);return s===a||l===a?2:0})},se=()=>{e.nodeVal(z),e.nodeColor(Z),e.linkColor(Q),e.linkWidth(t=>{let a=I(t.source),s=I(t.target),l=R(),g=x.edgeScale;return l!==null&&(a===l||s===l)?.7*g:t.kind==="wikilink"||t.kind==="external"?.5*g:(t.kind==="tag"?.35:.25)*g}),typeof e.linkOpacity=="function"&&e.linkOpacity(Et),ft(),Qt(),r.use3d||e.nodeCanvasObjectMode(()=>"replace")},en=(t,a)=>{let s=Lt(i,t,a),l=new Set;for(let g of s){let d=ae.get(g);if(!d)continue;let b=Z(d);oe.get(g)?.color.set(b);let m=P.get(g);m&&m.material.emissive.set(b);let p=N.get(g);p&&(p.sprite.color=u(d),p.sprite.visible=B(d));for(let k of te.get(g)??[]){if(l.has(k))continue;l.add(k);let T=ee.get(k);T&&(r.lod.shareLinkResources&&r.three?T.material=Ee(r.three,j(k),q(k)):(T.material.color.set(j(k)),T.material.opacity=q(k)))}}},We=t=>{if(r.interaction.incrementalRepaint&&r.use3d){ft(),en(t,R());return}se(),r.use3d&&v()},Ye=()=>{let t=r.root.querySelector("[data-graph-legend]");if(!(t instanceof HTMLElement))return;let a=(d,b)=>{let m=document.createElement("span");m.className="graph-landing__legend-item";let p=document.createElement("span");p.className="graph-landing__dot",p.setAttribute("aria-hidden","true"),p.style.background=d;let k=document.createElement("span");return k.textContent=b,m.append(p,k),m},s=r.root.dataset.legendNotes??"Notes",l=r.root.dataset.legendTags??"Tags",g=r.root.dataset.legendLinks??"Links";t.replaceChildren(a(o.current.ink,s),a(o.current.tertiary,l),a(o.current.external,g))},gt=t=>{let a=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="graph-landing__tag-item",s.dataset[t.dataset.key]=t.dataset.value,s.setAttribute("aria-pressed",t.pressed?"true":"false");let l=document.createElement("span");if(l.className="graph-landing__facet-name",t.dotColor!==null){let d=document.createElement("span");d.className="graph-landing__dot",d.style.background=t.dotColor,l.append(d)}l.append(document.createTextNode(t.label));let g=document.createElement("span");return g.className="graph-landing__tag-count",g.textContent=String(t.count),s.append(l,g),a.append(s),a},mt=()=>{let t=r.root.querySelector("[data-graph-tags]");if(!(t instanceof HTMLElement))return;let a=r.root.querySelector("[data-graph-facet-label]"),s=r.root.querySelector(".graph-landing__tags");if(y.lens==="folder"){let g=r.root.dataset.folderRootLabel??"root",d=new Map;for(let m of n.nodes)m.type==="note"&&d.set(m.folder,(d.get(m.folder)??0)+1);let b=[...d.entries()].sort((m,p)=>p[1]-m[1]);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendFolders??"Folders"),s instanceof HTMLElement&&(s.hidden=b.length===0),t.replaceChildren(...b.map(([m,p])=>gt({dataset:{key:"graphFolder",value:m},pressed:y.focusFolder===m,dotColor:Ot(m,o.current),label:m==="root"?g:m,count:p})));return}let l=n.nodes.filter(g=>g.type==="tag").sort((g,d)=>d.degree-g.degree).slice(0,16);a instanceof HTMLElement&&(a.textContent=r.root.dataset.legendTags??"Tags"),s instanceof HTMLElement&&(s.hidden=l.length===0),t.replaceChildren(...l.map(g=>gt({dataset:{key:"graphTag",value:g.tag},pressed:y.focusTag===g.tag,dotColor:null,label:g.tag,count:g.degree})))},fe=()=>{e.graphData(O()),S(),se(),v(),Ye(),mt(),Vt(r.root,"[data-graph-lens]",y.lens,"data-graph-lens"),e.d3ReheatSimulation()},tn=t=>{y.lens=t,t!=="tag"&&(y.focusTag=null),t!=="folder"&&(y.focusFolder=null),ct(t),fe()},nn=t=>{y.focusTag=y.focusTag===t?null:t,y.focusFolder=null,y.focusTag&&(y.lens="tag",ct("tag")),fe()},rn=t=>{y.focusFolder=y.focusFolder===t?null:t,y.focusTag=null,y.focusFolder&&(y.lens="folder",ct("folder")),fe()},Ke=()=>r.use3d?rr(o.current):Xt(o.current),je=()=>{if(!r.use3d||!r.lod.fog||!r.three||typeof e.scene!="function")return;let t=h().len;e.scene().fog=new r.three.Fog(Ke(),t*Nn,t*In)};e.graphData(O()),e.backgroundColor(Ke()),e.nodeLabel(t=>t.name),e.nodeRelSize(wn),typeof e.nodeOpacity=="function"&&e.nodeOpacity(kn),typeof e.linkOpacity=="function"&&e.linkOpacity(Et),S(),se();let ie=r.root.querySelector("[data-graph-preview]"),xe=r.root.querySelector("[data-graph-preview-chip]"),Se=r.root.querySelector("[data-graph-preview-title]"),Me=r.root.querySelector("[data-graph-preview-excerpt]"),Ce=0;window.addCleanup(()=>window.clearTimeout(Ce));let on=t=>{if(!(ie instanceof HTMLElement)||!(xe instanceof HTMLElement)||!(Se instanceof HTMLElement)||!(Me instanceof HTMLElement))return;window.clearTimeout(Ce);let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendLinks??"Links";if(t.type==="tag"){let g=r.root.dataset.previewTagTemplate??"{n} notes";xe.textContent=s,Se.textContent=`#${t.tag}`,Me.textContent=g.replace("{n}",String(t.degree))}else t.type==="external"?(xe.textContent=l,Se.textContent=t.name,Me.textContent=t.url):(xe.textContent=a,Se.textContent=t.name,Me.textContent=t.excerpt);ie.hidden=!1,ie.dataset.visible="true"},pt=()=>{ie instanceof HTMLElement&&(window.clearTimeout(Ce),Ce=window.setTimeout(()=>{ie.dataset.visible="false",ie.hidden=!0},Hn))};if(e.onNodeHover(t=>{let a=R();V=t?t.id:null,A===null&&(t?on(t):pt()),We(a)}),r.use3d){if(typeof e.showNavInfo=="function"&&e.showNavInfo(!1),typeof e.enableNavigationControls=="function"&&e.enableNavigationControls(!0),!Fe()&&typeof e.controls=="function"){let s=e.controls();s.autoRotate=!1,s.autoRotateSpeed=En;let l=window.setTimeout(()=>{typeof e.controls=="function"&&(e.controls().autoRotate=!0)},1600);window.addCleanup(()=>window.clearTimeout(l))}if(e.warmupTicks(r.layout.warmupTicks??50),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??200),typeof e.linkDirectionalParticleWidth=="function"&&e.linkDirectionalParticleWidth(1.1),typeof e.linkDirectionalParticleSpeed=="function"&&e.linkDirectionalParticleSpeed(.004),typeof e.linkDirectionalParticleColor=="function"&&e.linkDirectionalParticleColor(()=>o.current.accent),r.bloomPass&&typeof e.postProcessingComposer=="function"&&(r.bloomPass.strength=K()?Mt:0,r.bloomPass.radius=Ct,r.bloomPass.threshold=Nt,e.postProcessingComposer().addPass(r.bloomPass)),typeof e.cameraPosition=="function"&&(e.cameraPosition(Te,xt),x.zoom!==1&&w(0)),v(),je(),!Fe()){let s=0,l=()=>{let g=performance.now()/1e3*Gn;for(let d of P.values())d.material.emissiveIntensity=d.base*(1+_n*Math.sin(g+d.phase));s=window.requestAnimationFrame(l)};s=window.requestAnimationFrame(l),window.addCleanup(()=>window.cancelAnimationFrame(s))}let t=r.lod.labelDistance,a=r.lod.cullDistance;if((t!==void 0||a!==void 0)&&typeof e.cameraPosition=="function"){let s=e.cameraPosition.bind(e),l=0,g=()=>{let d=s();if(d&&typeof d.x=="number"&&typeof d.y=="number"&&typeof d.z=="number"){if(t!==void 0)for(let b of N.values()){let m=b.node.x??0,p=b.node.y??0,k=b.node.z??0,T=Math.hypot(d.x-m,d.y-p,d.z-k);b.sprite.visible=et(T,t)==="full"}if(a!==void 0){let b=R();for(let[m,p]of ee){let k=I(m.source),T=I(m.target);if(b!==null&&(k===b||T===b)){p.visible=!0;continue}let F=Math.hypot(d.x-p.position.x,d.y-p.position.y,d.z-p.position.z);p.visible=et(F,a)!=="dot"}}}l=window.requestAnimationFrame(g)};l=window.requestAnimationFrame(g),window.addCleanup(()=>window.cancelAnimationFrame(l))}}else e.warmupTicks(r.layout.warmupTicks??60),e.cooldownTicks(r.layout.freezeAfterWarmup?0:r.layout.cooldownTicks??180),e.nodeCanvasObject((t,a,s)=>{let l=U(t),g=t.x??0,d=t.y??0;if(a.save(),a.beginPath(),a.arc(g,d,l,0,Math.PI*2),a.fillStyle=Z(t),a.fill(),t.isHub&&(a.strokeStyle=M(t.id)?o.current.accent:ue(o.current.accent,we),a.lineWidth=1.2/s,a.stroke()),B(t)){let b=11.5/s;a.font=`${b}px ${o.current.font}`,a.fillStyle=M(t.id)?o.current.ink:ue(o.current.ink,we),a.textAlign="center",a.textBaseline="bottom",a.fillText(t.name,g,d-l-6)}a.restore()}),typeof e.nodePointerAreaPaint=="function"&&e.nodePointerAreaPaint((t,a,s)=>{let l=U(t)+8;s.beginPath(),s.arc(t.x??0,t.y??0,l,0,Math.PI*2),s.fillStyle=a,s.fill()});let Ne=r.root.querySelector("[data-graph-inspect]"),Ie=r.root.querySelector("[data-graph-inspect-chip]"),Pe=r.root.querySelector("[data-graph-inspect-title]"),Ae=r.root.querySelector("[data-graph-inspect-excerpt]"),Xe=r.root.querySelector("[data-graph-inspect-tags]"),Ze=r.root.querySelector("[data-graph-inspect-connected]"),H=r.root.querySelector("[data-graph-inspect-open]"),le=t=>{r.root.dataset.railOpen=t?"true":"false";let a=r.root.querySelector("[data-graph-rail-toggle]"),s=r.root.querySelector("[data-graph-rail-scrim]"),l=r.root.querySelector("#graph-landing-rail");a instanceof HTMLButtonElement&&a.setAttribute("aria-expanded",t?"true":"false"),l instanceof HTMLElement&&l.setAttribute("aria-hidden",t?"false":"true"),s instanceof HTMLElement&&(s.hidden=!t)},De=t=>{Fe()||typeof e.controls!="function"||(e.controls().autoRotate=t)},an=t=>{let a=i.get(t.id)??new Set,s=[];for(let l of a){let g=n.nodes.find(d=>d.id===l);g&&s.push(g)}return s.sort((l,g)=>g.degree-l.degree)},sn=t=>{if(!(Ne instanceof HTMLElement)||!(Ie instanceof HTMLElement)||!(Pe instanceof HTMLElement)||!(Ae instanceof HTMLElement)||!(Xe instanceof HTMLElement)||!(Ze instanceof HTMLElement))return;let a=r.root.dataset.legendNotes??"Notes",s=r.root.dataset.legendTags??"Tags",l=r.root.dataset.legendLinks??"Links",g=r.root.dataset.inspectEmpty??"No direct connections";t.type==="tag"?(Ie.textContent=s,Pe.textContent=`#${t.tag}`,Ae.textContent=(r.root.dataset.previewTagTemplate??"{n} notes").replace("{n}",String(t.degree))):t.type==="external"?(Ie.textContent=l,Pe.textContent=t.name,Ae.textContent=t.url):(Ie.textContent=a,Pe.textContent=t.name,Ae.textContent=t.excerpt);let d=t.tags.map(m=>{let p=document.createElement("li");return p.textContent=m,p});Xe.replaceChildren(...d),Xe.hidden=d.length===0;let b=an(t).slice(0,12);if(b.length===0){let m=document.createElement("li");m.className="graph-landing__inspect-empty",m.textContent=g,Ze.replaceChildren(m)}else Ze.replaceChildren(...b.map(m=>{let p=document.createElement("li"),k=document.createElement("button");k.type="button",k.className="graph-landing__inspect-link",k.dataset.graphInspectId=m.id;let T=m.type==="tag"?s:m.type==="external"?l:a,F=document.createElement("span");F.textContent=T;let _=document.createElement("strong");return _.textContent=m.type==="tag"?`#${m.tag}`:m.name,k.append(F,_),p.append(k),p}));H instanceof HTMLAnchorElement&&(t.type==="note"&&t.slug.length>0?(H.hidden=!1,H.href=Jt(t.slug).toString(),H.textContent=r.root.dataset.inspectRead??"Read note",H.removeAttribute("target"),H.removeAttribute("rel")):t.type==="external"&&t.url.length>0?(H.hidden=!1,H.href=t.url,H.textContent=r.root.dataset.inspectOpenExternal??"Open",H.target="_blank",H.rel="noopener noreferrer"):(H.hidden=!0,H.removeAttribute("href"),H.removeAttribute("target"),H.removeAttribute("rel"))),Ne.hidden=!1,r.root.dataset.inspecting="true",le(!1),pt()},ge=()=>{let t=R();A=null,Ne instanceof HTMLElement&&(Ne.hidden=!0),r.root.dataset.inspecting="false",De(!0),We(t)},ln=t=>{if(A===t.id&&t.type==="note"&&t.slug.length>0){ar(t.slug);return}if(A===t.id&&t.type==="external"&&t.url.length>0){sr(t.url);return}let a=R();A=t.id,sn(t),We(a)},Je=t=>{D(t.id)&&fe(),ln(t)},Qe=!1;e.onNodeClick((t,a)=>{t&&(Qe=!0,a&&typeof a.stopPropagation=="function"&&a.stopPropagation(),Je(t))}),typeof e.onBackgroundClick=="function"&&e.onBackgroundClick(()=>{ge(),le(!1)});let J=r.root.querySelector("#graph-landing-mount");if(J instanceof HTMLElement){let t=null,a=d=>{t={x:d.clientX,y:d.clientY},De(!1)},s=(d,b)=>{if(typeof e.graph2ScreenCoords!="function")return null;let m=J.getBoundingClientRect(),p=d-m.left,k=b-m.top,T=null,F=4096;for(let _ of O().nodes){if(_.x===void 0||_.y===void 0)continue;let W=e.graph2ScreenCoords(_.x,_.y,_.z??0),ye=(W.x-p)**2+(W.y-k)**2,cn=(W.x-d)**2+(W.y-b)**2,wt=Math.min(ye,cn);wt<F&&(F=wt,T=_)}return T},l=d=>{let b=t;t=null,De(!0),!(!b||(d.clientX-b.x)**2+(d.clientY-b.y)**2>25)&&window.setTimeout(()=>{if(Qe){Qe=!1;return}let p=s(d.clientX,d.clientY);p?Je(p):ge()},0)},g=()=>{t=null,De(!0)};J.addEventListener("pointerdown",a,!0),J.addEventListener("pointerup",l,!0),J.addEventListener("pointercancel",g,!0),window.addCleanup(()=>{J.removeEventListener("pointerdown",a,!0),J.removeEventListener("pointerup",l,!0),J.removeEventListener("pointercancel",g,!0)})}Vt(r.root,"[data-graph-lens]",y.lens,"data-graph-lens"),Ye(),mt(),y.lens!=="all"&&fe(),r.use3d||(typeof e.centerAt=="function"&&e.centerAt(0,0,0),typeof e.zoom=="function"&&e.zoom(1,0));let ht=()=>{o.current=jt(),e.backgroundColor(Ke()),je(),r.bloomPass&&(r.bloomPass.strength=K()?Mt:0,r.bloomPass.radius=Ct,r.bloomPass.threshold=Nt),se(),v(),Ye()};document.addEventListener("themechange",ht),window.addCleanup(()=>document.removeEventListener("themechange",ht));let bt=t=>{let a=t.target;if(!(a instanceof Element))return;if(a.closest("[data-graph-inspect-close]")){ge();return}if(a.closest("[data-graph-rail-toggle]")){let p=r.root.dataset.railOpen!=="true";p&&ge(),le(p);return}if(a.closest("[data-graph-rail-scrim]")){le(!1);return}let s=a.closest("[data-graph-inspect-id]");if(s instanceof HTMLElement&&s.dataset.graphInspectId){let p=r.fullData.nodes.find(k=>k.id===s.dataset.graphInspectId);p&&Je(p);return}let l=a.closest("[data-graph-lens]");if(l instanceof HTMLElement&&l.dataset.graphLens&&dr(l.dataset.graphLens)){tn(l.dataset.graphLens);return}let g=a.closest("[data-graph-tag]");if(g instanceof HTMLElement&&g.dataset.graphTag){nn(g.dataset.graphTag);return}let d=a.closest("[data-graph-folder]");if(d instanceof HTMLElement&&d.dataset.graphFolder){rn(d.dataset.graphFolder);return}if(a.closest("[data-graph-relayout]")){e.d3ReheatSimulation();return}let b=a.closest("[data-graph-labels]");if(b instanceof HTMLButtonElement){y.allLabels=!y.allLabels,b.setAttribute("aria-pressed",y.allLabels?"true":"false");let p=b.dataset.labelShow??"Labels",k=b.dataset.labelHide??"Labels",T=y.allLabels?k:p;b.title=T,b.setAttribute("aria-label",T),v();return}if(a.closest("[data-graph-theme]")){let p=K()?"light":"dark";document.documentElement.setAttribute("saved-theme",p),localStorage.setItem("theme",p),document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(`theme-${p}`),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:p}}));return}let m=a.closest("[data-graph-tags-toggle]");if(m instanceof HTMLButtonElement){let p=r.root.querySelector(".graph-landing__tags");if(p instanceof HTMLElement){let k=p.dataset.open==="true";p.dataset.open=k?"false":"true",m.setAttribute("aria-expanded",k?"false":"true")}}},me=r.root.querySelector("[data-graph-node-scale]"),pe=r.root.querySelector("[data-graph-edge-scale]");if(me instanceof HTMLInputElement){me.value=String(Math.round(x.nodeScale*100));let t=()=>{x.nodeScale=Number(me.value)/100,He(x),se(),r.use3d&&v()};me.addEventListener("input",t),window.addCleanup(()=>me.removeEventListener("input",t))}if(pe instanceof HTMLInputElement){pe.value=String(Math.round(x.edgeScale*100));let t=()=>{x.edgeScale=Number(pe.value)/100,He(x),se()};pe.addEventListener("input",t),window.addCleanup(()=>pe.removeEventListener("input",t))}let he=r.root.querySelector("[data-graph-zoom]");if(he instanceof HTMLInputElement){he.value=String(Math.round(x.zoom*100));let t=()=>{x.zoom=Number(he.value)/100,He(x),w(200)};he.addEventListener("input",t),window.addCleanup(()=>he.removeEventListener("input",t))}let be=r.root.querySelector("[data-graph-spread]");if(be instanceof HTMLInputElement){be.value=String(Math.round(x.spread*100));let t=()=>{x.spread=Number(be.value)/100,He(x),S(),e.d3ReheatSimulation()};be.addEventListener("input",t),window.addCleanup(()=>be.removeEventListener("input",t))}le(!1),r.root.addEventListener("click",bt),window.addCleanup(()=>r.root.removeEventListener("click",bt));let yt=t=>{if(t.key==="Escape"){if(r.root.dataset.railOpen==="true"){le(!1);return}ge()}};window.addEventListener("keydown",yt),window.addCleanup(()=>window.removeEventListener("keydown",yt))}function br(){return window.matchMedia("(prefers-reduced-data: reduce)").matches}function yr(){try{return window.localStorage.getItem(ut)==="stopped"}catch(e){return console.error("[graph-landing] could not read ambient audio preference",e),!1}}function $t(e){try{if(e){window.localStorage.setItem(ut,"stopped");return}window.localStorage.removeItem(ut)}catch(n){console.error("[graph-landing] could not persist ambient audio preference",n)}}function wr(e){let n=performance.now(),o=0,r=i=>{let c=Math.min(1,(i-n)/e.durationMs),f=c*c;e.apply(e.from+(e.to-e.from)*f),c<1&&(o=window.requestAnimationFrame(r))};return o=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(o)}}function kr(){let e=window.YT;return e&&typeof e.Player=="function"?Promise.resolve(e):new Promise((n,o)=>{let r=window,i=r.onYouTubeIframeAPIReady;if(r.onYouTubeIframeAPIReady=()=>{typeof i=="function"&&i();let c=r.YT;if(!c||typeof c.Player!="function"){o(new Error("graph-landing: YouTube API missing Player"));return}n(c)},!document.querySelector("script[data-graph-youtube-api]")){let c=document.createElement("script");c.src=Ln,c.async=!0,c.dataset.graphYoutubeApi="1",c.addEventListener("error",()=>{o(new Error("graph-landing: YouTube API failed to load"))}),document.head.appendChild(c)}})}function Tr(e){return new e.api.Player(e.host,{videoId:e.videoId,width:"200",height:"113",playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,playlist:e.videoId,rel:0},events:{onReady:n=>{e.onReady(n.target)},onStateChange:n=>{n.data===e.api.PlayerState.ENDED&&e.onEnded(n.target)},onError:()=>{console.error("[graph-landing] ambient YouTube player failed")}}})}function vr(e){let n=e.querySelector("[data-graph-audio-toggle]"),o=e.querySelector("[data-graph-audio-host]");if(!(n instanceof HTMLButtonElement)||!(o instanceof HTMLElement))return;let r=e.dataset.audioStop??"Stop music",i=e.dataset.audioPlay??"Play music",c=kt(e.dataset.graphAmbientVideoId)??Tn,f=null,L=!1,E=null,C=!yr(),D=!1,y=M=>{n.setAttribute("aria-pressed",M?"true":"false"),n.setAttribute("aria-label",M?r:i),n.title=M?r:i,n.dataset.playing=M?"true":"false"},V=()=>{E&&(E(),E=null)},A=M=>{f&&f.setVolume(Math.max(0,Math.min(_e,M)))},x=M=>{!C||D||(D=!0,y(!0),M.unMute(),A(0),M.playVideo(),V(),E=wr({from:0,to:_e,durationMs:vn,apply:A}))},R=()=>{C=!1,D=!1,V(),$t(!0),f&&(f.mute(),f.pauseVideo(),A(0)),y(!1)},$=async()=>{if(!f)try{let M=await kr();if(f)return;f=Tr({api:M,host:o,videoId:c,onReady:G=>{L=!0,G.mute(),A(0),G.playVideo()},onEnded:G=>{C&&(G.playVideo(),A(_e))}})}catch(M){console.error("[graph-landing] ambient audio unavailable",M)}},z=M=>{let G=M.target;if(!(G instanceof Element&&G.closest("[data-graph-audio-toggle]"))&&!(!C||D||br())){if(L&&f){x(f);return}$()}},B=()=>{if(C&&D){R();return}if(C=!0,$t(!1),L&&f){x(f);return}$()},U=()=>{if(f){if(document.hidden){V(),f.pauseVideo();return}C&&D&&(f.playVideo(),A(_e))}};y(C),$(),n.addEventListener("click",B),e.addEventListener("pointerdown",z,!0),e.addEventListener("touchstart",z,{capture:!0,passive:!0}),document.addEventListener("visibilitychange",U),window.addCleanup(()=>{n.removeEventListener("click",B),e.removeEventListener("pointerdown",z,!0),e.removeEventListener("touchstart",z,!0),document.removeEventListener("visibilitychange",U),V(),f&&(f.pauseVideo(),f.destroy(),f=null)})}async function Lr(){let e=document.querySelector(".graph-landing");if(!(e instanceof HTMLElement)||e.dataset.graphReady==="1")return;e.dataset.graphReady="1",vr(e);let n=e.querySelector("#graph-landing-mount");if(!(n instanceof HTMLElement))throw new Error("graph-landing: mount element #graph-landing-mount is missing");let o=e.querySelectorAll("[data-graph-counts]"),r=e.dataset.locale??e.dataset.graphDefaultLocale??"ko",i=e.dataset.sourceLocale??e.dataset.graphDefaultLocale??"ko",c=(e.dataset.localePrefixes??"").split(",").map(v=>v.trim()).filter(v=>v.length>0),f=e.dataset.countsTemplate??"{n} nodes \\xB7 {m} edges",L=e.dataset.indexSource==="graphIndex"?"graphIndex":"contentIndex",E=e.dataset.graphIndexPath??"",C=Y(e.dataset.maxRenderedNodes,v=>Number.parseInt(v,10)),D=e.dataset.expandHops?Number.parseInt(e.dataset.expandHops,10):1,y=Number.isFinite(D)?D:1,V=e.dataset.tagCoocDisabled==="true"?!1:e.dataset.tagCoocMaxTagsPerNote||e.dataset.tagCoocMaxEdges?{maxTagsPerNote:e.dataset.tagCoocMaxTagsPerNote?Number.parseInt(e.dataset.tagCoocMaxTagsPerNote,10):void 0,maxEdges:e.dataset.tagCoocMaxEdges?Number.parseInt(e.dataset.tagCoocMaxEdges,10):void 0}:void 0,A=e.dataset.graphRenderMode==="3d"?"3d":"auto",x=e.dataset.graphLayoutFreezeAfterWarmup==="true",R=Y(e.dataset.graphLayoutWarmupTicks,v=>Number.parseInt(v,10)),$=Y(e.dataset.graphLayoutCooldownTicks,v=>Number.parseInt(v,10)),z=Y(e.dataset.graphLayoutChargeTheta,Number.parseFloat),B=Y(e.dataset.graphLodLabelDistance,Number.parseFloat),U=Y(e.dataset.graphLodDotDistance,Number.parseFloat),M=Y(e.dataset.graphLodCullDistance,Number.parseFloat),G=e.dataset.graphLodFog==="true",Z=Y(e.dataset.graphLodNodeResolution,v=>Number.parseInt(v,10)),re=Y(e.dataset.graphLodLinkResolution,v=>Number.parseInt(v,10)),q=e.dataset.graphInteractionIncrementalRepaint==="true",j=e.dataset.graphLodShareLinkResources==="true",Q=!1,O=null,u={current:jt()},h=()=>{Q=!0,O&&(O._destructor(),O=null),delete e.dataset.graphReady};window.addCleanup(h);let w=tr();if(A==="3d"&&!w){lt(n,"3D graph unavailable: WebGL is required and motion must be enabled.");return}let S=A==="3d"||w,P=lr(S),N=S?import(gn).then(v=>v.default??null).catch(v=>(console.error("[graph-landing] SpriteText unavailable; 3D hub labels disabled",v),null)):Promise.resolve(null),ee=S?import(mn).catch(v=>(console.error("[graph-landing] three unavailable; using default node spheres",v),null)):Promise.resolve(null),oe=S?import(pn).then(v=>v.UnrealBloomPass?new v.UnrealBloomPass:null).catch(v=>(console.error("[graph-landing] UnrealBloomPass unavailable; dark-mode bloom disabled",v),null)):Promise.resolve(null);P.catch(()=>{});let ae;try{ae=ze(L==="graphIndex"?await fetch(E).then(v=>v.json()):await fetchData)}catch(v){throw lt(n,"Graph could not load content index."),v}if(Q)return;let te=Qn(On(ae),{localeId:r,sourceLocale:i,prefixes:c},V),ne=Tt(te,C),Ue=f.replace("{n}",String(ne.nodes.length)).replace("{m}",String(ne.links.length));for(let v of o)v.textContent=Ue;let de;try{de=await P}catch(v){throw lt(n,"Graph could not load. Check your network connection."),v}let[Le,qe,Ee]=await Promise.all([N,ee,oe]);Q||(n.replaceChildren(),O=de(n),n.__graphLanding=O,n.__graphData=ne,hr(O,ne,u,{use3d:S,root:e,spriteText:Le,bloomPass:Ee,three:qe,fullData:te,expandHops:y,layout:{freezeAfterWarmup:x,warmupTicks:R,cooldownTicks:$,chargeTheta:z},lod:{labelDistance:B,dotDistance:U,cullDistance:M,fog:G,nodeResolution:Z,linkResolution:re,shareLinkResources:j},interaction:{incrementalRepaint:q}}))}var Er="preferred-locale";document.addEventListener("click",e=>{let n=e.target;if(!(n instanceof Element))return;let o=n.closest("a[data-preferred-locale]");if(!(o instanceof HTMLAnchorElement))return;let r=o.dataset.preferredLocale;if(r)try{localStorage.setItem(Er,r)}catch(i){console.error("[graph-landing] failed to persist preferred-locale",i)}});document.addEventListener("nav",()=>{Lr()});\n';

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
          "data-graph-lod-share-link-resources": options.lod?.shareLinkResources ? "true" : void 0,
          "data-graph-interaction-incremental-repaint": options.interaction?.incrementalRepaint ? "true" : void 0,
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