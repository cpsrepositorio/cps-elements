# Select

[component-header:cps-select]

```html preview
<cps-select>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect>
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsSelect>
);
```

?> Este componente funciona com elementos `<form>` padrão. Consulte a seção sobre [formulários](/fundamentos/formulários) para saber mais sobre submissão de formulários e validação do lado do cliente.

## Exemplos

### Rótulos

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ `label` ao invés do atributo.

```html preview
<cps-select label="Fruta preferida">
  <cps-option value="apple">Maçã</cps-option>
  <cps-option value="orange">Laranja</cps-option>
  <cps-option value="banana">Banana</cps-option>
  <cps-option value="grape">Uva</cps-option>
  <cps-option value="strawberry">Morango</cps-option>
  <cps-option value="pineapple">Abacaxi</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect label="Fruta preferida">
    <CpsOption value="apple">Maçã</CpsOption>
    <CpsOption value="orange">Laranja</CpsOption>
    <CpsOption value="banana">Banana</CpsOption>
    <CpsOption value="grape">Uva</CpsOption>
    <CpsOption value="strawberry">Morango</CpsOption>
    <CpsOption value="pineapple">Abacaxi</CpsOption>
  </CpsSelect>
);
```

### Texto de apoio

Use o atributo `help-text` para adicionar texto de apoio para auxílio ao preenchimento do campo. Para textos com HTML, use o _slot_ `help-text` ao invés do atributo.

```html preview
<cps-select label="Experiência" help-text="Por favor, nos conte seu nível com esta tecnologia.">
  <cps-option value="1">Novato</cps-option>
  <cps-option value="2">Intermediário</cps-option>
  <cps-option value="3">Avançado</cps-option>
  <cps-option value="4">Supremo</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect label="Experiência" help-text="Por favor, nos conte seu nível com esta tecnologia.">
    <CpsOption value="1">Novato</CpsOption>
    <CpsOption value="2">Intermediário</CpsOption>
    <CpsOption value="3">Avançado</CpsOption>
    <CpsOption value="4">Supremo</CpsOption>
  </CpsSelect>
);
```

### Texto de espaço reservado

Use o atributo `placeholder` para adicionar um texto de espaço reservado.

```html preview
<cps-select placeholder="Seleciona uma opção">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect placeholder="Seleciona uma opção">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsSelect>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [boas práticas de campo de lista suspensa](https://cpsrepositorio.github.io/cps-design-system/documentacao/dropdown-field.html#boas-praticas), evite utilizar apenas `placeholder` em campos de formulário, preferindo utilizar `label` juntamente com `placeholder`, visto que eles são complementares. Lembre-se que o `placeholder` não permanece visível quando uma opção já foi selecionada, o que poderia degradar a usabilidade após o preenchimento do campo.

### Limpável

Use o atributo `clearable` para exibir um botão de limpar quando o campo possui conteúdo.

```html preview
<cps-select clearable placeholder="Seleciona uma opção" value="option-1">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect clearable placeholder="Seleciona uma opção" value="option-1">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsSelect>
);
```

?> Assim como em campos de seleção nativos, este componente não permite remover a seleção de uma opção se `clearable` não for aplicado. Entretanto, não poder remover uma opção previamente escolhida pode ser incomodo para o usuário. Pondere de acordo com seu caso de uso, já que o comportamento padrão foi escolhido justamente para manter aderência ao `<select>` nativo, mas a melhor escolha para a usabilidade pode variar.

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-select placeholder="Desabilitado" disabled>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect placeholder="Desabilitado" disabled>
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsSelect>
);
```

?> Não confundir com o estado desabilitado de uma opção dentro da caixa de seleção. Para desabilitar uma opção, use o atributo `disabled` na opção desejada, conforme documentado no componente [Option](/componentes/option).

### Tamanhos

Use o atributo `size` para alterar o tamanho do campo. isto não afeta o tamanho da lista suspensa de seleção e suas opções.

