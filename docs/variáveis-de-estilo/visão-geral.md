# Visão geral

CPS Elements é totalmente fundamentado em variáveis de estilo, oferecendo mecanismos para [personalizar](/fundamentos/personalizando) o visual dos componentes de forma simples e direta, bem como suportando [personalizar](/fundamentos/temas) de maneira facilitada. Entretanto, isto também significa você pode se aproveitar das [propriedades CSS customizadas](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) que são utilizadas internamente pelos componentes, para suas próprias necessidades, dentro de seus próprios arquivos de estilo.

Observe variáveis de estilo utilizadas no exemplo abaixo, para criar um _layout_ seguindo cores, tipografia e outras caraterísticas estéticas gerais do CPS Elements, sem sequer utilizar qualquer dos componentes da biblioteca.

```html preview no-vue
<div class="sample-layout">
  <aside class="sample-layout-sidebar">
    <strong class="sample-layout-logo">Logo</strong>

    <nav class="sample-layout-menu">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <hr />
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
      <a href="#">Link 6</a>
      <a href="#">Link 7</a>
    </nav>
  </aside>

  <main class="sample-layout-main">
    <strong>Exemplo de conteúdo</strong>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

    <p>
      Lorem velit cupidatat ea est laborum aliquip in excepteur amet anim nostrud qui. Officia adipisicing nostrud
      ullamco non nostrud aliqua ex aute culpa in elit. Ea enim labore irure sunt veniam laborum id anim officia nostrud
      reprehenderit mollit. Esse laborum laborum amet ex velit. Adipisicing commodo voluptate excepteur veniam nostrud
      culpa deserunt irure nostrud eiusmod.
    </p>

    <section class="sample-layout-cards">
      <div></div>
      <div></div>
      <div></div>
    </section>

    <p>
      Dolor id reprehenderit occaecat velit commodo cupidatat laborum tempor. Magna veniam consectetur enim id
      exercitation. Duis et officia anim in ut labore. Quis sit occaecat esse est.
    </p>
  </main>
</div>

<style>
  .sample-layout {
    display: flex;
    position: relative;
    margin: -1.5rem;
    border-radius: var(--cps-border-radius-medium) 0 0 0;
    height: 40vh;
    overflow: hidden;
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
  }

  .sample-layout-sidebar {
    flex: 0 0 auto;
    box-shadow: var(--cps-shadow-md);
    background: var(--cps-color-background-solid-primary);
    padding: var(--cps-spacing-6);
    width: 10rem;
  }

  .sample-layout-logo {
    display: block;
    padding: 0 0 var(--cps-spacing-4);
    color: var(--cps-color-text-brand-primary);
    font: var(--cps-font-title);
  }

  .sample-layout-menu {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sample-layout-menu a {
    display: block;
    transition: color var(--cps-transition-fast);
    padding: var(--cps-spacing-2) 0;
    text-decoration: none;
    color: var(--cps-color-text-primary);
  }

  .sample-layout-menu a:hover {
    color: var(--cps-color-text-brand-secondary);
  }

  .sample-layout-menu hr {
    margin: var(--cps-spacing-2) 0;
    border: 0;
    border-top: 1px solid var(--cps-color-stroke-separator);
  }

  .sample-layout-main {
    background: var(--cps-color-background-solid-tertiary);
    padding: var(--cps-spacing-6);
  }

  .sample-layout-main strong {
    display: block;
    font: var(--cps-font-heading);
  }

  .sample-layout-main p:first-of-type {
    color: var(--cps-color-text-secondary);
    font: var(--cps-font-body-em);
  }

  .sample-layout-cards {
    display: flex;
    gap: var(--cps-spacing-4);
    margin: var(--cps-spacing-4) 0;
  }

  .sample-layout-cards div {
    flex: 1 1 auto;
    border-radius: var(--cps-border-radius-medium);
    background: var(--cps-color-background-solid-secondary);
    padding: var(--cps-spacing-4);
    height: 8rem;
  }
</style>
```

Você pode até alternar entre os modos de cor claro e escuro nesta documentação (use o seletor no canto superior direito da página, ou simplesmente pressione <kbd>&bsol;</kbd>). Observe como o exemplo acima se adapta automaticamente, sem qualquer alteração no código. Isto por que as variáveis de estilo são atualizadas dinamicamente, de acordo com o tema selecionado.

?> Embora as variáveis de estilo possam ser utilizadas para construir _layouts_ diversos sem usar qualquer componente CPS Elements propriamente dito, os componentes foram minuciosamente estilizados utilizando as melhores combinações destas variáveis, além de normalmente oferecerem funcionalidades específicas que não podem ser obtidas apenas com CSS. Portanto, recomendamos que você utilize os componentes sempre que possível.

Para imergir na utilização de variáveis de estilo, navegue pelas categorias [tipografia](/variáveis-de-estilo/tipografia), [cores](/variáveis-de-estilo/cores), [cantos arredondados](/variáveis-de-estilo/cantos-arredondados), [dimensões e espaçamentos](/variáveis-de-estilo/dimensões-e-espaçamentos), [elevação](/variáveis-de-estilo/elevação), e [transições](/variáveis-de-estilo/transições). Para uma visão aprofundada de todas as variáveis de estilo disponíveis, consulte os códigos-fonte dos arquivos de tema [`light.css`](https://github.com/cpsrepositorio/cps-elements/blob/main/src/themes/light.css) e [`dark.css`](https://github.com/cpsrepositorio/cps-elements/blob/main/src/themes/dark.css).
