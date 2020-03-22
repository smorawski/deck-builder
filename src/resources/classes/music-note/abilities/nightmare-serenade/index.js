import image from './nightmare-serenade.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'nightmareSerenade',
  initiative: 13,
  image,
  level: LEVELS[7],
  top: {
    tags: [
      TAGS.EFFECTS.CURSE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
      TAGS.CLASSES.MUSIC_NOTE,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.OTHER.RANGED,
      TAGS.EFFECTS.CURSE,
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
    ],
  },
};
