import{a as r}from"./chunk.VGVDIVHV.js";import{a as e}from"./chunk.3U5NA53D.js";var i=e`
  ${r}

  :host {
    --selected-background: var(--cps-color-background-solid-tertiary);
    --selected-border: var(--cps-color-stroke-primary);
    --border-radius: var(--cps-spacing-1-5);
    --inverse-rounded-corner-size: 8px;
  }

  :host:not([hidden]) {
    display: inline-block;
  }

  .tab-item {
    box-sizing: border-box;
    display: inline-flex;
    position: relative;
    gap: var(--cps-spacing-2);
    align-items: center;
    transition: color var(--cps-transition-fast), border var(--cps-transition-fast),
      background var(--cps-transition-fast), opacity var(--cps-transition-fast);
    z-index: 0;
    border: 1px solid transparent;
    background-clip: padding-box;
    background-color: transparent;
    cursor: pointer;
    height: var(--cps-spacing-8);
    text-decoration: none;
    white-space: nowrap;
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-body);
    user-select: none;
  }

  /* Placements */
  .tab-item--top {
    border-bottom: none;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    padding: var(--cps-spacing-2) var(--cps-spacing-6) var(--cps-spacing-2) var(--cps-spacing-4);
  }

  .tab-item--start:not(.tab-item--rtl),
  .tab-item--end.tab-item--rtl {
    flex: 1;
    border-right: none;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    padding: var(--cps-spacing-5) var(--cps-spacing-6) var(--cps-spacing-5) var(--cps-spacing-4);
    width: 100%;
  }

  .tab-item--start.tab-item--rtl,
  .tab-item--end:not(.tab-item--rtl) {
    flex: 1;
    border-left: none;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    padding: var(--cps-spacing-5) var(--cps-spacing-4) var(--cps-spacing-5) var(--cps-spacing-6);
    width: 100%;
  }

  .tab-item--bottom {
    border-top: none;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    padding: var(--cps-spacing-2) var(--cps-spacing-6) var(--cps-spacing-2) var(--cps-spacing-4);
  }

  /* Interaction states */
  .tab-item:not(.tab-item--disabled, .tab-item--selected):hover {
    z-index: 1;
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-secondary);
    color: var(--cps-color-text-primary);
  }

  .tab-item:not(.tab-item--disabled, .tab-item--selected):active {
    z-index: 1;
    border-color: var(--cps-color-stroke-primary);
    background-color: var(--cps-color-fill-tertiary);
    color: var(--cps-color-text-tertiary);
  }

  .tab-item:focus {
    outline: none;
  }

  .tab-item:not(.tab-item--disabled):focus-visible {
    z-index: 3;
    outline: var(--cps-focus-ring);
    outline-offset: calc(-1 * var(--cps-focus-ring-width) - var(--cps-focus-ring-offset));
  }

  .tab-item:not(.tab-item--disabled):focus-visible:hover {
    z-index: 3;
  }

  /* Fluid */
  .tab-item.tab-item--fluid {
    flex: 1;
  }

  /* Disabled */
  .tab-item.tab-item--disabled {
    cursor: not-allowed;
    color: var(--cps-color-text-disabled);
  }

  /* Selected */
  .tab-item.tab-item--selected {
    z-index: 2;
    border-color: var(--selected-border);
    background-color: var(--selected-background);
    cursor: default;
    color: var(--cps-color-text-primary);
  }

  .tab-item.tab-item--selected:focus-visible {
    outline: none;
  }

  /* Selected placements */
  .tab-item.tab-item--top.tab-item--selected {
    bottom: -1px;
    margin-top: -1px;
    padding-bottom: calc(var(--cps-spacing-2) + 1px);
    height: calc(var(--cps-spacing-8) + 1px);
  }

  .tab-item.tab-item--start:not(.tab-item--rtl).tab-item--selected,
  .tab-item.tab-item--end.tab-item--rtl.tab-item--selected {
    right: -1px;
    margin-left: -1px;
    padding-left: calc(var(--cps-spacing-4) + 1px);
    width: calc(100% + 1px);
  }

  .tab-item.tab-item--end:not(.tab-item--rtl).tab-item--selected,
  .tab-item.tab-item--start.tab-item--rtl.tab-item--selected {
    left: -1px;
    margin-right: -1px;
    padding-right: calc(var(--cps-spacing-4) + 1px);
    width: calc(100% + 1px);
  }

  .tab-item.tab-item--bottom.tab-item--selected {
    top: -1px;
    margin-bottom: -1px;
    padding-top: calc(var(--cps-spacing-2) + 1px);
    height: calc(var(--cps-spacing-8) + 1px);
  }

  /* Closable */
  .tab-item__close-button {
    display: flex;
    flex: 1;
    justify-content: end;
    padding-inline-start: var(--cps-spacing-1);
  }

  .tab-item--top .tab-item__close-button,
  .tab-item--bottom .tab-item__close-button {
    margin-inline-end: calc(var(--cps-spacing-2-5) * -1);
  }

  /* Has prefix */
  .tab-item__prefix::slotted(cps-icon) {
    margin-inline-start: calc(var(--cps-spacing-0-5) * -1);
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-body);
  }

  /* Inverse rounded bottom corners */
  .tab-item::before,
  .tab-item::after {
    --reverse-rounded-mask: radial-gradient(
        var(--inverse-rounded-corner-size) at var(--inverse-rounded-corner-size) 0,
        #0000 98%,
        #000
      )
      calc(-1 * var(--inverse-rounded-corner-size));
    position: absolute;
    opacity: 0;
    z-index: 1;
    background: inherit;
    content: '';
    pointer-events: none;
    clip-path: polygon(
      0% 0%,
      0% 100%,
      calc(var(--inverse-rounded-corner-size) + 1px) 100%,
      calc(var(--inverse-rounded-corner-size) + 1px) 0,
      calc(100% - (calc(var(--inverse-rounded-corner-size) + 1px))) 0,
      calc(100% - (calc(var(--inverse-rounded-corner-size) + 1px))) 100%,
      100% 100%,
      100% 0
    );
    -webkit-mask: var(--reverse-rounded-mask);
    mask: var(--reverse-rounded-mask);
  }

  .tab-item::before {
    --reverse-rounded-mask: radial-gradient(
        var(--inverse-rounded-corner-size) at var(--inverse-rounded-corner-size) 0,
        #0000 96%,
        #000
      )
      calc(-1 * var(--inverse-rounded-corner-size));
    background: var(--selected-border);
    clip-path: polygon(
      0% 0%,
      0% 100%,
      var(--inverse-rounded-corner-size) 100%,
      var(--inverse-rounded-corner-size) 0,
      calc(100% - var(--inverse-rounded-corner-size)) 0,
      calc(100% - var(--inverse-rounded-corner-size)) 100%,
      100% 100%,
      100% 0
    );
    -webkit-mask: var(--reverse-rounded-mask);
    mask: var(--reverse-rounded-mask);
  }

  .tab-item.tab-item--selected::before,
  .tab-item.tab-item--selected::after {
    opacity: 1;
  }

  /* Inverse rounded bottom corners placements */
  .tab-item--top::before,
  .tab-item--top::after {
    bottom: 0;
    left: 0;
    margin-bottom: -0.5px;
    margin-left: calc(-1 * var(--inverse-rounded-corner-size));
    width: calc(100% + var(--inverse-rounded-corner-size) * 2);
    height: var(--inverse-rounded-corner-size);
  }

  .tab-item--top::before {
    margin-bottom: 0.5px;
  }

  .tab-item--start::before,
  .tab-item--start::after,
  .tab-item--end::before,
  .tab-item--end::after {
    display: none;
  }

  .tab-item--bottom::before,
  .tab-item--bottom::after {
    top: 0;
    left: 0;
    margin-top: -0.5px;
    margin-left: calc(-1 * var(--inverse-rounded-corner-size));
    width: calc(100% + var(--inverse-rounded-corner-size) * 2);
    height: var(--inverse-rounded-corner-size);
    rotate: -180deg;
  }

  .tab-item--bottom::before {
    margin-top: 0.5px;
  }

  @media (forced-colors: selected) {
    .tab-item:not(.tab-item--disabled).tab-item--selected {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;export{i as a};
