import "../chunks/chunk.M5NRRAMO.js";
import {
  registerTranslation
} from "../chunks/chunk.5TY2HHCR.js";
import "../chunks/chunk.6M63UXML.js";

// src/translations/sv.ts
var translation = {
  $code: "sv",
  $name: "Svenska",
  $dir: "ltr",
  clearEntry: "\xC5terst\xE4ll val",
  close: "St\xE4ng",
  copy: "Kopiera",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Inga alternativ har valts";
    if (num === 1)
      return "1 alternativ valt";
    return `${num} alternativ valda`;
  },
  currentValue: "Nuvarande v\xE4rde",
  hidePassword: "D\xF6lj l\xF6senord",
  loading: "L\xE4ser in",
  progress: "Framsteg",
  remove: "Ta bort",
  resize: "\xC4ndra storlek",
  scrollToEnd: "Skrolla till slutet",
  scrollToStart: "Skrolla till b\xF6rjan",
  selectAColorFromTheScreen: "V\xE4lj en f\xE4rg fr\xE5n sk\xE4rmen",
  showPassword: "Visa l\xF6senord",
  toggleColorFormat: "V\xE4xla f\xE4rgformat"
};
registerTranslation(translation);
var sv_default = translation;
export {
  sv_default as default
};
