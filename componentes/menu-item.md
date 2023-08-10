# Menu Item

[component-header:cps-menu-item]

```html preview
<cps-menu style="max-width: 200px;">
  <cps-menu-item>Opção 1</cps-menu-item>
  <cps-menu-item>Opção 2</cps-menu-item>
  <cps-menu-item>Opção 3</cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item type="checkbox" checked>Com checagem</cps-menu-item>
  <cps-menu-item disabled>Desabilitado</cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item>
    Ícone como prefixo
    <cps-icon slot="prefix" name="gift"></cps-icon>
  </cps-menu-item>
  <cps-menu-item>
    Ícone como sufixo
    <cps-icon slot="suffix" name="heart"></cps-icon>
  </cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu style={{ maxWidth: '200px' }}>
    <CpsMenuItem>Opção 1</CpsMenuItem>
    <CpsMenuItem>Opção 2</CpsMenuItem>
    <CpsMenuItem>Opção 3</CpsMenuItem>
    <CpsSeparator />
    <CpsMenuItem type="checkbox" checked>
      Com checagem
    </CpsMenuItem>
    <CpsMenuItem disabled>Desabilitado</CpsMenuItem>
    <CpsSeparator />
    <CpsMenuItem>
      Ícone como prefixo
      <CpsIcon slot="prefix" name="gift" />
    </CpsMenuItem>
    <CpsMenuItem>
      Ícone como sufixo
      <CpsIcon slot="suffix" name="heart" />
    </CpsMenuItem>
  </CpsMenu>
);
```

## Exemplos

### Estado desabilitado

Use o atributo `disabled` para desabilitar o item de menu. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-menu style="max-width: 200px">
  <cps-menu-item>Opção 1</cps-menu-item>
  <cps-menu-item disabled>Opção 2</cps-menu-item>
  <cps-menu-item>Opção 3</cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu style={{ maxWidth: '200px' }}>
    <CpsMenuItem>Opção 1</CpsMenuItem>
    <CpsMenuItem disabled>Opção 2</CpsMenuItem>
    <CpsMenuItem>Opção 3</CpsMenuItem>
  </CpsMenu>
);
```

### Conteúdo como prefixo ou sufixo

Use os _slots_ `prefix` e `suffix` para adicionar conteúdos antes ou depois do conteúdo principal do item de menu. Comumente se utilizam ícones no prefixo, embora qualquer outro tipo de conteúdo também seja aceito. Já o sufixo é comumente utilizado para adicionar _badges_ ou indicadores de teclas de atalho.

```html preview
<cps-menu style="max-width: 200px">
  <cps-menu-item>
    <cps-icon slot="prefix" name="home"></cps-icon>
    Página principal
  </cps-menu-item>

  <cps-menu-item>
    <cps-icon slot="prefix" name="folder-mail"></cps-icon>
    Mensagens
    <cps-badge slot="suffix" variant="informative">12</cps-badge>
  </cps-menu-item>

  <cps-separator></cps-separator>

  <cps-menu-item>
    <cps-icon slot="prefix" name="settings"></cps-icon>
    Configurações
  </cps-menu-item>

  <cps-menu-item>
    <cps-icon slot="prefix" name="question-circle"></cps-icon>
    Ajuda
    <cps-icon slot="suffix" name="arrow-square-up-right"></cps-icon>
  </cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';
