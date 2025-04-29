import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'Aucune option sélectionnée', 1: '1 option sélectionnée' }[n] || `${n} options sélectionnées`);

const translation: Translation = {
  $code: 'fr',
  $name: 'Français',
  $dir: 'ltr',

  cancel: 'Annuler',
  clearEntry: `Effacer l'entrée`,
  close: 'Fermer',
  confirm: 'Confirmer',
  copy: 'Copier',
  currentValue: 'Valeur actuelle',
  hidePassword: 'Masquer le mot de passe',
  loading: 'Chargement',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Progrès',
  remove: 'Retirer',
  resize: 'Redimensionner',
  scrollToEnd: `Faire défiler jusqu'à la fin`,
  scrollToStart: `Faire défiler jusqu'au début`,
  selectAColorFromTheScreen: `Sélectionnez une couleur à l'écran`,
  showCalendar: 'Montrer le calendrier',
  showPassword: 'Montrer le mot de passe',
  toggleColorFormat: 'Changer le format de couleur'
};

registerTranslation(translation);

export default translation;
