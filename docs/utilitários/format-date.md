# Formatar Data

[component-header:cps-format-date]

A formatação de datas é gerenciada automaticamente pela API nativa [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) do navegador, eliminando a necessidade de bibliotecas externas de formatação de data/hora em múltiplos idiomas. Isso proporciona uma solução leve e de alto desempenho para internacionalização de datas.

Sendo assim, este utilitário é simplesmente um _wrapper_ sobre a implementação nativa, oferecendo uma sintaxe baseada em _web components_ fácil de entender e usar diretamente no HTML:

```html preview
<!-- Data do primeiro commit do CPS Elements! 🎉 -->
<cps-format-date date="2023-03-21T21:00:00-03:00"></cps-format-date>
```

```jsx react
import { CpsFormatDate } from '@cps-elements/web/react/format-date';

const App = () => <CpsFormatDate date="2023-03-21T21:00:00-03:00" />;
```

O atributo `date` determina a data/hora a ser usada ao formatar. Ele deve ser informado como um texto que [`Date.parse()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) possa interpretar, ou um objeto [`Date`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) previamente definido via JavaScript. Se omitido, a data/hora atual será assumida.

?> Ao usar data/hora proveniente de um valor textual, evite datas ambíguas como `03/04/2020`, que podem ser interpretadas como _4 de março_ ou como _3 de abril_, dependendo do navegador e do idioma do usuário. Em vez disso, use data/hora válidas no formato [ISO 8601](https://www.w3.org/TR/NOTE-datetime) para garantir que a data seja analisada corretamente por todos os clientes usando sistemas em diferentes idiomas.

## Exemplos

### Formatação de data e hora

As opções de formatação são baseadas naquelas encontradas na API [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). Quando opções de formatação são fornecidas, a data/hora será formatada de acordo com esses valores. Quando nenhuma opção de formatação é fornecida, uma data numérica padrão de acordo com o idioma do navegador é exibida.

```html preview
<cps-label variant="secondary">Data por extenso:</cps-label><br />
<cps-format-date day="numeric" month="long" year="numeric"></cps-format-date>
<br /><br />

<cps-label variant="secondary">Dia da semana:</cps-label><br />
<cps-format-date weekday="long"></cps-format-date>
<br /><br />

<cps-label variant="secondary">Data e hora:</cps-label><br />
<cps-format-date day="numeric" month="numeric" year="numeric" hour="numeric" minute="numeric"></cps-format-date>
<br /><br />

<cps-label variant="secondary">Somente hora:</cps-label><br />
<cps-format-date hour="numeric" minute="numeric"></cps-format-date>
<br /><br />

<cps-label variant="secondary">Somente mês:</cps-label><br />
<cps-format-date month="long"></cps-format-date>
<br /><br />

<cps-label variant="secondary">Somente ano:</cps-label><br />
<cps-format-date year="numeric"></cps-format-date>
<br /><br />

<cps-label variant="secondary">Sem formatação:</cps-label><br />
<cps-format-date></cps-format-date>
```

```jsx react
import { CpsFormatDate } from '@cps-elements/web/react/format-date';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <CpsLabel variant="secondary">Data por extenso:</CpsLabel>
    <br />
    <CpsFormatDate day="numeric" month="long" year="numeric" />
    <br />
    <br />

    <CpsLabel variant="secondary">Dia da semana:</CpsLabel>
    <br />
    <CpsFormatDate weekday="long" />
    <br />
    <br />

    <CpsLabel variant="secondary">Data e hora:</CpsLabel>
    <br />
    <CpsFormatDate day="numeric" month="numeric" year="numeric" hour="numeric" minute="numeric" />
    <br />
    <br />

    <CpsLabel variant="secondary">Somente hora:</CpsLabel>
    <br />
    <CpsFormatDate hour="numeric" minute="numeric" />
    <br />
    <br />

    <CpsLabel variant="secondary">Somente mês:</CpsLabel>
    <br />
    <CpsFormatDate month="long" />
    <br />
    <br />

    <CpsLabel variant="secondary">Somente ano:</CpsLabel>
    <br />
    <CpsFormatDate year="numeric" />
    <br />
    <br />

    <CpsLabel variant="secondary">Sem formatação:</CpsLabel>
    <br />
    <CpsFormatDate />
  </>
);
```

### Formatação de hora

Por padrão, o navegador determinará automaticamente se deve usar o formato de 12 ou 24 horas, dependendo do idioma em uso. Para forçar um ou outro, defina o atributo `hour-format` como `12` ou `24`.

```html preview
<cps-label variant="secondary">Formato de 12 horas:</cps-label><br />
<cps-format-date hour="numeric" minute="numeric" hour-format="12"></cps-format-date>
<br /><br />

