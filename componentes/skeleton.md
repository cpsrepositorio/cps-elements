# Skeleton

[component-header:cps-skeleton]

Trata-se de um simples espaço reservado para estruturação _layouts_ temporários, que imitem o que os usuários verão quando o conteúdo terminar de carregar. Evita grandes áreas de espaço vazio durante operações assíncronas, bem como bloqueios de renderização do restante da interface, além de fornecer evidência de que algo está acontecendo em segundo plano.

Indicadores esqueleto tentam não ser excessivamente opinativos, pois há infinitas possibilidades de se projetar _layouts_. Portanto, você provavelmente usará mais de um indicador para criar o efeito desejado, bem como utilizará CSS para definir as medidas e posicionamentos do _layout_ de carregamento que inclui o conjunto de indicadores desejados.

```html preview
<div class="sample-layout">
  <header>
    <cps-skeleton rounded="full"></cps-skeleton>
    <cps-skeleton></cps-skeleton>

    <div>
      <cps-skeleton rounded="none"></cps-skeleton>
      <cps-skeleton rounded="corner"></cps-skeleton>
      <cps-skeleton rounded="none"></cps-skeleton>
      <cps-skeleton rounded="corner"></cps-skeleton>
      <cps-skeleton rounded="none"></cps-skeleton>
      <cps-skeleton rounded="corner"></cps-skeleton>
    </div>
  </header>

  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
</div>

<style>
  .sample-layout {
    display: grid;
    gap: 1rem;
  }

  .sample-layout header {
    display: grid;
    grid-template-areas:
      'avatar title'
      'avatar subtitle';
    grid-template-columns: 3rem 1fr;
    gap: 1rem;
  }

  .sample-layout header > cps-skeleton:nth-child(1) {
    grid-area: avatar;
    width: 3rem;
    height: 3rem;
  }

  .sample-layout header > cps-skeleton:nth-child(2) {
    grid-area: title;
    width: 75%;
    height: 1.5rem;
  }

  .sample-layout header div {
    grid-area: subtitle;
  }

  .sample-layout header div > cps-skeleton {
    display: inline-block;
    height: 1rem;
  }

  .sample-layout header div > cps-skeleton:nth-child(even) {
    margin-right: 1rem;
    width: 15%;
  }

  .sample-layout header div > cps-skeleton:nth-child(odd) {
    margin-right: 0.5rem;
    width: 1rem;
  }

  .sample-layout > cps-skeleton:is(:nth-child(2), :nth-child(5)) {
    width: 95%;
  }

  .sample-layout > cps-skeleton:nth-child(4) {
    width: 80%;
  }
</style>
```

```jsx react
import { CpsSkeleton } from '@cps-elements/web/react/skeleton';

const css = `
  .sample-layout {
    display: grid;
    gap: 1rem;
  }

  .sample-layout header {
    display: grid;
    grid-template-areas:
      'avatar title'
      'avatar subtitle';
    grid-template-columns: 3rem 1fr;
    gap: 1rem;
  }

  .sample-layout header > cps-skeleton:nth-child(1) {
    grid-area: avatar;
    width: 3rem;
    height: 3rem;
  }

  .sample-layout header > cps-skeleton:nth-child(2) {
    grid-area: title;
    width: 75%;
    height: 1.5rem;
  }

  .sample-layout header div {
    grid-area: subtitle;
  }

  .sample-layout header div > cps-skeleton {
    display: inline-block;
    height: 1rem;
  }

  .sample-layout header div > cps-skeleton:nth-child(even) {
    margin-right: 1rem;
    width: 15%;
  }

  .sample-layout header div > cps-skeleton:nth-child(odd) {
    margin-right: 0.5rem;
    width: 1rem;
  }

  .sample-layout > cps-skeleton:is(:nth-child(2), :nth-child(5)) {
    width: 95%;
  }

  .sample-layout > cps-skeleton:nth-child(4) {
    width: 80%;
  }
