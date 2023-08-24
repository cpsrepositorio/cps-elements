# Flyout

[component-header:cps-flyout]

O nome deste componente utilitário é inspirado no [flyout](https://learn.microsoft.com/en-us/windows/apps/design/controls/dialogs-and-flyouts/flyouts) do Windows Design, variante do Fluent Design System, umas das inspirações do CPS Design System. Entretanto, apesar da inspiração no nome, este componente utilitário usa [Floating UI](https://floating-ui.com/) por baixo dos panos, visando fornecer mecanismo de posicionamento flutuante bem testado, leve e totalmente declarativo para dicas de ferramentas, menus suspensos, dentre outros.

O utilitário _flyout_ não provê estilização, apenas posicionamento! O posicionamento preferido do flyout, distância e deslocamento podem ser configurados usando atributos. Uma seta que aponta para o âncora pode ser mostrada e customizada a seu gosto. Opções adicionais de posicionamento estão disponíveis e descritas em mais detalhes abaixo.

!> _Flyout_ é um utilitário de baixo nível construído especificamente para posicionamento de elementos. Não o confunda com uma [dica de ferramenta](/componentes/tooltip) ou algo similar, pois _este utilitário não proporciona uma experiência acessível_ por padrão. Quase todo uso correto de `<cps-flyout>` envolverá outras coisas em volta, adequadamente tratadas por outros componentes que o utilizam. Em geral, podemos instruir a não usá-lo diretamente no HTML de seus próprios projetos.

```html preview no-vue
<div class="flyout-overview">
  <cps-flyout placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <div class="flyout-overview-options">
    <cps-select name="placement" value="top" class="flyout-overview-select">
      <cps-option value="top">Superior</cps-option>
      <cps-option value="top-start">Superior inicial</cps-option>
      <cps-option value="top-end">Superior final</cps-option>
      <cps-option value="bottom">Inferior</cps-option>
      <cps-option value="bottom-start">Inferior inicial</cps-option>
      <cps-option value="bottom-end">Inferior final</cps-option>
      <cps-option value="right">Direita</cps-option>
      <cps-option value="right-start">Direita inicial</cps-option>
      <cps-option value="right-end">Direita final</cps-option>
      <cps-option value="left">Esquerda</cps-option>
      <cps-option value="left-start">Esquerda inicial</cps-option>
      <cps-option value="left-end">Esquerda final</cps-option>
    </cps-select>
    <cps-input type="number" name="distance" label="Distância" value="0"></cps-input>
    <cps-input type="number" name="skidding" label="Deslocamento" value="0"></cps-input>
  </div>

  <div class="flyout-overview-options">
    <cps-checkbox name="active" checked>Habilitado</cps-checkbox>
    <cps-checkbox name="arrow">Estilo balão</cps-checkbox>
  </div>
</div>

<script>
  const container = document.querySelector('.flyout-overview');
  const flyout = container.querySelector('cps-flyout');
  const select = container.querySelector('cps-select[name="placement"]');
  const distance = container.querySelector('cps-input[name="distance"]');
  const skidding = container.querySelector('cps-input[name="skidding"]');
  const active = container.querySelector('cps-checkbox[name="active"]');
  const arrow = container.querySelector('cps-checkbox[name="arrow"]');

  select.addEventListener('cps-change', () => (flyout.placement = select.value));
  distance.addEventListener('cps-input', () => (flyout.distance = distance.value));
  skidding.addEventListener('cps-input', () => (flyout.skidding = skidding.value));
  active.addEventListener('cps-change', () => (flyout.active = active.checked));
  arrow.addEventListener('cps-change', () => (flyout.arrow = arrow.checked));
</script>

<style>
  .flyout-overview cps-flyout {
    --arrow-color: var(--cps-color-fill-accent-primary);
  }

  .flyout-overview span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-overview .box {
    width: 100px;
    height: 50px;
  }

  .flyout-overview-options {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 117px);
    gap: 1rem;
    align-items: end;
  }

  .flyout-overview-options cps-select {
    grid-column: 1 / span 2;
    width: 250px;
    height: 30px;
  }

  .flyout-overview-options cps-input {
    grid-row: 2;
    width: 117px;
  }

  .flyout-overview-options + .flyout-overview-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';
import { CpsInput } from '@cps-elements/web/react/input';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const css = `
  .flyout-overview cps-flyout {
    --arrow-color: var(--cps-color-fill-accent-primary);
  }

  .flyout-overview span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-overview .box {
    width: 100px;
    height: 50px;
  }

  .flyout-overview-options {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 117px);
    gap: 1rem;
    align-items: end;
  }

  .flyout-overview-options cps-select {
    grid-column: 1 / span 2;
    width: 250px;
    height: 30px;
  }

  .flyout-overview-options cps-input {
    grid-row: 2;
    width: 117px;
  }

  .flyout-overview-options + .flyout-overview-options {
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
      <div className="flyout-overview">
        <CpsFlyout
          placement={placement}
          active={active || null}
          distance={distance}
          skidding={skidding}
          arrow={arrow || null}
        >
          <span slot="anchor" />
          <div className="box" />
        </CpsFlyout>

        <div className="flyout-overview-options">
          <CpsSelect
            name="placement"
            value={placement}
            className="flyout-overview-select"
            onCpsChange={event => setPlacement(event.target.value)}
          >
            <cps-option value="top">Superior</cps-option>
            <cps-option value="top-start">Superior inicial</cps-option>
            <cps-option value="top-end">Superior final</cps-option>
            <cps-option value="bottom">Inferior</cps-option>
            <cps-option value="bottom-start">Inferior inicial</cps-option>
            <cps-option value="bottom-end">Inferior final</cps-option>
            <cps-option value="right">Direita</cps-option>
            <cps-option value="right-start">Direita inicial</cps-option>
            <cps-option value="right-end">Direita final</cps-option>
            <cps-option value="left">Esquerda</cps-option>
            <cps-option value="left-start">Esquerda inicial</cps-option>
            <cps-option value="left-end">Esquerda final</cps-option>
          </CpsSelect>
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

        <div className="flyout-overview-options">
          <CpsCheckbox checked={active} onCpsChange={event => setActive(event.target.checked)}>
            Habilitado
          </CpsCheckbox>
          <CpsCheckbox checked={arrow} onCpsChange={event => setArrow(event.target.checked)}>
            Estilo balão
          </CpsCheckbox>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

?> A âncora de um _flyout_ não deve ser estilizada com `display: contents`, pois assim as coordenadas não seriam elegíveis para cálculo. No entanto, se a âncora for um elemento `<slot>`, o flyout usará o primeiro elemento interno do _slot_ como âncora. Esse comportamento permite que outros componentes passem âncoras com mais facilidade por composição.

## Exemplos

### Ativação e desativação

_Flyouts_ são inativos e ocultos até que o atributo `active` seja aplicado. Remover o atributo irá desmontar da memória toda a lógica de posicionamento e _listeners_ de eventos, o que significa que você pode ter muitos _flyouts_ inativos na página sem afetar seu desempenho, e ativá-los sob demanda através de _script_ conforme a necessidade.

```html preview no-vue
<div class="flyout-active">
  <cps-flyout placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <br />
  <cps-checkbox checked>Habilitado</cps-checkbox>
</div>

<style>
  .flyout-active span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-active .box {
    width: 100px;
    height: 50px;
  }
</style>

<script>
  const container = document.querySelector('.flyout-active');
  const flyout = container.querySelector('cps-flyout');
  const active = container.querySelector('cps-checkbox');

  active.addEventListener('cps-change', () => (flyout.active = active.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-active span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-active .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="flyout-active">
        <CpsFlyout placement="top" active={active}>
          <span slot="anchor" />
          <div className="box" />
        </CpsFlyout>

        <br />
        <CpsCheckbox checked={active} onCpsChange={event => setActive(event.target.checked)}>
          Habilitado
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Âncoras externas

Por padrão, âncoras são injetadas no _flyout_ através do _slot_ `anchor`. Se sua âncora precisa existir fora do _flyout_ por alguma razão estrutural, você pode passar o `id` da âncora para o atributo `anchor`. Alternativamente, você pode passar uma referência de elemento para a propriedade `anchor` para obter o mesmo efeito sem usar um `id`.

```html preview no-vue
<span id="external-anchor"></span>

<cps-flyout anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</cps-flyout>

<style>
  #external-anchor {
    display: inline-block;
    margin: 50px 0 0 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  #external-anchor ~ cps-flyout .box {
    width: 100px;
    height: 50px;
  }
