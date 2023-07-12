# Toggle Button

[component-header:cps-toggle-button]

Botões alternáveis podem servir como uma extensão dos [botões](/componentes/button) tradicionais, podem ser marcados ou desmarcados sucessivas vezes pelo usuário. Quando usados individualmente, sem fazer parte de um grupo, eles podem ser usados para ativar ou desativar uma opção, como um interruptor, comportamentalmente de forma similar a um [_checkbox_](/componentes/checkbox).

```html preview
<cps-toggle-button>Funciono individualmente</cps-toggle-button>
<cps-toggle-button>Eu também sou individual</cps-toggle-button>
```

```jsx react
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <>
    <CpsToggleButton>Funciono individualmente</CpsToggleButton>
    <CpsToggleButton>Eu também sou individual</CpsToggleButton>
  </>
);
```

?> Utilizar botões alternáveis individualmente pode causar confusão, já que o visual é facilmente confundível com botões comuns (quando desmarcado) ou com botões de ênfase (quando marcado). Para uma usabilidade mais precisa, recomendamos que você utilize um [_checkbox_](/componentes/checkbox) ao invés de um botão alternável individual, ou se aproveite de iconografia alternando o ícone do botão programaticamente, de acordo com seu estado de marcação atual.

Botões alternáveis podem ser utilizados em [Radio Group](/componentes/radio-group), quando se deseja permitir que o usuário selecione apenas uma opção exclusiva dentre algumas opções disponíveis, comportamentalmente de forma similar a um [_radio_](/componentes/radio), inclusive não sendo possível remover a seleção por completo após um botão ter sido marcado, aderente ao comportamento `<input type="radio">` nativo.

```html preview
<cps-radio-group label="Qual sua refeição preferida?" name="meal">
  <cps-toggle-button value="1">Desjejum</cps-toggle-button>
  <cps-toggle-button value="2">Almoço</cps-toggle-button>
  <cps-toggle-button value="3">Jantar</cps-toggle-button>
</cps-radio-group>
```

```jsx react
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <CpsRadioGroup label="Selecione uma opção" name="meal">
    <CpsToggleButton value="1">Desjejum</CpsToggleButton>
    <CpsToggleButton value="2">Almoço</CpsToggleButton>
    <CpsToggleButton value="3">Jantar</CpsToggleButton>
  </CpsRadioGroup>
);
```

## Exemplos

### Checagem

Quando o botão alternável estiver sendo usado individualmente, use o atributo `checked` para definir o campo como marcado/checado. Este atributo reage a alterações em tempo real.

```html preview no-vue
<form class="custom-check-handle">
  <cps-toggle-button checked>Receber notificações:&nbsp;<b>Sim</b></cps-toggle-button>
</form>

<script>
  const form = document.querySelector('.custom-check-handle');
  const button = form.querySelector('cps-toggle-button');

  button.addEventListener('click', event => {
    button.querySelector('b').textContent = event.target.checked ? 'Sim' : 'Não';
  });
</script>
```

```jsx react
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  const [checked, setChecked] = useState(true);
  const [buttonText, setButtonText] = useState('Sim');

  const onClick = () => {
    setButtonText(checked ? 'Sim' : 'Não');
  };

  <form class="custom-check-handle">
    <CpsToggleButton checked={checked} click={onClick}>
      Receber notificações{'\u00A0'}
      <b>{buttonText}</b>
    </CpsToggleButton>
  </form>
);
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsToggleButton } from '@cps-elements/web/components/toggle-button';

  const isChecked = ref(true);
  const buttonText = ref('Sim');

  const onClick = () => {
    buttonText.value = isChecked.value ? 'Sim' : 'Não');
  };
</script>

<template>
  <form class="custom-check-handle">
    <cps-toggle-button :checked="isChecked" @click="onClick">
      Receber notificações: <b>{{ buttonText }}</b>
    </cps-toggle-button>
  </form>
</template>
```

?> O atributo `checked` pode ser utilizado para lógica de apresentação dependente do estado de marcação do botão, como no exemplo acima. Embora o exemplo tenha apenas alternado um texto no botão, é um caso de uso comum também para alternância de ícones dependendo do estado de marcação.

Caso utilize botões alternáveis em um [Radio Group](/componentes/radio-group), é possível definir o valor inicial e o estado de checagem considerando o grupo como um todo. Neste caso, utilize o atributo `value` diretamente no grupo, sem necessidade de interagir diretamente com o atributo `checked` em cada botão individualmente.

```html preview
<cps-radio-group label="Qual sua refeição preferida?" name="meal" value="3">
  <cps-toggle-button value="1">Desjejum</cps-toggle-button>
  <cps-toggle-button value="2">Almoço</cps-toggle-button>
  <cps-toggle-button value="3">Jantar</cps-toggle-button>
</cps-radio-group>
```

```jsx react
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <CpsRadioGroup label="Selecione uma opção" name="meal" value="3">
    <CpsToggleButton value="1">Desjejum</CpsToggleButton>
    <CpsToggleButton value="2">Almoço</CpsToggleButton>
    <CpsToggleButton value="3">Jantar</CpsToggleButton>
  </CpsRadioGroup>
);
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o botão. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-toggle-button>Funciono individualmente</cps-toggle-button>
<cps-toggle-button disabled>Eu também sou individual</cps-toggle-button>
```

