# Tooltip

[component-header:cps-tooltip]

Uma dica de ferramenta é um elemento que fornece informações contextuais sobre um elemento alvo, quando o usuário o interage de alguma maneira predefinida sobre ele (normalmente, em ações de movimento de ponteiro do _mouse_ e/ou foco de teclado).

O alvo de uma dica de ferramenta é seu _primeiro elemento filho_, portanto, você deve envolver apenas um elemento dentro da dica de ferramenta. Se você precisar que a dica de ferramenta apareça para vários elementos, embrulhe-os dentro de um contêiner principal (como um `<span>` ou `<div>`).

Dicas de ferramentas usam `display: contents` para que não interfiram na forma como os elementos são posicionados em um _layout_ `flex` ou `grid`.

```html preview
<cps-tooltip content="Aqui está sua explicação de uso.">
  <cps-button>Passe o ponteiro aqui</cps-button>
</cps-tooltip>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const App = () => (
  <CpsTooltip content="Aqui está sua explicação de uso.">
    <CpsButton>Passe o ponteiro aqui</CpsButton>
  </CpsTooltip>
);
```

## Exemplos

### Posicionamento

Use o atributo `placement` para informar ao _tooltip_ seu posicionamento preferido. Observe que a posição real poderá variar para garantir que permaneça na janela de visualização. Mais informações sobre posicionamento dinâmico no utilitário [`cps-popover`](/docs/utilitarios/popover), o qual é utilizado internamente pela dica de ferramenta.

```html preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <cps-tooltip content="Superior inicial" placement="top-start">
      <cps-button></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Superior" placement="top">
      <cps-button></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Superior final" placement="top-end">
      <cps-button></cps-button>
    </cps-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <cps-tooltip content="Esquerda inicial" placement="left-start">
      <cps-button></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Direita inicial" placement="right-start">
      <cps-button></cps-button>
    </cps-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <cps-tooltip content="Esquerda" placement="left">
      <cps-button></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Direita" placement="right">
      <cps-button></cps-button>
    </cps-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <cps-tooltip content="Esquerda final" placement="left-end">
      <cps-button></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Direita final" placement="right-end">
      <cps-button></cps-button>
    </cps-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <cps-tooltip content="Inferior inicial" placement="bottom-start">
      <cps-button></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Inferior" placement="bottom">
      <cps-button></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Inferior final" placement="bottom-end">
      <cps-button></cps-button>
    </cps-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    margin: 1rem;
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    display: table;
    clear: both;
    content: '';
  }

  .tooltip-placement-example cps-button {
    float: left;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    width: 2.5rem;
  }

  .tooltip-placement-example-row:nth-child(1) cps-tooltip:first-child cps-button,
  .tooltip-placement-example-row:nth-child(5) cps-tooltip:first-child cps-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) cps-tooltip:nth-child(2) cps-button,
  .tooltip-placement-example-row:nth-child(3) cps-tooltip:nth-child(2) cps-button,
  .tooltip-placement-example-row:nth-child(4) cps-tooltip:nth-child(2) cps-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const css = `
  .tooltip-placement-example {
    margin: 1rem;
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    display: table;
    clear: both;
    content: '';
  }

  .tooltip-placement-example cps-button {
    float: left;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    width: 2.5rem;
  }

  .tooltip-placement-example-row:nth-child(1) cps-tooltip:first-child cps-button,
  .tooltip-placement-example-row:nth-child(5) cps-tooltip:first-child cps-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) cps-tooltip:nth-child(2) cps-button,
  .tooltip-placement-example-row:nth-child(3) cps-tooltip:nth-child(2) cps-button,
  .tooltip-placement-example-row:nth-child(4) cps-tooltip:nth-child(2) cps-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <CpsTooltip content="Superior inicial" placement="top-start">
          <CpsButton />
        </CpsTooltip>

        <CpsTooltip content="Superior" placement="top">
          <CpsButton />
        </CpsTooltip>

        <CpsTooltip content="Superior final" placement="top-end">
          <CpsButton />
        </CpsTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <CpsTooltip content="Esquerda inicial" placement="left-start">
          <CpsButton />
        </CpsTooltip>

        <CpsTooltip content="Direita inicial" placement="right-start">
          <CpsButton />
        </CpsTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <CpsTooltip content="Esquerda" placement="left">
          <CpsButton />
        </CpsTooltip>

        <CpsTooltip content="Direita" placement="right">
          <CpsButton />
        </CpsTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <CpsTooltip content="Esquerda final" placement="left-end">
          <CpsButton />
        </CpsTooltip>

        <CpsTooltip content="Direita final" placement="right-end">
          <CpsButton />
        </CpsTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <CpsTooltip content="Inferior inicial" placement="bottom-start">
          <CpsButton />
        </CpsTooltip>

        <CpsTooltip content="Inferior" placement="bottom">
          <CpsButton />
        </CpsTooltip>

        <CpsTooltip content="Inferior final" placement="bottom-end">
          <CpsButton />
        </CpsTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Acionar ao clicar

