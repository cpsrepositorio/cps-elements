# Formulários

Cada componente CPS Elements faz uso de [_shadow DOM_](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) para encapsular marcação, estilos e comportamento. Enquanto um excelente mecanismo de encapsulamento oferecido pela Web moderna, uma ressalva desta abordagem é que os elementos nativos `<form>` não reconhecem controles de formulário localizados dentro do _shadow DOM_.

Nossa solução para este problema se baseia no evento [`formdata`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event), o qual está [disponível em todos os navegadores modernos](https://caniuse.com/mdn-api_htmlformelement_formdata_event). Isso significa que, quando um formulário é enviado, os controles de formulário do CPS Elements anexarão automaticamente seus valores ao objeto `FormData` usado para enviar o formulário. Na maioria dos casos, as coisas simplesmente funcionarão sem ressalvas. No entanto, se você estiver usando uma biblioteca de serialização de formulários, talvez seja necessário adaptá-la para reconhecer os controles CPS Elements.

?> CPS Elements usa escutas de eventos para interceptar os eventos `formdata` e `submit` do formulário. Isso permite injetar dados e acionar a validação conforme necessário. Se você também estiver anexando eventos ao formulário, _faça isso somente depois que os controles de formulário do CPS Elements estiverem conectados ao DOM_, caso contrário, sua lógica será executada antes que o CPS Elements tenha a chance de interceptar o formulário apropriadamente.

## Serialização de dados

Serialização é apenas um termo elaborado que no fim das contas significa coletar dados de formulário e enviar para o servidor. Se você está contando com envios de formulários padrão, do tipo que o próprio navegador realiza o envio para o endereço de servidor estipulado (por exemplo, usando `<form action="...">`), provavelmente pode pular esta seção.

No entanto, a maioria dos aplicativos modernos usa a [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), ou mesmo alguma biblioteca especializada como [axios](https://github.com/axios/axios), para submeter formulários usando JavaScript de forma assíncrona e controlada pelo desenvolvedor.

A interface [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) oferece uma maneira padrão de serializar formulários no navegador. Você pode criar um objeto `FormData` a partir de qualquer elemento `<form>`.

```js
const form = document.querySelector('form');
const data = new FormData(form);

// Dados do formulário disponíveis no formato de objeto 'FormData'.
```

Entretanto, algumas pessoas acham a `FormData` complicada de trabalhar, especialmente se precisam enviar uma carga em formato JSON para o servidor. Para simplificar este caso de uso típico, CPS Elements oferece um utilitário de serialização que coleta dados de formulário e retorna um objeto JavaScript.

```js
import { serialize } from '@cps-elements/web/utilities/form.js';

const form = document.querySelector('form');
const data = serialize(form);

// Dados do formulário disponíveis como um objeto JavaScript puro.
```

O resultado é um objeto com pares de nome/valor, os quais mapeiam para cada controle de formulário, a partir do `name` de cada controle, bem como seu `value`. Se mais de um controle de formulário compartilha o mesmo nome, os valores serão passados como um _array_ para aquela chave específica, por exemplo, `{ name: ['value1', 'value2'] }`.

## Validação de formulários

Validação do lado do cliente pode ser empregada através do uso da API de validação de restrições nativa dos navegadores, a [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation). Você pode ativá-la simplesmente usando atributos como `required`, `pattern`, `minlength`, `maxlength`, da mesma forma que faria para controles de formulário nativos.

?> Existem diversas abordagens para validar formulários, muitas delas baseadas em integrar bibliotecas de terceiros. Entretanto, se manter com a API de validação de restrições nativa pode ser a melhor ideia, já que ela é bem suportada, não requer _download_ de bibliotecas adicionais, e oferece resultados com acessibilidade _out-of-the-box_.

CPS Elements implementa muitos dos mesmos atributos dos controles de formulário nativos, mas é recomendado verificar a documentação de cada componente para uma lista de propriedades suportadas. Desta forma, se você já possui familiaridade com validação de formulários usando recursos nativos, esta documentação pode nem ser relevante para você, já que abordará fundamentalmente as mesmas coisas.

Se você simplesmente não quiser usar a validação de algum formulário no lado do cliente, basta suprimir este comportamento adicionando o atributo `novalidate` ao elemento `<form>`.

!> A validação do lado do cliente pode ser usada para melhorar a experiência do usuário com formulários, mas não serve como garantia de integridade dos dados e não é um substituto para a validação do lado do servidor. **Você sempre deve validar e sanitizar a entrada do usuário no servidor!**

### Campos obrigatórios

Para tornar um campo obrigatório, use o atributo [`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required). O formulário não será enviado se um campo obrigatório estiver vazio.

```html preview no-vue
<form class="input-validation-required">
  <cps-input name="name" label="Nome" autocomplete="off" required></cps-input>
  <br />
  <cps-select label="Animal favorito" required>
    <cps-option value="cats">Gatos</cps-option>
    <cps-option value="dogs">Cães</cps-option>
    <cps-option value="birds">Pássaros</cps-option>
    <cps-option value="fish">Peixes</cps-option>
    <cps-option value="other">Outros</cps-option>
  </cps-select>
  <br />
  <cps-textarea name="comment" label="Comentários" required></cps-textarea>
  <br />
  <cps-checkbox required>Aceito os termos de uso</cps-checkbox>
  <br /><br />
  <cps-button type="submit" variant="accent">Enviar</cps-button>
  <cps-button type="reset">Limpar</cps-button>
</form>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const form = document.querySelector('.input-validation-required');
  form.addEventListener('submit', event => {
    // Previne o envio, já que não temos um servidor esperando por estes dados.
    event.preventDefault();

    // Limpa o formulário simulando o envio.
    form.reset();

    // Exibe uma notificação de sucesso ao usuário.
    toast('Todos os campos foram validados!', { variant: 'success' });
  });
</script>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsInput } from '@cps-elements/web/react/input';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';
import { CpsTextarea } from '@cps-elements/web/react/textarea';
import { toast } from '@cps-elements/web/components/notification.js';

const App = () => {
  function handleSubmit(event) {
    // Previne o envio, já que não temos um servidor esperando por estes dados.
    event.preventDefault();

    // Limpa o formulário simulando o envio.
    event.target.reset();

    // Exibe uma notificação de sucesso ao usuário.
    toast('Todos os campos foram validados!', { variant: 'success' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <CpsInput name="name" label="Nome" autocomplete="off" required />
      <br />
      <CpsSelect label="Animal favorito" required>
        <CpsOption value="cats">Gatos</CpsOption>
        <CpsOption value="dogs">Cães</CpsOption>
        <CpsOption value="birds">Pássaros</CpsOption>
        <CpsOption value="fish">Peixes</CpsOption>
        <CpsOption value="other">Outros</CpsOption>
      </CpsSelect>
      <br />
      <CpsTextarea name="comment" label="Comentários" required />
      <br />
      <CpsCheckbox required>Aceito os termos de uso</CpsCheckbox>
      <br />
      <br />
      <CpsButton type="submit" variant="accent">
        Enviar
      </CpsButton>
      <CpsButton type="reset">Limpar</CpsButton>
    </form>
  );
};
```

```html vue
<script setup>
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsCheckbox } from '@cps-elements/web/components/checkbox';
  import { CpsInput } from '@cps-elements/web/components/input';
  import { CpsOption } from '@cps-elements/web/components/option';
  import { CpsSelect } from '@cps-elements/web/components/select';
  import { CpsTextarea } from '@cps-elements/web/components/textarea';
  import { toast } from '@cps-elements/web/components/notification.js';

  const onSubmit = event => {
    // Limpa o formulário simulando o envio.
    event.target.reset();

    // Exibe uma notificação de sucesso ao usuário.
    toast('Todos os campos foram validados!', { variant: 'success' });
  };
</script>

<template>
  <form class="input-validation-required" @submit.prevent="onSubmit">
    <cps-input name="name" label="Nome" autocomplete="off" required />
    <br />
    <cps-select label="Animal favorito" required>
      <cps-option value="cats">Gatos</cps-option>
      <cps-option value="dogs">Cães</cps-option>
      <cps-option value="birds">Pássaros</cps-option>
      <cps-option value="fish">Peixes</cps-option>
      <cps-option value="other">Outros</cps-option>
    </cps-select>
    <br />
    <cps-textarea name="comment" label="Comentários" required />
    <br />
    <cps-checkbox required>Aceito os termos de uso</cps-checkbox>
    <br /><br />
    <cps-button type="submit" variant="accent">Enviar</cps-button>
    <cps-button type="reset">Limpar</cps-button>
  </form>
</template>
```

?> Por padrão, campos obrigatórios receberão automaticamente um <span style="color: var(--cps-input-required-content-color)">\*</span> após seus rótulos. Entretanto, isso é configurável através da propriedade personalizada `--cps-input-required-content`, a qual pode inclusive receber um valor `''` na raiz de sua folha de estilos, caso queira desabilitar este comportamento completamente para todos os controles.

### Formato de entrada

Para restringir um valor a um formato específico, use o atributo [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern). Este exemplo permite apenas letras de A a Z, portanto o formulário não será enviado se um número ou símbolo for inserido. Isto funciona apenas com elementos `<cps-input>`.

```html preview
<form class="input-validation-pattern">
  <cps-input name="letters" label="Letras" required pattern="[A-Za-z]+"></cps-input>
  <br />
  <cps-button type="submit" variant="accent">Enviar</cps-button>
  <cps-button type="reset">Limpar</cps-button>
</form>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const form = document.querySelector('.input-validation-pattern');
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  });
</script>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsInput } from '@cps-elements/web/react/input';
import { toast } from '@cps-elements/web/components/notification.js';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <CpsInput name="letters" label="Letras" required pattern="[A-Za-z]+" />
      <br />
      <CpsButton type="submit" variant="accent">
        Enviar
      </CpsButton>
      <CpsButton type="reset">Limpar</CpsButton>
    </form>
  );
};
```

```html vue
<script setup>
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsInput } from '@cps-elements/web/components/input';
  import { toast } from '@cps-elements/web/components/notification.js';

  const onSubmit = event => {
    event.target.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  };
