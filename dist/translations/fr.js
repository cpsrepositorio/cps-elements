import "../chunks/chunk.M5NRRAMO.js";
import {
  registerTranslation
} from "../chunks/chunk.5TY2HHCR.js";
import "../chunks/chunk.6M63UXML.js";

// src/translations/fr.ts
var translation = {
  $code: "fr",
  $name: "Fran\xE7ais",
  $dir: "ltr",
  clearEntry: `Effacer l'entr\xE9e`,
  close: "Fermer",
  copy: "Copier",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Aucune option s\xE9lectionn\xE9e";
    if (num === 1)
      return "1 option s\xE9lectionn\xE9e";
    return `${num} options s\xE9lectionn\xE9es`;
  },
  currentValue: "Valeur actuelle",
  hidePassword: "Masquer le mot de passe",
  loading: "Chargement",
  progress: "Progr\xE8s",
  remove: "Retirer",
  resize: "Redimensionner",
  scrollToEnd: `Faire d\xE9filer jusqu'\xE0 la fin`,
  scrollToStart: `Faire d\xE9filer jusqu'au d\xE9but`,
  selectAColorFromTheScreen: `S\xE9lectionnez une couleur \xE0 l'\xE9cran`,
  showPassword: "Montrer le mot de passe",
  toggleColorFormat: "Changer le format de couleur"
};
registerTranslation(translation);
var fr_default = translation;
export {
  fr_default as default
};
