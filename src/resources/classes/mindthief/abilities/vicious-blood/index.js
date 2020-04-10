import image from './vicious-blood.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'viciousBlood',
  initiative: 83,
  image,
  level: LEVELS[7],
  top: {
    attacks: ['2'],
    tags: [
      TAGS.CLASSES.MINDTHIEF,
      TAGS.EFFECTS.RETALIATE,
      TAGS.OTHER.XP,
      TAGS.DURATION.PERMANENT,
    ],
  },
  bottom: {
    moves: ['2'],
    attacks: ['2'],
  },
};
