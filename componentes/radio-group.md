# Radio Group

[component-header:cps-radio-group]

Ao embrulhar vários _radio_ ou vários _toggle button_ em um grupo de opções (_radio group_), você garante que apenas uma opção possa ser selecionada por vez. Use o atributo `name` para agrupar os _radio_ ou _toggle button_ em um nome de campo único, durante uma submissão de formulário a um servidor. Use o atributo `value` para controlar a opção atualmente selecionada do grupo.

```html preview
<cps-radio-group>
  <cps-radio value="1">Opção 1</cps-radio>
  <cps-radio value="2">Opção 2</cps-radio>
  <cps-radio value="3">Opção 3</cps-radio>
</cps-radio-group>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';

const App = () => (
  <CpsRadioGroup>
    <CpsRadio value="1">Opção 1</CpsRadio>
    <CpsRadio value="2">Opção 2</CpsRadio>
    <CpsRadio value="3">Opção 3</CpsRadio>
  </CpsRadioGroup>
);
```

?> É possível ter um grupo de opções sem valor inicial marcado, mas a partir do momento em que o usuário seleciona uma opção do grupo, passa a ser impossível remover a seleção por completo. Embora isso possa parecer uma limitação, trata-se de um comportamento intencional para garantir aderência ao comportamento `<input type="radio">` nativo.

## Exemplos

### Rótulos

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ `label` ao invés do atributo.

```html preview
<cps-radio-group label="Qual sua refeição preferida?" name="meal" value="1">
  <cps-radio value="1">Desjejum</cps-radio>
  <cps-radio value="2">Almoço</cps-radio>
  <cps-radio value="3">Jantar</cps-radio>
</cps-radio-group>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';

const App = () => (
  <CpsRadioGroup label="Qual sua refeição preferida?" name="meal" value="1">
    <CpsRadio value="1">Desjejum</CpsRadio>
    <CpsRadio value="2">Almoço</CpsRadio>
    <CpsRadio value="3">Jantar</CpsRadio>
  </CpsRadioGroup>
);
```

?> Embora seja possível deixar o atributo `label` vazio, é altamente recomendado que se forneça um rótulo para o campo. Isso garante que o campo seja acessível, especialmente no uso com leitores de tela.

### Texto de apoio

Use o atributo `help-text` para adicionar texto de apoio para auxílio ao preenchimento do campo. Para textos com HTML, use o _slot_ `help-text` ao invés do atributo.

```html preview
<cps-radio-group
  label="Qual ponto da carne você prefere?"
  help-text="Escolha sua preferência de preparo, sendo que ao ponto é levemente rosada no meio."
  name="meat"
  value="3"
>
  <cps-radio value="1">Mal passada</cps-radio>
  <cps-radio value="2">Levemente mal passada</cps-radio>
  <cps-radio value="3">Ao ponto</cps-radio>
  <cps-radio value="4">Um pouco passada</cps-radio>
  <cps-radio value="5">Bem passada</cps-radio>
</cps-radio-group>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';

const App = () => (
  <CpsRadioGroup
    label="Qual ponto da carne você prefere?"
    help-text="Escolha sua preferência de preparo, sendo que ao ponto é levemente rosada no meio."
    name="meat"
    value="3"
  >
    <CpsRadio value="1">Mal passada</CpsRadio>
    <CpsRadio value="2">Levemente mal passada</CpsRadio>
    <CpsRadio value="3">Ao ponto</CpsRadio>
    <CpsRadio value="4">Um pouco passada</CpsRadio>
    <CpsRadio value="5">Bem passada</CpsRadio>
  </CpsRadioGroup>
);
```

### Botões alternáveis

Preencha o grupo de opções com elementos [Toggle Button](/componentes/toggle-button) para oferecer uma forma alternativa de apresentação de opções. Neste formato, internamente um [Button Group](/componentes/button-group) é utilizado para agrupar os botões de forma esteticamente coesiva.

