import type { Animation } from '../types.js';

export const fadeOutDown = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, 100%, 0)' }
] as Animation;