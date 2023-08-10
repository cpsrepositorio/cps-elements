import type CpsMenuItem from '../components/menu-item.js';
type CpsSelectEvent = CustomEvent<{
    item: CpsMenuItem;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'cps-select': CpsSelectEvent;
    }
}
export default CpsSelectEvent;