```html preview
<cps-select placeholder="Pequeno" size="small">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>

<br />

<cps-select placeholder="Médio" size="medium">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>

<br />

<cps-select placeholder="Grande" size="large">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <>
    <CpsSelect placeholder="Pequeno" size="small">
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
      <CpsOption value="option-4">Opção 4</CpsOption>
      <CpsOption value="option-5">Opção 5</CpsOption>
      <CpsOption value="option-6">Opção 6</CpsOption>
    </CpsSelect>
    <br />
    <CpsSelect placeholder="Médio" size="medium">
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
      <CpsOption value="option-4">Opção 4</CpsOption>
      <CpsOption value="option-5">Opção 5</CpsOption>
      <CpsOption value="option-6">Opção 6</CpsOption>
    </CpsSelect>
    <br />
    <CpsSelect placeholder="Grande" size="large">
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
      <CpsOption value="option-4">Opção 4</CpsOption>
      <CpsOption value="option-5">Opção 5</CpsOption>
      <CpsOption value="option-6">Opção 6</CpsOption>
    </CpsSelect>
  </>
);
```

### Ícones como prefixo

Use o _slot_ `prefix` para adicionar ícone.

```html preview
<cps-select placeholder="Pequeno" size="small" clearable>
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
</cps-select>
<br />
<cps-select placeholder="Médio" size="medium" clearable>
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
</cps-select>
<br />
<cps-select placeholder="Grande" size="large" clearable>
  <cps-icon name="home" slot="prefix"></cps-icon>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
</cps-select>
```

```jsx react
import { CpsIcon, CpsOption, CpsSelect } from '@cps-elements/web/react';

const App = () => (
  <>
    <CpsSelect placeholder="Small" size="small">
      <CpsIcon name="house" slot="prefix"></CpsIcon>
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
    </CpsSelect>
    <br />
    <CpsSelect placeholder="Medium" size="medium">
      <CpsIcon name="house" slot="prefix"></CpsIcon>
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
    </CpsSelect>
    <br />
    <CpsSelect placeholder="Large" size="large">
      <CpsIcon name="house" slot="prefix"></CpsIcon>
      <CpsOption value="option-1">Opção 1</CpsOption>
      <CpsOption value="option-2">Opção 2</CpsOption>
      <CpsOption value="option-3">Opção 3</CpsOption>
    </CpsSelect>
  </>
);
```

Caso esteja usando ícones como prefixo nas opções, não ocorre sincronia automática com o ícone de prefixo da própria caixa de seleção, após selecionar uma opção. Se este comportamento for desejado, é necessário implementar a sincronia manualmente, usando o evento `cps-change`. Veja exemplo a seguir para os detalhes da implementação.

```html preview no-vue
<cps-select class="select-sync-prefix" label="Comida preferida" placeholder="Selecione uma opção" clearable>
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
</cps-select>

<script>
  const select = document.querySelector('.select-sync-prefix');

  // Escuta ao evento `cps-change` para sincronizar os prefixos.
  select.addEventListener('cps-change', event => {
    // Tenta obter o ícone de prefixo da opção selecionada.
    const optionPrefix = event.detail.option?.querySelector('cps-icon[slot="prefix"]');

    // Caso tenha encontrado o prefixo, há uma opção selecionado...
    if (optionPrefix) {
      // Tenta localizar o prefixo da própria caixa de seleção.
      let selectPrefix = select.querySelector('& > cps-icon[slot="prefix"]');

      // Se não encontrar, necessário criar um ícone.
      if (!selectPrefix) {
        // Cria um ícone de prefixo e adiciona à caixa de seleção.
        selectPrefix = document.createElement('cps-icon');
        selectPrefix.setAttribute('slot', 'prefix');
        select.prepend(selectPrefix);
      }

      // Sincroniza o nome do ícone de prefixo da caixa de seleção.
      selectPrefix.name = optionPrefix.name;
    } else {
      // Remove o prefixo da caixa de seleção se não há opção selecionada.
      select.querySelector('& > cps-icon[slot="prefix"]')?.remove();
    }
  });
</script>
```

### Agrupando opções

Use `<cps-separator>` para agrupar visualmente as opções da caixa de seleção. Você também pode usar `<cps-label>` para fornecer rótulos visuais, entretanto eles não serão anunciados pela maioria dos dispositivos assistivos, uma vez que não receberão foco durante a navegação por teclado entre os elementos da lista.

