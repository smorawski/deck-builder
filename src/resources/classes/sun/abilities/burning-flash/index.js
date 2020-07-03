import image from './burning-flash.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'burningFlash',
  initiative: 51,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
};
