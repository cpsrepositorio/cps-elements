import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Keine Optionen ausgewählt', 1: '1 Option ausgewählt' }[n] || `${n} Optionen ausgewählt`);

const translation: Translation = {
  $code: 'de',
  $name: 'Deutsch',
  $dir: 'ltr',

  cancel: 'Abbrechen',
  clearEntry: 'Eingabe löschen',
  close: 'Schließen',
  confirm: 'Bestätigen',
  copy: 'Kopieren',
  currentValue: 'Aktueller Wert',
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  resize: 'Größe ändern',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  selectAColorFromTheScreen: 'Wähle eine Farbe vom Bildschirm',
  showCalendar: 'Kalender anzeigen',
  showPassword: 'Passwort anzeigen',
  toggleColorFormat: 'Farbformat umschalten'
};

registerTranslation(translation);

export default translation;
