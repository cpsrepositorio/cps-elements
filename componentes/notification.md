# Notification

[component-header:cps-notification]

```html preview
<cps-notification open>
  <cps-icon slot="icon" name="alert"></cps-icon>
  Essa é uma notificação padrão. Você pode ajustar seu conteúdo e até mesmo seu ícone.
</cps-notification>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsNotification } from '@cps-elements/web/react/notification';

const App = () => (
  <CpsNotification open>
    <CpsIcon slot="icon" name="alert" />
    Essa é uma notificação padrão. Você pode ajustar seu conteúdo e até mesmo seu ícone.
  </CpsNotification>
);
```

?> Notificações não serão visíveis se o atributo `open` não estiver presente.

## Exemplos

### Variantes

Use o atributo `variant` para definir a variação visual da notificação.

```html preview
<cps-notification variant="neutral" open>
  <strong>Suas configurações foram atualizadas!</strong><br />
  As configurações serão aplicadas no próximo acesso.
</cps-notification>

<br />

<cps-notification variant="informative" open>
  <strong>Isso é super informativo!</strong><br />
  Você pode ver pela beleza desta notificação.
</cps-notification>

<br />

<cps-notification variant="warning" open>
  <strong>Sua sessão foi encerrada!</strong><br />
  Por favor, informe suas credenciais novamente.
</cps-notification>

<br />

<cps-notification variant="critical" open>
  <strong>Sua conta foi excluída...</strong><br />
  Estamos muito tristes em te ver partir!
</cps-notification>

<br />

<cps-notification variant="success" open>
  <strong>As mudanças foram salvas!</strong><br />
  Agora você já pode sair do aplicativo com segurança.
</cps-notification>
```

```jsx react
import { CpsNotification } from '@cps-elements/web/react/notification';

const App = () => (
  <>
    <CpsNotification variant="neutral" open>
      <strong>Suas configurações foram atualizadas!</strong>
      <br />
      As configurações serão aplicadas no próximo acesso.
    </CpsNotification>

    <br />

    <CpsNotification variant="informative" open>
      <strong>Isso é super informativo!</strong>
      <br />
      Você pode ver pela beleza desta notificação.
    </CpsNotification>

    <br />

    <CpsNotification variant="warning" open>
      <strong>Sua sessão foi encerrada!</strong>
      <br />
      Por favor, informe suas credenciais novamente.
    </CpsNotification>

    <br />

    <CpsNotification variant="critical" open>
      <strong>Sua conta foi excluída...</strong>
      <br />
      Estamos muito tristes em te ver partir!
    </CpsNotification>

    <br />

    <CpsNotification variant="success" open>
      <strong>As mudanças foram salvas!</strong>
      <br />
      Agora você já pode sair do aplicativo com segurança.
    </CpsNotification>
  </>
);
```

### Ícone automático

Use o atributo `icon` para a notificação apresente automaticamente ícone contextual de acordo com sua variação.

```html preview
<cps-notification variant="neutral" icon open>
  <strong>Suas configurações foram atualizadas!</strong><br />
  As configurações serão aplicadas no próximo acesso.
</cps-notification>

<br />

<cps-notification variant="informative" icon open>
  <strong>Isso é super informativo!</strong><br />
  Você pode ver pela beleza desta notificação.
</cps-notification>

<br />

<cps-notification variant="warning" icon open>
  <strong>Sua sessão foi encerrada!</strong><br />
  Por favor, informe suas credenciais novamente.
</cps-notification>

<br />

<cps-notification variant="critical" icon open>
  <strong>Sua conta foi excluída...</strong><br />
  Estamos muito tristes em te ver partir!
</cps-notification>

<br />

<cps-notification variant="success" icon open>
  <strong>As mudanças foram salvas!</strong><br />
  Agora você já pode sair do aplicativo com segurança.
</cps-notification>
```

```jsx react
import { CpsNotification } from '@cps-elements/web/react/notification';

const App = () => (
  <>
    <CpsNotification variant="neutral" icon open>
      <strong>Suas configurações foram atualizadas!</strong>
      <br />
      As configurações serão aplicadas no próximo acesso.
    </CpsNotification>

    <br />

    <CpsNotification variant="informative" icon open>
      <strong>Isso é super informativo!</strong>
      <br />
      Você pode ver pela beleza desta notificação.
    </CpsNotification>

    <br />

    <CpsNotification variant="warning" icon open>
      <strong>Sua sessão foi encerrada!</strong>
      <br />
      Por favor, informe suas credenciais novamente.
    </CpsNotification>

    <br />

    <CpsNotification variant="critical" icon open>
      <strong>Sua conta foi excluída...</strong>
      <br />
      Estamos muito tristes em te ver partir!
    </CpsNotification>

    <br />

    <CpsNotification variant="success" icon open>
      <strong>As mudanças foram salvas!</strong>
      <br />
      Agora você já pode sair do aplicativo com segurança.
    </CpsNotification>
  </>
);
```

