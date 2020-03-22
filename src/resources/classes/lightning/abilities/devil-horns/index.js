import image from './devil-horns.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'devilHorns',
  initiative: 31,
  image,
  level: LEVELS[6],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.TARGETS.AREA,
      TAGS.EFFECTS.WOUND,
      TAGS.INCREASE_ELEMENTS.FIRE,
    ],
  },
  bottom: {
    attacks: ['4'],
    tags: [
      TAGS.OTHER.XP,
    ],
  },
};
