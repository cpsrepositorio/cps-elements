import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    padding: var(--cps-spacing-2-5) var(--cps-spacing-4) var(--cps-spacing-1-5);
    letter-spacing: var(--cps-tracking-normal);
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-label);
    user-select: none;
  }
`;
