# Button

[component-header:cps-button]

```html preview
<cps-button>Botão</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => <CpsButton>Botão</CpsButton>;
```

## Exemplos

### Variantes

Use o atributo `variant` para definir a variação visual do botão.

```html preview
<cps-button variant="default">Padrão</cps-button>
<cps-button variant="transparent">Transparente</cps-button>
<cps-button variant="accent">Acentuado</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton variant="default">Padrão</CpsButton>
    <CpsButton variant="transparent">Transparente</CpsButton>
    <CpsButton variant="accent">Acentuado</CpsButton>
  </>
);
```

### Tamanhos

Use o atributo `size` para alterar o tamanho do botão.

```html preview
<cps-button size="small">Pequeno</cps-button>
<cps-button size="medium">Médio</cps-button>
<cps-button size="large">Grande</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton size="small">Pequeno</CpsButton>
    <CpsButton size="medium">Médio</CpsButton>
    <CpsButton size="large">Grande</CpsButton>
  </>
);
```

?> Na maioria dos casos, a melhor escolha visual é manter o `size` padrão `medium` (ou simplesmente não informar tal atributo). O valor `small` existe para casos raros em que o botão é utilizado dentro de outros componentes, e o valor `large` existe para casos extremos como botões de chamada para a ação (_call-to-action buttons_).

### Ícones como prefixo ou sufixo

Use os _slots_ `prefix` e `suffix` para adicionar ícones.

```html preview
<cps-button size="small">
  <cps-icon slot="prefix" name="settings-fill"></cps-icon>
  Configurações
</cps-button>

<cps-button size="small">
  <cps-icon slot="suffix" name="arrow-counterclockwise"></cps-icon>
  Atualizar
</cps-button>

<cps-button size="small">
  <cps-icon slot="prefix" name="cloud-link-fill"></cps-icon>
  <cps-icon slot="suffix" name="arrow-up-right"></cps-icon>
  Abrir
</cps-button>

<br /><br />

<cps-button>
  <cps-icon slot="prefix" name="settings-fill"></cps-icon>
  Configurações
</cps-button>

<cps-button>
  <cps-icon slot="suffix" name="arrow-counterclockwise"></cps-icon>
  Atualizar
</cps-button>

<cps-button>
  <cps-icon slot="prefix" name="cloud-link-fill"></cps-icon>
  <cps-icon slot="suffix" name="arrow-up-right"></cps-icon>
  Abrir
</cps-button>

<br /><br />

<cps-button size="large">
  <cps-icon slot="prefix" name="settings-fill"></cps-icon>
  Configurações
</cps-button>

<cps-button size="large">
  <cps-icon slot="suffix" name="arrow-counterclockwise"></cps-icon>
  Atualizar
</cps-button>

<cps-button size="large">
  <cps-icon slot="prefix" name="cloud-link-fill"></cps-icon>
  <cps-icon slot="suffix" name="arrow-up-right"></cps-icon>
  Abrir
</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsIcon } from '@cps-elements/web/react/icon';

const App = () => (
  <>
    <CpsButton size="small">
      <CpsIcon slot="prefix" name="settings-fill" />
      Configurações
    </CpsButton>

    <CpsButton size="small">
      <CpsIcon slot="suffix" name="arrow-counterclockwise" />
      Atualizar
    </CpsButton>

    <CpsButton size="small">
      <CpsIcon slot="prefix" name="cloud-link-fill" />
      <CpsIcon slot="suffix" name="arrow-up-right" />
      Abrir
    </CpsButton>

    <br />
    <br />

    <CpsButton>
      <CpsIcon slot="prefix" name="settings-fill" />
      Configurações
    </CpsButton>

    <CpsButton>
      <CpsIcon slot="suffix" name="arrow-counterclockwise" />
      Atualizar
    </CpsButton>

    <CpsButton>
      <CpsIcon slot="prefix" name="cloud-link-fill" />
      <CpsIcon slot="suffix" name="arrow-up-right" />
      Abrir
    </CpsButton>

    <br />
    <br />

    <CpsButton size="large">
      <CpsIcon slot="prefix" name="settings-fill" />
      Configurações
    </CpsButton>

    <CpsButton size="large">
      <CpsIcon slot="suffix" name="arrow-counterclockwise" />
      Atualizar
    </CpsButton>

    <CpsButton size="large">
      <CpsIcon slot="prefix" name="cloud-link-fill" />
      <CpsIcon slot="suffix" name="arrow-up-right" />
      Abrir
    </CpsButton>
  </>
);
```

