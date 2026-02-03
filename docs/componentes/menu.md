# Menu

[component-header:cps-menu]

O conteúdo de um menu pode incluir qualquer elemento, mas tipicamente é composto por [itens de menu](/componentes/menu-item), [rótulos de menu](/componentes/menu-label) e [separadores](/componentes/separator). Acesse as documentações de cada um destes componentes, para explorar as maneiras como menus podem ser estruturados.

```html preview
<cps-menu style="max-width: 200px">
  <cps-menu-item value="undo">
    <cps-icon slot="prefix" name="arrow-undo"></cps-icon>
    Desfazer
    <span slot="suffix">Ctrl + Z</span>
  </cps-menu-item>
  <cps-menu-item value="redo" disabled>
    <cps-icon slot="prefix" name="arrow-redo"></cps-icon>
    Refazer
    <span slot="suffix">Ctrl + Y</span>
  </cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item value="cut">
    <cps-icon slot="prefix" name="cut"></cps-icon>
    Recortar
    <span slot="suffix">Ctrl + X</span>
  </cps-menu-item>
  <cps-menu-item value="copy">
    <cps-icon slot="prefix" name="copy"></cps-icon>
    Copiar
    <span slot="suffix">Ctrl + C</span>
  </cps-menu-item>
  <cps-menu-item value="paste" disabled>
    <cps-icon slot="prefix" name="clipboard-paste"></cps-icon>
    Colar
    <span slot="suffix">Ctrl + V</span>
  </cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item value="delete">
    <cps-icon slot="prefix" name="delete"></cps-icon>
    Excluir
    <span slot="suffix">Del</span>
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
    <CpsMenuItem value="undo">
      <CpsIcon slot="prefix" name="arrow-undo" />
      Desfazer
      <span slot="suffix">Ctrl + Z</span>
    </CpsMenuItem>
    <CpsMenuItem value="redo" disabled>
      <CpsIcon slot="prefix" name="arrow-redo" />
      Refazer
      <span slot="suffix">Ctrl + Y</span>
    </CpsMenuItem>
    <CpsSeparator />
    <CpsMenuItem value="cut">
      <CpsIcon slot="prefix" name="cut" />
      Recortar
      <span slot="suffix">Ctrl + X</span>
    </CpsMenuItem>
    <CpsMenuItem value="copy">
      <CpsIcon slot="prefix" name="copy" />
      Copiar
      <span slot="suffix">Ctrl + C</span>
    </CpsMenuItem>
    <CpsMenuItem value="paste" disabled>
      <CpsIcon slot="prefix" name="clipboard-paste" />
      Colar
      <span slot="suffix">Ctrl + V</span>
    </CpsMenuItem>
    <CpsSeparator />
    <CpsMenuItem value="delete">
      <CpsIcon slot="prefix" name="delete" />
      Excluir
      <span slot="suffix">Del</span>
    </CpsMenuItem>
  </CpsMenu>
);
```

Embora menus possam ser diretamente apresentados no corpo da página, como o exemplo acima demonstrou (modo _inline_), eles são frequentemente usados como menus flutuantes que aparecem ao interagir com algum elemento (modo flutuante). O modo flutuante é ativado automaticamente ao fornecer um elemento no _slot_ `anchor`, como demonstrado nos exemplos desta página. Internamente, o posicionamento é gerenciado pelo utilitário [flyout](/utilitários/flyout).

?> O componente de menu é destinado a menus de sistema (menus suspensos, menus de seleção, menus de contexto, etc.). Eles não devem ser confundidos com menus de navegação, como a barra lateral de navegação desta documentação, que servem a um propósito diferente e têm um significado semântico diferente. Se você está construindo área de navegação em sua aplicação, use os elementos `<nav>` e `<a>` em vez disso.

## Exemplos

### Menu flutuante

Quando um elemento é fornecido no _slot_ `anchor`, o menu é ativado no modo flutuante. Neste modo, o menu aparece posicionado em relação ao elemento âncora, ao invés de ser renderizado _inline_ no fluxo do documento.

O modo flutuante é ideal para menus contextuais que precisam aparecer ao interagir com algum elemento, como um avatar de usuário, um botão de ações, ou qualquer outro elemento interativo.

