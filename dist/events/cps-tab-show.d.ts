type CpsTabShowEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-tab-show': CpsTabShowEvent;
    }
}
export default CpsTabShowEvent;
