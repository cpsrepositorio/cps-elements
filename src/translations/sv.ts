import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Inga alternativ har valts', 1: '1 alternativ valt' }[n] || `${n} alternativ valda`);

const translation: Translation = {
  $code: 'sv',
  $name: 'Svenska',
  $dir: 'ltr',

  cancel: 'Avbryt',
  clearEntry: 'Återställ val',
  close: 'Stäng',
  confirm: 'Bekräfta',
  copy: 'Kopiera',
  currentValue: 'Nuvarande värde',
  hidePassword: 'Dölj lösenord',
  loading: 'Läser in',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Framsteg',
  remove: 'Ta bort',
  resize: 'Ändra storlek',
  scrollToEnd: 'Skrolla till slutet',
  scrollToStart: 'Skrolla till början',
  selectAColorFromTheScreen: 'Välj en färg från skärmen',
  showCalendar: 'Visa kalender',
  showPassword: 'Visa lösenord',
  toggleColorFormat: 'Växla färgformat'
};

registerTranslation(translation);

export default translation;