```html preview
<cps-select>
  <cps-label>Frutas</cps-label>
  <cps-option value="apple">Maçã</cps-option>
  <cps-option value="banana">Banana</cps-option>
  <cps-option value="orange">Laranja</cps-option>
  <cps-separator></cps-separator>
  <cps-label>Vegetais</cps-label>
  <cps-option value="broccoli">Brócolis</cps-option>
  <cps-option value="carrot">Cenoura</cps-option>
  <cps-option value="zucchini">Abobrinha</cps-option>
</cps-select>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';
import { CpsSeparator } from '@cps-elements/web/react/separator';

const App = () => (
  <CpsSelect>
    <CpsLabel>Frutas</CpsLabel>
    <CpsOption value="apple">Maçã</CpsOption>
    <CpsOption value="banana">Banana</CpsOption>
    <CpsOption value="orange">Laranja</CpsOption>
    <CpsSeparator></CpsSeparator>
    <CpsLabel>Vegetais</CpsLabel>
    <CpsOption value="broccoli">Brócolis</CpsOption>
    <CpsOption value="carrot">Cenoura</CpsOption>
    <CpsOption value="zucchini">Abobrinha</CpsOption>
  </CpsSelect>
);
```

### Posicionamento

Use o atributo `placement` para definir o posicionamento preferido da lista suspensa de seleção. Observe que o posicionamento real pode variar para garantir que o painel permaneça na janela de visualização. Os posicionamentos válidos são `top` e `bottom`.

```html preview
<cps-select placement="top" placeholder="Se houver espaço, eu prefiro abrir para cima...">
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2">Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6">Opção 6</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect placement="top" placeholder="Se houver espaço, eu prefiro abrir para cima...">
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2">Opção 2</CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6">Opção 6</CpsOption>
  </CpsSelect>
);
```

?> Por baixo dos panos, este componente utiliza o `<cps-flyout>` para exibir a lista suspensa de seleção. Consulte a documentação do [Flyout](/utilitários/flyout) para saber mais sobre posicionamento preferido e giro automático.

### Seleção múltipla

Use o atributo `multiple` para permitir a seleção de múltiplas opções. É uma boa prática usar `clearable` quando esta opção está habilitada. Para definir múltiplos valores de uma vez, defina `value` como uma lista de valores separados por espaço.

```html preview
<cps-select label="Competências" placeholder="Selecione uma ou mais opções" multiple clearable hoist>
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
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect label="Competências" placeholder="Selecione uma ou mais opções" multiple clearable>
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
  </CpsSelect>
);
```

### Definindo valores iniciais

Use o atributo `value` para definir o valor inicial do campo, ou seja, qual opção começa selecionada. Quando `multiple` é habilitado, use valores separados por espaço para selecionar mais de uma opção.

```html preview
<cps-select
  label="Competências"
  placeholder="Selecione uma ou mais opções"
  value="skill-1 skill-2 skill-4 skill-7 skill-8"
  multiple
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
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect
    label="Competências"
    placeholder="Selecione uma ou mais opções"
    value="skill-1 skill-2 skill-4 skill-7 skill-8"
    multiple
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
  </CpsSelect>
);
```

### Limite de múltiplas opções visíveis

Observe que seleções múltiplas podem não caber na caixa de seleção, quebrando para outra linha e aumentando a altura do componente. Isto pode ser minimizado, limitando-se o número máximo de opções selecionadas em exibição na caixa de seleção.

Use o atributo `max-options-visible` para controlar o número máximo de opções selecionadas a serem exibidas de uma vez. Veja abaixo um limite máximo de `3` opções definido.

```html preview
<cps-select
  label="Competências"
  placeholder="Selecione uma ou mais opções"
  value="skill-1 skill-2 skill-4 skill-7 skill-8"
  multiple
  clearable
  max-options-visible="3"
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
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect
    label="Competências"
    placeholder="Selecione uma ou mais opções"
    value="skill-1 skill-2 skill-4 skill-7 skill-8"
    multiple
    clearable
    maxOptionsVisible={3}
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
  </CpsSelect>
);
```

[component-metadata:cps-select]
