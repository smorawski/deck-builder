import image from './staff-of-visions.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'staffOfVisions',
  initiative: 27,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.EFFECTS.WOUND,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.STRENGTHEN,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
