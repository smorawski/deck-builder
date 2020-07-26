import image from './song-of-speed.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'songOfSpeed',
  initiative: 5,
  image,
  level: LEVELS[1],
  top: {
    tags: [
      TAGS.EFFECTS.INCREASE_MOVE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.MUDDLE,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.RANGED,
      TAGS.OTHER.XP,
    ],
  },
};
