import image from './feedback-loop.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'feedbackLoop',
  initiative: 79,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.CLASSES.MINDTHIEF,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.EFFECTS.MUDDLE,
    ],
  },
};
