import image from './inspiring-sanctity.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'inspiringSanctity',
  initiative: 79,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['8'],
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.ACTIONS.KILL_ENEMY,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
