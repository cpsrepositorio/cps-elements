import{a as e}from"./chunk.OXS4I44J.js";import{a as r}from"./chunk.3U5NA53D.js";var t=r`
  ${e}

  :host {
    --size: 25rem;
    --header-spacing: var(--cps-spacing-6);
    --body-spacing: var(--cps-spacing-6);
    --footer-spacing: var(--cps-spacing-6);

    display: contents;
  }

  .drawer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--cps-z-index-drawer);
  }

  .drawer--contained {
    position: absolute;
    z-index: var(--cps-z-index-dropdown);
  }

  .drawer__panel {
    display: flex;
    position: absolute;
    flex-direction: column;
    z-index: 2;
    border-width: 1px;
    border-style: solid;
    border-color: var(--cps-color-stroke-primary);
    background: var(--cps-color-background-acrylic-base);
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    filter: drop-shadow(var(--cps-shadow-xl));
    backdrop-filter: var(--cps-blur-small);
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }
  .drawer--top .drawer__panel {
    top: 0;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    right: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    left: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
    align-items: center;
  }

  .drawer__title {
    flex: 1 1 auto;
    margin: 0;
    padding: var(--header-spacing);
    font: var(--cps-font-title);
    font-weight: var(--cps-font-weight-normal);
  }

  .drawer__header-actions {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: var(--cps-spacing-2);
    justify-content: end;
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions cps-icon-button,
  .drawer__header-actions ::slotted(cps-icon-button) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    font: var(--cps-font-body);
  }

  .drawer__body {
    display: block;
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer.drawer--has-header .drawer__body {
    padding-top: 0;
  }

  .drawer__footer {
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: var(--cps-spacing-4);
    align-items: center;
    justify-content: end;
    justify-items: end;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: var(--cps-color-stroke-primary);
    background: var(--cps-color-background-solid-primary);
    padding: var(--footer-spacing);
    text-align: right;
  }

  .drawer__footer ::slotted(*) {
    box-sizing: border-box;
    width: calc(50% - var(--cps-spacing-2));
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__backdrop {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 250ms cubic-bezier(0.2, 0.9, 0.3, 1);
    opacity: 0;
    background: var(--cps-color-backdrop);
    pointer-events: all;
  }

  .drawer--contained .drawer__backdrop {
    position: absolute;
  }

  .drawer--open .drawer__backdrop {
    opacity: 1;
  }

  @media screen and (max-width: 420px) {
    .drawer__panel {
      max-height: 80vh;
    }
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border-width: 2px;
      border-style: solid;
      border-color: var(--cps-color-stroke-secondary);
    }
  }
`;export{t as a};
