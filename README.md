# CPS Elements

**Web Components de ponta, sem complicação.**

- Componentes no navegador, sem _frameworks_; 🌐
- E nativamente em _frameworks_ como [Vue](http://localhost:4000/frameworks/vue) e [Angular](http://localhost:4000/frameworks/angular); 🧩
- Ou com _wrappers_ inclusos para suportar [React](http://localhost:4000/frameworks/react); ⚛️
- Empacotado para acesso direto por [CDN](https://www.cloudflare.com/pt-br/learning/cdn/what-is-a-cdn/); 📦
- Totalmente aderente ao [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/); 🎨
- Incluindo tema para modo escuro; 😎
- Mas totalmente personalizável com CSS; 📝
- Construído com acessibilidade em mente; ♿️
- Em português, mas com suporte a outros idiomas; 💬
- E totalmente _open-source_! 🔓

CPS Elements é parte do projeto de UI/UX institucional, que também sustenta o CPS Design System, projetados originalmente pelo professor [Erick Petrucelli](https://twitter.com/ErickPetru). Independentemente de suas origens e motivações iniciais, é um projeto totalmente _open-source_ disponível sob os termos da [licença MIT](LICENSE.md).

---

Documentação: [cpsrepositorio.github.io/cps-elements](https://cpsrepositorio.github.io/cps-elements)

Código-fonte: [github.com/cpsrepositorio/cps-elements](https://github.com/cpsrepositorio/cps-elements)

---

## Do que se trata este projeto?

Após muito tempo, finalmente temos uma forma nativa de criar [nossos próprios elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components) e usá-los com qualquer _framework_ JavaScript que quisermos, ou mesmo sem qualquer _framework_! Embora seja uma especificação nativa [com excelente suporte em navegadores modernos](https://caniuse.com/custom-elementsv1), construir todos os componentes, do zero, se encaixando apropriadamente e seguindo as melhores práticas, é uma ação custosa que muitas equipes não podem assumir (e nem deveriam).

CPS Elements provê uma coleção de componentes profissionalmente projetados, criados com tecnologia agnóstica de _frameworks_, aderentes ao _design_ estabelecido no [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/). Assim, você pode começar seus projetos sem ter que reinventar a roda, se baseando em uma biblioteca de componentes moderna, diretamente no navegador (apenas com HTML e JavaScript padrão), ou junto ao seu _framework_ preferido, seja ele React, Vue, ou Angular.

## Como executar os códigos-fonte?

Se você é ou quer ser um contribuidor, ou seja um "desenvolvedor CPS Elements", você pode usar esta documentação para entender como construir o CPS Elements a partir dos códigos-fonte. Você precisará de um ambiente executando [Node](https://nodejs.org/en) a partir da versão `14.17`, para compilar e executar o projeto localmente.

**Você não precisa fazer nada disso para usar CPS Elements!** Esta página é direcionada a pessoas que querem contribuir com o projeto, ajustar seus códigos-fonte, ou mesmo construir algo novo a partir do CPS Elements.

Se isso não é o que você está tentando fazer, a [documentação](https://cpsrepositorio.github.io/cps-elements) é onde você realmente quer estar para começar.

### O que estão usando para construir o CPS Elements?

Os componentes em si são feitos com [LitElement](https://lit-element.polymer-project.org/), uma classe base de criação de elementos customizados que oferece uma API intuitiva e suporte a interligação reativa de dados. A construção do pacote distribuível é então realizada através de um _script_ de _build_ personalizado, montado com [esbuild](https://esbuild.github.io/).

A base é esta, mas muitas outras técnicas e tecnologias estão em uso, como CSS com _custom properties_ (variáveis), TypeScript, Iconify, Web Test Runner, ESLint, Prettier, dentre outros. Passear por este repositório por um tempo é a melhor forma de observar tudo que está em uso para criação desta biblioteca de componentes.

### Ramificando o repositório

Como de praxe em projetos _open-source_, comece a contribuir [criando sua própria ramificação](https://github.com/cpsrepositorio/cps-elements/fork) no GitHub, e então faça um clone local, por fim instalando as dependências.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/cps-elements
cd cps-elements
npm install
```

### Desenvolvendo

Assim que clonado o repositório, execute o comando:

```bash
npm start
```

Isto iniciará o servidor de desenvolvimento local do CPS Elements. Após a construção inicial (que pode demorar um pouco mais do que as posteriores), seu navegador padrão abrirá automaticamente.

Não há recurso de _hot module reloading_ (HMR) neste projeto, uma vez que os navegadores não oferecem um mecanismo para re-registrar elementos customizados, então, em geral, após salvar mudanças nos códigos-fontes, seu navegador recarregará a página por completo para exibir os conteúdos atualizados.

A documentação deste projeto é escrita em Markdown e gerada como _site_ estático através do Docsify, em tempo de execução. Desta forma, não é um _script_ de compilação da documentação e ela pode ser alterada em tempo real, o que também ocasionará o recarregamento completa do navegador após um salvamento.

### Compilando

Para gerar uma compilação para produção, execute o comando:

```bash
npm run build
```

### Criando novos componentes

Há um _script_ NPM disponível para gerar a base de novos componentes. Para tal, execute o comando a seguir, substituindo `cps-tag-name` o nome de _tag_ HTML desejado para o novo componente.

```bash
npm run create cps-tag-name
```

Isso gerará um arquivo `.ts` de código-fonte, um arquivo de estilos, e uma página de documentação para o novo componente. Quando você iniciar o servidor de desenvolvimento, você encontrará automaticamente o novo componente na sessão "Componentes" da barra de navegação lateral.

### Contribuindo

Embora uma iniciativa originada como parte do projeto de UI/UX institucional, que também sustenta o CPS Design System, CPS Elements é um projeto _open-source_ e contribuições são encorajadas! Se você tem interesse em contribuir, por favor, confira primeiro as [instruções para contribuição](CONTRIBUTING.md).

Qualquer tipo de suporte que você oferecer, será muito apreciado! 👇

- [Curtir o repositório](https://github.com/cpsrepositorio/cps-elements/stargazers)
- [Clonar para contribuir](https://github.com/cpsrepositorio/cps-elements/fork)

## Licença

CPS Elements foi projetado inicialmente pelo professor [Erick Petrucelli](https://twitter.com/ErickPetru). Está disponível sob os termos da [licença MIT](LICENSE.md).
