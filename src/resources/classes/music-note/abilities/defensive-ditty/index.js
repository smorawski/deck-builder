import image from './defensive-ditty.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'defensiveDitty',
  initiative: 9,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.SHIELD,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.ONE_ROUND,
    ],
  },
};
