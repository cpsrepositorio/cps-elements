import{a as S}from"./chunk.WOVJIZWR.js";import{a as c,c as l,d as p}from"./chunk.USCVVKCJ.js";import{a as h,c as d}from"./chunk.F7IHQ2QD.js";import{a as u}from"./chunk.SYMZGPTI.js";import{b as v}from"./chunk.G2JXWJ23.js";import{a as b}from"./chunk.2XELF4ZT.js";import{b as w}from"./chunk.7PZ6546J.js";import{a as _}from"./chunk.FBB7MPWZ.js";import{a as f,b as a,d as r,e as y}from"./chunk.SLRG2ELG.js";import{c as m,e}from"./chunk.K3RV6SX6.js";var t=class extends y{constructor(){super(...arguments);this.hasSlotController=new b(this,"[default]","icon");this.localize=new v(this);this.open=!1;this.subtitle="";this.title=""}async handleOpenChange(o,i){if(o===void 0){requestAnimationFrame(()=>this.content.hidden=!i);return}if(i){this.emit("cps-show"),await l(this),this.content.hidden=!1;let{keyframes:n,options:s}=d(this,"accordion.show",{dir:this.localize.dir()});await c(this.content,n,s),this.emit("cps-after-show")}else{this.emit("cps-hide"),await l(this);let{keyframes:n,options:s}=d(this,"accordion.hide",{dir:this.localize.dir()});await c(this.content,n,s),this.content.hidden=!0,this.emit("cps-after-hide")}}async show(){if(this.open){this.open=!1;return}return this.open=!0,p(this,"cps-after-show")}async hide(){if(!this.open){this.open=!1;return}return this.open=!1,p(this,"cps-after-hide")}click(){this.open=!this.open}focus(o){this.header.focus(o)}blur(){this.header.blur()}render(){let o=this.hasSlotController.test("[default]"),i=this.hasSlotController.test("icon");return w`
      <div
        class=${_({accordion:!0,"accordion--open":this.open,"accordion--has-content":o,"accordion--has-icon":i})}
        part="base"
        title
      >
        <button
          aria-controls="content"
          aria-expanded=${this.open}
          class="accordion__header"
          id="header"
          part="header"
          type="button"
          @click=${this.click}
        >
          <div class="accordion__header-content">
            <slot class="accordion__header-icon" name="icon" part="icon"></slot>
            <span class="accordion__header-title" part="title">${this.title}</span>
            <span class="accordion__header-subtitle" part="subtitle">${this.subtitle}</span>
          </div>

          <cps-icon class="accordion__header-caret" library="system" name="caret" part="caret"></cps-icon>
        </button>

        <div aria-labelledby="header" class="accordion__content" id="content" part="content" role="region">
          <slot></slot>
        </div>
      </div>
    `}};m(t,"CpsAccordion"),t.styles=S,e([r(".accordion__header")],t.prototype,"header",2),e([r(".accordion__content")],t.prototype,"content",2),e([a({type:Boolean,reflect:!0})],t.prototype,"open",2),e([a({type:String})],t.prototype,"subtitle",2),e([a({type:String})],t.prototype,"title",2),e([u("open")],t.prototype,"handleOpenChange",1),t=e([f("cps-accordion")],t);h("accordion.show",{keyframes:[{opacity:0,transform:"scaleY(0)"},{opacity:1,transform:"scaleY(1)"}],options:{duration:250,easing:"ease-out"}});h("accordion.hide",{keyframes:[{opacity:1,transform:"scaleY(1)"},{opacity:0,transform:"scaleY(0)"}],options:{duration:200,easing:"ease-in"}});export{t as a};
