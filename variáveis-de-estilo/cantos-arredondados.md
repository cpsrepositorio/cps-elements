# Cantos arredondados

Em um sentido mais primordial, interfaces gráficas são apenas conjuntos de blocos, quadrados e retângulos espalhados ao longo da tela no intuito de trazer diferentes significados. CPS Elements utiliza cantos arredondados para suavizar a aparência destes blocos, além de se aproveitar das variações de geometria para proporcionar um ar mais moderno, entretanto sutil, sem exageros.

## Níveis de arredondamento

Nem sempre posicionar elementos uns sobre os outros é suficiente para criar uma sensação de profundidade. Para isso, é possível utilizar sombras projetadas, que simulam a luz do ambiente.

| Variável                     | Valor  | Exemplo                                                                                       |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| `--cps-border-radius-small`  | 2px    | <div class="radius-sample" style="border-radius: var(--cps-border-radius-small)"></div>       |
| `--cps-border-radius-medium` | 4px    | <div class="radius-sample" style="border-radius: var(--cps-border-radius-medium)"></div>      |
| `--cps-border-radius-large`  | 8px    | <div class="radius-sample" style="border-radius: var(--cps-border-radius-large)"></div>       |
| `--cps-border-radius-pill`   | 9999px | <div class="radius-sample" style="border-radius: var(--cps-border-radius-pill)"></div>        |
| `--cps-border-radius-full`   | 50%    | <div class="radius-sample circle" style="border-radius: var(--cps-border-radius-full)"></div> |

<style>
.radius-sample {
  display: inline-grid;
  border: 1px solid var(--cps-palette-accent-300);
  background: var(--cps-palette-accent-100);
  width: 6rem;
  height: 3rem;
}

.radius-sample.circle {
  width: 4rem;
  height: 4rem;
}

.table-wrapper th:last-of-type,
.table-wrapper td:last-of-type {
  text-align: right;
}
</style>
