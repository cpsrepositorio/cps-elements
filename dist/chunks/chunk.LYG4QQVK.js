import{a as x}from"./chunk.7BF3B742.js";import{a as k}from"./chunk.TBLM4WXU.js";import{c as T}from"./chunk.ON2ZSOZ5.js";import{a as m,c as f,d as g}from"./chunk.USCVVKCJ.js";import{a as y,c as b}from"./chunk.F7IHQ2QD.js";import{a as d}from"./chunk.SYMZGPTI.js";import{b as E}from"./chunk.G2JXWJ23.js";import{a as S}from"./chunk.FBB7MPWZ.js";import{a as w,b as r,c as h,d as p,e as O}from"./chunk.RLLGFEJH.js";import{a as u}from"./chunk.D7J5WK6X.js";import{c as v,e as i}from"./chunk.K3RV6SX6.js";var t=class extends O{constructor(){super(...arguments);this.localize=new E(this);this.typeToSelectString="";this.hasFocus=!1;this.generatedId="";this.displayText="";this.selectedOptions=[];this.id="";this.value="";this.size="medium";this.placeholder="";this.keepPlaceholder=!1;this.disabled=!1;this.clearable=!1;this.open=!1;this.strategy="absolute";this.placement="bottom"}handleIdChange(){this.generatedId=k(this.id)}connectedCallback(){super.connectedCallback(),this.handleDocumentFocusIn=this.handleDocumentFocusIn.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.emit("cps-focus")}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleDocumentFocusIn(e){let s=e.composedPath();this&&!s.includes(this)&&this.hide()}handleDocumentKeyDown(e){if(e.target.closest(".dropdown__clear")!==null)return;if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displaySpan.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("cps-change")}));return}let a=this.getAllOptions().filter(n=>!n.disabled);if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;if(a.length>1){let n=a.indexOf(this.currentOption),l=Math.max(0,n),c=!1;for(;!c;)e.key==="ArrowDown"?(l=n+1,l>a.length-1&&(l=0)):e.key==="ArrowUp"?(l=n-1,l<0&&(l=a.length-1)):e.key==="Home"?l=0:e.key==="End"&&(l=a.length-1),a[l].disabled||(c=!0);this.setCurrentOption(a[l])}}if(e.key.length===1||e.key==="Backspace"){if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let n of a)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}handleDocumentMouseDown(e){let s=e.composedPath();this&&!s.includes(this)&&this.hide()}handleTriggerMouseDown(e){e.preventDefault(),!this.disabled&&(this.displaySpan.focus({preventScroll:!0}),this.open=!this.open)}handleTriggerKeyDown(e){e.stopPropagation(),!this.disabled&&this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displaySpan.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("cps-clear"),this.emit("cps-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let o=e.target.closest("cps-option"),a=this.value;o&&!o.disabled&&(this.setSelectedOptions(o),this.updateComplete.then(()=>this.displaySpan.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("cps-change",{detail:{option:o}})}),this.hide(),this.displaySpan.focus({preventScroll:!0}))}handleDefaultSlotChange(){let e=this.getAllOptions(),s=this.getAllLabels(),o=this.value,a=[];s.forEach(n=>{n.size="label",n.variant="secondary"}),customElements.get("cps-option")?(e.forEach(n=>a.push(n.value)),this.setSelectedOptions(e.filter(n=>o.includes(n.value)))):customElements.whenDefined("cps-option").then(()=>this.handleDefaultSlotChange())}getAllLabels(){return[...this.querySelectorAll("cps-label")]}getAllOptions(){return[...this.querySelectorAll("cps-option")]}getFirstOption(){return this.querySelector("cps-option")}setCurrentOption(e){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let s=this.getAllOptions(),o=Array.isArray(e)?e:[e];s.forEach(a=>a.selected=!1),o.length&&o.forEach(a=>a.selected=!0),this.selectionChanged()}selectionChanged(){var e,s,o,a,n,l;this.selectedOptions=this.getAllOptions().filter(c=>c.selected),this.value=(s=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?s:"",this.keepPlaceholder?this.displayText=(o=this.placeholder)!=null?o:"":this.displayText=(l=(n=(a=this.selectedOptions[0])==null?void 0:a.getTextLabel())!=null?n:this.placeholder)!=null?l:""}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){let e=this.getAllOptions(),s=this.value;this.setSelectedOptions(e.filter(o=>s===o.value))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("cps-show"),this.addOpenListeners(),await f(this),this.menu.hidden=!1,this.flyout.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:s}=b(this,"dropdown.show",{dir:this.localize.dir()});await m(this.flyout.container,e,s),this.currentOption&&T(this.currentOption,this.menu,"vertical","auto"),this.emit("cps-after-show")}else{this.emit("cps-hide"),this.removeOpenListeners(),await f(this);let{keyframes:e,options:s}=b(this,"dropdown.hide",{dir:this.localize.dir()});await m(this.flyout.container,e,s),this.menu.hidden=!0,this.flyout.active=!1,this.emit("cps-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,g(this,"cps-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,g(this,"cps-after-hide")}focus(e){this.displaySpan.focus(e)}blur(){this.displaySpan.blur()}render(){let e=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value.length===0;return u`
      <cps-flyout
        class=${S({dropdown:!0,"dropdown--open":this.open,"dropdown--disabled":this.disabled,"dropdown--focused":this.hasFocus,"dropdown--placeholder-visible":s,"dropdown--top":this.placement==="top","dropdown--bottom":this.placement==="bottom","dropdown--small":this.size==="small","dropdown--medium":this.size==="medium","dropdown--large":this.size==="large"})}
        placement=${this.placement}
        strategy=${this.strategy}
        flip
        shift
        sync="min-width"
        auto-size="vertical"
        auto-size-padding="10"
        distance="10"
      >
        <div
          part="field"
          class="dropdown__field"
          slot="anchor"
          @keydown=${this.handleTriggerKeyDown}
          @mousedown=${this.handleTriggerMouseDown}
        >
          <slot part="prefix" name="prefix" class="dropdown__prefix"></slot>

          <span
            part="span"
            id=${this.generatedId}
            class="dropdown__display-span"
            type="text"
            aria-controls=${`${this.generatedId}-menu`}
            aria-expanded=${this.open?"true":"false"}
            aria-haspopup="true"
            aria-labelledby="label"
            aria-disabled=${this.disabled?"true":"false"}
            role="combobox"
            tabindex="0"
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          >
            ${this.displayText}
          </span>

          <input
            class="dropdown__value-input"
            type="text"
            ?disabled=${this.disabled}
            .value=${this.value}
            tabindex="-1"
            aria-hidden="true"
            @focus=${()=>this.focus()}
          />

          ${e?u`
                <cps-icon-button
                  part="clear-button"
                  exportparts="base:clear-button__base, icon:clear-button__icon"
                  name="dismiss"
                  library="system"
                  class="dropdown__clear"
                  aria-label=${this.localize.term("clearEntry")}
                  @mousedown=${this.handleClearMouseDown}
                  @click=${this.handleClearClick}
                  size=${this.size}
                ></cps-icon-button>
              `:""}

          <slot name="expand-icon" part="expand-icon" class="dropdown__expand-icon">
            <cps-icon library="system" name="caret"></cps-icon>
          </slot>
        </div>

        <div
          id=${`${this.generatedId}-menu`}
          role="listbox"
          aria-expanded=${this.open?"true":"false"}
          aria-labelledby=${`${this.generatedId}-label`}
          part="menu"
          class="dropdown__menu"
          tabindex="-1"
          @mouseup=${this.handleOptionClick}
          @slotchange=${this.handleDefaultSlotChange}
        >
          <slot></slot>
        </div>
      </cps-flyout>
    `}};v(t,"CpsDropdown"),t.styles=x,i([p(".dropdown")],t.prototype,"flyout",2),i([p(".dropdown__field")],t.prototype,"field",2),i([p(".dropdown__display-span")],t.prototype,"displaySpan",2),i([p(".dropdown__value-input")],t.prototype,"valueInput",2),i([p(".dropdown__menu")],t.prototype,"menu",2),i([h()],t.prototype,"hasFocus",2),i([h()],t.prototype,"generatedId",2),i([h()],t.prototype,"displayText",2),i([h()],t.prototype,"currentOption",2),i([h()],t.prototype,"selectedOptions",2),i([r()],t.prototype,"id",2),i([r({reflect:!0})],t.prototype,"value",2),i([r({reflect:!0})],t.prototype,"size",2),i([r()],t.prototype,"placeholder",2),i([r({type:Boolean,attribute:"keep-placeholder"})],t.prototype,"keepPlaceholder",2),i([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2),i([r({type:Boolean})],t.prototype,"clearable",2),i([r({type:Boolean,reflect:!0})],t.prototype,"open",2),i([r({reflect:!0})],t.prototype,"strategy",2),i([r({reflect:!0})],t.prototype,"placement",2),i([d("id")],t.prototype,"handleIdChange",1),i([d("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1),i([d("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1),i([d("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1),t=i([w("cps-dropdown")],t);y("dropdown.show",{keyframes:[{opacity:0,transform:"scaleY(0.75)"},{opacity:1,transform:"scaleY(1)"}],options:{duration:150,easing:"ease"}});y("dropdown.hide",{keyframes:[{opacity:1,transform:"scaleY(1)"},{opacity:0,transform:"scaleY(0.85)"}],options:{duration:150,easing:"ease"}});export{t as a};
