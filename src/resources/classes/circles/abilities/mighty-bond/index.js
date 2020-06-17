import image from './mighty-bond.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'mightyBond',
  initiative: 51,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['4'],
    tags: [
      TAGS.EFFECTS.JUMP,
    ],
  },
};
