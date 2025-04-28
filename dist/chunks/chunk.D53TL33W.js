import{a as b}from"./chunk.E6WJ3UK2.js";import{a}from"./chunk.SYMZGPTI.js";import{b as p}from"./chunk.KBGGAJDF.js";import{a as m}from"./chunk.2XELF4ZT.js";import{a as d}from"./chunk.FBB7MPWZ.js";import{a as r,b as l,d as c,e as n}from"./chunk.T2C674IH.js";import{a as s}from"./chunk.D7J5WK6X.js";import{c as o,e}from"./chunk.K3RV6SX6.js";var h=0,t=class extends n{constructor(){super(...arguments);this.hasSlotController=new m(this,"[default]","prefix");this.localize=new p(this);this.attrId=++h;this.componentId=`cps-tab-item-${this.attrId}`;this.panel="";this.selected=!1;this.placement="top";this.closable=!1;this.fluid=!1;this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(i){i.stopPropagation(),this.emit("cps-close")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(i){this.tab.focus(i)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,s`
      <div
        part="base"
        class=${d({"tab-item":!0,"tab-item--fluid":this.fluid,"tab-item--selected":this.selected,"tab-item--closable":this.closable,"tab-item--disabled":this.disabled,"tab-item--top":this.placement==="top","tab-item--bottom":this.placement==="bottom","tab-item--start":this.placement==="start","tab-item--end":this.placement==="end","tab-item--rtl":this.localize.dir()==="rtl","tab-item--has-label":this.hasSlotController.test("[default]"),"tab-item--has-prefix":this.hasSlotController.test("prefix")})}
        tabindex=${this.selected||this.disabled?"-1":"0"}
      >
        <slot name="prefix" part="prefix" class="tab-item__prefix"></slot>

        <slot part="content" class="tab-item__content"></slot>

        ${this.closable?s`
              <cps-icon-button
                part="close-button"
                exportparts="base:close-button__base,icon:close-button__icon"
                class="tab-item__close-button"
                name="dismiss"
                library="system"
                size="small"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></cps-icon-button>
            `:""}
      </div>
    `}};o(t,"CpsTabItem"),t.styles=b,e([c(".tab-item")],t.prototype,"tab",2),e([l({reflect:!0})],t.prototype,"panel",2),e([l({type:Boolean,reflect:!0})],t.prototype,"selected",2),e([l()],t.prototype,"placement",2),e([l({type:Boolean})],t.prototype,"closable",2),e([l({type:Boolean,reflect:!0})],t.prototype,"fluid",2),e([l({type:Boolean,reflect:!0})],t.prototype,"disabled",2),e([a("selected")],t.prototype,"handleSelectedChange",1),e([a("disabled")],t.prototype,"handleDisabledChange",1),t=e([r("cps-tab-item")],t);export{t as a};
