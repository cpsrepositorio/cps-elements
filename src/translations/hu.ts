import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Nincsenek kiválasztva opciók', 1: '1 lehetőség kiválasztva' }[n] || `${n} lehetőség kiválasztva`);

const translation: Translation = {
  $code: 'hu',
  $name: 'Magyar',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Mégse',
  clear: 'Törlés',
  close: 'Bezárás',
  confirm: 'Megerősít',
  copy: 'Másolás',
  currentValue: 'Aktuális érték',
  hidePassword: 'Jelszó elrejtése',
  loading: 'Betöltés',
  next: 'Következő',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Előző',
  progress: 'Folyamat',
  remove: 'Eltávolítás',
  resize: 'Átméretezés',
  scrollToEnd: 'Görgessen a végére',
  scrollToStart: 'Görgessen az elejére',
  select: 'Kiválasztás',
  showCalendar: 'Naptár megjelenítése',
  showPassword: 'Jelszó megjelenítése',
  today: 'Ma',
  viewDays: 'Napok megtekintése',
  viewMonths: 'Hónapok megtekintése',
  viewYears: 'Évek megtekintése'
};

registerTranslation(translation);

export default translation;
