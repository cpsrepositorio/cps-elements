type CpsChangeEvent = CustomEvent<Record<PropertyKey, unknown>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-change': CpsChangeEvent;
    }
}
export default CpsChangeEvent;
