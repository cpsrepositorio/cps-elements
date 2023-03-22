import "../chunks/chunk.M5NRRAMO.js";
import {
  registerTranslation
} from "../chunks/chunk.5TY2HHCR.js";
import "../chunks/chunk.6M63UXML.js";

// src/translations/tr.ts
var translation = {
  $code: "tr",
  $name: "T\xFCrk\xE7e",
  $dir: "ltr",
  clearEntry: "Giri\u015Fi sil",
  close: "Kapat",
  copy: "Kopya",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Hi\xE7bir se\xE7enek se\xE7ilmedi";
    if (num === 1)
      return "1 se\xE7enek se\xE7ildi";
    return `${num} se\xE7enek se\xE7ildi`;
  },
  currentValue: "Mevcut de\u011Fer",
  hidePassword: "\u015Eifreyi sakla",
  loading: "Y\xFCkleme",
  progress: "\u0130lerleme",
  remove: "Kald\u0131r",
  resize: "Yeniden boyutland\u0131r",
  scrollToEnd: "Sona kay",
  scrollToStart: "Ba\u015Fa kay",
  selectAColorFromTheScreen: "Ekrandan bir renk se\xE7in",
  showPassword: "\u015Eifreyi g\xF6ster",
  toggleColorFormat: "Renk bi\xE7imini de\u011Fi\u015Ftir"
};
registerTranslation(translation);
var tr_default = translation;
export {
  tr_default as default
};
