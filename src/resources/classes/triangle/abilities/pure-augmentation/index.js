import image from './pure-augmentation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'pureAugmentation',
  initiative: 48,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.FROST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.FIRE,
    ],
  },
};
