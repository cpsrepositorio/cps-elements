# Menu

[component-header:cps-menu]

Você pode usar [itens de menu](/componentes/menu-item), [rótulos de menu](/componentes/menu-label) e [Separadores](/componentes/separator) para compor um menu. Acesse as documentações de cada um destes componentes, para explorar as maneiras como menus podem ser estruturados.

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

Embora menus possam ser diretamente apresentados no corpo da página, como o exemplo acima demonstrou, eles são frequentemente usados como parte de um menu de contexto dentro de um [flyout](/utilitários/flyout), como parte de um menu suspenso apresentado automaticamente por componentes como o [select](/componentes/select).

?> O componente de menu é destinados a menus de sistema (menus suspensos, menus de seleção, menus de contexto, etc.). Eles não devem ser confundidos com menus de navegação, como a barra lateral de navegação desta documentação, que servem a um propósito diferente e têm um significado semântico diferente. Se você está construindo área de navegação em sua aplicação, use os elementos `<nav>` e `<a>` em vez disso.

[component-metadata:cps-menu]
