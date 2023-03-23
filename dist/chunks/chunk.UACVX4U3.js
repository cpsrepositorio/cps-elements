import {
  include_styles_default
} from "./chunk.K3DUMMUS.js";
import {
  watch
} from "./chunk.C7FWPEOY.js";
import {
  BaseElement,
  e,
  e2
} from "./chunk.KLFQZSBV.js";
import {
  requestInclude
} from "./chunk.RPB53XXV.js";
import {
  y
} from "./chunk.JQQCW4UB.js";
import {
  __decorateClass
} from "./chunk.6M63UXML.js";

// src/components/include/include.ts
var CpsInclude = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        this.emit("cps-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      this.emit("cps-load");
    } catch (e3) {
      this.emit("cps-error", { detail: { status: -1 } });
    }
  }
  render() {
    return y`<slot></slot>`;
  }
};
CpsInclude.styles = include_styles_default;
__decorateClass([
  e2()
], CpsInclude.prototype, "src", 2);
__decorateClass([
  e2()
], CpsInclude.prototype, "mode", 2);
__decorateClass([
  e2({ attribute: "allow-scripts", type: Boolean })
], CpsInclude.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], CpsInclude.prototype, "handleSrcChange", 1);
CpsInclude = __decorateClass([
  e("cps-include")
], CpsInclude);

export {
  CpsInclude
};
