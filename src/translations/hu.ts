import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Nincsenek kiválasztva opciók', 1: '1 lehetőség kiválasztva' }[n] || `${n} lehetőség kiválasztva`);

const translation: Translation = {
  $code: 'hu',
  $name: 'Magyar',
  $dir: 'ltr',

  cancel: 'Mégse',
  clearEntry: 'Bejegyzés törlése',
  close: 'Bezárás',
  confirm: 'Megerősít',
  copy: 'Másolás',
  currentValue: 'Aktuális érték',
  hidePassword: 'Jelszó elrejtése',
  loading: 'Betöltés',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Folyamat',
  remove: 'Eltávolítás',
  resize: 'Átméretezés',
  scrollToEnd: 'Görgessen a végére',
  scrollToStart: 'Görgessen az elejére',
  selectAColorFromTheScreen: 'Szín választása a képernyőről',
  showCalendar: 'Naptár megjelenítése',
  showPassword: 'Jelszó megjelenítése',
  toggleColorFormat: 'Színformátum változtatása'
};

registerTranslation(translation);

export default translation;
