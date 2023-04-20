type CpsErrorEvent = CustomEvent<{
    status?: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-error': CpsErrorEvent;
    }
}
export default CpsErrorEvent;
