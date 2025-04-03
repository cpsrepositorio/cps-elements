# Format Bytes

[component-header:cps-format-bytes]

```html preview
<div class="format-bytes-overview">
  <cps-input type="number" value="1024" label="Valor em bytes:" style="max-width: 180px;"></cps-input>
  <br />

  O arquivo tem <cps-format-bytes value="1024"></cps-format-bytes> de tamanho.
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatted = container.querySelector('cps-format-bytes');
  const input = container.querySelector('cps-input');

  input.addEventListener('cps-input', () => (formatted.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { CpsFormatBytes } from '@cps-elements/web/react/format-bytes';
import { CpsInput } from '@cps-elements/web/react/input';

const App = () => {
  const [value, setValue] = useState(1024);

  return (
    <div className="format-bytes-overview">
      <CpsInput
        type="number"
        value={value}
        label="Valor em bytes:"
        style={{ maxWidth: '180px' }}
        onCpsInput={e => setValue(e.target.value || 0)}
      />
      <br />
      O arquivo tem <CpsFormatBytes value={value} /> de tamanho.
    </div>
  );
};
```

## Exemplos

### Valor bruto em _bytes_

Use o atributo `value` como um número bruto em _bytes_, para obter um resultado formatado legível para humanos.

```html preview
<cps-label variant="secondary">0,125 bytes:</cps-label><br />
<cps-format-bytes value="0.125"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1 byte:</cps-label><br />
<cps-format-bytes value="1"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1.024 bytes:</cps-label><br />
<cps-format-bytes value="1024"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1.048.576 bytes:</cps-label><br />
<cps-format-bytes value="1048576"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1.073.741.824 bytes:</cps-label><br />
<cps-format-bytes value="1073741824"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1.099.511.627.776 bytes:</cps-label><br />
<cps-format-bytes value="1099511627776"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1.125.899.906.842.624 bytes:</cps-label><br />
<cps-format-bytes value="1125899906842624"></cps-format-bytes>
```

```jsx react
import { CpsFormatBytes } from '@cps-elements/web/react/format-bytes';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <CpsLabel variant="secondary">0,125 bytes:</CpsLabel>
    <br />
    <CpsFormatBytes value={0.125} />
    <br />
    <br />

    <CpsLabel variant="secondary">1 byte:</CpsLabel>
    <br />
    <CpsFormatBytes value={1} />
    <br />
    <br />

    <CpsLabel variant="secondary">1.024 bytes:</CpsLabel>
    <br />
    <CpsFormatBytes value={1024} />
    <br />
    <br />

    <CpsLabel variant="secondary">1.048.576 bytes:</CpsLabel>
    <br />
    <CpsFormatBytes value={1048576} />
    <br />
    <br />

    <CpsLabel variant="secondary">1.073.741.824 bytes:</CpsLabel>
    <br />
    <CpsFormatBytes value={1073741824} />
    <br />
    <br />

    <CpsLabel variant="secondary">1.099.511.627.776 bytes:</CpsLabel>
    <br />
    <CpsFormatBytes value={1099511627776} />
    <br />
    <br />

    <CpsLabel variant="secondary">1.125.899.906.842.624 bytes:</CpsLabel>
    <br />
    <CpsFormatBytes value={1125899906842624} />
  </>
);
```

### Valor bruto em _bits_

Use o atributo `unit` como `bit` se preferir informar um valor bruto em _bits_ ao invés de _bytes_. As conversões internas necessárias serão realizadas automaticamente, antes da formatação do resultado legível para humanos.

```html preview
<cps-label variant="secondary">1 bit:</cps-label><br />
<cps-format-bytes value="1" unit="bit"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">8 bits:</cps-label><br />
<cps-format-bytes value="8" unit="bit"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">8.192 bits:</cps-label><br />
<cps-format-bytes value="8192" unit="bit"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">8.388.608 bits:</cps-label><br />
<cps-format-bytes value="8388608" unit="bit"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">8.589.934.592 bits:</cps-label><br />
<cps-format-bytes value="8589934592" unit="bit"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">8.796.093.022.208 bits:</cps-label><br />
<cps-format-bytes value="8796093022208" unit="bit"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">9.007.199.254.740.992 bits:</cps-label><br />
<cps-format-bytes value="9007199254740992" unit="bit"></cps-format-bytes>
```

```jsx react
import { CpsFormatBytes } from '@cps-elements/web/react/format-bytes';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <CpsLabel variant="secondary">1 bit:</CpsLabel>
    <br />
    <CpsFormatBytes value={1} unit="bit" />
    <br />
    <br />

    <CpsLabel variant="secondary">8 bits:</CpsLabel>
    <br />
    <CpsFormatBytes value={8} unit="bit" />
    <br />
    <br />

    <CpsLabel variant="secondary">8.192 bits:</CpsLabel>
    <br />
    <CpsFormatBytes value={8192} unit="bit" />
    <br />
    <br />

    <CpsLabel variant="secondary">8.388.608 bits:</CpsLabel>
    <br />
    <CpsFormatBytes value={8388608} unit="bit" />
    <br />
    <br />

    <CpsLabel variant="secondary">8.589.934.592 bits:</CpsLabel>
    <br />
    <CpsFormatBytes value={8589934592} unit="bit" />
    <br />
    <br />

    <CpsLabel variant="secondary">8.796.093.022.208 bits:</CpsLabel>
    <br />
    <CpsFormatBytes value={8796093022208} unit="bit" />
    <br />
    <br />

    <CpsLabel variant="secondary">9.007.199.254.740.992 bits:</CpsLabel>
    <br />
    <CpsFormatBytes value={9007199254740992} unit="bit" />
  </>
);
```

