import{a as m}from"./chunk.MMNEVNWW.js";import{a as c}from"./chunk.SYMZGPTI.js";import{b as d}from"./chunk.2XELF4ZT.js";import{a as n}from"./chunk.FBB7MPWZ.js";import{a as r,b as a,d as s,e as o}from"./chunk.MYQ7XARW.js";import{a as h}from"./chunk.D7J5WK6X.js";import{c as l,e as t}from"./chunk.K3RV6SX6.js";var e=class extends o{constructor(){super(...arguments);this.type="normal";this.checked=!1;this.value="";this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}handleHostClick(i){this.disabled&&(i.preventDefault(),i.stopImmediatePropagation())}handleDefaultSlotChange(){let i=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=i;return}i!==this.cachedTextLabel&&(this.cachedTextLabel=i,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return d(this.defaultSlot)}render(){return h`
      <div
        part="base"
        class=${n({"menu-item":!0,"menu-item--checkable":this.type==="checkbox","menu-item--checked":this.checked,"menu-item--disabled":this.disabled})}
      >
        <span part="check" class="menu-item__check">
          <cps-icon part="checked-icon" class="menu-item__checked" library="system" name="checkmark"></cps-icon>
          <cps-icon part="unchecked-icon" class="menu-item__unchecked" library="system" name="unchecked"></cps-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>
      </div>
    `}};l(e,"CpsMenuItem"),e.styles=m,t([s("slot:not([name])")],e.prototype,"defaultSlot",2),t([s(".menu-item")],e.prototype,"menuItem",2),t([a()],e.prototype,"type",2),t([a({type:Boolean,reflect:!0})],e.prototype,"checked",2),t([a()],e.prototype,"value",2),t([a({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([c("checked")],e.prototype,"handleCheckedChange",1),t([c("disabled")],e.prototype,"handleDisabledChange",1),t([c("type")],e.prototype,"handleTypeChange",1),e=t([r("cps-menu-item")],e);export{e as a};
