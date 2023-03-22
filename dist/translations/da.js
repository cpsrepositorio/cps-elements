import "../chunks/chunk.M5NRRAMO.js";
import {
  registerTranslation
} from "../chunks/chunk.5TY2HHCR.js";
import "../chunks/chunk.6M63UXML.js";

// src/translations/da.ts
var translation = {
  $code: "da",
  $name: "Dansk",
  $dir: "ltr",
  clearEntry: "Ryd indtastning",
  close: "Luk",
  copy: "Kopier",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Ingen valgt";
    if (num === 1)
      return "1 valgt";
    return `${num} valgt`;
  },
  currentValue: "Nuv\xE6rende v\xE6rdi",
  hidePassword: "Skjul adgangskode",
  loading: "Indl\xE6ser",
  progress: "Status",
  remove: "Fjern",
  resize: "Tilpas st\xF8rrelse",
  scrollToEnd: "Scroll til slut",
  scrollToStart: "Scroll til start",
  selectAColorFromTheScreen: "V\xE6lg en farve fra sk\xE6rmen",
  showPassword: "Vis adgangskode",
  toggleColorFormat: "Skift farveformat"
};
registerTranslation(translation);
var da_default = translation;
export {
  da_default as default
};