### Localização forçada

O idioma atualmente em uso no navegador do usuário é utilizado para a formatação padrão da parte numérica do resultado. Use o atributo `lang` para definir um idioma de formatação de forma explícita.

```html preview
<cps-label variant="secondary">1,25 bits (em português):</cps-label><br />
<cps-format-bytes value="1.25" unit="bit" lang="pt"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 bits (em inglês):</cps-label><br />
<cps-format-bytes value="1.25" unit="bit" lang="en"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 bytes (em português):</cps-label><br />
<cps-format-bytes value="10" unit="bit" lang="pt"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 bytes (em inglês):</cps-label><br />
<cps-format-bytes value="10" unit="bit" lang="en"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 kB (em português):</cps-label><br />
<cps-format-bytes value="10240" unit="bit" lang="pt"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 kB (em inglês):</cps-label><br />
<cps-format-bytes value="10240" unit="bit" lang="en"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 MB (em português):</cps-label><br />
<cps-format-bytes value="10485760" unit="bit" lang="pt"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 MB (em inglês):</cps-label><br />
<cps-format-bytes value="10485760" unit="bit" lang="en"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 GB (em português):</cps-label><br />
<cps-format-bytes value="10737418240" unit="bit" lang="pt"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 GB (em inglês):</cps-label><br />
<cps-format-bytes value="10737418240" unit="bit" lang="en"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 TB (em português):</cps-label><br />
<cps-format-bytes value="10995116277760" unit="bit" lang="pt"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 TB (em inglês):</cps-label><br />
<cps-format-bytes value="10995116277760" unit="bit" lang="en"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 PB (em português):</cps-label><br />
<cps-format-bytes value="11258999068426240" unit="bit" lang="pt"></cps-format-bytes>
<br /><br />

<cps-label variant="secondary">1,25 PB (em inglês):</cps-label><br />
<cps-format-bytes value="11258999068426240" unit="bit" lang="en"></cps-format-bytes>
```

```jsx react
import { CpsFormatBytes } from '@cps-elements/web/react/format-bytes';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <CpsLabel variant="secondary">1,25 bits (em português):</CpsLabel>
    <br />
    <CpsFormatBytes value={1.25} unit="bit" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 bits (em inglês):</CpsLabel>
    <br />
    <CpsFormatBytes value={1.25} unit="bit" lang="en" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 bytes (em português):</CpsLabel>
    <br />
    <CpsFormatBytes value={10} unit="bit" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 bytes (em inglês):</CpsLabel>
    <br />
    <CpsFormatBytes value={10} unit="bit" lang="en" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 kB (em português):</CpsLabel>
    <br />
    <CpsFormatBytes value={10240} unit="bit" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 kB (em inglês):</CpsLabel>
    <br />
    <CpsFormatBytes value={10240} unit="bit" lang="en" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 MB (em português):</CpsLabel>
    <br />
    <CpsFormatBytes value={10485760} unit="bit" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 MB (em inglês):</CpsLabel>
    <br />
    <CpsFormatBytes value={10485760} unit="bit" lang="en" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 GB (em português):</CpsLabel>
    <br />
    <CpsFormatBytes value={10737418240} unit="bit" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 GB (em inglês):</CpsLabel>
    <br />
    <CpsFormatBytes value={10737418240} unit="bit" lang="en" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 TB (em português):</CpsLabel>
    <br />
    <CpsFormatBytes value={10995116277760} unit="bit" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 TB (em inglês):</CpsLabel>
    <br />
    <CpsFormatBytes value={10995116277760} unit="bit" lang="en" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 PB (em português):</CpsLabel>
    <br />
    <CpsFormatBytes value={11258999068426240} unit="bit" lang="pt" />
    <br />
    <br />

    <CpsLabel variant="secondary">1,25 PB (em inglês):</CpsLabel>
    <br />
    <CpsFormatBytes value={11258999068426240} unit="bit" lang="en" />
  </>
);
```

?> Você pode identificar linguagens de forma genérica (como `pt`), de forma explícita com uma especialização local (como `pt-BR`), ou ainda com variações de forma menos usuais. As variações possíveis podem ser encontradas no documento [BCP 47](http://www.rfc-editor.org/rfc/bcp/bcp47.txt) da <abbr title="Internet Engineering Task Force">IETF</abbr>.

[component-metadata:cps-format-bytes]

<style>
.format-bytes-overview cps-input::part(form-control-label) {
  color: var(--cps-color-text-secondary);
  font: var(--cps-font-body);
}
</style>
