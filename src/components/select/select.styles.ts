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

  /** Flyout variables override */
  .select {
    --background-color: var(--cps-color-background-acrylic);
    --border-color: var(--cps-color-stroke-surface);
    display: inline-flex;
    position: relative;
    flex: 1 1 auto;
    padding: 0;
    width: 100%;
    vertical-align: middle;
  }

  .select::part(container) {
    z-index: var(--cps-z-index-dropdown);
    border-radius: var(--cps-border-radius-large);
    backdrop-filter: var(--cps-blur-medium);
    filter: drop-shadow(var(--cps-shadow)) drop-shadow(var(--cps-shadow-lg));
  }

  .select[data-current-placement^='top']::part(container) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(container) {
    transform-origin: top;
  }

  /* Main field */
  .select__field {
    display: flex;
    position: relative;
    flex: 1;
    align-items: center;
    justify-content: start;
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    padding: 1px;
    width: 100%;
    min-width: 0;
    overflow: hidden;
    vertical-align: middle;
  }

  .select__field::before {
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

  .select__field::after {
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
      var(--cps-input-border-bottom-color-focus) 100%
    );
    background-origin: border-box;
    content: '';
    pointer-events: none;
    will-change: transform, opacity;
    -webkit-mask: linear-gradient(white 0 0) border-box, linear-gradient(white 0 0) padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .select:not(.select--disabled) .select__field::before {
    background-image: linear-gradient(
      var(--cps-input-border-color) 0,
      var(--cps-input-border-color) calc(100% - var(--cps-input-border-bottom-width) * 2),
      var(--cps-input-border-bottom-color) 100%
    );
  }

  .select:not(.select--disabled)
    :is(.select__display-input, .select__chips, .select__prefix, .select__clear, .select__expand-icon) {
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) background-color;
    background-color: var(--cps-input-background);
    will-change: color, background-color;
  }

  .select:hover:not(.select--open, .select--disabled)
    :is(.select__display-input, .select__chips, .select__prefix, .select__clear, .select__expand-icon) {
    background-color: var(--cps-input-background-hover);
  }

  .form-control--has-label
    .form-control__label:hover
    ~ .form-control-input
    .select:not(.select--focused):not(.select--disabled)
    :is(.select__display-input, .select__chips, .select__prefix, .select__clear, .select__expand-icon) {
    background-color: var(--cps-input-background-hover);
  }

  .select.select--focused:not(.select--disabled)
    :is(.select__display-input, .select__chips, .select__prefix, .select__clear, .select__expand-icon) {
    background-color: var(--cps-input-background-active);
  }

  .select.select--focused:not(.select--disabled) .select__field::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .select:not(.select--disabled):active
    :is(.select__display-input, .select__chips, .select__prefix, .select__clear, .select__expand-icon) {
    background-color: var(--cps-input-background-active);
  }

  .select.select--disabled .select__field {
    outline: none;
    background-color: var(--cps-color-stroke-primary);
    cursor: not-allowed;
  }

  .select:is(:active, .select--disabled) .select__field::before {
    opacity: 1;
  }

  /* Display input (single selection) */
  .select__display-input {
    -webkit-appearance: none;
    flex: 1 1 auto;
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) background-color;
    margin: 0;
    border: none;
    box-shadow: none;
    background: none;
    cursor: inherit;
    padding: 0;
    width: 100%;
    min-width: 0;
    height: 100%;
    letter-spacing: var(--cps-tracking-normal);
    color: var(--cps-color-text-primary);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    will-change: color, background-color;
  }

  .select.select--disabled .select__display-input {
    color: var(--cps-color-text-disabled);
  }

  .select.select--disabled .select__display-input::placeholder {
    color: var(--cps-color-text-disabled);
  }

  .select:not(.select--disabled):active :is(.select__display-input, .select__expand-icon) {
    color: var(--cps-color-text-tertiary);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Value input (always visually hidden) */
  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  /* Multiple selection */
  .select--multiple.select--placeholder-visible .select__chips {
    display: none;
  }

  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .select__chips {
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    align-items: center;
    transition: var(--cps-transition-fast) background-color;
    min-width: 0;
    min-height: 100%;
    will-change: background-color;
  }

  .select--disabled .select__chips,
  .select--disabled .select__chips::slotted(cps-chip) {
    cursor: not-allowed !important;
  }

  /* Sizes */
  .select--small .select__field {
    min-height: var(--cps-input-height-small);
    font: var(--cps-font-label);
  }

  .select--small .select__field .select__display-input {
    padding: 0 var(--cps-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-small);
  }

  .select--small .select__clear {
    padding-inline-end: calc(var(--cps-input-spacing-small) / 2);
  }

  .select--small .select__expand-icon {
    padding-inline-end: var(--cps-input-spacing-small);
  }

  .select--small .select__chips {
    gap: var(--cps-spacing-0-5);
    padding: var(--cps-spacing-0-5) var(--cps-spacing-1);
  }

  .select--medium .select__field {
    min-height: var(--cps-input-height-medium);
    font: var(--cps-font-body);
  }

  .select--medium .select__field .select__display-input {
    padding: 0 var(--cps-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-medium);
  }

  .select--medium .select__clear {
    padding-inline-end: calc(var(--cps-input-spacing-medium) / 2);
  }

  .select--medium .select__expand-icon {
    padding-inline-end: var(--cps-input-spacing-medium);
  }

  .select--medium .select__chips {
    gap: var(--cps-spacing-1);
    padding: var(--cps-spacing-1) var(--cps-spacing-1-5);
  }

  .select--large .select__field {
    min-height: var(--cps-input-height-large);
    font: var(--cps-font-body-large);
  }

  .select--large .select__field .select__display-input {
    padding: 0 var(--cps-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-large);
  }

  .select--large .select__clear {
    padding-inline-end: calc(var(--cps-input-spacing-large) / 2);
  }

  .select--large .select__expand-icon {
    padding-inline-end: var(--cps-input-spacing-large);
  }

  .select--large .select__chips {
    gap: var(--cps-spacing-1-5);
    padding: var(--cps-spacing-1-5) var(--cps-spacing-2);
  }

  /* Prefix */
  .select__prefix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    transition: var(--cps-transition-fast) background-color;
    height: 100%;
    color: var(--cps-color-text-secondary);
    will-change: background-color;
  }

  .select__prefix::slotted(cps-icon) {
    color: var(--cps-color-text-secondary);
  }

  /* Clearable */
  .select__clear::part(icon) {
    font-size: 0.75em;
  }

  .select__clear {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    transition: var(--cps-transition-fast) background-color;
    height: 100%;
    will-change: background-color;
  }

  /* Expand icon */
  .select__expand-icon {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) background-color;
    height: 100%;
    color: var(--cps-color-text-secondary);
    will-change: color, background-color;
  }

  .select--open .select__expand-icon {
    color: var(--cps-color-text-tertiary);
  }

  .select__expand-icon cps-icon {
    transition: var(--cps-transition-fast) rotate ease;
    rotate: 0;
    will-change: rotate;
  }

  .select--open .select__expand-icon cps-icon {
    rotate: -180deg;
  }

  .select.select--disabled .select__expand-icon {
    color: var(--cps-color-text-disabled);
  }

  /* The contextual menu */
  .select__menu {
    display: flex;
    position: relative;
    flex-flow: column;
    gap: var(--cps-spacing-0-5);
    border-radius: var(--cps-border-radius-large);
    padding: var(--cps-spacing-0-5);
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
    font: var(--cps-font-body);
    overscroll-behavior: none;
  }

  @supports (scrollbar-width: thin) {
    .select__menu {
      scrollbar-width: thin;
      scrollbar-color: var(--cps-color-text-tertiary) transparent;
    }
  }

  /* Grouping */
  ::slotted(cps-separator) {
    margin: var(--cps-spacing-0-5) calc(var(--cps-spacing-0-5) * -1);
  }

  ::slotted(cps-label) {
    display: inline-block;
    padding: var(--cps-spacing-2-5) var(--cps-spacing-4) var(--cps-spacing-1-5);
    user-select: none;
  }
`;