```html preview
<cps-menu>
  <cps-avatar slot="anchor" label="João Silva" no-tooltip></cps-avatar>

  <cps-menu-item value="profile">
    <cps-icon slot="prefix" name="person"></cps-icon>
    Ver perfil
  </cps-menu-item>
  <cps-menu-item value="settings">
    <cps-icon slot="prefix" name="settings"></cps-icon>
    Configurações
  </cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item value="logout">
    <cps-icon slot="prefix" name="arrow-exit"></cps-icon>
    Sair
  </cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => (
  <CpsMenu>
    <CpsAvatar slot="anchor" label="João Silva" noTooltip />

    <CpsMenuItem value="profile">
      <CpsIcon slot="prefix" name="person" />
      Ver perfil
    </CpsMenuItem>
    <CpsMenuItem value="settings">
      <CpsIcon slot="prefix" name="settings" />
      Configurações
    </CpsMenuItem>
    <CpsSeparator />
    <CpsMenuItem value="logout">
      <CpsIcon slot="prefix" name="arrow-exit" />
      Sair
    </CpsMenuItem>
  </CpsMenu>
);
```

### Conteúdo personalizado

O menu aceita qualquer conteúdo em seu _slot_ padrão, não apenas itens de menu. Isso permite criar menus com cabeçalhos personalizados, informações do usuário, ou qualquer outro conteúdo relevante.

```html preview
<cps-menu>
  <cps-avatar slot="anchor" label="João Silva" no-tooltip></cps-avatar>

  <div class="menu-header">
    <cps-label size="body-strong">João Silva</cps-label>
    <cps-label size="caption" variant="secondary">joao@email.com</cps-label>
  </div>

  <cps-menu-item value="profile">
    <cps-icon slot="prefix" name="person"></cps-icon>
    Ver Perfil
  </cps-menu-item>
  <cps-menu-item value="settings">
    <cps-icon slot="prefix" name="settings"></cps-icon>
    Configurações
  </cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item value="logout">
    <cps-icon slot="prefix" name="arrow-exit"></cps-icon>
    Sair
  </cps-menu-item>
</cps-menu>

<style>
  .menu-header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--cps-color-stroke-separator);
    padding: var(--cps-spacing-2) var(--cps-spacing-3);
  }
</style>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsLabel } from '@cps-elements/web/react/label';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';
import { CpsSeparator } from '@cps-elements/web/react/separator';

const css = `
  .menu-header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--cps-color-stroke-separator);
    padding: var(--cps-spacing-2) var(--cps-spacing-3);
  }
`;

const App = () => (
  <>
    <CpsMenu>
      <CpsAvatar slot="anchor" label="João Silva" noTooltip />

      <div className="menu-header">
        <CpsLabel size="body-strong">João Silva</CpsLabel>
        <CpsLabel size="caption" variant="secondary">
          joao@email.com
        </CpsLabel>
      </div>

      <CpsMenuItem value="profile">
        <CpsIcon slot="prefix" name="person" />
        Ver Perfil
      </CpsMenuItem>
      <CpsMenuItem value="settings">
        <CpsIcon slot="prefix" name="settings" />
        Configurações
      </CpsMenuItem>
      <CpsSeparator />
      <CpsMenuItem value="logout">
        <CpsIcon slot="prefix" name="arrow-exit" />
        Sair
      </CpsMenuItem>
    </CpsMenu>

    <style>{css}</style>
  </>
);
```

### Menu de contexto local

Use o atributo `trigger` com o valor `contextmenu` para criar um menu de contexto que aparece ao clicar com o botão direito.

Neste caso, o _slot_ `anchor` delimita a área de acionamento do menu de contexto. Entretanto, o menu sempre abre na posição do cursor, proporcionando uma experiência natural.

