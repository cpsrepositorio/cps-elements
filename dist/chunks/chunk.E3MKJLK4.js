import{a as u}from"./chunk.SDTE3PQY.js";import{a as h}from"./chunk.2XELF4ZT.js";import{a as s,b as i}from"./chunk.7PZ6546J.js";import{a as c}from"./chunk.FBB7MPWZ.js";import{a as o,b as r,e as l}from"./chunk.5NKACAGP.js";import{c as n,e as a}from"./chunk.K3RV6SX6.js";var e=class extends l{constructor(){super(...arguments);this.hasSlotController=new h(this,"[default]");this.variant="neutral";this.icon=!1;this.square=!1;this.pulse=!1}hasSingleCharacter(){return!this.icon&&[...this.childNodes].filter(t=>t.nodeType===t.TEXT_NODE).some(t=>t.textContent.trim().length===1)}hasIcon(){return this.icon||[...this.childNodes].filter(t=>t.nodeType===t.ELEMENT_NODE).some(t=>t.tagName.toLowerCase()==="cps-icon")}render(){let t=this.icon?s`span`:s`slot`;return i`
      <${t}
        part="base"
        class=${c({badge:!0,"badge--neutral":this.variant==="neutral","badge--informative":this.variant==="informative","badge--warning":this.variant==="warning","badge--critical":this.variant==="critical","badge--success":this.variant==="success","badge--square":this.square,"badge--pulse":this.pulse,"badge--has-icon":this.hasIcon(),"badge--has-content":this.hasSlotController.test("[default]"),"badge--has-single-character":this.hasSingleCharacter()})}
        role="status"
      >
        ${this.icon?i` <cps-icon library="system" .name=${`status-${this.variant}`}></cps-icon> `:""}
      </${t}>
    `}};n(e,"CpsBadge"),e.styles=u,a([r({reflect:!0})],e.prototype,"variant",2),a([r({type:Boolean,reflect:!0})],e.prototype,"icon",2),a([r({type:Boolean,reflect:!0})],e.prototype,"square",2),a([r({type:Boolean,reflect:!0})],e.prototype,"pulse",2),e=a([o("cps-badge")],e);export{e as a};
