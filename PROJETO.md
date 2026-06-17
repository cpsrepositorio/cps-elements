---
nome: cps-elements
sigla: null
descricao: Web Components de ponta, sem complicação. Biblioteca de componentes de UI.
criado: 2026-06-16
status: em-levantamento
---

# cps-elements

Web Components de ponta, sem complicação. Biblioteca de componentes de UI.

## estrutura

| pasta | finalidade | skill de entrada |
|-------|-----------|-----------------|
| `.motor-IA/` | documentos de entrada, inventário, extração de manuais | inventario-documentos · manual-extracao |
| `.motor-IA/analise/` | especificações funcionais e técnicas (DVN + EFTS + SPECs) | construir-dvn · construir-efts · construir-spec |
| `.motor-IA/links/` | índice de referências cruzadas entre artefatos | wikilinks |

> Observação: a pasta `app/` (módulos PRD) não foi criada nesta inicialização para não
> conflitar com o código-fonte existente (`src/`). Acionar `construir-prd` definirá o destino.

## status-fluxos

| fluxo | status |
|-------|--------|
| inventario-documentos | aguardando |
| construir-dvn | aguardando |
| construir-efts | aguardando |
| construir-spec | aguardando |
| construir-prd | aguardando |
