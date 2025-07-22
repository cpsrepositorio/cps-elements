# Split Button

<div class="component-header">
<div class="component-header__tag">
<span>Composição:</span>
<a href="/#/componentes/button"><code>&lt;cps-button&gt;</code></a>
<a href="/#/componentes/button-group"><code>&lt;cps-button-group&gt;</code></a>
<a href="/#/componentes/dropdown"><code>&lt;cps-dropdown&gt;</code></a>
</div>

<div class="component-header__info">
<cps-badge variant="neutral" pill="">Desde 0.20.2</cps-badge>

<cps-badge variant="informative" pill="" style="text-transform: capitalize;">
Publicado
</cps-badge>
</div>

<div class="component-header__summary">
<p></p><p>Botões divididos representam ações agrupadas altamente relacionadas para interação pelo usuário.</p><p></p>
</div>
</div>

Normalmente a composição se trata de um botão principal em destaque, seguido de um botão _dropdown_ que apresenta opções adicionais através de menu de contexto. Botões divididos são tipicamente encontrados em barras de ferramentas de aplicações de edição de texto e similares.

Isto pode ser alcançado com uma composição de componentes:

```html preview no-vue
<cps-button-group label="Colar" size="large">
  <cps-tooltip content="Colar">
    <cps-button aria-label="Colar">
      <cps-icon slot="prefix" name="clipboard-paste"></cps-icon>
    </cps-button>
  </cps-tooltip>

  <cps-dropdown forget-selection keep-placeholder>
    <cps-label>Opções para colar:</cps-label>

    <cps-option value="keep-formatting">
      <cps-icon slot="prefix" name="paint-brush-arrow-down"></cps-icon>
      Formatação original
    </cps-option>

    <cps-option value="merge-formatting">
      <cps-icon slot="prefix" name="pen-sparkle"></cps-icon>
      Mesclar formatação
    </cps-option>

    <cps-option value="text-only">
      <cps-icon slot="prefix" name="text-abc-underline-double"></cps-icon>
      Somente texto
    </cps-option>

    <cps-separator></cps-separator>

    <cps-option value="paste-options">Colar especial...</cps-option>
  </cps-dropdown>
</cps-button-group>
```

?> Algumas bibliotecas e _design systems_ apresentam um componente específico para botões divididos. Optamos por não oferecer um componente separado dada a facilidade de compor esta funcionalidade com os componentes existentes.
