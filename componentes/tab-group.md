# Aba Group

[component-header:cps-tab-group]

Grupos de abas utilizam [abas](/componentes/tab-item) e [painéis de abas](/componentes/tab-panel). Para o funcionamento correto e a melhor semântica ao mesmo tempo, cada aba deve ser inserida no slot `nav` e seu atributo `panel` deve referenciar um painel com a mesma identificação em seu `name`.

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

## Exemplos

### Sem vínculos explícitos

Grupos de abas podem ser criados sem vínculos explícitos entre abas e painéis. Neste caso, o atributo `panel` de cada aba e o `name` de cada painel podem ser omitidos, sendo que o vínculo ocorrerá especificamente através da ordem em que as abas e os painéis ocorrem no código.

```html preview
<cps-tab-group>
  <cps-tab-item slot="nav">Geral</cps-tab-item>
  <cps-tab-item slot="nav">Detalhes</cps-tab-item>
  <cps-tab-item slot="nav">Configurações</cps-tab-item>
  <cps-tab-item slot="nav" disabled>Desabilitado</cps-tab-item>

  <cps-tab-panel>Este é o painel da aba geral.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba de detalhes.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba de configurações.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba desabilitada.</cps-tab-panel>
</cps-tab-group>
```

```jsx react
import { CpsTabGroup } from '@cps-elements/web/react/tab-group';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const App = () => (
  <CpsTabGroup>
    <CpsTabItem slot="nav">Geral</CpsTabItem>
    <CpsTabItem slot="nav">Detalhes</CpsTabItem>
    <CpsTabItem slot="nav">Configurações</CpsTabItem>
    <CpsTabItem slot="nav" disabled>
      Desabilitado
    </CpsTabItem>

    <CpsTabPanel>Este é o painel da aba geral.</CpsTabPanel>
    <CpsTabPanel>Este é o painel da aba de detalhes.</CpsTabPanel>
    <CpsTabPanel>Este é o painel da aba de configurações.</CpsTabPanel>
    <CpsTabPanel>Este é o painel da aba desabilitada.</CpsTabPanel>
  </CpsTabGroup>
);
```

?> Embora possa parecer prático, este método não é recomendado pois não oferece uma semântica adequada, e dificulta legibilidade e manutenção quando há muito código dentro de cada painel.

### Abas abaixo

Use o atributo `placement` com o valor `bottom` para exibir as abas abaixo do conteúdo.

```html preview
<cps-tab-group placement="bottom">
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
  <CpsTabGroup placement="bottom">
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

### Abas no início

Use o atributo `placement` com o valor `start` para exibir as abas em uma posição inicial, antes do conteúdo. Em idiomas da esquerda para a direita (a direção típica em idiomas ocidentais), as abas serão exibidas à esquerda do conteúdo. Em idiomas da direita para a esquerda, as abas serão exibidas à direita do conteúdo.

```html preview
<cps-tab-group placement="start">
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
  <CpsTabGroup placement="start">
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

### Abas no final

Use o atributo `placement` com o valor `end` para exibir as abas em uma posição final, após o conteúdo. Em idiomas da esquerda para a direita (a direção típica em idiomas ocidentais), as abas serão exibidas à direita do conteúdo. Em idiomas da direita para a esquerda, as abas serão exibidas à esquerda do conteúdo.

```html preview
<cps-tab-group placement="end">
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
  <CpsTabGroup placement="end">
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

### Abas fecháveis

Use o atributo `closable` em uma aba para exibir um botão de fechar. Este exemplo mostra como você pode remover dinamicamente abas do DOM quando o botão de fechar é ativado.

```html preview no-vue
<cps-tab-group class="tabs-closable">
  <cps-tab-item slot="nav" panel="fixed-1">
    <cps-icon slot="prefix" name="pin"></cps-icon>
    Fixa 1
  </cps-tab-item>
  <cps-tab-item slot="nav" panel="closable-1" closable>Fechável 1</cps-tab-item>
  <cps-tab-item slot="nav" panel="fixed-2">
    <cps-icon slot="prefix" name="pin"></cps-icon>
    Fixa 2
  </cps-tab-item>
  <cps-tab-item slot="nav" panel="closable-2" closable>Fechável 2</cps-tab-item>
  <cps-tab-item slot="nav" panel="closable-3" closable>Fechável 3</cps-tab-item>

  <cps-tab-panel name="fixed-1">Este é o painel da primeira aba fixa.</cps-tab-panel>
  <cps-tab-panel name="closable-1">Este é o painel da primeira aba fechável.</cps-tab-panel>
  <cps-tab-panel name="fixed-2">Este é o painel da segunda aba fixa.</cps-tab-panel>
  <cps-tab-panel name="closable-2">Este é o painel da segunda aba fechável.</cps-tab-panel>
  <cps-tab-panel name="closable-3">Este é o painel da terceira aba fechável.</cps-tab-panel>
