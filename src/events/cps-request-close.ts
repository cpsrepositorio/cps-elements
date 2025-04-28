type CpsRequestClose = CustomEvent<{ source: 'backdrop' | 'header' | 'keyboard' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-request-close': CpsRequestClose;
  }
}

export default CpsRequestClose;
