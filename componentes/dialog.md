# Dialog

[component-header:cps-dialog]

```html preview
<div class="dialog-overview">
  <cps-dialog label="Exemplo">
    Conteúdo de exemplo no corpo da caixa de diálogo.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-overview');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.close());
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDialog } from '@cps-elements/web/react/dialog';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CpsDialog label="Exemplo" open={isOpen}>
        Conteúdo de exemplo no corpo da caixa de diálogo.
        <CpsButton slot="footer" autofocus onClick={() => setOpen(false)}>
          Ok
        </CpsButton>
      </CpsDialog>

      <CpsButton onClick={() => setOpen(true)}>Abrir caixa de diálogo</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDialog } from '@cps-elements/web/components/dialog';

  const isOpen = ref(false);
</script>

<template>
  <cps-dialog label="Exemplo" :open="isOpen">
    Conteúdo de exemplo no corpo da caixa de diálogo.
    <cps-button slot="footer" autofocus @click="isOpen = false">Ok</cps-button>
  </cps-dialog>

  <cps-button @click="isOpen = true">Abrir caixa de diálogo</cps-button>
</template>
```

?> **Recomendações de usabilidade**: Só use caixas de diálogo se precisar de atenção completa e imediata do usuário, por exemplo, ao confirmar uma ação destrutiva; Sempre forneça uma maneira clara para o usuário fechar a caixa de diálogo; Nunca aninhe caixas de diálogo, ou seja, nunca abra uma caixa a partir de outra já aberta.

## Exemplos

### Atributo `open` versus métodos `show()` e `close()`

Use o atributo `open` para determinar quando a caixa de diálogo está aberta.

Esta abordagem é menos conveniente em programação imperativa, pois exige programaticamente adicionar e remover o atributo `open` (com `setAttribute` e `removeAttribute`). Entretanto, para cenários em programação reativa (como tipicamente realizado com React ou Vue), o atributo é justamente a forma mais conveniente de alternar a visibilidade da caixa de diálogo.

```html preview
<div class="dialog-example-open-attr">
  <cps-dialog label="Controlada pelo atributo">
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-open-attr');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button');

  // Controlando manualmente atribuição e remoção do atributo `open`.
  openButton.addEventListener('click', () => dialog.setAttribute('open', ''));
  closeButton.addEventListener('click', () => dialog.removeAttribute('open'));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDialog } from '@cps-elements/web/react/dialog';

const App = () => {
  // A reatividade do React torna o uso do atributo `open` intuitivo.
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CpsDialog label="Controlada pelo atributo" open={isOpen}>
        <CpsButton slot="footer" autofocus onClick={() => setOpen(false)}>
          Ok
        </CpsButton>
      </CpsDialog>

      <CpsButton onClick={() => setOpen(true)}>Abrir caixa de diálogo</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDialog } from '@cps-elements/web/components/dialog';

  // A reatividade do Vue torna o uso do atributo `open` intuitivo.
  const isOpen = ref(false);
</script>

<template>
  <cps-dialog label="Controlada pelo atributo" :open="isOpen">
    <cps-button slot="footer" autofocus @click="isOpen = false">Ok</cps-button>
  </cps-dialog>

  <cps-button @click="isOpen = true">Abrir caixa de diálogo</cps-button>
</template>
```

Use os métodos `show()` e `close()` para controlar imperativamente quando a caixa de diálogo é aberta ou fechada.

Esta abordagem normalmente facilita a construção e melhora a legibilidade de _scripts_ imperativos em JavaScript nativo. Por outro lado, costuma gerar código mais extenso e verboso quando a reatividade poderia ser uma opção.

```html preview
<div class="dialog-example-methods">
  <cps-dialog label="Controlada imperativamente">
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-methods');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button');

  // Imperativamente aproveitando os métodos `show()` e `close()`.
  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.close());
</script>
```

