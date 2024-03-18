# Label

[component-header:cps-label]

```html preview
<cps-label>Rótulo de texto típico...</cps-label>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => <CpsLabel>Rótulo de texto típico...</CpsLabel>;
```

?> É viável renderizar rótulos de texto apenas com elementos HTML puros (como um simples `<span>`) e aplicar a estilização desejada, inclusive se aproveitando de [variáveis de estilo de tipografia](/variáveis-de-estilo/tipografia.md) oferecidas pelos [temas](/fundamentos/temas.md) padrão. Considere o componente `<cps-label>` um facilitador, basicamente um _wrapper_ que agiliza a aplicação da estilização adequada, conforme os estilos de tipografia disponíveis, e em aderência ao CPS Design System.

## Exemplos

### Elemento de renderização

Use o atributo `tag` para definir o elemento HTML desejado para renderização do rótulo, sendo um `<span>` o padrão.

```html preview
<cps-label tag="p">
  Estou sendo renderizado como um <code>&lt;p&gt;</code>. Visualmente você pode não perceber qualquer diferença, mas se
  visualizar o código-fonte renderizado deste exemplo em seu navegador, poderá observar como foi renderizado. Lembre-se
  que a escolha da <i>tag</i> para renderização não existe para fins visuais, mas sim para fins semânticos e de
  acessibilidade.
</cps-label>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <CpsLabel tag="p">
      Estou sendo renderizado como um <code>&lt;p&gt;</code>. Visualmente você pode não perceber qualquer diferença, mas
      se visualizar o código-fonte renderizado deste exemplo em seu navegador, poderá observar como foi renderizado.
      Lembre-se que a escolha da <i>tag</i> para renderização não existe para fins visuais, mas sim para fins semânticos
      e de acessibilidade.
    </CpsLabel>
  </>
);
```

### Variantes

Use o atributo `variant` para definir a variação visual do rótulo.

```html preview
<div class="label-variants-example">
  <p>
    <cps-label variant="primary">Primário</cps-label>
    <cps-label variant="secondary">Secundário</cps-label>
    <cps-label variant="tertiary">Terciário</cps-label>
    <cps-label variant="disabled">Desabilitado</cps-label>
  </p>

  <p>
    <cps-label variant="brand-primary">Cor de marca primária</cps-label>
    <cps-label variant="brand-secondary">Cor de marca secundária</cps-label>
    <cps-label variant="brand-tertiary">Cor de marca terciária</cps-label>
  </p>

  <p>
    <cps-label variant="inverted-primary">Invertido primário</cps-label>
    <cps-label variant="inverted-secondary">Invertido secundário</cps-label>
    <cps-label variant="inverted-disabled">Invertido desabilitado</cps-label>
  </p>
</div>

<style>
  .label-variants-example {
    display: flex;
    flex-direction: column;
    margin: -0.5rem;
  }

  .label-variants-example p {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    column-gap: 1rem;
    margin: 0;
    padding: 0.5rem;
  }

  .label-variants-example p:last-child {
    margin-top: 0.5rem;
    border-radius: var(--cps-border-radius-medium);
    background: var(--cps-color-fill-accent-tertiary);
  }
</style>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';

const css = `
  .label-variants-example {
    display: flex;
    flex-direction: column;
    margin: -0.5rem;
  }

  .label-variants-example p {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    column-gap: 1rem;
    margin: 0;
    padding: 0.5rem;
  }

  .label-variants-example p:last-child {
    margin-top: 0.5rem;
    border-radius: var(--cps-border-radius-medium);
    background: var(--cps-color-fill-accent-tertiary);
  }
`;

const App = () => (
  <>
    <div class="label-variants-example">
      <p>
        <CpsLabel variant="primary">Primário</CpsLabel>
        <CpsLabel variant="secondary">Secundário</CpsLabel>
        <CpsLabel variant="tertiary">Terciário</CpsLabel>
        <CpsLabel variant="disabled">Desabilitado</CpsLabel>
      </p>

      <p>
        <CpsLabel variant="brand-primary">Cor de marca primária</CpsLabel>
        <CpsLabel variant="brand-secondary">Cor de marca secundária</CpsLabel>
        <CpsLabel variant="brand-tertiary">Cor de marca terciária</CpsLabel>
      </p>

      <p>
        <CpsLabel variant="inverted-primary">Invertido primário</CpsLabel>
        <CpsLabel variant="inverted-secondary">Invertido secundário</CpsLabel>
        <CpsLabel variant="inverted-disabled">Invertido desabilitado</CpsLabel>
      </p>
    </div>

    <style>{css}</style>
  </>
);
```

### Tamanhos

Use o atributo `size` para definir o tamanho e o estilo do rótulo em conformidade à pilha tipografia.

```html preview
<div class="label-sizes-example">
  <cps-label size="stamp">Timbre</cps-label>
  <cps-label size="caption">Rubrica</cps-label>
  <cps-label size="label">Rótulo</cps-label>
  <cps-label size="body">Corpo</cps-label>
  <cps-label size="body-emphasized">Corpo enfatizado</cps-label>
  <cps-label size="body-strong">Corpo destacado</cps-label>
  <cps-label size="body-large">Corpo grande</cps-label>
  <cps-label size="subtitle">Subtítulo</cps-label>
  <cps-label size="title">Título</cps-label>
  <cps-label size="heading">Cabeçalho</cps-label>
  <cps-label size="display">Exibição</cps-label>
</div>

<style>
  .label-sizes-example {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';

const css = `
  .label-sizes-example {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const App = () => (
  <>
    <div class="label-sizes-example">
      <CpsLabel size="stamp">Timbre</CpsLabel>
      <CpsLabel size="caption">Rubrica</CpsLabel>
      <CpsLabel size="label">Rótulo</CpsLabel>
      <CpsLabel size="body">Corpo</CpsLabel>
      <CpsLabel size="body-emphasized">Corpo enfatizado</CpsLabel>
      <CpsLabel size="body-strong">Corpo destacado</CpsLabel>
      <CpsLabel size="body-large">Corpo grande</CpsLabel>
      <CpsLabel size="subtitle">Subtítulo</CpsLabel>
      <CpsLabel size="title">Título</CpsLabel>
      <CpsLabel size="heading">Cabeçalho</CpsLabel>
      <CpsLabel size="display">Exibição</CpsLabel>
    </div>

    <style>{css}</style>
  </>
);
```

?> Não confunda os nomes de tamanhos como `body-emphasized` e `body-strong` com definições de semântica. Esses nomes são apenas para fins de tamanho e estilo, sendo que a semântica pode ser controlada através da definição da _tag_ a ser utilizada para renderização do rótulo.

[component-metadata:cps-label]
