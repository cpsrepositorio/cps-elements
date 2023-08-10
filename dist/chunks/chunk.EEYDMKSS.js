import{a as n}from"./chunk.JQGSCVB7.js";import{a as i}from"./chunk.2XELF4ZT.js";import{a as l}from"./chunk.MIZ6RN32.js";import{a,b as s,e as m}from"./chunk.JOTZQUUG.js";import{a as o}from"./chunk.XKNP6CD6.js";import{c as r,e}from"./chunk.K3RV6SX6.js";var t=class extends m{constructor(){super(...arguments);this.hasSlotController=new i(this,"[default]");this.vertical=!1}render(){return o`
      <div
        part="base"
        class=${l({separator:!0,"separator--vertical":this.vertical,"separator--horizontal":!this.vertical,"separator--has-content":this.hasSlotController.test("[default]")})}
        role="separator"
        aria-orientation=${this.vertical?"vertical":"horizontal"}
      >
        <slot></slot>
      </div>
    `}};r(t,"CpsSeparator"),t.styles=n,e([s({type:Boolean,reflect:!0})],t.prototype,"vertical",2),t=e([a("cps-separator")],t);export{t as a};
