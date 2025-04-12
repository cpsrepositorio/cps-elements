# Icon

[component-header:cps-icon]

CPS Elements trás embutida como padrão a biblioteca [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) da Microsoft, oferecendo mais de 4300 ícones sob uma [licença MIT](https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE), adequada para utilização em aplicações Web, sejam elas públicas ou privadas.

Esteticamente, segue princípios de minimalismo, harmonia e metaforismo, tendo sido concebidos para combinar intrinsecamente com as interfaces Fluent UI, as quais inspiraram diretamente o CPS Design System.

Contando com mais de 2100 ícones únicos na variação _outline_ (a padrão), bem como aproximadamente a mesma quantia na variação _fill_ (extensão `-fill` após o nome). Sendo assim, é muito provável que suas necessidades diversas de iconografia possam ser atendidas diretamente por esta biblioteca padrão.

?> Dependendo de como você está instalando e carregando CPS Elements, você pode precisar manualmente copiar os arquivos de ícone para um diretório de acesso público em seu servidor Web, bem como pode ser preciso [definir o caminho base](fundamentos/instalação#definindo-o-caminho-base) para estes arquivos, para que este componente possa carregá-los sob demanda. Caso contrário, ícones não aparecerão e você verá muitos erros `404 Not Found` no _console_ do navegador.

## Lista de ícones

Todos os ícones disponíveis na biblioteca `default` são exibidos a seguir. Clique sob qualquer ícone abaixo, para automaticamente copiar seu nome, aí basta utilizá-lo no HTML desta forma.

```html
<cps-icon name="icon-name-here"></cps-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <cps-input placeholder="Pesquisar ícones" clearable>
      <cps-icon slot="prefix" name="search"></cps-icon>
    </cps-input>
    <cps-select value="outline">
      <cps-option value="outline">Regular</cps-option>
      <cps-option value="fill">Preenchido</cps-option>
      <cps-option value="all">Todos</cps-option>
    </cps-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Exemplos

### Cores

Ícones herdam a cor do texto do contexto em que estão aplicados. Assim, você pode definir o atributo CSS `color` no próprio elemento `<cps-icon>` desejado, ou em qualquer elemento pai de sua hierarquia.

```html preview
<div style="color: #4a90e2">
  <cps-icon name="warning"></cps-icon>
  <cps-icon name="archive"></cps-icon>
  <cps-icon name="battery-charge"></cps-icon>
  <cps-icon name="alert"></cps-icon>
</div>
<div style="color: #9013fe">
  <cps-icon name="clock"></cps-icon>
  <cps-icon name="cloud"></cps-icon>
  <cps-icon name="arrow-download"></cps-icon>
  <cps-icon name="document"></cps-icon>
</div>
<div style="color: #417505">
  <cps-icon name="flag"></cps-icon>
  <cps-icon name="heart"></cps-icon>
  <cps-icon name="image"></cps-icon>
  <cps-icon name="lightbulb"></cps-icon>
</div>
<div style="color: #f5a623">
  <cps-icon name="mic"></cps-icon>
  <cps-icon name="search"></cps-icon>
  <cps-icon name="star"></cps-icon>
  <cps-icon name="delete"></cps-icon>
</div>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <CpsIcon name="warning" />
      <CpsIcon name="archive" />
      <CpsIcon name="battery-charge" />
      <CpsIcon name="alert" />
    </div>
    <div style={{ color: '#9013fe' }}>
      <CpsIcon name="clock" />
      <CpsIcon name="cloud" />
      <CpsIcon name="arrow-download" />
      <CpsIcon name="document" />
    </div>
    <div style={{ color: '#417505' }}>
      <CpsIcon name="flag" />
      <CpsIcon name="heart" />
      <CpsIcon name="image" />
      <CpsIcon name="lightbulb" />
    </div>
    <div style={{ color: '#f5a623' }}>
      <CpsIcon name="mic" />
      <CpsIcon name="search" />
      <CpsIcon name="star" />
      <CpsIcon name="delete" />
    </div>
  </>
);
```

### Tamanhos

Ícones são dimensionados a partir do tamanho de fonte pelo contexto em que estão aplicados. Assim, você pode definir o atributo CSS `font-size` no próprio elemento `<cps-icon>` desejado, ou em qualquer elemento pai de sua hierarquia.

```html preview
<div style="font-size: 1.5rem">
  <cps-icon name="warning"></cps-icon>
  <cps-icon name="archive"></cps-icon>
  <cps-icon name="battery-charge"></cps-icon>
  <cps-icon name="alert"></cps-icon>
