import{a as d}from"./chunk.MHC5WJK3.js";import{b as p}from"./chunk.7PZ6546J.js";import{a as n}from"./chunk.FBB7MPWZ.js";import{a as i,b as a,e as l}from"./chunk.RLLGFEJH.js";import{c as s,e as r}from"./chunk.K3RV6SX6.js";var t=class extends l{constructor(){super(...arguments);this.accordions=[];this.multiple=!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.accordions=this.getAllAccordions()})}getAllAccordions(){return[...this.shadowRoot.querySelector("slot").assignedElements()].filter(o=>o.tagName.toLowerCase()==="cps-accordion")}setActiveAccordion(e){e!==this.activeAccordion&&(this.activeAccordion=e,this.accordions.forEach(o=>o.open=o===this.activeAccordion))}handleClick(e){if(this.multiple)return;let c=e.target.closest("cps-accordion");(c==null?void 0:c.closest("cps-accordion-group"))===this&&c!==null&&this.setActiveAccordion(c)}render(){return p`
      <div
        class=${n({"accordion-group":!0})}
        part="base"
        @click=${this.handleClick}
      >
        <slot></slot>
      </div>
    `}};s(t,"CpsAccordionGroup"),t.styles=d,r([a({reflect:!0,type:Boolean})],t.prototype,"multiple",2),t=r([i("cps-accordion-group")],t);export{t as a};
