# Menu Label

[component-header:cps-menu-label]

```html preview
<cps-menu style="max-width: 200px">
  <cps-menu-label>Frutas</cps-menu-label>
  <cps-menu-item value="apple">Maçã</cps-menu-item>
  <cps-menu-item value="banana">Banana</cps-menu-item>
  <cps-menu-item value="orange">Laranja</cps-menu-item>
  <cps-separator></cps-separator>
  <cps-menu-label>Vegetais</cps-menu-label>
  <cps-menu-item value="broccoli">Brócolis</cps-menu-item>
  <cps-menu-item value="carrot">Cenoura</cps-menu-item>
  <cps-menu-item value="zucchini">Abobrinha</cps-menu-item>
</cps-menu>
```

```jsx react
import { CpsSeparator } from '@cps-elements/web/react/separator';
import { CpsMenu } from '@cps-elements/web/react/menu';
import { CpsMenuLabel } from '@cps-elements/web/react/menu-label';
import { CpsMenuItem } from '@cps-elements/web/react/menu-item';

const App = () => (
  <CpsMenu style={{ maxWidth: '200px' }}>
    <CpsMenuLabel>Frutas</CpsMenuLabel>
    <CpsMenuItem value="apple">Maçã</CpsMenuItem>
    <CpsMenuItem value="banana">Banana</CpsMenuItem>
    <CpsMenuItem value="orange">Laranja</CpsMenuItem>
    <CpsSeparator />
    <CpsMenuLabel>Vegetais</CpsMenuLabel>
    <CpsMenuItem value="broccoli">Brócolis</CpsMenuItem>
    <CpsMenuItem value="carrot">Cenoura</CpsMenuItem>
    <CpsMenuItem value="zucchini">Abobrinha</CpsMenuItem>
  </CpsMenu>
);
```

[component-metadata:cps-menu-label]
