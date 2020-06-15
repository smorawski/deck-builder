import image from './open-wound.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'openWound',
  initiative: 11,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
