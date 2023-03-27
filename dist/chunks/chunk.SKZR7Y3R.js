import{a as t,g as o}from"./chunk.LSQ7QZO7.js";var e=t`
  ${o}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--cps-button-border-width);
    border-radius: var(--cps-border-radius-medium);
    font-family: var(--cps-font-sans);
    font-weight: var(--cps-font-weight-normal);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--cps-transition-fast) background-color, var(--cps-transition-fast) color,
      var(--cps-transition-fast) border;
    cursor: inherit;
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
    flex: 0 0 auto;
    display: flex;
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
    background-color: var(--cps-fill-control-primary);
    border-color: var(--cps-stroke-control-primary);
    border-top-color: var(--cps-color-elevation-top-control);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    color: var(--cps-foreground-primary);
  }

  .button--default:hover:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-fill-control-secondary);
    border-color: var(--cps-stroke-control-primary);
    border-top-color: var(--cps-color-elevation-top-control);
    border-bottom-color: var(--cps-color-elevation-bottom-control);
    color: var(--cps-foreground-primary);
  }

  .button--default:active:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-fill-control-tertiary);
    border-color: var(--cps-stroke-control-primary);
    color: var(--cps-foreground-tertiary);
  }

  .button--default.button--disabled {
    background-color: var(--cps-fill-control-disabled);
    border-color: var(--cps-stroke-control-primary);
    color: var(--cps-foreground-disabled);
  }

  /* Accent */
  .button--accent {
    background-color: var(--cps-fill-accent-primary);
    border-color: var(--cps-stroke-control-inverted-primary);
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    color: var(--cps-foreground-inverted-primary);
  }

  .button--accent:hover:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-fill-accent-secondary);
    border-color: var(--cps-stroke-control-inverted-primary);
    border-top-color: var(--cps-color-elevation-top-accent-control);
    border-bottom-color: var(--cps-color-elevation-bottom-accent-control);
    color: var(--cps-foreground-inverted-primary);
  }

  .button--accent:active:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-fill-accent-tertiary);
    border-color: var(--cps-stroke-control-inverted-primary);
    color: var(--cps-foreground-inverted-secondary);
  }

  .button--accent.button--disabled {
    background-color: var(--cps-fill-accent-disabled);
    border-color: transparent;
    color: var(--cps-foreground-inverted-disabled);
  }

  /* Transparent */
  .button--transparent {
    background-color: transparent;
    border-color: transparent;
  }

  .button--transparent.button--circle {
    color: var(--cps-foreground-primary);
  }

  .button--transparent:not(.button--circle) {
    color: var(--cps-foreground-brand-primary);
  }

  .button--transparent:hover:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-fill-control-subtle-secondary);
  }

  .button--transparent.button--circle:hover:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-foreground-primary);
  }

  .button--transparent:not(.button--circle):hover:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-foreground-brand-secondary);
  }

  .button--transparent.button--circle:focus-visible:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-foreground-primary);
  }

  .button--transparent:not(.button--circle):focus-visible:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-foreground-brand-secondary);
  }

  .button--transparent:active:not(.button--disabled):not(.button--waiting) {
    background-color: var(--cps-fill-control-subtle-tertiary);
  }

  .button--transparent.button--circle:active:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-foreground-secondary);
  }

  .button--transparent:not(.button--circle):active:not(.button--disabled):not(.button--waiting) {
    color: var(--cps-foreground-brand-tertiary);
  }

  .button--transparent:not(.button--disabled):not(.button--waiting) .button__prefix,
  .button--transparent:not(.button--disabled):not(.button--waiting) .button__suffix {
    color: var(--cps-foreground-primary);
  }

  .button--transparent.button--waiting {
    color: var(--cps-foreground-primary);
  }

  .button--transparent.button--disabled {
    color: var(--cps-foreground-disabled);
  }

  /*
   * Size modifiers
  */

  .button--small {
    font-size: var(--cps-button-font-size-small);
    height: var(--cps-button-height-small);
    line-height: calc(var(--cps-button-height-small) - var(--cps-button-border-width) * 2);
  }

  .button--medium {
    font-size: var(--cps-button-font-size-medium);
    height: var(--cps-button-height-medium);
    line-height: calc(var(--cps-button-height-medium) - var(--cps-button-border-width) * 2);
  }

  .button--large {
    font-size: var(--cps-button-font-size-large);
    height: var(--cps-button-height-large);
    line-height: calc(var(--cps-button-height-large) - var(--cps-button-border-width) * 2);
  }

  /*
   * Pill modifier
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
    padding-left: 0;
    padding-right: 0;
    border-radius: var(--cps-border-radius-full);
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
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
  */

  .button ::slotted(cps-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(cps-badge) {
    right: auto;
    left: 0;
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

  /* Add a visual separator between solid buttons */
  :host(
      .cps-button-group__button:not(
          .cps-button-group__button--first,
          .cps-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.cps-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.cps-button-group__button--focus),
  :host(.cps-button-group__button[checked]) {
    z-index: 2;
  }
`;export{e as a};
