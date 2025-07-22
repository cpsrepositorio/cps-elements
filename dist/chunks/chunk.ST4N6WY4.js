import{a as _}from"./chunk.X2P7TI6Y.js";import{a as L}from"./chunk.BNMBGITL.js";import{a as h,b as m}from"./chunk.ON2ZSOZ5.js";import{a as p}from"./chunk.LRWRRCF4.js";import{a as c}from"./chunk.LBY3AUDO.js";import{a as o,c as k}from"./chunk.F7IHQ2QD.js";import{b as g}from"./chunk.G2JXWJ23.js";import{a as y}from"./chunk.SYMZGPTI.js";import{a as v}from"./chunk.2XELF4ZT.js";import{a as w}from"./chunk.FBB7MPWZ.js";import{a as u,b as i,d as l,e as b}from"./chunk.VSJMZKIN.js";import{a as d}from"./chunk.D7J5WK6X.js";import{c as f,e as a}from"./chunk.K3RV6SX6.js";var e=class extends b{constructor(){super(...arguments);this.hasSlotController=new v(this,"[default]","label","header-actions","footer");this.localize=new g(this);this.open=!1;this.closable=!1;this.label="";this.ariaLabel="";this.placement="end";this.contained=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new L(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),h(this)))}disconnectedCallback(){super.disconnectedCallback(),m(this),this.removeOpenListeners()}async playAnimation(t,n){let r=k(t,n,{dir:this.localize.dir()});if(r){let{keyframes:s,options:E}=r;await t.animate(s,E).finished}}requestClose(t){if(this.emit("cps-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){this.playAnimation(this.panel,"drawer.denyClose");return}this.close()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("cps-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),h(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),this.drawer.hidden=!1,await Promise.all([this.playAnimation(this.backdrop,"drawer.backdrop.show"),this.playAnimation(this.panel,`drawer.show${this.placement.charAt(0).toUpperCase()+this.placement.slice(1)}`)]),this.emit("cps-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus",""),this.emit("cps-after-show")}else this.emit("cps-close"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),m(this)),await Promise.all([this.playAnimation(this.panel,`drawer.hide${this.placement.charAt(0).toUpperCase()+this.placement.slice(1)}`),this.playAnimation(this.backdrop,"drawer.backdrop.hide")]),this.drawer.hidden=!0,this.originalTrigger&&typeof this.originalTrigger.focus=="function"&&setTimeout(()=>this.originalTrigger.focus()),this.emit("cps-after-close")}async show(){this.open||(this.open=!0,await c(this,"cps-after-show"))}async close(){this.open&&(this.open=!1,await c(this,"cps-after-close"))}render(){let t=this.hasSlotController.test("[default]"),n=this.hasSlotController.test("footer"),r=this.hasSlotController.test("label"),s=this.label.length>0;return d`
      <div
        part="base"
        class=${w({drawer:!0,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--has-body":t,"drawer--has-footer":n,"drawer--has-header":s||r,"drawer--open":this.open,[`drawer--${this.placement}`]:!0})}
      >
        <div part="backdrop" class="drawer__backdrop" @click=${()=>this.requestClose("backdrop")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label=${p(this.ariaLabel||(s?this.label:void 0))}
          aria-labelledby=${p(this.ariaLabel||(r?"title":void 0))}
          tabindex="0"
        >
          ${s||r?d`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <slot name="label">${s?this.label:String.fromCharCode(65279)}</slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    ${this.closable?d`
                          <cps-tooltip content="${this.localize.term("close")}" hoist>
                            <cps-icon-button
                              part="close-button"
                              exportparts="base:close-button__base"
                              class="drawer__close"
                              name="dismiss"
                              label=${this.localize.term("close")}
                              library="system"
                              @click="${()=>this.requestClose("header")}"
                            ></cps-icon-button>
                          </cps-tooltip>
                        `:""}
                  </div>
                </header>
              `:""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};f(e,"CpsDrawer"),e.styles=_,a([l(".drawer")],e.prototype,"drawer",2),a([l(".drawer__panel")],e.prototype,"panel",2),a([l(".drawer__backdrop")],e.prototype,"backdrop",2),a([i({type:Boolean,reflect:!0})],e.prototype,"open",2),a([i({type:Boolean,reflect:!0})],e.prototype,"closable",2),a([i({reflect:!0})],e.prototype,"label",2),a([i({attribute:"aria-label"})],e.prototype,"ariaLabel",2),a([i({reflect:!0})],e.prototype,"placement",2),a([i({type:Boolean,reflect:!0})],e.prototype,"contained",2),a([y("open",{waitUntilFirstUpdate:!0})],e.prototype,"handleOpenChange",1),e=a([u("cps-drawer")],e);o("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});o("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});o("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});o("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});o("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});o("drawer.backdrop.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});o("drawer.backdrop.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});export{e as a};
