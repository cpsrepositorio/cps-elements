import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'No hay opciones seleccionadas', 1: '1 opción seleccionada' }[n] || `${n} opciones seleccionadas`);

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',

  cancel: 'Cancelar',
  clearEntry: 'Borrar entrada',
  close: 'Cerrar',
  confirm: 'Confirmar',
  copy: 'Copiar',
  currentValue: 'Valor actual',
  hidePassword: 'Ocultar contraseña',
  loading: 'Cargando',
  numOptionsSelected,
  ok: 'OK',
  progress: 'Progreso',
  remove: 'Eliminar',
  resize: 'Cambiar el tamaño',
  scrollToEnd: 'Desplazarse hasta el final',
  scrollToStart: 'Desplazarse al inicio',
  selectAColorFromTheScreen: 'Seleccione un color de la pantalla',
  showCalendar: 'Mostrar calendario',
  showPassword: 'Mostrar contraseña',
  toggleColorFormat: 'Alternar formato de color'
};

registerTranslation(translation);

export default translation;
