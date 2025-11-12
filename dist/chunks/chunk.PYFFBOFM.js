import{a as F}from"./chunk.I653MWRT.js";import{a as C}from"./chunk.FQ7ORM66.js";import{a as V}from"./chunk.AL7LJRBA.js";import{b as w}from"./chunk.5DUF7374.js";import{a as b}from"./chunk.TBLM4WXU.js";import{a as o}from"./chunk.UV5W4X7Q.js";import{a as u}from"./chunk.SYMZGPTI.js";import{a as M}from"./chunk.2XELF4ZT.js";import{a as m}from"./chunk.MESFKACX.js";import{a as $,b as a,c as d,d as v,e as x}from"./chunk.WBB6ER6A.js";import{e as h}from"./chunk.QJBMNVJB.js";import{c as f,e as l}from"./chunk.K3RV6SX6.js";var t=class extends x{constructor(){super(...arguments);this.formControlController=new w(this,{value:e=>e.value>0?e.value.toString():void 0,defaultValue:e=>e.defaultValue,setValue:(e,r)=>e.value=r});this.hasSlotController=new M(this,"help-text","label");this.hoverValue=0;this.isHovering=!1;this.isFocused=!1;this.generatedId="";this.label="";this.helpText="";this.name="";this.value=0;this.defaultValue=0;this.size="medium";this.max=5;this.step=1;this.symbol="star";this.disabled=!1;this.readonly=!1;this.required=!1;this.form="";this.handleLabelClick=f(e=>{e.preventDefault(),this.focus()},"handleLabelClick")}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}handleIdChange(){this.generatedId=this.id?this.id:b()}connectedCallback(){super.connectedCallback(),this.generatedId=this.id?this.id:b()}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.isFocused=!1,this.emit("cps-blur")}handleFocus(){this.isFocused=!0,this.emit("cps-focus")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}getValueFromMouse(e){let{left:r,width:s}=e.currentTarget.getBoundingClientRect(),i=(e.clientX-r)/s*this.max;return Math.min(this.max,Math.max(0,i))}getRoundedValue(e){return Math.round(e/this.step)*this.step}handleKeyDown(e){if(!(this.readonly||this.disabled)){if(/^[0-9]$/.test(e.key)){e.preventDefault();let r=Number(e.key);r>=0&&r<=this.max&&(this.value=r,this.emit("cps-change"));return}if(["Backspace","Delete","Home"].includes(e.key)){e.preventDefault(),this.value=0,this.emit("cps-change");return}if(e.key==="End"){e.preventDefault(),this.value=this.max,this.emit("cps-change");return}if(["ArrowLeft","ArrowDown"].includes(e.key)){e.preventDefault();let r=e.shiftKey?1:this.step;this.value=Math.max(0,this.value-r),this.emit("cps-change")}else if(["ArrowRight","ArrowUp"].includes(e.key)){e.preventDefault();let r=e.shiftKey?1:this.step;this.value=Math.min(this.max,this.value+r),this.emit("cps-change")}}}handleMouseEnter(){this.readonly||this.disabled||(this.isHovering=!0)}handleMouseLeave(){this.readonly||(this.isHovering=!1,this.hoverValue=0)}handleMouseMove(e){this.readonly||this.disabled||(this.hoverValue=this.getValueFromMouse(e))}handleClick(e){if(this.readonly||this.disabled)return;let r=this.getRoundedValue(this.getValueFromMouse(e));this.value=r,this.emit("cps-change")}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.emit("cps-change")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleReadonlyChange(){this.formControlController.setValidity(this.readonly)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.rating&&this.rating.focus(e)}blur(){this.rating&&this.rating.blur()}renderItems(){let e=this.isHovering?this.getRoundedValue(this.hoverValue):this.value;return Array.from({length:this.max}).map((r,s)=>{let i=e-s,c=i>0,p=i>=1,g=p?0:c?(1-i)*100:100;return h`
        <span
          part="symbol ${c?"symbol--active":""}"
          class=${m({rating__symbol:!0,"rating__symbol--half":c&&!p,"rating__symbol--full":p})}
          role="presentation"
        >
          ${this.symbol==="star"?h`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  class="empty"
                  fill="currentColor"
                  d="M7.045 2.205a1.067 1.067 0 0 1 1.914 0l1.481 3.003 3.315.48a1.067 1.067 0 0 1 .59 1.82l-2.4 2.338.568 3.302a1.067 1.067 0 0 1-1.546 1.125L8 12.713l-2.965 1.56a1.067 1.067 0 0 1-1.547-1.125l.565-3.302-2.4-2.337a1.067 1.067 0 0 1 .594-1.82l3.314-.48 1.484-3.004Zm.958 1.075L6.696 5.924a1.067 1.067 0 0 1-.801.584l-2.92.424L5.088 8.99a1.067 1.067 0 0 1 .307.944l-.499 2.907 2.61-1.373a1.067 1.067 0 0 1 .993 0l2.61 1.373-.498-2.907a1.067 1.067 0 0 1 .306-.944l2.112-2.06-2.92-.424a1.067 1.067 0 0 1-.801-.584L8 3.28h.003Z"
                />
                <path
                  class="filled"
                  fill="currentColor"
                  d="M7.045 2.205a1.067 1.067 0 0 1 1.914 0l1.481 3.003 3.315.48a1.067 1.067 0 0 1 .59 1.82l-2.4 2.338.568 3.302a1.067 1.067 0 0 1-1.546 1.125L8 12.713l-2.965 1.56a1.067 1.067 0 0 1-1.547-1.125l.565-3.302-2.4-2.337a1.067 1.067 0 0 1 .594-1.82l3.314-.48 1.484-3.004Z"
                  style="clip-path: inset(0 ${g}% 0 0)"
                />
              </svg>`:h`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  class="empty"
                  fill="currentColor"
                  d="M7.125 2.834a3.542 3.542 0 0 0-4.743.315C.974 4.593.98 6.94 2.394 8.39l5.235 5.37c.216.222.57.222.785 0l5.207-5.339a3.776 3.776 0 0 0-.015-5.24 3.552 3.552 0 0 0-5.113-.012l-.498.51-.504-.518a3.702 3.702 0 0 0-.364-.326l-.002-.001Zm2.428 1.369a2.069 2.069 0 0 1 2.99.013c.856.878.856 2.302.014 3.172l-.002.002-4.535 4.65-4.565-4.683a2.293 2.293 0 0 1-.012-3.173 2.066 2.066 0 0 1 2.985.013l.504.517a1.482 1.482 0 0 0 2.124 0l.497-.511Z"
                />
                <path
                  class="filled"
                  fill="currentColor"
                  d="M7.49 3.163a3.548 3.548 0 0 0-5.109-.015c-1.408 1.445-1.4 3.793.015 5.243l5.232 5.37c.217.222.57.222.786 0l5.207-5.34a3.776 3.776 0 0 0-.015-5.239 3.55 3.55 0 0 0-5.113-.013l-.498.511-.504-.517Z"
                  style="clip-path: inset(0 ${g}% 0 0)"
                />
              </svg>`}
        </span>
      `})}render(){let e=this.hasSlotController.test("label"),r=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!r;return h`
      <div
        part="form-control"
        class=${m({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${m({rating:!0,"rating--disabled":this.disabled,"rating--readonly":this.readonly,"rating--focused":this.isFocused,[`rating--${this.size}`]:!0})}
            id=${this.generatedId}
            role="slider"
            tabindex=${this.readonly||this.disabled?"-1":"0"}
            aria-readonly=${this.readonly?"true":"false"}
            aria-disabled=${this.disabled?"true":"false"}
            aria-valuenow=${this.value}
            aria-valuemin="0"
            aria-valuemax=${this.max}
            aria-label=${o(this.ariaLabel||this.label)}
            aria-labelledby=${o(s?`${this.generatedId}-label`:void 0)}
            aria-describedby=${o(i?`${this.generatedId}-help-text`:void 0)}
            @click=${this.handleClick}
            @keydown=${this.handleKeyDown}
            @mouseenter=${this.handleMouseEnter}
            @mouseleave=${this.handleMouseLeave}
            @mousemove=${this.handleMouseMove}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          >
            ${this.renderItems()}
          </div>

          <input
            class="rating__control"
            id=${`${this.generatedId}-input`}
            type="number"
            name=${this.name}
            .value=${C(this.value.toString())}
            ?disabled=${this.readonly||this.disabled}
            ?required=${this.required}
            min="0"
            max=${this.max}
            step=${this.step}
            tabindex="-1"
            aria-hidden="true"
            form=${o(this.form||void 0)}
            aria-labelledby=${o(s?`${this.generatedId}-label`:void 0)}
            aria-describedby=${o(i?`${this.generatedId}-help-text`:void 0)}
            @invalid=${this.handleInvalid}
          />
        </div>

        ${i?h`
              <slot
                name="help-text"
                id=${`${this.generatedId}-help-text`}
                part="form-control-help-text"
                class="form-control__help-text"
              >
                ${this.helpText}
              </slot>
            `:""}
      </div>
    `}};f(t,"CpsRating"),t.styles=F,l([v(".rating__control")],t.prototype,"input",2),l([v(".rating")],t.prototype,"rating",2),l([d()],t.prototype,"hoverValue",2),l([d()],t.prototype,"isHovering",2),l([d()],t.prototype,"isFocused",2),l([d()],t.prototype,"generatedId",2),l([a()],t.prototype,"label",2),l([a({attribute:"aria-label"})],t.prototype,"ariaLabel",2),l([a({attribute:"help-text"})],t.prototype,"helpText",2),l([a()],t.prototype,"name",2),l([a({type:Number})],t.prototype,"value",2),l([V()],t.prototype,"defaultValue",2),l([a({reflect:!0})],t.prototype,"size",2),l([a({type:Number,hasChanged:(n,y)=>typeof n!="number"||isNaN(n)||n<1||n>10?(console.error("CpsRating Error: Max must be a number between 1 and 10."),!1):n!==y})],t.prototype,"max",2),l([a({type:Number})],t.prototype,"step",2),l([a({reflect:!0})],t.prototype,"symbol",2),l([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2),l([a({type:Boolean,reflect:!0})],t.prototype,"readonly",2),l([a({type:Boolean,reflect:!0})],t.prototype,"required",2),l([a({reflect:!0})],t.prototype,"form",2),l([u("id")],t.prototype,"handleIdChange",1),l([u("value")],t.prototype,"handleValueChange",1),l([u("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1),l([u("readonly",{waitUntilFirstUpdate:!0})],t.prototype,"handleReadonlyChange",1),t=l([$("cps-rating")],t);export{t as a};
