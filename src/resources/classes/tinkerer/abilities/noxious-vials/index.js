import image from './noxious-vials.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'noxiousVials',
  initiative: 75,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.EFFECTS.REFRESH,
      TAGS.TARGETS.ADJACENT_ALLY,
    ],
  },
  bottom: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.POISON,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
