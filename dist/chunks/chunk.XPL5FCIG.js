import{a as c}from"./chunk.ES3EUM3T.js";import{a as r}from"./chunk.M4ACP6KD.js";import{c as o}from"./chunk.QJBMNVJB.js";var n=o`
  ${r}

  :host {
    --background-image: url(${c});
  }

  .background {
    display: block;
    position: relative;
    background-image: var(--background-image);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .background_effects,
  .background__content {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .background_effects {
    z-index: 0;
    overflow: hidden;
  }

  .background__content {
    z-index: 1;
    overflow: auto;
  }

  .background_effects::before,
  .background_effects::after {
    display: block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
  }

  .background::after {
    z-index: 2;
  }

  /* Center content */

  .background--centered .background__content {
    display: grid;
    place-items: center;
  }

  /* Variants */

  .background--base .background_effects {
    backdrop-filter: var(--cps-blur-slight) saturate(0.1);
    mix-blend-mode: var(--cps-background-blend-mode);
  }

  .background--base .background_effects::before {
    opacity: 0.5;
    background-color: var(--cps-color-background-solid-primary);
  }

  .background--base .background_effects::after {
    opacity: 0.5;
    background-color: var(--cps-color-fill-smoke);
  }

  .background--acrylic .background_effects {
    backdrop-filter: var(--cps-blur-small) saturate(0.15);
    mix-blend-mode: var(--cps-background-blend-mode);
  }

  .background--acrylic .background_effects::before {
    opacity: 0.9;
    background: var(--cps-color-background-acrylic);
  }

  .background--acrylic .background_effects::after {
    opacity: 0.05;
    background-color: var(--cps-color-fill-smoke);
  }

  .background--blurred .background_effects {
    backdrop-filter: var(--cps-blur-full) saturate(0.75);
  }

  .background--blurred .background_effects::before {
    opacity: 0.9;
    background: var(--cps-color-background-acrylic);
  }

  .background--blurred .background_effects::after {
    opacity: 0.05;
    background-color: var(--cps-color-fill-smoke);
  }
`;export{n as a};
