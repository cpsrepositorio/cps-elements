# Avatar

[component-header:cps-avatar]

Por padrão, um ícone genérico de silhueta de pessoa será exibido. Você pode personalizar avatares adicionando imagens, ícones ou iniciais personalizados. Você sempre deve fornecer um `label` descrevendo o que este avatar apresenta, tanto para acessibilidade em dispositivos assistivos quanto para exibição como dica de ferramenta.

```html preview
<cps-avatar label="Alguma pessoa desconhecida"></cps-avatar>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';

const App = () => <CpsAvatar label="Alguma pessoa desconhecida" />;
```

## Exemplos

### Imagens

Para usar uma imagem para o avatar, defina o atributo `image` (mas não deixe de informar um `label` ainda assim).

```html preview
<cps-avatar image="https://i.pravatar.cc/48?img=3" label="John Doe" loading="lazy"></cps-avatar>
<cps-avatar image="https://i.pravatar.cc/48?img=5" label="Jane Doe" loading="lazy"></cps-avatar>
<cps-avatar image="https://i.pravatar.cc/48?img=999" label="Erro proposital" loading="lazy"></cps-avatar>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';

const App = () => (
  <CpsAvatar image="https://i.pravatar.cc/48?img=3" label="John Doe" loading="lazy" />
  <CpsAvatar image="https://i.pravatar.cc/48?img=5" label="Jane Doe" loading="lazy" />
  <CpsAvatar image="https://i.pravatar.cc/48?img=999" label="Erro proposital" loading="lazy" />
);
```

Quando definida, a imagem tem prioridade sobre iniciais e ícones personalizados, ainda que estes também sejam informados. Caso ocorra um erro no carregamento da imagem, o avatar exibirá iniciais ou ícone como estratégia de _fallback_, dependendo do que tiver sido fornecido. Caso nenhum dos dois tenha sido informado, o avatar exibirá o ícone padrão.

