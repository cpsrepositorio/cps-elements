import{c as d}from"./chunk.V5GSCVDY.js";var O=window,M=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),et=new WeakMap,b=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(M&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&et.set(e,t))}return t}toString(){return this.cssText}};d(b,"o");var st=d(n=>new b(typeof n=="string"?n:n+"",void 0,V),"r"),q=d((n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new b(e,n,V)},"i"),K=d((n,t)=>{M?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},"S"),L=M?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return st(e)})(n):n;var Z,k=window,it=k.trustedTypes,mt=it?it.emptyScript:"",nt=k.reactiveElementPolyfillSupport,F={toAttribute(n,t){switch(t){case Boolean:n=n?mt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},ot=d((n,t)=>t!==n&&(t==t||n==n),"a"),J={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:ot},$=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||J}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(L(i))}else t!==void 0&&e.push(L(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return K(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=J){var i;let r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:F).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){let o=i.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:F;this._$El=r,this[r]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};d($,"d");$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},nt==null||nt({ReactiveElement:$}),((Z=k.reactiveElementVersions)!==null&&Z!==void 0?Z:k.reactiveElementVersions=[]).push("1.6.1");var G,W=window,w=W.trustedTypes,rt=w?w.createPolicy("lit-html",{createHTML:n=>n}):void 0,X="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+f,gt=`<${pt}>`,x=document,H=d(()=>x.createComment(""),"d"),N=d(n=>n===null||typeof n!="object"&&typeof n!="function","u"),vt=Array.isArray,yt=d(n=>vt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function","v"),Q=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,g=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,dt=/"/g,$t=/^(?:script|style|textarea|title)$/i,_t=d(n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),"w"),Ht=_t(1),Nt=_t(2),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ct=new WeakMap,C=x.createTreeWalker(x,129,null,!1),St=d((n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":"",o=P;for(let l=0;l<e;l++){let h=n[l],_,a,u=-1,v=0;for(;v<h.length&&(o.lastIndex=v,a=o.exec(h),a!==null);)v=o.lastIndex,o===P?a[1]==="!--"?o=lt:a[1]!==void 0?o=ht:a[2]!==void 0?($t.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=g):a[3]!==void 0&&(o=g):o===g?a[0]===">"?(o=i!=null?i:P,u=-1):a[1]===void 0?u=-2:(u=o.lastIndex-a[2].length,_=a[1],o=a[3]===void 0?g:a[3]==='"'?dt:at):o===dt||o===at?o=g:o===lt||o===ht?o=P:(o=g,i=void 0);let T=o===g&&n[l+1].startsWith("/>")?" ":"";r+=o===P?h+gt:u>=0?(s.push(_),h.slice(0,u)+X+h.slice(u)+f+T):h+f+(u===-2?(s.push(void 0),l):T)}let c=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[rt!==void 0?rt.createHTML(c):c,s]},"P"),A=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,c=t.length-1,l=this.parts,[h,_]=St(t,e);if(this.el=A.createElement(h,s),C.currentNode=this.el.content,e===2){let a=this.el.content,u=a.firstChild;u.remove(),a.append(...u.childNodes)}for(;(i=C.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let a=[];for(let u of i.getAttributeNames())if(u.endsWith(X)||u.startsWith(f)){let v=_[o++];if(a.push(u),v!==void 0){let T=i.getAttribute(v.toLowerCase()+X).split(f),R=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:R[2],strings:T,ctor:R[1]==="."?B:R[1]==="?"?z:R[1]==="@"?D:y})}else l.push({type:6,index:r})}for(let u of a)i.removeAttribute(u)}if($t.test(i.tagName)){let a=i.textContent.split(f),u=a.length-1;if(u>0){i.textContent=w?w.emptyScript:"";for(let v=0;v<u;v++)i.append(a[v],H()),C.nextNode(),l.push({type:2,index:++r});i.append(a[u],H())}}}else if(i.nodeType===8)if(i.data===pt)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(f,a+1))!==-1;)l.push({type:7,index:r}),a+=f.length-1}r++}}static createElement(t,e){let s=x.createElement("template");return s.innerHTML=t,s}};d(A,"V");function U(n,t,e=n,s){var i,r,o,c;if(t===S)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,h=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(c=e)._$Co)!==null&&o!==void 0?o:c._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=U(n,l._$AS(n,t.values),l,s)),t}d(U,"N");var j=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;let{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:x).importNode(s,!0);C.currentNode=r;let o=C.nextNode(),c=0,l=0,h=i[0];for(;h!==void 0;){if(c===h.index){let _;h.type===2?_=new m(o,o.nextSibling,this,t):h.type===1?_=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(_=new I(o,this,t)),this.u.push(_),h=i[++l]}c!==(h==null?void 0:h.index)&&(o=C.nextNode(),c++)}return r}p(t){let e=0;for(let s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};d(j,"S");var m=class{constructor(t,e,s,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),N(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==S&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yt(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=A.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(s);else{let o=new j(r,this),c=o.v(this.options);o.p(s),this.T(c),this._$AH=o}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new A(t)),e}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new m(this.S(H()),this.S(H()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}};d(m,"M");var y=class{constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=U(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{let c=t,l,h;for(t=r[0],l=0;l<r.length-1;l++)h=U(this,c[s+l],e,l),h===S&&(h=this._$AH[l]),o||(o=!N(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}};d(y,"R");var B=class extends y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}};d(B,"k");var Et=w?w.emptyScript:"",z=class extends y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Et):this.element.removeAttribute(this.name)}};d(z,"I");var D=class extends y{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=U(this,t,e,0))!==null&&s!==void 0?s:p)===S)return;let i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}};d(D,"L");var I=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};d(I,"z");var ut=W.litHtmlPolyfillSupport;ut==null||ut(A,m),((G=W.litHtmlVersions)!==null&&G!==void 0?G:W.litHtmlVersions=[]).push("2.7.0");var ft=d((n,t,e)=>{var s,i;let r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,o=r._$litPart$;if(o===void 0){let c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new m(t.insertBefore(H(),c),c,void 0,e!=null?e:{})}return o._$AI(n),o},"B");var Y,tt;var E=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};d(E,"s");E.finalized=!0,E._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:E});var At=globalThis.litElementPolyfillSupport;At==null||At({LitElement:E});((tt=globalThis.litElementVersions)!==null&&tt!==void 0?tt:globalThis.litElementVersions=[]).push("3.3.0");var Zt=q`
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
`;export{q as a,Ht as b,Nt as c,S as d,p as e,E as f,Zt as g};
/*! Bundled license information:

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

lit-html/lit-html.js:
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