```html preview
<cps-menu trigger="contextmenu">
  <div slot="anchor" class="context-area">Clique com botão direito aqui.</div>

  <cps-menu-item value="new">
    <cps-icon slot="prefix" name="add"></cps-icon>
    Novo
  </cps-menu-item>
  <cps-menu-item value="refresh">
    <cps-icon slot="prefix" name="arrow-clockwise"></cps-icon>
    Atualizar
  </cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item value="properties">
    <cps-icon slot="prefix" name="info"></cps-icon>
    Propriedades
  </cps-menu-item>
</cps-menu>

<style>
  .context-area {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed var(--cps-color-stroke-primary);
    border-radius: var(--cps-border-radius-medium);
    background: var(--cps-color-background-solid-tertiary);
    width: 100%;
    height: 150px;
    color: var(--cps-color-text-secondary);
  }
</style>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';
import { CpsSeparator } from '@cps-elements/web/react/separator';

const css = `
  .context-area {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed var(--cps-color-stroke-primary);
    border-radius: var(--cps-border-radius-medium);
    background: var(--cps-color-background-solid-tertiary);
    width: 100%;
    height: 150px;
    color: var(--cps-color-text-secondary);
  }
`;

const App = () => (
  <>
    <CpsMenu trigger="contextmenu">
      <div slot="anchor" className="context-area">
        Clique com botão direito aqui.
      </div>

      <CpsMenuItem value="new">
        <CpsIcon slot="prefix" name="add" />
        Novo
      </CpsMenuItem>
      <CpsMenuItem value="refresh">
        <CpsIcon slot="prefix" name="arrow-clockwise" />
        Atualizar
      </CpsMenuItem>
      <CpsSeparator />
      <CpsMenuItem value="properties">
        <CpsIcon slot="prefix" name="info" />
        Propriedades
      </CpsMenuItem>
    </CpsMenu>

    <style>{css}</style>
  </>
);
```

### Menu de contexto global

Quando o atributo `trigger` inclui `contextmenu` mas não há elemento no _slot_ `anchor`, o menu de contexto é acionado em qualquer lugar da página. Isso é útil para criar menus de contexto globais que substituem o menu padrão do navegador.

```html preview no-vue
<div class="global-context-menu">
  <cps-menu trigger="contextmenu">
    <cps-menu-item value="back">
      <cps-icon slot="prefix" name="arrow-left"></cps-icon>
      Voltar
      <span slot="suffix">Alt + ←</span>
    </cps-menu-item>
    <cps-menu-item value="forward">
      <cps-icon slot="prefix" name="arrow-right"></cps-icon>
      Avançar
      <span slot="suffix">Alt + →</span>
    </cps-menu-item>
    <cps-separator></cps-separator>
    <cps-menu-item value="reload">
      <cps-icon slot="prefix" name="arrow-clockwise"></cps-icon>
      Recarregar
      <span slot="suffix">Ctrl + R</span>
    </cps-menu-item>
  </cps-menu>

  <p style="color: var(--cps-color-text-secondary)">
    Clique com botão direito em qualquer lugar desta página para ver o menu de contexto global.
  </p>
</div>

<script>
  const container = document.querySelector('.global-context-menu');
  const menu = container.querySelector('cps-menu');
  const backItem = menu.querySelector('[value="back"]');
  const forwardItem = menu.querySelector('[value="forward"]');

  menu.addEventListener('cps-show', () => {
    backItem.disabled = !(window.navigation?.canGoBack ?? history.length > 1);
    forwardItem.disabled = !window.navigation?.canGoForward;
  });

  menu.addEventListener('cps-select', event => {
    const value = event.detail.item.value;
    if (value === 'back') history.back();
    else if (value === 'forward') history.forward();
    else if (value === 'reload') location.reload();
  });
</script>
```

