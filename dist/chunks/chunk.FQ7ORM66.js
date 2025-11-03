import{a as i,b as p,c as A}from"./chunk.5RNFXDKN.js";import{d as s,e as n,f as o}from"./chunk.VY2RTUP5.js";import{c as l}from"./chunk.K3RV6SX6.js";var{I:_}=o;var $=l(e=>e.strings===void 0,"f");var c={},m=l((e,t=c)=>e._$AH=t,"m");var R=p(class extends A{constructor(e){if(super(e),e.type!==i.PROPERTY&&e.type!==i.ATTRIBUTE&&e.type!==i.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!$(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===s||t===n)return t;let r=e.element,a=e.name;if(e.type===i.PROPERTY){if(t===r[a])return s}else if(e.type===i.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return s}else if(e.type===i.ATTRIBUTE&&r.getAttribute(a)===t+"")return s;return m(e),t}});export{R as a};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
