import image from './potent-potables.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'potentPotables',
  initiative: 46,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.INCREASE_HEAL,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
  },
};
