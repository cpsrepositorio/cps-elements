# Utilização

Os componentes CPS Elements são fundamental como elementos HTML regulares, ou [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) para ser mais preciso. Fundamentalmente, você pode usá-los como qualquer outro elemento. Cada componente possui documentação detalhada que descreve sua API completa, incluindo propriedades, eventos, métodos e muito mais.

Não são apenas os elementos customizados que compõem o que se costuma chamar de Web Components. As tecnologias [HTML Templates](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots) e [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) também fazem parte deste grupo. A especificação de Web Components fora um padrão próprio no passado, mas posteriormente foi dividida nestas partes menores, cada uma das quais pode ser usada independentemente. Especificações à parte, você não precisa se preocupar com esses detalhes para usar os componentes CPS Elements.

Entretanto, se elementos customizados são novidades para você, esta seção o familiarizará em como usá-los.

## Propriedades

Muitos componentes têm propriedades que podem ser definidas usando atributos. Por exemplo, os botões aceitam um atributo `size` que mapeia para a propriedade `size`, a qual determina o tamanho do botão.

```html
<cps-button size="small">Clique em mim</cps-button>
```

Algumas propriedades são booleanas, portanto, possuem apenas valores verdadeiro/falso. Para ativar uma propriedade booleana, adicione o atributo correspondente, sem precisar atribuir um valor.

```html
<cps-button disabled>Clique em mim</cps-button>
```

Em casos raros, uma propriedade pode exigir uma matriz, um objeto ou uma função. Por exemplo, ao personalizar a lista de amostras predefinidas de um seletor de cores, uma propriedade `swatches` poderia receber uma matriz de cores.

Não é possível atribuir valores não-primitivos usando apenas HTML. Em cenários como este, utilize JavaScript para localizar o elemento desejado no DOM e atribua o valor não-primitivo desejado diretamente com o _script_.

```html
<cps-color-picker></cps-color-picker>

<script>
  const colorPicker = document.querySelector('cps-color-picker');
  colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
</script>
```

?> A utilizar _frameworks_ JavaScript, pode ser possível atribuir valores não-primitivos, dependendo do _framework_ em questão. Os exemplos a seguir ilustram o caso citado acima, resolvido diretamente no JSX com React, ou no _template_ com Vue.<br><br>**React:** `<CpsColorPicker swatches={['red', 'orange', 'yellow', 'green', 'blue', 'purple']} />`<br><br>**Vue:** `<cps-color-picker :swatches="['red', 'orange', 'yellow', 'green', 'blue', 'purple']" />`

Consulte a documentação de cada componente para obter uma lista completa de suas propriedades.

## Eventos

