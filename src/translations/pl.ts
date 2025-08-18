import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) => ({ 0: 'Nie wybrano opcji', 1: 'Wybrano 1 opcję' }[n] || `Wybrano ${n} opcje`);

const translation: Translation = {
  $code: 'pl',
  $name: 'Polski',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Anuluj',
  clear: 'Wyczyść',
  close: 'Zamknij',
  confirm: 'Potwierdź',
  copy: 'Kopiuj',
  currentValue: 'Aktualna wartość',
  hidePassword: 'Ukryj hasło',
  loading: 'Ładowanie',
  next: 'Następny',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Poprzedni',
  progress: 'Postęp',
  remove: 'Usunąć',
  resize: 'Zmień rozmiar',
  scrollToEnd: 'Przewiń do końca',
  scrollToStart: 'Przewiń do początku',
  select: 'Wybierz',
  showCalendar: 'Pokaż kalendarz',
  showPassword: 'Pokaż hasło',
  today: 'Dzisiaj',
  viewDays: 'Wyświetl dni',
  viewMonths: 'Wyświetl miesiące',
  viewYears: 'Wyświetl lata'
};

registerTranslation(translation);

export default translation;