```jsx react
import { useRef, useCallback } from 'react';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => {
  const backRef = useRef(null);
  const forwardRef = useRef(null);

  const handleShow = useCallback(() => {
    if (backRef.current) backRef.current.disabled = !(window.navigation?.canGoBack ?? history.length > 1);
    if (forwardRef.current) forwardRef.current.disabled = !window.navigation?.canGoForward;
  }, []);

  const handleSelect = event => {
    const value = event.detail.item.value;
    if (value === 'back') history.back();
    else if (value === 'forward') history.forward();
    else if (value === 'reload') location.reload();
  };

  return (
    <>
      <CpsMenu trigger="contextmenu" onCpsShow={handleShow} onCpsSelect={handleSelect}>
        <CpsMenuItem ref={backRef} value="back">
          <CpsIcon slot="prefix" name="arrow-left" />
          Voltar
          <span slot="suffix">Alt + ←</span>
        </CpsMenuItem>
        <CpsMenuItem ref={forwardRef} value="forward">
          <CpsIcon slot="prefix" name="arrow-right" />
          Avançar
          <span slot="suffix">Alt + →</span>
        </CpsMenuItem>
        <CpsSeparator />
        <CpsMenuItem value="reload">
          <CpsIcon slot="prefix" name="arrow-clockwise" />
          Recarregar
          <span slot="suffix">Ctrl + R</span>
        </CpsMenuItem>
      </CpsMenu>

      <p style={{ color: 'var(--cps-color-text-secondary)' }}>
        Clique com botão direito em qualquer lugar desta página para ver o menu de contexto global.
      </p>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsIcon } from '@cps-elements/web/components/icon';
  import { CpsMenu } from '@cps-elements/web/components/menu';
  import { CpsMenuItem } from '@cps-elements/web/components/menu-item';
  import { CpsSeparator } from '@cps-elements/web/components/separator';

  const backRef = ref(null);
  const forwardRef = ref(null);

  const handleShow = () => {
    if (backRef.value) backRef.value.disabled = !(window.navigation?.canGoBack ?? history.length > 1);
    if (forwardRef.value) forwardRef.value.disabled = !window.navigation?.canGoForward;
  };

  const handleSelect = event => {
    const value = event.detail.item.value;
    if (value === 'back') history.back();
    else if (value === 'forward') history.forward();
    else if (value === 'reload') location.reload();
  };
</script>

<template>
  <cps-menu trigger="contextmenu" @cps-show="handleShow" @cps-select="handleSelect">
    <cps-menu-item ref="backRef" value="back">
      <cps-icon slot="prefix" name="arrow-left" />
      Voltar
      <span slot="suffix">Alt + ←</span>
    </cps-menu-item>
    <cps-menu-item ref="forwardRef" value="forward">
      <cps-icon slot="prefix" name="arrow-right" />
      Avançar
      <span slot="suffix">Alt + →</span>
    </cps-menu-item>
    <cps-separator />
    <cps-menu-item value="reload">
      <cps-icon slot="prefix" name="arrow-clockwise" />
      Recarregar
      <span slot="suffix">Ctrl + R</span>
    </cps-menu-item>
  </cps-menu>

  <p style="color: var(--cps-color-text-secondary)">
    Clique com botão direito em qualquer lugar desta página para ver o menu de contexto global.
  </p>
</template>
```

!> Use menus de contexto globais com cautela, pois eles substituem o comportamento padrão do navegador em toda a página. Prefira limitar o escopo com um elemento âncora, como exibido na seção anterior.

### Múltiplos acionamentos

Além do acionamento padrão por clique e foco, você pode combinar diferentes valores no atributo `trigger`. Neste exemplo, o menu responde tanto ao foco (acessibilidade via teclado) quanto ao _hover_ (interação com mouse), demonstrando como múltiplos _triggers_ funcionam em conjunto.

```html preview
<cps-menu trigger="click focus hover">
  <cps-button slot="anchor">Foque ou passe sobre mim</cps-button>

  <cps-menu-item value="action1">Ação 1</cps-menu-item>
  <cps-menu-item value="action2">Ação 2</cps-menu-item>
  <cps-menu-item value="action3">Ação 3</cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu trigger="click focus hover">
    <CpsButton slot="anchor">Foque ou passe sobre mim</CpsButton>

    <CpsMenuItem value="action1">Ação 1</CpsMenuItem>
    <CpsMenuItem value="action2">Ação 2</CpsMenuItem>
    <CpsMenuItem value="action3">Ação 3</CpsMenuItem>
  </CpsMenu>
);
```

### Posicionamento

Use o atributo `placement` para definir o posicionamento preferido do menu flutuante em relação à âncora. Observe que o posicionamento real poderá variar para garantir que o menu permaneça na janela de visualização.

