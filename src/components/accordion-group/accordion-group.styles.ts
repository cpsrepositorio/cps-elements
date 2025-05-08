import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --gap: var(--cps-spacing-3);
    display: block;
  }

  .accordion-group {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`;