```jsx react
import { useRef } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDialog } from '@cps-elements/web/react/dialog';

const App = () => {
  // Precisa de useRef para acessar a instância do CpsDialog diretamente.
  const dialogRef = useRef(null);

  // Funções de apoio para poder chamar os métodos imperativamente.
  const handleOpen = () => dialogRef.current.show();
  const handleClose = () => dialogRef.current.close();

  return (
    <>
      <CpsDialog label="Controlada imperativamente" ref={dialogRef}>
        <CpsButton slot="footer" autofocus onClick={handleClose}>
          Ok
        </CpsButton>
      </CpsDialog>

      <CpsButton onClick={handleOpen}>Abrir caixa de diálogo</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDialog } from '@cps-elements/web/components/dialog';

  // Precisa de uma referência para a instância do elemento <cps-dialog>.
  const dialogRef = ref(null);

  // Funções de apoio para poder chamar os métodos imperativamente.
  const handleOpen = () => dialogRef.value.show();
  const handleClose = () => dialogRef.value.close();
</script>

<template>
  <cps-dialog label="Controlada imperativamente" ref="dialogRef">
    <cps-button slot="footer" autofocus @click="handleClose">Ok</cps-button>
  </cps-dialog>

  <cps-button @click="handleOpen">Abrir caixa de diálogo</cps-button>
</template>
```

Em resumo, a diferença é sutil e ambas as opções geram o mesmo resultado final, porém utilizam abordagens de programação diferentes. Trata-se somente de versatilidade para o desenvolvedor escolher o que mais se adequaria às suas necessidades.

?> Se você já usou o elemento `<dialog>` nativo, pode ter percebido que nosso `show()` na realidade se comporta como o [`showModal()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) nativo. Isto é intencional, pois não consideramos adequado exibir caixas de diálogo sem sobreposição que cobre a tela (_backdrop_). Se desejado, é possível obter o resultado equivalente ao método [`show()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show) nativo, simplesmente estilizando a parte CSS `backdrop` do `<cps-dialog>` de forma a mantê-la invisível, entretanto não recomendamos tal abordagem.

### Fechável

Use o atributo `closable` para exibir um botão de fechar no cabeçalho, como uma forma ainda mais evidente ao usuário de que a caixa de diálogo pode ser fechada. Não possui efeito caso não haja cabeçalho, ou seja, se não houver valor no atributo `label` e não houver conteúdo no _slot_ `label`.

```html preview
<div class="dialog-example-closable">
  <cps-dialog label="Exemplo com botão fechar embutido" closable>
    Neste exemplo, não estamos usando botões no rodapé para deixar claro que o botão fechar no cabeçalho não exige nada
    mais para funcionar. Entretanto, em cenários reais, é provável que você também tenha seus próprios botões no rodapé.
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-closable');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');

  openButton.addEventListener('click', () => dialog.show());
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsDialog } from '@cps-elements/web/react/dialog';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CpsDialog label="Exemplo com botão fechar embutido" closable open={isOpen}>
        Neste exemplo, não estamos usando botões no rodapé para deixar claro que o botão fechar no cabeçalho não exige
        nada mais para funcionar. Entretanto, em cenários reais, é provável que você também tenha seus próprios botões
        no rodapé.
      </CpsDialog>

      <CpsButton onClick={() => setOpen(true)}>Abrir caixa de diálogo</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsDialog } from '@cps-elements/web/components/dialog';

  const isOpen = ref(false);
</script>

<template>
  <cps-dialog label="Exemplo com botão fechar embutido" closable :open="isOpen">
    Neste exemplo, não estamos usando botões no rodapé para deixar claro que o botão fechar no cabeçalho não exige nada
    mais para funcionar. Entretanto, em cenários reais, é provável que você também tenha seus próprios botões no rodapé.
  </cps-dialog>

  <cps-button @click="isOpen = true">Abrir caixa de diálogo</cps-button>
</template>
```

### Rótulo e acessibilidade

A caixa de diálogo oferece diferentes maneiras para definir seu rótulo descritivo principal.

Use o atributo `label` para especificar um rótulo textual simples que aparece no cabeçalho da caixa de diálogo, o qual também serve automaticamente para fins de acessibilidade.

