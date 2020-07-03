import image from './toxic-bolt.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'toxicBolt',
  initiative: 18,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.POISON,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
  bottom: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
