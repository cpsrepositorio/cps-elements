# Relançamento institucional — CPS Elements

> **Leia antes de contribuir.** Após a saída do prof. Erick Petrucelli (autor
> original), a biblioteca passou a ser mantida institucionalmente pela **CGTIC/CPS**.
> O código e o histórico foram **preservados** — mudou a propriedade da publicação
> no npm e a organização do trabalho em branches.

## O que foi realizado (junho/2026)

1. **Nova paleta de marca (família PRINCIPAL)** aplicada aos temas claro e escuro:
   rampas `brand` (vermelho) e `accent` (ciano) regeradas a partir do guia
   "Materiais de Comunicação · Cores", por interpolação CIELAB. Gerador reprodutível
   em [`scripts/generate-palette-ramp.py`](scripts/generate-palette-ramp.py)
   (substitui o antigo gerador web externo).
2. **Migração do pacote npm:** `@cps-elements/web` → **`@cgtic-cps/web`**, publicado
   como **v1.0.0**.
3. **Correção do `package-lock.json`** (estava fora de sincronia, quebrando `npm ci`
   e, com isso, o próprio workflow de release).
4. **Runbook de migração e rollback:** [`MIGRACAO-ESCOPO.md`](MIGRACAO-ESCOPO.md).

## Novas referências

| | Antes (Erick) | Agora (institucional) |
|---|---|---|
| Pacote npm | `@cps-elements/web` | **`@cgtic-cps/web`** |
| npm | — | https://www.npmjs.com/package/@cgtic-cps/web |
| CDN (jsDelivr) | `.../npm/@cps-elements/web/...` | `.../npm/@cgtic-cps/web@1/...` |
| Conta / Org npm | (do Erick) | conta `cgticcps` · org `cgtic-cps` |
| GitHub | `cpsrepositorio/cps-elements` | *(inalterado)* |

### Uso via CDN

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;600;700&display=swap" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@cgtic-cps/web@1/autoloader.js"></script>
```

### Uso via npm

```bash
npm install @cgtic-cps/web
```

> A versão é **fixada em `@1`** (recebe correções da linha 1.x, mas fica protegida de
> uma futura `2.0` com mudanças quebradiças). Detalhes de migração dos consumidores
> em [`MIGRACAO-ESCOPO.md`](MIGRACAO-ESCOPO.md), seção 3.

## Qual branch usar

| Branch | Papel |
|--------|-------|
| **`cgtic/relancamento-institucional`** | **Mainline institucional.** Todo trabalho novo parte daqui e integra aqui (via PR, *squash*). É o branch a partir do qual o release é publicado. |
| `main` | Linha original do Erick, **congelada** como baseline histórico. **Não recebe mais commits.** |

### Como publicar uma nova versão

GitHub → **Actions → "Release Package to NPM" → Run workflow**:
- **Use workflow from:** `cgtic/relancamento-institucional`
- **release-level:** `patch` \| `minor` \| `major` (o workflow incrementa, versiona,
  publica `@cgtic-cps/web`, cria tag e GitHub Release automaticamente).

Requisitos já configurados: secret **`NPMJS_ACCESS_TOKEN`** (token *Granular* da conta
`cgticcps`) e a org npm `cgtic-cps`.

## Pendências de manutenção (à parte)

- Migrar os sistemas consumidores das URLs antigas (ver `MIGRACAO-ESCOPO.md`).
- Dívida técnica herdada: erros de `eslint` em `src/components/menu/menu.component.ts`;
  dependências de ~2023 (70 vulnerabilidades, 2 críticas); GitHub Actions deprecadas
  (Node 20).

## Projeto irmão

A identidade visual nasce no **CPS Design System**
(`cpsrepositorio/cps-design-system`), que esta biblioteca implementa. Veja o
documento equivalente lá. Fluxo: **design-system (decisões visuais) → elements
(`@cgtic-cps/web`, implementação)**.
