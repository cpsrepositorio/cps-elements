import{c}from"./chunk.3U5NA53D.js";import{a,b as v,c as r,e as y}from"./chunk.K3RV6SX6.js";var b=r(n=>e=>typeof e=="function"?((t,l)=>(customElements.define(t,l),l))(n,e):((t,l)=>{let{kind:o,elements:i}=l;return{kind:o,elements:i,finisher(s){customElements.define(t,s)}}})(n,e),"e");var f=r((n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?v(a({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},"i"),T=r((n,e,t)=>{e.constructor.createProperty(t,n)},"e");function u(n){return(e,t)=>t!==void 0?T(n,e,t):f(n,e)}r(u,"n");function G(n){return u(v(a({},n),{state:!0}))}r(G,"t");var d=r(({finisher:n,descriptor:e})=>(t,l)=>{var o;if(l===void 0){let i=(o=t.originalKey)!==null&&o!==void 0?o:t.key,s=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(t.key)}:v(a({},t),{key:i});return n!=null&&(s.finisher=function(m){n(m,i)}),s}{let i=t.constructor;e!==void 0&&Object.defineProperty(t,l,e(l)),n==null||n(i,l)}},"o");function D(n,e){return d({descriptor:t=>{let l={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){let o=typeof t=="symbol"?Symbol():"__"+t;l.get=function(){var i,s;return this[o]===void 0&&(this[o]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&s!==void 0?s:null),this[o]}}return l}})}r(D,"i");var E,V=((E=window.HTMLSlotElement)===null||E===void 0?void 0:E.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var p=class extends c{constructor(){super(...arguments);this.version="0.20.2"}emit(t,l){let o=new CustomEvent(t,a({bubbles:!0,cancelable:!1,composed:!0,detail:{}},l));return this.dispatchEvent(o),o}};r(p,"BaseElement"),y([u()],p.prototype,"dir",2),y([u()],p.prototype,"lang",2),y([u({reflect:!1,noAccessor:!0})],p.prototype,"version",2);export{b as a,u as b,G as c,D as d,p as e};
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
