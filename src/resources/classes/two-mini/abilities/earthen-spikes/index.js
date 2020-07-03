import image from './earthen-spikes.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'earthenSpikes',
  initiative: 11,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.INCREASE_ELEMENTS.EARTH,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.EFFECTS.RETALIATE,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
      TAGS.OTHER.LOST,
    ],
  },
};
