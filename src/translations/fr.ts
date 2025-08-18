import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Aucune option sélectionnée', 1: '1 option sélectionnée' }[n] || `${n} options sélectionnées`);

const translation: Translation = {
  $code: 'fr',
  $name: 'Français',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Annuler',
  clear: 'Effacer',
  close: 'Fermer',
  confirm: 'Confirmer',
  copy: 'Copier',
  currentValue: 'Valeur actuelle',
  hidePassword: 'Masquer le mot de passe',
  loading: 'Chargement',
  next: 'Suivant',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Précédent',
  progress: 'Progrès',
  remove: 'Retirer',
  resize: 'Redimensionner',
  scrollToEnd: `Faire défiler jusqu'à la fin`,
  scrollToStart: `Faire défiler jusqu'au début`,
  select: 'Sélectionner',
  showCalendar: 'Montrer le calendrier',
  showPassword: 'Montrer le mot de passe',
  today: "Aujourd'hui",
  viewDays: 'Voir les jours',
  viewMonths: 'Voir les mois',
  viewYears: 'Voir les années'
};

registerTranslation(translation);

export default translation;
