import image from './eyes-of-the-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'eyesOfTheNight',
  initiative: 35,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.EFFECTS.INVISIBLE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['5'],
    tags: [
      TAGS.USE_ELEMENTS.LIGHT,
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.ADJACENT_ENEMY,
      TAGS.TARGETS.MULTIPLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
};
