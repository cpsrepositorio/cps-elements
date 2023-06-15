import type { Animation } from '../types';

export const bounceOutUp = [
  { offset: 0.2, transform: 'translate3d(0, -10px, 0) scaleY(0.985)' },
  { offset: 0.4, opacity: '1', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
  { offset: 0.45, opacity: '1', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, -2000px, 0) scaleY(3)' }
] as Animation;
