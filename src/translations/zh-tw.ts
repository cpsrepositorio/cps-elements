import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) => ({ 0: '未選擇任何項目', 1: '已選擇 1 個項目' }[n] || `${n} 選擇項目`);

const translation: Translation = {
  $code: 'zh-tw',
  $name: '正體中文',
  $dir: 'ltr',

  cancel: '取消',
  clearEntry: '清空',
  close: '關閉',
  confirm: '確認',
  copy: '複製',
  currentValue: '當前值',
  hidePassword: '隱藏密碼',
  loading: '載入中',
  numOptionsSelected,
  ok: '確定',
  progress: '進度',
  remove: '移除',
  resize: '調整大小',
  scrollToEnd: '捲至頁尾',
  scrollToStart: '捲至頁首',
  selectAColorFromTheScreen: '從螢幕中選擇一種顏色',
  showCalendar: '顯示日曆',
  showPassword: '顯示密碼',
  toggleColorFormat: '切換顏色格式'
};

registerTranslation(translation);

export default translation;
