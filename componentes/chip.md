# Chip

[component-header:cps-chip]

```html preview
<cps-chip variant="neutral">Neutro</cps-chip>
<cps-chip variant="informative">Informativo</cps-chip>
<cps-chip variant="warning">Alerta</cps-chip>
<cps-chip variant="critical">Crítico</cps-chip>
<cps-chip variant="success">Sucesso</cps-chip>
```

```jsx react
import { CpsChip } from '@cps-elements/web/react/chip';

const App = () => (
  <>
    <CpsChip variant="neutral">Neutro</CpsChip>
    <CpsChip variant="informative">Informativo</CpsChip>
    <CpsChip variant="warning">Alerta</CpsChip>
    <CpsChip variant="critical">Crítico</CpsChip>
    <CpsChip variant="success">Sucesso</CpsChip>
  </>
);
```

## Exemplos

### Tamanhos

Use o atributo `size` para alterar o tamanho do _chip_.

```html preview
<cps-chip size="small">Pequeno</cps-chip>
<cps-chip size="medium">Médio</cps-chip>
<cps-chip size="large">Grande</cps-chip>
```

```jsx react
import { CpsChip } from '@cps-elements/web/react/chip';

const App = () => (
  <>
    <CpsChip size="small">Pequeno</CpsChip>
    <CpsChip size="medium">Médio</CpsChip>
    <CpsChip size="large">Grande</CpsChip>
  </>
);
```

### Removível

Use o atributo `removable` para adicionar um botão interno que permite remover o _chip_.

```html preview
<div class="removable-chips">
  <cps-chip size="small" removable>Pequeno</cps-chip>
  <cps-chip size="medium" removable>Médio</cps-chip>
  <cps-chip size="large" removable>Grande</cps-chip>
</div>

<script>
  const div = document.querySelector('.removable-chips');

  div.addEventListener('cps-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .removable-chips cps-chip {
    transition: var(--cps-transition-medium) opacity;
  }
</style>
```

```jsx react
import { CpsChip } from '@cps-elements/web/react/chip';

const css = `
  .removable-chips cps-chip {
    transition: var(--cps-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="removable-chips">
        <CpsChip size="small" removable onSlRemove={handleRemove}>
          Pequeno
        </CpsChip>

        <CpsChip size="medium" removable onSlRemove={handleRemove}>
          Médio
        </CpsChip>

        <CpsChip size="large" removable onSlRemove={handleRemove}>
          Grande
        </CpsChip>
      </div>

      <style>{css}</style>
    </>
  );
};
```

?> O evento `cps-remove` é disparado quando o botão de remoção é clicado. Não há lógica de remoção embutida no componente (o exemplo acima apenas esconde e reexibe o _chip_ após dois segundos, para fins de demonstração). Ou seja, cabe ao desenvolvedor implementar a lógica de remoção desejada.

[component-metadata:cps-chip]