```html preview
<cps-radio-group
  label="O que fazer sobre este caso?"
  help-text="Selecione uma opção que te deixe com orgulho."
  name="choice"
>
  <cps-toggle-button value="1">Deixe como está</cps-toggle-button>
  <cps-toggle-button value="2">Deixe rolar</cps-toggle-button>
  <cps-toggle-button value="3">Force mudar</cps-toggle-button>
  <cps-toggle-button value="4">Encerre o caso</cps-toggle-button>
</cps-radio-group>
```

```jsx react
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <CpsRadioGroup
    label="O que fazer sobre este caso?"
    help-text="Selecione uma opção que te deixe com orgulho."
    name="choice"
  >
    <CpsToggleButton value="1">Deixe como está</CpsToggleButton>
    <CpsToggleButton value="2">Deixe rolar</CpsToggleButton>
    <CpsToggleButton value="3">Force mudar</CpsToggleButton>
    <CpsToggleButton value="4">Encerre o caso</CpsToggleButton>
  </CpsRadioGroup>
);
```

### Exemplo de barra de tarefas

Crie barras de ferramentas interativas misturando [grupos de botões](/componentes/button-group), [botões comuns](/componentes/button), grupos de opções e [botões alternáveis](/componentes/toggle-button).

```html preview
<div class="button-group-toolbar">
  <cps-button-group label="Histórico">
    <cps-tooltip content="Desfazer">
      <cps-button><cps-icon name="arrow-counterclockwise" label="Desfazer"></cps-icon></cps-button>
    </cps-tooltip>

    <cps-tooltip content="Refazer">
      <cps-button><cps-icon name="arrow-clockwise" label="Refazer"></cps-icon></cps-button>
    </cps-tooltip>
  </cps-button-group>

  <cps-button-group label="Formatação">
    <cps-tooltip content="Negrito">
      <cps-toggle-button><cps-icon name="text-bold" label="Negrito"></cps-icon></cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Itálico">
      <cps-toggle-button><cps-icon name="text-italic" label="Itálico"></cps-icon></cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Sublinhado">
      <cps-toggle-button><cps-icon name="text-underline" label="Sublinhado"></cps-icon></cps-toggle-button>
    </cps-tooltip>
  </cps-button-group>

  <cps-radio-group value="left">
    <cps-tooltip content="À esquerda">
      <cps-toggle-button value="left">
        <cps-icon name="text-align-left" label="Alinhamento à esquerda"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Centralizado">
      <cps-toggle-button value="center">
        <cps-icon name="text-align-center" label="Alinhamento centralizado"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="À direita">
      <cps-toggle-button value="right">
        <cps-icon name="text-align-right" label="Alinhamento à direita"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>

    <cps-tooltip content="Justificado">
      <cps-toggle-button value="justify">
        <cps-icon name="text-align-justify" label="Justificado"></cps-icon>
      </cps-toggle-button>
    </cps-tooltip>
  </cps-radio-group>
</div>

<style>
  .button-group-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--cps-spacing-2);
  }
</style>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsButtonGroup } from '@cps-elements/web/react/button-group';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';
import { CpsTooltip } from '@cps-elements/web/react/tooltip';

const css = `
  .button-group-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--cps-spacing-2);
  }
