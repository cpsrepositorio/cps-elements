import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'オプションが選択されていません', 1: '1 つのオプションが選択されました' }[n] ||
  `${n} つのオプションが選択されました`);

const translation: Translation = {
  $code: 'ja',
  $name: '日本語',
  $dir: 'ltr',
  $firstDayOfWeek: 'sunday',

  cancel: 'キャンセル',
  clear: 'クリア',
  close: '閉じる',
  confirm: '確認',
  copy: 'コピー',
  currentValue: '現在の価値',
  hidePassword: 'パスワードを隠す',
  loading: '読み込み中',
  next: '次へ',
  numOptionsSelected,
  ok: 'OK',
  previous: '前へ',
  progress: '進行',
  remove: '削除',
  resize: 'サイズ変更',
  scrollToEnd: '最後にスクロールする',
  scrollToStart: '最初にスクロールする',
  select: '選択',
  showCalendar: 'カレンダーを表示',
  showPassword: 'パスワードを表示',
  today: '今日',
  viewDays: '日を表示',
  viewMonths: '月を表示',
  viewYears: '年を表示'
};

registerTranslation(translation);

export default translation;
