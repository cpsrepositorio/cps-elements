import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --padding: var(--cps-spacing-6);
    --border-radius: var(--cps-border-radius-large);

    display: block;
  }

  .card {
    display: block;
    border: 1px solid var(--cps-color-stroke-card-primary);
    box-shadow: var(--cps-shadow);
    background: var(--cps-color-fill-card-primary);
    padding: var(--padding);
    min-height: 0;
    overflow: auto;
  }

  /* Variants */

  .card--primary {
    backdrop-filter: var(--cps-blur-small);
  }

  .card--secondary {
    border-color: var(--cps-color-stroke-card-secondary);
    background: var(--cps-color-fill-card-secondary);
    backdrop-filter: var(--cps-blur-small);
  }

  .card--tertiary {
    border-color: var(--cps-color-stroke-card-primary);
    background: var(--cps-color-fill-card-tertiary);
  }

  .card--on-blurred {
    border-color: var(--cps-color-stroke-card-primary);
    background: var(--cps-color-fill-on-blurred);
    backdrop-filter: var(--cps-blur-medium);
  }

  /* Interaction */

  .card--actionable:focus {
    outline: none;
  }

  .card--actionable {
    transition: background-color var(--cps-transition-fast), box-shadow var(--cps-transition-fast),
      transform var(--cps-transition-fast);
    cursor: pointer;
  }

  .card--actionable:focus-visible {
    outline: var(--cps-focus-ring);
  }

  .card--actionable:hover {
    transform: translateY(-1px);
    box-shadow: var(--cps-shadow-md);
  }

  .card--actionable:active {
    transform: translateY(0);
    box-shadow: none;
  }

  /* Slots */

  .card__header {
    display: block;
    margin-bottom: var(--padding);
    border-bottom: 1px solid var(--cps-color-stroke-separator);
    padding-bottom: var(--padding);
  }

  .card__footer {
    display: flex;
    gap: var(--cps-spacing-4);
    align-items: center;
    justify-content: end;
    margin-top: var(--padding);
    border-top: 1px solid var(--cps-color-stroke-separator);
    padding-top: var(--padding);
  }

  /* Rounded */
  .card--rounded-none {
    border-radius: 0;
  }

  .card--rounded-full {
    border-radius: var(--border-radius);
  }

  .card--rounded-start {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: 0;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: 0;
  }

  .card--rounded-end {
    border-top-left-radius: 0;
    border-top-right-radius: var(--border-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: var(--border-radius);
  }

  .card--rounded-top {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card--rounded-bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  .card--rounded-top-start {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card--rounded-top-end {
    border-top-left-radius: 0;
    border-top-right-radius: var(--border-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card--rounded-bottom-start {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: 0;
  }

  .card--rounded-bottom-end {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: var(--border-radius);
  }

  /* Elevations */

  .card--elevation-none {
    box-shadow: none;
  }

  .card--elevation-sm {
    box-shadow: var(--cps-shadow);
  }

  .card--elevation-md {
    box-shadow: var(--cps-shadow-md);
  }

  .card--elevation-lg {
    box-shadow: var(--cps-shadow-lg);
  }

  .card--elevation-xl {
    box-shadow: var(--cps-shadow-xl);
  }

  .card--elevation-2xl {
    box-shadow: var(--cps-shadow-2xl);
  }
`;
