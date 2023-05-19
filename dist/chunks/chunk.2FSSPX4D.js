import{a as z}from"./chunk.6VRR64DF.js";import{b as R}from"./chunk.JWOZVSCB.js";import{a as V}from"./chunk.Z2TLLZAF.js";import{b as C}from"./chunk.2JK5RYA3.js";import{a as o}from"./chunk.57N3VXB5.js";import{a as g}from"./chunk.VVO3HDEY.js";import{a as f}from"./chunk.I4SLWRO6.js";import{a as c,b as E,c as k}from"./chunk.F4LH4VVR.js";import{a as B,b as r,c as y,d as S,e as P}from"./chunk.SNJ6N5YQ.js";import{a as m,c as p,d as A,e as T,g as x}from"./chunk.7AWEOCKJ.js";import{c as n,d as i}from"./chunk.V5GSCVDY.js";var D=n((s="value")=>(a,t)=>{let l=a.constructor,u=l.prototype.attributeChangedCallback;l.prototype.attributeChangedCallback=function(h,v,$){var _;let b=l.getPropertyOptions(s),L=typeof b.attribute=="string"?b.attribute:s;if(h===L){let d=b.converter||x,w=(typeof d=="function"?d:(_=d==null?void 0:d.fromAttribute)!=null?_:x.fromAttribute)($,b.type);this[s]!==w&&(this[t]=w)}u.call(this,h,v,$)}},"defaultValue");var{I:j}=T;var M=n(s=>s.strings===void 0,"e");var O={},F=n((s,a=O)=>s._$AH=a,"s");var U=E(class extends k{constructor(s){if(super(s),s.type!==c.PROPERTY&&s.type!==c.ATTRIBUTE&&s.type!==c.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!M(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[a]){if(a===p||a===A)return a;let t=s.element,l=s.name;if(s.type===c.PROPERTY){if(a===t[l])return p}else if(s.type===c.BOOLEAN_ATTRIBUTE){if(!!a===t.hasAttribute(l))return p}else if(s.type===c.ATTRIBUTE&&t.getAttribute(l)===a+"")return p;return F(s),a}});function H(s){let a=new Date().getTime();return s||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let l=(a+Math.random()*16)%16|0;return a=Math.floor(a/16),(t==="x"?l:l&3|8).toString(16)})}n(H,"uuid");var e=class extends P{constructor(){super(...arguments);this.formControlController=new R(this,{assumeInteractionOn:["cps-blur","cps-input"]});this.hasSlotController=new V(this,"help-text","label");this.localize=new C(this);this.hasFocus=!1;this.generatedId="";this.title="";this.type="text";this.id="";this.name="";this.value="";this.defaultValue="";this.size="medium";this.label="";this.helpText="";this.clearable=!1;this.disabled=!1;this.placeholder="";this.readonly=!1;this.passwordToggle=!1;this.passwordVisible=!1;this.noSpinButtons=!1;this.form="";this.required=!1;this.spellcheck=!0}get valueAsDate(){let t=document.createElement("input");return t.type="date",t.value=this.value,t.valueAsDate}set valueAsDate(t){try{let l=document.createElement("input");l.type="date",l.valueAsDate=t,this.value=l.value}catch(l){if(l instanceof Error&&(l==null?void 0:l.name)==="InvalidStateError")this.value=t?t.toISOString().split("T")[0]:"";else throw l}}get valueAsNumber(){let t=document.createElement("input");return t.type="number",t.value=this.value,t.valueAsNumber}set valueAsNumber(t){let l=document.createElement("input");l.type="number",l.valueAsNumber=t,this.value=l.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}handleIdChange(){this.generatedId=H(this.id)}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleChange(){this.value=this.input.value,this.emit("cps-change")}handleClearClick(t){this.value="",this.emit("cps-clear"),this.emit("cps-input"),this.emit("cps-change"),this.input.focus(),t.stopPropagation()}handleBaseClick(t){this.disabled||(this.input.focus(),t.stopPropagation())}handleClick(t){t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("cps-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let l=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!l&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,l,u="none"){this.input.setSelectionRange(t,l,u)}setRangeText(t,l,u,h){this.input.setRangeText(t,l,u,h),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),l=this.hasSlotController.test("help-text"),u=this.label?!0:!!t,h=this.helpText?!0:!!l,v=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${g({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":u,"form-control--has-help-text":h})}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${u?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${g({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
            @click=${this.handleBaseClick}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id=${this.generatedId}
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${o(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o(this.placeholder)}
              minlength=${o(this.minlength)}
              maxlength=${o(this.maxlength)}
              min=${o(this.min)}
              max=${o(this.max)}
              step=${o(this.step)}
              .value=${U(this.value)}
              autocapitalize=${o(this.autocapitalize)}
              autocomplete=${o(this.autocomplete)}
              autocorrect=${o(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${o(this.pattern)}
              enterkeyhint=${o(this.enterkeyhint)}
              inputmode=${o(this.inputmode)}
              aria-describedby=${h?`${this.generatedId}-help-text`:void 0}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @click=${this.handleClick}
            />

            ${v?m`
                    <cps-icon-button
                      part="clear-button"
                      exportparts="base:clear-button__base, icon:clear-button__icon"
                      name="dismiss"
                      library="system"
                      class="input__clear"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      size=${this.size}
                    ></cps-icon-button>
                  `:""}

            ${this.passwordToggle&&!this.disabled?m`
                    <cps-icon-button
                      part="password-toggle-button"
                      exportparts="base:password-toggle-button__base, icon:password-toggle-button__icon"
                      name=${this.passwordVisible?"eye-off":"eye"}
                      library="system"
                      class="input__password-toggle"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      size=${this.size}
                    ></cps-icon-button>
                  `:""}

            ${this.type==="date"?m`
                    <cps-icon-button
                      name="calendar"
                      library="system"
                      class="input__date-picker"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.showPicker}
                      size=${this.size}
                    ></cps-icon-button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          id=${`${this.generatedId}-help-text`}
          part="form-control-help-text"
          class="form-control__help-text"
          aria-hidden=${h?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};n(e,"CpsInput"),e.styles=z,i([S(".input__control")],e.prototype,"input",2),i([y()],e.prototype,"hasFocus",2),i([y()],e.prototype,"generatedId",2),i([r()],e.prototype,"title",2),i([r({reflect:!0})],e.prototype,"type",2),i([r()],e.prototype,"id",2),i([r()],e.prototype,"name",2),i([r()],e.prototype,"value",2),i([D()],e.prototype,"defaultValue",2),i([r({reflect:!0})],e.prototype,"size",2),i([r()],e.prototype,"label",2),i([r({attribute:"help-text"})],e.prototype,"helpText",2),i([r({type:Boolean})],e.prototype,"clearable",2),i([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2),i([r()],e.prototype,"placeholder",2),i([r({type:Boolean,reflect:!0})],e.prototype,"readonly",2),i([r({attribute:"password-toggle",type:Boolean})],e.prototype,"passwordToggle",2),i([r({attribute:"password-visible",type:Boolean})],e.prototype,"passwordVisible",2),i([r({attribute:"no-spin-buttons",type:Boolean})],e.prototype,"noSpinButtons",2),i([r({reflect:!0})],e.prototype,"form",2),i([r({type:Boolean,reflect:!0})],e.prototype,"required",2),i([r()],e.prototype,"pattern",2),i([r({type:Number})],e.prototype,"minlength",2),i([r({type:Number})],e.prototype,"maxlength",2),i([r()],e.prototype,"min",2),i([r()],e.prototype,"max",2),i([r()],e.prototype,"step",2),i([r()],e.prototype,"autocapitalize",2),i([r()],e.prototype,"autocorrect",2),i([r()],e.prototype,"autocomplete",2),i([r({type:Boolean})],e.prototype,"autofocus",2),i([r()],e.prototype,"enterkeyhint",2),i([r({type:Boolean,converter:{fromAttribute:s=>!(!s||s==="false"),toAttribute:s=>s?"true":"false"}})],e.prototype,"spellcheck",2),i([r()],e.prototype,"inputmode",2),i([f("id")],e.prototype,"handleIdChange",1),i([f("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1),i([f("step",{waitUntilFirstUpdate:!0})],e.prototype,"handleStepChange",1),i([f("value",{waitUntilFirstUpdate:!0})],e.prototype,"handleValueChange",1),e=i([B("cps-input")],e);export{e as a};
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
