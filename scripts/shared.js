/** Chunk one array into multiple nested arrays, with the maximum allowed size each one. */
export function chunkArray(array, size) {
  return array.reduce(
    (chunks, _item, index, original) => (index % size == 0 ? [...chunks, original.slice(index, index + size)] : chunks),
    []
  );
}

/** Promisified delay function wrapping a timeout. */
export function delay(milliseconds = 1000) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/** Gets an array of components from a CEM object. */
export function getAllComponents(metadata) {
  const allComponents = [];

  metadata.modules.map(module => {
    module.declarations?.map(declaration => {
      if (declaration.customElement) {
        const component = declaration;
        const path = module.path;

        if (component) {
          allComponents.push(Object.assign(component, { path }));
        }
      }
    });
  });

  return allComponents;
}
