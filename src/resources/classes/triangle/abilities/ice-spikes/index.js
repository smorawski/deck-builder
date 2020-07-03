import image from './ice-spikes.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'iceSpikes',
  initiative: 40,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.MULTIPLE,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['5'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.IMMOBILIZE,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.INCREASE_ELEMENTS.EARTH,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
