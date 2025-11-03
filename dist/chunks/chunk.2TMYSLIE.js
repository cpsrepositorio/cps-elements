import{a as e}from"./chunk.YZ3F5QTE.js";import{a}from"./chunk.M4ACP6KD.js";import{c as r}from"./chunk.QJBMNVJB.js";var t=r`
  ${r`
    ${a}
    ${e}
  `}

  :host {
    display: block;
  }

  .range {
    border-radius: var(--cps-spacing-1);
    cursor: default;
    display: flex;
    align-items: center;
    position: relative;
    vertical-align: middle;
    min-width: 120px;
    height: var(--cps-range-height, var(--cps-spacing-7));
    padding: 0;
    user-select: none;
    touch-action: none;
  }

  .range--focused:focus-visible {
    outline-offset: var(--cps-focus-ring-offset);
    outline: var(--cps-focus-ring);
  }

  .range__control {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .range__track {
    position: relative;
    width: 100%;
    height: calc(var(--cps-range-height) / 5);
    background: var(--cps-color-stroke-tertiary);
    border-radius: var(--cps-spacing-1);
    flex: 1 1 auto;
  }

  .range__fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: var(--cps-color-fill-accent);
    border-radius: var(--cps-range-height);
    transition: background var(--cps-transition-fast);
    z-index: 1;
  }

  .range__thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: var(--cps-range-height);
    height: var(--cps-range-height);
    background: var(--cps-color-fill-accent);
    border: 4px solid var(--cps-color-fill-control-solid);
    border-radius: 50%;
    box-shadow: 0 -1px 1px 1px var(--cps-color-stroke-card-primary),
      -1px -1px 1px 1px var(--cps-color-stroke-card-primary), 0 1px 1px 1px var(--cps-color-stroke-card-secondary),
      1px 1px 1px 1px var(--cps-color-stroke-card-secondary);
    transition: background var(--cps-transition-fast), border-width var(--cps-transition-fast);
    z-index: 2;
    cursor: grab;
    pointer-events: auto;
  }

  .range:not(.range--readonly):not(.range--disabled):hover .range__fill {
    background: var(--cps-color-fill-accent-primary);
  }

  .range:not(.range--readonly):not(.range--disabled):active .range__fill {
    background: var(--cps-color-fill-accent-secondary);
  }

  .range:not(.range--readonly):not(.range--disabled):hover .range__thumb {
    background: var(--cps-color-fill-accent-primary);
    border-width: 3px;
  }

  .range:not(.range--readonly):not(.range--disabled):active .range__thumb {
    background: var(--cps-color-fill-accent-secondary);
    border-width: 5px;
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
`;export{t as a};
