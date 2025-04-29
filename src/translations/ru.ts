import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'выбрано 0 вариантов', 1: 'Выбран 1 вариант' }[n] || `выбрано ${n} варианта`);

const translation: Translation = {
  $code: 'ru',
  $name: 'Русский',
  $dir: 'ltr',

  cancel: 'Отмена',
  clearEntry: 'Очистить запись',
  close: 'Закрыть',
  confirm: 'Подтвердить',
  copy: 'Скопировать',
  currentValue: 'Текущее значение',
  hidePassword: 'Скрыть пароль',
  loading: 'Загрузка',
  numOptionsSelected,
  ok: 'ОК',
  progress: 'Прогресс',
  remove: 'Удалить',
  resize: 'Изменить размер',
  scrollToEnd: 'Пролистать до конца',
  scrollToStart: 'Пролистать к началу',
  selectAColorFromTheScreen: 'Выберите цвет на экране',
  showCalendar: 'Показать календарь',
  showPassword: 'Показать пароль',
  toggleColorFormat: 'Переключить цветовую модель'
};

registerTranslation(translation);

export default translation;
