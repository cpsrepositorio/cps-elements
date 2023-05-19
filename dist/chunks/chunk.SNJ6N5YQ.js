import{h as c}from"./chunk.7AWEOCKJ.js";import{a,b as p,c as o,d as y}from"./chunk.V5GSCVDY.js";var f=o(n=>e=>typeof e=="function"?((t,l)=>(customElements.define(t,l),l))(n,e):((t,l)=>{let{kind:r,elements:i}=l;return{kind:r,elements:i,finisher(s){customElements.define(t,s)}}})(n,e),"e");var T=o((n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?p(a({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},"i");function u(n){return(e,t)=>t!==void 0?((l,r,i)=>{r.constructor.createProperty(i,l)})(n,e,t):T(n,e)}o(u,"e");function g(n){return u(p(a({},n),{state:!0}))}o(g,"t");var d=o(({finisher:n,descriptor:e})=>(t,l)=>{var r;if(l===void 0){let i=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(t.key)}:p(a({},t),{key:i});return n!=null&&(s.finisher=function(m){n(m,i)}),s}{let i=t.constructor;e!==void 0&&Object.defineProperty(t,l,e(l)),n==null||n(i,l)}},"o");function H(n,e){return d({descriptor:t=>{let l={get(){var r,i;return(i=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){let r=typeof t=="symbol"?Symbol():"__"+t;l.get=function(){var i,s;return this[r]===void 0&&(this[r]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&s!==void 0?s:null),this[r]}}return l}})}o(H,"i");var E,_=((E=window.HTMLSlotElement)===null||E===void 0?void 0:E.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var v=class extends c{emit(t,l){let r=new CustomEvent(t,a({bubbles:!0,cancelable:!1,composed:!0,detail:{}},l));return this.dispatchEvent(r),r}};o(v,"BaseElement"),y([u()],v.prototype,"dir",2),y([u()],v.prototype,"lang",2);export{f as a,u as b,g as c,H as d,v as e};
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
