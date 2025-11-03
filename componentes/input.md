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

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [boas práticas de caixa de texto](https://cpsrepositorio.github.io/cps-design-system/documentacao/text-field.html#boas-praticas), evite utilizar apenas `placeholder` em campos de formulário, preferindo utilizar `label`, ou então `label` e `placeholder` juntos. Raras exceções podem acontecer em casos onde o campo encontra-se sozinho em determinada área da interface e possui usabilidade bem clara, por exemplo, em uma caixa de pesquisa onde um texto de espaço reservado como _"Pesquisar..."_ é o suficiente.

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

?> Na maioria dos casos, a melhor escolha é manter `size` padrão `medium` (ou simplesmente não informar o atributo). O valor `small` existe para casos raros em que o botão é utilizado dentro de outros componentes, e o valor `large` existe para casos extremos usualmente não aderentes à [documentação de caixas de texto](https://cpsrepositorio.github.io/cps-design-system/documentacao/text-field.html) ao CPS Design System.

### Tipos de entrada

Use o atributo `type` para alterar o tipo de entrada do campo, da mesma forma que um [`<input>` nativo](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input). Alguns tipos possuem comportamentos e visual bem específicos e diferenciados e, em geral, você pode esperar que um `<cps-input>` terá suporte aos mesmos atributos e oferecerá funcionalidade similar à sua contraparte nativa.

!> O elemento nativo é incrivelmente amplo, muitas vezes saindo do escopo de uma caixa de entrada, abordando coisas como botões e caixas de seleção. Este escopo excessivo é, em grande parte, resultado de décadas de suporte legado que o elemento nativo não pode simplesmente remover do dia para a noite.<br /><br />Nós, entretanto, por não estarmos presos a este legado, optamos por limitar o escopo do `<cps-input>` e, ao mesmo tempo, direcionar o utilizador ao componente CPS Elements correto, quando um `type` que não suportamos é utilizado.

A seguir, veja como o `<cps-input>` opera com cada um dos `type` disponíveis em um `<input>` nativo.

```html preview no-vue
<form class="input-types">
  <cps-input label="Caixa de seleção" name="checkbox" type="checkbox"></cps-input>

  <cps-input label="Cor" name="color" type="color"></cps-input>

  <cps-input label="Data" name="date" type="date"></cps-input>

  <cps-input label="Data/Hora Local" name="datetime-local" type="datetime-local"></cps-input>

  <cps-input label="E-mail" name="email" type="email" hidden></cps-input>

  <cps-input label="Arquivo" name="file" type="file"></cps-input>

  <cps-input label="Oculto" name="hidden" type="hidden" value="Valor"></cps-input>

  <cps-input
    label="Imagem"
    name="image"
    type="image"
    src="https://placehold.co/200x50/orange/white/?text=Teste"
  ></cps-input>

  <cps-input label="Senha" name="password" type="password" password-toggle></cps-input>

  <cps-input label="Mês" name="month" type="month"></cps-input>

  <cps-input label="Número" name="number" type="number"></cps-input>

  <cps-input label="Campo de opção" name="raio" type="radio"></cps-input>

  <cps-input label="Intervalo" name="range" type="range"></cps-input>

  <cps-input label="Limpar" name="reset" type="reset" value="Limpar"></cps-input>

  <cps-input label="Pesquisa" name="search" type="search"></cps-input>

  <cps-input label="Submeter" name="submit" type="submit" value="Submeter"></cps-input>

  <cps-input label="Telefone" name="tel" type="tel"></cps-input>

  <cps-input label="Texto" name="text"></cps-input>

  <cps-input label="Hora" name="time" type="time"></cps-input>

  <cps-input label="URL" name="url" type="url"></cps-input>

  <cps-input label="Semana" name="week" type="week"></cps-input>

  <div class="buttons">
    <cps-button type="submit" variant="accent">Submeter</cps-button>
    <cps-button type="reset">Limpar</cps-button>
  </div>
</form>

<style>
  form.input-types {
    display: flex;
    flex-flow: column;
    gap: 1rem;
  }

  form.input-types .buttons {
    display: flex;
    gap: 1rem;
  }

  form.input-types .buttons * {
    flex: 1;
  }
</style>

<script type="module">
  import { showConfirm } from '@cps-elements/web/components/dialog.js';

  const form = document.querySelector('form.input-types');
  const hidden = form.querySelector('[type="hidden"]');
  hidden.value = 'Oculto';

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    showConfirm(
      `<pre>${JSON.stringify(data)
        .replaceAll(',"', ',<br>  "')
        .replaceAll('":"', '": "')
        .replace('{"', '{<br>  "')
        .replace('"}', '"<br>}')}</pre>`,
      'Valores submetidos:'
    );
  });
</script>
```

?> Prezamos por aderência a comportamentos nativos sempre que possível. Isso significa que mantemos aderência ao `<input>` nativo mesmo quando algum navegador possui interpretações próprias sobre elementos de apoio deste.<br /><br />Por exemplo, o seletor de datas de um `type` igual a `date` não é padronizado por especificação e, portanto, difere de navegador para navegador. Intencionalmente optamos por não forçar padronização neste sentido.

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
