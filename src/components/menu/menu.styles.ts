import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    border: solid 1px var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-large);
    background: var(--cps-color-background-acrylic);
    background-clip: padding-box;
    padding: var(--cps-spacing-0-5);
    overflow: auto;
    overscroll-behavior: none;
    backdrop-filter: var(--cps-blur-medium);
    filter: drop-shadow(var(--cps-shadow)) drop-shadow(var(--cps-shadow-lg));
  }

  ::slotted(cps-separator) {
    margin: var(--cps-spacing-0-5) calc(var(--cps-spacing-0-5) * -1);
  }
`;
