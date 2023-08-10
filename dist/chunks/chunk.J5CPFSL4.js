import{a as f}from"./chunk.OHY6USXA.js";import{a as m}from"./chunk.UYGW3XOW.js";import{a as b}from"./chunk.TBLM4WXU.js";import{a as c}from"./chunk.2XELF4ZT.js";import{a as u}from"./chunk.E74MSAJI.js";import{a as s}from"./chunk.SYMZGPTI.js";import{a as d}from"./chunk.MIZ6RN32.js";import{a as n,b as i,c as l,e as o}from"./chunk.JOTZQUUG.js";import{a}from"./chunk.XKNP6CD6.js";import{c as h,e as t}from"./chunk.K3RV6SX6.js";var e=class extends o{constructor(){super(...arguments);this.hasSlotController=new c(this);this.hasFocus=!1;this.generatedId="";this.title="";this.id="";this.name="";this.label="";this.size="medium";this.disabled=!1;this.checked=!1}handleIdChange(){this.generatedId=b(this.id)}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.setInitialAttributes(),this.addEventListeners()}disconnectedCallback(){this.removeEventListeners()}addEventListeners(){this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}removeEventListeners(){this.removeEventListener("blur",this.handleBlur),this.removeEventListener("click",this.handleClick),this.removeEventListener("focus",this.handleFocus)}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){let p=this.hasSlotController.test("[default]"),r=this.label?!0:!!p;return a`
      <label
        part="base"
        class=${d({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large","radio--has-label":r})}
      >
        <input
          id=${this.generatedId}
          class="radio__input"
          type="radio"
          title=${this.title}
          name=${this.name}
          value=${u(this.value)}
          .checked=${m(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span id=${`${this.generatedId}-control`} part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?a` <span part="checked-handle" class="radio__checked-handle"></span> `:""}
        </span>

        <label
          id=${`${this.generatedId}-label`}
          part="label"
          class="radio__label"
          for=${this.generatedId}
          aria-hidden=${r?"false":"true"}
        >
          <slot>${this.label}</slot>
        </label>
      </span>
    `}};h(e,"CpsRadio"),e.styles=f,t([l()],e.prototype,"hasFocus",2),t([l()],e.prototype,"generatedId",2),t([i()],e.prototype,"title",2),t([i()],e.prototype,"id",2),t([i()],e.prototype,"value",2),t([i()],e.prototype,"name",2),t([i()],e.prototype,"label",2),t([i({reflect:!0})],e.prototype,"size",2),t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([i({type:Boolean,reflect:!0})],e.prototype,"checked",2),t([s("id")],e.prototype,"handleIdChange",1),t([s("checked")],e.prototype,"handleCheckedChange",1),t([s("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1),e=t([n("cps-radio")],e);export{e as a};
