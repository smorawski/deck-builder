import image from './blistering-vortex.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'blisteringVortex',
  initiative: 21,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.INCREASE_ELEMENTS.AIR,
      TAGS.OTHER.XP,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
