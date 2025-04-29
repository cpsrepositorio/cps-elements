import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) => ({ 0: 'Nie wybrano opcji', 1: 'Wybrano 1 opcję' }[n] || `Wybrano ${n} opcje`);

const translation: Translation = {
  $code: 'pl',
  $name: 'Polski',
  $dir: 'ltr',

  cancel: 'Anuluj',
  clearEntry: 'Wyczyść wpis',
  close: 'Zamknij',
  confirm: 'Potwierdź',
  copy: 'Kopiuj',
  currentValue: 'Aktualna wartość',
  hidePassword: 'Ukryj hasło',
  loading: 'Ładowanie',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Postęp',
  remove: 'Usunąć',
  resize: 'Zmień rozmiar',
  scrollToEnd: 'Przewiń do końca',
  scrollToStart: 'Przewiń do początku',
  selectAColorFromTheScreen: 'Próbkuj z ekranu',
  showCalendar: 'Pokaż kalendarz',
  showPassword: 'Pokaż hasło',
  toggleColorFormat: 'Przełącz format'
};

registerTranslation(translation);

export default translation;
