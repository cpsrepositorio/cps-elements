import{a as i,b as v,c as A}from"./chunk.J52A36UU.js";import{c as n,d as o,e as a}from"./chunk.XKNP6CD6.js";import{c as l}from"./chunk.K3RV6SX6.js";var{I:$}=a;var c=l(e=>e.strings===void 0,"e");var p={},d=l((e,t=p)=>e._$AH=t,"s");var y=v(class extends A{constructor(e){if(super(e),e.type!==i.PROPERTY&&e.type!==i.ATTRIBUTE&&e.type!==i.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!c(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n||t===o)return t;let r=e.element,s=e.name;if(e.type===i.PROPERTY){if(t===r[s])return n}else if(e.type===i.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(s))return n}else if(e.type===i.ATTRIBUTE&&r.getAttribute(s)===t+"")return n;return d(e),t}});export{y as a};
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
