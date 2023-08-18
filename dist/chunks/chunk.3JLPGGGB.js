import{f as o,i as r}from"./chunk.XKNP6CD6.js";var a=o`
  ${r}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --background-color: var(--cps-color-background-acrylic);
    --border-color: var(--cps-color-stroke-surface);
    --arrow-size: var(--cps-tooltip-arrow-size);
  }

  .tooltip::part(container) {
    z-index: var(--cps-z-index-tooltip);
    border-radius: var(--cps-border-radius-large);
    pointer-events: none;
    backdrop-filter: blur(6px);
    filter: drop-shadow(var(--cps-shadow)) drop-shadow(var(--cps-shadow-lg));
  }

  .tooltip[placement^='top']::part(popover) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popover) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popover) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popover) {
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
`;export{a};
