import image from './vaccine.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'vaccine',
  initiative: 44,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.POISON,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
