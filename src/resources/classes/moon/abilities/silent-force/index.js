import image from './silent-force.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'silentForce',
  initiative: 91,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.CLASSES.MOON,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['6'],
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.LOST,
    ],
  },
};
