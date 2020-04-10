import image from './lumbering-bash.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'lumberingBash',
  initiative: 85,
  image,
  level: LEVELS[8],
  top: {
    moves: ['2'],
    attacks: ['5'],
    tags: [
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
};
