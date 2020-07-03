import image from './reserved-energy.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'reservedEnergy',
  initiative: 88,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
