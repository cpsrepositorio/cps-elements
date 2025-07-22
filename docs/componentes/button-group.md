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

Use o atributo `size` para definir um tamanho unificado para todos os botões que fazem parte do mesmo grupo.

```html preview
<cps-button-group size="small" label="Alinhamento">
  <cps-button>Esquerda</cps-button>
  <cps-button>Centro</cps-button>
  <cps-button>Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group size="medium" label="Alinhamento">
  <cps-button>Esquerda</cps-button>
  <cps-button>Centro</cps-button>
  <cps-button>Direita</cps-button>
</cps-button-group>

<br /><br />

<cps-button-group size="large" label="Alinhamento">
  <cps-button>Esquerda</cps-button>
  <cps-button>Centro</cps-button>
  <cps-button>Direita</cps-button>
</cps-button-group>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';

const App = () => (
  <>
    <CpsButtonGroup size="small" label="Alinhamento">
      <CpsButton>Esquerda</CpsButton>
      <CpsButton>Centro</CpsButton>
      <CpsButton>Direita</CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup size="medium" label="Alinhamento">
      <CpsButton>Esquerda</CpsButton>
      <CpsButton>Centro</CpsButton>
      <CpsButton>Direita</CpsButton>
    </CpsButtonGroup>

    <br />
    <br />

    <CpsButtonGroup size="large" label="Alinhamento">
      <CpsButton>Esquerda</CpsButton>
      <CpsButton>Centro</CpsButton>
      <CpsButton>Direita</CpsButton>
    </CpsButtonGroup>
  </>
);
```

?> Ao usar um grupos de botões, seu `size` é intencionalmente prioritário em relação ao tamanho individual de cada botão. Afinal, botões com tamanhos distintos em um mesmo grupo resultariam em distorções visuais e confusão para o usuário.

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

Crie barras de ferramentas interativas misturando grupos de botões, [botões comuns](/componentes/button), [grupos de opções](/componentes/radio-group) e [botões alternáveis](/componentes/toggle-button).

```html preview
<div class="button-group-toolbar">
  <cps-button-group label="Histórico">
    <cps-tooltip content="Desfazer">
      <cps-button><cps-icon name="arrow-counterclockwise" label="Desfazer"></cps-icon></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Refazer">
      <cps-button><cps-icon name="arrow-clockwise" label="Refazer"></cps-icon></cps-button>
    </cps-tooltip>
  </cps-button-group>

  <cps-button-group label="Formatação">
    <cps-tooltip content="Negrito">
      <cps-toggle-button><cps-icon name="text-bold" label="Negrito"></cps-icon></cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Itálico">
      <cps-toggle-button><cps-icon name="text-italic" label="Itálico"></cps-icon></cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Sublinhado">
      <cps-toggle-button><cps-icon name="text-underline" label="Sublinhado"></cps-icon></cps-toggle-button>
    </cps-tooltip>
  </cps-button-group>

  <cps-radio-group value="left">
    <cps-tooltip content="À esquerda">
      <cps-toggle-button value="left">
        <cps-icon name="text-align-left" label="Alinhamento à esquerda"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Centralizado">
      <cps-toggle-button value="center">
        <cps-icon name="text-align-center" label="Alinhamento centralizado"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="À direita">
      <cps-toggle-button value="right">
        <cps-icon name="text-align-right" label="Alinhamento à direita"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Justificado">
      <cps-toggle-button value="justify">
        <cps-icon name="text-align-justify" label="Justificado"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>
  </cps-radio-group>
</div>

<style>
  .button-group-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--cps-spacing-2);
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const css = `
  .button-group-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--cps-spacing-2);
  }
`;

const App = () => (
  <>
    <div class="button-group-toolbar">
      <CpsButtonGroup label="Histórico">
        <CpsTooltip content="Desfazer">
          <CpsButton>
            <CpsIcon name="arrow-counterclockwise" label="Desfazer" />
          </CpsButton>
        </CpsTooltip>

        <CpsTooltip content="Refazer">
          <CpsButton>
            <CpsIcon name="arrow-clockwise" label="Refazer" />
          </CpsButton>
        </CpsTooltip>
      </CpsButtonGroup>

      <CpsButtonGroup label="Formatação">
        <CpsTooltip content="Negrito">
          <CpsToggleButton>
            <CpsIcon name="text-bold" label="Negrito" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Itálico">
          <CpsToggleButton>
            <CpsIcon name="text-italic" label="Itálico" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Sublinhado">
          <CpsToggleButton>
            <CpsIcon name="text-underline" label="Sublinhado" />
          </CpsToggleButton>
        </CpsTooltip>
      </CpsButtonGroup>

      <CpsRadioGroup value="left">
        <CpsTooltip content="À esquerda">
          <CpsToggleButton value="left">
            <CpsIcon name="text-align-left" label="Alinhamento à esquerda" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Centralizado">
          <CpsToggleButton value="center">
            <CpsIcon name="text-align-center" label="Alinhamento centralizado" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="À direita">
          <CpsToggleButton value="right">
            <CpsIcon name="text-align-right" label="Alinhamento à direita" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Justificado">
          <CpsToggleButton value="justify">
            <CpsIcon name="text-align-justify" label="Justificado" />
          </CpsToggleButton>
        </CpsTooltip>
      </CpsRadioGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:cps-button-group]
