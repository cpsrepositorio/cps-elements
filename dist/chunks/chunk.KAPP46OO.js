import{a as i,i as o}from"./chunk.FVWYSG5E.js";var a=i`
  ${o}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .notification {
    display: flex;
    position: relative;
    align-items: stretch;
    margin: inherit;
    border: solid 1px var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-medium);
    background-color: var(--cps-color-system-neutral-subtle);
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
  }

  .notification:not(.notification--has-icon) .notification__icon,
  .notification:not(.notification--closable) .notification__close-button {
    display: none;
  }

  .notification__icon {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    margin: var(--cps-spacing-4) 0 0 var(--cps-spacing-3);
    border-radius: var(--cps-border-radius-full);
    width: var(--cps-spacing-4);
    height: var(--cps-spacing-4);
    color: var(--cps-palette-neutral-0);
    font-size: var(--cps-font-size-xs);
  }

  .notification--neutral {
    background: var(--cps-color-system-neutral-subtle);
  }

  .notification--neutral .notification__icon {
    background: var(--cps-color-system-neutral);
  }

  .notification--informative {
    background: var(--cps-color-system-informative-subtle);
  }

  .notification--informative .notification__icon {
    background: var(--cps-color-system-informative);
  }

  .notification--warning {
    background: var(--cps-color-system-warning-subtle);
  }

  .notification--warning .notification__icon {
    background: var(--cps-color-system-warning);
  }

  .notification--critical {
    background: var(--cps-color-system-critical-subtle);
  }

  .notification--critical .notification__icon {
    background: var(--cps-color-system-critical);
  }

  .notification--success {
    background: var(--cps-color-system-success-subtle);
  }

  .notification--success .notification__icon {
    background: var(--cps-color-system-success);
  }

  .notification__message {
    display: block;
    flex: 1 1 auto;
    padding: var(--cps-spacing-4) var(--cps-spacing-3);
    overflow: hidden;
  }

  .notification__close-button {
    display: flex;
    flex: 0 0 auto;
    align-items: start;
    margin: var(--cps-spacing-4) var(--cps-spacing-3) 0 0;
  }
`;export{a};
