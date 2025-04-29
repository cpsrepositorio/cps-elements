import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'هیچ گزینه ای انتخاب نشده است', 1: '1 گزینه انتخاب شده است' }[n] || `${n} گزینه انتخاب شده است`);

const translation: Translation = {
  $code: 'fa',
  $name: 'فارسی',
  $dir: 'rtl',

  cancel: 'لغو',
  clearEntry: 'پاک کردن ورودی',
  close: 'بستن',
  confirm: 'تایید',
  copy: 'رونوشت',
  currentValue: 'مقدار فعلی',
  hidePassword: 'پنهان کردن رمز',
  loading: 'بارگذاری',
  numOptionsSelected,
  ok: 'تایید',
  progress: 'پیشرفت',
  remove: 'حذف',
  resize: 'تغییر اندازه',
  scrollToEnd: 'پیمایش به انتها',
  scrollToStart: 'پیمایش به ابتدا',
  selectAColorFromTheScreen: 'انتخاب یک رنگ از صفحه نمایش',
  showCalendar: 'نمایش تقویم',
  showPassword: 'نمایش رمز',
  toggleColorFormat: 'تغییر قالب رنگ'
};

registerTranslation(translation);

export default translation;
