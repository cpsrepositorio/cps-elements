import{a as r}from"./chunk.VGVDIVHV.js";import{a as o}from"./chunk.3U5NA53D.js";var c=o`
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
    font: var(--cps-font-label);
  }

  .radio--medium {
    --toggle-size: var(--cps-toggle-size-medium);
    font: var(--cps-font-body);
  }

  .radio--large {
    --toggle-size: var(--cps-toggle-size-large);
    font: var(--cps-font-body-large);
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
    border: solid var(--cps-spacing-px) var(--cps-input-border-bottom-color);
    border-radius: var(--cps-border-radius-full);
    background-clip: content-box;
    background-color: var(--cps-color-fill-alt-secondary);
    width: var(--toggle-size);
    height: var(--toggle-size);
    overflow: hidden;
    will-change: background-color, border-color, background-clip;
  }

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
    border-radius: var(--cps-border-radius-full);
    background-clip: content-box;
    background-color: var(--cps-color-text-inverted-primary);
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
    background-color: var(--cps-color-fill-alt-tertiary);
  }

  /* Unchecked + Enabled + Active */
  .radio:not(.radio--checked):not(.radio--disabled):active .radio__control {
    border-color: var(--cps-color-stroke-inverted-tertiary);
    background-color: var(--cps-color-fill-alt-quaternary);
  }

  /* Unchecked + Disabled */
  .radio:not(.radio--checked).radio--disabled .radio__control {
    border-color: var(--cps-color-fill-accent-disabled);
    background-color: transparent;
  }

  /* Checked + Enabled */
  .radio.radio--checked:not(.radio--disabled) .radio__control {
    border-color: var(--cps-color-fill-accent-primary);
    background-clip: border-box;
    background-color: var(--cps-color-fill-accent-primary);
  }

  /* Checked + Enabled + Hover */
  .radio.radio--checked:not(.radio--disabled):hover .radio__control {
    border-color: var(--cps-color-fill-accent-secondary);
    background-clip: border-box;
    background-color: var(--cps-color-fill-accent-secondary);
  }

  .radio.radio--checked:not(.radio--disabled):hover .radio__checked-handle {
    transform: scale(1.1);
    background-color: var(--cps-color-text-inverted-primary);
  }

  /* Checked + Enabled + Active */
  .radio.radio--checked:not(.radio--disabled):active .radio__control {
    border-color: var(--cps-color-fill-accent-tertiary);
    background-clip: border-box;
    background-color: var(--cps-color-fill-accent-tertiary);
  }

  .radio.radio--checked:not(.radio--disabled):active .radio__checked-handle {
    transform: scale(0.85);
    background-color: var(--cps-color-text-inverted-secondary);
  }

  /* Checked + Disabled */
  .radio.radio--checked.radio--disabled .radio__control {
    border-color: var(--cps-color-fill-accent-disabled);
    background-clip: border-box;
    background-color: var(--cps-color-fill-accent-disabled);
  }

  .radio.radio--checked.radio--disabled .radio__checked-handle {
    background-color: var(--cps-color-text-inverted-primary);
  }

  /* Disabled */
  .radio--disabled {
    cursor: not-allowed;
  }

  .radio__label {
    display: inline-block;
    line-height: var(--toggle-size);
    color: var(--cps-color-text-primary);
    user-select: none;
  }

  .radio:not(.radio--disabled) .radio__label {
    cursor: pointer;
  }

  .radio.radio--disabled .radio__label {
    cursor: not-allowed;
    color: var(--cps-color-text-disabled);
  }

  .radio--has-label .radio__label {
    margin-inline-start: 0.5em;
  }
`;export{c as a};
