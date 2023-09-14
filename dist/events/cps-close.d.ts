type CpsCloseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-close': CpsCloseEvent;
    }
}
export default CpsCloseEvent;
