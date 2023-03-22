import {
  LocalizeController,
  registerTranslation
} from "./chunk.5TY2HHCR.js";

// src/utilities/localize.ts
var LocalizeController2 = class extends LocalizeController {
};

// src/translations/pt.ts
var translation = {
  $code: "pt",
  $name: "Portugu\xEAs",
  $dir: "ltr",
  clearEntry: "Limpar entrada",
  close: "Fechar",
  copy: "Copiar",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Nenhuma op\xE7\xE3o selecionada";
    if (num === 1)
      return "1 op\xE7\xE3o selecionada";
    return `${num} op\xE7\xF5es selecionadas`;
  },
  currentValue: "Valor atual",
  hidePassword: "Esconder a senha",
  loading: "Carregando",
  progress: "Progresso",
  remove: "Remover",
  resize: "Mudar o tamanho",
  scrollToEnd: "Rolar at\xE9 o final",
  scrollToStart: "Rolar at\xE9 o come\xE7o",
  selectAColorFromTheScreen: "Selecionar uma cor da tela",
  showPassword: "Mostrar senhaShow password",
  toggleColorFormat: "Trocar o formato de cor"
};
registerTranslation(translation);
var pt_default = translation;

export {
  pt_default,
  LocalizeController2 as LocalizeController
};
