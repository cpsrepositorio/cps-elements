import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'לא נבחרו אפשרויות', 1: 'נבחרה אפשרות אחת' }[n] || `נבחרו ${n} אפשרויות`);

const translation: Translation = {
  $code: 'he',
  $name: 'עברית',
  $dir: 'rtl',

  cancel: 'ביטול',
  clearEntry: 'נקה קלט',
  close: 'סגור',
  confirm: 'אשר',
  copy: 'העתק',
  currentValue: 'ערך נוכחי',
  hidePassword: 'הסתר סיסמא',
  loading: 'טוען',
  numOptionsSelected,
  ok: 'אישור',
  progress: 'התקדמות',
  remove: 'לְהַסִיר',
  resize: 'שנה גודל',
  scrollToEnd: 'גלול עד הסוף',
  scrollToStart: 'גלול להתחלה',
  selectAColorFromTheScreen: 'בחור צבע מהמסך',
  showCalendar: 'הצג לוח שנה',
  showPassword: 'הראה סיסמה',
  toggleColorFormat: 'החלף פורמט צבע'
};

registerTranslation(translation);

export default translation;
