import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'לא נבחרו אפשרויות', 1: 'נבחרה אפשרות אחת' }[n] || `נבחרו ${n} אפשרויות`);

const translation: Translation = {
  $code: 'he',
  $name: 'עברית',
  $dir: 'rtl',
  $firstDayOfWeek: 'saturday',

  cancel: 'ביטול',
  clear: 'נקה',
  close: 'סגור',
  confirm: 'אשר',
  copy: 'העתק',
  currentValue: 'ערך נוכחי',
  hidePassword: 'הסתר סיסמא',
  loading: 'טוען',
  next: 'הבא',
  numOptionsSelected,
  ok: 'אישור',
  previous: 'הקודם',
  progress: 'התקדמות',
  remove: 'לְהַסִיר',
  resize: 'שנה גודל',
  scrollToEnd: 'גלול עד הסוף',
  scrollToStart: 'גלול להתחלה',
  select: 'בחר',
  showCalendar: 'הצג לוח שנה',
  showPassword: 'הראה סיסמה',
  today: 'היום',
  viewDays: 'צפה בימים',
  viewMonths: 'צפה בחודשים',
  viewYears: 'צפה בשנים'
};

registerTranslation(translation);

export default translation;
