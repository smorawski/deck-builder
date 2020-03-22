import image from './melody-and-harmony.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'melodyAndHarmony',
  initiative: 78,
  image,
  level: LEVELS[5],
  top: {
    tags: [
      TAGS.DURATION.PERMANENT,
      TAGS.OTHER.LOST,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    moves: ['3'],
    attacks: ['3'],
    tags: [
      TAGS.OTHER.RANGED,
    ],
  },
};
