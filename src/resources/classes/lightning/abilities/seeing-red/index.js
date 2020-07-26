import image from './seeing-red.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'seeingRed',
  initiative: 22,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
