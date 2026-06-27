# Proposta — `cps-table-view`

> **Status:** rascunho para aprovação. Nada implementado ainda. Este documento define
> escopo, API, estratégia responsiva e fases. Aprove (ou ajuste) antes de eu começar a codar.

## 1. Objetivo

Padronizar **tabelas de dados** no CPS Elements, hoje feitas com `<table>` cru + CSS
repetido em cada sistema. O foco de dor declarado é o **comportamento em telas pequenas**
— então a estratégia responsiva é cidadã de primeira classe aqui, não um "puxadinho".

## 2. Filosofia: enriquecer o `<table>` nativo (não recriá-lo)

O componente **embrulha um `<table>` HTML real** fornecido pelo consumidor, em vez de
receber dados por propriedade e renderizar tudo. Por quê:

- **Acessibilidade de graça** — semântica nativa de tabela (`<th scope>`, navegação de
  leitor de tela, associação célula↔cabeçalho) sem reimplementar ARIA de grid.
- **Conteúdo livre na célula** — botões, chips, links, ícones; sem "render functions".
- **Progressive enhancement** — sem JS, a tabela ainda é uma tabela legível.

O componente cuida do que é **transversal e chato de repetir**: contêiner de rolagem,
cabeçalho fixo, 1ª coluna fixa, densidade, zebra, **responsividade**, estados de vazio/carregando.

```html
<cps-table-view sticky-header responsive="scroll">
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
        <td>75%</td>
      </tr>
    </tbody>
  </table>
</cps-table-view>
```

> Alternativa considerada e **descartada para o MVP**: componente _data-driven_
> (`columns`/`rows` por propriedade). Mais poderoso para ordenação/paginação, mas grande,
> opinativo e pior em acessibilidade e conteúdo customizado. Pode virar uma camada
> opcional **por cima** deste no futuro.

## 3. Estratégia responsiva (o coração da proposta)

Atributo **`responsive`** com três modos. Decidem-se por **container query** (reage à
largura do **componente**, não da janela) — mais robusto que `@media` para componentes
reusáveis em qualquer coluna do layout.

| Modo                    | Comportamento em tela estreita                                                  | Preserva todos os dados? | Quando usar                                 |
| ----------------------- | ------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------- |
| **`scroll`** _(padrão)_ | rolagem horizontal dentro do componente; cabeçalho e (opcional) 1ª coluna fixos | ✅ sim                   | tabelas densas; nada pode sumir             |
| **`priority`**          | colunas marcadas com prioridade somem progressivamente                          | ❌ esconde secundárias   | listagens com colunas claramente acessórias |
| **`stack`** _(fase 2)_  | cada linha vira um cartão rótulo→valor                                          | ✅ sim (reflui)          | poucas colunas; leitura vertical no celular |

### `scroll` (padrão)

O `<table>` fica num contêiner `overflow-x: auto`. Em vez de **estourar o layout** (o
problema atual que gera scroll horizontal "vazado" na página), a rolagem fica **contida**
no componente. Com `sticky-header` o `<thead>` gruda no topo ao rolar vertical; com
`sticky-column` a 1ª coluna gruda à esquerda ao rolar horizontal.

### `priority`

Formaliza a convenção atual do skill (`.col-date { display:none }`), mas declarativa e
sem media query na mão. O consumidor marca colunas acessórias:

```html
<cps-table-view responsive="priority">
  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Candidato</th>
        <th scope="col" data-priority="low">Unidade</th>
        <!-- some primeiro -->
        <th scope="col" data-priority="medium">Data</th>
        <!-- some depois -->
        <th scope="col">Nota</th>
      </tr>
    </thead>
    <!-- as células correspondentes herdam a prioridade pela posição da coluna -->
  </table>
</cps-table-view>
```

Ordem de ocultação conforme falta largura: `low` → `medium`. Colunas sem `data-priority`
nunca somem.

### `stack` (fase 2)

Cada `<tr>` vira um cartão; cada `<td>` mostra `rótulo: valor` (rótulo lido do `<th>`
correspondente ou de `data-label`). É o mais opinativo — por isso fica para a fase 2.

## 4. API do MVP

### Atributos / propriedades

