import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'オプションが選択されていません', 1: '1 つのオプションが選択されました' }[n] ||
  `${n} つのオプションが選択されました`);

const translation: Translation = {
  $code: 'ja',
  $name: '日本語',
  $dir: 'ltr',

  cancel: 'キャンセル',
  clearEntry: 'クリアエントリ',
  close: '閉じる',
  confirm: '確認',
  copy: 'コピー',
  currentValue: '現在の価値',
  hidePassword: 'パスワードを隠す',
  loading: '読み込み中',
  numOptionsSelected,
  ok: 'OK',
  progress: '進行',
  remove: '削除',
  resize: 'サイズ変更',
  scrollToEnd: '最後にスクロールする',
  scrollToStart: '最初にスクロールする',
  selectAColorFromTheScreen: '画面から色を選択してください',
  showCalendar: 'カレンダーを表示',
  showPassword: 'パスワードを表示',
  toggleColorFormat: '色のフォーマットを切り替える'
};

registerTranslation(translation);

export default translation;
