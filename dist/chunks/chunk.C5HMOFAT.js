import {
  getIconLibrary,
  unwatchIcon,
  watchIcon
} from "./chunk.EVAUWNUP.js";
import {
  requestIcon
} from "./chunk.P52GZVKG.js";
import {
  watch
} from "./chunk.C7FWPEOY.js";
import {
  BaseElement,
  e,
  e2,
  t
} from "./chunk.ULXAVQYL.js";
import {
  icon_styles_default
} from "./chunk.AMISQ2KG.js";
import {
  A,
  T,
  x
} from "./chunk.N4SU3NRW.js";
import {
  __decorateClass
} from "./chunk.6M63UXML.js";

// node_modules/lit-html/directive.js
var t2 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e3 = (t4) => (...e5) => ({ _$litDirective$: t4, values: e5 });
var i = class {
  constructor(t4) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t4, e5, i2) {
    this._$Ct = t4, this._$AM = e5, this._$Ci = i2;
  }
  _$AS(t4, e5) {
    return this.update(t4, e5);
  }
  update(t4, e5) {
    return this.render(...e5);
  }
};

// node_modules/lit-html/directives/unsafe-html.js
var e4 = class extends i {
  constructor(i2) {
    if (super(i2), this.it = A, i2.type !== t2.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r) {
    if (r === A || null == r)
      return this._t = void 0, this.it = r;
    if (r === T)
      return r;
    if ("string" != typeof r)
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r === this.it)
      return this._t;
    this.it = r;
    const s = [r];
    return s.raw = s, this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] };
  }
};
e4.directiveName = "unsafeHTML", e4.resultType = 1;
var o = e3(e4);

// node_modules/lit-html/directives/unsafe-svg.js
var t3 = class extends e4 {
};
t3.directiveName = "unsafeSVG", t3.resultType = 2;
var o2 = e3(t3);

// src/components/icon/index.ts
var parser;
var CpsIcon = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.svg = "";
    this.label = "";
    this.library = "default";
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    }
    return this.src;
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a;
    const library = getIconLibrary(this.library);
    const url = this.getUrl();
    if (!parser) {
      parser = new DOMParser();
    }
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, "text/html");
          const svgEl = doc.body.querySelector("svg");
          if (svgEl !== null) {
            (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, svgEl);
            this.svg = svgEl.outerHTML;
            this.emit("cps-load");
          } else {
            this.svg = "";
            this.emit("cps-error");
          }
        } else {
          this.svg = "";
          this.emit("cps-error");
        }
      } catch (e5) {
        this.emit("cps-error");
      }
    } else if (this.svg.length > 0) {
      this.svg = "";
    }
  }
  render() {
    return x` ${o2(this.svg)} `;
  }
};
CpsIcon.styles = icon_styles_default;
__decorateClass([
  t()
], CpsIcon.prototype, "svg", 2);
__decorateClass([
  e2({ reflect: true })
], CpsIcon.prototype, "name", 2);
__decorateClass([
  e2()
], CpsIcon.prototype, "src", 2);
__decorateClass([
  e2()
], CpsIcon.prototype, "label", 2);
__decorateClass([
  e2({ reflect: true })
], CpsIcon.prototype, "library", 2);
__decorateClass([
  watch("label")
], CpsIcon.prototype, "handleLabelChange", 1);
__decorateClass([
  watch(["name", "src", "library"])
], CpsIcon.prototype, "setIcon", 1);
CpsIcon = __decorateClass([
  e("cps-icon")
], CpsIcon);

export {
  t2 as t,
  e3 as e,
  i,
  CpsIcon
};
/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
