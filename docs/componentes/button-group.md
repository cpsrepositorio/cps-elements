# Button Group

[component-header:cps-button-group]

```html preview
<cps-button-group label="Alinhamento">
  <cps-button>Esquerda</cps-button>
  <cps-button>Centro</cps-button>
  <cps-button>Direita</cps-button>
</cps-button-group>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';

const App = () => (
  <CpsButtonGroup label="Alinhamento">
    <CpsButton>Esquerda</CpsButton>
    <CpsButton>Centro</CpsButton>
    <CpsButton>Direita</CpsButton>
  </CpsButtonGroup>
);
```

## Exemplos

### Tamanhos de botão

Todos os tamanhos de botão são suportados, mas evite misturar tamanhos dentro do mesmo grupo de botões.

```html preview
<cps-button-group label="Alinhamento">
  <cps-button size="small">Esquerda</cps-button>
  <cps-button size="small">Centro</cps-button>
  <cps-button size="small">Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group label="Alinhamento">
  <cps-button size="medium">Esquerda</cps-button>
  <cps-button size="medium">Centro</cps-button>
  <cps-button size="medium">Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group label="Alinhamento">
  <cps-button size="large">Esquerda</cps-button>
  <cps-button size="large">Centro</cps-button>
  <cps-button size="large">Direita</cps-button>
</cps-button-group>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';

const App = () => (
  <>
    <CpsButtonGroup label="Alinhamento">
      <CpsButton size="small">Esquerda</CpsButton>
      <CpsButton size="small">Centro</CpsButton>
      <CpsButton size="small">Direita</CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup label="Alinhamento">
      <CpsButton size="medium">Esquerda</CpsButton>
      <CpsButton size="medium">Centro</CpsButton>
      <CpsButton size="medium">Direita</CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup label="Alinhamento">
      <CpsButton size="large">Esquerda</CpsButton>
      <CpsButton size="large">Centro</CpsButton>
      <CpsButton size="large">Direita</CpsButton>
    </CpsButtonGroup>
  </>
);
```

### Variações de botão

Botões com aparências variadas são suportados através do atributo `variant` do botão.

```html preview
<cps-button-group label="Alinhamento">
  <cps-button variant="default">Esquerda</cps-button>
  <cps-button variant="default">Centro</cps-button>
  <cps-button variant="default">Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group label="Alinhamento">
  <cps-button variant="transparent">Esquerda</cps-button>
  <cps-button variant="transparent">Centro</cps-button>
  <cps-button variant="transparent">Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group label="Alinhamento">
  <cps-button variant="accent">Esquerda</cps-button>
  <cps-button variant="accent">Centro</cps-button>
  <cps-button variant="accent">Direita</cps-button>
</cps-button-group>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';

const App = () => (
  <>
    <CpsButtonGroup label="Alinhamento">
      <CpsButton variant="default">Esquerda</CpsButton>
      <CpsButton variant="default">Centro</CpsButton>
      <CpsButton variant="default">Direita</CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup label="Alinhamento">
      <CpsButton variant="transparent">Esquerda</CpsButton>
      <CpsButton variant="transparent">Centro</CpsButton>
      <CpsButton variant="transparent">Direita</CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup label="Alinhamento">
      <CpsButton variant="accent">Esquerda</CpsButton>
      <CpsButton variant="accent">Centro</CpsButton>
      <CpsButton variant="accent">Direita</CpsButton>
    </CpsButtonGroup>
  </>
);
```

### Botões com sinalizador de menu

Botões com sinalizador de menu são suportados através do atributo `caret` do botão.

```html preview
<cps-button-group label="Exemplo de grupo">
  <cps-button>Botão</cps-button>
  <cps-button caret>Botão com menu</cps-button>
  <cps-button>Botão</cps-button>
</cps-button-group>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';

const App = () => (
  <CpsButtonGroup label="Exemplo de grupo">
    <CpsButton>Botão</CpsButton>
    <CpsButton caret>Botão com menu</CpsButton>
    <CpsButton>Botão</CpsButton>
  </CpsButtonGroup>
);
```

### Grupos arredondados

Grupos com botões arredondados são suportados, basta usar o atributo `rounded` do botão.