import { CpsSeparator } from '@cps-elements/web/react/separator';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu style={{ maxWidth: '200px' }}>
    <CpsMenuItem>
      <CpsIcon slot="prefix" name="home" />
      Página principal
    </CpsMenuItem>

    <CpsMenuItem>
      <CpsIcon slot="prefix" name="folder-mail" />
      Mensagens
      <CpsBadge slot="suffix" variant="informative">
        12
      </CpsBadge>
    </CpsMenuItem>

    <CpsSeparator />

    <CpsMenuItem>
      <CpsIcon slot="prefix" name="settings" />
      Configurações
    </CpsMenuItem>

    <CpsMenuItem>
      <CpsIcon slot="prefix" name="question-circle" />
      Ajuda
      <CpsIcon slot="suffix" name="arrow-square-up-right" />
    </CpsMenuItem>
  </CpsMenu>
);
```

### Seleção múltipla

Use o atributo `type` com o valor `checkbox` para criar um item de menu que pode ser alternado entre marcado e desmarcado. Você pode utilizar o atributo `checked` para definir o estado inicial de marcação

```html preview
<cps-menu style="max-width: 200px">
  <cps-menu-item type="checkbox">Auto-salvamento</cps-menu-item>
  <cps-menu-item type="checkbox" checked>Corretor ortográfico</cps-menu-item>
  <cps-menu-item type="checkbox">Quebras automáticas</cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu style={{ maxWidth: '200px' }}>
    <CpsMenuItem type="checkbox">Auto-salvamento</CpsMenuItem>
    <CpsMenuItem type="checkbox" checked>
      Corretor ortográfico
    </CpsMenuItem>
    <CpsMenuItem type="checkbox">Quebras automáticas</CpsMenuItem>
  </CpsMenu>
);
```

?> Itens de menu do tipo _checkbox_ são quase visualmente indistinguíveis de itens de menu regulares, exceto pelo fato de que o espaço utilizado pelo ícone de checagem já encontra-se reservado mesmo quando não estão checados. Ainda assim, sua capacidade de serem selecionados é primariamente inferida do contexto, assim como você encontraria em um menu de um aplicativo nativo.

### Valor da seleção

A lógica desejada dependendo da seleção de um item de menu pode variar consideravelmente e, portanto, compete ao desenvolvedor implementá-la efetivamente em sua aplicação.

O atributo `value` pode ser utilizado para atribuir um valor oculto, como um identificador único, a cada item de menu. Quando um item é selecionado, o evento `cps-select` será emitido e uma referência ao item estará disponível em `event.detail.item`. Você pode utilizar essa referência para acessar o valor do item selecionado, seu estado de marcação, e o que mais precisar sobre o item e seu menu, para construir sua lógica personalizada.

```html preview no-vue
<cps-menu class="menu-value" style="max-width: 200px">
  <cps-menu-item value="1">Item 1</cps-menu-item>
  <cps-menu-item value="2">Item 2</cps-menu-item>
  <cps-menu-item value="3">Item 3</cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item type="checkbox" value="4">Item 4</cps-menu-item>
  <cps-menu-item type="checkbox" value="5">Item 5</cps-menu-item>
  <cps-menu-item type="checkbox" value="6">Item 6</cps-menu-item>
</cps-menu>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const menu = document.querySelector('.menu-value');

  menu.addEventListener('cps-select', event => {
    const item = event.detail.item;

    if (item.type === 'checkbox') {
      toast(`Seletor ${item.value} ${item.checked ? 'marcado' : 'desmarcado'}.`);
    } else {
      toast(`Opção ${item.value} acionada.`);
    }
  });
</script>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';
import { toast } from '@cps-elements/web/react/notification';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    if (item.type === 'checkbox') {
      toast(`Seletor ${item.value} ${item.checked ? 'marcado' : 'desmarcado'}.`);
    } else {
      toast(`Opção ${item.value} acionada.`);
    }
  }

  return (
    <CpsMenu style={{ maxWidth: '200px' }} onCpsSelect={handleSelect}>
      <CpsMenuItem value="1">Item 1</CpsMenuItem>
      <CpsMenuItem value="2">Item 2</CpsMenuItem>
      <CpsMenuItem value="3">Item 3</CpsMenuItem>
      <CpsSeparator />
      <CpsMenuItem type="checkbox" value="4">
        Item 4
      </CpsMenuItem>
      <CpsMenuItem type="checkbox" value="5">
        Item 5
      </CpsMenuItem>
      <CpsMenuItem type="checkbox" value="6">
        Item 6
      </CpsMenuItem>
    </CpsMenu>
  );
};
```

```html vue
<script setup>
  import { CpsSeparator } from '@cps-elements/web/components/separator';
  import { CpsMenu } from '@cps-elements/web/components/menu';
  import { CpsMenuItem } from '@cps-elements/web/components/menu-item';
  import { toast } from '@cps-elements/web/components/notification';

  const onSelect = event => {
    const item = event.detail.item;

    if (item.type === 'checkbox') {
      toast(`Seletor ${item.value} ${item.checked ? 'marcado' : 'desmarcado'}.`);
    } else {
      toast(`Opção ${item.value} acionada.`);
    }
  };
</script>

<template>
  <cps-menu style="max-width: 200px" @cps-select="onSelect">
    <cps-menu-item value="1">Item 1</cps-menu-item>
    <cps-menu-item value="2">Item 2</cps-menu-item>
    <cps-menu-item value="3">Item 3</cps-menu-item>
    <cps-separator />
    <cps-menu-item type="checkbox" value="4">Item 4</cps-menu-item>
    <cps-menu-item type="checkbox" value="5">Item 5</cps-menu-item>
    <cps-menu-item type="checkbox" value="6">Item 6</cps-menu-item>
  </cps-menu>
</template>
```

[component-metadata:cps-menu-item]
