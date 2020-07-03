import image from './selfish-retribution.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'selfishRetribution',
  initiative: 12,
  image,
  level: LEVELS[8],
  top: {
    moves: ['1'],
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
