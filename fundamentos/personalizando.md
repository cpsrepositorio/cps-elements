# Personalizando

Os componentes do CPS Elements são por padrão aderentes ao [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/), fornecendo [temas claro e escuro](/fundamentos/temas) projetados para atender com perfeição as demandas usuais de sistemas internos do Centro "Paula Souza".

Entretanto, CPS Elements aceita personalização visual profunda por meio de diferentes técnicas, que podem interferir diretamente na estilização interna dos componentes. Ou seja, é possível utilizar todos os diversos recursos funcionais desta biblioteca mesmo que as necessidades de identidade visual de sua aplicação sejam diferentes.

!> Se você está trabalhando em projeto aderente ao CPS Design System, **não personalize** a aparência dos componentes usando as instruções desta página, a menos que esteja seguindo instruções de uma equipe de _design_ especializada com o objetivo de construir uma identidade visual propositalmente distinta para determinada aplicação.

## Variáveis de estilo

CPS Elements é totalmente fundamentado em variáveis de estilo. É possível que você conheça o conceito de variáveis de estilo pelo termo _design token_. As variáveis de estilo são como valores visuais globais e reaproveitáveis em diversos componentes, por padrão aderentes ao CPS Design System, mas facilmente modificáveis.

As variáveis de estilo são acessadas e modificadas como propriedades CSS, mas como residem no escopo global, são prefixadas com `--cps-` para evitar conflitos com outras bibliotecas. Para personalizar as variáveis, basta sobrescrevê-las em seus estilos personalizados, dentro do bloco `:root`:

```css
:root {
  /* Alterando a família de fonte sans-serif de todos os componentes de uma vez só! */
  --cps-font-family-sans: 'IBM Plex Sans', Verdana, sans-serif;
}
```

