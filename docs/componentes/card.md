# Card

[component-header:cps-card]

```html preview
<cps-card>
  <cps-label>Conteúdo do cartão, conforme for desejado.</cps-label>
  <br />
  <cps-label
    >Pode estruturar o conteúdo com qualquer elemento <abbr title="HyperText Markup Language">HTML</abbr>.</cps-label
  >
  <br />
  <cps-label
    >E também <cps-link href="/#/fundamentos/utilização">utilizar</cps-link> qualquer componente CPS
    Elements.</cps-label
  >
</cps-card>
```

```jsx react
import { CpsCard } from '@cps-elements/web/react/card';
import { CpsLabel } from '@cps-elements/web/react/label';
import { CpsLink } from '@cps-elements/web/react/link';

const App = () => (
  <CpsCard>
    <CpsLabel>Conteúdo do cartão, conforme for desejado.</CpsLabel>
    <br />
    <CpsLabel>
      Pode estruturar o conteúdo com qualquer elemento <abbr title="HyperText Markup Language">HTML</abbr>.
    </CpsLabel>
    <br />
    <CpsLabel>
      E também <CpsLink href="/#/fundamentos/utilização">utilizar</CpsLink> qualquer componente CPS Elements.
    </CpsLabel>
  </CpsCard>
);
```

## Exemplos

### Variantes

Use o atributo `variant` para definir a variação visual do cartão. Atente-se que a variação `on-blurred` só é recomendada para utilização sobre uma camada de grande variação visual de fundo, como ocorre com camadas de material acrílico acrílica, por isso o nome da variação.

```html preview
<div class="sample-transparent-background">
  <cps-card variant="primary"> Primário </cps-card>

  <cps-card variant="secondary"> Secundário </cps-card>

  <cps-card variant="tertiary"> Terciário </cps-card>

  <cps-card variant="on-blurred"> Sobre acrílico </cps-card>
</div>

<div class="sample-acrylic-background">
  <cps-card variant="primary"> Primário </cps-card>

  <cps-card variant="secondary"> Secundário </cps-card>

  <cps-card variant="tertiary"> Terciário </cps-card>

  <cps-card variant="on-blurred"> Sobre acrílico </cps-card>
</div>
```

```jsx react
import { CpsCard } from '@cps-elements/web/react/card';

const App = () => (
  <>
    <div className="sample-transparent-background">
      <CpsCard variant="primary">Primário</CpsCard>

      <CpsCard variant="secondary">Secundário</CpsCard>

      <CpsCard variant="tertiary">Terciário</CpsCard>

      <CpsCard variant="on-blurred">Sobre acrílico</CpsCard>
    </div>

    <div className="sample-acrylic-background">
      <CpsCard variant="primary">Primário</CpsCard>

      <CpsCard variant="secondary">Secundário</CpsCard>

      <CpsCard variant="tertiary">Terciário</CpsCard>

      <CpsCard variant="on-blurred">Sobre acrílico</CpsCard>
    </div>
  </>
);
```

### Acionável

Use o atributo `actionable` para tornar o cartão acionável, ou seja, que pode ser interagido pelo usuário, por exemplo, com _mouse_ e teclado.

```html preview
<div class="sample-transparent-background">
  <cps-card variant="primary" actionable> Primário </cps-card>

  <cps-card variant="secondary" actionable> Secundário </cps-card>

  <cps-card variant="tertiary" actionable> Terciário </cps-card>

  <cps-card variant="on-blurred" actionable> Sobre acrílico </cps-card>
</div>

<div class="sample-acrylic-background">
  <cps-card variant="primary" actionable> Primário </cps-card>

  <cps-card variant="secondary" actionable> Secundário </cps-card>

  <cps-card variant="tertiary" actionable> Terciário </cps-card>

  <cps-card variant="on-blurred" actionable> Sobre acrílico </cps-card>
</div>
```

```jsx react
import { CpsCard } from '@cps-elements/web/react/card';

const App = () => (
  <>
    <div className="sample-transparent-background">
      <CpsCard variant="primary" actionable>
        Primário
      </CpsCard>

      <CpsCard variant="secondary" actionable>
        Secundário
      </CpsCard>

      <CpsCard variant="tertiary" actionable>
        Terciário
      </CpsCard>

      <CpsCard variant="on-blurred" actionable>
        Sobre acrílico
      </CpsCard>
    </div>

    <div className="sample-acrylic-background">
      <CpsCard variant="primary" actionable>
        Primário
      </CpsCard>

      <CpsCard variant="secondary" actionable>
        Secundário
      </CpsCard>

      <CpsCard variant="tertiary" actionable>
        Terciário
      </CpsCard>

      <CpsCard variant="on-blurred" actionable>
        Sobre acrílico
      </CpsCard>
    </div>
  </>
);
```

