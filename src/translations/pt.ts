import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Nenhuma opção selecionada', 1: '1 opção selecionada' }[n] || `${n} opções selecionadas`);

const translation: Translation = {
  $code: 'pt',
  $name: 'Português',
  $dir: 'ltr',
  $firstDayOfWeek: 'sunday',

  cancel: 'Cancelar',
  clear: 'Limpar',
  close: 'Fechar',
  confirm: 'Confirmar',
  copy: 'Copiar',
  currentValue: 'Valor atual',
  hidePassword: 'Esconder a senha',
  loading: 'Carregando',
  next: 'Próximo',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Anterior',
  progress: 'Progresso',
  remove: 'Remover',
  resize: 'Mudar o tamanho',
  scrollToEnd: 'Rolar até o final',
  scrollToStart: 'Rolar até o começo',
  select: 'Selecionar',
  showCalendar: 'Mostrar calendário',
  showPassword: 'Mostrar senha',
  today: 'Hoje',
  viewDays: 'Ver dias',
  viewMonths: 'Ver meses',
  viewYears: 'Ver anos'
};

registerTranslation(translation);

export default translation;
