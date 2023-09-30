import{a as m}from"./chunk.3LSSM5SV.js";import{a as l,b as c}from"./chunk.HLCEHFXO.js";import{a as r}from"./chunk.3TAG5MLH.js";import{a as h}from"./chunk.4TY62YMM.js";import{a as n,b as s,c as o,d as u,e as b}from"./chunk.3QYB7FP6.js";import{c as d,e as t}from"./chunk.K3RV6SX6.js";var e=class extends b{constructor(){super(...arguments);this.isFocused=!1;this.size="medium";this.label="";this.href="";this.rel="noreferrer noopener";this.disabled=!1}handleBlur(){this.isFocused=!1,this.emit("cps-blur")}handleFocus(){this.isFocused=!0,this.emit("cps-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){let i=!!this.href,a=i?l`a`:l`button`;return c`
      <${a}
        part="base"
        class=${h({"icon-button":!0,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large","icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.isFocused})}
        ?disabled=${r(i?void 0:this.disabled)}
        type=${r(i?void 0:"button")}
        href=${r(i?this.href:void 0)}
        target=${r(i?this.target:void 0)}
        download=${r(i?this.download:void 0)}
        rel=${r(i?this.rel:void 0)}
        role=${r(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <cps-icon
          part="icon"
          class="icon-button__icon"
          name=${r(this.name)}
          library=${r(this.library)}
          src=${r(this.src)}
          aria-hidden="true"
        ></cps-icon>
      </${a}>
    `}};d(e,"CpsIconButton"),e.styles=m,t([u(".icon-button")],e.prototype,"button",2),t([o()],e.prototype,"isFocused",2),t([s({reflect:!0})],e.prototype,"size",2),t([s()],e.prototype,"label",2),t([s()],e.prototype,"name",2),t([s()],e.prototype,"library",2),t([s()],e.prototype,"src",2),t([s()],e.prototype,"href",2),t([s()],e.prototype,"target",2),t([s()],e.prototype,"rel",2),t([s()],e.prototype,"download",2),t([s({type:Boolean,reflect:!0})],e.prototype,"disabled",2),e=t([n("cps-icon-button")],e);export{e as a};
