import image from './dark-cloud.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'darkCloud',
  initiative: 74,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.EFFECTS.CURSE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