### Ícone personalizado

Use o _slot_ `icon` informando um `<cps-icon>` como único elemento filho.

```html preview
<cps-notification variant="informative" open>
  <cps-icon slot="icon" name="settings"></cps-icon>
  <strong>Suas configurações foram atualizadas!</strong><br />
  As configurações serão aplicadas no próximo acesso.
</cps-notification>
```

```jsx react
import { CpsIcon } from '@cps-elements/web/react/icon';
import { CpsNotification } from '@cps-elements/web/react/notification';

const App = () => (
  <CpsNotification variant="informative" open>
    <CpsIcon slot="icon" name="settings" />
    <strong>Suas configurações foram atualizadas!</strong>
    <br />
    As configurações serão aplicadas no próximo acesso.
  </CpsNotification>
);
```

?> O atributo `icon` tem precedência sobre o _slot_ `icon`. Não informe o atributo caso você queira personalizar o ícone, caso contrário o ícone automático padrão será exibido de acordo com a `variant` em uso.

### Sem ícone

Ícones são opcionais. Omita o atributo e o _slot_ `icon` se não quiser exibir nem o ícone automático e nem um ícone personalizado.

```html preview
<cps-notification variant="informative" open>Nada de mais aqui, só uma simples notificação textual.</cps-notification>
```

```jsx react
import { CpsNotification } from '@cps-elements/web/react/notification';

const App = () => (
  <CpsNotification variant="informative" open>
    Nada de mais aqui, só uma simples notificação textual.
  </CpsNotification>
);
```

### Fechável

Use o atributo `closable` para exibir um botão de fechar que oculta a notificação quando clicado.

```html preview no-vue
<cps-notification variant="informative" open icon closable class="notification-closable">
  Não deixe de me fechar quando tiver vontade, prometo que volto depois!
</cps-notification>

<script>
  const notification = document.querySelector('.notification-closable');
  notification.addEventListener('cps-after-hide', () => {
    setTimeout(() => (notification.open = true), 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { CpsNotification } from '@cps-elements/web/react/notification';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <CpsNotification open={open} icon closable onCpsAfterHide={handleHide}>
      Não deixe de me fechar quando tiver vontade, prometo que volto depois!
    </CpsNotification>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsNotification } from '@cps-elements/web/components/notification';

  const isOpen = ref(true);

  const onAfterHide = () => {
    isOpen.value = false;
    setTimeout(() => (isOpen.value = true), 2000);
  };
</script>

<template>
  <cps-notification variant="informative" :open="isOpen" icon closable @cps-after-hide="onAfterHide">
    Não deixe de me fechar quando tiver vontade, prometo que volto depois!
  </cps-notification>
</template>
```

### Duração

Use o atributo `duration` para ocultar automaticamente a notificação após um período de tempo. Isso é útil para notificações que não requerem total atenção e confirmação por parte do usuário.

```html preview no-vue
<div class="notification-duration">
  <cps-button>Mostrar notificação</cps-button>

  <cps-notification variant="informative" duration="5000" icon closable>
    Fecharei automaticamente após três segundos, a menos que você interaja comigo antes disso.
  </cps-notification>
</div>

<script>
  const container = document.querySelector('.notification-duration');
  const button = container.querySelector('cps-button');
  const notification = container.querySelector('cps-notification');

  button.addEventListener('click', () => notification.show());
</script>

<style>
  .notification-duration cps-notification {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsNotification } from '@cps-elements/web/react/notification';

const css = `
  .notification-duration cps-notification {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="notification-duration">
        <CpsButton onClick={() => setOpen(true)}>Mostrar notificação</CpsButton>

        <CpsNotification
          variant="informative"
          duration="5000"
          open={open}
          icon
          closable
          onCpsAfterHide={() => setOpen(false)}
        >
          Fecharei automaticamente após três segundos, a menos que você interaja comigo antes disso.
        </CpsNotification>
      </div>

      <style>{css}</style>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsNotification } from '@cps-elements/web/components/notification';

  const isOpen = ref(true);

  const onClick = () => {
    isOpen.value = true;
  };

  const onAfterHide = () => {
    isOpen.value = false;
  };
