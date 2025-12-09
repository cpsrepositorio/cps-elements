import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    width: 100%;
    user-select: none;
  }

  .calendar {
    box-sizing: border-box;
    width: 100%;
  }

  .calendar__header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: var(--cps-spacing-1);
    place-items: center;
    margin-bottom: var(--cps-spacing-2);
    text-align: center;
  }

  .calendar__title {
    box-sizing: border-box;
    display: flex;
    grid-column: 2 / -2;
    gap: var(--cps-spacing-1);
    align-items: center;
    justify-content: center;
    transition: background var(--cps-transition-fast), color var(--cps-transition-fast),
      border-color var(--cps-transition-fast), border-style var(--cps-transition-fast);
    outline: none;
    border-width: var(--cps-button-border-width);
    border-style: solid;
    border-radius: var(--cps-border-radius-medium);
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    background: none;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: var(--cps-spacing-7);
    vertical-align: middle;
    text-align: center;
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
    font-weight: var(--cps-font-weight-bold);
    user-select: none;
  }

  .calendar__title cps-icon {
    transition: color var(--cps-transition-fast);
    color: var(--cps-color-text-secondary);
  }

  .calendar__title:hover {
    border-style: solid;
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-secondary);
    color: var(--cps-color-text-primary);
  }

  .calendar__title:active {
    border-top-color: var(--cps-color-stroke-primary);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-stroke-primary);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-tertiary);
    color: var(--cps-color-text-tertiary);
  }

  .calendar__title:active cps-icon {
    color: var(--cps-color-text-tertiary);
  }

  :is(.calendar__title, .calendar__cell, .calendar__navigation-button, .calendar__link):focus {
    outline: none;
  }

  .calendar__title:focus-visible:not(.calendar__title--disabled),
  .calendar__cell:focus-visible:not(.calendar__cell--disabled),
  .calendar__navigation-button:focus-visible:not(.calendar__navigation-button--disabled),
  .calendar__link:focus-visible:not(.calendar__link--disabled) {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  .calendar__title.caret-up cps-icon {
    transform: rotate(180deg);
    transition: transform var(--cps-transition-fast) ease-in-out;
  }

  .calendar__title.caret-down cps-icon {
    transform: rotate(0deg);
    transition: transform var(--cps-transition-fast) ease-in-out;
  }

  .calendar__navigation-button {
    box-sizing: border-box;
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    justify-content: center;
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) color;
    border: none;
    border-radius: 25%;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    width: var(--cps-spacing-7);
    height: var(--cps-spacing-7);
    vertical-align: middle;
    text-decoration: none;
    white-space: nowrap;
    color: var(--cps-color-text-secondary);
    font: inherit;
    user-select: none;
  }

  .calendar__navigation-button:hover {
    background-color: var(--cps-color-fill-subtle-secondary);
    color: var(--cps-color-text-primary);
  }

  .calendar__navigation-button:active {
    background-color: var(--cps-color-fill-subtle-tertiary);
    color: var(--cps-color-text-tertiary);
  }

  .calendar__navigation-button:focus {
    outline: none;
  }

  .calendar__grid,
  .calendar__grid--months,
  .calendar__grid--years {
    box-sizing: border-box;
    display: grid;
    width: 100%;
  }

  .calendar__grid {
    grid-template-columns: repeat(7, 1fr);
    gap: var(--cps-spacing-1);
    text-align: center;
  }

  .calendar__grid--months,
  .calendar__grid--years {
    grid-template-columns: repeat(3, 1fr);
  }

  .calendar__weekday {
    padding: var(--cps-spacing-1);
    text-align: center;
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-label);
    font-weight: var(--cps-font-weight-semibold);
  }

  .calendar__cell {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--cps-transition-fast), color var(--cps-transition-fast),
      border-color var(--cps-transition-fast), border-style var(--cps-transition-fast);
    outline: none;
    border-width: var(--cps-button-border-width);
    border-style: solid;
    border-radius: var(--cps-border-radius-medium);
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    background: none;
    cursor: pointer;
    padding-top: var(--cps-spacing-2);
    padding-bottom: var(--cps-spacing-2);
    width: 100%;
    vertical-align: middle;
    text-align: center;
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
    font-weight: var(--cps-font-weight-regular);
    user-select: none;
  }

  .calendar__cell:hover:not(.calendar__cell--disabled, .calendar__cell--selected, .calendar__cell--today) {
    border-style: solid;
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-secondary);
    color: var(--cps-color-text-primary);
  }

  .calendar__cell:active:not(.calendar__cell--disabled, .calendar__cell--selected) {
    border-top-color: var(--cps-color-stroke-primary);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-stroke-primary);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-tertiary);
    color: var(--cps-color-text-tertiary);
  }

  .calendar__cell--today {
    transition: background var(--cps-transition-fast), color var(--cps-transition-fast),
      border-color var(--cps-transition-fast), border-style var(--cps-transition-fast);
    border-style: dashed;
    border-color: var(--cps-color-elevation-bottom-control);
    background: none;
    font-weight: var(--cps-font-weight-bold);
  }

  .calendar__cell--today:hover:not(.calendar__cell--disabled, .calendar__cell--selected) {
    border-style: solid;
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-secondary);
    color: var(--cps-color-text-primary);
  }

  .calendar__cell--today:active:not(.calendar__cell--disabled):not(.calendar__cell--selected) {
    border-top-color: var(--cps-color-stroke-primary);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-stroke-primary);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-tertiary);
    color: var(--cps-color-text-tertiary);
  }

  .calendar__cell--selected {
    border-style: solid;
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    background: var(--cps-color-fill-accent-primary);
    color: var(--cps-color-text-inverted-primary);
    font-weight: var(--cps-font-weight-semibold);
  }

  .calendar__cell--selected:hover:not(.calendar__cell--disabled) {
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    background-color: var(--cps-color-fill-accent-secondary);
    color: var(--cps-color-text-inverted-primary);
  }

  .calendar__cell--selected:active:not(.calendar__cell--disabled) {
    border-top-color: var(--cps-color-stroke-inverted-primary);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-stroke-inverted-primary);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    background-color: var(--cps-color-fill-accent-tertiary);
    color: var(--cps-color-text-inverted-secondary);
  }

  .calendar__cell--outside {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    background: none;
    color: var(--cps-color-text-secondary);
  }

  .calendar__cell--outside:not(button) {
    cursor: default;
    pointer-events: none;
  }

  .calendar__cell--disabled {
    opacity: 0.5;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    background: none;
    cursor: not-allowed;
    color: var(--cps-color-text-secondary);
    pointer-events: none;
  }

  .calendar__cell--selected.calendar__cell--disabled {
    background: var(--cps-color-fill-accent-disabled);
  }

  .calendar__grid--months .calendar__cell,
  .calendar__grid--years .calendar__cell {
    padding-top: var(--cps-spacing-3);
    padding-bottom: var(--cps-spacing-3);
  }

  .calendar__footer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: var(--cps-spacing-1);
    margin-top: var(--cps-spacing-2);
    text-align: center;
  }

  .calendar__link {
    display: inline-block;
    transition: var(--cps-transition-fast) color;
    border: none;
    border-radius: var(--cps-border-radius-medium);
    background: none;
    cursor: pointer;
    padding: var(--cps-spacing-1) var(--cps-spacing-2-5);
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: var(--cps-color-text-accent-primary);
    font: var(--cps-font-body);
  }

  .calendar__link:hover {
    color: var(--cps-color-text-accent-secondary);
  }

  .calendar__link:active {
    color: var(--cps-color-text-accent-tertiary);
  }

  .calendar__link--clear {
    grid-column: 1 / 2;
  }

  .calendar__link--today {
    grid-column: 7 / 8;
  }
`;
