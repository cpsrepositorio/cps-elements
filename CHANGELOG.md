# Changelog

Todas as mudanças relevantes no CPS Elements são documentadas neste arquivo.

O versionamento deste projeto é aderente aos princípios de [Semantic Versioning](https://semver.org/spec/v2.0.0.html), e seu formato de arquivo é baseado nas definições de [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), ou seja, as mudanças são categorizadas em tópicos `Added` (para novos recursos), `Changed` (para mudanças em funcionalidades existentes), `Deprecated` (para recursos a serem removidos em breve), `Removed` (para funcionalidades já removidas), `Fixed` (para correções de _bugs_), e `Security` (no caso de vulnerabilidades).

## Unreleased

## 1.4.0 - 2026-06-24

## 1.3.1 - 2026-06-24

## 1.3.0 - 2026-06-24

## 1.2.0 - 2026-06-17

## 1.1.0 - 2026-06-17

## 1.0.0 - 2026-06-17
### Added
- **Reconstrução completa** do `<cps-menu>`, adicionando modo flutuante com suporte a _slot_ `anchor`, permitindo menus suspensos, menus de contexto (locais e globais), múltiplos tipos de acionamento (`click`, `focus`, `hover`, `contextmenu`), e controle programático de abertura/fechamento.

### Changed
- Atualização do `<cps-button>` para suportar preenchimento de altura do contêiner pai e centralização de conteúdo com _flexbox_.

### Fixed
- Corrigido `<cps-flyout>` quanto ao `z-index` (agora usa `--cps-z-index-dropdown`) e ao momento de emissão do evento `cps-reposition`.

## 0.25.0 - 2025-12-09
### Added
- Criação do utilitário `<cps-mutation-observer>`.
- Criação do utilitário `<cps-resize-observer>`.

## 0.24.0 - 2025-12-02
### Added
- Criação do componente `<cps-switch>`.

## 0.23.3 - 2025-11-17
### Added
- Atualização do `<cps-avatar>` para suportar propriedades `srcset`, `sizes`, e `no-tooltip`.

### Changed
- 🚨 **BREAKING**: Renomeada propriedade `image` para `src` no componente `<cps-avatar>`.
- Atualização nos temas padrão, tornando `--cps-color-fill-accent-secondary` e `--cps-color-fill-accent-tertiary` calculados a partir de `--cps-color-fill-accent-primary`, facilitando criar temas personalizados apenas através do ajuste da paleta de cores _accent_.

## 0.23.2 - 2025-11-12
### Changed
- Atualização do `<cps-card>` para que as propriedades CSS `--padding` e `--border-radius` sejam suportadas.
- Atualização do `<cps-label>` adicionando `inherit` como valor da propriedade `size` e definindo como novo padrão.
- Atualização do `<cps-link>` adicionando `inherit` como valor da propriedade `size` e definindo como novo padrão.
- Atualização do `<cps-tab-panel>` para que seu `padding` padrão seja correspondente ao valor utilizado no `<cps-card>`.

### Fixed
- Corrigido `<cps-link>`, garantindo que todos os nós renderizados respeitem o `display` em uso.

## 0.23.1 - 2025-11-11
### Changed
- Adição das propriedades `elevation` e `rounded` no componente `<cps-card>`.
- Atualização de logotipos disponíveis no componente `<cps-logo>` removendo `area-di` e adicionando `cps-asscom`, `cps-cgtic` e `cps-sucar`.

### Fixed
- Corrigido `<cps-label>` quanto à renderização da _tag_ HTML correta, relativa ao valor da propriedade `tag`.

## 0.23.0 - 2025-11-03
### Added
- Criação do componente `<cps-range>`.

### Changed
- 🚨 **BREAKING**: Renomeada propriedade `precision` para `step` no componente `<cps-rating>`.
- Migração da base dos componentes de Lit 2 para Lit 3.
- Melhorias de acessibilidade após migração para ESLint Lit A11y 4.

### Fixed
- Corrigido `<cps-tooltip>` para permitir ser re-exibido quando sua animação de ocultação já está em andamento.

## 0.22.0 - 2025-09-05
### Added
- Criação do componente `<cps-rating>`.

## 0.21.0 - 2025-08-18
### Added
- Criação do componente `<cps-calendar>`.

### Changed
- Ajustes e reorganização das chaves de internacionalização, com atualizações em `<cps-dropdown>`, `<cps-input>`, e `<cps-select>`, sem impacto nas funcionalidades.

## 0.20.2 - 2025-07-22
### Added
- Adicionado suporte à utilização composta de `<cps-button>` a `<cps-dropdown>` para atender necessidades de _split button_.

### Changed
- Componente `<cps-dropdown>` passa a ser aceito como parte de um `<cps-button-group>`.
- O atributo `size` do `<cps-button-group>` passa a ser prioritário, sobrescrevendo o tamanho dos botões dentro do grupo.
- A variante `transparent` do `<cps-button>` agora apresenta coloração similar a um `<cps-hyperlink>`, para maior consistência visual e aderência ao CPS Design System.

### Fixed
- Corrige problema com `<tab-group>` se posicionando sobre menus de contexto e outros elementos flutuantes.
- Corrige falta de `id` no `<input>` interno que mantém o valor selecionado do `<cps-dropdown>`.

## 0.20.1 - 2025-07-22
### Changed
- Adicionada verificação no `<cps-input>` para que, ao usar `type` com os valores `button`, `checkbox`, `image`, `radio`, `range`, `reset`, `submit`, se instrua sobre a utilização dos componentes corretos.
- Ajusta a apresentação de ícone de calendário no `<cps-input>` para `type` com os valores `datetime-local`, `month`, e `week`.
- Ajusta a apresentação de ícone de relógio no `<cps-input>` para `type` `time`.
- Adiciona suporte ao `type` `hidden` no `<cps-input>`.

### Fixed
- Todos os componentes agora respeitam o atributo nativo `hidden`.

## 0.20.0 - 2025-06-24
### Added
- Criação do componente `<cps-drawer>`.

### Changed
- Garante que a ocultação de _backdrop_ no `<cps-dialog>` seja equivalente ao comportamento do novo `<cps-drawer>`.

## 0.19.0 - 2025-05-29
### Added
- Criação do componente `<cps-progress>`.

### Changed
- Adição de variável `--cps-color-stroke-tertiary` nos temas claro e escuro.

## 0.18.0 - 2025-05-14
### Added
- Criação do utilitário de acessibilidade `<cps-visually-hidden>`.

### Changed
- Vinculação da documentação de acessibilidade com as documentações pertinentes dos componentes e utilitários específicos.

### Fixed
- Exportação faltando da função `toast` do componente `<cps-dialog>`.

## 0.17.2 - 2025-05-08
### Changed
- Normalização do local do arquivo de implementação dos componentes, sem impacto na forma de utilização.
- Correções na documentação do `<cps-avatar>`.

## 0.17.1 - 2025-04-29
### Changed
- Reduzida a duração da animação padrão de ocultamento de _backdrop_ no `<cps-dialog>`.
- Adiciona `<cps-tooltip>` por padrão ao botão fechar do `<cps-dialog>`.
- Ajustes finos na aparência do `<cps-dialog>`.

### Fixed
- Exportação faltando das funções `showAlert` e `showConfirm` do componente `<cps-dialog>`.

## 0.17.0 - 2025-04-28
### Added
- Criação do componente `<cps-dialog>`.
- Definição do tipo de evento `cps-after-close`.
- Definição do tipo de evento `cps-initial-focus`.
- Definição do tipo de evento `cps-request-close`.

### Changed
- 🚨 **BREAKING**: Variável CSS `--cps-color-background-overlay` renomeada para `--cps-color-backdrop`, para maior aderência com seu caso de uso real em conjunto com o componente `<cps-dialog>`.

## 0.16.0 - 2025-04-03
### Added
- Criação do utilitário `<cps-format-bytes>`.
- Criação do utilitário `<cps-format-date>`.
- Criação do utilitário `<cps-format-number>`.
- Criação do utilitário `<cps-format-relative-time>`.

### Changed
- Correção da importação do componente `<cps-logo>`, em ambientes que exigem extensão de arquivo explícita em importações.

## 0.15.0 - 2024-10-14
### Added
- Criação do componente `<cps-logo>`.

## 0.14.0 - 2024-05-20
### Added
- Criação do componente `<cps-accordion-group>`.

### Changed
- Melhoria na definição de atributos de acessibilidade no `<cps-accordion>`.

## 0.13.0 - 2024-05-02
### Added
- Criação do componente `<cps-accordion>`.

### Changed
- Expõe a parte CSS `svg` do `<cps-icon>` para estilização avançada.

## 0.12.0 - 2024-04-11
### Added
- Criação do componente `<cps-background>`.
- Objeto `detail` no evento `cps-change` do `<cps-radio-group>`.

### Changed
- Estilos do componente `<cps-card>`, especialmente na variante `on-blurred`.
- Corrigido objeto `detail` no evento `cps-change` do `<cps-select>`, ao usar seleção por teclado.

## 0.11.0 - 2024-03-28
### Added
- Criação do componente `<cps-card>`.
- Criação do componente `<cps-link>`.

### Changed
- Pequenos ajustes na documentação.

## 0.10.0 - 2024-03-11
### Added
- Criação do componente `<cps-dropdown>`.
- Documentação sobre acessibilidade.

### Changed
- Adicionado `sync` baseado em `min-width` e `min-height` ao `<cps-flyout>`.
- Barras de rolagem do `<cps-select>` ajustadas para usar `scrollbar-width`.
- Estilos do `<cps-select>` ajustados para condizer com `<cps-input>`.

## 0.9.1 - 2023-09-30
### Added
- Variáveis de estilo de efeito de embaçamento (`blur`), ao invés de valores fixos nos componentes.
- Documentação preliminar sobre personalização de temas e componentes.
- Documentação sobre variáveis de estilo de tipografia.
- Documentação sobre variáveis de estilo de cor.
- Documentação sobre variáveis de estilo de arredondamento de cantos.
- Documentação sobre variáveis de estilo de dimensões e espaçamentos.
- Documentação sobre variáveis de estilo de elevação (sombras).
- Documentação sobre variáveis de estilo de transições.

### Changed
- Paleta de cinzas neutros alterada de cores sólidas para níveis de opacidade.
- Variáveis de estilo para estados de interface renomeadas `--cps-color-system-{x}` para `--cps-color-state-{x}`.
- Ajustadas cores de texto e borda de `<cps-chip>` para variáveis de uso específico, ao invés de genéricas da paleta de cores.

## 0.9.0 - 2023-09-14
### Added
- Criação do componente `<cps-tab-group>`.
- Criação do componente `<cps-tab-item>`.
- Criação do componente `<cps-tab-panel>`.
- Definição do tipo de evento `cps-tab-hide`.
- Definição do tipo de evento `cps-tab-show`.
- Definição do tipo de evento `cps-close`.

### Changed
- Utilização dos novos componentes de abas na estrutura da documentação.

## 0.8.1 - 2023-08-25
### Added
- Documentação sobre formulários.

### Fixed
- Utilização de variáveis CSS `--cps-input-border-bottom-color` e `--cps-input-border-bottom-color-focus` nos controles de formulário, para simplificar a sobrescrita de cores de borda, especialmente em estado `:invalid`.
- Controles de formulário devem forçar atualizar o estado de validação sempre que forem emitir `cps-invalid`, já que isso garante que houve interação do usuário.

## 0.8.0 - 2023-08-24
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
- Documentações de `<cps-flyout>` e `<cps-icon>` agora utilizam `<cps-select>` ao invés de `<select>` comum.

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