</script>

<template>
  <form class="input-validation-pattern" @submit.prevent="onSubmit">
    <cps-input name="letters" label="Letras" required pattern="[A-Za-z]+" />
    <br />
    <cps-button type="submit" variant="accent">Enviar</cps-button>
    <cps-button type="reset">Limpar</cps-button>
  </form>
</template>
```

### Tipos de entrada

Alguns tipos de entrada, como `email` e `url`, possuem validação embutida. Isto funciona apenas com elementos `<cps-input>`.

```html preview
<form class="input-validation-type">
  <cps-input type="email" label="E-mail" placeholder="seu@email.com" required></cps-input>
  <br />
  <cps-input type="url" label="URL" placeholder="https://exemplo.com/" required></cps-input>
  <br />
  <cps-button type="submit" variant="accent">Enviar</cps-button>
  <cps-button type="reset">Limpar</cps-button>
</form>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const form = document.querySelector('.input-validation-type');
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  });
</script>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsInput } from '@cps-elements/web/react/input';
import { toast } from '@cps-elements/web/components/notification.js';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <CpsInput type="email" label="E-mail" placeholder="seu@email.com" required />
      <br />
      <CpsInput type="url" label="URL" placeholder="https://exemplo.com/" required />
      <br />
      <CpsButton type="submit" variant="accent">
        Enviar
      </CpsButton>
      <CpsButton type="reset">Limpar</CpsButton>
    </form>
  );
};
```

```html vue
<script setup>
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsInput } from '@cps-elements/web/components/input';
  import { toast } from '@cps-elements/web/components/notification.js';

  const onSubmit = event => {
    event.target.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  };