Você verá muitas variáveis de estilo utilizadas ao longo desta documentação. Há listas mais organizadas sobre as mais importantes na seção [variáveis de estilo](/variáveis-de-estilo/visão-geral). Para uma visão realmente completa de todas as variáveis de estilo disponíveis, veja os códigos-fonte dos arquivos de tema [`light.css`](https://github.com/cpsrepositorio/cps-elements/blob/main/src/themes/light.css) e [`dark.css`](https://github.com/cpsrepositorio/cps-elements/blob/main/src/themes/dark.css).

Falando em temas, observe que para sobrescrever variáveis de estilo de forma temática, ou seja, manter o uso dos temas claro e escuro padrão desta biblioteca mas sobrescrever valores de forma diferente para cada modo de cor, modifique as variáveis dentro das classes `.cps-theme-light` e `.cps-theme-dark`:

```css
.cps-theme-light {
  --cps-palette-accent-950: #200440;
  --cps-palette-accent-900: #320a66;
  --cps-palette-accent-800: #451387;
  --cps-palette-accent-700: #581fa5;
  --cps-palette-accent-600: #6b2dc0;
  --cps-palette-accent-500: #7e3fd8;
  --cps-palette-accent-400: #8d52eb;
  --cps-palette-accent-300: #9e6af9;
  --cps-palette-accent-200: #b186ff;
  --cps-palette-accent-100: #c6a8ff;
  --cps-palette-accent-050: #dfd1ff;
}

.cps-theme-dark {
  --cps-palette-accent-050: #200440;
  --cps-palette-accent-100: #320a66;
  --cps-palette-accent-200: #451387;
  --cps-palette-accent-300: #581fa5;
  --cps-palette-accent-400: #6b2dc0;
  --cps-palette-accent-500: #7e3fd8;
  --cps-palette-accent-600: #8d52eb;
  --cps-palette-accent-700: #9e6af9;
  --cps-palette-accent-800: #b186ff;
  --cps-palette-accent-900: #c6a8ff;
  --cps-palette-accent-950: #dfd1ff;
}
```

## Partes CSS

Componentes do CPS Elements usam [_shadow_ DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) para encapsular seus estilos e comportamentos. Isto é extremamente útil e conveniente na maioria dos casos, pois evita os clássicos conflitos de estilos CSS entre diferentes componentes, especialmente comuns quando se misturam diversas bibliotecas em uma aplicação.

Entretanto, com _shadow_ DOM torna-se impossível localizar elementos internos de componentes com seletores CSS usuais. Para que um elemento interno possa ser estilizado, ele deve explicitamente expor "partes" para que se tornem localizáveis pelo [seletor de partes CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/::part), ou `::part()`.

Aqui está um exemplo que modifica as partes internas de botões com a classe `danger-button`.

```html preview no-vue
<cps-button>Normal</cps-button>
<cps-button class="danger-button">
  <cps-icon slot="prefix" name="warning"></cps-icon>
  Cuidado!
</cps-button>
<cps-button>Normal</cps-button>

<style>
  .danger-button::part(base) {
    border: solid 1px tomato;
    background: rgb(245 132 112 / 15%);
  }

  .danger-button::part(base):hover {
    background: rgb(255 99 71 / 30%);
  }

  .danger-button::part(base):active {
    background: rgb(255 99 71 / 20%);
  }

  .danger-button::part(prefix) {
    color: rgb(255 63 28 / 62%);
  }

  .danger-button::part(content) {
    padding-inline-start: 0.5rem;
    color: rgb(255 63 28 / 98%);
  }
</style>
```

A princípio, esta abordagem pode parecer um pouco limitante, mas ela vem com vantagens importantes:

- Personalizações podem ser feitas em partes de componentes com seletores explícitos, como `::part(icon)`, ao invés de seletores implícitos e potencialmente confusos, como `.button > div > span + .icon`.

- A estrutura interna de um componente pode mudar conforme ele evolui. Ao expor partes de componentes, as personalizações se tornam mais resilientes, visto que o código interno de um componente poderá ser reorganizado sem quebrar personalizações, desde que os nomes das partes permaneçam intocados.

- Encoraja a pensar mais sobre como os componentes são projetados e como as personalizações devem ser permitidas antes que os usuários possam tirar proveito delas. Ao se desenvolver componentes previamente refletindo sobre quais partes devem ser expostas, existe uma tendência natural de que eles sejam estruturalmente melhor planejados.

Visando oferecer uma experiência de personalização consistente, praticamente todos os componentes do CPS Elements expõem grande parte de seus elementos internos como partes CSS. Para mais detalhes, você pode encontrar as partes suportadas por cada componente em suas documentações específicas, na seção "Partes CSS".

## Propriedades CSS

Para sua conveniência, alguns componentes também expõem propriedades CSS que podem sobrescritas. Essas propriedades não são variáveis de estilo globais, nem possuem o prefixo `--cps-`, já que são restritas ao escopo de um componente.

Você pode sobrescrever propriedades CSS para todas as vezes que um componente é usado, usando um seletor genérico:

```css
cps-avatar {
  /* Todos os avatares com tamanho base 6rem */
  --size: 6rem;
}
```

Para mais controle, você pode simplesmente usar classes CSS e aplicar somente nos elementos que precisar:

```html
<!-- Estes usam o tamanho sobrescrito -->
<cps-avatar class="six-times-font-size"></cps-avatar>
<cps-avatar class="six-times-font-size"></cps-avatar>

<!-- Estes mantêm o tamanho padrão -->
<cps-avatar></cps-avatar>
<cps-avatar></cps-avatar>

<style>
  cps-avatar.six-times-font-size {
    --size: 6rem;
  }
</style>
```

Por fim, para usos pontuais, você pode usar estilos _inline_ no elemento desejado:

```html
<cps-avatar style="--size: 6rem"></cps-avatar>
```

Nem todos os componentes expõem propriedades CSS personalizadas, mas muitos deles as oferecem. Cada página de documentação de cada componente possui uma seção dedicada a descrever quais propriedades CSS no escopo do componente estão disponíveis para personalização.

## Animações

> Em breve.
