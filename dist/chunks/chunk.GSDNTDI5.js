import {
  FormControlController,
  validValidityState
} from "./chunk.WAIVLZ43.js";
import {
  LocalizeController
} from "./chunk.M5NRRAMO.js";
import {
  button_styles_default
} from "./chunk.VYTNGDY3.js";
import {
  e as e3,
  i as i2,
  t as t2
} from "./chunk.QAVYTXS2.js";
import {
  watch
} from "./chunk.C7FWPEOY.js";
import {
  BaseElement,
  e,
  e2,
  i,
  t
} from "./chunk.KLFQZSBV.js";
import {
  b,
  w,
  x,
  y
} from "./chunk.JQQCW4UB.js";
import {
  __decorateClass
} from "./chunk.6M63UXML.js";

// node_modules/lit-html/directives/class-map.js
var o = e3(class extends i2 {
  constructor(t3) {
    var i4;
    if (super(t3), t3.type !== t2.ATTRIBUTE || "class" !== t3.name || (null === (i4 = t3.strings) || void 0 === i4 ? void 0 : i4.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t3) {
    return " " + Object.keys(t3).filter((i4) => t3[i4]).join(" ") + " ";
  }
  update(i4, [s2]) {
    var r, o2;
    if (void 0 === this.nt) {
      this.nt = /* @__PURE__ */ new Set(), void 0 !== i4.strings && (this.st = new Set(i4.strings.join(" ").split(/\s/).filter((t3) => "" !== t3)));
      for (const t3 in s2)
        s2[t3] && !(null === (r = this.st) || void 0 === r ? void 0 : r.has(t3)) && this.nt.add(t3);
      return this.render(s2);
    }
    const e5 = i4.element.classList;
    this.nt.forEach((t3) => {
      t3 in s2 || (e5.remove(t3), this.nt.delete(t3));
    });
    for (const t3 in s2) {
      const i5 = !!s2[t3];
      i5 === this.nt.has(t3) || (null === (o2 = this.st) || void 0 === o2 ? void 0 : o2.has(t3)) || (i5 ? (e5.add(t3), this.nt.add(t3)) : (e5.remove(t3), this.nt.delete(t3)));
    }
    return x;
  }
});

// src/internal/slot.ts
var HasSlotController = class {
  constructor(host, ...slotNames) {
    this.slotNames = [];
    (this.host = host).addController(this);
    this.slotNames = slotNames;
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        const tagName = el.tagName.toLowerCase();
        if (tagName === "cps-visually-hidden") {
          return false;
        }
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  test(slotName) {
    return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
  handleSlotChange(event) {
    const slot = event.target;
    if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
      this.host.requestUpdate();
    }
  }
};

// node_modules/lit-html/static.js
var e4 = Symbol.for("");
var l = (t3) => {
  if ((null == t3 ? void 0 : t3.r) === e4)
    return null == t3 ? void 0 : t3._$litStatic$;
};
var i3 = (t3, ...r) => ({ _$litStatic$: r.reduce((r2, e5, l3) => r2 + ((t4) => {
  if (void 0 !== t4._$litStatic$)
    return t4._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t4}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(e5) + t3[l3 + 1], t3[0]), r: e4 });
var s = /* @__PURE__ */ new Map();
var a = (t3) => (r, ...e5) => {
  const o2 = e5.length;
  let i4, a2;
  const n2 = [], u2 = [];
  let c, $ = 0, f = false;
  for (; $ < o2; ) {
    for (c = r[$]; $ < o2 && void 0 !== (a2 = e5[$], i4 = l(a2)); )
      c += i4 + r[++$], f = true;
    u2.push(a2), n2.push(c), $++;
  }
  if ($ === o2 && n2.push(r[o2]), f) {
    const t4 = n2.join("$$lit$$");
    void 0 === (r = s.get(t4)) && (n2.raw = n2, s.set(t4, r = n2)), e5 = u2;
  }
  return t3(r, ...e5);
};
var n = a(y);
var u = a(w);

// node_modules/lit-html/directives/if-defined.js
var l2 = (l3) => null != l3 ? l3 : b;

// src/components/button/button.ts
var CpsButton = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      form: (input) => {
        if (input.hasAttribute("form")) {
          const doc = input.getRootNode();
          const formId = input.getAttribute("form");
          return doc.getElementById(formId);
        }
        return input.closest("form");
      },
      assumeInteractionOn: ["click"]
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.localize = new LocalizeController(this);
    this.isFocused = false;
    this.invalid = false;
    this.title = "";
    this.variant = "default";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.waiting = false;
    this.rounded = "default";
    this.type = "button";
    this.name = "";
    this.value = "";
    this.href = "";
  }
  /** Obtém o objeto de estado de validade do botão. */
  get validity() {
    if (this.isButton()) {
      return this.button.validity;
    }
    return validValidityState;
  }
  /** Obtém a mensagem de validação do botão. */
  get validationMessage() {
    if (this.isButton()) {
      return this.button.validationMessage;
    }
    return "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleHostClick = this.handleHostClick.bind(this);
    this.addEventListener("click", this.handleHostClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
  }
  firstUpdated() {
    if (this.isButton()) {
      this.formControlController.updateValidity();
    }
  }
  handleBlur() {
    this.isFocused = false;
    this.emit("cps-blur");
  }
  handleFocus() {
    this.isFocused = true;
    this.emit("cps-focus");
  }
  handleClick() {
    if (this.type === "submit") {
      this.formControlController.submit(this);
    }
    if (this.type === "reset") {
      this.formControlController.reset(this);
    }
  }
  handleHostClick(event) {
    if (this.disabled || this.waiting) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  isButton() {
    return this.href ? false : true;
  }
  isLink() {
    return this.href ? true : false;
  }
  handleDisabledChange() {
    if (this.isButton()) {
      this.formControlController.setValidity(this.disabled);
    }
  }
  /** Simula um _click_ no botão. */
  click() {
    this.button.click();
  }
  /** Coloca o foco no botão. */
  focus(options) {
    this.button.focus(options);
  }
  /** Remove o foco do botão. */
  blur() {
    this.button.blur();
  }
  /** Verifica a validade em um formulário, sem exibir uma mensagem de validação. Retorna `true` quando válido, e `false` quando inválido. */
  checkValidity() {
    if (this.isButton()) {
      return this.button.checkValidity();
    }
    return true;
  }
  /** Verifica a validade em um formulário, e exibe as mensagem de validação do navegador caso o resultado seja inválido. */
  reportValidity() {
    if (this.isButton()) {
      return this.button.reportValidity();
    }
    return true;
  }
  /** Define uma mensagem de validação personalizada. Passar uma `string` vazia como argumento restaura a validade do elemento. */
  setCustomValidity(message) {
    if (this.isButton()) {
      this.button.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
  }
  render() {
    const isLink = this.isLink();
    const tag = isLink ? i3`a` : i3`button`;
    return n`
      <${tag}
        part="base"
        class=${o({
      button: true,
      "button--default": this.variant === "default",
      "button--accent": this.variant === "accent",
      "button--transparent": this.variant === "transparent",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.rounded === "full",
      "button--corner": this.rounded === "corner",
      "button--disabled": this.disabled,
      "button--focused": this.isFocused,
      "button--waiting": this.waiting,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${l2(isLink ? void 0 : this.disabled)}
        type=${l2(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${l2(isLink ? void 0 : this.name)}
        value=${l2(isLink ? void 0 : this.value)}
        href=${l2(isLink ? this.href : void 0)}
        target=${l2(isLink ? this.target : void 0)}
        download=${l2(isLink ? this.download : void 0)}
        rel=${l2(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l2(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="content" class="button__content"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? n` <cps-icon part="caret" class="button__caret" library="system" name="caret"></cps-icon> ` : ""}
        ${this.waiting ? n`<cps-spinner></cps-spinner>` : ""}
      </${tag}>
    `;
  }
};
CpsButton.styles = button_styles_default;
__decorateClass([
  i(".button")
], CpsButton.prototype, "button", 2);
__decorateClass([
  t()
], CpsButton.prototype, "isFocused", 2);
__decorateClass([
  t()
], CpsButton.prototype, "invalid", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "title", 2);
__decorateClass([
  e2({ reflect: true })
], CpsButton.prototype, "variant", 2);
__decorateClass([
  e2({ reflect: true })
], CpsButton.prototype, "size", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], CpsButton.prototype, "caret", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], CpsButton.prototype, "disabled", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], CpsButton.prototype, "waiting", 2);
__decorateClass([
  e2({ reflect: true })
], CpsButton.prototype, "rounded", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "type", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "name", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "value", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "href", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "target", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "download", 2);
__decorateClass([
  e2()
], CpsButton.prototype, "form", 2);
__decorateClass([
  e2({ attribute: "formaction" })
], CpsButton.prototype, "formAction", 2);
__decorateClass([
  e2({ attribute: "formenctype" })
], CpsButton.prototype, "formEnctype", 2);
__decorateClass([
  e2({ attribute: "formmethod" })
], CpsButton.prototype, "formMethod", 2);
__decorateClass([
  e2({ attribute: "formnovalidate", type: Boolean })
], CpsButton.prototype, "formNoValidate", 2);
__decorateClass([
  e2({ attribute: "formtarget" })
], CpsButton.prototype, "formTarget", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], CpsButton.prototype, "handleDisabledChange", 1);
CpsButton = __decorateClass([
  e("cps-button")
], CpsButton);

export {
  CpsButton
};
/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
