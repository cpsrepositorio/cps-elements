import{f as o,i as r}from"./chunk.DRZBK76U.js";var i=o`
  ${r}

  :host {
    display: inline-block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    cursor: pointer;
    vertical-align: middle;
  }

  .radio--small {
    --toggle-size: var(--cps-toggle-size-small);
    font: var(--cps-text-label);
  }

  .radio--medium {
    --toggle-size: var(--cps-toggle-size-medium);
    font: var(--cps-text-body);
  }

  .radio--large {
    --toggle-size: var(--cps-toggle-size-large);
    font: var(--cps-text-body-large);
  }

  .radio__checked-icon {
    display: inline-block;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    display: inline-grid;
    position: relative;
    flex: 0 0 auto;
    place-items: center;
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) border-color,
      var(--cps-transition-fast) background-clip;
    border: solid 1px var(--cps-foreground-tertiary);
    border-radius: 50%;
    background-clip: content-box;
    background-color: var(--cps-fill-control-alt-secondary);
    width: var(--toggle-size);
    height: var(--toggle-size);
    overflow: hidden;
    will-change: background-color, border-color, background-clip;
  }

  /*
  .radio__control::before {
    position: absolute;
    inset: 0;
    transition: var(--cps-transition-fast) border-color;
    z-index: 0;
    border: solid 1px var(--cps-foreground-tertiary);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    content: '';
    pointer-events: none;
    will-change: border-color;
  }

  .radio__control::after {
    position: absolute;
    inset: 0;
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) border-width;
    z-index: 0;
    border: solid 1px transparent;
    border-radius: 50%;
    background-clip: content-box;
    background-color: var(--cps-fill-control-alt-secondary);
    width: 100%;
    height: 100%;
    content: '';
    will-change: background-color, border-width;
  }
  */

  .radio__input {
    position: absolute;
    opacity: 0;
    margin: 0;
    outline: none;
    padding: 0;
    pointer-events: none;
  }

  .radio__checked-handle {
    display: block;
    transform: scale(0);
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) transform;
    z-index: 1;
    border: solid 4px transparent;
    border-radius: 50%;
    background-clip: content-box;
    background-color: var(--cps-foreground-inverted-primary);
    width: 100%;
    height: 100%;
    will-change: background-color, transform;
  }

  /* Checked */
  .radio.radio--checked .radio__checked-handle {
    transform: scale(1);
  }

  /* Focus */
  .radio:not(.radio--disabled) .radio__input:focus-visible ~ .radio__control {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  /* Unchecked + Enabled + Hover */
  .radio:not(.radio--checked):not(.radio--disabled):hover .radio__control {
    background-color: var(--cps-fill-control-alt-tertiary);
  }

  /* Unchecked + Enabled + Active */
  .radio:not(.radio--checked):not(.radio--disabled):active .radio__control {
    border-color: var(--cps-stroke-control-inverted-tertiary);
    background-color: var(--cps-fill-control-alt-quaternary);
  }

  /* Unchecked + Disabled */
  .radio:not(.radio--checked).radio--disabled .radio__control {
    border-color: var(--cps-fill-accent-disabled);
    background-color: transparent;
  }

  /* Checked + Enabled */
  .radio.radio--checked:not(.radio--disabled) .radio__control {
    border-color: var(--cps-fill-accent-primary);
    background-clip: border-box;
    background-color: var(--cps-fill-accent-primary);
  }

  /* Checked + Enabled + Hover */
  .radio.radio--checked:not(.radio--disabled):hover .radio__control {
    border-color: var(--cps-fill-accent-secondary);
    background-clip: border-box;
    background-color: var(--cps-fill-accent-secondary);
  }

  .radio.radio--checked:not(.radio--disabled):hover .radio__checked-handle {
    transform: scale(1.1);
    background-color: var(--cps-foreground-inverted-primary);
  }

  /* Checked + Enabled + Active */
  .radio.radio--checked:not(.radio--disabled):active .radio__control {
    border-color: var(--cps-fill-accent-tertiary);
    background-clip: border-box;
    background-color: var(--cps-fill-accent-tertiary);
  }

  .radio.radio--checked:not(.radio--disabled):active .radio__checked-handle {
    transform: scale(0.85);
    background-color: var(--cps-foreground-inverted-secondary);
  }

  /* Checked + Disabled */
  .radio.radio--checked.radio--disabled .radio__control {
    border-color: var(--cps-fill-accent-disabled);
    background-clip: border-box;
    background-color: var(--cps-fill-accent-disabled);
  }

  .radio.radio--checked.radio--disabled .radio__checked-handle {
    background-color: var(--cps-foreground-inverted-primary);
  }

  /* Disabled */
  .radio--disabled {
    cursor: not-allowed;
  }

  .radio__label {
    display: inline-block;
    line-height: var(--toggle-size);
    color: var(--cps-foreground-primary);
    user-select: none;
  }

  .radio:not(.radio--disabled) .radio__label {
    cursor: pointer;
  }

  .radio.radio--disabled .radio__label {
    cursor: not-allowed;
    color: var(--cps-foreground-disabled);
  }

  .radio--has-label .radio__label {
    margin-inline-start: 0.5em;
  }
`;export{i as a};
