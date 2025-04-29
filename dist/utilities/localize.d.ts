import '../translations/pt.js';
import { LocalizeController as DefaultLocalizationController } from './localize-core.js';
import type { Translation as DefaultTranslation } from './localize-core.js';
export declare class LocalizeController extends DefaultLocalizationController<Translation> {
}
export { registerTranslation } from './localize-core.js';
export interface Translation extends DefaultTranslation {
    $code: string;
    $name: string;
    $dir: 'ltr' | 'rtl';
    cancel: string;
    clearEntry: string;
    close: string;
    confirm: string;
    copy: string;
    currentValue: string;
    hidePassword: string;
    loading: string;
    numOptionsSelected: (n: number) => string;
    ok: string;
    progress: string;
    remove: string;
    resize: string;
    scrollToEnd: string;
    scrollToStart: string;
    selectAColorFromTheScreen: string;
    showCalendar: string;
    showPassword: string;
    toggleColorFormat: string;
}
