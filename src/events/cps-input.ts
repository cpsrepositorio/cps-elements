type CpsInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-input': CpsInputEvent;
  }
}

export default CpsInputEvent;
