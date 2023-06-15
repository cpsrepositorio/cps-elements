import { backInDown } from './back_entrances/backInDown';
import { backInLeft } from './back_entrances/backInLeft';
import { backInRight } from './back_entrances/backInRight';
import { backInUp } from './back_entrances/backInUp';
import { backOutDown } from './back_exits/backOutDown';
import { backOutLeft } from './back_exits/backOutLeft';
import { backOutRight } from './back_exits/backOutRight';
import { backOutUp } from './back_exits/backOutUp';
import { bounce } from './attention_seekers/bounce';
import { bounceIn } from './bouncing_entrances/bounceIn';
import { bounceInDown } from './bouncing_entrances/bounceInDown';
import { bounceInLeft } from './bouncing_entrances/bounceInLeft';
import { bounceInRight } from './bouncing_entrances/bounceInRight';
import { bounceInUp } from './bouncing_entrances/bounceInUp';
import { bounceOut } from './bouncing_exits/bounceOut';
import { bounceOutDown } from './bouncing_exits/bounceOutDown';
import { bounceOutLeft } from './bouncing_exits/bounceOutLeft';
import { bounceOutRight } from './bouncing_exits/bounceOutRight';
import { bounceOutUp } from './bouncing_exits/bounceOutUp';
import { fadeIn } from './fading_entrances/fadeIn';
import { fadeInBottomLeft } from './fading_entrances/fadeInBottomLeft';
import { fadeInBottomRight } from './fading_entrances/fadeInBottomRight';
import { fadeInDown } from './fading_entrances/fadeInDown';
import { fadeInDownBig } from './fading_entrances/fadeInDownBig';
import { fadeInLeft } from './fading_entrances/fadeInLeft';
import { fadeInLeftBig } from './fading_entrances/fadeInLeftBig';
import { fadeInRight } from './fading_entrances/fadeInRight';
import { fadeInRightBig } from './fading_entrances/fadeInRightBig';
import { fadeInTopLeft } from './fading_entrances/fadeInTopLeft';
import { fadeInTopRight } from './fading_entrances/fadeInTopRight';
import { fadeInUp } from './fading_entrances/fadeInUp';
import { fadeInUpBig } from './fading_entrances/fadeInUpBig';
import { fadeOut } from './fading_exits/fadeOut';
import { fadeOutBottomLeft } from './fading_exits/fadeOutBottomLeft';
import { fadeOutBottomRight } from './fading_exits/fadeOutBottomRight';
import { fadeOutDown } from './fading_exits/fadeOutDown';
import { fadeOutDownBig } from './fading_exits/fadeOutDownBig';
import { fadeOutLeft } from './fading_exits/fadeOutLeft';
import { fadeOutLeftBig } from './fading_exits/fadeOutLeftBig';
import { fadeOutRight } from './fading_exits/fadeOutRight';
import { fadeOutRightBig } from './fading_exits/fadeOutRightBig';
import { fadeOutTopLeft } from './fading_exits/fadeOutTopLeft';
import { fadeOutTopRight } from './fading_exits/fadeOutTopRight';
import { fadeOutUp } from './fading_exits/fadeOutUp';
import { fadeOutUpBig } from './fading_exits/fadeOutUpBig';
import { flash } from './attention_seekers/flash';
import { flip } from './flippers/flip';
import { flipInX } from './flippers/flipInX';
import { flipInY } from './flippers/flipInY';
import { flipOutX } from './flippers/flipOutX';
import { flipOutY } from './flippers/flipOutY';
import { headShake } from './attention_seekers/headShake';
import { heartBeat } from './attention_seekers/heartBeat';
import { hinge } from './specials/hinge';
import { jackInTheBox } from './specials/jackInTheBox';
import { jello } from './attention_seekers/jello';
import { lightSpeedInLeft } from './lightspeed/lightSpeedInLeft';
import { lightSpeedInRight } from './lightspeed/lightSpeedInRight';
import { lightSpeedOutLeft } from './lightspeed/lightSpeedOutLeft';
import { lightSpeedOutRight } from './lightspeed/lightSpeedOutRight';
import { pulse } from './attention_seekers/pulse';
import { rollIn } from './specials/rollIn';
import { rollOut } from './specials/rollOut';
import { rotateIn } from './rotating_entrances/rotateIn';
import { rotateInDownLeft } from './rotating_entrances/rotateInDownLeft';
import { rotateInDownRight } from './rotating_entrances/rotateInDownRight';
import { rotateInUpLeft } from './rotating_entrances/rotateInUpLeft';
import { rotateInUpRight } from './rotating_entrances/rotateInUpRight';
import { rotateOut } from './rotating_exits/rotateOut';
import { rotateOutDownLeft } from './rotating_exits/rotateOutDownLeft';
import { rotateOutDownRight } from './rotating_exits/rotateOutDownRight';
import { rotateOutUpLeft } from './rotating_exits/rotateOutUpLeft';
import { rotateOutUpRight } from './rotating_exits/rotateOutUpRight';
import { rubberBand } from './attention_seekers/rubberBand';
import { shake } from './attention_seekers/shake';
import { shakeX } from './attention_seekers/shakeX';
import { shakeY } from './attention_seekers/shakeY';
import { slideInDown } from './sliding_entrances/slideInDown';
import { slideInLeft } from './sliding_entrances/slideInLeft';
import { slideInRight } from './sliding_entrances/slideInRight';
import { slideInUp } from './sliding_entrances/slideInUp';
import { slideOutDown } from './sliding_exits/slideOutDown';
import { slideOutLeft } from './sliding_exits/slideOutLeft';
import { slideOutRight } from './sliding_exits/slideOutRight';
import { slideOutUp } from './sliding_exits/slideOutUp';
import { swing } from './attention_seekers/swing';
import { tada } from './attention_seekers/tada';
import { wobble } from './attention_seekers/wobble';
import { zoomIn } from './zooming_entrances/zoomIn';
import { zoomInDown } from './zooming_entrances/zoomInDown';
import { zoomInLeft } from './zooming_entrances/zoomInLeft';
import { zoomInRight } from './zooming_entrances/zoomInRight';
import { zoomInUp } from './zooming_entrances/zoomInUp';
import { zoomOut } from './zooming_exits/zoomOut';
import { zoomOutDown } from './zooming_exits/zoomOutDown';
import { zoomOutLeft } from './zooming_exits/zoomOutLeft';
import { zoomOutRight } from './zooming_exits/zoomOutRight';
import { zoomOutUp } from './zooming_exits/zoomOutUp';

import { easings } from './easings/easings';

export const animations = {
  bounce,
  flash,
  headShake,
  heartBeat,
  jello,
  pulse,
  rubberBand,
  shake,
  shakeX,
  shakeY,
  swing,
  tada,
  wobble,
  backInDown,
  backInLeft,
  backInRight,
  backInUp,
  backOutDown,
  backOutLeft,
  backOutRight,
  backOutUp,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInBottomLeft,
  fadeInBottomRight,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInTopLeft,
  fadeInTopRight,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutBottomLeft,
  fadeOutBottomRight,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutTopLeft,
  fadeOutTopRight,
  fadeOutUp,
  fadeOutUpBig,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  lightSpeedInLeft,
  lightSpeedInRight,
  lightSpeedOutLeft,
  lightSpeedOutRight,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  hinge,
  jackInTheBox,
  rollIn,
  rollOut,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
  easings
};
