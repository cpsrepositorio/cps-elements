import '../icon.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './calendar.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Calendários permitem aos usuários selecionar datas.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/calendar
 * @status stable
 * @since 0.21.0
 *
 * @dependency cps-icon
 *
 * @event cps-change - Emitido quando o valor selecionado muda ou quando o mês/ano visualizado é alterado.
 *
 * @csspart base - O elemento base do calendário.
 * @csspart header - O cabeçalho do calendário.
 * @csspart title - O título do calendário.
 * @csspart navigation - O container dos botões de navegação.
 * @csspart previous-button - O botão para navegar para o anterior.
 * @csspart next-button - O botão para navegar para o próximo.
 * @csspart grid - O container da grade de células (dias, meses ou anos).
 * @csspart weekday - Uma célula de dia da semana.
 * @csspart cell - Uma célula do calendário.
 * @csspart cell--today - Aplicado na célula correspondente à data atual.
 * @csspart cell--selected - Aplicado na célula selecionada.
 * @csspart cell--outside - Aplicado em células fora do intervalo principal.
 * @csspart cell--disabled - Aplicado em células desabilitadas.
 * @csspart footer - O rodapé do calendário.
 * @csspart clear-link - O botão estilizado como link para limpar a data selecionada.
 * @csspart today-link - O botão estilizado como link para selecionar a data atual.
 */
