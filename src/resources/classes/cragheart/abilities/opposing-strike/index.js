import image from './opposing-strike.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'opposing-strike',
  initiative: 46,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
};
