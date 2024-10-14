import{a as T}from"./chunk.WKJUQVMV.js";import{a as E}from"./chunk.7DH2XHEB.js";import{b as D}from"./chunk.5DUF7374.js";import{a as k}from"./chunk.5H4GFJPQ.js";import{a as L}from"./chunk.TBLM4WXU.js";import{a as b,c as y,d as w}from"./chunk.4OACLEKC.js";import{a as g,c as O}from"./chunk.F7IHQ2QD.js";import{b as I}from"./chunk.KBGGAJDF.js";import{a as m}from"./chunk.SYMZGPTI.js";import{a as _}from"./chunk.2XELF4ZT.js";import{a as v}from"./chunk.FBB7MPWZ.js";import{a as $,b as n,c,d as u,e as x}from"./chunk.X76EUGAE.js";import{a as d}from"./chunk.D7J5WK6X.js";import{c as C,e as i}from"./chunk.K3RV6SX6.js";var t=class extends x{constructor(){super(...arguments);this.formControlController=new D(this,{assumeInteractionOn:["cps-blur","cps-input"]});this.hasSlotController=new _(this,"help-text","label");this.localize=new I(this);this.typeToSelectString="";this.hasFocus=!1;this.generatedId="";this.displayLabel="";this.selectedOptions=[];this.id="";this.name="";this.value="";this.defaultValue="";this.size="medium";this.placeholder="";this.multiple=!1;this.maxOptionsVisible=0;this.disabled=!1;this.clearable=!1;this.open=!1;this.strategy="absolute";this.label="";this.placement="bottom";this.helpText="";this.form="";this.required=!1}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}handleIdChange(){this.generatedId=L(this.id)}connectedCallback(){super.connectedCallback(),this.handleDocumentFocusIn=this.handleDocumentFocusIn.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("cps-focus")}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleDocumentFocusIn(e){let s=e.composedPath();this&&!s.includes(this)&&this.hide()}handleDocumentKeyDown(e){let s=e.target,o=s.closest(".select__clear")!==null,l=s.closest("cps-icon-button")!==null;if(o||l)return;if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.formControlController.updateValidity(!0),this.emit("cps-input"),this.emit("cps-change",{detail:{option:this.currentOption}})}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}let a=this.getAllOptions().filter(h=>!h.disabled);if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;if(a.length>1){let h=a.indexOf(this.currentOption),r=Math.max(0,h),p=!1;for(;!p;)e.key==="ArrowDown"?(r=h+1,r>a.length-1&&(r=0)):e.key==="ArrowUp"?(r=h-1,r<0&&(r=a.length-1)):e.key==="Home"?r=0:e.key==="End"&&(r=a.length-1),a[r].disabled||(p=!0);this.setCurrentOption(a[r])}}if(e.key.length===1||e.key==="Backspace"){if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let h of a)if(h.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(h);break}}}handleDocumentMouseDown(e){let s=e.composedPath();this&&!s.includes(this)&&this.hide()}handleComboboxMouseDown(e){let o=e.composedPath().some(l=>l instanceof Element&&l.tagName.toLowerCase()==="cps-icon-button");this.disabled||o||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.formControlController.updateValidity(!0),this.emit("cps-clear"),this.emit("cps-input"),this.emit("cps-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let o=e.target.closest("cps-option"),l=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==l&&this.updateComplete.then(()=>{this.formControlController.updateValidity(!0),this.emit("cps-input"),this.emit("cps-change",{detail:{option:o}})}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){let e=this.getAllOptions(),s=this.getAllLabels(),o=Array.isArray(this.value)?this.value:[this.value],l=[];this.multiple&&e.forEach(a=>a.type="checkbox"),s.forEach(a=>{a.size="label",a.variant="secondary"}),customElements.get("cps-option")?(e.forEach(a=>l.push(a.value)),this.setSelectedOptions(e.filter(a=>o.includes(a.value)))):customElements.whenDefined("cps-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,s){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(s,!1),this.updateComplete.then(()=>{this.formControlController.updateValidity(!0),this.emit("cps-input"),this.emit("cps-change")}))}getAllLabels(){return[...this.querySelectorAll("cps-label")]}getAllOptions(){return[...this.querySelectorAll("cps-option")]}getFirstOption(){return this.querySelector("cps-option")}setCurrentOption(e){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let s=this.getAllOptions(),o=Array.isArray(e)?e:[e];this.multiple?(s.forEach(l=>l.selected=!1),o.length&&o.forEach(l=>l.selected=!0)):(s.forEach(l=>l.selected=!1),o.length&&o.forEach(l=>l.selected=!0)),this.selectionChanged()}toggleOptionSelection(e,s){s!==void 0?e.selected=s:e.selected=!e.selected,this.setCurrentOption(e),this.selectionChanged()}selectionChanged(){var e,s,o,l;this.selectedOptions=this.getAllOptions().filter(a=>a.selected),this.multiple?(this.value=this.selectedOptions.map(a=>a.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(s=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?s:"",this.displayLabel=(l=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?l:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){let e=this.getAllOptions(),s=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(o=>s.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("cps-show"),this.addOpenListeners(),await y(this),this.menu.hidden=!1,this.flyout.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:s}=O(this,"select.show",{dir:this.localize.dir()});await b(this.flyout.container,e,s),this.currentOption&&k(this.currentOption,this.menu,"vertical","auto"),this.emit("cps-after-show")}else{this.emit("cps-hide"),this.removeOpenListeners(),await y(this);let{keyframes:e,options:s}=O(this,"select.hide",{dir:this.localize.dir()});await b(this.flyout.container,e,s),this.menu.hidden=!0,this.flyout.active=!1,this.emit("cps-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,w(this,"cps-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,w(this,"cps-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,l=this.helpText?!0:!!s,a=this.clearable&&!this.disabled&&this.value.length>0,h=this.placeholder&&this.value.length===0;return d`
      <div
        part="form-control"
        class=${v({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":l})}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <cps-flyout
            class=${v({select:!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":h,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
              class="select__field"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="input"
                id=${this.generatedId}
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls=${`${this.generatedId}-menu`}
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="true"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby=${l?`${this.generatedId}-help-text`:void 0}
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?d`
                    <div part="chips" class="select__chips">
                      ${this.selectedOptions.map((r,p)=>p<this.maxOptionsVisible||this.maxOptionsVisible<=0?d`
                            <cps-chip
                              part="chip"
                              exportparts="
                                base:chip__base,
                                content:chip__content,
                                remove-button:chip__remove-button,
                                remove-button__base:chip__remove-button__base
                                remove-button__icon:chip__remove-button__icon
                              "
                              size=${this.size}
                              ?removable=${!this.disabled}
                              @cps-remove=${A=>this.handleTagRemove(A,r)}
                            >
                              ${r.getTextLabel()}
                            </cps-chip>
                          `:p===this.maxOptionsVisible?d`
                            <cps-chip part="chip" size=${this.size}> +${this.selectedOptions.length-p} </cps-chip>
                          `:null)}
                    </div>
                  `:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${a?d`
                    <cps-icon-button
                      part="clear-button"
                      exportparts="base:clear-button__base, icon:clear-button__icon"
                      name="dismiss"
                      library="system"
                      class="select__clear"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      size=${this.size}
                    ></cps-icon-button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <cps-icon library="system" name="caret"></cps-icon>
              </slot>
            </div>

            <div
              id=${`${this.generatedId}-menu`}
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby=${`${this.generatedId}-label`}
              part="menu"
              class="select__menu"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </cps-flyout>
        </div>

        <slot
          name="help-text"
          id=${`${this.generatedId}-help-text`}
          part="form-control-help-text"
          class="form-control__help-text"
          aria-hidden=${l?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};C(t,"CpsSelect"),t.styles=T,i([u(".select")],t.prototype,"flyout",2),i([u(".select__field")],t.prototype,"field",2),i([u(".select__display-input")],t.prototype,"displayInput",2),i([u(".select__value-input")],t.prototype,"valueInput",2),i([u(".select__menu")],t.prototype,"menu",2),i([c()],t.prototype,"hasFocus",2),i([c()],t.prototype,"generatedId",2),i([c()],t.prototype,"displayLabel",2),i([c()],t.prototype,"currentOption",2),i([c()],t.prototype,"selectedOptions",2),i([n()],t.prototype,"id",2),i([n()],t.prototype,"name",2),i([n({converter:{fromAttribute:f=>f.split(" "),toAttribute:f=>f.join(" ")}})],t.prototype,"value",2),i([E()],t.prototype,"defaultValue",2),i([n({reflect:!0})],t.prototype,"size",2),i([n()],t.prototype,"placeholder",2),i([n({type:Boolean,reflect:!0})],t.prototype,"multiple",2),i([n({attribute:"max-options-visible",type:Number})],t.prototype,"maxOptionsVisible",2),i([n({type:Boolean,reflect:!0})],t.prototype,"disabled",2),i([n({type:Boolean})],t.prototype,"clearable",2),i([n({type:Boolean,reflect:!0})],t.prototype,"open",2),i([n({reflect:!0})],t.prototype,"strategy",2),i([n()],t.prototype,"label",2),i([n({reflect:!0})],t.prototype,"placement",2),i([n({attribute:"help-text"})],t.prototype,"helpText",2),i([n({reflect:!0})],t.prototype,"form",2),i([n({type:Boolean,reflect:!0})],t.prototype,"required",2),i([m("id")],t.prototype,"handleIdChange",1),i([m("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1),i([m("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1),i([m("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1),t=i([$("cps-select")],t);g("select.show",{keyframes:[{opacity:0,transform:"scaleY(0.75)"},{opacity:1,transform:"scaleY(1)"}],options:{duration:150,easing:"ease"}});g("select.hide",{keyframes:[{opacity:1,transform:"scaleY(1)"},{opacity:0,transform:"scaleY(0.85)"}],options:{duration:150,easing:"ease"}});export{t as a};
