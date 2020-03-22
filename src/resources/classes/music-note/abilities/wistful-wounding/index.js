import image from './wistful-wounding.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wistfulWounding',
  initiative: 16,
  image,
  level: LEVELS.X,
  top: {
    tags: [
      TAGS.EFFECTS.WOUND,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.ACTIONS.LOOT,
      TAGS.OTHER.XP,
    ],
  },
};
