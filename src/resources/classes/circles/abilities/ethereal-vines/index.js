import image from './ethereal-vines.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'etherealVines',
  initiative: 30,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.EFFECTS.IMMOBILIZE,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
