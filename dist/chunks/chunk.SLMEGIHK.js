import{a as z}from"./chunk.IMLEUSU4.js";import{a as p}from"./chunk.FGZ3HTEV.js";import{a as _}from"./chunk.7DH2XHEB.js";import{b as k}from"./chunk.5DUF7374.js";import{a as E}from"./chunk.TBLM4WXU.js";import{a as r}from"./chunk.LRWRRCF4.js";import{b as x}from"./chunk.2YZHDAPC.js";import{a as u}from"./chunk.SYMZGPTI.js";import{a as w}from"./chunk.2XELF4ZT.js";import{a as d}from"./chunk.FBB7MPWZ.js";import{a as g,b as s,c,d as v,e as $}from"./chunk.FTTF5KQK.js";import{a as l}from"./chunk.D7J5WK6X.js";import{c as y,e as i}from"./chunk.K3RV6SX6.js";var t=class extends ${constructor(){super(...arguments);this.formControlController=new k(this,{assumeInteractionOn:["cps-blur","cps-input"]});this.hasSlotController=new w(this,"help-text","label");this.localize=new x(this);this.hasFocus=!1;this.generatedId="";this.title="";this.type="text";this.id="";this.name="";this.value="";this.defaultValue="";this.size="medium";this.label="";this.helpText="";this.clearable=!1;this.disabled=!1;this.placeholder="";this.readonly=!1;this.passwordToggle=!1;this.passwordVisible=!1;this.noSpinButtons=!1;this.form="";this.required=!1;this.spellcheck=!0}get valueAsDate(){let e=document.createElement("input");return e.type="date",e.value=this.value,e.valueAsDate}set valueAsDate(e){try{let a=document.createElement("input");a.type="date",a.valueAsDate=e,this.value=a.value}catch(a){if(a instanceof Error&&(a==null?void 0:a.name)==="InvalidStateError")this.value=e?e.toISOString().split("T")[0]:"";else throw a}}get valueAsNumber(){let e=document.createElement("input");return e.type="number",e.value=this.value,e.valueAsNumber}set valueAsNumber(e){let a=document.createElement("input");a.type="number",a.valueAsNumber=e,this.value=a.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}handleIdChange(){this.generatedId=E(this.id)}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleChange(){this.value=this.input.value,this.emit("cps-change")}handleClearClick(e){this.value="",this.formControlController.updateValidity(!0),this.emit("cps-clear"),this.emit("cps-input"),this.emit("cps-change"),this.input.focus(),e.stopPropagation()}handleBaseClick(e){this.disabled||(this.input.focus(),e.stopPropagation())}handleClick(e){e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(!0),this.emit("cps-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){let a=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!a&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,a,o="none"){this.input.setSelectionRange(e,a,o)}setRangeText(e,a,o,h){this.input.setRangeText(e,a,o,h),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}typeError(e){return l`<p style="font: var(--cps-font-label); color: var(--cps-color-state-critical)">
      <strong>Error</strong>: Use
      <a
        href="https://cpsrepositorio.github.io/cps-elements/#/componentes/${e}"
        target="_blank"
        style="font: inherit; color: inherit; text-decoration: underline"
        ><code>&lt;cps-${e}&gt;</code></a
      >
      instead of <code>&lt;cps-input type="${this.type}"&gt;</code>
    </p>`}render(){switch(this.type){case"button":case"reset":case"submit":return this.typeError("button");case"checkbox":return this.typeError("checkbox");case"image":return this.typeError("button");case"radio":return this.typeError("radio");case"range":return this.typeError("range")}if(this.type==="hidden")return l`
        <input
          ?disabled=${this.disabled}
          ?required=${this.required}
          .value=${p(this.value)}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          form=${r(this.form||void 0)}
          id=${this.generatedId}
          name=${r(this.name)}
          part="input"
          type="hidden"
        />
      `;let e=this.hasSlotController.test("label"),a=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,h=this.helpText?!0:!!a,m=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0),f=this.type==="password"&&this.passwordToggle&&!this.disabled&&!this.readonly,b=["date","datetime-local","month","week"].includes(this.type)&&!this.disabled&&!this.readonly,S=this.type==="time"&&!this.disabled&&!this.readonly;return l`
      <div
        part="form-control"
        class=${d({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":h})}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${d({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons,"input--has-prefix":this.hasSlotController.test("prefix"),"input--has-suffix":this.hasSlotController.test("suffix")||m||f||b})}
            @click=${this.handleBaseClick}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id=${this.generatedId}
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${r(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${r(this.placeholder)}
              minlength=${r(this.minlength)}
              maxlength=${r(this.maxlength)}
              min=${r(this.min)}
              max=${r(this.max)}
              step=${r(this.step)}
              .value=${p(this.value)}
              autocapitalize=${r(this.autocapitalize)}
              autocomplete=${r(this.autocomplete)}
              autocorrect=${r(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${r(this.pattern)}
              enterkeyhint=${r(this.enterkeyhint)}
              inputmode=${r(this.inputmode)}
              aria-describedby=${h?`${this.generatedId}-help-text`:void 0}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @click=${this.handleClick}
            />

            ${m?l`
                    <cps-icon-button
                      part="clear-button"
                      exportparts="base:clear-button__base, icon:clear-button__icon"
                      name="dismiss"
                      library="system"
                      class="input__clear"
                      aria-label=${this.localize.term("clear")}
                      @click=${this.handleClearClick}
                      size=${this.size}
                    ></cps-icon-button>
                  `:""}

            ${f?l`
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

            ${b?l`
                    <cps-icon-button
                      name="calendar"
                      library="system"
                      class="input__date-picker"
                      aria-label=${this.localize.term("showCalendar")}
                      @click=${this.showPicker}
                      size=${this.size}
                    ></cps-icon-button>
                  `:""}

            ${S?l`
                    <cps-icon-button
                      name="clock"
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
          aria-hidden=${h?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};y(t,"CpsInput"),t.styles=z,i([v(".input__control")],t.prototype,"input",2),i([c()],t.prototype,"hasFocus",2),i([c()],t.prototype,"generatedId",2),i([s()],t.prototype,"title",2),i([s({reflect:!0})],t.prototype,"type",2),i([s()],t.prototype,"id",2),i([s()],t.prototype,"name",2),i([s()],t.prototype,"value",2),i([_()],t.prototype,"defaultValue",2),i([s({reflect:!0})],t.prototype,"size",2),i([s()],t.prototype,"label",2),i([s({attribute:"help-text"})],t.prototype,"helpText",2),i([s({type:Boolean})],t.prototype,"clearable",2),i([s({type:Boolean,reflect:!0})],t.prototype,"disabled",2),i([s()],t.prototype,"placeholder",2),i([s({type:Boolean,reflect:!0})],t.prototype,"readonly",2),i([s({attribute:"password-toggle",type:Boolean})],t.prototype,"passwordToggle",2),i([s({attribute:"password-visible",type:Boolean})],t.prototype,"passwordVisible",2),i([s({attribute:"no-spin-buttons",type:Boolean})],t.prototype,"noSpinButtons",2),i([s({reflect:!0})],t.prototype,"form",2),i([s({type:Boolean,reflect:!0})],t.prototype,"required",2),i([s()],t.prototype,"pattern",2),i([s({type:Number})],t.prototype,"minlength",2),i([s({type:Number})],t.prototype,"maxlength",2),i([s()],t.prototype,"min",2),i([s()],t.prototype,"max",2),i([s()],t.prototype,"step",2),i([s()],t.prototype,"autocapitalize",2),i([s()],t.prototype,"autocorrect",2),i([s()],t.prototype,"autocomplete",2),i([s({type:Boolean})],t.prototype,"autofocus",2),i([s()],t.prototype,"enterkeyhint",2),i([s({type:Boolean,converter:{fromAttribute:n=>!(!n||n==="false"),toAttribute:n=>n?"true":"false"}})],t.prototype,"spellcheck",2),i([s()],t.prototype,"inputmode",2),i([u("id")],t.prototype,"handleIdChange",1),i([u("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1),i([u("step",{waitUntilFirstUpdate:!0})],t.prototype,"handleStepChange",1),i([u("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1),t=i([g("cps-input")],t);export{t as a};