</script>

<template>
  <form class="input-validation-type" @submit.prevent="onSubmit">
    <cps-input type="email" label="E-mail" placeholder="seu@email.com" required />
    <br />
    <cps-input type="url" label="URL" placeholder="https://exemplo.com/" required />
    <br />
    <cps-button type="submit" variant="accent">Enviar</cps-button>
    <cps-button type="reset">Limpar</cps-button>
  </form>
</template>
```

### Mensagens de erro personalizadas

Para personalizar oas mensagens de validação, passe um texto não vazio ao método `setCustomValidity()`. Isto irá sobrescrever quaisquer restrições de validação existentes. Todos os controles de formulário CPS Elements suportam este método.

O formulário não será enviado quando uma validação personalizada estiver definida e o navegador exibirá um erro de validação quando o formulário contendo o controle for enviado. Para tornar o controle válido novamente, chame `setCustomValidity()` novamente com um texto vazio.

```html preview
<form class="input-validation-custom">
  <cps-input label="Validação personalizada" label="Escreva “consegui”" required></cps-input>
  <br />
  <cps-button type="submit" variant="accent">Enviar</cps-button>
  <cps-button type="reset">Limpar</cps-button>
</form>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const form = document.querySelector('.input-validation-custom');
  const input = form.querySelector('cps-input');

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  });

  // Define uma validação personalizada para o controle de entrada.
  function setInputCustomValidity() {
    if (input.value === 'consegui') {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity('Escreva literalmente “consegui”, sem as aspas, antes de enviar.');
    }
  }

  // Validação personalizada é preparada quando o código carrega.
  setInputCustomValidity();

  // Validação personalizada é acionada sempre que o usuário interage.
  input.addEventListener('cps-input', setInputCustomValidity);