</div>
<div style="font-size: 2rem">
  <cps-icon name="clock"></cps-icon>
  <cps-icon name="cloud"></cps-icon>
  <cps-icon name="arrow-download"></cps-icon>
  <cps-icon name="document"></cps-icon>
</div>
<div style="font-size: 2.5rem">
  <cps-icon name="flag"></cps-icon>
  <cps-icon name="heart"></cps-icon>
  <cps-icon name="image"></cps-icon>
  <cps-icon name="lightbulb"></cps-icon>
</div>
<div style="font-size: 3rem">
  <cps-icon name="mic"></cps-icon>
  <cps-icon name="search"></cps-icon>
  <cps-icon name="star"></cps-icon>
  <cps-icon name="delete"></cps-icon>
</div>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';

const App = () => (
  <div style={{ fontSize: '1.5rem' }}>
    <CpsIcon name="warning" />
    <CpsIcon name="archive" />
    <CpsIcon name="battery-charge" />
    <CpsIcon name="alert" />
  </div>
  <div style={{ fontSize: '2rem' }}>
    <CpsIcon name="clock" />
    <CpsIcon name="cloud" />
    <CpsIcon name="arrow-download" />
    <CpsIcon name="document" />
  </div>
  <div style={{ fontSize: '2.5rem' }}>
    <CpsIcon name="flag" />
    <CpsIcon name="heart" />
    <CpsIcon name="image" />
    <CpsIcon name="lightbulb" />
  </div>
  <div style={{ fontSize: '3rem' }}>
    <CpsIcon name="mic" />
    <CpsIcon name="search" />
    <CpsIcon name="star" />
    <CpsIcon name="delete" />
  </div>
);
```

### Rótulos assistivos

Por padrão, ícones são considerados recursos decorativos. Em alguns casos, entretanto, eles podem representar a única peça de informação sobre a ação a ser realizada (por exemplo, em um botão contendo apenas ícone, sem texto de apoio).

Para tal, ícones não decorativos podem se utilizar do atributo `label` para que o texto ali informado seja anunciado por ferramentas assistivas para acessibilidade (como leitores de tela).

```html preview
<cps-icon name="star-fill" label="Adicionar aos favoritos"></cps-icon>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';

const App = () => <CpsIcon name="star-fill" label="Adicionar aos favoritos" />;
```

### Ícones personalizados

Além do grande conjunto de ícones da biblioteca padrão, é possível carregar [bibliotecas alternativas](#bibliotecas-alternativas) para ter acesso a ainda mais opções. Entretanto, em algumas situações, você pode precisar carregar um arquivo SVG personalizado individual, para alguma situação bem específica.

Ícones podem ser carregados individualmente através do atributo `src`. Apenas arquivos em formato SVG são aceitos, devendo estar acessíveis localmente junto à sua aplicação, ou através de um endereço habilitado para CORS, com seu domínio atual explicitamente permitido.

```html preview
<cps-icon src="./assets/images/brick.svg" style="font-size: 4rem"></cps-icon>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';

