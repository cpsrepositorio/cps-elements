# Drawer

[component-header:cps-drawer]

```html preview
<div class="drawer-overview">
  <cps-drawer label="Exemplo">
    Conteúdo da gaveta de navegação.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-overview');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDrawer } from '@cps-elements/web/react/drawer';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CpsDrawer label="Exemplo" open={isOpen}>
        Conteúdo da gaveta de navegação.
        <CpsButton slot="footer" autofocus onClick={() => setOpen(false)}>
          Fechar
        </CpsButton>
      </CpsDrawer>

      <CpsButton onClick={() => setOpen(true)}>Abrir gaveta de navegação</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDrawer } from '@cps-elements/web/components/drawer';

  const isOpen = ref(false);
</script>

<template>
  <cps-drawer label="Exemplo" :open="isOpen">
    Conteúdo da gaveta de navegação.
    <cps-button slot="footer" autofocus @click="isOpen = false">Fechar</cps-button>
  </cps-drawer>
  <cps-button @click="isOpen = true">Abrir gaveta de navegação</cps-button>
</template>
```

Funcionalmente, a gaveta de navegação é muito similar a uma [caixa de diálogo](/componentes/dialog) e, portanto, você pode considerar aquela documentação como complemento desta documentação se necessário.

?> **Recomendações de usabilidade**: Só use gavetas de navegação se precisar desviar completamente a operação para uma área mais restrita, por exemplo, para receber opções de navegação após uma seleção, responder perguntas paralelas, ou realizar edições rápidas em um registro previamente selecionado; Sempre forneça uma maneira clara para o usuário fechar a gaveta de navegação; Nunca aninhe gavetas, ou seja, nunca abra uma gaveta a partir de outra já aberta.

## Exemplos

### Atributo `open` versus métodos `show()` e `close()`

Use o atributo `open` para determinar quando a gaveta de navegação está aberta.

Esta abordagem é menos conveniente em programação imperativa, pois exige programaticamente adicionar e remover o atributo `open` (com `setAttribute` e `removeAttribute`). Entretanto, para cenários em programação reativa (como tipicamente realizado com React ou Vue), o atributo é justamente a forma mais conveniente de alternar a visibilidade da gaveta de navegação.

```html preview
<div class="drawer-example-open-attr">
  <cps-drawer label="Controlada pelo atributo">
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>
  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-open-attr');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button');

  // Controlando manualmente atribuição e remoção do atributo `open`.
  openButton.addEventListener('click', () => drawer.setAttribute('open', ''));
  closeButton.addEventListener('click', () => drawer.removeAttribute('open'));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDrawer } from '@cps-elements/web/react/drawer';

const App = () => {
  // A reatividade do React torna o uso do atributo `open` intuitivo.
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CpsDrawer label="Controlada pelo atributo" open={isOpen}>
        <CpsButton slot="footer" autofocus onClick={() => setOpen(false)}>
          Fechar
        </CpsButton>
      </CpsDrawer>

      <CpsButton onClick={() => setOpen(true)}>Abrir gaveta de navegação</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDrawer } from '@cps-elements/web/components/drawer';

  // A reatividade do Vue torna o uso do atributo `open` intuitivo.
  const isOpen = ref(false);
</script>

<template>
  <cps-drawer label="Controlada pelo atributo" :open="isOpen">
    <cps-button slot="footer" autofocus @click="isOpen = false">Fechar</cps-button>
  </cps-drawer>

  <cps-button @click="isOpen = true">Abrir gaveta de navegação</cps-button>
</template>
```

Use os métodos `show()` e `close()` para controlar imperativamente quando a gaveta de navegação é aberta ou fechada.

Esta abordagem normalmente facilita a construção e melhora a legibilidade de _scripts_ imperativos em JavaScript nativo. Por outro lado, costuma gerar código mais extenso e verboso quando a reatividade poderia ser uma opção.

```html preview
<div class="drawer-example-methods">
  <cps-drawer label="Controlada imperativamente">
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-methods');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button');

  // Imperativamente aproveitando os métodos `show()` e `close()`.
  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());
</script>
```

