import image from './raw-enhancement.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rawEnhancement',
  initiative: 48,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.AIR,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.FROST,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.EARTH,
    ],
  },
};
