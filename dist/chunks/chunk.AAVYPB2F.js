import{a as T,b as L,c as u}from"./chunk.ZY5DICZF.js";import{a as M}from"./chunk.V6L66VVO.js";import{a as D}from"./chunk.FJK625VR.js";import{a as d}from"./chunk.SYMZGPTI.js";import{a as S,b as c,c as H}from"./chunk.J52A36UU.js";import{a as b,b as l,c as y,e as A}from"./chunk.RLLGFEJH.js";import{a as w,c as x,d as f}from"./chunk.D7J5WK6X.js";import{c as a,e as s}from"./chunk.K3RV6SX6.js";var i=class extends H{constructor(r){if(super(r),this.et=f,r.type!==S.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===f||r==null)return this.ft=void 0,this.et=r;if(r===x)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;let t=[r];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};a(i,"e");i.directiveName="unsafeHTML",i.resultType=1;var N=c(i);var o=class extends i{};a(o,"t");o.directiveName="unsafeSVG",o.resultType=2;var E=c(o);var p,e=class extends A{constructor(){super(...arguments);this.svg="";this.label="";this.library="default"}connectedCallback(){super.connectedCallback(),T(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),L(this)}getUrl(){let t=u(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var v;let t=u(this.library),h=this.getUrl();if(p||(p=new DOMParser),h)try{let m=await M(h);if(h===this.getUrl())if(m.ok){let n=p.parseFromString(m.svg,"text/html").body.querySelector("svg");n!==null?(n.part.add("svg"),(v=t==null?void 0:t.mutator)==null||v.call(t,n),this.svg=n.outerHTML,this.emit("cps-load")):(this.svg="",this.emit("cps-error"))}else this.svg="",this.emit("cps-error")}catch(m){this.emit("cps-error")}else this.svg.length>0&&(this.svg="")}render(){var t;return w` ${E((t=this.svg)==null?void 0:t.replace("<svg ",'<svg part="svg" '))} `}};a(e,"CpsIcon"),e.styles=D,s([y()],e.prototype,"svg",2),s([l({reflect:!0})],e.prototype,"name",2),s([l()],e.prototype,"src",2),s([l()],e.prototype,"label",2),s([l({reflect:!0})],e.prototype,"library",2),s([d("label")],e.prototype,"handleLabelChange",1),s([d(["name","src","library"])],e.prototype,"setIcon",1),e=s([b("cps-icon")],e);export{e as a};
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
