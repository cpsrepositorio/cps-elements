type CpsInitialFocus = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-initial-focus': CpsInitialFocus;
    }
}
export default CpsInitialFocus;
