import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'pl',
  $name: 'Polski',
  $dir: 'ltr',

  clearEntry: 'Wyczyść wpis',
  close: 'Zamknij',
  copy: 'Kopiuj',
  numOptionsSelected: num => {
    if (num === 0) return 'Nie wybrano opcji';
    if (num === 1) return 'Wybrano 1 opcję';
    return `Wybrano ${num} opcje`;
  },
  currentValue: 'Aktualna wartość',
  hidePassword: 'Ukryj hasło',
  loading: 'Ładowanie',
  progress: 'Postęp',
  remove: 'Usunąć',
  resize: 'Zmień rozmiar',
  scrollToEnd: 'Przewiń do końca',
  scrollToStart: 'Przewiń do początku',
  selectAColorFromTheScreen: 'Próbkuj z ekranu',
  showPassword: 'Pokaż hasło',
  toggleColorFormat: 'Przełącz format',
  showCalendar: 'Pokaż kalendarz'
};

registerTranslation(translation);

export default translation;
