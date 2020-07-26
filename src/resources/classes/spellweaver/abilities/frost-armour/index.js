import image from './frost-armour.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'frostArmour',
  initiative: 20,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
