import image from './volatile-flame.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'volatileFlame',
  initiative: 94,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.FIRE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
};
