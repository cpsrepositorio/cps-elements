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
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" />
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

<iframe height="300" style="width: 100%;" scrolling="no" title="CPS Elements - Web Nativa - Auto Carregamento" src="https://codepen.io/ErickPetru/embed/GRXezYm?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ErickPetru/pen/GRXezYm">
  CPS Elements - Web Nativa - Auto Carregamento</a> by Erick Petrucelli (<a href="https://codepen.io/ErickPetru">@ErickPetru</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Carregando o pacote completo

O pacote completo por CDN forçará o _download_ e o registro dos elementos customizados de uma só vez. Observe que isto pode ser conveniente para prototipação rápida, ou para casos onde você possa estar utilizando em sua aplicação praticamente tudo que o CPS Elements oferece. Caso contrário, você estará forçando seus usuários a baixarem muitos códigos não utilizados por sua aplicação, uma sobrecarga desnecessária e custosa.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web/all.js"></script>
```

O exemplo embutido a seguir foi construído no CodePen usando a abordagem por CDN com importação do pacote completo e, de fato, apresentará visualmente o mesmo resultado que o exemplo anterior.

<iframe height="300" style="width: 100%;" scrolling="no" title="CPS Elements - Web Nativa - Pacote Completo" src="https://codepen.io/ErickPetru/embed/poOqJbY?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ErickPetru/pen/poOqJbY">
  CPS Elements - Web Nativa - Pacote Completo</a> by Erick Petrucelli (<a href="https://codepen.io/ErickPetru">@ErickPetru</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

?> Carregar o pacote completo é válido em poucos casos práticos, conforme já explicado. Em geral, prefira o [usar auto-carregamento](#usando-auto-carregamento) ou ainda [importar componentes individualmente](#importar-componentes-individualmente).

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

Excelente, agora é hora de [começar a usar CPS Elements](/fundamentos/utilização)!

?> Muitas aplicações permitem que o usuário altere internamente o modo de cor aplicado, independentemente das configurações globais. Isto envolve criar uma área que permita a alternância do tema, e também registrar de alguma forma tais preferências para um carregamento posterior da aplicação. Mais sobre isso em [temas](/fundamentos/temas#modo-escuro).
