# Icon Button

[component-header:cps-icon-button]

Para uma lista completa de ícones que vêm com o CPS Elements, consulte o [componente de ícone](/componentes/icon). Além de informar o `name` do ícone a ser exibido, é altamente recomendado informar também o atributo `label` para que o ícone seja acessível.

```html preview
<cps-icon-button name="search-fill" label="Pesquisar"></cps-icon-button>
```

```jsx react
import { CpsIconButton } from '@cps-elements/web/react/icon-button';

const App = () => <CpsIconButton name="search-fill" label="Pesquisar" />;
```

?> Talvez você tenha observado que um _icon button_ é visualmente e comportamentalmente similar a um [Button](/componentes/button) em sua variante `transparent`, com arredondamento `full` e apenas com um ícone como conteúdo.<br><br>De fato, um botão comum usado assim entregaria o mesmo resultado, mas o botão de ícone é mais fácil de usar, pois expõe diretamente o atributo `name` para informar o ícone desejado. Além disso, este componente possui menos estilos e dependências do que o botão comum, portanto utilizar este é também mais otimizado, desde que as outras caraterísticas do botão comum não sejam necessárias (como suas outras variantes ou outros formatos de arredondamento).

## Exemplos

### Tamanhos

Use o atributo `size` para alterar o tamanho do botão.

```html preview
<cps-icon-button name="settings-fill" label="Configurações" size="small"></cps-icon-button>
<cps-icon-button name="settings-fill" label="Configurações" size="medium"></cps-icon-button>
<cps-icon-button name="settings-fill" label="Configurações" size="large"></cps-icon-button>
```

```jsx react
import { CpsIconButton } from '@cps-elements/web/react/icon-button';

const App = () => (
  <>
    <CpsIconButton name="settings-fill" label="Configurações" size="small" />
    <CpsIconButton name="settings-fill" label="Configurações" size="medium" />
    <CpsIconButton name="settings-fill" label="Configurações" size="large" />
  </>
);
```

O tamanho dos botões de ícone serve como um limitador de `width` e `height`, garantindo medida uniforme horizontalmente e verticalmente. Por padrão, a flexibilidade do ícone interno é garantida através da proporção em relação a estas medidas, mas é possível interferir estilizando com CSS a parte `icon`.

```html preview
<cps-icon-button class="sample-icon-size" name="settings-fill" label="Configurações"></cps-icon-button>

<style>
  .sample-icon-size::part(icon) {
    font-size: 1.375rem;
  }
</style>
```

```jsx react
import { CpsIconButton } from '@cps-elements/web/react/icon-button';

const css = `
  .sample-icon-size::part(icon) {
    font-size: 1.375rem;
  }
`;

const App = () => (
  <>
    <CpsIconButton className="sample-icon-size" name="settings-fill" label="Configurações" />

    <style>{css}</style>
  </>
);
```

### Cores

Botões de ícone são projetados para ter uma aparência uniforme, portanto sua cor não é herdada automaticamente. No entanto, você ainda pode personalizá-los estilizando com CSS a parte `base`.

```html preview
<div class="sample-button-color">
  <cps-icon-button name="text-bold" label="Negrito"></cps-icon-button>
  <cps-icon-button name="text-italic" label="Itálico"></cps-icon-button>
  <cps-icon-button name="text-underline" label="Sublinhado"></cps-icon-button>
</div>

<style>
  .sample-button-color cps-icon-button::part(base) {
    color: #b00091;
  }

  .sample-button-color cps-icon-button::part(base):hover {
    color: #eb0aa6;
  }

  .sample-button-color cps-icon-button::part(base):active {
    color: #ad0b7b;
  }
</style>
```

```jsx react
import { CpsIconButton } from '@cps-elements/web/react/icon-button';

const css = `
  .sample-button-color cps-icon-button::part(base) {
    color: #b00091;
  }

  .sample-button-color cps-icon-button::part(base):hover {
    color: #eb0aa6;
  }

  .sample-button-color cps-icon-button::part(base):active {
    color: #ad0b7b;
  }
`;

const App = () => (
  <>
    <div className="sample-button-color">
      <CpsIconButton name="text-bold" label="Negrito" />
      <CpsIconButton name="text-italic" label="Itálico" />
      <CpsIconButton name="text-underline" label="Sublinhado" />
    </div>

    <style>{css}</style>
  </>
);
```

!> Embora estas técnicas de estilização avançada sejam poderosas e flexíveis, estão disponíveis para casos extremos ou para necessidades de adaptação avançada para projetos externos. Se você estiver utilizando CPS Elements em um projeto aderente CPS Design System, não personalize a aparência dos componentes desta forma.

### Botões como âncoras

Eventualmente você pode querer visualmente um botão de ícone, mas cujo funcionamento se trata de redirecionar o usuário para outro endereço (outra rota de sua aplicação, ou mesmo um _link_ externo). Isto é possível ao utilizar o atributo `href`, o qual garante que o botão será renderizado como um elemento `<a>` com este `href` definido, ao invés de um `<button>`, enquanto manterá todas as características visuais de um botão de ícone.

Isto também permitirá que todos os comportamentos padrão que o navegador provê para _links_ funcionem. Por exemplo, a ação de _click_ combinado com teclas <kbd>⌘</kbd>, <kbd>Ctrl</kbd> ou <kbd>Shift</kbd>, e ainda o suporte aos atributos `target` e `download`.

```html preview
<cps-icon-button
  name="settings-fill"
  label="Configurações"
  href="https://example.com"
  target="_blank"
></cps-icon-button>
```

```jsx react
import { CpsIconButton } from '@cps-elements/web/react/icon-button';

const App = () => (
  <CpsIconButton name="settings-fill" label="Configurações" href="https://example.com" target="_blank" />
);
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o botão. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-icon-button name="settings-fill" label="Configurações" disabled></cps-icon-button>
```

```jsx react
import { CpsIconButton } from '@cps-elements/web/react/icon-button';

const App = () => <CpsIconButton name="settings-fill" label="Configurações" disabled />;
```

[component-metadata:cps-icon-button]
