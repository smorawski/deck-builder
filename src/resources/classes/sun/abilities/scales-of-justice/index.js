import image from './scales-of-justice.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'scalesOfJustice',
  initiative: 68,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.OTHER.XP,
      TAGS.EFFECTS.STUN,
    ],
  },
};