`;

const App = () => (
  <>
    <div class="button-group-toolbar">
      <CpsButtonGroup label="Histórico">
        <CpsTooltip content="Desfazer">
          <CpsButton>
            <CpsIcon name="arrow-counterclockwise" label="Desfazer" />
          </CpsButton>
        </CpsTooltip>

        <CpsTooltip content="Refazer">
          <CpsButton>
            <CpsIcon name="arrow-clockwise" label="Refazer" />
          </CpsButton>
        </CpsTooltip>
      </CpsButtonGroup>

      <CpsButtonGroup label="Formatação">
        <CpsTooltip content="Negrito">
          <CpsToggleButton>
            <CpsIcon name="text-bold" label="Negrito" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Itálico">
          <CpsToggleButton>
            <CpsIcon name="text-italic" label="Itálico" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Sublinhado">
          <CpsToggleButton>
            <CpsIcon name="text-underline" label="Sublinhado" />
          </CpsToggleButton>
        </CpsTooltip>
      </CpsButtonGroup>

      <CpsRadioGroup value="left">
        <CpsTooltip content="À esquerda">
          <CpsToggleButton value="left">
            <CpsIcon name="text-align-left" label="Alinhamento à esquerda" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Centralizado">
          <CpsToggleButton value="center">
            <CpsIcon name="text-align-center" label="Alinhamento centralizado" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="À direita">
          <CpsToggleButton value="right">
            <CpsIcon name="text-align-right" label="Alinhamento à direita" />
          </CpsToggleButton>
        </CpsTooltip>

        <CpsTooltip content="Justificado">
          <CpsToggleButton value="justify">
            <CpsIcon name="text-align-justify" label="Justificado" />
          </CpsToggleButton>
        </CpsTooltip>
      </CpsRadioGroup>
    </div>

    <style>{css}</style>
  </>
);
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o botão. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido. É possível que apenas uma opção esteja desabilitada em um grupo de opções, não sendo selecionável mesmo em operações por teclado em relação a todo o grupo.

```html preview
<cps-radio-group label="Pedra, papel ou tesoura?">
  <cps-radio value="1">Pedra</cps-radio>
  <cps-radio value="2">Papel</cps-radio>
  <cps-radio value="3">Tesoura</cps-radio>
  <cps-radio value="4" disabled>Lagarto</cps-radio>
  <cps-radio value="5" disabled>Spock</cps-radio>
</cps-radio-group>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';

const App = () => (
  <CpsRadioGroup label="Pedra, papel ou tesoura?">
    <CpsRadio value="1">Pedra</CpsRadio>
    <CpsRadio value="2">Papel</CpsRadio>
    <CpsRadio value="3">Tesoura</CpsRadio>
    <CpsRadio value="4" disabled>
      Lagarto
    </CpsRadio>
    <CpsRadio value="5" disabled>
      Spock
    </CpsRadio>
  </CpsRadioGroup>
);
```

## Tamanhos

Use o atributo `size` para alterar o tamanho do campo de todas as opções internas de uma vez.

```html preview no-vue
<cps-radio-group label="Tamanho das opções:" size="medium" value="medium" class="radio-group-size">
  <cps-radio value="small">Pequeno</cps-radio>
  <cps-radio value="medium">Médio</cps-radio>
  <cps-radio value="large">Grande</cps-radio>
</cps-radio-group>

<br />

<cps-radio-group label="Tamanho dos botões:" size="medium" value="medium" class="radio-group-toggle-button-size">
  <cps-toggle-button value="small">Pequeno</cps-toggle-button>
  <cps-toggle-button value="medium">Médio</cps-toggle-button>
  <cps-toggle-button value="large">Grande</cps-toggle-button>
</cps-radio-group>

<script>
  const radioGroup = document.querySelector('.radio-group-size');
  const radioGroupToggleButton = document.querySelector('.radio-group-toggle-button-size');

  function changeSize() {
    radioGroup.size = radioGroup.value = this.value;
    radioGroupToggleButton.size = radioGroupToggleButton.value = this.value;
  }

  radioGroup.addEventListener('cps-change', changeSize);
  radioGroupToggleButton.addEventListener('cps-change', changeSize);
