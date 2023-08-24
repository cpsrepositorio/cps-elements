import{a as M}from"./chunk.4OWDWETI.js";import{a as O,c as w,d as C}from"./chunk.4OACLEKC.js";import{a as x,c as $}from"./chunk.F7IHQ2QD.js";import{a as D}from"./chunk.OST2O6RI.js";import{a as k}from"./chunk.TBLM4WXU.js";import{b as T}from"./chunk.SP7FFJEJ.js";import{a as I}from"./chunk.2XELF4ZT.js";import{b as L}from"./chunk.KBGGAJDF.js";import{a as y}from"./chunk.SYMZGPTI.js";import{a as v}from"./chunk.4TY62YMM.js";import{a as E,b as r,c as m,d as f,e as _}from"./chunk.L6B5EOPQ.js";import{c as b}from"./chunk.FVWYSG5E.js";import{c as d,e as i}from"./chunk.K3RV6SX6.js";function A(p,a){return{top:Math.round(p.getBoundingClientRect().top-a.getBoundingClientRect().top),left:Math.round(p.getBoundingClientRect().left-a.getBoundingClientRect().left)}}d(A,"getOffset");function z(p,a,t="vertical",s="smooth"){let o=A(p,a),l=o.top+a.scrollTop,n=o.left+a.scrollLeft,c=a.scrollLeft,h=a.scrollLeft+a.offsetWidth,u=a.scrollTop,g=a.scrollTop+a.offsetHeight;(t==="horizontal"||t==="both")&&(n<c?a.scrollTo({left:n,behavior:s}):n+p.clientWidth>h&&a.scrollTo({left:n-a.offsetWidth+p.clientWidth,behavior:s})),(t==="vertical"||t==="both")&&(l<u?a.scrollTo({top:l,behavior:s}):l+p.clientHeight>g&&a.scrollTo({top:l-a.offsetHeight+p.clientHeight,behavior:s}))}d(z,"scrollIntoView");var e=class extends _{constructor(){super(...arguments);this.formControlController=new T(this,{assumeInteractionOn:["cps-blur","cps-input"]});this.hasSlotController=new I(this,"help-text","label");this.localize=new L(this);this.typeToSelectString="";this.hasFocus=!1;this.generatedId="";this.displayLabel="";this.selectedOptions=[];this.id="";this.name="";this.value="";this.defaultValue="";this.size="medium";this.placeholder="";this.multiple=!1;this.maxOptionsVisible=0;this.disabled=!1;this.clearable=!1;this.open=!1;this.strategy="absolute";this.label="";this.placement="bottom";this.helpText="";this.form="";this.required=!1}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}handleIdChange(){this.generatedId=k(this.id)}connectedCallback(){super.connectedCallback(),this.handleDocumentFocusIn=this.handleDocumentFocusIn.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("cps-focus")}handleBlur(){this.hasFocus=!1,this.emit("cps-blur")}handleDocumentFocusIn(t){let s=t.composedPath();this&&!s.includes(this)&&this.hide()}handleDocumentKeyDown(t){let s=t.target,o=s.closest(".select__clear")!==null,l=s.closest("cps-icon-button")!==null;if(o||l)return;if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("cps-input"),this.emit("cps-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}let n=this.getAllOptions().filter(c=>!c.disabled);if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;if(n.length>1){let c=n.indexOf(this.currentOption),h=Math.max(0,c),u=!1;for(;!u;)t.key==="ArrowDown"?(h=c+1,h>n.length-1&&(h=0)):t.key==="ArrowUp"?(h=c-1,h<0&&(h=n.length-1)):t.key==="Home"?h=0:t.key==="End"&&(h=n.length-1),n[h].disabled||(u=!0);this.setCurrentOption(n[h])}}if(t.key.length===1||t.key==="Backspace"){if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let c of n)if(c.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(c);break}}}handleDocumentMouseDown(t){let s=t.composedPath();this&&!s.includes(this)&&this.hide()}handleComboboxMouseDown(t){let o=t.composedPath().some(l=>l instanceof Element&&l.tagName.toLowerCase()==="cps-icon-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("cps-clear"),this.emit("cps-input"),this.emit("cps-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let o=t.target.closest("cps-option"),l=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==l&&this.updateComplete.then(()=>{this.emit("cps-input"),this.emit("cps-change",{detail:{option:o}})}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){let t=this.getAllOptions(),s=this.getAllLabels(),o=Array.isArray(this.value)?this.value:[this.value],l=[];this.multiple&&t.forEach(n=>n.type="checkbox"),s.forEach(n=>{n.size="label",n.variant="secondary"}),customElements.get("cps-option")?(t.forEach(n=>l.push(n.value)),this.setSelectedOptions(t.filter(n=>o.includes(n.value)))):customElements.whenDefined("cps-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,s){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(s,!1),this.updateComplete.then(()=>{this.emit("cps-input"),this.emit("cps-change")}))}getAllLabels(){return[...this.querySelectorAll("cps-label")]}getAllOptions(){return[...this.querySelectorAll("cps-option")]}getFirstOption(){return this.querySelector("cps-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let s=this.getAllOptions(),o=Array.isArray(t)?t:[t];this.multiple?(s.forEach(l=>l.selected=!1),o.length&&o.forEach(l=>l.selected=!0)):(s.forEach(l=>l.selected=!1),o.length&&o.forEach(l=>l.selected=!0)),this.selectionChanged()}toggleOptionSelection(t,s){s!==void 0?t.selected=s:t.selected=!t.selected,this.setCurrentOption(t),this.selectionChanged()}selectionChanged(){var t,s,o,l;this.selectedOptions=this.getAllOptions().filter(n=>n.selected),this.multiple?(this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(s=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?s:"",this.displayLabel=(l=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?l:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){let t=this.getAllOptions(),s=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(o=>s.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("cps-show"),this.addOpenListeners(),await w(this),this.menu.hidden=!1,this.flyout.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:s}=$(this,"select.show",{dir:this.localize.dir()});await O(this.flyout.container,t,s),this.currentOption&&z(this.currentOption,this.menu,"vertical","auto"),this.emit("cps-after-show")}else{this.emit("cps-hide"),this.removeOpenListeners(),await w(this);let{keyframes:t,options:s}=$(this,"select.hide",{dir:this.localize.dir()});await O(this.flyout.container,t,s),this.menu.hidden=!0,this.flyout.active=!1,this.emit("cps-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,C(this,"cps-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,C(this,"cps-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,l=this.helpText?!0:!!s,n=this.clearable&&!this.disabled&&this.value.length>0,c=this.placeholder&&this.value.length===0;return b`
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
            class=${v({select:!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":c,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.strategy}
            flip
            shift
            sync="width"
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

              ${this.multiple?b`
                    <div part="chips" class="select__chips">
                      ${this.selectedOptions.map((h,u)=>u<this.maxOptionsVisible||this.maxOptionsVisible<=0?b`
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
                              @cps-remove=${g=>this.handleTagRemove(g,h)}
                            >
                              ${h.getTextLabel()}
                            </cps-chip>
                          `:u===this.maxOptionsVisible?b`
                            <cps-chip part="chip" size=${this.size}> +${this.selectedOptions.length-u} </cps-chip>
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

              ${n?b`
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
    `}};d(e,"CpsSelect"),e.styles=M,i([f(".select")],e.prototype,"flyout",2),i([f(".select__field")],e.prototype,"field",2),i([f(".select__display-input")],e.prototype,"displayInput",2),i([f(".select__value-input")],e.prototype,"valueInput",2),i([f(".select__menu")],e.prototype,"menu",2),i([m()],e.prototype,"hasFocus",2),i([m()],e.prototype,"generatedId",2),i([m()],e.prototype,"displayLabel",2),i([m()],e.prototype,"currentOption",2),i([m()],e.prototype,"selectedOptions",2),i([r()],e.prototype,"id",2),i([r()],e.prototype,"name",2),i([r({converter:{fromAttribute:p=>p.split(" "),toAttribute:p=>p.join(" ")}})],e.prototype,"value",2),i([D()],e.prototype,"defaultValue",2),i([r({reflect:!0})],e.prototype,"size",2),i([r()],e.prototype,"placeholder",2),i([r({type:Boolean,reflect:!0})],e.prototype,"multiple",2),i([r({attribute:"max-options-visible",type:Number})],e.prototype,"maxOptionsVisible",2),i([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2),i([r({type:Boolean})],e.prototype,"clearable",2),i([r({type:Boolean,reflect:!0})],e.prototype,"open",2),i([r({reflect:!0})],e.prototype,"strategy",2),i([r()],e.prototype,"label",2),i([r({reflect:!0})],e.prototype,"placement",2),i([r({attribute:"help-text"})],e.prototype,"helpText",2),i([r({reflect:!0})],e.prototype,"form",2),i([r({type:Boolean,reflect:!0})],e.prototype,"required",2),i([y("id")],e.prototype,"handleIdChange",1),i([y("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1),i([y("value",{waitUntilFirstUpdate:!0})],e.prototype,"handleValueChange",1),i([y("open",{waitUntilFirstUpdate:!0})],e.prototype,"handleOpenChange",1),e=i([E("cps-select")],e);x("select.show",{keyframes:[{opacity:0,transform:"scaleY(0.75)"},{opacity:1,transform:"scaleY(1)"}],options:{duration:150,easing:"ease"}});x("select.hide",{keyframes:[{opacity:1,transform:"scaleY(1)"},{opacity:0,transform:"scaleY(0.85)"}],options:{duration:150,easing:"ease"}});export{e as a};
