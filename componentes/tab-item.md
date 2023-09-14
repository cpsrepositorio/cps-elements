# Tab Item

[component-header:cps-tab-item]

```html preview
<div class="tab-items">
  <cps-tab-item>Aba</cps-tab-item>
  <cps-tab-item>
    <cps-icon slot="prefix" name="heart"></cps-icon>
    Com ícone
  </cps-tab-item>
  <cps-tab-item selected>Selecionada</cps-tab-item>
  <cps-tab-item closable>Fechável</cps-tab-item>
  <cps-tab-item disabled>Desabilitada</cps-tab-item>
</div>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';

const App = () => (
  <div className="tab-items">
    <CpsTabItem>Aba</CpsTabItem>
    <CpsTabItem>
      <CpsIcon slot="prefix" name="heart" />
      Com ícone
    </CpsTabItem>
    <CpsTabItem selected>Selecionada</CpsTabItem>
    <CpsTabItem closable>Fechável</CpsTabItem>
    <CpsTabItem disabled>Desabilitada</CpsTabItem>
  </div>
);
```

?> Abas são concebidas para uso em grupos. Exemplos completos de utilização podem ser encontrados em [Tab Group](/componentes/tab-group).

## Exemplos

### Posicionamento

Use o atributo `placement` para definir o posicionamento de renderização da aba, especialmente útil quando em conjunto com o mesmo atributo de um [Tab Group](/componentes/tab-group), para que ambos sejam renderizados de forma coerente.

```html preview
<div class="tab-items tab-items--top">
  <cps-tab-item placement="top">Aba</cps-tab-item>
  <cps-tab-item placement="top">
    <cps-icon slot="prefix" name="heart"></cps-icon>
    Com ícone
  </cps-tab-item>
  <cps-tab-item placement="top" selected>Selecionada</cps-tab-item>
  <cps-tab-item placement="top" closable>Fechável</cps-tab-item>
  <cps-tab-item placement="top" disabled>Desabilitada</cps-tab-item>
</div>

<div class="tab-items tab-items--start">
  <cps-tab-item placement="start">Aba</cps-tab-item>
  <cps-tab-item placement="start">
    <cps-icon slot="prefix" name="heart"></cps-icon>
    Com ícone
  </cps-tab-item>
  <cps-tab-item placement="start" selected>Selecionada</cps-tab-item>
  <cps-tab-item placement="start" closable>Fechável</cps-tab-item>
  <cps-tab-item placement="start" disabled>Desabilitada</cps-tab-item>
</div>

<div class="tab-items tab-items--end">
  <cps-tab-item placement="end">Aba</cps-tab-item>
  <cps-tab-item placement="end">
    <cps-icon slot="prefix" name="heart"></cps-icon>
    Com ícone
  </cps-tab-item>
  <cps-tab-item placement="end" selected>Selecionada</cps-tab-item>
  <cps-tab-item placement="end" closable>Fechável</cps-tab-item>
  <cps-tab-item placement="end" disabled>Desabilitada</cps-tab-item>
</div>

<div class="tab-items tab-items--bottom">
  <cps-tab-item placement="bottom">Aba</cps-tab-item>
  <cps-tab-item placement="bottom">
    <cps-icon slot="prefix" name="heart"></cps-icon>
    Com ícone
  </cps-tab-item>
  <cps-tab-item placement="bottom" selected>Selecionada</cps-tab-item>
  <cps-tab-item placement="bottom" closable>Fechável</cps-tab-item>
  <cps-tab-item placement="bottom" disabled>Desabilitada</cps-tab-item>
</div>
```

### Seleção

Use o atributo `selected` para marcar a aba como selecionada. Individualmente, isto apenas modifica a aparência da aba para a estética de uma aba selecionada. Para que a ação de seleção efetivamente ocorra, e que diferentes painéis sejam ativados para cada aba, coloque-os dentro de um [Tab Group](/componentes/tab-group).

```html preview
<div class="selected-sample">
  <div class="tab-items">
    <cps-tab-item selected>Selecionada</cps-tab-item>
    <cps-tab-item>Outra aba</cps-tab-item>
    <cps-tab-item>Mais uma</cps-tab-item>
  </div>
  <cps-tab-panel selected>Exemplo de conteúdo.</cps-tab-panel>
</div>
```

