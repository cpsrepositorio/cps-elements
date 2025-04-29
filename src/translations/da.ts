import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) => ({ 0: 'Ingen valgt', 1: '1 valgt' }[n] || `${n} valgt`);

const translation: Translation = {
  $code: 'da',
  $name: 'Dansk',
  $dir: 'ltr',

  cancel: 'Annuller',
  clearEntry: 'Ryd indtastning',
  close: 'Luk',
  confirm: 'Bekræft',
  copy: 'Kopier',
  currentValue: 'Nuværende værdi',
  hidePassword: 'Skjul adgangskode',
  loading: 'Indlæser',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Status',
  remove: 'Fjern',
  resize: 'Tilpas størrelse',
  scrollToEnd: 'Scroll til slut',
  scrollToStart: 'Scroll til start',
  selectAColorFromTheScreen: 'Vælg en farve fra skærmen',
  showCalendar: 'Vis kalender',
  showPassword: 'Vis adgangskode',
  toggleColorFormat: 'Skift farveformat'
};

registerTranslation(translation);

export default translation;