const App = () => <CpsIcon src="./assets/images/brick.svg" style={{ fontSize: '4rem' }} />;
```

## Bibliotecas padrão

CPS Elements trás embutidas duas bibliotecas de ícones, `default` e `system`. Conforme já explanado, a [biblioteca de ícones padrão](#sobrescrevendo-a-biblioteca-padrão) contém todos os ícones do [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) da Microsoft. Já a [biblioteca de ícones de sistema](#sobrescrevendo-a-biblioteca-de-sistema) é apenas um sub-conjunto pequeno de ícones diretamente embutidos no código JavaScript, usados internamente pelos componentes.

Embora estas bibliotecas padrão entreguem a experiência mais aderente ao CPS Design System possível, dependendo do projeto (especialmente se não for um projeto interno do Centro "Paula Souza"), pode ser relevante alterar tais padrões.

### Sobrescrevendo a biblioteca padrão

Os mais de 4300 ícones da biblioteca padrão [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) estão disponíveis sem necessitar de importações adicionais. São estes os ícones exibidos no `<cps-icon>` quando não se utiliza o atributo `library`. Mas se realmente você tiver a necessidade de substituí-los por completo por outra biblioteca, pode registrar outra biblioteca usando o nome `default` com uma função resolvedora personalizada.

Este exemplo carregará a biblioteca [Bootstrap Icons](#bootstrap-icons), sobrescrevendo a biblioteca padrão.

```html
<script type="module">
  import { registerIconLibrary } from '@cps-elements/web/utilities/icon-library';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/icons/${name}.svg`
  });
</script>
```

?> Atente-se para diferenças nos nomes dos ícones. Embora a maioria das bibliotecas populares tenham ícones similares para assuntos similares, os nomes podem variar bastante. Por exemplo, o ícone nomeado `data-pie` na biblioteca padrão precisaria ser chamado `pie-chart` com este exemplo de sobrescrita apresentado. Alterar toda a biblioteca padrão, em um projeto já construído anteriormente usando ela, certamente causaria problemas.

### Sobrescrevendo a biblioteca de sistema

A biblioteca de sistema contém somente os ícones usados internamente por componentes CPS Elements. Ao contrário da biblioteca padrão, a biblioteca de sistema não se baseia em arquivos SVG físicos. Ao invés disso, seus ícones são fixados no próprio código JavaScript deste projeto, garantindo-se que se sejam sempre resolvidos imediatamente.

Portanto, se você quiser alterar ícones internos dos componentes CPS Elements, precisará registrar sobrescrevendo a biblioteca `system` e oferecendo uma função `resolver` personalizada para obter ícones de outra forma.

```html
<script type="module">
  import { registerIconLibrary } from '@cps-elements/web/utilities/icon-library';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

Se você optar por esta estratégica de sobrescrita da biblioteca de sistema, será sua responsabilidade oferecer ícones similares para todos os ícones previamente existentes, com os mesmos nomes requeridos pelos componentes deste projeto. Para uma lista de todos eles, verifique o arquivo [src/components/icon/library.system.ts](https://github.com/cpsrepositorio/cps-elements/blob/main/src/components/icon/library.system.ts).

?> Embora este exemplo tenha apresentado um teórico carregamento de arquivos SVG físicos ao sobrescrever `system`, não é recomendado fazer isso. Garantir que os poucos ícones de sistema utilizados estejam disponíveis diretamente no código JavaScript, permite que sejam exibidos tão logo o componente é renderizado, não exigindo _downloads_ adicionais pelo navegador. Isso é uma boa prática de apresentação de Web Components adotada neste projeto.

## Bibliotecas alternativas

É possível registrar bibliotecas de ícones adicionais, para facilitar o uso com o `<cps-icon>`. Arquivos de ícone das bibliotecas podem existir localmente ou em endereços com CORS habilitado (por exemplo, em um CDN que entregue os arquivos de ícone). Não há limite a quantas bibliotecas de ícones registrar, e não há custo de desempenho associado a registrá-las, já que ícones individuais são baixados somente quando explicitamente utilizados em um `<cps-icon>`.

Para registrar uma biblioteca de ícones adicional, utilize a função `registerIconLibrary()` exportada por `utilities/icon-library`. No mínimo, tal função precisa receber como argumentos um nome para a biblioteca, e uma função resolvedora. Tal função `resolver` traduz o nome do ícone para uma URL correspondente ao arquivo SVG do ícone.

Se necessário, uma função `mutator` também está disponível, para manipular o elemento raiz `<svg>` antes de renderizá-lo. Bibliotecas de ícones podem ser criadas com diferentes estratégias de "desenho" dos SVG. Por exemplo, algumas bibliotecas não foram feitas para colorir o ícone pela cor de texto atual. Habilitar isto exige uma mutação que aplica `fill="currentColor` ou `stroke="currentColor"` ao elemento SVG (e qual destes vai depender de como os ícones foram desenhados naquela biblioteca, por exemplo, se usando caminhos preenchidos ou contornos em caminhos vazios).

