# Visually Hidden

[component-header:cps-visually-hidden]

De acordo com o [A11Y Project](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/) (tradução nossa):

> Existem situações no mundo real em que ocultar visualmente o conteúdo pode ser apropriado, enquanto o conteúdo deve permanecer disponível para tecnologias assistivas, como leitores de tela. Por exemplo, ocultar o rótulo de um campo de busca quando um ícone de lupa é utilizado em seu lugar.

Como o conteúdo visualmente oculto pode receber foco ao navegar com a tecla <kbd>Tab</kbd>, o elemento se tornará visível quando estiver focado. Esse comportamento é intencional, pois usuários que enxergam mas ainda assim navegam usando o teclado não conseguiriam determinar onde está o indicador de foco sem isso.

```html preview no-vue
<div>
  <cps-visually-hidden>
    <cps-link href="/">Navegar para a página principal</cps-link>
  </cps-visually-hidden>

  <cps-label>Utilize a tecla <kbd>Tab</kbd> para focar neste exemplo.</cps-label>
</div>
```

## Exemplos

### Âncoras que abrem em nova janela

Existem elementos visuais que trazem algum significado agregado, entretanto usuários que não enxergam nunca teriam qualquer indicação sobre isso.

No exemplo abaixo, por utilizar o utilitário _visually hidden_, leitores de tela podem anunciar _"abre em uma nova janela"_ quando a âncora recebe o foco, ainda que tal texto adicional nunca seja visível para usuários que enxergam.

```html preview
<cps-link href="https://www.cps.sp.gov.br/" target="_blank">
  Visite o portal do Centro Paula Souza
  <cps-visually-hidden>(abre em uma nova janela)</cps-visually-hidden>
  <cps-icon slot="suffix" name="arrow-up-right"></cps-icon>
</cps-link>
```

### Conteúdo contextual adicional

Ao construir a interface pensando em sua estética para usuários que enxergam, muitas vezes pode parecer redundante adicionar um rótulo explicativo extra antes de um conjunto de campos de formulário. Entretanto, este tipo de conteúdo contextual adicional pode ser essencial para usuários não que enxergam.

No exemplo abaixo, por utilizar o utilitário _visually hidden_, o contexto adicional fornecido será anunciado por dispositivos assistivos como leitores de tela, ainda que tal texto adicional nunca seja visível para usuários que enxergam.

```html preview
<cps-card style="max-width: 340px">
  <header>
    <cps-visually-hidden>Informações Pessoais</cps-visually-hidden>
  </header>
  <cps-input label="Nome completo" style="margin-bottom: 1rem"></cps-input>
  <cps-input label="E-mail" type="email"></cps-input>
</cps-card>
```

[component-metadata:cps-visually-hidden]
