import{a as b}from"./chunk.ENC7BXBG.js";import{a as n}from"./chunk.3GCKH32X.js";import{b as c}from"./chunk.GYLWOPAN.js";import{a as f}from"./chunk.IRAMM6YV.js";import{a as h}from"./chunk.SYMZGPTI.js";import{a}from"./chunk.YW7PM72I.js";import{a as o,b as s,c as u,d as r,e as d}from"./chunk.FVZAJBTT.js";import{c as l,e}from"./chunk.K3RV6SX6.js";var t=class extends d{constructor(){super(...arguments);this.hasSlotController=new n(this,"[default]","prefix","suffix");this.hasFocus=!1;this.checked=!1;this.disabled=!1;this.size="medium";this.rounded="default"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleClick(i){if(this.disabled){i.preventDefault(),i.stopPropagation();return}this.classList.contains("cps-button-group__button--radio")?this.checked=!0:this.checked=!this.checked}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}render(){return c`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${a({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--circle":this.rounded==="full","button--corner":this.rounded==="corner","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${f(this.value)}
          tabindex="${this.disabled?"-1":"0"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="content" class="button__content"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};l(t,"CpsToggleButton"),t.styles=b,e([r(".button")],t.prototype,"input",2),e([r(".hidden-input")],t.prototype,"hiddenInput",2),e([u()],t.prototype,"hasFocus",2),e([s({type:Boolean,reflect:!0})],t.prototype,"checked",2),e([s()],t.prototype,"value",2),e([s({type:Boolean,reflect:!0})],t.prototype,"disabled",2),e([s({reflect:!0})],t.prototype,"size",2),e([s({reflect:!0})],t.prototype,"rounded",2),e([h("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1),t=e([o("cps-toggle-button")],t);export{t as a};