@customElement('cps-calendar')
export default class CpsCalendar extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  @query('.calendar') calendar: HTMLElement;
  @query('.calendar__grid') calendarGrid: HTMLElement;

  /**
   * A data selecionada no formato ISO 8601 (ex: "2025-07-28").
   * Quando não definida, nenhuma data estará selecionada.
   */
  @property() value = '';

  /**
   * A data mínima selecionável no formato ISO 8601 (ex: "2025-07-28").
   * Datas anteriores serão desabilitadas.
   */
  @property() min = '';

  /**
   * A data máxima selecionável no formato ISO 8601 (ex: "2025-07-28").
   * Datas posteriores serão desabilitadas.
   */
  @property() max = '';

  /**
   * Determina se o rodapé do calendário deve ser ocultado.
   */
  @property({ type: Boolean, attribute: 'hide-footer' }) hideFooter = false;

  /**
   * Determina se células fora do intervalo principal (dias fora do mês ou anos fora da década) devem ser ocultadas.
   * Por padrão, células fora do intervalo principal são exibidas.
   */
  @property({ type: Boolean, attribute: 'hide-outside' }) hideOutside = false;

  /**
   * Primeiro dia da semana no calendário, podendo ser: `'sunday'`, `'monday'`, `'tuesday'`, `'wednesday'`, `'thursday'`, `'friday'`, `'saturday'`.
   * Caso não informado, o primeiro dia da semana será determinado automaticamente com base no idioma do usuário.
   */
  @property({ type: String, attribute: 'first-day-of-week' })
  firstDayOfWeek: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | null = null;

  /**
   * Dias da semana desabilitados no calendário, no formato `'sunday'`, `'monday'`, `'tuesday'`, `'wednesday'`, `'thursday'`, `'friday'`, `'saturday'`.
   * Aceita um único dia, ou uma lista de dias da semana separados por vírgula.
   */
  @property({ type: String, attribute: 'disable-weekdays' })
  disableWeekdays: string = '';

  /**
   * Datas específicas desabilitadas no calendário.
   * Aceita uma ou mais datas no formato ISO 8601 (YYYY-MM-DD), separadas por vírgula.
   * Exemplo: `disable-dates="2023-03-13,2023-03-14,2023-03-24"` desabilita as datas 13, 14 e 24 de março de 2023.
   */
  @property({ type: String, attribute: 'disable-dates' })
  disableDates: string = '';

  @state() private currentMonth = 0;

  @state() private currentYear = 0;

  @state() private selectedDate: Date | null = null;

  @state() private calendarData: {
    day: number;
    month: number;
    year: number;
    isOutsideMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    date: Date;
  }[][] = [];

  @state() private focusedCell: { row: number; col: number } | null = null;

  @state() private currentView: 'days' | 'months' | 'years' = 'days';

  @state() private previousView: 'days' | 'months' | 'years' | null = null;

  constructor() {
    super();
    this.initializeCalendar();
  }

  connectedCallback() {
    super.connectedCallback();
    this.initializeCalendar();

    this.addEventListener('keydown', this.handleGridKeyDown as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.handleGridKeyDown as EventListener);
  }

  updated() {
    this.focusCurrentCell();
  }

  /**
   * Navega para o mês, ano ou década anterior, dependendo da visualização atual.
   */
  public previous() {
    if (this.currentView === 'years') {
      this.currentYear = Math.floor(this.currentYear / 10) * 10 - 10;
    } else if (this.currentView === 'months') {
      this.currentYear--;
    } else {
      this.currentMonth--;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
    }
    this.generateCalendarData();
  }

  /**
   * Navega para o próximo mês, ano ou década, dependendo da visualização atual.
   */
  public next() {
    if (this.currentView === 'years') {
      this.currentYear = Math.floor(this.currentYear / 10) * 10 + 10;
    } else if (this.currentView === 'months') {
      this.currentYear++;
    } else {
      this.currentMonth++;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      }
    }
    this.generateCalendarData();
  }

  /**
   * Limpa a data selecionada no calendário.
   */
  public clear() {
    this.value = '';
    this.selectedDate = null;
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.currentView = 'days';
    this.generateCalendarData();
    this.emit('cps-change', {
      detail: {
        value: this.value,
        valueAsDate: this.selectedDate
      }
    });
  }

  /**
   * Define a data atual como a data selecionada no calendário.
   */
  public today() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.value = today.toISOString().split('T')[0];
    this.selectedDate = today;
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.currentView = 'days';
    this.generateCalendarData();
    this.emit('cps-change', {
      detail: {
        value: this.value,
        valueAsDate: this.selectedDate
      }
    });
  }

  private initializeCalendar() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (this.value) {
      this.selectedDate = this.parseDate(this.value, 'startOfDay');
    }

    if (this.selectedDate) {
      this.currentYear = this.selectedDate.getFullYear();
      this.currentMonth = this.selectedDate.getMonth();
    } else {
      this.currentYear = today.getFullYear();
      this.currentMonth = today.getMonth();
    }

    this.generateCalendarData();
  }

  private parseDate(isoString: string, roundTime?: 'startOfDay' | 'endOfDay'): Date | null {
    const match = isoString.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?)?$/);
    if (!match) return null;

    const year = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const day = parseInt(match[3], 10);
    const hasTime = !!match[4];
    const hours = hasTime ? parseInt(match[4], 10) : 0;
    const minutes = hasTime ? parseInt(match[5], 10) : 0;
    const seconds = hasTime ? parseInt(match[6], 10) : 0;
    const milliseconds = hasTime ? parseInt(match[7], 10) : 0;

    if (isNaN(year) || isNaN(month) || isNaN(day) || month < 0 || month > 11 || day < 1 || day > 31) {
      return null;
    }

    const date = new Date(year, month, day, hours, minutes, seconds, milliseconds);

    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
      return null;
    }

    if (!hasTime) {
      if (roundTime === 'startOfDay') {
        date.setHours(0, 0, 0, 0);
      } else if (roundTime === 'endOfDay') {
        date.setHours(23, 59, 59, 999);
      }
    }

    return date;
  }

  @watch('value')
  handleValueChange() {
    const newSelectedDate = this.value ? this.parseDate(this.value, 'startOfDay') : null;

    if (this.areDatesEqual(this.selectedDate, newSelectedDate)) {
      return;
    }

    this.selectedDate = newSelectedDate;

    if (this.selectedDate) {
      const needsViewUpdate =
        this.currentYear !== this.selectedDate.getFullYear() || this.currentMonth !== this.selectedDate.getMonth();

      if (needsViewUpdate) {
        this.currentYear = this.selectedDate.getFullYear();
        this.currentMonth = this.selectedDate.getMonth();
        this.generateCalendarData();
      } else {
        this.updateCalendarSelection();
      }
    } else {
      this.updateCalendarSelection();
    }

    this.emit('cps-change', {
      detail: {
        value: this.value,
        valueAsDate: this.selectedDate
      }
    });
  }

  private areDatesEqual(date1: Date | null, date2: Date | null): boolean {
    if (date1 === null && date2 === null) return true;
    if (date1 === null || date2 === null) return false;

    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  private formatDateToISO(date: Date): string {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private updateCalendarSelection(): void {
    if (!this.calendarData.length) return;

    let updated = false;
    for (const week of this.calendarData) {
      for (const day of week) {
        const dayDate = new Date(day.year, day.month, day.day);
        dayDate.setHours(0, 0, 0, 0);

        const wasSelected = day.isSelected;
        day.isSelected = this.selectedDate !== null && this.areDatesEqual(dayDate, this.selectedDate);

        if (wasSelected !== day.isSelected) {
          updated = true;
        }
      }
    }

    if (updated) {
      this.requestUpdate();
    }
  }

  @watch(['min', 'max', 'firstDayOfWeek', 'hideOutside'])
  handleOptionsChange() {
    this.generateCalendarData();
  }

  private getFirstDayOfWeekIndex(): number {
    const firstDayOfWeek = this.firstDayOfWeek || this.localize.term('$firstDayOfWeek');
    return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(firstDayOfWeek);
  }

  private generateCalendarData() {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();

    const firstDayOfWeekIndex = this.getFirstDayOfWeekIndex();

    const startOffset = (firstDayOfMonth - firstDayOfWeekIndex + 7) % 7;
    const daysInPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const minDate = this.min ? this.parseDate(this.min, 'startOfDay') : null;
    const maxDate = this.max ? this.parseDate(this.max, 'endOfDay') : null;

    const disabledWeekdays = (this.disableWeekdays?.split(',') || [])
      .map(day => {
        return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(day.trim());
      })
      .filter(index => index !== -1);

    const disabledDates = (this.disableDates?.split(',') || [])
      .map(date => this.parseDate(date.trim(), 'startOfDay'))
      .filter(date => date !== null) as Date[];

    const calendarData = [];
    let dayCounter = 1 - startOffset;

    for (let week = 0; week < 6; week++) {
      const weekData = [];

      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        let day: number;
        let month: number;
        let year: number;

        if (dayCounter <= 0) {
          day = daysInPrevMonth + dayCounter;
          month = this.currentMonth - 1;
          year = this.currentYear;

          if (month < 0) {
            month = 11;
            year--;
          }
        } else if (dayCounter > daysInMonth) {
          day = dayCounter - daysInMonth;
          month = this.currentMonth + 1;
          year = this.currentYear;

          if (month > 11) {
            month = 0;
            year++;
          }
        } else {
          day = dayCounter;
          month = this.currentMonth;
          year = this.currentYear;
        }

        const cellDate = new Date(year, month, day);
        cellDate.setHours(0, 0, 0, 0);

        const isToday = this.areDatesEqual(cellDate, today);
        const isSelected = this.selectedDate !== null && this.areDatesEqual(cellDate, this.selectedDate);
        const isOutsideMonth = month !== this.currentMonth;

        let isDisabled = false;
        if (minDate && cellDate < minDate) isDisabled = true;
        if (maxDate && cellDate > maxDate) isDisabled = true;
        if (disabledWeekdays.includes(cellDate.getDay())) isDisabled = true;
        if (disabledDates.some(disabledDate => this.areDatesEqual(cellDate, disabledDate))) isDisabled = true;

        weekData.push({
          day,
          month,
          year,
          isOutsideMonth,
          isToday,
          isSelected,
          isDisabled,
          date: new Date(cellDate)
        });

        dayCounter++;
      }

      if (week < 5 || weekData.some(d => d.month === this.currentMonth)) {
        calendarData.push(weekData);
      } else {
        break;
      }
    }

    this.calendarData = calendarData;
  }

  private handleDayClick(date: {
    day: number;
    month: number;
    year: number;
    isDisabled: boolean;
    isOutsideMonth?: boolean;
  }) {
    if (date.isDisabled) return;

    const newDate = new Date(date.year, date.month, date.day);

    if (!this.selectedDate || !this.areDatesEqual(newDate, this.selectedDate)) {
      this.selectedDate = newDate;

      const formattedDate = this.formatDateToISO(newDate);
      this.value = formattedDate;

      this.updateCalendarSelection();

      this.emit('cps-change', {
        detail: {
          type: 'date',
          value: formattedDate,
          date: new Date(newDate)
        }
      });
    }

    if (date.isOutsideMonth) {
      this.currentMonth = date.month;
      this.currentYear = date.year;
      this.generateCalendarData();
    }
  }

  private handleMonthClick(month: number) {
    this.previousView = this.currentView;
    this.currentView = 'days';
    this.currentMonth = month;
    this.generateCalendarData();
  }

  private handleYearClick(year: number) {
    this.previousView = this.currentView;
    this.currentView = 'months';
    this.currentYear = year;
    this.generateCalendarData();
  }

  private focusCurrentCell() {
    if (!this.focusedCell) return;
    const { row, col } = this.focusedCell;
    const cell = this.calendarData?.[row]?.[col];
    if (!cell) return;
    const isoDate = `${cell.year}-${String(cell.month + 1).padStart(2, '0')}-${String(cell.day).padStart(2, '0')}`;
    const btn = this.renderRoot.querySelector<HTMLButtonElement>(`.calendar__cell[data-date="${isoDate}"]`);
    btn?.focus();
  }

  private handleGridKeyDown = (event: KeyboardEvent) => {
    if (!this.focusedCell) return;
    const { row, col } = this.focusedCell;
    let nextRow = row;
    let nextCol = col;

    const maxRow = this.calendarData.length - 1;
    const maxCol = this.calendarData[0]?.length - 1 || 6;

    switch (event.key) {
      case 'ArrowLeft':
        nextCol = col > 0 ? col - 1 : maxCol;
        nextRow = col > 0 ? row : row > 0 ? row - 1 : maxRow;
        break;
      case 'ArrowRight':
        nextCol = col < maxCol ? col + 1 : 0;
        nextRow = col < maxCol ? row : row < maxRow ? row + 1 : 0;
        break;
      case 'ArrowUp':
        nextRow = row > 0 ? row - 1 : maxRow;
        break;
      case 'ArrowDown':
        nextRow = row < maxRow ? row + 1 : 0;
        break;
      default:
        return;
    }

    let found = false;
    let tries = 0;
    while (tries < this.calendarData.length * this.calendarData[0].length) {
      const cell = this.calendarData?.[nextRow]?.[nextCol];
      if (cell && !cell.isDisabled && !cell.isOutsideMonth) {
        found = true;
        break;
      }

      if (event.key === 'ArrowLeft') {
        nextCol = nextCol > 0 ? nextCol - 1 : maxCol;
        nextRow = nextCol === maxCol ? (nextRow > 0 ? nextRow - 1 : maxRow) : nextRow;
      } else if (event.key === 'ArrowRight') {
        nextCol = nextCol < maxCol ? nextCol + 1 : 0;
        nextRow = nextCol === 0 ? (nextRow < maxRow ? nextRow + 1 : 0) : nextRow;
      } else if (event.key === 'ArrowUp') {
        nextRow = nextRow > 0 ? nextRow - 1 : maxRow;
      } else if (event.key === 'ArrowDown') {
        nextRow = nextRow < maxRow ? nextRow + 1 : 0;
      }
      tries++;
    }

    if (found) {
      event.preventDefault();
      this.focusedCell = { row: nextRow, col: nextCol };
      this.focusCurrentCell();
    }
  };

  private toggleView() {
    let nextView: typeof this.currentView;

    if (this.currentView === 'days') {
      nextView = 'months';
    } else if (this.currentView === 'years') {
      nextView = 'months';
    } else {
      nextView = this.previousView === 'years' ? 'days' : 'years';
    }

    this.previousView = this.currentView;
    this.currentView = nextView;
  }

  private renderDaysGrid() {
    const today = new Date();
    const weekdays = [];

    const firstDayOfWeekIndex = this.getFirstDayOfWeekIndex();

    for (let i = 0; i < 7; i++) {
      const dayIndex = (firstDayOfWeekIndex + i) % 7;
      const day = new Date(2000, 0, 2 + dayIndex);
      weekdays.push(this.localize.date(day, { weekday: 'narrow' }));
    }

    return html`
      <div part="grid" class="calendar__grid calendar__grid--days">
        ${weekdays.map(day => html`<div part="weekday" class="calendar__weekday">${day}</div>`)}
        ${this.calendarData.map((week, rowIdx) =>
          week.map((day, colIdx) => {
            if (this.hideOutside && day.isOutsideMonth) {
              return html`<div class="calendar__cell calendar__cell--outside"></div>`;
            }
            const isOutside = !this.hideOutside && day.isOutsideMonth;
            const isToday =
              day.year === today.getFullYear() && day.month === today.getMonth() && day.day === today.getDate();
            const partList = [
              'cell',
              isToday && 'cell--today',
              day.isSelected && 'cell--selected',
              isOutside && 'cell--outside',
              day.isDisabled && 'cell--disabled'
            ]
              .filter(Boolean)
              .join(' ');
            const isoDate = `${day.year}-${String(day.month + 1).padStart(2, '0')}-${String(day.day).padStart(2, '0')}`;
            return html`
              <button
                type="button"
                part=${partList}
                class=${classMap({
                  calendar__cell: true,
                  'calendar__cell--today': isToday,
                  'calendar__cell--selected': day.isSelected,
                  'calendar__cell--outside': isOutside,
                  'calendar__cell--disabled': day.isDisabled
                })}
                data-date=${isoDate}
                ?disabled=${day.isDisabled}
                @click=${() => {
                  this.handleDayClick(day);
                  this.focusedCell = { row: rowIdx, col: colIdx };
                }}
                aria-label=${isoDate}
              >
                ${day.day}
              </button>
            `;
          })
        )}
      </div>
    `;
  }

  private renderMonthsGrid() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const months = Array.from({ length: 12 }, (_, i) => ({
      index: i,
      name: this.localize.date(new Date(2000, i, 1), { month: 'short' })
    }));

    const selectedYear = this.selectedDate ? this.selectedDate.getFullYear() : null;
    const selectedMonth = this.selectedDate ? this.selectedDate.getMonth() : null;

    return html`
      <div part="grid" class="calendar__grid calendar__grid--months">
        ${months.map(month => {
          const isSelected = selectedYear === this.currentYear && selectedMonth === month.index;
          const isToday = this.currentYear === currentYear && month.index === currentMonth;
          const partList = ['cell', isToday && 'cell--today', isSelected && 'cell--selected'].filter(Boolean).join(' ');
          return html`
            <button
              type="button"
              part=${partList}
              class=${classMap({
                calendar__cell: true,
                'calendar__cell--today': isToday,
                'calendar__cell--selected': isSelected
              })}
              @click=${() => this.handleMonthClick(month.index)}
            >
              ${month.name}
            </button>
          `;
        })}
      </div>
    `;
  }

  private renderYearsGrid() {
    const today = new Date();
    const currentYear = today.getFullYear();

    const startYear = Math.floor(this.currentYear / 10) * 10;
    const years = [];
    for (let i = -1; i < 11; i++) {
      years.push(startYear + i);
    }

    const rows = [];
    for (let i = 0; i < 12; i += 3) {
      rows.push(years.slice(i, i + 3));
    }

    return html`
      <div part="grid" class="calendar__grid calendar__grid--years">
        ${rows.map(row =>
          row.map(year => {
            const isOutsideDecade = year < startYear || year > startYear + 9;
            const isSelected = !!this.selectedDate && year === this.selectedDate.getFullYear();
            const isToday = year === currentYear;

            if (this.hideOutside && isOutsideDecade) {
              return html`<div class="calendar__cell calendar__cell--outside"></div>`;
            }

            const isOutside = !this.hideOutside && isOutsideDecade;
            const partList = [
              'cell',
              isToday && 'cell--today',
              isSelected && 'cell--selected',
              isOutside && 'cell--outside'
            ]
              .filter(Boolean)
              .join(' ');
            return html`
              <button
                type="button"
                part=${partList}
                class=${classMap({
                  calendar__cell: true,
                  'calendar__cell--today': isToday,
                  'calendar__cell--selected': isSelected && !isOutside,
                  'calendar__cell--outside': isOutside
                })}
                @click=${() => this.handleYearClick(year)}
                aria-disabled="false"
              >
                ${year}
              </button>
            `;
          })
        )}
      </div>
    `;
  }

  private renderHeader() {
    let title: string;

    if (this.currentView === 'years') {
      const startYear = Math.floor(this.currentYear / 10) * 10;
      const endYear = startYear + 9;
      title = `${startYear}–${endYear}`;
    } else if (this.currentView === 'months') {
      title = `${this.currentYear}`;
    } else {
      const month = this.localize.date(new Date(this.currentYear, this.currentMonth, 1), { month: 'long' });
      title = `${month} ${this.currentYear}`;
    }

    const caret: 'up' | 'down' =
      this.currentView === 'days' || (this.currentView === 'months' && this.previousView === 'days') ? 'up' : 'down';

    return html`
      <div part="header" class="calendar__header">
        <button
          part="previous-button"
          class="calendar__navigation-button"
          @click=${this.previous}
          aria-label=${this.localize.term('previous')}
        >
          <cps-icon name="chevron-left" library="system"></cps-icon>
        </button>

        <button
          type="button"
          part="title"
          class=${classMap({
            calendar__title: true,
            [`caret-${caret}`]: true
          })}
          @click=${this.toggleView}
        >
          ${title}
          <cps-icon name="caret" library="system" size="small"></cps-icon>
        </button>

        <button
          part="next-button"
          class="calendar__navigation-button"
          @click=${this.next}
          aria-label=${this.localize.term('next')}
        >
          <cps-icon name="chevron-right" library="system"></cps-icon>
        </button>
      </div>
    `;
  }

  private renderFooter() {
    if (this.hideFooter) {
      return null;
    }

    return html`
      <div part="footer" class="calendar__footer">
        ${this.value
          ? html`
              <button part="clear-link" class="calendar__link calendar__link--clear" @click=${this.clear} type="button">
                ${this.localize.term('clear')}
              </button>
            `
          : ''}

        <button part="today-link" class="calendar__link calendar__link--today" @click=${this.today} type="button">
          ${this.localize.term('today')}
        </button>
      </div>
    `;
  }

  render() {
    return html`
      <div part="base" class="calendar">
        ${this.renderHeader()}
        ${this.currentView === 'years'
          ? this.renderYearsGrid()
          : this.currentView === 'months'
          ? this.renderMonthsGrid()
          : this.renderDaysGrid()}
        ${this.renderFooter()}
      </div>
    `;
  }
}

export { CpsCalendar };

declare global {
  interface HTMLElementTagNameMap {
    'cps-calendar': CpsCalendar;
  }
}