<cps-label variant="secondary">Formato de 24 horas:</cps-label><br />
<cps-format-date hour="numeric" minute="numeric" hour-format="24"></cps-format-date>
```

```jsx react
import { CpsFormatDate } from '@cps-elements/web/react/format-date';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <CpsLabel variant="secondary">Formato de 12 horas:</CpsLabel>
    <br />
    <CpsFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <br />

    <CpsLabel variant="secondary">Formato de 24 horas:</CpsLabel>
    <br />
    <CpsFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localização forçada

Como já observado, o idioma atualmente em uso no navegador do usuário é utilizado para a formatação padrão de data/hora. Use o atributo `lang` para definir um idioma de formatação de forma explícita.

```html preview
<cps-label variant="secondary">Português:</cps-label><br />
<cps-format-date
  day="numeric"
  month="numeric"
  year="numeric"
  hour="numeric"
  minute="numeric"
  lang="pt"
></cps-format-date>
<br /><br />

<cps-label variant="secondary">Inglês americano:</cps-label><br />
<cps-format-date
  day="numeric"
  month="numeric"
  year="numeric"
  hour="numeric"
  minute="numeric"
  lang="en-US"
></cps-format-date>
<br /><br />

<cps-label variant="secondary">Inglês britânico:</cps-label><br />
<cps-format-date
  day="numeric"
  month="numeric"
  year="numeric"
  hour="numeric"
  minute="numeric"
  lang="en-UK"
></cps-format-date>
<br /><br />

<cps-label variant="secondary">Francês:</cps-label><br />
<cps-format-date
  day="numeric"
  month="numeric"
  year="numeric"
  hour="numeric"
  minute="numeric"
  lang="fr"
></cps-format-date>
<br /><br />

<cps-label variant="secondary">Russo:</cps-label><br />
<cps-format-date
  day="numeric"
  month="numeric"
  year="numeric"
  hour="numeric"
  minute="numeric"
  lang="ru"
></cps-format-date>
```

```jsx react
import { CpsFormatDate } from '@cps-elements/web/react/format-date';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <CpsLabel variant="secondary">Português:</CpsLabel>
    <br />
    <CpsFormatDate day="numeric" month="numeric" year="numeric" hour="numeric" minute="numeric" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">Inglês americano:</CpsLabel>
    <br />
    <CpsFormatDate day="numeric" month="numeric" year="numeric" hour="numeric" minute="numeric" lang="en-US" />
    <br />
    <br />

    <CpsLabel variant="secondary">Inglês britânico:</CpsLabel>
    <br />
    <CpsFormatDate day="numeric" month="numeric" year="numeric" hour="numeric" minute="numeric" lang="en-UK" />
    <br />
    <br />

    <CpsLabel variant="secondary">Francês:</CpsLabel>
    <br />
    <CpsFormatDate day="numeric" month="numeric" year="numeric" hour="numeric" minute="numeric" lang="fr" />
    <br />
    <br />

    <CpsLabel variant="secondary">Russo:</CpsLabel>
    <br />
    <CpsFormatDate day="numeric" month="numeric" year="numeric" hour="numeric" minute="numeric" lang="ru" />
  </>
);
```

?> Você pode identificar linguagens de forma genérica (como `pt`), de forma explícita com uma especialização local (como `pt-BR`), ou ainda com variações de forma menos usuais. As variações possíveis podem ser encontradas no documento [BCP 47](http://www.rfc-editor.org/rfc/bcp/bcp47.txt) da <abbr title="Internet Engineering Task Force">IETF</abbr>.

[component-metadata:cps-format-date]