```jsx react
import { useRef } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDrawer } from '@cps-elements/web/react/drawer';

const App = () => {
  // Precisa de useRef para acessar a instância do CpsDrawer diretamente.
  const drawerRef = useRef(null);

  // Funções de apoio para poder chamar os métodos imperativamente.
  const handleOpen = () => drawerRef.current.show();
  const handleClose = () => drawerRef.current.close();

  return (
    <>
      <CpsDrawer label="Controlada imperativamente" ref={drawerRef}>
        <CpsButton slot="footer" autofocus onClick={handleClose}>
          Fechar
        </CpsButton>
      </CpsDrawer>

      <CpsButton onClick={handleOpen}>Abrir gaveta de navegação</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDrawer } from '@cps-elements/web/components/drawer';

  // Precisa de uma referência para a instância do elemento <cps-drawer>.
  const drawerRef = ref(null);

  // Funções de apoio para poder chamar os métodos imperativamente.
  const handleOpen = () => drawerRef.value.show();
  const handleClose = () => drawerRef.value.close();
</script>

<template>
  <cps-drawer label="Controlada imperativamente" ref="drawerRef">
    <cps-button slot="footer" autofocus @click="handleClose">Fechar</cps-button>
  </cps-drawer>

  <cps-button @click="handleOpen">Abrir gaveta de navegação</cps-button>
</template>
```

Em resumo, a diferença é sutil e ambas as opções geram o mesmo resultado final, porém utilizam abordagens de programação diferentes. Trata-se somente de versatilidade para o desenvolvedor escolher o que mais se adequaria às suas necessidades.

### Sem sobreposição de plano de fundo

Se você comparar com o elemento `<dialog>` nativo, perceberá que nosso método `show()` na realidade se comporta como o [`showModal()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) nativo. Isto é intencional, pois não consideramos adequado exibir tanto as [caixas de diálogo](/componentes/drawer) quanto as gavetas de navegação sem a sobreposição de plano de fundo (_backdrop_).

Se realmente desejado, é possível obter o resultado equivalente ao método [`show()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show) nativo, simplesmente estilizando a parte CSS `backdrop` do `<cps-drawer>` de forma a mantê-la invisível o tempo todo.

```html preview
<div class="drawer-example-no-backdrop">
  <cps-drawer label="Sem sobreposição">
    Conteúdo da gaveta de navegação.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<style>
  .drawer-example-no-backdrop cps-drawer::part(backdrop) {
    display: none;
  }
</style>

<script>
  const container = document.querySelector('.drawer-example-no-backdrop');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDrawer } from '@cps-elements/web/react/drawer';

const css = `
  cps-drawer::part(backdrop) {
    display: none;
  }
`;

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div>
        <CpsDrawer label="Sem sobreposição" open={isOpen}>
          Conteúdo da gaveta de navegação.
          <CpsButton slot="footer" autofocus onClick={() => setOpen(false)}>
            Fechar
          </CpsButton>
        </CpsDrawer>

        <CpsButton onClick={() => setOpen(true)}>Abrir gaveta de navegação</CpsButton>
      </div>

      <style>{css}</style>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDrawer } from '@cps-elements/web/components/drawer';

  const isOpen = ref(false);
</script>

<template>
  <cps-drawer label="Sem sobreposição" :open="isOpen">
    Conteúdo da gaveta de navegação.
    <cps-button slot="footer" autofocus @click="isOpen = false">Fechar</cps-button>
  </cps-drawer>

  <cps-button @click="isOpen = true">Abrir gaveta de navegação</cps-button>
</template>

<style scoped>
  cps-drawer::part(backdrop) {
    display: none;
  }
</style>
```

!> **Atenção!** Apesar de ser possível para aderência ao `<dialog>` nativo, **não recomendamos** esconder o _backdrop_. Fazer isso prejudica a visibilidade prioritária da gaveta de navegação, bem como reduz a usabilidade geral ao se permitir focar e interagir com o restante do conteúdo enquanto a gaveta ainda está aberta.

### Fechável

Use o atributo `closable` para exibir um botão de fechar no cabeçalho, como uma forma ainda mais evidente ao usuário de que a gaveta de navegação pode ser fechada. Não possui efeito caso não haja cabeçalho, ou seja, se não houver valor no atributo `label` e não houver conteúdo no _slot_ `label`.