</script>
```

```jsx react
import { useState } from 'react';
import { CpsRadio } from '@cps-elements/web/react/radio';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => {
  const [size, setSize] = useState('medium');

  return (
    <>
      <CpsRadioGroup
        label="Tamanho das opções:"
        size={size}
        value={size}
        class="radio-group-size"
        onCpsChange={event => setSize(event.target.value)}
      >
        <CpsRadio value="small">Pequeno</CpsRadio>
        <CpsRadio value="medium">Médio</CpsRadio>
        <CpsRadio value="large">Grande</CpsRadio>
      </CpsRadioGroup>

      <br>

      <CpsRadioGroup
        label="Tamanho dos botões:"
        size={size}
        value={size}
        class="radio-group-toggle-button-size"
        onCpsChange={event => setSize(event.target.value)}
      >
        <CpsToggleButton value="small">Pequeno</CpsToggleButton>
        <CpsToggleButton value="medium">Médio</CpsToggleButton>
        <CpsToggleButton value="large">Grande</CpsToggleButton>
      </CpsRadioGroup>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsRadio } from '@cps-elements/web/components/radio';
  import { CpsRadioGroup } from '@cps-elements/web/components/radio-group';
  import { CpsToggleButton } from '@cps-elements/web/components/toggle-button';

  const size = ref('medium');

  const onChange = event => {
    size.value = event.target.value;
  };
</script>

<template>
  <cps-radio-group
    label="Tamanho das opções:"
    :size="size"
    :value="size"
    class="radio-group-size"
    @cps-change="onChange"
  >
    <cps-radio value="small">Pequeno</cps-radio>
    <cps-radio value="medium">Médio</cps-radio>
    <cps-radio value="large">Grande</cps-radio>
  </cps-radio-group>

  <br />

  <cps-radio-group
    label="Tamanho dos botões:"
    :size="size"
    :value="size"
    class="radio-group-toggle-button-size"
    @cps-change="onChange"
  >
    <cps-toggle-button value="small">Pequeno</cps-toggle-button>
    <cps-toggle-button value="medium">Médio</cps-toggle-button>
    <cps-toggle-button value="large">Grande</cps-toggle-button>
  </cps-radio-group>
</template>
```

?> Os componentes [Radio](/componentes/radio) e [Toggle Button](/componentes/toggle-button) também possuem atributo `size` individual. Pode ser útil em interfaces que estejam os utilizando de forma independente, mas são ignorados e sobrescritos quando um _radio group_ os está embrulhando.

### Validação padrão

Use o atributo `required` para tornar a seleção de uma opção obrigatória. Caso nenhum valor tenha sido selecionado, irá impedir o envio do formulário pai e exibir a mensagem de erro padrão do navegador.

```html preview no-vue
<form class="default-validation">
  <cps-radio-group label="Seleção obrigatória" required>
    <cps-radio value="1">Opção 1</cps-radio>
    <cps-radio value="2">Opção 2</cps-radio>
    <cps-radio value="3">Opção 3</cps-radio>
  </cps-radio-group>

  <br />

  <cps-button type="submit" variant="accent">Submeter</cps-button>
</form>

<script>
  const form = document.querySelector('.default-validation');

  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Está tudo válido, parabéns!');
  });
</script>
```

```jsx react
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsRadio } from '@cps-elements/web/react/radio';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Está tudo válido, parabéns!');
  }

  return (
    <form class="default-validation" onSubmit={handleSubmit}>
      <CpsRadioGroup label="Seleção obrigatória" required>
        <CpsRadio value="1">Opção 1</CpsRadio>
        <CpsRadio value="2">Opção 2</CpsRadio>
        <CpsRadio value="3">Opção 3</CpsRadio>
      </CpsRadioGroup>

      <br />

      <CpsButton type="submit" variant="accent">
        Submeter
      </CpsButton>
    </form>
  );
};
```

```html vue
<script setup>
  import { CpsRadio } from '@cps-elements/web/components/radio';
  import { CpsRadioGroup } from '@cps-elements/web/components/radio-group';

  const handleSubmit = () => {
    alert('Está tudo válido, parabéns!');
  };
</script>

<template>
  <form class="default-validation" @submit.prevent="handleSubmit">
    <cps-radio-group label="Seleção obrigatória" required>
      <cps-radio value="1">Opção 1</cps-radio>
      <cps-radio value="2">Opção 2</cps-radio>
      <cps-radio value="3">Opção 3</cps-radio>
    </cps-radio-group>

    <br />

    <cps-button type="submit" variant="accent">Submeter</cps-button>
  </form>
