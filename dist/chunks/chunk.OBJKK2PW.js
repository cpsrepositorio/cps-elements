import {
  registerTranslation
} from "./chunk.5TY2HHCR.js";

// src/translations/de.ts
var translation = {
  $code: "de",
  $name: "Deutsch",
  $dir: "ltr",
  clearEntry: "Eingabe l\xF6schen",
  close: "Schlie\xDFen",
  copy: "Kopieren",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Keine Optionen ausgew\xE4hlt";
    if (num === 1)
      return "1 Option ausgew\xE4hlt";
    return `${num} Optionen ausgew\xE4hlt`;
  },
  currentValue: "Aktueller Wert",
  hidePassword: "Passwort verbergen",
  loading: "Wird geladen",
  progress: "Fortschritt",
  remove: "Entfernen",
  resize: "Gr\xF6\xDFe \xE4ndern",
  scrollToEnd: "Zum Ende scrollen",
  scrollToStart: "Zum Anfang scrollen",
  selectAColorFromTheScreen: "W\xE4hle eine Farbe vom Bildschirm",
  showPassword: "Passwort anzeigen",
  toggleColorFormat: "Farbformat umschalten"
};
registerTranslation(translation);
var de_default = translation;

export {
  de_default
};
