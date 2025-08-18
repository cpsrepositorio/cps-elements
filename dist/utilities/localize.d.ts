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
    $firstDayOfWeek: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
    cancel: string;
    clear: string;
    close: string;
    confirm: string;
    copy: string;
    currentValue: string;
    hidePassword: string;
    loading: string;
    next: string;
    numOptionsSelected: (n: number) => string;
    ok: string;
    previous: string;
    progress: string;
    remove: string;
    resize: string;
    scrollToEnd: string;
    scrollToStart: string;
    select: string;
    showCalendar: string;
    showPassword: string;
    today: string;
    viewDays: string;
    viewMonths: string;
    viewYears: string;
}
