# Format Number

[component-header:cps-format-number]

A formatação de números é gerenciada automaticamente pela API nativa [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) do navegador, eliminando a necessidade de bibliotecas externas de formatação de números em múltiplos idiomas. Isso proporciona uma solução leve e de alto desempenho para internacionalização de números.

Sendo assim, este utilitário é simplesmente um _wrapper_ sobre a implementação nativa, oferecendo uma sintaxe baseada em Web Components fácil de entender e de usar diretamente no HTML:

```html preview
<div class="format-number-overview">
  <cps-input type="number" value="2000" label="Número para formatar:" style="max-width: 180px;"></cps-input>
  <br />

  <cps-label variant="secondary">Número formatado:</cps-label><br />
  <cps-format-number value="2000"></cps-format-number>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatted = container.querySelector('cps-format-number');
  const input = container.querySelector('cps-input');

  input.addEventListener('cps-input', () => (formatted.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsFormatNumber } from '@cps-elements/web/react/format-number';
import { CpsInput } from '@cps-elements/web/react/input';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <CpsInput
        type="number"
        value={value}
        label="Número para formatar:"
        style={{ maxWidth: '180px' }}
        onCpsInput={event => setValue(event.target.value)}
      />
      <br />

      <CpsLabel variant="secondary">Número formatado:</CpsLabel>
      <br />
      <CpsFormatNumber value={value} />
    </>
  );
};
```

## Exemplos

### Porcentagens

Use o atributo `type` como `percent` para exibir o valor como porcentagem.

```html preview
<cps-format-number type="percent" value="0"></cps-format-number><br />
<cps-format-number type="percent" value="0.25"></cps-format-number><br />
<cps-format-number type="percent" value="0.50"></cps-format-number><br />
<cps-format-number type="percent" value="0.75"></cps-format-number><br />
<cps-format-number type="percent" value="1"></cps-format-number>
```

```jsx react
import { CpsFormatNumber } from '@cps-elements/web/react/format-number';

const App = () => (
  <>
    <CpsFormatNumber type="percent" value={0} />
    <br />
    <CpsFormatNumber type="percent" value={0.25} />
    <br />
    <CpsFormatNumber type="percent" value={0.5} />
    <br />
    <CpsFormatNumber type="percent" value={0.75} />
    <br />
    <CpsFormatNumber type="percent" value={1} />
  </>
);
```

### Localização forçada

O idioma atualmente em uso no navegador do usuário é utilizado para a formatação padrão de números. Use o atributo `lang` para definir um idioma de formatação de forma explícita.

```html preview
<cps-label variant="secondary">Português:</cps-label><br />
<cps-format-number value="2530.70" minimum-fraction-digits="2" lang="pt"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Inglês estadunidense:</cps-label><br />
<cps-format-number value="2530.70" minimum-fraction-digits="2" lang="en-US"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Inglês britânico:</cps-label><br />
<cps-format-number value="2530.70" minimum-fraction-digits="2" lang="en-UK"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Francês:</cps-label><br />
<cps-format-number value="2530.70" minimum-fraction-digits="2" lang="fr"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Alemão:</cps-label><br />
<cps-format-number value="2530.70" minimum-fraction-digits="2" lang="de"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Russo:</cps-label><br />
<cps-format-number value="2530.70" minimum-fraction-digits="2" lang="ru"></cps-format-number>
```

```jsx react
import { CpsFormatNumber } from '@cps-elements/web/react/format-number';

const App = () => <></>;
```

?> Você pode identificar linguagens de forma genérica (como `pt`), de forma explícita com uma especialização local (como `pt-BR`), ou ainda com variações de forma menos usuais. As variações possíveis podem ser encontradas no documento [BCP 47](http://www.rfc-editor.org/rfc/bcp/bcp47.txt) da <abbr title="Internet Engineering Task Force">IETF</abbr>.

### Formato monetário

Para formatar um número como valor monetário, defina o atributo `type` como `currency` e o atributo `currency` com o código [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) da moeda desejada. Também é recomendável usar o atributo `lang` para garantir o formato correto para o idioma de destino desejado (especialmente útil para moedas usadas em mais de um país, como o Euro).

```html preview
<cps-label variant="secondary">Real brasileiro:</cps-label><br />
<cps-format-number type="currency" currency="BRL" value="2530.70" lang="pt-BR"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Dólar americano:</cps-label><br />
<cps-format-number type="currency" currency="USD" value="2530.70" lang="en-US"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Libra esterlina:</cps-label><br />
<cps-format-number type="currency" currency="GBP" value="2530.70" lang="en-GB"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Euro (formatação alemã):</cps-label><br />
<cps-format-number type="currency" currency="EUR" value="2530.70" lang="de"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Euro (formatação francesa):</cps-label><br />
<cps-format-number type="currency" currency="EUR" value="2530.70" lang="fr"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Rublo russo:</cps-label><br />
<cps-format-number type="currency" currency="RUB" value="2530.70" lang="ru"></cps-format-number>
<br /><br />

<cps-label variant="secondary">Yuan chinês:</cps-label><br />
<cps-format-number type="currency" currency="CNY" value="2530.70" lang="zh-cn"></cps-format-number>
```

```jsx react
import { CpsFormatNumber } from '@cps-elements/web/react/format-number';

const App = () => <></>;
```

[component-metadata:cps-format-number]

<style>
.format-number-overview cps-input::part(form-control-label) {
  color: var(--cps-color-text-secondary);
  font: var(--cps-font-body);
}
</style>
