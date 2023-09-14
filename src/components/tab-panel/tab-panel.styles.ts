import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --padding: var(--cps-spacing-4);
    --background: var(--cps-color-background-solid-tertiary);
    --border-color: var(--cps-color-stroke-primary);

    display: none;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius, var(--cps-border-radius-large));
    background: var(--background);
  }

  :host([selected]) {
    display: flex;
    flex: 1;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;
