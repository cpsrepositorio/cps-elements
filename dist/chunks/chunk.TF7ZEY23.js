import{a as b}from"./chunk.PXFLLPV5.js";import{a as g,b as p,c as d,d as m,e as h}from"./chunk.FVZAJBTT.js";import{a as i}from"./chunk.DRZBK76U.js";import{c,e as l}from"./chunk.K3RV6SX6.js";var s=class extends h{constructor(){super(...arguments);this.disableRole=!1;this.label=""}handleFocus(e){let t=n(e.target);t==null||t.classList.add("cps-button-group__button--focus")}handleBlur(e){let t=n(e.target);t==null||t.classList.remove("cps-button-group__button--focus")}handleMouseOver(e){let t=n(e.target);t==null||t.classList.add("cps-button-group__button--hover")}handleMouseOut(e){let t=n(e.target);t==null||t.classList.remove("cps-button-group__button--hover")}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let a=e.indexOf(t),o=n(t);o!==null&&(o.classList.add("cps-button-group__button"),o.classList.toggle("cps-button-group__button--first",a===0),o.classList.toggle("cps-button-group__button--inner",a>0&&a<e.length-1),o.classList.toggle("cps-button-group__button--last",a===e.length-1))})}render(){return i`
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
    `}};c(s,"CpsButtonGroup"),s.styles=b,l([m("slot")],s.prototype,"defaultSlot",2),l([d()],s.prototype,"disableRole",2),l([p()],s.prototype,"label",2),s=l([g("cps-button-group")],s);function n(r){var e;let u="cps-button, cps-toggle-button";return(e=r.closest(u))!=null?e:r.querySelector(u)}c(n,"findButton");export{s as a};
