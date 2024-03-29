import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .badge {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--cps-border-radius-large);
    cursor: inherit;
    padding: var(--cps-spacing-px);
    min-width: var(--cps-spacing-1);
    min-height: var(--cps-spacing-1);
    white-space: nowrap;
    font: var(--cps-font-caption);
    user-select: none;
  }

  .badge--has-icon,
  .badge--has-content {
    min-width: var(--cps-spacing-3-5);
    min-height: var(--cps-spacing-3-5);
  }

  .badge--has-icon {
    padding: 0;
    font: var(--cps-font-label);
  }

  .badge--has-content:not(.badge--has-icon).badge--has-single-character {
    padding: var(--cps-spacing-px) var(--cps-spacing-1);
  }

  .badge--has-content:not(.badge--has-icon):not(.badge--has-single-character) {
    padding: var(--cps-spacing-px) var(--cps-spacing-1-5);
  }

  /* Variant modifiers */
  .badge--neutral {
    background-color: var(--cps-color-state-neutral);
    color: var(--cps-palette-neutral-0);
  }

  .badge--informative {
    background-color: var(--cps-color-state-informative);
    color: var(--cps-palette-neutral-0);
  }

  .badge--warning {
    background-color: var(--cps-color-state-warning);
    color: var(--cps-palette-neutral-0);
  }

  .badge--critical {
    background-color: var(--cps-color-state-critical);
    color: var(--cps-palette-neutral-0);
  }

  .badge--success {
    background-color: var(--cps-color-state-success);
    color: var(--cps-palette-neutral-0);
  }

  /* Square modifier */
  .badge--square {
    border-radius: var(--cps-border-radius-small);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--cps-color-state-neutral);
  }

  .badge--pulse.badge--informative {
    --pulse-color: var(--cps-color-state-informative);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--cps-color-state-warning);
  }

  .badge--pulse.badge--critical {
    --pulse-color: var(--cps-color-state-critical);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--cps-color-state-success);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.375rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
