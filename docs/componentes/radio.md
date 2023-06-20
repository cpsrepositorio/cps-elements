# Radio

[component-header:cps-radio]

Os campos de opção oferecem aos usuários uma maneira de selecionar entre opções mutuamente exclusivas, quando em seu formato circular (conhecido em inglês como _radio_, nome inspirado nos antigos aparelhos de rádio com botões redondos de regulagem de volume e sintonia). Caso suas opções não sejam mutuamente exclusivas, considere o uso de [Checkbox](/components/checkbox).

Embora esta documentação apresente seus atributos fundamentais, _radios_ são projetados para serem usados em grupos, portanto a documentação de [Radio Group](/components/radio-group) pode fazer mais sentido para suas necessidades.

```html preview
<cps-radio></cps-radio>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';

const App = () => <CpsRadio />;
```

?> Este componente funciona com elementos `<form>` padrão. Consulte a seção sobre [formulários](/fundamentos/formulários) para saber mais sobre submissão de formulários e validação do lado do cliente.

## Exemplos

### Rótulos

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ padrão ao invés do atributo.

```html preview
<cps-radio label="Me marque para nunca mais mudar de ideia"></cps-radio>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';

const App = () => <CpsRadio label="Me marque para nunca mais mudar de ideia" />;
```

Através do uso do _slot_ `label`, é possível adicionar elementos adicionais ao rótulo.

```html preview
<cps-radio>
  Me marque definitivamente após ler os <a href="https://example.com/" target="_blank">termos de uso</a>
</cps-radio>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';

const App = () => (
  <CpsRadio>
    Me marque definitivamente após ler os{' '}
    <a href="https://example.com/" target="_blank">
      termos de uso
    </a>
  </CpsRadio>
);
```

De fato, usar o _slot_ ao invés do atributo, mesmo para textos puros, pode ser a opção preferida. É fundamentalmente apenas uma questão de preferência pessoal. Os exemplos posteriores desta página utilizarão o _slot_ padrão ao invés do atributo.

### Valor interno

Use o atributo `value` para definir o valor interno do campo, o qual não precisa ser equivalente ao seu texto de exibição. Para que funcione adequadamente dentro de um grupo, cada campo deve ter um valor único em um mesmo grupo.

```html preview
<cps-radio value="1">Opção 1</cps-radio><br /><br />
<cps-radio value="2">Opção 2</cps-radio><br /><br />
<cps-radio value="3">Opção 3</cps-radio>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';

const App = () => (
  <>
    <CpsRadio value="1">Opção 1</CpsRadio>
    <br />
    <br />
    <CpsRadio value="2">Opção 2</CpsRadio>
    <br />
    <br />
    <CpsRadio value="3">Opção 3</CpsRadio>
  </>
);
```

?> A mutualidade exclusiva é definida pelo atributo `name` do [Radio Group](/components/radio-group) que embrulhar as opções, não pelos atributos `name` ou `value` de cada campo de opção individualmente. Recomendamos que você confira a documentação do _radio group_ para mais informações, pois utilizar somente _radio_ não costuma ser o suficiente.

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-radio disabled>Desabilitado</cps-radio><br /><br />
<cps-radio disabled checked>Desabilitado e marcado</cps-radio>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';

const App = () => (
  <>
    <CpsRadio disabled>Desabilitado</CpsRadio>
    <br />
    <br />
    <CpsRadio disabled checked>
      Desabilitado e marcado
    </CpsRadio>
  </>
);
```

## Tamanhos

Use o atributo `size` para alterar o tamanho do campo.

```html preview
<cps-radio size="small" checked>Pequeno 1</cps-radio>
&nbsp;
<cps-radio size="small">Pequeno 2</cps-radio>
&nbsp;
<cps-radio size="small">Pequeno 3</cps-radio>

<br /><br />

<cps-radio size="medium" checked>Médio 1</cps-radio>
&nbsp;
<cps-radio size="medium">Médio 2</cps-radio>
&nbsp;
<cps-radio size="medium">Médio 3</cps-radio>

<br /><br />

<cps-radio size="large" checked>Grande 1</cps-radio>
&nbsp;
<cps-radio size="large">Grande 2</cps-radio>
&nbsp;
<cps-radio size="large">Grande 3</cps-radio>
```

```jsx react
import { CpsRadio } from '@cps-elements/web/react/radio';

const App = () => (
  <>
    <CpsRadio size="small" checked>
      Pequeno 1
    </CpsRadio>
    {'\u00A0'}
    <CpsRadio size="small">Pequeno 2</CpsRadio>
    {'\u00A0'}
    <CpsRadio size="small">Pequeno 3</CpsRadio>

    <br />
    <br />

    <CpsRadio size="medium" checked>
      Médio 1
    </CpsRadio>
    {'\u00A0'}
    <CpsRadio size="medium">Médio 2</CpsRadio>
    {'\u00A0'}
    <CpsRadio size="medium">Médio 3</CpsRadio>

    <br />
    <br />

    <CpsRadio size="large" checked>
      Grande 1
    </CpsRadio>
    {'\u00A0'}
    <CpsRadio size="large">Grande 2</CpsRadio>
    {'\u00A0'}
    <CpsRadio size="large">Grande 3</CpsRadio>
  </>
);
```

?> É possível controlar o tamanho de diversos campos de opção de uma só vez, ao usar o atributo `size` do [Radio Group](/components/radio-group) que embrulhar as opções. Confira a documentação de _radio groups_ para mais informações.

[component-metadata:cps-radio]
