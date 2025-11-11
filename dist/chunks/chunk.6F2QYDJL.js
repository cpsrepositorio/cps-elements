import{a as m,b as T,f}from"./chunk.QJBMNVJB.js";import{a as E,b as y,c as n,e as c}from"./chunk.K3RV6SX6.js";var g=n(t=>(r,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,r)}):customElements.define(t,r)},"t");var x={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:T},h=n((t=x,r,e)=>{let{kind:a,metadata:s}=e,p=globalThis.litPropertyMetadata.get(s);if(p===void 0&&globalThis.litPropertyMetadata.set(s,p=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),p.set(e.name,t),a==="accessor"){let{name:i}=e;return{set(l){let o=r.get.call(this);r.set.call(this,l),this.requestUpdate(i,o,t)},init(l){return l!==void 0&&this.C(i,void 0,t,l),l}}}if(a==="setter"){let{name:i}=e;return function(l){let o=this[i];r.call(this,l),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+a)},"r");function v(t){return(r,e)=>typeof e=="object"?h(t,r,e):((a,s,p)=>{let i=s.hasOwnProperty(p);return s.constructor.createProperty(p,a),i?Object.getOwnPropertyDescriptor(s,p):void 0})(t,r,e)}n(v,"n");function P(t){return v(y(E({},t),{state:!0,attribute:!1}))}n(P,"r");var d=n((t,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,e),e),"e");function W(t,r){return(e,a,s)=>{let p=n(i=>{var l,o;return(o=(l=i.renderRoot)==null?void 0:l.querySelector(t))!=null?o:null},"o");if(r){let{get:i,set:l}=typeof a=="object"?e:s!=null?s:(()=>{let o=Symbol();return{get(){return this[o]},set(b){this[o]=b}}})();return d(e,a,{get(){let o=i.call(this);return o===void 0&&(o=p(this),(o!==null||this.hasUpdated)&&l.call(this,o)),o}})}return d(e,a,{get(){return p(this)}})}}n(W,"e");var u=class extends f{constructor(){super(...arguments);this.version="0.23.1"}emit(e,a){let s=new CustomEvent(e,E({bubbles:!0,cancelable:!1,composed:!0,detail:{}},a));return this.dispatchEvent(s),s}};n(u,"BaseElement"),c([v()],u.prototype,"dir",2),c([v()],u.prototype,"lang",2),c([v({reflect:!1,noAccessor:!0})],u.prototype,"version",2);export{g as a,v as b,P as c,W as d,u as e};
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