</style>
```

```jsx react
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  #external-anchor {
    display: inline-block;
    margin: 50px 0 0 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  #external-anchor ~ cps-flyout .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  return (
    <>
      <span id="external-anchor" />

      <CpsFlyout anchor="external-anchor" placement="top" active>
        <div class="box" />
      </CpsFlyout>

      <style>{css}</style>
    </>
  );
};
```

### Posicionamento

Use o atributo `placement` para informar ao _flyout_ o posicionamento preferido. Observe que a posição real irá variar para garantir que o painel permaneça na janela de visualização.

Uma vez que o posicionamento automaticamente ajustado estiver em uso, você pode observar o posicionamento real do _flyout_ quando ele está ativo, olhando para o atributo `data-current-placement`. Este atributo será atualizado à medida que o _flyout_ gira para encontrar espaço disponível, e é removido quando o _flyout_ é desativado.

```html preview no-vue
<div class="flyout-placement">
  <cps-flyout placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <br />
  <cps-select name="placement" value="top">
    <cps-option value="top">Superior</cps-option>
    <cps-option value="top-start">Superior inicial</cps-option>
    <cps-option value="top-end">Superior final</cps-option>
    <cps-option value="bottom">Inferior</cps-option>
    <cps-option value="bottom-start">Inferior inicial</cps-option>
    <cps-option value="bottom-end">Inferior final</cps-option>
    <cps-option value="right">Direita</cps-option>
    <cps-option value="right-start">Direita inicial</cps-option>
    <cps-option value="right-end">Direita final</cps-option>
    <cps-option value="left">Esquerda</cps-option>
    <cps-option value="left-start">Esquerda inicial</cps-option>
    <cps-option value="left-end">Esquerda final</cps-option>
  </cps-select>