```jsx react
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <>
    <CpsToggleButton>Funciono individualmente</CpsToggleButton>
    <CpsToggleButton disabled>Eu também sou individual</CpsToggleButton>
  </>
);
```

É possível que apenas um botão de opção esteja desabilitado em um grupo de opções, como no exemplo a seguir. Neste caso, o botão desabilitado não será selecionável mesmo em operações por teclado em relação a todo o grupo.

```html preview
<cps-radio-group label="Qual sua refeição preferida?" name="meal" value="1">
  <cps-toggle-button value="1">Desjejum</cps-toggle-button>
  <cps-toggle-button value="2" disabled>Almoço</cps-toggle-button>
  <cps-toggle-button value="3">Jantar</cps-toggle-button>
</cps-radio-group>
```

```jsx react
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <CpsRadioGroup label="Selecione uma opção" name="meal" value="1">
    <CpsToggleButton value="1">Desjejum</CpsToggleButton>
    <CpsToggleButton value="2" disabled>
      Almoço
    </CpsToggleButton>
    <CpsToggleButton value="3">Jantar</CpsToggleButton>
  </CpsRadioGroup>
);
```

## Tamanhos

Use o atributo `size` para alterar o tamanho do campo.

```html preview
<cps-toggle-button size="small" checked>Pequeno 1</cps-toggle-button>
&nbsp;
<cps-toggle-button size="small">Pequeno 2</cps-toggle-button>
&nbsp;
<cps-toggle-button size="small">Pequeno 3</cps-toggle-button>

<br /><br />

<cps-toggle-button size="medium" checked>Médio 1</cps-toggle-button>
&nbsp;
<cps-toggle-button size="medium">Médio 2</cps-toggle-button>
&nbsp;
<cps-toggle-button size="medium">Médio 3</cps-toggle-button>

<br /><br />

<cps-toggle-button size="large" checked>Grande 1</cps-toggle-button>
&nbsp;
<cps-toggle-button size="large">Grande 2</cps-toggle-button>
&nbsp;
<cps-toggle-button size="large">Grande 3</cps-toggle-button>
```

```jsx react
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <>
    <CpsToggleButton size="small" checked>
      Pequeno 1
    </CpsToggleButton>
    {'\u00A0'}
    <CpsToggleButton size="small">Pequeno 2</CpsToggleButton>
    {'\u00A0'}
    <CpsToggleButton size="small">Pequeno 3</CpsToggleButton>

    <br />
    <br />

    <CpsToggleButton size="medium" checked>
      Médio 1
    </CpsToggleButton>
    {'\u00A0'}
    <CpsToggleButton size="medium">Médio 2</CpsToggleButton>
    {'\u00A0'}
    <CpsToggleButton size="medium">Médio 3</CpsToggleButton>

    <br />
    <br />

    <CpsToggleButton size="large" checked>
      Grande 1
    </CpsToggleButton>
    {'\u00A0'}
    <CpsToggleButton size="large">Grande 2</CpsToggleButton>
    {'\u00A0'}
    <CpsToggleButton size="large">Grande 3</CpsToggleButton>
  </>
);
```

?> É possível controlar o tamanho de diversos botões alternáveis de uma só vez, ao usar o atributo `size` de um [Radio Group](/componentes/radio-group) que embrulhe as opções. Confira a documentação de _radio groups_ para mais informações.

### Arredondamento dos cantos

Assim como em [Button](/componentes/button), é possível controlar o arredondamento dos cantos dos botões alternáveis alternando entre os valores `default` (o mesmo que não informar tal atributo, para manter o arredondamento padrão de `4px`), `corner` para manter a aparência retangular, mas arredondar completamente os cantos, e `full` para garantir um botão completamente circular.

```html preview
<cps-radio-group label="Qual o pequeno de sua preferência?" size="small" value="1">
  <cps-toggle-button rounded="corner" value="1">Opção 1</cps-toggle-button>
  <cps-toggle-button rounded="corner" value="2">Opção 2</cps-toggle-button>
  <cps-toggle-button rounded="corner" alue="3">Opção 3</cps-toggle-button>
</cps-radio-group>

<br />

<cps-radio-group label="Qual o médio de sua preferência?" size="medium" value="1">
  <cps-toggle-button rounded="corner" value="1">Opção 1</cps-toggle-button>
  <cps-toggle-button rounded="corner" value="2">Opção 2</cps-toggle-button>
  <cps-toggle-button rounded="corner" value="3">Opção 3</cps-toggle-button>
</cps-radio-group>

<br />

<cps-radio-group label="Qual o grande de sua preferência?" size="large" value="1">
  <cps-toggle-button rounded="corner" value="1">Opção 1</cps-toggle-button>
  <cps-toggle-button rounded="corner" value="2">Opção 2</cps-toggle-button>
  <cps-toggle-button rounded="corner" value="3">Opção 3</cps-toggle-button>
</cps-radio-group>
```