</cps-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('cps-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`cps-tab-panel[name="${tab.panel}"]`);

    // Seleciona a aba anterior, caso a que está sendo removida estiver selecionada.
    if (tab.selected) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove do DOM a aba e seu painel.
    tab.remove();
    panel.remove();
  });
</script>
```

?> A lógica de remoção de abas é específica para cada aplicação. Por exemplo, você pode desejar esconder o painel ao invés de remover do DOM, caso ele possa voltar à visibilidade futuramente. Você também pode preferir não selecionar a aba anterior quando uma aba selecionada é removida. Você pode até mesmo precisar persistir as mudanças na configuração de abas, localmente ou em um servidor. Use este exemplo como ponto de partida para implementar a lógica de remoção de abas que melhor se adequar às suas necessidades.

### Rolagem automática

Quando há mais abas do que espaço permite, a navegação terá rolagem automática e botões de apoio à rolagem exibidos automaticamente. Embora recomendado, caso este comportamento não seja desejado, use o atributo `no-scroll-controls`.

```html preview
<cps-tab-group>
  <cps-tab-item slot="nav" panel="tab-1">Aba 1</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-2">Aba 2</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-3">Aba 3</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-4">Aba 4</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-5">Aba 5</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-6">Aba 6</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-7">Aba 7</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-8">Aba 8</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-9">Aba 9</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-10">Aba 10</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-11">Aba 11</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-12">Aba 12</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-13">Aba 13</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-14">Aba 14</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-15">Aba 15</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-16">Aba 16</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-17">Aba 17</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-18">Aba 18</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-19">Aba 19</cps-tab-item>
  <cps-tab-item slot="nav" panel="tab-20">Aba 20</cps-tab-item>

  <cps-tab-panel name="tab-1">Este é o painel da aba 1.</cps-tab-panel>
  <cps-tab-panel name="tab-2">Este é o painel da aba 2.</cps-tab-panel>
  <cps-tab-panel name="tab-3">Este é o painel da aba 3.</cps-tab-panel>
  <cps-tab-panel name="tab-4">Este é o painel da aba 4.</cps-tab-panel>
  <cps-tab-panel name="tab-5">Este é o painel da aba 5.</cps-tab-panel>
  <cps-tab-panel name="tab-6">Este é o painel da aba 6.</cps-tab-panel>
  <cps-tab-panel name="tab-7">Este é o painel da aba 7.</cps-tab-panel>
  <cps-tab-panel name="tab-8">Este é o painel da aba 8.</cps-tab-panel>
  <cps-tab-panel name="tab-9">Este é o painel da aba 9.</cps-tab-panel>
  <cps-tab-panel name="tab-10">Este é o painel da aba 10.</cps-tab-panel>
  <cps-tab-panel name="tab-11">Este é o painel da aba 11.</cps-tab-panel>
  <cps-tab-panel name="tab-12">Este é o painel da aba 12.</cps-tab-panel>
  <cps-tab-panel name="tab-13">Este é o painel da aba 13.</cps-tab-panel>
  <cps-tab-panel name="tab-14">Este é o painel da aba 14.</cps-tab-panel>
  <cps-tab-panel name="tab-15">Este é o painel da aba 15.</cps-tab-panel>
  <cps-tab-panel name="tab-16">Este é o painel da aba 16.</cps-tab-panel>
  <cps-tab-panel name="tab-17">Este é o painel da aba 17.</cps-tab-panel>
  <cps-tab-panel name="tab-18">Este é o painel da aba 18.</cps-tab-panel>
  <cps-tab-panel name="tab-19">Este é o painel da aba 19.</cps-tab-panel>
  <cps-tab-panel name="tab-20">Este é o painel da aba 20.</cps-tab-panel>
