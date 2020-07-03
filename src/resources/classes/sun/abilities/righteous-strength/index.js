import image from './righteous-strength.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'righteousStrength',
  initiative: 18,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.EFFECTS.BLESS,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    moves: ['3'],
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
