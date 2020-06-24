import image from './black-knives.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'blackKnives',
  initiative: 44,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.MOON,
      TAGS.OTHER.RANGED,
      TAGS.DURATION.USES,
      TAGS.OTHER.LOST,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.XP,
    ],
  },
};