```jsx react
import { CpsTabItem } from '@cps-elements/web/react/tab-item';
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const App = () => (
  <div className="selected-sample">
    <div className="tab-items">
      <CpsTabItem selected>Selecionada</CpsTabItem>
      <CpsTabItem>Outra aba</CpsTabItem>
      <CpsTabItem>Mais uma</CpsTabItem>
    </div>
    <CpsTabPanel selected>Exemplo de conteúdo.</CpsTabPanel>
  </div>
);
```

A cor de fundo e de borda da aba selecionada deve idealmente ser equivalente à cor de fundo do painel relacionado à aba, o que é garantido automaticamente quando usadas em conjunto com [Tab Group](/componentes/tab-group). Entretanto, caso você esteja personalizando a aparência das abas, ou mesmo as utilizando de forma independente por alguma razão, pode personalizar tais cores através das variáveis CSS `--selected-background` e `--selected-border`.

```html preview
<div class="custom-selected-colors">
  <div class="tab-items">
    <cps-tab-item selected>Selecionada</cps-tab-item>
    <cps-tab-item>Outra aba</cps-tab-item>
    <cps-tab-item>Mais uma</cps-tab-item>
  </div>
  <cps-tab-panel selected>Exemplo de conteúdo.</cps-tab-panel>
</div>

<style>
  .custom-selected-colors cps-tab-item {
    --selected-border: #cd86ab;
    --selected-background: #ffe0f1;
  }

  .custom-selected-colors cps-tab-panel {
    --border-color: #cd86ab;
    --background: #ffe0f1;
  }

  .custom-selected-colors .tab-items {
    border-color: #cd86ab;
    background: #f7b6d9;
  }
</style>
```

```jsx react
import { CpsTabItem } from '@cps-elements/web/react/tab-item';
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const css = `
  .custom-selected-colors cps-tab-item {
    --selected-border: #cd86ab;
    --selected-background: #ffe0f1;
  }

  .custom-selected-colors cps-tab-panel {
    --border-color: #cd86ab;
    --background: #ffe0f1;
  }

  .custom-selected-colors .tab-items {
    border-color: #cd86ab;
    background: #f7b6d9;
  }
`;

const App = () => (
  <>
    <div className="custom-selected-colors">
      <div className="tab-items">
        <CpsTabItem selected>Selecionada</CpsTabItem>
        <CpsTabItem>Outra aba</CpsTabItem>
        <CpsTabItem>Mais uma</CpsTabItem>
      </div>
      <CpsTabPanel selected>Exemplo de conteúdo.</CpsTabPanel>
    </div>

    <style>{css}</style>
  </>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [variações de _tab bar_](https://cpsrepositorio.github.io/cps-design-system/documentacao/tab-bar.html#variacoes), só personalize usando outros fundos neutros da própria paleta de [cores](/variáveis-de-estilo/cores) oferecidas por esta biblioteca. O exemplo acima apresentado é um extremo proposital, para situações que não exigem tal aderência.

### Ícone como prefixo

Use o _slot_ `prefix` para adicionar um ícone antes do conteúdo principal.

```html preview
<div class="tab-items">
  <cps-tab-item>
    <cps-icon slot="prefix" name="settings-fill"></cps-icon>
    Configurações
  </cps-tab-item>
  <cps-tab-item selected>
    <cps-icon slot="prefix" name="heart"></cps-icon>
    Favoritos
  </cps-tab-item>
</div>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';

const App = () => (
  <div className="tab-items">
    <CpsTabItem>
      <CpsIcon slot="prefix" name="settings-fill" />
      Configurações
    </CpsTabItem>
    <CpsTabItem selected>
      <CpsIcon slot="prefix" name="heart" />
      Favoritos
    </CpsTabItem>
  </div>
);
```

### Fechável

Use o atributo `closable` para exibir um botão de fechar que oculta a notificação quando clicado.

```html preview no-vue
<div class="tab-items closeable-items">
  <cps-tab-item closable>Fechável 1</cps-tab-item>
  <cps-tab-item closable selected>Fechável 2</cps-tab-item>
  <cps-tab-item closable>Fechável 3</cps-tab-item>
  <cps-tab-item closable>Fechável 4</cps-tab-item>
