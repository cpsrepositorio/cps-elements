import{a as m}from"./chunk.TQ7TLSRH.js";import{a as f}from"./chunk.2XELF4ZT.js";import{b as o}from"./chunk.7PZ6546J.js";import{a as h}from"./chunk.FBB7MPWZ.js";import{a as i,b as a,d as n,e as d}from"./chunk.FTTF5KQK.js";import{c,e as r}from"./chunk.K3RV6SX6.js";var t=class extends d{constructor(){super(...arguments);this.hasSlotController=new f(this,"[default]","header","footer");this.variant="primary";this.actionable=!1}click(e){e==null||e.preventDefault(),this.actionable&&this.card.click()}focus(e){this.card.focus(e)}blur(){this.card.blur()}render(){let e=this.hasSlotController.test("[default]"),l=this.hasSlotController.test("header"),s=this.hasSlotController.test("footer");return o`
      <div
        part="base"
        class=${h({card:!0,[`card--${this.variant}`]:!0,"card--actionable":this.actionable,"card--has-content":e,"card--has-header":l,"card--has-footer":s})}
        tabindex=${this.actionable?0:void 0}
      >
        ${l?o`<slot name="header" part="header" class="card__header"></slot>`:""}
        <slot part="content" class="card__content"></slot>
        ${s?o`<slot name="footer" part="footer" class="card__footer"></slot>`:""}
      </div>
    `}};c(t,"CpsCard"),t.styles=m,r([n(".card")],t.prototype,"card",2),r([a({reflect:!0})],t.prototype,"variant",2),r([a({type:Boolean,reflect:!0})],t.prototype,"actionable",2),t=r([i("cps-card")],t);export{t as a};
