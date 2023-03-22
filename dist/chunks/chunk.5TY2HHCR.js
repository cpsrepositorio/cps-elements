import {
  __spreadValues
} from "./chunk.6M63UXML.js";

// src/utilities/localize-core.ts
var connectedElements = /* @__PURE__ */ new Set();
var documentElementObserver = new MutationObserver(update);
var translations = /* @__PURE__ */ new Map();
var documentDirection = document.documentElement.dir || "ltr";
var documentLanguage = document.documentElement.lang || navigator.language;
var fallback;
documentElementObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["dir", "lang"]
});
function registerTranslation(...translation) {
  if (!translations) {
    translations = /* @__PURE__ */ new Map();
  }
  translation.forEach((t) => {
    const code = t.$code.toLowerCase();
    if (translations.has(code)) {
      translations.set(code, __spreadValues(__spreadValues({}, translations.get(code)), t));
    } else {
      translations.set(code, t);
    }
    if (!fallback) {
      fallback = t;
    }
  });
  update();
}
function update() {
  documentDirection = document.documentElement.dir || "ltr";
  documentLanguage = document.documentElement.lang || navigator.language;
  if (!connectedElements) {
    connectedElements = /* @__PURE__ */ new Set();
  }
  [...connectedElements.keys()].forEach((el) => {
    if (typeof el.requestUpdate === "function") {
      el.requestUpdate();
    }
  });
}
var LocalizeController = class {
  constructor(host) {
    this.host = host;
    this.host.addController(this);
  }
  hostConnected() {
    connectedElements.add(this.host);
  }
  hostDisconnected() {
    connectedElements.delete(this.host);
  }
  /**
   * Gets the host element's directionality as determined by the `dir` attribute. The return value is transformed to
   * lowercase.
   */
  dir() {
    return `${this.host.dir || documentDirection}`.toLowerCase();
  }
  /**
   * Gets the host element's language as determined by the `lang` attribute. The return value is transformed to
   * lowercase.
   */
  lang() {
    return `${this.host.lang || documentLanguage}`.toLowerCase();
  }
  getTranslationData(lang) {
    var _a, _b;
    const locale = new Intl.Locale(lang);
    const language = locale == null ? void 0 : locale.language.toLowerCase();
    const region = (_b = (_a = locale == null ? void 0 : locale.region) == null ? void 0 : _a.toLowerCase()) != null ? _b : "";
    const primary = translations.get(`${language}-${region}`);
    const secondary = translations.get(language);
    return { locale, language, region, primary, secondary };
  }
  /** Determines if the specified term exists, optionally checking the fallback translation. */
  exists(key, options) {
    var _a;
    const { primary, secondary } = this.getTranslationData((_a = options.lang) != null ? _a : this.lang());
    options = __spreadValues({
      includeFallback: false
    }, options);
    if ((primary == null ? void 0 : primary[key]) || (secondary == null ? void 0 : secondary[key]) || options.includeFallback && fallback && fallback[key]) {
      return true;
    }
    return false;
  }
  /** Outputs a translated term. */
  term(key, ...args) {
    const { primary, secondary } = this.getTranslationData(this.lang());
    let term;
    if (primary == null ? void 0 : primary[key]) {
      term = primary[key];
    } else if (secondary == null ? void 0 : secondary[key]) {
      term = secondary[key];
    } else if (fallback && fallback[key]) {
      term = fallback[key];
    } else {
      console.error(`No translation found for: ${String(key)}`);
      return String(key);
    }
    if (typeof term === "function") {
      return term(...args);
    }
    return term;
  }
  /** Outputs a localized date in the specified format. */
  date(dateToFormat, options) {
    dateToFormat = new Date(dateToFormat);
    return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
  }
  /** Outputs a localized number in the specified format. */
  number(numberToFormat, options) {
    numberToFormat = Number(numberToFormat);
    return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
  }
  /** Outputs a localized time in relative format. */
  relativeTime(value, unit, options) {
    return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
  }
};

export {
  registerTranslation,
  update,
  LocalizeController
};
