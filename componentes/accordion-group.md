# Accordion Group

[component-header:cps-accordion-group]

```html preview
<cps-accordion-group>
  <cps-accordion title="Dados pessoais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Endereço">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Informações adicionais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>
</cps-accordion-group>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsAccordionGroup } from '@cps-elements/web/react/accordion-group';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <CpsAccordionGroup>
    <CpsAccordion title="Dados pessoais">
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>

    <CpsAccordion title="Endereço">
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>

    <CpsAccordion title="Informações adicionais">
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>
  </CpsAccordionGroup>
);
```

## Exemplos

### Item aberto inicialmente

Para definir um item aberto inicialmente, use o atributo `open` no próprio `cps-accordion` desejado. O grupo de _accordions_ controla a operação de um item aberto por vez somente durante interações do usuário posteriores à exibição inicial.

```html preview
<cps-accordion-group>
  <cps-accordion title="Dados pessoais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Endereço" open>
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Informações adicionais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsAccordionGroup } from '@cps-elements/web/react/accordion-group';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <CpsAccordionGroup>
    <CpsAccordion title="Dados pessoais">
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>

    <CpsAccordion title="Endereço" open>
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>

    <CpsAccordion title="Informações adicionais">
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>
  </CpsAccordionGroup>
);
```

### Múltiplos itens abertos

Use o atributo `multiple` para permitir que múltiplos itens sejam abertos simultaneamente. Neste caso, o grupo de _accordions_ não controla a operação de um item aberto por vez, o que é exatamente o mesmo comportamento de utilizar os _accordions_ de forma independente. Ainda assim, é útil quando se deseja garantir a semântica apropriada do código independentemente do controle dos _accordions_ abertos.

```html preview
<cps-accordion-group multiple>
  <cps-accordion title="Dados pessoais" open>
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Endereço" open>
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Informações adicionais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>
</cps-accordion-group>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsAccordionGroup } from '@cps-elements/web/react/accordion-group';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <CpsAccordionGroup multiple>
    <CpsAccordion title="Dados pessoais" open>
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>

    <CpsAccordion title="Endereço" open>
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>

    <CpsAccordion title="Informações adicionais">
      <CpsLabel>Conteúdo.</CpsLabel>
    </CpsAccordion>
  </CpsAccordionGroup>
);
```

### Distância entre os itens

Use a variável CSS `--gap` para definir a distância entre os itens do grupo de _accordions_. O valor padrão é `--cps-spacing-3`, comumente equivalente a `12px` se você não personalizou o tema padrão.

No exemplo a seguir, o espaçamento entre _accordions_ foi completamente zerado, e então o estilo dos itens foi ajustado para eliminar arredondamento de cantos e bordas duplicadas quando itens se encostam.

```html preview
<style>
  .custom-gap {
    --gap: 0;
  }

  .custom-gap cps-accordion::part(header) {
    border-radius: 0;
  }

  .custom-gap cps-accordion:not(:last-of-type) {
    margin-bottom: -1px;
  }

  .custom-gap cps-accordion:not(:last-of-type)::part(content) {
    border-bottom-color: transparent;
  }

  .custom-gap cps-accordion:not([open]):not(:last-of-type)::part(header) {
    border-bottom-color: transparent;
  }
</style>

<cps-accordion-group class="custom-gap">
  <cps-accordion title="Dados pessoais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Endereço">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>

  <cps-accordion title="Informações adicionais">
    <cps-label>Conteúdo.</cps-label>
  </cps-accordion>
</cps-accordion-group>
```

```jsx react
import { CpsAccordion } from '@cps-elements/web/react/accordion';
import { CpsAccordionGroup } from '@cps-elements/web/react/accordion-group';
import { CpsLabel } from '@cps-elements/web/react/label';

const css = `
  .custom-gap {
    --gap: 0;
  }

  .custom-gap cps-accordion::part(header) {
    border-radius: 0;
  }

  .custom-gap cps-accordion:not(:last-of-type) {
    margin-bottom: -1px;
  }

  .custom-gap cps-accordion:not(:last-of-type)::part(content) {
    border-bottom-color: transparent;
  }

  .custom-gap cps-accordion:not([open]):not(:last-of-type)::part(header) {
    border-bottom-color: transparent;
  }
`;

const App = () => (
  <>
    <CpsAccordionGroup className="custom-gap">
      <CpsAccordion title="Dados pessoais">
        <CpsLabel>Conteúdo.</CpsLabel>
      </CpsAccordion>

      <CpsAccordion title="Endereço">
        <CpsLabel>Conteúdo.</CpsLabel>
      </CpsAccordion>

      <CpsAccordion title="Informações adicionais">
        <CpsLabel>Conteúdo.</CpsLabel>
      </CpsAccordion>
    </CpsAccordionGroup>

    <style>{css}</style>
  </>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [definições de _accordion_](https://cpsrepositorio.github.io/cps-design-system/documentacao/accordion.htmls), não personalize a variável CSS `--gap` ou o estilo dos elementos internos. Estas opções estão disponíveis para situações que não exigem tal aderência.

[component-metadata:cps-accordion-group]
