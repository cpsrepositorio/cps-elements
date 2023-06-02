import{a as z}from"./chunk.EJVWSVSC.js";import{a as y,b as x,c as $}from"./chunk.RVLD7X2V.js";import{b as g}from"./chunk.JWOZVSCB.js";import{a as b}from"./chunk.Z2TLLZAF.js";import{a as i}from"./chunk.57N3VXB5.js";import{a as h}from"./chunk.I4SLWRO6.js";import{a as d}from"./chunk.VVO3HDEY.js";import{a as f,b as r,c as m,d as p,e as v}from"./chunk.SNJ6N5YQ.js";import{a as u}from"./chunk.7AWEOCKJ.js";import{c,d as t}from"./chunk.V5GSCVDY.js";var e=class extends v{constructor(){super(...arguments);this.formControlController=new g(this,{assumeInteractionOn:["cps-blur","cps-input"]});this.hasSlotController=new b(this,"help-text","label");this.hasFocus=!1;this.generatedId="";this.title="";this.id="";this.name="";this.value="";this.defaultValue="";this.size="medium";this.label="";this.helpText="";this.placeholder="";this.rows=4;this.resize="vertical";this.disabled=!1;this.readonly=!1;this.form="";this.required=!1;this.spellcheck=!0}get validity(){return this.textarea.validity}get validationMessage(){return this.textarea.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.textarea)})}handleIdChange(){this.generatedId=$(this.id)}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.textarea)}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleChange(){this.value=this.textarea.value,this.setTextareaHeight(),this.emit("cps-change")}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleInput(){this.value=this.textarea.value,this.emit("cps-input")}handleInvalid(l){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(l)}setTextareaHeight(){this.resize==="auto"?(this.textarea.style.height="auto",this.textarea.style.height=`${this.textarea.scrollHeight}px`):this.textarea.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(l){this.textarea.focus(l)}blur(){this.textarea.blur()}select(){this.textarea.select()}scrollPosition(l){if(l){typeof l.top=="number"&&(this.textarea.scrollTop=l.top),typeof l.left=="number"&&(this.textarea.scrollLeft=l.left);return}return{top:this.textarea.scrollTop,left:this.textarea.scrollTop}}setSelectionRange(l,o,a="none"){this.textarea.setSelectionRange(l,o,a)}setRangeText(l,o,a,n){this.textarea.setRangeText(l,o,a,n),this.value!==this.textarea.value&&(this.value=this.textarea.value)}checkValidity(){return this.textarea.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.textarea.reportValidity()}setCustomValidity(l){this.textarea.setCustomValidity(l),this.formControlController.updateValidity()}render(){let l=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),a=this.label?!0:!!l,n=this.helpText?!0:!!o;return u`
      <div
        part="form-control"
        class=${d({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":a,"form-control--has-help-text":n})}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${a?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${d({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id=${this.generatedId}
              class="textarea__control"
              title=${this.title}
              name=${i(this.name)}
              .value=${x(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${i(this.placeholder)}
              rows=${i(this.rows)}
              minlength=${i(this.minlength)}
              maxlength=${i(this.maxlength)}
              autocapitalize=${i(this.autocapitalize)}
              autocorrect=${i(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${i(this.spellcheck)}
              enterkeyhint=${i(this.enterkeyhint)}
              inputmode=${i(this.inputmode)}
              aria-describedby=${n?`${this.generatedId}-help-text`:void 0}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>

            ${this.resize==="vertical"?u` <cps-icon name="textarea-resizer" library="system" class="textarea__resizer"></cps-icon> `:""}
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
    `}};c(e,"CpsTextarea"),e.styles=z,t([p(".textarea__control")],e.prototype,"textarea",2),t([m()],e.prototype,"hasFocus",2),t([m()],e.prototype,"generatedId",2),t([r()],e.prototype,"title",2),t([r()],e.prototype,"id",2),t([r()],e.prototype,"name",2),t([r()],e.prototype,"value",2),t([y()],e.prototype,"defaultValue",2),t([r({reflect:!0})],e.prototype,"size",2),t([r()],e.prototype,"label",2),t([r({attribute:"help-text"})],e.prototype,"helpText",2),t([r()],e.prototype,"placeholder",2),t([r({type:Number})],e.prototype,"rows",2),t([r()],e.prototype,"resize",2),t([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([r({type:Boolean,reflect:!0})],e.prototype,"readonly",2),t([r({reflect:!0})],e.prototype,"form",2),t([r({type:Boolean,reflect:!0})],e.prototype,"required",2),t([r({type:Number})],e.prototype,"minlength",2),t([r({type:Number})],e.prototype,"maxlength",2),t([r()],e.prototype,"autocapitalize",2),t([r()],e.prototype,"autocorrect",2),t([r()],e.prototype,"autocomplete",2),t([r({type:Boolean})],e.prototype,"autofocus",2),t([r()],e.prototype,"enterkeyhint",2),t([r({type:Boolean,converter:{fromAttribute:s=>!(!s||s==="false"),toAttribute:s=>s?"true":"false"}})],e.prototype,"spellcheck",2),t([r()],e.prototype,"inputmode",2),t([h("id")],e.prototype,"handleIdChange",1),t([h("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1),t([h("rows",{waitUntilFirstUpdate:!0})],e.prototype,"handleRowsChange",1),t([h("value",{waitUntilFirstUpdate:!0})],e.prototype,"handleValueChange",1),e=t([f("cps-textarea")],e);export{e as a};
