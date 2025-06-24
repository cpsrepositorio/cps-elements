import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --width: 31rem;
    --header-spacing: var(--cps-spacing-6);
    --body-spacing: var(--cps-spacing-6);
    --footer-spacing: var(--cps-spacing-6);
    --internal-radius: calc(var(--cps-border-radius-large) - 1px);

    display: contents;
  }

  .dialog {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: var(--cps-z-index-dialog);
    pointer-events: none;
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    transform-origin: center center;
    opacity: 0;
    z-index: 2;
    border-width: 1px;
    border-style: solid;
    border-radius: var(--cps-border-radius-large);
    border-color: var(--cps-color-stroke-primary);
    width: var(--width);
    max-width: calc(100% - var(--cps-spacing-9));
    max-height: calc(100% - var(--cps-spacing-9));
    font: var(--cps-font-body);
    filter: drop-shadow(var(--cps-shadow-xl));
    backdrop-filter: var(--cps-blur-large);
    pointer-events: all;
  }

  .dialog__panel:focus {
    outline: none;
  }

  .dialog--open .dialog__panel {
    display: flex;
    transform: scale(1);
    opacity: 1;
  }

  .dialog__header {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    border-radius: var(--internal-radius) var(--internal-radius) 0 0;
  }

  .dialog:not(.dialog--has-body):not(.dialog--has-footer) .dialog__header {
    border-bottom-left-radius: var(--internal-radius);
    border-bottom-right-radius: var(--internal-radius);
  }

  .dialog__title {
    flex: 1 1 auto;
    margin: 0;
    padding: var(--header-spacing);
    font: var(--cps-font-title);
    font-weight: var(--cps-font-weight-normal);
  }

  .dialog__header-actions {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: var(--cps-spacing-2);
    justify-content: end;
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions cps-icon-button,
  .dialog__header-actions ::slotted(cps-icon-button) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    font: var(--cps-font-body);
  }

  .dialog:not(.dialog--has-body) .dialog__body {
    display: none;
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__header,
  .dialog__body {
    background: var(--cps-color-background-acrylic);
  }

  .dialog:not(.dialog--has-header) .dialog__body {
    border-top-left-radius: var(--internal-radius);
    border-top-right-radius: var(--internal-radius);
  }

  .dialog:not(.dialog--has-footer) .dialog__body {
    border-bottom-left-radius: var(--internal-radius);
    border-bottom-right-radius: var(--internal-radius);
  }

  .dialog.dialog--has-header .dialog__body {
    padding-top: 0;
  }

  .dialog__footer {
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: var(--cps-spacing-4);
    align-items: center;
    justify-content: end;
    justify-items: end;
    border-top-width: 1px;
    border-top-style: solid;
    border-radius: 0 0 var(--internal-radius) var(--internal-radius);
    border-top-color: var(--cps-color-stroke-primary);
    background: var(--cps-color-background-solid-primary);
    padding: var(--footer-spacing);
    text-align: right;
  }

  .dialog__footer ::slotted(*) {
    box-sizing: border-box;
    width: calc(50% - var(--cps-spacing-2));
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__backdrop {
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

  .dialog--open .dialog__backdrop {
    opacity: 1;
  }

  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border-width: 2px;
      border-style: solid;
      border-color: var(--cps-color-stroke-secondary);
    }
  }
`;
