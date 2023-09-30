# Cores

Variáveis de estilo de cor são usadas para manter um conjunto consistente de cores em toda a sua aplicação, mantendo aderência à identidade de marca, enquanto ainda capaz de proporcionar beleza e significado.

Todas as cores CPS Elements estão disponíveis nos [temas](/fundamentos/temas) claro e escuro. Você pode alternar o tema corrente desta documentação (utilizando o botão no canto superior direito da tela, ou simplesmente pressionando <kbd>&bsol;</kbd>) para apreciar os exemplos abaixo em ambos os modos de cor.

?> Sendo integralmente aderente ao CPS Design System, esta biblioteca emprega cor através de uma combinação de três paletas de cores, sendo uma Paleta de Cinzas Neutros, uma Paleta de Cor de Marca (_brand color_), e uma Paleta de Cor de Ênfase (_accent color_). Além disso, há uma semi-paleta de Cores de Estado para agregar mais significado a mudanças de estado durante a operação da interface. Para mais informações sobre o raciocínio por trás destas definições, consulte a seção [Cores do CPS Design System](https://cpsrepositorio.github.io/cps-design-system/guia-visual/cores.html).

## Paletas base

As paletas base são as escalas fundamentais de cores que compõem a identidade visual do sistema. Para que possam ser facilmente acessadas e utilizadas, as paletas base são definidas como variáveis de estilo de cor, e podem ser acessadas através de seus nomes, como `--cps-palette-brand-100`, `--cps-palette-accent-200`, etc.

No tema claro, as cores de numeração menor são mais claras, enquanto as de numeração maior são mais escuras. No tema escuro, a ordem é invertida. É por este motivo que as variáveis `--cps-palette-neutral-0` e `--cps-palette-neutral-1000` não são nomeadas como branco e preto, respectivamente, já que em modo escuro elas estão invertidas, preto em `0` e branco em `1000`.

### Cinzas neutros

Oferecem uma variedade de contrastes neutros para utilização em textos, fundos, e outros elementos de interface. Baseia-se em [material translúcido](https://cpsrepositorio.github.io/cps-design-system/guia-visual/camadas-e-materiais.html#transl%C3%BAcido) para melhor adaptação quando sobreposto a outros fundos, cores, e imagens.

| Variável                     | Exemplo                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| `--cps-palette-neutral-0`    | <div class="color-sample" style="background: var(--cps-palette-neutral-0)"></div>    |
| `--cps-palette-neutral-50`   | <div class="color-sample" style="background: var(--cps-palette-neutral-50)"></div>   |
| `--cps-palette-neutral-100`  | <div class="color-sample" style="background: var(--cps-palette-neutral-100)"></div>  |
| `--cps-palette-neutral-200`  | <div class="color-sample" style="background: var(--cps-palette-neutral-200)"></div>  |
| `--cps-palette-neutral-300`  | <div class="color-sample" style="background: var(--cps-palette-neutral-300)"></div>  |
| `--cps-palette-neutral-400`  | <div class="color-sample" style="background: var(--cps-palette-neutral-400)"></div>  |
| `--cps-palette-neutral-500`  | <div class="color-sample" style="background: var(--cps-palette-neutral-500)"></div>  |
| `--cps-palette-neutral-600`  | <div class="color-sample" style="background: var(--cps-palette-neutral-600)"></div>  |
| `--cps-palette-neutral-700`  | <div class="color-sample" style="background: var(--cps-palette-neutral-700)"></div>  |
| `--cps-palette-neutral-800`  | <div class="color-sample" style="background: var(--cps-palette-neutral-800)"></div>  |
| `--cps-palette-neutral-900`  | <div class="color-sample" style="background: var(--cps-palette-neutral-900)"></div>  |
| `--cps-palette-neutral-950`  | <div class="color-sample" style="background: var(--cps-palette-neutral-950)"></div>  |
| `--cps-palette-neutral-1000` | <div class="color-sample" style="background: var(--cps-palette-neutral-1000)"></div> |

### Cores de marca

Paleta construída a partir da derivação da cor de marca do CPS, acrescentando-se tons claros e escuros.

| Variável                  | Exemplo                                                                           |
| ------------------------- | --------------------------------------------------------------------------------- |
| `--cps-palette-brand-50`  | <div class="color-sample" style="background: var(--cps-palette-brand-50)"></div>  |
| `--cps-palette-brand-100` | <div class="color-sample" style="background: var(--cps-palette-brand-100)"></div> |
| `--cps-palette-brand-200` | <div class="color-sample" style="background: var(--cps-palette-brand-200)"></div> |
| `--cps-palette-brand-300` | <div class="color-sample" style="background: var(--cps-palette-brand-300)"></div> |
| `--cps-palette-brand-400` | <div class="color-sample" style="background: var(--cps-palette-brand-400)"></div> |
| `--cps-palette-brand-500` | <div class="color-sample" style="background: var(--cps-palette-brand-500)"></div> |
| `--cps-palette-brand-600` | <div class="color-sample" style="background: var(--cps-palette-brand-600)"></div> |
| `--cps-palette-brand-700` | <div class="color-sample" style="background: var(--cps-palette-brand-700)"></div> |
| `--cps-palette-brand-800` | <div class="color-sample" style="background: var(--cps-palette-brand-800)"></div> |
| `--cps-palette-brand-900` | <div class="color-sample" style="background: var(--cps-palette-brand-900)"></div> |
| `--cps-palette-brand-950` | <div class="color-sample" style="background: var(--cps-palette-brand-950)"></div> |

!> Tons avermelhados em interfaces estão inerentemente associados, por parte da maioria dos usuários, a estado **crítico** e/ou de **erro**. Aqui mesmo nesta dica, o simples uso de tal tonalidade na iconografia ao lado pode ter feito você considerar este bloco como uma informação crítica, embora seja apenas uma dica!<br><br>Sendo assim, estas cores são usadas raramente no CPS Elements, empregadas em poucos elementos decorativos além do próprio logo CPS. Recomendamos a mesma cautela ao aplicar estas variáveis em seus estilos personalizados.

### Cores de ênfase

Paleta construída a partir da derivação da cor de ênfase do CPS, acrescentando-se tons claros e escuros. Por padrão, a cor de ênfase segue a tonalidade turquesa, por se tratar da cor inversa à cor de marca do CPS.

| Variável                   | Exemplo                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `--cps-palette-accent-50`  | <div class="color-sample" style="background: var(--cps-palette-accent-50)"></div>  |
| `--cps-palette-accent-100` | <div class="color-sample" style="background: var(--cps-palette-accent-100)"></div> |
| `--cps-palette-accent-200` | <div class="color-sample" style="background: var(--cps-palette-accent-200)"></div> |
| `--cps-palette-accent-300` | <div class="color-sample" style="background: var(--cps-palette-accent-300)"></div> |
| `--cps-palette-accent-400` | <div class="color-sample" style="background: var(--cps-palette-accent-400)"></div> |
| `--cps-palette-accent-500` | <div class="color-sample" style="background: var(--cps-palette-accent-500)"></div> |
| `--cps-palette-accent-600` | <div class="color-sample" style="background: var(--cps-palette-accent-600)"></div> |
| `--cps-palette-accent-700` | <div class="color-sample" style="background: var(--cps-palette-accent-700)"></div> |
| `--cps-palette-accent-800` | <div class="color-sample" style="background: var(--cps-palette-accent-800)"></div> |
| `--cps-palette-accent-900` | <div class="color-sample" style="background: var(--cps-palette-accent-900)"></div> |
| `--cps-palette-accent-950` | <div class="color-sample" style="background: var(--cps-palette-accent-950)"></div> |

## Cores de estado

Pequeno grupo de cores que denotam diferentes estados de informação, tipicamente utilizadas em notificações e distintivos.

### Estilo prominente

Variação mais intensa das cores de estado, utilizada para chamar a atenção do usuário para informações importantes. Recomenda-se o uso em pontos pequenos da interface, como nos ícones de notificação.

| Variável                        | Exemplo                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| `--cps-color-state-neutral`     | <div class="color-sample" style="background: var(--cps-color-state-neutral)"></div>     |
| `--cps-color-state-informative` | <div class="color-sample" style="background: var(--cps-color-state-informative)"></div> |
| `--cps-color-state-warning`     | <div class="color-sample" style="background: var(--cps-color-state-warning)"></div>     |
| `--cps-color-state-critical`    | <div class="color-sample" style="background: var(--cps-color-state-critical)"></div>    |
| `--cps-color-state-success`     | <div class="color-sample" style="background: var(--cps-color-state-success)"></div>     |

### Estilo sutil

Variação mais suave das cores de estado, utilizada para contextualizar o estado sem chamar tanta atenção. Normalmente utilizadas em grandes áreas da interface, como no fundo do corpo de notificações.

| Variável                               | Exemplo                                                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `--cps-color-state-neutral-subtle`     | <div class="color-sample" style="background: var(--cps-color-state-neutral-subtle)"></div>     |
| `--cps-color-state-informative-subtle` | <div class="color-sample" style="background: var(--cps-color-state-informative-subtle)"></div> |
| `--cps-color-state-warning-subtle`     | <div class="color-sample" style="background: var(--cps-color-state-warning-subtle)"></div>     |
| `--cps-color-state-critical-subtle`    | <div class="color-sample" style="background: var(--cps-color-state-critical-subtle)"></div>    |
| `--cps-color-state-success-subtle`     | <div class="color-sample" style="background: var(--cps-color-state-success-subtle)"></div>     |

### Fundo acrílico

Idem ao anterior, porém com textura de ruído e leve transparência, aderente ao [material acrílico](https://cpsrepositorio.github.io/cps-design-system/guia-visual/camadas-e-materiais.html#acrilico).

<div class="chessboard-pattern">

| Variável                                | Exemplo                                                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `--cps-color-state-neutral-acrylic`     | <div class="color-sample blur" style="background: var(--cps-color-state-neutral-acrylic)"></div>     |
| `--cps-color-state-informative-acrylic` | <div class="color-sample blur" style="background: var(--cps-color-state-informative-acrylic)"></div> |
| `--cps-color-state-warning-acrylic`     | <div class="color-sample blur" style="background: var(--cps-color-state-warning-acrylic)"></div>     |
| `--cps-color-state-critical-acrylic`    | <div class="color-sample blur" style="background: var(--cps-color-state-critical-acrylic)"></div>    |
| `--cps-color-state-success-acrylic`     | <div class="color-sample blur" style="background: var(--cps-color-state-success-acrylic)"></div>     |

</div>

?> Variáveis de estilo de cor acrílicas são compostas por uma tonalidade com leve transparência, junto a uma sútil textura de ruído. Entretanto, para aderência plena ao _material acrílico_, também é necessário aplicar embaçamento de fundo. Para este efeito, utiliza-se em conjunto a propriedade CSS `backdrop-filter` com os valores `--cps-blur-small`, `--cps-blur-medium`, ou `--cps-blur-large` (dependendo da intensidade de embaçamento desejada).

## Cores de uso específico

São composições minuciosamente ajustadas para a estética ideal de cada componente CPS Elements. Mas, embora usadas internamente pelos componentes, estas cores também podem ser utilizadas em estilos personalizados quando desejado.

### Cores de plano de fundo

Aderentes às [camadas](https://cpsrepositorio.github.io/cps-design-system/guia-visual/camadas-e-materiais.html) do CPS Design System, as estruturas principais das interfaces costumam se utilizar de composições com estas quatro cores sólidas (algumas das poucas cores desta biblioteca que não possuem algum nível de transparência).

| Variável                                  | Exemplo                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `--cps-color-background-solid-primary`    | <div class="color-sample" style="background: var(--cps-color-background-solid-primary)"></div>    |
| `--cps-color-background-solid-secondary`  | <div class="color-sample" style="background: var(--cps-color-background-solid-secondary)"></div>  |
| `--cps-color-background-solid-tertiary`   | <div class="color-sample" style="background: var(--cps-color-background-solid-tertiary)"></div>   |
| `--cps-color-background-solid-quaternary` | <div class="color-sample" style="background: var(--cps-color-background-solid-quaternary)"></div> |

Complementarmente, para composições com planos de fundo com imagens, ou para elementos flutuando sobre outros, há também alguns _backgrounds_ com transparência.

<div class="chessboard-pattern">

| Variável                              | Exemplo                                                                                            |
| ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `--cps-color-background-acrylic`      | <div class="color-sample blur" style="background: var(--cps-color-background-acrylic)"></div>      |
| `--cps-color-background-acrylic-base` | <div class="color-sample blur" style="background: var(--cps-color-background-acrylic-base)"></div> |
| `--cps-color-background-overlay`      | <div class="color-sample" style="background: var(--cps-color-background-overlay)"></div>           |

</div>

### Cores de preenchimento

São usadas para preencher o fundo de elementos em geral, como botões, campos, etc.

<div class="chessboard-pattern">

| Variável                            | Exemplo                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------- |
| `--cps-color-fill-primary`          | <div class="color-sample" style="background: var(--cps-color-fill-primary)"></div>          |
| `--cps-color-fill-secondary`        | <div class="color-sample" style="background: var(--cps-color-fill-secondary)"></div>        |
| `--cps-color-fill-tertiary`         | <div class="color-sample" style="background: var(--cps-color-fill-tertiary)"></div>         |
| `--cps-color-fill-quaternary`       | <div class="color-sample" style="background: var(--cps-color-fill-quaternary)"></div>       |
| `--cps-color-fill-alt-secondary`    | <div class="color-sample" style="background: var(--cps-color-fill-alt-secondary)"></div>    |
| `--cps-color-fill-alt-tertiary`     | <div class="color-sample" style="background: var(--cps-color-fill-alt-tertiary)"></div>     |
| `--cps-color-fill-alt-quaternary`   | <div class="color-sample" style="background: var(--cps-color-fill-alt-quaternary)"></div>   |
| `--cps-color-fill-subtle-secondary` | <div class="color-sample" style="background: var(--cps-color-fill-subtle-secondary)"></div> |
| `--cps-color-fill-subtle-tertiary`  | <div class="color-sample" style="background: var(--cps-color-fill-subtle-tertiary)"></div>  |
| `--cps-color-fill-accent-primary`   | <div class="color-sample" style="background: var(--cps-color-fill-accent-primary)"></div>   |
| `--cps-color-fill-accent-secondary` | <div class="color-sample" style="background: var(--cps-color-fill-accent-secondary)"></div> |
| `--cps-color-fill-accent-tertiary`  | <div class="color-sample" style="background: var(--cps-color-fill-accent-tertiary)"></div>  |
| `--cps-color-fill-accent-disabled`  | <div class="color-sample" style="background: var(--cps-color-fill-accent-disabled)"></div>  |

</div>

### Cores de texto

São usadas na coloração de texto, tanto longos parágrafos, quanto texto interno de componentes.

<div class="chessboard-pattern">

| Variável                              | Exemplo                                                                                       |
| ------------------------------------- | --------------------------------------------------------------------------------------------- |
| `--cps-color-text-primary`            | <div class="color-sample" style="background: var(--cps-color-text-primary)"></div>            |
| `--cps-color-text-secondary`          | <div class="color-sample" style="background: var(--cps-color-text-secondary)"></div>          |
| `--cps-color-text-tertiary`           | <div class="color-sample" style="background: var(--cps-color-text-tertiary)"></div>           |
| `--cps-color-text-disabled`           | <div class="color-sample" style="background: var(--cps-color-text-disabled)"></div>           |
| `--cps-color-text-inverted-primary`   | <div class="color-sample" style="background: var(--cps-color-text-inverted-primary)"></div>   |
| `--cps-color-text-inverted-secondary` | <div class="color-sample" style="background: var(--cps-color-text-inverted-secondary)"></div> |
| `--cps-color-text-inverted-disabled`  | <div class="color-sample" style="background: var(--cps-color-text-inverted-disabled)"></div>  |
| `--cps-color-text-brand-primary`      | <div class="color-sample" style="background: var(--cps-color-text-brand-primary)"></div>      |
| `--cps-color-text-brand-secondary`    | <div class="color-sample" style="background: var(--cps-color-text-brand-secondary)"></div>    |
| `--cps-color-text-brand-tertiary`     | <div class="color-sample" style="background: var(--cps-color-text-brand-tertiary)"></div>     |
| `--cps-color-text-accent-primary`     | <div class="color-sample" style="background: var(--cps-color-text-accent-primary)"></div>     |
| `--cps-color-text-accent-secondary`   | <div class="color-sample" style="background: var(--cps-color-text-accent-secondary)"></div>   |
| `--cps-color-text-accent-tertiary`    | <div class="color-sample" style="background: var(--cps-color-text-accent-tertiary)"></div>    |

</div>

### Cores de código-fonte

São usadas internamente nesta documentação, para colorir blocos de código-fonte. Normalmente não se utiliza tais variáveis em estilos personalizados.

| Variável                          | Exemplo                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| `--cps-color-text-code-keyword`   | <div class="color-sample" style="background: var(--cps-color-text-code-keyword)"></div>   |
| `--cps-color-text-code-symbol`    | <div class="color-sample" style="background: var(--cps-color-text-code-symbol)"></div>    |
| `--cps-color-text-code-builtin`   | <div class="color-sample" style="background: var(--cps-color-text-code-builtin)"></div>   |
| `--cps-color-text-code-variable`  | <div class="color-sample" style="background: var(--cps-color-text-code-variable)"></div>  |
| `--cps-color-text-code-function`  | <div class="color-sample" style="background: var(--cps-color-text-code-function)"></div>  |
| `--cps-color-text-code-important` | <div class="color-sample" style="background: var(--cps-color-text-code-important)"></div> |

### Cores de contorno

São usadas na coloração de bordas em geral, bem como separadores e outros casos típicos de contorno.

<div class="chessboard-pattern">

| Variável                                | Exemplo                                                                                         |
| --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `--cps-color-stroke-primary`            | <div class="color-sample" style="background: var(--cps-color-stroke-primary)"></div>            |
| `--cps-color-stroke-secondary`          | <div class="color-sample" style="background: var(--cps-color-stroke-secondary)"></div>          |
| `--cps-color-stroke-inverted-primary`   | <div class="color-sample" style="background: var(--cps-color-stroke-inverted-primary)"></div>   |
| `--cps-color-stroke-inverted-secondary` | <div class="color-sample" style="background: var(--cps-color-stroke-inverted-secondary)"></div> |
| `--cps-color-stroke-inverted-tertiary`  | <div class="color-sample" style="background: var(--cps-color-stroke-inverted-tertiary)"></div>  |
| `--cps-color-stroke-inverted-disabled`  | <div class="color-sample" style="background: var(--cps-color-stroke-inverted-disabled)"></div>  |
| `--cps-color-stroke-card-primary`       | <div class="color-sample" style="background: var(--cps-color-stroke-card-primary)"></div>       |
| `--cps-color-stroke-card-secondary`     | <div class="color-sample" style="background: var(--cps-color-stroke-card-secondary)"></div>     |
| `--cps-color-stroke-separator`          | <div class="color-sample" style="background: var(--cps-color-stroke-separator)"></div>          |
| `--cps-color-stroke-skeleton`           | <div class="color-sample" style="background: var(--cps-color-stroke-skeleton)"></div>           |
| `--cps-color-stroke-skeleton-accent`    | <div class="color-sample" style="background: var(--cps-color-stroke-skeleton-accent)"></div>    |
| `--cps-color-stroke-surface`            | <div class="color-sample" style="background: var(--cps-color-stroke-surface)"></div>            |

</div>

<style>
.color-sample {
  display: inline-grid;
  margin: -0.5rem 0 -0.625rem;
  border: 1px solid var(--cps-color-stroke-separator);
  border-radius: var(--cps-border-radius-medium);
  background-clip: padding-box;
  width: 5rem;
  height: 2rem;
}

.color-sample.blur {
  backdrop-filter: var(--cps-blur-medium);
}

.table-wrapper th:last-of-type,
.table-wrapper td:last-of-type {
  text-align: right;
}

.chessboard-pattern .table-wrapper tbody {
  background: linear-gradient(90deg, var(--cps-color-background-solid-quaternary) 50%, #fff0), linear-gradient(var(--cps-color-background-overlay), var(--cps-color-background-overlay)), repeating-conic-gradient(var(--cps-palette-neutral-300) 0% 25%, var(--cps-palette-neutral-100) 0% 50%) 0 0/16px 16px;
}
</style>
