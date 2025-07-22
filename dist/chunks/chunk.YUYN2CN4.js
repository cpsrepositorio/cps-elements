import{a as c}from"./chunk.OXS4I44J.js";import{a as r}from"./chunk.3U5NA53D.js";var p=r`
  ${c}

  :host {
    display: inline-block;
  }

  .chip {
    display: inline-flex;
    gap: var(--cps-spacing-0-5);
    align-items: center;
    justify-content: center;
    border: solid 1px;
    border-radius: var(--cps-border-radius-small);
    background-clip: padding-box;
    white-space: nowrap;
    user-select: none;
  }

  /*
   * Variant modifiers
   */

  .chip--neutral {
    border-color: var(--cps-color-stroke-inverted-tertiary);
    background-color: var(--cps-color-state-neutral-subtle);
    color: var(--cps-color-text-primary);
  }

  .chip--informative {
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-state-informative);
    color: var(--cps-color-text-inverted-primary);
  }

  .chip--warning {
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-state-warning);
    color: var(--cps-color-text-inverted-primary);
  }

  .chip--critical {
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-state-critical);
    color: var(--cps-color-text-inverted-primary);
  }

  .chip--success {
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-state-success);
    color: var(--cps-color-text-inverted-primary);
  }

  /*
   * Size modifiers
   */

  .chip--small {
    font: var(--cps-font-stamp);
  }

  .chip--medium {
    font: var(--cps-font-label);
  }

  .chip--large {
    font: var(--cps-font-body);
  }

  /*
   * Removable modifier
   */

  .chip--small:not(.chip--removable) {
    padding: var(--cps-spacing-0-5) var(--cps-spacing-1);
  }

  .chip--medium:not(.chip--removable) {
    padding: calc(var(--cps-spacing-0-5) + var(--cps-spacing-px)) var(--cps-spacing-1-5);
  }

  .chip--large:not(.chip--removable) {
    padding: calc(var(--cps-spacing-0-5) + var(--cps-spacing-px)) var(--cps-spacing-2);
  }

  .chip--small.chip--removable {
    padding: 0 var(--cps-spacing-1);
    padding-right: var(--cps-spacing-px);
  }

  .chip--medium.chip--removable {
    padding: 1px var(--cps-spacing-1-5);
    padding-right: var(--cps-spacing-1);
  }

  .chip--large.chip--removable {
    padding: 0 var(--cps-spacing-2);
    padding-right: var(--cps-spacing-0-5);
  }

  .chip--small .chip__remove::part(base) {
    margin: -1px 0;
    width: 1rem;
    height: 1rem;
    font-size: var(--cps-font-stamp);
  }

  .chip--medium .chip__remove::part(base) {
    width: 1.125rem;
    height: 1.125rem;
    font-size: var(--cps-font-body);
  }

  .chip--large .chip__remove::part(base) {
    width: 1.375rem;
    height: 1.375rem;
    font-size: var(--cps-font-body);
  }
`;export{p as a};
