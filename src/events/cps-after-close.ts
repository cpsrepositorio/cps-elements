type CpsAfterCloseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-after-close': CpsAfterCloseEvent;
  }
}

export default CpsAfterCloseEvent;
