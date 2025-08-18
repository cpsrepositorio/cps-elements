import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const numOptionsSelected = (n: number) =>
  ({ 0: 'No hay opciones seleccionadas', 1: '1 opción seleccionada' }[n] || `${n} opciones seleccionadas`);

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',
  $firstDayOfWeek: 'monday',

  cancel: 'Cancelar',
  clear: 'Borrar',
  close: 'Cerrar',
  confirm: 'Confirmar',
  copy: 'Copiar',
  currentValue: 'Valor actual',
  hidePassword: 'Ocultar contraseña',
  loading: 'Cargando',
  next: 'Siguiente',
  numOptionsSelected,
  ok: 'OK',
  previous: 'Anterior',
  progress: 'Progreso',
  remove: 'Eliminar',
  resize: 'Cambiar el tamaño',
  scrollToEnd: 'Desplazarse hasta el final',
  scrollToStart: 'Desplazarse al inicio',
  select: 'Seleccionar',
  showCalendar: 'Mostrar calendario',
  showPassword: 'Mostrar contraseña',
  today: 'Hoy',
  viewDays: 'Ver días',
  viewMonths: 'Ver meses',
  viewYears: 'Ver años'
};

registerTranslation(translation);

export default translation;
