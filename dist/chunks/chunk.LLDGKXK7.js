import{a as r,i as a}from"./chunk.FVWYSG5E.js";var s=r`  ${a}

  :host {
    display: block;
  }

  .card {
    display: block;
    border: 1px solid var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-large);
    box-shadow: var(--cps-shadow);
    background: var(--cps-color-fill-card-primary);
    padding: var(--cps-spacing-6);
    min-height: 0;
    overflow: auto;
  }

  /* Variants */

  .card--secondary {
    border-color: var(--cps-color-stroke-card-secondary);
    background: var(--cps-color-fill-card-secondary);
  }

  .card--tertiary {
    border-color: var(--cps-color-stroke-card-primary);
    background: var(--cps-color-fill-card-tertiary);
  }

  .card--on-acrylic {
    border-color: var(--cps-color-stroke-card-primary);
    background: var(--cps-color-fill-on-acrylic);
  }

  /* Interaction */

  .card--actionable:focus {
    outline: none;
  }

  .card--actionable {
    transition: background-color var(--cps-transition-fast),
      box-shadow var(--cps-transition-fast),
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
    margin-bottom: var(--cps-spacing-4);
    border-bottom: 1px solid var(--cps-color-stroke-separator);
    padding-bottom: var(--cps-spacing-4);
  }

  .card__footer {
    display: flex;
    gap: var(--cps-spacing-4);
    align-items: center;
    justify-content: end;
    margin-top: var(--cps-spacing-4);
    border-top: 1px solid var(--cps-color-stroke-separator);
    padding-top: var(--cps-spacing-4);
  }
`;export{s as a};
