type CpsHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-hide': CpsHideEvent;
  }
}

export default CpsHideEvent;
