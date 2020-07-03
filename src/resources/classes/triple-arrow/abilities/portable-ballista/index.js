import image from './portable-ballista.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'portableBallista',
  initiative: 41,
  image,
  level: LEVELS[8],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.TARGETS.AREA,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.PIERCE,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
