import { css } from 'lit';

export default css`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: inherit;
    margin-bottom: var(--cps-spacing-1);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font: var(--cps-text-caption);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font: var(--cps-text-label);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font: var(--cps-text-body);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--cps-input-required-content);
    margin-inline-start: var(--cps-input-required-content-offset);
    color: var(--cps-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--cps-foreground-secondary);
    margin-top: var(--cps-spacing-0-5);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font: var(--cps-text-caption);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font: var(--cps-text-label);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font: var(--cps-text-body);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--cps-spacing-1);
  }
`;
