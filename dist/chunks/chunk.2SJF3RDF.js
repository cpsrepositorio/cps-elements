import{a as I}from"./chunk.2TMYSLIE.js";import{a as w}from"./chunk.FQ7ORM66.js";import{a as M}from"./chunk.AL7LJRBA.js";import{b as V}from"./chunk.5DUF7374.js";import{a as g}from"./chunk.TBLM4WXU.js";import{a as d}from"./chunk.UV5W4X7Q.js";import{a as u}from"./chunk.SYMZGPTI.js";import{a as x}from"./chunk.2XELF4ZT.js";import{a as b}from"./chunk.MESFKACX.js";import{a as y,b as s,c as m,d as c,e as $}from"./chunk.HETV6G5Q.js";import{e as p}from"./chunk.QJBMNVJB.js";import{c as h,e as i}from"./chunk.K3RV6SX6.js";var e=class extends ${constructor(){super(...arguments);this.formControlController=new V(this,{value:t=>t.value>0?t.value.toString():void 0,defaultValue:t=>t.defaultValue,setValue:(t,r)=>t.value=r});this.hasSlotController=new x(this,"help-text","label");this.generatedId="";this.isFocused=!1;this.isTooltipOpen=!1;this.hasInitialValueBeenProcessed=!1;this.isDragging=!1;this.tooltipTimeoutId=null;this.label="";this.helpText="";this.name="";this.defaultValue=0;this.size="medium";this.min=0;this.max=100;this.step=1;this.disabled=!1;this.readonly=!1;this.required=!1;this.form="";this.noTooltip=!1;this.handleLabelClick=h(t=>{t.preventDefault(),this.focus()},"handleLabelClick");this.handlePointerDown=h(t=>{this.readonly||this.disabled||(this.clearTooltipTimeout(),this.isDragging=!0,this.isTooltipOpen=!0,t.target.setPointerCapture(t.pointerId),addEventListener("pointermove",this.handlePointerMove),addEventListener("pointerup",this.handlePointerUp),this.focus(),this.requestUpdate())},"handlePointerDown");this.handlePointerMove=h(t=>{if(!this.isDragging)return;let{left:r,width:l}=this.track.getBoundingClientRect(),a=(t.clientX-r)/l;a=Math.max(0,Math.min(1,a));let o=this.snapToStep(this.valueFromPercent(a));o!==this.value&&this.handleInteraction(o,!1)},"handlePointerMove");this.handlePointerUp=h(()=>{this.isDragging=!1,removeEventListener("pointermove",this.handlePointerMove),removeEventListener("pointerup",this.handlePointerUp),this.noTooltip||(this.clearTooltipTimeout(),this.isTooltipOpen=!0,this.scheduleTooltipHide()),this.requestUpdate()},"handlePointerUp")}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.generatedId=this.id?this.id:g(),typeof this.value!="number"&&(this.value=this.snapToStep(this.getMidpoint()))}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback()}handleIdChange(){this.generatedId=this.id?this.id:g()}async handleValueChange(){this.normalizeValue(),await this.handleValueChangeEffects()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleReadonlyChange(){this.formControlController.setValidity(this.readonly)}handleMinChange(){this.min>=this.max&&(console.error("CpsRange Error: Min must be less than max."),this.min=0,this.max=100),this.clampCurrentValue()}handleMaxChange(){this.max<=this.min&&(console.error("CpsRange Error: Max must be greater than min."),this.min=0,this.max=100),this.clampCurrentValue()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.range&&this.range.focus(t)}blur(){this.range&&this.range.blur(),this.isTooltipOpen=!1,this.clearTooltipTimeout()}normalizeValue(){typeof this.value!="number"||Number.isNaN(this.value)?this.value=this.snapToStep(this.getMidpoint()):this.value=this.clampValue(this.value)}async handleValueChangeEffects(){if(await this.updateComplete,this.formControlController.updateValidity(),this.emit("cps-change"),!this.noTooltip){if(!this.hasInitialValueBeenProcessed){this.hasInitialValueBeenProcessed=!0;return}this.clearTooltipTimeout(),this.isTooltipOpen=!0,this.isDragging||this.scheduleTooltipHide(),this.requestUpdate()}}handleFocus(){this.readonly||this.disabled||(this.isFocused=!0,this.emit("cps-focus"))}handleBlur(){this.noTooltip||(this.clearTooltipTimeout(),this.isTooltipOpen=!1,this.requestUpdate()),this.isFocused=!1,this.emit("cps-blur")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}getValueFromMouse(t){let{left:r,width:l}=t.currentTarget.getBoundingClientRect(),a=(t.clientX-r)/l;return this.clampValue(this.valueFromPercent(a))}getEffectiveStep(){let t=Number(this.step);return t>0?t:1}clampValue(t){return Math.min(this.max,Math.max(this.min,t))}getMidpoint(){return(this.min+this.max)/2}valueFromPercent(t){return this.min+t*(this.max-this.min)}percentFromValue(t){return(t-this.min)/(this.max-this.min)*100}snapToStep(t){let r=this.min,l=this.getEffectiveStep(),a=(l.toString().split(".")[1]||"").length,o=Math.round((t-r)/l)*l+r;return Number(this.clampValue(o).toFixed(a))}clampCurrentValue(){typeof this.value=="number"&&(this.value<this.min?this.value=this.min:this.value>this.max&&(this.value=this.max))}clearTooltipTimeout(){this.tooltipTimeoutId!==null&&(clearTimeout(this.tooltipTimeoutId),this.tooltipTimeoutId=null)}scheduleTooltipHide(){this.clearTooltipTimeout(),this.tooltipTimeoutId=setTimeout(()=>{this.isDragging||(this.isTooltipOpen=!1,this.tooltipTimeoutId=null,this.requestUpdate())},1e3)}handleInteraction(t,r=!0){this.value=t,!this.noTooltip&&(this.isTooltipOpen=!0,r&&this.scheduleTooltipHide(),this.requestUpdate())}handleKeyDown(t){if(this.readonly||this.disabled)return;let r=t.key,l=["Backspace","Delete","Home"].includes(r),a=r==="End",o=["ArrowLeft","ArrowDown","ArrowRight","ArrowUp"].includes(r);if(!l&&!a&&!o)return;t.preventDefault(),this.clearTooltipTimeout(),this.isTooltipOpen=!0;let f=h(n=>{if(this.noTooltip){this.value=n;return}n!==this.value&&this.handleInteraction(n),this.scheduleTooltipHide()},"applyValue");if(l){f(this.min);return}if(a){f(this.max);return}if(o){let n=this.getEffectiveStep(),T=n;if(t.shiftKey){let C=this.max-this.min,F=Math.max(1,Math.round(C*.1/n));T=n*F}let E=["ArrowLeft","ArrowDown"].includes(r)?-1:1,S=this.value+E*T,v=this.snapToStep(S);if(this.noTooltip){v!==this.value&&(this.value=v);return}f(v)}}handleClick(t){if(this.readonly||this.disabled)return;if(this.clearTooltipTimeout(),this.noTooltip){let l=this.snapToStep(this.getValueFromMouse(t));this.value=l;return}let r=this.snapToStep(this.getValueFromMouse(t));this.handleInteraction(r)}renderSlider(){let t=this.percentFromValue(this.value),r=p`<div
      part="thumb"
      class="range__thumb"
      style="left: calc((100% - var(--cps-range-height)) * ${t} / 100 + var(--cps-range-height) / 2)"
      @pointerdown=${this.handlePointerDown}
    ></div>`;if(!this.noTooltip){let l=navigator.language||navigator.userLanguage,a=this.value.toLocaleString(l,{maximumFractionDigits:10});r=p`<cps-tooltip .open=${this.isTooltipOpen} trigger="manual" placement="top" content="${a}">
        ${r}
      </cps-tooltip>`}return p`
      <div part="track" class="range__track">
        <div part="fill" class="range__fill" style="width: ${t}%"></div>
        ${r}
      </div>
    `}render(){let t=this.hasSlotController.test("help-text"),r=this.hasSlotController.test("label"),l=this.helpText?!0:!!t,a=this.label?!0:!!r;return p`
      <div
        part="form-control"
        class=${b({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":a,"form-control--has-help-text":l})}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${a?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${b({range:!0,"range--disabled":this.disabled,"range--readonly":this.readonly,"range--focused":this.isFocused,[`range--${this.size}`]:!0})}
            id=${this.generatedId}
            role="slider"
            tabindex=${this.readonly||this.disabled?"-1":"0"}
            aria-readonly=${this.readonly?"true":"false"}
            aria-disabled=${this.disabled?"true":"false"}
            aria-valuenow=${this.value}
            aria-valuemin="${this.min}"
            aria-valuemax=${this.max}
            aria-label=${d(this.ariaLabel||this.label)}
            aria-labelledby=${d(a?`${this.generatedId}-label`:void 0)}
            aria-describedby=${d(l?`${this.generatedId}-help-text`:void 0)}
            @click=${this.handleClick}
            @keydown=${this.handleKeyDown}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          >
            ${this.renderSlider()}
          </div>

          <input
            class="range__control"
            id=${`${this.generatedId}-input`}
            type="number"
            name=${this.name}
            .value=${w(this.value.toString())}
            ?disabled=${this.readonly||this.disabled}
            ?required=${this.required}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            tabindex="-1"
            aria-hidden="true"
            form=${d(this.form||void 0)}
            aria-labelledby=${d(a?`${this.generatedId}-label`:void 0)}
            aria-describedby=${d(l?`${this.generatedId}-help-text`:void 0)}
            @invalid=${this.handleInvalid}
          />
        </div>

        ${l?p`
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
    `}};h(e,"CpsRange"),e.styles=I,i([c(".range__control")],e.prototype,"input",2),i([c(".range")],e.prototype,"range",2),i([c(".range__track")],e.prototype,"track",2),i([m()],e.prototype,"generatedId",2),i([m()],e.prototype,"isFocused",2),i([m()],e.prototype,"isTooltipOpen",2),i([s()],e.prototype,"label",2),i([s({attribute:"aria-label"})],e.prototype,"ariaLabel",2),i([s({attribute:"help-text"})],e.prototype,"helpText",2),i([s()],e.prototype,"name",2),i([s({type:Number})],e.prototype,"value",2),i([M()],e.prototype,"defaultValue",2),i([s({reflect:!0})],e.prototype,"size",2),i([s({type:Number})],e.prototype,"min",2),i([s({type:Number})],e.prototype,"max",2),i([s({type:Number})],e.prototype,"step",2),i([s({type:Boolean,reflect:!0})],e.prototype,"disabled",2),i([s({type:Boolean,reflect:!0})],e.prototype,"readonly",2),i([s({type:Boolean,reflect:!0})],e.prototype,"required",2),i([s({reflect:!0})],e.prototype,"form",2),i([s({type:Boolean,attribute:"no-tooltip",reflect:!0})],e.prototype,"noTooltip",2),i([u("id")],e.prototype,"handleIdChange",1),i([u("value")],e.prototype,"handleValueChange",1),i([u("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1),i([u("readonly",{waitUntilFirstUpdate:!0})],e.prototype,"handleReadonlyChange",1),i([u("min")],e.prototype,"handleMinChange",1),i([u("max")],e.prototype,"handleMaxChange",1),e=i([y("cps-range")],e);export{e as a};
