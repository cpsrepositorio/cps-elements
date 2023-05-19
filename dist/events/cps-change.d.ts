type CpsChangeEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-change': CpsChangeEvent;
    }
}
export default CpsChangeEvent;
