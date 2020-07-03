import image from './defensive-stance.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'defensiveStance',
  initiative: 65,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
