import{a as $}from"./chunk.3DUSSYYQ.js";import{a as h,c as u}from"./chunk.4GDVQ6G7.js";import{a as p}from"./chunk.LBY3AUDO.js";import{a as d,c as m}from"./chunk.F7IHQ2QD.js";import{b as H}from"./chunk.2YZHDAPC.js";import{a as l}from"./chunk.SYMZGPTI.js";import{a as T}from"./chunk.2XELF4ZT.js";import{a as g}from"./chunk.MESFKACX.js";import{a as b,b as o,d as y,e as w}from"./chunk.NFRCMEAX.js";import{e as r}from"./chunk.QJBMNVJB.js";import{c,e as i}from"./chunk.K3RV6SX6.js";var s=Object.assign(document.createElement("div"),{className:"cps-toast-stack"}),t=class extends w{constructor(){super(...arguments);this.hasSlotController=new T(this,"icon","suffix");this.localize=new H(this);this.open=!1;this.closable=!1;this.variant="neutral";this.icon=!1;this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("cps-show"),this.duration<1/0&&this.restartAutoHide(),await u(this.base),this.base.hidden=!1;let{keyframes:a,options:n}=m(this,"notification.show",{dir:this.localize.dir()});await h(this.base,a,n),this.emit("cps-after-show")}else{this.emit("cps-hide"),clearTimeout(this.autoHideTimeout),await u(this.base);let{keyframes:a,options:n}=m(this,"notification.hide",{dir:this.localize.dir()});await h(this.base,a,n),this.base.hidden=!0,this.emit("cps-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,p(this,"cps-after-show")}async hide(){if(this.open)return this.open=!1,p(this,"cps-after-hide")}async toast(){return new Promise(a=>{s.parentElement===null&&document.body.append(s),s.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("cps-after-hide",()=>{s.removeChild(this),a(),s.querySelector("cps-notification")===null&&s.remove()},{once:!0})})}hasIcon(){return this.icon||this.hasSlotController.test("icon")}render(){return r`
      <div
        part="base"
        class=${g({notification:!0,"notification--open":this.open,"notification--closable":this.closable,"notification--has-icon":this.hasIcon(),"notification--neutral":this.variant==="neutral","notification--informative":this.variant==="informative","notification--warning":this.variant==="warning","notification--critical":this.variant==="critical","notification--success":this.variant==="success"})}
        role=${["neutral","informative"].includes(this.variant)?"status":"alert"}
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="notification__icon">
          ${this.icon?r` <cps-icon library="system" .name=${`status-${this.variant}`}></cps-icon> `:r` <slot name="icon"></slot> `}
        </div>

        <div part="message" class="notification__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?r`
              <cps-icon-button
                part="close-button"
                exportparts="base:close-button__base,icon:close-button__icon"
                class="notification__close-button"
                name="dismiss"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
                size="small"
              ></cps-icon-button>
            `:""}
      </div>
    `}};c(t,"CpsNotification"),t.styles=$,i([y('[part~="base"]')],t.prototype,"base",2),i([o({type:Boolean,reflect:!0})],t.prototype,"open",2),i([o({type:Boolean,reflect:!0})],t.prototype,"closable",2),i([o({reflect:!0})],t.prototype,"variant",2),i([o({type:Boolean,reflect:!0})],t.prototype,"icon",2),i([o({type:Number})],t.prototype,"duration",2),i([l("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1),i([l("duration")],t.prototype,"handleDurationChange",1),t=i([b("cps-notification")],t);d("notification.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});d("notification.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var q=c((f,e={variant:"informative",closable:!0,duration:5e3,icon:!0})=>{function a(E){let v=document.createElement("div");return v.textContent=E,v.innerHTML}c(a,"escapeHtml");let n=Object.assign(document.createElement("cps-notification"),{variant:e.variant,closable:e.closable,duration:e.duration,icon:e.icon===void 0?!0:typeof e.icon=="boolean"?e.icon:!1,innerHTML:`
      ${e.icon&&typeof e.icon=="string"?`<cps-icon name="${e.icon}" slot="icon"></cps-icon>`:""}
      ${a(f)}
    `});return document.body.append(n),n.toast()},"toast");export{t as a,q as b};
