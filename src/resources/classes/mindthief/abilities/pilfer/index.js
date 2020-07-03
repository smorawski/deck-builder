import image from './pilfer.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'pilfer',
  initiative: 68,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.ACTIONS.LOOT,
    ],
  },
  bottom: {
    attacks: ['2', '2'],
    moves: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
