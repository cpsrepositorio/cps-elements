import{a as o,b as v,c as A}from"./chunk.J52A36UU.js";import{c as l,d as m,e as d,g as c}from"./chunk.DRZBK76U.js";import{c as r}from"./chunk.K3RV6SX6.js";var R=r((t="value")=>(e,n)=>{let i=e.constructor,_=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(u,T,x){var p;let a=i.getPropertyOptions(t),b=typeof a.attribute=="string"?a.attribute:t;if(u===b){let s=a.converter||c,f=(typeof s=="function"?s:(p=s==null?void 0:s.fromAttribute)!=null?p:c.fromAttribute)(x,a.type);this[t]!==f&&(this[n]=f)}_.call(this,u,T,x)}},"defaultValue");var{I:w}=d;var $=r(t=>t.strings===void 0,"e");var y={},g=r((t,e=y)=>t._$AH=e,"s");var U=v(class extends A{constructor(t){if(super(t),t.type!==o.PROPERTY&&t.type!==o.ATTRIBUTE&&t.type!==o.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!$(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===l||e===m)return e;let n=t.element,i=t.name;if(t.type===o.PROPERTY){if(e===n[i])return l}else if(t.type===o.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(i))return l}else if(t.type===o.ATTRIBUTE&&n.getAttribute(i)===e+"")return l;return g(t),e}});function N(t){let e=new Date().getTime();return t||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let i=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(n==="x"?i:i&3|8).toString(16)})}r(N,"uuid");export{R as a,U as b,N as c};
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
