import{a as d}from"./chunk.DEWWTBAH.js";import{a}from"./chunk.SYMZGPTI.js";import{a as c}from"./chunk.FBB7MPWZ.js";import{a as o,b as r,e as i}from"./chunk.AKGJQGUO.js";import{a as s}from"./chunk.D7J5WK6X.js";import{c as l,e}from"./chunk.K3RV6SX6.js";var p=0,t=class extends i{constructor(){super(...arguments);this.attrId=++p;this.componentId=`cps-tab-panel-${this.attrId}`;this.name="";this.selected=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleSelectedChanged(){this.setAttribute("aria-hidden",this.selected?"false":"true")}render(){return s`
      <slot
        part="base"
        class=${c({"tab-panel":!0,"tab-panel--selected":this.selected})}
      ></slot>
    `}};l(t,"CpsTabPanel"),t.styles=d,e([r({reflect:!0})],t.prototype,"name",2),e([r({type:Boolean,reflect:!0})],t.prototype,"selected",2),e([a("selected")],t.prototype,"handleSelectedChanged",1),t=e([o("cps-tab-panel")],t);export{t as a};
