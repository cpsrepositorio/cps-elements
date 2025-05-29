import{a as o}from"./chunk.VGVDIVHV.js";import{a as r}from"./chunk.3U5NA53D.js";var t=r`
  ${o}

  :host {
    --indicator-height: var(--cps-spacing-1);
    --track-height: var(--cps-spacing-px);

    --indicator-color: var(--cps-color-fill-accent);
    --indicator-pause-color: var(--cps-color-state-warning);
    --indicator-success-color: var(--cps-color-state-success);
    --indicator-error-color: var(--cps-color-state-critical);
    --track-color: var(--cps-color-stroke-tertiary);

    display: block;
  }

  .progress-bar {
    position: relative;
    height: max(var(--indicator-height), var(--track-height));
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: var(--cps-border-radius-pill);
  }

  .progress-bar__track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color);
    border-radius: var(--cps-border-radius-pill);
  }

  .progress-bar__indicator {
    position: absolute;
    height: var(--indicator-height);
    font: var(--cps-font-body);
    color: var(--label-color);
    border-radius: var(--cps-border-radius-pill);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transition: 10ms width, 250ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Sheen effect */
  .progress-bar__indicator::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      270deg,
      transparent,
      transparent 35%,
      var(--sheen-color) 47%,
      var(--sheen-color) 53%,
      transparent 65%,
      transparent
    );
    background-size: 200vw 100vw;
    animation: sheen 4s linear infinite;
  }

  /* Status */
  .progress-bar--status-default .progress-bar__indicator {
    background-color: var(--indicator-color);
  }

  .progress-bar--status-default .progress-bar__indicator::before {
    --sheen-color: color-mix(in srgb, var(--indicator-color) 0%, var(--cps-color-stroke-tertiary) 55%);
  }

  .progress-bar--status-pause .progress-bar__indicator {
    background-color: var(--indicator-pause-color);
  }

  .progress-bar--status-success .progress-bar__indicator {
    background-color: var(--indicator-success-color);
  }

  .progress-bar--status-error .progress-bar__indicator {
    background-color: var(--indicator-error-color);
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @keyframes indeterminate {
    0% { left: -50%; }
    75%, 100% { left: 100%; }
  }

  @keyframes indeterminate-rtl {
    0% { right: -50%; }
    75%, 100% { right: 100%; }
  }

  @keyframes sheen {
    from {
      background-position: -200vw 0;
    }
    to {
      background-position: 200vw 0;
    }
  }
`;export{t as a};
