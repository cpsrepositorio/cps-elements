import{a as h}from"./chunk.D3O6IHSL.js";import{a as g,b as p,c as d,d as m,e as b}from"./chunk.SNJ6N5YQ.js";import{a as i}from"./chunk.7AWEOCKJ.js";import{c,d as l}from"./chunk.V5GSCVDY.js";var s=class extends b{constructor(){super(...arguments);this.disableRole=!1;this.label=""}handleFocus(e){let t=a(e.target);t==null||t.classList.add("cps-button-group__button--focus")}handleBlur(e){let t=a(e.target);t==null||t.classList.remove("cps-button-group__button--focus")}handleMouseOver(e){let t=a(e.target);t==null||t.classList.add("cps-button-group__button--hover")}handleMouseOut(e){let t=a(e.target);t==null||t.classList.remove("cps-button-group__button--hover")}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),o=a(t);o!==null&&(o.classList.add("cps-button-group__button"),o.classList.toggle("cps-button-group__button--first",n===0),o.classList.toggle("cps-button-group__button--inner",n>0&&n<e.length-1),o.classList.toggle("cps-button-group__button--last",n===e.length-1),o.classList.toggle("cps-button-group__button--radio",o.tagName.toLowerCase()==="cps-radio-button"))})}render(){return i`
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
    `}};c(s,"CpsButtonGroup"),s.styles=h,l([m("slot")],s.prototype,"defaultSlot",2),l([d()],s.prototype,"disableRole",2),l([p()],s.prototype,"label",2),s=l([g("cps-button-group")],s);function a(r){var e;let u="cps-button, cps-radio-button";return(e=r.closest(u))!=null?e:r.querySelector(u)}c(a,"findButton");export{s as a};
