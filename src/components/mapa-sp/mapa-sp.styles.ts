import { css } from 'lit';

export default css`
  :host {
    display: block;
    --mapa-cor: var(--cps-color-fill-accent-primary);
  }

  .wrap {
    display: grid;
    gap: var(--cps-spacing-4);
    align-items: start;
  }
  .wrap.has-side {
    grid-template-columns: 1fr minmax(280px, 340px);
  }

  /* ===== mapa ===== */
  .mapa {
    position: relative;
    border: solid 1px var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-medium);
    overflow: hidden;
    background: var(--cps-color-fill-primary);
    min-height: 120px;
  }
  .mapa svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .mapa svg path.nra-reg {
    transition: fill 0.18s ease;
  }
  :host([selecao]) .mapa svg path.nra-reg {
    cursor: pointer;
  }
  .mapa svg path.hot {
    stroke: #1b1918;
    stroke-width: 1.1px;
    stroke-linejoin: round;
  }
  .mapa svg path.sel {
    stroke: #1b1918;
    stroke-width: 1.7px;
  }
  .mapa svg path.nra-sede {
    stroke: none;
  }
  /* modo branco: regiões brancas; destaque na cor principal */
  :host([modo='branco']) .mapa svg path.nra-reg {
    fill: #fff;
  }
  :host([modo='branco']) .mapa svg path.hot,
  :host([modo='branco']) .mapa svg path.sel {
    fill: var(--mapa-cor);
  }

  .carregando {
    display: grid;
    place-items: center;
    padding: var(--cps-spacing-8);
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-body);
  }

  /* ===== painel lateral ===== */
  .side {
    display: flex;
    flex-direction: column;
    gap: var(--cps-spacing-4);
    position: sticky;
    top: var(--cps-spacing-4);
    max-height: calc(100vh - 2 * var(--cps-spacing-4));
    overflow: auto;
  }
  .box {
    border: solid 1px var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-medium);
    padding: var(--cps-spacing-3) var(--cps-spacing-4);
  }
  .box > h4 {
    margin: 0 0 var(--cps-spacing-2-5);
    font: var(--cps-font-caption-strong);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--cps-color-text-secondary);
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 1px;
    max-height: 340px;
    overflow: auto;
  }
  .mrow {
    display: flex;
    align-items: center;
    gap: var(--cps-spacing-2-5);
    padding: var(--cps-spacing-1-5) var(--cps-spacing-2);
    border-radius: var(--cps-border-radius-small);
    cursor: pointer;
    font: var(--cps-font-body);
  }
  .mrow:hover,
  .mrow.on {
    background: var(--cps-color-fill-subtle-secondary);
  }
  .mrow .sw {
    width: 15px;
    height: 15px;
    border-radius: 4px;
    flex: 0 0 auto;
    border: solid 1px rgb(0 0 0 / 12%);
  }
  .mrow .nm {
    line-height: 1.15;
  }
  .mrow .nm small {
    display: block;
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-caption);
  }
  .mrow .vv {
    margin-left: auto;
    font: var(--cps-font-body-strong);
  }

  .selreg {
    display: flex;
    align-items: center;
    gap: var(--cps-spacing-2-5);
    font: var(--cps-font-body);
  }
  .selreg .dot {
    width: 14px;
    height: 14px;
    border-radius: 4px;
    flex: 0 0 auto;
  }
  .selreg .empty {
    color: var(--cps-color-text-tertiary);
  }

  .scale .bar {
    height: 12px;
    border-radius: 6px;
    border: solid 1px var(--cps-color-stroke-secondary);
  }
  .scale .ends {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--cps-spacing-1-5);
    font: var(--cps-font-caption);
    color: var(--cps-color-text-secondary);
  }

  .kpis {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--cps-spacing-2);
  }
  .kpi {
    border: solid 1px var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-small);
    padding: var(--cps-spacing-2-5);
  }
  .kpi .v {
    font: var(--cps-font-subtitle);
    line-height: 1.1;
  }
  .kpi .l {
    margin-top: 2px;
    font: var(--cps-font-caption);
    color: var(--cps-color-text-secondary);
  }

  .kpibig {
    font: var(--cps-font-title);
  }
  .kpibig small {
    font: var(--cps-font-caption);
    color: var(--cps-color-text-secondary);
  }
  .back {
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    margin-bottom: var(--cps-spacing-2);
    color: var(--cps-color-text-accent-primary);
    font: var(--cps-font-caption);
    cursor: pointer;
  }
  .brow {
    margin-top: var(--cps-spacing-2);
  }
  .brow .bl {
    display: flex;
    justify-content: space-between;
    gap: var(--cps-spacing-2);
    margin-bottom: 3px;
    font: var(--cps-font-caption);
  }
  .brow .bl b {
    font: var(--cps-font-caption-strong);
  }
  .btrack {
    height: 7px;
    border-radius: 999px;
    background: var(--cps-color-fill-subtle-secondary);
    overflow: hidden;
  }
  .btrack span {
    display: block;
    height: 100%;
    border-radius: 999px;
  }

  .tip {
    position: fixed;
    z-index: 40;
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: var(--cps-spacing-1-5);
    padding: var(--cps-spacing-1) var(--cps-spacing-2);
    border-radius: var(--cps-border-radius-small);
    background: #1b1918;
    color: #fff;
    font: var(--cps-font-caption);
    opacity: 0;
    transition: opacity 0.12s;
  }
  .tip.on {
    opacity: 1;
  }
  .tip .sw {
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }
  .ilus {
    font: var(--cps-font-caption);
    color: var(--cps-color-text-secondary);
    border: solid 1px var(--cps-color-stroke-secondary);
    border-radius: 999px;
    padding: 1px 7px;
    text-transform: uppercase;
  }

  @media (max-width: 780px) {
    .wrap.has-side {
      grid-template-columns: 1fr;
    }
    .side {
      position: static;
      max-height: none;
    }
  }
`;
