import "../chunks/chunk.M5NRRAMO.js";
import {
  registerTranslation
} from "../chunks/chunk.5TY2HHCR.js";
import "../chunks/chunk.6M63UXML.js";

// src/translations/es.ts
var translation = {
  $code: "es",
  $name: "Espa\xF1ol",
  $dir: "ltr",
  clearEntry: "Borrar entrada",
  close: "Cerrar",
  copy: "Copiar",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "No hay opciones seleccionadas";
    if (num === 1)
      return "1 opci\xF3n seleccionada";
    return `${num} opci\xF3n seleccionada`;
  },
  currentValue: "Valor actual",
  hidePassword: "Ocultar contrase\xF1a",
  loading: "Cargando",
  progress: "Progreso",
  remove: "Eliminar",
  resize: "Cambiar el tama\xF1o",
  scrollToEnd: "Desplazarse hasta el final",
  scrollToStart: "Desplazarse al inicio",
  selectAColorFromTheScreen: "Seleccione un color de la pantalla",
  showPassword: "Mostrar contrase\xF1a",
  toggleColorFormat: "Alternar formato de color"
};
registerTranslation(translation);
var es_default = translation;
export {
  es_default as default
};
