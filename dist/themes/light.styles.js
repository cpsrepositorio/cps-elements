import { css } from "lit";

export default css`
  :root,
  :host,
  .cps-theme-light {
    color-scheme: light;
    accent-color: var(--cps-color-fill-accent-primary);

    --cps-texture-acrylic: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect opacity='0.2' width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");

    --cps-palette-neutral-0: rgb(255 255 255);
    --cps-palette-neutral-50: rgb(0 0 0 / 1.8%);
    --cps-palette-neutral-100: rgb(0 0 0 / 3.8%);
    --cps-palette-neutral-200: rgb(0 0 0 / 10%);
    --cps-palette-neutral-300: rgb(0 0 0 / 17%);
    --cps-palette-neutral-400: rgb(0 0 0 / 36%);
    --cps-palette-neutral-500: rgb(0 0 0 / 54.8%);
    --cps-palette-neutral-600: rgb(0 0 0 / 68%);
    --cps-palette-neutral-700: rgb(0 0 0 / 75%);
    --cps-palette-neutral-800: rgb(0 0 0 / 85%);
    --cps-palette-neutral-900: rgb(0 0 0 / 91%);
    --cps-palette-neutral-950: rgb(0 0 0 / 95.5%);
    --cps-palette-neutral-1000: rgb(0 0 0);

    --cps-palette-brand-50: rgb(255 241 230);
    --cps-palette-brand-100: rgb(255 220 204);
    --cps-palette-brand-200: rgb(255 179 158);
    --cps-palette-brand-300: rgb(255 121 97);
    --cps-palette-brand-400: rgb(248 73 53);
    --cps-palette-brand-500: rgb(230 16 15);
    --cps-palette-brand-600: rgb(206 2 2);
    --cps-palette-brand-700: rgb(178 0 0);
    --cps-palette-brand-800: rgb(139 1 1);
    --cps-palette-brand-900: rgb(114 3 3);
    --cps-palette-brand-950: rgb(83 4 4);

    --cps-palette-accent-50: rgb(235 255 255);
    --cps-palette-accent-100: rgb(200 250 254);
    --cps-palette-accent-200: rgb(165 243 253);
    --cps-palette-accent-300: rgb(126 231 251);
    --cps-palette-accent-400: rgb(71 212 240);
    --cps-palette-accent-500: rgb(11 169 208);
    --cps-palette-accent-600: rgb(4 133 169);
    --cps-palette-accent-700: rgb(6 110 142);
    --cps-palette-accent-800: rgb(8 91 110);
    --cps-palette-accent-900: rgb(9 71 87);
    --cps-palette-accent-950: rgb(9 50 60);

    --cps-color-state-neutral: rgb(138 138 138);
    --cps-color-state-neutral-subtle: rgb(0 0 0 / 2.41%);
    --cps-color-state-neutral-acrylic: linear-gradient(
        rgb(138 138 138 / 90%),
        rgb(138 138 138 / 90%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-informative: rgb(0 95 183);
    --cps-color-state-informative-subtle: rgba(246 246 246 / 50%);
    --cps-color-state-informative-acrylic: linear-gradient(
        rgb(246 246 246 / 90%),
        rgb(246 246 246 / 90%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-warning: rgb(157 93 0);
    --cps-color-state-warning-subtle: rgb(255 244 206);
    --cps-color-state-warning-acrylic: linear-gradient(
        rgb(255 244 206 / 90%),
        rgb(255 244 206 / 90%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-critical: rgb(196 43 28);
    --cps-color-state-critical-subtle: rgb(253 231 233);
    --cps-color-state-critical-acrylic: linear-gradient(
        rgb(253 231 233 / 90%),
        rgb(253 231 233 / 90%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-success: rgb(15 123 15);
    --cps-color-state-success-subtle: rgb(223 246 221);
    --cps-color-state-success-acrylic: linear-gradient(
        rgb(223 246 221 / 90%),
        rgb(223 246 221 / 90%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-background-solid-primary: rgb(243 243 243);
    --cps-color-background-solid-secondary: rgb(238 238 238);
    --cps-color-background-solid-tertiary: rgb(249 249 249);
    --cps-color-background-solid-quaternary: rgb(254 254 254);

    --cps-color-background-acrylic: linear-gradient(
        rgb(252 252 252 / 80%),
        rgb(252 252 252 / 80%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;
    --cps-color-background-acrylic-subtle: linear-gradient(
        rgb(252 252 252 / 40%),
        rgb(252 252 252 / 40%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;
    --cps-color-background-acrylic-base: linear-gradient(
        rgb(243 243 243 / 90%),
        rgb(243 243 243 / 90%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-backdrop: rgb(113 113 122 / 33%);

    --cps-color-fill-brand: var(--cps-palette-brand-600);
    --cps-color-fill-accent: var(--cps-palette-accent-600);
    --cps-color-fill-accent-light: var(--cps-palette-accent-500);

    --cps-color-fill-primary: rgb(255 255 255 / 70%);
    --cps-color-fill-secondary: rgb(245 245 245 / 50%);
    --cps-color-fill-tertiary: rgb(245 245 245 / 30%);
    --cps-color-fill-disabled: rgb(245 245 245 / 30%);

    --cps-color-fill-control-solid: rgb(245 255 245);
    --cps-color-fill-control-disabled-solid: rgb(180 180 180);

    --cps-color-fill-card-primary: rgb(255 255 255 / 70%);
    --cps-color-fill-card-secondary: rgb(245 245 245 / 50%);
    --cps-color-fill-card-tertiary: var(--cps-palette-neutral-0);

    --cps-color-fill-on-blurred: rgb(255 255 255 / 25%);
    --cps-color-fill-on-blurred-secondary: rgb(243 243 243 / 50%);

    --cps-color-fill-smoke: rgb(0 0 0 / 40%);

    --cps-color-fill-alt-secondary: rgb(0 0 0 / 2.41%);
    --cps-color-fill-alt-tertiary: rgb(0 0 0 / 5.78%);
    --cps-color-fill-alt-quaternary: rgb(0 0 0 / 9.24%);

    --cps-color-fill-subtle-secondary: rgb(0 0 0 / 6.05%);
    --cps-color-fill-subtle-tertiary: rgb(0 0 0 / 4.19%);

    --cps-color-fill-accent-primary: var(--cps-palette-accent-800);
    --cps-color-fill-accent-secondary: color-mix(
      in srgb,
      var(--cps-palette-accent-950) 90%,
      transparent
    );
    --cps-color-fill-accent-tertiary: color-mix(
      in srgb,
      var(--cps-palette-accent-950) 80%,
      transparent
    );
    --cps-color-fill-accent-disabled: rgb(0 0 0 / 21.69%);

    --cps-color-text-primary: rgb(0 0 0 / 89.56%);
    --cps-color-text-secondary: rgb(0 0 0 / 60.63%);
    --cps-color-text-tertiary: rgb(0 0 0 / 44.58%);
    --cps-color-text-disabled: rgb(0 0 0 / 36.14%);

    --cps-color-text-inverted-primary: rgb(255 255 255);
    --cps-color-text-inverted-secondary: rgb(255 255 255 / 70%);
    --cps-color-text-inverted-disabled: rgb(255 255 255);

    --cps-color-text-brand-primary: var(--cps-palette-brand-500);
    --cps-color-text-brand-secondary: var(--cps-palette-brand-800);
    --cps-color-text-brand-tertiary: var(--cps-palette-brand-700);

    --cps-color-text-accent-primary: var(--cps-palette-accent-600);
    --cps-color-text-accent-secondary: var(--cps-palette-accent-800);
    --cps-color-text-accent-tertiary: var(--cps-palette-accent-700);

    --cps-color-text-code-keyword: rgb(7 89 133);
    --cps-color-text-code-symbol: rgb(190 24 93);
    --cps-color-text-code-builtin: rgb(4 120 87);
    --cps-color-text-code-variable: rgb(109 40 217);
    --cps-color-text-code-function: rgb(194 65 12);
    --cps-color-text-code-important: rgb(185 28 28);

    --cps-color-stroke-primary: rgb(0 0 0 / 5.78%);
    --cps-color-stroke-secondary: rgb(0 0 0 / 16.22%);
    --cps-color-stroke-tertiary: rgb(0 0 0 / 44.58%);

    --cps-color-stroke-inverted-primary: rgb(255 255 255 / 8%);
    --cps-color-stroke-inverted-secondary: rgb(0 0 0 / 40%);
    --cps-color-stroke-inverted-tertiary: rgb(0 0 0 / 21.69%);
    --cps-color-stroke-inverted-disabled: rgb(0 0 0 / 5.78%);

    --cps-color-stroke-card-primary: rgb(0 0 0 / 5.78%);
    --cps-color-stroke-card-secondary: rgb(0 0 0 / 11.56%);

    --cps-color-stroke-separator: rgb(0 0 0 / 8.03%);

    --cps-color-stroke-skeleton: rgb(0 0 0 / 3%);
    --cps-color-stroke-skeleton-accent: rgb(0 0 0 / 6%);

    --cps-color-stroke-surface: rgb(117 117 117 / 40%);

    --cps-color-elevation-top-control: var(--cps-color-stroke-primary);
    --cps-color-elevation-bottom-control: var(--cps-color-stroke-secondary);
    --cps-color-elevation-top-accent-control: var(
      --cps-color-stroke-inverted-primary
    );
    --cps-color-elevation-bottom-accent-control: var(
      --cps-color-stroke-inverted-secondary
    );

    --cps-border-radius-small: 0.125rem;
    --cps-border-radius-medium: 0.25rem;
    --cps-border-radius-large: 0.5rem;
    --cps-border-radius-full: 50%;
    --cps-border-radius-pill: 9999px;

    --cps-shadow-inset: inset 0 -1px 0 -0.5px rgb(0 0 0 / 16.22%);
    --cps-shadow: 0 2px 4px rgb(0 0 0 / 4%);
    --cps-shadow-md: 0 2px 4px rgb(0 0 0 / 10%);
    --cps-shadow-lg: 0 4px 8px rgb(0 0 0 / 14%);
    --cps-shadow-xl: 0 8px 16px rgb(0 0 0 / 14%);
    --cps-shadow-2xl: 0 2px 21px rgb(0 0 0 / 14.74%),
      0 32px 64px rgb(0 0 0 / 18.76%);

    --cps-transition-x-slow: 1000ms;
    --cps-transition-slow: 500ms;
    --cps-transition-medium: 250ms;
    --cps-transition-fast: 150ms;
    --cps-transition-x-fast: 50ms;

    --cps-font-family-sans: "Roboto Flex", "Segoe UI", Verdana, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --cps-font-family-serif: Georgia, "Times New Roman", serif;
    --cps-font-family-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;

    --cps-font-size-3xs: 0.5rem;
    --cps-font-size-2xs: 0.625rem;
    --cps-font-size-xs: 0.75rem;
    --cps-font-size-sm: 0.875rem;
    --cps-font-size-lt: 0.9375rem;
    --cps-font-size-base: 1rem;
    --cps-font-size-lg: 1.125rem;
    --cps-font-size-xl: 1.25rem;
    --cps-font-size-2xl: 1.5rem;
    --cps-font-size-3xl: 1.875rem;
    --cps-font-size-4xl: 2.5rem;
    --cps-font-size-5xl: 3rem;
    --cps-font-size-6xl: 3.625rem;
    --cps-font-size-7xl: 4.25rem;
    --cps-font-size-8xl: 5.75rem;

    --cps-font-weight-normal: 400;
    --cps-font-weight-semibold: 600;
    --cps-font-weight-bold: 700;

    --cps-leading-none: 1;
    --cps-leading-tight: 1.25;
    --cps-leading-snug: 1.375;
    --cps-leading-normal: 1.5;
    --cps-leading-relaxed: 1.625;
    --cps-leading-loose: 2;

    --cps-tracking-tighter: -0.05em;
    --cps-tracking-tight: -0.025em;
    --cps-tracking-normal: 0em;
    --cps-tracking-wide: 0.025em;
    --cps-tracking-wider: 0.05em;
    --cps-tracking-widest: 0.1em;

    --cps-font-stamp: var(--cps-font-weight-normal) var(--cps-font-size-3xs) /
      var(--cps-font-size-2xs) var(--cps-font-family-sans);
    --cps-font-caption: var(--cps-font-weight-normal) var(--cps-font-size-2xs) /
      var(--cps-font-size-xs) var(--cps-font-family-sans);
    --cps-font-label: var(--cps-font-weight-normal) var(--cps-font-size-xs) /
      var(--cps-font-size-sm) var(--cps-font-family-sans);
    --cps-font-body: var(--cps-font-weight-normal) var(--cps-font-size-sm) /
      var(--cps-font-size-base) var(--cps-font-family-sans);
    --cps-font-body-em: var(--cps-font-weight-normal) var(--cps-font-size-lt) /
      var(--cps-font-size-base) var(--cps-font-family-sans);
    --cps-font-body-strong: var(--cps-font-weight-semibold)
      var(--cps-font-size-lt) / var(--cps-font-size-base)
      var(--cps-font-family-sans);
    --cps-font-body-large: var(--cps-font-weight-normal)
      var(--cps-font-size-base) / var(--cps-font-size-lg)
      var(--cps-font-family-sans);
    --cps-font-subtitle: var(--cps-font-weight-semibold) var(--cps-font-size-lg) /
      var(--cps-font-size-xl) var(--cps-font-family-sans);
    --cps-font-title: var(--cps-font-weight-semibold) var(--cps-font-size-xl) /
      var(--cps-font-size-2xl) var(--cps-font-family-sans);
    --cps-font-heading: var(--cps-font-weight-bold) var(--cps-font-size-4xl) /
      var(--cps-font-size-5xl) var(--cps-font-family-sans);
    --cps-font-display: var(--cps-font-weight-bold) var(--cps-font-size-7xl) /
      var(--cps-font-size-8xl) var(--cps-font-family-sans);

    --cps-spacing-px: 1px;
    --cps-spacing-0-5: 0.125rem;
    --cps-spacing-1: 0.25rem;
    --cps-spacing-1-5: 0.375rem;
    --cps-spacing-2: 0.5rem;
    --cps-spacing-2-5: 0.625rem;
    --cps-spacing-3: 0.75rem;
    --cps-spacing-3-5: 0.875rem;
    --cps-spacing-4: 1rem;
    --cps-spacing-4-5: 1.125rem;
    --cps-spacing-5: 1.25rem;
    --cps-spacing-5-5: 1.375rem;
    --cps-spacing-6: 1.5rem;
    --cps-spacing-6-5: 1.625rem;
    --cps-spacing-7: 1.75rem;
    --cps-spacing-7-5: 1.875rem;
    --cps-spacing-8: 2rem;
    --cps-spacing-8-5: 2.125rem;
    --cps-spacing-9: 2.25rem;
    --cps-spacing-9-5: 2.375rem;
    --cps-spacing-10: 2.5rem;
    --cps-spacing-11: 2.75rem;
    --cps-spacing-12: 3rem;
    --cps-spacing-14: 3.5rem;
    --cps-spacing-16: 4rem;
    --cps-spacing-18: 4.5rem;
    --cps-spacing-20: 5rem;

    --cps-blur-slight: blur(1px);
    --cps-blur-small: blur(6px);
    --cps-blur-medium: blur(12px);
    --cps-blur-large: blur(24px);
    --cps-blur-full: blur(80px);

    --cps-background-blend-mode: screen;

    --cps-focus-ring-color: var(--cps-palette-neutral-1000);
    --cps-focus-ring-style: solid;
    --cps-focus-ring-width: var(--cps-spacing-px);
    --cps-focus-ring: var(--cps-focus-ring-style) var(--cps-focus-ring-width)
      var(--cps-focus-ring-color);
    --cps-focus-ring-offset: var(--cps-spacing-px);
    --cps-focus-ring-inset: calc(var(--cps-spacing-px) * -1);

    --cps-button-font-size-small: var(--cps-font-size-xs);
    --cps-button-font-size-medium: var(--cps-font-size-sm);
    --cps-button-font-size-large: var(--cps-font-size-base);

    --cps-button-height-small: var(--cps-spacing-6);
    --cps-button-height-medium: var(--cps-spacing-8);
    --cps-button-height-large: var(--cps-spacing-10);

    --cps-button-border-width: var(--cps-spacing-px);

    --cps-icon-button-height-small: var(--cps-spacing-4);
    --cps-icon-button-height-medium: var(--cps-spacing-5-5);
    --cps-icon-button-height-large: var(--cps-spacing-9-5);

    --cps-input-height-small: var(--cps-spacing-6);
    --cps-input-height-medium: var(--cps-spacing-8);
    --cps-input-height-large: var(--cps-spacing-10);

    --cps-input-spacing-small: var(--cps-spacing-2);
    --cps-input-spacing-medium: calc(
      var(--cps-spacing-3) - var(--cps-spacing-px)
    );
    --cps-input-spacing-large: var(--cps-spacing-3-5);

    --cps-input-border-width: var(--cps-spacing-px);
    --cps-input-border-color: var(--cps-color-fill-alt-tertiary);
    --cps-input-border-bottom-width: var(--cps-spacing-0-5);
    --cps-input-border-bottom-color: var(--cps-color-text-tertiary);
    --cps-input-border-bottom-color-focus: var(--cps-color-fill-accent-primary);

    --cps-input-background: var(--cps-color-fill-primary);
    --cps-input-background-hover: var(--cps-color-fill-secondary);
    --cps-input-background-active: rgb(255 255 255);
    --cps-input-background-disabled: rgb(249 249 249 / 30%);

    --cps-input-required-content: "*";
    --cps-input-required-content-offset: calc(var(--cps-spacing-0-5) * -1);
    --cps-input-required-content-color: var(--cps-color-state-critical);

    --cps-toggle-size-small: var(--cps-spacing-4);
    --cps-toggle-size-medium: var(--cps-spacing-5);
    --cps-toggle-size-large: var(--cps-spacing-6);

    --cps-tooltip-arrow-size: calc(
      var(--cps-spacing-1-5) + var(--cps-spacing-px)
    );

    --cps-z-index-drawer: 700;
    --cps-z-index-dialog: 800;
    --cps-z-index-dropdown: 900;
    --cps-z-index-toast: 950;
    --cps-z-index-tooltip: 1000;
  }

  .cps-scroll-lock {
    padding-right: var(--cps-scroll-lock-size) !important;
    overflow: hidden !important;
  }

  .cps-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--cps-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .cps-toast-stack cps-notification {
    margin: var(--cps-spacing-4);
  }

  .cps-toast-stack cps-notification::part(base) {
    backdrop-filter: var(--cps-blur-medium);
    filter: drop-shadow(var(--cps-shadow)) drop-shadow(var(--cps-shadow-lg));
  }

  .cps-toast-stack cps-notification[variant="neutral"]::part(base),
  .cps-toast-stack cps-notification:not([variant])::part(base) {
    background: var(--cps-color-background-acrylic);
  }

  .cps-toast-stack cps-notification[variant="informative"]::part(base) {
    background: var(--cps-color-state-informative-acrylic);
  }

  .cps-toast-stack cps-notification[variant="warning"]::part(base) {
    background: var(--cps-color-state-warning-acrylic);
  }

  .cps-toast-stack cps-notification[variant="critical"]::part(base) {
    background: var(--cps-color-state-critical-acrylic);
  }

  .cps-toast-stack cps-notification[variant="success"]::part(base) {
    background: var(--cps-color-state-success-acrylic);
  }
`;
