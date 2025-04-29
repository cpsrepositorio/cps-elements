import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Hiçbir seçenek seçilmedi', 1: '1 seçenek seçildi' }[n] || `${n} seçenek seçildi`);

const translation: Translation = {
  $code: 'tr',
  $name: 'Türkçe',
  $dir: 'ltr',

  cancel: 'İptal',
  clearEntry: 'Girişi sil',
  close: 'Kapat',
  confirm: 'Onayla',
  copy: 'Kopya',
  currentValue: 'Mevcut değer',
  hidePassword: 'Şifreyi sakla',
  loading: 'Yükleme',
  numOptionsSelected,
  ok: 'Tamam',
  progress: 'İlerleme',
  remove: 'Kaldır',
  resize: 'Yeniden boyutlandır',
  scrollToEnd: 'Sona kay',
  scrollToStart: 'Başa kay',
  selectAColorFromTheScreen: 'Ekrandan bir renk seçin',
  showCalendar: 'Takvimi göster',
  showPassword: 'Şifreyi göster',
  toggleColorFormat: 'Renk biçimini değiştir'
};

registerTranslation(translation);

export default translation;
