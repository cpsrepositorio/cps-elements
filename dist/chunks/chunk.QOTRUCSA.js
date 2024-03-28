import{a as D}from"./chunk.PWBRWPZF.js";import{a as T,b as L,c as u}from"./chunk.ZY5DICZF.js";import{a as M}from"./chunk.V6L66VVO.js";import{a as d}from"./chunk.SYMZGPTI.js";import{a as S,b as c,c as H}from"./chunk.J52A36UU.js";import{a as b,b as l,c as y,e as A}from"./chunk.GVOW3L7X.js";import{c as w,e as x,f}from"./chunk.FVWYSG5E.js";import{c as a,e as s}from"./chunk.K3RV6SX6.js";var i=class extends H{constructor(e){if(super(e),this.et=f,e.type!==S.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this.ft=void 0,this.et=e;if(e===x)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let r=[e];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};a(i,"e");i.directiveName="unsafeHTML",i.resultType=1;var N=c(i);var o=class extends i{};a(o,"t");o.directiveName="unsafeSVG",o.resultType=2;var E=c(o);var p,t=class extends A{constructor(){super(...arguments);this.svg="";this.label="";this.library="default"}connectedCallback(){super.connectedCallback(),T(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),L(this)}getUrl(){let r=u(this.library);return this.name&&r?r.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var v;let r=u(this.library),h=this.getUrl();if(p||(p=new DOMParser),h)try{let m=await M(h);if(h===this.getUrl())if(m.ok){let n=p.parseFromString(m.svg,"text/html").body.querySelector("svg");n!==null?(n.part.add("svg"),(v=r==null?void 0:r.mutator)==null||v.call(r,n),this.svg=n.outerHTML,this.emit("cps-load")):(this.svg="",this.emit("cps-error"))}else this.svg="",this.emit("cps-error")}catch(m){this.emit("cps-error")}else this.svg.length>0&&(this.svg="")}render(){return w` ${E(this.svg)} `}};a(t,"CpsIcon"),t.styles=D,s([y()],t.prototype,"svg",2),s([l({reflect:!0})],t.prototype,"name",2),s([l()],t.prototype,"src",2),s([l()],t.prototype,"label",2),s([l({reflect:!0})],t.prototype,"library",2),s([d("label")],t.prototype,"handleLabelChange",1),s([d(["name","src","library"])],t.prototype,"setIcon",1),t=s([b("cps-icon")],t);export{t as a};
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
