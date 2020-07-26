import image from './gruesome-advantage.jpg';
import TAGS from '../../../../tags';
import { LEVELS } from '../../../../other';

export default {
  name: 'gruesomeAdvantage',
  initiative: 62,
  image,
  level: LEVELS[4],
  top: {
    attacks: ['3'],
    tags: [
      TAGS.OTHER.XP,
      TAGS.OTHER.LOST,
      TAGS.CLASSES.SCOUNDREL,
    ],
  },
  bottom: {
    moves: ['7'],
  },
};
