import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  .label--primary {
    color: var(--cps-color-text-primary);
  }

  .label--secondary {
    color: var(--cps-color-text-secondary);
  }

  .label--tertiary {
    color: var(--cps-color-text-tertiary);
  }

  .label--disabled {
    color: var(--cps-color-text-disabled);
  }

  .label--brand-primary {
    color: var(--cps-color-text-brand-primary);
  }

  .label--brand-secondary {
    color: var(--cps-color-text-brand-secondary);
  }

  .label--brand-tertiary {
    color: var(--cps-color-text-brand-tertiary);
  }

  .label--inverted-primary {
    color: var(--cps-color-text-inverted-primary);
  }

  .label--inverted-secondary {
    color: var(--cps-color-text-inverted-secondary);
  }

  .label--inverted-disabled {
    color: var(--cps-color-text-inverted-disabled);
  }

  /* Sizes */

  .label--inherit {
    font: inherit;
  }

  .label--stamp {
    font: var(--cps-font-stamp);
  }

  .label--caption {
    font: var(--cps-font-caption);
  }

  .label--label {
    font: var(--cps-font-label);
  }

  .label--body {
    font: var(--cps-font-body);
  }

  .label--body-em {
    font: var(--cps-font-body-em);
  }

  .label--body-strong {
    font: var(--cps-font-body-strong);
  }

  .label--body-large {
    font: var(--cps-font-body-large);
  }

  .label--subtitle {
    font: var(--cps-font-subtitle);
  }

  .label--title {
    font: var(--cps-font-title);
  }

  .label--heading {
    font: var(--cps-font-heading);
  }

  .label--display {
    font: var(--cps-font-display);
  }
`;
