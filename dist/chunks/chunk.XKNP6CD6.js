import{c as a}from"./chunk.K3RV6SX6.js";var W,j=window,x=j.trustedTypes,st=x?x.createPolicy("lit-html",{createHTML:n=>n}):void 0,B="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,K="?"+f,Et=`<${K}>`,E=document,M=a(()=>E.createComment(""),"u"),k=a(n=>n===null||typeof n!="object"&&typeof n!="function","d"),at=Array.isArray,dt=a(n=>at(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function","v"),q=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,nt=/>/g,y=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,rt=/"/g,ct=/^(?:script|style|textarea|title)$/i,ut=a(n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),"w"),wt=ut(1),xt=ut(2),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),lt=new WeakMap,S=E.createTreeWalker(E,129,null,!1);function pt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}a(pt,"P");var $t=a((n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":"",o=P;for(let d=0;d<e;d++){let l=n[d],h,c,u=-1,$=0;for(;$<l.length&&(o.lastIndex=$,c=o.exec(l),c!==null);)$=o.lastIndex,o===P?c[1]==="!--"?o=it:c[1]!==void 0?o=nt:c[2]!==void 0?(ct.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=y):c[3]!==void 0&&(o=y):o===y?c[0]===">"?(o=i!=null?i:P,u=-1):c[1]===void 0?u=-2:(u=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?y:c[3]==='"'?rt:ot):o===rt||o===ot?o=y:o===it||o===nt?o=P:(o=y,i=void 0);let v=o===y&&n[d+1].startsWith("/>")?" ":"";r+=o===P?l+Et:u>=0?(s.push(h),l.slice(0,u)+B+l.slice(u)+f+v):l+f+(u===-2?(s.push(void 0),d):v)}return[pt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},"V"),m=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,d=t.length-1,l=this.parts,[h,c]=$t(t,e);if(this.el=m.createElement(h,s),S.currentNode=this.el.content,e===2){let u=this.el.content,$=u.firstChild;$.remove(),u.append(...$.childNodes)}for(;(i=S.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let u=[];for(let $ of i.getAttributeNames())if($.endsWith(B)||$.startsWith(f)){let v=c[o++];if(u.push($),v!==void 0){let St=i.getAttribute(v.toLowerCase()+B).split(f),L=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:L[2],strings:St,ctor:L[1]==="."?O:L[1]==="?"?T:L[1]==="@"?N:g})}else l.push({type:6,index:r})}for(let $ of u)i.removeAttribute($)}if(ct.test(i.tagName)){let u=i.textContent.split(f),$=u.length-1;if($>0){i.textContent=x?x.emptyScript:"";for(let v=0;v<$;v++)i.append(u[v],M()),S.nextNode(),l.push({type:2,index:++r});i.append(u[$],M())}}}else if(i.nodeType===8)if(i.data===K)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(f,u+1))!==-1;)l.push({type:7,index:r}),u+=f.length-1}r++}}static createElement(t,e){let s=E.createElement("template");return s.innerHTML=t,s}};a(m,"N");function C(n,t,e=n,s){var i,r,o,d;if(t===b)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,h=k(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=C(n,l._$AS(n,t.values),l,s)),t}a(C,"S");var H=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(s,!0);S.currentNode=r;let o=S.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let c;h.type===2?c=new A(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new R(o,this,t)),this._$AV.push(c),h=i[++l]}d!==(h==null?void 0:h.index)&&(o=S.nextNode(),d++)}return S.currentNode=E,r}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};a(H,"M");var A=class{constructor(t,e,s,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),k(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):dt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=m.createElement(pt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(s);else{let o=new H(r,this),d=o.u(this.options);o.v(s),this.$(d),this._$AH=o}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new m(t)),e}T(t){at(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new A(this.k(M()),this.k(M()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}};a(A,"R");var g=class{constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=C(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{let d=t,l,h;for(t=r[0],l=0;l<r.length-1;l++)h=C(this,d[s+l],e,l),h===b&&(h=this._$AH[l]),o||(o=!k(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}};a(g,"k");var O=class extends g{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}};a(O,"H");var bt=x?x.emptyScript:"",T=class extends g{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}};a(T,"L");var N=class extends g{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:p)===b)return;let i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}};a(N,"z");var R=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};a(R,"Z");var Ut={O:B,P:f,A:K,C:1,M:$t,L:H,D:dt,R:C,I:A,V:g,H:T,N,U:O,F:R},ht=j.litHtmlPolyfillSupport;ht==null||ht(m,A),((W=j.litHtmlVersions)!==null&&W!==void 0?W:j.litHtmlVersions=[]).push("2.7.5");var vt=a((n,t,e)=>{var s,i;let r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,o=r._$litPart$;if(o===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new A(t.insertBefore(M(),d),d,void 0,e!=null?e:{})}return o._$AI(n),o},"D");var D=window,I=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),_t=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(I&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&_t.set(e,t))}return t}toString(){return this.cssText}};a(U,"o");var ft=a(n=>new U(typeof n=="string"?n:n+"",void 0,J),"r"),F=a((n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new U(e,n,J)},"i"),G=a((n,t)=>{I?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=D.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},"S"),z=I?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ft(e)})(n):n;var Q,V=window,At=V.trustedTypes,Ct=At?At.emptyScript:"",mt=V.reactiveElementPolyfillSupport,Y={toAttribute(n,t){switch(t){case Boolean:n=n?Ct:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},gt=a((n,t)=>t!==n&&(t==t||n==n),"a"),X={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:gt},Z="finalized",_=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||X}static finalize(){if(this.hasOwnProperty(Z))return!1;this[Z]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(z(i))}else t!==void 0&&e.push(z(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return G(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=X){var i;let r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:Y).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){let o=i.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:Y;this._$El=r,this[r]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||gt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};a(_,"u");_[Z]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},mt==null||mt({ReactiveElement:_}),((Q=V.reactiveElementVersions)!==null&&Q!==void 0?Q:V.reactiveElementVersions=[]).push("1.6.2");var tt,et;var w=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}};a(w,"s");w.finalized=!0,w._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:w});var yt=globalThis.litElementPolyfillSupport;yt==null||yt({LitElement:w});((et=globalThis.litElementVersions)!==null&&et!==void 0?et:globalThis.litElementVersions=[]).push("3.3.2");var Qt=F`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;export{wt as a,xt as b,b as c,p as d,Ut as e,F as f,Y as g,w as h,Qt as i};
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/