import{a as r}from"./chunk.ZWVDM5SZ.js";import{a as i}from"./chunk.BQKLV7EG.js";import{a as t}from"./chunk.OEWLIEQ2.js";var a=t`
  ${t`
    ${i}
    ${r}
  `}

  :host {
    display: block;
  }

  .input {
    display: inline-flex;
    position: relative;
    border-radius: var(--cps-border-radius-medium);
    cursor: text;
    padding: 1px;
    width: 100%;
    overflow: hidden;
  }

  .input::before {
    position: absolute;
    inset: 0;
    border: solid var(--cps-input-border-width) transparent;
    border-radius: var(--cps-border-radius-medium);
    background-clip: border-box;
    background-origin: border-box;
    content: '';
    pointer-events: none;
    -webkit-mask: linear-gradient(white 0 0) border-box, linear-gradient(white 0 0) padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .input::after {
    position: absolute;
    inset: 0;
    transform: scaleX(0);
    transition: var(--cps-transition-fast) transform, var(--cps-transition-fast) opacity;
    opacity: 0;
    z-index: 1;
    border: solid var(--cps-input-border-width) transparent;
    border-bottom-width: var(--cps-input-border-bottom-width);
    border-radius: var(--cps-border-radius-medium);
    background-clip: border-box;
    background-image: linear-gradient(
      transparent 0,
      transparent calc(100% - var(--cps-input-border-bottom-width) * 2),
      var(--cps-input-border-bottom-color-focus) 100%
    );
    background-origin: border-box;
    content: '';
    pointer-events: none;
    will-change: transform, opacity;
    -webkit-mask: linear-gradient(white 0 0) border-box, linear-gradient(white 0 0) padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .input:not(.input--disabled)::before {
    background-image: linear-gradient(
      var(--cps-input-border-color) 0,
      var(--cps-input-border-color) calc(100% - var(--cps-input-border-bottom-width) * 2),
      var(--cps-input-border-bottom-color) 100%
    );
  }

  .input__control {
    -webkit-appearance: none;
    flex: 1 1 auto;
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) box-shadow,
      var(--cps-transition-fast) background-color;
    margin: 0;
    border: none;
    box-shadow: none;
    background: none;
    cursor: inherit;
    padding: 0;
    min-width: 0;
    height: 100%;
    letter-spacing: var(--cps-tracking-normal);
    color: var(--cps-color-text-primary);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    will-change: color, box-shadow, background-color;
  }

  .input
    :is(.input__control, .input__prefix, .input__suffix, .input__clear, .input__password-toggle, .input__date-picker) {
    background-color: var(--cps-input-background);
  }

  .input:not(.input--has-prefix) .input__control {
    border-top-left-radius: var(--cps-border-radius-medium);
    border-bottom-left-radius: var(--cps-border-radius-medium);
  }

  .input:not(.input--has-suffix) .input__control {
    border-top-right-radius: var(--cps-border-radius-medium);
    border-bottom-right-radius: var(--cps-border-radius-medium);
  }

  .input:hover:not(.input--disabled)
    :is(.input__control, .input__prefix, .input__suffix, .input__clear, .input__password-toggle, .input__date-picker) {
    background-color: var(--cps-input-background-hover);
  }

  .form-control--has-label
    .form-control__label:hover
    ~ .form-control-input
    .input:not(.input--focused):not(.input--disabled)
    :is(.input__control, .input__prefix, .input__suffix, .input__clear, .input__password-toggle, .input__date-picker) {
    background-color: var(--cps-input-background-hover);
  }

  .input.input--focused:not(.input--disabled)
    :is(.input__control, .input__prefix, .input__suffix, .input__clear, .input__password-toggle, .input__date-picker) {
    background-color: var(--cps-input-background-active);
  }

  .input.input--focused:not(.input--disabled)::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .input.input--disabled {
    cursor: not-allowed;
  }

  .input.input--disabled::before {
    background-color: var(--cps-color-stroke-primary);
    cursor: not-allowed;
  }

  .input.input--disabled
    :is(.input__control, .input__prefix, .input__suffix, .input__clear, .input__password-toggle, .input__date-picker) {
    background-color: var(--cps-color-stroke-primary);
    color: var(--cps-color-text-disabled);
  }

  .input.input--disabled .input__control::placeholder {
    color: var(--cps-color-text-disabled);
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--cps-input-height-large) var(--cps-input-background-active) inset !important;
    background: transparent !important;
    -webkit-text-fill-color: var(--cps-color-text-primary);
    caret-color: var(--cps-color-text-primary);
  }

  .input__control::placeholder {
    color: var(--cps-color-text-secondary);
    user-select: none;
  }

  .input--empty .input__control {
    color: var(--cps-color-text-secondary);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    transition: var(--cps-transition-fast) background-color;
    cursor: default;
    pointer-events: none;
    will-change: background-color;
  }

  .input__prefix {
    border-top-left-radius: var(--cps-border-radius-medium);
    border-bottom-left-radius: var(--cps-border-radius-medium);
  }

  .input__suffix {
    border-top-right-radius: var(--cps-border-radius-medium);
    border-bottom-right-radius: var(--cps-border-radius-medium);
  }

  .input__prefix::slotted(cps-icon),
  .input__suffix::slotted(cps-icon) {
    color: var(--cps-color-text-secondary);
  }

  /*
   * Size modifiers
   */

  .input--small {
    height: var(--cps-input-height-small);
    font: var(--cps-font-label);
  }

  .input--small .input__control {
    padding: 0 var(--cps-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle,
  .input--small .input__date-picker {
    padding-inline-end: calc(var(--cps-input-spacing-small) / 2);
  }

  .input--small .input__prefix::slotted(*) {
    padding-inline-start: var(--cps-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    padding-inline-end: var(--cps-input-spacing-small);
  }

  .input--medium {
    height: var(--cps-input-height-medium);
    font: var(--cps-font-body);
  }

  .input--medium .input__control {
    padding: 0 var(--cps-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle,
  .input--medium .input__date-picker {
    padding-inline-end: calc(var(--cps-input-spacing-medium) / 2);
  }

  .input--medium .input__prefix::slotted(*) {
    padding-inline-start: var(--cps-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    padding-inline-end: var(--cps-input-spacing-medium);
  }

  .input--large {
    height: var(--cps-input-height-large);
    font: var(--cps-font-body-large);
  }

  .input--large .input__control {
    padding: 0 var(--cps-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle,
  .input--large .input__date-picker {
    padding-inline-end: calc(var(--cps-input-spacing-large) / 2);
  }

  .input--large .input__prefix::slotted(*) {
    padding-inline-start: var(--cps-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    padding-inline-end: var(--cps-input-spacing-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear::part(icon) {
    font-size: 0.75em;
  }

  .input__clear,
  .input__password-toggle,
  .input__date-picker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: var(--cps-transition-fast) background-color;
    border-top-right-radius: var(--cps-border-radius-medium);
    border-bottom-right-radius: var(--cps-border-radius-medium);
    will-change: background-color;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  /* Style built-in date picker icon */
  .input input[type='date']::-webkit-calendar-picker-indicator {
    z-index: -1;
    background: none;
    cursor: text;
    color: transparent;
  }
`;export{a};
