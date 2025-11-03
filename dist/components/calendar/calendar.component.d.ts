import '../icon.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsCalendar extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    calendar: HTMLElement;
    calendarGrid: HTMLElement;
    value: string;
    min: string;
    max: string;
    hideFooter: boolean;
    hideOutside: boolean;
    firstDayOfWeek: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | null;
    disableWeekdays: string;
    disableDates: string;
    private currentMonth;
    private currentYear;
    private selectedDate;
    private calendarData;
    private focusedCell;
    private currentView;
    private previousView;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(): void;
    previous(): void;
    next(): void;
    clear(): void;
    today(): void;
    private initializeCalendar;
    private parseDate;
    handleValueChange(): void;
    private areDatesEqual;
    private formatDateToISO;
    private updateCalendarSelection;
    handleOptionsChange(): void;
    private getFirstDayOfWeekIndex;
    private generateCalendarData;
    private handleDayClick;
    private handleMonthClick;
    private handleYearClick;
    private focusCurrentCell;
    private handleGridKeyDown;
    private toggleView;
    private renderDaysGrid;
    private renderMonthsGrid;
    private renderYearsGrid;
    private renderHeader;
    private renderFooter;
    render(): import("lit").TemplateResult<1>;
}
export { CpsCalendar };
declare global {
    interface HTMLElementTagNameMap {
        'cps-calendar': CpsCalendar;
    }
}
