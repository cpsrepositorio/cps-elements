import{a as o}from"./chunk.M4ACP6KD.js";import{c as r}from"./chunk.QJBMNVJB.js";var a=r`
  ${o}

  :host {
    display: inline-block;
    width: 100%;
    user-select: none;
  }

  .calendar {
    width: 100%;
    box-sizing: border-box;
  }

  .calendar__header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: var(--cps-spacing-1);
    text-align: center;
    margin-bottom: var(--cps-spacing-2);
    place-items: center;
  }

  .calendar__title {
    grid-column: 2 / -2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--cps-spacing-7);
    font: var(--cps-font-body);
    font-weight: var(--cps-font-weight-bold);
    color: var(--cps-color-text-primary);
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    border-width: var(--cps-button-border-width);
    border-style: solid;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    background: none;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    transition: background var(--cps-transition-fast), color var(--cps-transition-fast),
      border-color var(--cps-transition-fast), border-style var(--cps-transition-fast);
    outline: none;
    gap: var(--cps-spacing-1);
    padding: 0;
    user-select: none;
  }

  .calendar__title cps-icon {
    color: var(--cps-color-text-secondary);
    transition: color var(--cps-transition-fast);
  }

  .calendar__title:hover {
    background-color: var(--cps-color-fill-secondary);
    border-style: solid;
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    color: var(--cps-color-text-primary);
  }

  .calendar__title:active {
    background-color: var(--cps-color-fill-tertiary);
    border-top-color: var(--cps-color-stroke-primary);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-stroke-primary);
    border-left-color: var(--cps-color-stroke-primary);
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
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--cps-spacing-7);
    height: var(--cps-spacing-7);
    box-sizing: border-box;
    border: none;
    border-radius: 25%;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    vertical-align: middle;
    text-decoration: none;
    white-space: nowrap;
    color: var(--cps-color-text-secondary);
    font: inherit;
    user-select: none;
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) color;
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
    display: grid;
    width: 100%;
    box-sizing: border-box;
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
    font: var(--cps-font-label);
    font-weight: var(--cps-font-weight-semibold);
    color: var(--cps-color-text-secondary);
    padding: var(--cps-spacing-1);
    text-align: center;
  }

  .calendar__cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font: var(--cps-font-body);
    color: var(--cps-color-text-primary);
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    border-width: var(--cps-button-border-width);
    border-style: solid;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    background: none;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    transition: background var(--cps-transition-fast), color var(--cps-transition-fast),
      border-color var(--cps-transition-fast), border-style var(--cps-transition-fast);
    outline: none;
    padding-top: var(--cps-spacing-2);
    padding-bottom: var(--cps-spacing-2);
    font-weight: var(--cps-font-weight-regular);
    user-select: none;
  }

  .calendar__cell:hover:not(.calendar__cell--disabled, .calendar__cell--selected, .calendar__cell--today) {
    background-color: var(--cps-color-fill-secondary);
    border-style: solid;
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    color: var(--cps-color-text-primary);
  }

  .calendar__cell:active:not(.calendar__cell--disabled, .calendar__cell--selected) {
    background-color: var(--cps-color-fill-tertiary);
    border-top-color: var(--cps-color-stroke-primary);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-stroke-primary);
    border-left-color: var(--cps-color-stroke-primary);
    color: var(--cps-color-text-tertiary);
  }

  .calendar__cell--today {
    font-weight: var(--cps-font-weight-bold);
    border-style: dashed;
    border-color: var(--cps-color-elevation-bottom-control);
    background: none;
    transition: background var(--cps-transition-fast), color var(--cps-transition-fast),
      border-color var(--cps-transition-fast), border-style var(--cps-transition-fast);
  }

  .calendar__cell--today:hover:not(.calendar__cell--disabled, .calendar__cell--selected) {
    background-color: var(--cps-color-fill-secondary);
    border-style: solid;
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    color: var(--cps-color-text-primary);
  }

  .calendar__cell--today:active:not(.calendar__cell--disabled):not(.calendar__cell--selected) {
    background-color: var(--cps-color-fill-tertiary);
    border-top-color: var(--cps-color-stroke-primary);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-stroke-primary);
    border-left-color: var(--cps-color-stroke-primary);
    color: var(--cps-color-text-tertiary);
  }

  .calendar__cell--selected {
    color: var(--cps-color-text-inverted-primary);
    background: var(--cps-color-fill-accent-primary);
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    font-weight: var(--cps-font-weight-semibold);
    border-style: solid;
  }

  .calendar__cell--selected:hover:not(.calendar__cell--disabled) {
    background-color: var(--cps-color-fill-accent-secondary);
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    color: var(--cps-color-text-inverted-primary);
  }

  .calendar__cell--selected:active:not(.calendar__cell--disabled) {
    background-color: var(--cps-color-fill-accent-tertiary);
    border-top-color: var(--cps-color-stroke-inverted-primary);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-stroke-inverted-primary);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    color: var(--cps-color-text-inverted-secondary);
  }

  .calendar__cell--outside {
    color: var(--cps-color-text-secondary);
    background: none;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }

  .calendar__cell--outside:not(button) {
    pointer-events: none;
    cursor: default;
  }

  .calendar__cell--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    background: none;
    color: var(--cps-color-text-secondary);
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
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
    text-align: center;
    margin-top: var(--cps-spacing-2);
  }

  .calendar__link {
    display: inline-block;
    text-align: center;
    width: 100%;
    border-radius: var(--cps-border-radius-medium);
    text-decoration: none;
    background: none;
    border: none;
    padding: var(--cps-spacing-1) var(--cps-spacing-2-5);
    color: var(--cps-color-text-accent-primary);
    font: var(--cps-font-body);
    cursor: pointer;
    transition: var(--cps-transition-fast) color;
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
`;export{a};