```html preview
<div class="drawer-example-closable">
  <cps-drawer label="Botão fechar embutido" closable>
    Neste exemplo, não estamos usando botões no rodapé para deixar claro que o botão fechar no cabeçalho não exige nada
    mais para funcionar.
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-closable');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');

  openButton.addEventListener('click', () => drawer.show());
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDrawer } from '@cps-elements/web/react/drawer';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CpsDrawer label="Botão fechar embutido" closable open={isOpen}>
        Neste exemplo, não estamos usando botões no rodapé para deixar claro que o botão fechar no cabeçalho não exige
        nada mais para funcionar.
      </CpsDrawer>

      <CpsButton onClick={() => setOpen(true)}>Abrir gaveta de navegação</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDrawer } from '@cps-elements/web/components/drawer';

  const isOpen = ref(false);
</script>

<template>
  <cps-drawer label="Botão fechar embutido" closable :open="isOpen">
    Neste exemplo, não estamos usando botões no rodapé para deixar claro que o botão fechar no cabeçalho não exige nada
    mais para funcionar.
  </cps-drawer>

  <cps-button @click="isOpen = true">Abrir gaveta de navegação</cps-button>
</template>
```

### Posição de abertura

Use o atributo `placement` para determinar o ponto de abertura da gaveta de navegação. Por padrão, a gaveta aparece a partir da posição final da visualização (`end`), mas pode ser modificada para `start` (início), `top` (superior) ou `bottom` (inferior).

```html preview no-vue
<div class="drawer-example-placement">
  <cps-drawer label="Posicionamento padrão" closable>
    Conteúdo da gaveta de navegação aparecendo a partir de seu posicionamento padrão, ou seja, no canto final da página.
  </cps-drawer>

  <cps-label variant="secondary">Posição padrão (<code>end</code>):</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Canto superior" placement="top" closable>
    Conteúdo da gaveta de navegação aparecendo a partir do topo da página.
  </cps-drawer>

  <cps-label variant="secondary">Canto superior (<code>top</code>):</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Canto inicial" placement="start" closable>
    Conteúdo da gaveta de navegação aparecendo a partir do canto inicial da página, usualmente o lado esquerdo em
    línguas ocidentais, com leitura da esquerda para a direita.
  </cps-drawer>

  <cps-label variant="secondary">Canto inicial (<code>start</code>):</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Canto inferior" placement="bottom" closable>
    Conteúdo da gaveta de navegação aparecendo a partir da parte inferior da página.
  </cps-drawer>

  <cps-label variant="secondary">Canto inferior (<code>bottom</code>):</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />
</div>

<script>
  const container = document.querySelector('.drawer-example-placement');
  const drawers = container.querySelectorAll('cps-drawer');
  const openButtons = container.querySelectorAll(':scope > cps-button');

  openButtons.forEach((button, index) => {
    button.addEventListener('click', () => drawers[index].show());
  });
</script>
```

### Contida no elemento pai

Use o atributo `contained` para que a gaveta de navegação apareça contida em seu elemento pai, em vez de ocupar toda a página. Isso pode ser útil para _layouts_ avançados e áreas restritas.

```html preview
<div class="drawer-example-contained">
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <div class="position-relative-container">
    <cps-drawer label="Exemplo" contained closable>Conteúdo da gaveta de navegação.</cps-drawer>
  </div>
</div>

<style>
  .position-relative-container {
    position: relative;
  }
</style>

<script>
  const container = document.querySelector('.drawer-example-contained');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');

  openButton.addEventListener('click', () => drawer.show());
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDrawer } from '@cps-elements/web/react/drawer';

const css = `
  .position-relative-container {
    position: relative;
  }
`;

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div>
        <CpsButton onClick={() => setOpen(true)}>Abrir gaveta de navegação</CpsButton>
        <br />
        <br />

        <div className="position-relative-container">
          <CpsDrawer label="Exemplo" contained closable open={isOpen}>
            Conteúdo da gaveta de navegação.
          </CpsDrawer>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDrawer } from '@cps-elements/web/components/drawer';

  const isOpen = ref(false);
</script>

<template>
  <cps-button @click="isOpen = true">Abrir gaveta de navegação</cps-button><br /><br />

  <div class="position-relative-container">
    <cps-drawer label="Exemplo" contained closable :open="isOpen">Conteúdo da gaveta de navegação.</cps-drawer>
  </div>
</template>

<style scoped>
  .position-relative-container {
    position: relative;
  }
</style>
```

### Rótulo e acessibilidade

A gaveta de navegação oferece diferentes maneiras para definir seu rótulo descritivo principal.

Use o atributo `label` para especificar um rótulo textual simples que aparece no cabeçalho da gaveta de navegação, o qual também serve automaticamente para fins de acessibilidade.

