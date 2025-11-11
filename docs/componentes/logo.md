# Logo

[component-header:cps-logo]

```html preview
<cps-logo style="font-size: 64px" type="elements" />
```

```jsx react
import { CpsLogo } from '@cps-elements/web/react/logo';

const App = () => <CpsLogo style={{ fontSize: '64px' }} type="elements" />;
```

?> Propositalmente opinativo, `<cps-logo>` tem um número limitado de tipos de logotipo disponíveis, especificamente para atender necessidades corriqueiras do Centro Paula "Souza". Se a aparência que você precisa não está disponível neste componente, recomendamos que renderize diretamente o SVG desejado diretamente em sua aplicação.

!> Há diversos [Logotipos de Departamentos](https://www.cps.sp.gov.br/asscom/manuais-assessoria-de-comunicacao/departamentos/) do CPS disponíveis no portal da [ASSCOM](https://www.cps.sp.gov.br/asscom/). Por enquanto, CPS Elements não disponibiliza todos eles através deste componente, mas é previsto que futuramente todos estejam disponíveis por aqui.

## Exemplos

### Tipos

Use o atributo `type` para definir o tipo de logotipo a ser renderizado.

```html preview
<div style="display: flex; flex-wrap: wrap; gap: 3rem">
  <cps-logo type="elements" style="font-size: 64px"></cps-logo>
  <cps-logo type="cps" style="font-size: 90px"></cps-logo>
  <cps-logo type="sp-vertical" style="font-size: 96px"></cps-logo>
  <cps-logo type="sp-horizontal" style="font-size: 64px"></cps-logo>
  <cps-logo type="cps-asscom" style="font-size: 90px"></cps-logo>
  <cps-logo type="cps-cgtic" style="font-size: 90px"></cps-logo>
  <cps-logo type="cps-sucar" style="font-size: 90px"></cps-logo>
</div>
```

```jsx react
import { CpsLogo } from '@cps-elements/web/react/logo';

const App = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
    <CpsLogo type="elements" style={{ fontSize: '64px' }} />
    <CpsLogo type="cps" style={{ fontSize: '90px' }} />
    <CpsLogo type="sp-vertical" style={{ fontSize: '96px' }} />
    <CpsLogo type="sp-horizontal" style={{ fontSize: '64px' }} />
    <CpsLogo type="cps-asscom" style={{ fontSize: '90px' }} />
    <CpsLogo type="cps-cgtic" style={{ fontSize: '90px' }} />
    <CpsLogo type="cps-sucar" style={{ fontSize: '90px' }} />
  </div>
);
```

### Variantes

Use o atributo `variant` para definir a variação visual do logotipo. Um uso comum é alternar para a variação monocromática.

```html preview
<div style="display: flex; flex-wrap: wrap; gap: 3rem">
  <cps-logo type="elements" variant="monochromatic" style="font-size: 64px"></cps-logo>
  <cps-logo type="cps" variant="monochromatic" style="font-size: 90px"></cps-logo>
  <cps-logo type="sp-vertical" variant="monochromatic" style="font-size: 96px"></cps-logo>
  <cps-logo type="sp-horizontal" variant="monochromatic" style="font-size: 64px"></cps-logo>
  <cps-logo type="cps-asscom" variant="monochromatic" style="font-size: 90px"></cps-logo>
  <cps-logo type="cps-cgtic" variant="monochromatic" style="font-size: 90px"></cps-logo>
  <cps-logo type="cps-sucar" variant="monochromatic" style="font-size: 90px"></cps-logo>
</div>
```

```jsx react
import { CpsLogo } from '@cps-elements/web/react/logo';

const App = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
    <CpsLogo type="elements" variant="monochromatic" style={{ fontSize: '64px' }} />
    <CpsLogo type="cps" variant="monochromatic" style={{ fontSize: '90px' }} />
    <CpsLogo type="sp-vertical" variant="monochromatic" style={{ fontSize: '96px' }} />
    <CpsLogo type="sp-horizontal" variant="monochromatic" style={{ fontSize: '64px' }} />
    <CpsLogo type="cps-asscom" variant="monochromatic" style={{ fontSize: '90px' }} />
    <CpsLogo type="cps-cgtic" variant="monochromatic" style={{ fontSize: '90px' }} />
    <CpsLogo type="cps-sucar" variant="monochromatic" style={{ fontSize: '90px' }} />
  </div>
);
```

Monocromático invertido também está disponível, caso aplique o logotipo por cima de um fundo altamente contrastante.

<div class="monochromatic-inverted-example">

```html preview
<div style="display: flex; flex-wrap: wrap; gap: 3rem; background-color: var(--cps-color-fill-accent)">
  <cps-logo type="elements" variant="monochromatic-inverted" style="font-size: 64px"></cps-logo>
  <cps-logo type="cps" variant="monochromatic-inverted" style="font-size: 90px"></cps-logo>
  <cps-logo type="sp-vertical" variant="monochromatic-inverted" style="font-size: 96px"></cps-logo>
  <cps-logo type="sp-horizontal" variant="monochromatic-inverted" style="font-size: 64px"></cps-logo>
  <cps-logo type="cps-asscom" variant="monochromatic-inverted" style="font-size: 90px"></cps-logo>
  <cps-logo type="cps-cgtic" variant="monochromatic-inverted" style="font-size: 90px"></cps-logo>
  <cps-logo type="cps-sucar" variant="monochromatic-inverted" style="font-size: 90px"></cps-logo>
</div>
```

```jsx react
import { CpsLogo } from '@cps-elements/web/react/logo';

const App = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', backgroundColor: 'var(--cps-color-fill-accent)' }}>
    <CpsLogo type="elements" variant="monochromatic-inverted" style={{ fontSize: '64px' }} />
    <CpsLogo type="cps" variant="monochromatic-inverted" style={{ fontSize: '90px' }} />
    <CpsLogo type="sp-vertical" variant="monochromatic-inverted" style={{ fontSize: '96px' }} />
    <CpsLogo type="sp-horizontal" variant="monochromatic-inverted" style={{ fontSize: '64px' }} />
    <CpsLogo type="cps-asscom" variant="monochromatic-inverted" style={{ fontSize: '90px' }} />
    <CpsLogo type="cps-cgtic" variant="monochromatic-inverted" style={{ fontSize: '90px' }} />
    <CpsLogo type="cps-sucar" variant="monochromatic-inverted" style={{ fontSize: '90px' }} />
  </div>
);
```

</div>

### Tamanhos

Para simplificar a estilização, a altura padrão é equivalente a `1em` da fonte aplicada (ou da fonte herdada de seu elemento pai, caso não haja tamanho aplicado). Sendo assim, basta aplicar um estilo `font-size` para alterar o tamanho do logotipo.

?> De fato, todos os exemplos exibidos anteriormente nesta página estão utilizando a técnica de aplicar um `font-size` específico para ajustar o tamanho do logotipo. Observe seus códigos-fonte em caso de dúvidas.

Esta característica também permite que o logotipo se ajuste automaticamente ao tamanho da fonte de um texto, inclusive a textos aplicados com `<cps-label>`, como demonstrado a seguir.

```html preview
<div style="display: flex; flex-direction: column; gap: 3rem">
  <cps-label size="body"> Body: <cps-logo type="elements"></cps-logo> </cps-label>

  <cps-label size="title"> Title: <cps-logo type="elements"></cps-logo> </cps-label>

  <cps-label size="heading"> Heading: <cps-logo type="elements"></cps-logo> </cps-label>

  <cps-label size="display"> Display: <cps-logo type="elements"></cps-logo> </cps-label>
</div>
```

[component-metadata:cps-logo]

<style>
  .monochromatic-inverted-example .code-block__preview {
    background-color: var(--cps-color-fill-accent);
  }
</style>
