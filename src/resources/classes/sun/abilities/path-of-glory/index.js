import image from './path-of-glory.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'pathOfGlory',
  initiative: 48,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['5'],
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.BLESS,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
