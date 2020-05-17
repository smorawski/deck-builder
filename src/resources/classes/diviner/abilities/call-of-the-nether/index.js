import image from './call-of-the-nether.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'callOfTheNether',
  initiative: 43,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['0'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.CURSE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.CLASSES.DIVINER,
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.ACTIONS.TELEPORT,
      TAGS.OTHER.XP,
    ],
  },
};
