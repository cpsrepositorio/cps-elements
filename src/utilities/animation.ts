import { animations } from './animations-core/index.js';
export type { Animation } from './animations-core/types';

export { animations };

/** Gets a list of all supported animation names. */
export function getAnimationNames() {
  return Object.entries(animations)
    .filter(([name]) => name !== 'easings')
    .map(([name]) => name);
}

/** Gets a list of all supported easing function names. */
export function getEasingNames() {
  return Object.entries(animations.easings).map(([name]) => name);
}
