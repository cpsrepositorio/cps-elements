type CpsClearEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-clear': CpsClearEvent;
  }
}

export default CpsClearEvent;
