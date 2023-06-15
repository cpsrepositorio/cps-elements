type CpsShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-show': CpsShowEvent;
  }
}

export default CpsShowEvent;
