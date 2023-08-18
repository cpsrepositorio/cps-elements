import{a as e}from"./chunk.46Z4KBZ3.js";import{f as t}from"./chunk.XKNP6CD6.js";var n=t`
  ${e}

  .button__prefix,
  .button__suffix,
  .button__content {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    outline: dotted 1px red;
  }
`;export{n as a};
