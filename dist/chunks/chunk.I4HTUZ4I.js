import{a as t}from"./chunk.M4ACP6KD.js";import{c as a}from"./chunk.QJBMNVJB.js";var i=a`
  ${t}

  :host {
    display: inline-block;
  }

  .avatar {
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: var(--avatar-background, var(--cps-palette-neutral-500));
    width: var(--size, 2em);
    height: var(--size, 2em);
    vertical-align: middle;
    color: rgb(255 255 255 / 78.6%);
    font-family: var(--cps-font-family-sans);
    font-weight: var(--cps-font-weight-normal);
    user-select: none;
  }

  .avatar::-moz-focus-inner {
    border: 0;
  }

  .avatar:focus {
    outline: none;
  }

  .avatar:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: var(--cps-focus-ring-offset);
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--cps-border-radius-full);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--cps-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon,
  .avatar__initials {
    font-size: calc(var(--size, 2em) * 0.5);
  }

  .avatar__icon {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    background: inherit;
    -webkit-background-clip: text;
    background-clip: text;
    text-transform: uppercase;
    line-height: 1;
    color: transparent;
    filter: sepia(5) saturate(100) invert(1) grayscale(1) contrast(9);
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  /*
   * Badges
  */

  .avatar ::slotted(cps-badge) {
    position: absolute;
    top: 2px;
    right: 1.5px;
    z-index: 1;
    pointer-events: none;
    translate: 50% -50%;
  }

  .avatar--rtl ::slotted(cps-badge) {
    right: auto;
    left: 1.5px;
    translate: -50% -50%;
  }

  /* Sizes */

  .avatar--stamp {
    --size: calc(var(--cps-font-size-3xs) * 2);
  }

  .avatar--caption {
    --size: calc(var(--cps-font-size-2xs) * 2);
  }

  .avatar--label {
    --size: calc(var(--cps-font-size-xs) * 2);
  }

  .avatar--body {
    --size: calc(var(--cps-font-size-sm) * 2);
  }

  .avatar--body-em {
    --size: calc(var(--cps-font-size-lt) * 2);
  }

  .avatar--body-strong {
    --size: calc(var(--cps-font-size-lt) * 2);
  }

  .avatar--body-large {
    --size: calc(var(--cps-font-size-base) * 2);
  }

  .avatar--subtitle {
    --size: calc(var(--cps-font-size-lg) * 2);
  }

  .avatar--title {
    --size: calc(var(--cps-font-size-xl) * 2);
  }

  .avatar--heading {
    --size: calc(var(--cps-font-size-4xl) * 2);
  }

  .avatar--display {
    --size: calc(var(--cps-font-size-7xl) * 2);
  }
`;export{i as a};
