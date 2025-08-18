import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'هیچ گزینه ای انتخاب نشده است', 1: '1 گزینه انتخاب شده است' }[n] || `${n} گزینه انتخاب شده است`);

const translation: Translation = {
  $code: 'fa',
  $name: 'فارسی',
  $dir: 'rtl',
  $firstDayOfWeek: 'saturday',

  cancel: 'لغو',
  clear: 'پاک کردن',
  close: 'بستن',
  confirm: 'تایید',
  copy: 'رونوشت',
  currentValue: 'مقدار فعلی',
  hidePassword: 'پنهان کردن رمز',
  loading: 'بارگذاری',
  next: 'بعدی',
  numOptionsSelected,
  ok: 'تایید',
  previous: 'قبلی',
  progress: 'پیشرفت',
  remove: 'حذف',
  resize: 'تغییر اندازه',
  scrollToEnd: 'پیمایش به انتها',
  scrollToStart: 'پیمایش به ابتدا',
  select: 'انتخاب',
  showCalendar: 'نمایش تقویم',
  showPassword: 'نمایش رمز',
  today: 'امروز',
  viewDays: 'مشاهده روزها',
  viewMonths: 'مشاهده ماه‌ها',
  viewYears: 'مشاهده سال‌ها'
};

registerTranslation(translation);

export default translation;