Aqui está um exemplo que registra uma biblioteca fictícia a partir de arquivos SVG soltos no diretório `/assets/icons` do projeto que estiver usando o CPS Elements.

```html
<script type="module">
  import { registerIconLibrary } from '@cps-elements/web/utilities/icon-library';

  registerIconLibrary('example', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

Após registrada, basta definir os atributos `library` e `name` do elemento `<cps-icon>`. Se um ícone é usado antes do registro da biblioteca ocorrer, ele será mantido vazio no _layout_ renderizado, até que o registro aconteça.

```html
<!-- Isto exibiria um ícone fisicamente localizado em './assets/icons/smile.svg' -->
<cps-icon library="example" name="smile"></cps-icon>
```

Baseando-se nestas instruções, a seguir demonstramos como registrar algumas bibliotecas de ícones populares, disponíveis para acesso por CDN, as quais possuem alguma semelhança visual com a biblioteca padrão e podem servir como apoio em necessidades por mais ícones em seus projetos finais.

?> Sinta-se à vontade para adaptar estes exemplos a outras bibliotecas de ícones, se desejado, mas atente-se para manter coerência à [iconografia do CPS Design System](https://cpsrepositorio.github.io/cps-design-system/guia-visual/icones.html#icones-de-sistema), se estiver atuando em projeto aderente a ele.

### Bootstrap Icons

[Bootstrap Icons](https://icons.getbootstrap.com/) é uma popular biblioteca com mais de 1900 ícones, sendo quase 1000 ícones únicos, divididos entre as variações _outline_ (a padrão) e _fill_ (extensão `-fill` após o nome).

Esteticamente, ambas as variações possuem semelhança visual com a biblioteca Fluent UI System Icons, portanto é viável utilizar esta como uma extensão, caso algum ícone específico não seja encontrado na biblioteca padrão.

Distribuída sob [licença MIT](https://github.com/twbs/icons/blob/main/LICENSE.md), é adequada para utilização em aplicações Web, sejam elas públicas ou privadas. Este exemplo registra tal biblioteca usando o CDN jsDelivr e apresenta alguns de seus ícones em ambas as variações.

```html preview no-vue
<div style="font-size: 24px">
  <cps-icon library="bi" name="clock"></cps-icon>
  <cps-icon library="bi" name="lock"></cps-icon>
  <cps-icon library="bi" name="pie-chart"></cps-icon>
  <cps-icon library="bi" name="gear"></cps-icon>
  <cps-icon library="bi" name="pin-map"></cps-icon>
  <cps-icon library="bi" name="printer"></cps-icon>
  <cps-icon library="bi" name="star"></cps-icon>
  <cps-icon library="bi" name="cart"></cps-icon>

  <br />

  <cps-icon library="bi" name="clock-fill"></cps-icon>
  <cps-icon library="bi" name="lock-fill"></cps-icon>
  <cps-icon library="bi" name="pie-chart-fill"></cps-icon>
  <cps-icon library="bi" name="gear-fill"></cps-icon>
  <cps-icon library="bi" name="pin-map-fill"></cps-icon>
  <cps-icon library="bi" name="printer-fill"></cps-icon>
  <cps-icon library="bi" name="star-fill"></cps-icon>
  <cps-icon library="bi" name="cart-fill"></cps-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '@cps-elements/web/utilities/icon-library';

  registerIconLibrary('bi', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/icons/${name}.svg`,
    mutator: svg => svg.removeAttribute('class')
  });
</script>
```

### Unicons

[Unicons](https://iconscout.com/unicons) é outra popular biblioteca que anuncia oferecer mais de 4500 ícones, porém na prática são pouco mais de 1200 ícones únicos na variação _line_ (a padrão), e pouco menos de 900 adicionais somando-se as variações _solid_ (extensão `-fill` após o nome), _monochrome_ (extensão `-mono` após o nome) e _thinline_ (extensão `-thin` após o nome).

Esteticamente, a variação _line_ (a padrão) possui semelhança visual com a biblioteca Fluent UI System Icons, portanto é viável utilizar esta como uma extensão, caso algum ícone específico não seja encontrado na biblioteca padrão. As outras variações contém poucos ícones e baixa semelhança com a biblioteca padrão, portanto não recomenda-se a utilização.

Distribuída sob [licença Simple License](https://github.com/Iconscout/unicons/blob/master/LICENSE), é adequada para utilização em aplicações Web, sejam elas públicas ou privadas. Este exemplo registra tal biblioteca usando o CDN jsDelivr e apresenta alguns de seus ícones em todas as suas variações.

```html preview no-vue
<script type="module">
  import { registerIconLibrary } from '@cps-elements/web/utilities/icon-library';

  registerIconLibrary('uil', {
    resolver: name => {
      const [_, file, mode] = name.match(/^(.*?)(-fill|-mono|-thin)?$/);
      const folder = { '-fill': 'solid', '-mono': 'monochrome', '-thin': 'thinline' }[mode] ?? 'line';
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.5/svg/${folder}/${file}.svg`;
    },
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.removeAttribute('id');
      svg.removeAttribute('data-name');
      svg.innerHTML = svg.innerHTML
        .replaceAll('class="uim-primary"', 'style="color: var(--cps-palette-neutral-600)"')
        .replaceAll('class="uim-secondary"', 'style="color: var(--cps-palette-neutral-500)"')
        .replaceAll('class="uim-tertiary"', 'style="color: var(--cps-palette-neutral-400)"')
        .replaceAll('class="uim-quaternary"', 'style="color: var(--cps-palette-neutral-300)"');
    }
  });
