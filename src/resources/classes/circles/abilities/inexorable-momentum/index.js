import image from './inexorable-momentum.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'inexorable-momentum',
  initiative: 32,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.PIERCE,
      TAGS.USE_ELEMENTS.AIR,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.ACTIONS.CONTROL_SUMMON,
    ],
  },
};
