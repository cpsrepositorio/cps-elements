# Range

[component-header:cps-range]

```html preview
<cps-range></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange />;
```

?> Campos de entrada em geral não possuem valor até serem preenchidos pelo usuário. Campos de intervalo se comportam de forma diferente, apresentando como padrão o centro relativo à média de `min` e `max`. Ou seja, por padrão, o `value` equivale a `50`.<br /><br />Isto é proposital para fins de usabilidade, assim como em um `<input type="range">` nativo, para garantir que o usuário perceba que é um campo de intervalo e que o indicador pode ser movido para qualquer um dos lados.

## Exemplos

### Rótulo e acessibilidade

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ `label` ao invés do atributo.

```html preview
<cps-range label="Nível de felicidade"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Nível de felicidade" />;
```

Embora não tão comum, podem existir casos onde não seja necessário ter um rótulo visual no campo de intervalo, ou ainda este rótulo visual pode não ser descritivo o suficiente para fins de acessibilidade.

Neste caso, garanta que o atributo `aria-label` está presente, definindo um rótulo exclusivo para acessibilidade.

```html preview
<cps-range aria-label="Nível de felicidade"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange ariaLabel="Nível de felicidade" />;
```

### Dica de ferramenta sobre o valor

Por padrão, uma [dica de ferramenta](/componentes/tooltip) é exibida automaticamente quando o valor atual do campo muda. Use o atributo `no-tooltip` se quiser desativar completamente a exibição automática de dica de ferramenta.

```html preview
<cps-range label="Nível de felicidade" no-tooltip></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Nível de felicidade" no-tooltip />;
```

?> Não é recomendado desativar a dica de ferramenta, a menos que extremamente necessário para seu caso específico, visto que sua apresentação automática aumenta significativamente a usabilidade.

### Recuperando e atualizando o valor

Use o atributo `value` para definir o valor inicial do intervalo. Também é possível utilizar este atributo para definir o valor programaticamente, bem como para recuperar o valor atual, da mesma forma que usando um [`<cps-input>`](/componentes/input).

```html preview no-vue
<div class="range-example-value">
  <cps-range help-text="Você está 50% feliz" label="Nível de felicidade"></cps-range>
  <br />
  <cps-button>Nada satisfeito</cps-button>
  <cps-button variant="accent">Satisfação máxima</cps-button>
</div>

<script>
  const container = document.querySelector('.range-example-value');
  const range = container.querySelector('cps-range');
  const buttons = container.querySelectorAll('cps-button');

  // Controlando programaticamente a definição do `value`.
  buttons[0].addEventListener('click', () => (range.value = 0));
  buttons[1].addEventListener('click', () => (range.value = 100));

  // O evento `cps-change` permite interceptar mudanças de valor em tempo real.
  range.addEventListener('cps-change', () => {
    range.helpText = `Você está ${range.value}% feliz`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => {
  const [value, setValue] = useState(50);

  return (
    <div>
      <CpsRange
        label="Nível de felicidade"
        value={value}
        helpText={`Você está ${value}% feliz`}
        onChange={e => setValue(e.target.value)}
      />
      <br />
      <CpsButton onClick={() => setValue(0)}>Nada satisfeito</CpsButton>
      <CpsButton variant="accent" onClick={() => setValue(100)}>
        Satisfação máxima
      </CpsButton>
    </div>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsRange } from '@cps-elements/web/components/range';

  const range = ref(50);
</script>

<template>
  <cps-range
    :help-text="`Você está ${range}% feliz`"
    label="Nível de felicidade"
    :value="range"
    @cps-change="e => range.value = e.target.value"
  ></cps-range>
  <br />
  <cps-button @click="range = 0">Nada satisfeito</cps-button>
  <cps-button variant="accent" @click="range = 100">Satisfação máxima</cps-button>
</template>
```

### Intervalo mínimo

Use o atributo `min` para definir o valor mínimo aceito para intervalo, por padrão `0`. Use sempre um valor menor que `max`.

```html preview
<cps-range label="Nível de felicidade" min="50" help-text="Exigimos ao menos 50 aqui"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Nível de felicidade" min={50} help-text="Exigimos ao menos 50 aqui" />;
```

Valores negativos também são possíveis no atributo `min`.

```html preview
<cps-range label="Nível de felicidade" min="-100" help-text="Aceitamos de -100 a 100 neste caso"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Nível de felicidade" min={-100} help-text="Aceitamos de -100 a 100 neste caso" />;
```

### Intervalo máximo

Use o atributo `max` para definir o valor mínimo aceito para intervalo, por padrão `100`. Use sempre um valor menor que `max`.

```html preview
<cps-range label="Qual sua nota, de 1 a 10?" min="1" max="10"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Qual sua nota, de 1 a 10?" min={1} max={10} />;
```

Valores negativos também são possíveis no atributo `max`, desde que ele se mantenha menor do que o atributo `min`, que também deve ser negativo neste caso.

```html preview
<cps-range help-text="Valores entre -10 e -1" label="Escala invertida" min="-10" max="-1"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange help-text="Valores entre -10 e -1" label="Escala invertida" min={-10} max={-1} />;
```

### Precisão do incremento

Use o atributo `step` para estipular um incremento em decimais.

```html preview
<cps-range
  help-text="Avaliação com precisão 0,5"
  label="Qual sua nota, de 1 a 10?"
  step="0.5"
  min="1"
  max="5"
></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => (
  <CpsRange help-text="Avaliação com precisão 0,5" label="Qual sua nota, de 1 a 10?" precision={0.5} min={1} max={5} />
);
```

Mesmo quando somente inteiros são desejados, o atributo `step` pode ser usado para definir incrementos maiores que `1`.

```html preview
<cps-range label="Qual sua centena preferida?" step="100" min="100" max="900"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Qual sua centena preferida?" precision={100} min={100} max={900} />;
```

### Tamanhos

Use o atributo `size` para alterar o tamanho dos símbolos de avaliação.

```html preview
<cps-range aria-label="Intervalo de tamanho pequeno" size="small"></cps-range>
<br />
<cps-range aria-label="Intervalo de tamanho médio" size="medium"></cps-range>
<br />
<cps-range aria-label="Intervalo de tamanho grande" size="large"></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => (
  <>
    <CpsRange ariaLabel="Intervalo de tamanho pequeno" size="small" />
    <br />
    <CpsRange ariaLabel="Intervalo de tamanho médio" size="medium" />
    <br />
    <CpsRange ariaLabel="Intervalo de tamanho grande" size="large" />
  </>
);
```

?> Na maioria dos casos, a melhor escolha é manter `size` padrão `medium` (ou simplesmente não informar o atributo). O valor `small` existe para casos raros em que o componente é utilizado dentro de outros componentes, e o valor `large` existe para casos extremos.

### Estado somente leitura

Use o atributo `readonly` para tornar a avaliação somente leitura e não interativa, mas ainda com cores diferenciadas para símbolos de intervalo ativos.

```html preview
<cps-range label="Intervalo somente leitura" readonly></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Intervalo somente leitura" readonly />;
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-range label="Intervalo desabilitado" disabled></cps-range>
```

```jsx react
import { CpsRange } from '@cps-elements/web/react/range';

const App = () => <CpsRange label="Intervalo desabilitado" disabled />;
```

[component-metadata:cps-range]
