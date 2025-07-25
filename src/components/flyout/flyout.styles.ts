import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --background-color: var(--cps-palette-neutral-500);
    --border-color: transparent;
    --arrow-size: 7px;

    /* This property is computed to account for the arrow's offset repositioning. Please don't touch it. */
    --arrow-padding-offset: calc(var(--arrow-size) - var(--arrow-size));

    display: contents;
  }

  .flyout {
    position: absolute;
    outline: 1px solid var(--border-color);
    isolation: isolate;
    background: var(--background-color);
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .flyout--fixed {
    position: fixed;
  }

  .flyout:not(.flyout--active) {
    display: none;
  }

  .flyout__arrow {
    position: absolute;
    backface-visibility: hidden;
    z-index: 1;
    background: var(--border-color);
    width: calc(var(--arrow-size) * 1.5);
    height: var(--arrow-size);
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }

  .flyout__arrow::after {
    position: absolute;
    inset: 0 1.5px 1.5px;
    background: var(--background-color);
    content: '';
    clip-path: inherit;
  }
`;
