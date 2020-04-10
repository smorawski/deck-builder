import image from './rock-tunnel.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'rockTunnel',
  initiative: 41,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.CLASSES.CRAGHEART,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.EFFECTS.JUMP,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
