import{a as b}from"./chunk.LIDKJB3C.js";import{a as h,b as l,c as o}from"./chunk.4GDVQ6G7.js";import{a as c}from"./chunk.LBY3AUDO.js";import{a as d,c as u}from"./chunk.F7IHQ2QD.js";import{b as g}from"./chunk.2YZHDAPC.js";import{a as r}from"./chunk.SYMZGPTI.js";import{a as v}from"./chunk.MESFKACX.js";import{a as m,b as s,d as a,e as y}from"./chunk.NFRCMEAX.js";import{e as f}from"./chunk.QJBMNVJB.js";import{c as p,e}from"./chunk.K3RV6SX6.js";var t=class extends y{constructor(){super(...arguments);this.localize=new g(this);this.content="";this.placement="top";this.disabled=!1;this.distance=10;this.skidding=0;this.open=!1;this.trigger="hover focus";this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.flyout.active=!0,this.flyout.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(i){this.open&&i.key==="Escape"&&(i.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){let i=l(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),i)}}handleMouseOut(){if(this.hasTrigger("hover")){let i=l(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),i)}}hasTrigger(i){return this.trigger.split(" ").includes(i)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("cps-show"),await Promise.all([o(this.body),o(this.flyout.container)]),this.body.hidden=!1,this.flyout.active=!0;let{keyframes:i,options:n}=u(this,"tooltip.show",{dir:this.localize.dir()});await h(this.flyout.container,i,n),this.emit("cps-after-show")}else{this.emit("cps-hide"),await Promise.all([o(this.body),o(this.flyout.container)]);let{keyframes:i,options:n}=u(this,"tooltip.hide",{dir:this.localize.dir()}),w=this.open;if(await h(this.flyout.container,i,n),this.open!==w)return;this.flyout.active=!1,this.body.hidden=!0,this.emit("cps-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.flyout.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,c(this,"cps-after-show")}async hide(){if(this.open)return this.open=!1,c(this,"cps-after-hide")}render(){return f`
      <cps-flyout
        part="base"
        exportparts="
          container:base__container,
          arrow:base__arrow
        "
        class=${v({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor"></slot>

        <div
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-labelledby="tooltip-content"
          aria-live=${this.open?"polite":"off"}
        >
          <slot id="tooltip-content" name="content">${this.content}</slot>
        </div>
      </cps-flyout>
    `}};p(t,"CpsTooltip"),t.styles=b,e([a("slot:not([name])")],t.prototype,"defaultSlot",2),e([a(".tooltip__body")],t.prototype,"body",2),e([a("cps-flyout")],t.prototype,"flyout",2),e([s()],t.prototype,"content",2),e([s()],t.prototype,"placement",2),e([s({type:Boolean,reflect:!0})],t.prototype,"disabled",2),e([s({type:Number})],t.prototype,"distance",2),e([s({type:Number})],t.prototype,"skidding",2),e([s({type:Boolean,reflect:!0})],t.prototype,"open",2),e([s()],t.prototype,"trigger",2),e([s({type:Boolean})],t.prototype,"hoist",2),e([r("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1),e([r(["content","distance","hoist","placement","skidding"])],t.prototype,"handleOptionsChange",1),e([r("disabled")],t.prototype,"handleDisabledChange",1),t=e([m("cps-tooltip")],t);d("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});d("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});export{t as a};
