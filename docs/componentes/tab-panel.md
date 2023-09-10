# Tab Panel

[component-header:cps-tab-panel]

```html preview
<cps-tab-group>
  <cps-tab-item slot="nav" panel="general">Geral</cps-tab-item>
  <cps-tab-item slot="nav" panel="detail">Detalhes</cps-tab-item>
  <cps-tab-item slot="nav" panel="settings">Configurações</cps-tab-item>
  <cps-tab-item slot="nav" panel="disabled" disabled>Desabilitado</cps-tab-item>

  <cps-tab-panel name="general">Este é o painel da aba geral.</cps-tab-panel>
  <cps-tab-panel name="detail">Este é o painel da aba de detalhes.</cps-tab-panel>
  <cps-tab-panel name="settings">Este é o painel da aba de configurações.</cps-tab-panel>
  <cps-tab-panel name="disabled">Este é o painel da aba desabilitada.</cps-tab-panel>
</cps-tab-group>
```

```jsx react
import { CpsTabGroup } from '@cps-elements/web/react/tab-group';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const App = () => (
  <CpsTabGroup>
    <CpsTabItem slot="nav" panel="general">
      Geral
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="detail">
      Detalhes
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="settings">
      Configurações
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="disabled" disabled>
      Desabilitado
    </CpsTabItem>

    <CpsTabPanel name="general">Este é o painel da aba geral.</CpsTabPanel>
    <CpsTabPanel name="detail">Este é o painel da aba de detalhes.</CpsTabPanel>
    <CpsTabPanel name="settings">Este é o painel da aba de configurações.</CpsTabPanel>
    <CpsTabPanel name="disabled">Este é o painel da aba desabilitada.</CpsTabPanel>
  </CpsTabGroup>
);
```

?> Painéis são concebidos para uso em grupos. Exemplos completos de utilização podem ser encontrados em [Tab Group](/componentes/tab-group).

## Exemplos

### Visibilidade

Apenas painéis selecionados são visíveis. É possível forçar a visibilidade de um painel usando seu atributo `selected`.

```html preview
<cps-tab-panel name="general" selected>Este painel está visível de maneira forçada.</cps-tab-panel>
<cps-tab-panel name="detail">Este painel não está visível.</cps-tab-panel>
```

```jsx react
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const App = () => (
  <>
    <CpsTabPanel name="general" selected>
      Este painel está visível de maneira forçada.
    </CpsTabPanel>
    <CpsTabPanel name="detail">Este painel não está visível.</CpsTabPanel>
  </>
);
```

Embora tecnicamente possível, não é recomendado forçar a visibilidade de um painel de abas. Em geral, basta utilizá-los corretamente dentro de um [Tab Group](/componentes/tab-group), como exibido no primeiro exemplo desta página, vinculando cada `<cps-tab-item>` com seu respectivo `<cps-tab-panel>`, através dos atributos `panel` e `name`, respectivamente.

?> Por padrão, painéis são renderizados no HTML mesmo quando não estão visíveis, sendo escondidos visualmente através de CSS, e de leitores de tela através de `aria-hidden`. Isto garante que o painel possa ser apresentado imediatamente quando selecionado, sem atrasos de renderização, além de proporcionar melhor semântica.<br><br>Caso você prefira deixar seus painéis vazios e carregá-los assincronamente, simplesmente não informe os conteúdos internos dos painéis não visíveis por padrão. Neste caso, você deverá implementar a lógica de carregamento assíncrono conforme suas necessidades, usando o evento `cps-tab-show` do [Tab Group](/componentes/tab-group).

### Personalização

Assim como com a personalização dos [Tab Item](/componentes/tab-item), é possível personalizar o painel através de modificação das propriedades CSS disponibilizadas. Para resultados visualmente condizentes, recomenda-se sincronizar as propriedades CSS do painel com as do item de navegação selecionado correspondente.

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

[component-metadata:cps-tab-panel]

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

  .custom-selected-colors cps-tab-panel {
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
