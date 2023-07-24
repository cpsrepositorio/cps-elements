import type { Animation } from '../types.js';

export const fadeInRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(100%, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
] as Animation;
