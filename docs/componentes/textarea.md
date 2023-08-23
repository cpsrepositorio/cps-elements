# Textarea

[component-header:cps-textarea]

```html preview
<cps-textarea></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea />;
```

?> Este componente funciona com elementos `<form>` padrão. Consulte a seção sobre [formulários](/fundamentos/formulários) para saber mais sobre submissão de formulários e validação do lado do cliente.

## Exemplos

### Rótulos

Use o atributo `label` para exibir um rótulo acessível no campo. Para rótulos com HTML, use o _slot_ `label` ao invés do atributo.

```html preview
<cps-textarea label="Comentários"></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea label="Comentários" />;
```

### Texto de apoio

Use o atributo `help-text` para adicionar texto de apoio para auxílio ao preenchimento do campo. Para textos com HTML, use o _slot_ `help-text` ao invés do atributo.

```html preview
<cps-textarea label="Comentários" help-text="Por favor, nos conte o que você achou."> </cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea label="Comentários" help-text="Por favor, nos conte o que você achou." />;
```

### Linhas

Use o atributo `rows` para alterar o número de linhas de texto que serão exibidas.

```html preview
<cps-textarea rows="2"></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea rows={2} />;
```

### Texto de espaço reservado

Use o atributo `placeholder` para adicionar um texto de espaço reservado.

```html preview
<cps-textarea placeholder="Informe o que você acha"></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea placeholder="Informe o que você acha" />;
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [boas práticas de caixa de texto](https://cpsrepositorio.github.io/cps-design-system/documentacao/text-field.html#boas-praticas), evite utilizar apenas `placeholder` em campos de formulário, preferindo utilizar `label`, ou então `label` e `placeholder` juntos. Raras exceções podem acontecer em casos onde o campo encontra-se sozinho em determinada área da interface e possui usabilidade bem clara. De fato, isto normalmente não ocorre com caixas de texto de múltiplas linhas.

### Estado desabilitado

Use o atributo `disabled` para desabilitar o campo. Cliques serão suprimidos, e nenhum tipo de interação ou _feedback_ visual sobre interação serão permitidos enquanto o estado desabilitado não for removido.

```html preview
<cps-textarea placeholder="Desabilitado" disabled></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea placeholder="Desabilitado" disabled />;
```

### Tamanhos

Use o atributo `size` para alterar o tamanho do campo.

```html preview
<cps-textarea placeholder="Pequeno" size="small"></cps-textarea>
<br />
<cps-textarea placeholder="Médio" size="medium"></cps-textarea>
<br />
<cps-textarea placeholder="Grande" size="large"></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => (
  <>
    <CpsTextarea placeholder="Pequeno" size="small"></CpsTextarea>
    <br />
    <CpsTextarea placeholder="Médio" size="medium"></CpsTextarea>
    <br />
    <CpsTextarea placeholder="Grande" size="large"></CpsTextarea>
  </>
);
```

### Prevenir redimensionamento

Por padrão, caixas de texto de múltiplas linhas podem ser redimensionadas verticalmente pelo usuário. Para prevenir o redimensionamento, defina o atributo `resize` como `none`.

```html preview
<cps-textarea resize="none" placeholder="Informe o que você acha"></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea resize="none" placeholder="Informe o que você acha" />;
```

### Expandir com conteúdo

Caixas de texto de múltiplas linhas se redimensionarão automaticamente para expandir enquanto o conteúdo é informado pelo usuário, se o atributo `resize` for definido como `auto`.

Utilize em conjunto com `rows` para definir um número pequeno de linhas inicialmente exibidas, ressaltando ainda mais o redimensionamento automático.

```html preview
<cps-textarea rows="2" resize="auto" placeholder="Informe o que você acha"></cps-textarea>
```

```jsx react
import { CpsTextarea } from '@cps-elements/web/react/textarea';

const App = () => <CpsTextarea rows="2" resize="auto" placeholder="Informe o que você acha" />;
```

[component-metadata:cps-textarea]
