import{a as m}from"./chunk.RSOW25MK.js";import{b as n}from"./chunk.2XELF4ZT.js";import{a as l}from"./chunk.SYMZGPTI.js";import{a as h}from"./chunk.MIZ6RN32.js";import{a as o,b as i,d as s,e as d}from"./chunk.JOTZQUUG.js";import{a as r}from"./chunk.XKNP6CD6.js";import{c,e as t}from"./chunk.K3RV6SX6.js";var e=class extends d{constructor(){super(...arguments);this.type="normal";this.checked=!1;this.value="";this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}handleHostClick(a){this.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}handleDefaultSlotChange(){let a=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=a;return}a!==this.cachedTextLabel&&(this.cachedTextLabel=a,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return n(this.defaultSlot)}render(){return r`
      <div
        part="base"
        class=${h({"menu-item":!0,"menu-item--checkable":this.type==="checkbox","menu-item--checked":this.checked,"menu-item--disabled":this.disabled})}
      >
        <span part="check" class="menu-item__check">
          <cps-icon name="checkmark" library="system" aria-hidden="true"></cps-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>
      </div>
    `}};c(e,"CpsMenuItem"),e.styles=m,t([s("slot:not([name])")],e.prototype,"defaultSlot",2),t([s(".menu-item")],e.prototype,"menuItem",2),t([i()],e.prototype,"type",2),t([i({type:Boolean,reflect:!0})],e.prototype,"checked",2),t([i()],e.prototype,"value",2),t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([l("checked")],e.prototype,"handleCheckedChange",1),t([l("disabled")],e.prototype,"handleDisabledChange",1),t([l("type")],e.prototype,"handleTypeChange",1),e=t([o("cps-menu-item")],e);export{e as a};
