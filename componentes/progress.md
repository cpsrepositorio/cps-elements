# Progress

[component-header:cps-progress]

```html preview
<cps-progress value="50"></cps-progress>
```

```jsx react
import { CpsProgress } from '@cps-elements/web/react/progress';

const App = () => {
  return (
    <CpsProgress value={50} />
  );
};
```

## Exemplos

### Valor

Use o atributo `value` para determinar o percentual de progressão da barra de progresso. O valor deve ser um número inteiro entre `0` e `100`, podendo ser dinamicamente atribuído conforme a necessidade.

```html preview no-vue
<div class="progress-example-value">
  <cps-progress value="0"></cps-progress>
  <br />
  <cps-button>Iniciar</cps-button>
  &nbsp;
  <cps-label variant="secondary">Progresso: 0%</cps-label>
</div>

<script>
  const container = document.querySelector('.progress-example-value');
  const progress = container.querySelector('cps-progress');
  const button = container.querySelector('cps-button');
  const label = container.querySelector('cps-label');

  let interval = null;

  button.addEventListener('click', () => {
    if (button.textContent === 'Pausar') {
      clearInterval(interval);
      progress.status = 'pause';
      button.textContent = 'Iniciar';
      return;
    }

    if (button.textContent === 'Limpar') {
      progress.value = 0;
      label.textContent = 'Progresso: 0%';
      button.textContent = 'Iniciar';
      return;
    }

    progress.status = 'default';
    button.textContent = 'Pausar';

    interval = setInterval(() => {
      label.textContent = `Progresso: ${progress.value}%`;
      if (progress.value < 100) {
        progress.value++;
      } else {
        clearInterval(interval);
        progress.status = 'success';
        button.textContent = 'Limpar';
      }
    }, 25);
  });
</script>
```

```jsx react
import { useEffect, useMemo, useRef, useState } from 'react';
import { CpsProgress } from '@cps-elements/web/react/progress';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const startRunning = () => {
    intervalRef.current = setInterval(() => {
      setValue(prev => {
        if (prev < 100) return prev + 1;
        stopRunning();
        return prev;
      });
    }, 25);
    setRunning(true);
  };

  const stopRunning = () => {
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const onClick = () => {
    if (value === 100) {
      setValue(0);
      return;
    }

    if (running) {
      stopRunning();
      return;
    }

    startRunning();
  };

  const status = useMemo(() => {
    if (value === 100) return 'success';
    if (!running && value > 0) return 'pause';
    return 'default';
  }, [value, running]);

  const buttonLabel = useMemo(() => {
    if (value === 100) return 'Limpar';
    if (running) return 'Pausar';
    return 'Iniciar';
  }, [value, running]);

  useEffect(() => stopRunning, []);

  return (
    <>
      <CpsProgress value={value} status={status} />
      <br />
      <CpsButton onClick={onClick}>{buttonLabel}</CpsButton>
      &nbsp;
      <CpsLabel variant="secondary">Progresso: {value}%</CpsLabel>
    </>
  );
};
```

```html vue
<template>
  <div>
    <cps-progress :value="state.value" :status="status"></cps-progress>
    <br />
    <cps-button @click="onClick">{{ buttonLabel }}</cps-button>
    &nbsp;
    <cps-label variant="secondary">Progresso: {{ state.value }}%</cps-label>
  </div>
</template>

<script setup>
import { computed, reactive, onUnmounted } from 'vue';
import { CpsProgress } from '@cps-elements/web/vue/progress';
import { CpsButton } from '@cps-elements/web/vue/button';
import { CpsLabel } from '@cps-elements/web/vue/label';

const state = reactive({
  value: 0,
  running: false,
  intervalId: null,
});

const startRunning = () => {
  state.running = true;
  state.intervalId = setInterval(() => {
    if (state.value < 100) state.value++;
    else stopRunning();
  }, 25);
};

const stopRunning = () => {
  state.intervalId && clearInterval(state.intervalId);
  state.intervalId = null;
  state.running = false;
};

const onClick = () => {
  if (state.value === 100) {
    state.value = 0;
    return;
  }

  if (state.running) {
    stopRunning();
    return;
  }

  startRunning();
};

const status = computed(() => {
  if (state.value === 100) return 'success';
  if (!state.running && state.value > 0) return 'pause';
  return 'default';
});

const buttonLabel = computed(() => {
  if (state.value === 100) return 'Limpar';
  if (state.running) return 'Pausar';
  return 'Iniciar';
});

onUnmounted(stopRunning);
</script>
```

