import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles';

export default css`  ${css`
    ${componentStyles}
    ${formControlStyles}
  `}

  :host {
    display: block;
  }

  .rich-text__value-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    margin: 0;
    border: none;
    padding: 0;
    pointer-events: none;
  }

  .rich-text {
    display: flex;
    flex-direction: column;
    transition: var(--cps-transition-fast) border-color, var(--cps-transition-fast) box-shadow;
    border: solid var(--cps-input-border-width) var(--cps-input-border-color);
    border-radius: var(--cps-border-radius-medium);
    background-color: var(--cps-input-background);
    overflow: hidden;
    color: var(--cps-color-text-primary);
  }

  .rich-text--focused {
    border-color: var(--cps-color-fill-accent-primary);
    box-shadow: inset 0 0 0 1px var(--cps-color-fill-accent-primary);
  }

  .rich-text--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Tamanhos — espelham a fonte dos controles cps-input/cps-textarea */
  .rich-text--small {
    font: var(--cps-font-label);
  }

  .rich-text--medium {
    font: var(--cps-font-body);
  }

  .rich-text--large {
    font: var(--cps-font-body-large);
  }

  /* Toolbar */
  .rich-text__toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--cps-spacing-0-5);
    align-items: center;
    border-bottom: solid var(--cps-input-border-width) var(--cps-color-stroke-separator);
    background-color: var(--cps-color-background-solid-secondary);
    padding: var(--cps-spacing-1) var(--cps-spacing-1-5);
  }

  .rich-text__separator {
    align-self: stretch;
    margin: var(--cps-spacing-0-5) var(--cps-spacing-1);
    background-color: var(--cps-color-stroke-separator);
    width: 1px;
  }

  .rich-text__button {
    display: inline-flex;
    gap: var(--cps-spacing-1);
    align-items: center;
    justify-content: center;
    border: solid 1px transparent;
    border-radius: var(--cps-border-radius-medium);
    background: transparent;
    cursor: pointer;
    padding: 0 var(--cps-spacing-1-5);
    min-width: 1.875rem;
    height: 1.875rem;
    line-height: 1;
    color: var(--cps-color-text-primary);
    font-family: inherit;
    font-size: var(--cps-font-size-sm);
  }

  .rich-text__button:hover {
    background-color: var(--cps-color-background-solid-tertiary);
  }

  .rich-text__button:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: calc(var(--cps-focus-ring-offset) * -1);
  }

  .rich-text__button--active {
    border-color: var(--cps-palette-accent-200);
    background-color: var(--cps-palette-accent-100);
    color: var(--cps-palette-accent-800);
  }

  .rich-text__button svg {
    display: block;
  }

  .rich-text__block {
    border: solid 1px transparent;
    border-radius: var(--cps-border-radius-medium);
    background: transparent;
    cursor: pointer;
    height: 1.875rem;
    color: var(--cps-color-text-primary);
    font-family: inherit;
    font-size: var(--cps-font-size-sm);
  }

  .rich-text__color {
    display: inline-flex;
    gap: var(--cps-spacing-1);
    align-items: center;
  }

  .rich-text__color label {
    cursor: pointer;
    color: var(--cps-color-text-secondary);
    font-size: var(--cps-font-size-xs);
  }

  .rich-text__color input[type='color'] {
    border: solid 1px var(--cps-color-stroke-secondary);
    border-radius: var(--cps-border-radius-medium);
    background: none;
    cursor: pointer;
    padding: 0;
    width: 1.625rem;
    height: 1.625rem;
  }

  /* Editable area */
  .rich-text__content {
    outline: none;
    padding: var(--cps-spacing-3) var(--cps-spacing-4);
    min-height: 12rem;
    overflow-y: auto;
    line-height: var(--cps-leading-normal);
    font-family: inherit;
    font-size: inherit;
  }

  .rich-text__content:empty::before {
    color: var(--cps-color-text-tertiary);
    content: attr(data-placeholder);
    pointer-events: none;
  }

  .rich-text__content h2 {
    margin: 0.4em 0;
    font: var(--cps-font-title);
  }

  .rich-text__content h3 {
    margin: 0.4em 0;
    font: var(--cps-font-subtitle);
  }

  .rich-text__content p {
    margin: 0.5em 0;
  }

  .rich-text__content ul,
  .rich-text__content ol {
    margin: 0.5em 0;
    padding-left: 1.6em;
  }

  .rich-text__content a {
    text-decoration: underline;
    color: var(--cps-color-text-accent-primary);
  }

  .rich-text__content table {
    margin: 0.6em 0;
    min-width: 60%;
    border-collapse: collapse;
  }

  .rich-text__content th,
  .rich-text__content td {
    border: solid 1px var(--cps-color-stroke-secondary);
    padding: var(--cps-spacing-1-5) var(--cps-spacing-2-5);
    min-width: 3rem;
  }

  .rich-text__content th {
    background-color: var(--cps-color-background-solid-secondary);
    text-align: start;
    font-weight: var(--cps-font-weight-semibold);
  }
`;