Use o atributo `trigger` com o valor `click` para acionar o _tooltip_ ao clicar, ao invés do comportamento padrão, que é ao mover o ponteiro do _mouse_ sobre o elemento alvo, ou ao focá-lo com o teclado.

```html preview
<cps-tooltip content="Clique novamente para ocultar esta dica." trigger="click">
  <cps-button>Clique para alternar</cps-button>
</cps-tooltip>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const App = () => (
  <CpsTooltip content="Clique novamente para ocultar esta dica." trigger="click">
    <CpsButton>Clique para alternar</CpsButton>
  </CpsTooltip>
);
```

### Acionamento manual

Use o atributo `trigger` com o valor `manual` para controlar o _tooltip_ programaticamente. Neste caso, se quiser programar declarativamente ou reativamente, defina o atributo `open` para controlar quando o _tooltip_ é exibido (`true`) ou escondido (`false`). Se preferir programar imperativamente, utilize os métodos `show` e `hide`.

```html preview no-vue
<div class="manual-tooltip">
  <cps-tooltip content="Aqui está sua dica!" trigger="manual">
    <span>Preciso de uma dica...</span>
  </cps-tooltip>

  <cps-checkbox style="margin-left: 1rem">Mostrar dica</cps-checkbox>
</div>

<script>
  const container = document.querySelector('.manual-tooltip');
  const tooltip = container.querySelector('cps-tooltip');
  const active = container.querySelector('cps-checkbox');

  active.addEventListener('cps-change', () => (tooltip.open = active.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div class="manual-tooltip">
      <CpsTooltip open={open} content="Aqui está sua dica!" trigger="manual">
        <span>Preciso de uma dica...</span>
      </CpsTooltip>

      <CpsCheckbox style="margin-left: 1rem" checked={open} onCpsChange={setOpen(!open)}>
        Mostrar dica
      </CpsCheckbox>
    </div>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsCheckbox } from '@cps-elements/web/components/checkbox';
  import { CpsTooltip } from '@cps-elements/web/components/tooltip';

  const isOpen = ref(false);
</script>

<template>
  <div class="manual-tooltip">
    <cps-tooltip :open="isOpen" content="Aqui está sua dica!" trigger="manual">
      <span>Preciso de uma dica...</span>
    </cps-tooltip>

    <cps-checkbox v-model="isOpen" style="margin-left: 1rem">Mostrar dica</cps-checkbox>
  </div>
</template>
```

### Removendo o estilo balão

Por padrão, as dicas de ferramenta têm um estilo de balão. Para removê-lo pontualmente, você pode sobrescrever a variável CSS `--cps-tooltip-arrow-size` definindo o valor `0` nos casos desejados.

```html preview
<cps-tooltip content="Sou uma dica sem seta." style="--cps-tooltip-arrow-size: 0">
  <cps-button>Dica sem seta</cps-button>
</cps-tooltip>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const App = () => (
  <CpsTooltip content="Sou uma dica sem seta." style={{ '--cps-tooltip-arrow-size': '0' }}>
    <CpsButton>Dica sem seta</CpsButton>
  </CpsTooltip>
);
```

Se quiser sobrescrever globalmente, modifique para `0` tal variável CSS em uma folha de estilos na raiz de seu projeto, logo após o carregamento dos temas base (os quais definem o tamanho padrão de `7px`).

