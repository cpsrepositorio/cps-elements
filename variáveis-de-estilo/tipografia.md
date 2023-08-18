# Tipografia

Variáveis de estilo de tipografia são usadas para manter um conjunto consistente de estilos de fonte em toda a sua aplicação. Eles são usados para definir a família de fontes, tamanho, peso, espaçamento de letras e altura da linha.

## Auxiliares de tipografia

Os auxiliares de tipografia são usados para aplicar estilos de tipografia em conjunto, agrupando família, tamanho, peso, e altura da linha. A nomenclatura das variáveis segue as definições de [escala de tamanhos e estilos de tipografia](https://cpsrepositorio.github.io/cps-design-system/guia-visual/tipografia.html#escala-de-tamanhos-e-estilos) do CPS Design System.

| Variável                 | Peso     | Tamanho | Altura | Família | Exemplo                                                            |
| ------------------------ | -------- | ------- | ------ | ------- | ------------------------------------------------------------------ |
| `--cps-font-stamp`       | normal   | 3xs     | 2xs    | sans    | <span style="font: var(--cps-font-stamp)">Stamp</span>             |
| `--cps-font-caption`     | normal   | 2xs     | xs     | sans    | <span style="font: var(--cps-font-caption)">Caption</span>         |
| `--cps-font-label`       | normal   | xs      | sm     | sans    | <span style="font: var(--cps-font-label)">Label</span>             |
| `--cps-font-body`        | normal   | sm      | base   | sans    | <span style="font: var(--cps-font-body)">Body</span>               |
| `--cps-font-body-em`     | normal   | lt      | base   | sans    | <span style="font: var(--cps-font-body-em)">Body Emphasis</span>   |
| `--cps-font-body-strong` | semibold | lt      | base   | sans    | <span style="font: var(--cps-font-body-strong)">Body Strong</span> |
| `--cps-font-body-large`  | normal   | base    | lg     | sans    | <span style="font: var(--cps-font-body-large)">Body Large</span>   |
| `--cps-font-subtitle`    | semibold | lg      | xl     | sans    | <span style="font: var(--cps-font-subtitle)">Subtitle</span>       |
| `--cps-font-title`       | semibold | xl      | 2xl    | sans    | <span style="font: var(--cps-font-title)">Title</span>             |
| `--cps-font-heading`     | bold     | 4xl     | 5xl    | sans    | <span style="font: var(--cps-font-heading)">Heading</span>         |
| `--cps-font-display`     | bold     | 7xl     | 8xl    | sans    | <span style="font: var(--cps-font-display)">Display</span>         |

Graças a estes auxiliares, com uma única variável CSS é possível aplicar todas as definições tipográficas de uma só vez em um elemento, facilitando assim a utilização. Por exemplo:

```html
<h1 style="font: var(--cps-font-title)">Título</h1>
<p style="font: var(--cps-font-body)">Um parágrafo de texto qualquer...</p>
```

?> Aplicar estilos _inline_ nas próprias _tags_ HTML não é uma boa prática, exceto em cenários de _CSS-in-JS_, como tipicamente realizado com React. Em outros casos, prefira criar suas classes CSS, as quais utilizam internamente as variáveis CSS, e aplicar tais classes nas _tags_ HTML.

## Famílias

Estas são as duas pilhas tipográficas oferecidas como variáveis de estilo de tipografia.

| Variável                                                        | Valor                                                                                                    | Exemplo                                                                                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <code style="white-space: nowrap">--cps-font-family-sans</code> | 'Roboto Flex', 'Segoe UI', Verdana, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' | <span style="font-family: var(--cps-font-family-sans)">The quick brown fox jumps over the lazy dog.</span> |
| <code style="white-space: nowrap">--cps-font-family-mono</code> | SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace                                            | <span style="font-family: var(--cps-font-family-mono)">The quick brown fox jumps over the lazy dog.</span> |

?> Embora a utilização de Web Fonts por si só já apresente uma vantagem de padronização para todos os dispositivos e usuários, eventualmente (e bem raramente), algo pode falhar no servidor que a hospeda, ou algo pode falhar no navegador do usuário impedindo sua renderização. Neste caso, a abordagem mais segura, que foi a adotada por esta biblioteca, é utilizar uma pilha tipográfica ao invés de uma fonte única. Assim, especifica-se a fonte mais prioritária, seguida de fontes alternativas em caso de problemas, inclusive _fallback_ com fontes de sistema.

Observe que tanto os componentes CPS Elements quanto esta documentação utilizam somente a pilha tipográfica `--cps-font-family-sans`, exceto para exibição de códigos fonte, quando `--cps-font-family-mono` entra em uso.

## Tamanhos

Os tamanhos de fonte são definidos em uma escala modular através da unidade de medida `rem`, com base em um tamanho base conforme configurado no navegador do usuário (por padrão, sendo `1rem` equivalente a `16px`).

| Variável               | Valor            | Exemplo                                                           |
| ---------------------- | ---------------- | ----------------------------------------------------------------- |
| `--cps-font-size-3xs`  | 0.5rem (8px)     | <span style="font-size: var(--cps-font-size-3xs)">Exemplo</span>  |
| `--cps-font-size-2xs`  | 0.625rem (10px)  | <span style="font-size: var(--cps-font-size-2xs)">Exemplo</span>  |
| `--cps-font-size-xs`   | 0.75rem (12px)   | <span style="font-size: var(--cps-font-size-xs)">Exemplo</span>   |
| `--cps-font-size-sm`   | 0.875rem (14px)  | <span style="font-size: var(--cps-font-size-sm)">Exemplo</span>   |
| `--cps-font-size-lt`   | 0.9375rem (15px) | <span style="font-size: var(--cps-font-size-lt)">Exemplo</span>   |
| `--cps-font-size-base` | 1rem (16px)      | <span style="font-size: var(--cps-font-size-base)">Exemplo</span> |
| `--cps-font-size-lg`   | 1.125rem (18px)  | <span style="font-size: var(--cps-font-size-lg)">Exemplo</span>   |
| `--cps-font-size-xl`   | 1.25rem (20px)   | <span style="font-size: var(--cps-font-size-xl)">Exemplo</span>   |
| `--cps-font-size-2xl`  | 1.5rem (24px)    | <span style="font-size: var(--cps-font-size-2xl)">Exemplo</span>  |
| `--cps-font-size-3xl`  | 1.875rem (30px)  | <span style="font-size: var(--cps-font-size-3xl)">Exemplo</span>  |
| `--cps-font-size-4xl`  | 2.5rem (40px)    | <span style="font-size: var(--cps-font-size-4xl)">Exemplo</span>  |
| `--cps-font-size-5xl`  | 3rem (48px)      | <span style="font-size: var(--cps-font-size-5xl)">Exemplo</span>  |
| `--cps-font-size-6xl`  | 3.625rem (58px)  | <span style="font-size: var(--cps-font-size-6xl)">Exemplo</span>  |
| `--cps-font-size-7xl`  | 4.25rem (68px)   | <span style="font-size: var(--cps-font-size-7xl)">Exemplo</span>  |
| `--cps-font-size-8xl`  | 5.75rem (92px)   | <span style="font-size: var(--cps-font-size-8xl)">Exemplo</span>  |

## Pesos

Embora a fonte [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex) seja variável, esta biblioteca define pesos de fonte fixos para garantir a consistência visual entre os componentes. A tabela abaixo mostra os pesos de fonte disponíveis e seus respectivos valores numéricos.

| Variável                     | Valor | Exemplo                                                                                                         |
| ---------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| `--cps-font-weight-normal`   | 400   | <span style="font-weight: var(--cps-font-weight-normal);">The quick brown fox jumps over the lazy dog.</span>   |
| `--cps-font-weight-semibold` | 500   | <span style="font-weight: var(--cps-font-weight-semibold);">The quick brown fox jumps over the lazy dog.</span> |
| `--cps-font-weight-bold`     | 700   | <span style="font-weight: var(--cps-font-weight-bold);">The quick brown fox jumps over the lazy dog.</span>     |

## Espaçamentos de letras

Internamente, os componentes desta biblioteca não utilizam espaçamentos diferentes do padrão. No entanto, é possível alterar o espaçamento de letras através das variáveis abaixo, para cobrir casos de uso específico durante a construção de interfaces.

| Variável                 | Valor    | Exemplo                                                                                                        |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| `--cps-tracking-tighter` | -0.05em  | <span style="letter-spacing: var(--cps-tracking-tighter);">The quick brown fox jumps over the lazy dog.</span> |
| `--cps-tracking-tight`   | -0.025em | <span style="letter-spacing: var(--cps-tracking-tight);">The quick brown fox jumps over the lazy dog.</span>   |
| `--cps-tracking-normal`  | 0        | <span style="letter-spacing: var(--cps-tracking-normal);">The quick brown fox jumps over the lazy dog.</span>  |
| `--cps-tracking-wide`    | 0.025em  | <span style="letter-spacing: var(--cps-tracking-wide);">The quick brown fox jumps over the lazy dog.</span>    |
| `--cps-tracking-wider`   | 0.05em   | <span style="letter-spacing: var(--cps-tracking-wider);">The quick brown fox jumps over the lazy dog.</span>   |
| `--cps-tracking-widest`  | 0.1em    | <span style="letter-spacing: var(--cps-tracking-widest);">The quick brown fox jumps over the lazy dog.</span>  |

## Alturas de linha

Os [auxiliares de tipografia](#auxiliares-de-tipografia) já oferecem combinações adequadas de tamanho de fonte versus altura de linha, mas é possível controlar precisamente apenas a altura de linha com as variáveis a seguir, caso necessário em algum cenário específico.

| Variável                | Valor | Exemplo                                                                                                                                                                                                  |
| ----------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cps-leading-none`    | 1     | <div style="line-height: var(--cps-leading-none);">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</div>    |
| `--cps-leading-tight`   | 1.25  | <div style="line-height: var(--cps-leading-tight);">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</div>   |
| `--cps-leading-snug`    | 1.375 | <div style="line-height: var(--cps-leading-snug);">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</div>    |
| `--cps-leading-normal`  | 1.5   | <div style="line-height: var(--cps-leading-normal);">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</div>  |
| `--cps-leading-relaxed` | 1.625 | <div style="line-height: var(--cps-leading-relaxed);">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</div> |
| `--cps-leading-loose`   | 2     | <div style="line-height: var(--cps-leading-loose);">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</div>   |
