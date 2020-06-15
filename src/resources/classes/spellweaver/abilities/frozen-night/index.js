import image from './frozen-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'frozenNight',
  initiative: 46,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['4'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.OTHER.XP,
      TAGS.INCREASE_ELEMENTS.FROST,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['3/5'],
    tags: [
      TAGS.USE_ELEMENTS.DARKNESS,
      TAGS.EFFECTS.INVISIBLE,
      TAGS.OTHER.XP,
    ],
  },
};
