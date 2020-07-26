import image from './hardened-spikes.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'hardenedSpikes',
  initiative: 26,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.TARGETS.ADJACENT_ALLY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.EARTH,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
