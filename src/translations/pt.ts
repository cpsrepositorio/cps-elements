import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'pt',
  $name: 'Português',
  $dir: 'ltr',

  clearEntry: 'Limpar entrada',
  close: 'Fechar',
  copy: 'Copiar',
  numOptionsSelected: num => {
    if (num === 0) return 'Nenhuma opção selecionada';
    if (num === 1) return '1 opção selecionada';
    return `${num} opções selecionadas`;
  },
  currentValue: 'Valor atual',
  hidePassword: 'Esconder a senha',
  loading: 'Carregando',
  progress: 'Progresso',
  remove: 'Remover',
  resize: 'Mudar o tamanho',
  scrollToEnd: 'Rolar até o final',
  scrollToStart: 'Rolar até o começo',
  selectAColorFromTheScreen: 'Selecionar uma cor da tela',
  showPassword: 'Mostrar senha',
  toggleColorFormat: 'Trocar o formato de cor',
  showCalendar: 'Mostrar calendário'
};

registerTranslation(translation);

export default translation;