```html preview no-vue
<div class="drawer-example-label-text">
  <cps-drawer label="Exemplo apenas com cabeçalho"></cps-drawer>

  <cps-label variant="secondary">Apenas cabeçalho:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Exemplo com cabeçalho e rodapé">
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-label variant="secondary">Cabeçalho e rodapé:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Exemplo com cabeçalho e corpo">Conteúdo de exemplo no corpo da gaveta de navegação.</cps-drawer>

  <cps-label variant="secondary">Cabeçalho e corpo:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Exemplo completo">
    Conteúdo de exemplo no corpo da gaveta de navegação.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-label variant="secondary">Cabeçalho, corpo e rodapé:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button>

  <script>
    const container = document.querySelector('.drawer-example-label-text');
    const dialogs = container.querySelectorAll('cps-drawer');
    const openButtons = container.querySelectorAll(':scope > cps-button');
    const closeButtons = container.querySelectorAll('cps-button[slot="footer"]');

    openButtons.forEach((button, index) => {
      button.addEventListener('click', () => dialogs[index].show());
    });

    closeButtons.forEach(button => {
      button.addEventListener('click', () => button.parentElement.close());
    });
  </script>
</div>
```

Use o _slot_ `label` ao invés do atributo, para inserir conteúdo HTML no rótulo. Observe que até mesmo outros componentes CPS Elements podem ser usados na abordagem com _slot_.

```html preview no-vue
<div class="drawer-example-label-slot">
  <cps-drawer>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Apenas cabeçalho usando <code>slot</code></cps-label>
    </div>
  </cps-drawer>

  <cps-label variant="secondary">Apenas cabeçalho:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Exemplo com cabeçalho usando <code>slot</code> mais rodapé</cps-label>
    </div>
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-label variant="secondary">Cabeçalho e rodapé:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Exemplo com cabeçalho usando <code>slot</code> mais corpo</cps-label>
    </div>
    Conteúdo de exemplo no corpo da gaveta de navegação.
  </cps-drawer>

  <cps-label variant="secondary">Cabeçalho e corpo:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Exemplo completo com cabeçalho usando <code>slot</code></cps-label>
    </div>
    Conteúdo de exemplo no corpo da gaveta de navegação.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-label variant="secondary">Cabeçalho, corpo e rodapé:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button>

  <script>
    const container = document.querySelector('.drawer-example-label-slot');
    const dialogs = container.querySelectorAll('cps-drawer');
    const openButtons = container.querySelectorAll(':scope > cps-button');
    const closeButtons = container.querySelectorAll('cps-button[slot="footer"]');

    openButtons.forEach((button, index) => {
      button.addEventListener('click', () => dialogs[index].show());
    });

    closeButtons.forEach(button => {
      button.addEventListener('click', () => button.parentElement.close());
    });
  </script>
</div>
```

Por fim, embora não tão comum, podem existir casos onde não seja necessário ter um rótulo visual na gaveta de navegação, ou ainda este rótulo visual pode não ser descritivo o suficiente para fins de acessibilidade.

Neste caso, garanta que o atributo `aria-label` está presente, definindo um rótulo exclusivo para acessibilidade.

```html preview no-vue
<div class="drawer-example-aria-label">
  <cps-drawer aria-label="Exemplo sem rótulo visual mas com acessibilidade">
    Não apresento visualmente a área de cabeçalho. Entretanto, sou acessível por causa do uso de
    <code>aria-label</code>.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>

  <script>
    const container = document.querySelector('.drawer-example-aria-label');
    const dialogs = container.querySelectorAll('cps-drawer');
    const openButtons = container.querySelectorAll(':scope > cps-button');
    const closeButtons = container.querySelectorAll('cps-button[slot="footer"]');

    openButtons.forEach((button, index) => {
      button.addEventListener('click', () => dialogs[index].show());
    });

    closeButtons.forEach(button => {
      button.addEventListener('click', () => button.parentElement.close());
    });
  </script>
</div>
```

### Ações no rodapé

Use o _slot_ `footer` para designar os elementos a serem exibidos no rodapé de sua gaveta de navegação, os quais comumente são [botões](/componentes/button), embora outros elementos e componentes sejam viáveis. Por padrão, a estilização garante que um elemento não ocupe mais de 50% do tamanho do rodapé.

