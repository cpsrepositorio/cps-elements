type CpsInvalidEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-invalid': CpsInvalidEvent;
    }
}
export default CpsInvalidEvent;