Na realidade, os _slots_ `prefix` e `suffix` permitem injetar qualquer tipo de elemento ou conteúdo em suas posições, mas abusar dessa capacidade não é recomendado, já que pode estragar o visual e a usabilidade do botão.

### Arredondamento dos cantos

Use o atributo `rounded` como `default` (ou simplesmente não informe tal atributo), para definir o arredondamento dos cantos do botão para seu padrão de `4px`.

```html preview
<cps-button size="small" rounded="default">Pequeno</cps-button>
<cps-button size="medium" rounded="default">Médio</cps-button>
<cps-button size="large" rounded="default">Grande</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton size="small" rounded="default">
      Pequeno
    </CpsButton>
    <CpsButton size="medium" rounded="default">
      Médio
    </CpsButton>
    <CpsButton size="large" rounded="default">
      Grande
    </CpsButton>
  </>
);
```

Use arrendondamento `corner` para manter a aparência retangular, mas arredondar completamente os cantos. Este não é um visual comumente empregado no CPS Design System, sendo resguardado para uso em casos excepcionais.

```html preview
<cps-button size="small" rounded="corner">Pequeno</cps-button>
<cps-button size="medium" rounded="corner">Médio</cps-button>
<cps-button size="large" rounded="corner">Grande</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton size="small" rounded="corner">
      Pequeno
    </CpsButton>
    <CpsButton size="medium" rounded="corner">
      Médio
    </CpsButton>
    <CpsButton size="large" rounded="corner">
      Grande
    </CpsButton>
  </>
);
```

Use arredondamento `full` para garantir um botão completamente circular, o qual, além de arredondado, possui sua medida `width` automaticamente equivalente ao seu `height`.

```html preview
<cps-button size="small" rounded="full" variant="default">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>
<cps-button size="medium" rounded="full" variant="default">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>
<cps-button size="large" rounded="full" variant="default">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>

<br /><br />

<cps-button size="small" rounded="full" variant="transparent">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>
<cps-button size="medium" rounded="full" variant="transparent">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>
<cps-button size="large" rounded="full" variant="transparent">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>

<br /><br />

<cps-button size="small" rounded="full" variant="accent">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>
<cps-button size="medium" rounded="full" variant="accent">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>
<cps-button size="large" rounded="full" variant="accent">
  <cps-icon name="settings-fill" label="Configurações"></cps-icon>
</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton size="small" rounded="full" variant="default">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>
    <CpsButton size="medium" rounded="full" variant="default">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>
    <CpsButton size="large" rounded="full" variant="default">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>

    <br />
    <br />

    <CpsButton size="small" rounded="full" variant="transparent">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>
    <CpsButton size="medium" rounded="full" variant="transparent">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>
    <CpsButton size="large" rounded="full" variant="transparent">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>

    <br />
    <br />

    <CpsButton size="small" rounded="full" variant="accent">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>
    <CpsButton size="medium" rounded="full" variant="accent">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>
    <CpsButton size="large" rounded="full" variant="accent">
      <CpsIcon name="settings-fill" label="Configurações" />
    </CpsButton>
  </>
);
```

