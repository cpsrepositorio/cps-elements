import '../translations/pt.js';
import { LocalizeController as DefaultLocalizationController } from './localize-core.js'; // Register English as the default/fallback language
import type { Translation as DefaultTranslation } from './localize-core.js';

// Extend the controller and apply our own translation interface for better typings
export class LocalizeController extends DefaultLocalizationController<Translation> {}

// Export functions from the localize core so we have one central place to import them from
export { registerTranslation } from './localize-core.js';

export interface Translation extends DefaultTranslation {
  $code: string; // e.g. en, en-GB
  $name: string; // e.g. English, Español
  $dir: 'ltr' | 'rtl';

  cancel: string;
  clearEntry: string;
  close: string;
  confirm: string;
  copy: string;
  currentValue: string;
  hidePassword: string;
  loading: string;
  numOptionsSelected: (n: number) => string;
  ok: string;
  progress: string;
  remove: string;
  resize: string;
  scrollToEnd: string;
  scrollToStart: string;
  selectAColorFromTheScreen: string;
  showCalendar: string;
  showPassword: string;
  toggleColorFormat: string;
}
