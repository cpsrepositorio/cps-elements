import '../translations/pt';
import { LocalizeController as DefaultLocalizationController } from './localize-core';
import type { Translation as DefaultTranslation } from './localize-core';
export declare class LocalizeController extends DefaultLocalizationController<Translation> {
}
export { registerTranslation } from './localize-core';
export interface Translation extends DefaultTranslation {
    $code: string;
    $name: string;
    $dir: 'ltr' | 'rtl';
    clearEntry: string;
    close: string;
    copy: string;
    numOptionsSelected: (num: number) => string;
    currentValue: string;
    hidePassword: string;
    loading: string;
    progress: string;
    remove: string;
    resize: string;
    scrollToEnd: string;
    scrollToStart: string;
    selectAColorFromTheScreen: string;
    showPassword: string;
    toggleColorFormat: string;
    showCalendar: string;
}