?> Se você pretende utilizar botões com arredondamento `full`, contendo somente um ícone como conteúdo, para aderência ao visual dos botões [somente ícone](https://cpsrepositorio.github.io/cps-design-system/componentes/button.html#icone) do CPS Design System, é mais recomendado utilizar o componente [Icon Button](/componentes/icon-button), tanto pela sua facilidade de utilização, quanto por sua otimização para este caso de uso específico.

### Sinalizador de menu

Use o atributo `caret` para forçar um sinalizador de menu ao final do botão, em formato de acento circunflexo para baixo. Significa que, ao ser acionado, o botão exibirá algum tipo de menu de contexto, como um _dropdown_ ou _popover_.

```html preview
<cps-button size="small" caret>Pequeno</cps-button>
<cps-button size="medium" caret>Médio</cps-button>
<cps-button size="large" caret>Grande</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton size="small" caret>
      Pequeno
    </CpsButton>
    <CpsButton size="medium" caret>
      Médio
    </CpsButton>
    <CpsButton size="large" caret>
      Grande
    </CpsButton>
  </>
);
```

### Botões como âncoras

Muitas vezes você pode querer visualmente um botão, mas cujo funcionamento se trata de redirecionar o usuário para outro endereço (outra rota de sua aplicação, ou mesmo um _link_ externo). Isto é possível ao utilizar o atributo `href`, o qual garante que o botão será renderizado como um elemento `<a>` com este `href` definido, ao invés de um `<button>`, enquanto manterá todas as características visuais de um botão.

Isto também permitirá que todos os comportamentos padrão que o navegador provê para _links_ funcionem. Por exemplo, a ação de _click_ combinado com teclas <kbd>⌘</kbd>, <kbd>Ctrl</kbd> ou <kbd>Shift</kbd>, e ainda o suporte aos atributos `target` e `download`.

```html preview
<cps-button href="#/componentes/icon">Redirecionamento interno</cps-button>
<cps-button href="https://example.com/">Página externa</cps-button>
<cps-button href="https://example.com/" target="_blank">Em nova janela</cps-button>
<cps-button href="./assets/images/wordmark.svg" download="cps-elements.svg">Baixar arquivo</cps-button>
<cps-button href="https://example.com/" disabled>Desabilitado</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton href="/components/icon">Redirecionamento interno</CpsButton>
    <CpsButton href="https://example.com/">Página externa</CpsButton>
    <CpsButton href="https://example.com/" target="_blank">
      Em nova janela
    </CpsButton>
    <CpsButton href="./assets/images/wordmark.svg" download="cps-elements.svg">
      Baixar arquivo
    </CpsButton>
    <CpsButton href="https://example.com/" disabled>
      Desabilitado
    </CpsButton>
  </>
);
```

?> Quando um `target` é definido, a âncora receberá `rel="noreferrer noopener"` por [questões de segurança](https://mathiasbynens.github.io/rel-noopener/).

### Botões horizontalmente flexíveis

Assim como elementos HTML nativos, os componentes CPS Elements podem ser estilizados com CSS, desde que não interfira na lógica de exibição do componente. Por exemplo, botões possuem medida vertical fixa de acordo com seu `size`, mas não possuem medida horizontal fixa (exceto quando `rounded` é igual a `full`).

Assim, as medidas horizontais (ou mesmo outras coisas, como margens e reposicionamentos) podem ser facilmente ajustadas. Por exemplo, atributos CSS `width` e `margin` são aceitos normalmente (seja com `style` ou com `class`).

```html preview
<cps-button size="small" style="margin-bottom: 1rem; width: 100%">Pequeno</cps-button>
<cps-button size="medium" style="margin-bottom: 1rem; width: 100%">Médio</cps-button>
<cps-button size="large" style="width: 100%">Grande</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Pequeno
    </CpsButton>
    <CpsButton size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Médio
    </CpsButton>
    <CpsButton size="large" style={{ width: '100%' }}>
      Grande
    </CpsButton>
  </>
);
```

Como também é de se esperar, se você estiver construindo um _layout_ complexo e totalmente personalizado, possivelmente com [CSS Flexible Box](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout) ou [CSS Grid](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout), os botões (e de fato, qualquer outro componente desta biblioteca) se posicionarão conforme esperado, de acordo com as definições de seu _container_.

```html preview
<div class="grid-container">
  <cps-button size="small">Pequeno</cps-button>
  <cps-button size="medium">Médio</cps-button>
  <cps-button size="large" class="col-span-2">Grande</cps-button>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
  }

  .col-span-2 {
    grid-column: span 2 / span 2;
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1rem' }}>
    <CpsButton size="small">Pequeno</CpsButton>
    <CpsButton size="medium">Médio</CpsButton>
    <CpsButton size="large" style={{ gridColumn: 'span 2 / span 2' }}>
      Grande
    </CpsButton>
  </div>
);
```

### Estado de carregamento

Use o atributo `waiting` para demonstrar que o botão está ocupado. Clicar no botão não ocasionará nenhuma ação enquanto este estiver em estado de carregamento.

Ainda que o conteúdo do botão fique oculto para exibição do `<cps-spinner>`, a medida horizontal ocupada por tal conteúdo permanecerá inalterada, prevenindo movimentações indesejadas de elementos próximos. Compare abaixo as medidas dos botões que estão em estado padrão, com os que estão em estado de carregamento.

```html preview
<cps-button variant="default">Padrão</cps-button>
<cps-button variant="transparent">
  Transparente com sufixo
  <cps-icon slot="suffix" name="border-none-fill"></cps-icon>
</cps-button>
<cps-button variant="accent">
  <cps-icon slot="prefix" name="border-none-fill"></cps-icon>
  Acentuado com prefixo
</cps-button>

<br /><br />

<cps-button variant="default" waiting>Padrão</cps-button>
<cps-button variant="transparent" waiting>
  Transparente com sufixo
  <cps-icon slot="suffix" name="border-none-fill"></cps-icon>
</cps-button>
<cps-button variant="accent" waiting>
  <cps-icon slot="prefix" name="border-none-fill"></cps-icon>
  Acentuado com prefixo
</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton variant="default">Padrão</CpsButton>
    <CpsButton variant="transparent">
      Transparente com sufixo
      <CpsIcon slot="suffix" name="border-none-fill" />
    </CpsButton>
    <CpsButton variant="accent">
      <CpsIcon slot="prefix" name="border-none-fill" />
      Acentuado com prefixo
    </CpsButton>

    <br />
    <br />

    <CpsButton variant="default" waiting>
      Padrão
    </CpsButton>
    <CpsButton variant="transparent" waiting>
      Transparente com sufixo
      <CpsIcon slot="suffix" name="border-none-fill" />
    </CpsButton>
    <CpsButton variant="accent" waiting>
      <CpsIcon slot="prefix" name="border-none-fill" />
      Acentuado com prefixo
    </CpsButton>
  </>
);
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o botão. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-button variant="default" disabled>Padrão</cps-button>
<cps-button variant="transparent" disabled>Transparente</cps-button>
<cps-button variant="accent" disabled>Acentuado</cps-button>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton variant="default" disabled>
      Padrão
    </CpsButton>

    <CpsButton variant="transparent" disabled>
      Transparente
    </CpsButton>

    <CpsButton variant="accent" disabled>
      Acentuado
    </CpsButton>
  </>
);
```

### Estilizando botões

Através de uma mistura de técnicas com partes CSS e variáveis CSS com valores personalizados, é possível sobrescrever fundamentalmente toda a aparência de um botão. Esta é uma forma simples de adicionar novas variações visuais. Para personalizar uma variação existente, basta modificar o seletor CSS para atingir o atributo `variant` do botão, ao invés de uma classe personalizada (por exemplo, `cps-button[variant="accent"]`).

```html preview
<cps-button class="fancy">Botão extravagante</cps-button>

<style>
  cps-button.fancy::part(base) {
    /* Sobrescrevendo variáveis CSS do tema global, para este visual específico */
    --cps-button-height-medium: 48px;
    --cps-button-border-width: 4px;

    /* Definindo atributos CSS conforme desejado */
    transition: var(--cps-transition-medium) transform ease, var(--cps-transition-medium) border ease;
    border-radius: 0;
    border-top-color: #ff7ac1;
    border-right-color: #ad005c;
    border-bottom-color: #ad005c;
    border-left-color: #ff7ac1;
    box-shadow: 0 2px 10px #0002;
    background-color: #ff1493;
    color: white;
    font-size: 1.125rem;
  }

  cps-button.fancy::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  cps-button.fancy::part(base):active {
    transform: scale(1.05) rotate(-1deg) translateY(2px);
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
  }

  cps-button.fancy::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }

  cps-button.fancy::part(content) {
    text-shadow: 1px 1px 2px #ad005c, -1px -1px 2px #ad005c, -1px 1px 2px #ad005c, 1px -1px 2px #ad005c;
  }
</style>
```

!> Embora estas técnicas de estilização avançada sejam poderosas e flexíveis, estão disponíveis para casos extremos ou para necessidades de adaptação avançada para projetos externos. Se você estiver utilizando CPS Elements em um projeto aderente CPS Design System, não personalize a aparência dos componentes desta forma.

[component-metadata:cps-button]
