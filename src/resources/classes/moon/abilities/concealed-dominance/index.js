import image from './concealed-dominance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'concealedDominance',
  initiative: 35,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.ACTIONS.TELEPORT,
      TAGS.OTHER.LOST,
    ],
  },
};
