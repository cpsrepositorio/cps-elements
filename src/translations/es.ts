import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',

  clearEntry: 'Borrar entrada',
  close: 'Cerrar',
  copy: 'Copiar',
  numOptionsSelected: num => {
    if (num === 0) return 'No hay opciones seleccionadas';
    if (num === 1) return '1 opción seleccionada';
    return `${num} opción seleccionada`;
  },
  currentValue: 'Valor actual',
  hidePassword: 'Ocultar contraseña',
  loading: 'Cargando',
  progress: 'Progreso',
  remove: 'Eliminar',
  resize: 'Cambiar el tamaño',
  scrollToEnd: 'Desplazarse hasta el final',
  scrollToStart: 'Desplazarse al inicio',
  selectAColorFromTheScreen: 'Seleccione un color de la pantalla',
  showPassword: 'Mostrar contraseña',
  toggleColorFormat: 'Alternar formato de color',
  showCalendar: 'Mostrar calendario'
};

registerTranslation(translation);

export default translation;
