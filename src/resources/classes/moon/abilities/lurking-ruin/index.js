import image from './lurking-ruin.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'lurkingRuin',
  initiative: 18,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.CLASSES.MOON,
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.MUDDLE,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.INVISIBLE,
    ],
  },
};
