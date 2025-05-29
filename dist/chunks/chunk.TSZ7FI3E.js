import{a as H}from"./chunk.RBEQ6TQ4.js";import{a as E,b as L}from"./chunk.ON2ZSOZ5.js";import{a as g}from"./chunk.LRWRRCF4.js";import{d as v}from"./chunk.USCVVKCJ.js";import{a as h,c as M}from"./chunk.F7IHQ2QD.js";import{a as T}from"./chunk.SYMZGPTI.js";import{b as F}from"./chunk.G2JXWJ23.js";import{a as C}from"./chunk.2XELF4ZT.js";import{a as A}from"./chunk.FBB7MPWZ.js";import{a as k,b as u,d as b,e as S}from"./chunk.MYQ7XARW.js";import{a as y}from"./chunk.D7J5WK6X.js";import{c as l,e as c}from"./chunk.K3RV6SX6.js";function _(s){let i=s.tagName.toLowerCase();return s.getAttribute("tabindex")==="-1"||s.hasAttribute("disabled")||s.hasAttribute("aria-disabled")&&s.getAttribute("aria-disabled")!=="false"||i==="input"&&s.getAttribute("type")==="radio"&&!s.hasAttribute("checked")||s.offsetParent===null||window.getComputedStyle(s).visibility==="hidden"?!1:(i==="audio"||i==="video")&&s.hasAttribute("controls")||s.hasAttribute("tabindex")||s.hasAttribute("contenteditable")&&s.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(i)}l(_,"isTabbable");function q(s){var n,d;let i=[];function e(a){a instanceof HTMLElement&&(i.push(a),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&e(a.shadowRoot)),[...a.children].forEach(f=>e(f))}l(e,"walk"),e(s);let t=(n=i.find(a=>_(a)))!=null?n:null,o=(d=i.reverse().find(a=>_(a)))!=null?d:null;return{start:t,end:o}}l(q,"getTabbableBoundary");var p=[],m=class{constructor(i){this.tabDirection="forward";this.element=i,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){p.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){p=p.filter(i=>i!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return p[p.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){let{start:i,end:e}=q(this.element),t=this.tabDirection==="forward"?i:e;typeof(t==null?void 0:t.focus)=="function"&&t.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(i){i.key==="Tab"&&i.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};l(m,"Modal");var r=class extends S{constructor(){super(...arguments);this.hasSlotController=new C(this,"[default]","label","header-actions","footer");this.localize=new F(this);this.open=!1;this.closable=!1;this.label="";this.ariaLabel="";this.returnValue=void 0}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new m(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),E(this)),this.setupFooterButtons()}setupFooterButtons(){var t;let e=(t=this.shadowRoot)==null?void 0:t.querySelector('slot[name="footer"]');e==null||e.addEventListener("slotchange",()=>{e.assignedElements({flatten:!0}).forEach(n=>{(n instanceof HTMLButtonElement||n.tagName.toLowerCase()==="cps-button")&&n.addEventListener("click",this.handleFooterButtonClick.bind(this))})})}handleFooterButtonClick(e){let t=e.currentTarget;if(t.formMethod==="dialog"||t.getAttribute("formmethod")==="dialog"){e.preventDefault();let o=t.value||t.getAttribute("value")||"";this.close(o)}}disconnectedCallback(){super.disconnectedCallback(),L(this)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async playAnimation(e,t){let o=M(e,t,{dir:this.localize.dir()});if(o){let{keyframes:n,options:d}=o;await e.animate(n,d).finished}}requestClose(e){if(this.emit("cps-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){this.playAnimation(this.panel,"dialog.denyClose");return}this.close(!1)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),this.handleFormSubmission=this.handleFormSubmission.bind(this),this.addEventListener("submit",this.handleFormSubmission)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.removeEventListener("submit",this.handleFormSubmission)}handleFormSubmission(e){if(e.target.method==="dialog"){e.preventDefault();let o=e.submitter;if(o){let n=o.value||"";this.close(n)}}}async handleOpenChange(){if(this.open){this.emit("cps-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),E(this);let e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),this.dialog.hidden=!1,await Promise.all([this.playAnimation(this.backdrop,"dialog.backdrop.show"),this.playAnimation(this.panel,"dialog.show")]),this.emit("cps-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus",""),this.emit("cps-after-show")}else{this.emit("cps-close"),document.activeElement instanceof HTMLElement&&document.activeElement.blur();let e=this.originalTrigger;await Promise.all([this.playAnimation(this.panel,"dialog.hide"),this.playAnimation(this.backdrop,"dialog.backdrop.hide")]),this.dialog.hidden=!0,L(this),e instanceof HTMLElement&&typeof e.focus=="function"&&e.focus({preventScroll:!0}),this.removeOpenListeners(),this.modal.deactivate(),this.emit("cps-after-close")}}async show(){if(!this.open)return this.returnValue=void 0,this.open=!0,v(this,"cps-after-show")}async close(e){if(this.open)return e!==void 0&&(this.returnValue=e),this.open=!1,v(this,"cps-after-close")}render(){let e=this.hasSlotController.test("[default]"),t=this.hasSlotController.test("footer"),o=this.hasSlotController.test("label"),n=this.label.length>0;return y`
      <div
        part="base"
        class=${A({dialog:!0,"dialog--has-body":e,"dialog--has-footer":t,"dialog--has-header":n||o,"dialog--open":this.open})}
      >
        <div part="backdrop" class="dialog__backdrop" @click=${()=>this.requestClose("backdrop")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-label=${g(this.ariaLabel||(n?this.label:void 0))}
          aria-labelledby=${g(this.ariaLabel||(o?"title":void 0))}
          tabindex="0"
        >
          ${n||o?y`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label">${n?this.label:String.fromCharCode(65279)}</slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    ${this.closable?y`
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
    `}};l(r,"CpsDialog"),r.styles=H,c([b(".dialog")],r.prototype,"dialog",2),c([b(".dialog__panel")],r.prototype,"panel",2),c([b(".dialog__backdrop")],r.prototype,"backdrop",2),c([u({type:Boolean,reflect:!0})],r.prototype,"open",2),c([u({type:Boolean,reflect:!0})],r.prototype,"closable",2),c([u({reflect:!0})],r.prototype,"label",2),c([u({attribute:"aria-label"})],r.prototype,"ariaLabel",2),c([u()],r.prototype,"returnValue",2),c([T("open",{waitUntilFirstUpdate:!0})],r.prototype,"handleOpenChange",1),r=c([k("cps-dialog")],r);h("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:200,easing:"ease-out"}});h("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:100,easing:"ease-in"}});h("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1},{scale:1.01},{scale:1}],options:{duration:350}});h("dialog.backdrop.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:150}});h("dialog.backdrop.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:100}});async function ee(s,i="",e="OK"){let t=document.createElement("cps-dialog");t.label=i,t.ariaLabel=i||"Alert",t.innerHTML=`${s}<cps-button slot="footer" autofocus>${e}</cps-button>`,document.body.appendChild(t);let o=t.querySelector('cps-button[slot="footer"]');return new Promise(n=>{let d=l(()=>{t.close()},"onClose"),a=l(()=>{t.removeEventListener("cps-after-close",a),t.remove(),n()},"onAfterClose");t.addEventListener("cps-after-close",a),o==null||o.addEventListener("click",d),requestAnimationFrame(()=>t.show())})}l(ee,"showAlert");async function te(s,i="",e="Confirmar",t="Cancelar"){let o=document.createElement("cps-dialog");o.label=i,o.ariaLabel=i||"Confirmation",o.innerHTML=`
    ${s}
    <cps-button slot="footer" variant="accent" autofocus>${e}</cps-button>
    <cps-button slot="footer">${t}</cps-button>
  `,document.body.appendChild(o);let n=o.querySelector('cps-button[slot="footer"][variant="accent"]'),d=o.querySelector('cps-button[slot="footer"]:not([variant="accent"])');return new Promise(a=>{let f=l(K=>{o.close(K)},"onClose"),w=l(()=>{o.removeEventListener("cps-after-close",w),o.remove(),a(o.returnValue)},"onAfterClose");o.addEventListener("cps-after-close",w),n==null||n.addEventListener("click",()=>f(!0)),d==null||d.addEventListener("click",()=>f(!1)),requestAnimationFrame(()=>o.show())})}l(te,"showConfirm");export{r as a,ee as b,te as c};
