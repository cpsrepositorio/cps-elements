import{a as S,b as H,c as f}from"./chunk.FYLX4AU7.js";import{a as A}from"./chunk.S4Y24NAW.js";import{a as d}from"./chunk.I4SLWRO6.js";import{a as D}from"./chunk.IN3B544O.js";import{a as T,b as c,c as L}from"./chunk.F4LH4VVR.js";import{a as w,b as l,c as x,e as M}from"./chunk.63GKG2X6.js";import{a as b,c as y,d as u}from"./chunk.FHLVZWAU.js";import{c as a,d as s}from"./chunk.V5GSCVDY.js";var i=class extends L{constructor(e){if(super(e),this.it=u,e.type!==T.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===u||e==null)return this._t=void 0,this.it=e;if(e===y)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};a(i,"e");i.directiveName="unsafeHTML",i.resultType=1;var N=c(i);var o=class extends i{};a(o,"t");o.directiveName="unsafeSVG",o.resultType=2;var E=c(o);var p,t=class extends M{constructor(){super(...arguments);this.svg="";this.label="";this.library="default"}connectedCallback(){super.connectedCallback(),S(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),H(this)}getUrl(){let r=f(this.library);return this.name&&r?r.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var v;let r=f(this.library),h=this.getUrl();if(p||(p=new DOMParser),h)try{let m=await A(h);if(h!==this.getUrl())return;if(m.ok){let n=p.parseFromString(m.svg,"text/html").body.querySelector("svg");n!==null?(n.part.add("svg"),(v=r==null?void 0:r.mutator)==null||v.call(r,n),this.svg=n.outerHTML,this.emit("cps-load")):(this.svg="",this.emit("cps-error"))}else this.svg="",this.emit("cps-error")}catch(m){this.emit("cps-error")}else this.svg.length>0&&(this.svg="")}render(){return b` ${E(this.svg)} `}};a(t,"CpsIcon"),t.styles=D,s([x()],t.prototype,"svg",2),s([l({reflect:!0})],t.prototype,"name",2),s([l()],t.prototype,"src",2),s([l()],t.prototype,"label",2),s([l({reflect:!0})],t.prototype,"library",2),s([d("label")],t.prototype,"handleLabelChange",1),s([d(["name","src","library"])],t.prototype,"setIcon",1),t=s([w("cps-icon")],t);export{t as a};
/*! Bundled license information:

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
