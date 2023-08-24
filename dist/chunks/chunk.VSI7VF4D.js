import{a as o,i as r}from"./chunk.FVWYSG5E.js";var a=o`
  ${r}

  :host {
    --color: var(--cps-color-stroke-skeleton);
    --accent-color: var(--cps-color-stroke-skeleton-accent);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    min-width: 0.5rem;
    height: 100%;
    min-height: 0.5rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(
      270deg,
      var(--color),
      var(--color) 35%,
      var(--accent-color) 47%,
      var(--accent-color) 53%,
      var(--color) 65%,
      var(--color)
    );
    background-size: 200vw 100vw;
    animation: sheen 4.5s linear infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  .skeleton--rounded .skeleton__indicator {
    border-radius: var(--cps-border-radius-medium);
  }

  .skeleton--rounded-corner .skeleton__indicator {
    border-radius: var(--cps-border-radius-pill);
  }

  .skeleton--rounded-full .skeleton__indicator {
    border-radius: var(--cps-border-radius-full);
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    from {
      background-position: 200vw 0;
    }
    to {
      background-position: -200vw 0;
    }
  }

  @keyframes pulse {
    0% {
      background-color: var(--color);
    }
    50% {
      background-color: var(--accent-color);
    }
    100% {
      background-color: var(--color);
    }
  }
`;export{a};
