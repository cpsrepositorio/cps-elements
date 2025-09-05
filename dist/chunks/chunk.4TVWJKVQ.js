import{a as f}from"./chunk.GBYJ6QHV.js";import{a as g,b as d,c as p,d as m,e as b}from"./chunk.FTTF5KQK.js";import{a as h}from"./chunk.D7J5WK6X.js";import{c as i,e as l}from"./chunk.K3RV6SX6.js";var s=class extends b{constructor(){super(...arguments);this.disableRole=!1;this.label=""}handleFocus(e){let t=n(e.target);t==null||t.classList.add("cps-button-group__button--focus")}handleBlur(e){let t=n(e.target);t==null||t.classList.remove("cps-button-group__button--focus")}handleMouseOver(e){let t=n(e.target);t==null||t.classList.add("cps-button-group__button--hover")}handleMouseOut(e){let t=n(e.target);t==null||t.classList.remove("cps-button-group__button--hover")}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{var c;let a=e.indexOf(t),o=n(t);o!==null&&(o.classList.add("cps-button-group__button"),o.classList.toggle("cps-button-group__button--first",a===0),o.classList.toggle("cps-button-group__button--inner",a>0&&a<e.length-1),o.classList.toggle("cps-button-group__button--last",a===e.length-1),this.hasAttribute("size")&&o.setAttribute("size",(c=this.getAttribute("size"))!=null?c:"medium"))})}render(){return h`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};i(s,"CpsButtonGroup"),s.styles=f,l([m("slot")],s.prototype,"defaultSlot",2),l([p()],s.prototype,"disableRole",2),l([d()],s.prototype,"label",2),s=l([g("cps-button-group")],s);function n(r){var e;let u="cps-button, cps-dropdown, cps-toggle-button";return(e=r.closest(u))!=null?e:r.querySelector(u)}i(n,"findButton");export{s as a};
