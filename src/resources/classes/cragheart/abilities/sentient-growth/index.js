import image from './sentient-growth.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'sentientGrowth',
  initiative: 78,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.ACTIONS.HEAL,
    ],
  },
  bottom: {
    attacks: ['1'],
    moves: ['2'],
    tags: [
      TAGS.ACTIONS.HEAL,
    ],
  },
};
