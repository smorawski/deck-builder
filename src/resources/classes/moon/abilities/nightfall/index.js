import image from './nightfall.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'nightfall',
  initiative: 73,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    attacks: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
};
