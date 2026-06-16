# Migração de escopo npm: `@cps-elements/web` → `@cps/web`

> Documento operacional da **Trilha 4** (migração de alto impacto). Relançamento
> da biblioteca sob nova gestão institucional, após a saída do autor original.

## 1. Contexto

O acesso à conta npm do escopo original `@cps-elements` foi perdido. A biblioteca
passa a ser publicada sob o escopo **`@cps`**, mantido pela conta institucional
`cgticcps` (organização npm `cps`). O repositório GitHub **permanece** em
`cpsrepositorio/cps-elements` — apenas a distribuição no npm muda.

| | Antes | Depois |
|---|---|---|
| Pacote npm | `@cps-elements/web` | `@cps/web` |
| URL CDN | `cdn.jsdelivr.net/npm/@cps-elements/web/...` | `cdn.jsdelivr.net/npm/@cps/web/...` |
| Versão | `0.25.0` (último do Erick) | `1.0.0` (relançamento) |
| GitHub | `cpsrepositorio/cps-elements` | *(inalterado)* |

## 2. Por que NÃO é uma virada destrutiva

Pacotes publicados no npm **nunca são removidos automaticamente**. O pacote antigo
`@cps-elements/web@0.25.0` continua disponível no jsDelivr **indefinidamente**.

Consequência: sistemas que ainda apontam para a URL antiga **continuam
funcionando** — apenas "congelados" na versão antiga (sem a paleta nova e sem
correções futuras). A migração pode ser **gradual**, no ritmo de cada equipe.
Não há um "dia do apagão".

---

## 3. Guia de migração para os sistemas consumidores

### 3.1 Quem usa via CDN (HTML)

```html
<!-- ANTES -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web/autoloader.js"></script>

<!-- DEPOIS (recomendado: fixar a versão maior) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cps/web@1/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@cps/web@1/autoloader.js"></script>
```

> **Fixe a versão.** `@cps/web@1` recebe correções e novidades da linha 1.x, mas
> fica protegido de uma futura `2.0.0` com mudanças quebradiças. Para travar
> totalmente, use a versão exata: `@cps/web@1.0.0`.
>
> O link da fonte Roboto Flex **não muda**.

### 3.2 Quem usa via npm (bundler / framework)

```bash
npm uninstall @cps-elements/web
npm install @cps/web
```

E atualizar os imports no código:

```diff
- import '@cps-elements/web/autoloader.js';
+ import '@cps/web/autoloader.js';
```

(o mesmo vale para imports de componentes, utilitários, temas e wrappers React).

### 3.3 Cache do jsDelivr

URLs **sem versão** podem demorar até ~7 dias para refletir a publicação. Para
forçar atualização imediata, use a versão fixada (3.1) ou purgue:
`https://purge.jsdelivr.net/npm/@cps/web/themes/light.css`.

---

## 4. Comunicado-modelo às equipes

> **Assunto:** Atualização obrigatória — biblioteca CPS Elements muda de pacote npm
>
> Olá! A biblioteca de componentes **CPS Elements** passou a ser publicada sob um
> novo pacote, agora mantido institucionalmente:
>
> - **De:** `@cps-elements/web`
> - **Para:** `@cps/web` (a partir da versão **1.0.0**)
>
> **O que fazer:** atualizar a referência nos seus sistemas conforme o guia anexo
> (seção 3). **Recomendamos fixar a versão** (`@cps/web@1`).
>
> **Prazo:** _[definir]_. O pacote antigo continuará funcionando, mas **não
> receberá mais atualizações** (nova identidade visual, correções, novos
> componentes) — ele está congelado na versão 0.25.0.
>
> Dúvidas: _[canal de contato da CGTIC]_.

---

## 5. Checklist de publicação (pré-voo)

- [ ] Org `cps` criada no npm (conta `cgticcps`).
- [ ] Token **Automation** gerado e cadastrado como secret `NPMJS_ACCESS_TOKEN` no GitHub.
- [ ] PR-A (paleta) e PR-B (migração de escopo) revisados e mesclados no `main`.
- [ ] `npm run verify` verde (lint + build + test).
- [ ] Disparar **Actions → "Release Package to NPM" → release-level = `major`** (0.25.0 → 1.0.0).
- [ ] Confirmar publicação: `npmjs.com/package/@cps/web` e `cdn.jsdelivr.net/npm/@cps/web@1.0.0/themes/light.css`.
- [ ] Enviar o comunicado (seção 4) às equipes com a lista de consumidores (Trilha 4.3).

---

## 6. Plano de rollback

Cenário: a versão `1.0.0` foi publicada com defeito.

### 6.1 Preferencial — corrigir adiante (sempre seguro)

1. Corrigir no código, abrir PR, mesclar.
2. Republicar com `release-level = patch` → `1.0.1`.
3. O jsDelivr e os consumidores em `@cps/web@1` pegam a correção automaticamente.
4. (Opcional) Marcar a versão ruim: `npm deprecate @cps/web@1.0.0 "use >=1.0.1"`.

### 6.2 Despublicar (somente dentro de 72h)

O npm permite remover uma versão **nas primeiras 72 horas** após publicada:

```bash
npm unpublish @cps/web@1.0.0
```

Aplicável a um relançamento recém-feito, sem dependentes. **Após 72h, não é mais
possível** — use o caminho 6.1.

### 6.3 Reverter o lado Git

O workflow de release cria um commit de versão, uma tag e um GitHub Release.
Para desfazer:

```bash
git push origin :refs/tags/1.0.0      # remove a tag remota
# apagar o Release pela UI do GitHub
git revert <hash-do-commit-de-release>
```

### 6.4 Purgar o CDN

```
https://purge.jsdelivr.net/npm/@cps/web@1.0.0/themes/light.css
```

> **Importante:** rollback **não afeta** quem continua no pacote antigo
> `@cps-elements/web` — aquele permanece intacto e disponível como porto seguro.
