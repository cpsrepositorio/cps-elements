import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) => ({ 0: '未選擇任何項目', 1: '已選擇 1 個項目' }[n] || `${n} 選擇項目`);

const translation: Translation = {
  $code: 'zh-tw',
  $name: '正體中文',
  $dir: 'ltr',
  $firstDayOfWeek: 'sunday',

  cancel: '取消',
  clear: '清空',
  close: '關閉',
  confirm: '確認',
  copy: '複製',
  currentValue: '當前值',
  hidePassword: '隱藏密碼',
  loading: '載入中',
  next: '下一個',
  numOptionsSelected,
  ok: '確定',
  previous: '上一個',
  progress: '進度',
  remove: '移除',
  resize: '調整大小',
  scrollToEnd: '捲至頁尾',
  scrollToStart: '捲至頁首',
  select: '選擇',
  showCalendar: '顯示日曆',
  showPassword: '顯示密碼',
  today: '今天',
  viewDays: '查看天',
  viewMonths: '查看月',
  viewYears: '查看年'
};

registerTranslation(translation);

export default translation;
