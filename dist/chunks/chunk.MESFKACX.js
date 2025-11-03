import{a as h,b as c,c as d}from"./chunk.5RNFXDKN.js";import{d as a}from"./chunk.VY2RTUP5.js";var f=c(class extends d{constructor(s){var e;if(super(s),s.type!==h.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var n,i;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in e)e[t]&&!((n=this.nt)!=null&&n.has(t))&&this.st.add(t);return this.render(e)}let r=s.element.classList;for(let t of this.st)t in e||(r.remove(t),this.st.delete(t));for(let t in e){let o=!!e[t];o===this.st.has(t)||(i=this.nt)!=null&&i.has(t)||(o?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return a}});export{f as a};
/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
