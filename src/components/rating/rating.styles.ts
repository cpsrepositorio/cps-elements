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
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    display: inline-flex;
    flex-wrap: wrap;
    position: relative;
    vertical-align: middle;
  }

  .rating--focused:focus-visible {
    outline-offset: var(--cps-focus-ring-offset);
    outline: var(--cps-focus-ring);
  }

  .rating__control {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .rating__symbol {
    box-sizing: content-box;
    color: var(--symbol-color);
    cursor: inherit;
    display: inline-grid;
    padding: calc(var(--cps-spacing-0-5) + var(--cps-spacing-px));
    place-items: center;
    position: relative;
    transition: var(--cps-transition-fast) transform;
  }

  .rating__symbol cps-icon {
    position: absolute;
  }

  .rating__symbol svg .filled {
    color: inherit;
    opacity: 0;
    transition: var(--cps-transition-fast) opacity;
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
    color: inherit;
    fill: inherit;
    opacity: 0;
    transition: var(--cps-transition-fast) opacity;
    pointer-events: none;
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
    color: var(--cps-color-text-disabled);
    isolation: isolate;
  }

  .rating--small .rating__symbol,
  .rating--small .rating__symbol svg {
    height: var(--cps-font-size-sm);
    width: var(--cps-font-size-sm);
  }

  .rating--medium .rating__symbol,
  .rating--medium .rating__symbol svg {
    height: var(--cps-font-size-lg);
    width: var(--cps-font-size-lg);
  }

  .rating--large .rating__symbol,
  .rating--large .rating__symbol svg {
    height: var(--cps-font-size-2xl);
    width: var(--cps-font-size-2xl);
  }
`;
