# Mutation Observer

[component-header:cps-mutation-observer]

O observador de mutação reportará mudanças no conteúdo que ele envolve através do evento `cps-mutation`. Quando emitido, uma coleção de objetos [MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) será anexada ao `event.detail`, contendo informações sobre como ocorreu a mudança.

```html preview no-vue
<div class="example-mutation-overview">
  <cps-mutation-observer attr="variant">
    <cps-button variant="accent">Clique para a mutação</cps-button>
  </cps-mutation-observer>

  <br /><br />
  👆 Clique no botão e observe o <i>console</i> do navegador.

  <script>
    const container = document.querySelector('.example-mutation-overview');
    const mutationObserver = container.querySelector('cps-mutation-observer');
    const button = container.querySelector('cps-button');
    const variants = ['accent', 'transparent', 'default'];
    let clicks = 0;

    // Altera o atributo `variant` do botão.
    button.addEventListener('click', () => {
      clicks++;
      button.setAttribute('variant', variants[clicks % variants.length]);
    });

    // Registra as mutações no console do navegador.
    mutationObserver.addEventListener('cps-mutation', event => {
      console.log(event.detail);
    });
  </script>
</div>
```

?> Ao criar um observador de mutação, você deve indicar quais mudanças ele deve observar, incluindo pelo menos um dos atributos `attr`, `child-list` ou `char-data`. Se você não especificar pelo menos um desses atributos, nenhum evento de mutação será emitido.

## Exemplos

### Observar lista de filhos

Use o atributo `child-list` para observar elementos filhos que são adicionados ou removidos.

```html preview no-vue
<div class="example-mutation-child-list">
  <cps-mutation-observer child-list>
    <div class="buttons">
      <cps-button variant="accent">Adicionar botão</cps-button>
    </div>
  </cps-mutation-observer>

  <br /><br />
  👆 Adicione botões e observe o <i>console</i> do navegador. Clique em cada botão para removê-lo.

  <script>
    const container = document.querySelector('.example-mutation-child-list');
    const mutationObserver = container.querySelector('cps-mutation-observer');
    const buttons = container.querySelector('.buttons');
    const button = container.querySelector('cps-button[variant="accent"]');
    let i = 0;

    // Adiciona um botão.
    button.addEventListener('click', () => {
      const button = document.createElement('cps-button');
      button.textContent = ++i;
      buttons.append(button);
    });

    // Remove o botão clicado.
    buttons.addEventListener('click', event => {
      event.stopPropagation();
      const target = event.target.closest('cps-button:not([variant="accent"])');
      target?.remove();
    });

    // Registra as mutações no console do navegador.
    mutationObserver.addEventListener('cps-mutation', event => {
      console.log(event.detail);
    });
  </script>

  <style>
    .example-mutation-child-list .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
    }
  </style>
</div>
```

[component-metadata:cps-mutation-observer]
