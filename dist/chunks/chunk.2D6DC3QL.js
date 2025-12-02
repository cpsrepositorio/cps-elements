import{a as v}from"./chunk.ZWV22YCL.js";import{a as k}from"./chunk.FQ7ORM66.js";import{a as b}from"./chunk.AL7LJRBA.js";import{b as p}from"./chunk.5DUF7374.js";import{a as y}from"./chunk.TBLM4WXU.js";import{a as f}from"./chunk.UV5W4X7Q.js";import{a}from"./chunk.SYMZGPTI.js";import{a as m}from"./chunk.2XELF4ZT.js";import{a as c}from"./chunk.MESFKACX.js";import{a as d,b as i,c as s,d as h,e as u}from"./chunk.NFRCMEAX.js";import{e as o}from"./chunk.QJBMNVJB.js";import{c as n,e as t}from"./chunk.K3RV6SX6.js";var e=class extends u{constructor(){super(...arguments);this.formControlController=new p(this,{value:l=>l.checked?l.value||"on":void 0,defaultValue:l=>l.defaultChecked,setValue:(l,r)=>l.checked=r});this.hasSlotController=new m(this);this.hasFocus=!1;this.generatedId="";this.title="";this.id="";this.name="";this.label="";this.size="medium";this.disabled=!1;this.checked=!1;this.defaultChecked=!1;this.form="";this.required=!1;this.fluid=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}handleIdChange(){this.generatedId=y(this.id)}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.emit("cps-change")}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleInput(){this.formControlController.updateValidity(!0),this.emit("cps-input")}handleInvalid(l){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(l)}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}click(){this.input.click()}focus(l){this.input.focus(l)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(l){this.input.setCustomValidity(l),this.formControlController.updateValidity()}render(){let l=this.hasSlotController.test("[default]"),r=this.label?!0:!!l;return o`
      <label
        part="base"
        class=${c({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large","switch--fluid":this.fluid,"switch--has-label":r})}
      >
        <input
          id=${this.generatedId}
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${f(this.value)}
          .checked=${k(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          id=${`${this.generatedId}-control`}
          part="control${this.checked?" control--checked":""}"
          class="switch__control"
        >
          <span part="knob${this.checked?" knob--checked":""}" class="switch__knob"></span>
        </span>

        ${r?o`
              <label
                id=${`${this.generatedId}-label`}
                part="label"
                class="switch__label"
                for=${this.generatedId}
                aria-hidden=${r?"false":"true"}
              >
                <slot>${this.label}</slot>
              </label>
            `:""}
      </label>
    `}};n(e,"CpsSwitch"),e.styles=v,t([h('input[type="checkbox"]')],e.prototype,"input",2),t([s()],e.prototype,"hasFocus",2),t([s()],e.prototype,"generatedId",2),t([i()],e.prototype,"title",2),t([i()],e.prototype,"id",2),t([i()],e.prototype,"name",2),t([i()],e.prototype,"value",2),t([i()],e.prototype,"label",2),t([i({reflect:!0})],e.prototype,"size",2),t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([i({type:Boolean,reflect:!0})],e.prototype,"checked",2),t([b("checked")],e.prototype,"defaultChecked",2),t([i({reflect:!0})],e.prototype,"form",2),t([i({type:Boolean,reflect:!0})],e.prototype,"required",2),t([i({type:Boolean,reflect:!0})],e.prototype,"fluid",2),t([a("id")],e.prototype,"handleIdChange",1),t([a("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1),t([a("checked",{waitUntilFirstUpdate:!0})],e.prototype,"handleStateChange",1),e=t([d("cps-switch")],e);export{e as a};
