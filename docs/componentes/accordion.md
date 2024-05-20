# Accordion

[component-header:cps-accordion]

```html preview
<cps-accordion title="Informações adicionais">
  <cps-label>Conteúdo.</cps-label>
</cps-accordion>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <CpsAccordion title="Informações adicionais">
    <CpsLabel>Conteúdo.</CpsLabel>
  </CpsAccordion>
);
```

## Exemplos

### Abrir e fechar

Use o atributo `open` para definir se o _accordion_ deve ser exibido aberto ou fechado.

```html preview
<cps-accordion title="Informações adicionais" open>
  <cps-label>Conteúdo.</cps-label>
</cps-accordion>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <CpsAccordion title="Informações adicionais" open>
    <CpsLabel>Conteúdo.</CpsLabel>
  </CpsAccordion>
);
```

Sendo um atributo reativo, você pode alterar programaticamente o valor de `open` para abrir ou fechar o _accordion_.

```html preview no-vue
<div class="open-reactivity">
  <cps-button>Alternar</cps-button>

  <br />
  <br />

  <cps-accordion title="Informações adicionais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>
</div>

<script>
  const container = document.querySelector('.open-reactivity');
  const button = container.querySelector('cps-button');
  const accordion = container.querySelector('cps-accordion');

  button.addEventListener('click', () => {
    accordion.open = !accordion.open;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="open-reactivity">
      <CpsButton onClick={() => setOpen(!open)}>Alternar</CpsButton>

      <br />
      <br />

      <CpsAccordion title="Informações adicionais" open={open}>
        <CpsLabel>Conteúdo.</CpsLabel>
      </CpsAccordion>
    </div>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsAccordion } from '@cps-elements/web/components/accordion';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsLabel } from '@cps-elements/web/components/label';

  const isOpen = ref(true);

  function toggleAccordion() {
    isOpen.value = !isOpen.value;
  }
</script>

<template>
  <div class="open-reactivity">
    <cps-button @click="toggleAccordion">Alternar</cps-button>

    <br />
    <br />

    <cps-accordion title="Informações adicionais" :open="isOpen">
      <cps-label>Conteúdo.</cps-label>
    </cps-accordion>
  </div>
</template>
```

### Subtítulo

Use o atributo `subtitle` para adicionar um subtítulo ao cabeçalho do _accordion_.

```html preview
<cps-accordion title="Informações adicionais" subtitle="Leia mais conteúdo relevante aqui">
  <cps-label>Conteúdo.</cps-label>
</cps-accordion>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <CpsAccordion title="Informações adicionais" subtitle="Leia mais conteúdo relevante aqui">
    <CpsLabel>Conteúdo.</CpsLabel>
  </CpsAccordion>
);
```

### Ícone

Use o _slot_ `icon` para adicionar um ícone ao cabeçalho do _accordion_.

```html preview
<cps-accordion title="Configurações gerais" subtitle="Ajustes generalizados que valem para tudo">
  <cps-icon slot="icon" name="info"></cps-icon>
  <cps-label>Conteúdo.</cps-label>
</cps-accordion>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <CpsAccordion title="Configurações gerais" subtitle="Ajustes generalizados que valem para tudo">
    <CpsIcon slot="icon" name="info" />
    <CpsLabel>Conteúdo.</CpsLabel>
  </CpsAccordion>
);
```

### Conteúdo personalizado

Use o _slot_ padrão para adicionar conteúdo personalizado ao _accordion_. Qualquer elemento ou árvore de elementos, inclusive componentes CPS Elements, podem ser adicionados.

Para simplificar os casos mais comuns, há um `padding` padrão de `24px` no _container_ da área de conteúdo, o qual pode ser sobrescrito com estilos aplicados à parte CSS `content`.

