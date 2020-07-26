import image from './the-minds-weakness.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'theMindsWeakness',
  initiative: 75,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['1'],
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.EFFECTS.INCREASE_ATTACK,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
    ],
  },
  bottom: {
    attacks: ['1'],
    tags: [
      TAGS.EFFECTS.WOUND,
    ],
  },
};
