import {
  registerTranslation
} from "./chunk.5TY2HHCR.js";

// src/translations/en.ts
var translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  clearEntry: "Clear entry",
  close: "Close",
  copy: "Copy",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "No options selected";
    if (num === 1)
      return "1 option selected";
    return `${num} options selected`;
  },
  currentValue: "Current value",
  hidePassword: "Hide password",
  loading: "Loading",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  toggleColorFormat: "Toggle color format"
};
registerTranslation(translation);
var en_default = translation;

export {
  en_default
};
