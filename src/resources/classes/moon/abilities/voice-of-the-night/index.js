import image from './voice-of-the-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'voiceOfTheNight',
  initiative: 6,
  image,
  level: LEVELS[9],
  top: {
    tags: [
      TAGS.CLASSES.MOON,
      TAGS.EFFECTS.STUN,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['2'],
    attacks: ['2'],
    tags: [
      TAGS.USE_ELEMENTS.ANY,
      TAGS.EFFECTS.INVISIBLE,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
};