</div>

<style>
  .flyout-placement span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-placement .box {
    width: 100px;
    height: 50px;
  }

  .flyout-placement cps-select {
    width: 250px;
    height: 30px;
  }
</style>

<script>
  const container = document.querySelector('.flyout-placement');
  const flyout = container.querySelector('cps-flyout');
  const select = container.querySelector('cps-select');

  select.addEventListener('cps-change', () => (flyout.placement = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsFlyout } from '@cps-elements/web/react/flyout';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const css = `
  .flyout-placement span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-placement .box {
    width: 100px;
    height: 50px;
  }

  .flyout-placement cps-select {
    width: 250px;
    height: 30px;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');

  return (
    <div className="flyout-active">
      <div className="flyout-placement">
        <CpsFlyout placement={placement} active>
          <span slot="anchor" />
          <div className="box" />
        </CpsFlyout>

        <br />
        <CpsSelect name="placement" value={placement} onCpsChange={event => setPlacement(event.target.value)}>
          <CpsOption value="top">Superior</CpsOption>
          <CpsOption value="top-start">Superior inicial</CpsOption>
          <CpsOption value="top-end">Superior final</CpsOption>
          <CpsOption value="bottom">Inferior</CpsOption>
          <CpsOption value="bottom-start">Inferior inicial</CpsOption>
          <CpsOption value="bottom-end">Inferior final</CpsOption>
          <CpsOption value="right">Direita</CpsOption>
          <CpsOption value="right-start">Direita inicial</CpsOption>
          <CpsOption value="right-end">Direita final</CpsOption>
          <CpsOption value="left">Esquerda</CpsOption>
          <CpsOption value="left-start">Esquerda inicial</CpsOption>
          <CpsOption value="left-end">Esquerda final</CpsOption>
        </CpsSelect>
      </div>

      <style>{css}</style>
    </div>
  );
};
```

### Distância

Use o atributo `distance` para alterar a distância entre o _flyout_ e sua âncora. Um valor positivo moverá o _flyout_ para mais longe, e um valor negativo o moverá para mais perto.

```html preview no-vue
<div class="flyout-distance">
  <cps-flyout placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <br />
  <input type="range" min="-50" max="50" step="1" value="0" />
</div>

<style>
  .flyout-distance span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-distance .box {
    width: 100px;
    height: 50px;
  }

  .flyout-distance input {
    width: 250px;
  }
</style>

<script>
  const container = document.querySelector('.flyout-distance');
  const flyout = container.querySelector('cps-flyout');
  const distance = container.querySelector('input');

  distance.addEventListener('input', () => (flyout.distance = distance.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-distance span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-distance .box {
    width: 100px;
    height: 50px;
  }

  .flyout-distance input {
    width: 250px;
  }
`;

const App = () => {
  const [distance, setDistance] = useState(0);

  return (
    <>
      <div className="flyout-distance">
        <CpsFlyout placement="top" distance={distance} active>
          <span slot="anchor" />
          <div class="box" />
        </CpsFlyout>

        <br />
        <input
          type="range"
          min="-50"
          max="50"
          step="1"
          value={distance}
          onCpsChange={event => setDistance(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Deslocamento

Use o atributo `skidding` para alterar o deslocamento do _flyout_ ao longo do eixo da âncora, de modo similar ao atributo `distance` porém movendo-o para os lados ao invés de aumentando ou diminuindo a distância em relação à âncora.

```html preview no-vue
<div class="flyout-skidding">
  <cps-flyout placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <br />
  <input type="range" min="-50" max="50" step="1" value="0" />
</div>

<style>
  .flyout-skidding span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-skidding .box {
    width: 100px;
    height: 50px;
  }

  .flyout-skidding input {
    width: 250px;
  }
</style>

<script>
  const container = document.querySelector('.flyout-skidding');
  const flyout = container.querySelector('cps-flyout');
  const skidding = container.querySelector('input');

  skidding.addEventListener('input', () => (flyout.skidding = skidding.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-skidding span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-skidding .box {
    width: 100px;
    height: 50px;
  }

  .flyout-skidding input {
    width: 250px;
  }
`;

const App = () => {
  const [skidding, setSkidding] = useState(0);

  return (
    <>
      <div className="flyout-skidding">
        <CpsFlyout placement="top" skidding={skidding} active>
          <span slot="anchor"></span>
          <div className="box"></div>
        </CpsFlyout>

        <br />
        <input
          type="range"
          min="-50"
          max="50"
          step="1"
          value={skidding}
          onCpsChange={event => setSkidding(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Estilo balão

Use o atributo `arrow` para adicionar uma seta ao seu _flyout_. É uma boa ideia definir um valor em `distance` condizente com o tamanho da seta, para dar espaço para que esta não fique cobrindo o elemento alvo.

Por padrão, a seta será alinhada o mais próximo possível do centro da âncora, considerando o espaço disponível e o `arrow-padding`. Você pode usar o atributo `arrow-placement` para forçar a seta a se alinhar ao início, fim ou centro do _flyout_.

```html preview no-vue
<div class="flyout-arrow">
  <cps-flyout placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <div class="flyout-arrow-options">
    <cps-select name="placement" value="top">
      <cps-option value="top">Superior</cps-option>
      <cps-option value="top-start">Superior inicial</cps-option>
      <cps-option value="top-end">Superior final</cps-option>
      <cps-option value="bottom">Inferior</cps-option>
      <cps-option value="bottom-start">Inferior inicial</cps-option>
      <cps-option value="bottom-end">Inferior final</cps-option>
      <cps-option value="right">Direita</cps-option>
      <cps-option value="right-start">Direita inicial</cps-option>
      <cps-option value="right-end">Direita final</cps-option>
      <cps-option value="left">Esquerda</cps-option>
      <cps-option value="left-start">Esquerda inicial</cps-option>
      <cps-option value="left-end">Esquerda final</cps-option>
    </cps-select>

    <cps-select name="arrow-placement" value="anchor">
      <cps-option value="anchor">Seta âncora</cps-option>
      <cps-option value="start">Seta início</cps-option>
      <cps-option value="end">Seta final</cps-option>
      <cps-option value="center">Seta centro</cps-option>
    </cps-select>
  </div>

  <div class="flyout-arrow-options">
    <cps-checkbox name="arrow" checked>Estilo balão</cps-checkbox>
  </div>
</div>

<script>
  const container = document.querySelector('.flyout-arrow');
  const flyout = container.querySelector('cps-flyout');
  const placement = container.querySelector('cps-select[name="placement"]');
  const arrowPlacement = container.querySelector('cps-select[name="arrow-placement"]');
  const arrow = container.querySelector('cps-checkbox[name="arrow"]');

  placement.addEventListener('cps-change', () => (flyout.placement = placement.value));
  arrowPlacement.addEventListener('cps-change', () => (flyout.arrowPlacement = arrowPlacement.value));
  arrow.addEventListener('cps-change', () => (flyout.arrow = arrow.checked));
</script>

<style>
  .flyout-arrow span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-arrow .box {
    width: 100px;
    height: 50px;
  }

  .flyout-arrow-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .flyout-arrow-options cps-select {
    width: 150px;
    height: 30px;
  }

  .flyout-arrow-options + .flyout-arrow-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const css = `
  .flyout-arrow span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-arrow .box {
    width: 100px;
    height: 50px;
  }

  .flyout-arrow-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .flyout-arrow-options cps-select {
    width: 150px;
    height: 30px;
  }

  .flyout-arrow-options + .flyout-arrow-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [arrowPlacement, setArrowPlacement] = useState('anchor');
  const [arrow, setArrow] = useState(true);

  return (
    <>
      <div className="flyout-arrow">
        <CpsFlyout placement={placement} arrow={arrow || null} arrow-placement={arrowPlacement} distance="8" active>
          <span slot="anchor" />
          <div className="box" />
        </CpsFlyout>

        <div className="flyout-arrow-options">
          <CpsSelect name="placement" value={placement} onCpsChange={event => setPlacement(event.target.value)}>
            <CpsOption value="top">Superior</CpsOption>
            <CpsOption value="top-start">Superior inicial</CpsOption>
            <CpsOption value="top-end">Superior final</CpsOption>
            <CpsOption value="bottom">Inferior</CpsOption>
            <CpsOption value="bottom-start">Inferior inicial</CpsOption>
            <CpsOption value="bottom-end">Inferior final</CpsOption>
            <CpsOption value="right">Direita</CpsOption>
            <CpsOption value="right-start">Direita inicial</CpsOption>
            <CpsOption value="right-end">Direita final</CpsOption>
            <CpsOption value="left">Esquerda</CpsOption>
            <CpsOption value="left-start">Esquerda inicial</CpsOption>
            <CpsOption value="left-end">Esquerda final</CpsOption>
          </CpsSelect>

          <select
            name="arrow-placement"
            value={arrowPlacement}
            onCpsChange={event => setArrowPlacement(event.target.value)}
          >
            <CpsOption value="anchor">Seta âncora</CpsOption>
            <CpsOption value="start">Seta início</CpsOption>
            <CpsOption value="end">Seta final</CpsOption>
            <CpsOption value="center">Seta centro</CpsOption>
          </CpsSelect>
        </div>

        <div className="flyout-arrow-options">
          <CpsCheckbox name="arrow" checked={arrow} onCpsChange={event => setArrow(event.target.checked)}>
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

A cor de fundo do _flyout_ pode ser definida através da variável CSS `--background-color`. A cor da borda pode ser definida através da variável CSS `--border-color`. Você também pode usar o seletor de parte CSS `container` para ajustar estilos adicionais, como filtros, sombras e arredondamento de bordas. Observe que, para não afetar o posicionamento dinâmico do _flyout_, a borda é renderizada fora da caixa de conteúdo do elemento, comportando-se como um `outline`.

Caso esteja utilizando o _flyout_ com estilo balão, a seta automaticamente utilizará as mesmas cores de fundo e de borda do corpo do _flyout_. Adicionalmente, o tamanho da seta também pode ser controlado através da variável CSS `--arrow-size`. Se você precisar estilizar a seta de forma diferenciada, ou ainda informar estilos adicionais nela, também pode usar o seletor de parte CSS `arrow` para ajustá-la diretamente, até mesmo alterando seu formato através de `clip-path`.

```html preview no-vue
<div class="flyout-custom">
  <cps-flyout placement="top" arrow arrow-placement="anchor" distance="16" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <div class="flyout-custom-options">
    <cps-select name="placement" value="top">
      <cps-option value="top">Superior</cps-option>
      <cps-option value="top-start">Superior inicial</cps-option>
      <cps-option value="top-end">Superior final</cps-option>
      <cps-option value="bottom">Inferior</cps-option>
      <cps-option value="bottom-start">Inferior inicial</cps-option>
      <cps-option value="bottom-end">Inferior final</cps-option>
      <cps-option value="right">Direita</cps-option>
      <cps-option value="right-start">Direita inicial</cps-option>
      <cps-option value="right-end">Direita final</cps-option>
      <cps-option value="left">Esquerda</cps-option>
      <cps-option value="left-start">Esquerda inicial</cps-option>
      <cps-option value="left-end">Esquerda final</cps-option>
    </cps-select>

    <cps-select name="arrow-placement" value="anchor">
      <cps-option value="anchor">Seta âncora</cps-option>
      <cps-option value="start">Seta início</cps-option>
      <cps-option value="end">Seta final</cps-option>
      <cps-option value="center">Seta centro</cps-option>
    </cps-select>
  </div>

  <div class="flyout-custom-options">
    <cps-checkbox name="arrow" checked>Estilo balão</cps-checkbox>
  </div>
</div>

<script>
  const container = document.querySelector('.flyout-custom');
  const flyout = container.querySelector('cps-flyout');
  const placement = container.querySelector('cps-select[name="placement"]');
  const arrowPlacement = container.querySelector('cps-select[name="arrow-placement"]');
  const arrow = container.querySelector('cps-checkbox[name="arrow"]');

  placement.addEventListener('cps-change', () => (flyout.placement = placement.value));
  arrowPlacement.addEventListener('cps-change', () => (flyout.arrowPlacement = arrowPlacement.value));
  arrow.addEventListener('cps-change', () => (flyout.arrow = arrow.checked));
</script>

<style>
  .flyout-custom cps-flyout {
    --background-color: cyan;
    --border-color: darkcyan;
    --arrow-size: 15px;
  }

  .flyout-custom cps-flyout::part(container) {
    border-radius: 16px;
    filter: drop-shadow(0 4px 6px #2266ff66);
    box-shadow: inset 0 3px 9px white;
  }

  .flyout-custom cps-flyout[data-current-placement='bottom']::part(container) {
    box-shadow: inset 0 -3px 9px white;
  }

  .flyout-custom cps-flyout::part(arrow) {
    clip-path: polygon(25% 15%, 0 0, 100% 0, 75% 15%, 62% 30%, 55% 60%, 50% 100%, 45% 60%, 38% 30%);
  }

  .flyout-custom span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-custom .box {
    width: 100px;
    height: 50px;
  }

  .flyout-custom-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .flyout-custom-options cps-select {
    width: 150px;
    height: 30px;
  }

  .flyout-custom-options + .flyout-custom-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const css = `
  .flyout-custom cps-flyout {
    --background-color: cyan;
    --border-color: darkcyan;
    --arrow-size: 15px;
  }

  .flyout-custom cps-flyout::part(container) {
    border-radius: 16px;
    filter: drop-shadow(0 4px 6px #2266ff66);
    box-shadow: inset 0 3px 9px white;
  }

  .flyout-custom cps-flyout[data-current-placement='bottom']::part(container) {
    box-shadow: inset 0 -3px 9px white;
  }

  .flyout-custom cps-flyout::part(arrow) {
    clip-path: polygon(25% 15%, 0 0, 100% 0, 75% 15%, 62% 30%, 55% 60%, 50% 100%, 45% 60%, 38% 30%);
  }

  .flyout-custom span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-custom .box {
    width: 100px;
    height: 50px;
  }

  .flyout-custom-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .flyout-custom-options cps-select {
    width: 150px;
    height: 30px;
  }

  .flyout-custom-options + .flyout-custom-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [arrowPlacement, setArrowPlacement] = useState('anchor');
  const [arrow, setArrow] = useState(true);

  return (
    <>
      <div className="flyout-arrow">
        <CpsFlyout placement={placement} arrow={arrow || null} arrow-placement={arrowPlacement} distance="16" active>
          <span slot="anchor" />
          <div className="box" />
        </CpsFlyout>

        <div className="flyout-arrow-options">
          <CpsSelect name="placement" value={placement} onCpsChange={event => setPlacement(event.target.value)}>
            <CpsOption value="top">Superior</CpsOption>
            <CpsOption value="top-start">Superior inicial</CpsOption>
            <CpsOption value="top-end">Superior final</CpsOption>
            <CpsOption value="bottom">Inferior</CpsOption>
            <CpsOption value="bottom-start">Inferior inicial</CpsOption>
            <CpsOption value="bottom-end">Inferior final</CpsOption>
            <CpsOption value="right">Direita</CpsOption>
            <CpsOption value="right-start">Direita inicial</CpsOption>
            <CpsOption value="right-end">Direita final</CpsOption>
            <CpsOption value="left">Esquerda</CpsOption>
            <CpsOption value="left-start">Esquerda inicial</CpsOption>
            <CpsOption value="left-end">Esquerda final</CpsOption>
          </CpsSelect>

          <select
            name="arrow-placement"
            value={arrowPlacement}
            onCpsChange={event => setArrowPlacement(event.target.value)}
          >
            <CpsOption value="anchor">Seta âncora</CpsOption>
            <CpsOption value="start">Seta início</CpsOption>
            <CpsOption value="end">Seta final</CpsOption>
            <CpsOption value="center">Seta centro</CpsOption>
          </CpsSelect>
        </div>

        <div className="flyout-arrow-options">
          <CpsCheckbox name="arrow" checked={arrow} onCpsChange={event => setArrow(event.target.checked)}>
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

Use o atributo `sync` para fazer com que o _flyout_ tenha a mesma largura ou altura que o elemento âncora. Isso é útil para controles que precisam garantir que o elemento flutuante subjacente acompanhe as medidas da âncora.

```html preview no-vue
<div class="flyout-sync">
  <cps-flyout placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </cps-flyout>

  <br />
  <cps-select value="width">
    <cps-option value="width">Sincronizar largura</cps-option>
    <cps-option value="height">Sincronizar altura</cps-option>
    <cps-option value="both">Sincronizar ambos</cps-option>
    <cps-option value="">Desativar sincronia</cps-option>
  </cps-select>
</div>

<style>
  .flyout-sync span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-sync .box {
    width: 100%;
    min-width: 50px;
    height: 100%;
    min-height: 50px;
  }

  .flyout-sync cps-select {
    width: 250px;
    height: 30px;
  }
</style>

<script>
  const container = document.querySelector('.flyout-sync');
  const flyout = container.querySelector('cps-flyout');
  const fixed = container.querySelector('cps-checkbox');
  const sync = container.querySelector('cps-select');

  sync.addEventListener('cps-change', () => (flyout.sync = sync.value));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsFlyout } from '@cps-elements/web/react';
import { CpsOption } from '@cps-elements/web/react/option';
import { CpsSelect } from '@cps-elements/web/react/select';

const css = `
  .flyout-sync span[slot='anchor'] {
    display: inline-block;
    margin: 50px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-sync .box {
    width: 100%;
    min-width: 50px;
    height: 100%;
    min-height: 50px;
  }

  .flyout-sync cps-select {
    width: 250px;
    height: 30px;
  }
`;

const App = () => {
  const [sync, setSync] = useState('width');

  return (
    <>
      <div class="flyout-sync">
        <CpsFlyout placement="top" sync={sync} active>
          <span slot="anchor" />
          <div class="box" />
        </CpsFlyout>

        <br />
        <CpsSelect value={sync} onCpsChange={event => setSync(event.target.value)}>
          <CpsOption value="width">Sincronizar largura</CpsOption>
          <CpsOption value="height">Sincronizar altura</CpsOption>
          <CpsOption value="both">Sincronizar ambos</CpsOption>
          <CpsOption value="">Desativar sincronia</CpsOption>
        </CpsSelect>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Estratégia de posicionamento

Por padrão, o _flyout_ é posicionado usando uma estratégia de posicionamento absoluto. No entanto, se sua âncora for fixa ou existir dentro de um contêiner que tenha `overflow: auto|hidden`, o _flyout_ corre o risco de ser cortado. Para contornar isso, você pode usar uma estratégia de posicionamento fixo definindo o atributo `strategy` como `fixed`.

O posicionamento fixo reduz changes de "pulos" quando a âncora é fixa e permite que o _flyout_ "quebre" os contêineres que cortam, transpassando todos como um elemento realmente flutuante. Ao usar essa estratégia, é importante observar que o conteúdo será posicionado _relativo ao seu bloco de conteúdo_, que geralmente é a janela de visualização, a menos que um ancestral use `transform`, `perspective` ou `filter`. [Consulte esta página](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) para obter mais detalhes.

Neste exemplo, você pode ver como o _flyout_ quebra os limites contêiner (mesmo este possuindo `overflow`) por usar a estratégia de posicionamento fixo. Embora este comportamento parece ser naturalmente o mais cômodo para o desenvolvedor, a estratégia de posicionamento fixo tende a ser menos performática que a absoluta, portanto, evite usá-la desnecessariamente.

Alterne a estratégia de posicionamento e role o contêiner para ver a diferença.

```html preview no-vue
<div class="flyout-strategy">
  <div class="overflow">
    <cps-flyout placement="top" strategy="fixed" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-flyout>
  </div>

  <cps-checkbox checked>Posicionamento fixo</cps-checkbox>
</div>

<style>
  .flyout-strategy .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .flyout-strategy span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-strategy .box {
    width: 100px;
    height: 50px;
  }

  .flyout-strategy cps-checkbox {
    margin-top: 1rem;
  }
</style>

<script>
  const container = document.querySelector('.flyout-strategy');
  const flyout = container.querySelector('cps-flyout');
  const fixed = container.querySelector('cps-checkbox');

  fixed.addEventListener('cps-change', () => (flyout.strategy = fixed.checked ? 'fixed' : 'absolute'));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-strategy .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .flyout-strategy span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-strategy .box {
    width: 100px;
    height: 50px;
  }

  .flyout-strategy cps-checkbox {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <>
      <div className="flyout-strategy">
        <div className="overflow">
          <CpsFlyout placement="top" strategy={fixed ? 'fixed' : 'absolute'} active>
            <span slot="anchor" />
            <div className="box" />
          </CpsFlyout>
        </div>

        <CpsCheckbox checked={fixed} onCpsChange={event => setFixed(event.target.checked)}>
          Posicionamento fixo
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Girar automaticamente

Use o atributo `flip` para permitir que o _flyout_ gire automaticamente quando não houver espaço suficiente em seu posicionamento preferido. Por padrão, o _flyout_ inverte para se posicionar no lado oposto da âncora, mas você pode configurar posicionamentos alternativos preferidos usando `flip-fallback-placement` e `flip-fallback-strategy`. Opções adicionais estão disponíveis para controlar o limite e o preenchimento do comportamento do giro.

Role o contêiner para ver como o _flyout_ gira para evitar seu corte.

```html preview no-vue
<div class="flyout-flip">
  <div class="overflow">
    <cps-flyout placement="top" flip active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-flyout>
  </div>

  <br />
  <cps-checkbox checked>Permite virar</cps-checkbox>
</div>

<style>
  .flyout-flip .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .flyout-flip span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-flip .box {
    width: 100px;
    height: 50px;
  }
</style>

<script>
  const container = document.querySelector('.flyout-flip');
  const flyout = container.querySelector('cps-flyout');
  const flip = container.querySelector('cps-checkbox');

  flip.addEventListener('cps-change', () => (flyout.flip = flip.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-flip .overflow {
    position: relative;
    height: 240px;
    overflow: auto;
  }

  .flyout-flip span[slot='anchor'] {
    display: inline-block;
    margin: 80px 50px 150px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-flip .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <div className="flyout-flip">
        <div className="overflow">
          <CpsFlyout placement="top" flip={flip} active>
            <span slot="anchor" />
            <div className="box" />
          </CpsFlyout>
        </div>

        <br />
        <CpsCheckbox checked={flip} onCpsChange={event => setFlip(event.target.checked)}>
          Permite virar
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Alternativas de giro

Quando usando o atributo `flip`, você pode personalizar o posicionamento do _flyout_ quando o posicionamento preferido não tiver espaço para acomodá-lo. Para isso, use `flip-fallback-placements` e `flip-fallback-strategy`.

Se o posicionamento preferido não tiver espaço, o primeiro posicionamento adequado encontrado em `flip-fallback-placement` será usado. O valor deste atributo deve ser uma string que inclua qualquer número de posicionamentos separados por um espaço, por exemplo, `"right bottom"`.

Se nenhuma alternativa de posicionamento funcionar, o posicionamento final será determinado por `flip-fallback-strategy`. Este valor pode ser `initial` (padrão), onde o posicionamento reverte para a posição em `placement`, ou `best-fit`, onde o posicionamento é escolhido com base no espaço disponível.

Role o contêiner para ver como o _flyout_ vai mudando para seus posicionamentos alternativos, para evitar seu corte.

```html preview no-vue
<div class="flyout-flip-fallbacks">
  <div class="overflow">
    <cps-flyout placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-flyout>
  </div>
</div>

<style>
  .flyout-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .flyout-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    margin: 80px 250px 150px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 250px;
  }

  .flyout-flip-fallbacks .box {
    width: 100px;
    height: 50px;
  }
</style>
```

```jsx react
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .flyout-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    margin: 80px 250px 150px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 250px;
  }

  .flyout-flip-fallbacks .box {
    width: 100px;
    height: 50px;
  }
`;

const App = () => {
  return (
    <>
      <div className="flyout-flip-fallbacks">
        <div className="overflow">
          <CpsFlyout
            placement="top"
            flip
            flip-fallback-placements="right bottom"
            flip-fallback-strategy="initial"
            active
          >
            <span slot="anchor" />
            <div className="box" />
          </CpsFlyout>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Reposicionamento no eixo

Quando um _flyout_ é mais longo que sua âncora, ele corre o risco de ser cortado por um contêiner externo (ou mesmo pelo canto da página, se for o caso). Para evitar isto, use o atributo `shift` para automaticamente reposicionar o _flyout_ ao longo de seu eixo, e de volta a uma posição que garanta sua plena visibilidade. Você pode personalizar o comportamento de deslocamento usando `shiftBoundary` e `shift-padding`.

Alterne a caixa de seleção para ver a diferença.

```html preview no-vue
<div class="flyout-shift">
  <div class="overflow">
    <cps-flyout placement="top" shift shift-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-flyout>
  </div>

  <cps-checkbox checked>Reposicionamento no eixo</cps-checkbox>
</div>

<style>
  .flyout-shift .overflow {
    position: relative;
    overflow: auto;
  }

  .flyout-shift span[slot='anchor'] {
    display: inline-block;
    margin: 60px 0 0 10px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-shift .box {
    width: 300px;
    height: 50px;
  }

  .flyout-shift cps-checkbox {
    margin-top: 1rem;
  }
</style>

<script>
  const container = document.querySelector('.flyout-shift');
  const flyout = container.querySelector('cps-flyout');
  const shift = container.querySelector('cps-checkbox');

  shift.addEventListener('cps-change', () => (flyout.shift = shift.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-shift .overflow {
    position: relative;
    overflow: auto;
  }

  .flyout-shift span[slot='anchor'] {
    display: inline-block;
    margin: 60px 0 0 10px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-shift .box {
    width: 300px;
    height: 50px;
  }

  .flyout-shift cps-checkbox {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [shift, setShift] = useState(true);

  return (
    <>
      <div className="flyout-shift">
        <div className="overflow">
          <CpsFlyout placement="top" shift={shift} shift-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </CpsFlyout>
        </div>

        <CpsCheckbox checked={shift} onCpsChange={event => setShift(event.target.checked)}>
          Reposicionamento no eixo
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Auto-dimensionamento

Use o atributo `auto-size` para dizer ao _flyout_ para se redimensionar quando necessário, para evitar que ele seja cortado. Os valores possíveis são `horizontal`, `vertical` e `both`. Você pode usar `autoSizeBoundary` e `auto-size-padding` para personalizar o comportamento desta opção. O auto-dimensionamento funciona bem com `flip`, mas se você estiver usando `auto-size-padding` certifique-se de que `flip-padding` seja o mesmo valor.

Ao usar `auto-size`, um ou ambos `--auto-size-available-width` e `--auto-size-available-height` serão aplicados. Estes valores determinam o espaço disponível que o _flyout_ tem antes que o corte ocorra. Como eles se sobrepõem, você pode usá-los para definir um `max-width`/`max-height` no conteúdo do seu _flyout_, e assim controlar seu _overflow_.

Role o contêiner para ver o _flyout_ se auto-dimensionar conforme o espaço disponível muda.

```html preview no-vue
<div class="flyout-auto-size">
  <div class="overflow">
    <cps-flyout placement="top" auto-size="both" auto-size-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </cps-flyout>
  </div>

  <br />
  <cps-checkbox checked>Auto-dimensionamento</cps-checkbox>
</div>

<style>
  .flyout-auto-size .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .flyout-auto-size span[slot='anchor'] {
    display: inline-block;
    margin: 200px 50px 120px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-auto-size .box {
    border-radius: var(--cps-border-radius-full);
    width: 100px;
    max-width: var(--auto-size-available-width);
    height: 150px;
    max-height: var(--auto-size-available-height);
  }
</style>

<script>
  const container = document.querySelector('.flyout-auto-size');
  const flyout = container.querySelector('cps-flyout');
  const autoSize = container.querySelector('cps-checkbox');

  autoSize.addEventListener('cps-change', () => (flyout.autoSize = autoSize.checked ? 'both' : ''));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';
import { CpsFlyout } from '@cps-elements/web/react/flyout';

const css = `
  .flyout-auto-size .overflow {
    position: relative;
    height: 300px;
    overflow: auto;
  }

  .flyout-auto-size span[slot='anchor'] {
    display: inline-block;
    margin: 200px 50px 120px;
    border: dashed 2px var(--cps-color-stroke-card-secondary);
    width: 150px;
    height: 150px;
  }

  .flyout-auto-size .box {
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
      <div className="flyout-auto-size">
        <div className="overflow">
          <CpsFlyout placement="top" auto-size={autoSize ? 'both' || null} auto-size-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </CpsFlyout>
        </div>

        <br />
        <CpsCheckbox checked={autoSize} onCpsChange={event => setAutoSize(event.target.checked)}>
          Auto-dimensionamento
        </CpsCheckbox>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:cps-flyout]
