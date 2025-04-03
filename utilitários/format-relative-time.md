# Format Relative Time

[component-header:cps-format-relative-time]

A formatação de tempo relativo é gerenciada automaticamente pela API nativa [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) do navegador, eliminando a necessidade de bibliotecas externas de formatação de tempo relativo em múltiplos idiomas. Isso proporciona uma solução leve e de alto desempenho para internacionalização de tempo relativo.

Sendo assim, este utilitário é simplesmente um _wrapper_ sobre a implementação nativa, oferecendo uma sintaxe baseada em Web Components fácil de entender e de usar diretamente no HTML:

```html preview
<p class="relative-time-example">
  CPS Elements foi iniciado&nbsp;
  <cps-format-relative-time date="2023-03-21T21:00:00-03:00"></cps-format-relative-time>!
</p>
```

```jsx react
import { CpsFormatRelativeTime } from '@cps-elements/web/react/format-relative-time';

const App = () => (
  <p class="relative-time-example">
    CPS Elements foi iniciado&nbsp;
    <CpsFormatRelativeTime date="2023-03-21T21:00:00-03:00" />!
  </p>
);
```

O atributo `date` determina a data/hora a partir da qual o tempo relativo é calculado. Ele deve ser informado como um texto que [`Date.parse()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) possa interpretar, ou um objeto [`Date`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) previamente definido via JavaScript. Se omitido, a data/hora atual será assumida.

?> Ao usar data/hora proveniente de um valor textual, evite datas ambíguas como `03/04/2020`, que podem ser interpretadas como _4 de março_ ou como _3 de abril_, dependendo do navegador e do idioma do usuário. Em vez disso, use data/hora válidas no formato [ISO 8601](https://www.w3.org/TR/NOTE-datetime) para garantir que a data seja analisada corretamente por todos os clientes usando sistemas em diferentes idiomas.

## Exemplos

### Sincronizado em tempo real

Use o atributo `sync` para atualizar automaticamente o valor exibido, conforme o tempo passa. É visível especialmente quando na mesma data e com apenas minutos de diferença em relação à data/hora atual.

Se você ficar olhando para o exemplo abaixo por ao menos um minuto, poderá observar o `sync` na prática:

```html preview
<p class="relative-time-example">
  Esta página carregou&nbsp;
  <cps-format-relative-time sync></cps-format-relative-time>.
</p>
```

```jsx react
import { CpsFormatRelativeTime } from '@cps-elements/web/react/format-relative-time';

const App = () => (
  <p class="relative-time-example">
    Esta página carregou&nbsp;
    <CpsFormatRelativeTime sync />.
  </p>
);
```

### Localização forçada

O idioma atualmente em uso no navegador do usuário é utilizado para a formatação padrão do tempo relativo. Use o atributo `lang` para definir um idioma de formatação de forma explícita.

```html preview
<cps-label variant="secondary">Português:</cps-label><br />
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="pt"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Inglês:</cps-label><br />
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="en"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Francês:</cps-label><br />
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="fr"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Alemão:</cps-label><br />
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="de"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Russo:</cps-label><br />
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="ru"></cps-format-relative-time>
```

```jsx react
import { CpsFormatRelativeTime } from '@cps-elements/web/react/format-relative-time';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => <></>;
```

?> Você pode identificar linguagens de forma genérica (como `pt`), de forma explícita com uma especialização local (como `pt-BR`), ou ainda com variações de forma menos usuais. As variações possíveis podem ser encontradas no documento [BCP 47](http://www.rfc-editor.org/rfc/bcp/bcp47.txt) da <abbr title="Internet Engineering Task Force">IETF</abbr>.

### Números explícitos

Use o atributo `numeric` para determinar quando uma apresentação numérica explícita, como _"há 1 dia"_ e _"em 1 dia"_, é preferível. Por padrão, a apresentação temporal é textual quando possível, usando termos como _"ontem"_ e _"amanhã"_.

```html preview
<cps-label variant="secondary">Português:</cps-label><br />
<cps-label variant="tertiary">Flexível:</cps-label>
<cps-format-relative-time lang="pt"></cps-format-relative-time><br />
<cps-label variant="tertiary">Numérico:</cps-label>
<cps-format-relative-time lang="pt" numeric></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Inglês:</cps-label><br />
<cps-label variant="tertiary">Flexível:</cps-label>
<cps-format-relative-time lang="en"></cps-format-relative-time><br />
<cps-label variant="tertiary">Numérico:</cps-label>
<cps-format-relative-time lang="en" numeric></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Francês:</cps-label><br />
<cps-label variant="tertiary">Flexível:</cps-label>
<cps-format-relative-time lang="fr"></cps-format-relative-time><br />
<cps-label variant="tertiary">Numérico:</cps-label>
<cps-format-relative-time lang="fr" numeric></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Alemão:</cps-label><br />
<cps-label variant="tertiary">Flexível:</cps-label>
<cps-format-relative-time lang="de"></cps-format-relative-time><br />
<cps-label variant="tertiary">Numérico:</cps-label>
<cps-format-relative-time lang="de" numeric></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Russo:</cps-label><br />
<cps-label variant="tertiary">Flexível:</cps-label>
<cps-format-relative-time lang="ru"></cps-format-relative-time><br />
<cps-label variant="tertiary">Numérico:</cps-label>
<cps-format-relative-time lang="ru" numeric></cps-format-relative-time>
```

```jsx react
import { CpsFormatRelativeTime } from '@cps-elements/web/react/format-relative-time';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => <></>;
```

### Formatação

Use o atributo `format` para alterar como o tempo relativo é formatado para exibição, sendo `long` o padrão. Observe que alguns idiomas podem exibir os mesmos valores entre os formatos, exatamente o caso do português.

```html preview
<cps-label variant="secondary">Português:</cps-label><br />
<cps-label variant="tertiary">Longo:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="pt" format="long"></cps-format-relative-time><br />
<cps-label variant="tertiary">Curto:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="pt" format="short"></cps-format-relative-time><br />
<cps-label variant="tertiary">Restrito:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="pt" format="narrow"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Inglês:</cps-label><br />
<cps-label variant="tertiary">Longo:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="en" format="long"></cps-format-relative-time><br />
<cps-label variant="tertiary">Curto:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="en" format="short"></cps-format-relative-time><br />
<cps-label variant="tertiary">Restrito:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="en" format="narrow"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Francês:</cps-label><br />
<cps-label variant="tertiary">Longo:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="fr" format="long"></cps-format-relative-time><br />
<cps-label variant="tertiary">Curto:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="fr" format="short"></cps-format-relative-time><br />
<cps-label variant="tertiary">Restrito:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="fr" format="narrow"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Alemão:</cps-label><br />
<cps-label variant="tertiary">Longo:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="de" format="long"></cps-format-relative-time><br />
<cps-label variant="tertiary">Curto:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="de" format="short"></cps-format-relative-time><br />
<cps-label variant="tertiary">Restrito:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="de" format="narrow"></cps-format-relative-time>
<br /><br />

<cps-label variant="secondary">Russo:</cps-label><br />
<cps-label variant="tertiary">Longo:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="ru" format="long"></cps-format-relative-time><br />
<cps-label variant="tertiary">Curto:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="ru" format="short"></cps-format-relative-time><br />
<cps-label variant="tertiary">Restrito:</cps-label>
<cps-format-relative-time date="2023-03-21T21:00:00-03:00" lang="ru" format="narrow"></cps-format-relative-time>
```

```jsx react
import { CpsFormatRelativeTime } from '@cps-elements/web/react/format-relative-time';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => <></>;
```

[component-metadata:cps-format-relative-time]

<style>
  .relative-time-example {
    display: flex;
    margin: 0;
  }
</style>
