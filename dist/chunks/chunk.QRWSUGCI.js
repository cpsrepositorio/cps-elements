import{a as i}from"./chunk.JWGOLJSE.js";import{b as c}from"./chunk.7PZ6546J.js";import{a as l}from"./chunk.FBB7MPWZ.js";import{a as o,b as r,e as s}from"./chunk.MYQ7XARW.js";import{c as a,e as t}from"./chunk.K3RV6SX6.js";var e=class extends s{constructor(){super(...arguments);this.variant="base";this.centered=!1}render(){return c`
      <div
        part="base"
        class=${l({background:!0,[`background--${this.variant}`]:!0,"background--centered":this.centered})}
      >
        <div class="background_effects"></div>
        <slot part="content" class="background__content"></slot>
      </div>
    `}};a(e,"CpsBackground"),e.styles=i,t([r({type:String})],e.prototype,"variant",2),t([r({type:Boolean})],e.prototype,"centered",2),e=t([o("cps-background")],e);export{e as a};
