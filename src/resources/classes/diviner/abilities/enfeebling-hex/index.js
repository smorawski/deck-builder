import image from './enfeebling-hex.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'enfeeblingHex',
  initiative: 52,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.MULTIPLE,
      TAGS.CLASSES.DIVINER,
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
