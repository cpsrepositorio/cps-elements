import type { Animation } from '../types';

export const fadeOutRightBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(2000px, 0, 0)' }
] as Animation;
