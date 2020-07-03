import image from './claws-of-the-night.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'clawsOfTheNight',
  initiative: 26,
  image,
  level: LEVELS[5],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.EFFECTS.POISON,
      TAGS.TARGETS.AREA,
      TAGS.USE_ELEMENTS.ANY,
      TAGS.INCREASE_ELEMENTS.DARKNESS,
      TAGS.OTHER.XP,
    ],
  },
  bottom: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.MOON,
      TAGS.DURATION.USES,
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
};
