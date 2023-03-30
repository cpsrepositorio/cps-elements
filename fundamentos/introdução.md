<div class="splash">
<div class="splash-start">
<img class="splash-logo" src="./assets/images/wordmark.svg" alt="CPS Elements">

# Web Components de ponta, sem complicação.

<cps-icon name="globe"></cps-icon> Componentes no navegador, sem _frameworks_;<br />
<cps-icon name="plug-connected-fill"></cps-icon> E nativamente em _frameworks_ como [Vue](/frameworks/vue) e [Angular](/frameworks/angular);<br />
<cps-icon src="assets/images/react.svg"></cps-icon> Ou com _wrappers_ inclusos para suportar [React](/frameworks/react);<br />
<cps-icon name="box"></cps-icon> Empacotado para acesso direto por [CDN](/fundamentos/instalação.md#através-de-cdn);<br />
<cps-icon src="assets/images/art.svg"></cps-icon> Totalmente aderente ao [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/);<br />
<cps-icon name="glasses-fill"></cps-icon> Incluindo tema para modo escuro;<br />
<cps-icon name="document-css"></cps-icon> Mas totalmente personalizável com CSS;<br />
<cps-icon src="assets/images/wheelchair.svg"></cps-icon> Construído com acessibilidade em mente;<br />
<cps-icon name="chat"></cps-icon> Em português, mas com suporte a outros idiomas;<br />
<cps-icon name="lock-open-fill"></cps-icon> E totalmente _open-source_!

</div>

<div class="splash-end">
<img class="splash-image" src="./assets/images/illustration-building-blocks.svg" alt="Ilustração lúdica de pessoa encaixando peças coloridas em um monitor gigante.">
</div>
</div>

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@cps-elements/web/badge)](https://www.jsdelivr.com/package/npm/@cps-elements/web)
[![npm](https://img.shields.io/npm/dw/@cps-elements/web?label=npm&style=flat-square)](https://www.npmjs.com/package/@cps-elements/web)
<br />
[![Licença](https://img.shields.io/badge/license-MIT-232323.svg?style=flat-square)](https://github.com/cpsrepositorio/cps-elements/blob/next/LICENSE.md)
[![Repositório](https://img.shields.io/badge/GitHub-Code-232323.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/cpsrepositorio/cps-elements)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-00acee.svg?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/ErickPetru)

## Início rápido

Adicione o seguinte código ao `<head>` de sua página.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web/all.js"></script>
```

Agora você tem acesso a todos os componentes CPS Elements! Tente adicionar um botão:

<div style="font-family: sans-serif" class="cps-theme-light">

```html preview expanded no-vue
<cps-button>Me clique</cps-button>
```

</div>

?> Este início rápido disponibilizará todos os componentes CPS Elements no navegador do usuário, mas é provável que você não esteja usando todos em seu projeto. Embora útil para testes e prototipação rápida, instalar componentes específicos pode ser mais recomendado para seu caso. Veja mais em [instruções de instalação](fundamentos/instalação).

## Tipografia e modo escuro

Embora apenas carregar o tema claro e o _script_ principal permita uso básico, uma importação de arquivos um pouco mais extensa é provavelmente o cenário típico desejado para aplicações aderentes ao [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/light.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/dark.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web/all.js"></script>
```

Desta vez, registramos também para carregamento pelo navegador do usuário a fonte [Open Sans Variável](https://fonts.google.com/specimen/Open+Sans), para aderência máxima à [tipografia](https://cpsrepositorio.github.io/cps-design-system/guia-visual/tipografia.html), e o tema para modo escuro, para aderência máxima aos [modos de cor](https://cpsrepositorio.github.io/cps-design-system/guia-visual/cores.html#modos-de-cor) do Design System.

<div class="cps-theme-dark">

```html preview expanded no-vue
<cps-button>Me clique</cps-button>
```

</div>

?> Carregar o tema para modo escuro permite que componentes sejam exibidos em modo escuro (como no exemplo acima), mas não habilita a alternância de temas por si só. Veja mais sobre o [tema de modo escuro](temas/modo-escuro).

## O que são Web Components?

**Resposta rápida**: Após muito tempo, finalmente temos uma forma nativa de criar [nossos próprios elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components) e usá-los com qualquer _framework_ JavaScript que quisermos, ou mesmo sem qualquer _framework_!

Principalmente graças à popularidade de _frameworks_ como Angular, React e Vue, desenvolvimento baseado em componentes se tornou parte do cotidiano de desenvolvimento de interfaces Web. Componentes nos ajudam a encapsular estrutura, estilos e comportamentos, em blocos de construção reaproveitáveis. Trabalhar desta forma faz muito sentido em termos de _design_, desenvolvimento e testes.

Infelizmente, componentes dependentes de _frameworks_ falham por alguns motivos:

<cps-icon name="lock-closed-fill"></cps-icon> Você só pode usá-los com o _framework_ para o qual foram feitos;<br />
<cps-icon name="animal-turtle-fill"></cps-icon> Desenvolvedores não acostumados ao _framework_ sofrerão uma lenta curva de aprendizado;<br />
<cps-icon name="people-team-delete-fill"></cps-icon> Construir times onde todos são profundos conhecedores do mesmo _framework_ pode ser de desafiador a inviável;<br />
<cps-icon name="emoji-sad-fill"></cps-icon> Novas versões do _framework_ podem levar a _breaking changes_, exigindo esforço substancial atualizando componentes;<br />
<cps-icon name="arrow-trending-down-fill"></cps-icon> Se o _framework_ acabar abandonado em desuso, seus componentes estão acabados;<br />
<cps-icon name="timer-fill"></cps-icon> No fim das contas, o tempo de vida dos componentes é limitado àquele _framework_.

Web Components resolvem esses problemas. Eles são [suportados por todos os navegadores modernos](https://caniuse.com/#feat=custom-elementsv1), são agnósticos de _frameworks_ JavaScript específicos, e são parte de [especificação oficial](https://html.spec.whatwg.org/multipage/custom-elements.html) que padroniza a Web, portanto é confiável que se manterão suportados por muitos anos vindouros.

Só para ilustrar esta confiança no futuro dos Web Components, mesmo o [primeiro _site_ publicado](http://info.cern.ch/hypertext/WWW/TheProject.html), em 1991, continua suportado nos navegadores modernos. As especificações oficiais têm esta caraterística: Novidades são criadas cautelosamente, para não quebrarem tudo que veio antes.

Esta é a tecnologia sobre a qual o CPS Elements é baseado.

## Qual problema eles resolvem?

CPS Elements provê uma coleção de componentes profissionalmente projetados, criados com tecnologia agnóstica de _frameworks_, aderentes ao _design_ estabelecido no [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/). Por que gastar centenas de horas (ou mais) reconstruindo os mesmos componentes a cada novo projeto, ou então ajustando o visual de componentes de outras bibliotecas para aderência ao visual padronizado do Design System?

Esta pergunta retórica é também a próprio resposta sobre o projeto CPS Elements. Evidentemente, centenas de horas (ou mais) também são necessárias para se construir e se manter estável e atualizada esta biblioteca, então qual sua real vantagem? Além das vantagens técnicas já citadas sobre se sustentar em Web Components, trata-se sobretudo de uma unificação de esforços: Um projeto _open-source_ que diferentes equipes da instituição (ou quiçá até do público externo) podem não apenas utilizar, mas contribuir e melhorar com o tempo.

Portanto, para resumir, com CPS Elements você pode:

- Começar seus projetos mais rápido (sem precisar criar/estilizar até seus botões do zero);
- Construir aplicações com diferentes _frameworks_, mas usando os mesmos componentes de <abbr title="User Interface">UI</abbr>;
- Aproveite boas práticas de usabilidade e acessibilidade que os componentes trazem (sem precisar estudar sobre);
- Adote incrementalmente componentes conforme precisar (não precisa adotar a biblioteca inteira de uma vez);
- Atualize ou troque de _framework_ JavaScript sem precisar refazer os componentes base;
- Migre projetos legados para UI/<abbr title="User Experience">UX</abbr> modernas gradativamente;
- Obtenha aderência instantânea ao CPS Design System nos níveis mais elementares das interfaces;
- Se ainda assim precisar, personalize totalmente a aparência dos componentes.

Se você chegou até aqui como membro de uma equipe do CPS, criando ou manutenindo um sistema interno, vá em frente e comece a utilizar componentes CPS Elements totalmente aderentes ao CPS Design System agora mesmo!

Se você ou sua organização externa estão construindo o próprio Design System, ainda assim CPS Elements pode ajudar a [poupar muito dinheiro](https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871). Os componentes fundamentais estão por aqui, prontos para serem personalizados com sua própria marca. E já que é construído sobre Web _standards_, os navegadores continuarão os suportando por anos, garantindo que seu esforço em adoção e personalização desta biblioteca será compensador.

Não importa se CPS Elements vai lhe respaldar em um projeto novo (ou atualização de um legado) do Centro "Paula Souza", ou será o ponta-pé inicial para o Design System de sua organização externa, ou quem sabe apenas uma ferramenta para divertidos projetos pessoais, tecnicamente não há limite para o que você pode fazer com ele.

## Suporte a navegadores

CPS Elements utiliza padrões estáveis e testados nas versões mais recentes dos navegadores:

<img src="./assets/images/chrome.png" alt="Chrome" title="Chrome" width="64" height="64" />
<img src="./assets/images/edge.png" alt="Edge" title="Edge" width="64" height="64" />
<img src="./assets/images/firefox.png" alt="Firefox" title="Firefox" width="64" height="64" />
<img src="./assets/images/opera.png" alt="Opera" title="Opera" width="64" height="64" />
<img src="./assets/images/safari.png" alt="Safari" title="Safari" width="64" height="64" />

Na eventual necessidade de correções críticas para versões novas destes navegadores, a priorização sempre será realizada a partir no impacto sobre aqueles [com mais usuários](https://gs.statcounter.com/browser-version-partially-combined-market-share/all/brazil) em potencial.

Se você procura suporte a Internet Explorer ou Edge pré-Chromium (mesmo sabendo que virtualmente não existem mais usuários os utilizando), esta biblioteca não é para você. Enquanto Web Components podem (até certo grau) ser habilitados com _polyfills_ para navegadores antigos, o trabalho para tal suporte é fora do escopo deste projeto. E, honestamente, consideramos o custo-benefício deste esforço completamente sem sentido.

## Licença

CPS Elements é parte do projeto de UI/UX institucional, que também sustenta o CPS Design System, projetados originalmente pelo professor [Erick Petrucelli](https://github.com/ErickPetru). Independentemente de suas origens e motivações iniciais, é um projeto totalmente _open-source_ disponível sob os termos da [licença MIT](http://escolhaumalicenca.com.br/licencas/mit/).
