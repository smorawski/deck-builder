import image from './black-hole.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'blackHole',
  initiative: 41,
  image,
  level: LEVELS[9],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PULL,
      TAGS.TARGETS.MULTIPLE,
    ],
  },
};
