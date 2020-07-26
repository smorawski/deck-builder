import image from './defiance-of-death.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'defianceOfDeath',
  initiative: 31,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.LIGHTNING,
      TAGS.EFFECTS.INCREASE_ATTACK,
    ],
  },
  bottom: {
    tags: [
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
    ],
  },
};