```html preview no-vue
<div class="drawer-example-footer-slot">
  <cps-drawer label="Exemplo sem rodapé" closable>
    Embora pouco usual, é possível ter uma gaveta de navegação sem nenhum elemento no rodapé. Neste caso, é altamente
    recomendável usar o atributo <code>closable</code> para que o usuário tenha ao menos uma indicação visual no
    cabeçalho sobre a gaveta de navegação poder ser fechada.
  </cps-drawer>

  <cps-label variant="secondary">Sem rodapé:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Exemplo com um botão" closable>
    Provavelmente a configuração mais comum de gaveta de navegação, utilizando somente um botão. Neste caso, é altamente
    recomendável que a ação deste único botão seja justamente a de fechar a gaveta de navegação. Se uma ação diferente
    de apenas fechar for necessária, use dois botões no rodapé.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-label variant="secondary">Com um botão:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Exemplo com dois botões" closable>
    Outra variação típica de gaveta de navegação, recomendada caso haja uma ação especial em um dos botões, o qual deve
    ser destacado de forma acentuada, enquanto o outro botão é mantido como botão de fechamento.
    <cps-button slot="footer" variant="accent" autofocus>Confirmar</cps-button>
    <cps-button slot="footer">Cancelar</cps-button>
  </cps-drawer>

  <cps-label variant="secondary">Com dois botões:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button><br /><br />

  <cps-drawer label="Exemplo com uma terceira ação" closable>
    Embora não usual, é de fato possível ter um número ainda maior de elementos definidos como
    <code>slot="footer"</code>. Eventualmente pode ser útil para apresentar algum rótulo ou link de apoio. Use com
    moderação, pois a apresentação visual pode se tornar confusa e incorretamente tirar o foco que os botões no rodapé
    deveriam ter.
    <cps-button slot="footer" variant="accent" autofocus>Confirmar</cps-button>
    <cps-button slot="footer">Cancelar</cps-button>
    <cps-link slot="footer" target="_blank">Saiba mais</cps-link>
  </cps-drawer>

  <cps-label variant="secondary">Com uma terceira ação:</cps-label>
  <cps-button>Abrir gaveta de navegação</cps-button>

  <script type="module">
    import { toast } from '@cps-elements/web/components/notification.js';

    const container = document.querySelector('.drawer-example-footer-slot');
    const dialogs = container.querySelectorAll('cps-drawer');
    const openButtons = container.querySelectorAll(':scope > cps-button');
    const closeButtons = container.querySelectorAll('cps-button[slot="footer"]');

    openButtons.forEach((button, index) => {
      button.addEventListener('click', () => dialogs[index].show());
    });

    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.variant === 'accent') {
          toast('Confirmado para fins de demonstração!', {
            closable: true,
            duration: 3000,
            variant: 'success'
          });
        }

        button.parentElement.close();
      });
    });
  </script>
</div>
```

### Ações no cabeçalho

Use o _slot_ `header-actions` para injetar mais [botões de ícone](/componentes/icon-button), se necessário. Este _slot_ funciona mesmo que a gaveta de navegação não seja fechável, mas não possui efeito caso não haja cabeçalho, ou seja, se não houver valor no atributo `label` e não houver conteúdo no _slot_ `label`.

```html preview no-vue
<div class="drawer-example-header-actions">
  <cps-drawer label="Exemplo com ação no cabeçalho" closable>
    <cps-tooltip slot="header-actions" content="Abrir nova aba" hoist>
      <cps-icon-button name="arrow-up-right-fill"></cps-icon-button>
    </cps-tooltip>
    Conteúdo de exemplo no corpo da gaveta de navegação.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-header-actions');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button[slot="footer"]');
  const newWindowButton = drawer.querySelector('[slot="header-actions"] cps-icon-button');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());
  newWindowButton.addEventListener('click', () => open(location.href));
</script>
```

### Tamanho personalizado

Use a propriedade CSS personalizada `--size` para definir um tamanho preferencial para gaveta de navegação, quando houver espaço para tal. Observe que, ainda assim, a gaveta de navegação diminuirá para se acomodar em telas menores.

```html preview no-vue
<div class="drawer-example-size">
  <cps-drawer label="Exemplo com largura personalizada" style="--size: 80vw">
    Conteúdo de exemplo no corpo da gaveta de navegação.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-size');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());
</script>
```

