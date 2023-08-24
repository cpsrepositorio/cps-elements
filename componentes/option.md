# Option

[component-header:cps-option]

```html preview
<cps-select value="option-1">
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

Este documento foca nos poucos recursos independentes do próprio componente `cps-option`. Para mais informações sobre sua utilização típica dentro de caixas de seleção, consulte a [documentação do componente `cps-select`](/componentes/select).

## Exemplos

### Estado desabilitado

Use o atributo `disabled` para desabilitar uma opção. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-select>
  <cps-option value="option-1">Opção 1</cps-option>
  <cps-option value="option-2" disabled>Opção 2</cps-option>
  <cps-option value="option-3">Opção 3</cps-option>
  <cps-option value="option-4">Opção 4</cps-option>
  <cps-option value="option-5">Opção 5</cps-option>
  <cps-option value="option-6" disabled>Opção 6</cps-option>
</cps-select>
```

```jsx react
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect>
    <CpsOption value="option-1">Opção 1</CpsOption>
    <CpsOption value="option-2" disabled>
      Opção 2
    </CpsOption>
    <CpsOption value="option-3">Opção 3</CpsOption>
    <CpsOption value="option-4">Opção 4</CpsOption>
    <CpsOption value="option-5">Opção 5</CpsOption>
    <CpsOption value="option-6" disabled>
      Opção 6
    </CpsOption>
  </CpsSelect>
);
```

### Ícones como prefixo ou sufixo

Use os _slots_ `prefix` e `suffix` para adicionar ícones.

```html preview
<cps-select label="Canal de comunicação" placeholder="Escolha uma opção">
  <cps-option value="email">
    <cps-icon slot="prefix" name="mail"></cps-icon>
    E-mail
    <cps-icon slot="suffix" name="animal-turtle"></cps-icon>
  </cps-option>

  <cps-option value="phone">
    <cps-icon slot="prefix" name="phone"></cps-icon>
    Telefone
    <cps-icon slot="suffix" name="accessibility"></cps-icon>
  </cps-option>

  <cps-option value="chat">
    <cps-icon slot="prefix" name="chat"></cps-icon>
    Bate-papo
    <cps-icon slot="suffix" name="rocket-fill"></cps-icon>
  </cps-option>
</cps-select>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const App = () => (
  <CpsSelect label="Canal de comunicação" placeholder="Escolha uma opção">
    <CpsOption value="email">
      <CpsIcon slot="prefix" name="mail"></CpsIcon>
      E-mail
      <CpsIcon slot="suffix" name="animal-turtle"></CpsIcon>
    </CpsOption>

    <CpsOption value="phone">
      <CpsIcon slot="prefix" name="phone"></CpsIcon>
      Telefone
      <CpsIcon slot="suffix" name="accessibility"></CpsIcon>
    </CpsOption>

    <CpsOption value="chat">
      <CpsIcon slot="prefix" name="chat"></CpsIcon>
      Bate-papo
      <CpsIcon slot="suffix" name="rocket-fill"></CpsIcon>
    </CpsOption>
  </CpsSelect>
);
```

[component-metadata:cps-option]
