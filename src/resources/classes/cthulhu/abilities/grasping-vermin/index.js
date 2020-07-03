import image from './grasping-vermin.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'graspingVermin',
  initiative: 69,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['0'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
