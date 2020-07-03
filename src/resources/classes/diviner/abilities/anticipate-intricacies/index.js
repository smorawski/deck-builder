import image from './anticipate-intricacies.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'anticipateIntricacies',
  initiative: 79,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.CLASSES.DIVINER,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
