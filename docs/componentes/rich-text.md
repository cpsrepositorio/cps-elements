# Rich Text

[component-header:cps-rich-text]

Editor de texto rico para conteúdo formatado: negrito, itálico e sublinhado; título, subtítulo e texto; alinhamento; listas com marcadores e numeradas; link; cor de fonte e de fundo; tabelas (inserir tabela, inserir/excluir linha e coluna); além de desfazer e refazer.

```html preview
<cps-rich-text
  label="Descrição"
  value="<h2>Título</h2><p>Edite este <b>texto</b> com a barra de ferramentas.</p>"
></cps-rich-text>
```

?> Este componente funciona com elementos `<form>` padrão. O valor submetido é o **HTML** do conteúdo. Consulte a seção sobre [formulários](/fundamentos/formulários) para saber mais sobre submissão e validação.

!> **Experimental.** O editor usa `contenteditable` com a API `execCommand`, amplamente suportada pelos navegadores. A API do componente (atributos, eventos e _parts_) é estável; a implementação interna pode evoluir.

## Exemplos

### Rótulo e texto de apoio

Use os atributos `label` e `help-text` (ou os _slots_ de mesmo nome para conteúdo em HTML).

```html preview
<cps-rich-text
  label="Observações"
  help-text="Formate o texto conforme necessário."
></cps-rich-text>
```

### Valor inicial

Defina o conteúdo inicial com o atributo `value`, que aceita HTML.

```html preview
<cps-rich-text
  label="Comunicado"
  value="<h2>Aviso</h2><ul><li>Primeiro item</li><li>Segundo item</li></ul>"
></cps-rich-text>
```

### Link

O botão de link abre uma faixa sob a barra de ferramentas com três campos: **Texto** (o rótulo exibido),
**Endereço** e **Abrir em** (mesma aba ou nova aba).

Com um trecho selecionado, o campo **Texto** já vem preenchido com a seleção; sem seleção, o texto informado é
inserido como o rótulo do link. Se o cursor estiver **sobre um link existente**, a faixa carrega os valores atuais
para edição e exibe o botão **Remover**. `Enter` aplica e `Esc` fecha.

```html preview
<cps-rich-text
  label="Comunicado"
  value='<p>Consulte o <a href="https://www.cps.sp.gov.br" target="_blank" rel="noopener noreferrer">portal institucional</a> para mais informações.</p>'
></cps-rich-text>
```

?> **Nova aba inclui `rel="noopener noreferrer"` automaticamente.** Sem isso, a página aberta ganha acesso a
`window.opener` e pode redirecionar a aba de origem.

!> Apenas os esquemas `http`, `https`, `mailto` e `tel` são aceitos, além de caminhos relativos e âncoras
(`/pagina`, `#secao`). Endereços sem esquema recebem `https://`. Como o valor do campo é **HTML persistido**,
esquemas como `javascript:` são recusados — seriam um vetor de XSS armazenado.

### Espaço reservado

Use `placeholder` para exibir uma dica quando o editor estiver vazio.

```html preview
<cps-rich-text label="Conteúdo" placeholder="Comece a escrever…"></cps-rich-text>
```

### Tamanhos

Use o atributo `size` (`small`, `medium`, `large`).

```html preview
<cps-rich-text size="small" label="Pequeno"></cps-rich-text>
<br />
<cps-rich-text size="large" label="Grande"></cps-rich-text>
```

### Desabilitado e somente leitura

```html preview
<cps-rich-text label="Desabilitado" disabled value="<p>Não editável.</p>"></cps-rich-text>
<br />
<cps-rich-text label="Somente leitura" readonly value="<p>Apenas leitura.</p>"></cps-rich-text>
```

### Campo obrigatório

Com `required`, o campo é inválido quando o conteúdo está vazio, integrando-se à validação do formulário.

```html preview
<form class="rich-text-validacao">
  <cps-rich-text label="Justificativa" required></cps-rich-text>
  <br />
  <cps-button type="submit" variant="accent">Enviar</cps-button>
</form>

<script>
  const form = document.querySelector('.rich-text-validacao');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Formulário válido!');
  });
</script>
```

[component-metadata:cps-rich-text]
