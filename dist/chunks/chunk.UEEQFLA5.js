import{a as n}from"./chunk.YZ3F5QTE.js";import{a as r}from"./chunk.M4ACP6KD.js";import{c as o}from"./chunk.QJBMNVJB.js";var a=o`
  ${o`
    ${r}
    ${n}
  `}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
  }

  /** Flyout variables override */
  .dropdown {
    --background-color: var(--cps-color-background-acrylic);
    --border-color: var(--cps-color-stroke-surface);
    display: inline-flex;
    position: relative;
    flex: 1 1 auto;
    padding: 0;
    width: 100%;
    vertical-align: middle;
  }

  .dropdown::part(container) {
    z-index: var(--cps-z-index-dropdown);
    border-radius: var(--cps-border-radius-large);
    backdrop-filter: var(--cps-blur-medium);
    filter: drop-shadow(var(--cps-shadow)) drop-shadow(var(--cps-shadow-lg));
  }

  .dropdown[data-current-placement^='top']::part(container) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(container) {
    transform-origin: top;
  }

  /* Main field */
  .dropdown__field {
    display: flex;
    position: relative;
    flex: 1;
    align-items: center;
    justify-content: start;
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    width: 100%;
    min-width: 0;
    overflow: hidden;
    vertical-align: middle;
  }

  .dropdown__field::before,
  .dropdown__field::after {
    position: absolute;
    inset: 0;
    transition: var(--cps-transition-fast) opacity;
    border: solid var(--cps-input-border-width) transparent;
    border-radius: var(--cps-border-radius-medium);
    background-clip: border-box;
    background-origin: border-box;
    content: '';
    pointer-events: none;
    will-change: opacity;
    -webkit-mask: linear-gradient(white 0 0) border-box, linear-gradient(white 0 0) padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .dropdown:not(.dropdown--disabled) .dropdown__field::before {
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
  }

  .dropdown .dropdown__field::after {
    opacity: 0;
    border-color: var(--cps-color-stroke-primary);
  }

  .dropdown:not(.dropdown--disabled)
    :is(.dropdown__display-span, .dropdown__prefix, .dropdown__clear, .dropdown__expand-icon) {
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) background-color;
    background-color: var(--cps-input-background);
    will-change: color, background-color;
  }

  .dropdown:hover:not(.dropdown--open, .dropdown--disabled)
    :is(.dropdown__display-span, .dropdown__prefix, .dropdown__clear, .dropdown__expand-icon) {
    background-color: var(--cps-input-background-hover);
  }

  .dropdown:not(.dropdown--disabled):active
    :is(.dropdown__display-span, .dropdown__prefix, .dropdown__clear, .dropdown__expand-icon) {
    background-color: var(--cps-color-fill-tertiary);
  }

  .dropdown.dropdown--disabled .dropdown__field {
    outline: none;
    background-color: var(--cps-color-stroke-primary);
    cursor: not-allowed;
  }

  .dropdown:is(:active, .dropdown--disabled) .dropdown__field::before {
    opacity: 0;
  }

  .dropdown:is(:active, .dropdown--disabled) .dropdown__field::after {
    opacity: 1;
  }

  .dropdown:not(.dropdown--disabled).dropdown--focused .dropdown__field {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  /* Display span */
  .dropdown__display-span {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
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

  .dropdown.dropdown--disabled .dropdown__display-span {
    color: var(--cps-color-text-disabled);
  }

  .dropdown.dropdown--disabled .dropdown__display-span::placeholder {
    color: var(--cps-color-text-disabled);
  }

  .dropdown:not(.dropdown--disabled):active :is(.dropdown__display-span, .dropdown__expand-icon) {
    color: var(--cps-color-text-tertiary);
  }

  .dropdown__display-span:focus {
    outline: none;
  }

  /* Value input (always visually hidden) */
  .dropdown__value-input {
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

  /* Sizes */
  .dropdown--small .dropdown__field {
    min-height: var(--cps-input-height-small);
    font: var(--cps-font-label);
  }

  .dropdown--small .dropdown__field .dropdown__display-span {
    padding: 0 var(--cps-input-spacing-small);
  }

  .dropdown--small .dropdown__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-small);
  }

  .dropdown--small .dropdown__clear {
    padding-inline-end: calc(var(--cps-input-spacing-small) / 2);
  }

  .dropdown--small .dropdown__expand-icon {
    padding-inline-end: var(--cps-input-spacing-small);
  }

  .dropdown--medium .dropdown__field {
    min-height: var(--cps-input-height-medium);
    font: var(--cps-font-body);
  }

  .dropdown--medium .dropdown__field .dropdown__display-span {
    padding: 0 var(--cps-input-spacing-medium);
  }

  .dropdown--medium .dropdown__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-medium);
  }

  .dropdown--medium .dropdown__clear {
    padding-inline-end: calc(var(--cps-input-spacing-medium) / 2);
  }

  .dropdown--medium .dropdown__expand-icon {
    padding-inline-end: var(--cps-input-spacing-medium);
  }

  .dropdown--large .dropdown__field {
    min-height: var(--cps-input-height-large);
    font: var(--cps-font-body-large);
  }

  .dropdown--large .dropdown__field .dropdown__display-span {
    padding: 0 var(--cps-input-spacing-large);
  }

  .dropdown--large .dropdown__prefix::slotted(*) {
    margin-inline-start: var(--cps-input-spacing-large);
  }

  .dropdown--large .dropdown__clear {
    padding-inline-end: calc(var(--cps-input-spacing-large) / 2);
  }

  .dropdown--large .dropdown__expand-icon {
    padding-inline-end: var(--cps-input-spacing-large);
  }

  /* Prefix */
  .dropdown__prefix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    transition: var(--cps-transition-fast) background-color;
    height: 100%;
    color: var(--cps-color-text-secondary);
    will-change: background-color;
  }

  .dropdown__prefix::slotted(cps-icon) {
    color: var(--cps-color-text-secondary);
  }

  /* Clearable */
  .dropdown__clear::part(icon) {
    font-size: 0.75em;
  }

  .dropdown__clear {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    transition: var(--cps-transition-fast) background-color;
    height: 100%;
    will-change: background-color;
  }

  /* Expand icon */
  .dropdown__expand-icon {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    transition: var(--cps-transition-fast) color, var(--cps-transition-fast) background-color;
    height: 100%;
    color: var(--cps-color-text-secondary);
    will-change: color, background-color;
  }

  .dropdown--open .dropdown__expand-icon {
    color: var(--cps-color-text-tertiary);
  }

  .dropdown__expand-icon cps-icon {
    transition: var(--cps-transition-fast) rotate ease;
    rotate: 0;
    will-change: rotate;
  }

  .dropdown--open .dropdown__expand-icon cps-icon {
    rotate: -180deg;
  }

  .dropdown.dropdown--disabled .dropdown__expand-icon {
    color: var(--cps-color-text-disabled);
  }

  /* The contextual menu */
  .dropdown__menu {
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
    .dropdown__menu {
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

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
  */

  :host(.cps-button-group__button--first:not(.cps-button-group__button--last)) .dropdown__field,
  :host(.cps-button-group__button--first:not(.cps-button-group__button--last)) .dropdown__field::before {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.cps-button-group__button--inner) .dropdown__field,
  :host(.cps-button-group__button--inner) .dropdown__field::before {
    border-radius: 0;
  }

  :host(.cps-button-group__button--last:not(.cps-button-group__button--first)) .dropdown__field,
  :host(.cps-button-group__button--last:not(.cps-button-group__button--first)) .dropdown__field::before {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.cps-button-group__button:not(.cps-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--cps-button-border-width));
  }

  :host(.cps-button-group__button:not(.cps-button-group__button--first)) .dropdown__field::before {
    border-left: 0 none transparent;
  }

  :host(.cps-button-group__button:not(.cps-button-group__button--last)) .dropdown__field::before {
    border-right: 0 none transparent;
  }

  /* Add a visual separator between solid buttons */
  :host(.cps-button-group__button:not(.cps-button-group__button--first)) .dropdown::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    border-left: 1px solid;
    content: '';
  }

  :host(.cps-button-group__button:not(.cps-button-group__button--first, [checked])) .dropdown::before {
    border-left-color: var(--cps-color-stroke-primary);
  }

  :host(.cps-button-group__button[checked]:not(.cps-button-group__button--first)) .dropdown::before {
    border-left-color: var(--cps-color-stroke-inverted-primary);
  }

  :host(
      .cps-button-group__button[variant='default']:not(
          .cps-button-group__button--first,
          .cps-button-group__button--radio
        )
    )
    .dropdown::before {
    border-left-color: var(--cps-color-stroke-primary);
  }

  :host(
      .cps-button-group__button[variant='transparent']:not(
          .cps-button-group__button--first,
          .cps-button-group__button--radio
        )
    )
    .dropdown::before {
    border-left-color: var(--cps-color-stroke-separator);
  }

  :host(
      .cps-button-group__button[variant='accent']:not(
          .cps-button-group__button--first,
          .cps-button-group__button--radio
        )
    )
    .dropdown::before {
    border-left-color: var(--cps-color-stroke-inverted-primary);
  }

  /* Focus and checked are always on top */
  :host(.cps-button-group__button--focus),
  :host(.cps-button-group__button[checked]) {
    z-index: 2;
  }

  /* Grouped dropdown without placeholder has fine-tuned padding */
  :host(.cps-button-group__button) .dropdown:not(.dropdown--placeholder-visible) .dropdown__display-span {
    padding-right: 0;
    padding-left: var(--cps-spacing-1-5);
  }

  :host(.cps-button-group__button) .dropdown:not(.dropdown--placeholder-visible) .dropdown__expand-icon {
    padding-right: var(--cps-spacing-1-5);
  }
`;export{a};