```html preview
<cps-button-group label="Alinhamento">
  <cps-button size="small" rounded="corner">Esquerda</cps-button>
  <cps-button size="small" rounded="corner">Centro</cps-button>
  <cps-button size="small" rounded="corner">Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group label="Alinhamento">
  <cps-button size="medium" rounded="corner">Esquerda</cps-button>
  <cps-button size="medium" rounded="corner">Centro</cps-button>
  <cps-button size="medium" rounded="corner">Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group label="Alinhamento">
  <cps-button size="large" rounded="corner">Esquerda</cps-button>
  <cps-button size="large" rounded="corner">Centro</cps-button>
  <cps-button size="large" rounded="corner">Direita</cps-button>
</cps-button-group>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';

const App = () => (
  <>
    <CpsButtonGroup label="Alinhamento">
      <CpsButton size="small" rounded="corner">
        Esquerda
      </CpsButton>
      <CpsButton size="small" rounded="corner">
        Centro
      </CpsButton>
      <CpsButton size="small" rounded="corner">
        Direita
      </CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup label="Alinhamento">
      <CpsButton size="medium" rounded="corner">
        Esquerda
      </CpsButton>
      <CpsButton size="medium" rounded="corner">
        Centro
      </CpsButton>
      <CpsButton size="medium" rounded="corner">
        Direita
      </CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup label="Alinhamento">
      <CpsButton size="large" rounded="corner">
        Esquerda
      </CpsButton>
      <CpsButton size="large" rounded="corner">
        Centro
      </CpsButton>
      <CpsButton size="large" rounded="corner">
        Direita
      </CpsButton>
    </CpsButtonGroup>
  </>
);
```

### Exemplo de barra de tarefas

Crie barras de ferramentas interativas com grupos de botões.

```html preview
<div class="button-group-toolbar">
  <cps-button-group label="Histórico">
    <cps-button title="Desfazer"><cps-icon name="arrow-counterclockwise" label="Desfazer"></cps-icon></cps-button>
    <cps-button title="Refazer"><cps-icon name="arrow-clockwise" label="Refazer"></cps-icon></cps-button>
  </cps-button-group>

  <cps-button-group label="Formatação">
    <cps-button title="Negrito"><cps-icon name="text-bold" label="Negrito"></cps-icon></cps-button>
    <cps-button title="Itálico"><cps-icon name="text-italic" label="Itálico"></cps-icon></cps-button>
    <cps-button title="Sublinhado"><cps-icon name="text-underline" label="Sublinhado"></cps-icon></cps-button>
  </cps-button-group>

  <cps-button-group label="Alinhamento">
    <cps-button title="À esquerda"><cps-icon name="text-align-left" label="À esquerda"></cps-icon></cps-button>
    <cps-button title="Centralizado"><cps-icon name="text-align-center" label="Centralizado"></cps-icon></cps-button>
    <cps-button title="À direita"><cps-icon name="text-align-right" label="À direita"></cps-icon></cps-button>
  </cps-button-group>
</div>

<style>
  .button-group-toolbar cps-button-group:not(:last-of-type) {
    margin-right: var(--cps-spacing-2);
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';
import { CpsIcon } from '@cps-elements/web/react/icon';

const css = `
  .button-group-toolbar cps-button-group:not(:last-of-type) {
    margin-right: var(--cps-spacing-2);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <CpsButtonGroup label="Histórico">
        <CpsButton title="Desfazer">
          <CpsIcon name="arrow-counterclockwise" label="Desfazer" />
        </CpsButton>
        <CpsButton title="Refazer">
          <CpsIcon name="arrow-clockwise" label="Refazer" />
        </CpsButton>
      </CpsButtonGroup>

      <CpsButtonGroup label="Formatação">
        <CpsButton title="Negrito">
          <CpsIcon name="text-bold" label="Negrito" />
        </CpsButton>
        <CpsButton title="Itálico">
          <CpsIcon name="text-italic" label="Itálico" />
        </CpsButton>
        <CpsButton title="Sublinhado">
          <CpsIcon name="text-underline" label="Sublinhado" />
        </CpsButton>
      </CpsButtonGroup>

      <CpsButtonGroup label="Alinhamento">
        <CpsButton title="À esquerda">
          <CpsIcon name="text-align-left" label="À esquerda" />
        </CpsButton>
        <CpsButton title="Centralizado">
          <CpsIcon name="text-align-center" label="Centralizado" />
        </CpsButton>
        <CpsButton title="À direita">
          <CpsIcon name="text-align-right" label="À direita" />
        </CpsButton>
      </CpsButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:cps-button-group]
