# Changelog

Todas as mudanças relevantes no CPS Elements são documentadas neste arquivo.

O versionamento deste projeto é aderente aos princípios de [Semantic Versioning](https://semver.org/spec/v2.0.0.html), e seu formato de arquivo é baseado nas definições de [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), ou seja, as mudanças são categorizadas em tópicos `Added` (para novos recursos), `Changed` (para mudanças em funcionalidades existentes), `Deprecated` (para recursos a serem removidos em breve), `Removed` (para funcionalidades já removidas), `Fixed` (para correções de _bugs_), e `Security` (no caso de vulnerabilidades).

## Unreleased

### Changed

- Melhorias diversas na estratégia de renderização do `<cps-input>`.

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
- Criação do componente `<cps-include>`.
- Criação do componente `<cps-spinner>`.

## 0.1.0 - 2023-03-23

### Added

- Estrutura inicial do projeto.
