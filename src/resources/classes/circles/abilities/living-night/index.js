import image from './living-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'livingNight',
  initiative: 82,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.ACTIONS.SUMMON,
      TAGS.EFFECTS.PIERCE,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    tags: [
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
