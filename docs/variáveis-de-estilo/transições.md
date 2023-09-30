# Transições

Variáveis de estilo de transição permitem controlar a velocidade e a atenuação das animações de elementos durante mudanças de valores em suas propriedades CSS.

## Velocidades

CPS Elements preza por resposta visual rápida, para uma experiência de usuário responsiva e fluida. Assim, o componentes usam animação `fast` em quase todos os casos. Outras velocidades estão disponíveis para cenários de personalização.

| Variável                  | Valor  | Exemplo                                                                                        |
| ------------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `--cps-transition-x-fast` | 50ms   | <div class="transition-sample" style="animation-duration: var(--cps-transition-x-fast)"></div> |
| `--cps-transition-fast`   | 150ms  | <div class="transition-sample" style="animation-duration: var(--cps-transition-fast)"></div>   |
| `--cps-transition-medium` | 250ms  | <div class="transition-sample" style="animation-duration: var(--cps-transition-medium)"></div> |
| `--cps-transition-slow`   | 500ms  | <div class="transition-sample" style="animation-duration: var(--cps-transition-slow)"></div>   |
| `--cps-transition-x-slow` | 1000ms | <div class="transition-sample" style="animation-duration: var(--cps-transition-x-slow)"></div> |

## Atenuação

CPS Elements se aproveita da atenuação padrão `ease`, já aplicada pelos navegadores em qualquer transição ou animação que não especifica explicitamente uma atenuação personalizada. Sendo assim, não oferecemos variáveis de estilo para atenuação, mas as funções de atenuação nativas podem ser utilizadas normalmente.

| Valor             | Exemplo                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `ease` _(padrão)_ | <div class="transition-sample" style="animation-duration: var(--cps-transition-slow); animation-timing-function: ease"></div>        |
| `linear`          | <div class="transition-sample" style="animation-duration: var(--cps-transition-slow); animation-timing-function: linear"></div>      |
| `ease-in`         | <div class="transition-sample" style="animation-duration: var(--cps-transition-slow); animation-timing-function: ease-in"></div>     |
| `ease-out`        | <div class="transition-sample" style="animation-duration: var(--cps-transition-slow); animation-timing-function: ease-out"></div>    |
| `ease-in-out`     | <div class="transition-sample" style="animation-duration: var(--cps-transition-slow); animation-timing-function: ease-in-out"></div> |

<style>
@keyframes back-and-forth {
  100% {
    transform: translateX(-6rem);
  }
}

.transition-sample {
  display: inline-grid;
  border: 1px solid var(--cps-palette-accent-300);
  border-radius: var(--cps-border-radius-full);
  background: var(--cps-palette-accent-100);
  width: 3rem;
  height: 3rem;
  animation-name: back-and-forth;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.table-wrapper th:last-of-type,
.table-wrapper td:last-of-type {
  text-align: right;
}
</style>
