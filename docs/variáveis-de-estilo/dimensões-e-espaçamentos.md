# Dimensões e espaçamentos

Usar a combinação apropriada de dimensões e espaçamentos, de forma padronizada ao longo de uma aplicação, proporciona uma experiência do usuário mais apropriada aos requisitos de funcionalidade e interação, além de evidentemente transmitir uma sensação de maior profissionalismo em relação à construção da interface.

## Escala de medidas

Todos os tamanhos, margens, espaçamentos, e posicionamento, são baseados em uma escala de medidas em unidade `rem`, que permite que os elementos sejam posicionados de forma consistente e proporcional, de acordo com o tamanho da tela e o tamanho da fonte.

| Variável            | Valor           | Exemplo                                                                  |
| ------------------- | --------------- | ------------------------------------------------------------------------ |
| `--cps-spacing-px`  | 1px             | <div class="spacing-sample" style="width: var(--cps-spacing-px)"></div>  |
| `--cps-spacing-0-5` | 0.125rem (2px)  | <div class="spacing-sample" style="width: var(--cps-spacing-0-5)"></div> |
| `--cps-spacing-1`   | 0.25rem (4px)   | <div class="spacing-sample" style="width: var(--cps-spacing-1)"></div>   |
| `--cps-spacing-1-5` | 0.375rem (6px)  | <div class="spacing-sample" style="width: var(--cps-spacing-1-5)"></div> |
| `--cps-spacing-2`   | 0.5rem (8px)    | <div class="spacing-sample" style="width: var(--cps-spacing-2)"></div>   |
| `--cps-spacing-2-5` | 0.625rem (10px) | <div class="spacing-sample" style="width: var(--cps-spacing-2-5)"></div> |
| `--cps-spacing-3`   | 0.75rem (12px)  | <div class="spacing-sample" style="width: var(--cps-spacing-3)"></div>   |
| `--cps-spacing-3-5` | 0.875rem (14px) | <div class="spacing-sample" style="width: var(--cps-spacing-3-5)"></div> |
| `--cps-spacing-4`   | 1rem (16px)     | <div class="spacing-sample" style="width: var(--cps-spacing-4)"></div>   |
| `--cps-spacing-4-5` | 1.125rem (18px) | <div class="spacing-sample" style="width: var(--cps-spacing-4-5)"></div> |
| `--cps-spacing-5`   | 1.25rem (20px)  | <div class="spacing-sample" style="width: var(--cps-spacing-5)"></div>   |
| `--cps-spacing-5-5` | 1.375rem (22px) | <div class="spacing-sample" style="width: var(--cps-spacing-5-5)"></div> |
| `--cps-spacing-6`   | 1.5rem (24px)   | <div class="spacing-sample" style="width: var(--cps-spacing-6)"></div>   |
| `--cps-spacing-6-5` | 1.625rem (26px) | <div class="spacing-sample" style="width: var(--cps-spacing-6-5)"></div> |
| `--cps-spacing-7`   | 1.75rem (28px)  | <div class="spacing-sample" style="width: var(--cps-spacing-7)"></div>   |
| `--cps-spacing-7-5` | 1.875rem (30px) | <div class="spacing-sample" style="width: var(--cps-spacing-7-5)"></div> |
| `--cps-spacing-8`   | 2rem (32px)     | <div class="spacing-sample" style="width: var(--cps-spacing-8)"></div>   |
| `--cps-spacing-8-5` | 2.125rem (34px) | <div class="spacing-sample" style="width: var(--cps-spacing-8-5)"></div> |
| `--cps-spacing-9`   | 2.25rem (36px)  | <div class="spacing-sample" style="width: var(--cps-spacing-9)"></div>   |
| `--cps-spacing-9-5` | 2.375rem (38px) | <div class="spacing-sample" style="width: var(--cps-spacing-9-5)"></div> |
| `--cps-spacing-10`  | 2.5rem (40px)   | <div class="spacing-sample" style="width: var(--cps-spacing-10)"></div>  |
| `--cps-spacing-11`  | 2.75rem (44px)  | <div class="spacing-sample" style="width: var(--cps-spacing-11)"></div>  |
| `--cps-spacing-12`  | 3rem (48px)     | <div class="spacing-sample" style="width: var(--cps-spacing-12)"></div>  |
| `--cps-spacing-14`  | 3.5rem (56px)   | <div class="spacing-sample" style="width: var(--cps-spacing-14)"></div>  |
| `--cps-spacing-16`  | 4rem (64px)     | <div class="spacing-sample" style="width: var(--cps-spacing-16)"></div>  |
| `--cps-spacing-18`  | 4.5rem (72px)   | <div class="spacing-sample" style="width: var(--cps-spacing-18)"></div>  |
| `--cps-spacing-20`  | 5rem (80px)     | <div class="spacing-sample" style="width: var(--cps-spacing-20)"></div>  |

## Medidas negativas

Medidas negativas são úteis para reposicionar elementos, ou para criar espaçamentos negativos entre elementos adjacentes. Por exemplo, um elemento com `margin-left: -10px` irá se posicionar dez pixels para a esquerda de sua posição original.

Para não aumentar desnecessariamente os arquivos de tema do CPS Elements, disponibilizamos somente as medidas positivas como variáveis. Para obter medidas negativas, basta usar a variável desejada em um cálculo com uma multiplicação por `-1`. Veja no exemplo abaixo o elemento sendo deslocado `1rem` negativamente em relação ao seu topo.

| Cálculo                           | Valor         | Exemplo                                                                                                      |
| --------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| `calc(var(--cps-spacing-4) * -1)` | -1rem (-16px) | <div class="spacing-sample" style="top: calc(var(--cps-spacing-4) * -1); width: var(--cps-spacing-4)"></div> |

<style>
.spacing-sample {
  display: inline-grid;
  position: relative;
  background: var(--cps-palette-accent-400);
  height: 1rem;
}
</style>
