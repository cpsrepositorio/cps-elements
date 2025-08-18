import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Keine Optionen ausgewählt', 1: '1 Option ausgewählt' }[n] || `${n} Optionen ausgewählt`);

const translation: Translation = {
  $code: 'de',
  $name: 'Deutsch',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Abbrechen',
  clear: 'Löschen',
  close: 'Schließen',
  confirm: 'Bestätigen',
  copy: 'Kopieren',
  currentValue: 'Aktueller Wert',
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  next: 'Weiter',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Zurück',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  resize: 'Größe ändern',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  select: 'Auswählen',
  showCalendar: 'Kalender anzeigen',
  showPassword: 'Passwort anzeigen',
  today: 'Heute',
  viewDays: 'Tage anzeigen',
  viewMonths: 'Monate anzeigen',
  viewYears: 'Jahre anzeigen'
};

registerTranslation(translation);

export default translation;
