# Badge

[component-header:cps-badge]

```html preview
<cps-badge></cps-badge>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';

const App = () => <CpsBadge></CpsBadge>;
```

A versão mínima do distintivo é um pequeno círculo. Use-o para indicar pequenos pontos de atenção na interface, como adição ou atualização de um elemento após uma ação do usuário, ou após uma ação em tempo real a partir de um evento externo.

Um cenário mais recorrente de utilização de _badge_ é para indicar a quantidade de itens em uma lista ou similar. Nesse caso, o _badge_ deve ser posicionado próximo ao elemento em questão e ser preenchido com o numeral desejado.

```html preview
<cps-badge>1</cps-badge>
<cps-badge>10</cps-badge>
<cps-badge>100</cps-badge>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';

const App = () => (
  <>
    <CpsBadge>1</CpsBadge>
    <CpsBadge>10</CpsBadge>
    <CpsBadge>100</CpsBadge>
  </>
);
```

?> Embora um _slot_ padrão possa ser preenchido com qualquer conteúdo textual ou mesmo com _tags_ e hierarquia complexa, não é recomendado utilizar textos longos, hierarquias de elementos internos, ou mesmo quebrar linhas dentro do _badge_. Além de não ficar esteticamente agradável a exibição de um valor muito extenso em um _badge_, ressalta-se que este tipo de elemento é um destaque sútil, então não deve ser o foco principal da interface e não deve ocupar muito espaço.<br><br>Sugerimos que utilize apenas palavras individuais e valores puramente numéricos, inclusive abreviando-os caso ultrapassem as dezenas. Por exemplo, ao invés de <cps-badge>751023</cps-badge>, use apenas um indicativo do valor acima do milhar: <cps-badge>999+</cps-badge>.

## Exemplos

### Variantes

Use o atributo `variant` para definir a variação visual do distintivo.

```html preview
<cps-badge>Neutro</cps-badge>
<cps-badge variant="informative">Informativo</cps-badge>
<cps-badge variant="warning">Alerta</cps-badge>
<cps-badge variant="critical">Crítico</cps-badge>
<cps-badge variant="success">Sucesso</cps-badge>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';

const App = () => (
  <>
    <CpsBadge>Neutro</CpsBadge>
    <CpsBadge variant="informative">Informativo</CpsBadge>
    <CpsBadge variant="warning">Alerta</CpsBadge>
    <CpsBadge variant="critical">Crítico</CpsBadge>
    <CpsBadge variant="success">Sucesso</CpsBadge>
  </>
);
```

### Retangular

Por padrão, _badges_ são circulares. Use o atributo `square` para forçar bordas retas.

```html preview
<cps-badge square>Neutro</cps-badge>
<cps-badge variant="informative" square>Informativo</cps-badge>
<cps-badge variant="warning" square>Alerta</cps-badge>
<cps-badge variant="critical" square>Crítico</cps-badge>
<cps-badge variant="success" square>Sucesso</cps-badge>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';

const App = () => (
  <>
    <CpsBadge square>Neutro</CpsBadge>
    <CpsBadge variant="informative" square>
      Informativo
    </CpsBadge>
    <CpsBadge variant="warning" square>
      Alerta
    </CpsBadge>
    <CpsBadge variant="critical" square>
      Crítico
    </CpsBadge>
    <CpsBadge variant="success" square>
      Sucesso
    </CpsBadge>
  </>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, para garantir plena conformidade com as [variações de _badge_](https://cpsrepositorio.github.io/cps-design-system/documentacao/badge.html#variacoes), não utilize o atributo `square`. Ele está disponível para situações que não exigem tal aderência.

### Ícone automático

Use o atributo `icon` para que um _badge_ vazio apresente automaticamente ícone contextual de acordo com sua variação.

```html preview
<cps-badge icon></cps-badge>
<cps-badge variant="informative" icon></cps-badge>
<cps-badge variant="warning" icon></cps-badge>
<cps-badge variant="critical" icon></cps-badge>
<cps-badge variant="success" icon></cps-badge>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';

const App = () => (
  <>
    <CpsBadge icon></CpsBadge>
    <CpsBadge variant="informative" icon></CpsBadge>
    <CpsBadge variant="warning" icon></CpsBadge>
    <CpsBadge variant="critical" icon></CpsBadge>
    <CpsBadge variant="success" icon></CpsBadge>
  </>
);
```

### Ícone personalizado

Use o _slot_ padrão informando um `<cps-icon>` como único elemento filho.

```html preview
<cps-badge><cps-icon name="arrow-up"></cps-icon></cps-badge>
<cps-badge variant="informative"><cps-icon name="arrow-right"></cps-icon></cps-badge>
<cps-badge variant="warning"><cps-icon name="arrow-down"></cps-icon></cps-badge>
<cps-badge variant="critical"><cps-icon name="arrow-left"></cps-icon></cps-badge>
<cps-badge variant="success"><cps-icon name="arrow-counterclockwise"></cps-icon></cps-badge>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';
import { CpsIcon } from '@cps-elements/web/react/icon';

