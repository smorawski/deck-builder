import image from './stinging-cloud.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'stingingCloud',
  initiative: 66,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.MUDDLE,
      TAGS.OTHER.XP,
      TAGS.TARGETS.AREA,
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
