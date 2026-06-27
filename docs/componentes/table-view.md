# Table View

[component-header:cps-table-view]

`<cps-table-view>` **enriquece um `<table>` nativo** com rolagem contida, cabeçalho e
coluna fixos, densidade, faixas zebradas e **comportamento responsivo** — preservando a
semântica e a acessibilidade nativas da tabela. Você escreve um `<table>` comum no _slot_
padrão; o componente cuida do que é transversal.

```html preview
<cps-table-view label="Classificação de candidatos">
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col">Fase</th>
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Maria Silva</td>
        <td>Prova objetiva</td>
        <td>92%</td>
      </tr>
      <tr>
        <td>2</td>
        <td>João Souza</td>
        <td>Prova objetiva</td>
        <td>88%</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Ana Costa</td>
        <td>Prova objetiva</td>
        <td>85%</td>
      </tr>
    </tbody>
  </table>
</cps-table-view>
```

```jsx react
import { CpsTableView } from '@cgtic-cps/web/react/table-view';

const App = () => (
  <CpsTableView label="Classificação de candidatos">
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Candidato</th>
          <th scope="col">Fase</th>
          <th scope="col">Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maria Silva</td>
          <td>Prova objetiva</td>
          <td>92%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>João Souza</td>
          <td>Prova objetiva</td>
          <td>88%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ana Costa</td>
          <td>Prova objetiva</td>
          <td>85%</td>
        </tr>
      </tbody>
    </table>
  </CpsTableView>
);
```

?> Forneça sempre um `<th scope="col">` em cada coluna e, quando útil, um `label` no
componente — ele rotula a região rolável para leitores de tela.

## Exemplos

### Responsividade em telas pequenas

O atributo `responsive` define como a tabela se adapta quando o **componente** fica estreito.

#### `scroll` (padrão) — rolagem contida

Mantém **todas as colunas**; o excedente rola **dentro** do componente, sem estourar o
layout da página. Combine com `sticky-header` (cabeçalho fixo ao rolar vertical — requer
`--max-height`) e `sticky-column` (1ª coluna fixa ao rolar horizontal).

```html preview
<cps-table-view sticky-header sticky-column zebra hoverable style="--max-height: 220px" label="Registros">
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Inscrição</th>
        <th scope="col">Candidato</th>
        <th scope="col">Curso</th>
        <th scope="col">Período</th>
        <th scope="col">Fase</th>
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>20251000</td>
        <td>Maria Silva</td>
        <td>Desenvolvimento de Sistemas</td>
        <td>Manhã</td>
        <td>Prova objetiva</td>
        <td>92%</td>
      </tr>
      <tr>
        <td>2</td>
        <td>20251001</td>
        <td>João Souza</td>
        <td>Desenvolvimento de Sistemas</td>
        <td>Manhã</td>
        <td>Prova objetiva</td>
        <td>88%</td>
      </tr>
      <tr>
        <td>3</td>
        <td>20251002</td>
        <td>Ana Costa</td>
        <td>Eventos</td>
        <td>Noite</td>
        <td>Prova objetiva</td>
        <td>85%</td>
      </tr>
      <tr>
        <td>4</td>
        <td>20251003</td>
        <td>Pedro Lima</td>
        <td>Eventos</td>
        <td>Noite</td>
        <td>Prova objetiva</td>
        <td>83%</td>
      </tr>
      <tr>
        <td>5</td>
        <td>20251004</td>
        <td>Carla Dias</td>
        <td>Logística</td>
        <td>Tarde</td>
        <td>Prova objetiva</td>
        <td>80%</td>
      </tr>
    </tbody>
  </table>
</cps-table-view>
```

#### `priority` — ocultar colunas acessórias

Marque as colunas secundárias com `data-priority` no `<th>`. Conforme o componente
estreita, elas somem nesta ordem: **`low`** primeiro, **`medium`** depois. Colunas sem
`data-priority` nunca somem. Os limiares (em px da **largura do componente**) são
ajustáveis com `priority-low-below` (padrão 640) e `priority-medium-below` (padrão 480).

```html preview
<cps-table-view responsive="priority" zebra label="Classificação responsiva">
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col" data-priority="low">Curso</th>
        <th scope="col" data-priority="medium">Fase</th>
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Maria Silva</td>
        <td>Desenvolvimento de Sistemas</td>
        <td>Prova objetiva</td>
        <td>92%</td>
      </tr>
      <tr>
        <td>2</td>
        <td>João Souza</td>
        <td>Desenvolvimento de Sistemas</td>
        <td>Prova objetiva</td>
        <td>88%</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Ana Costa</td>
        <td>Eventos</td>
        <td>Prova objetiva</td>
        <td>85%</td>
      </tr>
    </tbody>
  </table>
</cps-table-view>
```

?> Redimensione a janela (ou coloque a tabela numa coluna estreita) para ver **Curso** e
**Fase** desaparecerem. Como a decisão é por **largura do componente** (não da janela), a
mesma tabela se adapta corretamente esteja ela em tela cheia ou num painel lateral.

### Densidade

Use `density="compact"` para grades com muitos registros.

```html preview
<cps-table-view density="compact" zebra label="Compacta">
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Maria Silva</td>
        <td>92%</td>
      </tr>
      <tr>
        <td>2</td>
        <td>João Souza</td>
        <td>88%</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Ana Costa</td>
        <td>85%</td>
      </tr>
    </tbody>
  </table>
</cps-table-view>
```

### Barra de ferramentas e rodapé

Os _slots_ `toolbar` (acima) e `footer` (abaixo) acomodam título, busca, ações em lote e
paginação.

```html preview
<cps-table-view zebra hoverable label="Registros">
  <div slot="toolbar" style="display:flex;justify-content:space-between;align-items:center;width:100%">
    <strong>Candidatos</strong>
    <cps-input type="search" placeholder="Buscar..." size="small" style="width:200px"></cps-input>
  </div>
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Maria Silva</td>
        <td>92%</td>
      </tr>
      <tr>
        <td>2</td>
        <td>João Souza</td>
        <td>88%</td>
      </tr>
    </tbody>
  </table>
  <div slot="footer">1–2 de 128</div>
</cps-table-view>
```

### Estado vazio

Quando o `<tbody>` não tem linhas, o conteúdo do _slot_ `empty` é exibido.

```html preview
<cps-table-view label="Sem dados">
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <div slot="empty">Nenhum candidato classificado ainda.</div>
</cps-table-view>
```

### Carregando

O atributo `loading` exibe uma camada com _spinner_ sobre a tabela.

```html preview
<cps-table-view loading label="Carregando" style="--max-height: 160px">
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Maria Silva</td>
        <td>92%</td>
      </tr>
      <tr>
        <td>2</td>
        <td>João Souza</td>
        <td>88%</td>
      </tr>
    </tbody>
  </table>
</cps-table-view>
```

## Acessibilidade

- A semântica nativa da tabela é preservada — use `<th scope="col">` (e `scope="row"` na
  primeira célula de cada linha, quando fizer sentido).
- A região rolável é focável por teclado (`tabindex="0"`, `role="region"`) e rotulada pelo
  atributo `label`.
- `sticky-header`/`sticky-column` usam `position: sticky` — não removem nada do fluxo.

?> **Em desenvolvimento.** Este componente é `experimental`. Ordenação por coluna, modo
"cartão" no mobile (`responsive="stack"`), seleção de linhas e paginação estão planejados
para versões seguintes. O modo atual `priority` assume tabelas simples (sem `colspan`/`rowspan`
no cabeçalho).

[component-metadata:cps-table-view]
