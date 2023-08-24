import{a as Nt}from"./chunk.5XXX3LF2.js";import{a as Mt}from"./chunk.4TY62YMM.js";import{a as Dt,b as R,d as yt,e as Ht}from"./chunk.L6B5EOPQ.js";import{c as wt}from"./chunk.FVWYSG5E.js";import{a as T,b as H,c,d as st,e as E}from"./chunk.K3RV6SX6.js";function K(t){return t.split("-")[1]}c(K,"t");function vt(t){return t==="y"?"height":"width"}c(vt,"e");function Y(t){return t.split("-")[0]}c(Y,"n");function Q(t){return["top","bottom"].includes(Y(t))?"x":"y"}c(Q,"o");function $t(t,e,n){let{reference:i,floating:o}=t,r=i.x+i.width/2-o.width/2,s=i.y+i.height/2-o.height/2,l=Q(e),a=vt(l),u=i[a]/2-o[a]/2,d=l==="x",h;switch(Y(e)){case"top":h={x:r,y:i.y-o.height};break;case"bottom":h={x:r,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:s};break;case"left":h={x:i.x-o.width,y:s};break;default:h={x:i.x,y:i.y}}switch(K(e)){case"start":h[l]-=u*(n&&d?-1:1);break;case"end":h[l]+=u*(n&&d?-1:1)}return h}c($t,"i");var Vt=c(async(t,e,n)=>{let{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e)),u=await s.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:h}=$t(u,i,a),p=i,m={},f=0;for(let g=0;g<l.length;g++){let{name:y,fn:w}=l[g],{x,y:b,data:L,reset:P}=await w({x:d,y:h,initialPlacement:i,placement:p,strategy:o,middlewareData:m,rects:u,platform:s,elements:{reference:t,floating:e}});d=x!=null?x:d,h=b!=null?b:h,m=H(T({},m),{[y]:T(T({},m[y]),L)}),P&&f<=50&&(f++,typeof P=="object"&&(P.placement&&(p=P.placement),P.rects&&(u=P.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:o}):P.rects),{x:d,y:h}=$t(u,p,a)),g=-1)}return{x:d,y:h,placement:p,strategy:o,middlewareData:m}},"r");function Z(t,e){return typeof t=="function"?t(e):t}c(Z,"a");function Wt(t){return typeof t!="number"?function(e){return T({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}c(Wt,"l");function it(t){return H(T({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}c(it,"s");async function ct(t,e){var n;e===void 0&&(e={});let{x:i,y:o,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=Z(e,t),f=Wt(m),g=l[p?h==="floating"?"reference":"floating":h],y=it(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(g)))==null||n?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:a})),w=h==="floating"?H(T({},s.floating),{x:i,y:o}):s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),b=await(r.isElement==null?void 0:r.isElement(x))&&await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1},L=it(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:x,strategy:a}):w);return{top:(y.top-L.top+f.top)/b.y,bottom:(L.bottom-y.bottom+f.bottom)/b.y,left:(y.left-L.left+f.left)/b.x,right:(L.right-y.right+f.right)/b.x}}c(ct,"c");var ot=Math.min,G=Math.max;function bt(t,e,n){return G(t,ot(e,n))}c(bt,"u");var Et=c(t=>({name:"arrow",options:t,async fn(e){let{x:n,y:i,placement:o,rects:r,platform:s,elements:l}=e,{element:a,padding:u=0}=Z(t,e)||{};if(a==null)return{};let d=Wt(u),h={x:n,y:i},p=Q(o),m=vt(p),f=await s.getDimensions(a),g=p==="y",y=g?"top":"left",w=g?"bottom":"right",x=g?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[p]-h[p]-r.floating[m],L=h[p]-r.reference[p],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a)),z=P?P[x]:0;z&&await(s.isElement==null?void 0:s.isElement(P))||(z=l.floating[x]||r.floating[m]);let A=b/2-L/2,M=z/2-f[m]/2-1,V=ot(d[y],M),W=ot(d[w],M),j=V,O=z-f[m]-W,S=z/2-f[m]/2+A,B=bt(j,S,O),D=K(o)!=null&&S!=B&&r.reference[m]/2-(S<j?V:W)-f[m]/2<0?S<j?j-S:O-S:0;return{[p]:h[p]-D,data:{[p]:B,centerOffset:S-B+D}}}}),"g"),ne=["top","right","bottom","left"],he=ne.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),ie={left:"right",right:"left",bottom:"top",top:"bottom"};function lt(t){return t.replace(/left|right|bottom|top/g,e=>ie[e])}c(lt,"y");function oe(t,e,n){n===void 0&&(n=!1);let i=K(t),o=Q(t),r=vt(o),s=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=lt(s)),{main:s,cross:lt(s)}}c(oe,"x");var re={start:"end",end:"start"};function xt(t){return t.replace(/start|end/g,e=>re[e])}c(xt,"v");var Rt=c(function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;let{placement:i,middlewareData:o,rects:r,initialPlacement:s,platform:l,elements:a}=e,j=Z(t,e),{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0}=j,g=st(j,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),y=Y(i),w=Y(s)===s,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=h||(w||!f?[lt(s)]:function(O){let S=lt(O);return[xt(O),S,xt(S)]}(s));h||m==="none"||b.push(...function(O,S,B,D){let $=K(O),k=function(nt,gt,Ft){let kt=["left","right"],Bt=["right","left"],te=["top","bottom"],ee=["bottom","top"];switch(nt){case"top":case"bottom":return Ft?gt?Bt:kt:gt?kt:Bt;case"left":case"right":return gt?te:ee;default:return[]}}(Y(O),B==="start",D);return $&&(k=k.map(nt=>nt+"-"+$),S&&(k=k.concat(k.map(xt)))),k}(s,f,m,x));let L=[s,...b],P=await ct(e,g),z=[],A=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&z.push(P[y]),d){let{main:O,cross:S}=oe(i,r,x);z.push(P[O],P[S])}if(A=[...A,{placement:i,overflows:z}],!z.every(O=>O<=0)){var M,V;let O=(((M=o.flip)==null?void 0:M.index)||0)+1,S=L[O];if(S)return{data:{index:O,overflows:A},reset:{placement:S}};let B=(V=A.filter(D=>D.overflows[0]<=0).sort((D,$)=>D.overflows[1]-$.overflows[1])[0])==null?void 0:V.placement;if(!B)switch(p){case"bestFit":{var W;let D=(W=A.map($=>[$.placement,$.overflows.filter(k=>k>0).reduce((k,nt)=>k+nt,0)]).sort(($,k)=>$[1]-k[1])[0])==null?void 0:W[0];D&&(B=D);break}case"initialPlacement":B=s}if(i!==B)return{reset:{placement:B}}}return{}}}},"A");var Pt=c(function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:i}=e,o=await async function(r,s){let{placement:l,platform:a,elements:u}=r,d=await(a.isRTL==null?void 0:a.isRTL(u.floating)),h=Y(l),p=K(l),m=Q(l)==="x",f=["left","top"].includes(h)?-1:1,g=d&&m?-1:1,y=Z(s,r),{mainAxis:w,crossAxis:x,alignmentAxis:b}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:T({mainAxis:0,crossAxis:0,alignmentAxis:null},y);return p&&typeof b=="number"&&(x=p==="end"?-1*b:b),m?{x:x*g,y:w*f}:{x:w*f,y:x*g}}(e,t);return{x:n+o.x,y:i+o.y,data:o}}}},"L");function ae(t){return t==="x"?"y":"x"}c(ae,"k");var At=c(function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:i,placement:o}=e,y=Z(t,e),{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x,y:b}=w;return{x,y:b}}}}=y,a=st(y,["mainAxis","crossAxis","limiter"]),u={x:n,y:i},d=await ct(e,a),h=Q(Y(o)),p=ae(h),m=u[h],f=u[p];if(r){let w=h==="y"?"bottom":"right";m=bt(m+d[h==="y"?"top":"left"],m,m-d[w])}if(s){let w=p==="y"?"bottom":"right";f=bt(f+d[p==="y"?"top":"left"],f,f-d[w])}let g=l.fn(H(T({},e),{[h]:m,[p]:f}));return H(T({},g),{data:{x:g.x-n,y:g.y-i}})}}},"O");var ft=c(function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:n,rects:i,platform:o,elements:r}=e,z=Z(t,e),{apply:s=c(()=>{},"g")}=z,l=st(z,["apply"]),a=await ct(e,l),u=Y(n),d=K(n),h=Q(n)==="x",{width:p,height:m}=i.floating,f,g;u==="top"||u==="bottom"?(f=u,g=d===(await(o.isRTL==null?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(g=u,f=d==="end"?"top":"bottom");let y=m-a[f],w=p-a[g],x=!e.middlewareData.shift,b=y,L=w;if(h){let A=p-a.left-a.right;L=d||x?ot(w,A):A}else{let A=m-a.top-a.bottom;b=d||x?ot(y,A):A}if(x&&!d){let A=G(a.left,0),M=G(a.right,0),V=G(a.top,0),W=G(a.bottom,0);h?L=p-2*(A!==0||M!==0?A+M:G(a.left,a.right)):b=m-2*(V!==0||W!==0?V+W:G(a.top,a.bottom))}await s(H(T({},e),{availableWidth:L,availableHeight:b}));let P=await o.getDimensions(r.floating);return p!==P.width||m!==P.height?{reset:{rects:!0}}:{}}}},"C");function N(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}c(N,"n");function _(t){return N(t).getComputedStyle(t)}c(_,"o");function It(t){return t instanceof N(t).Node}c(It,"i");function U(t){return It(t)?(t.nodeName||"").toLowerCase():"#document"}c(U,"r");function C(t){return t instanceof HTMLElement||t instanceof N(t).HTMLElement}c(C,"c");function Ct(t){return typeof ShadowRoot!="undefined"&&(t instanceof N(t).ShadowRoot||t instanceof ShadowRoot)}c(Ct,"l");function rt(t){let{overflow:e,overflowX:n,overflowY:i,display:o}=_(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}c(rt,"s");function se(t){return["table","td","th"].includes(U(t))}c(se,"f");function St(t){let e=Lt(),n=_(t);return n.transform!=="none"||n.perspective!=="none"||!!n.containerType&&n.containerType!=="normal"||!e&&!!n.backdropFilter&&n.backdropFilter!=="none"||!e&&!!n.filter&&n.filter!=="none"||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}c(St,"u");function Lt(){return!(typeof CSS=="undefined"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}c(Lt,"a");function pt(t){return["html","body","#document"].includes(U(t))}c(pt,"d");var Tt=Math.min,F=Math.max,ht=Math.round,ut=Math.floor,X=c(t=>({x:t,y:t}),"y");function Yt(t){let e=_(t),n=parseFloat(e.width)||0,i=parseFloat(e.height)||0,o=C(t),r=o?t.offsetWidth:n,s=o?t.offsetHeight:i,l=ht(n)!==r||ht(i)!==s;return l&&(n=r,i=s),{width:n,height:i,$:l}}c(Yt,"w");function q(t){return t instanceof Element||t instanceof N(t).Element}c(q,"x");function Ot(t){return q(t)?t:t.contextElement}c(Ot,"v");function tt(t){let e=Ot(t);if(!C(e))return X(1);let n=e.getBoundingClientRect(),{width:i,height:o,$:r}=Yt(e),s=(r?ht(n.width):n.width)/i,l=(r?ht(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}c(tt,"b");var le=X(0);function Ut(t){let e=N(t);return Lt()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:le}c(Ut,"T");function J(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);let o=t.getBoundingClientRect(),r=Ot(t),s=X(1);e&&(i?q(i)&&(s=tt(i)):s=tt(t));let l=function(p,m,f){return m===void 0&&(m=!1),!(!f||m&&f!==N(p))&&m}(r,n,i)?Ut(r):X(0),a=(o.left+l.x)/s.x,u=(o.top+l.y)/s.y,d=o.width/s.x,h=o.height/s.y;if(r){let p=N(r),m=i&&q(i)?N(i):i,f=p.frameElement;for(;f&&i&&m!==p;){let g=tt(f),y=f.getBoundingClientRect(),w=getComputedStyle(f),x=y.left+(f.clientLeft+parseFloat(w.paddingLeft))*g.x,b=y.top+(f.clientTop+parseFloat(w.paddingTop))*g.y;a*=g.x,u*=g.y,d*=g.x,h*=g.y,a+=x,u+=b,f=N(f).frameElement}}return it({width:d,height:h,x:a,y:u})}c(J,"R");function mt(t){return q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}c(mt,"E");function I(t){var e;return(e=(It(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}c(I,"S");function Xt(t){return J(I(t)).left+mt(t).scrollLeft}c(Xt,"C");function et(t){if(U(t)==="html")return t;let e=t.assignedSlot||t.parentNode||Ct(t)&&t.host||I(t);return Ct(e)?e.host:e}c(et,"F");function Gt(t){let e=et(t);return pt(e)?t.ownerDocument?t.ownerDocument.body:t.body:C(e)&&rt(e)?e:Gt(e)}c(Gt,"O");function dt(t,e){var n;e===void 0&&(e=[]);let i=Gt(t),o=i===((n=t.ownerDocument)==null?void 0:n.body),r=N(i);return o?e.concat(r,r.visualViewport||[],rt(i)?i:[]):e.concat(i,dt(i))}c(dt,"D");function jt(t,e,n){let i;if(e==="viewport")i=function(o,r){let s=N(o),l=I(o),a=s.visualViewport,u=l.clientWidth,d=l.clientHeight,h=0,p=0;if(a){u=a.width,d=a.height;let m=Lt();(!m||m&&r==="fixed")&&(h=a.offsetLeft,p=a.offsetTop)}return{width:u,height:d,x:h,y:p}}(t,n);else if(e==="document")i=function(o){let r=I(o),s=mt(o),l=o.ownerDocument.body,a=F(r.scrollWidth,r.clientWidth,l.scrollWidth,l.clientWidth),u=F(r.scrollHeight,r.clientHeight,l.scrollHeight,l.clientHeight),d=-s.scrollLeft+Xt(o),h=-s.scrollTop;return _(l).direction==="rtl"&&(d+=F(r.clientWidth,l.clientWidth)-a),{width:a,height:u,x:d,y:h}}(I(t));else if(q(e))i=function(o,r){let s=J(o,!0,r==="fixed"),l=s.top+o.clientTop,a=s.left+o.clientLeft,u=C(o)?tt(o):X(1);return{width:o.clientWidth*u.x,height:o.clientHeight*u.y,x:a*u.x,y:l*u.y}}(e,n);else{let o=Ut(t);i=H(T({},e),{x:e.x-o.x,y:e.y-o.y})}return it(i)}c(jt,"H");function Jt(t,e){let n=et(t);return!(n===e||!q(n)||pt(n))&&(_(n).position==="fixed"||Jt(n,e))}c(Jt,"W");function ce(t,e,n){let i=C(e),o=I(e),r=n==="fixed",s=J(t,!0,r,e),l={scrollLeft:0,scrollTop:0},a=X(0);if(i||!i&&!r)if((U(e)!=="body"||rt(o))&&(l=mt(e)),C(e)){let u=J(e,!0,r,e);a.x=u.x+e.clientLeft,a.y=u.y+e.clientTop}else o&&(a.x=Xt(o));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}c(ce,"M");function _t(t,e){return C(t)&&_(t).position!=="fixed"?e?e(t):t.offsetParent:null}c(_t,"z");function qt(t,e){let n=N(t);if(!C(t))return n;let i=_t(t,e);for(;i&&se(i)&&_(i).position==="static";)i=_t(i,e);return i&&(U(i)==="html"||U(i)==="body"&&_(i).position==="static"&&!St(i))?n:i||function(o){let r=et(o);for(;C(r)&&!pt(r);){if(St(r))return r;r=et(r)}return null}(t)||n}c(qt,"P");var at={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t,o=C(n),r=I(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},l=X(1),a=X(0);if((o||!o&&i!=="fixed")&&((U(n)!=="body"||rt(r))&&(s=mt(n)),C(n))){let u=J(n);l=tt(n),a.x=u.x+n.clientLeft,a.y=u.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+a.x,y:e.y*l.y-s.scrollTop*l.y+a.y}},getDocumentElement:I,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t,r=[...n==="clippingAncestors"?function(a,u){let d=u.get(a);if(d)return d;let h=dt(a).filter(g=>q(g)&&U(g)!=="body"),p=null,m=_(a).position==="fixed",f=m?et(a):a;for(;q(f)&&!pt(f);){let g=_(f),y=St(f);y||g.position!=="fixed"||(p=null),(m?!y&&!p:!y&&g.position==="static"&&p&&["absolute","fixed"].includes(p.position)||rt(f)&&!y&&Jt(a,f))?h=h.filter(w=>w!==f):p=g,f=et(f)}return u.set(a,h),h}(e,this._c):[].concat(n),i],s=r[0],l=r.reduce((a,u)=>{let d=jt(e,u,o);return a.top=F(d.top,a.top),a.right=Tt(d.right,a.right),a.bottom=Tt(d.bottom,a.bottom),a.left=F(d.left,a.left),a},jt(e,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:qt,getElementRects:async function(t){let{reference:e,floating:n,strategy:i}=t,o=this.getOffsetParent||qt,r=this.getDimensions;return{reference:ce(e,await o(n),i),floating:T({x:0,y:0},await r(n))}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return Yt(t)},getScale:tt,isElement:q,isRTL:function(t){return getComputedStyle(t).direction==="rtl"}};function Kt(t,e,n,i){i===void 0&&(i={});let{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,u=Ot(t),d=o||r?[...u?dt(u):[],...dt(e)]:[];d.forEach(y=>{o&&y.addEventListener("scroll",n,{passive:!0}),r&&y.addEventListener("resize",n)});let h=u&&l?function(y,w){let x,b=null,L=I(y);function P(){clearTimeout(x),b&&b.disconnect(),b=null}return c(P,"r"),c(function z(A,M){A===void 0&&(A=!1),M===void 0&&(M=1),P();let{left:V,top:W,width:j,height:O}=y.getBoundingClientRect();if(A||w(),!j||!O)return;let S={rootMargin:-ut(W)+"px "+-ut(L.clientWidth-(V+j))+"px "+-ut(L.clientHeight-(W+O))+"px "+-ut(V)+"px",threshold:F(0,Tt(1,M))||1},B=!0;function D($){let k=$[0].intersectionRatio;if(k!==M){if(!B)return z();k?z(!1,k):x=setTimeout(()=>{z(!1,1e-7)},100)}B=!1}c(D,"w");try{b=new IntersectionObserver(D,H(T({},S),{root:L.ownerDocument}))}catch($){b=new IntersectionObserver(D,S)}b.observe(y)},"c")(!0),P}(u,n):null,p,m=-1,f=null;s&&(f=new ResizeObserver(y=>{let[w]=y;w&&w.target===u&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),u&&!a&&f.observe(u),f.observe(e));let g=a?J(t):null;return a&&c(function y(){let w=J(t);!g||w.x===g.x&&w.y===g.y&&w.width===g.width&&w.height===g.height||n(),g=w,p=requestAnimationFrame(y)},"e")(),n(),()=>{d.forEach(y=>{o&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),h&&h(),f&&f.disconnect(),f=null,a&&cancelAnimationFrame(p)}}c(Kt,"A");var Qt=c((t,e,n)=>{let i=new Map,o=T({platform:at},n),r=H(T({},o.platform),{_c:i});return Vt(t,e,H(T({},o),{platform:r}))},"B");function Zt(t){return fe(t)}c(Zt,"t");function zt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}c(zt,"o");function fe(t){for(let e=t;e;e=zt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=zt(t);e;e=zt(e)){if(!(e instanceof Element))continue;let n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||e.tagName==="BODY"))return e}return null}c(fe,"r");function ue(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}c(ue,"isVirtualElement");var v=class extends Ht{constructor(){super(...arguments);this.active=!1;this.placement="top";this.strategy="absolute";this.distance=0;this.skidding=0;this.arrow=!1;this.arrowPlacement="anchor";this.arrowPadding=10;this.flip=!1;this.flipFallbackPlacements="";this.flipFallbackStrategy="best-fit";this.flipPadding=0;this.shift=!1;this.shiftPadding=0;this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(n){super.updated(n),n.has("active")&&(this.active?this.start():this.stop()),n.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let n=this.getRootNode();this.anchorElement=n.getElementById(this.anchor)}else this.anchor instanceof Element||ue(this.anchor)?this.anchorElement=this.anchor:this.anchorElement=this.querySelector('[slot="anchor"]');if(this.anchorElement instanceof HTMLSlotElement&&(this.anchorElement=this.anchorElement.assignedElements({flatten:!0})[0]),!this.anchorElement)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorElement&&(this.cleanup=Kt(this.anchorElement,this.container,()=>{this.reposition()}))}async stop(){return new Promise(n=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>n())):n()})}reposition(){if(!this.active||!this.anchorElement)return;let n=[Pt({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?n.push(ft({apply:({rects:o})=>{let r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.container.style.width=r?`${o.reference.width}px`:"",this.container.style.height=s?`${o.reference.height}px`:""}})):(this.container.style.width="",this.container.style.height=""),this.flip&&n.push(Rt({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&n.push(At({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?n.push(ft({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&n.push(Et({element:this.arrowElement,padding:this.arrowPadding}));let i=this.strategy==="absolute"?o=>at.getOffsetParent(o,Zt):at.getOffsetParent;Qt(this.anchorElement,this.container,{placement:this.placement,middleware:n,strategy:this.strategy,platform:H(T({},at),{getOffsetParent:i})}).then(({x:o,y:r,middlewareData:s,placement:l})=>{let a=getComputedStyle(this).direction==="rtl",u={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];if(this.setAttribute("data-current-placement",l),Object.assign(this.container.style,{left:`${o}px`,top:`${r}px`}),this.arrow){let d=s.arrow.x,h=s.arrow.y,p="",m="",f="",g="";if(this.arrowPlacement==="start"){let x=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=a?x:"",g=a?"":x}else if(this.arrowPlacement==="end"){let x=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=a?"":x,g=a?x:"",f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof d=="number"?`calc(50% - var(--arrow-size) * 0.75${["left","right"].includes(u)?" + 1px":""})`:"",p=typeof h=="number"?`calc(50% - var(--arrow-size) * 0.75${["left","right"].includes(u)?" + 1px":""})`:""):(g=typeof d=="number"?`${d}px`:"",p=typeof h=="number"?`${h}px`:"");let y={top:"rotate(180deg)",bottom:"rotate(0deg)",left:"rotate(90deg)",right:"rotate(-90deg)"}[u],w=`calc(var(--arrow-size) * -1${["left","right"].includes(u)?" - 1px":""})`;Object.assign(this.arrowElement.style,{top:p,right:m,bottom:f,left:g,transform:y,[u]:w})}}),this.emit("cps-reposition")}render(){return wt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="container"
        class=${Mt({flyout:!0,"flyout--active":this.active,"flyout--fixed":this.strategy==="fixed","flyout--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?wt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};c(v,"CpsFlyout"),v.styles=Nt,E([yt(".flyout")],v.prototype,"container",2),E([yt(".popup__arrow")],v.prototype,"arrowElement",2),E([R()],v.prototype,"anchor",2),E([R({type:Boolean,reflect:!0})],v.prototype,"active",2),E([R({reflect:!0})],v.prototype,"placement",2),E([R({reflect:!0})],v.prototype,"strategy",2),E([R({type:Number})],v.prototype,"distance",2),E([R({type:Number})],v.prototype,"skidding",2),E([R({type:Boolean})],v.prototype,"arrow",2),E([R({attribute:"arrow-placement"})],v.prototype,"arrowPlacement",2),E([R({attribute:"arrow-padding",type:Number})],v.prototype,"arrowPadding",2),E([R({type:Boolean})],v.prototype,"flip",2),E([R({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],v.prototype,"flipFallbackPlacements",2),E([R({attribute:"flip-fallback-strategy"})],v.prototype,"flipFallbackStrategy",2),E([R({type:Object})],v.prototype,"flipBoundary",2),E([R({attribute:"flip-padding",type:Number})],v.prototype,"flipPadding",2),E([R({type:Boolean})],v.prototype,"shift",2),E([R({type:Object})],v.prototype,"shiftBoundary",2),E([R({attribute:"shift-padding",type:Number})],v.prototype,"shiftPadding",2),E([R({attribute:"auto-size"})],v.prototype,"autoSize",2),E([R()],v.prototype,"sync",2),E([R({type:Object})],v.prototype,"autoSizeBoundary",2),E([R({attribute:"auto-size-padding",type:Number})],v.prototype,"autoSizePadding",2),v=E([Dt("cps-flyout")],v);export{v as a};
