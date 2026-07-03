# Mapa SP

[component-header:cps-mapa-sp]

`<cps-mapa-sp>` desenha o **estado de São Paulo dividido nos 12 Núcleos Regionais de
Administração (NRA)** do Centro Paula Souza. Serve para **selecionar uma região** ou
para **comparar valores entre regiões pela cor** (mapa de calor) — útil em visões de
empregabilidade, evasão escolar, situação de matrícula, investimentos, vagas por eixo, etc.

O SVG do mapa (~1.500 municípios) é carregado **uma vez** do asset do pacote e clonado por
instância; cada município já traz `data-nra`, então a associação município→região é
**determinística**.

```html preview
<cps-mapa-sp modo="regiao" selecao mostrar="menuRegioes"></cps-mapa-sp>
```

## Modos de cor

O atributo `modo` define o tipo de gráfico:

- **`regiao`** — cada núcleo com a **sua cor institucional** (identidade/localização).
- **`branco`** — mapa branco; a região ganha a **cor principal** só ao passar o mouse ou
  selecionar. Ideal para **seletor**.
- **`calor`** — cada região pintada por **grau de um indicador**, numa **rampa sequencial
  de matiz único** (claro → forte). Ideal para **comparação**.

```html preview
<cps-mapa-sp modo="branco" cor="azul" selecao mostrar="menuRegioes regiaoSelecionada"></cps-mapa-sp>
```

## Cor principal

`cor` aceita um **nome** (`azul`, `vermelho`, `verde`, `laranja`, `roxo`, `ciano`) ou um
**hex** (`#c0392b`). No modo `calor`, a cor é a base de uma rampa sequencial de 7 passos
gerada automaticamente (regra de dataviz: magnitude usa matiz único, nunca arco-íris).

## Componentes auxiliares

Ligue os auxiliares em `mostrar` (separados por espaço). O mapa fica à esquerda e os
auxiliares numa coluna à direita (empilham no mobile); sem auxiliares, o mapa ocupa tudo.

| Valor | O que mostra |
|---|---|
| `menuRegioes` | Lista das regiões; no `calor` vira **ranking (maior→menor)** com valor. Hover realça o mapa, clique seleciona. |
| `regiaoSelecionada` | Indica a região ativa (nome + cor). |
| `kpiTotais` | Totais do estado (aparece quando nada está selecionado). |
| `kpiRegiao` | Ao selecionar, **filtra o painel para a região** e detalha: indicador em destaque, todos os indicadores (clicáveis, trocam o mapa) e a quebra **"onde ocorre" por município**. |
| `escala` | Barra de gradiente com mínimo e máximo (modo `calor`). |

## Dados (mapa de calor e KPIs)

Os dados ricos são passados por **propriedade** (JavaScript), não por atributo:

- **`dados`** — registros por região: `{ 'nra1': { inv: 92, alunos: 24500, ... }, ... }`.
- **`indicadores`** — catálogo `{ key, label, get(registro) → número, fmt(valor) → texto }`.
- **`municipios`** *(opcional)* — principais municípios por região, para a quebra
  "onde ocorre": `{ 'nra1': ['Bauru', 'Araçatuba', ...] }`.

```html
<cps-mapa-sp
  id="mapa"
  modo="calor"
  cor="azul"
  indicador="inv"
  selecao
  mostrar="escala menuRegioes kpiTotais kpiRegiao"
></cps-mapa-sp>

<script type="module">
  const mapa = document.getElementById('mapa');
  const nf = n => (n || 0).toLocaleString('pt-BR');

  mapa.dados = {
    nra1: { etecs: 22, fatecs: 7, alunos: 24500, inv: 92, empreg: 84 },
    // ... demais regiões (nra2, nra3, nra4-5-6, nra7…nra12)
  };
  mapa.indicadores = [
    { key: 'inv', label: 'Investimento (R$ mi)', get: d => d.inv, fmt: v => 'R$ ' + nf(v) + ' mi' },
    { key: 'alunos', label: 'Alunos', get: d => d.alunos, fmt: v => nf(v) },
    { key: 'empreg', label: 'Empregabilidade', get: d => d.empreg, fmt: v => v + '%' }
  ];
  mapa.municipios = { nra9: ['Ribeirão Preto', 'Franca', 'Barretos'] };

  mapa.addEventListener('cps-mapa-selecionar', e => {
    console.log(e.detail); // { key, tag, label, valor }
  });
</script>
```

## Chaves de região

São **10 chaves** (as três regionais da Grande São Paulo compartilham cor no mapa-base e
por isso são tratadas juntas):

`nra1` · `nra2` · `nra3` · `nra4-5-6` · `nra7` · `nra8` · `nra9` · `nra10` · `nra11` · `nra12`

## Evento

| Evento | Descrição | `detail` |
|---|---|---|
| `cps-mapa-selecionar` | Emitido ao selecionar uma região. | `{ key, tag, label, valor }` |

## Métodos

| Método | Descrição |
|---|---|
| `selecionar(key)` | Seleciona uma região programaticamente. |
| `limpar()` | Limpa a seleção, voltando ao resumo. |
| `setIndicador(key)` | Troca o indicador ativo do mapa de calor. |

[component-metadata:cps-mapa-sp]
