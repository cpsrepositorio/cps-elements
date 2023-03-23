# Spinner

[component-header:cps-spinner]

```html preview
<cps-spinner></cps-spinner>
```

```jsx react
import { CpsSpinner } from '@cps-elements/web/dist/react';

const App = () => <CpsSpinner />;
```

## Exemplos

### Tamanho

Um _spinner_ automaticamente se dimensiona baseado o tamanho da fonte do local onde está aplicado. Considerando que os navegadores comumente adotam `16px` como o tamanho padrão para textos (e que o CPS Elements respeita isto em seus temas oficiais), considere então que o tamanho padrão do _spinner_ também é este.

Para alterar, basta aplicar um atributo CSS `font-size` definindo outra medida, diretamente no elemento `<cps-spinner>`, ou mesmo em um elemento pai (já que definições de fonte são automaticamente passadas pela hierarquia CSS).

```html preview
<cps-spinner></cps-spinner>
<cps-spinner style="font-size: 2rem"></cps-spinner>
<span style="display: inline-block; line-height: 1; font-size: 3rem">
  <cps-spinner></cps-spinner>
</span>
```

```jsx react
import { CpsSpinner } from '@cps-elements/web/dist/react';

const App = () => (
  <>
    <CpsSpinner />
    <CpsSpinner style={{ fontSize: '2rem' }} />
    <span style={{ display: 'inline-block', lineHeight: 1, fontSize: '3rem' }}>
      <CpsSpinner />
    </span>
  </>
);
```

### Espessura do caminho

A espessura da linha de caminho ao fundo do _spinner_ pode ser ajustada através da variável CSS `--track-width`. A linha giratória sobre ele automaticamente se ajusta para a mesma medida.

```html preview
<cps-spinner style="font-size: 3rem; --track-width: 1rem"></cps-spinner>
```

```jsx react
import { CpsSpinner } from '@cps-elements/web/dist/react';

const App = () => (
  <CpsSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '1rem'
    }}
  />
);
```

### Cores

Por padrão, um _spinner_ vem adequadamente ajustando nos temas claro e escuro, de acordo com o CPS Design System. Entretanto, é possível ajustar completamente suas cores através da variáveis CSS `--indicator-color` e `--track-color`.

```html preview
<cps-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink"></cps-spinner>
```

```jsx react
import { CpsSpinner } from '@cps-elements/web/dist/react';

const App = () => (
  <CpsSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

!> Embora estas técnicas de estilização avançada sejam poderosas e flexíveis, estão disponíveis para casos extremos ou para necessidades de adaptação avançada para projetos externos. Se você estiver utilizando CPS Elements em um projeto aderente CPS Design System, não personalize a aparência dos componentes desta forma.

[component-metadata:cps-spinner]
