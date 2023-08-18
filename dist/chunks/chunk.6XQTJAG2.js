import{a as m}from"./chunk.Z7E36QOE.js";import{b as c}from"./chunk.KBGGAJDF.js";import{a as s}from"./chunk.MIZ6RN32.js";import{a as l,b as i,e as o}from"./chunk.JOTZQUUG.js";import{a as r}from"./chunk.XKNP6CD6.js";import{c as a,e as t}from"./chunk.K3RV6SX6.js";var e=class extends o{constructor(){super(...arguments);this.localize=new c(this);this.variant="neutral";this.size="medium";this.removable=!1}handleRemoveClick(){this.emit("cps-remove")}render(){return r`
      <span
        part="base"
        class=${s({chip:!0,"chip--neutral":this.variant==="neutral","chip--informative":this.variant==="informative","chip--warning":this.variant==="warning","chip--critical":this.variant==="critical","chip--success":this.variant==="success","chip--small":this.size==="small","chip--medium":this.size==="medium","chip--large":this.size==="large","chip--removable":this.removable})}
      >
        <slot part="content" class="chip__content"></slot>

        ${this.removable?r`
              <cps-icon-button
                part="remove-button"
                exportparts="base:remove-button__base, icon:remove-button__icon"
                name="dismiss"
                library="system"
                label=${this.localize.term("remove")}
                class="chip__remove"
                @click=${this.handleRemoveClick}
                size="small"
              ></cps-icon-button>
            `:""}
      </span>
    `}};a(e,"CpsChip"),e.styles=m,t([i({reflect:!0})],e.prototype,"variant",2),t([i({reflect:!0})],e.prototype,"size",2),t([i({type:Boolean})],e.prototype,"removable",2),e=t([l("cps-chip")],e);export{e as a};