</cps-tab-group>
```

```jsx react
import { CpsTabGroup } from '@cps-elements/web/react/tab-group';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const App = () => (
  <CpsTabGroup>
    <CpsTabItem slot="nav" panel="tab-1">
      Aba 1
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-2">
      Aba 2
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-3">
      Aba 3
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-4">
      Aba 4
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-5">
      Aba 5
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-6">
      Aba 6
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-7">
      Aba 7
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-8">
      Aba 8
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-9">
      Aba 9
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-10">
      Aba 10
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-11">
      Aba 11
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-12">
      Aba 12
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-13">
      Aba 13
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-14">
      Aba 14
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-15">
      Aba 15
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-16">
      Aba 16
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-17">
      Aba 17
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-18">
      Aba 18
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-19">
      Aba 19
    </CpsTabItem>
    <CpsTabItem slot="nav" panel="tab-20">
      Aba 20
    </CpsTabItem>

    <CpsTabPanel name="tab-1">Este é o painel da aba 1.</CpsTabPanel>
    <CpsTabPanel name="tab-2">Este é o painel da aba 2.</CpsTabPanel>
    <CpsTabPanel name="tab-3">Este é o painel da aba 3.</CpsTabPanel>
    <CpsTabPanel name="tab-4">Este é o painel da aba 4.</CpsTabPanel>
    <CpsTabPanel name="tab-5">Este é o painel da aba 5.</CpsTabPanel>
    <CpsTabPanel name="tab-6">Este é o painel da aba 6.</CpsTabPanel>
    <CpsTabPanel name="tab-7">Este é o painel da aba 7.</CpsTabPanel>
    <CpsTabPanel name="tab-8">Este é o painel da aba 8.</CpsTabPanel>
    <CpsTabPanel name="tab-9">Este é o painel da aba 9.</CpsTabPanel>
    <CpsTabPanel name="tab-10">Este é o painel da aba 10.</CpsTabPanel>
    <CpsTabPanel name="tab-11">Este é o painel da aba 11.</CpsTabPanel>
    <CpsTabPanel name="tab-12">Este é o painel da aba 12.</CpsTabPanel>
    <CpsTabPanel name="tab-13">Este é o painel da aba 13.</CpsTabPanel>
    <CpsTabPanel name="tab-14">Este é o painel da aba 14.</CpsTabPanel>
    <CpsTabPanel name="tab-15">Este é o painel da aba 15.</CpsTabPanel>
    <CpsTabPanel name="tab-16">Este é o painel da aba 16.</CpsTabPanel>
    <CpsTabPanel name="tab-17">Este é o painel da aba 17.</CpsTabPanel>
    <CpsTabPanel name="tab-18">Este é o painel da aba 18.</CpsTabPanel>
    <CpsTabPanel name="tab-19">Este é o painel da aba 19.</CpsTabPanel>
    <CpsTabPanel name="tab-20">Este é o painel da aba 20.</CpsTabPanel>
  </CpsTabGroup>
);
```

### Ativação manual

Quando focadas, usuários de teclado podem pressionar <kbd>Left</kbd> ou <kbd>Right</kbd> para selecionar a aba desejada. Por padrão, o painel de aba correspondente será exibido imediatamente durante a navegação por teclado (ativação automática). Você pode alterar este comportamento definindo `activation="manual"`, o que exigirá que o usuário pressione <kbd>Space</kbd> ou <kbd>Enter</kbd> após definir o foco, para então explicitamente exibir o painel de aba (ativação manual).

```html preview
<cps-tab-group activation="manual">
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
  <CpsTabGroup activation="manual">
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

### Indicador de seleção

É possível destacar o item selecionado com um indicador de seleção, o qual se reposiciona automaticamente quando mudanças de seleção ocorrem. Basta aplicar uma cor à propriedade CSS `--indicator-color` do grupo. Neste caso, recomenda-se também utilizar a propriedade CSS `--inverse-rounded-corner-size` em cada aba, para remover seu arredondamento invertido padrão.

