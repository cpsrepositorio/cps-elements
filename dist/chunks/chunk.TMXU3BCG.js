import{a as m}from"./chunk.R3RIAM4F.js";import{a as s}from"./chunk.LRWRRCF4.js";import{a as l,b as c}from"./chunk.7PZ6546J.js";import{a as b}from"./chunk.FBB7MPWZ.js";import{a as n,b as r,c as o,d as u,e as h}from"./chunk.X76EUGAE.js";import{c as d,e as t}from"./chunk.K3RV6SX6.js";var e=class extends h{constructor(){super(...arguments);this.isFocused=!1;this.size="medium";this.label="";this.href="";this.rel="noreferrer noopener";this.disabled=!1}handleBlur(){this.isFocused=!1,this.emit("cps-blur")}handleFocus(){this.isFocused=!0,this.emit("cps-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){let i=!!this.href,a=i?l`a`:l`button`;return c`
      <${a}
        part="base"
        class=${b({"icon-button":!0,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large","icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.isFocused})}
        ?disabled=${s(i?void 0:this.disabled)}
        type=${s(i?void 0:"button")}
        href=${s(i?this.href:void 0)}
        target=${s(i?this.target:void 0)}
        download=${s(i?this.download:void 0)}
        rel=${s(i?this.rel:void 0)}
        role=${s(i?void 0:"button")}
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
          name=${s(this.name)}
          library=${s(this.library)}
          src=${s(this.src)}
          aria-hidden="true"
        ></cps-icon>
      </${a}>
    `}};d(e,"CpsIconButton"),e.styles=m,t([u(".icon-button")],e.prototype,"button",2),t([o()],e.prototype,"isFocused",2),t([r({reflect:!0})],e.prototype,"size",2),t([r()],e.prototype,"label",2),t([r()],e.prototype,"name",2),t([r()],e.prototype,"library",2),t([r()],e.prototype,"src",2),t([r()],e.prototype,"href",2),t([r()],e.prototype,"target",2),t([r()],e.prototype,"rel",2),t([r()],e.prototype,"download",2),t([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2),e=t([n("cps-icon-button")],e);export{e as a};
