type CpsFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-focus': CpsFocusEvent;
  }
}

export default CpsFocusEvent;