</script>
```

```jsx react
import { useEffect, useRef, useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsInput } from '@cps-elements/web/react/input';
import { toast } from '@cps-elements/web/components/notification.js';

const App = () => {
  const input = useRef(null);
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  }

  // Define uma validação personalizada para o controle de entrada.
  function setInputCustomValidity() {
    if (value === 'consegui') {
      input.current.setCustomValidity('');
    } else {
      input.current.setCustomValidity('Escreva literalmente “consegui”, sem as aspas, antes de enviar.');
    }
  }

  // Validação personalizada é preparada quando o código carrega.
  useEffect(() => {
    setInputCustomValidity();
  }, []);

  // Validação personalizada é acionada sempre que o usuário interage.
  function handleInput(event) {
    setValue(event.target.value);
    setInputCustomValidity();
  }

  return (
    <form onSubmit={handleSubmit}>
      <CpsInput
        ref={input}
        label="Validação personalizada"
        label="Escreva “consegui”"
        required
        value={value}
        onCpsInput={handleInput}
      />
      <br />
      <CpsButton type="submit" variant="accent">
        Submit
      </CpsButton>
      <CpsButton type="reset">Limpar</CpsButton>
    </form>
  );
};
```

```html vue
<script setup>
  import { ref, onMounted } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsInput } from '@cps-elements/web/components/input';
  import { toast } from '@cps-elements/web/components/notification.js';

  const input = ref();
  const value = ref('');

  const onSubmit = event => {
    event.target.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  };

  // Define uma validação personalizada para o controle de entrada.
  const setInputCustomValidity = () => {
    if (value.value === 'consegui') {
      input.value.setCustomValidity('');
    } else {
      input.value.setCustomValidity('Escreva literalmente “consegui”, sem as aspas, antes de enviar.');
    }
  };

  // Validação personalizada é preparada quando o código carrega.
  onMounted(() => {
    setInputCustomValidity();
  });

  // Validação personalizada é acionada sempre que o usuário interage.
  const onInput = event => {
    value.value = event.target.value;
    setInputCustomValidity();
  };
</script>

<template>
  <form class="input-validation-custom" @submit.prevent="onSubmit">
    <cps-input
      ref="input"
      label="Validação personalizada"
      label="Escreva “consegui”"
      required
      :value="value"
      @cps-input="onInput"
    />
    <br />
    <cps-button type="submit" variant="accent">Enviar</cps-button>
    <cps-button type="reset">Limpar</cps-button>
  </form>
