# Acessibilidade

De acordo com as [Diretrizes de Acessibilidade para Conteúdo da Web (WCAG) 2.2](https://www.w3.org/TR/WCAG22/), **acessibilidade** é a prática de tornar conteúdos servidos através da Web (como _sites_, aplicações e sistemas) mais acessíveis, sendo a base fundamental para que se tenha produtos digitais verdadeiramente inclusivos e acessíveis.

Assim, seguir as diretrizes WCAG, bem como outros conteúdos de acessibilidade em geral, torna o conteúdo mais acessível a uma gama ampla de pessoas, especialmente aquelas com deficiências, incluindo cegueira e visão subnormal, surdez e perda auditiva, limitações de movimento, dificuldades de fala, fotossensibilidade, bem como combinações destes. Em alguns casos, até mesmo adaptações para dificuldades de aprendizagem e limitações cognitivas.

Declaradamente, um tópico bem abrangente. Vamos mergulhar nele!

?> Embora recomendemos profundamente que leia toda esta página, se estiver com pressa neste momento e procura algo mais pragmático, pode pular diretamente para as [recomendações práticas](#recomendações-práticas).

## Por que acessibilidade importa?

Conforme a [Pesquisa Nacional de Saúde (PNS) de 2019](https://www.pns.icict.fiocruz.br/wp-content/uploads/2021/12/liv101846.pdf), realizada pelo Instituto Brasileiro de Geografia e Estatística (IBGE), estima-se que **17,3 milhões de brasileiros apresentam alguma deficiência**, ou seja, 8,4% da população a partir de 2 anos de idade apresenta deficiência em ao menos uma de suas funções. A pesquisa também destaca que o tipo de deficiência mais comum é a visual, afetando 3,4% da população, seguida da deficiência motora, atingindo 2,3% da população, e da deficiência auditiva, atingindo 1,1% da população. Ou seja, proporcionar acessibilidade a milhões de pessoas limitadas ou totalmente impedidas de acessarem conteúdos não acessíveis é um excelente motivo para se importar.

Mas, se a empatia com milhões de pessoas não é o bastante, ressalta-se que a acessibilidade na Web é um **requisito legal** em muitos países, incluindo o Brasil. A [Lei Brasileira de Inclusão da Pessoa com Deficiência (LBI)](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm) estabelece que os _sites_, aplicativos e sistemas públicos devem ser acessíveis a todos os usuários, incluindo aqueles com deficiências. A não conformidade com essas diretrizes pode resultar em multas e outras penalidades.

Ainda assim, surpreendentemente, algumas pessoas insistem em pensar que o tema deficiências não é justificativa suficiente para investimentos em acessibilidade, principalmente por conta de potenciais custos adicionais. Para tal pensamento, a WCAG reforça que seguir essas diretrizes inevitavelmente melhorará também a **usabilidade** do conteúdo da Web para os usuários em geral, com ou sem deficiências. Enfim, é uma prática que beneficia a todos.

## Esta biblioteca é acessível?

Acessibilidade é um dos pilares fundamentais para o desenvolvimento desta biblioteca desde sua concepção, pois reconhecemos a relevância de atender todos os usuários para acesso irrestrito às aplicações criadas com CPS Elements, independentemente de suas capacidades físicas, mentais e cognitivas, ou mesmo do dispositivo em uso.

Sabemos que é natural que alguns perguntem _"Mas afinal, CPS Elements é totalmente acessível ou não?"_, porém, para tal pergunta, não existe realmente uma resposta binária – não há um simples "sim" ou "não" para essa pergunta.

### Acessibilidade não é binária

Por mais que métricas quantitativas sejam interessantes e desejáveis em muitos aspectos do desenvolvimento de _software_, acessibilidade não é algo que pode ser medido de forma binária. Acessibilidade é um espectro, e não um estado. Não é algo que você "tem" ou "não tem", mas algo que você "melhora" ou "piora" continuamente.

Por exemplo, o que parece acessível para um usuário com visão pode ser completamente inacessível para um usuário sem visão. E ainda que você se esforce para atender plenamente usuários sem visão, ao otimizar arduamente para os vários leitores de tela disponíveis, você ainda terá que levar em conta visão subnormal (em vários níveis diferentes) e daltonismo, por exemplo, um público que provavelmente não estará usando um leitor de tela. Isso sem sequer começar a falar sobre deficiências auditivas, motoras, cognitivas, bem como qualquer outro cenário individual ou ambiental que possa impactar na acessibilidade, temporária ou permanentemente, para cada usuário da aplicação.

Além disso, embora o tema deficiências seja o mais comum quando se fala de acessibilidade, até o equipamento utilizado pode ser um fator de acessibilidade. Por exemplo, dispositivos móveis, como _smartphones_ e _tablets_ (e sua grande gama de resoluções e densidades de _pixel_), bem como diferentes dispositivos de entrada, como teclados e _mouses_, podem e geralmente irão impactar de alguma maneira (positivamente ou negativamente) o nível de acessibilidade de um conteúdo.

Sendo assim, acessibilidade é algo pelo qual você deve se esforçar continuamente. Nenhum desenvolvedor individual — ou talvez nem mesmo uma equipe inteira — pode afirmar que seu _software_ é 100% acessível, devido à grande diversidade de habilidades envolvidas, tipos de deficiências, dispositivos disponíveis, tecnologias assistivas, e mesmo casos de uso individuais.

### Blocos acessíveis não formam _software_ acessível

Pode chocar alguns, mas a acessibilidade em nível de componentes não resolve o problema. Ajuda, mas não resolve.

Usar blocos de construção acessíveis não torna magicamente o resto da aplicação acessível. Não existe nenhuma biblioteca ou _framework_ que torne seu software "totalmente acessível" sem esforço. Cuidado se alguém te prometeu tal coisa, isto é um sinal de que, no mínimo, não entende muito bem de acessibilidade.

Ainda que componentes possam ter definições de acessibilidade internamente (como atributos `aria-*` e `role`, os quais o CPS Elements emprega conforme as diretrizes WCAG), a forma como eles são usados e combinados pode facilmente quebrar a acessibilidade da aplicação. Por exemplo, um botão pode ser acessível, mas se for usado de forma inadequada (como para redirecionar o usuário para um endereço externo, ao invés de executar uma ação na própria aplicação), a acessibilidade é comprometida. Outro exemplo típico é garantir uma interface plenamente acessível em estado de repouso, mas que se torna inacessível quando ocorre interação (como ao abrir um _menu_ ou _flyout_).

Também é importante notar que os componentes e tecnologias da Web são inovadores por natureza. De fato, são concebidos para ser assim, visto que as principais especificações da plataforma são _living standards_. Então, linguagens, navegadores, tecnologias assistivas e até mesmo as especificações seguem evoluindo na plataforma Web. Um ótimo exemplo disso é a evolução das próprias diretrizes WCAG: a versão 2.2 tornou-se a recomendação oficial em outubro de 2023, de repente tornando parcialmente desatualizadas as classificações de acessibilidade de todos que seguiam a versão 2.1. E a versão 3.0 já se encontra em construção, e continuará a evoluir para atender às necessidades de acessibilidade da melhor forma.

Uma aplicação "totalmente acessível" (caso você insista em usar este termo, inerentemente incorreto) que é acessível hoje, pode não ser acessível amanhã, e vice-versa.

### Filosofia de acessibilidade contínua

Enfim, já que atingir (e manter) uma métrica de 100% acessível não é realista, adotamos no CPS Elements a filosofia de que o compromisso com a acessibilidade é contínuo.

Tudo que é desenvolvido é feito com acessibilidade em mente. Componentes são testados e melhorados com o melhor de nossa capacidade e conhecimento no momento, com a consciência de que sempre deverão haver melhorias posteriores. E, como um projeto livre e de código aberto, incentivamos que todos colaborem também no tema acessibilidade, seja apontando problemas através de [issues](https://github.com/cpsrepositorio/cps-elements/issues), seja diretamente enviando [pull requests](https://github.com/cpsrepositorio/cps-elements/pulls) com melhorias de acessibilidade.

Lembrando que nada disso será suficiente se os desenvolvedores não adotarem a mesma filosofia para cada aplicação usando CPS Elements. Juntos, continuaremos a tornar a Web acessível ao maior número possível de usuários.

## Princípios de acessibilidade

Embora o tópico acessibilidade seja muito amplo e complexo, conforme já brevemente exploramos neste artigo, é possível resumir os princípios fundamentais em quatro pontos principais:

1. **Perceptível**: O conteúdo deve ser apresentado de forma que possa ser percebido pelos usuários, independentemente de suas habilidades sensoriais. Isso inclui fornecer alternativas para conteúdo não textual, como imagens e vídeos.

2. **Operável**: Os usuários devem ser capazes de operar a interface do site ou aplicativo e navegar pelo conteúdo de forma eficaz. Isso inclui fornecer atalhos de teclado, evitar elementos que possam causar convulsões e garantir que o conteúdo seja navegável por meio de diferentes dispositivos de entrada.

3. **Compreensível**: O conteúdo e a interface devem ser compreensíveis para os usuários, independentemente de suas habilidades cognitivas. Isso inclui usar uma linguagem clara e simples, fornecer instruções claras e organizar o conteúdo de forma lógica.

4. **Robusto**: O conteúdo deve ser robusto o suficiente para ser interpretado corretamente por uma ampla variedade de dispositivos, resoluções e tecnologias assistivas. Isso inclui seguir padrões e diretrizes de acessibilidade, como as diretrizes do WCAG.

Dentro de cada um desses princípios, existem diretrizes específicas que podem ajudar a garantir que o conteúdo seja acessível a todos os usuários. Por exemplo, as diretrizes do WCAG incluem recomendações específicas para tornar o conteúdo perceptível, operável, compreensível e robusto.

## Níveis de conformidade

As diretrizes do WCAG são organizadas em três níveis de conformidade: A, AA e AAA. Cada nível de conformidade tem um conjunto específico de diretrizes e critérios de sucesso que devem ser atendidos para alcançar esse nível.

- **Nível A**: Este é o nível mais básico de conformidade e inclui diretrizes e critérios de sucesso que são considerados essenciais para a acessibilidade. Atender a esses critérios de sucesso é o primeiro passo para tornar o conteúdo acessível a uma ampla gama de usuários.

- **Nível AA**: Este é o nível intermediário de conformidade e inclui diretrizes e critérios de sucesso que são considerados importantes para a acessibilidade. Atender a esses critérios de sucesso é o próximo passo para tornar o conteúdo acessível a uma gama ainda mais ampla de usuários.

- **Nível AAA**: Este é o nível mais avançado de conformidade e inclui diretrizes e critérios de sucesso que são considerados avançados para a acessibilidade. Atender a esses critérios de sucesso é o passo final para tornar o conteúdo acessível a uma gama muito ampla de usuários.

Desta forma, visando melhorar continuamente dentro do espectro da acessibilidade, é factível procurar atender progressivamente os níveis de conformidade, começando pelo nível A e avançando para os níveis AA e AAA conforme apropriado.

## Recomendações práticas

Alguns dos componentes desta biblioteca possuem recomendações de acessibilidade pontuais. Ainda que estas recomendações não sejam exaustivas e possam não cobrir todos os casos necessários, como vastamente explicado acima, ainda assim é relevante seguir tais recomendações práticas ao construir interfaces acessíveis com CPS Elements.

Segue um resumo das recomendações para cada área do CPS Elements:

- **[Formulários](/fundamentos/formulários)**: Não se trata de um único componente, mas sim sobre como usar corretamente vários componentes dentro de um `<form>`. Além da usabilidade e da funcionalidade, a documentação sobre formulários oferece recomendações de acessibilidade ao longo de seu texto.

- **[Avatar](/componentes/avatar)**: Use o atributo `label` para adicionar um rótulo descritivo para tecnologias assistivas anunciarem o nome da entidade (normalmente, uma pessoa) associada àquela imagem ou foto de perfil.

- **[Button Group](/componentes/button-group)**: Use o atributo `label` para adicionar um rótulo descritivo para tecnologias assistivas anunciarem antes dos botões apresentados.

- **[Dialog](/componentes/dialog)**: Use o atributo `label` para definir um rótulo principal, tanto visual quanto anunciável por tecnologias assistivas. Se não quiser um rótulo visual, use o atributo `aria-label` para garantir que haja uma explicação apenas para tecnologias assistivas.

- **[Icon](/componentes/icon)**: Use o atributo `label` para adicionar um rótulo descritivo para tecnologias assistivas, caso o ícone não seja meramente decorativo (e, de fato, raramente ícones são meramente decorativos).

- **[Icon Button](/componentes/icon-button)**: Use o atributo `label` para adicionar um rótulo descritivo para tecnologias assistivas, afinal, usuários que não enxergam não fariam ideia de que o ícone dentro do botão está lá e o que ele significa.

- **[Radio Group](/componentes/radio-group)**: Use o atributo `label` para adicionar um rótulo descritivo para tecnologias assistivas anunciarem antes dos _radio buttons_ apresentados.

- **[Visually Hidden](/utilitários/visually-hidden)**: Sempre se atente em anunciar conteúdo adicional para tecnologias assistivas, especialmente durante a navegação por teclado com <kbd>Tab</kbd>, ainda que tal conteúdo nunca seja visível para usuários que enxergam.

## Recursos adicionais

Aqui estão alguns recursos adicionais que podem ajudar no desenvolvimento de _sites_ e aplicativos acessíveis:

- [Guia WCAG 2.2](https://guia-wcag.com/): Guia WCAG, um guia prático e interativo para aprender a implementar as diretrizes de acessibilidade do WCAG. _Em português_.

- [Acessibilidade - Portal Digital de Governo](https://www.gov.br/ds/acessibilidade): Página da documentação do Portal Digital do Governo Brasileiro, com informações sobre acessibilidade na Web em interpretação adaptada para uso em portais públicos nacionais. _Em português_.

- [Web Content Accessibility Guidelines (WCAG 2.2)](https://www.w3.org/TR/WCAG22/): Especificação oficial do W3C que define diretrizes para tornar o conteúdo da Web mais acessível. _Em inglês_.

- [Web Accessibility In Mind (WebAIM)](https://webaim.org/): Recursos, ferramentas e muito material adicional de estudo para ajudar a tornar a Web mais acessível. _Em inglês_.

- [The A11Y Project](https://www.a11yproject.com/): Um projeto conduzido pela comunidade, com foco em tornar o entendimento e a aplicação de acessibilidade digital mais fáceis. _Em inglês_.
