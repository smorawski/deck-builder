import image from './foul-wind.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'foulWind',
  initiative: 35,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.USE_ELEMENTS.AIR,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
};
