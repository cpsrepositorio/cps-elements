import type { Animation } from '../types.js';

export const flipOutY = [
  { offset: 0, transform: 'perspective(400px)' },
  { offset: 0.3, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: '1' },
  { offset: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0' }
] as Animation;
