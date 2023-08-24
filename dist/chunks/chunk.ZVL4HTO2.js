import{a as t}from"./chunk.PTDYOLMF.js";import{a as r,i as e}from"./chunk.FVWYSG5E.js";var n=r`
  ${r`
    ${e}
    ${t}
  `}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    position: relative;
    border-radius: var(--cps-border-radius-medium);
    cursor: text;
    padding: 1px;
    width: 100%;
    overflow: hidden;
  }

  .textarea::before {
    position: absolute;
    inset: 0;
    border: solid var(--cps-input-border-width) transparent;
    border-radius: var(--cps-border-radius-medium);
    background-clip: border-box;
    background-origin: border-box;
    content: '';
    pointer-events: none;
    -webkit-mask: linear-gradient(white 0 0) border-box, linear-gradient(white 0 0) padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .textarea::after {
    position: absolute;
    inset: 0;
    transform: scaleX(0);
    transition: var(--cps-transition-fast) transform, var(--cps-transition-fast) opacity;
    opacity: 0;
    z-index: 1;
    border: solid var(--cps-input-border-width) transparent;
    border-bottom-width: var(--cps-input-border-bottom-width);
    border-radius: var(--cps-border-radius-medium);
    background-clip: border-box;
    background-image: linear-gradient(
      transparent 0,
      transparent calc(100% - var(--cps-input-border-bottom-width) * 2),
      var(--cps-color-fill-accent-primary) 100%
    );
    background-origin: border-box;
    content: '';
    pointer-events: none;
    will-change: transform, opacity;
    -webkit-mask: linear-gradient(white 0 0) border-box, linear-gradient(white 0 0) padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .textarea:not(.textarea--disabled)::before {
    background-image: linear-gradient(
      var(--cps-input-border-color) 0,
      var(--cps-input-border-color) calc(100% - var(--cps-input-border-bottom-width) * 2),
      var(--cps-input-border-bottom-color) 100%
    );
  }

  .textarea__control {
    -webkit-appearance: none;
    flex: 1 1 auto;
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) box-shadow,
      var(--cps-transition-fast) background-color;
    margin: 0;
    border: none;
    border-radius: var(--cps-border-radius-medium);
    box-shadow: none;
    background: none;
    cursor: inherit;
    padding: 0;
    min-width: 0;
    height: 100%;
    letter-spacing: var(--cps-tracking-normal);
    color: var(--cps-color-text-primary);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    will-change: color, box-shadow, background-color;
  }

  .textarea .textarea__control {
    background-color: var(--cps-input-background);
  }

  .textarea:hover:not(.textarea--disabled) .textarea__control {
    background-color: var(--cps-input-background-hover);
  }

  .form-control--has-label
    .form-control__label:hover
    ~ .form-control-input
    .textarea:not(.textarea--focused):not(.textarea--disabled)
    .textarea__control {
    background-color: var(--cps-input-background-hover);
  }

  .textarea.textarea--focused:not(.textarea--disabled) .textarea__control {
    background-color: var(--cps-input-background-active);
  }

  .textarea.textarea--focused:not(.textarea--disabled)::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .textarea.textarea--disabled {
    cursor: not-allowed;
  }

  .textarea.textarea--disabled::before {
    background-color: var(--cps-color-stroke-primary);
    cursor: not-allowed;
  }

  .textarea.textarea--disabled .textarea__control {
    background-color: var(--cps-color-stroke-primary);
    color: var(--cps-color-text-disabled);
  }

  .textarea.textarea--disabled .input__control::placeholder {
    color: var(--cps-color-text-disabled);
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control:-webkit-autofill,
  .textarea__control:-webkit-autofill:hover,
  .textarea__control:-webkit-autofill:focus,
  .textarea__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--cps-input-height-large) var(--cps-input-background-active) inset !important;
    -webkit-text-fill-color: var(--cps-color-text-primary);
    caret-color: var(--cps-color-text-primary);
  }

  .textarea__control::placeholder {
    color: var(--cps-color-text-secondary);
    user-select: none;
  }

  .textarea--empty .textarea__control {
    color: var(--cps-color-text-secondary);
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    font: var(--cps-font-label);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--cps-input-spacing-small);
    min-height: var(--cps-input-height-small);
  }

  .textarea--medium {
    font: var(--cps-font-body);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--cps-input-spacing-medium);
    min-height: var(--cps-input-height-medium);
  }

  .textarea--large {
    font: var(--cps-font-body-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--cps-input-spacing-large);
    min-height: var(--cps-input-height-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea__resizer {
    display: none;
  }

  @supports selector(::-webkit-resizer) {
    .textarea__control::-webkit-resizer {
      -webkit-appearance: none;
    }

    .textarea__resizer {
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: var(--cps-spacing-5);
      height: var(--cps-spacing-5);
      color: var(--cps-color-text-secondary);
      pointer-events: none;
    }
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    overflow-y: hidden;
    resize: none;
  }
`;export{n as a};
