import type { Animation } from '../types';

export const slideInLeft = [
  { offset: 0, transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
] as Animation;