```html preview
<cps-tab-group class="indicator-color">
  <cps-tab-item slot="nav">Geral</cps-tab-item>
  <cps-tab-item slot="nav">Detalhes</cps-tab-item>
  <cps-tab-item slot="nav">Configurações</cps-tab-item>
  <cps-tab-item slot="nav" disabled>Desabilitado</cps-tab-item>

  <cps-tab-panel>Este é o painel da aba geral.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba de detalhes.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba de configurações.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba desabilitada.</cps-tab-panel>
</cps-tab-group>

<style>
  .indicator-color {
    --indicator-color: var(--cps-color-fill-accent-primary);
  }

  .indicator-color cps-tab-item {
    --inverse-rounded-corner-size: 0;
  }
</style>
```

```jsx react
import { CpsTabGroup } from '@cps-elements/web/react/tab-group';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const css = `
  .indicator-color {
    --indicator-color: var(--cps-color-fill-accent-primary);
  }

  .indicator-color cps-tab-item {
    --inverse-rounded-corner-size: 0;
  }
`;

const App = () => (
  <>
    <CpsTabGroup className="indicator-color">
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

    <style>{css}</style>
  </>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com o [componente _tab bar_](https://cpsrepositorio.github.io/cps-design-system/documentacao/tab-bar.html) no qual as abas do CPS Elements se baseiam, não defina uma cor para o indicador de seleção. Esta opção está disponível para situações que não exigem tal aderência.

### Personalização

Assim como com a personalização dos [Tab Item](/componentes/tab-item) e [Tab Panel](/componentes/tab-panel), é possível personalizar o grupo inteiro através de modificação das propriedades CSS disponibilizadas. Com uma combinação de propriedades CSS bem escolhidas para o grupo, seus itens e seus painéis, é possível obter uma aparência completamente diferente da padrão.

```html preview
<cps-tab-group class="custom-selected-colors">
  <cps-tab-item slot="nav">Geral</cps-tab-item>
  <cps-tab-item slot="nav">Detalhes</cps-tab-item>
  <cps-tab-item slot="nav">Configurações</cps-tab-item>
  <cps-tab-item slot="nav" disabled>Desabilitado</cps-tab-item>

  <cps-tab-panel>Este é o painel da aba geral.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba de detalhes.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba de configurações.</cps-tab-panel>
  <cps-tab-panel>Este é o painel da aba desabilitada.</cps-tab-panel>
</cps-tab-group>

<style>
  .custom-selected-colors {
    --background-navigation: transparent;
    --background-selection: transparent;
    --border-color: transparent;
    --border-width: 0;
    --border-radius: 0;
    --indicator-color: var(--cps-color-fill-accent-primary);
    --track-color: var(--cps-color-stroke-inverted-tertiary);
    --track-width: 2px;
    --padding-navigation: 0;
  }

  .custom-selected-colors cps-tab-item {
    --inverse-rounded-corner-size: 0;
    --border-radius: 0;
  }

  .custom-selected-colors cps-tab-panel {
    --background: var(--cps-color-fill-primary);
    --border-color: var(--cps-color-stroke-card-primary);
  }
</style>
```

```jsx react
import { CpsTabGroup } from '@cps-elements/web/react/tab-group';
import { CpsTabItem } from '@cps-elements/web/react/tab-item';
import { CpsTabPanel } from '@cps-elements/web/react/tab-panel';

const css = `
  .custom-selected-colors {
    --background-navigation: transparent;
    --background-selection: transparent;
    --border-color: transparent;
    --border-width: 0;
    --border-radius: 0;
    --indicator-color: var(--cps-color-fill-accent-primary);
    --track-color: var(--cps-color-stroke-inverted-tertiary);
    --track-width: 2px;
    --padding-navigation: 0;
  }

  .custom-selected-colors cps-tab-item {
    --inverse-rounded-corner-size: 0;
    --border-radius: 0;
  }

  .custom-selected-colors cps-tab-panel {
    --background: var(--cps-color-fill-primary);
    --border-color: var(--cps-color-stroke-card-primary);
  }
`;

const App = () => (
  <>
    <CpsTabGroup className="custom-selected-colors">
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

    <style>{css}</style>
  </>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com o [componente _tab bar_](https://cpsrepositorio.github.io/cps-design-system/documentacao/tab-bar.html) no qual as abas do CPS Elements se baseiam, não sobrescreva a aparência padrão. Esta opção está disponível para situações que não exigem tal aderência.

[component-metadata:cps-tab-group]
