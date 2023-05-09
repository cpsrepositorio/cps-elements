import{a as m}from"./chunk.RXM2S4YG.js";import{a as c}from"./chunk.Z2TLLZAF.js";import{a as s,b as i}from"./chunk.6IWKE62F.js";import{a as o}from"./chunk.V2DB3NBA.js";import{a as l,b as r,e as h}from"./chunk.63GKG2X6.js";import{c as n,d as a}from"./chunk.V5GSCVDY.js";var e=class extends h{constructor(){super(...arguments);this.hasSlotController=new c(this,"[default]");this.variant="neutral";this.icon=!1;this.square=!1;this.pulse=!1}hasSingleCharacter(){return!this.icon&&[...this.childNodes].filter(t=>t.nodeType===t.TEXT_NODE).some(t=>t.textContent.trim().length===1)}hasIcon(){return this.icon||[...this.childNodes].filter(t=>t.nodeType===t.ELEMENT_NODE).some(t=>t.tagName.toLowerCase()==="cps-icon")}render(){let t=this.icon?s`span`:s`slot`;return i`
      <${t}
        part="base"
        class=${o({badge:!0,"badge--neutral":this.variant==="neutral","badge--informative":this.variant==="informative","badge--warning":this.variant==="warning","badge--critical":this.variant==="critical","badge--success":this.variant==="success","badge--square":this.square,"badge--pulse":this.pulse,"badge--has-icon":this.hasIcon(),"badge--has-content":this.hasSlotController.test("[default]"),"badge--has-single-character":this.hasSingleCharacter()})}
        role="status"
      >
        ${this.icon?i` <cps-icon library="system" .name=${`${this.variant}-badge`}></cps-icon> `:""}
      </${t}>
    `}};n(e,"CpsBadge"),e.styles=m,a([r({reflect:!0})],e.prototype,"variant",2),a([r({type:Boolean,reflect:!0})],e.prototype,"icon",2),a([r({type:Boolean,reflect:!0})],e.prototype,"square",2),a([r({type:Boolean,reflect:!0})],e.prototype,"pulse",2),e=a([l("cps-badge")],e);export{e as a};
