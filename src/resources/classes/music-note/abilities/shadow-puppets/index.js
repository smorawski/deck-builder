import image from './shadow-puppets.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'shadowPuppets',
  initiative: 52,
  image,
  level: LEVELS[9],
  top: {
    moves: ['4'],
    tags: [
      TAGS.ACTIONS.CONTROL_ENEMY,
      TAGS.EFFECTS.JUMP,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
