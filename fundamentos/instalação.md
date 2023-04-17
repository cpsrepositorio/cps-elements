# Instalação

CPS Elements pode ser instalado e configurado de maneiras alternativas, projetadas para diferentes caso de uso, como através do carregamento direto a partir de um [CDN](https://www.jsdelivr.com/package/npm/@cps-elements/web) ou através da instalação local como uma dependência [NPM](https://www.npmjs.com/package/@cps-elements/web).

Se a sua pretensão é utilizar CPS Elements em conjunto com um _framework_, recomenda-se ler também os guias específicos para [React](/frameworks/react), [Vue](/frameworks/vue), ou [Angular](/frameworks/angular), de acordo com sua escolha.

## Através de CDN

CPS Elements está convenientemente disponível através da rede de distribuição de conteúdo (_Content Delivery Network_, ou simplesmente CDN) denominada [jsDelivr](https://www.jsdelivr.com/about), um serviço de distribuição de pacotes NPM, através de _links_ diretos aos arquivos dos pacotes.

Sem instalações locais, sem _downloads_ manuais salvos em seu projeto, até mesmo sem exigir um ambiente de desenvolvimento local (tanto que alguns exemplos a seguir estão diretamente no [CodePen](https://codepen.io/)). Além disso, a característica de rede distribuída globalmente e os sistemas de _cache_ e _fallback_ deste tipo de plataforma garantem melhor velocidade e estabilidade para servir os arquivos aos clientes.

?> **Esta é a maneira mais simples de usar CPS Elements**. Se você vai usar em um projeto Web nativo, ou seja, HTML, CSS e JavaScript puros em seu projeto, o carregamento através de CDN é a opção definitiva.

### Primeiro carregue os estilos

Já foi abordado no [início rápido](/#início-rápido), mas vale reforçar: carregar o tema padrão CPS Elements é fundamental tanto para a estética quanto para o funcionamento adequado dos componentes.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/light.css" />
```

E também reforçando, em projetos reais aderentes ao [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/) é provável que se queira carregar também a tipografia e o tema de modo de cor escuro.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;600;700&display=swap" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/light.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/dark.css" />
```

Considere estes estilos CSS como primordiais para o prosseguimento da instalação por CDN. Os exemplos dos tópicos a seguir não apresentarão estas importações para evitar repetições, mas se tentar replicá-los, coloque-as primeiro.

### Usando auto-carregamento

O auto-carregamento (em inglês, _autoloader_) é a solução mais simples e, em geral, a mais eficiente para usar CPS Elements a partir de CDN. Trata-se de um _script_ que registra um observador no [DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model) em busca de elementos iniciados com `<cps-` e ainda não registrados. Quando encontrados, realiza as requisições necessárias para carregá-los sob demanda (até mesmo se eles forem adicionados dinamicamente após o carregamento inicial da página).

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web/autoloader.js"></script>
```

Embora conveniente, auto-carregamento pode fazer elementos ainda não carregados serem exibidos como texto puro, um efeito desagradável conhecido como [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). Este artigo vinculado descreve como isto pode ser aliviado de algumas maneiras, sendo nossa recomendação adicionar ao arquivo CSS global de seu projeto:

```css
:not(:defined) {
  visibility: hidden;
}
```

O exemplo embutido a seguir foi construído no CodePen usando a abordagem por CDN com _autoloader_, demonstrando a simplicidade de integrar CPS Elements em uma página Web comum: _"Web Components de ponta, sem complicação"_.

<div class="codepen" style="height: 300px">
  <iframe title="CPS Elements - Web Nativa - Auto Carregamento" src="https://codepen.io/ErickPetru/embed/GRXezYm?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" scrolling="no" height="330">
    Veja o exemplo <a href="https://codepen.io/ErickPetru/pen/GRXezYm">CPS Elements - Web Nativa - Auto Carregamento</a>
    no <a href="https://codepen.io">CodePen</a>.
  </iframe>
</div>

### Carregando o pacote completo

O pacote completo por CDN forçará o _download_ e o registro dos elementos customizados de uma só vez. Observe que isto pode ser conveniente para prototipação rápida, ou para casos onde você possa estar utilizando em sua aplicação praticamente tudo que o CPS Elements oferece. Caso contrário, você estará forçando seus usuários a baixarem muitos códigos não utilizados por sua aplicação, uma sobrecarga desnecessária e custosa.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web/all.js"></script>
```

O exemplo embutido a seguir foi construído no CodePen usando a abordagem por CDN com importação do pacote completo e, de fato, apresentará visualmente o mesmo resultado que o exemplo anterior.

<div class="codepen" style="height: 300px">
  <iframe title="CPS Elements - Web Nativa - Pacote Completo" src="https://codepen.io/ErickPetru/embed/poOqJbY?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" scrolling="no" height="330">
    Veja o exemplo <a href="https://codepen.io/ErickPetru/pen/poOqJbY">CPS Elements - Web Nativa - Pacote Completo</a>
    no <a href="https://codepen.io">CodePen</a>.
  </iframe>
</div>

?> Carregar o pacote completo é válido em poucos casos práticos, conforme já explicado. Em geral, prefira o [usar auto-carregamento](#usando-auto-carregamento) ou ainda [importar componentes individualmente](#importações-individuais).

### Forçando modo escuro

Eventualmente, sua aplicação pode precisar fazer uso apenas do tema em modo escuro. Mas se você tentar importar somente tal arquivo de estilos, perceberá que nenhum tema será aplicado. Isto ocorre por que, além da importação do tema, é necessário que seu elemento `<html>` principal tenha a classe `cps-theme-dark` aplicada.

```html
<html class="cps-theme-dark">
  <!-- ... restante do arquivo ... -->

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/dark.css" />

  <!-- ... restante do arquivo ... -->
</html>
```

### Detectando modo de cor preferido

É possível carregar condicionalmente arquivos de estilo baseado em detecção de `media` CSS. Para o caso de detecção do modo de cor preferido do usuário, a chave `prefers-color-scheme` fornece o comportamento de detecção baseado nas atuais configurações de exibição do sistema operacional do usuário.

Além do atributo `media` para a detecção em si, também é possível tirar proveito do evento `onload`, com um pequeno trecho de _script_ embutido para atribuir automaticamente a classe `cps-theme-dark` ao elemento `<html>` da página, somente se o tema de modo de cor escuro tiver sido carregado.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme: light)"
  href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/light.css"
/>

<link
  rel="stylesheet"
  media="(prefers-color-scheme: dark)"
  href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/dark.css"
  onload="document.documentElement.classList.add('cps-theme-dark')"
/>
```

Com isso, durante o carregamento da página, a detecção das preferências registradas no sistema operacional do usuário serão respeitadas e o tema correto será aplicado automaticamente.

Excelente, agora você já pode [começar a usar CPS Elements](/fundamentos/utilização)!

?> Muitas aplicações permitem que o usuário altere internamente o modo de cor aplicado, independentemente das configurações globais. Isto envolve criar uma área que permita a alternância do tema, e também registrar de alguma forma tais preferências para um carregamento posterior da aplicação. Mais sobre isso em [temas](/fundamentos/temas#modo-escuro).

## Instalação local

Se você não quiser usar o CDN, poderá instalar CPS Elements localmente. Você precisará de um ambiente executando [Node](https://nodejs.org/en), para poder realização a instalação do pacote NPM para seu projeto local.

Considerando que os requisitos já estejam atendidos, navegue até a raiz de seu projeto usando o terminal de sua preferência, e execute o comando a seguir.

```bash
npm install @cps-elements/web
```

NPM funciona basicamente baixando e disponibilizando no diretório `node_modules` de seu projeto todos os pacotes instalados, tanto as referências diretas que seu projeto explicitamente utiliza, quanto as inter-dependências utilizadas por estas. Você deve encontrar um diretório denominado `@cps-elements` ali dentro seu muito esforço.

A partir daí, cabe a você disponibilizar os arquivos de origem para seu aplicativo. Uma maneira é criar uma rota em seu aplicativo chamada `/cps-elements` que serve arquivos estáticos de `node_modules/@cps-elements/web`. Como fazer isso depende profundamente das tecnologias utilizadas em seu projeto, especialmente os servidores Web (tanto de desenvolvimento local, quanto de produção) e, portanto, foge do escopo deste guia detalhar tais passos.

Considerando que você configurou adequadamente a rota, poderá realizar as importações típicas de estilos e _scripts_ nas páginas HTML desejadas. Certifique-se de atualizar `href` e `src` para que eles apontem para a rota local criada.

```html
<link rel="stylesheet" href="/cps-elements/themes/light.css" />
<script type="module" src="/cps-elements/autoloader.js"></script>
```

Criar esta rota apontando para `node_modules`, ou um _link_ simbólico em seu sistema operacional, ou mesmo mover pastas e arquivos manualmente em seu projeto, são ações viáveis mas que podem se tornar repetitivas. Alternativamente, você pode associar uma instalação local à [utilização com um empacotador (_bundler_)](#instalação-com-empacotador) para uma integração mais avançada.

?> Para maior clareza e simplicidade, as importações de componentes ao longo desta documentação mostração caminhos a partir de `@cps-elements/web` ao invés de um caminho completo. Se você estiver usando CDN, ou uma instalação local sem um resolvedor ou empacotador de módulos, precisará ajustar esses caminhos para apontar para a pasta em que CPS Elements está sendo servido, ou ao caminho completo por CDN.

!> Você verá arquivos chamados `chunk.[hash].js` no diretório `chunks` da instalação local desta biblioteca. Nunca importe esses arquivos diretamente, pois eles são gerados durante a compilação e mudam de versão para versão.

## Configurando o caminho base

Alguns componentes dependem de recursos adicionais (como ícones e imagens). Por conveniência, CPS Elements tentará detectar o local correto para carregar tais recursos, com base no _script_ principal que o carregou. Isso pressupõe que os recursos estejam localizados em uma pasta `assets` relativa ao diretório raiz que contém os _scripts_ `all.js` ou `autoloader.js`. Se assim for, os recursos simplesmente funcionarão automaticamente.

No entanto, se você for [importar componentes individualmente](#importações-individuais) ou [utilizar com um empacotador (_bundler_)](#instalação-com-empacotador), precisará definir o caminho base por conta própria. Você pode fazer isso de duas maneiras:

```html
<!-- Opção 1: O atributo data-cps-elements. -->
<script src="custom-bundle.js" data-cps-elements="/path/to/cps-elements/web"></script>

<!-- Opção 2: O método setBasePath(). -->
<script src="custom-bundle.js"></script>
<script type="module">
  import { setBasePath } from '@cps-elements/web/utilities/base-path.js';
  setBasePath('/path/to/cps-elements/web');
</script>
```

?> A biblioteca também exporta um método `getBasePath()` que você pode usar para referenciar recursos.

## Importações individuais

A importação individual de componentes pode ser feita tanto [através de CDN](#através-de-cdn) quando por [instalação local](#instalação-local).

Essa abordagem carregará apenas os componentes de que você explicitamente informar, limitando o número de arquivos que o navegador precisa baixar (nem os _scripts_ base de carregamento da biblioteca seriam baixados). A desvantagem é que você precisa importar cada componente individualmente, em cada diferente página que os utilizar.

Aqui está um exemplo que carrega apenas o componente de botão. Novamente, se você não estiver usando um empacotador, precisará [ajustar o caminho base](#configurando-o-caminho-base) para apontar para a pasta raiz do CPS Elements.

```html
<link rel="stylesheet" href="/path/to/cps-elements/web/themes/light.css" />

<script type="module" data-cps-elements="/path/to/cps-elements/web">
  import '/path/to/cps-elements/web/components/button.js';

  // E o <cps-button> já estará pronto para uso!
</script>
```

Ao longo desta documentação, você encontrará o código para importar individualmente um componente dentro de sua seção _"Importação"_, na própria documentação do referido componente.

Observe que alguns componentes têm dependências a outros, e estas são importadas automaticamente junto. Se um componente tiver dependências, elas serão listadas na seção _"Dependências"_ documentação do referido componente, para que você tenha ciência do peso adicional que o componente adicionará ao seu aplicativo.

!> Nunca importe por desestruturação (como em `import { CpsButton } from '@cps-elements/web'`) a partir da raiz dos diretórios, ou a partir de `all.js`. Isto fará com que o navegador carregue toda a biblioteca, anulando a ideia de importação individual. Em vez disso, escolha a dedo os arquivos específicos, como demonstrado acima.

## Instalação com empacotador

CPS Elements é uma coleção de [módulos JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) nativos (também conhecidos como _ES modules_) que [todos os navegadores modernos entendem](https://caniuse.com/es6-module). No entanto, importar muitos módulos pode resultar em muitas requisições HTTP simultâneas, e tempos de carregamento potencialmente mais longos. O uso de um CDN pode aliviar isso, mas alguns desenvolvedores podem desejar otimizar ainda mais suas importações com um empacotador (em inglês, _bundler_).

Independentemente do _bundler_ que escolher, você começará instalando CPS Elements e o _bundler_ desejado em si como dependências do projeto (o que os registrará no `package.json`). Em seguida, será hora de configurar seu _bundler_ para a utilização de Web Components e para a manipulação geral dos arquivos HTML, CSS e JavaScript do projeto. Dependendo da sua escolha de _bundler_, a configuração pode ser mínima (ou mesmo inexistente), ou pode necessitar de mais passos.

Além disso, observe que muitas ferramentas de empacotamento possuem grande flexibilidade, portanto nenhuma configuração em especial é inquestionável para todos os casos. Tome as instruções a seguir como pontos de partida, os quais eventualmente podem precisar de configurações adicionais para seu caso de uso específico.

!> Os módulos dos componentes incluem efeitos colaterais para fins de registro. Por isso, importar com desestruturação, diretamente de `@cps-elements/web` ou `@cps-elements/web/all.js`, pode resultar em um tamanho de pacote maior do que o necessário. Para otimizar o processo de _three-shaking_ realizado pelos empacotadores, sempre opte por [importações individuais](#importações-individuais), ou seja, importe componentes e utilitários de seus respectivos arquivos.

### Empacotando com Vite

[Vite](https://vitejs.dev/) é um empacotador moderno, que usa tecnologias Web de ponta para entregar excelentes funcionalidades e alto desempenho, tanto no empacotamento em desenvolvimento quanto para produção. Construído sobre Rollup, oferece um conjunto de funcionalidades altamente opinativas, ou seja, configuradas _out-of-the-box_ para o uso mais típico na Web moderna. Em cenários comuns, não é requerida nenhuma configuração adicional para usar Vite com CPS Elements!

Fundamentalmente, instalar CPS Elements e Vite como dependências de seu projeto (sendo Vite uma dependência de desenvolvimento), são os únicos requisitos mínimos para funcionar.

```bash
npm install @cps-elements/web
npm install -D vite
```

Com isto feito, basta importar os arquivos desejados do CPS Elements (já que é uma [instalação local](#instalação-local)), inclusive realizando [importações individuais](#importações-individuais), e as coisas simplesmente funcionarão. Veja o [repositório de exemplo de CPS Elements com Vite](https://github.com/ErickPetru/cps-elements-example-vite) para mais detalhes, também incorporado abaixo para sua pré-visualização ao vivo.

<iframe
  title="CPS Elements - Exemplo - Vite"
  src="https://stackblitz.com/edit/cps-elements-example-vite?embed=1&hideNavigation=1&theme=light&file=package.json,main.js"
  frameborder="no"
  loading="lazy"
  allowtransparency="true"
  allowfullscreen="true"
  scrolling="no"
  height="440"
>
  Veja o exemplo <a href="https://stackblitz.com/edit/cps-elements-example-vite">CPS Elements - Exemplo - Vite</a> no
  <a href="https://stackblitz.com">StackBlitz</a>.
</iframe>

_Opcionalmente_, recursos extras como [ícones da biblioteca padrão](../componentes/icon#bibliotecas-padrão) podem ser mantidos em carregamento por CDN, ou podem ser copiados da instalação local e carregados com o _bundler_. No caso do Vite, se trata de copiar `node_modules/@cps-elements/web/assets` para `assets` de seu próprio projeto, com `vite-plugin-static-copy` para automação da tarefa.

```bash
# Instalar 'vite-plugin-static-copy' como uma dependência adicional.
npm install -D vite-plugin-static-copy
```

Por fim, tal _plugin_ recém-instalado será configurado no `vite.config.js` da raiz de seu projeto (ou `vite.config.ts`, para um projeto Vite com TypeScript), como apresentado a seguir.

```js
import { viteStaticCopy as copy } from 'vite-plugin-static-copy';

export default {
  plugins: [
    copy({
      targets: [{ src: 'node_modules/@cps-elements/web/assets/icons', dest: 'assets' }]
    })
  ]
};
```

?> Copiar os _assets_ localmente pode ser útil se você quiser garantir que todos sejam consumidos por sua aplicação a partir das mesmas requisições ao endereço de seu próprio servidor. Em alguns cenários isto pode ser relevante, como no caso de uma aplicação servida em modo _offline_. Entretanto, lembre-se que isto significa que [as vantagens de utilização de um CDN](#através-de-cdn) não serão aproveitadas nem mesmo para os recursos extras utilizados.

### Empacotando com Webpack

[Webpack](https://webpack.js.org/) é um empacotador de módulos JavaScript tradicional, extremamente extensível e poderoso. Foi por muitos anos uma espécie de _opção padrão_ nesta área, e ainda hoje é usado por grandes projetos, como o _framework_ [Angular](/frameworks/angular). Também é uma opção válida para empacotar projetos com tecnologias Web nativas, ou seja, HTML, CSS e JavaScript puros (o que inclui os nativos Web Components).

Em sua versão 5, o Webpack avançou no suporte a módulos JavaScript nativos (_ES modules_), sem necessitar de configurações em especial para o uso dos Web Components do CPS Elements. Assim, fundamentalmente basta instalá-lo e configurá-lo apropriadamente como com qualquer outro projeto Web moderno, e ele funcionará.

Como mesmo as configurações básicas com Webpack podem ser extensas e confusas para quem está iniciando, disponibilizamos um [repositório de exemplo de CPS Elements com Webpack](https://github.com/ErickPetru/cps-elements-example-webpack) para mais detalhes.

### Empacotando com Rollup

[Rollup](https://rollupjs.org/) é um empacotador de módulos JavaScript que revolucionou a construção de bibliotecas com modularizadas em JavaScript alguns anos atrás, tendo inclusive servido como inspiração (e, de fato, também como base tecnológica) para o surgimento do Vite. Ainda que Vite seja uma solução mais pré-configurada, pronta para desenvolvimento Web moderno, é possível utilizar diretamente Rollup para empacotamento de projetos com tecnologias Web nativas, ou seja, HTML, CSS e JavaScript puros (o que inclui os nativos Web Components).

Em sua versão 3, o Rollup avançou no suporte a módulos JavaScript nativos (_ES modules_), sem necessitar de configurações em especial para o uso dos Web Components do CPS Elements. Assim, fundamentalmente basta instalá-lo e configurá-lo apropriadamente como com qualquer outro projeto Web moderno, e ele funcionará.

Observe que a filosofia por trás do Rollup é inversa a ser opinativo, ou seja, prefere configurações explícitas para tudo. Assim, cada funcionalidade desejada, como carregamento de HTML, CSS, SVG, bem como o empacotamento JavaScript propriamente dito, depende de configurações. Como tais configurações podem soar confusas para quem está iniciando, disponibilizamos um [repositório de exemplo de CPS Elements com Rollup](https://github.com/ErickPetru/cps-elements-example-rollup) para mais detalhes.