</script>

<div style="font-size: 24px">
  <cps-icon library="uil" name="clock"></cps-icon>
  <cps-icon library="uil" name="padlock"></cps-icon>
  <cps-icon library="uil" name="chart-pie"></cps-icon>
  <cps-icon library="uil" name="setting"></cps-icon>
  <cps-icon library="uil" name="map-pin-alt"></cps-icon>
  <cps-icon library="uil" name="print"></cps-icon>
  <cps-icon library="uil" name="star"></cps-icon>
  <cps-icon library="uil" name="shopping-cart"></cps-icon>

  <br />

  <cps-icon library="uil" name="clock-fill"></cps-icon>
  <cps-icon library="uil" name="padlock-fill"></cps-icon>
  <cps-icon library="uil" name="chart-pie-fill"></cps-icon>
  <cps-icon library="uil" name="star-fill"></cps-icon>

  <br />

  <cps-icon library="uil" name="clock-mono"></cps-icon>
  <cps-icon library="uil" name="padlock-mono"></cps-icon>
  <cps-icon library="uil" name="chart-pie-mono"></cps-icon>
  <cps-icon library="uil" name="star-mono"></cps-icon>

  <br />

  <cps-icon library="uil" name="clock-thin"></cps-icon>
  <cps-icon library="uil" name="chart-pie-thin"></cps-icon>
  <cps-icon library="uil" name="print-thin"></cps-icon>
  <cps-icon library="uil" name="star-thin"></cps-icon>
