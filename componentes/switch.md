# Switch

[component-header:cps-switch]

```html preview
<cps-switch></cps-switch>
```

```jsx react
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => <CpsSwitch />;
```

?> Este componente funciona com elementos `<form>` padrão. Consulte a seção sobre [formulários](/fundamentos/formulários) para saber mais sobre submissão de formulários e validação do lado do cliente.

## Exemplos

### Rótulos

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ padrão ao invés do atributo.

```html preview
<cps-switch label="Ativar notificações"></cps-switch>
```

```jsx react
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => <CpsSwitch label="Ativar notificações" />;
```

Através do uso do _slot_ `label`, é possível adicionar elementos adicionais ao rótulo.

```html preview
<cps-switch>Ativar <strong>notificações</strong></cps-switch>
```

```jsx react
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => (
  <CpsSwitch>
    Ativar <strong>notificações</strong>
  </CpsSwitch>
);
```

### Rótulo fluido

Use o atributo `fluid` para adicionar um posicionamento fluido ao rótulo, permitindo que ocupe todo o espaço disponível à esquerda, automaticamente movendo o interruptor para a direita. Este é um estilo visual comum em interfaces de configuração.

```html preview
<cps-card style="max-width: 380px">
  <cps-switch label="Você deseja receber notificações contendo as atualizações mais importantes?" fluid></cps-switch>
  <br /><br />
  <cps-switch label="Você também deseja receber importunação excessiva por e-mail todos os dias?" fluid></cps-switch>
</cps-card>
```

```jsx react
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => (
  <div style={{ maxWidth: '380px' }}>
    <CpsSwitch label="Você deseja receber notificações contendo as atualizações mais importantes?" fluid />
    <br />
    <br />
    <CpsSwitch label="Você também deseja receber importunação excessiva por e-mail todos os dias?" fluid />
  </div>
);
```

### Checagem

Use o atributo `checked` para definir o campo como ligado/desligado. Este atributo reage a alterações em tempo real, assim como um campo de entrada nativo padrão (`<input type="checkbox">`).

```html preview
<cps-switch checked>Ligado</cps-switch>
```

```jsx react
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => <CpsSwitch checked>Ligado</CpsSwitch>;
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-switch disabled>Desabilitado</cps-switch><br /><br />
<cps-switch disabled checked>Desabilitado e ligado</cps-switch>
```

```jsx react
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => (
  <>
    <CpsSwitch disabled>Desabilitado</CpsSwitch>
    <br />
    <br />
    <CpsSwitch disabled checked>
      Desabilitado e ligado
    </CpsSwitch>
  </>
);
```

### Tamanhos

Use o atributo `size` para alterar o tamanho do campo.

```html preview
<cps-switch size="small">Pequeno</cps-switch><br /><br />
<cps-switch size="medium">Médio</cps-switch><br /><br />
<cps-switch size="large">Grande</cps-switch>
```

```jsx react
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => (
  <>
    <CpsSwitch size="small">Pequeno</CpsSwitch>
    <br />
    <CpsSwitch size="medium">Médio</CpsSwitch>
    <br />
    <CpsSwitch size="large">Grande</CpsSwitch>
  </>
);
```

### Validação personalizada

Use o método `setCustomValidity()` para definir uma mensagem de validação personalizada. Isso irá impedir o envio do formulário e fazer com que o navegador exiba a mensagem de erro que você fornecer. Para limpar o erro, chame esta função com uma `String` vazia.

```html preview no-vue
<form class="custom-validity">
  <cps-switch>Me ative antes de submeter</cps-switch>
  <br />
  <cps-button type="submit" variant="accent" style="margin-top: 1rem;">Submeter</cps-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const switchEl = form.querySelector('cps-switch');
  const errorMessage = 'Não esqueça de me ativar!';

  customElements.whenDefined('cps-switch').then(async () => {
    await switchEl.updateComplete;
    switchEl.setCustomValidity(errorMessage);
  });

  switchEl.addEventListener('cps-change', () => {
    switchEl.setCustomValidity(switchEl.checked ? '' : errorMessage);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Tudo validado para a submissão!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsSwitch } from '@cps-elements/web/react/switch';

const App = () => {
  const switchRef = useRef(null);
  const errorMessage = 'Não esqueça de me ativar!';

  function handleChange() {
    switchRef.current.setCustomValidity(switchRef.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Tudo validado para a submissão!');
  }

  useEffect(() => {
    switchRef.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <CpsSwitch ref={switchRef} onCpsChange={handleChange}>
        Me ative antes de submeter
      </CpsSwitch>
      <br />
      <CpsButton type="submit" variant="accent" style={{ marginTop: '1rem' }}>
        Submeter
      </CpsButton>
    </form>
  );
};
```

?> **Nota:** O método [`setCustomValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity) é nativo do HTML, e não é específico do CPS Elements. Observe que, dependendo do _framework_ JavaScript que você estiver usando, você pode dispor de mecanismos específicos de validação de formulários que prefira utilizar. Também serão suportados normalmente, uma vez que o CPS Elements é construído sobre a plataforma Web e seus componentes atuam de forma similar a elementos nativos.

[component-metadata:cps-switch]
