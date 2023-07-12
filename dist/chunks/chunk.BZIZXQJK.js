import{f as e,i as c}from"./chunk.DRZBK76U.js";var t=e`
  ${c}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    position: relative;
    align-items: flex-start;
    cursor: pointer;
    vertical-align: middle;
  }

  .checkbox--small {
    --toggle-size: var(--cps-toggle-size-small);
    font: var(--cps-text-label);
  }

  .checkbox--medium {
    --toggle-size: var(--cps-toggle-size-medium);
    font: var(--cps-text-body);
  }

  .checkbox--large {
    --toggle-size: var(--cps-toggle-size-large);
    font: var(--cps-text-body-large);
  }

  .checkbox__control {
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    transition: var(--cps-transition-fast) border-color, var(--cps-transition-fast) color;
    border: solid var(--cps-spacing-px) var(--cps-foreground-tertiary);
    border-radius: var(--cps-border-radius-small);
    width: var(--toggle-size);
    height: var(--toggle-size);
    color: var(--cps-foreground-inverted-primary);
  }

  .checkbox__control::before {
    position: absolute;
    inset: 0;
    transition: var(--cps-transition-fast) background-color;
    z-index: 0;
    background-color: var(--cps-fill-control-alt-secondary);
    content: '';
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    margin: 0;
    outline: none;
    padding: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    z-index: 1;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Focus */
  .checkbox:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  /* Unchecked + Enabled + Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):hover .checkbox__control::before {
    background-color: var(--cps-fill-control-alt-tertiary);
  }

  /* Unchecked + Enabled + Active */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):active .checkbox__control {
    border-color: var(--cps-stroke-control-inverted-tertiary);
  }

  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):active .checkbox__control::before {
    background-color: var(--cps-fill-control-alt-quaternary);
  }

  /* Unchecked + Disabled */
  .checkbox:not(.checkbox--checked).checkbox--disabled .checkbox__control {
    border-color: var(--cps-fill-accent-disabled);
  }

  .checkbox:not(.checkbox--checked).checkbox--disabled .checkbox__control::before {
    background-color: transparent;
  }

  /* Checked or Indeterminate + Enabled */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control {
    border-color: var(--cps-fill-accent-primary);
  }

  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control::before,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control::before {
    background-color: var(--cps-fill-accent-primary);
  }

  /* Checked or Indeterminate + Enabled + Hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled):hover .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):hover .checkbox__control {
    border-color: var(--cps-fill-accent-secondary);
    color: var(--cps-foreground-inverted-primary);
  }

  .checkbox.checkbox--checked:not(.checkbox--disabled):hover .checkbox__control::before,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):hover .checkbox__control::before {
    background-color: var(--cps-fill-accent-secondary);
  }

  /* Checked or Indeterminate + Enabled + Active */
  .checkbox.checkbox--checked:not(.checkbox--disabled):active .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):active .checkbox__control {
    border-color: var(--cps-fill-accent-tertiary);
    color: var(--cps-foreground-inverted-secondary);
  }

  .checkbox.checkbox--checked:not(.checkbox--disabled):active .checkbox__control::before,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):active .checkbox__control::before {
    background-color: var(--cps-fill-accent-tertiary);
  }

  /* Checked or Indeterminate + Disabled */
  .checkbox.checkbox--checked.checkbox--disabled .checkbox__control,
  .checkbox.checkbox--indeterminate.checkbox--disabled .checkbox__control {
    border-color: var(--cps-fill-accent-disabled);
    color: var(--cps-foreground-inverted-disabled);
  }

  .checkbox.checkbox--checked.checkbox--disabled .checkbox__control::before,
  .checkbox.checkbox--indeterminate.checkbox--disabled .checkbox__control::before {
    background-color: var(--cps-fill-accent-disabled);
  }

  /* Disabled */
  .checkbox--disabled {
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    line-height: var(--toggle-size);
    color: var(--cps-foreground-primary);
    user-select: none;
  }

  .checkbox:not(.checkbox--disabled) .checkbox__label {
    cursor: pointer;
  }

  .checkbox.checkbox--disabled .checkbox__label {
    cursor: not-allowed;
    color: var(--cps-foreground-disabled);
  }

  .checkbox--has-label .checkbox__label {
    margin-inline-start: 0.5em;
  }

  :host([required]) .checkbox__label::after {
    margin-inline-start: var(--cps-input-required-content-offset);
    color: var(--cps-input-required-content-color);
    content: var(--cps-input-required-content);
  }
`;export{t as a};
