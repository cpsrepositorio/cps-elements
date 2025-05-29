import{a as $}from"./chunk.PFVD473T.js";import{a as u}from"./chunk.LRWRRCF4.js";import{b as g}from"./chunk.G2JXWJ23.js";import{a as y}from"./chunk.FBB7MPWZ.js";import{a as h,b as f,c as b}from"./chunk.J52A36UU.js";import{a as d,b as o,e as v}from"./chunk.MYQ7XARW.js";import{a as c,c as m}from"./chunk.D7J5WK6X.js";import{c as p,e as l}from"./chunk.K3RV6SX6.js";var w="important",T=" !"+w,x=f(class extends b{constructor(s){var r;if(super(s),s.type!==h.ATTRIBUTE||s.name!=="style"||((r=s.strings)===null||r===void 0?void 0:r.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((r,t)=>{let e=s[t];return e==null?r:r+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(s,[r]){let{style:t}=s.element;if(this.ut===void 0){this.ut=new Set;for(let e in r)this.ut.add(e);return this.render(r)}this.ut.forEach(e=>{r[e]==null&&(this.ut.delete(e),e.includes("-")?t.removeProperty(e):t[e]="")});for(let e in r){let i=r[e];if(i!=null){this.ut.add(e);let n=typeof i=="string"&&i.endsWith(T);e.includes("-")||n?t.setProperty(e,n?i.slice(0,-11):i,n?w:""):t[e]=i}}return m}});var a=class extends v{constructor(){super(...arguments);this.localize=new g(this);this.status="default";this.label=""}get indeterminate(){return this.value===void 0||this.value===null}set indeterminate(t){var e;this.value=t?void 0:(e=this.value)!=null?e:0}render(){var t,e;return c`
      <div
        part="base"
        class=${y({"progress-bar":!0,"progress-bar--status-default":this.status==="default","progress-bar--status-pause":this.status==="pause","progress-bar--status-success":this.status==="success","progress-bar--status-error":this.status==="error","progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${u(this.title||void 0)}
        aria-label=${(t=this.label)!=null&&t.length?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${u(this.value)}
      >
        <div part="track" class="progress-bar__track"></div>
        <div part="indicator" class="progress-bar__indicator" style=${x({width:`${(e=this.value)!=null?e:50}%`})}></div>
      </div>
    `}};p(a,"CpsProgress"),a.styles=$,l([o({type:Number,reflect:!0})],a.prototype,"value",2),l([o({reflect:!0})],a.prototype,"status",2),l([o()],a.prototype,"label",2),a=l([d("cps-progress")],a);export{a};
/*! Bundled license information:

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
