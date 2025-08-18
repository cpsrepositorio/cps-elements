import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Hiçbir seçenek seçilmedi', 1: '1 seçenek seçildi' }[n] || `${n} seçenek seçildi`);

const translation: Translation = {
  $code: 'tr',
  $name: 'Türkçe',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'İptal',
  clear: 'Temizle',
  close: 'Kapat',
  confirm: 'Onayla',
  copy: 'Kopya',
  currentValue: 'Mevcut değer',
  hidePassword: 'Şifreyi sakla',
  loading: 'Yükleme',
  next: 'Sonraki',
  numOptionsSelected,
  ok: 'Tamam',
  previous: 'Önceki',
  progress: 'İlerleme',
  remove: 'Kaldır',
  resize: 'Yeniden boyutlandır',
  scrollToEnd: 'Sona kay',
  scrollToStart: 'Başa kay',
  select: 'Seç',
  showCalendar: 'Takvimi göster',
  showPassword: 'Şifreyi göster',
  today: 'Bugün',
  viewDays: 'Günleri Görüntüle',
  viewMonths: 'Ayları Görüntüle',
  viewYears: 'Yılları Görüntüle'
};

registerTranslation(translation);

export default translation;
