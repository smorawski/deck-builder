import image from './soulfire.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'soulfire',
  initiative: 85,
  image,
  level: LEVELS[2],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.WOUND,
      TAGS.CLASSES.MOON,
      TAGS.EFFECTS.STUN,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['6'],
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.LOST,
    ],
  },
};
