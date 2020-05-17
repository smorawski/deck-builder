import image from './fire-orbs.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'fireOrbs',
  initiative: 69,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