?> Assim como imagens nativas, por padrão as imagens de avatar são carregadas durante o carregamento inicial da página (todos os avatares existentes de uma vez, independentemente de estarem em exibição ou não). Embora isso possa ser útil às vezes (e é o comportamento padrão por ser o comportamento legado de `<img>`), normalmente significa carregar muitos dados potencialmente desnecessários.<br><br>Assim, é recomendado usar o atributo `loading` como `lazy` para garantir o carregamento sob demanda apenas quando o avatar se tornar visível durante a rolagem da página. Leia mais sobre [Carregamento lento de imagens](https://web.dev/browser-level-image-lazy-loading/).

### Iniciais automáticas

Caso você não tenha uma imagem para usar, utilize o atributo `initials` como `auto` para gerar iniciais automáticas a partir da primeira e última palavras existentes no `label` do avatar.

```html preview
<cps-avatar initials="auto" label="Erick Petrucelli"></cps-avatar>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';

const App = () => <CpsAvatar initials="auto" label="Erick Petrucelli" />;
```

### Iniciais explícitas

Você também pode definir iniciais explicitamente, usando o atributo `initials` com um valor de texto.

```html preview
<cps-avatar initials="X" label="Antigo Twitter"></cps-avatar>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';

const App = () => <CpsAvatar initials="X" label="Antigo Twitter" />;
```

O avatar foi concebido para a exibição máxima de duas iniciais. Caso defina mais, apenas as duas primeiras serão exibidas.

```html preview no-vue
<cps-avatar initials="ABC" label="Rede de televisão ABC"></cps-avatar>
```

### Ícones personalizados

Quando nenhuma imagem ou iniciais são definidas, um ícone padrão será exibido. O ícone padrão mostra um ícone genérico de silhueta de usuário, mas você pode personalizar isso através do _slot_ `icon`.

```html preview
<cps-avatar label="Figura">
  <cps-icon slot="icon" name="image"></cps-icon>
</cps-avatar>

<cps-avatar label="Documento">
  <cps-icon slot="icon" name="document"></cps-icon>
</cps-avatar>

<cps-avatar label="Pasta">
  <cps-icon slot="icon" name="folder"></cps-icon>
</cps-avatar>
```

```jsx react
import { CpsAvatar, CpsIcon } from '@cps-elements/web/react';

const App = () => (
  <>
    <CpsAvatar label="Avatar with an image icon">
      <CpsIcon slot="icon" name="image" />
    </CpsAvatar>

    <CpsAvatar label="Avatar with an archive icon">
      <CpsIcon slot="icon" name="archive" />
    </CpsAvatar>

    <CpsAvatar label="Avatar with a briefcase icon">
      <CpsIcon slot="icon" name="briefcase" />
    </CpsAvatar>
  </>
);
```

### Tamanhos

Um avatar padrão segue uma medida de `2em`, isto é, o dobro do tamanho da fonte atual do local em que está aplicado. Isso simplifica sua utilização em meio a outros conteúdos de diversos tamanhos tipográficos.

Entretanto, para um ajuste fino, o tamanho do avatar pode ser definido através da sobrescrita da propriedade CSS `--avatar-size`, seja em um avatar específico ou mesmo em qualquer contêiner superior com vários avatares dentro.

```html preview
<div>
  <cps-label>Por avatar:</cps-label>
  <cps-avatar label="Fulano de Tal" initials="auto" style="--avatar-size: 1.5rem"></cps-avatar>
  <cps-avatar
    image="https://i.pravatar.cc/48?img=8"
    label="Ciclano da Silva"
    loading="lazy"
    style="--avatar-size: 3rem"
  ></cps-avatar>
  <cps-avatar label="Algum anônimo" style="--avatar-size: 4.5rem"></cps-avatar>
</div>
<br />
<div style="--avatar-size: 1.5rem">
  <cps-label>No contêiner:</cps-label>
  <cps-avatar label="Fulano de Tal" initials="auto"></cps-avatar>
  <cps-avatar image="https://i.pravatar.cc/48?img=8" label="Ciclano da Silva" loading="lazy"></cps-avatar>
  <cps-avatar label="Algum anônimo"></cps-avatar>
</div>
<br />
<div style="--avatar-size: 4.5rem">
  <cps-label>No contêiner:</cps-label>
  <cps-avatar label="Fulano de Tal" initials="auto"></cps-avatar>
  <cps-avatar image="https://i.pravatar.cc/72?img=8" label="Ciclano da Silva" loading="lazy"></cps-avatar>
  <cps-avatar label="Algum anônimo"></cps-avatar>
</div>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';
import { CpsLabel } from '@cps-elements/web/react/label';

const App = () => (
  <>
    <div>
      <CpsLabel>Por avatar:</CpsLabel>
      <CpsAvatar label="Fulano de Tal" initials="auto" style={{ '--avatar-size': '1.5rem' }} />
      <CpsAvatar
        image="https://i.pravatar.cc/48?img=8"
        label="Ciclano da Silva"
        loading="lazy"
        style={{ '--avatar-size': '3rem' }}
      />
      <CpsAvatar label="Algum anônimo" style={{ '--avatar-size': '4.5rem' }} />
    </div>
    <br />
    <div style={{ '--avatar-size': '1.5rem' }}>
      <CpsLabel>No contêiner:</CpsLabel>
      <CpsAvatar label="Fulano de Tal" initials="auto" />
      <CpsAvatar image="https://i.pravatar.cc/48?img=8" label="Ciclano da Silva" loading="lazy" />
      <CpsAvatar label="Algum anônimo" />
    </div>
    <br />
    <div style={{ '--avatar-size': '4.5rem' }}>
      <CpsLabel>No contêiner:</CpsLabel>
      <CpsAvatar label="Fulano de Tal" initials="auto" />
      <CpsAvatar image="https://i.pravatar.cc/72?img=8" label="Ciclano da Silva" loading="lazy" />
      <CpsAvatar label="Algum anônimo" />
    </div>
  </>
);
```

?> Embora qualquer tamanho possa ser utilizado na prática, recomendamos evitar avatares menores que `24px`, pois podem dificultar a leitura das iniciais ou a identificação de suas imagens. Além disso, atenção ao utilizar avatares maiores que `72px`, que podem acabar se tornando incompreensíveis como avatares, tornando-se meras imagens comuns no _layout_.

### Formatos

Use o atributo `shape` para definir o formato do avatar, sendo que o padrão é circular.

```html preview
<cps-avatar shape="square" label="Avatar quadrado"></cps-avatar>
<cps-avatar shape="rounded" label="Avatar arredondado"></cps-avatar>
<cps-avatar shape="circle" label="Avatar circular"></cps-avatar>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';

const App = () => (
  <>
    <CpsAvatar shape="square" label="Avatar quadrado" />
    <CpsAvatar shape="rounded" label="Avatar arredondado" />
    <CpsAvatar shape="circle" label="Avatar circular" />
  </>
);
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, pode ter observado que as [variações de avatar](https://cpsrepositorio.github.io/cps-design-system/documentacao/avatar.html#variacoes) só apresentam avatares em formato circular. De fato, recomendamos _manter o formato circular_ padrão de forma geral.<br><br>Entretanto, existem alguns casos de uso úteis ao variar formatos, como o caso de sua aplicação usar diferentes formatos de avatar para diferentes tipos de entidade. Por exemplo, você pode manter `circle` para pessoas físicas e adotar algo como `square` ou `rounded` para pessoas jurídicas, facilitando a compreensão imediata do usuário sobre o tipo diferente de entidade em uma lista que as mistura. Evidentemente, esta é uma estratégia baseada em memorização de formato que será efetiva para usuários frequentes e experientes com sua aplicação, sendo irrelevante e até estranha para aplicações em que usuários não são frequentes e/ou variam bastante ao longo do tempo.

### Cor de fundo

Um problema típico de aplicações que usam muitos avatares é que muitas entidades podem não ter imagens disponíveis (por exemplo, a maioria de seus usuários pode não ter o costume de submeter imagens de perfil). Isso pode acabar trazendo certa monotonia a interfaces planejadas com muitos avatares em mente.

A estratégia desta biblioteca, assim como recomenda o CPS Design System, é utilizar cores de fundo para avatares que não possuem imagens, comportamento ativado por padrão através do valor `auto` no atributo `color`.

Entretanto, caso a geração de cores atrapalhe seu caso de uso específico, você pode definir uma cor CSS para o fundo do avatar através do atributo `color`, ou mesmo usar o valor `none` para manter um fundo cinza neutro em todos. Observe que ao informar uma cor explícita, [variáveis de estilo de cor](/variáveis-de-estilo/cores) são permitidas, como `var(--cps-palette-brand-500)`. Observe também que, evidentemente, ao usar imagem no avatar, a geração ou a aplicação de cor de fundo é sempre ignorada.

```html preview
<div>
  <cps-label>Cor automática (padrão):</cps-label>
  <cps-avatar label="João Ninguém"></cps-avatar>
  <cps-avatar label="Erick Petrucelli" initials="auto"></cps-avatar>
  <cps-avatar image="https://i.pravatar.cc/48?img=11" label="Beltrano dos Santos" loading="lazy"></cps-avatar>
</div>

<div>
  <cps-label>Cor explícita informada:</cps-label>
  <cps-avatar label="João Ninguém" color="var(--cps-palette-brand-500)"></cps-avatar>
  <cps-avatar label="Erick Petrucelli" initials="auto" color="var(--cps-palette-brand-500)"></cps-avatar>
  <cps-avatar
    image="https://i.pravatar.cc/48?img=11"
    label="Beltrano dos Santos"
    loading="lazy"
    color="var(--cps-palette-brand-500)"
  ></cps-avatar>
</div>

<div>
  <cps-label>Forçando não usar cor:</cps-label>
  <cps-avatar label="João Ninguém" color="none"></cps-avatar>
  <cps-avatar label="Erick Petrucelli" initials="auto" color="none"></cps-avatar>
  <cps-avatar
    image="https://i.pravatar.cc/48?img=11"
    label="Beltrano dos Santos"
    loading="lazy"
    color="none"
  ></cps-avatar>
</div>
```

```jsx react
import { CpsAvatar } from '@cps-elements/web/react/avatar';

const App = () => (
  <>
    <CpsAvatar label="Avatar com cor de fundo automática" />
    <CpsAvatar label="Avatar com cor de fundo definida" color="var(--cps-palette-brand-500)" />
    <CpsAvatar label="Avatar com fundo cinza neutro" color="none" />
  </>
);
```

?> A geração de cores se baseia em um algoritmo de _hash_ executado a partir do valor de `label` informado para cada avatar, realizando alguns deslocamentos de _bit_ e transformando o resultado em uma cor [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) que se encaixa bem dentro dos esquemas de cores dos temas claro e escuro.<br><br>Esta estratégia, apesar de passar uma sensação de aleatoriedade de cores em uma interface cheia de avatares, garante que a mesma cor será sempre gerada para um mesmo `label`, o que é importante para manter a consistência visual para uma mesma entidade ao longo do tempo, melhorando a usabilidade.

### Com distintivos

Um dos casos de uso mais comuns para distintivos ([_badges_](/componentes/badge)) é anexá-los a avatares. Para facilitar, os _badges_ serão posicionados automaticamente no canto superior direito quando forem filhos de um avatar. Utilize o _slot_ `badge` do avatar ao injetar este conteúdo, para não interferir no restante da renderização do avatar.

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

### Grupo de avatares

Uma apresentação comum de avatares é em grupos, como em uma lista de pessoas. Embora comum, é um _layout_ tão facilmente obtido com poucas linhas de CSS que optamos por não oferecer um componente específico para isso.

```html preview
<div class="avatar-group">
  <cps-avatar image="https://i.pravatar.cc/48?img=17" label="Sawyer Hawkins"></cps-avatar>
  <cps-avatar label="Nathaniel Mendez" initials="auto"></cps-avatar>
  <cps-avatar image="https://i.pravatar.cc/48?img=15" label="Kareem Sanchez"></cps-avatar>
  <cps-avatar image="https://i.pravatar.cc/48?img=13" label="Landon Calderon"></cps-avatar>
  <cps-avatar image="https://i.pravatar.cc/48?img=18" label="Shaun Mercado"></cps-avatar>
  <cps-avatar label="Tara Valdez" initials="auto"></cps-avatar>
</div>

<style>
  .avatar-group cps-avatar:not(:first-of-type) {
    margin-left: -1.125em;
  }

  .avatar-group cps-avatar::part(base) {
    border: solid 2px var(--cps-color-background-solid-tertiary);
  }
</style>
```

```jsx react
import { CpsAvatar, CpsIcon } from '@cps-elements/web/react';

const css = `
  .avatar-group cps-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group cps-avatar::part(base) {
    border: solid 2px var(--cps-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <CpsAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <CpsAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <CpsAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <CpsAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:cps-avatar]
