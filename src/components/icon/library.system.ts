import type { IconLibrary } from './library';

/**
 * System icons are a separate library to ensure they're always available,
 * regardless of how the default icon library is configured or if its icons resolve properly.
 *
 * All components of CPS Elements use the system library instead of the default library.
 * For visual consistency, system icons are a subset of Microsoft Fluent UI System Icons.
 */
const icons = {
  caret: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z"/></svg>`,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  'chevron-down': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  'chevron-left': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  'chevron-right': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  'eye-slash': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  're-order-dots-vertical': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/></svg>`,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  'person-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  'play-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  'pause-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  'star-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  'x-lg': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  'x-circle-fill': `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `,
  'neutral-badge': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M10.214 7.591a.59.59 0 01-.052.246.62.62 0 01-.88.299L6.735 6.694v2.93a.593.593 0 01-.053.246.663.663 0 01-.334.328.656.656 0 01-.486 0 .778.778 0 01-.2-.135.685.685 0 01-.134-.193.657.657 0 01-.047-.246v-2.93l-2.55 1.442a.615.615 0 01-.304.082.656.656 0 01-.247-.047.778.778 0 01-.199-.135.778.778 0 01-.135-.2A.656.656 0 012 7.591c0-.11.029-.213.087-.31a.628.628 0 01.229-.235l2.52-1.424-2.52-1.424A.64.64 0 012 3.653a.613.613 0 01.38-.574.593.593 0 01.247-.053.58.58 0 01.304.082l2.55 1.442V1.62a.613.613 0 01.18-.44.672.672 0 01.446-.18c.086 0 .166.018.24.053a.585.585 0 01.334.328.554.554 0 01.053.24v2.93l2.549-1.442a.615.615 0 01.304-.082c.086 0 .166.018.24.053.076.03.144.076.2.135.06.055.105.123.135.199a.553.553 0 01.052.24.64.64 0 01-.316.545l-2.52 1.423 2.52 1.424c.094.055.17.133.229.234a.597.597 0 01.087.311z" fill="currentColor"/></svg>`,
  'informative-badge': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M5 2.248c0-.168.033-.328.1-.48.128-.298.365-.537.662-.668.152-.067.314-.1.486-.1.168 0 .328.033.48.1.3.13.538.368.668.668.067.152.1.312.1.48 0 .172-.033.334-.1.486-.13.3-.368.538-.668.668a1.15 1.15 0 01-.48.1c-.172 0-.334-.033-.486-.1a1.302 1.302 0 01-.662-.668 1.204 1.204 0 01-.1-.486zm.246 8.004V6.25a.99.99 0 01.076-.387 1.06 1.06 0 01.217-.316.997.997 0 01.322-.217.929.929 0 01.387-.082c.137 0 .266.027.387.082a.93.93 0 01.316.217c.094.09.166.195.217.316.055.121.082.25.082.387v4.002a.928.928 0 01-.082.387 1.06 1.06 0 01-.533.533.99.99 0 01-.387.076.99.99 0 01-.387-.076 1.141 1.141 0 01-.322-.217 1.061 1.061 0 01-.217-.316.99.99 0 01-.076-.387z" fill="currentColor"/></svg>`,
  'warning-badge': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M5.246 5.998V1.996a.99.99 0 01.076-.387 1.06 1.06 0 01.217-.316c.094-.09.201-.16.322-.211A.929.929 0 016.248 1c.137 0 .266.027.387.082a.987.987 0 01.533.527c.055.121.082.25.082.387v4.002a.929.929 0 01-.082.387.997.997 0 01-.217.322 1.06 1.06 0 01-.316.217.99.99 0 01-.387.076.99.99 0 01-.387-.076 1.14 1.14 0 01-.322-.217 1.14 1.14 0 01-.217-.322.99.99 0 01-.076-.387zM5 10c0-.172.033-.334.1-.486.128-.298.365-.537.662-.668.152-.067.314-.1.486-.1s.332.033.48.1c.3.13.538.368.668.668.067.152.1.314.1.486s-.033.334-.1.486c-.132.296-.37.532-.668.662-.151.066-.315.1-.48.1-.172 0-.334-.033-.486-.1a1.302 1.302 0 01-.662-.662A1.203 1.203 0 015 10z" fill="currentColor"/></svg>`,
  'critical-badge': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M5.997 6.887l-2.93 2.935a.605.605 0 01-.445.182.617.617 0 01-.445-.176A.616.616 0 012 9.383c0-.176.06-.324.182-.445l2.931-2.936-2.93-2.93A.6.6 0 012 2.632c0-.085.016-.167.047-.245a.585.585 0 01.13-.2.672.672 0 01.198-.128.568.568 0 01.246-.053c.172 0 .318.06.44.182l2.936 2.934 2.93-2.935a.608.608 0 01.685-.135c.076.03.144.076.2.135a.613.613 0 01.182.44c0 .17-.06.317-.182.438L6.876 6.002l2.936 2.936a.608.608 0 01.134.685.62.62 0 01-.574.381.605.605 0 01-.445-.182l-2.93-2.935z" fill="currentColor"/></svg>`,
  'success-badge': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M1 6.626a.613.613 0 01.38-.574.602.602 0 01.686.135l2.057 2.056L9.18 3.187a.608.608 0 01.685-.135.604.604 0 01.334.34.54.54 0 01.053.234c0 .172-.063.32-.188.445L4.563 9.567a.598.598 0 01-.44.187.602.602 0 01-.44-.187l-2.5-2.496A.606.606 0 011 6.626z" fill="currentColor"/></svg>`
};

const systemLibrary: IconLibrary = {
  name: 'system',
  resolver: (name: keyof typeof icons) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return '';
  }
};

export default systemLibrary;
