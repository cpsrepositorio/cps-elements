import{a as p}from"./chunk.JX2DDTR3.js";import{b as f}from"./chunk.2YZHDAPC.js";import{a as h}from"./chunk.2XELF4ZT.js";import{b as d}from"./chunk.HRWN72OY.js";import{a as n}from"./chunk.MESFKACX.js";import{a as r,b as i,d as o,e as a}from"./chunk.EVD3EPGG.js";import{c as s,e}from"./chunk.K3RV6SX6.js";var t=class extends a{constructor(){super(...arguments);this.hasSlotController=new h(this,"[default]","prefix","suffix");this.localize=new f(this);this.disabled=!1;this.href="";this.size="inherit";this.target="_self"}handleClick(l){this.disabled&&(l.preventDefault(),l.stopImmediatePropagation())}handleBlur(){this.emit("cps-blur")}handleFocus(){this.emit("cps-focus")}click(){this.link.click()}focus(l){this.link.focus(l)}blur(){this.link.blur()}render(){return d`
      <a
        part="base"
        href=${this.href}
        target=${this.target}
        @click=${this.handleClick}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        class=${n({link:!0,"link--disabled":this.disabled,"link--rtl":this.localize.dir()==="rtl","link--has-label":this.hasSlotController.test("[default]"),"link--has-prefix":this.hasSlotController.test("prefix"),"link--has-suffix":this.hasSlotController.test("suffix"),"link--inherit":this.size==="inherit","link--stamp":this.size==="stamp","link--caption":this.size==="caption","link--label":this.size==="label","link--body":this.size==="body","link--body-em":this.size==="body-emphasized","link--body-strong":this.size==="body-strong","link--body-large":this.size==="body-large","link--subtitle":this.size==="subtitle","link--title":this.size==="title","link--heading":this.size==="heading","link--display":this.size==="display"})}
      >
        <slot name="prefix" part="prefix" class="link__prefix"></slot>
        <slot part="content" class="link__content"></slot>
        <slot name="suffix" part="suffix" class="link__suffix"></slot>
      </a>
    `}};s(t,"CpsLink"),t.styles=p,e([o(".link")],t.prototype,"link",2),e([i({type:Boolean,reflect:!0})],t.prototype,"disabled",2),e([i()],t.prototype,"href",2),e([i({reflect:!0})],t.prototype,"size",2),e([i()],t.prototype,"target",2),t=e([r("cps-link")],t);export{t as a};
