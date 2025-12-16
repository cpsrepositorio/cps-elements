# Vue

[Vue](https://vuejs.org/) é um _framework_ JavaScript progressivo que [funciona bem](https://custom-elements-everywhere.com/#vue) com elementos customizados, então usar CPS Elements em seus aplicativos Vue ocorre com facilidade. Inclusive, você pode facilmente alternar entre códigos em HTML ou Vue, para quase todos os exemplos de código desta documentação.

Observe que por _framework_ progressivo, entende-se que utilizado desde como uma simples biblioteca diretamente em uma página HTML simples, até como um _framework_ completo para construção de aplicativos complexos. CPS Elements é compatível com ambos os cenários, sendo a utilização [através de CDN](/fundamentos/instalação#através-de-cdn) a base para integração com Vue como uma simples biblioteca, como você pode ver neste [exemplo de integração com Vue como um biblioteca](https://codepen.io/ErickPetru/pen/bGmeLxw), diretamente no CodePen.

Já o restante desta página se concentra em projetos complexos envolvendo Vue e um empacotador (como Vite). Este cenário, típico para sistemas Web complexos, segue-se praticamente as mesmas instruções de [instalação com empacotador](/fundamentos/instalação#instalação-com-empacotador). Se estiver com pressa, aprecie este [repositório de exemplo](https://github.com/ErickPetru/cps-elements-example-vue) de projeto Vue 3 + Vite + CPS Elements, com [pré-visualização no CodeSandbox](https://codesandbox.io/p/github/ErickPetru/cps-elements-example-vue/main) embutida abaixo. Os detalhes de configuração estão documentados a seguir.

<div class="codepen" style="height: 420px">
  <iframe
    src="https://codesandbox.io/p/devbox/github/ErickPetru/cps-elements-example-vue/main?v=251216&file=vite.config.ts&workspace=%7B%22activeFilepath%22%3A%22vite.config.ts%22%2C%22openFiles%22%3A%5B%22vite.config.ts%22%2C%22%2Fsrc%2Fmain.ts%22%2C%22%2Fsrc%2FApp.vue%22%5D%2C%22spaces%22%3A%7B%22previewAndTerminal%22%3A%7B%22key%22%3A%22previewAndTerminal%22%2C%22name%22%3A%22Preview%22%2C%22devtools%22%3A%5B%7B%22key%22%3A%22preview%22%2C%22type%22%3A%22PREVIEW%22%2C%22taskId%22%3A%22dev%22%2C%22port%22%3A5173%2C%22isMinimized%22%3Afalse%7D%2C%7B%22key%22%3A%22terminal%22%2C%22type%22%3A%22TASK_LOG%22%2C%22taskId%22%3A%22dev%22%2C%22isMinimized%22%3Atrue%7D%5D%7D%7D%2C%22currentSpace%22%3A%22previewAndTerminal%22%2C%22spacesOrder%22%3A%5B%22previewAndTerminal%22%5D%7D"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
</div>

## Instalação

Para começar com CPS Elements e Vue, primeiramente você precisa instalar nosso pacote NPM.

```bash
npm install @cps-elements/web
```

Em seguida, em seu arquivo principal (usualmente, `main.js` ou `.ts`), [inclua um tema](/fundamentos/temas) e defina o [caminho base](/fundamentos/instalação#configurando-o-caminho-base) para ícones e outros recursos. Por exemplo, se você quiser usar somente o tema claro e carregar ativos através do CDN:

```js
import '@cps-elements/web/themes/light.css';
import { setBasePath } from '@cps-elements/web/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@cps-elements/web');
```

?> Se preferir não usar o CDN para ativos, você pode criar uma tarefa de tempo de compilação que copia `node_modules/@cps-elements/web/assets` para a pasta pública servida pelo Vite, bastando apontar o caminho base para essa pasta em seu arquivo principal. Mais detalhes sobre isso em [empacotando com Vite](/fundamentos/instalação#empacotando-com-vite).

## Configuração

A única configuração adicional que você precisará fazer é informar ao Vite (através do `vite.config.js` ou `.ts`) para ignorar os componentes CPS Elements de serem tratados como componentes Vue, explicitando que tratam-se de elementos customizados HTML. Isso é muito fácil, já que as _tags_ deles sempre começam com `cps-`.

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('cps-')
        }
      }
    })
  ]
});
```

Agora você já pode usar os componentes CPS Elements diretamente nos `<template>` de sua aplicação Vue!

## Utilização

Usar CPS Elements com Vue é certamente familiar para quem está acostumado com tal _framework_, sendo que tanto [Options API](https://vuejs.org/guide/introduction.html#api-styles) quanto [Composition API](https://vuejs.org/guide/introduction.html#api-styles) são suportadas (inclusive com `<script setup>`) e não sofrem qualquer divergência de uso.

Não é de se surpreender, afinal CPS Elements é baseado em Web Components, informados diretamente no `<template>` e que, após carregados pelo navegador, operam como elementos HTML tradicionais.

### Importando componentes

Cada componente CPS Elements está disponível para importação individual no pacote NPM instalado, podendo então ser utilizado no `<template>` Vue do mesmo arquivo em que estiver sendo importado.

```html
<script setup>
  import { CpsButton } from '@cps-elements/web/components/button';
