type CpsAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-after-show': CpsAfterShowEvent;
  }
}

export default CpsAfterShowEvent;
