# React

[React](https://react.dev/) é uma biblioteca para construção de interfaces, baseada na criação de componentes reutilizáveis de forma declarativa. Em sua atual versão 18, apenas [funciona razoavelmente](https://custom-elements-everywhere.com/#react) com elementos customizados, então usar CPS Elements em seus aplicativos React dependeria de algum esforço adicional.

Para simplificar esta integração, CPS Elements oferece uma versão previamente empacotada para React de cada um de seus componentes, para fornecer uma experiência mais adequada para desenvolvedores React. Inclusive, você pode facilmente alternar entre códigos em HTML ou React, para quase todos os exemplos de código desta documentação.

?> É previsto que a versão 19 traga suporte nativo para elementos customizados, o que tornará a integração com React ainda mais fácil, eliminando a necessidade dos _wrappers_ extras adicionados pelo CPS Elements em cada componente.

Embora um biblioteca simples, React se baseia em uma sintaxe de marcação própria denominada [JSX](https://react.dev/learn#writing-markup-with-jsx) e, portanto, depende de empacotador, seguindo-se praticamente as mesmas instruções de [instalação com empacotador](/fundamentos/instalação#instalação-com-empacotador). Esta página se concentra no uso de React com Vite, embora outros empacotadores sejam viáveis. Se estiver com pressa, aprecie este [repositório de exemplo](https://github.com/ErickPetru/cps-elements-example-react) de projeto React + Vite + CPS Elements, com [pré-visualização no CodeSandbox](https://codesandbox.io/p/github/ErickPetru/cps-elements-example-react/main) embutida abaixo. Os detalhes de configuração estão documentados a seguir.

<div class="codepen" style="height: 420px">
  <iframe
    src="https://codesandbox.io/p/github/ErickPetru/cps-elements-example-react/main?file=vite.config.ts&workspace=%7B%22activeFilepath%22%3A%22vite.config.ts%22%2C%22openFiles%22%3A%5B%22vite.config.ts%22%2C%22%2Fsrc%2Fmain.tsx%22%2C%22%2Fsrc%2FApp.tsx%22%5D%2C%22spaces%22%3A%7B%22previewAndTerminal%22%3A%7B%22key%22%3A%22previewAndTerminal%22%2C%22name%22%3A%22Preview%22%2C%22devtools%22%3A%5B%7B%22key%22%3A%22preview%22%2C%22type%22%3A%22PREVIEW%22%2C%22taskId%22%3A%22dev%22%2C%22port%22%3A5173%2C%22isMinimized%22%3Afalse%7D%2C%7B%22key%22%3A%22terminal%22%2C%22type%22%3A%22TASK_LOG%22%2C%22taskId%22%3A%22dev%22%2C%22isMinimized%22%3Atrue%7D%5D%7D%7D%2C%22currentSpace%22%3A%22previewAndTerminal%22%2C%22spacesOrder%22%3A%5B%22previewAndTerminal%22%5D%7D"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
</div>

## Instalação

Para começar com CPS Elements e React, primeiramente você precisa instalar nosso pacote NPM.

```bash
npm install @cps-elements/web
```

Em seguida, em seu arquivo principal (usualmente, `main.jsx` ou `.tsx`), [inclua um tema](/fundamentos/temas) e defina o [caminho base](/fundamentos/instalação#configurando-o-caminho-base) para ícones e outros recursos. Por exemplo, se você quiser usar somente o tema claro e carregar ativos através do CDN:

```js
import '@cps-elements/web/themes/light.css';
import { setBasePath } from '@cps-elements/web/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@cps-elements/web');
```

?> Se preferir não usar o CDN para ativos, você pode criar uma tarefa de tempo de compilação que copia `node_modules/@cps-elements/web/assets` para a pasta pública servida pelo Vite, bastando apontar o caminho base para essa pasta em seu arquivo principal. Mais detalhes sobre isso em [empacotando com Vite](/fundamentos/instalação#empacotando-com-vite).

Agora você já pode usar os componentes CPS Elements embrulhados para React nos JSX de sua aplicação!

## Utilização

Usar CPS Elements com React é certamente familiar para quem está acostumado com tal biblioteca, especialmente considerando que os componentes empacotados para React são idênticos aos componentes nativos, com a única diferença prática que o nome do componente é escrito em `PascalCase`, em vez de `kebab-case`.

### Importando componentes

Cada componente CPS Elements está disponível para importação como um componente React, em um diretório `/react` do pacote NPM instalado. Observe que você deve importar o _componente embrulhado para React_ em notação `<CpsComponent>`, em vez do `<cps-component>` que representa o _elemento customizado_ nativo.

```jsx
import { CpsButton } from '@cps-elements/web/react/button';

const MyApp = () => <CpsButton variant="accent">Clique</CpsButton>;

export default MyApp;
```

Você pode encontrar a linha de importação de um componente, pronta para apenas _copiar e colar_, na seção _"Importação"_ da própria documentação de cada componente.

!> Assim como descrito em [importações individuais](/fundamentos/instalação#importações-individuais), é possível importar componentes diretamente por desestruturação do diretório raiz (por exemplo, `import { CpsButton } from '@cps-elements/web/react'`). Isso não é necessariamente incorreto quando se usa um empacotador, mas deixará para ele a responsabilidade de varrer e eliminar importações desnecessárias do diretório raiz (processo conhecido como _three-shaking_).<br><br>Escolher a dedo os arquivos específicos dos componentes, como demonstrado acima, garante que o funcionamento e as configurações do empacotador não interfiram na exata inclusão, em seu _bundle_ final, de apenas os _scripts_ mínimos necessários dos componentes CPS Elements que você efetivamente está usando.

### Vinculando dados e eventos

Tudo que você já sabe sobre [escrever _marktup_ com JSX](https://react.dev/learn/writing-markup-with-jsx) do React, como [responder a eventos](https://react.dev/learn/responding-to-events), bem como todos os seus outros conceitos essenciais, continua aplicável como esperado.

```jsx
// Importando componentes CPS Elements embrulhados para React.
import { CpsButton } from '@cps-elements/web/react/button';
import { CpsIcon } from '@cps-elements/web/react/icon';

// O resto é React como de costume.
import { useState } from 'react';

export default function App() {
  const [isWaiting, setIsWaiting] = useState(false);
  const [message, setMessage] = useState('');

  const onClick = () => {
    if (isWaiting) return;

    setIsWaiting(true);
    setTimeout(() => {
      setMessage(`Atualizado às ${new Date().toLocaleTimeString()}.`);
      setIsWaiting(false);
    }, 1000);
  };

  return (
    // CPS Elements no JSX sem ressalvas, com vínculo reativo de dados e eventos.
    <>
      <CpsButton variant="accent" waiting={isWaiting} onClick={onClick}>
        <CpsIcon slot="prefix" name="arrow-right" />
        Clique
      </CpsButton>

      {message ? (
        <p>
          <CpsIcon library="uil" name="clock-mono" />
          &nbsp;
          {message}
        </p>
      ) : null}
    </>
  );
}
```
