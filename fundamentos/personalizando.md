# Personalizando

Os componentes do CPS Elements podem ser personalizados em diferentes níveis. Muitas vezes, a simples personalização de variáveis CSS oferecem o necessário para os casos de uso típicos. Entretanto, personalizações mais avançadas também são possíveis, usando partes CSS dos componentes e propriedades personalizadas.

## Variáveis de estilo

CPS Elements makes use of several design tokens to provide a consistent appearance across components. You can customize them and use them in your own application with pure CSS — no preprocessor required.

Design tokens offer a high-level way to customize the library with minimal effort. There are no component-specific variables, however, as design tokens are intended to be generic and highly reusable. To customize an individual component, refer to the section entitled [Component Parts](#component-parts).

Design tokens are accessed through CSS custom properties that are defined in your theme. Because design tokens live at the page level, they're prefixed with `--cps-` to avoid collisions with other libraries.

To customize a design token, simply override it in your stylesheet using a `:root` block. Here's an example that changes the primary theme to purple based on existing [color primitives](/tokens/color#primitives).

```css
:root {
  /* Changes the primary theme color to purple using primitives */
  --cps-palette-brand-50: 250 245 255;
  --cps-palette-brand-100: 243 232 255;
  --cps-palette-brand-200: 233 213 255;
  --cps-palette-brand-300: 216 180 254;
  --cps-palette-brand-400: 192 132 252;
  --cps-palette-brand-500: 168 85 247;
  --cps-palette-brand-600: 147 51 234;
  --cps-palette-brand-700: 126 34 206;
  --cps-palette-brand-800: 107 33 168;
  --cps-palette-brand-900: 88 28 135;
  --cps-palette-brand-950: 68 22 105;
}
```

Many design tokens are described further along in this documentation. For a complete list, refer to `src/themes/light.css` in the project's [source code](https://github.com/cpsrepositorio/cps-elements/blob/current/src/themes/light.css).

## Component Parts

Whereas design tokens offer a high-level way to customize the library, component parts offer a low-level way to customize individual components. Again, this is done with pure CSS — no preprocessor required.

CPS Elements components use a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate their styles and behaviors. As a result, you can't simply target their internals with the usual CSS selectors. Instead, components expose "parts" that can be targeted with the [CSS part selector](https://developer.mozilla.org/en-US/docs/Web/CSS/::part), or `::part()`.

Here's an example that modifies buttons with the `tomato-button` class.

```html preview
<cps-button class="tomato-button"> Tomato Button </cps-button>

<style>
  .tomato-button::part(base) {
    border: solid 1px tomato;
    background: var(--cps-palette-neutral-0);
  }

  .tomato-button::part(base):hover {
    background: rgba(255, 99, 71, 0.1);
  }

  .tomato-button::part(base):active {
    background: rgba(255, 99, 71, 0.2);
  }

  .tomato-button::part(base):focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.33);
  }

  .tomato-button::part(label) {
    color: tomato;
  }
</style>
```

At first glance, this approach might seem a bit verbose or even limiting, but it comes with a few important advantages:

- Customizations can be made to components with explicit selectors, such as `::part(icon)`, rather than implicit selectors, such as `.button > div > span + .icon`, that are much more fragile.

- The internal structure of a component will likely change as it evolves. By exposing component parts through an API, the internals can be reworked without fear of breaking customizations as long as its parts remain intact.

- It encourages us to think more about how components are designed and how customizations should be allowed before users can take advantage of them. Once we opt a part into the component's API, it's guaranteed to be supported and can't be removed until a major version of the library is released.

Most (but not all) components expose parts. You can find them in each component's API documentation under the "CSS Parts" section.

## Custom Properties

For convenience, some components expose CSS custom properties you can override. These are not design tokens, nor do they have the same `--cps-` prefix since they're scoped to a component.

You can set custom properties on a component in your stylesheet.

```css
cps-avatar {
  --size: 6rem;
}
```

This will also work if you need to target a subset of components with a specific class.

```css
cps-avatar.your-class {
  --size: 6rem;
}
```

Alternatively, you can set them inline directly on the element.

```html
<cps-avatar style="--size: 6rem;"></cps-avatar>
```

Not all components expose CSS custom properties. For those that do, they can be found in the component's API documentation.

## Animations

Some components use animation, such as when a dialog is shown or hidden. Animations are performed using the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) rather than CSS. However, you can still customize them through CPS Elements's animation registry. If a component has customizable animations, they'll be listed in the "Animation" section of its documentation.

To customize a default animation, use the `setDefaultAnimation()` method. The function accepts an animation name (found in the component's docs) and an object with `keyframes`, and `options` or `null` to disable the animation.

This example will make all dialogs use a custom show animation.

```js
import { setDefaultAnimation } from '@cps-elements/web/utilities/animation-registry.js';

// Change the default animation for all dialogs
setDefaultAnimation('dialog.show', {
  keyframes: [
    { transform: 'rotate(-10deg) scale(0.5)', opacity: '0' },
    { transform: 'rotate(0deg) scale(1)', opacity: '1' }
  ],
  options: {
    duration: 500
  }
});
```

?> To support RTL languages in your animation, you can pass an additional property called `rtlKeyframes`. This property shares the same type as `keyframes` and will be automatically used when the component's directionality is RTL. If `rtlKeyframes` is not provided, `keyframes` will be used as a fallback.

If you only want to target a single component, use the `setAnimation()` method instead. This function accepts an element, an animation name, and an object comprised of animation `keyframes` and `options`.

In this example, only the target dialog will use a custom show animation.

```js
import { setAnimation } from '@cps-elements/web/utilities/animation-registry.js';

// Change the animation for a single dialog
const dialog = document.querySelector('#my-dialog');

setAnimation(dialog, 'dialog.show', {
  keyframes: [
    { transform: 'rotate(-10deg) scale(0.5)', opacity: '0' },
    { transform: 'rotate(0deg) scale(1)', opacity: '1' }
  ],
  options: {
    duration: 500
  }
});
```

To learn more about creating Web Animations, refer to the documentation for [`Element.animate()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate).

?> Animations respect the users `prefers-reduced-motion` setting. When this setting is enabled, animations will not be played. To disable animations for all users, pass in `null` instead of a keyframes/options object.
