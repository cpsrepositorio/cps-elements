import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  :host([floating]),
  :host([trigger*='contextmenu']) {
    display: contents;
  }

  ::slotted(cps-separator) {
    margin: var(--cps-spacing-0-5) calc(var(--cps-spacing-0-5) * -1);
  }

  .menu__body {
    display: block;
    position: relative;
    outline: none;
    border: solid 1px var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-large);
    background: var(--cps-color-background-acrylic);
    background-clip: padding-box;
    padding: var(--cps-spacing-0-5);
    max-width: inherit;
    max-height: var(--max-height, var(--auto-size-available-height, none));
    overflow: auto;
    overscroll-behavior: none;
    backdrop-filter: var(--cps-blur-medium);
    filter: drop-shadow(var(--cps-shadow)) drop-shadow(var(--cps-shadow-lg));
  }

  .menu__body[hidden] {
    display: none;
  }

  slot[name='anchor'] {
    display: contents;
  }

  cps-flyout {
    --border-color: transparent;
    --background-color: transparent;
  }
`;
