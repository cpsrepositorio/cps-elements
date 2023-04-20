type CpsBlurEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-blur': CpsBlurEvent;
    }
}
export default CpsBlurEvent;
