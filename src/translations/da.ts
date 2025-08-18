import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) => ({ 0: 'Ingen valgt', 1: '1 valgt' }[n] || `${n} valgt`);

const translation: Translation = {
  $code: 'da',
  $name: 'Dansk',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Annuller',
  clear: 'Ryd',
  close: 'Luk',
  confirm: 'Bekræft',
  copy: 'Kopier',
  currentValue: 'Nuværende værdi',
  hidePassword: 'Skjul adgangskode',
  loading: 'Indlæser',
  next: 'Næste',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Forrige',
  progress: 'Status',
  remove: 'Fjern',
  resize: 'Tilpas størrelse',
  scrollToEnd: 'Scroll til slut',
  scrollToStart: 'Scroll til start',
  select: 'Vælg',
  showCalendar: 'Vis kalender',
  showPassword: 'Vis adgangskode',
  today: 'I dag',
  viewDays: 'Se dage',
  viewMonths: 'Se måneder',
  viewYears: 'Se år'
};

registerTranslation(translation);

export default translation;
