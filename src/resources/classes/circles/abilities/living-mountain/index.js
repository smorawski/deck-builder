import image from './living-mountain.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'livingMountain',
  initiative: 88,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
