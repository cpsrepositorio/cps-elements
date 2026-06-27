import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .table-view {
    display: flex;
    flex-direction: column;
    gap: var(--cps-spacing-2);
  }

  /* Barra de ferramentas (título, busca, ações) acima da tabela */
  .table-view__toolbar {
    display: flex;
    gap: var(--cps-spacing-3);
    align-items: center;
  }

  /* Região rolável que contém a tabela */
  .table-view__container {
    position: relative;
    transition: outline-color var(--cps-transition-fast);
    border: solid 1px var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-medium);
    max-height: var(--max-height, none);
    overflow: auto;
  }

  .table-view__container:focus {
    outline: none;
  }

  .table-view__container:focus-visible {
    outline: var(--cps-focus-ring);
    outline-offset: calc(var(--cps-focus-ring-offset) * -1);
  }

  /* Estado vazio */
  .table-view__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--cps-spacing-10) var(--cps-spacing-6);
    text-align: center;
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-body);
  }

  /* Camada de carregando sobre a tabela */
  .table-view__loading {
    display: flex;
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
    background: var(--cps-color-background-acrylic);
    -webkit-backdrop-filter: var(--cps-blur-medium);
    backdrop-filter: var(--cps-blur-medium);
    font-size: var(--cps-font-size-xl);
  }

  /* Rodapé (paginação, contagem) */
  .table-view__footer {
    display: flex;
    gap: var(--cps-spacing-3);
    align-items: center;
    justify-content: space-between;
  }

  .table-view__footer:not(.table-view__footer--has-content) {
    display: none;
  }

  .table-view__toolbar:not(.table-view__toolbar--has-content) {
    display: none;
  }
`;
