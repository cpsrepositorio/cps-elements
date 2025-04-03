import{a as b}from"./chunk.HTZYARHK.js";import{a as r,b as h,c as l,d as c}from"./chunk.4OACLEKC.js";import{a as d,c as u}from"./chunk.F7IHQ2QD.js";import{a as n}from"./chunk.SYMZGPTI.js";import{b as g}from"./chunk.KBGGAJDF.js";import{a as v}from"./chunk.FBB7MPWZ.js";import{a as m,b as s,d as a,e as y}from"./chunk.5NKACAGP.js";import{a as f}from"./chunk.D7J5WK6X.js";import{c as p,e as t}from"./chunk.K3RV6SX6.js";var e=class extends y{constructor(){super(...arguments);this.localize=new g(this);this.content="";this.placement="top";this.disabled=!1;this.distance=10;this.skidding=0;this.open=!1;this.trigger="hover focus";this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.flyout.active=!0,this.flyout.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(i){this.open&&i.key==="Escape"&&(i.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){let i=h(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),i)}}handleMouseOut(){if(this.hasTrigger("hover")){let i=h(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),i)}}hasTrigger(i){return this.trigger.split(" ").includes(i)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("cps-show"),await l(this.body),this.body.hidden=!1,this.flyout.active=!0;let{keyframes:i,options:o}=u(this,"tooltip.show",{dir:this.localize.dir()});await r(this.flyout.container,i,o),this.emit("cps-after-show")}else{this.emit("cps-hide"),await l(this.body);let{keyframes:i,options:o}=u(this,"tooltip.hide",{dir:this.localize.dir()});await r(this.flyout.container,i,o),this.flyout.active=!1,this.body.hidden=!0,this.emit("cps-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.flyout.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,c(this,"cps-after-show")}async hide(){if(this.open)return this.open=!1,c(this,"cps-after-hide")}render(){return f`
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
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </cps-flyout>
    `}};p(e,"CpsTooltip"),e.styles=b,t([a("slot:not([name])")],e.prototype,"defaultSlot",2),t([a(".tooltip__body")],e.prototype,"body",2),t([a("cps-flyout")],e.prototype,"flyout",2),t([s()],e.prototype,"content",2),t([s()],e.prototype,"placement",2),t([s({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([s({type:Number})],e.prototype,"distance",2),t([s({type:Number})],e.prototype,"skidding",2),t([s({type:Boolean,reflect:!0})],e.prototype,"open",2),t([s()],e.prototype,"trigger",2),t([s({type:Boolean})],e.prototype,"hoist",2),t([n("open",{waitUntilFirstUpdate:!0})],e.prototype,"handleOpenChange",1),t([n(["content","distance","hoist","placement","skidding"])],e.prototype,"handleOptionsChange",1),t([n("disabled")],e.prototype,"handleDisabledChange",1),e=t([m("cps-tooltip")],e);d("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});d("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});export{e as a};
