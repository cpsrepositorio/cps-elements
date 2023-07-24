import { backInDown } from './back_entrances/backInDown.js';
import { backInLeft } from './back_entrances/backInLeft.js';
import { backInRight } from './back_entrances/backInRight.js';
import { backInUp } from './back_entrances/backInUp.js';
import { backOutDown } from './back_exits/backOutDown.js';
import { backOutLeft } from './back_exits/backOutLeft.js';
import { backOutRight } from './back_exits/backOutRight.js';
import { backOutUp } from './back_exits/backOutUp.js';
import { bounce } from './attention_seekers/bounce.js';
import { bounceIn } from './bouncing_entrances/bounceIn.js';
import { bounceInDown } from './bouncing_entrances/bounceInDown.js';
import { bounceInLeft } from './bouncing_entrances/bounceInLeft.js';
import { bounceInRight } from './bouncing_entrances/bounceInRight.js';
import { bounceInUp } from './bouncing_entrances/bounceInUp.js';
import { bounceOut } from './bouncing_exits/bounceOut.js';
import { bounceOutDown } from './bouncing_exits/bounceOutDown.js';
import { bounceOutLeft } from './bouncing_exits/bounceOutLeft.js';
import { bounceOutRight } from './bouncing_exits/bounceOutRight.js';
import { bounceOutUp } from './bouncing_exits/bounceOutUp.js';
import { fadeIn } from './fading_entrances/fadeIn.js';
import { fadeInBottomLeft } from './fading_entrances/fadeInBottomLeft.js';
import { fadeInBottomRight } from './fading_entrances/fadeInBottomRight.js';
import { fadeInDown } from './fading_entrances/fadeInDown.js';
import { fadeInDownBig } from './fading_entrances/fadeInDownBig.js';
import { fadeInLeft } from './fading_entrances/fadeInLeft.js';
import { fadeInLeftBig } from './fading_entrances/fadeInLeftBig.js';
import { fadeInRight } from './fading_entrances/fadeInRight.js';
import { fadeInRightBig } from './fading_entrances/fadeInRightBig.js';
import { fadeInTopLeft } from './fading_entrances/fadeInTopLeft.js';
import { fadeInTopRight } from './fading_entrances/fadeInTopRight.js';
import { fadeInUp } from './fading_entrances/fadeInUp.js';
import { fadeInUpBig } from './fading_entrances/fadeInUpBig.js';
import { fadeOut } from './fading_exits/fadeOut.js';
import { fadeOutBottomLeft } from './fading_exits/fadeOutBottomLeft.js';
import { fadeOutBottomRight } from './fading_exits/fadeOutBottomRight.js';
import { fadeOutDown } from './fading_exits/fadeOutDown.js';
import { fadeOutDownBig } from './fading_exits/fadeOutDownBig.js';
import { fadeOutLeft } from './fading_exits/fadeOutLeft.js';
import { fadeOutLeftBig } from './fading_exits/fadeOutLeftBig.js';
import { fadeOutRight } from './fading_exits/fadeOutRight.js';
import { fadeOutRightBig } from './fading_exits/fadeOutRightBig.js';
import { fadeOutTopLeft } from './fading_exits/fadeOutTopLeft.js';
import { fadeOutTopRight } from './fading_exits/fadeOutTopRight.js';
import { fadeOutUp } from './fading_exits/fadeOutUp.js';
import { fadeOutUpBig } from './fading_exits/fadeOutUpBig.js';
import { flash } from './attention_seekers/flash.js';
import { flip } from './flippers/flip.js';
import { flipInX } from './flippers/flipInX.js';
import { flipInY } from './flippers/flipInY.js';
import { flipOutX } from './flippers/flipOutX.js';
import { flipOutY } from './flippers/flipOutY.js';
import { headShake } from './attention_seekers/headShake.js';
import { heartBeat } from './attention_seekers/heartBeat.js';
import { hinge } from './specials/hinge.js';
import { jackInTheBox } from './specials/jackInTheBox.js';
import { jello } from './attention_seekers/jello.js';
import { lightSpeedInLeft } from './lightspeed/lightSpeedInLeft.js';
import { lightSpeedInRight } from './lightspeed/lightSpeedInRight.js';
import { lightSpeedOutLeft } from './lightspeed/lightSpeedOutLeft.js';
import { lightSpeedOutRight } from './lightspeed/lightSpeedOutRight.js';
import { pulse } from './attention_seekers/pulse.js';
import { rollIn } from './specials/rollIn.js';
import { rollOut } from './specials/rollOut.js';
import { rotateIn } from './rotating_entrances/rotateIn.js';
import { rotateInDownLeft } from './rotating_entrances/rotateInDownLeft.js';
import { rotateInDownRight } from './rotating_entrances/rotateInDownRight.js';
import { rotateInUpLeft } from './rotating_entrances/rotateInUpLeft.js';
import { rotateInUpRight } from './rotating_entrances/rotateInUpRight.js';
import { rotateOut } from './rotating_exits/rotateOut.js';
import { rotateOutDownLeft } from './rotating_exits/rotateOutDownLeft.js';
import { rotateOutDownRight } from './rotating_exits/rotateOutDownRight.js';
import { rotateOutUpLeft } from './rotating_exits/rotateOutUpLeft.js';
import { rotateOutUpRight } from './rotating_exits/rotateOutUpRight.js';
import { rubberBand } from './attention_seekers/rubberBand.js';
import { shake } from './attention_seekers/shake.js';
import { shakeX } from './attention_seekers/shakeX.js';
import { shakeY } from './attention_seekers/shakeY.js';
import { slideInDown } from './sliding_entrances/slideInDown.js';
import { slideInLeft } from './sliding_entrances/slideInLeft.js';
import { slideInRight } from './sliding_entrances/slideInRight.js';
import { slideInUp } from './sliding_entrances/slideInUp.js';
import { slideOutDown } from './sliding_exits/slideOutDown.js';
import { slideOutLeft } from './sliding_exits/slideOutLeft.js';
import { slideOutRight } from './sliding_exits/slideOutRight.js';
import { slideOutUp } from './sliding_exits/slideOutUp.js';
import { swing } from './attention_seekers/swing.js';
import { tada } from './attention_seekers/tada.js';
import { wobble } from './attention_seekers/wobble.js';
import { zoomIn } from './zooming_entrances/zoomIn.js';
import { zoomInDown } from './zooming_entrances/zoomInDown.js';
import { zoomInLeft } from './zooming_entrances/zoomInLeft.js';
import { zoomInRight } from './zooming_entrances/zoomInRight.js';
import { zoomInUp } from './zooming_entrances/zoomInUp.js';
import { zoomOut } from './zooming_exits/zoomOut.js';
import { zoomOutDown } from './zooming_exits/zoomOutDown.js';
import { zoomOutLeft } from './zooming_exits/zoomOutLeft.js';
import { zoomOutRight } from './zooming_exits/zoomOutRight.js';
import { zoomOutUp } from './zooming_exits/zoomOutUp.js';

import { easings } from './easings/easings.js';

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
