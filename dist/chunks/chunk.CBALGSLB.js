import{a as r}from"./chunk.OXS4I44J.js";import{a as o}from"./chunk.3U5NA53D.js";var i=o`
  ${r}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  /** Flyout variables override */
  .tooltip {
    --background-color: var(--cps-color-background-acrylic);
    --border-color: var(--cps-color-stroke-surface);
    --arrow-size: var(--cps-tooltip-arrow-size);
  }

  .tooltip::part(container) {
    z-index: var(--cps-z-index-tooltip);
    border-radius: var(--cps-border-radius-large);
    pointer-events: none;
    backdrop-filter: var(--cps-blur-medium);
    filter: drop-shadow(var(--cps-shadow)) drop-shadow(var(--cps-shadow-lg));
  }

  .tooltip[placement^='top']::part(flyout) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(flyout) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(flyout) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(flyout) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    padding: var(--cps-spacing-2-5) var(--cps-spacing-3);
    width: max-content;
    max-width: var(--max-width);
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
    pointer-events: none;
  }
`;export{i as a};
