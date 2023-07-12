import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${css`
    ${componentStyles}
    ${formControlStyles}
  `}

  :host {
    display: block;
  }

  .form-control {
    margin: 0;
    border: none;
    padding: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .form-control-input {
    display: flex;
    flex-flow: row wrap;
    row-gap: var(--cps-spacing-1);
    column-gap: var(--cps-spacing-4);
    align-items: center;
    justify-content: flex-start;
  }

  .radio-group--required .radio-group__label::after {
    margin-inline-start: var(--cps-input-required-content-offset);
    content: var(--cps-input-required-content);
  }

  .visually-hidden {
    position: absolute;
    margin: -1px;
    border: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
  }
`;
