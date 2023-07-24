import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    box-sizing: content-box !important;
    display: inline-block;
    width: 1em;
    height: 1em;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
