import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .logo {
    display: inline-flex;
    height: 1em;
  }

  .logo--default {
    fill: var(--cps-color-text-primary);
  }

  .logo--default .accent {
    fill: var(--cps-color-fill-accent);
  }

  .logo--default .accent-light {
    fill: var(--cps-color-fill-accent-light);
  }

  .logo--default .brand {
    fill: var(--cps-color-fill-brand);
  }

  .logo--monochromatic {
    fill: var(--cps-color-text-primary);
  }

  .logo--monochromatic-inverted {
    fill: var(--cps-color-text-inverted-primary);
  }
`;
