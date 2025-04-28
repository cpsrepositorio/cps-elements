import { css } from "lit";

export default css`
  :host,
  .cps-theme-dark {
    color-scheme: dark;
    accent-color: var(--cps-color-fill-accent-primary);

    --cps-texture-acrylic: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect opacity='0.1' width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");

    --cps-palette-neutral-0: rgb(0 0 0);
    --cps-palette-neutral-50: rgb(255 255 255 / 4.2%);
    --cps-palette-neutral-100: rgb(255 255 255 / 9%);
    --cps-palette-neutral-200: rgb(255 255 255 / 14.8%);
    --cps-palette-neutral-300: rgb(255 255 255 / 25%);
    --cps-palette-neutral-400: rgb(255 255 255 / 32.2%);
    --cps-palette-neutral-500: rgb(255 255 255 / 45%);
    --cps-palette-neutral-600: rgb(255 255 255 / 64%);
    --cps-palette-neutral-700: rgb(255 255 255 / 83%);
    --cps-palette-neutral-800: rgb(255 255 255 / 89.8%);
    --cps-palette-neutral-900: rgb(255 255 255 / 96%);
    --cps-palette-neutral-950: rgb(255 255 255 / 97.9%);
    --cps-palette-neutral-1000: rgb(255 255 255);

    --cps-palette-brand-50: rgb(83 4 4);
    --cps-palette-brand-100: rgb(114 3 3);
    --cps-palette-brand-200: rgb(139 1 1);
    --cps-palette-brand-300: rgb(178 0 0);
    --cps-palette-brand-400: rgb(206 2 2);
    --cps-palette-brand-500: rgb(230 16 15);
    --cps-palette-brand-600: rgb(248 73 53);
    --cps-palette-brand-700: rgb(255 121 97);
    --cps-palette-brand-800: rgb(255 179 158);
    --cps-palette-brand-900: rgb(255 220 204);
    --cps-palette-brand-950: rgb(255 241 230);

    --cps-palette-accent-50: rgb(9 50 60);
    --cps-palette-accent-100: rgb(9 71 87);
    --cps-palette-accent-200: rgb(8 91 110);
    --cps-palette-accent-300: rgb(6 110 142);
    --cps-palette-accent-400: rgb(4 133 169);
    --cps-palette-accent-500: rgb(11 169 208);
    --cps-palette-accent-600: rgb(71 212 240);
    --cps-palette-accent-700: rgb(126 231 251);
    --cps-palette-accent-800: rgb(165 243 253);
    --cps-palette-accent-900: rgb(200 250 254);
    --cps-palette-accent-950: rgb(235 255 255);

    --cps-color-state-neutral: rgb(157 157 157);
    --cps-color-state-neutral-subtle: rgb(255 255 255 / 3.26%);
    --cps-color-state-neutral-acrylic: linear-gradient(
        rgb(157 157 157 / 96%),
        rgb(157 157 157 / 96%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-informative: rgb(96 205 255);
    --cps-color-state-informative-subtle: rgba(255 255 255 / 3.26%);
    --cps-color-state-informative-acrylic: linear-gradient(
        rgb(48 48 48 / 96%),
        rgb(48 48 48 / 96%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-warning: rgb(252 225 0);
    --cps-color-state-warning-subtle: rgb(67 53 25);
    --cps-color-state-warning-acrylic: linear-gradient(
        rgb(67 53 25 / 96%),
        rgb(67 53 25 / 96%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-critical: rgb(255 153 164);
    --cps-color-state-critical-subtle: rgb(68 39 38);
    --cps-color-state-critical-acrylic: linear-gradient(
        rgb(68 39 38 / 96%),
        rgb(68 39 38 / 96%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-state-success: rgb(108 203 95);
    --cps-color-state-success-subtle: rgb(57 61 27);
    --cps-color-state-success-acrylic: linear-gradient(
        rgb(57 61 27 / 96%),
        rgb(57 61 27 / 96%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-background-solid-primary: rgb(32 32 32);
    --cps-color-background-solid-secondary: rgb(28 28 28);
    --cps-color-background-solid-tertiary: rgb(40 40 40);
    --cps-color-background-solid-quaternary: rgb(44 44 44);

    --cps-color-background-acrylic: linear-gradient(
        rgb(44 44 44 / 88%),
        rgb(44 44 44 / 88%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;
    --cps-color-background-acrylic-subtle: linear-gradient(
        rgb(44 44 44 / 44%),
        rgb(44 44 44 / 44%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;
    --cps-color-background-acrylic-base: linear-gradient(
        rgb(32 32 32 / 95%),
        rgb(32 32 32 / 95%)
      ),
      var(--cps-texture-acrylic) 0/75px repeat fixed;

    --cps-color-backdrop: rgba(0 0 0 / 43%);

    --cps-color-fill-brand: var(--cps-palette-brand-500);
    --cps-color-fill-accent: var(--cps-palette-accent-600);
    --cps-color-fill-accent-light: var(--cps-palette-accent-600);

    --cps-color-fill-primary: rgb(255 255 255 / 6.05%);
    --cps-color-fill-secondary: rgb(255 255 255 / 8.37%);
    --cps-color-fill-tertiary: rgb(255 255 255 / 3.26%);
    --cps-color-fill-disabled: rgb(255 255 255 / 4.19%);

    --cps-color-fill-card-primary: rgb(255 255 255 / 5.12%);
    --cps-color-fill-card-secondary: rgb(255 255 255 / 3.26%);
    --cps-color-fill-card-tertiary: rgb(20 20 20);

    --cps-color-fill-on-blurred: rgb(255 255 255 / 3.59%);
    --cps-color-fill-on-blurred-secondary: rgb(32 32 32 / 80%);

    --cps-color-fill-smoke: rgb(0 0 0 / 40%);

    --cps-color-fill-alt-secondary: rgb(0 0 0 / 10%);
    --cps-color-fill-alt-tertiary: rgb(255 255 255 / 5.78%);
    --cps-color-fill-alt-quaternary: rgb(255 255 255 / 6.98%);

    --cps-color-fill-subtle-secondary: rgb(255 255 255 / 6.05%);
    --cps-color-fill-subtle-tertiary: rgb(255 255 255 / 4.19%);

    --cps-color-fill-accent-primary: var(--cps-palette-accent-700);
    --cps-color-fill-accent-secondary: rgb(71 212 240 / 90%);
    --cps-color-fill-accent-tertiary: rgb(11 169 208 / 80%);
    --cps-color-fill-accent-disabled: rgb(255 255 255 / 15.81%);

    --cps-color-text-primary: var(--cps-palette-neutral-1000);
    --cps-color-text-secondary: rgb(255 255 255 / 78.6%);
    --cps-color-text-tertiary: rgb(255 255 255 / 54.42%);
    --cps-color-text-disabled: rgb(255 255 255 / 36.28%);

    --cps-color-text-inverted-primary: rgb(0 0 0);
    --cps-color-text-inverted-secondary: rgb(0 0 0 / 70%);
    --cps-color-text-inverted-disabled: rgb(255 255 255 / 53.02%);

    --cps-color-text-brand-primary: var(--cps-palette-brand-800);
    --cps-color-text-brand-secondary: var(--cps-palette-brand-700);
    --cps-color-text-brand-tertiary: var(--cps-palette-brand-600);

    --cps-color-text-accent-primary: var(--cps-palette-accent-800);
    --cps-color-text-accent-secondary: var(--cps-palette-accent-700);
    --cps-color-text-accent-tertiary: var(--cps-palette-accent-600);

    --cps-color-text-code-keyword: rgb(186 230 253);
    --cps-color-text-code-symbol: rgb(249 168 212);
    --cps-color-text-code-builtin: rgb(110 231 183);
    --cps-color-text-code-variable: rgb(196 181 253);
    --cps-color-text-code-function: rgb(253 186 116);
    --cps-color-text-code-important: rgb(252 165 165);

    --cps-color-stroke-primary: rgb(255 255 255 / 6.98%);
    --cps-color-stroke-secondary: rgb(255 255 255 / 9.3%);

    --cps-color-stroke-inverted-primary: rgb(255 255 255 / 8%);
    --cps-color-stroke-inverted-secondary: rgb(0 0 0 / 14%);
    --cps-color-stroke-inverted-tertiary: rgb(0 0 0 / 21.69%);
    --cps-color-stroke-inverted-disabled: rgb(0 0 0 / 20%);

    --cps-color-stroke-card-primary: rgb(0 0 0 / 10%);
    --cps-color-stroke-card-secondary: rgb(0 0 0 / 36.28%);

    --cps-color-stroke-separator: rgb(255 255 255 / 8.37%);

    --cps-color-stroke-skeleton: rgb(255 255 255 / 3%);
    --cps-color-stroke-skeleton-accent: rgb(255 255 255 / 6%);

    --cps-color-stroke-surface: rgb(117 117 117 / 40%);

    --cps-color-elevation-top-control: var(--cps-color-stroke-secondary);
    --cps-color-elevation-bottom-control: var(--cps-color-stroke-primary);
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

    --cps-shadow-inset: inset 0 1px 0 -0.5px rgb(255 255 255 / 9.3%);
    --cps-shadow: 0 2px 4px rgb(0 0 0 / 13%);
    --cps-shadow-md: 0 2px 4px rgb(0 0 0 / 26%);
    --cps-shadow-lg: 0 4px 8px rgb(0 0 0 / 26%);
    --cps-shadow-xl: 0 8px 16px rgb(0 0 0 / 26%);
    --cps-shadow-2xl: 0 2px 21px rgb(0 0 0 / 37%), 0 32px 64px rgb(0 0 0 / 37%);

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

    --cps-background-blend-mode: multiply;

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
    --cps-input-background-active: rgb(38 38 38 / 70%);
    --cps-input-background-disabled: var(--cps-color-fill-disabled);

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
