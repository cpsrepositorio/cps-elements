type CpsLoadEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-load': CpsLoadEvent;
    }
}
export default CpsLoadEvent;
