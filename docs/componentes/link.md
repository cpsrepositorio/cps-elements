# Link

[component-header:cps-link]

```html preview
<cps-link href="#">Navegar para página principal</cps-link>
```

?> É viável renderizar âncoras de navegação apenas com elementos HTML puros (como um simples `<a>`) e aplicar a estilização desejada, inclusive se aproveitando de [variáveis de estilo de tipografia](/variáveis-de-estilo/tipografia.md) oferecidas pelos [temas](/fundamentos/temas.md) padrão. Considere o componente `<cps-link>` um facilitador, basicamente um _wrapper_ que agiliza a aplicação da estilização adequada, conforme os estilos de tipografia disponíveis, e em aderência ao CPS Design System.

## Exemplos

### Endereço de destino

Use o atributo `href` para definir o endereço de destino do _link_. O valor poder ser uma URL absoluta válida, ou um caminho relativo para navegação interna, ou um identificador de âncora.

```html preview
<cps-link href="https://www.cps.sp.gov.br/">Navegar para portal CPS</cps-link>
```

```jsx react
import { CpsLink } from '@cps-elements/web/react/link';

const App = () => (
  <CpsLink href="https://www.cps.sp.gov.br/">Navegar para portal CPS</CpsLink>
);
```

### Alvo de navegação

Use o atributo `target` para definir o alvo de navegação do _link_. O valor padrão é `_self`, que indica que o _link_ será aberto na mesma janela ou aba. Outros valores possíveis são `_blank`, `_parent`, `_top`, ou um nome de janela ou _frame_ específico.

```html preview
<cps-link href="https://www.cps.sp.gov.br/" target="_blank">Abrir portal CPS em nova aba</cps-link>
```

```jsx react
import { CpsLink } from '@cps-elements/web/react/link';

const App = () => (
  <CpsLink href="https://www.cps.sp.gov.br/" target="_blank">Abrir portal CPS em nova aba</CpsLink>
);
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o _link_. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-link href="#" disabled>Navegação desabilitada</cps-link>
```

```jsx react
import { CpsLink } from '@cps-elements/web/react/link';

const App = () => (
  <>
    <CpsLink href="#" disabled>Navegação desabilitada</CpsLink>
  </>
);
```

### Ícones como prefixo ou sufixo

Use os _slots_ `prefix` e `suffix` para adicionar ícones.

```html preview
<cps-link href="#/fundamentos/instalação">
  <cps-icon slot="prefix" name="box"></cps-icon>
  Instalação
</cps-link>

<br /><br />

<cps-link href="#">
  <cps-icon slot="suffix" name="arrow-counterclockwise"></cps-icon>
  Recomeçar
</cps-link>

<br /><br />

<cps-link href="https://www.cps.sp.gov.br/" target="_blank">
  <cps-icon slot="prefix" name="cloud-link-fill"></cps-icon>
  <cps-icon slot="suffix" name="arrow-up-right"></cps-icon>
  Endereço externo
</cps-link>
```

```jsx react
import { CpsLink } from '@cps-elements/web/react/link';
import { CpsIcon } from '@cps-elements/web/react/icon';

const App = () => (
  <>
    <CpsLink href="#/fundamentos/instalação">
      <CpsIcon slot="prefix" name="box"></CpsIcon>
      Instalação
    </CpsLink>

    <br /><br />

    <CpsLink href="#">
      <CpsIcon slot="suffix" name="arrow-counterclockwise"></CpsIcon>
      Recomeçar
    </CpsLink>

    <br /><br />

    <CpsLink href="https://www.cps.sp.gov.br/" target="_blank">
      <CpsIcon slot="prefix" name="cloud-link-fill"></CpsIcon>
      <CpsIcon slot="suffix" name="arrow-up-right"></CpsIcon>
      Endereço externo
    </CpsLink>
  </>
);
```

### Tamanhos

Use o atributo `size` para definir o tamanho e o estilo do rótulo em conformidade à pilha tipografia.

```html preview
<div class="link-sizes-example">
  <cps-link size="stamp">Timbre</cps-link>
  <cps-link size="caption">Rubrica</cps-link>
  <cps-link size="link">Rótulo</cps-link>
  <cps-link size="body">Corpo</cps-link>
  <cps-link size="body-emphasized">Corpo enfatizado</cps-link>
  <cps-link size="body-strong">Corpo destacado</cps-link>
  <cps-link size="body-large">Corpo grande</cps-link>
  <cps-link size="subtitle">Subtítulo</cps-link>
  <cps-link size="title">Título</cps-link>
  <cps-link size="heading">Cabeçalho</cps-link>
  <cps-link size="display">Exibição</cps-link>
</div>

<style>
  .link-sizes-example {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
```

```jsx react
import { CpsLink } from '@cps-elements/web/react/link';

const css = `
  .link-sizes-example {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const App = () => (
  <>
    <div class="link-sizes-example">
      <CpsLink size="stamp">Timbre</CpsLink>
      <CpsLink size="caption">Rubrica</CpsLink>
      <CpsLink size="link">Rótulo</CpsLink>
      <CpsLink size="body">Corpo</CpsLink>
      <CpsLink size="body-emphasized">Corpo enfatizado</CpsLink>
      <CpsLink size="body-strong">Corpo destacado</CpsLink>
      <CpsLink size="body-large">Corpo grande</CpsLink>
      <CpsLink size="subtitle">Subtítulo</CpsLink>
      <CpsLink size="title">Título</CpsLink>
      <CpsLink size="heading">Cabeçalho</CpsLink>
      <CpsLink size="display">Exibição</CpsLink>
    </div>

    <style>{css}</style>
  </>
);
```

?> Não confunda os nomes de tamanhos como `body-emphasized` e `body-strong` com definições de semântica. Esses nomes são apenas para fins de tamanho e estilo, sendo que a semântica pode ser controlada através da definição de _tags_ HTML embrulhando o conteúdo do _link_, por exemplo.

[component-metadata:cps-link]
