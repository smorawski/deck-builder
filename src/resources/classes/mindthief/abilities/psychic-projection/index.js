import image from './psychic-projection.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'psychicProjection',
  initiative: 92,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.EFFECTS.SHIELD,
      TAGS.EFFECTS.STUN,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
  bottom: {
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
};
