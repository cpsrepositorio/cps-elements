import{a as r}from"./chunk.VGVDIVHV.js";import{a as o}from"./chunk.3U5NA53D.js";var i=o`
  ${r}

  :host {
    --background-navigation: var(--cps-color-background-solid-primary);
    --background-selection: var(--cps-color-background-solid-tertiary);
    --border-color: var(--cps-color-stroke-primary);
    --border-width: 1px;
    --border-radius: var(--cps-border-radius-large);
    --indicator-color: var(--background-selection);
    --padding-navigation: var(--cps-spacing-2);
    --track-color: var(--border-color);
    --track-width: 1px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .tab-group ::slotted(cps-tab-item) {
    --selected-background: var(--background-selection);
    --selected-border: var(--border-color);
  }

  .tab-group ::slotted(cps-tab-panel) {
    --background: var(--background-selection);
    --border-color: inherit;
  }

  .tab-group__nav-container {
    box-sizing: border-box;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--background-navigation);
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
    gap: 1px;
  }

  .tab-group__tabs::before {
    position: absolute;
    background: var(--track-color);
    content: '';
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--cps-transition-fast) translate ease, var(--cps-transition-fast) width ease;
    z-index: 3;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
  }

  .tab-group__body {
    display: flex;
    flex: 1;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: var(--cps-spacing-8);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    right: 0;
    left: auto;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    right: auto;
    left: 0;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    margin-top: -1px;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    flex-direction: row;
    padding: var(--padding-navigation) var(--padding-navigation) 0;
  }

  .tab-group--top .tab-group__tabs::before {
    right: 0;
    bottom: 0;
    left: 0;
    height: var(--track-width);
  }

  .tab-group--top .tab-group__indicator {
    bottom: 0;
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top.tab-group--has-scroll-controls .tab-group__nav-container {
    padding: 0 var(--cps-spacing-8);
  }

  .tab-group--top .tab-group__scroll-button {
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(cps-tab-panel) {
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    margin-bottom: -1px;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    flex-direction: row;
    padding: 0 var(--padding-navigation) var(--padding-navigation);
  }

  .tab-group--bottom .tab-group__tabs::before {
    top: 0;
    right: 0;
    left: 0;
    height: var(--track-width);
  }

  .tab-group--bottom .tab-group__indicator {
    top: 0;
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom.tab-group--has-scroll-controls .tab-group__nav-container {
    padding: 0 var(--cps-spacing-8);
  }

  .tab-group--bottom .tab-group__scroll-button {
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(cps-tab-panel) {
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    padding: var(--padding-navigation) 0 var(--padding-navigation) var(--padding-navigation);
  }

  .tab-group--start .tab-group__tabs::before {
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--track-width);
  }

  .tab-group--start .tab-group__indicator {
    right: 0;
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: 0;
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(cps-tab-panel) {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    padding: var(--padding-navigation) var(--padding-navigation) var(--padding-navigation) 0;
  }

  .tab-group--end .tab-group__tabs::before {
    top: 0;
    bottom: 0;
    left: 0;
    width: var(--track-width);
  }

  .tab-group--end .tab-group__indicator {
    left: 0;
    border-left: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: 0;
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(cps-tab-panel) {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;export{i as a};
