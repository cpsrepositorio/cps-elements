import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host(:not(:focus-within)) {
    position: absolute !important;
    border: none !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
  }
`;
