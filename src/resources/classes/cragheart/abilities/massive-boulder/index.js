import image from './massive-boulder.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'massiveBoulder',
  initiative: 87,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
