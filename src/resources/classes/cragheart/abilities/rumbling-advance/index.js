import image from './rumbling-advance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rumblingAdvance',
  initiative: 29,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.CLASSES.CRAGHEART,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
};
