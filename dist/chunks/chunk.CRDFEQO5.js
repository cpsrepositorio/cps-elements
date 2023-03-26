import {
  spinner_styles_default
} from "./chunk.NJXTVEGO.js";
import {
  LocalizeController
} from "./chunk.M5NRRAMO.js";
import {
  BaseElement,
  e
} from "./chunk.ULXAVQYL.js";
import {
  x
} from "./chunk.N4SU3NRW.js";
import {
  __decorateClass
} from "./chunk.6M63UXML.js";

// src/components/spinner/index.ts
var CpsSpinner = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return x`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
CpsSpinner.styles = spinner_styles_default;
CpsSpinner = __decorateClass([
  e("cps-spinner")
], CpsSpinner);

export {
  CpsSpinner
};