const App = () => (
  <>
    <CpsBadge>
      <CpsIcon name="arrow-up" />
    </CpsBadge>
    <CpsBadge variant="informative">
      <CpsIcon name="arrow-right" />
    </CpsBadge>
    <CpsBadge variant="warning">
      <CpsIcon name="arrow-down" />
    </CpsBadge>
    <CpsBadge variant="critical">
      <CpsIcon name="arrow-left" />
    </CpsBadge>
    <CpsBadge variant="success">
      <CpsIcon name="arrow-counterclockwise" />
    </CpsBadge>
  </>
);
```

### Efeito pulsante

Use o atributo `pulse` para chamar atenção para o _badge_ com uma animação sutil.

```html preview
<div class="badge-pulse">
  <cps-badge pulse>1</cps-badge>
  <cps-badge variant="informative" pulse>2</cps-badge>
  <cps-badge variant="warning" pulse>3</cps-badge>
  <cps-badge variant="critical" pulse>4</cps-badge>
  <cps-badge variant="success" pulse>5</cps-badge>
</div>

<style>
  .badge-pulse cps-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';

const css = `
  .badge-pulse cps-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <CpsBadge pulse>1</CpsBadge>
      <CpsBadge variant="informative" pulse>
        2
      </CpsBadge>
      <CpsBadge variant="warning" pulse>
        3
      </CpsBadge>
      <CpsBadge variant="critical" pulse>
        4
      </CpsBadge>
      <CpsBadge variant="success" pulse>
        5
      </CpsBadge>
    </div>

    <style>{css}</style>
  </>
);
```

?> O distintivo por natureza chama atenção apenas por sua existência na interface. Portanto, forçar ainda mais atenção com a animação pulsante deve ser usado com cautela. E decidir por usar, recomendados que não o mantenha ativo infinitamente, pois perderia a característica de destaque com o tempo, e ainda poderia incomodar o usuário. Cabe à sua aplicação controlar quando ativar e desativar o efeito, definindo/retirando o atributo `pulse` conforme a lógica desejada.

### Com botões

Um dos casos de uso mais comuns para _badges_ é anexá-los a botões. Para facilitar, os _badges_ serão posicionados automaticamente no canto superior direito quando forem filhos de um botão.

```html preview
<cps-button>
  Lembretes
  <cps-badge>30</cps-badge>
</cps-button>

<cps-button style="margin-inline-start: 1rem">
  Avisos
  <cps-badge variant="warning">8</cps-badge>
</cps-button>

<cps-button style="margin-inline-start: 1rem">
  Problemas
  <cps-badge variant="critical" pulse>6</cps-badge>
</cps-button>
```

```jsx react
import { CpsBadge } from '@cps-elements/web/react/badge';
import { CpsButton } from '@cps-elements/web/react/button';

const App = () => (
  <>
    <CpsButton>
      Lembretes
      <CpsBadge>30</CpsBadge>
    </CpsButton>

    <CpsButton style={{ marginInlineStart: '1rem' }}>
      Avisos
      <CpsBadge variant="warning">8</CpsBadge>
    </CpsButton>

    <CpsButton style={{ marginInlineStart: '1rem' }}>
      Problemas
      <CpsBadge variant="critical" pulse>
        6
      </CpsBadge>
    </CpsButton>
  </>
);
```

### Com avatares

Outro caso de uso comum para _badges_ é anexá-los a avatares. Para facilitar, os _badges_ serão posicionados automaticamente no canto superior direito quando forem filhos de um avatar. Utilize o _slot_ `badge` do avatar ao injetar este conteúdo, para não interferir no restante da renderização do avatar.

```html preview
<cps-avatar image="https://i.pravatar.cc/48?img=17" label="Sawyer Hawkins">
  <cps-badge slot="badge">30</cps-badge>
</cps-avatar>

<cps-avatar label="João Ninguém" style="margin-inline-start: 1rem">
  <cps-badge slot="badge" variant="warning">8</cps-badge>
</cps-avatar>

<cps-avatar label="Erick Petrucelli" initials="auto" style="margin-inline-start: 1rem">
  <cps-badge slot="badge" variant="critical" pulse>6</cps-badge>
</cps-avatar>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';
import { CpsBadge } from '@cps-elements/web/react/badge';

const App = () => (
  <>
    <CpsAvatar image="https://i.pravatar.cc/48?img=17" label="Sawyer Hawkins">
      <CpsBadge slot="badge">30</CpsBadge>
    </CpsAvatar>

    <CpsAvatar label="João Ninguém" style={{ marginInlineStart: '1rem' }}>
      <CpsBadge slot="badge" variant="warning">
        8
      </CpsBadge>
    </CpsAvatar>

    <CpsAvatar label="Erick Petrucelli" initials="auto" style={{ marginInlineStart: '1rem' }}>
      <CpsBadge slot="badge" variant="critical" pulse>
        6
      </CpsBadge>
    </CpsAvatar>
  </>
);
```

[component-metadata:cps-badge]
