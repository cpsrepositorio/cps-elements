import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --height: var(--cps-toggle-size-medium);
    --border: var(--cps-spacing-px);
    --padding: var(--cps-spacing-0-5);

    display: contents;
  }

  .switch {
    display: inline-flex;
    position: relative;
    gap: var(--cps-spacing-2);
    align-items: flex-start;
    cursor: pointer;
    vertical-align: middle;
  }

  .switch--small {
    --height: var(--cps-toggle-size-small);
    font: var(--cps-font-label);
  }

  .switch--medium {
    --height: var(--cps-toggle-size-medium);
    font: var(--cps-font-body);
  }

  .switch--large {
    --height: var(--cps-toggle-size-large);
    font: var(--cps-font-body-large);
  }

  .switch__control {
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
    align-items: center;
    justify-content: flex-start;
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) border-color;
    border: solid var(--border) var(--cps-color-text-secondary);
    border-radius: var(--cps-border-radius-pill);
    background-color: var(--cps-color-fill-alt-secondary);
    padding: var(--padding);
    width: calc(var(--height) * 2 - var(--padding) * 2);
    height: var(--height);
  }

  .switch__knob {
    display: inline-flex;
    transition: var(--cps-transition-fast) transform, var(--cps-transition-fast) background-color;
    z-index: 1;
    border-radius: var(--cps-border-radius-full);
    box-shadow: var(--cps-shadow-md);
    background-color: var(--cps-color-text-secondary);
    width: calc(var(--height) - var(--padding) * 2 - var(--border) * 2);
    height: calc(var(--height) - var(--padding) * 2 - var(--border) * 2);
  }

  .switch__input {
    position: absolute;
    top: calc(var(--padding) + var(--border));
    left: calc(var(--padding) + var(--border));
    opacity: 0;
    margin: 0;
    outline: none;
    padding: 0;
    width: calc(var(--height) - var(--padding) * 2 - var(--border) * 2);
    height: calc(var(--height) - var(--padding) * 2 - var(--border) * 2);
    pointer-events: none;
  }

  /* Focus */
  .switch:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  /* Unchecked + Enabled + Hover */
  .switch:not(.switch--checked):not(.switch--disabled):hover .switch__control {
    background-color: var(--cps-color-fill-alt-tertiary);
  }

  /* Unchecked + Enabled + Active */
  .switch:not(.switch--checked):not(.switch--disabled):active .switch__control {
    border-color: var(--cps-color-stroke-inverted-tertiary);
    background-color: var(--cps-color-fill-alt-quaternary);
  }

  /* Checked + Enabled */
  .switch.switch--checked:not(.switch--disabled) .switch__control {
    border-color: var(--cps-color-fill-accent-primary);
    background-color: var(--cps-color-fill-accent-primary);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__knob {
    transform: translateX(calc(var(--height) - var(--padding) * 2));
    background-color: var(--cps-color-text-inverted-primary);
  }

  /* Checked + Enabled + Hover */
  .switch.switch--checked:not(.switch--disabled):hover .switch__control {
    border-color: var(--cps-color-fill-accent-secondary);
    background-color: var(--cps-color-fill-accent-secondary);
  }

  /* Checked + Enabled + Active */
  .switch.switch--checked:not(.switch--disabled):active .switch__control {
    border-color: var(--cps-color-fill-accent-tertiary);
    background-color: var(--cps-color-fill-accent-tertiary);
  }

  /* Disabled */
  .switch--disabled {
    cursor: not-allowed;
  }

  .switch.switch--disabled .switch__control {
    border-color: var(--cps-color-fill-accent-disabled);
    background-color: var(--cps-color-fill-accent-disabled);
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    color: var(--cps-color-text-primary);
    user-select: none;
  }

  .switch:not(.switch--disabled) .switch__label {
    cursor: pointer;
  }

  .switch.switch--disabled .switch__label {
    cursor: not-allowed;
    color: var(--cps-color-text-disabled);
  }

  /* Required indicator */

  :host([required]) .switch__label::after {
    margin-inline-start: var(--cps-input-required-content-offset);
    color: var(--cps-input-required-content-color);
    font: var(--cps-font-label);
    content: var(--cps-input-required-content);
  }

  /* Fluid label */

  .switch--fluid {
    display: flex;
    gap: var(--cps-spacing-2-5);
    justify-content: space-between;
    width: 100%;
  }

  .switch--fluid .switch__label {
    flex: 1 1 auto;
    order: 0;
  }

  .switch--fluid .switch__control {
    flex: 0 0 auto;
    order: 1;
  }
`;
