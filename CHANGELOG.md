# Changelog

Todas as mudanças relevantes no CPS Elements são documentadas neste arquivo.

O versionamento deste projeto é aderente aos princípios de [Semantic Versioning](https://semver.org/spec/v2.0.0.html), e seu formato de arquivo é baseado nas definições de [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), ou seja, as mudanças são categorizadas em tópicos `Added` (para novos recursos), `Changed` (para mudanças em funcionalidades existentes), `Deprecated` (para recursos a serem removidos em breve), `Removed` (para funcionalidades já removidas), `Fixed` (para correções de _bugs_), e `Security` (no caso de vulnerabilidades).

## Unreleased

### Added

- Criação do componente `<cps-avatar>`.
- Criação do componente `<cps-option>`.
- Criação do componente `<cps-select>`.
- Ferramenta de busca de ícones embutida na documentação do `<cps-icon>`.

### Changed

- 🚨 **BREAKING**: Renomeado o componente `<cps-popover>` para `<cps-flyout>`, para desambiguação do [_popover_](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/popover) nativo, agora que começou a ser [liberado nos navegadores](https://caniuse.com/mdn-api_htmlelement_popover).
- Incrementada a documentação do `<cps-badge>`, explicitando o uso com `<cps-avatar>`.
- Melhorada a documentação do `<cps-button>`, explicitando o uso com `<cps-badge>`.
- Intensificado o efeito _blur_ em superfícies acrílicas `<cps-menu>`, `<cps-tooltip>`, e `<cps-notification>`.
- Melhorada usabilidade da renderização em estilo `checkbox` do `<cps-menu-item>`, quando não o item está checado.
- Permite ao evento `cps-change` receber valores diversos dentro de `event.detail`.

## 0.7.2 - 2023-08-18

### Changed

- 🚨 **BREAKING**: Reformulação geral dos arquivos de tema `light.css` e `dark.css`. Os nomes da maioria das variáveis de estilo foram alterados, e algumas foram removidas.

## 0.7.1 - 2023-08-14

### Added

- Utilitário `theme` com funções `getTheme`, `setTheme` e `toggleTheme`.
- Documentação sobre temas e sobre detecção de modo de cor preferido.

## 0.7.0 - 2023-08-10

### Added

- Criação do componente `<cps-menu>`.
- Criação do componente `<cps-menu-item>`.
- Criação do componente `<cps-menu-label>`.
- Criação do componente `<cps-notification>`.
- Criação do componente `<cps-separator>`.
- Definição do tipo de evento `cps-select`.

### Changed

- Biblioteca atualizada para TypeScript 5.1.
- Ícones de sistema generalizados de _badge_ para apresentação de _status_ em geral.
- Pequeno ajuste na opacidade das cores `--cps-color-fill-subtle` do tema claro.
- Mudança de nomenclatura de `--cps-color-stroke-divider` para `--cps-color-stroke-separator` nos temas claro e escuro.

## 0.6.0 - 2023-07-12

### Added

- Criação do componente `<cps-label>`.
- Criação do componente `<cps-radio>`.
- Criação do componente `<cps-radio-group>`.
- Criação do componente `<cps-toggle-button>`.

### Changed

- Definição de cor crítica para marcador automático de campo obrigatório, nos temas claro e escuro.

### Fixed

- Correção em exemplos de código React e Vue, sobre a utilização programática do `<cps-tooltip>`.
- Definição da cor de texto de _label_ correta no `<cps-checkbox>` em estado `disabled`.
- Definição da cor de texto de _label_ correta no `<cps-radio>` em estado `disabled`.

## 0.5.0 - 2023-06-15

### Added

- Criação do componente `<cps-tooltip>`.
- Criação do componente utilitário `<cps-popover>`.
- Criação de camada com textura acrílica nos temas base.
- Inclusão de utilitários com diversas animações do projeto `animate.css`, na forma de _mixins_ JavaScript.
- Definição dos tipos de evento `cps-show`, `cps-hide`, `cps-after-show`, `cps-after-hide`, e `cps-reposition`.

## 0.4.0 - 2023-06-02

### Added

- Criação do componente `<cps-checkbox>`.
- Criação do componente `<cps-textarea>`.
- Documentação detalhando os fundamentos de utilização de elementos customizados.
- Ferramenta de pesquisa embutida na documentação.

### Changed

- Melhorias diversas na estratégia de renderização do `<cps-input>`.

### Fixed

- Adiciona tradução faltante em `aria-label` do botão de exibição de calendário no `<cps-input>`.
- Garantir que _host_ do `<cps-icon-button>` não recebe eventos de ponteiro, mas seu `<button>` interno sim.

## 0.3.0 - 2023-05-19

### Added

- Criação do componente `<cps-input>`.
- Definição dos tipos de evento `cps-change`, `cps-clear` e `cps-input`.

### Fixed

- Arredondamento de borda padrão corrigido para o `<cps-icon-button>`.

## 0.2.0 - 2023-05-09

### Added

- Criação do componente `<cps-badge>`.
- Criação do componente `<cps-chip>`.
- Criação do componente `<cps-icon-button>`.
- Criação do componente `<cps-skeleton>`.
- Definição do tipo de evento `cps-remove`.

### Changed

- Suporte a elementos de tamanho variável no `<cps-button>`.
- Atualizada tipagem do _core_ de localização.

### Removed

- Ícones não utilizados da biblioteca de ícones `system`.

## 0.1.9 - 2023-04-20

### Added

- Criação do componente `<cps-button-group>`.
- Definição e exportação de tipos explícitos para os eventos personalizados dos componentes.
- Documentação de uso do CPS Elements com [Angular](https://angular.io/).
- Documentação de uso do CPS Elements com [React](https://react.dev/).
- Documentação de uso do CPS Elements com [Vue](https://vuejs.org/).

### Changed

- Atualizações em alguns módulos internos, sem efeito direto nos componentes pré-existentes.

### Fixed

- Endereço da documentação de `<cps-button>`, `<cps-icon>`, `<cps-include>` e `<cps-spinner>`.

## 0.1.8 - 2023-04-17

### Added

- Atributo `rel` ao `<cps-button>` para permitir criar _links_ que apontam para alvos específicos.
- Método `getForm()` ao `<cps-button>` para permitir manipulação de formulário associado ao botão.
- Parte `svg` exposta no `<cps-icon>` para permitir estilização avançada.

### Changed

- Tipografia alterada para [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex), aderindo às recentes mudanças no CPS Design System.

## 0.1.7 - 2023-03-28

### Changed

- Ajustada geração de componentes React para permitir importações individuais.
- Adicionada possibilidade de importação nomeada em todos os componentes.

## 0.1.6 - 2023-03-27

### Changed

- Atualização das importações na documentação.
- Reorganização da localização dos componentes.
- Redução dos arquivos de tema eliminando algumas variáveis.

## 0.1.5 - 2023-03-26

### Changed

- Processo de exportação de componentes.
- Procedimentos de publicação do pacote.

## 0.1.4 - 2023-03-23

### Fixed

- Publicação dos ícones em `dist`.

## 0.1.3 - 2023-03-23

### Changed

- Republicação para forçar atualização do pacote.

## 0.1.2 - 2023-03-23

### Changed

- Documentação e exportação do `<cps-include>`.

### Fixed

- Corrigido processo de entrega não publicando `dist`.

## 0.1.1 - 2023-03-23

### Added

- Criação do componente `<cps-button>`.
- Criação do componente `<cps-icon>`.
- Criação do componente utilitário `<cps-include>`.
- Criação do componente `<cps-spinner>`.

## 0.1.0 - 2023-03-23

### Added

- Estrutura inicial do projeto.
