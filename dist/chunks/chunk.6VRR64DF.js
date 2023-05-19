import{f as t,i as r}from"./chunk.7AWEOCKJ.js";var n=t`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    margin-bottom: var(--cps-spacing-1);
    color: inherit;
  }

  .form-control--has-label.form-control--small .form-control__label {
    font: var(--cps-text-caption);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font: var(--cps-text-label);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font: var(--cps-text-body);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    margin-inline-start: var(--cps-input-required-content-offset);
    color: var(--cps-input-required-content-color);
    content: var(--cps-input-required-content);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    margin-top: var(--cps-spacing-1);
    color: var(--cps-foreground-secondary);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font: var(--cps-text-caption);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font: var(--cps-text-label);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font: var(--cps-text-body);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--cps-spacing-1);
  }
`;var l=t`
  ${t`
    ${r}
    ${n}
  `}

  :host {
    display: block;
  }

  .input {
    display: inline-flex;
    position: relative;
    flex: 1 1 auto;
    align-items: stretch;
    justify-content: start;
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) border,
      var(--cps-transition-fast) box-shadow, var(--cps-transition-fast) background-color;
    border-radius: var(--cps-border-radius-medium);
    background-color: var(--cps-input-background);
    cursor: text;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    letter-spacing: var(--cps-tracking-normal);
    font: var(--cps-text-body);
  }

  .input::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: solid var(--cps-input-border-width) transparent;
    border-radius: var(--cps-border-radius-medium);
    background-clip: border-box;
    background-origin: border-box;
    content: '';
    pointer-events: none;
    -webkit-mask: linear-gradient(#fff 0 0) border-box, linear-gradient(#fff 0 0) padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .input::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: var(--cps-transition-fast) transform, var(--cps-transition-fast) opacity;
    opacity: 0;
    border-radius: 0 0 var(--cps-border-radius-medium) var(--cps-border-radius-medium);
    background: var(--cps-fill-accent-primary);
    height: calc(var(--cps-input-border-width) * 2);
    content: '';
    pointer-events: none;
    will-change: transform;
  }

  .input:not(.input--disabled)::before {
    background-image: linear-gradient(
      var(--cps-input-border-color),
      var(--cps-input-border-color) calc(100% - var(--cps-border-radius-medium)),
      var(--cps-input-border-bottom-color)
    );
  }

  .input:hover:not(.input--disabled) {
    background-color: var(--cps-input-background-hover);
  }

  .form-control--has-label
    .form-control__label:hover
    ~ .form-control-input
    .input:not(.input--focused):not(.input--disabled) {
    background-color: var(--cps-input-background-hover);
  }

  .input.input--focused:not(.input--disabled) {
    background-color: var(--cps-input-background-active);
  }

  .input.input--focused:not(.input--disabled)::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .input.input--focused:not(.input--disabled) .input__control {
    color: var(--cps-foreground-primary-focus);
  }

  .input.input--disabled {
    border-color: var(--cps-stroke-control-primary);
    background-color: var(--cps-input-background-disabled);
    cursor: not-allowed;
    color: var(--cps-foreground-disabled);
  }

  .input.input--disabled::before {
    background-color: var(--cps-stroke-control-primary);
  }

  .input.input--disabled .input__control {
    color: var(--cps-foreground-disabled);
  }

  .input.input--disabled .input__control::placeholder {
    color: var(--cps-foreground-disabled);
  }

  .input__control {
    -webkit-appearance: none;
    flex: 1 1 auto;
    margin: 0;
    border: none;
    box-shadow: none;
    background: none;
    cursor: inherit;
    padding: 0;
    min-width: 0;
    height: 100%;
    color: var(--cps-foreground-primary);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
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
    -webkit-text-fill-color: var(--cps-color-primary-500);
    caret-color: var(--cps-foreground-primary);
  }

  .input__control::placeholder {
    color: var(--cps-foreground-secondary);
    user-select: none;
  }

  .input--empty .input__control {
    color: var(--cps-foreground-secondary);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
    pointer-events: none;
  }

  .input__prefix::slotted(cps-icon),
  .input__suffix::slotted(cps-icon) {
    color: var(--cps-foreground-secondary);
  }

  /*
   * Size modifiers
   */

  .input--small {
    height: var(--cps-input-height-small);
    font-size: var(--cps-input-font-size-small);
  }

  .input--small .input__control {
    padding: 0 var(--cps-input-spacing-small);
    height: var(--cps-input-height-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle,
  .input--small .input__date-picker {
    margin-inline-end: calc(var(--cps-input-spacing-small) / 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--cps-input-spacing-small);
  }

  .input--medium {
    height: var(--cps-input-height-medium);
    font-size: var(--cps-input-font-size-medium);
  }

  .input--medium .input__control {
    padding: 0 var(--cps-input-spacing-medium);
    height: var(--cps-input-height-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle,
  .input--medium .input__date-picker {
    margin-inline-end: calc(var(--cps-input-spacing-medium) / 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--cps-input-spacing-medium);
  }

  .input--large {
    height: var(--cps-input-height-large);
    font-size: var(--cps-input-font-size-large);
  }

  .input--large .input__control {
    padding: 0 var(--cps-input-spacing-large);
    height: var(--cps-input-height-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle,
  .input--large .input__date-picker {
    margin-inline-end: calc(var(--cps-input-spacing-large) / 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--cps-input-spacing-large);
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
`;export{l as a};
