# Separator

[component-header:cps-separator]

```html preview
<cps-separator></cps-separator>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => <CpsSeparator />;
```

## Exemplos

### Separadores em menus

Provavelmente o caso de uso mais comum dos separadores, para ajudar a agrupar visualmente itens de [menus](/componentes/menu).

```html preview
<cps-menu style="max-width: 200px">
  <cps-menu-item value="1">Opção 1</cps-menu-item>
  <cps-menu-item value="2">Opção 2</cps-menu-item>
  <cps-menu-item value="3">Opção 3</cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-item value="4">Opção 4</cps-menu-item>
  <cps-menu-item value="5">Opção 5</cps-menu-item>
  <cps-menu-item value="6">Opção 6</cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu style={{ maxWidth: '200px' }}>
    <CpsMenuItem value="1">Opção 1</CpsMenuItem>
    <CpsMenuItem value="2">Opção 2</CpsMenuItem>
    <CpsMenuItem value="3">Opção 3</CpsMenuItem>
    <cps-separator />
    <CpsMenuItem value="4">Opção 4</CpsMenuItem>
    <CpsMenuItem value="5">Opção 5</CpsMenuItem>
    <CpsMenuItem value="6">Opção 6</CpsMenuItem>
  </CpsMenu>
);
```

### Vertical

Use o atributo `vertical` para desenhar o separador na orientação vertical. O separador ocupará toda a altura do seu _container_. Separadores verticais funcionam especialmente bem dentro de um elemento _flex_.

```html preview
<div style="display: flex; align-items: center; height: 2rem">
  Início
  <cps-separator vertical></cps-separator>
  Meio
  <cps-separator vertical></cps-separator>
  Fim
</div>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    Início
    <CpsSeparator vertical />
    Meio
    <CpsSeparator vertical />
    Fim
  </div>
);
```

### Com texto

Use o _slot_ padrão para adicionar texto ao separador.

```html preview
<cps-separator>Favoritos</cps-separator>

<div style="height: 180px">
  <cps-separator vertical>Favoritos</cps-separator>
</div>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => (
  <>
    <CpsSeparator>Favoritos</CpsSeparator>

    <div style={{ height: '180px' }}>
      <CpsSeparator vertical>Favoritos</CpsSeparator>
    </div>
  </>
);
```

### Com ícone

Use o _slot_ padrão para adicionar `<cps-icon>` ao separador.

```html preview
<cps-separator>
  <cps-icon name="heart"></cps-icon>
</cps-separator>

<div style="height: 180px">
  <cps-separator vertical>
    <cps-icon name="heart"></cps-icon>
  </cps-separator>
</div>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => (
  <>
    <CpsSeparator>Favoritos</CpsSeparator>

    <div style={{ height: '180px' }}>
      <CpsSeparator vertical>Favoritos</CpsSeparator>
    </div>
  </>
);
```

### Espaçamento

Ua a propriedade CSS personalizada `--spacing` para alterar o espaço entre o separador e seus elementos vizinhos.

```html preview
<div style="text-align: center">
  Antes
  <cps-separator style="--spacing: 2rem"></cps-separator>
  Depois
</div>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => (
  <div style={{ 'text-align': 'center' }}>
    Antes
    <CpsSeparator style={{ '--spacing': '2rem' }} />
    Depois
  </div>
);
```

### Espessura

Ua a propriedade CSS personalizada `--thickness` para alterar a espessura do separador.

```html preview
<cps-separator style="--thickness: 4px"></cps-separator>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => <CpsSeparator style={{ '--thickness': '4px' }} />;
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [definições de separador](https://cpsrepositorio.github.io/cps-design-system/componentes/separator.html), não modifique a espessura. Esta opção está disponível para situações que não exigem tal aderência.

### Cor

Ua a propriedade CSS personalizada `--color` para alterar a cor do separador.

```html preview
<cps-separator style="--color: tomato"></cps-separator>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => <CpsSeparator style={{ '--color': 'tomato' }} />;
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [definições de separador](https://cpsrepositorio.github.io/cps-design-system/componentes/separator.html), não modifique a cor. Esta opção está disponível para situações que não exigem tal aderência.

[component-metadata:cps-separator]
