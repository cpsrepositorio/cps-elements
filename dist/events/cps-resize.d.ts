type CpsResize = CustomEvent<{
    entries: ResizeObserverEntry[];
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-resize': CpsResize;
    }
}
export default CpsResize;
