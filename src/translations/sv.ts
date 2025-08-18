import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Inga alternativ har valts', 1: '1 alternativ valt' }[n] || `${n} alternativ valda`);

const translation: Translation = {
  $code: 'sv',
  $name: 'Svenska',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Avbryt',
  clear: 'Rensa',
  close: 'Stäng',
  confirm: 'Bekräfta',
  copy: 'Kopiera',
  currentValue: 'Nuvarande värde',
  hidePassword: 'Dölj lösenord',
  loading: 'Läser in',
  next: 'Nästa',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Föregående',
  progress: 'Framsteg',
  remove: 'Ta bort',
  resize: 'Ändra storlek',
  scrollToEnd: 'Skrolla till slutet',
  scrollToStart: 'Skrolla till början',
  select: 'Välj',
  showCalendar: 'Visa kalender',
  showPassword: 'Visa lösenord',
  today: 'Idag',
  viewDays: 'Visa dagar',
  viewMonths: 'Visa månader',
  viewYears: 'Visa år'
};

registerTranslation(translation);

export default translation;
