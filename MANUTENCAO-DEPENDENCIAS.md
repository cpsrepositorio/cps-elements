# Plano: upgrade de dependências

> Iniciativa de manutenção rastreada, **à parte** do relançamento institucional.
> Substitui a issue de planejamento (a criação automática foi bloqueada pelo
> guardrail de segurança; este documento cumpre o mesmo papel, versionado).

## Contexto

Após o relançamento institucional (`@cgtic-cps/web@1.0.0`), as dependências
herdadas são de ~2023. O `npm install` acusa **70 vulnerabilidades**
(9 low, 12 moderate, 47 high, **2 critical**). Pacotes-chave desatualizados:
`esbuild@0.16`, `eslint@8`, `prettier@2`, `typescript@5.1`, `lit@3.3`,
`@web/test-runner@0.15`, `playwright`, entre outros.

## Escopo

- Atualizar `dependencies` e `devDependencies` para versões atuais.
- Eliminar prioritariamente as **2 críticas** e as 47 high.
- Manter `build`, `eslint`, `stylelint` e a **suíte de testes (Playwright)** verdes.
- Corrigir, de quebra, os 2 erros pré-existentes de `ts:check` em
  `src/components/avatar/avatar.test.ts` (`Property 'image'...`).

## Abordagem sugerida

Branch dedicado a partir de `cgtic/relancamento-institucional`, em passos pequenos,
validando `npm run verify` **no CI** a cada etapa:

1. `npm audit fix` (sem `--force`) primeiro; medir o que sobra.
2. Bumps de major, um grupo por vez (commits isolados):
   - `esbuild`, `typescript`, `lit`
   - `prettier` 2→3 (reformata muitos arquivos — manter em commit separado)
   - `eslint` 8→9 → migra para **flat config** (`eslint.config.js`); revisar
     compatibilidade dos plugins (`lit`, `lit-a11y`, `import`, `wc`…). Provável
     item mais trabalhoso.
   - `@web/test-runner` + `playwright`

## Riscos

- `eslint` 8→9 (flat config) e `prettier` 2→3 geram grande _churn_.
- Atualizações de Lit / test-runner podem quebrar testes de componentes.

## Critério de aceite

- `npm audit`: **0 críticas/high**.
- `npm run verify` **verde no CI**.

## ⚠️ Observação de ambiente (importante)

A máquina local da CGTIC tem **inspeção SSL corporativa** (`SELF_SIGNED_CERT_IN_CHAIN`)
que bloqueia downloads do **Playwright** (Chromium) e dos **ícones Fluent**. Portanto,
**o upgrade e os testes devem ser validados no CI (GitHub Actions)** — não localmente.
O workflow `node-verify.yml` é o lugar certo para rodar o `verify` completo.