```html preview
<div class="menu-placement-example">
  <div class="menu-cell menu-top-start">
    <cps-menu trigger="click focus hover" placement="top-start">
      <cps-button slot="anchor"
        ><cps-icon name="arrow-step-in-left-fill" style="border-bottom: 1px solid currentColor"></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-top">
    <cps-menu trigger="click focus hover" placement="top">
      <cps-button slot="anchor"
        ><cps-icon
          name="arrow-step-in-fill"
          style="transform: rotate(180deg); border-top: 1px solid currentColor"
        ></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-top-end">
    <cps-menu trigger="click focus hover" placement="top-end">
      <cps-button slot="anchor"
        ><cps-icon name="arrow-step-in-right-fill" style="border-bottom: 1px solid currentColor"></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-left-start">
    <cps-menu trigger="click focus hover" placement="left-start">
      <cps-button slot="anchor"
        ><cps-icon
          name="arrow-step-in-left-fill"
          style="transform: rotate(90deg); border-top: 1px solid currentColor"
        ></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-left">
    <cps-menu trigger="click focus hover" placement="left">
      <cps-button slot="anchor"
        ><cps-icon name="arrow-step-in-left-fill" style="border-right: 1px solid currentColor"></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-left-end">
    <cps-menu trigger="click focus hover" placement="left-end">
      <cps-button slot="anchor"
        ><cps-icon
          name="arrow-step-in-left-fill"
          style="transform: rotate(270deg); border-bottom: 1px solid currentColor"
        ></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-right-start">
    <cps-menu trigger="click focus hover" placement="right-start">
      <cps-button slot="anchor"
        ><cps-icon
          name="arrow-step-in-left-fill"
          style="transform: rotate(90deg); border-bottom: 1px solid currentColor"
        ></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-right">
    <cps-menu trigger="click focus hover" placement="right">
      <cps-button slot="anchor"
        ><cps-icon name="arrow-step-in-right-fill" style="border-left: 1px solid currentColor"></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-right-end">
    <cps-menu trigger="click focus hover" placement="right-end">
      <cps-button slot="anchor"
        ><cps-icon
          name="arrow-step-in-left-fill"
          style="transform: rotate(270deg); border-top: 1px solid currentColor"
        ></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-bottom-start">
    <cps-menu trigger="click focus hover" placement="bottom-start">
      <cps-button slot="anchor"
        ><cps-icon name="arrow-step-in-left-fill" style="border-top: 1px solid currentColor"></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-bottom">
    <cps-menu trigger="click focus hover" placement="bottom">
      <cps-button slot="anchor"
        ><cps-icon name="arrow-step-in-fill" style="border-top: 1px solid currentColor"></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>

  <div class="menu-cell menu-bottom-end">
    <cps-menu trigger="click focus hover" placement="bottom-end">
      <cps-button slot="anchor"
        ><cps-icon name="arrow-step-in-right-fill" style="border-top: 1px solid currentColor"></cps-icon
      ></cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
    </cps-menu>
  </div>
</div>

<style>
  .menu-placement-example {
    display: grid;
    grid-template-rows: 32px 100px 100px 100px 32px;
    grid-template-columns: 32px 100px 100px 100px 32px;
    gap: 4px;
  }

  .menu-placement-example .menu-top-start {
    grid-row: 1;
    grid-column: 2;
  }
  .menu-placement-example .menu-top {
    grid-row: 1;
    grid-column: 3;
  }
  .menu-placement-example .menu-top-end {
    grid-row: 1;
    grid-column: 4;
  }

  .menu-placement-example .menu-right-start {
    grid-row: 2;
    grid-column: 5;
  }
  .menu-placement-example .menu-right {
    grid-row: 3;
    grid-column: 5;
  }
  .menu-placement-example .menu-right-end {
    grid-row: 4;
    grid-column: 5;
  }

  .menu-placement-example .menu-bottom-start {
    grid-row: 5;
    grid-column: 2;
  }
  .menu-placement-example .menu-bottom {
    grid-row: 5;
    grid-column: 3;
  }
  .menu-placement-example .menu-bottom-end {
    grid-row: 5;
    grid-column: 4;
  }

  .menu-placement-example .menu-left-start {
    grid-row: 2;
    grid-column: 1;
  }
  .menu-placement-example .menu-left {
    grid-row: 3;
    grid-column: 1;
  }
  .menu-placement-example .menu-left-end {
    grid-row: 4;
    grid-column: 1;
  }

  .menu-placement-example cps-button {
    width: 100%;
    height: 100%;
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const css = `
  .menu-placement-example {
    display: grid;
    grid-template-rows: 32px 100px 100px 100px 32px;
    grid-template-columns: 32px 100px 100px 100px 32px;
    gap: 4px;
  }

  .menu-placement-example .menu-top-start { grid-row: 1; grid-column: 2; }
  .menu-placement-example .menu-top { grid-row: 1; grid-column: 3; }
  .menu-placement-example .menu-top-end { grid-row: 1; grid-column: 4; }

  .menu-placement-example .menu-right-start { grid-row: 2; grid-column: 5; }
  .menu-placement-example .menu-right { grid-row: 3; grid-column: 5; }
  .menu-placement-example .menu-right-end { grid-row: 4; grid-column: 5; }

  .menu-placement-example .menu-bottom-start { grid-row: 5; grid-column: 2; }
  .menu-placement-example .menu-bottom { grid-row: 5; grid-column: 3; }
  .menu-placement-example .menu-bottom-end { grid-row: 5; grid-column: 4; }

  .menu-placement-example .menu-left-start { grid-row: 2; grid-column: 1; }
  .menu-placement-example .menu-left { grid-row: 3; grid-column: 1; }
  .menu-placement-example .menu-left-end { grid-row: 4; grid-column: 1; }

  .menu-placement-example cps-button {
    width: 100%;
    height: 100%;
  }