</template>
```

### Validação personalizada

Você pode implementar sua própria lógica de validação com JavaScript e usar o método `setCustomValidity()` para definir uma mensagem de validação personalizada, sendo exibida de acordo com os critérios de exibição de cada navegador para passar uma sensação de validação nativa. Isto automaticamente prevenirá o formulário de ser submetido e permitirá que o navegador exiba a mensagem personalizada. Chame a função novamente passando uma `String` vazia, para limpar o erro.

```html preview no-vue
<form class="custom-validity">
  <cps-radio-group label="Quem você escolhe?" value="1">
    <cps-radio value="1">Eu não</cps-radio>
    <cps-radio value="2">Nem eu</cps-radio>
    <cps-radio value="3">Me escolha</cps-radio>
  </cps-radio-group>

  <br />

  <cps-button type="submit" variant="accent">Submeter</cps-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('cps-radio-group');
  const errorMessage = 'Você deve escolher a última opção!';

  // Set initial validity, as soon as the element is defined.
  customElements.whenDefined('cps-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made.
  form.addEventListener('cps-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submission.
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Está tudo válido, parabéns!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsRadio } from '@cps-elements/web/react/radio';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';

const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'Você deve escolher a última opção!';

  // Set initial validity after React mounts the component.
  useEffect(() => {
    radioGroup.current.setCustomValidity(errorMessage);
  }, []);

  // Update validity when a selection is made.
  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  // Handle form submission.
  function handleSubmit(event) {
    event.preventDefault();
    alert('Está tudo válido, parabéns!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <CpsRadioGroup ref={radioGroup} onCpsChange={handleChange} label="Quem você escolhe?" value="1">
        <CpsRadio value="1">Eu não</CpsRadio>
        <CpsRadio value="2">Nem eu</CpsRadio>
        <CpsRadio value="3">Me escolha</CpsRadio>
      </CpsRadioGroup>

      <br />

      <CpsButton type="submit" variant="accent">
        Submeter
      </CpsButton>
    </form>
  );
};
```

```html vue
<script setup>
  import { ref, onMounted } from 'vue';
  import { CpsRadio } from '@cps-elements/web/components/radio';
  import { CpsRadioGroup } from '@cps-elements/web/components/radio-group';

  const radioGroup = ref();
  const errorMessage = 'Você deve escolher a última opção!';

  // Set initial validity after Vue mounts the component.
  onMounted(() => {
    radioGroup.current.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made.
  const handleChange = () => {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  };

  // Handle form submission.
  const handleSubmit = () => {
    alert('Está tudo válido, parabéns!');
  };
</script>

<template>
  <form class="default-validation" @submit.prevent="handleSubmit">
    <cps-radio-group ref="radioGroup" @cps-change="handleChange" label="Quem você escolhe?" value="1">
      <cps-radio value="1">Eu não</cps-radio>
      <cps-radio value="2">Nem eu</cps-radio>
      <cps-radio value="3">Me escolha</cps-radio>
    </cps-radio-group>

    <br />

    <cps-button type="submit" variant="accent">Submeter</cps-button>
  </form>
</template>
```

?> Caso a apresentação nativa de mensagens de validação não lhe agrede usando `<form>`, você pode usar o evento `cps-invalid` para implementar sua própria lógica de validação, e então apresentar as mensagens de validação dentro de qualquer elemento HTML desejado (ou dentro de qualquer componente CPS Elements, se preferir).<br><br>Se estiver usando com Angular, React, ou Vue, sugerimos que escolha entre as diversas bibliotecas de validação de formulários disponíveis em cada ecossistema. Por se comportarem como elementos HTML nativos, os CPS Elements se integram facilmente com virtualmente qualquer biblioteca de validação de formulários de terceiros.

[component-metadata:cps-radio-group]
