import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Geen optie geselecteerd', 1: '1 optie geselecteerd' }[n] || `${n} opties geselecteerd`);

const translation: Translation = {
  $code: 'nl',
  $name: 'Nederlands',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Annuleren',
  clear: 'Wissen',
  close: 'Sluiten',
  confirm: 'Bevestigen',
  copy: 'Kopiëren',
  currentValue: 'Huidige waarde',
  hidePassword: 'Verberg wachtwoord',
  loading: 'Bezig met laden',
  next: 'Volgende',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Vorige',
  progress: 'Voortgang',
  remove: 'Verwijderen',
  resize: 'Formaat wijzigen',
  scrollToEnd: 'Scroll naar einde',
  scrollToStart: 'Scroll naar begin',
  select: 'Selecteren',
  showCalendar: 'Kalender weergeven',
  showPassword: 'Laat wachtwoord zien',
  today: 'Vandaag',
  viewDays: 'Bekijk dagen',
  viewMonths: 'Bekijk maanden',
  viewYears: 'Bekijk jaren'
};

registerTranslation(translation);

export default translation;
