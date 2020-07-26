import image from './crippling-poison.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'cripplingPoison',
  initiative: 30,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.OTHER.XP,
    ],
  },
};
