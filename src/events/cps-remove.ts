type CpsRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-remove': CpsRemoveEvent;
  }
}

export default CpsRemoveEvent;