`;

const App = () => (
  <>
    <div className="sample-layout">
      <header>
        <CpsSkeleton rounded="full" />
        <CpsSkeleton />

        <div>
          <CpsSkeleton rounded="none" />
          <CpsSkeleton rounded="corner" />
          <CpsSkeleton rounded="none" />
          <CpsSkeleton rounded="corner" />
          <CpsSkeleton rounded="none" />
          <CpsSkeleton rounded="corner" />
        </div>
      </header>

      <CpsSkeleton />
      <CpsSkeleton />
      <CpsSkeleton />
      <CpsSkeleton />
      <CpsSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

?> Caso se encontre usando os mesmos indicadores com a mesma formatação, com certa frequência, considere criar um _template_ ou componente (dependendo da tecnologia que está usando para construir suas interfaces) que os renderize com o arranjo e o estilo desejados de forma simplificada, repetidas vezes.

## Exemplos

### Efeitos

O atributo `effect` permite configurar o evento de carregamento desejado.

Há dois efeitos pré-concebidos, `sheen` (o valor padrão) e `pulse`. Efeitos são intencionalmente sutis, pois podem ser distrativos quando usados extensivamente. Caso tal possível distração não seja adequada em determinada situação, é possível utilizar o valor `none`, para exibir um esqueleto de carregamento estático, não animado.

```html preview
<div class="skeleton-effect">
  <span>Sheen</span>
  <cps-skeleton effect="sheen"></cps-skeleton>

  <span>Pulse</span>
  <cps-skeleton effect="pulse"></cps-skeleton>

  <span>None</span>
  <cps-skeleton effect="none"></cps-skeleton>
</div>

<style>
  .skeleton-effect cps-skeleton {
    height: 2rem;
  }
</style>
```

```jsx react
import { CpsSkeleton } from '@cps-elements/web/react/skeleton';

const css = `
  .skeleton-effect cps-skeleton {
    height: 2rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-effect">
      <span>Sheen</span>
      <CpsSkeleton effect="sheen" />

      <span>Pulse</span>
      <CpsSkeleton effect="pulse" />

      <span>None</span>
      <CpsSkeleton effect="none" />
    </div>

    <style>{css}</style>
  </>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com a [especificação de _skeleton_](https://cpsrepositorio.github.io/cps-design-system/documentacao/skeleton-indicator.html), utilize sempre com o efeito padrão `sheen`, ou seja, não é necessário utilizar o atributo `effect`.

### Arredondamento dos cantos

Use o atributo `rounded` para definir o arredondamento de cantos do indicador.

```html preview
<div class="skeleton-rounded">
  <span>Default</span>
  <cps-skeleton rounded="default"></cps-skeleton>

  <span>Corner</span>
  <cps-skeleton rounded="corner"></cps-skeleton>

  <span>Full</span>
  <cps-skeleton rounded="full"></cps-skeleton>

  <span>None</span>
  <cps-skeleton rounded="none"></cps-skeleton>
</div>

<style>
  .skeleton-rounded cps-skeleton {
    height: 3rem;
  }

  .skeleton-rounded cps-skeleton:nth-of-type(3) {
    width: 3rem;
  }
</style>
```

```jsx react
import { CpsSkeleton } from '@cps-elements/web/react/skeleton';

const css = `
  .skeleton-rounded cps-skeleton {
    height: 3rem;
  }

  .skeleton-rounded cps-skeleton:nth-of-type(3) {
    width: 3rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-rounded">
      <span>Default</span>
      <CpsSkeleton rounded="default" />

      <span>Corner</span>
      <CpsSkeleton rounded="corner" />

      <span>Full</span>
      <CpsSkeleton rounded="full" />

      <span>None</span>
      <CpsSkeleton rounded="none" />
    </div>

    <style>{css}</style>
  </>
);
```

### Parágrafos

Basta usar múltiplos indicadores e alguns estilos de forma inteligente para simular parágrafos.

```html preview
<div class="skeleton-paragraphs">
  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
  <cps-skeleton></cps-skeleton>
</div>

<style>
  .skeleton-paragraphs {
    display: grid;
    gap: 1rem;
  }

  .skeleton-paragraphs cps-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs cps-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs cps-skeleton:last-child {
    width: 50%;
  }
</style>
```