</template>
```

Ao utilizar esta abordagem, você está manualmente escrevendo toda a lógica de validação, não apenas a definição da mensagem de erro, mas também como checar pela validade do campo. Isto significa que você pode fazer coisas como validar um campo baseado em seu valor atual, ou até mesmo validar um campo baseado em outros campos do formulário. Entretanto, também significa escrever mais código, o que pode ser um pouco mais trabalhoso.

?> Se você estiver utilizando CPS Elements com Angular, React, ou Vue, você pode usar diferentes bibliotecas validação de formulários disponíveis para cada _framework_, e a integração dos componentes CPS Elements com tais bibliotecas não será diferente de usar controles de formulário nativos. Basta seguir a documentação da biblioteca em questão.<br><br>Mas mesmo se você não estiver usando um _framework_ JavaScript, é possível encontrar diversas bibliotecas de validação de formulários (alguns exemplos: [Parsley.js](https://parsleyjs.org/), [FormValidation](https://formvalidation.io/), e [Validator.js](https://wangchujiang.com/validator.js/)), para não precisar escrever toda a lógica de validações manualmente.

## Exibição personalizada da validação

Já que controles de formulário podem ser utilizados de diferentes formas, CPS Elements não provê estilos de validação para controles de formulário como parte de seu tema padrão. Ao invés disso, os seguintes atributos serão aplicados para refletir a validade de um controle conforme os usuários interagem com ele. Então, você pode usá-los para criar estilos personalizados para qualquer estado de validação que necessite.

- `data-required` - O controle de formulário é obrigatório.
- `data-optional` - O controle de formulário é opcional.
- `data-invalid` - O controle de formulário está em estado inválido (e pode estar assim desde o carregamento).
- `data-valid` - O controle de formulário está em estado válido (e pode estar assim desde o carregamento).
- `data-user-invalid` - O controle de formulário está em estado inválido (e garantidamente o usuário interagiu com ele).
- `data-user-valid` - O controle de formulário está em estado válido (e garantidamente o usuário interagiu com ele).

Estes atributos se mapeiam de forma similar às pseudo-classes nativas suportadas pelos navegadores modernos, [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required), [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional), [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid), e [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid), além das ainda pouco suportadas, em estágio de proposta, [`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) e [`:user-valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid).

?> No futuro, é planejado migrar dos atributos `data-*` para pseudo-classes personalizadas como `:--valid` e `:--invalid`. CPS Elements adotou os atributos `data-*` como uma solução temporária até que suporte dos navegadores para estados personalizados através de [`ElementInternals.states`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/states) seja mais abrangente.

### Estilizando estados de validação

Ao utilizar os acima mencionados atributos `data-*`, você pode criar estilos personalizados para qualquer estado de validação que necessite. Entretanto, em geral você provavelmente vai querer estilizar apenas os estados `data-user-invalid` e `data-user-valid`, já que estes são os estados que refletem a validação causada efetivamente pela interação do usuário, e não a validação que pode ter sido aplicada pelo navegador no carregamento da página.

Observe como este exemplo estiliza os estados `data-user-invalid` e `data-user-valid` para controles de formulário `<cps-input>`, `<cps-select>`, e `<cps-checkbox>`. Você pode se inspirar nesta abordagem para estilizar outros controles de formulário, ou adaptar o visual deste exemplo para o estilo desejado em sua aplicação.

```html preview no-vue
<form class="validity-styles">
  <cps-input name="name" label="Nome" autocomplete="off" required clearable></cps-input>
  <br />
  <cps-select label="Animal favorito" required clearable>
    <cps-option value="cats">Gatos</cps-option>
    <cps-option value="dogs">Cães</cps-option>
    <cps-option value="birds">Pássaros</cps-option>
    <cps-option value="fish">Peixes</cps-option>
    <cps-option value="other">Outros</cps-option>
  </cps-select>
  <br />
  <cps-textarea name="comment" label="Comentários" required></cps-textarea>
  <br />
  <cps-checkbox required>Aceito os termos de uso</cps-checkbox>
  <br /><br />
  <cps-button type="submit" variant="accent">Enviar</cps-button>
  <cps-button type="reset">Limpar</cps-button>
</form>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const form = document.querySelector('.validity-styles');
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  });
</script>

<style>
  .validity-styles cps-input[data-user-invalid],
  .validity-styles cps-textarea[data-user-invalid],
  .validity-styles cps-select[data-user-invalid],
  .validity-styles cps-checkbox[data-user-invalid],
  .validity-styles cps-radio[data-user-invalid] {
    --cps-input-border-bottom-color: var(--cps-input-required-content-color);
    --cps-input-border-bottom-color-focus: var(--cps-input-required-content-color);
  }
