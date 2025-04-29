import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Nenhuma opção selecionada', 1: '1 opção selecionada' }[n] || `${n} opções selecionadas`);

const translation: Translation = {
  $code: 'pt',
  $name: 'Português',
  $dir: 'ltr',

  cancel: 'Cancelar',
  clearEntry: 'Limpar entrada',
  close: 'Fechar',
  confirm: 'Confirmar',
  copy: 'Copiar',
  currentValue: 'Valor atual',
  hidePassword: 'Esconder a senha',
  loading: 'Carregando',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Progresso',
  remove: 'Remover',
  resize: 'Mudar o tamanho',
  scrollToEnd: 'Rolar até o final',
  scrollToStart: 'Rolar até o começo',
  selectAColorFromTheScreen: 'Selecionar uma cor da tela',
  showCalendar: 'Mostrar calendário',
  showPassword: 'Mostrar senha',
  toggleColorFormat: 'Trocar o formato de cor'
};

registerTranslation(translation);

export default translation;
