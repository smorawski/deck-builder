import image from './disorienting-dirge.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'disorientingDirge',
  initiative: 14,
  image,
  level: LEVELS[4],
  top: {
    tags: [
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.EFFECTS.BLESS,
      TAGS.TARGETS.MULTIPLE,
      TAGS.OTHER.XP,
    ],
  },
};
