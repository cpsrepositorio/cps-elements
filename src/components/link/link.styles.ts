import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inherit;
  }

  .link {
    display: inline-flex;
    gap: var(--cps-spacing-0-5);
    align-items: center;
    transition: var(--cps-transition-fast) color;
    border-radius: var(--cps-border-radius-small);
    cursor: pointer;
    text-decoration: none;
    color: var(--cps-color-text-accent-primary);
    font: inherit;
  }

  .link slot {
    display: inline-flex;
  }

  .link__content {
    display: inline-block;
    transition: var(--cps-transition-fast) text-decoration-color;
    text-decoration: underline;
    text-decoration-color: var(--cps-color-text-disabled);
  }

  .link--rtl {
    direction: rtl;
  }

  .link:focus {
    outline: none;
  }

  .link:focus-visible {
    outline: var(--cps-focus-ring);
  }

  .link:hover {
    color: var(--cps-color-text-accent-secondary);
  }

  .link:hover .link__content {
    text-decoration-color: var(--cps-color-text-accent-primary);
  }

  .link:active {
    color: var(--cps-color-text-accent-tertiary);
  }

  .link:active .link__content {
    text-decoration-color: var(--cps-color-text-accent-tertiary);
  }

  .link--disabled {
    text-decoration-color: transparent;
    color: var(--cps-color-text-disabled);
    pointer-events: none;
  }

  .link--disabled .link__content {
    text-decoration-color: transparent;
  }

  /* Size modifiers */
  .link--stamp {
    font: var(--cps-font-stamp);
  }

  .link--caption {
    font: var(--cps-font-caption);
  }

  .link--label {
    font: var(--cps-font-label);
  }

  .link--body {
    font: var(--cps-font-body);
  }

  .link--body-em {
    font: var(--cps-font-body-em);
  }

  .link--body-strong {
    font: var(--cps-font-body-strong);
  }

  .link--body-large {
    font: var(--cps-font-body-large);
  }

  .link--subtitle {
    font: var(--cps-font-subtitle);
  }

  .link--title {
    font: var(--cps-font-title);
  }

  .link--heading {
    font: var(--cps-font-heading);
  }

  .link--display {
    font: var(--cps-font-display);
  }
`;