```html preview no-vue
<div class="dialog-example-label-text">
  <cps-dialog label="Exemplo apenas com cabeçalho"></cps-dialog>

  <cps-label variant="secondary">Apenas cabeçalho:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog label="Exemplo com cabeçalho e rodapé">
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-label variant="secondary">Cabeçalho e rodapé:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog label="Exemplo com cabeçalho e corpo">Conteúdo de exemplo no corpo da caixa de diálogo.</cps-dialog>

  <cps-label variant="secondary">Cabeçalho e corpo:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog label="Exemplo completo">
    Conteúdo de exemplo no corpo da caixa de diálogo.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-label variant="secondary">Cabeçalho, corpo e rodapé:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button>

  <script>
    const container = document.querySelector('.dialog-example-label-text');
    const dialogs = container.querySelectorAll('cps-dialog');
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
<div class="dialog-example-label-slot">
  <cps-dialog>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Apenas cabeçalho usando <code>slot</code></cps-label>
    </div>
  </cps-dialog>

  <cps-label variant="secondary">Apenas cabeçalho:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Exemplo com cabeçalho usando <code>slot</code> mais rodapé</cps-label>
    </div>
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-label variant="secondary">Cabeçalho e rodapé:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Exemplo com cabeçalho usando <code>slot</code> mais corpo</cps-label>
    </div>
    Conteúdo de exemplo no corpo da caixa de diálogo.
  </cps-dialog>

  <cps-label variant="secondary">Cabeçalho e corpo:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog>
    <div slot="label">
      <cps-badge variant="informative" icon></cps-badge>
      <cps-label variant="tertiary">Exemplo completo com cabeçalho usando <code>slot</code></cps-label>
    </div>
    Conteúdo de exemplo no corpo da caixa de diálogo.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-label variant="secondary">Cabeçalho, corpo e rodapé:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button>

  <script>
    const container = document.querySelector('.dialog-example-label-slot');
    const dialogs = container.querySelectorAll('cps-dialog');
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

Por fim, embora não tão comum, podem existir casos onde não seja necessário ter um rótulo visual na caixa de diálogo, ou ainda este rótulo visual pode não ser descritivo o suficiente para fins de acessibilidade.

Neste caso, garanta que o atributo `aria-label` está presente, definindo um rótulo exclusivo para acessibilidade.

```html preview no-vue
<div class="dialog-example-aria-label">
  <cps-dialog aria-label="Exemplo sem rótulo visual mas com acessibilidade">
    Não apresento visualmente a área de cabeçalho. Entretanto, sou acessível por causa do uso de
    <code>aria-label</code>.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>

  <script>
    const container = document.querySelector('.dialog-example-aria-label');
    const dialogs = container.querySelectorAll('cps-dialog');
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

Use o _slot_ `footer` para designar os elementos a serem exibidos no rodapé de sua caixa de diálogo, os quais comumente são [botões](/componentes/button), embora outros elementos e componentes sejam viáveis. Por padrão, a estilização garante que um elemento não ocupe mais de 50% do tamanho do rodapé.

