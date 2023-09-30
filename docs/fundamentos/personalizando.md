# Personalizando

Os componentes do CPS Elements podem ser personalizados profundamente por meio de variáveis de estilo, para controle de cores e estilização em geral, e de seleção de partes CSS, para personalizações mais avançadas interferindo diretamente na estilização interna dos componentes.

!> Se você está trabalhando em projeto aderente ao CPS Design System, **não personalize** a aparência dos componentes usando as instruções desta página. Todo este conteúdo é destinado a situações que não exigem tal aderência.

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

> Em breve.

## Variáveis de estilo

> Em breve.

## Animações

> Em breve.
