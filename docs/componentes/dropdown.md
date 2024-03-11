# Dropdown

[component-header:cps-dropdown]

```html preview
<cps-dropdown placeholder="Selecione uma opção">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <CpsDropdown placeholder="Selecione uma opção">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsDropdown>
);
```

?> Este componente funciona de forma similar ao [`<cps-select>`](/componentes/select), porém com o elemento base visualmente condizente com [`<cps-button>`]((/componentes/button)), facilitando cenários de uso do tipo _dropdown button_.

## Exemplos

### Texto de espaço reservado

Use o atributo `placeholder` para adicionar um texto de espaço reservado, o qual representa o texto padrão apresentado no botão enquanto uma opção do menu não estiver selecionada.

```html preview
<cps-dropdown placeholder="Selecione uma opção">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <CpsDropdown placeholder="Selecione uma opção">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsDropdown>
);
```

### Texto de espaço reservado permanente

Use o atributo `keep-placeholder` para definir que o texto de espaço reservado sempre permaneça em exibição, mesmo após uma opção ser selecionada.

```html preview
<cps-dropdown keep-placeholder placeholder="Selecione uma opção">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <CpsDropdown keep-placeholder placeholder="Selecione uma opção">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsDropdown>
);
```

### Limpável

Use o atributo `clearable` para exibir um botão de limpar quando o campo possui conteúdo.

```html preview
<cps-dropdown clearable placeholder="Selecione uma opção" value="option-1">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <CpsDropdown clearable placeholder="Selecione uma opção" value="option-1">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsDropdown>
);
```

?> Assim como em campos de seleção nativos, este componente não permite remover a seleção de uma opção se `clearable` não for aplicado. Entretanto, não poder remover uma opção previamente escolhida pode ser incomodo para o usuário. Pondere de acordo com seu caso de uso, já que o comportamento padrão foi escolhido justamente para manter aderência ao `<select>` nativo, mas a melhor escolha para a usabilidade pode variar.

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-dropdown placeholder="Desabilitado" disabled>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <CpsDropdown placeholder="Desabilitado" disabled>
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsDropdown>
);
```

?> Não confundir com o estado desabilitado de uma opção dentro do _dropdown_. Para desabilitar uma opção, use o atributo `disabled` na opção desejada, conforme documentado no componente [Option](/componentes/option).

### Tamanhos

Use o atributo `size` para alterar o tamanho do campo. isto não afeta o tamanho da lista suspensa de seleção e suas opções.

```html preview
<cps-dropdown placeholder="Pequeno" size="small">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>

<br /><br />

<cps-dropdown placeholder="Médio" size="medium">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>

<br /><br />

<cps-dropdown placeholder="Grande" size="large">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <>
    <CpsDropdown placeholder="Pequeno" size="small">
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
      <CpsOption value="option-4">Opção 4</CpsOption>
      <CpsOption value="option-5">Opção 5</CpsOption>
      <CpsOption value="option-6">Opção 6</CpsOption>
    </CpsDropdown>

    <br /><br />

    <CpsDropdown placeholder="Médio" size="medium">
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
      <CpsOption value="option-4">Opção 4</CpsOption>
      <CpsOption value="option-5">Opção 5</CpsOption>
      <CpsOption value="option-6">Opção 6</CpsOption>
    </CpsDropdown>

    <br /><br />

    <CpsDropdown placeholder="Grande" size="large">
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
      <CpsOption value="option-4">Opção 4</CpsOption>
      <CpsOption value="option-5">Opção 5</CpsOption>
      <CpsOption value="option-6">Opção 6</CpsOption>
    </CpsDropdown>
  </>
);
```

### Ícones como prefixo

Use o _slot_ `prefix` para adicionar ícone.

```html preview
<cps-dropdown placeholder="Pequeno" size="small" clearable>
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
</cps-dropdown>

<br /><br />

<cps-dropdown placeholder="Médio" size="medium" clearable>
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
</cps-dropdown>

<br /><br />

<cps-dropdown placeholder="Grande" size="large" clearable>
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsIcon, CpsOption, CpsDropdown } from '@cps-elements/web/react';

const App = () => (
  <>
    <CpsDropdown placeholder="Small" size="small">
      <CpsIcon name="house" slot="prefix"></CpsIcon>
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
    </CpsDropdown>

    <br /><br />

    <CpsDropdown placeholder="Medium" size="medium">
      <CpsIcon name="house" slot="prefix"></CpsIcon>
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
    </CpsDropdown>

    <br /><br />

    <CpsDropdown placeholder="Large" size="large">
      <CpsIcon name="house" slot="prefix"></CpsIcon>
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
    </CpsDropdown>
  </>
);
```

Caso esteja usando ícones como prefixo nas opções, não há sincronia automática com o ícone do próprio _dropdown_ após selecionar uma opção. Se este comportamento for desejado, é necessário implementar a sincronia manualmente, usando o evento `cps-change`. Veja exemplo a seguir para os detalhes da implementação.

```html preview no-vue
<cps-dropdown class="dropdown-sync-prefix" placeholder="Comida preferida" clearable>
  <cps-option value="vegetables">
    <cps-icon slot="prefix" name="food-carrot-fill"></cps-icon>
    Legumes
  </cps-option>
  <cps-option value="fruits">
    <cps-icon slot="prefix" name="food-apple-fill"></cps-icon>
    Frutas
  </cps-option>
  <cps-option value="fish">
    <cps-icon slot="prefix" name="food-fish-fill"></cps-icon>
    Peixe
  </cps-option>
  <cps-option value="chicken">
    <cps-icon slot="prefix" name="food-chicken-leg-fill"></cps-icon>
    Frango
  </cps-option>
  <cps-option value="pizza">
    <cps-icon slot="prefix" name="food-pizza-fill"></cps-icon>
    Pizza
  </cps-option>
