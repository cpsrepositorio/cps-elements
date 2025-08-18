import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'No options selected', 1: '1 option selected' }[n] || `${n} options selected`);

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',
  $firstDayOfWeek: 'sunday',

  cancel: 'Cancel',
  clear: 'Clear',
  close: 'Close',
  confirm: 'Confirm',
  copy: 'Copy',
  currentValue: 'Current value',
  hidePassword: 'Hide password',
  loading: 'Loading',
  next: 'Next',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Previous',
  progress: 'Progress',
  remove: 'Remove',
  resize: 'Resize',
  scrollToEnd: 'Scroll to end',
  scrollToStart: 'Scroll to start',
  select: 'Select',
  showCalendar: 'Show calendar',
  showPassword: 'Show password',
  today: 'Today',
  viewDays: 'View days',
  viewMonths: 'View months',
  viewYears: 'View years'
};

registerTranslation(translation);

export default translation;
