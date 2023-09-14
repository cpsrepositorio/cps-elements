type CpsTabHideEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-tab-hide': CpsTabHideEvent;
    }
}
export default CpsTabHideEvent;
