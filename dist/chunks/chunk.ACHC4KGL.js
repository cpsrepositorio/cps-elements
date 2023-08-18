import{f as o,i as t}from"./chunk.XKNP6CD6.js";var i=o`
  ${t}

  :host {
    display: inline-block;
    color: var(--cps-color-text-secondary);
    pointer-events: none;
  }

  :host::part(base) {
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) color;
  }

  .icon-button {
    -webkit-appearance: none;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25%;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    vertical-align: middle;
    text-decoration: none;
    white-space: nowrap;
    color: inherit;
    font: inherit;
    user-select: none;
    pointer-events: auto;
  }

  .icon-button::-moz-focus-inner {
    border: 0;
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  .icon-button--disabled {
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  /*
   * Size modifiers
  */

  .icon-button--small {
    width: var(--cps-icon-button-height-small);
    height: var(--cps-icon-button-height-small);
    font-size: calc(var(--cps-icon-button-height-small) - 0.25em);
  }

  .icon-button--medium {
    width: var(--cps-icon-button-height-medium);
    height: var(--cps-icon-button-height-medium);
    font-size: calc(var(--cps-icon-button-height-medium) - 0.375em);
  }

  .icon-button--large {
    width: var(--cps-icon-button-height-large);
    height: var(--cps-icon-button-height-large);
    font-size: calc(var(--cps-icon-button-height-large) - 1.25em);
  }

  /* Appearance */
  .icon-button:hover:not(.icon-button--disabled) {
    background-color: var(--cps-color-fill-subtle-secondary);
    color: var(--cps-color-text-primary);
  }

  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--cps-color-text-primary);
  }

  .icon-button:active:not(.icon-button--disabled) {
    background-color: var(--cps-color-fill-subtle-tertiary);
    color: var(--cps-color-text-secondary);
  }

  .icon-button.icon-button--disabled {
    color: var(--cps-color-text-disabled);
  }
`;export{i as a};
