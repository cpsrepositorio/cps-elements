import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'sv',
  $name: 'Svenska',
  $dir: 'ltr',

  clearEntry: 'Återställ val',
  close: 'Stäng',
  copy: 'Kopiera',
  numOptionsSelected: num => {
    if (num === 0) return 'Inga alternativ har valts';
    if (num === 1) return '1 alternativ valt';
    return `${num} alternativ valda`;
  },
  currentValue: 'Nuvarande värde',
  hidePassword: 'Dölj lösenord',
  loading: 'Läser in',
  progress: 'Framsteg',
  remove: 'Ta bort',
  resize: 'Ändra storlek',
  scrollToEnd: 'Skrolla till slutet',
  scrollToStart: 'Skrolla till början',
  selectAColorFromTheScreen: 'Välj en färg från skärmen',
  showPassword: 'Visa lösenord',
  toggleColorFormat: 'Växla färgformat',
  showCalendar: 'Visa kalender'
};

registerTranslation(translation);

export default translation;
