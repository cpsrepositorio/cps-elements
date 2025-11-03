# Rating

[component-header:cps-rating]

```html preview
<cps-rating></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating />;
```

## Exemplos

### Rótulo e acessibilidade

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ `label` ao invés do atributo.

```html preview
<cps-rating label="Avalie o serviço" value="4"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating label="Avalie o serviço" value={4} />;
```

Embora não tão comum, podem existir casos onde não seja necessário ter um rótulo visual no campo de classificação, ou ainda este rótulo visual pode não ser descritivo o suficiente para fins de acessibilidade.

Neste caso, garanta que o atributo `aria-label` está presente, definindo um rótulo exclusivo para acessibilidade.

```html preview
<cps-rating aria-label="Avalie o serviço" value="4"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating ariaLabel="Avalie o serviço" value={4} />;
```

### Recuperando e atualizando o valor

Use o atributo `value` para definir o valor inicial da avaliação. Também é possível utilizar este atributo para definir o valor programaticamente, bem como para recuperar o valor atual, da mesma forma que usando um [`<cps-input>`](/componentes/input).

```html preview no-vue
<div class="rating-example-value">
  <cps-rating help-text="Valor escolhido: 3" label="Avalie o serviço" value="3"></cps-rating>
  <br />
  <cps-button>Limpar avaliação</cps-button>
  <cps-button variant="accent">Nota máxima</cps-button>
</div>

<script>
  const container = document.querySelector('.rating-example-value');
  const rating = container.querySelector('cps-rating');
  const buttons = container.querySelectorAll('cps-button');

  // Controlando programaticamente a definição do `value`.
  buttons[0].addEventListener('click', () => (rating.value = 0));
  buttons[1].addEventListener('click', () => (rating.value = 5));

  // O evento `cps-change` permite interceptar mudanças de valor em tempo real.
  rating.addEventListener('cps-change', () => {
    rating.helpText = `Valor escolhido: ${rating.value}`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => {
  const [value, setValue] = useState(3);

  return (
    <div>
      <CpsRating
        label="Avalie o serviço"
        value={value}
        helpText={`Valor escolhido: ${value}`}
        onChange={e => setValue(e.target.value)}
      />
      <br />
      <CpsButton onClick={() => setValue(0)}>Limpar avaliação</CpsButton>
      <CpsButton variant="accent" onClick={() => setValue(5)}>
        Nota máxima
      </CpsButton>
    </div>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsRating } from '@cps-elements/web/components/rating';

  const rating = ref(3);
</script>

<template>
  <cps-rating
    :help-text="`Valor escolhido: ${rating}`"
    label="Avalie o serviço"
    :value="rating"
    @cps-change="e => rating.value = e.target.value"
  ></cps-rating>
  <br />
  <cps-button @click="rating = 0">Limpar avaliação</cps-button>
  <cps-button variant="accent" @click="rating = 5">Nota máxima</cps-button>
</template>
```

### Classificação máxima

Use o atributo `max` para definir o valor máximo aceito para classificação, por padrão `5`.

```html preview
<cps-rating label="Qual sua nota, de 1 a 10?" max="10" value="8"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating label="Qual sua nota, de 1 a 10?" max={10} value={8} />;
```

O mínimo aceito é `1`, o que transforma o controle de classificação em um simples _toggle_ com ícone único.

```html preview
<cps-rating aria-label="Selecione se gostou do nosso site" max="1"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating ariaLabel="Selecione se gostou do nosso site" max={1} />;
```

?> O valor máximo aceito é `10`, já que representa o limite visual minimamente adequado para o usuário, neste tipo de interação. Para valores maiores, use um componente com usabilidade mais apropriada, como o [CpsRange](/componentes/range).

### Precisão da classificação

Use o atributo `precision` para permitir avaliações com valores decimais.

```html preview
<cps-rating label="Avaliação com precisão 0.5" precision="0.5" value="2.5"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating label="Avaliação com precisão 0.5" precision={0.5} value={2.5} />;
```

