import image from './stun-shot.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stunShot',
  initiative: 20,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.STUN,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
