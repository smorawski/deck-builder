import image from './numb-the-pain.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'numbThePain',
  initiative: 35,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.STUN,
    ],
  },
};
