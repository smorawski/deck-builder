import image from './wings-of-the-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'wingsOfTheNight',
  initiative: 24,
  image,
  level: LEVELS.X,
  top: {
    attacks: ['1'],
    tags: [
      TAGS.EFFECTS.INVISIBLE,
    ],
  },
  bottom: {
    moves: ['2'],
    tags: [
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
