import image from './focused-aggression.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'focusedAggression',
  initiative: 31,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
  bottom: {
    attacks: ['5'],
    tags: [
      TAGS.CLASSES.TWO_MINI,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
