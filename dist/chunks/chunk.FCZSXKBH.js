import{f as e,i}from"./chunk.XKNP6CD6.js";var n=e`
  ${i}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    display: flex;
    position: relative;
    align-items: center;
    transition: background-color var(--cps-transition-fast), color var(--cps-transition-fast);
    border-radius: var(--cps-border-radius-medium);
    cursor: pointer;
    padding: var(--cps-spacing-3) var(--cps-spacing-4);
    letter-spacing: var(--cps-tracking-normal);
    white-space: nowrap;
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
    will-change: background-color, color;
    user-select: none;
  }

  .menu-item:not(.menu-item--checkable) .menu-item__check {
    display: none;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--cps-color-text-disabled);
    pointer-events: none;
  }

  .menu-item .menu-item__label {
    display: inline-block;
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    color: var(--cps-color-text-secondary);
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--cps-spacing-2-5);
  }

  .menu-item .menu-item__suffix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    color: var(--cps-color-text-secondary);
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--cps-spacing-2-5);
    font: var(--cps-font-label);
  }

  .menu-item.menu-item--disabled .menu-item__prefix,
  .menu-item.menu-item--disabled .menu-item__suffix {
    color: var(--cps-color-text-disabled);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--cps-color-fill-subtle-secondary);
  }

  .menu-item:not(.menu-item--disabled):active {
    background-color: var(--cps-color-fill-subtle-tertiary);
    color: var(--cps-color-text-secondary);
  }

  :host(:focus-visible) .menu-item {
    opacity: 1;
    outline: none;
    background-color: var(--cps-color-fill-subtle-secondary);
  }

  .menu-item .menu-item__check {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    margin-inline-end: var(--cps-spacing-2-5);
    width: 0.875rem;
    color: var(--cps-color-text-secondary);
  }

  .menu-item--checked .menu-item__check {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;export{n as a};
