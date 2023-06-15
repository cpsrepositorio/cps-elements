import type { Animation } from '../types';

export const rotateInUpLeft = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
] as Animation;
