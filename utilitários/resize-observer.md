# Resize Observer

[component-header:cps-resize-observer]

O observador de redimensionamento reportará mudanças nas dimensões dos elementos que ele envolve através do evento `cps-resize`. Quando emitido, uma coleção de objetos [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) será anexada ao `event.detail`, contendo o elemento alvo e informações sobre suas dimensões.

```html preview no-vue
<div class="example-resize-observer-overview">
  <cps-resize-observer>
    <div>Redimensione esta caixa e observe o <i>console</i> do navegador. 👉</div>
  </cps-resize-observer>
</div>

<script>
  const container = document.querySelector('.example-resize-observer-overview');
  const resizeObserver = container.querySelector('cps-resize-observer');

  // Registra as mutações no console do navegador.
  resizeObserver.addEventListener('cps-resize', event => {
    console.log(event.detail);
  });
</script>

<style>
  .example-resize-observer-overview div {
    border: solid 2px var(--cps-input-border-color);
    padding: 4rem 2rem;
    text-align: center;
  }
</style>
```

[component-metadata:cps-resize-observer]
