import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;

    --gap: var(--cps-spacing-3);
  }

  .accordion-group {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`;
