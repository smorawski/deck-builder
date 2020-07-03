import image from './cold-fire.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'coldFire',
  initiative: 67,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['1/3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.FIRE,
      TAGS.USE_ELEMENTS.FROST,
      TAGS.EFFECTS.STUN,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.LOST,
    ],
  },
};
