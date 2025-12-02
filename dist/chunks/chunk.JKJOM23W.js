import{a as h}from"./chunk.OR6AV4HS.js";import{a as f}from"./chunk.2XELF4ZT.js";import{b as a}from"./chunk.HRWN72OY.js";import{a as u}from"./chunk.MESFKACX.js";import{a as c,b as o,d as i,e as d}from"./chunk.NFRCMEAX.js";import{c as n,e as r}from"./chunk.K3RV6SX6.js";var t=class extends d{constructor(){super(...arguments);this.hasSlotController=new f(this,"[default]","header","footer");this.elevation=void 0;this.rounded="full";this.variant="primary";this.actionable=!1}click(e){e==null||e.preventDefault(),this.actionable&&this.card.click()}focus(e){this.card.focus(e)}blur(){this.card.blur()}render(){let e=this.hasSlotController.test("[default]"),l=this.hasSlotController.test("header"),s=this.hasSlotController.test("footer");return a`
      <div
        part="base"
        class=${u({card:!0,[`card--${this.variant}`]:!0,[`card--rounded-${this.rounded}`]:!0,[`card--elevation-${this.elevation}`]:this.elevation!==void 0,"card--actionable":this.actionable,"card--has-content":e,"card--has-header":l,"card--has-footer":s})}
        tabindex=${this.actionable?0:void 0}
      >
        ${l?a`<slot name="header" part="header" class="card__header"></slot>`:""}
        <slot part="content" class="card__content"></slot>
        ${s?a`<slot name="footer" part="footer" class="card__footer"></slot>`:""}
      </div>
    `}};n(t,"CpsCard"),t.styles=h,r([i(".card")],t.prototype,"card",2),r([o({reflect:!0})],t.prototype,"elevation",2),r([o({reflect:!0})],t.prototype,"rounded",2),r([o({reflect:!0})],t.prototype,"variant",2),r([o({type:Boolean,reflect:!0})],t.prototype,"actionable",2),t=r([c("cps-card")],t);export{t as a};
