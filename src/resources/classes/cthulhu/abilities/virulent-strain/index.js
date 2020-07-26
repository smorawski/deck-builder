import image from './virulent-strain.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'virulentStrain',
  initiative: 50,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
