import{a as $}from"./chunk.BZS6HSRW.js";import{a as k,b as o,c as y}from"./chunk.62BJGYG4.js";import{b as f}from"./chunk.JKWR2TXW.js";import{a as u}from"./chunk.3GCKH32X.js";import{a as b}from"./chunk.IRAMM6YV.js";import{a as s}from"./chunk.SYMZGPTI.js";import{a as c}from"./chunk.YW7PM72I.js";import{a as h,b as l,c as n,d as m,e as p}from"./chunk.FVZAJBTT.js";import{a}from"./chunk.DRZBK76U.js";import{c as d,e as t}from"./chunk.K3RV6SX6.js";var e=class extends p{constructor(){super(...arguments);this.formControlController=new f(this,{value:i=>i.checked?i.value||"on":void 0,defaultValue:i=>i.defaultChecked,setValue:(i,r)=>i.checked=r});this.hasSlotController=new u(this);this.hasFocus=!1;this.generatedId="";this.title="";this.id="";this.name="";this.label="";this.size="medium";this.disabled=!1;this.checked=!1;this.indeterminate=!1;this.defaultChecked=!1;this.form="";this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}handleIdChange(){this.generatedId=y(this.id)}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("cps-change")}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleInput(){this.emit("cps-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){let i=this.hasSlotController.test("[default]"),r=this.label?!0:!!i;return a`
      <label
        part="base"
        class=${c({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large","checkbox--has-label":r})}
      >
        <input
          id=${this.generatedId}
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${b(this.value)}
          .indeterminate=${o(this.indeterminate)}
          .checked=${o(this.checked)}
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
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?a`
                <cps-icon
                  part="checked-icon"
                  class="checkbox__checked-icon"
                  library="system"
                  name="checkmark"
                ></cps-icon>
              `:""}
          ${!this.checked&&this.indeterminate?a`
                <cps-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="subtract"
                ></cps-icon>
              `:""}
        </span>

        <label
          id=${`${this.generatedId}-label`}
          part="label"
          class="checkbox__label"
          for=${this.generatedId}
          aria-hidden=${r?"false":"true"}
        >
          <slot>${this.label}</slot>
        </label>
      </label>
    `}};d(e,"CpsCheckbox"),e.styles=$,t([m('input[type="checkbox"]')],e.prototype,"input",2),t([n()],e.prototype,"hasFocus",2),t([n()],e.prototype,"generatedId",2),t([l()],e.prototype,"title",2),t([l()],e.prototype,"id",2),t([l()],e.prototype,"name",2),t([l()],e.prototype,"value",2),t([l()],e.prototype,"label",2),t([l({reflect:!0})],e.prototype,"size",2),t([l({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([l({type:Boolean,reflect:!0})],e.prototype,"checked",2),t([l({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2),t([k("checked")],e.prototype,"defaultChecked",2),t([l({reflect:!0})],e.prototype,"form",2),t([l({type:Boolean,reflect:!0})],e.prototype,"required",2),t([s("id")],e.prototype,"handleIdChange",1),t([s("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1),t([s(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],e.prototype,"handleStateChange",1),e=t([h("cps-checkbox")],e);export{e as a};
