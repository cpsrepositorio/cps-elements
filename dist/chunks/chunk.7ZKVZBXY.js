import{a as d}from"./chunk.U43ASDHO.js";import{a,d as u,e as c}from"./chunk.JOTZQUUG.js";import{a as o}from"./chunk.XKNP6CD6.js";import{c as m,e as l}from"./chunk.K3RV6SX6.js";var r=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){let s=e.target.closest("cps-menu-item");!s||s.disabled||s.inert||(s.type==="checkbox"&&(s.checked=!s.checked),this.emit("cps-select",{detail:{item:s}}))}handleKeyDown(e){if(e.key==="Enter"){let t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){let t=this.getAllItems().filter(s=>!s.disabled);if(t.length>1){e.preventDefault();let s=this.getCurrentItem(),i=s?t.indexOf(s):0,n=!1;for(;!n;)e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0?i=t.length-1:i>t.length-1&&(i=0),t[i].disabled||(n=!0);this.setCurrentItem(t[i]),t[i].focus()}}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="cps-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e&&!e.disabled?"0":"-1")})}render(){return o`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};m(r,"CpsMenu"),r.styles=d,l([u("slot")],r.prototype,"defaultSlot",2),r=l([a("cps-menu")],r);export{r as a};