</div>

<script>
  const tabItems = document.querySelectorAll('.closeable-items cps-tab-item');
  for (const item of tabItems) {
    item.addEventListener('cps-close', function () {
      this.hidden = true;
      setTimeout(() => (this.hidden = false), 2000);
    });
  }
</script>
```

```jsx react
import { useState } from 'react';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';

const App = () => {
  const [isHidden1, setHidden1] = useState(false);
  const [isHidden2, setHidden2] = useState(false);
  const [isHidden3, setHidden3] = useState(false);
  const [isHidden4, setHidden4] = useState(false);

  function handleClose(method) {
    method(true);
    setTimeout(() => method(false), 2000);
  }

  return (
    <CpsTabItem closable onCpsClose={() => handleClose(setHidden1)} hidden={isHidden1}>
      Fechável 1
    </CpsTabItem>
    <CpsTabItem closable selected onCpsClose={() => handleClose(setHidden2)} hidden={isHidden2}>
      Fechável 2
    </CpsTabItem>
    <CpsTabItem closable onCpsClose={() => handleClose(setHidden3)} hidden={isHidden3}>
      Fechável 3
    </CpsTabItem>
    <CpsTabItem closable onCpsClose={() => handleClose(setHidden4)} hidden={isHidden4}>
      Fechável 4
    </CpsTabItem>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsTabItem } from '@cps-elements/web/components/tab-item';

  const isHidden1 = ref(false);
  const isHidden2 = ref(false);
  const isHidden3 = ref(false);
  const isHidden4 = ref(false);

  const onClose = item => {
    item.value = true;
    setTimeout(() => (item.value = false), 2000);
  };
</script>

<template>
  <cps-tab-item :hidden="isHidden1" closable @cps-close="onClose(isHidden1)">Fechável 1</cps-tab-item>
  <cps-tab-item :hidden="isHidden2" closable selected @cps-close="onClose(isHidden2)">Fechável 2</cps-tab-item>
  <cps-tab-item :hidden="isHidden3" closable @cps-close="onClose(isHidden3)">Fechável 3</cps-tab-item>
  <cps-tab-item :hidden="isHidden4" closable @cps-close="onClose(isHidden4)">Fechável 4</cps-tab-item>
</template>
```

?> Para fins de demonstração, este exemplo apenas esconde e mostra cada aba novamente após 2 segundos. A lógica efetiva do que fazer após interceptar o evento `cps-close` é de responsabilidade do desenvolvedor, visto que manipulação do painel de aba atrelado à aba sendo fechada pode depender das necessidades específicas de cada caso.

### Estado desabilitado

Use o atributo `disabled` para desabilitar a aba. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<div class="tab-items">
  <cps-tab-item disabled>Aba desabilitada</cps-tab-item>
</div>
```

```jsx react
import { CpsTabItem } from '@cps-elements/web/react/tab-item';

const App = () => (
  <div className="tab-items">
    <CpsTabItem disabled>Aba desabilitada</CpsTabItem>
  </div>
);
```

[component-metadata:cps-tab-item]

<style>
  .tab-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    border: 1px solid var(--cps-color-stroke-primary);
    border-radius: 0.375rem 0.375rem 0 0;
    background: var(--cps-color-background-solid-primary);
    padding: 0.5rem 0.5rem 0;
  }

  .selected-sample cps-tab-panel,
  .custom-selected-colors cps-tab-panel {
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .tab-items--top,
  .tab-items--start,
  .tab-items--end {
    margin-bottom: 1rem;
  }

  .tab-items--top {
    max-width: max-content;
  }

  .tab-items--start {
    flex-direction: column;
    border-radius: 0.375rem 0 0 0.375rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    max-width: max-content;
  }

  .tab-items--end {
    flex-direction: column;
    border-radius: 0 0 0.375rem 0;
    padding: 0.5rem 0.5rem 0.5rem 0;
    max-width: max-content;
  }

  .tab-items--bottom {
    border-radius: 0 0 0.375rem 0.375rem;
    padding: 0 0.5rem 0.5rem;
    max-width: max-content;
  }
</style>