</script>

<template>
  <cps-button variant="accent">Clique</cps-button>
</template>
```

Você pode encontrar a linha de importação de um componente, pronta para apenas _copiar e colar_, na seção _"Importação"_ da própria documentação de cada componente.

!> Assim como descrito em [importações individuais](/fundamentos/instalação#importações-individuais), é possível importar componentes diretamente por desestruturação do diretório raiz (por exemplo, `import { CpsButton } from '@cps-elements/web'`). Isso não é necessariamente incorreto quando se usa um empacotador, mas deixará para ele a responsabilidade de varrer e eliminar importações desnecessárias do diretório raiz (processo conhecido como _three-shaking_).<br><br>Escolher a dedo os arquivos específicos dos componentes, como demonstrado acima, garante que o funcionamento e as configurações do empacotador não interfiram na exata inclusão, em seu _bundle_ final, de apenas os _scripts_ mínimos necessários dos componentes CPS Elements que você efetivamente está usando.

### Vinculando dados e eventos

Tudo que você já sabe sobre a [sintaxe de `<template>`](https://vuejs.org/guide/essentials/template-syntax.html) do Vue, de sua [manipulação de eventos](https://vuejs.org/guide/essentials/event-handling.html), bem como todos os seus outros conceitos essenciais, continua aplicável como esperado.

```html
<script setup>
  // Importando componentes CPS Elements individualmente.
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsIcon } from '@cps-elements/web/components/icon';

  // O resto é Vue 3 como de costume.
  import { ref } from 'vue';

  const isWaiting = ref(false);
  const message = ref('');

  const onClick = () => {
    if (isWaiting.value) return;

    isWaiting.value = true;
    setTimeout(() => {
      message.value = `Atualizado às ${new Date().toLocaleTimeString()}.`;
      isWaiting.value = false;
    }, 1000);
  };
</script>

<template>
  <!-- CPS Elements no template sem ressalvas, com vínculo reativo de dados e eventos. -->
  <cps-button variant="accent" :waiting="isWaiting" @click="onClick">
    <cps-icon slot="prefix" name="arrow-right" />
    Clique
  </cps-button>

  <p v-if="message">
    <cps-icon library="uil" name="clock-mono" />
    {{ message }}
  </p>
</template>

<style scoped>
  /* Estilos CSS com variáveis CSS importadas do tema CPS Elements. */
  :global(body) {
    background-color: var(--cps-color-background-solid-primary);
    padding: 1rem;
    color: var(--cps-color-text-primary);
    font: var(--cps-font-body);
  }

  /* Estilizar componentes CPS Elements também funciona. */
  p cps-icon {
    margin-top: -2px;
    vertical-align: middle;
    font-size: 1rem;
  }
</style>
```

### Vinculando dados não primitivos

Ao vincular dados complexos, como objetos e _arrays_, use o modificador `.prop` para garantir que Vue os vincule como uma propriedade, em vez de um atributo (já que atributos HTML aceitam somente valores primitivos).

```html
<cps-color-picker :swatches.prop="colorSwatches" />
```

### Injeção de conteúdo

Em geral você poderá utilizar normalmente injeção de conteúdo com _slots_ em Vue com CPS Elements. Entretanto, algumas caraterísticas adicionais oferecidas pelo Vue, como _slots_ com escopo, não são suportadas quando utilizado com elementos customizados (pois estas características não são nativas em elementos customizados), como [documentado aqui](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue).

De qualquer forma, para cenários típicos de injeção de conteúdo simples, como o caso já previamente apresentado de ícones dentro de botões, pode ser realizado sem problemas. Inclusive com a possibilidade de injeção de conteúdo em _slot_ diferente do padrão, bastante para isso utilizar o atributo `slot` e especificar o nome do alvo.

```html
<cps-button>
  <cps-icon slot="suffix" name="arrow-counterclockwise" />
  Atualizar
</cps-button>
```

?> Quando se utiliza Vue com um empacotador (como Vite), o `<template>` será processado em tempo de compilação. Isso permite utilizar até mesmo _tags_ auto-fechadas, como `<cps-icon name="arrow-right" />`, o que normalmente não seria possível diretamente com HTML (uma vez que elementos customizados não podem ser auto-contidos).
