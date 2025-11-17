import{a as q}from"./chunk.GZKLUZFH.js";import{a as _}from"./chunk.BNMBGITL.js";import{a as g,b as v}from"./chunk.ON2ZSOZ5.js";import{a as b}from"./chunk.UV5W4X7Q.js";import{a as f}from"./chunk.LBY3AUDO.js";import{a as d,c as C}from"./chunk.F7IHQ2QD.js";import{b as M}from"./chunk.2YZHDAPC.js";import{a as k}from"./chunk.SYMZGPTI.js";import{a as T}from"./chunk.2XELF4ZT.js";import{a as S}from"./chunk.MESFKACX.js";import{a as L,b as c,d as h,e as w}from"./chunk.OH57CWRK.js";import{e as p}from"./chunk.QJBMNVJB.js";import{c as n,e as a}from"./chunk.K3RV6SX6.js";var i=class extends w{constructor(){super(...arguments);this.hasSlotController=new T(this,"[default]","label","header-actions","footer");this.localize=new M(this);this.open=!1;this.closable=!1;this.label="";this.ariaLabel="";this.returnValue=void 0}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new _(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),g(this)),this.setupFooterButtons()}setupFooterButtons(){var o;let e=(o=this.shadowRoot)==null?void 0:o.querySelector('slot[name="footer"]');e==null||e.addEventListener("slotchange",()=>{e.assignedElements({flatten:!0}).forEach(s=>{(s instanceof HTMLButtonElement||s.tagName.toLowerCase()==="cps-button")&&s.addEventListener("click",this.handleFooterButtonClick.bind(this))})})}handleFooterButtonClick(e){let o=e.currentTarget;if(o.formMethod==="dialog"||o.getAttribute("formmethod")==="dialog"){e.preventDefault();let t=o.value||o.getAttribute("value")||"";this.close(t)}}disconnectedCallback(){super.disconnectedCallback(),v(this)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async playAnimation(e,o){let t=C(e,o,{dir:this.localize.dir()});if(t){let{keyframes:s,options:r}=t;await e.animate(s,r).finished}}requestClose(e){if(this.emit("cps-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){this.playAnimation(this.panel,"dialog.denyClose");return}this.close(!1)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),this.handleFormSubmission=this.handleFormSubmission.bind(this),this.addEventListener("submit",this.handleFormSubmission)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.removeEventListener("submit",this.handleFormSubmission)}handleFormSubmission(e){if(e.target.method==="dialog"){e.preventDefault();let t=e.submitter;if(t){let s=t.value||"";this.close(s)}}}async handleOpenChange(){if(this.open){this.emit("cps-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),g(this);let e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),this.dialog.hidden=!1,await Promise.all([this.playAnimation(this.backdrop,"dialog.backdrop.show"),this.playAnimation(this.panel,"dialog.show")]),this.emit("cps-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus",""),this.emit("cps-after-show")}else{this.emit("cps-close"),document.activeElement instanceof HTMLElement&&document.activeElement.blur();let e=this.originalTrigger;await Promise.all([this.playAnimation(this.panel,"dialog.hide"),this.playAnimation(this.backdrop,"dialog.backdrop.hide")]),this.dialog.hidden=!0,v(this),e instanceof HTMLElement&&typeof e.focus=="function"&&e.focus({preventScroll:!0}),this.removeOpenListeners(),this.modal.deactivate(),this.emit("cps-after-close")}}async show(){if(!this.open)return this.returnValue=void 0,this.open=!0,f(this,"cps-after-show")}async close(e){if(this.open)return e!==void 0&&(this.returnValue=e),this.open=!1,f(this,"cps-after-close")}render(){let e=this.hasSlotController.test("[default]"),o=this.hasSlotController.test("footer"),t=this.hasSlotController.test("label"),s=this.label.length>0;return p`
      <div
        part="base"
        class=${S({dialog:!0,"dialog--has-body":e,"dialog--has-footer":o,"dialog--has-header":s||t,"dialog--open":this.open})}
      >
        <div part="backdrop" class="dialog__backdrop" @click=${()=>this.requestClose("backdrop")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-label=${b(this.ariaLabel||(s?this.label:void 0))}
          aria-labelledby=${b(this.ariaLabel||(t?"title":void 0))}
          tabindex="0"
        >
          ${s||t?p`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label">${s?this.label:String.fromCharCode(65279)}</slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    ${this.closable?p`
                          <cps-tooltip content="${this.localize.term("close")}" hoist>
                            <cps-icon-button
                              part="close-button"
                              exportparts="base:close-button__base"
                              class="dialog__close"
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

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};n(i,"CpsDialog"),i.styles=q,a([h(".dialog")],i.prototype,"dialog",2),a([h(".dialog__panel")],i.prototype,"panel",2),a([h(".dialog__backdrop")],i.prototype,"backdrop",2),a([c({type:Boolean,reflect:!0})],i.prototype,"open",2),a([c({type:Boolean,reflect:!0})],i.prototype,"closable",2),a([c({reflect:!0})],i.prototype,"label",2),a([c({attribute:"aria-label"})],i.prototype,"ariaLabel",2),a([c()],i.prototype,"returnValue",2),a([k("open",{waitUntilFirstUpdate:!0})],i.prototype,"handleOpenChange",1),i=a([L("cps-dialog")],i);d("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:200,easing:"ease-out"}});d("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:100,easing:"ease-in"}});d("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1},{scale:1.01},{scale:1}],options:{duration:350}});d("dialog.backdrop.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:150}});d("dialog.backdrop.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:100}});async function D(m,l="",e="OK"){let o=document.createElement("cps-dialog");o.label=l,o.ariaLabel=l||"Alert",o.innerHTML=`${m}<cps-button slot="footer" autofocus>${e}</cps-button>`,document.body.appendChild(o);let t=o.querySelector('cps-button[slot="footer"]');return new Promise(s=>{let r=n(()=>{o.close()},"onClose"),u=n(()=>{o.removeEventListener("cps-after-close",u),o.remove(),s()},"onAfterClose");o.addEventListener("cps-after-close",u),t==null||t.addEventListener("click",r),requestAnimationFrame(()=>o.show())})}n(D,"showAlert");async function I(m,l="",e="Confirmar",o="Cancelar"){let t=document.createElement("cps-dialog");t.label=l,t.ariaLabel=l||"Confirmation",t.innerHTML=`
    ${m}
    <cps-button slot="footer" variant="accent" autofocus>${e}</cps-button>
    <cps-button slot="footer">${o}</cps-button>
  `,document.body.appendChild(t);let s=t.querySelector('cps-button[slot="footer"][variant="accent"]'),r=t.querySelector('cps-button[slot="footer"]:not([variant="accent"])');return new Promise(u=>{let y=n(A=>{t.close(A)},"onClose"),E=n(()=>{t.removeEventListener("cps-after-close",E),t.remove(),u(t.returnValue)},"onAfterClose");t.addEventListener("cps-after-close",E),s==null||s.addEventListener("click",()=>y(!0)),r==null||r.addEventListener("click",()=>y(!1)),requestAnimationFrame(()=>t.show())})}n(I,"showConfirm");export{i as a,D as b,I as c};