```css
:root {
  --cps-tooltip-arrow-size: 0;
}
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com o [componente _callout_](https://cpsrepositorio.github.io/cps-design-system/componentes/callout.html) no qual as dicas de ferramenta se baseiam, nunca remova a seta de seus _tooltips_. Esta opção está disponível para situações que não exigem tal aderência.

### HTML como conteúdo

Use o _slot_ `content` para criar dicas de ferramenta com conteúdo HTML. Ainda assim, dicas de ferramenta normalmente são projetadas apenas para elementos textuais e de apresentação. Evite colocar conteúdo interativo, como botões, _links_ e controles de formulário, em uma dica de ferramenta.

```html preview
<cps-tooltip>
  <div slot="content">
    Eu não sou <strong>apenas</strong> uma dica de ferramenta, eu sou um inconfundível <strike>elemento</strike>
    <em>tooltip</em> com HTML dentro!
  </div>

  <cps-button>Passe o ponteiro aqui</cps-button>
</cps-tooltip>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const App = () => (
  <CpsTooltip>
    <div slot="content">
      Eu não sou <strong>apenas</strong> uma dica de ferramenta, eu sou um inconfundível <strike>elemento</strike>
      <em>tooltip</em> com HTML dentro!
    </div>

    <CpsButton>Passe o ponteiro aqui</CpsButton>
  </CpsTooltip>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, pode necessitar da [variação de _callout_ com botão](https://cpsrepositorio.github.io/cps-design-system/componentes/callout.html#com-botao). Neste caso, recomenda-se `<cps-tooltip>` com [acionamento manual](#acionamento-manual), garantindo-se que ele não seja ocultado automaticamente enquanto o usuário tenta interagir com o botão interno. Ainda que este seja um caso de uso válido, use com cautela pois a interação com o botão pode ser prejudicada.

### Definindo uma largura máxima

Use a variável CSS `--max-width` para definir a largura máxima que a dica de ferramenta pode ocupar, antes que a quebra de linhas ocorra. A largura padrão é `20rem`, o que corresponde a `320px` em telas comuns com tamanho de fonte padrão de `16px`.

```html preview
<cps-tooltip style="--max-width: 100px" content="Aqui se quebra em apenas 100 pixels de largura.">
  <cps-button>Passe o ponteiro aqui</cps-button>
</cps-tooltip>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const App = () => (
  <CpsTooltip style={{ '--max-width': '100px' }} content="Aqui se quebra em apenas 100 pixels de largura.">
    <CpsButton>Passe o ponteiro aqui</CpsButton>
  </CpsTooltip>
);
```

### Içamento para a raiz

Dicas de ferramenta podem ser cortadas se estiverem dentro de um contêiner que tenha `overflow` com valores `hidden`, `scroll` ou `auto`. No exemplo a seguir, a dica de ferramenta do primeiro botão é cortada tão drasticamente que sequer encontra qualquer espaço para aparecer.

O atributo `hoist` força o içamento da dica de ferramenta com uma estratégia de posicionamento fixo, permitindo que ela saia do contêiner padrão (que é onde seu elemento alvo se encontra).

Quando içada, a dica de ferramenta será posicionada em relação ao elemento superior de delimitação de conteúdo, que geralmente é a janela de visualização (fundamentalmente, o elemento `<body>`), a menos que um ancestral da hierarquia do elemento alvo da dica de ferramenta em questão possua estilos `transform`, `perspective` ou `filter`.

```html preview
<div class="tooltip-hoist">
  <span>Este contêiner tem <code>overflow: hidden</code>:</span>

  <cps-tooltip content="Você não vai conseguir me ver...">
    <cps-button>Sem içamento</cps-button>
  </cps-tooltip>

  <cps-tooltip content="Esse aqui você consegue ver!" hoist>
    <cps-button>Com içamento</cps-button>
  </cps-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--cps-panel-border-color);
    padding: var(--cps-spacing-medium);
    overflow: hidden;
  }

  .tooltip-hoist > span {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const css = `
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--cps-panel-border-color);
    padding: var(--cps-spacing-medium);
    overflow: hidden;
  }

  .tooltip-hoist > span {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <span>
        Este contêiner tem <code>overflow: hidden</code>:
      </span>

      <CpsTooltip content="Você não vai conseguir me ver...">
        <CpsButton>Sem içamento</CpsButton>
      </CpsTooltip>

      <CpsTooltip content="Esse aqui você consegue ver!" hoist>
        <CpsButton>Com içamento</CpsButton>
      </CpsTooltip>
    </div>

    <style>{css}</style>
  </>
);
```

!> Içar a dica de ferramenta usa uma estratégia de posicionamento fixo que funciona em muitos cenários, mas não em todos, então teste com cautela se precisar habilitar. Veja mais sobre posicionamento fixo [nesta página da MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed).

[component-metadata:cps-tooltip]
