# Temas

O CPS Elements foi projetado para ser altamente personalizável por meio de CSS puro. Por padrão, você pode escolher entre um tema claro ou escuro. Como alternativa, você pode criar seu próprio tema.

Um tema nada mais é do que uma folha de estilos que usa a nomenclatura CPS Elements para definir variáveis de estilo, aplicando assim estilos personalizados aos componentes. Para criar um tema, você precisará de um conhecimento razoável de CSS, incluindo [propriedades CSS customizadas](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) e [pseudo-elemento CSS `::part`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part). Para desenvolvedores de componentes, os temas padrão também estão disponíveis como módulos JavaScript exportando objetos [Lit `CSSResult`](https://lit.dev/docs/api/styles/#CSSResult). Você pode encontrá-los em `dist/themes/*.styles.js`, sendo `dist` o diretório de destino da compilação de sua cópia CPS Elements.

!> Criar temas completamente personalizados é um recurso disponibilizado para flexibilizar o CPS Elements para possíveis casos de uso independentes do CPS Design System. Entretanto, se você estiver trabalhando em um projeto aderente ao CPS Design System, _não_ é recomendado criar temas completamente personalizados, pois isso pode comprometer a consistência visual e de experiência do usuário.<br><br>Se você chegou até aqui como membro de uma equipe do CPS, criando ou manutenindo um sistema interno, e ainda assim acredita que precisa de uma estética personalizada para seu projeto em especial, por favor, fale com a [equipe CPS Design System](https://cpsrepositorio.github.io/cps-design-system/guia-visual/#como-me-envolver) para discutir suas necessidades específicas e as possíveis soluções sem abandonar o _design system_.

## Noções básicas de temas

Todos os temas têm como escopo classes usando a convenção `cps-theme-{name}`, onde `{name}` é um valor em minúsculas, possivelmente delimitado por hífen, representando o nome do tema. Os temas claro e escuro incluídos usam os nomes `cps-theme-light` e `cps-theme-dark`, respectivamente. Um tema personalizado chamado _"Rainbow World"_, por exemplo, usaria uma classe chamada `cps-theme-rainbow-world`.

Todos os seletores devem ter como escopo a classe do tema, para garantir a interoperabilidade com outros temas, inclusive evitando que seu tema sobrescreva coisas que não deveria dos temas padrão. Você também deve definir o escopo deles como `:host` para que possam ser importados e aplicados às raízes de todos os elemento customizados da biblioteca.

```css
:host,
.cps-theme-rainbow-world {
  /* ... */
}
```

### Ativando um tema específico

Para ativar um tema, importe-o e aplique a classe do tema ao elemento `<html>`. Este exemplo importa e ativa o tema escuro integrado. Atente-se que `/path/to/cps-elements/web` precisaria ser substituído pelo caminho real onde os arquivos CPS Elements foram instalados, ou a partir de um CDN se preferir, conforme a documentação de [instalação](/fundamentos/instalação) detalha.

```html
<html class="cps-theme-dark">
  <head>
    <link rel="stylesheet" href="/path/to/cps-elements/web/themes/dark.css" />
  </head>

  <body>
    ...
  </body>
</html>
```

?> Há uma exceção a esta regra: o tema claro _não_ precisa ser ativado desta maneira. Para conveniência, por ser considerado o tema padrão, o tema claro tem como escopo `:root` e será ativado automaticamente quando seu estilo é importado.

### Usando vários temas

Você pode ativar temas múltiplos concomitantemente, e ativar cada um deles em contêineres diferentes da página. Este exemplo usa o tema claro em geral, mas com uma barra lateral com tema escuro.

```html
<html>
  <head>
    <link rel="stylesheet" href="/path/to/cps-elements/web/themes/light.css" />
    <link rel="stylesheet" href="/path/to/cps-elements/web/themes/dark.css" />
  </head>

  <body>
    <nav class="cps-theme-dark">
      <!-- Barra lateral com tema escuro. -->
    </nav>

    <!-- Conteúdo geral com tema claro. -->
  </body>
</html>
```

Este é um dos motivos que os temas devem ser definidos para classes específicas, permitindo utilização em conjunto, concomitantemente, sem conflitos de sobrescrita.

## Modo escuro

O tema escuro integrado, além de ser suportado por todos os componentes desta biblioteca, usa uma escala de cores minuciosamente ajustada para cada variável de estilo por nós oferecida.

Portanto, se você estiver usando as variáveis de estilo do CPS Elements para estruturar seus próprios trechos CSS, obterá o modo escuro sem esforço para toda a sua aplicação. Claro que, além de proporcionar uma excelente base, ainda pode ser personalizá-lo de acordo com suas necessidades específicas.

Para usar o tema escuro, adicione a importação de suas variáveis de estilo no `<head>` da sua página.

```html
<link rel="stylesheet" href="/path/to/cps-elements/web/themes/dark.css" />
```

E para ativar o tema, aplique a classe `cps-theme-dark` ao elemento `<html>`.

```html
<html class="cps-theme-dark">
  ...
</html>
```

?> Se você está trabalhando em projeto aderente ao CPS Design System, oferecer modo de cor escuro não é um simples luxo visual, mas sim uma **enfática recomendação** de respeito às preferências do usuário, e até mesmo de acessibilidade. Para mais detalhes sobre a importância do modo escuro, acesse [modos de cor](https://cpsrepositorio.github.io/cps-design-system/guia-visual/cores.html#modos-de-cor) no guia visual do CPS Design System.

### Detectando a preferência de esquema de cores do usuário

Por padrão, CPS Elements não tenta detectar automaticamente a preferência de modo de cor do usuário. Isto pois o tema escuro, apesar de enfaticamente recomendado para aderência ao CPS Design System, pode não ser desejado em todos os casos.

Assim, após importar o arquivo CSS do tema escuro, a detecção de preferência de esquema de cores do usuário deve ser feita em seu próprio aplicativo. Como prática recomendada, para fornecer modo de cor escuro, você deve:

- Verificar [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) e usar seu valor durante o primeiro carregamento.
- Permitir que o usuário substitua a configuração dentro de seu aplicativo, usando algum _toggle_ de modo de cor.
- Lembrar-se da preferência do usuário, e restaurá-la em visitas posteriores, por exemplo com [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Para facilitar, oferecemos um utilitário que segue exatamente os passos descritos acima (e que, aliás, é utilizado também por esta documentação para suportar modos de cor claro e escuro).

Para usá-lo, importe o utilitário `/utilities/theme.js` e invoque-o para detectar a preferência do usuário.

```html
<html>
  <head>
    <link rel="stylesheet" href="/path/to/cps-elements/web/themes/light.css" />
    <link rel="stylesheet" href="/path/to/cps-elements/web/themes/dark.css" />
    <script type="module" src="/path/to/cps-elements/web/utilities/theme.js"></script>
  </head>

  <body>
    <script type="module">
      import { setTheme } from '/path/to/cps-elements/web/utilities/theme.js';

      // Detecta a preferência do usuário e aplica o tema correspondente.
      setTheme('auto');
    </script>
  </body>
</html>
```

Ao informar `'auto'` em `setTheme()`, a detecção da preferência de modo de cor do usuário é executada caso não exista um valor previamente em `localStorage`. Caso queira personalizar o nome da chave utilizada para armazenar tal preferência em `localStorage`, informe como segundo argumento desta função (sobrescrevendo assim o valor padrão `'cps-theme'`).

Você também pode passar `'light'` ou `'dark'` para forçar um tema específico. O utilitário `setTheme()` também retorna a preferência do usuário, para que você possa usá-la para outros fins, como ajustar elementos da interface com base no modo de cor definido durante o carregamento da aplicação.

O utilitário também retorna uma função `toggleTheme()` a qual facilita a construção de um _toggle_ de modo de cor. Por exemplo, você pode usar o seguinte código para alternar entre os modos de cor claro e escuro.

```html preview no-vue
<cps-button class="toggle-color-mode"></cps-button>

<script type="module">
  import { setTheme, toggleTheme } from 'https://cdn.jsdelivr.net/npm/@cps-elements/web//utilities/theme.js';

  const button = document.querySelector('.toggle-color-mode');

  // Detecta a preferência do usuário e aplica o tema correspondente.
  let theme = setTheme('auto');
  button.textContent = `Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`;

  // Alterna o modo de cor quando o botão é clicado.
  button.onclick = function () {
    theme = toggleTheme();
    button.textContent = `Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`;
  };
</script>
```

?> É possível que esta receita precise de ajustes, dependendo do seu caso de uso, por exemplo, para se comunicar com um servidor Web que também precisa saber a preferência do usuário, e talvez até mesmo persistir tal preferência em um banco de dados ao invés de persistir localmente. Mas, em geral, é uma boa base para começar.

## Criando temas

Há dois modos de criar temas. O modo mais fácil é personalizar um tema já existente. O modo avançado é criar um tema do zero. Qual método você escolhe depende dos requisitos do seu projeto e da quantidade de esforço que você está disposto a dedicar.

### Personalizando um tema existente

A forma mais fácil de personalizar o CPS Elements é substituir um dos temas integrados. Você pode fazer isso importando o tema claro ou escuro como base (dependendo de qual oferece o estilo padrão mais próximo de suas necessidades), e então criar uma folha de estilos separada que substitui as [variáveis de estilo](/fundamentos/personalizando#variáveis-de-estilo) e que, eventualmente, adiciona estilos a componentes através de suas [partes CSS](/fundamentos/personalizando#partes-css). Lembre-se de importar seu arquivo de tema _após_ o tema padrão escolhido.

Se você está personalizando o tema claro, você deve limitar seus estilos aos seguintes seletores.

```css
:root,
:host,
.cps-theme-light {
  /* Seus estilos personalizados aqui... */
}
```

Se você está personalizando o tema escuro, você deve limitar seus estilos aos seguintes seletores.

```css
:host,
.cps-theme-dark {
  /* Seus estilos personalizados aqui... */
}
```

Ao personalizar um tema existente, você manterá uma folha de estilos menor contendo apenas as alterações que você fez. Em contraste, [criar um novo tema](#criando-um-novo-tema) requer que você defina explicitamente todas as variáveis de estilo necessárias usadas pela biblioteca. Esta abordagem é melhor preparada para mudanças futuras, pois novos nomes de variáveis de estilo que surgirem em versões subsequentes do CPS Elements já serão considerados pelo tema integrado.

Embora esta abordagem possa parecer mais simples de manutenir, a desvantagem é que seu tema não pode ser ativado independentemente, já que ele estará sempre vinculado ao tema integrado que você está personalizando.

### Criando um novo tema

Criar um novo tema é uma empreitada mais complexa do que [personalizar um tema existente](#personalizando-um-tema-existente). No mínimo, você deve implementar todas as [variáveis de estilo](/fundamentos/personalizando#variáveis-de-estilo) necessárias. A forma mais fácil de fazer isso é clonando explicitamente um dos temas integrados e modificando-o a partir daí.

Ou seja, após escolher se vai utilizar `light.css` ou `dark.css` como base, explicitamente copie o código do arquivo escolhido e cole-o em um novo arquivo. Altere o nome da classe do tema para algo único que tenha a ver com o nome de tema que você quer dar. Assumindo que seu novo tema se chama _"Rainbow World"_, seu tema deve ser definido assim:

```css
:host,
.cps-theme-rainbow-world {
  /* Todo o código copiado do tema original, com as personalizações aplicadas aqui... */
}
```

Ao criar um novo tema, você não estará se respaldando em um tema existente como base. Por não estar vinculado aos temas integrados, você pode ativá-lo independentemente como uma alternativa aos temas integrados. Esta é a abordagem recomendada se você está pensando em disponibilizar seu tema para que outros possam usar, especialmente se está considerando oferecê-lo como tema único para seu caso de uso, sem alternância de modos de cor envolvida.

Você terá, no entanto, que manter seu tema com mais cuidado, já que novas versões do CPS Elements podem introduzir novas variáveis de estilo que seu tema não terá considerado. Por isso, é recomendado que você especifique claramente qual versão do CPS Elements seu tema foi projetado para funcionar, e então trabalhe para mantê-lo atualizado conforme novas versões do CPS Elements forem lançadas.