| Atributo        | Tipo                         | Padrão          | Descrição                                                       |
| --------------- | ---------------------------- | --------------- | --------------------------------------------------------------- |
| `responsive`    | `'scroll' \| 'priority'`     | `'scroll'`      | estratégia em telas estreitas (`stack` na fase 2)               |
| `density`       | `'comfortable' \| 'compact'` | `'comfortable'` | altura/padding das linhas                                       |
| `sticky-header` | boolean                      | `false`         | `<thead>` fixo ao rolar vertical                                |
| `sticky-column` | boolean                      | `false`         | 1ª coluna fixa ao rolar horizontal (modo `scroll`)              |
| `zebra`         | boolean                      | `false`         | linhas alternadas (usa `--cps-color-background-solid-tertiary`) |
| `hoverable`     | boolean                      | `false`         | realce de linha no _hover_                                      |
| `loading`       | boolean                      | `false`         | mostra estado de carregando (esqueleto/spinner) sobre a tabela  |

### Slots

| Slot        | Para quê                                                       |
| ----------- | -------------------------------------------------------------- |
| _(default)_ | **obrigatório** — um único `<table>`                           |
| `toolbar`   | área acima da tabela (título, busca, ações em lote) — opcional |
| `empty`     | conteúdo quando a tabela não tem linhas (estado vazio)         |
| `footer`    | área abaixo (paginação, contagem) — opcional                   |

### Parts (`::part`)

`base`, `toolbar`, `container` (a área de rolagem), `footer`, `empty`. Permite ajuste fino
sem vazar estilos.

### CSS custom properties

`--row-height`, `--cell-padding-x`, `--header-background` (padrão `--cps-app-header` quando
o app-shell está presente, senão um neutro), `--max-height` (ativa rolagem vertical +
cabeçalho fixo). Tudo via **tokens** — zero hex cru.

### Eventos

**MVP não emite eventos** (é apresentacional). Ordenação/seleção/paginação entram nas
fases seguintes com `cps-sort`, `cps-row-select`, etc.

## 5. Acessibilidade

- Semântica nativa preservada (`<table>`, `<th scope>`); o componente **não** troca os
  papéis ARIA.
- Contêiner de rolagem recebe `tabindex="0"` + `role="region"` + `aria-label` (ou
  `aria-labelledby` do `toolbar`) para ser **focável e rolável por teclado** — requisito
  WCAG para regiões com rolagem.
- `sticky-header`/`sticky-column` usam `position: sticky` (não removem nada do fluxo/leitor).
- Estado vazio e carregando anunciados com `aria-live` adequado.

## 6. Visual / theming

- Cabeçalho com o pastel de acento (`--cps-app-header`) quando o `app-shell.css` está
  carregado; fora dele, um neutro do tema. Bordas em `--cps-color-stroke-secondary`.
- Densidade `compact` reduz `--row-height`/padding para grades densas.
- Claro e escuro via tokens (mesmo cuidado da sidebar: nada de `#fff` cru no componente).

## 7. Fora do MVP (fases futuras)

| Fase | Recurso                                                                       |
| ---- | ----------------------------------------------------------------------------- |
| 2    | modo `responsive="stack"` (cartões no mobile)                                 |
| 2    | **ordenação** por coluna (`th` clicável → `cps-sort`, com indicador)          |
| 3    | **seleção** de linhas (coluna de checkbox, seleção em lote, `cps-row-select`) |
| 3    | **paginação** (componente `cps-pager` separado, plugável no `footer`)         |
| 4    | redimensionar/reordenar colunas; persistência de preferências                 |

## 8. Decisões em aberto (preciso do seu OK)

1. **Abordagem "embrulha `<table>` nativo"** (recomendada) vs _data-driven_ por propriedade — confirma?
2. **MVP = `scroll` + `priority`**, deixando `stack` + ordenação para a fase 2 — ok, ou você quer `stack` ou ordenação já no primeiro corte?
3. **Responsividade por _container query_** (reage à largura do componente) vs `@media` (largura da janela) — concorda com container query?
4. **Nome** `cps-table-view` (casa com o placeholder "em breve") vs `cps-table` — preferência?
5. O padrão de `responsive` deve ser **`scroll`** (nada some) — confirma como default seguro?

## 9. Plano de implementação (após aprovação)

1. `src/components/table-view/` — `table-view.component.ts` + `.styles.ts` (segue `BaseElement`, slots/parts/tokens acima).
2. Registro em `table-view.ts`, `all.ts`, autoloader; tirar o "(em breve)" do `_sidebar.md`.
3. Doc `docs/componentes/table-view.md` com exemplos ao vivo (os 3 cenários responsivos) + recipe.
4. Teste `table-view.test.ts` (render, slots, atributos, foco do contêiner rolável).
5. Verificação renderizando (Edge): claro/escuro, `scroll` com sticky, `priority` ocultando colunas, densidades, estado vazio.
6. Publicação como **minor** (nova API pública).