```html preview
<cps-accordion class="styled-content" title="Desligamento do sistema" subtitle="Como as coisas devem funcionar em segundo plano" open>
  <cps-icon slot="icon" name="power"></cps-icon>

  <div>
    <div class="styled-content-item">
      <cps-label>Ao pressionar o botão de desligar estando na bateria</cps-label>
      <cps-dropdown value="1">
        <cps-option value="1">Desligar</cps-option>
        <cps-option value="2">Dormir</cps-option>
        <cps-option value="3">Hibernar</cps-option>
      </cps-dropdown>
    </div>

    <cps-separator></cps-separator>

    <div class="styled-content-item">
      <cps-label>Ao pressionar o botão de desligar estando na tomada</cps-label>
      <cps-dropdown value="2">
        <cps-option value="1">Desligar</cps-option>
        <cps-option value="2">Dormir</cps-option>
        <cps-option value="3">Hibernar</cps-option>
      </cps-dropdown>
    </div>

    <cps-separator></cps-separator>

    <div class="styled-content-item">
      <cps-label>Ao fechar a tampa estando na bateria</cps-label>
      <cps-dropdown value="1">
        <cps-option value="1">Desligar</cps-option>
        <cps-option value="2">Dormir</cps-option>
        <cps-option value="3">Hibernar</cps-option>
      </cps-dropdown>
    </div>

    <cps-separator></cps-separator>

    <div class="styled-content-item">
      <cps-label>Ao fechar a tampa estando na tomada</cps-label>
      <cps-dropdown value="2">
        <cps-option value="1">Desligar</cps-option>
        <cps-option value="2">Dormir</cps-option>
        <cps-option value="3">Hibernar</cps-option>
      </cps-dropdown>
    </div>
  </div>
</cps-accordion>

<style>
  .styled-content::part(content) {
    padding: 0;
  }

  .styled-content cps-separator {
    --spacing: 0;
  }

  .styled-content-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--cps-spacing-3) var(--cps-spacing-4);
  }
</style>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsDropdown } from '@cps-elements/web/react/dropdown';
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsLabel } from '@cps-elements/web/react/label';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSeparator } from '@cps-elements/web/react/separator';

const css = `
  .styled-content::part(content) {
    padding: 0;
  }

  .styled-content cps-separator {
    --spacing: 0;
  }

  .styled-content-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--cps-spacing-3) var(--cps-spacing-4);
  }
`;

const App = () => (
  <>
    <CpsAccordion class="styled-content" title="Desligamento do sistema" subtitle="Como as coisas devem funcionar em segundo plano" open>
      <CpsIcon slot="icon" name="power" />

      <div>
        <div className="styled-content-item">
          <CpsLabel>Ao pressionar o botão de desligar estando na bateria</CpsLabel>
          <CpsDropdown value="1">
            <CpsOption value="1">Desligar</CpsOption>
            <CpsOption value="2">Dormir</CpsOption>
            <CpsOption value="3">Hibernar</CpsOption>
          </CpsDropdown>
        </div>

        <CpsSeparator />

        <div className="styled-content-item">
          <CpsLabel>Ao pressionar o botão de desligar estando na tomada</CpsLabel>
          <CpsDropdown value="2">
            <CpsOption value="1">Desligar</CpsOption>
            <CpsOption value="2">Dormir</CpsOption>
            <CpsOption value="3">Hibernar</CpsOption>
          </CpsDropdown>
        </div>

        <CpsSeparator />

        <div className="styled-content-item">
          <CpsLabel>Ao fechar a tampa estando na bateria</CpsLabel>
          <CpsDropdown value="1">
            <CpsOption value="1">Desligar</CpsOption>
            <CpsOption value="2">Dormir</CpsOption>
            <CpsOption value="3">Hibernar</CpsOption>
          </CpsDropdown>
        </div>

        <CpsSeparator />

        <div className="styled-content-item">
          <CpsLabel>Ao fechar a tampa estando na tomada</CpsLabel>
          <CpsDropdown value="2">
            <CpsOption value="1">Desligar</CpsOption>
            <CpsOption value="2">Dormir</CpsOption>
            <CpsOption value="3">Hibernar</CpsOption>
          </CpsDropdown>
        </div>
      </div>
    </CpsAccordion>

    <style>{css}</style>
  </>
);
```

[component-metadata:cps-accordion]
