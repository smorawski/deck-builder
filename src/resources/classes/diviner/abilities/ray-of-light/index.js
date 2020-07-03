import image from './ray-of-light.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rayOfLight',
  initiative: 48,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.LIGHT,
    ],
  },
  bottom: {
    moves: ['2'],
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
