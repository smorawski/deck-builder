import image from './holy-strike.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'holyStrike',
  initiative: 85,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.STUN,
    ],
  },
  bottom: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