</div>
```

### Iconoir

[Iconoir](https://iconoir.com/) é uma biblioteca de ícones emergente, com mais de 1300 ícones, todos seguindo o mesmo estilo visual semelhante à variação _outline_ (a padrão da biblioteca padrão).

Esteticamente, possuem semelhança visual com a biblioteca Fluent UI System Icons, portanto é viável utilizar esta como uma extensão, caso algum ícone específico não seja encontrado na biblioteca padrão. Um recurso interessante desta biblioteca, pouco comum em outras, é ajustar a espessura dos traços através da mudança de `stroke-width` em cada SVG, do padrão `1.5` para outros valores (`1.75` entrega um resultado mais próximo da biblioteca padrão).

Distribuída sob [licença MIT](https://github.com/iconoir-icons/iconoir/blob/main/LICENSE), é adequada para utilização em aplicações Web, sejam elas públicas ou privadas. Este exemplo registra tal biblioteca usando o CDN jsDelivr e apresenta uma configuração personalizada de `stroke-width`.

```html preview no-vue
<script type="module">
  import { registerIconLibrary } from '@cps-elements/web/utilities/icon-library';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@6.3.0/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('stroke-width', 1.75)
  });
</script>

<div style="font-size: 24px">
  <cps-icon library="iconoir" name="clock"></cps-icon>
  <cps-icon library="iconoir" name="lock"></cps-icon>
  <cps-icon library="iconoir" name="circle"></cps-icon>
  <cps-icon library="iconoir" name="settings"></cps-icon>
  <cps-icon library="iconoir" name="map"></cps-icon>
  <cps-icon library="iconoir" name="printer"></cps-icon>
  <cps-icon library="iconoir" name="star"></cps-icon>
  <cps-icon library="iconoir" name="cart"></cps-icon>
</div>
```

### Heroicons

[Heroicons](https://heroicons.com/) é uma popular biblioteca da mesma equipe por trás do famoso [TailwindCSS](https://tailwindcss.com/), com mais de 800 ícones, sendo divididos exatamente em um terço entre as variações _outline_ (a padrão), _solid_ (extensão `-fill` após o nome) e _mini_ (extensão `-mini` após o nome).

Esteticamente, todas as variações possuem semelhança visual com a biblioteca Fluent UI System Icons, portanto é viável utilizar esta como uma extensão, caso algum ícone específico não seja encontrado na biblioteca padrão. Especial destaque para a variação mini, especialmente projetada para apresentação em tamanhos menores, que pode ser uma boa para aplicação em elementos pequenos da interface. Interessante observar que sua variação padrão também permite ajustar a espessura dos traços através da mudança de `stroke-width` em cada SVG, cujo padrão também é `1.5`.

Distribuída sob [licença MIT](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE), é adequada para utilização em aplicações Web, sejam elas públicas ou privadas. Este exemplo registra tal biblioteca usando o CDN jsDelivr e apresenta alguns de seus ícones em suas as variações.

```html preview no-vue
<script type="module">
  import { registerIconLibrary } from '@cps-elements/web/utilities/icon-library';

  registerIconLibrary('heroicons', {
    resolver: name => {
      const [_, file, mode] = name.match(/^(.*?)(-fill|-mini)?$/);
      return `https://cdn.jsdelivr.net/npm/heroicons@2.0.16/${
        { '-fill': '24/solid', '-mini': '20/solid' }[mode] ?? '24/outline'
      }/${file}.svg`;
    },
    mutator: svg => svg.setAttribute('stroke-width', 1.85)
  });
</script>

