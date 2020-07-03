import image from './scurry.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'scurry',
  initiative: 20,
  image,
  level: LEVELS[1],
  top: {
    moves: ['3'],
    attacks: ['1'],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
