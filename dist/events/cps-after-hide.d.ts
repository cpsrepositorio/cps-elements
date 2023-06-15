type CpsAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-after-hide': CpsAfterHideEvent;
    }
}
export default CpsAfterHideEvent;
