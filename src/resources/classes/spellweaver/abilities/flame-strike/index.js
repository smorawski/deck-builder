import image from './flame-strike.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'flameStrike',
  initiative: 36,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.WOUND,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