?> Observe que não está no escopo da barra de progresso controlar sua própria progressão de maneira temporal. O exemplo acima utilizou um temporizador JavaScript para fins de demonstração, mas você pode precisar escrever seu código de atualização do progresso usando outros critérios, por exemplo, o percentual de progressão de _upload_ de um arquivo ou a estimativa de tempo de execução de uma tarefa de processamento longo no servidor. Cabe ao desenvolvedor controlar o progresso conforme suas necessidades.

### Estados visuais

Use o atributo `state` para o estado de progresso, para definir uma coloração contextual para a barra de progresso de acordo com sua situação no momento.

```html preview
<cps-label variant="secondary">Padrão:</cps-label>
<cps-progress value="50" status="default"></cps-progress>

<br />

<cps-label variant="secondary">Pausa:</cps-label>
<cps-progress value="50" status="pause"></cps-progress>

<br />

<cps-label variant="secondary">Sucesso:</cps-label>
<cps-progress value="50" status="success"></cps-progress>

<br />

<cps-label variant="secondary">Erro:</cps-label>
<cps-progress value="50" status="error"></cps-progress>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';
import { CpsProgress } from '@cps-elements/web/react/progress';

const App = () => {
  return (
    <>
      <CpsLabel variant="secondary">Padrão:</CpsLabel>
      <CpsProgress value={50} status="default" />

      <br />

      <CpsLabel variant="secondary">Pausa:</CpsLabel>
      <CpsProgress value={50} status="pause" />

      <br />

      <CpsLabel variant="secondary">Sucesso:</CpsLabel>
      <CpsProgress value={50} status="success" />

      <br />

      <CpsLabel variant="secondary">Erro:</CpsLabel>
      <CpsProgress value={50} status="error" />
    </>
  );
};
```

?> Para fins de acessibilidade, considere que alternância de cores por si só não é o suficiente. Considere que a coloração contextual é um mero complemento visual e, como tal, não deve ser usado como algo essencial para a compreensão do usuário sobre sua interface.

### Estado indeterminado

Quando não há um `value` definido, a barra de progresso se apresenta em estado indeterminado. Use para demonstrar que uma operação está pendente, mas seu progresso exato não pode ser determinado. Neste estado, uma animação intermitente é usada.

```html preview
<!-- Sem atributo `value`, automaticamente em estado indeterminado. -->
<cps-progress></cps-progress>
```

```jsx react
import { CpsProgress } from '@cps-elements/web/react/progress';

const App = () => {
  return (
    // Sem atributo `value`, automaticamente em estado indeterminado.
    <CpsProgress />
  );
};
```

Não existe um atributo `indeterminate` a ser definido diretamente no HTML, visto que omitir o `value` é suficiente. Para programação imperita, é possível setar esta propriedade manualmente através do código JavaScript, o que simplesmente remove o atributo `value` por baixo dos panos.

```html preview no-vue
<div class="progress-example-indeterminate-imperative">
  <cps-progress value="0"></cps-progress>
  <br />
  <cps-button>Tornar indeterminado</cps-button>
  &nbsp;
  <cps-label variant="secondary">Progresso: 0%</cps-label>
</div>

<script>
  const container = document.querySelector('.progress-example-indeterminate-imperative');
  const progress = container.querySelector('cps-progress');
  const button = container.querySelector('cps-button');
  const label = container.querySelector('cps-label');

  let interval = null;

  button.addEventListener('click', () => {
    if (button.textContent === 'Tornar indeterminado') {
      progress.indeterminate = true; // Definição programática do estado indeterminado.

      clearInterval(interval);
      label.textContent = 'Progresso: Indeterminado';
      button.textContent = 'Iniciar progresso';
      return;
    }

    progress.indeterminate = false; // Remoção programática do estado indeterminado.
    label.textContent = 'Progresso: 0%';
    button.textContent = 'Tornar indeterminado';

    setTimeout(() => {
      interval = setInterval(() => {
        label.textContent = `Progresso: ${progress.value}%`;
        if (progress.value < 100) progress.value++;
        else clearInterval(interval);
      }, 50);
    }, 150);
  });
</script>
```

