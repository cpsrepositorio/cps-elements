import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'No options selected', 1: '1 option selected' }[n] || `${n} options selected`);

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  cancel: 'Cancel',
  clearEntry: 'Clear entry',
  close: 'Close',
  confirm: 'Confirm',
  copy: 'Copy',
  currentValue: 'Current value',
  hidePassword: 'Hide password',
  loading: 'Loading',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Progress',
  remove: 'Remove',
  resize: 'Resize',
  scrollToEnd: 'Scroll to end',
  scrollToStart: 'Scroll to start',
  selectAColorFromTheScreen: 'Select a color from the screen',
  showCalendar: 'Show calendar',
  showPassword: 'Show password',
  toggleColorFormat: 'Toggle color format'
};

registerTranslation(translation);

export default translation;