Embora unusual, valores decimais ainda mais reduzidos são possíveis.

```html preview
<cps-rating label="Avaliação com precisão 0.25" precision="0.25" value="2.25"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating label="Avaliação com precisão 0.25" precision={0.25} value={2.25} />;
```

!> Embora suportado, não é recomendado usar precisão abaixo de `0.5`. Acertar o clique no ponto exato do ícone para preencher o valor se torna muito difícil, ocasionando uma usabilidade altamente frustrante para o usuário.

### Símbolo de classificação

Use o atributo `symbol` para mudar o símbolo de unidade de classificação, de "estrela" para "coração".

Se desejado, você também pode aproveitar a [propriedade CSS](?id=propriedades-css) `--symbol-color-active` para ajustar a cor do estado ativo, como no exemplo abaixo.

```html preview
<cps-rating
  label="O quanto você amou?"
  precision="0.5"
  style="--symbol-color-active: var(--cps-color-fill-brand)"
  symbol="heart"
  value="4"
></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => (
  <CpsRating
    label="O quanto você amou?"
    precision={0.5}
    style={{ '--symbol-color-active': 'var(--cps-color-fill-brand)' }}
    symbol="heart"
    value={4}
  />
);
```

?> Outros símbolos não são suportados de forma intencional, pois há estudos em _user experience_ apontando que "estrelas" são a melhor opção, seguido por "corações", enquanto outras opções não são compreendidas como unidades de classificação.

### Tamanhos

Use o atributo `size` para alterar o tamanho dos símbolos de avaliação.

```html preview
<cps-rating aria-label="Classificação com estrelas pequenas" size="small" value="2"></cps-rating>
<br />
<cps-rating aria-label="Classificação com estrelas médias" size="medium" value="3"></cps-rating>
<br />
<cps-rating aria-label="Classificação com estrelas grandes" size="large" value="4"></cps-rating>
<br />
<cps-rating aria-label="Classificação com corações pequenos" size="small" symbol="heart" value="2"></cps-rating>
<br />
<cps-rating aria-label="Classificação com estrelas médias" size="medium" symbol="heart" value="3"></cps-rating>
<br />
<cps-rating aria-label="Classificação com estrelas grandes" size="large" symbol="heart" value="4"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => (
  <>
    <CpsRating ariaLabel="Classificação com estrelas pequenas" size="small" value={2} />
    <br />
    <CpsRating ariaLabel="Classificação com estrelas médias" size="medium" value={3} />
    <br />
    <CpsRating ariaLabel="Classificação com estrelas grandes" size="large" value={4} />
    <br />
    <CpsRating ariaLabel="Classificação com corações pequenos" size="small" symbol="heart" value={2} />
    <br />
    <CpsRating ariaLabel="Classificação com corações médias" size="medium" symbol="heart" value={3} />
    <br />
    <CpsRating ariaLabel="Classificação com corações grandes" size="large" symbol="heart" value={4} />
  </>
);
```

?> Na maioria dos casos, a melhor escolha é manter `size` padrão `medium` (ou simplesmente não informar o atributo). O valor `small` existe para casos raros em que o componente é utilizado dentro de outros componentes, e o valor `large` existe para casos extremos.

### Estado somente leitura

Use o atributo `readonly` para tornar a avaliação somente leitura e não interativa, mas ainda com cores diferenciadas para símbolos de classificação ativos.

```html preview
<cps-rating label="Classificação somente leitura" readonly value="2.5"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating label="Classificação somente leitura" readonly value="2.5" />;
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-rating label="Classificação desabilitada" disabled value="2.5"></cps-rating>
```

```jsx react
import { CpsRating } from '@cps-elements/web/react/rating';

const App = () => <CpsRating label="Classificação desabilitada" disabled value="2.5" />;
```

[component-metadata:cps-rating]