Você pode adicionar escutas a eventos padrão como `click`, `mouseover`, `scroll`, dentre outros, como faria normalmente com qualquer elemento HTML. No entanto, é importante observar que muitos eventos emitidos na raiz de um componente serão [redirecionados](https://dom.spec.whatwg.org/#retarget) para o elemento _host_ do componente. Isso pode resultar, por exemplo, na execução de vários manipuladores `click`, mesmo que o usuário clique apenas uma vez. Além disso, `event.target` apontará para o elemento _host_, tornando as coisas ainda mais confusas.

Elementos com hierarquias simples não causam problemas neste sentido, mas para eliminar esta complicação em componentes com hierarquias internas mais complexas, muitos componentes CPS Elements emitem eventos personalizados. Como resultado, quase sempre você acabará adicionando escutas a eventos personalizados.

Por exemplo, em vez de ouvir `click` para determinar quando um `<cps-checkbox>` é alternado, ouça `cps-change`.

```html
<cps-checkbox>Cheque-me</cps-checkbox>

<script>
  const checkbox = document.querySelector('cps-checkbox');
  checkbox.addEventListener('cps-change', event => {
    console.log(event.target.checked ? 'Marcado' : 'Desmarcado');
  });
</script>
```

Todos os eventos personalizados são prefixados com `cps-` para evitar colisões com eventos padrão, ou com eventos de outras bibliotecas. Consulte a documentação de cada componente para obter uma lista completa de seus eventos personalizados.

## Métodos

Alguns componentes têm métodos que você pode chamar para acionar comportamentos. Por exemplo, você pode definir o foco em um campo CPS Elements usando o método `focus()`.

```html
<cps-input></cps-input>

<script>
  const input = document.querySelector('cps-input');
  input.focus();
</script>
```

Consulte a documentação de cada componente para obter uma lista completa de seus métodos, bem como seus argumentos.

## Injeção de conteúdo

Muitos componentes aceitam conteúdos elaborados injetados para renderização em seu interior, os quais podem ser injetados através de _slots_.

O tipo de _slot_ mais comum é o _default_ (o padrão), utilizado ao se injetar qualquer conteúdo dentro de um componente sem a definição explícita de um atributo `slot`. Por exemplo, o _slot_ padrão de um botão é usado para preencher seu rótulo.

```html
<cps-button>Clique em mim</cps-button>
```

Alguns componentes também possuem _slots_ nomeados. Um _slot_ nomeado pode ser preenchido adicionando um elemento filho com o atributo `slot` apropriado. Observe como o ícone abaixo tem o atributo `slot="prefix"`, o que diz ao componente para colocar tal ícone dentro de seu _slot_ nomeado `prefix`.

```html
<cps-button>
  <cps-icon slot="prefix" name="settings-fill"></cps-icon>
  Configurações
</cps-button>
```

A ordem em que aparecem os _slots_ nomeados não importa. Você pode colocá-los em qualquer lugar dentro do componente, e o navegador irá renderizá-los no lugar certo automaticamente, visto que este posicionamento é determinado pelo componente.

Consulte a documentação de cada componente para obter uma lista completa de _slots_ disponíveis.

## Nunca use _tags_ auto-fechadas

O título desta seção é bem direto: elementos customizados não podem ser escritos com _tags_ auto-fechadas. Assim como `<script>` e `<textarea>`, você deve sempre incluir a _tag_ de fechamento completa.

```html
<!-- Não faça isso, não vai funcionar. -->
<cps-input />

<!-- Sempre escreva seu HTML assim. -->
<cps-input></cps-input>
```

?> CPS Elements pode ser instalado e utilizado de várias maneiras, o que inclui empacotadores e _frameworks_ JavaScript. Dependendo do empacotador ou _framework_ utilizado, pode ser possível utilizar _tags_ auto-fechadas. Por isso, ao longo dos exemplos desta documentação, você verá _tags_ auto-fechadas sendo utilizadas com React e com Vue.

## Diferenças dos elementos nativos

Você pode esperar que elementos com nomes similares compartilhem a mesma API que elementos HTML nativos. Embora aconteça eventualmente, este nem sempre é o caso. Componentes CPS Elements **não são** projetados para serem substitutos diretos de seus equivalentes HTML.

?> **Não faça suposições sobre a API de um componente!** Para evitar comportamentos inesperados, reserve um tempo para revisar a documentação e certifique-se de entender o que cada atributo, propriedade, método e evento se destina a fazer.

## Aguardando o carregamento

Web Components são registrados com JavaScript, então dependendo de como e quando você carrega CPS Elements, você pode notar elementos "piscando" ao aparecerem depois que a página foi renderizada, um problema conhecido como [_Flash of Undefined Custom Elements_ (FOUCE)](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). Existem algumas maneiras de evitar isso, ambas descritas no artigo vinculado.

Uma destas opções é utilizar o pseudo-seletor [`:defined`](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined) do CSS para ocultar elementos customizados que ainda não foram registrados. Você pode restringir isto a _tags_ específicas ou pode esconder todos os elementos customizados não definidos, como mostrado abaixo.

```css
:not(:defined) {
  visibility: hidden;
}
```

Assim que um elemento customizado é registrado, ele aparecerá imediatamente com todos os seus estilos, eliminando efetivamente os elementos piscando. Note o uso de `visibility: hidden` em vez de `display: none`, para reduzir deslocamentos sucessivos dos elementos da interface enquanto os elementos customizados vão sendo registrados. A desvantagem desta abordagem é que os elementos customizados podem aparecer um por um, em vez de todos ao mesmo tempo.

Uma opção alternativa é usar [`customElements.whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined), que retorna uma _promise_ que é resolvida quando o elemento especificado é registrado. Você provavelmente vai querer usá-lo com [`Promise.allSettled()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) no caso de um elemento falhar ao carregar por algum motivo.

Uma forma criativa de usar este método é ocultar o `<body>` com `opacity: 0` e adicionar uma classe que o desvanece assim que todos os seus elementos customizados são definidos.

```html
<style>
  body {
    opacity: 0;
  }

  body.ready {
    transition: 0.25s opacity;
    opacity: 1;
  }
</style>

<script type="module">
  await Promise.allSettled([
    customElements.whenDefined('cps-button'),
    customElements.whenDefined('cps-card'),
    customElements.whenDefined('cps-rating')
  ]);

  // Os tres componentes usados neste exemplo fictício foram carregados!
  // Agora basta adicionar `ready` às classes do `<body>`.
  document.body.classList.add('ready');
</script>
```

## Renderização e atualização

Componentes CPS Elements são construídos com [Lit](https://lit.dev/), uma pequena biblioteca que torna a criação de elementos customizados mais fácil, mais sustentável e até divertida! Como usuário de CPS Elements, aqui está algumas informações úteis sobre renderização e atualização dos componentes que você provavelmente gostará de estar ciente.

Para otimizar o desempenho e reduzir as renderizações, Lit agrupa as atualizações dos componentes para que ocorram em lotes. Isso significa que alterar várias propriedades ao mesmo tempo resultará em apenas uma única renderização. Na maioria dos casos, isso não é um problema, mas pode haver momentos em que você precisará esperar que o componente seja atualizado antes de continuar a lógica de seu _script_.

Considere este exemplo. Vamos alterar a propriedade `checked` da caixa de seleção e verificar seu atributo correspondente `checked`, que em teoria refletiria o valor.

```js
const checkbox = document.querySelector('cps-checkbox');
checkbox.checked = true;

console.log(checkbox.hasAttribute('checked')); // false
```

Muitos desenvolvedores esperariam que o atributo `checked` fosse `true`, mas na verdade é `false`! Isto ocorre por que o componente não teve a chance de ser renderizado novamente, então o atributo ainda não existe quando `hasAttribute()` é chamado. Como as alterações são agrupadas, precisamos esperar pela atualização antes de prosseguir. Isto pode ser feito utilizando a propriedade `updateComplete`, que está disponível em todos os componentes baseados em Lit.

```js
const checkbox = document.querySelector('cps-checkbox');
checkbox.checked = true;

checkbox.updateComplete.then(() => {
  console.log(checkbox.hasAttribute('checked')); // true
});
```

Agora sim, quando a resolução da `Promise` presente na propriedade `updateComplete` ocorrer, o lote de renderização foi concluído e, assim, o atributo `checked` é `true` como esperado.

?> Evite usar `setTimeout()` ou `requestAnimationFrame()` em situações como esta. Eles podem parecer funcionar inicialmente, mas dependem de temporização ou da execução interna do navegador, ao invés da execução do Lit, o que realmente importa neste caso. Portanto, é muito mais confiável usar `updateComplete` em vez disso.

## Completação de código

### VS Code

CPS Elements vem com um arquivo chamado `vscode.html-custom-data.json`, que pode ser usado para descrever seus elementos customizados para o Visual Studio Code. Isto permite a completação de código para os componentes CPS Elements (também conhecido como "sugestão de código" ou "_IntelliSense_"). Para habilitar, você precisa dizer ao VS Code onde o arquivo está.

1. [Instale CPS Elements localmente](/fundamentos/instalação#instalação-local);
2. Se ainda não existir, crie um diretório chamado `.vscode` na raiz do seu projeto;
3. Se ainda não existir, crie um arquivo dentro desse diretório chamado `settings.json`;
4. Adicione o seguinte trecho ao arquivo:

```js
{
  "html.customData": ["./node_modules/@cps-elements/web/vscode.html-custom-data.json"]
}
```

Se o arquivo `settings.json` já existir, simplesmente adicione a linha apresentada à raiz do objeto JSON. Note que você pode precisar reiniciar o VS Code para que as alterações tenham efeito.

?> Veja um exemplo de como esta configuração pode ficar em meio a outras configurações em nosso [repositório de exemplo de CPS Elements com Vite](https://github.com/ErickPetru/cps-elements-example-vite/blob/main/.vscode/settings.json).

### Outros editores

Este guia considera o uso de VS Code como o editor padrão que a maior parte dos desenvolvedores Web da atualidade utilizam, conforme [esta pesquisa](https://survey.stackoverflow.co/2022/#worked-with-vs-want-to-work-with-new-collab-tools-worked-want-prof) aponta. Entretanto, muitos editores populares suportam a completação de código personalizada com um pouco de configuração extra.

Por favor, [abra uma questão sobre isso](https://github.com/cpsrepositorio/cps-elements/issues/new/choose) para seu editor de preferência, nos ajudando com as instruções de como esta configuração pode ser feita, então atualizaremos esta documentação para incluir. Se você mesmo quiser contribuir com a configuração para seu editor, sinta-se livre para abrir um _pull request_ com as instruções necessárias!
