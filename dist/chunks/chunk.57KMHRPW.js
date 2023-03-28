import{b as D,c as F}from"./chunk.NK6E4PEK.js";import{a as M,b as k,c as w}from"./chunk.DOTUF5V4.js";import{a as _}from"./chunk.I4SLWRO6.js";import{b as N}from"./chunk.THFCKAE3.js";import{a as $,b as n,c as b,d as T,e as H}from"./chunk.F5SWOSK5.js";import{a as V}from"./chunk.SKZR7Y3R.js";import{b as x,c as S,d as C,e as L}from"./chunk.LSQ7QZO7.js";import{c as d,d as o}from"./chunk.V5GSCVDY.js";var R=k(class extends w{constructor(r){var e;if(super(r),r.type!==M.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,a;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in e)e[s]&&!(!((t=this.st)===null||t===void 0)&&t.has(s))&&this.nt.add(s);return this.render(e)}let l=r.element.classList;this.nt.forEach(s=>{s in e||(l.remove(s),this.nt.delete(s))});for(let s in e){let h=!!e[s];h===this.nt.has(s)||!((a=this.st)===null||a===void 0)&&a.has(s)||(h?(l.add(s),this.nt.add(s)):(l.remove(s),this.nt.delete(s)))}return C}});var f=class{constructor(e,...t){this.slotNames=[];(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()==="cps-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};d(f,"HasSlotController");var O=Symbol.for(""),U=d(r=>{if((r==null?void 0:r.r)===O)return r==null?void 0:r._$litStatic$},"l");var v=d((r,...e)=>({_$litStatic$:e.reduce((t,a,l)=>t+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+r[l+1],r[0]),r:O}),"i"),I=new Map,z=d(r=>(e,...t)=>{let a=t.length,l,s,h=[],g=[],p,c=0,y=!1;for(;c<a;){for(p=e[c];c<a&&(s=t[c],(l=U(s))!==void 0);)p+=l+e[++c],y=!0;g.push(s),h.push(p),c++}if(c===a&&h.push(e[a]),y){let E=h.join("$$lit$$");(e=I.get(E))===void 0&&(h.raw=h,I.set(E,e=h)),t=g}return r(e,...t)},"a"),m=z(x),Q=z(S);var u=d(r=>r!=null?r:L,"l");var i=class extends H{constructor(){super(...arguments);this.formControlController=new D(this,{form:t=>{if(t.hasAttribute("form")){let a=t.getRootNode(),l=t.getAttribute("form");return a.getElementById(l)}return t.closest("form")},assumeInteractionOn:["click"]});this.hasSlotController=new f(this,"[default]","prefix","suffix");this.localize=new N(this);this.isFocused=!1;this.invalid=!1;this.title="";this.variant="default";this.size="medium";this.caret=!1;this.disabled=!1;this.waiting=!1;this.rounded="default";this.type="button";this.name="";this.value="";this.href=""}get validity(){return this.isButton()?this.button.validity:F}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.isFocused=!1,this.emit("cps-blur")}handleFocus(){this.isFocused=!0,this.emit("cps-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(t){(this.disabled||this.waiting)&&(t.preventDefault(),t.stopImmediatePropagation())}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),a=t?v`a`:v`button`;return m`
      <${a}
        part="base"
        class=${R({button:!0,"button--default":this.variant==="default","button--accent":this.variant==="accent","button--transparent":this.variant==="transparent","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.rounded==="full","button--corner":this.rounded==="corner","button--disabled":this.disabled,"button--focused":this.isFocused,"button--waiting":this.waiting,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${u(t?void 0:this.disabled)}
        type=${u(t?void 0:this.type)}
        title=${this.title}
        name=${u(t?void 0:this.name)}
        value=${u(t?void 0:this.value)}
        href=${u(t?this.href:void 0)}
        target=${u(t?this.target:void 0)}
        download=${u(t?this.download:void 0)}
        rel=${u(t&&this.target?"noreferrer noopener":void 0)}
        role=${u(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="content" class="button__content"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?m` <cps-icon part="caret" class="button__caret" library="system" name="caret"></cps-icon> `:""}
        ${this.waiting?m`<cps-spinner></cps-spinner>`:""}
      </${a}>
    `}};d(i,"CpsButton"),i.styles=V,o([T(".button")],i.prototype,"button",2),o([b()],i.prototype,"isFocused",2),o([b()],i.prototype,"invalid",2),o([n()],i.prototype,"title",2),o([n({reflect:!0})],i.prototype,"variant",2),o([n({reflect:!0})],i.prototype,"size",2),o([n({type:Boolean,reflect:!0})],i.prototype,"caret",2),o([n({type:Boolean,reflect:!0})],i.prototype,"disabled",2),o([n({type:Boolean,reflect:!0})],i.prototype,"waiting",2),o([n({reflect:!0})],i.prototype,"rounded",2),o([n()],i.prototype,"type",2),o([n()],i.prototype,"name",2),o([n()],i.prototype,"value",2),o([n()],i.prototype,"href",2),o([n()],i.prototype,"target",2),o([n()],i.prototype,"download",2),o([n()],i.prototype,"form",2),o([n({attribute:"formaction"})],i.prototype,"formAction",2),o([n({attribute:"formenctype"})],i.prototype,"formEnctype",2),o([n({attribute:"formmethod"})],i.prototype,"formMethod",2),o([n({attribute:"formnovalidate",type:Boolean})],i.prototype,"formNoValidate",2),o([n({attribute:"formtarget"})],i.prototype,"formTarget",2),o([_("disabled",{waitUntilFirstUpdate:!0})],i.prototype,"handleDisabledChange",1),i=o([$("cps-button")],i);export{i as a};
/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