```jsx react
import { useState, useRef, useEffect, useMemo } from 'react';
import { CpsProgress } from '@cps-elements/web/react/progress';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [indeterminate, setIndeterminate] = useState(false);
  const intervalRef = useRef(null);

  const stopRunning = () => {
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const onClick = () => {
    if (!indeterminate) {
      setIndeterminate(true);
      stopRunning();
      return;
    }

    setIndeterminate(false);
    setProgress(0);
    stopRunning();

    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev < 100) return prev + 1;
          stopRunning();
          return prev;
        });
      }, 50);
    }, 150);
  };

  useEffect(() => stopRunning, []);

  const buttonLabel = useMemo(() => {
    return indeterminate ? 'Iniciar progresso' : 'Tornar indeterminado';
  }, [indeterminate]);

  const labelText = useMemo(() => {
    return indeterminate ? 'Progresso: Indeterminado' : `Progresso: ${progress}%`;
  }, [indeterminate, progress]);

  return (
    <>
      <CpsProgress value={progress} indeterminate={indeterminate} />
      <br />
      <CpsButton onClick={onClick}>{buttonLabel}</CpsButton>
      &nbsp;
      <CpsLabel variant="secondary">{labelText}</CpsLabel>
    </>
  );
};
```

```html vue
<template>
  <div>
    <cps-progress :value="state.progress" :indeterminate="state.indeterminate" />
    <br />
    <cps-button @click="onClick">{{ buttonLabel }}</cps-button>
    &nbsp;
    <cps-label variant="secondary">{{ labelText }}</cps-label>
  </div>
</template>

<script setup>
import { computed, reactive, onUnmounted } from 'vue';
import { CpsButton } from '@cps-elements/web/vue/button';
import { CpsLabel } from '@cps-elements/web/vue/label';
import { CpsProgress } from '@cps-elements/web/vue/progress';

const state = reactive({
  progress: 0,
  indeterminate: false,
  intervalId: null,
});

const stopRunning = () => {
  state.intervalId && clearInterval(state.intervalId);
  state.intervalId = null;
};

const onClick = () => {
  if (state.indeterminate) {
    state.indeterminate = false;
    state.progress = 0;
    stopRunning();

    setTimeout(() => {
      state.intervalId = setInterval(() => {
        if (state.progress < 100) {
          state.progress++;
        } else {
          stopRunning();
        }
      }, 50);
    }, 150);
  } else {
    state.indeterminate = true;
    stopRunning();
  }
};

const buttonLabel = computed(() =>
  state.indeterminate ? 'Iniciar progresso' : 'Tornar indeterminado'
);

const labelText = computed(() =>
  state.indeterminate ? 'Progresso: Indeterminado' : `Progresso: ${state.progress}%`
);

onUnmounted(stopRunning);
</script>
```

### Acessibilidade

Este componente possui configurações mínimas de acessibilidade por padrão e será narrado por leitores de tela como tendo um rótulo _"Progresso"_. Para modificar este rótulo de acessibilidade, use o atributo `label`, o qual não possui renderização visual.

Entretanto, como uma barra de progresso comumente representa que uma determinada área da aplicação está temporariamente bloqueada, a acessibilidade completa depende de um trabalho manual adicional do desenvolvedor. Especifique no seu HTML qual área está ocupada e associe qual barra de progresso se refere a esta tarefa em progresso.

```html preview
<div aria-busy="true" aria-describedby="example-bar">
  <cps-label tag="p">Para fins de acessibilidade, demarcamos no HTML deste exemplo que o conteúdo desta região está ocupado aguardando o progresso do elemento cujo <code>id</code> é <code>example-bar</code>, o qual poderia estar sendo apresentado em qualquer outro lugar da página.</cps-label>
</div>

<cps-progress id="example-bar" label="Calculando alguma coisa..."></cps-progress>
```

