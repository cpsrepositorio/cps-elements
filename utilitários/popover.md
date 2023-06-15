# Popover

[component-header:cps-popover]

O nome deste componente utilitário é inspirado no atributo [`popover`](https://html.spec.whatwg.org/multipage/popover.html) recentemente adicionado nativamente e suportado em alguns navegadores. Entretanto, apesar da inspiração no nome, este componente utilitário usa [Floating UI](https://floating-ui.com/) por baixo dos panos, visando fornecer mecanismo de posicionamento flutuante bem testado, leve e totalmente declarativo para dicas de ferramentas, menus suspensos, dentre outros.

O utilitário _popover_ não provê estilização, apenas posicionamento! O posicionamento preferido do popover, distância e deslocamento podem ser configurados usando atributos. Uma seta que aponta para o âncora pode ser mostrada e customizada a seu gosto. Opções adicionais de posicionamento estão disponíveis e descritas em mais detalhes abaixo.

!> _Popover_ é um utilitário de baixo nível construído especificamente para posicionamento de elementos. Não o confunda com uma [dica de ferramenta](/componentes/tooltip) ou algo similar, pois _este utilitário não proporciona uma experiência acessível_ por padrão. Quase todo uso correto de `<cps-popover>` envolverá outras coisas em volta, adequadamente tratadas por outros componentes que o utilizam. Em geral, podemos instruir a não usá-lo diretamente no HTML de seus próprios projetos.

```html preview no-vue
<div class="popover-overview">
  <cps-popover placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <div class="popover-overview-options">
    <select name="placement" value="top" class="popover-overview-select">
      <option value="top">Superior</option>
      <option value="top-start">Superior inicial</option>
      <option value="top-end">Superior final</option>
      <option value="bottom">Inferior</option>
      <option value="bottom-start">Inferior inicial</option>
      <option value="bottom-end">Inferior final</option>
      <option value="right">Direita</option>
      <option value="right-start">Direita inicial</option>
      <option value="right-end">Direita final</option>
      <option value="left">Esquerda</option>
      <option value="left-start">Esquerda inicial</option>
      <option value="left-end">Esquerda final</option>
    </select>
    <cps-input type="number" name="distance" label="Distância" value="0"></cps-input>
    <cps-input type="number" name="skidding" label="Deslocamento" value="0"></cps-input>
  </div>

  <div class="popover-overview-options">
    <cps-checkbox name="active" checked>Habilitado</cps-checkbox>
    <cps-checkbox name="arrow">Estilo balão</cps-checkbox>
  </div>
</div>

<script>
  const container = document.querySelector('.popover-overview');
  const popover = container.querySelector('cps-popover');
  const select = container.querySelector('select[name="placement"]');
  const distance = container.querySelector('cps-input[name="distance"]');
  const skidding = container.querySelector('cps-input[name="skidding"]');
  const active = container.querySelector('cps-checkbox[name="active"]');
  const arrow = container.querySelector('cps-checkbox[name="arrow"]');

  select.addEventListener('change', () => (popover.placement = select.value));
  distance.addEventListener('cps-input', () => (popover.distance = distance.value));
  skidding.addEventListener('cps-input', () => (popover.skidding = skidding.value));
  active.addEventListener('cps-change', () => (popover.active = active.checked));
  arrow.addEventListener('cps-change', () => (popover.arrow = arrow.checked));
</script>

<style>
  .popover-overview cps-popover {
    --arrow-color: var(--cps-fill-accent-primary);
  }

  .popover-overview span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-overview .box {
    width: 100px;
    height: 50px;
  }

  .popover-overview-options {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 117px);
    gap: 1rem;
    align-items: end;
  }

  .popover-overview-options select {
    grid-column: 1 / span 2;
    width: 250px;
    height: 30px;
  }

  .popover-overview-options cps-input {
    grid-row: 2;
    width: 117px;
  }

  .popover-overview-options + .popover-overview-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsInput } from '@cps-elements/web/react/input';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-overview cps-popover {
    --arrow-color: var(--cps-fill-accent-primary);
  }

  .popover-overview span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-overview .box {
    width: 100px;
    height: 50px;
  }

  .popover-overview-options {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 117px);
    gap: 1rem;
    align-items: end;
  }

  .popover-overview-options select {
    grid-column: 1 / span 2;
    width: 250px;
    height: 30px;
  }

  .popover-overview-options cps-input {
    grid-row: 2;
    width: 117px;
  }

  .popover-overview-options + .popover-overview-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [distance, setDistance] = useState(0);
  const [skidding, setSkidding] = useState(0);
  const [active, setActive] = useState(true);
  const [arrow, setArrow] = useState(false);

  return (
    <>
      <div className="popover-overview">
        <CpsPopover
          placement={placement}
          active={active || null}
          distance={distance}
          skidding={skidding}
          arrow={arrow || null}
        >
          <span slot="anchor" />
          <div className="box" />
        </CpsPopover>

        <div className="popover-overview-options">
          <select
            name="placement"
            value={placement}
            className="popover-overview-select"
            onchange={event => setPlacement(event.target.value)}
          >
            <option value="top">Superior</option>
            <option value="top-start">Superior inicial</option>
            <option value="top-end">Superior final</option>
            <option value="bottom">Inferior</option>
            <option value="bottom-start">Inferior inicial</option>
            <option value="bottom-end">Inferior final</option>
            <option value="right">Direita</option>
            <option value="right-start">Direita inicial</option>
            <option value="right-end">Direita final</option>
            <option value="left">Esquerda</option>
            <option value="left-start">Esquerda inicial</option>
            <option value="left-end">Esquerda final</option>
          </select>
          <CpsInput
            type="number"
            name="distance"
            label="Distância"
            value={distance}
            onSlInput={event => setDistance(event.target.value)}
          />
          <CpsInput
            type="number"
            name="skidding"
            label="Deslocamento"
            value={skidding}
            onSlInput={event => setSkidding(event.target.value)}
          />
        </div>

        <div className="popover-overview-options">
          <CpsCheckbox checked={active} onchange={event => setActive(event.target.checked)}>
            Habilitado
          </CpsCheckbox>
          <CpsCheckbox checked={arrow} onchange={event => setArrow(event.target.checked)}>
            Estilo balão
          </CpsCheckbox>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

?> A âncora de um _popover_ não deve ser estilizada com `display: contents`, pois assim as coordenadas não seriam elegíveis para cálculo. No entanto, se a âncora for um elemento `<slot>`, o popover usará o primeiro elemento interno do _slot_ como âncora. Esse comportamento permite que outros componentes passem âncoras com mais facilidade por composição.

## Exemplos

### Ativação e desativação

_Popovers_ são inativos e ocultos até que o atributo `active` seja aplicado. Remover o atributo irá desmontar da memória toda a lógica de posicionamento e _listeners_ de eventos, o que significa que você pode ter muitos _popovers_ inativos na página sem afetar seu desempenho, e ativá-los sob demanda através de _script_ conforme a necessidade.

```html preview no-vue
<div class="popover-active">
  <cps-popover placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <br />
  <cps-checkbox checked>Habilitado</cps-checkbox>
</div>

<style>
  .popover-active span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-active .box {
    width: 100px;
    height: 50px;
  }
</style>

<script>
  const container = document.querySelector('.popover-active');
  const popover = container.querySelector('cps-popover');
  const active = container.querySelector('cps-checkbox');

  active.addEventListener('cps-change', () => (popover.active = active.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-active span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-active .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="popover-active">
        <CpsPopover placement="top" active={active}>
          <span slot="anchor" />
          <div className="box" />
        </CpsPopover>

        <br />
        <CpsCheckbox checked={active} onchange={event => setActive(event.target.checked)}>
          Habilitado
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Âncoras externas

Por padrão, âncoras são injetadas no _popover_ através do _slot_ `anchor`. Se sua âncora precisa existir fora do _popover_ por alguma razão estrutural, você pode passar o `id` da âncora para o atributo `anchor`. Alternativamente, você pode passar uma referência de elemento para a propriedade `anchor` para obter o mesmo efeito sem usar um `id`.

```html preview
<span id="external-anchor"></span>

<cps-popover anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</cps-popover>

<style>
  #external-anchor {
    display: inline-block;
    margin: 50px 0 0 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  #external-anchor ~ cps-popover .box {
    width: 100px;
    height: 50px;
  }
</style>
```

```jsx react
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  #external-anchor {
    display: inline-block;
    margin: 50px 0 0 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  #external-anchor ~ cps-popover .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  return (
    <>
      <span id="external-anchor" />

      <CpsPopover anchor="external-anchor" placement="top" active>
        <div class="box" />
      </CpsPopover>

      <style>{css}</style>
    </>
  );
};
```

### Posicionamento

Use o atributo `placement` para informar ao _popover_ o posicionamento preferido. Observe que a posição real irá variar para garantir que o painel permaneça na janela de visualização.

Uma vez que o posicionamento automaticamente ajustado estiver em uso, você pode observar o posicionamento real do _popover_ quando ele está ativo, olhando para o atributo `data-current-placement`. Este atributo será atualizado à medida que o _popover_ gira para encontrar espaço disponível, e é removido quando o _popover_ é desativado.

```html preview
<div class="popover-placement">
  <cps-popover placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <br />
  <select name="placement" value="top">
    <option value="top">Superior</option>
    <option value="top-start">Superior inicial</option>
    <option value="top-end">Superior final</option>
    <option value="bottom">Inferior</option>
    <option value="bottom-start">Inferior inicial</option>
    <option value="bottom-end">Inferior final</option>
    <option value="right">Direita</option>
    <option value="right-start">Direita inicial</option>
    <option value="right-end">Direita final</option>
    <option value="left">Esquerda</option>
    <option value="left-start">Esquerda inicial</option>
    <option value="left-end">Esquerda final</option>
  </select>
</div>

<style>
  .popover-placement span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-placement .box {
    width: 100px;
    height: 50px;
  }

  .popover-placement select {
    width: 250px;
    height: 30px;
  }
</style>

<script>
  const container = document.querySelector('.popover-placement');
  const popover = container.querySelector('cps-popover');
  const select = container.querySelector('select');

  select.addEventListener('change', () => (popover.placement = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-placement span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-placement .box {
    width: 100px;
    height: 50px;
  }

  .popover-placement select {
    width: 250px;
    height: 30px;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');

  return (
    <div className="popover-active">
      <div className="popover-placement">
        <CpsPopover placement={placement} active>
          <span slot="anchor" />
          <div className="box" />
        </CpsPopover>

        <br />
        <select name="placement" value={placement} onchange={event => setPlacement(event.target.value)}>
          <option value="top">Superior</option>
          <option value="top-start">Superior inicial</option>
          <option value="top-end">Superior final</option>
          <option value="bottom">Inferior</option>
          <option value="bottom-start">Inferior inicial</option>
          <option value="bottom-end">Inferior final</option>
          <option value="right">Direita</option>
          <option value="right-start">Direita inicial</option>
          <option value="right-end">Direita final</option>
          <option value="left">Esquerda</option>
          <option value="left-start">Esquerda inicial</option>
          <option value="left-end">Esquerda final</option>
        </select>
      </div>

      <style>{css}</style>
    </div>
  );
};
```

### Distância

Use o atributo `distance` para alterar a distância entre o _popover_ e sua âncora. Um valor positivo moverá o _popover_ para mais longe, e um valor negativo o moverá para mais perto.

```html preview
<div class="popover-distance">
  <cps-popover placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <br />
  <input type="range" min="-50" max="50" step="1" value="0" />
</div>

<style>
  .popover-distance span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-distance .box {
    width: 100px;
    height: 50px;
  }

  .popover-distance input {
    width: 250px;
  }
</style>

<script>
  const container = document.querySelector('.popover-distance');
  const popover = container.querySelector('cps-popover');
  const distance = container.querySelector('input');

  distance.addEventListener('input', () => (popover.distance = distance.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-distance span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-distance .box {
    width: 100px;
    height: 50px;
  }

  .popover-distance input {
    width: 250px;
  }
`;

const App = () => {
  const [distance, setDistance] = useState(0);

  return (
    <>
      <div className="popover-distance">
        <CpsPopover placement="top" distance={distance} active>
          <span slot="anchor" />
          <div class="box" />
        </CpsPopover>

        <br />
        <input
          type="range"
          min="-50"
          max="50"
          step="1"
          value={distance}
          onchange={event => setDistance(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Deslocamento

Use o atributo `skidding` para alterar o deslocamento do _popover_ ao longo do eixo da âncora, de modo similar ao atributo `distance` porém movendo-o para os lados ao invés de aumentando ou diminuindo a distância em relação à âncora.

```html preview
<div class="popover-skidding">
  <cps-popover placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <br />
  <input type="range" min="-50" max="50" step="1" value="0" />
</div>

<style>
  .popover-skidding span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-skidding .box {
    width: 100px;
    height: 50px;
  }

  .popover-skidding input {
    width: 250px;
  }
</style>

<script>
  const container = document.querySelector('.popover-skidding');
  const popover = container.querySelector('cps-popover');
  const skidding = container.querySelector('input');

  skidding.addEventListener('input', () => (popover.skidding = skidding.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-skidding span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-skidding .box {
    width: 100px;
    height: 50px;
  }

  .popover-skidding input {
    width: 250px;
  }
`;

const App = () => {
  const [skidding, setSkidding] = useState(0);

  return (
    <>
      <div className="popover-skidding">
        <CpsPopover placement="top" skidding={skidding} active>
          <span slot="anchor"></span>
          <div className="box"></div>
        </CpsPopover>

        <br />
        <input
          type="range"
          min="-50"
          max="50"
          step="1"
          value={skidding}
          onchange={event => setSkidding(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Estilo balão

Use o atributo `arrow` para adicionar uma seta ao seu _popover_. É uma boa ideia definir um valor em `distance` condizente com o tamanho da seta, para dar espaço para que esta não fique cobrindo o elemento alvo.

Por padrão, a seta será alinhada o mais próximo possível do centro da âncora, considerando o espaço disponível e o `arrow-padding`. Você pode usar o atributo `arrow-placement` para forçar a seta a se alinhar ao início, fim ou centro do _popover_.

```html preview
<div class="popover-arrow">
  <cps-popover placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <div class="popover-arrow-options">
    <select name="placement" value="top">
      <option value="top">Superior</option>
      <option value="top-start">Superior inicial</option>
      <option value="top-end">Superior final</option>
      <option value="bottom">Inferior</option>
      <option value="bottom-start">Inferior inicial</option>
      <option value="bottom-end">Inferior final</option>
      <option value="right">Direita</option>
      <option value="right-start">Direita inicial</option>
      <option value="right-end">Direita final</option>
      <option value="left">Esquerda</option>
      <option value="left-start">Esquerda inicial</option>
      <option value="left-end">Esquerda final</option>
    </select>

    <select name="arrow-placement" value="anchor">
      <option value="anchor">Seta âncora</option>
      <option value="start">Seta início</option>
      <option value="end">Seta final</option>
      <option value="center">Seta centro</option>
    </select>
  </div>

  <div class="popover-arrow-options">
    <cps-checkbox name="arrow" checked>Estilo balão</cps-checkbox>
  </div>
</div>

<script>
  const container = document.querySelector('.popover-arrow');
  const popover = container.querySelector('cps-popover');
  const placement = container.querySelector('[name="placement"]');
  const arrowPlacement = container.querySelector('[name="arrow-placement"]');
  const arrow = container.querySelector('[name="arrow"]');

  placement.addEventListener('change', () => (popover.placement = placement.value));
  arrowPlacement.addEventListener('change', () => (popover.arrowPlacement = arrowPlacement.value));
  arrow.addEventListener('cps-change', () => (popover.arrow = arrow.checked));
</script>

<style>
  .popover-arrow span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-arrow .box {
    width: 100px;
    height: 50px;
  }

  .popover-arrow-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .popover-arrow-options select {
    width: 117px;
    height: 30px;
  }

  .popover-arrow-options + .popover-arrow-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-arrow span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-arrow .box {
    width: 100px;
    height: 50px;
  }

  .popover-arrow-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .popover-arrow-options select {
    width: 117px;
    height: 30px;
  }

  .popover-arrow-options + .popover-arrow-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [arrowPlacement, setArrowPlacement] = useState('anchor');
  const [arrow, setArrow] = useState(true);

  return (
    <>
      <div className="popover-arrow">
        <CpsPopover placement={placement} arrow={arrow || null} arrow-placement={arrowPlacement} distance="8" active>
          <span slot="anchor" />
          <div className="box" />
        </CpsPopover>

        <div className="popover-arrow-options">
          <select name="placement" value={placement} onchange={event => setPlacement(event.target.value)}>
            <option value="top">Superior</option>
            <option value="top-start">Superior inicial</option>
            <option value="top-end">Superior final</option>
            <option value="bottom">Inferior</option>
            <option value="bottom-start">Inferior inicial</option>
            <option value="bottom-end">Inferior final</option>
            <option value="right">Direita</option>
            <option value="right-start">Direita inicial</option>
            <option value="right-end">Direita final</option>
            <option value="left">Esquerda</option>
            <option value="left-start">Esquerda inicial</option>
            <option value="left-end">Esquerda final</option>
          </select>

          <select
            name="arrow-placement"
            value={arrowPlacement}
            onchange={event => setArrowPlacement(event.target.value)}
          >
            <option value="anchor">Seta âncora</option>
            <option value="start">Seta início</option>
            <option value="end">Seta final</option>
            <option value="center">Seta centro</option>
          </select>
        </div>

        <div className="popover-arrow-options">
          <CpsCheckbox name="arrow" checked={arrow} onchange={event => setArrow(event.target.checked)}>
            Estilo balão
          </CpsCheckbox>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Personalizando a aparência

A cor de fundo do _popover_ pode ser definida através da variável CSS `--background-color`. A cor da borda pode ser definida através da variável CSS `--border-color`. Você também pode usar o seletor de parte CSS `container` para ajustar estilos adicionais, como filtros, sombras e arredondamento de bordas. Observe que, para não afetar o posicionamento dinâmico do _popover_, a borda é renderizada fora da caixa de conteúdo do elemento, comportando-se como um `outline`.

Caso esteja utilizando o _popover_ com estilo balão, a seta automaticamente utilizará as mesmas cores de fundo e de borda do corpo do _popover_. Adicionalmente, o tamanho da seta também pode ser controlado através da variável CSS `--arrow-size`. Se você precisar estilizar a seta de forma diferenciada, ou ainda informar estilos adicionais nela, também pode usar o seletor de parte CSS `arrow` para ajustá-la diretamente, até mesmo alterando seu formato através de `clip-path`.

```html preview
<div class="popover-custom">
  <cps-popover placement="top" arrow arrow-placement="anchor" distance="16" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <div class="popover-custom-options">
    <select name="placement" value="top">
      <option value="top">Superior</option>
      <option value="top-start">Superior inicial</option>
      <option value="top-end">Superior final</option>
      <option value="bottom">Inferior</option>
      <option value="bottom-start">Inferior inicial</option>
      <option value="bottom-end">Inferior final</option>
      <option value="right">Direita</option>
      <option value="right-start">Direita inicial</option>
      <option value="right-end">Direita final</option>
      <option value="left">Esquerda</option>
      <option value="left-start">Esquerda inicial</option>
      <option value="left-end">Esquerda final</option>
    </select>

    <select name="arrow-placement" value="anchor">
      <option value="anchor">Seta âncora</option>
      <option value="start">Seta início</option>
      <option value="end">Seta final</option>
      <option value="center">Seta centro</option>
    </select>
  </div>

  <div class="popover-custom-options">
    <cps-checkbox name="arrow" checked>Estilo balão</cps-checkbox>
  </div>
</div>

<script>
  const container = document.querySelector('.popover-custom');
  const popover = container.querySelector('cps-popover');
  const placement = container.querySelector('[name="placement"]');
  const arrowPlacement = container.querySelector('[name="arrow-placement"]');
  const arrow = container.querySelector('[name="arrow"]');

  placement.addEventListener('change', () => (popover.placement = placement.value));
  arrowPlacement.addEventListener('change', () => (popover.arrowPlacement = arrowPlacement.value));
  arrow.addEventListener('cps-change', () => (popover.arrow = arrow.checked));
</script>

<style>
  .popover-custom cps-popover {
    --background-color: cyan;
    --border-color: darkcyan;
    --arrow-size: 15px;
  }

  .popover-custom cps-popover::part(container) {
    border-radius: 16px;
    filter: drop-shadow(0 4px 6px #2266ff66);
    box-shadow: inset 0 3px 9px white;
  }

  .popover-custom cps-popover[data-current-placement='bottom']::part(container) {
    box-shadow: inset 0 -3px 9px white;
  }

  .popover-custom cps-popover::part(arrow) {
    clip-path: polygon(25% 15%, 0 0, 100% 0, 75% 15%, 62% 30%, 55% 60%, 50% 100%, 45% 60%, 38% 30%);
  }

  .popover-custom span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-custom .box {
    width: 100px;
    height: 50px;
  }

  .popover-custom-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .popover-custom-options select {
    width: 117px;
    height: 30px;
  }

  .popover-custom-options + .popover-custom-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-custom cps-popover {
    --background-color: cyan;
    --border-color: darkcyan;
    --arrow-size: 15px;
  }

  .popover-custom cps-popover::part(container) {
    border-radius: 16px;
    filter: drop-shadow(0 4px 6px #2266ff66);
    box-shadow: inset 0 3px 9px white;
  }

  .popover-custom cps-popover[data-current-placement='bottom']::part(container) {
    box-shadow: inset 0 -3px 9px white;
  }

  .popover-custom cps-popover::part(arrow) {
    clip-path: polygon(25% 15%, 0 0, 100% 0, 75% 15%, 62% 30%, 55% 60%, 50% 100%, 45% 60%, 38% 30%);
  }

  .popover-custom span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-custom .box {
    width: 100px;
    height: 50px;
  }

  .popover-custom-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .popover-custom-options select {
    width: 117px;
    height: 30px;
  }

  .popover-custom-options + .popover-custom-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [arrowPlacement, setArrowPlacement] = useState('anchor');
  const [arrow, setArrow] = useState(true);

  return (
    <>
      <div className="popover-arrow">
        <CpsPopover placement={placement} arrow={arrow || null} arrow-placement={arrowPlacement} distance="16" active>
          <span slot="anchor" />
          <div className="box" />
        </CpsPopover>

        <div className="popover-arrow-options">
          <select name="placement" value={placement} onchange={event => setPlacement(event.target.value)}>
            <option value="top">Superior</option>
            <option value="top-start">Superior inicial</option>
            <option value="top-end">Superior final</option>
            <option value="bottom">Inferior</option>
            <option value="bottom-start">Inferior inicial</option>
            <option value="bottom-end">Inferior final</option>
            <option value="right">Direita</option>
            <option value="right-start">Direita inicial</option>
            <option value="right-end">Direita final</option>
            <option value="left">Esquerda</option>
            <option value="left-start">Esquerda inicial</option>
            <option value="left-end">Esquerda final</option>
          </select>

          <select
            name="arrow-placement"
            value={arrowPlacement}
            onchange={event => setArrowPlacement(event.target.value)}
          >
            <option value="anchor">Seta âncora</option>
            <option value="start">Seta início</option>
            <option value="end">Seta final</option>
            <option value="center">Seta centro</option>
          </select>
        </div>

        <div className="popover-arrow-options">
          <CpsCheckbox name="arrow" checked={arrow} onchange={event => setArrow(event.target.checked)}>
            Estilo balão
          </CpsCheckbox>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Sincronizando com a dimensão da âncora

Use o atributo `sync` para fazer com que o _popover_ tenha a mesma largura ou altura que o elemento âncora. Isso é útil para controles que precisam garantir que o elemento flutuante subjacente acompanhe as medidas da âncora.

```html preview
<div class="popover-sync">
  <cps-popover placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-popover>

  <br />
  <select value="width">
    <option value="width">Sincronizar largura</option>
    <option value="height">Sincronizar altura</option>
    <option value="both">Sincronizar ambos</option>
    <option value="">Desativar sincronia</option>
  </select>
</div>

<style>
  .popover-sync span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-sync .box {
    width: 100%;
    min-width: 50px;
    height: 100%;
    min-height: 50px;
  }

  .popover-sync select {
    width: 250px;
    height: 30px;
  }
</style>

<script>
  const container = document.querySelector('.popover-sync');
  const popover = container.querySelector('cps-popover');
  const fixed = container.querySelector('cps-checkbox');
  const sync = container.querySelector('select');

  sync.addEventListener('change', () => (popover.sync = sync.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsPopover } from '@cps-elements/web/react';

const css = `
  .popover-sync span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-sync .box {
    width: 100%;
    min-width: 50px;
    height: 100%;
    min-height: 50px;
  }

  .popover-sync select {
    width: 250px;
    height: 30px;
  }
`;

const App = () => {
  const [sync, setSync] = useState('width');

  return (
    <>
      <div class="popover-sync">
        <CpsPopover placement="top" sync={sync} active>
          <span slot="anchor" />
          <div class="box" />
        </CpsPopover>

        <br />
        <select value={sync} onchange={event => setSync(event.target.value)}>
          <option value="width">Sincronizar largura</option>
          <option value="height">Sincronizar altura</option>
          <option value="both">Sincronizar ambos</option>
          <option value="">Desativar sincronia</option>
        </select>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Estratégia de posicionamento

Por padrão, o _popover_ é posicionado usando uma estratégia de posicionamento absoluto. No entanto, se sua âncora for fixa ou existir dentro de um contêiner que tenha `overflow: auto|hidden`, o _popover_ corre o risco de ser cortado. Para contornar isso, você pode usar uma estratégia de posicionamento fixo definindo o atributo `strategy` como `fixed`.

O posicionamento fixo reduz changes de "pulos" quando a âncora é fixa e permite que o _popover_ "quebre" os contêineres que cortam, transpassando todos como um elemento realmente flutuante. Ao usar essa estratégia, é importante observar que o conteúdo será posicionado _relativo ao seu bloco de conteúdo_, que geralmente é a janela de visualização, a menos que um ancestral use `transform`, `perspective` ou `filter`. [Consulte esta página](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) para obter mais detalhes.

Neste exemplo, você pode ver como o _popover_ quebra os limites contêiner (mesmo este possuindo `overflow`) por usar a estratégia de posicionamento fixo. Embora este comportamento parece ser naturalmente o mais cômodo para o desenvolvedor, a estratégia de posicionamento fixo tende a ser menos performática que a absoluta, portanto, evite usá-la desnecessariamente.

Alterne a estratégia de posicionamento e role o contêiner para ver a diferença.

```html preview
<div class="popover-strategy">
  <div class="overflow">
    <cps-popover placement="top" strategy="fixed" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-popover>
  </div>

  <cps-checkbox checked>Posicionamento fixo</cps-checkbox>
</div>

<style>
  .popover-strategy .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .popover-strategy span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-strategy .box {
    width: 100px;
    height: 50px;
  }

  .popover-strategy cps-checkbox {
    margin-top: 1rem;
  }
</style>

<script>
  const container = document.querySelector('.popover-strategy');
  const popover = container.querySelector('cps-popover');
  const fixed = container.querySelector('cps-checkbox');

  fixed.addEventListener('cps-change', () => (popover.strategy = fixed.checked ? 'fixed' : 'absolute'));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-strategy .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .popover-strategy span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-strategy .box {
    width: 100px;
    height: 50px;
  }

  .popover-strategy cps-checkbox {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <>
      <div className="popover-strategy">
        <div className="overflow">
          <CpsPopover placement="top" strategy={fixed ? 'fixed' : 'absolute'} active>
            <span slot="anchor" />
            <div className="box" />
          </CpsPopover>
        </div>

        <CpsCheckbox checked={fixed} onchange={event => setFixed(event.target.checked)}>
          Posicionamento fixo
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Girar automaticamente

Use o atributo `flip` para permitir que o _popover_ gire automaticamente quando não houver espaço suficiente em seu posicionamento preferido. Por padrão, o _popover_ inverte para se posicionar no lado oposto da âncora, mas você pode configurar posicionamentos alternativos preferidos usando `flip-fallback-placement` e `flip-fallback-strategy`. Opções adicionais estão disponíveis para controlar o limite e o preenchimento do comportamento do giro.

Role o contêiner para ver como o _popover_ gira para evitar seu corte.

```html preview
<div class="popover-flip">
  <div class="overflow">
    <cps-popover placement="top" flip active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-popover>
  </div>

  <br />
  <cps-checkbox checked>Permite virar</cps-checkbox>
</div>

<style>
  .popover-flip .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .popover-flip span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-flip .box {
    width: 100px;
    height: 50px;
  }
</style>

<script>
  const container = document.querySelector('.popover-flip');
  const popover = container.querySelector('cps-popover');
  const flip = container.querySelector('cps-checkbox');

  flip.addEventListener('cps-change', () => (popover.flip = flip.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-flip .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .popover-flip span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-flip .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <div className="popover-flip">
        <div className="overflow">
          <CpsPopover placement="top" flip={flip} active>
            <span slot="anchor" />
            <div className="box" />
          </CpsPopover>
        </div>

        <br />
        <CpsCheckbox checked={flip} onchange={event => setFlip(event.target.checked)}>
          Permite virar
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Alternativas de giro

Quando usando o atributo `flip`, você pode personalizar o posicionamento do _popover_ quando o posicionamento preferido não tiver espaço para acomodá-lo. Para isso, use `flip-fallback-placements` e `flip-fallback-strategy`.

Se o posicionamento preferido não tiver espaço, o primeiro posicionamento adequado encontrado em `flip-fallback-placement` será usado. O valor deste atributo deve ser uma string que inclua qualquer número de posicionamentos separados por um espaço, por exemplo, `"right bottom"`.

Se nenhuma alternativa de posicionamento funcionar, o posicionamento final será determinado por `flip-fallback-strategy`. Este valor pode ser `initial` (padrão), onde o posicionamento reverte para a posição em `placement`, ou `best-fit`, onde o posicionamento é escolhido com base no espaço disponível.

Role o contêiner para ver como o _popover_ vai mudando para seus posicionamentos alternativos, para evitar seu corte.

```html preview
<div class="popover-flip-fallbacks">
  <div class="overflow">
    <cps-popover placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-popover>
  </div>
</div>

<style>
  .popover-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .popover-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    margin: 80px 250px 150px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 250px;
  }

  .popover-flip-fallbacks .box {
    width: 100px;
    height: 50px;
  }
</style>
```

```jsx react
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .popover-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    margin: 80px 250px 150px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 250px;
  }

  .popover-flip-fallbacks .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  return (
    <>
      <div className="popover-flip-fallbacks">
        <div className="overflow">
          <CpsPopover
            placement="top"
            flip
            flip-fallback-placements="right bottom"
            flip-fallback-strategy="initial"
            active
          >
            <span slot="anchor" />
            <div className="box" />
          </CpsPopover>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Reposicionamento no eixo

Quando um _popover_ é mais longo que sua âncora, ele corre o risco de ser cortado por um contêiner externo (ou mesmo pelo canto da página, se for o caso). Para evitar isto, use o atributo `shift` para automaticamente reposicionar o _popover_ ao longo de seu eixo, e de volta a uma posição que garanta sua plena visibilidade. Você pode personalizar o comportamento de deslocamento usando `shiftBoundary` e `shift-padding`.

Alterne a caixa de seleção para ver a diferença.

```html preview
<div class="popover-shift">
  <div class="overflow">
    <cps-popover placement="top" shift shift-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-popover>
  </div>

  <cps-checkbox checked>Reposicionamento no eixo</cps-checkbox>
</div>

<style>
  .popover-shift .overflow {
    position: relative;
    overflow: auto;
  }

  .popover-shift span[slot='anchor'] {
    display: inline-block;
    margin: 60px 0 0 10px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-shift .box {
    width: 300px;
    height: 50px;
  }

  .popover-shift cps-checkbox {
    margin-top: 1rem;
  }
</style>

<script>
  const container = document.querySelector('.popover-shift');
  const popover = container.querySelector('cps-popover');
  const shift = container.querySelector('cps-checkbox');

  shift.addEventListener('cps-change', () => (popover.shift = shift.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-shift .overflow {
    position: relative;
    overflow: auto;
  }

  .popover-shift span[slot='anchor'] {
    display: inline-block;
    margin: 60px 0 0 10px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-shift .box {
    width: 300px;
    height: 50px;
  }

  .popover-shift cps-checkbox {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [shift, setShift] = useState(true);

  return (
    <>
      <div className="popover-shift">
        <div className="overflow">
          <CpsPopover placement="top" shift={shift} shift-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </CpsPopover>
        </div>

        <CpsCheckbox checked={shift} onchange={event => setShift(event.target.checked)}>
          Reposicionamento no eixo
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Auto-dimensionamento

Use o atributo `auto-size` para dizer ao _popover_ para se redimensionar quando necessário, para evitar que ele seja cortado. Os valores possíveis são `horizontal`, `vertical` e `both`. Você pode usar `autoSizeBoundary` e `auto-size-padding` para personalizar o comportamento desta opção. O auto-dimensionamento funciona bem com `flip`, mas se você estiver usando `auto-size-padding` certifique-se de que `flip-padding` seja o mesmo valor.

Ao usar `auto-size`, um ou ambos `--auto-size-available-width` e `--auto-size-available-height` serão aplicados. Estes valores determinam o espaço disponível que o _popover_ tem antes que o corte ocorra. Como eles se sobrepõem, você pode usá-los para definir um `max-width`/`max-height` no conteúdo do seu _popover_, e assim controlar seu _overflow_.

Role o contêiner para ver o _popover_ se auto-dimensionar conforme o espaço disponível muda.

```html preview
<div class="popover-auto-size">
  <div class="overflow">
    <cps-popover placement="top" auto-size="both" auto-size-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-popover>
  </div>

  <br />
  <cps-checkbox checked>Auto-dimensionamento</cps-checkbox>
</div>

<style>
  .popover-auto-size .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .popover-auto-size span[slot='anchor'] {
    display: inline-block;
    margin: 200px 50px 120px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-auto-size .box {
    border-radius: var(--cps-border-radius-full);
    width: 100px;
    max-width: var(--auto-size-available-width);
    height: 150px;
    max-height: var(--auto-size-available-height);
  }
</style>

<script>
  const container = document.querySelector('.popover-auto-size');
  const popover = container.querySelector('cps-popover');
  const autoSize = container.querySelector('cps-checkbox');

  autoSize.addEventListener('cps-change', () => (popover.autoSize = autoSize.checked ? 'both' : ''));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsPopover } from '@cps-elements/web/react/popover';

const css = `
  .popover-auto-size .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .popover-auto-size span[slot='anchor'] {
    display: inline-block;
    margin: 200px 50px 120px;
    border: dashed 2px var(--cps-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .popover-auto-size .box {
    border-radius: var(--cps-border-radius-full);
    width: 100px;
    max-width: var(--auto-size-available-width);
    height: 150px;
    max-height: var(--auto-size-available-height);
  }
`;

const App = () => {
  const [autoSize, setAutoSize] = useState(true);

  return (
    <>
      <div className="popover-auto-size">
        <div className="overflow">
          <CpsPopover placement="top" auto-size={autoSize ? 'both' || null} auto-size-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </CpsPopover>
        </div>

        <br />
        <CpsCheckbox checked={autoSize} onchange={event => setAutoSize(event.target.checked)}>
          Auto-dimensionamento
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:cps-popover]
