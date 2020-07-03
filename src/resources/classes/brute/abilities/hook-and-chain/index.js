import image from './hook-and-chain.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'hookAndChain',
  initiative: 42,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.PULL,
    ],
  },
  bottom: {
    moves: ['4'],
    attacks: ['X'],
  },
};