</script>

<template>
  <cps-button @click="onClick">Mostrar notificação</cps-button>

  <cps-notification variant="informative" duration="5000" :open="isOpen" icon closable @cps-after-hide="onAfterHide">
    Fecharei automaticamente após três segundos, a menos que você interaja comigo antes disso.
  </cps-notification>
</template>

<style scoped>
  .notification-duration cps-notification {
    margin-top: 1rem;
  }
</style>
```

### Notificações _toast_

Para exibir uma notificação em formato _toast_, ou seja, saltando na tela por cima do conteúdo, defina o conteúdo da notificação no HTML e, através de _script_, interaja com a notificação e chame seu método `toast()`. Isso moverá a notificação para fora de sua posição original no DOM e a exibirá na [pilha de _toasts_](#a-pilha-de-toasts). Uma vez fechada, ela será removida completamente do DOM. Para reutilizar um _toast_, armazene uma referência a ele e chame o método `toast()` novamente mais tarde.

Você sempre deve usar o atributo `closable` para que os usuários possam dispensar a notificação quando ela está em uma pilha de _toasts_. Também é comum definir uma `duration` razoável quando a notificação não requer confirmação.

```html preview no-vue
<div class="notification-toast">
  <cps-button class="neutral">Neutro</cps-button>
  <cps-button class="informative">Informativo</cps-button>
  <cps-button class="warning">Alerta</cps-button>
  <cps-button class="critical">Crítico</cps-button>
  <cps-button class="success">Sucesso</cps-button>

  <cps-notification variant="neutral" duration="5000" icon closable>
    <strong>Suas configurações foram atualizadas!</strong><br />
    As configurações serão aplicadas no próximo acesso.
  </cps-notification>

  <cps-notification variant="informative" duration="5000" icon closable>
    <strong>Isso é super informativo!</strong><br />
    Você pode ver pela beleza desta notificação.
  </cps-notification>

  <cps-notification variant="warning" duration="5000" icon closable>
    <strong>Sua sessão foi encerrada!</strong><br />
    Por favor, informe suas credenciais novamente.
  </cps-notification>

  <cps-notification variant="critical" duration="5000" icon closable>
    <strong>Sua conta foi excluída...</strong><br />
    Estamos muito tristes em te ver partir!
  </cps-notification>

  <cps-notification variant="success" duration="5000" icon closable>
    <strong>As mudanças foram salvas!</strong><br />
    Agora você já pode sair do aplicativo com segurança.
  </cps-notification>
</div>