</style>
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, pode ter observado que as [variações de caixa de texto](https://cpsrepositorio.github.io/cps-design-system/documentacao/text-field.html#padrao) descrevem um estilo de campo inválido idêntico ao deste exemplo. Isto é proposital, já que, embora esta biblioteca não ofereça o visual de estado inválido em seus temas padrão (pois diversos em cenários pode-se desejar não estilizar este estado), tal exemplo acaba servindo como uma referência prática de como obter tal visual por conta própria.<br><br>De fato, os estilos acima podem ser utilizados diretamente na raiz de sua própria folha de estilos, apenas removendo `.validity-styles` do início dos seletores, para que tais estilos sejam aplicados a todos os controles da página.

## Exibindo validação _inline_

A validação padrão dos navegadores usa um visual de balão para as mensagens de erro. Sabemos que uma das perguntas mais recorrentes nesta área é como personalizar o visual deste balão e, por mais dura que a resposta possa soar, não há uma forma _cross-browser_ realmente viável, apenas baseada em recursos nativos. A alternativa típica é interromper as validações nativas, e então apresentar mensagens de erro de forma _inline_, como parte dos elementos do próprio formulário.

Não fornecemos um mecanismo automático de exibição de mensagens de erro _inline_, já que existem muitas opiniões sobre como isso funcionaria quando combinado com controles de formulário nativos e outros elementos personalizados. Entretanto, você pode implementar sua própria solução conforme as necessidades específicas de seu caso.

Em resumo, para desabilitar as mensagens de erro nativas, você precisa cancelar o evento `cps-invalid`. Então, você pode aplicar suas próprias mensagens de erro _inline_ como bem entender. Este exemplo demonstra uma forma primitiva desta abordagem, usando o `help-text` como local para exibição da mensagem de erro.

```html preview
<form class="inline-validation">
  <cps-input name="name" label="Nome" help-text="Informe seu nome completo" autocomplete="off" required></cps-input>
  <br />
  <cps-button type="submit" variant="accent">Enviar</cps-button>
  <cps-button type="reset">Limpar</cps-button>
</form>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const form = document.querySelector('.inline-validation');
  const input = form.querySelector('cps-input');

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    toast('Todos os campos foram validados!', { variant: 'success' });
  });

  // Interceptar o estado inválido do formulário.
  form.addEventListener(
    'cps-invalid',
    event => {
      // Cancelar o evento para que não se exiba o balão de erro.
      event.preventDefault();

      // Alterar o texto de ajuda para exibir a mensagem de erro.
      input.helpText = 'Campo obrigatório não preenchido';
      input.focus();
    }
  );

  // Ao limpar o formulário, devolver o texto de ajuda original.
  form.addEventListener('reset', () => {
    input.helpText = 'Informe seu nome completo';
  });

  // Ao interagir com o controle, o texto de ajuda depende do valor atual.
  input.addEventListener('cps-input', () => {
    if (input.value === '') {
      input.helpText = 'Campo obrigatório não preenchido';
    } else {
      input.helpText = 'Informe seu nome completo';
    }
  });
</script>

<style>
  .inline-validation cps-input[data-user-invalid] {
    --cps-input-border-bottom-color: var(--cps-input-required-content-color);
    --cps-input-border-bottom-color-focus: var(--cps-input-required-content-color);
  }

  .inline-validation cps-input[data-user-invalid]::part(form-control-help-text) {
    color: var(--cps-input-required-content-color);
  }
</style>
</style>
```

## Controles associados ao formulário

No momento, a propriedade nativa [`HTMLFormElement.elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) não retorna elementos customizados, portanto os controles CPS Elements associados a um formulário não podem ser programaticamente obtidos desta forma.

Para simplificar esta complicação, CPS Elements fornece uma função `getFormControls()` em seu utilitário de formulários. Entretanto, ao invés de retornar uma coleção de controles de formulário do tipo [`HTMLFormControlsCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection), esta função retorna um _array_ de controles de formulário HTML e CPS Elements juntos, exatamente na ordem em que aparecem no DOM. Isto para facilitar a manipulação de formulários que envolvam controles HTML nativos e componentes CPS Elements juntos.

```js
import { getFormControls } from '@cps-elements/web/utilities/form.js';

const form = document.querySelector('form');
const formControls = getFormControls(form);

console.log(formControls); // Por exemplo: [input, cps-input, ...]
```

?> É provável que você não precise dessa função, a menos que esteja criando uma manipulação de formulários bem avançada e diferente de tudo que foi exposto até aqui. Se você está apenas tentando obter os dados de um formulário para submissão, usar [serialização de dados](#serialização-de-dados) ao invés disso deve ser o suficiente na maioria dos casos.