<div style="font-size: 24px">
  <cps-icon library="heroicons" name="clock"></cps-icon>
  <cps-icon library="heroicons" name="lock-closed"></cps-icon>
  <cps-icon library="heroicons" name="chart-pie"></cps-icon>
  <cps-icon library="heroicons" name="cog-6-tooth"></cps-icon>
  <cps-icon library="heroicons" name="map-pin"></cps-icon>
  <cps-icon library="heroicons" name="printer"></cps-icon>
  <cps-icon library="heroicons" name="star"></cps-icon>
  <cps-icon library="heroicons" name="shopping-cart"></cps-icon>

  <br />

  <cps-icon library="heroicons" name="clock-fill"></cps-icon>
  <cps-icon library="heroicons" name="lock-closed-fill"></cps-icon>
  <cps-icon library="heroicons" name="chart-pie-fill"></cps-icon>
  <cps-icon library="heroicons" name="cog-6-tooth-fill"></cps-icon>
  <cps-icon library="heroicons" name="map-pin-fill"></cps-icon>
  <cps-icon library="heroicons" name="printer-fill"></cps-icon>
  <cps-icon library="heroicons" name="star-fill"></cps-icon>
  <cps-icon library="heroicons" name="shopping-cart-fill"></cps-icon>

  <br />

  <span style="font-size: 16px">
    <cps-icon library="heroicons" name="clock-mini"></cps-icon>
    <cps-icon library="heroicons" name="lock-closed-mini"></cps-icon>
    <cps-icon library="heroicons" name="chart-pie-mini"></cps-icon>
    <cps-icon library="heroicons" name="cog-6-tooth-mini"></cps-icon>
    <cps-icon library="heroicons" name="map-pin-mini"></cps-icon>
    <cps-icon library="heroicons" name="printer-mini"></cps-icon>
    <cps-icon library="heroicons" name="star-mini"></cps-icon>
    <cps-icon library="heroicons" name="shopping-cart-mini"></cps-icon>
  </span>
</div>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  fetch('./dist/assets/icons/icons.json')
    .then(res => res.json())
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('cps-input');
      const select = container.querySelector('cps-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="./assets/icons/sprite.svg#${i.name}"></use>
          </svg>
        `;
        list.appendChild(item);

        // Wrap it with a tooltip the first time the mouse lands on it, to improve this page's performance.
        item.addEventListener('mouseenter', () => {
          const tooltip = document.createElement('cps-tooltip');
          tooltip.content = item.getAttribute('data-name');
          tooltip.setAttribute('hoist', '');

          // Close open tooltips
          document.querySelectorAll('.icon-list cps-tooltip[open]').forEach(tooltip => tooltip.hide());

          // Wrap it with a tooltip and trick it into showing up
          item.parentNode.insertBefore(tooltip, item);
          tooltip.appendChild(item);
        }, { once: true });

        // Copy on click
        item.addEventListener('click', () => {
          const tooltip = item.closest('cps-tooltip');
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');

          if (tooltip) {
            tooltip.content = 'Copiado!';
            setTimeout(() => tooltip.content = i.name, 1000);
          }
        });
      });

      // Filter as the user types
      input.addEventListener('cps-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('cps-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('cps-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('cps-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--cps-color-stroke-card-secondary);
    border-radius: var(--cps-border-radius-medium);
    background-color: var(--cps-color-background-solid-primary);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
    padding: var(--cps-spacing-4) var(--cps-spacing-4) var(--cps-spacing-2);
  }

  .icon-search-controls cps-input {
    flex: 1 1 auto;
  }

  .icon-search-controls cps-select {
    flex: 0 0 auto;
    margin-left: 1rem;
    width: 10rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    position: relative;
    grid-template-columns: repeat(12, 1fr);
    padding: var(--cps-spacing-2);
    max-height: 480px;
    overflow-y: auto;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: var(--cps-transition-medium) all;
    margin: 0 auto;
    border-radius: var(--cps-border-radius-medium);
    cursor: copy;
    width: 2em;
    height: 2em;
    font-size: 24px;
  }

  .icon-list-item:hover {
    background-color: var(--cps-palette-accent-50);
    color: var(--cps-palette-accent-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls cps-select {
      margin: 1rem 0 0 0;
      width: auto;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

[component-metadata:cps-icon]
