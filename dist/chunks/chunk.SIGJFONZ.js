import{a as n}from"./chunk.C2TY6D2R.js";import{a as m}from"./chunk.2XELF4ZT.js";import{a as i}from"./chunk.VBAMGKE2.js";import{a as o,b as l,e as s}from"./chunk.DSDVM4TO.js";import{c as a}from"./chunk.OEWLIEQ2.js";import{c as r,e}from"./chunk.K3RV6SX6.js";var t=class extends s{constructor(){super(...arguments);this.hasSlotController=new m(this,"[default]");this.vertical=!1}render(){return a`
      <div
        part="base"
        class=${i({separator:!0,"separator--vertical":this.vertical,"separator--horizontal":!this.vertical,"separator--has-content":this.hasSlotController.test("[default]")})}
        role="separator"
        aria-orientation=${this.vertical?"vertical":"horizontal"}
      >
        <slot></slot>
      </div>
    `}};r(t,"CpsSeparator"),t.styles=n,e([l({type:Boolean,reflect:!0})],t.prototype,"vertical",2),t=e([o("cps-separator")],t);export{t as a};
