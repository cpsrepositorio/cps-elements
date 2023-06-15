import{a as u,c}from"./chunk.F7IHQ2QD.js";import{a as M}from"./chunk.OJMBM7TL.js";import{b as k}from"./chunk.4B7OTRNX.js";import{a as l}from"./chunk.SYMZGPTI.js";import{a as w}from"./chunk.YW7PM72I.js";import{a as E,b as a,d,e as L}from"./chunk.FVZAJBTT.js";import{a as b}from"./chunk.DRZBK76U.js";import{a as g,b as y,c as r,e as s}from"./chunk.K3RV6SX6.js";function p(i,n,e){return new Promise(o=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");let h=i.animate(n,y(g({},e),{duration:O()?0:e.duration}));h.addEventListener("cancel",o,{once:!0}),h.addEventListener("finish",o,{once:!0})})}r(p,"animateTo");function m(i){return i=i.toString().toLowerCase(),i.indexOf("ms")>-1?parseFloat(i):i.indexOf("s")>-1?parseFloat(i)*1e3:parseFloat(i)}r(m,"parseDuration");function O(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}r(O,"prefersReducedMotion");function f(i){return Promise.all(i.getAnimations().map(n=>new Promise(e=>{let o=requestAnimationFrame(e);n.addEventListener("cancel",()=>o,{once:!0}),n.addEventListener("finish",()=>o,{once:!0}),n.cancel()})))}r(f,"stopAnimations");function v(i,n){return new Promise(e=>{function o(h){h.target===i&&(i.removeEventListener(n,o),e())}r(o,"done"),i.addEventListener(n,o)})}r(v,"waitForEvent");var t=class extends L{constructor(){super(...arguments);this.localize=new k(this);this.content="";this.placement="top";this.disabled=!1;this.distance=10;this.skidding=0;this.open=!1;this.trigger="hover focus";this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popover.active=!0,this.popover.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){let e=m(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){let e=m(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("cps-show"),await f(this.body),this.body.hidden=!1,this.popover.active=!0;let{keyframes:e,options:o}=c(this,"tooltip.show",{dir:this.localize.dir()});await p(this.popover.container,e,o),this.emit("cps-after-show")}else{this.emit("cps-hide"),await f(this.body);let{keyframes:e,options:o}=c(this,"tooltip.hide",{dir:this.localize.dir()});await p(this.popover.container,e,o),this.popover.active=!1,this.body.hidden=!0,this.emit("cps-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popover.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,v(this,"cps-after-show")}async hide(){if(this.open)return this.open=!1,v(this,"cps-after-hide")}render(){return b`
      <cps-popover
        part="base"
        exportparts="
          container:base__container,
          arrow:base__arrow
        "
        class=${w({tooltip:!0,"tooltip--open":this.open})}
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
      </cps-popover>
    `}};r(t,"CpsTooltip"),t.styles=M,s([d("slot:not([name])")],t.prototype,"defaultSlot",2),s([d(".tooltip__body")],t.prototype,"body",2),s([d("cps-popover")],t.prototype,"popover",2),s([a()],t.prototype,"content",2),s([a()],t.prototype,"placement",2),s([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2),s([a({type:Number})],t.prototype,"distance",2),s([a({type:Number})],t.prototype,"skidding",2),s([a({type:Boolean,reflect:!0})],t.prototype,"open",2),s([a()],t.prototype,"trigger",2),s([a({type:Boolean})],t.prototype,"hoist",2),s([l("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1),s([l(["content","distance","hoist","placement","skidding"])],t.prototype,"handleOptionsChange",1),s([l("disabled")],t.prototype,"handleDisabledChange",1),t=s([E("cps-tooltip")],t);u("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});u("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});export{t as a};
