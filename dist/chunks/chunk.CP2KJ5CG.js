import{a as d}from"./chunk.4DQU6DYL.js";import{a as l}from"./chunk.SYMZGPTI.js";import{a as n}from"./chunk.4TY62YMM.js";import{a as r,b as c,c as s,e as h}from"./chunk.L6B5EOPQ.js";import{c as o}from"./chunk.FVWYSG5E.js";import{c as i,e as t}from"./chunk.K3RV6SX6.js";var e=class extends h{constructor(){super(...arguments);this.current=!1;this.selected=!1;this.hasHover=!1;this.type="normal";this.value="";this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.type==="checkbox"?"menuitemcheckbox":"option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){let a=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=a;return}a!==this.cachedTextLabel&&(this.cachedTextLabel=a,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.type==="checkbox"&&this.setAttribute("aria-checked",this.selected?"true":"false"),this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var a;return((a=this.textContent)!=null?a:"").trim()}render(){return o`
      <div
        part="base"
        class=${n({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--checkable":this.type==="checkbox","option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <span part="check" class="option__check">
          <cps-icon part="checked-icon" class="option__checked" library="system" name="checkmark"></cps-icon>
          <cps-icon part="unchecked-icon" class="option__unchecked" library="system" name="unchecked"></cps-icon>
        </span>

        <slot name="prefix" part="prefix" class="option__prefix"></slot>

        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};i(e,"CpsOption"),e.styles=d,t([s()],e.prototype,"current",2),t([s()],e.prototype,"selected",2),t([s()],e.prototype,"hasHover",2),t([s()],e.prototype,"type",2),t([c({reflect:!0})],e.prototype,"value",2),t([c({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([l("disabled")],e.prototype,"handleDisabledChange",1),t([l("selected")],e.prototype,"handleSelectedChange",1),t([l("value")],e.prototype,"handleValueChange",1),e=t([r("cps-option")],e);export{e as a};
