import{a as o}from"./chunk.M4ACP6KD.js";import{c as r}from"./chunk.QJBMNVJB.js";var e=r`
  ${o}

  :host {
    display: block;
  }

  .accordion {
    display: flex;
    flex-direction: column;
  }

  /* Header */

  .accordion__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-duration: var(--cps-transition-medium);
    transition-property: background-color, border-radius, color;
    border-width: var(--cps-button-border-width);
    border-style: solid;
    border-radius: var(--cps-border-radius-medium);
    border-color: var(--cps-color-stroke-card-primary);
    background-clip: padding-box;
    background-color: var(--cps-color-fill-primary);
    cursor: pointer;
    padding: 0 var(--cps-spacing-4);
    height: var(--cps-spacing-16);
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
  }

  .accordion__header::-moz-focus-inner {
    border: 0;
  }

  .accordion__header:focus {
    outline: none;
  }

  .accordion__header:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  .accordion__header:active {
    color: var(--cps-color-text-secondary);
  }

  .accordion--open .accordion__header {
    border-radius: var(--cps-border-radius-medium) var(--cps-border-radius-medium) 0 0;
  }

  .accordion__header-content {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto 1fr;
    row-gap: var(--cps-spacing-0-5);
    column-gap: 0;
    place-items: center start;
  }

  .accordion--has-icon .accordion__header-content {
    column-gap: var(--cps-spacing-3);
  }

  .accordion__header-icon {
    display: grid;
    grid-row-end: span 2;
    place-items: center;
    font-size: var(--cps-font-size-lg);
  }

  .accordion__header-title {
    grid-row: 1;
    grid-column: 2;
  }

  .accordion__header-subtitle {
    grid-row: 2;
    grid-column: 2;
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-label);
  }

  /* Caret */

  .accordion__header-caret {
    transition-duration: var(--cps-transition-medium);
    transition-property: background-color, color, transform;
    border-radius: var(--cps-border-radius-full);
    width: var(--cps-spacing-7-5);
    height: var(--cps-spacing-7-5);
    color: var(--cps-color-text-primary);
  }

  .accordion__header-caret::part(svg) {
    width: var(--cps-spacing-3);
    height: var(--cps-spacing-3);
  }

  .accordion__header:hover .accordion__header-caret {
    background-color: var(--cps-color-fill-subtle-secondary);
  }

  .accordion__header:active .accordion__header-caret {
    background-color: var(--cps-color-fill-subtle-tertiary);
    color: var(--cps-color-text-secondary);
  }

  .accordion--open .accordion__header-caret {
    transform: rotate(180deg);
  }

  /* Content */

  .accordion__content {
    transform-origin: top;
    border-width: var(--cps-button-border-width);
    border-top-width: 0;
    border-style: solid;
    border-radius: 0 0 var(--cps-border-radius-medium) var(--cps-border-radius-medium);
    border-color: var(--cps-color-stroke-card-primary);
    background-clip: padding-box;
    background-color: var(--cps-color-fill-secondary);
    padding: var(--cps-spacing-6);
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
  }
`;export{e as a};