<script>
  const container = document.querySelector('.notification-toast');

  ['informative', 'success', 'neutral', 'warning', 'critical'].map(variant => {
    const button = container.querySelector(`cps-button.${variant}`);
    const notification = container.querySelector(`cps-notification[variant="${variant}"]`);

    button.addEventListener('click', () => notification.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsNotification } from '@cps-elements/web/react/notification';

const App = () => {
  const informative = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const critical = useRef(null);

  return (
    <>
      <CpsButton onClick={() => neutral.current.toast()}>Neutro</CpsButton>

      <CpsButton onClick={() => informative.current.toast()}>Informativo</CpsButton>

      <CpsButton onClick={() => success.current.toast()}>Sucesso</CpsButton>

      <CpsButton onClick={() => warning.current.toast()}>Alerta</CpsButton>

      <CpsButton onClick={() => critical.current.toast()}>Crítico</CpsButton>

      <CpsNotification ref={neutral} variant="neutral" duration="5000" icon closable>
        <strong>Suas configurações foram atualizadas!</strong>
        <br />
        As configurações serão aplicadas no próximo acesso.
      </CpsNotification>

      <CpsNotification ref={informative} variant="informative" duration="5000" icon closable>
        <strong>Isso é super informativo!</strong>
        <br />
        Você pode ver pela beleza desta notificação.
      </CpsNotification>

      <CpsNotification ref={warning} variant="warning" duration="5000" icon closable>
        <strong>Sua sessão foi encerrada!</strong>
        <br />
        Por favor, informe suas credenciais novamente.
      </CpsNotification>

      <CpsNotification ref={critical} variant="critical" duration="5000" icon closable>
        <strong>Sua conta foi excluída...</strong>
        <br />
        Estamos muito tristes em te ver partir!
      </CpsNotification>

      <CpsNotification ref={success} variant="success" duration="5000" icon closable>
        <strong>As mudanças foram salvas!</strong>
        <br />
        Agora você já pode sair do aplicativo com segurança.
      </CpsNotification>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { CpsNotification } from '@cps-elements/web/components/notification';

  const neutral = ref();
  const informative = ref();
  const warning = ref();
  const critical = ref();
  const success = ref();
</script>

<template>
  <cps-button class="neutral" @click="neutral.toast()">Neutro</cps-button>
  <cps-button class="informative" @click="informative.toast()">Informativo</cps-button>
  <cps-button class="warning" @click="warning.toast()">Alerta</cps-button>
  <cps-button class="critical" @click="critical.toast()">Crítico</cps-button>
  <cps-button class="success" @click="success.toast()">Sucesso</cps-button>

  <cps-notification ref="neutral" variant="neutral" duration="5000" icon closable>
    <strong>Suas configurações foram atualizadas!</strong><br />
    As configurações serão aplicadas no próximo acesso.
  </cps-notification>

  <cps-notification ref="informative" variant="informative" duration="5000" icon closable>
    <strong>Isso é super informativo!</strong><br />
    Você pode ver pela beleza desta notificação.
  </cps-notification>

  <cps-notification ref="warning" variant="warning" duration="5000" icon closable>
    <strong>Sua sessão foi encerrada!</strong><br />
    Por favor, informe suas credenciais novamente.
  </cps-notification>

  <cps-notification ref="critical" variant="critical" duration="5000" icon closable>
    <strong>Sua conta foi excluída...</strong><br />
    Estamos muito tristes em te ver partir!
  </cps-notification>

  <cps-notification ref="success" variant="success" duration="5000" icon closable>
    <strong>As mudanças foram salvas!</strong><br />
    Agora você já pode sair do aplicativo com segurança.
  </cps-notification>
</template>
```

### Criando _toasts_ imperativamente

Para conveniência, oferecemos um método utilitário que emite notificações _toast_ ao invés de você precisar por conta própria compor suas notificações em HTML antes da exibição. Para tal, basta importar e utilizar o método `toast()` diretamente.

```html preview no-vue
<div class="notification-toast-wrapper">
  <cps-button>Gerar notificação</cps-button>
</div>

<script type="module">
  import { toast } from '@cps-elements/web/components/notification.js';

  const button = document.querySelector('.notification-toast-wrapper cps-button');
  let count = 0;

  button.addEventListener('click', () => {
    toast(`Esta é a ${++count}ª notificação gerada imperativamente.`);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { toast } from '@cps-elements/web/react/notification';

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    toast(`Esta é a ${++count}ª notificação gerada imperativamente.`);
  }

  return (
    <>
      <CpsButton onClick={handleClick}>Gerar notificação</CpsButton>
    </>
  );
};
```

```html vue
<script setup>
  import { ref } from 'vue';
  import { CpsButton } from '@cps-elements/web/components/button';
  import { toast } from '@cps-elements/web/components/notification';

  const count = ref(0);

  const onClick = () => {
    toast(`Esta é a ${++count.value}ª notificação gerada imperativamente.`);
  };
</script>

<template>
  <cps-button class="neutral" @click="onClick">Gerar notificação</cps-button>
</template>
```

?> O método utilitário `toast()` aceita um segundo argumento na forma de um objeto de opções, o qual permite especificar `variant`, `duration`, `closable` e `icon` também de forma imperativa, com comportamentos equivalentes à utilização destes atributos aplicados diretamente em um `<cps-notification>` declarado em seu HTML previamente.

### A pilha de _toasts_

A pilha de _toasts_ é um elemento de posição fixa criado e gerenciado internamente pelo componente de notificação. Ele será adicionado e removido do DOM conforme necessário quando os _toasts_ são exibidos. Quando mais de um _toast_ está visível, eles se empilham verticalmente na pilha de _toasts_.

Por padrão, a pilha de _toasts_ é posicionada no canto superior direito da janela de visualização. Você pode alterar sua posição ajustando a classe `.cps-toast-stack` em sua própria folha de estilos. Para fazer com que os _toasts_ apareçam no canto superior esquerdo da janela de visualização, por exemplo, use os seguintes estilos.

```css
.cps-toast-stack {
  right: auto;
  left: 0;
}
```

?> Por definição, é impossível exibir _toasts_ em mais de uma pilha simultaneamente. Intencionalmente projetamos a pilha sem esta possibilidade, visto que tal comportamento é confuso e gera uma experiência de usuário ruim.

[component-metadata:cps-notification]