?> Diferentemente da [caixa de diálogo](/componentes/dialog), que só aceita largura personalizada, a gaveta de navegação pode ter redimensionamento de seu `width`, quando `placement` é `start`/`end`, mas também pode se referir ao `height`, quando `placement` é `top`/`bottom`.

### Rolagem

De forma intencional, a altura de uma gaveta de navegação nunca excederá a altura vertical da _viewport_. Desse modo, gavetas de navegação não rolarão com a página, garantindo que o cabeçalho e o rodapé estejam sempre acessíveis ao usuário.

O conteúdo interno no corpo da gaveta de navegação, entretanto, pode exceder este tamanho gerando rolagem automática dentro da gaveta de navegação, sem nenhuma medida adicional necessária.

```html preview no-vue
<div class="drawer-example-scrolling">
  <cps-drawer label="Exemplo com rolagem">
    <div style=" border: dashed 2px var(--cps-color-stroke-primary); padding: 1rem; height: 150vh">
      <p>Role para baixo e experimente! 👇</p>
    </div>
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-scrolling');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());
</script>
```

### Impedindo o fechamento

Por padrão, gavetas de navegação se fecham quando o usuário clica no botão fechar, na sobreposição sobre a tela (_backdrop_), ou pressiona a tecla <kbd>Escape</kbd>. Na maioria dos casos, tal comportamento padrão é o melhor em termos de usabilidade. No entanto, podem existir situações onde isso é indesejável, especialmente se ocorrer perda de dados que estão sendo preenchidos dentro da gaveta de navegação.

Para manter a gaveta de navegação aberta nesses casos, você pode cancelar o evento `cps-request-close`. Quando cancelado, ela permanecerá aberta e pulsará brevemente para chamar a atenção do usuário sobre o evento interrompido.

Você também pode usar `event.detail.source` para determinar o que acionou a solicitação de fechamento, caso deseje impedir o fechamento dependendo da origem. Este exemplo impede o fechamento quando a sobreposição é clicada, mas permite que o botão fechar ou <kbd>Escape</kbd> a fechem.

```html preview no-vue
<div class="drawer-example-deny-close">
  <cps-drawer label="Exemplo" closable>
    Esta gaveta de navegação não será fechada ao clicar na sobreposição.
    <cps-button slot="footer" autofocus>Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-deny-close');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());

  // Impedindo o fechamento quando o usuário clica na sobreposição sobre a tela.
  drawer.addEventListener('cps-request-close', event => {
    if (event.detail.source === 'backdrop') {
      event.preventDefault();
    }
  });
</script>
```

### Definindo o foco inicial

Por padrão, o painel da gaveta de navegação receberá o foco quando aberta. Isso permite que um pressionamento subsequente da tecla tab coloque o foco no primeiro elemento tabulável na gaveta de navegação. Se você quiser que um elemento diferente tenha foco, adicione o atributo `autofocus` a ele, como mostrado abaixo.

```html preview no-vue
<div class="drawer-example-autofocus">
  <cps-drawer label="Exemplo com auto-foco">
    <cps-input autofocus placeholder="Eu tenho foco quando a gaveta de navegação abre"></cps-input>
    <cps-button slot="footer">Fechar</cps-button>
  </cps-drawer>

  <cps-button>Abrir gaveta de navegação</cps-button>
</div>

<script>
  const container = document.querySelector('.drawer-example-autofocus');
  const drawer = container.querySelector('cps-drawer');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = drawer.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.close());
</script>
```

A definição do foco inicial é especialmente útil para fins de usabilidade. Mesmo que você esteja exibindo uma gaveta de navegação que não possui campos internos em seu corpo, você pode usar o `autofocus` nos botões do rodapé, para facilmente determinar qual ação é esperada quando o usuário pressionar a tecla <kbd>Enter</kbd>, uma vez que o elemento em foco é executado quando esta tecla é pressionada.

?> Você pode personalizar ainda mais o comportamento do foco inicial cancelando o evento `cps-initial-focus` e definindo o foco você mesmo dentro do manipulador de eventos.

[component-metadata:cps-drawer]

<style>
.position-relative-container {
  border: solid 1px var(--cps-color-stroke-primary);
  border-radius: var(--cps-border-radius-large);
  background: repeating-conic-gradient(var(--cps-palette-neutral-200) 0% 25%, var(--cps-palette-neutral-100) 0% 50%) 0 0/16px 16px;
  background-clip: padding-box;
  height: 8rem;
  overflow: hidden;
}
</style>
