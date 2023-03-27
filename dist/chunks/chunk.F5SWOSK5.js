import{f as y}from"./chunk.LSQ7QZO7.js";import{a as d,b as a,c as n,d as m}from"./chunk.V5GSCVDY.js";var h=n(t=>e=>typeof e=="function"?((r,s)=>(customElements.define(r,s),s))(t,e):((r,s)=>{let{kind:o,elements:i}=s;return{kind:o,elements:i,finisher(l){customElements.define(r,l)}}})(t,e),"e");var g=n((t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?a(d({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},"i");function p(t){return(e,r)=>r!==void 0?((s,o,i)=>{o.constructor.createProperty(i,s)})(t,e,r):g(t,e)}n(p,"e");function E(t){return p(a(d({},t),{state:!0}))}n(E,"t");var u=n(({finisher:t,descriptor:e})=>(r,s)=>{var o;if(s===void 0){let i=(o=r.originalKey)!==null&&o!==void 0?o:r.key,l=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(r.key)}:a(d({},r),{key:i});return t!=null&&(l.finisher=function(v){t(v,i)}),l}{let i=r.constructor;e!==void 0&&Object.defineProperty(r,s,e(s)),t==null||t(i,s)}},"o");function O(t,e){return u({descriptor:r=>{let s={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){let o=typeof r=="symbol"?Symbol():"__"+r;s.get=function(){var i,l;return this[o]===void 0&&(this[o]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&l!==void 0?l:null),this[o]}}return s}})}n(O,"i");var f,F=((f=window.HTMLSlotElement)===null||f===void 0?void 0:f.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(r=>r.nodeType===Node.ELEMENT_NODE);var c=class extends y{emit(r,s){let o=new CustomEvent(r,d({bubbles:!0,cancelable:!1,composed:!0,detail:{}},s));return this.dispatchEvent(o),o}};n(c,"BaseElement"),m([p()],c.prototype,"dir",2),m([p()],c.prototype,"lang",2);export{h as a,p as b,E as c,O as d,c as e};
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
