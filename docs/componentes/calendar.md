# Calendário

[component-header:cps-calendar]

```html preview
<cps-calendar></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar />;
```

## Exemplos

### Definindo valores iniciais

Use o atributo `value` para definir a data selecionada inicialmente.

```html preview
<!-- Data do primeiro commit do CPS Elements! 🎉 -->
<cps-calendar value="2023-03-21"></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar value="2023-03-21" />;
```

?> Todas as datas informadas a este componente devem ser representadas como texto em formato [ISO 8601](https://pt.wikipedia.org/wiki/ISO_8601).<br /><br />Ou seja, `AAAA-MM-DD`, isto é, ano com quatro dígitos (por exemplo, `2025`), mês com dois dígitos (sendo janeiro igual a `01` e dezembro igual a `12`), e dia com dois dígitos (por exemplo, `01`, `02`, ... `31`).<br /><br />É responsabilidade do desenvolvedor garantir que tanto meses quanto dias estejam dentro de um intervalo válido (por exemplo, não existe mês `13`, assim como não existe dia `30` no mês `02`).

### Tamanho e o plano de fundo do calendário

Por padrão, o calendário é transparente e fluido, horizontalmente e verticalmente, para se acomodar em diversas situações.

Seria possível sobrescrever os estilos usando [partes CSS](#partes-css), entretanto é mais simples e efetivo apenas colocar o calendário dentro de um container que faça sentido para o seu caso. Por exemplo, um [`<cps-card>`](/componentes/card) com tamanho definido:

```html preview
<cps-card style="max-width: 380px">
  <cps-calendar></cps-calendar>
</cps-card>
```

```jsx react
import { CpsCard } from '@cgtic-cps/web/react/card';
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => (
  <CpsCard style={{ maxWidth: 380 }}>
    <CpsCalendar />
  </CpsCard>
);
```

### Determinando datas mínima e máxima

Use os atributos `min` e `max` para restringir o intervalo de datas selecionáveis.

```html preview
<cps-calendar min="2023-03-20" max="2023-03-24" value="2023-03-21"></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar min="2023-03-20" max="2023-03-24" value="2023-03-21" />;
```

### Alterando o primeiro dia da semana

Use o atributo `first-day-of-week` para alterar o primeiro dia da semana exibido no calendário.

```html preview
<cps-calendar first-day-of-week="monday"></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar firstDayOfWeek="monday" />;
```

?> O primeiro dia da semana depende do idioma atualmente em uso, sendo o Português Brasileiro o idioma padrão desta biblioteca. Portanto, o primeiro dia da semana padrão normalmente será `sunday`, caso não seja sobrescrito com este atributo.

### Desabilitar dias da semana

Use o atributo `disable-weekdays` para desabilitar todos os dias da semana especificados.
É possível informar um único dia da semana a desabilitar (por exemplo, `sunday`) ou uma lista de dias da semana separados por vírgula (por exemplo, `saturday,sunday`).

No exemplo a seguir, selecionar datas nos finais de semana está desabilitado.

```html preview
<cps-calendar disable-weekdays="saturday,sunday"></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar disableWeekdays="saturday,sunday" />;
```

?> Desabilitar determinados dias da semana impede a seleção pelo usuário, mas não impede que um `value` seja programaticamente atribuído com um valor correspondente a um dia desabilitado.

### Desabilitar datas específicas

Use o atributo `disable-dates` para desabilitar datas específicas.

No exemplo a seguir, selecionar os dias 13, 14 ou 24 do mês de março de 2023 está desabilitado.

```html preview
<cps-calendar disable-dates="2023-03-13,2023-03-14,2023-03-24" value="2023-03-21"></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar disableDates="2023-03-13,2023-03-14,2023-03-24" value="2023-03-21" />;
```

?> Desabilitar datas específicas impede a seleção pelo usuário, mas não impede que um `value` seja programaticamente atribuído com um valor correspondente a um dia desabilitado.

### Ocultar células fora do intervalo

Por padrão, células adjacentes fora do intervalo de visualização são exibidas em uma tonalidade de texto em menor destaque. Use o atributo `hide-outside` para ocultar células fora do intervalo em exibição.

Se estiver visualizando um mês, dias de meses adjacentes não serão exibidos. Se estiver visualizando uma década, anos adjacentes não serão exibidos.

```html preview
<cps-calendar hide-outside></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar hideOutside />;
```

!> É altamente recomendado manter visíveis as células fora do intervalo, visto que poder selecionar rapidamente um valor dos intervalos próximos melhora a usabilidade.

### Ocultar rodapé

Por padrão, o calendário exibe um rodapé com _links_ de interação rápida para selecionar a data atual e limpar a seleção (em caso de uma data já estar selecionada). Use o atributo `hide-footer` para esconder o rodapé.

```html preview
<cps-calendar hide-footer></cps-calendar>
```

```jsx react
import { CpsCalendar } from '@cgtic-cps/web/react/calendar';

const App = () => <CpsCalendar hideFooter />;
```

!> É altamente recomendado manter o rodapé visível, para que o usuário tenha acesso aos _links_ de operação rápida.

[component-metadata:cps-calendar]
