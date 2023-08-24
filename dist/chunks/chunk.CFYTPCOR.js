import{a as g}from"./chunk.4OLEKB76.js";import{b as y,c as v}from"./chunk.SP7FFJEJ.js";import{a as p}from"./chunk.2XELF4ZT.js";import{b}from"./chunk.KBGGAJDF.js";import{a as n,b as a}from"./chunk.HLCEHFXO.js";import{a as o}from"./chunk.3TAG5MLH.js";import{a as h}from"./chunk.SYMZGPTI.js";import{a as m}from"./chunk.4TY62YMM.js";import{a as u,b as r,c as s,d as f,e as c}from"./chunk.L6B5EOPQ.js";import{c as d,e}from"./chunk.K3RV6SX6.js";var t=class extends c{constructor(){super(...arguments);this.formControlController=new y(this,{form:i=>{if(i.hasAttribute("form")){let l=i.getRootNode(),k=i.getAttribute("form");return l.getElementById(k)}return i.closest("form")},assumeInteractionOn:["click"]});this.hasSlotController=new p(this,"[default]","prefix","suffix");this.localize=new b(this);this.isFocused=!1;this.invalid=!1;this.title="";this.variant="default";this.size="medium";this.caret=!1;this.disabled=!1;this.waiting=!1;this.rounded="default";this.type="button";this.name="";this.value="";this.href="";this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:v}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.isFocused=!1,this.emit("cps-blur")}handleFocus(){this.isFocused=!0,this.emit("cps-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(i){(this.disabled||this.waiting)&&(i.preventDefault(),i.stopImmediatePropagation())}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){let i=this.isLink(),l=i?n`a`:n`button`;return a`
      <${l}
        part="base"
        class=${m({button:!0,"button--default":this.variant==="default","button--accent":this.variant==="accent","button--transparent":this.variant==="transparent","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.rounded==="full","button--corner":this.rounded==="corner","button--disabled":this.disabled,"button--focused":this.isFocused,"button--waiting":this.waiting,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${o(i?void 0:this.disabled)}
        type=${o(i?void 0:this.type)}
        title=${this.title}
        name=${o(i?void 0:this.name)}
        value=${o(i?void 0:this.value)}
        href=${o(i?this.href:void 0)}
        target=${o(i?this.target:void 0)}
        download=${o(i?this.download:void 0)}
        rel=${o(i?this.rel:void 0)}
        role=${o(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="content" class="button__content"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?a` <cps-icon part="caret" class="button__caret" library="system" name="caret"></cps-icon> `:""}
        ${this.waiting?a`<cps-spinner></cps-spinner>`:""}
      </${l}>
    `}};d(t,"CpsButton"),t.styles=g,e([f(".button")],t.prototype,"button",2),e([s()],t.prototype,"isFocused",2),e([s()],t.prototype,"invalid",2),e([r()],t.prototype,"title",2),e([r({reflect:!0})],t.prototype,"variant",2),e([r({reflect:!0})],t.prototype,"size",2),e([r({type:Boolean,reflect:!0})],t.prototype,"caret",2),e([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2),e([r({type:Boolean,reflect:!0})],t.prototype,"waiting",2),e([r({reflect:!0})],t.prototype,"rounded",2),e([r()],t.prototype,"type",2),e([r()],t.prototype,"name",2),e([r()],t.prototype,"value",2),e([r()],t.prototype,"href",2),e([r()],t.prototype,"target",2),e([r()],t.prototype,"rel",2),e([r()],t.prototype,"download",2),e([r()],t.prototype,"form",2),e([r({attribute:"formaction"})],t.prototype,"formAction",2),e([r({attribute:"formenctype"})],t.prototype,"formEnctype",2),e([r({attribute:"formmethod"})],t.prototype,"formMethod",2),e([r({attribute:"formnovalidate",type:Boolean})],t.prototype,"formNoValidate",2),e([r({attribute:"formtarget"})],t.prototype,"formTarget",2),e([h("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1),t=e([u("cps-button")],t);export{t as a};
