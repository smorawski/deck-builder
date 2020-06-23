import image from './gravel-vortex.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'gravelVortex',
  initiative: 62,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.USE_ELEMENTS.ANY,
    ],
  },
};
