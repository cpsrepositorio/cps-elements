# AGENTS.md

## Skills especializadas

Para tarefas especializadas, consulte o índice de skills disponíveis:

```
~/.codex/SKILLS_INDEX.md
```

Instruções de uso:
- Verifique o índice para saber se existe uma skill relevante para a tarefa solicitada
- **Leia o arquivo `SKILL.md` indicado na íntegra** antes de executar qualquer ação
- Carregue a skill somente se a tarefa se encaixar na descrição — não carregue preventivamente
- As skills têm precedência absoluta sobre comportamento padrão para os tipos de documento que cobrem

### Regras de conduta ao executar uma skill

**Proibições:**
- Não faça perguntas sobre informações que estão definidas na skill
- Não adote convenções próprias (nomenclatura, estrutura, formato) — siga exatamente o que a skill define
- Não omita etapas obrigatórias descritas na skill
- Não avance para o próximo passo sem concluir o atual

**Obrigações:**
- Ler a skill **antes** de iniciar — não durante, não depois
- Perguntar ao usuário **apenas** sobre informações que a skill explicitamente instrui a perguntar
- Ao concluir, reportar ao usuário os artefatos criados e as ações realizadas conforme indicado pela skill

---

## Extração de PDFs normativos

Ao receber um PDF jurídico ou normativo para extração:

1. **Leia `.codex/scripts/README.md` na íntegra** antes de qualquer ação.
2. Execute o pipeline descrito lá (`extract-legislation.js` → `fix-encoding-legislation.js`) para obter o texto legível.
3. Só então acione a skill `legislacao-extracao` conforme o índice de skills.
4. **Ao concluir**, apague os arquivos `.txt` temporários gerados pelos scripts (ex: `acto.txt`, `acto-fixed.txt` ou qualquer variante usada). Não deixe resíduos na raiz do projeto.

---

<!-- Adicione abaixo as instruções específicas deste projeto -->
