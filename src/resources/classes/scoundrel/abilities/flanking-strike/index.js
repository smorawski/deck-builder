import image from './flanking-strike.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'flankingStrike',
  initiative: 4,
  image,
  level: LEVELS[1],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
  bottom: {
    moves: ['5'],
  },
};
