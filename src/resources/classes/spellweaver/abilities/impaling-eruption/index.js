import image from './impaling-eruption.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'impalingEruption',
  initiative: 70,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