`;

const App = () => (
  <>
    <div className="menu-placement-example">
      <div className="menu-top-start">
        <CpsMenu trigger="click focus hover" placement="top-start">
          <CpsButton slot="anchor">
            <CpsIcon name="arrow-step-in-left-fill" style={{ borderBottom: '1px solid currentColor' }} />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-top">
        <CpsMenu trigger="click focus hover" placement="top">
          <CpsButton slot="anchor">
            <CpsIcon
              name="arrow-step-in-fill"
              style={{ transform: 'rotate(180deg)', borderTop: '1px solid currentColor' }}
            />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-top-end">
        <CpsMenu trigger="click focus hover" placement="top-end">
          <CpsButton slot="anchor">
            <CpsIcon name="arrow-step-in-right-fill" style={{ borderBottom: '1px solid currentColor' }} />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-left-start">
        <CpsMenu trigger="click focus hover" placement="left-start">
          <CpsButton slot="anchor">
            <CpsIcon
              name="arrow-step-in-left-fill"
              style={{ transform: 'rotate(90deg)', borderTop: '1px solid currentColor' }}
            />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-left">
        <CpsMenu trigger="click focus hover" placement="left">
          <CpsButton slot="anchor">
            <CpsIcon name="arrow-step-in-left-fill" style={{ borderRight: '1px solid currentColor' }} />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-left-end">
        <CpsMenu trigger="click focus hover" placement="left-end">
          <CpsButton slot="anchor">
            <CpsIcon
              name="arrow-step-in-left-fill"
              style={{ transform: 'rotate(270deg)', borderBottom: '1px solid currentColor' }}
            />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-right-start">
        <CpsMenu trigger="click focus hover" placement="right-start">
          <CpsButton slot="anchor">
            <CpsIcon
              name="arrow-step-in-left-fill"
              style={{ transform: 'rotate(90deg)', borderBottom: '1px solid currentColor' }}
            />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-right">
        <CpsMenu trigger="click focus hover" placement="right">
          <CpsButton slot="anchor">
            <CpsIcon name="arrow-step-in-right-fill" style={{ borderLeft: '1px solid currentColor' }} />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-right-end">
        <CpsMenu trigger="click focus hover" placement="right-end">
          <CpsButton slot="anchor">
            <CpsIcon
              name="arrow-step-in-left-fill"
              style={{ transform: 'rotate(270deg)', borderTop: '1px solid currentColor' }}
            />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-bottom-start">
        <CpsMenu trigger="click focus hover" placement="bottom-start">
          <CpsButton slot="anchor">
            <CpsIcon name="arrow-step-in-left-fill" style={{ borderTop: '1px solid currentColor' }} />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-bottom">
        <CpsMenu trigger="click focus hover" placement="bottom">
          <CpsButton slot="anchor">
            <CpsIcon name="arrow-step-in-fill" style={{ borderTop: '1px solid currentColor' }} />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>

      <div className="menu-bottom-end">
        <CpsMenu trigger="click focus hover" placement="bottom-end">
          <CpsButton slot="anchor">
            <CpsIcon name="arrow-step-in-right-fill" style={{ borderTop: '1px solid currentColor' }} />
          </CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
        </CpsMenu>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Sincronização com âncora

Use o atributo `sync` com valor `min-width` para garantir que o menu tenha pelo menos a mesma largura do elemento âncora. Isso é útil para menus suspensos onde os itens são curtos, mas o menu deve acompanhar a largura do botão que o aciona.

```html preview
<cps-menu sync="min-width">
  <cps-button slot="anchor">Selecionar uma ação</cps-button>
  <cps-menu-item value="new">Novo</cps-menu-item>
  <cps-menu-item value="open">Abrir</cps-menu-item>
  <cps-menu-item value="save">Salvar</cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu sync="min-width">
    <CpsButton slot="anchor">Selecionar uma ação</CpsButton>
    <CpsMenuItem value="new">Novo</CpsMenuItem>
    <CpsMenuItem value="open">Abrir</CpsMenuItem>
    <CpsMenuItem value="save">Salvar</CpsMenuItem>
  </CpsMenu>
);
```

### Içamento para a raiz

Menus flutuantes podem ser cortados se estiverem dentro de um contêiner que tenha `overflow` com valores `hidden`, `scroll` ou `auto`. O atributo `hoist` força o içamento do menu com uma estratégia de posicionamento fixo, permitindo que ele saia do contêiner padrão.

```html preview
<div class="menu-hoist-container">
  <p>Este contêiner tem <code>overflow: hidden</code> e altura limitada:</p>

  <div class="menu-hoist">
    <cps-menu sync="min-width">
      <cps-button slot="anchor">Sem içamento</cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
      <cps-menu-item>Item 3</cps-menu-item>
      <cps-menu-item>Item 4</cps-menu-item>
      <cps-menu-item>Item 5</cps-menu-item>
    </cps-menu>

    <cps-menu sync="min-width" hoist>
      <cps-button slot="anchor">Com içamento</cps-button>
      <cps-menu-item>Item 1</cps-menu-item>
      <cps-menu-item>Item 2</cps-menu-item>
      <cps-menu-item>Item 3</cps-menu-item>
      <cps-menu-item>Item 4</cps-menu-item>
      <cps-menu-item>Item 5</cps-menu-item>
    </cps-menu>
  </div>
