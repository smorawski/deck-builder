import image from './tranquil-trill.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'tranquilTrill',
  initiative: 10,
  image,
  level: LEVELS[8],
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
      TAGS.EFFECTS.DISARM,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
};
