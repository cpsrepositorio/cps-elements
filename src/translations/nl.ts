import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Geen optie geselecteerd', 1: '1 optie geselecteerd' }[n] || `${n} opties geselecteerd`);

const translation: Translation = {
  $code: 'nl',
  $name: 'Nederlands',
  $dir: 'ltr',

  cancel: 'Annuleren',
  clearEntry: 'Invoer wissen',
  close: 'Sluiten',
  confirm: 'Bevestigen',
  copy: 'Kopiëren',
  currentValue: 'Huidige waarde',
  hidePassword: 'Verberg wachtwoord',
  loading: 'Bezig met laden',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Voortgang',
  remove: 'Verwijderen',
  resize: 'Formaat wijzigen',
  scrollToEnd: 'Scroll naar einde',
  scrollToStart: 'Scroll naar begin',
  selectAColorFromTheScreen: 'Selecteer een kleur van het scherm',
  showCalendar: 'Kalender weergeven',
  showPassword: 'Laat wachtwoord zien',
  toggleColorFormat: 'Wissel kleurnotatie'
};

registerTranslation(translation);

export default translation;
