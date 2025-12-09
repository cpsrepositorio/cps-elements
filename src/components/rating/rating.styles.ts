import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${css`
    ${componentStyles}
    ${formControlStyles}
  `}

  :host {
    --symbol-color: var(--cps-color-text-secondary);
    --symbol-color-active: var(--cps-color-fill-accent);

    display: block;
  }

  :host > slot {
    display: none;
  }

  .rating {
    display: inline-flex;
    position: relative;
    flex-wrap: wrap;
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    vertical-align: middle;
  }

  .rating--focused:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  .rating__control {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .rating__symbol {
    box-sizing: content-box;
    display: inline-grid;
    position: relative;
    place-items: center;
    transition: var(--cps-transition-fast) transform;
    cursor: inherit;
    padding: calc(var(--cps-spacing-0-5) + var(--cps-spacing-px));
    color: var(--symbol-color);
  }

  .rating__symbol cps-icon {
    position: absolute;
  }

  .rating__symbol svg .filled {
    transition: var(--cps-transition-fast) opacity;
    opacity: 0;
    color: inherit;
  }

  .rating__symbol--half svg .filled,
  .rating__symbol--full svg .filled {
    opacity: 1;
  }

  .rating__symbol--full,
  .rating__symbol--half {
    color: var(--symbol-color-active);
  }

  .rating__symbol ::slotted([slot='filled']) {
    transition: var(--cps-transition-fast) opacity;
    opacity: 0;
    color: inherit;
    pointer-events: none;
    fill: inherit;
  }

  .rating__symbol--full ::slotted([slot='filled']),
  .rating__symbol--half ::slotted([slot='filled']) {
    opacity: 1;
    pointer-events: auto;
  }

  .rating:not(.rating--readonly):not(.rating--disabled) .rating__symbol:hover,
  .rating:not(.rating--readonly):not(.rating--disabled) .rating__symbol:active {
    transform: scale(1.25);
  }

  .rating--readonly,
  .rating--disabled {
    cursor: default;
  }

  .rating--readonly .rating__symbol:hover,
  .rating--disabled .rating__symbol:hover {
    transform: none;
  }

  .rating--disabled .rating__symbol {
    isolation: isolate;
    color: var(--cps-color-text-disabled);
  }

  .rating--small .rating__symbol,
  .rating--small .rating__symbol svg {
    width: var(--cps-font-size-sm);
    height: var(--cps-font-size-sm);
  }

  .rating--medium .rating__symbol,
  .rating--medium .rating__symbol svg {
    width: var(--cps-font-size-lg);
    height: var(--cps-font-size-lg);
  }

  .rating--large .rating__symbol,
  .rating--large .rating__symbol svg {
    width: var(--cps-font-size-2xl);
    height: var(--cps-font-size-2xl);
  }
`;