### Com cabeçalho e rodapé

Use os _slots_ `header` e `footer` para adicionar cabeçalho e rodapé ao cartão, respectivamente.

```html preview
<cps-card>
  <div slot="header" class="example-header-layout">
    <cps-avatar image="https://i.pravatar.cc/48?img=3" label="John Doe" loading="lazy"></cps-avatar>
    <cps-label size="body-strong">John Doe</cps-label>
    <cps-label size="body" variant="secondary">Engenheiro de Software</cps-label>
  </div>

  <div class="example-content-layout">
    <cps-label variant="secondary">Área de conteúdo, construa conforme desejar.</cps-label>
  </div>

  <div slot="footer" class="example-footer-layout">
    <cps-button>
      <cps-icon name="delete" label="Excluir"></cps-icon>
    </cps-button>

    <cps-button variant="accent">
      <cps-icon slot="prefix" name="edit" label="Editar"></cps-icon>
      Editar
    </cps-button>
  </div>
</cps-card>

<style>
  .example-header-layout {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto 1fr;
    row-gap: 0.25rem;
    column-gap: 1rem;
    align-items: center;
  }

  .example-header-layout cps-avatar {
    grid-row: span 2;
  }

  .example-content-layout {
    border: 1px dashed var(--cps-color-stroke-card-secondary);
    border-radius: var(--cps-border-radius-medium);
    background: var(--cps-color-fill-alt-tertiary);
    padding: 1rem;
  }

  .example-footer-layout {
    display: flex;
    gap: 1rem;
    justify-content: end;
  }
</style>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsCard } from '@cps-elements/web/react/card';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsLabel } from '@cps-elements/web/react/label';

const css = `
  .example-header-layout {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto 1fr;
    row-gap: 0.25rem;
    column-gap: 1rem;
    align-items: center;
  }

  .example-header-layout cps-avatar {
    grid-row: span 2;
  }

  .example-content-layout {
    border: 1px dashed var(--cps-color-stroke-card-secondary);
    border-radius: var(--cps-border-radius-medium);
    background: var(--cps-color-fill-alt-tertiary);
    padding: 1rem;
  }

  .example-footer-layout {
    display: flex;
    gap: 1rem;
    justify-content: end;
  }
`;

const App = () => (
  <>
    <CpsCard>
      <div slot="header" className="example-header-layout">
        <CpsAvatar image="https://i.pravatar.cc/48?img=3" label="John Doe" loading="lazy"></CpsAvatar>
        <CpsLabel size="body-strong">John Doe</CpsLabel>
        <CpsLabel size="body" variant="secondary">
          Engenheiro de Software
        </CpsLabel>
      </div>

      <div className="example-content-layout">
        <CpsLabel variant="secondary">Área de conteúdo, construa conforme desejar.</CpsLabel>
      </div>

      <div slot="footer" className="example-footer-layout">
        <CpsButton>
          <CpsIcon name="delete" label="Excluir"></CpsIcon>
        </CpsButton>

        <CpsButton variant="accent">
          <CpsIcon slot="prefix" name="edit" label="Editar"></CpsIcon>
          Editar
        </CpsButton>
      </div>
    </CpsCard>

    <style>{css}</style>
  </>
);
```

[component-metadata:cps-card]

<style>
.sample-transparent-background {
  display: flex;
  inset: 0;
  gap: 1.5rem;
  align-items: center;
  margin: -1.5rem -3.25rem 0 -1.5rem;
  padding: 1.5rem 3.25rem 1.5rem 1.5rem;
  overflow: hidden;
}

.sample-acrylic-background {
  display: flex;
  position: relative;
  inset: 0;
  gap: 1.5rem;
  align-items: center;
  margin: 0 -3.25rem -1.5rem -1.5rem;
  background: url('./assets/images/background.jpg') center/cover fixed;
  padding: 1.5rem 3.25rem 1.5rem 1.5rem;
  overflow: hidden;
}

.sample-acrylic-background::before {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: var(--cps-color-background-acrylic-subtle);
  content: '';
  backdrop-filter: var(--cps-blur-large);
}

.sample-transparent-background > *,
.sample-acrylic-background > * {
  position: relative;
  flex: 1;
  z-index: 1;
}
</style>
