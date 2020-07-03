import image from './corrupting-embrace.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'corruptingEmbrace',
  initiative: 39,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['1', '1'],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.EFFECTS.MUDDLE,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.JUMP,
      TAGS.EFFECTS.POISON,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