</cps-dropdown>

<script>
  const dropdown = document.querySelector('.dropdown-sync-prefix');

  // Escuta ao evento `cps-change` para sincronizar os prefixos.
  dropdown.addEventListener('cps-change', event => {
    // Tenta obter o ícone de prefixo da opção selecionada.
    const optionPrefix = event.detail.option?.querySelector('cps-icon[slot="prefix"]');

    // Caso tenha encontrado o prefixo, há uma opção selecionado...
    if (optionPrefix) {
      // Tenta localizar o prefixo do próprio dropdown.
      let dropdownPrefix = dropdown.querySelector('& > cps-icon[slot="prefix"]');

      // Se não encontrar, necessário criar um ícone.
      if (!dropdownPrefix) {
        // Cria um ícone de prefixo e adiciona ao dropdown.
        dropdownPrefix = document.createElement('cps-icon');
        dropdownPrefix.setAttribute('slot', 'prefix');
        dropdown.prepend(dropdownPrefix);
      }

      // Sincroniza o nome do ícone de prefixo do dropdown.
      dropdownPrefix.name = optionPrefix.name;
    } else {
      // Remove o prefixo do dropdown se não há opção selecionada.
      dropdown.querySelector('& > cps-icon[slot="prefix"]')?.remove();
    }
  });
</script>
```

### Agrupando opções

Use `<cps-separator>` para agrupar visualmente as opções do _dropdown_. Você também pode usar `<cps-label>` para fornecer rótulos visuais, entretanto eles não serão anunciados pela maioria dos dispositivos assistivos, uma vez que não receberão foco durante a navegação por teclado entre os elementos da lista.

```html preview
<cps-dropdown placeholder="Comida saudável preferida" clearable>
  <cps-label>Frutas</cps-label>
  <cps-option value="apple">Maçã</cps-option>
  <cps-option value="banana">Banana</cps-option>
  <cps-option value="orange">Laranja</cps-option>
  <cps-separator></cps-separator>
  <cps-label>Vegetais</cps-label>
  <cps-option value="broccoli">Brócolis</cps-option>
  <cps-option value="carrot">Cenoura</cps-option>
  <cps-option value="zucchini">Abobrinha</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => (
  <CpsDropdown placeholder="Comida saudável preferida" clearable>
    <CpsLabel>Frutas</CpsLabel>
    <CpsOption value="apple">Maçã</CpsOption>
    <CpsOption value="banana">Banana</CpsOption>
    <CpsOption value="orange">Laranja</CpsOption>
    <CpsSeparator></CpsSeparator>
    <CpsLabel>Vegetais</CpsLabel>
    <CpsOption value="broccoli">Brócolis</CpsOption>
    <CpsOption value="carrot">Cenoura</CpsOption>
    <CpsOption value="zucchini">Abobrinha</CpsOption>
  </CpsDropdown>
);
```

### Posicionamento

Use o atributo `placement` para definir o posicionamento preferido da lista suspensa de seleção. Observe que o posicionamento real pode variar para garantir que o painel permaneça na janela de visualização. Os posicionamentos válidos são `top` e `bottom`.

```html preview
<cps-dropdown placement="top" placeholder="Se houver espaço, eu prefiro abrir para cima...">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <CpsDropdown placement="top" placeholder="Se houver espaço, eu prefiro abrir para cima...">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsDropdown>
);
```

?> Por baixo dos panos, este componente utiliza o `<cps-flyout>` para exibir a lista suspensa de seleção. Consulte a documentação do [Flyout](/utilitários/flyout) para saber mais sobre posicionamento preferido e giro automático.

### Definindo valores iniciais

Use o atributo `value` para definir o valor inicial do campo, ou seja, qual opção começa selecionada.

```html preview
<cps-dropdown
  placeholder="Selecione uma opção"
  value="skill-2"
  clearable
>
  <cps-option value="skill-1">Comunicação</cps-option>
  <cps-option value="skill-2">Trabalho em equipe</cps-option>
  <cps-option value="skill-3">Criatividade</cps-option>
  <cps-option value="skill-4">Liderança</cps-option>
  <cps-option value="skill-5">Resolução de problemas</cps-option>
  <cps-option value="skill-6">Pensamento crítico</cps-option>
  <cps-option value="skill-7">Adaptabilidade</cps-option>
  <cps-option value="skill-8">Empatia</cps-option>
  <cps-option value="skill-9">Gestão de tempo</cps-option>
  <cps-option value="skill-10">Negociação</cps-option>
</cps-dropdown>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';

const App = () => (
  <CpsDropdown
    placeholder="Selecione uma opção"
    value="skill-2"
    clearable
  >
    <CpsOption value="skill-1">Comunicação</CpsOption>
    <CpsOption value="skill-2">Trabalho em equipe</CpsOption>
    <CpsOption value="skill-3">Criatividade</CpsOption>
    <CpsOption value="skill-4">Liderança</CpsOption>
    <CpsOption value="skill-5">Resolução de problemas</CpsOption>
    <CpsOption value="skill-6">Pensamento crítico</CpsOption>
    <CpsOption value="skill-7">Adaptabilidade</CpsOption>
    <CpsOption value="skill-8">Empatia</CpsOption>
    <CpsOption value="skill-9">Gestão de tempo</CpsOption>
    <CpsOption value="skill-10">Negociação</CpsOption>
  </CpsDropdown>
);
```

[component-metadata:cps-dropdown]
