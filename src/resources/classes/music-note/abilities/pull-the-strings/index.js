import image from './pull-the-strings.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'pullTheStrings',
  initiative: 20,
  image,
  level: LEVELS[6],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    attacks: ['X'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
};
