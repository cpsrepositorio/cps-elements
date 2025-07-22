import{a as o}from"./chunk.OXS4I44J.js";import{a as t}from"./chunk.3U5NA53D.js";var e=t`
  ${o}

  :host {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: auto;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) color,
      var(--cps-transition-fast) border;
    border-width: var(--cps-button-border-width);
    border-style: solid;
    border-radius: var(--cps-border-radius-medium);
    cursor: inherit;
    padding: 0;
    width: 100%;
    vertical-align: middle;
    text-decoration: none;
    white-space: nowrap;
    font-family: var(--cps-font-family-sans);
    font-weight: var(--cps-font-weight-normal);
    user-select: none;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  .button--disabled {
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    pointer-events: none;
  }

  .button__content {
    display: inline-block;
  }

  .button__content::slotted(cps-icon) {
    vertical-align: -2px;
  }

  /* Variants */

  /* Default */
  .button--default {
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-primary);
    color: var(--cps-color-text-primary);
  }

  .button--default:hover:not(.button--disabled):not(.button--waiting) {
    border-top-color: var(--cps-color-elevation-top-control);
    border-right-color: var(--cps-color-stroke-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    border-left-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-secondary);
    color: var(--cps-color-text-primary);
  }

  .button--default:active:not(.button--disabled):not(.button--waiting) {
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-tertiary);
    color: var(--cps-color-text-tertiary);
  }

  .button--default.button--disabled {
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-disabled);
    color: var(--cps-color-text-disabled);
  }

  /* Accent (or Checked) */
  .button--accent,
  .button--checked {
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    background-color: var(--cps-color-fill-accent-primary);
    color: var(--cps-color-text-inverted-primary);
  }

  .button--accent:hover:not(.button--disabled):not(.button--waiting),
  .button--checked:hover:not(.button--disabled):not(.button--waiting) {
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-right-color: var(--cps-color-stroke-inverted-primary);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    border-left-color: var(--cps-color-stroke-inverted-primary);
    background-color: var(--cps-color-fill-accent-secondary);
    color: var(--cps-color-text-inverted-primary);
  }

  .button--accent:active:not(.button--disabled):not(.button--waiting),
  .button--checked:active:not(.button--disabled):not(.button--waiting) {
    border-color: var(--cps-color-stroke-inverted-primary);
    background-color: var(--cps-color-fill-accent-tertiary);
    color: var(--cps-color-text-inverted-secondary);
  }

  .button--accent.button--disabled,
  .button--checked.button--disabled {
    border-color: transparent;
    background-color: var(--cps-color-fill-accent-disabled);
    color: var(--cps-color-text-inverted-disabled);
  }

  /* Transparent */
  .button--transparent {
    border-color: transparent;
    background-color: transparent;
  }

  .button--transparent.button--circle {
    color: var(--cps-color-text-primary);
  }

  .button--transparent:not(.button--circle) {
    color: var(--cps-color-text-accent-primary);
  }

  .button--transparent:hover:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-color-fill-subtle-secondary);
  }

  .button--transparent.button--circle:hover:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-color-text-primary);
  }

  .button--transparent:not(.button--circle):hover:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-color-text-accent-secondary);
  }

  .button--transparent.button--circle:focus-visible:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-color-text-primary);
  }

  .button--transparent:not(.button--circle):focus-visible:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-color-text-accent-secondary);
  }

  .button--transparent:active:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-color-fill-subtle-tertiary);
  }

  .button--transparent.button--circle:active:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-color-text-secondary);
  }

  .button--transparent:not(.button--circle):active:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-color-text-accent-tertiary);
  }

  .button--transparent:not(.button--disabled):not(.button--waiting) .button__prefix,
  .button--transparent:not(.button--disabled):not(.button--waiting) .button__suffix {
    color: var(--cps-color-text-primary);
  }

  .button--transparent.button--waiting {
    color: var(--cps-color-text-primary);
  }

  .button--transparent.button--disabled {
    color: var(--cps-color-text-disabled);
  }

  /*
   * Size modifiers
  */

  .button--small {
    height: auto;
    min-height: var(--cps-button-height-small);
    line-height: calc(var(--cps-button-height-small) - var(--cps-button-border-width) * 2);
    font-size: var(--cps-button-font-size-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--cps-button-height-medium);
    line-height: calc(var(--cps-button-height-medium) - var(--cps-button-border-width) * 2);
    font-size: var(--cps-button-font-size-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--cps-button-height-large);
    line-height: calc(var(--cps-button-height-large) - var(--cps-button-border-width) * 2);
    font-size: var(--cps-button-font-size-large);
  }

  /*
   * Corner modifier
  */

  .button--corner.button--small {
    border-radius: var(--cps-button-height-small);
  }

  .button--corner.button--medium {
    border-radius: var(--cps-button-height-medium);
  }

  .button--corner.button--large {
    border-radius: var(--cps-button-height-large);
  }

  /*
   * Circle modifier
  */

  .button--circle {
    border-radius: var(--cps-border-radius-full);
    padding-right: 0;
    padding-left: 0;
  }

  .button--circle.button--small {
    width: var(--cps-button-height-small);
  }

  .button--circle.button--small .button__content {
    font-size: var(--cps-font-size-sm);
  }

  .button--circle.button--medium {
    width: var(--cps-button-height-medium);
  }

  .button--circle.button--medium .button__content {
    font-size: var(--cps-font-size-base);
  }

  .button--circle.button--large {
    width: var(--cps-button-height-large);
  }

  .button--circle.button--large .button__content {
    font-size: var(--cps-font-size-lg);
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
  */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Waiting modifier
  */

  .button--waiting {
    position: relative;
    cursor: wait;
  }

  .button--waiting .button__prefix,
  .button--waiting .button__content,
  .button--waiting .button__suffix,
  .button--waiting .button__caret {
    visibility: hidden;
  }

  .button--waiting cps-spinner {
    --indicator-color: currentColor;
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
    width: 1em;
    height: 1em;
    font-size: 1em;
  }

  /*
   * Badges
  */

  .button ::slotted(cps-badge) {
    position: absolute;
    top: 2px;
    right: 1.5px;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(cps-badge) {
    right: auto;
    left: 1.5px;
    translate: -50% -50%;
  }

  /*
   * Button spacing
  */

  .button--has-label.button--small .button__content {
    padding: 0 var(--cps-spacing-2);
  }

  .button--has-label.button--medium .button__content {
    padding: 0 var(--cps-spacing-3-5);
  }

  .button--has-label.button--large .button__content {
    padding: 0 var(--cps-spacing-5);
  }

  .button--has-prefix.button--small:not(.button--circle) {
    padding-inline-start: var(--cps-spacing-1-5);
  }

  .button--has-prefix.button--small .button__content {
    padding-inline-start: var(--cps-spacing-1-5);
  }

  .button--has-prefix.button--small .button__prefix {
    font-size: var(--cps-font-size-sm);
  }

  .button--has-prefix.button--medium:not(.button--circle) {
    padding-inline-start: var(--cps-spacing-3);
  }

  .button--has-prefix.button--medium .button__content {
    padding-inline-start: var(--cps-spacing-3);
  }

  .button--has-prefix.button--medium .button__prefix {
    font-size: var(--cps-font-size-base);
  }

  .button--has-prefix.button--large:not(.button--circle) {
    padding-inline-start: var(--cps-spacing-3);
  }

  .button--has-prefix.button--large .button__content {
    padding-inline-start: var(--cps-spacing-3);
  }

  .button--has-prefix.button--large .button__prefix {
    font-size: var(--cps-font-size-lg);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--cps-spacing-2);
  }

  .button--has-suffix.button--small .button__content,
  .button--caret.button--small .button__content {
    padding-inline-end: var(--cps-spacing-2);
  }

  .button--has-suffix.button--small .button__suffix {
    font-size: var(--cps-font-size-sm);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--cps-spacing-3);
  }

  .button--has-suffix.button--medium .button__content,
  .button--caret.button--medium .button__content {
    padding-inline-end: var(--cps-spacing-3);
  }

  .button--has-suffix.button--medium .button__suffix {
    font-size: var(--cps-font-size-base);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--cps-spacing-3-5);
  }

  .button--has-suffix.button--large .button__content,
  .button--caret.button--large .button__content {
    padding-inline-end: var(--cps-spacing-3-5);
  }

  .button--has-suffix.button--large .button__suffix {
    font-size: var(--cps-font-size-lg);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
  */

  :host(.cps-button-group__button--first:not(.cps-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.cps-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.cps-button-group__button--last:not(.cps-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.cps-button-group__button:not(.cps-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--cps-button-border-width));
  }

  :host(.cps-button-group__button:not(.cps-button-group__button--first)) .button {
    border-left: 0 none transparent;
  }

  :host(.cps-button-group__button:not(.cps-button-group__button--last)) .button {
    border-right: 0 none transparent;
  }

  /* Add a visual separator between solid buttons */
  :host(.cps-button-group__button:not(.cps-button-group__button--first)) .button:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    border-left: 1px solid;
    content: '';
  }

  :host(.cps-button-group__button:not(.cps-button-group__button--first, [checked])) .button:before {
    border-left-color: var(--cps-color-stroke-primary);
  }

  :host(.cps-button-group__button[checked]:not(.cps-button-group__button--first)) .button:before {
    border-left-color: var(--cps-color-stroke-inverted-primary);
  }

  :host(
      .cps-button-group__button[variant='default']:not(
          .cps-button-group__button--first,
          .cps-button-group__button--radio
        )
    )
    .button:before {
    border-left-color: var(--cps-color-stroke-primary);
  }

  :host(
      .cps-button-group__button[variant='transparent']:not(
          .cps-button-group__button--first,
          .cps-button-group__button--radio
        )
    )
    .button:before {
    border-left-color: var(--cps-color-stroke-separator);
  }

  :host(
      .cps-button-group__button[variant='accent']:not(
          .cps-button-group__button--first,
          .cps-button-group__button--radio
        )
    )
    .button:before {
    border-left-color: var(--cps-color-stroke-inverted-primary);
  }

  /* Focus and checked are always on top */
  :host(.cps-button-group__button--focus),
  :host(.cps-button-group__button[checked]) {
    z-index: 2;
  }
`;export{e as a};
