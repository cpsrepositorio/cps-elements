import{a as e}from"./chunk.OXS4I44J.js";import{a as o}from"./chunk.3U5NA53D.js";var t=o`
  ${e}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    display: flex;
    position: relative;
    align-items: center;
    transition: background-color var(--cps-transition-fast), color var(--cps-transition-fast);
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    padding: var(--cps-spacing-3) var(--cps-spacing-4);
    letter-spacing: var(--cps-tracking-normal);
    white-space: nowrap;
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
    will-change: background-color, color;
    user-select: none;
  }

  .option::before {
    position: absolute;
    left: var(--cps-spacing-0-5);
    transition: var(--cps-transition-slow) opacity;
    opacity: 0;
    border-radius: var(--cps-border-radius-small);
    background-color: var(--cps-color-fill-accent-primary);
    width: calc(var(--cps-spacing-1) - var(--cps-spacing-px));
    height: var(--cps-spacing-4);
    content: '';
    pointer-events: none;
    will-change: opacity;
  }

  .option:not(.option--checkable) .option__check {
    display: none;
  }

  .option.option--disabled {
    outline: none;
    color: var(--cps-color-text-disabled);
    pointer-events: none;
  }

  .option:not(.option--disabled):is(.option--hover, .option--current) {
    background-color: var(--cps-color-fill-subtle-secondary);
  }

  .option:not(.option--checkable):is(.option--selected) {
    background-color: var(--cps-color-fill-subtle-secondary);
  }

  .option--selected:not(.option--disabled, .option--checkable)::before {
    opacity: 1;
  }

  .option__label {
    display: inline-block;
    flex: 1 1 auto;
    line-height: var(--cps-line-height-dense);
  }

  .option .option__check {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    margin-inline-start: calc(var(--cps-spacing-0-5) * -1);
    margin-inline-end: var(--cps-spacing-2-5);
    width: 0.875rem;
  }

  .option__unchecked {
    color: var(--cps-color-stroke-inverted-tertiary);
  }

  .option__checked {
    display: none;
    color: var(--cps-color-text-secondary);
  }

  .option--selected .option__unchecked {
    display: none;
  }

  .option--selected .option__checked {
    display: block;
  }

  .option .option__prefix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    color: var(--cps-color-text-secondary);
  }

  .option .option__prefix::slotted(*) {
    margin-inline-start: calc(var(--cps-spacing-0-5) * -1);
    margin-inline-end: var(--cps-spacing-2-5);
  }

  .option .option__suffix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    color: var(--cps-color-text-secondary);
  }

  .option .option__suffix::slotted(*) {
    margin-inline-start: var(--cps-spacing-2-5);
    margin-inline-end: calc(var(--cps-spacing-0-5) * -1);
  }

  .option.option--disabled .option__prefix,
  .option.option--disabled .option__suffix {
    color: var(--cps-color-text-disabled);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;export{t as a};