```html preview no-vue
<div class="dialog-example-footer-slot">
  <cps-dialog label="Exemplo sem rodapé" closable>
    Embora pouco usual, é possível ter uma caixa de diálogo sem nenhum elemento no rodapé. Neste caso, é altamente
    recomendável usar o atributo <code>closable</code> para que o usuário tenha ao menos uma indicação visual no
    cabeçalho sobre a caixa de diálogo poder ser fechada.
  </cps-dialog>

  <cps-label variant="secondary">Sem rodapé:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog label="Exemplo com um botão" closable>
    Provavelmente a configuração mais comum de caixa de diálogo, utilizando somente um botão. Neste caso, é altamente
    recomendável que a ação deste único botão seja justamente a de fechar a caixa de diálogo. Se uma ação diferente de
    apenas fechar for necessária, use dois botões no rodapé.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-label variant="secondary">Com um botão:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog label="Exemplo com dois botões" closable>
    Outra variação típica de caixa de diálogo, recomendada caso haja uma ação especial em um dos botões, o qual deve ser
    destacado de forma acentuada, enquanto o outro botão é mantido como botão de fechamento.
    <cps-button slot="footer" variant="accent" autofocus>Confirmar</cps-button>
    <cps-button slot="footer">Cancelar</cps-button>
  </cps-dialog>

  <cps-label variant="secondary">Com dois botões:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button><br /><br />

  <cps-dialog label="Exemplo com uma terceira ação" closable>
    Embora não usual, é de fato possível ter um número ainda maior de elementos definidos como
    <code>slot="footer"</code>. Eventualmente pode ser útil para apresentar algum rótulo ou link de apoio. Use com
    moderação, pois a apresentação visual pode se tornar confusa e incorretamente tirar o foco que os botões no rodapé
    deveriam ter.
    <cps-button slot="footer" variant="accent" autofocus>Confirmar</cps-button>
    <cps-button slot="footer">Cancelar</cps-button>
    <cps-link slot="footer" target="_blank">Saiba mais</cps-link>
  </cps-dialog>

  <cps-label variant="secondary">Com uma terceira ação:</cps-label>
  <cps-button>Abrir caixa de diálogo</cps-button>

  <script type="module">
    import { toast } from '@cps-elements/web/components/notification.js';

    const container = document.querySelector('.dialog-example-footer-slot');
    const dialogs = container.querySelectorAll('cps-dialog');
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

Use o _slot_ `header-actions` para injetar mais [botões de ícone](/componentes/icon-button), se necessário. Este _slot_ funciona mesmo que a caixa de diálogo não seja fechável, mas não possui efeito caso não haja cabeçalho, ou seja, se não houver valor no atributo `label` e não houver conteúdo no _slot_ `label`.

```html preview no-vue
<div class="dialog-example-header-actions">
  <cps-dialog label="Exemplo com ação no cabeçalho" closable>
    <cps-icon-button slot="header-actions" name="arrow-up-right-fill"></cps-icon-button>
    Conteúdo de exemplo no corpo da caixa de diálogo.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-header-actions');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button[slot="footer"]');
  const newWindowButton = dialog.querySelector('cps-icon-button[slot="header-actions"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.close());
  newWindowButton.addEventListener('click', () => open(location.href));
</script>
```

### Largura personalizada

Use a propriedade CSS personalizada `--width` para definir uma largura preferencial para caixa de diálogo, quando houver espaço para tal. Observe que, ainda assim, a caixa de diálogo diminuirá para se acomodar em telas menores.

```html preview no-vue
<div class="dialog-example-width">
  <cps-dialog label="Exemplo com largura personalizada" style="--width: 90vw">
    Conteúdo de exemplo no corpo da caixa de diálogo.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-width');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.close());
</script>
```

### Rolagem

De forma intencional, a altura de uma caixa de diálogo nunca excederá a altura vertical da _viewport_. Desse modo, caixas de diálogo não rolarão com a página, garantindo que o cabeçalho e o rodapé estejam sempre acessíveis ao usuário.

O conteúdo interno no corpo da caixa de diálogo, entretanto, pode exceder este tamanho gerando rolagem automática dentro da caixa de diálogo, sem nenhuma medida adicional necessária.

```html preview no-vue
<div class="dialog-example-scrolling">
  <cps-dialog label="Exemplo com rolagem">
    <div style=" border: dashed 2px var(--cps-color-stroke-primary); padding: 1rem; height: 150vh">
      <p>Role para baixo e experimente! 👇</p>
    </div>
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-scrolling');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.close());
</script>
```

### Impedindo o fechamento

Por padrão, caixas de diálogo se fecham quando o usuário clica no botão fechar, na sobreposição sobre a tela (_backdrop_), ou pressiona a tecla <kbd>Escape</kbd>. Na maioria dos casos, tal comportamento padrão é o melhor em termos de usabilidade. No entanto, podem existir situações onde isso é indesejável, especialmente se ocorrer perda de dados que estão sendo preenchidos dentro da caixa de diálogo.

Para manter a caixa de diálogo aberta nesses casos, você pode cancelar o evento `cps-request-close`. Quando cancelado, ela permanecerá aberta e pulsará brevemente para chamar a atenção do usuário sobre o evento interrompido.

Você também pode usar `event.detail.source` para determinar o que acionou a solicitação de fechamento, caso deseje impedir o fechamento dependendo da origem. Este exemplo impede o fechamento quando a sobreposição é clicada, mas permite que o botão fechar ou <kbd>Escape</kbd> a fechem.

```html preview no-vue
<div class="dialog-example-deny-close">
  <cps-dialog label="Exemplo" closable>
    Esta caixa de diálogo não será fechada ao clicar na sobreposição.
    <cps-button slot="footer" autofocus>Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-deny-close');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.close());

  // Impedindo o fechamento quando o usuário clica na sobreposição sobre a tela.
  dialog.addEventListener('cps-request-close', event => {
    if (event.detail.source === 'backdrop') {
      event.preventDefault();
    }
  });
</script>
```

### Definindo o foco inicial

Por padrão, o painel da caixa de diálogo receberá o foco quando aberta. Isso permite que um pressionamento subsequente da tecla tab coloque o foco no primeiro elemento tabulável na caixa de diálogo. Se você quiser que um elemento diferente tenha foco, adicione o atributo `autofocus` a ele, como mostrado abaixo.

```html preview no-vue
<div class="dialog-example-autofocus">
  <cps-dialog label="Exemplo com auto-foco">
    <cps-input autofocus placeholder="Eu tenho foco quando a caixa de diálogo abre"></cps-input>
    <cps-button slot="footer">Ok</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script>
  const container = document.querySelector('.dialog-example-autofocus');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const closeButton = dialog.querySelector('cps-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.close());
</script>
```

A definição do foco inicial é especialmente útil para fins de usabilidade. Mesmo que você esteja exibindo uma caixa de diálogo que não possui campos internos em seu corpo, você pode usar o `autofocus` nos botões do rodapé, para facilmente determinar qual ação é esperada quando o usuário pressionar a tela <kbd>Enter</kbd>, uma vez que o elemento em foco é executado quando esta tecla é pressionada.

?> Você pode personalizar ainda mais o comportamento do foco inicial cancelando o evento `cps-initial-focus` e definindo o foco você mesmo dentro do manipulador de eventos.

### Valor de retorno

Assim como o elemento nativo `<dialog>`, o `<cps-dialog>` suporta a propriedade `returnValue` que permite extrair um valor de retorno quando a caixa de diálogo é fechada. Isto é especialmente útil ao usar formulários dentro do diálogo.

Este exemplo demonstra o uso de `returnValue` com um formulário contendo um elemento `<select>` e botões de ação. O valor do botão ou do elemento selecionado será definido como `returnValue` quando o diálogo for fechado.

```html preview
<div class="dialog-example-return-value">
  <cps-dialog label="Qual sua fruta preferida?" closable>
    <form id="form-preferred-fruit" method="dialog">
      <cps-select strategy="fixed" autofocus>
        <cps-option value="">Escolha...</cps-option>
        <cps-option value="banana">Banana</cps-option>
        <cps-option value="maçã">Maçã</cps-option>
        <cps-option value="morango">Morango</cps-option>
      </cps-select>
    </form>
    <cps-button slot="footer" form="form-preferred-fruit" type="submit" variant="accent">Confirmar</cps-button>
    <cps-button slot="footer" form="form-preferred-fruit" value="" formmethod="dialog">Cancelar</cps-button>
  </cps-dialog>

  <cps-button>Abrir caixa de diálogo</cps-button>
</div>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const container = document.querySelector('.dialog-example-return-value');
  const dialog = container.querySelector('cps-dialog');
  const openButton = container.querySelector(':scope > cps-button');
  const select = dialog.querySelector('cps-select');
  const confirmButton = dialog.querySelector('cps-button[variant="accent"]');

  openButton.addEventListener('click', () => {
    dialog.show();
  });

  // Grava o valor do botão de confirmação com o valor da opção selecionada.
  select.addEventListener('cps-change', event => {
    confirmButton.value = event.detail.option.value;
  });

  // Após fechar a caixa de diálogo, use seu `returnValue` como preferir.
  dialog.addEventListener('cps-after-close', () => {
    if (dialog.returnValue) {
      toast(`A preferência por ${dialog.returnValue} foi registrada.`, {
        closable: true,
        duration: 3000,
        variant: 'success'
      });
    } else {
      toast('Nenhuma fruta de preferência foi escolhida.', {
        closable: true,
        duration: 3000,
        variant: 'informative'
      });
    }
  });
</script>
```

?> O método `close(returnValue)` pode ser usado para definir manualmente o `returnValue` ao fechar o diálogo. Além disso, o componente suporta o atributo `method="dialog"` em formulários, permitindo que botões com `formmethod="dialog"` fechem o diálogo, definindo seu `value` como `returnValue`. Isso emula o comportamento do elemento `<dialog>` nativo.

### Funções utilitárias `showAlert` e `showConfirm`

As funções `showAlert` e `showConfirm` são utilitários baseados no componente `<cps-dialog>` que simplificam a exibição de caixas de diálogo de alerta e de confirmação, os dois casos de uso mais comuns. Elas oferecem uma interface semelhante às funções nativas `alert()` e `confirm()`, mas com o visual, a acessibilidade, e a flexibilidade deste componente personalizado.

Use a função `showAlert` para exibir uma caixa de diálogo com uma mensagem e um botão para fechar no rodapé. O botão pode ser personalizado, assim como o título opcional da caixa de diálogo.

```html preview no-vue
<div class="dialog-example-showAlert">
  <cps-button>Exibir alerta padrão</cps-button>
  <cps-button>Exibir alerta personalizado</cps-button>
</div>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';
  import { showAlert } from '@cps-elements/web/components/dialog.js';

  const container = document.querySelector('.dialog-example-showAlert');
  const openButtons = container.querySelectorAll('cps-button');

  openButtons[0].addEventListener('click', async () => {
    await showAlert('Esta é uma mensagem de alerta!');
    toast('Mensagem de alerta fechada.', {
      closable: true,
      duration: 3000,
      variant: 'informative'
    });
  });

  openButtons[1].addEventListener('click', async () => {
    await showAlert('Esta é uma mensagem de alerta!', 'Atenção!', 'Entendido');
    toast('Mensagem de alerta fechada.', {
      closable: true,
      duration: 3000,
      variant: 'informative'
    });
  });
</script>
```

Use a função `showConfirm` para exibir uma caixa de diálogo com dois botões: um para confirmar e outro para cancelar a ação. O texto dos botões pode ser personalizado, assim como o título opcional da caixa de diálogo. A função returna `true` se o usuário confirmar ou `false` caso contrário.

```html preview no-vue
<div class="dialog-example-showConfirm">
  <cps-button>Exibir confirmação padrão</cps-button>
  <cps-button>Exibir confirmação personalizada</cps-button>
</div>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';
  import { showConfirm } from '@cps-elements/web/components/dialog.js';

  const container = document.querySelector('.dialog-example-showConfirm');
  const openButtons = container.querySelectorAll('cps-button');

  openButtons[0].addEventListener('click', async () => {
    const result = await showConfirm('Você tem certeza disso?');

    if (result) {
      toast('Confirmado pelo usuário.', {
        closable: true,
        duration: 3000,
        variant: 'success'
      });
    } else {
      toast('Cancelado pelo usuário.', {
        closable: true,
        duration: 3000,
        variant: 'informative'
      });
    }
  });

  openButtons[1].addEventListener('click', async () => {
    const result = await showConfirm(
      'Você tem certeza que deseja excluir permanente?',
      'Excluir registro fictício',
      'Sim',
      'Não'
    );

    if (result) {
      toast('Registro fictício excluído.', {
        closable: true,
        duration: 3000,
        variant: 'success'
      });
    } else {
      toast('Operação fictícia cancelada.', {
        closable: true,
        duration: 3000,
        variant: 'informative'
      });
    }
  });
</script>
```

Observe que ambas as funções retornam uma [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise), portanto você pode se aproveitar dos operadores `async`/`await` para bloquear a execução dos códigos posteriores até que o usuário feche a caixa de diálogo, como os exemplos demonstraram.

?> Aproveite estas funções para cenários onde você precisa de uma interação rápida e simples com o usuário disparada de forma imperativa e com comportamento e usabilidade padronizados, sem a necessidade de criar manualmente o elemento `<cps-dialog>` e gerenciar seus eventos.

[component-metadata:cps-dialog]