```jsx react
import { CpsLabel } from '@cps-elements/web/react/label';
import { CpsProgress } from '@cps-elements/web/react/progress';

const App = () => {
  return (
    <>
      <div aria-busy="true" aria-describedby="example-bar">
        <CpsLabel tag="p">
          Para fins de acessibilidade, demarcamos no HTML deste exemplo que o conteúdo desta região está ocupado aguardando o progresso do elemento cujo <code>id</code> é <code>example-bar</code>, o qual poderia estar sendo apresentado em qualquer outro lugar da página.
        </CpsLabel>
      </div>

      <CpsProgress id="example-bar" label="Calculando alguma coisa..." />
    </>
  );
};
```

### Estilizando a dimensão vertical

Use a propriedade CSS `--indicator-height` para ajustar a dimensão vertical do indicador de progresso, e a propriedade CSS `--track-height` para ajustar a dimensão vertical da trilha da barra de progresso.

```html preview
<cps-progress style="--indicator-height: 1rem; --track-height: 1rem"></cps-progress>
```

```jsx react
import { CpsProgress } from '@cps-elements/web/react/progress';

const App = () => {
  return (
    <CpsProgress style={{ '--indicator-height': '1rem', '--track-height': '1rem' }} />
  );
};
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [definições de _progress indicator_](https://cpsrepositorio.github.io/cps-design-system/documentacao/progress-indicator.html), evite personalizar `--indicator-height` ou `--track-height`, uma vez que os valores padrão já garantem aderência. Estas opções estão disponíveis para situações extremas ou quando não se requer tal aderência.

### Estilizando totalmente

Através de uma mistura de técnicas com partes CSS e propriedades CSS com valores personalizados, é possível sobrescrever fundamentalmente toda a aparência de uma barra de progresso. Esta é uma forma simples de adicionar novas variações visuais.

```html preview
<cps-progress class="fancy"></cps-progress>

<style>
  cps-progress.fancy {
    /* Sobrescrevendo variáveis CSS para este visual específico */
    --indicator-height: 1rem;
    --track-height: 1rem;
    --indicator-color: #ff1493;
    --track-color: color-mix(in srgb, #ff7ac1 30%, var(--cps-color-stroke-primary) 70%);
  }

  cps-progress.fancy::part(base) {
    /* Definindo atributos CSS conforme desejado em cada parte do componente */
    border-width: 1px;
    border-style: solid;
    border-top-color: #ff7ac1;
    border-right-color: #ad005c;
    border-bottom-color: #ad005c;
    border-left-color: #ff7ac1;
    border-radius: 0;
  }

  cps-progress.fancy::part(indicator),
  cps-progress.fancy::part(track) {
    border-radius: 0;
  }
</style>
```

```jsx react
import { CpsProgress } from '@cps-elements/web/react/progress';

const css = `
  cps-progress.fancy {
    /* Sobrescrevendo variáveis CSS para este visual específico */
    --indicator-height: 1rem;
    --track-height: 1rem;
    --indicator-color: #ff1493;
    --track-color: color-mix(in srgb, #ff7ac1 30%, var(--cps-color-stroke-primary) 70%);
  }

  cps-progress.fancy::part(base) {
    /* Definindo atributos CSS conforme desejado em cada parte do componente */
    border-width: 1px;
    border-style: solid;
    border-top-color: #ff7ac1;
    border-right-color: #ad005c;
    border-bottom-color: #ad005c;
    border-left-color: #ff7ac1;
    border-radius: 0;
  }

  cps-progress.fancy::part(indicator),
  cps-progress.fancy::part(track) {
    border-radius: 0;
  }
`;

const App = () => {
  return (
    <>
      <CpsProgress className="fancy" />

      <style>{css}</style>
    </>
  );
};
```

!> Embora estas técnicas de estilização avançada sejam poderosas e flexíveis, estão disponíveis para casos extremos ou para necessidades de adaptação avançada para projetos externos. Se você estiver utilizando CPS Elements em um projeto aderente CPS Design System, não personalize a aparência dos componentes desta forma.

[component-metadata:cps-progress]
