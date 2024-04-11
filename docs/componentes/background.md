# Background

[component-header:cps-background]

<div class="background-example">

```html preview
<cps-background></cps-background>
```

```jsx react
import { CpsBackground } from '@cps-elements/web/react/background';

const App = () => <CpsBackground></CpsBackground>;
```

?> <i>Por que não apenas aplicar uma `background-image` no corpo da página usando CSS?</i><br><br>Este componente oferece uma experiência mais avançada, aplicando efeitos sobre a imagem de diferentes maneiras, dependendo da variação utilizada (conforme documentado a seguir). Além disso, o plano de fundo também se ajusta automaticamente ao tema de [modo escuro](/fundamentos/temas?id=modo-escuro) com o uso deste componente, garantindo que as cores da imagem se encaixe melhor ao restante do esquema de cores.

## Exemplos

### Variantes

Use o atributo `variant` para definir a variação visual do plano de fundo.

```html preview
<cps-background class="background-variants">
  <cps-card>
    <cps-radio-group label="Variação:" value="base">
      <cps-radio value="base">Base</cps-radio>
      <cps-radio value="acrylic">Acrílico</cps-radio>
      <cps-radio value="blurred">Borrado</cps-radio>
    </cps-radio-group>
  </cps-card>
</cps-background>

<script>
  const background = document.querySelector('.background-variants');
  const radioGroup = document.querySelector('.background-variants cps-radio-group');

  radioGroup.addEventListener('cps-change', event => {
    debugger;
    background.variant = event.detail.value ?? 'base';
  });
</script>
```

### Centralizar conteúdo

Use o atributo `centered` para centralizar o conteúdo do plano de fundo.

```html preview
<cps-background class="background-centered" centered>
  <cps-card>
    <cps-radio-group label="Variação:" value="base">
      <cps-radio value="base">Base</cps-radio>
      <cps-radio value="acrylic">Acrílico</cps-radio>
      <cps-radio value="blurred">Borrado</cps-radio>
    </cps-radio-group>
  </cps-card>
</cps-background>

<script>
  const background = document.querySelector('.background-centered');
  const radioGroup = document.querySelector('.background-centered cps-radio-group');

  radioGroup.addEventListener('cps-change', event => {
    background.variant = event.detail.value ?? 'base';
  });
</script>
```

### Fundo personalizado

Por padrão, o plano de fundo exibe uma foto do Centro "Paula Souza", imagem esta embutida através de `base64` junto ao próprio componente. Entretanto, a variável CSS `--background-image` pode ser utilizada para definir uma imagem de fundo personalizada.

```html preview
<style>
  .background-custom {
    --background-image: url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTcxMjg2OTIxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280');
  }
</style>

<cps-background class="background-custom">
  <cps-card>
    <cps-radio-group label="Variação:" value="base">
      <cps-radio value="base">Base</cps-radio>
      <cps-radio value="acrylic">Acrílico</cps-radio>
      <cps-radio value="blurred">Borrado</cps-radio>
    </cps-radio-group>
  </cps-card>
</cps-background>

<script>
  const background = document.querySelector('.background-custom');
  const radioGroup = document.querySelector('.background-custom cps-radio-group');

  radioGroup.addEventListener('cps-change', event => {
    background.variant = event.detail.value ?? 'base';
  });
</script>
```

!> Embora a variável CSS `--background-image` flexibilize este componente, ela está disponível apenas para casos extremos ou para necessidades de adaptação avançada para projetos externos. Se você estiver utilizando CPS Elements em um projeto aderente CPS Design System, não personalize a imagem de plano de fundo desta forma.

</div>

[component-metadata:cps-background]

<style>
  .background-example .code-block__preview {
    padding: 0;
    height: 420px;
    overflow: hidden;
  }

  .background-example cps-card {
    display: inline-block;
    margin: 1.5rem;
  }
</style>