</div>

<style>
  .menu-hoist-container {
    color: var(--cps-color-text-secondary);
  }

  .menu-hoist-container p {
    margin-bottom: var(--cps-spacing-2);
  }

  .menu-hoist {
    display: flex;
    position: relative;
    gap: 1rem;
    align-items: flex-start;
    border: dashed 2px var(--cps-color-stroke-primary);
    border-radius: var(--cps-border-radius-medium);
    padding: var(--cps-spacing-2);
    height: 130px;
    overflow: hidden;
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const css = `
  .menu-hoist-container {
    color: var(--cps-color-text-secondary);
  }

  .menu-hoist-container p {
    margin-bottom: var(--cps-spacing-2);
  }

  .menu-hoist {
    display: flex;
    position: relative;
    gap: 1rem;
    align-items: flex-start;
    border: dashed 2px var(--cps-color-stroke-primary);
    border-radius: var(--cps-border-radius-medium);
    padding: var(--cps-spacing-2);
    height: 130px;
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="menu-hoist-container">
      <p>
        Este contêiner tem <code>overflow: hidden</code> e altura limitada:
      </p>

      <div className="menu-hoist">
        <CpsMenu sync="min-width">
          <CpsButton slot="anchor">Sem içamento</CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
          <CpsMenuItem>Item 3</CpsMenuItem>
          <CpsMenuItem>Item 4</CpsMenuItem>
          <CpsMenuItem>Item 5</CpsMenuItem>
        </CpsMenu>

        <CpsMenu sync="min-width" hoist>
          <CpsButton slot="anchor">Com içamento</CpsButton>
          <CpsMenuItem>Item 1</CpsMenuItem>
          <CpsMenuItem>Item 2</CpsMenuItem>
          <CpsMenuItem>Item 3</CpsMenuItem>
          <CpsMenuItem>Item 4</CpsMenuItem>
          <CpsMenuItem>Item 5</CpsMenuItem>
        </CpsMenu>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

!> Içar o menu usa uma estratégia de posicionamento fixo que funciona em muitos cenários, mas não em todos, então teste com cautela se precisar habilitar.

### Acionamento manual

Use o atributo `trigger` com o valor `manual` para controlar o menu programaticamente. Neste caso, defina o atributo `open` para controlar quando o menu é exibido (`true`) ou escondido (`false`). Se preferir programar imperativamente, utilize os métodos `show` e `hide`.

```html preview no-vue
<div class="manual-menu">
  <cps-menu sync="min-width" trigger="manual">
    <cps-button slot="anchor">Clicar em mim não adianta</cps-button>
    <cps-menu-item value="option1">Opção 1</cps-menu-item>
    <cps-menu-item value="option2">Opção 2</cps-menu-item>
  </cps-menu>

  <cps-checkbox style="margin-left: 1rem">Mostrar menu</cps-checkbox>
</div>

<script>
  const container = document.querySelector('.manual-menu');
  const menu = container.querySelector('cps-menu');
  const checkbox = container.querySelector('cps-checkbox');

  checkbox.addEventListener('cps-change', () => (menu.open = checkbox.checked));
  menu.addEventListener('cps-after-hide', () => (checkbox.checked = false));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="manual-menu">
      <CpsMenu sync="min-width" trigger="manual" open={open} onCpsAfterHide={() => setOpen(false)}>
        <CpsButton slot="anchor">Clicar em mim não adianta</CpsButton>
        <CpsMenuItem value="option1">Opção 1</CpsMenuItem>
        <CpsMenuItem value="option2">Opção 2</CpsMenuItem>
      </CpsMenu>

      <CpsCheckbox style={{ marginLeft: '1rem' }} checked={open} onCpsChange={() => setOpen(!open)}>
        Mostrar menu
      </CpsCheckbox>
    </div>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsCheckbox } from '@cps-elements/web/components/checkbox';
  import { CpsMenu } from '@cps-elements/web/components/menu';
  import { CpsMenuItem } from '@cps-elements/web/components/menu-item';

  const open = ref(false);
