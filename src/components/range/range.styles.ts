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

  .range {
    display: flex;
    position: relative;
    align-items: center;
    border-radius: var(--cps-spacing-1);
    cursor: default;
    padding: 0;
    min-width: 120px;
    height: var(--cps-range-height, var(--cps-spacing-7));
    vertical-align: middle;
    user-select: none;
    touch-action: none;
  }

  .range--focused:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  .range__control {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .range__track {
    position: relative;
    flex: 1 1 auto;
    border-radius: var(--cps-spacing-1);
    background: var(--cps-color-stroke-tertiary);
    width: 100%;
    height: calc(var(--cps-range-height) / 5);
  }

  .range__fill {
    position: absolute;
    top: 0;
    left: 0;
    transition: background var(--cps-transition-fast);
    z-index: 1;
    border-radius: var(--cps-range-height);
    background: var(--cps-color-fill-accent);
    height: 100%;
  }

  .range__thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: background var(--cps-transition-fast), border-width var(--cps-transition-fast);
    z-index: 2;
    border: 4px solid var(--cps-color-fill-control-solid);
    border-radius: 50%;
    box-shadow: 0 -1px 1px 1px var(--cps-color-stroke-card-primary),
      -1px -1px 1px 1px var(--cps-color-stroke-card-primary), 0 1px 1px 1px var(--cps-color-stroke-card-secondary),
      1px 1px 1px 1px var(--cps-color-stroke-card-secondary);
    background: var(--cps-color-fill-accent);
    cursor: grab;
    width: var(--cps-range-height);
    height: var(--cps-range-height);
    pointer-events: auto;
  }

  .range:not(.range--readonly):not(.range--disabled):hover .range__fill {
    background: var(--cps-color-fill-accent-primary);
  }

  .range:not(.range--readonly):not(.range--disabled):active .range__fill {
    background: var(--cps-color-fill-accent-secondary);
  }

  .range:not(.range--readonly):not(.range--disabled):hover .range__thumb {
    border-width: 3px;
    background: var(--cps-color-fill-accent-primary);
  }

  .range:not(.range--readonly):not(.range--disabled):active .range__thumb {
    border-width: 5px;
    background: var(--cps-color-fill-accent-secondary);
  }

  :is(.range--readonly, .range--disabled) .range__thumb {
    cursor: default;
  }

  .range--disabled .range__track {
    background: var(--cps-color-stroke-secondary);
  }

  .range--disabled :is(.range__fill, .range__thumb) {
    background: var(--cps-color-fill-control-disabled-solid);
  }

  .range--small {
    --cps-range-height: calc(var(--cps-input-height-small) - var(--cps-spacing-2));
  }

  .range--medium {
    --cps-range-height: calc(var(--cps-input-height-medium) - var(--cps-spacing-2));
  }

  .range--large {
    --cps-range-height: calc(var(--cps-input-height-large) - var(--cps-spacing-2));
  }
`;
