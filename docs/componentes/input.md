# Input

[component-header:cps-input]

```html preview
<cps-input></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => <CpsInput />;
```

?> Este componente funciona com elementos `<form>` padrão. Consulte a seção sobre [formulários](/fundamentos/formulários) para saber mais sobre submissão de formulários e validação do lado do cliente.

## Exemplos

### Rótulos

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ `label` ao invés do atributo.

```html preview
<cps-input label="Qual seu nome?"></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => <CpsInput label="Qual seu nome?" />;
```

### Texto de apoio

Use o atributo `help-text` para adicionar texto de apoio para auxílio ao preenchimento do campo. Para textos com HTML, use o _slot_ `help-text` ao invés do atributo.

```html preview
<cps-input label="Apelido" help-text="Como você gosta que as pessoas te chamem?"></cps-input>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => <CpsInput label="Apelido" help-text="Como você gosta que as pessoas te chamem?" />;
```

### Texto de espaço reservado

Use o atributo `placeholder` para adicionar um texto de espaço reservado.

```html preview
<cps-input placeholder="O que você procura?"></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => <CpsInput placeholder="O que você procura?" />;
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [boas práticas de caixa de texto](https://cpsrepositorio.github.io/cps-design-system/componentes/text-field.html#boas-praticas), evite utilizar apenas `placeholder` em campos de formulário, preferindo utilizar `label`, ou então `label` e `placeholder` juntos. Raras exceções podem acontecer em casos onde o campo encontra-se sozinho em determinada área da interface e possui usabilidade bem clara, por exemplo, em uma caixa de pesquisa onde um texto de espaço reservado como _"Pesquisar..."_ é o suficiente.

### Limpável

Use o atributo `clearable` para exibir um botão de limpar quando o campo possui conteúdo.

```html preview
<cps-input placeholder="Preencha algo e me limpe depois" clearable></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => <CpsInput placeholder="Preencha algo e me limpe depois" clearable />;
```

### Alternar exibição de senha

Use o atributo `password-toggle` para exibir um botão de alternância que exibirá ou ocultará uma senha previamente digitada. Este atributo só tem efeito se o `type` do campo for `password`.

```html preview
<cps-input type="password" placeholder="Informe uma senha" password-toggle></cps-input>
<br />
<cps-input type="password" placeholder="Confirme a senha informada" password-toggle></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => (
  <>
    <CpsInput type="password" placeholder="Informe uma senha" password-toggle />
    <br />
    <CpsInput type="password" placeholder="Confirme a senha informada" password-toggle />
  </>
);
```

Observe que o botão de alternância de senha é independente para cada campo, ou seja, você pode ter um campo de senha e outro para confirmar a senha, e ambos podem ter o botão de alternância de senha em estados de exibição diferentes.

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-input placeholder="Desabilitado" disabled></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => <CpsInput placeholder="Desabilitado" disabled />;
```

### Tamanhos

Use o atributo `size` para alterar o tamanho do campo.

```html preview
<cps-input placeholder="Pequeno" size="small"></cps-input>
<br />
<cps-input placeholder="Médio" size="medium"></cps-input>
<br />
<cps-input placeholder="Grande" size="large"></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => (
  <>
    <CpsInput placeholder="Pequeno" size="small" />
    <br />
    <CpsInput placeholder="Médio" size="medium" />
    <br />
    <CpsInput placeholder="Grande" size="large" />
  </>
);
```

?> Na maioria dos casos, a melhor escolha visual é manter o `size` padrão `medium` (ou simplesmente não informar tal atributo). O valor `small` existe para casos raros em que o botão é utilizado dentro de outros componentes, e o valor `large` existe para casos extremos usualmente não aderentes à [documentação de caixas de texto](https://cpsrepositorio.github.io/cps-design-system/componentes/text-field.html) ao CPS Design System.

### Tipos de entrada

Use o atributo `type` para alterar o tipo de entrada do campo.

```html preview
<cps-input type="email" label="E-mail"></cps-input>
<br />
<cps-input type="number" label="Número"></cps-input>
<br />
<cps-input type="date" label="Data"></cps-input>
```

```jsx react
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => (
  <>
    <CpsInput type="email" placeholder="Email" />
    <br />
    <CpsInput type="number" placeholder="Number" />
    <br />
    <CpsInput type="date" placeholder="Date" />
  </>
);
```

### Ícones como prefixo ou sufixo

Use os _slots_ `prefix` e `suffix` para adicionar ícones.

```html preview
<cps-input placeholder="Pequeno" size="small">
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-icon name="chat" slot="suffix"></cps-icon>
</cps-input>
<br />
<cps-input placeholder="Médio" size="medium">
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-icon name="chat" slot="suffix"></cps-icon>
</cps-input>
<br />
<cps-input placeholder="Grande" size="large">
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-icon name="chat" slot="suffix"></cps-icon>
</cps-input>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => (
  <>
    <CpsInput placeholder="Pequeno" size="small">
      <CpsIcon name="home" slot="prefix"></CpsIcon>
      <CpsIcon name="chat" slot="suffix"></CpsIcon>
    </CpsInput>
    <br />
    <CpsInput placeholder="Médio" size="medium">
      <CpsIcon name="home" slot="prefix"></CpsIcon>
      <CpsIcon name="chat" slot="suffix"></CpsIcon>
    </CpsInput>
    <br />
    <CpsInput placeholder="Grande" size="large">
      <CpsIcon name="home" slot="prefix"></CpsIcon>
      <CpsIcon name="chat" slot="suffix"></CpsIcon>
    </CpsInput>
  </>
);
```

### Personalizando a posição do rótulo

Utilize [partes CSS](#partes-css) para personalizar de formas criativas como os controles de formulário são apresentados.

Este exemplo utiliza _CSS Grid_ para posicionar o rótulo à esquerda do controle, mas as possibilidades são quase infinitas. A mesma técnica funciona para outros tipos de campo, áreas de texto, grupos de seletores, dentre outros.

```html preview
<cps-input class="label-on-left" label="Nome" help-text="Preencha com seu nome completo""></cps-input>
<cps-input class="label-on-left" label="E-mail" type="email" help-text="Utilize seu e-mail preferencial"></cps-input>
<cps-input class="label-on-left" label="Nascimento" type="date" help-text="Quando você nasceu?"></cps-input>

<style>
  .label-on-left {
    --label-width: 4rem;
  }

  .label-on-left + .label-on-left {
    margin-top: 1rem;
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    column-gap: 1rem;
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    margin-bottom: 0;
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```

[component-metadata:cps-input]