```jsx react
import { CpsSkeleton } from '@cps-elements/web/react/skeleton';

const css = `
  .skeleton-paragraphs {
    display: grid;
    gap: 1rem;
  }

  .skeleton-paragraphs cps-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs cps-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs cps-skeleton:last-child {
    width: 50%;
  }
`;

const App = () => (
  <>
    <div className="skeleton-paragraphs">
      <CpsSkeleton />
      <CpsSkeleton />
      <CpsSkeleton />
      <CpsSkeleton />
      <CpsSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Avatares

Medidas `width` e `height` iguais criam um indicador esqueleto que simula um avatar quadrado, arredondado, ou circular, dependendo do valor utilizado em `rounded`.

```html preview
<div class="skeleton-avatars">
  <cps-skeleton rounded="none"></cps-skeleton>
  <cps-skeleton rounded="default"></cps-skeleton>
  <cps-skeleton rounded="full"></cps-skeleton>
</div>

<style>
  .skeleton-avatars cps-skeleton {
    display: inline-block;
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }
</style>
```

```jsx react
import { CpsSkeleton } from '@cps-elements/web/react/skeleton';

const css = `
  .skeleton-avatars cps-skeleton {
    display: inline-block;
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-avatars">
      <CpsSkeleton />
      <CpsSkeleton />
      <CpsSkeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Formas personalizadas

Através do atributo `rounded` é possível criar formas personalizadas simples, como círculos, quadrados e retângulos. Para formas mais complexas, é possível aplicar CSS `clip-path` normalmente (como a qualquer outro elemento HTML). Experimente a ferramenta [Clippy](https://bennettfeely.com/clippy/) se precisar de ajuda para gerar formas personalizadas.

<!-- prettier-ignore-start -->
```html preview
<div class="skeleton-shapes">
  <cps-skeleton class="triangle"></cps-skeleton>
  <cps-skeleton class="cross"></cps-skeleton>
  <cps-skeleton class="comment"></cps-skeleton>
</div>

<style>
  .skeleton-shapes cps-skeleton {
    display: inline-block;
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }

  .skeleton-shapes .triangle {
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross {
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }

  .skeleton-shapes .comment {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }
</style>
```
<!-- prettier-ignore-end -->

```jsx react
import { CpsSkeleton } from '@cps-elements/web/react/skeleton';

const css = `
  .skeleton-shapes cps-skeleton {
    display: inline-block;
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }

  .skeleton-shapes .triangle {
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross {
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }

  .skeleton-shapes .comment {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }
`;

const App = () => (
  <>
    <div className="skeleton-shapes">
      <CpsSkeleton className="triangle" />
      <CpsSkeleton className="cross" />
      <CpsSkeleton className="comment" />
    </div>

    <style>{css}</style>
  </>
);
```

### Cores personalizadas

É possível utilizar as propriedades CSS `--color` e `--accent-color` para ajustar a cor de cada indicador.

```html preview
<cps-skeleton style="--color: tomato; --accent-color: #ffb094"></cps-skeleton>
```

```jsx react
import { CpsSkeleton } from '@cps-elements/web/react/skeleton';

const App = () => <CpsSkeleton style={{ '--color': 'tomato', '--accent-color': '#ffb094' }} />;
```

!> Embora estas técnicas de estilização avançada sejam poderosas e flexíveis, estão disponíveis para casos extremos ou para necessidades de adaptação avançada para projetos externos. Se você estiver utilizando CPS Elements em um projeto aderente CPS Design System, não personalize a aparência dos componentes desta forma.

[component-metadata:cps-skeleton]

<style>
  .skeleton-effect,
  .skeleton-rounded {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
    font: var(--cps-font-label);
  }

  .skeleton-effect span,
  .skeleton-rounded span {
    grid-column: 1;
  }

  .skeleton-effect cps-skeleton,
  .skeleton-rounded cps-skeleton {
    grid-column: 2;
    height: 3rem;
  }
</style>