```jsx react
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <>
    <CpsRadioGroup label="Qual o pequeno de sua preferência?" size="small" value="1">
      <CpsToggleButton rounded="corner" value="1">
        Opção 1
      </CpsToggleButton>
      <CpsToggleButton rounded="corner" value="2">
        Opção 2
      </CpsToggleButton>
      <CpsToggleButton rounded="corner" alue="3">
        Opção 3
      </CpsToggleButton>
    </CpsRadioGroup>

    <br />

    <CpsRadioGroup label="Qual o médio de sua preferência?" size="medium" value="1">
      <CpsToggleButton rounded="corner" value="1">
        Opção 1
      </CpsToggleButton>
      <CpsToggleButton rounded="corner" value="2">
        Opção 2
      </CpsToggleButton>
      <CpsToggleButton rounded="corner" value="3">
        Opção 3
      </CpsToggleButton>
    </CpsRadioGroup>

    <br />

    <CpsRadioGroup label="Qual o grande de sua preferência?" size="large" value="1">
      <CpsToggleButton rounded="corner" value="1">
        Opção 1
      </CpsToggleButton>
      <CpsToggleButton rounded="corner" value="2">
        Opção 2
      </CpsToggleButton>
      <CpsToggleButton rounded="corner" value="3">
        Opção 3
      </CpsToggleButton>
    </CpsRadioGroup>
  </>
);
```

?> O arredondamento `full` é destinado à utilização em botões alternáveis individuais, não o utilize quando os botões alternáveis estiverem contidos dentro de um grupo.

### Ícones como prefixo ou sufixo

Use os _slots_ `prefix` e `suffix` para adicionar ícones.

```html preview
<cps-radio-group label="O que fazer com este produto?">
  <cps-toggle-button value="1">
    <cps-icon slot="prefix" name="archive"></cps-icon>
    Arquivar
  </cps-toggle-button>

  <cps-toggle-button value="2">
    <cps-icon slot="suffix" name="heart"></cps-icon>
    Favoritar
  </cps-toggle-button>

  <cps-toggle-button value="3">
    <cps-icon slot="prefix" name="gift"></cps-icon>
    <cps-icon slot="suffix" name="cart"></cps-icon>
    Presentar
  </cps-toggle-button>
</cps-radio-group>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <CpsRadioGroup label="O que fazer com este produto?">
    <CpsToggleButton value="1">
      <CpsIcon slot="prefix" name="archive" />
      Arquivar
    </CpsToggleButton>

    <CpsToggleButton value="2">
      <CpsIcon slot="suffix" name="heart" />
      Favoritar
    </CpsToggleButton>

    <CpsToggleButton value="3">
      <CpsIcon slot="prefix" name="gift" />
      <CpsIcon slot="suffix" name="cart" />
      Presentar
    </CpsToggleButton>
  </CpsRadioGroup>
);
```

### Somente ícones

Se você omitir o conteúdo textual de um botão alternável e inserir dentro dele somente um `<cps-icon>`, pode apresentar apenas ícones. Este tipo de _layout_, especialmente quando usado em um grupo de botões, é bem típico em barras de ferramentas de aplicações diversas (por exemplo, pense nos botões de alinhamento de texto de Microsoft Word ou Google Docs).

```html preview
<cps-radio-group label="Alinhamento do texto:" value="left">
  <cps-toggle-button value="left">
    <cps-icon name="text-align-left" label="Esquerda"></cps-icon>
  </cps-toggle-button>

  <cps-toggle-button value="center">
    <cps-icon name="text-align-center" label="Centro"></cps-icon>
  </cps-toggle-button>

  <cps-toggle-button value="right">
    <cps-icon name="text-align-right" label="Direita"></cps-icon>
  </cps-toggle-button>

  <cps-toggle-button value="justify">
    <cps-icon name="text-align-justify" label="Justificado"></cps-icon>
  </cps-toggle-button>
</cps-radio-group>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsRadioGroup } from '@cps-elements/web/react/radio-group';
import { CpsToggleButton } from '@cps-elements/web/react/toggle-button';

const App = () => (
  <CpsRadioGroup label="Alinhamento do texto:" value="left">
    <CpsToggleButton value="left">
      <CpsIcon name="text-align-left" label="Esquerda"></CpsIcon>
    </CpsToggleButton>

    <CpsToggleButton value="center">
      <CpsIcon name="text-align-center" label="Centro"></CpsIcon>
    </CpsToggleButton>

    <CpsToggleButton value="right">
      <CpsIcon name="text-align-right" label="Direita"></CpsIcon>
    </CpsToggleButton>

    <CpsToggleButton value="justify">
      <CpsIcon name="text-align-justify" label="Justificado"></CpsIcon>
    </CpsToggleButton>
  </CpsRadioGroup>
);
```

?> Certifique-se de definir um atributo `label` em cada ícone por questões de acessibilidade, para que os leitores de tela anunciem cada opção corretamente mesmo sem elas conterem um texto visível.

[component-metadata:cps-toggle-button]
