import "../chunks/chunk.M5NRRAMO.js";
import {
  registerTranslation
} from "../chunks/chunk.5TY2HHCR.js";
import "../chunks/chunk.6M63UXML.js";

// src/translations/pl.ts
var translation = {
  $code: "pl",
  $name: "Polski",
  $dir: "ltr",
  clearEntry: "Wyczy\u015B\u0107 wpis",
  close: "Zamknij",
  copy: "Kopiuj",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Nie wybrano opcji";
    if (num === 1)
      return "Wybrano 1\xA0opcj\u0119";
    return `Wybrano ${num} opcje`;
  },
  currentValue: "Aktualna warto\u015B\u0107",
  hidePassword: "Ukryj has\u0142o",
  loading: "\u0141adowanie",
  progress: "Post\u0119p",
  remove: "Usun\u0105\u0107",
  resize: "Zmie\u0144 rozmiar",
  scrollToEnd: "Przewi\u0144 do ko\u0144ca",
  scrollToStart: "Przewi\u0144 do pocz\u0105tku",
  selectAColorFromTheScreen: "Pr\xF3bkuj z ekranu",
  showPassword: "Poka\u017C has\u0142o",
  toggleColorFormat: "Prze\u0142\u0105cz format"
};
registerTranslation(translation);
var pl_default = translation;
export {
  pl_default as default
};
