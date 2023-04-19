# Angular

[Angular](https://angular.io/) é um tradicional _framework_ JavaScript que [funciona perfeitamente](https://custom-elements-everywhere.com/#angular) com elementos customizados, então usar CPS Elements em seus aplicativos Angular ocorre com facilidade. Inclusive, os códigos em HTML de todos os exemplos de código desta documentação são naturalmente funcionais nos arquivos HTML de componentes Angular.

Por baixo dos panos, aplicações Angular são por padrão empacotadas com Webpack, portanto segue-se praticamente as mesmas instruções de [instalação com empacotador](/fundamentos/instalação#instalação-com-empacotador). Se estiver com pressa, aprecie este [repositório de exemplo](https://github.com/ErickPetru/cps-elements-example-angular) de projeto Angular + Webpack + CPS Elements, com [pré-visualização no CodeSandbox](https://codesandbox.io/p/github/ErickPetru/cps-elements-example-angular/main) embutida abaixo. Os detalhes de configuração estão documentados a seguir.

<div class="codepen" style="height: 420px">
  <iframe
    src="https://codesandbox.io/p/github/ErickPetru/cps-elements-example-angular/main?file=%2Fsrc%2Fapp%2Fapp.module.ts&workspace=%7B%22activeFilepath%22%3A%22%2Fsrc%2Fapp%2Fapp.module.ts%22%2C%22openFiles%22%3A%5B%22%2Fsrc%2Fapp%2Fapp.module.ts%22%2C%22%2Fsrc%2Fmain.ts%22%2C%22%2Fsrc%2Fapp%2Fapp.component.ts%22%5D%2C%22spaces%22%3A%7B%22previewAndTerminal%22%3A%7B%22key%22%3A%22previewAndTerminal%22%2C%22name%22%3A%22Preview%22%2C%22devtools%22%3A%5B%7B%22key%22%3A%22preview%22%2C%22type%22%3A%22PREVIEW%22%2C%22taskId%22%3A%22dev%22%2C%22port%22%3A4200%2C%22isMinimized%22%3Afalse%7D%2C%7B%22key%22%3A%22terminal%22%2C%22type%22%3A%22TASK_LOG%22%2C%22taskId%22%3A%22dev%22%2C%22isMinimized%22%3Atrue%7D%5D%7D%7D%2C%22currentSpace%22%3A%22previewAndTerminal%22%2C%22spacesOrder%22%3A%5B%22previewAndTerminal%22%5D%7D"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
</div>

## Instalação

Para começar com CPS Elements e Angular, primeiramente você precisa instalar nosso pacote NPM.

```bash
npm install @cps-elements/web
```

Como próximo passo, [inclua um tema](/fundamentos/temas) importando-o diretamente no arquivo de estilos principal (usualmente, `styles.css`). Por exemplo, se você quiser usar somente o tema claro:

```css
@import '@cps-elements/web/themes/light.css';
```

Em seguida, em seu arquivo principal (usualmente, `main.ts`), defina o [caminho base](/fundamentos/instalação#configurando-o-caminho-base) para ícones e outros recursos. Por exemplo, se você quiser carregar ativos através do CDN:

```js
import { setBasePath } from '@cps-elements/web/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@cps-elements/web');
```

?> Se preferir não usar o CDN para ativos, você pode criar uma tarefa de tempo de compilação que copia `node_modules/@cps-elements/web/assets` para a pasta pública servida pelo Webpack, bastando apontar o caminho base para essa pasta em seu arquivo principal. Mais detalhes sobre isso em [empacotando com Webpack](/fundamentos/instalação#empacotando-com-webpack).

## Configuração

Para efetivamente permitir a utilização de elementos customizados em sua aplicação Angular, você precisa aplicar o esquema de elementos customizados no módulo raiz da aplicação (usualmente, `app.module.ts`).

```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Esquema de elementos customizados.
})
export class AppModule {}
```

Agora você já pode usar os componentes CPS Elements diretamente no HTML dos componentes de sua aplicação Angular!

## Utilização

Usar CPS Elements com Angular é certamente familiar para quem está acostumado com tal _framework_, sendo que todo o [entendimento geral sobre Angular](https://angular.io/guide/understanding-angular-overview) não sofre qualquer divergência de uso.

Não é de se surpreender, afinal CPS Elements é baseado em Web Components, informados diretamente no código HTML dos componentes Angular e que, após carregados pelo navegador, operam como elementos HTML tradicionais.

### Re-exportando componentes

Em um cenário típico em que seus componentes Angular estarão organizados em vários arquivos, onde o layout em si encontra-se em um arquivo `[nome].component.html` e o código em si em um arquivo `[nome].component.ts`, você pode re-exportar os componentes CPS Elements diretamente no arquivo `[nome].component.ts` para que possam ser referenciados no arquivo `[nome].component.html`. Essa re-exportação é essencial para que o Angular possa reconhecer os componentes CPS Elements como parte do _bundle_ a ser gerado junto ao restante dos _scripts_ da aplicação.

```js
// No arquivo [nome].component.ts...
export { CpsButton } from '@cps-elements/web/components/button';
```

```html
<!-- No arquivo [nome].component.html... -->
<cps-button variant="accent">Clique</cps-button>
```

Você pode encontrar a linha de importação de um componente, pronta para apenas _copiar e colar_, na seção _"Importação"_ da própria documentação de cada componente. Neste caso em que o componente não é utilizado dentro do código TypeScript do componente Angular, você pode simplesmente alterar `import` por `export`, conforme exemplificado.

!> Assim como descrito em [importações individuais](/fundamentos/instalação#importações-individuais), é possível re-exportar componentes diretamente por desestruturação do diretório raiz (por exemplo, `export { CpsButton } from '@cps-elements/web'`). Isso não é necessariamente incorreto quando se usa um empacotador, mas deixará para ele a responsabilidade de varrer e eliminar importações desnecessárias do diretório raiz (processo conhecido como _three-shaking_).<br><br>Escolher a dedo os arquivos específicos dos componentes, como demonstrado acima, garante que o funcionamento e as configurações do empacotador não interfiram na exata inclusão, em seu _bundle_ final, de apenas os _scripts_ mínimos necessários dos componentes CPS Elements que você efetivamente está usando.

### Importando e referenciando componentes

Em determinadas situações, você pode precisar acessar programaticamente um componente CPS Elements utilizado em seu componente Angular. Para isso, você pode importar o componente (ao invés de re-exportar) no arquivo `[nome].component.ts` e referenciá-lo em uma propriedade do componente com o _decorator_ [`@ViewChild`](https://angular.io/api/core/ViewChild).

```js
import { CpsButton } from '@cps-elements/web/components/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ExampleComponent implements OnInit {
  // Use @ViewChild para dispor de uma referência ao elemento #my-button existente no HTML.
  @ViewChild('my-button')
  myButton?: ElementRef<CpsButton>;

  hideMyButton() {
    // Use nativeElement para acessar o elemento DOM nativo do componente.
    this.myButton?.nativeElement.hidden = true;
  }

  ngOnInit() {
    // Apenas um exemplo de uso, esconde o botão durante a inicialização.
    this.hideMyButton();
  }
}
```

### Vinculando dados e eventos

Tudo que você já sabe sobre [escrever _templates_ HTML](https://angular.io/guide/template-overview) em Angular, como [responder a eventos](https://angular.io/guide/event-binding), bem como todos os seus outros conceitos essenciais, continua aplicável como esperado.

```js
// Re-exportando componentes CPS Elements para acesso no template HTML.
export { CpsButton } from '@cps-elements/web/components/button';
export { CpsIcon } from '@cps-elements/web/components/icon';

// O resto é Angular como de costume.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class SampleComponent {
  isWaiting = false;
  message = '';

  onClick() {
    if (this.isWaiting) return;

    this.isWaiting = true;
    setTimeout(() => {
      this.message = `Atualizado às ${new Date().toLocaleTimeString()}.`;
      this.isWaiting = false;
    }, 1000);
  }
}
```

```html
<!-- CPS Elements no template sem ressalvas, com vínculo reativo de dados e eventos. -->
<cps-button variant="accent" [waiting]="isWaiting" (click)="onClick()">
  <cps-icon slot="prefix" name="arrow-right" />
  Clique
</cps-button>

<p *ngIf="message">
  <cps-icon library="uil" name="clock-mono" />
  {{ message }}
</p>
```
