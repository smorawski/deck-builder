import image from './vital-strike.png';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'vitalStrike',
  initiative: 38,
  image,
  level: LEVELS[3],
  top: {
    attacks: ['7'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
    ],
  },
  bottom: {
    moves: ['4'],
  },
};
