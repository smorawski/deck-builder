import image from './duality-shards.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'dualityShards',
  initiative: 39,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PUSH,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PULL,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
