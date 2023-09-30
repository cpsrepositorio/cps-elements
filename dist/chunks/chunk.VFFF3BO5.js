import{a as _}from"./chunk.HUNCNK2Y.js";import{a as p}from"./chunk.5H4GFJPQ.js";import{b as w}from"./chunk.KBGGAJDF.js";import{a as d}from"./chunk.SYMZGPTI.js";import{a as A}from"./chunk.4TY62YMM.js";import{a as g,b as h,c as y,d as c,e as T}from"./chunk.3QYB7FP6.js";import{c as b}from"./chunk.FVWYSG5E.js";import{a as v,c as f,e as l}from"./chunk.K3RV6SX6.js";var o=class extends T{constructor(){super(...arguments);this.localize=new w(this);this.tabs=[];this.panels=[];this.hasScrollControls=!1;this.placement="top";this.activation="auto";this.noScrollControls=!1}connectedCallback(){let t=Promise.allSettled([customElements.whenDefined("cps-tab-item"),customElements.whenDefined("cps-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(s=>{s.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((e,r)=>{var a;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((a=this.getActiveTab())!=null?a:this.tabs[0],{emitEvents:!1}),r.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>t.includeDisabled?e.tagName.toLowerCase()==="cps-tab-item":e.tagName.toLowerCase()==="cps-tab-item"&&!e.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="cps-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.selected)}handleClick(t){let e=t.target.closest("cps-tab-item");(e==null?void 0:e.closest("cps-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("cps-tab-item");if((e==null?void 0:e.closest("cps-tab-group"))===this&&(["Enter"," "].includes(t.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let a=this.tabs.find(i=>i.matches(":focus")),n=this.localize.dir()==="rtl";if((a==null?void 0:a.tagName.toLowerCase())==="cps-tab-item"){let i=this.tabs.indexOf(a);t.key==="Home"?i=0:t.key==="End"?i=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?i--:(["top","bottom"].includes(this.placement)&&t.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&i++,i<0&&(i=this.tabs.length-1),i>this.tabs.length-1&&(i=0),this.tabs[i].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[i],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&p(this.tabs[i],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,s){if(s=v({emitEvents:!0,scrollBehavior:"auto"},s),t!==this.activeTab&&!t.disabled){let e=this.activeTab,r=this.tabs.indexOf(t);this.activeTab=t,this.tabs.forEach(a=>a.selected=a===this.activeTab),this.panels.forEach((a,n)=>{var i;a.name&&t.panel?a.selected=a.name===((i=this.activeTab)==null?void 0:i.panel):a.selected=n===r}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&p(this.activeTab,this.nav,"horizontal",s.scrollBehavior),s.emitEvents&&(e&&this.emit("cps-tab-hide",{detail:{name:e.panel}}),this.emit("cps-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let s=this.panels.find(e=>e.name===t.panel);s&&(t.setAttribute("aria-controls",s.getAttribute("id")),s.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let s=t.clientWidth,e=t.clientHeight,r=this.localize.dir()==="rtl",a=this.getAllTabs(),i=a.slice(0,a.indexOf(t)).reduce((m,u)=>({left:m.left+u.clientWidth+1,top:m.top+u.clientHeight+1}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${s}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*i.left}px`:`${i.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${e}px`,this.indicator.style.translate=`0 ${i.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getAllTabs().forEach(e=>e.placement=this.placement),this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let s=this.tabs.find(e=>e.panel===t);s&&this.setActiveTab(s,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return b`
      <div
        part="base"
        class=${A({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?b`
                <cps-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button--start__base,icon:scroll-button--start__icon"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></cps-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?b`
                <cps-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button--end__base,icon:scroll-button--end__icon"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></cps-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};f(o,"CpsTabGroup"),o.styles=_,l([c(".tab-group")],o.prototype,"tabGroup",2),l([c(".tab-group__body")],o.prototype,"body",2),l([c(".tab-group__nav")],o.prototype,"nav",2),l([c(".tab-group__indicator")],o.prototype,"indicator",2),l([y()],o.prototype,"hasScrollControls",2),l([h()],o.prototype,"placement",2),l([h()],o.prototype,"activation",2),l([h({attribute:"no-scroll-controls",type:Boolean})],o.prototype,"noScrollControls",2),l([d("noScrollControls",{waitUntilFirstUpdate:!0})],o.prototype,"updateScrollControls",1),l([d("placement",{waitUntilFirstUpdate:!0})],o.prototype,"syncIndicator",1),o=l([g("cps-tab-group")],o);export{o as a};
