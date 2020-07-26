import image from './scroll-of-blizzards.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'scrollOfBlizzards',
  initiative: 46,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
    ],
  },
};
