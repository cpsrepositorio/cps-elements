import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'выбрано 0 вариантов', 1: 'Выбран 1 вариант' }[n] || `выбрано ${n} варианта`);

const translation: Translation = {
  $code: 'ru',
  $name: 'Русский',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Отмена',
  clear: 'Очистить',
  close: 'Закрыть',
  confirm: 'Подтвердить',
  copy: 'Скопировать',
  currentValue: 'Текущее значение',
  hidePassword: 'Скрыть пароль',
  loading: 'Загрузка',
  next: 'Следующий',
  numOptionsSelected,
  ok: 'ОК',
  previous: 'Предыдущий',
  progress: 'Прогресс',
  remove: 'Удалить',
  resize: 'Изменить размер',
  scrollToEnd: 'Пролистать до конца',
  scrollToStart: 'Пролистать к началу',
  select: 'Выбрать',
  showCalendar: 'Показать календарь',
  showPassword: 'Показать пароль',
  today: 'Сегодня',
  viewDays: 'Просмотр дней',
  viewMonths: 'Просмотр месяцев',
  viewYears: 'Просмотр лет'
};

registerTranslation(translation);

export default translation;
