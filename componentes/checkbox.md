# Checkbox

[component-header:cps-checkbox]

```html preview
<cps-checkbox></cps-checkbox>
```

```jsx react
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => <CpsCheckbox />;
```

?> Este componente funciona com elementos `<form>` padrão. Consulte a seção sobre [formulários](/fundamentos/formulários) para saber mais sobre submissão de formulários e validação do lado do cliente.

## Exemplos

### Rótulos

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ padrão ao invés do atributo.

```html preview
<cps-checkbox label="Concordo com os termos de uso"></cps-checkbox>
```

```jsx react
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => <CpsCheckbox label="Concordo com os termos de uso" />;
```

Através do uso do _slot_ `label`, é possível adicionar elementos adicionais ao rótulo.

```html preview
<cps-checkbox>Concordo com os <a href="https://example.com/" target="_blank">termos de uso</a></cps-checkbox>
```

```jsx react
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => (
  <CpsCheckbox>
    Concordo com os{' '}
    <a href="https://example.com/" target="_blank">
      termos de uso
    </a>
  </CpsCheckbox>
);
```

De fato, usar o _slot_ ao invés do atributo, mesmo para textos puros, pode ser a opção preferida. É fundamentalmente apenas uma questão de preferência pessoal. Os exemplos posteriores desta página utilizarão o _slot_ padrão ao invés do atributo.

### Checagem

Use o atributo `checked` para definir o campo como marcado/checado. Este atributo reage a alterações em tempo real, assim como um campo de entrada padrão nativo (`<input type="checkbox">`).

```html preview
<cps-checkbox checked>Lembrar-me</cps-checkbox>
```

```jsx react
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => <CpsCheckbox checked>Lembrar-me</CpsCheckbox>;
```

### Estado indeterminado

Use o atributo `indeterminate` para definir o campo como indeterminado. Este estado é especialmente útil em situações como tabelas com linhas selecionáveis, onde a seleção da linha de cabeçalho é indeterminada (pois algumas linhas do corpo da tabela podem estar selecionadas, enquanto outras não estão).

```html preview
<cps-checkbox indeterminate>Selecionar todos</cps-checkbox>
```

```jsx react
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => <CpsCheckbox indeterminate>Selecionar todos</CpsCheckbox>;
```

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-checkbox disabled>Desabilitado</cps-checkbox><br /><br />
<cps-checkbox disabled checked>Desabilitado e marcado</cps-checkbox><br /><br />
<cps-checkbox disabled indeterminate>Desabilitado e indeterminado</cps-checkbox>
```

```jsx react
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => (
  <>
    <CpsCheckbox disabled>Desabilitado</CpsCheckbox>
    <br />
    <br />
    <CpsCheckbox disabled checked>
      Desabilitado e marcado
    </CpsCheckbox>
    <br />
    <br />
    <CpsCheckbox disabled indeterminate>
      Desabilitado e indeterminado
    </CpsCheckbox>
  </>
);
```

### Tamanhos

Use o atributo `size` para alterar o tamanho do campo.

```html preview
<cps-checkbox size="small">Pequeno</cps-checkbox><br /><br />
<cps-checkbox size="medium">Médio</cps-checkbox><br /><br />
<cps-checkbox size="large">Grande</cps-checkbox>
```

```jsx react
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => (
  <>
    <CpsCheckbox size="small">Pequeno</CpsCheckbox>
    <br />
    <CpsCheckbox size="medium">Médio</CpsCheckbox>
    <br />
    <CpsCheckbox size="large">Grande</CpsCheckbox>
  </>
);
```

### Validação personalizada

Use o método `setCustomValidity()` para definir uma mensagem de validação personalizada. Isso irá impedir o envio do formulário e fazer com que o navegador exiba a mensagem de erro que você fornecer. Para limpar o erro, chame esta função com uma `String` vazia.

```html preview no-vue
<form class="custom-validity">
  <cps-checkbox>Me marque antes de submeter</cps-checkbox>
  <br />
  <cps-button type="submit" variant="accent" style="margin-top: 1rem;">Submeter</cps-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('cps-checkbox');
  const errorMessage = 'Não esqueça de me marcar!';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('cps-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('cps-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Tudo validado para a submissão!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsCheckbox } from '@cps-elements/web/react/checkbox';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = 'Não esqueça de me marcar!';

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Tudo validado para a submissão!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <CpsCheckbox ref={checkbox} onCpsChange={handleChange}>
        Me marque antes de submeter
      </CpsCheckbox>
      <br />
      <CpsButton type="submit" variant="accent" style={{ marginTop: '1rem' }}>
        Submeter
      </CpsButton>
    </form>
  );
};
```

?> **Nota:** O método [`setCustomValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity) é nativo do HTML, e não é específico do CPS Elements. Observe que, dependendo do _framework_ JavaScript que você estiver usando, você pode dispor de mecanismos específicos de validação de formulários que prefira utilizar. Também serão suportados normalmente, uma vez que o CPS Elements é construído sobre a plataforma Web e seus componentes atuam de forma similar a elementos nativos.

[component-metadata:cps-checkbox]
