import{f as t,i as r}from"./chunk.XKNP6CD6.js";var e=t`
  ${r}

  :host {
    --color: var(--cps-stroke-separator);
    --thickness: var(--cps-spacing-px);
    --spacing: var(--cps-spacing-4);
    align-items: center;
    color: var(--cps-foreground-tertiary);
    font: var(--cps-text-label);
  }

  .separator--has-content {
    margin-inline: var(--cps-spacing-1);
  }

  .separator--has-content ::slotted(cps-icon) {
    position: relative;
    top: 1.5px;
    color: var(--cps-foreground-tertiary);
    font: var(--cps-text-body);
  }

  :host::before,
  :host::after {
    display: block;
    flex: 1 1 auto;
    background-color: var(--color);
    height: var(--thickness);
    content: '';
  }

  :host(:not([vertical])) {
    display: flex;
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-flex;
    flex-direction: column;
    margin: 0 var(--spacing);
    height: 100%;
  }

  :host([vertical])::before,
  :host([vertical])::after {
    width: var(--thickness);
    height: auto;
  }

  :host([vertical]) .separator--has-content {
    top: 0;
    margin-block: var(--cps-spacing-1);
    margin-inline: 0;
  }
`;export{e as a};
