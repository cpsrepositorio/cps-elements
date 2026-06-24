# Sidebar de aplicação

Sistemas com **muitas telas** (dezenas ou centenas) não cabem em uma lista plana de
links — isso vira uma "parede" impossível de varrer. O padrão canônico do CPS para
isso é uma **navegação agrupada e colapsável**, montada **com os componentes nativos**
da biblioteca, sem reinventar _accordion_ na mão:

- **`cps-accordion-group` + `cps-accordion`** — os grupos colapsáveis (um aberto por vez);
- **`cps-menu` (modo _inline_) + `cps-menu-item`** — os itens, com ícone no _slot_ `prefix`;
- **`cps-menu-item current`** — marca a tela atual (reflete `aria-current="page"`).

O tema [`app-shell.css`](https://github.com/cpsrepositorio/cps-elements/blob/main/src/themes/app-shell.css)
"achata" esses componentes dentro da casca para que pareçam navegação (sem moldura de
_card_, sem sombra) e aplica o **filete de acento** no item atual. Você escreve só o
_markup_ semântico — nada de `.nav-group`/`toggleNavGroup` caseiros.

> Por que não uma lista de `<a>` crua? Porque a colapsabilidade exclusiva, a animação,
> o foco e a navegação por teclado já vêm prontos e testados nos componentes. Reescrever
> isso em cada sistema é a fonte da "parede" e das inconsistências.

## Inclusões

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/themes/light.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/themes/accent-ciano.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/themes/app-shell.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/autoloader.js"></script>
```

## Markup canônico

A estrutura é sempre a mesma: a sidebar é um `<nav>` dentro da casca (`.cps-app-sidebar`
ou o _alias_ `.sidebar`); dentro, um `cps-accordion-group` com um `cps-accordion` por
**grupo**; dentro de cada grupo, um `cps-menu` com um `cps-menu-item` por **tela**.

```html
<aside class="cps-app-sidebar">
  <nav aria-label="Navegação principal">
    <cps-accordion-group>
      <!-- Grupo aberto: a seção da tela atual -->
      <cps-accordion title="Matrícula" open>
        <cps-icon slot="icon" name="home-fill"></cps-icon>
        <cps-menu>
          <cps-menu-item value="/painel"> <cps-icon slot="prefix" name="home-fill"></cps-icon>Painel </cps-menu-item>
          <cps-menu-item value="/matricula-inicial" current>
            <cps-icon slot="prefix" name="document"></cps-icon>Matrícula inicial
          </cps-menu-item>
          <cps-menu-item value="/rematricula">
            <cps-icon slot="prefix" name="document"></cps-icon>Rematrícula
          </cps-menu-item>
        </cps-menu>
      </cps-accordion>

      <!-- Demais grupos: recolhidos -->
      <cps-accordion title="Avaliação">
        <cps-icon slot="icon" name="clipboard-task"></cps-icon>
        <cps-menu>
          <cps-menu-item value="/conselho">
            <cps-icon slot="prefix" name="document"></cps-icon>Conselho de classe
          </cps-menu-item>
          <cps-menu-item value="/recurso"> <cps-icon slot="prefix" name="document"></cps-icon>Recurso </cps-menu-item>
        </cps-menu>
      </cps-accordion>
    </cps-accordion-group>
  </nav>
</aside>
```

Três regras de ouro:

1. **Só o grupo da tela atual recebe `open`.** Os demais ficam recolhidos. O
   `cps-accordion-group` mantém **um aberto por vez** nas interações seguintes — o
   `open` inicial é respeitado e a exclusividade passa a valer a partir do primeiro clique.
2. **Só o item da tela atual recebe `current`.** Ele ganha o filete de acento e
   `aria-current="page"`.
3. **Cada item tem um ícone no _slot_ `prefix`**, e cada grupo um ícone no _slot_ `icon`.

## Exemplo ao vivo

```html preview
<style>
  /* As regras abaixo já vêm no app-shell.css; repetidas aqui apenas para que o
     preview desta página renderize de forma autônoma. */
  .demo-sidebar {
    width: 264px;
    border: 1px solid var(--cps-color-stroke-card-primary);
    border-radius: var(--cps-border-radius-large);
    padding: 8px;
  }
  .demo-sidebar cps-accordion-group {
    --gap: var(--cps-spacing-1);
  }
  .demo-sidebar cps-accordion::part(header) {
    border-color: transparent;
    background: transparent;
    height: var(--cps-spacing-11);
    padding: 0 var(--cps-spacing-3);
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-label);
    letter-spacing: var(--cps-tracking-wide);
  }
  .demo-sidebar cps-accordion::part(content) {
    border: 0;
    background: transparent;
    padding: var(--cps-spacing-0-5) 0 var(--cps-spacing-2);
  }
  .demo-sidebar cps-menu::part(body) {
    border: 0;
    background: transparent;
    padding: 0;
    filter: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  .demo-sidebar cps-menu-item[current]::part(base) {
    position: relative;
    background: var(--cps-color-fill-subtle-secondary);
  }
  .demo-sidebar cps-menu-item[current]::part(base)::before {
    content: '';
    position: absolute;
    inset: 6px auto 6px 0;
    width: 2px;
    background: var(--cps-color-text-accent-primary);
  }
</style>

<nav class="demo-sidebar" aria-label="Navegação principal">
  <cps-accordion-group>
    <cps-accordion title="Matrícula" open>
      <cps-icon slot="icon" name="home-fill"></cps-icon>
      <cps-menu>
        <cps-menu-item value="/painel"><cps-icon slot="prefix" name="home-fill"></cps-icon>Painel</cps-menu-item>
        <cps-menu-item value="/matricula-inicial" current
          ><cps-icon slot="prefix" name="document"></cps-icon>Matrícula inicial</cps-menu-item
        >
        <cps-menu-item value="/rematricula"
          ><cps-icon slot="prefix" name="document"></cps-icon>Rematrícula</cps-menu-item
        >
        <cps-menu-item value="/ficha-saude"
          ><cps-icon slot="prefix" name="heart"></cps-icon>Ficha de saúde</cps-menu-item
        >
      </cps-menu>
    </cps-accordion>
    <cps-accordion title="Avaliação">
      <cps-icon slot="icon" name="clipboard-task"></cps-icon>
      <cps-menu>
        <cps-menu-item value="/conselho"
          ><cps-icon slot="prefix" name="document"></cps-icon>Conselho de classe</cps-menu-item
        >
        <cps-menu-item value="/recurso"><cps-icon slot="prefix" name="document"></cps-icon>Recurso</cps-menu-item>
        <cps-menu-item value="/reclassificacao"
          ><cps-icon slot="prefix" name="document"></cps-icon>Reclassificação</cps-menu-item
        >
      </cps-menu>
    </cps-accordion>
    <cps-accordion title="Documentos">
      <cps-icon slot="icon" name="document"></cps-icon>
      <cps-menu>
        <cps-menu-item value="/historico"
          ><cps-icon slot="prefix" name="document"></cps-icon>Histórico escolar</cps-menu-item
        >
        <cps-menu-item value="/boletim"><cps-icon slot="prefix" name="document"></cps-icon>Boletim</cps-menu-item>
      </cps-menu>
    </cps-accordion>
  </cps-accordion-group>
</nav>
```

## Navegação ao clicar

Cada `cps-menu` emite **`cps-select`** com o item escolhido. Use o atributo `value` do
item como a rota e conecte ao seu _router_; mova o `current` para o item clicado:

```html
<script>
  const nav = document.querySelector('nav[aria-label="Navegação principal"]');
  nav.addEventListener('cps-select', event => {
    const item = event.detail.item;
    nav.querySelectorAll('cps-menu-item[current]').forEach(i => (i.current = false));
    item.current = true;
    // roteie usando item.value, por exemplo:
    // router.navigate(item.value);
  });
</script>
```

## Modo "rail" (ícones)

Para sidebars que recolhem em uma faixa de ícones e expandem ao passar o mouse (ou ao
focar dentro), adicione a classe `cps-app-sidebar--icons` (ou `sidebar--icons`) ao
elemento que controla a largura. No estado recolhido, só os ícones aparecem; títulos de
grupo, _chevrons_ e rótulos de item são ocultados automaticamente pelo tema.

```html
<aside class="cps-app-sidebar cps-app-sidebar--icons">
  <nav aria-label="Navegação principal"><!-- mesmo markup --></nav>
</aside>
```

## Acessibilidade

- **Teclado:** o cabeçalho de cada grupo é um `<button>` com `aria-expanded` (Enter/Espaço
  abre/fecha); dentro de cada `cps-menu`, as **setas ↑/↓**, **Home/End** e **Enter**
  navegam e ativam os itens, e **Esc** sai — tudo provido pelos componentes.
- **Landmark:** envolva a navegação em `<nav aria-label="...">`.
- **Página atual:** `current` em `cps-menu-item` reflete `aria-current="page"`, anunciado
  por leitores de tela.
- **Foco visível:** mantido pelos componentes (anel de foco do tema).

## Não faça

!> **Não** reescreva o _accordion_ com `<div>` + `onclick` + classes `.open`. Além de
duplicar comportamento já testado (animação, teclado, ARIA, exclusividade), foge do
_design system_ e produz as inconsistências que este padrão existe para evitar. Se algo
faltar para o seu caso, abra uma _issue_ propondo o ajuste **no componente**.
