import image from './strength-in-agony.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'strengthInAgony',
  initiative: 37,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.INCREASE_MOVE,
    ],
  },
};
