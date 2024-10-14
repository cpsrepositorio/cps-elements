import{a as x}from"./chunk.VZK4SEDJ.js";import{b as C,c as V,d as M,e as I}from"./chunk.5DUF7374.js";import{a as k}from"./chunk.TBLM4WXU.js";import{a as c}from"./chunk.SYMZGPTI.js";import{a as y}from"./chunk.2XELF4ZT.js";import{a as b}from"./chunk.FBB7MPWZ.js";import{a as g,b as n,c as u,d as m,e as v}from"./chunk.X76EUGAE.js";import{a as h}from"./chunk.D7J5WK6X.js";import{c as f,e as l}from"./chunk.K3RV6SX6.js";var o=class extends v{constructor(){super(...arguments);this.formControlController=new C(this);this.hasSlotController=new y(this,"help-text","label");this.customValidityMessage="";this.hasButtonGroup=!1;this.errorMessage="";this.generatedId="";this.defaultValue="";this.id="";this.label="";this.helpText="";this.name="option";this.value="";this.size="medium";this.form="";this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?I:t?M:V}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}handleIdChange(){this.generatedId=k(this.id)}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("cps-radio, cps-toggle-button")]}handleRadioClick(t){let e=t.target.closest("cps-radio, cps-toggle-button"),s=this.getAllRadios(),i=this.value;e.disabled||(this.value=e.value,s.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("cps-change",{detail:{value:this.value}}),this.emit("cps-input"),this.formControlController.updateValidity(!0),this.updateComplete.then(()=>this.adjustFocusableRadios())))}handleKeyDown(t){var p;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let e=this.getAllRadios().filter(d=>!d.disabled),s=(p=e.find(d=>d.checked))!=null?p:e[0],i=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value,a=e.indexOf(s)+i;a<0&&(a=e.length-1),a>e.length-1&&(a=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||(d.tabIndex=-1)}),this.value=e[a].value,e[a].checked=!0,this.hasButtonGroup?e[a].shadowRoot.querySelector("button").focus():(e[a].tabIndex=0,e[a].focus()),this.value!==r&&(this.emit("cps-change",{detail:{value:this.value}}),this.emit("cps-input"),this.formControlController.updateValidity(!0),this.updateComplete.then(()=>this.adjustFocusableRadios())),t.preventDefault()}handleLabelClick(){let t=this.getAllRadios(),s=t.find(i=>i.checked)||t[0];s&&s.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}adjustFocusableRadios(){var t;if(customElements.get("cps-radio")||customElements.get("cps-toggle-button")){let e=this.getAllRadios();for(let s of e){let i=(t=s.shadowRoot)==null?void 0:t.querySelector('[part~="button"]');i&&(i.tabIndex=s.disabled||s.value===this.value?-1:0)}}}syncRadios(){var t,e;if(customElements.get("cps-radio")||customElements.get("cps-toggle-button")){let s=this.getAllRadios();if(s.forEach(i=>{var a;i.checked=i.value===this.value,i.size=this.size;let r=(a=i.shadowRoot)==null?void 0:a.querySelector('[part="button"]');r&&(r.tabIndex=i.disabled||i.checked?-1:0,i.classList.toggle("cps-button-group__button--radio",!0))}),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="cps-toggle-button"),!s.some(i=>i.checked))if(this.hasButtonGroup){let i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&(i.tabIndex=0)}else s[0].tabIndex=0;if(this.hasButtonGroup){let i=(e=this.shadowRoot)==null?void 0:e.querySelector("cps-button-group");i&&(i.disableRole=!0)}}else customElements.whenDefined("cps-radio").then(()=>this.syncRadios()),customElements.whenDefined("cps-toggle-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=h`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.syncRadios}
        role="presentation"
      ></slot>
    `;return h`
      <fieldset
        part="form-control"
        class=${b({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby=${`${this.generatedId}-label`}
        aria-describedby=${`${this.generatedId}-help-text`}
        aria-errormessage=${`${this.generatedId}-error-message`}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id=${`${this.generatedId}-error-message`} aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                id=${this.generatedId}
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?h`
                <cps-button-group part="button-group" exportparts="base:button-group__base">
                  ${r}
                </cps-button-group>
              `:r}
        </div>

        <slot
          name="help-text"
          id=${`${this.generatedId}-help-text`}
          part="form-control-help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `}};f(o,"CpsRadioGroup"),o.styles=x,l([m("slot:not([name])")],o.prototype,"defaultSlot",2),l([m(".radio-group__validation-input")],o.prototype,"validationInput",2),l([u()],o.prototype,"hasButtonGroup",2),l([u()],o.prototype,"errorMessage",2),l([u()],o.prototype,"generatedId",2),l([u()],o.prototype,"defaultValue",2),l([n()],o.prototype,"id",2),l([n()],o.prototype,"label",2),l([n({attribute:"help-text"})],o.prototype,"helpText",2),l([n()],o.prototype,"name",2),l([n({reflect:!0})],o.prototype,"value",2),l([n({reflect:!0})],o.prototype,"size",2),l([n({reflect:!0})],o.prototype,"form",2),l([n({type:Boolean,reflect:!0})],o.prototype,"required",2),l([c("id")],o.prototype,"handleIdChange",1),l([c("size",{waitUntilFirstUpdate:!0})],o.prototype,"handleSizeChange",1),l([c("value")],o.prototype,"handleValueChange",1),o=l([g("cps-radio-group")],o);export{o as a};
