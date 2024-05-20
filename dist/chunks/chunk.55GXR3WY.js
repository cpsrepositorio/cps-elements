import{a as S}from"./chunk.J7QQQNU6.js";import{a as _}from"./chunk.RPH34ADJ.js";import{a as k}from"./chunk.5CEBVSFG.js";import{b as x}from"./chunk.5DUF7374.js";import{a as z}from"./chunk.TBLM4WXU.js";import{a as s}from"./chunk.SQX3BQ4W.js";import{b as w}from"./chunk.KBGGAJDF.js";import{a as u}from"./chunk.SYMZGPTI.js";import{a as $}from"./chunk.2XELF4ZT.js";import{a as c}from"./chunk.VBAMGKE2.js";import{a as y,b as l,c as d,d as v,e as g}from"./chunk.DSDVM4TO.js";import{c as h}from"./chunk.OEWLIEQ2.js";import{c as b,e}from"./chunk.K3RV6SX6.js";var t=class extends g{constructor(){super(...arguments);this.formControlController=new x(this,{assumeInteractionOn:["cps-blur","cps-input"]});this.hasSlotController=new $(this,"help-text","label");this.localize=new w(this);this.hasFocus=!1;this.generatedId="";this.title="";this.type="text";this.id="";this.name="";this.value="";this.defaultValue="";this.size="medium";this.label="";this.helpText="";this.clearable=!1;this.disabled=!1;this.placeholder="";this.readonly=!1;this.passwordToggle=!1;this.passwordVisible=!1;this.noSpinButtons=!1;this.form="";this.required=!1;this.spellcheck=!0}get valueAsDate(){let i=document.createElement("input");return i.type="date",i.value=this.value,i.valueAsDate}set valueAsDate(i){try{let a=document.createElement("input");a.type="date",a.valueAsDate=i,this.value=a.value}catch(a){if(a instanceof Error&&(a==null?void 0:a.name)==="InvalidStateError")this.value=i?i.toISOString().split("T")[0]:"";else throw a}}get valueAsNumber(){let i=document.createElement("input");return i.type="number",i.value=this.value,i.valueAsNumber}set valueAsNumber(i){let a=document.createElement("input");a.type="number",a.valueAsNumber=i,this.value=a.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}handleIdChange(){this.generatedId=z(this.id)}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleChange(){this.value=this.input.value,this.emit("cps-change")}handleClearClick(i){this.value="",this.formControlController.updateValidity(!0),this.emit("cps-clear"),this.emit("cps-input"),this.emit("cps-change"),this.input.focus(),i.stopPropagation()}handleBaseClick(i){this.disabled||(this.input.focus(),i.stopPropagation())}handleClick(i){i.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(!0),this.emit("cps-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleKeyDown(i){let a=i.metaKey||i.ctrlKey||i.shiftKey||i.altKey;i.key==="Enter"&&!a&&setTimeout(()=>{!i.defaultPrevented&&!i.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(i){this.input.focus(i)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(i,a,r="none"){this.input.setSelectionRange(i,a,r)}setRangeText(i,a,r,n){this.input.setRangeText(i,a,r,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){let i=this.hasSlotController.test("label"),a=this.hasSlotController.test("help-text"),r=this.label?!0:!!i,n=this.helpText?!0:!!a,m=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0),p=this.type==="password"&&this.passwordToggle&&!this.disabled&&!this.readonly,f=this.type==="date"&&!this.disabled&&!this.readonly;return h`
      <div
        part="form-control"
        class=${c({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${c({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons,"input--has-prefix":this.hasSlotController.test("prefix"),"input--has-suffix":this.hasSlotController.test("suffix")||m||p||f})}
            @click=${this.handleBaseClick}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id=${this.generatedId}
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${s(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${s(this.placeholder)}
              minlength=${s(this.minlength)}
              maxlength=${s(this.maxlength)}
              min=${s(this.min)}
              max=${s(this.max)}
              step=${s(this.step)}
              .value=${_(this.value)}
              autocapitalize=${s(this.autocapitalize)}
              autocomplete=${s(this.autocomplete)}
              autocorrect=${s(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${s(this.pattern)}
              enterkeyhint=${s(this.enterkeyhint)}
              inputmode=${s(this.inputmode)}
              aria-describedby=${n?`${this.generatedId}-help-text`:void 0}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @click=${this.handleClick}
            />

            ${m?h`
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

            ${p?h`
                    <cps-icon-button
                      part="password-toggle-button"
                      exportparts="base:password-toggle-button__base, icon:password-toggle-button__icon"
                      name=${this.passwordVisible?"eye-off":"eye"}
                      library="system"
                      class="input__password-toggle"
                      aria-label=${this.passwordVisible?this.localize.term("hidePassword"):this.localize.term("showPassword")}
                      @click=${this.handlePasswordToggle}
                      size=${this.size}
                    ></cps-icon-button>
                  `:""}

            ${f?h`
                    <cps-icon-button
                      name="calendar"
                      library="system"
                      class="input__date-picker"
                      aria-label=${this.localize.term("showCalendar")}
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
          aria-hidden=${n?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};b(t,"CpsInput"),t.styles=S,e([v(".input__control")],t.prototype,"input",2),e([d()],t.prototype,"hasFocus",2),e([d()],t.prototype,"generatedId",2),e([l()],t.prototype,"title",2),e([l({reflect:!0})],t.prototype,"type",2),e([l()],t.prototype,"id",2),e([l()],t.prototype,"name",2),e([l()],t.prototype,"value",2),e([k()],t.prototype,"defaultValue",2),e([l({reflect:!0})],t.prototype,"size",2),e([l()],t.prototype,"label",2),e([l({attribute:"help-text"})],t.prototype,"helpText",2),e([l({type:Boolean})],t.prototype,"clearable",2),e([l({type:Boolean,reflect:!0})],t.prototype,"disabled",2),e([l()],t.prototype,"placeholder",2),e([l({type:Boolean,reflect:!0})],t.prototype,"readonly",2),e([l({attribute:"password-toggle",type:Boolean})],t.prototype,"passwordToggle",2),e([l({attribute:"password-visible",type:Boolean})],t.prototype,"passwordVisible",2),e([l({attribute:"no-spin-buttons",type:Boolean})],t.prototype,"noSpinButtons",2),e([l({reflect:!0})],t.prototype,"form",2),e([l({type:Boolean,reflect:!0})],t.prototype,"required",2),e([l()],t.prototype,"pattern",2),e([l({type:Number})],t.prototype,"minlength",2),e([l({type:Number})],t.prototype,"maxlength",2),e([l()],t.prototype,"min",2),e([l()],t.prototype,"max",2),e([l()],t.prototype,"step",2),e([l()],t.prototype,"autocapitalize",2),e([l()],t.prototype,"autocorrect",2),e([l()],t.prototype,"autocomplete",2),e([l({type:Boolean})],t.prototype,"autofocus",2),e([l()],t.prototype,"enterkeyhint",2),e([l({type:Boolean,converter:{fromAttribute:o=>!(!o||o==="false"),toAttribute:o=>o?"true":"false"}})],t.prototype,"spellcheck",2),e([l()],t.prototype,"inputmode",2),e([u("id")],t.prototype,"handleIdChange",1),e([u("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1),e([u("step",{waitUntilFirstUpdate:!0})],t.prototype,"handleStepChange",1),e([u("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1),t=e([y("cps-input")],t);export{t as a};
