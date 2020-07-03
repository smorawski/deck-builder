import image from './divine-intervention.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'divineIntervention',
  initiative: 9,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.INCREASE_ELEMENTS.LIGHT,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
