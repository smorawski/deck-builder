import image from './soothing-lullaby.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'soothingLullaby',
  initiative: 11,
  image,
  level: LEVELS[2],
  top: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    tags: [
      TAGS.ACTIONS.HEAL,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
};
