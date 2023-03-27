import{a as A,b as E,c as d}from"./chunk.53HAVL3L.js";import{a as $}from"./chunk.S4Y24NAW.js";import{a as v}from"./chunk.I4SLWRO6.js";import{a as T,b as c,c as y,e as M}from"./chunk.F5SWOSK5.js";import{a as S}from"./chunk.YDH25BPZ.js";import{b as L,d as _,e as p}from"./chunk.LSQ7QZO7.js";import{c as s,d as i}from"./chunk.V5GSCVDY.js";var U={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},u=s(l=>(...t)=>({_$litDirective$:l,values:t}),"e"),h=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};s(h,"i");var a=class extends h{constructor(t){if(super(t),this.it=p,t.type!==U.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===_)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};s(a,"e");a.directiveName="unsafeHTML",a.resultType=1;var R=u(a);var o=class extends a{};s(o,"t");o.directiveName="unsafeSVG",o.resultType=2;var w=u(o);var g,r=class extends M{constructor(){super(...arguments);this.svg="";this.label="";this.library="default"}connectedCallback(){super.connectedCallback(),A(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),E(this)}getUrl(){let e=d(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var b;let e=d(this.library),n=this.getUrl();if(g||(g=new DOMParser),n)try{let m=await $(n);if(n!==this.getUrl())return;if(m.ok){let f=g.parseFromString(m.svg,"text/html").body.querySelector("svg");f!==null?((b=e==null?void 0:e.mutator)==null||b.call(e,f),this.svg=f.outerHTML,this.emit("cps-load")):(this.svg="",this.emit("cps-error"))}else this.svg="",this.emit("cps-error")}catch(m){this.emit("cps-error")}else this.svg.length>0&&(this.svg="")}render(){return L` ${w(this.svg)} `}};s(r,"CpsIcon"),r.styles=S,i([y()],r.prototype,"svg",2),i([c({reflect:!0})],r.prototype,"name",2),i([c()],r.prototype,"src",2),i([c()],r.prototype,"label",2),i([c({reflect:!0})],r.prototype,"library",2),i([v("label")],r.prototype,"handleLabelChange",1),i([v(["name","src","library"])],r.prototype,"setIcon",1),r=i([T("cps-icon")],r);export{U as a,u as b,h as c,r as d};
/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
