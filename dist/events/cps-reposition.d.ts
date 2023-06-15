type CpsRepositionEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-reposition': CpsRepositionEvent;
    }
}
export default CpsRepositionEvent;
