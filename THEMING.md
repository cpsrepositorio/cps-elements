# Temas e paletas de sistema — CPS Elements

Sistemas do CPS compartilham os **mesmos componentes e a mesma estrutura de tela**,
mas podem ter **cores diferentes**. Isso é feito com tokens, em **dois eixos
independentes**:

1. **Cor (paleta)** — qual acento o sistema usa. Troca = um arquivo.
2. **Chrome** — topbar **colorida** ou **branca**. Troca = uma classe na raiz.

## Como usar

```html
<!-- base -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/themes/light.css" />
<!-- COR do sistema (escolha uma) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/themes/accent-roxo.css" />
<!-- shell padronizado (topbar/sidebar/cards) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/themes/app-shell.css" />

<body class="cps-app">              <!-- topbar colorida (padrão) -->
<body class="cps-app chrome-branca"> <!-- topbar branca -->
```

Trocar a cor de todo o sistema = trocar o `accent-*.css`. Alternar colorida/branca =
adicionar/remover `chrome-branca`. O conteúdo e os controles não mudam.

## Paletas disponíveis

| Arquivo | Cor |
|---|---|
| `themes/accent-ciano.css` | Ciano (principal) |
| `themes/accent-roxo.css` | Roxo |
| `themes/accent-azul.css` | Azul |
| `themes/accent-amber.css` | Âmbar |
| `themes/accent-cinza.css` | Cinza (escuro) |
| `themes/accent-cinza-claro.css` | Cinza claro |

Cada arquivo só redefine `--cps-palette-accent-50…950`. Os componentes recolorem
sozinhos (leem os tokens); o `app-shell.css` deriva os papéis abaixo da rampa.

## Regras do shell (papéis derivados da rampa)

| Elemento | Token | Tom da rampa |
|---|---|---|
| Topbar (cor mais forte) | `--cps-app-chrome` | `accent-900` |
| Botões (topbar mais claro) | `--cps-app-button` | `accent-800` |
| Texto de acento / item ativo | `--cps-app-ink` | `accent-700` |
| Topo de listas / tabelas (pastel) | `--cps-app-header` | `accent-100` |
| Cards (pastel claro) | `--cps-app-card` | `accent-50` |
| Sidebar / página | — | sempre **branco** |
| Item ativo do menu | — | barra lateral + texto na cor (sem fundo) |

Cores **semânticas** (sucesso/aviso/erro/info) **não** mudam com a paleta — continuam
significando estado.

## Classes do shell

Canônicas (para telas novas): `.cps-app-topbar`, `.cps-app-sidebar`,
`.cps-app-nav-item` (+ `.is-active`), `.cps-app-card`, `.cps-app-panel` +
`.cps-app-panel-header`. O `app-shell.css` também reconhece as classes legadas das
telas do SAL (`.topbar`, `.sidebar`/`.sb`, `.sidebar-item`/`.si`, `.metric-card`/`.kcard`,
`.card-hdr`), para adoção sem refatorar.

## Navegação: sidebar de aplicação

Para sistemas com muitas telas, **não** monte a navegação como uma lista plana de links
(vira uma "parede") nem reescreva _accordion_ na mão. Use o padrão canônico com os
componentes nativos — `cps-accordion-group` + `cps-accordion` (grupos colapsáveis) e
`cps-menu` + `cps-menu-item` (itens, com `current` na tela atual). O `app-shell.css` já
"achata" esses componentes dentro de `.cps-app-sidebar`/`.sidebar` e aplica o filete de
acento no item atual, inclusive um modo "rail" de ícones (`.cps-app-sidebar--icons`).
Markup, exemplo ao vivo e notas de acessibilidade: **[Sidebar de aplicação](docs/fundamentos/sidebar-de-aplicação.md)**.

## Criar uma paleta nova

Edite `scripts/generate-palette-ramp.py` (lista `FAMILIES`) com os tons do guia e gere
a rampa de 11 tons; salve como `src/themes/accent-<nome>.css` no mesmo formato dos
existentes. O build empacota automaticamente (`make-themes.js`).

> Galeria de escolha para UI/UX: ver o protótipo com seletor de paleta + chrome
> (cor × topbar), que materializa estas combinações ao vivo.
