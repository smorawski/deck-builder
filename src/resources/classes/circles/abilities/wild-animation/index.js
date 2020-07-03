import image from './wild-animation.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wildAnimation',
  initiative: 92,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.POISON,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.INCREASE_ELEMENTS.AIR,
    ],
  },
};