</script>

<template>
  <div class="manual-menu">
    <cps-menu sync="min-width" trigger="manual" :open="open" @cps-after-hide="open = false">
      <cps-button slot="anchor">Clicar em mim não adianta</cps-button>
      <cps-menu-item value="option1">Opção 1</cps-menu-item>
      <cps-menu-item value="option2">Opção 2</cps-menu-item>
    </cps-menu>

    <cps-checkbox style="margin-left: 1rem" :checked="open" @cps-change="open = !open"> Mostrar menu </cps-checkbox>
  </div>
</template>
```

### Desabilitando fechamento automático

Use o atributo `no-auto-close` para manter o menu aberto após seleções. Isso é especialmente útil para menus com itens do tipo _checkbox_, onde o usuário pode querer selecionar múltiplas opções antes de fechar o menu manualmente (clicando fora ou pressionando `Esc`).

Experimente marcar e desmarcar as opções abaixo. Note que o menu permanece aberto após cada seleção, permitindo múltiplas escolhas.

```html preview
<cps-menu sync="min-width" no-auto-close>
  <cps-button slot="anchor" caret>Selecione opções</cps-button>

  <cps-menu-item type="checkbox" value="1">Opção 1</cps-menu-item>
  <cps-menu-item type="checkbox" value="2">Opção 2</cps-menu-item>
  <cps-menu-item type="checkbox" value="3">Opção 3</cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu sync="min-width" noAutoClose>
    <CpsButton slot="anchor" caret>
      Selecione opções
    </CpsButton>

    <CpsMenuItem type="checkbox" value="1">
      Opção 1
    </CpsMenuItem>
    <CpsMenuItem type="checkbox" value="2">
      Opção 2
    </CpsMenuItem>
    <CpsMenuItem type="checkbox" value="3">
      Opção 3
    </CpsMenuItem>
  </CpsMenu>
);
```

[component-metadata:cps-menu]
